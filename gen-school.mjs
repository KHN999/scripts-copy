/**
 * Builds school.html for သရဲအိမ် (The Ghost House).
 *
 *   node gen-school.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-school.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "0ej2ssi7fdq";

const STYLE =
  "A government high school campus in Yangon, present day, in bright hard midday sunlight — mature "
  + "rain trees, dry swept earth, green grass, a modern painted three-storey school block, and a "
  + "separate weathered two-storey colonial-era building with tall columns and long shuttered windows. "
  + "Warm natural daylight outside; the old building's interior is cool, dim and dusty with shafts of "
  + "sun through high windows. Cinematic photorealism, naturalistic and unstylised, gentle contrast, "
  + "35mm film grain, shallow depth of field, 16:9. No school name, crest, logo, banner or signage of "
  + "any kind. No visible ghost, no corpse, nothing monstrous. NO LEGIBLE TEXT, LETTERING, SCRIPT OR "
  + "NUMBERS ANYWHERE IN THE IMAGE, no watermark.";

const CAST = [
  { name: "ကျောင်းသား", en: "The narrator — Grade 10",
    prompt: "Burmese male student of 16, slim, short neat black hair, clean-shaven, an ordinary "
      + "friendly face. Standard older-student government school uniform: a clean white short-sleeved "
      + "shirt and a green checked longyi — a longyi, NOT trousers — and sandals. TWO PENS clipped in "
      + "his shirt breast pocket, clearly visible. Plain sunlit wall behind, waist-up three-quarter "
      + "view, neutral expression, photorealistic, natural colour, bright daylight." },
  { name: "ကလေး", en: "The boy",
    prompt: "Burmese boy of eight or nine, primary-school age, short hair, a plain healthy ordinary "
      + "face, one ear sticking out very slightly. A white school shirt and GREEN TROUSERS — trousers, "
      + "not a longyi, because he is a younger pupil — and sandals. He holds a thin folded exercise "
      + "book at his side. He must look COMPLETELY NORMAL: not pale, not sickly, not translucent, no "
      + "strange eyes, no effects of any kind, lit by the same plain daylight as everyone else. Plain "
      + "wall behind, waist-up, photorealistic, natural colour, daylight." },
  { name: "ဆရာမ", en: "The teacher",
    prompt: "Burmese woman teacher in her fifties, hair pulled back, a plain blouse and a dark longyi, "
      + "calm and self-possessed, slight reading glasses. Plain classroom wall behind, waist-up "
      + "three-quarter view, photorealistic, natural colour, daylight." },
];

const PROPS = [
  { name: "ဓာတ်ပုံ", en: "The class photograph",
    prompt: "An old black-and-white class photograph in a dusty wooden frame behind glass: three rows "
      + "of young Burmese primary schoolchildren in white shirts, a woman teacher standing at one end, "
      + "posed in front of an old colonial school building. Grainy, faded, slightly foxed. The frame "
      + "fills the picture and ANY CAPTION AREA BELOW THE IMAGE IS CROPPED ENTIRELY OUT OF FRAME. "
      + "Nothing written, printed or handwritten is visible anywhere. Photorealistic, natural colour." },
];

const LOCS = [
  { name: "ကျောင်းဝင်း", en: "The campus",
    prompt: "The grounds of a Yangon government high school at midday: open swept earth and patchy "
      + "grass, mature rain trees casting hard shade, a modern painted three-storey school block on "
      + "one side, a dusty football pitch, a low boundary wall. Bright hard sunlight. Empty, no "
      + "people. No signage, no crest, no lettering anywhere." },
  { name: "ကျောင်းဆောင်ဟောင်း", en: "The old building",
    prompt: "A weathered two-storey colonial-era school building: tall plastered columns, a deep "
      + "shaded ground-floor veranda, long shuttered windows, pale yellow limewash flaking away in "
      + "patches to bare render, several upper-floor windows boarded over with planks, weeds at the "
      + "base of the wall. Seen straight on in flat daylight. Empty, no people, no signage." },
  { name: "စင်္ကြံ", en: "The corridor",
    prompt: "The long ground-floor corridor of an old colonial school building used for storage: old "
      + "wooden desks and benches stacked along one wall, a bare cement floor, high windows throwing "
      + "hard shafts of daylight through thick hanging dust, cool and dim. Empty, no people." },
  { name: "လှေကား", en: "The staircase",
    prompt: "An old internal staircase in a colonial school building: worn wooden treads, a plain "
      + "iron banister, a half-landing turning up into darkness, and a steel gate across the foot of "
      + "it with a hasp for a padlock. Dusty daylight from the corridor. Empty, no people." },
];

const WHO = {
  8: ["ကျောင်းသား"], 18: ["ကျောင်းသား"], 21: ["ကလေး"], 22: ["ကလေး"], 23: ["ကလေး"],
  24: ["ကျောင်းသား"], 25: ["ကလေး"], 26: ["ကျောင်းသား"], 29: ["ကျောင်းသား"], 31: ["ဆရာမ"],
  34: ["ကျောင်းသား", "ဆရာမ"], 35: ["ဓာတ်ပုံ"], 36: ["ဓာတ်ပုံ"], 37: ["ဓာတ်ပုံ"],
  38: ["ဓာတ်ပုံ", "ကလေး"], 39: ["ဆရာမ", "ဓာတ်ပုံ"], 40: ["ဆရာမ", "ဓာတ်ပုံ"],
  41: ["ကျောင်းသား", "ဆရာမ"], 42: ["ဆရာမ"], 43: ["ဓာတ်ပုံ"], 44: ["ဆရာမ"],
  45: ["ကျောင်းသား", "ဆရာမ", "ဓာတ်ပုံ"], 46: ["ဓာတ်ပုံ"], 47: ["ကျောင်းသား"],
  48: ["ဓာတ်ပုံ"], 49: ["ဆရာမ", "ဓာတ်ပုံ"], 51: ["ကလေး"], 52: ["ကလေး"],
};
const WHERE = {
  1: "ကျောင်းဆောင်ဟောင်း", 2: "ကျောင်းဝင်း", 3: "ကျောင်းဆောင်ဟောင်း",
  4: "ကျောင်းဆောင်ဟောင်း", 5: "စင်္ကြံ", 6: "ကျောင်းဝင်း", 7: "လှေကား", 8: "ကျောင်းဝင်း",
  9: "ကျောင်းဝင်း", 10: "ကျောင်းဝင်း", 11: "ကျောင်းဝင်း", 12: "ကျောင်းဆောင်ဟောင်း",
  13: "ကျောင်းဝင်း", 14: "စင်္ကြံ", 15: "စင်္ကြံ", 16: "စင်္ကြံ", 17: "စင်္ကြံ", 18: "စင်္ကြံ",
  19: "လှေကား", 20: "လှေကား", 21: "လှေကား", 23: "လှေကား", 24: "လှေကား", 25: "လှေကား",
  27: "စင်္ကြံ", 28: "လှေကား", 29: "စင်္ကြံ", 30: "ကျောင်းဝင်း", 32: "စင်္ကြံ",
  33: "လှေကား", 34: "စင်္ကြံ", 35: "စင်္ကြံ", 41: "စင်္ကြံ", 50: "ကျောင်းဝင်း",
  51: "ကျောင်းဆောင်ဟောင်း", 52: "ကျောင်းဆောင်ဟောင်း", 53: "ကျောင်းဆောင်ဟောင်း",
};

const TITLES = ["The ghost house", "The school", "The old block", "Flaking paint", "Storage",
  "What everyone has heard", "The stairs you can't find", "Grade 10", "Football", "Lunchtime",
  "Nothing frightening about it", "The ball goes in", "Go and get it", "Inside",
  "The corridor", "At the far end", "Chanting upstairs", "He listens", "The staircase",
  "The gate is open", "A boy comes down", "The exercise book", "Halfway up",
  "Not yet, it's lunchtime", "He looks back up", "Why don't you call us?",
  "Someone calls from outside", "Gone", "Back into the sun", "Home time",
  "The teacher needs desks", "Carrying them out", "Locked", "Do the juniors use it?",
  "A frame against the wall", "Wiping the dust", "The class photograph", "Second row",
  "How old is this?", "The back of the frame", "He tells her", "She doesn't want to answer",
  "She puts it down", "She was a pupil here", "The faces change", "Three rows",
  "The back row, left end", "Two pens", "Face down", "Seven in the morning",
  "One window open", "He is not alone", "Still waiting"];

const ACT = { 1: "The ghost house", 8: "Lunchtime", 14: "Inside", 21: "The boy",
  31: "The next day", 35: "The photograph", 50: "The last morning" };

const db = new Database("/Users/puraidointern/video-lab/data/lab.db", { readonly: true });
const rows = db.prepare(
  "SELECT idx, units, image_prompt FROM scenes WHERE project_id=? ORDER BY idx").all(PROJECT);
db.close();
if (rows.length !== TITLES.length) throw new Error(`${rows.length} scenes vs ${TITLES.length} titles`);

let act = "";
const shots = rows.map((r) => {
  const n = r.idx + 1;
  if (ACT[n]) act = ACT[n];
  return { id: String(n), title: TITLES[r.idx], act, who: WHO[n] ?? [], where: WHERE[n] ?? null,
           raw: r.image_prompt, lines: JSON.parse(r.units).map((u) => u.text),
           mm: MM_SHOT[String(n)] || "" };
});

const NREF = CAST.length + PROPS.length + LOCS.length;
[...CAST, ...PROPS].forEach((c, i) => {
  c.mm = MM_REF[c.name] || "";
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct subject; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`;
});
LOCS.forEach((l, i) => {
  l.mm = MM_REF[l.name] || "";
  l.prompt = `Reference ${CAST.length + PROPS.length + 1 + i} of ${NREF} — ${l.en} (${l.name}), a `
    + `LOCATION plate. A new and distinct place; do not repeat or vary any previous reference. `
    + `Establish the place itself, empty of people and of incident.\n\n${l.prompt} ${STYLE}`;
});
shots.forEach((s, i) => {
  s.prompt = `Shot ${i + 1} of ${shots.length} — scene ${s.id}, "${s.title}". A new and distinct frame `
    + `in an ongoing sequence; do not repeat, vary or re-render any previous image.\n\n`
    + `${s.raw.trim()}\n\n${STYLE}`;
});

const NOTE = `<b style="color:#ffb4b4">Three rules, and the first one is the whole story.</b>
  <br><br><b>1. The boy must look completely normal.</b> Ordinary healthy primary-school child, in the
  same plain daylight as everyone else. Not pale, not translucent, no strange eyes, no effects, no
  cold grade, nothing. If he looks like a ghost the story stops working — the reason the scene is
  unsettling is that a Grade 10 student had a perfectly mundane conversation with him and thought
  nothing of it. Shots 21, 23 and 25 are the ones to be strict about.
  <br><br><b>2. It is broad daylight.</b> This is horror at noon. The dread comes from the contrast —
  a loud bright schoolyard forty feet from a cold, dusty, silent corridor. Do not darken the old
  building for atmosphere; it is lit by the same hard sun, it is just indoors. Shots 9, 10 and 11 should
  be genuinely cheerful.
  <br><br><b>3. Never render writing.</b> The class photograph has a caption and a date on its back, and
  the models turn script into convincing nonsense — it already cost us the receipt close-ups in
  စက်နံပါတ် ၇. The caption area is cropped out of every shot, the back of the frame is shot at a
  grazing angle, and where the narration quotes what is written the shot is a reaction. <b>If a
  generated image contains letterforms, throw it away.</b>
  <br><br><b>The ending is two pens.</b> The narrator's reference has two pens clipped in his shirt
  pocket, and shot 48 is an extreme macro of that same detail on a figure in a photograph taken before
  he was born. Both must match exactly, so build his reference first and keep the pocket in frame.
  <br><br><b>No school name, crest, logo or signage anywhere</b>, in any shot. Uniforms should read as
  authentic Myanmar government school: white shirt and green longyi for the older student, white shirt
  and green trousers for the younger boy.
  <br><br>Build all ${NREF} references below before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/school.html", buildPage({
  title: "သရဲအိမ် — image prompts",
  subtitle: `THE GHOST HOUSE · ${shots.length} shots · 16:9 · daylight · Copy a prompt, paste it into `
    + `Google Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "school.done.v1",
  note: NOTE, nav: NAV("school"),
  groups: [
    { heading: "People and the photograph — build these first", items: [...CAST, ...PROPS] },
    { heading: "Locations — one plate per recurring setting", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
