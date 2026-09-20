/**
 * Builds b13.html for အောက်ဆုံးထပ်.
 *
 *   node gen-b13.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-b13.mjs";
import { MM_REF, NOTE_MM } from "./mm-b13.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "gnxoug7wrzk";

const ACT = {
  1: "I · The room with nobody in it",
  5: "II · Ma Nwe Nwe",
  9: "III · The lift",
  13: "IV · Six",
  17: "V · Four",
  27: "VI · Two",
  34: "VII · Ground",
  39: "VIII · The descent",
  44: "IX · The bottom floor",
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
     * Camera first and alone, then what this frame contains, then the short
     * continuity block and the style tail. Bulk at the head of a prompt is the
     * only thing the model reliably reads, so it holds the one decision that
     * makes every later sentence satisfiable or not.
     */
    prompt: `Shot ${n} of ${rows.length} — "${s.t}".\n\n${s.cam}\n\n${s.time}\n\n${s.p}\n\n`
      + `${s.cont}\n\n${s.style}`,
    lines: JSON.parse(r.units).map((u) => u.text),
    mm: s.g || "",
    rev: s.rev || null,
  };
});

const NREF = CAST.length + LOCS.length;
const refs = [...CAST, ...LOCS].map((c, i) => ({
  ...c,
  mm: (MM_REF[c.name] || "") + (i < CAST.length ? PLATE_MM : ""),
  prompt: `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct subject; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`
    + (i < CAST.length ? plate(c.pose) : ""),
}));

const NOTE = NOTE_MM + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။ `
  + `⚠️ <b>ငရဲအတွက် reference မလုပ်ရဘူး — မီးတောက် မရှိဘူး။</b>`;

await writeFile("/Users/puraidointern/ghost-prompts-site/b13.html", buildPage({
  title: "အောက်ဆုံးထပ် — image prompts",
  subtitle: `THE BOTTOM FLOOR · ${shots.length} shots · 16:9 · Copy a prompt, paste it into `
    + `Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "b13.done.v1",
  slug: "b13",
  note: NOTE, nav: NAV("b13"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Locations — one plate per recurring setting", items: refs.slice(CAST.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(30)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(14)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).length} shots`);
console.log(`  missing gloss      : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
