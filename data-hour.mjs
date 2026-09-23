/**
 * တစ်နာရီစာ လူသေ — A CORPSE FOR ONE HOUR
 *
 * Board for rentbody.txt.
 *
 *   1. THE ROOM IS THE FILM. Sixty of the seventy-eight shots happen in one
 *      back room with two coffins on trestles, a bulb and a tripod. The master
 *      geometry plate is therefore load-bearing: fix which coffin is which and
 *      where the camera stands, or every shot is a different room.
 *   2. FROM INSIDE THE COFFIN is the spine. Ne Lin is paralysed and flat on his
 *      back for most of the story, so the film is largely one framing — lying on
 *      the lining looking straight up at a bulb and at whatever leans in over
 *      the opening. It recurs nine times and the lid closes across it twice.
 *   3. ⚠️ THE RED THREAD IS THE STORY. Tied to his wrist, dropped over the side
 *      to a wrist he cannot see, drawn taut, wound one turn at a time, pinned
 *      under the fallen coffin, snapped, and left in his fist in the daylight.
 *      Eleven occurrences in one fixed insert framing. If the thread reads, the
 *      film reads.
 *   4. THE LENS CAP IS ON. The camera stands in the background of six early
 *      shots with its cap plainly in place and nobody remarks on it, so that
 *      the insert at shot 62 is a thing the audience could have caught. Never
 *      draw attention to it before then.
 *   5. THE SON IS DEAD, NOT DAMAGED. A month drowned, and he reads that way
 *      through colour and water alone: flat grey skin, hair soaked and
 *      plastered, lips the same grey as the rest of him, darkened nails, dull
 *      open eyes, damp clothes. ⚠️ NOTHING ON HIM IS DECAYED OR BROKEN — his
 *      skin is whole and smooth everywhere. He is also never shown in a clean
 *      full portrait; we get a hand, the back of a head, a profile, a mouth.
 *   6. U TIN MAUNG IS NOT A VILLAIN UNTIL THE LAST SHOT. He is a neat, quiet,
 *      courteous man who cries while he does this. The ending only works if he
 *      has been sympathetic throughout.
 */

export const CAST = [
  { name: "နေလင်း", en: "Ne Lin — the narrator, about twenty-eight",
    prompt: "A Burmese man of about twenty-eight, lean and ordinary, medium-brown skin, a narrow "
      + "face, short black hair, clean-shaven. A plain dark t-shirt and jeans, cheap trainers, a "
      + "canvas shoulder bag. He looks like someone who takes whatever work comes — unremarkable, "
      + "healthy, a little tired. ⚠️ HE IS PHYSICALLY UNHARMED IN EVERY SHOT of this film, "
      + "including the last: clear skin, both eyes bright, ordinary warm colour. What happens to "
      + "him is paralysis and fear, and it shows only in his face." },
  { name: "ဦးတင်မောင်", en: "U Tin Maung — the father, about sixty",
    prompt: "A Burmese man of about sixty, upright and tidy, medium-brown skin, close-cropped "
      + "grey hair, reading glasses folded in a shirt pocket. A pressed pale short-sleeved shirt "
      + "tucked into dark trousers, a leather belt, polished shoes. ⚠️ HE IS GENTLE, CALM AND "
      + "COURTEOUS and must read that way in every shot until the film says otherwise — a "
      + "soft-spoken older man who is unfailingly polite. Not menacing, not wild-eyed, not "
      + "sinister. His eyes are often wet." },
  { name: "သား", en: "The son — about twenty-eight, a month drowned",
    prompt: "A Burmese man of about twenty-eight, the same height and build as Ne Lin. ⚠️ HE IS "
      + "PLAINLY DEAD AND IT SHOWS ENTIRELY IN COLOUR AND WATER: his skin is a flat drained "
      + "grey-white with no warmth in it anywhere, his black hair is soaked through and plastered "
      + "flat to his skull and forehead, his lips are the same grey as the rest of his face, his "
      + "fingernails are darkened, and his eyes are open, dull and unfocused. He wears an "
      + "ordinary damp collared shirt and trousers, dark with water stains and clinging to him. "
      + "⚠️ HIS SKIN IS WHOLE AND SMOOTH EVERYWHERE — unbroken, unmarked, nothing decayed and "
      + "nothing damaged. He is a drowned man, kept cold, and nothing worse than that.",
    pose: "The subject stands facing the camera square on, full figure in frame, arms hanging at "
      + "his sides, head straight, expression blank and slack" },
  { name: "ရဲသား", en: "The police officer — about forty",
    prompt: "A Burmese police officer of about forty, medium build, medium-brown skin, short "
      + "black hair, in a plain dark-blue Myanmar police uniform shirt with shoulder boards and "
      + "dark trousers. Ordinary, businesslike, unremarkable. ⚠️ Whole and unharmed." },
];

export const PROPS = [
  { name: "ချည်နီ", en: "The red thread — the object the whole film turns on",
    prompt: "A single length of thin RED cotton thread, the kind tied at a Myanmar ceremony — "
      + "matte, slightly fuzzy, hand-spun rather than glossy, about the thickness of kitchen "
      + "string, a strong plain red. Photographed lying loosely coiled. ⚠️ THE COLOUR AND "
      + "THICKNESS MUST BE IDENTICAL EVERY TIME IT APPEARS; it is the one object the audience "
      + "has to track through the whole film." },
  { name: "ကင်မရာ", en: "The camera on the tripod — with its lens cap on",
    prompt: "An older black digital video camera on a black three-legged tripod, at chest height, "
      + "photographed from the front at close range. ⚠️ A ROUND BLACK LENS CAP IS FITTED OVER THE "
      + "LENS, plainly seated and covering the glass completely, with a short black cord running "
      + "from it to the camera body. Everything else about the rig looks ready to shoot. Ordinary, "
      + "slightly dated, well kept." },
];

export const LOCS = [
  { name: "နောက်ခန်း", en: "The back room — MASTER GEOMETRY PLATE",
    prompt: "THE MASTER GEOMETRY PLATE FOR THIS FILM. Almost the whole story happens in this one "
      + "room, so fix it once. The windowless back room of an old photo studio, photographed from "
      + "the doorway at chest height looking in. ⚠️ TWO PLAIN WOODEN COFFINS STAND SIDE BY SIDE IN "
      + "THE MIDDLE OF THE ROOM, each resting across two low wooden trestles at hip height, about "
      + "a metre apart and both running left to right across the frame. ⚠️ THE NEARER COFFIN HAS "
      + "ITS LID OFF and is lined with clean white cloth. ⚠️ THE FURTHER COFFIN IS CLOSED, its lid "
      + "seated flat. One bare bulb hangs from the ceiling directly above the gap between them. A "
      + "black video camera on a tripod stands facing them from the far end. The windows are "
      + "covered over with black cloth. Bare plaster walls, a concrete floor. ⚠️ THE ROOM IS "
      + "ORDINARY AND TIDY — clean walls, swept floor, a working bulb. Empty of people for this "
      + "plate." },
  { name: "ဆိုင်ရှေ့", en: "The front of the old photo studio",
    prompt: "The front room of a long-closed suburban Myanmar photo studio in daylight: a glass "
      + "shopfront, and on the walls rows of framed display portraits — family groups, graduation "
      + "photographs, wedding pictures — all of them under a visible layer of dust. A counter with "
      + "nothing on it. ⚠️ THE PORTRAITS ARE ORDINARY, SMILING AND UNREMARKABLE; the only thing "
      + "wrong with the room is that it has obviously not opened in a long time. Empty of people "
      + "for this plate." },
  { name: "ရဲစခန်း", en: "The police station",
    prompt: "The front office of an ordinary Myanmar police station in daylight: a wooden counter, "
      + "a ceiling fan, a noticeboard, plastic chairs against one wall, a barred window. Plain, "
      + "bright, businesslike and entirely unfrightening. Empty of people for this plate." },
];

/**
 * One composition per shot, stated first and alone.
 *
 * Two of these are the film. `inside` is where Ne Lin spends most of the story
 * and it recurs nine times; `thread` recurs eleven. Both are fixed here once so
 * that the moment the lid starts closing across `inside`, and the moment the
 * thread goes taut in `thread`, land on a frame the audience already knows.
 */
const CAM = {
  inside: 'FROM INSIDE THE COFFIN. Camera lying on its back on the white lining where Ne Lin’s head is, looking straight up, so the frame holds the ceiling, the bare bulb, the rim of the coffin at the edges, and whatever leans in over the opening. ⚠️ Reproduce this framing identically every time it recurs.',
  thread: 'THE RED THREAD. Tight insert filling the frame with the thread and whatever it is tied to or running across. ⚠️ Reproduce this framing identically every time it recurs.',
  two: 'THE TWO COFFINS. Camera at chest height at the foot of the two trestled coffins, both of them in frame side by side as in the master plate.',
  room: 'IN THE BACK ROOM. Camera at chest height as in the master plate, the doorway behind camera.',
  ne: 'CLOSE ON NE LIN. Camera at his eye height, head-and-shoulders crop.',
  tin: 'CLOSE ON U TIN MAUNG. Camera at his eye height, head-and-shoulders crop.',
  son: 'THE SON, PARTIALLY. Camera at chest height framed so only part of him is in shot — a hand, a shoulder, the back of his head, a profile — never a clean full view of him.',
  floor: 'LOW ON THE FLOOR. Camera on the concrete floor itself, a few inches above it.',
  front: 'IN THE FRONT OF THE SHOP. Camera at chest height among the dusty display portraits.',
  station: 'IN THE POLICE STATION. Camera at chest height across the counter.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
  wide: 'WIDE. Camera at chest height far enough back to hold the whole room.',
};

