/**
 * Builds memory.html for မှတ်မိခြင်း (Remembering).
 *
 *   node gen-memory.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-memory.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "63jvvpm7dgf";

const STYLE =
  "Modern Mandalay, present day. Contemporary Myanmar city: a quiet upmarket coffee shop with warm "
  + "pendant lights, an open-plan design office, tree-lined city roads at night, a comfortable "
  + "middle-class family home, and an unlit stretch of highway outside the city. Cinematic "
  + "photorealism in the register of an emotional thriller rather than folk horror — warm practical "
  + "light, shallow depth of field, restrained contrast, naturalistic colour, 35mm film grain, 16:9. "
  + "Nothing gothic, nothing grotesque, no gore beyond a little dried blood at one temple in the "
  + "final act. No legible text, lettering or numbers anywhere in the image, no watermark.";

const CAST = [
  { name: "မေသဇင်", en: "May Thazin",
    prompt: "Burmese woman of 26, an interior designer. Slim, shoulder-length dark hair worn down, a "
      + "calm intelligent face, minimal make-up. Smart casual work clothes — a plain blouse and a "
      + "modern longyi, a slim watch. Plain neutral wall behind, waist-up three-quarter view, soft "
      + "natural light, composed expression. Photorealistic, natural colour." },
  { name: "လင်းထက်", en: "Lin Htet",
    prompt: "Burmese man of 28, neat short hair, clean-shaven, well groomed, a warm open face that "
      + "reads as genuinely trustworthy and likeable. A smart shirt with the sleeves rolled. He must "
      + "look KIND here — this is the reference the early scenes attach, and the betrayal only lands "
      + "if the audience liked him. Plain neutral wall behind, waist-up three-quarter view, warm "
      + "light, a slight friendly smile. Photorealistic, natural colour." },
  { name: "မင်းခန့်", en: "Min Khant — one reference, two states",
    prompt: "Burmese man of 27, slim, short black hair, a quiet gentle face. A plain WHITE button "
      + "shirt and dark trousers, no jacket. He is COMPLETELY ORDINARY AND ALIVE here — solid, warmly "
      + "lit, healthy, no pallor, no translucency, no effects of any kind. Plain neutral wall behind, "
      + "waist-up three-quarter view, warm light, calm expression. Photorealistic, natural colour." },
  { name: "အမေ", en: "The mother",
    prompt: "Burmese woman in her fifties, hair tied back, simple house clothes, a kind face carrying "
      + "the weight of something withheld. Plain wall behind, waist-up, warm indoor light, "
      + "photorealistic, natural colour." },
];

const LOCS = [
  { name: "ကော်ဖီဆိုင်", en: "The coffee shop",
    prompt: "The interior of a quiet upmarket Mandalay coffee shop in the early evening: warm pendant "
      + "lights over wooden tables, upholstered chairs, a counter at the back, large windows onto a "
      + "city street. Empty, no people." },
  { name: "ရုံးခန်း", en: "The design office",
    prompt: "An open-plan interior design studio in daylight: a large work table with drawings, fabric "
      + "and material swatches pinned to a board, shelves of samples, plants, big windows. Empty, no "
      + "people." },
  { name: "အိမ်", en: "The family home",
    prompt: "The interior of a comfortable middle-class Mandalay home: a dining table, a small kitchen "
      + "beyond it, framed pictures, warm overhead light, tidy and lived-in. Empty, no people." },
  { name: "လမ်းမ", en: "The highway — the crash site",
    prompt: "An unlit stretch of highway outside a Myanmar city at night, seen from the verge: two "
      + "lanes of dark tarmac, one sodium street lamp, scrub and trees beyond, old scarring on the "
      + "road surface and a faint scorched patch on the shoulder. No traffic. Empty, no people." },
];

const WHO = {
  2: ["မေသဇင်"], 3: ["လင်းထက်", "မေသဇင်"], 4: ["မေသဇင်"], 5: ["လင်းထက်", "မေသဇင်"],
  6: ["မင်းခန့်"], 7: ["မင်းခန့်"], 8: ["မေသဇင်"], 9: ["မေသဇင်"], 10: ["မေသဇင်"],
  11: ["မေသဇင်"], 13: ["လင်းထက်"], 15: ["လင်းထက်"], 16: ["လင်းထက်", "မေသဇင်"],
  17: ["မေသဇင်"], 19: ["မေသဇင်"], 20: ["မင်းခန့်"], 21: ["မင်းခန့်"], 22: ["မေသဇင်"],
  23: ["မေသဇင်"], 24: ["မင်းခန့်"], 25: ["မေသဇင်", "မင်းခန့်"], 26: ["လင်းထက်", "မေသဇင်"],
  27: ["လင်းထက်"], 28: ["လင်းထက်"], 29: ["မင်းခန့်"], 30: ["လင်းထက်"], 31: ["လင်းထက်"],
  34: ["အမေ"], 35: ["မေသဇင်"], 36: ["အမေ", "မေသဇင်"], 37: ["မေသဇင်", "မင်းခန့်"],
  39: ["မေသဇင်"], 41: ["မင်းခန့်", "မေသဇင်"], 42: ["မေသဇင်"], 43: ["မေသဇင်"],
  45: ["လင်းထက်"], 46: ["မေသဇင်", "လင်းထက်"], 47: ["မေသဇင်"], 48: ["လင်းထက်"],
  49: ["မင်းခန့်"], 50: ["လင်းထက်"], 51: ["လင်းထက်", "မေသဇင်"], 52: ["လင်းထက်"],
  53: ["မေသဇင်"], 55: ["မေသဇင်"], 56: ["မင်းခန့်"], 57: ["မေသဇင်", "မင်းခန့်"],
  58: ["မေသဇင်", "မင်းခန့်"], 59: ["မေသဇင်"], 60: ["လင်းထက်", "မင်းခန့်"],
  61: ["မင်းခန့်"], 62: ["မေသဇင်", "မင်းခန့်"], 63: ["မင်းခန့်"], 64: ["မေသဇင်", "မင်းခန့်"],
  65: ["မင်းခန့်"], 66: ["မေသဇင်"], 67: ["မင်းခန့်"], 70: ["မေသဇင်"], 71: ["မင်းခန့်"],
  72: ["မေသဇင်"], 73: ["မေသဇင်"],
};
const WHERE = {
  1: "လမ်းမ", 2: "ရုံးခန်း", 5: "အိမ်", 6: "ကော်ဖီဆိုင်", 7: "ကော်ဖီဆိုင်",
  8: "ကော်ဖီဆိုင်", 9: "ကော်ဖီဆိုင်", 10: "ကော်ဖီဆိုင်", 11: "ကော်ဖီဆိုင်",
  13: "ကော်ဖီဆိုင်", 14: "ကော်ဖီဆိုင်", 15: "ကော်ဖီဆိုင်", 16: "ကော်ဖီဆိုင်",
  17: "အိမ်", 19: "အိမ်", 20: "ရုံးခန်း", 21: "ရုံးခန်း", 22: "ရုံးခန်း", 23: "ရုံးခန်း",
  24: "ရုံးခန်း", 25: "ရုံးခန်း", 33: "အိမ်", 34: "အိမ်", 35: "အိမ်", 36: "အိမ်",
  42: "အိမ်", 43: "အိမ်", 44: "အိမ်", 45: "လမ်းမ", 46: "လမ်းမ", 47: "လမ်းမ",
  48: "လမ်းမ", 49: "လမ်းမ", 50: "လမ်းမ", 51: "လမ်းမ", 52: "လမ်းမ", 53: "လမ်းမ",
  54: "လမ်းမ", 55: "လမ်းမ", 56: "လမ်းမ", 59: "လမ်းမ", 60: "လမ်းမ", 61: "လမ်းမ",
  62: "လမ်းမ", 63: "လမ်းမ", 64: "လမ်းမ", 65: "လမ်းမ", 66: "လမ်းမ", 67: "လမ်းမ",
  69: "လမ်းမ",
};

const TITLES = ["Two men on a dark road", "May Thazin", "He never left my side",
  "What I couldn't remember", "Don't look for it", "A stranger sits down", "I don't know him",
  "How do you take your coffee", "I stand up", "My thumb", "He knows me", "A wet road at night",
  "Lin Htet arrives", "The chair is empty", "One second of his face", "He doesn't answer",
  "I can't sleep", "The photograph", "I call him", "He's outside my office", "Tell me the truth",
  "A laugh with nothing in it", "We were together", "He can't say why", "I walk away",
  "In the car", "His hands on the wheel", "Some things are better forgotten",
  "The back seat", "He sees him too", "He gets out", "The truck", "The cup breaks",
  "My mother cries", "Before Lin Htet", "She takes my hands", "I was driving",
  "Headlights behind us", "It comes back", "The impact", "He pulled me out", "I wake up",
  "It all connects", "He wants to meet", "He's waiting", "The place", "I step back",
  "The mask comes off", "He's here", "Lin Htet backs away", "He grabs my wrist", "The knife",
  "Tears", "The lights go out", "I fall", "★ As he died", "The day we met", "The promise",
  "I hold up the phone", "He steps in front", "The knife passes through",
  "Only us left", "He's fading", "My hand goes through his", "He smiles", "I shake my head",
  "Going", "The memory card", "Her mother's medicine", "The old phone", "The video",
  "The screen goes dark", "Forward"];

const ACT = { 1: "Three days ago", 6: "The stranger", 17: "The photograph", 26: "In the car",
  33: "My mother", 37: "What really happened", 45: "The crash site", 56: "As he died",
  68: "After", 70: "A year later" };

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

const NREF = CAST.length + LOCS.length;
CAST.forEach((c, i) => {
  c.mm = (MM_REF[c.name] || "") + PLATE_MM;
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct person; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`
    + plate(c.pose);
});
LOCS.forEach((l, i) => {
  l.mm = MM_REF[l.name] || "";
  l.prompt = `Reference ${CAST.length + 1 + i} of ${NREF} — ${l.en} (${l.name}), a LOCATION plate. `
    + `A new and distinct place; do not repeat or vary any previous reference. Establish the place `
    + `itself, empty of people and of incident.\n\n${l.prompt} ${STYLE}`;
});
shots.forEach((s, i) => {
  s.prompt = `Shot ${i + 1} of ${shots.length} — scene ${s.id}, "${s.title}". A new and distinct frame `
    + `in an ongoing sequence; do not repeat, vary or re-render any previous image.\n\n`
    + `${s.raw.trim()}\n\n${STYLE}`;
});

const NOTE = `<b style="color:#ffb4b4">This one is a thriller, not a ghost story. Three rules.</b>
  <br><br><b>1. Min Khant is one reference in two states.</b> For sixty shots he is an ordinary living
  man in a white shirt — the audience should be able to think stalker before they think ghost, so
  there is no pallor, no translucency and no effect of any kind on him until the crash site. Only
  <b>shot 56</b> shows him as he died: dried blood at the right temple, one side of the shirt scorched
  and torn. <b>Same face, same build, same shirt.</b> The injury is added; the person is not changed.
  Do not build a second reference for the injured version — it will drift, and the audience will
  notice the change before the story wants them to.
  <br><br><b>2. Lin Htet has to look kind.</b> His reference is deliberately warm and likeable,
  because the betrayal only lands if the audience trusted him for the first half. There is no menace
  in his face until shot 48, where the mask comes off. Shots 3, 5 and 13 should read as a good man
  looking after someone he loves.
  <br><br><b>3. Nothing is grotesque.</b> No gore beyond a little dried blood at one temple. The crash
  in shot 40 is two cars at a distance in motion blur — no wreckage detail, no bodies. Min Khant is
  protective and calm in every frame he appears in, including the last ones.
  <br><br><b>May Thazin's tell</b> is her left thumb pressed with her own nail when she is tense —
  <b>shot 10</b> is the macro, and it is the moment a stranger proves he knows her. It should match the
  hands in shots 9 and 51.
  <br><br><b>Screens are never readable.</b> The photograph, the message thread and the video are all
  shot as glow, at an angle, or over a shoulder. If letterforms appear, throw the image away.
  <br><br>Build all ${NREF} references before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/memory.html", buildPage({
  title: "မှတ်မိခြင်း — image prompts",
  subtitle: `REMEMBERING · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, `
    + `attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "memory.done.v1",
  note: NOTE, nav: NAV("memory"),
  groups: [
    { heading: "Cast — build these first", items: CAST },
    { heading: "Locations", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name}: ${shots.filter((s) => s.where === l.name).length} shots`));
CAST.forEach((c) => console.log(`  ${c.name}: ${shots.filter((s) => s.who.includes(c.name)).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
