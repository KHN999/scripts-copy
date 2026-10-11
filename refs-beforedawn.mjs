/**
 * မိုးမလင်းခင် — BEFORE DAWN. SERIES REFERENCE LIBRARY, SEASON 1.
 *
 * ⚠️ THIS FILE IS THE ONLY PLACE A CHARACTER IS DESCRIBED. Every episode board
 * imports CAST, PROPS and LOCS from here and never redefines them. Six episodes
 * written over months will drift the moment a second description exists — a
 * jacket that was grey in episode 1 and charcoal in episode 4 is a different
 * person to an image model, and the whole premise of a serial is that it is not.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * ⚠️ THE ONE RULE THAT MATTERS MOST: NO PLATE MAY CONTAIN THE SECRET.
 *
 * One of the twelve is အမည်မဲ့ — the Nameless — wearing a person's shape. The
 * audience must not be able to pick them out of a line-up in episode 1, so
 * EVERY ONE OF THE TWELVE PLATES IS BUILT AS AN ORDINARY LIVING PERSON: warm
 * skin, clear eyes, normal colour, nothing staged, nothing symbolic, nothing
 * held back. Not one of them is lit differently, stands differently, or is
 * described as "uneasy", "wrong" or "hard to read".
 *
 * A board that encodes the reveal in a plate spoils shot 1 of episode 1 and
 * cannot be taken back, because the plate is attached to every later prompt.
 * Whatever is wrong with that character gets stated per shot, in the episode
 * where it is earned, and never here.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * ⚠️ TWELVE FACES THAT MUST NEVER BLEND. This is the hard problem of a cast
 * this size. Each is separated on FOUR axes at once so that no two can collapse
 * into each other even at thumbnail size:
 *
 *   age     22 · 25 · 26 · 27 · 28 · 29 · 33 · 36 · 39 · 42 · 54 · 61
 *   build   lean · stocky · heavy · slight · frail
 *   colour  one garment colour owned by one character and no other
 *   marker  one thing you could name over the phone — a scar, glasses,
 *           a backpack, white hair, a silver bangle
 *
 * ⚠️ 2026 PEOPLE IN AN OLD VILLAGE. The twelve arrive in modern everyday
 * Burmese clothes and stay in them all night. They must never be dressed like
 * the village. That contrast is the show's main visual idea: a delivery rider's
 * red jacket under an oil lamp.
 */

/* ── THE TWELVE, AND THE PUPPET ─────────────────────────────────────────── */

