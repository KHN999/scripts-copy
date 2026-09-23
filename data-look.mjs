/**
 * ဘယ်သူမှ ကျွန်မကို မကြည့်ကြဘူး — NOBODY LOOKS AT ME
 *
 * Board for theydontlookme.txt.
 *
 *   1. ⚠️ THE DEAD FACE IS SEEN TWICE. THE INJURY IS NEVER SEEN AT ALL.
 *      Thun Nadi wears her LIVING face in every frame except two — the phone
 *      camera at 78 and the black screen at 97 — and in those two the face on
 *      the screen is plainly that of a dead woman: skin drained to flat grey,
 *      hair soaked, eyes open and fixed, mouth slack. That is the payoff of the
 *      film and it has to be LEGIBLE. The first pass told those two shots the
 *      face "must stay unreadable" with "no detail, no anatomy"; the generator
 *      obeyed and returned a curtain of hair, which is a missing shot rather
 *      than restraint. Gory and dead are different problems — gory is wounds
 *      and blood, which we never draw; dead is colour, focus and muscle tone,
 *      which photographs fine. The ROAD DAMAGE stays unseen by turning one half
 *      of the face away into shadow, so the viewer finishes it. The script
 *      names split lips and a deformed cheekbone; no prompt here ever does.
 *      Everywhere else the horror is carried by REACTIONS — people turning
 *      away, a child running, a mother who will not look up.
 *   2. THE MIRROR IS THE MOTIF. Six times she looks into the same bathroom
 *      mirror in the same framing and the same beautiful face looks back. The
 *      seventh time the reflection stops copying her, smiles, turns, and walks
 *      away into the dark. That is the only supernatural action in the film and
 *      it lands because nothing before it has moved on its own.
 *   3. MIRRORS LIE, LENSES DO NOT. Every glass mirror shows her as she was.
 *      Every phone screen, camera and laptop shows the truth. The reveal is her
 *      own mother turning a phone camera around, and it works only if the rule
 *      has been silently consistent for eighty shots.
 *   4. SHE DOES NOT KNOW SHE IS DEAD, so she is never lit or framed as a ghost.
 *      No pallor, no transparency, no floating, no glow, no cold grade. She is a
 *      solid young woman in a bright cosmetics shop. Everyone else behaves
 *      strangely; she behaves normally. That asymmetry IS the film.
 *   5. NOTHING OF THE ACCIDENT IS SHOWN. A road, rain, headlights, a dropped
 *      phone. No impact, no body on the road, nobody injured anywhere.
 *   6. THE ENDING IS BURMESE AND NOT WESTERN. Monks are invited, merit is
 *      shared, and she cannot accept it — so she cannot leave. No possession,
 *      no malice, no jump. She simply stays in the room.
 */

export const CAST = [
  { name: "သွန်းနဒီ", en: "Thun Nadi — the narrator, twenty-two",
    prompt: "A Burmese woman of twenty-two, slender, notably fair smooth skin, a delicate oval "
      + "face, large round dark eyes, a fine straight nose, and very long straight black hair "
      + "falling past her waist. Carefully and prettily made up. A soft cream blouse and a dark "
      + "long skirt, a thin gold chain necklace with a small pendant always at her throat. ⚠️ SHE "
      + "IS UNHARMED AND BEAUTIFUL IN EVERY SHOT OF THIS FILM — clear even skin, both eyes open "
      + "and matching, nothing marked, nothing wet, nothing changed, at every point in the story "
      + "including the very last shot. ⚠️ SHE IS NEVER A GHOST: fully solid and opaque, feet on "
      + "the floor, ordinary shadow, healthy warm skin tone lit by whatever light the room has. "
      + "She looks like a healthy young woman having an ordinary day." },
  { name: "အမေ", en: "The mother — about fifty",
    prompt: "A Burmese woman of about fifty, a soft lined kind face, medium-brown skin, greying "
      + "black hair pinned back in a low bun. A plain house htamein and a simple blouse, small "
      + "gold ear studs. Exhausted rather than frightened — swollen eyelids, the face of someone "
      + "who has been crying privately for a week and carrying on. ⚠️ SHE IS ORDINARY AND WHOLE: "
      + "not ill, not wounded, not supernatural." },
  { name: "ပန်းဧကရီ", en: "Pan Ei Kari — the closest friend, twenty-two",
    prompt: "A Burmese woman of twenty-two, a little rounder in the face than Thun Nadi, "
      + "medium-brown skin, shoulder-length black hair, barely any make-up. A soft oversized "
      + "t-shirt and cotton shorts, a scrunchie on one wrist. She looks like someone who has not "
      + "slept properly: shadowed under the eyes, hair unbrushed. ⚠️ Ordinary and unharmed "
      + "throughout." },
  { name: "မမေသူ", en: "Ma May Thu — the shop owner, about thirty-five",
    prompt: "A Burmese woman of about thirty-five, neat and businesslike, medium-brown skin, "
      + "black hair in a tidy low ponytail, light everyday make-up. A pressed pink shop uniform "
      + "polo shirt with a small embroidered logo, a lanyard, dark trousers. Warm-natured by "
      + "default; in this film she is holding herself very carefully. ⚠️ Ordinary and unharmed "
      + "throughout." },
  { name: "ဆရာမကြီး", en: "The older woman — the one who knows, about fifty-five",
    prompt: "A Burmese woman of about fifty-five, small and composed, weathered medium-brown "
      + "skin, grey-streaked hair drawn back tightly, no make-up. A plain dark htamein and a "
      + "modest long-sleeved jacket, a string of brown prayer beads wound around one wrist. Calm, "
      + "unfrightened, matter-of-fact — a woman who has done this many times before. ⚠️ SHE IS "
      + "NOT A FORTUNE TELLER OR A SHAMAN and wears no costume, no charms, no robes, no ritual "
      + "dress. An ordinary neighbourhood woman." },
  { name: "ကလေး", en: "The child at the corner — about five",
    prompt: "A Burmese child of about five, small, medium-brown skin, a round face, short black "
      + "hair, a faded red t-shirt and shorts, rubber slippers, a smear of thanaka on both "
      + "cheeks. ⚠️ THE CHILD IS NEVER SHOWN HURT and is never made frightening — an ordinary "
      + "small child, healthy and whole." },
  { name: "အဒေါ်ကြီး", en: "The neighbour aunt — about sixty",
    prompt: "A Burmese woman of about sixty, stout, medium-brown skin, short permed greying hair, "
      + "a floral house blouse and a dark htamein, plastic slippers, a small cloth market bag "
      + "over one arm. An ordinary neighbour on an ordinary errand. ⚠️ Whole and unharmed." },
];

export const LOCS = [
  { name: "အလှကုန်ဆိုင်", en: "The cosmetics shop — master plate",
    prompt: "THE MASTER PLATE FOR THE SHOP. A small bright modern cosmetics shop in Yangon, "
      + "photographed from just inside the glass front door looking in, so the length of the shop "
      + "runs away from camera. White shelving down both side walls packed with skincare boxes, "
      + "lipsticks and serum bottles in neat rows, a glass counter with a till at the far end, a "
      + "tall mirror panel beside the counter, white ceiling spotlights and a cool white strip "
      + "light overhead. ⚠️ EVERYTHING IS CLEAN, MODERN, BRIGHT AND ORDINARY — a shop doing "
      + "normal business. No flicker, no dust, no gloom, no horror dressing. Empty of people for "
      + "this plate." },
  { name: "ထမင်းစားခန်း", en: "The dining room at home",
    prompt: "A small ordinary Myanmar family dining room: a round wooden table with four chairs, "
      + "a tiled floor, pale green painted walls, a ceiling fan, a glass-fronted cabinet of "
      + "crockery, a doorway through to a dark corridor. A single warm ceiling bulb. Lived-in, "
      + "clean and completely unremarkable. Empty of people for this plate." },
  { name: "ရေချိုးခန်း", en: "The bathroom — master plate for the mirror",
    prompt: "THE MASTER PLATE FOR THE MIRROR. A small ordinary Myanmar bathroom: pale blue wall "
      + "tiles, a white ceramic basin, a chrome tap, a plastic water scoop and bucket in the "
      + "corner, one bare warm bulb above. ⚠️ ON THE WALL DIRECTLY ABOVE THE BASIN: a plain "
      + "rectangular frameless mirror, about as wide as the basin, hung square and level. The "
      + "mirror and the basin are always in this same relationship. Clean, dry and ordinary — no "
      + "mould, no cracks, no fogging, no grime. Empty of people for this plate." },
  { name: "သွန်းနဒီအခန်း", en: "Thun Nadi's bedroom",
    prompt: "A young Burmese woman's small bedroom: a single bed with a floral cover, a dressing "
      + "table with a round mirror and an orderly crowd of cosmetics on it, a wardrobe, a window "
      + "with a thin curtain, pale painted walls, a tiled floor. Pretty, tidy and very much "
      + "lived-in. Empty of people for this plate." },
  { name: "ဧကရီတိုက်ခန်း", en: "Pan Ei Kari's flat",
    prompt: "The inside of a small cheap Yangon apartment: a narrow living space, a low couch, a "
      + "cluttered coffee table, a standing fan, a window onto a light well, scuffed walls and a "
      + "worn vinyl floor. A laptop sits open on the coffee table. Ordinary, untidy and real. "
      + "Empty of people for this plate." },
  { name: "လမ်းမ", en: "The road at night in rain",
    prompt: "An ordinary Yangon side road at night in heavy rain: wet black tarmac throwing back "
      + "streetlight, a kerb, a row of shuttered shopfronts, telephone wires overhead. Rain "
      + "falling hard and visible. ⚠️ THE ROAD IS COMPLETELY EMPTY — bare clean tarmac from kerb "
      + "to kerb, the whole surface unobstructed. Clear night air, ordinary streetlight. Empty "
      + "for this plate." },
  { name: "လမ်းထိပ်", en: "The street outside the house, daytime",
    prompt: "An ordinary Yangon residential lane in flat daylight: low houses behind short "
      + "concrete walls, a few parked motorbikes, a tea shop awning, potted plants, cables "
      + "overhead. Dry weather, bright and unremarkable. Empty of people for this plate." },
];

/**
 * One composition per shot, stated first and alone.
 *
 * The mirror framing is fixed here and reused seven times without variation,
 * because the last of the seven is the only moment in the film where something
 * moves by itself, and it is worth nothing if the frame it happens in is not
 * already familiar.
 */
const CAM = {
  shop: 'IN THE COSMETICS SHOP. Camera at chest height inside the door as in the master plate, the shop running away from camera.',
  counter: 'AT THE SHOP COUNTER. Camera at chest height across the glass counter.',
  shopdoor: 'THE SHOP DOOR. Camera at chest height outside on the pavement, square on to the glass front door.',
  lane: 'THE LANE. Camera at chest height in the residential street.',
  dining: 'IN THE DINING ROOM. Camera at seated height across the round table.',
  bed: 'IN HER BEDROOM. Camera at chest height in the doorway of the bedroom.',
  bath: 'IN THE BATHROOM. Camera at chest height beside the basin.',
  mirror: 'THE MIRROR. Camera at her eye height standing slightly behind and to one side of Thun Nadi, framed so the rectangular bathroom mirror above the basin fills most of the image and her reflection sits square in the middle of it. ⚠️ Reproduce this framing identically every time it recurs.',
  flatdoor: 'THE FLAT DOOR. Camera at chest height in the outside corridor, square on to the apartment door.',
  flat: 'INSIDE THE FLAT. Camera at chest height in the small living space.',
  road: 'THE ROAD. Camera at chest height on the wet tarmac.',
  nadi: 'CLOSE ON THUN NADI. Camera at her eye height, head-and-shoulders crop.',
  mother: 'CLOSE ON THE MOTHER. Camera at her eye height, head-and-shoulders crop.',
  kari: 'CLOSE ON PAN EI KARI. Camera at her eye height, head-and-shoulders crop.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
  screen: 'A SCREEN. Insert square on to a lit screen at close range, the screen filling the frame.',
  wide: 'WIDE. Camera at chest height far enough back to hold the whole room.',
};

