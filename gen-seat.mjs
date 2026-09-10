/**
 * Builds seat.html for ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ (The Man Who Drowned in an Empty Tank).
 *
 *   node gen-drown.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-seat.mjs";
import { MM_REF } from "./mm-seat.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "8aoa3ikurwm";

const ACT = {
  1: "I · A hundred and twenty seats",
  3: "II · The job",
  12: "III · The test",
  20: "IV · The room laughs back",   // 19 is loading the clip; the laugh is at 20
  26: "V · He cannot get up",
  33: "VI · Under the seat",
  38: "VII · Getting out",
  47: "VIII · All the lights",
  55: "IX · The small hand",
  62: "X · The next day",
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
  `⚠️ <b>အရေးအကြီးဆုံး — ခုံပေါ်မှာ ဘယ်ပုံမှာမှ လူတစ်ယောက်မှ မထိုင်ရဘူး။</b> အရိပ်၊ ပုံသဏ္ဌာန်၊ မျက်နှာ ဘာမှ မပါရဘူး။ `
  + `လှုပ်တာက <b>ခုံအဝတ်</b> ပဲ — ဘောင်းဘီပေါ် တက်လာတဲ့အဝတ်အစွန်း၊ ရှည်လာတဲ့လက်တင်တံ၊ လက်တင်တံအစွန်းကနေ `
  + `ဖြန့်လာတဲ့လက်ချောင်းတွေ၊ ခုံအောက်ကနေ ထွက်လာတဲ့ လက်သေးသေး၊ ခုံရင်ခွင်ထဲက အင်္ကျီ။ `
  + `ခုံပေါ်မှာ လူတစ်ယောက် ထည့်လိုက်တာနဲ့ ဇာတ်လမ်းတစ်ခုလုံး ပျက်သွားပြီ။`
  + `<br><br>⚠️ <b>ခုံတွေက အသစ်လိုပဲ ဖြစ်ရမယ်။</b> ပတ်ဝန်းကျင်အားလုံး ပျက်စီးနေတယ် — မျက်နှာကျက်က ဆေးကွာ၊ `
  + `နံရံက မှိုတက်။ ခုံတွေကတော့ သန့်ရှင်း၊ အရောင်ညီ၊ ဂရုစိုက်ထားသလို။ ဒီကွာခြားချက်က ပထမဆုံးသဲလွန်စ။`
  + `<br><br>အလောင်း၊ သွေး မပါရဘူး။ ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/seat.html", buildPage({
  title: "ခုံနံပါတ် ဆယ့်ခုနစ် — image prompts",
  subtitle: `SEAT NUMBER SEVENTEEN · ${shots.length} shots · 16:9 · Copy a prompt, paste `
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "seat.done.v1",
  slug: "seat",
  note: NOTE, nav: NAV("seat"),
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