export const SCENES = [
  // ── I · THE JOB ───────────────────────────────────────────────────────────
  { t: "Five Lakhs to Play a Corpse", l: "ဆိုင်ရှေ့", k: "ne", w: ["နေလင်း"],
    g: "လူသေဟန်ဆောင်ပေးရင် ငွေငါးသိန်းပေးမယ်တဲ့။ လုပ်ရမှာက ခေါင်းတလားထဲမှာ မျက်လုံးမှိတ်ပြီး လှဲနေပေးရုံပဲ။",
    p: "Ne Lin standing in the dusty front room of the closed photo studio in daylight, bag over "
      + "one shoulder, looking off at something with the mild interest of a man being offered "
      + "easy work. Rows of dusty framed portraits behind him.",
    u: ["လူသေဟန်ဆောင်ပေးရင် ငွေငါးသိန်းပေးမယ်တဲ့။",
        "လုပ်ရမှာက ခေါင်းတလားထဲမှာ မျက်လုံးမှိတ်ပြီး လှဲနေပေးရုံပဲ။",
        "အလုပ်ကို ကျွန်တော် လက်ခံလိုက်တယ်။"] },

  { t: "Ten Minutes In, He Breathed", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "two",
    g: "⚠️ ရိုက်ကူးရေးစပြီး ဆယ်မိနစ်လောက်အကြာမှာ ဘေးက ခေါင်းတလားထဲကလူ အသက်ပြန်ရှူလာတယ်။",
    p: "The two trestled coffins side by side under the bare bulb, the near one open and lined "
      + "white, the far one closed. ⚠️ NOBODY IS IN SHOT. Still, cold, ordinary — a room waiting.",
    u: ["ဒါပေမယ့် ရိုက်ကူးရေးစပြီး ဆယ်မိနစ်လောက်အကြာမှာ—",
        "ကျွန်တော့်ဘေးက ခေါင်းတလားထဲကလူက အသက်ပြန်ရှူလာတယ်။",
        "အဲဒီအချိန်ကစပြီး ကျွန်တော်ကတော့ အသက်ရှူရ ပိုခက်လာတယ်။"] },

  { t: "My Name Is Ne Lin", l: "ဆိုင်ရှေ့", k: "ne", w: ["နေလင်း"],
    g: "ကျွန်တော့်နာမည် နေလင်း။ ရုပ်ရှင်ရိုက်ကွင်းတွေမှာ လူပိုလိုရင် ဝင်လုပ်တယ်။",
    p: "Ne Lin in daylight, half turned to camera, entirely ordinary — a working man in a plain "
      + "t-shirt with a canvas bag. Dusty portraits soft behind him.",
    u: ["ကျွန်တော့်နာမည် နေလင်း။",
        "ရုပ်ရှင်ရိုက်ကွင်းတွေမှာ လူပိုလိုရင် ဝင်လုပ်တယ်။",
        "တစ်ခါတလေ ကြော်ငြာတိုလေးတွေလည်း သရုပ်ဆောင်ရတယ်။"] },

  { t: "U Tin Maung", l: "ဆိုင်ရှေ့", k: "tin", w: ["ဦးတင်မောင်"],
    g: "အလုပ်လာအပ်တဲ့လူက ဦးတင်မောင်။ အသက်ခြောက်ဆယ်ဝန်းကျင်။ အဝတ်အစားသပ်သပ်ရပ်ရပ်နဲ့ စကားပြောအေးတဲ့လူ။",
    p: "Close on U Tin Maung in daylight, neat and composed, looking directly at camera with a "
      + "small courteous expression. ⚠️ HE MUST READ AS A KIND, ORDINARY OLDER MAN — pressed "
      + "shirt, tidy grey hair, nothing at all wrong with him.",
    u: ["အဲဒီအလုပ်လာအပ်တဲ့လူက ဦးတင်မောင်။",
        "အသက်ခြောက်ဆယ်ဝန်းကျင်။",
        "အဝတ်အစားသပ်သပ်ရပ်ရပ်နဲ့ စကားပြောအေးတဲ့လူ။"] },

  { t: "Only Someone to Lie There", l: "ဆိုင်ရှေ့", k: "front", w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "“အဓိကသရုပ်ဆောင် မလိုသေးဘူး။ လူသေပုံစံ လှဲနေပေးမယ့်သူပဲ လိုတာ။ မင်းအရပ်နဲ့ဆို အဆင်ပြေတယ်။”",
    p: "The two men talking in the dusty front room in daylight, U Tin Maung explaining with one "
      + "hand open, Ne Lin listening with his thumbs in his bag strap. ⚠️ U TIN MAUNG IS LOOKING "
      + "AT NE LIN'S BODY rather than his face — at his height and his shoulders — while he "
      + "talks. Ordinary, friendly, unhurried.",
    u: ["သူက သရဲကားတိုတစ်ကား အစမ်းရိုက်ချင်တယ်လို့ ပြောတယ်။",
        "“အဓိကသရုပ်ဆောင် မလိုသေးဘူး။ လူသေပုံစံ လှဲနေပေးမယ့်သူပဲ လိုတာ။”",
        "“မင်းအရပ်နဲ့ဆို အဆင်ပြေတယ်။”"] },

  { t: "I Had Done It Before", l: "ဆိုင်ရှေ့", k: "front",
    g: "အရင်ကလည်း လူသေဟန်ဆောင်ဖူးတော့ ကျွန်တော် မထူးဆန်းဘူးလို့ ထင်ခဲ့တယ်။",
    p: "The dusty front room of the old studio in daylight: rows of framed family portraits, "
      + "graduation photographs and wedding pictures under a layer of dust, a bare counter. "
      + "⚠️ NOBODY IN SHOT. Ordinary, closed-up, unremarkable.",
    u: ["အရင်ကလည်း လူသေဟန်ဆောင်ဖူးတော့ ကျွန်တော် မထူးဆန်းဘူးလို့ ထင်ခဲ့တယ်။",
        "အလုပ်နေရာက မြို့စွန်က ဓာတ်ပုံဆိုင်ဟောင်းတစ်ဆိုင်။"] },

  { t: "A Shop That Had Not Opened in a Long Time", l: "ဆိုင်ရှေ့", k: "insert",
    g: "ဆိုင်ရှေ့မှာ မိသားစုပုံတွေ ချိတ်ထားတုန်းပဲ။ ဒါပေမယ့် ဖုန်တက်နေတာကြည့်ရင် ပုံမှန်မဖွင့်တော့တဲ့ဆိုင်မှန်း သိသာတယ်။",
    p: "Tight insert on two or three framed portraits on the wall — a smiling family group, a "
      + "graduate in a gown — with a clear film of dust across the glass and a dust line along "
      + "the top of each frame. Ordinary daylight.",
    u: ["ဆိုင်ရှေ့မှာ မိသားစုပုံတွေ၊ ဘွဲ့ယူပုံတွေ ချိတ်ထားတုန်းပဲ။",
        "ဒါပေမယ့် ဖုန်တက်နေတာကြည့်ရင် ပုံမှန်မဖွင့်တော့တဲ့ဆိုင်မှန်း သိသာတယ်။"] },

  // ── II · THE BACK ROOM ────────────────────────────────────────────────────
  { t: "He Took Me Into the Back Room", l: "နောက်ခန်း", k: "room",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "ဦးတင်မောင်က ကျွန်တော့်ကို ဆိုင်နောက်ခန်းထဲ ခေါ်သွားတယ်။ အခန်းထဲမှာ မီးလုံးတစ်လုံး။",
    p: "From the doorway: U Tin Maung leading Ne Lin into the windowless back room, both seen "
      + "from behind, the single bare bulb ahead of them and the shapes of the two trestled "
      + "coffins beyond. ⚠️ The camera on its tripod stands at the far end of the room, "
      + "unremarked.",
    u: ["ဦးတင်မောင်က ကျွန်တော့်ကို ဆိုင်နောက်ခန်းထဲ ခေါ်သွားတယ်။",
        "အခန်းထဲမှာ မီးလုံးတစ်လုံး။",
        "ခြေထောက်သုံးချောင်းထောက်ထားတဲ့ ကင်မရာတစ်လုံး။"] },

  { t: "Two Wooden Coffins", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "two",
    g: "⚠️ ပြီးတော့ — သစ်သားခေါင်းတလားနှစ်လုံး။",
    p: "The master geometry, established: two plain wooden coffins side by side on trestles under "
      + "the bare bulb. ⚠️ THE NEAR ONE HAS NO LID AND IS LINED WITH CLEAN WHITE CLOTH; THE FAR "
      + "ONE IS CLOSED with its lid seated flat. Black cloth over the windows behind them. The "
      + "tripod camera stands at the far end of the room, in shot and unremarked.",
    u: ["ပြီးတော့ သစ်သားခေါင်းတလားနှစ်လုံး။",
        "တစ်လုံးက အဖုံးဖွင့်ထားတယ်။ အတွင်းမှာ အဖြူရောင်အခင်းခင်းထားတယ်။",
        "နောက်တစ်လုံးက အဖုံးပိတ်ထားတယ်။"] },

  { t: "One Is Already Here", c: [[3, "stinger"]], l: "နောက်ခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ “တခြားသူတွေရော မလာသေးဘူးလား။” ဦးတင်မောင်က ပိတ်ထားတဲ့ခေါင်းတလားကို ကြည့်တယ်။ “တစ်ယောက်က ရောက်ပြီးပြီ။”",
    p: "Close on U Tin Maung under the bulb, his face turned to look steadily at something off to "
      + "one side, his expression mild and matter-of-fact. ⚠️ HE IS NOT SMILING AND NOT JOKING.",
    u: ["“တခြားသူတွေရော မလာသေးဘူးလား။”",
        "ဦးတင်မောင်က ပိတ်ထားတဲ့ခေါင်းတလားကို ကြည့်တယ်။",
        "“တစ်ယောက်က ရောက်ပြီးပြီ။”"] },

  { t: "He Did Not Laugh", l: "နောက်ခန်း", k: "ne", w: ["နေလင်း"],
    g: "ကျွန်တော် ရယ်လိုက်တယ်။ “သူက အထဲမှာ စောင့်နေတာလား။” ဦးတင်မောင် မရယ်ဘူး။",
    p: "Close on Ne Lin under the bulb caught mid-laugh, the grin already faltering at one corner "
      + "as he realises nobody is laughing with him.",
    u: ["ကျွန်တော် ရယ်လိုက်တယ်။ “သူက အထဲမှာ စောင့်နေတာလား။”",
        "ဦးတင်မောင် မရယ်ဘူး။"] },

  { t: "Half the Money First", l: "နောက်ခန်း", k: "insert",
    g: "ကျွန်တော့်လက်ထဲ ငွေတစ်ဝက် အရင်ထည့်ပေးတယ်။ “ပြီးရင် ကျန်တာပေးမယ်။”",
    p: "Insert on an older man's hands laying a folded bundle of Myanmar banknotes into a younger "
      + "man's open palm under the bulb. ⚠️ NO NUMERALS OR WRITING ARE LEGIBLE on the notes. "
      + "Ordinary, careful, businesslike.",
    u: ["ကျွန်တော့်လက်ထဲ ငွေတစ်ဝက် အရင်ထည့်ပေးတယ်။",
        "“ပြီးရင် ကျန်တာပေးမယ်။”",
        "ကျွန်တော်က ငွေကို အိတ်ထဲထည့်ပြီး အခန်းထဲ ထပ်ကြည့်တယ်။"] },

  { t: "The Room Was Cold", l: "နောက်ခန်း", k: "wide", w: ["နေလင်း"],
    g: "ပြတင်းပေါက်တွေကို အဝတ်မည်းနဲ့ ကာထားတယ်။ လေမဝင်လို့ အိုက်သင့်ပေမယ့် အခန်းက အေးနေတယ်။ အရမ်းအေးတယ်။",
    p: "Wide on the sealed back room with Ne Lin standing small in the middle of it, looking up at "
      + "the black cloth nailed over the windows, his arms folded across himself. ⚠️ THE ROOM "
      + "LOOKS AIRLESS AND SHUT UP but he is holding himself against cold. Bare bulb, bare walls.",
    u: ["ပြတင်းပေါက်တွေကို အဝတ်မည်းနဲ့ ကာထားတယ်။",
        "လေမဝင်လို့ အိုက်သင့်ပေမယ့် အခန်းက အေးနေတယ်။ အရမ်းအေးတယ်။"] },

  { t: "Water Under the Closed One", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "floor",
    g: "⚠️ ပိတ်ထားတဲ့ခေါင်းတလားအောက်မှာတော့ ရေစက်တွေ ကျနေတယ်။",
    p: "⚠️ THE FIRST THING THAT IS ACTUALLY WRONG. Camera low on the concrete floor beneath the "
      + "closed coffin: a spreading dark patch of water on the concrete, and a single drop caught "
      + "falling from the seam of the coffin above. The trestle legs either side. Everything else "
      + "in the room is dry.",
    u: ["ပိတ်ထားတဲ့ခေါင်းတလားအောက်မှာတော့ ရေစက်တွေ ကျနေတယ်။",
        "“အောက်မှာ ရေစိုနေတာနော် ဦး။” “သုတ်လိုက်မယ်။ မင်း အရင်ဝင်လှဲလိုက်။”"] },

  // ── III · INTO THE COFFIN ─────────────────────────────────────────────────
  { t: "It Fitted Me Exactly", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "inside",
    w: ["နေလင်း"],
    g: "⚠️ ခေါင်းတလားထဲ ဝင်လှဲလိုက်တော့ ကျွန်တော့်ကိုယ်နဲ့ အံကိုက်ဖြစ်နေတယ်။",
    p: "OCCURRENCE 1 OF 9 OF THE VIEW FROM INSIDE. Establish it precisely. From flat on the white "
      + "lining looking straight up: the ceiling, the bare bulb burning directly overhead, and "
      + "the wooden rim of the coffin closing the frame on all four sides. ⚠️ THE RIM IS CLOSE ON "
      + "BOTH SIDES — the box is only just wider than a man.",
    u: ["ခေါင်းတလားထဲ ဝင်လှဲလိုက်တော့ ကျွန်တော့်ကိုယ်နဲ့ အံကိုက်ဖြစ်နေတယ်။",
        "ပခုံးနှစ်ဖက်က သစ်သားနံရံနဲ့ ထိလုနီးပါး။",
        "ခြေထောက်ဆန့်လိုက်ရင် အဆုံးကို နည်းနည်းပဲလိုတယ်။"] },

  { t: "He Crossed My Hands", l: "နောက်ခန်း", k: "insert", w: ["နေလင်း", "ဦးတင်မောင်"],
    g: "ဦးတင်မောင်က ကျွန်တော့်လက်နှစ်ဖက်ကို ရင်ဘတ်ပေါ် တင်ပေးတယ်။",
    p: "Insert from above on Ne Lin's chest in the white-lined coffin, U Tin Maung's hands "
      + "carefully folding the younger man's two hands one over the other on his breastbone and "
      + "settling them. ⚠️ THE GESTURE IS TENDER AND PRACTISED, the way a body is laid out.",
    u: ["ဦးတင်မောင်က ကျွန်တော့်လက်နှစ်ဖက်ကို ရင်ဘတ်ပေါ် တင်ပေးတယ်။"] },

  { t: "The Red Thread", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "thread",
    w: ["နေလင်း"], rev: "thread 1 of 11",
    g: "⚠️ ချည်နီ ပထမအကြိမ် — လက်ကောက်ဝတ်တစ်ဖက်မှာ ချည်နီတစ်ချောင်း ချည်တယ်။",
    p: "OCCURRENCE 1 OF 11 OF THE THREAD. Establish it precisely. Tight insert filling the frame "
      + "with Ne Lin's left wrist against the white lining and an older man's fingers pulling a "
      + "knot of thin RED cotton thread closed around it. ⚠️ THE THREAD IS MATTE RED COTTON, "
      + "ABOUT THE THICKNESS OF KITCHEN STRING — this exact colour and thickness returns ten more "
      + "times.",
    u: ["ပြီးတော့ လက်ကောက်ဝတ်တစ်ဖက်မှာ ချည်နီတစ်ချောင်း ချည်တယ်။",
        "“ဒါက ဇာတ်ဝင်ခန်းထဲ ပါမှာလား။” “အေး။ မဖြုတ်နဲ့နော်။”"] },

  { t: "I Could Not See Where It Went", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "thread",
    rev: "thread 2 of 11",
    g: "⚠️ ချည်ရဲ့ နောက်တစ်ဖက်က ခေါင်းတလားဘေးကို ကျသွားတယ်။ ဘယ်အထိ ရောက်နေလဲ ကျွန်တော် မမြင်ရဘူး။",
    p: "OCCURRENCE 2 OF 11. The same tight framing, now on the outer edge of the coffin: the red "
      + "thread runs up over the wooden rim and drops away down the far side, ⚠️ GOING OUT OF "
      + "FRAME TOWARDS THE OTHER COFFIN AND NOT ARRIVING ANYWHERE we can see. Slack, hanging, "
      + "unremarkable.",
    u: ["ချည်ရဲ့ နောက်တစ်ဖက်က ခေါင်းတလားဘေးကို ကျသွားတယ်။",
        "ဘယ်အထိ ရောက်နေလဲ ကျွန်တော် မမြင်ရဘူး။"] },

  { t: "You Are the Dead One", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "inside",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ “မင်းက လူသေ။ ဘာအသံကြားကြား မလှုပ်နဲ့။ ဟိုဘက်ကလူ ထလာလည်း မျက်လုံးမဖွင့်နဲ့။”",
    p: "OCCURRENCE 2 OF 9 OF THE VIEW FROM INSIDE. The same framing, and now U Tin Maung's head "
      + "and shoulders lean in over the opening and fill the upper half of it, blocking part of "
      + "the bulb, looking straight down into the lens as he gives instructions. ⚠️ HIS FACE IS "
      + "KIND AND PATIENT.",
    u: ["ဦးတင်မောင်က ကျွန်တော့်မျက်နှာနား ငုံ့လာတယ်။",
        "“မင်းက လူသေ။ ဘာအသံကြားကြား မလှုပ်နဲ့။”",
        "“ဟိုဘက်ကလူ ထလာလည်း မျက်လုံးမဖွင့်နဲ့။ ဦးက ရပ်ဆိုမှ ရပ်။”"] },

  { t: "Start", l: "နောက်ခန်း", k: "insert", w: ["ဦးတင်မောင်"],
    g: "သူ ကင်မရာနား ပြန်သွားတယ်။ ခလုတ်နှိပ်သံတစ်ချက် ကြားရတယ်။ “စပြီ။”",
    p: "Insert on U Tin Maung's hand at the back of the tripod camera, one finger pressing a "
      + "button on the body. ⚠️ FRAMED FROM BEHIND THE CAMERA so the lens end is out of shot. "
      + "Ordinary, unhurried.",
    u: ["သူ ကင်မရာနား ပြန်သွားတယ်။",
        "ခလုတ်နှိပ်သံတစ်ချက် ကြားရတယ်။ “စပြီ။”",
        "ကျွန်တော် မျက်လုံးမှိတ်လိုက်တယ်။"] },

  // ── IV · THE LID NEXT DOOR ────────────────────────────────────────────────
  { t: "At First It Was Quiet", l: "နောက်ခန်း", k: "inside", w: ["နေလင်း"],
    g: "ပထမတော့ ငြိမ်နေတယ်။ မီးလုံးအသံနဲ့ ဦးတင်မောင် လမ်းလျှောက်သံပဲ ကြားရတယ်။",
    p: "OCCURRENCE 3 OF 9 OF THE VIEW FROM INSIDE. The same framing with nobody leaning in: just "
      + "the ceiling, the burning bulb and the wooden rim. ⚠️ NE LIN'S CLOSED EYELIDS AND THE "
      + "BRIDGE OF HIS NOSE are in the extreme near foreground at the bottom of frame, soft and "
      + "out of focus. Completely still.",
    u: ["ပထမတော့ ငြိမ်နေတယ်။",
        "မီးလုံးက အသံတိုးတိုးထွက်နေတာနဲ့ ဦးတင်မောင် လမ်းလျှောက်သံပဲ ကြားရတယ်။"] },

  { t: "The Other Lid Moved", c: [[1, "stinger"]], l: "နောက်ခန်း", k: "two",
    g: "⚠️ ခဏကြာတော့ ဘေးကခေါင်းတလားအဖုံး ရွှေ့သံ။ ကျွီ… ပြီးတော့ အဖုံးကို ကြမ်းပြင်ပေါ် ချလိုက်သံ။",
    p: "The two coffins from the foot as established — ⚠️ AND THE LID OF THE FAR ONE HAS BEEN "
      + "LIFTED CLEAR AND IS LEANING AGAINST THE TRESTLE ON THE FLOOR. The far coffin now stands "
      + "open, its interior dark and not readable from this angle. U Tin Maung is not in shot. "
      + "The near coffin is unchanged.",
    u: ["ခဏကြာတော့ ဘေးကခေါင်းတလားအဖုံး ရွှေ့သံ ကြားရတယ်။",
        "ပြီးတော့ သစ်သားအဖုံးကို ကြမ်းပြင်ပေါ် ချလိုက်သံ။"] },

  { t: "The Smell Changed", l: "နောက်ခန်း", k: "ne", w: ["နေလင်း"],
    g: "အခန်းထဲက အနံ့ ပြောင်းသွားတယ်။ မသန့်တဲ့ရေနဲ့ စိုထိုင်းနေတဲ့အဝတ်ကို အလုံပိတ်ထားသလို အနံ့မျိုး။",
    p: "Close on Ne Lin's face lying in the coffin with his eyes shut, ⚠️ HIS NOSE AND UPPER LIP "
      + "WRINKLING involuntarily against a smell. Everything else about him is still. Bulb light "
      + "from directly above.",
    u: ["အခန်းထဲက အနံ့ ပြောင်းသွားတယ်။",
        "မသန့်တဲ့ရေနဲ့ စိုထိုင်းနေတဲ့အဝတ်ကို အလုံပိတ်ထားသလို အနံ့မျိုး။",
        "ကျွန်တော် နှာခေါင်းရှုံ့မိတယ်။ “မလှုပ်နဲ့ နေလင်း။”"] },

  { t: "A Long Breath Beside Me", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "inside",
    w: ["နေလင်း"],
    g: "⚠️ ဘေးကနေ အသက်ရှူသံ ရှည်ရှည်တစ်ချက် ကြားလာတယ်။ ဟား…",
    p: "OCCURRENCE 4 OF 9 OF THE VIEW FROM INSIDE. The same framing, unchanged and empty — "
      + "ceiling, bulb, rim — ⚠️ AND NE LIN'S EYES HAVE SNAPPED OPEN in the near foreground at "
      + "the bottom of frame, wide and fixed on the ceiling. Nothing else in the picture has "
      + "moved.",
    u: ["အဲဒီအချိန် ဘေးကနေ အသက်ရှူသံ ရှည်ရှည်တစ်ချက် ကြားလာတယ်။",
        "ကျွန်တော့်ရင်ဘတ်ထဲက လေလည်း တစ်ပြိုင်နက် ထွက်သွားတယ်။"] },

  { t: "I Could Not Fill My Chest", l: "နောက်ခန်း", k: "insert",
    w: ["နေလင်း"],
    g: "အသက်ပြန်ရှူမလို့လုပ်တယ်။ အပြည့်ရှူလို့ မရဘူး။ ရင်ဘတ်ပေါ်မှာ လေးလံတဲ့အရာတစ်ခု တင်ထားသလိုပဲ။",
    p: "Insert from above on Ne Lin's crossed hands on his chest in the white lining, ⚠️ THE "
      + "TENDONS STANDING OUT ON THE BACKS OF BOTH HANDS as he strains, the fingers pressed hard "
      + "against his shirt. His chest is barely lifted. Nothing is on top of him.",
    u: ["အသက်ပြန်ရှူမလို့လုပ်တယ်။ အပြည့်ရှူလို့ မရဘူး။",
        "ရင်ဘတ်ပေါ်မှာ လေးလံတဲ့အရာတစ်ခု တင်ထားသလိုပဲ။"] },

  { t: "He Was Not Looking at Me", l: "နောက်ခန်း", k: "wide",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။ “ဦး… ခဏရပ်ဦး။” ဦးတင်မောင်က ကျွန်တော့်ကို မကြည့်ဘူး။",
    p: "Wide on the room: Ne Lin lying in the near coffin with his head turned and his eyes open, "
      + "and ⚠️ U TIN MAUNG STANDING WITH HIS BACK TO HIM at the far coffin, head bowed over it. "
      + "The gap between the two men is the whole point of the frame.",
    u: ["ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။ “ဦး… ခဏရပ်ဦး။”",
        "အသံက ထင်ထားတာထက် တိုးနေတယ်။",
        "ဦးတင်မောင်က ကျွန်တော့်ကို မကြည့်ဘူး။ ဘေးကခေါင်းတလားနားမှာ ရပ်နေတယ်။"] },

  { t: "Son, Can You Hear Your Father", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ သူ့မျက်နှာမှာ မျက်ရည်တွေ။ “သား… အဖေ့ကို ကြားလား။”",
    p: "Close on U Tin Maung looking down into the far coffin, ⚠️ HIS FACE WET WITH TEARS, his "
      + "mouth shaping a word very quietly. Bulb light from above. He looks like a father at a "
      + "bedside and nothing else.",
    u: ["သူ့မျက်နှာမှာ မျက်ရည်တွေ။",
        "“သား…” သူ တိုးတိုးခေါ်လိုက်တယ်။ “အဖေ့ကို ကြားလား။”"] },

  { t: "I Could Not Sit Up", l: "နောက်ခန်း", k: "inside", w: ["နေလင်း"],
    g: "ကျွန်တော် ထထိုင်ဖို့ ကြိုးစားတယ်။ မရဘူး။ လက်နှစ်ဖက်ကိုလည်း မြှောက်လို့မရတော့ဘူး။",
    p: "OCCURRENCE 5 OF 9 OF THE VIEW FROM INSIDE. The same framing. ⚠️ NE LIN'S CHIN AND "
      + "STRAINING JAW have entered the bottom of frame as he tries to lift his head off the "
      + "lining, the cords standing out in his neck — and he has got barely an inch. Ceiling, "
      + "bulb and rim unchanged above him.",
    u: ["ကျွန်တော် ထထိုင်ဖို့ ကြိုးစားတယ်။ မရဘူး။",
        "လက်နှစ်ဖက်ကိုလည်း မြှောက်လို့မရတော့ဘူး။"] },

  // ── V · THE HAND ──────────────────────────────────────────────────────────
  { t: "A Hand Came Up", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "son", w: ["သား"],
    g: "⚠️ ဘေးကခေါင်းတလားထဲမှာတော့ လက်တစ်ဖက် ဖြည်းဖြည်း မြှောက်လာတယ်။ ဖြူဖျော့နေတဲ့ လက်။ လက်သည်းတွေက မည်းနေတယ်။",
    p: "⚠️ THE FIRST SIGHT OF HIM, AND IT IS ONLY A HAND. Framed on the rim of the far coffin: a "
      + "single hand risen above it and closing on the wooden edge. ⚠️ THE SKIN IS FLAT DRAINED "
      + "GREY-WHITE AND THE FINGERNAILS ARE DARKENED; the hand is wet and the sleeve at the wrist "
      + "is soaked. ⚠️ The skin is whole, smooth and unbroken. Nothing else of him is in shot.",
    u: ["ဒါပေမယ့် ဘေးကခေါင်းတလားထဲမှာတော့ လက်တစ်ဖက် ဖြည်းဖြည်း မြှောက်လာတယ်။",
        "ဖြူဖျော့နေတဲ့ လက်။ လက်သည်းတွေက မည်းနေတယ်။",
        "အဲဒီလက်က ခေါင်းတလားအနားကို ကိုင်လိုက်တယ်။"] },

  { t: "My Fingers Locked", l: "နောက်ခန်း", k: "insert", w: ["နေလင်း"],
    g: "ကျွန်တော့်လက်ချောင်းတွေကတော့ ရင်ဘတ်ပေါ်မှာ တစ်ချောင်းချင်း တောင့်တင်းသွားတယ်။",
    p: "Insert from above on Ne Lin's crossed hands on his chest, ⚠️ THE FINGERS CURLING RIGID "
      + "AND SEPARATE, each one drawn in tight and locked. His shirt is bunched under them. "
      + "Bulb light.",
    u: ["ကျွန်တော့်လက်ချောင်းတွေကတော့ ရင်ဘတ်ပေါ်မှာ တစ်ချောင်းချင်း တောင့်တင်းသွားတယ်။"] },

  { t: "I Shouted With Everything I Had", c: [[2, "stinger"]], l: "နောက်ခန်း",
    k: "ne", w: ["နေလင်း"],
    g: "⚠️ “ဦးတင်မောင်!” ကျွန်တော် အားကုန်အော်လိုက်တယ်။ အသံက လည်ချောင်းထဲမှာပဲ ကပ်နေတယ်။",
    p: "Close on Ne Lin's face in the coffin, ⚠️ HIS MOUTH WIDE OPEN IN A FULL SHOUT and every "
      + "muscle in his face and neck committed to it — and the shot is completely, obviously "
      + "silent. Eyes screwed half shut, tendons out. Bulb light from above.",
    u: ["“ဦးတင်မောင်!” ကျွန်တော် အားကုန်အော်လိုက်တယ်။",
        "အသံက လည်ချောင်းထဲမှာပဲ ကပ်နေတယ်။"] },

  { t: "He Sat Up", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "wide", w: ["သား", "နေလင်း"],
    g: "⚠️ ဘေးကခေါင်းတလားထဲကလူ ထထိုင်လာတယ်။ ကျွန်တော်နဲ့ အသက်မတိမ်းမယိမ်း။",
    p: "Wide on the room from the foot of both coffins. ⚠️ THE SON IS SITTING UPRIGHT IN THE FAR "
      + "COFFIN, SEEN FROM BEHIND AND SLIGHTLY OFF TO ONE SIDE — the back of his head, his soaked "
      + "flattened hair and his damp shoulders, his face away from camera. Ne Lin lies flat in "
      + "the near coffin in the foreground. The bulb hangs between them.",
    u: ["ဘေးကခေါင်းတလားထဲကလူ ထထိုင်လာတယ်။",
        "ကျွန်တော်နဲ့ အသက်မတိမ်းမယိမ်း။"] },

  { t: "Wet Hair, Colourless Lips", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "son",
    w: ["သား"],
    g: "⚠️ ဆံပင်တွေ စိုကပ်နေတယ်။ နှုတ်ခမ်းက အရောင်မရှိဘူး။ ဝတ်ထားတဲ့အင်္ကျီပေါ်မှာ ရေစွန်းရာတွေ။",
    p: "The son in profile only, from the shoulder up, sitting in the far coffin. ⚠️ HIS SKIN IS "
      + "FLAT DRAINED GREY-WHITE, HIS BLACK HAIR IS SOAKED AND PLASTERED TO HIS SKULL AND "
      + "FOREHEAD, AND HIS LIPS ARE THE SAME GREY AS THE REST OF HIM. His collar and shoulder are "
      + "dark with water. ⚠️ HIS SKIN IS WHOLE AND SMOOTH — unmarked and undamaged everywhere. He "
      + "faces away from camera.",
    u: ["ဆံပင်တွေ စိုကပ်နေတယ်။ နှုတ်ခမ်းက အရောင်မရှိဘူး။",
        "ဝတ်ထားတဲ့အင်္ကျီပေါ်မှာ ရေစွန်းရာတွေ။"] },

  { t: "His Father Straightened His Head", l: "နောက်ခန်း",
    k: "son", w: ["သား", "ဦးတင်မောင်"],
    g: "⚠️ သူ့ခေါင်းက လည်ပင်းပေါ်မှာ မတည်သလို ဘေးတစ်ဖက်ကို ယိုင်နေတယ်။ ဦးတင်မောင်က လက်နှစ်ဖက်နဲ့ အသာပြန်တည့်ပေးတယ်။",
    p: "From behind the son's shoulder: ⚠️ HIS HEAD HAS FALLEN FAR OVER TO ONE SIDE as though the "
      + "neck will not hold it, and U Tin Maung's two hands are cupping it and gently lifting it "
      + "straight again. The father's face is visible past him, tender and unhurried. The son's "
      + "face stays away from camera.",
    u: ["သူ့ခေါင်းက လည်ပင်းပေါ်မှာ မတည်သလို ဘေးတစ်ဖက်ကို ယိုင်နေတယ်။",
        "ဦးတင်မောင်က လက်နှစ်ဖက်နဲ့ အသာပြန်တည့်ပေးတယ်။",
        "“အဖေ ဒီမှာ။ သား မကြောက်နဲ့။” ကျွန်တော်ကသာ ကြောက်နေတာ။"] },

  // ── VI · MY VOICE ─────────────────────────────────────────────────────────
  { t: "He Spoke in My Voice", c: [[3, "bigstinger"]], l: "နောက်ခန်း", k: "son", w: ["သား"],
    g: "⚠️ သူ့သားက ကျွန်တော် ခုနက ပြောခဲ့တဲ့အသံနဲ့ ပြန်ပြောတယ် — “ဦး… ခဏရပ်ဦး။” ကျွန်တော့်အသံ။",
    p: "The son turned partly towards camera for the first time, ⚠️ FRAMED FROM THE MOUTH DOWN — "
      + "his grey lips parted and mid-word, his chin and throat, the wet collar. ⚠️ HIS EYES AND "
      + "THE UPPER HALF OF HIS FACE ARE ABOVE THE TOP EDGE OF FRAME. Bulb light across the damp "
      + "skin.",
    u: ["သူ့သားက ကျွန်တော့်ဘက် လှည့်ကြည့်လာတယ်။",
        "ပြီးတော့ ကျွန်တော် ခုနက ပြောခဲ့တဲ့အသံနဲ့ ပြန်ပြောတယ်။",
        "“ဦး… ခဏရပ်ဦး။” ကျွန်တော့်အသံ။"] },

  { t: "This Time Nothing Came Out", l: "နောက်ခန်း", k: "ne", w: ["နေလင်း"],
    g: "ကျွန်တော် နှုတ်ခမ်းလှုပ်ပြီး ထပ်အော်တယ်။ ဒီတစ်ခါ အသံလုံးဝ မထွက်တော့ဘူး။",
    p: "Close on Ne Lin's face in the coffin, his mouth working hard on a shout that is plainly "
      + "producing nothing at all — the effort total and the result none. His eyes are wet now.",
    u: ["ကျွန်တော် နှုတ်ခမ်းလှုပ်ပြီး ထပ်အော်တယ်။",
        "ဒီတစ်ခါ အသံလုံးဝ မထွက်တော့ဘူး။"] },

  { t: "He Was Trying the New Sound", l: "နောက်ခန်း", k: "son", w: ["သား"],
    g: "သူ့သားက ပါးစပ်ကို အနည်းငယ်ဖွင့်ပိတ်လုပ်တယ်။ အသံအသစ်ကို စမ်းနေသလို။",
    p: "The same mouth-down framing on the son: ⚠️ HIS GREY LIPS OPENING AND CLOSING IN SMALL "
      + "DELIBERATE SHAPES, the jaw working carefully, like a man testing an instrument he has "
      + "just been handed. Above the top edge of frame, nothing.",
    u: ["သူ့သားက ပါးစပ်ကို အနည်းငယ်ဖွင့်ပိတ်လုပ်တယ်။",
        "အသံအသစ်ကို စမ်းနေသလို။"] },

  { t: "This One Will Do, Father", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "wide",
    w: ["သား", "ဦးတင်မောင်"],
    g: "⚠️ ပြီးတော့ ဦးတင်မောင်ကို ကြည့်တယ် — “ဒီလူက ရတယ် အဖေ။” ကျွန်တော့်ဝမ်းဗိုက်ထဲ အေးခဲသွားတယ်။",
    p: "Wide on the room: the son sitting upright in the far coffin with his head turned to his "
      + "father, ⚠️ SEEN FROM BEHIND so his face is hidden, and U Tin Maung standing beside him "
      + "nodding once. Ne Lin lies flat in the near coffin in the foreground, his open eyes "
      + "turned towards them.",
    u: ["ပြီးတော့ ဦးတင်မောင်ကို ကြည့်တယ်။ “ဒီလူက ရတယ် အဖေ။”",
        "ကျွန်တော့်ဝမ်းဗိုက်ထဲ အေးခဲသွားတယ်။",
        "ဒါ ရုပ်ရှင်ရိုက်နေတာ မဟုတ်ဘူး။"] },

  { t: "Everything of Mine Was Going Across", l: "နောက်ခန်း", k: "two",
    g: "ကျွန်တော့်အသက်ရှူသံ၊ ကျွန်တော့်အသံ၊ ကျွန်တော့်လှုပ်ရှားမှုတွေ — ဟိုဘက်ကလူဆီ တစ်ခုချင်း ရောက်နေတယ်။",
    p: "The two coffins from the foot: the near one holding a man lying flat and still, the far "
      + "one holding a man sitting upright with his back to camera. ⚠️ THE RED THREAD IS VISIBLE "
      + "RUNNING BETWEEN THEM, over the rim of one and down into the other, slightly taut. The "
      + "bulb burns between them.",
    u: ["ကျွန်တော့်အသက်ရှူသံ၊ ကျွန်တော့်အသံ၊ ကျွန်တော့်လှုပ်ရှားမှုတွေ—",
        "ဟိုဘက်ကလူဆီ တစ်ခုချင်း ရောက်နေတယ်။"] },

  // ── VII · I AM SORRY, NE LIN ──────────────────────────────────────────────
  { t: "I Am Sorry, Ne Lin", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "inside",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ “တောင်းပန်ပါတယ် နေလင်း။” သူ့လက်ထဲမှာ ကျွန်တော့်ခေါင်းတလားအဖုံး။",
    p: "OCCURRENCE 6 OF 9 OF THE VIEW FROM INSIDE. The same framing — ceiling, bulb, rim — with U "
      + "Tin Maung leaning in over the opening again, ⚠️ AND A LONG WOODEN COFFIN LID HELD "
      + "UPRIGHT IN BOTH HIS HANDS, its edge entering the top of frame above him. His face is "
      + "apologetic and wet.",
    u: ["ဦးတင်မောင် ကျွန်တော့်နား ပြန်လာတယ်။ “တောင်းပန်ပါတယ် နေလင်း။”",
        "သူ့လက်ထဲမှာ ကျွန်တော့်ခေါင်းတလားအဖုံး။",
        "“ဦးသားကို ပြန်ရဖို့ အချိန်အကြာကြီး စောင့်ခဲ့ရတာ။”"] },

  { t: "He Only Needs a Body to Live In", c: [[3, "stinger"]], l: "နောက်ခန်း",
    k: "tin", w: ["ဦးတင်မောင်"],
    g: "⚠️ “သားက ရေထဲကျသွားတာ။ ပြန်တွေ့တော့ နောက်ကျသွားပြီ။ ဒါပေမယ့် သူ့ကို ပြန်ခေါ်လို့ရတယ်။ နေစရာ ကိုယ်ခန္ဓာပဲ လိုတာ။”",
    p: "Close on U Tin Maung explaining, reasonable and gentle, his eyes wet and his voice "
      + "evidently soft. ⚠️ HE IS EXPLAINING SOMETHING PRACTICAL, not gloating and not raving — "
      + "the face of a man who worked out a solution a long time ago.",
    u: ["ကျွန်တော် ခေါင်းခါဖို့ ကြိုးစားတယ်။ ခေါင်းက အနည်းငယ်ပဲ လှုပ်တယ်။",
        "“သားက ရေထဲကျသွားတာ။ ပြန်တွေ့တော့ နောက်ကျသွားပြီ။”",
        "“ဒါပေမယ့် သူ့ကို ပြန်ခေါ်လို့ရတယ်။ နေစရာ ကိုယ်ခန္ဓာပဲ လိုတာ။”"] },

  { t: "It Will Not Hurt", l: "နောက်ခန်း", k: "insert", w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "ကျွန်တော့်မျက်နှာကို သူ လက်နဲ့ပွတ်ပေးတယ်။ “မင်း နာမှာမဟုတ်ပါဘူး။” ကျွန်တော် မျက်ရည်ကျလာတယ်။",
    p: "Insert on an older man's hand stroking a younger man's forehead and hair back from it, "
      + "the way you would comfort a child. ⚠️ A TEAR IS RUNNING SIDEWAYS FROM THE CORNER OF NE "
      + "LIN'S EYE towards his ear. White lining beneath, bulb light above.",
    u: ["ကျွန်တော့်မျက်နှာကို သူ လက်နဲ့ပွတ်ပေးတယ်။ “မင်း နာမှာမဟုတ်ပါဘူး။”",
        "ကျွန်တော် မျက်ရည်ကျလာတယ်။"] },

  { t: "My Legs Went Numb", l: "နောက်ခန်း", k: "son", w: ["သား"],
    g: "သူ့သားက ခေါင်းတလားဘေးကနေ ခြေထောက်ချလိုက်တယ်။ ကျွန်တော့်ခြေထောက်နှစ်ဖက်လည်း ချက်ချင်းထုံလာတယ်။",
    p: "Framed low on the side of the far coffin: ⚠️ TWO BARE GREY-WHITE FEET AND ANKLES SWUNG "
      + "OVER THE EDGE and hanging down, wet, the trouser hems dark and clinging, water running "
      + "off a heel onto the concrete. Nothing above the knee is in shot.",
    u: ["သူ့သားက ခေါင်းတလားဘေးကနေ ခြေထောက်ချလိုက်တယ်။",
        "ကျွန်တော့်ခြေထောက်နှစ်ဖက်လည်း ချက်ချင်းထုံလာတယ်။"] },

  // ── VIII · THE THREAD ─────────────────────────────────────────────────────
  { t: "The Thread Went Tight", c: [[1, "stinger"]], l: "နောက်ခန်း", k: "thread",
    w: ["နေလင်း"], rev: "thread 3 of 11",
    g: "⚠️ ချည်နီ တတိယအကြိမ် — အဲဒီအချိန်မှာ ကျွန်တော့်လက်ကောက်ဝတ်က ချည်နီ တင်းသွားတယ်။",
    p: "OCCURRENCE 3 OF 11. The same tight framing on Ne Lin's wrist against the white lining — "
      + "⚠️ AND THE RED THREAD IS NOW DRAWN DEAD STRAIGHT AND TAUT, pulling the skin of his wrist "
      + "into a small pucker under the loop and lifting clear of the lining as it runs out of "
      + "frame.",
    u: ["အဲဒီအချိန်မှာ ကျွန်တော့်လက်ကောက်ဝတ်က ချည်နီ တင်းသွားတယ်။",
        "ကျွန်တော် မျက်လုံးအောက်ကို အားစိုက်ကြည့်တယ်။"] },

  { t: "The Other End Was on His Wrist", c: [[2, "bigstinger"]], l: "နောက်ခန်း",
    k: "thread", w: ["သား"], rev: "thread 4 of 11",
    g: "⚠️ ချည်နီ စတုတ္ထအကြိမ် — ချည်ရဲ့ နောက်တစ်ဖက်က သူ့သားရဲ့ လက်ကောက်ဝတ်မှာ။",
    p: "OCCURRENCE 4 OF 11. The same tight framing, now at the other end: the red thread tied "
      + "around a ⚠️ FLAT GREY-WHITE WRIST with darkened nails below it and a soaked cuff above. "
      + "The thread runs taut out of frame. ⚠️ The skin is whole and smooth.",
    u: ["ချည်ရဲ့ နောက်တစ်ဖက်က—",
        "သူ့သားရဲ့ လက်ကောက်ဝတ်မှာ။"] },

  { t: "One Turn", l: "နောက်ခန်း", k: "thread", w: ["သား"],
    rev: "thread 5 of 11",
    g: "⚠️ ချည်နီ ပဉ္စမအကြိမ် — သူ့သားက ချည်ကို လက်ချောင်းပေါ် ရစ်ယူနေတယ်။ တစ်ရစ်။ ကျွန်တော့်ရင်ဘတ် ပိုတင်းလာတယ်။",
    p: "OCCURRENCE 5 OF 11. The same tight framing: a grey-white index finger with the red thread "
      + "⚠️ WOUND ONCE AROUND IT, the coil sitting clearly against the pale skin and the rest of "
      + "the thread running away taut out of frame. Darkened nail. Deliberate, unhurried.",
    u: ["သူ့သားက ချည်ကို လက်ချောင်းပေါ် ရစ်ယူနေတယ်။ တစ်ရစ်။",
        "ကျွန်တော့်ရင်ဘတ် ပိုတင်းလာတယ်။"] },

  { t: "Another Turn", l: "နောက်ခန်း", k: "thread", w: ["သား"],
    rev: "thread 6 of 11",
    g: "⚠️ ချည်နီ ဆဋ္ဌမအကြိမ် — နောက်တစ်ရစ်။ သူ့မျက်နှာမှာ အရောင်နည်းနည်း ပြန်ဝင်လာတယ်။",
    p: "OCCURRENCE 6 OF 11. The identical framing one beat later: ⚠️ THE THREAD IS NOW WOUND "
      + "TWICE around the same finger, two coils side by side — and ⚠️ THE SKIN OF THAT FINGER "
      + "HAS A FAINT WARM TINT COMING BACK INTO IT, no longer quite the flat grey of the shot "
      + "before. The nail is still dark.",
    u: ["နောက်တစ်ရစ်။",
        "သူ့မျက်နှာမှာ အရောင်နည်းနည်း ပြန်ဝင်လာတယ်။",
        "ကျွန်တော် နားလည်သွားတယ်။ သူ ကျွန်တော့်ကို ဆွဲယူနေတာ။"] },

  { t: "The Lid Started at My Feet", c: [[1, "stinger"]], l: "နောက်ခန်း", k: "inside",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ ဦးတင်မောင်က အဖုံးကို ကျွန်တော့်ခြေထောက်ဘက်က စဖုံးလာတယ်။ မီးလုံးမြင်ရတဲ့နေရာ တဖြည်းဖြည်း ကျဉ်းလာတယ်။",
    p: "OCCURRENCE 7 OF 9 OF THE VIEW FROM INSIDE. The same framing — ⚠️ BUT A WOODEN LID HAS "
      + "SLID IN ACROSS THE BOTTOM THIRD OF THE FRAME from the foot end, a hard straight edge of "
      + "shadow cutting off part of the ceiling. The bulb is still visible above it. U Tin "
      + "Maung's head and shoulders lean in at one side.",
    u: ["ဦးတင်မောင်က ခေါင်းတလားအဖုံးကို ကျွန်တော့်ခြေထောက်ဘက်က စဖုံးလာတယ်။",
        "အပေါ်က မီးလုံးကို မြင်ရတဲ့နေရာ တဖြည်းဖြည်း ကျဉ်းလာတယ်။",
        "“မျက်လုံးမှိတ်လိုက်ပါ နေလင်း။” ကျွန်တော် မမှိတ်ဘူး။"] },

  { t: "The Lens Cap Was Still On", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "insert",
    rev: "the reveal",
    g: "⚠️ အစကတည်းက သတိထားသင့်ခဲ့တာ — ကင်မရာမှန်ဘီလူးက အဖုံးတောင် မဖွင့်ထားဘူး။",
    p: "⚠️ THE REVEAL, AND IT IS A SMALL OBJECT. Tight insert straight on to the front of the "
      + "video camera on its tripod, the lens filling most of the frame. ⚠️ A ROUND BLACK LENS "
      + "CAP IS SEATED FIRMLY OVER THE GLASS, its little cord hanging from the body. Nothing is "
      + "recording and never was. The dim room falls away behind it.",
    u: ["သူ့နောက်က ကင်မရာကိုပဲ စိုက်ကြည့်နေမိတယ်။",
        "အစကတည်းက သတိထားသင့်ခဲ့တာ။",
        "ကင်မရာမှန်ဘီလူးက အဖုံးတောင် မဖွင့်ထားဘူး။"] },

  // ── IX · THE STRUGGLE ─────────────────────────────────────────────────────
  { t: "I Could Still Tilt", l: "နောက်ခန်း", k: "inside", w: ["နေလင်း"],
    g: "အဖုံးက ကျွန်တော့်ရင်ဘတ်အပေါ်ထိ ရောက်လာပြီ။ ဒါပေမယ့် ကိုယ်တစ်ဖက်ကိုတော့ အနည်းငယ်စောင်းလို့ ရသေးတယ်။",
    p: "OCCURRENCE 8 OF 9 OF THE VIEW FROM INSIDE. ⚠️ THE LID NOW COVERS TWO THIRDS OF THE FRAME "
      + "and only a narrow band of ceiling and the edge of the bulb remain above it. ⚠️ THE WHOLE "
      + "FRAME IS TIPPED A FEW DEGREES OFF LEVEL as he rolls his weight. The wooden rim is hard "
      + "against the edges.",
    u: ["အဖုံးက ကျွန်တော့်ရင်ဘတ်အပေါ်ထိ ရောက်လာပြီ။",
        "လက်တွေ မလှုပ်နိုင်ဘူး။ အသံမထွက်ဘူး။",
        "ဒါပေမယ့် ကိုယ်တစ်ဖက်ကိုတော့ အနည်းငယ်စောင်းလို့ ရသေးတယ်။"] },

  { t: "Keep Still", l: "နောက်ခန်း", k: "wide",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "ကျွန်တော် အားကုန်ပြီး ညာဘက်ကို လှိမ့်လိုက်တယ်။ ဦးတင်မောင် ချက်ချင်း ဖိထားတယ်။ “ငြိမ်ငြိမ်နေ!”",
    p: "Wide on the room: the near coffin visibly rocked over on its trestles at an angle, U Tin "
      + "Maung leaning his whole weight down on the half-fitted lid with both arms straight, his "
      + "face changed for the first time — ⚠️ HE IS ALARMED RATHER THAN ANGRY. The far coffin sits "
      + "beyond with the son upright in it, back to camera.",
    u: ["ကျွန်တော် အားကုန်ပြီး ညာဘက်ကို လှိမ့်လိုက်တယ်။ ခေါင်းတလား နည်းနည်းလှုပ်သွားတယ်။",
        "ဦးတင်မောင် ချက်ချင်း ဖိထားတယ်။ “ငြိမ်ငြိမ်နေ!”"] },

  { t: "The Trestle Scraped", l: "နောက်ခန်း", k: "floor",
    g: "ကျွန်တော် ထပ်လှိမ့်တယ်။ ခေါင်းတလားတင်ထားတဲ့ ခုံတစ်လုံးက ကြမ်းပြင်ပေါ် ခြစ်ရွေ့သွားတယ်။",
    p: "Camera low on the concrete floor: the foot of a wooden trestle skidding sideways with a "
      + "pale scrape mark dragged behind it across the concrete, dust lifting. The dark patch of "
      + "water is visible further back.",
    u: ["ကျွန်တော် ထပ်လှိမ့်တယ်။",
        "ခေါင်းတလားတင်ထားတဲ့ ခုံတစ်လုံးက ကြမ်းပြင်ပေါ် ခြစ်ရွေ့သွားတယ်။",
        "ဘေးကလူ ထလာဖို့ ကြိုးစားနေတယ်။"] },

  { t: "He Pulled Again", l: "နောက်ခန်း", k: "thread",
    w: ["နေလင်း"], rev: "thread 7 of 11",
    g: "⚠️ ချည်နီ သတ္တမအကြိမ် — ဦးတင်မောင်ရဲ့သားက ချည်ကို ထပ်ဆွဲတယ်။ ကျွန်တော့်ဘယ်လက်က ခေါင်းတလားဘေးကို ဆွဲကပ်သွားတယ်။",
    p: "OCCURRENCE 7 OF 11. The same tight framing: ⚠️ THE THREAD HAS DRAGGED NE LIN'S LEFT WRIST "
      + "HARD UP AGAINST THE INSIDE WALL OF THE COFFIN, the back of his hand flat against the "
      + "wood and the loop biting into the skin. His fingers are splayed and rigid.",
    u: ["ဦးတင်မောင်ရဲ့သားက ချည်ကို ထပ်ဆွဲတယ်။",
        "ကျွန်တော့်ဘယ်လက်က ခေါင်းတလားဘေးကို ဆွဲကပ်သွားတယ်။"] },

  { t: "The Coffin Went Over", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "wide",
    w: ["နေလင်း"],
    g: "⚠️ ခုံလွတ်သွားတယ်။ ခေါင်းတလားက ဘေးစောင်းပြီး ကြမ်းပြင်ပေါ် ပြုတ်ကျတယ်။ ဒုန်း!",
    p: "Wide on the room at the instant of the fall: ⚠️ THE NEAR COFFIN HAS COME OFF ITS TRESTLES "
      + "AND IS ON THE CONCRETE FLOOR ON ITS SIDE, one trestle knocked over beside it, the lid "
      + "skidding away separately. Ne Lin is half spilled out onto the floor. Dust in the bulb "
      + "light. U Tin Maung is staggering back a step.",
    u: ["အဲဒီအရှိန်နဲ့ ကျွန်တော် ကိုယ်ကို တစ်ဖက်ထပ်ပစ်လိုက်တယ်။ ခုံလွတ်သွားတယ်။",
        "ခေါင်းတလားက ဘေးစောင်းပြီး ကြမ်းပြင်ပေါ် ပြုတ်ကျတယ်။",
        "ကျွန်တော့်ပခုံးက သစ်သားနဲ့ ဆောင့်မိတယ်။ အဖုံးလည်း လျှောကျသွားတယ်။"] },

  { t: "The Thread Was Pinned", l: "နောက်ခန်း", k: "thread",
    rev: "thread 8 of 11",
    g: "⚠️ ချည်နီ အဋ္ဌမအကြိမ် — ချည်နီက ခေါင်းတလားအောက်မှာ ညပ်သွားတယ်။ ဟိုဘက်ကလူက မလွှတ်ဘူး။ ပိုဆွဲတယ်။",
    p: "OCCURRENCE 8 OF 11. The same tight framing, now at floor level: ⚠️ THE RED THREAD RUNS "
      + "UNDER THE EDGE OF THE FALLEN COFFIN where it is trapped against the concrete, and the "
      + "length of it beyond is stretched bar-straight and thrumming with tension. Dust on the "
      + "floor either side.",
    u: ["ချည်နီက ခေါင်းတလားအောက်မှာ ညပ်သွားတယ်။",
        "ဟိုဘက်ကလူက မလွှတ်ဘူး။ ပိုဆွဲတယ်။",
        "ကျွန်တော့်လက်ကောက်ဝတ်က နာလာတယ်။"] },

  { t: "It Snapped", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "thread", w: ["နေလင်း"],
    rev: "thread 9 of 11",
    g: "⚠️ ချည်နီ နဝမအကြိမ် — ဖျောက်။ ချည်ပြတ်သွားတယ်။",
    p: "OCCURRENCE 9 OF 11. The same tight framing on Ne Lin's wrist: ⚠️ THE THREAD HAS PARTED. "
      + "Two loose red ends fly apart in opposite directions, still curling from the tension, the "
      + "cut ends frayed. The loop left on his wrist has gone slack. ⚠️ HIS SKIN IS UNBROKEN — "
      + "only a shallow pale line where the thread sat.",
    u: ["ပြီးတော့ ချည်ပြတ်သွားတယ်။",
        "ကျွန်တော် လေကို တစ်ချက်တည်း အားကုန်ရှူမိတယ်။",
        "လက်နှစ်ဖက် ပြန်လှုပ်လို့ရလာတယ်။"] },

  { t: "He Fell Back", l: "နောက်ခန်း", k: "wide", w: ["သား", "ဦးတင်မောင်"],
    g: "ဘေးကလူကတော့ နောက်ပြန်လဲကျသွားတယ်။ သူ့ခြေထောက်တွေက လှုပ်ချင်ပေမယ့် မလှုပ်နိုင်တော့ဘူး။",
    p: "Wide on the room: the son collapsed backwards over the edge of the far coffin, ⚠️ SEEN "
      + "FROM BEHIND AND BELOW so his face is not readable, one arm hanging, his legs slack. U "
      + "Tin Maung is already running the two steps towards him with both arms out.",
    u: ["ဘေးကလူကတော့ နောက်ပြန်လဲကျသွားတယ်။",
        "သူ့ခြေထောက်တွေက လှုပ်ချင်ပေမယ့် မလှုပ်နိုင်တော့ဘူး။",
        "ဦးတင်မောင် သူ့သားဆီ ပြေးသွားတယ်။ “သား! သား!”"] },

  { t: "I Crawled Out", l: "နောက်ခန်း", k: "floor", w: ["နေလင်း"],
    g: "ကျွန်တော် ခေါင်းတလားအပြင်ကို တွားထွက်တယ်။ ခြေထောက်တွေက ထုံနေတုန်းပဲ။",
    p: "Camera low on the concrete: Ne Lin dragging himself out of the tipped coffin on his "
      + "forearms, his legs trailing dead behind him, his face towards camera and slick with "
      + "sweat. Dust, the fallen lid, a trestle leg.",
    u: ["ကျွန်တော် ခေါင်းတလားအပြင်ကို တွားထွက်တယ်။",
        "လက်တစ်ဖက်နဲ့ ကြမ်းပြင်ကို ထောက်ပြီး ထရပ်ဖို့ ကြိုးစားတယ်။",
        "ခြေထောက်တွေက ထုံနေတုန်းပဲ။"] },

  { t: "Father, Do Not Let Him Go", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "son",
    w: ["သား"],
    g: "⚠️ သူ့ပါးစပ် လှုပ်တယ်။ အသံကတော့ ပြန်တိုးသွားပြီ — “အဖေ… သူ့ကို မလွှတ်နဲ့။”",
    p: "The son slumped back over the coffin edge, ⚠️ FRAMED FROM THE MOUTH DOWN ONLY — the grey "
      + "lips moving on a word, the slack jaw, the wet collar, his head fallen far back. The "
      + "upper half of his face is above the top edge of frame.",
    u: ["ဦးတင်မောင်ရဲ့သားက ကျွန်တော့်ကို ကြည့်နေတယ်။ သူ့ပါးစပ် လှုပ်တယ်။",
        "အသံကတော့ ပြန်တိုးသွားပြီ။",
        "“အဖေ… သူ့ကို မလွှတ်နဲ့။”"] },

  { t: "No Pity Left in His Face", l: "နောက်ခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ ဦးတင်မောင် လှည့်လာတယ်။ အခုတော့ သူ့မျက်နှာမှာ အားနာတာ မရှိတော့ဘူး။",
    p: "Close on U Tin Maung turning back towards camera, ⚠️ AND THE GENTLENESS HAS GONE OUT OF "
      + "HIS FACE — the courtesy simply absent, the expression flat and decided. Still tidy, "
      + "still tearful, and entirely changed. Bulb light from above.",
    u: ["ဦးတင်မောင် လှည့်လာတယ်။",
        "အခုတော့ သူ့မျက်နှာမှာ အားနာတာ မရှိတော့ဘူး။"] },

  { t: "He Caught Me From Behind", l: "နောက်ခန်း", k: "wide",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "ကျွန်တော် တံခါးဆီ ပြေးတယ်။ သူ ကျွန်တော့်အင်္ကျီကို နောက်ကနေ ဆွဲဖမ်းလိုက်တယ်။ နှစ်ယောက်လုံး ကြမ်းပြင်ပေါ် လဲကျတယ်။",
    p: "Wide on the room: both men down on the concrete near the doorway, U Tin Maung with a "
      + "fistful of the back of Ne Lin's t-shirt and Ne Lin twisted round underneath him. Dust, "
      + "the tipped coffin behind, the bulb swinging slightly. ⚠️ Neither man is injured.",
    u: ["ကျွန်တော် တံခါးဆီ ပြေးတယ်။",
        "သူ ကျွန်တော့်အင်္ကျီကို နောက်ကနေ ဆွဲဖမ်းလိုက်တယ်။",
        "နှစ်ယောက်လုံး ကြမ်းပြင်ပေါ် လဲကျတယ်။"] },

  { t: "He Was Trying to Tie It Back On", l: "နောက်ခန်း",
    k: "thread", w: ["ဦးတင်မောင်", "နေလင်း"], rev: "thread 10 of 11",
    g: "⚠️ ချည်နီ ဒသမအကြိမ် — သူ့လက်ထဲမှာ ပြတ်သွားတဲ့ ချည်နီ။ ကျွန်တော့်လက်ကောက်ဝတ်ကို ပြန်ချည်ဖို့ ကြိုးစားနေတာ။",
    p: "OCCURRENCE 10 OF 11. The same tight framing: an older man's two hands trying to loop the "
      + "broken red thread back around a younger man's wrist, ⚠️ AND THE WRIST IS TWISTING HARD "
      + "AWAY OUT OF THE LOOP. The thread is frayed at the break. Concrete floor beneath.",
    u: ["သူ့လက်ထဲမှာ ပြတ်သွားတဲ့ ချည်နီ။",
        "ကျွန်တော့်လက်ကောက်ဝတ်ကို ပြန်ချည်ဖို့ ကြိုးစားနေတာ။",
        "“တစ်ခဏပဲ! ငါ့သား ပြန်ထလာတော့မှာ!”"] },

  { t: "He Was Crying and He Did Not Loosen", l: "နောက်ခန်း", k: "tin", w: ["ဦးတင်မောင်"],
    g: "ကျွန်တော် ရုန်းရင်း သူ့မျက်နှာကို ကြည့်မိတယ်။ သူက ငိုနေတယ်။ ဒါပေမယ့် ချုပ်ထားတဲ့လက်က လုံးဝမလျော့ဘူး။",
    p: "Close on U Tin Maung from below, over the top of a struggling shoulder: ⚠️ HIS FACE IS "
      + "STREAMING WITH TEARS and completely set at the same time. Grief and resolve in one "
      + "expression. Bulb light behind his head.",
    u: ["ကျွန်တော် ရုန်းရင်း သူ့မျက်နှာကို ကြည့်မိတယ်။ သူက ငိုနေတယ်။",
        "ဒါပေမယ့် ကျွန်တော့်ကို ချုပ်ထားတဲ့လက်က လုံးဝမလျော့ဘူး။"] },

  { t: "I Had My Voice Back", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "ne",
    w: ["နေလင်း"],
    g: "⚠️ ကျွန်တော် အသံပြန်ရပြီဆိုတာ အဲဒီအချိန်မှ သတိရတယ် — “ကယ်ကြပါဦး! လူသတ်နေတယ်!”",
    p: "Close on Ne Lin's face turned towards the doorway on the concrete floor, ⚠️ MOUTH WIDE "
      + "OPEN IN A FULL SHOUT — and this time everything about the picture says the sound is "
      + "coming out: the neck cords, the wide eyes, the whole face committed. Dust in the air.",
    u: ["ကျွန်တော် အသံပြန်ရပြီဆိုတာ အဲဒီအချိန်မှ သတိရတယ်။",
        "တံခါးဘက်ကို မျက်နှာလှည့်ပြီး အားကုန်အော်လိုက်တယ်။",
        "“ကယ်ကြပါဦး! လူသတ်နေတယ်!”"] },

  { t: "Voices Outside", l: "နောက်ခန်း", k: "wide", w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "ဆိုင်ရှေ့ဘက်က လူသံကြားလာတယ်။ “ဘာဖြစ်တာလဲ!” တံခါးကို အပြင်က တွန်းသံ။",
    p: "Wide on the room towards the closed door: ⚠️ A BAR OF DAYLIGHT HAS OPENED DOWN ONE EDGE "
      + "OF IT and two shadows break that light from outside. U Tin Maung's head is turned "
      + "sharply towards it; Ne Lin is already twisting out from under him. The bulb light and "
      + "the daylight meet.",
    u: ["ဦးတင်မောင် ကျွန်တော့်ပါးစပ်ကို ပိတ်ဖို့ လက်လှမ်းတယ်။ ကျွန်တော် သူ့လက်ကို ဖယ်ပြီး ထပ်အော်တယ်။",
        "ဆိုင်ရှေ့ဘက်က လူသံကြားလာတယ်။ “ဘာဖြစ်တာလဲ!”",
        "တံခါးကို အပြင်က တွန်းသံ။"] },

  { t: "It Is Going Cold Again", l: "နောက်ခန်း", k: "floor",
    w: ["နေလင်း"],
    g: "⚠️ နောက်က သူ့သားအသံ — ဒီတစ်ခါ ကလေးတစ်ယောက်လို ငိုနေတယ် — “အဖေ… ပြန်အေးလာပြီ။ အဖေ…”",
    p: "Camera low on the concrete behind Ne Lin as he crawls hard towards the widening bar of "
      + "daylight at the door, seen from behind, his legs still dragging. ⚠️ THE FAR COFFIN AND "
      + "THE TWO FIGURES ARE BEHIND HIM AND WELL OUT OF FOCUS — shapes only. He does not look "
      + "back.",
    u: ["ဦးတင်မောင် ခဏလှည့်ကြည့်တဲ့အချိန် ကျွန်တော် သူ့ကို တွန်းဖယ်လိုက်တယ်။",
        "နောက်က သူ့သားအသံ ကြားလာတယ်။ ဒီတစ်ခါ ကလေးတစ်ယောက်လို ငိုနေတယ်။",
        "“အဖေ… ပြန်အေးလာပြီ။ အဖေ…” ကျွန်တော် နောက်မလှည့်ဘူး။"] },

  { t: "They Pulled Me Into the Light", l: "ဆိုင်ရှေ့", k: "front", w: ["နေလင်း"],
    g: "အပြင်က လူနှစ်ယောက်က တံခါးကို တွန်းဖွင့်ပြီး ကျွန်တော့်ကို ဆွဲထုတ်လိုက်ကြတယ်။",
    p: "In the dusty front room in daylight: two ordinary men in longyis hauling Ne Lin up out of "
      + "the dark back-room doorway by his arms, his legs still not under him. ⚠️ THE FLAT "
      + "DAYLIGHT AND THE DUSTY FAMILY PORTRAITS ARE THE WHOLE POINT — an entirely ordinary room "
      + "one step from the other one.",
    u: ["တံခါးလက်ကိုင်ကို လှမ်းဆွဲလိုက်တယ်။",
        "အပြင်က လူနှစ်ယောက်က တံခါးကို တွန်းဖွင့်ပြီး ကျွန်တော့်ကို ဆွဲထုတ်လိုက်ကြတယ်။"] },

  { t: "It Was Still in My Fist", l: "ဆိုင်ရှေ့", k: "thread",
    w: ["နေလင်း"], rev: "thread 11 of 11",
    g: "⚠️ ချည်နီ နောက်ဆုံးအကြိမ် — ကျွန်တော် လက်ထဲမှာ ချည်နီတစ်ပိုင်း ဆုပ်ထားမိနေတာကို သိလိုက်တယ်။",
    p: "OCCURRENCE 11 OF 11, AND THE ONLY ONE IN DAYLIGHT. The same tight framing: a clenched "
      + "fist opening in flat daylight to show ⚠️ A SHORT FRAYED LENGTH OF THE RED THREAD lying "
      + "across the damp palm, pressed into the skin. ⚠️ The hand is unmarked. Dusty shopfront "
      + "soft behind.",
    u: ["ဆိုင်ရှေ့အလင်းရောင်ထဲ ရောက်မှ—",
        "ကျွန်တော် လက်ထဲမှာ ချည်နီတစ်ပိုင်း ဆုပ်ထားမိနေတာကို သိလိုက်တယ်။",
        "ကျွန်တော် ချက်ချင်း လွှတ်ချလိုက်တယ်။"] },

  // ── X · AFTER ─────────────────────────────────────────────────────────────
  { t: "They Took Him That Night", l: "ဆိုင်ရှေ့", k: "front",
    w: ["ဦးတင်မောင်", "ရဲသား"],
    g: "ဦးတင်မောင်ကို အဲဒီညမှာပဲ ရဲတွေ ခေါ်သွားတယ်။",
    p: "Outside the photo studio at night: a police officer walking U Tin Maung out through the "
      + "shopfront by one arm, the old man upright, tidy and entirely calm, looking back over his "
      + "shoulder at the building. Ordinary street light and a torch beam.",
    u: ["ဦးတင်မောင်ကို အဲဒီညမှာပဲ ရဲတွေ ခေါ်သွားတယ်။",
        "ဆိုင်နောက်ခန်းက ခေါင်းတလားထဲမှာ သူ့သားရဲ့ရုပ်အလောင်းကို တွေ့ခဲ့ကြတယ်။"] },

  { t: "Dead Over a Month", l: "နောက်ခန်း", k: "two",
    g: "သူ့သားဆုံးတာ တစ်လကျော်ပြီ။ သင်္ဂြိုဟ်ပြီးပြီလို့ ဆွေမျိုးတွေကို ပြောထားပေမယ့် အလောင်းကို သူ မလွှတ်ပေးခဲ့ဘူး။",
    p: "The back room afterwards with the lights on properly: the near coffin still lying tipped "
      + "on the concrete, a trestle over, the lid on the floor, and the far coffin standing "
      + "closed on its trestles. ⚠️ THE ROOM IS EMPTY OF PEOPLE. An ordinary untidy room where "
      + "something happened.",
    u: ["သူ့သားဆုံးတာ တစ်လကျော်ပြီ။",
        "သင်္ဂြိုဟ်ပြီးပြီလို့ ဆွေမျိုးတွေကို ပြောထားပေမယ့် အလောင်းကို သူ မလွှတ်ပေးခဲ့ဘူး။"] },

  { t: "This Time It Was Close", l: "ရဲစခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ ဘာလုပ်ခဲ့သလဲဆိုတာ မေးကြတဲ့အခါ ဦးတင်မောင်က စကားတစ်ခုပဲ ထပ်ခါထပ်ခါ ပြောနေတယ် — “ဒီတစ်ခါ နီးနေပြီ။ အသံတောင် ရလာပြီ။”",
    p: "Close on U Tin Maung sitting at the police station counter in flat daylight, hands folded "
      + "in front of him, ⚠️ SPEAKING CALMLY AND LOOKING SLIGHTLY PAST THE LENS. He is composed, "
      + "tidy and entirely reasonable-looking — a polite old man answering a question.",
    u: ["ဘာလုပ်ခဲ့သလဲဆိုတာ မေးကြတဲ့အခါ ဦးတင်မောင်က စကားတစ်ခုပဲ ထပ်ခါထပ်ခါ ပြောနေတယ်။",
        "“ဒီတစ်ခါ နီးနေပြီ။ အသံတောင် ရလာပြီ။”"] },

  { t: "The Mark Lasted a Week", l: "ရဲစခန်း", k: "insert", w: ["နေလင်း"],
    g: "ကျွန်တော့်လက်ကောက်ဝတ်မှာတော့ ချည်ရာက တစ်ပတ်လောက် ကျန်နေခဲ့တယ်။ အဲဒီငွေကို ကျွန်တော် မယူတော့ဘူး။",
    p: "Tight insert on Ne Lin's own left wrist in flat daylight, ⚠️ A THIN PALE RING MARK "
      + "CIRCLING IT WHERE THE THREAD SAT — a faint impression in the skin and nothing more. ⚠️ "
      + "The skin is unbroken and healthy. His other hand rests beside it.",
    u: ["သားဖြစ်သူရဲ့နာရေးကို နောက်ပိုင်း ဆွေမျိုးတွေက တာဝန်ယူပြီး ပြီးအောင်လုပ်ခဲ့ကြတယ်။",
        "ကျွန်တော့်လက်ကောက်ဝတ်မှာတော့ ချည်ရာက တစ်ပတ်လောက် ကျန်နေခဲ့တယ်။",
        "အဲဒီငွေကို ကျွန်တော် မယူတော့ဘူး။"] },

  { t: "He Saw Me at the Station", l: "ရဲစခန်း", k: "station",
    w: ["နေလင်း", "ဦးတင်မောင်"],
    g: "ရဲစခန်းမှာ ကျွန်တော် ပစ္စည်းတွေ ပြန်ယူတဲ့နေ့ ဦးတင်မောင်က ကျွန်တော့်ကို မြင်သွားတယ်။ “နေလင်း။”",
    p: "In the police station in flat daylight: Ne Lin stopped part way across the room with a "
      + "plastic bag of belongings in one hand, and U Tin Maung seated on a chair against the "
      + "wall behind him, ⚠️ HIS HEAD ALREADY TURNED AND HIS MOUTH OPEN ON A NAME. Ordinary "
      + "bright office.",
    u: ["ဒါပေမယ့် ရဲစခန်းမှာ ကျွန်တော် ပစ္စည်းတွေ ပြန်ယူတဲ့နေ့—",
        "ဦးတင်မောင်က ကျွန်တော့်ကို မြင်သွားတယ်။",
        "သူ တိုးတိုးလေး ခေါ်တယ်။ “နေလင်း။” ကျွန်တော် ရပ်လိုက်တယ်။"] },

  { t: "He Was Looking at My Chest", c: [[2, "bigstinger"]], l: "ရဲစခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ သူ ကျွန်တော့်မျက်နှာကို မကြည့်ဘူး။ ရင်ဘတ်ကိုပဲ ကြည့်နေတယ်။ အသက်ရှူနေတာကို ကြည့်နေတာ။",
    p: "Close on U Tin Maung seated against the wall, ⚠️ HIS EYES AIMED WELL BELOW THE LENS — "
      + "level with a standing man's chest rather than his face — and tracking a small steady "
      + "rise and fall there. His expression is calm, attentive and assessing. Flat daylight.",
    u: ["သူ ကျွန်တော့်မျက်နှာကို မကြည့်ဘူး။",
        "ရင်ဘတ်ကိုပဲ ကြည့်နေတယ်။",
        "အသက်ရှူနေတာကို ကြည့်နေတာ။"] },

  { t: "How Much Would Be Enough", c: [[2, "stinger"]], l: "ရဲစခန်း", k: "station",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "⚠️ ပြီးတော့ အစက အလုပ်အပ်ခဲ့တုန်းကလို အေးအေးဆေးဆေး မေးတယ် — “ငါးသိန်းနဲ့ မလောက်ရင်… ဘယ်လောက်လိုလဲ။”",
    p: "The two of them in the bright police station, U Tin Maung seated and speaking pleasantly, "
      + "Ne Lin standing very still a few paces off with the bag in his hand. ⚠️ THE OLD MAN'S "
      + "MANNER IS EXACTLY AS IT WAS THE FIRST DAY — courteous, unhurried, businesslike. Nothing "
      + "in the room looks wrong.",
    u: ["ပြီးတော့ အစက အလုပ်အပ်ခဲ့တုန်းကလို အေးအေးဆေးဆေး မေးတယ်။",
        "“ငါးသိန်းနဲ့ မလောက်ရင်… ဘယ်လောက်လိုလဲ။”"] },

  { t: "Not a Person Yet", c: [[1, "finalstinger"]], l: "ရဲစခန်း", k: "ne", w: ["နေလင်း"],
    g: "⚠️ သူ့သားကို သင်္ဂြိုဟ်ပြီးသွားပြီ။ ဒါပေမယ့် ကျွန်တော့်ကို မြင်တဲ့အချိန်မှာ — သူက လူတစ်ယောက်ကို မြင်နေတာ မဟုတ်သေးဘူး။",
    p: "FINAL SHOT. Close on Ne Lin standing in the bright police station, holding completely "
      + "still, looking back at the old man off frame. ⚠️ HIS FACE IS NOT SHOCKED AND NOT ANGRY — "
      + "it has emptied, the way a face does when it understands what it is being looked at as. "
      + "Ordinary flat daylight on an ordinary young man. Hold on him.",
    u: ["အဲဒီအချိန်မှာ ကျွန်တော် ဘာကြောင့် ပြန်ကြောက်သွားလဲဆိုတာ သူ နားမလည်ဘူး။",
        "သူ့သားကို သင်္ဂြိုဟ်ပြီးသွားပြီ။",
        "ဒါပေမယ့် ကျွန်တော့်ကို မြင်တဲ့အချိန်မှာ သူက လူတစ်ယောက်ကို မြင်နေတာ မဟုတ်သေးဘူး။",
        "သူ့သား နေလို့ရမယ့် ကိုယ်ခန္ဓာတစ်ခုကိုပဲ မြင်နေတုန်း။"] },
];

