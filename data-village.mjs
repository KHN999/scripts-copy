/**
 * ရွာထဲမှာ ညဘက် နာမည်မခေါ်ရ — DO NOT CALL A NAME AT NIGHT. 124 shots.
 *
 * Thet Paing, thirty, goes back to his dead father's village to sell the house
 * and the fields. The village is Tamar Kone, half an hour in from the road by
 * bullock-cart track. Everybody who learns whose son he is stops wanting to
 * talk. The old woman next door, Daw Yi, warns him that night: if somebody
 * calls your name after dark, do not answer — and above all do not answer
 * anything calling from the fields.
 *
 * That night something calls his name from under the house, then from behind
 * it, then comes up the wooden stairs and stops at his door and speaks in his
 * father's voice. In the morning there are footprints in the mud outside the
 * door with the soles turned the wrong way round.
 *
 * ⚠️ WHAT THE STORY IS ABOUT. Thirty years ago a young man called Hpo Khwar
 * answered a call from the fields and vanished. They found him in the old well
 * three days later, dead ten days — so the Hpo Khwar the village had been
 * seeing for the week before he vanished was something else. After that the
 * calling started. Whoever answered disappeared, and came back not quite
 * themselves. Thet Paing's father answered once, was gone three days, came back
 * and left the village a week later. The whole village went in one night thirty
 * years ago and the father was the only one who got out — so everybody Thet
 * Paing has spoken to for two days has been one of them. He walks away without
 * answering the call from the fields, and his own mouth answers for him.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * SIX RULES THIS BOARD IS BUILT ON.
 *
 * 1. ⚠️ EVERY VILLAGER IS BUILT ORDINARY AND LIVING. Daw Yi, Hpo Khwar, the
 *    medic, the crowd — warm skin, thanaka, clear eyes, colour in the face. The
 *    whole ending depends on the audience having taken them for people. Build
 *    one of them wrong and the reveal is spent in act one.
 *
 * 2. ⚠️ A COMPLETE GHOST IS NEVER SHOWN. The thing on the stairs is footsteps
 *    and a shadow under a door. The thing under the bed is dark and a voice.
 *    What is seen is Daw Yi's own face doing one impossible thing, which is
 *    worse than a figure.
 *
 * 3. ⚠️ THE SMILE IS NOT DAMAGE. "Split to the ears" hands the filter a wound
 *    and comes back as a hole. CONT_SMILE describes the line of the lips
 *    carried out across the cheeks, the lips whole the whole length of it, the
 *    skin smooth and unmarked. Describe what is in frame and assert the shell.
 *
 * 4. ⚠️ THE BODY IN THE WELL IS NEVER IN FRAME. The well, the rope, the
 *    lantern, the backs of the men at the rim, the medic's face. Nothing is
 *    gained by showing it and every decay noun in the prompt is a refusal.
 *
 * 5. ⚠️ THE PRINTS ARE THE PICTURE THE FILM IS REMEMBERED FOR. Clean sharp
 *    human prints in wet mud, a line of them walking up to the door, every one
 *    with its toes pointing back down the stairs. Said the same way in every
 *    shot of them or they come back as ordinary prints.
 *
 * 6. ⚠️ THE VILLAGE HAS NO ELECTRIC LIGHT. One hurricane lantern or the moon,
 *    and ten feet past a flame it is solid black. That darkness is why a voice
 *    can be anywhere, and it is the whole reason the film works at night.
 */

/** The project title in the lab. */
export const TITLE = "ရွာထဲမှာ ညဘက် နာမည်မခေါ်ရ";

export const CAST = [
  { name: "သက်ပိုင်", en: "Thet Paing — the narrator, thirty",
    prompt:
      "A Burmese man of thirty from the city, ⚠️ IN A PLAIN PALE BLUE SHORT-SLEEVED SHIRT TUCKED "
      + "INTO A DARK CHECKED LONGYI, rubber slippers, a cheap canvas shoulder bag, short hair cut "
      + "neatly, clean-shaven, ⚠️ NO THANAKA ON HIS FACE WHERE EVERY OTHER VILLAGER HAS IT. An "
      + "ordinary office worker, healthy and a little soft-handed, plainly from somewhere else. "
      + "⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON: the same face, the same build, "
      + "the same clothes, in every shot he appears in." },

  { name: "ဒေါ်ရီ", en: "Daw Yi — the old woman next door, about seventy",
    prompt:
      "A Burmese village woman of about seventy, small, thin and stooped, ⚠️ IN A FADED BROWN "
      + "HOUSE LONGYI AND A LOOSE LONG-SLEEVED COTTON BLOUSE GONE SOFT WITH WASHING, barefoot, "
      + "grey hair pulled into a low knot, ⚠️ TWO WORN PATCHES OF THANAKA ON HER CHEEKS. Deep "
      + "lines round the eyes and mouth, hands knotted and dark from field work. ⚠️ SHE IS AN "
      + "ENTIRELY ORDINARY, WARM, LIVING OLD VILLAGE WOMAN and there is nothing whatever strange "
      + "about her." },

  { name: "ဖိုးခွား", en: "Hpo Khwar — the young man who vanished, twenty",
    prompt:
      "A Burmese village lad of twenty, thin and wiry and sunburnt, ⚠️ IN A WHITE SINGLET AND A "
      + "PLAIN GREEN CHECKED LONGYI HITCHED UP TO THE KNEE, barefoot, a thin cotton towel over one "
      + "shoulder, hair cut short and sticking up at the crown, a smear of thanaka down his nose. "
      + "⚠️ BUILD HIM AS A COMPLETELY ORDINARY LIVING YOUNG MAN — warm brown skin, clear bright "
      + "eyes, good colour in his face, strong and well. ⚠️ HE IS CHEERFUL AND UNREMARKABLE AND "
      + "NOTHING ABOUT HIM IS FRIGHTENING." },

  { name: "ဆေးဆရာအို", en: "The medic — the old village medic, about sixty-five",
    prompt:
      "A Burmese man of about sixty-five, small and dry and upright, ⚠️ IN A WHITE COLLARLESS "
      + "SHIRT BUTTONED TO THE THROAT AND A DARK LONGYI, wire-framed reading glasses low on his "
      + "nose, thin grey hair combed flat, a cloth satchel across his body. ⚠️ A CAREFUL, "
      + "UNHURRIED, SLIGHTLY SEVERE FACE — the only man in the village used to being certain about "
      + "things. Clean hands, short nails. Ordinary and completely unmystical." },

  { name: "လူကြီး", en: "The elder with the cart — about seventy",
    prompt:
      "A Burmese farmer of about seventy, lean and weathered almost black by the sun, ⚠️ IN AN "
      + "OPEN FADED SHIRT OVER A BARE CHEST AND A WORN LONGYI KNOTTED AT THE WAIST, a broad conical "
      + "bamboo field hat pushed back off his head, a thin cotton towel round his neck, bare feet. "
      + "⚠️ A LONG CALM OUTDOOR FACE, deeply lined, with white stubble. ⚠️ HE IS PLAINLY A LIVING "
      + "WORKING MAN FROM SOMEWHERE ELSE and completely at ease." },

  { name: "ရွာသားတွေ", en: "The villagers", group: true,
    prompt:
      "⚠️ A GROUP OF ABOUT TEN BURMESE VILLAGERS OF MIXED AGE STANDING TOGETHER — men and women "
      + "from twenty to seventy, ⚠️ IN PLAIN COTTON SHIRTS, SINGLETS, BLOUSES AND CHECKED LONGYIS, "
      + "all barefoot or in rubber slippers, thanaka on most of the faces, a conical bamboo hat or "
      + "two, a cotton towel over a shoulder. ⚠️ EVERY ONE OF THEM IS AN ORDINARY, WARM, LIVING "
      + "FARMING VILLAGER — sunburnt, healthy, unremarkable. ⚠️ THEY ARE ALL LOOKING THE SAME WAY, "
      + "AT THE CAMERA, AND NONE OF THEM IS SMILING." },
];

export const PROPS = [
  { name: "အဖေ့ဓာတ်ပုံ", en: "The father's photograph",
    prompt:
      "⚠️ ONE SMALL OLD FRAMED PHOTOGRAPH HANGING ON A PLANK WALL, photographed square on and "
      + "filling the frame. A thin dark wooden frame with dusty glass, ⚠️ AND INSIDE IT A FADED "
      + "BLACK-AND-WHITE PORTRAIT OF A BURMESE MAN OF ABOUT TWENTY — collarless white shirt, hair "
      + "combed flat, looking straight into the lens without smiling. ⚠️ THE PRINT HAS GONE BROWN "
      + "AND SILVERED AT THE EDGES AND THE FACE IS STILL COMPLETELY CLEAR. A spray of dried flowers "
      + "tucked behind one corner of the frame. Bare grey planks all round it." },

  { name: "ခြေရာ", en: "The footprints",
    prompt:
      "⚠️ A LINE OF BARE HUMAN FOOTPRINTS PRESSED INTO WET BROWN MUD, photographed straight down "
      + "from above and filling the frame. ⚠️ EACH PRINT IS CLEAN AND SHARP-EDGED WITH A BROAD "
      + "HEEL, A NARROW ARCH AND FIVE SEPARATE TOE MARKS, the mud squeezed up in a small ridge "
      + "round the rim of every one. ⚠️ THE LINE RUNS AWAY FROM CAMERA, BUT EVERY SINGLE PRINT IN "
      + "IT HAS ITS TOES POINTING BACK TOWARDS CAMERA AND ITS HEEL POINTING AWAY — the prints face "
      + "the opposite way to the direction the line travels. The mud around them is smooth and "
      + "undisturbed. Flat grey morning light, no shadow." },

  { name: "နွားလှည်း", en: "The bullock cart",
    prompt:
      "⚠️ A TRADITIONAL MYANMAR BULLOCK CART STANDING ON A DRY DIRT TRACK, photographed from the "
      + "front three-quarter and filling the frame: ⚠️ TWO PALE HUMPED ZEBU OXEN IN A WOODEN YOKE, "
      + "a long straight draw-pole, two tall spoked wooden wheels and a low flat bed of lashed "
      + "bamboo with a curved cane hood over the back half. Rope harness, a bamboo goad laid across "
      + "the bed, dust on everything. Worn, working and completely ordinary. Flat daylight." },

  { name: "မီးအိမ်", en: "The hurricane lantern",
    prompt:
      "⚠️ ONE OLD KEROSENE HURRICANE LANTERN STANDING ON BARE WOODEN FLOORBOARDS, photographed "
      + "square on and filling the frame. A pressed tin body gone dull and spotted, a round glass "
      + "chimney smoked brown at the top, a wire carrying handle folded over, ⚠️ THE FLAME TURNED "
      + "LOW TO A SMALL STEADY ORANGE TONGUE. It throws a close warm pool onto the boards round its "
      + "foot and ⚠️ EVERYTHING MORE THAN A FOOT FROM IT IS BLACK. Battered, cheap and in daily "
      + "use." },
];

export const LOCS = [
  { name: "အဖေ့အိမ်", en: "The father's old house",
    prompt:
      "⚠️ A SMALL OLD MYANMAR WOODEN STILT HOUSE STANDING ALONE IN A BARE SWEPT DIRT YARD, seen "
      + "from the yard: ⚠️ RAISED ABOUT SIX FEET ON ROUND TIMBER POSTS WITH AN OPEN DARK SPACE "
      + "UNDERNEATH IT, plank walls gone silver-grey and warped apart at the joints, a thatch and "
      + "corrugated-iron roof, ⚠️ A STEEP OPEN WOODEN STAIRCASE OF EIGHT PLANK TREADS RUNNING UP TO "
      + "A SMALL LANDING AND A SINGLE PLANK DOOR. Two shuttered window openings with no glass. A "
      + "banana clump and a tamarind tree at one side, a fence of split bamboo. ⚠️ THE HOUSE IS "
      + "SHUT UP AND NOBODY HAS LIVED IN IT FOR YEARS." },

  { name: "အိပ်ခန်း", en: "The upstairs room",
    prompt:
      "⚠️ ONE BARE ROOM INSIDE A WOODEN STILT HOUSE, seen from the middle of it: plank walls and "
      + "a plank floor with daylight showing in thin lines between the boards, a low wooden bed "
      + "frame against one wall with a thin mattress, a folded cotton blanket and no mosquito net. "
      + "⚠️ ONE PLANK DOOR WITH A SMALL IRON HASP, AND ONE SQUARE SHUTTERED WINDOW OPENING WITH NO "
      + "GLASS IN IT. A hurricane lantern on the floor, a cheap tin trunk, a rolled mat. Dust, bare "
      + "rafters overhead. ⚠️ THE ROOM IS COMPLETELY EMPTY OF DECORATION." },

  { name: "လယ်ကွင်း", en: "The fields behind the house",
    prompt:
      "⚠️ FLAT OPEN DRY-SEASON PADDY FIELDS RUNNING AWAY FROM CAMERA TO A LOW FLAT HORIZON, the "
      + "earth cracked pale and the stubble cut short and bleached, ⚠️ DIVIDED INTO LARGE PANELS BY "
      + "LOW STRAIGHT EARTH BUNDS. A single bare toddy palm standing far out, a line of dark bamboo "
      + "along one edge, a dry irrigation ditch in the foreground. ⚠️ THE FIELDS ARE COMPLETELY "
      + "EMPTY — no people, no cattle, no buildings. Enormous open sky." },

  { name: "ရွာလမ်း", en: "The village road",
    prompt:
      "⚠️ A NARROW DRY DIRT LANE RUNNING THROUGH A SMALL MYANMAR FARMING VILLAGE, seen along it: "
      + "wooden stilt houses set back on both sides behind split-bamboo fences, thatch and rusted "
      + "corrugated roofs, ⚠️ DEEP CART RUTS BAKED HARD INTO THE SURFACE OF THE LANE. A tamarind "
      + "tree, a toddy palm, clumps of bamboo leaning over the fences, a water pot on a stand "
      + "outside one gate, washing on a line. Dust, dry leaves, chicken scratchings. ⚠️ AN "
      + "ORDINARY, POOR, COMPLETELY UNREMARKABLE VILLAGE LANE." },

  { name: "ရေတွင်းဟောင်း", en: "The old well",
    prompt:
      "⚠️ AN OLD DISUSED VILLAGE WELL AT THE EDGE OF SCRUB GROUND: a round rim of rough mortared "
      + "brick about waist high, the render gone in patches, ⚠️ THE MOUTH OF IT OPEN AND "
      + "COMPLETELY BLACK INSIDE. A bent iron frame over the top with a pulley hanging askew from "
      + "it and a frayed rope looped over the rim. Dry weeds grown up thick round the base, a "
      + "cracked concrete apron, a broken clay pot on its side. ⚠️ NOBODY HAS DRAWN WATER HERE IN "
      + "YEARS. Hard flat daylight." },

  { name: "လှည်းလမ်း", en: "The bullock-cart track",
    prompt:
      "⚠️ A ROUGH BULLOCK-CART TRACK OF PALE DRY EARTH CROSSING OPEN SCRUB COUNTRY, running away "
      + "from camera to a low flat horizon, ⚠️ TWO DEEP PARALLEL WHEEL RUTS WITH A RIDGE OF COARSE "
      + "GRASS GROWING UP BETWEEN THEM. Thorn scrub and dry thickets on both sides, a few leaning "
      + "toddy palms far off, dust lying pale over everything. ⚠️ THERE IS NO BUILDING, NO FENCE "
      + "AND NO PERSON ANYWHERE IN SIGHT. Enormous pale sky, hard flat daylight." },
];