export const SCENES = [
  // ── I · NOBODY LOOKS AT ME ────────────────────────────────────────────────
  { t: "People Say I Am Beautiful", l: "လမ်းထိပ်", k: "nadi", w: ["သွန်းနဒီ"],
    g: "လူတွေက ကျွန်မကို အရမ်းလှတယ်လို့ ပြောကြတယ်။",
    p: "Thun Nadi in the residential lane in flat daylight, looking straight into the lens, "
      + "composed and quietly pleased with herself — a young woman entirely used to being looked "
      + "at. Ordinary bright morning behind her.",
    u: ["လူတွေက ကျွန်မကို အရမ်းလှတယ်လို့ ပြောကြတယ်။",
        "ဒါပေမယ့် အခုတလောတော့ ထူးဆန်းတယ်။"] },

  { t: "Nobody Will Look at My Face", c: [[1, "stinger"]], l: "လမ်းထိပ်", k: "wide",
    w: ["သွန်းနဒီ"],
    g: "⚠️ ဘယ်သူမှ ကျွန်မမျက်နှာကို တည့်တည့်မကြည့်ရဲကြတော့ဘူး။",
    p: "Thun Nadi standing still in the middle of the lane in daylight while four or five "
      + "ordinary passers-by move around her — and ⚠️ EVERY ONE OF THEM HAS THEIR HEAD TURNED "
      + "AWAY FROM HER, eyes down or pointed off to one side. Nobody is running and nobody looks "
      + "afraid; they are simply all, quietly, not looking. She is looking straight at them.",
    u: ["ဘယ်သူမှ ကျွန်မမျက်နှာကို တည့်တည့်မကြည့်ရဲကြတော့ဘူး။"] },

  { t: "The Child at the Corner", l: "လမ်းထိပ်", k: "lane", w: ["ကလေး", "သွန်းနဒီ"],
    g: "မနေ့ကဆို လမ်းထိပ်က ကလေးတစ်ယောက် ကျွန်မကို မြင်တာနဲ့ ငိုပြီး ထွက်ပြေးသွားတယ်။",
    p: "A small child at the corner of the lane in daylight caught mid-turn, already running away "
      + "from camera with their face crumpling into a cry, one sandal coming off. Thun Nadi "
      + "stands behind them in the middle distance with her hand still half raised in greeting, "
      + "confused. ⚠️ The child is unhurt and there is nothing frightening in frame.",
    u: ["မနေ့ကဆို လမ်းထိပ်က ကလေးတစ်ယောက် ကျွန်မကို မြင်တာနဲ့ ငိုပြီး ထွက်ပြေးသွားတယ်။"] },

  { t: "The Aunt Said a Prayer", l: "လမ်းထိပ်", k: "lane", w: ["အဒေါ်ကြီး", "သွန်းနဒီ"],
    g: "ဒီမနက် အိမ်ရှေ့က အဒေါ်ကြီးက ကျွန်မနားက ဖြတ်သွားရင်း “အမလေး…” လို့ပြောပြီး ဘုရားစာရွတ်သွားတယ်။",
    p: "The neighbour aunt passing Thun Nadi on the narrow pavement in daylight, her body angled "
      + "away, her chin tucked, her lips parted mid-word and one hand lifted towards her own "
      + "chest. Thun Nadi is turning to follow her with her eyes. ⚠️ The aunt is not looking at "
      + "her and not touching her.",
    u: ["ဒီမနက် အိမ်ရှေ့က အဒေါ်ကြီးက ကျွန်မနားက ဖြတ်သွားရင်း—",
        "“အမလေး…” လို့ပြောပြီး ဘုရားစာရွတ်သွားတယ်။"] },

  { t: "What Is Happening to Me", l: "လမ်းထိပ်", k: "nadi", w: ["သွန်းနဒီ"],
    g: "ကျွန်မ ဘာဖြစ်နေတာလဲ? ကျွန်မမျက်နှာမှာ တစ်ခုခုဖြစ်နေလို့လား?",
    p: "Close on Thun Nadi in the lane, one hand risen to touch her own cheek, her eyes searching "
      + "off frame after the aunt. Not frightened yet — puzzled and a little insulted.",
    u: ["ကျွန်မ ဘာဖြစ်နေတာလဲ။",
        "ကျွန်မမျက်နှာမှာ တစ်ခုခုဖြစ်နေလို့လား။"] },

  { t: "In the Mirror I Am the Same", l: "ရေချိုးခန်း", k: "mirror", w: ["သွန်းနဒီ"],
    rev: "mirror 1 of 7",
    g: "⚠️ မှန် ပထမအကြိမ် — မှန်ထဲမှာ ကြည့်တိုင်း ကျွန်မက အရင်အတိုင်းပဲ လှနေတုန်း။",
    p: "OCCURRENCE 1 OF 7 OF THE MIRROR. Thun Nadi at the basin looking into the rectangular "
      + "mirror, and the reflection is simply her: the same beautiful unmarked face, the long "
      + "black hair, the thin gold chain at her throat. ⚠️ THE REFLECTION MATCHES HER EXACTLY and "
      + "there is nothing wrong with the glass, the light or the image. Establish this framing "
      + "precisely; it returns six more times.",
    u: ["ဒါပေမယ့် မှန်ထဲမှာ ကြည့်တိုင်းတော့—",
        "ကျွန်မက အရင်အတိုင်းပဲ လှနေတုန်း။"] },

  // ── II · THUN NADI ────────────────────────────────────────────────────────
  { t: "My Name Is Thun Nadi", l: "သွန်းနဒီအခန်း", k: "bed", w: ["သွန်းနဒီ"],
    g: "ကျွန်မနာမည် သွန်းနဒီ။ အသက် နှစ်ဆယ့်နှစ်နှစ်။ ရန်ကုန်က အလှကုန်ဆိုင်တစ်ဆိုင်မှာ အလုပ်လုပ်တယ်။",
    p: "Thun Nadi sitting at her dressing table in her bedroom in warm daylight, half turned "
      + "towards camera, a lipstick in one hand — an ordinary young woman in her own pretty, "
      + "cluttered room.",
    u: ["ကျွန်မနာမည် သွန်းနဒီ။ အသက် နှစ်ဆယ့်နှစ်နှစ်။",
        "ကျွန်မက ရန်ကုန်က အလှကုန်ဆိုင်တစ်ဆိုင်မှာ အလုပ်လုပ်တယ်။"] },

  { t: "I Have Been Pretty Since I Was Small", l: "သွန်းနဒီအခန်း", k: "insert",
    g: "ကိုယ့်အကြောင်းကိုယ် ဒီလိုပြောရတာ ရှက်စရာကောင်းပေမယ့် ကျွန်မက ငယ်ငယ်ကတည်းက ရုပ်ချောတယ်။",
    p: "Insert on a small framed school photograph standing on the dressing table: a Burmese girl "
      + "of about ten in a white school uniform, unmistakably the same delicate face, smiling at "
      + "a school photographer. Ordinary, faded, domestic.",
    u: ["ကိုယ့်အကြောင်းကိုယ် ဒီလိုပြောရတာ ရှက်စရာကောင်းပေမယ့်—",
        "ကျွန်မက ငယ်ငယ်ကတည်းက ရုပ်ချောတယ်။",
        "ကျောင်းတက်တုန်းကတောင် တခြားအတန်းကလူတွေ ကျွန်မကို လာကြည့်ကြတယ်။"] },

  { t: "Fair Skin, Round Eyes", l: "သွန်းနဒီအခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "အသားအရေဖြူတယ်။ မျက်လုံးဝိုင်းတယ်။ နှာတံသွယ်တယ်။ ဆံပင်က ခါးကျော်တဲ့အထိ ရှည်တယ်။",
    p: "Close on Thun Nadi at the dressing table in soft daylight, her face turned three-quarters "
      + "to the lens, her very long black hair drawn forward over one shoulder and falling out of "
      + "frame. Skin, eyes and hair all plainly her best feature and plainly known to her.",
    u: ["အသားအရေဖြူတယ်။ မျက်လုံးဝိုင်းတယ်။",
        "နှာတံသွယ်တယ်။ ဆံပင်က ခါးကျော်တဲ့အထိ ရှည်တယ်။"] },

  { t: "A Gift From the Buddha", l: "ထမင်းစားခန်း", k: "dining", w: ["အမေ", "သွန်းနဒီ"],
    g: "အမေက အမြဲပြောတယ် — “သမီးရဲ့မျက်နှာက အမေ့အတွက် ဘုရားပေးတဲ့လက်ဆောင်ပဲ” တဲ့။",
    p: "⚠️ A WARM ORDINARY MEMORY. The mother and Thun Nadi at the round dining table in warm "
      + "evening light, the mother reaching across to tuck a strand of hair behind her daughter's "
      + "ear, both of them laughing. ⚠️ THE MOTHER IS LOOKING DIRECTLY AT HER DAUGHTER'S FACE "
      + "here — the only shot in the film in which she does.",
    u: ["အမေက အမြဲပြောတယ်။",
        "“သမီးရဲ့မျက်နှာက အမေ့အတွက် ဘုရားပေးတဲ့လက်ဆောင်ပဲ” တဲ့။"] },

  { t: "I Liked My Own Face", l: "သွန်းနဒီအခန်း", k: "insert", w: ["သွန်းနဒီ"],
    g: "ကျွန်မကလည်း ကိုယ့်မျက်နှာကို ကိုယ် သဘောကျတယ်။ ဓာတ်ပုံရိုက်ရတာ ကြိုက်တယ်။ အလှပြင်ရတာ ကြိုက်တယ်။",
    p: "Insert on Thun Nadi's hands holding a phone up at arm's length to take a selfie in her "
      + "bedroom, her own face small and smiling on the screen. ⚠️ THE FACE ON THE SCREEN IS HER "
      + "NORMAL BEAUTIFUL FACE — this is a memory from before, and nothing is wrong with it.",
    u: ["ကျွန်မကလည်း ကိုယ့်မျက်နှာကို ကိုယ် သဘောကျတယ်။",
        "ဓာတ်ပုံရိုက်ရတာ ကြိုက်တယ်။ အလှပြင်ရတာ ကြိုက်တယ်။"] },

  { t: "Something Has Been Wrong for a Week", c: [[1, "stinger"]], l: "သွန်းနဒီအခန်း",
    k: "nadi", w: ["သွန်းနဒီ"],
    g: "ဒါပေမယ့် ပြီးခဲ့တဲ့တစ်ပတ်လောက်ကစပြီး တစ်ခုခု မှားနေတယ်။",
    p: "Close on Thun Nadi sitting very still on the edge of her bed in flat daylight, the smile "
      + "gone, looking at nothing. The first shot in which she is genuinely uneasy.",
    u: ["ဒါပေမယ့် ပြီးခဲ့တဲ့တစ်ပတ်လောက်ကစပြီး—",
        "တစ်ခုခု မှားနေတယ်။"] },

  // ── III · THE SHOP ────────────────────────────────────────────────────────
  { t: "The First Thing I Noticed", l: "အလှကုန်ဆိုင်", k: "shopdoor", w: ["သွန်းနဒီ"],
    g: "ပထမဆုံး သတိထားမိတာ အလုပ်မှာ။ မနက်ခင်း ဆိုင်ရောက်တော့ ဆိုင်တံခါး ပိတ်ထားတယ်။ အတွင်းမှာတော့ မီးလင်းနေတယ်။",
    p: "Thun Nadi on the pavement in morning light, square on to the shop's closed glass door "
      + "with her hand flat against it. ⚠️ THE SHOP LIGHTS ARE PLAINLY ON INSIDE and the interior "
      + "is bright behind the glass, but the door is shut. Her reflection sits faintly in the "
      + "glass in front of her.",
    u: ["ပထမဆုံး သတိထားမိတာ အလုပ်မှာ။",
        "မနက်ခင်း ဆိုင်ရောက်တော့ ဆိုင်တံခါး ပိတ်ထားတယ်။",
        "အတွင်းမှာတော့ မီးလင်းနေတယ်။"] },

  { t: "I Knocked", l: "အလှကုန်ဆိုင်", k: "shopdoor", w: ["သွန်းနဒီ"],
    g: "တံခါးခေါက်တယ်။ “မမေသူ!” ဘာသံမှ မကြားဘူး။ ထပ်ခေါက်တယ်။",
    p: "Thun Nadi knocking on the glass door with the side of her fist, leaning to call through "
      + "it, her mouth open on a name. Beyond the glass the bright empty front of the shop. "
      + "Nobody is coming.",
    u: ["တံခါးခေါက်တယ်။ “မမေသူ!”",
        "ဘာသံမှ မကြားဘူး။ ထပ်ခေါက်တယ်။",
        "နောက်ဆုံး တံခါးက ပွင့်သွားတယ်။"] },

  { t: "Ma May Thu Was Behind the Counter", l: "အလှကုန်ဆိုင်", k: "shop",
    w: ["သွန်းနဒီ", "မမေသူ"],
    g: "ကျွန်မ ဝင်လိုက်တယ်။ Counter နောက်မှာ မမေသူ ရှိနေတယ်။",
    p: "From just inside the shop door: the bright shop running away from camera, Thun Nadi in "
      + "the near foreground with her back half to us, and Ma May Thu at the far end behind the "
      + "glass counter with her head bent over a phone. Ordinary working light, an ordinary "
      + "morning.",
    u: ["ကျွန်မ ဝင်လိုက်တယ်။",
        "Counter နောက်မှာ မမေသူ ရှိနေတယ်။"] },

  { t: "She Did Not Look at Me", l: "အလှကုန်ဆိုင်", k: "counter", w: ["မမေသူ"],
    g: "“မမေသူ၊ တံခါးပိတ်ထားတာလား?” သူက ကျွန်မကို မကြည့်ဘူး။ ခေါင်းငုံ့ပြီး ဖုန်းပဲ ကြည့်နေတယ်။",
    p: "Across the glass counter: Ma May Thu with her chin down and her eyes fixed on the phone "
      + "in her hands. ⚠️ SHE IS NOT LOOKING UP and her jaw is set — the stillness of someone "
      + "deliberately not raising their eyes rather than someone absorbed in a screen.",
    u: ["“မမေသူ၊ တံခါးပိတ်ထားတာလား?”",
        "သူက ကျွန်မကို မကြည့်ဘူး။",
        "ခေါင်းငုံ့ပြီး ဖုန်းပဲ ကြည့်နေတယ်။"] },

  { t: "The Phone Slipped Out of Her Hand", c: [[2, "bigstinger"]], l: "အလှကုန်ဆိုင်",
    k: "insert", w: ["မမေသူ"],
    g: "ကျွန်မ သူ့နားကို လျှောက်သွားတယ်။ အဲဒီအချိန် သူ့လက်ထဲကဖုန်း လွတ်ကျသွားတယ်။",
    p: "Insert on Ma May Thu's hands above the glass counter with the fingers opening and the "
      + "phone already falling clear of them, caught an inch below her palm. Her hands are shaking "
      + "hard. ⚠️ Nothing is broken and nothing is spilled.",
    u: ["ကျွန်မ သူ့နားကို လျှောက်သွားတယ်။ “မမေသူ?”",
        "အဲဒီအချိန် သူ့လက်ထဲကဖုန်း လွတ်ကျသွားတယ်။"] },

  { t: "She Turned and Walked Out", l: "အလှကုန်ဆိုင်", k: "shop", w: ["မမေသူ", "သွန်းနဒီ"],
    g: "ပြီးတော့ တစ်ဖက်ကို လှည့်ပြီး ထွက်သွားတယ်။ အရင်ကဆို ကျွန်မနဲ့ အရမ်းခင်တဲ့လူ။",
    p: "Ma May Thu walking away down the length of the bright shop with her shoulders up and her "
      + "face turned to the shelves, passing within arm's reach of Thun Nadi, who has turned to "
      + "watch her go with her hands open at her sides.",
    u: ["ပြီးတော့ တစ်ဖက်ကို လှည့်ပြီး ထွက်သွားတယ်။",
        "ကျွန်မ စိတ်ဆိုးသွားတယ်။ အရင်ကဆို ကျွန်မနဲ့ အရမ်းခင်တဲ့လူ။",
        "အခု ဘာဖြစ်နေတာလဲ။"] },

  { t: "The Customers Were the Same", l: "အလှကုန်ဆိုင်", k: "shop", w: ["သွန်းနဒီ"],
    g: "Customer တွေလည်း အတူတူပဲ။ ကျွန်မနား ရောက်လာရင် တစ်ဖက်ကို လှည့်သွားကြတယ်။",
    p: "Three ordinary young women shopping along the bright shelves, and Thun Nadi standing "
      + "among them — ⚠️ ALL THREE HAVE TURNED THEIR BACKS OR THEIR SHOULDERS TO HER in the same "
      + "instant, each apparently absorbed in a different shelf. Nobody is fleeing. The shop "
      + "looks completely normal apart from the geometry of the bodies.",
    u: ["Customer တွေလည်း အတူတူပဲ။",
        "ကျွန်မနား ရောက်လာရင် တစ်ဖက်ကို လှည့်သွားကြတယ်။",
        "ကျွန်မ စကားပြောရင် မကြားသလိုနေကြတယ်။"] },

  { t: "She Looked at Me for One Second", c: [[2, "bigstinger"]], l: "အလှကုန်ဆိုင်",
    k: "counter",
    g: "တစ်ခါတော့ မိန်းကလေးတစ်ယောက်ကို မေးလိုက်တယ်။ သူက ကျွန်မကို ကြည့်မိသွားတယ်။ တစ်စက္ကန့်လောက်ပဲ။",
    p: "A young woman customer of about twenty caught in the instant of looking up — face lifted, "
      + "eyes wide and fixed straight into the lens, every muscle still. ⚠️ SHE IS LOOKING "
      + "DIRECTLY AT CAMERA, the only person in the film so far who does. Her expression is not "
      + "yet fear; it is the blank half-second before it.",
    u: ["တစ်ခါတော့ မိန်းကလေးတစ်ယောက်ကို “ညီမ ဘာရှာနေတာလဲ?” လို့ မေးလိုက်တယ်။",
        "သူက ကျွန်မကို ကြည့်မိသွားတယ်။ တစ်စက္ကန့်လောက်ပဲ။"] },

  { t: "Then She Ran", l: "အလှကုန်ဆိုင်", k: "shop", w: ["သွန်းနဒီ"],
    g: "ပြီးတော့ မျက်နှာဖြူသွားတယ်။ သူ့သူငယ်ချင်းလက်ကိုဆွဲပြီး ဆိုင်ထဲက ပြေးထွက်သွားတယ်။",
    p: "The same young customer already at the shop door, dragging a friend by the wrist, both of "
      + "them half out into the daylight, a display basket knocked askew behind them. Thun Nadi "
      + "stands alone in the middle of the bright shop watching them go.",
    u: ["ပြီးတော့ မျက်နှာဖြူသွားတယ်။",
        "သူ့သူငယ်ချင်းလက်ကိုဆွဲပြီး ဆိုင်ထဲက ပြေးထွက်သွားတယ်။"] },

  { t: "Nobody Answered", l: "အလှကုန်ဆိုင်", k: "nadi", w: ["သွန်းနဒီ"],
    g: "ကျွန်မ ဒေါသထွက်လာတယ်။ “ဘာဖြစ်နေကြတာလဲ?” ဘယ်သူမှ မဖြေဘူး။",
    p: "Close on Thun Nadi in the bright empty shop, mouth open on a shout, her eyebrows drawn "
      + "down — angry rather than afraid, and completely alone in frame.",
    u: ["ကျွန်မ ဒေါသထွက်လာတယ်။ “ဘာဖြစ်နေကြတာလဲ?”",
        "ဘယ်သူမှ မဖြေဘူး။"] },

  // ── IV · THE HOUSE ────────────────────────────────────────────────────────
  { t: "Mother Was at the Table", l: "ထမင်းစားခန်း", k: "dining", w: ["အမေ", "သွန်းနဒီ"],
    g: "ညနေ အိမ်ပြန်တော့ အမေက ထမင်းစားခန်းထဲမှာ ထိုင်နေတယ်။ “အမေ…” အမေ မော့မကြည့်ဘူး။",
    p: "Across the round dining table in warm evening light: the mother sitting with both hands "
      + "flat on the wood and her head down, and Thun Nadi standing in the doorway behind her. "
      + "⚠️ THE MOTHER HAS NOT LIFTED HER HEAD. There is one plate of food on the table and it "
      + "has not been touched.",
    u: ["ညနေ အိမ်ပြန်တော့ အမေက ထမင်းစားခန်းထဲမှာ ထိုင်နေတယ်။",
        "“အမေ…” အမေ မော့မကြည့်ဘူး။"] },

  { t: "Is Something Wrong With My Face", l: "ထမင်းစားခန်း", k: "dining",
    w: ["သွန်းနဒီ", "အမေ"],
    g: "ကျွန်မ အမေ့ရှေ့မှာ ဝင်ထိုင်လိုက်တယ်။ “အမေ… သမီးမျက်နှာမှာ တစ်ခုခုဖြစ်နေလား?”",
    p: "Thun Nadi seated directly opposite her mother at the round table, leaning forward into "
      + "her mother's eyeline and asking — and the mother's face is angled down and away so that "
      + "their eyes do not meet at any point. Warm ordinary lamp light.",
    u: ["ကျွန်မ အမေ့ရှေ့မှာ ဝင်ထိုင်လိုက်တယ်။",
        "“အမေ… သမီးမျက်နှာမှာ တစ်ခုခုဖြစ်နေလား?”"] },

  { t: "Her Hands Were Shaking", l: "ထမင်းစားခန်း", k: "insert", w: ["အမေ"],
    g: "အမေ့လက်တွေ တုန်သွားတယ်။ ဒါပေမယ့် အမေ မဖြေဘူး။",
    p: "Insert on the mother's hands on the table top, the fingers spread and visibly trembling, "
      + "one thumb pressing hard into the wood to try to stop it. Warm light, ordinary domestic "
      + "surface.",
    u: ["အမေ့လက်တွေ တုန်သွားတယ်။",
        "ဒါပေမယ့် အမေ မဖြေဘူး။"] },

  { t: "She Went Into Her Room", c: [[2, "stinger"]], l: "ထမင်းစားခန်း", k: "wide",
    w: ["အမေ", "သွန်းနဒီ"],
    g: "ကျွန်မ စိတ်မရှည်တော့ဘူး။ “အမေ!” အမေ ရုတ်တရက် ထရပ်လိုက်တယ်။ ပြီးတော့ အခန်းထဲ ဝင်သွားတယ်။",
    p: "Wide on the dining room: the mother already up and going through the doorway into the "
      + "dark corridor with her chair still rocking behind her, and Thun Nadi alone at the table "
      + "with one hand raised after her. The corridor door is closing.",
    u: ["ကျွန်မ စိတ်မရှည်တော့ဘူး။ “အမေ!”",
        "အမေ ရုတ်တရက် ထရပ်လိုက်တယ်။",
        "ပြီးတော့ အခန်းထဲ ဝင်သွားတယ်။ တံခါးပိတ်သွားတယ်။"] },

  { t: "I Was Left Alone", l: "ထမင်းစားခန်း", k: "wide", w: ["သွန်းနဒီ"],
    g: "ကျွန်မ တစ်ယောက်တည်း ကျန်ခဲ့တယ်။ ဘာဖြစ်နေကြတာလဲ?",
    p: "Wide on the empty dining room with Thun Nadi alone at the round table under the single "
      + "warm bulb, small in the frame, the untouched plate in front of her and the closed "
      + "corridor door behind. Ordinary, quiet, domestic.",
    u: ["ကျွန်မ တစ်ယောက်တည်း ကျန်ခဲ့တယ်။",
        "ဘာဖြစ်နေကြတာလဲ။"] },

  // ── V · THE BATHROOM ──────────────────────────────────────────────────────
  { t: "That Night I Looked Properly", l: "ရေချိုးခန်း", k: "mirror", w: ["သွန်းနဒီ"],
    rev: "mirror 2 of 7",
    g: "⚠️ မှန် ဒုတိယအကြိမ် — အဲဒီည မျက်နှာသစ်ရင်း မှန်ကို သေချာကြည့်တယ်။ ဘာမှမဖြစ်ဘူး။",
    p: "OCCURRENCE 2 OF 7 OF THE MIRROR, identical framing. Thun Nadi at the basin at night with "
      + "water still on her face, leaning in close to examine herself in the rectangular mirror. "
      + "⚠️ THE REFLECTION IS PERFECT AND UNMARKED — the same beautiful face, matching her "
      + "exactly. One bare warm bulb.",
    u: ["အဲဒီည ရေချိုးခန်းထဲမှာ မျက်နှာသစ်ရင်း မှန်ကို သေချာကြည့်တယ်။",
        "ဘာမှမဖြစ်ဘူး။ မျက်နှာက အရင်အတိုင်း။"] },

  { t: "Still Soft", l: "ရေချိုးခန်း", k: "insert", w: ["သွန်းနဒီ"],
    g: "ကျွန်မ ပါးကို ကိုင်ကြည့်တယ်။ နူးညံ့နေတုန်းပဲ။ မျက်လုံး။ နှာခေါင်း။ နှုတ်ခမ်း။ ဘာမှ မပြောင်းဘူး။",
    p: "Tight insert on Thun Nadi's own fingertips pressed flat against her cheek, the skin "
      + "smooth and even and entirely unmarked, warm bulb light across it. ⚠️ THE SKIN IS "
      + "PERFECT. Nothing on this face is wrong.",
    u: ["ကျွန်မ ပါးကို ကိုင်ကြည့်တယ်။ နူးညံ့နေတုန်းပဲ။",
        "မျက်လုံး။ နှာခေါင်း။ နှုတ်ခမ်း။ ဘာမှ မပြောင်းဘူး။",
        "ဒါဆို လူတွေက ဘာလို့ ကျွန်မကို ဒီလိုဆက်ဆံနေကြတာလဲ။"] },

  { t: "Mother Was on the Phone Outside", l: "ရေချိုးခန်း", k: "bath", w: ["သွန်းနဒီ"],
    g: "အဲဒီအချိန် ရေချိုးခန်းတံခါးအပြင်က အမေ့အသံ ကြားလိုက်ရတယ်။ အမေ ဖုန်းပြောနေတာ။",
    p: "Thun Nadi frozen beside the basin with her head turned towards the closed bathroom door, "
      + "listening, one hand still wet. The door is plain and shut; a thin line of light under "
      + "it. ⚠️ Nobody is visible beyond it.",
    u: ["အဲဒီအချိန် ရေချိုးခန်းတံခါးအပြင်က အမေ့အသံ ကြားလိုက်ရတယ်။",
        "အမေ ဖုန်းပြောနေတာ။"] },

  { t: "I Can't Do This Anymore", c: [[1, "stinger"]], l: "ရေချိုးခန်း", k: "insert",
    g: "“ကျွန်မ မလုပ်နိုင်တော့ဘူး…” တစ်ဖက်က ဘာပြောလဲ မကြားရဘူး။ အမေက ငိုနေတယ်။",
    p: "Tight insert on the closed bathroom door from the inside, the handle and the thin bar of "
      + "warm light beneath it filling the frame, everything else dark. ⚠️ NOBODY IS IN THIS "
      + "SHOT — an empty door, held.",
    u: ["“ကျွန်မ မလုပ်နိုင်တော့ဘူး…”",
        "တစ်ဖက်က ဘာပြောလဲ မကြားရဘူး။ အမေက ငိုနေတယ်။"] },

  { t: "She Comes Back Every Night", c: [[1, "bigstinger"]], l: "ရေချိုးခန်း", k: "nadi",
    w: ["သွန်းနဒီ"],
    g: "⚠️ “ညတိုင်း ပြန်လာတယ်…” ကျွန်မ တောင့်တင်းသွားတယ်။ ဘယ်သူ ပြန်လာတာလဲ?",
    p: "Close on Thun Nadi in the bathroom, gone completely still, her eyes moving sideways "
      + "towards the door as she works out that the sentence is about a person she does not "
      + "recognise. Warm bulb light. Her face is unmarked and calm.",
    u: ["“ညတိုင်း ပြန်လာတယ်…”",
        "ကျွန်မ တောင့်တင်းသွားတယ်။ ဘယ်သူ ပြန်လာတာလဲ။"] },

  { t: "Sometimes in the Bathroom", l: "ရေချိုးခန်း", k: "bath",
    w: ["သွန်းနဒီ"],
    g: "⚠️ “သူ့အခန်းထဲမှာလည်း ရှိတယ်…” “တစ်ခါတလေ ရေချိုးခန်းထဲမှာ…”",
    p: "Thun Nadi standing alone in the small bathroom, framed so the whole ordinary room is "
      + "visible around her — tiles, basin, bucket, the one warm bulb. She has understood which "
      + "room is being described and is looking slowly around the walls of it. ⚠️ Nothing is in "
      + "the room with her and nothing is wrong with the room.",
    u: ["အမေက ဆက်ပြောတယ်။ “သူ့အခန်းထဲမှာလည်း ရှိတယ်…”",
        "“တစ်ခါတလေ ရေချိုးခန်းထဲမှာ…”",
        "ကျွန်မ ရင်ခုန်မြန်လာတယ်။"] },

  { t: "I Cannot Look at Her Face", c: [[1, "bigstinger"]], l: "ရေချိုးခန်း", k: "mirror",
    w: ["သွန်းနဒီ"], rev: "mirror 3 of 7",
    g: "⚠️ မှန် တတိယအကြိမ် — “ကျွန်မ သူ့မျက်နှာကို မကြည့်ရဲဘူး…” ဒါပေမယ့် မှန်ထဲမှာ လှနေတုန်းပဲ။",
    p: "OCCURRENCE 3 OF 7 OF THE MIRROR, identical framing. Thun Nadi turning straight back to "
      + "the glass, and the reflection is exactly as beautiful and exactly as unmarked as before. "
      + "⚠️ NOTHING HAS CHANGED IN THE MIRROR. The gap between what she is hearing and what she "
      + "is seeing is the whole content of this shot.",
    u: ["“ကျွန်မ သူ့မျက်နှာကို မကြည့်ရဲဘူး…”",
        "ကျွန်မ မှန်ကို ပြန်ကြည့်လိုက်တယ်။ ကျွန်မမျက်နှာ။ အရင်အတိုင်းပဲ။",
        "အမေ ဘယ်သူ့အကြောင်း ပြောနေတာလဲ။"] },

  // ── VI · PAN EI KARI ──────────────────────────────────────────────────────
  { t: "I Went to My Closest Friend", l: "ဧကရီတိုက်ခန်း", k: "flatdoor", w: ["သွန်းနဒီ"],
    g: "နောက်နေ့ ကျွန်မ အချစ်ဆုံးသူငယ်ချင်း ပန်းဧကရီ ဆီ သွားတယ်။ တံခါးကို ခေါက်တယ်။",
    p: "Thun Nadi in a bare apartment corridor in daylight, square on to a plain flat door, "
      + "knocking. Concrete walls, a meter box, a pair of sandals by the threshold. Ordinary and "
      + "unremarkable.",
    u: ["နောက်နေ့ ကျွန်မ အချစ်ဆုံးသူငယ်ချင်း ပန်းဧကရီ ဆီ သွားတယ်။",
        "သူ့တိုက်ခန်းတံခါးကို ခေါက်တယ်။ ခဏကြာတော့ တံခါးပွင့်လာတယ်။"] },

  { t: "She Went Rigid", c: [[1, "stinger"]], l: "ဧကရီတိုက်ခန်း", k: "kari", w: ["ပန်းဧကရီ"],
    g: "ပန်းဧကရီ ကျွန်မကို မြင်တာနဲ့ တောင့်တင်းသွားတယ်။ သူ့မျက်လုံးတွေ ပြူးနေတယ်။",
    p: "Close on Pan Ei Kari in the half-open doorway, caught in the instant of seeing — eyes "
      + "very wide, all the blood gone out of her face, one hand already closing on the edge of "
      + "the door. ⚠️ HER EYES ARE AIMED SLIGHTLY OFF CAMERA, past the lens rather than into it.",
    u: ["ပန်းဧကရီ ကျွန်မကို မြင်တာနဲ့ တောင့်တင်းသွားတယ်။ “ဧကရီ…”",
        "သူ့မျက်လုံးတွေ ပြူးနေတယ်။ “ငါ့ကို ကူညီပါဦး…”"] },

  { t: "I Stopped the Door", l: "ဧကရီတိုက်ခန်း", k: "insert", w: ["သွန်းနဒီ", "ပန်းဧကရီ"],
    g: "သူ တံခါးပိတ်ဖို့လုပ်တယ်။ ကျွန်မ တားလိုက်တယ်။ “ခဏလေး! ငါ ဘာဖြစ်နေတာလဲ?”",
    p: "Insert on the narrowing gap of the doorway: Thun Nadi's hand flat against the door edge "
      + "holding it open, Pan Ei Kari's hand pushing from the other side. ⚠️ HER HAND IS SOLID "
      + "AGAINST THE DOOR AND THE DOOR IS STOPPED — she can still touch things here.",
    u: ["သူ တံခါးပိတ်ဖို့လုပ်တယ်။ ကျွန်မ တားလိုက်တယ်။ “ခဏလေး!”",
        "“ငါ ဘာဖြစ်နေတာလဲ?”"] },

  { t: "At Last Somebody Spoke to Me", l: "ဧကရီတိုက်ခန်း", k: "kari", w: ["ပန်းဧကရီ"],
    g: "ပန်းဧကရီ ငိုလာတယ်။ “သွန်း…” ကျွန်မ ဝမ်းသာသွားတယ်။",
    p: "Close on Pan Ei Kari crying openly in the doorway, her mouth shaping a name, her face "
      + "turned down and to one side. Ordinary corridor daylight.",
    u: ["ပန်းဧကရီ ငိုလာတယ်။ “သွန်း…”",
        "ကျွန်မ ဝမ်းသာသွားတယ်။ နောက်ဆုံးတော့ တစ်ယောက်ယောက် ကျွန်မကို စကားပြောပြီ။"] },

  { t: "You Should Not Be Here", c: [[2, "bigstinger"]], l: "ဧကရီတိုက်ခန်း", k: "flatdoor",
    w: ["ပန်းဧကရီ", "သွန်းနဒီ"],
    g: "⚠️ သူက ကျွန်မမျက်နှာကို မကြည့်ဘဲ “နင် ဒီမှာ မရှိသင့်တော့ဘူး…” လို့ ပြောတယ်။",
    p: "The two of them either side of the open threshold, Thun Nadi facing in and Pan Ei Kari "
      + "facing out — and Pan Ei Kari's head is turned so far aside that she is speaking to the "
      + "wall rather than to her friend. Thun Nadi is watching her face intently.",
    u: ["“ပြောပါ ဧကရီ။ လူတွေ ဘာဖြစ်နေကြတာလဲ?”",
        "သူက ကျွန်မမျက်နှာကို မကြည့်ဘဲ ပြောတယ်။",
        "“နင် ဒီမှာ မရှိသင့်တော့ဘူး…”"] },

  { t: "Go Back Where", l: "ဧကရီတိုက်ခန်း", k: "flatdoor", w: ["သွန်းနဒီ"],
    g: "“ပြန်ပါတော့…” “ဘယ်ကို ပြန်ရမှာလဲ?” ပန်းဧကရီ မဖြေဘူး။ တံခါးပိတ်လိုက်တယ်။",
    p: "Thun Nadi alone in the bare corridor facing a now completely shut flat door, her hand "
      + "still half raised, small in the frame. Flat ordinary daylight. Nothing else in the "
      + "corridor.",
    u: ["“ဘာ?” “ပြန်ပါတော့…” “ဘယ်ကို ပြန်ရမှာလဲ?”",
        "ပန်းဧကရီ မဖြေဘူး။ တံခါးပိတ်လိုက်တယ်။"] },

  // ── VII · TWO IN THE MORNING ──────────────────────────────────────────────
  { t: "Two in the Morning", l: "သွန်းနဒီအခန်း", k: "bed", w: ["သွန်းနဒီ"],
    g: "အဲဒီည အိပ်လို့မရဘူး။ ည ၂ နာရီလောက် အိမ်ရှေ့ကနေ စကားသံတွေ ကြားတယ်။",
    p: "Thun Nadi sitting upright on her bed in the dark bedroom, fully dressed, awake, her head "
      + "turned towards the bedroom door. Only the thin spill of light from under the door and a "
      + "faint streetlight through the curtain.",
    u: ["ကျွန်မ ပိုစိတ်ရှုပ်လာတယ်။ အဲဒီည အိပ်လို့မရဘူး။",
        "ည ၂ နာရီလောက် အိမ်ရှေ့ကနေ စကားသံတွေ ကြားတယ်။",
        "အမေနဲ့ အမျိုးသမီးတစ်ယောက်။"] },

  { t: "You Cannot Pretend Not to See", c: [[2, "stinger"]], l: "သွန်းနဒီအခန်း", k: "insert",
    w: ["သွန်းနဒီ"],
    g: "အမျိုးသမီးက — “မမြင်ချင်ယောင်ဆောင်နေလို့ မရဘူး အစ်မ…” အမေက ငိုရင်း “ကျွန်မ သမီးလေးပါ…”",
    p: "Insert on Thun Nadi's ear and cheek pressed close to the painted bedroom door in the "
      + "dark, listening, the grain of the wood sharp beside her. Her face is calm and unmarked.",
    u: ["ကျွန်မ တံခါးနားကပ်ပြီး နားထောင်လိုက်တယ်။",
        "အမျိုးသမီးက “မမြင်ချင်ယောင်ဆောင်နေလို့ မရဘူး အစ်မ…”",
        "အမေက ငိုရင်း “ကျွန်မ သမီးလေးပါ…”"] },

  { t: "She Will Suffer More", l: "ထမင်းစားခန်း", k: "dining", w: ["အမေ", "ဆရာမကြီး"],
    g: "“သိပါတယ်။ ဒါပေမယ့် သူ ဒီလိုဆက်နေရင် သူကိုယ်တိုင်လည်း ပိုဒုက္ခရောက်မယ်။” “သူ့ကို ဘယ်လိုပြောရမှာလဲ?”",
    p: "The mother and the older woman sitting close together at the round dining table late at "
      + "night under the single bulb, two cups between them, the older woman's hand over the "
      + "mother's. Quiet, practical, sad. ⚠️ No ritual objects, no candles, no offerings — two "
      + "women talking at a kitchen table.",
    u: ["“သိပါတယ်။ ဒါပေမယ့် သူ ဒီလိုဆက်နေရင် သူကိုယ်တိုင်လည်း ပိုဒုက္ခရောက်မယ်။”",
        "“သူ့ကို ဘယ်လိုပြောရမှာလဲ?”"] },

  { t: "Both of Them Went Quiet", l: "ထမင်းစားခန်း", k: "wide",
    w: ["သွန်းနဒီ", "အမေ", "ဆရာမကြီး"],
    g: "ကျွန်မ တံခါးဖွင့်ပြီး ထွက်လိုက်တယ်။ “ကျွန်မကို ဘာပြောရမှာလဲ?” နှစ်ယောက်စလုံး တိတ်သွားတယ်။",
    p: "Wide on the dining room at night: Thun Nadi standing in the corridor doorway having just "
      + "pushed it open, and both women at the table stopped mid-sentence and turned to stone. "
      + "⚠️ NEITHER OF THEM IS LOOKING AT HER — the mother's eyes are on the table, the older "
      + "woman's are shut.",
    u: ["ကျွန်မ စိတ်တိုသွားတယ်။ တံခါးဖွင့်ပြီး ထွက်လိုက်တယ်။",
        "“ကျွန်မကို ဘာပြောရမှာလဲ?”",
        "နှစ်ယောက်စလုံး တိတ်သွားတယ်။"] },

  { t: "She Shut Her Eyes and Prayed", l: "ထမင်းစားခန်း", k: "insert", w: ["ဆရာမကြီး"],
    g: "ကျွန်မကို မြင်တာနဲ့ မျက်လုံးမှိတ်လိုက်တယ်။ ပြီးတော့ တိုးတိုးလေး ဘုရားစာရွတ်တယ်။",
    p: "Tight insert on the older woman's face at the table, eyes closed, lips moving on a quiet "
      + "recitation, the brown prayer beads turning between her fingers at the bottom of frame. "
      + "Calm, unafraid, practised.",
    u: ["အမေနဲ့အတူ ထိုင်နေတဲ့အမျိုးသမီးက အသက်ငါးဆယ်ကျော်လောက်။",
        "ကျွန်မကို မြင်တာနဲ့ မျက်လုံးမှိတ်လိုက်တယ်။",
        "ပြီးတော့ တိုးတိုးလေး ဘုရားစာရွတ်တယ်။"] },

  { t: "Look at Me", c: [[1, "stinger"]], l: "ထမင်းစားခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "“ကျွန်မကို ကြည့်ပါ!” သူ မကြည့်ဘူး။",
    p: "Close on Thun Nadi at the table at night, shouting, leaning down into the older woman's "
      + "space, furious and completely unheard. Warm bulb light across her unmarked face.",
    u: ["“ကျွန်မကို ကြည့်ပါ!”",
        "သူ မကြည့်ဘူး။"] },

  { t: "The Glass Fell", c: [[2, "bigstinger"]], l: "ထမင်းစားခန်း", k: "insert",
    g: "⚠️ ကျွန်မ ဒေါသနဲ့ စားပွဲကို ရိုက်လိုက်တယ်။ စားပွဲပေါ်က ဖန်ခွက် ရုတ်တရက် လဲကျသွားတယ်။",
    p: "Insert on the table top: a plain drinking glass caught in the act of toppling, water "
      + "leaving its rim in a curve, the wood beneath it. ⚠️ THE GLASS IS WHOLE AND UNBROKEN and "
      + "nobody's hand is in the frame at all.",
    u: ["ကျွန်မ ဒေါသနဲ့ စားပွဲကို ရိုက်လိုက်တယ်။ “ဘာဖြစ်နေတာလဲ ပြောကြပါ!”",
        "စားပွဲပေါ်က ဖန်ခွက် ရုတ်တရက် လဲကျသွားတယ်။",
        "အမေ အော်လိုက်တယ်။ အမျိုးသမီးလည်း ထရပ်သွားတယ်။"] },

  { t: "My Hand Went Through It", c: [[2, "bigstinger"]], l: "ထမင်းစားခန်း", k: "insert",
    w: ["သွန်းနဒီ"],
    g: "⚠️ ဖန်ခွက်ကို ကျွန်မလက်နဲ့ မထိခဲ့ဘူး။ လက်က ဖန်ခွက်ကို ဖြတ်သွားတာ။",
    p: "A CLEAN DOUBLE EXPOSURE, small and quiet. Insert on the fallen drinking glass lying on the "
      + "wooden table with Thun Nadi's hand closed in the same place. The glass is sharp, solid "
      + "and fully opaque. Her hand is solid at the wrist and fades to about half opacity where "
      + "it overlaps the glass, so the glass reads clearly on top of it. Warm bulb light, "
      + "ordinary table, nothing else in frame.",
    u: ["ကျွန်မကတော့ တစ်ခုခု သတိထားမိသွားတယ်။",
        "ဖန်ခွက်ကို ကျွန်မလက်နဲ့ မထိခဲ့ဘူး။",
        "လက်က ဖန်ခွက်ကို ဖြတ်သွားတာ။"] },

  { t: "This Time I Could Hold It", l: "ထမင်းစားခန်း", k: "wide",
    w: ["သွန်းနဒီ", "အမေ", "ဆရာမကြီး"],
    g: "စားပွဲကို ကိုင်ကြည့်တယ်။ ဒီတစ်ခါတော့ ကိုင်လို့ရတယ်။ “တွေ့လား! သမီး ဒီမှာရှိတယ်!”",
    p: "Wide on the dining room: Thun Nadi gripping the edge of the round table with both hands "
      + "and shaking it, turning to show her mother — the table visibly moving, the fallen glass "
      + "rolling. ⚠️ THE TABLE IS SOLID UNDER HER HANDS. Both women are on their feet with their "
      + "faces averted.",
    u: ["ကျွန်မ နောက်ဆုတ်လိုက်တယ်။ “မဖြစ်နိုင်ဘူး…”",
        "စားပွဲကို ကိုင်ကြည့်တယ်။ ဒီတစ်ခါတော့ ကိုင်လို့ရတယ်။",
        "“တွေ့လား! သမီး ဒီမှာရှိတယ်!”"] },

  { t: "She Does Not Know Yet", l: "ထမင်းစားခန်း", k: "insert",
    w: ["ဆရာမကြီး", "အမေ"],
    g: "⚠️ အမျိုးသမီးက အမေ့ကို တိုးတိုးလေး ပြောတယ် — “သူ မသိသေးဘူး…” ဘာကို မသိတာလဲ?",
    p: "Insert on the older woman leaning close to the mother's ear to say something very "
      + "quietly, one hand cupped, the mother's crumpling face beside her. Neither of them is "
      + "looking towards the rest of the room.",
    u: ["ဒါပေမယ့် အမေက ပိုငိုလာတယ်။",
        "အမျိုးသမီးက အမေ့ကို တိုးတိုးလေး ပြောတယ်။ “သူ မသိသေးဘူး…”",
        "ဘာကို မသိတာလဲ။"] },

  // ── VIII · THE THINGS THAT DO NOT WORK ────────────────────────────────────
  { t: "My Phone Would Not Turn On", l: "သွန်းနဒီအခန်း", k: "screen", w: ["သွန်းနဒီ"],
    g: "အဲဒီညကစပြီး ကျွန်မ စုံစမ်းတော့တယ်။ ကျွန်မဖုန်းကို ဖွင့်လို့မရဘူး။ Screen က အမြဲအမည်းပဲ။",
    p: "Insert square on to a phone held in Thun Nadi's two hands, her thumb pressing the side "
      + "button. ⚠️ THE SCREEN IS AN UNLIT BLACK SLAB OF GLASS — a dark inert rectangle showing "
      + "only a dim reflection of the ceiling. Ordinary bedroom light on the back of her hands.",
    u: ["အဲဒီညကစပြီး ကျွန်မ စုံစမ်းတော့တယ်။ ထူးဆန်းတာတွေ အများကြီး တွေ့လာတယ်။",
        "ကျွန်မဖုန်းကို ဖွင့်လို့မရဘူး။ Screen က အမြဲအမည်းပဲ။"] },

  { t: "Sometimes My Hand Passed Through", l: "သွန်းနဒီအခန်း", k: "insert", w: ["သွန်းနဒီ"],
    g: "TV ကြည့်ချင်ရင် Remote ကို တစ်ခါတလေ ကိုင်လို့ရတယ်။ တစ်ခါတလေ လက်က ဖြတ်သွားတယ်။",
    p: "THE SAME DOUBLE EXPOSURE AS THE GLASS. Insert on a television remote on a low table with "
      + "Thun Nadi's hand closed in the same place. The remote is sharp and fully opaque; her "
      + "hand is solid at the wrist and about half opacity where it overlaps, so the remote reads "
      + "clearly on top of it. Ordinary daylight.",
    u: ["TV ကြည့်ချင်ရင် Remote ကို တစ်ခါတလေ ကိုင်လို့ရတယ်။",
        "တစ်ခါတလေ လက်က ဖြတ်သွားတယ်။"] },

  { t: "I Could Not Remember Eating", l: "ထမင်းစားခန်း", k: "insert",
    g: "အစားစားတာလည်း နောက်ဆုံး ဘယ်နေ့က စားခဲ့လဲ မမှတ်မိဘူး။ အိပ်တာလည်း ဘယ်အချိန် အိပ်ပျော်သွားမှန်း မသိဘူး။",
    p: "Insert on a single clean unused plate, a spoon and an upturned glass set out on the round "
      + "dining table, ordinary daylight across them. ⚠️ NO FOOD AND NOBODY IN FRAME — a place "
      + "laid and never sat at.",
    u: ["အစားစားတာလည်း နောက်ဆုံး ဘယ်နေ့က စားခဲ့လဲ မမှတ်မိဘူး။",
        "အိပ်တာလည်း ဘယ်အချိန် အိပ်ပျော်သွားမှန်း မသိဘူး။"] },

  { t: "I Never Remembered the Journey", c: [[2, "stinger"]], l: "အလှကုန်ဆိုင်", k: "shopdoor",
    w: ["သွန်းနဒီ"],
    g: "⚠️ “ဆိုင်သွားမယ်” လို့ တွေးလိုက်တာနဲ့ ဆိုင်ရှေ့ ရောက်နေတတ်တယ်။",
    p: "Thun Nadi standing on the pavement directly in front of the shop's glass door in flat "
      + "daylight, arms at her sides, looking down at her own feet as if she has just found "
      + "herself there. ⚠️ THE STREET AROUND HER IS COMPLETELY EMPTY — no traffic, no "
      + "pedestrians, nothing moving.",
    u: ["ပိုထူးဆန်းတာက အိမ်ကနေ အလုပ်သွားတဲ့လမ်းကို ဘယ်လိုသွားခဲ့လဲ မမှတ်မိဘူး။",
        "စိတ်ထဲမှာ “ဆိုင်သွားမယ်” လို့ တွေးလိုက်တာနဲ့—",
        "ဆိုင်ရှေ့ ရောက်နေတတ်တယ်။"] },

  { t: "One Thing I Did Remember", l: "လမ်းမ", k: "road", w: ["သွန်းနဒီ"],
    g: "တစ်ခုတော့ မှတ်မိတယ်။ ပြီးခဲ့တဲ့အပတ်က အလုပ်ပြီးလို့ အိမ်ပြန်လာတယ်။ မိုးအရမ်းရွာနေတယ်။",
    p: "Thun Nadi walking away from camera along the empty wet road at night in hard rain, seen "
      + "from behind, a bag over one shoulder, streetlight on the tarmac. ⚠️ AN ORDINARY WALK "
      + "HOME — nothing is following her and nothing is wrong.",
    u: ["တစ်ခုတော့ မှတ်မိတယ်။",
        "ပြီးခဲ့တဲ့အပတ်က ကျွန်မ အလုပ်ပြီးလို့ အိမ်ပြန်လာတယ်။",
        "မိုးအရမ်းရွာနေတယ်။"] },

  { t: "Headlights, a Horn, Then Dark", c: [[3, "stinger"]], l: "လမ်းမ", k: "road",
    g: "⚠️ ကားမီးအလင်းတစ်ခု။ Horn သံတစ်ချက်။ ပြီးတော့ အမှောင်။ ဒါပဲ။",
    p: "⚠️ NOTHING HAPPENS IN THIS FRAME. Two oncoming headlights far down the empty wet road at "
      + "night, small and flared in the rain, the tarmac between them and camera completely bare. "
      + "No person, no vehicle body, no impact, nothing on the road.",
    u: ["အဲဒီနောက် ဘာဖြစ်ခဲ့လဲ? ကျွန်မ မမှတ်မိဘူး။",
        "ကြိုးစားစဉ်းစားတိုင်း ကားမီးအလင်းတစ်ခု။ Horn သံတစ်ချက်။",
        "ပြီးတော့ အမှောင်။ ဒါပဲ။"] },

  // ── IX · SEVEN DAYS ───────────────────────────────────────────────────────
  { t: "This Time I Did Not Knock", c: [[2, "bigstinger"]], l: "ဧကရီတိုက်ခန်း",
    k: "flatdoor", w: ["သွန်းနဒီ"],
    g: "⚠️ ဒီတစ်ခါ တံခါးမခေါက်တော့ဘူး။ တံခါးကို ဖြတ်ပြီး အထဲဝင်လို့ရသွားတယ်။",
    p: "THE SAME DOUBLE EXPOSURE, NOW AT BODY SCALE. Thun Nadi standing square to a closed "
      + "painted flat door in the corridor, her near arm and shoulder overlapping it. The door is "
      + "sharp, whole and fully opaque; her arm and shoulder fade to about half opacity where "
      + "they overlap it, so the door reads clearly on top of them. The rest of her is solid. Her "
      + "face is turned down to her own arm in plain astonishment. Flat corridor daylight.",
    u: ["နောက်နေ့မှာ ကျွန်မ ပန်းဧကရီဆီ ပြန်သွားတယ်။ ဒီတစ်ခါ တံခါးမခေါက်တော့ဘူး။",
        "ထူးဆန်းစွာပဲ တံခါးကို ဖြတ်ပြီး အထဲဝင်လို့ရသွားတယ်။",
        "ကျွန်မကိုယ်တိုင်တောင် လန့်သွားတယ်။"] },

  { t: "She Was Crying at Her Laptop", l: "ဧကရီတိုက်ခန်း", k: "flat", w: ["ပန်းဧကရီ"],
    g: "ပန်းဧကရီက အခန်းထဲမှာ ထိုင်ပြီး ငိုနေတယ်။ သူ့ရှေ့မှာ Laptop တစ်လုံး။",
    p: "Pan Ei Kari sitting on the floor of her small flat with her back against the couch, "
      + "crying quietly, an open laptop on the low table in front of her throwing pale light up "
      + "onto her face. Late afternoon, curtains drawn.",
    u: ["ပန်းဧကရီက အခန်းထဲမှာ ထိုင်ပြီး ငိုနေတယ်။",
        "သူ့ရှေ့မှာ Laptop တစ်လုံး။ Screen ပေါ်မှာ ကျွန်မဓာတ်ပုံ။"] },

  { t: "My Favourite Photograph", l: "ဧကရီတိုက်ခန်း", k: "screen",
    g: "အဲဒါ ကျွန်မအကြိုက်ဆုံးဓာတ်ပုံ။ အဖြူရောင်ဝတ်စုံနဲ့။ ဆံပင်ရှည်ရှည်။ ပြုံးနေတဲ့ပုံ။",
    p: "Insert square on to the laptop screen: a portrait photograph of Thun Nadi in a white "
      + "dress, her long hair down, smiling straight at the camera — ⚠️ HER NORMAL BEAUTIFUL "
      + "UNMARKED FACE, warmly lit, clearly a photograph she loved. The screen fills the frame.",
    u: ["ကျွန်မ အနားကပ်ကြည့်လိုက်တယ်။",
        "အဲဒါ ကျွန်မအကြိုက်ဆုံးဓာတ်ပုံ။ အဖြူရောင်ဝတ်စုံနဲ့။",
        "ဆံပင်ရှည်ရှည်။ ပြုံးနေတဲ့ပုံ။"] },

  { t: "Sixteen September", c: [[2, "bigstinger"]], l: "ဧကရီတိုက်ခန်း", k: "screen",
    g: "⚠️ ပုံရဲ့ဘေးမှာ စာတစ်ကြောင်း — “သွန်းနဒီ (အသက် ၂၂) — ကွယ်လွန်ခြင်း ၁၆ စက်တင်ဘာ”",
    p: "⚠️ TEXT PERMITTED, AND IT IS THE POINT. The same laptop screen, now framed so the "
      + "photograph sits to one side and a single line of Burmese text beside it fills the rest "
      + "of the frame, reading exactly \"သွန်းနဒီ (အသက် ၂၂) — ကွယ်လွန်ခြင်း ၁၆ စက်တင်ဘာ\". That "
      + "sentence is the only text in the image. Plain white background behind the text.",
    u: ["ပုံရဲ့ဘေးမှာ စာတစ်ကြောင်း။ ကျွန်မ ဖတ်လိုက်တယ်။",
        "“သွန်းနဒီ၊ အသက် နှစ်ဆယ့်နှစ်နှစ်။ ကွယ်လွန်ခြင်း၊ စက်တင်ဘာ ဆယ့်ခြောက်ရက်။”"] },

  { t: "I Laughed", l: "ဧကရီတိုက်ခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "ကျွန်မ ရယ်မိတယ်။ “ဒါဘာလဲ?” ပန်းဧကရီ မကြားဘူး။",
    p: "Close on Thun Nadi crouched beside the laptop, caught actually laughing — eyebrows up, "
      + "mouth open, genuinely amused. ⚠️ SHE IS NOT FRIGHTENED IN THIS SHOT. Pale screen light "
      + "on one side of her unmarked face.",
    u: ["ကျွန်မ ရယ်မိတယ်။ “ဒါဘာလဲ?”",
        "ပန်းဧကရီ မကြားဘူး။ “ဧကရီ… ဒါ ဘာတွေလုပ်ထားတာလဲ?”"] },

  { t: "Exactly Seven Days", c: [[2, "bigstinger"]], l: "ဧကရီတိုက်ခန်း", k: "screen",
    g: "⚠️ ဒီနေ့ — စက်တင်ဘာ ၂၃ ရက်။ တိတိကျကျ ခုနစ်ရက်။",
    p: "⚠️ TEXT PERMITTED. Insert on the corner of the laptop screen at close range showing the "
      + "system clock and date, reading exactly \"၂၃ စက်တင်ဘာ\" and nothing else legible. The "
      + "rest of the screen is soft and out of focus behind it.",
    u: ["ကျွန်မ Screen ကို လက်ညှိုးထိုးတယ်။ ပြီးတော့ ရက်စွဲကို ကြည့်လိုက်တယ်။",
        "ဒီနေ့ — စက်တင်ဘာ နှစ်ဆယ့်သုံးရက်။",
        "တိတိကျကျ ခုနစ်ရက်။"] },

  { t: "Something Broke Open in My Head", c: [[1, "stinger"]], l: "လမ်းမ", k: "insert",
    g: "⚠️ ကားမီး။ Horn သံ။ မိုးရေ။ လမ်းပေါ် လွင့်ကျသွားတဲ့ ကျွန်မဖုန်း။",
    p: "⚠️ THE MEMORY, AND IT IS ONLY AN OBJECT. Insert low on the wet night tarmac in hard rain: "
      + "a single phone lying face down in a film of running water, its case scuffed, headlight "
      + "glare smeared across the wet road beyond it. ⚠️ NOTHING ELSE IS ON THE ROAD — no person, "
      + "no bag, no marks, nobody in frame.",
    u: ["ကျွန်မ ခေါင်းထဲမှာ တစ်ခုခု ပေါက်ကွဲသွားသလို ခံစားလိုက်ရတယ်။",
        "ကားမီး။ Horn သံ။ မိုးရေ။",
        "လမ်းပေါ် လွင့်ကျသွားတဲ့ ကျွန်မဖုန်း။"] },

  { t: "Something Warm on My Face", l: "လမ်းမ", k: "road",
    g: "⚠️ ကျွန်မကို တစ်စီးပြီးတစ်စီး ကျော်သွားတဲ့ကားတွေ။ ပြီးတော့ မျက်နှာပေါ်ကို ပူလောင်တဲ့အရာတစ်ခု စီးကျလာတာ။",
    p: "⚠️ STILL NOTHING IS SHOWN. Looking straight up from road level at the black rainy night "
      + "sky, rain falling directly into the lens, the blurred underside of a streetlight at the "
      + "top of frame and the wash of two headlights passing across from one side. ⚠️ NO PERSON, "
      + "NO VEHICLE BODY, NO GROUND DETAIL — only rain, light and sky.",
    u: ["ကျွန်မကို တစ်စီးပြီးတစ်စီး ကျော်သွားတဲ့ကားတွေ။",
        "ပြီးတော့ မျက်နှာပေါ်ကို ပူလောင်တဲ့အရာတစ်ခု စီးကျလာတာ။"] },

  // ── X · THE PHOTOGRAPH ────────────────────────────────────────────────────
  { t: "I Ran Home", l: "သွန်းနဒီအခန်း", k: "bed", w: ["အမေ", "သွန်းနဒီ"],
    g: "ကျွန်မ အိမ်ကို ပြန်ပြေးတယ်။ ရောက်တော့ အမေ ကျွန်မအခန်းထဲမှာ ထိုင်နေတယ်။",
    p: "From the bedroom doorway: the mother sitting on the edge of Thun Nadi's bed in the late "
      + "afternoon with a single photograph held face down in both hands, and Thun Nadi arriving "
      + "in the doorway behind her. The pretty tidy bedroom around them.",
    u: ["ကျွန်မ အိမ်ကို ပြန်ပြေးတယ်။ ဘယ်လိုပြန်ရောက်လာလဲ မသိဘူး။",
        "ရောက်တော့ အမေ ကျွန်မအခန်းထဲမှာ ထိုင်နေတယ်။",
        "လက်ထဲမှာ ဓာတ်ပုံတစ်ပုံကို ကိုင်ထားတယ်။"] },

  { t: "I Know You Are Here", c: [[2, "bigstinger"]], l: "သွန်းနဒီအခန်း", k: "mother",
    w: ["အမေ"],
    g: "⚠️ ဒီတစ်ခါ အမေက ကျွန်မရှိတဲ့ဘက်ကို ကြည့်တယ်။ တည့်တည့်တော့ မကြည့်ဘူး။ “သမီး ဒီမှာရှိတာ အမေသိတယ်…”",
    p: "Close on the mother on the bed, her face lifted and turned towards camera for the first "
      + "time in the film — ⚠️ BUT HER EYES ARE AIMED JUST BESIDE THE LENS, at a point past its "
      + "edge, never into it. Speaking, wet-eyed, steady. Warm late daylight.",
    u: ["ကျွန်မ အနားကပ်သွားတယ်။ “အမေ…”",
        "ဒီတစ်ခါ အမေက ကျွန်မရှိတဲ့ဘက်ကို ကြည့်တယ်။ တည့်တည့်တော့ မကြည့်ဘူး။",
        "“သမီး ဒီမှာရှိတာ အမေသိတယ်…”"] },

  { t: "You Do Not Know Yet", l: "သွန်းနဒီအခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "“သမီးက ကိုယ့်ကိုယ်ကို မသိသေးဘူး…” “ဘာကိုလဲ?” “အမေ့ကို ကြည့်ပါ…” အမေ ခေါင်းခါတယ်။",
    p: "Close on Thun Nadi standing over the bed, stopped completely still, the laugh gone. She "
      + "is beginning to be frightened for the first time and trying not to be. Warm daylight "
      + "across her unmarked face.",
    u: ["ကျွန်မ အသက်ရှူရပ်သွားတယ်။ အမေ ငိုလာတယ်။",
        "“သမီးက ကိုယ့်ကိုယ်ကို မသိသေးဘူး…” “ဘာကိုလဲ?”",
        "“အမေ့ကို ကြည့်ပါ…” အမေ ခေါင်းခါတယ်။ “အမေ မကြည့်ရဲဘူး…”"] },

  { t: "She Put the Photograph Down", c: [[2, "stinger"]], l: "သွန်းနဒီအခန်း", k: "insert",
    w: ["အမေ"],
    g: "⚠️ လက်ထဲကဓာတ်ပုံကို အိပ်ရာပေါ် ချလိုက်တယ်။",
    p: "⚠️ THE PHOTOGRAPH IS NEVER SEEN. Insert from directly above the floral bed cover: the "
      + "mother's hands laying a small photographic print down on it and letting go — and the "
      + "print is lying FACE DOWN, plain white paper back uppermost, one corner slightly bent. "
      + "Her hands are withdrawing out of frame.",
    u: ["“ဘာလို့လဲ?!” ကျွန်မ အော်လိုက်တယ်။ “သမီးမျက်နှာ ဘာဖြစ်နေလို့လဲ?!”",
        "အမေ ပိုငိုလာတယ်။",
        "ပြီးတော့ လက်ထဲကဓာတ်ပုံကို အိပ်ရာပေါ် ချလိုက်တယ်။"] },

  { t: "I Looked at It", c: [[2, "bigstinger"]], l: "သွန်းနဒီအခန်း", k: "nadi",
    w: ["သွန်းနဒီ"],
    g: "⚠️ ကျွန်မ ကြည့်လိုက်တယ်။ ကျွန်မ တောင့်တင်းသွားတယ်။",
    p: "⚠️ WE SEE HER, NOT THE PICTURE. Close on Thun Nadi looking down at something just below "
      + "the bottom edge of frame, her whole face emptying — lips parting, eyes widening, every "
      + "muscle letting go at once. ⚠️ THE PHOTOGRAPH IS NOT IN THIS SHOT AT ALL. Her own face "
      + "remains perfect and unmarked.",
    u: ["ကျွန်မ ကြည့်လိုက်တယ်။",
        "ဓာတ်ပုံထဲမှာ ဆေးရုံကုတင်တစ်လုံး။",
        "အဖြူရောင်အဝတ်နဲ့ ဖုံးထားတဲ့ အလောင်း။"] },

  { t: "The Necklace Was Mine", c: [[2, "bigstinger"]], l: "သွန်းနဒီအခန်း", k: "insert",
    w: ["သွန်းနဒီ"],
    g: "⚠️ အဲဒီအလောင်းရဲ့လည်ပင်းမှာ ကျွန်မ အမြဲဝတ်နေကျ ဆွဲကြိုး ရှိနေတယ်။",
    p: "⚠️ THE PROOF IS A NECKLACE, NOT A FACE. Tight insert on Thun Nadi's own throat and "
      + "collarbone, her fingertips closing around the thin gold chain and its small pendant, "
      + "her skin smooth and unmarked. Warm daylight. Nothing else in frame.",
    u: ["မျက်နှာတစ်ခြမ်း ပျက်စီးနေတယ်။ လှပတဲ့မျက်နှာဆိုတာ လုံးဝ မရှိတော့ဘူး။",
        "ဒါပေမယ့် အဲဒီအလောင်းရဲ့လည်ပင်းမှာ—",
        "ကျွန်မ အမြဲဝတ်နေကျ ဆွဲကြိုး ရှိနေတယ်။"] },

  { t: "A Car Hit You That Rainy Night", l: "သွန်းနဒီအခန်း", k: "mother", w: ["အမေ"],
    g: "အမေ ငိုရင်း ပြောတယ် — “မိုးရွာတဲ့ညက… ကားတစ်စီးက သမီးကို တိုက်သွားတယ်…”",
    p: "Close on the mother on the bed saying it, her face wet, her eyes still angled just past "
      + "the lens. Warm late daylight. She is exhausted rather than terrified — a woman finally "
      + "saying out loud a thing she has carried for seven days.",
    u: ["ကျွန်မ လည်ပင်းကို လက်နဲ့စမ်းလိုက်တယ်။ အတူတူပဲ။",
        "ကျွန်မ နောက်ဆုတ်သွားတယ်။ “မဟုတ်ဘူး…”",
        "အမေ ငိုရင်း ပြောတယ်။ “မိုးရွာတဲ့ညက ကားတစ်စီးက သမီးကို တိုက်သွားတယ်…”"] },

  { t: "The Memory Came Back", c: [[3, "stinger"]], l: "လမ်းမ", k: "road",
    g: "⚠️ မှတ်ဉာဏ်တွေ ပြန်ဝင်လာတယ်။ ကျွန်မ လမ်းကူးနေတယ်။ ကားတစ်စီး အရှိန်နဲ့ ဝင်လာတယ်။",
    p: "⚠️ THE MOMENT BEFORE, AND NOTHING AFTER IT. Thun Nadi standing in the middle of the wet "
      + "night road in hard rain, seen from behind in silhouette, turned towards two oncoming "
      + "headlights that flare across the whole frame. ⚠️ SHE IS WHOLE AND STANDING. No impact, "
      + "no vehicle body, nobody on the ground, nothing on the road.",
    u: ["မှတ်ဉာဏ်တွေ ပြန်ဝင်လာတယ်။ ကျွန်မ လမ်းကူးနေတယ်။",
        "ကားတစ်စီး အရှိန်နဲ့ ဝင်လာတယ်။ ကျွန်မကို တိုက်တယ်။",
        "နောက်ကလာတဲ့ကားက Brake မမီဘူး။"] },

  { t: "What I Saw Last", c: [[2, "stinger"]], l: "လမ်းမ", k: "insert",
    g: "⚠️ ကျွန်မ သတိမပျောက်ခင် နောက်ဆုံးမြင်လိုက်တာက မိုးရေကြားက သွေးတွေ။ ပြီးတော့ ဘာမှမရှိတော့ဘူး။",
    p: "⚠️ ABSTRACT, AND AT THE SMALLEST POSSIBLE SCALE. Extreme insert on rainwater running "
      + "along a kerb channel at night, a faint thread of dark colour threading through the "
      + "moving water and dispersing, streetlight broken up on the surface. ⚠️ THE FRAME HOLDS "
      + "ONLY MOVING WATER, KERBSTONE AND WET TARMAC — an empty road surface and nothing else "
      + "whatsoever in shot.",
    u: ["ကျွန်မကို ထပ်တိုက်တယ်။",
        "ကျွန်မ သတိမပျောက်ခင် နောက်ဆုံးမြင်လိုက်တာက မိုးရေကြားက သွေးတွေ။",
        "ပြီးတော့ ဘာမှမရှိတော့ဘူး။"] },

  // ── XI · THE PHONE CAMERA ─────────────────────────────────────────────────
  { t: "I Ran to the Mirror", l: "ရေချိုးခန်း", k: "mirror", w: ["သွန်းနဒီ"],
    rev: "mirror 4 of 7",
    g: "⚠️ မှန် စတုတ္ထအကြိမ် — ဒါပေမယ့် ကျွန်မမြင်နေရတာက အရင်အတိုင်း လှပတဲ့ သွန်းနဒီ။",
    p: "OCCURRENCE 4 OF 7 OF THE MIRROR, identical framing. Thun Nadi arriving hard at the basin, "
      + "gripping its edge, staring into the rectangular mirror — and ⚠️ THE REFLECTION IS STILL "
      + "THE SAME BEAUTIFUL UNMARKED FACE, calm and perfect, contradicting everything she has "
      + "just been told.",
    u: ["ကျွန်မ တုန်တုန်ယင်ယင်နဲ့ ရေချိုးခန်းထဲ ပြေးဝင်တယ်။ မှန်ရှေ့မှာ ရပ်လိုက်တယ်။",
        "ဒါပေမယ့် ကျွန်မမြင်နေရတာက အရင်အတိုင်း လှပတဲ့ သွန်းနဒီ။",
        "“မဟုတ်ဘူး… ငါ ဒီမှာရှိတယ်…”"] },

  { t: "Mother Came With Her Phone", c: [[1, "stinger"]], l: "ရေချိုးခန်း", k: "bath",
    w: ["အမေ", "သွန်းနဒီ"],
    g: "အမေ ရေချိုးခန်းတံခါးနား ရောက်လာတယ်။ အမေ့လက်ထဲမှာ ဖုန်းရှိတယ်။ Camera ကို ဖွင့်ထားတယ်။",
    p: "The mother standing in the open bathroom doorway holding a phone up in both hands with "
      + "the camera app open and the lens pointed away from herself, her own face turned "
      + "deliberately aside. Thun Nadi at the basin in the foreground. ⚠️ The phone screen is not "
      + "legible from this angle.",
    u: ["အဲဒီအချိန် အမေ ရေချိုးခန်းတံခါးနား ရောက်လာတယ်။",
        "အမေ့လက်ထဲမှာ ဖုန်းရှိတယ်။ Camera ကို ဖွင့်ထားတယ်။",
        "“သမီး… ကိုယ့်ကိုယ်ကို မှန်ထဲမှာ မကြည့်နဲ့တော့…”"] },

  { t: "She Turned the Phone Around", l: "ရေချိုးခန်း", k: "insert",
    w: ["အမေ"],
    g: "⚠️ အမေက ဖုန်းကို ဖြည်းဖြည်း ကျွန်မဘက် လှည့်ပေးလိုက်တယ်။",
    p: "⚠️ THE SCREEN IS STILL NOT SHOWN. Insert on the mother's two hands slowly rotating the "
      + "phone in the air so that its screen turns away from camera and its bare back faces us — "
      + "plain, dark, featureless. Her face is out of frame above. Warm bathroom bulb light.",
    u: ["“ဘာလို့လဲ အမေ” လို့ ကျွန်မ မေးလိုက်တယ်။",
        "အမေက ဖုန်းကို ဖြည်းဖြည်း ကျွန်မဘက် လှည့်ပေးလိုက်တယ်။"] },

  { t: "For the First Time I Saw", c: [[1, "bigstinger"]], l: "ရေချိုးခန်း", k: "nadi",
    w: ["သွန်းနဒီ"],
    g: "⚠️ ပထမဆုံးအကြိမ် ကျွန်မ တကယ်ဘယ်လိုပုံစံဖြစ်နေလဲ မြင်လိုက်ရတယ်။",
    p: "⚠️ WE SEE HER REACTION AND NOT THE SCREEN. Close on Thun Nadi looking at something just "
      + "off the bottom edge of frame, lit faintly from below by it, her face going completely "
      + "blank — no scream, no recoil, just everything draining out. ⚠️ HER FACE IN THIS SHOT IS "
      + "HER OWN PERFECT UNMARKED FACE. The phone is not in frame.",
    u: ["ကျွန်မ Screen ကို ကြည့်လိုက်တယ်။",
        "ပြီးတော့ ပထမဆုံးအကြိမ်—",
        "ကျွန်မ တကယ်ဘယ်လိုပုံစံဖြစ်နေလဲ မြင်လိုက်ရတယ်။"] },

  { t: "The Mirror and the Lens", c: [[2, "bigstinger"]], l: "ရေချိုးခန်း", k: "screen",
    rev: "the only look at the other face",
    g: "⚠️ မှန်ထဲမှာ လှပတဲ့ ကျွန်မ။ ဖုန်းကင်မရာထဲမှာတော့ — **သေနေတဲ့မျက်နှာ**။ "
      + "⚠️ Screen ပေါ်က မျက်နှာကို **သေချာမြင်ရရမယ်** (ဒဏ်ရာတော့ မပြရဘူး — တစ်ခြမ်းက အရိပ်ထဲ)။",
    p: "⚠️ THE PAYOFF OF THE WHOLE FILM. THE FACE ON THE SCREEN MUST BE CLEARLY VISIBLE AND "
      + "CLEARLY DEAD. Insert on the phone screen held square on and close so the screen fills "
      + "most of the frame, its image sharp and properly exposed. On that screen, photographed "
      + "head-on in the lit bathroom: ⚠️ A WOMAN WHO IS PLAINLY DEAD. Her skin is a flat drained "
      + "grey-white with no warmth left in it. Her long black hair is soaked through and "
      + "plastered down over her skull and one cheek, pushed back clear of the rest of her face. "
      + "Her eyes are open, dull and fixed on nothing, focused past the camera rather than at "
      + "it. Her mouth hangs slightly open and every muscle in her face is slack — no "
      + "expression, no tension, nobody home. ⚠️ THE LIT HALF OF HER FACE IS SMOOTH AND WHOLE; "
      + "THE OTHER HALF IS TURNED AWAY INTO DEEP SHADOW and stays unreadable there. Behind her "
      + "in the same screen image the bathroom mirror is visible, and the reflection in it is "
      + "warm, living and beautiful — both faces in one frame.",
    u: ["မှန်ထဲမှာတော့ လှပတဲ့ ကျွန်မ။",
        "ဖုန်း Camera ထဲမှာတော့ ဆံပင်တွေ စိုပြီး မျက်နှာပေါ် ကပ်နေတယ်။",
        "လမ်းပေါ်မှာ သေခဲ့တဲ့ညက အလောင်းရဲ့မျက်နှာအတိုင်း။"] },

  { t: "That Is the Face They Have All Seen", l: "ရေချိုးခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "⚠️ အဲဒါ လူတွေ ဒီတစ်ပတ်လုံး မြင်နေခဲ့တဲ့ မျက်နှာ။",
    p: "Close on Thun Nadi standing in the bathroom having understood, her eyes moving as she "
      + "runs back through the week — the child, the customers, her friend, her mother. Still, "
      + "quiet, and perfectly unmarked. Warm bulb light.",
    u: ["အဲဒါ လူတွေ ဒီတစ်ပတ်လုံး မြင်နေခဲ့တဲ့ မျက်နှာ။",
        "အဲဒါကြောင့် ကလေးက ကျွန်မကိုမြင်ပြီး ငိုတာ။",
        "အဲဒါကြောင့် Customer တွေ ထွက်ပြေးတာ။"] },

  { t: "That Is Why My Mother Could Not Look", c: [[2, "stinger"]], l: "ရေချိုးခန်း",
    k: "mirror", w: ["သွန်းနဒီ"], rev: "mirror 5 of 7",
    g: "⚠️ မှန် ပဉ္စမအကြိမ် — အဲဒါကြောင့် အမေက ကိုယ့်သမီးမျက်နှာကိုတောင် မကြည့်ရဲတာ။",
    p: "OCCURRENCE 5 OF 7 OF THE MIRROR, identical framing. Thun Nadi back in front of the glass, "
      + "and the reflection is still the beautiful unmarked face — but she is looking at it now "
      + "the way you look at a lie. ⚠️ NOTHING HAS CHANGED IN THE MIRROR ITSELF.",
    u: ["အဲဒါကြောင့် ပန်းဧကရီက တံခါးပိတ်တာ။",
        "အဲဒါကြောင့် အမေက ကိုယ့်သမီးမျက်နှာကိုတောင် မကြည့်ရဲတာ။"] },

  { t: "I Could Not Accept That I Had Died", l: "ရေချိုးခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "ကျွန်မကတော့ ကိုယ့်ကိုယ်ကို သေသွားပြီဆိုတာ လက်မခံနိုင်လို့ မှန်ထဲမှာ အသက်ရှင်တုန်းက မျက်နှာကိုပဲ မြင်နေခဲ့တာ။",
    p: "Close on Thun Nadi in the bathroom with her eyes closed and her hand flat on her own "
      + "cheek, holding on to a face she now knows is not there. Quiet, warm, still. Her face is "
      + "perfect.",
    u: ["ကျွန်မကတော့ ကိုယ့်ကိုယ်ကို သေသွားပြီဆိုတာ လက်မခံနိုင်လို့—",
        "မှန်ထဲမှာ အသက်ရှင်တုန်းက မျက်နှာကိုပဲ မြင်နေခဲ့တာ။"] },

  { t: "Am I Dead", c: [[2, "stinger"]], l: "ရေချိုးခန်း", k: "bath",
    w: ["သွန်းနဒီ", "အမေ"],
    g: "⚠️ “ဒါဆို… သမီး သေသွားပြီလား?” အမေ မဖြေနိုင်ဘူး။ ခေါင်းညိတ်ရင်း ငိုတယ်။",
    p: "Thun Nadi and her mother in the small bathroom, the daughter asking and the mother "
      + "nodding with her face in her hands, neither of them looking at the other. The mirror "
      + "sits behind them at the edge of frame, holding a reflection we cannot quite see.",
    u: ["ကျွန်မ အမေ့ကို ကြည့်လိုက်တယ်။ “ဒါဆို… သမီး သေသွားပြီလား?”",
        "အမေ မဖြေနိုင်ဘူး။ ခေါင်းညိတ်ရင်း ငိုတယ်။"] },

  { t: "My Hands Went Through Her", c: [[2, "bigstinger"]], l: "ရေချိုးခန်း", k: "insert",
    w: ["သွန်းနဒီ", "အမေ"],
    g: "⚠️ အမေ့ကို ဖက်ဖို့ ကြိုးစားလိုက်တယ်။ ကျွန်မလက်တွေ အမေ့ကိုယ်ကို ဖြတ်သွားတယ်။",
    p: "THE SAME DOUBLE EXPOSURE, AND THE SADDEST USE OF IT. Insert from behind on the mother's "
      + "shoulders and back with Thun Nadi's arms closed around them. The mother, her blouse and "
      + "her hair are sharp and fully opaque; her daughter's forearms fade to about half opacity "
      + "where they overlap her, so the blouse reads clearly on top of them. The mother sits "
      + "still and has not reacted. Warm bulb light.",
    u: ["ကျွန်မလည်း ငိုချင်တယ်။ ဒါပေမယ့် မျက်ရည်မထွက်ဘူး။",
        "အမေ့ကို ဖက်ဖို့ ကြိုးစားလိုက်တယ်။",
        "ကျွန်မလက်တွေ အမေ့ကိုယ်ကို ဖြတ်သွားတယ်။"] },

  { t: "Dead Seven Days", c: [[2, "stinger"]], l: "ရေချိုးခန်း", k: "nadi",
    w: ["သွန်းနဒီ"],
    g: "⚠️ ကျွန်မ — သွန်းနဒီ — အသက် နှစ်ဆယ့်နှစ်နှစ် — လွန်ခဲ့တဲ့ ခုနစ်ရက်ကတည်းက သေပြီးသား။",
    p: "Close on Thun Nadi accepting it — eyes open, face slack, no tears because there are none "
      + "to come. ⚠️ HER FACE IS STILL PERFECT AND UNMARKED, which is now the cruellest thing "
      + "about it. Warm bulb light, held.",
    u: ["အဲဒီအချိန်မှ ကျွန်မ တကယ်လက်ခံလိုက်ရတယ်။",
        "ကျွန်မ၊ သွန်းနဒီ၊ အသက် နှစ်ဆယ့်နှစ်နှစ်။",
        "လွန်ခဲ့တဲ့ ခုနစ်ရက်ကတည်းက သေပြီးသား။"] },

  // ── XII · THE MERIT ───────────────────────────────────────────────────────
  { t: "Mother Invited the Monks", l: "သွန်းနဒီအခန်း", k: "wide", w: ["အမေ"],
    g: "အမေက ကျွန်မအခန်းထဲမှာ ဘုန်းကြီးတွေ ပင့်တယ်။ အမျှဝေတယ်။",
    p: "Wide on Thun Nadi's bedroom in daylight, cleared and rearranged: three Buddhist monks in "
      + "dark red robes seated in a row on a mat along one wall, the mother and a few relatives "
      + "kneeling opposite with their palms together, a low table of offerings between them. "
      + "⚠️ AN ORDINARY MYANMAR MERIT-SHARING CEREMONY — calm, warm, domestic and not frightening "
      + "in any way.",
    u: ["အမေက ကျွန်မအခန်းထဲမှာ ဘုန်းကြီးတွေ ပင့်တယ်။",
        "အမျှဝေတယ်။ ကျွန်မဓာတ်ပုံရှေ့မှာ ပန်းတွေတင်တယ်။"] },

  { t: "Go Where You Should Go", c: [[2, "stinger"]], l: "သွန်းနဒီအခန်း", k: "insert",
    w: ["အမေ"],
    g: "အမေက ဓာတ်ပုံကိုကိုင်ပြီး “သမီးရေ… သွားသင့်တဲ့နေရာ သွားပါတော့…” လို့ ငိုရင်းပြောတယ်။",
    p: "Insert on the mother's hands holding a framed portrait of Thun Nadi upright on her lap, "
      + "fresh white flowers laid in front of it. ⚠️ THE PORTRAIT IS HER NORMAL BEAUTIFUL SMILING "
      + "FACE — the photograph the family chose. The mother's wet chin is just visible at the top "
      + "of frame.",
    u: ["အမေက ဓာတ်ပုံကိုကိုင်ပြီး ပြောတယ်။",
        "“သမီးရေ… သွားသင့်တဲ့နေရာ သွားပါတော့…”"] },

  { t: "I Do Not Want to Go", l: "သွန်းနဒီအခန်း", k: "wide", w: ["သွန်းနဒီ", "အမေ"],
    g: "ကျွန်မ အမေ့ဘေးမှာ ထိုင်နေတယ်။ “သမီး မသွားချင်ဘူး…” အမေ မကြားဘူး။",
    p: "Wide on the ceremony with Thun Nadi sitting on the floor right beside her mother among "
      + "the kneeling relatives, close enough to touch her, speaking. ⚠️ NOBODY IN THE ROOM IS "
      + "REACTING TO HER and nobody's eyeline includes her. She is solid, ordinary and completely "
      + "alone in a crowded room.",
    u: ["ကျွန်မ အမေ့ဘေးမှာ ထိုင်နေတယ်။ “သမီး မသွားချင်ဘူး…”",
        "အမေ မကြားဘူး။ “သမီး အမေနဲ့ နေချင်သေးတယ်…”",
        "ဘယ်သူမှ မကြားဘူး။"] },

  { t: "The Room Went Dark", l: "သွန်းနဒီအခန်း", k: "wide", w: ["သွန်းနဒီ"],
    g: "တရားစာရွတ်သံတွေ ကြားနေရတယ်။ အခန်းက တဖြည်းဖြည်း မှောင်လာတယ်။",
    p: "The same bedroom later, the ceremony ended and the people gone, the light down to the "
      + "last of the evening through the curtain. Thun Nadi alone, standing up from the floor "
      + "among the leftover mats and flowers.",
    u: ["တရားစာရွတ်သံတွေ ကြားနေရတယ်။",
        "အခန်းက တဖြည်းဖြည်း မှောင်လာတယ်။",
        "ကျွန်မ ထရပ်လိုက်တယ်။ အမေ့ကို နောက်ဆုံးတစ်ခါ ကြည့်တယ်။"] },

  { t: "She Was Still There", l: "ရေချိုးခန်း", k: "mirror", w: ["သွန်းနဒီ"],
    rev: "mirror 6 of 7",
    g: "⚠️ မှန် ဆဋ္ဌမအကြိမ် — မှန်ထဲမှာတော့ အသက်ရှင်တုန်းက သွန်းနဒီ ရှိနေတုန်းပဲ။",
    p: "OCCURRENCE 6 OF 7 OF THE MIRROR, identical framing. Thun Nadi at the basin at night, and "
      + "the beautiful unmarked reflection is still there, still matching her exactly. ⚠️ "
      + "EVERYTHING IS STILL COMPLETELY NORMAL ABOUT THIS IMAGE. One bare warm bulb.",
    u: ["ပြီးတော့ မှန်ရှေ့ကို လျှောက်သွားတယ်။",
        "မှန်ထဲမှာတော့ အသက်ရှင်တုန်းက သွန်းနဒီ ရှိနေတုန်းပဲ။",
        "အရမ်းလှတဲ့မျက်နှာ။ ဆံပင်ရှည်ရှည်။"] },

  { t: "The Reflection Stopped Copying Me", c: [[1, "bigstinger"]], l: "ရေချိုးခန်း",
    k: "mirror", w: ["သွန်းနဒီ"], rev: "mirror 7 of 7 — the one that moves",
    g: "⚠️ မှန် သတ္တမအကြိမ် — ကျွန်မလှုပ်သလို လိုက်မလှုပ်တော့ဘူး။ သူက ကျွန်မကိုပဲ ကြည့်နေတယ်။ ဖြည်းဖြည်း ပြုံးပြတယ်။",
    p: "OCCURRENCE 7 OF 7, the same framing exactly, and the two halves of the image show "
      + "DIFFERENT POSES OF THE SAME WOMAN. ⚠️ IN THE ROOM: Thun Nadi stands at the basin with "
      + "one hand lifted towards the glass and her mouth open in shock. ⚠️ IN THE MIRROR: the "
      + "same woman stands squarely with both arms down at her sides, chin level, looking "
      + "straight out of the glass, smiling gently and warmly. Ordinary bathroom, ordinary warm "
      + "bulb, clean undamaged glass.",
    u: ["ကျွန်မ မှန်ကို လက်နဲ့ထိလိုက်တယ်။ “ငါ ဒီလိုပဲ မှတ်ထားချင်တယ်…”",
        "ဒါပေမယ့် မှန်ထဲက သွန်းနဒီက ကျွန်မလှုပ်သလို လိုက်မလှုပ်တော့ဘူး။",
        "သူက ကျွန်မကိုပဲ ကြည့်နေတယ်။ ပြီးတော့ ဖြည်းဖြည်း ပြုံးပြတယ်။"] },

  { t: "She Walked Away Into the Dark", c: [[2, "bigstinger"]], l: "ရေချိုးခန်း", k: "mirror",
    w: ["သွန်းနဒီ"],
    g: "⚠️ မှန်ထဲက လှပတဲ့ သွန်းနဒီက တဖြည်းဖြည်း နောက်ကို လှည့်တယ်။ အမှောင်ထဲကို လျှောက်သွားတယ်။",
    p: "The same mirror framing, and again the two halves differ. ⚠️ IN THE MIRROR: the same "
      + "woman seen FROM BEHIND, walking away down a long dim corridor that recedes into "
      + "darkness, her long black hair down her back, already small and far off. ⚠️ IN THE ROOM: "
      + "Thun Nadi stands at the basin facing the glass with her hand still out. Ordinary "
      + "bathroom, ordinary warm bulb.",
    u: ["ကျွန်မ နောက်ဆုတ်လိုက်တယ်။",
        "မှန်ထဲက လှပတဲ့ သွန်းနဒီက တဖြည်းဖြည်း နောက်ကို လှည့်တယ်။",
        "အမှောင်ထဲကို လျှောက်သွားတယ်။ ပြီးတော့ ပျောက်သွားတယ်။"] },

  { t: "I Can No Longer See My Own Face", l: "ရေချိုးခန်း",
    k: "mirror", w: ["သွန်းနဒီ"],
    g: "⚠️ မှန်ထဲမှာ ဘာမှမကျန်တော့ဘူး။ ကျွန်မ ကိုယ့်မျက်နှာကို မမြင်ရတော့ဘူး။",
    p: "The same mirror framing one last time. ⚠️ THE MIRROR SHOWS AN EMPTY ROOM: pale blue wall "
      + "tiles, the open doorway and the bare bulb, reflected accurately and ordinarily, with "
      + "nobody in it. Thun Nadi stands solid and fully lit in front of the glass with her back "
      + "to camera. Ordinary bathroom, clean undamaged mirror.",
    u: ["မှန်ထဲမှာ ဘာမှမကျန်တော့ဘူး။",
        "ကျွန်မ ကိုယ့်မျက်နှာကို မမြင်ရတော့ဘူး။",
        "အဲဒီအချိန်မှာပဲ ကျွန်မ နားလည်လိုက်တယ်။ အသက်ရှင်တုန်းက သွန်းနဒီ တကယ်မရှိတော့ဘူး။"] },

  // ── XIII · SHE CANNOT LEAVE ───────────────────────────────────────────────
  { t: "I Could Not Go", c: [[2, "stinger"]], l: "သွန်းနဒီအခန်း", k: "insert",
    w: ["သွန်းနဒီ"],
    g: "⚠️ ကျွန်မ မသွားနိုင်ဘူး။ အခန်းတံခါးကို ဖြတ်လို့မရတော့ဘူး။",
    p: "⚠️ THE REVERSE OF THE DOOR SHE PASSED THROUGH EARLIER. Insert on Thun Nadi's open palms "
      + "pressed flat against the inside of the closed bedroom door, the fingers splayed and "
      + "whitened with effort. ⚠️ HER HANDS ARE COMPLETELY SOLID AGAINST THE WOOD and the door "
      + "does not give at all. Dim evening light.",
    u: ["ကျွန်မ အမေ့ဘက်ကို ပြန်လှည့်ကြည့်တယ်။ သွားဖို့ ကြိုးစားတယ်။",
        "ဒါပေမယ့် ကျွန်မ မသွားနိုင်ဘူး။",
        "အခန်းတံခါးကို ဖြတ်လို့မရတော့ဘူး။ ပြတင်းပေါက်ကိုလည်း ဖြတ်လို့မရဘူး။"] },

  { t: "Something Pushed Me Back", l: "သွန်းနဒီအခန်း", k: "wide", w: ["သွန်းနဒီ"],
    g: "ဘုရားစာရွတ်သံ ကြားတိုင်း ကျွန်မကို တစ်ခုခုက အခန်းထဲ ပြန်တွန်းပို့နေတယ်။",
    p: "Wide on the darkening bedroom with Thun Nadi standing in the middle of it, turned towards "
      + "the closed window, her arms slightly out from her sides as if against a current that is "
      + "not visible. ⚠️ THE ROOM IS COMPLETELY ORDINARY — nothing is in it with her, no wind, no "
      + "light, no effect of any kind.",
    u: ["ဘုရားစာရွတ်သံ ကြားတိုင်း—",
        "ကျွန်မကို တစ်ခုခုက အခန်းထဲ ပြန်တွန်းပို့နေတယ်။"] },

  { t: "I Wanted to Accept It", l: "သွန်းနဒီအခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "အမေက အမျှဝေနေတယ်။ ကျွန်မက လက်ခံချင်တယ်။ ဒါပေမယ့် လက်ခံလို့မရဘူး။",
    p: "Close on Thun Nadi in the dim bedroom with her palms pressed together in front of her "
      + "chest, trying to receive something and visibly unable to, her eyes shut and her "
      + "eyebrows drawn. Her face is still perfect. Very little light.",
    u: ["အမေက အမျှဝေနေတယ်။ ကျွန်မက လက်ခံချင်တယ်။",
        "ဒါပေမယ့် လက်ခံလို့မရဘူး။",
        "ဘာကြောင့်လဲဆိုတာ ကျွန်မလည်း မသိဘူး။"] },

  { t: "Everyone Left and the Lights Went Out", l: "သွန်းနဒီအခန်း", k: "wide",
    w: ["သွန်းနဒီ"],
    g: "အမေတို့အားလုံး ထွက်သွားကြတယ်။ မီးတွေပိတ်သွားတယ်။ အခန်းထဲမှာ ကျွန်မတစ်ယောက်တည်း ကျန်ခဲ့တယ်။",
    p: "Wide on the bedroom at night with the light off, lit only by a little streetlight through "
      + "the thin curtain: the mats rolled away, the flowers left in front of the empty picture "
      + "stand, and Thun Nadi sitting alone on the floor in the middle of it, small in frame, "
      + "facing the door.",
    u: ["အမေတို့အားလုံး ထွက်သွားကြတယ်။ မီးတွေပိတ်သွားတယ်။",
        "အခန်းထဲမှာ ကျွန်မတစ်ယောက်တည်း ကျန်ခဲ့တယ်။",
        "မှန်ထဲမှာတော့ ဘာမှမရှိဘူး။"] },

  { t: "In the Black Screen", c: [[1, "bigstinger"]], l: "သွန်းနဒီအခန်း", k: "screen",
    rev: "the last glimpse",
    g: "⚠️ ဖုန်းအဟောင်းရဲ့ Screen အမည်းထဲမှာ **သေနေတဲ့မျက်နှာ** ပြန်ပေါ်နေတယ်။ အဲဒါ ကျွန်မပဲ။ "
      + "⚠️ ၇၈ ကအတိုင်းပဲ — မျက်နှာကို မြင်ရရမယ်၊ ဒါပေမယ့် မှိန်မှိန်။",
    p: "⚠️ THE SAME DEAD FACE AS SHOT 78, RETURNING ONE LAST TIME AND DIMMER. Insert on an unlit "
      + "black phone screen lying on the floor in near darkness. Held in that black glass is a "
      + "reflection of the woman sitting above it: ⚠️ THE SAME DEAD FACE — flat grey skin, soaked "
      + "hair plastered down and pushed back clear of the features, eyes open and fixed, mouth "
      + "slack. It is a reflection in dark glass, so it is faint and low in contrast and the "
      + "colour is almost gone — but ⚠️ THE FACE IS LEGIBLE. One side of it falls away into the "
      + "black of the screen and stays unreadable there.",
    u: ["ဒါပေမယ့် ဖုန်းအဟောင်းရဲ့ Screen အမည်းထဲမှာ—",
        "မျက်နှာပျက်နေတဲ့ မိန်းမတစ်ယောက်ရဲ့အရိပ် ပေါ်နေတယ်။",
        "အဲဒါ ကျွန်မပဲ။"] },

  { t: "Morning Never Came", l: "သွန်းနဒီအခန်း", k: "nadi", w: ["သွန်းနဒီ"],
    g: "ကျွန်မ မျက်လုံးမှိတ်လိုက်တယ်။ ဒါပေမယ့် မနက်မရောက်ဘူး။ အိပ်လို့လည်း မရဘူး။",
    p: "Close on Thun Nadi sitting on the dark bedroom floor with her eyes closed, waiting. "
      + "⚠️ HER FACE IS PERFECT AND UNMARKED AND ALWAYS WILL BE. Almost no light on her — just "
      + "enough to read the stillness.",
    u: ["ကျွန်မ မျက်လုံးမှိတ်လိုက်တယ်။",
        "ဒါပေမယ့် မနက်မရောက်ဘူး။ အိပ်လို့လည်း မရဘူး။",
        "သေဖို့လည်း ထပ်သေလို့ မရတော့ဘူး။"] },

  { t: "Dying Was Not the Worst Part", c: [[1, "finalstinger"]], l: "သွန်းနဒီအခန်း",
    k: "wide", w: ["သွန်းနဒီ"],
    g: "⚠️ သေသွားတာက အကြောက်ဆုံးအရာ မဟုတ်ဘူး။ ဘယ်ကိုမှ သွားလို့မရတော့တာကမှ တကယ်ကြောက်စရာကောင်းတာ။",
    p: "FINAL SHOT. Wide on the dark empty bedroom from the doorway, the door standing open onto "
      + "a lit corridor beyond it — and Thun Nadi sitting motionless on the floor inside, facing "
      + "that open door and not going through it. ⚠️ THE WAY OUT IS PLAINLY OPEN AND SHE IS "
      + "PLAINLY NOT TAKING IT. Ordinary house, ordinary night, nothing supernatural in frame. "
      + "Hold on the open door.",
    u: ["အဲဒီအချိန်မှ ကျွန်မ သိလိုက်တယ်။",
        "သေသွားတာက အကြောက်ဆုံးအရာ မဟုတ်ဘူး။",
        "ကိုယ်သေသွားပြီဆိုတာ နောက်ဆုံးမှ သိရပြီး—",
        "ဘယ်ကိုမှ သွားလို့မရတော့တာကမှ တကယ်ကြောက်စရာကောင်းတာ။"] },
];

