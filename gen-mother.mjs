/**
 * Builds mother.html for နှစ်ခါပြန်လာတဲ့အမေ (The Mother Who Came Home Twice).
 *
 *   node gen-mother.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-mother.mjs";
import { buildPage } from "./page.mjs";
import { plate, PLATE_MM } from "./plate.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "cfkdxjlxbi7";

const STYLE =
  "A small village in Bago Region, rural Myanmar, around the year 2000, during a heavy monsoon "
  + "evening. A raised teak house on posts, a wide bare dirt yard turning to mud, a mango tree, "
  + "flooded paddy fields behind the house. Warm kerosene lamplight indoors, cold blue-grey storm "
  + "light outside, rain falling hard. Cinematic photorealism, domestic and lived-in rather than "
  + "gothic — this is a home before it is a haunting. Desaturated warm palette, 35mm film grain, "
  + "shallow depth of field, 16:9. No modern objects, no phones, no vehicles, no electric light. "
  + "Nothing monstrous, no visible ghost, no corpse. No legible text or numbers anywhere, no watermark.";

const OVERCAST_STYLE =
  "A small village in Bago Region, rural Myanmar, around the year 2000, in ordinary overcast daytime "
  + "before a monsoon storm. Raised teak house, bare dirt yard, mango tree and flooded paddy fields. "
  + "Natural cinematic photorealism, desaturated colour, 35mm grain, shallow depth of field, 16:9. No "
  + "modern objects, phones, vehicles, electric light, supernatural figure, corpse, legible text, numbers or watermark.";

const MORNING_STYLE =
  "A small village in Bago Region, rural Myanmar, around the year 2000, in clear ordinary morning "
  + "daylight before the storm. Warm natural colour, cinematic photorealism, 35mm grain, shallow depth "
  + "of field, 16:9. No modern objects, phones, vehicles, electric light, supernatural figure, corpse, "
  + "legible text, numbers or watermark.";

const LATER_STYLE =
  "The same Bago Region village home about twelve years later, in calm natural daylight. The house, "
  + "yard, kitchen and mango tree are recognizably the same but gently aged. Contemporary rural Myanmar "
  + "without conspicuous technology. Cinematic photorealism, restrained family mystery rather than "
  + "horror, natural colour, 35mm grain, shallow depth of field, 16:9. No visible ghost, corpse, gore, "
  + "legible text, numbers or watermark.";

const RETURN_STYLE =
  "The same raised teak village house and yard in Bago Region at dusk in fine rain, seen as a quiet "
  + "memory outside normal time. Cold grey rain outdoors and warm kerosene light within, cinematic "
  + "photorealism, natural desaturated colour, 35mm grain, shallow depth of field, 16:9. The mother is "
  + "warm and ordinary, never spectral or sinister. No visible ghost effect, corpse, gore, modern objects, "
  + "legible text, numbers or watermark.";

export const styleForShot = (n) => n === 1 ? STYLE : n === 4 ? MORNING_STYLE : n <= 3 ? OVERCAST_STYLE
  : n <= 47 ? STYLE : n <= 53 ? LATER_STYLE : RETURN_STYLE;

/**
 * ONE MOTHER, ONE REFERENCE.
 *
 * The two mothers must be indistinguishable, so giving them separate references
 * would be the fastest way to break the story — two references drift, and the
 * moment the audience can tell them apart the ending stops landing. There is one
 * mother plate, and the shots carry the only two differences there are: dry or
 * soaked, scar or no scar.
 */
