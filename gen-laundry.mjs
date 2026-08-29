/**
 * Builds laundry.html for စက်နံပါတ် ၇ (Machine Seven).
 *
 *   node gen-laundry.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-laundry.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "d6inxhufwc0";

const STYLE =
  "A small 24-hour self-service laundromat in Tamwe, Yangon, present day, after 1 a.m. Hard white "
  + "fluorescent ceiling light, white tiled floor, pale painted walls, a glass shopfront with fine rain "
  + "and wet street reflections beyond. Cinematic urban horror photography, clean and ordinary rather "
  + "than derelict, desaturated cool palette with a faint green cast from the tubes, 35mm film grain, "
  + "shallow depth of field, 16:9, photorealistic. No village scenery, no traditional dress, no "
  + "folklore objects. No visible ghost, no body, no face in the water. No legible text or numbers "
  + "anywhere in the image, no watermark.";

const CAST = [
  { name: "ယောက်ျား", en: "The man",
    prompt: "Burmese man of about 28, slim, short black hair, clean-shaven, tired ordinary face. Plain "
      + "dark grey t-shirt, dark casual trousers — trousers, NOT a longyi — and trainers. Plain pale "
      + "wall behind, cold overhead light, waist-up three-quarter view, neutral expression, "
      + "photorealistic, natural colour, present-day Yangon." },
  { name: "ဝန်ထမ်း", en: "The daytime worker",
    prompt: "A laundromat staff member behind a counter in daylight, seen from the customer's side: "
      + "torso, folded arms and hands only, the head cropped above the top of frame. Plain polo shirt, "
      + "no branding. THE FACE IS NEVER SHOWN in any shot — crop it out or turn it away. "
      + "Photorealistic, natural colour, flat daylight." },
];

const PROPS = [
  { name: "အစိမ်းရောင်အင်္ကျီ", en: "The green blouse",
    prompt: "A pale sage-green women's blouse, long sleeves, plain weave, no pattern, no print, small "
      + "buttons, slightly worn at the cuffs. Laid flat on a plain white surface, seen straight on, "
      + "nothing else in frame. Photorealistic, natural colour, soft even daylight." },
  { name: "အဝတ်အိတ်", en: "The laundry bag",
    prompt: "A plain dark navy-blue nylon laundry bag with a drawstring top, slightly faded, standing "
      + "upright and half full on a plain floor, no branding or lettering. Nothing else in frame. "
      + "Photorealistic, natural colour, cold overhead light." },
];

/**
 * LOCATION PLATES.
 *
 * Machine 7 carries sixteen shots and it is the thing that must not exist, so it
 * has to be believable as a sibling of the other six and subtly wrong at the same
 * time — same make, visibly older. One plate covers the room for BOTH day and
 * night: a reference fixes geometry and fittings, not lighting, and the prompts
 * carry the hour.
 */
const LOCS = [
  { name: "ဆိုင်တွင်း", en: "The laundromat",
    prompt: "The interior of a small 24-hour self-service laundromat: six identical white front-loading "
      + "washing machines in a row along one wall, four tumble dryers facing them, one long moulded "
      + "plastic bench down the middle, a white tiled floor, a plain blank white wall at the end of the "
      + "machine row, a glass shopfront. Even neutral light, seen wide from the door. Empty, no people, "
      + "no incident." },
  { name: "စက်နံပါတ် ၆", en: "Machine 6",
    prompt: "A single white front-loading washing machine seen straight on, ordinary and clean, a "
      + "circular glass porthole door, a simple control panel above it, a small number plate. Nothing "
      + "unusual about it. Empty, door closed, no people." },
  { name: "စက်နံပါတ် ၇", en: "Machine 7 — the one that isn't there",
    prompt: "A front-loading washing machine of the SAME make and size as the others but visibly older: "
      + "the white enamel yellowed and dulled, the steel trim scuffed, the rubber door seal perished at "
      + "one edge, a small square of yellowed paper taped to its lid with the corners curling. It "
      + "stands at the end of the row against a blank wall. Empty, door closed, no people." },
  { name: "အခန်း", en: "The apartment",
    prompt: "A small plain rented room: a low bed against one wall, bare floor, one window with city "
      + "buildings beyond, a single overhead bulb. Sparse and tidy, almost nothing in it. Empty, no "
      + "people." },
  { name: "CCTV", en: "The CCTV view",
    prompt: "A wide black-and-white security-camera view of a laundromat interior from a high corner, "
      + "heavy sensor grain, slight barrel distortion, blown highlights under the ceiling tubes and "
      + "crushed blacks in the corners, low frame rate motion smear. The room empty, no people, no "
      + "timestamp overlay." },
];