/**
 * The rule that protects the whole film, carried on every shot.
 *
 * Her living face is the constant; the damaged one appears twice, both times
 * small, dark and unresolved. Stated positively throughout — a prohibition on a
 * noun plants the noun, and a prohibition on an injury word gets the prompt
 * refused outright.
 */
const CONT =
  "Continuity: Thun Nadi keeps her own living face throughout — smooth fair skin, both eyes open, "
  + "long black hair, a thin gold chain at her throat. She is solid and opaque, stands on the "
  + "floor and casts an ordinary shadow, in natural healthy colour. Everyone in frame is whole "
  + "and unharmed.";

/** Only the six road shots need the road kept bare. */
const ROAD_CLAUSE =
  " The tarmac is bare and clean from edge to edge and the only things in shot are the ones "
  + "named above.";

const STYLE =
  "Contemporary Yangon, present day. Photorealism, 16:9, 35mm grain, level camera, natural "
  + "depth of field. Clean neutral colour and plain available light. Every location is a working, "
  + "lived-in place that looks completely normal — the world is ordinary and only the people's "
  + "behaviour is strange. One still instant. Surfaces are blank of writing except where a shot "
  + "names it.";

/**
 * The two shots the universal rule cannot apply to.
 *
 * CONT tells all ninety-nine shots that she keeps her living face in natural
 * healthy colour. On 78 and 97 that sits in the same prompt as an instruction
 * to show a drained grey dead face, and a prompt that contradicts itself gets
 * resolved by whichever half the model likes better — which is exactly how the
 * first version came back as a curtain of hair. These two get their own block.
 */