export const CAST = [
  { name: "သီဟ", en: "Thiha — the narrator, twenty-eight",
    prompt:
      "A Burmese man of twenty-eight, lean and upright, ⚠️ IN A PLAIN SLATE-GREY SHORT-SLEEVED "
      + "SHIRT WORN TUCKED INTO BLACK TROUSERS, dark trainers, no bag. ⚠️ HAIR CUT SHORT AND NEAT, "
      + "clean-shaven, a narrow face. ⚠️ ONE SMALL PALE HEALED SCAR ABOUT TWO CENTIMETRES LONG "
      + "SITS ABOVE HIS LEFT EYEBROW — a thin old line, flat and the same colour as the skin "
      + "around it, long since closed. ⚠️ A STEADY, THOUGHTFUL, ENTIRELY ORDINARY FACE with clear "
      + "eyes and good colour. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "နန္ဒာ", en: "Nanda — the nurse, twenty-nine",
    prompt:
      "A Burmese woman of twenty-nine, slim and composed, ⚠️ IN A DEEP TEAL-GREEN LONG-SLEEVED "
      + "BLOUSE AND A PLAIN BLACK HTAMEIN, flat sandals. ⚠️ HER HAIR IS PULLED BACK INTO A LOW "
      + "TIDY PONYTAIL with nothing loose at the front. ⚠️ A PLAIN METAL WRISTWATCH ON HER LEFT "
      + "WRIST, worn with the face on the inside of the arm the way a nurse wears one. No other "
      + "jewellery. ⚠️ A CALM, CAPABLE, COMPLETELY ORDINARY FACE, warm skin, clear eyes. ⚠️ SHE IS "
      + "CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "ကိုဟန်ဇော်", en: "Ko Han Zaw — the driver, forty-two",
    prompt:
      "A Burmese man of forty-two, thickset and physically strong through the chest and arms, ⚠️ "
      + "IN A BLUE-AND-WHITE CHECKED SHORT-SLEEVED SHIRT WORN OPEN OVER A WHITE VEST, WITH A DARK "
      + "NAVY PASOE, rubber slippers. ⚠️ A SHORT COARSE STUBBLE BEARD ALONG THE JAW AND CHIN, hair "
      + "cut short and receding slightly at the temples. ⚠️ A BROAD, EXPRESSIVE, ENTIRELY ORDINARY "
      + "FACE, weathered, warm skin, good colour. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME "
      + "PERSON." },

  { name: "သက်မွန်", en: "Thet Mon — the mother, thirty-six",
    prompt:
      "A Burmese woman of thirty-six, of ordinary build, ⚠️ IN A DARK MAROON-RED LONG-SLEEVED "
      + "BLOUSE AND A BROWN ACHEIK-PATTERNED HTAMEIN, flat sandals. ⚠️ HER HAIR IS WOUND UP INTO A "
      + "ROUND KNOT AT THE BACK OF HER HEAD. ⚠️ ONE PLAIN SILVER BANGLE ON HER RIGHT WRIST. "
      + "Thanaka in two soft patches on her cheeks. ⚠️ AN OPEN, EXPRESSIVE, COMPLETELY ORDINARY "
      + "FACE, warm skin, clear eyes. ⚠️ SHE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "ဦးဘဦး", en: "U Ba Oo — the eldest, sixty-one",
    prompt:
      "A Burmese man of sixty-one, thin and slightly stooped but upright, ⚠️ IN AN OFF-WHITE "
      + "COLLARLESS TAIKPON JACKET GONE SLIGHTLY YELLOW WITH AGE, BUTTONED, OVER A BROWN PASOE, "
      + "flat sandals. ⚠️ HIS HAIR IS FULL AND COMPLETELY WHITE, combed back from a long narrow "
      + "face with deep vertical lines down the cheeks. Clean-shaven. ⚠️ A QUIET, WATCHFUL, "
      + "ENTIRELY ORDINARY OLD FACE with clear steady eyes. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS "
      + "THE SAME PERSON." },

  { name: "သဇင်", en: "Thazin — twenty-six",
    prompt:
      "A Burmese woman of twenty-six, slight and quiet, ⚠️ IN A PALE POWDER-BLUE LONG-SLEEVED "
      + "BLOUSE AND A DARK BROWN HTAMEIN, flat sandals. ⚠️ HER HAIR IS LONG, STRAIGHT, BLACK AND "
      + "WORN COMPLETELY LOOSE PAST HER SHOULDERS with a centre parting. ⚠️ ONE SMALL PLAIN WOODEN "
      + "PENDANT ON A DARK CORD AT HER THROAT. No other jewellery, no thanaka. ⚠️ A GENTLE, "
      + "RESERVED, COMPLETELY ORDINARY FACE, warm skin, clear eyes. ⚠️ SHE IS CLEARLY ONE PERSON "
      + "AND ALWAYS THE SAME PERSON." },

  { name: "ထွန်းမြတ်", en: "Tun Myat — the carpenter, thirty-three",
    prompt:
      "A Burmese man of thirty-three, heavy-set and powerfully built with broad shoulders and "
      + "thick forearms, ⚠️ IN A DARK OLIVE-GREEN WORK SHIRT WITH THE SLEEVES ROLLED ABOVE THE "
      + "ELBOW AND A DARK CHECKED LONGYI HITCHED UP, rubber slippers. ⚠️ HAIR CROPPED VERY SHORT, "
      + "clean-shaven, a square heavy jaw. ⚠️ WORKING HANDS, BROAD AND SCARRED ACROSS THE KNUCKLES. "
      + "A blunt, impatient, entirely ordinary face, warm skin, good colour. ⚠️ HE IS CLEARLY ONE "
      + "PERSON AND ALWAYS THE SAME PERSON." },

  { name: "ရဲအောင်", en: "Ye Aung — the ex-policeman, thirty-nine",
    prompt:
      "A Burmese man of thirty-nine, solidly built and carrying himself very straight, ⚠️ IN A "
      + "PLAIN MID-GREY ZIP JACKET WORN OVER A DARK T-SHIRT, WITH DARK TROUSERS AND BLACK SHOES. "
      + "⚠️ HIS HAIR IS SHORT, SHARPLY CUT AND COMBED NEATLY TO ONE SIDE — the tidiest head in the "
      + "group. Clean-shaven, a square face. ⚠️ A CONTROLLED, ASSESSING, ENTIRELY ORDINARY FACE "
      + "with clear eyes and good colour. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "မင်းခန့်", en: "Min Khant — the delivery rider, twenty-five",
    prompt:
      "A Burmese man of twenty-five, wiry and quick, ⚠️ IN A BRIGHT RED NYLON DELIVERY JACKET WITH "
      + "THE ZIP HALF DOWN OVER A DARK T-SHIRT, BLUE JEANS AND TRAINERS. ⚠️ THE JACKET IS THE "
      + "LOUDEST COLOUR ANYWHERE IN THE SERIES AND IT BELONGS TO HIM ALONE. Hair longer on top and "
      + "pushed back off the forehead, clean-shaven, a thin face. ⚠️ A QUICK, RESTLESS, ENTIRELY "
      + "ORDINARY FACE, warm skin, clear eyes. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME "
      + "PERSON." },

  { name: "ဖြိုးဝေ", en: "Phyo Wai — the student, twenty-two",
    prompt:
      "A Burmese man of twenty-two, slight and narrow-shouldered, ⚠️ THE YOUNGEST PERSON IN THE "
      + "GROUP AND VISIBLY SO. ⚠️ IN A PLAIN OCHRE-BROWN T-SHIRT AND DARK TRACK TROUSERS, canvas "
      + "shoes, ⚠️ A GREY CANVAS BACKPACK ON BOTH SHOULDERS THAT HE NEVER TAKES OFF. Hair soft and "
      + "a little too long over the forehead, no facial hair at all, a smooth round face. ⚠️ AN "
      + "ANXIOUS, YOUNG, COMPLETELY ORDINARY FACE, warm skin, clear eyes. ⚠️ HE IS CLEARLY ONE "
      + "PERSON AND ALWAYS THE SAME PERSON." },

  { name: "မေဇင်", en: "May Zin — the schoolteacher, twenty-seven",
    prompt:
      "A Burmese woman of twenty-seven, neat and precise, ⚠️ IN A CRISP PLAIN WHITE COLLARED "
      + "BLOUSE TUCKED INTO A DARK GREY HTAMEIN, flat shoes. ⚠️ SHE WEARS ROUND THIN-RIMMED "
      + "SPECTACLES — the only person in the series who wears glasses. ⚠️ HER HAIR IS SHOULDER "
      + "LENGTH AND HELD BACK BEHIND ONE EAR WITH A SMALL DARK CLIP. ⚠️ AN ATTENTIVE, PRECISE, "
      + "COMPLETELY ORDINARY FACE, warm skin, clear eyes behind the lenses. ⚠️ SHE IS CLEARLY ONE "
      + "PERSON AND ALWAYS THE SAME PERSON." },

  { name: "ဒေါ်ခင်မာ", en: "Daw Khin Ma — the market seller, fifty-four",
    prompt:
      "A Burmese woman of fifty-four, short and solidly built, ⚠️ IN A MUSTARD-YELLOW "
      + "LONG-SLEEVED BLOUSE AND A FLORAL-PRINTED HTAMEIN IN GREENS AND REDS, rubber slippers. ⚠️ "
      + "HER GREYING HAIR IS PULLED INTO A SMALL TIGHT KNOT and thanaka is applied thickly in two "
      + "broad rounds on her cheeks. ⚠️ SMALL GOLD EAR STUDS. ⚠️ A SHREWD, EXPERIENCED, COMPLETELY "
      + "ORDINARY FACE, warm skin, good colour. ⚠️ SHE IS CLEARLY ONE PERSON AND ALWAYS THE SAME "
      + "PERSON." },

  /**
   * ⚠️ THE PUPPET IS AN OBJECT AND THE PLATE MUST SAY SO.
   *
   * It is a carved marionette hanging from its control bar, not a small person
   * and not a creature. The whole effect across six episodes depends on it
   * being an inert wooden thing that is nevertheless never where it was left —
   * so its wrongness is always POSITIONAL and is stated per shot. Give it a
   * face in the plate and there is nothing left to escalate.
   */
  { name: "ရုပ်သေး", en: "The black puppet — the guardian",
    pose: "The puppet hangs straight down from its wooden control bar at the top of frame with its "
      + "strings taut and its feet just clear of the bottom of frame, shown whole and face on",
    prompt:
      "⚠️ A TRADITIONAL MYANMAR YOKE-THE MARIONETTE ABOUT SEVENTY CENTIMETRES TALL, CARVED FROM "
      + "WOOD AND PAINTED MATT BLACK OVERALL — body, limbs, hands and head all the same dead black "
      + "with no shine. ⚠️ IT WEARS A MINISTER'S COSTUME OF VERY DARK BLACKENED SILK with tarnished "
      + "silver thread at the hems, a stiff pointed headdress, and a short cape over the "
      + "shoulders. ⚠️ THE JOINTS AT THE SHOULDERS, ELBOWS, HIPS AND KNEES ARE PLAINLY VISIBLE "
      + "CARVED WOODEN JOINTS, strung with fine dark cords running up to a plain wooden control "
      + "bar. ⚠️ THE CARVED FACE IS SMOOTH, BLACK AND COMPLETELY FEATURELESS APART FROM A CALM "
      + "CLOSED MOUTH AND TWO SHALLOW CARVED EYES THAT ARE PAINTED OVER IN THE SAME BLACK — no "
      + "white, no glint, no expression. ⚠️ IT IS CLEARLY A CARVED WOODEN OBJECT HANGING ON "
      + "STRINGS AND NOT A LIVING THING. Old, worn at the edges, dusty." },
];