const WHO = {
  2: ["အဝတ်အိတ်"], 4: ["ယောက်ျား"], 5: ["ယောက်ျား"], 6: ["ယောက်ျား"], 8: ["အစိမ်းရောင်အင်္ကျီ"],
  9: ["ယောက်ျား"], 11: ["ယောက်ျား"], 13: ["ယောက်ျား"], 15: ["ယောက်ျား"], 19: ["ယောက်ျား"],
  22: ["ယောက်ျား"], 23: ["ယောက်ျား"], 25: ["အစိမ်းရောင်အင်္ကျီ"], 26: ["အစိမ်းရောင်အင်္ကျီ"],
  27: ["အစိမ်းရောင်အင်္ကျီ"], 28: ["ယောက်ျား"], 29: ["အစိမ်းရောင်အင်္ကျီ"],
  30: ["ယောက်ျား", "အဝတ်အိတ်"], 32: ["ယောက်ျား"], 33: ["ယောက်ျား", "အဝတ်အိတ်"],
  34: ["အဝတ်အိတ်"], 35: ["အဝတ်အိတ်"], 36: ["အစိမ်းရောင်အင်္ကျီ", "အဝတ်အိတ်"],
  38: ["အစိမ်းရောင်အင်္ကျီ"], 40: ["ဝန်ထမ်း"], 47: ["ဝန်ထမ်း"], 49: ["ယောက်ျား"],
  50: ["အစိမ်းရောင်အင်္ကျီ", "ဝန်ထမ်း"], 51: ["အဝတ်အိတ်"],
  52: ["အစိမ်းရောင်အင်္ကျီ", "အဝတ်အိတ်"],
};
const WHERE = {
  1: "စက်နံပါတ် ၆", 2: "အခန်း", 3: "ဆိုင်တွင်း", 4: "စက်နံပါတ် ၆", 5: "ဆိုင်တွင်း",
  6: "ဆိုင်တွင်း", 7: "စက်နံပါတ် ၇", 8: "စက်နံပါတ် ၇", 9: "ဆိုင်တွင်း", 10: "စက်နံပါတ် ၇",
  11: "ဆိုင်တွင်း", 12: "စက်နံပါတ် ၇", 13: "စက်နံပါတ် ၆", 14: "စက်နံပါတ် ၇",
  15: "စက်နံပါတ် ၆", 16: "စက်နံပါတ် ၇", 17: "စက်နံပါတ် ၇", 18: "စက်နံပါတ် ၇",
  20: "စက်နံပါတ် ၆", 21: "စက်နံပါတ် ၇", 22: "ဆိုင်တွင်း", 23: "စက်နံပါတ် ၆",
  24: "ဆိုင်တွင်း", 25: "စက်နံပါတ် ၇", 26: "စက်နံပါတ် ၇", 27: "စက်နံပါတ် ၇",
  28: "စက်နံပါတ် ၇", 29: "စက်နံပါတ် ၇", 30: "ဆိုင်တွင်း", 31: "စက်နံပါတ် ၇",
  32: "စက်နံပါတ် ၇", 33: "ဆိုင်တွင်း", 34: "အခန်း", 35: "အခန်း", 36: "အခန်း",
  37: "ဆိုင်တွင်း", 38: "ဆိုင်တွင်း", 39: "ဆိုင်တွင်း", 40: "ဆိုင်တွင်း",
  41: "CCTV", 42: "CCTV", 43: "CCTV", 44: "CCTV", 45: "CCTV", 46: "CCTV",
  47: "ဆိုင်တွင်း", 48: "ဆိုင်တွင်း", 49: "ဆိုင်တွင်း", 50: "ဆိုင်တွင်း",
  51: "အခန်း", 52: "အခန်း", 53: "အခန်း", 54: "အခန်း", 55: "အခန်း",
};

const TITLES = ["Nine in, ten out", "The pipe is broken", "The laundromat", "Machine six",
  "Thirty-six minutes", "Another machine", "Out of service", "Something turning",
  "He sits back down", "Both at once", "Probably networked", "A black t-shirt",
  "He can't see in", "The logo", "Pause", "The display", "Counting down", "Dry inside",
  "The burn hole", "Still turning", "His trousers", "Underneath", "Machine six is empty",
  "The light flickers", "Nine plus one", "Round and round", "As if worn", "He steps back",
  "Wet hair", "He decides to leave", "Folded and dry", "He takes them", "Nine again",
  "Home at three", "Morning", "At the bottom of the bag", "Back in daylight", "On the counter",
  "The white wall", "Only six machines", "The footage", "1:42", "Touching nothing",
  "Twenty minutes", "Folding air", "Stop the video", "The back room", "Still wet",
  "He can't speak", "The name on the label", "The bag has moved", "Not his clothes",
  "The receipt", "Three years ago", "Ten items out"];

const ACT = { 1: "Nine and ten", 3: "The night shift", 7: "Machine seven",
  18: "It gives them back", 25: "The blouse", 34: "Morning", 41: "The footage",
  51: "What came home" };

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

const refs = [...CAST, ...PROPS, ...LOCS];
const NREF = refs.length;
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

const NOTE = `<b>Do this first.</b> Build all ${NREF} references below and approve each one before
  starting the shot list — two people, two objects, five location plates.
  <br><br><b>Machine 7 is the whole film.</b> Sixteen of the ${shots.length} shots are it, and it has
  to do two contradictory things at once: read as a sibling of the other six so nobody questions it
  early, and be subtly older and wronger so the ending lands. Same make, same size, yellowed enamel,
  perished door seal, a curling paper notice. If it looks like a different model, the trick collapses.
  <br><br><b>Nothing inside the drum is ever a person.</b> Shots 27 and 29 are the closest the film
  gets: a blouse held open by water as if worn, and wet hair across a shoulder. No body, no head, no
  face, no skin — ever. If a model renders a person, discard and generate again.
  <br><br><b>The worker has no face</b> — crop above the frame or turn away, in all four of their shots.
  <br><br>One plate covers the shop for both day and night. A reference fixes geometry and fittings,
  not lighting, and each shot prompt carries its own hour.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/laundry.html", buildPage({
  title: "စက်နံပါတ် ၇ — image prompts",
  subtitle: `MACHINE SEVEN · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, `
    + `attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "machine7.done.v1",
  note: NOTE, nav: NAV("laundry"),
  groups: [
    { heading: "People and objects — build these first", items: [...CAST, ...PROPS] },
    { heading: "Locations — one plate per recurring setup", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
