/**
 * Builds amya.html for ၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး.
 *
 *   node gen-amya.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS, STYLE } from "./data-amya.mjs";
import { MM_REF } from "./mm-amya.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "zqkamvsm3ei";

const ACT = {
  1: "I · Look at the pot five minutes later",
  9: "II · The day grandfather died",
  15: "III · Two pots, side by side",
  21: "IV · Merit reaches whoever is named",
  27: "V · A voice in the silence",
  33: "VI · It is getting closer",
  39: "VII · There is nowhere to stand",
  46: "VIII · The false name",
  51: "IX · Grandmother",
  55: "X · You had a twin",
  63: "XI · What she said into the earth",
  69: "XII · Racing her memory",
  74: "XIII · The fifth step",
  81: "XIV · She did not wake",
  86: "XV · The box under the bed",
  93: "XVI · Thirty people",
  99: "XVII · Myat Thiri",
  104: "XVIII · The earth stayed wet",
  109: "XIX · A name carved at last",
  114: "XX · How to look at water",
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
    prompt: `Shot ${n} of ${rows.length} — "${s.t}". A new and distinct frame in an ongoing `
      + `sequence; do not repeat, vary or re-render any previous image.`
      + `\n\n${s.p}\n\n${STYLE}`,
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
  `⚠️⚠️ <b>ကလေးကို ဘယ်ပုံမှာမှ မပြရဘူး။</b> တစ်ခါမှ မပြရဘူး — ပုံသဏ္ဌာန်အဖြစ်လည်း မဟုတ်၊ `
  + `အရိပ်အဖြစ်လည်း မဟုတ်၊ မှန်ထဲမှာလည်း မဟုတ်၊ focus မကျတဲ့ဝါးဝါးအဖြစ်လည်း မဟုတ်။ `
  + `သူ ရှိတယ်ဆိုတာကို <b>သက်သေအဖြစ်ပဲ</b> ပြပါ — ခြောက်နေတဲ့မြေ၊ ဗလာဖြစ်သွားတဲ့ရေခွက်၊ `
  + `ကိုယ့်လက်ဖဝါးကို နည်းနည်းကွေးထားတာ။ <b>ကလေးရုပ်ပါနေတဲ့ပုံတစ်ပုံဟာ ဇာတ်လမ်းကို ဖျက်လိုက်တာပဲ။</b>`
  + `<br><br>⚠️ <b>ရေက ဒီဇာတ်လမ်းရဲ့ ဘာသာစကားတစ်ခုလုံး။</b> <b>မြေစိုတာနဲ့ မြေခြောက်တာကို `
  + `ပုံတိုင်းမှာ တစ်ချက်ကြည့်ရုံနဲ့ ခွဲလို့ရရမယ်။</b> စို = အမည်းရောင်၊ တဖျတ်ဖျတ်၊ အပေါ်မှာ ရေပြင်တင်နေ၊ `
  + `အိုးအနားက အရောင်ရင့်။ ခြောက် = ဖျော့၊ မှေးမှိန်၊ ဖုန်ထူ၊ အက်ကြောင်းသေးသေးတွေနဲ့။ `
  + `<b>ပရိသတ်က အခန်းတစ်ဖက်ကနေ ကြည့်ပြီး ချက်ချင်း ပြောနိုင်ရမယ်။</b>`
  + `<br><br>⚠️ <b>ဒီဇာတ်လမ်းမှာ အကြမ်းဖက်မှု လုံးဝမပါဘူး။</b> သေဆုံးမှုနှစ်ခုပဲ ရှိတယ် — `
  + `လွန်ခဲ့တဲ့ ၃၄ နှစ်က ခြောက်ရက်သားကလေး (<b>အင်္ကျီလေးတစ်ထည်အဖြစ်ပဲ ပြရမယ်</b>) နဲ့ `
  + `အိပ်ရာထဲမှာ ငြိမ်သက်စွာ ဆုံးသွားတဲ့ အဖွားအို။ <b>သွေး မပါရ၊ အလောင်း မပါရ၊ ဒဏ်ရာ မပါရဘူး။</b>`
  + `<br><br>⚠️ <b>သရဲက ဆိုးတာ မဟုတ်ဘူး — ဇာတ်လမ်းက အဲဒီလို မဟန်ဆောင်ရဘူး။</b> `
  + `သူ ရေငတ်နေတာ၊ ပြီးတော့ တန်းစီစောင့်နေတာ။ သူ့အသံကို တစ်ခါပဲ ကြားရပြီး အဲဒီအသံက `
  + `<b>ကျေးဇူးတင်နေတဲ့အသံ</b>။ လိုက်ဖမ်းတာ မပါ၊ လန့်အောင်လုပ်တာ မပါ။`
  + `<br><br>⚠️ <b>စာလုံး လုံးဝမပါရဘူး — တစ်ခုတည်းသာ ခြွင်းချက်</b>၊ အဆုံးမှာ ကျောက်တိုင်ပေါ်က နာမည်။ `
  + `အဖွားရဲ့လက်ရေး၊ မှတ်စုစာအုပ်၊ ဖုန်းမျက်နှာပြင် — အားလုံး <b>ပုံသဏ္ဌာန်အဖြစ်ပဲ မြင်ရပြီး `
  + `စာလုံးအဖြစ် မဖတ်လို့ရရဘူး။</b>`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အစဉ်လိုက်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/amya.html", buildPage({
  title: "ရေစက်မကျတဲ့နာမည် — image prompts",
  subtitle: `THE WOMAN IN MY 1980s PHOTO · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "amya.done.v1",
  slug: "amya",
  note: NOTE, nav: NAV("amya"),
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
