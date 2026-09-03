/**
 * Builds house.html for မေ့နေတဲ့အိမ် (The Forgotten House).
 *
 *   node gen-house.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-house.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "kgxo1abemen";

const STYLE =
  "A small village in the Ayeyarwady Delta near Hinthada, lowland Myanmar, monsoon season. Narrow "
  + "raised dirt roads with drainage canals running alongside, small wooden houses standing on tall "
  + "posts, bamboo footbridges, coconut and betel-nut palms, dense bamboo clumps, wet lowland fields, "
  + "small wooden boats tied under houses. Flat humid overcast daylight, or low gold light at sunset. "
  + "No mountains, no dry-zone scenery. Cinematic photorealism, gentle and pastoral rather than gothic. "
  + "Naturalistic colour, 35mm film grain, 16:9. No modern objects, no vehicles, no electric light. "
  + "Nothing monstrous, no corpse, no visible ghost. No legible text, script or handwriting anywhere in "
  + "the image, no watermark.";

const CAST = [
  { name: "ကျော်မင်း", en: "Kyaw Min",
    prompt: "Burmese young man of eighteen, slim, short black hair, an ordinary open face. A faded "
      + "pale short-sleeved shirt and a dark checked longyi — a longyi, NOT trousers — and sandals. "
      + "Plain wooden wall behind, waist-up three-quarter view, humid overcast daylight, neutral "
      + "expression, photorealistic, natural colour." },
  { name: "မိုး", en: "Moe",
    prompt: "Burmese girl of about eighteen, slight build, dark hair tied back simply, a calm quiet "
      + "face. A plain white blouse and a green htamein. She is COMPLETELY ORDINARY AND ALIVE — "
      + "healthy skin, solid, warmly lit, never pale, never grey, never corpse-like, never "
      + "translucent, no effects of any kind. Plain wooden wall behind, waist-up three-quarter view, "
      + "warm daylight, photorealistic, natural colour." },
];

const PROPS = [
  { name: "စာအုပ်", en: "The green book",
    prompt: "An old English schoolbook with a faded green cloth cover, worn soft at the corners and "
      + "slightly water-stained, lying CLOSED on a plain wooden surface, seen from slightly above. "
      + "There is NO title, lettering, printing or writing of any kind visible anywhere on it. "
      + "Photorealistic, natural colour, warm lamplight." },
  { name: "အိမ်", en: "The house",
    prompt: "An ageing teak-and-bamboo house raised on six tall wooden posts beside a narrow delta "
      + "canal, a small bamboo footbridge crossing the water to its door, TWO lime trees standing "
      + "beside it, a small wooden boat tied underneath between the posts, thatch and corrugated roof, "
      + "a dim doorway. Seen from the road across the canal in flat daylight. Empty, no people." },
];

/**
 * THE PLOT AND THE HOUSE MUST SHARE A FRAME.
 *
 * Four shots of the empty grass (9, 23, 51, 57) and the one shot where the house
 * comes back (35) are the same view from the same place on the road. That
 * equivalence is the story — the house did not move, the person who remembered
 * it did. If the framing wanders, the return reads as a different location and
 * the ending has nothing to land on.
 */
const LOCS = [
  { name: "ရေမြောင်း", en: "The canal bank — the repeated framing",
    prompt: "A stretch of narrow delta canal seen from a raised dirt road: dark still water, a grassy "
      + "far bank overgrown with long weeds, betel-nut palms and bamboo behind it, a flat humid "
      + "overcast sky. Shot from standing height at the roadside, level, wide. Completely empty — this "
      + "plate exists so the same framing can hold whether or not a house is standing in it." },
  { name: "မြေလမ်း", en: "The dirt road",
    prompt: "A narrow raised dirt road in the Ayeyarwady Delta running away from camera, a long "
      + "drainage canal on one side and wet paddy with betel-nut palms on the other, wheel ruts, "
      + "dense bamboo beyond. Humid overcast daylight. Empty, no people." },
  { name: "အိမ်တွင်း", en: "The interior",
    prompt: "The inside of a simple delta village house: plank walls and floor, a low wooden table, a "
      + "shuttered window, a wooden chest of books in one corner, a kerosene lamp. Dim warm light. "
      + "Empty, no people." },
];

