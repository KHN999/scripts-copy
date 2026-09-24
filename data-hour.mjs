/**
 * တစ်နာရီစာ လူသေ — A CORPSE FOR ONE HOUR
 *
 * Board for rentbodyv2.txt.
 *
 *   1. THE ROOM IS THE FILM. Seventy of the hundred shots happen in one back
 *      room with two coffins on trestles, a bulb, a wall clock and a tripod. The
 *      master geometry plate is load-bearing: fix which coffin is open and where
 *      the clock hangs, or every shot is a different room.
 *   2. FROM INSIDE THE COFFIN is the spine — Ne Lin spends most of the story
 *      flat on his back unable to move, so one fixed framing recurs eight times
 *      and the lid closes across it twice.
 *   3. ⚠️ THE RED THREAD IS THE MECHANISM, AND THE FILM TURNS ON ONE DETAIL:
 *      when it snags under the lid, U Tin Maung LIFTS THE LID TO FREE IT. That
 *      is how Ne Lin works out they need it unbroken, which is how he gets out.
 *      Ten occurrences in one fixed insert framing. If the thread reads, the
 *      film reads.
 *   4. ⚠️ THE OTHERS ARE EVERYWHERE BEFORE WE KNOW THEY EXIST. A row of
 *      envelopes with men's names on the table, a plural pronoun, scratches
 *      layered inside the lid, and finally a notebook of three one-hour spans.
 *      Every one is planted plainly and never pointed at.
 *   5. THE SON IS DEAD, NOT DAMAGED. A month drowned, and it shows through
 *      colour and water alone: flat grey skin, soaked flattened hair, grey lips,
 *      darkened under the eyes, dull open eyes. ⚠️ NOTHING ON HIM IS DECAYED OR
 *      BROKEN — his skin is whole and smooth everywhere. He must also be plainly
 *      the same face as the graduation photograph, because Ne Lin recognises him
 *      from it.
 *   6. U TIN MAUNG IS COURTEOUS THROUGHOUT AND NEVER STOPS CRYING. He is not a
 *      man who lost his mind — he worked out the price years ago and paid it
 *      three times. The last shot only lands if he has been gentle all film.
 *   7. THE CLOCK IS THE ENDING. Five identical inserts on a plain numberless
 *      face. The first two are just a room detail; the last three are what the
 *      whole story turns out to have been about.
 */

export const CAST = [
  { name: "နေလင်း", en: "Ne Lin — the narrator, about twenty-eight",
    prompt: "A Burmese man of about twenty-eight, lean and ordinary, medium-brown skin, a narrow "
      + "face, short black hair, clean-shaven. A plain dark shirt and jeans, cheap trainers. He "
      + "looks like someone who takes whatever work comes — unremarkable, healthy, a little "
      + "tired. ⚠️ HE IS PHYSICALLY UNHARMED IN EVERY SHOT of this film: clear skin, both eyes "
      + "bright, ordinary warm colour. What happens to him is paralysis and suffocation, and it "
      + "shows only in his face and the tendons of his neck and hands." },
  { name: "ဦးတင်မောင်", en: "U Tin Maung — the father, about sixty",
    prompt: "A Burmese man of about sixty, upright and very tidy, medium-brown skin, close-cropped "
      + "grey hair. ⚠️ HE WEARS A PRESSED LONG-SLEEVED SHIRT AND A MYANMAR PASO (men's longyi), "
      + "neatly tied, with sandals. ⚠️ HE IS GENTLE, SOFT-SPOKEN AND COURTEOUS and must read that "
      + "way in every single shot of this film — including the ones where he is holding a man "
      + "down. Not menacing, not wild, not sinister. His eyes are wet in most of the film and he "
      + "stays polite even while he is doing this." },
  { name: "သား", en: "The son — about twenty-eight, a month drowned",
    prompt: "A Burmese man of about twenty-eight, slim, the same height as Ne Lin, with a "
      + "distinctive open face — a wide forehead, a small mole near one eyebrow, slightly "
      + "prominent front teeth. ⚠️ HE IS PLAINLY DEAD AND IT SHOWS ENTIRELY IN COLOUR AND WATER: "
      + "his skin is a flat drained grey-white with no warmth in it, his black hair is soaked and "
      + "plastered flat to his skull and forehead, his lips are the same grey as the rest of his "
      + "face, the skin beneath both eyes is darkened to a bruise-blue shadow, and his eyes are "
      + "open, dull and unfocused. A damp collared shirt and trousers, dark with water and "
      + "clinging to him. ⚠️ HIS SKIN IS WHOLE AND SMOOTH EVERYWHERE — unbroken, unmarked, "
      + "nothing decayed and nothing damaged. He is a drowned man kept cold and nothing worse. "
      + "⚠️ HIS FACE MUST BE RECOGNISABLY THE SAME MAN AS IN THE GRADUATION PHOTOGRAPH.",
    pose: "The subject stands facing the camera square on, full figure in frame, arms hanging at "
      + "his sides, head straight, expression blank and slack" },
  { name: "ရဲသား", en: "The police officer — about forty",
    prompt: "A Burmese police officer of about forty, medium build, medium-brown skin, short "
      + "black hair, in a plain dark-blue Myanmar police uniform shirt with shoulder boards and "
      + "dark trousers. Ordinary and businesslike. ⚠️ Whole and unharmed." },
];

export const PROPS = [
  { name: "ချည်နီ", en: "The red thread — the mechanism",
    prompt: "A single length of thin RED cotton thread, the kind tied at a Myanmar ceremony — "
      + "matte and slightly fuzzy rather than glossy, about the thickness of kitchen string, a "
      + "strong plain red. Photographed lying loosely coiled on a plain surface. ⚠️ THE COLOUR "
      + "AND THICKNESS MUST BE IDENTICAL EVERY TIME IT APPEARS; the audience has to track this "
      + "one object through the whole film." },
  { name: "ကင်မရာ", en: "The camera on its tripod — lens cap fitted",
    prompt: "An older black digital video camera on a black three-legged tripod at chest height, "
      + "photographed from the front at close range. ⚠️ A ROUND BLACK LENS CAP IS FITTED OVER THE "
      + "LENS, plainly seated and covering the glass completely, with a short black cord running "
      + "from it to the camera body. Everything else about the rig looks ready to shoot. "
      + "Ordinary, slightly dated, well kept." },
  { name: "စာအိတ်တွေ", en: "The row of envelopes on the table",
    prompt: "Four plain brown paper envelopes, A5 size and fat with contents, standing in a neat "
      + "row on a wooden table top, photographed from slightly above. ⚠️ EACH ENVELOPE HAS A "
      + "MAN'S NAME HANDWRITTEN ON IT IN BURMESE in blue ballpoint, in the same tidy older "
      + "person's hand. ⚠️ THE NAMES ARE THE ONLY TEXT IN THE IMAGE. Three are worn at the "
      + "corners and have plainly been sitting there a long while; one looks newer." },
  { name: "မှတ်စုစာအုပ်", en: "The notebook of times",
    prompt: "A small cheap lined exercise book lying open on a table, photographed square on from "
      + "above so the pages fill the frame. ⚠️ ONE PAGE CARRIES A SHORT HANDWRITTEN LIST IN "
      + "BURMESE BALLPOINT: a man's name, then a pair of times joined by a dash, then the next "
      + "name and pair, and so on down the page. Tidy, cramped, practical handwriting. Nothing "
      + "else is written anywhere on the pages and nothing is printed on them." },
  { name: "နံရံနာရီ", en: "The wall clock",
    prompt: "A plain round white plastic wall clock with black hands and a red second hand, the "
      + "cheap kind sold everywhere, hanging on a bare plaster wall and photographed square on so "
      + "the face fills the frame. ⚠️ THE FACE CARRIES ONLY PLAIN TICK MARKS AND NO NUMERALS OR "
      + "BRANDING AT ALL. It is working and completely unremarkable." },
  { name: "ဘွဲ့ယူပုံ", en: "The graduation photograph in its frame",
    prompt: "A framed colour graduation photograph standing upright on a table: a Burmese man of "
      + "about twenty-seven in an academic gown and cap holding a rolled certificate, ⚠️ SMILING "
      + "BROADLY, WARM-SKINNED, HEALTHY AND VERY MUCH ALIVE — a wide forehead, a small mole near "
      + "one eyebrow, slightly prominent front teeth. Beside him an older man in a pressed shirt "
      + "with one arm around his shoulders, beaming. ⚠️ THIS IS A HAPPY ORDINARY PHOTOGRAPH and "
      + "there is nothing wrong with it. Simple wooden frame, glass slightly dusty." },
];

export const LOCS = [
  { name: "နောက်ခန်း", en: "The back room — MASTER GEOMETRY PLATE",
    prompt: "THE MASTER GEOMETRY PLATE FOR THIS FILM. Almost the whole story happens in this one "
      + "room, so fix it once. The windowless back room of an old photo studio, photographed from "
      + "the doorway at chest height looking in. ⚠️ TWO PLAIN WOODEN COFFINS STAND SIDE BY SIDE IN "
      + "THE MIDDLE OF THE ROOM, each resting across two low wooden trestles at hip height, with "
      + "only enough space between them for one person to walk, both running left to right across "
      + "the frame. ⚠️ THE NEARER COFFIN HAS ITS LID OFF. ⚠️ THE FURTHER COFFIN IS CLOSED, its lid "
      + "seated flat. One bare bulb hangs from the ceiling above the gap between them. ⚠️ A PLAIN "
      + "ROUND WHITE WALL CLOCK HANGS ON THE BACK WALL. A black video camera on a tripod stands "
      + "facing the coffins from the near end, and a wooden table against one wall carries a row "
      + "of brown envelopes. Bare plaster walls, a concrete floor, no windows. ⚠️ THE ROOM IS "
      + "ORDINARY, CLEAN AND TIDY. Empty of people for this plate." },
  { name: "ဆိုင်ရှေ့", en: "The front of the old photo studio",
    prompt: "The front room of a long-closed suburban Myanmar photo studio in daylight: a glass "
      + "shopfront, and on the walls rows of framed display portraits — family groups, graduation "
      + "photographs, wedding pictures — all under a visible layer of dust. A bare counter. ⚠️ THE "
      + "PORTRAITS ARE ORDINARY, SMILING AND UNREMARKABLE; the only thing wrong with the room is "
      + "that it has obviously not opened in a long time. Empty of people for this plate." },
  { name: "ဆေးရုံ", en: "The hospital room",
    prompt: "An ordinary small Myanmar hospital room in flat daylight: one iron bed with white "
      + "sheets, a bedside locker, a window with a thin curtain, pale green walls, a terrazzo "
      + "floor. Clean, bright and entirely unfrightening. Empty of people for this plate." },
  { name: "ရဲစခန်း", en: "The police station",
    prompt: "The front office of an ordinary Myanmar police station in daylight: a wooden counter, "
      + "a ceiling fan, a noticeboard, plastic chairs against one wall, a barred window. Plain, "
      + "bright and businesslike. Empty of people for this plate." },
];

/**
 * One composition per shot, stated first and alone.
 *
 * `inside`, `thread` and `clock` are the film. All three are fixed here once so
 * that the moments everything depends on — the lid closing across `inside`, the
 * lid being LIFTED to free the thread, and the clock turning out to have been
 * the subject all along — land on frames the audience already knows by heart.
 */
const CAM = {
  inside: 'FROM INSIDE THE COFFIN. Camera lying on its back on the lining where Ne Lin’s head is, looking straight up, so the frame holds the ceiling, the bare bulb, the rim of the coffin at the edges, and whatever leans in over the opening. ⚠️ Reproduce this framing identically every time it recurs.',
  thread: 'THE RED THREAD. Tight insert filling the frame with the thread and whatever it is tied to or running across. ⚠️ Reproduce this framing identically every time it recurs.',
  clock: 'THE WALL CLOCK. Insert square on to a plain round wall clock, the face filling the frame. ⚠️ Reproduce this framing identically every time it recurs.',
  two: 'THE TWO COFFINS. Camera at chest height at the foot of the two trestled coffins, both in frame side by side as in the master plate.',
  table: 'THE TABLE. Camera looking down at a table top, the surface filling the frame.',
  ne: 'CLOSE ON NE LIN, ON HIS FEET. Camera at his eye height, head-and-shoulders crop.',
  neflat: 'CLOSE ON NE LIN, FLAT ON HIS BACK INSIDE THE COFFIN. ⚠️ HE IS LYING DOWN AND CANNOT SIT UP OR LIFT HIS HEAD — his shoulders and the back of his skull stay pressed against the lining throughout. Camera directly ABOVE his face looking straight DOWN at it, so his face fills the frame lying horizontally, the pale coffin lining spread behind his head and hair, and the wooden rim of the box running along one edge of the image.',
  nefloor: 'CLOSE ON NE LIN, DOWN ON THE CONCRETE FLOOR. ⚠️ HE IS LYING ON THE GROUND AND IS NOT STANDING. Camera low and close beside his head, only a few inches above the floor, so his cheek is near the concrete and the floor runs away out of focus behind him.',
  tin: 'CLOSE ON U TIN MAUNG. Camera at his eye height, head-and-shoulders crop.',
  son: 'THE SON, PARTIALLY. Camera at chest height framed so only part of him is in shot — a hand, a foot, a shoulder, the back of a head — never a clean full view.',
  sonface: 'THE SON’S FACE. Camera at his eye height, head-and-shoulders crop, his face fully in frame.',
  floor: 'LOW ON THE FLOOR. Camera on the concrete floor itself, a few inches above it.',
  front: 'IN THE FRONT OF THE SHOP. Camera at chest height among the dusty display portraits.',
  ward: 'IN THE HOSPITAL ROOM. Camera at chest height beside the bed.',
  station: 'IN THE POLICE STATION. Camera at chest height across the counter.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
  wide: 'WIDE. Camera at chest height far enough back to hold the whole room.',
};

