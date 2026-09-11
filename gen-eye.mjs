/**
 * Builds eye.html for ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ (The Man Who Drowned in an Empty Tank).
 *
 *   node gen-drown.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-eye.mjs";
import { MM_REF } from "./mm-eye.mjs";
import { buildPage } from "./page.mjs";
import { PLATE, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "et0wyo2vkp9";

const ACT = {
  1: "I · The eye",
  5: "II · The inventory",
  10: "III · The knock",
  14: "IV · Nothing opens",
  20: "V · She comes down the stairs",
  29: "VI · Between the walls",
  34: "VII · The upstairs room",
  43: "VIII · What we were inside",
  47: "IX · Cornered upstairs",   // the roof itself lifts at 55
  69: "X · Their faces",
  73: "XI · Which of us is which",
  85: "XII · Home",
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
    + (i < CAST.length ? PLATE : ""),
}));

const NOTE =
  `⚠️ <b>အရွယ်အစားက ဇာတ်လမ်းတစ်ခုလုံး။</b> အထဲရောက်ပြီးတဲ့နောက် ပုံတိုင်းမှာ သူတို့က `
  + `<b>လက်မလေးလက်လောက်ပဲ ရှိတယ်</b>ဆိုတာ ထင်ရှားရမယ် — သစ်သားလက်ရာက ကြမ်းပျဉ်လို ကြီးနေတယ်၊ `
  + `စပီကာက အဆောက်အအုံလို၊ ဖုန်မှုန့်က လိပ်ပြာလို။ အရွယ်အစား မသေချာတဲ့ပုံက ပျက်သွားပြီ။`
  + `<br><br>⚠️ <b>အရုပ်က အရုပ်ပဲ။</b> ကြွေမျက်နှာ၊ ဆေးနဲ့ဆွဲထားတဲ့အပြုံး၊ ဒူးမှာ စက်လုံးအဆစ်၊ `
  + `လက်အဆစ်မှာ အရစ်သုံးရစ်၊ ခြေဖဝါးမှာ ထုထားတဲ့စာ။ <b>ပုပ်တာ၊ အသား၊ သွေး လုံးဝ မပါရဘူး။</b>`
  + `<br><br>⚠️ <b>အပြင်ကလူတွေက ကြင်နာတယ်။</b> အပြင်ကကိုဇင်နဲ့ အပြင်ကမေက သာမန်လူတွေ — `
  + `သူတို့က ဆွဲထုတ်ပေးတယ်၊ အဝတ်ပေါ်ချပေးတယ်၊ မျက်ရည်ကျတယ်။ <b>သူတို့ကို ကြောက်စရာလုပ်လိုက်ရင် `
  + `အဆုံးသတ် ပျက်သွားပြီ</b> — ဘယ်သူမှ မှားမလုပ်ခဲ့လို့ နာတာ။`
  + `<br><br>⚠️ <b>မျက်လုံးက သာမန်လူ့မျက်လုံး</b> — အညိုရောင်၊ သွေးကြောသေးသေးတွေနဲ့။ ကြီးလို့ ကြောက်စရာဖြစ်တာ၊ `
  + `ပုံပျက်လို့ မဟုတ်ဘူး။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/eye.html", buildPage({
  title: "ပြတင်းပေါက်အပြင်က မျက်လုံး — image prompts",
  subtitle: `THE EYE OUTSIDE THE WINDOW · ${shots.length} shots · 16:9 · Copy a prompt, paste `
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `paste it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "eye.done.v1",
  slug: "eye",
  note: NOTE, nav: NAV("eye"),
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
