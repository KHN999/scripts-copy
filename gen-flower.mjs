/**
 * Builds flower.html for ပန်းပွင့်တွေ မညှိုးတဲ့ ရွာ (The Village Where Flowers Never Wilt).
 *
 *   node gen-flower.mjs
 *
 * Shot prompts are read from the board, so the sheet and the film cannot disagree.
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-flower.mjs";
import { MM_REF } from "./mm-flower.mjs";
import { buildPage } from "./page.mjs";
import { PLATE, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "ckak0u817cs";

const ACT = {
  1: "I · The photograph",
  6: "II · Pan Kone",
  20: "III · The first day",
  40: "IV · The night",
  45: "V · The house with no flowers",
  51: "VI · The garden",          // "The Garden" — where the beds first appear
  66: "VII · Two o'clock",        // Nanda in full sun; the clock starts here
  88: "VIII · The last row",
  120: "IX · Afterwards",
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
    + (i < CAST.length ? PLATE : ""),
}));

const NOTE =
  `⚠️ ဒီဇာတ်လမ်းက <b>နေ့ခင်းကြောင်တောင် ကြောက်စရာ</b>။ အများစုက <b>နေပူပြင်းတဲ့ မွန်းတည့်ချိန်</b>မှာ ဖြစ်တာ — `
  + `ဆိုင်းဝိုင်းတီးနေတယ်၊ ကလေးတွေ ရေခဲချောင်းစားနေတယ်။ <b>ညမလုပ်ပါနဲ့။ မှောင်အောင် မလုပ်ပါနဲ့။ မြူ၊ လရောင်ပြာ မထည့်ပါနဲ့။</b>`
  + `<br><br>အရေးအကြီးဆုံး သုံးချက် — (၁) <b>နန္ဒာကို သရဲလို လုံးဝ မပြရဘူး</b>။ သူက သာမန်လူတစ်ယောက်အတိုင်း၊ `
  + `အရိပ်ရှိရှိ၊ ခြေထောက်မြေကြီးပေါ်နဲ့။ မပြုံးတာတစ်ခုပဲ ကွာတယ်။ (၂) <b>ပန်းနီက တစ်ရွာလုံးမှာ တစ်ပွင့်တည်း</b> — `
  + `နန္ဒာ့နားရွက်မှာ။ (၃) <b>မြေဘောင်တွေက လူတစ်ယောက်စာ အရွယ်</b> — ကြည့်တဲ့သူ ကိုယ်တိုင် သဘောပေါက်ရမယ်။`
  + `<br><br>အလောင်း၊ အရိုး၊ သွေး ဘာမှ မပြရဘူး။`
  + `<br><br>ရုပ်ပုံ ${shots.length} ပုံ ရှိတယ်။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/flower.html", buildPage({
  title: "ပန်းပွင့်တွေ မညှိုးတဲ့ ရွာ — image prompts",
  subtitle: `THE VILLAGE WHERE FLOWERS NEVER WILT · ${shots.length} shots · 16:9 · Copy a prompt, paste `
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "flower.done.v1",
  slug: "flower",
  note: NOTE, nav: NAV("flower"),
  groups: [
    { heading: "People — build these first", items: refs.slice(0, CAST.length) },
    { heading: "Locations — one plate per recurring setting", items: refs.slice(CAST.length) },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
Object.entries(ACT).forEach(([n, label]) =>
  console.log(`  shot ${String(n).padStart(3)}  ${label.padEnd(30)} "${shots[Number(n) - 1].title}"`));
LOCS.forEach((l) => console.log(`  ${l.name.padEnd(16)} ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).length} shots`);
console.log(`  missing gloss      : ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