const CAST = [
  { name: "အမေ", en: "The mother — one reference for both",
    prompt: "A rural Burmese woman aged forty-five, short and slight, warm medium-brown skin, a softly "
      + "oval lined face, dark-brown almond eyes, straight brows, a broad gentle nose and black hair "
      + "pulled into a low knot with a clean centre part. Pale cream high-necked traditional cotton "
      + "blouse with small cloth buttons, dark forest-green htamein and simple black sandals. Dry, clean "
      + "and warmly ordinary—never pale, sinister or uncanny. This base plate has no wrist scar." },
  { name: "သား", en: "The son",
    prompt: "A Burmese boy aged sixteen, slim and slightly tall, warm medium-brown skin, long oval face, "
      + "dark-brown eyes, straight brows and short thick black hair falling slightly over the forehead. "
      + "Faded rust-red short-sleeved cotton shirt, dark navy-and-grey checked longyi, barefoot. Open, "
      + "responsible face, still visibly adolescent." },
  { name: "သားအရွယ်ရောက်", en: "The son — twelve years later",
    sameAs: 2,
    prompt: "The exact same son as Reference 2 aged forward by twelve years to twenty-eight. Preserve "
      + "his facial structure, skin tone, eyes, brows and hairline; do not create a different man. Lean "
      + "adult build, shorter neat black hair, muted blue-grey collared shirt, dark longyi and sandals. "
      + "Quiet, practical and recognizable as the former sixteen-year-old." },
  { name: "ခင်", en: "Khin, the sister",
    prompt: "A Burmese girl aged nine, small, warm medium-brown skin, round face, large dark-brown eyes, "
      + "straight fringe and black hair in two short plaits tied with faded red ribbons. Simple mustard-"
      + "yellow cotton house dress, barefoot. Cheerful, trusting and healthy." },
  { name: "ခင်အရွယ်ရောက်", en: "Khin — twelve years later",
    sameAs: 4,
    prompt: "The exact same Khin as Reference 4 aged forward by twelve years to twenty-one. Preserve "
      + "her round facial structure, skin tone, large dark eyes and straight fringe; do not create a "
      + "different woman. Long black hair in one low braid, muted mustard blouse and dark maroon htamein. "
      + "A married young adult returning home in grief, natural and ordinary." },
  { name: "ခွေး", en: "The dog",
    prompt: "A small thin short-haired village dog, tan coloured, standing alert on bare earth, "
      + "nothing else in frame. Photorealistic, natural colour, overcast daylight." },
];

const PROPS = [
  { name: "ခြင်းတောင်း", en: "The bamboo basket",
    prompt: "A round woven bamboo market basket with a shallow rim, the weave worn smooth with use, "
      + "empty, standing on a plain wooden table. Nothing else in frame. There will eventually be two "
      + "of these and they must match exactly. Photorealistic, natural colour, warm lamplight." },
];

const LOCS = [
  { name: "အိမ်ခြံ", en: "The house and yard",
    prompt: "A raised teak village house on wooden posts with a short flight of steps to a plank "
      + "door, a wide bare dirt yard in front of it, a mango tree to one side, a simple fence and open "
      + "gate, flooded paddy fields beyond. Overcast wet daylight. Empty, no people." },
  { name: "အိမ်ခြံနောက်ပိုင်း", en: "The same house and yard, twelve years later",
    prompt: "The same raised teak village house, steps, mango tree, simple fence, open gate and paddy "
      + "fields twelve years later in calm dry daylight. The timber is gently more weathered, mango tree "
      + "larger and yard lived-in with a washing line, but the geography is unmistakably identical. "
      + "Empty, no people, rain, funeral decoration, text or modern vehicle." },
  { name: "မီးဖိုချောင်", en: "The kitchen",
    prompt: "A simple village kitchen: a clay stove with a blackened rice pot on it, a low wooden "
      + "table, a clay water pot, cooking things on a shelf, a kerosene lamp, plank walls and floor. "
      + "Warm dim light. Empty, no people." },
  { name: "တံခါး", en: "The front door",
    prompt: "The front plank door of a raised village house seen from inside: a simple wooden latch, "
      + "worn boards, a gap beneath it, a short landing beyond. Warm lamplight inside, cold storm "
      + "light showing at the edges. Closed, empty, no people." },
];