/* ── PROPS — one per game, plus the thing that started it ───────────────── */

export const PROPS = [
  { name: "မြေအိုး", en: "The clay pot — Game 1",
    prompt:
      "⚠️ ONE UNGLAZED RED-BROWN EARTHENWARE WATER POT ABOUT FIFTY CENTIMETRES HIGH, round-bellied "
      + "with a narrow neck and a flared rim, photographed square on against a plain background and "
      + "filling the frame. ⚠️ THE CLAY IS DRY AND MATT with faint horizontal throwing rings round "
      + "the belly and pale dust in the grain. ⚠️ A SHALLOW CHIP IS MISSING FROM THE RIM ON ONE "
      + "SIDE AND THE SURFACE IS OTHERWISE WHOLE AND UNBROKEN. ⚠️ NOTHING IS PAINTED, WRITTEN OR "
      + "CARVED ON IT. Flat even light." },

  { name: "မျက်စိပိတ်ပဝါ", en: "The blindfold cloth — Game 2",
    prompt:
      "⚠️ ONE LONG STRIP OF PLAIN DARK INDIGO COTTON CLOTH ABOUT A METRE LONG AND A HAND WIDE, "
      + "lying loosely coiled on a plain surface and filling the frame. ⚠️ THE WEAVE IS COARSE AND "
      + "VISIBLE, the dye uneven and faded along the folds, both cut ends frayed into loose "
      + "threads. ⚠️ IT IS CLEAN, DRY AND COMPLETELY UNMARKED — no pattern, no stain, no writing. "
      + "Flat even light, soft shadow in the folds." },

  { name: "ထမင်းပန်းကန်", en: "The alms bowl and plate — Game 3",
    prompt:
      "⚠️ ONE OLD WHITE ENAMEL RICE PLATE WITH A CHIPPED DARK-BLUE RIM, photographed straight down "
      + "and filling the frame. ⚠️ ON IT, A SMALL ROUNDED MOUND OF PLAIN WHITE COOKED RICE, newly "
      + "served and untouched, with a worn metal spoon resting beside it. ⚠️ THE ENAMEL IS "
      + "SCRATCHED AND CRAZED WITH AGE and two small black chips show the iron through at the rim. "
      + "⚠️ NOTHING ELSE IS ON THE PLATE. Flat even light." },

  { name: "ရှင်လောင်းထီး", en: "The novice's umbrella — Game 4",
    prompt:
      "⚠️ ONE TRADITIONAL MYANMAR CEREMONIAL SHINPYU UMBRELLA, closed and standing upright against "
      + "a plain background, filling the frame top to bottom. ⚠️ GOLD-COLOURED FOIL AND RED SILK "
      + "PANELS GATHERED TIGHT AROUND A LONG TURNED WOODEN SHAFT, with a fringe of small gold "
      + "tassels hanging from the folded edge and a carved finial at the top. ⚠️ THE FOIL IS "
      + "CREASED, DULLED AND RUBBED BARE IN PLACES — this is a real one that has been carried, not "
      + "a new one. Flat even light, no sparkle." },

  { name: "လက်ဖက်ရည်ခွက်", en: "The teacup — Game 5",
    prompt:
      "⚠️ ONE SMALL THICK CLEAR-GLASS MYANMAR TEASHOP CUP, photographed square on at eye level "
      + "against a plain background and filling the frame. ⚠️ IT HOLDS MILKY ORANGE-BROWN TEA "
      + "ABOUT TWO THIRDS FULL, with a thin pale ring where the condensed milk has not fully mixed "
      + "and a faint film on the surface. ⚠️ THE GLASS IS SCRATCHED AND SLIGHTLY CLOUDED FROM "
      + "WASHING, with a chip the size of a grain of rice on the rim. ⚠️ IT STANDS ON A PLAIN "
      + "SURFACE WITH A SMALL WET RING UNDER IT. Flat even light." },

  { name: "ပေစာဟောင်း", en: "The old palm-leaf manuscript",
    prompt:
      "⚠️ ONE BUNDLE OF OLD MYANMAR PALM-LEAF MANUSCRIPT PAGES, long and narrow, bound between two "
      + "dark lacquered wooden covers with a cord through two holes, lying flat and filling the "
      + "frame. ⚠️ THE TOP LEAF IS SLID PARTLY OUT AND SHOWS LINES OF INCISED BURMESE SCRIPT "
      + "BLACKENED WITH SOOT — ⚠️ THE WRITING STAYS SOFT, WORN AND PARTLY RUBBED AWAY, READING AS "
      + "MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ THE LEAVES ARE DRY, HONEY-BROWN AND SPLIT AT THE "
      + "EDGES, the gilt on the covers almost gone. Flat even light." },
];

