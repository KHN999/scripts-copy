/**
 * Builds return.html for အိမ်ပြန်ရောက်ပြီးသားလူ (The One Who Already Came Home).
 *
 *   node gen-return.mjs
 *
 * Shot prompts are read from the board rather than re-derived here, so the sheet
 * and the film can never disagree about what a shot is.
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-return.mjs";
import { MM_REF } from "./mm-return.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "1wr7eppn6x1";

/** Act headings, keyed by the shot they begin at. */
const ACT = {
  1: "I · The message",
  28: "II · The locked door",
  54: "III · The gate",
  84: "IV · What the camera saw",   // 83 is the rice — still that night, not the tape
  95: "V · Two months later",       // the two-months line opens this shot
};

const db = new Database("/Users/puraidointern/video-lab/data/lab.db");
const rows = db.prepare(
  "SELECT idx, units, image_prompt FROM scenes WHERE project_id=? ORDER BY idx").all(PROJECT);
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
    prompt: r.image_prompt,
    lines: JSON.parse(r.units).map((u) => u.text),
    mm: s.g || "",
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

const NOTE =
  `ဒီဇာတ်လမ်းက <b>ရန်ကုန်၊ ခေတ်ပြိုင်</b> — ရွာဇာတ်လမ်းတွေနဲ့ မတူဘူး။ ဖုန်း၊ တက္ကစီ၊ CCTV တွေ <b>ပါရမယ်</b>။ `
  + `<br><br>⚠️ အရေးအကြီးဆုံး နှစ်ချက် — (၁) <b>“သူ” ရဲ့ မျက်နှာကို ဘယ်ပုံမှာမှ ရှင်းရှင်းလင်းလင်း မပြရဘူး</b>။ `
  + `ကျောခိုင်း၊ နောက်ကမီးထိုး၊ အရိပ်ထဲ၊ ဒါမှမဟုတ် ဝါးထားရမယ်။ (၂) <b>ကိုခန့်ရဲ့ ဘယ်ဘက်နားရွက်အောက်က မှဲ့</b> — `
  + `ပုံတိုင်းမှာ တစ်ထပ်တည်း ဖြစ်ရမယ်။ shot ${shots.findIndex((s) => s.title.includes("Mole")) + 1} မှာ အဲဒါက ဇာတ်လမ်းရဲ့ အလှည့်အပြောင်း။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ ရှိတယ်။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/return.html", buildPage({
  title: "အိမ်ပြန်ရောက်ပြီးသားလူ — image prompts",
  subtitle: `THE ONE WHO ALREADY CAME HOME · ${shots.length} shots · 16:9 · Copy a prompt, paste it into `
    + `Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "return.done.v1",
  note: NOTE, nav: NAV("return"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Locations — one plate per recurring setting", items: refs.slice(CAST.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label}  — "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(14)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss      : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
