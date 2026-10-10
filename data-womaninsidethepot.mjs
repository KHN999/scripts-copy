/**
 * အိုးထဲက မိန်းမ — THE WOMAN INSIDE THE POT. 76 shots.
 *
 * Aung Kyaw, a labourer in a Bago village in 2021, is pulling down U San Mya's
 * empty old house for the money. Under the floor his mattock hits a clay pot a
 * cubit high, its lid bound tight with red cloth. Ko Tin Win tells him to leave
 * it: this house was said to have an o:saung, a pot guardian — feed it and you
 * get what you ask for. He doesn't believe it. He takes it home, unties the
 * cloth, lifts the lid. Nothing inside. Long hair stuck round the bottom. A
 * smell of rot. And a woman's voice: "what do you want…"
 *
 * He asks for five hundred thousand for his mother's medicine. Next morning
 * U San Mya's eldest son offers him exactly five hundred thousand to dig for
 * his father's buried money. They find an iron box. He is paid. That night the
 * pot says: "you got it, didn't you… another one…"
 *
 * ⚠️ WHAT THE STORY IS ABOUT. His mother sees the pot and goes grey: a woman
 * vanished in that house once — Ma Khin Nyo, U San Mya's second wife, who was
 * the one who first heard the voice and fed it. When she tried to stop, a woman
 * with her face began sitting in the kitchen at night. U San Mya called out to
 * her, she turned, and the mouth in Ma Khin Nyo's face had not one tooth in it.
 * "She's asleep," it said. His wife was asleep — and her mouth was empty too.
 * By morning she was gone. He bound the pot and buried it.
 *
 * The thing in the pot is not Ma Khin Nyo. It TOOK Ma Khin Nyo. And it has
 * already noticed Aung Kyaw's mother is ill, and offers to cure her — but this
 * time he must come and collect. He doesn't. That night his mother sits up
 * well, walks on two straight legs instead of dragging the bad knee, smiles,
 * says "ask for another one, son" in a voice that is not hers, and has no teeth.
 * She dies. Two months later Ko Tin Win rings to say he saw two women outside
 * the house that night. One was his mother. So was the other. One went back
 * inside. The other followed him to the city — and is standing behind him now,
 * asking to be let out of the pot.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * SIX RULES THIS BOARD IS BUILT ON.
 *
 * 1. ⚠️ THE POT IS A CHARACTER AND MUST BE THE SAME OBJECT EVERY TIME. One
 *    cubit high, unglazed red-brown earthenware, a chip off the rim, a flat
 *    clay lid, red cotton cord. It appears in thirty shots across twenty years
 *    of story time, and a pot that changes shape costs the film its spine.
 *
 * 2. ⚠️ NO TEETH IS BARE GUMS, NOT A WOUND. "A mouth with no teeth" reads to
 *    the filter as damage and comes back as a hole torn in a face. CONT_GUMS
 *    says what IS there: smooth, even, healthy pink gum, whole lips, an ordinary
 *    face. The horror is that it is CALM and EMPTY, not that it is injured.
 *
 * 3. ⚠️ THE THING FROM THE POT IS NEVER SHOWN WHOLE. Hair first, then a head
 *    with the face entirely behind the hair, then a neck. No complete figure,
 *    ever, and no face behind the hair in any shot. What comes out of the pot is
 *    only ever as much of it as has come out yet.
 *
 * 4. ⚠️ A COPY IS AN ORDINARY WOMAN UNTIL THE SHOT SAYS OTHERWISE. Both the
 *    thing wearing Ma Khin Nyo's face and the thing wearing Mother's are built
 *    from the living reference plate — same face, same clothes, no pallor, no
 *    staging. One stated fact per shot is what is wrong. Never two.
 *
 * 5. ⚠️ THE MOTHER'S BAD KNEE IS THE TELL AND IT IS PHYSICAL. She drags the
 *    left leg in every shot where she is herself. In the shots where she is not,
 *    both legs are straight and even. That single difference is the reveal —
 *    draw the legs, not an atmosphere.
 *
 * 6. ⚠️ RURAL BAGO, NOT A HAUNTED HOUSE. Dry-zone village: teak posts, bamboo
 *    walls, a corrugated roof, packed-earth floors, a thanaka tin, a mosquito
 *    net. Nothing in this film is decorated — no mist, no candles, no symbols.
 *    The fear is domestic: it is always a familiar thing behaving slightly wrong.
 */

/** The project title in the lab. */
export const TITLE = "အိုးထဲက မိန်းမ";

