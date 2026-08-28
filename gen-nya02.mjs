/**
 * Builds index.html for သုံးခါခေါ်သံ (Three Times, Your Name).
 *
 * Reads the scene rows straight out of video-lab's lab.db rather than an
 * intermediate JSON file. The Extra Bowl sheet was generated from a scenes2.json
 * that lived in a scratchpad and no longer exists, so that page can never be
 * regenerated — only hand-edited. Pointing at the database instead means this
 * page and the film it documents can never drift apart.
 *
 *   node gen-nya02.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-nya02.mjs";
import { buildPage } from "./page.mjs";

const PROJECT = "ksa4c7xxre6";
const TITLE_MM = "သုံးခါခေါ်သံ";
const TITLE_EN = "THREE TIMES, YOUR NAME";

const STYLE =
  "Rural Myanmar village during monsoon, timeless — no modern objects, no electric light, no phones, "
  + "no vehicles, no printed fabric. Cinematic photorealism, Myanmar folk horror. Warm dim kerosene "
  + "lamplight indoors, cold rain-blue darkness outside. 16:9, natural colour, shallow depth of field. "
  + "Never show a complete ghost — no visible figure, face or creature anywhere in the frame. No gore. "
  + "No text, lettering, numbers, captions or watermarks anywhere in the image.";

const PORTRAIT =
  "Plain dark wooden wall behind, warm kerosene lamp light from one side, waist-up three-quarter view, "
  + "neutral expression, photorealistic, natural colour, rural Myanmar village, no modern clothing.";

const CHARS = [
  ["ကိုစိန်", "Ko Sein",
   "Burmese man of 32, lean, dark sun-weathered skin, short black hair, thin moustache, plain white "
   + "cotton singlet, faded green checked longyi — a longyi, NOT trousers — barefoot, a thin cloth tied "
   + "round his head. Tired, closed face."],
  ["မောင်လှ", "Maung Hla",
   "Burmese boy of 17, slighter and a little taller than his brother, smooth unlined face, no moustache, "
   + "plain white cotton shirt, brown longyi — NOT trousers — barefoot. Open, untroubled expression."],
  ["ဦးဖိုးသာ", "U Pho Tha",
   "Burmese village elder in his seventies, thin white hair, deeply lined face, white cotton jacket over "
   + "a dark longyi, a worn wooden walking stick. Watchful."],
].map(([name, en, body]) => ({ name, en, prompt: `${body} ${PORTRAIT}` }));

const PROP = { name: "ထင်းစည်း", en: "The firewood bundle", prompt:
  "A bundle of twelve short cut banyan branches lying on bare dark earth, tied once with a twist of "
  + "dried grass rope. The cut ends are pale bone-white and smooth, clearly countable. The bark is grey "
  + "and dry. Nothing else in frame. Photorealistic, natural colour, overcast daylight." };

/**
 * LOCATION PLATES.
 *
 * Four places carry 23 of the 30 shots between them, so they drift the same way
 * an unanchored face does — and the stair is the one that actually breaks the
 * story if it moves. Shots 22, 27, 28 and 29 are four angles on ONE structure
 * during the climax: looking down it, the lit top of it, the door at its foot,
 * and the boy standing at the bottom. If the tread count or the handrail changes
 * between them the geometry stops reading and the ending is just dark pictures.
 *
 * Each plate is deliberately empty and evenly lit — a reference has to describe
 * the place, not a moment in it.
 */
