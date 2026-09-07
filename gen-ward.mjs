/**
 * Builds ward.html for ကျန်ရှိသေးသော အသက် (Remaining Life).
 *
 *   node gen-ward.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-ward.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "g6v6djdjt1q";

const STYLE =
  "A prestigious modern private hospital in Yangon, Myanmar, present day. Cold fluorescent and "
  + "recessed LED lighting, clean pale vinyl floors with a faint sheen, stainless steel and glass, "
  + "pastel green and white walls, the blue-white glow of vital-signs monitors. Staff in blue scrubs "
  + "and white coats; patients in pale hospital gowns. Corridors with handrails, curtained bays, IV "
  + "poles, wall-mounted oxygen outlets. Clinical, expensive and slightly too quiet. Cinematic "
  + "photorealism in the register of a medical thriller — restrained contrast, naturalistic colour, "
  + "shallow depth of field, 35mm film grain, 16:9. Nothing gothic, no cobwebs, no decay, no candles. "
  + "No legible text, lettering, numbers or signage anywhere in the image, no watermark, no gore.";

const CAST = [
  { name: "ဒေါက်တာအောင်ခန့်", en: "Dr Aung Khant — the narrator",
    prompt: "Burmese man of 29, slim, short neat black hair, clean-shaven, an intelligent slightly "
      + "tired face. Blue scrubs under an open white coat, a stethoscope round his neck, an ID badge "
      + "clipped at his chest with no readable text. He is junior staff — earnest and a little "
      + "worn, never authoritative. Plain neutral background, waist-up three-quarter view, cool "
      + "clinical light, photorealistic, natural colour." },
  { name: "ဒေါက်တာသန်းထွန်း", en: "Dr Than Htun — the director",
    prompt: "Burmese man of about 62, the director of a private hospital. Silver hair combed back, "
      + "gold-rimmed glasses, a well-cut shirt and tie beneath an immaculate white coat, a good "
      + "watch. ⚠️ He must look CALM, warm and completely respectable — the kind of senior doctor "
      + "families trust immediately. No menace, no sneer, no shadow across the face, nothing "
      + "sinister. Plain neutral background, waist-up three-quarter view, warm even light, "
      + "photorealistic, natural colour." },
  { name: "ဒေါ်ခင်မာရီ (အမေ)", en: "Daw Khin Mar Yi — the mother",
    prompt: "Burmese woman of 62, grey hair pinned back, a simple buttoned blouse and a plain "
      + "htamein, small gold earrings. A kind, worn, much-loved face with laughter lines. Plain "
      + "neutral background, waist-up, soft warm light, photorealistic, natural colour." },
  { name: "ဒေါ်မီမီအေး", en: "Daw Mi Mi Aye — patient",
    prompt: "Burmese woman of 43 in a pale hospital gown, hair tied back, no make-up. ⚠️ She must "
      + "look WELL — warm, healthy, entirely ordinary, the colour still in her face. Nothing about "
      + "her should suggest illness. Plain neutral background, waist-up, soft daylight, "
      + "photorealistic, natural colour." },
  { name: "ကိုကျော်ဇင်", en: "Ko Kyaw Zin — patient",
    prompt: "Burmese man of 32 in a pale hospital gown, short hair, fit and healthy-looking, with a "
      + "small square gauze dressing taped to his forehead above one eyebrow. ⚠️ That dressing must "
      + "persist in every shot he appears in, including the final act. Plain neutral background, "
      + "waist-up, soft daylight, photorealistic, natural colour." },
  { name: "ခင်ပြည့်", en: "Khin Pyae — patient",
    prompt: "Burmese woman of 25 in a pale hospital gown, long hair loose, young and frightened, "
      + "recovering from abdominal surgery — a little drawn but not gravely ill. Plain neutral "
      + "background, waist-up, soft light, photorealistic, natural colour." },
  { name: "လူနာသရဲတွေ", en: "The dead patients — a GROUP reference",
    prompt: "About twenty Burmese people of mixed age and sex standing together in pale hospital "
      + "gowns, arranged in a loose crowd, all facing the same way and standing perfectly still with "
      + "their arms at their sides. ⚠️ They look EXACTLY like living people: solid, warm-skinned, "
      + "uninjured, no blood, no wounds, no pallor, no translucency, no glow, feet flat on the "
      + "floor. Ordinary calm faces. NOBODY is frightening — they are patients waiting to be "
      + "answered. Dull red ambient light, deep shadow beyond, photorealistic, natural colour." },
];

const LOCS = [
  { name: "ဆေးရုံ", en: "The hospital — wards and corridors",
    prompt: "The inpatient floor of an expensive modern private hospital: a long corridor with a "
      + "handrail, pale vinyl flooring, recessed ceiling light panels, numbered doors with blank "
      + "unreadable sign plates, a nurses' station with monitors, and beyond it a shared ward of "
      + "beds with curtain rails, IV poles and wall-mounted oxygen outlets. Cool clinical light. "
      + "Empty, no people." },
  { name: "ခန်းမ", en: "The lobby",
    prompt: "The entrance lobby of an expensive private hospital in daylight: a polished reception "
      + "desk, a tall glass curtain wall, potted palms, upholstered waiting chairs in rows, a glass "
      + "lift, a stone floor. Bright, corporate and calm. Empty, no people." },
  { name: "အထူးတန်းခန်း", en: "The VIP suite",
    prompt: "A private VIP hospital suite that looks more like a good hotel room: a wide bed with a "
      + "proper headboard, wood panelling, a sofa and armchair, a vase of fresh flowers, soft lamp "
      + "lighting, discreet medical equipment recessed into the wall behind the bed. It must read as "
      + "obviously more expensive than the ordinary ward. Empty, no people." },
  { name: "အောက်ခြေထပ်", en: "The basement",
    prompt: "A hospital basement service corridor: exposed pipework and cable trays across the "
      + "ceiling, bare painted concrete walls, a sealed concrete floor, a laundry cage, stacked "
      + "supply crates, one flickering fluorescent tube. Utilitarian and grim, but modern — no "
      + "decay, no cobwebs. Empty, no people." },
  { name: "ယဇ်ခန်း", en: "The room below — the ritual room",
    prompt: "⚠️ A windowless concrete room beneath a hospital basement, lit only by dull red light. "
      + "It contains two proper modern hospital beds with vital-signs monitors and IV stands, cables "
      + "running across the bare floor, and between the beds a small old wooden table bearing a "
      + "tarnished brass bowl half full of near-black liquid, two handwritten paper slips laid "
      + "either side of it, and a stick of incense smoking in a holder. Modern medicine and "
      + "something much older in the same room. All handwriting angled away and unreadable. Empty, "
      + "no people." },
  { name: "အိမ်", en: "The family home",
    prompt: "The interior of a modest Yangon flat: a small dining table with four chairs, a compact "
      + "kitchen beyond, framed family photographs on a sideboard, a ceiling fan, warm lamp light, "
      + "tidy and lived-in. Empty, no people." },
];

const TITLES = [
  "Two patients", "One of them is gone", "The corridor at night", "Dr Aung Khant",
  "Shwe Thuka", "The families who come here", "Dr Than Htun", "Everything medicine can do",
  "My mother", "How I became a doctor", "Our hospital's VIP", "Ward 7",
  "Daw Mi Mi Aye", "Two in the morning", "Can I go home tomorrow?", "My son's school play",
  "Code blue", "Cardiac arrest", "Flatline", "Four ten in the morning",
  "Out of intensive care", "End-stage", "He is eating again", "Nobody can explain it",
  "Hours apart", "Ko Kyaw Zin", "The bed is empty", "She opens her eyes",
  "The archive", "Two columns", "You're imagining it", "Room 908",
  "Someone comes every night", "The figure in the doorway", "A hand on my chest",
  "How much do you have left?", "Not my age", "He wrote a number", "The control room",
  "Two seventeen", "Seven minutes", "★ The mark", "I photograph the screen",
  "U Win Myaing", "Five years of records", "Twenty-three and twenty-three",
  "Down to the basement", "Maintenance only", "Access denied", "The donor is Ward 5",
  "The light is on at home", "Her blood pressure", "Ward 5", "Director's order",
  "Why Ward 5?", "I sit with her", "The lights go down", "The handle turns",
  "His hand on her chest", "Without a stethoscope", "The smile is gone",
  "I show him the screenshot", "She speaks in her sleep", "Not her voice",
  "★ Her eyes", "He runs", "Her pressure falls", "Too late",
  "I take his card", "The red stairwell", "★ The room below", "Her name on the slip",
  "My mother", "Seventeen years ago", "Leukemia", "You're killing them",
  "But one of them lived", "Forty remaining years", "Doctors do this every day",
  "Why her?", "She trusted you", "The file under the mattress", "★ Candidate",
  "Never", "Her heart rate falls", "It has started", "He catches my wrist",
  "★ The bowl", "Donor and receiver", "Where does it go?", "Three of us in the room",
  "I take the slip", "The lights die", "★ The patients", "They only look at him",
  "I never said goodbye", "What about us?", "I tear it in half", "The floor",
  "Three days", "They can't explain it", "I understand", "How they found him",
  "The evidence", "The hospital closes", "Somewhere else now", "The question",
  "One month ago", "Her record", "★ Forty-one plus eighteen",
];

const ACT = {
  1: "Two patients", 4: "Shwe Thuka", 9: "My mother", 12: "Ward 7",
  21: "The recovery", 26: "It happens again", 32: "Room 908", 39: "The camera",
  44: "Twenty-three", 47: "The basement", 51: "My mother's turn", 56: "Two seventeen",
  69: "Below the basement", 88: "The bowl", 94: "The patients", 100: "After",
  108: "One month ago",
};

const A = "ဒေါက်တာအောင်ခန့်", T = "ဒေါက်တာသန်းထွန်း", M = "ဒေါ်ခင်မာရီ (အမေ)";
const MI = "ဒေါ်မီမီအေး", KZ = "ကိုကျော်ဇင်", KP = "ခင်ပြည့်", G = "လူနာသရဲတွေ";

const WHO = {
  4: [A], 7: [T], 8: [T], 9: [M], 11: [T, M, A], 13: [MI], 14: [A, MI], 15: [MI], 16: [MI],
  18: [MI], 20: [A], 25: [A], 26: [KZ], 28: [], 29: [A], 30: [A], 31: [A], 32: [KP], 33: [KP],
  36: [KP], 37: [A], 38: [KP], 39: [A], 43: [A], 45: [A], 46: [A], 49: [A], 50: [A],
  52: [M, A], 53: [M, A], 54: [A], 55: [T, A], 56: [A, M], 59: [T, M, A], 60: [T], 61: [T],
  62: [T, A], 63: [M], 64: [A, M], 65: [M], 66: [T], 69: [A], 71: [], 73: [A], 74: [T],
  75: [T], 76: [T, A], 77: [T, A], 78: [T], 79: [T], 80: [A], 81: [T, A], 82: [T], 83: [A],
  85: [A], 87: [T, A], 89: [T], 90: [T], 91: [T, A], 92: [T, A], 94: [G], 95: [T],
  96: [KZ], 97: [G], 98: [A], 99: [A], 100: [M, A], 102: [A], 106: [A], 107: [A],
  108: [M, A], 109: [A], 110: [A],
};

const WHERE = {
  1: "ဆေးရုံ", 2: "ဆေးရုံ", 3: "ဆေးရုံ", 4: "ဆေးရုံ", 5: "ခန်းမ", 6: "ခန်းမ", 7: "ဆေးရုံ",
  8: "ဆေးရုံ", 9: "အိမ်", 10: "အိမ်", 11: "ခန်းမ", 12: "ဆေးရုံ", 13: "ဆေးရုံ", 14: "ဆေးရုံ",
  15: "ဆေးရုံ", 16: "ဆေးရုံ", 17: "ဆေးရုံ", 18: "ဆေးရုံ", 19: "ဆေးရုံ", 20: "ဆေးရုံ",
  21: "ဆေးရုံ", 22: "ဆေးရုံ", 23: "ဆေးရုံ", 24: "ဆေးရုံ", 25: "ဆေးရုံ", 26: "ဆေးရုံ",
  27: "ဆေးရုံ", 28: "အထူးတန်းခန်း", 29: "ဆေးရုံ", 30: "ဆေးရုံ", 31: "ဆေးရုံ", 32: "ဆေးရုံ",
  33: "ဆေးရုံ", 34: "ဆေးရုံ", 35: "ဆေးရုံ", 36: "ဆေးရုံ", 37: "ဆေးရုံ", 38: "ဆေးရုံ",
  39: "ဆေးရုံ", 44: "အထူးတန်းခန်း", 45: "ဆေးရုံ", 46: "ဆေးရုံ", 47: "အောက်ခြေထပ်",
  48: "အောက်ခြေထပ်", 49: "အောက်ခြေထပ်", 50: "အောက်ခြေထပ်", 51: "အိမ်", 52: "အိမ်",
  53: "ဆေးရုံ", 54: "ဆေးရုံ", 55: "ဆေးရုံ", 56: "ဆေးရုံ", 57: "ဆေးရုံ", 58: "ဆေးရုံ",
  59: "ဆေးရုံ", 60: "ဆေးရုံ", 61: "ဆေးရုံ", 62: "ဆေးရုံ", 63: "ဆေးရုံ", 64: "ဆေးရုံ",
  65: "ဆေးရုံ", 66: "ဆေးရုံ", 67: "ဆေးရုံ", 68: "ဆေးရုံ", 69: "အောက်ခြေထပ်",
  70: "အောက်ခြေထပ်", 71: "ယဇ်ခန်း", 72: "ယဇ်ခန်း", 73: "ယဇ်ခန်း", 74: "ယဇ်ခန်း",
  75: "ယဇ်ခန်း", 76: "ယဇ်ခန်း", 77: "ယဇ်ခန်း", 78: "ယဇ်ခန်း", 79: "ယဇ်ခန်း",
  80: "ယဇ်ခန်း", 81: "ယဇ်ခန်း", 82: "ယဇ်ခန်း", 83: "ယဇ်ခန်း", 84: "ယဇ်ခန်း",
  85: "ယဇ်ခန်း", 86: "ယဇ်ခန်း", 87: "ယဇ်ခန်း", 88: "ယဇ်ခန်း", 89: "ယဇ်ခန်း",
  90: "ယဇ်ခန်း", 91: "ယဇ်ခန်း", 92: "ယဇ်ခန်း", 93: "ယဇ်ခန်း", 94: "ယဇ်ခန်း",
  95: "ယဇ်ခန်း", 96: "ယဇ်ခန်း", 97: "ယဇ်ခန်း", 98: "ယဇ်ခန်း", 99: "ယဇ်ခန်း",
  100: "ဆေးရုံ", 101: "ဆေးရုံ", 102: "ဆေးရုံ", 103: "ယဇ်ခန်း", 104: "ယဇ်ခန်း",
  105: "ခန်းမ", 106: "ဆေးရုံ", 107: "ဆေးရုံ", 108: "ဆေးရုံ", 109: "ဆေးရုံ", 110: "ဆေးရုံ",
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
  c.mm = MM_REF[c.name] || "";
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct person; do not `
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

const NOTE = `<b style="color:#ffb4b4">This is a medical thriller, not a ghost story. It should look
  like a hospital drama for its first eighty shots.</b>
  <br><br><b>1. Dr Than Htun must look trustworthy.</b> He is the villain, and the whole film
  depends on the audience liking him first. Calm, warm, immaculate, the senior doctor every family
  wants. <b>No menace anywhere in his face until shot 61</b>, where the smile finally goes. He is
  never lit from below, never in shadow, never sneering. He argues his case sincerely in the
  basement — shot <b>75</b> is genuine grief for his own daughter.
  <br><br><b>2. The dead are ordinary patients, not monsters.</b> They appear only in shots
  <b>94</b>, <b>96</b> and <b>97</b>. Solid, warm-skinned, uninjured, no blood, no pallor, no
  translucency, feet flat on the floor, standing still in hospital gowns. If a face comes out
  ghoulish, throw the image away — the whole point is that they look like people who should still
  be alive.
  <br><br><b>3. Two visual worlds.</b> Shots 1–70 are cold, clean and modern: fluorescent panels,
  pale vinyl, stainless steel, monitor glow. Shots 71–99 and 103–104 are the room below — dull red
  light on bare concrete. Nothing gothic anywhere: no cobwebs, no decay, no candles. The only occult
  objects in the entire film are a brass bowl, two paper slips and a stick of incense, all in
  <b>88</b>.
  <br><br><b>4. Nothing readable, ever — this one is strict.</b> The story runs on records, so
  screens and paper are everywhere: charts (<b>25, 30, 46</b>), the CCTV footage (<b>40–42</b>),
  the phone message (<b>68</b>), the file (<b>83</b>), the donor slips (<b>72, 88</b>) and the
  final record (<b>109, 110</b>). Every one must be angled away, blurred, glared out or shot from
  behind. <b>Shot 42 especially</b>: the mark on the door must read as an abstract red shape, NOT as
  legible characters — the number belongs in the narration, not on screen.
  <br><br><b>5. Ko Kyaw Zin keeps his dressing.</b> The small gauze square on his forehead in
  <b>26</b> is still there in <b>96</b>. It is how the audience recognises him among twenty gowns.
  <br><br><b>6. No gore.</b> The resuscitation in <b>18</b> has no blood. The body in <b>103</b> is
  covered, and only a hand shows — a hand far older than sixty-two, undamaged.
  <br><br><b>The mother is the spine of the film.</b> Shots 9, 11, 52, 53, 59, 63, 65, 100 and 108.
  Keep her warm and specific; the ending only lands if the audience would miss her.
  <br><br><b>Shots 40, 41 and 42 carry no reference on purpose.</b> They are security-camera frames
  — grainy black-and-white, overhead, interference banding — and should look nothing like the rest of
  the film. Generate them free-standing and resist making them pretty.
  <br><br>Build all ${NREF} references before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/ward.html", buildPage({
  title: "ကျန်ရှိသေးသော အသက် — image prompts",
  subtitle: `REMAINING LIFE · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "ward.done.v1",
  note: NOTE, nav: NAV("ward"),
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