/* ────────────────────────────────────────────────────────────────────────── */

const CAM = {
  wide: "WIDE. Camera at chest height, far enough back to hold the whole space.",
  road: "ON THE VILLAGE ROAD. Camera at chest height in the middle of the lane, looking along it.",
  house: "ON THE HOUSE FROM THE YARD. Camera at chest height in the dirt yard, holding the stilts, "
    + "the staircase and the landing in one frame.",
  under: "UNDER THE HOUSE. Camera about two feet from the ground in among the timber posts, "
    + "looking out between them.",
  stairs: "ON THE WOODEN STAIRCASE. Camera low at the foot of it, looking up the treads to the "
    + "landing and the door at the top.",
  door: "ON THE DOOR FROM INSIDE. Camera at chest height in the room, square to the shut plank "
    + "door across the floorboards.",
  doorlow: "AT THE FOOT OF THE DOOR. Camera about a foot from the floor, looking along the "
    + "floorboards at the bottom edge of the shut door and the gap under it.",
  room: "IN THE UPSTAIRS ROOM. Camera at chest height, holding most of the space.",
  bed: "AT BED HEIGHT. Camera low beside the low wooden bed frame, level with the mattress.",
  underbed: "UNDER THE BED. Camera a few inches off the floorboards beneath the bed frame, looking "
    + "out along the floor past the legs of it.",
  window: "AT THE WINDOW OPENING. Camera at chest height inside the room, beside the shutter.",
  fromwindow: "DOWN FROM THE WINDOW. Camera at the window opening inside the room, looking down "
    + "and out into the yard below.",
  thet: "CLOSE ON THET PAING. Camera at his eye height, head-and-shoulders crop.",
  yi: "CLOSE ON DAW YI. Camera at her eye height, head-and-shoulders crop.",
  khwar: "CLOSE ON HPO KHWAR. Camera at his eye height, head-and-shoulders crop.",
  medic: "CLOSE ON THE MEDIC. Camera at his eye height, head-and-shoulders crop.",
  elder: "CLOSE ON THE ELDER. Camera at his eye height, head-and-shoulders crop.",
  villager: "CLOSE ON ONE VILLAGER. Camera at eye height, head-and-shoulders crop on a single "
    + "person.",
  field: "IN THE FIELDS. Camera at chest height out on the bunds, the open ground running away.",
  well: "AT THE WELL. Camera at chest height beside the brick rim.",
  track: "ON THE CART TRACK. Camera at chest height in the ruts, looking along the track.",
  ground: "LOW ON THE GROUND. Camera about a foot from the earth, the surface of it running across "
    + "the bottom of frame.",
  insert: "TIGHT INSERT. One subject filling the frame, shallow focus.",
};

const TIME = {
  day: "TIME: FLAT HARD DAYLIGHT. Even white dry-season light, short shadows, dust in the air, "
    + "ordinary and undramatic.",
  dusk: "TIME: LAST LIGHT. The sky still pale and the ground already going blue, no lamp lit yet, "
    + "everything legible but flattening and losing its colour.",
  night: "TIME: VILLAGE NIGHT, ONE LANTERN. One low kerosene flame throwing a close warm orange "
    + "pool, and ⚠️ SOLID BLACK MORE THAN TEN FEET FROM IT.",
  dark: "TIME: THE LANTERN IS OUT. Almost total darkness, only a thin cold wash of moonlight "
    + "through the gaps in the shutter and the floorboards — shapes just legible in outline, "
    + "colour gone.",
  moon: "TIME: UNDER A HIGH MOON, OUTSIDE. Cold, even, shadowless blue-grey light with no warmth "
    + "in it, the fields pale and the bamboo black against the sky.",
  rain: "TIME: NIGHT IN HEAVY RAIN. One lantern flame behind sheeting water, the rain falling in "
    + "long bright streaks through the little light there is and everything beyond it black. Mud, "
    + "standing water, running thatch.",
  dawn: "TIME: FIRST LIGHT. Thin grey-blue light before the sun is up, flat and cold and "
    + "shadowless, every colour still drained out of the frame.",
};

const CONT =
  "Continuity: a small remote Myanmar farming village of wooden stilt houses, dry season, present "
  + "day. Plain cotton shirts, singlets, checked longyis, thanaka, bare feet and rubber slippers. "
  + "⚠️ NOTHING IN THIS FILM IS DECORATED OR STYLED — no shrines, no charms, no symbols, no mist "
  + "and no fog. The strangeness is in what is happening, never in the decor.";

const CONT_NIGHT =
  " ⚠️ THERE IS NO ELECTRIC LIGHT ANYWHERE IN THIS VILLAGE. The only light in frame is one "
  + "kerosene flame or the moon; more than ten feet from a flame everything is solid black, and "
  + "the fields and the bamboo read as a flatter blacker shape against the sky rather than as "
  + "detail.";

const CONT_THEN =
  " ⚠️ THIS SHOT IS THIRTY YEARS EARLIER AND IS GRADED AS ONE: the same village but the thatch "
  + "newer and thicker, the bamboo fences whole, more washing on the lines and more livestock "
  + "about. The colour runs a touch warmer and the grain is coarser than the present-day shots. "
  + "⚠️ THE STAGING ITSELF STAYS COMPLETELY PLAIN.";

const CONT_YI =
  " ⚠️ DAW YI IS AN ENTIRELY ORDINARY WARM LIVING OLD VILLAGE WOMAN IN THIS SHOT — thanaka in two "
  + "worn patches on her cheeks, faded brown house longyi, grey hair in a low knot, deep ordinary "
  + "lines, hands knotted from field work. ⚠️ NOTHING ABOUT HER IS STRANGE HERE.";

const CONT_KHWAR =
  " ⚠️ HPO KHWAR IS AN ORDINARY LIVING TWENTY-YEAR-OLD — warm brown sunburnt skin, clear bright "
  + "eyes, good colour in his face, white singlet, green checked longyi, barefoot, healthy and "
  + "cheerful. ⚠️ THE FILM NEVER SHOWS HIM ANY OTHER WAY.";

const CONT_PRINT =
  " ⚠️ THE FOOTPRINTS ARE CLEAN SHARP-EDGED BARE HUMAN PRINTS IN WET BROWN MUD — broad heel, "
  + "narrow arch, five separate toe marks, the mud squeezed up in a small ridge round the rim of "
  + "each. ⚠️ THE LINE OF THEM WALKS UP TO THE DOOR, BUT EVERY PRINT IN IT HAS ITS TOES POINTING "
  + "BACK DOWN THE STAIRS AND ITS HEEL AGAINST THE DOOR — the prints face the opposite way to the "
  + "way the line travels. The mud around them is smooth and undisturbed.";

const CONT_SMILE =
  " ⚠️ HER MOUTH IS OPEN IN A SMILE THAT RUNS FAR WIDER THAN A MOUTH DOES — the line of the lips "
  + "carried straight out across both cheeks to just under the ears, ⚠️ THE LIPS THEMSELVES WHOLE "
  + "AND UNBROKEN THE WHOLE LENGTH OF IT, with one even row of ordinary teeth showing behind them. "
  + "⚠️ THE SKIN OF HER FACE IS SMOOTH, WHOLE AND UNMARKED, and the rest of her face is exactly "
  + "the face from her reference plate. ⚠️ NOTHING ELSE ABOUT HER HAS CHANGED AND SHE IS "
  + "OTHERWISE PERFECTLY STILL.";

