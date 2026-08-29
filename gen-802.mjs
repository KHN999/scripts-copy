/**
 * Builds index.html for အခန်း ၈၀၂ (Room 802) — the active production.
 *
 * Reads scene rows straight from video-lab's lab.db, so the sheet and the film
 * cannot drift apart.
 *
 *   node gen-802.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-802.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "2puwkmg2krs";

const STYLE =
  "Modern Yangon apartment building after 1 a.m., present day, contemporary Myanmar city. Cold white "
  + "fluorescent light indoors, sodium-orange street light and distant city glow outside, wet "
  + "reflections from recent rain, bare painted concrete. Cinematic urban horror photography, "
  + "desaturated cool palette, 35mm film grain, shallow depth of field, 16:9, photorealistic. "
  + "No village scenery, no traditional dress, no folklore objects, no candles. No visible ghost, "
  + "monster or corpse. No legible text, lettering or numbers anywhere in the image, no watermark.";

const PORTRAIT =
  "Plain dark wall behind, cold overhead light, waist-up three-quarter view, neutral expression, "
  + "photorealistic, natural colour, present-day Yangon.";

/** One visible character, one deliberately unseeable one, one prop. */
const CAST = [
  { name: "ပို့ဆောင်သူ", en: "The rider",
    prompt: "Burmese man of about 25, slim build, short black hair, clean-shaven, a tired ordinary face. "
      + "He wears a dark navy-black food-delivery jacket with NO branding or lettering of any kind, dark "
      + "long trousers — trousers, NOT a longyi — and worn dark trainers. He holds a matte black "
      + "full-face motorcycle helmet under one arm. " + PORTRAIT },
  { name: "နောက်တစ်ယောက်", en: "The second rider — never shown",
    prompt: "A figure in the same dark navy-black delivery jacket and dark trousers, same build and "
      + "height as the rider, holding a matte black motorcycle helmet. THE FACE IS COMPLETELY HIDDEN — "
      + "obscured behind a raised phone and lens glare, turned into shadow, never visible, never "
      + "reconstructed. Do not render eyes, mouth or any facial feature. Standing still, indoors, dim "
      + "room, harsh flash. Photorealistic, natural colour, present-day Yangon." },
  { name: "ပို့ဆောင်အိတ်", en: "The delivery bag",
    prompt: "A large square insulated food-delivery backpack in dark navy-black, one worn shoulder "
      + "strap, a soft dent in one upper corner, slightly scuffed base, no branding or lettering. "
      + "Standing upright on a plain concrete floor, nothing else in frame. Photorealistic, natural "
      + "colour, cold overhead light." },
];

/**
 * LOCATION PLATES.
 *
 * Five places carry 20 of the 38 shots, and the corridor is the one that must
 * not move: the whole story is one man alone in a single unchanging space, so if
 * the doors, the light or the floor change between shots 7, 19, 24, 25 and 33
 * the audience stops believing he never left.
 */
const LOCS = [
  { name: "စင်္ကြံ", en: "The eighth-floor corridor",
    prompt: "A long empty corridor on the eighth floor of an older Yangon apartment block at night. "
      + "White fluorescent tubes in the ceiling, painted concrete walls scuffed at waist height, a "
      + "line of identical plain steel doors receding into the distance, a bare tiled floor with faint "
      + "reflections. Empty, no people, no incident." },
  { name: "တံခါး ၈၀၂", en: "Door 802",
    prompt: "A single plain painted steel apartment door seen straight on from a corridor: brushed "
      + "metal lever handle, one small round peephole at eye height, a small blank number plate, a "
      + "narrow dark gap beneath. Cold fluorescent light from above. Empty, no people." },
  { name: "ဓာတ်လှေကား", en: "The lift",
    prompt: "The interior of a small apartment lift: brushed steel walls holding soft blurred "
      + "reflections, a worn button panel, a single harsh ceiling light, scuffed floor. Empty, no "
      + "people, doors open." },
  { name: "အခန်းအတွင်း", en: "The apartment",
    prompt: "A small modern Yangon studio apartment at night: a low single bed against one wall, a "
      + "closed laptop on a narrow desk, a shirt hung over a chairback, a window with distant city "
      + "lights beyond. Tidy, sparse, lit only by the window. Empty, no people." },
  { name: "လမ်းမ", en: "The street",
    prompt: "A quiet Yangon street corner after 1 a.m. just after rain: wet tarmac reflecting sodium "
      + "street lights, shuttered shopfronts, a closed tea shop with stacked plastic stools, the "
      + "entrance of an older apartment block. Empty, no people, no vehicles moving." },
];

