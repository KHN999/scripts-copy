/**
 * Builds mem.html for ၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး.
 *
 *   node gen-mem.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-mem.mjs";
import { MM_REF } from "./mm-mem.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "dixxlarfdv3";

const ACT = {
  1: "I · The murder he remembers",
  6: "II · A phone he does not own",
  15: "III · Table six",
  21: "IV · The video is of tomorrow",
  25: "V · Two memories that disagree",
  34: "VI · His hands on her throat",
  41: "VII · The sleepwalk",
  48: "VIII · The Shwe Min clinic",
  57: "IX · Twin brothers",
  60: "X · The nurse's tape",
  65: "XI · Her father calls",
  69: "XII · The boy in the mirror",
  74: "XIII · Nine loops",
  84: "XIV · This time we don't run",
  89: "XV · The syringe",
  97: "XVI · The white car",
  106: "XVII · The bridge",
  113: "XVIII · Choose both",
  124: "XIX · 11:48",
  130: "XX · The wristbands",
  139: "XXI · Three months later",
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

const sources = [...CAST, ...LOCS];
const NREF = sources.length;
const refs = sources.map((c, i) => {
  const dependencies = c.sameAs ? [sources[c.sameAs - 1].name] : (c.requires || []);
  const attach = dependencies.map(name => {
    const index = sources.findIndex(r => r.name === name);
    if (index < 0 || index >= i) throw new Error(`Invalid reference dependency: ${c.name} -> ${name}`);
    return `Reference ${index + 1} — ${name}`;
  });
  return {
    ...c,
    mm: (MM_REF[c.name] || "") + (attach.length ? ` Attach: ${attach.join('; ')}.` : '')
      + (i < CAST.length ? PLATE_MM : ""),
    prompt: `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}).\n\n`
      + (attach.length ? `Attach ${attach.join('; ')}. Preserve the specified identity or architecture from these references; do not invent a replacement.\n\n` : '')
      + c.prompt + (i < CAST.length ? plate(c.pose) : ""),
  };
});

const NOTE =
  `⚠️ <b>အမွှာနှစ်ယောက် တစ်ထပ်တည်း တူရမယ် — ပြီးတော့ နာမည်တွေက လွဲနေတယ်။</b> မှန်ထဲမှာ ပေါ်တဲ့ကလေးဟာ `
  + `အရွယ်ရောက်သူရဲ့ ကိုယ်ပိုင်မျက်နှာ အသက် ၉ နှစ်အရွယ်။ နောက်ဆုံးအပိုင်းမှာ လက်ပတ်တွေ လွဲနေခဲ့တယ်ဆိုတာ `
  + `ပေါ်လာတယ်။ <b>ဒါကြောင့် ကလေးနှစ်ယောက်လုံးကို ပုံတိုင်းမှာ တစ်ထပ်တည်း တူအောင် ရိုက်ရမယ်။ `
  + `ကြည့်ရုံနဲ့ ခွဲလို့ရသွားရင် အဆုံးသတ် ပျက်သွားပြီ။</b>`
  + `<br><br>⚠️ <b>သေဆုံးသွားတဲ့ကလေးက ကြောက်စရာ မဟုတ်ဘူး။</b> ဇာတ်ညွှန်းထဲမှာ တိတိလင်းလင်း `
  + `ရေးထားတယ် — “သူ့မျက်နှာက ကြောက်စရာမကောင်းဘူး၊ အရမ်းပင်ပန်းနေတဲ့ ကလေးတစ်ယောက်ရဲ့မျက်နှာ”။ `
  + `<b>ဖြူဖပ်ဖြူရော် မဟုတ်၊ ပုပ်နေတာ မဟုတ်၊ မျက်လုံးတောက်တာ မဟုတ်၊ လေထဲမမျောရဘူး။</b> `
  + `အဝတ်ပေါ်က သွေးက ခြောက်နေပြီး အမည်းရောင် — ပုံရဲ့အဓိကနေရာ ဘယ်တော့မှ မဟုတ်ရဘူး။`
  + `<br><br>⚠️ <b>ဒီဇာတ်လမ်းမှာ စာလုံးခွင့်ပြုတယ် — ဒါပေမယ့် နာရီနဲ့ countdown အတွက်ပဲ။</b> `
  + `<b>၁၁:၄၇</b> ဟာ ဇာတ်လမ်းတစ်ခုလုံးရဲ့ ကျောရိုးမို့လို့ ပရိသတ် ဖတ်နိုင်ရမယ်။ အဲဒီပုံတွေမှာ `
  + `<b>ရိုက်ရမယ့် စာလုံးအတိအကျကို prompt ထဲမှာ ရေးပေးထားတယ် — အဲဒါတစ်ခုတည်းပဲ ပါရမယ်</b>။ `
  + `ကျန်တဲ့ပုံတွေမှာ စာလုံး မပါရဘူး၊ ဖုန်း UI ကို ပုံသဏ္ဌာန်နဲ့ အလင်းရောင်အဖြစ်ပဲ ပြပါ။`
  + `<br><br>⚠️ <b>အနီရောင်ကြိုးက continuity။</b> ၁၉ နှစ်လုံး သီရိ့လက်မှာ၊ အိပ်ရာကနိုးတဲ့မနက် သူ့ညာလက်မမှာ၊ `
  + `အခန်း ၃၀၇ တံခါးမှာ၊ နောက်ဆုံးမှာ သူ့လက်ကောက်ဝတ်မှာ။ <b>အကုန်လုံး တစ်ချောင်းတည်း</b> — `
  + `အရောင်ဖျော့၊ ဖွာနေ၊ လက်နဲ့ချည်ထား။`
  + `<br><br>⚠️ <b>အကြမ်းဖက်မှုကို အရိပ်အမြွက်ပဲ ပြပါ — တိုက်ရိုက် မပြရဘူး။</b> ပေါင်ပေါ်က ဓား၊ `
  + `မြှောက်ထားတဲ့ ဆေးထိုးအပ်၊ လည်ပင်းကနေ ရုတ်တရက်လွှတ်လိုက်တဲ့လက်။ `
  + `<b>ဒဏ်ရာ မပါရ၊ သွေးအိုင် မပါရ၊ အလောင်း ဘယ်နေရာမှာမှ မပါရဘူး။</b>`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အစဉ်လိုက်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/mem.html", buildPage({
  title: "မနက်ဖြန်သေမယ့်လူရဲ့ မှတ်ဉာဏ် — image prompts",
  subtitle: `THE WOMAN IN MY 1980s PHOTO · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "mem.done.v1",
  slug: "mem",
  note: NOTE, nav: NAV("mem"),
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
