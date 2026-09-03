/**
 * Builds field.html for လယ်ကွင်းထဲက လူ (The Man in the Field).
 *
 *   node gen-field.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-field.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "whx2g75g0kg";

const STYLE =
  "A small village at the edge of vast green paddy fields in Bago Region, rural Myanmar, monsoon "
  + "growing season. One raised wooden house on posts with a bamboo fence, a muddy path, a small "
  + "irrigation ditch at the far side of the fields, a distant tree line beyond it. Soft flat overcast "
  + "daylight, humid air, wet green rice standing knee high. Cinematic photorealism, calm and pastoral "
  + "rather than gothic — the horror is in stillness and distance, never in the lighting. Naturalistic "
  + "colour, 35mm film grain, 16:9. No modern objects, no vehicles, no electric light. Nothing "
  + "monstrous, no blood, no visible ghost. No legible text or numbers anywhere, no watermark.";

/** One reference for the boy AND the figure. It is him; two plates would drift. */
const CAST = [
  { name: "ကောင်လေး", en: "The boy — and the figure",
    prompt: "Burmese boy of seventeen, slim, short black hair, an ordinary open face. A faded pale "
      + "cream short-sleeved shirt and a brown longyi — a longyi, NOT trousers — simple sandals. "
      + "Standing plainly against a plain wooden wall in flat overcast daylight, waist-up "
      + "three-quarter view, neutral expression. Photorealistic, natural colour." },
  { name: "အမေ", en: "The mother",
    prompt: "Rural Burmese woman in her forties, hair tied back, a traditional blouse and a dark "
      + "longyi, a practical weathered face. Plain wooden wall behind, waist-up three-quarter view, "
      + "overcast daylight, photorealistic, natural colour." },
  { name: "ခင်", en: "The sister",
    prompt: "Burmese girl of about eleven, school-aged, hair tied back, a simple house dress, "
      + "healthy and ordinary. Plain wooden wall behind, waist-up, overcast daylight, photorealistic, "
      + "natural colour." },
];

const PROPS = [
  { name: "မိသားစုဓာတ်ပုံ", en: "The family photograph",
    prompt: "An old faded family photograph in a plain dark wooden frame: a father, a mother, a "
      + "teenage son and a young daughter seated together, four people, grainy and slightly foxed. "
      + "The frame fills the picture and any caption area is cropped out of frame. Nothing written or "
      + "printed is visible. Photorealistic, natural colour." },
];

/**
 * THE BACK-DOOR VIEW IS THE MOST IMPORTANT REFERENCE IN THIS FILM.
 *
 * Five shots share it exactly — 4, 8, 13, 21 and 35 — and the only thing that
 * changes between them is how far away the figure is. If the camera position
 * shifts even slightly, the approach stops reading as an approach and the whole
 * structure collapses into five unrelated pictures of a field.
 */
const LOCS = [
  { name: "အိမ်နောက်မြင်ကွင်း", en: "The back-door view — the repeated framing",
    prompt: "The view from the back of a raised wooden village house looking out over vast green "
      + "paddy fields: the top of a bamboo fence across the near foreground, flat wet rice running "
      + "away to an irrigation ditch and a distant tree line on the horizon, a soft overcast sky. "
      + "Shot from standing height at the back steps, level, wide. Completely empty of people — this "
      + "plate exists so the framing can be held identical while a figure moves through it." },
  { name: "လယ်ကွင်း", en: "The paddy field",
    prompt: "A vast flat expanse of knee-high green rice in the monsoon growing season, standing "
      + "water between the rows, low earth bunds dividing the plots, a lone stunted toddy palm, an "
      + "irrigation ditch and a tree line far off. Soft overcast daylight. Empty, no people." },
  { name: "အိမ်", en: "The house and yard",
    prompt: "A single raised teak house on wooden posts at the edge of paddy fields, a low bamboo "
      + "fence around a small bare yard, wooden back steps facing the fields, a muddy path. Overcast "
      + "daylight. Empty, no people." },
  { name: "အိမ်တွင်း", en: "The interior",
    prompt: "The inside of a simple village house: plank walls and floor, a low wooden table, a clay "
      + "stove in one corner, a shuttered window, a kerosene lamp. Dim warm light. Empty, no people." },
];

