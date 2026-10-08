/**
 * မျက်မမြင်လူငယ်နောက်က လိုက်နေတဲ့သရဲ — THE ONE WHO FOLLOWS A BLIND MAN. 70 shots.
 *
 * Thun Min, twenty-seven, has been blind for five years. People assume a blind
 * man has nothing to fear from ghosts. He has the opposite to report: the worst
 * thing is knowing something is behind you and never being able to see its face.
 *
 * Bare feet cross his kitchen at night and stop behind his chair. A woman's
 * breath at his ear. A voice: "you can't see me, can you." His friend Zaw Ye
 * stays over, sees her standing behind him in a white blouse with long hair and
 * no eyes in her face — and runs. Next morning Zaw Ye tells him the worse part:
 * she was not standing behind him. She was COPYING him. Turn right, she turns
 * right. Bow your head, she bows. Like your shadow.
 *
 * ⚠️ WHAT THE STORY IS ABOUT. She offers him his eyes back and presses them
 * into his face, and he sees — a table, a window, a mirror, and himself in it
 * with two dark openings where his eyes were. She is behind him wearing them.
 * She says she pulled him out of the car five years ago and died in it. Then
 * Zaw Ye rings: there was no woman in that car. Thun Min was alone. Somebody did
 * die at that crash — the person his car hit. She has watched through his eyes
 * for five years and her turn is over. In the mirror the figure behind her is no
 * longer a woman but an eyeless man with his own face, and his feet begin to
 * follow her without him. In the morning Zaw Ye finds the house open, Thun Min
 * gone, and a woman at the mirror wearing his eyes, who asks whether he is
 * looking for Thun Min and says she will let him watch for another five years.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * SIX RULES THIS BOARD IS BUILT ON.
 *
 * 1. ⚠️ THE FILM HAS TWO VISUAL LANGUAGES AND THE CUT BETWEEN THEM IS THE
 *    STORY. For forty-two shots the picture is what a blind man's house is: a
 *    hand on a surface, a doorway he is facing the wrong way for, a shape
 *    behind him that never resolves. Then he is given eyes, and from shot 43
 *    everything is sharp. ⚠️ THE FIRST PROPERLY FOCUSED FRAME IN THE FILM IS
 *    THE ONE WHERE HE CAN SEE. Spend that, and the whole middle pays for it.
 *
 * 2. ⚠️ WHILE HE IS BLIND, NOTHING IS SHOWN THAT HE COULD NOT KNOW. She is out
 *    of frame, behind him, or so far out of focus that no feature holds. The
 *    audience is kept exactly as ignorant as he is, which is the only way the
 *    reveal is worth anything. The ONE exception is shot 23, which is Zaw Ye's
 *    eyes and not his.
 *
 * 3. ⚠️ ABSENT EYES, NEVER DAMAGED ONES. "Two black holes" is a wound and the
 *    filter will refuse it or punch a crater through the face. CONT_HOLLOW says
 *    what IS there — two dark openings that catch no light, in skin that is
 *    whole, smooth and unmarked, with ordinary brows and lashes. Calm, intact,
 *    and missing something.
 *
 * 4. ⚠️ HER EYES ARE HIS, AND THEY ARE HEALTHY. Nothing about them is altered.
 *    Ordinary brown eyes, the same shape and set as his, in a woman's face that
 *    is otherwise entirely her own. The horror is the mismatch, not the eyes.
 *
 * 5. ⚠️ A MIRROR SHOT STATES WHAT IS IN THE MIRROR. Generators invent
 *    reflections. Every mirror frame here names the glass, what stands in front
 *    of it and what is shown inside it, separately, as three facts.
 *
 * 6. ⚠️ ORDINARY RENTED YANGON, NOT A HAUNTED HOUSE. A tiled floor, a plastic
 *    chair, a standing fan, a phone on a strap. She is a woman in a white
 *    blouse. Nothing in this film is decorated — the fear is positional. It is
 *    always about where something is standing.
 */

/** The project title in the lab. */
export const TITLE = "မျက်မမြင်လူငယ်နောက်က လိုက်နေတဲ့သရဲ";

