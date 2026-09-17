/**
 * ကြိုးပေါ်က အဝတ်တွေ — THE CLOTHES ON THE LINE
 *
 * Board for clotheshanger.txt. 80 shots.
 *
 * Built on the architecture the hospital board was rebuilt around, rather than
 * retrofitted into it later:
 *
 *   1. The camera is stated first and alone, one composition per shot. Naming a
 *      height, a side and a required sightline in one paragraph produces
 *      instructions that cannot all be satisfied at once.
 *   2. Positions are absolute — left of frame, right of frame, near rail, far
 *      rail — never literary.
 *   3. The continuity block is short and only carries what applies to the shot.
 *   4. Ordinary Yangon apartment light. The building is not haunted-looking; a
 *      woman hanging washing after midnight is the whole of the unease.
 *   5. THE THING IN THE DARK IS NEVER RESOLVED. It has no reference plate on
 *      purpose — a face would end the story. Height, thinness and the movement
 *      of its hands are all it ever gets.
 *
 * The two balconies carry three quarters of the film, so the geometry is fixed
 * once in a master location plate and referenced, not re-described per shot.
 */

export const CAST = [
  { name: "ကိုထွန်း", en: "Ko Htun — the narrator, thirty-one",
    prompt: "A Burmese man of thirty-one, slim, medium-brown skin, an oval face with a straight nose "
      + "and short black hair parted at the side, clean-shaven. A graphic designer who works from "
      + "home: plain dark T-shirt or a pale-blue short-sleeved shirt, a dark grey longyi indoors, "
      + "rubber slippers. No watch, no jewellery. Clear white sclera, natural dark brown irises, "
      + "ordinary healthy eyes; he grows visibly frightened over the film but never ill." },
  { name: "မေမြတ်", en: "May Myat — the neighbour, twenty-five",
    prompt: "A Burmese woman of twenty-five, slender, a narrow oval face, long straight black hair "
      + "worn loose to the middle of her back. Her skin is noticeably paler than everyone else's in "
      + "the building — pale in an unwell way, not grey, not blue, not translucent. Always "
      + "immaculately dressed in a plain white blouse and a dark htamein, everything clean and "
      + "pressed. Clear white sclera and natural dark brown irises with normal black pupils — no "
      + "glow, no clouding, no colour change. ⚠️ SHE IS NEVER A VISIBLE GHOST: no wounds, no wet "
      + "hair, no pallor of death, nothing transparent, no floating. An ordinary young woman who "
      + "is simply too composed and too clean for a building like this one.",
    pose: "The subject stands facing the camera square on, full figure in frame, hands loosely "
      + "clasped in front of her, a small closed-mouth smile" },
  { name: "ဦးကျော်", en: "U Kyaw — the building caretaker, sixties",
    prompt: "A Burmese man in his sixties, stocky and going soft, weathered medium-brown skin, a "
      + "broad lined face, thinning grey hair combed flat, grey stubble. A faded olive shirt with "
      + "the sleeves rolled, a brown checked longyi, plastic sandals, a bunch of keys on a cord at "
      + "his waist. An ordinary tired caretaker of twenty years — not a monster and not a ghoul. "
      + "What is wrong with him is only ever in his expression." },
  { name: "ဇင်မင်းထက်", en: "Zin Min Htet — the man who is let go",
    prompt: "A Burmese man of about thirty-five, thin, in a dark jacket and trousers that are "
      + "soaked through and hanging heavy with water. His head stays lowered and his eyes stay "
      + "closed throughout. Skin drained of colour but still plainly skin — no rot, no wounds, "
      + "nothing translucent. A row of faint dark bruise-marks across one side of the neck, small "
      + "and unremarkable, never bloody.",
    pose: "The subject stands facing the camera with the head lowered so the face is angled down "
      + "and only partly visible, arms hanging at the sides, clothes visibly soaked" },
  { name: "အဘိုး", en: "The old man from the floor below, seventies",
    prompt: "A Burmese man in his seventies, thin and stooped, sparse white hair, a white sleeveless "
      + "singlet and a dark green checked longyi, plastic sandals. Entirely ordinary and entirely "
      + "alive — bright clear eyes, a slow careful walk. He is the one person in this story the "
      + "audience must never suspect of being dead." },
];

export const LOCS = [
  { name: "လသာဆောင်", en: "The two balconies — master geometry plate",
    prompt: "THE MASTER GEOMETRY PLATE FOR THIS FILM. Most of the story is one man looking from his "
      + "balcony at the one next door, so establish the layout once and clearly. Third floor of an "
      + "old Yangon apartment block at night. Camera stands on KO HTUN'S BALCONY, at chest height, "
      + "looking out and slightly to the right. NEAR HALF OF FRAME: his own balcony — a plain "
      + "concrete floor, a waist-high concrete parapet with a painted iron rail along the top, one "
      + "plastic chair, his own empty washing line strung between two hooks. A DIVIDING WALL runs "
      + "from the building face to the outer rail, chest high, separating the two balconies; it is "
      + "low enough to see over and impossible to climb past casually. FAR HALF OF FRAME, BEYOND "
      + "THE DIVIDING WALL: the neighbouring balcony, identical in build, with its own washing line "
      + "strung the same way and a sliding glass door behind it leading into a dark room. BELOW AND "
      + "BEYOND: three storeys of drop to a wet back lane, other apartment blocks with lit windows, "
      + "ordinary city glow. Monsoon rain falling. Lit only by what is really there — a bare bulb "
      + "over Ko Htun's door, window light from the flats opposite, a streetlight far below. No "
      + "people and no clothing on either line in this plate; the shots add those. No fog, no green "
      + "grade, no decay — a working building people live in." },
  { name: "ကိုထွန်းအခန်း", en: "Ko Htun's flat, third floor",
    prompt: "A small one-room Yangon apartment, lived in and tidy. A desk against the wall with two "
      + "monitors and a graphics tablet, a swivel chair, a single bed with a mosquito net tied up, "
      + "a low shelf, a standing fan, an electric kettle. Pale green painted walls gone chalky with "
      + "age, a bare concrete floor, one ceiling light and one desk lamp. A sliding glass door in "
      + "the far wall leads out to the balcony. Empty of people for this plate. Ordinary warm "
      + "domestic light, nothing sinister and nothing abandoned." },
  { name: "လှေကား", en: "The stairwell and third-floor landing",
    prompt: "The concrete stairwell of an old Yangon apartment block: a half-turn staircase with a "
      + "painted iron handrail, chipped terrazzo treads, pale green lower walls and cream above, "
      + "one fluorescent tube per landing. The third-floor landing has two flat doors side by side, "
      + "each with a small grille and a shoe rack beside it, and an open window at the turn of the "
      + "stairs letting in grey monsoon daylight. Empty of people for this plate. No readable "
      + "signage or unit numbers." },
  { name: "သိုလှောင်ခန်း", en: "The storage room on the top floor",
    prompt: "A long-locked storage room at the top of an old Yangon apartment block. Bare concrete "
      + "walls and floor, one small high window boarded over, a single bare bulb on a flex. Along "
      + "the walls: stacked cardboard boxes, travel bags and rucksacks, shoes paired and unpaired, "
      + "folded clothing in piles, old mobile phones in a shallow plastic tray, a bicycle wheel. "
      + "Everything dusty and stacked with a caretaker's tidiness rather than a hoarder's mess. "
      + "Empty of people for this plate. No blood, no bones, no horror dressing — the wrongness is "
      + "that it is all somebody's belongings." },
  { name: "တိုက်အပြင်", en: "The apartment block from outside",
    prompt: "A six-storey Yangon apartment block from the back lane at night in heavy monsoon rain: "
      + "a plain concrete frontage streaked with damp, rows of balconies with washing lines and "
      + "air-conditioner boxes, most windows lit, a few dark. Water running from a broken downpipe, "
      + "puddles in the lane, a parked motorbike under a sheet. An ordinary inhabited building — no "
      + "abandonment, no fog, no unnatural colour." },
];

/** Composition vocabulary. One per shot, stated first and alone. */
const CAM = {
  ext: 'EYE-LEVEL EXTERIOR. Camera at standing height in the back lane, looking up at the building.',
  room: 'EYE-LEVEL INTERIOR. Camera at standing height inside the flat.',
  roomclose: 'EYE-LEVEL CLOSE. Camera at standing height, head-and-shoulders crop.',
  stair: 'STAIRWELL EYE-LEVEL. Camera at standing height on the landing or the half-turn of the stairs.',
  stairlow: 'LOW ANGLE ON THE LANDING. Camera at shin height beside the flat doors, looking along the floor.',
  balcony: 'THE BALCONY TWO-SHOT. Camera stands on KO HTUN’S BALCONY at chest height, looking out and slightly right, exactly as in the master geometry plate: his own balcony in the near half of frame, the dividing wall across the middle, the neighbouring balcony and its line in the far half.',
  balconyclose: 'ACROSS THE DIVIDING WALL. Camera on Ko Htun’s balcony at chest height, framed tight on the far balcony beyond the wall so that his own side is only a blurred edge of concrete along the bottom of frame.',
  line: 'THE LINE MOTIF. 50mm-equivalent lens, camera at chest height and square on to a washing line — WHICH line is stated in the shot below — framed so the line runs dead level across the upper third and the garment hangs in the exact centre of frame against the dark sliding door behind it. Reproduce this framing identically every time it recurs.',
  over: 'OVER-SHOULDER. Camera behind and slightly above Ko Htun’s shoulder, his shoulder occupying the lower left corner of frame.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
  hands: 'INSERT ON HANDS. Camera close on hands and what they hold, forearms entering frame, faces out of shot.',
  pov: 'KO HTUN’S POINT OF VIEW. Camera exactly where his eyes are, no part of him visible in frame.',
  storage: 'STORAGE ROOM EYE-LEVEL. Camera at standing height inside the storage room, single bare bulb overhead.',
  dark: '⚠️ THE FAR BALCONY, UNRESOLVED. Camera on Ko Htun’s balcony at chest height, looking across the dividing wall into the neighbouring balcony, which is unlit. Expose for Ko Htun’s side, so the far side is genuinely underexposed rather than artificially blackened. Whatever is standing over there is read from height, thinness and the movement of its hands ONLY.',
  door: 'AT THE FLAT DOOR. Camera inside the flat at standing height, the closed balcony door filling most of frame.',
};

/**
 * One composition per shot. The sequence is the story told without narration:
 * ordinary domestic coverage while this is a neighbour with an odd habit, the
 * balcony two-shot recurring as he watches more and understands less, then —
 * once the clothes on the line are his — the camera stops going out there at
 * all and shoots from inside his own door.
 */