const LOCS = [
  ["ညောင်ပင်", "The banyan",
   "An enormous old banyan tree standing alone at the edge of a rural Myanmar village, dozens of aerial "
   + "roots hanging from its limbs all the way down to the ground like a ragged curtain, a broad low "
   + "canopy. The bare earth directly beneath it is dry and pale while the ground all around it is soaked "
   + "black mud. Seen from thirty feet away with the whole tree in frame, flat overcast daylight. Empty, "
   + "no people."],
  ["အိမ်တွင်းခန်း", "The house interior",
   "The main room of a poor teak stilt house in rural Myanmar: dark plank walls and a floor worn smooth, "
   + "a low doorway to one side, one shuttered window, woven reed mats laid on the floor, a single "
   + "kerosene lamp standing on a low wooden stool throwing warm light from one corner and deep shadow "
   + "everywhere else. Night. Empty, no people."],
  ["လှေကား", "The stair",
   "The stair of a Myanmar teak stilt house: steep and narrow, worn open treads, one plain wooden "
   + "handrail, running from a small upper landing down to a plank door at ground level. Seen side-on so "
   + "the whole run is visible from top to bottom. Warm kerosene lamp light at the top, deep darkness at "
   + "the foot. Night. Empty, no people."],
  ["အိမ်အပြင်", "The house outside",
   "A small teak stilt house in a rural Myanmar village seen from the yard: raised on wooden posts about "
   + "five feet above wet ground, thatch roof with deep overhanging eaves, the open space beneath the "
   + "house holding a wooden firewood rack, a stair leading up to a plank door. Monsoon rain, soaked "
   + "black earth, no other building close. Empty, no people."],
].map(([name, en, prompt]) => ({ name, en, prompt: `${prompt} Photorealistic, natural colour.` }));

/** Which location plate to attach, by what is actually in frame as a PLACE.
 *  Scene 28 mentions banyan leaves but happens at the foot of the stair. */
const WHERE = {
  1: "ညောင်ပင်", 2: "ညောင်ပင်", 4: "အိမ်တွင်းခန်း", 5: "အိမ်တွင်းခန်း", 6: "အိမ်အပြင်",
  7: "အိမ်တွင်းခန်း", 8: "ညောင်ပင်", 9: "ညောင်ပင်", 10: "ညောင်ပင်", 11: "ညောင်ပင်",
  12: "ညောင်ပင်", 14: "ညောင်ပင်", 16: "အိမ်အပြင်", 17: "အိမ်တွင်းခန်း", 18: "အိမ်တွင်းခန်း",
  22: "လှေကား", 23: "အိမ်တွင်းခန်း", 24: "အိမ်တွင်းခန်း", 25: "အိမ်အပြင်", 27: "လှေကား",
  28: "လှေကား", 29: "လှေကား", 30: "ညောင်ပင်",
};

/** Which references to attach in Flow. Set per shot, not matched by regex — the
 *  prompts describe people generically ("a Burmese man"), so a regex over the
 *  text would tag almost nothing and silently drop the references that matter. */
const WHO = {
  3: ["ဦးဖိုးသာ"], 7: ["ကိုစိန်", "မောင်လှ", "ဦးဖိုးသာ"], 9: ["ကိုစိန်"],
  12: ["ကိုစိန်"], 13: ["ကိုစိန်", "ထင်းစည်း"], 14: ["ကိုစိန်", "ထင်းစည်း"],
  16: ["ထင်းစည်း"], 17: ["ဦးဖိုးသာ"], 18: ["ကိုစိန်"], 19: ["ကိုစိန်", "ဦးဖိုးသာ"],
  20: ["ကိုစိန်"], 21: ["ဦးဖိုးသာ", "ထင်းစည်း"], 24: ["ကိုစိန်", "မောင်လှ"],
  26: ["ကိုစိန်"], 29: ["မောင်လှ"], 30: ["ထင်းစည်း"],
};

const TITLES = ["The village", "The rules", "What lives in it", "Daw Ngwe dies", "The wake",
  "No dry wood", "The offer refused", "The fallen limb", "Out at eleven", "Dry ground",
  "The roots move", "The cut", "Twelve sticks", "Nothing follows", "The pyre", "Four left over",
  "The seventh day", "Once", "The rule", "By the third", "Take it back", "Twice",
  "Ash in the water", "He warns his brother", "Two, then silence", "Why it stopped",
  "“ဟုတ်ကဲ့”", "The open door", "At the foot of the stair", "Three short"];

const ACT = { 1: "The banyan", 4: "The death", 8: "The taking", 15: "The pyre",
  18: "The first call", 22: "The second call", 25: "The third night", 30: "What came back" };