export const CAST = [
  { name: "ထွန်းမင်း", en: "Thun Min — the narrator, twenty-seven",
    prompt:
      "A Burmese man of twenty-seven, slight and neat, ⚠️ IN A PLAIN GREY T-SHIRT AND A DARK "
      + "CHECKED LONGYI, barefoot, hair short and a little overgrown, clean-shaven. ⚠️ HE IS "
      + "BLIND: his eyes are open, clear and undamaged, but they are not directed at anything and "
      + "they do not meet the lens — the gaze sits slightly past whatever is in front of him. ⚠️ "
      + "HIS FACE AND EYES ARE COMPLETELY ORDINARY AND UNMARKED. He holds his head very slightly "
      + "tilted, the way somebody does who is listening rather than looking. ⚠️ HE IS CLEARLY ONE "
      + "PERSON AND ALWAYS THE SAME PERSON." },

  { name: "မိန်းမ", en: "The woman — about thirty",
    prompt:
      "A Burmese woman of about thirty, slim, ⚠️ IN A PLAIN WHITE LONG-SLEEVED BLOUSE AND A DARK "
      + "LONGYI, barefoot, ⚠️ HER HAIR LONG, STRAIGHT, UNTIED AND FALLING PAST HER SHOULDERS. No "
      + "jewellery, no thanaka, nothing in her hands. ⚠️ BUILD HER AS A COMPLETELY ORDINARY LIVING "
      + "WOMAN — warm skin, clear ordinary eyes, an unremarkable calm face, standing straight with "
      + "her arms at her sides. ⚠️ NOTHING ABOUT HER IS FRIGHTENING OR DAMAGED IN THIS PLATE. What "
      + "is wrong with her is stated by each shot and is never in the plate." },

  { name: "ဇော်ရဲ", en: "Zaw Ye — the friend, twenty-seven",
    prompt:
      "A Burmese man of twenty-seven, heavier set, ⚠️ IN A SHORT-SLEEVED CHECKED SHIRT WORN OPEN "
      + "OVER A WHITE VEST AND JEANS, rubber slippers, hair cut short, a phone in his shirt "
      + "pocket. ⚠️ A PRACTICAL, SLIGHTLY IMPATIENT, ENTIRELY ORDINARY FACE — the friend who comes "
      + "round to check the rooms and tell you there is nothing there. Warm skin, clear eyes, good "
      + "colour. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },
];

export const PROPS = [
  { name: "မှန်", en: "The mirror",
    prompt:
      "⚠️ ONE TALL PLAIN WALL MIRROR IN A THIN DARK WOODEN FRAME, hanging on a painted interior "
      + "wall and photographed square on, filling the frame. ⚠️ THE GLASS IS OLD — slightly grey, "
      + "a little spotted at the lower corners, a fine scratch across one edge. ⚠️ IT SHOWS ONLY "
      + "THE EMPTY ROOM OPPOSITE: a plain painted wall, a doorway, and a worn tiled floor, nothing "
      + "else and nobody in it. Flat even daylight, no highlight blown out on the glass." },

  { name: "ဖုန်း", en: "The phone",
    prompt:
      "⚠️ ONE ORDINARY MID-RANGE ANDROID PHONE LYING FACE UP on a scratched wooden table, "
      + "photographed straight down and filling the frame. ⚠️ A BLACK SILICONE CASE GONE GREY AT "
      + "THE CORNERS, a woven cord strap through one corner, the glass smeared with fingerprints. "
      + "⚠️ THE SCREEN IS LIT AND SHOWS A PLAIN INCOMING-CALL PANEL — a large round grey avatar "
      + "disc, a short name in small plain letters above it, and two round buttons at the foot. "
      + "Cheap, two years old, used hard." },
];

export const LOCS = [
  { name: "ဧည့်ခန်း", en: "The living room",
    prompt:
      "⚠️ THE MAIN ROOM OF A SMALL OLD RENTED HOUSE ON THE EDGE OF YANGON, seen from one corner: "
      + "worn green-grey floor tiles, painted walls gone chalky, a single bare bulb on a flex. ⚠️ "
      + "ONE WOODEN CHAIR WITH ITS BACK TO THE ROOM, a scratched table with a phone and a glass of "
      + "water on it, a standing fan, a tall plain mirror on one wall. A doorway through to a "
      + "kitchen, a shuttered window with a security grille. ⚠️ TIDY, SPARSE AND ARRANGED FOR "
      + "SOMEBODY WHO KNOWS WHERE EVERYTHING IS — nothing on the floor anywhere." },

  { name: "မီးဖိုချောင်", en: "The kitchen",
    prompt:
      "⚠️ A SMALL ORDINARY MYANMAR KITCHEN at the back of an old house: a low tiled counter with a "
      + "gas ring and a blackened kettle, enamel bowls stacked on a shelf, a plastic water drum in "
      + "one corner, a wooden stool. ⚠️ A BACK DOOR WITH A SIMPLE SLIDE BOLT, standing shut, and a "
      + "small window above the counter. Worn concrete floor, damp along one wall. ⚠️ THE ROOM IS "
      + "EMPTY AND EVERY SURFACE IS CLEAR." },

  { name: "နောက်ဖေး", en: "The back of the house",
    prompt:
      "⚠️ THE NARROW STRIP OF BARE EARTH BEHIND AN OLD YANGON HOUSE AT NIGHT, seen along it: a "
      + "plain back wall with one shut door and a low window, a corrugated fence close on the "
      + "other side, a water drum, a bare clothes line. Weeds along the foot of the wall. ⚠️ THE "
      + "ONLY LIGHT IS WHAT SPILLS FROM THE WINDOW and everything past the fence is black. ⚠️ THE "
      + "GROUND IS SOFT, BARE AND UNMARKED." },

  { name: "ကားအတွင်း", en: "Inside the car",
    prompt:
      "⚠️ THE FRONT OF AN ORDINARY SMALL SALOON CAR AT NIGHT, photographed from the back seat "
      + "between the two front headrests: a worn dashboard, a steering wheel, a windscreen with "
      + "heavy rain running down it and the wipers stopped mid-sweep. ⚠️ THE ONLY LIGHT IS THE "
      + "GREEN GLOW OF THE INSTRUMENTS AND ONE STREET LAMP SMEARED THROUGH THE WET GLASS. A "
      + "cardboard air freshener on the mirror stem. ⚠️ BOTH FRONT SEATS ARE EMPTY." },

  { name: "မိုးလမ်း", en: "The road in the rain",
    prompt:
      "⚠️ AN EMPTY WET CITY ROAD AT NIGHT ON THE EDGE OF YANGON, running away from camera under "
      + "one sodium street lamp, ⚠️ THE TARMAC THROWING THE LIGHT BACK AND HEAVY RAIN FALLING IN "
      + "LONG BRIGHT STREAKS THROUGH THE CONE OF IT. Low shuttered shopfronts set back on one "
      + "side, a concrete drain and wet weeds on the other, a few leaning power poles. ⚠️ THE ROAD "
      + "IS EMPTY OF TRAFFIC AND OF PEOPLE. Amber light, black water, deep dark at the edges." },
];

/* ────────────────────────────────────────────────────────────────────────── */

const CAM = {
  room: "IN THE LIVING ROOM. Camera at seated height, holding most of the space.",
  wide: "WIDE. Camera at chest height in the corner, far enough back to hold the whole room.",
  chair: "BEHIND THE CHAIR. Camera at standing height behind and above the wooden chair, looking "
    + "down past its back into the room.",
  min: "CLOSE ON THUN MIN. Camera at his eye height, head-and-shoulders crop.",
  ye: "CLOSE ON ZAW YE. Camera at his eye height, head-and-shoulders crop.",
  her: "CLOSE ON THE WOMAN. Camera at her eye height, head-and-shoulders crop.",
  hand: "ON THE HANDS. Camera close in on what the hands are touching, the rest of the body out "
    + "of frame.",
  floor: "AT FLOOR HEIGHT. Camera a few inches above the tiles, level along them.",
  behind: "FROM BEHIND HIM. Camera at standing height a little way back, the back of his head and "
    + "shoulders filling the lower frame and the room beyond.",
  kitchen: "IN THE KITCHEN. Camera at chest height beside the counter.",
  back: "BEHIND THE HOUSE. Camera at chest height on the bare strip, looking along the wall.",
  mirror: "ON THE MIRROR. Camera square to the glass, the frame of it inside the picture.",
  car: "INSIDE THE CAR. Camera on the back seat between the headrests, looking forward.",
  road: "ON THE ROAD. Camera at chest height in the middle of the wet road, looking along it.",
  insert: "TIGHT INSERT. One subject filling the frame, shallow focus.",
  door: "ON THE FRONT DOOR. Camera at chest height inside the room, square to it.",
};

const TIME = {
  day: "TIME: FLAT GREY DAYLIGHT. Even light through a shuttered window, ordinary and "
    + "undramatic, no shadow with an edge to it.",
  bulb: "TIME: NIGHT, ONE BARE BULB. A single bulb on a flex overhead, warm and plain, the "
    + "corners of the room dim and the window black.",
  dark: "TIME: NIGHT, THE BULB OFF. Almost total darkness, only a thin wash of street light "
    + "through the window grille — shapes just legible in outline, colour gone.",
  rain: "TIME: NIGHT IN HEAVY RAIN. One sodium street lamp through sheeting water, the rain in "
    + "long bright streaks, everything beyond the lamp black.",
  dawn: "TIME: FIRST LIGHT. Thin colourless grey coming through the grille, flat and cold, "
    + "everything legible and nothing warm anywhere in it.",
};

const CONT =
  "Continuity: a small old rented house on the edge of Yangon, present day. Worn tiles, chalky "
  + "paint, a bare bulb, plastic and enamel. Ordinary t-shirts, longyis, bare feet. ⚠️ NOTHING IN "
  + "THIS FILM IS DECORATED OR STYLED — no shrines, no charms, no symbols, no mist. The fear is "
  + "positional: it is always about where something is standing.";

const CONT_UNSEEN =
  " ⚠️ THIS IS A BLIND MAN'S HOUSE AND THE PICTURE BELONGS TO HIM. The subject is always a "
  + "surface, a hand, or the place a sound came from: what is touched, what is near, what is "
  + "behind. ⚠️ ANYTHING ELSE STANDING IN THE ROOM IS OUT OF FRAME, BEHIND HIM, OR SO FAR OUT OF "
  + "FOCUS THAT NO FEATURE RESOLVES — never a readable face, never a whole figure. ⚠️ NOTHING IS "
  + "SHOWN CLEARLY THAT HE COULD NOT KNOW BY TOUCH OR BY SOUND.";

const CONT_SEEN =
  " ⚠️ HE CAN SEE NOW AND THE PICTURE CHANGES WITH HIM: sharp, lit and legible edge to edge, "
  + "where everything before was surfaces and blur. ⚠️ THE CLARITY ITSELF IS THE EVENT — hold it "
  + "like something that has just been handed over.";

const CONT_HOLLOW =
  " ⚠️ WHERE THE EYES SHOULD BE THERE ARE TWO DARK OPENINGS THAT CATCH NO LIGHT AT ALL — the lids "
  + "open onto a flat even blackness and nothing inside them reflects anything. ⚠️ THE SKIN OF THE "
  + "FACE IS WHOLE, SMOOTH AND COMPLETELY UNMARKED, the brows and lashes ordinary and in place, "
  + "the rest of the face calm. ⚠️ NOTHING ANYWHERE ON THE FACE IS TORN, CUT OR DAMAGED — what is "
  + "wrong is only that the eyes are absent.";

const CONT_HIS_EYES =
  " ⚠️ HER EYES ARE A MAN'S EYES AND THEY DO NOT BELONG IN HER FACE — the same shape, the same "
  + "warm brown, the same set under the brow as Thun Min's, in a woman's face that is otherwise "
  + "entirely her own. ⚠️ THE EYES THEMSELVES ARE ORDINARY, HEALTHY AND UNDAMAGED and they focus "
  + "properly on what they are looking at. The horror is the mismatch and nothing else.";

const CONT_MIRROR =
  " ⚠️ STATE THE MIRROR AS THREE SEPARATE FACTS AND DRAW ONLY THOSE: the glass and its frame, "
  + "what stands in front of it, and what is shown inside it. ⚠️ THE REFLECTION CONTAINS EXACTLY "
  + "WHAT THIS SHOT SAYS IT CONTAINS AND NOTHING ELSE — no extra figure, no doubled room, no "
  + "second light.";

const STYLE =
  "Yangon, present day. Photorealism, 16:9, 35mm grain, level camera, natural depth of field. "
  + "Worn tile, chalky paint, cheap plastic, old glass. Honest available light — bare-bulb orange, "
  + "flat window grey, sodium street amber through a grille, and black where there is no light at "
  + "all. One still instant. ⚠️ ALL PRINTED AND ON-SCREEN TEXT STAYS SOFT AND PARTLY OCCLUDED, "
  + "READING AS MARKS RATHER THAN AS WORDS.";

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "I · မမြင်ရတာက ပိုကြောက်ဖို့ကောင်းတယ်",
  5: "II · တရှပ်… တရှပ်…",
  11: "III · ဇော်ရဲ",
  14: "IV · မင်းနောက်မှာ မိန်းမတစ်ယောက်",
  20: "V · မင်းရဲ့အရိပ်လိုပဲ",
  23: "VI · ခြေသံနှစ်စုံ",
  27: "VII · မျက်လုံးပြန်မြင်ချင်လား",
  31: "VIII · မြင်ရပြီ",
  35: "IX · သူ့မျက်နှာမှာ ကျွန်တော့်မျက်လုံး",
  39: "X · ငါက နင့်ကို ကယ်ခဲ့တဲ့လူ",
  44: "XI · ကားထဲမှာ မိန်းမမပါဘူး",
  50: "XII · အခု ငါ့အလှည့်",
  56: "XIII · နောက်ငါးနှစ်",
};

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  /* ── I · မမြင်ရတာက ပိုကြောက်ဖို့ကောင်းတယ် ────────────────────────────── */
  { t: "My Name Is Thun Min", l: "ဧည့်ခန်း", k: "min", tm: "day", unseen: true, w: ["ထွန်းမင်း"],
    g: "ဖွင့်ပုံ — ကျွန်တော့်နာမည် ထွန်းမင်း။ အသက် ၂၇။ မျက်မမြင်ဖြစ်တာ ငါးနှစ်ရှိပြီ။",
    p: "Close on Thun Min sitting in the wooden chair in flat grey daylight, ⚠️ HIS FACE TOWARDS "
      + "CAMERA BUT HIS EYES NOT MEETING IT — open, clear, undamaged, and directed a little past "
      + "the lens at nothing. ⚠️ HIS HEAD IS VERY SLIGHTLY TILTED, the way it is when somebody is "
      + "listening instead of looking. Grey t-shirt, short hair. The chalky wall and the grilled "
      + "window behind him soft and out of focus.",
    u: ["ကျွန်တော့်နာမည် ထွန်းမင်း။", "အသက် ၂၇ နှစ်။", "ကျွန်တော် မျက်မမြင်ဖြစ်နေတာ ငါးနှစ်ရှိပြီ။"] },

  { t: "People Think the Blind Have Nothing to Fear", l: "ဧည့်ခန်း",
    k: "wide", tm: "day", unseen: true, w: ["ဧည့်ခန်း"],
    g: "⚠️ လူတွေက မျက်မမြင်ဆိုရင် သရဲမမြင်ရလို့ မကြောက်ရဘူးထင်ကြတယ်။ **တချို့အရာကို မမြင်ရတာက ပိုကြောက်ဖို့ကောင်းတယ်။**",
    p: "Wide on the living room in flat grey daylight, ⚠️ EVERY SURFACE CLEAR AND NOTHING ON THE "
      + "FLOOR ANYWHERE — worn green-grey tiles, a wooden chair with its back to the room, a "
      + "scratched table with a phone and a glass of water squared on it, a standing fan, a tall "
      + "plain mirror on one wall. ⚠️ EVERY OBJECT IS SQUARED TO AN EDGE OR A WALL AND THE "
      + "MIDDLE OF THE FLOOR IS BARE. ⚠️ IT IS EMPTY OF PEOPLE. Light through the grille, no hard shadow.",
    u: ["လူတွေက မျက်မမြင်ဆိုရင် သရဲမမြင်ရလို့ မကြောက်ရဘူးထင်ကြတယ်။",
      "ဒါပေမယ့် ကျွန်တော် ပြောပြချင်တာတစ်ခုရှိတယ်။", "တချို့အရာတွေကို မမြင်ရတာက ပိုကြောက်ဖို့ကောင်းတယ်။"] },

  { t: "Knowing Somebody Is Behind You", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "behind",
    tm: "day", unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ အထူးသဖြင့် — ကိုယ့်နောက်မှာ တစ်ယောက်ယောက်ရှိနေမှန်း သိနေပေမယ့် **သူ့မျက်နှာကို ဘယ်တော့မှ မမြင်နိုင်တဲ့အခါမျိုး။**",
    p: "From a little way behind him at standing height. ⚠️ THE BACK OF THUN MIN'S HEAD AND "
      + "SHOULDERS FILLS THE LOWER FRAME, sharp, and the room runs away past him to the far wall. "
      + "⚠️ THE ROOM BEYOND HIM IS COMPLETELY EMPTY. ⚠️ HE HAS TURNED HIS HEAD A FEW DEGREES AS "
      + "THOUGH TOWARDS SOMETHING BEHIND HIM AND HAS NOT TURNED HIS BODY. Flat grey daylight, the "
      + "far corners dim.",
    u: ["အထူးသဖြင့်—", "ကိုယ့်နောက်မှာ တစ်ယောက်ယောက်ရှိနေမှန်း သိနေပေမယ့်…",
      "သူ့မျက်နှာကို ဘယ်တော့မှ မမြင်နိုင်တဲ့အခါမျိုး။"] },

  { t: "I Live Alone", l: "ဧည့်ခန်း", k: "hand", tm: "day", unseen: true, w: ["ထွန်းမင်း", "ဖုန်း"],
    g: "ရန်ကုန်မြို့စွန်က အိမ်ဟောင်းလေးမှာ တစ်ယောက်တည်းနေတယ်။ နေ့ခင်းဘက် ဖုန်းနဲ့အလုပ်လုပ်တယ်။",
    p: "Close in on two hands at the scratched table. ⚠️ ONE HOLDS A PHONE FLAT AND THE OTHER IS "
      + "MOVING ACROSS ITS GLASS WITH TWO FINGERS SPREAD, the way somebody reads a screen by "
      + "touch, a thin wired earphone running up out of frame. ⚠️ THE EYES AND FACE ARE NOT IN THE "
      + "PICTURE. The glass of water set square beside his elbow, the table clear everywhere else. "
      + "Flat grey daylight.",
    u: ["ကျွန်တော် ရန်ကုန်မြို့စွန်က အိမ်ဟောင်းလေးတစ်လုံးမှာ တစ်ယောက်တည်းနေတယ်။",
      "နေ့ခင်းဘက်မှာ အိမ်ကနေပဲ ဖုန်းနဲ့အလုပ်လုပ်တယ်။", "ညဘက်ဆို အသံစာအုပ်တွေ နားထောင်တယ်။"] },

  /* ── II · တရှပ်… တရှပ်… ──────────────────────────────────────────────── */
  { t: "Footsteps at the Back of the House", c: [[1, "stinger"]], l: "နောက်ဖေး", k: "back",
    tm: "dark", unseen: true, w: ["နောက်ဖေး"],
    g: "⚠️ တစ်ညမှာတော့ — အိမ်နောက်ဖေးကနေ ခြေသံ — **တရှပ်… တရှပ်…** ခြေဗလာနဲ့ လမ်းလျှောက်နေသလို။",
    p: "Along the bare strip behind the house at night. ⚠️ THE ONLY LIGHT IS WHAT SPILLS FROM ONE "
      + "LOW WINDOW onto the soft earth, and it reaches about a yard. The plain back wall with its "
      + "shut door, the corrugated fence close on the other side, a water drum. ⚠️ THE GROUND IS "
      + "BARE, SOFT AND COMPLETELY UNMARKED. ⚠️ THERE IS NOBODY IN THE PICTURE and everything past "
      + "the fence is black.",
    u: ["တစ်ညမှာတော့—", "အိမ်နောက်ဖေးကနေ ခြေသံကြားလိုက်ရတယ်။", "တရှပ်… တရှပ်…",
      "ခြေဗလာနဲ့ လမ်းလျှောက်နေသလို။"] },

  { t: "It Came Into the Kitchen", l: "မီးဖိုချောင်", k: "kitchen",
    tm: "dark", unseen: true, w: ["မီးဖိုချောင်"],
    g: "ကျွန်တော် နားစွင့်လိုက်တယ်။ အသံက မီးဖိုချောင်ထဲ ဝင်လာတယ်။",
    p: "In the kitchen at chest height, almost no light. ⚠️ THE BACK DOOR STANDS SHUT WITH ITS "
      + "SLIDE BOLT ACROSS, and a thin wash of street light through the small window picks out the "
      + "edge of the tiled counter, the kettle and the rim of the water drum. ⚠️ EVERY SURFACE IS "
      + "CLEAR AND THE ROOM IS EMPTY. ⚠️ NOTHING IS MOVING AND THE BOLT IS HOME. The corners go to "
      + "black.",
    u: ["ကျွန်တော် နားစွင့်လိုက်တယ်။", "အသံက မီးဖိုချောင်ထဲ ဝင်လာတယ်။", "ပြီးတော့—"] },

  { t: "It Stopped Behind My Chair", l: "ဧည့်ခန်း", k: "chair",
    tm: "bulb", unseen: true, w: ["ဧည့်ခန်း", "ထွန်းမင်း"],
    g: "⚠️ ကျွန်တော့်ထိုင်ခုံနောက်မှာ ရပ်သွားတယ်။ “ဘယ်သူလဲ?” — ဘာမှမဖြေဘူး။",
    p: "From standing height behind and above the wooden chair, looking down past its back. ⚠️ "
      + "THUN MIN IS SEATED IN IT, SEEN FROM BEHIND, the back of his head and one shoulder sharp "
      + "against the lit room beyond. ⚠️ HIS HEAD HAS COME UP AND IS HELD VERY STILL. ⚠️ THE FLOOR "
      + "BETWEEN CAMERA AND THE CHAIR IS BARE TILE AND THERE IS NOTHING STANDING ON IT. One bare "
      + "bulb, the corners dim.",
    u: ["ကျွန်တော့်ထိုင်ခုံနောက်မှာ ရပ်သွားတယ်။", "“ဘယ်သူလဲ?”", "ကျွန်တော် မေးလိုက်တယ်။",
      "ဘာမှမဖြေဘူး။"] },

  { t: "A Woman Breathing at My Ear", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "min", tm: "bulb",
    unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ ကျွန်တော့်နားနားကပ်ပြီး — မိန်းမတစ်ယောက် အသက်ရှူနေတဲ့အသံ။ ဟား… ဟား…",
    p: "Close on Thun Min's head and one ear from the side, ⚠️ THE EAR AND THE HAIR AT HIS TEMPLE "
      + "SHARP AND FILLING ONE THIRD OF THE FRAME. ⚠️ HE IS COMPLETELY RIGID — the jaw set, the "
      + "tendon standing in his neck, his open eyes fixed on nothing. ⚠️ THE SPACE BESIDE HIS EAR "
      + "IS EMPTY AND IN DEEP SHADOW AND NOTHING IS IN IT. Warm bulb light along his cheekbone; "
      + "black behind him.",
    u: ["ဒါပေမယ့် ကျွန်တော့်နားနားကပ်ပြီး—", "မိန်းမတစ်ယောက် အသက်ရှူနေတဲ့အသံ ကြားရတယ်။",
      "ဟား…", "ဟား…"] },

  { t: "I Reached Behind Me", l: "ဧည့်ခန်း", k: "hand", tm: "bulb", unseen: true, w: ["ထွန်းမင်း"],
    g: "ကျွန်တော် လက်ကို နောက်ပြန်ဆန့်ပြီး စမ်းကြည့်တယ်။ ဘာမှမရှိဘူး။",
    p: "Close in on one hand reaching backwards into the air behind a shoulder, ⚠️ THE FINGERS "
      + "SPREAD AND SEARCHING, the arm twisted awkwardly back at the elbow. ⚠️ THE HAND IS CLOSING "
      + "ON NOTHING AND THE AIR AROUND IT IS EMPTY. Beyond the fingers the room falls away out of "
      + "focus into warm bulb light and dark. ⚠️ NOTHING IS WITHIN REACH OF IT ANYWHERE.",
    u: ["ကျွန်တော် လက်ကို နောက်ပြန်ဆန့်ပြီး စမ်းကြည့်တယ်။", "ဘာမှမရှိဘူး။", "အဲဒီအချိန်—"] },

  { t: "You Cannot See Me, Can You", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "min", tm: "bulb",
    unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ မိန်းမအသံတစ်သံ — **“နင် ငါ့ကို မမြင်ရဘူးမဟုတ်လား…”** — ကျွန်တော် တစ်ကိုယ်လုံး အေးခဲသွားတယ်။",
    p: "Close on Thun Min, ⚠️ HIS MOUTH SLIGHTLY OPEN AND HIS BREATH HELD, the skin at his temple "
      + "wet. ⚠️ HIS EYES ARE WIDE AND STILL DIRECTED AT NOTHING, which is the whole horror of the "
      + "frame — there is nowhere for them to go. Both hands have come up and are gripping the "
      + "arms of the chair, the knuckles pale. Warm bulb light from above and in front; the room "
      + "behind him black.",
    u: ["မိန်းမအသံတစ်သံ ကြားလိုက်ရတယ်။", "“နင် ငါ့ကို မမြင်ရဘူးမဟုတ်လား…”",
      "ကျွန်တော် တစ်ကိုယ်လုံး အေးခဲသွားတယ်။"] },

  /* ── III · ဇော်ရဲ ────────────────────────────────────────────────────── */
  { t: "I Called Zaw Ye", l: "ဧည့်ခန်း", k: "ye", tm: "day", unseen: true, w: ["ဇော်ရဲ"],
    g: "နောက်နေ့မှာ သူငယ်ချင်း ဇော်ရဲကို ခေါ်လိုက်တယ်။ သူက အခန်းတွေ လိုက်စစ်ပေးတယ်။",
    p: "Close on Zaw Ye standing in the living-room doorway in flat grey daylight, ⚠️ HIS HEAD "
      + "TURNED AWAY FROM CAMERA AND LOOKING OFF INTO THE NEXT ROOM, one hand flat on the "
      + "door frame. ⚠️ HIS FACE IS COMPLETELY UNTROUBLED — he is checking because he was asked "
      + "to. Checked shirt open over a white vest, a phone in the pocket. The chalky wall soft "
      + "behind him.",
    u: ["နောက်နေ့မှာ ကျွန်တော့်သူငယ်ချင်း ဇော်ရဲကို ခေါ်လိုက်တယ်။",
      "သူက အိမ်လာပြီး အခန်းတွေ လိုက်စစ်ပေးတယ်။", "“ဘာမှမရှိပါဘူးကွာ။ မင်း အတွေးလွန်နေတာဖြစ်မယ်”"] },

  { t: "Stay With Me Tonight", l: "ဧည့်ခန်း", k: "wide", tm: "bulb", unseen: true,
    w: ["ဧည့်ခန်း", "ထွန်းမင်း", "ဇော်ရဲ"],
    g: "“ညကျရင် ငါနဲ့အတူနေကြည့်” — သူ သဘောတူတယ်။ နှစ်ယောက် ဧည့်ခန်းထဲမှာ ထိုင်နေကြတယ်။",
    p: "Wide on the living room under one bare bulb. ⚠️ THUN MIN IS IN THE WOODEN CHAIR AND ZAW YE "
      + "IS SITTING ON THE FLOOR WITH HIS BACK TO THE WALL A FEW FEET AWAY, both facing into the "
      + "room, neither looking at the other. ⚠️ THE ROOM HOLDS ONLY THE TWO OF THEM. The mirror on "
      + "the wall shows a plain lit stretch of the opposite wall and nothing else. The window "
      + "black behind the grille.",
    u: ["ကျွန်တော် သူ့ကို မယုံဘူး။", "“ညကျရင် ငါနဲ့အတူနေကြည့်”", "သူ သဘောတူတယ်။", "အဲဒီည—",
      "ကျွန်တော်တို့နှစ်ယောက် ဧည့်ခန်းထဲမှာ ထိုင်နေကြတယ်။"] },

  { t: "Midnight, and It Came Back", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "floor", tm: "bulb",
    unseen: true, w: ["ဧည့်ခန်း"],
    g: "ည ၁၂ နာရီလောက်မှာ — **တရှပ်… တရှပ်…** ခြေသံ ပြန်ကြားရတယ်။",
    p: "A few inches above the floor tiles, level along them towards the kitchen doorway. ⚠️ THE "
      + "WORN GREEN-GREY TILES RUN AWAY FROM CAMERA AND THE DOORWAY STANDS OPEN AND BLACK AT THE "
      + "END OF THEM. ⚠️ THE FLOOR IS BARE AND THERE IS NOTHING STANDING ON IT ANYWHERE. Two pairs "
      + "of bare feet at the frame edge, both still. Warm bulb light across the tile, the doorway "
      + "taking none of it.",
    u: ["ည ဆယ့်နှစ်နာရီလောက်မှာ—", "တရှပ်… တရှပ်…", "ခြေသံ ပြန်ကြားရတယ်။",
      "ကျွန်တော် ဇော်ရဲလက်ကို ဆုပ်လိုက်တယ်။", "“ကြားလား?”"] },

  /* ── IV · မင်းနောက်မှာ မိန်းမတစ်ယောက် ────────────────────────────────── */
  { t: "He Would Not Answer", l: "ဧည့်ခန်း", k: "ye", tm: "bulb", unseen: true, w: ["ဇော်ရဲ"],
    g: "သူ မဖြေဘူး။ “ဇော်ရဲ?” — သူ့အသက်ရှူသံ မြန်လာတယ်။",
    p: "Close on Zaw Ye against the wall, ⚠️ HIS EYES WIDE AND FIXED PAST CAMERA AT SOMETHING "
      + "ACROSS THE ROOM, not blinking, his mouth open and his breathing visibly fast at the "
      + "throat. ⚠️ HE HAS NOT MOVED AND HE IS NOT GOING TO. One hand is flat on the tiles beside "
      + "him taking his weight. Warm bulb light hard on one side of his face, the other in shadow.",
    u: ["သူ မဖြေဘူး။", "“ဇော်ရဲ?”", "သူ့အသက်ရှူသံ မြန်လာတယ်။", "“ထွန်းမင်း…”", "“ဘာလဲ?”"] },

  { t: "There Is a Woman Standing Behind You", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "behind",
    tm: "bulb", unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ **“မင်းနောက်မှာ မိန်းမတစ်ယောက် ရပ်နေတယ်”** — ကျွန်တော့်ရင်ခုန်သံ ရပ်သွားသလိုပဲ။",
    p: "From a little way behind Thun Min at standing height, the back of his head and shoulders "
      + "sharp in the lower frame. ⚠️ THE ROOM BEHIND HIM FALLS AWAY INTO WARM BULB LIGHT AND "
      + "DARK, and ⚠️ IN THE DEEP SHADOW BEYOND HIM THERE IS A PALE VERTICAL SHAPE, SO FAR OUT OF "
      + "FOCUS THAT NOTHING ABOUT IT RESOLVES — no face, no edge, no detail of any kind. ⚠️ IT "
      + "COULD BE A WALL, A CURTAIN OR A PERSON AND THE PICTURE DOES NOT SAY.",
    u: ["“မင်းနောက်မှာ မိန်းမတစ်ယောက် ရပ်နေတယ်”", "ကျွန်တော့်ရင်ခုန်သံ ရပ်သွားသလိုပဲ။",
      "“ဘယ်လိုပုံစံလဲ?”"] },

  { t: "White Blouse, Long Hair", l: "ဧည့်ခန်း", k: "ye", tm: "bulb", unseen: true, w: ["ဇော်ရဲ"],
    g: "ဇော်ရဲက အသံတုန်တုန်နဲ့ — “အင်္ကျီအဖြူဝတ်ထားတယ်… ဆံပင်ရှည်တယ်…” — ခဏတိတ်သွားတယ်။",
    p: "Close on Zaw Ye, pushed in tighter, ⚠️ HIS LIPS MOVING ON SHORT BROKEN PHRASES AND "
      + "VISIBLY TREMBLING, his eyes still locked past camera and still not blinking. ⚠️ THE "
      + "COLOUR HAS GONE OUT OF HIS FACE. He has pressed himself back against the wall so hard "
      + "that his shoulders are lifted. Warm bulb light; whatever he is looking at throws no light "
      + "back onto him.",
    u: ["ဇော်ရဲက အသံတုန်တုန်နဲ့—", "“အင်္ကျီအဖြူဝတ်ထားတယ်… ဆံပင်ရှည်တယ်…”", "ခဏတိတ်သွားတယ်။",
      "“ဒါပေမယ့်…”", "“ဘာလဲကွ!”"] },

  { t: "There Are No Eyes in Her Face", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "her",
    tm: "bulb", hollow: true, w: ["မိန်းမ"],
    g: "⚠️ **“သူ့မျက်နှာမှာ မျက်လုံးမရှိဘူး”**",
    p: "⚠️ THIS IS ZAW YE'S VIEW AND IT IS SHARP EDGE TO EDGE. Close on the woman standing in the dim half of the room, ⚠️ AN ORDINARY BURMESE "
      + "WOMAN OF ABOUT THIRTY IN A PLAIN WHITE LONG-SLEEVED BLOUSE, long straight untied hair "
      + "past her shoulders, her face calm and her head level. ⚠️ SHE IS PERFECTLY STILL AND HER "
      + "ARMS ARE AT HER SIDES. Warm bulb light reaches only one side of her.",
    u: ["“သူ့မျက်နှာမှာ မျက်လုံးမရှိဘူး”"] },

  { t: "But He Can See Me", l: "ဧည့်ခန်း", k: "min", tm: "bulb",
    unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ ကျွန်တော့်နားဘေးမှာ မိန်းမအသံ ထပ်ကြားရတယ် — **“သူကတော့ ငါ့ကို မြင်ရတယ်နော်…”**",
    p: "Close on Thun Min from the side, ⚠️ HIS HEAD TURNED SHARPLY TOWARDS THE EMPTY AIR BESIDE "
      + "HIS OWN EAR AND HIS OPEN EYES FINDING NOTHING THERE. ⚠️ HIS MOUTH IS OPEN AND HIS WHOLE "
      + "FACE IS DOING SOMETHING HIS EYES CANNOT FOLLOW. ⚠️ THE SPACE HE HAS TURNED TOWARDS IS "
      + "EMPTY AND IN DEEP SHADOW. Warm bulb light along his jaw; black on every side of him.",
    u: ["အဲဒီအချိန်—", "ကျွန်တော့်နားဘေးမှာ မိန်းမအသံ ထပ်ကြားရတယ်။", "“သူကတော့ ငါ့ကို မြင်ရတယ်နော်…”"] },

  { t: "He Ran", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "door", tm: "bulb", unseen: true,
    w: ["ဧည့်ခန်း"],
    g: "ဇော်ရဲ ရုတ်တရက် အော်လိုက်တယ်။ ပြီးတော့ တံခါးဖွင့်ပြီး ပြေးထွက်သွားတယ်။",
    p: "Square on the front door from inside the room. ⚠️ IT STANDS WIDE OPEN ONTO BLACK and the "
      + "night beyond the threshold takes no light at all. A rubber slipper lies on its side on "
      + "the tiles halfway between camera and the opening, the other one gone. ⚠️ THE ROOM IS "
      + "EMPTY AND NOTHING IS IN THE DOORWAY. One bare bulb behind camera, the light stopping dead "
      + "at the sill.",
    u: ["ဇော်ရဲ ရုတ်တရက် အော်လိုက်တယ်။", "ပြီးတော့ အိမ်တံခါးဖွင့်ပြီး ပြေးထွက်သွားတယ်။"] },

  /* ── V · မင်းရဲ့အရိပ်လိုပဲ ──────────────────────────────────────────── */
  { t: "He Never Came Back", l: "ဧည့်ခန်း", k: "insert", tm: "day", unseen: true, w: ["ဖုန်း"],
    g: "နောက်မနက် ဇော်ရဲကို ဖုန်းဆက်တယ်။ သူက ကျွန်တော့်အိမ်ကို ဘယ်တော့မှ ပြန်မလာတော့ဘူးတဲ့။",
    p: "Tight insert straight down on the phone lying face up on the scratched table in flat grey "
      + "daylight. ⚠️ THE SCREEN IS LIT AND SHOWS A PLAIN CALL-IN-PROGRESS PANEL — a large round "
      + "grey avatar disc with no photograph in it and a short name in small plain letters above "
      + "it. ⚠️ NO HAND IS TOUCHING IT. The glass smeared, the case grey at the corners, the "
      + "table clear all round it.",
    u: ["နောက်မနက်မှာ ဇော်ရဲကို ဖုန်းဆက်တယ်။", "သူက ကျွန်တော့်အိမ်ကို ဘယ်တော့မှ ပြန်မလာတော့ဘူးတဲ့။",
      "ဒါပေမယ့် သူပြောသွားတဲ့ စကားတစ်ခွန်းကြောင့် ကျွန်တော် ပိုကြောက်သွားတယ်။"] },

  { t: "She Was Not Standing Behind You", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "behind",
    tm: "day", unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ “မနေ့ညက မိန်းမကြီး မင်းနောက်မှာ ရပ်နေတာ မဟုတ်ဘူး” — **“မင်းလှုပ်သလို လိုက်လှုပ်နေတာ”**",
    p: "From behind Thun Min at standing height in flat grey daylight, ⚠️ THE BACK OF HIS HEAD AND "
      + "SHOULDERS SHARP IN THE LOWER FRAME AND THE EMPTY ROOM BEYOND HIM. ⚠️ HE IS STANDING NOW, "
      + "NOT SEATED, HOLDING THE PHONE TO HIS EAR, and his free hand has stopped halfway to the "
      + "back of his own neck. ⚠️ THE ROOM BEHIND HIM IS COMPLETELY EMPTY AND EVENLY LIT. No "
      + "shadow on the floor but his own.",
    u: ["“ထွန်းမင်း… မနေ့ညက မိန်းမကြီး မင်းနောက်မှာ ရပ်နေတာ မဟုတ်ဘူး”", "“ဒါဆို?”",
      "“မင်းလမ်းလျှောက်တဲ့အခါ သူက မင်းလှုပ်သလို လိုက်လှုပ်နေတာ”"] },

  { t: "Like Your Shadow", l: "ဧည့်ခန်း", k: "floor", tm: "day",
    unseen: true, w: ["ဧည့်ခန်း"],
    g: "⚠️ “မင်းညာဘက်လှည့်ရင် သူလည်း ညာဘက်လှည့်တယ်။ မင်းခေါင်းငုံ့ရင် သူလည်း ခေါင်းငုံ့တယ်” — **“မင်းရဲ့အရိပ်လိုပဲကွ…”**",
    p: "A few inches above the floor tiles in flat grey daylight. ⚠️ ONE PAIR OF BARE FEET STANDS "
      + "IN THE MIDDLE OF THE FRAME and the worn green-grey tiles run away empty on every side of "
      + "them. ⚠️ THE LIGHT IS SO FLAT AND SHADOWLESS THAT THE FEET CAST ALMOST NOTHING — a faint "
      + "grey smear and no more. ⚠️ THERE IS NO SECOND PAIR OF FEET AND NO SECOND SHADOW ANYWHERE "
      + "ON THE FLOOR.",
    u: ["“ဘာကိုဆိုလိုတာလဲ?”", "“မင်းညာဘက်လှည့်ရင် သူလည်း ညာဘက်လှည့်တယ်။ မင်းခေါင်းငုံ့ရင် သူလည်း ခေါင်းငုံ့တယ်”",
      "သူ ခဏတိတ်သွားတယ်။", "“မင်းရဲ့အရိပ်လိုပဲကွ…”"] },

  /* ── VI · ခြေသံနှစ်စုံ ──────────────────────────────────────────────── */
  { t: "Two Sets of Footsteps", l: "ဧည့်ခန်း", k: "wide", tm: "bulb", unseen: true,
    w: ["ဧည့်ခန်း", "ထွန်းမင်း"],
    g: "အဲဒီနေ့ကစပြီး ခြေသံကို နေ့တိုင်းကြားရတယ်။ လမ်းလျှောက်ရင် ခြေသံနှစ်စုံ။ ရပ်လိုက်ရင် နှစ်စုံလုံး ရပ်တယ်။",
    p: "Wide on the living room under one bare bulb. ⚠️ THUN MIN IS WALKING ACROSS THE MIDDLE OF "
      + "IT, MID-STRIDE, one hand out and just brushing the table edge as he passes, his pace "
      + "even and his shoulders square. ⚠️ THE REST OF THE ROOM IS "
      + "EMPTY AND THE FLOOR BEHIND HIM IS BARE. The mirror on the wall shows a lit stretch of the "
      + "opposite wall and nothing else. Corners dim.",
    u: ["အဲဒီနေ့ကစပြီး ကျွန်တော် အိမ်ထဲမှာ ခြေသံကို နေ့တိုင်းကြားရတယ်။", "ကျွန်တော် လမ်းလျှောက်ရင်—",
      "ခြေသံနှစ်စုံ။", "ကျွန်တော် ရပ်လိုက်ရင်—", "နှစ်စုံလုံး ရပ်တယ်။"] },

  { t: "I Decided to Test It", l: "ဧည့်ခန်း", k: "min", tm: "bulb", unseen: true, w: ["ထွန်းမင်း"],
    g: "တစ်နေ့မှာတော့ စမ်းကြည့်ဖို့ ဆုံးဖြတ်လိုက်တယ်။ ဧည့်ခန်းအလယ်မှာ ရပ်လိုက်တယ်။",
    p: "Close on Thun Min standing in the middle of the room, ⚠️ HIS HEAD UP AND VERY SLIGHTLY "
      + "TILTED, his open eyes directed at nothing and his whole attention plainly behind him. ⚠️ "
      + "HIS MOUTH IS SHUT AND HIS JAW IS SET — this is somebody doing something deliberate and "
      + "frightening. Both hands hang open at his sides. Warm bulb light from above, the room "
      + "behind him out of focus and dark.",
    u: ["တစ်နေ့မှာတော့ စမ်းကြည့်ဖို့ ဆုံးဖြတ်လိုက်တယ်။", "ဧည့်ခန်းအလယ်မှာ ရပ်လိုက်တယ်။",
      "ပြီးတော့ ခြေတစ်လှမ်းလှမ်းတယ်။"] },

  { t: "Dauk. Ta-Shut.", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "floor", tm: "bulb",
    unseen: true, w: ["ဧည့်ခန်း"],
    g: "⚠️ **ဒေါက်။** နောက်က — **တရှပ်။** နောက်တစ်လှမ်း။ **ဒေါက်။ တရှပ်။**",
    p: "A few inches above the floor tiles, level along them. ⚠️ ONE BARE FOOT IS COMING DOWN FLAT "
      + "ON THE TILE IN THE NEAR FRAME, caught at the instant it lands, the other lifted behind "
      + "it. ⚠️ THE TILE BEHIND BOTH FEET IS BARE, CLEAN AND COMPLETELY EMPTY ALL THE WAY TO THE "
      + "FAR WALL. ⚠️ THERE IS NO SECOND FOOT ANYWHERE IN THE PICTURE. Warm bulb light raking "
      + "across the worn glaze.",
    u: ["ဒေါက်။", "နောက်က—", "တရှပ်။", "နောက်တစ်လှမ်း။", "ဒေါက်။", "တရှပ်။"] },

  { t: "My Fingers Found Cold Hair", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "hand", tm: "bulb",
    unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ ကျွန်တော် ရပ်လိုက်တယ်။ နောက်က ခြေသံလည်း ရပ်သွားတယ်။ လက်ကို နောက်ပြန်ဆန့်လိုက်တော့ — **အေးစက်နေတဲ့ ဆံပင်တွေကို ထိမိသွားတယ်။**",
    p: "Close in on one hand reaching backwards over a shoulder into near-darkness, ⚠️ THE "
      + "FINGERS CLOSED AND HOLDING SOMETHING: a thick fall of long, straight, black hair that "
      + "runs out of frame below the wrist. ⚠️ THE HAIR IS THE ONLY THING IN THE PICTURE BESIDES "
      + "THE HAND and whatever it belongs to is entirely out of frame and unlit. ⚠️ THE HAND HAS "
      + "GONE COMPLETELY RIGID. Warm bulb light on the knuckles; black past them.",
    u: ["ကျွန်တော် ရပ်လိုက်တယ်။", "နောက်က ခြေသံလည်း ရပ်သွားတယ်။", "ဒါပေမယ့်—",
      "ဒီတစ်ခါ ကျွန်တော် နောက်ပြန်လှည့်မကြည့်နိုင်ပေမယ့်…", "လက်ကို နောက်ပြန်ဆန့်လိုက်တယ်။",
      "လက်ချောင်းတွေက—", "အေးစက်နေတဲ့ ဆံပင်တွေကို ထိမိသွားတယ်။"] },

  /* ── VII · မျက်လုံးပြန်မြင်ချင်လား ──────────────────────────────────── */
  { t: "Do You Want Your Eyes Back", l: "ဧည့်ခန်း", k: "min", tm: "bulb",
    unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ မိန်းမအသံက တိုးတိုးလေး — **“နင် မျက်လုံးပြန်မြင်ချင်လား…”** — ကျွန်တော် တောင့်သွားတယ်။",
    p: "Close on Thun Min, ⚠️ HIS ARM STILL TWISTED BACK AND HIS WHOLE BODY LOCKED, the head very "
      + "slightly turned as though towards something just behind his own shoulder. ⚠️ HIS OPEN "
      + "EYES ARE WIDE AND STILL POINTED AT NOTHING. His mouth has come open on a word that has "
      + "not arrived. Warm bulb light hard on one cheek; everything behind him black and unfocused.",
    u: ["အဲဒီအချိန်—", "မိန်းမအသံက တိုးတိုးလေး ပြောတယ်။", "“နင် မျက်လုံးပြန်မြင်ချင်လား…”",
      "ကျွန်တော် တောင့်သွားတယ်။", "“ဘာ?”"] },

  { t: "I Can Give Them Back", l: "ဧည့်ခန်း", k: "min", tm: "bulb", unseen: true, w: ["ထွန်းမင်း"],
    g: "**“ငါ ပြန်ပေးလို့ရတယ်”** — “ဘယ်လိုလုပ်ပြီး?” — သူ မဖြေဘူး။",
    p: "Close on Thun Min, pushed in tighter, ⚠️ HIS FACE HELD PERFECTLY STILL AND HIS LIPS BARELY "
      + "PARTED ON A SHORT QUESTION. ⚠️ SOMETHING HAS CHANGED IN HIM — the fear is still there but "
      + "it is no longer the only thing; he is listening to an offer. The arm has come back down "
      + "to his side. Warm bulb light from above, the room behind him entirely out of focus.",
    u: ["“ငါ ပြန်ပေးလို့ရတယ်”", "“ဘယ်လိုလုပ်ပြီး?”", "သူ မဖြေဘူး။"] },

  { t: "Two Cold Hands on My Face", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "insert",
    tm: "bulb", unseen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ ကျွန်တော့်မျက်နှာပေါ်ကို အေးစက်နေတဲ့ လက်နှစ်ဖက် တင်လာတယ်။",
    p: "Tight insert on a man's face from the front, ⚠️ TWO WOMAN'S HANDS COMING IN FROM BEHIND "
      + "HIS HEAD AND SETTLING OVER HIS EYES, the palms flat and the fingers spread back across "
      + "his temples. ⚠️ THE HANDS ARE ORDINARY, WHOLE AND UNMARKED and the arms run out of frame "
      + "into darkness. ⚠️ ONLY HIS MOUTH AND JAW ARE VISIBLE BELOW THEM and his lips are parted. "
      + "Warm bulb light across the knuckles; black beyond.",
    u: ["ကျွန်တော့်မျက်နှာပေါ်ကို အေးစက်နေတဲ့ လက်နှစ်ဖက် တင်လာတယ်။", "ပြီးတော့—",
      "ကျွန်တော့်မျက်လုံးနှစ်ဖက်ကို ဖိလိုက်တယ်။"] },

  { t: "Then a Flash of Light", l: "ဧည့်ခန်း", k: "min", tm: "bulb",
    unseen: true, w: ["ထွန်းမင်း"],
    g: "ကျွန်တော် အော်လိုက်တယ်။ နာကျင်မှုက ခေါင်းတစ်ခုလုံးထဲ ပျံ့သွားတယ်။ ပြီးတော့ — အလင်းရောင်တစ်ချက်။",
    p: "Close on Thun Min's head thrown back, ⚠️ HIS MOUTH WIDE OPEN AND THE TENDONS STANDING OUT "
      + "IN HIS NECK, both his own hands come up and gripping the wrists at his temples. ⚠️ HIS "
      + "EYES ARE COVERED BY THE HANDS AND NOT IN THE PICTURE. ⚠️ THE SKIN OF HIS FACE AND THROAT "
      + "IS WHOLE AND UNMARKED. ⚠️ A HARD WHITE LIGHT IS COMING FROM BETWEEN THE FINGERS and "
      + "blowing out the edges of them.",
    u: ["ကျွန်တော် အော်လိုက်တယ်။", "နာကျင်မှုက ခေါင်းတစ်ခုလုံးထဲ ပျံ့သွားတယ်။", "ပြီးတော့—",
      "အလင်းရောင်တစ်ချက်။"] },

  /* ── VIII · မြင်ရပြီ ─────────────────────────────────────────────────── */
  { t: "I Can See", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "wide", tm: "bulb", seen: true,
    w: ["ဧည့်ခန်း"],
    g: "⚠️ ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။ **မြင်ရပြီ။** ငါးနှစ်အတွင်း ပထမဆုံးအကြိမ်။",
    p: "⚠️ THE FIRST SHARP FRAME IN THE FILM. Wide on the living room under one bare bulb, ⚠️ "
      + "EVERYTHING IN IT SUDDENLY LEGIBLE EDGE TO EDGE — the grain of the scratched table, the "
      + "chipped glaze on each floor tile, the flex of the bulb, the grille across the window, the "
      + "tall plain mirror on the wall. ⚠️ CRISP, DEEP AND FULLY RESOLVED WHERE EVERY SHOT BEFORE "
      + "IT WAS SURFACES AND BLUR. ⚠️ THE ROOM IS EMPTY OF PEOPLE.",
    u: ["ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။", "မြင်ရပြီ။", "ငါးနှစ်အတွင်း ပထမဆုံးအကြိမ်—",
      "ကျွန်တော် မြင်ရပြီ။"] },

  { t: "A Table. A Window. A Door.", l: "ဧည့်ခန်း", k: "insert", tm: "bulb", seen: true,
    w: ["ဧည့်ခန်း"],
    g: "စားပွဲ။ ပြတင်းပေါက်။ အခန်းတံခါး။ ကျွန်တော် မျက်ရည်ကျလာတယ်။",
    p: "Tight insert on the corner of the scratched wooden table, ⚠️ HELD IN EXTRAORDINARY DETAIL "
      + "— every scratch in the varnish, the ring left by the glass, a single hair, the grain "
      + "running out of the corner. ⚠️ ONE HAND RESTS FLAT ON IT, NOT SEARCHING, SIMPLY LOOKING. "
      + "⚠️ THE FOCUS IS PERFECT AND THE DEPTH IS SHALLOW, THE FAR WALL SOFT TONE. Warm bulb light "
      + "raking low across the wood.",
    u: ["စားပွဲ။", "ပြတင်းပေါက်။", "အခန်းတံခါး။", "ကျွန်တော် မျက်ရည်ကျလာတယ်။"] },

  { t: "Something in the Room Is Wrong", l: "ဧည့်ခန်း", k: "mirror",
    tm: "bulb", seen: true, glass: true, w: ["မှန်"],
    g: "ဒါပေမယ့် — အခန်းထဲမှာ တစ်ခုခု မမှန်ဘူး။ ကျွန်တော့်ရှေ့မှာ မှန်တစ်ချပ်ရှိတယ်။",
    p: "Square on the tall plain wall mirror in its thin dark frame, the glass filling most of "
      + "the picture. ⚠️ THE GLASS IS OLD — slightly grey, spotted at the lower corners, one fine "
      + "scratch across an edge. ⚠️ THE REFLECTION SHOWS THE OPPOSITE WALL, THE EDGE OF THE "
      + "SCRATCHED TABLE AND THE BARE BULB ON ITS FLEX, AND NOTHING ELSE. ⚠️ NOBODY IS IN THE "
      + "REFLECTION. Warm bulb light, no highlight blown out on the glass.",
    u: ["ဒါပေမယ့်—", "အခန်းထဲမှာ တစ်ခုခု မမှန်ဘူး။", "ကျွန်တော့်ရှေ့မှာ မှန်တစ်ချပ်ရှိတယ်။"] },

  { t: "My Eyes Are Gone", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "mirror", tm: "bulb",
    seen: true, glass: true, hollow: true, w: ["မှန်", "ထွန်းမင်း"],
    g: "⚠️ မှန်ထဲမှာ ကျွန်တော့်ကိုယ်ကျွန်တော် မြင်ရတယ်။ ဒါပေမယ့် — **ကျွန်တော့်မျက်လုံးနှစ်လုံးက မရှိတော့ဘူး။**",
    p: "Square on the mirror, pushed in close on the glass. ⚠️ THE REFLECTION SHOWS THUN MIN'S "
      + "HEAD AND SHOULDERS, FACING IT, AND THE PLAIN LIT WALL BEHIND HIM — nothing else is in the "
      + "reflection. ⚠️ IT IS UNMISTAKABLY HIS OWN FACE: the same hair, the same jaw, the same "
      + "grey t-shirt. ⚠️ HIS MOUTH HAS COME OPEN. Warm bulb light even across the glass; the "
      + "frame of the mirror inside the picture on both sides.",
    u: ["မှန်ထဲမှာ—", "ကျွန်တော့်ကိုယ်ကျွန်တော် မြင်ရတယ်။", "ဒါပေမယ့်—",
      "ကျွန်တော့်မျက်လုံးနှစ်လုံးက မရှိတော့ဘူး။", "အစား—",
      "မျက်လုံးရှိသင့်တဲ့နေရာမှာ အမည်းရောင်အပေါက်နှစ်ပေါက်။"] },

  /* ── IX · သူ့မျက်နှာမှာ ကျွန်တော့်မျက်လုံး ──────────────────────────── */
  { t: "A Laugh Behind Me", l: "ဧည့်ခန်း", k: "behind", tm: "bulb",
    seen: true, w: ["ဧည့်ခန်း", "ထွန်းမင်း"],
    g: "ကျွန်တော် အော်ပြီး နောက်ဆုတ်လိုက်တယ်။ နောက်ကနေ မိန်းမတစ်ယောက် ရယ်သံကြားရတယ်။",
    p: "From behind Thun Min at standing height, the back of his head and shoulders sharp in the "
      + "lower frame and ⚠️ THE ROOM BEYOND HIM NOW FULLY RESOLVED FOR THE FIRST TIME. ⚠️ HE IS "
      + "MID-TURN — the head come round towards one shoulder and the body beginning to follow it, "
      + "caught before the face arrives. ⚠️ THE LIT ROOM BEHIND HIM IS SHARP AND EMPTY. Warm bulb "
      + "light; the mirror on the far wall showing a plain stretch of the opposite wall.",
    u: ["ကျွန်တော် အော်ပြီး နောက်ဆုတ်လိုက်တယ်။", "အဲဒီအချိန်—",
      "နောက်ကနေ မိန်းမတစ်ယောက် ရယ်သံကြားရတယ်။", "ကျွန်တော် နောက်လှည့်လိုက်တယ်။"] },

  { t: "Her Face Has My Eyes", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "her", tm: "bulb",
    seen: true, eyes: true, w: ["မိန်းမ"],
    g: "⚠️ နောက်ကနေ မိန်းမရယ်သံ။ လှည့်လိုက်တော့ — အင်္ကျီအဖြူ၊ ဆံပင်ရှည်ရှည်။ **သူ့မျက်နှာမှာ ကျွန်တော့်မျက်လုံးနှစ်လုံး ရှိနေတယ်။**",
    p: "Close on the woman standing in the lit room, ⚠️ AN ORDINARY BURMESE WOMAN OF ABOUT THIRTY "
      + "IN A PLAIN WHITE LONG-SLEEVED BLOUSE, long straight untied hair past her shoulders, her "
      + "arms at her sides. ⚠️ SHE IS LOOKING STRAIGHT INTO THE LENS AND FOCUSING ON IT PROPERLY — "
      + "the first thing in this film that looks back. ⚠️ THE CORNERS OF HER MOUTH HAVE JUST "
      + "LIFTED. Warm bulb light full on her face, the room sharp behind her.",
    u: ["အင်္ကျီအဖြူနဲ့ မိန်းမတစ်ယောက်။", "ဆံပင်ရှည်ရှည်။", "သူ့မျက်နှာမှာ—",
      "ကျွန်တော့်မျက်လုံးနှစ်လုံး ရှိနေတယ်။"] },

  { t: "Do Not Run", l: "ဧည့်ခန်း", k: "her", tm: "bulb", seen: true, eyes: true, w: ["မိန်းမ"],
    g: "ကျွန်တော် ပြေးထွက်ဖို့ ကြိုးစားတယ်။ ဒါပေမယ့် — “မပြေးနဲ့” လို့ပြောတယ်။ ကျွန်တော် ရပ်သွားတယ်။",
    p: "Close on the woman, ⚠️ HER MOUTH MOVING ON TWO SHORT WORDS AND HER EYES HELD STEADY ON THE "
      + "LENS WITHOUT BLINKING. ⚠️ SHE HAS NOT MOVED TOWARDS CAMERA AND HER HANDS ARE STILL AT HER "
      + "SIDES — nothing about her posture is threatening, which is what makes it land. The white "
      + "sleeve, the fall of dark hair at her shoulder. Warm bulb light; the sharp lit room behind "
      + "her.",
    u: ["ကျွန်တော် ပြေးထွက်ဖို့ ကြိုးစားတယ်။", "ဒါပေမယ့် မိန်းမက—", "“မပြေးနဲ့”", "လို့ပြောတယ်။",
      "ကျွန်တော် ရပ်သွားတယ်။"] },

  { t: "Do You Remember Five Years Ago", l: "ဧည့်ခန်း", k: "mirror",
    tm: "bulb", seen: true, glass: true, eyes: true, w: ["မှန်", "မိန်းမ"],
    g: "သူက မှန်ရှေ့ကို ဖြည်းဖြည်း လျှောက်သွားတယ် — “နင် ငါးနှစ်အရင်က ဘာဖြစ်ခဲ့လဲ မှတ်မိလား?”",
    p: "Square on the mirror. ⚠️ THE WOMAN HAS WALKED IN FRONT OF THE GLASS AND IS STANDING WITH "
      + "HER BACK TO CAMERA, her white blouse and long dark hair filling the middle of the frame. "
      + "⚠️ THE REFLECTION SHOWS HER FACE, LOOKING STRAIGHT OUT OF THE GLASS, AND THE LIT ROOM "
      + "BEHIND HER — nothing else is in the reflection. ⚠️ HER REFLECTED EYES ARE FOCUSED ON "
      + "CAMERA. Warm bulb light; the old spotted glass.",
    u: ["သူက မှန်ရှေ့ကို ဖြည်းဖြည်း လျှောက်သွားတယ်။", "ပြီးတော့—",
      "“နင် ငါးနှစ်အရင်က ဘာဖြစ်ခဲ့လဲ မှတ်မိလား?”", "လို့ မေးတယ်။", "ကျွန်တော် မဖြေဘူး။"] },

  /* ── X · ငါက နင့်ကို ကယ်ခဲ့တဲ့လူ ───────────────────────────────────── */
  { t: "Five Years Ago", l: "မိုးလမ်း", k: "road", tm: "rain", w: ["မိုးလမ်း"],
    g: "ငါးနှစ်အရင်က — ကျွန်တော် ကားမတော်တဆမှုတစ်ခုဖြစ်ခဲ့တယ်။ အဲဒီနောက် မျက်စိကွယ်သွားခဲ့တာ။",
    p: "Along the wet road at night under one sodium lamp, heavy rain falling in long bright "
      + "streaks through the cone of it. ⚠️ THE TARMAC IS BLACK AND THROWING THE LIGHT BACK, the "
      + "shuttered shopfronts set back on one side and the concrete drain on the other. ⚠️ THE "
      + "ROAD IS COMPLETELY EMPTY — no car, no person, nothing in it anywhere. Everything beyond "
      + "the lamp is black.",
    u: ["ငါးနှစ်အရင်က—", "ကျွန်တော် ကားမတော်တဆမှုတစ်ခုဖြစ်ခဲ့တယ်။", "အဲဒီနောက် မျက်စိကွယ်သွားခဲ့တာ။"] },

  { t: "That Night You Were Not Alone", l: "ကားအတွင်း", k: "car",
    tm: "rain", w: ["ကားအတွင်း"],
    g: "⚠️ “အဲဒီညမှာ နင်တစ်ယောက်တည်း မဟုတ်ဘူး” — မိုးရွာနေတဲ့ည။ ကားရှေ့ခန်းမှာ ကျွန်တော်။ ဘေးမှာ မိန်းကလေးတစ်ယောက်။",
    p: "From the back seat between the two front headrests, looking forward. ⚠️ HEAVY RAIN IS "
      + "RUNNING DOWN THE WINDSCREEN AND THE WIPERS HAVE STOPPED MID-SWEEP, one street lamp "
      + "smeared through the wet glass and the instruments glowing green. ⚠️ THE DRIVER'S SEAT "
      + "HOLDS THE BACK OF A MAN'S HEAD AND SHOULDERS, dark and unlit. ⚠️ THE PASSENGER SEAT "
      + "BESIDE HIM IS EMPTY, the belt still clipped back against the pillar.",
    u: ["သူက ဆက်ပြောတယ်။", "“အဲဒီညမှာ နင်တစ်ယောက်တည်း မဟုတ်ဘူး”",
      "ကျွန်တော် ခေါင်းထဲမှာ ပုံရိပ်တချို့ ပြန်ပေါ်လာတယ်။", "မိုးရွာနေတဲ့ည။", "ကားရှေ့ခန်းမှာ ကျွန်တော်။",
      "ဘေးမှာ မိန်းကလေးတစ်ယောက်။"] },

  { t: "Brakes. Glass.", c: [[1, "stinger"]], l: "မိုးလမ်း", k: "road", tm: "rain",
    w: ["မိုးလမ်း"],
    g: "ကားဘရိတ်သံ။ မှန်ကွဲသံ။ ပြီးတော့ — အမှောင်။",
    p: "Low on the wet road at night. ⚠️ TWO LONG BRIGHT STREAKS OF LIGHT LIE FLAT ALONG THE "
      + "TARMAC coming in from one side, and ⚠️ A SCATTER OF SMALL GLASS FRAGMENTS IS SPREAD "
      + "ACROSS THE STANDING WATER, each one catching the sodium lamp. ⚠️ THE ROAD IS OTHERWISE "
      + "EMPTY — no vehicle and no person in the picture. Rain stippling the water all over. Black "
      + "past the lamp cone.",
    u: ["ကားဘရိတ်သံ။", "မှန်ကွဲသံ။", "ပြီးတော့—", "အမှောင်။"] },

  { t: "I Am the One Who Saved You", l: "ဧည့်ခန်း", k: "her", tm: "bulb",
    seen: true, eyes: true, w: ["မိန်းမ"],
    g: "⚠️ **“ငါက နင့်ကို ကယ်ခဲ့တဲ့လူ”** — “ကားမှောက်တဲ့အချိန် နင်သေတော့မယ်။ ငါက နင့်ကို ကားထဲက ဆွဲထုတ်ခဲ့တယ်”",
    p: "Close on the woman, ⚠️ HER EYES STRAIGHT INTO THE LENS AND HER MOUTH MOVING STEADILY ON A "
      + "LONG SENTENCE. ⚠️ THERE IS NO MALICE IN THE FACE AT ALL — it is level, almost gentle, "
      + "which is worse than a threat would be. ⚠️ HER HANDS HAVE COME UP AND ARE OPEN AT HER "
      + "CHEST, palms turned towards camera. Warm bulb light full on her; the sharp room behind.",
    u: ["မိန်းမက ပြောတယ်။", "“ငါက နင့်ကို ကယ်ခဲ့တဲ့လူ”", "ကျွန်တော် တုန်လှုပ်သွားတယ်။",
      "“ကားမှောက်တဲ့အချိန် နင်သေတော့မယ်။ ငါက နင့်ကို ကားထဲက ဆွဲထုတ်ခဲ့တယ်”"] },

  { t: "But I Died in That Car", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "her", tm: "bulb",
    seen: true, eyes: true, w: ["မိန်းမ"],
    g: "⚠️ “ဒါပေမယ့် ငါကတော့…” — **“အဲဒီကားထဲမှာ သေခဲ့ရတယ်”** — “မင်း ဘယ်သူလဲ?” — **“နင် မမှတ်မိတော့တဲ့ မိန်းမ”**",
    p: "Close on the woman, pushed in tight. ⚠️ HER MOUTH CLOSES ON THE END OF A SHORT SENTENCE "
      + "AND SHE HOLDS IT SHUT, the eyes unmoving on the lens. ⚠️ THE CORNERS OF HER MOUTH ARE "
      + "LIFTED — a small, closed, entirely ordinary smile. ⚠️ NOTHING ELSE IN THE FACE MOVES. The "
      + "texture of her skin, a loose strand of hair across one cheek. Warm bulb light; everything "
      + "behind her out of focus.",
    u: ["“ဒါပေမယ့် ငါကတော့…”", "သူ ခဏတိတ်သွားတယ်။", "“အဲဒီကားထဲမှာ သေခဲ့ရတယ်”",
      "ကျွန်တော် မျက်ရည်ကျလာတယ်။", "“မင်း ဘယ်သူလဲ?”", "သူက ပြုံးတယ်။", "“နင် မမှတ်မိတော့တဲ့ မိန်းမ”"] },

  /* ── XI · ကားထဲမှာ မိန်းမမပါဘူး ─────────────────────────────────────── */
  { t: "The Phone Rang", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "insert", tm: "bulb", seen: true,
    w: ["ဖုန်း"],
    g: "အဲဒီအချိန် — အခန်းထဲက ဖုန်းမြည်လာတယ်။ ဇော်ရဲ။ “ထွန်းမင်း! မင်းအိမ်ထဲကနေ ချက်ချင်းထွက်!”",
    p: "Tight insert straight down on the phone on the scratched table, ⚠️ THE SCREEN LIT AND "
      + "SHOWING A PLAIN INCOMING-CALL PANEL — a large round grey avatar disc with no photograph "
      + "in it, a short name above, two round buttons at the foot. ⚠️ THE GLASS IS SHARP ENOUGH TO "
      + "READ EVERY FINGERPRINT ON IT. ⚠️ NO HAND IS TOUCHING IT YET. Warm bulb light raking the "
      + "table; the screen the brightest thing in frame.",
    u: ["အဲဒီအချိန်—", "အခန်းထဲက ဖုန်းမြည်လာတယ်။", "ဇော်ရဲ။", "ကျွန်တော် ကိုင်လိုက်တယ်။",
      "“ထွန်းမင်း! မင်းအိမ်ထဲကနေ ချက်ချင်းထွက်!”"] },

  { t: "I Looked at Her While He Spoke", l: "ဧည့်ခန်း", k: "her", tm: "bulb", seen: true,
    eyes: true, w: ["မိန်းမ"],
    g: "“ငါ မင်းကားမတော်တဆမှုအကြောင်း ပြန်စုံစမ်းကြည့်ပြီးပြီ” — ကျွန်တော် နောက်က မိန်းမကို ကြည့်လိုက်တယ်။ သူက ပြုံးနေတယ်။",
    p: "Close on the woman across the room, ⚠️ STANDING PERFECTLY STILL AND SMILING WITH HER MOUTH "
      + "CLOSED, her eyes on the lens and not moving. ⚠️ HER CHIN IS LEVEL AND NOTHING IN HER "
      + "FACE MOVES. ⚠️ HER HANDS ARE BACK AT HER SIDES. The white blouse, the long "
      + "dark hair, the sharp lit room behind her. Warm bulb light, no shadow across her face.",
    u: ["“ဘာဖြစ်လို့?”", "“ငါ မင်းကားမတော်တဆမှုအကြောင်း ပြန်စုံစမ်းကြည့်ပြီးပြီ”",
      "ကျွန်တော် နောက်က မိန်းမကို ကြည့်လိုက်တယ်။", "သူက ပြုံးနေတယ်။"] },

  { t: "There Was No Woman in That Car", l: "ကားအတွင်း", k: "car",
    tm: "rain", w: ["ကားအတွင်း"],
    g: "⚠️ **“အဲဒီကားထဲမှာ မိန်းမတစ်ယောက်မှ မပါဘူးကွ!”** — “ဘာ?” — **“ကားထဲမှာ မင်းတစ်ယောက်တည်းပဲရှိတာ!”**",
    p: "From the back seat between the headrests, looking forward, exactly as before. ⚠️ BOTH "
      + "FRONT SEATS ARE EMPTY NOW — the driver's seat as well, the headrest bare, the worn fabric "
      + "showing. ⚠️ THE PASSENGER BELT IS STILL CLIPPED BACK AGAINST THE PILLAR, UNUSED. Rain "
      + "running down the windscreen, the wipers stopped mid-sweep, the instruments glowing green. "
      + "⚠️ THE CAR IS COMPLETELY EMPTY.",
    u: ["ဇော်ရဲက ဆက်ပြောတယ်။", "“အဲဒီကားထဲမှာ မိန်းမတစ်ယောက်မှ မပါဘူးကွ!”",
      "ကျွန်တော် တောင့်သွားတယ်။", "“ဘာ?”", "“ကားထဲမှာ မင်းတစ်ယောက်တည်းပဲရှိတာ!”"] },

  { t: "Her Smile Got Wider", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "her", tm: "bulb",
    seen: true, eyes: true, w: ["မိန်းမ"],
    g: "ကျွန်တော် နောက်လှည့်ကြည့်လိုက်တယ်။ မိန်းမရဲ့အပြုံးက ပိုကျယ်လာတယ်။",
    p: "Close on the woman, ⚠️ THE SMILE WIDER NOW AND THE TEETH JUST SHOWING, the line of it "
      + "entirely ordinary and entirely within her face. ⚠️ THE SKIN IS SMOOTH, WHOLE AND "
      + "UNMARKED AND NOTHING ABOUT HER IS ALTERED OR EXAGGERATED. ⚠️ HER EYES HAVE NOT MOVED OFF "
      + "THE LENS AND THEY ARE NOT SMILING WITH THE MOUTH. Warm bulb light full on her, the room "
      + "sharp behind.",
    u: ["ကျွန်တော် နောက်လှည့်ကြည့်လိုက်တယ်။", "မိန်းမရဲ့အပြုံးက ပိုကျယ်လာတယ်။"] },

  { t: "Somebody Died There That Night", l: "ဧည့်ခန်း", k: "min", tm: "bulb",
    seen: true, w: ["ထွန်းမင်း"],
    g: "⚠️ ဇော်ရဲက အော်တယ် — “မင်းကို ကယ်ခဲ့တဲ့သူက မိန်းမမဟုတ်ဘူး!” “အဲဒီညက လူတစ်ယောက် သေခဲ့တယ်…”",
    p: "Close on Thun Min with the phone pressed hard to his ear, ⚠️ HIS EYES WIDE AND FIXED ON "
      + "SOMETHING ACROSS THE ROOM PAST CAMERA. ⚠️ THIS IS THE FIRST TIME IN THE FILM HIS GAZE HAS "
      + "A TARGET, and it is the worst one available. ⚠️ HIS MOUTH HAS COME OPEN AND HIS BREATH IS "
      + "HELD. His free hand is half raised towards his own face and stopped. Warm bulb light; the "
      + "sharp lit room out of focus behind him.",
    u: ["ဇော်ရဲက အော်တယ်။", "“မင်းကို ကယ်ခဲ့တဲ့သူက မိန်းမမဟုတ်ဘူး!”",
      "“အဲဒီညက မင်းကားမှောက်တဲ့နေရာမှာ လူတစ်ယောက် သေခဲ့တယ်…”", "ကျွန်တော် အသက်ရှူရပ်သွားတယ်။"] },

  { t: "Your Car Was What Killed Him", c: [[1, "bigstinger"]], l: "မိုးလမ်း", k: "road",
    tm: "rain", w: ["မိုးလမ်း"],
    g: "⚠️ **“မင်းကို ကယ်ခဲ့တဲ့သူက မိန်းမမဟုတ်ဘူး!”** “အဲဒီညက မင်းကားမှောက်တဲ့နေရာမှာ လူတစ်ယောက် သေခဲ့တယ်…” **“အဲဒီလူက မင်းကားတိုက်မိလို့ သေခဲ့တာ!”**",
    p: "Low on the wet road under the sodium lamp, close to the standing water. ⚠️ ONE SINGLE "
      + "RUBBER SLIPPER LIES ON ITS SIDE IN THE WET TARMAC in the middle of the frame, well clear "
      + "of the scattered glass, rain stippling the water all round it. ⚠️ THE ROAD IS OTHERWISE "
      + "COMPLETELY EMPTY — no vehicle, no person, nothing else in the picture at all. Amber lamp "
      + "light along the wet surface; black beyond the cone.",
    u: ["“ဒါပေမယ့် အဲဒီလူက မင်းကို ကယ်ခဲ့တာ မဟုတ်ဘူး!”", "“ဒါဆို ဘယ်သူလဲ?”",
      "ဇော်ရဲရဲ့အသံ တုန်နေတယ်။", "“အဲဒီလူက မင်းကားတိုက်မိလို့ သေခဲ့တာ!”"] },

  /* ── XII · အခု ငါ့အလှည့် ────────────────────────────────────────────── */
  { t: "Do You Remember Now", l: "ဧည့်ခန်း", k: "her", tm: "bulb",
    seen: true, eyes: true, w: ["မိန်းမ"],
    g: "⚠️ ဖုန်းလွှတ်ကျသွားတယ်။ မိန်းမက နီးလာတယ်။ သူ့မျက်လုံးတွေ — ကျွန်တော့်မျက်လုံးတွေ။ **“အခုတော့ မှတ်မိပြီလား…”**",
    p: "Close on the woman, much nearer than before, ⚠️ HER FACE FILLING MOST OF THE FRAME AND HER "
      + "EYES HELD ON THE LENS WITHOUT BLINKING. ⚠️ THEY ARE PLAINLY A MAN'S EYES — the same "
      + "shape, the same warm brown, the same set under the brow as Thun Min's — sitting in a "
      + "woman's face that is otherwise entirely her own. ⚠️ HER MOUTH IS MOVING ON A QUIET "
      + "QUESTION. Warm bulb light hard on her; the room behind her gone out of focus.",
    u: ["ကျွန်တော် ဖုန်းလွှတ်ကျသွားတယ်။", "မိန်းမက ဖြည်းဖြည်း နီးလာတယ်။", "သူ့မျက်လုံးတွေ—",
      "ကျွန်တော့်မျက်လုံးတွေ။", "သူက တိုးတိုးလေး ပြောတယ်။", "“အခုတော့ မှတ်မိပြီလား…”"] },

  { t: "I Watched Through Your Eyes for Five Years", l: "ဧည့်ခန်း",
    k: "her", tm: "bulb", seen: true, eyes: true, w: ["မိန်းမ"],
    g: "⚠️ **“နင့်မျက်လုံးနဲ့ ငါးနှစ်လုံး ကြည့်နေခဲ့တယ်…”** **“အခု ငါ့အလှည့်ပြီးပြီ”**",
    p: "Close on the woman, pushed in as far as the frame will take, ⚠️ HER FACE CLOSE ENOUGH THAT "
      + "ONLY HER EYES, NOSE AND MOUTH ARE IN IT. ⚠️ THE EYES ARE THE SUBJECT OF THE SHOT: "
      + "ordinary, healthy, undamaged, focusing properly, and plainly a man's. ⚠️ HER MOUTH IS "
      + "MOVING AND HER EYES ARE PERFECTLY CALM. Warm bulb light; the texture of the skin and one "
      + "loose strand of hair in sharp focus.",
    u: ["ကျွန်တော် နောက်ဆုတ်တယ်။", "“မင်း ဘာလိုချင်တာလဲ?”", "သူက ကျွန်တော့်မျက်နှာနား ကပ်လာတယ်။",
      "“နင့်မျက်လုံးနဲ့ ငါးနှစ်လုံး ကြည့်နေခဲ့တယ်…”", "“အခု ငါ့အလှည့်ပြီးပြီ”"] },

  { t: "What Turn", l: "ဧည့်ခန်း", k: "her", tm: "bulb", seen: true, eyes: true, w: ["မိန်းမ"],
    g: "ကျွန်တော် နားမလည်ဘူး။ “ဘာအလှည့်?” — သူက ကျွန်တော့်နောက်ဘက်ကို လက်ညှိုးထိုးပြတယ်။",
    p: "Close on the woman, ⚠️ ONE ARM RAISED AND A SINGLE FINGER POINTING PAST CAMERA AT "
      + "SOMETHING BEHIND IT, the arm straight and perfectly steady. ⚠️ HER EYES HAVE NOT "
      + "FOLLOWED THE HAND — they are still on the lens. ⚠️ HER FACE IS COMPLETELY CALM AND SHE "
      + "IS NOT SMILING NOW. Warm bulb light along the raised arm and full on her face; the sharp "
      + "lit room behind her.",
    u: ["ကျွန်တော် နားမလည်ဘူး။", "“ဘာအလှည့်?”", "သူက—", "ကျွန်တော့်နောက်ဘက်ကို လက်ညှိုးထိုးပြတယ်။"] },

  { t: "The Man in the Glass", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "mirror", tm: "bulb",
    seen: true, glass: true, hollow: true, w: ["မှန်", "ထွန်းမင်း"],
    g: "⚠️ သူက ကျွန်တော့်နောက်ဘက်ကို လက်ညှိုးထိုးပြတယ်။ မှန်ထဲမှာ — ကျွန်တော်။ ဒါပေမယ့် နောက်မှာ မိန်းမမရှိတော့ဘူး။ အစား — **မျက်လုံးမရှိတဲ့ ယောကျ်ားတစ်ယောက် ရပ်နေတယ်။**",
    p: "Square on the mirror, the thin dark frame inside the picture. ⚠️ THE REFLECTION CONTAINS "
      + "EXACTLY TWO THINGS AND NOTHING ELSE: Thun Min facing the glass in the near ground, and "
      + "⚠️ STANDING DIRECTLY BEHIND HIM, A MAN IN THE SAME GREY T-SHIRT WITH THE SAME FACE AS "
      + "HIS. ⚠️ THERE IS NO WOMAN IN THE REFLECTION. Warm bulb light even across the old spotted "
      + "glass; the lit wall behind them both.",
    u: ["ကျွန်တော် နောက်လှည့်ကြည့်လိုက်တယ်။", "မှန်ထဲမှာ—", "ကျွန်တော်။", "ဒါပေမယ့်—",
      "ကျွန်တော့်နောက်မှာ မိန်းမတစ်ယောက် မရှိတော့ဘူး။", "အစား—",
      "မျက်လုံးမရှိတဲ့ ယောကျ်ားတစ်ယောက် ရပ်နေတယ်။", "ကျွန်တော်နဲ့ တစ်ပုံစံတည်း။"] },

  { t: "My Feet Moved Without Me", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "floor", tm: "bulb",
    seen: true, w: ["ဧည့်ခန်း"],
    g: "⚠️ **“အခု နင် ငါ့နောက်မှာ လိုက်ရမယ့်အလှည့်ပဲ”** — ကျွန်တော့်ခြေထောက်တွေ သူ့အလိုလို လှုပ်လာတယ်။",
    p: "A few inches above the floor tiles, level along them. ⚠️ TWO PAIRS OF BARE FEET ARE IN THE "
      + "FRAME NOW — a woman's leading and a man's a stride behind, ⚠️ BOTH CAUGHT MID-STEP WITH "
      + "THE SAME FOOT RAISED AND THE SAME FOOT DOWN. ⚠️ THE MAN'S ARE NOT WALKING, THEY ARE "
      + "COPYING. The hem of a white blouse at the top of frame, the worn green-grey tiles running "
      + "away past them. Warm bulb light raking the glaze.",
    u: ["မိန်းမက ပြောတယ်။", "“အခု နင် ငါ့နောက်မှာ လိုက်ရမယ့်အလှည့်ပဲ”", "အဲဒီအချိန်—",
      "ကျွန်တော့်ခြေထောက်တွေ သူ့အလိုလို လှုပ်လာတယ်။", "သူ တစ်လှမ်းလှမ်းတယ်။", "ကျွန်တော် တစ်လှမ်းလိုက်တယ်။",
      "သူ ရပ်တယ်။", "ကျွန်တော် ရပ်တယ်။"] },

  { t: "You Were Afraid of Me When You Could Not See", l: "ဧည့်ခန်း",
    k: "her", tm: "bulb", seen: true, eyes: true, w: ["မိန်းမ"],
    g: "⚠️ **“နင် မမြင်ရတုန်းက ငါ့ကို ကြောက်ခဲ့တယ်မဟုတ်လား…”** **“အခုတော့… နင်လည်း သူများတွေ မမြင်ရတဲ့အရာ ဖြစ်သွားပြီ”**",
    p: "Close on the woman, ⚠️ HER HEAD TURNED BACK OVER ONE SHOULDER TOWARDS CAMERA AS SHE WALKS "
      + "AWAY, the long dark hair falling across her back. ⚠️ SHE IS SMILING PROPERLY NOW, WITH "
      + "THE EYES AS WELL AS THE MOUTH, and the eyes are still his. ⚠️ THE FACE IS PERFECTLY "
      + "ORDINARY AND PERFECTLY CALM. Warm bulb light along the line of her cheek; the lit room "
      + "going out of focus beyond her.",
    u: ["ကျွန်တော် ရပ်ချင်ပေမယ့်—", "ရပ်လို့မရဘူး။", "သူက ပြုံးပြီး—",
      "“နင် မမြင်ရတုန်းက ငါ့ကို ကြောက်ခဲ့တယ်မဟုတ်လား…”", "“အခုတော့…”",
      "“နင်လည်း သူများတွေ မမြင်ရတဲ့အရာ ဖြစ်သွားပြီ”", "လို့ ပြောတယ်။"] },

  /* ── XIII · နောက်ငါးနှစ် ────────────────────────────────────────────── */
  { t: "The Door Was Open", l: "ဧည့်ခန်း", k: "door", tm: "dawn", w: ["ဧည့်ခန်း"],
    g: "နောက်နေ့မနက် — ဇော်ရဲ ရောက်လာတယ်။ တံခါးဖွင့်ထားတယ်။ အခန်းထဲမှာ ကျွန်တော် မရှိတော့ဘူး။",
    p: "Square on the front door from inside the room in thin grey first light. ⚠️ IT STANDS WIDE "
      + "OPEN and flat colourless daylight comes in across the worn tiles. ⚠️ THE ROOM IS EMPTY — "
      + "the wooden chair pushed back from the table, the phone face down on the floor beside it, "
      + "the glass of water still standing where it was. ⚠️ NOBODY IS IN THE PICTURE. No shadow "
      + "with an edge to it anywhere.",
    u: ["နောက်နေ့မနက်—", "ဇော်ရဲ ကျွန်တော့်အိမ်ကို ရောက်လာတယ်။", "တံခါးဖွင့်ထားတယ်။", "အခန်းထဲမှာ—",
      "ကျွန်တော် မရှိတော့ဘူး။"] },

  { t: "A Woman at the Mirror", l: "ဧည့်ခန်း", k: "her", tm: "dawn",
    eyes: true, w: ["မိန်းမ"],
    g: "⚠️ ဒါပေမယ့် — မှန်ရှေ့မှာ မိန်းမတစ်ယောက် ရပ်နေတယ်။ အင်္ကျီအဖြူ။ ဆံပင်ရှည်ရှည်။ **သူ့မျက်လုံးတွေက ကျွန်တော့်မျက်လုံးတွေ။**",
    p: "Close on the woman standing in front of the mirror in thin grey dawn light, ⚠️ TURNED "
      + "AWAY FROM THE GLASS AND FACING CAMERA, her arms at her sides. ⚠️ THE FLAT COLOURLESS "
      + "LIGHT IS ON HER EVENLY AND THERE IS NO SHADOW ANYWHERE ON HER FACE. ⚠️ HER EYES ARE "
      + "FOCUSED ON THE LENS AND THEY ARE A MAN'S. The white blouse, the long dark hair, the worn "
      + "tiles underfoot. ⚠️ SHE IS COMPLETELY STILL.",
    u: ["ဒါပေမယ့်—", "မှန်ရှေ့မှာ မိန်းမတစ်ယောက် ရပ်နေတယ်။", "အင်္ကျီအဖြူ။", "ဆံပင်ရှည်ရှည်။",
      "သူ့မျက်လုံးတွေက—", "ကျွန်တော့်မျက်လုံးတွေ။"] },

  { t: "Are You Looking for Thun Min", l: "ဧည့်ခန်း", k: "ye", tm: "dawn",
    w: ["ဇော်ရဲ"],
    g: "ဇော်ရဲက ကြောက်လန့်ပြီး နောက်ဆုတ်လိုက်တယ်။ မိန်းမက ပြုံးပြီး — **“ထွန်းမင်းကို ရှာနေတာလား?”**",
    p: "Close on Zaw Ye just inside the doorway in flat grey dawn light, ⚠️ HIS EYES ENORMOUS AND "
      + "FIXED PAST CAMERA, his mouth open wide and held that way. ⚠️ HE HAS TAKEN A STEP "
      + "BACK — the weight on his heels, one hand reaching behind him for the door frame without "
      + "looking for it. ⚠️ THE COLOUR IS GONE OUT OF HIS FACE. Thin colourless light flat on him; "
      + "the room beyond out of focus.",
    u: ["ဇော်ရဲက ကြောက်လန့်ပြီး နောက်ဆုတ်လိုက်တယ်။", "မိန်းမက သူ့ကို ကြည့်ပြီး ပြုံးတယ်။", "ပြီးတော့—",
      "“ထွန်းမင်းကို ရှာနေတာလား?”", "လို့ မေးတယ်။", "ဇော်ရဲ မဖြေနိုင်ဘူး။"] },

  { t: "Behind Her in the Glass", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "mirror", tm: "dawn",
    glass: true, hollow: true, w: ["မှန်", "ထွန်းမင်း"],
    g: "⚠️ မိန်းမက မှန်ဘက်ကို လက်ညှိုးထိုးပြတယ်။ မှန်ထဲမှာ — သူမရဲ့နောက်ကနေ — **မျက်လုံးမရှိတဲ့ ယောကျ်ားတစ်ယောက် ရပ်နေတယ်။ ကျွန်တော်။**",
    p: "Square on the mirror in thin grey dawn light, the thin dark frame inside the picture. ⚠️ "
      + "THE REFLECTION CONTAINS EXACTLY TWO FIGURES AND NOTHING ELSE: the woman in the white "
      + "blouse with her back to the glass in the near ground, and ⚠️ STANDING DIRECTLY BEHIND "
      + "HER, A MAN IN A GREY T-SHIRT WITH HIS HEAD LEVEL AND HIS ARMS AT HIS SIDES. ⚠️ HIS FACE "
      + "IS THUN MIN'S. Flat colourless light; the old spotted glass, the plain wall beyond them.",
    u: ["မိန်းမက မှန်ဘက်ကို လက်ညှိုးထိုးပြတယ်။", "မှန်ထဲမှာ—", "သူမရဲ့နောက်ကနေ—",
      "မျက်လုံးမရှိတဲ့ ယောကျ်ားတစ်ယောက် ရပ်နေတယ်။", "ကျွန်တော်။", "ကျွန်တော် အော်ဖို့ကြိုးစားတယ်။",
      "ဒါပေမယ့် အသံမထွက်ဘူး။"] },

  { t: "I Will Let Him Watch Another Five Years", l: "ဧည့်ခန်း", k: "her",
    tm: "dawn", eyes: true, w: ["မိန်းမ"],
    g: "⚠️ **“သူ အခုမှ ငါ့ကို မြင်ရတာ…”** **“နောက်ငါးနှစ်လောက်တော့ ကြည့်ခိုင်းလိုက်ဦးမယ်”**",
    p: "Close on the woman in thin grey dawn light, ⚠️ SMILING WITH HER MOUTH CLOSED AND HER EYES "
      + "STEADY ON THE LENS, her head tilted very slightly. ⚠️ THE EYES ARE ORDINARY, HEALTHY AND "
      + "A MAN'S, and they are focused properly on whoever is in front of her. ⚠️ THE FACE IS "
      + "CALM, WHOLE AND ENTIRELY UNREMARKABLE. Flat colourless light with no modelling in it; the "
      + "mirror edge soft at the frame's edge behind her.",
    u: ["မိန်းမက ပြုံးပြီး—", "“သူ အခုမှ ငါ့ကို မြင်ရတာ…”", "“နောက်ငါးနှစ်လောက်တော့ ကြည့်ခိုင်းလိုက်ဦးမယ်”",
      "လို့ ပြောတယ်။"] },

  { t: "She Called Me Out of the House", l: "ဧည့်ခန်း", k: "door", tm: "dawn", w: ["ဧည့်ခန်း"],
    g: "ပြီးတော့ — ကျွန်တော့်ကို ခေါ်ပြီး အိမ်ထဲက ထွက်သွားတယ်။ ကျွန်တော် သူ့နောက်ကို လိုက်ရတယ်။",
    p: "Square on the open front door from inside the room in thin grey first light. ⚠️ THE "
      + "DOORWAY IS EMPTY AND THE FLAT COLOURLESS MORNING BEYOND IT IS LEGIBLE AND ORDINARY — a "
      + "strip of bare ground, a fence, nothing else. ⚠️ THE TILES BETWEEN CAMERA AND THE SILL ARE "
      + "BARE. ⚠️ NOBODY IS IN THE PICTURE. No shadow with an edge to it anywhere.",
    u: ["ပြီးတော့—", "ကျွန်တော့်ကို ခေါ်ပြီး အိမ်ထဲက ထွက်သွားတယ်။", "ကျွန်တော် သူ့နောက်ကို လိုက်ရတယ်။"] },

  { t: "Now the Footsteps Are Mine", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "floor", tm: "dawn",
    w: ["ဧည့်ခန်း"],
    g: "⚠️ နိဂုံး — အရင်က ကျွန်တော့်နောက်မှာ ကြားခဲ့ရတဲ့ ခြေသံ။ ဒီတစ်ခါတော့ — **အဲဒီခြေသံက ကျွန်တော့်ခြေသံ ဖြစ်နေပြီ။**",
    p: "A few inches above the floor tiles in thin grey dawn light, looking towards the open front "
      + "door. ⚠️ ONE PAIR OF BARE FEET IS WALKING AWAY FROM CAMERA TOWARDS THE DOORWAY, caught "
      + "mid-stride, the hem of a white blouse above them. ⚠️ A STRIDE BEHIND THEM, A SECOND PAIR "
      + "OF BARE FEET IS CAUGHT IN EXACTLY THE SAME POSITION — the same foot raised, the same foot "
      + "down. ⚠️ FLAT COLOURLESS LIGHT, AND NEITHER PAIR CASTS A SHADOW.",
    u: ["တစ်လှမ်း။", "တစ်လှမ်း။", "တစ်လှမ်း။", "တရှပ်… တရှပ်…",
      "အရင်က ကျွန်တော့်နောက်မှာ ကြားခဲ့ရတဲ့ ခြေသံ။", "ဒီတစ်ခါတော့—",
      "အဲဒီခြေသံက ကျွန်တော့်ခြေသံ ဖြစ်နေပြီ။"] },
];

/**
 * This script is written in one-line beats and many of them are a single
 * connective. Under about fourteen characters the voice comes back
 * mispronounced or as nothing at all, so a fragment is folded into the line it
 * introduces; the pause comes from the beat between units instead.
 */
const MIN_UNIT = 14;
SCENES.forEach((s) => {
  const out = [];
  for (const u of s.u) {
    if (out.length && out[out.length - 1].length < MIN_UNIT) out[out.length - 1] += " " + u;
    else out.push(u);
  }
  while (out.length > 1 && out[out.length - 1].length < MIN_UNIT) out[out.length - 2] += " " + out.pop();
  s.u = out;
});

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = TIME[s.tm || "bulb"];
  if (!s.time) throw new Error(`shot "${s.t}" has no time for tm="${s.tm}"`);

  let cont = CONT;
  if (s.unseen) cont += CONT_UNSEEN;
  if (s.seen) cont += CONT_SEEN;
  if (s.hollow) cont += CONT_HOLLOW;
  if (s.eyes) cont += CONT_HIS_EYES;
  if (s.glass) cont += CONT_MIRROR;
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