export const SCENES = [
  // ── I · THE BUILDING ──────────────────────────────────────────────────────
  { t: "Monsoon", l: "တိုက်အပြင်", k: "ext",
    g: "မိုးရာသီ။ ရန်ကုန်အပြင်ဘက်က တိုက်ခန်းဟောင်းတစ်ခု။ အပြင်ကနေ မြင်ရတဲ့ မြင်ကွင်း။",
    p: "The whole apartment block seen from the back lane in heavy rain at night. Most windows lit, "
      + "a few dark. Rows of balconies up the face of the building, washing lines on several of "
      + "them. An ordinary building with people living in it.",
    u: ["မိုးရာသီ။ ရန်ကုန်မြို့အပြင်ဘက်က တိုက်ခန်းဟောင်းတစ်ခု။"] },

  { t: "Ko Htun, Thirty-One", l: "ကိုထွန်းအခန်း", k: "room", w: ["ကိုထွန်း"],
    g: "ကိုထွန်း စားပွဲမှာ တစ်ယောက်တည်း အလုပ်လုပ်နေတယ်။",
    p: "Ko Htun alone at his desk, side on to the camera, face lit by two monitors. Behind him the "
      + "single bed and the balcony door. Everything about the room says one person lives here.",
    u: ["ကိုထွန်းက အသက်သုံးဆယ့်တစ်နှစ်။ Graphic designer အလုပ်လုပ်တယ်။",
        "တစ်ယောက်တည်းနေတယ်။"] },

  { t: "The Flat Next Door", l: "လှေကား", k: "stair",
    g: "တတိယထပ်။ တံခါးနှစ်ချပ်။ ဘေးအခန်းက လကြာအောင် ဗလာ။",
    p: "The third-floor landing: two flat doors side by side. The LEFT door has a shoe rack with "
      + "worn slippers on it and a doormat. The RIGHT door has an empty rack, no mat, and a thin "
      + "line of dust along the threshold. Nobody in frame.",
    u: ["သူနေတဲ့အခန်းက တတိယထပ်။",
        "ဘေးအခန်းကတော့— လအတော်ကြာ ဗလာဖြစ်နေခဲ့တာ။"] },

  { t: "New Shoes", c: [[1, "stinger"]], l: "လှေကား", k: "stairlow",
    g: "တစ်ည အလုပ်ကပြန်လာတော့ ဘေးအခန်းတံခါးရှေ့မှာ ဖိနပ်အသစ်တစ်ရံ။",
    p: "The same threshold at shin height. On the RIGHT door’s rack, which was empty, one pair of "
      + "new women’s sandals placed neatly side by side and squared to the wall. The dust line is "
      + "gone. Nobody in frame.",
    u: ["တစ်ည— အလုပ်ကပြန်ရောက်တော့ ဘေးအခန်းတံခါးရှေ့မှာ ဖိနပ်အသစ်တစ်ရံ တွေ့တယ်။",
        "အိမ်ငှားအသစ်ဝင်လာတာပဲလို့ ထင်တယ်။"] },

  // ── II · MAY MYAT ─────────────────────────────────────────────────────────
  { t: "On the Stairs", l: "လှေကား", k: "stair", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "နောက်နေ့မနက် လှေကားမှာ မိန်းကလေးတစ်ယောက်နဲ့ ဆုံတယ်။",
    p: "Grey monsoon morning at the half-turn of the stairs. Ko Htun on the LOWER flight coming up, "
      + "May Myat on the UPPER flight coming down, both stopped a few steps apart with the open "
      + "stairwell window between them. Daylight from the window falls across her.",
    u: ["နောက်နေ့ မနက်— လှေကားမှာ မိန်းကလေးတစ်ယောက်နဲ့ ဆုံတယ်။"] },

  { t: "Too Clean for This Building", l: "လှေကား", k: "roomclose", w: ["မေမြတ်"],
    g: "အသက်နှစ်ဆယ့်ငါးလောက်။ အသားဖြူ၊ ဆံပင်ရှည်၊ သန့်သန့်ရှင်းရှင်း ဝတ်ထားတယ်။",
    p: "May Myat from the chest up on the stairs, turned three-quarters toward the camera. Long "
      + "loose black hair, a white blouse without a crease in it, skin noticeably paler than the "
      + "stairwell light explains. Everything about her is immaculate in a building where nothing "
      + "else is.",
    u: ["အသက်နှစ်ဆယ့်ငါးလောက်။ အသားဖြူတယ်။ ဆံပင်ရှည်တယ်။",
        "အရမ်းသန့်သန့်လေး ဝတ်ထားတယ်။"] },

  { t: "Mingalaba", l: "လှေကား", k: "stair", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "သူက ပြုံးပြီး နှုတ်ဆက်တယ်။ ကိုထွန်းလည်း ပြန်ပြုံးတယ်။ နာမည်ချင်း ပြောကြတယ်။",
    p: "The same two positions on the stairs, both now turned toward each other. She is speaking "
      + "with a small closed-mouth smile; he has stopped with one hand still on the handrail and "
      + "is smiling back. An entirely ordinary first exchange between neighbours.",
    u: ["သူက ပြုံးပြီး— “မင်္ဂလာပါ” လို့ ပြောတယ်။ ကိုထွန်းလည်း ပြန်ပြုံးတယ်။",
        "“ဘေးခန်းအသစ်ဝင်တာလား” “ဟုတ်တယ်။ မေမြတ်ပါ” “ကိုထွန်း”",
        "အဲဒီလောက်ပဲ။ ရိုးရိုးလေး။"] },

  // ── III · THE HABIT ───────────────────────────────────────────────────────
  { t: "She Had One Odd Habit", l: "လသာဆောင်", k: "balcony", w: ["မေမြတ်"],
    g: "မေမြတ်မှာ ထူးဆန်းတဲ့အကျင့်တစ်ခု ရှိတယ် — ညတိုင်း ဆယ့်နှစ်နာရီကျော်မှ အဝတ်လှန်းတာ။",
    p: "The balcony two-shot at night. Ko Htun’s side in the near half is empty and dark. Beyond "
      + "the dividing wall, May Myat stands at her own line with her back half turned, reaching up "
      + "to peg something. Rain falling. Lit by the bulb over the doors and the windows opposite.",
    u: ["ဒါပေမယ့်— မေမြတ်မှာ ထူးဆန်းတဲ့အကျင့်တစ်ခု ရှိတယ်။",
        "ညတိုင်း— ညဆယ့်နှစ်နာရီကျော်မှ balcony မှာ အဝတ်လှန်းတယ်။"] },

  { t: "The First Night: One", l: "လသာဆောင်", k: "line", rev: "motif 1 of 3",
    g: "⚠️ ကြိုးပေါ်က ပုံစံ — သုံးခါ ပေါ်မယ်။ ပထမည၊ အဖြူရောင် shirt တစ်ထည်။",
    p: "OCCURRENCE 1 OF 3 OF THE LINE MOTIF. The subject is a single white men’s shirt pegged at "
      + "the centre of the neighbouring line, hanging perfectly straight. Nothing else on the line. "
      + "Everything about this image — lens, height, squareness, the level line across the upper "
      + "third — is fixed by the framing above and must be identical at the other two occurrences.",
    u: ["ပထမည— အဖြူရောင် shirt တစ်ထည်။"] },

  { t: "Two, Then Three", l: "လသာဆောင်", k: "balconyclose",
    g: "ဒုတိယည နှစ်ထည်။ တတိယည သုံးထည်။ နေ့တိုင်း တစ်ထည်စီ တိုးလာတယ်။",
    p: "Tight across the dividing wall onto the neighbouring line only. Three garments now hang "
      + "evenly spaced along it: the white shirt, a pink blouse, and a child’s cardigan. Different "
      + "sizes, different ages, plainly belonging to different people.",
    u: ["ဒုတိယည— နှစ်ထည်။ အဖြူရောင် shirt နဲ့ ပန်းရောင် blouse။",
        "တတိယည— သုံးထည်။ နေ့တိုင်း တစ်ထည်စီ ပိုလာတယ်။",
        "ကိုထွန်း အစက ဘာမှမစဉ်းစားဘူး။"] },

  { t: "Neither Rain Nor Wind", c: [[2, "bigstinger"]], l: "လသာဆောင်", k: "balconyclose",
    g: "မိုးရွာနေပေမယ့် မစိုဘူး။ လေတိုက်နေပေမယ့် မလှုပ်ဘူး။ တစ်ပတ်ကြာတော့ balcony တစ်ခုလုံး ပြည့်သွားတယ်။",
    p: "The neighbouring line crowded end to end with a dozen garments of every size. A gust is "
      + "plainly blowing and the rain is slanting hard across frame: a plastic bag lifts off the "
      + "rail, Ko Htun’s own empty line at the bottom edge is swinging, water beads and runs on the "
      + "iron. Every garment on her line hangs dead vertical, completely still, and completely dry "
      + "— matte unmarked weave, no darkening, no drip from any cuff.",
    u: ["ဒါပေမယ့်— အဝတ်တွေက ထူးဆန်းတယ်။ မိုးရွာနေပေမယ့် မစိုဘူး။",
        "လေတိုက်နေပေမယ့် မလှုပ်ဘူး။",
        "တစ်ပတ်လောက်ကြာတော့— balcony တစ်ခုလုံး အဝတ်တွေနဲ့ ပြည့်သွားတယ်။"] },

  { t: "Do You Like Laundry That Much", l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "ကိုထွန်း ရယ်ပြီး နောက်တယ်။ မေမြတ်က “ပြန်ပေးနေတာ” လို့ ဖြေတယ်။",
    p: "The balcony two-shot with both of them present: Ko Htun leaning on the rail on the NEAR "
      + "side, half turned to speak across; May Myat on the FAR side among the hanging clothes, "
      + "turned toward him. He is laughing. She is not — she is answering seriously.",
    u: ["ကိုထွန်း ရယ်ပြီး— “အဝတ်လျှော်အရမ်းကြိုက်တာလား” လို့ မေးတယ်။",
        "မေမြတ် ပြုံးတယ်။ “မဟုတ်ဘူး။ ပြန်ပေးနေတာ”"] },

  { t: "To Their Owners", c: [[2, "stinger"]], l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်"],
    g: "“ဘယ်သူ့ကို” လို့ မေးတော့ “ပိုင်ရှင်တွေကို” လို့ ဖြေတယ်။ ကိုထွန်းက ဟာသလို့ ထင်တယ်။",
    p: "Tight across the wall on May Myat alone, standing beneath her loaded line. She is not "
      + "looking at Ko Htun — her eyes have gone up to the garments above her, and she is answering "
      + "them rather than him.",
    u: ["ကိုထွန်း နားမလည်ဘူး။ “ဘယ်သူ့ကို”",
        "မေမြတ်က လှန်းထားတဲ့အဝတ်တွေကို ကြည့်ပြီး— “ပိုင်ရှင်တွေကို” လို့ ပြောတယ်။",
        "ကိုထွန်း အဲဒီစကားကို ဟာသလို့ပဲ ထင်တယ်။"] },

  // ── IV · THE JACKET ───────────────────────────────────────────────────────
  { t: "It Came Over the Wall", c: [[2, "bigstinger"]], l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း"],
    g: "နောက်တစ်ည ဖုန်းသုံးနေတုန်း အနက်ရောင် jacket တစ်ထည် သူ့ဘက်ကို လေတိုက်လာတယ်။",
    p: "The balcony two-shot. Ko Htun stands on the NEAR side with a phone to his ear. A dark "
      + "jacket is in the air above the dividing wall, mid-flight from the far balcony toward him, "
      + "one sleeve trailing. His free hand is already coming up to catch it.",
    u: ["နောက်တစ်ည— သူ balcony ထွက်ပြီး ဖုန်းသုံးနေတုန်း",
        "မေမြတ်အခန်းဘက်က အဝတ်တစ်ထည် လေတိုက်ပြီး သူ့ဘက်ကို ရောက်လာတယ်။",
        "အနက်ရောင် jacket။ သူ ဖမ်းလိုက်တယ်။"] },

  { t: "Zin Min Htet", c: [[1, "stinger"]], l: "လသာဆောင်", k: "hands", w: ["ကိုထွန်း"],
    g: "အိတ်ကပ်ထဲမှာ အမျိုးသားတစ်ယောက်ရဲ့ ID card — ဇင်မင်းထက်။",
    p: "Insert on Ko Htun’s hands holding the jacket open, one hand drawing a laminated ID card "
      + "part-way out of the inside pocket. The card is angled so a man’s photograph is clearly a "
      + "man’s photograph and the printed text is not legible.",
    u: ["အိတ်ကပ်ထဲမှာ— အမျိုးသားတစ်ယောက်ရဲ့ ID card။",
        "နာမည်— “ဇင်မင်းထက်”"] },

  { t: "A Name From the Group Chat", l: "ကိုထွန်းအခန်း", k: "over", w: ["ကိုထွန်း"],
    g: "ကိုထွန်း အဲဒီနာမည်ကို မှတ်မိတယ် — တိုက်ရဲ့ group chat အဟောင်းထဲက။ လွန်ခဲ့တစ်နှစ်က ပျောက်သွားတဲ့လူ။",
    p: "Over Ko Htun’s shoulder at his desk, the ID card laid on the desk beside his phone. He is "
      + "scrolling a messaging thread on the phone with his thumb. Screens are angled away from the "
      + "lens so nothing on them is readable; what reads is that he has stopped scrolling.",
    u: ["ကိုထွန်း အဲဒီနာမည်ကို မှတ်မိတယ်။",
        "ဒီတိုက်က building group chat အဟောင်းထဲမှာ မြင်ဖူးတာ။",
        "လွန်ခဲ့တဲ့တစ်နှစ်က— ဒီတိုက်မှာ နေပြီးနောက် ပျောက်သွားတဲ့လူ။"] },

  { t: "Where Did You Get This", l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "jacket ကို ပြန်ပေးပြီး မေးတယ်။ မေမြတ် မဖြေဘူး။ “မနက်ဖြန်ညဆို နားလည်လိမ့်မယ်”",
    p: "The balcony two-shot. Ko Htun holds the folded jacket out across the dividing wall with "
      + "both hands; May Myat has taken hold of it on her side but has not pulled it back yet, so "
      + "for this instant both of them are holding it. She is looking at him and not at the jacket.",
    u: ["ကိုထွန်း jacket ကို မေမြတ်ဆီ ပြန်ပေးတယ်။ “ဒါ ဘယ်ကရတာလဲ”",
        "မေမြတ် မဖြေဘူး။ “ဒီလူကို သိလား” မေမြတ်က ခဏတိတ်တယ်။",
        "ပြီးတော့— “မနက်ဖြန်ညဆို မင်းနားလည်လိမ့်မယ်” လို့ ပြောတယ်။"] },

  // ── V · THE RELEASE ───────────────────────────────────────────────────────
  { t: "He Did Not Sleep", l: "ကိုထွန်းအခန်း", k: "room", w: ["ကိုထွန်း"],
    g: "နောက်ည ကိုထွန်း မအိပ်ဘူး။ ညဆယ့်နှစ်နာရီ။",
    p: "Ko Htun sitting on the edge of his bed in the dark flat, fully dressed, facing the closed "
      + "balcony door across the room. The desk lamp is off. The only light is what comes through "
      + "the glass from outside, laying a pale rectangle on the floor between him and the door.",
    u: ["နောက်ည— ကိုထွန်း မအိပ်ဘူး။ ညဆယ့်နှစ်နာရီ။"] },

  { t: "Her Hands Were Empty", l: "လသာဆောင်", k: "balcony", w: ["မေမြတ်"],
    g: "မေမြတ် balcony ထွက်လာတယ်။ ဒီတစ်ခါ လက်ထဲမှာ အဝတ်မရှိဘူး။",
    p: "The balcony two-shot. Ko Htun stands in the near half, pressed back against his own wall "
      + "in shadow, watching. Beyond the dividing wall May Myat has just come out through her "
      + "sliding door. Both her hands are empty and open at her sides.",
    u: ["မေမြတ် balcony ထွက်လာတယ်။",
        "ဒီတစ်ခါ— သူ့လက်ထဲမှာ အဝတ်မရှိဘူး။"] },

  { t: "She Was Leading Someone", c: [[1, "bigstinger"]], l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်", "ဇင်မင်းထက်"],
    g: "လူတစ်ယောက်ကို ဆွဲခေါ်လာတယ်။ ခေါင်းငုံ့၊ အဝတ်စိုနေတယ်။",
    p: "Tight across the wall on the far balcony. May Myat stands on the LEFT, holding the wrist of "
      + "a man who has just come through the sliding door behind her on the RIGHT. His head is "
      + "lowered so the face is angled down, and his dark clothes hang heavy and sodden, water "
      + "running off the hems onto dry concrete.",
    u: ["လူတစ်ယောက်ကို ဆွဲလာတယ်။ ကိုထွန်း မျက်လုံးပြူးသွားတယ်။",
        "အမျိုးသားတစ်ယောက်။ ခေါင်းငုံ့ထားတယ်။ အဝတ်စိုနေတယ်။"] },

  { t: "She Unbuttoned His Shirt", l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်", "ဇင်မင်းထက်"],
    g: "rail နားထိ ခေါ်လာပြီး သူ့အင်္ကျီကို ဖြုတ်ပေးတယ်။",
    p: "The same two at the far rail. She has brought him to stand square against it and is "
      + "working the buttons of his soaked jacket from the top down, her face calm and practical. "
      + "He stands passive with his arms at his sides and his head still lowered.",
    u: ["မေမြတ်က သူ့ကို balcony rail နားထိ ခေါ်လာတယ်။",
        "ပြီးတော့— သူ့အင်္ကျီကို ဖြုတ်ပေးတယ်။"] },

  { t: "He Lifted His Head", c: [[2, "bigstinger"]], l: "လသာဆောင်", k: "insert", w: ["ဇင်မင်းထက်"],
    g: "သူ ခေါင်းမော့လာတယ်။ မျက်နှာဖြူဖျော့၊ မျက်လုံးပိတ်ထား၊ လည်ပင်းမှာ မဲညိုရာ။",
    p: "Close on the man’s head and shoulders as he raises his face. The eyes stay closed "
      + "throughout — the lids smooth and unmoving. Skin drained of colour but unmistakably skin. "
      + "Across the LEFT side of the neck, a row of four small dark bruise-marks. No wounds, no "
      + "blood, nothing open.",
    u: ["အဲဒီအမျိုးသားက ခေါင်းမော့လာတယ်။",
        "မျက်နှာ ဖြူဖျော့နေတယ်။ မျက်လုံးပိတ်ထားတယ်။",
        "လည်ပင်းမှာ မဲညိုရာရှိတယ်။ လူအသက်ရှင်တဲ့ပုံ မဟုတ်ဘူး။"] },

  { t: "She Hung It Up", l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်", "ဇင်မင်းထက်"],
    g: "မေမြတ်က အင်္ကျီကို လှန်းလိုက်တယ်။ အဲဒီလူရဲ့ကိုယ်က ဖြည်းဖြည်း ဖျော့သွားပြီး ပျောက်သွားတယ်။",
    p: "Tight across the wall. May Myat on the LEFT has reached up and is pegging the jacket to "
      + "the line. The man still stands at the rail on the RIGHT — but where the hung jacket "
      + "overlaps him, the balcony rail behind is beginning to show through his chest. He is "
      + "thinning from the edges inward, evenly, like an exposure fading. Everything else in frame "
      + "is solid.",
    u: ["မေမြတ်က အင်္ကျီကို လှန်းလိုက်တယ်။",
        "ပြီးတော့— အဲဒီအမျိုးသားရဲ့ခန္ဓာကိုယ်က ဖြည်းဖြည်း ဖျော့သွားတယ်။ ပျောက်သွားတယ်။"] },

  { t: "Do You Know Now", l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "ကိုထွန်း တုန်နေတယ်။ မေမြတ် လှည့်ကြည့်တယ် — ဒီတစ်ခါ မပြုံးတော့ဘူး။",
    p: "The balcony two-shot. Ko Htun is on the NEAR side with both hands on the rail, visibly "
      + "shaking. Beyond the wall May Myat has turned fully toward him. The jacket hangs on her "
      + "line behind her and the rail where the man stood is empty. She is not smiling.",
    u: ["ကိုထွန်း တုန်နေတယ်။ မေမြတ် သူ့ဘက် လှည့်တယ်။",
        "ဒီတစ်ခါ— အရင်ကလို မပြုံးတော့ဘူး။ “အခု သိပြီလား”"] },

  { t: "People Who Cannot Go Back", c: [[2, "stinger"]], l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်"],
    g: "“သူတို့ ဘယ်သူတွေလဲ” — “ဒီတိုက်ထဲက မပြန်နိုင်သေးတဲ့လူတွေ။ သူတို့ပစ္စည်းတွေ မပြန်ရသေးလို့”",
    p: "Tight across the wall on May Myat, the loaded line filling the frame behind and above her. "
      + "She is explaining evenly, the way a person explains something they have explained before, "
      + "and her eyes have dropped from his face to the concrete of the dividing wall between them.",
    u: ["ကိုထွန်း အသံတုန်တုန်နဲ့— “သူတို့ ဘယ်သူတွေလဲ” လို့ မေးတယ်။",
        "မေမြတ်က— “ဒီတိုက်ထဲက မပြန်နိုင်သေးတဲ့လူတွေ” လို့ ပြောတယ်။",
        "“ဘာလို့ မပြန်နိုင်တာလဲ” မေမြတ် တိတ်သွားတယ်။ ပြီးတော့— “သူတို့ပစ္စည်းတွေ မပြန်ရသေးလို့”"] },

  // ── VI · WHAT HE FOUND OUT ────────────────────────────────────────────────
  { t: "He Started Looking", l: "ကိုထွန်းအခန်း", k: "over", w: ["ကိုထွန်း"],
    g: "ကိုထွန်း တိုက်အကြောင်း စုံစမ်းတယ်။ နှစ်အနည်းငယ်အတွင်း လူပျောက်မှုတွေ ရှိခဲ့တယ်။",
    p: "Over Ko Htun’s shoulder at his desk late at night, both monitors on and a notebook open "
      + "beside the keyboard in which he has been writing a list. Screens angled away from the lens "
      + "so nothing is readable. The room is otherwise dark.",
    u: ["အဲဒီနောက်ပိုင်း— ကိုထွန်း building အကြောင်း စုံစမ်းတယ်။",
        "နှစ်အနည်းငယ်အတွင်း— ဒီတိုက်မှာ ထူးဆန်းတဲ့ လူပျောက်မှုတွေ ရှိခဲ့တယ်။"] },

  { t: "Moved Away, They Said", l: "လှေကား", k: "stair",
    g: "တချို့က ပြောင်းသွားတယ်လို့ ထင်ကြတယ်။ တချို့က suicide လို့ ပြောကြတယ်။ တချို့ကတော့ record တောင် မရှိဘူး။",
    p: "The third-floor landing in daylight, empty of people, looking down the row of doors. One "
      + "door has a padlock through the hasp and a faded notice taped beside it, illegible. Another "
      + "has a shoe rack still holding one pair of shoes gone grey with dust.",
    u: ["တချို့က ပြောင်းသွားတယ်လို့ပဲ လူတွေ ထင်ကြတယ်။",
        "တချို့က suicide လုပ်သွားတယ်လို့ ပြောကြတယ်။",
        "တချို့ကတော့— ပျောက်သွားပြီးနောက် record တောင် မရှိတော့ဘူး။"] },

  { t: "The Clothes Matched", l: "လသာဆောင်", k: "balconyclose",
    g: "မေမြတ် လှန်းတဲ့အဝတ်တွေက အဲဒီပျောက်သွားတဲ့လူတွေရဲ့ ပစ္စည်းတွေနဲ့ ကိုက်ညီနေတယ်။",
    p: "The far line at night, crowded, shot straight on. Every garment is plainly a different "
      + "person’s: a man’s work shirt, a school uniform, a woman’s cardigan, a baby’s romper, a "
      + "pair of trousers. Nothing matches anything else. All of it dead still in falling rain.",
    u: ["ဒါပေမယ့်— မေမြတ် လှန်းတဲ့အဝတ်တွေက အဲဒီလူတွေရဲ့ ပစ္စည်းတွေနဲ့ ကိုက်ညီနေတယ်။"] },

  { t: "Gone by Morning", l: "လသာဆောင်", k: "balconyclose",
    g: "တစ်ထည်လှန်းလိုက်တယ်။ နောက်နေ့မနက် အဲဒီအဝတ် ပျောက်သွားတယ်။",
    p: "The far line in flat grey morning light. The line still holds a dozen garments, evenly "
      + "spaced — except for one conspicuous gap in the middle of the row, with the two wooden pegs "
      + "that held that garment still clipped to the empty line on either side of the space.",
    u: ["တစ်ထည်လှန်းလိုက်တယ်။",
        "နောက်နေ့မနက်— အဲဒီအဝတ် ပျောက်သွားတယ်။"] },

  { t: "One Fewer Sound", c: [[1, "stinger"]], l: "လှေကား", k: "stairlow",
    g: "အဲဒီနေ့ကစပြီး ညဘက် corridor မှာ ကြားနေကျ ခြေသံတစ်သံ ပျောက်သွားတယ်။",
    p: "The corridor at night at shin height, looking along the empty floor past the doors to the "
      + "far end. One fluorescent tube lit, the rest off. Nothing in frame but floor, doors and "
      + "light — a shot about a sound that is no longer happening.",
    u: ["အဲဒီနေ့ကစပြီး— ညဘက် corridor မှာ ကြားနေကျ ခြေသံတစ်သံလည်း ပျောက်သွားတယ်။",
        "နောက်တစ်ထည်။ နောက်ထပ်အသံတစ်သံ ပျောက်တယ်။"] },

  { t: "She Was Letting Them Go", l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "ကိုထွန်း နားလည်လာတယ် — မေမြတ်က ခြောက်နေတာ မဟုတ်၊ တစ်ယောက်ချင်း လွှတ်ပေးနေတာ။",
    p: "The balcony two-shot at night. Ko Htun stands at his rail on the NEAR side watching. "
      + "Beyond the wall May Myat is working along her line taking pegs off and folding a garment "
      + "over her arm — the ordinary posture of someone bringing in washing.",
    u: ["ကိုထွန်း နားလည်လာတယ်။",
        "မေမြတ်က— ဒီတိုက်ကို ခြောက်နေတာ မဟုတ်ဘူး။",
        "ခြောက်နေတဲ့သူတွေကို— တစ်ယောက်ချင်း လွှတ်ပေးနေတာ။"] },

  // ── VII · THE RULE ────────────────────────────────────────────────────────
  { t: "A Shirt He Recognised", c: [[1, "stinger"]], l: "လသာဆောင်", k: "insert",
    g: "တစ်ညမှာ အဝတ်တစ်ထည်ရဲ့ ပိုင်ရှင်ကို သူ သိတယ် — အောက်ထပ်အဘိုးရဲ့ shirt။",
    p: "Macro on one garment among the others on the far line: a man’s white cotton shirt, collar "
      + "frayed, a pen mark on the breast pocket, one button replaced with a mismatched one. An old "
      + "man’s shirt, specific and identifiable.",
    u: ["ဒါပေမယ့်— တစ်ညမှာ ကိုထွန်း တစ်ခု သတိထားမိတယ်။",
        "အဝတ်တစ်ထည်မှာ— ပိုင်ရှင်နာမည်ကို သူသိတယ်။ ဒီတိုက်က အဘိုးတစ်ယောက်ရဲ့ shirt။"] },

  { t: "He Is Not Dead", c: [[0, "bigstinger"]], l: "လှေကား", k: "stair", w: ["အဘိုး"],
    g: "ပြဿနာက— အဲဒီအဘိုးက မသေသေးဘူး။ အောက်ထပ်မှာ နေတုန်းပဲ။",
    p: "Daylight on the stairs, one floor down. The old man in a white singlet and green checked "
      + "longyi stands at his open door with a kettle in one hand, entirely alive — upright, "
      + "clear-eyed, mid-conversation with somebody off frame. Absolutely ordinary.",
    u: ["ပြဿနာက— အဲဒီအဘိုးက မသေသေးဘူး။ အောက်ထပ်မှာ နေတုန်းပဲ။"] },

  { t: "That One Should Not Be There", c: [[1, "bigstinger"]], l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်"],
    g: "ကိုထွန်း မေးတော့ မေမြတ်ရဲ့မျက်နှာ တင်းသွားတယ်။ “အဲဒါ မလှန်းရသေးဘူး”",
    p: "Tight across the wall on May Myat. She has followed his pointing and is looking up at the "
      + "old man’s shirt on her own line, and for the first time in the film her composure has "
      + "gone — her jaw is set and her hand is already reaching for the peg. This is fear, not "
      + "anger, and it is directed past the shirt at something else.",
    u: ["ကိုထွန်း ချက်ချင်း မေမြတ်ကို မေးတယ်။ “ဒီဟာက ဘာလို့ ဒီမှာရှိတာလဲ”",
        "မေမြတ် shirt ကိုကြည့်ပြီး မျက်နှာတင်းသွားတယ်။ “အဲဒါ မလှန်းရသေးဘူး”"] },

  { t: "She Took It Down Fast", l: "လသာဆောင်", k: "hands", w: ["မေမြတ်"],
    g: "သူ အမြန် ကြိုးကနေ ဖြုတ်လိုက်တယ်။ “ဘာကိုဆိုလိုတာလဲ” — မဖြေချင်ဘူး။",
    p: "Insert on May Myat’s hands at the line, pulling the wooden peg off so fast that the shirt "
      + "comes away crumpled instead of folding, gathered against her chest. Her hands are steady "
      + "but moving faster than any other movement she has made.",
    u: ["သူ အမြန်ကြိုးကနေ ဖြုတ်လိုက်တယ်။",
        "“ဘာကိုဆိုလိုတာလဲ” မေမြတ် မဖြေချင်ဘူး။"] },

  { t: "Mostly", c: [[2, "stinger"]], l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "“ဒီအဝတ်တွေက သေပြီးသားလူတွေရဲ့ပစ္စည်း မဟုတ်ဘူးလား” — “အများစုတော့ ဟုတ်တယ်”",
    p: "The balcony two-shot, both at the dividing wall and closer to it than they have stood "
      + "before. He is leaning in with a question; she is holding the bundled shirt against her "
      + "chest with both arms and answering carefully.",
    u: ["ကိုထွန်း ဆက်မေးတယ်။ “ဒီအဝတ်တွေက သေပြီးသားလူတွေရဲ့ပစ္စည်း မဟုတ်ဘူးလား”",
        "မေမြတ်က— “အများစုတော့ ဟုတ်တယ်” လို့ ပြောတယ်။",
        "ကိုထွန်း ရင်ထဲအေးသွားတယ်။ “အများစု?”"] },

  { t: "Sometimes the Clothes Come First", c: [[1, "bigstinger"]], l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်"],
    rev: "the rule",
    g: "⚠️ ဇာတ်လမ်းရဲ့ စည်းမျဉ်း — “တစ်ခါတလေ အဝတ်က ပိုင်ရှင်ထက် အရင်ရောက်လာတတ်တယ်”",
    p: "Tight across the wall on May Myat, holding the shirt. She is not looking at Ko Htun and "
      + "not looking at the line — her eyes have gone to the dark sliding door of her own flat "
      + "behind her, as though checking whether she is overheard.",
    u: ["မေမြတ် ခဏတိတ်တယ်။",
        "ပြီးတော့— “တစ်ခါတလေ… အဝတ်က ပိုင်ရှင်ထက် အရင်ရောက်လာတတ်တယ်”"] },

  { t: "Does That Mean They Are About to Die", l: "လသာဆောင်", k: "roomclose", w: ["ကိုထွန်း"],
    g: "“ဒါဆို… သူတို့ သေတော့မယ်ဆိုတဲ့ အဓိပ္ပာယ်လား” — မေမြတ် ပြန်မဖြေဘူး။",
    p: "Head and shoulders on Ko Htun on his own side of the wall, the far balcony a soft blur "
      + "behind him. The question has already been asked and is not going to be answered; what the "
      + "frame holds is the moment after it.",
    u: ["ကိုထွန်း မျက်နှာပျက်သွားတယ်။",
        "“ဒါဆို… သူတို့ သေတော့မယ်ဆိုတဲ့ အဓိပ္ပာယ်လား” မေမြတ် ပြန်မဖြေဘူး။"] },

  // ── VIII · THE FALL ───────────────────────────────────────────────────────
  { t: "He Could Not Settle", l: "ကိုထွန်းအခန်း", k: "room", w: ["ကိုထွန်း"],
    g: "အဲဒီညကစပြီး ကိုထွန်း ပိုမသက်မသာ ဖြစ်လာတယ်။",
    p: "Ko Htun awake in bed on his back in the dark flat, eyes open, one arm behind his head, "
      + "looking at the ceiling. The pale rectangle of balcony light lies across the wall above "
      + "him. Nothing is happening; he simply is not asleep.",
    u: ["အဲဒီညကစပြီး— ကိုထွန်း ပိုမသက်မသာ ဖြစ်လာတယ်။"] },

  { t: "He Slipped on the Stairs", l: "လှေကား", k: "stairlow", w: ["အဘိုး"],
    g: "နောက်နေ့မနက် အဘိုး ခြေချော်ပြီး လှေကားက လဲကျတယ်။ ဆေးရုံတင်ရတယ်။ မသေဘူး။",
    p: "Low on the stair treads in morning light, looking up the flight. The old man’s plastic "
      + "sandal lies on its side two steps up and his kettle lies in the turn of the stairs with "
      + "water spreading across the terrazzo. Two pairs of neighbours’ feet are already on the "
      + "steps, hurrying down toward him. He is out of frame below; no injury is shown.",
    u: ["ဒါပေမယ့် နောက်နေ့မနက်— အောက်ထပ်အဘိုး ခြေချော်ပြီး လှေကားက လဲကျတယ်။",
        "ဆေးရုံတင်လိုက်ရတယ်။ ကံကောင်းလို့ မသေဘူး။"] },

  { t: "The Shirt Was Gone", c: [[1, "stinger"]], l: "လသာဆောင်", k: "balconyclose",
    g: "ညရောက်တော့ အဘိုးရဲ့ shirt မရှိတော့ဘူး။",
    p: "The far line at night, straight on. The other garments hang as before. Where the old man’s "
      + "white shirt was there is a gap, and the two pegs that held it are gone from the line as "
      + "well — not dropped, not on the floor, simply not there.",
    u: ["ညရောက်တော့— မေမြတ် လှန်းထားတဲ့ အဘိုးရဲ့ shirt မရှိတော့ဘူး။",
        "ကိုထွန်း ပြေးပြီး မေးတယ်။ “သူ မသေဘူး”"] },

  { t: "This Time It Could Not Take Him", l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    rev: "the rule",
    g: "“ဒါဆို ဘာလို့ shirt ပျောက်သွားတာလဲ” — “ဒီတစ်ခါ သူ မယူနိုင်ခဲ့လို့”",
    p: "The balcony two-shot, both at the wall. She has nodded and is answering; he has gone rigid "
      + "with one hand flat on the concrete between them. The gap in her line is visible behind "
      + "her.",
    u: ["မေမြတ် ခေါင်းညိတ်တယ်။ “အေး”",
        "“ဒါဆို ဘာလို့ shirt ပျောက်သွားတာလဲ” မေမြတ်က— “ဒီတစ်ခါ သူ မယူနိုင်ခဲ့လို့” လို့ ပြောတယ်။"] },

  { t: "Do Not Ask", c: [[1, "stinger"]], l: "လသာဆောင်", k: "balconyclose", w: ["မေမြတ်"],
    g: "“ဘယ်သူ?” — မေမြတ် သူ့ကို မကြည့်ဘူး။ “မမေးနဲ့”",
    p: "Tight across the wall on May Myat. She has turned her face away from Ko Htun so that she "
      + "is in profile to the camera, looking down the length of her own dark balcony toward the "
      + "sliding door. She has stopped being the one who explains things.",
    u: ["ကိုထွန်း တောင့်သွားတယ်။ “ဘယ်သူ?”",
        "မေမြတ် သူ့ကို မကြည့်ဘူး။ “မမေးနဲ့”"] },

  { t: "Something She Was Afraid Of", l: "ကိုထွန်းအခန်း", k: "roomclose", w: ["ကိုထွန်း"],
    rev: "the rule",
    g: "မေမြတ်က သရဲဖြစ်နိုင်တယ်။ ဒါပေမယ့် သူမတောင် ကြောက်တဲ့အရာတစ်ခု ဒီတိုက်ထဲမှာ ရှိနေတယ်။",
    p: "Head and shoulders on Ko Htun inside his flat with the balcony door shut behind him, "
      + "lit only by the glass. He is working something out and arriving somewhere worse than "
      + "where he started.",
    u: ["အဲဒီစကားက— ကိုထွန်းကို ပိုကြောက်စေတယ်။",
        "မေမြတ်က သရဲဖြစ်နိုင်တယ်။",
        "ဒါပေမယ့်— သူမကြောက်တဲ့အရာတစ်ခု ဒီတိုက်ထဲမှာ ရှိနေတယ်။"] },

  // ── IX · THE STORAGE ROOM ─────────────────────────────────────────────────
  { t: "Will You Help Me", l: "လှေကား", k: "stair", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "တစ်ည မေမြတ် ကိုထွန်းတံခါး လာခေါက်တယ်။ “ကူညီပေးမလား”",
    p: "The third-floor landing at night. May Myat stands on the LEFT at Ko Htun’s open door, "
      + "having knocked; Ko Htun stands in the doorway on the RIGHT with the warm light of his "
      + "flat behind him. She has come to him for the first time.",
    u: ["တစ်ည— မေမြတ် ကိုထွန်းတံခါး လာခေါက်တယ်။",
        "“ကူညီပေးမလား” “ဘာလုပ်ရမလဲ” “အပေါ်ထပ်သိုလှောင်ခန်းကို သွားရမယ်”"] },

  { t: "Locked for Years", c: [[1, "stinger"]], l: "လှေကား", k: "hands", w: ["မေမြတ်"],
    g: "အပေါ်ဆုံးထပ်က သိုလှောင်ခန်းဟောင်း — နှစ်တွေကြာအောင် သော့ပိတ်ထားတာ။ မေမြတ်မှာ သော့ရှိတယ်။",
    p: "Insert on a heavy padlock furred with rust and dust on a bolt, and May Myat’s hand bringing "
      + "a small key up to it. The key is clean and bright. Her fingers are steady.",
    u: ["အပေါ်ဆုံးထပ်မှာ သိုလှောင်ခန်းဟောင်းတစ်ခန်းရှိတယ်။ နှစ်တွေကြာအောင် သော့ပိတ်ထားတာ။",
        "မေမြတ်မှာ သော့ရှိနေတယ်။"] },

  { t: "Bags, Shoes, Clothes, Phones", c: [[1, "bigstinger"]], l: "သိုလှောင်ခန်း", k: "storage", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "တံခါးဖွင့်လိုက်တော့ အထဲမှာ အိတ်တွေ၊ ဖိနပ်တွေ၊ အဝတ်တွေ၊ ဖုန်းဟောင်းတွေ။",
    p: "The storage room from just inside the door, the bare bulb swinging slightly. Along the "
      + "walls: travel bags and rucksacks stacked, shoes in pairs and singles, folded clothing in "
      + "columns, a shallow tray of old mobile phones. Ko Htun stands in the near left of frame "
      + "with his hand still on the door. Everything is dusty and everything is somebody’s.",
    u: ["တံခါးဖွင့်လိုက်တော့— အထဲမှာ အိတ်တွေ။ ဖိနပ်တွေ။ အဝတ်တွေ။ ဖုန်းဟောင်းတွေ။",
        "လူပျောက်တဲ့သူတွေရဲ့ ပစ္စည်းတွေ အများကြီး။"] },

  { t: "Someone Kept Them", l: "သိုလှောင်ခန်း", k: "roomclose", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "“ဒါတွေ ဘာလို့ ဒီမှာရှိတာလဲ” — “တစ်ယောက်ယောက်က သိမ်းထားတာ” — “ဘယ်သူ” — မဖြေဘူး။",
    p: "Ko Htun and May Myat head and shoulders among the stacks, him on the LEFT turned to her, "
      + "her on the RIGHT facing the shelves and not him. Her refusal to answer is the subject of "
      + "the frame.",
    u: ["ကိုထွန်း မျက်နှာပျက်သွားတယ်။ “ဒါတွေ ဘာလို့ ဒီမှာရှိတာလဲ”",
        "မေမြတ်— “တစ်ယောက်ယောက်က သိမ်းထားတာ” “ဘယ်သူ” သူ မဖြေဘူး။"] },

  // ── X · U KYAW ────────────────────────────────────────────────────────────
  { t: "The Door Closed Behind Them", l: "သိုလှောင်ခန်း", k: "storage", w: ["ဦးကျော်"],
    g: "နောက်က တံခါးပိတ်သံ။ Building caretaker ဦးကျော် ရပ်နေတယ်။",
    p: "Looking back toward the storage room door, which is now shut. U Kyaw stands in front of "
      + "it, keys on a cord at his waist, one hand still on the handle. An old caretaker who has "
      + "found two people where they should not be.",
    u: ["အဲဒီအချိန်— နောက်က တံခါးပိတ်သံ။",
        "Building caretaker ဦးကျော် ရပ်နေတယ်။ အသက်ခြောက်ဆယ်ကျော်။",
        "ဒီတိုက်မှာ နှစ်ပေါင်းနှစ်ဆယ်လောက် အလုပ်လုပ်တာ။"] },

  { t: "You Cannot Be Here", l: "သိုလှောင်ခန်း", k: "storage", w: ["ကိုထွန်း", "ဦးကျော်", "မေမြတ်"],
    g: "သူ မေမြတ်ကို မြင်တော့ မျက်နှာဖြူသွားတယ်။ “မင်း… မဖြစ်နိုင်ဘူး” ပြီးတော့ နောက်ဆုတ်တယ်။",
    p: "A three-way arrangement in the storage room: U Kyaw against the closed door on the LEFT, "
      + "backing into it with the colour gone out of his face and his mouth open; Ko Htun in the "
      + "CENTRE turned toward him; May Myat furthest away on the RIGHT among the belongings, "
      + "perfectly still. U Kyaw is looking past Ko Htun at somebody he knows is not alive.",
    u: ["သူက မေမြတ်ကို မြင်တော့— မျက်နှာဖြူသွားတယ်။ “မင်း… မဖြစ်နိုင်ဘူး”",
        "ကိုထွန်း သူ့ကိုကြည့်တယ်။ “သူ့ကို သိလား” ဦးကျော် နောက်ဆုတ်တယ်။"] },

  { t: "Do You Still Remember", c: [[1, "stinger"]], l: "သိုလှောင်ခန်း", k: "roomclose", w: ["မေမြတ်", "ဦးကျော်"],
    g: "မေမြတ်က တိတ်တိတ်လေး မေးတယ် — “မှတ်မိသေးလား” ဦးကျော် တုန်လာတယ်။",
    p: "Head and shoulders on May Myat asking quietly, with U Kyaw out of focus behind her "
      + "shoulder pressed back against the door. She is completely calm. He is shaking.",
    u: ["မေမြတ်က တိတ်တိတ်လေး မေးတယ်။ “မှတ်မိသေးလား”",
        "ဦးကျော် တုန်လာတယ်။ “ငါ မသတ်ဘူး” “ငါ မသတ်ဘူး”"] },

  { t: "The White Dress", l: "သိုလှောင်ခန်း", k: "hands", w: ["မေမြတ်"],
    g: "မေမြတ်က သိုလှောင်ခန်းထဲက အဖြူရောင် dress တစ်ထည်ကို ဆွဲထုတ်တယ်။",
    p: "Insert on May Myat’s hands drawing a folded white dress out from the middle of a stack of "
      + "clothing, the pile above it settling. The dress is clean and uncreased where everything "
      + "around it is grey with years of dust.",
    u: ["ကိုထွန်း နားမလည်ဘူး။",
        "မေမြတ်က သိုလှောင်ခန်းထဲက အဖြူရောင် dress တစ်ထည်ကို ဆွဲထုတ်တယ်။"] },

  { t: "The Name Tag", c: [[1, "bigstinger"]], l: "သိုလှောင်ခန်း", k: "insert",
    g: "Dress အောက်မှာ နာမည် label — မေမြတ်။",
    p: "Macro on the inside hem of the white dress turned back between two fingers, and a small "
      + "sewn-in cloth name tag on it. The tag is clearly a name tag with handwriting on it; the "
      + "writing itself is not legible at this magnification.",
    u: ["Dress အောက်မှာ— နာမည် label တစ်ခု ချုပ်ထားတယ်။",
        { text: "**မေမြတ်**", say: "အဲဒီ label ပေါ်မှာ ရေးထားတဲ့နာမည်က— မေမြတ်။" }] },

  { t: "A Sad Smile", l: "သိုလှောင်ခန်း", k: "roomclose", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "ကိုထွန်း သူ့ကို လှည့်ကြည့်တယ်။ မေမြတ်က ပြုံးတယ် — ဝမ်းနည်းတဲ့အပြုံး။",
    p: "Ko Htun in the near foreground turning his head toward her, slightly out of focus; May "
      + "Myat sharp behind him holding the dress against herself, smiling at him. It is the same "
      + "small closed-mouth smile from the stairs, and it is the saddest thing in the film.",
    u: ["ကိုထွန်း သူ့ကို လှည့်ကြည့်တယ်။",
        "မေမြတ်က ပြုံးတယ်။ ဝမ်းနည်းတဲ့အပြုံး။"] },

  { t: "You Jumped", l: "သိုလှောင်ခန်း", k: "roomclose", w: ["ဦးကျော်"],
    g: "ဦးကျော် အော်တယ် — “အဲဒီည နင်ကိုယ်တိုင် ခုန်တာ” “ငါ မသတ်ဘူး”",
    p: "Head and shoulders on U Kyaw shouting, flattened against the door with both palms on it "
      + "behind him. Fear rather than aggression — a man insisting on a version of events he has "
      + "told himself for years.",
    u: ["ဦးကျော် အော်တယ်— “အဲဒီည နင်ကိုယ်တိုင် ခုန်တာ”",
        "“ငါ မသတ်ဘူး”"] },

  { t: "He Pushed Me", c: [[2, "bigstinger"]], l: "သိုလှောင်ခန်း", k: "roomclose", w: ["မေမြတ်"],
    g: "“ကျွန်မ ခုန်တာ မဟုတ်ဘူး။ သူပဲ တွန်းချတာ”",
    p: "Head and shoulders on May Myat, holding the white dress. She answers U Kyaw without "
      + "looking at him — her eyes are on Ko Htun, because it is Ko Htun who needs to hear it.",
    u: ["မေမြတ်က— “ကျွန်မ ခုန်တာ မဟုတ်ဘူး” လို့ ပြောတယ်။",
        "ပြီးတော့— ကိုထွန်းကို ကြည့်တယ်။",
        "“သူပဲ တွန်းချတာ”"] },

  // ── XI · WHAT HAPPENED ────────────────────────────────────────────────────
  { t: "She Was One of Them", l: "သိုလှောင်ခန်း", k: "storage",
    g: "ကိုထွန်း နားလည်သွားတယ်။ ဦးကျော်က ပစ္စည်းတွေ ခိုးတတ်တယ်။ မေမြတ် သိသွားတဲ့ည ရဲကို ပြောမယ်လို့ ခြိမ်းခြောက်တယ်။",
    p: "The stacks themselves, shot along the wall — bags, shoes, phones, the accumulation of "
      + "twenty years of a caretaker helping himself to what the missing left behind. No people in "
      + "frame. Ordinary and damning.",
    u: ["အဲဒီအချိန်— ကိုထွန်း နားလည်သွားတယ်။ မေမြတ်လည်း— ဒီတိုက်ထဲမှာ မပြန်နိုင်သေးတဲ့သူတစ်ယောက်။",
        "ဦးကျော်က tenant တွေရဲ့ ပစ္စည်းတွေ ခိုးတတ်တယ်။",
        "မေမြတ် သိသွားတဲ့ည— သူမက ရဲကို ပြောမယ်လို့ ခြိမ်းခြောက်တယ်။"] },

  { t: "Over the Rail", l: "လသာဆောင်", k: "balconyclose",
    g: "ရုန်းရင်းဆန်ခတ်ဖြစ်ရင်း ဦးကျော်က မေမြတ်ကို balcony ကနေ တွန်းချလိုက်တယ်။",
    p: "The far balcony rail at night, empty, shot straight across the dividing wall — the exact "
      + "stretch of rail where this happened, and nothing on it. The story is told by the drop "
      + "beyond it. ⚠️ Do not stage the struggle and do not show a falling figure.",
    u: ["ဦးကျော်က ရုန်းရင်းဆန်ခတ်ဖြစ်ရင်း— မေမြတ်ကို balcony ကနေ တွန်းချလိုက်တယ်။",
        "နောက်ပိုင်းမှာ— ပျောက်သွားတဲ့သူတချို့ရဲ့ ပစ္စည်းတွေကိုလည်း ဦးကျော်က အပေါ်ထပ်သိုလှောင်ခန်းမှာ သိမ်းထားခဲ့တယ်။"] },

  { t: "He Called the Police", l: "လှေကား", k: "stair", w: ["ကိုထွန်း"],
    g: "ကိုထွန်း ဖုန်းနဲ့ recording လုပ်ထားတယ်။ ရဲခေါ်တယ်။ ဦးကျော် အဖမ်းခံရတယ်။",
    p: "The stairwell in daylight from the landing above, looking down the half-turn. Two "
      + "uniformed figures are descending with U Kyaw between them, all three cropped at the "
      + "shoulders by the angle. Ko Htun stands at the rail on the landing watching them go.",
    u: ["ကိုထွန်း ဖုန်းနဲ့ recording လုပ်ထားတယ်။",
        "ရဲခေါ်တယ်။ ဦးကျော် အဖမ်းခံရတယ်။"] },

  // ── XII · GOODBYE ─────────────────────────────────────────────────────────
  { t: "She Was Standing There", l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "အဲဒီည ကိုထွန်း balcony ထွက်တော့ မေမြတ် ရပ်နေတယ် — လက်ထဲမှာ အဖြူရောင် dress။",
    p: "The balcony two-shot at night, rain easing. Ko Htun has just stepped out on the NEAR side. "
      + "Beyond the wall May Myat stands at her line holding the folded white dress in both hands. "
      + "Her line is otherwise completely empty for the first time in the film.",
    u: ["အဲဒီည— ကိုထွန်း balcony ထွက်တယ်။",
        "မေမြတ် ရပ်နေတယ်။ သူ့လက်ထဲမှာ— အဖြူရောင် dress။",
        "ကိုထွန်း မေးတယ်— “ဒီည နောက်ဆုံးလား” မေမြတ် ပြုံးတယ်။ “ထင်တယ်”"] },

  { t: "Ordinary Cloth", l: "လသာဆောင်", k: "line", rev: "motif 2 of 3",
    g: "⚠️ ကြိုးပေါ်က ပုံစံ ဒုတိယအကြိမ် — ဒီတစ်ခါတော့ dress က သာမန်အဝတ်လို လေထဲမှာ လှုပ်တယ်။",
    p: "OCCURRENCE 2 OF 3 OF THE LINE MOTIF. The subject is the white dress alone at the centre of "
      + "the neighbouring line — and unlike every garment before it, THIS ONE IS MOVING: the skirt "
      + "lifted and carried sideways by the wind, the hem rippling, exactly as ordinary washing "
      + "behaves. Identical framing to the first occurrence in every other respect.",
    u: ["သူ dress ကို လှန်းလိုက်တယ်။ လေတိုက်လာတယ်။",
        "ဒီတစ်ခါ— dress က သာမန်အဝတ်လို လေထဲမှာ လှုပ်တယ်။"] },

  { t: "Because I Know What It Is Like", l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း", "မေမြတ်"],
    g: "“ဘာလို့” — “တစ်ယောက်တည်း ပိတ်မိနေတာ ဘယ်လောက်ကြောက်စရာကောင်းလဲ သိလို့”",
    p: "The balcony two-shot, both of them at the dividing wall, the moving dress on the line "
      + "behind her. Two neighbours talking over a wall at night, which is all this ever looked "
      + "like from outside.",
    u: ["မေမြတ်က— “ကျေးဇူးတင်ပါတယ်” လို့ ပြောတယ်။",
        "ကိုထွန်း— “မင်း ညတိုင်း သူတို့ကို ကူညီနေတာလား” “အေး” “ဘာလို့”",
        "မေမြတ်က— “တစ်ယောက်တည်း ပိတ်မိနေတာ ဘယ်လောက်ကြောက်စရာကောင်းလဲ သိလို့”",
        "ကိုထွန်း မျက်ရည်ဝဲလာတယ်။ “မင်းကော” မေမြတ် ပြုံးတယ်။ “အခုတော့ ပြန်လို့ရပြီ”"] },

  { t: "He Blinked", c: [[1, "bigstinger"]], l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း"],
    g: "လေတစ်ချက် တိုက်လာတယ်။ မျက်လုံးမှိတ်ပြီး ပြန်ဖွင့်တော့ မေမြတ် မရှိတော့ဘူး။",
    p: "The balcony two-shot, identical framing to the shot before. Ko Htun stands on the NEAR "
      + "side with his eyes still half closed from a blink. The far balcony is empty. The white "
      + "dress hangs alone on the line. ⚠️ No dissolve, no residue, no figure part-way gone — she "
      + "is simply not there.",
    u: ["လေတစ်ချက် တိုက်လာတယ်။ ကိုထွန်း မျက်လုံးမှိတ်မိတယ်။",
        "ပြန်ဖွင့်တော့— မေမြတ် မရှိတော့ဘူး။ Balcony မှာ— အဖြူရောင် dress တစ်ထည်ပဲ ကျန်တယ်။"] },

  // ── XIII · A MONTH ────────────────────────────────────────────────────────
  { t: "By Morning the Dress Was Gone", l: "လသာဆောင်", k: "balconyclose",
    g: "မနက်ရောက်တော့ dress ပါ ပျောက်သွားတယ်။ ကိုထွန်းက အားလုံးပြီးသွားပြီလို့ ထင်ခဲ့တယ်။",
    p: "The far line in flat morning light, completely bare — a clean empty cord between two hooks "
      + "with no pegs on it at all. The sliding door behind it is shut. Grey ordinary daylight.",
    u: ["မနက်ရောက်တော့— dress ပါ ပျောက်သွားတယ်။",
        "ကိုထွန်းက— အားလုံးပြီးသွားပြီလို့ ထင်ခဲ့တယ်။"] },

  { t: "A Week. Two. A Month.", l: "ကိုထွန်းအခန်း", k: "room", w: ["ကိုထွန်း"],
    g: "ဦးကျော် ဖမ်းခံရပြီ။ မေမြတ်လည်း ထွက်သွားပြီ။ ညဘက် corridor က အသံတွေလည်း မကြားတော့ဘူး။ တိုက်ခန်းက ပုံမှန် ပြန်ဖြစ်လာတယ်။",
    p: "Ko Htun at his desk in the afternoon with the balcony door standing open behind him and "
      + "daylight coming in, working, a cup beside the keyboard. The flat is tidy and the room is "
      + "bright. He looks like a man whose life has gone back to normal.",
    u: ["ဦးကျော် ဖမ်းခံရပြီ။ မေမြတ်လည်း ထွက်သွားပြီ။",
        "ညဘက် corridor က အသံတွေလည်း မကြားတော့ဘူး။",
        "တစ်ပတ်။ နှစ်ပတ်။ တစ်လ။ တိုက်ခန်းက ပုံမှန်ပြန်ဖြစ်လာတယ်။"] },

  // ── XIV · HIS OWN CLOTHES ─────────────────────────────────────────────────
  { t: "Something on the Line", c: [[1, "bigstinger"]], l: "လသာဆောင်", k: "balcony", w: ["ကိုထွန်း"],
    g: "တစ်ည အလုပ်က ပြန်လာပြီး balcony တံခါးဖွင့်လိုက်တော့ ကြိုးပေါ်မှာ အနက်ရောင် T-shirt တစ်ထည်။",
    p: "The balcony two-shot at night. Ko Htun has just slid his own door open and stopped in it "
      + "on the NEAR side, still holding his bag. ⚠️ THE GARMENT IS ON HIS OWN LINE, in the near "
      + "half of frame — not hers. A single dark T-shirt, hanging dead straight. Her balcony beyond "
      + "the wall is empty and dark.",
    u: ["တစ်ည— ကိုထွန်း အလုပ်က ပြန်လာတယ်။",
        "Balcony တံခါးဖွင့်လိုက်တော့— ကြိုးပေါ်မှာ အဝတ်တစ်ထည် လှန်းထားတယ်။ အနက်ရောင် T-shirt။"] },

  { t: "It Was His", c: [[1, "stinger"]], l: "လသာဆောင်", k: "insert",
    g: "သူ့အဝတ်။ ဒီမနက် သူဝတ်သွားတဲ့ shirt။ ဒါပေမယ့် အခုတောင် သူ့အိတ်ထဲမှာ ရှိနေသင့်တာ။",
    p: "Macro on the hanging dark T-shirt: a small worn patch at the shoulder seam and a faded "
      + "print on the chest, the specific damage of a garment somebody actually owns. Behind it, "
      + "out of focus, the strap of Ko Htun’s bag still over his shoulder.",
    u: ["ကိုထွန်း ကြည့်ပြီး ခဏရပ်သွားတယ်။ သူ့အဝတ်။",
        "ဒီမနက် သူဝတ်သွားတဲ့ shirt။ ဒါပေမယ့်— အခုတောင် သူ့အိတ်ထဲမှာ ရှိနေသင့်တာ။"] },

  { t: "His Own ID", l: "လသာဆောင်", k: "hands", w: ["ကိုထွန်း"],
    g: "အိတ်ကပ်ထဲမှာ ID card — ကိုထွန်းရဲ့ ID။ သူ့လက်တွေ တုန်လာတယ်။",
    p: "Insert on Ko Htun’s hands holding the T-shirt, one hand drawing a laminated ID card out of "
      + "the chest pocket. The photograph on it is plainly his own face. His hands have begun to "
      + "shake, which is the reason the card is not steady in frame. Text not legible.",
    u: ["သူ shirt ကို ချက်ချင်း ဆွဲယူတယ်။",
        "အိတ်ကပ်ထဲမှာ— ID card တစ်ခု။ ကိုထွန်းရဲ့ ID။ သူ့လက်တွေ တုန်လာတယ်။"] },

  { t: "Tomorrow I Will Give It Back", c: [[2, "stinger"]], l: "လသာဆောင်", k: "insert", rev: "the rule",
    g: "မေမြတ်ရဲ့စကား သတိရတယ်။ ID နောက်ဘက်မှာ စာတစ်ကြောင်း ရေးထားတယ် — “မနက်ဖြန် ပြန်ပေးမယ်”",
    p: "Macro on the reverse of the ID card held between finger and thumb. A single line of "
      + "handwriting in ballpoint runs across the blank back of the card. The writing is clearly "
      + "handwriting, clearly one short line, and deliberately not legible.",
    u: ["မေမြတ် ပြောခဲ့တဲ့စကားကို သတိရတယ်။",
        "**“တစ်ခါတလေ အဝတ်က ပိုင်ရှင်ထက် အရင်ရောက်လာတတ်တယ်”**",
        "ID card နောက်ကို လှည့်ကြည့်တယ်။ စာတစ်ကြောင်း ရေးထားတယ်— **“မနက်ဖြန် ပြန်ပေးမယ်”**"] },

  // ── XV · THE THING IN THE DARK ────────────────────────────────────────────
  { t: "Click", c: [[2, "stinger"]], l: "လသာဆောင်", k: "dark",
    g: "ဘေးအခန်း balcony ကနေ ကလစ် — အဝတ်ညှပ်သံတစ်ချက်။ ကိုထွန်း ဖြည်းဖြည်း လှည့်ကြည့်တယ်။",
    p: "Across the dividing wall into the unlit neighbouring balcony. Nothing is resolvable over "
      + "there yet — the far half of frame is genuine underexposed darkness with only the outline "
      + "of the rail catching light from the street below. The near edge of Ko Htun’s shoulder is "
      + "entering frame at the left as he turns.",
    u: ["ကိုထွန်း ရင်ထဲ အေးခဲသွားတယ်။",
        "အဲဒီအချိန်— ဘေးအခန်း balcony ကနေ— ကလစ်။ အဝတ်ညှပ်သံတစ်ချက်။",
        "ကိုထွန်း ဖြည်းဖြည်း လှည့်ကြည့်တယ်။"] },

  { t: "Someone Is Standing There", c: [[2, "bigstinger"]], l: "လသာဆောင်", k: "dark", rev: "never resolved",
    g: "⚠️ အမှောင်ထဲက အရာ — ဘယ်တော့မှ အပြည့်အစုံ မပြရ။ အရပ်ရှည်၊ အရမ်းပိန်၊ မျက်နှာ မမြင်ရဘူး။",
    p: "⚠️ THE FIGURE, INTRODUCED AND NEVER RESOLVED. In the unlit far balcony a shape is standing "
      + "at the line. All that is legible is that it is TALL — its head is above the top of the "
      + "sliding door frame behind it — and VERY THIN. Where the face should be there is only "
      + "unlit darkness; no features, no eyes, no highlight, no mask, no smooth blank surface. Do "
      + "not brighten it, do not rim-light it, do not silhouette it cleanly. It is underexposed, "
      + "not designed.",
    u: ["မေမြတ် မရှိဘူး။ ဘေးအခန်းက မှောင်နေတယ်။",
        "ဒါပေမယ့်— အမှောင်ထဲမှာ လူတစ်ယောက် ရပ်နေတယ်။",
        "အရပ်ရှည်တယ်။ အရမ်းပိန်တယ်။ မျက်နှာကို မမြင်ရဘူး။"] },

  { t: "Another of His Shirts", l: "လသာဆောင်", k: "dark", rev: "never resolved",
    g: "သူ့လက်ထဲမှာ ကိုထွန်းရဲ့ နောက်ထပ်အင်္ကျီတစ်ထည်။",
    p: "The same unresolved darkness. A pale garment is held up in it at chest height — the shirt "
      + "is lit well enough to read as one of Ko Htun’s, and the hands holding it are only long "
      + "thin shapes at its edges. Everything above the garment stays dark.",
    u: ["သူ့လက်ထဲမှာ— ကိုထွန်းရဲ့ နောက်ထပ်အင်္ကျီတစ်ထည်။",
        "ကိုထွန်း အသက်ရှူမရသလို ဖြစ်သွားတယ်။"] },

  { t: "Click. Click. Click.", c: [[1, "bigstinger"]], l: "လသာဆောင်", k: "dark",
    g: "အင်္ကျီကို ကြိုးပေါ်တင်တယ်။ ကလစ်။ နောက်တစ်ထည်။ ကလစ်။ ကိုထွန်းရဲ့အဝတ်တွေ တစ်ထည်ပြီးတစ်ထည် ပေါ်လာတယ်။",
    p: "The far line in the dark, now carrying four of Ko Htun’s garments pegged along it, evenly "
      + "spaced, hanging dead straight. The thin shape is further back and even less legible than "
      + "before, one arm raised toward the line. The clothes are the brightest things in frame and "
      + "the only things in focus.",
    u: ["အဲဒီအရာက— အင်္ကျီကို ကြိုးပေါ်တင်တယ်။ ကလစ်။ နောက်တစ်ထည်။ ကလစ်။",
        "ကိုထွန်းရဲ့ အဝတ်တွေ— တစ်ထည်ပြီးတစ်ထည် ပေါ်လာတယ်။"] },

  // ── XVI · ALL OF IT AT ONCE ───────────────────────────────────────────────
  { t: "It All Connected", l: "ကိုထွန်းအခန်း", k: "roomclose", w: ["ကိုထွန်း"],
    g: "အဲဒီအချိန်မှ မေမြတ်ပြောခဲ့တဲ့ စကားတွေအားလုံး ဆက်စပ်သွားတယ်။",
    p: "Head and shoulders on Ko Htun, still on the balcony but with his back now to the far side, "
      + "facing the camera. Everything he was told is arriving at once and none of it means what he "
      + "thought it meant.",
    u: ["အဲဒီအချိန်မှ— မေမြတ်ပြောခဲ့တဲ့စကားတွေ အားလုံး ဆက်စပ်သွားတယ်။",
        "ဒီတိုက်ထဲက လူတွေ— မေမြတ်ကြောင့် ပျောက်တာ မဟုတ်ဘူး။",
        "မေမြတ်က သူတို့ကို ခေါ်နေတာ မဟုတ်ဘူး။ သူမက— **တစ်ယောက်ယောက် ယူသွားပြီးသားလူတွေကို ပြန်လွှတ်ပေးနေတာ။**"] },

  { t: "U Kyaw Was Only a Man", l: "သိုလှောင်ခန်း", k: "storage", rev: "the rule",
    g: "ဦးကျော်က လူဆိုးတစ်ယောက်။ မေမြတ်ကိုလည်း သူ သတ်ခဲ့တယ်။ ဒါပေမယ့် ပျောက်သွားတဲ့လူတိုင်းကို သူ သတ်ခဲ့တာ မဟုတ်ဘူး။",
    p: "The storage room, empty and now lit by a plain work light, with police tape across the "
      + "door frame. The stacks have been partly cleared and numbered markers stand among them. An "
      + "ordinary crime scene, which explains some of the missing and not the rest.",
    u: ["ဦးကျော်က လူဆိုးတစ်ယောက် ဖြစ်ခဲ့တယ်။ မေမြတ်ကိုလည်း သူ သတ်ခဲ့တယ်။",
        "ဒါပေမယ့်— ဒီတိုက်မှာ ပျောက်သွားတဲ့လူတိုင်းကို ဦးကျော် သတ်ခဲ့တာ မဟုတ်ဘူး။",
        "တချို့ကို— တခြားတစ်ခုက ယူခဲ့တာ။"] },

  { t: "And Now She Is Gone", l: "လသာဆောင်", k: "balconyclose",
    g: "မေမြတ် အဝတ်တွေ ပြန်ပေးနိုင်တဲ့အချိန် အဲဒီလူတွေ ထွက်သွားနိုင်တယ်။ ဒါပေမယ့် အခု မေမြတ် မရှိတော့ဘူး။",
    p: "Her balcony from across the wall: the sliding door shut, the line bare, the plastic chair "
      + "gone, the floor washed clean by rain. Nobody lives there and nobody is coming back to it.",
    u: ["မေမြတ်က အဝတ်တွေကို ပြန်ပေးနိုင်တဲ့အချိန်— အဲဒီလူတွေ ထွက်သွားနိုင်တယ်။",
        "ဒါပေမယ့် အခု— မေမြတ် မရှိတော့ဘူး။"] },

  // ── XVII · THE HANDPRINT ──────────────────────────────────────────────────
  { t: "It Pointed at Him", c: [[0, "stinger"]], l: "လသာဆောင်", k: "dark", rev: "never resolved",
    g: "အမှောင်ထဲက အရာက ကိုထွန်းကို ဖြည်းဖြည်း လက်ညှိုးထိုးတယ်။",
    p: "The unresolved darkness across the wall. One long thin arm has come forward far enough to "
      + "catch the edge of the light from Ko Htun’s side, and a single extended finger is pointing "
      + "directly at the camera. The arm reads; the hand reads; nothing above the elbow does.",
    u: ["အမှောင်ထဲက အရာက— ကိုထွန်းကို ဖြည်းဖြည်း လက်ညှိုးထိုးတယ်။"] },

  { t: "The Last One", c: [[1, "stinger"]], l: "လသာဆောင်", k: "line", rev: "motif 3 of 3",
    g: "⚠️ ကြိုးပေါ်က ပုံစံ တတိယအကြိမ်နဲ့ နောက်ဆုံးအကြိမ် — ကိုထွန်းရဲ့ အဖြူရောင် shirt။",
    p: "OCCURRENCE 3 OF 3 OF THE LINE MOTIF, AND THE LAST IMAGE THE FILM RHYMES. The subject is a "
      + "single white shirt at the centre of the line, hanging dead straight in the rain — framed "
      + "identically to the first occurrence, so the audience recognises the shape of the shot "
      + "before it understands whose shirt it is. ⚠️ THE SHIRT IS ON THE FAR LINE AND IT IS KO "
      + "HTUN’S. Nothing of the figure is in frame.",
    u: ["ပြီးတော့— သူ့လက်ထဲက နောက်ဆုံးအဝတ်ကို ဖြန့်လိုက်တယ်။",
        "ကိုထွန်းရဲ့ အဖြူရောင် shirt။"] },

  { t: "From the Inside", c: [[1, "bigstinger"]], l: "လသာဆောင်", k: "insert",
    g: "ရင်ဘတ်နေရာမှာ စိုနေတဲ့ လက်ရာတစ်ခု။ လက်ငါးချောင်း။ အတွင်းဘက်ကနေ တစ်ယောက်ယောက် ဖိကိုင်ထားသလို။",
    p: "Macro on the chest of the hanging white shirt. A wet handprint has soaked through the "
      + "fabric — five fingers and a palm, dark with water against the white. ⚠️ THE PRINT IS "
      + "PRESSED FROM THE INSIDE: the cloth is pushed slightly outward toward the camera by the "
      + "shape of it, as though a hand inside the shirt is pressing out. Water, not blood. Nothing "
      + "else on the shirt.",
    u: ["ရင်ဘတ်နေရာမှာ— စိုနေတဲ့ လက်ရာတစ်ခု။ လက်ငါးချောင်း။",
        "အတွင်းဘက်ကနေ တစ်ယောက်ယောက် ဖိကိုင်ထားသလို။"] },

  // ── XVIII · THE DOOR ──────────────────────────────────────────────────────
  { t: "He Locked It", l: "ကိုထွန်းအခန်း", k: "door", w: ["ကိုထွန်း"],
    g: "ကိုထွန်း တံခါးကို ချက်ချင်းပိတ်လိုက်တယ်။ Lock ချတယ်။ နောက်ဆုတ်တယ်။",
    p: "Inside the flat: the sliding balcony door now shut, filling most of frame, with Ko Htun’s "
      + "hand still on the latch he has just thrown. He is backing away from it into the room, so "
      + "his arm is at full stretch. Beyond the glass, the balcony is a blur of rain and dark.",
    u: ["ကိုထွန်း တံခါးကို ချက်ချင်းပိတ်လိုက်တယ်။",
        "Lock ချတယ်။ နောက်ဆုတ်တယ်။"] },

  { t: "Two More Clicks", l: "ကိုထွန်းအခန်း", k: "door",
    g: "ကလစ်။ Balcony ဘက်က အဝတ်ညှပ်သံ ထပ်ကြားတယ်။ ကလစ်။ နောက်တစ်ချက်။",
    p: "The same shut door from further back in the dark room, nobody in frame. Through the rained "
      + "glass, the shapes of more garments now hang on the near line — Ko Htun’s OWN line, on his "
      + "OWN balcony, on the inside of the locked door. Blurred by water and unreadable in detail.",
    u: ["ကလစ်။ Balcony ဘက်က အဝတ်ညှပ်သံ ထပ်ကြားတယ်။",
        "ကလစ်။ နောက်တစ်ချက်။"] },

  { t: "Run", l: "ကိုထွန်းအခန်း", k: "roomclose", w: ["ကိုထွန်း"], rev: "never resolved",
    g: "ကိုထွန်းနောက်က အခန်းထဲကနေ မေမြတ်အသံတစ်ချက် — အရမ်းတိုးတိုးလေး — “ပြေး…”",
    p: "Head and shoulders on Ko Htun in the dark room, facing the camera, in the instant of "
      + "hearing something behind him. His eyes have widened and his head has not turned yet. The "
      + "room behind him is out of focus and empty. ⚠️ Nothing is there. Do not put a figure, a "
      + "shape or a face in the background.",
    u: ["ပြီးတော့— ကိုထွန်းနောက်က အခန်းထဲကနေ— မေမြတ်အသံတစ်ချက် ကြားလာတယ်။",
        "အရမ်းတိုးတိုးလေး။ **“ပြေး…”**",
        "ကိုထွန်း ချက်ချင်း လှည့်ကြည့်တယ်။ ဘယ်သူမှ မရှိဘူး။"] },

  { t: "Knocking", c: [[1, "bigstinger"]], l: "ကိုထွန်းအခန်း", k: "door",
    g: "Balcony တံခါးဘက်ကတော့ တစ်ချက်။ တစ်ချက်။ တစ်ချက်။ တံခါးခေါက်သံ စလာတယ်။",
    p: "The locked balcony door filling frame from inside, nobody in shot. Beyond the rained glass "
      + "the hanging clothes are visible — and pressed flat against the OUTSIDE of the glass, low "
      + "down and off to one side, the blurred pale shape of a hand. Only the hand. Everything "
      + "attached to it is out of frame.",
    u: ["Balcony တံခါးဘက်ကတော့— တစ်ချက်။ တစ်ချက်။ တစ်ချက်။",
        "တံခါးခေါက်သံ စလာတယ်။"] },

  // ── XIX · THE LAST OF IT ──────────────────────────────────────────────────
  { t: "May Myat Is Gone", l: "ကိုထွန်းအခန်း", k: "roomclose", w: ["ကိုထွန်း"],
    g: "ကိုထွန်း နားလည်သွားတယ်။ မေမြတ် မရှိတော့ဘူး။ ဒါပေမယ့် ယူနေတဲ့အရာကတော့ ရှိနေသေးတယ်။",
    p: "Head and shoulders on Ko Htun with his back against the wall of his own flat, the locked "
      + "door out of focus behind him, understanding exactly what is on the other side of it and "
      + "exactly who is no longer here to help.",
    u: ["အဲဒီအချိန်မှာ— ကိုထွန်း နားလည်သွားတယ်။",
        "မေမြတ် မရှိတော့ဘူး။ ဒါပေမယ့်— **ယူနေတဲ့အရာကတော့ ရှိနေသေးတယ်။**"] },

  { t: "And This Time It Chose Him", c: [[0, "finalstinger"]], l: "လသာဆောင်", k: "line",
    g: "ပြီးတော့ ဒီတစ်ခါ— သူရွေးထားတဲ့လူက ကိုထွန်း။",
    p: "FINAL SHOT. The motif framing one last time, and this time THE LINE IS KO HTUN’S OWN, on his "
      + "own balcony — same lens, same chest height, same square-on framing, the line dead level "
      + "across the upper third. Four or five of his garments hang along it in the rain, "
      + "completely still, exactly as hers used to. Behind them his sliding door stands shut with "
      + "the flat lit behind the glass and nobody at it.",
    u: ["ပြီးတော့ ဒီတစ်ခါ— သူရွေးထားတဲ့လူက— ကိုထွန်း။"] },
];

