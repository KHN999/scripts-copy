/**
 * Builds zat.html for ပွဲမပြီးသေးဘူး (The Show Isn't Over).
 *
 *   node gen-zat.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-zat.mjs";
import { buildPage } from "./page.mjs";
import { PLATE, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "ozn5903w4pk";

const STYLE =
  "Rural upper Myanmar, Sagaing dry zone, roughly 1990s — no phones, no LED, no modern branding. "
  + "A travelling zat pwe on tour: a temporary bamboo-and-plank stage under a corrugated roof, "
  + "hand-painted canvas backdrops, incandescent bulbs strung on wire, a hsaing waing orchestra at "
  + "the side. Dry-zone country, not delta — tamarind and toddy palms, cracked pale earth, thin "
  + "scrub, dust in every beam of light. Cinematic photorealism, warm tungsten practical light "
  + "against deep night, shallow depth of field, natural colour, 35mm film grain, 16:9. No legible "
  + "text, lettering, numbers or signage anywhere in the image, no watermark, no gore.";

const CAST = [
  { name: "ဇာတ်ခုံလုပ်သား", en: "The stagehand — the narrator",
    prompt: "Burmese man of 23, slim, short black hair, a plain short-sleeved shirt and a dark checked "
      + "cotton longyi, rubber flip-flops, a cloth wound at his waist. Working hands. An ordinary, "
      + "unremarkable, slightly tired face — he is crew, not a performer, and must never look "
      + "glamorous. Plain neutral background, waist-up three-quarter view, warm bulb light, "
      + "photorealistic, natural colour." },
  { name: "မသီတာ", en: "Ma Thida — the lead singer, in costume",
    prompt: "Burmese woman of 22, a zat pwe leading lady in FULL traditional performance dress: a "
      + "fitted long-sleeved jacket dense with sequins and gold thread, a shwe-chi-htoe htamein with "
      + "a stiff flared train sweeping behind her, a jewelled and tiered headdress, heavy stage "
      + "make-up with strongly drawn brows and reddened lips, gold ear ornaments and bangles. She is "
      + "young, alive and completely human. Plain neutral background, three-quarter view from the "
      + "knees up so the train reads, warm stage light, photorealistic, natural colour." },
  { name: "မိနွယ်", en: "Ma Nwe — the substitute lead",
    prompt: "A DIFFERENT Burmese woman of 21, a second zat pwe leading lady — rounder face, hair "
      + "dressed differently, clearly not the same person as the previous reference. The same class "
      + "of costume in a DIFFERENT colour scheme: a sequinned long-sleeved jacket and a "
      + "shwe-chi-htoe htamein with a flared train, a jewelled headdress, heavy stage make-up. Plain "
      + "neutral background, three-quarter view from the knees up, warm stage light, photorealistic, "
      + "natural colour." },
  { name: "အနီရောင်အင်္ကျီမိန်းမ", en: "The woman in the dark red blouse",
    prompt: "Burmese woman of about forty in a dark red traditional yinzi blouse buttoned at the "
      + "front and a plain black htamein, long dark hair loose over her shoulders, small gold "
      + "earrings, no other ornament. She is COMPLETELY ORDINARY AND SOLID — warm skin, weight, a "
      + "calm patient face, lit exactly like anyone else in the frame. No pallor, no translucency, "
      + "no glow, no damage, no effect of any kind. She must be indistinguishable from a living "
      + "villager. Plain neutral background, waist-up three-quarter view, warm bulb light, "
      + "photorealistic, natural colour." },
  { name: "အဖွဲ့ခေါင်းဆောင်", en: "The troupe leader",
    prompt: "Burmese man in his fifties, stocky, thinning hair, a plain buttoned jacket over a longyi "
      + "with a cloth over one shoulder, a practical worn face used to shouting over an orchestra. "
      + "Plain neutral background, waist-up, warm light, photorealistic, natural colour." },
  { name: "ရွာလူကြီး", en: "The village elder",
    prompt: "Burmese man of about seventy, white cotton collarless jacket, longyi, a light head cloth, "
      + "white hair, deeply lined face, calm and unhurried. Plain neutral background, waist-up, flat "
      + "morning light, photorealistic, natural colour." },
  { name: "ပရိသတ်ဟောင်း", en: "The old audience — a GROUP reference",
    prompt: "About ten Burmese villagers of mixed age seated together on plain benches, dressed in the "
      + "simple clothing of an earlier generation — collarless cotton jackets, plain longyis and "
      + "htameins, a head cloth or two, no modern fabric or print. They sit perfectly upright and "
      + "perfectly still, hands in their laps, not clapping, all facing the same way. Mostly "
      + "back-lit, faces left unresolved in shadow. NOBODY is injured, decayed or distorted — the "
      + "wrongness is only the stillness and the age of the clothes. Warm rim light from behind, "
      + "deep night beyond, photorealistic, natural colour." },
];

const LOCS = [
  { name: "ဇာတ်ခုံ", en: "The stage",
    prompt: "A travelling zat pwe stage on a village festival ground: a temporary platform of bamboo "
      + "poles and rough wooden planks about chest height, roofed in corrugated iron, its back and "
      + "sides hung with hand-painted canvas backdrops showing a gilded palace hall. Incandescent "
      + "bulbs on twisted wire strung across the front, a wooden valve amplifier and horn speakers "
      + "lashed to the posts. At one side sits the hsaing waing: a pat waing — twenty-one tuned "
      + "drums slung inside a tall circular gilded and mirror-glass frame — with a kyi waing gong "
      + "circle, a rack of maung gongs, a hne oboe, and si and wa hand percussion. Empty, no people." },
  { name: "ပွဲခင်း", en: "The festival ground",
    prompt: "The audience ground in front of a zat pwe stage at night: rows of mismatched plastic and "
      + "wooden chairs on bare dusty earth, straw mats spread behind them, a low string of bulbs "
      + "overhead, tamarind trees and toddy palms at the edges, dry scrub beyond, litter and dust. "
      + "Shot from the stage looking out so the FRONT ROW fills the lower frame. Empty, no people." },
  { name: "သင်္ချိုင်း", en: "The old cemetery",
    prompt: "An old village cemetery in the dry zone at night: low whitewashed brick tombs, some "
      + "cracked and sunk, weeds and thorn between them, a big tamarind leaning over one side, hard "
      + "pale earth. A bare swept flat patch of ground at the centre with nothing on it. Torchlight "
      + "raking low across the tombs, deep black beyond. Empty, no people." },
];

const TITLES = [
  "Two in the morning", "Twenty-three years old", "Behind the stage", "The first night",
  "Clapping in the dark", "The woman in the red blouse", "Which auntie?", "She stops clapping",
  "I step back inside", "The second night", "She's back", "Her shoulder touches his",
  "Ma Thida takes the stage", "She stares at the front row", "Mother, did you come to watch?",
  "Come here", "Cut the mic", "Water and a wiped face", "What did you see?",
  "My mother wore blue", "The clapping again", "Wet grave soil", "The village elder",
  "A troupe that came before", "I ask what she looked like", "Nobody describes her the same",
  "She calls performers", "The third night", "Nine, ten, eleven o'clock",
  "Singing from behind the stage", "Nobody there", "The audience goes silent",
  "★ The old audience", "They can't see them", "Everything goes dark", "The empty stage",
  "Torches behind the trucks", "They took her", "The footpath", "The old cemetery",
  "Drums that aren't ours", "★ The clearing", "Dancing barefoot", "Ma Nwe!",
  "Not her own voice", "She's sitting on a tomb", "He runs to her",
  "Clapping from every side", "Can't you act?", "★ Her feet", "Carrying her out",
  "She doesn't wake until morning", "They were all performers", "Who called you?",
  "Three months later", "One clap", "★ The full audience", "Tonight, your turn",
  "They follow the troupes",
];

const ACT = {
  1: "Two in the morning", 4: "The first night", 10: "The second night",
  23: "The morning after", 28: "The third night", 39: "The cemetery",
  52: "Dawn", 55: "Three months later",
};

const WHO = {
  1: ["အနီရောင်အင်္ကျီမိန်းမ"], 2: ["ဇာတ်ခုံလုပ်သား"], 6: ["အနီရောင်အင်္ကျီမိန်းမ"],
  7: ["ဇာတ်ခုံလုပ်သား"], 8: ["အနီရောင်အင်္ကျီမိန်းမ"], 9: ["ဇာတ်ခုံလုပ်သား"],
  11: ["အနီရောင်အင်္ကျီမိန်းမ"], 12: ["အနီရောင်အင်္ကျီမိန်းမ"], 13: ["မသီတာ"], 14: ["မသီတာ"],
  15: ["အဖွဲ့ခေါင်းဆောင်", "မသီတာ"], 16: ["အနီရောင်အင်္ကျီမိန်းမ"], 18: ["မသီတာ"],
  19: ["မသီတာ", "ဇာတ်ခုံလုပ်သား"], 20: ["မသီတာ"], 22: ["ဇာတ်ခုံလုပ်သား"],
  23: ["ရွာလူကြီး", "အဖွဲ့ခေါင်းဆောင်"], 24: ["ရွာလူကြီး", "အဖွဲ့ခေါင်းဆောင်"],
  25: ["ဇာတ်ခုံလုပ်သား"], 26: ["ရွာလူကြီး"], 27: ["ရွာလူကြီး", "ဇာတ်ခုံလုပ်သား"],
  31: ["ဇာတ်ခုံလုပ်သား"], 33: ["ပရိသတ်ဟောင်း", "အနီရောင်အင်္ကျီမိန်းမ"], 38: ["မသီတာ"],
  41: ["အဖွဲ့ခေါင်းဆောင်", "ဇာတ်ခုံလုပ်သား"], 43: ["မိနွယ်"], 44: ["အဖွဲ့ခေါင်းဆောင်"],
  45: ["မိနွယ်"], 46: ["အနီရောင်အင်္ကျီမိန်းမ"], 47: ["အဖွဲ့ခေါင်းဆောင်", "မိနွယ်"],
  49: ["ဇာတ်ခုံလုပ်သား"], 50: ["အနီရောင်အင်္ကျီမိန်းမ"], 51: ["မိနွယ်"], 52: ["မိနွယ်"],
  53: ["မိနွယ်"], 54: ["မိနွယ်", "ဇာတ်ခုံလုပ်သား"],
  57: ["ပရိသတ်ဟောင်း", "အနီရောင်အင်္ကျီမိန်းမ"], 58: ["အနီရောင်အင်္ကျီမိန်းမ"],
  59: ["ဇာတ်ခုံလုပ်သား"],
};

const WHERE = {
  1: "ပွဲခင်း", 2: "ဇာတ်ခုံ", 3: "ဇာတ်ခုံ", 4: "ပွဲခင်း", 5: "ပွဲခင်း", 6: "ပွဲခင်း",
  7: "ဇာတ်ခုံ", 8: "ပွဲခင်း", 9: "ဇာတ်ခုံ", 10: "ဇာတ်ခုံ", 11: "ပွဲခင်း", 12: "ပွဲခင်း",
  13: "ဇာတ်ခုံ", 14: "ဇာတ်ခုံ", 15: "ဇာတ်ခုံ", 17: "ဇာတ်ခုံ", 18: "ဇာတ်ခုံ", 19: "ဇာတ်ခုံ",
  21: "ပွဲခင်း", 22: "ပွဲခင်း", 23: "ဇာတ်ခုံ", 24: "ဇာတ်ခုံ", 25: "ဇာတ်ခုံ", 28: "ဇာတ်ခုံ",
  29: "ပွဲခင်း", 30: "ဇာတ်ခုံ", 31: "ဇာတ်ခုံ", 32: "ပွဲခင်း", 33: "ပွဲခင်း", 34: "ပွဲခင်း",
  35: "ပွဲခင်း", 36: "ဇာတ်ခုံ", 37: "ဇာတ်ခုံ", 39: "ပွဲခင်း", 40: "သင်္ချိုင်း",
  41: "သင်္ချိုင်း", 42: "သင်္ချိုင်း", 43: "သင်္ချိုင်း", 44: "သင်္ချိုင်း", 46: "သင်္ချိုင်း",
  47: "သင်္ချိုင်း", 48: "သင်္ချိုင်း", 49: "သင်္ချိုင်း", 50: "သင်္ချိုင်း", 55: "ပွဲခင်း",
  56: "ပွဲခင်း", 57: "ပွဲခင်း", 58: "ပွဲခင်း", 59: "ဇာတ်ခုံ",
};

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
    + PLATE;
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

const NOTE = `<b style="color:#ffb4b4">The whole film turns on one rule: the woman in the red blouse
  is never a ghost on screen.</b>
  <br><br><b>1. She looks entirely human in every single shot.</b> Solid, warm, weighted, lit exactly
  like the villagers around her. No pallor, no translucency, no glow, no damage, nothing floating.
  In <b>shot 12</b> her shoulder is physically touching the man beside her and he is fine. The horror
  is that she is ordinary — the audience should spend half the film unsure whether anything is wrong
  at all. Everything that is wrong is <i>contextual</i>, never anatomical: an empty ground at 2am
  (<b>1</b>), wet grave soil on a dry chair (<b>22</b>), and only at the very end her feet
  (<b>50</b>).
  <br><br><b>2. The old audience are silhouettes, not corpses.</b> In <b>33</b> and <b>57</b> nobody
  is injured, decayed or distorted. Plain clothes of an earlier generation, sitting perfectly still,
  not clapping, back-lit with faces unresolved. If a face comes out sharp and monstrous, throw the
  image away — the fear is the stillness and the clothes.
  <br><br><b>3. Two leading ladies, deliberately different.</b> Ma Thida (<b>13–20, 38</b>) and Ma Nwe
  (<b>43–54</b>) wear the same class of costume in different colours and must read as two people.
  Ma Nwe is <b>barefoot</b> in every cemetery shot — that is the tell that she walked out there.
  <br><br><b>4. Get the hsaing waing right.</b> The stage plate names it: the pat waing is twenty-one
  tuned drums hung inside a tall circular gilded frame with mirror-glass inlay — not a drum kit, not
  a single barrel drum. Beside it the kyi waing gong circle, a rack of maung gongs, the hne oboe, si
  and wa. It sits at the side of the stage and should be visible in most stage-wide frames.
  <br><br><b>5. Period discipline.</b> 1990s upper Myanmar, Sagaing dry zone. Incandescent bulbs on
  twisted wire, a valve amplifier and horn speakers, hand-painted canvas backdrops. No phones, no
  LED, no printed banners, no modern shoes or fabric prints. Dry-zone country — tamarind, toddy
  palms, cracked pale earth — never delta green.
  <br><br><b>The front row must match.</b> Shots <b>5, 8, 11, 33</b> and <b>57</b> are the same
  framing from the stage. Reuse the ပွဲခင်း plate on all of them so the audience recognises the seats.
  <br><br>Build all ${NREF} references before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/zat.html", buildPage({
  title: "ပွဲမပြီးသေးဘူး — image prompts",
  subtitle: `THE SHOW ISN'T OVER · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "zat.done.v1",
  note: NOTE, nav: NAV("zat"),
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