const WHO = {
  3: ["ကောင်လေး"], 5: ["ကောင်လေး"], 6: ["အမေ"], 7: ["ကောင်လေး"], 12: ["အမေ"],
  14: ["ကောင်လေး"], 15: ["ကောင်လေး"], 16: ["ကောင်လေး"], 18: ["ကောင်လေး"], 19: ["ခင်"],
  20: ["ခင်"], 22: ["ကောင်လေး"], 23: ["ကောင်လေး"], 24: ["ကောင်လေး"], 25: ["အမေ"],
  26: ["အမေ"], 27: ["အမေ"], 28: ["ကောင်လေး"], 29: ["မိသားစုဓာတ်ပုံ"],
  30: ["မိသားစုဓာတ်ပုံ"], 31: ["ကောင်လေး", "မိသားစုဓာတ်ပုံ"], 32: ["အမေ"], 33: ["ခင်"],
  36: ["ကောင်လေး"], 37: ["ကောင်လေး"], 38: ["ကောင်လေး"], 39: ["ကောင်လေး"],
  40: ["ကောင်လေး"], 41: ["အမေ"], 42: ["ကောင်လေး"], 44: ["ကောင်လေး"], 45: ["ကောင်လေး"],
  47: ["ကောင်လေး"], 48: ["ကောင်လေး"], 50: ["အမေ", "ခင်"], 51: ["ကောင်လေး"],
  52: ["ကောင်လေး"], 53: ["ကောင်လေး"], 55: ["ကောင်လေး"], 56: ["ကောင်လေး"],
};
const WHERE = {
  1: "လယ်ကွင်း", 2: "အိမ်", 3: "အိမ်", 4: "အိမ်နောက်မြင်ကွင်း", 5: "အိမ်တွင်း",
  6: "အိမ်တွင်း", 7: "အိမ်", 8: "အိမ်နောက်မြင်ကွင်း", 9: "လယ်ကွင်း", 10: "လယ်ကွင်း",
  11: "အိမ်တွင်း", 12: "အိမ်တွင်း", 13: "အိမ်နောက်မြင်ကွင်း", 14: "လယ်ကွင်း", 15: "အိမ်",
  16: "လယ်ကွင်း", 17: "လယ်ကွင်း", 18: "လယ်ကွင်း", 19: "အိမ်တွင်း", 20: "အိမ်တွင်း",
  21: "အိမ်နောက်မြင်ကွင်း", 22: "လယ်ကွင်း", 24: "လယ်ကွင်း", 25: "အိမ်တွင်း",
  26: "အိမ်တွင်း", 27: "အိမ်တွင်း", 28: "အိမ်", 29: "အိမ်တွင်း", 30: "အိမ်တွင်း",
  31: "အိမ်တွင်း", 32: "အိမ်တွင်း", 33: "အိမ်တွင်း", 34: "အိမ်တွင်း",
  35: "အိမ်နောက်မြင်ကွင်း", 36: "အိမ်", 38: "အိမ်", 39: "လယ်ကွင်း", 40: "လယ်ကွင်း",
  41: "အိမ်", 42: "လယ်ကွင်း", 43: "လယ်ကွင်း", 44: "လယ်ကွင်း", 45: "လယ်ကွင်း",
  46: "လယ်ကွင်း", 47: "လယ်ကွင်း", 48: "အိမ်", 49: "လယ်ကွင်း", 50: "အိမ်",
  51: "အိမ်", 52: "လယ်ကွင်း", 53: "လယ်ကွင်း", 54: "အိမ်", 55: "လယ်ကွင်း", 56: "လယ်ကွင်း",
};

const TITLES = ["A man in the field", "The house at the edge", "The first morning",
  "★ Too far to see", "Breakfast", "There's nothing there", "Off to school", "★ Closer",
  "The rice moves, he doesn't", "The toddy palm", "Two plates", "She remembers",
  "★ Past the palm", "About my height", "Over the fence", "Into the rice", "No footprints",
  "Walking back", "Whose bag is this?", "She doesn't know it", "★ One plot away",
  "The same clothes", "My own shirt", "His face in shadow", "She doesn't hear me",
  "When did you get here?", "I keep forgetting", "Afraid now", "Four of us", "Three of us",
  "Where am I in this photo?", "Who are you?", "Khin doesn't know me",
  "My things are still here", "★ Outside the fence", "My face", "He doesn't smile",
  "I run to him", "Into the field", "Three metres", "She looks past me", "No sound comes out",
  "He's gone", "He walks to the house", "I run", "The house gets further", "I can't reach it",
  "He closes the door", "Last light", "Morning", "Putting on his sandals", "Time passes",
  "They walk past me", "A child sees me", "How long has it been", "★ It was me"];

const ACT = { 1: "The figure", 8: "Closer each day", 19: "They begin to forget",
  29: "The photograph", 35: "My face", 41: "Replaced", 51: "Now" };

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

const NOTE = `<b style="color:#ffb4b4">Five shots share one framing. That progression is the film.</b>
  <br><br>Shots <b>4, 8, 13, 21 and 35</b> are the same view from the back of the house, and the only
  thing that changes between them is how far away the figure is standing — near the tree line, past the
  middle, past the toddy palm, one plot away, then just outside the fence. <b>Hold the framing
  identical.</b> Same height, same angle, same amount of fence in the foreground. If the camera drifts,
  the approach stops reading as an approach and you have five unrelated pictures of a field. Build the
  အိမ်နောက်မြင်ကွင်း plate first and attach it to all five.
  <br><br><b>Shot 56 must match shot 1 exactly.</b> The film opens and closes on the same composition —
  that repetition is the reveal, so generate them as a pair and compare them side by side.
  <br><br><b>One reference for the boy and the figure.</b> They are the same person, so a second plate
  would drift and give it away early. The prompts carry the progression instead: featureless at
  distance, then the same clothes, then a face in shadow even in open sun, then his exact face in shot
  36.
  <br><br><b>Nothing is ever monstrous.</b> No blood, no distortion, no translucency, no cold grade. It
  is a man standing still in a field in flat daylight. The dread is entirely stillness, distance and
  repetition — shot 9 is the whole idea in one image: an entire field of rice bending in the wind, and
  one set of clothes that does not move.
  <br><br><b>The photograph is a pair too.</b> Shot 29 has four people, shot 30 has three and an empty
  chair — same frame, same wall, same wear. Generate them together.
  <br><br>Build all ${NREF} references before starting.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/field.html", buildPage({
  title: "လယ်ကွင်းထဲက လူ — image prompts",
  subtitle: `THE MAN IN THE FIELD · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "field.done.v1",
  note: NOTE, nav: NAV("field"),
  groups: [
    { heading: "People and the photograph — build these first", items: [...CAST, ...PROPS] },
    { heading: "Locations — the first plate is the important one", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  ★ marker shots: ${shots.filter((s) => s.raw.includes("★")).map((s) => s.id).join(", ")}`);
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
