/**
 * Builds thanmya.html for လူသားစားတဲ့ ရွာထဲက သူဌေးမကြီး (The Benefactress).
 *
 *   node gen-thanmya.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-thanmya.mjs";
import { buildPage } from "./page.mjs";
import { PLATE, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "thlu5hlclu7";

const STYLE =
  "A prosperous rural village in lowland Myanmar, present day. Dirt lanes, timber and brick houses "
  + "with corrugated roofs, banana and tamarind trees, a whitewashed monastery, a teashop, a small "
  + "clinic. The central location is a large well-kept old teak house at the edge of the village — "
  + "wide verandah, shuttered windows, a swept compound behind a wooden fence, a separate kitchen "
  + "building and a storeroom at the back. Cinematic photorealism in the register of a grounded "
  + "human thriller, NOT folk horror: natural daylight, warm domestic lamplight at night, restrained "
  + "contrast, naturalistic colour, shallow depth of field, 35mm film grain, 16:9. Nothing gothic, "
  + "no fog, no supernatural light, no ghosts. No legible text, lettering or numbers anywhere in the "
  + "image, no watermark. Almost no blood.";

const CAST = [
  { name: "ဒေါ်သန်းမြ", en: "Daw Than Mya — the benefactress",
    prompt: "Burmese woman of about 58. Neat greying hair pinned up, a good-quality htamein and a "
      + "plain blouse, gold earrings and a thin gold chain, thanaka on her cheeks. A calm, warm, "
      + "maternal face — the kind of woman a village trusts on sight and asks for help. ⚠️ She must "
      + "NOT look sinister in any way: no hard stare, no shadow across the eyes, no cruelty in the "
      + "mouth. Build her as a genuinely kind person, because that is what she is for most of the "
      + "film. Plain neutral background, waist-up three-quarter view, soft natural light, "
      + "photorealistic, natural colour." },
  { name: "ဇော်မင်း", en: "Zaw Min — the narrator",
    prompt: "Burmese man of 25, lean and sun-worn, short black hair, a plain short-sleeved shirt and "
      + "a checked longyi, rubber slippers. A decent, tired, hard-working face; someone who has been "
      + "carrying something heavy for a while. Plain neutral background, waist-up three-quarter "
      + "view, natural daylight, photorealistic, natural colour." },
  { name: "ဇော်မင်းအမေ", en: "Zaw Min's mother",
    prompt: "Burmese woman of about 55, thin and visibly unwell with heart trouble, hair tied back, "
      + "a simple blouse and htamein. A gentle, patient face. Plain neutral background, waist-up, "
      + "soft indoor light, photorealistic, natural colour." },
  { name: "ယောကျာ်း (ဓာတ်ပုံထဲသာ)", en: "The husband — in photographs only",
    prompt: "Burmese man of about 35 as he appeared roughly twenty years ago: period clothing, a "
      + "side parting, a slightly formal smile. ⚠️ He appears ONLY inside old photographs — never in "
      + "the present-day story. Shoot this as a faded twenty-year-old print with period colour cast "
      + "and soft focus. Plain neutral background, waist-up, photorealistic." },
];

const LOCS = [
  { name: "ရွာ", en: "The village",
    prompt: "A prosperous lowland Myanmar village in daylight: a wide dirt lane, timber and brick "
      + "houses with corrugated roofs, banana and tamarind trees, a teashop with low stools, a "
      + "whitewashed monastery wall at the end of the lane, a small clinic. ⚠️ It must look ordinary "
      + "and pleasant — no dust haze, no fog, nothing ominous. Empty, no people." },
  { name: "အိမ်ကြီး", en: "The big house",
    prompt: "A large well-kept old teak house at the edge of a Myanmar village, seen from the lane: "
      + "a wide covered verandah on posts, shuttered windows, a carved eave board, a corrugated "
      + "roof, a swept earth compound behind a wooden fence with a gate. Prosperous, respectable and "
      + "entirely unthreatening. Empty, no people." },
  { name: "မီးဖိုခန်း", en: "The kitchen building",
    prompt: "A separate village kitchen building behind a large house: a clay stove with a blackened "
      + "pot, a heavy wooden chopping table, shelves of jars and enamel plates, bundles of firewood, "
      + "a single bulb hanging from a beam, and a plain closed door at the back. Warm domestic light "
      + "at night. Empty, no people." },
  { name: "သိုလှောင်ခန်း", en: "The storeroom",
    prompt: "A village storeroom behind a large house: stacked rice sacks, folded cloth, old farm "
      + "tools, wooden chests and crates, cobwebs in the roof beams, one small high window throwing "
      + "a shaft of dusty daylight across the floor. Cluttered and ordinary. Empty, no people." },
  { name: "ဇော်မင်းအိမ်", en: "Zaw Min's house",
    prompt: "The single room of a poor village house: plank walls, a low wooden bed with a thin "
      + "blanket, a small table, a kerosene lamp, medicine bottles on a stool, a few clothes on a "
      + "line. Poor but clean and cared for. Empty, no people." },
];

const TITLES = [
  "Everyone loved her", "Lucky to have her", "Zaw Min", "The offer",
  "He can't believe it", "The money for medicine", "★ The house",
  "The back compound", "★ The locked door", "Don't go in there",
  "She feeds them well", "Sandals by the step", "Where did Ko Tin Oo go?",
  "A blouse on the line", "★ The sound at one in the morning", "He sits up",
  "★ The kitchen at night", "The chopping board", "★ The watch",
  "At the door gap", "Not hungry", "★ The chest",
  "Ko Tin Oo's watch", "The album", "★ What she wrote", "All the colour goes",
  "★ The list", "Kneeling in the papers", "How she chose them",
  "★ She's in the doorway", "Backed into the sacks", "★ The smile goes",
  "He was the first", "Her hand on her stomach", "He turns away",
  "She explains", "Neither of them moves", "Counting the reasons",
  "She walks toward him", "The trap", "The phone", "★ Under her sandal",
  "He runs", "The gate is locked", "★ The knife", "Why you",
  "It was never kindness", "Into the storeroom", "Over the fence",
  "Nobody believes him", "★ She arrives", "She speaks to the village",
  "Search my house, then", "★ The other phone", "He remembers",
  "The crowd goes quiet", "The police arrive", "★ Under the kitchen floor",
  "Handcuffed", "Her question", "His answer", "The car pulls away",
  "★ The empty signboard", "His mother asks", "What he tells her",
  "The house at night", "★ The old notice", "He turns the light off",
  "Sometimes you should look",
];

const ACT = {
  1: "Everyone loved her", 3: "Zaw Min", 7: "The house", 12: "Things left behind",
  15: "One in the morning", 22: "The storeroom", 30: "She explains herself",
  41: "The chase", 50: "The village", 57: "The police", 63: "After",
};

const T = "ဒေါ်သန်းမြ", Z = "ဇော်မင်း", M = "ဇော်မင်းအမေ";
const H = "ယောကျာ်း (ဓာတ်ပုံထဲသာ)";

const WHO = {
  1: [T], 2: [], 3: [Z, M], 4: [T, Z], 5: [Z], 6: [T, Z], 10: [T, Z], 11: [T],
  13: [T, Z], 16: [Z], 17: [T], 20: [Z], 21: [T], 23: [Z], 24: [Z, H], 25: [Z],
  26: [Z], 28: [Z], 29: [T], 30: [T], 31: [T, Z], 32: [T], 33: [T], 34: [T],
  35: [Z], 36: [T], 37: [T, Z], 38: [T], 39: [T], 40: [Z], 41: [T, Z],
  43: [T, Z], 44: [Z, T], 45: [T], 46: [T], 47: [Z], 48: [Z, T], 49: [Z],
  50: [Z], 51: [T], 52: [T], 53: [Z], 54: [Z], 55: [Z], 56: [], 57: [],
  59: [T], 60: [T], 61: [Z, T], 64: [M, Z], 65: [Z], 68: [Z], 69: [Z],
};

const WHERE = {
  1: "ရွာ", 2: "ရွာ", 3: "ဇော်မင်းအိမ်", 4: "ရွာ", 5: "ရွာ", 6: "ရွာ", 7: "အိမ်ကြီး",
  8: "အိမ်ကြီး", 9: "မီးဖိုခန်း", 10: "မီးဖိုခန်း", 11: "မီးဖိုခန်း", 12: "အိမ်ကြီး",
  13: "မီးဖိုခန်း", 14: "အိမ်ကြီး", 15: "အိမ်ကြီး", 16: "အိမ်ကြီး", 17: "မီးဖိုခန်း",
  18: "မီးဖိုခန်း", 19: "မီးဖိုခန်း", 20: "မီးဖိုခန်း", 21: "မီးဖိုခန်း",
  22: "သိုလှောင်ခန်း", 23: "သိုလှောင်ခန်း", 24: "သိုလှောင်ခန်း", 25: "သိုလှောင်ခန်း",
  26: "သိုလှောင်ခန်း", 27: "သိုလှောင်ခန်း", 28: "သိုလှောင်ခန်း", 29: "အိမ်ကြီး",
  30: "သိုလှောင်ခန်း", 31: "သိုလှောင်ခန်း", 32: "သိုလှောင်ခန်း", 33: "သိုလှောင်ခန်း",
  34: "သိုလှောင်ခန်း", 35: "သိုလှောင်ခန်း", 36: "သိုလှောင်ခန်း", 37: "သိုလှောင်ခန်း",
  38: "သိုလှောင်ခန်း", 39: "သိုလှောင်ခန်း", 40: "သိုလှောင်ခန်း", 41: "သိုလှောင်ခန်း",
  42: "သိုလှောင်ခန်း", 43: "အိမ်ကြီး", 44: "အိမ်ကြီး", 45: "အိမ်ကြီး", 46: "အိမ်ကြီး",
  47: "အိမ်ကြီး", 48: "အိမ်ကြီး", 49: "အိမ်ကြီး", 50: "ရွာ", 51: "ရွာ", 52: "ရွာ",
  53: "ရွာ", 54: "ရွာ", 55: "ရွာ", 56: "ရွာ", 57: "အိမ်ကြီး", 58: "မီးဖိုခန်း",
  59: "အိမ်ကြီး", 60: "ရွာ", 61: "ရွာ", 62: "ရွာ", 63: "ရွာ", 64: "ရွာ", 65: "ရွာ",
  66: "အိမ်ကြီး", 67: "မီးဖိုခန်း", 68: "မီးဖိုခန်း", 69: "ရွာ",
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

const NOTE = `<b style="color:#ffb4b4">There is nothing supernatural in this film, and the villain must
  never look like one.</b>
  <br><br><b>1. Daw Than Mya is warm in every single frame.</b> No snarl, no looming, no
  under-lighting, no wild eyes, no blood on her — not even in <b>45</b>, where she is holding a
  cleaver and should look like a woman about to start a chore. The only shift is <b>32</b>, where the
  warmth simply drains out of her face into something flat and honest. Everything frightening about
  her is in what she is <i>saying</i>. If a shot makes her look evil, the film stops working, because
  the whole point is that the village was right to trust her and also completely wrong.
  <br><br><b>2. Her kindness is real, so shoot it straight.</b> Shots <b>1, 2, 6, 11, 20</b> are
  genuine generosity — she is not pretending. Shot <b>29</b> repeats that same gesture after the
  reveal, unchanged, so the audience re-reads it themselves.
  <br><br><b>3. Almost no gore.</b> The chopping board in <b>18</b> is ordinary butchery — cuts of
  meat, a little blood, nothing anatomical or identifiable. The dig in <b>58</b> shows one old bone
  and some fragments on a tarpaulin, shot from a distance. That is the entire budget; there is
  nothing else in the film.
  <br><br><b>4. Two objects carry the plot, and neither owner is ever shown.</b> A steel wristwatch
  with a worn <b>brown leather strap</b> appears on the kitchen floor in <b>19</b> and in Zaw Min's
  hand in <b>23</b> — generate it once and reuse the same watch for both, because the audience has to
  recognise it. Likewise the <b>patterned blouse</b> left on the line in <b>14</b>. The two missing
  workers exist only as these objects; there is no reference to build for them.
  <br><br><b>5. Nothing readable, anywhere.</b> The story runs on documents: the ID cards in the
  chest (<b>22</b>), the writing on the back of the photograph (<b>25</b>), the list of names
  (<b>27</b>), the phone screens (<b>42, 54</b>), the clinic signboard (<b>63</b>) and the old notice
  on the kitchen door (<b>67</b>). Every one is angled away, dusty, glared out or shot from behind.
  In <b>27</b> the horror is the neatness of the columns, not the words.
  <br><br><b>6. The husband exists only in photographs.</b> Shots <b>24</b> and <b>25</b>, as faded
  twenty-year-old prints with period colour. He never appears in the present day.
  <br><br><b>7. The village is pleasant.</b> Daylight, tamarind trees, a teashop. No haze, no fog,
  no ominous grade. The film is about a monster in a perfectly nice place.
  <br><br>Build all ${NREF} references before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/thanmya.html", buildPage({
  title: "လူသားစားတဲ့ ရွာထဲက သူဌေးမကြီး — image prompts",
  subtitle: `THE BENEFACTRESS · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "thanmya.done.v1",
  note: NOTE, nav: NAV("thanmya"),
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