const WHO = {
  2: [], 4: ["အိမ်"], 5: ["အိမ်"], 6: ["မိုး"], 7: ["ကျော်မင်း"], 8: ["ကျော်မင်း"],
  10: ["ကျော်မင်း"], 13: ["ကျော်မင်း"], 15: ["ကျော်မင်း"], 16: ["ကျော်မင်း"],
  17: ["စာအုပ်"], 18: ["စာအုပ်"], 19: ["ကျော်မင်း", "စာအုပ်"], 20: ["ကျော်မင်း"],
  21: ["ကျော်မင်း"], 22: ["ကျော်မင်း"], 26: ["ကျော်မင်း"], 27: ["မိုး"], 28: ["စာအုပ်"],
  29: ["ကျော်မင်း"], 31: ["ကျော်မင်း"], 33: ["ကျော်မင်း"], 34: ["ကျော်မင်း"],
  35: ["အိမ်"], 36: ["မိုး"], 37: ["မိုး"], 38: ["မိုး", "အိမ်"], 39: ["ကျော်မင်း", "မိုး"],
  41: ["မိုး", "စာအုပ်"], 42: ["မိုး"], 43: ["ကျော်မင်း", "စာအုပ်"], 44: ["မိုး"],
  45: ["မိုး"], 47: ["မိုး"], 49: ["ကျော်မင်း"], 50: ["ကျော်မင်း"], 52: ["စာအုပ်"],
  53: ["မိုး"], 58: [], 59: ["ကျော်မင်း"], 61: ["ကျော်မင်း"],
};
const WHERE = {
  1: "မြေလမ်း", 2: "မြေလမ်း", 3: "မြေလမ်း", 4: "ရေမြောင်း", 5: "ရေမြောင်း",
  6: "ရေမြောင်း", 7: "မြေလမ်း", 8: "မြေလမ်း", 9: "ရေမြောင်း", 10: "ရေမြောင်း",
  11: "အိမ်တွင်း", 12: "အိမ်တွင်း", 13: "အိမ်တွင်း", 14: "အိမ်တွင်း", 15: "မြေလမ်း",
  16: "မြေလမ်း", 17: "အိမ်တွင်း", 18: "အိမ်တွင်း", 19: "အိမ်တွင်း", 20: "အိမ်တွင်း",
  21: "အိမ်တွင်း", 22: "အိမ်တွင်း", 23: "ရေမြောင်း", 24: "ရေမြောင်း", 25: "ရေမြောင်း",
  26: "အိမ်တွင်း", 28: "အိမ်တွင်း", 29: "အိမ်တွင်း", 30: "ရေမြောင်း", 31: "ရေမြောင်း",
  32: "ရေမြောင်း", 33: "ရေမြောင်း", 34: "ရေမြောင်း", 35: "ရေမြောင်း", 36: "ရေမြောင်း",
  38: "ရေမြောင်း", 39: "ရေမြောင်း", 40: "ရေမြောင်း", 43: "ရေမြောင်း", 44: "ရေမြောင်း",
  46: "ရေမြောင်း", 48: "ရေမြောင်း", 49: "ရေမြောင်း", 50: "ရေမြောင်း", 51: "ရေမြောင်း",
  52: "အိမ်တွင်း", 54: "မြေလမ်း", 55: "မြေလမ်း", 56: "မြေလမ်း", 57: "ရေမြောင်း",
  58: "မြေလမ်း", 59: "မြေလမ်း", 60: "ရေမြောင်း", 61: "မြေလမ်း",
};

const TITLES = ["The road east", "The village", "Half way along", "The house", "Who lived there",
  "Moe", "Passing on the bicycle", "He stops", "★ Nothing there", "No post holes",
  "Which Grandmother Phyu?", "She isn't joking", "That was always empty ground", "She doesn't laugh",
  "Nobody remembers", "You dreamed it", "The green book", "The box of books", "He opens it",
  "A hand that isn't mine", "The folded note", "His hands shake", "★ Still nothing",
  "One bamboo post", "Black water", "He starts to forget", "Her face won't come",
  "He writes it all down", "Reading it back", "Near sunset", "Three posts",
  "The far bank", "He calls across", "Walking through the grass", "★ The house returns",
  "Moe on the bridge", "You still remember", "They didn't forget", "Don't come up",
  "The dark doorway", "How long have you been here", "Because of the note",
  "But you've forgotten too", "Don't come back", "I didn't know then",
  "Someone is walking inside", "Run", "The door opens", "No bridge", "In the water",
  "★ Gone again", "The note in the book", "Her face fades", "Years later",
  "A boy on the road", "He points", "★ The empty plot today", "She knows my name",
  "The note is gone", "Lime blossom", "★ It was the one who remembered"];

const ACT = { 1: "The road", 9: "It was never there", 17: "The book", 23: "Forgetting",
  30: "Sunset", 35: "Moe", 46: "Run", 54: "Years later" };

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

const NOTE = `<b style="color:#ffb4b4">Two things carry this film. Read both before you start.</b>
  <br><br><b>1. The empty plot and the house share one frame.</b> Shots <b>9, 23, 51 and 57</b> are the
  bare grassy bank, and shot <b>35</b> is the same view with the house standing in it. Same spot on the
  road, same height, same amount of canal in the foreground. That equivalence <i>is</i> the story — the
  house never moved, the person who remembered it did. If the framing wanders between them, the return
  reads as a different location and the ending has nothing to land on. Build the ရေမြောင်း plate first
  and attach it to all five.
  <br><br><b>2. Never render writing.</b> The green book carries his name and a lender's inscription,
  and the folded note is Moe's handwriting — exactly what the models turn into convincing nonsense. It
  already cost us the receipt close-ups in စက်နံပါတ် ၇. The book's own reference is the CLOSED cover
  with nothing printed on it at all, so it cannot teach the model to put script on the page later. The
  shots use grazing angles, a hand across the paper, and a single stroke of ink in macro. <b>If a
  generated image contains letterforms, throw it away.</b>
  <br><br><b>Moe is never a ghost.</b> Healthy, solid, warmly lit, entirely ordinary — no pallor, no
  grey cast, no translucency. She looks like a village girl because the film only works if she does.
  Shots 36, 37 and 42 are the ones to hold to that.
  <br><br><b>Grandmother Phyu is never seen.</b> At most a voice from a dark doorway. Shots 40, 46 and
  48 must show no figure and no face at all — the door opens on nothing.
  <br><br><b>Delta, not dry zone.</b> Canals, bamboo footbridges, coconut and betel-nut palms, houses on
  tall posts, boats. No hills, no dust, no dry-zone scenery anywhere.
  <br><br>Build all ${NREF} references before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/house.html", buildPage({
  title: "မေ့နေတဲ့အိမ် — image prompts",
  subtitle: `THE FORGOTTEN HOUSE · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "house.done.v1",
  note: NOTE, nav: NAV("house"),
  groups: [
    { heading: "People and objects — build these first", items: [...CAST, ...PROPS] },
    { heading: "Locations — the canal plate is the important one", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name}: ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  ★ marker shots: ${shots.filter((s) => s.raw.includes("★")).map((s) => s.id).join(", ")}`);
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