/* ── LOCATIONS — fixed architecture for all six episodes ────────────────── */

export const LOCS = [
  { name: "ရွာအဝင်လမ်း", en: "The village entrance road",
    prompt:
      "⚠️ THE DIRT ROAD INTO AN OLD MYANMAR VILLAGE AT NIGHT, seen along it towards the village. "
      + "⚠️ A WEATHERED WOODEN VILLAGE NAME-BOARD ON TWO POSTS STANDS AT THE RIGHT OF THE ROAD, its "
      + "painted Burmese lettering flaked and unreadable. ⚠️ SPLIT-BAMBOO FENCING RUNS ALONG BOTH "
      + "SIDES, with flat open paddy fields beyond it and a treeline far back. ⚠️ THE ROAD SURFACE "
      + "IS PACKED PALE EARTH WITH TWO WORN CART RUTS. ⚠️ NO ELECTRICITY ANYWHERE — the only light "
      + "is a faint orange glow from the village ahead. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "ရွာလယ်ဇရပ်", en: "The village zayat pavilion",
    prompt:
      "⚠️ A LARGE OPEN-SIDED TIMBER ZAYAT IN THE CENTRE OF AN OLD MYANMAR VILLAGE, seen from the "
      + "open ground in front of it. ⚠️ EIGHT HEAVY SQUARE TEAK POSTS CARRY A STEEP TIERED "
      + "CORRUGATED ROOF, the floor a raised platform of dark worn planks about knee height, open "
      + "on all four sides. ⚠️ CLAY OIL-LAMP CUPS STAND ALONG THE EDGE OF THE PLATFORM AND BURN "
      + "WITH SMALL STEADY ORANGE FLAMES. ⚠️ ONE LOW CARVED WOODEN STOOL SITS ALONE IN THE MIDDLE "
      + "OF THE PLATFORM. ⚠️ A HUGE OLD BANYAN TREE STANDS BESIDE THE PAVILION, its aerial roots "
      + "hanging. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "မြေအိုးကွင်း", en: "The pot ground — Game 1",
    prompt:
      "⚠️ A WIDE FLAT AREA OF BARE PACKED EARTH ON THE EDGE OF THE VILLAGE AT NIGHT, seen across "
      + "it. ⚠️ TWELVE IDENTICAL UNGLAZED CLAY WATER POTS STAND IN A WIDE EVENLY SPACED RING ON "
      + "THE GROUND, each one upright and alone on the bare earth. ⚠️ LOOSE STONES AND BROKEN "
      + "BRICK LIE SCATTERED ACROSS THE GROUND BETWEEN THEM. ⚠️ A SMALL RUINED BRICK STUPA STANDS "
      + "AT THE FAR EDGE, its plaster gone and its top broken off. ⚠️ THE ONLY LIGHT IS A FEW "
      + "OIL LAMPS SET ON THE GROUND. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "ဝါးတော", en: "The bamboo grove and west quarter — Game 2",
    prompt:
      "⚠️ A DENSE DARK BAMBOO GROVE AT THE BACK OF AN OLD MYANMAR VILLAGE AT NIGHT, seen along a "
      + "narrow earth path running into it. ⚠️ TALL CLOSE-PACKED BAMBOO CULMS LEAN OVER THE PATH "
      + "FROM BOTH SIDES AND CLOSE IT IN OVERHEAD, the leaves black against a faintly lighter sky. "
      + "⚠️ TWO ABANDONED TIMBER HOUSES STAND BACK AMONG THE STEMS, grey, shuttered and sagging. "
      + "⚠️ A RUINED BRICK WELL-HEAD WITH ITS COPING HALF COLLAPSED SITS BESIDE THE PATH. ⚠️ ALMOST "
      + "NO LIGHT REACHES THE GROUND. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "ဆွမ်းစားဆောင်", en: "The monastery refectory — Game 3",
    prompt:
      "⚠️ THE EATING HALL OF AN OLD WOODEN MYANMAR MONASTERY AT NIGHT, seen from one end. ⚠️ ONE "
      + "VERY LONG LOW TEAK TABLE RUNS DOWN THE MIDDLE OF THE ROOM WITH TEN PLAIN WOODEN STOOLS "
      + "SET ALONG IT, evenly spaced. ⚠️ THE WALLS AND FLOOR ARE DARK WORN TEAK PLANKING, the "
      + "ceiling high and lost in shadow above heavy beams. ⚠️ SHUTTERED OPENINGS RUN ALONG ONE "
      + "SIDE, CLOSED. ⚠️ OIL LAMPS STAND DOWN THE CENTRE OF THE TABLE AND LIGHT ONLY THE TABLE "
      + "ITSELF, leaving the ends of the room black. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "ရွာပွဲခင်း", en: "The festival ground — Game 4",
    prompt:
      "⚠️ A VILLAGE FESTIVAL GROUND SET UP AT NIGHT IN AN OLD MYANMAR VILLAGE, seen across the "
      + "open earth. ⚠️ TALL GOLD CEREMONIAL UMBRELLAS STAND IN TWO ROWS FORMING A PROCESSION "
      + "AVENUE, with strings of coloured paper lanterns hung between bamboo poles above. ⚠️ A "
      + "CIRCLE OF TRADITIONAL DRUMS AND A HSAING WAING STAND ON ONE SIDE, unattended. ⚠️ RED AND "
      + "GOLD CLOTH BUNTING IS TIED ALONG THE POLES. ⚠️ EVERYTHING IS LIT BY LANTERNS AND OIL "
      + "LAMPS AND IS FULLY DRESSED AND READY. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "လက်ဖက်ရည်ဆိုင်", en: "The old teashop — Game 5",
    prompt:
      "⚠️ A SMALL OLD MYANMAR TEASHOP AT NIGHT, seen from inside the doorway. ⚠️ FOUR OR FIVE LOW "
      + "WOODEN TABLES WITH SHORT PLASTIC STOOLS PUSHED IN, the wood dark and ringed with old cup "
      + "marks. ⚠️ GLASS CUPS STAND UPSIDE DOWN IN ROWS ON A WOODEN RACK BEHIND THE COUNTER, with "
      + "a blackened kettle on a cold charcoal stove. ⚠️ ONE OLD ROUND PENDULUM WALL CLOCK IN A "
      + "DARK WOODEN CASE HANGS ON THE BACK WALL. ⚠️ TWO OIL LAMPS LIGHT THE ROOM DIMLY AND THE "
      + "CORNERS ARE BLACK. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "ရွာတံခါးကြီး", en: "The great village gate",
    prompt:
      "⚠️ A HUGE OLD TIMBER GATE CLOSING THE ONLY WAY OUT OF AN OLD MYANMAR VILLAGE, photographed "
      + "square on from inside the village and filling the frame. ⚠️ TWO MASSIVE TEAK LEAVES "
      + "BOUND WITH BLACK IRON STRAPS AND STUDS, SET BETWEEN TWO CARVED POSTS UNDER A SMALL TIERED "
      + "ROOF. ⚠️ A SINGLE HEAVY TIMBER BAR LIES ACROSS BOTH LEAVES IN IRON BRACKETS, SHUT. ⚠️ THE "
      + "WOOD IS GREY, SPLIT AND VERY OLD and the iron is orange with rust. ⚠️ THE GROUND IN FRONT "
      + "OF IT IS BARE PACKED EARTH. ⚠️ THERE IS NOBODY IN THE PICTURE." },
];

