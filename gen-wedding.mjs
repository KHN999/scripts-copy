/**
 * Builds wedding.html for လယ်ကွင်းအလယ်က မင်္ဂလာဆောင်.
 *
 *   node gen-wedding.mjs   (but prefer `node build.mjs` — nav is baked in)
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, PROPS, LOCS } from "./data-wedding.mjs";
import { MM_REF, NOTE_MM } from "./mm-wedding.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "jzc55wd9zxp";

const ACT = {
  1: "I · A wedding with no groom",
  9: "II · Nyi Lin",
  15: "III · By daylight there is nothing",
  20: "IV · Seven years ago",
  35: "V · They came down the lane",
  46: "VI · What happened to Htet Min",
  51: "VII · Where is he",
  56: "VIII · They were outside",
  60: "IX · The well",
  75: "X · They walked away",
  78: "XI · Morning",
  82: "XII · The old man under the tree",
  90: "XIII · Who were you talking to",
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
     * continuity block and the style tail. On this board the camera line is
     * doing more work than usual — eleven shots share one fixed viewpoint and
     * the film has no engine if it drifts.
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

await writeFile("/Users/puraidointern/ghost-prompts-site/wedding.html", buildPage({
  title: "လယ်ကွင်းအလယ်က မင်္ဂလာဆောင် — image prompts",
  subtitle: `THE WEDDING IN THE MIDDLE OF THE FIELD · ${shots.length} shots · 16:9 · Copy a `
    + `prompt, paste it into Google Flow, and attach the listed references. `
    + `ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "wedding.done.v1",
  slug: "wedding",
  note: NOTE, nav: NAV("wedding"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Props — the flower recurs four times",
      items: refs.slice(CAST.length, CAST.length + PROPS.length) },
    { heading: "Locations — the field plate matters most",
      items: refs.slice(CAST.length + PROPS.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF} (${CAST.length} people + ${PROPS.length} props + ${LOCS.length} locations)`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(34)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(16)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  the fixed field view: ${SCENES.filter((s) => s.k === "field").length} shots`);
console.log(`  the white flower    : ${shots.filter((s) => s.rev?.startsWith("flower")).length} shots`);
console.log(`  missing gloss       : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
