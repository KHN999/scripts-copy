/**
 * Builds drown.html for ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ (The Man Who Drowned in an Empty Tank).
 *
 *   node gen-drown.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-drown.mjs";
import { MM_REF } from "./mm-drown.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "oyqaecgczep";

const ACT = {
  1: "I · Water in his lungs",
  5: "II · The job",
  19: "III · Down in the tank",
  32: "IV · Something under the floor",
  42: "V · Drowning in dry air",
  51: "VI · The lid",           // the light goes; the lid starts moving at 52
  66: "VII · What took hold",
  72: "VIII · Out",
  84: "IX · The hospital",      // 84-89 is the ward; the history begins at 90
  90: "X · Twenty years ago",
  100: "XI · Since then",
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
    prompt: `Shot ${n} of ${rows.length} — "${s.t}".\n\n${s.p}\n\n${s.d}\n\n${s.style}`,
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
  `⚠️ <b>အရေးအကြီးဆုံး — ရေကန်က ခြောက်နေရမယ်။</b> ကန်ထဲက ပုံတိုင်းမှာ ဖုန်ထူထူ၊ ခြောက်နေတဲ့ဘိလပ်မြေ၊ `
  + `ခြောက်နေတဲ့ခြေရာတွေပဲ ရှိရမယ်။ <b>ရေအိုင်၊ စိုစွတ်တဲ့နံရံ၊ ရေစက်ကျတာ၊ ရောင်ပြန်ဟပ်တာ လုံးဝ မထည့်ရဘူး။</b> `
  + `ရေက တစ်နေရာတည်းမှာပဲ ပေါ်ရမယ် — ပါးစပ်၊ ဖိနပ်ထဲ၊ ခြေဖဝါး။ ကြမ်းပြင်ပေါ် ဘယ်တော့မှ မရောက်ရဘူး။ `
  + `ကန်ကို ရေဖြည့်လိုက်ရင် ဇာတ်လမ်းတစ်ခုလုံး ပျက်သွားပြီ။`
  + `<br><br>⚠️ <b>အောက်ကအရာကို ဘယ်ပုံမှာမှ လူပုံသဏ္ဌာန်အပြည့် မပြရဘူး။</b> လက်ချောင်းတွေ၊ အသားချိုင့်ရာ၊ `
  + `ဖုန်လှုပ်တာ — အဲဒါတွေပဲ။ အလောင်း၊ အရိုး၊ သွေး မပါရဘူး။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/drown.html", buildPage({
  title: "ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ — image prompts",
  subtitle: `THE MAN WHO DROWNED IN AN EMPTY TANK · ${shots.length} shots · 16:9 · Copy a prompt, paste `
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "drown.done.v1",
  slug: "drown",
  note: NOTE, nav: NAV("drown"),
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
