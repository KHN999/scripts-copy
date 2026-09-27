/**
 * Builds fear.html for မနှင်းဆီ.
 *
 *   node gen-fear.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, PROPS, LOCS } from "./data-fear.mjs";
import { MM_REF, NOTE_MM } from "./mm-fear.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM, PLATE_MM_GROUP } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "fear";

const ACT = {
  1: "I · Under my desk",
  6: "II · What I do",
  11: "III · The body arrives",
  21: "IV · The doorway",
  26: "V · Come and help",
  34: "VI · Hnin Ei",
  41: "VII · She is called",
  49: "VIII · You can see",
  56: "IX · The pages",
  64: "X · The inheritance",
  70: "XI · Her hands",
  76: "XII · The thread",
  83: "XIII · Burn it",
  92: "XIV · They got their hands back",
  101: "XV · Tell my mother",
  104: "XVI · Afterwards",
  107: "XVII · The plate of rice",
  111: "XVIII · What I remember",
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

await writeFile("/Users/puraidointern/ghost-prompts-site/fear.html", buildPage({
  title: "သရဲတွေတောင် ကြောက်တဲ့လူ — image prompts",
  subtitle: `THE MAN EVEN GHOSTS FEAR · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, `
    + `and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "fear.done.v1",
  slug: "fear",
  note: NOTE, nav: NAV("fear"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Props — the ribbon is the thread of the whole film",
      items: refs.slice(CAST.length, CAST.length + PROPS.length) },
    { heading: "Locations — the intake desk and the hall",
      items: refs.slice(CAST.length + PROPS.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF} (${CAST.length} people + ${PROPS.length} props + ${LOCS.length} locations)`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(30)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(18)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  shots on the dead   : ${SCENES.filter((s) => (s.w ?? []).some((w) => w === "နှင်းအိ" || w === "အမျိုးသားကြီး")).length}`);
console.log(`  missing gloss       : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