// ── pull the scenes ─────────────────────────────────────────────────────────
const db = new Database("/Users/puraidointern/video-lab/data/lab.db", { readonly: true });
const rows = db.prepare(
  "SELECT idx, units, image_prompt FROM scenes WHERE project_id=? ORDER BY idx").all(PROJECT);
db.close();
if (rows.length !== 30) throw new Error(`expected 30 scenes, got ${rows.length}`);

let act = "";
const shots = rows.map((r) => {
  const n = r.idx + 1;
  if (ACT[n]) act = ACT[n];
  return {
    id: String(n), title: TITLES[r.idx], act,
    who: WHO[n] ?? [],
    where: WHERE[n] ?? null,
    raw: r.image_prompt.replace(/^ANCHOR SHOT — /, ""),
    lines: JSON.parse(r.units).map((u) => u.text),
    mm: MM_SHOT[String(n)] || "",
  };
});

// Numbering every prompt is what stops Flow re-rendering a variation of the
// previous frame instead of a new one.
const NREF = CHARS.length + 1 + LOCS.length;
const TOTAL = shots.length + NREF;
CHARS.forEach((c, i) => {
  c.mm = MM_REF[c.name] || "";
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). `
    + `A new and distinct character; do not repeat or vary any previous reference.\n\n${c.prompt}`;
});
PROP.mm = MM_REF[PROP.name] || "";
PROP.prompt = `Reference ${CHARS.length + 1} of ${NREF} — ${PROP.en}. `
  + `A new and distinct reference image.\n\n${PROP.prompt}`;
LOCS.forEach((l, i) => {
  l.mm = MM_REF[l.name] || "";
  l.prompt = `Reference ${CHARS.length + 2 + i} of ${NREF} — ${l.en} (${l.name}), a LOCATION plate. `
    + `A new and distinct place; do not repeat or vary any previous reference. Establish the place `
    + `itself, empty of people and of incident.\n\n${l.prompt}`;
});
shots.forEach((s, i) => {
  s.prompt = `Shot ${i + 1} of ${shots.length} — scene ${s.id}, "${s.title}". A new and distinct frame `
    + `in an ongoing sequence; do not repeat, vary or re-render any previous image.\n\n`
    + `${s.raw.trim()}\n\n${STYLE}`;
});

const NAV = `<a href="/">အခန်း ၈၀၂ (current)</a><a href="/banyan.html">သုံးခါခေါ်သံ</a>`
  + `<a href="/extra-bowl.html">The Extra Bowl</a>`;

const NOTE = `<b>Do this first.</b> Build all eight references below and approve each one before
  starting the shot list. The firewood bundle matters most of the objects — the ending only works if you
  can count the sticks, so the twelve pale cut ends have to stay identical from shot 13 through shot 30.
  Scene 7 is the one frame with all three faces in it; if a face drifts later, come back and re-attach
  from there.
  <br><br><b>The stair is the one that breaks the story.</b> Shots 22, 27, 28 and 29 are four angles on
  the same structure during the climax — looking down it, its lit top, the door at its foot, the boy
  standing at the bottom. If the treads or the handrail change between them, the geometry stops reading
  and the ending is just dark pictures. Attach လှေကား to all four.
  <br><br><b>Never show a complete ghost.</b> Suggestion only — no face, no full figure, in any shot.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/banyan.html", buildPage({
  title: "သုံးခါခေါ်သံ — image prompts",
  subtitle: `THREE TIMES, YOUR NAME · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "nya02.done.v1",
  note: NOTE, nav: NAV,
  groups: [
    { heading: "Characters and the prop", items: [...CHARS, PROP] },
    { heading: "Locations — one plate per recurring background", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF} (${CHARS.length} chars + 1 prop + ${LOCS.length} locations)  total numbered ${TOTAL}`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no location: ${shots.filter((s) => !s.where).map((s) => s.id).join(", ")}`);
console.log(`shots with references: ${shots.filter((s) => s.who.length).length}`);
console.log(`shots missing a Burmese gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