// ── SCAFFOLDING ─────────────────────────────────────────────────────────────

/**
 * Ordinary building, ordinary weather. A woman hanging washing after midnight
 * is the entire premise; spending atmosphere on making the place look haunted
 * announces the ending in the first shot and leaves the third act nowhere to go.
 */
const STYLE = "Old Yangon apartment block, 16:9, 35mm grain, contemporary photorealism. ORDINARY "
  + "LIGHT ONLY: grey monsoon daylight by day; by night a bare bulb over the landing doors, lit "
  + "windows in the block opposite, a streetlight three floors below, and the glow of a television "
  + "or a monitor from inside a flat. Monsoon rain most of the film. This is a building people "
  + "live in, NOT a haunted set — no green or teal grade, no fog or haze, no abandonment, no rot "
  + "or slime, no blood, no heavy vignette. One still instant, no montage or visible sound "
  + "effects. No gore, legible writing, ID numbers, signage, logo or watermark.";

/** Shots looking into the neighbouring dark, where the figure must stay unread. */
const FIGURE_SHOTS = new Set(["Click", "Someone Is Standing There", "Another of His Shirts",
  "Click. Click. Click.", "It Pointed at Him"]);

/** Before this shot May Myat is a neighbour; after it she is evidence. */
const AFTER_RELEASE = 26;

