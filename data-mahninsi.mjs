/**
 * မနှင်းဆီ — MA HNIN SI. 90 shots.
 *
 * Zaw Ye, twenty-three, did the bridal makeup at every wedding in the village
 * and was called Ma Hnin Si by everyone in it. He vanished the night before
 * the rich man's son married a woman from town, and for seven years the
 * village assumed he had run away from the shame of it. He had not. He was
 * under the floor of a hut beside the old pond, and the man who put him there
 * was not the one everybody suspected.
 *
 * THREE THINGS HOLD THIS BOARD TOGETHER.
 *
 * 1. AFTER HE DIES HE IS ONLY EVER IN GLASS. Not once does Zaw Ye stand in a
 *    room in the present day. He is in a mirror, in a photograph, or in the
 *    dark behind a window, and the shot is always of the glass rather than of
 *    him. The one apparent exception — the makeup artist at the door — is the
 *    point of the story: that night he looked like anybody else, and the
 *    audience only learns otherwise from a photograph.
 *
 * 2. HE IS NOT A MONSTER AND THE SCRIPT SAYS SO OUTRIGHT. The damaged face
 *    belongs to exactly four shots, all of them inside one wedding photograph.
 *    Everywhere else he is composed, skilled and beautifully made up, which is
 *    how he lived. The final appearance is deliberately the most beautiful in
 *    the film. ⚠️ The red carried up past the corners of his mouth is LIPSTICK
 *    ON SKIN — it is drawn on, and every shot that shows it says so, because a
 *    smile "to the ears" described any other way is a mutilation and will be
 *    refused as one.
 *
 * 3. THE MIRROR HOLDS ONE MORE PERSON THAN THE ROOM. Every such shot states
 *    the count twice — what stands in front of the glass, and what the glass
 *    returns — because a generator given "there is an extra reflection" will
 *    either duplicate a figure in the room or quietly drop it.
 *
 * Zaw Ye's reference plate is him ALIVE, warm and ordinary. Pallor and damage
 * are a grade applied by the four photograph shots. See the note on the
 * wedding board: a plate that says "he is dead" gives the ending away in the
 * first frame that attaches it.
 */

export const CAST = [
  { name: "ဇော်ရဲ", en: "Zaw Ye — 'Ma Hnin Si', twenty-three",
    prompt:
      "A tall, slender Burmese person of twenty-three with ⚠️ LONG STRAIGHT BLACK HAIR WORN LOOSE "
      + "PAST THE SHOULDERS. ⚠️ HE WEARS A FITTED PALE PINK BLOUSE AND A DEEP RED HTAMEIN WITH A "
      + "SMALL FLORAL PRINT, and his face carries the careful everyday makeup of somebody who does "
      + "it for a living — soft filled brows, a clean line along the lashes, a warm even base, and "
      + "⚠️ CLEAR RED LIPSTICK ON THE MOUTH, neatly inside its own edges. ⚠️ BUILD THIS PLATE AS HE "
      + "WAS IN LIFE: warm ordinary skin, clear eyes, an easy, kind, self-possessed expression. The "
      + "four shots that need him otherwise say so themselves. He is a working village makeup "
      + "artist and he looks like one — assured, tidy, entirely at home in himself.",
    pose: "The subject stands facing the camera square on, full figure in frame, hands loosely "
      + "together in front, a calm and faintly amused expression" },

  { name: "ကိုသက်ပိုင်", en: "Ko Thet Paing — the rich man's only son, twenty-three",
    prompt:
      "A Burmese man of twenty-three, well fed and well dressed by village standards — a pressed "
      + "shirt, a good paso, leather sandals. ⚠️ HE IS HANDSOME IN A SOFT, UNFINISHED WAY and his "
      + "face gives very little away. Short neat hair. ⚠️ HE APPEARS ONLY IN THE WARM DAYLIT "
      + "MEMORIES AND IN ONE OLD WEDDING PHOTOGRAPH; he is a living ordinary man in every one of "
      + "them." },

  { name: "သက်ပိုင့်အဖေ", en: "Thet Paing's father — the rich man, about sixty",
    prompt:
      "A heavy-set Burmese man of about sixty, a landowner's face — thick grey hair combed back, "
      + "a gold-rimmed watch, a good dark shirt and an expensive checked paso. ⚠️ ON THE THIRD "
      + "FINGER OF HIS RIGHT HAND IS A HEAVY SILVER RING SET WITH ONE FLAT BLACK STONE, and it is "
      + "the most important object in the film. ⚠️ HE HOLDS HIMSELF LIKE SOMEBODY USED TO BEING "
      + "AGREED WITH. Build this plate as a living man: warm skin, clear eyes, an ordinary "
      + "upright stance." },

  { name: "ညီလေး", en: "The narrator — the bride's younger brother, about twenty",
    prompt:
      "A Burmese man of about twenty, slight, in a plain t-shirt and a checked paso, rubber "
      + "slippers, short untidy hair. ⚠️ AN ORDINARY YOUNG VILLAGER WITH NOTHING REMARKABLE ABOUT "
      + "HIM — this is the person the film is happening to, and he watches far more than he acts." },

  { name: "အစ်မ", en: "The sister — the bride, about twenty-five",
    prompt:
      "A Burmese woman of about twenty-five with her hair up. ⚠️ IN THE WEDDING SHOTS SHE WEARS "
      + "FULL MYANMAR BRIDAL DRESS — a gold-thread htamein, a fitted white-gold jacket, flowers "
      + "pinned in her hair — and her face carries beautiful, skilled, obviously professional "
      + "makeup. ⚠️ OUT OF THE WEDDING SHE IS IN AN ORDINARY HOUSE LONGYI AND BLOUSE WITH HER FACE "
      + "bare. A calm, careful, slightly guarded woman." },

  { name: "အစ်မ့ယောကျ်ား", en: "The sister's husband, about twenty-eight",
    prompt:
      "A Burmese man of about twenty-eight, town-smart for a village — a good shirt, a phone "
      + "always in his hand, hair with product in it. ⚠️ HE IS PLEASANT AND SLIGHTLY TOO QUICK TO "
      + "SMILE. In the wedding shots he is in a full Myanmar groom's jacket and gaung baung." },

  { name: "အမေ", en: "The mother, about fifty",
    prompt:
      "A Burmese woman of about fifty, wide and practical, a house longyi and a faded blouse, "
      + "grey coming through her hair, thanaka on both cheeks. ⚠️ A WOMAN WHO HAS RUN A HOUSE FOR "
      + "THIRTY YEARS and shows everything on her face the moment she feels it." },
];

export const PROPS = [
  { name: "အနီရောင်ထဘီ", en: "The red htamein",
    prompt:
      "⚠️ ONE DEEP RED HTAMEIN WITH A SMALL FLORAL PRINT, photographed folded on a plain surface "
      + "and filling the frame. Ordinary cotton, worn soft with use, the red slightly faded along "
      + "the folds. ⚠️ THIS EXACT CLOTH RECURS THROUGH THE WHOLE FILM — worn, folded away under a "
      + "floor, and worn again in a mirror — and it must be the same red and the same print every "
      + "time." },

  { name: "မိတ်ကပ်သေတ္တာ", en: "The makeup case",
    prompt:
      "⚠️ A SMALL HARD-SIDED MAKEUP CASE IN SCUFFED DARK RED VINYL with a metal clasp, the kind a "
      + "working makeup artist has carried for years, photographed closed and filling the frame. "
      + "The corners are rubbed through to the board underneath. ⚠️ IT OPENS TWICE IN THE FILM and "
      + "is the same case both times." },

  { name: "ငွေလက်စွပ်", en: "The silver ring with a black stone",
    prompt:
      "⚠️ A HEAVY MAN'S SILVER RING SET WITH ONE FLAT OVAL BLACK STONE, photographed on a plain "
      + "surface and filling the frame. The silver is worn smooth and slightly tarnished in the "
      + "grooves; the stone is opaque, polished and completely black. ⚠️ THE STONE CAN COME OUT OF "
      + "ITS SETTING — this is the thing the whole ending turns on." },
];

export const LOCS = [
  { name: "ရွာလမ်း", en: "The village lane",
    prompt:
      "A packed-earth lane through a Burmese village — timber and bamboo houses up on short "
      + "stilts on both sides, corrugated roofs, a few fruit trees, a power line sagging along "
      + "one side. ⚠️ AT NIGHT IT IS LIT ONLY BY WHAT COMES OUT OF THE HOUSE WINDOWS. Ordinary, "
      + "worn, lived in." },

  { name: "ဇော်ရဲ့အခန်း", en: "Zaw Ye's room",
    prompt:
      "A small timber room in a village house: a thin mattress on the floor, a wooden clothes "
      + "rail with a few bright blouses and htameins on it, ⚠️ A SMALL MIRROR PROPPED AGAINST THE "
      + "WALL AT SITTING HEIGHT WITH A CLOTH BESIDE IT, and an old wooden chest under the window. "
      + "Poor, tidy and cared for." },

  { name: "ရေကန်ဟောင်း", en: "The old pond, outside the village",
    prompt:
      "An old village pond outside the houses — still dark water, reed and long grass all round "
      + "the edge, a few big trees leaning over it, a dirt track coming down to one side. ⚠️ THE "
      + "FAR BANK IS ALWAYS TOO DARK OR TOO FAR TO READ. Nothing is maintained here." },

  { name: "တဲအဟောင်း", en: "The abandoned hut by the pond",
    prompt:
      "A small abandoned bamboo-and-timber hut in the long grass at the edge of a pond, the door "
      + "gone, the thatch half fallen in, ⚠️ A BIG OLD MIRROR STILL PROPPED AGAINST THE BACK WALL "
      + "INSIDE with a crack running across it, and a plank floor grey with age. Empty for years." },

  { name: "ကျွန်တော်တို့အိမ်", en: "Our house — the main room",
    prompt:
      "The main room of an ordinary village house: a timber floor, a low table, plastic chairs, "
      + "a family shrine shelf high on one wall, ⚠️ AND A LARGE OLD MIRROR IN A DARK WOODEN FRAME "
      + "HANGING ON THE MAIN WALL, big enough to hold three or four people at once. Lived in and "
      + "slightly cluttered." },
];

/* ────────────────────────────────────────────────────────────────────────── */

const CAM = {
  mirror: "THE MIRROR, SQUARE ON. Camera level and straight in front of the glass, close enough "
    + "that the frame of the mirror runs outside the picture. ⚠️ WHAT IS PHOTOGRAPHED IS THE "
    + "REFLECTION, not the room.",
  photo: "A PHOTOGRAPH BEING LOOKED AT. The image fills the frame as a photograph — a phone "
    + "screen or a print held in a hand — ⚠️ SO THAT WE ARE LOOKING AT A PICTURE OF A ROOM RATHER "
    + "THAN AT THE ROOM.",
  insert: "TIGHT INSERT. One subject filling the frame, shallow focus.",
  wide: "WIDE. Camera at chest height, far enough back to hold the whole place.",
  lane: "ON THE VILLAGE LANE. Camera at chest height on the packed earth.",
  pond: "AT THE OLD POND. Camera at chest height in the long grass at the water's edge.",
  hut: "INSIDE THE ABANDONED HUT. Camera at chest height in the small dark room.",
  house: "INSIDE OUR HOUSE. Camera at seated height in the main room.",
  room: "IN ZAW YE'S ROOM. Camera low, at the height of somebody sitting on the floor.",
  zaw: "CLOSE ON ZAW YE. Camera at his eye height, head-and-shoulders crop.",
  paing: "CLOSE ON KO THET PAING. Camera at his eye height, head-and-shoulders crop.",
  father: "CLOSE ON THET PAING'S FATHER. Camera at his eye height, head-and-shoulders crop.",
  nar: "CLOSE ON THE NARRATOR. Camera at his eye height, head-and-shoulders crop.",
  sis: "CLOSE ON THE SISTER. Camera at her eye height, head-and-shoulders crop.",
  hus: "CLOSE ON THE HUSBAND. Camera at his eye height, head-and-shoulders crop.",
  mother: "CLOSE ON THE MOTHER. Camera at her eye height, head-and-shoulders crop.",
  door: "AT OUR FRONT DOOR. Camera inside the house looking out through the open doorway, at "
    + "chest height.",
  warm: "A WARM DAYLIT MEMORY, SEVEN YEARS EARLIER. Camera at chest height, bright and green and "
    + "alive.",
};