/* ── SHARED GRAMMAR FOR THE EPISODE BOARDS ──────────────────────────────── */

export const CAM = {
  wide: "WIDE. Camera at chest height far enough back to hold the whole space.",
  group: "ON THE GROUP. Camera at chest height facing the cluster of people, far enough back to "
    + "hold all of them.",
  thiha: "CLOSE ON THIHA. Camera at his eye height, head-and-shoulders crop.",
  face: "CLOSE ON ONE FACE. Camera at eye height, head-and-shoulders crop.",
  two: "TWO SHOT. Camera at chest height holding two people facing each other in profile.",
  puppet: "ON THE PUPPET. Camera level with it, close enough that it fills most of the frame.",
  stool: "ON THE STOOL. Camera at platform height, square to the low carved stool.",
  hands: "ON THE HANDS. Camera close in on what the hands are doing, the rest of the body out of "
    + "frame.",
  feet: "ON THE FEET. Camera a few inches above the ground, holding the feet and the hem above "
    + "them.",
  behind: "FROM BEHIND. Camera at standing height a little way back, the back of a head and "
    + "shoulders filling the lower frame and the space beyond.",
  insert: "TIGHT INSERT. One subject filling the frame, shallow focus.",
  gate: "ON THE GATE. Camera at chest height square to the closed timber gate.",
  high: "HIGH ANGLE. Camera above head height looking down across the space.",
};