const STYLE =
  "Rural Myanmar, present day. Photorealism, 16:9, 35mm grain, level camera, natural depth of "
  + "field. Wooden stilt houses, dry cracked fields, bamboo, dust. Honest available light — flat "
  + "white daylight, orange kerosene flame, cold blue-grey moon, and solid black where there is no "
  + "light at all. One still instant. ⚠️ ALL PRINTED AND WRITTEN TEXT STAYS SOFT AND PARTLY "
  + "OCCLUDED, READING AS MARKS ON PAPER RATHER THAN AS WORDS.";

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "I · ဦးမြင့်သားလား",
  5: "II · ညဘက် နာမည်မခေါ်ရ",
  8: "III · ည ၁၁ နာရီ",
  10: "IV · အိမ်အောက်က အသံ",
  12: "V · ဒေါက်… ဒေါက်…",
  14: "VI · အဖေ့အသံ",
  17: "VII · နောက်ပြန်လှည့်နေတဲ့ ခြေရာ",
  19: "VIII · မမေးနဲ့",
  21: "IX · ထွက်ပြေးသွားတာ",
  23: "X · ဖိုးခွား",
  26: "XI · ရေတွင်းဟောင်း",
  28: "XII · ဆယ်ရက်ရှိပြီ",
  29: "XIII · ပြန်လာတဲ့လူတွေ",
  31: "XIV · မင်းအဖေကလည်း ထူးခဲ့ဖူးတယ်",
  35: "XV · ည ၁၂ နာရီ",
  40: "XVI · ကုတင်အောက်က အသံ",
  43: "XVII · ဘယ်သူ့ကို ယုံရမှန်း မသိတော့ဘူး",
  46: "XVIII · ဒုန်း! ဒုန်း!",
  50: "XIX · ရွာတစ်ရွာလုံး တိတ်နေတယ်",
  51: "XX · အဲဒီဘက်မှာ ရွာမရှိတော့ဘူး",
  58: "XXI · ဗျာ",
};

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  { t: "I Came Back to Sell the House", l: "လှည်းလမ်း", k: "track", tm: "day",
    w: ["လှည်းလမ်း","သက်ပိုင်"],
    g: "ဖွင့်ပုံ — ကျွန်တော့်နာမည် သက်ပိုင်။ / အဖေဆုံးပြီးနောက် အဖေ့ဇာတိရွာက အိမ်နဲ့ လယ်တွေကို"
      + " ရောင်းဖို့ ကျွန်တော် ရွာပြန်ခဲ့တာ။ / အဲဒီရွာကို ကျွန်တော် ကလေးဘဝတုန်းက တစ်ခါပဲ ရောက်ဖူးတယ်။",
    p: "Along the cart track from behind. ⚠️ THET PAING IS WALKING AWAY FROM CAMERA IN THE RUTS,"
      + " small in the middle of frame, the canvas bag swinging at his hip and his free hand out from"
      + " his side. Two deep wheel ruts with a ridge of coarse grass between them running on ahead of"
      + " him to a low flat horizon, thorn scrub on both sides, dust lying pale over everything. ⚠️"
      + " THERE IS NOBODY ELSE ANYWHERE IN FRAME.",
    u: ["ကျွန်တော့်နာမည် သက်ပိုင်။", "အဖေဆုံးပြီးနောက် အဖေ့ဇာတိရွာက အိမ်နဲ့ လယ်တွေကို ရောင်းဖို့ ကျွန်တော် ရွာပြန်ခဲ့တာ။", "အဲဒီရွာကို ကျွန်တော် ကလေးဘဝတုန်းက တစ်ခါပဲရောက်ဖူးတယ်။"] },

  { t: "Tamar Kone", l: "ရွာလမ်း", k: "wide", tm: "day",
    w: ["ရွာလမ်း"],
    g: "ရွာနာမည်က **တမာကုန်း**။ / မြို့နဲ့ တော်တော်ဝေးတယ်။ / ကားလမ်းကနေတောင် နွားလှည်းလမ်းအတိုင်း"
      + " နာရီဝက်လောက် ထပ်ဝင်ရသေးတယ်။",
    p: "Wide at the head of the village lane. ⚠️ ONE ENORMOUS OLD TAMARIND TREE STANDS ON A LOW RISE"
      + " OF PALE EARTH WHERE THE LANE BEGINS, its trunk thick and grey and its crown spread wide over"
      + " the first of the roofs, the fine leaves throwing a broken shade across the ground. The stilt"
      + " houses run away behind it down the lane. Hard white light, short shadows, dust hanging. ⚠️"
      + " NOBODY IS UNDER THE TREE.",
    u: ["ရွာနာမည်က တမာကုန်း။", "မြို့နဲ့တော်တော်ဝေးတယ်။", "ကားလမ်းကနေတောင် နွားလှည်းလမ်းအတိုင်း နာရီဝက်လောက် ထပ်ဝင်ရသေးတယ်။"] },

  { t: "Something Odd From the First Day", l: "ရွာလမ်း", k: "road", tm: "day",
    w: ["ရွာလမ်း","ရွာသားတွေ"],
    g: "ရွာရောက်တဲ့နေ့ကတည်းက ထူးဆန်းတာတစ်ခု သတိထားမိတယ်။ / ⚠️ ရွာသားတွေက ကျွန်တော့်ကိုတွေ့ရင် —"
      + " “ဦးမြင့်သားလား…” / လို့မေးပြီး မျက်နှာပျက်သွားကြတယ်။",
    p: "Along the village lane. ⚠️ FOUR OR FIVE VILLAGERS ARE STANDING ABOUT IN THE MIDDLE DISTANCE"
      + " IN TWOS AND THREES — at a gate, under a house, by the water pot — ⚠️ AND EVERY ONE OF THEM"
      + " HAS STOPPED WHAT THEY WERE DOING AND TURNED TO FACE CAMERA. Ordinary sunburnt working people"
      + " in singlets, blouses and checked longyis, thanaka on their cheeks. ⚠️ NOBODY IS SMILING AND"
      + " NOBODY IS MOVING. Hard white light.",
    u: ["ရွာရောက်တဲ့နေ့ကတည်းက ထူးဆန်းတာတစ်ခု သတိထားမိတယ်။", "ရွာသားတွေက ကျွန်တော့်ကိုတွေ့ရင်—", "“ဦးမြင့်သားလား…”", "လို့မေးပြီး မျက်နှာပျက်သွားကြတယ်။"] },

  { t: "My Father's Old House", l: "အဖေ့အိမ်", k: "house", tm: "dusk",
    w: ["အဖေ့အိမ်"],
    g: "အထူးသဖြင့် ကျွန်တော့်အဖေ နာမည်ကြားရင် ဘာမှ ဆက်မပြောချင်ကြတော့ဘူး။ / အဲဒီည ကျွန်တော်"
      + " အဖေ့အိမ်ဟောင်းမှာ အိပ်တယ်။",
    p: "From the swept dirt yard at last light. ⚠️ THE SMALL WOODEN STILT HOUSE STANDS ALONE ON ITS"
      + " ROUND TIMBER POSTS WITH THE OPEN DARK SPACE UNDERNEATH IT ALREADY BLACK, plank walls gone"
      + " silver-grey and warped apart at the joints, the thatch and corrugated roof flat against a"
      + " sky still pale. ⚠️ THE STEEP OPEN STAIRCASE RUNS UP TO THE LANDING AND ONE SHUT PLANK DOOR."
      + " A tamarind at one side, a bamboo fence. ⚠️ NO LAMP IS LIT ANYWHERE IN IT.",
    u: ["အထူးသဖြင့် ကျွန်တော့်အဖေ နာမည်ကြားရင် ဘာမှဆက်မပြောချင်ကြတော့ဘူး။", "အဲဒီည ကျွန်တော် အဖေ့အိမ်ဟောင်းမှာ အိပ်တယ်။"] },

  { t: "Do Not Answer", c: [[1, "stinger"]], l: "အဖေ့အိမ်", k: "yi", tm: "dusk",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "မအိပ်ခင် ဘေးအိမ်က အဘွားဒေါ်ရီက ထူးထူးဆန်းဆန်း လာသတိပေးတယ်။ / ⚠️ “သား… ညဘက် တစ်ယောက်ယောက်က"
      + " နာမည်ခေါ်ရင် မထူးနဲ့နော်” / “ဘာဖြစ်လို့လဲ အဘွား?”",
    p: "Close on Daw Yi at last light, ⚠️ HER EYES COMING UP AND STRAIGHT INTO THE LENS AND HER"
      + " MOUTH OPEN ON A SENTENCE, her chin tipped slightly up because she is shorter than the person"
      + " she is talking to. ⚠️ HER FACE IS CALM AND SERIOUS AND NOT AT ALL FRIGHTENED — she is saying"
      + " something ordinary that she has said before. Thanaka in two worn patches, deep lines, grey"
      + " hair. The sky behind her flat and colourless.",
    u: ["မအိပ်ခင် ဘေးအိမ်က အဘွားဒေါ်ရီက ထူးထူးဆန်းဆန်း လာသတိပေးတယ်။", "“သား… ညဘက် တစ်ယောက်ယောက်က နာမည်ခေါ်ရင် မထူးနဲ့နော်”", "“ဘာဖြစ်လို့လဲ အဘွား?”"] },

  { t: "She Looked at the Fields", l: "အဖေ့အိမ်", k: "yi", tm: "dusk",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "အဘွားက အိမ်နောက်ဘက် လယ်ကွင်းကို လှမ်းကြည့်တယ်။ / “ဒီရွာမှာ ညဘက်ဆို လူအချင်းချင်း"
      + " နာမည်မခေါ်ကြဘူး” — “ဘာလို့လဲ?” / အဘွားက ပြန်မဖြေဘူး။",
    p: "Close on Daw Yi from the side, ⚠️ HER HEAD TURNED RIGHT AWAY FROM CAMERA AND HELD THERE,"
      + " looking off past the corner of the house at something a long way out, her eyes narrowed and"
      + " her mouth shut. The whole weight of her attention is off frame. Behind her, soft and out of"
      + " focus, the flat open ground and the low horizon going dark. ⚠️ SHE DOES NOT LOOK BACK.",
    u: ["အဘွားက အိမ်နောက်ဘက် လယ်ကွင်းကို လှမ်းကြည့်တယ်။", "“ဒီရွာမှာ ညဘက်ဆို လူအချင်းချင်း နာမည်မခေါ်ကြဘူး” “ဘာလို့လဲ?”", "အဘွားက ပြန်မဖြေဘူး။"] },

  { t: "Especially From the Fields", l: "လယ်ကွင်း", k: "field", tm: "dusk",
    w: ["လယ်ကွင်း"],
    g: "⚠️ “အထူးသဖြင့်… လယ်ကွင်းဘက်က ခေါ်ရင် လုံးဝ မထူးနဲ့” / ပြောပြီး ပြန်သွားတယ်။ ကျွန်တော်ကတော့"
      + " ရွာဓလေ့တစ်ခုလို့ပဲ ထင်လိုက်တယ်။",
    p: "Out on the bunds behind the house at last light. ⚠️ FLAT OPEN CUT PADDY RUNNING AWAY TO A"
      + " LOW FLAT HORIZON, the cracked earth and the bleached stubble going grey, the straight earth"
      + " bunds dividing it into panels. One bare toddy palm far out, a line of dark bamboo along one"
      + " edge. ⚠️ THE FIELDS ARE COMPLETELY EMPTY — no person, no animal, no building anywhere in"
      + " frame. The sky still pale, the ground already dark.",
    u: ["“အထူးသဖြင့်… လယ်ကွင်းဘက်က ခေါ်ရင် လုံးဝမထူးနဲ့”", "ပြောပြီး ပြန်သွားတယ်။", "ကျွန်တော်ကတော့ ရွာဓလေ့တစ်ခုလို့ပဲ ထင်လိုက်တယ်။"] },

  { t: "Eleven at Night", l: "ရွာလမ်း", k: "wide", tm: "moon",
    lamp: true,
    w: ["ရွာလမ်း"],
    g: "ည ၁၁ နာရီလောက်ရောက်တော့ ရွာတစ်ရွာလုံး တိတ်သွားတယ်။ / ပိုးကောင်သံ။ ဖားအော်သံ။",
    p: "Wide along the village lane under a high moon. ⚠️ EVERY HOUSE IS DARK AND EVERY SHUTTER IS"
      + " CLOSED — not one window in the whole frame carries a light. The roofs and the bamboo stand"
      + " black against a sky that is still faintly luminous, the ruts of the lane pale blue-grey and"
      + " empty. ⚠️ THERE IS NO ELECTRIC LIGHT ANYWHERE IN THE PICTURE. Cold shadowless moonlight, all"
      + " colour gone.",
    u: ["ည ဆယ့်တစ်နာရီလောက်ရောက်တော့ ရွာတစ်ရွာလုံး တိတ်သွားတယ်။", "ပိုးကောင်သံ။ ဖားအော်သံ။"] },

  { t: "Wind in the Bamboo", l: "လယ်ကွင်း", k: "field", tm: "moon",
    lamp: true,
    w: ["လယ်ကွင်း"],
    g: "ဝါးပင်တွေ လေတိုက်သံ။ အဲဒါတွေပဲ ကြားနေရတယ်။ / ကျွန်တော် အိပ်ပျော်ခါနီးမှာ—",
    p: "Out on the bunds under the moon, ⚠️ A TALL CLUMP OF BAMBOO STANDING BLACK AGAINST THE SKY AT"
      + " ONE EDGE OF FRAME with its canes leaning over and its fine leaves massed at the top. The"
      + " open cut paddy running away pale and flat beside it to the horizon. ⚠️ NOTHING ELSE IS IN"
      + " THE FRAME AT ALL. Cold blue-grey light, no colour, no shadow, enormous sky.",
    u: ["ဝါးပင်တွေ လေတိုက်သံ။", "အဲဒါတွေပဲ ကြားနေရတယ်။", "ကျွန်တော် အိပ်ပျော်ခါနီးမှာ—"] },

  { t: "My Eyes Opened", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "thet", tm: "night",
    lamp: true,
    w: ["သက်ပိုင်"],
    g: "⚠️ အိမ်အောက်ကနေ အသံတစ်ခု ကြားလိုက်ရတယ် — **“သက်ပိုင်…”** / ကျွန်တော် မျက်လုံးပွင့်သွားတယ်။"
      + " ယောကျ်ားတစ်ယောက်ရဲ့ အသံ။ / ⚠️ **“သက်ပိုင်…”** — ဒီတစ်ခါ အိမ်နောက်ဘက်က ကြားရတယ်။",
    p: "Close on Thet Paing lying on the mattress, ⚠️ HIS EYES WIDE OPEN AND FIXED ON NOTHING"
      + " DIRECTLY ABOVE HIM, the rest of his face completely slack and still half asleep. ⚠️ HE HAS"
      + " NOT MOVED HIS HEAD. The blanket at his chin, one arm under his cheek. Low warm lantern light"
      + " coming across the floor and up onto him from below; the rafters above him black.",
    u: ["အိမ်အောက်ကနေ အသံတစ်ခု ကြားလိုက်ရတယ်။ “သက်ပိုင်…”", "ကျွန်တော် မျက်လုံးပွင့်သွားတယ်။", "ယောကျ်ားတစ်ယောက်ရဲ့ အသံ။", "“သက်ပိုင်…” ဒီတစ်ခါ အိမ်နောက်ဘက်က ကြားရတယ်။"] },

  { t: "The Voice Stopped", l: "အိပ်ခန်း", k: "room", tm: "night",
    lamp: true,
    w: ["အိပ်ခန်း","မီးအိမ်"],
    g: "ကျွန်တော် အဘွားပြောထားတာ သတိရလို့ မထူးဘဲ ငြိမ်နေလိုက်တယ်။ / ခဏကြာတော့ အသံပျောက်သွားတယ်။"
      + " ဒါပေမဲ့—",
    p: "In the upstairs room at chest height. ⚠️ THE HURRICANE LANTERN STANDS ALONE ON THE BARE"
      + " FLOORBOARDS IN THE MIDDLE OF FRAME WITH ITS FLAME TURNED LOW AND PERFECTLY UPRIGHT, a close"
      + " warm pool round its foot. Beyond the pool the plank walls, the shut door and the shuttered"
      + " window are only just legible. ⚠️ NOTHING IN THE ROOM IS MOVING AND THE FLAME IS NOT LEANING."
      + " Solid black in all four corners.",
    u: ["ကျွန်တော် အဘွားပြောထားတာ သတိရလို့ မထူးဘဲ ငြိမ်နေလိုက်တယ်။", "ခဏကြာတော့ အသံပျောက်သွားတယ်။ ဒါပေမဲ့—"] },

  { t: "Dauk", c: [[1, "stinger"]], l: "အဖေ့အိမ်", k: "stairs", tm: "moon",
    lamp: true,
    w: ["အဖေ့အိမ်"],
    g: "⚠️ **ဒေါက်… ဒေါက်… ဒေါက်…** / သစ်သားလှေကား တက်လာတဲ့ ခြေသံ။ တစ်လှမ်းချင်း။ / **ဒေါက်…"
      + " ဒေါက်…**",
    p: "Low at the foot of the wooden staircase outside, looking up the plank treads to the landing."
      + " ⚠️ THE EIGHT BARE TREADS RUN UP AND AWAY FROM CAMERA, the lower ones picked out pale"
      + " blue-grey by the moon and the upper ones going into black before they reach the landing. The"
      + " grain of the wood and the heads of the nails are sharp in the nearest tread. ⚠️ THERE IS"
      + " NOBODY ON THE STAIRCASE. Cold shadowless light, no colour at all.",
    u: ["ဒေါက်… ဒေါက်… ဒေါက်…", "သစ်သားလှေကားတက်လာတဲ့ ခြေသံ။", "တစ်လှမ်းချင်း။ ဒေါက်… ဒေါက်…"] },

  { t: "It Stopped at the Door", l: "အိပ်ခန်း", k: "doorlow", tm: "night",
    lamp: true,
    w: ["အိပ်ခန်း"],
    g: "ကျွန်တော် စောင်ထဲကနေ တံခါးကို စိုက်ကြည့်နေတယ်။ / ⚠️ ခြေသံက တံခါးရှေ့မှာ ရပ်သွားတယ်။"
      + " ပြီးတော့—",
    p: "A foot off the floorboards, looking along them at the bottom edge of the shut plank door. ⚠️"
      + " A THIN BAND OF COLD BLUE NIGHT SHOWS IN THE GAP UNDER THE DOOR ACROSS THE WHOLE WIDTH OF IT,"
      + " ⚠️ AND THE BAND IS BROKEN IN TWO PLACES, close together and side by side, by two solid"
      + " blocks of black standing in it. The warm lantern light lies along the boards from behind"
      + " camera. ⚠️ NOTHING IS MOVING.",
    u: ["ကျွန်တော် စောင်ထဲကနေ တံခါးကို စိုက်ကြည့်နေတယ်။", "ခြေသံက တံခါးရှေ့မှာ ရပ်သွားတယ်။ ပြီးတော့—"] },

  { t: "My Father's Voice", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "thet", tm: "night",
    lamp: true,
    w: ["သက်ပိုင်"],
    g: "⚠️ **“သား…”** — ကျွန်တော့်တစ်ကိုယ်လုံး ကြက်သီးထသွားတယ်။ / ⚠️ **အဖေ့အသံ။** “တံခါးဖွင့်ဦး…”",
    p: "Close on Thet Paing under the blanket, ⚠️ HIS EYES ENORMOUS AND HIS WHOLE FACE GONE RIGID —"
      + " the brows up, the nostrils flared, the jaw clamped shut under the cloth. ⚠️ HE IS NOT"
      + " BLINKING. A single line of lantern light along the bridge of his nose and one cheekbone; the"
      + " rest of him in deep shadow. ⚠️ HE HAS NOT MOVED A MUSCLE AND HE IS NOT GOING TO.",
    u: ["“သား…” ကျွန်တော့်တစ်ကိုယ်လုံး ကြက်သီးထသွားတယ်။", "အဖေ့အသံ။ “တံခါးဖွင့်ဦး…”"] },

  { t: "Six Months Dead", l: "အိပ်ခန်း", k: "insert", tm: "night",
    lamp: true,
    w: ["အဖေ့ဓာတ်ပုံ"],
    g: "ကျွန်တော့်အဖေ ဆုံးတာ ခြောက်လရှိပြီ။",
    p: "Tight insert on the small old framed photograph hanging on the plank wall of the room,"
      + " filling the frame. ⚠️ A FADED BLACK-AND-WHITE PORTRAIT OF A BURMESE MAN OF ABOUT TWENTY"
      + " BEHIND DUSTY GLASS — collarless white shirt, hair combed flat, looking straight out of the"
      + " frame without smiling. A spray of dried flowers tucked behind one corner. ⚠️ THE LANTERN"
      + " LIGHT COMES ACROSS THE GLASS AT A HARD ANGLE and the face is still completely clear through"
      + " it.",
    u: ["ကျွန်တော့်အဖေ ဆုံးတာ ခြောက်လရှိပြီ။"] },

  { t: "In the Morning I Went Out to Look", l: "အိပ်ခန်း", k: "door", tm: "dawn",
    w: ["အိပ်ခန်း","သက်ပိုင်"],
    g: "ကျွန်တော် ဘာမှမပြောဘဲ မနက်အထိ စောင်ခြုံပြီး နေခဲ့တယ်။ / မနက်ရောက်တော့ တံခါးရှေ့ကို"
      + " ထွက်ကြည့်တယ်။",
    p: "Square on the plank door from inside the room in first light. ⚠️ THE DOOR STANDS HALF OPEN"
      + " INWARDS AND THET PAING IS IN THE OPENING WITH HIS BACK TO CAMERA AND ONE HAND STILL ON THE"
      + " EDGE OF IT, stopped dead, his head down and looking at the landing boards in front of his"
      + " feet. ⚠️ FLAT GREY DAWN LIGHT COMES IN PAST HIM and lies across the floorboards of the room."
      + " No colour anywhere in the frame.",
    u: ["ကျွန်တော် ဘာမှမပြောဘဲ မနက်အထိ စောင်ခြုံပြီး နေခဲ့တယ်။", "မနက်ရောက်တော့ တံခါးရှေ့ကို ထွက်ကြည့်တယ်။"] },

  { t: "Mud", c: [[1, "stinger"]], l: "အဖေ့အိမ်", k: "ground", tm: "dawn",
    w: ["အဖေ့အိမ်"],
    g: "ရွှံ့ခြေရာတွေ ရှိတယ်။ / ဒါပေမယ့် လူခြေရာ မဟုတ်ဘူး။",
    p: "A foot above the landing boards outside the door in flat grey dawn light. ⚠️ A SPREAD OF WET"
      + " BROWN MUD LIES ACROSS THE BARE PLANKS IN FRONT OF THE DOORWAY, dark against the pale"
      + " weathered wood and still glistening. ⚠️ THE MUD IS TRODDEN AND MARKED. Beyond it the landing"
      + " rail and the top of the staircase running down out of frame. ⚠️ EVERYTHING AROUND THE"
      + " DOORWAY IS BONE DRY. No shadow, no colour.",
    u: ["ရွှံ့ခြေရာတွေရှိတယ်။", "ဒါပေမယ့် လူခြေရာမဟုတ်ဘူး။"] },

  { t: "The Soles Were Turned the Wrong Way", c: [[1, "bigstinger"]], l: "အဖေ့အိမ်", k: "ground", tm: "dawn",
    print: true,
    w: ["ခြေရာ","အဖေ့အိမ်"],
    g: "⚠️ **ခြေဖဝါးတွေက နောက်ပြန်လှည့်နေတယ်။**",
    p: "A foot above the landing boards, looking along the line of prints from the top of the"
      + " staircase to the door. ⚠️ FIVE OR SIX PRINTS RUN AWAY FROM CAMERA AND UP TO THE DOORWAY, ⚠️"
      + " AND EVERY SINGLE ONE OF THEM HAS ITS FIVE TOE MARKS POINTING BACK TOWARDS CAMERA AND ITS"
      + " HEEL PRESSED AGAINST THE DOOR — the whole line walks one way and faces the other. Clean"
      + " sharp edges, ridged rims. Flat grey dawn light, no shadow, no colour.",
    u: ["ခြေဖဝါးတွေက နောက်ပြန်လှည့်နေတယ်။"] },

  { t: "I Started Asking About My Father", l: "ရွာလမ်း", k: "road", tm: "day",
    w: ["ရွာလမ်း","သက်ပိုင်"],
    g: "အဲဒီနေ့ကစပြီး အဖေ့အကြောင်း ကျွန်တော် စုံစမ်းတော့တယ်။ / ဒါပေမဲ့ မေးတဲ့လူတိုင်းက — “မသိဘူး”",
    p: "Along the village lane in hard flat daylight. ⚠️ THET PAING IS WALKING TOWARDS CAMERA UP THE"
      + " MIDDLE OF THE LANE WITH HIS HEAD TURNED TO ONE SIDE, looking in through a bamboo gate as he"
      + " passes it, one hand out towards it. Pale blue shirt, the canvas bag at his hip. The stilt"
      + " houses and the ruts run away behind him. ⚠️ THERE IS NOBODY IN THE GATEWAY HE IS LOOKING"
      + " INTO. Dust, white light, short shadows.",
    u: ["အဲဒီနေ့ကစပြီး အဖေ့အကြောင်း ကျွန်တော် စုံစမ်းတော့တယ်။", "ဒါပေမဲ့ မေးတဲ့လူတိုင်းက— “မသိဘူး”"] },

  { t: "Do Not Ask", l: "ရွာလမ်း", k: "road", tm: "day",
    w: ["ရွာလမ်း","ရွာသားတွေ"],
    g: "“မမေးနဲ့” ဆိုပြီး ရှောင်ကြတယ်။ / နောက်ဆုံး ဘေးအိမ်က အဘွားဒေါ်ရီကိုပဲ ကျွန်တော်"
      + " အတင်းမေးရတော့တယ်။",
    p: "Along the village lane. ⚠️ A WOMAN HAS PULLED A SPLIT-BAMBOO GATE SHUT ACROSS HER PATH AND"
      + " IS STILL HOLDING IT, her body already turned back towards her house and only her face still"
      + " towards camera, the chin down. ⚠️ TWO MORE VILLAGERS BEYOND HER ARE WALKING AWAY UP THE LANE"
      + " WITH THEIR BACKS TURNED. Hard white light, dust, deep ruts. ⚠️ NOBODY IS LOOKING AT ANYBODY"
      + " ELSE.",
    u: ["“မမေးနဲ့” ဆိုပြီး ရှောင်ကြတယ်။", "နောက်ဆုံး ဘေးအိမ်က အဘွားဒေါ်ရီကိုပဲ ကျွန်တော် အတင်းမေးရတော့တယ်။"] },

  { t: "He Did Not Leave to Work", c: [[1, "stinger"]], l: "ရွာလမ်း", k: "yi", tm: "day",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "အဘွားက အကြာကြီး ငြိမ်နေပြီးမှ— / “မင်းအဖေ ရွာကထွက်သွားတာ အလုပ်သွားလုပ်တာ မဟုတ်ဘူးသား…” —"
      + " “ဒါဆို ဘာလို့လဲ?”",
    p: "Close on Daw Yi, ⚠️ HER EYES UP OFF THE TRAY AND STRAIGHT INTO THE LENS NOW, her mouth"
      + " moving on a long quiet sentence. ⚠️ HER FACE IS STEADY AND HER CHIN IS LEVEL — she has"
      + " decided to say it. Deep lines, thanaka, grey hair pinned. Soft shaded light under the house,"
      + " the bar of hard sun out of focus behind her.",
    u: ["အဘွားက အကြာကြီးငြိမ်နေပြီးမှ—", "“မင်းအဖေ ရွာကထွက်သွားတာ အလုပ်သွားလုပ်တာ မဟုတ်ဘူးသား…”", "“ဒါဆို ဘာလို့လဲ?”"] },

  { t: "He Ran", c: [[1, "bigstinger"]], l: "ရွာလမ်း", k: "yi", tm: "day",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "⚠️ “**ထွက်ပြေးသွားတာ။**” / ကျွန်တော် ကြောင်သွားတယ်။",
    p: "Close on Daw Yi, pushed in tighter, ⚠️ HER MOUTH CLOSING ON THE LAST SYLLABLE OF A SHORT"
      + " WORD AND HER EYES HELD HARD ON THE LENS, not blinking. ⚠️ THE WHOLE FACE IS SET AND ENTIRELY"
      + " WITHOUT PITY. One hand has come up out of the tray and is resting flat on the rim of it."
      + " Soft shaded light, the background burnt to white.",
    u: ["“ထွက်ပြေးသွားတာ။”", "ကျွန်တော် ကြောင်သွားတယ်။"] },

  { t: "His Name Was Hpo Khwar", l: "ရွာလမ်း", k: "khwar", tm: "day",
    past: true, khwar: true,
    w: ["ဖိုးခွား"],
    g: "လွန်ခဲ့တဲ့ နှစ်သုံးဆယ်ကျော်က ဒီရွာမှာ လူငယ်တစ်ယောက် ပျောက်ဖူးတယ်တဲ့။ / နာမည်က **ဖိုးခွား**။",
    p: "Close on Hpo Khwar in the lane in warm hard daylight, ⚠️ SQUARE ON TO CAMERA AND GRINNING"
      + " BROADLY WITH HIS HEAD TIPPED BACK A LITTLE, his eyes creased almost shut against the sun. ⚠️"
      + " HE IS ENTIRELY WELL AND ENTIRELY HAPPY. White singlet, a thin cotton towel over one"
      + " shoulder, a smear of thanaka down his nose, hair sticking up at the crown. Warm light,"
      + " coarse grain, the bamboo fence soft behind him.",
    u: ["လွန်ခဲ့တဲ့ နှစ်သုံးဆယ်ကျော်က ဒီရွာမှာ လူငယ်တစ်ယောက် ပျောက်ဖူးတယ်တဲ့။", "နာမည်က ဖိုးခွား။"] },

  { t: "He Answered", c: [[1, "bigstinger"]], l: "ရွာလမ်း", k: "window", tm: "night",
    lamp: true, past: true, khwar: true,
    w: ["ဖိုးခွား","မီးအိမ်"],
    g: "တစ်ညမှာ သူ့အမေက လယ်ကွင်းဘက်ကနေ — **“ဖိုးခွား…”** လို့ ခေါ်သံကြားတယ်။ / ⚠️ ဖိုးခွားက —"
      + " **“ဗျာ…”** လို့ ပြန်ထူးလိုက်တယ်။",
    p: "At a square shuttered window opening inside a village house, thirty years earlier. ⚠️ HPO"
      + " KHWAR HAS LEANED INTO THE OPENING WITH ONE HAND ON THE FRAME AND HIS HEAD AND SHOULDERS OUT"
      + " INTO THE NIGHT, his mouth open on one short call, his face turned away towards the fields."
      + " ⚠️ HE IS COMPLETELY RELAXED AND HALF SMILING. A low lantern behind him throws warm light up"
      + " his back; beyond the opening everything is solid black.",
    u: ["တစ်ညမှာ သူ့အမေက လယ်ကွင်းဘက်ကနေ—", "“ဖိုးခွား…” လို့ ခေါ်သံကြားတယ်။", "ဖိုးခွားက— “ဗျာ…”", "လို့ ပြန်ထူးလိုက်တယ်။"] },

  { t: "They Searched All Day", l: "လယ်ကွင်း", k: "field", tm: "day",
    past: true,
    w: ["လယ်ကွင်း","ရွာသားတွေ"],
    g: "မနက်ရောက်တော့ ဖိုးခွား ပျောက်သွားတယ်။ / ရွာသားတွေ တစ်နေကုန် လိုက်ရှာကြတယ်။ / လယ်ထဲလည်း"
      + " မရှိဘူး။ ချောင်းထဲလည်း မရှိဘူး။",
    p: "Out on the open paddy in hard white daylight, thirty years earlier. ⚠️ EIGHT OR NINE"
      + " VILLAGERS ARE SPREAD RIGHT ACROSS THE FRAME IN A LONG RAGGED LINE, walking away from camera"
      + " over the stubble with wide gaps between them, ⚠️ EVERY ONE OF THEM WITH THEIR HEAD DOWN AND"
      + " LOOKING AT THE GROUND. A few carry long bamboo poles. Conical hats, singlets, hitched"
      + " longyis. Enormous pale sky, short hard shadows, dust.",
    u: ["မနက်ရောက်တော့ ဖိုးခွား ပျောက်သွားတယ်။", "ရွာသားတွေ တစ်နေကုန်လိုက်ရှာကြတယ်။", "လယ်ထဲလည်း မရှိဘူး။", "ချောင်းထဲလည်း မရှိဘူး။"] },

  { t: "They Found Him in the Old Well", c: [[1, "bigstinger"]], l: "ရေတွင်းဟောင်း", k: "wide", tm: "day",
    past: true,
    w: ["ရေတွင်းဟောင်း","ရွာသားတွေ"],
    g: "သုံးရက်မြောက်နေ့ကျမှ— / ⚠️ ရွာထိပ်က ရေတွင်းဟောင်းထဲမှာ သူ့အလောင်းကို တွေ့တယ်။",
    p: "Wide on the old well in hard white daylight, thirty years earlier. ⚠️ SIX VILLAGERS ARE"
      + " GATHERED CLOSE ROUND THE BRICK RIM WITH THEIR BACKS TO CAMERA, pressed shoulder to shoulder"
      + " and every one of them bent forward over it and looking straight down into the mouth. ⚠️ THE"
      + " ROPE RUNS OVER THE PULLEY AND DOWN INTO THE BLACK AND TWO MEN ARE HOLDING IT. ⚠️ THE WELL"
      + " MOUTH ITSELF IS HIDDEN BY THE MEN AND NOTHING INSIDE IT IS IN FRAME. Dry weeds, dust, short"
      + " hard shadows.",
    u: ["သုံးရက်မြောက်နေ့ကျမှ—", "ရွာထိပ်က ရေတွင်းဟောင်းထဲမှာ သူ့အလောင်းကို တွေ့တယ်။"] },

  { t: "At Least Ten Days", c: [[1, "stinger"]], l: "ရေတွင်းဟောင်း", k: "medic", tm: "day",
    past: true,
    w: ["ဆေးဆရာအို"],
    g: "⚠️ ထူးဆန်းတာက — **သူ့အလောင်းက သေထားတာ သုံးရက် မဟုတ်ဘူး။** / ⚠️ ရွာက ဆေးဆရာအိုက ကြည့်ပြီး —"
      + " “ဒီကောင် သေတာ အနည်းဆုံး **ဆယ်ရက်ရှိပြီ**”",
    p: "Close on the old village medic beside the well in hard daylight, thirty years earlier. ⚠️ HE"
      + " IS STRAIGHTENING UP FROM SOMETHING BELOW FRAME AND LOOKING OFF TO ONE SIDE AS HE SPEAKS, the"
      + " wire-framed glasses low on his nose and his eyes above them. ⚠️ HIS FACE IS FLAT, CERTAIN"
      + " AND COMPLETELY UNSURPRISED. One hand is raised and he is wiping the fingers of it on a"
      + " cloth. White collarless shirt, thin grey hair. ⚠️ NOTHING BUT THE MEDIC IS IN FRAME.",
    u: ["ထူးဆန်းတာက— သူ့အလောင်းက သေထားတာ သုံးရက်မဟုတ်ဘူး။", "ရွာက ဆေးဆရာအိုက ကြည့်ပြီး—", "“ဒီကောင် သေတာ အနည်းဆုံး ဆယ်ရက်ရှိပြီ”", "လို့ပြောခဲ့တယ်။"] },

  { t: "Who Was the One They Were Seeing", c: [[1, "bigstinger"]], l: "ရွာလမ်း", k: "road", tm: "day",
    past: true,
    w: ["ရွာလမ်း","ဖိုးခွား"],
    g: "ဒါဆို ပျောက်မသွားခင် ခုနစ်ရက်လုံး— / ⚠️ ရွာထဲမှာ သူတို့မြင်နေရတဲ့ ဖိုးခွားက… **ဘယ်သူလဲ။**",
    p: "Along the village lane from behind, thirty years earlier. ⚠️ HPO KHWAR IS WALKING AWAY FROM"
      + " CAMERA UP THE MIDDLE OF THE LANE WITH HIS BACK TO IT, small in the middle of frame, ⚠️ HIS"
      + " FACE COMPLETELY OUT OF THE PICTURE. The white singlet, the towel over the shoulder, the"
      + " hitched longyi. ⚠️ THE TWO VILLAGERS AT THE GATE BEHIND HIM HAVE BOTH TURNED AND ARE"
      + " WATCHING HIM GO. Hard white light, long lane, dust.",
    u: ["ဒါဆို ပျောက်မသွားခင် ခုနစ်ရက်လုံး—", "ရွာထဲမှာ သူတို့မြင်နေရတဲ့ ဖိုးခွားက… ဘယ်သူလဲ။"] },

  { t: "Whoever Answered", l: "ရွာလမ်း", k: "wide", tm: "moon",
    lamp: true,
    w: ["ရွာလမ်း"],
    g: "အဲဒီကစပြီး ညဘက် နာမည်ခေါ်သံတွေ စကြားလာတာတဲ့။ / တစ်ယောက်ယောက်က ထူးလိုက်ရင် — ရက်ပိုင်းအတွင်း"
      + " ပျောက်သွားတယ်။",
    p: "Wide along the village lane under a high moon. ⚠️ ONE SINGLE SHUTTERED WINDOW HALFWAY DOWN"
      + " THE LANE CARRIES A THIN WARM LINE OF LANTERN LIGHT AT THE EDGE OF ITS SHUTTER and every"
      + " other opening in the frame is black. The roofs and the bamboo stand black against the sky,"
      + " the ruts pale blue-grey. ⚠️ THE LANE IS EMPTY. Cold shadowless light, all colour gone.",
    u: ["အဲဒီကစပြီး ညဘက် နာမည်ခေါ်သံတွေ စကြားလာတာတဲ့။", "တစ်ယောက်ယောက်က ထူးလိုက်ရင်—", "ရက်ပိုင်းအတွင်း ပျောက်သွားတယ်။"] },

  { t: "Something About Them Was Different", l: "ရွာလမ်း", k: "villager", tm: "dawn",
    w: ["ရွာသားတွေ"],
    g: "ပြီးရင် သူတို့ပြန်လာတယ်။ ဒါပေမဲ့… / ပြန်လာတဲ့လူတွေက အရင်လူနဲ့ တစ်ခုခု မတူတော့ဘူး။",
    p: "Close on one villager in the lane in flat grey dawn light, ⚠️ SQUARE ON TO CAMERA WITH THE"
      + " EYES LEVEL AND OPEN AND THE FACE COMPLETELY AT REST — no expression of any kind on it, the"
      + " mouth closed and the brows flat. ⚠️ EVERY FEATURE IS ENTIRELY ORDINARY AND NOTHING ABOUT THE"
      + " FACE IS ALTERED OR MARKED. Thanaka on the cheeks, an ordinary cotton blouse. ⚠️ THE"
      + " STILLNESS IS THE ONLY THING WRONG. Cold even light, no shadow.",
    u: ["ပြီးရင် သူတို့ပြန်လာတယ်။ ဒါပေမဲ့…", "ပြန်လာတဲ့လူတွေက အရင်လူနဲ့ တစ်ခုခု မတူတော့ဘူး။"] },

  { t: "Your Father Answered Once Too", c: [[1, "bigstinger"]], l: "ရွာလမ်း", k: "yi", tm: "day",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "အဘွားက ကျွန်တော့်ကို စိုက်ကြည့်တယ်။ / ⚠️ “**မင်းအဖေကလည်း တစ်ခါ ထူးခဲ့ဖူးတယ်**” —"
      + " ကျွန်တော့်ရင်ထဲ ထိတ်သွားတယ်။",
    p: "Close on Daw Yi, pushed in tight, ⚠️ HER MOUTH MOVING ON A SHORT FLAT SENTENCE AND HER EYES"
      + " STILL HARD ON THE LENS. ⚠️ ONE EYEBROW HAS COME UP VERY SLIGHTLY AND NOTHING ELSE IN THE"
      + " FACE HAS MOVED. The lines round her mouth, the texture of the thanaka, the grey at her"
      + " temple all sharp. Soft shaded light; the background entirely burnt out to white.",
    u: ["အဘွားက ကျွန်တော့်ကို စိုက်ကြည့်တယ်။", "“မင်းအဖေကလည်း တစ်ခါ ထူးခဲ့ဖူးတယ်”", "ကျွန်တော့်ရင်ထဲ ထိတ်သွားတယ်။"] },

  { t: "Her Face Went White", c: [[1, "stinger"]], l: "ရွာလမ်း", k: "yi", tm: "day",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "“ဒါပေမဲ့ အဖေက မပျောက်ဘူးလေ” / ⚠️ အဘွားမျက်နှာ ဖြူသွားတယ်။ “ဘယ်သူပြောလဲ?”",
    p: "Close on Daw Yi, ⚠️ HER FACE GONE GREY AND FLAT UNDER THE THANAKA, SEVERAL SHADES PALER THAN"
      + " IT WAS A MOMENT BEFORE, her eyes wide and fixed and her mouth open on a short question. ⚠️"
      + " ONE HAND HAS COME OFF HER KNEE AND IS GRIPPING THE EDGE OF THE STOOL. ⚠️ HER SKIN IS SMOOTH"
      + " AND WHOLE AND UNMARKED and nothing about the face is altered. Soft shaded light; the pallor"
      + " is the only change.",
    u: ["“ဒါပေမဲ့ အဖေက မပျောက်ဘူးလေ”", "အဘွားမျက်နှာ ဖြူသွားတယ်။", "“ဘယ်သူပြောလဲ?”"] },

  { t: "He Was Gone Three Days", l: "ရွာလမ်း", k: "yi", tm: "day",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "အခန်းထဲ တိတ်သွားတယ်။ / ⚠️ “မင်းအဖေ သုံးရက်ပျောက်ခဲ့တယ်။ ပြီးတော့ သူ့ဘာသာသူ ပြန်လာတာ”",
    p: "Close on Daw Yi, ⚠️ HER EYES DROPPED OFF CAMERA AND DOWN TO THE EARTH NOW AND HER MOUTH"
      + " MOVING STEADILY ON A LONGER SENTENCE, the face still grey. ⚠️ SHE IS TELLING IT PLAINLY AND"
      + " SHE IS NOT LOOKING UP. Both hands have come together in her lap at the bottom of frame. Soft"
      + " shaded light; a few grains of spilled rice on the ground soft in the foreground.",
    u: ["အခန်းထဲ တိတ်သွားတယ်။", "“မင်းအဖေ သုံးရက်ပျောက်ခဲ့တယ်။ ပြီးတော့ သူ့ဘာသာသူ ပြန်လာတာ”"] },

  { t: "A Week Later He Left the Village", l: "ရွာလမ်း", k: "yi", tm: "day",
    yi: true,
    w: ["ဒေါ်ရီ"],
    g: "“ပြန်လာပြီး နောက်တစ်ပတ်မှာ ရွာကနေ ထွက်သွားတာပဲ” — ကျွန်တော် စကားမပြောနိုင်တော့ဘူး။",
    p: "Close on Daw Yi, ⚠️ HER EYES BACK UP AND INTO THE LENS AND HER MOUTH CLOSING ON THE END OF"
      + " THE SENTENCE, the chin dipping once. ⚠️ THE FACE HAS SETTLED AND THE COLOUR IS COMING BACK"
      + " INTO IT. The lines round her eyes, the worn thanaka, the loose collar of the blouse. Soft"
      + " shaded light under the house; hard white sunlight out of focus behind her shoulder.",
    u: ["“ပြန်လာပြီး နောက်တစ်ပတ်မှာ ရွာကနေ ထွက်သွားတာပဲ”", "ကျွန်တော် စကားမပြောနိုင်တော့ဘူး။"] },

  { t: "But It Was Pouring", l: "အဖေ့အိမ်", k: "house", tm: "rain",
    lamp: true,
    w: ["အဖေ့အိမ်"],
    g: "အဲဒီညမှာပဲ မြို့ပြန်ဖို့ ဆုံးဖြတ်လိုက်တယ်။ / ဒါပေမဲ့ မိုးသည်းနေတော့ မနက်မှပဲ သွားလို့ရမယ်။",
    p: "From the dirt yard in heavy rain at night. ⚠️ THE STILT HOUSE STANDS BLACK AGAINST A BLACK"
      + " SKY WITH RAIN POURING OFF THE EDGE OF THE THATCH IN A CONTINUOUS SHEET and water running"
      + " down the posts. ⚠️ ONE THIN WARM LINE OF LANTERN LIGHT SHOWS AT THE EDGE OF THE SHUTTER UP"
      + " ON THE LANDING and the rain falls in long bright streaks through it. The yard has gone to"
      + " mud and standing water. ⚠️ EVERYTHING BEYOND THE HOUSE IS BLACK.",
    u: ["အဲဒီညမှာပဲ မြို့ပြန်ဖို့ ဆုံးဖြတ်လိုက်တယ်။", "ဒါပေမဲ့ မိုးသည်းနေတော့ မနက်မှပဲ သွားလို့ရမယ်။"] },

  { t: "Around Midnight", l: "အိပ်ခန်း", k: "room", tm: "night",
    lamp: true,
    w: ["အိပ်ခန်း","မီးအိမ်"],
    g: "ည ၁၂ နာရီလောက်မှာ — **“သက်ပိုင်…”** ထပ်ကြားရတယ်။",
    p: "In the upstairs room at chest height with rain hammering on the iron roof. ⚠️ THE HURRICANE"
      + " LANTERN STANDS ON THE FLOORBOARDS WITH ITS FLAME LOW, and ⚠️ A WIDE DARK PATCH OF RAINWATER"
      + " HAS SPREAD ACROSS THE BOARDS FROM UNDER THE SHUT DOOR, the lantern light picked up in it as"
      + " one long broken orange streak. The bed, the trunk, the packed bag. The corners of the room"
      + " are solid black.",
    u: ["ည ဆယ့်နှစ်နာရီလောက်မှာ—", "“သက်ပိုင်…” ထပ်ကြားရတယ်။"] },

  { t: "Not My Father's Voice This Time", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "thet", tm: "night",
    lamp: true,
    w: ["သက်ပိုင်"],
    g: "⚠️ ဒီတစ်ခါ အဖေ့အသံမဟုတ်ဘူး။ **အဘွားဒေါ်ရီအသံ။** / “သက်ပိုင်… တံခါးဖွင့်…”",
    p: "Close on Thet Paing sitting up on the edge of the bed, ⚠️ HIS HEAD TURNED SHARPLY TOWARDS"
      + " THE DOOR OFF FRAME AND ONE EAR COMING FORWARD, his eyes unfocused and off to the side the"
      + " way they go when somebody is listening rather than looking. ⚠️ HIS MOUTH IS OPEN. Low warm"
      + " lantern light from floor level under his chin and brows; everything above him black. Rain"
      + " noise implied by nothing visible.",
    u: ["ဒီတစ်ခါ အဖေ့အသံမဟုတ်ဘူး။", "အဘွားဒေါ်ရီအသံ။", "“သက်ပိုင်… တံခါးဖွင့်…”"] },

  { t: "She Really Was Standing There", c: [[1, "bigstinger"]], l: "အဖေ့အိမ်", k: "fromwindow", tm: "rain",
    lamp: true,
    w: ["ဒေါ်ရီ","အဖေ့အိမ်"],
    g: "ကျွန်တော် ပြတင်းပေါက်ကနေ ခိုးကြည့်လိုက်တယ်။ / ⚠️ အဘွားဒေါ်ရီ တကယ်ရပ်နေတယ်။ မိုးရေထဲမှာ။"
      + " ခေါင်းငုံ့ပြီး။",
    p: "Looking down and out from the window opening into the yard below in heavy rain. ⚠️ DAW YI IS"
      + " STANDING ALONE IN THE MUD DIRECTLY BELOW, soaked through, her blouse and longyi black with"
      + " water and clinging and her grey hair flat to her skull. ⚠️ HER HEAD IS BOWED RIGHT DOWN AND"
      + " HER FACE IS NOT IN THE PICTURE AT ALL, her arms straight at her sides. The rain falls past"
      + " her in long streaks. ⚠️ SHE IS PERFECTLY STILL. Everything beyond her black.",
    u: ["ကျွန်တော် ပြတင်းပေါက်ကနေ ခိုးကြည့်လိုက်တယ်။", "အဘွားဒေါ်ရီ တကယ်ရပ်နေတယ်။", "မိုးရေထဲမှာ။ ခေါင်းငုံ့ပြီး။"] },

  { t: "It Is Important", l: "အဖေ့အိမ်", k: "fromwindow", tm: "rain",
    lamp: true,
    w: ["ဒေါ်ရီ","အဖေ့အိမ်"],
    g: "“သား… တံခါးဖွင့်… အရေးကြီးလို့…” — ကျွန်တော် မဖွင့်ရဲဘူး။",
    p: "Looking down from the window into the rain, closer on Daw Yi below. ⚠️ HER HEAD IS STILL"
      + " BOWED AND HER FACE IS STILL OUT OF THE PICTURE, but ⚠️ ONE ARM HAS COME UP AND HER OPEN HAND"
      + " IS HELD OUT TOWARDS THE FOOT OF THE STAIRCASE, the palm turned up and the fingers spread,"
      + " water running off them. The soaked blouse, the flat grey hair, the mud round her bare feet."
      + " Rain in bright streaks. ⚠️ NOTHING ELSE ABOUT HER HAS MOVED.",
    u: ["“သား… တံခါးဖွင့်… အရေးကြီးလို့…”", "ကျွန်တော် မဖွင့်ရဲဘူး။"] },

  { t: "From Under My Bed", l: "အိပ်ခန်း", k: "underbed", tm: "night",
    lamp: true,
    w: ["အိပ်ခန်း"],
    g: "⚠️ အဲဒီအချိန် — ကျွန်တော့်ကုတင်အောက်ကနေ အသံတိုးတိုးတစ်ခု ထွက်လာတယ်။ / “သက်ပိုင်…” —"
      + " ကျွန်တော့်သွေးတွေ အေးခဲသွားတယ်။",
    p: "A few inches off the floorboards beneath the bed frame, looking out along the floor past the"
      + " legs of it. ⚠️ THE UNDERSIDE OF THE SLATS RUNS ACROSS THE TOP OF FRAME AND THE DUSTY BOARDS"
      + " RUN AWAY UNDERNEATH TO THE LOW WARM POOL OF THE LANTERN beyond the bed leg. ⚠️ THE SPACE"
      + " UNDER THE BED IS DEEP BLACK AND COMPLETELY EMPTY and the dust on the boards is smooth and"
      + " unmarked. Two bare feet standing on the floor at the far edge of the lamplight.",
    u: ["အဲဒီအချိန်— ကျွန်တော့်ကုတင်အောက်ကနေ အသံတိုးတိုးတစ်ခု ထွက်လာတယ်။", "“သက်ပိုင်…” ကျွန်တော့်သွေးတွေ အေးခဲသွားတယ်။"] },

  { t: "Do Not Trust the One Outside", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "underbed", tm: "night",
    lamp: true,
    w: ["အိပ်ခန်း"],
    g: "⚠️ **အဘွားဒေါ်ရီအသံပဲ။** / ⚠️ ကုတင်အောက်က အဘွားက တိုးတိုးလေးပြောတယ် — “**အပြင်ကဟာကို"
      + " မယုံနဲ့…**”",
    p: "A few inches off the floorboards under the bed frame, pushed deeper in. ⚠️ THE DUSTY BOARDS"
      + " RUN AWAY TO THE EDGE OF THE LANTERN POOL AND THE SPACE BETWEEN CAMERA AND THAT LIGHT IS"
      + " SOLID BLACK. ⚠️ THE TWO BARE FEET STANDING ON THE FLOOR BEYOND THE BED LEG ARE SHARP AND LIT"
      + " and the rest of the room is out of focus behind them. ⚠️ NOTHING IS UNDER THE BED AND THE"
      + " DUST IS UNMARKED.",
    u: ["အဘွားဒေါ်ရီအသံပဲ။", "ကုတင်အောက်က အဘွားက တိုးတိုးလေးပြောတယ်။", "“အပြင်ကဟာကို မယုံနဲ့…”"] },

  { t: "One Outside, One Underneath", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "room", tm: "night",
    lamp: true,
    w: ["အိပ်ခန်း","သက်ပိုင်","မီးအိမ်"],
    g: "ကျွန်တော် လုံးဝ မလှုပ်ရဲတော့ဘူး။ / ⚠️ အပြင်မှာလည်း အဘွားရှိတယ်။ **ကုတင်အောက်မှာလည်း"
      + " အဘွားရှိတယ်။**",
    p: "In the upstairs room at chest height, holding the whole space in one frame. ⚠️ THET PAING"
      + " SITS ON THE EDGE OF THE BED IN THE MIDDLE OF THE FRAME WITH THE SHUTTERED WINDOW ON ONE SIDE"
      + " OF HIM AND THE BLACK GAP UNDER THE BED ON THE OTHER, his head level and his eyes down. The"
      + " lantern on the boards, the sheet of rainwater spread from the door. ⚠️ THE ROOM HOLDS ONLY"
      + " HIM. Two small pools of light in a great deal of black.",
    u: ["ကျွန်တော် လုံးဝမလှုပ်ရဲတော့ဘူး။", "အပြင်မှာလည်း အဘွားရှိတယ်။", "ကုတင်အောက်မှာလည်း အဘွားရှိတယ်။"] },

  { t: "She Raised Her Head", l: "အဖေ့အိမ်", k: "fromwindow", tm: "rain",
    lamp: true,
    w: ["ဒေါ်ရီ","အဖေ့အိမ်"],
    g: "⚠️ ပြီးတော့ — ပြတင်းပေါက်အပြင်က အဘွားက ဖြည်းဖြည်း ခေါင်းမော့လာတယ်။",
    p: "Looking down from the window into the rain at Daw Yi in the mud below. ⚠️ HER HEAD HAS COME"
      + " UP AND HER FACE IS TURNED STRAIGHT UP AT CAMERA NOW, the rain falling directly onto it and"
      + " running off her chin and jaw. ⚠️ HER EYES ARE OPEN AND FIXED ON THE LENS AND HER MOUTH IS"
      + " STILL SHUT. ⚠️ THE FACE IS EXACTLY THE FACE FROM HER REFERENCE PLATE and nothing about it"
      + " has changed. Soaked blouse, flat grey hair, black beyond her.",
    u: ["ပြီးတော့— ပြတင်းပေါက်အပြင်က အဘွားက ဖြည်းဖြည်း ခေါင်းမော့လာတယ်။"] },

  { t: "The Smile", c: [[1, "bigstinger"]], l: "အဖေ့အိမ်", k: "fromwindow", tm: "rain",
    lamp: true, smile: true,
    w: ["ဒေါ်ရီ"],
    g: "⚠️ သူ့ပါးစပ်က **နားရွက်နားအထိ ပြဲပြီး** ပြုံးလာတယ်။",
    p: "Looking down from the window, tight on Daw Yi's upturned face in the rain. ⚠️ SHE IS SMILING"
      + " AND THE LINE OF HER LIPS RUNS STRAIGHT OUT ACROSS BOTH CHEEKS TO JUST UNDER THE EARS, far"
      + " wider than a mouth goes, ⚠️ THE LIPS THEMSELVES WHOLE AND UNBROKEN THE WHOLE LENGTH OF IT"
      + " and one even row of ordinary teeth showing behind them. ⚠️ HER EYES ARE UNCHANGED AND STILL"
      + " FIXED ON THE LENS. ⚠️ THE SKIN OF HER FACE IS SMOOTH, WHOLE AND UNMARKED. Rain running over"
      + " all of it.",
    u: ["သူ့ပါးစပ်က နားရွက်နားအထိ ပြဲပြီး ပြုံးလာတယ်။"] },

  { t: "Do Not Trust the One Underneath", l: "အဖေ့အိမ်", k: "fromwindow", tm: "rain",
    lamp: true, smile: true,
    w: ["ဒေါ်ရီ"],
    g: "⚠️ “သား…” “**အောက်ကဟာကို မယုံနဲ့။**” / ကျွန်တော် ဘယ်သူ့ကိုယုံရမှန်း မသိတော့ဘူး။",
    p: "Looking down from the window at Daw Yi's upturned face, pushed in tighter still. ⚠️ THE"
      + " SMILE IS HELD EXACTLY AS IT WAS AND SHE IS SPEAKING THROUGH IT — the teeth apart now, the"
      + " line of the lips unchanged and carried out to under the ears. ⚠️ ONE ARM HAS COME UP AND SHE"
      + " IS POINTING UP AT THE WINDOW WITH A STRAIGHT ARM AND ONE FINGER. Rain running down the arm"
      + " and off the face. ⚠️ THE EYES HAVE NOT MOVED.",
    u: ["“သား…” “အောက်ကဟာကို မယုံနဲ့။”", "ကျွန်တော် ဘယ်သူ့ကိုယုံရမှန်း မသိတော့ဘူး။"] },

  { t: "Doon", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "doorlow", tm: "night",
    lamp: true,
    w: ["အိပ်ခန်း"],
    g: "⚠️ အဲဒီအချိန်မှာ — အိမ်ရှေ့တံခါးကို တစ်ယောက်ယောက် အားနဲ့ ထုတယ်။ / ⚠️ **ဒုန်း! ဒုန်း!"
      + " ဒုန်း!**",
    p: "A foot off the floorboards, looking along them at the bottom edge of the shut door. ⚠️ THE"
      + " SHEET OF RAINWATER SPREAD ACROSS THE BOARDS IS RINGED ALL OVER WITH FINE CONCENTRIC RIPPLES,"
      + " ⚠️ AND THE GAP UNDER THE DOOR IS BROKEN BY MANY BLOCKS OF BLACK NOW — eight or ten of them,"
      + " close together, standing right across the whole width of it. The lantern light rakes along"
      + " the wet boards from behind camera.",
    u: ["အဲဒီအချိန်မှာ—", "အိမ်ရှေ့တံခါးကို တစ်ယောက်ယောက် အားနဲ့ ထုတယ်။", "ဒုန်း! ဒုန်း! ဒုန်း!"] },

  { t: "Many Voices", l: "အဖေ့အိမ်", k: "fromwindow", tm: "rain",
    lamp: true,
    w: ["ရွာသားတွေ","အဖေ့အိမ်"],
    g: "ပြီးတော့ လူအများကြီးရဲ့အသံ ကြားရတယ် — “သက်ပိုင်!” “တံခါးဖွင့်!”",
    p: "Looking down and out from the window into the yard below in heavy rain. ⚠️ TEN VILLAGERS ARE"
      + " STANDING IN THE MUD AT THE FOOT OF THE STAIRCASE PACKED CLOSE TOGETHER, all soaked through,"
      + " their clothes black with water and clinging. ⚠️ EVERY SINGLE FACE IS TURNED STRAIGHT UP AT"
      + " CAMERA AND EVERY MOUTH IS OPEN. The rain falls past them in long bright streaks. ⚠️ THEY ARE"
      + " ORDINARY VILLAGERS AND NOTHING ABOUT THEM IS ALTERED. Black beyond.",
    u: ["ပြီးတော့ လူအများကြီးရဲ့အသံ ကြားရတယ်။", "“သက်ပိုင်!” “သက်ပိုင်!” “တံခါးဖွင့်!”"] },

  { t: "But Nobody Here Calls a Name at Night", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "thet", tm: "night",
    lamp: true,
    w: ["သက်ပိုင်"],
    g: "ရွာသားတွေ။ လူဆယ်ယောက်လောက် တစ်ပြိုင်တည်း ကျွန်တော့်နာမည်ကို ခေါ်နေကြတယ်။ / ⚠️ ဒါပေမဲ့"
      + " ဒီရွာမှာ — **ညဘက် ဘယ်သူမှ နာမည်မခေါ်ဘူး။**",
    p: "Close on Thet Paing against the plank wall beside the window, ⚠️ HIS EYES WIDE AND FIXED AND"
      + " NO LONGER MOVING AT ALL, the pupils large, the whole face gone slack as the thing lands. ⚠️"
      + " HIS MOUTH HAS COME OPEN AND STAYED OPEN. Rain blowing in through the shutter gap onto one"
      + " cheek and down his neck. Warm lantern light from the floor on the other side of him. Black"
      + " all round.",
    u: ["ရွာသားတွေ။ လူဆယ်ယောက်လောက် တစ်ပြိုင်တည်း ကျွန်တော့်နာမည်ကို ခေါ်နေကြတယ်။", "ဒါပေမဲ့ ဒီရွာမှာ—", "ညဘက် ဘယ်သူမှ နာမည်မခေါ်ဘူး။"] },

  { t: "When the Sun Came Up", l: "အိပ်ခန်း", k: "room", tm: "dawn",
    w: ["အိပ်ခန်း"],
    g: "ကျွန်တော် ဘာအသံမှမထွက်ဘဲ မနက်အထိ ထိုင်နေလိုက်တယ်။ / နေထွက်တော့ အားလုံးတိတ်သွားတယ်။",
    p: "In the upstairs room in first light. ⚠️ THIN GREY-BLUE LIGHT IS COMING THROUGH THE GAPS"
      + " BETWEEN THE SHUTTER SLATS AND BETWEEN THE FLOORBOARDS IN FINE HARD LINES, laid in stripes"
      + " across the boards and up the opposite wall. ⚠️ THE SHEET OF RAINWATER ON THE FLOOR HAS DRIED"
      + " BACK TO A WIDE DARK TIDEMARK. The lantern stands cold and out, the glass smoked brown. ⚠️"
      + " THE ROOM IS EMPTY. No colour anywhere.",
    u: ["ကျွန်တော် ဘာအသံမှမထွက်ဘဲ မနက်အထိ ထိုင်နေလိုက်တယ်။", "နေထွက်တော့ အားလုံးတိတ်သွားတယ်။"] },

  { t: "Nobody on the Road", l: "ရွာလမ်း", k: "road", tm: "dawn",
    w: ["ရွာလမ်း"],
    g: "ကျွန်တော် အိမ်ထဲကနေ ပြေးထွက်ပြီး ရွာလမ်းအတိုင်း ထွက်လာတယ်။ / ⚠️ ထူးဆန်းတာက — လမ်းတစ်လျှောက်"
      + " ဘယ်သူမှ မရှိဘူး။ / အိမ်တိုင်း တံခါးပိတ်ထားတယ်။ ရွာတစ်ရွာလုံး တိတ်နေတယ်။",
    p: "Along the village lane in flat grey dawn light. ⚠️ THE LANE RUNS AWAY FROM CAMERA THE WHOLE"
      + " DEPTH OF FRAME AND THERE IS NOT ONE PERSON, NOT ONE ANIMAL AND NOT ONE MOVING THING IN IT."
      + " The stilt houses stand grey and shut on both sides, the ruts hold standing rainwater, dry"
      + " leaves lie plastered flat. ⚠️ NO WASHING HANGS ON ANY LINE. Thin cold even light, no shadow,"
      + " no colour.",
    u: ["ကျွန်တော် အိမ်ထဲကနေ ပြေးထွက်ပြီး ရွာလမ်းအတိုင်း ထွက်လာတယ်။", "ထူးဆန်းတာက— လမ်းတစ်လျှောက် ဘယ်သူမှမရှိဘူး။", "အိမ်တိုင်း တံခါးပိတ်ထားတယ်။", "ရွာတစ်ရွာလုံး တိတ်နေတယ်။"] },

  { t: "An Old Man With a Bullock Cart", l: "လှည်းလမ်း", k: "track", tm: "day",
    w: ["လှည်းလမ်း","နွားလှည်း","လူကြီး"],
    g: "ရွာအဝင်ရောက်တော့ နွားလှည်းနဲ့လာတဲ့ လူကြီးတစ်ယောက်ကို တွေ့တယ်။ / “ဦးလေး… တမာကုန်းကလူတွေ"
      + " ဘယ်သွားကြတာလဲ?”",
    p: "Along the cart track in hard flat daylight. ⚠️ A BULLOCK CART IS COMING TOWARDS CAMERA UP"
      + " THE RUTS — two pale humped zebu oxen in a wooden yoke, the tall spoked wheels, the low"
      + " bamboo bed with its cane hood — ⚠️ AND THE ELDER IS SITTING ON THE FRONT OF THE BED WITH THE"
      + " REINS SLACK IN ONE HAND AND A BAMBOO GOAD ACROSS HIS KNEES. Broad conical hat pushed back,"
      + " open faded shirt. Dust rising off the wheels. Thorn scrub either side.",
    u: ["ရွာအဝင်ရောက်တော့ နွားလှည်းနဲ့လာတဲ့ လူကြီးတစ်ယောက်ကို တွေ့တယ်။", "ကျွန်တော်က— “ဦးလေး… တမာကုန်းကလူတွေ ဘယ်သွားကြတာလဲ?”"] },

  { t: "Which Village", l: "လှည်းလမ်း", k: "elder", tm: "day",
    w: ["လူကြီး"],
    g: "လူကြီးက ကျွန်တော့်ကို ကြောင်ကြည့်တယ် — “ဘယ်ရွာ?” — “တမာကုန်းလေ”",
    p: "Close on the elder on the cart, ⚠️ HIS HEAD TIPPED SLIGHTLY TO ONE SIDE AND HIS BROWS DRAWN"
      + " TOGETHER, looking straight into the lens with his mouth open on a short question. ⚠️ HE IS"
      + " SIMPLY PUZZLED AND NOT YET ANYTHING ELSE. A long calm face weathered almost black, white"
      + " stubble, the conical hat pushed back off his forehead, a cotton towel at his neck. Hard"
      + " white light, the sky blown out behind him.",
    u: ["လူကြီးက ကျွန်တော့်ကို ကြောင်ကြည့်တယ်။", "“ဘယ်ရွာ?” “တမာကုန်းလေ”"] },

  { t: "There Is No Village That Way", c: [[1, "bigstinger"]], l: "လှည်းလမ်း", k: "wide", tm: "day",
    w: ["လှည်းလမ်း"],
    g: "သူ့မျက်နှာ ပျက်သွားတယ်။ ပြီးတော့ ကျွန်တော်လာတဲ့ဘက်ကို လှမ်းကြည့်တယ်။ / ⚠️ “ငါ့တူ…”"
      + " “**အဲဒီဘက်မှာ ရွာမရှိတော့ဘူး**”",
    p: "Wide and high, looking back the way Thet Paing came. ⚠️ THE CART TRACK RUNS AWAY ACROSS FLAT"
      + " OPEN SCRUB COUNTRY TO A LOW FLAT HORIZON AND THERE IS NO ROOF, NO FENCE, NO POLE, NO TREE"
      + " LINE AND NO SMOKE ANYWHERE IN THE WHOLE FRAME. Thorn thickets, dry grass, pale dust, a few"
      + " leaning toddy palms far off. ⚠️ THE GROUND IS COMPLETELY BARE. Enormous pale sky, hard flat"
      + " light.",
    u: ["သူ့မျက်နှာ ပျက်သွားတယ်။", "ပြီးတော့ ကျွန်တော်လာတဲ့ဘက်ကို လှမ်းကြည့်တယ်။", "“ငါ့တူ…” “အဲဒီဘက်မှာ ရွာမရှိတော့ဘူး”"] },

  { t: "Thirty Years Ago", l: "လှည်းလမ်း", k: "elder", tm: "day",
    w: ["လူကြီး"],
    g: "ကျွန်တော် ရယ်မိတယ် — “ဘာတွေပြောနေတာလဲ ဦးလေး။ ကျွန်တော် မနေ့ကတောင်—” / ⚠️ “တမာကုန်းရွာက"
      + " လွန်ခဲ့တဲ့ **နှစ်သုံးဆယ်ကတည်းက ပျက်သွားတာ။**”",
    p: "Close on the elder, ⚠️ HIS HEAD BACK ROUND AND HIS EYES STRAIGHT INTO THE LENS, his mouth"
      + " moving steadily on a flat statement. ⚠️ THERE IS NO DRAMA IN THE FACE AT ALL — the brows"
      + " level, the eyes unwidened, the mouth moving at a conversational pace. The deep lines, the"
      + " white stubble, the weathered skin all sharp in the hard light. The conical hat, the towel at"
      + " his neck, the yoke of the near ox soft at the edge of frame.",
    u: ["ကျွန်တော် ရယ်မိတယ်။", "“ဘာတွေပြောနေတာလဲ ဦးလေး။ ကျွန်တော် မနေ့ကတောင်—”", "“တမာကုန်းရွာက လွန်ခဲ့တဲ့ နှစ်သုံးဆယ်ကတည်းက ပျက်သွားတာ။”", "ကျွန်တော် စကားရပ်သွားတယ်။"] },

  { t: "Who", l: "လှည်းလမ်း", k: "insert", tm: "day",
    w: ["သက်ပိုင်"],
    g: "“ရွာသားတွေ အကုန် တစ်ညတည်း ပျောက်သွားတာတဲ့” — “တစ်ယောက်ပဲ လွတ်သွားတယ်” / ကျွန်တော့်လက်တွေ"
      + " တုန်လာတယ်။ “ဘယ်… ဘယ်သူလဲ?”",
    p: "Tight insert on Thet Paing's two hands held at waist height in hard white daylight, ⚠️ THE"
      + " FINGERS SPREAD AND HALF CURLED AND THE WHOLE OF BOTH HANDS TREMBLING, the tendons standing"
      + " up on the backs of them. ⚠️ ONE HAND IS GRIPPING THE STRAP OF THE CANVAS BAG AND THE"
      + " KNUCKLES ARE PALE. The creased pale blue shirt and the pale dust of the track soft behind"
      + " them. Short hard shadow under the fingers.",
    u: ["“ရွာသားတွေ အကုန် တစ်ညတည်း ပျောက်သွားတာတဲ့”", "“တစ်ယောက်ပဲ လွတ်သွားတယ်”", "ကျွန်တော့်လက်တွေ တုန်လာတယ်။", "“ဘယ်… ဘယ်သူလဲ?”"] },

  { t: "A Boy Called U Myint", c: [[1, "stinger"]], l: "လှည်းလမ်း", k: "elder", tm: "day",
    w: ["လူကြီး"],
    g: "⚠️ လူကြီးက ပြန်ဖြေတယ် — “**ဦးမြင့်ဆိုတဲ့ကောင်လေး။**”",
    p: "Close on the elder, ⚠️ HIS EYES BACK UP INTO THE LENS AND HIS MOUTH CLOSING ON THE LAST"
      + " SYLLABLE OF A NAME. ⚠️ HE HAS NO IDEA WHAT HE HAS JUST SAID — the face is mild and entirely"
      + " unremarkable and one eyebrow is slightly raised in query. Hard white light, white stubble,"
      + " the conical hat pushed back. The pale sky blown out behind his head.",
    u: ["လူကြီးက ပြန်ဖြေတယ်။", "“ဦးမြင့်ဆိုတဲ့ကောင်လေး။”"] },

  { t: "My Father", l: "လှည်းလမ်း", k: "insert", tm: "day",
    w: ["အဖေ့ဓာတ်ပုံ"],
    g: "ကျွန်တော့်အဖေ။ အဲဒီအချိန်မှ အားလုံးနားလည်သွားတယ်။ / အဖေက ရွာကနေ ထွက်ပြေးခဲ့တာ မဟုတ်ဘူး။ / ⚠️"
      + " **ရွာတစ်ရွာလုံးထဲက တစ်ယောက်တည်း လွတ်လာခဲ့တာ။**",
    p: "Tight insert on the small old framed photograph, held in two hands in hard white daylight"
      + " and filling the frame. ⚠️ THE FADED BLACK-AND-WHITE PORTRAIT OF A BURMESE MAN OF ABOUT"
      + " TWENTY BEHIND DUSTY GLASS — collarless white shirt, hair combed flat, looking straight out"
      + " without smiling. ⚠️ THE PALE SKY IS REFLECTED ACROSS ONE CORNER OF THE GLASS and the face is"
      + " completely clear through the rest of it. A thumb at the edge of the frame.",
    u: ["ကျွန်တော့်အဖေ။", "အဲဒီအချိန်မှ အားလုံးနားလည်သွားတယ်။", "အဖေက ရွာကနေ ထွက်ပြေးခဲ့တာ မဟုတ်ဘူး။", "ရွာတစ်ရွာလုံးထဲက တစ်ယောက်တည်း လွတ်လာခဲ့တာ။"] },

  { t: "Who Were the Villagers I Met", l: "ရွာလမ်း", k: "road", tm: "dawn",
    w: ["ရွာလမ်း","ရွာသားတွေ"],
    g: "ဒါပေမဲ့ မေးခွန်းတစ်ခု ကျန်နေသေးတယ်။ / ⚠️ မနေ့ညက ကျွန်တော်တွေ့ခဲ့တဲ့ ရွာသားတွေက"
      + " **ဘယ်သူတွေလဲ။**",
    p: "Along the village lane in thin grey dawn light. ⚠️ TEN VILLAGERS ARE STANDING IN A LOOSE"
      + " GROUP IN THE MIDDLE OF THE LANE FACING CAMERA, spread across the whole width of it, ⚠️ EVERY"
      + " ONE OF THEM SQUARE ON WITH THEIR ARMS AT THEIR SIDES AND THEIR FEET TOGETHER. ⚠️ ALL OF THEM"
      + " ARE LOOKING STRAIGHT INTO THE LENS AND NONE OF THEM IS SMILING. Ordinary sunburnt faces,"
      + " thanaka, cotton blouses, checked longyis. ⚠️ NOT ONE OF THEM IS MOVING. No shadow, no"
      + " colour.",
    u: ["ဒါပေမဲ့ မေးခွန်းတစ်ခု ကျန်နေသေးတယ်။", "မနေ့ညက ကျွန်တော်တွေ့ခဲ့တဲ့ ရွာသားတွေက ဘယ်သူတွေလဲ။"] },

  { t: "And Who Was Daw Yi", l: "ရွာလမ်း", k: "yi", tm: "dawn",
    w: ["ဒေါ်ရီ"],
    g: "⚠️ အဘွားဒေါ်ရီကရော **ဘယ်သူလဲ။** / ကျွန်တော် ပြန်မလှည့်တော့ဘဲ လမ်းမကြီးဘက်ကို"
      + " ဆက်လျှောက်လာခဲ့တယ်။",
    p: "Close on Daw Yi standing in the village lane in thin grey dawn light, ⚠️ SQUARE ON TO CAMERA"
      + " WITH HER EYES LEVEL AND OPEN AND HER MOUTH SHUT, the face completely at rest. ⚠️ EVERY"
      + " FEATURE IS EXACTLY AS IT IS IN HER REFERENCE PLATE AND NOTHING ABOUT HER IS ALTERED OR"
      + " MARKED — the worn thanaka, the deep lines, the grey hair in its low knot. ⚠️ SHE IS"
      + " PERFECTLY STILL AND SHE IS NOT BLINKING. Flat cold even light, no shadow on her anywhere.",
    u: ["အဘွားဒေါ်ရီကရော ဘယ်သူလဲ။", "ကျွန်တော် ပြန်မလှည့်တော့ဘဲ လမ်းမကြီးဘက်ကို ဆက်လျှောက်လာခဲ့တယ်။"] },

  { t: "A Voice From Far Out in the Fields", c: [[1, "stinger"]], l: "လယ်ကွင်း", k: "field", tm: "day",
    w: ["လယ်ကွင်း"],
    g: "နောက်ကနေ — အရမ်းဝေးတဲ့ လယ်ကွင်းထဲက အသံတစ်ခု ကြားလိုက်ရတယ် — **“သက်ပိုင်…”**",
    p: "Out across the open paddy in hard flat daylight, looking a very long way. ⚠️ THE CUT STUBBLE"
      + " RUNS AWAY FROM CAMERA PANEL BY PANEL TO A LOW FLAT HORIZON SHIMMERING IN THE HEAT, the bunds"
      + " narrowing to lines. One bare toddy palm stands far out. ⚠️ THE FIELD IS COMPLETELY EMPTY AND"
      + " THERE IS NOTHING STANDING IN IT ANYWHERE. Enormous pale sky, white light, dust haze along"
      + " the horizon.",
    u: ["နောက်ကနေ— အရမ်းဝေးတဲ့ လယ်ကွင်းထဲက အသံတစ်ခု ကြားလိုက်ရတယ်။ “သက်ပိုင်…”"] },

  { t: "I Did Not Answer", l: "လှည်းလမ်း", k: "ground", tm: "day",
    w: ["လှည်းလမ်း","သက်ပိုင်"],
    g: "ကျွန်တော် မထူးဘူး။ ဆက်လျှောက်တယ်။ ဒါပေမဲ့ ဒီတစ်ခါ—",
    p: "Low on the earth of the cart track, the surface of it running across the bottom of frame. ⚠️"
      + " TWO BARE FEET IN RUBBER SLIPPERS ARE WALKING AWAY FROM CAMERA IN THE NEAR RUT, caught"
      + " mid-stride with one heel lifted, pale dust over the ankles. ⚠️ THE STRIDE IS EVEN AND"
      + " UNHURRIED. The ruts run away out of focus ahead of them. Hard white light, short shadow"
      + " under the lifted heel.",
    u: ["ကျွန်တော် မထူးဘူး။", "ဆက်လျှောက်တယ်။", "ဒါပေမဲ့ ဒီတစ်ခါ—"] },

  { t: "The Voice Was Not Behind Me", c: [[1, "stinger"]], l: "လှည်းလမ်း", k: "thet", tm: "day",
    w: ["သက်ပိုင်"],
    g: "⚠️ အသံက ကျွန်တော့်နောက်က မဟုတ်ဘူး။ **ကျွန်တော့်ပါးစပ်ထဲက ထွက်လာတာ။**",
    p: "Close on Thet Paing on the track, ⚠️ HIS MOUTH OPEN ON A SHAPE HIS FACE IS NOT MAKING — the"
      + " lips parted and formed round a syllable while the eyes above them are wide and fixed and"
      + " horrified. ⚠️ THE UPPER HALF OF THE FACE AND THE LOWER HALF ARE DOING DIFFERENT THINGS. He"
      + " has stopped walking. Hard white light flat on him, no shadow, the pale sky and the empty"
      + " track soft behind.",
    u: ["အသံက ကျွန်တော့်နောက်က မဟုတ်ဘူး။", "ကျွန်တော့်ပါးစပ်ထဲက ထွက်လာတာ။"] },

  { t: "I Covered My Own Mouth", l: "လှည်းလမ်း", k: "insert", tm: "day",
    w: ["သက်ပိုင်"],
    g: "“သက်ပိုင်…” — ကျွန်တော် ရပ်သွားတယ်။ ကိုယ့်ပါးစပ်ကို ကိုယ်လက်နဲ့ ပိတ်လိုက်တယ်။",
    p: "Tight insert on the lower half of Thet Paing's face in hard white daylight. ⚠️ HIS OWN HAND"
      + " IS CLAMPED HARD ACROSS HIS MOUTH WITH THE FINGERS SPREAD AND PRESSED INTO HIS OWN CHEEK, the"
      + " knuckles pale and the skin of the cheek drawn up under them. ⚠️ THE CHIN AND JAW BELOW THE"
      + " HAND ARE RIGID. Dust on the back of the hand, a line of sweat at the temple. No shadow, hard"
      + " flat light.",
    u: ["“သက်ပိုင်…” ကျွန်တော် ရပ်သွားတယ်။", "ကိုယ့်ပါးစပ်ကို ကိုယ်လက်နဲ့ ပိတ်လိုက်တယ်။"] },

  { t: "But It Came Again", l: "လှည်းလမ်း", k: "insert", tm: "day",
    w: ["သက်ပိုင်"],
    g: "ဒါပေမဲ့ အသံက ထပ်ထွက်လာတယ် — “သက်ပိုင်…”",
    p: "Tight insert on the same hand across the same mouth. ⚠️ THE FINGERS HAVE BEEN PUSHED APART"
      + " AND THE MOUTH IS OPEN BETWEEN THEM, the lips formed round a syllable in the gap between the"
      + " first and second finger. ⚠️ THE HAND IS STILL PRESSING AS HARD AS IT WAS AND THE TENDONS ON"
      + " THE BACK OF IT ARE STANDING UP. Dust, sweat, the pale sky burnt out behind. Hard flat light,"
      + " no shadow.",
    u: ["ဒါပေမဲ့ အသံက ထပ်ထွက်လာတယ်။ “သက်ပိုင်…”"] },

  { t: "My Mouth Answered By Itself", c: [[1, "bigstinger"]], l: "လှည်းလမ်း", k: "thet", tm: "day",
    w: ["သက်ပိုင်"],
    g: "⚠️ ပြီးတော့ — ကျွန်တော် မပြောဘဲနဲ့… ကျွန်တော့်ပါးစပ်က သူ့ဘာသာ ပြန်ဖြေလိုက်တယ်။ **“ဗျာ…”**",
    p: "Close on Thet Paing on the empty track. ⚠️ HIS HAND HAS COME AWAY FROM HIS FACE AND IS"
      + " HANGING OPEN AND USELESS AT THE EDGE OF FRAME, and ⚠️ HIS MOUTH IS OPEN WIDE ON A FULL CLEAR"
      + " SYLLABLE while his eyes above it are enormous, fixed and brimming. ⚠️ THE MOUTH IS SPEAKING"
      + " AND THE FACE IS NOT. He is standing perfectly still. Hard flat white light, no shadow"
      + " anywhere on him, the empty track and the pale sky soft behind.",
    u: ["ပြီးတော့— ကျွန်တော် မပြောဘဲနဲ့…", "ကျွန်တော့်ပါးစပ်က သူ့ဘာသာ ပြန်ဖြေလိုက်တယ်။ “ဗျာ…”"] },
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
  s.time = TIME[s.tm || "day"];
  if (!s.time) throw new Error(`shot "${s.t}" has no time for tm="${s.tm}"`);

  let cont = CONT;
  if (s.lamp) cont += CONT_NIGHT;
  if (s.past) cont += CONT_THEN;
  if (s.yi) cont += CONT_YI;
  if (s.khwar) cont += CONT_KHWAR;
  if (s.print) cont += CONT_PRINT;
  if (s.smile) cont += CONT_SMILE;
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
