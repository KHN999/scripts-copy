/**
 * လယ်ကွင်းအလယ်က မင်္ဂလာဆောင် — THE WEDDING IN THE MIDDLE OF THE FIELD
 *
 * Board for weddinginthefield.txt (revised backstory).
 *
 *   1. ⚠️ ONE FIXED VIEW OF THE FIELD, USED ELEVEN TIMES. The whole film turns
 *      on a wedding that is there and then is not, so the camera must stand in
 *      exactly the same place on the road every single time and only the
 *      contents may change. If the angle drifts the swap stops working and the
 *      film has no engine.
 *   2. THE GUESTS HAVE NO EYES, AND IT IS NOT A WOUND. For most of the film
 *      their heads are down and their faces are never seen. When they finally
 *      look up, ⚠️ SMOOTH UNBROKEN SKIN RUNS UNINTERRUPTED FROM BROW TO
 *      CHEEKBONE — nothing is missing, nothing is damaged, there is simply no
 *      opening there. That is the single most important thing on this board to
 *      get described positively rather than as an absence.
 *   3. ⚠️ THE WHITE FLOWER IS THE THREAD. It is in her dead hand, in the field
 *      after they go, on the ground where the old man was standing, and in the
 *      narrator's own hand at the end. Four occurrences in one fixed insert.
 *   4. NOBODY IS SHOWN DEAD IN THE WELL AND NO REMAINS ARE ITEMISED. Six people
 *      are down there. The film gives the open mouth of the well, the dark, a
 *      rope, and men looking down — and the funeral is one wrapped bundle.
 *   5. THE DEAD ARE GREY AND WET, NOT DAMAGED. Khin Thida and Htet Min are very
 *      pale with dark lips, and he is soaked and earth-stained from seven years
 *      in a well. ⚠️ THEIR SKIN IS WHOLE AND UNBROKEN EVERYWHERE. The script
 *      says he has marks on his face; the board renders those as dark
 *      discolouration under whole skin and nothing more.
 *   6. U MYINT AUNG LOOKS COMPLETELY ALIVE UNTIL HE IS GONE. He is an ordinary
 *      old man in every shot — no pallor, no stillness, no tell. The only
 *      evidence is the empty ground and a flower on it.
 */

export const CAST = [
  { name: "စောထက်", en: "Saw Htet — the narrator, about twenty-eight",
    prompt: "A Burmese man of about twenty-eight from Mandalay, neat and town-dressed compared to "
      + "the villagers: a clean short-sleeved shirt, jeans, trainers, a canvas bag. Short tidy "
      + "black hair, clean-shaven, an open unguarded face. ⚠️ HE IS PHYSICALLY UNHARMED IN EVERY "
      + "SHOT of this film — clear skin, both eyes bright, ordinary warm colour." },
  { name: "ညီလင်း", en: "Nyi Lin — his friend, about twenty-eight",
    prompt: "A Burmese man of about twenty-eight, thinner and more worn than Saw Htet, a village "
      + "paso and a plain shirt, rubber slippers, unkempt hair. ⚠️ HE HAS NOT SLEPT PROPERLY IN A "
      + "LONG TIME and it shows — shadowed eyes, a drawn face, a man carrying something. "
      + "⚠️ Ordinary and unharmed throughout." },
  { name: "မခင်သီတာ", en: "Ma Khin Thida — the bride, twenty-four, seven years dead",
    prompt: "A Burmese woman of twenty-four in full Myanmar wedding dress: ⚠️ A DEEP RED SILK "
      + "LONGYI AND A WHITE FITTED BLOUSE, with ⚠️ SMALL WHITE FLOWERS PINNED THROUGH HER "
      + "DARK HAIR, which is put up in a traditional knot. ⚠️ SHE IS DEAD AND IT SHOWS ONLY IN "
      + "COLOUR: her face and hands are a flat chalk-white with no warmth in them and her lips "
      + "are a dark plum-grey. ⚠️ HER SKIN IS WHOLE, SMOOTH AND UNBROKEN EVERYWHERE — nothing "
      + "damaged, nothing decayed, nothing wet. ⚠️ SHE IS NOT FRIGHTENING TO LOOK AT: her "
      + "expression is grief, deep and patient and enormous, and it never becomes a snarl or a "
      + "glare. Her wedding clothes are clean and uncreased.",
    pose: "The subject stands facing the camera square on, full figure in frame, hands folded in "
      + "front of her, a still and very sad expression" },
  { name: "ကိုထက်မင်း", en: "Ko Htet Min — the groom, twenty-eight, seven years in the well",
    prompt: "A Burmese man of twenty-eight, the same build as Nyi Lin and recognisably his "
      + "brother — the same brow and jaw. ⚠️ HE IS NOT IN WEDDING CLOTHES: an ordinary working "
      + "shirt and paso, ⚠️ SOAKED THROUGH AND DARK WITH WELL WATER AND STAINED WITH PALE CLAY, "
      + "clinging to him. His black hair is wet and flattened to his skull. ⚠️ HIS SKIN IS FLAT "
      + "GREY-WHITE and his lips are the same grey, and ⚠️ THERE IS A DARK DISCOLOURATION LIKE "
      + "OLD SHADOW UNDER THE SKIN across one cheekbone and one brow. ⚠️ THE SKIN ITSELF IS "
      + "WHOLE, SMOOTH AND COMPLETELY UNBROKEN — nothing is open, nothing is missing and nothing "
      + "is decayed. ⚠️ HIS EXPRESSION IS GENTLE AND HE SMILES.",
    pose: "The subject stands facing the camera square on, full figure in frame, arms at his "
      + "sides, a calm faintly apologetic expression" },
  { name: "ဦးမြင့်အောင်", en: "U Myint Aung — the old man by the road, about sixty",
    prompt: "A Burmese man of about sixty, stocky and weathered, close-cropped grey hair, ⚠️ A "
      + "SHORT PALE SCAR ABOVE HIS LEFT EYEBROW. He wears a dark brown shirt and a worn old "
      + "checked paso, plastic slippers. ⚠️ HE MUST LOOK COMPLETELY ALIVE AND COMPLETELY "
      + "ORDINARY IN EVERY SHOT — normal warm skin, clear eyes, ordinary shadow, ordinary "
      + "stance. ⚠️ THERE IS NO PALLOR, NOTHING STILL AND NOTHING WRONG WITH HIM AT ANY POINT. "
      + "A village elder leaning on a fence." },
  { name: "ဧည့်သည်တွေ", en: "The wedding guests — a group plate",
    prompt: "A GROUP REFERENCE. Eight or nine Burmese villagers of mixed ages seated on plain "
      + "wooden chairs, ⚠️ ALL OF THEM IN PLAIN WHITE SHIRTS OR WHITE BLOUSES AND DARK LONGYIS, "
      + "and ⚠️ EVERY ONE OF THEM WITH THEIR HEAD BOWED SO THE FACE IS NOT VISIBLE — chins down "
      + "on chests, hair falling forward. ⚠️ THEY SIT PERFECTLY STILL AND DO NOT TOUCH ANYTHING: "
      + "no food in their hands, no drinks, nobody turned towards anybody else. Ordinary bodies, "
      + "ordinary clothes, ordinary chairs. ⚠️ NOTHING ABOUT THEM IS DAMAGED OR DECAYED." },
];

export const PROPS = [
  { name: "ပန်းဖြူ", en: "The white flower",
    prompt: "A single fresh white jasmine-like flower with a short green stem, plain and "
      + "unremarkable, photographed lying on bare earth and filling the frame. ⚠️ IT IS ALWAYS "
      + "FRESH, CLEAN AND PERFECT no matter where it appears — never wilted, never browned, "
      + "never crushed. The one thing in this film that stays exactly the same." },
  { name: "မင်္ဂလာစားပွဲ", en: "The wedding table and the empty chair",
    prompt: "A long plain wooden table set out in the open for a village wedding: a white cloth "
      + "over it, simple dishes of food laid along its length untouched, and ⚠️ TWO CHAIRS SIDE "
      + "BY SIDE AT ITS HEAD FOR THE COUPLE. ⚠️ THE CHAIR ON THE LEFT IS EMPTY AND THE ONE ON "
      + "THE RIGHT IS EMPTY — this plate has nobody in it. Ordinary, modest, slightly shabby "
      + "village wedding furniture. No decoration beyond a little white cloth." },
];

export const LOCS = [
  { name: "လယ်ကွင်း", en: "The field — MASTER VIEW, used eleven times",
    prompt: "⚠️ THE MOST IMPORTANT PLATE ON THIS BOARD. A wide flat paddy field beside a rural "
      + "Myanmar road, the crop low and green, photographed ⚠️ FROM THE ROAD AT THE FIELD'S EDGE "
      + "AT CHEST HEIGHT, looking straight out across it. ⚠️ FIX THIS VIEWPOINT EXACTLY: the "
      + "same standing position, the same height, the same angle, the same framing every single "
      + "time. Landmarks that must stay put — a line of trees along the far edge, a single "
      + "leaning palm to one side, the low dark hills beyond, a dirt track running away to the "
      + "right. ⚠️ THE FIELD IS COMPLETELY EMPTY IN THIS PLATE. Overcast daylight." },
  { name: "ရေတွင်းဟောင်း", en: "The old well at the far end of the field",
    prompt: "An abandoned village well at the far corner of a field, overgrown with tall coarse "
      + "grass: a low ring of old brick and mortar barely a foot above the ground, ⚠️ WITH A "
      + "SQUARE OF ROTTED TIMBER BOARDS LAID OVER ITS MOUTH AND SOIL AND GRASS GROWN OVER THE "
      + "BOARDS so that it is almost invisible until you know. Overcast light. Empty of people "
      + "for this plate." },
  { name: "ညီလင်းအိမ်", en: "Nyi Lin's house",
    prompt: "An old timber village house raised on short stilts at the back of a village: a "
      + "bamboo fence and gate in front of it, ⚠️ ONE LARGE SPREADING TREE BESIDE THE HOUSE, a "
      + "short ladder stair to a plank door, shutters. The ground beneath the house is swept "
      + "bare earth with a low bench under it. Old, poor and clean. Empty of people for this "
      + "plate." },
  { name: "ရွာလမ်း", en: "The village lane",
    prompt: "An ordinary rural Myanmar village lane of packed earth with low timber houses along "
      + "it, fences, banana and betel palms, a few tethered cattle. Daylight, overcast. "
      + "Unremarkable and lived in. Empty of people for this plate." },
  { name: "တောလမ်း", en: "The forest track — memory only",
    prompt: "A narrow dirt track leaving a village and going into scrubby forest, ruts and long "
      + "grass down the middle, trees closing in on both sides. ⚠️ APPEARS ONLY IN WARM DAYLIT "
      + "MEMORY IMAGES SET SEVEN YEARS EARLIER. Empty of people for this plate." },
];

/**
 * One composition per shot, stated first and alone.
 *
 * `field` is the entire film. The wedding is there, then it is not, then it is
 * there again with more in it than the first time — and none of that reads
 * unless the camera has not moved an inch between them. Everything else on this
 * board is ordinary coverage.
 */
const CAM = {
  field: 'THE FIELD, THE FIXED VIEW. Camera at chest height standing on the road at the edge of the paddy, looking straight out across it, with the tree line on the far edge, the leaning palm to one side and the dirt track running away to the right — exactly as the master plate. ⚠️ THIS VIEWPOINT NEVER MOVES. Only what is standing in the field changes.',
  flower: 'THE WHITE FLOWER. Tight insert straight down onto a single white flower, filling the frame. ⚠️ Reproduce this framing identically every time it recurs.',
  guests: 'THE SEATED GUESTS. Camera at chest height along the row of wedding chairs, several of the seated figures in frame at once.',
  thida: 'CLOSE ON MA KHIN THIDA. Camera at her eye height, head-and-shoulders crop.',
  htet: 'CLOSE ON SAW HTET. Camera at his eye height, head-and-shoulders crop.',
  lin: 'CLOSE ON NYI LIN. Camera at his eye height, head-and-shoulders crop.',
  min: 'CLOSE ON KO HTET MIN. Camera at his eye height, head-and-shoulders crop.',
  elder: 'CLOSE ON U MYINT AUNG. Camera at his eye height, head-and-shoulders crop.',
  road: 'ON THE VILLAGE ROAD. Camera at chest height on the packed-earth lane.',
  house: 'AT NYI LIN’S HOUSE. Camera at chest height in front of the stilted house and its tree.',
  inside: 'INSIDE THE HOUSE. Camera at seated height in the shuttered main room.',
  well: 'AT THE OLD WELL. Camera at chest height in the long grass beside the low brick ring.',
  down: 'INTO THE WELL. Insert looking straight down into the open well mouth.',
  memory: 'A WARM DAYLIT MEMORY, SEVEN YEARS EARLIER. Camera at chest height, bright and green and alive.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
  wide: 'WIDE. Camera at chest height far enough back to hold the whole place.',
};