const WHO = {
  2: ["သား"], 4: ["အမေ"], 6: ["ခင်"], 7: ["သား"], 8: ["ခွေး"], 9: ["သား"],
  10: ["အမေ", "ခြင်းတောင်း"], 11: ["အမေ"], 13: ["အမေ"], 14: ["သား", "အမေ"], 15: ["အမေ"],
  16: ["အမေ"], 17: ["ခြင်းတောင်း"], 18: ["အမေ", "ခင်"], 19: ["အမေ"], 20: ["သား"],
  21: ["အမေ"], 22: ["အမေ"], 23: ["အမေ"], 25: ["အမေ"], 26: ["အမေ", "ခင်"],
  27: ["အမေ", "ခင်"], 28: ["အမေ"], 29: ["အမေ"], 30: ["သား", "အမေ"], 31: ["ခွေး"],
  32: ["ခင်"], 33: ["အမေ", "ခြင်းတောင်း"], 34: ["အမေ", "ခွေး", "ခြင်းတောင်း"], 35: ["အမေ"],
  37: ["အမေ"], 39: ["အမေ"], 41: ["အမေ", "ခြင်းတောင်း"], 43: ["အမေ"],
  44: ["အမေ", "သား", "ခင်"], 45: ["အမေ"], 46: ["ခြင်းတောင်း"], 47: ["ခြင်းတောင်း"],
  49: ["အမေ"], 50: ["သားအရွယ်ရောက်"], 52: ["ခင်အရွယ်ရောက်"],
  53: ["သားအရွယ်ရောက်", "ခင်အရွယ်ရောက်"], 55: ["အမေ"],
};
const WHERE = {
  1: "အိမ်ခြံ", 2: "အိမ်ခြံ", 3: "အိမ်ခြံ", 5: "အိမ်ခြံ", 6: "အိမ်ခြံ",
  7: "မီးဖိုချောင်", 8: "အိမ်ခြံ", 9: "အိမ်ခြံ", 10: "အိမ်ခြံ", 12: "အိမ်ခြံ",
  13: "အိမ်ခြံ", 14: "အိမ်ခြံ", 17: "မီးဖိုချောင်", 18: "မီးဖိုချောင်", 19: "မီးဖိုချောင်",
  20: "မီးဖိုချောင်", 21: "မီးဖိုချောင်", 22: "မီးဖိုချောင်", 23: "မီးဖိုချောင်",
  24: "မီးဖိုချောင်", 25: "မီးဖိုချောင်", 26: "မီးဖိုချောင်", 27: "မီးဖိုချောင်",
  29: "မီးဖိုချောင်", 30: "မီးဖိုချောင်", 31: "အိမ်ခြံ", 32: "အိမ်ခြံ", 33: "တံခါး",
  34: "အိမ်ခြံ", 35: "မီးဖိုချောင်", 36: "တံခါး", 37: "မီးဖိုချောင်", 38: "တံခါး",
  39: "မီးဖိုချောင်", 40: "တံခါး", 41: "တံခါး", 42: "မီးဖိုချောင်", 43: "မီးဖိုချောင်",
  44: "မီးဖိုချောင်", 46: "မီးဖိုချောင်", 47: "မီးဖိုချောင်", 48: "အိမ်ခြံနောက်ပိုင်း",
  51: "အိမ်ခြံနောက်ပိုင်း", 54: "အိမ်ခြံ", 55: "အိမ်ခြံ",
};

export const TITLES = ["She came home twice", "Sixteen", "The house", "She goes to market",
  "The storm comes", "Khin at the window", "Washing the rice", "The dog hides",
  "He steps out", "She is dry", "Her clothes", "The rain", "Her feet", "Did you have an umbrella?",
  "Is it raining?", "She doesn't laugh", "The basket", "How old are you?", "No answer",
  "He starts to feel it", "In the kitchen", "The wrong hand", "She looks at her own hand",
  "Lighting the lamp", "Her face in the light", "Khin talks to her", "Khin takes her wrist",
  "The scar", "It already happened", "He doesn't understand", "The dog runs out",
  "Khin turns white", "At the gate", "She crosses the yard", "The one at the stove",
  "Open the door, son", "She turns her head", "Knocking again", "Sorrow", "He opens it",
  "Soaked", "Nobody there", "Who cooked this?", "They tell her everything", "No scar",
  "Two baskets", "Empty", "Years pass", "The burn",
  "He remembers", "She gets ill", "The blouse", "He understands", "The empty yard",
  "Coming home early"];

