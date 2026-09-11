/**
 * Builds hand.html for ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ (The Man Who Drowned in an Empty Tank).
 *
 *   node gen-drown.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-hand.mjs";
import { MM_REF } from "./mm-hand.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "eusxfzjoya6";

const ACT = {
  1: "I · The hand closes",
  6: "II · Khin Hnin",
  12: "III · They try to pry it off",
  20: "IV · The wake thins out",
  25: "V · The shears",
  35: "VI · She did not fall",     // the reveal is here, not at 33
  39: "VII · The confrontation",
  45: "VIII · She sits up",
  48: "IX · One finger at a time",
  57: "X · Afterwards",
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
  `⚠️ <b>အရေးအကြီးဆုံး — အစ်မကို ကြောက်စရာပုံ မလုပ်ရဘူး။</b> ပုံတိုင်းမှာ <b>မျက်လုံးပိတ်ထားရမယ်</b>၊ `
  + `အိပ်ပျော်နေတဲ့ သာမန်လူတစ်ယောက်လိုပဲ ဖြစ်ရမယ်။ သွေး၊ ပုပ်ပွနေတာ၊ ပါးစပ်ဟနေတာ၊ လက်ခြေကွေးကောက်နေတာ `
  + `<b>လုံးဝ မပါရဘူး</b>။ ကြောက်စရာက သူ့မျက်နှာ မဟုတ်ဘူး — <b>သူ့ရဲ့ နေရာထားပုံ</b> ပဲ။ `
  + `လက်တစ်ဖက် ဆုပ်ထားတာ၊ ပခုံးမြောက်လာတာ၊ ခေါင်း တစ်ယောက်ယောက်ဘက် လှည့်နေတာ။`
  + `<br><br>⚠️ <b>စုစုက တစ်ခါမှ မငိုဘူး။</b> ကလေးက ကြောက်လန့်နေတာမျိုး မဟုတ်ဘဲ တည်ငြိမ်နေတယ် — `
  + `ဒါက ဇာတ်လမ်းရဲ့ အနှစ်သာရ။ ခေါင်းထဲကို လှမ်းထားတဲ့ လက်ကလည်း ပုံတိုင်းနီးပါးမှာ ပါရမယ်။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/hand.html", buildPage({
  title: "အလောင်းက ကလေးကို မလွှတ်ဘူး — image prompts",
  subtitle: `THE BODY WOULD NOT LET GO · ${shots.length} shots · 16:9 · Copy a prompt, paste `
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "hand.done.v1",
  slug: "hand",
  note: NOTE, nav: NAV("hand"),
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
