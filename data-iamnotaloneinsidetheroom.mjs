/**
 * ဒီအခန်းထဲမှာ ကျွန်မတစ်ယောက်တည်း မဟုတ်ဘူး — I AM NOT ALONE INSIDE THE ROOM.
 *
 * A woman of twenty-two rents a small clean room in Yangon and lives alone.
 * In the third week she starts hearing somebody breathing beside her pillow.
 * She turns off the fan and the air conditioner and the sound is still there —
 * and when she holds her own breath, it stops too.
 *
 * Under the bed she finds an old photograph of a girl sitting in that same
 * room, with one line in red ballpoint on the back: "don't look at her until
 * she has fallen asleep." She sets her phone recording overnight. At 2:17 the
 * door opens by itself, the blanket is drawn down from under the bed, and a
 * girl stands over her while she sleeps, turns to the camera and smiles.
 *
 * The landlady recognises the photograph. Thiri. She did not move out — she
 * was found dead in that room two years ago, and before she died she told the
 * landlady she was not alone in there.
 *
 * ⚠️ WHAT THE STORY IS ABOUT. Watching the video with a friend, they turn the
 * sound up, and under the figure leaning over the sleeping woman there is a
 * voice saying "don't wake her, she's only just fallen asleep" — in the
 * narrator's own voice, while the narrator is asleep. Leaving that night she
 * finds a second note: once it has SEEN you it will not look for anyone else.
 * She looks back one last time, and the thing in the chair has her face, her
 * hair and her clothes, with eyes that are entirely black, and it says in her
 * voice: "this time you'll be the one sleeping outside."
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * FIVE RULES THIS BOARD IS BUILT ON.
 *
 * 1. ⚠️ THE DOUBLE IS THE NARRATOR'S OWN REFERENCE PLATE. There is no second
 *    person to build. Every shot of the thing in the chair attaches HER tile
 *    and says what is different, which is the only way two faces come back
 *    identical. ⚠️ AND SO THE FACE IS WITHHELD UNTIL SHOT 43: before that it
 *    is behind hair, turned away, or cropped at the mouth. The whole story is
 *    one reveal and a plate cannot be allowed to leak it.
 *
 * 2. ⚠️ BLACK EYES ARE FULL EYES, NOT MISSING ONES. "Eyes entirely black" is
 *    one unbroken matt black across the whole visible eye with no white and no
 *    iris — a surface, not a hole. CONT_BLACK says the lids, lashes and brows
 *    are ordinary and the skin around them is whole, because a model handed
 *    "black eyes" with nothing else will dig two craters.
 *
 * 3. ⚠️ THE PHONE FOOTAGE LOOKS LIKE PHONE FOOTAGE. Nine shots are the video
 *    and they are a different film: one fixed low angle from the bedside
 *    table, wide and slightly distorted, noisy, flat and grey. The audience
 *    must never have to be told which shots are the recording.
 *
 * 4. ⚠️ NOBODY IS SHOWN DEAD. Thiri's death is two sentences of dialogue. No
 *    body, no discovery, no bed with anybody in it. The horror is a woman
 *    asleep with somebody standing over her, which needs no injury at all.
 *
 * 5. ⚠️ ORDINARY RENTED YANGON. A tiled floor, a plastic chair, a standing
 *    fan, a charger cable. Nothing in this film is decorated or styled. The
 *    fear is positional and it is always about who else is in the room.
 */

/** The project title in the lab. */
export const TITLE = "ဒီအခန်းထဲမှာ ကျွန်မတစ်ယောက်တည်း မဟုတ်ဘူး";