export const CAST = [
  { name: "အောင်ကျော်", en: "Aung Kyaw — the narrator, twenty-five",
    prompt:
      "A Burmese man of twenty-five, lean and sun-darkened from outdoor work, ⚠️ IN A FADED "
      + "SHORT-SLEEVED SHIRT AND A DARK CHECKED LONGYI KNOTTED AT THE WAIST, barefoot, hair cut "
      + "short, no moustache. ⚠️ WORKING HANDS — broad, scarred, the nails short and dirty. An "
      + "ordinary, tired, completely unremarkable village face with clear eyes and good colour. ⚠️ "
      + "HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "အမေ", en: "Mother — about fifty-five",
    prompt:
      "A Burmese woman of about fifty-five, thin, ⚠️ IN A PLAIN LOOSE BLOUSE AND A DARK PRINTED "
      + "HTAMEIN, barefoot, ⚠️ HER GREY-STREAKED HAIR PULLED BACK INTO A SMALL TIGHT KNOT, thanaka "
      + "in two plain patches on her cheeks. ⚠️ SHE IS UNWELL BUT COMPLETELY ALIVE — warm skin, "
      + "clear ordinary eyes, a lined kind face, no pallor and nothing frightening about her. ⚠️ "
      + "HER LEFT KNEE IS BAD: standing, she carries her weight on the right leg and the left foot "
      + "turns slightly out. ⚠️ SHE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "ကိုတင်ဝင်း", en: "Ko Tin Win — the workmate, thirty",
    prompt:
      "A Burmese man of about thirty, stocky and strongly built, ⚠️ BARE-CHESTED UNDER AN OPEN "
      + "WORK SHIRT WITH A GREEN CHECKED LONGYI HITCHED UP TO THE KNEE, barefoot, ⚠️ A FADED "
      + "TOWEL WOUND ROUND HIS HEAD. Thick forearms, thanaka smeared rough on both cheeks. ⚠️ A "
      + "BROAD, PLAIN, SLIGHTLY WORRIED FACE — the older workmate who knows what the village says "
      + "and half believes it. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "မခင်ညို", en: "Ma Khin Nyo — U San Mya's second wife, thirty",
    prompt:
      "A Burmese woman of about thirty, slim and striking, ⚠️ IN A WELL-MADE PALE BLOUSE AND A "
      + "DARK SILK HTAMEIN, small gold ear studs, ⚠️ HER HAIR LONG, THICK, BLACK AND PINNED UP AT "
      + "THE BACK WITH A FEW STRANDS LOOSE. Thanaka applied neatly in two smooth rounds. ⚠️ BUILD "
      + "HER AS A COMPLETELY ORDINARY LIVING WOMAN — warm skin, clear ordinary eyes, a calm "
      + "unremarkable face, lips closed in a normal relaxed mouth. ⚠️ NOTHING ABOUT HER IS "
      + "FRIGHTENING OR DAMAGED IN THIS PLATE. What is wrong is stated by each shot and is never "
      + "in the plate. ⚠️ SHE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "သားကြီး", en: "The eldest son — U San Mya's son, forty-five",
    prompt:
      "A Burmese man of about forty-five, heavy through the shoulders and better dressed than the "
      + "labourers, ⚠️ IN A CLEAN WHITE COLLARED SHIRT AND A GOOD DARK LONGYI, leather sandals, "
      + "a shoulder bag. Hair thinning and combed flat, a small moustache. ⚠️ A GUARDED, "
      + "UNCOMFORTABLE, ENTIRELY ORDINARY FACE — a man carrying something his father left him. "
      + "⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },

  { name: "ဆရာတော်", en: "The sayadaw — the village abbot, seventy",
    prompt:
      "An elderly Burmese Buddhist monk of about seventy, ⚠️ IN DARK MAROON-BROWN ROBES WITH ONE "
      + "SHOULDER BARE, head and eyebrows shaved, barefoot. Thin, upright, deeply lined, with very "
      + "steady eyes. ⚠️ HIS HANDS ARE FOLDED IN HIS LAP AND HE IS COMPLETELY CALM. ⚠️ ORDINARY "
      + "AND RESPECTFUL — no halo, no glow, no ritual objects, nothing mystical anywhere in the "
      + "picture. ⚠️ HE IS CLEARLY ONE PERSON AND ALWAYS THE SAME PERSON." },
];

export const PROPS = [
  { name: "အိုး", en: "The pot",
    prompt:
      "⚠️ ONE UNGLAZED RED-BROWN EARTHENWARE POT ABOUT A CUBIT HIGH — forty-five centimetres — "
      + "round-bellied, narrowing to a mouth the width of a hand, photographed square on against a "
      + "plain background and filling the frame. ⚠️ A FLAT DISC OF FIRED CLAY SITS ON TOP AS A LID "
      + "AND IS BOUND DOWN WITH RED COTTON CORD CROSSED OVER IT AND KNOTTED AT THE NECK. ⚠️ THE "
      + "CLAY IS OLD AND DRY: a shallow chip out of the rim, pale earth dried into the lower half, "
      + "fine dark staining round the foot. ⚠️ THE CLOTH IS FADED, DUSTY AND REAL — no pattern, no "
      + "writing, no decoration anywhere on the pot. Flat even daylight." },

  { name: "သံသေတ္တာ", en: "The iron box",
    prompt:
      "⚠️ ONE SMALL RUSTED IRON STRONGBOX ABOUT THE SIZE OF TWO BRICKS, lid thrown back, "
      + "photographed from above and filling the frame. ⚠️ THE OUTSIDE IS ROUGH WITH RUST AND "
      + "CAKED PALE EARTH, the hinges orange and seized, a flat hasp hanging open. ⚠️ INSIDE, A "
      + "THICK PACK OF OLD BANKNOTES GONE SOFT AND BROWN AT THE EDGES, and resting on top of them "
      + "ONE PLAIN GOLD RING. Flat even daylight, no sparkle and no glow." },
];

export const LOCS = [
  { name: "အိမ်ဟောင်း", en: "The old house",
    prompt:
      "⚠️ A LARGE ABANDONED TIMBER VILLAGE HOUSE IN RURAL BAGO, raised on teak posts with the "
      + "space beneath it open, seen from the yard. ⚠️ HALF PULLED DOWN ALREADY — planks stacked, "
      + "a section of corrugated roof lifted off, rafters showing, a bamboo wall panel leaning "
      + "against a post. Dry pale earth, a tamarind tree, scrub along a bamboo fence. ⚠️ TWENTY "
      + "YEARS EMPTY: grey weathered wood, no glass, no paint, nothing growing on it. ⚠️ THERE IS "
      + "NOBODY IN THE PICTURE." },

  { name: "ကျွန်တော့်အခန်း", en: "Aung Kyaw's room",
    prompt:
      "⚠️ A SMALL BARE ROOM IN A POOR BAGO VILLAGE HOUSE: woven bamboo walls, a packed-earth "
      + "floor, a low wooden plank bed with a thin mat and a folded blanket, a mosquito net tied up "
      + "in a knot above it. ⚠️ A SINGLE BARE BULB ON A FLEX, a shuttered window with no glass, a "
      + "nail in the wall with a shirt on it, a thanaka tin and a plastic cup on an upturned crate. "
      + "⚠️ POOR, CLEAN AND COMPLETELY ORDINARY — no shrine, no charms, no decoration. ⚠️ THE ROOM "
      + "IS EMPTY AND THE FLOOR IS CLEAR." },

  { name: "အမေ့အခန်း", en: "Mother's room",
    prompt:
      "⚠️ A SMALL VILLAGE BEDROOM: a low wooden bed against a woven bamboo wall, a mosquito net "
      + "let down and knotted back at one corner, a thin printed blanket, two flat pillows. ⚠️ A "
      + "SMALL TABLE BESIDE THE BED WITH A WATER GLASS, A STRIP OF TABLETS AND A TORCH ON IT. A "
      + "plank door with a simple wooden latch, a shuttered window. Packed-earth floor, one bare "
      + "bulb. ⚠️ LIVED IN AND TIDY — a towel on a nail, slippers by the bed. ⚠️ NOBODY IS IN THE "
      + "PICTURE." },

  { name: "ကျောင်း", en: "The monastery hall",
    prompt:
      "⚠️ THE MAIN HALL OF A SMALL RURAL MYANMAR MONASTERY: a wide polished dark teak floor, heavy "
      + "square posts, shuttered side openings standing open onto flat daylight, a low dais at one "
      + "end with a plain mat and a cushion on it. ⚠️ ALMOST EMPTY — a few folded mats, a brass "
      + "water jug, a broom against a post. High shadowed rafters above. ⚠️ CALM, SWEPT, ORDINARY "
      + "AND COMPLETELY UNDECORATED. ⚠️ THERE IS NOBODY IN THE PICTURE." },

  { name: "မီးဖိုချောင်", en: "U San Mya's kitchen",
    prompt:
      "⚠️ THE KITCHEN OF A PROSPEROUS OLD VILLAGE HOUSE, TWENTY YEARS AGO: a raised clay hearth "
      + "with three stones and cold ash, blackened pots on a shelf, a water jar with a coconut "
      + "dipper, strings of dried chilli from a beam. ⚠️ A PLANK FLOOR, WOVEN BAMBOO WALLS AND ONE "
      + "LOW DOORWAY THROUGH TO THE DARK OF THE HOUSE. A hurricane lamp hanging from a nail, turned "
      + "low. ⚠️ WELL KEPT AND WELL USED. ⚠️ THE ROOM IS EMPTY AND EVERY SURFACE IS CLEAR." },

  { name: "မြို့အခန်း", en: "The rented room in town",
    prompt:
      "⚠️ A SMALL CHEAP RENTED ROOM IN A MYANMAR TOWN, PRESENT DAY: painted concrete walls gone "
      + "grubby, a tiled floor, a thin mattress on the floor with a sheet, a plastic chair, a "
      + "standing fan. ⚠️ ONE WINDOW WITH A SECURITY GRILLE AND A CURTAIN HALF DRAWN, a bare bulb, "
      + "a phone charger hanging from a socket. ⚠️ BARELY MOVED INTO — a holdall against the wall, "
      + "nothing on the walls at all. ⚠️ NOBODY IS IN THE PICTURE." },
];

const CAM = {
  pot: "ON THE POT. Camera at the pot's own height, close enough that it fills most of the frame.",
  lid: "TIGHT ON THE LID. Camera straight down onto the top of the pot, the rim inside the frame.",
  pit: "DOWN IN THE TRENCH. Camera low in the dug earth under the house posts, looking along it.",
  house: "WIDE ON THE OLD HOUSE. Camera at chest height out in the yard, holding the whole frame "
    + "of it.",
  ak: "CLOSE ON AUNG KYAW. Camera at his eye height, head-and-shoulders crop.",
  mum: "CLOSE ON MOTHER. Camera at her eye height, head-and-shoulders crop.",
  win: "CLOSE ON KO TIN WIN. Camera at his eye height, head-and-shoulders crop.",
  son: "CLOSE ON THE ELDEST SON. Camera at his eye height, head-and-shoulders crop.",
  monk: "CLOSE ON THE SAYADAW. Camera at his seated eye height, head-and-shoulders crop.",
  nyo: "CLOSE ON MA KHIN NYO. Camera at her eye height, head-and-shoulders crop.",
  room: "IN AUNG KYAW'S ROOM. Camera at seated height in the corner, holding most of the space.",
  mroom: "IN MOTHER'S ROOM. Camera at seated height beside the bed.",
  hall: "IN THE MONASTERY HALL. Camera at seated height on the teak floor, holding the space.",
  kitchen: "IN THE KITCHEN. Camera at standing height in the low doorway, looking in.",
  door: "ON THE DOOR. Camera at chest height inside the room, square to the closed plank door.",
  floor: "AT FLOOR HEIGHT. Camera a few inches above the floor, level along it.",
  hands: "ON THE HANDS. Camera close in on what the hands are doing, the rest of the body out of "
    + "frame.",
  feet: "ON THE FEET. Camera a few inches above the floor, holding the feet and the hem above "
    + "them.",
  behind: "FROM BEHIND HIM. Camera at standing height a little way back, the back of his head and "
    + "shoulders filling the lower frame and the room beyond.",
  mouth: "TIGHT ON THE MOUTH. Camera very close in on the lower half of a face, shallow focus.",
  city: "IN THE RENTED ROOM. Camera at seated height, holding most of the small room.",
  yard: "IN THE YARD. Camera at chest height out in front of the house, looking at it.",
  insert: "TIGHT INSERT. One subject filling the frame, shallow focus.",
};

const TIME = {
  day: "TIME: FLAT HARD DAYLIGHT. Dry-zone sun, bleached pale earth, short hard shadows, dust in "
    + "the air.",
  dusk: "TIME: LATE AFTERNOON. Low orange light coming in sideways, long shadows across the "
    + "ground, the sky going pale.",
  bulb: "TIME: NIGHT, ONE BARE BULB. A single bulb on a flex overhead, warm and plain, the corners "
    + "of the room dim and the window black.",
  dark: "TIME: NIGHT, NO LAMP. Almost total darkness, only a thin wash of moonlight through the "
    + "shutter slats — shapes just legible in outline, colour gone.",
  lamp: "TIME: NIGHT BY HURRICANE LAMP, TWENTY YEARS AGO. One low kerosene flame, deep warm "
    + "orange close in and heavy black everywhere past it.",
  dawn: "TIME: FIRST LIGHT. Thin colourless grey through the shutters, flat and cold, everything "
    + "legible and nothing warm anywhere in it.",
};

const CONT =
  "Continuity: a poor village in the Bago dry zone, present day, except where a shot says twenty "
  + "years ago. Teak posts, woven bamboo walls, corrugated roofs, packed earth, enamel and "
  + "plastic. Longyis, bare feet, thanaka. ⚠️ NOTHING IN THIS FILM IS DECORATED OR STYLED — no "
  + "mist, no candles, no charms, no symbols, no staging. The fear is domestic: it is always a "
  + "familiar thing behaving slightly wrong.";

const CONT_POT =
  " ⚠️ THE POT IS THE SAME OBJECT IN EVERY SHOT IT APPEARS IN: unglazed red-brown earthenware "
  + "about forty-five centimetres high, round-bellied, narrowing to a mouth the width of a hand, "
  + "a flat fired-clay disc for a lid, a shallow chip out of the rim and pale dried earth over the "
  + "lower half. ⚠️ NOTHING IS WRITTEN, PAINTED OR CARVED ON IT ANYWHERE.";

const CONT_GUMS =
  " ⚠️ THE OPEN MOUTH IS COMPLETELY EMPTY OF TEETH AND THE GUM IS SMOOTH, EVEN AND HEALTHY PINK, "
  + "the way an old person's bare gum is — a clean unbroken ridge, upper and lower. ⚠️ THE LIPS, "
  + "THE JAW AND THE WHOLE FACE AROUND THE MOUTH ARE INTACT, UNMARKED AND ORDINARY, the skin warm "
  + "and the expression calm. ⚠️ NOTHING HERE IS TORN, CUT, BLEEDING OR DAMAGED — what is wrong is "
  + "only that there is nothing in the mouth.";

const CONT_PARTIAL =
  " ⚠️ WHATEVER IS COMING OUT OF THE POT IS SHOWN ONLY AS FAR AS IT HAS COME — hair, or hair and a "
  + "scalp, or hair and a head and a neck, and never more than this shot states. ⚠️ THE FACE IS "
  + "COMPLETELY BEHIND THE FALLING HAIR AND NO FEATURE OF IT IS VISIBLE AT ALL: no eye, no mouth, "
  + "no edge of a jaw. ⚠️ NEVER A WHOLE FIGURE AND NEVER A FACE.";

const CONT_COPY =
  " ⚠️ THIS IS AN EXACT ORDINARY LIVING COPY OF THE WOMAN AND IT IS BUILT FROM HER REFERENCE "
  + "PLATE: the same face, the same hair, the same clothes, warm skin, normal colour, standing or "
  + "sitting like anybody else. ⚠️ NO PALLOR, NO SHADOW ACROSS THE FACE, NOTHING STAGED. ⚠️ THE "
  + "ONE THING THIS SHOT STATES IS WRONG WITH HER IS THE ONLY THING THAT IS WRONG WITH HER.";

const CONT_WALK =
  " ⚠️ BOTH HER LEGS ARE STRAIGHT, EVEN AND TAKING EQUAL WEIGHT, the stride square and the feet "
  + "flat — which is exactly what is wrong. ⚠️ IN EVERY OTHER SHOT HER LEFT KNEE IS BAD AND THAT "
  + "FOOT DRAGS AND TURNS OUT. Draw the legs plainly and let the difference carry it.";

const STYLE =
  "Rural Bago, Myanmar. Photorealism, 16:9, 35mm grain, level camera, natural depth of field. "
  + "Dry pale earth, grey weathered teak, woven bamboo, fired clay, enamel and cheap plastic. "
  + "Honest available light — hard dry-zone sun, bare-bulb orange, kerosene flame, flat shutter "
  + "grey, and black where there is no light at all. One still instant. ⚠️ ALL PRINTED TEXT STAYS "
  + "SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS WORDS.";

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "I · အိုးအဖုံးကို ဖွင့်လိုက်တဲ့ည",
  11: "II · ငါးသိန်း",
  18: "III · နောက်တစ်ခု",
  24: "IV · မခင်ညို",
  29: "V · တောက်… တောက်… တောက်…",
  35: "VI · အမေ့အသံနဲ့ တစ်ပုံစံတည်း",
  40: "VII · ရွာဦးကျောင်း",
  43: "VIII · သွားတစ်ချောင်းမှ မရှိဘူး",
  50: "IX · မင်းကိုယ်တိုင် လာယူရမယ်",
  56: "X · အမေ နေကောင်းသွားပြီ",
  65: "XI · ဆရာဝန်က ရောဂါကြောင့်လို့ပဲ ပြောတယ်",
  68: "XII · မိန်းမနှစ်ယောက်",
};

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  /* ── I · အိုးအဖုံးကို ဖွင့်လိုက်တဲ့ည ──────────────────────────────────── */
  { t: "The Night I Opened the Lid", l: "ကျွန်တော့်အခန်း", k: "pot", tm: "bulb", pot: true,
    w: ["အိုး"],
    g: "⚠️ ဖွင့်ပုံ — အိုးအဖုံးကို ဖွင့်လိုက်တဲ့ညက ကျွန်တော် ပိုက်ဆံလိုချင်တယ်လို့ ပြောခဲ့တယ်။",
    p: "The clay pot standing alone on a packed-earth floor under one bare bulb, close enough to "
      + "fill most of the frame. ⚠️ THE LID IS SITTING SQUARE ON TOP AND THE RED CORD IS LYING "
      + "LOOSE AND UNTIED IN A COIL BESIDE THE FOOT OF IT. Warm bulb light down one side of the "
      + "belly, the woven wall behind it dim and out of focus. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["အိုးအဖုံးကို ဖွင့်လိုက်တဲ့ညက ကျွန်တော် ပိုက်ဆံလိုချင်တယ်လို့ ပြောခဲ့တယ်။",
      "နောက်နေ့မနက်မှာ ပိုက်ဆံတကယ်ရခဲ့တယ်။",
      "ဒါပေမယ့် အဲဒီပိုက်ဆံ ဘယ်ကရလာသလဲဆိုတာ သိလိုက်ရတဲ့နေ့မှာတော့ အိုးကို ဖွင့်ခဲ့မိတာ နောင်တရသွားတယ်။"] },

  { t: "My Name Is Aung Kyaw", l: "ကျွန်တော့်အခန်း", k: "ak", tm: "day", w: ["အောင်ကျော်"],
    g: "ကျွန်တော့်နာမည် အောင်ကျော်။ ပဲခူးတိုင်းဘက် ရွာတစ်ရွာမှာ နေခဲ့တယ်။",
    p: "Close on Aung Kyaw sitting on the edge of the plank bed in flat daylight through the "
      + "shutters, ⚠️ LOOKING STRAIGHT AT THE LENS, his forearms on his knees and his hands hanging "
      + "loose between them. Faded shirt, dark checked longyi, short hair. ⚠️ AN ORDINARY TIRED "
      + "FACE AND NOTHING MORE. The bamboo wall behind him soft and out of focus.",
    u: ["ကျွန်တော့်နာမည် အောင်ကျော်။",
      "နှစ်ထောင့်နှစ်ဆယ့်တစ် ခုနှစ်လောက်က ပဲခူးတိုင်းဘက် ရွာတစ်ရွာမှာ ကျွန်တော်နေခဲ့တယ်။",
      "အဲဒီတုန်းက အလုပ်အကိုင်လည်း မကောင်းဘူး။ အမေကလည်း နေမကောင်းဖြစ်နေတော့ ဆေးဖိုးဝါးခအတွက် အကြွေးတွေတင်နေတယ်။"] },

  { t: "Tearing Down U San Mya's House", l: "အိမ်ဟောင်း", k: "house", tm: "day", w: ["အိမ်ဟောင်း"],
    g: "ရွာထိပ်က ဦးစံမြရဲ့ အိမ်ဟောင်းကို ဖျက်တဲ့အလုပ် ဝင်လုပ်ဖြစ်တယ်။",
    p: "Wide on the half-demolished timber house in hard dry-zone sun, ⚠️ A SECTION OF THE ROOF "
      + "ALREADY LIFTED OFF AND THE RAFTERS SHOWING AGAINST A WHITE SKY, planks stacked in the "
      + "yard. ⚠️ THE OPEN SPACE UNDER THE HOUSE POSTS IS DUG OPEN IN ONE PLACE and a mattock is "
      + "leaning against a post. Pale earth, a tamarind tree, a bamboo fence. ⚠️ NOBODY IS IN THE "
      + "PICTURE.",
    u: ["တစ်နေ့မှာ ရွာထိပ်က ဦးစံမြရဲ့ အိမ်ဟောင်းကို ဖျက်တဲ့အလုပ် ဝင်လုပ်ဖြစ်တယ်။",
      "အိမ်က လူမနေတော့တာ နှစ်နှစ်ဆယ်ကျော်ပြီ။",
      "အိမ်အောက်က မြေကြီးတွေ တူးရှင်းနေတုန်း ပေါက်တူးက တစ်ခုခုကို ထိမိတယ်။"] },

  { t: "A Clay Pot", c: [[1, "stinger"]], l: "အိမ်ဟောင်း", k: "pit", tm: "day", pot: true,
    w: ["အိုး"],
    g: "⚠️ မြေအိုးတစ်လုံး — အဖုံးကို အဝတ်နီနဲ့ တင်းတင်းစည်းထားတယ်။",
    p: "Low in the dug trench under the house posts in hard sun, ⚠️ THE CLAY POT SITTING HALF OUT "
      + "OF THE PALE EARTH WITH THE SOIL CLEARED AWAY FROM ONE SIDE OF IT, upright and undisturbed. "
      + "⚠️ THE FLAT CLAY LID IS BOUND DOWN WITH RED COTTON CORD CROSSED OVER THE TOP AND KNOTTED "
      + "AT THE NECK, the cloth faded and thick with dust. Dry earth, a mattock blade resting at "
      + "the edge of frame, deep shadow under the floor above.",
    u: ["မြေအိုးတစ်လုံး။", "လက်တစ်တောင်လောက်မြင့်ပြီး အဖုံးကို အဝတ်နီနဲ့ တင်းတင်းစည်းထားတယ်။",
      "အိုးကို မြှောက်ကြည့်လိုက်တော့ တော်တော်လေးတယ်။"] },

  { t: "Don't Touch That", c: [[1, "stinger"]], l: "အိမ်ဟောင်း", k: "win", tm: "day",
    w: ["ကိုတင်ဝင်း"],
    g: "ကိုတင်ဝင်းက — “ဟေ့ကောင်… အဲဒါ မထိနဲ့”",
    p: "Close on Ko Tin Win standing in the yard in hard sun, ⚠️ ONE ARM HALF RAISED TOWARDS "
      + "CAMERA WITH THE PALM OUT IN A STOP, his mouth open on a word. ⚠️ HIS EYES ARE NOT ON THE "
      + "LENS BUT ON SOMETHING LOW AND CLOSE TO IT. Towel round his head, open work shirt, thanaka "
      + "smeared rough on both cheeks. The dug ground and the house posts behind him out of focus.",
    u: ["အတူလုပ်နေတဲ့ ကိုတင်ဝင်းက မြင်တာနဲ့—", "“ဟေ့ကောင်… အဲဒါ မထိနဲ့”", "လို့ ပြောတယ်။",
      "“ဘာဖြစ်လို့လဲ?”"] },

  { t: "There Was an O-Saung in This House", l: "အိမ်ဟောင်း", k: "yard", tm: "day",
    w: ["အိမ်ဟောင်း", "ကိုတင်ဝင်း"],
    g: "“ဒီအိမ်မှာ အရင်က အိုးစောင့်ရှိတယ်လို့ ပြောကြတယ်”",
    p: "In the yard at chest height in hard sun, ⚠️ KO TIN WIN STANDING AT THE EDGE OF FRAME WITH "
      + "HIS BACK HALF TO CAMERA AND HIS FACE TURNED UP TOWARDS THE HALF-STRIPPED HOUSE. ⚠️ THE "
      + "EMPTY HOUSE FILLS THE REST OF THE PICTURE, grey and open to the sky. Short hard shadows "
      + "on bleached ground, dust hanging in the light. ⚠️ THERE IS NOBODY ELSE ANYWHERE IN FRAME.",
    u: ["“ဒီအိမ်မှာ အရင်က အိုးစောင့်ရှိတယ်လို့ ပြောကြတယ်”", "ကျွန်တော် ရယ်လိုက်တယ်။",
      "“အိုးစောင့်ဆိုတာ ဘာလဲဗျ?”"] },

  { t: "Feed It and You Get What You Want", l: "အိမ်ဟောင်း", k: "ak", tm: "day", w: ["အောင်ကျော်"],
    g: "“အိုးထဲမှာ သရဲမတစ်ကောင် ရှိတယ်တဲ့။ သူ့ကို ကျွေးမွေးရင် လိုချင်တာရတယ်ဆိုပဲ”",
    p: "Close on Aung Kyaw in the yard in hard sun, ⚠️ HIS HEAD TIPPED BACK A LITTLE AND ONE SIDE "
      + "OF HIS MOUTH PULLED UP — somebody being told a story he has already decided not to "
      + "believe. ⚠️ HIS EYES ARE ON SOMETHING OUT OF FRAME TO ONE SIDE. Dust on his forearms and "
      + "across his shirt, sweat at the hairline. The bleached yard behind him out of focus.",
    u: ["ကိုတင်ဝင်းက—", "“အိုးထဲမှာ သရဲမတစ်ကောင် ရှိတယ်တဲ့။ သူ့ကို ကျွေးမွေးရင် လိုချင်တာရတယ်ဆိုပဲ”",
      "လို့ ပြောတယ်။", "ကျွန်တော်ကတော့ မယုံဘူး။",
      "ဒါပေမယ့် အိုးက ရှေးဟောင်းပစ္စည်းလို ဖြစ်နေတော့ အိမ်ကို ယူလာခဲ့တယ်။"] },

  { t: "I Untied the Red Cloth", c: [[1, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "hands", tm: "bulb",
    pot: true, w: ["အိုး", "အောင်ကျော်"],
    g: "အဲဒီညမှာပဲ အိုးကို သန့်ရှင်းရေးလုပ်ရင်း အဝတ်နီကို ဖြည်လိုက်မိတယ်။",
    p: "Close in on two working hands at the neck of the clay pot under one bare bulb, ⚠️ THE "
      + "FINGERS OF BOTH HANDS WORKING THE KNOT OF THE RED CORD LOOSE, one loop already pulled free "
      + "and hanging. ⚠️ THE REST OF THE BODY IS OUT OF FRAME. Dust in the creases of the knuckles, "
      + "a damp rag lying on the earth floor beside the foot of the pot. Warm bulb light raking "
      + "across the dry clay.",
    u: ["အဲဒီညမှာပဲ အိုးကို သန့်ရှင်းရေးလုပ်ရင်း အဝတ်နီကို ဖြည်လိုက်မိတယ်။",
      "အဖုံးကို ဖွင့်ကြည့်တော့ အထဲမှာ ဘာမှမရှိဘူး။",
      "အိုးအောက်ခြေမှာ ဆံပင်ရှည်ရှည်တွေ ကပ်နေတယ်။"] },

  { t: "What Do You Want", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "lid", tm: "bulb",
    pot: true, w: ["အိုး"],
    g: "⚠️ **အိုးထဲကနေ မိန်းမအသံတစ်သံ — “ဘာလိုချင်လဲ…”**",
    p: "Straight down into the open mouth of the clay pot under one bare bulb, the rim and the "
      + "chip in it sharp across the frame. ⚠️ THE INSIDE IS EMPTY AND FALLS AWAY INTO FLAT "
      + "BLACKNESS THAT THE LIGHT DOES NOT REACH. ⚠️ ROUND THE INSIDE OF THE BOTTOM, LONG BLACK "
      + "HAIRS ARE STUCK FLAT TO THE CLAY IN A SLOW CURVE, dry and dull, caught at the very edge of "
      + "the light. The lid lying face up on the earth beside it.",
    u: ["အနံ့ကလည်း ပုပ်သိုးသိုး။", "ကျွန်တော် အဖုံးပြန်ပိတ်မယ်လုပ်တုန်း—",
      "အိုးထဲကနေ မိန်းမအသံတစ်သံ ကြားလိုက်ရတယ်။"] },

  { t: "I Dropped It", l: "ကျွန်တော့်အခန်း", k: "room", tm: "bulb", pot: true,
    w: ["ကျွန်တော့်အခန်း", "အိုး"],
    g: "“ဘာလိုချင်လဲ…” — ကျွန်တော် လန့်ပြီး အိုးကို လွှတ်ချလိုက်တယ်။ အိုးက မကွဲဘူး။",
    p: "The small room from the corner at seated height under one bare bulb, ⚠️ THE CLAY POT LYING "
      + "ON ITS SIDE ON THE PACKED EARTH IN THE MIDDLE OF THE FLOOR, unbroken, the lid come off and "
      + "settled flat a short way from it. ⚠️ THE RED CORD IS IN A LOOSE COIL NEARBY. The plank bed "
      + "and the knotted mosquito net behind, the shutter black. ⚠️ THE ROOM IS EMPTY OF PEOPLE "
      + "AND NOTHING ELSE IN IT HAS MOVED.",
    u: ["“ဘာလိုချင်လဲ…”", "ကျွန်တော် လန့်ပြီး အိုးကို လွှတ်ချလိုက်တယ်။", "အိုးက မကွဲဘူး။",
      "အသံလည်း ထပ်မကြားတော့ဘူး။", "အဲဒီညက အိပ်မက်မက်တာဖြစ်မယ်လို့ပဲ ထင်ခဲ့တယ်။"] },

  /* ── II · ငါးသိန်း ──────────────────────────────────────────────────── */
  { t: "Five Hundred Thousand for Her Medicine", l: "ကျွန်တော့်အခန်း", k: "ak", tm: "bulb",
    w: ["အောင်ကျော်"],
    g: "နောက်နေ့ညမှာ အိုးကို စမ်းကြည့်ချင်စိတ် ပေါ်လာတယ်။ အမေ့ဆေးဖိုးအတွက် ငါးသိန်းလိုနေတယ်။",
    p: "Close on Aung Kyaw sitting cross-legged on the earth floor under one bare bulb, ⚠️ LOOKING "
      + "DOWN AND SLIGHTLY TO ONE SIDE AT SOMETHING LOW AND CLOSE TO CAMERA. ⚠️ HIS MOUTH IS SHUT "
      + "AND HIS JAW IS SET. One hand rests on his knee, the other is flat on the earth beside him. "
      + "Warm bulb light from above, the woven wall dark behind him.",
    u: ["နောက်နေ့ညမှာတော့ အိုးကို စမ်းကြည့်ချင်စိတ် ပေါ်လာတယ်။",
      "အမေ့ဆေးဖိုးအတွက် ပိုက်ဆံငါးသိန်းလောက် လိုနေတယ်။", "အိုးရှေ့မှာ ထိုင်ပြီး—"] },

  { t: "I Asked It Out Loud", l: "ကျွန်တော့်အခန်း", k: "pot", tm: "bulb", pot: true, w: ["အိုး"],
    g: "“ငါ့ကို ပိုက်ဆံငါးသိန်းလောက် ရအောင်လုပ်ပေးပါ” — ဘာမှမဖြစ်ဘူး။",
    p: "The clay pot standing upright on the earth floor under one bare bulb, lid on, the red cord "
      + "coiled beside it. ⚠️ A MAN'S BARE KNEES AND ONE OPEN HAND ARE IN THE BOTTOM CORNER OF "
      + "FRAME, close to the pot and out of focus, the rest of him out of the picture. ⚠️ THE POT "
      + "IS COMPLETELY STILL AND NOTHING ABOUT IT HAS CHANGED. Warm light down one side of the "
      + "belly, the room black past it.",
    u: ["“ငါ့ကို ပိုက်ဆံငါးသိန်းလောက် ရအောင်လုပ်ပေးပါ”", "လို့ ပြောလိုက်တယ်။", "ဘာမှမဖြစ်ဘူး။",
      "ကျွန်တော်လည်း ကိုယ့်ကိုယ်ကို ရယ်ပြီး အိပ်ရာဝင်လိုက်တယ်။"] },

  { t: "U San Mya's Son at My Door", l: "ကျွန်တော့်အခန်း", k: "son", tm: "day", w: ["သားကြီး"],
    g: "နောက်နေ့မနက်မှာ ဦးစံမြရဲ့ သားကြီး ရောက်လာတယ်။",
    p: "Close on the eldest son standing outside in flat morning daylight, ⚠️ LOOKING STRAIGHT AT "
      + "THE LENS AND SPEAKING, the shoulder bag strap across his chest. Clean white collared "
      + "shirt, a good dark longyi, hair combed flat, a small moustache. ⚠️ HIS EXPRESSION IS "
      + "GUARDED AND BUSINESSLIKE. A bamboo fence and bleached ground out of focus behind him.",
    u: ["ဒါပေမယ့် နောက်နေ့မနက်မှာ—", "ကျွန်တော့်အိမ်ရှေ့ကို ဦးစံမြရဲ့ သားကြီး ရောက်လာတယ်။",
      "“အောင်ကျော်… မနေ့က အိမ်ဖျက်တုန်းက ငါ့အဖေ့သေတ္တာဟောင်း တွေ့သေးလား?”", "“မတွေ့ပါဘူး”"] },

  { t: "Find It and I'll Pay You Five Hundred Thousand", c: [[1, "stinger"]], l: "ကျွန်တော့်အခန်း",
    k: "ak", tm: "day", w: ["အောင်ကျော်"],
    g: "⚠️ “ရှာပေးနိုင်ရင် ငါးသိန်းပေးမယ်” — မနေ့ညက တောင်းခဲ့တဲ့ ပမာဏအတိအကျ။",
    p: "Close on Aung Kyaw in flat morning daylight, ⚠️ HIS FACE TOWARDS CAMERA AND HIS EYES WIDE "
      + "AND FIXED, the pupils large. ⚠️ HIS LIPS ARE PARTED AND HIS BREATH IS HELD. One hand has "
      + "come up to the doorpost at the edge of frame and is gripping it. Dust on his shirt from "
      + "the day before. The bright yard behind him blown out and soft.",
    u: ["သူက ခေါင်းညိတ်ပြီး—",
      "“အိမ်အောက်မှာ ပိုက်ဆံဟောင်းတွေ မြှုပ်ထားတယ်လို့ အဖေပြောဖူးတယ်။ ရှာပေးနိုင်ရင် ငါးသိန်းပေးမယ်”",
      "လို့ ပြောတယ်။", "ကျွန်တော် ရင်ထဲ တုန်သွားတယ်။", "ငါးသိန်း။",
      "မနေ့ညက ကျွန်တော် တောင်းခဲ့တဲ့ ပမာဏအတိအကျ။"] },

  { t: "An Iron Box", l: "အိမ်ဟောင်း", k: "insert", tm: "dusk", w: ["သံသေတ္တာ"],
    g: "ညနေစောင်းတော့ သံသေတ္တာတစ်လုံး တွေ့တယ်။",
    p: "Straight down onto the rusted iron strongbox resting in the dug earth in low orange "
      + "late-afternoon light, the lid thrown back. ⚠️ INSIDE IT, A THICK PACK OF OLD BANKNOTES "
      + "GONE SOFT AND BROWN AT THE EDGES, and resting flat on top of them ONE PLAIN GOLD RING. "
      + "⚠️ CAKED PALE EARTH STILL ON THE OUTSIDE OF THE BOX AND IN THE HINGES. Long shadows across "
      + "the trench, no sparkle and no glow anywhere.",
    u: ["အဲဒီနေ့မှာပဲ အိမ်ဟောင်းကို ပြန်သွားပြီး တူးရှာကြတယ်။", "ညနေစောင်းတော့ သံသေတ္တာတစ်လုံး တွေ့တယ်။",
      "အထဲမှာ ငွေဟောင်းတွေနဲ့ ရွှေလက်စွပ်တစ်ကွင်း ရှိနေတယ်။"] },

  { t: "He Paid Me", l: "ကျွန်တော့်အခန်း", k: "pot", tm: "bulb", pot: true, w: ["အိုး"],
    g: "ဦးစံမြရဲ့သားက ကတိအတိုင်း ငါးသိန်းပေးတယ်။ အဲဒီညမှာ အိုးရှေ့ပြန်ထိုင်မိတယ်။",
    p: "The clay pot upright on the earth floor under one bare bulb, lid on, filling most of the "
      + "frame. ⚠️ A SMALL FOLDED PACK OF BANKNOTES IS LYING ON THE EARTH DIRECTLY IN FRONT OF THE "
      + "POT, square to it and close. ⚠️ A MAN'S CROSSED BARE FEET ARE IN THE BOTTOM OF FRAME, out "
      + "of focus. Warm bulb light across the clay and across the notes. ⚠️ THE POT HAS NOT MOVED.",
    u: ["ဦးစံမြရဲ့သားက ကတိအတိုင်း ကျွန်တော့်ကို ငါးသိန်းပေးတယ်။",
      "အဲဒီညမှာ ကျွန်တော် အိုးရှေ့ပြန်ထိုင်မိတယ်။", "အိုးထဲကနေ မိန်းမအသံ ပြန်ကြားရတယ်။"] },

  { t: "You Got It, Didn't You", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "ak", tm: "bulb",
    w: ["အောင်ကျော်"],
    g: "⚠️ **“ရပြီမဟုတ်လား…”**",
    p: "Close on Aung Kyaw sitting on the earth floor under one bare bulb, ⚠️ HIS FACE TURNED DOWN "
      + "TOWARDS SOMETHING LOW AND OUT OF FRAME AND HIS EYES WIDE OPEN ON IT. ⚠️ THE SKIN OF HIS "
      + "FOREARMS AND THE SIDE OF HIS NECK HAS COME UP IN GOOSEFLESH, fine and raised in the raking "
      + "light. His shoulders are drawn up and his hands are flat on his knees. The dark room "
      + "behind him.",
    u: ["“ရပြီမဟုတ်လား…”", "ကျွန်တော် ကြက်သီးထသွားတယ်။", "ပြီးတော့ အသံက ဆက်ပြောတယ်။"] },

  /* ── III · နောက်တစ်ခု ───────────────────────────────────────────────── */
  { t: "Another One", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "lid", tm: "bulb", pot: true,
    w: ["အိုး"],
    g: "⚠️ **“နောက်တစ်ခု…”**",
    p: "Straight down onto the closed clay lid of the pot under one bare bulb, the rim and the "
      + "chip in it filling the frame. ⚠️ THE LID IS SEATED SQUARE AND FLAT AND THERE IS A THIN "
      + "BLACK LINE OF SHADOW ALL ROUND WHERE IT MEETS THE RIM. ⚠️ NOTHING IS COMING OUT OF IT AND "
      + "NOTHING IS MOVING. Dry clay, fine dust in the grain, warm light from directly above and "
      + "the floor black past the foot.",
    u: ["“နောက်တစ်ခု…”", "အဲဒီကစပြီး အိုးကို ကျွန်တော် မကြောက်တော့ဘူး။",
      "တစ်ခါတလေ လိုချင်တာတွေကို အိုးရှေ့မှာ ပြောတယ်။"] },

  { t: "I Asked for Work", l: "ကျွန်တော့်အခန်း", k: "ak", tm: "day", w: ["အောင်ကျော်"],
    g: "အလုပ်ကောင်းကောင်းရချင်တယ်လို့ ပြောမိတယ်။ သုံးရက်အကြာမှာ အလုပ်ရတယ်။",
    p: "Close on Aung Kyaw outside in flat daylight, ⚠️ LOOKING OFF TO ONE SIDE PAST CAMERA WITH "
      + "HIS CHIN UP, the first easy expression he has had. A clean shirt, his hair wet and combed "
      + "back. ⚠️ HIS MOUTH IS CLOSED AND THE CORNERS OF IT ARE SLIGHTLY LIFTED. Bright bleached "
      + "ground and a bamboo fence out of focus behind him.",
    u: ["တစ်နေ့တော့ အလုပ်ကောင်းကောင်းရချင်တယ်လို့ ပြောမိတယ်။",
      "သုံးရက်အကြာမှာ မြို့က ဆောက်လုပ်ရေးလုပ်ငန်းတစ်ခုမှာ အလုပ်ရတယ်။",
      "ဒါပေမယ့် အဲဒီအလုပ်ကို မူလက ရထားတဲ့လူက ရုတ်တရက် မတော်တဆမှုဖြစ်လို့ မလာနိုင်တော့တာ။"] },

  { t: "My Mother Saw the Pot", l: "ကျွန်တော့်အခန်း", k: "mum", tm: "day", w: ["အမေ"],
    g: "အမေက အခန်းထဲက အိုးကို မြင်ပြီး — “သား… အဲဒါ ဘယ်ကယူလာတာလဲ?”",
    p: "Close on Mother standing just inside the doorway in flat daylight, ⚠️ HER FACE TURNED DOWN "
      + "AND TO ONE SIDE TOWARDS SOMETHING LOW AND OUT OF FRAME. ⚠️ SHE HAS STOPPED WALKING AND HER "
      + "WEIGHT IS ALL ON HER RIGHT LEG, the left foot turned slightly out and barely touching. "
      + "Grey-streaked hair in a tight knot, thanaka in two plain patches. The dim room behind her "
      + "out of focus.",
    u: ["အဲဒီအချိန်ကတော့ တိုက်ဆိုင်တာလို့ပဲ ထင်ခဲ့တယ်။", "အမေကတော့ ကျွန်တော့်အခန်းထဲက အိုးကို မြင်ပြီး—",
      "“သား… အဲဒါ ဘယ်ကယူလာတာလဲ?”", "လို့ မေးတယ်။"] },

  { t: "Her Face Changed", l: "ကျွန်တော့်အခန်း", k: "mum", tm: "day", w: ["အမေ"],
    g: "ကျွန်တော် ပြောပြလိုက်တော့ အမေ့မျက်နှာ ပျက်သွားတယ်။ “ဦးစံမြအိမ်ကဟုတ်လား?”",
    p: "Close on Mother in flat daylight, ⚠️ LOOKING STRAIGHT AT THE LENS WITH HER EYES WIDE AND "
      + "HER MOUTH SLIGHTLY OPEN. ⚠️ THE COLOUR HAS GONE OUT OF HER FACE AND HER LIPS HAVE PRESSED "
      + "TOGETHER AT THE CORNERS. One hand has come up and closed on the cloth at her own chest. "
      + "⚠️ SHE IS STILL ENTIRELY HERSELF AND ENTIRELY ALIVE. The dim room out of focus behind her.",
    u: ["ကျွန်တော် ပြောပြလိုက်တော့ အမေ့မျက်နှာ ပျက်သွားတယ်။", "“ဦးစံမြအိမ်ကဟုတ်လား?”",
      "“ဟုတ်တယ် အမေ”"] },

  { t: "Send It Back, Son", l: "ကျွန်တော့်အခန်း", k: "room", tm: "day",
    w: ["ကျွန်တော့်အခန်း", "အမေ"],
    g: "အမေက အိုးအနားတောင် မကပ်ဘူး။ “အဲဒီအိုးကို ပြန်ပို့လိုက်သား”",
    p: "The room from the corner at seated height in flat daylight, ⚠️ THE CLAY POT UPRIGHT ON THE "
      + "EARTH FLOOR NEAR THE MIDDLE AND MOTHER STANDING WELL BACK AGAINST THE FAR WALL, as far "
      + "from it as the room allows. ⚠️ HER BODY IS SQUARE TO THE POT AND HER ARMS ARE FOLDED "
      + "ACROSS HERSELF. ⚠️ THE FLOOR BETWEEN THEM IS COMPLETELY BARE. Flat light through the "
      + "shutters, the bed and the knotted net behind.",
    u: ["အမေက အိုးအနားတောင် မကပ်ဘူး။", "“အဲဒီအိုးကို ပြန်ပို့လိုက်သား”", "“ဘာဖြစ်လို့လဲ?”"] },

  { t: "A Woman Once Vanished in That House", c: [[1, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "mum",
    tm: "day", w: ["အမေ"],
    g: "⚠️ “အဲဒီအိမ်မှာ အရင်က မိန်းမတစ်ယောက် ပျောက်ဖူးတယ်” — “ဦးစံမြရဲ့ ဒုတိယမိန်းမ မခင်ညို”",
    p: "Close on Mother in flat daylight, ⚠️ LOOKING STRAIGHT AT THE LENS AND SPEAKING QUIETLY, "
      + "her chin level and her eyes steady. ⚠️ HER FACE IS SET AND VERY TIRED. The lines round her "
      + "mouth deep in the flat light, grey hairs loose at the temple. ⚠️ SHE IS COMPLETELY STILL. "
      + "The dim room behind her soft and out of focus.",
    u: ["အမေက ခဏတိတ်နေပြီး—", "“အဲဒီအိမ်မှာ အရင်က မိန်းမတစ်ယောက် ပျောက်ဖူးတယ်”", "လို့ ပြောတယ်။",
      "“ဘယ်သူလဲ?”", "“ဦးစံမြရဲ့ ဒုတိယမိန်းမ မခင်ညို”"] },

  /* ── IV · မခင်ညို ───────────────────────────────────────────────────── */
  { t: "Ma Khin Nyo", l: "အိမ်ဟောင်း", k: "nyo", tm: "dusk", w: ["မခင်ညို"],
    g: "မခင်ညိုက ရွာကို ရောက်လာတုန်းက အသက်သုံးဆယ်လောက်ပဲ ရှိသေးတယ်။",
    p: "Close on Ma Khin Nyo standing outside in low orange late-afternoon light twenty years ago, "
      + "⚠️ LOOKING STRAIGHT AT THE LENS WITH A CALM UNREMARKABLE EXPRESSION, her mouth closed and "
      + "relaxed. Pale well-made blouse, dark silk htamein, small gold ear studs, hair pinned up "
      + "with a few strands loose. Thanaka in two smooth rounds. ⚠️ SHE IS WARM, HEALTHY AND "
      + "COMPLETELY ALIVE. The timber house soft and out of focus behind her.",
    u: ["မခင်ညိုက ရွာကို ရောက်လာတုန်းက အသက်သုံးဆယ်လောက်ပဲ ရှိသေးတယ်။",
      "ဦးစံမြက သူ့ကို အရမ်းချစ်တယ်လို့ ပြောကြတယ်။",
      "ဒါပေမယ့် မခင်ညို ရောက်လာပြီးနောက် ဦးစံမြက ပိုက်ဆံတွေ တဖြည်းဖြည်း ချမ်းသာလာတယ်။"] },

  { t: "Fields, and a Big House", l: "အိမ်ဟောင်း", k: "house", tm: "dusk", w: ["အိမ်ဟောင်း"],
    g: "လယ်တွေဝယ်တယ်။ အိမ်ကြီးဆောက်တယ်။ ရွာသားတွေက အစီအရင်လုပ်တတ်တဲ့မိန်းမလို့ ထင်ကြတယ်။",
    p: "Wide on the same timber house twenty years ago in low orange light, ⚠️ WHOLE AND NEW AND "
      + "WELL KEPT — the corrugated roof unrusted, the teak posts sound, the bamboo wall panels "
      + "tight and pale, a swept yard with a fence round it. ⚠️ IT IS THE SAME HOUSE AND THE SAME "
      + "SHAPE AS THE RUIN, standing complete. Long shadows across the ground, the tamarind tree "
      + "smaller. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["လယ်တွေဝယ်တယ်။", "အိမ်ကြီးဆောက်တယ်။",
      "ရွာသားတွေက မခင်ညိုကို အစီအရင်လုပ်တတ်တဲ့မိန်းမလို့ ထင်ကြတယ်။",
      "တစ်နေ့မှာတော့ မခင်ညို ပျောက်သွားတယ်။"] },

  { t: "Nobody Ever Saw Her Again", l: "ကျွန်တော့်အခန်း", k: "mum", tm: "day", w: ["အမေ"],
    g: "ဦးစံမြက သူ့မိဘအိမ် ပြန်သွားတာလို့ ပြောတယ်။ ဒါပေမယ့် ဘယ်သူမှ ပြန်မတွေ့တော့ဘူး။",
    p: "Close on Mother in flat daylight, ⚠️ HER EYES DOWN AND OFF TO ONE SIDE, NOT ON THE LENS, "
      + "her mouth closed. ⚠️ ONE HAND IS AT HER OWN THROAT WITH THE FINGERS LOOSELY CURLED. The "
      + "light is flat and does not flatter her; the lines are plain. ⚠️ SHE IS SIMPLY A TIRED "
      + "OLD WOMAN SAYING SOMETHING SHE WOULD RATHER NOT. The dim room out of focus behind her.",
    u: ["ဦးစံမြက သူ့မိဘအိမ် ပြန်သွားတာလို့ ပြောတယ်။", "ဒါပေမယ့် မခင်ညိုကို ဘယ်သူမှ ပြန်မတွေ့တော့ဘူး။",
      "အမေက နောက်ဆုံး ပြောလိုက်တယ်။"] },

  { t: "Screaming from Under the House", c: [[1, "stinger"]], l: "အိမ်ဟောင်း", k: "pit", tm: "dark",
    w: ["အိမ်ဟောင်း"],
    g: "⚠️ **“သူပျောက်သွားတဲ့ညက အိမ်အောက်ကနေ မိန်းမအော်သံတွေ ကြားရတယ်တဲ့…”**",
    p: "Low under the house posts at night, looking along the bare crawl space in almost total "
      + "darkness, ⚠️ ONLY A THIN WASH OF MOONLIGHT REACHING THE NEAREST POSTS AND EVERYTHING "
      + "BEYOND THEM FLAT BLACK. ⚠️ THE PACKED EARTH IS SMOOTH, UNDISTURBED AND COMPLETELY EMPTY. "
      + "⚠️ THERE IS NOTHING AND NOBODY IN THE PICTURE. The floor planks of the house close above "
      + "the lens, dark and solid.",
    u: ["“သူပျောက်သွားတဲ့ညက ဦးစံမြတို့အိမ်အောက်ကနေ မိန်းမအော်သံတွေ ကြားရတယ်တဲ့…”",
      "ကျွန်တော် အိုးကို ပြန်ကြည့်လိုက်တယ်။"] },

  { t: "A Single Black Hair", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "lid", tm: "day",
    pot: true, w: ["အိုး"],
    g: "⚠️ **အိုးအဖုံးအောက်ကနေ — ဆံပင်အနက်ရောင်တစ်ချောင်း ထွက်နေတယ်။**",
    p: "Very close on the join between the clay lid and the rim of the pot in flat daylight, the "
      + "chip in the rim at the edge of frame. ⚠️ ONE SINGLE LONG BLACK HAIR IS CAUGHT UNDER THE "
      + "EDGE OF THE LID AND HANGS DOWN THE OUTSIDE OF THE POT IN A SLOW CURVE, its end resting on "
      + "the earth. ⚠️ THE LID IS OTHERWISE SEATED FLAT AND SHUT. ⚠️ THERE IS EXACTLY ONE HAIR AND "
      + "NOTHING ELSE. Shallow focus, dry clay, flat grey light.",
    u: ["အိုးအဖုံးအောက်ကနေ— ဆံပင်အနက်ရောင်တစ်ချောင်း ထွက်နေတယ်။"] },

  /* ── V · တောက်… တောက်… တောက်… ──────────────────────────────────────── */
  { t: "I Could Not Sleep", l: "ကျွန်တော့်အခန်း", k: "room", tm: "dark",
    w: ["ကျွန်တော့်အခန်း", "အိုး"], pot: true,
    g: "အဲဒီညမှာ ကျွန်တော် မအိပ်နိုင်ဘူး။ ညသန်းခေါင်လောက်မှာ — တောက်… တောက်… တောက်…",
    p: "The room from the corner at seated height at night with the bulb off, ⚠️ ONLY A THIN WASH "
      + "OF MOONLIGHT THROUGH THE SHUTTER SLATS LAYING PALE BARS ACROSS THE EARTH FLOOR. ⚠️ AUNG "
      + "KYAW IS LYING ON THE PLANK BED UNDER THE LET-DOWN MOSQUITO NET WITH HIS EYES OPEN, his "
      + "shape just legible through the mesh. ⚠️ THE CLAY POT STANDS UPRIGHT ON THE FLOOR, LID ON, "
      + "in one of the bars of light. Colour almost gone.",
    u: ["အဲဒီညမှာ ကျွန်တော် မအိပ်နိုင်ဘူး။", "ညသန်းခေါင်လောက်မှာ—", "တောက်… တောက်… တောက်…",
      "အိုးအတွင်းကနေ ခေါက်သံကြားရတယ်။"] },

  { t: "Knocking from Inside", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "pot", tm: "dark",
    pot: true, w: ["အိုး"],
    g: "⚠️ **တောက်… တောက်… — ပြီးတော့ မိန်းမအသံ။ “အောင်ကျော်…”**",
    p: "The clay pot standing upright on the earth floor at night, close and filling the frame, "
      + "⚠️ LIT ONLY BY ONE PALE BAR OF MOONLIGHT FROM THE SHUTTER FALLING ACROSS THE BELLY OF IT "
      + "and the rest of the room flat black. ⚠️ THE LID IS ON, SEATED SQUARE, AND THE POT IS "
      + "ABSOLUTELY STILL. ⚠️ NOTHING IS TOUCHING IT AND NOTHING IS NEAR IT. Dry clay, the chip in "
      + "the rim just catching the light, colour gone.",
    u: ["ကျွန်တော် အိပ်ရာပေါ်က ထထိုင်လိုက်တယ်။", "တောက်… တောက်…", "ပြီးတော့ မိန်းမအသံ။",
      "“အောင်ကျော်…”"] },

  { t: "Ask for Another One", l: "ကျွန်တော့်အခန်း", k: "ak", tm: "dark", w: ["အောင်ကျော်"],
    g: "⚠️ **“နောက်တစ်ခု တောင်းလေ…”** — အသံက တဖြည်းဖြည်း ပိုကျယ်လာတယ်။",
    p: "Close on Aung Kyaw sitting up on the plank bed at night, ⚠️ HIS FACE LIT ONLY BY THIN BARS "
      + "OF MOONLIGHT THROUGH THE SHUTTER, one across his eyes and one across his mouth, the rest "
      + "of him in black. ⚠️ HIS EYES ARE OPEN AND TURNED DOWN TOWARDS THE FLOOR OUT OF FRAME, HIS "
      + "JAW CLAMPED SHUT. The pushed-back mosquito net hanging at the edge of frame. Colour almost "
      + "gone.",
    u: ["ကျွန်တော် မဖြေဘူး။", "“နောက်တစ်ခု တောင်းလေ…”",
      "အသံက အိုးထဲကနေ တဖြည်းဖြည်း ပိုကျယ်လာတယ်။",
      "ကျွန်တော် အိပ်ရာထပြီး အိုးကို အဝတ်နဲ့ဖုံးလိုက်တယ်။"] },

  { t: "Fingers Under the Cloth", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "pot",
    tm: "dark", pot: true, partial: true, w: ["အိုး"],
    g: "⚠️ **အဝတ်အောက်ကနေ လက်ချောင်းတွေ ထိုးထွက်လာတယ်။**",
    p: "The clay pot on the earth floor at night with a plain cloth thrown over the top of it, one "
      + "bar of moonlight across it. ⚠️ FROM UNDER THE LOWER EDGE OF THE CLOTH, FOUR SLENDER "
      + "FINGERS HAVE COME OUT AND ARE CURLED OVER THE RIM — ⚠️ VERY PALE, BLOODLESS AND SMOOTH, "
      + "THE NAILS LONG AND UNBROKEN. ⚠️ THE SKIN OF THE FINGERS IS WHOLE AND UNMARKED. ⚠️ NOTHING "
      + "ELSE IS VISIBLE UNDER THE CLOTH — no arm, no wrist, no shape behind it.",
    u: ["အဲဒီအချိန်—", "အဝတ်အောက်ကနေ လက်ချောင်းတွေ ထိုးထွက်လာတယ်။",
      "လက်ချောင်းတွေက အလွန်ဖြူဖျော့နေပြီး လက်သည်းတွေ ရှည်လျားနေတယ်။", "ကျွန်တော် နောက်ဆုတ်လိုက်တယ်။"] },

  { t: "The Lid Began to Rise", l: "ကျွန်တော့်အခန်း", k: "pot", tm: "dark", pot: true,
    partial: true, w: ["အိုး"],
    g: "အိုးအဖုံးက တဖြည်းဖြည်း မြောက်လာတယ်။ အထဲကနေ — ဆံပင်တွေ အရင်ထွက်လာတယ်။",
    p: "The clay pot on the earth floor at night, close, one bar of moonlight across it. ⚠️ THE "
      + "CLOTH HAS SLID HALF OFF AND THE CLAY LID IS TILTED UP AND RESTING ON ONE EDGE OF THE RIM, "
      + "a black gap open beneath it. ⚠️ OUT OF THAT GAP, A THICK MASS OF LONG BLACK HAIR IS COMING "
      + "AND FALLING DOWN THE OUTSIDE OF THE POT TO THE FLOOR. ⚠️ THERE IS HAIR AND NOTHING ELSE — "
      + "no scalp, no head, no hand, nothing behind it. Colour gone.",
    u: ["အိုးအဖုံးက တဖြည်းဖြည်း မြောက်လာတယ်။", "အထဲကနေ—", "ဆံပင်တွေ အရင်ထွက်လာတယ်။", "ပြီးတော့—",
      "မိန်းမတစ်ယောက်ရဲ့ ဦးခေါင်း။"] },

  { t: "Her Face Is All Hair", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "pot", tm: "dark",
    pot: true, partial: true, w: ["အိုး"],
    g: "⚠️ **မျက်နှာတစ်ခုလုံး ဆံပင်ဖုံးနေတယ်။ လည်ပင်းက အိုးအဝထက် သေးသွားသလို ကွေးညွတ်နေတယ်။**",
    p: "The clay pot on the earth floor at night, one bar of moonlight across it. ⚠️ A WOMAN'S "
      + "HEAD HAS COME UP OUT OF THE MOUTH OF THE POT AND IS HELD ABOVE IT, ⚠️ THE WHOLE FACE "
      + "COMPLETELY COVERED BY THE LONG BLACK HAIR FALLING FORWARD OVER IT so that no feature shows "
      + "at all. ⚠️ THE NECK BELOW IT IS LONG, BENT IN A SLOW CURVE AND NARROWER THAN THE MOUTH OF "
      + "THE POT IT HAS COME THROUGH. ⚠️ NOTHING BELOW THE NECK IS OUT YET.",
    u: ["မျက်နှာတစ်ခုလုံး ဆံပင်ဖုံးနေတယ်။", "လည်ပင်းက အိုးအဝထက် သေးသွားသလို ကွေးညွတ်နေတယ်။",
      "သူ့ကိုယ်က အိုးထဲကနေ ဖြည်းဖြည်း ထွက်လာတယ်။"] },

  /* ── VI · အမေ့အသံနဲ့ တစ်ပုံစံတည်း ───────────────────────────────────── */
  { t: "I Ran to My Mother's Room", l: "အမေ့အခန်း", k: "door", tm: "dark", w: ["အမေ့အခန်း"],
    g: "ကျွန်တော် အော်ပြီး ပြေးထွက်ပြီး အမေ့အခန်းထဲဝင်ပြီး တံခါးပိတ်လိုက်တယ်။",
    p: "Square on the closed plank door from inside Mother's room at night, the simple wooden latch "
      + "dropped across it. ⚠️ THIN MOONLIGHT THROUGH THE SHUTTER LAYS A FEW PALE BARS ACROSS THE "
      + "PLANKS AND THE EARTH FLOOR IN FRONT OF THEM. ⚠️ THE DOOR IS SHUT AND THE FLOOR BETWEEN "
      + "CAMERA AND IT IS COMPLETELY BARE. ⚠️ NOBODY IS IN THE PICTURE. Colour almost gone.",
    u: ["ကျွန်တော် အော်ပြီး အခန်းအပြင် ပြေးထွက်ခဲ့တယ်။", "အမေ့အခန်းထဲဝင်ပြီး တံခါးပိတ်လိုက်တယ်။",
      "အမေက လန့်နိုးလာတယ်။"] },

  { t: "Footsteps Outside the Door", c: [[1, "stinger"]], l: "အမေ့အခန်း", k: "floor", tm: "dark",
    w: ["အမေ့အခန်း"],
    g: "အခန်းတံခါးအပြင်ကနေ — တရှပ်… တရှပ်… ခြေသံကြားလာတယ်။",
    p: "A few inches above the earth floor of Mother's room at night, level along it towards the "
      + "shut plank door, ⚠️ THE NARROW GAP UNDER THE DOOR RUNNING RIGHT ACROSS THE FRAME AS A "
      + "THIN PALE LINE. ⚠️ THE LINE IS UNBROKEN AND NOTHING IS STANDING IN IT. ⚠️ THE FLOOR ON "
      + "THIS SIDE IS BARE. ⚠️ THERE IS NO SHADOW, NO FOOT AND NO SHAPE ANYWHERE IN THE PICTURE. "
      + "Colour gone, grain heavy.",
    u: ["“ဘာဖြစ်တာလဲသား?”", "ကျွန်တော် ပြန်မဖြေနိုင်သေးခင်—", "အခန်းတံခါးအပြင်ကနေ—",
      "တရှပ်… တရှပ်…", "ခြေသံကြားလာတယ်။"] },

  { t: "Open the Door, Son", c: [[1, "bigstinger"]], l: "အမေ့အခန်း", k: "ak", tm: "dark",
    w: ["အောင်ကျော်"],
    g: "⚠️ **အမေ့အသံနဲ့ တစ်ပုံစံတည်း အသံတစ်သံ — “သား… တံခါးဖွင့်ဦး…”**",
    p: "Close on Aung Kyaw with his back pressed against the plank door at night, ⚠️ HIS FACE LIT "
      + "ONLY BY THIN MOONLIGHT THROUGH THE SHUTTER AND TURNED SHARPLY TO ONE SIDE, his ear towards "
      + "the door behind him. ⚠️ HIS EYES ARE WIDE AND FIXED ACROSS THE ROOM AT SOMETHING OUT OF "
      + "FRAME. ⚠️ BOTH HIS HANDS ARE FLAT ON THE PLANKS BESIDE HIS HIPS. Colour almost gone.",
    u: ["ပြီးတော့—", "အမေ့အသံနဲ့ တစ်ပုံစံတည်း အသံတစ်သံ။", "“သား… တံခါးဖွင့်ဦး…”",
      "ကျွန်တော် အမေ့ကို ကြည့်လိုက်တယ်။"] },

  { t: "My Mother Was Beside Me", l: "အမေ့အခန်း", k: "mroom", tm: "dark",
    w: ["အမေ့အခန်း", "အမေ"],
    g: "⚠️ အမေက ကျွန်တော့်ဘေးမှာ ထိုင်နေတယ်။ အပြင်ကအသံက — “အမေပါသား…”",
    p: "Mother's room from beside the bed at seated height at night, ⚠️ MOTHER SITTING UP ON THE "
      + "EDGE OF THE BED WITH THE BLANKET STILL ACROSS HER LAP, awake, her face turned towards the "
      + "shut door across the room. ⚠️ SHE IS LIT BY THIN BARS OF MOONLIGHT AND SHE IS COMPLETELY "
      + "ORDINARY AND ENTIRELY ALIVE. ⚠️ SHE IS THE ONLY PERSON IN THE PICTURE. ⚠️ THE DOOR BEYOND "
      + "HER IS SHUT AND THE FLOOR IN FRONT OF IT IS BARE.",
    u: ["အမေက ကျွန်တော့်ဘေးမှာ ထိုင်နေတယ်။", "အပြင်ကအသံက ထပ်ပြောတယ်။", "“အမေပါသား…”",
      "ကျွန်တော်တို့နှစ်ယောက် တစ်ယောက်ကိုတစ်ယောက် ဖက်ထားမိတယ်။"] },

  { t: "Until It Was Light", l: "အမေ့အခန်း", k: "door", tm: "dawn", w: ["အမေ့အခန်း"],
    g: "အဲဒီညက မိုးလင်းတဲ့အထိ တံခါးမဖွင့်ခဲ့ဘူး။",
    p: "Square on the same closed plank door from inside Mother's room in thin colourless first "
      + "light, the latch still dropped. ⚠️ FLAT GREY DAWN IS COMING THROUGH THE SHUTTER AND THE "
      + "GAP UNDER THE DOOR IS NOW A WIDE PALE BAND. ⚠️ THE DOOR IS STILL SHUT AND THE EARTH FLOOR "
      + "IN FRONT OF IT IS BARE AND UNMARKED. ⚠️ NOBODY IS IN THE PICTURE. Everything legible, "
      + "nothing warm anywhere in it.",
    u: ["အဲဒီညက မိုးလင်းတဲ့အထိ တံခါးမဖွင့်ခဲ့ဘူး။",
      "နောက်နေ့မနက်မှာ ကျွန်တော်နဲ့ ကိုတင်ဝင်း အိုးကို ရွာဦးကျောင်းဆီ ယူသွားတယ်။"] },

  /* ── VII · ရွာဦးကျောင်း ─────────────────────────────────────────────── */
  { t: "We Took It to the Monastery", l: "ကျောင်း", k: "monk", tm: "day", w: ["ဆရာတော်"],
    g: "ဆရာတော်က အိုးကို ကြည့်ပြီး — “ဒီဟာ ဘယ်ကရတာလဲ?”",
    p: "Close on the sayadaw seated on the low dais in flat daylight, ⚠️ HIS EYES TURNED DOWN AND "
      + "TO ONE SIDE TOWARDS SOMETHING LOW AND OUT OF FRAME, his face completely calm. Dark "
      + "maroon-brown robes, one shoulder bare, head and eyebrows shaved, the lines very deep. ⚠️ "
      + "HIS HANDS STAY FOLDED IN HIS LAP. ⚠️ NO HALO, NO GLOW, NOTHING MYSTICAL. The swept teak "
      + "floor and a heavy post out of focus behind him.",
    u: ["ဆရာတော်က အိုးကို ကြည့်ပြီး—", "“ဒီဟာ ဘယ်ကရတာလဲ?”", "လို့ မေးတယ်။",
      "ကျွန်တော် အကြောင်းစုံ ပြောပြလိုက်တယ်။"] },

  { t: "Bring Me U San Mya's Eldest Son", c: [[1, "stinger"]], l: "ကျောင်း", k: "hall", tm: "day",
    pot: true, w: ["ကျောင်း", "အိုး"],
    g: "ဆရာတော်က အိုးကို လက်နဲ့မထိဘဲ — “ဦးစံမြရဲ့ သားကြီးကို ခေါ်လာခဲ့”",
    p: "The monastery hall at seated height in flat daylight, wide enough to hold the space. ⚠️ "
      + "THE CLAY POT IS STANDING ALONE ON THE BARE POLISHED TEAK FLOOR IN THE MIDDLE OF THE ROOM, "
      + "lid on, the red cord coiled beside it. ⚠️ THE SAYADAW IS SEATED ON THE DAIS WELL BEYOND "
      + "IT AND HIS HANDS ARE IN HIS LAP. ⚠️ THE FLOOR ALL ROUND THE POT IS COMPLETELY EMPTY. Flat "
      + "daylight through the open side shutters, high shadowed rafters above.",
    u: ["ဆရာတော်က အိုးကို လက်နဲ့မထိဘဲ—", "“ဦးစံမြရဲ့ သားကြီးကို ခေါ်လာခဲ့”", "လို့ ပြောတယ်။",
      "ဦးစံမြရဲ့သား ရောက်လာတော့ အိုးကို မြင်တာနဲ့ မျက်နှာပျက်သွားတယ်။"] },

  { t: "I'll Tell You What I Know", l: "ကျောင်း", k: "son", tm: "day", w: ["သားကြီး"],
    g: "“မင်းအဖေ ဒီအိုးကို ဘာလို့ မြှုပ်ခဲ့တာလဲ?” — “ကျွန်တော် သိသလောက် ပြောပါ့မယ်ဘုရား…”",
    p: "Close on the eldest son kneeling on the teak floor in flat daylight, ⚠️ HIS HEAD BOWED AND "
      + "HIS EYES DOWN, NOT ON THE LENS. ⚠️ HIS HANDS ARE PRESSED TOGETHER IN FRONT OF HIS CHEST "
      + "AND THE KNUCKLES ARE PALE. The clean white shirt creased at the shoulders, sweat at the "
      + "temple, the small moustache. ⚠️ HIS MOUTH IS OPEN ON THE BEGINNING OF A SENTENCE. The "
      + "bright hall out of focus behind him.",
    u: ["ဆရာတော်က—", "“မင်းအဖေ ဒီအိုးကို ဘာလို့ မြှုပ်ခဲ့တာလဲ?”", "လို့ မေးတယ်။",
      "သူက အစမှာ မဖြေဘူး။", "နောက်ဆုံးမှာတော့—", "“ကျွန်တော် သိသလောက် ပြောပါ့မယ်ဘုရား…”",
      "ဆိုပြီး စပြောတယ်။"] },

  /* ── VIII · သွားတစ်ချောင်းမှ မရှိဘူး ────────────────────────────────── */
  { t: "He Truly Loved Her", l: "မီးဖိုချောင်", k: "nyo", tm: "lamp", w: ["မခင်ညို"],
    g: "ဦးစံမြက မခင်ညိုကို တကယ်ချစ်ခဲ့တယ်။ ဒါပေမယ့် အိုးကို မခင်ညိုကပဲ စသိခဲ့တာ။",
    p: "Close on Ma Khin Nyo in the kitchen twenty years ago by one low kerosene flame, ⚠️ HER "
      + "FACE TURNED DOWN TOWARDS SOMETHING LOW AND OUT OF FRAME AND LIT WARM ORANGE FROM BELOW AND "
      + "ONE SIDE, the other side of her face in heavy black. ⚠️ HER EXPRESSION IS CALM AND "
      + "ATTENTIVE AND HER MOUTH IS CLOSED. Hair pinned up, thanaka in two smooth rounds, the pale "
      + "blouse warm in the flame. ⚠️ SHE IS COMPLETELY ORDINARY AND ALIVE.",
    u: ["ဦးစံမြက မခင်ညိုကို တကယ်ချစ်ခဲ့တယ်။",
      "ဒါပေမယ့် သူတို့အိမ်မှာ အိုးတစ်လုံးရှိတယ်ဆိုတာ မခင်ညိုကပဲ စသိခဲ့တာ။",
      "မခင်ညိုက အိုးထဲကအသံကို ကြားရတယ်။"] },

  { t: "She Fed It Wishes", l: "မီးဖိုချောင်", k: "pot", tm: "lamp", pot: true, w: ["အိုး"],
    g: "သူ့ကို ဆုတောင်းတွေ ဖြည့်ပေးတယ်။ ဦးစံမြ ချမ်းသာလာတာလည်း အဲဒီအိုးကြောင့်။",
    p: "The clay pot standing on the plank floor of the kitchen twenty years ago, close, lit by "
      + "one low kerosene flame from one side. ⚠️ THE CLAY IS CLEAN AND UNWEATHERED AND THERE IS NO "
      + "EARTH ON IT — the chip in the rim already there. ⚠️ THE LID IS LYING FACE UP ON THE PLANKS "
      + "BESIDE IT AND THE MOUTH IS OPEN AND BLACK. ⚠️ A SMALL ENAMEL DISH OF RICE SITS ON THE "
      + "FLOOR DIRECTLY IN FRONT OF THE POT. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["သူ့ကို ဆုတောင်းတွေ ဖြည့်ပေးတယ်။", "ဦးစံမြ ချမ်းသာလာတာလည်း အဲဒီအိုးကြောင့်။",
      "ဒါပေမယ့် တစ်နေ့မှာ မခင်ညိုက အိုးကို မသုံးတော့ဘူးလို့ ပြောတယ်။"] },

  { t: "A Woman Walking Every Night", l: "မီးဖိုချောင်", k: "kitchen", tm: "lamp",
    w: ["မီးဖိုချောင်"],
    g: "အိမ်ထဲမှာ ညတိုင်း မိန်းမတစ်ယောက် လမ်းလျှောက်သံ ကြားလာတယ်။",
    p: "The kitchen from the low doorway at standing height twenty years ago, lit by one hurricane "
      + "lamp turned low on a nail. ⚠️ THE ROOM IS EMPTY — the clay hearth cold, the blackened pots "
      + "on the shelf, the water jar with its dipper, the strings of dried chilli. ⚠️ THE PLANK "
      + "FLOOR IS BARE ALL THE WAY ACROSS. ⚠️ THERE IS NOBODY IN THE PICTURE. Deep warm orange "
      + "close to the lamp, heavy black in the far corners and through the inner doorway.",
    u: ["အဲဒီနောက်—", "အိမ်ထဲမှာ ညတိုင်း မိန်းမတစ်ယောက် လမ်းလျှောက်သံ ကြားလာတယ်။",
      "မခင်ညို အိပ်နေတုန်းမှာတောင် သူ့အသံနဲ့ တစ်ယောက်ယောက်က မီးဖိုချောင်ထဲမှာ စကားပြောနေတတ်တယ်။",
      "တစ်ညမှာ ဦးစံမြက မီးဖိုချောင်ကို ထွက်ကြည့်တယ်။"] },

  { t: "Someone with Her Face", c: [[1, "stinger"]], l: "မီးဖိုချောင်", k: "kitchen", tm: "lamp",
    copy: true, w: ["မီးဖိုချောင်", "မခင်ညို", "အိုး"], pot: true,
    g: "⚠️ မခင်ညိုနဲ့ တစ်ပုံစံတည်း မိန်းမတစ်ယောက်က အိုးရှေ့မှာ ထိုင်နေတယ်။",
    p: "The kitchen from the low doorway twenty years ago, lit by one hurricane lamp. ⚠️ A WOMAN "
      + "IS SITTING ON THE PLANK FLOOR WITH HER BACK TO CAMERA, FACING THE CLAY POT, her legs "
      + "folded to one side and her hands in her lap. ⚠️ THE HAIR PINNED UP AT THE BACK, THE PALE "
      + "BLOUSE AND THE DARK SILK HTAMEIN ARE MA KHIN NYO'S, EXACTLY. ⚠️ NO PART OF HER FACE IS "
      + "VISIBLE. ⚠️ THE POT IN FRONT OF HER HAS ITS LID OFF. Warm orange, black beyond.",
    u: ["မခင်ညိုနဲ့ တစ်ပုံစံတည်း မိန်းမတစ်ယောက်က—", "အိုးရှေ့မှာ ထိုင်နေတယ်။",
      "ဦးစံမြက အဲဒါ သူ့မိန်းမလို့ထင်ပြီး လှမ်းခေါ်လိုက်တယ်။", "မိန်းမက နောက်လှည့်လာတယ်။"] },

  { t: "Not One Tooth", c: [[1, "bigstinger"]], l: "မီးဖိုချောင်", k: "nyo", tm: "lamp",
    copy: true, gums: true, w: ["မခင်ညို"],
    g: "⚠️ **မျက်နှာက မခင်ညိုမျက်နှာ။ ဒါပေမယ့် — ပါးစပ်ထဲမှာ သွားတစ်ချောင်းမှ မရှိဘူး။**",
    p: "Close on the woman turned round towards camera in the kitchen twenty years ago, lit warm "
      + "orange from one side by the lamp. ⚠️ THE FACE IS MA KHIN NYO'S EXACTLY — the same eyes, "
      + "the same thanaka, warm skin, ordinary colour. ⚠️ HER MOUTH IS OPEN IN A WIDE EASY SMILE "
      + "AND THERE IS NOT ONE TOOTH IN IT. ⚠️ EVERYTHING ELSE ABOUT HER IS COMPLETELY NORMAL AND "
      + "CALM, and she is looking straight at the lens.",
    u: ["မျက်နှာက မခင်ညိုမျက်နှာ။", "ဒါပေမယ့်—", "ပါးစပ်ထဲမှာ သွားတစ်ချောင်းမှ မရှိဘူး။",
      "သူက ပြုံးပြီး—", "“သူ အိပ်နေပြီ…”"] },

  { t: "She's Asleep", c: [[1, "bigstinger"]], l: "မီးဖိုချောင်", k: "mouth", tm: "lamp",
    gums: true, w: ["မခင်ညို"],
    g: "⚠️ **ဦးစံမြ ပြန်ပြေးတော့ မခင်ညို အိပ်နေတယ်။ ပါးစပ်ကို ဖွင့်ကြည့်တော့ — သွားတွေ မရှိတော့ဘူး။**",
    p: "Very close on the lower half of a sleeping woman's face lying back on a pillow twenty "
      + "years ago, lit warm from one side by a lamp held near. ⚠️ A MAN'S THUMB AND FINGER ARE "
      + "HOLDING HER LOWER LIP GENTLY DOWN AND OPEN. ⚠️ THE MOUTH BEHIND IT IS COMPLETELY EMPTY. "
      + "⚠️ HER SKIN IS WARM, HER CHEEK IS RELAXED AND SHE IS PLAINLY ASLEEP AND BREATHING. "
      + "Shallow focus, the pillow and her loose hair soft at the edges of frame.",
    u: ["လို့ ပြောတယ်။", "ဦးစံမြ အခန်းထဲပြန်ပြေးတော့ မခင်ညိုက အိပ်ရာပေါ်မှာ တကယ်အိပ်နေတယ်။",
      "ဒါပေမယ့် သူ့ပါးစပ်ကို ဖွင့်ကြည့်လိုက်တဲ့အခါ—", "သွားတွေ တစ်ချောင်းမှ မရှိတော့ဘူး။"] },

  { t: "By Morning She Was Gone", l: "အိမ်ဟောင်း", k: "pit", tm: "day", pot: true, w: ["အိုး"],
    g: "နောက်မနက်မှာ မခင်ညို ပျောက်သွားခဲ့တာ။ ဦးစံမြက အိုးကို အဝတ်နီနဲ့စည်းပြီး မြှုပ်ခဲ့တယ်။",
    p: "Low in a freshly dug hole under the house posts twenty years ago in hard daylight, ⚠️ THE "
      + "CLAY POT STANDING UPRIGHT AT THE BOTTOM OF IT WITH THE LID ON AND THE RED CORD CROSSED "
      + "OVER THE TOP AND KNOTTED TIGHT AT THE NECK — the cloth bright and new. ⚠️ LOOSE PALE EARTH "
      + "IS HEAPED ALL ROUND THE RIM OF THE HOLE READY TO GO BACK IN. ⚠️ NOBODY IS IN THE PICTURE. "
      + "Hard shadow under the floor planks above.",
    u: ["နောက်မနက်မှာ မခင်ညို ပျောက်သွားခဲ့တာ။",
      "ဦးစံမြက အိုးကို အဝတ်နီနဲ့စည်းပြီး အိမ်အောက်မှာ မြှုပ်ခဲ့တယ်။",
      "အဲဒီနောက် အိုးထဲကအသံ မကြားရတော့ဘူး။"] },

  /* ── IX · မင်းကိုယ်တိုင် လာယူရမယ် ───────────────────────────────────── */
  { t: "Then What Is in the Pot", c: [[1, "stinger"]], l: "ကျောင်း", k: "ak", tm: "day",
    w: ["အောင်ကျော်"],
    g: "“ဒါဆို အိုးထဲကဟာက မခင်ညို မဟုတ်ဘူးပေါ့?”",
    p: "Close on Aung Kyaw sitting on the teak floor of the hall in flat daylight, ⚠️ LOOKING "
      + "ACROSS AND SLIGHTLY DOWN PAST CAMERA, his mouth open on a question. ⚠️ THE SKIN ON HIS "
      + "FOREARMS HAS COME UP IN GOOSEFLESH, fine and raised in the flat light. One hand is braced "
      + "flat on the polished floor beside him. The bright open side shutters blown out and soft "
      + "behind him.",
    u: ["ကျွန်တော် ကြားလိုက်ရတဲ့အချိန်မှာ ကြက်သီးတွေ ထလာတယ်။",
      "“ဒါဆို အိုးထဲကဟာက မခင်ညို မဟုတ်ဘူးပေါ့?”", "ဦးစံမြရဲ့သားက ခေါင်းခါတယ်။"] },

  { t: "That Thing Took Her", l: "ကျောင်း", k: "lid", tm: "day", pot: true, w: ["အိုး"],
    g: "⚠️ **“မခင်ညိုကို အဲဒီအရာက ယူသွားတာ…”** — အိုးအဖုံးက အနည်းငယ် လှုပ်နေတယ်။",
    p: "Straight down onto the clay lid of the pot on the polished teak floor in flat daylight, "
      + "the rim and the chip filling the frame. ⚠️ THE LID IS SEATED BUT NOT QUITE SQUARE — it has "
      + "shifted a few millimetres off centre and the black line of shadow under one side of it is "
      + "wider than the other. ⚠️ A FINE RING OF DUST ON THE TEAK AROUND THE FOOT SHOWS WHERE THE "
      + "POT WAS STANDING BEFORE. ⚠️ NOTHING IS TOUCHING IT.",
    u: ["“မခင်ညိုကို အဲဒီအရာက ယူသွားတာ…”", "ကျွန်တော် အိုးကို ကြည့်လိုက်တယ်။",
      "အိုးအဖုံးက အနည်းငယ် လှုပ်နေတယ်။"] },

  { t: "Aung Kyaw", c: [[1, "bigstinger"]], l: "ကျောင်း", k: "hall", tm: "day", pot: true,
    w: ["ကျောင်း", "အိုး"],
    g: "⚠️ **အိုးထဲကနေ အသံတစ်သံ ထွက်လာတယ် — “အောင်ကျော်…”**",
    p: "The monastery hall at seated height in flat daylight, the clay pot alone on the bare teak "
      + "floor in the middle of frame with the lid on. ⚠️ FOUR OR FIVE PEOPLE ARE SITTING ON THE "
      + "FLOOR IN A LOOSE RING WELL BACK FROM IT AND EVERY ONE OF THEM HAS TURNED THEIR FACE "
      + "TOWARDS THE POT. ⚠️ NOBODY HAS MOVED ANY CLOSER TO IT AND THE FLOOR AROUND IT IS EMPTY. "
      + "Flat daylight through the open shutters, high shadowed rafters above.",
    u: ["အဲဒီအချိန်—", "အိုးထဲကနေ အသံတစ်သံ ထွက်လာတယ်။", "“အောင်ကျော်…”", "ကျွန်တော် တောင့်သွားတယ်။"] },

  { t: "Everyone Heard It", l: "ကျောင်း", k: "monk", tm: "day", w: ["ဆရာတော်"],
    g: "ဆရာတော်နဲ့ ကျန်တဲ့လူတွေလည်း ကြားလိုက်ရတယ်။ “မင်းအမေ နေကောင်းချင်တယ်မဟုတ်လား…”",
    p: "Close on the sayadaw on the dais in flat daylight, ⚠️ HIS FACE TURNED TOWARDS SOMETHING "
      + "LOW AND OUT OF FRAME AND HIS EYES OPEN AND VERY STEADY ON IT. ⚠️ HIS HANDS HAVE COME "
      + "APART IN HIS LAP AND ARE RESTING FLAT ON HIS KNEES. ⚠️ HIS EXPRESSION HAS NOT CHANGED AT "
      + "ALL, which is the point. The deep lines, the shaved head, the maroon-brown robe. The swept "
      + "hall out of focus behind him.",
    u: ["ဆရာတော်နဲ့ ကျန်တဲ့လူတွေလည်း ကြားလိုက်ရတယ်။", "အသံက ဆက်ပြောတယ်။",
      "“မင်းအမေ နေကောင်းချင်တယ်မဟုတ်လား…”"] },

  { t: "It Knew She Was Ill", l: "ကျောင်း", k: "ak", tm: "day", w: ["အောင်ကျော်"],
    g: "⚠️ အမေ နေမကောင်းဖြစ်နေတာကို အိုးထဲကအရာ သိနေတယ်။ **“ငါ ကုပေးလို့ရတယ်…”**",
    p: "Close on Aung Kyaw on the teak floor in flat daylight, ⚠️ HIS FACE TOWARDS CAMERA AND HIS "
      + "EYES WIDE AND FIXED, not blinking. ⚠️ ALL THE COLOUR HAS GONE OUT OF HIS FACE AND HIS "
      + "LIPS ARE PARTED. ⚠️ ONE HAND HAS CLOSED INTO A FIST ON HIS OWN THIGH. The bright hall "
      + "behind him blown out and soft.",
    u: ["ကျွန်တော် ရင်ထဲ ထိတ်သွားတယ်။", "အမေ နေမကောင်းဖြစ်နေတာကို—", "အိုးထဲကအရာ သိနေတယ်။",
      "“ငါ ကုပေးလို့ရတယ်…”"] },

  { t: "You Must Come and Take It Yourself", c: [[1, "stinger"]], l: "ကျောင်း", k: "pot",
    tm: "day", pot: true, w: ["အိုး"],
    g: "⚠️ **“ဒါပေမယ့် ဒီတစ်ခါ… မင်းကိုယ်တိုင် လာယူရမယ်…”**",
    p: "The clay pot standing alone on the polished teak floor in flat daylight, close and filling "
      + "most of the frame, the lid on. ⚠️ THE OPEN SIDE SHUTTERS THROW A BAND OF FLAT WHITE LIGHT "
      + "ACROSS THE TEAK BEHIND IT. ⚠️ THE POT IS COMPLETELY STILL AND CASTS ONE ORDINARY SHADOW. "
      + "⚠️ NOTHING IS NEAR IT AND NOTHING IS COMING OUT OF IT. Dry clay, the chip in the rim, fine "
      + "dust in the grain.",
    u: ["ကျွန်တော် မဖြေဘူး။", "အသံက ပိုတိုးလာတယ်။", "“ဒါပေမယ့် ဒီတစ်ခါ…”",
      "“မင်းကိုယ်တိုင် လာယူရမယ်…”"] },

  /* ── X · အမေ နေကောင်းသွားပြီ ────────────────────────────────────────── */
  { t: "She Was Ill in Bed", l: "အမေ့အခန်း", k: "mroom", tm: "bulb", w: ["အမေ့အခန်း", "အမေ"],
    g: "အိမ်ပြန်ရောက်တော့ အမေက အိပ်ရာထဲမှာ နေမကောင်းဖြစ်နေတယ်။ ဆေးသောက်ပြီး အိပ်နေတယ်။",
    p: "Mother's room from beside the bed at seated height under one bare bulb, ⚠️ MOTHER LYING "
      + "ASLEEP ON HER BACK UNDER THE THIN PRINTED BLANKET WITH THE MOSQUITO NET KNOTTED BACK AT "
      + "ONE CORNER. ⚠️ HER FACE IS TURNED TO ONE SIDE ON THE PILLOW AND HER MOUTH IS CLOSED. ⚠️ "
      + "SHE IS PLAINLY BREATHING AND COMPLETELY ORDINARY. The water glass, the strip of tablets "
      + "and the torch on the small table beside her. Warm bulb light, the corners dim.",
    u: ["အဲဒီညမှာ ကျွန်တော် အိမ်ပြန်ရောက်တော့ အမေက အိပ်ရာထဲမှာ နေမကောင်းဖြစ်နေတယ်။",
      "ဆေးသောက်ပြီး အိပ်နေတယ်။", "ကျွန်တော် အမေ့ဘေးမှာ ထိုင်နေတုန်း—"] },

  { t: "Footsteps at the Back of the House", c: [[1, "stinger"]], l: "အမေ့အခန်း", k: "floor",
    tm: "bulb", w: ["အမေ့အခန်း"],
    g: "အိမ်နောက်ဖေးကနေ ခြေသံကြားလာတယ် — တရှပ်… တရှပ်…",
    p: "A few inches above the earth floor of Mother's room, level along it towards the shut plank "
      + "door, under one bare bulb. ⚠️ THE GAP UNDER THE DOOR RUNS ACROSS THE FRAME AS A NARROW "
      + "BAND OF BLACK. ⚠️ THE FLOOR ON THIS SIDE IS BARE AND SWEPT AND NOTHING IS STANDING IN IT. "
      + "⚠️ THERE IS NO SHADOW, NO FOOT AND NO SHAPE ANYWHERE IN THE PICTURE. A pair of slippers "
      + "sits squarely against the wall at the edge of frame.",
    u: ["အိမ်နောက်ဖေးကနေ ခြေသံကြားလာတယ်။", "တရှပ်… တရှပ်…", "ကျွန်တော် ရင်ထဲ အေးသွားတယ်။",
      "အိုးကို ကျောင်းမှာ ထားခဲ့ပြီးပြီ။"] },

  { t: "The Pot Is at the Monastery", l: "အမေ့အခန်း", k: "ak", tm: "bulb", w: ["အောင်ကျော်"],
    g: "ဒါဆို — ဘာလို့ ဒီအသံ ပြန်ကြားနေရတာလဲ?",
    p: "Close on Aung Kyaw sitting on the floor beside the bed under one bare bulb, ⚠️ HIS HEAD "
      + "TURNED SHARPLY TOWARDS THE BACK WALL OF THE ROOM, his ear towards it and his eyes "
      + "unfocused. ⚠️ HIS MOUTH IS SLIGHTLY OPEN AND HE HAS STOPPED BREATHING. One hand rests on "
      + "the edge of the bed frame beside him and the fingers have tightened on it. Warm bulb light "
      + "from above, the woven wall dim behind him.",
    u: ["ဒါဆို—", "ဘာလို့ ဒီအသံ ပြန်ကြားနေရတာလဲ?", "အဲဒီအချိန်—",
      "အမေက အိပ်ရာပေါ်ကနေ ဖြည်းဖြည်း ထထိုင်တယ်။", "ကျွန်တော် ဝမ်းသာသွားတယ်။"] },

  { t: "Mother, Are You Well", l: "အမေ့အခန်း", k: "mum", tm: "bulb", copy: true, w: ["အမေ"],
    g: "“အမေ… နေကောင်းပြီလား?” — အမေက ကျွန်တော့်ကို ကြည့်တယ်။ ပြုံးတယ်။",
    p: "Close on Mother sitting up on the bed under one bare bulb, ⚠️ LOOKING STRAIGHT AT THE LENS "
      + "AND SMILING WITH HER MOUTH CLOSED. ⚠️ HER FACE IS EXACTLY HER OWN — the same lines, the "
      + "same thanaka patches, the same grey-streaked knot of hair, warm skin and ordinary colour. "
      + "⚠️ SHE LOOKS WELL, WHICH IS THE PROBLEM. The blanket fallen to her waist, her hands flat on "
      + "it. Warm bulb light, the dim room behind her.",
    u: ["“အမေ… နေကောင်းပြီလား?”", "အမေက ကျွန်တော့်ကို ကြည့်တယ်။", "ပြုံးတယ်။", "ပြီးတော့—",
      "“သား… နောက်တစ်ခု တောင်းလေ…”"] },

  { t: "That Is Not My Mother's Voice", c: [[1, "bigstinger"]], l: "အမေ့အခန်း", k: "ak",
    tm: "bulb", w: ["အောင်ကျော်"],
    g: "⚠️ **အမေ့အသံ မဟုတ်ဘူး။ အိုးထဲက မိန်းမအသံ။**",
    p: "Close on Aung Kyaw under one bare bulb, ⚠️ CAUGHT MID-FLINCH AWAY FROM CAMERA — the head "
      + "pulled back and to one side, the shoulder rising, the body already moving. ⚠️ HIS EYES ARE "
      + "WIDE AND LOCKED ON SOMETHING PAST THE LENS. ⚠️ ONE HAND IS UP AND OPEN AT CHEST HEIGHT. "
      + "Warm bulb light hard across one side of his face, the room black behind him.",
    u: ["လို့ ပြောတယ်။", "ကျွန်တော် ချက်ချင်း နောက်ဆုတ်လိုက်တယ်။", "အမေ့အသံ မဟုတ်ဘူး။",
      "အိုးထဲက မိန်းမအသံ။"] },

  { t: "She Walked Barefoot", l: "အမေ့အခန်း", k: "mroom", tm: "bulb", copy: true,
    w: ["အမေ့အခန်း", "အမေ"],
    g: "အမေက အိပ်ရာက ထလာတယ်။ ခြေဗလာနဲ့ ကြမ်းပြင်ပေါ် လမ်းလျှောက်တယ်။",
    p: "Mother's room from beside the bed at seated height under one bare bulb, ⚠️ MOTHER STANDING "
      + "IN THE MIDDLE OF THE EARTH FLOOR WITH HER BACK HALF TO CAMERA, barefoot, mid-stride, "
      + "walking away towards the door. ⚠️ THE BLANKET IS THROWN BACK ON THE EMPTY BED BEHIND HER "
      + "AND THE NET IS STILL KNOTTED UP. ⚠️ SHE IS THE ONLY PERSON IN THE PICTURE. Warm bulb light "
      + "from above, her shadow ordinary on the floor.",
    u: ["အမေက အိပ်ရာက ထလာတယ်။", "ခြေဗလာနဲ့ ကြမ်းပြင်ပေါ် လမ်းလျှောက်တယ်။", "တရှပ်… တရှပ်…",
      "သူ့လမ်းလျှောက်ပုံက အမေနဲ့ မတူဘူး။"] },

  { t: "Her Knee Does Not Drag", c: [[1, "stinger"]], l: "အမေ့အခန်း", k: "feet", tm: "bulb",
    copy: true, walk: true, w: ["အမေ"],
    g: "⚠️ အမေက ဒူးနာလို့ အမြဲ ခြေတစ်ဖက်ဆွဲပြီး လျှောက်တတ်တယ်။ **အခုတော့ — ခြေနှစ်ဖက်လုံး ဖြောင့်ဖြောင့်လျှောက်နေတယ်။**",
    p: "A few inches above the earth floor under one bare bulb, holding a pair of bare feet and the "
      + "hem of a dark htamein above them, caught mid-stride. ⚠️ BOTH FEET ARE SQUARE TO THE "
      + "DIRECTION OF TRAVEL AND BOTH ANKLES ARE STRAIGHT — one foot flat and taking full weight, "
      + "the other lifted cleanly and level. ⚠️ NEITHER FOOT IS TURNED OUT AND NEITHER IS DRAGGING. "
      + "⚠️ THE SWEPT EARTH BEHIND THEM IS UNMARKED. Warm bulb light raking low across the floor.",
    u: ["အမေက ဒူးနာလို့ အမြဲ ခြေတစ်ဖက်ဆွဲပြီး လျှောက်တတ်တယ်။", "အခုတော့—",
      "ခြေနှစ်ဖက်လုံး ဖြောင့်ဖြောင့်လျှောက်နေတယ်။", "ကျွန်တော် တံခါးဘက် နောက်ဆုတ်လိုက်တယ်။"] },

  { t: "Mother Is Well Now", l: "အမေ့အခန်း", k: "mum", tm: "bulb", copy: true, w: ["အမေ"],
    g: "⚠️ **“အမေ နေကောင်းသွားပြီသား…”**",
    p: "Close on Mother standing in the middle of the room under one bare bulb, ⚠️ TURNED BACK "
      + "TOWARDS CAMERA AND SMILING WITH HER MOUTH CLOSED, her chin level and her eyes on the lens. "
      + "⚠️ SHE IS STANDING COMPLETELY STRAIGHT AND SQUARE ON BOTH LEGS. ⚠️ HER FACE IS EXACTLY HER "
      + "OWN, warm and ordinary, the thanaka in its two plain patches. Her arms hang easily at her "
      + "sides. Warm bulb light from above, the room dim behind her.",
    u: ["“အမေ…?”", "သူက ပြုံးတယ်။", "“အမေ နေကောင်းသွားပြီသား…”", "ကျွန်တော် မျက်ရည်ဝဲလာတယ်။"] },

  { t: "Not One Tooth Left", c: [[1, "bigstinger"]], l: "အမေ့အခန်း", k: "mouth", tm: "bulb",
    copy: true, gums: true, w: ["အမေ"],
    g: "⚠️ **သူ့ပါးစပ်ကို ကြည့်လိုက်တဲ့အခါ — သွားတစ်ချောင်းမှ မရှိတော့ဘူး။**",
    p: "Very close on the lower half of Mother's face under one bare bulb, shallow focus. ⚠️ HER "
      + "MOUTH IS OPEN IN A WIDE EASY SMILE AND THERE IS NOT ONE TOOTH IN IT. ⚠️ THE SKIN ROUND "
      + "HER MOUTH IS WARM AND LINED AND COMPLETELY ORDINARY, the thanaka visible on the cheek at "
      + "the edge of frame. ⚠️ THE SMILE IS RELAXED AND UNFORCED. The dim room soft and out of "
      + "focus behind her.",
    u: ["ဒါပေမယ့်—", "သူ့ပါးစပ်ကို ကြည့်လိုက်တဲ့အခါ—", "ကျွန်တော် အသက်ရှူရပ်သွားတယ်။",
      "သွားတစ်ချောင်းမှ မရှိတော့ဘူး။"] },

  /* ── XI · ဆရာဝန်က ရောဂါကြောင့်လို့ပဲ ပြောတယ် ────────────────────────── */
  { t: "I Ran Out of the House", l: "အမေ့အခန်း", k: "mroom", tm: "dawn", w: ["အမေ့အခန်း", "အမေ"],
    g: "နောက်နေ့မနက် ရွာသားတွေနဲ့ ပြန်လာတော့ အမေက အိပ်ရာပေါ်မှာပဲ ရှိနေတယ်။ သတိမရတော့ဘူး။",
    p: "Mother's room from beside the bed at seated height in thin colourless first light, ⚠️ "
      + "MOTHER LYING ON HER BACK ON THE BED WITH THE BLANKET PULLED UP TO HER CHEST AND HER ARMS "
      + "STRAIGHT DOWN ON TOP OF IT. ⚠️ HER EYES ARE CLOSED AND HER FACE IS TURNED UP TO THE "
      + "CEILING AND COMPLETELY SLACK. ⚠️ SHE IS WARM AND ORDINARY AND UNMARKED. The water glass "
      + "and the tablets untouched on the table. Flat grey light, nothing warm anywhere in it.",
    u: ["ကျွန်တော် အိမ်အပြင် ပြေးထွက်ခဲ့တယ်။", "နောက်နေ့မနက် ရွာသားတွေနဲ့ ပြန်လာတော့—",
      "အမေက အိပ်ရာပေါ်မှာပဲ ရှိနေတယ်။", "သတိမရတော့ဘူး။"] },

  { t: "The Doctor Said It Was the Illness", l: "အမေ့အခန်း", k: "insert", tm: "dawn",
    w: ["အမေ့အခန်း"],
    g: "ဆေးရုံပို့ခဲ့ပေမယ့် မကယ်နိုင်ခဲ့ဘူး။ ဆရာဝန်က ရောဂါကြောင့်လို့ပဲ ပြောတယ်။",
    p: "Tight on the small table beside the empty bed in thin colourless first light. ⚠️ A WATER "
      + "GLASS WITH AN INCH LEFT IN IT, A HALF-USED STRIP OF TABLETS WITH THREE EMPTY BLISTERS, AND "
      + "A SWITCHED-OFF TORCH LYING ON ITS SIDE. ⚠️ THE BED BEHIND THEM IS STRIPPED TO THE BARE "
      + "PLANKS AND SOFT AND OUT OF FOCUS. ⚠️ NOBODY IS IN THE PICTURE. Flat grey dawn, shallow "
      + "focus, no warmth anywhere.",
    u: ["ဆေးရုံပို့ခဲ့ပေမယ့် မကယ်နိုင်ခဲ့ဘူး။", "ဆရာဝန်က ရောဂါကြောင့်လို့ပဲ ပြောတယ်။",
      "ဒါပေမယ့် ကျွန်တော် သိတယ်။"] },

  { t: "But I Know", c: [[1, "stinger"]], l: "အမေ့အခန်း", k: "ak", tm: "dawn", w: ["အောင်ကျော်"],
    g: "⚠️ **အမေ့ပါးစပ်ထဲမှာ — သွားတွေ တစ်ချောင်းမှ မရှိတော့ဘူး။**",
    p: "Close on Aung Kyaw in thin colourless first light, ⚠️ LOOKING STRAIGHT AT THE LENS WITH HIS "
      + "EYES RED-RIMMED AND COMPLETELY DRY. ⚠️ HIS FACE IS SLACK AND HIS MOUTH IS SHUT. ⚠️ HE HAS "
      + "NOT SLEPT AND IT SHOWS. The same shirt he has worn for two days, creased and dusty. Flat "
      + "grey light with no direction to it, the room behind him out of focus.",
    u: ["အမေ့ပါးစပ်ထဲမှာ—", "သွားတွေ တစ်ချောင်းမှ မရှိတော့ဘူး။"] },

  /* ── XII · မိန်းမနှစ်ယောက် ──────────────────────────────────────────── */
  { t: "I Sold the House", l: "မြို့အခန်း", k: "city", tm: "day", w: ["မြို့အခန်း"],
    g: "အမေဆုံးပြီး တစ်ပတ်လောက်အကြာမှာ အိမ်ကို ရောင်းပြီး မြို့ကို ပြောင်းခဲ့တယ်။",
    p: "The small rented town room at seated height in flat daylight through a half-drawn curtain, "
      + "⚠️ A THIN MATTRESS ON THE TILED FLOOR WITH A SHEET PULLED ROUGHLY ACROSS IT, A PLASTIC "
      + "CHAIR, A STANDING FAN, AND A CLOSED HOLDALL AGAINST THE WALL. ⚠️ THE WALLS ARE COMPLETELY "
      + "BARE. ⚠️ NOBODY IS IN THE PICTURE. Grubby painted concrete, a security grille on the "
      + "window, a charger hanging from a socket.",
    u: ["အမေဆုံးပြီး တစ်ပတ်လောက်အကြာမှာ—", "ကျွန်တော် အိမ်ကို ရောင်းပြီး မြို့ကို ပြောင်းခဲ့တယ်။",
      "အိုးကိုတော့ ဆရာတော်က ရွာဦးကျောင်းမှာပဲ သိမ်းထားပေးတယ်။"] },

  { t: "Ko Tin Win Rang", l: "မြို့အခန်း", k: "ak", tm: "day", w: ["အောင်ကျော်"],
    g: "နှစ်လလောက်ကြာတော့ ကိုတင်ဝင်း ဖုန်းဆက်လာတယ်။",
    p: "Close on Aung Kyaw sitting against the wall of the rented room in flat daylight, ⚠️ A PHONE "
      + "HELD TO HIS EAR WITH ONE HAND, his eyes down and unfocused on the tiled floor. ⚠️ HIS "
      + "EXPRESSION IS FLAT AND TIRED AND NOTHING HAS HAPPENED YET. Thinner than before, the shirt "
      + "loose at the collar. The bare grubby wall and the half-drawn curtain soft behind him.",
    u: ["နှစ်လလောက်ကြာတော့ ကိုတင်ဝင်း ဖုန်းဆက်လာတယ်။", "“အောင်ကျော်… မင်းကို တစ်ခုမေးချင်လို့”",
      "“ဘာလဲဗျ?”", "“မင်းအမေဆုံးတဲ့ညက မင်း အိမ်ကနေ ဘယ်အချိန်ထွက်သွားတာလဲ?”", "“သန်းခေါင်လောက်ပေါ့”"] },

  { t: "Why Do You Ask", l: "မြို့အခန်း", k: "win", tm: "day", w: ["ကိုတင်ဝင်း"],
    g: "⚠️ **“အဲဒီညက မင်းအိမ်ရှေ့မှာ မိန်းမနှစ်ယောက် ရပ်နေတာ ငါမြင်ခဲ့တယ်…”**",
    p: "Close on Ko Tin Win outdoors in flat village daylight with a phone held to his ear, ⚠️ HIS "
      + "EYES OFF TO ONE SIDE AND NOT ON THE LENS, his jaw tight. ⚠️ HIS FREE HAND IS UP NEAR HIS "
      + "MOUTH, THE FINGERS HALF CURLED AND ALMOST TOUCHING HIS LIPS, HIS SHOULDERS "
      + "HUNCHED IN AND HIS BACK HALF TURNED TO THE OPEN GROUND BEHIND HIM. Towel round his head, thanaka on both cheeks. A bamboo fence and bleached ground "
      + "soft behind him.",
    u: ["ကိုတင်ဝင်း ခဏတိတ်သွားတယ်။", "“ဘာဖြစ်လို့လဲ?”", "သူက အသံတိုးတိုးနဲ့—",
      "“အဲဒီညက မင်းအိမ်ရှေ့မှာ မိန်းမနှစ်ယောက် ရပ်နေတာ ငါမြင်ခဲ့တယ်…”",
      "ကျွန်တော် ရင်ထဲ အေးသွားတယ်။"] },

  { t: "Two Women in Front of Your House", l: "အမေ့အခန်း", k: "yard", tm: "dark", copy: true,
    w: ["အမေ"],
    g: "“ဘယ်သူတွေလဲ?” — “တစ်ယောက်က မင်းအမေ…”",
    p: "In the yard at chest height at night in almost total darkness, looking towards the dark "
      + "front of a small village house. ⚠️ TWO WOMEN ARE STANDING SIDE BY SIDE ON THE BARE EARTH "
      + "IN FRONT OF IT, a stride apart, both facing the house and away from camera. ⚠️ BOTH ARE "
      + "BAREFOOT IN A PLAIN LOOSE BLOUSE AND A DARK PRINTED HTAMEIN WITH GREY-STREAKED HAIR IN A "
      + "SMALL TIGHT KNOT — ⚠️ IDENTICAL FROM BEHIND IN EVERY DETAIL. ⚠️ NEITHER FACE IS VISIBLE.",
    u: ["“ဘယ်သူတွေလဲ?”", "“တစ်ယောက်က မင်းအမေ…”", "“နောက်တစ်ယောက်ကရော?”"] },

  { t: "The Other One Was Also Your Mother", c: [[1, "bigstinger"]], l: "အမေ့အခန်း", k: "yard",
    tm: "dark", copy: true, w: ["အမေ"],
    g: "⚠️ **“နောက်တစ်ယောက်ကလည်း မင်းအမေပဲ…”**",
    p: "In the yard at chest height at night, closer on the two women standing in front of the "
      + "dark house. ⚠️ BOTH HAVE TURNED THEIR HEADS BACK OVER ONE SHOULDER TOWARDS CAMERA AT "
      + "EXACTLY THE SAME ANGLE. ⚠️ THEY HAVE THE SAME FACE — the same lines, the same two patches "
      + "of thanaka, the same calm ordinary expression — and both are warm, lit and entirely "
      + "lifelike. ⚠️ NEITHER IS PALE AND NEITHER IS DAMAGED. Thin moonlight, colour almost gone.",
    u: ["ကိုတင်ဝင်းက တုန်တုန်ယင်ယင် ပြောတယ်။", "“နောက်တစ်ယောက်ကလည်း မင်းအမေပဲ…”",
      "ကျွန်တော် ဘာမှမပြောနိုင်တော့ဘူး။", "သူက ဆက်ပြောတယ်။"] },

  { t: "One Went Back Inside", l: "အမေ့အခန်း", k: "yard", tm: "dark", copy: true, w: ["အမေ"],
    g: "“တစ်ယောက်က အိမ်ထဲကို ပြန်ဝင်သွားတယ်…” — **“နောက်တစ်ယောက်ကတော့… မင်းနောက်ကို လိုက်သွားတာ…”**",
    p: "In the yard at chest height at night, the dark front of the house across the frame. ⚠️ ONE "
      + "WOMAN IS IN THE OPEN DOORWAY WITH HER BACK TO CAMERA, HALF INSIDE, caught mid-step. ⚠️ THE "
      + "BARE EARTH IN FRONT OF THE HOUSE IS NOW COMPLETELY EMPTY — the second woman is not "
      + "anywhere in the picture. ⚠️ THERE ARE TWO SETS OF BAREFOOT PRINTS IN THE DUST: one going "
      + "to the door, one going off past camera. Thin moonlight, colour almost gone.",
    u: ["“တစ်ယောက်က အိမ်ထဲကို ပြန်ဝင်သွားတယ်…”", "“နောက်တစ်ယောက်ကတော့…”", "သူ ခဏတိတ်သွားတယ်။",
      "“မင်းနောက်ကို လိုက်သွားတာ…”"] },

  { t: "I Put the Phone Down", c: [[1, "stinger"]], l: "မြို့အခန်း", k: "city", tm: "day",
    w: ["မြို့အခန်း"],
    g: "ကျွန်တော် ဖုန်းကို ဖြည်းဖြည်းချလိုက်တယ်။ အဲဒီအချိန် — အခန်းနောက်ဘက်ကနေ တရှပ်… တရှပ်…",
    p: "The small rented room at seated height in flat daylight, ⚠️ AUNG KYAW SITTING AGAINST THE "
      + "WALL WITH THE PHONE JUST LOWERED INTO HIS LAP AND HIS HAND STILL ON IT. ⚠️ HIS HEAD HAS "
      + "TURNED AWAY FROM CAMERA TOWARDS THE BACK CORNER OF THE ROOM AND HIS FACE IS NOT VISIBLE. "
      + "⚠️ THAT CORNER IS EMPTY AND THE TILED FLOOR ACROSS IT IS BARE. The fan, the chair, the "
      + "half-drawn curtain. Flat daylight, ordinary shadows.",
    u: ["ကျွန်တော် ဖုန်းကို ဖြည်းဖြည်းချလိုက်တယ်။", "အဲဒီအချိန်—", "ကျွန်တော့်အခန်းနောက်ဘက်ကနေ—",
      "တရှပ်… တရှပ်…", "ခြေသံကြားလာတယ်။"] },

  { t: "My Mother's Voice", l: "မြို့အခန်း", k: "behind", tm: "day", w: ["အောင်ကျော်"],
    g: "⚠️ **အမေ့အသံ — “သား… အမေ့အတွက် နောက်တစ်ခု တောင်းပေးဦးလေ…”**",
    p: "From behind Aung Kyaw at seated height, the back of his head and one shoulder filling the "
      + "lower frame and the rest of the rented room beyond him in flat daylight. ⚠️ HE HAS NOT "
      + "TURNED AND THE SET OF HIS NECK AND SHOULDERS IS RIGID. ⚠️ THE ROOM IN FRONT OF HIM IS "
      + "SHARP, LIT AND COMPLETELY EMPTY — bare walls, a plastic chair, a standing fan, the "
      + "curtain. ⚠️ NOTHING IS STANDING ANYWHERE IN THE PICTURE AND THE FLOOR IS BARE.",
    u: ["ပြီးတော့—", "အမေ့အသံ။", "“သား…”", "“အမေ့အတွက် နောက်တစ်ခု တောင်းပေးဦးလေ…”",
      "ကျွန်တော် နောက်မလှည့်ရဲဘူး။"] },

  { t: "Right Beside My Ear", c: [[1, "bigstinger"]], l: "မြို့အခန်း", k: "insert", tm: "day",
    w: ["အောင်ကျော်"],
    g: "⚠️ **နိဂုံး — “ဒီတစ်ခါတော့… အမေ့ကို အိုးထဲကနေ ထုတ်ပေးပါ…”**",
    p: "Very tight on the side of Aung Kyaw's head from just behind and above — one ear, the line "
      + "of his jaw and a strip of his cheek, filling the frame in flat daylight, shallow focus. "
      + "⚠️ THE SKIN OF HIS NECK AND THE SIDE OF HIS FACE HAS COME UP IN FINE RAISED GOOSEFLESH. "
      + "⚠️ THE AIR BESIDE HIS EAR IS EMPTY AND THE BLURRED ROOM BEHIND IT IS BARE AND LIT. ⚠️ "
      + "THERE IS NOBODY AND NOTHING IN THE PICTURE EXCEPT HIM.",
    u: ["ဘာလို့လဲဆိုတော့—", "အဲဒီအသံက ကျွန်တော့်နားနားကပ်ပြီး ထပ်ပြောလိုက်လို့ပဲ။",
      "“ဒီတစ်ခါတော့… အမေ့ကို အိုးထဲကနေ ထုတ်ပေးပါ…”"] },
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
  if (s.pot) cont += CONT_POT;
  if (s.gums) cont += CONT_GUMS;
  if (s.partial) cont += CONT_PARTIAL;
  if (s.copy) cont += CONT_COPY;
  if (s.walk) cont += CONT_WALK;
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
