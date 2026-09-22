/**
 * Builds awake.html for ၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး.
 *
 *   node gen-awake.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS, STYLE, SET } from "./data-awake.mjs";
import { MM_REF } from "./mm-awake.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "bdtbsqffs1i";

const ACT = {
  1: "I · Keep your eyes closed",
  10: "II · An ordinary night coach",
  18: "III · Only me awake",
  22: "IV · Someone at the bridge",
  26: "V · She will not wake",
  29: "VI · Don't wake her",
  33: "VII · What he is really doing",
  38: "VIII · The unopened bottle",
  41: "IX · Wake my daughter",
  46: "X · The photograph",
  49: "XI · He comes back",
  54: "XII · This time",
  60: "XIII · The horn",
  65: "XIV · Every way he turned",
  70: "XV · Kneeling to nothing",
  75: "XVI · Go home",
  81: "XVII · What was in his bag",
  87: "XVIII · The hospital",
  93: "XIX · Two old messages",
  97: "XX · The danger was driving",
};

/**
 * Every shot must state where it is, and state it before anything else.
 *
 * Ten shots move to a hospital ward days after the journey and three more sit
 * in a police station and a village lane. A shot that names no place inherits
 * whatever the rest of the prompt implies, which on this board was a minibus.
 */
const setting = (s) => {
  const v = s.set ?? SET[s.l];
  if (!v) throw new Error(`shot "${s.t}" has neither a known location nor a set: override`);
  return v;
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
    /**
     * The place goes FIRST, before the shot body. The head of a prompt is the
     * part the model reliably reads; the tail is where instructions go to be
     * outvoted. "Almost all of it happens inside one dark minibus" used to sit
     * in the STYLE tail on all hundred shots and kept putting the daylit ward
     * back inside the bus.
     */
    prompt: `Shot ${n} of ${rows.length} — "${s.t}". A new and distinct frame in an ongoing `
      + `sequence; do not repeat, vary or re-render any previous image.`
      + `\n\n${setting(s)}\n\n${s.p}\n\n${STYLE}`,
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
  `⚠️⚠️ <b>ယာဉ်မောင်းက အန္တရာယ်ရှိသူ — ဒါပေမယ့် အစပိုင်းမှာ လုံးဝ မသိသာရဘူး။</b> `
  + `ပထမတစ်ပုံစိတ်မှာ သူဟာ နွေးထွေးပြီး ကူညီတတ်တဲ့ အဖေတစ်ယောက်လိုပဲ — အိတ်တွေကို ကိုယ်တိုင်တင်ပေးတယ်၊ `
  + `ရေဘူးတွေ ဝေပေးတယ်။ <b>“မနှိုးနဲ့” လို့ မပြောခင်အထိ အလင်းအမှောင်၊ ဖရိမ်၊ မျက်နှာအမူအရာကနေ `
  + `အန္တရာယ်ရှိမှန်း လုံးဝ မညွှန်ရဘူး။</b> ပရိသတ်က သူ့ကို စောစော သံသယဖြစ်သွားရင် ဇာတ်လမ်း ပြီးသွားပြီ။`
  + `<br><br>⚠️ <b>အပြင်က မိန်းမက ကြောက်စရာ မဟုတ်ဘူး။</b> ဆံပင်ရေစို၊ အင်္ကျီမှာ ရွှံ့ — ဒါပေမယ့် `
  + `မျက်နှာမှာ <b>စိုးရိမ်မှုပဲ ရှိတယ်၊ ဒေါသ မရှိဘူး</b>။ ဇာတ်ညွှန်းထဲမှာ တိတိလင်းလင်း ရေးထားတယ် — `
  + `“မျက်လုံးတွေထဲမှာ ဒေါသမရှိဘူး။ စိုးရိမ်နေတာ။” <b>သွားမဖြဲရ၊ ပြေးမဝင်ရ၊ ဘယ်သူ့ကိုမှ မထိရဘူး။</b>`
  + `<br><br>⚠️ <b>သူ့ကို မှန်တစ်ချပ်ကနေ ဒါမှမဟုတ် မိုးရေကြားကနေပဲ ပြပါ။</b> ပြတင်းပေါက်၊ ကားရှေ့မှန်၊ `
  + `ဒါမှမဟုတ် ကားမီးတန်းထဲ။ <b>သူနဲ့ အသက်ရှင်နေသူတွေဟာ အလင်းရှင်းရှင်းတစ်ခုတည်းထဲမှာ ဘယ်တော့မှ မရှိရဘူး။</b> `
  + `နေရာပြောင်းတဲ့အခါ မျက်တောင်ခတ်ကြားမှာ ဖြစ်ရမယ် — <b>သူ လျှောက်သွားတာကို ဘယ်ပုံမှာမှ မပြရဘူး။</b>`
  + `<br><br>⚠️ <b>အကြမ်းဖက်မှု ဘာမှ မပြရဘူး။</b> အမေက လွန်ခဲ့တဲ့ ရှစ်လက ဆုံးသွားပြီး ရေနုတ်မြောင်းနားမှာ `
  + `တွေ့ခဲ့တာ — <b>အဲဒါကို ပြောပြရုံပဲ၊ ဘယ်တော့မှ မပြရဘူး</b>။ ဆေးတိုက်တာက ရေဘူးတစ်ဘူး။ `
  + `အဆုံးက ရုန်းရင်းဆန်ခတ်က အင်္ကျီဆွဲတာနဲ့ ဟွန်းပေါ်က လက်တစ်ဖက်ပဲ။ `
  + `<b>သွေးမပါ၊ အလောင်းမပါ၊ ဒဏ်ရာမပါ။</b>`
  + `<br><br>⚠️ <b>စာလုံး လုံးဝမပါရဘူး — နောက်ဆုံးက ဖုန်းစာနှစ်ကြောင်းသာ ခြွင်းချက်</b>၊ `
  + `ဇာတ်လမ်းတစ်ခုလုံး အဲဒီနှစ်ကြောင်းအတွက် ရှိနေတာ။ ကျန်တဲ့ဖုန်းမျက်နှာပြင်တွေကို `
  + `<b>ပုံသဏ္ဌာန်နဲ့ အလင်းရောင်အဖြစ်ပဲ</b> ပြပါ။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အစဉ်လိုက်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/awake.html", buildPage({
  title: "မျက်လုံးမှိတ်ထားပါ — image prompts",
  subtitle: `THE WOMAN IN MY 1980s PHOTO · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "awake.done.v1",
  slug: "awake",
  note: NOTE, nav: NAV("awake"),
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
