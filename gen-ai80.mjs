/**
 * Builds ai80.html for ကုတင်အောက်က လူနာစောင့်.
 *
 *   node gen-ai80.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-ai80.mjs";
import { MM_REF } from "./mm-ai80.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "qa4p319rrcb";

const ACT = {
  1: "I · The trend",
  8: "II · The fourth image",
  15: "III · A real photograph",
  23: "IV · She asked it again",
  32: "V · Ko Zaw Lin",
  36: "VI · House No. 42",
  41: "VII · Under the floor",
  46: "VIII · The tape",
  53: "IX · Why do I look like her",
  57: "X · Her future",
  61: "XI · The night",
  68: "XII · The door",
  76: "XIII · Through the camera",
  83: "XIV · The route out",
  87: "XV · A month later",
  92: "XVI · Generating your next memory",
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
  `⚠️ <b>မျက်နှာတစ်ခုတည်း၊ မိန်းကလေးနှစ်ယောက်။</b> သွန်း (၂၀၂၆) နဲ့ မခင်စန်း (၁၉၈၇) ဟာ `
  + `<b>မျက်နှာအတိအကျ တူတယ်</b> — ဆွေမျိုးတော်တာ မဟုတ်ဘူး။ ကျန်တာအားလုံးက သူတို့ကို ခွဲခြားပေးရမယ် — `
  + `သွန်းက ခေတ်ပေါ်အဝတ်နဲ့ ဆံပင်ချထား၊ မခင်စန်းက ၁၉၈၇ မြန်မာဝတ်စုံနဲ့ ဆံထုံး။ `
  + `<b>အဝတ်အစားနဲ့ ဖလင်ပုံစံကြည့်ရုံနဲ့ ဘယ်သူလဲ မခွဲနိုင်ရင် အဲဒီပုံ ကျရှုံးပြီ။</b>`
  + `<br><br>⚠️ <b>ပုံစံနှစ်မျိုး — ဘယ်တော့မှ မရောရဘူး။</b> <b>အစစ် (၂၀၂၆)</b> — သန့်ရှင်းတဲ့ ခေတ်ပေါ် `
  + `digital ဓာတ်ပုံ၊ သဘာဝအရောင်။ <b>AI ပုံ (၁၉၈၇)</b> — အရောင်ဖျော့ ၈၀ ခေတ်ဖလင်၊ အစက်ကြမ်း၊ `
  + `အဝါဖန်၊ focus ပျော့၊ ညာဘက်အောက်ထောင့်မှာ <b>လိမ္မော်ရောင် date stamp</b>။ `
  + `ပုံတစ်ပုံဟာ တစ်မျိုးတည်းပဲ ဖြစ်ရမယ်။ ကြောက်စရာက အဲဒီအဆက်မှာ ရှိတယ်။`
  + `<br><br>⚠️ <b>ဒီဇာတ်လမ်းမှာတော့ စာလုံးတွေ ခွင့်ပြုထားတယ် — ဒါပေမယ့် ရက်စွဲတွေအတွက်ပဲ။</b> `
  + `တခြားဇာတ်လမ်းတွေမှာ စာလုံး လုံးဝပိတ်ထားပေမယ့် ဒီမှာ <b>date stamp က ဇာတ်လမ်းကိုယ်တိုင်</b> — `
  + `17 OCT 1987၊ 16 SEP 2026၊ 2027၊ AGE: 26၊ 17 OCT 2027။ အဲဒီပုံတွေမှာ `
  + `<b>ရိုက်ရမယ့် စာလုံးအတိအကျကို prompt ထဲမှာ ရေးပေးထားတယ် — အဲဒါတစ်ခုတည်းပဲ ပါရမယ်</b>။ `
  + `ကျန်တဲ့ပုံတွေမှာတော့ စာလုံး မပါရဘူး၊ ဖုန်း UI ကို ပုံသဏ္ဌာန်နဲ့ အလင်းရောင်အဖြစ်ပဲ ပြပါ။`
  + `<br><br>⚠️ <b>အဖေ့မျက်နှာ ဘယ်တော့မှ မပေါ်ရဘူး။</b> တံခါးဝက အမည်းရောင်အရိပ်၊ `
  + `ဒါမှမဟုတ် မျက်စိနဲ့မမြင်ရဘဲ ဖုန်း camera ထဲမှာပဲ မြင်ရတဲ့ပုံသဏ္ဌာန်။ `
  + `<b>ကြမ်းပြင်အောက်မှာ အလောင်းမရှိဘူး — အိတ်တစ်လုံးပဲ ရှိတယ်။</b>`
  + `<br><br>⚠️ <b>မခင်စန်းက လူဆိုး မဟုတ်ဘူး။</b> အစပိုင်းမှာ ကြောက်နေတယ်၊ နောက်ပိုင်းမှာ `
  + `<b>သတိပေးနေတာ</b> — လက်ညှိုးထိုး၊ ခေါင်းခါ၊ သွန်းကို အပြင်ထွက်အောင် လမ်းညွှန်တာ။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/ai80.html", buildPage({
  title: "၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး — image prompts",
  subtitle: `THE CARETAKER UNDER THE BED · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "ai80.done.v1",
  slug: "ai80",
  note: NOTE, nav: NAV("ai80"),
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