/**
 * Time of day. Almost the whole film is one man on a balcony after midnight, so
 * night is the default and the eight daylight shots are named individually.
 */
const TIME_NIGHT = "TIME: NIGHT, well after midnight. Monsoon rain still falling. The only light "
  + "is the bare bulb over the landing doors, the lit windows of the block opposite, and a "
  + "streetlight three floors below — everything outside those sources falls away into ordinary "
  + "darkness. No daylight anywhere in frame, no sky, no sun.";

const TIME_DAY = {
  "On the Stairs": "TIME: EARLY MORNING. Flat grey monsoon daylight through the open stairwell "
    + "window, overcast and shadowless. Ordinary daytime.",
  "Moved Away, They Said": "TIME: DAY. Flat grey monsoon daylight in the corridor, overcast and "
    + "shadowless. Ordinary daytime.",
  "Gone by Morning": "TIME: EARLY MORNING, just after first light. Flat grey overcast daylight, "
    + "the rain eased to drizzle. Ordinary daytime.",
  "He Is Not Dead": "TIME: DAY. Flat grey monsoon daylight on the stairs. Ordinary daytime.",
  "He Slipped on the Stairs": "TIME: MORNING. Flat grey daylight through the stairwell window. "
    + "Ordinary daytime.",
  "He Called the Police": "TIME: DAY. Flat grey monsoon daylight in the stairwell. Ordinary "
    + "daytime.",
  "By Morning the Dress Was Gone": "TIME: EARLY MORNING. Flat grey overcast daylight, the rain "
    + "stopped. Ordinary daytime.",
  "A Week. Two. A Month.": "TIME: AFTERNOON. Ordinary daylight coming in through the open balcony "
    + "door, the room bright. This is the one shot in the film that looks like a normal life.",
};