const TIME = {
  night: "TIME: NIGHT IN THE VILLAGE. What light there is comes out of house windows and doorways "
    + "in warm patches; everything between them is deep blue-black.",
  lamp: "TIME: INDOORS AT NIGHT. One bare warm bulb overhead, the corners of the room going soft "
    + "and dark.",
  day: "TIME: DAYTIME, OVERCAST. Flat even grey daylight, the shadows soft and open.",
  warm: "TIME: A WARM DAYLIT MEMORY, SEVEN YEARS EARLIER. Bright green sunlight, saturated and "
    + "alive — visibly a different day and a different world from the present-day shots.",
  dusk: "TIME: LAST LIGHT. The sky still pale, the ground already blue, every lamp just coming on.",
};

/**
 * Zaw Ye has three states and getting them the wrong way round costs the film
 * its ending, so they are chosen per shot rather than written into the tail.
 */
const CONT = "Continuity: everyone in this film is photographed as an ordinary person.";

const ZAW_ALIVE =
  " Zaw Ye is alive in this shot: warm ordinary skin, clear eyes, long loose black hair, a "
  + "fitted pink blouse, a deep red floral htamein, and careful neat everyday makeup with clear "
  + "red lipstick inside the edges of his mouth.";

const ZAW_VISITOR =
  " Zaw Ye looks exactly like a living person here and nothing about him reads as wrong — warm "
  + "skin, clear eyes, long loose black hair, a pale pink blouse, the deep red floral htamein, "
  + "and beautiful, skilled, freshly applied makeup. Whatever anybody learns later, this is an "
  + "ordinary composed man doing a job.";

/* Short on purpose. The four shots it lands on describe the face in detail
   themselves, and saying it twice is how a prompt ends up half boilerplate. */
const ZAW_PHOTO =
  " ⚠️ THIS IS THE DAMAGED FACE AND IT EXISTS ONLY INSIDE THE WEDDING PHOTOGRAPH: flat grey-white "
  + "skin, one cheek fallen in, a dark band around the throat, and red carried far past the "
  + "corners of the mouth. ⚠️ ALL OF IT IS LIPSTICK AND SHADOW ON SMOOTH EVEN SKIN, and all of it "
  + "is inside a photograph.";

const ZAW_GLASS =
  " ⚠️ THIS IS THE BEAUTIFUL VERSION AND IT IS THE LAST WE SEE OF HIM. His face is whole, calm "
  + "and flawlessly made up — the best work he ever did — with clear red lipstick neatly inside "
  + "the edges of his mouth, the deep red floral htamein, his long hair loose and brushed. He is "
  + "lit a little cooler than the room in front of the glass and that is the only difference.";

const CONT_CAST = {
  "ကိုသက်ပိုင်": " Ko Thet Paing is a living ordinary man wherever he appears.",
  "သက်ပိုင့်အဖေ": " Thet Paing's father wears a heavy silver ring with one flat black stone on "
    + "the third finger of his right hand.",
};

/** The four shots inside the wedding photograph. */
const PHOTO_FACE = new Set([
  "Between Them, in the Red Htamein", "Not the Face From That Night",
  "Red Drawn Up to the Ears", "Mother Said His Name"]);

/** The two shots in the cracked mirror at the end. */
const GLASS_FACE = new Set(["Behind the Three of Us", "The Man Standing Beside Him"]);

/** The night he came to the door: he passes for living, and that is the point. */
const VISITOR = new Set([
  "A Makeup Artist at the Door", "Tall, With Long Hair", "Pink Blouse, Red Htamein",
  "A Carefully Painted Face", "I'm Here for the Bride", "An Hour at Her Face",
  "He Leaned to Her Ear"]);