export const SCENES = [
  // ── I · THE AUDIO FILE ────────────────────────────────────────────────────
  { t: "He Did Not Ask for a Photograph", l: "ဆိုင်ရှေ့", k: "ne", w: ["နေလင်း"],
    g: "လူသေဟန်ဆောင်ဖို့ အလုပ်အပ်တဲ့လူက ကျွန်တော့်ဓာတ်ပုံကို မတောင်းဘူး။ အသံဖိုင်တစ်ခု ပို့ခိုင်းတယ်။",
    p: "Ne Lin sitting on the edge of a bed in an ordinary room in daylight, a phone held close to "
      + "his mouth in both hands, recording. Plain, domestic and unremarkable — a man doing "
      + "something small for money.",
    u: ["လူသေဟန်ဆောင်ဖို့ အလုပ်အပ်တဲ့လူက ကျွန်တော့်ဓာတ်ပုံကို မတောင်းဘူး။",
        "အသံဖိုင်တစ်ခု ပို့ခိုင်းတယ်။"] },

  { t: "Father, I Have Come Back", c: [[1, "bigstinger"]], l: "ဆိုင်ရှေ့", k: "insert",
    g: "⚠️ ပြောရမယ့်စကားက — “အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။”",
    p: "⚠️ TEXT PERMITTED. Insert square on to a phone screen held in one hand, showing a voice "
      + "recorder mid-recording: a waveform running across the screen and above it one line of "
      + "Burmese reading exactly \"အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။\" and nothing else. That sentence "
      + "is the only text in the image.",
    u: ["ပြောရမယ့်စကားက—",
        "“အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။”",
        "ကျွန်တော် အသံသွင်းပို့လိုက်တယ်။"] },

  { t: "He Chose You", c: [[3, "bigstinger"]], l: "ဆိုင်ရှေ့", k: "ne", w: ["နေလင်း"],
    g: "⚠️ “အသံ အဆင်ပြေလို့လား ဦး။” “အေး။ သူက မင်းကို ရွေးလိုက်ပြီ။”",
    p: "Close on Ne Lin holding the phone to his ear in daylight, listening — ⚠️ AND THE EASY "
      + "EXPRESSION HAS JUST GONE OUT OF HIS FACE, replaced by a small puzzled stillness. He is "
      + "not frightened; he has simply heard a word that did not fit.",
    u: ["ခဏကြာတော့ သူ ပြန်ဆက်တယ်။ “မင်းပဲ လာခဲ့တော့။”",
        "“အသံ အဆင်ပြေလို့လား ဦး။” သူက ခဏတိတ်ပြီးမှ ပြန်ဖြေတယ်။",
        "“အေး။ သူက မင်းကို ရွေးလိုက်ပြီ။”"] },

  { t: "I Never Asked Who", l: "ဆိုင်ရှေ့", k: "ne", w: ["နေလင်း"],
    g: "ဘယ်သူရွေးတာလဲလို့ ကျွန်တော် မမေးဖြစ်ခဲ့ဘူး။ တစ်နာရီအလုပ်အတွက် ငွေငါးသိန်းရမယ်ဆိုတာကိုပဲ စဉ်းစားနေမိတာ။",
    p: "Close on Ne Lin lowering the phone from his ear in daylight, already half smiling again, "
      + "the frown gone. ⚠️ HE HAS LET IT GO — the face of a man who has decided not to think "
      + "about something because the money is good.",
    u: ["ဘယ်သူရွေးတာလဲလို့ ကျွန်တော် မမေးဖြစ်ခဲ့ဘူး။",
        "တစ်နာရီအလုပ်အတွက် ငွေငါးသိန်းရမယ်ဆိုတာကိုပဲ စဉ်းစားနေမိတာ။"] },

  // ── II · NE LIN ───────────────────────────────────────────────────────────
  { t: "My Name Is Ne Lin", l: "ဆိုင်ရှေ့", k: "ne", w: ["နေလင်း"],
    g: "ကျွန်တော့်နာမည် နေလင်း။ ရိုက်ကွင်းတွေမှာ လူပိုလိုရင် ဝင်လုပ်တယ်။",
    p: "Ne Lin walking along an ordinary Yangon street in daylight with a bag over one shoulder, "
      + "half turned to camera. Entirely unremarkable.",
    u: ["ကျွန်တော့်နာမည် နေလင်း။",
        "ရိုက်ကွင်းတွေမှာ လူပိုလိုရင် ဝင်လုပ်တယ်။ ကြော်ငြာတိုတွေမှာလည်း သရုပ်ဆောင်ဖူးတယ်။"] },

  { t: "Not the First Time", l: "ဆိုင်ရှေ့", k: "insert",
    g: "လူသေဟန်ဆောင်ရတာလည်း ပထမဆုံးမဟုတ်ဘူး။ အရင်တစ်ခါက လမ်းဘေးမှာ လှဲနေရတာ။",
    p: "⚠️ AN ORDINARY FILM SET IN BRIGHT SUNLIGHT. A young man lying still on the tarmac at a "
      + "roadside playing dead while a small crew stands around him — a boom operator, someone "
      + "with a clapperboard, a camera on a shoulder rig, a reflector, cables. ⚠️ THIS IS "
      + "CHEERFUL, BUSY AND COMPLETELY MUNDANE.",
    u: ["လူသေဟန်ဆောင်ရတာလည်း ပထမဆုံးမဟုတ်ဘူး။",
        "အရင်တစ်ခါက လမ်းဘေးမှာ လှဲနေရတာ။ နေပူထဲမှာ နာရီဝက်လောက် မလှုပ်ဘဲနေရလို့ ခက်ခဲ့တယ်။",
        "ဒီတစ်ခါတော့ အခန်းထဲမှာပဲတဲ့။"] },

  // ── III · THE SHOP ────────────────────────────────────────────────────────
  { t: "We Preserve Memories", c: [[2, "stinger"]], l: "ဆိုင်ရှေ့", k: "insert",
    g: "⚠️ တံခါးတစ်ဖက်မှာ ဖုန်တက်နေတဲ့ စာတန်းတစ်ခု — “အမှတ်တရများကို ထိန်းသိမ်းပေးပါသည်။”",
    p: "⚠️ TEXT PERMITTED. Insert on a small dusty painted sign beside the glass door of the "
      + "closed photo studio, reading exactly \"အမှတ်တရများကို ထိန်းသိမ်းပေးပါသည်။\" in faded "
      + "shop lettering and nothing else. That sentence is the only text in the image. Flat "
      + "daylight, dust across the paint.",
    u: ["သွားရတဲ့နေရာက မြို့စွန်က ဓာတ်ပုံဆိုင်ဟောင်းတစ်ဆိုင်။",
        "တံခါးတစ်ဖက်မှာတော့ ဖုန်တက်နေတဲ့ စာတန်းတစ်ခု။",
        "“အမှတ်တရများကို ထိန်းသိမ်းပေးပါသည်။”"] },

  { t: "He Was Waiting at the Door", l: "ဆိုင်ရှေ့", k: "tin", w: ["ဦးတင်မောင်"],
    g: "ကျွန်တော် ရောက်သွားတော့ ဦးတင်မောင်က တံခါးမှာ စောင့်နေတယ်။ အင်္ကျီလက်ရှည်နဲ့ ပုဆိုး သပ်သပ်ရပ်ရပ်။",
    p: "Close on U Tin Maung standing in the doorway of the studio in daylight, hands folded in "
      + "front of him, waiting. ⚠️ NEAT, COURTEOUS AND ENTIRELY ORDINARY — pressed long-sleeved "
      + "shirt, paso neatly tied, a mild welcoming expression.",
    u: ["ကျွန်တော် ရောက်သွားတော့ ဦးတင်မောင်က တံခါးမှာ စောင့်နေတယ်။",
        "အသက်ခြောက်ဆယ်ဝန်းကျင်။ အင်္ကျီလက်ရှည်နဲ့ ပုဆိုး သပ်သပ်ရပ်ရပ် ဝတ်ထားတယ်။"] },

  { t: "He Looked Me Up and Down", l: "ဆိုင်ရှေ့", k: "front",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "သူက ကျွန်တော့်ကို ခေါင်းအစခြေအဆုံး ကြည့်တယ်။",
    p: "The two men in the dusty front room in daylight, ⚠️ U TIN MAUNG'S EYES TRAVELLING DOWN "
      + "NE LIN'S BODY from his shoulders to his feet rather than meeting his face, unhurried and "
      + "assessing. Ne Lin is smiling politely and has not noticed.",
    u: ["သူက ကျွန်တော့်ကို ခေါင်းအစခြေအဆုံး ကြည့်တယ်။",
        "ပြီးတော့ လက်ဆွဲနှုတ်ဆက်တယ်။"] },

  { t: "His Thumb Was on My Pulse", c: [[2, "bigstinger"]], l: "ဆိုင်ရှေ့", k: "insert",
    g: "⚠️ သူ့လက်မက ကျွန်တော့်လက်ကောက်ဝတ်ပေါ်မှာ ဖိထားတယ်။ သွေးခုန်တာကို စမ်းနေသလို။",
    p: "Tight insert on a handshake held too long: an older hand gripping a younger one, and "
      + "⚠️ THE OLDER MAN'S THUMB HAS SLID UP OFF THE HAND AND IS PRESSED FLAT AGAINST THE INSIDE "
      + "OF THE YOUNGER MAN'S WRIST, exactly where a pulse is taken. Flat daylight.",
    u: ["ပုံမှန်နှုတ်ဆက်တာထက် နည်းနည်းကြာတယ်။",
        "သူ့လက်မက ကျွန်တော့်လက်ကောက်ဝတ်ပေါ်မှာ ဖိထားတယ်။ သွေးခုန်တာကို စမ်းနေသလို။",
        "“လမ်းမှာ ပင်ပန်းလာလား။” “မပင်ပန်းပါဘူး။” “ကောင်းတယ်။ ကျန်းကျန်းမာမာ ရှိဖို့လိုတယ်။”"] },

  // ── IV · TWO COFFINS ──────────────────────────────────────────────────────
  { t: "Two Coffins", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "two",
    g: "⚠️ သူ ဆိုင်နောက်ခန်းထဲ ခေါ်သွားတယ်။ အဲဒီမှာ ခေါင်းတလားနှစ်လုံး ရှိနေတယ်။",
    p: "The master geometry, established. Two plain wooden coffins side by side on trestles under "
      + "a bare bulb. ⚠️ THE NEAR ONE HAS NO LID; THE FAR ONE IS CLOSED with its lid seated flat. "
      + "⚠️ THERE IS ONLY ENOUGH ROOM BETWEEN THEM FOR ONE PERSON TO WALK. A round white wall "
      + "clock on the back wall, a tripod camera at the near end, a table of brown envelopes "
      + "against one wall. Bare plaster, concrete floor.",
    u: ["သူ ဆိုင်နောက်ခန်းထဲ ခေါ်သွားတယ်။ အဲဒီမှာ ခေါင်းတလားနှစ်လုံး ရှိနေတယ်။",
        "တစ်လုံးက အဖုံးဖွင့်ထားတယ်။ နောက်တစ်လုံးက အဖုံးပိတ်ထားတယ်။",
        "နှစ်လုံးကြားမှာ လူတစ်ယောက် ဖြတ်လျှောက်လို့ရရုံပဲ နေရာလွတ်တယ်။"] },

  { t: "The Clock on the Wall", l: "နောက်ခန်း", k: "clock", rev: "clock 1 of 5",
    g: "ရှေ့မှာ ကင်မရာတစ်လုံး။ အပေါ်မှာ မီးလုံးတစ်လုံး။ နံရံက နာရီသံက အခန်းတစ်ခုလုံးမှာ ရှင်းရှင်းကြားနေရတယ်။",
    p: "OCCURRENCE 1 OF 5 OF THE CLOCK. Establish it precisely. Insert square on to a plain round "
      + "white wall clock on bare plaster, the face filling the frame, ⚠️ ITS FACE CARRYING ONLY "
      + "TICK MARKS AND NO NUMERALS AT ALL. The red second hand is mid-sweep. Ordinary, cheap and "
      + "working. ⚠️ Nothing about this image is frightening.",
    u: ["ရှေ့မှာ ကင်မရာတစ်လုံး။ အပေါ်မှာ မီးလုံးတစ်လုံး။",
        "နံရံက နာရီသံက အခန်းတစ်ခုလုံးမှာ ရှင်းရှင်းကြားနေရတယ်။",
        "တစ်ချက်။ တစ်ချက်။ တစ်ချက်။"] },

  { t: "One Is Already Here", l: "နောက်ခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "“တခြားသူတွေရော မလာသေးဘူးလား ဦး။” ဦးတင်မောင်က ပိတ်ထားတဲ့ခေါင်းတလားကို ကြည့်တယ်။ “တစ်ယောက်က ရောက်ပြီးပြီ။”",
    p: "Close on U Tin Maung under the bulb, his face turned to look steadily at something off to "
      + "one side, his expression mild and matter-of-fact. ⚠️ HE IS NOT JOKING.",
    u: ["“တခြားသူတွေရော မလာသေးဘူးလား ဦး။”",
        "ဦးတင်မောင်က ပိတ်ထားတဲ့ခေါင်းတလားကို ကြည့်တယ်။",
        "“တစ်ယောက်က ရောက်ပြီးပြီ။”"] },

  { t: "A Knuckle on Wood", c: [[3, "stinger"]], l: "နောက်ခန်း", k: "insert",
    g: "⚠️ အဲဒီအချိန် ပိတ်ထားတဲ့ခေါင်းတလားထဲက — တောက်။ သစ်သားကို လက်သည်းနဲ့ တစ်ချက်တို့လိုက်သလို အသံကြားရတယ်။",
    p: "⚠️ NOTHING MOVES IN THIS FRAME. Tight insert on the flat closed lid of the far coffin, the "
      + "plain wood grain filling the image, one bulb-lit edge. The lid is completely still and "
      + "completely seated. Fine dust on the surface.",
    u: ["ကျွန်တော် ရယ်မိတယ်။ “အထဲမှာ ဝင်လှဲနေပြီးသားလား။” သူက ခေါင်းညိတ်တယ်။",
        "အဲဒီအချိန် ပိတ်ထားတဲ့ခေါင်းတလားထဲက—",
        "သစ်သားကို လက်သည်းနဲ့ တစ်ချက်တို့လိုက်သလို အသံကြားရတယ်။"] },

  { t: "He Spoke to It Differently", l: "နောက်ခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ ဦးတင်မောင်က အဲဒီခေါင်းတလားပေါ် လက်တင်တယ် — “ရောက်လာပြီ။ ခဏစောင့်။” သူပြောတဲ့အသံက အရမ်းနူးညံ့နေတယ်။",
    p: "U Tin Maung standing at the closed coffin with one flat palm laid gently on its lid, "
      + "leaning slightly towards it and speaking down at the wood. ⚠️ HIS FACE HAS COMPLETELY "
      + "CHANGED FROM THE ONE HE USES ON NE LIN — soft, warm and privately tender, the way a "
      + "parent speaks to a child who is ill.",
    u: ["ကျွန်တော်ကတော့ သရုပ်ဆောင်တစ်ယောက် အတွင်းကနေ ပြန်အချက်ပြတာလို့ပဲ ထင်လိုက်တယ်။",
        "ဦးတင်မောင်က အဲဒီခေါင်းတလားပေါ် လက်တင်တယ်။ “ရောက်လာပြီ။ ခဏစောင့်။”",
        "သူပြောတဲ့အသံက ကျွန်တော့်ကို ပြောတဲ့အသံနဲ့ မတူဘူး။ အရမ်းနူးညံ့နေတယ်။"] },

  // ── V · THE ENVELOPES ─────────────────────────────────────────────────────
  { t: "Envelopes With Names on Them", c: [[2, "bigstinger"]], l: "နောက်ခန်း",
    k: "table", rev: "envelopes 1 of 3",
    g: "⚠️ စားပွဲပေါ်မှာ စာအိတ်တချို့ တန်းစီထားတယ်။ တစ်အိတ်ပေါ်မှာ ကျွန်တော့်နာမည်။ ကျန်တဲ့အိတ်တွေမှာလည်း ယောက်ျားနာမည်တွေ။",
    p: "⚠️ TEXT PERMITTED, AND IT IS THE POINT. Looking down at the wooden table: four fat brown "
      + "envelopes standing in a neat row, ⚠️ EACH WITH A DIFFERENT MAN'S NAME HANDWRITTEN ON IT "
      + "IN BURMESE BALLPOINT in the same tidy older hand. The names are the only text in the "
      + "image. Three are worn at the corners and one looks newer.",
    u: ["စားပွဲပေါ်မှာ စာအိတ်တချို့ တန်းစီထားတယ်။",
        "တစ်အိတ်ပေါ်မှာ ကျွန်တော့်နာမည် ရေးထားတယ်။",
        "ကျန်တဲ့အိတ်တွေမှာလည်း ယောက်ျားနာမည်တွေ။"] },

  { t: "Half Now, Half After", l: "နောက်ခန်း", k: "insert",
    g: "ဦးတင်မောင်က ကျွန်တော့်နာမည်ပါတဲ့အိတ်ကို ဖွင့်ပြီး ငွေတစ်ဝက် ပေးတယ်။ “ကျန်တာက ပြီးမှနော်။”",
    p: "Insert on an older man's hands drawing a folded bundle of Myanmar banknotes out of one of "
      + "the brown envelopes and laying it in a younger man's open palm. ⚠️ NO NUMERALS OR "
      + "WRITING ARE LEGIBLE on the notes. Bulb light, wooden table beneath.",
    u: ["ဦးတင်မောင်က ကျွန်တော့်နာမည်ပါတဲ့အိတ်ကို ဖွင့်ပြီး ငွေတစ်ဝက် ပေးတယ်။",
        "“ကျန်တာက ပြီးမှနော်။” “ဟုတ်ကဲ့။”"] },

  { t: "The Graduation Photograph", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "insert",
    rev: "the son alive",
    g: "⚠️ စားပွဲပေါ်က ဓာတ်ပုံဘောင်တစ်ခု — လူငယ်တစ်ယောက်ရဲ့ ဘွဲ့ယူပုံ။ သူ့ဘေးမှာ ဦးတင်မောင်။ ဓာတ်ပုံထဲက ဦးတင်မောင်က အခုထက် အများကြီးပျော်နေတယ်။",
    p: "⚠️ THE ONLY TIME WE SEE THE SON ALIVE. Insert on a framed graduation photograph standing "
      + "on the table: a warm-skinned smiling young man in gown and cap holding a certificate, "
      + "and beside him U Tin Maung with an arm round his shoulders, beaming — ⚠️ VISIBLY, "
      + "ENORMOUSLY HAPPY, a completely different man from the one in this room. Dusty glass, "
      + "bulb light.",
    u: ["ကျွန်တော် ငွေကို ထည့်နေတုန်း စားပွဲပေါ်က ဓာတ်ပုံဘောင်တစ်ခုကို မြင်တယ်။",
        "လူငယ်တစ်ယောက်ရဲ့ ဘွဲ့ယူပုံ။ သူ့ဘေးမှာ ဦးတင်မောင်။",
        "ဓာတ်ပုံထဲက ဦးတင်မောင်က အခုထက် အများကြီးပျော်နေတယ်။"] },

  { t: "He Turned It Face Down", l: "နောက်ခန်း", k: "insert",
    g: "သူ ကျွန်တော်ကြည့်နေတာကို မြင်တော့ ဘောင်ကို အသာမှောက်ထားလိုက်တယ်။",
    p: "Insert on the table: an older man's hand tipping the standing photo frame forward so it "
      + "lies face down on the wood, the plain backing board and its little stand now uppermost. "
      + "⚠️ THE GESTURE IS QUIET AND UNHURRIED, not a snatch. Bulb light.",
    u: ["သူ ကျွန်တော်ကြည့်နေတာကို မြင်တော့ ဘောင်ကို အသာမှောက်ထားလိုက်တယ်။"] },

  { t: "Leave Your Things Here", c: [[3, "stinger"]], l: "နောက်ခန်း", k: "table",
    rev: "envelopes 2 of 3",
    g: "⚠️ “မျက်မှန်၊ နာရီ၊ ဖုန်းတွေ ဒီမှာထားခဲ့။” သူက ဖုန်းကို ယူပြီး အသံပိတ်ပေးတယ်။ ပြီးတော့ ကျွန်တော့်နာမည်ပါတဲ့ စာအိတ်ထဲ ထည့်လိုက်တယ်။",
    p: "Looking down at the table: an older man's hands sliding a phone, a wristwatch and a set "
      + "of keys into the brown envelope with a name on it, and folding the flap down. ⚠️ THE "
      + "OTHER THREE NAMED ENVELOPES SIT IN A ROW BESIDE IT, all equally full. ⚠️ The handwritten "
      + "names are the only text in the image. Bulb light.",
    u: ["“မျက်မှန်၊ နာရီ၊ ဖုန်းတွေ ဒီမှာထားခဲ့။ ရိုက်တဲ့အထဲ မပါစေချင်ဘူး။”",
        "ကျွန်တော် ပစ္စည်းတွေ ချွတ်ချတယ်။ သူက ဖုန်းကို ယူပြီး အသံပိတ်ပေးတယ်။",
        "ပြီးတော့ အားလုံးကို ကျွန်တော့်နာမည်ပါတဲ့ စာအိတ်ထဲ ထည့်လိုက်တယ်။"] },

  { t: "Twice This Time", l: "နောက်ခန်း", k: "insert",
    g: "နောက်က ခေါင်းတလားဆီက အသံထပ်ကြားရတယ်။ ဒီတစ်ခါ — တောက်။ တောက်။",
    p: "The same tight insert on the flat closed lid of the far coffin as before, ⚠️ IDENTICAL "
      + "AND IDENTICALLY STILL — the same wood grain, the same dust, nothing moved at all. Bulb "
      + "light from above.",
    u: ["နောက်က ခေါင်းတလားဆီက အသံထပ်ကြားရတယ်။",
        "ဒီတစ်ခါ — တောက်။ တောက်။"] },

  { t: "He Looked at the Clock", l: "နောက်ခန်း", k: "clock", rev: "clock 2 of 5",
    g: "ဦးတင်မောင်က နာရီကို လှမ်းကြည့်တယ်။ “စရအောင်။”",
    p: "OCCURRENCE 2 OF 5 OF THE CLOCK. The identical framing — the same plain round face filling "
      + "the frame, no numerals, the red second hand mid-sweep. ⚠️ THE HANDS HAVE MOVED ON from "
      + "the first occurrence. Nothing else in the image has changed.",
    u: ["ဦးတင်မောင်က နာရီကို လှမ်းကြည့်တယ်။ ပြီးတော့ ပြောလိုက်တယ် — “စရအောင်။”"] },

  // ── VI · START ────────────────────────────────────────────────────────────
  { t: "It Fitted Me Exactly", l: "နောက်ခန်း", k: "inside",
    w: ["နေလင်း"],
    g: "ခေါင်းတလားထဲ ဝင်လှဲလိုက်တော့ ကျွန်တော့်ကိုယ်နဲ့ အံကိုက်ပဲ။",
    p: "OCCURRENCE 1 OF 8 OF THE VIEW FROM INSIDE. Establish it precisely. From flat on the "
      + "lining looking straight up: the ceiling, the bare bulb burning directly overhead, and "
      + "the wooden rim of the coffin closing the frame on all four sides. ⚠️ THE RIM IS CLOSE ON "
      + "BOTH SIDES — the box is only just wider than a man.",
    u: ["ခေါင်းတလားထဲ ဝင်လှဲလိုက်တော့ ကျွန်တော့်ကိုယ်နဲ့ အံကိုက်ပဲ။",
        "ဦးတင်မောင်က ကျွန်တော့်လက်နှစ်ဖက်ကို ရင်ဘတ်ပေါ် တင်ပေးတယ်။"] },

  { t: "The Red Thread", c: [[1, "stinger"]], l: "နောက်ခန်း", k: "thread",
    w: ["နေလင်း"], rev: "thread 1 of 10",
    g: "⚠️ ချည်နီ ပထမအကြိမ် — လက်ကောက်ဝတ်တစ်ဖက်မှာ ချည်နီတစ်ချောင်း ချည်ပေးတယ်။",
    p: "OCCURRENCE 1 OF 10 OF THE THREAD. Establish it precisely. Tight insert filling the frame "
      + "with Ne Lin's wrist against the coffin lining and an older man's fingers pulling a knot "
      + "of thin RED cotton thread closed around it. ⚠️ MATTE RED COTTON, ABOUT THE THICKNESS OF "
      + "KITCHEN STRING — this exact colour and thickness returns nine more times.",
    u: ["လက်ကောက်ဝတ်တစ်ဖက်မှာ ချည်နီတစ်ချောင်း ချည်ပေးတယ်။",
        "ချည်ရဲ့နောက်တစ်ဖက်က ခေါင်းတလားဘေးကို ကျသွားတယ်။"] },

  { t: "What Is the Thread For", l: "နောက်ခန်း", k: "thread", rev: "thread 2 of 10",
    g: "“ဒီချည်က ဘာအတွက်လဲ။” “ဇာတ်ဝင်ခန်းထဲမှာ ပါတယ်။”",
    p: "OCCURRENCE 2 OF 10. The same tight framing, now on the outer edge of the coffin: the red "
      + "thread running up over the wooden rim and dropping away down the far side, ⚠️ GOING OUT "
      + "OF FRAME AND NOT ARRIVING ANYWHERE we can see. Slack and unremarkable.",
    u: ["“ဒီချည်က ဘာအတွက်လဲ။” “ဇာတ်ဝင်ခန်းထဲမှာ ပါတယ်။”",
        "“ကျွန်တော် ဘာလုပ်ပေးရမလဲ။” “မလှုပ်ဘဲ လှဲနေပေး။ ဦးက ပြီးပြီဆိုမှ ထ။”"] },

  { t: "He Straightened My Collar", l: "နောက်ခန်း", k: "inside", w: ["ဦးတင်မောင်"],
    g: "သူ ပြောပြီး ကျွန်တော့်အင်္ကျီကော်လံကို အသာပြင်ပေးတယ်။ ကင်မရာနားက ခလုတ်နှိပ်သံ ကြားရတယ်။ “စပြီ။”",
    p: "OCCURRENCE 2 OF 8 OF THE VIEW FROM INSIDE. The same framing, with U Tin Maung leaning in "
      + "over the opening and filling the upper half of it, blocking part of the bulb, ⚠️ HIS TWO "
      + "HANDS COMING DOWN INTO THE NEAR FOREGROUND to settle a shirt collar flat. His face is "
      + "kind and absorbed in the small task.",
    u: ["သူ ပြောပြီး ကျွန်တော့်အင်္ကျီကော်လံကို အသာပြင်ပေးတယ်။",
        "ကျွန်တော် မျက်လုံးမှိတ်လိုက်တယ်။",
        "ကင်မရာနားက ခလုတ်နှိပ်သံ ကြားရတယ်။ “စပြီ။”"] },

  { t: "The Other Lid Moved", l: "နောက်ခန်း", k: "two",
    g: "ခဏကြာတော့ ဘေးက ခေါင်းတလားအဖုံး ရွှေ့သံ။ ကျွီ… ပြီးတော့ အနံ့တစ်မျိုး ရလာတယ်။",
    p: "The two coffins from the foot as established — ⚠️ AND THE LID OF THE FAR ONE HAS BEEN "
      + "SLID CLEAR AND IS PROPPED AGAINST THE TRESTLE ON THE FLOOR. The far coffin now stands "
      + "open, its interior dark and not readable from this angle. Nobody is in shot.",
    u: ["ခဏကြာတော့ ဘေးက ခေါင်းတလားအဖုံး ရွှေ့သံ ကြားရတယ်။",
        "ပြီးတော့ အနံ့တစ်မျိုး ရလာတယ်။",
        "ရေစိုအဝတ်တွေကို အလုံပိတ်ထားလို့ ထွက်လာတဲ့အနံ့လိုမျိုး။"] },

  { t: "This One Is Quiet", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "neflat", w: ["နေလင်း"],
    g: "⚠️ ဦးတင်မောင်က တိုးတိုးပြောတယ် — “ဒီတစ်ယောက်က ငြိမ်တယ်။ အရင်ကလူတွေလို မဟုတ်ဘူး။”",
    p: "Close on Ne Lin lying in the coffin with his eyes shut, his nose and upper lip wrinkling "
      + "against a smell — ⚠️ AND HIS EYEBROWS HAVE JUST DRAWN TOGETHER at something he has "
      + "heard. Everything else about him is still. Bulb light from above.",
    u: ["ကျွန်တော် နှာခေါင်းရှုံ့မိတယ်။ ဦးတင်မောင်က တိုးတိုးပြောတယ်။",
        "“ဒီတစ်ယောက်က ငြိမ်တယ်။ အရင်ကလူတွေလို မဟုတ်ဘူး။”",
        "ကျွန်တော် မျက်လုံးဖွင့်မလို့လုပ်ပြီး ပြန်ထိန်းလိုက်တယ်။"] },

  { t: "Do Your Job", l: "နောက်ခန်း", k: "inside", w: ["နေလင်း"],
    g: "ရိုက်ကွင်းထဲမှာ စကားပြောနေကြတာပဲ။ ကိုယ့်အလုပ်ကိုယ် လုပ်ရမယ်။",
    p: "OCCURRENCE 3 OF 8 OF THE VIEW FROM INSIDE. The same framing with nobody leaning in — "
      + "ceiling, burning bulb, wooden rim. ⚠️ NE LIN'S CLOSED EYELIDS AND THE BRIDGE OF HIS NOSE "
      + "are in the extreme near foreground at the bottom of frame, soft and out of focus. "
      + "Completely still.",
    u: ["ရိုက်ကွင်းထဲမှာ စကားပြောနေကြတာပဲ။",
        "ကိုယ့်အလုပ်ကိုယ် လုပ်ရမယ်။"] },

  { t: "A Long Breath Beside Me", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "inside",
    w: ["နေလင်း"],
    g: "⚠️ ဘေးကလူက အသက်ရှူလိုက်တယ်။ ရှည်ရှည်ကြီး။ ကျွန်တော့်ရင်ထဲက လေလည်း တစ်ပြိုင်နက်တည်း ထွက်သွားတယ်။",
    p: "OCCURRENCE 4 OF 8 OF THE VIEW FROM INSIDE. The same framing, unchanged and empty above — "
      + "⚠️ AND NE LIN'S EYES HAVE SNAPPED OPEN in the near foreground at the bottom of frame, "
      + "wide and fixed on the ceiling. Nothing else in the picture has moved.",
    u: ["အဲဒီအချိန် ဘေးကလူက အသက်ရှူလိုက်တယ်။ ရှည်ရှည်ကြီး။",
        "ကျွန်တော့်ရင်ထဲက လေလည်း တစ်ပြိုင်နက်တည်း ထွက်သွားတယ်။"] },

  { t: "I Could Not Fill My Chest", l: "နောက်ခန်း", k: "insert", w: ["နေလင်း"],
    g: "အသက်ပြန်ရှူမလို့လုပ်တယ်။ အပြည့်ရှူလို့ မရဘူး။ ရင်ဘတ်ပေါ်မှာ ဖိထားသလို ဖြစ်နေတယ်။",
    p: "Insert from above on Ne Lin's crossed hands on his chest, ⚠️ THE TENDONS STANDING OUT ON "
      + "THE BACKS OF BOTH HANDS as he strains, the fingers pressed hard into his shirt. His "
      + "chest is barely lifted. Nothing is on top of him.",
    u: ["အသက်ပြန်ရှူမလို့လုပ်တယ်။ အပြည့်ရှူလို့ မရဘူး။",
        "ရင်ဘတ်ပေါ်မှာ ဖိထားသလို ဖြစ်နေတယ်။"] },

  // ── VII · MY VOICE ────────────────────────────────────────────────────────
  { t: "My Own Voice, From the Next Box", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "two",
    g: "⚠️ ပြီးတော့ ဘေးကနေ ကျွန်တော့်အသံ ကြားလာတယ် — “အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။”",
    p: "The two coffins from the foot: the near one holding a man lying flat, ⚠️ AND IN THE FAR "
      + "ONE NOTHING IS VISIBLE ABOVE THE RIM AT ALL — it is simply open and dark. U Tin Maung "
      + "stands in the gap between them with both hands over his mouth. The bulb burns overhead.",
    u: ["ပြီးတော့ ဘေးကနေ ကျွန်တော့်အသံ ကြားလာတယ်။",
        "“အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။”",
        "မနေ့က ကျွန်တော် ပို့ထားတဲ့အသံဖိုင်။ အသံဖွင့်ပြနေတာ ဖြစ်မှာပေါ့။"] },

  { t: "Not From a Speaker", l: "နောက်ခန်း", k: "neflat",
    w: ["နေလင်း"],
    g: "⚠️ ဒါပေမယ့် အသံက စပီကာတစ်လုံးက ထွက်လာသလို မဟုတ်ဘူး။ ကျွန်တော့်ဘေးမှာ လူတစ်ယောက် လဲလျောင်းပြီး ပြောနေသလို။",
    p: "Looking straight down at Ne Lin's face as he lies flat in the coffin, eyes open. ⚠️ HIS "
      + "HEAD IS ROLLED AS FAR TO ONE SIDE AS IT WILL GO ON THE LINING, one ear pressed into it, "
      + "straining towards a sound coming from beyond the rim. Every cord in his neck is standing "
      + "out and he has lifted nothing — ⚠️ HIS SHOULDERS AND THE BACK OF HIS HEAD STAY FLAT "
      + "AGAINST THE LINING. Bulb light falling on him from above camera.",
    u: ["ဒါပေမယ့် အသံက စပီကာတစ်လုံးက ထွက်လာသလို မဟုတ်ဘူး။",
        "ကျွန်တော့်ဘေးမှာ လူတစ်ယောက် လဲလျောင်းပြီး ပြောနေသလို။",
        "ဦးတင်မောင်ရဲ့ ငိုသံ ကြားလာတယ်။ “အေး… အဖေ ဒီမှာရှိတယ်။”"] },

  { t: "There Was No Filming", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "wide",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "⚠️ ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။ အခန်းထဲမှာ သူတစ်ယောက်ပဲ ရပ်နေတယ်။ ရိုက်ကူးရေးလုပ်နေတဲ့ပုံ မရှိဘူး။",
    p: "Wide on the whole back room. ⚠️ NE LIN IS LYING FLAT ON HIS BACK IN THE NEAR COFFIN with "
      + "his eyes open and his head rolled to one side, plainly visible in the box and plainly "
      + "not getting up. ⚠️ THE ROOM HOLDS EXACTLY WHAT THE MASTER PLATE HOLDS AND NOTHING ELSE: "
      + "the two coffins on their trestles, the bare bulb, the wall clock, the table of "
      + "envelopes, the tripod standing by itself facing nobody, bare plaster and bare concrete. "
      + "⚠️ ONE OLD MAN IS THE ONLY PERSON ON HIS FEET IN IT, standing in the gap between the two "
      + "boxes with both hands over his mouth, crying. Every surface is empty.",
    u: ["ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။",
        "အခန်းထဲမှာ သူတစ်ယောက်ပဲ ရပ်နေတယ်။ ရိုက်ကူးရေးလုပ်နေတဲ့ပုံ မရှိဘူး။",
        "ကင်မရာနောက်မှာလည်း မရှိဘူး။"] },

  { t: "Stop, I Cannot Breathe", l: "နောက်ခန်း", k: "neflat", w: ["နေလင်း"],
    g: "“ဦး… ခဏရပ်ဦး။ ကျွန်တော် အသက်ရှူမဝဘူး။” သူ ကျွန်တော့်ဘက် မလှည့်ဘူး။",
    p: "Close on Ne Lin's face in the coffin speaking, his mouth open on a word and his eyes fixed "
      + "off to one side, ⚠️ HIS EXPRESSION STILL MORE CONFUSED THAN TERRIFIED. Bulb light from "
      + "above.",
    u: ["“ဦး… ခဏရပ်ဦး။ ကျွန်တော် အသက်ရှူမဝဘူး။”",
        "သူ ကျွန်တော့်ဘက် မလှည့်ဘူး။"] },

  { t: "I Never Recorded That Line", c: [[1, "bigstinger"]], l: "နောက်ခန်း", k: "neflat",
    w: ["နေလင်း"],
    g: "⚠️ အဲဒီစကားကို ဘေးကလူက ကျွန်တော့်အသံနဲ့ ပြန်ပြောတယ် — “ဦး… ခဏရပ်ဦး။” ဒီစကားကို အသံသွင်းမပို့ထားဘူး။ အခုမှ ပြောလိုက်တာ။",
    p: "Looking straight down at Ne Lin lying flat in the coffin, ⚠️ AND THIS IS THE FRAME WHERE "
      + "HE UNDERSTANDS — the face going rigid, the eyes widening and locking, all the confusion "
      + "resolving at once into pure fear. ⚠️ HE HAS STOPPED STRAINING AND GONE COMPLETELY STILL, "
      + "his head square on the lining now rather than rolled aside. Bulb light falling on him "
      + "from above and behind camera.",
    u: ["ကျွန်တော် တောင့်သွားတယ်။",
        "ဒီစကားကို အသံသွင်းမပို့ထားဘူး။ အခုမှ ပြောလိုက်တာ။",
        "ဘေးက အသံက ဆက်လာတယ်။ “ကျွန်တော် အသက်ရှူမဝဘူး။”"] },

  { t: "We Have the Voice", l: "နောက်ခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ ဦးတင်မောင်က အဲဒီလူကို ပြုံးပြတယ် — “ရပြီ။ အသံရပြီ။”",
    p: "Close on U Tin Maung looking down into the far coffin, ⚠️ HIS FACE BREAKING INTO AN OPEN "
      + "DELIGHTED SMILE THROUGH THE TEARS — pure relief and joy, the happiest he has looked since "
      + "the graduation photograph. Bulb light from above.",
    u: ["ဦးတင်မောင်က အဲဒီလူကို ပြုံးပြတယ်။ “ရပြီ။ အသံရပြီ။”",
        "ကျွန်တော် ထအော်ဖို့ ပါးစပ်ဖွင့်လိုက်တယ်။",
        "အသံ မထွက်တော့ဘူး။"] },

  // ── VIII · HIS FACE ───────────────────────────────────────────────────────
  { t: "One Single Thread", c: [[3, "bigstinger"]], l: "နောက်ခန်း", k: "thread",
    w: ["သား"], rev: "thread 3 of 10",
    g: "⚠️ ချည်နီ တတိယအကြိမ် — အသားဖြူဖျော့နေတဲ့လက်။ လက်ကောက်ဝတ်မှာ ချည်နီတစ်ချောင်း။ ကျွန်တော့်လက်ကောက်ဝတ်ကနေ ထွက်သွားတဲ့ တစ်ချောင်းတည်းသောချည်။",
    p: "OCCURRENCE 3 OF 10, AND THE ONE THAT EXPLAINS THE FILM. ⚠️ THE WIDEST OF THE THREAD "
      + "INSERTS — pulled back just far enough to hold both ends at once, and the only one in the "
      + "series that is not tight. In the near half of frame: ⚠️ A FLAT GREY-WHITE HAND WITH "
      + "DARKENED NAILS AND A SOAKED CUFF, risen and closed hard over the wooden rim of the far "
      + "coffin, the red thread knotted at its wrist. From there ⚠️ ONE CONTINUOUS RED THREAD runs "
      + "across the dark gap between the two boxes, over the rim of the near one, and down to a "
      + "warm-skinned wrist lying flat at the far edge of frame. ⚠️ ONE THREAD, TWO WRISTS, "
      + "UNBROKEN END TO END. Bare wood and shadow, nothing else in shot.",
    u: ["ဘေးကခေါင်းတလားအနားကိုတော့ လက်တစ်ဖက်က လှမ်းကိုင်လိုက်တယ်။",
        "အသားဖြူဖျော့နေတဲ့လက်။ လက်ကောက်ဝတ်မှာ ချည်နီတစ်ချောင်း။",
        "ကျွန်တော့်လက်ကောက်ဝတ်ကနေ ထွက်သွားတဲ့ တစ်ချောင်းတည်းသောချည်။"] },

  { t: "He Sat Up", l: "နောက်ခန်း", k: "wide", w: ["သား", "နေလင်း"],
    g: "⚠️ ဘေးကလူ ဖြည်းဖြည်း ထထိုင်လာတယ်။ ကျွန်တော့်လည်ပင်းကတော့ ခေါင်းကို မထိန်းနိုင်သလို လေးလာတယ်။",
    p: "Wide on the room from the foot of both coffins. ⚠️ THE SON IS SITTING UPRIGHT IN THE FAR "
      + "COFFIN, SEEN FROM BEHIND — the back of his head, his soaked flattened hair, his damp "
      + "shoulders, his face away from camera. Ne Lin lies flat in the near coffin in the "
      + "foreground. The bulb hangs between them and the wall clock is on the wall beyond.",
    u: ["ဘေးကလူ ဖြည်းဖြည်း ထထိုင်လာတယ်။",
        "ကျွန်တော့်လည်ပင်းကတော့ ခေါင်းကို မထိန်းနိုင်သလို လေးလာတယ်။"] },

  { t: "The Man From the Photograph", c: [[2, "bigstinger"]], l: "နောက်ခန်း",
    k: "sonface", w: ["သား"], rev: "the son dead",
    g: "⚠️ သူ့မျက်နှာကို ကျွန်တော် မြင်လိုက်ရတယ် — စားပွဲပေါ်က ဘွဲ့ယူပုံထဲက လူငယ်။ ဒါပေမယ့် ဓာတ်ပုံထဲကလို မဟုတ်တော့ဘူး။",
    p: "⚠️ THE SAME FACE AS THE GRADUATION PHOTOGRAPH AND NOTHING LIKE IT. Head-and-shoulders on "
      + "the son sitting in the coffin, facing camera: the same wide forehead, the same mole near "
      + "one eyebrow, the same slightly prominent front teeth — but ⚠️ THE SKIN IS FLAT DRAINED "
      + "GREY-WHITE, THE HAIR IS SOAKED AND PLASTERED DOWN, THE LIPS ARE THE SAME GREY AS THE "
      + "FACE, AND THE SKIN UNDER BOTH EYES IS DARKENED TO A BRUISE-BLUE SHADOW. His eyes are open "
      + "and dull. ⚠️ HIS SKIN IS WHOLE AND SMOOTH — unmarked, unbroken, nothing decayed.",
    u: ["သူ့မျက်နှာကို ကျွန်တော် မြင်လိုက်ရတယ်။ စားပွဲပေါ်က ဘွဲ့ယူပုံထဲက လူငယ်။",
        "ဒါပေမယ့် ဓာတ်ပုံထဲကလို မဟုတ်တော့ဘူး။",
        "ဆံပင်တွေ စိုကပ်နေတယ်။ နှုတ်ခမ်းက အရောင်မရှိဘူး။ မျက်လုံးအောက်မှာ ညိုမည်းနေတယ်။"] },

  { t: "His Father Straightened His Neck", l: "နောက်ခန်း", k: "son",
    w: ["သား", "ဦးတင်မောင်"],
    g: "သူ့လည်ပင်းက ဘေးတစ်ဖက်ကို ယိုင်နေတယ်။ ဦးတင်မောင်က အသာပြန်တည့်ပေးတယ်။ “သား… အဖေ့ကို ကြည့်ပါဦး။”",
    p: "From behind the son's shoulder: ⚠️ HIS HEAD HAS FALLEN FAR OVER TO ONE SIDE as though the "
      + "neck will not hold it, and U Tin Maung's two hands are cupping it and gently lifting it "
      + "straight. The father's face is visible past him, tender and pleading. The son's face "
      + "stays away from camera.",
    u: ["သူ့လည်ပင်းက ဘေးတစ်ဖက်ကို ယိုင်နေတယ်။ ဦးတင်မောင်က အသာပြန်တည့်ပေးတယ်။",
        "“သား… အဖေ့ကို ကြည့်ပါဦး။”"] },

  { t: "He Was Looking at Me", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "sonface",
    w: ["သား"],
    g: "⚠️ လူငယ်က သူ့ကို မကြည့်ဘူး။ ကျွန်တော့်ကို ကြည့်နေတယ်။ ပြီးတော့ ကျွန်တော့်အသံနဲ့ ပြောတယ် — “ဒီတစ်ယောက်က သိသွားပြီ။”",
    p: "Head-and-shoulders on the son, ⚠️ LOOKING STRAIGHT INTO THE LENS with his dull open eyes "
      + "while his head is still being held straight by hands at the edge of frame. His grey lips "
      + "are parted mid-word. ⚠️ HIS EXPRESSION IS FLAT AND ATTENTIVE — not angry, not hungry, "
      + "simply noting something. Bulb light.",
    u: ["လူငယ်က သူ့ကို မကြည့်ဘူး။ ကျွန်တော့်ကို ကြည့်နေတယ်။",
        "ပြီးတော့ ကျွန်တော့်အသံနဲ့ ပြောတယ်။",
        "“ဒီတစ်ယောက်က သိသွားပြီ။”"] },

  { t: "Like Falling Asleep", l: "နောက်ခန်း", k: "tin",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ သူက ကျွန်တော့်ကို အပြစ်တောင်းပန်သလို ကြည့်တယ် — “မင်း အိပ်ပျော်သွားသလိုပဲ ဖြစ်မှာပါ နေလင်း။”",
    p: "Close on U Tin Maung turned to camera at last, tears still on his face, ⚠️ HIS EXPRESSION "
      + "APOLOGETIC AND ALMOST EMBARRASSED — a courteous man saying something he knows is "
      + "unforgivable, and saying it kindly. Bulb light from above.",
    u: ["ဦးတင်မောင် ကျွန်တော့်ဘက် လှည့်လာတယ်။ မျက်ရည်တွေ ရှိနေသေးတယ်။",
        "သူက ကျွန်တော့်ကို အပြစ်တောင်းပန်သလို ကြည့်တယ်။",
        "“မင်း အိပ်ပျော်သွားသလိုပဲ ဖြစ်မှာပါ နေလင်း။”"] },

  { t: "Nothing Came Out", l: "နောက်ခန်း", k: "neflat", w: ["နေလင်း"],
    g: "ကျွန်တော် ပါးစပ်လှုပ်တယ်။ သူ့ကို ဆဲချင်တယ်။ အော်ချင်တယ်။ တောင်းပန်ချင်တယ်။ ဘာအသံမှ မထွက်ဘူး။",
    p: "Close on Ne Lin's face in the coffin, his mouth working hard and producing plainly nothing "
      + "at all, tears running sideways from the corners of both eyes towards his ears. Bulb light "
      + "from above.",
    u: ["ကျွန်တော် ပါးစပ်လှုပ်တယ်။",
        "သူ့ကို ဆဲချင်တယ်။ အော်ချင်တယ်။ တောင်းပန်ချင်တယ်။",
        "ဘာအသံမှ မထွက်ဘူး။"] },

  { t: "He Sat Down Beside Me", l: "နောက်ခန်း", k: "inside", w: ["ဦးတင်မောင်"],
    g: "ဦးတင်မောင်က ကျွန်တော့်နားမှာ ထိုင်ချလိုက်တယ်။ “ဦးသားက ရေထဲကျသွားတာ။ ပြန်တွေ့တော့ နောက်ကျနေပြီ။”",
    p: "OCCURRENCE 5 OF 8 OF THE VIEW FROM INSIDE. The same framing, with U Tin Maung's head and "
      + "shoulders leaning in over the opening — ⚠️ BUT LOWER AND CLOSER THAN BEFORE, as though he "
      + "has sat down on the floor beside the box. He is talking rather than instructing and his "
      + "face is exhausted.",
    u: ["ဦးတင်မောင်က ကျွန်တော့်နားမှာ ထိုင်ချလိုက်တယ်။",
        "“ဦးသားက ရေထဲကျသွားတာ။ ပြန်တွေ့တော့ နောက်ကျနေပြီ။”"] },

  // ── IX · THE LENS CAP ─────────────────────────────────────────────────────
  { t: "The Lens Cap Was Still On", c: [[3, "bigstinger"]], l: "နောက်ခန်း", k: "insert",
    rev: "the reveal",
    g: "⚠️ ကင်မရာမှန်ဘီလူးမှာ အဖုံးတပ်ထားတုန်းပဲ။ အစကတည်းက ဘာမှ မရိုက်ခဲ့ဘူး။",
    p: "⚠️ THE REVEAL, AND IT IS A SMALL OBJECT. Tight insert straight on to the front of the video "
      + "camera on its tripod, the lens filling most of the frame. ⚠️ A ROUND BLACK LENS CAP IS "
      + "SEATED FIRMLY OVER THE GLASS, its little cord hanging from the body. The dim room falls "
      + "away behind it.",
    u: ["သူ စကားပြောနေတုန်း ကျွန်တော် ကင်မရာဘက်ကို ကြည့်မိတယ်။",
        "အခန်းအလင်းရောင်နဲ့ မျက်စိကျင့်သားရလာတော့မှ ရှင်းရှင်းမြင်ရတယ်။",
        "ကင်မရာမှန်ဘီလူးမှာ — အဖုံးတပ်ထားတုန်းပဲ။"] },

  { t: "I Was Not an Actor", l: "နောက်ခန်း", k: "neflat", w: ["နေလင်း"],
    g: "အစကတည်းက ဘာမှ မရိုက်ခဲ့ဘူး။ ရိုက်ကူးရေး မရှိဘူး။ ကျွန်တော်ကလည်း သရုပ်ဆောင်မဟုတ်ဘူး။ သူတို့လိုနေတဲ့ ပစ္စည်းတစ်ခု။",
    p: "Close on Ne Lin's face in the coffin looking up at the ceiling, ⚠️ HIS EXPRESSION GONE "
      + "COMPLETELY FLAT — past fear and into understanding. The tears have stopped. Bulb light "
      + "from above.",
    u: ["အစကတည်းက ဘာမှ မရိုက်ခဲ့ဘူး။ ရိုက်ကူးရေး မရှိဘူး။",
        "ကျွန်တော်ကလည်း သရုပ်ဆောင်မဟုတ်ဘူး။",
        "သူတို့လိုနေတဲ့ ပစ္စည်းတစ်ခု။"] },

  { t: "He Moved the Camera Aside", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "wide",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ ဦးတင်မောင်က ကင်မရာကို ဘေးဖယ်လိုက်တယ်။ ဖုံးကွယ်စရာ မလိုတော့သလိုပဲ။",
    p: "Wide on the room: U Tin Maung carrying the whole tripod and camera off to one side and "
      + "setting it down facing the wall, ⚠️ CASUALLY AND WITHOUT CEREMONY, the way you move a "
      + "chair that is in the way. The two coffins stand behind him.",
    u: ["ဦးတင်မောင်က ကျွန်တော်ကြည့်နေတဲ့နေရာကို လိုက်ကြည့်တယ်။",
        "ပြီးတော့ ကင်မရာကို ဘေးဖယ်လိုက်တယ်။",
        "ဖုံးကွယ်စရာ မလိုတော့သလိုပဲ။"] },

  { t: "You People", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "tin", w: ["ဦးတင်မောင်"],
    g: "⚠️ “မင်းတို့ကို ဒီလိုပြောမှ လာကြမှာမို့လို့ပါ။” သူ “မင်း” လို့ မပြောဘူး။",
    p: "Close on U Tin Maung saying it, ⚠️ MILDLY AND WITHOUT ANY EMPHASIS AT ALL — explaining "
      + "something practical and slightly apologetic. He does not realise he has said anything. "
      + "Bulb light from above.",
    u: ["“မင်းတို့ကို ဒီလိုပြောမှ လာကြမှာမို့လို့ပါ။”",
        "မင်းတို့။ သူ “မင်း” လို့ မပြောဘူး။"] },

  { t: "My Things Were in There Now", l: "နောက်ခန်း",
    k: "table", rev: "envelopes 3 of 3",
    g: "⚠️ နာမည်တွေ။ ဖုန်းတွေ။ အခုတော့ ကျွန်တော့်ပစ္စည်းတွေလည်း အဲဒီအထဲမှာ ရောက်နေပြီ။",
    p: "⚠️ TEXT PERMITTED. The same downward framing on the table as before: the four named brown "
      + "envelopes in their row, ⚠️ AND THE HANDWRITTEN NAMES ARE THE ONLY TEXT IN THE IMAGE. "
      + "Three sit closed and settled; the fourth is newly filled and its flap freshly folded. "
      + "Bulb light, dust on the table.",
    u: ["ကျွန်တော် စားပွဲပေါ်က စာအိတ်တွေကို ပြန်ကြည့်မိတယ်။",
        "နာမည်တွေ။ ဖုန်းတွေ။",
        "အခုတော့ ကျွန်တော့်ပစ္စည်းတွေလည်း အဲဒီအထဲမှာ ရောက်နေပြီ။"] },

  // ── X · THE SCRATCHES ─────────────────────────────────────────────────────
  { t: "One Leg, Then the Other", l: "နောက်ခန်း", k: "son",
    w: ["သား"],
    g: "ဘေးကလူက ခြေထောက်တစ်ဖက်ကို ခေါင်းတလားအပြင် ချလိုက်တယ်။ ကျွန်တော့်ခြေထောက် ထုံသွားတယ်။",
    p: "Framed low on the side of the far coffin: ⚠️ ONE BARE GREY-WHITE FOOT AND ANKLE SWUNG OVER "
      + "THE EDGE AND HANGING, wet, the trouser hem dark and clinging, a bead of water running off "
      + "the heel towards the concrete. The other leg is still inside. Nothing above the knee is in "
      + "shot.",
    u: ["ဘေးကလူက ခြေထောက်တစ်ဖက်ကို ခေါင်းတလားအပြင် ချလိုက်တယ်။ ကျွန်တော့်ခြေထောက် ထုံသွားတယ်။",
        "နောက်တစ်ဖက် ချလိုက်တယ်။ ခြေချောင်းတွေတောင် မလှုပ်နိုင်တော့ဘူး။"] },

  { t: "I Think He Can Stand This Time", c: [[1, "stinger"]], l: "နောက်ခန်း",
    k: "tin", w: ["ဦးတင်မောင်", "သား"],
    g: "⚠️ ဦးတင်မောင်က ဝမ်းသာပြီး သူ့သားပခုံးကို ကိုင်တယ် — “ဒီတစ်ခါ ထရပ်နိုင်မယ်ထင်တယ်။”",
    p: "U Tin Maung with both hands on his son's shoulders from behind, ⚠️ HIS FACE LIT WITH HOPE "
      + "AND EXCITEMENT, leaning round to look at him. The son is seen from behind only. ⚠️ THE "
      + "FATHER LOOKS LIKE A MAN AT A HOSPITAL BEDSIDE WATCHING SOMEONE TAKE A FIRST STEP.",
    u: ["ဦးတင်မောင်က ဝမ်းသာပြီး သူ့သားပခုံးကို ကိုင်တယ်။",
        "“ဒီတစ်ခါ ထရပ်နိုင်မယ်ထင်တယ်။”",
        "လူငယ်ကတော့ ကျွန်တော့်ကိုပဲ ကြည့်နေတယ်။ “အဖေ… အဖုံး။”"] },

  { t: "His Chest Rose and Mine Fell", l: "နောက်ခန်း", k: "insert",
    g: "⚠️ ဘေးကလူကတော့ အသက်ရှူမှန်လာပြီ။ သူ့ရင်ဘတ်တက်သွားတိုင်း ကျွန်တော့်ရင်ဘတ် ပိုကျလာတယ်။",
    p: "⚠️ TWO CHESTS IN ONE FRAME. A tight horizontal insert across both open coffins at rim "
      + "height, holding a sliver of each man's chest: ⚠️ THE GREY ONE IS CLEARLY LIFTED AND FULL; "
      + "THE WARM ONE IS CLEARLY FLAT AND SUNKEN. Shirt fabric on both. The dark gap between the "
      + "boxes runs down the middle of the image.",
    u: ["ကျွန်တော် အသက်ရှူဖို့ အားထုတ်နေတယ်။",
        "ဘေးကလူကတော့ အသက်ရှူမှန်လာပြီ။",
        "သူ့ရင်ဘတ်တက်သွားတိုင်း ကျွန်တော့်ရင်ဘတ် ပိုကျလာတယ်။"] },

  { t: "The Lid Started at My Feet", l: "နောက်ခန်း", k: "inside",
    w: ["ဦးတင်မောင်"],
    g: "ဦးတင်မောင်က အဖုံးကို ကျွန်တော့်ခြေထောက်ဘက်က စဖုံးတယ်။ အဖုံးအတွင်းဘက်ကို မြင်လိုက်ရတယ်။",
    p: "OCCURRENCE 6 OF 8 OF THE VIEW FROM INSIDE. The same framing — ⚠️ BUT A WOODEN LID HAS SLID "
      + "IN ACROSS THE BOTTOM THIRD OF THE FRAME from the foot end, a hard straight edge of shadow "
      + "cutting off part of the ceiling. The bulb is still visible above it.",
    u: ["ဦးတင်မောင်က အဖုံးကို ကျွန်တော့်ခြေထောက်ဘက်က စဖုံးတယ်။",
        "အဖုံးအတွင်းဘက်ကို မြင်လိုက်ရတယ်။"] },

  { t: "Scratches Inside the Lid", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "insert",
    rev: "the others, proved",
    g: "⚠️ သစ်သားပေါ်မှာ ခြစ်ရာတွေ။ အရှည်လိုက်။ အများကြီး။ တချို့နေရာမှာ လက်သည်းနဲ့ ခြစ်ထားသလို လိုင်းသေးသေးတွေ အထပ်ထပ်။",
    p: "⚠️ THE PROOF, AND IT IS ONLY WOOD. Tight insert on the underside of the coffin lid, the raw "
      + "timber filling the frame in raking bulb light: ⚠️ LONG DEEP GOUGES RUN THE LENGTH OF IT, "
      + "and over and across them ⚠️ DENSE CLUSTERS OF FINE PARALLEL SCRATCHES, layered in several "
      + "different directions as though made at different times by different hands. Pale splintered "
      + "wood inside the marks. ⚠️ NOTHING ORGANIC IS IN THE FRAME — bare timber only.",
    u: ["သစ်သားပေါ်မှာ ခြစ်ရာတွေ။ အရှည်လိုက်။ အများကြီး။",
        "တချို့နေရာမှာ လက်သည်းနဲ့ ခြစ်ထားသလို လိုင်းသေးသေးတွေ အထပ်ထပ်။",
        "ကျွန်တော် အသက်ကို မေ့ပြီး အဲဒီရာတွေကိုပဲ ကြည့်နေမိတယ်။"] },

  { t: "This Coffin Was Not New", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "neflat",
    w: ["နေလင်း"],
    g: "⚠️ ဒီခေါင်းတလားကို ကျွန်တော့်အတွက် အသစ်လုပ်ထားတာ မဟုတ်ဘူး။ အရင်က ဝင်လှဲဖူးတဲ့လူတွေ ရှိတယ်။",
    p: "Close on Ne Lin's face lit from one side by the narrowing gap above him, ⚠️ HIS EYES MOVING "
      + "ACROSS SOMETHING JUST ABOVE HIS FACE, reading it. The expression is not fear — it is the "
      + "flat horror of arithmetic. A hard edge of shadow lies across his chin.",
    u: ["ဒီခေါင်းတလားကို ကျွန်တော့်အတွက် အသစ်လုပ်ထားတာ မဟုတ်ဘူး။",
        "အရင်က ဝင်လှဲဖူးတဲ့လူတွေ ရှိတယ်။",
        "သူတို့လည်း ငွေငါးသိန်းရမယ်လို့ ထင်ခဲ့ကြမှာပဲ။"] },

  // ── XI · WHAT THEY NEED ───────────────────────────────────────────────────
  { t: "The Thread Caught Under the Lid", l: "နောက်ခန်း",
    k: "thread", rev: "thread 4 of 10",
    g: "⚠️ ချည်နီ စတုတ္ထအကြိမ် — အဖုံးနဲ့ ခေါင်းတလားအနားကြားမှာ ချည်နီ ညပ်သွားတယ်။",
    p: "OCCURRENCE 4 OF 10. The same tight framing, now at the coffin's edge: ⚠️ THE RED THREAD IS "
      + "TRAPPED BETWEEN THE CLOSING LID AND THE RIM, pinched flat and bent sharply over the wood, "
      + "the length beyond it pulled bar-straight. Bulb light on the timber.",
    u: ["ဦးတင်မောင်ရဲ့သားက ချည်နီကို လက်ချောင်းပေါ် ရစ်ယူနေတယ်။",
        "ကျွန်တော့်လက်ကောက်ဝတ် အနားကို ဆွဲကပ်သွားတယ်။",
        "အဖုံးနဲ့ ခေါင်းတလားအနားကြားမှာ ချည်နီ ညပ်သွားတယ်။"] },

  { t: "He Lifted the Lid to Free It", c: [[1, "bigstinger"]], l: "နောက်ခန်း",
    k: "thread", rev: "thread 5 of 10 — THE TELL",
    g: "⚠️ ချည်နီ ပဉ္စမအကြိမ် — ဦးတင်မောင်က အဖုံးကို ခဏပြန်ကြွတယ်။ ချည်ကို သေချာလွတ်အောင် ဆွဲထုတ်ပေးတယ်။",
    p: "OCCURRENCE 5 OF 10, AND THE MOST IMPORTANT SHOT IN THE FILM. The same tight framing: ⚠️ THE "
      + "LID HAS BEEN LIFTED A FEW INCHES CLEAR OF THE RIM AGAIN and an older man's two hands are "
      + "carefully easing the pinched red thread out from under it, ⚠️ HANDLING IT WITH OBVIOUS "
      + "CARE, the way you free a fine chain from a zip. He is paying it far more attention than "
      + "the man underneath.",
    u: ["ဦးတင်မောင်က အဖုံးကို ခဏပြန်ကြွတယ်။",
        "ချည်ကို သေချာလွတ်အောင် ဆွဲထုတ်ပေးတယ်။"] },

  { t: "Now I Knew What to Do", c: [[2, "stinger"]], l: "နောက်ခန်း", k: "neflat",
    w: ["နေလင်း"],
    g: "⚠️ သူတို့အတွက် အရေးကြီးတာ ကျွန်တော် ငြိမ်နေတာတင် မဟုတ်ဘူး။ ဒီချည် မပြတ်ဖို့လည်း လိုတယ်။",
    p: "Close on Ne Lin's face in the narrowing gap, ⚠️ AND SOMETHING HAS SWITCHED ON BEHIND HIS "
      + "EYES — the panic replaced by a hard flat calculation. He is looking sideways at his own "
      + "wrist. The straight edge of the lid's shadow lies across him.",
    u: ["အဲဒီလုပ်ရပ်ကို မြင်တာနဲ့ ကျွန်တော် ဘာလုပ်ရမလဲ သိသွားတယ်။",
        "သူတို့အတွက် အရေးကြီးတာ ကျွန်တော် ငြိမ်နေတာတင် မဟုတ်ဘူး။",
        "ဒီချည် မပြတ်ဖို့လည်း လိုတယ်။"] },

  { t: "I Stopped Struggling", l: "နောက်ခန်း", k: "inside", w: ["နေလင်း"],
    g: "ကျွန်တော် ရုန်းနေတာ ရပ်လိုက်တယ်။ ပါးစပ်ကို နည်းနည်းဟပြီး မျက်လုံးမှိတ်ထားလိုက်တယ်။",
    p: "OCCURRENCE 7 OF 8 OF THE VIEW FROM INSIDE. The lid still covers the bottom third. ⚠️ NE "
      + "LIN'S FACE IN THE NEAR FOREGROUND HAS GONE COMPLETELY SLACK — eyes closed, mouth slightly "
      + "open, jaw loose, every muscle released. ⚠️ HE LOOKS EXACTLY LIKE A DEAD MAN AND IT IS "
      + "DELIBERATE.",
    u: ["ကျွန်တော် ရုန်းနေတာ ရပ်လိုက်တယ်။ လက်ကို အသာချတယ်။",
        "ပါးစပ်ကို နည်းနည်းဟပြီး မျက်လုံးမှိတ်ထားလိုက်တယ်။",
        "ရင်ဘတ်ကတော့ အသက်ရှူချင်လွန်းလို့ နာနေပြီ။"] },

  { t: "Now I Really Had to Act", l: "နောက်ခန်း", k: "inside",
    w: ["ဦးတင်မောင်"],
    g: "⚠️ “နေလင်း…” ကျွန်တော် မတုံ့ပြန်ဘူး။ သူ့လက်က ကျွန်တော့်ပါးကို ထိတယ်။ ကျွန်တော် မလှုပ်ဘူး။",
    p: "OCCURRENCE 8 OF 8 OF THE VIEW FROM INSIDE. The same framing with the lid across the bottom, "
      + "and U Tin Maung leaning in from above with ⚠️ ONE HAND COMING DOWN INTO THE NEAR "
      + "FOREGROUND TO TOUCH A SLACK CHEEK. His face is searching and uncertain. ⚠️ THE FACE BELOW "
      + "HIS HAND HAS NOT REACTED AT ALL.",
    u: ["ဦးတင်မောင်က ကျွန်တော့်မျက်နှာနား ငုံ့လာတယ်။ “နေလင်း…”",
        "ကျွန်တော် မတုံ့ပြန်ဘူး။ သူ့လက်က ကျွန်တော့်ပါးကို ထိတယ်။",
        "ကျွန်တော် မလှုပ်ဘူး။ လူသေဟန်ဆောင်ဖို့ ငှားထားတာမဟုတ်လား။"] },

  { t: "Son, Try to Stand", l: "နောက်ခန်း", k: "wide",
    w: ["ဦးတင်မောင်", "သား"],
    g: "“သား… ထရပ်ကြည့်။” နှစ်ယောက်လုံး ကျွန်တော့်ဘက်က မျက်လုံးလွှဲသွားတယ်။",
    p: "Wide on the room: U Tin Maung has left the half-fitted lid resting on the near coffin and "
      + "crossed to his son, lifting the young man's arm across his own shoulders to take his "
      + "weight. ⚠️ BOTH OF THEM ARE FACING AWAY FROM THE NEAR COFFIN. The son is seen from behind. "
      + "Ne Lin lies apparently dead in the foreground.",
    u: ["“သား… ထရပ်ကြည့်။”",
        "ဦးတင်မောင်က ကျွန်တော့်အဖုံးကို ခဏချပြီး သူ့သားဆီ သွားတယ်။",
        "နှစ်ယောက်လုံး ကျွန်တော့်ဘက်က မျက်လုံးလွှဲသွားတယ်။"] },

  { t: "An Inch Was Enough", l: "နောက်ခန်း", k: "thread",
    w: ["နေလင်း"], rev: "thread 6 of 10",
    g: "⚠️ ချည်နီ ဆဋ္ဌမအကြိမ် — လက်ကောက်ဝတ်ကို အားထည့်ပြီး ဘေးဘက်ရွှေ့တယ်။ တစ်လက်မလောက်ပဲ ရွှေ့နိုင်တယ်။ ချည်နီက အဖုံးအောက် ပြန်ဝင်သွားတယ်။",
    p: "OCCURRENCE 6 OF 10. The same tight framing: a wrist dragging itself sideways across the "
      + "lining by perhaps an inch, ⚠️ AND THE RED THREAD BEING PULLED BACK IN UNDER THE EDGE OF "
      + "THE RESTING LID, pinched between lid and rim once more. The movement is tiny and "
      + "deliberate.",
    u: ["ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။",
        "လက်ကောက်ဝတ်ကို အားထည့်ပြီး ဘေးဘက်ရွှေ့တယ်။ တစ်လက်မလောက်ပဲ ရွှေ့နိုင်တယ်။",
        "ချည်နီက အဖုံးအောက် ပြန်ဝင်သွားတယ်။"] },

  // ── XII · GETTING OUT ─────────────────────────────────────────────────────
  { t: "The Coffin Rocked", l: "နောက်ခန်း", k: "wide",
    w: ["နေလင်း", "ဦးတင်မောင်", "သား"],
    g: "ကျွန်တော် ကိုယ်ကို တစ်ဖက်စောင်းလိုက်တယ်။ ခေါင်းတလား လှုပ်သွားတယ်။ ဦးတင်မောင် လှည့်ကြည့်တယ်။",
    p: "Wide on the room, three figures and each one doing something different. ⚠️ NE LIN IS "
      + "STILL FLAT ON HIS BACK IN THE NEAR COFFIN and does not stand or sit up at any point — "
      + "the box has tipped over to one side on its trestles with the loose lid sliding off it, "
      + "and he is lying inside it as it goes. ⚠️ U TIN MAUNG IS ON HIS FEET AND HAS TWISTED "
      + "ROUND TO LOOK STRAIGHT AT NE LIN IN THE COFFIN — head and eyes both turned to him, "
      + "alarmed rather than angry. ⚠️ THE DEAD SON HANGS OFF THE OLD MAN AS DEAD WEIGHT, one "
      + "limp grey arm draped across the back of the father's neck and shoulders and the father's "
      + "arm around his waist holding him up, his head down and his face away from camera. ⚠️ "
      + "NOBODY IS LOOKING AT THE CAMERA AND NOBODY IS HOLDING HANDS.",
    u: ["ကျွန်တော် ကိုယ်ကို တစ်ဖက်စောင်းလိုက်တယ်။ ခေါင်းတလား လှုပ်သွားတယ်။",
        "ဦးတင်မောင် လှည့်ကြည့်တယ်။",
        "ကျွန်တော် နောက်တစ်ကြိမ် အားကုန်လှိမ့်တယ်။"] },

  { t: "It Went Over", c: [[1, "stinger"]], l: "နောက်ခန်း", k: "wide", w: ["နေလင်း"],
    g: "⚠️ ခုံပုတစ်လုံးက အောက်ကနေ လွတ်သွားတယ်။ ခေါင်းတလားက ဘေးစောင်းပြီး ကျသွားတယ်။ ဒုန်း!",
    p: "Wide on the room at the instant of the fall: ⚠️ THE NEAR COFFIN IS ON THE CONCRETE ON ITS "
      + "SIDE, one trestle kicked over beside it, the lid skidding away separately, Ne Lin half "
      + "spilled onto the floor. Dust lifting through the bulb light. U Tin Maung and his son are "
      + "still on their feet beyond.",
    u: ["ခုံပုတစ်လုံးက အောက်ကနေ လွတ်သွားတယ်။",
        "ခေါင်းတလားက ဘေးစောင်းပြီး ကျသွားတယ်။",
        "ကျွန်တော့်ပခုံးက ကြမ်းပြင်နဲ့ ဆောင့်မိတယ်။ အဖုံးလည်း လျှောကျသွားတယ်။"] },

  { t: "Pinned Under the Lid", l: "နောက်ခန်း", k: "thread",
    rev: "thread 7 of 10",
    g: "⚠️ ချည်နီ သတ္တမအကြိမ် — ချည်နီက အဖုံးအောက်မှာ ဖိညပ်နေတယ်။ ဘေးကလူက လက်ကို ချက်ချင်း ဆွဲရုတ်တယ်။",
    p: "OCCURRENCE 7 OF 10. The same tight framing at floor level: ⚠️ THE RED THREAD RUNS UNDER THE "
      + "EDGE OF THE FALLEN LID where it is trapped hard against the concrete, and the length "
      + "beyond is stretched bar-straight and visibly thrumming. Dust on the floor either side.",
    u: ["ချည်နီက အဖုံးအောက်မှာ ဖိညပ်နေတယ်။",
        "ဘေးကလူက လက်ကို ချက်ချင်း ဆွဲရုတ်တယ်။ ချည်တင်းသွားတယ်။"] },

  { t: "It Snapped", c: [[2, "bigstinger"]], l: "နောက်ခန်း", k: "thread", w: ["နေလင်း"],
    rev: "thread 8 of 10",
    g: "⚠️ ချည်နီ အဋ္ဌမအကြိမ် — ဖျောက်။ ချည်ပြတ်သွားတယ်။",
    p: "OCCURRENCE 8 OF 10. The same tight framing on Ne Lin's wrist: ⚠️ THE THREAD HAS PARTED. Two "
      + "loose red ends fly apart in opposite directions, still curling from the tension, the "
      + "broken ends frayed. The loop left on his wrist has gone slack. ⚠️ HIS SKIN IS UNBROKEN — "
      + "only a shallow pale line where the thread sat.",
    u: ["ကျွန်တော်လည်း လွတ်နေတဲ့လက်နဲ့ အဖုံးအစွန်းကို ဖိပြီး ကိုယ်ကို နောက်ထပ်လှိမ့်လိုက်တယ်။",
        "ချည်ပြတ်သွားတယ်။",
        "ကျွန်တော် လေကို အားကုန်ရှူမိတယ်။"] },

  { t: "My Breathing Filled the Room", c: [[1, "stinger"]], l: "နောက်ခန်း", k: "nefloor",
    w: ["နေလင်း"],
    g: "⚠️ တစ်ခန်းလုံးမှာ ကျွန်တော့်အသက်ရှူသံ ကြီးကြီးပေါ်လာတယ်။ ဘေးကလူရဲ့ရင်ဘတ်ကတော့ ရပ်သွားတယ်။",
    p: "Close on Ne Lin's face on the concrete floor, ⚠️ HIS MOUTH WIDE OPEN AND HIS WHOLE CHEST "
      + "HEAVING, colour flooding back into his face, tears and sweat together. Dust in the air "
      + "around him. ⚠️ HE LOOKS VIOLENTLY ALIVE.",
    u: ["တစ်ခန်းလုံးမှာ ကျွန်တော့်အသက်ရှူသံ ကြီးကြီးပေါ်လာတယ်။",
        "ဘေးကလူရဲ့ရင်ဘတ်ကတော့ ရပ်သွားတယ်။ သူ့ခြေထောက်တွေ ခွေကျလာတယ်။"] },

  { t: "Both of Them Went Down", l: "နောက်ခန်း", k: "wide", w: ["ဦးတင်မောင်", "သား"],
    g: "ဦးတင်မောင် မထိန်းနိုင်ဘူး။ နှစ်ယောက်လုံး ကြမ်းပြင်ပေါ် လဲကျသွားတယ်။",
    p: "Wide on the room: U Tin Maung down on the concrete with his son collapsed across his lap, "
      + "⚠️ THE SON SEEN FROM BEHIND AND BELOW so his face is not readable, one arm hanging. The "
      + "father has both arms around him. Dust, the tipped coffin, the swinging bulb.",
    u: ["ဦးတင်မောင် မထိန်းနိုင်ဘူး။",
        "နှစ်ယောက်လုံး ကြမ်းပြင်ပေါ် လဲကျသွားတယ်။",
        "ကျွန်တော် ခေါင်းတလားထဲကနေ တွားထွက်တယ်။"] },

  { t: "There Is Still Some Left in Him", l: "နောက်ခန်း",
    k: "son", w: ["သား"],
    g: "⚠️ “အဖေ… မကုန်သေးဘူး…” သူ့လက်ချောင်းက ကျွန်တော့်ဘက်ကို ညွှန်တယ် — “သူ့မှာ… ကျန်သေးတယ်…”",
    p: "⚠️ THE MOST FRIGHTENING GESTURE IN THE FILM AND IT IS ONE FINGER. Framed from the son's "
      + "shoulder down: a limp grey arm lying across the concrete, ⚠️ AND ONE INDEX FINGER LIFTED "
      + "AND POINTING STEADILY OUT OF FRAME while everything else about the arm is slack. His face "
      + "is above the top edge of frame.",
    u: ["သူ့သားရဲ့မျက်နှာက ခုနက ပြန်ရလာတဲ့အရောင်တွေ ပျောက်နေပြီ။ ဒါပေမယ့် မျက်လုံးက ကျွန်တော့်ဆီ ရွေ့လာတယ်။",
        "“အဖေ… မကုန်သေးဘူး…”",
        "သူ့လက်ချောင်းက ကျွန်တော့်ဘက်ကို ညွှန်တယ်။ “သူ့မှာ… ကျန်သေးတယ်…”"] },

  { t: "He Caught My Leg", l: "နောက်ခန်း", k: "floor",
    w: ["ဦးတင်မောင်", "နေလင်း"],
    g: "ဦးတင်မောင် ချက်ချင်း ထရပ်လာတယ်။ ကျွန်တော့်ခြေထောက်ကို ဖမ်းဆွဲလိုက်တယ်။",
    p: "Camera low on the concrete: Ne Lin on his front mid-crawl towards the door with ⚠️ AN OLDER "
      + "MAN'S TWO HANDS CLAMPED AROUND ONE OF HIS ANKLES, dragging him back, his fingers "
      + "scrabbling at the floor. Dust, the fallen lid, a trestle leg.",
    u: ["ဦးတင်မောင် ချက်ချင်း ထရပ်လာတယ်။",
        "ကျွန်တော့်ခြေထောက်ကို ဖမ်းဆွဲလိုက်တယ်။",
        "ကျွန်တော် နောက်ပြန်လဲကျသွားတယ်။"] },

  { t: "Just One Moment, Ne Lin", l: "နောက်ခန်း", k: "thread",
    w: ["ဦးတင်မောင်"], rev: "thread 9 of 10",
    g: "⚠️ ချည်နီ နဝမအကြိမ် — သူ့လက်ထဲမှာ ပြတ်သွားတဲ့ချည်။ ပြန်ဆက်ဖို့ ကြိုးစားနေတာ။ “တစ်ခဏပဲ နေလင်း!”",
    p: "OCCURRENCE 9 OF 10. The same tight framing: an older man's two hands holding the two frayed "
      + "broken ends of the red thread and ⚠️ TRYING TO PRESS THEM TOGETHER END TO END as though "
      + "they will rejoin. His hands are shaking. Concrete floor beneath.",
    u: ["သူ့လက်ထဲမှာ ပြတ်သွားတဲ့ချည်။ ပြန်ဆက်ဖို့ ကြိုးစားနေတာ။",
        "“တစ်ခဏပဲ နေလင်း! တစ်ခဏပဲ!”",
        "ကျွန်တော် သူ့ကို ခြေထောက်နဲ့ ကန်ဖယ်တယ်။ သူ မလွှတ်ဘူး။"] },

  { t: "I Had My Voice Back", l: "နောက်ခန်း", k: "nefloor",
    w: ["နေလင်း"],
    g: "⚠️ ကျွန်တော် အခု အသံပြန်ထွက်လာပြီဆိုတာ သတိရတယ် — “ကယ်ကြပါဦး! လူသတ်နေတယ်!”",
    p: "Close on Ne Lin's face turned towards the doorway on the concrete floor, ⚠️ MOUTH WIDE OPEN "
      + "IN A FULL SHOUT — and this time everything about the picture says the sound is coming out: "
      + "the neck cords, the wide eyes, the whole face committed. Dust in the air.",
    u: ["ကျွန်တော် အခု အသံပြန်ထွက်လာပြီဆိုတာ သတိရတယ်။",
        "ဆိုင်ရှေ့ဘက်ကို အားကုန်အော်လိုက်တယ်။ “ကယ်ကြပါဦး!”",
        "ကျွန်တော် ရှောင်ပြီး ထပ်အော်တယ်။ “လူသတ်နေတယ်! ကယ်ကြပါဦး!”"] },

  { t: "The Door Went In", l: "နောက်ခန်း", k: "wide", w: ["နေလင်း"],
    g: "ဆိုင်အပြင်က လူသံ ကြားလာတယ်။ “ဘာဖြစ်တာလဲ!” တံခါးတွန်းသံ။",
    p: "Wide on the room towards the door: ⚠️ A BAR OF DAYLIGHT HAS OPENED DOWN ONE EDGE OF IT and "
      + "two shadows break that light from outside. Ne Lin is dragging himself towards it. U Tin "
      + "Maung's head is turned sharply to the sound. Bulb light and daylight meet across the "
      + "concrete.",
    u: ["ဆိုင်အပြင်က လူသံ ကြားလာတယ်။ “ဘာဖြစ်တာလဲ!” တံခါးတွန်းသံ။",
        "ဦးတင်မောင် ခဏလှည့်ကြည့်တဲ့အချိန် ကျွန်တော် ခြေထောက်ကို ဆွဲရုတ်ပြီး တံခါးဆီ ပြေးတယ်။"] },

  { t: "The Last Thing I Saw", c: [[3, "stinger"]], l: "နောက်ခန်း", k: "thread",
    w: ["ဦးတင်မောင်"], rev: "thread 10 of 10",
    g: "⚠️ ချည်နီ နောက်ဆုံးအကြိမ် — ပြတ်နေတဲ့ချည်နှစ်ဖက်ကို လက်နဲ့ ဖိဆက်ထားတယ်။ ဖိလေလေ မဆက်လေလေ။ သူကတော့ မရပ်ဘူး။",
    p: "OCCURRENCE 10 OF 10, SEEN FROM THE DOOR. The same tight framing pulled back a little: an "
      + "older man kneeling on the concrete beside a slack grey hand, ⚠️ PRESSING THE TWO BROKEN "
      + "THREAD ENDS TOGETHER BETWEEN HIS FINGERS AND THUMBS, harder and harder — and ⚠️ THEY "
      + "SIMPLY WILL NOT JOIN. Daylight from the doorway falls across his hands.",
    u: ["အပြင်က လူနှစ်ယောက်က တံခါးကို တွန်းဖွင့်ပြီး ကျွန်တော့်ကို ဆွဲထုတ်လိုက်ကြတယ်။",
        "နောက်ဆုံး ကျွန်တော် ပြန်မြင်လိုက်ရတာက ဦးတင်မောင် သူ့သားနားမှာ ဒူးထောက်နေတယ်။",
        "ပြတ်နေတဲ့ချည်နှစ်ဖက်ကို လက်နဲ့ ဖိဆက်ထားတယ်။ ဖိလေလေ မဆက်လေလေ။ သူကတော့ မရပ်ဘူး။"] },

  // ── XIII · EXACTLY ONE HOUR ───────────────────────────────────────────────
  { t: "They Arrested Him That Day", l: "ဆိုင်ရှေ့", k: "front",
    w: ["ဦးတင်မောင်", "ရဲသား"],
    g: "အဲဒီနေ့ ဦးတင်မောင် အဖမ်းခံရတယ်။ သူ့သားရဲ့ရုပ်အလောင်းကို ဆိုင်နောက်ခန်းမှာ တွေ့ခဲ့ကြတယ်။",
    p: "Outside the photo studio in daylight: a police officer walking U Tin Maung out through the "
      + "dusty front room by one arm, ⚠️ THE OLD MAN UPRIGHT, TIDY AND COMPLETELY CALM, looking "
      + "back over his shoulder into the building. Neighbours at the edge of frame.",
    u: ["အဲဒီနေ့ ဦးတင်မောင် အဖမ်းခံရတယ်။",
        "သူ့သားရဲ့ရုပ်အလောင်းကို ဆိုင်နောက်ခန်းမှာ တွေ့ခဲ့ကြတယ်။",
        "သားဆုံးတာ တစ်လကျော်ပြီ။"] },

  { t: "One Night in Hospital", l: "ဆေးရုံ", k: "ward", w: ["နေလင်း"],
    g: "ကျွန်တော်က ဆေးရုံမှာ တစ်ညနေရတယ်။ နောက်နေ့မှာ အသက်ရှူတာ ပုံမှန်ပြန်ဖြစ်လာတယ်။",
    p: "Ne Lin sitting up in an ordinary hospital bed in flat daylight, ⚠️ PHYSICALLY FINE — no "
      + "drip, no bandage, no injury, just a young man sitting on top of the covers looking at his "
      + "own hands. Pale green walls, a window with a thin curtain.",
    u: ["သင်္ဂြိုဟ်ပြီးပြီလို့ ဆွေမျိုးတွေကို ပြောထားပေမယ့် အလောင်းကို သူ သိမ်းထားခဲ့တာ။",
        "ကျွန်တော်က ဆေးရုံမှာ တစ်ညနေရတယ်။",
        "နောက်နေ့မှာ အသက်ရှူတာ ပုံမှန်ပြန်ဖြစ်လာတယ်။ လက်တွေ၊ ခြေထောက်တွေလည်း ပြန်လှုပ်နိုင်လာတယ်။"] },

  { t: "Three Other Young Men", l: "ရဲစခန်း", k: "table",
    g: "⚠️ အဲဒီနာမည်တွေက ရိုက်ကူးရေးအဖွဲ့သားနာမည်တွေ မဟုတ်ဘူး။ ကျွန်တော့်လိုပဲ အလုပ်လာလုပ်ခဲ့တဲ့ လူငယ်သုံးယောက်ရဲ့နာမည်တွေ။",
    p: "⚠️ TEXT PERMITTED. Looking down at a police station table: the four named brown envelopes "
      + "laid out in a row, ⚠️ NOW OPENED, each with its contents set out in front of it — a phone, "
      + "a wristwatch or a set of keys, a folded bundle of banknotes. ⚠️ THE HANDWRITTEN NAMES ARE "
      + "THE ONLY TEXT IN THE IMAGE. Flat daylight, a plain table.",
    u: ["ကျွန်တော့်ဖုန်းနဲ့ ပစ္စည်းတွေ ပြန်ယူတဲ့နေ့မှ စားပွဲပေါ်က ကျန်တဲ့စာအိတ်တွေအကြောင်း သိရတယ်။",
        "အဲဒီနာမည်တွေက ရိုက်ကူးရေးအဖွဲ့သားနာမည်တွေ မဟုတ်ဘူး။",
        "ကျွန်တော့်လိုပဲ အလုပ်လာလုပ်ခဲ့တဲ့ လူငယ်သုံးယောက်ရဲ့နာမည်တွေ။"] },

  { t: "Nobody Was Looking for Them", l: "ရဲစခန်း", k: "insert",
    g: "⚠️ သုံးယောက်စလုံး မိသားစုနဲ့ အဆက်အသွယ်ပြတ်နေကြတာ။",
    p: "Tight insert on three switched-off phones lying side by side on the table in flat daylight, "
      + "⚠️ ALL THREE SCREENS BLACK AND DEAD, each with a folded bundle of banknotes beside it. ⚠️ "
      + "NO TEXT OR NUMERALS ARE LEGIBLE ANYWHERE. Ordinary objects, laid out like evidence.",
    u: ["သုံးယောက်စလုံး မိသားစုနဲ့ အဆက်အသွယ်ပြတ်နေကြတာ။",
        "စာအိတ်တစ်အိတ်စီထဲမှာ ဖုန်းတစ်လုံး၊ ကိုယ်ရေးပစ္စည်းတချို့နဲ့ မပေးရသေးတဲ့ ငွေတစ်ဝက်စီ ရှိတယ်။",
        "သူတို့လည်း အလုပ်ပြီးရင် ငွေလာယူမယ်လို့ ထင်ခဲ့ကြမှာပဲ။"] },

  { t: "Two Times Beside Each Name", c: [[2, "bigstinger"]], l: "ရဲစခန်း", k: "insert",
    rev: "the notebook",
    g: "⚠️ မှတ်စုစာအုပ်ထဲမှာ နာမည်တစ်ခုစီဘေးမှာ အချိန်နှစ်ခု ရေးထားတယ် — ၂:၁၀ — ၃:၁၀ / ၆:၄၀ — ၇:၄၀ / ၉:၀၅ — ၁၀:၀၅",
    p: "⚠️ TEXT PERMITTED AND IT IS THE WHOLE POINT. Insert square on from above to an open lined "
      + "exercise book on a table in flat daylight, the page filling the frame, carrying a short "
      + "handwritten list in Burmese ballpoint. Three lines of paired times read exactly "
      + "\"၂:၁၀ — ၃:၁၀\", \"၆:၄၀ — ၇:၄၀\" and \"၉:၀၅ — ၁၀:၀၅\", each preceded by a man's name, "
      + "and one final name sits below them with ⚠️ THE SPACE AFTER IT LEFT COMPLETELY BLANK. "
      + "Nothing else is written on the page.",
    u: ["ဦးတင်မောင်ရဲ့ မှတ်စုစာအုပ်ထဲမှာတော့ နာမည်တစ်ခုစီဘေးမှာ အချိန်နှစ်ခု ရေးထားတယ်။",
        "နှစ်ချက်ဆယ် — သုံးချက်ဆယ်။ ခြောက်နာရီလေးဆယ် — ခုနစ်နာရီလေးဆယ်။",
        "ကိုးနာရီငါးမိနစ် — ဆယ်နာရီငါးမိနစ်။"] },

  { t: "Exactly One Hour", l: "ရဲစခန်း", k: "clock",
    rev: "clock 3 of 5",
    g: "⚠️ နာမည်သုံးခု။ နေ့ရက်မတူဘူး။ ဒါပေမယ့် ကြားကအချိန်က အတူတူပဲ — တစ်နာရီတိတိ။",
    p: "OCCURRENCE 3 OF 5 OF THE CLOCK, and the first one outside the back room. The identical "
      + "framing — the same kind of plain round white face with no numerals filling the frame — "
      + "⚠️ BUT THIS IS A DIFFERENT CLOCK ON A DIFFERENT WALL, in flat daylight rather than bulb "
      + "light. The red second hand is mid-sweep.",
    u: ["နာမည်သုံးခု။ နေ့ရက်မတူဘူး။",
        "ဒါပေမယ့် ကြားကအချိန်က အတူတူပဲ။",
        "တစ်နာရီတိတိ။"] },

  { t: "My Name, and No Time at All", l: "ရဲစခန်း", k: "ne",
    w: ["နေလင်း"],
    g: "⚠️ အောက်ဆုံးမှာ ကျွန်တော့်နာမည် ရှိတယ်။ အချိန်နေရာကတော့ ဗလာ။",
    p: "Close on Ne Lin standing over the table in flat daylight looking down at the open notebook, "
      + "⚠️ HIS FACE COMPLETELY STILL. Not shock — the particular blankness of a man reading his "
      + "own name on a list. Ordinary bright office light.",
    u: ["အောက်ဆုံးမှာ ကျွန်တော့်နာမည် ရှိတယ်။ အချိန်နေရာကတော့ ဗလာ။",
        "ကျွန်တော်က အစမှာ အရင်လူတွေ ရိုက်ကူးခဲ့တဲ့အချိန်လို့ ထင်မိသေးတယ်။"] },

  { t: "What Were They Measuring", l: "ရဲစခန်း", k: "station", w: ["နေလင်း", "ရဲသား"],
    g: "ကင်မရာမှာ ဘာမှ မရိုက်ထားခဲ့ဘူးဆိုတာ သတိရတော့မှ — အဲဒီအချိန်တွေက ဘာကိုတိုင်းထားတာလဲဆိုတဲ့ မေးခွန်း ဝင်လာတယ်။",
    p: "Ne Lin and the police officer either side of the station counter in flat daylight, the open "
      + "notebook between them, ⚠️ THE OFFICER MID-SENTENCE AND NE LIN NOT LOOKING AT HIM — staring "
      + "at the page instead. Ordinary bright office.",
    u: ["ကင်မရာမှာ ဘာမှ မရိုက်ထားခဲ့ဘူးဆိုတာ သတိရတော့မှ—",
        "အဲဒီအချိန်တွေက ဘာကိုတိုင်းထားတာလဲဆိုတဲ့ မေးခွန်း ဝင်လာတယ်။"] },

  { t: "When He Woke and When He Went Quiet", l: "ရဲစခန်း",
    k: "insert",
    g: "⚠️ ရဲက ပြန်ပြောပြတယ် — “သား ပြန်နိုးတဲ့အချိန်နဲ့ ပြန်ငြိမ်သွားတဲ့အချိန်။”",
    p: "Tight insert on the open notebook page in flat daylight with ⚠️ A POLICE OFFICER'S FINGER "
      + "RESTING ON THE FIRST PAIR OF TIMES. The Burmese handwriting is legible and is the only "
      + "text in the image. Nothing else in frame.",
    u: ["ရဲက ဦးတင်မောင်ကို မေးတဲ့အခါ သူ ဖြေခဲ့တဲ့စကားကို ကျွန်တော့်ကို ပြန်ပြောပြတယ်။",
        "“သား ပြန်နိုးတဲ့အချိန်နဲ့ ပြန်ငြိမ်သွားတဲ့အချိန်။”"] },

  { t: "All Three of Them", c: [[2, "stinger"]], l: "ရဲစခန်း", k: "ne", w: ["နေလင်း"],
    g: "⚠️ “တစ်နာရီပြီးရင် သူ့သား ပြန်သေသွားတာလား။” ခေါင်းညိတ်ပြတယ်။ “အရင်သုံးယောက်လုံးလည်း အဲဒီလိုပဲလား။” ထပ်ခေါင်းညိတ်ပြတယ်။",
    p: "Close on Ne Lin in the police station, ⚠️ THE COLOUR DRAINING OUT OF HIS FACE AS HE ARRIVES "
      + "AT IT — eyes moving fractionally, mouth slightly open, absolutely still. Flat ordinary "
      + "daylight on an ordinary young man doing arithmetic.",
    u: ["“တစ်နာရီပြီးရင် သူ့သား ပြန်သေသွားတာလား။” ခေါင်းညိတ်ပြတယ်။",
        "“အရင်သုံးယောက်လုံးလည်း အဲဒီလိုပဲလား။” ထပ်ခေါင်းညိတ်ပြတယ်။",
        "ကျွန်တော် အကြာကြီး တိတ်နေမိတယ်။"] },

  { t: "He Knew All Along", c: [[2, "bigstinger"]], l: "ရဲစခန်း", k: "ne", w: ["နေလင်း"],
    g: "⚠️ တစ်ယောက်သေရင် သူ့သား တစ်နာရီပဲ ရမယ်ဆိုတာ သူ သိထားပြီးသား။ အဲဒါနဲ့တောင် နောက်တစ်ယောက် ထပ်ခေါ်ခဲ့တယ်။",
    p: "Close on Ne Lin, ⚠️ AND THIS IS THE FRAME WHERE HE UNDERSTANDS THE WHOLE THING — the face "
      + "not horrified but hollowed, the way a person looks when a thing they assumed was madness "
      + "turns out to have been a decision. Flat daylight.",
    u: ["ဦးတင်မောင်က သူ့သားကို အပြီးတိုင် ပြန်ရှင်လာအောင် လုပ်နိုင်တယ်လို့ မှားယွင်းယုံနေတာလို့ ကျွန်တော် ထင်ခဲ့တာ။",
        "မဟုတ်ဘူး။ တစ်ယောက်သေရင် သူ့သား တစ်နာရီပဲ ရမယ်ဆိုတာ သူ သိထားပြီးသား။",
        "အဲဒါနဲ့တောင် နောက်တစ်ယောက် ထပ်ခေါ်ခဲ့တယ်။ ပြီးတော့ ကျွန်တော့်ကို ခေါ်ခဲ့တယ်။"] },

  { t: "Other Voices, the Same Sentence", l: "ရဲစခန်း",
    k: "insert",
    g: "⚠️ သူ့ဖုန်းထဲမှာ နောက်ထပ် အသံဖိုင်တွေလည်း ရှိသေးတယ်။ မတူတဲ့အသံနဲ့ တူညီတဲ့စကားတစ်ကြောင်းစီ — “အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။”",
    p: "⚠️ TEXT PERMITTED. Insert on a phone screen held flat on the station counter, showing a "
      + "voice-memo list: ⚠️ SIX OR SEVEN SEPARATE RECORDINGS STACKED DOWN THE SCREEN, each row a "
      + "small waveform with a different man's name beside it, ⚠️ AND EVERY ROW CARRYING THE SAME "
      + "LINE OF BURMESE: \"အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။\". That repeated sentence and the names "
      + "are the only text in the image.",
    u: ["သူ့ဖုန်းထဲမှာ နောက်ထပ် သရုပ်ဆောင်လျှောက်ထားသူတွေရဲ့ အသံဖိုင်တွေလည်း ရှိသေးတယ်။",
        "ယောက်ျားအသံတွေ။ မတူတဲ့အသံနဲ့ တူညီတဲ့စကားတစ်ကြောင်းစီ ပြောထားကြတာ။",
        "“အဖေ၊ ကျွန်တော် ပြန်ရောက်ပြီ။”"] },

  { t: "The Funeral Was Finished", l: "ဆိုင်ရှေ့", k: "front",
    g: "သူ့သားရဲ့နာရေးကို ဆွေမျိုးတွေက နောက်ဆုံးမှာ ပြီးအောင်လုပ်ပေးခဲ့ကြတယ်။ ကျွန်တော်လည်း အဲဒီဆိုင်ကို ပြန်မသွားတော့ဘူး။",
    p: "The front of the photo studio in daylight, shuttered and padlocked, ⚠️ THE DUSTY SIGN "
      + "STILL BESIDE THE DOOR but the shop now plainly closed for good. ⚠️ NOBODY IN SHOT. "
      + "Ordinary street, ordinary afternoon.",
    u: ["သူ့သားရဲ့နာရေးကို ဆွေမျိုးတွေက နောက်ဆုံးမှာ ပြီးအောင်လုပ်ပေးခဲ့ကြတယ်။",
        "ကျွန်တော်လည်း အဲဒီဆိုင်ကို ပြန်မသွားတော့ဘူး။"] },

  { t: "One Hour, Is That Right", l: "ဆိုင်ရှေ့", k: "ne",
    w: ["နေလင်း"],
    g: "ဒါပေမယ့် တစ်ခါတလေ အလုပ်ခ ညှိနှိုင်းနေရင်း ပထမဆုံးဖုန်းပြောခဲ့တာကို ပြန်သတိရမိတယ် — “တစ်နာရီပဲ ဟုတ်တယ်နော် ဦး။”",
    p: "Close on Ne Lin in daylight somewhere ordinary, phone in hand and held away from his ear, "
      + "⚠️ STARING AT NOTHING MID-CONVERSATION, the everyday business of agreeing a fee having "
      + "just stopped dead in his mouth.",
    u: ["ဒါပေမယ့် တစ်ခါတလေ အလုပ်ခ ဘယ်လောက်ရမလဲဆိုပြီး ညှိနှိုင်းနေရင်း—",
        "ဦးတင်မောင်နဲ့ ပထမဆုံးဖုန်းပြောခဲ့တာကို ပြန်သတိရမိတယ်။",
        "ကျွန်တော်က မေးခဲ့တယ်။ “တစ်နာရီပဲ ဟုတ်တယ်နော် ဦး။”"] },

  { t: "With You, He Gets One Hour", l: "ဆိုင်ရှေ့", k: "clock",
    rev: "clock 4 of 5",
    g: "⚠️ “အေး။ မင်းတစ်ယောက်နဲ့ဆို တစ်နာရီရတယ်။”",
    p: "OCCURRENCE 4 OF 5 OF THE CLOCK. The identical framing on a plain round white clock face "
      + "with no numerals, ⚠️ IN ORDINARY DAYLIGHT ON AN ORDINARY WALL — any wall, anywhere. The "
      + "red second hand is mid-sweep. ⚠️ Nothing about this image is frightening.",
    u: ["သူက ပြန်ဖြေခဲ့တယ်။",
        "“အေး။ မင်းတစ်ယောက်နဲ့ဆို တစ်နာရီရတယ်။”"] },

  { t: "He Was Not Talking About My Time", l: "ဆိုင်ရှေ့",
    k: "ne", w: ["နေလင်း"],
    g: "⚠️ အဲဒီတုန်းက ကျွန်တော်က အလုပ်လုပ်ရမယ့်အချိန်ကို ပြောနေတာလို့ ထင်ခဲ့တာ။ တကယ်တော့ သူ့သားအတွက် ဝယ်လို့ရမယ့်အချိန်ကို ပြောနေတာ။",
    p: "Close on Ne Lin in flat daylight, ⚠️ HIS FACE EMPTYING COMPLETELY as the sentence re-reads "
      + "itself in his head. He is looking slightly past the lens at nothing. Ordinary light, "
      + "ordinary street behind him, no stylisation at all.",
    u: ["အဲဒီတုန်းက ကျွန်တော်က အလုပ်လုပ်ရမယ့်အချိန်ကို ပြောနေတာလို့ ထင်ခဲ့တာ။",
        "တကယ်တော့ သူက ကျွန်တော့်အချိန်ကို ပြောနေတာ မဟုတ်ဘူး။",
        "သူ့သားအတွက် ဝယ်လို့ရမယ့်အချိန်ကို ပြောနေတာ။"] },

  { t: "A Whole Life for One Hour", c: [[1, "finalstinger"]], l: "ဆိုင်ရှေ့", k: "clock",
    rev: "clock 5 of 5",
    g: "⚠️ ကျွန်တော် တစ်သက်လုံး ဆက်ရှင်နိုင်တဲ့အချိန်အားလုံးကို ယူပြီး — သူ့သားနဲ့ တစ်နာရီလောက် အတူနေရဖို့။",
    p: "FINAL SHOT. OCCURRENCE 5 OF 5 OF THE CLOCK. The identical framing one last time, in flat "
      + "ordinary daylight — the same plain white face, no numerals, the red second hand caught "
      + "mid-sweep. ⚠️ IT IS SIMPLY A CLOCK ON A WALL, WORKING NORMALLY, AND THAT IS THE WHOLE "
      + "POINT. Hold on it.",
    u: ["ကျွန်တော် တစ်သက်လုံး ဆက်ရှင်နိုင်တဲ့အချိန်အားလုံးကို ယူပြီး—",
        "သူ့သားနဲ့ တစ်နာရီလောက် အတူနေရဖို့။"] },
];

