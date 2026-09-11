/**
 * Builds extra-bowl.html for ပိုနေတဲ့ပန်းကန် (The Extra Bowl).
 *
 *   node gen-extrabowl.mjs
 *
 * This page was hand-written before page.mjs existed and carried its own copy of
 * the markup, which is exactly the drift page.mjs was extracted to stop — it was
 * the one sheet that did not gain the full-script panel. Its data is preserved
 * verbatim in data-extrabowl.mjs; the only thing that changes is that it is now
 * rendered by the shared builder like every other sheet.
 *
 * storageKey is unchanged, so anyone mid-way through the image pass keeps their
 * ticked shots.
 */
import { writeFile } from "node:fs/promises";
import { ITEMS, SHOTS } from "./data-extrabowl.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";
import { PLATE, PLATE_MM } from "./plate.mjs";

// The baked-in ITEM prompts specify their own backgrounds and a three-quarter
// view. Strip that and append the plate clause so these match every other sheet.
const PLATED = ITEMS.map((it) => ({
  ...it,
  // Strip only the staging — the wall, the lamp, the three-quarter framing and
  // the expression. The period and film-stock words after it describe the
  // PERSON and are kept.
  prompt: it.prompt.replace(
    /Plain dark wooden wall behind, warm kerosene lamp light from one side, /i, "")
    .replace(/waist-up three-quarter view, neutral expression, /i, "") + PLATE,
  mm: (it.mm || "") + PLATE_MM,
}));

const NOTE =
  `ရုပ်ပုံ ${SHOTS.length} ပုံ။ Reference ${ITEMS.length} ခုကို အရင်ဆောက်ပါ။`
  + `<br><br>⚠️ <b>ပိုနေတဲ့ပန်းကန်</b> — အနားတစ်ဖက် ကြီးကြီးမားမား ကွဲနေတဲ့ အပြာရောင်ပန်းကန်က `
  + `ပုံတိုင်းမှာ တစ်ထပ်တည်း ဖြစ်ရမယ်။ ကွဲနေတဲ့နေရာက ဘယ်ဘက်ကို ညွှန်နေလဲဆိုတာ အရေးကြီးတယ်။`
  + `<br><br>သရဲကို ဘယ်ပုံမှာမှ အပြည့်အဝ မပြရဘူး။`;

await writeFile("/Users/puraidointern/ghost-prompts-site/extra-bowl.html", buildPage({
  title: "ပိုနေတဲ့ပန်းကန် — image prompts",
  subtitle: `THE EXTRA BOWL · ${SHOTS.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, `
    + `attach the references listed on the card. `
    + `ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "extrabowl.done.v1",
  slug: "extra-bowl",
  note: NOTE, nav: NAV("extrabowl"),
  groups: [{ heading: "People and the bowl — build these first", items: PLATED }],
  shots: SHOTS,
}));

console.log(`shots ${SHOTS.length}  refs ${ITEMS.length}`);
console.log(`  acts        : ${[...new Set(SHOTS.map((s) => s.act))].length}`);
console.log(`  missing gloss: ${SHOTS.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
console.log(`  narration lines: ${SHOTS.reduce((a, s) => a + s.lines.length, 0)}`);