const STYLE =
  "Rural Myanmar, present day. Photorealism, 16:9, 35mm grain, level camera, natural depth of "
  + "field. Clean neutral colour. An ordinary working village and ordinary objects in it. One "
  + "still instant. Surfaces are plain except where a shot names writing on them.";

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  /* ── I · THE RULE ─────────────────────────────────────────────────────── */
  { t: "The Name We Do Not Say at Night", l: "ရွာလမ်း", k: "lane", w: [],
    g: "ဖွင့်ပုံ — ညဘက် ရွာလမ်း။ ဘယ်သူမှ မပါရ။",
    p: "The village lane at night, seen along its length, ⚠️ THE EARTH RUNNING BARE AND EMPTY FROM "
      + "the foreground away into the dark. Warm light lies in patches on the ground under two or "
      + "three windows and the rest of the lane is deep blue-black.",
    u: ["ကျွန်တော်တို့ရွာမှာ—", "သေပြီးသားလူအကြောင်းကို ညဘက်မှာ နာမည်တပ်ပြီး မပြောကြဘူး။"] },

  { t: "Especially That One", c: [[1, "stinger"]], l: "ကျွန်တော်တို့အိမ်", k: "insert", w: [],
    g: "အိမ်နံရံက မှန်ကြီး — အခန်းထဲ ဘာမှမရှိ။",
    p: "Insert on the big old mirror on the wall of a dark house, ⚠️ THE GLASS RETURNING AN EMPTY "
      + "ROOM — the far wall, a low table, two plastic chairs and nobody. A single bulb burns out "
      + "of shot and lays one soft highlight down the glass.",
    u: ["အထူးသဖြင့်—", "“မနှင်းဆီ” ဆိုတဲ့နာမည်ကို။"] },

  { t: "If There Is a Mirror Nearby", l: "ကျွန်တော်တို့အိမ်", k: "insert", w: [],
    g: "လက်ကိုင်မှန်တစ်ချပ် စားပွဲပေါ်။",
    p: "Tight insert straight down on a small round hand mirror lying face up on a wooden table, "
      + "⚠️ THE GLASS SHOWING ONLY THE DARK CEILING BOARDS ABOVE IT. A comb and a folded cloth lie "
      + "beside it. Warm bulb light from one side.",
    u: ["ဘာလို့လဲဆိုတော့—",
      "မနှင်းဆီလို့ ခေါ်လိုက်တဲ့အချိန် အနားမှာ မှန်တစ်ချပ်ရှိနေရင်…"] },

  { t: "She Looks Back Out of It", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "mirror", w: [],
    g: "⚠️ ဒီအခန်းမှာ ဘာမှ မပေါ်သေးဘူး — မှန်ပဲ။",
    p: "⚠️ THE MIRROR SQUARE ON AND FILLING THE FRAME, the glass holding the reflection of an empty "
      + "lit room. ⚠️ NOTHING STANDS IN IT AND NOTHING NEEDS TO — the shot is the surface itself, "
      + "the faint dust on it, the one long highlight, and the room going back behind it.",
    u: ["မှန်ထဲကနေ", "သူ ပြန်ကြည့်တတ်လို့ပဲ။"] },

  /* ── II · ZAW YE ──────────────────────────────────────────────────────── */
  { t: "She Is Not a Woman", l: "ဇော်ရဲ့အခန်း", k: "warm", w: ["ဇော်ရဲ"],
    g: "⚠️ ဇော်ရဲကို ပထမဆုံး မြင်ရတာ — အသက်ရှင်နေစဉ်၊ နေရောင်အောက်။",
    p: "⚠️ A WARM DAYLIT MEMORY. Zaw Ye standing in the doorway of his own room in the afternoon "
      + "sun, ⚠️ HALF TURNED TOWARDS THE CAMERA WITH ONE HAND STILL ON THE DOOR FRAME, his long "
      + "hair loose over one shoulder. Green light off the trees outside. He is entirely at ease.",
    u: ["ဒါပေမယ့် ထူးဆန်းတာက—", "မနှင်းဆီဟာ မိန်းမတစ်ယောက် မဟုတ်ဘူး။"] },

  { t: "His Name Was Zaw Ye", l: "ဇော်ရဲ့အခန်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "နာမည်အရင်း၊ အသက် ၂၃။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Zaw Ye looking straight at the lens, ⚠️ HIS EXPRESSION OPEN "
      + "AND FAINTLY AMUSED — the mouth just short of a smile, the eyes steady. Sunlight across one "
      + "side of his face and the soft green of the village behind him.",
    u: ["သူ့နာမည်အရင်းက ဇော်ရဲ။", "အသက်နှစ်ဆယ့်သုံး။"] },

  { t: "The Village Called Him Ma Hnin Si", l: "ရွာလမ်း", k: "warm", w: ["ဇော်ရဲ"],
    g: "ရွာလမ်းပေါ် — ငယ်ငယ်ကတည်းက ခေါ်ခဲ့တဲ့နာမည်။",
    p: "⚠️ WARM DAYLIT MEMORY. Zaw Ye walking down the village lane in the middle of the day with a "
      + "cloth bag over one shoulder, ⚠️ TWO WOMEN AT A GATE TURNING TO WATCH HIM GO PAST. Bright "
      + "green, dust in the air, an ordinary afternoon.",
    u: ["ရွာထဲကလူတွေကတော့ သူ့ကို ငယ်ငယ်ကတည်းက—", "“မနှင်းဆီ” လို့ပဲ ခေါ်ကြတယ်။"] },

  { t: "Long Hair, Red Lipstick", l: "ဇော်ရဲ့အခန်း", k: "insert", w: ["ဇော်ရဲ"],
    g: "⚠️ မှန်ရှေ့မှာ ကိုယ့်ဘာသာ မိတ်ကပ်လိမ်းနေ — အနီးကပ်။",
    p: "⚠️ WARM DAYLIT MEMORY. Tight insert on Zaw Ye's own hands and the lower half of his face "
      + "in the small propped mirror in his room, ⚠️ ONE HAND DRAWING A CLEAN RED LINE ALONG HIS "
      + "BOTTOM LIP with a worn lipstick. Daylight from the window behind the mirror.",
    u: ["ဇော်ရဲက မိန်းမဝတ်အင်္ကျီတွေကြိုက်တယ်။ ဆံပင်ရှည်ရှည်ထားတယ်။",
      "နှုတ်ခမ်းနီဆိုးတယ်။ ပန်းပွင့်ပုံပါတဲ့ ထဘီတွေဝတ်တယ်။"] },

  { t: "He Painted Every Bride in the Village", l: "ရွာလမ်း", k: "warm", w: ["ဇော်ရဲ"],
    g: "သတို့သမီးတစ်ယောက်ကို မိတ်ကပ်လိမ်းပေးနေ။",
    p: "⚠️ WARM DAYLIT MEMORY. Zaw Ye standing over a seated young bride in a village front room, "
      + "⚠️ ONE HAND UNDER HER CHIN AND A BRUSH IN THE OTHER, both of them concentrating. The open "
      + "makeup case on the floor beside them. Bright daylight through a doorway.",
    u: ["ရွာထဲမှာ အလှူ၊ မင်္ဂလာဆောင်ရှိတိုင်း",
      "သတို့သမီးတွေကို မိတ်ကပ်လိမ်းပေးတာလည်း သူပဲ။"] },

  { t: "They Laughed and He Did Not Mind", l: "ရွာလမ်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "လှောင်တဲ့လူတွေ ရှိပေမယ့် သူ ပြန်မစိတ်ဆိုးဘူး။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Zaw Ye on the lane, ⚠️ HIS FACE COMPLETELY UNBOTHERED — "
      + "eyebrows level, a small dry smile, his eyes going past whoever is talking. ⚠️ TWO MEN SIT "
      + "SOFT AND OUT OF FOCUS ON A BENCH BEHIND HIM, mid-laugh. He is not looking at them.",
    u: ["တချို့က သူ့ကို လှောင်ကြတယ်။ တချို့က ရယ်ကြတယ်။",
      "ဇော်ရဲကတော့ ပြန်မစိတ်ဆိုးဘူး။"] },

  { t: "Seeing Them Beautiful Was Enough", l: "ဇော်ရဲ့အခန်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "သူ့စကား — ကိုယ်တိုင် မင်္ဂလာမဆောင်ရလည်း ပျော်တယ်။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Zaw Ye sitting on the floor of his room packing brushes "
      + "back into the case, ⚠️ LOOKING DOWN AT HIS OWN HANDS AND SMILING PROPERLY FOR THE FIRST "
      + "TIME. Warm light across the mattress and the clothes rail behind him.",
    u: ["“ငါ့ဘဝမှာ မင်္ဂလာမဆောင်ရလည်း",
      "သတို့သမီးတွေ လှသွားတာမြင်ရရင် ပျော်ပါတယ်” လို့ပဲ ပြောတတ်တယ်။"] },

  /* ── III · THET PAING ─────────────────────────────────────────────────── */
  { t: "One Thing Nobody Knew", c: [[1, "stinger"]], l: "ဇော်ရဲ့အခန်း", k: "room", w: [],
    g: "ပြတင်းပေါက်အောက်က သေတ္တာဟောင်း။",
    p: "⚠️ WARM DAYLIT MEMORY. Low in Zaw Ye's room: an old wooden chest under the window with its "
      + "lid shut and a folded cloth on top, ⚠️ THE ROOM QUIET AND ORDINARY AROUND IT. Dust turning "
      + "in the light coming through the window.",
    u: ["ဒါပေမယ့်—", "ဇော်ရဲမှာ ဘယ်သူမှ မသိတဲ့ လျှို့ဝှက်ချက်တစ်ခုရှိတယ်။"] },

  { t: "Photographs of One Man", l: "ဇော်ရဲ့အခန်း", k: "insert", w: [],
    g: "⚠️ သေတ္တာဖွင့် — ဓာတ်ပုံအထပ်လိုက်၊ တစ်ယောက်တည်းရဲ့ပုံ။",
    p: "⚠️ WARM DAYLIT MEMORY. Tight insert straight down into the opened chest: ⚠️ A LOOSE STACK "
      + "OF SMALL PRINTED PHOTOGRAPHS SPREAD ACROSS THE BOTTOM OF IT, and in every single one the "
      + "same young man. ⚠️ THE FACES IN THE PHOTOGRAPHS ARE SOFT AND SMALL AT THIS SIZE. Daylight "
      + "from above.",
    u: ["သူ့အခန်းထဲက သေတ္တာဟောင်းတစ်လုံးထဲမှာ—",
      "အမျိုးသားတစ်ယောက်ရဲ့ ဓာတ်ပုံတွေ အများကြီး သိမ်းထားတယ်။"] },

  { t: "Ko Thet Paing", l: "ရွာလမ်း", k: "paing", w: ["ကိုသက်ပိုင်"],
    g: "ရွာသူဌေးရဲ့ တစ်ဦးတည်းသောသား။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Ko Thet Paing outside in the sun, ⚠️ LOOKING SLIGHTLY OFF "
      + "THE LENS with an easy expression that does not commit to anything. A pressed shirt, neat "
      + "hair, green village behind him.",
    u: ["အဲဒီလူက—", "ကိုသက်ပိုင်။ ရွာသူဌေးရဲ့ တစ်ဦးတည်းသောသား။"] },

  { t: "They Grew Up Together", l: "ရေကန်ဟောင်း", k: "warm", w: ["ဇော်ရဲ", "ကိုသက်ပိုင်"],
    g: "ငယ်ငယ်ကတည်းက အတူကြီးလာကြတာ။",
    p: "⚠️ WARM DAYLIT MEMORY. The two of them sitting side by side on the bank of the old pond in "
      + "the afternoon, ⚠️ SHOULDERS ALMOST TOUCHING AND BOTH LOOKING OUT AT THE WATER rather than "
      + "at each other. Bright green reeds, the water flat and gold.",
    u: ["ဇော်ရဲနဲ့ သက်ပိုင်တို့ဟာ", "ငယ်ငယ်ကတည်းက အတူကြီးလာကြတာ။"] },

  { t: "More Than Friends, and Nobody Knew", l: "ရေကန်ဟောင်း", k: "insert",
    w: ["ဇော်ရဲ", "ကိုသက်ပိုင်"],
    g: "⚠️ လက်နှစ်ဖက်ပဲ ပြ — မျက်နှာ မပါ။",
    p: "⚠️ WARM DAYLIT MEMORY. Tight insert on two men's hands on the grass between them, ⚠️ THE "
      + "LITTLE FINGER OF ONE LYING ACROSS THE BACK OF THE OTHER'S HAND and nothing more than that. "
      + "⚠️ THE FRAME HOLDS THE TWO HANDS AND THE GRASS. Late afternoon light.",
    u: ["ဒါပေမယ့် အသက်နှစ်ဆယ်ကျော်လာတဲ့အချိန်မှာ—",
      "သူငယ်ချင်းထက် ပိုတဲ့ဆက်ဆံရေးတစ်ခု သူတို့နှစ်ယောက်ကြားမှာ ရှိနေခဲ့တယ်။",
      "ဘယ်သူမှ မသိဘူး။ သိလို့လည်း မဖြစ်ဘူး။"] },

  { t: "By the Old Pond, Nearly Every Night", l: "ရေကန်ဟောင်း", k: "wide", w: [],
    g: "ညဘက် ရေကန် — လူနှစ်ယောက် အဝေးကလေး။",
    p: "Wide on the old pond at night, ⚠️ TWO SMALL SEATED FIGURES ON THE FAR BANK, far enough off "
      + "to read as shapes and nothing finer. The water lies flat and black between them and the "
      + "camera. Faint starlight on the reeds.",
    u: ["ညတိုင်းလိုလို ရွာအပြင်က ရေကန်ဟောင်းဘေးမှာ",
      "သူတို့နှစ်ယောက် တိတ်တိတ်လေးတွေ့ကြတယ်။"] },

  { t: "I'll Take You With Me", l: "ရေကန်ဟောင်း", k: "paing", w: ["ကိုသက်ပိုင်"],
    g: "သက်ပိုင့်ကတိ — ရန်ကုန်သွားရင် ခေါ်သွားမယ်။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Ko Thet Paing at the pond, ⚠️ TALKING AND LOOKING STRAIGHT "
      + "AT SOMEBODY JUST OFF THE LENS, his face open and certain in a way it is not anywhere else "
      + "in the film. Low gold light off the water on one side of his face.",
    u: ["သက်ပိုင်က တစ်ခါပြောဖူးတယ်။",
      "“ငါ ရန်ကုန်သွားရင် မင်းကိုပါ ခေါ်သွားမယ်”",
      "ဇော်ရဲက မယုံရဲဘူး။ “တကယ်လား”"] },

  { t: "In Front of Me You Are You", c: [[1, "stinger"]], l: "ရေကန်ဟောင်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "⚠️ ဒီဇာတ်လမ်းတစ်ခုလုံးရဲ့ အနှစ်ချုပ် — သူ ယုံခဲ့တဲ့စကား။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Zaw Ye at the pond hearing it, ⚠️ HIS FACE COMPLETELY OPEN "
      + "— eyebrows lifted in the middle, mouth just parted, eyes wet and steady on the man off "
      + "frame. Gold light from the water underneath his jaw.",
    u: ["“အဲဒီရောက်ရင် ငါ ဒီလိုပဲ ဝတ်လို့ရမလား”",
      "သက်ပိုင် ရယ်တယ်။ “မင်းကြိုက်သလိုနေ။ ငါ့ရှေ့မှာတော့ မင်းက မင်းပဲ”",
      "အဲဒီစကားကို ဇော်ရဲက သူသေတဲ့နေ့အထိ ယုံခဲ့တယ်။"] },

  /* ── IV · THE NEWS ────────────────────────────────────────────────────── */
  { t: "Three Months Later", l: "ရွာလမ်း", k: "wide", w: [],
    g: "ရွာထဲ သတင်းပျံ့ — အမျိုးသမီးတွေ စုပြောနေ။",
    p: "The village lane in flat daylight with ⚠️ FOUR WOMEN STANDING CLOSE TOGETHER AT A GATE, "
      + "heads angled in towards one another, one of them talking and the rest listening. The lane "
      + "carries on empty past them. Ordinary midday.",
    u: ["သုံးလလောက်ကြာတော့—", "ရွာထဲမှာ သတင်းတစ်ခု ပျံ့လာတယ်။"] },

  { t: "A Rich Man's Daughter From Town", l: "ရွာလမ်း", k: "insert", w: [],
    g: "မင်္ဂလာဖိတ်စာ — စာသားက မသဲကွဲ။",
    p: "Tight insert on a gold-printed wedding invitation card held open in two hands, ⚠️ THE "
      + "PRINTED LINES ON IT SOFT AND OUT OF FOCUS PAST READING, only the gold border and the red "
      + "paper reading clearly. Daylight from one side.",
    u: ["သက်ပိုင် မင်္ဂလာဆောင်တော့မယ်။", "မြို့က သူဌေးသမီးတစ်ယောက်နဲ့။"] },

  { t: "He Went to Ask Him Himself", l: "ရွာလမ်း", k: "wide", w: ["ဇော်ရဲ", "ကိုသက်ပိုင်"],
    g: "⚠️ နှစ်ယောက် မျက်နှာချင်းဆိုင် — အကွာအဝေး ကျယ်ကျယ်။",
    p: "⚠️ WARM DAYLIT MEMORY. Wide on the two of them standing a good two metres apart on the bare "
      + "earth in front of a large timber house, ⚠️ BOTH SQUARE ON TO EACH OTHER AND NEITHER OF "
      + "THEM MOVING. Bright grey daylight, the distance between them the whole subject.",
    u: ["ဇော်ရဲက မယုံဘူး။", "သက်ပိုင်ဆီ သွားမေးတယ်။"] },

  { t: "My Father Arranged It", l: "ရွာလမ်း", k: "paing", w: ["ကိုသက်ပိုင်"],
    g: "သက်ပိုင် — မျက်လုံး မဆုံရဲဘူး။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Ko Thet Paing, ⚠️ HIS EYES DOWN AND OFF TO ONE SIDE, his "
      + "jaw set, his mouth a flat line. ⚠️ HE IS NOT LIFTING HIS HEAD and the shot is entirely "
      + "about that. Flat daylight.",
    u: ["ဒါပေမယ့် သက်ပိုင်က—", "“အဖေစီစဉ်တာပါ။ ငါ ငြင်းလို့မရဘူး” လို့ပဲ ပြောတယ်။"] },

  { t: "He Did Not Cry", c: [[1, "stinger"]], l: "ရွာလမ်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "⚠️ မျက်ရည် မရှိဘူး — ငြိမ်နေတာ။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Zaw Ye taking it, ⚠️ HIS FACE PERFECTLY DRY AND PERFECTLY "
      + "STILL — the eyes wide and steady, the mouth closed and level, every muscle holding where "
      + "it is. Flat daylight straight onto him.",
    u: ["ဇော်ရဲ မငိုဘူး။", "တစ်ခုပဲ မေးတယ်။"] },

  { t: "Who Will Paint Her Face", l: "ရွာလမ်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "သူ မေးတဲ့ တစ်ခုတည်းသောမေးခွန်း။",
    p: "⚠️ WARM DAYLIT MEMORY. The same close framing on Zaw Ye, ⚠️ HIS MOUTH OPEN ON A SHORT "
      + "QUESTION and his eyes locked straight on the man off frame. His chin has come up slightly. "
      + "Flat daylight.",
    u: ["“မင်္ဂလာဆောင်တဲ့နေ့", "သူ့ကို ဘယ်သူ မိတ်ကပ်လိမ်းပေးမှာလဲ”"] },

  { t: "I Will", c: [[1, "bigstinger"]], l: "ရွာလမ်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "⚠️ ဒီပြုံးက ဇာတ်လမ်းရဲ့ အလှည့်အပြောင်း။",
    p: "⚠️ WARM DAYLIT MEMORY. The same close framing, ⚠️ AND HE IS SMILING NOW — a small, even, "
      + "completely composed smile that does not reach his eyes at all, the eyes still wide and "
      + "still fixed. Flat daylight.",
    u: ["သက်ပိုင်က ဘာမှမပြောဘူး။", "ဇော်ရဲ ပြုံးလိုက်တယ်။ “ငါ လိမ်းပေးမယ်လေ”"] },

  /* ── V · THE NIGHT HE VANISHED ────────────────────────────────────────── */
  { t: "The Night Before the Wedding", l: "ရွာလမ်း", k: "wide", w: [],
    g: "မဏ္ဍပ်ပြင်နေကြ — ညဦးပိုင်း။",
    p: "Wide on a large timber house at dusk with ⚠️ HALF A WEDDING PAVILION UP IN FRONT OF IT — "
      + "bamboo poles lashed at the corners, one span of striped canopy stretched and the rest "
      + "still rolled, six or seven villagers working under a strung bulb. Last pale light in the "
      + "sky.",
    u: ["မင်္ဂလာဆောင်မတိုင်ခင် တစ်ည။",
      "သက်ပိုင်အိမ်မှာ လူတွေ မဏ္ဍပ်ပြင်နေကြတယ်။"] },

  { t: "Around Midnight", c: [[1, "stinger"]], l: "ရွာလမ်း", k: "lane", w: [],
    g: "⚠️ ဇော်ရဲ ပျောက်သွားတဲ့အချိန် — လမ်းက ဗလာ။",
    p: "The village lane at the deepest part of the night, ⚠️ BARE PACKED EARTH RUNNING AWAY INTO "
      + "COMPLETE DARK, every window along it shuttered and unlit. ⚠️ THE ONLY LIGHT IN FRAME IS "
      + "THE FAINT BLUE OF THE SKY between the roofs.",
    u: ["ညသန်းခေါင်လောက်မှာ—", "ဇော်ရဲ ပျောက်သွားတယ်။"] },

  { t: "The Door Stood Open", c: [[1, "stinger"]], l: "ဇော်ရဲ့အခန်း", k: "wide", w: [],
    g: "နောက်နေ့မနက် — တံခါးပွင့်လျက်။",
    p: "Wide on a small village house in flat grey morning light with ⚠️ ITS FRONT DOOR STANDING "
      + "WIDE OPEN AND THE INSIDE OF IT COMPLETELY DARK. The short timber stair down to the earth "
      + "is bare. Nothing else in frame has changed.",
    u: ["နောက်နေ့မနက်မှာ", "သူ့အိမ်တံခါး ဖွင့်ထားတယ်။"] },

  { t: "The Red Htamein Was Gone", c: [[1, "bigstinger"]], l: "ဇော်ရဲ့အခန်း", k: "room", w: [],
    g: "⚠️ အဝတ်တန်းမှာ အနီရောင် မပါတော့ဘူး။",
    p: "Low in Zaw Ye's room in grey morning light: the wooden clothes rail with four or five "
      + "blouses and htameins still hanging on it, ⚠️ AND ONE WIDE BARE GAP IN THE MIDDLE OF THE "
      + "RAIL where the hangers have been pushed apart. ⚠️ EVERY COLOUR LEFT ON THE RAIL IS PALE — "
      + "greens, creams, a washed blue.",
    u: ["အခန်းထဲမှာတော့—",
      "သူ အမြတ်တနိုးထားတဲ့ အနီရောင်ထဘီတစ်ထည် မရှိတော့ဘူး။",
      "မိတ်ကပ်သေတ္တာလည်း မရှိတော့ဘူး။"] },

  { t: "He Married As If Nothing Had Happened", l: "ရွာလမ်း", k: "insert", w: [],
    g: "ခုနစ်နှစ်အရင်က မင်္ဂလာပုံ — အဝေးကနေ။",
    p: "A printed wedding photograph from seven years ago lying on a table and filling the frame: "
      + "⚠️ A GROOM AND A BRIDE SEATED AT THE CENTRE IN FULL MYANMAR WEDDING DRESS WITH PARENTS "
      + "STANDING ON BOTH SIDES, everybody square to the camera. ⚠️ THE PRINT IS SLIGHTLY FADED AND "
      + "THE FACES ARE SMALL. Flat daylight on the paper.",
    u: ["ဇော်ရဲ ဘယ်သွားလဲ ဘယ်သူမှ မသိကြဘူး။",
      "သက်ပိုင်ကတော့ ဘာမှမဖြစ်သလို မင်္ဂလာဆောင်လိုက်တယ်။",
      "ပြီးတော့ မြို့ကို ပြောင်းသွားတယ်။"] },

  { t: "They Thought He Ran Away", l: "ရွာလမ်း", k: "lane", w: [],
    g: "⚠️ ခုနစ်နှစ် ကုန်သွားတယ် — လမ်းက အတူတူပဲ။",
    p: "The village lane in flat overcast daylight with ordinary life along it — a woman carrying "
      + "water, two children running, a dog in the shade, somebody in a doorway. ⚠️ ENTIRELY "
      + "NORMAL, BUSY AND UNREMARKABLE.",
    u: ["ဇော်ရဲကို ဘယ်သူမှ ထပ်မတွေ့တော့ဘူး။",
      "ရွာသားတွေကတော့ ရှက်လို့ ရွာကနေထွက်ပြေးသွားတာပဲ လို့ ထင်ခဲ့ကြတယ်။",
      "ခုနစ်နှစ်ကြာတဲ့အထိ။"] },

  /* ── VI · SEVEN YEARS LATER ───────────────────────────────────────────── */
  { t: "Seven Years Later", l: "ကျွန်တော်တို့အိမ်", k: "wide", w: [],
    g: "ကျွန်တော်တို့အိမ် — မင်္ဂလာပြင်ဆင်နေ။",
    p: "Wide on the main room of an ordinary village house in the evening, ⚠️ HALF SET UP FOR A "
      + "WEDDING — folded gold cloth over the back of a chair, a tray of flowers on the low table, "
      + "boxes stacked against one wall. ⚠️ THE BIG OLD MIRROR HANGS ON THE MAIN WALL ABOVE IT ALL. "
      + "One warm bulb.",
    u: ["ခုနစ်နှစ်အကြာမှာ—", "ကျွန်တော်တို့ရွာမှာ မင်္ဂလာဆောင်တစ်ခုရှိလာတယ်။"] },

  { t: "My Sister's Wedding", l: "ကျွန်တော်တို့အိမ်", k: "sis", w: ["အစ်မ"],
    g: "အစ်မ — မိတ်ကပ်မလိမ်းရသေး။",
    p: "Close on the sister sitting in the main room the evening before her wedding, ⚠️ HER FACE "
      + "COMPLETELY BARE AND HER HAIR STILL DOWN, in an ordinary house blouse. She is looking at "
      + "something off frame and her mouth is level. Warm bulb light from above.",
    u: ["ကျွန်တော့်အစ်မရဲ့ မင်္ဂလာဆောင်။"] },

  { t: "A Makeup Artist at the Door", l: "ကျွန်တော်တို့အိမ်", k: "door", w: ["ညီလေး"],
    g: "⚠️ တံခါးဖွင့်တဲ့လူက ကျွန်တော်။",
    p: "From inside the house looking out through the open front doorway into the night: ⚠️ THE "
      + "NARRATOR'S SHOULDER AND THE BACK OF HIS HEAD FILL THE NEAR LEFT OF FRAME, dark and out of "
      + "focus, his hand still on the door edge. ⚠️ BEYOND HIM THE DOORWAY IS A BRIGHT RECTANGLE OF "
      + "WARM LIGHT ON BARE EARTH AND THEN BLACK.",
    u: ["မင်္ဂလာမဆောင်ခင်ညမှာ",
      "ကျွန်တော်တို့အိမ်ကို မိတ်ကပ်ဆရာတစ်ယောက် ရောက်လာတယ်။",
      "ကျွန်တော်က တံခါးဖွင့်ပေးခဲ့တာ။"] },

  { t: "Tall, With Long Hair", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "door", w: ["ဇော်ရဲ"],
    g: "⚠️ ဒီညမှာ သူက သာမန်လူတစ်ယောက်လိုပဲ ပေါ်ရမယ်။",
    p: "Framed in the open doorway from inside: ⚠️ ZAW YE STANDING ON THE EARTH OUTSIDE, FULL "
      + "FIGURE, TALL AND STILL, his long black hair loose past his shoulders. ⚠️ THE WARM LIGHT "
      + "FROM THE HOUSE FALLS ON HIM FROM THE FRONT and the night is flat black behind him. He is "
      + "holding a hard-sided case down at his side.",
    u: ["တံခါးရှေ့မှာ—", "အမျိုးသားတစ်ယောက် ရပ်နေတယ်။", "အရပ်ရှည်ရှည်။ ဆံပင်ရှည်ရှည်။"] },

  { t: "Pink Blouse, Red Htamein", l: "ကျွန်တော်တို့အိမ်", k: "insert", w: ["ဇော်ရဲ"],
    g: "⚠️ အနီရောင်ထဘီ — ပထမဆုံး ပြန်မြင်ရတာ။",
    p: "Tight insert on Zaw Ye from the shoulder to the knee in the doorway light: ⚠️ A FITTED "
      + "PALE PINK BLOUSE AND, BELOW IT, THE DEEP RED FLORAL HTAMEIN, the same cloth as the "
      + "reference, the fold at the waist neat and exact. One hand rests flat against the side of "
      + "the skirt.",
    u: ["ပန်းနုရောင်အင်္ကျီ။", "အနီရောင်ထဘီ။"] },

  { t: "A Carefully Painted Face", l: "ကျွန်တော်တို့အိမ်", k: "zaw", w: ["ဇော်ရဲ"],
    g: "⚠️ မိတ်ကပ်က သပ်ရပ်တယ် — ကြောက်စရာ ဘာမှမရှိဘူး။",
    p: "Close on Zaw Ye in the doorway, ⚠️ HIS FACE BEAUTIFULLY AND CAREFULLY MADE UP — soft filled "
      + "brows, a clean dark line along the lashes, an even warm base, ⚠️ AND CLEAR RED LIPSTICK "
      + "SITTING NEATLY INSIDE THE EDGES OF HIS MOUTH. His expression is polite, patient and "
      + "unhurried. Warm house light full on him.",
    u: ["မျက်နှာကို သပ်သပ်ရပ်ရပ် မိတ်ကပ်လိမ်းထားတယ်။", "အသံက နူးညံ့တယ်။"] },

  { t: "I'm Here for the Bride", l: "ကျွန်တော်တို့အိမ်", k: "nar", w: ["ညီလေး"],
    g: "အမေခေါ်ထားတာထင်လို့ ဝင်ခိုင်းလိုက်တယ်။",
    p: "Close on the narrator just inside the door, ⚠️ HIS FACE DOING ALMOST NOTHING — eyebrows up a "
      + "little, mouth slightly open, a young man taking somebody at their word. ⚠️ HIS HAND IS "
      + "STILL ON THE DOOR EDGE AT THE BOTTOM OF FRAME. Warm bulb light.",
    u: ["“သတို့သမီး မိတ်ကပ်လိမ်းဖို့ပါ”",
      "အမေက ခေါ်ထားတာထင်လို့ ကျွန်တော် ဝင်ခိုင်းလိုက်တယ်။"] },

  { t: "An Hour at Her Face", l: "ကျွန်တော်တို့အိမ်", k: "wide", w: ["ဇော်ရဲ", "အစ်မ"],
    g: "⚠️ တစ်နာရီ — သူ့လက်ရာ အကောင်းဆုံး။",
    p: "The sister seated on a low stool in the main room with Zaw Ye standing over her, ⚠️ ONE OF "
      + "HIS HANDS UNDER HER CHIN AND A BRUSH IN THE OTHER, the open makeup case on the table "
      + "beside them. ⚠️ HER EYES ARE CLOSED AND HER FACE IS TIPPED UP TO HIM. One warm bulb, the "
      + "corners of the room dark.",
    u: ["သူက အစ်မကို တစ်နာရီလောက် မိတ်ကပ်လိမ်းပေးတယ်။"] },

  { t: "He Leaned to Her Ear", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "insert", w: ["ဇော်ရဲ", "အစ်မ"],
    g: "⚠️ နားနားကပ်ပြီး တိုးတိုးပြော — စကားသံ မမြင်ရဘူး၊ ခပ်နီးနီး ပုံစံပဲ။",
    p: "Tight insert from behind and to one side: ⚠️ ZAW YE'S FACE LOWERED CLOSE TO THE SIDE OF THE "
      + "SISTER'S HEAD, his mouth a few centimetres from her ear and his lips barely parted, her "
      + "gold earring bright between them. ⚠️ HER EYE, AT THE EDGE OF FRAME, IS OPEN. Warm bulb "
      + "light, everything else dark.",
    u: ["ပြီးတော့—", "အစ်မရဲ့နားနားကို ကပ်ပြီး တစ်ခုခု တိုးတိုးပြောလိုက်တယ်။"] },

  { t: "Her Face Went White", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "sis", w: ["အစ်မ"],
    g: "⚠️ မိတ်ကပ်က လှနေဆဲ — မျက်နှာက ပြောင်းသွားတယ်။",
    p: "Close on the sister, ⚠️ THE FINISHED BRIDAL MAKEUP PERFECT ON HER FACE AND THE FACE "
      + "UNDERNEATH IT GONE COMPLETELY STILL — eyes fixed straight ahead and unblinking, mouth "
      + "slightly open, the colour drained out from under the base. Warm bulb light.",
    u: ["အစ်မမျက်နှာ ဖြူသွားတယ်။"] },

  { t: "Don't Trust Your Husband", l: "ကျွန်တော်တို့အိမ်", k: "sis", w: ["အစ်မ", "ညီလေး"],
    g: "အစ်မပြောပြတဲ့ စကားတစ်ခွန်း။",
    p: "The sister in the foreground turned half away, ⚠️ AND THE NARRATOR BEHIND HER AND SOFT, "
      + "sitting back on his heels with his head tilted. ⚠️ SHE IS LOOKING AT THE FLOOR AND HE IS "
      + "LOOKING AT HER. Warm bulb light, the door dark and shut behind them both.",
    u: ["မိတ်ကပ်ဆရာ ထွက်သွားတော့ ကျွန်တော်မေးတယ်။ “ဘာပြောသွားတာလဲ”",
      "အစ်မက ခဏတိတ်နေပြီးမှ—", "“ငါ့ယောကျ်ားကို မယုံနဲ့တဲ့”"] },

  { t: "Do Not Photograph in Front of a Mirror", c: [[1, "stinger"]], l: "ကျွန်တော်တို့အိမ်", k: "sis", w: ["အစ်မ"],
    g: "⚠️ ဒုတိယစကား — ဇာတ်လမ်းရဲ့ စည်းမျဉ်း။",
    p: "Close on the sister, ⚠️ HER EYES COMING UP OFF THE FLOOR AND STOPPING SOMEWHERE PAST THE "
      + "CAMERA, her mouth still. ⚠️ OVER HER SHOULDER AND WELL OUT OF FOCUS, THE BIG MIRROR ON THE "
      + "WALL CATCHES THE BULB as one soft bright shape. Warm light.",
    u: ["ကျွန်တော် ရယ်လိုက်တယ်။ “ဘာဆိုင်လို့လဲ”", "အစ်မ မရယ်ဘူး။",
      "“မင်္ဂလာဓာတ်ပုံရိုက်တဲ့အခါ မှန်ရှေ့မှာ မရိုက်နဲ့တဲ့”"] },

  /* ── VII · THE PHOTOGRAPH ─────────────────────────────────────────────── */
  { t: "The Wedding Was Ordinary", l: "ကျွန်တော်တို့အိမ်", k: "wide",
    w: ["အစ်မ", "အစ်မ့ယောကျ်ား"],
    g: "မင်္ဂလာနေ့ — ပုံမှန်အတိုင်းပဲ။",
    p: "Wide on a village wedding in full swing under a striped pavilion in the middle of the day: "
      + "⚠️ THE BRIDE AND GROOM SEATED AT THE CENTRE IN FULL MYANMAR WEDDING DRESS with thirty "
      + "guests around them, food on the tables, everybody talking. Bright, warm, crowded and "
      + "entirely ordinary.",
    u: ["နောက်နေ့ မင်္ဂလာဆောင်က ပုံမှန်အတိုင်းပဲ။"] },

  { t: "She Screamed at the Photographs", l: "ကျွန်တော်တို့အိမ်", k: "sis", w: ["အစ်မ"],
    g: "⚠️ ညနေ — ဖုန်းထဲက ပုံတွေ ပြန်ကြည့်နေရင်း။",
    p: "Close on the sister that evening, ⚠️ A LIT PHONE HELD UP IN BOTH HANDS AT THE BOTTOM OF "
      + "FRAME throwing its light up under her chin. ⚠️ HER MOUTH IS WIDE OPEN AND HER EYES ARE "
      + "FIXED ON THE SCREEN. The room behind her is dark.",
    u: ["ညနေဘက် ဓာတ်ပုံတွေပြန်ကြည့်တော့—", "အစ်မ ရုတ်တရက် အော်တယ်။"] },

  { t: "There Was a Mirror Behind Them", c: [[1, "stinger"]], l: "ကျွန်တော်တို့အိမ်", k: "photo",
    w: ["အစ်မ", "အစ်မ့ယောကျ်ား"],
    g: "⚠️ ဓာတ်ပုံထဲမှာ နောက်က မှန်ကြီး ပါနေတယ်။",
    p: "⚠️ A WEDDING PHOTOGRAPH FILLING THE FRAME, seen as a picture on a lit phone screen. In it: "
      + "the bride and groom standing together in the main room in full wedding dress, ⚠️ AND ON "
      + "THE WALL DIRECTLY BEHIND THEM THE BIG OLD MIRROR, large and clearly in shot. The "
      + "photograph is sharp and ordinary.",
    u: ["ဓာတ်ပုံတစ်ပုံမှာ—", "သတို့သားနဲ့ သတို့သမီးနောက်က မှန်ကြီးတစ်ချပ် ပါနေတယ်။"] },

  { t: "Two in the Room, Three in the Glass", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "photo",
    w: ["အစ်မ", "အစ်မ့ယောကျ်ား"],
    g: "⚠️ ရေတွက်ပါ — ရှေ့မှာ ၂ ယောက်၊ မှန်ထဲမှာ ၃ ယောက်။",
    p: "⚠️ THE SAME PHOTOGRAPH, CLOSER. ⚠️ COUNT TWICE AND GET DIFFERENT NUMBERS: IN FRONT OF THE "
      + "GLASS THERE ARE EXACTLY TWO PEOPLE, the bride and the groom, standing side by side with "
      + "their backs partly to the mirror. ⚠️ INSIDE THE GLASS THERE ARE EXACTLY THREE — their two "
      + "reflections, and a third full-length figure standing between them.",
    u: ["ဓာတ်ပုံထဲမှာတော့ လူနှစ်ယောက်ပဲ။", "ဒါပေမယ့်—", "မှန်ထဲမှာ လူသုံးယောက်။"] },

  { t: "Between Them, in the Red Htamein", l: "ကျွန်တော်တို့အိမ်", k: "photo", w: ["ဇော်ရဲ"],
    g: "⚠️ မှန်ထဲက တတိယလူ — မနေ့ညက မိတ်ကပ်ဆရာ။",
    p: "⚠️ TIGHT ON THE MIRROR INSIDE THE PHOTOGRAPH. Between the two reflected shoulders stands a "
      + "third figure, ⚠️ FULL LENGTH AND FACING OUT OF THE GLASS — long black hair, a pale pink "
      + "blouse and the deep red floral htamein, the same cloth as the night before. ⚠️ EVERYTHING "
      + "HERE IS A PHOTOGRAPH OF A REFLECTION and carries the grain of the print.",
    u: ["အစ်မတို့နှစ်ယောက်ကြားမှာ—", "မနေ့ညက မိတ်ကပ်ဆရာ။", "အနီရောင်ထဘီနဲ့။"] },

  { t: "Not the Face From That Night", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "photo", w: ["ဇော်ရဲ"],
    g: "⚠️ ဒီမျက်နှာက မနေ့ညကလို မဟုတ်တော့ဘူး။",
    p: "⚠️ CLOSER STILL ON THE REFLECTED FACE INSIDE THE PHOTOGRAPH. ⚠️ ONE CHEEK HAS FALLEN IN SO "
      + "THE BONE ABOVE IT STANDS OUT SHARPLY while the other side of the face is ordinary, and the "
      + "skin across the whole of it is a flat grey-white. The eyes are open and level. ⚠️ THE "
      + "IMAGE IS SOFT AND GRAINY BECAUSE IT IS A PHOTOGRAPH OF A MIRROR.",
    u: ["ဒါပေမယ့်—", "သူ့မျက်နှာက မနေ့ညကလို မဟုတ်တော့ဘူး။", "ပါးတစ်ဖက် ချိုင့်ဝင်နေတယ်။"] },

  { t: "Red Drawn Up to the Ears", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "photo", w: ["ဇော်ရဲ"],
    g: "⚠️ နှုတ်ခမ်းနီနဲ့ ဆွဲထားတာ — အရေပြားပေါ်မှာ ဆေးပဲ။",
    p: "⚠️ TIGHT ON THE MOUTH AND THROAT IN THE PHOTOGRAPH. ⚠️ A BROAD DARK BAND RUNS RIGHT ROUND "
      + "THE THROAT, the skin over it smooth and even. ⚠️ THE RED LIPSTICK HAS BEEN CARRIED ON PAST "
      + "BOTH CORNERS OF THE MOUTH AND UP THE CHEEKS ALMOST TO THE EARS IN TWO LONG PAINTED "
      + "STROKES — thick, slightly uneven greasepaint sitting on the surface of smooth skin, ⚠️ AND "
      + "THE MOUTH BENEATH IT IS CLOSED IN ITS OWN ORDINARY SHAPE.",
    u: ["လည်ပင်းမှာ အမည်းရောင်ကြိုးရာကြီး။", "နှုတ်ခမ်းမှာတော့—",
      "အနီရောင်နှုတ်ခမ်းနီကို နားရွက်နားအထိ ဆွဲထားသလို ပြုံးနေတယ်။"] },

  { t: "Mother Said His Name", c: [[1, "stinger"]], l: "ကျွန်တော်တို့အိမ်", k: "mother", w: ["အမေ"],
    g: "⚠️ အမေက မှတ်မိသွားတယ် — ဖုန်း လက်ထဲက ကျသွားတယ်။",
    p: "Close on the mother, ⚠️ HER HAND STILL HALF OPEN AND EMPTY IN THE AIR AT THE BOTTOM OF "
      + "FRAME and a phone lying face up on the floorboards beneath it, still lit. ⚠️ HER MOUTH IS "
      + "OPEN AND HER EYES ARE WIDE AND SHE IS LOOKING DOWN AT IT. Warm bulb light from above.",
    u: ["အမေက ဓာတ်ပုံမြင်ပြီး ဖုန်းကို လွှတ်ချလိုက်တယ်။", "ပြီးတော့— “ဇော်ရဲ…” လို့ ပြောတယ်။",
      "အဲဒီနေ့မှ ကျွန်တော် မနှင်းဆီအကြောင်း သိခဲ့တာ။"] },

  /* ── VIII · THE HUSBAND ───────────────────────────────────────────────── */
  { t: "Three Days After the Wedding", l: "ကျွန်တော်တို့အိမ်", k: "insert", w: [],
    g: "ဖုန်းပိတ်ထားတယ် — ခေါ်လို့မရဘူး။",
    p: "Tight insert on a phone held in one hand, ⚠️ THE SCREEN SHOWING A CALL THAT HAS NOT "
      + "CONNECTED — the lettering on it blurred soft and past reading, only the shape of the "
      + "screen legible. The room behind the hand is dim.",
    u: ["ဒါပေမယ့် ဇာတ်လမ်းက အဲဒီမှာ မပြီးဘူး။",
      "အစ်မ မင်္ဂလာဆောင်ပြီး သုံးရက်အကြာမှာ— သူ့ယောကျ်ား ပျောက်သွားတယ်။",
      "ဖုန်းပိတ်ထားတယ်။"] },

  { t: "The Car by the Old Pond", c: [[1, "stinger"]], l: "ရေကန်ဟောင်း", k: "wide", w: [],
    g: "⚠️ ကားက ရေကန်ဘေးမှာ — တံခါးပွင့်လျက်။",
    p: "Wide on the old pond in flat grey daylight with ⚠️ A SMALL SALOON CAR PARKED IN THE LONG "
      + "GRASS AT THE WATER'S EDGE, one door standing open. The grass around it is flattened in a "
      + "single track back to the dirt road. The water lies flat and dark beyond.",
    u: ["ကားကတော့ ရွာအပြင်က ရေကန်ဟောင်းဘေးမှာ တွေ့တယ်။", "ကားထဲမှာ လူမရှိဘူး။"] },

  { t: "A Lipstick on the Back Seat", c: [[1, "bigstinger"]], l: "ရေကန်ဟောင်း", k: "insert", w: [],
    g: "⚠️ နောက်ခုံပေါ်မှာ နှုတ်ခမ်းနီတစ်ချောင်း။",
    p: "Tight insert through an open car door onto the back seat: ⚠️ ONE OPENED RED LIPSTICK LYING "
      + "ALONE IN THE MIDDLE OF THE GREY UPHOLSTERY, the bullet wound up and the cap off beside it. "
      + "⚠️ THE SEAT AROUND IT IS CLEAN AND FLAT AND EMPTY. Grey daylight from the door.",
    u: ["ဒါပေမယ့် နောက်ခုံပေါ်မှာ—", "အနီရောင် နှုတ်ခမ်းနီတစ်ချောင်း ရှိနေတယ်။"] },

  { t: "She Had Been Hiding Something", l: "ကျွန်တော်တို့အိမ်", k: "sis", w: ["အစ်မ", "ညီလေး"],
    g: "ကျွန်တော် အတင်းမေးတော့မှ ဝန်ခံတယ်။",
    p: "The sister sitting on the floor of the main room with her back against the wall, ⚠️ HER "
      + "KNEES UP AND HER FACE TURNED AWAY TOWARDS THE SHUTTERS. ⚠️ THE NARRATOR IS CROUCHED IN "
      + "FRONT OF HER AND SOFT, seen from behind one shoulder. One warm bulb.",
    u: ["အစ်မက အဲဒီညကတည်းက တစ်ခုခုကို ဖုံးထားမှန်း ကျွန်တော်သိတယ်။",
      "ကျွန်တော် အတင်းမေးတော့မှ— အစ်မက ဝန်ခံတယ်။"] },

  { t: "Someone Else All Along", c: [[1, "stinger"]], l: "ကျွန်တော်တို့အိမ်", k: "sis", w: ["အစ်မ"],
    g: "⚠️ သူ သိထားပြီးသား — မင်္ဂလာမဆောင်ခင်ကတည်းက။",
    p: "Close on the sister, ⚠️ HER FACE DRY AND FLAT AND HER EYES DOWN, the mouth moving on a "
      + "plain admission. ⚠️ THE BRIDAL MAKEUP IS GONE AND HER FACE IS BARE. Warm bulb light from "
      + "one side, the other side of her face in shadow.",
    u: ["သူ့ယောကျ်ားဟာ မင်္ဂလာမဆောင်ခင်ကတည်းက တခြားမိန်းမတစ်ယောက်နဲ့ တွဲနေခဲ့တာ။",
      "အစ်မလည်း သိတယ်။"] },

  { t: "Shame Kept the Wedding On", l: "ကျွန်တော်တို့အိမ်", k: "insert", w: [],
    g: "မဖျက်ခဲ့တာ — မိသားစုအရှက်ကြောင့်။",
    p: "Tight insert on the gold bridal jacket hanging on a nail on the timber wall, ⚠️ STILL ON "
      + "ITS HANGER AND STILL PERFECT, the gold thread catching the bulb. A dark shuttered window "
      + "beyond it. Warm light, the rest of the wall dim.",
    u: ["ဒါပေမယ့်—", "မိသားစုအရှက်ကြောင့် မင်္ဂလာပွဲ မဖျက်ခဲ့တာ။"] },

  { t: "He Came to Warn Her", l: "ကျွန်တော်တို့အိမ်", k: "nar", w: ["ညီလေး"],
    g: "⚠️ ခြောက်ဖို့ လာတာ မဟုတ်ဘူး — သတိပေးဖို့။",
    p: "Close on the narrator, ⚠️ HIS FACE CHANGING AS HE ARRIVES AT IT — the eyebrows going up in "
      + "the middle, the mouth opening slightly, the eyes fixed on nothing in particular. Warm "
      + "bulb light, the room soft and dark behind him.",
    u: ["အဲဒီအချိန်မှာ မနှင်းဆီပြောခဲ့တဲ့စကားကို ကျွန်တော် နားလည်သွားတယ်။",
      "“ငါ့လို မယုံနဲ့”",
      "သူက အစ်မကို ခြောက်ဖို့လာတာ မဟုတ်ဘူး။ သတိပေးဖို့လာတာ။"] },

  /* ── IX · THE HUT ─────────────────────────────────────────────────────── */
  { t: "Then Who Took Him", l: "ရေကန်ဟောင်း", k: "wide", w: ["ညီလေး"],
    g: "ကျွန်တော် ရေကန်ဆီ ကိုယ်တိုင် သွားတယ်။",
    p: "Wide on the dirt track coming down to the old pond in flat grey daylight, ⚠️ ONE SMALL "
      + "FIGURE WALKING AWAY FROM CAMERA DOWN IT towards the water with his hands at his sides. "
      + "Reeds and long grass on both sides. Overcast.",
    u: ["ဒါဆို—", "အစ်မယောကျ်ားကို ဘယ်သူခေါ်သွားတာလဲ။",
      "အဲဒါကို သိဖို့ ကျွန်တော် ရေကန်ဟောင်းဆီ သွားခဲ့တယ်။"] },

  { t: "The Abandoned Hut", l: "တဲအဟောင်း", k: "wide", w: [],
    g: "ရေကန်ဘေးက တဲအဟောင်း။",
    p: "Wide on a small abandoned bamboo-and-timber hut standing in waist-high grass at the edge "
      + "of the pond, ⚠️ THE DOORWAY A BLACK RECTANGLE WITH NO DOOR IN IT and half the thatch "
      + "fallen through. Flat grey daylight, the water just visible beyond one corner.",
    u: ["ရေကန်ဘေးမှာ စွန့်ပစ်ထားတဲ့ တဲအဟောင်းတစ်လုံးရှိတယ်။"] },

  { t: "A Cracked Mirror Inside", c: [[1, "stinger"]], l: "တဲအဟောင်း", k: "hut", w: [],
    g: "⚠️ တဲထဲမှာ မှန်အက်ကြီးတစ်ချပ်။",
    p: "Inside the hut in grey daylight from the doorway: ⚠️ A LARGE OLD MIRROR PROPPED AGAINST THE "
      + "BACK WALL WITH A SINGLE CRACK RUNNING ACROSS IT CORNER TO CORNER, the glass grey with dust "
      + "and returning only the dim empty room. Bare plank floor in front of it.",
    u: ["တဲထဲမှာ—", "မှန်အက်ကြီးတစ်ချပ်။"] },

  { t: "A Loose Board Beneath It", c: [[1, "stinger"]], l: "တဲအဟောင်း", k: "insert", w: ["ညီလေး"],
    g: "မှန်အောက်က ကြမ်းပြားတစ်ချပ် လှုပ်နေတယ်။",
    p: "Tight insert straight down on the plank floor directly in front of the mirror: ⚠️ ONE BOARD "
      + "SITTING PROUD OF THE OTHERS BY A FINGER'S WIDTH, its end lifted and the nail holes empty. "
      + "⚠️ A YOUNG MAN'S HAND IS ALREADY ON IT at the edge of frame. Grey daylight from behind.",
    u: ["မှန်အောက်မှာ သစ်သားကြမ်းခင်းတစ်ချပ်က လှုပ်နေတယ်။", "ကျွန်တော် ဖွင့်ကြည့်လိုက်တော့—"] },

  { t: "A Makeup Case and a Red Htamein", l: "တဲအဟောင်း", k: "insert", w: [],
    g: "⚠️ ကြမ်းအောက်မှာ — အဝတ်၊ သေတ္တာ၊ ထဘီ။",
    p: "Tight insert straight down into the opened cavity under the floor: ⚠️ A SCUFFED DARK RED "
      + "MAKEUP CASE LYING ON ITS SIDE, and folded beneath it the deep red floral htamein, the "
      + "colour still strong under seven years of dust. ⚠️ THE FRAME HOLDS THE CASE, THE CLOTH AND "
      + "THE EDGES OF THE BOARDS. Grey daylight from directly above.",
    u: ["အောက်မှာ အဝတ်အစားဟောင်းတချို့။", "မိတ်ကပ်သေတ္တာ။ အနီရောင်ထဘီ။"] },

  { t: "And a Length of Old Rope", c: [[1, "bigstinger"]], l: "တဲအဟောင်း", k: "insert", w: [],
    g: "⚠️ ကြိုးတစ်ချောင်း — အောက်ပိုင်းကို မှောင်ထဲမှာ ထားပါ။",
    p: "Tight insert deeper into the cavity, ⚠️ A LENGTH OF OLD GREY ROPE LYING COILED AND STILL "
      + "ON THE EARTH at the near edge of the light, its fibres split and furred with age. ⚠️ "
      + "BEYOND IT THE CAVITY GOES STRAIGHT INTO BLACK AND THE LIGHT REACHES NO FURTHER. The frame "
      + "is board, earth and rope.",
    u: ["ပြီးတော့—", "အရိုးစုတစ်ခု။", "လည်ပင်းအရိုးမှာ ကြိုးတစ်ချောင်း ငြိနေတယ်။"] },

  { t: "He Did Not Run Away", l: "တဲအဟောင်း", k: "wide", w: [],
    g: "ရဲရောက်လာတယ် — အတည်ပြုလိုက်တယ်။",
    p: "Wide on the outside of the hut in the late afternoon with ⚠️ THREE POLICE OFFICERS AND TWO "
      + "VILLAGERS STANDING IN THE GRASS AROUND THE DOORWAY, one of them writing on a board. A "
      + "plastic sheet lies folded by the step. Flat grey light going blue.",
    u: ["ရဲတွေကို ခေါ်လိုက်ကြတယ်။ စစ်ဆေးကြတယ်။",
      "နောက်ဆုံး အတည်ပြုနိုင်ခဲ့တယ်။ အရိုးစုက— ဇော်ရဲ။",
      "ဇော်ရဲ ရွာကနေ ထွက်ပြေးသွားတာ မဟုတ်ဘူး။ အသတ်ခံထားရတာ။"] },

  { t: "One Line in His Own Hand", c: [[1, "stinger"]], l: "တဲအဟောင်း", k: "insert", w: [],
    g: "⚠️ မိတ်ကပ်သေတ္တာထဲက စာရွက်အဟောင်း။",
    p: "Tight insert straight down on a small square of old folded paper opened out on the lid of "
      + "the makeup case, ⚠️ ONE SHORT HANDWRITTEN LINE ACROSS THE MIDDLE OF IT IN BLUE INK. ⚠️ THE "
      + "HANDWRITING IS SOFT AND PARTLY RUBBED AWAY AND DOES NOT RESOLVE INTO READABLE WORDS. Grey "
      + "daylight from above, the paper foxed brown at the folds.",
    u: ["ဒါပေမယ့်— ဘယ်သူသတ်ခဲ့တာလဲ။",
      "အဖြေကို အရိုးစုနားက မိတ်ကပ်သေတ္တာထဲမှာ တွေ့တယ်။",
      "စာရွက်အဟောင်းလေးတစ်ရွက်။ ဇော်ရဲရဲ့ လက်ရေး။"] },

  { t: "Thet Paing Wants to See Me Tonight", l: "ရေကန်ဟောင်း", k: "wide", w: [],
    g: "⚠️ စာထဲက စကား — အဲဒီည ရေကန်ဘေး။",
    p: "Wide on the old pond at night, ⚠️ THE BANK BARE AND THE WATER COMPLETELY FLAT, one dirt "
      + "path coming down to the edge and stopping. ⚠️ THE FRAME HOLDS THE GRASS, THE PATH AND THE "
      + "WATER. Faint starlight, the far bank lost in the dark.",
    u: ["စာတစ်ကြောင်းပဲ ရေးထားတယ်။",
      "“သက်ပိုင်က ဒီည ကျွန်တော့်ကို နောက်ဆုံးတစ်ခါတွေ့ချင်တယ်တဲ့။”"] },

  /* ── X · THE RING ─────────────────────────────────────────────────────── */
  { t: "Five Years in Thailand", l: "ရွာလမ်း", k: "insert", w: [],
    g: "ရဲတွေ ရှာတယ် — ဒါပေမယ့် သူက နိုင်ငံပြင်ပ။",
    p: "Tight insert on an open police file on a desk: ⚠️ A PRINTED FORM WITH A SMALL PASSPORT "
      + "PHOTOGRAPH CLIPPED TO THE CORNER OF IT, the man in the photograph looking straight out. "
      + "⚠️ THE TYPED LINES ON THE FORM ARE SOFT AND PAST READING. A ballpoint pen lies across it. "
      + "Flat office light.",
    u: ["သက်ပိုင်။ ခုနစ်နှစ်အရင်က မင်္ဂလာဆောင်ပြီး ရွာကနေ ထွက်သွားတဲ့လူ။",
      "ရဲတွေ သူ့ကို ရှာကြတယ်။",
      "ဒါပေမယ့် သူက ထိုင်းနိုင်ငံဘက် ထွက်သွားတာ ငါးနှစ်ကျော်ပြီလို့ သိရတယ်။"] },

  { t: "A Letter With No Sender", c: [[1, "stinger"]], l: "ကျွန်တော်တို့အိမ်", k: "insert", w: [],
    g: "⚠️ စာအိတ်ပေါ်မှာ နာမည် မရှိဘူး။",
    p: "Tight insert straight down on a plain brown envelope lying on a timber floor just inside a "
      + "doorway, ⚠️ THE FRONT OF IT COMPLETELY BLANK AND THE PAPER CLEAN. One corner is lifted "
      + "where it has been opened. Flat daylight from the doorway across it.",
    u: ["အမှုက မပြီးဘူး။",
      "ဒါပေမယ့် ကျွန်တော်ကတော့ ဇော်ရဲကို သက်ပိုင် သတ်ခဲ့တာလို့ ယုံခဲ့တယ်။ မှားတယ်။",
      "တစ်ပတ်အကြာမှာ ကျွန်တော့်အိမ်ကို စာတစ်စောင်ရောက်လာတယ်။ ပို့သူနာမည်မရှိဘူး။"] },

  { t: "Their Wedding Photograph", l: "ကျွန်တော်တို့အိမ်", k: "photo",
    w: ["ကိုသက်ပိုင်", "သက်ပိုင့်အဖေ"],
    g: "⚠️ ခုနစ်နှစ်အရင်က သက်ပိုင့် မင်္ဂလာပုံ။",
    p: "⚠️ AN OLD PRINTED WEDDING PHOTOGRAPH FILLING THE FRAME, held flat in two hands. In it: a "
      + "groom and a bride seated at the centre in full Myanmar wedding dress, ⚠️ AND STANDING IN A "
      + "ROW BEHIND AND BESIDE THEM, FOUR PARENTS, all square to the camera. ⚠️ THE PRINT IS FADED, "
      + "SLIGHTLY GREEN WITH AGE, AND THE FACES ARE SMALL.",
    u: ["အထဲမှာ— ဓာတ်ပုံတစ်ပုံ။", "ခုနစ်နှစ်အရင်က သက်ပိုင်ရဲ့ မင်္ဂလာဓာတ်ပုံ။",
      "သတို့သား၊ သတို့သမီး။ ဘေးမှာ မိဘတွေ။"] },

  { t: "Then I Saw the Hand", l: "ကျွန်တော်တို့အိမ်", k: "photo", w: ["သက်ပိုင့်အဖေ"],
    g: "⚠️ သတို့သားအဖေရဲ့ လက် — ဒီတစ်ခုပဲ ကြည့်ပါ။",
    p: "⚠️ TIGHT ON ONE SMALL AREA OF THE OLD PHOTOGRAPH: the groom's father's right hand resting "
      + "on the back of a chair, ⚠️ THE HAND ITSELF FILLING MOST OF THE FRAME NOW AND CARRYING THE "
      + "COARSE GRAIN OF A BLOWN-UP PRINT. The rest of the photograph is soft and out of focus "
      + "around it.",
    u: ["ကျွန်တော် အစက ဘာမှမမြင်ဘူး။", "နောက်မှ—", "သတို့သားအဖေရဲ့ လက်ကို သတိထားမိတယ်။"] },

  { t: "A Silver Ring With a Black Stone", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "insert",
    w: ["ငွေလက်စွပ်"],
    g: "⚠️ ဒီလက်စွပ်ကို မှတ်ထားပါ။",
    p: "⚠️ TIGHT INSERT ON THE RING ITSELF, filling the frame: a heavy man's silver band set with "
      + "one flat oval black stone, the silver worn smooth on top and darkened in the grooves, the "
      + "stone opaque and polished. ⚠️ THE SETTING'S CLAWS ARE VISIBLY SPLAYED ON ONE SIDE. Even "
      + "light, plain surface beneath.",
    u: ["လက်မှာ အနက်ရောင်ကျောက်ပါတဲ့ ငွေလက်စွပ်တစ်ကွင်း။"] },

  { t: "Not the Son", l: "ရေကန်ဟောင်း", k: "insert", w: [],
    g: "⚠️ ရဲစာရင်းထဲက ပစ္စည်း — ကျောက်တစ်လုံး။",
    p: "Tight insert straight down on a small clear evidence bag lying on a metal table, ⚠️ ONE "
      + "FLAT OVAL BLACK STONE INSIDE IT AND NOTHING ELSE, the plastic creased around it. ⚠️ THE "
      + "LABEL ON THE BAG IS SOFT AND PAST READING. Flat even light from above.",
    u: ["ကျွန်တော် ရေကန်ဘေးမှာ တွေ့ခဲ့တဲ့ ဇော်ရဲရဲ့အရိုးစုကို ပြန်သတိရတယ်။",
      "သူ့လက်ထဲမှာ တစ်ခုခု ဆုပ်ထားခဲ့တာ။",
      "ရဲတွေ သိမ်းသွားတဲ့ ပစ္စည်းစာရင်းထဲမှာ— အနက်ရောင်ကျောက်တစ်လုံး။"] },

  { t: "He Used His Son's Name", l: "ရေကန်ဟောင်း", k: "father", w: ["သက်ပိုင့်အဖေ"],
    g: "⚠️ သတ်ခဲ့တာက အဖေ — သားရဲ့နာမည်ကို သုံးခဲ့တာ။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Thet Paing's father standing outside in the afternoon, "
      + "⚠️ LOOKING STEADILY AT SOMEBODY OFF FRAME WITH A COMPLETELY LEVEL EXPRESSION — mouth flat, "
      + "brows level, eyes patient. ⚠️ HIS RIGHT HAND IS RAISED AT THE BOTTOM OF FRAME AND THE "
      + "SILVER RING IS ON IT. Green light behind him.",
    u: ["သက်ပိုင် မဟုတ်ဘူး။ သက်ပိုင်ရဲ့အဖေ။",
      "သားဖြစ်သူနဲ့ ဇော်ရဲတို့ရဲ့အကြောင်းကို သူ သိသွားခဲ့တာ။",
      "မင်္ဂလာပွဲမတိုင်ခင်ညမှာ ဇော်ရဲကို သက်ပိုင်နာမည်သုံးပြီး ရေကန်ဘေးခေါ်ခဲ့တာ။"] },

  /* ── XI · HE CAME BACK ────────────────────────────────────────────────── */
  { t: "Why Did He Come Back After Seven Years", l: "ကျွန်တော်တို့အိမ်", k: "mirror", w: [],
    g: "⚠️ မေးခွန်းတစ်ခု ကျန်နေသေးတယ်။",
    p: "⚠️ THE BIG MIRROR SQUARE ON AND FILLING THE FRAME at night, the glass holding the "
      + "reflection of the empty lit main room behind the camera. ⚠️ THE SURFACE IS CLEAN AND WHOLE "
      + "AND NOTHING STANDS IN IT. One warm bulb burning out of shot lays a single highlight down "
      + "the glass.",
    u: ["အဲဒီနောက်— ဇော်ရဲ ပြန်မလာတော့ဘူး။",
      "ဒါပေမယ့် မေးစရာတစ်ခု ကျန်သေးတယ်။",
      "ခုနစ်နှစ်ကြာပြီးမှ ဇော်ရဲ ဘာလို့ ပြန်ပေါ်လာတာလဲ။"] },

  { t: "On the Tenth Day He Came Home", c: [[1, "stinger"]], l: "ကျွန်တော်တို့အိမ်", k: "door", w: ["အစ်မ့ယောကျ်ား"],
    g: "⚠️ ဆယ်ရက်မြောက်နေ့ — ခြေဗလာ၊ ရွှံ့တွေနဲ့။",
    p: "From inside the house looking out through the open doorway at dusk: ⚠️ THE HUSBAND STANDING "
      + "ON THE EARTH OUTSIDE, FULL FIGURE, BAREFOOT, his good shirt and trousers heavy and dark "
      + "with dried mud to the thigh. ⚠️ HIS ARMS HANG STRAIGHT DOWN AND HIS FACE IS DRAINED "
      + "GREY-PALE. Last blue light behind him, warm house light on his front.",
    u: ["အဖြေကို— ကျွန်တော် မလိုချင်ဘဲ သိလိုက်ရတယ်။",
      "အစ်မယောကျ်ား ပျောက်သွားပြီး ဆယ်ရက်မြောက်နေ့မှာ— သူ ပြန်လာတယ်။"] },

  { t: "There Is Someone in the Pond", l: "ကျွန်တော်တို့အိမ်", k: "hus", w: ["အစ်မ့ယောကျ်ား"],
    g: "သူပြောတဲ့ ပထမဆုံးစကား။",
    p: "Close on the husband sitting inside now, ⚠️ HIS FACE STILL GREY AND HIS EYES FIXED ON THE "
      + "FLOOR IN FRONT OF HIM, mouth moving on a short sentence. ⚠️ DRIED MUD IS CRACKING OFF HIS "
      + "COLLAR AND ONE CHEEK. One warm bulb above him, the room dark behind.",
    u: ["ဘာဖြစ်ခဲ့လဲ မေးတော့— သူ တစ်ခုပဲ ပြောတယ်။",
      "“ရေကန်ထဲမှာ လူတစ်ယောက်ရှိတယ်”", "“ဘယ်သူလဲ”"] },

  { t: "He Did Not Kill Me", l: "ကျွန်တော်တို့အိမ်", k: "insert", w: ["အစ်မ့ယောကျ်ား"],
    g: "⚠️ လက်တွေ တုန်နေတာကို လက်နဲ့ပဲ ပြ။",
    p: "Tight insert on the husband's two hands resting on his knees, ⚠️ THE FINGERS SPREAD WIDE "
      + "APART AND THE TENDONS STANDING UP HARD ACROSS THE BACKS OF THEM, mud still in the "
      + "knuckles. A little of his chin and throat above them. One warm bulb.",
    u: ["သူ့လက်တွေ တုန်လာတယ်။", "“မိန်းမလို ဝတ်ထားတဲ့ အမျိုးသားတစ်ယောက်…”",
      "ပြီးတော့— “သူ ငါ့ကို မသတ်ဘူး”"] },

  { t: "Have You Ever Lied About Loving Someone", l: "ကျွန်တော်တို့အိမ်", k: "hus",
    w: ["အစ်မ့ယောကျ်ား"],
    g: "⚠️ မနှင်းဆီ မေးခဲ့တဲ့ မေးခွန်း။",
    p: "Close on the husband, ⚠️ AND HE HAS STARTED TO CRY — the face coming apart, mouth open and "
      + "square, eyes screwed shut, the eyebrows pushed up in the middle. ⚠️ HIS HEAD IS TIPPED "
      + "FORWARD AND DOWN. One warm bulb above, the room black around him.",
    u: ["“ဒါဆို ဘာလုပ်တာလဲ”", "အစ်မယောကျ်ားက ငိုတယ်။",
      "“မင်းလည်း တစ်ယောက်ယောက်ကို ချစ်တယ်ဆိုပြီး လိမ်ဖူးတယ်မဟုတ်လားလို့ မေးတယ်”"] },

  { t: "The Mirror Made One Sound", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "mirror", w: [],
    g: "⚠️ မှန်မှာ အက်ကြောင်းတစ်ကြောင်း ပေါ်လာတယ်။",
    p: "⚠️ THE BIG MIRROR SQUARE ON AND FILLING THE FRAME, ⚠️ AND NOW ONE FINE BRIGHT CRACK RUNS "
      + "ACROSS THE GLASS FROM THE UPPER LEFT TO THE LOWER RIGHT, catching the bulb along its whole "
      + "length. ⚠️ IT IS A LINE IN THE SURFACE AND THE GLASS STAYS FLAT AND WHOLE IN ITS FRAME. "
      + "The reflection behind it is still the empty lit room.",
    u: ["အဲဒီအချိန်မှာ—", "အိမ်ထဲက မှန်ကြီးက တစ်ချက် အသံမြည်သွားတယ်။ ချပ်။",
      "မှန်မှာ အက်ကြောင်းတစ်ကြောင်း ပေါ်လာတယ်။"] },

  { t: "Behind the Three of Us", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "mirror", w: ["ဇော်ရဲ"],
    g: "⚠️ ရေတွက်ပါ — အခန်းထဲ ၃ ယောက်၊ မှန်ထဲ ၄ ယောက်။",
    p: "⚠️ THE CRACKED MIRROR SQUARE ON. ⚠️ COUNT TWICE AND GET DIFFERENT NUMBERS: the room in "
      + "front of the glass holds exactly three people, seen from behind — two young men and a "
      + "woman, close together. ⚠️ THE GLASS RETURNS EXACTLY FOUR: those three reflected, and "
      + "standing behind them a fourth figure in a deep red floral htamein, full length and facing "
      + "out.",
    u: ["ပြီးတော့—", "မှန်ထဲမှာ ကျွန်တော်တို့သုံးယောက်နောက်က—", "ဇော်ရဲ ရပ်နေတယ်။"] },

  { t: "The Man Standing Beside Him", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "mirror",
    w: ["ဇော်ရဲ", "သက်ပိုင့်အဖေ"],
    g: "⚠️ ဇော်ရဲ့ဘေးမှာ နောက်ထပ်တစ်ယောက် — အဖေ။",
    p: "⚠️ TIGHT ON THE UPPER HALF OF THE CRACKED GLASS. Zaw Ye stands calm and beautifully made "
      + "up, ⚠️ AND BESIDE HIM IN THE REFLECTION IS A HEAVY MAN OF ABOUT SIXTY IN A GOOD DARK "
      + "SHIRT, his chin lifted and his head turned slightly away. ⚠️ ACROSS THE FRONT AND SIDES OF "
      + "THE OLDER MAN'S THROAT ARE MANY SHORT CURVED PINK FINGERNAIL MARKS on smooth even skin.",
    u: ["ဒါပေမယ့်— သူ့ဘေးမှာ နောက်ထပ်လူတစ်ယောက် ရှိနေတယ်။",
      "အသက်ကြီးကြီး အမျိုးသားတစ်ယောက်။ လည်ပင်းတစ်ဝိုက်မှာ လက်သည်းရာတွေ ပြည့်နေတယ်။",
      "အဲဒီလူကို ကျွန်တော် မှတ်မိတယ်။ ဓာတ်ပုံထဲက— သက်ပိုင်ရဲ့အဖေ။"] },

  { t: "Locked From the Inside", l: "ရွာလမ်း", k: "insert", w: [],
    g: "⚠️ အခန်းတံခါး အတွင်းကနေ သော့ချထားတယ်။",
    p: "Tight insert on the inside face of a bedroom door in the morning, ⚠️ THE IRON BOLT SHOT "
      + "ACROSS INTO ITS KEEPER AND THE KEY STILL IN THE LOCK ON THIS SIDE. The paint on the timber "
      + "is old and chipped. Flat grey daylight from a window out of shot.",
    u: ["နောက်နေ့မနက်မှာ သတင်းရောက်လာတယ်။",
      "သက်ပိုင်ရဲ့အဖေဟာ— သူ့အိမ်အိပ်ခန်းထဲမှာ သေဆုံးနေတယ်။",
      "ထူးဆန်းတာက— အခန်းတံခါး အတွင်းကနေ သော့ချထားတယ်။"] },

  { t: "His Face Was Fully Made Up", l: "ရွာလမ်း", k: "insert", w: ["သက်ပိုင့်အဖေ"],
    g: "⚠️ ဒဏ်ရာ မပါရ — မိတ်ကပ်ပဲ။",
    p: "⚠️ TIGHT ON AN OLDER MAN'S FACE FROM THE BROW TO THE CHIN, lying flat and level with his "
      + "eyes closed. ⚠️ THE FACE IS FULLY AND CAREFULLY MADE UP — an even base, softly filled "
      + "brows, a clean line along the closed lashes, ⚠️ AND CLEAR RED LIPSTICK APPLIED NEATLY "
      + "INSIDE THE EDGES OF THE MOUTH. ⚠️ THE SKIN IS SMOOTH AND EVEN AND THE WORK IS EXPERT. Flat "
      + "grey morning light.",
    u: ["ခန္ဓာကိုယ်မှာ ဒဏ်ရာမရှိဘူး။",
      "ဒါပေမယ့်— သူ့မျက်နှာပေါ်မှာ မိတ်ကပ်အပြည့် လိမ်းထားတယ်။",
      "နှုတ်ခမ်းမှာ အနီရောင်ဆိုးထားတယ်။"] },

  { t: "The Name on the Invitation", c: [[1, "bigstinger"]], l: "ရွာလမ်း", k: "insert", w: [],
    g: "⚠️ သတို့သမီးနာမည်နေရာကို ဖျက်ပြီး “နှင်းဆီ” လို့ ရေးထား။",
    p: "⚠️ TIGHT INSERT STRAIGHT DOWN ON AN OLD GOLD-PRINTED WEDDING INVITATION held in a slack "
      + "hand, the paper yellowed and soft at the folds. ⚠️ ONE PRINTED LINE ON IT HAS BEEN SCORED "
      + "THROUGH WITH A THICK GREASY RED STROKE, and above that stroke a short new word is written "
      + "in the same red, in Burmese script. ⚠️ THE OTHER PRINTED LINES ARE SOFT AND PAST READING. "
      + "Flat grey light.",
    u: ["ပြီးတော့ သူ့လက်ထဲမှာ— မင်္ဂလာဖိတ်စာအဟောင်းတစ်စောင်။",
      "အဲဒီဖိတ်စာရဲ့ သတို့သမီးနာမည်နေရာကို အနီရောင်နှုတ်ခမ်းနီနဲ့ ဖျက်ထားပြီး—",
      "နာမည်အသစ်တစ်ခု ရေးထားတယ်။ “နှင်းဆီ”"] },

  /* ── XII · THE CUSTOM ─────────────────────────────────────────────────── */
  { t: "A Mirror Before the Vows", l: "ကျွန်တော်တို့အိမ်", k: "wide", w: [],
    g: "⚠️ ရွာမှာ ပေါ်လာတဲ့ ဓလေ့အသစ်။",
    p: "Wide on a village wedding under a striped pavilion in daylight, ⚠️ AND A TALL MIRROR HAS "
      + "BEEN SET UP ON A STAND AT THE FRONT OF IT. A bride and groom in full Myanmar wedding dress "
      + "stand facing each other in front of the glass with the guests seated behind them. Bright, "
      + "ordinary, busy.",
    u: ["အဲဒီညကစပြီး—",
      "ကျွန်တော်တို့ရွာမှာ မင်္ဂလာဆောင်တိုင်း ထူးဆန်းတဲ့ဓလေ့တစ်ခု ပေါ်လာတယ်။",
      "သတို့သားနဲ့ သတို့သမီးက ကတိသစ္စာမပြုခင်— မှန်တစ်ချပ်ရှေ့မှာ တစ်ယောက်မျက်နှာ တစ်ယောက်ကြည့်ရတယ်။"] },

  { t: "Is There Anything You Are Hiding", l: "ကျွန်တော်တို့အိမ်", k: "insert", w: [],
    g: "မေးခွန်းတစ်ခုပဲ မေးရတယ်။",
    p: "Tight insert on a bride and groom's two faces close together in profile in front of the "
      + "mirror stand, ⚠️ BOTH OF THEM LOOKING STRAIGHT INTO EACH OTHER'S EYES AND ONE MOUTH OPEN "
      + "ON A QUESTION. ⚠️ THE GLASS IS A SOFT BRIGHT BLUR BEHIND THEM. Bright daylight under the "
      + "canopy.",
    u: ["ပြီးတော့— တစ်ခုပဲ မေးကြတယ်။", "“ငါ့ကို ဖုံးထားတာ တစ်ခုခုရှိသေးလား”"] },

  { t: "Count the People Behind You", l: "ကျွန်တော်တို့အိမ်", k: "mirror", w: [],
    g: "⚠️ မှန်ထဲက လူအရေအတွက်ကို ရေတွက်ပါ။",
    p: "⚠️ A MIRROR SQUARE ON AND FILLING THE FRAME at night. ⚠️ IN FRONT OF THE GLASS ONE PERSON "
      + "STANDS, seen from behind, close to it. ⚠️ THE GLASS RETURNS THAT ONE PERSON AND THE EMPTY "
      + "LIT ROOM BEHIND THEM AND NOBODY ELSE — the count matches. One warm bulb out of shot.",
    u: ["ဘာလို့လဲဆိုတော့— လိမ်ပြောလိုက်တဲ့ညမှာ…",
      "မှန်ထဲမှာ ကိုယ့်နောက်က လူတွေကို ရေတွက်ကြည့်ပါ။"] },

  { t: "Do Not Turn Around", c: [[1, "bigstinger"]], l: "ကျွန်တော်တို့အိမ်", k: "mirror", w: ["ဇော်ရဲ"],
    g: "⚠️ တစ်ယောက်ပိုနေရင် — လှည့်မကြည့်နဲ့။",
    p: "⚠️ THE SAME MIRROR, THE SAME FRAMING, ONE PERSON STILL STANDING IN FRONT OF THE GLASS SEEN "
      + "FROM BEHIND. ⚠️ THE GLASS NOW RETURNS TWO: that person's reflection, and standing well "
      + "back behind them in the reflected room a second full-length figure in a deep red floral "
      + "htamein with long loose black hair, calm and beautifully made up. ⚠️ THE ROOM ITSELF STILL "
      + "HOLDS ONE PERSON ONLY.",
    u: ["တစ်ယောက်ပိုနေရင်— လှည့်မကြည့်နဲ့။",
      "အနီရောင်ထဘီနဲ့ လူတစ်ယောက်ဖြစ်နေရင်တော့— ပိုပြီး မလှည့်နဲ့။"] },

  { t: "She Only Hates the Ones Who Lie", c: [[1, "finalstinger"]], l: "ဇော်ရဲ့အခန်း", k: "zaw", w: ["ဇော်ရဲ"],
    g: "⚠️ နောက်ဆုံးပုံ — အသက်ရှင်နေစဉ်ပုံ၊ နွေးနွေးထွေးထွေး။",
    p: "⚠️ WARM DAYLIT MEMORY, AND THE LAST IMAGE OF THE FILM. Close on Zaw Ye in his own room in "
      + "the afternoon sun, ⚠️ LOOKING STRAIGHT INTO THE LENS AND SMILING PROPERLY — the eyes "
      + "creasing with it, the whole face open. Warm ordinary skin, red lipstick neat inside the "
      + "edges of his mouth, his long hair loose. Green light through the window behind him.",
    u: ["မနှင်းဆီက မင်္ဂလာဆောင်တွေကို မမုန်းဘူး။",
      "လိမ်ပြီး ချစ်တယ်ပြောတဲ့လူတွေကိုပဲ သူ မုန်းတာ။"] },
];

