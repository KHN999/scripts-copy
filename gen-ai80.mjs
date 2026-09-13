/**
 * Builds ai80.html for ၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး.
 *
 *   node gen-ai80.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, PROPS, LOCS } from "./data-ai80.mjs";
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

const sources = [...CAST, ...PROPS, ...LOCS];
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
  `⚠️ <b>မျက်နှာတစ်ခုတည်း၊ မိန်းကလေးနှစ်ယောက်။</b> ပန်းအိနဲ့ မခင်စန်းက ဆွေမျိုးမဟုတ်၊ မျက်နှာအတိအကျတူရမယ်။ မခင်စန်းနဲ့ ပန်းအိအိုမင်း reference ဆောက်တဲ့အခါ Reference 1 ကို attach လုပ်ပါ။ ဝတ်စုံနဲ့ဆံပင်ကို သတ်မှတ်ထားတဲ့အတိုင်း ဆက်သုံးပါ။`
  + `<br><br><b>ဓာတ်ပုံသုံးပုံကို အရင်ဆောက်ပါ။</b> PHOTO A = စတုတ္ထပုံနဲ့ ဓာတ်ပုံ scan၊ PHOTO B = မခင်စန်းနဲ့အဖေ့ပုံ၊ PHOTO C = ပန်းအိအိုမင်းပုံ။ နောက် close-up၊ zoom၊ comparison တွေမှာ မူရင်းပုံကို attach လုပ်ပြီး crop/reframe လုပ်ပါ။ မျက်နှာနဲ့နောက်ခံအသစ် မဖန်တီးရ။ Screen ထဲကပုံကို အခန်းထဲကလူအဖြစ် မပြရ။`
  + `<br><br><b>ပုံအဟောင်းနဲ့ အပြင်ကမြင်ကွင်းကို ခွဲထားပါ။</b> ၁၉၈၇ ပုံမှာပဲ ဖလင်အရောင်ဖျော့နဲ့ grain ပါမယ်။ ဖုန်း၊ လက်၊ ၂၀၂၆ အခန်း၊ ခေတ်ပေါ် AI ပုံနဲ့ Video Call က သန့်ရှင်းတဲ့ digital ပုံစံ။ မူရင်း photo master တွေက 3:2၊ နောက်ဆုံး scene က 16:9။`
  + `<br><br><b>စာသားက shot တစ်ခုချင်း သတ်မှတ်ထားတာပဲ။</b> ရက်စွဲ၊ ၄၂၊ AGE: 26 နဲ့ notification စာသားကို သက်ဆိုင်ရာ close-up မှာပဲ ရေးပါ။ ကျန်နေရာမှာ စာသားပိတ်ထားပါ။ Flow က စာသားမှားရင် တူညီတဲ့ပုံကို ထိန်းပြီး ရက်စွဲကို နောက်ဆုံး edit မှာ တိတိကျကျပြင်ပါ။`
  + `<br><br><b>ညပိုင်း continuity။</b> ပန်းအိဖုန်းအမည်းမှာ Shot 62 ကစပြီး ရှေ့နောက်ကင်မရာကို tape ပိတ်ထား၊ flashlight မပိတ်ရ။ သူငယ်ချင်းဖုန်း မီးခိုးဖျော့ကို CCTV၊ Video Call နဲ့ live camera အတွက်သုံးပါ။ ထွက်ပြေးချိန် နှစ်ယောက်လုံးအတူရှိမယ်။`
  + `<br><br><b>PHOTO B မှာ အဖေ့လူသားမျက်နှာ မှတ်မိရမယ်။</b> နောက်သဘာဝလွန်မြင်ကွင်းတွေမှာ ပခုံးနဲ့မျက်နှာအစွန်းပဲ မထင်မရှားပေါ်မယ်။ Shot 29 တံခါးနောက်ကလူကို အဖေလို့ မသတ်မှတ်သေးရ။ ကြမ်းပြင်အောက်မှာ အိတ်ပဲရှိ၊ အလောင်းမရှိ။ မခင်စန်းက ခြိမ်းခြောက်သူမဟုတ်၊ ပန်းအိကို သတိပေးကယ်တင်သူ။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အစဉ်လိုက်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/ai80.html", buildPage({
  title: "၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး — image prompts",
  subtitle: `THE WOMAN IN MY 1980s PHOTO · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, and attach the listed references. ဗမာလို ရှင်းလင်းချက်က copy ထဲ မပါပါ။`,
  storageKey: "ai80.done.v1",
  slug: "ai80",
  note: NOTE, nav: NAV("ai80"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Photo and object masters — reuse for every matching insert", items: refs.slice(CAST.length, CAST.length + PROPS.length) },
    { heading: "Locations and device — keep recurring geometry", items: refs.slice(CAST.length + PROPS.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(30)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(14)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).length} shots`);
console.log(`  missing gloss      : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
