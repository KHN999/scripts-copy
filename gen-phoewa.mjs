/**
 * Builds phoewa.html for ဖိုးဝရှေ့မှာ မလိမ်နဲ့.
 *
 *   node gen-phoewa.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-phoewa.mjs";
import { MM_REF } from "./mm-phoewa.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "6xgwglt20ja";

const ACT = {
  1: "I · Tied to the shelf",
  6: "II · After she left",
  12: "III · The junk shop",
  20: "IV · It moves on the shelf",
  31: "V · Beside my pillow",
  40: "VI · The pencil line",
  49: "VII · Back to the shop",
  58: "VIII · Her handwriting",
  76: "IX · Locked in",
  86: "X · What the boy saw",
  104: "XI · The hammer",
  116: "XII · The back room",
  128: "XIII · What I became",
  140: "XIV · The aunt's house",
  163: "XV · Tell the truth",
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
  `⚠️ <b>ဖိုးဝရုပ်က ရိုးရာ ဖိုးဝရုပ်အစစ် ဖြစ်ရမယ်။</b> ချည်သားခရင်မ်ရောင် ကိုယ်လုံးဖောင်းဖောင်း၊ `
  + `ဦးခေါင်းကြီးကြီး၊ <b>ချည်မျှင်အမည်းဆံပင် နှစ်ဖက်ခွဲပြီး အဝါရောင်ကြိုးနဲ့စည်း</b>၊ မျက်ခွံပေါ် အပြာရောင်၊ `
  + `နှုတ်ခမ်းနီ၊ ရင်ဘတ်မှာ ရွှေရောင်ဆွဲကြိုးပုံ၊ ခါးမှာ <b>ကွက်ကြားလုံချည်အစစ် ရှေ့မှာချည်ထား</b>။ `
  + `⚠️ အရေးအကြီးဆုံးက <b>ပါးနှစ်ဖက်က သနပ်ခါး — အဝါရောင်ဝိုင်းကို အစက်လေးတွေနဲ့ ဝန်းရံထားတာ</b>။ `
  + `ဒါက ဖိုးဝရုပ်ဆိုတာ သိစေတဲ့ အမှတ်အသား။ ခေါင်းကတော့ ဆေးအောက်မှာ စက္ကူ — စာတွေက အဲဒီအထဲမှာ ရှိနေတာ။`
  + `<br><br>⚠️⚠️ <b>မျက်နှာအမူအရာက ပုံတိုင်းမှာ အတိအကျ တစ်ထပ်တည်း ဖြစ်ရမယ်။</b> ဆိုင်မှာရော၊ စင်ပေါ်မှာရော၊ `
  + `ခေါင်းအုံးဘေးမှာရော၊ အဆုံးမှာရော — <b>အတူတူ</b>။ ပြောင်းလဲတာက <b>ဘယ်နေရာမှာ ရှိလဲ၊ ဘယ်ဘက်ကို မျက်နှာမူလဲ</b> ပဲ။ `
  + `မျက်နှာကို ပိုဒေါသထွက်အောင်၊ ပိုကြောက်စရာဖြစ်အောင် လုပ်လိုက်ရင် ဇာတ်လမ်း ပျက်သွားပြီ။`
  + `<br><br>⚠️ <b>နောက်ဖေးအလုပ်ခန်းထဲကို ဘယ်တော့မှ မပြရဘူး။</b> တံခါးက နှစ်ခါ လက်မလေးငါးလက်ပဲ ဟတယ် — `
  + `အဲဒီလောက်ပဲ။ <b>အလောင်း၊ သွေး၊ အရိပ်အမြွက် ဘာမှ မပါရဘူး။</b>`
  + `<br><br>⚠️ <b>ကလေးက အများအားဖြင့် တိတ်ဆိတ်တယ်။</b> အော်ခေါ်တဲ့ scene တွေမှာတော့ ဇာတ်ညွှန်းအတိုင်း ပြပါ။ ငိုရင် အသံမထွက်အောင် ထိန်းတတ်တယ် — `
  + `အဲဒီအကျင့်ကို ဘယ်လိုရလာလဲဆိုတာက ဇာတ်လမ်းရဲ့ အဖြေ။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/phoewa.html", buildPage({
  title: "ဖိုးဝရှေ့မှာ မလိမ်နဲ့ — image prompts",
  subtitle: `DON'T LIE IN FRONT OF PHO WA · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "phoewa.done.v1",
  slug: "phoewa",
  note: NOTE, nav: NAV("phoewa"),
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
