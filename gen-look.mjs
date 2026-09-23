/**
 * Builds look.html for ဘယ်သူမှ ကျွန်မကို မကြည့်ကြဘူး.
 *
 *   node gen-look.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-look.mjs";
import { MM_REF, NOTE_MM } from "./mm-look.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "kx1zbbg8lbd";

const ACT = {
  1: "I · Nobody looks at me",
  7: "II · Thun Nadi",
  13: "III · The shop",
  23: "IV · The house",
  28: "V · The bathroom",
  35: "VI · Pan Ei Kari",
  41: "VII · Two in the morning",
  51: "VIII · The things that do not work",
  57: "IX · Seven days",
  65: "X · The photograph",
  74: "XI · The phone camera",
  85: "XII · The merit",
  93: "XIII · She cannot leave",
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
     * Camera first and alone, then the clock, then what this frame contains,
     * then the continuity block and the style tail. Bulk at the head of a
     * prompt is the only part the model reliably reads, so it holds the one
     * decision that makes every later sentence satisfiable or not.
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
  + `⚠️ <b>ပျက်စီးနေတဲ့မျက်နှာအတွက် reference လုံးဝ မလုပ်ရဘူး</b> — ဒီဇာတ်လမ်းမှာ အဲဒီမျက်နှာကို `
  + `ဘယ်တော့မှ ရှင်းရှင်းလင်းလင်း မပြဘူး။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/look.html", buildPage({
  title: "ဘယ်သူမှ ကျွန်မကို မကြည့်ကြဘူး — image prompts",
  subtitle: `NOBODY LOOKS AT ME · ${shots.length} shots · 16:9 · Copy a prompt, paste it into `
    + `Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "look.done.v1",
  slug: "look",
  note: NOTE, nav: NAV("look"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Locations — one plate per recurring setting", items: refs.slice(CAST.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(36)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(16)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  mirror motif       : ${shots.filter((s) => s.rev?.startsWith("mirror")).length} shots`);
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).length} shots`);
console.log(`  missing gloss      : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
