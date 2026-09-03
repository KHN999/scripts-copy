/**
 * Builds mother.html for နှစ်ခါပြန်လာတဲ့အမေ (The Mother Who Came Home Twice).
 *
 *   node gen-mother.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-mother.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "cfkdxjlxbi7";

const STYLE =
  "A small village in Bago Region, rural Myanmar, around the year 2000, during a heavy monsoon "
  + "evening. A raised teak house on posts, a wide bare dirt yard turning to mud, a mango tree, "
  + "flooded paddy fields behind the house. Warm kerosene lamplight indoors, cold blue-grey storm "
  + "light outside, rain falling hard. Cinematic photorealism, domestic and lived-in rather than "
  + "gothic — this is a home before it is a haunting. Desaturated warm palette, 35mm film grain, "
  + "shallow depth of field, 16:9. No modern objects, no phones, no vehicles, no electric light. "
  + "Nothing monstrous, no visible ghost, no corpse. No legible text or numbers anywhere, no watermark.";

/**
 * ONE MOTHER, ONE REFERENCE.
 *
 * The two mothers must be indistinguishable, so giving them separate references
 * would be the fastest way to break the story — two references drift, and the
 * moment the audience can tell them apart the ending stops landing. There is one
 * mother plate, and the shots carry the only two differences there are: dry or
 * soaked, scar or no scar.
 */
const CAST = [
  { name: "အမေ", en: "The mother — one reference for both",
    prompt: "Rural Burmese woman of about 45, dark hair pulled back into a low knot, a kind lined "
      + "face, slight build. A pale cream high-necked traditional blouse and a dark green htamein. "
      + "Standing plainly, dry, hands at her sides, waist-up three-quarter view against a plain wooden "
      + "wall in soft daylight. She is warm and completely ordinary — never pale, never sinister, "
      + "never uncanny. Photorealistic, natural colour." },
  { name: "သား", en: "The son",
    prompt: "Burmese boy of sixteen, slim, short hair, an ordinary open face. A plain short-sleeved "
      + "shirt and a dark checked longyi, barefoot. Plain wooden wall behind, waist-up three-quarter "
      + "view, soft daylight, photorealistic, natural colour." },
  { name: "ခင်", en: "Khin, the sister",
    prompt: "Burmese girl of about nine, hair in two short plaits, a simple cotton house dress, "
      + "cheerful and healthy. Plain wooden wall behind, waist-up, soft daylight, photorealistic, "
      + "natural colour." },
  { name: "ခွေး", en: "The dog",
    prompt: "A small thin short-haired village dog, tan coloured, standing alert on bare earth, "
      + "nothing else in frame. Photorealistic, natural colour, overcast daylight." },
];

const PROPS = [
  { name: "ခြင်းတောင်း", en: "The bamboo basket",
    prompt: "A round woven bamboo market basket with a shallow rim, the weave worn smooth with use, "
      + "empty, standing on a plain wooden table. Nothing else in frame. There will eventually be two "
      + "of these and they must match exactly. Photorealistic, natural colour, warm lamplight." },
];

const LOCS = [
  { name: "အိမ်ခြံ", en: "The house and yard",
    prompt: "A raised teak village house on wooden posts with a short flight of steps to a plank "
      + "door, a wide bare dirt yard in front of it, a mango tree to one side, a simple fence and open "
      + "gate, flooded paddy fields beyond. Overcast wet daylight. Empty, no people." },
  { name: "မီးဖိုချောင်", en: "The kitchen",
    prompt: "A simple village kitchen: a clay stove with a blackened rice pot on it, a low wooden "
      + "table, a clay water pot, cooking things on a shelf, a kerosene lamp, plank walls and floor. "
      + "Warm dim light. Empty, no people." },
  { name: "တံခါး", en: "The front door",
    prompt: "The front plank door of a raised village house seen from inside: a simple wooden latch, "
      + "worn boards, a gap beneath it, a short landing beyond. Warm lamplight inside, cold storm "
      + "light showing at the edges. Closed, empty, no people." },
];

