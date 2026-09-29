/**
 * Builds mahninsi.html for မနှင်းဆီ.
 *
 *   node gen-mahninsi.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import { SCENES, CAST, PROPS, LOCS } from "./data-mahninsi.mjs";
import { labRows } from "./units.mjs";
import { MM_REF, NOTE_MM } from "./mm-mahninsi.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM, PLATE_MM_GROUP } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "mahninsi";

const ACT = {
  1: "I · The name we do not say",
  5: "II · Zaw Ye",
  12: "III · Thet Paing",
  20: "IV · The news",
  27: "V · The night he vanished",
  33: "VI · Seven years later",
  45: "VII · The photograph",
  53: "VIII · The husband",
  60: "IX · The hut by the pond",
  69: "X · The ring",
  75: "XI · He came back",
  87: "XII · The custom",
};

/**
 * Scenes come from the data file, which is the source of truth.
 *
 * This used to read the lab's SQLite file to cross-check that the board and
 * the lab agreed. The lab is now built FROM this board through the import
 * endpoint, so that check compared a thing against itself — and the database
 * is no longer on this machine to read.
 */
const rows = labRows("mahninsi", SCENES);
if (rows.length !== SCENES.length)
  throw new Error(`board has ${rows.length} shots, data file has ${SCENES.length}`);

let act = "";
const shots = rows.map((r) => {
  const n = r.idx + 1;
  const s = SCENES[r.idx];
  if (ACT[n]) act = ACT[n];
  return {
    id: String(n), title: s.t, act,
    who: s.w ?? [], where: s.l ?? null,
    prompt: `Shot ${n} of ${rows.length} — "${s.t}".\n\n${s.cam}\n\n${s.time}\n\n${s.p}\n\n`
      + `${s.cont}\n\n${s.style}`,
    lines: JSON.parse(r.units).map((u) => u.text),
    mm: s.g || "",
    rev: s.rev || null,
  };
});

const sources = [...CAST, ...PROPS, ...LOCS];
const NREF = sources.length;
const refs = sources.map((c, i) => ({
  ...c,
  redo: c.redo || null,
  mm: (MM_REF[c.name] || "") + (i < CAST.length ? (c.group ? PLATE_MM_GROUP : PLATE_MM) : ""),
  prompt: `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct subject; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`
    + (i < CAST.length ? plate(c.pose, c.group) : ""),
}));

const NOTE = NOTE_MM + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/mahninsi.html", buildPage({
  title: "မနှင်းဆီ — image prompts",
  subtitle: `MA HNIN SI · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, `
    + `and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "mahninsi.done.v1",
  slug: "mahninsi",
  note: NOTE, nav: NAV("mahninsi"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Props — the red htamein recurs throughout",
      items: refs.slice(CAST.length, CAST.length + PROPS.length) },
    { heading: "Locations — the main room and its mirror matter most",
      items: refs.slice(CAST.length + PROPS.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF} (${CAST.length} people + ${PROPS.length} props + ${LOCS.length} locations)`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(30)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(18)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  shots inside glass  : ${SCENES.filter((s) => s.k === "mirror" || s.k === "photo").length}`);
console.log(`  missing gloss       : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