/** Attach per shot — the prompts describe people generically, so a regex would tag nothing. */
const WHO = {
  2: ["ပို့ဆောင်သူ"], 5: ["ပို့ဆောင်သူ"], 9: ["ပို့ဆောင်သူ"],
  11: ["ပို့ဆောင်အိတ်"], 12: ["ပို့ဆောင်သူ"], 14: ["ပို့ဆောင်သူ", "ပို့ဆောင်အိတ်"],
  16: ["ပို့ဆောင်သူ"], 18: ["ပို့ဆောင်သူ"], 19: ["ပို့ဆောင်သူ", "ပို့ဆောင်အိတ်"],
  22: ["ပို့ဆောင်အိတ်"], 23: ["ပို့ဆောင်သူ"], 24: ["ပို့ဆောင်သူ"], 25: ["ပို့ဆောင်သူ"],
  26: ["နောက်တစ်ယောက်"], 31: ["ပို့ဆောင်သူ"], 36: ["နောက်တစ်ယောက်"], 37: ["ပို့ဆောင်သူ"],
};
const WHERE = {
  1: "လမ်းမ", 2: "လမ်းမ", 4: "လမ်းမ", 5: "ဓာတ်လှေကား", 6: "ဓာတ်လှေကား",
  7: "စင်္ကြံ", 8: "တံခါး ၈၀၂", 10: "တံခါး ၈၀၂", 11: "တံခါး ၈၀၂", 12: "တံခါး ၈၀၂",
  14: "တံခါး ၈၀၂", 15: "တံခါး ၈၀၂", 16: "တံခါး ၈၀၂", 17: "အခန်းအတွင်း",
  19: "စင်္ကြံ", 21: "အခန်းအတွင်း", 22: "အခန်းအတွင်း", 24: "စင်္ကြံ", 25: "စင်္ကြံ",
  26: "အခန်းအတွင်း", 27: "ဓာတ်လှေကား", 28: "တံခါး ၈၀၂", 32: "ဓာတ်လှေကား",
  33: "စင်္ကြံ", 34: "အခန်းအတွင်း", 36: "တံခါး ၈၀၂",
};

const TITLES = ["The order", "Last run of the night", "The pickup", "Downstairs", "Into the lift",
  "Floor eight", "The corridor", "Is this 802?", "Not a mistake", "No light inside",
  "Bag at the door", "Don't take a photo", "He sends one instead", "Shot from inside",
  "The peephole", "Listening", "What's in there", "The key", "Don't open yet", "Typing",
  "The second photo", "The bag by the bed", "It already arrived", "Reported an issue",
  "Alone in the corridor", "In front of the mirror", "The button", "A phone rings inside",
  "Mine is silent", "The voice message", "I am the one outside", "Doors closing",
  "Morning", "Nothing touched", "Five stars", "The profile photo", "After that", "1:17 again"];

const ACT = { 1: "The order", 7: "Floor eight", 13: "The photographs", 24: "The wrong rider",
  33: "Morning", 37: "It starts again" };

const db = new Database("/Users/puraidointern/video-lab/data/lab.db", { readonly: true });
const rows = db.prepare(
  "SELECT idx, units, image_prompt FROM scenes WHERE project_id=? ORDER BY idx").all(PROJECT);
db.close();
if (rows.length !== 38) throw new Error(`expected 38 scenes, got ${rows.length}`);

let act = "";
const shots = rows.map((r) => {
  const n = r.idx + 1;
  if (ACT[n]) act = ACT[n];
  return { id: String(n), title: TITLES[r.idx], act, who: WHO[n] ?? [], where: WHERE[n] ?? null,
           raw: r.image_prompt, lines: JSON.parse(r.units).map((u) => u.text),
           mm: MM_SHOT[String(n)] || "" };
});

// Numbering every prompt is what stops Flow re-rendering a variation of the
// previous frame instead of a new one.
const refs = [...CAST, ...LOCS];
const NREF = refs.length;
CAST.forEach((c, i) => {
  c.mm = MM_REF[c.name] || "";
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct subject; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`;
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

const NOTE = `<b>Do this first.</b> Build all ${NREF} references below and approve each one before
  starting the shot list — three subjects, then five location plates.
  <br><br><b>The face is the whole trick.</b> The second rider appears in only two shots (26 and 36)
  and his face must never be visible in either — hidden behind a raised phone, lost in flash glare,
  turned into shadow. If a model renders a face, throw the image away and generate again. A story about
  someone who is already inside stops working the moment you can see who it is.
  <br><br><b>The corridor must not move.</b> Shots 7, 19, 24, 25 and 33 are the same space, and the
  premise is one man alone in a place that never changes. Attach စင်္ကြံ to all five.
  <br><br><b>Phone screens are deliberately unreadable.</b> Image models render text as gibberish, and
  gibberish Burmese on a chat screen would be worse than none — so every phone prompt asks for a bright
  unreadable glow. The light on his face does the work, not the words.
  <br><br>No ghost, no monster, no corpse, no village imagery, no traditional dress.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/index.html", buildPage({
  title: "အခန်း ၈၀၂ — image prompts",
  subtitle: `ROOM 802 · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google Flow, attach `
    + `the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "room802.done.v1",
  note: NOTE, nav: NAV("802"),
  groups: [
    { heading: "Characters and prop — build these first", items: CAST },
    { heading: "Locations — one plate per recurring setup", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF} (${CAST.length} cast + ${LOCS.length} locations)`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
