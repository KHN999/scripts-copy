/**
 * Builds extraman.html for အိမ်မှာ လူတစ်ယောက် ပိုလာတယ်.
 *
 *   node gen-extraman.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import { SCENES, CAST, PROPS, LOCS, ACT } from "./data-extraman.mjs";
import { labRows } from "./units.mjs";
import { MM_REF, NOTE_MM } from "./mm-extraman.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM, PLATE_MM_GROUP } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "extraman";


/**
 * This board is authored HERE, so the data file is the source and the lab is
 * built from it through the import endpoint. labRows falls back to SCENES when
 * there is no snapshot, which is exactly the case for a new story.
 */
const rows = labRows(PROJECT, SCENES);
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

await writeFile("/Users/puraidointern/ghost-prompts-site/extraman.html", buildPage({
  title: "အိမ်မှာ လူတစ်ယောက် ပိုလာတယ် — image prompts",
  subtitle: `ONE MORE PERSON IN THE HOUSE · ${shots.length} shots · 16:9 · Copy a prompt, paste it `
    + `into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "extraman.done.v1",
  slug: PROJECT,
  note: NOTE, nav: NAV(PROJECT),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Props — the red thread is what the whole film turns on",
      items: refs.slice(CAST.length, CAST.length + PROPS.length) },
    { heading: "Locations — the house, and two memories", items: refs.slice(CAST.length + PROPS.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF} (${CAST.length} people + ${PROPS.length} props + ${LOCS.length} locations)`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(40)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(18)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  Min Khant first appears: shot ${
  SCENES.findIndex((s) => (s.w ?? []).includes("မင်းခန့်")) + 1} of ${SCENES.length}`);
console.log(`  missing gloss       : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