export const SCENES = [
  // ── I · A WEDDING WITH NO GROOM ───────────────────────────────────────────
  { t: "A Wedding in the Middle of the Field", l: "လယ်ကွင်း", k: "field",
    w: ["ဧည့်သည်တွေ", "မခင်သီတာ", "မင်္ဂလာစားပွဲ"],
    g: "ကျွန်တော် ရွာကို ရောက်တဲ့နေ့မှာ လယ်ကွင်းအလယ်မှာ မင်္ဂလာဆောင်နေကြတယ်။",
    p: "OCCURRENCE 1 OF 11 OF THE FIXED FIELD VIEW. Establish it precisely — the road edge, the "
      + "far tree line, the leaning palm, the dirt track to the right. ⚠️ OUT IN THE MIDDLE OF "
      + "THE PADDY, A SMALL WEDDING IS LAID OUT: a long white-clothed table, rows of plain "
      + "chairs, eight or nine people in white seated around it, and one woman in a red longyi "
      + "at the head. ⚠️ EVERY SEATED FIGURE HAS THEIR HEAD BOWED. Overcast daylight.",
    u: ["ကျွန်တော် ရွာကို ရောက်တဲ့နေ့မှာ—",
        "လယ်ကွင်းအလယ်မှာ မင်္ဂလာဆောင်နေကြတယ်။"] },

  { t: "There Was No Groom", c: [[2, "stinger"]], l: "လယ်ကွင်း", k: "insert", w: ["မင်္ဂလာစားပွဲ"],
    g: "⚠️ ပြဿနာက — သတို့သားမရှိဘူး။ သတို့သမီးတစ်ယောက်ပဲ ရှိတယ်။",
    p: "Insert on the head of the wedding table: ⚠️ TWO CHAIRS SIDE BY SIDE, ONE HOLDING A WOMAN "
      + "IN A RED LONGYI SEEN FROM THE WAIST DOWN, AND THE OTHER COMPLETELY EMPTY. The empty "
      + "chair is pushed in neatly and has a place set in front of it that nobody has touched. "
      + "Overcast daylight, green paddy beyond.",
    u: ["ပြဿနာက — သတို့သားမရှိဘူး။",
        "သတို့သမီးတစ်ယောက်ပဲ ရှိတယ်။"] },

  { t: "Red Longyi, White Flowers", l: "လယ်ကွင်း", k: "thida", w: ["မခင်သီတာ"],
    g: "သူက အနီရောင်လုံချည်နဲ့ အဖြူရောင်ရင်ဖုံးဝတ်ထားတယ်။ ခေါင်းပေါ်မှာ ပန်းဖြူတွေ။",
    p: "⚠️ SEEN FROM SOME DISTANCE AND NOT CLOSE. Ma Khin Thida seated at the head of the table "
      + "in the field, ⚠️ HER FACE TOO FAR OFF TO READ CLEARLY — only the deep red longyi, the "
      + "white blouse and the white flowers in her dark hair are legible. She is sitting "
      + "perfectly straight and perfectly still, facing the road. Overcast daylight.",
    u: ["သူက အနီရောင်လုံချည်နဲ့ အဖြူရောင်ရင်ဖုံးဝတ်ထားတယ်။",
        "ခေါင်းပေါ်မှာ ပန်းဖြူတွေ။"] },

  { t: "No Music, No Laughing", l: "လယ်ကွင်း", k: "guests", w: ["ဧည့်သည်တွေ"],
    g: "⚠️ ရွာသားတွေက ပတ်ပတ်လည်မှာ ထိုင်ပြီး စားနေကြတယ်။ သီချင်းသံလည်း မရှိဘူး။ ရယ်သံလည်း မရှိဘူး။",
    p: "Along the row of wedding chairs: ⚠️ EIGHT OR NINE PEOPLE IN WHITE SEATED IN A LINE, "
      + "EVERY HEAD BOWED, chins on chests, hair forward, hands flat on their knees. ⚠️ NOT ONE "
      + "OF THEM IS EATING, DRINKING, MOVING OR TURNED TOWARDS ANOTHER — the food on the table "
      + "in front of them is untouched. Overcast daylight, green paddy behind.",
    u: ["ရွာသားတွေက ပတ်ပတ်လည်မှာ ထိုင်ပြီး စားနေကြတယ်။",
        "သီချင်းသံလည်း မရှိဘူး။ ရယ်သံလည်း မရှိဘူး။",
        "အကုန်လုံး တိတ်နေကြတယ်။"] },

  { t: "Is There a Wedding Here", l: "ရွာလမ်း", k: "road", w: ["စောထက်"],
    g: "ကျွန်တော် မော်တော်ဆိုင်ကယ်ကို ရပ်ပြီး မေးလိုက်တယ်။ “ဒီမှာ မင်္ဂလာဆောင်လားဗျ”",
    p: "Saw Htet stopped astride a motorbike at the edge of the road with one foot down, half "
      + "turned back towards the field and calling out to someone off frame. Canvas bag strapped "
      + "behind him, dust on the bike. Overcast daylight, green paddy beyond.",
    u: ["ကျွန်တော် မော်တော်ဆိုင်ကယ်ကို ရပ်ပြီး မေးလိုက်တယ်။",
        "“ဒီမှာ မင်္ဂလာဆောင်လားဗျ”"] },

  { t: "Which Village Are You From", l: "ရွာလမ်း", k: "elder", w: ["ဦးမြင့်အောင်"],
    g: "လယ်ကွင်းနားက လူကြီးတစ်ယောက်က ကျွန်တော့်ကို ခေါင်းအစခြေအဆုံး ကြည့်တယ်။ “မင်း ဘယ်ရွာကလဲ”",
    p: "Close on U Myint Aung standing at the roadside, ⚠️ COMPLETELY ORDINARY AND PLAINLY ALIVE "
      + "— normal warm skin, clear eyes, an ordinary shadow on his face from the overcast light. "
      + "He is looking the younger man over without hurry, mildly suspicious. The short pale scar "
      + "above his left eyebrow is visible.",
    u: ["လယ်ကွင်းနားက လူကြီးတစ်ယောက်က ကျွန်တော့်ကို ခေါင်းအစခြေအဆုံး ကြည့်တယ်။",
        "ပြီးတော့ “မင်း ဘယ်ရွာကလဲ” လို့ ပြန်မေးတယ်။",
        "“မန်းလေးဘက်ကပါ။ ကိုညီလင်းဆီ လာတာ”"] },

  { t: "His Face Changed at the Name", l: "ရွာလမ်း", k: "elder", w: ["ဦးမြင့်အောင်"],
    g: "အဲဒီနာမည်ကြားတာနဲ့ လူကြီးရဲ့မျက်နှာ နည်းနည်းပြောင်းသွားတယ်။ “ညီလင်းရဲ့ သူငယ်ချင်းလား”",
    p: "Close on U Myint Aung, ⚠️ SOMETHING GOING ACROSS HIS FACE AND BEING PUT AWAY AGAIN — a "
      + "half-second of recognition before the mild expression comes back. He has stopped looking "
      + "at the young man and is looking just past him. Overcast daylight.",
    u: ["အဲဒီနာမည်ကြားတာနဲ့ လူကြီးရဲ့မျက်နှာ နည်းနည်းပြောင်းသွားတယ်။",
        "“ညီလင်းရဲ့ သူငယ်ချင်းလား” “ဟုတ်ပါတယ်”",
        "သူက ခဏတိတ်တယ်။ ပြီးတော့ “သူ့အိမ်က ဟိုဘက်” လို့ လက်ညှိုးထိုးပြတယ်။"] },

  { t: "Don't Ask If It Isn't Yours", c: [[3, "stinger"]], l: "ရွာလမ်း", k: "road",
    w: ["ဦးမြင့်အောင်", "စောထက်"],
    g: "⚠️ “မင်္ဂလာဆောင်က ဘယ်သူ့ဟာလဲ” လူကြီးက လယ်ကွင်းအလယ်ကို တစ်ချက်ကြည့်တယ်။ “မသက်ဆိုင်ရင် မမေးနဲ့သား”",
    p: "The two men on the road, the old man already turning away and walking off along the lane "
      + "while Saw Htet stays astride the bike watching him go. ⚠️ THE OLD MAN IS NOT LOOKING "
      + "BACK. The field with its wedding is visible beyond them, small.",
    u: ["ကျွန်တော် ထပ်မေးတယ်။ “မင်္ဂလာဆောင်က ဘယ်သူ့ဟာလဲ”",
        "လူကြီးက လယ်ကွင်းအလယ်ကို တစ်ချက်ကြည့်တယ်။ “မသက်ဆိုင်ရင် မမေးနဲ့သား”",
        "အဲဒီစကားပြောပြီး သူ ပြန်ထွက်သွားတယ်။"] },

  // ── II · NYI LIN ──────────────────────────────────────────────────────────
  { t: "Nyi Lin Called Me Here", l: "ရွာလမ်း", k: "htet", w: ["စောထက်"],
    g: "ကျွန်တော့်သူငယ်ချင်း ညီလင်းက ဒီရွာသား။ မြို့မှာ အလုပ်လုပ်ရင်း ကျွန်တော်နဲ့ သိခဲ့တာ။",
    p: "Close on Saw Htet riding slowly along the village lane, one hand on the bars, glancing "
      + "off to the side at the houses. An ordinary young man arriving somewhere he does not "
      + "know. Overcast daylight.",
    u: ["ကျွန်တော် ထူးဆန်းပေမယ့် ဆက်မမေးတော့ဘူး။ ရွာထဲကို ဝင်လာခဲ့တယ်။",
        "ကျွန်တော့်သူငယ်ချင်း ညီလင်းက ဒီရွာသား။",
        "မြို့မှာ အလုပ်လုပ်ရင်း ကျွန်တော်နဲ့ သိခဲ့တာ။"] },

  { t: "I Don't Want to Be Alone Anymore", l: "ရွာလမ်း", k: "insert",
    g: "လွန်ခဲ့တဲ့နှစ်လက သူ ရုတ်တရက် အလုပ်ထွက်ပြီး ရွာပြန်သွားတယ်။ “ငါ တစ်ယောက်တည်း မနေချင်တော့လို့”",
    p: "Insert on a phone held in one hand against a dim room, ⚠️ SHOWING A CALL IN PROGRESS "
      + "WITH NO NAME OR NUMBER LEGIBLE — just the call screen and the shape of it. A man's ear "
      + "and jaw at the edge of frame. ⚠️ No text of any kind is readable.",
    u: ["လွန်ခဲ့တဲ့နှစ်လက သူ ရုတ်တရက် အလုပ်ထွက်ပြီး ရွာပြန်သွားတယ်။ အကြောင်းရင်းလည်း မပြောဘူး။",
        "နောက်ဆုံးတစ်ပတ်လောက်ကမှ ကျွန်တော့်ကို ဖုန်းဆက်တယ်။ “တစ်ရက်လောက် လာခဲ့ပါဦးကွာ”",
        "“ဘာဖြစ်လို့လဲ” သူ တိတ်နေတယ်။ နောက်ဆုံး “ငါ တစ်ယောက်တည်း မနေချင်တော့လို့” လို့ပဲ ပြောတယ်။"] },

  { t: "He Was Not Glad, He Was Relieved", l: "ညီလင်းအိမ်", k: "lin", w: ["ညီလင်း"],
    g: "ကျွန်တော့်ကို မြင်တာနဲ့ ဝမ်းသာတဲ့ပုံ မပေါ်ဘူး။ စိတ်သက်သာသွားတဲ့ပုံပဲ ပေါ်တယ်။",
    p: "Close on Nyi Lin sitting on a low bench under his stilted house, looking up as someone "
      + "arrives. ⚠️ HE IS NOT SMILING — his shoulders have come down and his eyes have closed "
      + "for a moment. It is relief and not pleasure. Shadowed eyes, an unslept face. Overcast "
      + "light under the house.",
    u: ["ဒါကြောင့် ကျွန်တော် ရောက်လာတာ။ သူ့အိမ်က ရွာနောက်ဘက်နားမှာ။",
        "ကျွန်တော် ဝင်သွားတော့ ညီလင်းက အိမ်အောက်မှာ ထိုင်နေတယ်။",
        "ကျွန်တော့်ကို မြင်တာနဲ့ ဝမ်းသာတဲ့ပုံ မပေါ်ဘူး။ စိတ်သက်သာသွားတဲ့ပုံပဲ ပေါ်တယ်။"] },

  { t: "I Saw a Wedding on the Way", c: [[2, "stinger"]], l: "ညီလင်းအိမ်", k: "lin", w: ["ညီလင်း"],
    g: "⚠️ “လမ်းမှာ မင်္ဂလာဆောင်တွေ့ခဲ့တယ်” သူ့မျက်နှာ ချက်ချင်း ပျက်သွားတယ်။ “ဘယ်မှာ” “လယ်ကွင်းအလယ်မှာ”",
    p: "Close on Nyi Lin, ⚠️ THE FACE DROPPING OUT FROM UNDER HIM — the relief gone in an "
      + "instant, eyes coming up hard and mouth opening slightly. He has half risen off the "
      + "bench. Overcast light under the house.",
    u: ["“တကယ်လာတာပဲ” “မလာဘဲ ဘယ်နေမလဲ”",
        "“လမ်းမှာ မင်္ဂလာဆောင်တွေ့ခဲ့တယ်” သူ့မျက်နှာ ချက်ချင်း ပျက်သွားတယ်။",
        "“ဘယ်မှာ” “လယ်ကွင်းအလယ်မှာ”"] },

  { t: "Did She Look at You", l: "ညီလင်းအိမ်", k: "house", w: ["ညီလင်း", "စောထက်"],
    g: "⚠️ “သတို့သမီးကို မြင်လား” “မြင်တယ်” “မင်းကို ကြည့်လား” “ဟင့်အင်း။ အဝေးကပဲ မြင်တာ”",
    p: "The two men under the house, Nyi Lin now standing and ⚠️ HOLDING SAW HTET BY BOTH UPPER "
      + "ARMS, close in and searching his face, while Saw Htet leans back slightly from the "
      + "intensity of it, half amused. The great tree and the bamboo fence behind them.",
    u: ["သူ ကျွန်တော့်မျက်နှာကို စိုက်ကြည့်တယ်။ “သတို့သမီးကို မြင်လား” “မြင်တယ်”",
        "“မင်းကို ကြည့်လား” “ဟင့်အင်း။ အဝေးကပဲ မြင်တာ”",
        "သူ အသက်ရှူချလိုက်တယ်။ “ကောင်းတယ်”"] },

  { t: "Don't Go Out Tonight", c: [[2, "stinger"]], l: "ညီလင်းအိမ်", k: "lin", w: ["ညီလင်း"],
    g: "⚠️ ကျွန်တော် ရယ်လိုက်တယ်။ “ဘာကောင်းတာလဲ” သူ မရယ်ဘူး။ “ဒီည အပြင်မထွက်နဲ့”",
    p: "Close on Nyi Lin, ⚠️ COMPLETELY WITHOUT HUMOUR — looking straight at the lens, flat and "
      + "serious, no trace of a smile anywhere on his face. ⚠️ HE IS NOT FRIGHTENING, HE IS "
      + "FRIGHTENED. Overcast light.",
    u: ["ကျွန်တော် ရယ်လိုက်တယ်။ “ဘာကောင်းတာလဲ” သူ မရယ်ဘူး။",
        "“ဒီည အပြင်မထွက်နဲ့”",
        "ကျွန်တော် သူ့ကို စိုက်ကြည့်လိုက်တယ်။ “ဘာဖြစ်နေတာလဲကွာ” “ညရောက်မှ ပြောမယ်”"] },

  // ── III · BY DAYLIGHT THERE IS NOTHING ────────────────────────────────────
  { t: "By Daylight the Village Was Normal", l: "ရွာလမ်း", k: "road",
    g: "နေ့လယ်ကျတော့ ရွာက ပုံမှန်ပဲ။ ကလေးတွေပြေးတယ်။ ကျွဲနွားတွေပြန်လာတယ်။",
    p: "The village lane in flat midday light with ordinary life in it — two children running, a "
      + "woman carrying water, cattle being led along, someone in a doorway. ⚠️ ENTIRELY NORMAL, "
      + "BUSY AND UNREMARKABLE. Nothing is wrong with this picture.",
    u: ["နေ့လယ်ကျတော့ ရွာက ပုံမှန်ပဲ။",
        "ကလေးတွေပြေးတယ်။ ကျွဲနွားတွေပြန်လာတယ်။ အမျိုးသမီးတွေ ရေခပ်သွားကြတယ်။"] },

  { t: "Nothing Was There", c: [[3, "bigstinger"]], l: "လယ်ကွင်း", k: "field",
    g: "⚠️ လယ်ကွင်းအလယ်က မင်္ဂလာဆောင်ကို ပြန်ကြည့်မိတော့ — လူတွေ မရှိတော့ဘူး။ စားပွဲတွေ မရှိဘူး။ ဘာမှ မရှိဘူး။",
    p: "OCCURRENCE 2 OF 11 OF THE FIXED FIELD VIEW, ⚠️ AND THIS IS THE SHOT THE WHOLE FILM "
      + "DEPENDS ON. The identical viewpoint, the identical framing, the identical tree line and "
      + "leaning palm and dirt track — ⚠️ AND THE FIELD IS COMPLETELY EMPTY. No table, no chairs, "
      + "no people, no marks in the crop, nothing flattened. Just low green paddy in flat midday "
      + "light.",
    u: ["လယ်ကွင်းအလယ်က မင်္ဂလာဆောင်ကို ပြန်ကြည့်မိတော့—",
        "လူတွေ မရှိတော့ဘူး။ စားပွဲတွေ မရှိဘူး။ ကုလားထိုင်တွေ မရှိဘူး။",
        "သတို့သမီးလည်း မရှိဘူး။ ဘာမှ မရှိဘူး။"] },

  { t: "There Was a Crowd There Just Now", l: "ညီလင်းအိမ်", k: "house",
    w: ["ညီလင်း", "စောထက်"],
    g: "“ခုနကပဲ လူအပြည့်ရှိတာ” ညီလင်းက တံခါးဘောင်နားမှာ ရပ်ပြီး “နေ့ခင်းကျရင် မရှိဘူး” လို့ ပြောတယ်။",
    p: "Saw Htet standing out in front of the house pointing back down the lane towards the "
      + "field, turned to Nyi Lin who is leaning in the doorway at the top of the stair with his "
      + "arms folded. ⚠️ NYI LIN IS NOT LOOKING WHERE HE IS POINTING. Flat midday light.",
    u: ["ကျွန်တော် မျက်မှောင်ကျုံ့သွားတယ်။ “ခုနကပဲ လူအပြည့်ရှိတာ”",
        "ညီလင်းက တံခါးဘောင်နားမှာ ရပ်ပြီး “နေ့ခင်းကျရင် မရှိဘူး” လို့ ပြောတယ်။",
        "“ဘာကိုဆိုလိုတာလဲ” သူ မဖြေဘူး။"] },

  { t: "Even the Dogs Went Quiet", l: "ရွာလမ်း", k: "road",
    g: "ညနေရောက်တော့ ရွာက တိတ်လာတယ်။ ထူးထူးဆန်းဆန်း တိတ်တာ။ ခွေးတောင် မဟောင်ဘူး။",
    p: "The same village lane at dusk, ⚠️ NOW COMPLETELY EMPTY — no people, no cattle, no "
      + "children, doors shut along its length. ⚠️ A DOG IS LYING ON THE EARTH IN THE MIDDLE OF "
      + "IT WITH ITS HEAD FLAT ON ITS PAWS, awake, ears back, not barking. Last blue light.",
    u: ["ညနေရောက်တော့ ရွာက တိတ်လာတယ်။",
        "ထူးထူးဆန်းဆန်း တိတ်တာ။ ခွေးတောင် မဟောင်ဘူး။"] },

  { t: "He Shut Everything", l: "ညီလင်းအိမ်", k: "insert", w: ["ညီလင်း"],
    g: "ညီလင်းက တံခါးတွေပိတ်တယ်။ ပြတင်းပေါက်တွေပါ ပိတ်တယ်။ အိမ်ရှေ့မီးတောင် ပိတ်လိုက်တယ်။",
    p: "Insert on two hands pulling a wooden shutter closed from the inside and dropping a "
      + "timber bar across it into its brackets. ⚠️ THE LAST OF THE BLUE EVENING LIGHT NARROWS "
      + "TO A LINE AND GOES. Rough old wood, an old fitting, ordinary and domestic.",
    u: ["ညီလင်းက တံခါးတွေပိတ်တယ်။ ပြတင်းပေါက်တွေပါ ပိတ်တယ်။",
        "အိမ်ရှေ့မီးတောင် ပိတ်လိုက်တယ်။",
        "ကျွန်တော် စိတ်မရှည်တော့ဘူး။ “အခု ပြောတော့”"] },

  // ── IV · SEVEN YEARS AGO ──────────────────────────────────────────────────
  { t: "A Bride Died in This Village", l: "ညီလင်းအိမ်", k: "inside", w: ["ညီလင်း"],
    g: "⚠️ သူ အိမ်အလယ်မှာ ထိုင်လိုက်တယ်။ အကြာကြီး တိတ်နေတယ်။ “ဒီရွာမှာ သတို့သမီးတစ်ယောက် သေဖူးတယ်”",
    p: "Nyi Lin sitting cross-legged on the floor in the middle of the shuttered room, lit by "
      + "one small flame, ⚠️ LOOKING AT THE FLOOR AND NOT AT THE OTHER MAN. The shuttered walls "
      + "fall away into black around him. Still, close, airless.",
    u: ["သူ အိမ်အလယ်မှာ ထိုင်လိုက်တယ်။ အကြာကြီး တိတ်နေတယ်။",
        "ပြီးတော့ “ဒီရွာမှာ သတို့သမီးတစ်ယောက် သေဖူးတယ်” လို့ စပြောတယ်။"] },

  { t: "They Were Going to Marry", l: "လယ်ကွင်း", k: "memory",
    w: ["မခင်သီတာ", "ကိုထက်မင်း"],
    g: "လွန်ခဲ့တဲ့ ခုနစ်နှစ်က မခင်သီတာနဲ့ ကိုထက်မင်းတို့ မင်္ဂလာဆောင်ဖို့ စီစဉ်ထားတယ်။",
    p: "⚠️ A WARM DAYLIT MEMORY, SEVEN YEARS EARLIER. A young woman and a young man standing "
      + "together at the edge of the same field in bright green afternoon light, ⚠️ BOTH OF THEM "
      + "ALIVE AND WELL AND ORDINARY — warm healthy skin, clear eyes, everyday clothes, laughing "
      + "about something. ⚠️ NOTHING IS WRONG WITH EITHER OF THEM in this image.",
    u: ["လွန်ခဲ့တဲ့ ခုနစ်နှစ်က—",
        "မခင်သီတာနဲ့ ကိုထက်မင်းတို့ မင်္ဂလာဆောင်ဖို့ စီစဉ်ထားတယ်။"] },

  { t: "On the Morning He Vanished", l: "လယ်ကွင်း", k: "memory", w: ["မင်္ဂလာစားပွဲ"],
    g: "⚠️ မင်္ဂလာဆောင်မယ့်မနက်မှာတော့ ကိုထက်မင်း ရုတ်တရက် ပျောက်သွားတယ်။ အပြင်မပြေးဘူး။ တကယ်ကို ပျောက်သွားတာ။",
    p: "⚠️ WARM DAYLIT MEMORY. The wedding table and chairs set out and ready in the bright green "
      + "field in morning sunlight, white cloth on, dishes laid, everything prepared — ⚠️ AND NOT "
      + "ONE PERSON ANYWHERE IN THE FRAME. A wedding with nobody at it yet. Bright, warm, and "
      + "completely empty.",
    u: ["မင်္ဂလာဆောင်မယ့်မနက်မှာတော့ ကိုထက်မင်း ရုတ်တရက် ပျောက်သွားတယ်။",
        "အပြင်မပြေးဘူး။ တခြားမိန်းမနောက်လည်း မလိုက်ဘူး။",
        "တကယ်ကို ပျောက်သွားတာ။"] },

  { t: "She Believed He Would Come", l: "လယ်ကွင်း", k: "memory", w: ["မခင်သီတာ"],
    g: "မခင်သီတာကတော့ သူ ပြန်လာမယ်လို့ပဲ ယုံနေတယ်။ “သူ လာမယ်” “သူ ကျွန်မကို မထားခဲ့ပါဘူး”",
    p: "⚠️ WARM DAYLIT MEMORY, AND SHE IS ALIVE HERE. Ma Khin Thida seated alone at the head of "
      + "the wedding table in bright afternoon sun in her red longyi and white blouse, ⚠️ WITH "
      + "WARM LIVING SKIN AND ORDINARY COLOUR IN HER FACE — not the pale version. She is sitting "
      + "upright and watching the road, patient and certain.",
    u: ["မခင်သီတာကတော့ သူ ပြန်လာမယ်လို့ပဲ ယုံနေတယ်။",
        "“သူ လာမယ်” “သူ ကျွန်မကို မထားခဲ့ပါဘူး” လို့ပဲ ပြောနေတယ်။"] },

  { t: "She Would Not Come Home", l: "လယ်ကွင်း", k: "memory",
    w: ["မခင်သီတာ", "မင်္ဂလာစားပွဲ"],
    g: "ရွာသားတွေက “အိမ်ပြန်ဦး” လို့ ဘယ်လောက်ပြောပြော သူ မပြန်ဘူး။ မင်္ဂလာဝတ်စုံလည်း မချွတ်ဘူး။",
    p: "⚠️ WARM DAYLIT MEMORY. Two or three villagers standing a little way off from the wedding "
      + "table in late afternoon light with their hands out, plainly urging the seated woman to "
      + "get up and come — and ⚠️ SHE HAS NOT MOVED AND IS NOT LOOKING AT THEM. She is still "
      + "facing the road. Long shadows across the green.",
    u: ["ရွာသားတွေက “အိမ်ပြန်ဦး” လို့ ဘယ်လောက်ပြောပြော သူ မပြန်ဘူး။",
        "မင်္ဂလာဝတ်စုံလည်း မချွတ်ဘူး။",
        "လယ်ကွင်းအလယ်က မင်္ဂလာစားပွဲနားမှာပဲ ထိုင်စောင့်နေတယ်။"] },

  { t: "The First Night She Would Not Eat", l: "လယ်ကွင်း", k: "insert",
    g: "ပထမည — ရွာသားတွေ သူ့အတွက် ထမင်းလာပို့တယ်။ သူ မစားဘူး။",
    p: "⚠️ A MEMORY, AT NIGHT. Insert on a covered enamel food carrier and a plate set down on "
      + "the ground beside a chair leg in the dark, ⚠️ THE LID STILL ON AND THE PLATE STILL "
      + "CLEAN. A woman's bare feet are visible in the chair above, unmoving. Faint lamplight "
      + "from off frame.",
    u: ["ပထမည — ရွာသားတွေ သူ့အတွက် ထမင်းလာပို့တယ်။ သူ မစားဘူး။"] },

  { t: "The Second Night It Rained", l: "လယ်ကွင်း", k: "wide", w: ["မခင်သီတာ"],
    g: "ဒုတိယည — မိုးရွာတယ်။ လူတွေ သူ့ကို အိမ်ပြန်ခေါ်တယ်။ သူ မလိုက်ဘူး။ အအေးထဲမှာပဲ ထိုင်နေတယ်။",
    p: "⚠️ A MEMORY, AT NIGHT IN RAIN. Wide on the dark field: ⚠️ ONE SEATED FIGURE BESIDE THE "
      + "WEDDING TABLE IN HEAVY RAIN, her red longyi soaked dark and her hair flattened, sitting "
      + "upright and facing the road. Two villagers are turning away back towards the village "
      + "with a lamp. ⚠️ She is not sheltering and not moving.",
    u: ["ဒုတိယည — မိုးရွာတယ်။ လူတွေ သူ့ကို အိမ်ပြန်ခေါ်တယ်။",
        "သူ မလိုက်ဘူး။",
        "အအေးထဲမှာပဲ မင်္ဂလာစားပွဲနား ထိုင်နေတယ်။"] },

  { t: "By the Third Morning She Had a Fever", l: "လယ်ကွင်း", k: "thida",
    w: ["မခင်သီတာ"],
    g: "⚠️ တတိယနေ့မနက်မှာတော့ မခင်သီတာ အဖျားတက်နေပြီ။ အားလည်း မရှိတော့ဘူး။ ဒါပေမယ့် သူ လယ်ကွင်းကနေ မထွက်သေးဘူး။",
    p: "⚠️ A MEMORY, GREY MORNING. Close on Ma Khin Thida seated by the table, ⚠️ STILL ALIVE BUT "
      + "VERY ILL — her face flushed and damp with fever, her eyes glassy and half focused, her "
      + "hair stuck to her forehead, her wedding blouse crumpled and stained. ⚠️ HER SKIN IS "
      + "WHOLE AND UNMARKED. She is still facing the road.",
    u: ["တတိယနေ့မနက်မှာတော့ မခင်သီတာ အဖျားတက်နေပြီ။ အားလည်း မရှိတော့ဘူး။",
        "ဒါပေမယ့် သူ လယ်ကွင်းကနေ မထွက်သေးဘူး။",
        "“သူ မလာသေးဘူး” လို့ပဲ တိုးတိုးပြောနေတယ်။"] },

  { t: "She Watched the Road All Night", l: "လယ်ကွင်း", k: "wide", w: ["မခင်သီတာ"],
    g: "⚠️ အဲဒီည မိုး ထပ်ရွာတယ်။ မခင်သီတာက မင်္ဂလာစားပွဲအောက်မှာ မိုးခိုရင်း လမ်းဘက်ကို တစ်ညလုံး ကြည့်နေတယ်။",
    p: "⚠️ A MEMORY, AT NIGHT IN RAIN. Wide on the field: ⚠️ SHE IS SHELTERING UNDERNEATH THE "
      + "WEDDING TABLE, curled up on the wet ground beneath the hanging white cloth with her arms "
      + "round her knees, ⚠️ AND HER FACE IS TURNED OUT TOWARDS THE ROAD. Rain coming off the "
      + "edge of the tablecloth in a curtain in front of her.",
    u: ["အဲဒီည မိုး ထပ်ရွာတယ်။",
        "မခင်သီတာက မင်္ဂလာစားပွဲအောက်မှာ မိုးခိုရင်း—",
        "ကိုထက်မင်း လာမယ့်လမ်းဘက်ကို တစ်ညလုံး ကြည့်နေတယ်။"] },

  { t: "They Found Her in the Morning", l: "လယ်ကွင်း", k: "wide",
    g: "⚠️ မနက်ရောက်တော့ မခင်သီတာက မင်္ဂလာစားပွဲဘေးမှာ လဲကျနေတယ်။ အသက်မရှိတော့ဘူး။",
    p: "⚠️ A MEMORY, GREY MORNING AFTER RAIN, AND SHOWN FROM A DISTANCE. Wide on the field: the "
      + "wedding table standing in wet green paddy and ⚠️ ONE SMALL RED SHAPE LYING STILL ON THE "
      + "GROUND BESIDE IT, too far off to resolve into a person. Three villagers are hurrying "
      + "out across the field towards it. ⚠️ No detail reaches the camera.",
    u: ["မနက်ရောက်တော့ ရွာသားတွေ သူ့ကို ခေါ်ဖို့လာကြတယ်။",
        "မခင်သီတာက မင်္ဂလာစားပွဲဘေးမှာ လဲကျနေတယ်။",
        "အသက်မရှိတော့ဘူး။"] },

  { t: "A White Flower in Her Hand", c: [[2, "stinger"]], l: "လယ်ကွင်း", k: "flower",
    rev: "flower 1 of 4",
    g: "⚠️ ပန်းဖြူ ပထမအကြိမ် — လက်တစ်ဖက်မှာတော့ ကိုထက်မင်းအတွက် ပြင်ထားတဲ့ ပန်းဖြူတစ်ပွင့်ကို တင်းတင်းဆုပ်ထားတယ်။",
    p: "OCCURRENCE 1 OF 4 OF THE WHITE FLOWER. Establish it precisely. Tight insert straight down "
      + "on a woman's hand lying open on wet green paddy, ⚠️ A SINGLE FRESH WHITE FLOWER HELD IN "
      + "THE PALM with the fingers closed loosely over its stem. ⚠️ THE FLOWER IS PERFECT AND "
      + "UNCRUSHED. ⚠️ THE HAND IS WHOLE AND UNMARKED. Grey morning light, rain still on "
      + "everything.",
    u: ["လက်တစ်ဖက်မှာတော့—",
        "ကိုထက်မင်းအတွက် ပြင်ထားတဲ့ ပန်းဖြူတစ်ပွင့်ကို တင်းတင်းဆုပ်ထားတယ်။"] },

  { t: "From That Day the Field Changed", c: [[2, "stinger"]], l: "လယ်ကွင်း", k: "field",
    w: ["ဧည့်သည်တွေ", "မခင်သီတာ", "မင်္ဂလာစားပွဲ"],
    g: "⚠️ အဲဒီနေ့ကစပြီး လယ်ကွင်းအလယ်မှာ ထူးဆန်းတာတွေ စဖြစ်လာတယ်။ တချို့ညတွေမှာ အဝေးကနေ မင်္ဂလာစားပွဲတွေ ပေါ်လာတယ်။",
    p: "OCCURRENCE 3 OF 11 OF THE FIXED FIELD VIEW, ⚠️ AT NIGHT THIS TIME. The identical "
      + "viewpoint and framing, the same tree line and leaning palm in silhouette — and out in "
      + "the middle of the dark paddy ⚠️ THE WEDDING IS THERE AGAIN, faintly lit by nothing in "
      + "particular: the table, the rows of chairs, the seated figures in white with their heads "
      + "down, one red longyi at the head.",
    u: ["အဲဒီနေ့ကစပြီး လယ်ကွင်းအလယ်မှာ ထူးဆန်းတာတွေ စဖြစ်လာတယ်။",
        "တချို့ညတွေမှာ အဝေးကနေ မင်္ဂလာစားပွဲတွေ ပေါ်လာတယ်။",
        "လူတွေ ထိုင်နေကြတယ်။ သီချင်းမရှိဘူး။ ရယ်သံမရှိဘူး။"] },

  { t: "The Groom's Chair Is Always Empty", c: [[2, "stinger"]], l: "လယ်ကွင်း", k: "insert",
    w: ["မင်္ဂလာစားပွဲ"],
    g: "⚠️ အလယ်မှာတော့ အနီရောင်လုံချည်နဲ့ မခင်သီတာ ထိုင်နေတယ်။ သတို့သားထိုင်ရမယ့် ခုံကတော့ အမြဲတမ်း လွတ်နေတယ်။",
    p: "The same insert on the head of the table as before, ⚠️ AT NIGHT AND IDENTICAL IN EVERY "
      + "OTHER RESPECT: one chair holding a woman in a red longyi from the waist down, the chair "
      + "beside it empty with an untouched place set in front of it. ⚠️ THE EMPTY CHAIR IS "
      + "EXACTLY AS IT WAS IN THE DAYLIGHT SHOT — same position, same setting, same nothing.",
    u: ["အလယ်မှာတော့ အနီရောင်လုံချည်နဲ့ မခင်သီတာ ထိုင်နေတယ်။",
        "သတို့သားထိုင်ရမယ့် ခုံကတော့ အမြဲတမ်း လွတ်နေတယ်။"] },

  { t: "She Never Believed He Left Her", l: "ညီလင်းအိမ်", k: "lin", w: ["ညီလင်း"],
    g: "⚠️ သူ့ဝိညာဉ်က ကိုထက်မင်း သူ့ကို ထားခဲ့တယ်လို့ မယုံနိုင်သေးဘူး။ သူ ဘာဖြစ်သွားတယ်ဆိုတာလည်း မသိဘူး။",
    p: "Close on Nyi Lin in the dark room by one small flame, ⚠️ HIS FACE HALF LIT AND HALF GONE "
      + "INTO SHADOW, looking at the floor as he explains. He is not performing fear; he is "
      + "reciting something he has gone over many times alone.",
    u: ["သူ့ဝိညာဉ်က ကိုထက်မင်း သူ့ကို ထားခဲ့တယ်လို့ မယုံနိုင်သေးဘူး။",
        "သူ ဘာဖြစ်သွားတယ်ဆိုတာလည်း မသိဘူး။",
        "ဒါကြောင့် သေဆုံးသွားတဲ့နေ့ကစပြီး အဲဒီလယ်ကွင်းမှာ မပြီးဆုံးခဲ့တဲ့ မင်္ဂလာဆောင်ကို ထပ်ခါထပ်ခါ ပြန်ဖန်တီးနေတာ။"] },

  { t: "Waiting for Her Groom to Come Back", l: "လယ်ကွင်း", k: "field",
    w: ["မခင်သီတာ", "မင်္ဂလာစားပွဲ"],
    g: "⚠️ သူ့သတို့သား ပြန်လာမယ့်အချိန်ကို စောင့်နေခဲ့တာ။",
    p: "OCCURRENCE 4 OF 11 OF THE FIXED FIELD VIEW, at night. The identical framing, ⚠️ AND THE "
      + "WEDDING IS STILL OUT THERE, but the chairs are emptier than before — only the one red "
      + "figure at the head of the table remains, facing the road. ⚠️ SHE IS LOOKING STRAIGHT "
      + "BACK ALONG THE LINE OF THE CAMERA, out towards the road she is waiting on.",
    u: ["သူ့သတို့သား ပြန်လာမယ့်အချိန်ကို စောင့်နေခဲ့တာ။",
        "ကျွန်တော် မျက်နှာပျက်သွားတယ်။",
        "“ဒါဆို နေ့လယ်က ကျွန်တော်မြင်ခဲ့တာ…”"] },

  // ── V · THEY CAME DOWN THE LANE ───────────────────────────────────────────
  { t: "One Strike on a Gong", l: "ညီလင်းအိမ်", k: "insert",
    g: "⚠️ အပြင်ဘက်ကနေ အိုးခွက်တီးသံတစ်ချက် ကြားလာတယ်။ တိန်…",
    p: "Insert on the shuttered window from inside the dark room, ⚠️ THE THIN LINE OF NIGHT "
      + "BETWEEN THE BOARDS AND NOTHING ELSE — no shape, no movement, no shadow. The grain of "
      + "the old wood and the iron bar across it. Almost black.",
    u: ["ညီလင်း ပြန်မဖြေသေးဘူး။",
        "အပြင်ဘက်ကနေ အိုးခွက်တီးသံတစ်ချက် ကြားလာတယ်။ တိန်…",
        "နှစ်ယောက်လုံး ငြိမ်သွားကြတယ်။ နောက်တစ်ချက်။ တိန်…"] },

  { t: "Just Listen", l: "ညီလင်းအိမ်", k: "inside", w: ["ညီလင်း", "စောထက်"],
    g: "ညီလင်း မီးကို လုံးဝပိတ်လိုက်တယ်။ “မင်း နားထောင်ပဲ နားထောင်” “ဘာအသံကြားကြား မထွက်နဲ့”",
    p: "The two men in the pitch-dark room, ⚠️ LIT ONLY BY THE LAST GLOW OF A JUST-EXTINGUISHED "
      + "WICK so that they are barely more than shapes — Nyi Lin's hand still over the lamp, "
      + "both of them turned towards the shuttered wall. Almost nothing is legible.",
    u: ["ညီလင်း မီးကို လုံးဝပိတ်လိုက်တယ်။ “မင်း နားထောင်ပဲ နားထောင်”",
        "“ဘာလဲ” “ဘာအသံကြားကြား မထွက်နဲ့”",
        "ကျွန်တော် ဘာမှမပြောတော့ဘူး။"] },

  { t: "Many Feet on the Lane", l: "ရွာလမ်း", k: "road", w: ["ဧည့်သည်တွေ"],
    g: "⚠️ ရွာလမ်းဘက်ကနေ လူတွေ လမ်းလျှောက်သံ ကြားလာတယ်။ တစ်ယောက်နှစ်ယောက် မဟုတ်ဘူး။ အများကြီး။",
    p: "The village lane at night, ⚠️ A LINE OF FIGURES IN WHITE WALKING ALONG IT AWAY FROM "
      + "CAMERA, strung out one behind another as far as the dark allows — eight or nine of "
      + "them, ⚠️ EVERY HEAD BOWED, all moving at the same unhurried pace, all barefoot on the "
      + "packed earth. ⚠️ Nobody is running and nobody is reaching.",
    u: ["ခဏကြာတော့ ရွာလမ်းဘက်ကနေ လူတွေ လမ်းလျှောက်သံ ကြားလာတယ်။",
        "တစ်ယောက်နှစ်ယောက် မဟုတ်ဘူး။ အများကြီး။",
        "သီချင်းမရှိဘူး။ ရယ်သံမရှိဘူး။ ခြေသံပဲ။"] },

  { t: "Maung", c: [[2, "bigstinger"]], l: "ညီလင်းအိမ်", k: "htet", w: ["စောထက်"],
    g: "⚠️ ပြီးတော့ မိန်းမအသံတစ်ခု — “မောင်…” အရမ်းတိုးတယ်။ လယ်ကွင်းဘက်ကနေ လာတာ။",
    p: "Close on Saw Htet's face in the dark room, ⚠️ LIT BY THE SINGLE THIN LINE OF LIGHT FROM "
      + "THE SHUTTER falling across his eyes, everything else black. ⚠️ HIS EYES ARE WIDE OPEN "
      + "AND FIXED ON THE SHUTTER and he has stopped breathing.",
    u: ["ပြီးတော့ မိန်းမအသံတစ်ခု။ “မောင်…”",
        "အရမ်းတိုးတယ်။ လယ်ကွင်းဘက်ကနေ လာတာ။",
        "ကျွန်တော် ညီလင်းကို ကြည့်တယ်။ သူ့မျက်နှာက ဖြူနေပြီ။"] },

  { t: "The Gate Moved", l: "ညီလင်းအိမ်", k: "insert",
    g: "⚠️ အဲဒီအချိန် အိမ်ရှေ့က ဝါးခြံတံခါး လှုပ်သံကြားလာတယ်။ ကျွီ…",
    p: "Insert on a bamboo gate in a bamboo fence at night from inside the compound, ⚠️ CAUGHT "
      + "MID-SWING WITH THE LATCH LIFTED AND THE GATE STANDING A HAND'S WIDTH OPEN. ⚠️ NOBODY IS "
      + "VISIBLE AT IT AND NOTHING IS BEYOND IT BUT DARK. Faint starlight on the canes.",
    u: ["အသံက ပိုနီးလာတယ်။ “မောင်…”",
        "အဲဒီအချိန် အိမ်ရှေ့က ဝါးခြံတံခါး လှုပ်သံကြားလာတယ်။ ကျွီ…"] },

  { t: "If She Looks Back, That's It", c: [[3, "bigstinger"]], l: "ညီလင်းအိမ်",
    k: "inside", w: ["ညီလင်း", "စောထက်"],
    g: "⚠️ ညီလင်းက ကျွန်တော့်လက်ကို ဖမ်းထားတယ်။ “မကြည့်နဲ့” “ဘာလို့” “သူ ကြည့်ပြန်ရင် ပြီးပြီ”",
    p: "In the black room: Saw Htet half risen towards the shutter and ⚠️ NYI LIN'S HAND CLAMPED "
      + "HARD AROUND HIS WRIST DRAGGING IT BACK DOWN, both of them frozen in that position. The "
      + "thin line of light from the shutter crosses them both. ⚠️ Neither is looking at the "
      + "other.",
    u: ["ကျွန်တော် ပြတင်းပေါက်ကနေ ကြည့်မလို့လုပ်တယ်။",
        "ညီလင်းက ကျွန်တော့်လက်ကို ဖမ်းထားတယ်။ “မကြည့်နဲ့” “ဘာလို့”",
        "သူ တိုးတိုးပြောတယ်။ “သူ ကြည့်ပြန်ရင် ပြီးပြီ”"] },

  { t: "She Knew His Name", c: [[3, "bigstinger"]], l: "ညီလင်းအိမ်", k: "lin",
    w: ["ညီလင်း"],
    g: "⚠️ အိမ်ရှေ့ကနေ မိန်းမတစ်ယောက် ပြောသံကြားတယ် — “ညီလင်း…” သူ့မျက်နှာက လုံးဝ ပျက်သွားတယ်။",
    p: "Close on Nyi Lin in the dark, ⚠️ HIS FACE COMING APART COMPLETELY — eyes screwed shut, "
      + "mouth open, head tipped back against the wall behind him. The thin shutter light across "
      + "one cheek and his throat. ⚠️ This is the worst moment of his life arriving.",
    u: ["အပြင်မှာ ခြေသံ ရပ်သွားတယ်။ တိတ်သွားတယ်။",
        "ပြီးတော့ အိမ်ရှေ့ကနေ မိန်းမတစ်ယောက် ပြောသံကြားတယ်။ “ညီလင်း…”",
        "ကျွန်တော် သူ့ကို လှည့်ကြည့်တယ်။ သူ့မျက်နှာက လုံးဝ ပျက်သွားတယ်။"] },

  { t: "The Groom Was My Brother", c: [[3, "bigstinger"]], l: "ညီလင်းအိမ်",
    k: "lin", w: ["ညီလင်း"],
    g: "⚠️ “မင်း သူ့ကို သိတာလား” ညီလင်းက မျက်လုံးမဖွင့်ဘဲ — “သူ့သတို့သားက… ငါ့အစ်ကို”",
    p: "Close on Nyi Lin, ⚠️ EYES STILL SHUT AND TEARS COMING OUT FROM UNDER THE CLOSED LIDS, "
      + "his mouth barely moving on the words. The thin line of shutter light. ⚠️ He does not "
      + "open his eyes at any point in this shot.",
    u: ["မိန်းမအသံက ထပ်ခေါ်တယ်။ “ညီလင်း… ငါ့ကို မလာကြည့်တော့ဘူးလား”",
        "ကျွန်တော် အခုမှ နားလည်သွားတယ်။ ဒီသရဲက ညီလင်းကို သိတယ်။",
        "“မင်း သူ့ကို သိတာလား” “သူ့သတို့သားက… ငါ့အစ်ကို”"] },

  // ── VI · WHAT HAPPENED TO HTET MIN ────────────────────────────────────────
  { t: "I Can't Do This Wedding", l: "တောလမ်း", k: "memory",
    w: ["ကိုထက်မင်း", "ညီလင်း"],
    g: "⚠️ မင်္ဂလာဆောင်မယ့်မနက်မှာ ကိုထက်မင်းက ညီလင်းကို လူမသိအောင် ခေါ်သွားတယ်။ “ငါ ဒီမင်္ဂလာဆောင် မလုပ်နိုင်ဘူး”",
    p: "⚠️ A WARM DAYLIT MEMORY, SEVEN YEARS EARLIER. Two young brothers standing close together "
      + "just inside the scrub at the start of the forest track in bright green morning light, "
      + "⚠️ BOTH ALIVE, WELL AND ORDINARY. The older one is talking fast and low with a hand on "
      + "the younger one's shoulder; the younger is listening with his head down.",
    u: ["လွန်ခဲ့တဲ့ ခုနစ်နှစ်က မခင်သီတာနဲ့ လက်ထပ်မယ့်သူက ညီလင်းရဲ့ အစ်ကို ကိုထက်မင်း။",
        "မင်္ဂလာဆောင်မယ့်မနက်မှာ ကိုထက်မင်းက ညီလင်းကို လူမသိအောင် ခေါ်သွားတယ်။",
        "“ငါ ဒီမင်္ဂလာဆောင် မလုပ်နိုင်ဘူး” လို့ ပြောတယ်။"] },

  { t: "It Was Not That He Stopped Loving Her", l: "တောလမ်း", k: "memory",
    w: ["ကိုထက်မင်း"],
    g: "မခင်သီတာကို မချစ်တော့လို့ မဟုတ်ဘူး။ သူ အကြွေးတင်နေတယ်။ ရွာအပြင်က လူတချို့ဆီ ပိုက်ဆံများကြီး ယူထားတယ်။",
    p: "⚠️ WARM DAYLIT MEMORY. Close on Ko Htet Min, ⚠️ ALIVE, WARM-SKINNED AND HEALTHY — the "
      + "living version of him, in an ordinary working shirt, sunlight on his face. ⚠️ HE IS "
      + "FRIGHTENED AND ASHAMED, not cold: eyes moving, jaw tight, a man who has run out of "
      + "options. Green forest behind him.",
    u: ["မခင်သီတာကို မချစ်တော့လို့ မဟုတ်ဘူး။",
        "သူ အကြွေးတင်နေတယ်။ ရွာအပြင်က လူတချို့ဆီ ပိုက်ဆံများကြီး ယူထားတယ်။",
        "လက်ထပ်ပြီးရင် အိမ်နဲ့ လယ်တွေပါ သိမ်းခံရနိုင်တယ်။"] },

  { t: "I'll Hide Two Days", l: "တောလမ်း", k: "memory", w: ["ကိုထက်မင်း", "ညီလင်း"],
    g: "တစ်ရက်နှစ်ရက် ပုန်းမယ်။ ပြဿနာရှင်းပြီးမှ ပြန်လာမယ်လို့ ပြောတယ်။ ညီလင်းက အစ်ကိုကို တောလမ်းဘက် ပို့ပေးလိုက်တယ်။",
    p: "⚠️ WARM DAYLIT MEMORY. Wide down the forest track in bright morning light: ⚠️ THE OLDER "
      + "BROTHER WALKING AWAY FROM CAMERA INTO THE TREES, seen from behind, a small bundle under "
      + "one arm, ⚠️ AND THE YOUNGER ONE STANDING STILL AT THE NEAR END WATCHING HIM GO. Green, "
      + "sunlit and entirely ordinary.",
    u: ["ဒါကြောင့် တစ်ရက်နှစ်ရက် ပုန်းမယ်။ ပြဿနာရှင်းပြီးမှ ပြန်လာမယ်လို့ ပြောတယ်။",
        "ညီလင်းက အစ်ကိုကို တောလမ်းဘက် ပို့ပေးလိုက်တယ်။",
        "ဒါပေမယ့် အစ်ကို ပြန်မလာဘူး။"] },

  { t: "Two Years Later He Found Out", l: "ညီလင်းအိမ်", k: "lin", w: ["ညီလင်း"],
    g: "⚠️ ညီလင်းက လက်တွေ တုန်လာတယ်။ “နှစ်နှစ်ကြာပြီးမှ သိရတာ” ကိုထက်မင်း မပျောက်ဘူး။",
    p: "Close on Nyi Lin's hands rather than his face, ⚠️ BOTH OF THEM SHAKING HARD where they "
      + "rest on his knees in the dark, the fingers not quite able to stay still. A little of his "
      + "chin and throat above them in the thin shutter light.",
    u: ["“ဘယ်သွားသွား မတွေ့တော့ဘူး” ညီလင်း တိုးတိုးပြောတယ်။ “ငါလည်း ပျောက်သွားတယ်လို့ပဲ ထင်တာ”",
        "ကျွန်တော် စိုက်ကြည့်တယ်။ “တကယ်တော့?”",
        "ညီလင်းက လက်တွေ တုန်လာတယ်။ “နှစ်နှစ်ကြာပြီးမှ သိရတာ”"] },

  { t: "They Caught Him on the Track", l: "တောလမ်း", k: "memory",
    g: "⚠️ သူ ထွက်ပြေးတဲ့ညမှာ အကြွေးရှင်တွေ လိုက်မိတယ်။ တောလမ်းနားမှာ ရန်ဖြစ်ကြတယ်။ ကိုထက်မင်း သေသွားတယ်။",
    p: "⚠️ NOTHING IS SHOWN OF WHAT HAPPENED. A memory: the forest track at night, empty, seen "
      + "along its length with the trees black on both sides. ⚠️ THERE IS NOBODY IN THE FRAME "
      + "AND NOTHING ON THE GROUND — just ruts, long grass and dark. Faint moonless starlight.",
    u: ["သူ ထွက်ပြေးတဲ့ညမှာ အကြွေးရှင်တွေ လိုက်မိတယ်။",
        "တောလမ်းနားမှာ ရန်ဖြစ်ကြတယ်။",
        "ကိုထက်မင်း သေသွားတယ်။"] },

  { t: "They Put Him in the Old Well", c: [[2, "bigstinger"]], l: "ရေတွင်းဟောင်း",
    k: "well",
    g: "⚠️ အလောင်းကို လယ်ကွင်းအနားက ရေတွင်းဟောင်းထဲ ပစ်ချထားခဲ့တယ်။",
    p: "⚠️ A MEMORY, AT NIGHT, AND NOBODY IS IN IT. The old well in the long grass at the corner "
      + "of the field, ⚠️ ITS TIMBER COVER PULLED ASIDE AND THE MOUTH STANDING OPEN — a square of "
      + "pure black in the low brick ring. Trampled grass around it. ⚠️ THE FRAME IS GRASS, "
      + "BRICK AND AN OPEN HOLE. Faint starlight.",
    u: ["အလောင်းကိုတော့ လယ်ကွင်းအနားက ရေတွင်းဟောင်းထဲ ပစ်ချထားခဲ့တယ်။",
        "အဲဒီအကြောင်း သိခဲ့တဲ့လူက ရွာသားတစ်ယောက်။ သူလည်း ကြောက်လို့ နှစ်နှစ်ကြာမှ ညီလင်းကို လာပြောတာ။"] },

  { t: "She Was Already Dead", c: [[3, "bigstinger"]], l: "ညီလင်းအိမ်", k: "lin",
    w: ["ညီလင်း"],
    g: "⚠️ “ဒါနဲ့ မခင်သီတာကို ဘာလို့ မပြောတာလဲ” ညီလင်းက ခေါင်းငုံ့သွားတယ်။ “သူ သေပြီးသားလေ”",
    p: "Close on Nyi Lin with his head right down, ⚠️ HIS FACE ALMOST ENTIRELY OUT OF THE LIGHT "
      + "so that only his hairline and the top of his cheek catch the thin shutter line. ⚠️ The "
      + "answer is delivered from somewhere we cannot see.",
    u: ["“ဒါနဲ့ မခင်သီတာကို ဘာလို့ မပြောတာလဲ” ကျွန်တော် မေးလိုက်တယ်။",
        "ညီလင်းက ခေါင်းငုံ့သွားတယ်။ “သူ သေပြီးသားလေ”",
        "ခန်းထဲ တိတ်သွားတယ်။"] },

  { t: "She Has Been Looking Seven Years", l: "ညီလင်းအိမ်", k: "htet", w: ["စောထက်"],
    g: "⚠️ ကျွန်တော် အခုမှ ရှင်းသွားတယ်။ သူမ သတို့သားကို လိုက်ရှာနေတာ ခုနစ်နှစ်ရှိပြီ။ သူသေသွားတယ်ဆိုတာ မသိဘူး။",
    p: "Close on Saw Htet in the dark, ⚠️ HIS FACE CHANGING AS HE ARRIVES AT IT — not fear this "
      + "time but something closer to pity, the eyebrows going up in the middle. The thin shutter "
      + "line across his eyes.",
    u: ["ကျွန်တော် အခုမှ ရှင်းသွားတယ်။",
        "သူမ သတို့သားကို လိုက်ရှာနေတာ ခုနစ်နှစ်ရှိပြီ။ သူ ပျောက်သွားတယ်လို့ပဲ ထင်နေတာ။",
        "သူသေသွားတယ်ဆိုတာ — မသိဘူး။"] },

  // ── VII · WHERE IS HE ─────────────────────────────────────────────────────
  { t: "One Knock", c: [[2, "bigstinger"]], l: "ညီလင်းအိမ်", k: "insert",
    g: "⚠️ တံခါးကို — တောက်။ တစ်ချက်ခေါက်တယ်။ ညီလင်း တုန်သွားတယ်။",
    p: "Insert on the inside of the plank door in the black room, ⚠️ THE OLD TIMBER AND ITS "
      + "IRON LATCH FILLING THE FRAME, completely still and completely closed. ⚠️ NOTHING IS "
      + "MOVING AND THERE IS NO SHADOW UNDER IT. Almost no light.",
    u: ["အပြင်ကနေ တိန်… အိုးခွက်တီးသံတစ်ချက်။ မခင်သီတာအသံက “ညီလင်း…”",
        "ဒီတစ်ခါ တံခါးရှေ့တည့်တည့်မှာ။ “သူ ဘယ်မှာလဲ”",
        "ညီလင်းက မျက်ရည်ကျလာတယ်။ တံခါးကို တောက် — တစ်ချက်ခေါက်တယ်။"] },

  { t: "Tell Her", l: "ညီလင်းအိမ်", k: "inside", w: ["ညီလင်း", "စောထက်"],
    g: "“တံခါးဖွင့်” ကျွန်တော် သူ့ကို ကြည့်တယ်။ “သူ့ကို ပြောလိုက်လေ” ညီလင်း ခေါင်းခါတယ်။ “မရဘူး”",
    p: "The two men in the black room facing each other, ⚠️ SAW HTET LEANING IN HARD AND NYI LIN "
      + "SHAKING HIS HEAD, both of them barely visible — two shapes and two faces caught in the "
      + "single thin line of shutter light. ⚠️ They are arguing in whispers.",
    u: ["တောက်။ နောက်တစ်ချက်။ “ညီလင်း…” “တံခါးဖွင့်”",
        "ကျွန်တော် သူ့ကို ကြည့်တယ်။ “သူ့ကို ပြောလိုက်လေ”",
        "ညီလင်း ခေါင်းခါတယ်။ “မရဘူး” “ဘာလို့” “သိသွားရင် သူ ဘာလုပ်မလဲ မသိဘူး”"] },

  { t: "Seven Years and You Never Told Her", l: "ညီလင်းအိမ်", k: "htet",
    w: ["စောထက်"],
    g: "⚠️ ကျွန်တော် စိတ်တိုလာတယ် — “ခုနစ်နှစ်လုံး သူ့ကို ရှာနေတဲ့သူကို မင်းက မပြောဘဲထားတာလား”",
    p: "Close on Saw Htet in the dark, ⚠️ ANGRY FOR THE FIRST TIME IN THE FILM — jaw set, "
      + "eyebrows down, leaning into the thin line of light so more of his face is in it than "
      + "before. He is not frightened in this shot at all.",
    u: ["ကျွန်တော် စိတ်တိုလာတယ်။",
        "“ခုနစ်နှစ်လုံး သူ့ကို ရှာနေတဲ့သူကို မင်းက မပြောဘဲထားတာလား”",
        "ညီလင်း ဘာမှမပြောနိုင်ဘူး။"] },

  { t: "Where Is He", c: [[3, "bigstinger"]], l: "ညီလင်းအိမ်", k: "insert",
    g: "⚠️ တံခါးတစ်ချက် ထပ်ခေါက်တယ်။ ဒီတစ်ခါ တင်းတယ်။ ဒုန်း။ “သူ ဘယ်မှာလဲ!”",
    p: "The same insert on the inside of the plank door, ⚠️ AND NOW THE WHOLE FRAME IS SHAKING — "
      + "dust jumping off the timber, the iron latch lifted clear of its keeper in mid-rattle, "
      + "the bar straining in its brackets. ⚠️ THE DOOR IS STILL SHUT AND STILL WHOLE. Almost no "
      + "light.",
    u: ["အဲဒီအချိန် တံခါးတစ်ချက် ထပ်ခေါက်တယ်။ ဒီတစ်ခါ တင်းတယ်။ ဒုန်း။",
        "အိမ်တစ်လုံးလုံး လှုပ်သွားတယ်။ “သူ ဘယ်မှာလဲ!”",
        "မိန်းမအသံက အခု မငိုတော့ဘူး။ ဒေါသထွက်နေပြီ။"] },

  { t: "We Have to Go Out", l: "ညီလင်းအိမ်", k: "lin", w: ["ညီလင်း"],
    g: "⚠️ ညီလင်းက ရုတ်တရက် “ငါတို့ အပြင်ထွက်ရမယ်” လို့ ပြောတယ်။ “ဘယ်သွားမလို့” “ရေတွင်း” “သူ့ကို ပြရမယ်”",
    p: "Close on Nyi Lin, ⚠️ HIS EYES OPEN AT LAST AND SOMETHING DECIDED IN THEM — the terror "
      + "replaced by a flat exhausted resolve. He is already getting up; his shoulder is rising "
      + "out of frame. Shutter light across his face.",
    u: ["ပြတင်းပေါက်မှန်တွေ လှုပ်တယ်။ အိမ်အောက်က ဝါးတိုင်တွေ အက်သံထွက်လာတယ်။",
        "ညီလင်းက “ငါတို့ အပြင်ထွက်ရမယ်” လို့ ရုတ်တရက် ပြောတယ်။",
        "“ဘယ်သွားမလို့” “ရေတွင်း” ကျွန်တော် တောင့်သွားတယ်။ “အခု?” “သူ့ကို ပြရမယ်”"] },

  // ── VIII · THEY WERE OUTSIDE ──────────────────────────────────────────────
  { t: "They Were All Standing There", c: [[2, "bigstinger"]], l: "ညီလင်းအိမ်",
    k: "wide", w: ["ဧည့်သည်တွေ", "မခင်သီတာ"],
    g: "⚠️ ကျွန်တော်တို့ တံခါးဖွင့်လိုက်တယ်။ အပြင်မှာ လူတွေ ရပ်နေကြတယ်။ နေ့လယ်က မင်္ဂလာဆောင်မှာ ထိုင်နေတဲ့လူတွေ။",
    p: "Wide from the open doorway at the top of the stair: ⚠️ THE WHOLE COMPOUND BELOW IS FULL "
      + "OF STANDING FIGURES IN WHITE, evenly spaced across the swept earth and out to the "
      + "bamboo fence, ⚠️ EVERY ONE OF THEM WITH THEIR HEAD BOWED. ⚠️ IN THE MIDDLE OF THEM, ONE "
      + "WOMAN IN A DEEP RED LONGYI. Faint starlight and the great tree black overhead.",
    u: ["ကျွန်တော်တို့ နှစ်ယောက် တံခါးဖွင့်လိုက်တယ်။ အပြင်မှာ လူတွေ ရပ်နေကြတယ်။",
        "ရွာသားတွေ မဟုတ်ဘူး။ နေ့လယ်က မင်္ဂလာဆောင်မှာ ထိုင်နေတဲ့လူတွေ။",
        "အားလုံး အဖြူအင်္ကျီ။ အားလုံး မျက်နှာငုံ့ထားတယ်။"] },

  { t: "Her Face Up Close", c: [[3, "bigstinger"]], l: "ညီလင်းအိမ်", k: "thida",
    w: ["မခင်သီတာ"],
    g: "⚠️ နီးနီးကပ်ကပ်မှာ သူ့မျက်နှာက အရမ်းဖြူတယ်။ နှုတ်ခမ်းက မည်းနေတယ်။ ဒါပေမယ့် ကြောက်စရာပုံ မဟုတ်ဘူး။ အရမ်းဝမ်းနည်းနေတဲ့လူပုံ။",
    p: "⚠️ THE FIRST CLOSE LOOK AT HER, AND SHE IS NOT A MONSTER. Ma Khin Thida head and "
      + "shoulders in the dark compound: ⚠️ HER SKIN IS A FLAT CHALK-WHITE WITH NO WARMTH AND "
      + "HER LIPS ARE A DARK PLUM-GREY, the white flowers still pinned in her hair. ⚠️ HER SKIN "
      + "IS WHOLE, SMOOTH AND UNBROKEN. ⚠️ HER EXPRESSION IS ENORMOUS PATIENT GRIEF — not a "
      + "snarl, not a glare, not a threat. She looks like someone who has been sad for a very "
      + "long time.",
    u: ["အလယ်မှာ မခင်သီတာ။ အနီရောင်လုံချည်။ အဖြူရောင်ရင်ဖုံး။ ခေါင်းပေါ် ပန်းဖြူတွေ။",
        "နေ့လယ်က အဝေးကမြင်ခဲ့တာထက် အခု နီးနီးကပ်ကပ်မှာ သူ့မျက်နှာက အရမ်းဖြူတယ်။",
        "နှုတ်ခမ်းက မည်းနေတယ်။ ဒါပေမယ့် ကြောက်စရာပုံ မဟုတ်ဘူး။ အရမ်းဝမ်းနည်းနေတဲ့လူပုံ။"] },

  { t: "She Did Nothing to Me", l: "ညီလင်းအိမ်", k: "htet", w: ["စောထက်"],
    g: "သူ ညီလင်းကိုကြည့်တယ်။ ပြီးတော့ ကျွန်တော့်ကို တစ်ချက်ကြည့်တယ်။ ကျွန်တော့်ရင်ထဲ အေးသွားပေမယ့် သူ ကျွန်တော့်ကို ဘာမှမလုပ်ဘူး။",
    p: "Close on Saw Htet at the top of the stair, ⚠️ BEING LOOKED AT AND HOLDING COMPLETELY "
      + "STILL — eyes wide, jaw locked, not breathing, and not backing away either. Faint "
      + "starlight and the black shape of the tree above him.",
    u: ["သူ ညီလင်းကိုကြည့်တယ်။ ပြီးတော့ ကျွန်တော့်ကို တစ်ချက်ကြည့်တယ်။",
        "ကျွန်တော့်ရင်ထဲ အေးသွားပေမယ့်—",
        "သူ ကျွန်တော့်ကို ဘာမှမလုပ်ဘူး။"] },

  { t: "Come With Me", l: "လယ်ကွင်း", k: "field",
    w: ["ညီလင်း", "စောထက်", "ဧည့်သည်တွေ", "မခင်သီတာ"],
    g: "⚠️ ညီလင်းက တိုးတိုးပြောတယ် — “လိုက်ခဲ့” သူ လယ်ကွင်းဘက် လျှောက်သွားတယ်။",
    p: "OCCURRENCE 5 OF 11 OF THE FIXED FIELD VIEW, at night. The identical viewpoint, ⚠️ AND "
      + "THE FIELD IS FULL OF PEOPLE WALKING ACROSS IT AWAY FROM CAMERA — two ordinary men out "
      + "in front and behind them a loose column of figures in white with a single red longyi "
      + "among them, all moving the same way towards the far corner. ⚠️ Nobody is hurrying.",
    u: ["ညီလင်းက တိုးတိုးပြောတယ်။ “လိုက်ခဲ့”",
        "သူ လယ်ကွင်းဘက် လျှောက်သွားတယ်။ ကျွန်တော်လည်း လိုက်တယ်။",
        "နောက်က ခြေသံအများကြီး လိုက်လာတယ်။ ကျွန်တော် ပြန်မလှည့်ရဲဘူး။"] },

  // ── IX · THE WELL ─────────────────────────────────────────────────────────
  { t: "Grass Grown Over It", l: "ရေတွင်းဟောင်း", k: "well", w: ["ညီလင်း", "စောထက်"],
    g: "ရေတွင်းဟောင်းက လယ်ကွင်းအဆုံးမှာ။ မြက်တွေထူနေတယ်။ အပေါ်က သစ်သားဖုံးကို မြေကြီးနဲ့ ဖုံးထားလို့ မသိသာဘူး။",
    p: "Two men on their knees in tall coarse grass at the corner of the field at night, ⚠️ "
      + "PULLING HANDFULS OF SOIL AND TURF OFF A SQUARE OF ROTTED TIMBER BOARDS that is only "
      + "just starting to show through. A low ring of old brick is emerging around it. Faint "
      + "starlight, dark grass all round.",
    u: ["ရေတွင်းဟောင်းက လယ်ကွင်းအဆုံးမှာ။ မြက်တွေထူနေတယ်။",
        "အပေါ်က သစ်သားဖုံးကို မြေကြီးနဲ့ ဖုံးထားလို့ မသိသာဘူး။",
        "ညီလင်းက ဒူးထောက်ပြီး မြေကို ဖယ်တယ်။ ကျွန်တော်လည်း ကူတယ်။"] },

  { t: "They Stood Around and Waited", l: "ရေတွင်းဟောင်း", k: "wide",
    w: ["ဧည့်သည်တွေ", "မခင်သီတာ"],
    g: "မခင်သီတာက ရေတွင်းဘေးမှာ တိတ်တိတ်ရပ်နေတယ်။ အခြားလူတွေက ဝိုင်းရပ်နေကြတယ်။",
    p: "Wide on the corner of the field at night: two men digging at the well in the middle, and "
      + "⚠️ A RING OF STANDING FIGURES IN WHITE ALL AROUND THEM AT THE EDGE OF THE GRASS, evenly "
      + "spaced, facing in, heads down, ⚠️ DOING ABSOLUTELY NOTHING. One red longyi close in "
      + "beside the well. Faint starlight.",
    u: ["မခင်သီတာက ရေတွင်းဘေးမှာ တိတ်တိတ်ရပ်နေတယ်။",
        "အခြားလူတွေက ဝိုင်းရပ်နေကြတယ်။"] },

  { t: "The Smell That Came Up", l: "ရေတွင်းဟောင်း", k: "down",
    g: "⚠️ ဖုံးကို ဖယ်လိုက်တာနဲ့ အနံ့တစ်မျိုး ထွက်လာတယ်။ အဟောင်း။ စိုစွတ်နေတဲ့ မြေနံ့။",
    p: "⚠️ NOTHING IS VISIBLE DOWN THERE. Looking straight down into the opened well mouth at "
      + "night: the inner ring of old wet brick going down maybe two courses and then ⚠️ TOTAL "
      + "BLACK — the light reaches no further. Wet green growth on the top bricks. ⚠️ The frame "
      + "is brick and dark.",
    u: ["ဖုံးကို ဖယ်လိုက်တာနဲ့ အနံ့တစ်မျိုး ထွက်လာတယ်။",
        "အဟောင်း။ စိုစွတ်နေတဲ့ မြေနံ့။",
        "ညီလင်း မျက်ရည်ကျလာတယ်။ “သူ ဒီအောက်မှာ”"] },

  { t: "He Did Not Leave You", c: [[3, "stinger"]], l: "ရေတွင်းဟောင်း", k: "lin",
    w: ["ညီလင်း"],
    g: "⚠️ “အစ်မ… ကိုထက်မင်း မလာတော့တာ… အစ်မကို ထားခဲ့လို့ မဟုတ်ဘူး” သူ့အသံ ပျက်လာတယ်။ “သူ ပြန်မလာနိုင်တော့တာ”",
    p: "Close on Nyi Lin kneeling in the grass beside the open well at night, ⚠️ LOOKING UP AT "
      + "SOMEONE STANDING OVER HIM, his face wet and completely open — no defence left in it at "
      + "all. ⚠️ THIS IS THE SENTENCE HE HAS OWED FOR FIVE YEARS. Faint starlight.",
    u: ["“အစ်မ… ကိုထက်မင်း မလာတော့တာ…” “အစ်မကို ထားခဲ့လို့ မဟုတ်ဘူး”",
        "သူ့အသံ ပျက်လာတယ်။",
        "“သူ ပြန်မလာနိုင်တော့တာ”"] },

  { t: "She Reached Down", l: "ရေတွင်းဟောင်း", k: "down",
    w: ["မခင်သီတာ"],
    g: "⚠️ သူ ဖြည်းဖြည်း ဒူးထောက်တယ်။ လက်တစ်ဖက်ကို ရေတွင်းထဲ ဆန့်တယ်။ ကျွန်တော် ဘာမှမမြင်ရဘူး။",
    p: "Looking down into the open well mouth again, ⚠️ AND NOW ONE CHALK-WHITE ARM IS REACHING "
      + "DOWN INTO IT from the top of frame — a woman's hand and forearm going into the black, "
      + "the red silk of her sleeveless side visible at the frame edge. ⚠️ EVERYTHING BELOW HER "
      + "FINGERS IS STILL ABSOLUTELY BLACK.",
    u: ["မခင်သီတာက ရေတွင်းအောက်ကို ကြည့်တယ်။",
        "ခဏကြာတော့ သူ ဖြည်းဖြည်း ဒူးထောက်တယ်။ လက်တစ်ဖက်ကို ရေတွင်းထဲ ဆန့်တယ်။",
        "ကျွန်တော် ဘာမှမမြင်ရဘူး။"] },

  { t: "A Hand Came Up", c: [[2, "bigstinger"]], l: "ရေတွင်းဟောင်း", k: "insert",
    w: ["ကိုထက်မင်း"],
    g: "⚠️ ဒါပေမယ့် အောက်ကနေ လက်တစ်ဖက် တက်လာတယ်။ အရိုးလိုပဲ ပိန်တယ်။ မခင်သီတာက အဲဒီလက်ကို ဖမ်းလိုက်တယ်။",
    p: "⚠️ TWO HANDS AND NOTHING ELSE. Tight insert at the lip of the well: ⚠️ A THIN GREY-WHITE "
      + "HAND HAS COME UP OUT OF THE BLACK AND A CHALK-WHITE ONE HAS CLOSED AROUND IT, fingers "
      + "laced. The man's hand is wet and stained with pale clay; the woman's is dry. ⚠️ BOTH "
      + "HANDS ARE WHOLE AND UNBROKEN — thin, but complete. Old brick and dark grass around them.",
    u: ["ဒါပေမယ့် အောက်ကနေ လက်တစ်ဖက် တက်လာတယ်။",
        "အရိုးလိုပဲ ပိန်တယ်။",
        "မခင်သီတာက အဲဒီလက်ကို ဖမ်းလိုက်တယ်။"] },

  { t: "He Came Out", c: [[2, "bigstinger"]], l: "ရေတွင်းဟောင်း", k: "min",
    w: ["ကိုထက်မင်း"],
    g: "⚠️ ရေတွင်းထဲကနေ လူတစ်ယောက် ဖြည်းဖြည်း ထွက်လာတယ်။ ကိုထက်မင်း။ ဝတ်ထားတာ မင်္ဂလာဝတ်စုံ မဟုတ်ဘူး။ ပုံမှန်အင်္ကျီ။",
    p: "Close on Ko Htet Min standing beside the well at night, ⚠️ HIS SKIN FLAT GREY-WHITE AND "
      + "HIS LIPS THE SAME GREY, his black hair soaked and flattened to his skull, his ordinary "
      + "working shirt dark with water and streaked with pale clay. ⚠️ THERE IS A DARK "
      + "DISCOLOURATION LIKE OLD SHADOW UNDER THE SKIN across one cheekbone and brow — ⚠️ AND THE "
      + "SKIN ITSELF IS WHOLE, SMOOTH AND COMPLETELY UNBROKEN.",
    u: ["ပြီးတော့ ရေတွင်းထဲကနေ လူတစ်ယောက် ဖြည်းဖြည်း ထွက်လာတယ်။ ကိုထက်မင်း။",
        "ဝတ်ထားတာ မင်္ဂလာဝတ်စုံ မဟုတ်ဘူး။ ပုံမှန်အင်္ကျီ။",
        "မျက်နှာပေါ်မှာ ဒဏ်ရာတွေ။"] },

  { t: "He Smiled at Her", l: "ရေတွင်းဟောင်း", k: "min",
    w: ["ကိုထက်မင်း"],
    g: "⚠️ ဒါပေမယ့် မခင်သီတာကို မြင်တာနဲ့ ပြုံးလိုက်တယ်။",
    p: "The same close framing on Ko Htet Min, ⚠️ AND HE IS SMILING — a real, warm, slightly "
      + "apologetic smile that reaches his eyes, on a grey dead face. ⚠️ THE CONTRADICTION "
      + "BETWEEN THE COLOUR AND THE EXPRESSION IS THE WHOLE SHOT. He is looking at someone just "
      + "off frame.",
    u: ["ဒါပေမယ့် မခင်သီတာကို မြင်တာနဲ့ ပြုံးလိုက်တယ်။",
        "မခင်သီတာ မျက်ရည်ကျလာတယ်။"] },

  { t: "I Was Late", c: [[3, "stinger"]], l: "ရေတွင်းဟောင်း", k: "thida",
    w: ["မခင်သီတာ"],
    g: "⚠️ ခုနစ်နှစ်လုံး ပြောချင်ခဲ့တဲ့ စကားတစ်ခွန်းပဲ ရှိသလို — “မောင်…” ကိုထက်မင်းက “နောက်ကျသွားတယ်” မခင်သီတာ ခေါင်းခါတယ်။ “လာတာပဲ”",
    p: "Close on Ma Khin Thida, ⚠️ CRYING AND SHAKING HER HEAD AT THE SAME TIME — tears running "
      + "down the chalk-white face, her mouth open on two words, her eyes on someone just off "
      + "frame. ⚠️ THE GRIEF HAS GONE OUT OF HER FACE AND RELIEF HAS COME INTO IT. Faint "
      + "starlight, white flowers still in her hair.",
    u: ["ခုနစ်နှစ်လုံး ပြောချင်ခဲ့တဲ့ စကားတစ်ခွန်းပဲ ရှိသလို — “မောင်…”",
        "ကိုထက်မင်းက “နောက်ကျသွားတယ်” လို့ ပြန်ပြောတယ်။",
        "မခင်သီတာ ခေါင်းခါတယ်။ “လာတာပဲ”"] },

  // ── X · WHY DIDN'T YOU TELL ME ────────────────────────────────────────────
  { t: "I'm Sorry, Brother", l: "ရေတွင်းဟောင်း", k: "wide",
    w: ["ကိုထက်မင်း", "ညီလင်း"],
    g: "ကိုထက်မင်းက ညီလင်းဘက် လှည့်တယ်။ ညီလင်း ခေါင်းငုံ့သွားတယ်။ “တောင်းပန်ပါတယ် အစ်ကို” ကိုထက်မင်း ဘာမှမပြောဘူး။",
    p: "Wide on the well at night: Ko Htet Min standing and turned towards Nyi Lin, who is still "
      + "on his knees in the grass with his head right down. ⚠️ THE STANDING BROTHER'S FACE IS "
      + "CALM AND SAYS NOTHING AT ALL — not forgiveness and not blame. The ring of white figures "
      + "beyond them.",
    u: ["ကိုထက်မင်းက ညီလင်းဘက် လှည့်တယ်။ ညီလင်း ခေါင်းငုံ့သွားတယ်။",
        "“တောင်းပန်ပါတယ် အစ်ကို”",
        "ကိုထက်မင်း ဘာမှမပြောဘူး။"] },

  { t: "Her Face Went Cold", c: [[2, "bigstinger"]], l: "ရေတွင်းဟောင်း", k: "thida",
    w: ["မခင်သီတာ"],
    g: "⚠️ မခင်သီတာကတော့ ညီလင်းကို ကြည့်တယ်။ သူ့မျက်နှာပေါ်က ဝမ်းနည်းမှု ပြောင်းသွားတယ်။ အေးသွားတယ်။ “ဘာလို့ မပြောတာလဲ”",
    p: "Close on Ma Khin Thida, ⚠️ AND THE GRIEF HAS GONE OUT OF HER FACE AND LEFT SOMETHING "
      + "COLD AND STILL IN ITS PLACE — the tears still on her cheeks, the expression underneath "
      + "them completely flat. ⚠️ SHE IS STILL NOT SNARLING AND STILL NOT MONSTROUS; she has "
      + "simply stopped being sad. Faint starlight.",
    u: ["မခင်သီတာကတော့ ညီလင်းကို ကြည့်တယ်။",
        "သူ့မျက်နှာပေါ်က ဝမ်းနည်းမှု ပြောင်းသွားတယ်။ အေးသွားတယ်။",
        "“ဘာလို့ မပြောတာလဲ”"] },

  { t: "I Was Afraid You'd Come Back", c: [[3, "stinger"]], l: "ရေတွင်းဟောင်း",
    k: "lin", w: ["ညီလင်း"],
    g: "⚠️ “နှစ်နှစ်ကြာပြီး သိခဲ့တာ” “သိပြီးတော့…” “ကြောက်လို့ပါ” “ဘာကို ကြောက်တာလဲ” “အစ်မ ပြန်လာမှာကို”",
    p: "Close on Nyi Lin still kneeling, ⚠️ SAYING THE WORST THING HE HAS EVER SAID AND KNOWING "
      + "IT — face up now, ruined, eyes on hers, nothing held back. Faint starlight on the wet "
      + "of his face.",
    u: ["ညီလင်း မဖြေနိုင်ဘူး။ “နှစ်နှစ်ကြာပြီး သိခဲ့တာ” “သိပြီးတော့…”",
        "သူ့အသံ တုန်လာတယ်။ “ကြောက်လို့ပါ” “ဘာကို ကြောက်တာလဲ”",
        "“အစ်မ ပြန်လာမှာကို”"] },

  { t: "They All Raised Their Heads", c: [[1, "bigstinger"]], l: "ရေတွင်းဟောင်း",
    k: "guests", w: ["ဧည့်သည်တွေ"],
    g: "⚠️ အဲဒီစကားကြားတာနဲ့ ပတ်ပတ်လည်က မင်္ဂလာဆောင်လူတွေ ခေါင်းမော့လာကြတယ်။ ပထမဆုံး သူတို့မျက်နှာကို ကျွန်တော် မြင်ရတယ်။",
    p: "⚠️ THE FIRST AND ONLY TIME THEIR FACES ARE SEEN. Along the ring of standing figures at "
      + "night, ⚠️ EVERY HEAD HAS COME UP TOGETHER. They are ordinary human faces of mixed ages "
      + "— and ⚠️ SMOOTH UNBROKEN SKIN RUNS UNINTERRUPTED FROM BROW TO CHEEKBONE WHERE THE EYES "
      + "WOULD BE. ⚠️ NOTHING IS MISSING, DAMAGED OR OPEN: the skin is simply continuous across "
      + "that part of the face, like a face that was made without them. Everything else about "
      + "them is completely ordinary.",
    u: ["အဲဒီစကားကြားတာနဲ့ ပတ်ပတ်လည်က မင်္ဂလာဆောင်လူတွေ ခေါင်းမော့လာကြတယ်။",
        "ပထမဆုံး သူတို့မျက်နှာကို ကျွန်တော် မြင်ရတယ်။",
        "လူပုံစံတွေ။ ဒါပေမယ့် မျက်လုံးမရှိဘူး။ အရမ်းတိတ်နေတယ်။"] },

  { t: "I Won't Take You", l: "ရေတွင်းဟောင်း", k: "thida",
    w: ["မခင်သီတာ", "ကိုထက်မင်း"],
    g: "⚠️ ကျွန်တော် မခင်သီတာ ဒေါသထွက်ပြီး သူ့ကို သတ်မယ်လို့ ထင်မိတယ်။ ဒါပေမယ့် သူ ဘာမှမလုပ်ဘူး။ “မင်းကို ကျွန်မ မယူဘူး”",
    p: "Close on Ma Khin Thida, ⚠️ HER HAND VISIBLY TIGHTENING AROUND A GREY ONE AT THE BOTTOM "
      + "OF FRAME rather than reaching for anybody, her eyes level and her face calm. ⚠️ SHE IS "
      + "CHOOSING NOT TO DO SOMETHING and the shot is about the restraint, not the threat. Faint "
      + "starlight.",
    u: ["ကျွန်တော် မခင်သီတာ ဒေါသထွက်ပြီး သူ့ကို သတ်မယ်လို့ ထင်မိတယ်။",
        "ဒါပေမယ့် သူ ဘာမှမလုပ်ဘူး။ လက်ထဲက ကိုထက်မင်းရဲ့လက်ကို ပိုတင်းတင်းဖမ်းလိုက်တယ်။",
        "“မင်းကို ကျွန်မ မယူဘူး”"] },

  { t: "Living With It Is Longer", c: [[3, "stinger"]], l: "ရေတွင်းဟောင်း",
    k: "lin", w: ["ညီလင်း"],
    g: "⚠️ “ကိုယ့်အစ်ကိုအလောင်း ဘယ်မှာရှိတယ် သိပြီး… သူ့ကို ခုနစ်နှစ် မြေမပေါ်အောင် ထားခဲ့တဲ့စိတ်နဲ့… အသက်ရှင်နေရတာက ပိုကြာမယ်”",
    p: "Close on Nyi Lin receiving it, ⚠️ HIS FACE GOING COMPLETELY BLANK — not relief and not "
      + "horror, just the arithmetic landing. He has stopped crying. Faint starlight, the ring of "
      + "figures soft behind him.",
    u: ["မခင်သီတာက ဆက်ပြောတယ်။ “ကိုယ့်အစ်ကိုအလောင်း ဘယ်မှာရှိတယ် သိပြီး…”",
        "“သူ့ကို ခုနစ်နှစ် မြေမပေါ်အောင် ထားခဲ့တဲ့စိတ်နဲ့…”",
        "“အသက်ရှင်နေရတာက ပိုကြာမယ်” ညီလင်း မလှုပ်နိုင်တော့ဘူး။"] },

  // ── XI · THEY WALKED AWAY ─────────────────────────────────────────────────
  { t: "They Walked Into the Field Together", l: "လယ်ကွင်း", k: "field",
    w: ["မခင်သီတာ", "ကိုထက်မင်း", "ဧည့်သည်တွေ"],
    g: "အဲဒီည မခင်သီတာနဲ့ ကိုထက်မင်းတို့ လယ်ကွင်းထဲကို အတူလျှောက်သွားကြတယ်။ ပတ်ပတ်လည်က လူတွေလည်း လိုက်သွားကြတယ်။",
    p: "OCCURRENCE 6 OF 11 OF THE FIXED FIELD VIEW, at night. The identical framing, ⚠️ AND "
      + "TWO FIGURES ARE WALKING AWAY ACROSS THE PADDY SIDE BY SIDE — a red longyi and a dark "
      + "soaked shirt, close together — with the loose column of white figures following behind "
      + "them. ⚠️ Everyone is moving away from camera, unhurried.",
    u: ["အဲဒီည မခင်သီတာနဲ့ ကိုထက်မင်းတို့ လယ်ကွင်းထဲကို အတူလျှောက်သွားကြတယ်။",
        "ပတ်ပတ်လည်က လူတွေလည်း လိုက်သွားကြတယ်။"] },

  { t: "The Further They Went, the Fainter", l: "လယ်ကွင်း", k: "field",
    w: ["မခင်သီတာ", "ကိုထက်မင်း"],
    g: "အဝေးရောက်လေလေ ပုံရိပ်တွေ ဖျော့လာလေလေ။",
    p: "OCCURRENCE 7 OF 11 OF THE FIXED FIELD VIEW, at night. The identical framing again — ⚠️ "
      + "AND THE WALKING FIGURES ARE NOW FAR OUT AND VISIBLY THINNING, the paddy and the tree "
      + "line showing through them, their edges going soft. ⚠️ THEY ARE NOT GLOWING OR "
      + "DISSOLVING INTO ANYTHING — they are simply becoming less there.",
    u: ["အဝေးရောက်လေလေ—",
        "ပုံရိပ်တွေ ဖျော့လာလေလေ။"] },

  { t: "One White Flower Left", c: [[2, "stinger"]], l: "လယ်ကွင်း", k: "flower",
    rev: "flower 2 of 4",
    g: "⚠️ ပန်းဖြူ ဒုတိယအကြိမ် — နောက်ဆုံးမှာတော့ လယ်ကွင်းအလယ်မှာ အဖြူရောင်ပန်းတစ်ပွင့်ပဲ ကျန်ခဲ့တယ်။",
    p: "OCCURRENCE 2 OF 4 OF THE WHITE FLOWER. The identical tight framing straight down: ⚠️ A "
      + "SINGLE FRESH WHITE FLOWER LYING ON WET GREEN PADDY, ⚠️ PERFECT AND UNCRUSHED AND EXACTLY "
      + "AS IT WAS IN HER HAND. ⚠️ NOTHING ELSE IS IN THE FRAME — no footprints, no flattened "
      + "crop, no marks of any kind. Faint starlight.",
    u: ["နောက်ဆုံးမှာတော့—",
        "လယ်ကွင်းအလယ်မှာ အဖြူရောင်ပန်းတစ်ပွင့်ပဲ ကျန်ခဲ့တယ်။"] },

  // ── XII · MORNING ─────────────────────────────────────────────────────────
  { t: "We Told the Village", l: "ရေတွင်းဟောင်း", k: "wide", w: ["စောထက်", "ညီလင်း"],
    g: "မနက်ရောက်တော့ ကျွန်တော်တို့ ရွာသားတွေကို အကုန်ပြောတယ်။ ရေတွင်းဟောင်းကို ဖွင့်ပြီး စစ်ကြတယ်။",
    p: "Morning at the well under flat grey light: ⚠️ A DOZEN VILLAGERS GATHERED ROUND THE OPEN "
      + "WELL MOUTH, several of them on their knees at the lip, a rope and a lantern going down "
      + "into it, others standing back with their hands over their mouths. ⚠️ NOTHING IS VISIBLE "
      + "IN THE WELL — the opening is just black.",
    u: ["မနက်ရောက်တော့ ကျွန်တော်တို့ ရွာသားတွေကို အကုန်ပြောတယ်။",
        "ရေတွင်းဟောင်းကို ဖွင့်ပြီး စစ်ကြတယ်။",
        "အောက်ကနေ လူအရိုးတွေ တွေ့တယ်။"] },

  { t: "They Buried Him Properly", l: "ရွာလမ်း", k: "wide",
    g: "⚠️ အဝတ်အစားနဲ့ ပစ္စည်းဟောင်းတွေကြောင့် ကိုထက်မင်းဖြစ်တာ အတည်ပြုနိုင်ခဲ့တယ်။ သူ့အလောင်းကို ပုံမှန်နာရေးလုပ်ပြီး သင်္ဂြိုဟ်ပေးကြတယ်။",
    p: "⚠️ THE REMAINS ARE NEVER SEEN. A village funeral under overcast morning light: ⚠️ ONE "
      + "LONG BUNDLE WRAPPED IN CLEAN WHITE CLOTH resting on a bier, tied neatly, flowers laid "
      + "along it, with the village standing around in a quiet ring and monks at the head. "
      + "Ordinary, orderly and sad.",
    u: ["အဝတ်အစားနဲ့ ပစ္စည်းဟောင်းတွေကြောင့် ကိုထက်မင်းဖြစ်တာ အတည်ပြုနိုင်ခဲ့တယ်။",
        "သူ့အလောင်းကို ပုံမှန်နာရေးလုပ်ပြီး သင်္ဂြိုဟ်ပေးကြတယ်။"] },

  { t: "The Wedding Never Came Back", l: "လယ်ကွင်း", k: "field",
    g: "⚠️ လယ်ကွင်းအလယ်က မင်္ဂလာဆောင် — အဲဒီနေ့ကစပြီး မပေါ်တော့ဘူး။ ရွာသားတွေက စိတ်သက်သာသွားကြတယ်။",
    p: "OCCURRENCE 8 OF 11 OF THE FIXED FIELD VIEW. The identical viewpoint in flat grey daylight, "
      + "⚠️ AND THE FIELD IS COMPLETELY EMPTY — the same tree line, the same leaning palm, the "
      + "same dirt track, low green paddy and nothing standing in it at all. ⚠️ IT LOOKS EXACTLY "
      + "AS IT DID AT MIDDAY ON THE FIRST DAY.",
    u: ["လယ်ကွင်းအလယ်က မင်္ဂလာဆောင်—",
        "အဲဒီနေ့ကစပြီး မပေါ်တော့ဘူး။",
        "ရွာသားတွေက စိတ်သက်သာသွားကြတယ်။"] },

  { t: "He Cleans It Every Day", l: "လယ်ကွင်း", k: "insert", w: ["ညီလင်း"],
    g: "ညီလင်းကတော့ မမြို့ပြန်တော့ဘူး။ သူ့အစ်ကိုအတွက် လယ်ကွင်းနားမှာ ကျောက်တိုင်သေးသေးတစ်ခု ထောင်ထားတယ်။",
    p: "Insert on a small plain concrete marker post set upright in the grass at the edge of the "
      + "field, ⚠️ CLEAN AND RECENTLY SWEPT with the weeds cut back in a neat circle around it "
      + "and a little water poured at its base. ⚠️ NO WRITING IS LEGIBLE ON IT. A pair of hands "
      + "at the edge of frame. Overcast daylight.",
    u: ["ညီလင်းကတော့ မမြို့ပြန်တော့ဘူး။",
        "သူ့အစ်ကိုအတွက် လယ်ကွင်းနားမှာ ကျောက်တိုင်သေးသေးတစ်ခု ထောင်ထားတယ်။",
        "အဲဒီမှာ နေ့တိုင်း သန့်ရှင်းပေးတယ်။"] },

  // ── XIII · THE OLD MAN UNDER THE TREE ─────────────────────────────────────
  { t: "The Day I Rode Out", l: "လယ်ကွင်း", k: "field", w: ["စောထက်"],
    g: "ကျွန်တော် မြို့ပြန်မယ့်နေ့ မော်တော်ဆိုင်ကယ်နဲ့ ရွာအပြင် ထွက်လာတယ်။ လယ်ကွင်းဘေးရောက်တော့ မသိမသာ ကြည့်မိတယ်။",
    p: "OCCURRENCE 9 OF 11 OF THE FIXED FIELD VIEW, ⚠️ WITH SAW HTET IN IT THIS TIME. The "
      + "identical viewpoint in overcast daylight, and he is stopped on his motorbike at the "
      + "road edge in the near foreground, turned in the saddle to look out at the paddy. ⚠️ THE "
      + "FIELD BEYOND HIM IS COMPLETELY EMPTY.",
    u: ["ကျွန်တော် မြို့ပြန်မယ့်နေ့ မော်တော်ဆိုင်ကယ်နဲ့ ရွာအပြင် ထွက်လာတယ်။",
        "လယ်ကွင်းဘေးရောက်တော့ အစက မင်္ဂလာဆောင်လုပ်ခဲ့တဲ့နေရာကို မသိမသာ ကြည့်မိတယ်။",
        "ဘာမှမရှိဘူး။ ကျွန်တော် စိတ်သက်သာသွားတယ်။"] },

  { t: "The Old Man Was Under the Tree", l: "ရွာလမ်း", k: "elder",
    w: ["ဦးမြင့်အောင်"],
    g: "ဒါပေမယ့် လမ်းဘေးက သစ်ပင်အောက်မှာ လူကြီးတစ်ယောက် ရပ်နေတယ်။ ကျွန်တော် ရွာဝင်တုန်းက စကားပြောခဲ့တဲ့ လူကြီး။",
    p: "Close on U Myint Aung standing in the shade of a roadside tree, ⚠️ COMPLETELY ORDINARY "
      + "AND PLAINLY ALIVE AGAIN — warm skin, clear eyes, an ordinary shadow across him from the "
      + "leaves, one hand up in a small gesture to stop someone. The scar above his left eyebrow. "
      + "Overcast daylight.",
    u: ["ဒါပေမယ့် လမ်းဘေးက သစ်ပင်အောက်မှာ လူကြီးတစ်ယောက် ရပ်နေတယ်။",
        "ကျွန်တော် ရွာဝင်တုန်းက စကားပြောခဲ့တဲ့ လူကြီး။",
        "သူ ကျွန်တော့်ကို လှမ်းတားတယ်။ “ပြီးသွားပြီလား”"] },

  { t: "Not Everyone Knows", l: "ရွာလမ်း", k: "road", w: ["ဦးမြင့်အောင်", "စောထက်"],
    g: "⚠️ “ဒီရွာသားတွေ အဲဒီရေတွင်းအကြောင်း မသိကြဘူးလား” လူကြီးက ခဏကြာမှ “လူတိုင်းတော့ မသိဘူး” လို့ ပြောတယ်။",
    p: "The two of them under the roadside tree, Saw Htet astride the bike with a foot down and "
      + "the old man standing beside it, ⚠️ AND THE OLD MAN IS LOOKING OUT AT THE FIELD RATHER "
      + "THAN AT HIM. Overcast daylight, the empty paddy beyond.",
    u: ["ကျွန်တော် ခေါင်းညိတ်တယ်။ “သူတို့ တွေ့သွားပြီ” လူကြီး အသက်ရှူချလိုက်တယ်။ “ကောင်းတာပေါ့”",
        "“ဦး… ဒီရွာသားတွေ အဲဒီရေတွင်းအကြောင်း မသိကြဘူးလား”",
        "လူကြီးက ကျွန်တော့်ကို ကြည့်တယ်။ ခဏကြာမှ “လူတိုင်းတော့ မသိဘူး” လို့ ပြောတယ်။"] },

  { t: "I Was There Too", c: [[3, "bigstinger"]], l: "ရွာလမ်း", k: "elder",
    w: ["ဦးမြင့်အောင်"],
    g: "⚠️ “ကိုထက်မင်းအလောင်းကို ရေတွင်းထဲ ပစ်တုန်းက…” သူ ခဏတိတ်တယ် — “ငါလည်း အဲဒီမှာရှိတယ်”",
    p: "Close on U Myint Aung, ⚠️ HIS FACE CHANGING INTO SOMETHING THAT COULD BE GRIEF OR COULD "
      + "BE REGRET AND WILL NOT RESOLVE INTO EITHER. He is not looking at the camera. ⚠️ HE IS "
      + "STILL COMPLETELY ORDINARY AND ALIVE-LOOKING — no pallor, no stillness, nothing wrong. "
      + "Overcast daylight through leaves.",
    u: ["“ဒါဆို ဘယ်သူတွေ သိတာလဲ” သူ ပြန်မဖြေဘူး။ လယ်ကွင်းဘက်ပဲ ကြည့်နေတယ်။",
        "“ဦး သိတာလား” လူကြီးက ခေါင်းညိတ်တယ်။ “သိတယ်” “ဘယ်လိုလုပ် သိတာလဲ”",
        "ပြီးတော့ “အဲဒီည… ကိုထက်မင်းအလောင်းကို ရေတွင်းထဲ ပစ်တုန်းက… ငါလည်း အဲဒီမှာရှိတယ်”"] },

  { t: "It Wasn't Only Those Two", c: [[2, "stinger"]], l: "ရွာလမ်း", k: "elder",
    w: ["ဦးမြင့်အောင်"],
    g: "⚠️ “မနေ့ညက သူတို့နှစ်ယောက်ပဲ ထွက်သွားတာ မဟုတ်ဘူးသား” … “ဟိုမင်္ဂလာဆောင်မှာ ထိုင်နေတဲ့လူတွေ… သူတို့က ဧည့်သည်တွေ မဟုတ်ဘူး”",
    p: "Close on U Myint Aung, ⚠️ HIS EYES WIDENING AND FIXED ON SOMETHING PAST THE CAMERA, well "
      + "over the shoulder of whoever he is talking to. ⚠️ HE IS NOT LOOKING AT THE LENS AT ALL "
      + "and his mouth has stayed open after the last word. Overcast daylight.",
    u: ["ကျွန်တော် မလှုပ်နိုင်တော့ဘူး။ လူကြီးက ကျွန်တော့်ကို မကြည့်ဘူး။ လယ်ကွင်းအလယ်ကိုပဲ ကြည့်နေတယ်။",
        "“မနေ့ညက သူတို့နှစ်ယောက်ပဲ ထွက်သွားတာ မဟုတ်ဘူးသား” “ဘာကိုဆိုလိုတာလဲ”",
        "“ဟိုမင်္ဂလာဆောင်မှာ ထိုင်နေတဲ့လူတွေ… သူတို့က ဧည့်သည်တွေ မဟုတ်ဘူး”"] },

  { t: "The Field Was Empty", l: "လယ်ကွင်း", k: "field",
    g: "ကျွန်တော် ဖြည်းဖြည်း နောက်ကို လှည့်ကြည့်လိုက်တယ်။ လယ်ကွင်းက ဗလာ။ ဘာမှမရှိဘူး။",
    p: "OCCURRENCE 10 OF 11 OF THE FIXED FIELD VIEW. The identical viewpoint in overcast "
      + "daylight, ⚠️ AND THE FIELD IS COMPLETELY EMPTY — the same tree line, the same leaning "
      + "palm, the same track, low green paddy and nothing in it. ⚠️ EXACTLY THE SAME IMAGE AS "
      + "THE OTHER EMPTY ONES.",
    u: ["ကျွန်တော် ဖြည်းဖြည်း နောက်ကို လှည့်ကြည့်လိုက်တယ်။",
        "လယ်ကွင်းက ဗလာ။ ဘာမှမရှိဘူး။"] },

  { t: "He Was Not There", l: "ရွာလမ်း", k: "road",
    g: "⚠️ ပြန်လှည့်တော့ လူကြီး မရှိတော့ဘူး။",
    p: "The roadside tree in overcast daylight, ⚠️ AND THE PATCH OF SHADE UNDER IT IS EMPTY — "
      + "the same tree, the same fence, the same stretch of lane, and nobody standing in it. ⚠️ "
      + "THERE IS NOWHERE HE COULD HAVE GONE in the time available and the lane runs empty in "
      + "both directions.",
    u: ["ပြန်လှည့်တော့—",
        "လူကြီး မရှိတော့ဘူး။"] },

  { t: "A Flower on the Ground", c: [[2, "bigstinger"]], l: "ရွာလမ်း", k: "flower",
    rev: "flower 3 of 4",
    g: "⚠️ ပန်းဖြူ တတိယအကြိမ် — သူရပ်နေတဲ့ မြေကြီးပေါ်မှာ ပန်းဖြူတစ်ပွင့်။",
    p: "OCCURRENCE 3 OF 4 OF THE WHITE FLOWER. The identical tight framing straight down: ⚠️ A "
      + "SINGLE FRESH WHITE FLOWER LYING ON THE BARE PACKED EARTH under the roadside tree, "
      + "⚠️ PERFECT AND UNCRUSHED AND EXACTLY THE SAME FLOWER AS THE OTHER TWO. ⚠️ THERE ARE NO "
      + "FOOTPRINTS ANYWHERE AROUND IT. Overcast daylight, leaf shadow across the ground.",
    u: ["သူရပ်နေတဲ့ မြေကြီးပေါ်မှာ—",
        "ပန်းဖြူတစ်ပွင့်။"] },

  // ── XIV · WHO WERE YOU TALKING TO ─────────────────────────────────────────
  { t: "Who Were You Talking To", l: "ရွာလမ်း", k: "lin", w: ["ညီလင်း"],
    g: "⚠️ ရွာဘက်ကနေ ညီလင်း အော်ခေါ်သံကြားလာတယ် — “စောထက်!” သူ ကျွန်တော့်နားရောက်တာနဲ့ “မင်း ဘယ်သူနဲ့ စကားပြောနေတာလဲ”",
    p: "Close on Nyi Lin having just run up, ⚠️ OUT OF BREATH AND FRIGHTENED — chest going, one "
      + "hand on the other man's handlebar, his eyes going past him to the tree. Overcast "
      + "daylight.",
    u: ["ပြီးတော့ ရွာဘက်ကနေ ညီလင်း အော်ခေါ်သံကြားလာတယ်။ “စောထက်!”",
        "ကျွန်တော် လှည့်ကြည့်တယ်။ ညီလင်းက အဝေးက ပြေးလာတယ်။ မျက်နှာမှာ ကြောက်နေတယ်။",
        "သူ ကျွန်တော့်နားရောက်တာနဲ့ “မင်း ဘယ်သူနဲ့ စကားပြောနေတာလဲ”"] },

  { t: "A Scar Above the Left Eyebrow", l: "ရွာလမ်း", k: "insert",
    g: "ကျွန်တော် သူ့ပုံကို ပြောပြတယ်။ အင်္ကျီညို။ ပုဆိုးဟောင်း။ ဘယ်မျက်ခုံးနားမှာ အမာရွတ်။",
    p: "⚠️ A DESCRIPTION, SHOWN AS ONE DETAIL. Tight insert on the short pale scar above a man's "
      + "left eyebrow and the skin around it, warm and ordinary and living. ⚠️ NOTHING ELSE OF "
      + "THE FACE IS IN FRAME. Overcast daylight.",
    u: ["ကျွန်တော် သစ်ပင်အောက်ကို လက်ညှိုးထိုးတယ်။ “ရွာဝင်တုန်းက တွေ့တဲ့ ဦးလေးလေ”",
        "ညီလင်း မျက်နှာ ဖြူသွားတယ်။ “ဘယ်ဦးလေး”",
        "ကျွန်တော် သူ့ပုံကို ပြောပြတယ်။ အင်္ကျီညို။ ပုဆိုးဟောင်း။ ဘယ်မျက်ခုံးနားမှာ အမာရွတ်။"] },

  { t: "That's U Myint Aung", c: [[3, "bigstinger"]], l: "ရွာလမ်း", k: "lin",
    w: ["ညီလင်း"],
    g: "⚠️ “အဲဒါ ဦးမြင့်အောင်” “အင်း၊ ဖြစ်မယ်” “မဖြစ်နိုင်ဘူး” … “ကိုထက်မင်း ပျောက်သွားတဲ့နောက် သူလည်း ရွာကနေ ပျောက်သွားတာ။ ခုနစ်နှစ်ရှိပြီ”",
    p: "Close on Nyi Lin, ⚠️ THE COLOUR GOING OUT OF HIS FACE AS HE SAYS IT and his voice "
      + "plainly not steady — eyes locked on the other man, head shaking very slightly. He is "
      + "looking at someone who has just told him something impossible. Overcast daylight.",
    u: ["ညီလင်းက စကားမပြောတော့ဘူး။ ခဏကြာမှ “အဲဒါ ဦးမြင့်အောင်” လို့ ပြောတယ်။",
        "“အင်း၊ ဖြစ်မယ်” “မဖြစ်နိုင်ဘူး” ညီလင်းရဲ့အသံက တုန်နေတယ်။",
        "“ကိုထက်မင်း ပျောက်သွားတဲ့နောက် သူလည်း ရွာကနေ ပျောက်သွားတာ။ ခုနစ်နှစ်ရှိပြီ”"] },

  { t: "The Flower in My Hand", l: "ရွာလမ်း", k: "flower",
    w: ["စောထက်"], rev: "flower 4 of 4",
    g: "⚠️ ပန်းဖြူ စတုတ္ထအကြိမ် — ကျွန်တော် လက်ထဲက ပန်းဖြူကို ကြည့်လိုက်တယ်။",
    p: "OCCURRENCE 4 OF 4 OF THE WHITE FLOWER, ⚠️ AND IT IS IN HIS HAND NOW. The identical tight "
      + "framing straight down onto an open palm, ⚠️ THE SAME FRESH WHITE FLOWER LYING ON IT, "
      + "perfect and uncrushed. ⚠️ THE HAND IS WARM, LIVING AND UNMARKED. Overcast daylight.",
    u: ["ကျွန်တော် လက်ထဲက ပန်းဖြူကို ကြည့်လိုက်တယ်။"] },

  { t: "Not Only My Brother's Bones", c: [[3, "bigstinger"]], l: "ရွာလမ်း", k: "lin",
    w: ["ညီလင်း"],
    g: "⚠️ ညီလင်း ဆက်ပြောတယ် — “အခု ရေတွင်းထဲက တွေ့တာ… အစ်ကို့အရိုးတစ်စုတည်း မဟုတ်ဘူး” … “လူအရိုးငါးစု ထပ်တွေ့တယ်”",
    p: "Close on Nyi Lin saying it, ⚠️ HIS VOICE DROPPING AND HIS EYES GOING PAST THE CAMERA "
      + "TOWARDS THE FIELD, the way someone looks when they are counting something. ⚠️ He is "
      + "very quiet. Overcast daylight.",
    u: ["ညီလင်း ဆက်ပြောတယ်။ “အခု ရေတွင်းထဲက တွေ့တာ…”",
        "“အစ်ကို့အရိုးတစ်စုတည်း မဟုတ်ဘူး”",
        "ကျွန်တော် ဖြည်းဖြည်း သူ့ဘက် ပြန်ကြည့်တယ်။ “နောက်ထပ်…” သူ အသံတိုးသွားတယ်။ “လူအရိုးငါးစု ထပ်တွေ့တယ်”"] },

  { t: "Six Chairs at That Table", c: [[1, "finalstinger"]], l: "လယ်ကွင်း", k: "field",
    w: ["ဧည့်သည်တွေ", "မခင်သီတာ", "မင်္ဂလာစားပွဲ"],
    rev: "the last image",
    g: "⚠️ သူတို့က သူမရဲ့ မင်္ဂလာဧည့်သည်တွေ မဟုတ်ဘူး — အဲဒီရေတွင်းထဲမှာ ပျောက်နေခဲ့တဲ့လူတွေ။",
    p: "FINAL SHOT. OCCURRENCE 11 OF 11 OF THE FIXED FIELD VIEW, ⚠️ AND IT IS THE VERY FIRST "
      + "IMAGE OF THE FILM AGAIN. The identical viewpoint in the same overcast daylight as the "
      + "opening: the wedding out in the middle of the paddy, the long white-clothed table, the "
      + "woman in the red longyi at its head — and ⚠️ SIX SEATED FIGURES IN WHITE WITH THEIR "
      + "HEADS BOWED, which is the number this shot has always had. ⚠️ NOTHING HAS CHANGED SINCE "
      + "SHOT ONE. Hold on it.",
    u: ["အဲဒီအချိန်မှ လယ်ကွင်းအလယ်မှာ ကျွန်တော် ပထမနေ့က မြင်ခဲ့တဲ့ မင်္ဂလာဆောင်ကို ပြန်သတိရတယ်။",
        "စားပွဲပတ်လည်မှာ မခင်သီတာတစ်ယောက်တည်း မဟုတ်ဘူး။ လူတွေအများကြီး ထိုင်နေခဲ့ကြတာ။",
        "သူတို့က သူမရဲ့ မင်္ဂလာဧည့်သည်တွေ မဟုတ်ဘူး။",
        "အဲဒီရေတွင်းထဲမှာ ပျောက်နေခဲ့တဲ့လူတွေ။"] },
];