export const CAST = [
  /**
   * ⚠️ THIS PLATE IS USED TWICE: for her, and for the thing wearing her.
   *
   * It must therefore be built as an entirely ordinary living woman with
   * nothing withheld and nothing suggested. Everything that is wrong with the
   * double is stated per shot, and the first shot allowed to state it is 43.
   */
  { name: "ကျွန်မ", en: "The narrator — twenty-two",
    prompt:
      "A Burmese woman of twenty-two, slight and ordinary, ⚠️ IN A PLAIN PALE GREY SHORT-SLEEVED "
      + "COTTON SLEEPING T-SHIRT AND LOOSE DARK SHORTS, barefoot. ⚠️ HER HAIR IS LONG, STRAIGHT, "
      + "BLACK AND WORN COMPLETELY LOOSE PAST HER SHOULDERS with a centre parting. ⚠️ A SMALL "
      + "PLAIN BEADED BRACELET ON HER LEFT WRIST. No other jewellery, no thanaka, no make-up. ⚠️ "
      + "AN OPEN, TIRED, COMPLETELY UNREMARKABLE YOUNG FACE — warm skin, clear ordinary dark eyes, "
      + "good colour. ⚠️ NOTHING ABOUT HER IS FRIGHTENING OR UNUSUAL IN ANY WAY. ⚠️ SHE IS CLEARLY "
      + "ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "သီရိ", en: "Thiri — the girl in the photograph, twenty-three",
    prompt:
      "A Burmese woman of twenty-three, ⚠️ CLEARLY A DIFFERENT PERSON FROM THE NARRATOR — a "
      + "rounder face, a wider jaw, heavier brows. ⚠️ IN A PLAIN WHITE SHORT-SLEEVED BLOUSE AND A "
      + "DARK LONGYI, barefoot, ⚠️ HER HAIR VERY LONG, STRAIGHT AND BLACK, falling past her waist. "
      + "Small gold ear studs. ⚠️ A QUIET, SERIOUS, COMPLETELY ORDINARY FACE, warm skin, clear "
      + "eyes, good colour. ⚠️ SHE IS A LIVING YOUNG WOMAN AND NOTHING ABOUT HER IS FRIGHTENING OR "
      + "DAMAGED. ⚠️ SHE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "သူငယ်ချင်း", en: "The friend — twenty-two",
    prompt:
      "A Burmese woman of twenty-two, a little taller and sturdier than the narrator, ⚠️ IN AN "
      + "OVERSIZED DARK GREEN T-SHIRT AND TRACK TROUSERS, rubber slippers. ⚠️ HER HAIR IS SHORT, "
      + "CUT TO THE JAW, AND TUCKED BEHIND BOTH EARS — ⚠️ SHE IS THE ONLY PERSON IN THE FILM WITH "
      + "SHORT HAIR AND SHE READS INSTANTLY BECAUSE OF IT. A phone always in one hand. ⚠️ A "
      + "BLUNT, PRACTICAL, ENTIRELY ORDINARY FACE — the friend who laughs at you first and "
      + "believes you second. ⚠️ SHE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "အဒေါ်ကြီး", en: "The landlady — about sixty",
    prompt:
      "A Burmese woman of about sixty, short and stout, ⚠️ IN A LOOSE FLORAL-PRINTED HOUSE BLOUSE "
      + "AND A DARK HTAMEIN, rubber slippers, a cloth over one shoulder. ⚠️ HER GREYING HAIR IS "
      + "PULLED INTO A SMALL TIGHT KNOT and thanaka is applied thickly in two broad rounds on her "
      + "cheeks. Reading glasses pushed up on her head. ⚠️ A KIND, BUSY, COMPLETELY ORDINARY FACE, "
      + "warm skin, good colour. ⚠️ SHE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },
];

export const PROPS = [
  { name: "ဓာတ်ပုံ", en: "The old photograph",
    prompt:
      "⚠️ ONE SMALL OLD COLOUR SNAPSHOT ABOUT THE SIZE OF A PALM, held up or lying flat and "
      + "filling the frame. ⚠️ THE PRINT IS FADED, THE COLOUR GONE YELLOW-GREEN, THE SURFACE "
      + "SCUFFED AND SOFT-CORNERED with a white crease across one corner. ⚠️ IT SHOWS A YOUNG "
      + "BURMESE WOMAN WITH VERY LONG BLACK HAIR SITTING ON A PLASTIC CHAIR IN A SMALL TILED "
      + "ROOM, facing the camera. ⚠️ THE FLASH HAS OVEREXPOSED HER FACE SO IT READS AS VERY PALE "
      + "AND SLIGHTLY WASHED OUT — this is a photographic fault and nothing is wrong with her. "
      + "⚠️ SHE IS ALONE IN THE PICTURE. Flat even light on the print." },

  { name: "စာရွက်", en: "The yellowed note",
    prompt:
      "⚠️ ONE SMALL SHEET OF LINED NOTEPAPER GONE YELLOW-BROWN WITH AGE, lying flat on a tiled "
      + "floor and filling the frame. ⚠️ IT IS CREASED INTO QUARTERS AND THE FOLD LINES ARE "
      + "SPLITTING, one corner torn away. ⚠️ THERE IS ONE SHORT HANDWRITTEN LINE ACROSS THE "
      + "MIDDLE OF IT IN BLUE BALLPOINT — ⚠️ THE WRITING STAYS SOFT AND PARTLY OCCLUDED, READING "
      + "AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ THE REST OF THE SHEET IS BLANK. Pale dust and "
      + "a little fluff along one edge. Flat even light." },

  { name: "ဖုန်း", en: "The phone",
    prompt:
      "⚠️ ONE ORDINARY MODERN ANDROID PHONE PROPPED UPRIGHT AGAINST A BOOK ON A LOW BEDSIDE "
      + "TABLE, seen square on and filling the frame, a charging cable running out of the bottom "
      + "of it. ⚠️ A BLACK SILICONE CASE GONE GREY AT THE CORNERS, the glass smeared with "
      + "fingerprints. ⚠️ THE SCREEN IS LIT AND SHOWS A PLAIN VIDEO-RECORDING VIEW — a dim grey "
      + "image of a bed, a small red dot in one corner and a short run of digits beside it. ⚠️ "
      + "ALL ON-SCREEN TEXT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS "
      + "LEGIBLE NUMBERS. The screen is the only light in the picture." },
];

export const LOCS = [
  { name: "အိပ်ခန်း", en: "The rented room",
    prompt:
      "⚠️ A SMALL CLEAN RENTED ROOM IN A YANGON APARTMENT BLOCK, seen from one corner: painted "
      + "concrete walls, a pale tiled floor, a single bed against one wall with a thin printed "
      + "blanket. ⚠️ ONE PLASTIC CHAIR STANDS ALONE IN THE FAR CORNER FACING THE BED. ⚠️ A LOW "
      + "BEDSIDE TABLE, A STANDING FAN, A WALL AIR-CONDITIONER UNIT, A PLANK DOOR WITH A SIMPLE "
      + "LOCK, AND ONE WINDOW WITH A SECURITY GRILLE AND A THIN CURTAIN. ⚠️ A CHARGER CABLE HANGS "
      + "FROM A SOCKET BESIDE THE BED. ⚠️ TIDY, CHEAP, MODERN AND COMPLETELY ORDINARY — no shrine, "
      + "no charms, no decoration of any kind. ⚠️ THE ROOM IS EMPTY OF PEOPLE." },

  { name: "အဒေါ်ကြီးအခန်း", en: "The landlady's front room",
    prompt:
      "⚠️ THE GROUND-FLOOR FRONT ROOM OF A SMALL YANGON APARTMENT BLOCK: a worn vinyl sofa, a low "
      + "table with a thermos and glasses on it, a glass-fronted cabinet, a ceiling fan. ⚠️ A "
      + "CALENDAR AND A SMALL BUDDHIST SHELF HIGH ON ONE WALL, a stack of rent ledgers on the "
      + "table. ⚠️ A DOORWAY THROUGH TO A DARK PASSAGE AND A BARRED WINDOW ONTO THE STREET. "
      + "⚠️ CLUTTERED, LIVED IN AND COMPLETELY ORDINARY. ⚠️ FLAT DAYLIGHT COMES IN FROM THE "
      + "STREET SIDE. ⚠️ NOBODY IS IN THE PICTURE." },

  { name: "စင်္ကြံ", en: "The corridor outside the door",
    prompt:
      "⚠️ A NARROW CONCRETE CORRIDOR ON AN UPPER FLOOR OF A CHEAP YANGON APARTMENT BLOCK, seen "
      + "along it. ⚠️ PAINTED WALLS GONE GRUBBY, A BARE TILED FLOOR, THREE IDENTICAL PLANK DOORS "
      + "ALONG ONE SIDE, each with a number plate and a padlock hasp. ⚠️ ONE WEAK FLUORESCENT "
      + "TUBE OVERHEAD WITH A DEAD INSECT SHADOW IN IT, a mop and a bucket against the far wall, "
      + "an open stairwell at the end. ⚠️ THE LIGHT IS GREEN-GREY AND UNFLATTERING AND THE "
      + "CORRIDOR IS COMPLETELY EMPTY. ⚠️ NOBODY IS IN THE PICTURE." },
];

const CAM = {
  room: "IN THE ROOM. Camera at seated height in one corner, holding most of the space.",
  bed: "ON THE BED. Camera at mattress height beside it, close.",
  her: "CLOSE ON THE NARRATOR. Camera at her eye height, head-and-shoulders crop.",
  friend: "CLOSE ON THE FRIEND. Camera at her eye height, head-and-shoulders crop.",
  aunt: "CLOSE ON THE LANDLADY. Camera at her eye height, head-and-shoulders crop.",
  chair: "ON THE PLASTIC CHAIR. Camera at seated height from the bed, square to the chair in the "
    + "far corner.",
  pillow: "AT PILLOW HEIGHT. Camera on the mattress beside a pillow, level along it.",
  floor: "AT FLOOR HEIGHT. Camera a few inches above the tiles, level along them.",
  door: "ON THE ROOM DOOR. Camera at chest height inside the room, square to the plank door.",
  hands: "ON THE HANDS. Camera close in on what the hands are holding, the rest of the body out "
    + "of frame.",
  insert: "TIGHT INSERT. One subject filling the frame, shallow focus.",
  behind: "FROM BEHIND HER. Camera at seated height a little way back, the back of her head and "
    + "shoulders filling the lower frame and the room beyond.",
  aunts: "IN THE FRONT ROOM. Camera at seated height, holding most of the room.",
  corridor: "IN THE CORRIDOR. Camera at chest height, looking along it.",
  two: "TWO SHOT. Camera at chest height holding two people, both complete in frame.",
  phone: "PHONE FOOTAGE. The fixed low angle from the bedside table, taking in the whole bed and "
    + "the corner of the room beyond it.",
};

const TIME = {
  day: "TIME: FLAT DAYLIGHT. Even white light through a curtained grille, ordinary and "
    + "undramatic, no shadow with an edge to it.",
  dusk: "TIME: LATE AFTERNOON. Low orange light coming in sideways through the grille, long bars "
    + "of it across the floor.",
  bulb: "TIME: NIGHT, ONE CEILING LIGHT. A single plain fitting overhead, flat and a little "
    + "green, the corners of the room dim and the window black.",
  dark: "TIME: NIGHT, THE LIGHT OFF. Almost total darkness, only a thin wash of street light "
    + "through the grille and the curtain — shapes just legible in outline, colour gone.",
  screen: "TIME: NIGHT, LIT ONLY BY A PHONE SCREEN. A flat cold white glow from one small source "
    + "close in, hard on whatever it touches and black everywhere past it.",
  tube: "TIME: UNDER A FLUORESCENT TUBE. Flat green-grey light from directly overhead, "
    + "unflattering and even, with hard short shadows under everything.",
  dawn: "TIME: FIRST LIGHT. Thin colourless grey through the grille, flat and cold, everything "
    + "legible and nothing warm anywhere in it.",
};

const CONT =
  "Continuity: a small cheap rented room in a Yangon apartment block, present day. Painted "
  + "concrete, pale floor tiles, plastic and cotton, a standing fan, a charger cable, a phone. "
  + "Ordinary modern clothes. ⚠️ NOTHING IN THIS FILM IS DECORATED OR STYLED — no mist, no "
  + "candles, no symbols, no staging of any kind. The fear is positional: it is always about who "
  + "else is in the room.";

/**
 * ⚠️ THE RECORDING IS A DIFFERENT FILM AND MUST LOOK LIKE ONE.
 *
 * Nine shots are the phone video. If the audience has to be told which, the
 * sequence does not work — so these carry one fixed angle, a wider and
 * slightly distorted lens, visible noise and no colour worth the name.
 */
const CONT_PHONE =
  " ⚠️ THIS SHOT IS PHONE FOOTAGE AND LOOKS LIKE IT: one fixed low angle from the bedside table "
  + "that never moves, a wide slightly distorted lens, heavy digital noise in the shadows, "
  + "crushed blacks and almost no colour. ⚠️ A SMALL RED RECORDING DOT AND A SHORT RUN OF DIGITS "
  + "SIT IN ONE CORNER OF FRAME AND STAY SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN "
  + "AS LEGIBLE NUMBERS. ⚠️ THE FRAMING IS IDENTICAL IN EVERY FOOTAGE SHOT.";

/**
 * ⚠️ SHOWN ONLY FROM SHOT 48. The entire story is one reveal — that the thing
 * in the chair is wearing her — and any earlier look at the face spends it.
 */
const CONT_SAME =
  " ⚠️ THIS WOMAN IS THE NARRATOR'S EXACT DOUBLE AND IS BUILT FROM HER REFERENCE PLATE — the same "
  + "face, the same hair, the same clothes, the same bracelet on the same wrist. ⚠️ SHE MUST READ "
  + "AS THE SAME PERSON AND NOT AS A RESEMBLANCE. ⚠️ HER SKIN IS WARM AND ORDINARY: not pale, not "
  + "grey, not damaged. ⚠️ THE ONLY THING THIS SHOT STATES IS WRONG WITH HER IS THE ONLY THING "
  + "THAT IS WRONG WITH HER.";

/**
 * ⚠️ FULL EYES, NOT MISSING ONES. A model handed "black eyes" and nothing else
 * digs two craters; this says what IS there — a surface.
 */
const CONT_BLACK =
  " ⚠️ HER EYES ARE ENTIRELY BLACK: the whole visible eye, corner to corner, is one even matt "
  + "black with no white, no iris and no pupil. ⚠️ THEY ARE FULL, ROUNDED AND PRESENT — a smooth "
  + "surface set in the socket, NOT a hole and NOT a hollow. ⚠️ THE LIDS, LASHES AND BROWS ARE "
  + "ORDINARY AND THE SKIN ALL AROUND THEM IS WHOLE, WARM AND UNMARKED. ⚠️ NOTHING ON THE FACE IS "
  + "TORN, CUT OR SUNKEN — what is wrong is only the colour.";

/**
 * ⚠️ EVERY APPEARANCE BEFORE THE REVEAL. The face is withheld by hair, by the
 * turn of the head, or by the edge of frame — never by darkness alone, which a
 * generator will cheerfully light anyway.
 */
const CONT_HIDDEN =
  " ⚠️ HER FACE IS NOT VISIBLE IN THIS SHOT AND NO FEATURE OF IT IS SHOWN: the long black hair "
  + "hangs forward and covers it completely, or her head is turned away, or the frame cuts above "
  + "the mouth — whichever this shot states. ⚠️ NO EYE, NO BROW AND NO LINE OF THE JAW RESOLVES. "
  + "⚠️ SHE IS NEVER LIT SO THAT THE FACE BECOMES READABLE. ⚠️ HER HANDS, HER CLOTHES AND HER "
  + "HAIR ARE ORDINARY AND UNDAMAGED.";

const STYLE =
  "Yangon, present day. Photorealism, 16:9, 35mm grain, level camera, natural depth of field. "
  + "Painted concrete, pale floor tiles, cheap plastic, cotton, phone glass. Honest available "
  + "light — flat window white, plain ceiling fitting, cold phone screen, green fluorescent, "
  + "street amber through a grille, and black where there is no light at all. One still instant. "
  + "⚠️ ALL PRINTED AND ON-SCREEN TEXT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER "
  + "THAN AS WORDS.";

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "I · အသက်ရှူသံ",
  8: "II · ဓာတ်ပုံ",
  17: "III · ဗီဒီယို",
  24: "IV · အဒေါ်ကြီး",
  32: "V · အသံ",
  38: "VI · ထွက်ခွာခြင်း",
  47: "VII · တစ်လအကြာ",
  54: "VIII · နိဂုံး",
};

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  /* ── I · အသက်ရှူသံ ──────────────────────────────────────────────────── */
  { t: "I Have Never Told Anyone", l: "အိပ်ခန်း", k: "room", tm: "dark",
    w: ["အိပ်ခန်း"],
    g: "⚠️ ဖွင့်ပုံ — ဒီအကြောင်းကို ကျွန်မ အခုချိန်ထိ ဘယ်သူ့ကိုမှ အစအဆုံး မပြောပြဖူးဘူး။",
    p: "The rented room from one corner at seated height at night with the light off, ⚠️ ONLY A "
      + "THIN WASH OF STREET LIGHT THROUGH THE GRILLE AND THE CURTAIN LAYING PALE BARS ACROSS THE "
      + "TILED FLOOR. ⚠️ THE BED IS MADE AND EMPTY AND THE BLANKET IS FLAT AND SMOOTH. ⚠️ THE "
      + "PLASTIC CHAIR STANDS ALONE IN THE FAR CORNER FACING THE BED. ⚠️ THE ROOM IS COMPLETELY "
      + "EMPTY OF PEOPLE AND NOTHING IN IT IS MOVING. Colour almost gone, heavy grain.",
    u: ["ဒီအကြောင်းကို ကျွန်မ အခုချိန်ထိ ဘယ်သူ့ကိုမှ အစအဆုံး မပြောပြဖူးဘူး။",
      "ပြောပြလိုက်ရင်တောင် ဘယ်သူမှ ယုံမှာမဟုတ်ဘူးလို့ ထင်လို့ပါ။"] },

  { t: "I Was Twenty-Two", l: "အိပ်ခန်း", k: "her", tm: "day", w: ["ကျွန်မ"],
    g: "အဲဒီတုန်းက ကျွန်မ အသက် ၂၂ နှစ်ပဲ ရှိသေးတယ်။ ရန်ကုန်မှာ တိုက်ခန်းငှားပြီး တစ်ယောက်တည်း နေခဲ့တာ။",
    p: "Close on the narrator sitting on the edge of the bed in flat daylight through the "
      + "curtained grille, ⚠️ LOOKING STRAIGHT AT THE LENS WITH AN ORDINARY TIRED EXPRESSION. ⚠️ "
      + "HER LONG BLACK HAIR IS LOOSE AND PUSHED BACK OVER ONE SHOULDER. ⚠️ HER HANDS ARE LOOSE "
      + "IN HER LAP AND THE SMALL BEADED BRACELET IS ON HER LEFT WRIST. ⚠️ NOTHING IS WRONG YET "
      + "AND NOTHING IN THE FRAME SUGGESTS OTHERWISE. The painted wall behind her soft and out of "
      + "focus.",
    u: ["အဲဒီတုန်းက ကျွန်မ အသက် ၂၂ နှစ်ပဲ ရှိသေးတယ်။ ရန်ကုန်မှာ အလုပ်လုပ်ရင်း တိုက်ခန်းငှားပြီး တစ်ယောက်တည်း နေခဲ့တာ။",
      "ကျွန်မငှားနေတဲ့အခန်းက အရမ်းမကြီးပေမဲ့ သန့်ရှင်းတယ်။ အိမ်လခလည်း သက်သာတယ်။ အိမ်ရှင်အဒေါ်ကြီးကလည်း သဘောကောင်းတယ်။"] },

  { t: "The Third Week", l: "အိပ်ခန်း", k: "room", tm: "day",
    w: ["အိပ်ခန်း"],
    g: "အိမ်ပြောင်းလာတဲ့ ပထမနှစ်ပတ်လုံး ဘာပြဿနာမှ မရှိခဲ့ဘူး။ ထူးဆန်းတာက တတိယပတ်မှာ စဖြစ်ခဲ့တာ။",
    p: "The rented room from one corner at seated height in flat daylight, ⚠️ CLEAN, TIDY AND "
      + "COMPLETELY ORDINARY — the bed made, the floor swept, a few clothes folded on the bedside "
      + "table. ⚠️ THE STANDING FAN IS ON AND THE CURTAIN IS DRAWN BACK. ⚠️ THE PLASTIC CHAIR IN "
      + "THE FAR CORNER HAS A TOWEL OVER THE BACK OF IT. ⚠️ THE ROOM IS EMPTY OF PEOPLE AND "
      + "NOTHING ABOUT IT IS SINISTER IN ANY WAY. Even white window light, no shadow with an edge.",
    u: ["အိမ်ပြောင်းလာတဲ့ ပထမနှစ်ပတ်လုံး ဘာပြဿနာမှ မရှိခဲ့ဘူး။",
      "ထူးဆန်းတာက တတိယပတ်မှာ စဖြစ်ခဲ့တာ။"] },

  { t: "Somebody Breathing by My Pillow", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "pillow",
    tm: "dark", w: ["အိပ်ခန်း"],
    g: "⚠️ **ညတိုင်း ခေါင်းရင်းနားမှာ တစ်ယောက်ယောက် အသက်ရှူနေသလို ကြားရတယ်။ ဟူး… ဟူး…**",
    p: "On the mattress beside a pillow at pillow height, level along the bed in almost total "
      + "darkness. ⚠️ THE NEAR PILLOW IS DENTED WHERE A HEAD IS LYING, just out of frame. ⚠️ THE "
      + "SECOND PILLOW BESIDE IT IS SMOOTH, PLUMP AND COMPLETELY UNDISTURBED. ⚠️ THE SHEET "
      + "BETWEEN THEM IS FLAT AND UNCREASED. ⚠️ THERE IS NOBODY AND NOTHING ON THAT SIDE OF THE "
      + "BED. ⚠️ A THIN BAR OF STREET LIGHT LIES ACROSS THE EMPTY PILLOW. Colour gone, heavy "
      + "grain.",
    u: ["ညတိုင်း အိပ်ရာဝင်ခါနီးတိုင်း ကျွန်မရဲ့ ခေါင်းရင်းနားမှာ တစ်ယောက်ယောက် အသက်ရှူနေသလို ကြားရတယ်။",
      "ဟူး… ဟူး…", "အစကတော့ ပန်ကာသံလို့ပဲ ထင်ခဲ့တယ်။"] },

  { t: "I Turned the Fan Off", l: "အိပ်ခန်း", k: "insert", tm: "dark", w: ["အိပ်ခန်း"],
    g: "ဒါပေမဲ့ တစ်ညမှာ ကျွန်မ စမ်းကြည့်ဖို့ ဆုံးဖြတ်လိုက်တယ်။ ပန်ကာပိတ်လိုက်တယ်။ အဲကွန်းလည်း ပိတ်လိုက်တယ်။",
    p: "Tight on the control panel of a standing fan in almost total darkness, filling the frame. "
      + "⚠️ A HAND HAS JUST COME OFF THE SWITCH AND IS LEAVING THE EDGE OF FRAME. ⚠️ THE BLADES "
      + "BEHIND THE GUARD ARE COMPLETELY STILL AND THE INDICATOR LIGHT IS OUT. ⚠️ A FINE LAYER OF "
      + "DUST SITS ALONG THE TOP OF THE GUARD, UNDISTURBED. ⚠️ THE ROOM BEYOND IT IS BLACK AND "
      + "NOTHING ELSE IS IN THE PICTURE. Thin street light down one edge of the housing.",
    u: ["ဒါပေမဲ့ တစ်ညမှာ ကျွန်မ စမ်းကြည့်ဖို့ ဆုံးဖြတ်လိုက်တယ်။", "ပန်ကာပိတ်လိုက်တယ်။",
      "အဲကွန်းလည်း ပိတ်လိုက်တယ်။", "အခန်းတစ်ခုလုံး တိတ်ဆိတ်သွားတယ်။"] },

  { t: "It Didn't Stop", l: "အိပ်ခန်း", k: "her", tm: "dark", w: ["ကျွန်မ"],
    g: "ဒါပေမဲ့ အသက်ရှူသံက မပျောက်သွားဘူး။ ပိုဆိုးတာက…",
    p: "Close on the narrator lying on her side on the bed in almost total darkness, ⚠️ HER FACE "
      + "LIT ONLY BY A THIN BAR OF STREET LIGHT ACROSS THE EYES. ⚠️ HER EYES ARE WIDE OPEN AND "
      + "FIXED ON THE PAINTED WALL IN FRONT OF HER AND SHE IS NOT BLINKING. ⚠️ THE BLANKET IS "
      + "PULLED UP TO HER CHIN AND HELD THERE IN BOTH FISTS. ⚠️ SHE HAS NOT MOVED. ⚠️ THE SPACE "
      + "BEHIND HER ON THE BED IS FLAT, EMPTY AND IN SHOT. Colour almost gone.",
    u: ["ဒါပေမဲ့ အသက်ရှူသံက မပျောက်သွားဘူး။", "ပိုဆိုးတာက…"] },

  { t: "When I Stopped, It Stopped", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "pillow",
    tm: "dark", w: ["အိပ်ခန်း"],
    g: "⚠️ **ကျွန်မ အသက်ရှူတာကို ရပ်ထားလိုက်တဲ့အခါ အဲဒီအသံကလည်း ရပ်သွားတယ်။**",
    p: "On the mattress at pillow height, level along the bed in almost total darkness, the same "
      + "framing as before. ⚠️ THE EMPTY PILLOW BESIDE HER IS STILL SMOOTH AND UNDISTURBED — ⚠️ "
      + "BUT THE FINE DOWN AND DUST FLOATING IN THE BAR OF STREET LIGHT ABOVE IT HAS STOPPED DEAD "
      + "AND HANGS PERFECTLY MOTIONLESS IN THE AIR. ⚠️ EVERYTHING IN THE FRAME IS ABSOLUTELY "
      + "STILL. ⚠️ THERE IS NOBODY AND NOTHING ON THAT SIDE OF THE BED. Colour gone, very heavy "
      + "grain.",
    u: ["ကျွန်မ အသက်ရှူတာကို ရပ်ထားလိုက်တဲ့အခါ အဲဒီအသံကလည်း ရပ်သွားတယ်။"] },

  /* ── II · ဓာတ်ပုံ ───────────────────────────────────────────────────── */
  { t: "Under the Bed", l: "အိပ်ခန်း", k: "floor", tm: "day", w: ["အိပ်ခန်း"],
    g: "နောက်နေ့မနက်မှာ သန့်ရှင်းရေးလုပ်နေတုန်း အိပ်ရာအောက်ကနေ ဓာတ်ပုံအဟောင်းတစ်ပုံ တွေ့ခဲ့တယ်။",
    p: "A few inches above the tiled floor in flat daylight, level along it and looking into the "
      + "dark space under the bed frame. ⚠️ ONE SMALL FADED COLOUR SNAPSHOT IS LYING FACE UP ON "
      + "THE TILES WELL BACK UNDER THE BED, half in the shadow line. ⚠️ A BROOM HEAD IS AT THE "
      + "EDGE OF FRAME, OUT OF FOCUS, STOPPED. ⚠️ THE TILES AROUND THE PHOTOGRAPH ARE CLEAN AND "
      + "THERE IS NOTHING ELSE UNDER THE BED AT ALL. Flat window light reaching only the near "
      + "edge.",
    u: ["နောက်နေ့မနက်မှာ ကျွန်မ အိပ်ခန်းကို သန့်ရှင်းရေးလုပ်နေတုန်း အိပ်ရာအောက်ကနေ ဓာတ်ပုံအဟောင်းတစ်ပုံ တွေ့ခဲ့တယ်။"] },

  { t: "A Girl in This Room", l: "အိပ်ခန်း", k: "insert", tm: "day",
    w: ["ဓာတ်ပုံ"],
    g: "⚠️ ဓာတ်ပုံထဲမှာ မိန်းကလေးတစ်ယောက်က ကျွန်မအခုနေတဲ့အခန်းထဲမှာ ထိုင်နေတယ်။",
    p: "Tight on the old snapshot held flat in two hands in flat daylight, filling the frame, "
      + "shallow focus. ⚠️ IT SHOWS A YOUNG BURMESE WOMAN WITH VERY LONG BLACK HAIR SITTING ON A "
      + "PLASTIC CHAIR, FACING THE CAMERA, IN A SMALL TILED ROOM. ⚠️ THE ROOM IN THE PHOTOGRAPH "
      + "IS UNMISTAKABLY THIS ROOM — the same painted walls, the same pale floor tiles, the same "
      + "grilled window. ⚠️ THE FLASH HAS WASHED HER FACE OUT. ⚠️ SHE IS ALONE IN THE PICTURE "
      + "AND THE BED BEHIND HER IS MADE.",
    u: ["ဓာတ်ပုံထဲမှာ မိန်းကလေးတစ်ယောက်က ကျွန်မအခုနေတဲ့အခန်းထဲမှာ ထိုင်နေတယ်။",
      "သူ့ဆံပင်က ရှည်ရှည်နဲ့။", "မျက်နှာကတော့ အရမ်းဖြူဖျော့နေတယ်။"] },

  { t: "One Line in Red", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "insert", tm: "day",
    w: ["ဓာတ်ပုံ"],
    g: "⚠️ **ဓာတ်ပုံနောက်ကျောမှာ ဘောပင်အနီနဲ့ — “သူ အိပ်ပျော်သွားတဲ့အထိ မကြည့်နဲ့။”**",
    p: "Tight on the back of the old snapshot turned over in two hands in flat daylight, filling "
      + "the frame. ⚠️ THE BACK IS BLANK WHITE CARD GONE CREAM WITH AGE, scuffed and "
      + "soft-cornered. ⚠️ ONE SHORT HANDWRITTEN LINE RUNS ACROSS THE MIDDLE OF IT IN RED "
      + "BALLPOINT, pressed hard enough to emboss the card. ⚠️ THE WRITING STAYS SOFT AND PARTLY "
      + "OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ THERE IS NOTHING ELSE ON THE "
      + "BACK AT ALL. Shallow focus, flat even light.",
    u: ["ဓာတ်ပုံနောက်ကျောမှာ ဘောပင်အနီနဲ့ စာတစ်ကြောင်း ရေးထားတယ်။",
      "“သူ အိပ်ပျော်သွားတဲ့အထိ မကြည့်နဲ့။”"] },

  { t: "I Laughed", l: "အိပ်ခန်း", k: "her", tm: "day", w: ["ကျွန်မ"],
    g: "ကျွန်မ ရယ်မိသွားတယ်။ တစ်ယောက်ယောက်က နောက်ပြောင်ပြီး ထားခဲ့တာပဲလို့ ထင်ခဲ့တယ်။",
    p: "Close on the narrator standing in the room in flat daylight, ⚠️ LOOKING DOWN AT SOMETHING "
      + "LOW AND OUT OF FRAME WITH ONE EYEBROW UP AND THE CORNER OF HER MOUTH LIFTED. ⚠️ THE "
      + "EXPRESSION IS AMUSED AND COMPLETELY UNAFRAID — this is the last easy face in the film. "
      + "⚠️ HER HAIR IS PUSHED BACK BEHIND ONE EAR. ⚠️ SHE IS ALONE IN THE PICTURE. Even white "
      + "window light, the plain wall behind her out of focus.",
    u: ["ကျွန်မ ရယ်မိသွားတယ်။",
      "တစ်ယောက်ယောက်က အရင်နေခဲ့တဲ့အခန်းမှာ နောက်ပြောင်ပြီး ထားခဲ့တာပဲလို့ ထင်ခဲ့တယ်။",
      "ဒါပေမဲ့ အဲဒီညမှာ ကျွန်မ အိပ်မပျော်နိုင်ခဲ့ဘူး။"] },

  { t: "Two in the Morning", l: "အိပ်ခန်း", k: "bed", tm: "dark",
    w: ["ကျွန်မ"],
    g: "ည ၂ နာရီလောက်မှာ မျက်လုံးဖွင့်လိုက်တော့…",
    p: "At mattress height beside the bed in almost total darkness. ⚠️ THE NARRATOR IS LYING ON "
      + "HER SIDE FACING OUT INTO THE ROOM WITH HER EYES JUST OPENED — the lids barely apart, the "
      + "focus not yet arrived. ⚠️ A THIN BAR OF STREET LIGHT CROSSES THE BLANKET BELOW HER CHIN. "
      + "⚠️ THE ROOM BEYOND HER IS BLACK AND NOTHING IN IT RESOLVES. ⚠️ SHE IS THE ONLY PERSON IN "
      + "THE PICTURE. Colour almost entirely gone.",
    u: ["ည ၂ နာရီလောက်မှာ မျက်လုံးဖွင့်လိုက်တော့…"] },

  { t: "Somebody Was in the Chair", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "chair",
    tm: "dark", hidden: true, w: ["ကျွန်မ"],
    g: "⚠️ **အခန်းထောင့်က ကုလားထိုင်ပေါ်မှာ မိန်းကလေးတစ်ယောက် ထိုင်နေတယ်။ ဆံပင်ရှည်တွေက မျက်နှာကို ဖုံးထားတယ်။**",
    p: "From the bed at seated height, square to the plastic chair in the far corner, in almost "
      + "total darkness. ⚠️ A YOUNG WOMAN IS SITTING UPRIGHT ON IT WITH HER KNEES TOGETHER AND "
      + "HER HANDS FLAT ON HER THIGHS, facing the bed. ⚠️ HER LONG BLACK HAIR HANGS FORWARD AND "
      + "COVERS HER FACE COMPLETELY AND NO FEATURE OF IT IS VISIBLE. ⚠️ SHE IS IN A PALE GREY "
      + "T-SHIRT AND DARK SHORTS. ⚠️ SHE IS ABSOLUTELY STILL. ⚠️ ONLY A THIN WASH OF STREET LIGHT "
      + "REACHES HER AND THE ROOM AROUND HER IS BLACK.",
    u: ["အခန်းထောင့်က ကုလားထိုင်ပေါ်မှာ မိန်းကလေးတစ်ယောက် ထိုင်နေတယ်။",
      "ဆံပင်ရှည်တွေက မျက်နှာကို ဖုံးထားတယ်။", "ကျွန်မ တစ်ကိုယ်လုံး တောင့်တင်းသွားတယ်။"] },

  { t: "Who Are You", l: "အိပ်ခန်း", k: "her", tm: "dark", w: ["ကျွန်မ"],
    g: "“ဘယ်သူလဲ…?” — သူ မဖြေဘူး။ ကျွန်မ မျက်လုံးကို အတင်းမှိတ်လိုက်တယ်။",
    p: "Close on the narrator on the bed in almost total darkness, ⚠️ HER FACE LIT ONLY BY A THIN "
      + "BAR OF STREET LIGHT. ⚠️ HER EYES ARE SQUEEZED SHUT HARD ENOUGH TO CREASE THE SKIN AT THE "
      + "CORNERS AND HER MOUTH IS PRESSED INTO A THIN LINE. ⚠️ THE BLANKET IS PULLED UP OVER HER "
      + "SHOULDER AND GRIPPED AT THE EDGE. ⚠️ SHE IS THE ONLY PERSON IN FRAME AND THE ROOM BEHIND "
      + "HER IS BLACK. Colour gone, heavy grain.",
    u: ["“ဘယ်သူလဲ…?”", "သူ မဖြေဘူး။", "ကျွန်မ မျက်လုံးကို အတင်းမှိတ်လိုက်တယ်။",
      "ပြီးတော့ စက္ကန့်အနည်းငယ်ကြာမှ ပြန်ဖွင့်ကြည့်လိုက်တယ်။"] },

  { t: "The Chair Was Empty", l: "အိပ်ခန်း", k: "chair", tm: "dark",
    w: ["အိပ်ခန်း"],
    g: "ကုလားထိုင်က ဗလာဖြစ်နေပြီ။",
    p: "From the bed at seated height, square to the plastic chair in the far corner, the same "
      + "framing as before, in almost total darkness. ⚠️ THE CHAIR IS COMPLETELY EMPTY AND "
      + "NOBODY IS ON IT. ⚠️ THE TOWEL IS STILL OVER THE BACK OF IT, HANGING EXACTLY AS IT WAS. "
      + "⚠️ THE ROOM AROUND IT IS BLACK AND NOTHING IS STANDING ANYWHERE IN IT. ⚠️ THE SEAT OF "
      + "THE CHAIR CATCHES A THIN WASH OF STREET LIGHT AND IS DRY AND BARE. Colour gone.",
    u: ["ကုလားထိုင်က ဗလာဖြစ်နေပြီ။"] },

  { t: "Wet Marks on the Floor", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "floor", tm: "dark",
    w: ["အိပ်ခန်း"],
    g: "⚠️ **ကုလားထိုင်ကနေ ကျွန်မအိပ်ရာအထိ — ခြေရာတွေလို ဆက်တိုက် ရှိနေတယ်။**",
    p: "A few inches above the tiled floor in almost total darkness, level along it from the "
      + "plastic chair towards the bed. ⚠️ A LINE OF SMALL WET PATCHES RUNS ACROSS THE DRY TILES "
      + "BETWEEN THEM, evenly spaced and roughly the size and shape of a bare foot. ⚠️ EACH ONE "
      + "CATCHES THE THIN STREET LIGHT AS A DULL SHINE. ⚠️ THE TILES AROUND AND BETWEEN THEM ARE "
      + "COMPLETELY DRY. ⚠️ THERE IS NOBODY IN THE PICTURE AND NOTHING IS STANDING ANYWHERE. "
      + "Colour gone, very heavy grain.",
    u: ["ဒါပေမဲ့ ကျွန်မအိပ်ရာဘေးက ကြမ်းပြင်ပေါ်မှာ ရေစက်တွေ ရှိနေတယ်။",
      "ကုလားထိုင်ကနေ ကျွန်မအိပ်ရာအထိ…", "ခြေရာတွေလို ဆက်တိုက် ရှိနေတယ်။"] },

  /* ── III · ဗီဒီယို ──────────────────────────────────────────────────── */
  { t: "I Set the Phone to Record", l: "အိပ်ခန်း", k: "insert", tm: "screen", w: ["ဖုန်း"],
    g: "တစ်ညတော့ ကိုယ့်ကိုယ်ကို သက်သေပြဖို့ ဖုန်းကို အိပ်ရာဘက်ကို ဗီဒီယိုရိုက်ဖို့ ထောင်ထားလိုက်တယ်။",
    p: "Square on the phone propped upright against a book on the low bedside table, filling the "
      + "frame, the charging cable running out of the bottom. ⚠️ THE SCREEN IS LIT AND SHOWS A "
      + "PLAIN VIDEO-RECORDING VIEW — a dim grey image of the bed with a small red dot in one "
      + "corner. ⚠️ A HAND IS JUST LEAVING THE EDGE OF FRAME. ⚠️ THE SCREEN IS THE ONLY LIGHT IN "
      + "THE PICTURE AND THE ROOM BEYOND IT IS BLACK. ⚠️ ALL ON-SCREEN TEXT STAYS SOFT AND READS "
      + "AS MARKS.",
    u: ["အဲဒီနောက်ပိုင်း ညတိုင်း အိပ်ရမှာ ကြောက်လာတယ်။",
      "တစ်ညတော့ ကိုယ့်ကိုယ်ကို သက်သေပြဖို့ ဖုန်းကို အားသွင်းထားပြီး အိပ်ရာဘက်ကို ဗီဒီယိုရိုက်ဖို့ ထောင်ထားလိုက်တယ်။",
      "ဘာမှမဖြစ်ရင် ကိုယ်တိုင်ပဲ ကိုယ့်ကိုယ်ကို အကြောက်လွန်နေတယ်လို့ သတ်မှတ်မယ်ပေါ့။"] },

  { t: "The First Two Hours", l: "အိပ်ခန်း", k: "phone", tm: "dark", vid: true, w: ["ကျွန်မ"],
    g: "မနက်ရောက်တော့ ဗီဒီယိုကို ပြန်ကြည့်လိုက်တယ်။ ပထမနှစ်နာရီလုံး ဘာမှမဖြစ်ဘူး။",
    p: "The fixed low angle from the bedside table taking in the whole bed and the corner of the "
      + "room beyond it. ⚠️ THE NARRATOR IS ASLEEP ON HER SIDE UNDER THE BLANKET, completely "
      + "still, her face slack and turned towards the wall. ⚠️ THE DOOR AT THE FAR SIDE OF THE "
      + "ROOM IS SHUT. ⚠️ THE PLASTIC CHAIR IN THE CORNER IS EMPTY. ⚠️ NOTHING ELSE IS IN THE "
      + "ROOM AND NOTHING IS MOVING. Flat grey, crushed blacks, heavy noise.",
    u: ["မနက်ရောက်တော့ ဗီဒီယိုကို ပြန်ကြည့်လိုက်တယ်။", "ပထမနှစ်နာရီလုံး ဘာမှမဖြစ်ဘူး။",
      "ကျွန်မက ပုံမှန်အတိုင်း အိပ်ပျော်နေတယ်။"] },

  { t: "The Door Opened By Itself", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "phone",
    tm: "dark", vid: true, w: ["ကျွန်မ", "အိပ်ခန်း"],
    g: "⚠️ **ည ၂ နာရီ ၁၇ မိနစ်မှာ အခန်းတံခါးက ဖြည်းဖြည်းချင်း ပွင့်လာတယ်။ ဘယ်သူမှ ဝင်မလာဘူး။**",
    p: "The same fixed low angle from the bedside table, identical framing. ⚠️ THE ROOM DOOR AT "
      + "THE FAR SIDE OF THE FRAME NOW STANDS OPEN BY ABOUT A HAND'S WIDTH and the dark corridor "
      + "beyond it is a flat black strip. ⚠️ NOBODY IS IN THE DOORWAY AND NOTHING IS STANDING IN "
      + "IT. ⚠️ THE NARRATOR IS STILL ASLEEP AND HAS NOT MOVED. ⚠️ THE PLASTIC CHAIR IS STILL "
      + "EMPTY. ⚠️ THE FLOOR BETWEEN THE DOOR AND THE BED IS BARE. Flat grey, heavy noise.",
    u: ["ဒါပေမဲ့ ည ၂ နာရီ ၁၇ မိနစ်မှာ ဗီဒီယိုထဲက အခန်းတံခါးက ဖြည်းဖြည်းချင်း ပွင့်လာတယ်။",
      "ဘယ်သူမှ ဝင်မလာဘူး။", "တံခါးက သူ့အလိုလို ပွင့်လာတာ။"] },

  { t: "The Blanket Moved", l: "အိပ်ခန်း", k: "phone", tm: "dark",
    vid: true, w: ["ကျွန်မ"],
    g: "ကျွန်မရဲ့ စောင်က ဖြည်းဖြည်းချင်း လှုပ်လာတယ်။ တစ်စုံတစ်ယောက်က အိပ်ရာအောက်ကနေ ဆွဲနေတာလိုပဲ။",
    p: "The same fixed low angle, identical framing. ⚠️ THE BLANKET HAS BEEN DRAWN DOWN OFF THE "
      + "NARRATOR'S SHOULDER AND THE BOTTOM EDGE OF IT HANGS OVER THE SIDE OF THE BED AND DOWN "
      + "TOWARDS THE FLOOR, pulled taut in a straight line. ⚠️ THE TAUT EDGE DISAPPEARS INTO THE "
      + "BLACK UNDER THE BED FRAME AND NOTHING IS VISIBLE DOWN THERE. ⚠️ SHE IS STILL ASLEEP AND "
      + "HAS NOT MOVED. ⚠️ THE DOOR IS STILL OPEN AND THE CHAIR IS STILL EMPTY. Flat grey, heavy "
      + "noise.",
    u: ["နောက်ထပ် မိနစ်အနည်းငယ်ကြာတော့ ကျွန်မရဲ့ စောင်က ဖြည်းဖြည်းချင်း လှုပ်လာတယ်။",
      "တစ်စုံတစ်ယောက်က အိပ်ရာအောက်ကနေ စောင်ကို ဆွဲနေတာလိုပဲ။", "ပြီးတော့…"] },

  { t: "She Was Standing Over Me", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "phone",
    tm: "dark", vid: true, hidden: true, w: ["ကျွန်မ"],
    g: "⚠️ **သူက ကုလားထိုင်ပေါ်မှာ မထိုင်ဘူး။ ကျွန်မအိပ်ရာဘေးမှာ မတ်တပ်ရပ်ပြီး မျက်နှာကို ငုံ့ကြည့်နေတယ်။**",
    p: "The same fixed low angle, identical framing. ⚠️ A YOUNG WOMAN IS STANDING BESIDE THE BED "
      + "WITH HER BACK HALF TO THE LENS, BENT FORWARD FROM THE WAIST OVER THE SLEEPING NARRATOR'S "
      + "FACE. ⚠️ HER LONG BLACK HAIR HANGS STRAIGHT DOWN AND COVERS HER FACE COMPLETELY AND NO "
      + "FEATURE OF IT IS VISIBLE. ⚠️ HER ARMS HANG LOOSE AT HER SIDES AND SHE IS NOT TOUCHING "
      + "ANYTHING. ⚠️ THE NARRATOR IS ASLEEP BELOW HER AND HAS NOT MOVED. ⚠️ THE CHAIR IN THE "
      + "CORNER IS EMPTY. Flat grey, heavy noise.",
    u: ["ကျွန်မအိပ်ရာဘေးမှာ မိန်းကလေးတစ်ယောက် ပေါ်လာတယ်။", "သူက ကုလားထိုင်ပေါ်မှာ မထိုင်ဘူး။",
      "ကျွန်မအိပ်ရာဘေးမှာ မတ်တပ်ရပ်ပြီး ကျွန်မမျက်နှာကို ငုံ့ကြည့်နေတယ်။",
      "ဗီဒီယိုထဲမှာ ကျွန်မကတော့ အိပ်ပျော်နေတုန်းပဲ။"] },

  { t: "She Looked at the Camera", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "phone",
    tm: "dark", vid: true, hidden: true, w: ["ကျွန်မ"],
    g: "⚠️ **သူက ခေါင်းကို လှည့်ပြီး ဖုန်းကင်မရာကို တည့်တည့်ကြည့်တယ်။ ပြီးတော့ ပြုံးလိုက်တယ်။**",
    p: "The same fixed low angle, identical framing but the figure now turned towards the lens. "
      + "⚠️ SHE IS STILL BENT OVER THE SLEEPING NARRATOR AND HER HEAD IS NOW ROUND AND FACING THE "
      + "CAMERA SQUARE ON. ⚠️ THE LONG BLACK HAIR STILL HANGS FORWARD AND COVERS EVERYTHING ABOVE "
      + "THE MOUTH — ⚠️ NO EYE, NO BROW AND NO LINE OF THE JAW RESOLVES. ⚠️ ONLY HER MOUTH AND "
      + "CHIN SHOW BELOW THE HAIR, AND THE MOUTH IS SMILING, CLOSED AND WIDE. ⚠️ THE NARRATOR IS "
      + "ASLEEP BELOW HER. Flat grey, heavy noise.",
    u: ["အဲဒီမိန်းကလေးက ခေါင်းကို ဖြည်းဖြည်းချင်း လှည့်လိုက်တယ်။", "ဖုန်းကင်မရာကို တည့်တည့်ကြည့်တယ်။",
      "ပြီးတော့ ပြုံးလိုက်တယ်။"] },

  { t: "I Stopped It There", l: "အိပ်ခန်း", k: "hands", tm: "day", w: ["ဖုန်း"],
    g: "ကျွန်မ ဗီဒီယိုကို အဲဒီနေရာမှာပဲ ရပ်လိုက်တယ်။ နောက်ထပ် မကြည့်ရဲတော့ဘူး။",
    p: "Close in on two hands holding a phone in flat daylight, the face out of frame. ⚠️ THE "
      + "SCREEN IS PAUSED ON A FROZEN GREY VIDEO FRAME THAT IS TOO SMALL AND TOO BLURRED FOR "
      + "ANYTHING IN IT TO RESOLVE. ⚠️ ONE THUMB IS STILL PRESSED FLAT ON THE GLASS. ⚠️ BOTH "
      + "HANDS ARE SHAKING AND THE TENDONS STAND OUT ACROSS THE BACKS OF THEM. ⚠️ THE SMALL "
      + "BEADED BRACELET IS ON THE LEFT WRIST. The room beyond the hands soft and out of focus.",
    u: ["ကျွန်မ ဗီဒီယိုကို အဲဒီနေရာမှာပဲ ရပ်လိုက်တယ်။", "နောက်ထပ် မကြည့်ရဲတော့ဘူး။"] },

  /* ── IV · အဒေါ်ကြီး ─────────────────────────────────────────────────── */
  { t: "I Showed Her the Photograph", l: "အဒေါ်ကြီးအခန်း", k: "aunts", tm: "day",
    w: ["အဒေါ်ကြီးအခန်း", "ကျွန်မ", "အဒေါ်ကြီး"],
    g: "အဲဒီနေ့ နေ့လယ်မှာပဲ အိမ်ရှင်အဒေါ်ကြီးဆီ သွားပြီး ဓာတ်ပုံကို ပြလိုက်တယ်။",
    p: "The landlady's front room at seated height in flat daylight from the street side. ⚠️ THE "
      + "NARRATOR IS STANDING AND THE LANDLADY IS SEATED ON THE WORN VINYL SOFA, both complete in "
      + "frame. ⚠️ THE NARRATOR IS HOLDING OUT A SMALL FADED SNAPSHOT AND THE LANDLADY HAS NOT "
      + "TAKEN IT YET. ⚠️ THE THERMOS AND TWO GLASSES ARE ON THE LOW TABLE AND A STACK OF RENT "
      + "LEDGERS IS BESIDE THEM. ⚠️ BOTH FACES ARE LIT THE SAME AND THE ROOM IS COMPLETELY "
      + "ORDINARY.",
    u: ["အဲဒီနေ့ နေ့လယ်မှာပဲ အိမ်ရှင်အဒေါ်ကြီးဆီ သွားပြီး ဓာတ်ပုံကို ပြလိုက်တယ်။",
      "“အဒေါ်၊ ဒီအခန်းမှာ အရင်နေခဲ့တဲ့သူ ဘယ်သူလဲဟင်?”"] },

  { t: "Her Face Changed", c: [[1, "stinger"]], l: "အဒေါ်ကြီးအခန်း", k: "aunt", tm: "day",
    w: ["အဒေါ်ကြီး"],
    g: "ဓာတ်ပုံကို မြင်လိုက်တာနဲ့ အဒေါ်ကြီးရဲ့ မျက်နှာက ပြောင်းလဲသွားတယ်။ “ဒီပုံကို ဘယ်ကရတာလဲ?”",
    p: "Close on the landlady on the sofa in flat daylight, ⚠️ LOOKING DOWN AT SOMETHING SMALL "
      + "AND OUT OF FRAME IN HER OWN HANDS. ⚠️ ALL THE COLOUR HAS GONE OUT OF HER FACE AND HER "
      + "MOUTH HAS OPENED. ⚠️ THE READING GLASSES HAVE COME DOWN OFF HER HEAD AND ARE HALFWAY TO "
      + "HER FACE IN ONE HAND, FORGOTTEN. ⚠️ THE THICK THANAKA ROUNDS ON HER CHEEKS ARE CLEAR. "
      + "Even window light that hides nothing. The cluttered room out of focus behind her.",
    u: ["ဓာတ်ပုံကို မြင်လိုက်တာနဲ့ အဒေါ်ကြီးရဲ့ မျက်နှာက ပြောင်းလဲသွားတယ်။",
      "“ဒီပုံကို ဘယ်ကရတာလဲ?”", "“အခန်းထဲက တွေ့တာပါ။ သူက ဘယ်သူလဲ?”"] },

  { t: "Her Name Was Thiri", l: "အဒေါ်ကြီးအခန်း", k: "aunt", tm: "day", w: ["အဒေါ်ကြီး"],
    g: "“ဒီအခန်းမှာ မိန်းကလေးတစ်ယောက် နေခဲ့ဖူးတယ်။ သူ့နာမည်က သီရိ။”",
    p: "Close on the landlady in flat daylight, ⚠️ LOOKING STRAIGHT AT THE LENS AND SPEAKING "
      + "CAREFULLY, her chin level. ⚠️ THE SNAPSHOT IS FACE DOWN ON HER OWN KNEE AND ONE HAND IS "
      + "FLAT ON TOP OF IT. ⚠️ HER EXPRESSION IS NOT FRIGHTENED — IT IS TIRED AND VERY OLD. ⚠️ "
      + "THE OTHER HAND HAS CLOSED ON THE CLOTH OVER HER SHOULDER. Even window light, the sofa "
      + "and the cabinet soft behind her.",
    u: ["အဒေါ်ကြီး ခဏလောက် တိတ်နေတယ်။", "ပြီးမှ ပြောတယ်။",
      "“ဒီအခန်းမှာ မိန်းကလေးတစ်ယောက် နေခဲ့ဖူးတယ်။ သူ့နာမည်က သီရိ။”"] },

  { t: "Thiri", l: "အဒေါ်ကြီးအခန်း", k: "insert", tm: "day", w: ["သီရိ"],
    g: "သီရိ — ဒီအခန်းမှာ အရင်နေခဲ့တဲ့ မိန်းကလေး။",
    p: "Close on Thiri standing in the rented room in flat daylight, ⚠️ LOOKING STRAIGHT AT THE "
      + "LENS WITH A QUIET, SERIOUS, COMPLETELY ORDINARY EXPRESSION. ⚠️ SHE IS WARM, HEALTHY AND "
      + "PLAINLY ALIVE AND THERE IS NOTHING WRONG WITH HER AT ALL. ⚠️ HER VERY LONG BLACK HAIR IS "
      + "LOOSE AND PUSHED BACK OVER BOTH SHOULDERS. ⚠️ SHE IS CLEARLY A DIFFERENT PERSON FROM THE "
      + "NARRATOR — a rounder face, a wider jaw, heavier brows. The white blouse, the small gold "
      + "ear studs. Even window light.",
    u: ["“သူ ဘယ်ကို ပြောင်းသွားတာလဲ?”",
      "အဒေါ်ကြီးက ကျွန်မကို မျက်နှာချင်းဆိုင်ကြည့်ပြီး ဖြည်းဖြည်းချင်း ပြောတယ်။"] },

  { t: "She Never Moved Out", c: [[1, "stinger"]], l: "အဒေါ်ကြီးအခန်း", k: "her", tm: "day",
    w: ["ကျွန်မ"],
    g: "⚠️ **“သူ ပြောင်းမသွားခဲ့ဘူး သမီး…” — “လွန်ခဲ့တဲ့ နှစ်နှစ်က သူ့ကို အဲဒီအခန်းထဲမှာ သေဆုံးနေတာ တွေ့ခဲ့ကြတာ။”**",
    p: "Close on the narrator standing in the landlady's front room in flat daylight, ⚠️ LOOKING "
      + "STRAIGHT AT THE LENS WITH HER FACE COMPLETELY STILL. ⚠️ ALL THE COLOUR HAS GONE OUT OF "
      + "IT AND HER LIPS ARE PARTED AND SHE IS NOT BREATHING. ⚠️ ONE HAND IS STILL HALF OUT IN "
      + "FRONT OF HER, EMPTY AND OPEN, where something has just dropped out of it. ⚠️ SHE HAS NOT "
      + "MOVED. Even window light that hides nothing, the cluttered room soft behind her.",
    u: ["“သူ ပြောင်းမသွားခဲ့ဘူး သမီး…”", "ကျွန်မရင်ထဲမှာ တစ်ခုခု အေးစက်သွားတယ်။",
      "“လွန်ခဲ့တဲ့ နှစ်နှစ်က သူ့ကို အဲဒီအခန်းထဲမှာ သေဆုံးနေတာ တွေ့ခဲ့ကြတာ။”"] },

  { t: "I Dropped It", l: "အဒေါ်ကြီးအခန်း", k: "floor", tm: "day", w: ["ဓာတ်ပုံ"],
    g: "ကျွန်မ လက်ထဲက ဓာတ်ပုံ ပြုတ်ကျသွားတယ်။ “ဒါဆို… အခန်းကို ဘာလို့ ပြန်ငှားတာလဲ?”",
    p: "A few inches above a worn tiled floor in flat daylight, level along it. ⚠️ THE SMALL "
      + "FADED SNAPSHOT IS LYING FACE UP ON THE TILES WHERE IT HAS JUST FALLEN, slightly skewed. "
      + "⚠️ A PAIR OF FEET IN FLAT SANDALS IS AT THE EDGE OF FRAME, OUT OF FOCUS AND NOT MOVING. "
      + "⚠️ THE GIRL IN THE PHOTOGRAPH IS FACING UP AT THE CEILING. ⚠️ THE TILES AROUND IT ARE "
      + "BARE AND THERE IS NOTHING ELSE IN THE PICTURE. Even window light, shallow focus.",
    u: ["ကျွန်မ လက်ထဲက ဓာတ်ပုံ ပြုတ်ကျသွားတယ်။", "“ဒါဆို… အခန်းကို ဘာလို့ ပြန်ငှားတာလဲ?”",
      "အဒေါ်ကြီးက ချက်ချင်း ပြန်မဖြေဘူး။"] },

  { t: "Nobody Stayed Long", l: "အဒေါ်ကြီးအခန်း", k: "aunt", tm: "day", w: ["အဒေါ်ကြီး"],
    g: "“အရင်ကလည်း ဒီအခန်းမှာ နေတဲ့သူတွေက ညဘက် အသံတွေ ကြားတယ်လို့ ပြောကြတယ်။ ဒါပေမဲ့ ဘယ်သူမှ ကြာကြာမနေခဲ့ကြဘူး။”",
    p: "Close on the landlady in flat daylight, ⚠️ HER EYES DOWN AND OFF TO ONE SIDE AND NOT ON "
      + "THE LENS. ⚠️ SHE IS SPEAKING QUIETLY WITH HER MOUTH BARELY OPEN. ⚠️ ONE HAND IS WORKING "
      + "AT THE CORNER OF THE CLOTH OVER HER SHOULDER, FOLDING AND UNFOLDING IT. ⚠️ THE READING "
      + "GLASSES ARE DOWN ON THE SOFA BESIDE HER. Even window light, the stack of rent ledgers on "
      + "the table out of focus in the foreground.",
    u: ["ပြီးမှ အသံတိုးတိုးနဲ့ ပြောတယ်။",
      "“အရင်ကလည်း ဒီအခန်းမှာ နေတဲ့သူတွေက ညဘက် အသံတွေ ကြားတယ်လို့ ပြောကြတယ်။ ဒါပေမဲ့ ဘယ်သူမှ ကြာကြာမနေခဲ့ကြဘူး။”",
      "“အဒေါ်က ကျွန်မကို ဘာလို့ မပြောခဲ့တာလဲ?”"] },

  { t: "She Told Me Something Before She Died", c: [[1, "bigstinger"]], l: "အဒေါ်ကြီးအခန်း",
    k: "aunt", tm: "day", w: ["အဒေါ်ကြီး"],
    g: "⚠️ **“ဒါပေမဲ့ သီရိ မသေခင် ငါ့ကို တစ်ခုပြောခဲ့ဖူးတယ်…” — “သူ့အခန်းထဲမှာ သူတစ်ယောက်တည်း မဟုတ်ဘူးတဲ့။”**",
    p: "Close on the landlady in flat daylight, ⚠️ LOOKING STRAIGHT AT THE LENS WITH HER EYES "
      + "RED-RIMMED AND WET. ⚠️ HER MOUTH HAS JUST CLOSED ON THE END OF A SENTENCE AND HER CHIN "
      + "IS SHAKING. ⚠️ BOTH HANDS ARE NOW FLAT AND STILL IN HER LAP. ⚠️ SHE IS LOOKING AT "
      + "SOMEBODY SHE HAS ALREADY DECIDED TO TELL. Even unkind window light full on her face, the "
      + "room out of focus behind her.",
    u: ["အဒေါ်ကြီး မျက်လုံးတွေ နီလာတယ်။", "“သမီး… ငါလည်း အခန်းထဲမှာ ဘာဖြစ်နေလဲ မသိခဲ့ဘူး။”",
      "ခဏငြိမ်သွားပြီးနောက် သူ ပြောလိုက်တဲ့ စကားက ကျွန်မကို ပိုကြောက်သွားစေခဲ့တယ်။",
      "“ဒါပေမဲ့ သီရိ မသေခင် ငါ့ကို တစ်ခုပြောခဲ့ဖူးတယ်…”", "“ဘာပြောခဲ့တာလဲ?”",
      "“သူ့အခန်းထဲမှာ သူတစ်ယောက်တည်း မဟုတ်ဘူးတဲ့။”"] },

  /* ── V · အသံ ────────────────────────────────────────────────────────── */
  { t: "I Called a Friend", l: "အိပ်ခန်း", k: "two", tm: "bulb",
    w: ["ကျွန်မ", "သူငယ်ချင်း", "အိပ်ခန်း"],
    g: "အဲဒီညမှာ အခန်းထဲ ပြန်မအိပ်တော့ဘူး။ သူငယ်ချင်းတစ်ယောက်ကို ဖုန်းဆက်ပြီး လာအိပ်ပေးဖို့ ပြောလိုက်တယ်။",
    p: "Two shot at chest height in the rented room under the plain ceiling light. ⚠️ THE "
      + "NARRATOR AND THE FRIEND ARE SITTING SIDE BY SIDE ON THE EDGE OF THE BED, both complete "
      + "in frame. ⚠️ THE FRIEND'S SHORT JAW-LENGTH HAIR READS INSTANTLY AGAINST THE NARRATOR'S "
      + "LONG LOOSE HAIR. ⚠️ A PHONE IS HELD BETWEEN THEM AND BOTH ARE LOOKING DOWN AT IT. ⚠️ THE "
      + "PLASTIC CHAIR IS VISIBLE IN THE CORNER BEHIND THEM AND IT IS EMPTY. Flat green-tinged "
      + "ceiling light, the window black.",
    u: ["အဲဒီညမှာ ကျွန်မ အခန်းထဲ ပြန်မအိပ်တော့ဘူး။",
      "သူငယ်ချင်းတစ်ယောက်ကို ဖုန်းဆက်ပြီး လာအိပ်ပေးဖို့ ပြောလိုက်တယ်။",
      "သူ ရောက်လာတော့ မနေ့ညက ဗီဒီယိုကို ပြလိုက်တယ်။"] },

  { t: "She Laughed at First", l: "အိပ်ခန်း", k: "friend", tm: "bulb", w: ["သူငယ်ချင်း"],
    g: "“နင်ကလည်း horror movie တွေ ကြည့်များလို့ ထင်ယောင်ထင်မှားဖြစ်နေတာနေမှာပေါ့။”",
    p: "Close on the friend sitting on the bed under the ceiling light, ⚠️ GRINNING WIDE WITH HER "
      + "HEAD TIPPED BACK AND HER EYEBROWS UP. ⚠️ SHE IS LOOKING SIDEWAYS AT SOMEBODY OUT OF "
      + "FRAME, NOT AT THE PHONE IN HER OWN HAND. ⚠️ ONE SHOULDER IS RAISED IN A SHRUG. ⚠️ THE "
      + "SHORT JAW-LENGTH HAIR IS TUCKED BEHIND BOTH EARS. ⚠️ SHE IS COMPLETELY UNAFRAID AND THE "
      + "SHOT IS WARM AND ORDINARY. Flat ceiling light, the painted wall behind her.",
    u: ["သူက အစပိုင်းမှာ ရယ်နေခဲ့တယ်။",
      "“နင်ကလည်း horror movie တွေ ကြည့်များလို့ ထင်ယောင်ထင်မှားဖြစ်နေတာနေမှာပေါ့။”"] },

  { t: "Wait, Go Back", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "friend", tm: "bulb",
    w: ["သူငယ်ချင်း"],
    g: "ဗီဒီယိုအဆုံးနားရောက်တော့ သူ့မျက်နှာက တဖြည်းဖြည်း ပြောင်းသွားတယ်။ “ဟဲ့… ခဏရပ်ဦး။”",
    p: "Close on the friend under the ceiling light, ⚠️ THE GRIN COMPLETELY GONE AND HER FACE "
      + "LIT FROM BELOW BY THE PHONE SCREEN IN HER OWN HANDS. ⚠️ HER EYES ARE NARROWED AND FIXED "
      + "ON IT AND SHE HAS STOPPED BLINKING. ⚠️ ONE THUMB IS PRESSED FLAT ON THE GLASS. ⚠️ HER "
      + "MOUTH IS OPEN ON A SHORT WORD. ⚠️ THE COLD SCREEN LIGHT FROM BELOW AND THE FLAT CEILING "
      + "LIGHT FROM ABOVE ARE FIGHTING EACH OTHER ACROSS HER FACE.",
    u: ["ဒါပေမဲ့ ဗီဒီယိုအဆုံးနားကို ရောက်လာတဲ့အခါ သူ့မျက်နှာက တဖြည်းဖြည်း ပြောင်းသွားတယ်။",
      "“ဟဲ့… ခဏရပ်ဦး။”", "သူက ဗီဒီယိုကို နောက်ပြန်ဆွဲလိုက်တယ်။"] },

  { t: "Were You Asleep Here", l: "အိပ်ခန်း", k: "hands", tm: "bulb", w: ["ဖုန်း"],
    g: "“နင် ဒီအချိန်မှာ အိပ်ပျော်နေတာလား?” — “အင်း။ ဘာလို့လဲ?”",
    p: "Close in on two pairs of hands around one phone held between them under the ceiling "
      + "light, the faces out of frame. ⚠️ THE SCREEN SHOWS A FROZEN GREY VIDEO FRAME THAT IS TOO "
      + "SMALL AND TOO BLURRED FOR ANYTHING IN IT TO RESOLVE. ⚠️ ONE THUMB IS DRAGGING ALONG A "
      + "PLAIN SCRUB BAR AT THE BOTTOM OF THE SCREEN. ⚠️ ANOTHER HAND IS PUSHING THE VOLUME UP "
      + "THE SIDE OF THE HANDSET. ⚠️ THE SMALL BEADED BRACELET IS ON ONE LEFT WRIST.",
    u: ["“နင် ဒီအချိန်မှာ အိပ်ပျော်နေတာလား?”", "“အင်း။ ဘာလို့လဲ?”",
      "သူက ဖုန်းအသံကို အကျယ်ဆုံးတင်လိုက်တယ်။"] },

  { t: "Don't Wake Her", l: "အိပ်ခန်း", k: "phone", tm: "dark",
    vid: true, hidden: true, w: ["ကျွန်မ"],
    g: "⚠️ **“သူ့ကို မနှိုးနဲ့… သူ အခုမှ အိပ်ပျော်သွားတာ။”**",
    p: "The fixed low angle from the bedside table, identical framing to the earlier footage, "
      + "pushed in slightly. ⚠️ THE FIGURE IS STILL BENT OVER THE SLEEPING NARRATOR WITH HER FACE "
      + "COMPLETELY BEHIND HER FALLING HAIR AND ONLY THE SMILING MOUTH SHOWING BELOW IT. ⚠️ THE "
      + "SMILING MOUTH IS CLOSED AND HAS NOT OPENED. ⚠️ THE SLEEPING WOMAN'S MOUTH BELOW IT IS "
      + "ALSO CLOSED AND SLACK. ⚠️ NEITHER OF THEM IS SPEAKING AND NEITHER MOUTH IS OPEN AT ALL. "
      + "Flat grey, crushed blacks, heavy noise.",
    u: ["ဗီဒီယိုထဲမှာ မိန်းကလေးက ကျွန်မအပေါ် ငုံ့ကြည့်နေတဲ့အချိန်…", "အသံတစ်ခု ထွက်လာတယ်။",
      "“သူ့ကို မနှိုးနဲ့… သူ အခုမှ အိပ်ပျော်သွားတာ။”"] },

  { t: "That Was My Voice", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "two", tm: "bulb",
    w: ["ကျွန်မ", "သူငယ်ချင်း"],
    g: "⚠️ **အဲဒီအသံက ကျွန်မရဲ့ အသံနဲ့ တစ်ပုံစံတည်း ဖြစ်နေတယ်။ ဒါပေမဲ့ ကျွန်မက ဗီဒီယိုထဲမှာ အိပ်ပျော်နေခဲ့တာ။**",
    p: "Two shot at chest height on the bed under the ceiling light. ⚠️ THE NARRATOR AND THE "
      + "FRIEND ARE BOTH STARING AT THE PHONE BETWEEN THEM AND NEITHER IS MOVING. ⚠️ BOTH FACES "
      + "ARE LIT HARD FROM BELOW BY THE SCREEN AND BOTH MOUTHS ARE OPEN. ⚠️ THE FRIEND'S HAND HAS "
      + "COME OFF THE PHONE AND IS GRIPPING THE NARRATOR'S FOREARM. ⚠️ BOTH ARE COMPLETE IN FRAME "
      + "AND THE SHORT HAIR AND THE LONG HAIR READ AS TWO DIFFERENT PEOPLE AT A GLANCE. ⚠️ THE "
      + "EMPTY PLASTIC CHAIR IS BEHIND THEM.",
    u: ["ကျွန်မတို့နှစ်ယောက်လုံး တိတ်ဆိတ်သွားကြတယ်။", "အဲဒီအသံက ကျွန်မအသံ မဟုတ်ဘူး။",
      "မိန်းကလေးအသံလည်း မဟုတ်ဘူး။", "အဲဒီအသံက…",
      "ကျွန်မရဲ့ အသံနဲ့ တစ်ပုံစံတည်း ဖြစ်နေတယ်။",
      "ဒါပေမဲ့ ကျွန်မက ဗီဒီယိုထဲမှာ အိပ်ပျော်နေခဲ့တာ။"] },

  /* ── VI · ထွက်ခွာခြင်း ──────────────────────────────────────────────── */
  { t: "We Decided to Leave", l: "အိပ်ခန်း", k: "room", tm: "bulb", w: ["အိပ်ခန်း"],
    g: "ကျွန်မတို့ အဲဒီညမှာပဲ အခန်းထဲက ထွက်သွားဖို့ ဆုံးဖြတ်လိုက်ကြတယ်။",
    p: "The rented room from one corner at seated height under the ceiling light, ⚠️ HALF "
      + "EMPTIED IN A HURRY — a holdall open on the bed with clothes pushed into it, a drawer "
      + "left pulled out, things swept off the bedside table. ⚠️ THE BLANKET IS DRAGGED HALF OFF "
      + "THE MATTRESS. ⚠️ THE PLASTIC CHAIR IN THE FAR CORNER IS EMPTY AND HAS NOT BEEN TOUCHED. "
      + "⚠️ THE DOOR STANDS OPEN ONTO THE CORRIDOR. ⚠️ THE ROOM IS EMPTY OF PEOPLE.",
    u: ["ကျွန်မတို့ အဲဒီညမှာပဲ အခန်းထဲက ထွက်သွားဖို့ ဆုံးဖြတ်လိုက်ကြတယ်။",
      "ပစ္စည်းတွေကို မယူတော့ဘဲ အရေးကြီးတာတွေကိုပဲ အမြန်သိမ်းနေခဲ့တယ်။"] },

  { t: "The Charger Under the Bed", l: "အိပ်ခန်း", k: "floor", tm: "bulb", w: ["စာရွက်"],
    g: "အိပ်ရာအောက်မှာ ဖုန်းအားသွင်းကြိုး ကျန်နေမှန်း သတိရသွားတယ်။ ငုံ့ကောက်လိုက်တဲ့အချိန်မှာ စာရွက်လေးတစ်ရွက် တွေ့လိုက်တယ်။",
    p: "A few inches above the tiled floor under the ceiling light, level along it and looking "
      + "into the dark space under the bed frame. ⚠️ A CHARGER CABLE IS COILED ON THE TILES WITH "
      + "A HAND JUST CLOSING ON IT AT THE EDGE OF FRAME. ⚠️ BESIDE IT, FURTHER BACK, A SMALL "
      + "SHEET OF YELLOW-BROWN LINED NOTEPAPER LIES FLAT AND FOLDED OPEN. ⚠️ THE TILES AROUND "
      + "THEM ARE CLEAN AND THERE IS NOTHING ELSE UNDER THE BED. Flat ceiling light reaching only "
      + "the near edge.",
    u: ["ကျွန်မ အိပ်ရာအောက်မှာ ဖုန်းအားသွင်းကြိုး ကျန်နေမှန်း သတိရသွားတယ်။",
      "ငုံ့ကောက်လိုက်တဲ့အချိန်မှာ အိပ်ရာအောက်ကနေ စာရွက်လေးတစ်ရွက် တွေ့လိုက်တယ်။"] },

  { t: "One Line Again", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "insert", tm: "bulb",
    w: ["စာရွက်"],
    g: "⚠️ **“သူ နင့်ကို မြင်သွားပြီဆိုရင် နောက်တစ်ယောက်ကို ရှာတော့မှာ မဟုတ်ဘူး။”**",
    p: "Tight on the yellowed sheet of lined notepaper held flat in two hands under the ceiling "
      + "light, filling the frame. ⚠️ THE PAPER IS CREASED INTO QUARTERS AND SPLITTING ALONG THE "
      + "FOLDS WITH ONE CORNER TORN AWAY. ⚠️ ONE SHORT HANDWRITTEN LINE RUNS ACROSS THE MIDDLE IN "
      + "BLUE BALLPOINT — ⚠️ THE WRITING STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER "
      + "THAN AS LEGIBLE WORDS. ⚠️ IT IS A DIFFERENT HAND AND A DIFFERENT PEN FROM THE RED LINE "
      + "ON THE PHOTOGRAPH. ⚠️ THE REST OF THE SHEET IS BLANK.",
    u: ["စာရွက်က အဝါရောင်ဖြစ်နေပြီး စာလုံးတွေက လက်ရေးနဲ့ ရေးထားတာ။", "စာကြောင်းတစ်ကြောင်းပဲ ရှိတယ်။",
      "“သူ နင့်ကို မြင်သွားပြီဆိုရင် နောက်တစ်ယောက်ကို ရှာတော့မှာ မဟုတ်ဘူး။”",
      "ကျွန်မ ဘာကို ဆိုလိုမှန်း မသိခဲ့ဘူး။"] },

  { t: "Hurry Up", l: "စင်္ကြံ", k: "corridor", tm: "tube", w: ["စင်္ကြံ", "သူငယ်ချင်း"],
    g: "သူငယ်ချင်းက အခန်းတံခါးဝကနေ လှမ်းအော်တယ် — “ဟဲ့… မြန်မြန်လာတော့!”",
    p: "In the corridor at chest height under the weak fluorescent tube, looking along it. ⚠️ THE "
      + "FRIEND IS STANDING IN AN OPEN DOORWAY HALFWAY ALONG WITH A BAG OVER ONE SHOULDER AND ONE "
      + "HAND ON THE DOOR FRAME, turned back and shouting into the room. ⚠️ HER MOUTH IS WIDE "
      + "OPEN. ⚠️ THE GREEN-GREY LIGHT FROM DIRECTLY OVERHEAD IS FLAT AND UNFLATTERING. ⚠️ THE "
      + "REST OF THE CORRIDOR IS COMPLETELY EMPTY AND THE OTHER DOORS ARE SHUT. ⚠️ A MOP AND "
      + "BUCKET STAND AGAINST THE FAR WALL.",
    u: ["အဲဒီအချိန်မှာ သူငယ်ချင်းက အခန်းတံခါးဝကနေ လှမ်းအော်တယ်။", "“ဟဲ့… မြန်မြန်လာတော့!”",
      "ကျွန်မ ထရပ်လိုက်တယ်။"] },

  { t: "One Last Look", l: "အိပ်ခန်း", k: "behind", tm: "bulb",
    w: ["ကျွန်မ", "အိပ်ခန်း"],
    g: "ဒါပေမဲ့ အခန်းအပြင်ကို မထွက်ခင် နောက်ဆုံးတစ်ခေါက် ပြန်လှည့်ကြည့်လိုက်မိတယ်။",
    p: "From behind the narrator at seated height in the doorway, the back of her head and one "
      + "shoulder filling the lower frame and the lit room beyond her. ⚠️ SHE IS MID-TURN BACK "
      + "INTO THE ROOM — the head come round towards one shoulder, the body still facing out. ⚠️ "
      + "THE HALF-PACKED ROOM IS SHARP AND LIT BEYOND HER. ⚠️ THE PLASTIC CHAIR IN THE FAR CORNER "
      + "IS IN FRAME AND IT IS EMPTY. ⚠️ NOBODY ELSE IS IN THE PICTURE. Flat green-tinged ceiling "
      + "light.",
    u: ["ဒါပေမဲ့ အခန်းအပြင်ကို မထွက်ခင် နောက်ဆုံးတစ်ခေါက် ပြန်လှည့်ကြည့်လိုက်မိတယ်။"] },

  { t: "She Was in the Chair", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "chair", tm: "bulb",
    same: true, w: ["ကျွန်မ"],
    g: "⚠️ **ကုလားထိုင်ပေါ်မှာ မိန်းကလေးတစ်ယောက် ထိုင်နေတယ်။ ဒီတစ်ခါ သူ့မျက်နှာကို ကျွန်မ မြင်လိုက်ရတယ်။**",
    p: "Square to the plastic chair in the far corner at seated height under the ceiling light. "
      + "⚠️ A YOUNG WOMAN IS SITTING UPRIGHT ON IT FACING CAMERA WITH HER KNEES TOGETHER AND HER "
      + "HANDS FLAT ON HER THIGHS. ⚠️ HER FACE IS FULLY VISIBLE FOR THE FIRST TIME AND HER HAIR "
      + "IS PUSHED BACK BEHIND BOTH SHOULDERS. ⚠️ SHE IS THE NARRATOR — the same face, the same "
      + "pale grey t-shirt and dark shorts, the same beaded bracelet on the same wrist. ⚠️ HER "
      + "EYES ARE ORDINARY IN THIS SHOT. ⚠️ SHE IS WARM AND NOT PALE AND NOT DAMAGED. Flat "
      + "ceiling light.",
    u: ["ကုလားထိုင်ပေါ်မှာ မိန်းကလေးတစ်ယောက် ထိုင်နေတယ်။",
      "ဒီတစ်ခါ သူ့မျက်နှာကို ကျွန်မ မြင်လိုက်ရတယ်။"] },

  { t: "She Was Me", l: "အိပ်ခန်း", k: "two", tm: "bulb", same: true,
    w: ["ကျွန်မ"],
    g: "⚠️ **သူက ကျွန်မနဲ့ တစ်ပုံစံတည်းပဲ။ မျက်နှာ၊ ဆံပင်၊ အဝတ်အစား… အားလုံးတူတယ်။**",
    p: "Two shot at chest height in the room under the ceiling light. ⚠️ THE NARRATOR IS "
      + "STANDING IN THE DOORWAY AT ONE EDGE OF FRAME AND AN IDENTICAL WOMAN IS SEATED ON THE "
      + "PLASTIC CHAIR AT THE OTHER, both complete in frame and both facing each other. ⚠️ THEY "
      + "ARE THE SAME PERSON TWICE: the same face, the same long loose black hair, the same pale "
      + "grey t-shirt and dark shorts, the same beaded bracelet on the same wrist. ⚠️ BOTH ARE "
      + "LIT IDENTICALLY AND NEITHER IS PALE OR DAMAGED. ⚠️ THE FLOOR BETWEEN THEM IS BARE.",
    u: ["သူက ကျွန်မနဲ့ တစ်ပုံစံတည်းပဲ။", "မျက်နှာ၊ ဆံပင်၊ အဝတ်အစား…", "အားလုံးတူတယ်။",
      "ကွာခြားချက်တစ်ခုပဲ ရှိတယ်။"] },

  { t: "Her Eyes Were Black", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "insert", tm: "bulb",
    same: true, black: true, w: ["ကျွန်မ"],
    g: "⚠️ **သူ့မျက်လုံးတွေက အနက်ရောင် အပြည့်ဖြစ်နေတယ်။**",
    p: "Very close on the seated woman's face filling the frame under the ceiling light. ⚠️ IT IS "
      + "THE NARRATOR'S OWN FACE EXACTLY — the same features, the same warm ordinary skin, the "
      + "same loose black hair at the edges of frame. ⚠️ HER EYES ARE ENTIRELY BLACK: the whole "
      + "visible eye, corner to corner, one even matt black with no white, no iris and no pupil. "
      + "⚠️ THEY ARE FULL AND ROUNDED AND PRESENT, NOT HOLES. ⚠️ THE LIDS, LASHES AND BROWS ARE "
      + "ORDINARY AND THE SKIN AROUND THEM IS WHOLE AND UNMARKED. ⚠️ HER MOUTH IS CLOSED AND "
      + "CALM.",
    u: ["သူ့မျက်လုံးတွေက အနက်ရောင် အပြည့်ဖြစ်နေတယ်။"] },

  { t: "You'll Be Sleeping Outside", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "chair",
    tm: "bulb", same: true, black: true, w: ["ကျွန်မ"],
    g: "⚠️ **သူက ကျွန်မအသံနဲ့ ပြောလိုက်တယ် — “ဒီတစ်ခါတော့ နင် အပြင်မှာ အိပ်ရတော့မှာပေါ့…”**",
    p: "Square to the plastic chair at seated height under the ceiling light, the same framing as "
      + "before. ⚠️ THE SEATED WOMAN IS STILL THE NARRATOR'S EXACT DOUBLE AND HER EYES ARE STILL "
      + "ENTIRELY MATT BLACK WITH NO WHITE AND NO IRIS — full, rounded and present, not holes, "
      + "with ordinary lids and lashes and whole unmarked skin around them. ⚠️ HER MOUTH IS NOW "
      + "OPEN ON A SHORT SENTENCE. ⚠️ SHE HAS NOT MOVED OTHERWISE — the same posture, the same "
      + "hands flat on the same thighs. ⚠️ NOTHING ELSE IN THE ROOM HAS CHANGED.",
    u: ["ပြီးတော့ သူက ကျွန်မအသံနဲ့ ပြောလိုက်တယ်။",
      "“ဒီတစ်ခါတော့ နင် အပြင်မှာ အိပ်ရတော့မှာပေါ့…”"] },

  /* ── VII · တစ်လအကြာ ─────────────────────────────────────────────────── */
  { t: "I Never Went Back", l: "စင်္ကြံ", k: "corridor", tm: "tube", w: ["စင်္ကြံ"],
    g: "အဲဒီနေ့ကစပြီး ကျွန်မ အဲဒီအခန်းကို ဘယ်တော့မှ ပြန်မသွားခဲ့ဘူး။",
    p: "In the corridor at chest height under the weak fluorescent tube, looking along it. ⚠️ "
      + "EVERY DOOR ALONG IT IS SHUT AND ONE OF THEM NOW CARRIES A PADLOCK THROUGH THE HASP. ⚠️ "
      + "THE CORRIDOR IS COMPLETELY EMPTY. ⚠️ THE GREEN-GREY LIGHT FROM OVERHEAD IS FLAT AND "
      + "EVEN AND THERE IS A DEAD INSECT SHADOW IN THE TUBE. ⚠️ THE TILED FLOOR IS BARE AND "
      + "UNMARKED. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["အဲဒီနေ့ကစပြီး ကျွန်မ အဲဒီအခန်းကို ဘယ်တော့မှ ပြန်မသွားခဲ့ဘူး။",
      "အခန်းပြောင်းပြီးနောက်ပိုင်းလည်း အိပ်မပျော်တာတွေ၊ ညဘက်နိုးလာတာတွေ ဖြစ်ခဲ့တယ်။",
      "တစ်လလောက်ကြာတော့ အဲဒီအကြောင်းကို မေ့သွားပြီလို့ ထင်ခဲ့တယ်။"] },

  { t: "A File With No Sender", l: "အိပ်ခန်း", k: "insert", tm: "screen",
    w: ["ဖုန်း"],
    g: "တစ်ညမှာ ကျွန်မဖုန်းထဲကို ဗီဒီယိုဖိုင်တစ်ခု ရောက်လာတယ်။ ပို့တဲ့သူ နာမည်မပါဘူး။",
    p: "Straight down onto a phone lying face up on a bedsheet in the dark, filling the frame, "
      + "the screen the only light in the picture. ⚠️ IT SHOWS A PLAIN MESSAGE PANEL WITH ONE "
      + "VIDEO ATTACHMENT IN IT — a small grey thumbnail too dark to resolve, with a play "
      + "triangle over it. ⚠️ THE SENDER FIELD ABOVE IT IS COMPLETELY BLANK: no name, no number "
      + "and no avatar. ⚠️ ALL OTHER ON-SCREEN TEXT STAYS SOFT AND PARTLY OCCLUDED, READING AS "
      + "MARKS. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["တစ်ညမှာ ကျွန်မဖုန်းထဲကို ဗီဒီယိုဖိုင်တစ်ခု ရောက်လာတယ်။", "ပို့တဲ့သူ နာမည်မပါဘူး။",
      "ဗီဒီယိုက အဲဒီအခန်းထဲမှာ ကျွန်မ ရိုက်ထားခဲ့တဲ့ ဗီဒီယိုပဲ။",
      "ဒါပေမဲ့ အရင်တုန်းက မမြင်ခဲ့တဲ့ အပိုင်းတစ်ခု ရှိနေတယ်။"] },

  { t: "The Last Few Seconds", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "phone", tm: "dark",
    vid: true, same: true, black: true, w: ["ကျွန်မ"],
    g: "⚠️ **ကျွန်မက အိပ်ရာပေါ်မှာ အိပ်ပျော်နေတယ်။ ကုလားထိုင်ပေါ်မှာတော့ အဲဒီမိန်းကလေး ထိုင်နေတယ်။**",
    p: "The fixed low angle from the bedside table, identical framing to the earlier footage. ⚠️ "
      + "THE NARRATOR IS ASLEEP ON THE BED IN THE FOREGROUND, completely still. ⚠️ IN THE FAR "
      + "CORNER AN IDENTICAL WOMAN IS SITTING UPRIGHT ON THE PLASTIC CHAIR FACING THE LENS — the "
      + "same face, the same hair, the same clothes. ⚠️ HER EYES ARE TWO EVEN MATT BLACK OVALS "
      + "WITH NO WHITE, full and present and not holes, with ordinary lids and lashes and whole "
      + "skin around them. ⚠️ HER MOUTH IS OPEN. Flat grey, crushed blacks, heavy noise.",
    u: ["ဗီဒီယိုရဲ့ နောက်ဆုံးစက္ကန့်တွေမှာ ကျွန်မက အိပ်ရာပေါ်မှာ အိပ်ပျော်နေတယ်။",
      "ကုလားထိုင်ပေါ်မှာတော့ အဲဒီမိန်းကလေး ထိုင်နေတယ်။", "သူက ကင်မရာကို ကြည့်ပြီး ပြောတယ်။",
      "“အခု သူ နင့်အိပ်ရာကို ရောက်နေပြီ။”"] },

  { t: "I Was Sitting on My Own Bed", l: "အိပ်ခန်း", k: "her",
    tm: "screen", w: ["ကျွန်မ"],
    g: "⚠️ **ဘာလို့လဲဆိုတော့… အဲဒီအချိန်မှာ ကျွန်မက ကိုယ့်အိပ်ရာပေါ်မှာပဲ ထိုင်နေခဲ့တာ။**",
    p: "Close on the narrator sitting up on a bed in the dark, ⚠️ HER FACE LIT ENTIRELY FROM "
      + "BELOW BY THE PHONE SCREEN IN HER HANDS AND BLACK EVERYWHERE ELSE. ⚠️ HER EYES ARE WIDE "
      + "AND FIXED AND SHE HAS STOPPED BREATHING. ⚠️ HER MOUTH IS OPEN. ⚠️ THE COLD WHITE LIGHT "
      + "CATCHES ONLY HER CHIN, HER LOWER LIP AND THE UNDERSIDE OF HER BROW. ⚠️ THE SPACE BEHIND "
      + "AND AROUND HER IS COMPLETELY BLACK AND NOTHING IN IT RESOLVES.",
    u: ["ဗီဒီယိုပြီးသွားတယ်။", "ကျွန်မ အသက်ရှူရပ်လုမတတ် ဖြစ်သွားတယ်။", "ဘာလို့လဲဆိုတော့…",
      "အဲဒီအချိန်မှာ ကျွန်မက ကိုယ့်အိပ်ရာပေါ်မှာပဲ ထိုင်နေခဲ့တာ။"] },

  { t: "Behind Me", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "behind", tm: "screen",
    w: ["ကျွန်မ"],
    g: "⚠️ **ကျွန်မရဲ့ နောက်ကျောဘက်ကနေ — တစ်ယောက်ယောက်က ဖြည်းဖြည်းချင်း အသက်ရှူနေတဲ့အသံ။ ဟူး… ဟူး…**",
    p: "From behind the narrator at seated height on the bed in the dark, the back of her head "
      + "and shoulders filling the lower frame, ⚠️ LIT ONLY BY THE SPILL OF THE PHONE SCREEN IN "
      + "HER LAP THROWING A FAINT GLOW UP AROUND HER. ⚠️ SHE HAS NOT TURNED AND THE SET OF HER "
      + "NECK AND SHOULDERS IS RIGID. ⚠️ THE ROOM BEHIND AND ABOVE HER IS COMPLETELY BLACK AND "
      + "NOTHING IN IT RESOLVES INTO ANYTHING AT ALL. ⚠️ NOBODY IS STANDING ANYWHERE IN THE "
      + "PICTURE. Very heavy grain, colour entirely gone.",
    u: ["ပြီးတော့ ကျွန်မရဲ့ နောက်ကျောဘက်ကနေ…",
      "တစ်ယောက်ယောက်က ဖြည်းဖြည်းချင်း အသက်ရှူနေတဲ့အသံကို ကြားလိုက်ရတယ်။", "ဟူး… ဟူး…",
      "ကျွန်မ နောက်ကို မလှည့်ရဲခဲ့ဘူး။", "ဖုန်းကို လွှတ်ချလိုက်ပြီး အိမ်အပြင်ကို ပြေးထွက်ခဲ့တယ်။"] },

  { t: "My Clothes Were Gone", l: "အိပ်ခန်း", k: "bed", tm: "dawn",
    w: ["အိပ်ခန်း"],
    g: "နောက်နေ့မနက်မှာ အိပ်ရာပေါ်မှာ ကျွန်မမနေ့ညက ဝတ်ထားတဲ့ အဝတ်အစားတွေ မရှိတော့ဘူး။",
    p: "At mattress height beside the bed in thin colourless first light. ⚠️ THE BLANKET IS "
      + "THROWN BACK AND THE SHEET BENEATH IT IS CREASED WHERE SOMEBODY HAS LAIN. ⚠️ A SET OF "
      + "CLOTHES IS FOLDED NEATLY AND SQUARELY AT THE FOOT OF THE BED — a pale grey "
      + "short-sleeved cotton t-shirt with dark shorts on top of it. ⚠️ THEY ARE CLEAN, DRY AND "
      + "UNMARKED AND THE FOLD IS PRECISE. ⚠️ NOBODY IS IN THE PICTURE AND NOTHING ELSE IS ON "
      + "THE BED. Flat cold light, nothing warm anywhere in it.",
    u: ["နောက်နေ့မနက်မှာ အခန်းထဲ ပြန်ဝင်ကြည့်တော့…",
      "အိပ်ရာပေါ်မှာ ကျွန်မမနေ့ညက ဝတ်ထားတဲ့ အဝတ်အစားတွေ မရှိတော့ဘူး။",
      "အစားထိုးပြီး တစ်စုံတစ်ယောက်ရဲ့ အဝတ်အစားတွေ ရှိနေတယ်။"] },

  { t: "The Ones I Slept In", c: [[1, "stinger"]], l: "အိပ်ခန်း", k: "insert", tm: "dawn",
    w: ["အိပ်ခန်း"],
    g: "⚠️ **အဲဒီအဝတ်အစားတွေက ကျွန်မ အိပ်ပျော်နေတုန်း ဝတ်ထားခဲ့တဲ့ အဝတ်အစားတွေ ဖြစ်နေတယ်။**",
    p: "Tight on the folded clothes at the foot of the bed in thin colourless first light, "
      + "filling the frame, shallow focus. ⚠️ A PALE GREY COTTON T-SHIRT FOLDED SQUARE WITH DARK "
      + "SHORTS LAID ON TOP OF IT. ⚠️ THEY ARE EXACTLY THE CLOTHES THE NARRATOR HAS WORN "
      + "THROUGHOUT — the same colour, the same weave, the same cut. ⚠️ A SMALL BEADED BRACELET "
      + "IS LYING ON TOP OF THE FOLD. ⚠️ EVERYTHING IS CLEAN, DRY AND COMPLETELY UNMARKED. ⚠️ "
      + "THERE IS NOBODY IN THE PICTURE. Flat cold light, no shadow with an edge.",
    u: ["ကျွန်မရဲ့ အဝတ်အစားတွေလိုပဲ။", "ဒါပေမဲ့ အဲဒီအဝတ်အစားတွေက ကျွန်မ ဝတ်ထားတာနဲ့ မတူဘူး။",
      "အဲဒီအဝတ်အစားတွေက ကျွန်မ အိပ်ပျော်နေတုန်း ဝတ်ထားခဲ့တဲ့ အဝတ်အစားတွေ ဖြစ်နေတယ်။"] },

  /* ── VIII · နိဂုံး ──────────────────────────────────────────────────── */
  { t: "We Think We Are Alone", l: "အိပ်ခန်း", k: "room", tm: "dark", w: ["အိပ်ခန်း"],
    g: "တစ်ခါတလေ ကျွန်မတို့ဟာ အခန်းထဲမှာ တစ်ယောက်တည်း နေတယ်လို့ ထင်ကြတယ်။",
    p: "The rented room from one corner at seated height at night with the light off, ⚠️ THE SAME "
      + "FRAMING AS THE VERY FIRST SHOT OF THE FILM. ⚠️ ONLY A THIN WASH OF STREET LIGHT THROUGH "
      + "THE GRILLE LAYS PALE BARS ACROSS THE TILED FLOOR. ⚠️ THE BED IS MADE AND EMPTY. ⚠️ THE "
      + "PLASTIC CHAIR STANDS ALONE IN THE FAR CORNER FACING THE BED AND IT IS EMPTY TOO. ⚠️ THE "
      + "ROOM IS COMPLETELY EMPTY OF PEOPLE AND NOTHING IN IT IS MOVING. Colour almost gone, "
      + "heavy grain.",
    u: ["တစ်ခါတလေ ကျွန်မတို့ဟာ အခန်းထဲမှာ တစ်ယောက်တည်း နေတယ်လို့ ထင်ကြတယ်။",
      "ကိုယ့်မျက်စိနဲ့ မမြင်ရတဲ့အရာတွေကိုလည်း မရှိဘူးလို့ ယူဆတတ်ကြတယ်။"] },

  { t: "Don't Open Your Eyes", c: [[1, "bigstinger"]], l: "အိပ်ခန်း", k: "pillow", tm: "dark",
    w: ["အိပ်ခန်း"],
    g: "⚠️ **နိဂုံး — မျက်လုံးဖွင့်ပြီး ရှာမကြည့်ပါနဲ့။ တချို့အရာတွေက ကိုယ်မြင်သွားမှာကိုပဲ စောင့်နေကြတာ ဖြစ်နိုင်လို့ပါ။**",
    p: "On the mattress beside a pillow at pillow height, level along the bed in almost total "
      + "darkness, ⚠️ THE SAME FRAMING AS THE BREATHING SHOT EARLY IN THE FILM. ⚠️ THE NEAR "
      + "PILLOW IS DENTED WHERE A HEAD IS LYING, just out of frame. ⚠️ THE SECOND PILLOW BESIDE "
      + "IT IS NOW ALSO DENTED, with a clear deep hollow pressed into the middle of it. ⚠️ THE "
      + "SHEET BETWEEN THE TWO PILLOWS IS CREASED AND PULLED. ⚠️ THERE IS NOBODY AND NOTHING "
      + "VISIBLE ON THAT SIDE OF THE BED. Colour gone, very heavy grain.",
    u: ["ဒါပေမဲ့…",
      "တကယ်လို့ ညတစ်ညမှာ ကိုယ်အိပ်ပျော်နေတုန်း တစ်ယောက်ယောက်က ကိုယ့်နားမှာ အသက်ရှူနေသံ ကြားရရင်…",
      "မျက်လုံးဖွင့်ပြီး ရှာမကြည့်ပါနဲ့။", "ဘာလို့လဲဆိုတော့…",
      "တချို့အရာတွေက ကိုယ်မြင်သွားမှာကိုပဲ စောင့်နေကြတာ ဖြစ်နိုင်လို့ပါ။"] },

];

/**
 * Burmese units under about fourteen characters come back from TTS
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
  if (s.vid) cont += CONT_PHONE;
  if (s.same) cont += CONT_SAME;
  if (s.black) cont += CONT_BLACK;
  if (s.hidden) cont += CONT_HIDDEN;
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