const ACT = { 1: "That evening", 4: "The storm", 10: "The dry mother", 21: "The wrong hand",
  31: "The second mother", 40: "Both at once", 48: "Twelve years later", 54: "What it was" };

export const DETAILS = [
  /* 1 */ "Wide view from beneath the veranda roof toward the empty gate during violent rain. Use the flooded yard and two implied arrival paths as anticipation only; no mother, duplicate, ghost, text or modern object yet.",
  /* 2 */ "Natural full-body portrait of the sixteen-year-old son on the veranda, with adolescent face, rust-red shirt, checked longyi and bare feet all readable. He is ordinary and relaxed; no adult version, fear or rain-soaked clothing.",
  /* 3 */ "Daylight establishing frame from the yard showing the complete raised teak house, steps, mango tree, open fields and household scale. Keep the place lived-in and modest, without people, storm-night lighting or supernatural emphasis.",
  /* 4 */ "Rear three-quarter wide shot of dry Mother leaving in clear morning light, exact cream blouse and green htamein visible, matching bamboo basket empty on her arm. She walks away toward market; no rain, scar or second woman.",
  /* 5 */ "Panoramic late-afternoon weather shot over flooded fields as green-grey clouds close in and wind bends vegetation. Show rain advancing toward the house but no person, lightning bolt, ghost silhouette or night sky.",
  /* 6 */ "Interior medium profile of nine-year-old Khin seated at the open window, red-ribbon plaits and mustard dress visible as she watches the road. Cold storm light shapes her face; she is expectant, not frightened.",
  /* 7 */ "Top-down kitchen detail on the sixteen-year-old son's hands washing rice in a metal basin beside the clay stove. Include rust-red sleeve cuffs for identity; no mother, electric appliance or modern packaging.",
  /* 8 */ "Low exterior shot beneath the raised house: the thin tan dog presses into shadow between posts, ears flat, silently watching the rain. It is wary but natural, not snarling, supernatural or injured.",
  /* 9 */ "Rear medium-wide shot as the son steps from warm kitchen darkness onto the covered veranda. Heavy rain fills the yard beyond while his clothes and bare feet remain dry; no mother visible yet.",
  /* 10 */ "Long-lens view across the flooded yard: Mother walks toward camera through the downpour carrying the basket at her side, yet hair, cream blouse, green htamein, feet and basket remain perfectly dry. Rain must visibly strike all space around but never touch her.",
  /* 11 */ "Chest-to-knee continuity close-up of Mother's exact cream blouse and forest-green htamein, fabric dry, soft and unwrinkled despite dense rain behind. No wet patches, scar, pale skin, glow or sinister framing.",
  /* 12 */ "Ground-level insert of rain hammering mud and water streaming around the house steps. Make the physical wetness undeniable so the dry arrival is impossible; no feet, person, face or supernatural effect.",
  /* 13 */ "Macro at the first wooden step: Mother's bare feet and ankles are clean, dust-dry and mud-free while brown water runs around them. Keep natural skin and correct direction toward the house; no scar or floating feet.",
  /* 14 */ "Veranda medium two-shot with the son facing dry Mother at conversational distance, rain obvious behind her. Their matching eyeline is ordinary; she carries the basket, he looks puzzled, and neither appears uncanny.",
  /* 15 */ "Close portrait of dry Mother responding to the son, exact kind face and low hair knot unchanged. Her eyes are normal and calm while rain blurs behind; no smile of menace, pale makeup, duplicated face or wet hair.",
  /* 16 */ "Three-quarter interior shot as the dry Mother walks past the laughing children without joining their laughter. Her expression is neutral and preoccupied, not hostile; cream blouse, green htamein, clean feet and no wrist scar remain continuous.",
  /* 17 */ "Overhead product-like insert of the matching bamboo basket placed on the low kitchen table. It is completely dry outside and holds ordinary market goods only if visible; no second basket yet.",
  /* 18 */ "Warm lamplit two-shot with dry Mother studying nine-year-old Khin's face as if learning it, while Khin looks up trusting and cheerful. Keep their physical distance natural and Mother's attention searching rather than predatory.",
  /* 19 */ "Close on dry Mother's ordinary face listening without reply, with Khin's blurred plaits at frame edge establishing the eyeline. She remains warm-looking but uncertain; no empty eyes, smile, double exposure or horror lighting.",
  /* 20 */ "Doorway portrait of the teenage son watching Mother across the kitchen, half-lit by the kerosene lamp. His concern is small and rational, not panic; preserve the rice basin and stove geography behind her.",
  /* 21 */ "Rear three-quarter medium-wide shot of dry Mother preparing rice at the clay stove in familiar domestic rhythm. Cream blouse, green htamein and low knot remain exact; no scar visible, no second mother and no modern cooker.",
  /* 22 */ "Tight hand-action frame: dry Mother confidently lifts the blackened pot with her LEFT hand while the son notices from soft background. Make left/right unmistakable through body orientation; no scar on this hand and no burned skin.",
  /* 23 */ "Macro-to-medium frame of Mother pausing to inspect her own LEFT hand as if unfamiliar, then beginning to switch toward the right. Keep natural anatomy, no wound, glow, possession pose or extra hand.",
  /* 24 */ "Close practical insert of the son lighting a kerosene wick beneath its glass chimney. Warm light expands against storm-blue edges; no electric bulb, text, face apparition or uncontrolled fire.",
  /* 25 */ "Clean lamplit portrait of dry Mother with every familiar facial feature correct and human. The unease must come only from studied stillness and precise eye contact; no pallor, odd pupils, deformation or supernatural effect.",
  /* 26 */ "Gentle floor-level two-shot of Khin chattering beside seated Mother. Khin gestures freely and smiles while Mother listens with minimal nods and no follow-up; keep the scene outwardly safe and domestic.",
  /* 27 */ "Close hand study with Khin's small hand turning Mother's RIGHT wrist palm-up. Use mustard sleeve, cream cuff and correct anatomy as identifiers; both faces may remain soft, and no scar is yet emphasized until the next frame.",
  /* 28 */ "Extreme macro of the inside RIGHT wrist showing one thin smooth pale healed burn scar in a precise repeatable path. Skin is otherwise healthy; no fresh redness, blister, blood, text or wrong wrist.",
  /* 29 */ "Medium close-up of dry Mother looking from the RIGHT-wrist scar to the children with distant recognition. Keep sorrow faint and private, not menace; scar position, dry clothes and kind face remain exact.",
  /* 30 */ "Across-kitchen two-shot with the son asking again while dry Mother turns back toward the rice pot without answering. Preserve her RIGHT-wrist scar if visible and his growing concern; no duplicate in frame.",
  /* 31 */ "Low dynamic exterior frame of the tan dog bursting from beneath the house and racing joyfully toward the gate through rain. Tail high, ears forward; this is recognition of the real Mother, not aggression.",
  /* 32 */ "Interior window medium shot of Khin turning from the rain with her face suddenly drained, one hand gripping the sill. Her age, plaits and dress remain exact; no adult version, ghost behind glass or exaggerated scream.",
  /* 33 */ "Long shot from the lit doorway across the flooded yard: the exact same Mother stands at the gate, genuinely soaked, basket in hand, hair and clothes plastered naturally by rain. No scar should be visible at this distance and no second figure appears outside.",
  /* 34 */ "Tracking-style side view frozen mid-stride as soaked Mother hurries toward the house with basket over her head and delighted dog circling safely. Water streams from the cream blouse and green htamein; direction is gate to house.",
  /* 35 */ "Son's viewpoint into the kitchen: the first Mother remains dry and motionless with her back to camera at the stove. Use exact blouse, htamein and low knot; do not reveal the soaked Mother or turn the dry figure monstrous.",
  /* 36 */ "Centered interior view of the closed plank door as rain pushes water beneath the gap and Khin's small hand grips the son's hand in foreground. The soaked Mother's voice remains off-screen; no silhouette through the door.",
  /* 37 */ "Three-quarter profile of dry Mother turning her head only slightly from the stove, calm grief entering her familiar face. The children remain together in background, Khin beginning to cry; no threat, strange eyes or full turn toward camera.",
  /* 38 */ "Closer callback on the same closed door with a fresh wet handprint or subtle vibration near knocking height and rainwater advancing underneath. No visible person, written sound effect, broken latch or supernatural light.",
  /* 39 */ "Intimate lamplit portrait of dry Mother finally facing the children with open sorrow and permission, not hostility. Preserve exact face, dry hair, scarred RIGHT wrist if included and natural eyes; this is the emotional turn.",
  /* 40 */ "Interior wide shot as the son opens the door inward and cold rain light silhouettes soaked Mother outside. Keep dry Mother off-frame in the kitchen, Khin behind the son, and both versions visually identical without merging.",
  /* 41 */ "Full-body entry frame of soaked Mother just inside, water pooling from hair, blouse, htamein and basket. She looks tired, confused and entirely human; children face her, while no dry duplicate appears in the doorway frame.",
  /* 42 */ "Locked view through the kitchen doorway at the now-empty stove area: rice pot and burning lamp exactly where dry Mother left them, with no person, shadow, smoke figure or disappearing effect.",
  /* 43 */ "Medium rear three-quarter shot of soaked Mother entering the empty kitchen and studying the already-cooking pot. Water drips naturally from her clothes; her face shows practical confusion, no wrist scar and no menace.",
  /* 44 */ "Warm floor-level family three-shot: soaked Mother sits with teenage son and Khin beside the lamp as they explain. Their faces are readable, Khin tearful but safe, Mother attentive and ordinary; no ghost visualization or dry double.",
  /* 45 */ "Extreme macro matching shot 28 exactly in angle and scale: soaked Mother's inside RIGHT wrist has smooth unmarked skin with no scar. Keep water droplets external to the skin, correct wrist orientation and no jewelry.",
  /* 46 */ "Centered overhead frame of two visually identical bamboo baskets side by side on the low table, one wet and newly arrived, one perfectly dry. Match weave, rim, size and wear exactly; no third basket or changed design.",
  /* 47 */ "Top-down macro into the dry duplicate basket showing only a few faded dried flower petals caught deep in the weave. Keep the matching rim visible and avoid food, market goods, magical glow, writing or a completely empty bottom.",
  /* 48 */ "Calm years-later establishing shot of the same house, mango tree and yard in dry daylight, subtly aged but recognizable. Laundry and ordinary life show time passing; no original child figures, storm or ghost.",
  /* 49 */ "Exact-angle macro of older Mother's inside RIGHT wrist after a minor kitchen burn has healed into the same thin pale line from shot 28. Use healthy surrounding skin and daylight; no fresh blister, dressing, gore or wrong wrist.",
  /* 50 */ "Medium doorway portrait of the twenty-eight-year-old son staring toward Mother's wrist off-frame as memory lands. Preserve the aged identity from Reference 3; shock is internal and quiet, without teenage face, blood or flashback overlay.",
  /* 51 */ "Respectful exterior establishing frame of the same village house in soft late daylight with several pairs of visitors' sandals at the steps. Suggest illness and family return without showing Mother, a corpse, funeral decorations or supernatural signs.",
  /* 52 */ "Close domestic detail of adult Khin's hands lifting the exact aged cream blouse and forest-green htamein from a wooden chest. Show her mustard cuff for identity and the garments' distinctive buttons and weave; no body or corpse.",
  /* 53 */ "Medium two-shot of adult son and adult Khin recognizing the folded clothes between them. Preserve both aged-from-child identities and silent grief; the clothes remain sharp, with no deceased Mother, apparition or dialogue text.",
  /* 54 */ "Empty-yard memory composition from the veranda at dusk in fine rain, open gate and path forming a clear route toward the house. Quiet absence carries the realization; no figure, duplicate, corpse or horror effect.",
  /* 55 */ "Final long-lens rear three-quarter image of forty-five-year-old Mother in the exact cream blouse and green htamein walking DRY through fine rain from the gate TOWARD the house. Her RIGHT-wrist scar is subtly present, identity warm and ordinary; never walking away, ghostly or menacing.",
];