SCENES.forEach((s, i) => {
  const n = i + 1, who = s.w || [];
  s.n = n;
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot ${n} "${s.t}" has no camera key`);
  s.time = TIME_DAY[s.t] || TIME_NIGHT;

  const cont = ["Continuity: ordinary living people photographed straight."];

  // May Myat is a ghost the audience must not be able to spot. Every shortcut
  // that would mark her — pallor of death, wet hair, transparency — is also the
  // shortcut that ruins the reveal, so the note travels with her.
  if (who.includes("မေမြတ်")) cont.push("May Myat looks entirely alive and entirely ordinary — no "
    + "pallor of death, nothing transparent, nothing floating, no wounds. Clear white sclera and "
    + "natural dark brown irises with normal black pupils, no glow.");
  if (who.includes("ကိုထွန်း")) cont.push("Ko Htun in a plain dark T-shirt or pale-blue shirt with "
    + "a grey longyi indoors; clear healthy eyes throughout"
    + (n > AFTER_RELEASE ? ", frightened but never ill-looking." : "."));
  if (who.includes("ဇင်မင်းထက်")) cont.push("The man’s head stays lowered and his eyes stay closed; "
    + "drained of colour but plainly skin, four small dark bruise-marks on the LEFT of the neck, "
    + "no wounds and no blood.");
  if (who.includes("ဦးကျော်")) cont.push("U Kyaw is an ordinary tired caretaker — what is wrong "
    + "with him is only ever in his expression.");
  if (FIGURE_SHOTS.has(s.t)) cont.push("⚠️ THE FIGURE IS NEVER RESOLVED — no face, no features, no "
    + "eyes, no mask, no clean silhouette, no rim light. It is underexposed, not designed. Height "
    + "and thinness and the movement of its hands are all the audience ever gets.");
  cont.push("The two balconies keep the geometry of the master plate: his line near, the dividing "
    + "wall across the middle, her line beyond.");

  s.cont = cont.join(" ");
  s.style = STYLE;
});