/** Short, because the shot body is the part worth reading. */
const CONT =
  "Continuity: the living people in this film are ordinary and unharmed. The dead are pale — Ma "
  + "Khin Thida chalk-white with dark plum lips and clean wedding clothes, Ko Htet Min grey-white "
  + "and soaked and clay-stained — and their skin is whole, smooth and unbroken everywhere. The "
  + "wedding guests keep their heads bowed and their faces hidden except in the one shot that "
  + "says otherwise. Everyone in frame is physically whole.";

const STYLE =
  "Rural Myanmar, present day. Photorealism, 16:9, 35mm grain, level camera, natural depth of "
  + "field. Clean neutral colour. Every place is an ordinary working village and every object is "
  + "an ordinary object. One still instant. Surfaces are blank of writing except where a shot "
  + "names it.";

const TIME = {
  day: "TIME: DAYTIME, OVERCAST. Flat even grey daylight, no sun and no strong shadows.",
  night: "TIME: NIGHT IN OPEN COUNTRY. Faint starlight only, no moon — enough to read shapes and "
    + "edges and no more. The air is clear and still.",
  dark: "TIME: INSIDE A SHUTTERED HOUSE AT NIGHT. One thin line of light escapes between the "
    + "shutter boards and there is nothing else — the room falls away into black around it.",
  warm: "TIME: A WARM DAYLIT MEMORY, SEVEN YEARS EARLIER. Bright green sunlight, saturated and "
    + "alive — visibly a different day and a different world from the present-day shots.",
  rain: "TIME: NIGHT IN HEAVY RAIN. Rain falling hard and visible, everything soaked and running, "
    + "faint light only.",
};

