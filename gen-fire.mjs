/**
 * Builds fire.html for ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ (The Man Who Drowned in an Empty Tank).
 *
 *   node gen-drown.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-fire.mjs";
import { MM_REF } from "./mm-fire.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "d7vae6xlaz9";

const ACT = {
  1: "I · He wasn't born yet",
  4: "II · The job",
  11: "III · The building",
  20: "IV · The room with no dust",   // 18-19 are the door; the room is 20
  23: "V · The boy in the wardrobe",
  31: "VI · His mother",
  35: "VII · The night of the fire",  // the calendar itself lands at 40
  42: "VIII · A room under the room",  // the crack is 42
  49: "IX · Give him the child",
  57: "X · Back in the dust",
  60: "XI · The same scar",
  72: "XII · My father",
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
  mm: MM_REF[c.name] || "",
  prompt: `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct subject; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`,
}));

const NOTE =
  `⚠️ <b>ဦးလှမြင့်က အောင်ဖြိုး ၂၈ နှစ် အိုသွားတာ။</b> Reference နှစ်ခုက **လူတစ်ယောက်တည်း** ဖြစ်ရမယ် — `
  + `မျက်ခုံးဖြောင့်ဖြောင့်၊ ပြုံးရင် ဘယ်ဘက်ပါးတစ်ဖက်တည်း ချိုင့်တာ၊ နှုတ်ခမ်းကိုက်တဲ့အကျင့်။ `
  + `အမှတ်အသားနှစ်ခုကို <b>ပထမပိုင်းကတည်းက</b> မြင်ရရမယ် — <b>ဘယ်လက်က အပူလောင်ဒဏ်ရာ</b> (shot 8) နဲ့ `
  + `<b>ဘယ်ဘက်ဒူး မကောင်းတာ</b> (shot 7)။ နောက်ပိုင်းမှာ အောင်ဖြိုးက အဲဒီဒဏ်ရာနှစ်ခုကို ရသွားတာ။`
  + `<br><br>⚠️ <b>ကလေးက ထက်နိုင် ၄ နှစ်သားဘဝ။</b> အမှတ်အသားက <b>ညာဘက်မျက်ခုံးအပေါ်က မှဲ့</b> နဲ့ `
  + `<b>ရှေ့ဘီးတစ်ဖက်ပျောက်နေတဲ့ အပြာရောင်ကားလေး</b>။ နှစ်ခုလုံး အဆုံးမှာ ခေတ်ပြိုင်ထဲ ပြန်ပေါ်လာတယ်။`
  + `<br><br>⚠️ <b>အမေ့မျက်နှာရဲ့ ညာဘက်ကို ဘယ်ပုံမှာမှ မပြရဘူး။</b> ဇာတ်လမ်းထဲမှာ ကိုယ်တိုင်က `
  + `"မမြင်ချင်ခဲ့ဘူး" လို့ ပြောထားတာ — အဲဒါကို လိုက်နာရမယ်။ ဘယ်ဘက်က သာမန်မျက်နှာ၊ ဒဏ်ရာမရှိ။`
  + `<br><br>⚠️ <b>မီးလောင်ညက သေဆုံးသူတွေကို လူပုံစံအပြည့် မပြရဘူး</b> — တံခါးအောက်က လက်တွေ `
  + `(လက်ကောက်ဝတ်ကနေ မီးခိုးထွက်နေတယ်)၊ မီးခိုးထဲက ဝေးဝေးက ပုံသဏ္ဌာန်တစ်ခု။ မျက်နှာ မပါရဘူး။ `
  + `<b>အလောင်း၊ သွေး၊ မီးလောင်ဒဏ်ရာ လုံးဝ မပါရဘူး။</b>`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/fire.html", buildPage({
  title: "ကျွန်တော့်ကို ကယ်ခဲ့တဲ့လူက မမွေးသေးဘူး — image prompts",
  subtitle: `THE MAN WHO SAVED ME WASN'T BORN YET · ${shots.length} shots · 16:9 · Copy a prompt, `
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
  storageKey: "fire.done.v1",
  slug: "fire",
  note: NOTE, nav: NAV("fire"),
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
