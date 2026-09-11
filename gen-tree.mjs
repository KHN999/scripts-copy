/**
 * Builds tree.html for ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ (The Man Who Drowned in an Empty Tank).
 *
 *   node gen-drown.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { SCENES, CAST, LOCS } from "./data-tree.mjs";
import { MM_REF } from "./mm-tree.mjs";
import { buildPage } from "./page.mjs";
import { PLATE, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "65poyp3y6t7";

const ACT = {
  1: "I · The truck in the tree",
  4: "II · The drive back",
  9: "III · The flat tyre",
  17: "IV · The forest holds its breath",
  21: "V · Something comes down",     // 20 is the bar touching stone; the fall is 21
  29: "VI · Pinned",
  40: "VII · The run",
  49: "VIII · The horn",
  56: "IX · What I had been looking at",
  61: "X · Morning",
  68: "XI · The cake",
  72: "XII · What I never told",   // the line itself is on 72
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
  `⚠️ <b>အရေးအကြီးဆုံး — အဲဒီအရာကို လက်ဖျံအထက် ဘယ်တော့မှ မပြရဘူး။</b> ပြရမှာက လက်ချောင်းတစ်ချောင်း `
  + `(သစ်ကိုင်းလောက် တုတ်တယ်)၊ လက်သည်းတစ်ချောင်း (ကားတံခါးလောက် ကြီးတယ်)၊ သစ်ပင်သုံးလေးပင်စာရှည်တဲ့ လက်ဖျံ `
  + `— အမှောင်ထဲ ပျောက်သွားတဲ့အထိပဲ။ <b>ကိုယ်ထည်၊ ပခုံး၊ ခေါင်း၊ မျက်နှာ၊ မျက်လုံး၊ အရိပ်ပုံစံ တစ်ခုမှ မပါရဘူး။</b> `
  + `ဇာတ်လမ်းထဲမှာ ကိုယ်တိုင်က "ပခုံးဘယ်မှာလဲ မမြင်ရဘူး" လို့ ပြောထားတာ — အဲဒါကို လိုက်နာရမယ်။`
  + `<br><br>⚠️ <b>သူက အသံကို လိုက်တာ၊ အလင်းကို မလိုက်ဘူး။</b> ဓာတ်မီးက မြေကြီးပေါ် လင်းနေပေမယ့် သူ ဂရုမစိုက်ဘူး။ `
  + `ဘယ်ပုံမှာမှ မီးရောင်ကို လိုက်နေတဲ့ပုံစံ မလုပ်ရဘူး — သံချောင်းကျသံ၊ ကားကျသံ၊ ဟွန်းသံတွေကိုပဲ လိုက်တာ။`
  + `<br><br>⚠️ <b>အပေါ်က သစ်ပင်ဖျားတွေက သူပဲ။</b> ပထမပိုင်းက "သစ်ပင်လှုပ်နေတယ်" ဆိုတာ လက်ဖျံတွေ လှုပ်နေတာ။ `
  + `ကျယ်ကျယ်ရိုက်တဲ့ပုံတွေမှာ ကောင်းကင်တစ်ခုလုံး အမည်းရောင်နဲ့ ပိတ်နေရမယ်။`
  + `<br><br>အလောင်း၊ သွေး မပါရဘူး။ ရုပ်ပုံ ${shots.length} ပုံ။ Reference ${NREF} ခုကို အရင်ဆောက်ပါ။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/tree.html", buildPage({
  title: "သစ်ပင်တွေထက် အမြင့်မှာ — image prompts",
  subtitle: `HIGHER THAN THE TREES · ${shots.length} shots · 16:9 · Copy a prompt, paste `
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`
    + `it into Google Flow, attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "tree.done.v1",
  slug: "tree",
  note: NOTE, nav: NAV("tree"),
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