const SCREEN_FACE = new Set(["The Mirror and the Lens", "In the Black Screen"]);

const CONT_SCREEN =
  "Continuity: ⚠️ THIS SHOT IS THE EXCEPTION TO THE FILM'S RULE. Everywhere else Thun Nadi wears "
  + "her living face; here the face carried on the screen is the dead one and it must read that "
  + "way — drained grey skin, soaked flattened hair, open fixed eyes, a slack mouth. The living "
  + "face still appears in this frame wherever a mirror or a reflection shows it. Her hair length, "
  + "her features and the thin gold chain at her throat stay the same on both faces so they are "
  + "recognisably one woman. No wounds are drawn on either of them.";

const TIME = {
  day: "TIME: DAYTIME. Flat ordinary daylight, dry weather, bright sky outside.",
  evening: "TIME: EARLY EVENING. Warm indoor lamp light, the last of the daylight outside.",
  night: "TIME: NIGHT INDOORS. One ordinary warm bulb is the whole of the light; the windows are flat black.",
  rain: "TIME: NIGHT, HEAVY RAIN. Wet black tarmac throwing back streetlight, rain falling hard and visible.",
};

/** Which clock each shot sits on, by title. Everything unlisted is daytime. */
const AT = {
  evening: new Set(["A Gift From the Buddha", "Mother Was at the Table",
    "Is Something Wrong With My Face", "Her Hands Were Shaking", "She Went Into Her Room",
    "I Was Left Alone", "She Was Crying at Her Laptop", "I Ran Home", "I Know You Are Here",
    "You Do Not Know Yet", "She Put the Photograph Down", "I Looked at It",
    "The Necklace Was Mine", "A Car Hit You That Rainy Night", "The Room Went Dark"]),
  night: new Set(["That Night I Looked Properly", "Still Soft", "Mother Was on the Phone Outside",
    "I Can't Do This Anymore", "She Comes Back Every Night", "Sometimes in the Bathroom",
    "I Cannot Look at Her Face", "Two in the Morning", "You Cannot Pretend Not to See",
    "She Will Suffer More", "Both of Them Went Quiet", "She Shut Her Eyes and Prayed",
    "Look at Me", "The Glass Fell", "My Hand Went Through It", "This Time I Could Hold It",
    "She Does Not Know Yet", "My Phone Would Not Turn On", "Sometimes My Hand Passed Through",
    "I Ran to the Mirror", "Mother Came With Her Phone", "She Turned the Phone Around",
    "For the First Time I Saw", "The Mirror and the Lens",
    "That Is the Face They Have All Seen", "That Is Why My Mother Could Not Look",
    "I Could Not Accept That I Had Died", "Am I Dead", "My Hands Went Through Her",
    "Dead Seven Days", "She Was Still There", "The Reflection Stopped Copying Me",
    "She Walked Away Into the Dark", "I Can No Longer See My Own Face", "I Could Not Go",
    "Something Pushed Me Back", "I Wanted to Accept It",
    "Everyone Left and the Lights Went Out", "In the Black Screen", "Morning Never Came",
    "Dying Was Not the Worst Part"]),
  rain: new Set(["One Thing I Did Remember", "Headlights, a Horn, Then Dark",
    "Something Broke Open in My Head", "Something Warm on My Face", "The Memory Came Back",
    "What I Saw Last"]),
};

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = AT.rain.has(s.t) ? TIME.rain
    : AT.night.has(s.t) ? TIME.night
    : AT.evening.has(s.t) ? TIME.evening
    : TIME.day;
  /**
   * The road rule rides on the six road shots and nowhere else.
   *
   * It used to sit in the universal block, so every shot in a cosmetics shop
   * and every shot in a bathroom also carried an instruction about what must
   * not be lying on a road. Boilerplate irrelevant to nine tenths of a board is
   * not a safeguard — it is noise competing with the sentence that describes
   * the actual frame.
   */
  s.cont = SCREEN_FACE.has(s.t) ? CONT_SCREEN
    : CONT + (s.l === "လမ်းမ" ? ROAD_CLAUSE : "");
  s.style = STYLE;
});

export { CONT, STYLE };