export const TIME = {
  lamp: "TIME: NIGHT, OIL LAMPS ONLY. Small steady orange flames close in, warm pools of light "
    + "that fall off fast, and heavy black everywhere past them. No electric light anywhere.",
  dark: "TIME: NIGHT, NO LAMP. Almost total darkness, only a thin wash of moonlight — shapes just "
    + "legible in outline, colour gone.",
  lantern: "TIME: NIGHT UNDER PAPER LANTERNS. Soft coloured light from strung lanterns overhead, "
    + "warm and uneven, with deep shadow between them.",
  moon: "TIME: NIGHT, OPEN MOONLIGHT. Cold blue-grey light from a high moon, edges clear, colour "
    + "drained almost to monochrome, shadows hard and black.",
  dawn: "TIME: FIRST LIGHT. Thin colourless grey coming up behind the trees, flat and cold, "
    + "everything legible and nothing warm anywhere in it.",
  day2008: "TIME: FLAT DAYLIGHT, EIGHTEEN YEARS AGO. Ordinary overcast daylight, undramatic and "
    + "even, the village whole and lived in.",
};

export const CONT =
  "Continuity: an old Myanmar village with no electricity, one night in 2026. Teak posts, "
  + "split-bamboo fencing, corrugated and thatch roofs, packed earth, clay and enamel. ⚠️ THE "
  + "TWELVE STRANGERS ARE IN MODERN EVERYDAY BURMESE CLOTHES AND STAY IN THEM ALL NIGHT — they "
  + "must never be dressed like the village, and that contrast is deliberate. ⚠️ THE VILLAGE IS "
  + "FULLY PREPARED BUT COMPLETELY EMPTY: lamps lit, food laid out, nobody living in it. ⚠️ "
  + "NOTHING IS DECORATED FOR EFFECT — no mist, no candles in rings, no symbols drawn anywhere.";