/** Which clock each shot sits on, by title. Everything unlisted is overcast day. */
const AT = {
  warm: new Set(["She Is Not a Woman", "His Name Was Zaw Ye",
    "The Village Called Him Ma Hnin Si", "Long Hair, Red Lipstick",
    "He Painted Every Bride in the Village", "They Laughed and He Did Not Mind",
    "Seeing Them Beautiful Was Enough", "One Thing Nobody Knew", "Photographs of One Man",
    "Ko Thet Paing", "They Grew Up Together", "More Than Friends, and Nobody Knew",
    "I'll Take You With Me", "In Front of Me You Are You", "He Went to Ask Him Himself",
    "My Father Arranged It", "He Did Not Cry", "Who Will Paint Her Face", "I Will",
    "He Used His Son's Name", "She Only Hates the Ones Who Lie"]),
  night: new Set(["The Name We Do Not Say at Night", "By the Old Pond, Nearly Every Night",
    "Around Midnight", "Thet Paing Wants to See Me Tonight"]),
  lamp: new Set(["Especially That One", "If There Is a Mirror Nearby", "She Looks Back Out of It",
    "Seven Years Later", "My Sister's Wedding", "A Makeup Artist at the Door",
    "Tall, With Long Hair", "Pink Blouse, Red Htamein", "A Carefully Painted Face",
    "I'm Here for the Bride", "An Hour at Her Face", "He Leaned to Her Ear",
    "Her Face Went White", "Don't Trust Your Husband", "Do Not Photograph in Front of a Mirror",
    "She Screamed at the Photographs", "Mother Said His Name", "She Had Been Hiding Something",
    "Someone Else All Along", "Shame Kept the Wedding On", "He Came to Warn Her",
    "A Letter With No Sender", "Why Did He Come Back After Seven Years",
    "There Is Someone in the Pond", "He Did Not Kill Me",
    "Have You Ever Lied About Loving Someone", "The Mirror Made One Sound",
    "Behind the Three of Us", "The Man Standing Beside Him", "Count the People Behind You",
    "Do Not Turn Around"]),
  dusk: new Set(["The Night Before the Wedding", "On the Tenth Day He Came Home"]),
};

/**
 * This script is written in very short lines and several of them are a single
 * connective — "ဒါပေမယ့်—", "ပြီးတော့—", "နောက်မှ—". Under about fourteen
 * characters the voice comes back mispronounced, in the wrong language, or as
 * nothing at all, so a fragment is folded into the line it introduces. The
 * pause is still there; it comes from the beat between units, not from a unit
 * of its own.
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
  s.time = AT.warm.has(s.t) ? TIME.warm
    : AT.night.has(s.t) ? TIME.night
    : AT.lamp.has(s.t) ? TIME.lamp
    : AT.dusk.has(s.t) ? TIME.dusk
    : TIME.day;

  /* Zaw Ye's state is the film's whole structure, so it is decided per shot. */
  let cont = CONT;
  if ((s.w ?? []).includes("ဇော်ရဲ")) {
    cont += PHOTO_FACE.has(s.t) ? ZAW_PHOTO
      : GLASS_FACE.has(s.t) || s.k === "mirror" ? ZAW_GLASS
      : VISITOR.has(s.t) ? ZAW_VISITOR
      : ZAW_ALIVE;
  }
  for (const who of s.w ?? []) cont += CONT_CAST[who] ?? "";
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