/** Short, because the shot body is the part worth reading. */
const CONT =
  "Continuity: Ne Lin is physically unharmed in every shot — ordinary warm colour, clear skin, "
  + "both eyes bright. What is wrong with him is that he cannot move or breathe, and it shows only "
  + "in his face and his tendons. U Tin Maung is neat, soft-spoken and courteous throughout, and "
  + "his eyes are wet in most of the film. The son is grey, wet and cold, and his skin is whole "
  + "and smooth everywhere.";

const STYLE =
  "Contemporary Myanmar, present day. Photorealism, 16:9, 35mm grain, level camera, natural depth "
  + "of field. Clean neutral colour. Every place is an ordinary working room and every prop is an "
  + "ordinary object. One still instant. Surfaces are blank of writing except where a shot names "
  + "it.";

const TIME = {
  bulb: "TIME: INSIDE THE SEALED BACK ROOM. There are no windows and one bare hanging bulb is the "
    + "whole of the light, so the walls fall away into shadow and the air is still. The room is "
    + "cold.",
  day: "TIME: DAYTIME. Flat ordinary daylight, dry weather, bright outside.",
};

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = s.l === "နောက်ခန်း" ? TIME.bulb : TIME.day;
  s.cont = CONT;
  s.style = STYLE;
});

export { CONT, STYLE };