const WHO = {
  2: ["သား"], 4: ["အမေ"], 6: ["ခင်"], 7: ["သား"], 8: ["ခွေး"], 9: ["သား"],
  10: ["အမေ", "ခြင်းတောင်း"], 11: ["အမေ"], 13: ["အမေ"], 14: ["သား", "အမေ"], 15: ["အမေ"],
  16: ["အမေ"], 17: ["ခြင်းတောင်း"], 18: ["အမေ", "ခင်"], 19: ["အမေ"], 20: ["သား"],
  21: ["အမေ"], 22: ["အမေ"], 23: ["အမေ"], 25: ["အမေ"], 26: ["အမေ", "ခင်"],
  27: ["အမေ", "ခင်"], 28: ["အမေ"], 29: ["အမေ"], 30: ["သား", "အမေ"], 31: ["ခွေး"],
  32: ["ခင်"], 33: ["အမေ", "ခြင်းတောင်း"], 34: ["အမေ", "ခွေး", "ခြင်းတောင်း"], 35: ["အမေ"],
  37: ["အမေ"], 39: ["အမေ"], 41: ["အမေ", "ခြင်းတောင်း"], 43: ["အမေ"],
  44: ["အမေ", "သား", "ခင်"], 45: ["အမေ"], 46: ["ခြင်းတောင်း"], 47: ["ခြင်းတောင်း"],
  49: ["အမေ"], 50: ["သား"], 52: ["အမေ"], 53: ["သား"], 55: ["အမေ"],
};
const WHERE = {
  1: "အိမ်ခြံ", 2: "အိမ်ခြံ", 3: "အိမ်ခြံ", 4: "အိမ်ခြံ", 5: "အိမ်ခြံ", 6: "အိမ်ခြံ",
  7: "မီးဖိုချောင်", 8: "အိမ်ခြံ", 9: "အိမ်ခြံ", 10: "အိမ်ခြံ", 12: "အိမ်ခြံ",
  13: "အိမ်ခြံ", 14: "အိမ်ခြံ", 17: "မီးဖိုချောင်", 18: "မီးဖိုချောင်", 19: "မီးဖိုချောင်",
  20: "မီးဖိုချောင်", 21: "မီးဖိုချောင်", 22: "မီးဖိုချောင်", 23: "မီးဖိုချောင်",
  24: "မီးဖိုချောင်", 25: "မီးဖိုချောင်", 26: "မီးဖိုချောင်", 27: "မီးဖိုချောင်",
  29: "မီးဖိုချောင်", 30: "မီးဖိုချောင်", 31: "အိမ်ခြံ", 32: "အိမ်ခြံ", 33: "တံခါး",
  34: "အိမ်ခြံ", 35: "မီးဖိုချောင်", 36: "တံခါး", 37: "မီးဖိုချောင်", 38: "တံခါး",
  39: "မီးဖိုချောင်", 40: "တံခါး", 41: "တံခါး", 42: "မီးဖိုချောင်", 43: "မီးဖိုချောင်",
  44: "မီးဖိုချောင်", 46: "မီးဖိုချောင်", 47: "မီးဖိုချောင်", 48: "အိမ်ခြံ",
  50: "မီးဖိုချောင်", 51: "အိမ်ခြံ", 54: "အိမ်ခြံ", 55: "အိမ်ခြံ",
};

const TITLES = ["She came home twice", "Sixteen", "The house", "She goes to market",
  "The storm comes", "Khin at the window", "Washing the rice", "The dog hides",
  "He steps out", "She is dry", "Her clothes", "The rain", "Her feet", "Did you have an umbrella?",
  "Is it raining?", "She doesn't laugh", "The basket", "How old are you?", "No answer",
  "He starts to feel it", "In the kitchen", "The wrong hand", "She looks at her own hand",
  "Lighting the lamp", "Her face in the light", "Khin talks to her", "Khin takes her wrist",
  "The scar", "It already happened", "He doesn't understand", "The dog runs out",
  "Khin turns white", "At the gate", "She crosses the yard", "The one at the stove",
  "Open the door, son", "She turns her head", "Knocking again", "Sorrow", "He opens it",
  "Soaked", "Nobody there", "Who cooked this?", "They tell her everything", "No scar",
  "Two baskets", "Empty", "Years pass", "The burn",
  "He remembers", "She gets ill", "The blouse", "He understands", "The empty yard",
  "Coming home early"];

const ACT = { 1: "That evening", 4: "The storm", 10: "The dry mother", 21: "The wrong hand",
  31: "The second mother", 40: "Both at once", 48: "Twelve years later", 54: "What it was" };

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

const NOTE = `<b style="color:#ffb4b4">One mother. One reference. This is the whole film.</b>
  <br><br>The two mothers must be <b>indistinguishable</b>, so there is a single mother plate and every
  shot of either version attaches it. Giving them separate references would be the fastest way to break
  the story — two references drift, and the moment the audience can tell them apart the ending stops
  landing.
  <br><br><b>There are exactly two differences</b>, and they are carried by the shot prompts, never by
  the reference:
  <br>&nbsp;&nbsp;• <b>Dry or soaked.</b> Shots 10–16 are the impossible one — walking through a
  downpour with dry hair, dry cloth, clean feet. Shots 33, 34, 41 and 43 are the real one, drenched.
  <br>&nbsp;&nbsp;• <b>Scar or no scar.</b> A thin pale burn on the <b>RIGHT wrist</b>. Present in shot
  28, absent in shot 45, and back in shot 49 twelve years later in exactly the same place. Those three
  macros have to match each other precisely — they are the reveal.
  <br><br><b>Neither version is ever monstrous.</b> No pallor, no strange eyes, no cold grade, nothing
  uncanny. She looks exactly like their mother because she is their mother. The dread is entirely in
  small wrong details: the dry clothes, the dog hiding, the left hand, asking her own daughter's age.
  <br><br><b>Shot 39 is the emotional turn</b> — the first time she looks openly sorrowful. Grieving,
  not threatening. If it reads as menace the ending is lost.
  <br><br><b>Shot 55 is the answer.</b> Same blouse, same htamein, dry, in the rain — and walking
  <i>toward</i> the house, not away. That direction is the story.
  <br><br>Khin appears only in safe domestic scenes. Build all ${NREF} references before starting.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/mother.html", buildPage({
  title: "နှစ်ခါပြန်လာတဲ့အမေ — image prompts",
  subtitle: `SHE CAME HOME TWICE · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "mother.done.v1",
  note: NOTE, nav: NAV("mother"),
  groups: [
    { heading: "People and the basket — build these first", items: [...CAST, ...PROPS] },
    { heading: "Locations — one plate per recurring setting", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  mother attached: ${shots.filter((s) => s.who.includes("အမေ")).length} shots`);
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
