/**
 * Builds hour.html for တစ်နာရီစာ လူသေ.
 *
 *   node gen-hour.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, PROPS, LOCS } from "./data-hour.mjs";
import { MM_REF, NOTE_MM } from "./mm-hour.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "wtkiowwapl0";

const ACT = {
  1: "I · The audio file",
  5: "II · Ne Lin",
  7: "III · The shop",
  11: "IV · Two coffins",
  16: "V · The envelopes",
  23: "VI · Start",
  32: "VII · My voice",
  38: "VIII · His face",
  46: "IX · The lens cap",
  51: "X · The scratches",
  57: "XI · What they need",
  64: "XII · Getting out",
  76: "XIII · Exactly one hour",
};

const db = new Database("/Users/puraidointern/video-lab/data/lab.db");
const rows = db.prepare(
  "SELECT idx, units FROM scenes WHERE project_id=? ORDER BY idx").all(PROJECT);
db.close();
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
    /**
     * Camera first and alone, then the light, then the frame, then the short
     * continuity block and the style tail. The head of a prompt is the part the
     * model reliably reads, so it holds the one decision everything else
     * depends on.
     */
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
  mm: (MM_REF[c.name] || "") + (i < CAST.length ? PLATE_MM : ""),
  prompt: `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct subject; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`
    + (i < CAST.length ? plate(c.pose) : ""),
}));

const NOTE = NOTE_MM + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/hour.html", buildPage({
  title: "တစ်နာရီစာ လူသေ — image prompts",
  subtitle: `A CORPSE FOR ONE HOUR · ${shots.length} shots · 16:9 · Copy a prompt, paste it into `
    + `Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "hour.done.v1",
  slug: "hour",
  note: NOTE, nav: NAV("hour"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Props — the two objects the film turns on",
      items: refs.slice(CAST.length, CAST.length + PROPS.length) },
    { heading: "Locations — build the back room most carefully",
      items: refs.slice(CAST.length + PROPS.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF} (${CAST.length} people + ${PROPS.length} props + ${LOCS.length} locations)`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(28)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(14)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  from inside the coffin: ${SCENES.filter((s) => s.k === "inside").length} shots`);
console.log(`  the red thread        : ${shots.filter((s) => s.rev?.startsWith("thread")).length} shots`);
console.log(`  the wall clock        : ${shots.filter((s) => s.rev?.startsWith("clock")).length} shots`);
console.log(`  the envelopes         : ${shots.filter((s) => s.rev?.startsWith("envelopes")).length} shots`);
console.log(`  missing gloss         : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
