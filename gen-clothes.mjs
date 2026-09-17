/**
 * Builds clothes.html for ကြိုးပေါ်က အဝတ်တွေ.
 *
 *   node gen-clothes.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-clothes.mjs";
import { MM_REF, NOTE_MM } from "./mm-clothes.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "6knzljliadv";

const ACT = {
  1: "I · The building",
  5: "II · May Myat",
  8: "III · The habit",
  14: "IV · The jacket",
  18: "V · The release",
  26: "VI · What he found out",
  31: "VII · The rule",
  37: "VIII · The fall",
  42: "IX · The storage room",
  46: "X · U Kyaw",
  55: "XI · What happened",
  58: "XII · Goodbye",
  65: "XIII · A month",
  67: "XIV · His own clothes",
  71: "XV · The thing in the dark",
  75: "XVI · All of it at once",
  78: "XVII · The handprint",
  81: "XVIII · The door",
  84: "XIX · The last of it",
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
    prompt: `Shot ${n} of ${rows.length} — "${s.t}".\n\n${s.cam}\n\n${s.p}\n\n`
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
  + `⚠️ <b>အမှောင်ထဲက အရာအတွက် reference မလုပ်ရဘူး။</b>`;

await writeFile("/Users/puraidointern/ghost-prompts-site/clothes.html", buildPage({
  title: "ကြိုးပေါ်က အဝတ်တွေ — image prompts",
  subtitle: `THE CLOTHES ON THE LINE · ${shots.length} shots · 16:9 · Copy a prompt, paste it into `
    + `Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "clothes.done.v1",
  slug: "clothes",
  note: NOTE, nav: NAV("clothes"),
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
