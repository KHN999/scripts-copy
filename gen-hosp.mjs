/**
 * Builds hosp.html for ကုတင်အောက်က လူနာစောင့်.
 *
 *   node gen-hosp.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-hosp.mjs";
import { MM_REF } from "./mm-hosp.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "5gnacd16p4h";

const ACT = {
  1: "I · He wakes when she sleeps",
  5: "II · The hospital",
  12: "III · The ward",
  16: "IV · The first night",
  19: "V · The old man",
  29: "VI · Eyes wide open",
  36: "VII · The second night",
  42: "VIII · The nurse",
  53: "IX · My own face",
  60: "X · The last night",
  64: "XI · The hand",
  74: "XII · On the floor",
  84: "XIII · He wakes up",
  90: "XIV · Down here forever",
  96: "XV · She takes my place",
  104: "XVI · Face to face",
  112: "XVII · Warm",
  117: "XVIII · I pull away",
  125: "XIX · Lean on mother",
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
  `⚠️ <b>ဒီဇာတ်လမ်းမှာ တစ္ဆေ မပါဘူး။</b> ကုတင်အောက်က အဖိုးကြီးဟာ <b>စွပ်ကျယ်ဖြူနဲ့ ပုဆိုးညို ဝတ်ထားတဲ့ `
  + `သာမန် အိပ်ရေးပျက်နေတဲ့ အဖိုးကြီးတစ်ယောက်</b> — ပါးချောင်ချောင်၊ မျက်ခွံဖောင်းဖောင်း၊ မျက်လုံးအောက်မည်းမည်း။ `
  + `<b>ဖြူဖပ်ဖြူရော် မဟုတ်။ ပုပ်နေတာ မဟုတ်။ မျက်လုံးတောက်တာ မဟုတ်။ ဖောက်ထွင်းမြင်ရတာ မဟုတ်။</b> `
  + `သူ့ကို ကြောက်စရာဖြစ်စေတာက <b>ဘယ်တော့မှ မအိပ်တာ</b> တစ်ခုတည်းပဲ။`
  + `<br><br>⚠️ <b>ပင်ပန်းတဲ့မျက်နှာက ဇာတ်လမ်းရဲ့ အဓိကပုံရိပ်။</b> သုံးခါ ပေါ်တယ် — အဖိုးကြီးမှာ၊ `
  + `ရေဆေးခန်းမှန်ထဲက ကိုယ့်မျက်နှာမှာ၊ ပြီးတော့ <b>အမေ့မျက်နှာမှာ</b>။ <b>သုံးခုလုံးကို တူညီတဲ့ အလင်း၊ `
  + `တူညီတဲ့ ဖရိမ်နဲ့ ရိုက်ပါ</b> — ပရိသတ်က အမေ့ဆီ ရောက်လာတာကို မှတ်မိရမယ်။`
  + `<br><br>⚠️ <b>နောက်ပိုင်းအပိုင်းတွေအားလုံးက ကုတင်အောက်ကနေ ရိုက်တာ။</b> ဇာတ်ကောင် နေရာချင်း `
  + `လဲသွားပြီးတဲ့နောက်မှာ မင်းသူကို မြင်ရတိုင်း <b>ကြမ်းပြင်အမြင့်ကနေ၊ ခြေထောက်တွေနဲ့ ကုတင်ခြေတွေကြားက</b> `
  + `မြင်ရမယ်။`
  + `<br><br>⚠️ <b>ကုတင်အောက်က အမှောင်က တစ်ပုံတည်းမှာပဲ နက်တယ်</b> ("The Dark Behind Him")။ `
  + `အဲဒီတစ်ပုံမှာ သံကုတင်ခြေတွေက အဆောင်ထက် ပိုရှည်တဲ့အထဲကို တန်းစီဝင်သွားတယ်။ `
  + `<b>ကျန်တဲ့ပုံအားလုံးမှာတော့ သာမန် ဆေးရုံကြမ်းပြင်ပဲ။</b>`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/hosp.html", buildPage({
  title: "ကုတင်အောက်က လူနာစောင့် — image prompts",
  subtitle: `THE CARETAKER UNDER THE BED · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "hosp.done.v1",
  slug: "hosp",
  note: NOTE, nav: NAV("hosp"),
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
