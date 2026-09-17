/**
 * Builds wall.html for ကြိုးပေါ်က အဝတ်တွေ.
 *
 *   node gen-wall.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-wall.mjs";
import { MM_REF, NOTE_MM } from "./mm-wall.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "p9fqne1nso8";

const ACT = {
  1: "I · The room",
  3: "II · The second night",
  7: "III · The third night",
  10: "IV · What is behind that wall",
  13: "V · The fourth night",
  18: "VI · The line under the picture",
  21: "VII · The landlady",
  25: "VIII · Inside",
  28: "IX · The recording",
  31: "X · What she did not know",
  34: "XI · The hammer",
  37: "XII · Why did nobody look",
  39: "XIII · It comes back",
  42: "XIV · Thank you",
  45: "XV · After",
  47: "XVI · ROOM_2",
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
  + `⚠️ <b>ပျောက်သွားတဲ့သူအတွက် reference မလုပ်ရဘူး။</b>`;

await writeFile("/Users/puraidointern/ghost-prompts-site/wall.html", buildPage({
  title: "နံရံအတွင်းက ခြေသံ — image prompts",
  subtitle: `FOOTSTEPS INSIDE THE WALL · ${shots.length} shots · 16:9 · Copy a prompt, paste it into `
    + `Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "wall.done.v1",
  slug: "wall",
  note: NOTE, nav: NAV("wall"),
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