/**
 * ⚠️ ATTACH THIS TO EVERY SHOT THE PUPPET IS IN.
 *
 * The one thing that must never happen is a puppet that LOOKS alive. The horror
 * is that it is plainly an object and has moved anyway, which only works if
 * every frame insists it is wood.
 */
export const CONT_PUPPET =
  " ⚠️ THE PUPPET IS A CARVED WOODEN OBJECT IN EVERY FRAME: rigid limbs, visible joints, strings "
  + "running up out of shot, no muscle, no breath, no expression. ⚠️ ITS FACE DOES NOT CHANGE, "
  + "EVER. ⚠️ WHAT IS WRONG IS ONLY EVER WHERE IT IS OR HOW IT IS TURNED, and this shot states "
  + "that. ⚠️ IT IS NEVER SHOWN MID-MOVEMENT AND NEVER SHOWN TOUCHING ANYBODY.";

export const STYLE =
  "Rural Myanmar, cinematic period-inspired supernatural horror. Photorealism, 16:9, 35mm grain, "
  + "level camera, natural depth of field. Teak, bamboo, thatch, fired clay, tarnished gold leaf. "
  + "Honest available light — oil-lamp orange, lantern colour, cold moonlight and black where "
  + "there is no light at all. One still instant. ⚠️ KEEP THE SUBJECT INSIDE THE CENTRAL VERTICAL "
  + "THIRD OF THE FRAME so the 16:9 master can be cropped to 9:16 without losing anybody. ⚠️ ALL "
  + "PRINTED AND CARVED TEXT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS "
  + "WORDS.";
