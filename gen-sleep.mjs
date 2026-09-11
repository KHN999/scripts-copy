/**
 * Builds sleep.html for တစ်ယောက်တော့ နိုးနေပါ (Someone Stay Awake).
 *
 *   node gen-sleep.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-sleep.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "ohi2twmc2bb";

const STYLE =
  "Remote hill country in Mon State, Myanmar, during a violent monsoon night, present day. Heavy "
  + "rain, low cloud and fog, a narrow wet mountain road, dense wet jungle. The shelter is an "
  + "abandoned single-storey wooden house with a small verandah, plank walls, shutters and a "
  + "corrugated roof, lit inside by ONE hurricane lantern — warm orange against deep blue-black "
  + "night. Cinematic photorealism in the register of survival horror: cold blue exteriors against "
  + "warm lantern interiors, rain visible in every beam of light, shallow depth of field, 35mm film "
  + "grain, 16:9. Nothing gothic, no gore. No legible text, lettering or numbers anywhere in the "
  + "image, no watermark.";

const CAST = [
  { name: "ဇင်မင်း", en: "Zin Min — the narrator",
    prompt: "Burmese man of 27, slim, short black hair, a plain dark T-shirt and jeans, an open "
      + "decent face. From the crash onward he is soaked through. ⚠️ He is injured and hiding it — "
      + "increasingly grey and drawn as the film goes on — but there is NO visible wound at any "
      + "point. Plain neutral background, waist-up three-quarter view, warm lantern light, "
      + "photorealistic, natural colour." },
  { name: "ထက်နိုင်", en: "Htet Naing — the best friend, the survivor",
    prompt: "Burmese man of 27, slightly stockier, short hair, a checked shirt worn open over a "
      + "T-shirt. A face that worries easily. He must read as someone who has known the narrator "
      + "since childhood. Plain neutral background, waist-up three-quarter view, warm lantern light, "
      + "photorealistic, natural colour." },
  { name: "မျိုးမင်း", en: "Myo Min",
    prompt: "Burmese man of 28, taller than the others, a light windbreaker over a T-shirt, short "
      + "hair. ⚠️ After the crash his LEFT hand is bound with a strip of cloth — keep it in every "
      + "later shot. Plain neutral background, waist-up, warm light, photorealistic, natural colour." },
  { name: "သီဟ", en: "Thiha",
    prompt: "Burmese man of 27 wearing glasses and a hooded sweatshirt, slight build. ⚠️ After the "
      + "crash he has a small gauze dressing at one temple — keep it in every later shot. Plain "
      + "neutral background, waist-up, warm light, photorealistic, natural colour." },
  { name: "သားလေး", en: "The son — final act only",
    prompt: "A Burmese boy of about six in pyjamas, short hair, a cheerful ordinary face. He appears "
      + "only in the last few shots, in a modern bedroom. Plain neutral background, waist-up, warm "
      + "lamp light, photorealistic, natural colour." },
];

const LOCS = [
  { name: "တောင်လမ်း", en: "The mountain road",
    prompt: "A narrow wet mountain road in the hills of Mon State at night during heavy monsoon "
      + "rain: cracked tarmac, no markings, dense dripping jungle pressing in on both sides, low "
      + "cloud reducing visibility to a few metres, water running across the surface. Empty, no "
      + "people, no vehicles." },
  { name: "အိမ်အပြင်", en: "The house — outside",
    prompt: "An abandoned single-storey wooden house on a jungle hillside at night in heavy rain, "
      + "seen from the front: weathered plank walls, a small covered verandah with two steps, "
      + "shuttered windows, a corrugated iron roof streaming water, a front door standing open with "
      + "one warm orange light burning somewhere inside. No people." },
  { name: "အိမ်ထဲ", en: "The house — inside, where most of the film happens",
    prompt: "The single main room of an abandoned wooden house, lit by ONE hurricane lantern on a "
      + "plain table: four wooden chairs, bare plank walls and floorboards, two closed inner doors, "
      + "a kitchen doorway at the back, dust, cobwebs in the corners, a stout front door with an "
      + "iron bolt. Warm orange pooling around the lantern, deep blue-black everywhere else. Empty, "
      + "no people." },
  { name: "ထက်နိုင့်အိမ်", en: "Htet Naing's home — years later",
    prompt: "The interior of a comfortable modern Myanmar family home in the evening: a sofa, a low "
      + "table, framed photographs on a sideboard, a child's toys in one corner, warm lamp light, "
      + "rain visible on a window. ⚠️ This place must feel SAFE — nothing ominous, nothing dark. "
      + "Empty, no people." },
];

const TITLES = [
  "Someone stay awake", "The first to sleep", "Mon State", "Best friends since school",
  "The good part of the trip", "The weather turns", "Driving into it", "★ The figure on the road",
  "The crash", "Coming round", "All four alive", "A light in the fog", "Walking",
  "The house", "Is anyone home?", "Inside", "The note", "Htet Naing doesn't laugh",
  "Past eight", "Shifts", "Nobody knew", "★ Thiha's eyes are closed", "Knocking",
  "Everyone up", "Don't open it", "★ The note has changed", "Nobody speaks", "Mother",
  "Holding him back", "Silence", "Coffee", "★ The sleepiness", "I'll take the watch",
  "The door is open", "I didn't sleep", "The woman in white", "Myo Min runs",
  "The lantern dies", "Two at the door", "★ They are dry", "Don't open it",
  "★ The smile", "The bolt", "★ The rule", "What it can do", "Two hours",
  "What's wrong with your chest", "The truth", "Do I look like I'm dying",
  "He sleeps", "The voices start", "★ My mother", "You're not my mother", "The laugh",
  "Three in the morning", "He talks in his sleep", "★ Blood", "I could wake him",
  "One plate between us", "This time I'll watch", "★ His voice, outside", "Doubt",
  "The bracelet", "Go away", "The lantern gutters", "Half past five", "Yes, mother",
  "The night she died", "You sleep, I'm here", "★ Dawn", "The note is gone",
  "I can't get up", "★ Go home safe", "Htet Naing wakes", "He won't wake",
  "On his chest", "No footprints", "The rescue truck", "★ There is no house",
  "Nobody believed him", "Years later", "He stayed awake for me", "By the window",
  "The photograph", "A laugh he knows", "Lights out",
];

const ACT = {
  1: "Someone stay awake", 3: "The trip", 6: "The storm", 10: "After the crash",
  14: "The house", 19: "The first watch", 22: "The first knock", 31: "Staying awake",
  34: "Thiha", 39: "The ones at the door", 44: "The rule", 50: "Alone",
  57: "Blood", 66: "Before dawn", 74: "Morning", 78: "After", 81: "Years later",
};

const Z = "ဇင်မင်း", H = "ထက်နိုင်", M = "မျိုးမင်း", T = "သီဟ", S_ = "သားလေး";

const WHO = {
  1: [Z, H, M, T], 2: [T], 3: [Z, H, M, T], 4: [Z, H], 5: [Z, H, M, T], 7: [Z, H],
  9: [], 10: [Z, H], 11: [Z, H, M, T], 13: [Z, H, M, T], 15: [Z, H, M, T],
  18: [H], 19: [Z, H, M, T], 20: [Z, H, M, T], 21: [Z, H, M, T], 22: [T],
  24: [Z, H, M], 25: [H, M], 27: [Z, H, M, T], 28: [T], 29: [Z, H, T],
  30: [Z, H, M, T], 31: [Z, H, M, T], 32: [Z], 33: [H], 35: [H], 36: [T],
  37: [M, H], 39: [T, M], 40: [T, M], 41: [Z, H], 42: [T], 43: [Z],
  44: [H], 45: [Z, H], 46: [Z, H], 47: [Z, H], 48: [Z], 49: [Z, H],
  50: [Z, H], 51: [Z], 52: [Z], 53: [Z], 55: [Z], 56: [H], 57: [Z],
  58: [Z, H], 59: [Z, H], 60: [Z, H], 61: [Z, H], 62: [H], 63: [H],
  65: [Z], 67: [Z], 68: [Z, H], 69: [Z, H], 72: [Z, H], 73: [Z],
  74: [H], 75: [Z, H], 76: [Z, H], 78: [H], 80: [H], 81: [H, S_],
  82: [H, S_], 83: [H], 85: [H], 86: [H],
};

const WHERE = {
  1: "အိမ်ထဲ", 2: "အိမ်ထဲ", 3: "တောင်လမ်း", 6: "တောင်လမ်း", 7: "တောင်လမ်း",
  8: "တောင်လမ်း", 9: "တောင်လမ်း", 10: "တောင်လမ်း", 11: "တောင်လမ်း", 12: "တောင်လမ်း",
  13: "တောင်လမ်း", 14: "အိမ်အပြင်", 15: "အိမ်အပြင်", 16: "အိမ်ထဲ", 17: "အိမ်ထဲ",
  18: "အိမ်ထဲ", 19: "အိမ်ထဲ", 20: "အိမ်ထဲ", 21: "အိမ်ထဲ", 22: "အိမ်ထဲ", 23: "အိမ်ထဲ",
  24: "အိမ်ထဲ", 25: "အိမ်ထဲ", 26: "အိမ်ထဲ", 27: "အိမ်ထဲ", 28: "အိမ်ထဲ", 29: "အိမ်ထဲ",
  30: "အိမ်ထဲ", 31: "အိမ်ထဲ", 32: "အိမ်ထဲ", 33: "အိမ်ထဲ", 34: "အိမ်ထဲ", 35: "အိမ်ထဲ",
  36: "အိမ်အပြင်", 37: "အိမ်အပြင်", 38: "အိမ်ထဲ", 39: "အိမ်အပြင်", 40: "အိမ်အပြင်",
  41: "အိမ်ထဲ", 42: "အိမ်အပြင်", 43: "အိမ်ထဲ", 44: "အိမ်ထဲ", 45: "အိမ်ထဲ",
  46: "အိမ်ထဲ", 47: "အိမ်ထဲ", 48: "အိမ်ထဲ", 49: "အိမ်ထဲ", 50: "အိမ်ထဲ", 51: "အိမ်ထဲ",
  52: "အိမ်ထဲ", 53: "အိမ်ထဲ", 54: "အိမ်ထဲ", 55: "အိမ်ထဲ", 56: "အိမ်ထဲ", 57: "အိမ်ထဲ",
  58: "အိမ်ထဲ", 60: "အိမ်ထဲ", 61: "အိမ်ထဲ", 62: "အိမ်ထဲ", 63: "အိမ်ထဲ", 64: "အိမ်ထဲ",
  65: "အိမ်ထဲ", 66: "အိမ်ထဲ", 67: "အိမ်ထဲ", 69: "အိမ်ထဲ", 70: "အိမ်ထဲ", 71: "အိမ်ထဲ",
  72: "အိမ်ထဲ", 73: "အိမ်ထဲ", 74: "အိမ်ထဲ", 75: "အိမ်ထဲ", 76: "အိမ်ထဲ",
  77: "အိမ်အပြင်", 78: "တောင်လမ်း", 79: "အိမ်အပြင်", 81: "ထက်နိုင့်အိမ်",
  82: "ထက်နိုင့်အိမ်", 83: "ထက်နိုင့်အိမ်", 84: "ထက်နိုင့်အိမ်", 85: "ထက်နိုင့်အိမ်",
  86: "ထက်နိုင့်အိမ်",
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

const NOTE = `<b style="color:#ffb4b4">The thing outside is never shown. That is the whole film.</b>
  <br><br><b>1. No monster, ever.</b> It appears three ways and no others: a still figure in a white
  shirt at the far edge of the headlights with its head bowed (<b>8</b>); a woman in a white blouse
  seen entirely from BEHIND at distance in rain (<b>36</b>); and one ordinary friend's face whose
  <i>smile is too wide</i> (<b>42</b>). No claws, no distortion, no glow, no floating, no face
  resolved. If a shot makes the threat legible, it is wrong.
  <br><br><b>2. Shot 42 is the hardest and most important.</b> Only the WIDTH of the smile is wrong —
  stretched well past the corners. Everything else about the face stays normal: no extra teeth, no
  black eyes, no deformity. It should be a photograph of a friend that takes a second to feel wrong.
  <br><br><b>3. Fifty-six shots are one room.</b> Bare plank walls, one hurricane lantern, a bolted
  door. That confinement is the film — resist opening it up, adding lamps, or widening the space.
  Warm orange around the lantern, deep blue-black everywhere else.
  <br><br><b>4. The note on the wall changes three times.</b> Shot <b>17</b> one line, <b>26</b> two
  lines, <b>44</b> three lines, <b>71</b> gone with only the pin left. <b>Every line must be
  illegible</b> — angled away, out of focus. The audience counts lines; the narration says what they
  mean.
  <br><br><b>5. Zin Min's injury is invisible until shot 57.</b> He greys, he tires, he holds his
  chest — but no wound is ever shown, and <b>57</b> is a hand with blood on it, nothing more. The
  audience should not be certain he is dying until after daylight.
  <br><br><b>6. Continuity that carries the plot.</b> Myo Min's left hand is bound from shot 11 on;
  Thiha has a dressing at one temple from shot 11 on. In <b>40</b> both men stand in torrential rain
  and are completely <b>dry</b> — that single detail is how the audience knows.
  <br><br><b>7. The ending must feel safe.</b> Shots <b>81–86</b> are a warm family home, a sleeping
  child, rain on a window. Nothing ominous. <b>86</b> is the calmest frame in the film and should
  look like rest, not dread — and so should <b>73</b>, which is a death.
  <br><br>Build all ${NREF} references before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/sleep.html", buildPage({
  title: "တစ်ယောက်တော့ နိုးနေပါ — image prompts",
  subtitle: `SOMEONE STAY AWAKE · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "sleep.done.v1",
  note: NOTE, nav: NAV("sleep"),
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