if (DETAILS.length !== TITLES.length)
  throw new Error(`mother detail count ${DETAILS.length} does not match title count ${TITLES.length}`);

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
  c.mm = (MM_REF[c.name] || "") + PLATE_MM;
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). `
    + (c.sameAs
      ? `A continuity age variant of Reference ${c.sameAs}; attach that reference and preserve the exact identity. `
        + `Do not create a new or merely similar person.\n\n`
      : `A new and distinct subject; do not repeat or vary any previous reference.\n\n`)
    + `${c.prompt}`
    + plate(c.pose);
});
LOCS.forEach((l, i) => {
  l.mm = MM_REF[l.name] || "";
  l.prompt = `Reference ${CAST.length + PROPS.length + 1 + i} of ${NREF} — ${l.en} (${l.name}), a `
    + `LOCATION plate. A new and distinct place; do not repeat or vary any previous reference. `
    + `Establish the place itself, empty of people and of incident.\n\n${l.prompt}`;
});
shots.forEach((s, i) => {
  const n = i + 1;
  s.prompt = s.raw.includes("Detailed scene direction:") ? s.raw
    : `Shot ${n} of ${shots.length} — scene ${s.id}, "${s.title}". A new and distinct frame `
      + `in an ongoing sequence; do not repeat, vary or re-render any previous image.\n\n`
      + `${s.raw.trim()}\n\nDetailed scene direction: ${DETAILS[i]}\n\n${styleForShot(n)}`;
  delete s.raw;
});

const NOTE = `<b style="color:#ffb4b4">One mother. One reference. This is the whole film.</b>
  <br><br>The two mothers must be <b>indistinguishable</b>, so there is a single mother plate and every
  shot of either version attaches it. Giving them separate references would be the fastest way to break
  the story — two references drift, and the moment the audience can tell them apart the ending stops
  landing.
  <br><br><b>There are exactly two differences</b>, and they are carried by the shot prompts, never by
  the reference:
  <br>&nbsp;&nbsp;• <b>Dry or soaked.</b> Shots 10–16 are the impossible one — walking through a
  downpour with dry hair, dry cloth, clean feet. Shots 33, 34, 41 and 43 are the real one, drenched.
  <br>&nbsp;&nbsp;• <b>Scar or no scar.</b> A thin pale burn on the <b>RIGHT wrist</b>. Present in shot
  28, absent in shot 45, and back in shot 49 twelve years later in exactly the same place. Those three
  macros have to match each other precisely — they are the reveal.
  <br><br><b>Neither version is ever monstrous.</b> No pallor, no strange eyes, no cold grade, nothing
  uncanny. She looks exactly like their mother because she is their mother. The dread is entirely in
  small wrong details: the dry clothes, the dog hiding, the left hand, asking her own daughter's age.
  <br><br><b>Shot 39 is the emotional turn</b> — the first time she looks openly sorrowful. Grieving,
  not threatening. If it reads as menace the ending is lost.
  <br><br><b>Shot 55 is the answer.</b> Same blouse, same htamein, dry, in the rain — and walking
  <i>toward</i> the house, not away. That direction is the story.
  <br><br>Khin appears only in safe domestic scenes. Build all ${NREF} references before starting.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/mother.html", buildPage({
  title: "နှစ်ခါပြန်လာတဲ့အမေ — image prompts",
  subtitle: `SHE CAME HOME TWICE · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "mother.done.v1",
  note: NOTE, nav: NAV("mother"),
  groups: [
    { heading: "People and the basket — build these first", items: [...CAST, ...PROPS] },
    { heading: "Locations — one plate per recurring setting", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  mother attached: ${shots.filter((s) => s.who.includes("အမေ")).length} shots`);
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