/** Short, because the shot body is the part worth reading. */
const CONT =
  "Continuity: Ne Lin is physically unharmed in every shot — ordinary warm colour, clear skin, "
  + "both eyes bright. What is wrong with him is that he cannot move, and it shows only in his "
  + "face and his tendons. U Tin Maung stays neat, gentle and courteous until the film says "
  + "otherwise. The son is grey, wet and cold, and his skin is whole and smooth everywhere.";

const STYLE =
  "Contemporary Myanmar, present day. Photorealism, 16:9, 35mm grain, level camera, natural "
  + "depth of field. Clean neutral colour. Every place is an ordinary working room and the props "
  + "are ordinary objects. One still instant. Surfaces are blank of writing except where a shot "
  + "names it.";

const TIME = {
  bulb: "TIME: INSIDE THE SEALED BACK ROOM. The windows are boarded with black cloth and one bare "
    + "hanging bulb is the whole of the light, so the walls fall away into shadow and the air is "
    + "still. The room is cold.",
  day: "TIME: DAYTIME. Flat ordinary daylight, dry weather, bright outside.",
  night: "TIME: NIGHT OUTDOORS. Ordinary street lighting and a torch beam.",
};

/** Everything in the back room is bulb-lit; the rest is stated here. */
const AT_NIGHT = new Set(["They Took Him That Night"]);

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = AT_NIGHT.has(s.t) ? TIME.night
    : s.l === "နောက်ခန်း" ? TIME.bulb
    : TIME.day;
  s.cont = CONT;
  s.style = STYLE;
});

export { CONT, STYLE };