/** Which clock each shot sits on, by title. Everything unlisted is overcast day. */
const AT = {
  dark: new Set(["A Bride Died in This Village", "She Never Believed He Left Her",
    "One Strike on a Gong", "Just Listen", "Maung", "The Gate Moved",
    "If She Looks Back, That's It", "She Knew His Name", "The Groom Was My Brother",
    "Two Years Later He Found Out", "She Was Already Dead", "She Has Been Looking Seven Years",
    "One Knock", "Tell Her", "Seven Years and You Never Told Her", "Where Is He",
    "We Have to Go Out"]),
  night: new Set(["From That Day the Field Changed", "The Groom's Chair Is Always Empty",
    "Waiting for Her Groom to Come Back", "Many Feet on the Lane", "They Were All Standing There",
    "Her Face Up Close", "She Did Nothing to Me", "Come With Me", "Grass Grown Over It",
    "They Stood Around and Waited", "The Smell That Came Up", "He Did Not Leave You",
    "She Reached Down", "A Hand Came Up", "He Came Out", "He Smiled at Her", "I Was Late",
    "I'm Sorry, Brother", "Her Face Went Cold", "I Was Afraid You'd Come Back",
    "They All Raised Their Heads", "I Won't Take You", "Living With It Is Longer",
    "They Walked Into the Field Together", "The Further They Went, the Fainter",
    "One White Flower Left", "They Put Him in the Old Well", "They Caught Him on the Track",
    "The First Night She Would Not Eat", "Even the Dogs Went Quiet", "He Shut Everything"]),
  rain: new Set(["The Second Night It Rained", "She Watched the Road All Night"]),
  warm: new Set(["They Were Going to Marry", "On the Morning He Vanished",
    "She Believed He Would Come", "She Would Not Come Home", "I Can't Do This Wedding",
    "It Was Not That He Stopped Loving Her", "I'll Hide Two Days"]),
};

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = AT.rain.has(s.t) ? TIME.rain
    : AT.warm.has(s.t) ? TIME.warm
    : AT.dark.has(s.t) ? TIME.dark
    : AT.night.has(s.t) ? TIME.night
    : TIME.day;
  s.cont = CONT;
  s.style = STYLE;
});

export { CONT, STYLE };
