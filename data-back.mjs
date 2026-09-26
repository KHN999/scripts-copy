/**
 * အမေ့ကို ပြန်ပေး — GIVE MOTHER BACK
 *
 * Board for zombie.txt.
 *
 *   1. ⚠️ THE DEAD ARE NOT ZOMBIES AND NOTHING IS EATEN. The script says it
 *      outright — they bite nobody and eat nobody. They are people who have
 *      been lying in the earth: grey-dry skin, soil worked into every crease,
 *      burial clothes stained, arms held stiff, heads tilted. ⚠️ NOTHING ON ANY
 *      OF THEM IS DECAYED, OPENED OR MISSING. The horror is that they are
 *      intact and polite and will not stop asking.
 *   2. THE WRONG VOICE. A dead man's mouth opens and a woman's voice comes out
 *      of it, and later a child's. Sound cannot be photographed, so the shot is
 *      always the same: a slack open mouth on a face that is doing nothing
 *      else. Never mime the speaker, never put a second face anywhere.
 *   3. ⚠️ THE SCRATCHES ARE THE FILM. Fingernail marks covering the underside
 *      of a cellar door, layered in every direction, made from below by four
 *      people over some hours. That is the only image that has to land, and it
 *      is a piece of wood. Everything else can be understated.
 *   4. THE REMAINS ARE NEVER ITEMISED. Four people died in that cellar and
 *      three were children. The board never describes a child's remains: the
 *      cellar is a lamp beam, a scratched door and shapes at the edge of the
 *      light, and the funeral is white cloth bundles. This is both the decent
 *      choice and the only one that renders.
 *   5. MA THÉ IS AN ORDINARY GIRL. At the end she appears as herself and she is
 *      a ten-year-old in old clothes with dirt under her nails. No pallor, no
 *      floating, no glow. She smiles and says thank you, and then says the line
 *      that undoes the ending.
 *   6. NOBODY IS EVER SHOWN BURNING. The fire is twenty years in the past and
 *      is never depicted — only the bare patch of dark earth where the house
 *      stood.
 */

export const CAST = [
  { name: "ထက်အောင်", en: "Htet Aung — the narrator, twenty-seven",
    prompt: "A Burmese man of twenty-seven, lean and sun-darkened, short black hair, a plain "
      + "short-sleeved shirt over a cotton paso, rubber slippers. A village man who works "
      + "outdoors — strong hands, ordinary clothes, nothing notable about him. ⚠️ HE IS "
      + "PHYSICALLY UNHARMED IN EVERY SHOT of this film: clear skin, both eyes bright, ordinary "
      + "warm colour." },
  { name: "ဦးလေးမြင့်", en: "U Lay Myint — the uncle, about fifty-eight",
    prompt: "A Burmese man of about fifty-eight, wiry and weathered, deeply lined face, "
      + "close-cropped grey hair, a faded checked paso and a thin long-sleeved shirt, bare feet "
      + "or worn slippers. ⚠️ HE CARRIES SOMETHING HE HAS NOT SAID FOR TWENTY YEARS and it shows "
      + "as tiredness rather than menace. Ordinary, unharmed, entirely human." },
  { name: "ကိုကျော်သိန်း", en: "Ko Kyaw Thein — the first to come back, about thirty-five",
    prompt: "A Burmese man of about thirty-five, solidly built, short black hair. ⚠️ HE IS DEAD "
      + "AND IT SHOWS ONLY IN COLOUR, DRYNESS AND EARTH: his skin is a flat grey-brown drained of all "
      + "warmth, his lips are the same grey as the rest of his face, his eyes are "
      + "open, dull and unfocused, and ⚠️ FINE PALE SOIL IS WORKED INTO EVERY CREASE — the "
      + "corners of his eyes, his knuckles, under his fingernails, the folds of his neck. He "
      + "wears a plain burial paso and shirt, stiff with dried mud down one side. ⚠️ HIS SKIN IS "
      + "WHOLE AND SMOOTH EVERYWHERE — unbroken, unmarked, nothing decayed, nothing missing, "
      + "nothing opened. He is a buried man who has walked out of the ground and nothing worse "
      + "than that.",
    pose: "The subject stands facing the camera square on, full figure in frame, arms hanging "
      + "slightly stiff at his sides, head tilted a little to one side, expression blank" },
  { name: "ဒေါ်ရီရီ", en: "Daw Yi Yi — the second, about sixty-five, three years buried",
    prompt: "A Burmese woman of about sixty-five, small and thin, grey hair pulled back. ⚠️ SHE "
      + "IS DEAD IN EXACTLY THE SAME REGISTER AS KO KYAW THEIN: flat grey-brown skin with no "
      + "warmth, grey lips, open dull eyes, and fine pale soil worked into every crease and "
      + "under the nails. An old faded blouse and htamein, bare feet, ⚠️ A DUSTING OF DRY EARTH "
      + "AROUND HER MOUTH AND CHIN. ⚠️ HER SKIN IS WHOLE AND SMOOTH EVERYWHERE — nothing decayed "
      + "and nothing missing, despite three years in the ground. She looks dried and dusty, not "
      + "rotted.",
    pose: "The subject stands facing the camera square on, full figure in frame, arms hanging "
      + "slightly stiff at her sides, head tilted a little to one side, expression blank" },
  { name: "မခင်မာ", en: "Ma Khin Ma — Ko Kyaw Thein's wife, about thirty-two",
    prompt: "A Burmese woman of about thirty-two, ordinary and tired, black hair tied back, a "
      + "plain blouse and htamein. Recently widowed — she is grieving, not frightening. ⚠️ Whole "
      + "and unharmed throughout." },
  { name: "မသဲ", en: "Ma Thé — the girl, ten years old",
    prompt: "A Burmese girl of exactly ten, small and thin, long black hair loose and slightly "
      + "tangled, a faded old-fashioned cotton dress, bare feet. ⚠️ SHE LOOKS LIKE AN ORDINARY "
      + "LIVING CHILD — normal warm skin, clear eyes, no pallor, nothing transparent, nothing "
      + "glowing, feet flat on the ground. The only things out of place are ⚠️ DARK SOIL PACKED "
      + "UNDER HER FINGERNAILS AND GROUND INTO HER FINGERTIPS, and a stillness children do not "
      + "usually have. ⚠️ SHE IS NEVER FRIGHTENING TO LOOK AT and is whole and well in every shot." },
  { name: "မရွှေရင်", en: "Ma Shwe Yin — the mother, in memory only, about thirty-five",
    prompt: "A Burmese woman of about thirty-five with a calm steady face, black hair in a simple "
      + "knot, a worn longyi and a plain blouse, a cloth bag of dried roots and leaves over one "
      + "shoulder. ⚠️ SHE APPEARS ONLY IN WARM DAYLIT MEMORY IMAGES AND IS ALWAYS ALIVE, WELL "
      + "AND UNHARMED — healthy colour, clean clothes, an ordinary village herbalist going about "
      + "her day. ⚠️ She is never shown dead, never shown frightened and never shown in the "
      + "cellar." },
];

export const PROPS = [
  { name: "အဖုံးအောက်က ခြစ်ရာ", en: "The scratched underside of the cellar door",
    prompt: "⚠️ THE MOST IMPORTANT IMAGE IN THIS FILM, AND IT IS ONLY A PIECE OF WOOD. The "
      + "underside of an old heavy timber trapdoor, photographed square on and filling the frame "
      + "in raking lamplight. ⚠️ THE WHOLE LOWER HALF OF IT IS COVERED IN FINGERNAIL SCRATCHES — "
      + "dense clusters of fine parallel lines running in many different directions, layered over "
      + "one another, some short and frantic and some dragged the full width of a plank. ⚠️ SOME "
      + "SETS ARE PLAINLY SMALLER THAN THE OTHERS. Pale splintered wood shows inside the deepest "
      + "marks. ⚠️ THE FRAME CONTAINS BARE TIMBER ONLY — wood, dust and lamplight." },
  { name: "လက်ကောက်", en: "The child's bracelet",
    prompt: "A small thin silver-coloured child's bangle, plain and slightly bent out of round, "
      + "dulled and tarnished, with dry pale soil caught in its surface. Photographed lying on a "
      + "square of clean white cloth in daylight, filling the frame. Ordinary, cheap, much worn." },
  { name: "မီးအိမ်", en: "The oil lamp",
    prompt: "An old glass-chimney kerosene hand lamp with a brass base and a soot-darkened "
      + "chimney, lit, held at arm's length. Photographed against darkness so the flame is the "
      + "only light in the image. Ordinary and well used." },
];

export const LOCS = [
  { name: "ရွာလမ်း", en: "The village street at night — master plate",
    prompt: "THE MASTER PLATE FOR THE VILLAGE. A small remote Myanmar village at the foot of a "
      + "forested hill: a single packed-earth lane running between maybe fifteen low timber and "
      + "bamboo houses raised on short stilts, thatch and corrugated roofs, a few fenced kitchen "
      + "gardens, one shared water pot stand. Photographed along the length of the lane at chest "
      + "height at night. ⚠️ THE ONLY LIGHT IS WHAT COMES OUT OF THE HOUSES — small warm squares "
      + "of lamplight from doorways and shutters falling in patches on the earth, and everything "
      + "between them dark. ⚠️ AN ORDINARY POOR VILLAGE, clean and lived in, nothing ruined and "
      + "nothing sinister. Empty of people for this plate." },
  { name: "ရွာအဝင်လမ်း", en: "The road into the village at night",
    prompt: "A narrow packed-earth road running out of a village into darkness between fields, "
      + "photographed at chest height looking away from the houses. Scrub and tall grass at the "
      + "verges, the black line of forested hills behind. ⚠️ ORDINARY NIGHT DARKNESS with a "
      + "little starlight and clear still air. Empty for this plate." },
  { name: "သင်္ချိုင်း", en: "The village graveyard",
    prompt: "A small village burial ground on a slope at the edge of the forest: low earth "
      + "mounds, a scatter of simple painted wooden grave markers leaning at angles, dry grass, "
      + "a few old trees. Daylight, overcast. ⚠️ TIDY AND ORDINARY — a place that is visited and "
      + "kept, not abandoned or ruined. Empty of people for this plate." },
  { name: "ဘုန်းကြီးကျောင်း", en: "The monastery",
    prompt: "A small rural Myanmar monastery at night: a raised timber hall with a tiered roof, "
      + "a short flight of steps, an open prayer hall lit warmly from within, and ⚠️ A LARGE "
      + "BRONZE BELL hanging in a simple open frame beside the steps. Dark trees behind. Calm, "
      + "orderly and unfrightening. Empty of people for this plate." },
  { name: "တောစပ်", en: "The forest edge where the house stood",
    prompt: "The edge of thick forest meeting an overgrown clearing. ⚠️ IN THE MIDDLE OF THE "
      + "CLEARING IS A BARE RECTANGULAR PATCH OF DARK EARTH where a small house once stood — "
      + "nothing built, nothing charred, no ruin and no debris, just ground that has stayed "
      + "darker and barer than everything around it while scrub has grown up to its edges. "
      + "Overcast daylight. Empty of people for this plate." },
  { name: "မြေအောက်ခန်း", en: "The root cellar",
    prompt: "A small root cellar cut into the earth: packed soil walls, a low rough timber "
      + "ceiling with a square trapdoor set into it, and old plank shelving along one wall "
      + "holding the dust-covered remains of bundled dried roots and leaves. Photographed from "
      + "inside, lit only by a hand lamp. ⚠️ THE SPACE IS ABOUT THE SIZE OF A SMALL BEDROOM AND "
      + "THE CEILING IS LOW ENOUGH TO TOUCH. Cold, dry and airless. Empty for this plate." },
  { name: "ပဲခင်း", en: "The bean field outside the village",
    prompt: "A flat field of low bean plants in rows outside a village at first light, the "
      + "forested hill behind it, dew on the leaves. Grey-blue pre-dawn light. Ordinary "
      + "agricultural land. Empty of people for this plate." },
  { name: "ကိုကျော်သိန်းအိမ်", en: "Ko Kyaw Thein's house, from the lane",
    prompt: "One small raised timber village house seen from the lane at night: a short ladder "
      + "stair up to a doorway, a plank door standing open with warm lamplight coming out of it, "
      + "a low railed veranda, shutters. ⚠️ AN ORDINARY LIVED-IN FAMILY HOUSE — swept, tidy, "
      + "sandals at the foot of the steps. Empty of people for this plate." },
];

/**
 * One composition per shot, stated first and alone.
 *
 * `dead` is the spine: twelve shots of people standing in the lane who should
 * not be there. `mouth` is the second: a slack open mouth on a blank face,
 * which is the only honest way to photograph a voice that belongs to somebody
 * else. Both are fixed here so that the night the whole graveyard arrives, the
 * audience already knows exactly what they are looking at.
 */
const CAM = {
  dead: 'ONE OF THE DEAD, STANDING. Camera at chest height a few paces in front of the figure, full body in frame, the village lane behind them. ⚠️ Reproduce this framing identically every time it recurs.',
  mouth: 'THE MOUTH. Tight insert on a dead face from the nose down — the slack open mouth filling most of the frame, the chin and the throat. ⚠️ The rest of the face stays above the top edge. Reproduce this framing identically every time it recurs.',
  lane: 'IN THE VILLAGE LANE. Camera at chest height along the lane as in the master plate.',
  road: 'THE ROAD IN. Camera at chest height on the earth road looking out of the village.',
  house: 'AT THE HOUSE. Camera at chest height in the lane facing the open doorway and its steps.',
  htet: 'CLOSE ON HTET AUNG. Camera at his eye height, head-and-shoulders crop.',
  myint: 'CLOSE ON U LAY MYINT. Camera at his eye height, head-and-shoulders crop.',
  the: 'CLOSE ON MA THÉ. Camera lowered to the girl’s eye height, head-and-shoulders crop.',
  grave: 'IN THE GRAVEYARD. Camera at chest height among the grave mounds.',
  cellar: 'INSIDE THE CELLAR. Camera at crouching height inside the earth room, the low ceiling close above.',
  trapdoor: 'THE TRAPDOOR UNDERSIDE. Insert square on to the underside of the timber trapdoor, the boards filling the frame in raking lamplight. ⚠️ Reproduce this framing identically every time it recurs.',
  monastery: 'AT THE MONASTERY. Camera at chest height in the compound.',
  clearing: 'THE CLEARING. Camera at chest height at the forest edge facing the bare patch of earth.',
  field: 'THE BEAN FIELD. Camera at chest height among the rows.',
  ground: 'LOW ON THE GROUND. Camera on the earth itself, a few inches above it.',
  memory: 'A WARM DAYLIT MEMORY. Camera at chest height, twenty years earlier, everything green and bright.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
  wide: 'WIDE. Camera at chest height far enough back to hold the whole place.',
};

export const SCENES = [
  // ── I · THE FIRST ONE BACK ────────────────────────────────────────────────
  { t: "The First One Back", l: "ရွာအဝင်လမ်း", k: "road",
    g: "ပထမဆုံး ပြန်လာတဲ့လူက ကိုကျော်သိန်း။ ပြဿနာက — သူ့ကို မနေ့မနက်ကပဲ သင်္ဂြိုဟ်ထားတာ။",
    p: "The earth road into the village at night, empty, running away from camera into darkness "
      + "between the fields. ⚠️ NOBODY IS IN SHOT. Ordinary night, a little starlight, the black "
      + "line of the hills behind.",
    u: ["ပထမဆုံး ပြန်လာတဲ့လူက ကိုကျော်သိန်း။",
        "ပြဿနာက — သူ့ကို မနေ့မနက်ကပဲ ကျွန်တော်တို့ သင်္ဂြိုဟ်ထားတာ။"] },

  { t: "Walking In Alone", l: "ရွာအဝင်လမ်း", k: "road", w: ["ကိုကျော်သိန်း"],
    g: "အဲဒီည ရွာအဝင်လမ်းမှာ သူ တစ်ယောက်တည်း လမ်းလျှောက်လာတယ်။ ခေါင်းငုံ့ထားတယ်။",
    p: "A man walking towards camera along the dark earth road, still a good way off and small in "
      + "frame, ⚠️ HIS HEAD DOWN AND HIS FACE NOT YET READABLE. His paso is caked with dried mud "
      + "up one side. He is alone on the road.",
    u: ["အဲဒီည ရွာအဝင်လမ်းမှာ သူ တစ်ယောက်တည်း လမ်းလျှောက်လာတယ်။",
        "ခေါင်းငုံ့ထားတယ်။ ပုဆိုးက ရွှံ့တွေ ကပ်နေတယ်။"] },

  { t: "One Leg Dragged", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "ground", w: ["ကိုကျော်သိန်း"],
    g: "ခြေတစ်ဖက်က နည်းနည်းဆွဲနေတယ်။",
    p: "Camera low on the earth road: two bare feet walking towards it, ⚠️ THE RIGHT FOOT LIFTING "
      + "CLEANLY AND THE LEFT ONE DRAGGING, its toes trailing a shallow line in the dust behind "
      + "it. Dried mud up both ankles. Nothing above the knee is in shot.",
    u: ["ခြေတစ်ဖက်က နည်းနည်းဆွဲနေတယ်။"] },

  { t: "Who Is It", l: "ရွာအဝင်လမ်း", k: "myint", w: ["ဦးလေးမြင့်", "ထက်အောင်"],
    g: "ကျွန်တော်နဲ့ ဦးလေးမြင့်က တဲရှေ့မှာ ထိုင်နေတုန်း မြင်လိုက်တာ။ ဦးလေးမြင့်က အရင်ထရပ်တယ်။ “ဘယ်သူလဲ”",
    p: "U Lay Myint half risen from a low stool outside a hut, one hand still on the frame of the "
      + "doorway, calling out towards the road. Htet Aung is still seated beside him and turning "
      + "to look. Warm lamplight from the doorway on both of them, darkness beyond.",
    u: ["ကျွန်တော်နဲ့ ဦးလေးမြင့်က တဲရှေ့မှာ ထိုင်နေတုန်း မြင်လိုက်တာ။",
        "ဦးလေးမြင့်က အရင်ထရပ်တယ်။ “ဘယ်သူလဲ”",
        "ဒါပေမယ့် လူက ဘာမှ ပြန်မဖြေဘူး။"] },

  { t: "We Saw the Face", c: [[3, "bigstinger"]], l: "ရွာအဝင်လမ်း", k: "dead", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ နီးလာလေလေ ကျွန်တော်တို့ တိတ်သွားလေလေ။ မျက်နှာကို မြင်သွားလို့။ ကိုကျော်သိန်း။ သေပြီးသား ကိုကျော်သိန်း။",
    p: "OCCURRENCE 1 OF 12 OF THE STANDING DEAD. Establish it precisely. Ko Kyaw Thein close now "
      + "and full length in frame on the dark road: ⚠️ FLAT GREY-BROWN SKIN WITH NO WARMTH IN IT, "
      + "grey lips, eyes open and dull, and ⚠️ FINE PALE SOIL WORKED INTO EVERY CREASE of his "
      + "face and hands and under his nails. Burial clothes stiff with dried mud down one side. "
      + "⚠️ HIS SKIN IS WHOLE AND SMOOTH EVERYWHERE — nothing decayed, nothing missing.",
    u: ["နီးလာလေလေ ကျွန်တော်တို့နှစ်ယောက်လုံး တိတ်သွားလေလေ။",
        "မျက်နှာကို မြင်သွားလို့။",
        "ကိုကျော်သိန်း။ သေပြီးသား ကိုကျော်သိန်း။"] },

  { t: "Looking Past Us", l: "ရွာလမ်း", k: "insert", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ မျက်လုံးတွေ ဖွင့်ထားတယ်။ ဒါပေမယ့် ကျွန်တော်တို့ကို ကြည့်နေတာ မဟုတ်ဘူး။ နောက်က တစ်ခုခုကို ကြည့်နေသလို။",
    p: "Tight insert on Ko Kyaw Thein's eyes, open and dry, the lids not blinking. ⚠️ THEY ARE "
      + "FOCUSED WELL BEYOND THE CAMERA — aimed past the lens at something much further away, so "
      + "that being looked at and not being seen happen in the same image. Soil in the corners of "
      + "both eyes.",
    u: ["သူ ရွာလမ်းအလယ်မှာ ရပ်တယ်။ ဖြည်းဖြည်း ခေါင်းမော့လာတယ်။",
        "မျက်လုံးတွေ ဖွင့်ထားတယ်။ ဒါပေမယ့် ကျွန်တော်တို့ကို ကြည့်နေတာ မဟုတ်ဘူး။",
        "ကျွန်တော်တို့နောက်က တစ်ခုခုကို ကြည့်နေသလို။"] },

  { t: "A Woman's Voice", c: [[2, "bigstinger"]], l: "ရွာလမ်း", k: "mouth", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ သူ့ပါးစပ်ကနေ အသံတစ်ခု ထွက်လာတယ်။ ကိုကျော်သိန်းရဲ့အသံ မဟုတ်ဘူး။ မိန်းမတစ်ယောက်ရဲ့အသံ။",
    p: "OCCURRENCE 1 OF 6 OF THE MOUTH. Establish it precisely. A dead man's face from the nose "
      + "down, filling the frame: ⚠️ THE MOUTH HANGS OPEN, SLACK AND UNSHAPED, the grey lips "
      + "parted without tension and the jaw simply dropped. ⚠️ IT IS NOT FORMING A WORD AND NOT "
      + "STRAINING — an open mouth with a voice coming out of it that is doing none of the work. "
      + "Dry grey chin and throat, soil in the creases of the neck.",
    u: ["ပြီးတော့ သူ့ပါးစပ်ကနေ အသံတစ်ခု ထွက်လာတယ်။",
        "ကိုကျော်သိန်းရဲ့အသံ မဟုတ်ဘူး။ မိန်းမတစ်ယောက်ရဲ့အသံ။",
        "“နောက်တစ်ယောက် ဘယ်မှာလဲ”"] },

  { t: "One Is Still Missing", c: [[2, "bigstinger"]], l: "ရွာလမ်း", k: "dead", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ ကိုကျော်သိန်းက ခေါင်းကို တစ်ဖက်စောင်းတယ်။ “တစ်ယောက် မပြည့်သေးဘူး”",
    p: "OCCURRENCE 2 OF 12. The same framing, and ⚠️ HIS HEAD HAS TIPPED FAR OVER TO ONE SIDE — "
      + "further than a neck comfortably goes — while his shoulders and body stay square on to "
      + "camera and perfectly still. Everything else about him is unchanged.",
    u: ["ဦးလေးမြင့် နောက်ဆုတ်သွားတယ်။ ကျွန်တော်လည်း တောင့်သွားတယ်။",
        "ကိုကျော်သိန်းက ခေါင်းကို တစ်ဖက်စောင်းတယ်။",
        "“တစ်ယောက် မပြည့်သေးဘူး” ပြီးတော့ ရွာထဲကို ဆက်လျှောက်သွားတယ်။"] },

  // ── II · HTET AUNG ────────────────────────────────────────────────────────
  { t: "My Name Is Htet Aung", l: "ရွာလမ်း", k: "htet", w: ["ထက်အောင်"],
    g: "ကျွန်တော့်နာမည် ထက်အောင်။ အသက်နှစ်ဆယ့်ခုနစ်။ ဒီရွာမှာ မွေးပြီး ဒီရွာမှာပဲ ကြီးတာ။",
    p: "Close on Htet Aung in the lane at night, lamplight from a doorway on one side of his "
      + "face, looking off after something that has gone past him. An ordinary young village man, "
      + "unharmed and healthy.",
    u: ["ကျွန်တော့်နာမည် ထက်အောင်။ အသက်နှစ်ဆယ့်ခုနစ်။",
        "ဒီရွာမှာ မွေးပြီး ဒီရွာမှာပဲ ကြီးတာ။"] },

  { t: "A Small Village", l: "ရွာလမ်း", k: "wide",
    g: "ကျွန်တော်တို့ရွာက တောင်ခြေအနီးမှာ ရှိတယ်။ အိမ်တွေ မများဘူး။ လယ်နဲ့ တောကြားထဲက ရွာသေးသေး။",
    p: "The village lane at night as in the master plate: fifteen or so low stilted houses along "
      + "one packed-earth lane, small warm squares of lamplight falling from doorways onto the "
      + "ground, the dark forested hill behind. ⚠️ NOBODY IN SHOT. Poor, tidy and entirely "
      + "ordinary.",
    u: ["ကျွန်တော်တို့ရွာက တောင်ခြေအနီးမှာ ရှိတယ်။",
        "အိမ်တွေ မများဘူး။ လယ်နဲ့ တောကြားထဲက ရွာသေးသေး။"] },

  { t: "He Died Yesterday", l: "သင်္ချိုင်း", k: "grave",
    g: "ကိုကျော်သိန်းက မနေ့က သေသွားတာ။ အဖျားပြင်းတာ နှစ်ရက်လောက်ပဲ ရှိတယ်။ ဆေးခန်းမရောက်ခင် သေသွားတယ်။",
    p: "⚠️ A DAYTIME MEMORY FROM THE MORNING BEFORE. A fresh earth mound in the village burial "
      + "ground under overcast light, the soil still dark and turned, a new unpainted wooden "
      + "marker at its head, a few wilting flowers laid on it. ⚠️ THE GRAVE IS CLOSED AND INTACT "
      + "and nobody is in shot.",
    u: ["ကိုကျော်သိန်းက မနေ့က သေသွားတာ။ အဖျားပြင်းတာ နှစ်ရက်လောက်ပဲ ရှိတယ်။",
        "ဆေးခန်းမရောက်ခင် သေသွားတယ်။ ပုံမှန်သင်္ဂြိုဟ်ခဲ့ကြတယ်။"] },

  { t: "I Was There Until the Earth Went On", l: "သင်္ချိုင်း", k: "grave", w: ["ထက်အောင်"],
    g: "အကုန်လုံး မြင်ခဲ့ကြတယ်။ အလောင်းကို မြေဖို့တဲ့အချိန်ထိ ကျွန်တော် ရှိခဲ့တယ်။ ဒါကြောင့် သူ ပြန်လာတာက ဘယ်လိုမှ မဖြစ်နိုင်ဘူး။",
    p: "⚠️ THE SAME DAYTIME MEMORY. A dozen villagers standing round the closed grave in overcast "
      + "daylight with Htet Aung among them, one man still holding a spade, the earth already "
      + "heaped and patted down. ⚠️ AN ORDINARY COMPLETED BURIAL — quiet, respectful, nothing "
      + "open and nothing visible but soil.",
    u: ["အကုန်လုံး မြင်ခဲ့ကြတယ်။ အလောင်းကို မြေဖို့တဲ့အချိန်ထိ ကျွန်တော် ရှိခဲ့တယ်။",
        "ဒါကြောင့် အဲဒီည သူ ပြန်လာတာက ဘယ်လိုမှ မဖြစ်နိုင်ဘူး။"] },

  { t: "That Is Not Ko Kyaw Thein Anymore", c: [[3, "stinger"]], l: "ရွာလမ်း", k: "myint",
    w: ["ဦးလေးမြင့်", "ထက်အောင်"],
    g: "⚠️ ဦးလေးမြင့် ကျွန်တော့်ကို စိုက်ကြည့်တယ် — “အဲဒါ ကိုကျော်သိန်း မဟုတ်တော့ဘူး”",
    p: "U Lay Myint gripping Htet Aung's upper arm in the dark lane and holding his eye, close "
      + "and urgent, his face lit on one side by a doorway. ⚠️ HE IS FRIGHTENED AND CERTAIN AT "
      + "THE SAME TIME — a man who already knows something. Htet Aung is pulling his arm free.",
    u: ["ဦးလေးမြင့်က ကျွန်တော့်လက်မောင်းကို ဖမ်းတယ်။ “နောက်မလိုက်နဲ့”",
        "“ရွာထဲဝင်သွားပြီလေ” “ဝင်ပါစေ” “အိမ်တွေရှိတယ်”",
        "ဦးလေးမြင့် ကျွန်တော့်ကို စိုက်ကြည့်တယ်။ “အဲဒါ ကိုကျော်သိန်း မဟုတ်တော့ဘူး”"] },

  // ── III · AT HIS OWN HOUSE ────────────────────────────────────────────────
  { t: "A Scream From the Village", l: "ရွာလမ်း", k: "lane", w: ["ထက်အောင်"],
    g: "အဲဒီအချိန် ရွာထဲကနေ အော်သံထွက်လာတယ်။ မိန်းမတစ်ယောက်။ ပြီးတော့ ကလေးငိုသံ။",
    p: "Htet Aung already running away from camera down the dark lane towards the lit doorways, "
      + "seen from behind, his slippers left where he was sitting. ⚠️ DOORWAYS ALONG THE LANE ARE "
      + "OPENING and figures are appearing in the lamplight in them.",
    u: ["အဲဒီအချိန် ရွာထဲကနေ အော်သံထွက်လာတယ်။",
        "မိန်းမတစ်ယောက်။ ပြီးတော့ ကလေးငိုသံ။",
        "ကျွန်တော် မစဉ်းစားတော့ဘူး။ ပြေးသွားတယ်။"] },

  { t: "Standing at His Own Door", l: "ကိုကျော်သိန်းအိမ်", k: "house",
    w: ["ကိုကျော်သိန်း", "မခင်မာ"],
    g: "ကိုကျော်သိန်း သူ့အိမ်ရှေ့မှာ ရပ်နေတယ်။ သူ့မိန်းမ မခင်မာက တံခါးအတွင်းမှာ။ သားလေးနှစ်ယောက်ကို နောက်မှာထားတယ်။",
    p: "The lit doorway of a small stilted house at the top of its steps, Ma Khin Ma standing "
      + "inside the frame of it with both arms held back behind her shielding two small children, "
      + "and ⚠️ KO KYAW THEIN STANDING AT THE FOOT OF THE STEPS BELOW, full length, looking up. "
      + "Warm light from the door falls on him.",
    u: ["ကိုကျော်သိန်း သူ့အိမ်ရှေ့မှာ ရပ်နေတယ်။",
        "သူ့မိန်းမ မခင်မာက တံခါးအတွင်းမှာ။ သားလေးနှစ်ယောက်ကို နောက်မှာထားတယ်။",
        "သူ အပြင်ထွက်ချင်တယ်။ “အကို…”"] },

  { t: "Nothing on His Face", l: "ကိုကျော်သိန်းအိမ်", k: "dead", w: ["ကိုကျော်သိန်း"],
    g: "ကိုကျော်သိန်းက သူ့မိန်းမဘက် လှည့်ကြည့်တယ်။ သူ့မျက်နှာပေါ်မှာ ဘာခံစားချက်မှ မရှိဘူး။",
    p: "OCCURRENCE 3 OF 12. The same framing, at the foot of his own steps with the lit doorway "
      + "behind camera throwing light onto him. His face is turned up towards it. ⚠️ THERE IS NO "
      + "EXPRESSION ON IT AT ALL — not cold, not angry, not sad; the muscles are simply not doing "
      + "anything, the way a face at rest does nothing.",
    u: ["ကျွန်တော် ချက်ချင်း အော်တယ်။ “မထွက်နဲ့!” မခင်မာ ရပ်သွားတယ်။",
        "ကိုကျော်သိန်းက သူ့မိန်းမဘက် လှည့်ကြည့်တယ်။",
        "သူ့မျက်နှာပေါ်မှာ ဘာခံစားချက်မှ မရှိဘူး။"] },

  { t: "Elder Brother, It's Me", l: "ကိုကျော်သိန်းအိမ်", k: "insert", w: ["မခင်မာ"],
    g: "မခင်မာက ငိုနေတယ်။ “အကို… ကျွန်မပါ”",
    p: "Close on Ma Khin Ma in the doorway, crying openly, one hand gripping the door frame and "
      + "the other still held back behind her. ⚠️ SHE IS TRYING TO REACH SOMEONE SHE LOVES and "
      + "her face is grief rather than fear. Warm lamplight from inside the house.",
    u: ["မခင်မာက ငိုနေတယ်။ “အကို… ကျွန်မပါ”",
        "ကိုကျော်သိန်း တစ်လှမ်းရှေ့တိုးတယ်။"] },

  { t: "Earth Fell From His Feet", l: "ကိုကျော်သိန်းအိမ်", k: "ground",
    w: ["ကိုကျော်သိန်း"],
    g: "⚠️ ခြေထောက်အောက်ကနေ ရွှံ့နဲ့ မြေတွေ ကျနေတယ်။",
    p: "Camera low at the foot of the wooden steps: one bare grey foot planted on the bottom "
      + "tread, and ⚠️ DRY EARTH AND CRUMBS OF PACKED SOIL FALLING AWAY FROM IT onto the ground, "
      + "a small scatter already collected around the step. Lamplight from above.",
    u: ["ခြေထောက်အောက်ကနေ ရွှံ့နဲ့ မြေတွေ ကျနေတယ်။",
        "“မလာနဲ့!” မခင်မာ ထပ်အော်တယ်။ ကိုကျော်သိန်း ရပ်သွားတယ်။"] },

  { t: "You Are Not the One", c: [[2, "stinger"]], l: "ကိုကျော်သိန်းအိမ်", k: "mouth", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ သူ့ပါးစပ်ကနေ မိန်းမအသံ ထွက်လာတယ် — “မင်းလူ မဟုတ်ဘူး”",
    p: "OCCURRENCE 2 OF 6 OF THE MOUTH. The identical framing — the slack open mouth filling the "
      + "frame, the jaw simply dropped, the grey lips unshaped and not straining. ⚠️ NOTHING "
      + "ABOUT THIS FRAMING HAS CHANGED SINCE THE ROAD. Warm doorway light on it now instead of "
      + "starlight.",
    u: ["ကျွန်တော် ထင်လိုက်တယ် — သူ နားလည်သေးတယ်။",
        "ပြီးတော့ သူ့ပါးစပ်ကနေ မိန်းမအသံ ထွက်လာတယ်။",
        "“မင်းလူ မဟုတ်ဘူး”"] },

  { t: "He Pointed at the Boy", c: [[1, "bigstinger"]], l: "ကိုကျော်သိန်းအိမ်", k: "house",
    w: ["ကိုကျော်သိန်း", "မခင်မာ"],
    g: "⚠️ ကိုကျော်သိန်းက သူ့သားအကြီးကို လက်ညှိုးထိုးတယ်။ “အဲဒီကောင်” … “ယူရမယ်”",
    p: "From the lane: Ko Kyaw Thein at the foot of the steps with ⚠️ ONE ARM RAISED STRAIGHT "
      + "AND A SINGLE FINGER EXTENDED towards the doorway above him, everything else about him "
      + "motionless. In the doorway Ma Khin Ma has gone rigid and moved further in front of the "
      + "older child. ⚠️ THE CHILDREN ARE BEHIND HER AND MOSTLY OUT OF SIGHT.",
    u: ["ကိုကျော်သိန်းက သူ့သားအကြီးကို လက်ညှိုးထိုးတယ်။ “အဲဒီကောင်”",
        "ကျွန်တော် ရင်ထဲ အေးသွားတယ်။ “သူ ဘာလုပ်တာလဲ”",
        "ကိုကျော်သိန်းက ကျွန်တော့်ဘက် မကြည့်ဘဲ ပြောတယ်။ “ယူရမယ်”"] },

  { t: "He Caught the Door", c: [[3, "bigstinger"]], l: "ကိုကျော်သိန်းအိမ်", k: "insert",
    w: ["ကိုကျော်သိန်း"],
    g: "⚠️ ကိုကျော်သိန်း တံခါးကို လက်တစ်ဖက်နဲ့ ဖမ်းလိုက်တယ်။ အင်အားက ပုံမှန်လူထက် အများကြီးများတယ်။",
    p: "Insert on a plank door edge: ⚠️ ONE GREY HAND CLOSED AROUND IT WITH THE FINGERTIPS SUNK "
      + "INTO THE TIMBER, the wood visibly compressed and splintering white around them. Soil "
      + "packed under every nail. A smaller hand on the other side of the door is losing its "
      + "grip.",
    u: ["မခင်မာက တံခါးပိတ်ဖို့ လုပ်တယ်။",
        "အဲဒီအချိန် ကိုကျော်သိန်း တံခါးကို လက်တစ်ဖက်နဲ့ ဖမ်းလိုက်တယ်။",
        "အင်အားက ပုံမှန်လူထက် အများကြီးများတယ်။ တံခါးကို တစ်ချက်ဆွဲတာနဲ့ မခင်မာ လဲကျသွားတယ်။"] },

  { t: "Cold as Wet Cloth", l: "ကိုကျော်သိန်းအိမ်", k: "insert",
    w: ["ထက်အောင်", "ကိုကျော်သိန်း"],
    g: "⚠️ အရမ်းအေးတယ်။ အသားကို ကိုင်တာ မဟုတ်ဘူး။ ညတစ်ညလုံး ရေထဲစိမ်ထားတဲ့ အဝတ်ထုပ်တစ်ခုကို ကိုင်ထားသလို။",
    p: "Insert on a young man's hand gripping a dead man's shoulder through a burial shirt. "
      + "⚠️ THE SHOULDER GIVES SOFTLY AND WRONGLY UNDER THE FINGERS, the cloth dented far deeper "
      + "than a shoulder should dent, like a hand closing on a bundle of soaked laundry rather "
      + "than on a body. Grey skin at the collar, soil in its folds.",
    u: ["ကျွန်တော်နဲ့ ဦးလေးမြင့် ပြေးဝင်ဖမ်းတယ်။ ကျွန်တော် ကိုကျော်သိန်းရဲ့ပခုံးကို ဆွဲတယ်။",
        "အရမ်းအေးတယ်။ အသားကို ကိုင်တာ မဟုတ်ဘူး။",
        "ညတစ်ညလုံး ရေထဲစိမ်ထားတဲ့ အဝတ်ထုပ်တစ်ခုကို ကိုင်ထားသလို။"] },

  { t: "Something Moved Behind His Eyes", c: [[2, "bigstinger"]], l: "ကိုကျော်သိန်းအိမ်", k: "insert",
    w: ["ကိုကျော်သိန်း"],
    g: "⚠️ မျက်လုံးတွေမှာ အနက်ရောင်အရာတစ်ခု လှုပ်နေတယ်။ မျက်လုံးအိမ်အတွင်းကနေ တစ်ခုခု ဖြတ်သွားသလို။",
    p: "Extreme insert on one dead eye filling the frame — the dull iris, the dry unblinking lid, "
      + "soil in the lashes. ⚠️ DEEP BEHIND THE PUPIL, A DARKER SHAPE HAS SHIFTED ACROSS: a "
      + "shadow crossing inside the eye itself, well behind the surface, as though something "
      + "turned over in there. ⚠️ The eye is otherwise completely intact and ordinary.",
    u: ["သူ ကျွန်တော့်ဘက် ဖြည်းဖြည်း လှည့်လာတယ်။",
        "မျက်လုံးတွေမှာ အနက်ရောင်အရာတစ်ခု လှုပ်နေတယ်။",
        "မျက်လုံးအိမ်အတွင်းကနေ တစ်ခုခု ဖြတ်သွားသလို။"] },

  { t: "Not You Either", l: "ကိုကျော်သိန်းအိမ်", k: "mouth", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ သူ့ပါးစပ်ကနေ မိန်းမအသံ ပြောတယ် — “မင်းမဟုတ်သေးဘူး”",
    p: "OCCURRENCE 3 OF 6 OF THE MOUTH. The identical framing again, unchanged — slack open "
      + "mouth, dropped jaw, grey unshaped lips. ⚠️ IT IS THE SAME PICTURE EVERY TIME NO MATTER "
      + "WHAT THE VOICE IS SAYING, and that is the point of it.",
    u: ["ပြီးတော့ သူ့ပါးစပ်ကနေ မိန်းမအသံ ပြောတယ်။",
        "“မင်းမဟုတ်သေးဘူး”",
        "ကျွန်တော် ဘာမှမနားလည်ဘူး။"] },

  { t: "He Did Not Feel It", l: "ကိုကျော်သိန်းအိမ်", k: "lane",
    w: ["ကိုကျော်သိန်း", "ဦးလေးမြင့်", "ထက်အောင်"],
    g: "ဦးလေးမြင့်က တုတ်နဲ့ သူ့ပခုံးကို ရိုက်တယ်။ ဒါပေမယ့် မနာဘူး။ မအော်ဘူး။",
    p: "In the lane: U Lay Myint following through with a wooden staff against the dead man's "
      + "shoulder, Htet Aung on the ground behind having been pushed down. ⚠️ KO KYAW THEIN HAS "
      + "TAKEN ONE STEP BACK AND IS OTHERWISE COMPLETELY UNMOVED — no flinch, no recoil, his face "
      + "unchanged. ⚠️ He is whole and the timber has left nothing on him.",
    u: ["နောက်တစ်စက္ကန့်မှာ သူ ကျွန်တော့်ကို တွန်းပစ်တယ်။ ကျွန်တော် ကြမ်းပြင်ပေါ် လဲကျတယ်။",
        "ဦးလေးမြင့်က တုတ်နဲ့ သူ့ပခုံးကို ရိုက်တယ်။ ကိုကျော်သိန်း နောက်တစ်လှမ်း ဆုတ်သွားတယ်။",
        "ဒါပေမယ့် မနာဘူး။ မအော်ဘူး။"] },

  { t: "He Put His Own Head Straight", c: [[1, "bigstinger"]], l: "ကိုကျော်သိန်းအိမ်", k: "dead",
    w: ["ကိုကျော်သိန်း"],
    g: "⚠️ သူ့ခေါင်းက ကျိုးသွားသလို တစ်ဖက်စောင်းသွားပြီး လက်နဲ့ ပြန်တည့်လိုက်တယ်။",
    p: "OCCURRENCE 4 OF 12. The same framing. ⚠️ HIS HEAD HAS FALLEN RIGHT OVER ONTO ONE "
      + "SHOULDER, and ⚠️ HIS OWN HAND HAS COME UP AND IS PUSHING IT BACK UPRIGHT — flat palm "
      + "against his own temple, setting his head straight the way you would straighten a "
      + "leaning post. His face is doing nothing while he does it.",
    u: ["သူ့ခေါင်းက ကျိုးသွားသလို တစ်ဖက်စောင်းသွားပြီး—",
        "လက်နဲ့ ပြန်တည့်လိုက်တယ်။"] },

  { t: "The Monastery Bell", l: "ဘုန်းကြီးကျောင်း", k: "insert",
    g: "အဲဒီအချိန် ရွာဘက်က ဘုန်းကြီးကျောင်းခေါင်းလောင်းသံ ကြားလာတယ်။ တုန်… တုန်…",
    p: "Insert on a large bronze monastery bell in its open timber frame at night, ⚠️ CAUGHT AT "
      + "THE INSTANT OF BEING STRUCK — the wooden beater against its lip, the bell's surface "
      + "sharp and still. Warm light from the prayer hall behind it. Nobody else in frame.",
    u: ["အဲဒီအချိန် ရွာဘက်က ဘုန်းကြီးကျောင်းခေါင်းလောင်းသံ ကြားလာတယ်။",
        "တုန်… တုန်… ဆိုပြီး နှစ်ချက် မြည်သွားတယ်။"] },

  { t: "He Ran, and He Was Fast", c: [[2, "stinger"]], l: "ရွာအဝင်လမ်း", k: "road", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ ကိုကျော်သိန်း ချက်ချင်း တောင့်သွားတယ်။ ပြီးတော့ လှည့်ပြီး ထွက်ပြေးသွားတယ်။ လူသေတစ်ယောက်လို့ မထင်ရအောင် မြန်တယ်။",
    p: "The dark road out of the village with Ko Kyaw Thein already well down it and running away "
      + "from camera, seen from behind and small in frame, ⚠️ HIS BODY LEANED FORWARD AND HIS "
      + "STRIDE LONG AND FAST AND ATHLETIC — nothing shambling about it, dust kicked up behind "
      + "his heels. The dragging leg is gone. He is heading for the hill.",
    u: ["ကိုကျော်သိန်း ချက်ချင်း တောင့်သွားတယ်။ သူ့မျက်လုံးထဲက အနက်ရောင်အရာက ပိုလှုပ်လာတယ်။",
        "ပြီးတော့ လှည့်ပြီး ထွက်ပြေးသွားတယ်။ လူသေတစ်ယောက်လို့ မထင်ရအောင် မြန်တယ်။",
        "ရွာအပြင်ဘက်ကို တန်းပြေးသွားတာ။ သင်္ချိုင်းဘက်ကို။"] },

  // ── IV · THE GRAVE ────────────────────────────────────────────────────────
  { t: "The Grave Was Open", c: [[2, "bigstinger"]], l: "သင်္ချိုင်း", k: "grave", w: ["ထက်အောင်", "ဦးလေးမြင့်"],
    g: "နောက်မနက် သင်္ချိုင်းကို သွားကြည့်တယ်။ မြေက ဖွင့်နေတယ်။ အတွင်းက အလောင်း မရှိတော့ဘူး။",
    p: "Two men standing at the edge of an opened grave in overcast morning light, looking down "
      + "into it. ⚠️ THE PIT IS EMPTY — bare walls of cut earth and a bare floor, nothing in it "
      + "at all. ⚠️ THE SPOIL IS HEAPED AROUND THE OUTSIDE EDGES, as though it came out from "
      + "below rather than being dug from above. The new grave marker lies knocked flat.",
    u: ["နောက်မနက် ကိုကျော်သိန်းရဲ့သင်္ချိုင်းကို သွားကြည့်တယ်။",
        "မြေက ဖွင့်နေတယ်။ အတွင်းက အလောင်း မရှိတော့ဘူး။"] },

  { t: "Three Sets of Footprints", c: [[2, "bigstinger"]], l: "သင်္ချိုင်း", k: "ground",
    g: "⚠️ မြေကြီးပေါ်မှာ ခြေရာတစ်စုံပဲ မရှိဘူး။ ခြေရာ သုံးစုံ။ တစ်စုံက ကိုကျော်သိန်းရဲ့အရွယ်။ ကျန်နှစ်စုံက သူ့ထက်သေးတယ်။",
    p: "Camera low on the soft earth beside the opened grave: ⚠️ THREE SETS OF BARE FOOTPRINTS "
      + "leading away from it across the ground. ⚠️ ONE SET IS A FULL-GROWN MAN'S. THE OTHER TWO "
      + "ARE PLAINLY SMALLER — child-sized, and of two different sizes. All three are pressed "
      + "clearly into the earth and all three lead the same way. Overcast morning light.",
    u: ["ဒါပေမယ့် မြေကြီးပေါ်မှာ ခြေရာတစ်စုံပဲ မရှိဘူး။",
        "ခြေရာ သုံးစုံ။ တစ်စုံက ကိုကျော်သိန်းရဲ့အရွယ်။",
        "ကျန်နှစ်စုံက သူ့ထက်သေးတယ်။"] },

  { t: "He Knew", l: "သင်္ချိုင်း", k: "myint", w: ["ဦးလေးမြင့်"],
    g: "ဦးလေးမြင့်က မြေပြင်ကို ကြည့်ရင်း တိတ်နေတယ်။ “ဘယ်သူတွေရဲ့ခြေရာလဲ” “မသိဘူး” ဒါပေမယ့် သူသိတဲ့ပုံပဲ။",
    p: "Close on U Lay Myint looking down at the ground, ⚠️ HIS FACE GONE GREY AND HIS JAW SET — "
      + "the expression of a man recognising something rather than discovering it. He is not "
      + "surprised. Overcast daylight.",
    u: ["ဦးလေးမြင့်က မြေပြင်ကို ကြည့်ရင်း တိတ်နေတယ်။ ကျွန်တော် မေးတယ်။",
        "“ဘယ်သူတွေရဲ့ခြေရာလဲ” သူ ခေါင်းခါတယ်။ “မသိဘူး”",
        "ဒါပေမယ့် သူသိတဲ့ပုံပဲ။ “ဦးလေး” “ဘာလဲ” “ခုနက မသိဘူးဆိုတာ မဟုတ်ဘူးမလား”"] },

  // ── V · THE SECOND ONE ────────────────────────────────────────────────────
  { t: "Daw Yi Yi", c: [[2, "bigstinger"]], l: "ရွာအဝင်လမ်း", k: "dead", w: ["ဒေါ်ရီရီ"],
    g: "⚠️ အဲဒီနေ့ည ဒုတိယလူ ပြန်လာတယ်။ ဒေါ်ရီရီ။ အသက်ခြောက်ဆယ်ကျော်။ လွန်ခဲ့တဲ့ သုံးနှစ်က သေသွားတာ။",
    p: "OCCURRENCE 5 OF 12. The same framing on the dark road: an old woman full length, ⚠️ IN "
      + "EXACTLY THE SAME CONDITION AS THE MAN WAS — flat grey-brown skin with no warmth, grey "
      + "lips, open dull eyes, pale soil worked into every crease and under the nails. An old "
      + "faded blouse and htamein, bare feet, ⚠️ DRY EARTH DUSTED AROUND HER MOUTH AND CHIN. "
      + "⚠️ HER SKIN IS WHOLE AND SMOOTH EVERYWHERE despite three years in the ground.",
    u: ["အဲဒီနေ့ည ဒုတိယလူ ပြန်လာတယ်။ ဒီတစ်ခါ မသိတဲ့လူ မဟုတ်ဘူး။",
        "ဒေါ်ရီရီ။ အသက်ခြောက်ဆယ်ကျော်။ လွန်ခဲ့တဲ့ သုံးနှစ်က သေသွားတာ။",
        "သူ့သင်္ချိုင်းကို တူးဖော်ထားတာ မရှိဘူး။"] },

  { t: "Everyone Was Already Inside", l: "ရွာလမ်း", k: "lane", w: ["ဒေါ်ရီရီ"],
    g: "ဒီတစ်ခါ ရွာသားတွေ အကုန် အိမ်ထဲဝင်နေကြပြီ။ ကျွန်တော်က တံခါးအပေါက်ကနေ ကြည့်နေတယ်။",
    p: "The village lane at night with ⚠️ EVERY DOOR ALONG IT SHUT AND EVERY SHUTTER CLOSED, thin "
      + "lines of lamplight escaping round their edges, and Daw Yi Yi standing alone in the "
      + "middle of the empty lane. ⚠️ NOBODY IS OUTSIDE. Just the closed village and the one "
      + "figure in it.",
    u: ["ဒါပေမယ့် သူက ရွာအဝင်လမ်းမှာ လမ်းလျှောက်လာတယ်။ အင်္ကျီဟောင်း။ ခြေဗလာ။",
        "သူ လမ်းမကြီးအလယ်မှာ ရပ်တယ်။",
        "ဒီတစ်ခါ ရွာသားတွေ အကုန် အိမ်ထဲဝင်နေကြပြီ။ ကျွန်တော်က တံခါးအပေါက်ကနေ ကြည့်နေတယ်။"] },

  { t: "She Pointed at a House", c: [[1, "stinger"]], l: "ရွာလမ်း", k: "lane", w: ["ဒေါ်ရီရီ"],
    g: "⚠️ ဒေါ်ရီရီ ရပ်ပြီး လက်ညှိုးနဲ့ အိမ်တစ်လုံးကို ညွှန်တယ်။ ကိုဘမြင့်ရဲ့အိမ်။",
    p: "Daw Yi Yi standing in the empty lane with ⚠️ ONE ARM RAISED STRAIGHT AND A SINGLE FINGER "
      + "EXTENDED at one particular shuttered house, everything else about her motionless. ⚠️ THE "
      + "GESTURE IS EXACTLY THE ONE THE MAN MADE AT THE STEPS. Thin lamplight at the shutter "
      + "edges of the house she has chosen.",
    u: ["ဒေါ်ရီရီ ရပ်ပြီး လက်ညှိုးနဲ့ အိမ်တစ်လုံးကို ညွှန်တယ်။",
        "ကိုဘမြင့်ရဲ့အိမ်။"] },

  { t: "Give One Back", c: [[3, "bigstinger"]], l: "ရွာလမ်း", k: "mouth", w: ["ဒေါ်ရီရီ"],
    g: "⚠️ မိန်းမအသံနဲ့ ပြောတယ် — “တစ်ယောက် ပြန်ပေး” … “ငါ့ကလေး”",
    p: "OCCURRENCE 4 OF 6 OF THE MOUTH, ⚠️ NOW ON A DIFFERENT PERSON AND IDENTICAL ANYWAY. An old "
      + "woman's face from the nose down filling the frame, the mouth hanging open slack and "
      + "unshaped, the jaw dropped, grey lips, dry earth dusted on the chin. ⚠️ THE SAME PICTURE "
      + "AS THE MAN'S MOUTH IN EVERY RESPECT except whose face it is.",
    u: ["ပြီးတော့ မိန်းမအသံနဲ့ ပြောတယ်။ “တစ်ယောက် ပြန်ပေး”",
        "ကိုဘမြင့်အိမ်ထဲကနေ အော်သံထွက်လာတယ်။ “ဘာကို ပြန်ပေးရမှာလဲ!”",
        "ဒေါ်ရီရီက “ငါ့ကလေး” လို့ ပြန်ပြောတယ်။"] },

  { t: "She Had No Children", l: "ရွာလမ်း", k: "htet", w: ["ထက်အောင်"],
    g: "⚠️ ကျွန်တော် ကြက်သီးထသွားတယ်။ ဒေါ်ရီရီမှာ ကလေးမရှိဘူး။ ကျွန်တော်သိတာ အဲဒီလိုပဲ။",
    p: "Close on Htet Aung at a shutter gap in the dark, one eye and part of his face lit by the "
      + "thin line of light, ⚠️ HIS SKIN VISIBLY GOOSEFLESHED along the side of his neck and his "
      + "eyes wide. He has understood something and not liked it.",
    u: ["ကျွန်တော် ကြက်သီးထသွားတယ်။",
        "ဒေါ်ရီရီမှာ ကလေးမရှိဘူး။ ကျွန်တော်သိတာ အဲဒီလိုပဲ။"] },

  { t: "She Did Have One", c: [[3, "bigstinger"]], l: "ရွာလမ်း", k: "myint", w: ["ဦးလေးမြင့်"],
    g: "⚠️ ဦးလေးမြင့်က ကျွန်တော့်နောက်မှာ တိုးတိုးပြောတယ် — “ရှိခဲ့တယ်” … “ဒေါ်ရီရီမှာ ကလေးတစ်ယောက် ရှိခဲ့တယ်”",
    p: "Close on U Lay Myint in the dark behind Htet Aung, lit only by the leaking shutter light, "
      + "⚠️ HIS FACE DRAINED COMPLETELY WHITE and his mouth barely moving as he says it. He is "
      + "looking at the floor rather than out at the lane.",
    u: ["အဲဒီအချိန် ဦးလေးမြင့်က ကျွန်တော့်နောက်မှာ တိုးတိုးပြောတယ်။ “ရှိခဲ့တယ်”",
        "ကျွန်တော် လှည့်ကြည့်တယ်။ “ဘာ?” သူ့မျက်နှာ ဖြူနေပြီ။",
        "“ဒေါ်ရီရီမှာ ကလေးတစ်ယောက် ရှိခဲ့တယ်” “ဘယ်မှာလဲ” သူ တိတ်သွားတယ်။"] },

  // ── VI · HOUSE AFTER HOUSE ────────────────────────────────────────────────
  { t: "Both of Them, House After House", l: "ရွာလမ်း", k: "wide",
    w: ["ကိုကျော်သိန်း", "ဒေါ်ရီရီ"],
    g: "⚠️ အဲဒီည ဒေါ်ရီရီနဲ့ ကိုကျော်သိန်း နှစ်ယောက်လုံး ရွာထဲ ဝင်လာကြတယ်။ တစ်အိမ်ပြီးတစ်အိမ် အိမ်ရှေ့မှာ ရပ်တယ်။",
    p: "The village lane at night from one end, ⚠️ TWO FIGURES STANDING SEPARATELY IN IT AT "
      + "DIFFERENT DOORWAYS, each squared up to a shut house, each perfectly still. Every door "
      + "along the lane is closed. ⚠️ THEY ARE NOT TOGETHER AND NOT INTERACTING — two people "
      + "doing the same job at different addresses.",
    u: ["အဲဒီည မနက်မရောက်ခင် ဒေါ်ရီရီနဲ့ ကိုကျော်သိန်း နှစ်ယောက်လုံး ရွာထဲ ဝင်လာကြတယ်။",
        "တစ်အိမ်ပြီးတစ်အိမ် အိမ်ရှေ့မှာ ရပ်တယ်။"] },

  { t: "They Bit Nobody", l: "ရွာလမ်း", k: "dead", w: ["ကိုကျော်သိန်း"],
    g: "⚠️ ဘယ်သူ့ကိုမှ မကိုက်ဘူး။ ဘယ်သူ့ကိုမှ မစားဘူး။ လက်တွေ တောင့်နေတယ်။ ခေါင်းတွေ စောင်းနေတယ်။",
    p: "OCCURRENCE 6 OF 12. The same framing, at a shut door in the lane. ⚠️ HIS ARMS HANG STIFF "
      + "AND STRAIGHT AT HIS SIDES AND HIS HEAD IS TIPPED OVER, and he is doing absolutely "
      + "nothing else — not reaching, not clawing, not pressing at the door. ⚠️ HIS MOUTH IS "
      + "CLOSED AND HIS TEETH ARE NOT SHOWING. He is simply waiting at an address.",
    u: ["ဘယ်သူ့ကိုမှ မကိုက်ဘူး။ ဘယ်သူ့ကိုမှ မစားဘူး။",
        "လက်တွေ တောင့်နေတယ်။ ခေါင်းတွေ စောင်းနေတယ်။",
        "ဒါပေမယ့် တစ်ခုတည်းပဲ လုပ်တယ်။"] },

  { t: "Give Back", l: "ရွာလမ်း", k: "mouth", w: ["ဒေါ်ရီရီ"],
    g: "⚠️ တစ်အိမ်ပြီးတစ်အိမ် — “ပြန်ပေး” လို့ ပြောတယ်။ မိန်းမအသံနဲ့။",
    p: "OCCURRENCE 5 OF 6 OF THE MOUTH. The identical framing, unchanged — an open slack mouth, "
      + "dropped jaw, grey unshaped lips, earth on the chin. ⚠️ EXACTLY THE SAME PICTURE AS EVERY "
      + "OTHER TIME. Lamplight leaking from a shutter onto one side of it.",
    u: ["တစ်အိမ်ပြီးတစ်အိမ် — “ပြန်ပေး” လို့ ပြောတယ်။",
        "မိန်းမအသံနဲ့။"] },

  { t: "Lying in the Bean Field", c: [[2, "stinger"]], l: "ပဲခင်း", k: "field",
    w: ["ကိုကျော်သိန်း", "ဒေါ်ရီရီ"],
    g: "⚠️ မနက်ရောက်တော့ နှစ်ယောက်လုံး ပျောက်သွားတယ်။ ရွာအပြင်က ပဲခင်းထဲမှာ ခန္ဓာကိုယ်တွေ ပြန်လဲနေကြတယ်။ သေသွားတဲ့အတိုင်း။",
    p: "A bean field at first light, grey-blue and dewy, with ⚠️ TWO BODIES LYING FLAT AND STILL "
      + "AMONG THE ROWS a little apart from each other, face up, arms at their sides, exactly as "
      + "though they had been laid out. ⚠️ THEY ARE WHOLE, UNMARKED AND ORDINARY — dead people "
      + "lying in a field and nothing more than that. Nobody else in shot.",
    u: ["မနက်ရောက်တော့ နှစ်ယောက်လုံး ပျောက်သွားတယ်။",
        "ရွာအပြင်က ပဲခင်းထဲမှာ မြေကြီးပေါ် ခန္ဓာကိုယ်တွေ ပြန်လဲနေကြတယ်။",
        "သေသွားတဲ့အတိုင်း။"] },

  { t: "It Is Not Them Doing It", l: "ပဲခင်း", k: "myint", w: ["ဦးလေးမြင့်"],
    g: "⚠️ ရွာသားတွေက မီးရှို့ဖို့ ပြောကြတယ်။ ဦးလေးမြင့်ကတော့ “မရှို့နဲ့” … “အဲဒါတွေကို လှုပ်နေတာ သူတို့မဟုတ်ဘူး”",
    p: "Close on U Lay Myint standing in the bean field at first light, ⚠️ HIS FACE HARD AND "
      + "ABSOLUTELY DECIDED, looking off at the other villagers rather than at the ground. Grey "
      + "dawn light. ⚠️ He is angry for the first time in the film.",
    u: ["ဒီတစ်ခါ ကိုကျော်သိန်းရဲ့အလောင်းကို ရွာသားတွေ မသင်္ဂြိုဟ်ရဲတော့ဘူး။ မီးရှို့ဖို့ ပြောကြတယ်။",
        "ဦးလေးမြင့်ကတော့ “မရှို့နဲ့” လို့ တင်းတင်းပြောတယ်။ “ဘာလို့” ကျွန်တော် မေးတယ်။",
        "သူ ခဏတိတ်တယ်။ “အဲဒါတွေကို လှုပ်နေတာ သူတို့မဟုတ်ဘူး”"] },

  // ── VII · TWENTY YEARS AGO ────────────────────────────────────────────────
  { t: "Tell Me All of It", l: "ရွာလမ်း", k: "myint", w: ["ထက်အောင်", "ဦးလေးမြင့်"],
    g: "တတိယညမှာ ကျွန်တော် မစောင့်နိုင်တော့ဘူး။ ဦးလေးမြင့်ကို အိမ်နောက်ဘက် ခေါ်သွားတယ်။ “အကုန်ပြော”",
    p: "The two men behind a house at night, close together in near darkness with one shuttered "
      + "window throwing a thin line of light across them. Htet Aung is facing him squarely and "
      + "waiting; ⚠️ U LAY MYINT IS LOOKING AT THE GROUND. Nothing else in frame.",
    u: ["တတိယညမှာ ကျွန်တော် မစောင့်နိုင်တော့ဘူး။",
        "ဦးလေးမြင့်ကို အိမ်နောက်ဘက် ခေါ်သွားတယ်။ “အကုန်ပြော”",
        "သူ အကြာကြီးတိတ်တယ်။"] },

  { t: "There Was a House at the Forest Edge", l: "တောစပ်", k: "clearing",
    g: "လွန်ခဲ့တဲ့ နှစ်ဆယ်ကျော်က ဒီရွာအနောက်ဘက်မှာ တဲအိမ်သေးသေးတစ်လုံး ရှိတယ်။",
    p: "⚠️ A WARM DAYLIT MEMORY, TWENTY YEARS EARLIER. A small neat timber-and-thatch house "
      + "standing alone in a clearing at the forest edge in bright green afternoon light, a "
      + "kitchen garden beside it, bundles of herbs hung drying along the veranda rail. ⚠️ AN "
      + "ORDINARY WELL-KEPT HOME, nothing sinister about it at all. Nobody in shot.",
    u: ["ပြီးတော့ လွန်ခဲ့တဲ့ နှစ်ဆယ်ကျော်က အဖြစ်အပျက်တစ်ခုကို ပြောပြတယ်။",
        "ဒီရွာအနောက်ဘက်မှာ အရင်တုန်းက တဲအိမ်သေးသေးတစ်လုံး ရှိတယ်။"] },

  { t: "Ma Shwe Yin", l: "တောစပ်", k: "memory", w: ["မရွှေရင်"],
    g: "အဲဒီအိမ်မှာ မိန်းမတစ်ယောက် နေတယ်။ နာမည် မရွှေရင်။ သူ့မှာ ကလေးသုံးယောက်။ ယောက်ျားမရှိတော့ဘူး။",
    p: "⚠️ WARM DAYLIT MEMORY. Ma Shwe Yin in bright afternoon light at the edge of her clearing, "
      + "half turned towards camera with a cloth bag of dried roots over one shoulder, a calm "
      + "steady unremarkable face. ⚠️ SHE IS ALIVE, WELL AND COMPLETELY ORDINARY — healthy "
      + "colour, clean worn clothes, a village woman on an ordinary day.",
    u: ["အဲဒီအိမ်မှာ မိန်းမတစ်ယောက် နေတယ်။ နာမည် မရွှေရင်။",
        "သူ့မှာ ကလေးသုံးယောက်။ ယောက်ျားမရှိတော့ဘူး။"] },

  { t: "They Came to Her for Medicine", l: "တောစပ်", k: "insert",
    g: "ကလေးတွေ ဖျားရင် သူ့ဆီ ဆေးတောင်းသွားကြတယ်။ ဆေးပင်တွေ၊ အမြစ်တွေ ပေးတယ်။ တချို့က ကောင်းတယ်။ တချို့က မကောင်းဘူး။",
    p: "⚠️ WARM DAYLIT MEMORY. Insert on a woman's hands tying a small bundle of dried roots and "
      + "leaves into a square of cloth, an open basket of more bundles beside it on a wooden "
      + "veranda floor. ⚠️ EVERYTHING IS CLEAN, DRY AND ORDINARY — plain herbs, plain cloth, "
      + "bright daylight.",
    u: ["ရွာသားတွေက သူ့ကို မကြိုက်ဘူး။ အကြောင်းက — ရွာမှာ လူသေတဲ့အခါ သူက နာရေးမသွားဘူး။",
        "ကလေးတွေ ဖျားရင် သူ့ဆီ ဆေးတောင်းသွားကြတယ်။ ဆေးပင်တွေ၊ အမြစ်တွေ ပေးတယ်။",
        "တချို့က ကောင်းတယ်။ တချို့က မကောင်းဘူး။"] },

  { t: "They Blamed Her", l: "ရွာလမ်း", k: "wide",
    g: "နောက်တော့ ရွာကကလေးတစ်ယောက် ဖျားပြီး သေသွားတယ်။ လူတွေက မရွှေရင်ကို အပြစ်တင်တယ်။ “အဆိပ်ပေးတာ” လို့။",
    p: "⚠️ A DAYLIT MEMORY. Eight or nine villagers standing in a tight group in the lane in "
      + "afternoon light, ⚠️ ALL OF THEM TURNED THE SAME WAY AND TALKING AT ONCE, several with "
      + "hands raised mid-gesture, faces angry and frightened together. ⚠️ NOBODY IS BEING "
      + "HARMED AND NOTHING IS HAPPENING YET — a village working itself up.",
    u: ["နောက်တော့ ရွာကကလေးတစ်ယောက် ဖျားပြီး သေသွားတယ်။",
        "လူတွေက မရွှေရင်ကို အပြစ်တင်တယ်။ “အဆိပ်ပေးတာ” လို့။",
        "မရွှေရင်က “ငါ မလုပ်ဘူး” လို့ပဲ ပြောတယ်။ ဒါပေမယ့် ရွာသားတွေ မယုံကြဘူး။"] },

  { t: "Nothing Is Left of It Now", l: "တောစပ်", k: "clearing",
    g: "⚠️ ညတစ်ညမှာ အိမ်ကို မီးရှို့လိုက်ကြတယ်။ မရွှေရင်နဲ့ ကလေးသုံးယောက် အတွင်းမှာ။",
    p: "⚠️ BACK IN THE PRESENT, AND THE FIRE IS NEVER SHOWN. The clearing today under flat "
      + "overcast daylight: ⚠️ A BARE RECTANGLE OF DARK EARTH where the house stood, scrub grown "
      + "right up to its edges and stopping. ⚠️ THERE IS NO RUIN, NO CHARRING AND NO WRECKAGE — "
      + "only ground that has stayed barer and darker than everything around it for twenty years.",
    u: ["ညတစ်ညမှာ အိမ်ကို မီးရှို့လိုက်ကြတယ်။",
        "မရွှေရင်နဲ့ ကလေးသုံးယောက် အတွင်းမှာ။"] },

  { t: "Were You There", c: [[3, "stinger"]], l: "ရွာလမ်း", k: "myint", w: ["ဦးလေးမြင့်"],
    g: "⚠️ “ဘယ်သူ မီးရှို့တာလဲ” … “ရွာက လူကြီးတွေအများကြီး ပါတယ်” … “ခင်ဗျားရော?” သူ ခေါင်းညိတ်တယ်။",
    p: "Close on U Lay Myint in the dark behind the house, ⚠️ HIS HEAD BOWED AND HIS EYES SHUT, "
      + "caught at the moment of a single small nod. The thin line of shutter light across his "
      + "face. ⚠️ He looks old and finished rather than dangerous.",
    u: ["ကျွန်တော် အံ့သြသွားတယ်။ “ဘယ်သူ မီးရှို့တာလဲ” ဦးလေးမြင့် မဖြေဘူး။",
        "“ဦးလေး?” သူ ခေါင်းငုံ့တယ်။ “ရွာက လူကြီးတွေအများကြီး ပါတယ်”",
        "“ခင်ဗျားရော?” သူ ခဏတိတ်ပြီး ခေါင်းညိတ်တယ်။"] },

  { t: "They Never Found the Remains", l: "ရွာလမ်း", k: "myint",
    w: ["ဦးလေးမြင့်", "ထက်အောင်"],
    g: "⚠️ “အလောင်းတွေကရော” “မတွေ့ဘူး” “မီးလောင်ပြီး အရိုးတွေတောင် မတွေ့တာလား” “မတွေ့ဘူး”",
    p: "The two men in the dark behind the house, Htet Aung leaning in and U Lay Myint turned "
      + "half away from him, ⚠️ THE OLDER MAN'S MOUTH BARELY OPEN as he answers. Thin light, deep "
      + "shadow, nothing else in frame.",
    u: ["ကျွန်တော် ဘာမှမပြောနိုင်တော့ဘူး။ “အလောင်းတွေကရော”",
        "ဦးလေးမြင့်ရဲ့အသံ ပိုတိုးသွားတယ်။ “မတွေ့ဘူး”",
        "“မီးလောင်ပြီး အရိုးတွေတောင် မတွေ့တာလား” “မတွေ့ဘူး”"] },

  { t: "There Was a Cellar Under the House", l: "ရွာလမ်း", k: "myint",
    w: ["ဦးလေးမြင့်"],
    g: "⚠️ “အိမ်အောက်မှာ မြေတွင်းတစ်ခုရှိတယ်” … “ဆေးပင်တွေ သိမ်းတဲ့မြေအောက်ခန်း” … “မီးရှို့တဲ့ညမှာ…”",
    p: "Close on U Lay Myint saying it, ⚠️ HIS EYES OPEN NOW AND FIXED ON NOTHING, his mouth "
      + "moving on words he has never said aloud. He has stopped mid-sentence — the face of a man "
      + "who will not finish one. Thin shutter light.",
    u: ["“ဒါဆို ဘာဖြစ်သွားတာလဲ” သူ ကျွန်တော့်ကို ကြည့်တယ်။",
        "“အိမ်အောက်မှာ မြေတွင်းတစ်ခုရှိတယ်။ ဆေးပင်တွေ သိမ်းတဲ့မြေအောက်ခန်း”",
        "“မီးရှို့တဲ့ညမှာ…” သူ ဆက်မပြောချင်တော့ဘူး။"] },

  { t: "They Did Not Burn", c: [[2, "bigstinger"]], l: "ရွာလမ်း", k: "htet", w: ["ထက်အောင်"],
    g: "⚠️ ကျွန်တော် နားလည်သွားတယ်။ မရွှေရင်နဲ့ကလေးတွေ မီးလောင်သေတာ မဟုတ်ဘူး။ မြေအောက်ခန်းထဲ ပိတ်မိသွားတာ။ အသက်ရှင်ရက်နဲ့။",
    p: "Close on Htet Aung in the dark, ⚠️ HIS FACE EMPTYING AS HE ARRIVES AT IT — not horror on "
      + "the surface but the stillness underneath it, eyes moving fractionally, mouth slightly "
      + "open. Thin shutter light across one cheek.",
    u: ["ကျွန်တော် နားလည်သွားတယ်။",
        "မရွှေရင်နဲ့ကလေးတွေ မီးလောင်သေတာ မဟုတ်ဘူး။",
        "မြေအောက်ခန်းထဲ ပိတ်မိသွားတာ။ အသက်ရှင်ရက်နဲ့။"] },

  // ── VIII · WHOSE VOICE ────────────────────────────────────────────────────
  { t: "They Are Using the Dead", l: "သင်္ချိုင်း", k: "grave", w: ["ဦးလေးမြင့်"],
    g: "“ဒါနဲ့ အခုလူသေတွေ ဘာလို့ပြန်လာတာလဲ” ဦးလေးမြင့်က တောင်ဘက်သင်္ချိုင်းကို ကြည့်တယ်။ “သူတို့က လူသေတွေကို သုံးနေတာ”",
    p: "U Lay Myint standing at the edge of the graveyard at night looking down the slope across "
      + "the grave mounds, seen from behind and to one side, small against the dark rows. ⚠️ THE "
      + "GRAVES ARE ALL CLOSED AND UNDISTURBED. Faint starlight, the black forest beyond.",
    u: ["“ဒါနဲ့ အခုလူသေတွေ ဘာလို့ပြန်လာတာလဲ” ကျွန်တော် မေးတယ်။",
        "ဦးလေးမြင့်က တောင်ဘက်သင်္ချိုင်းကို ကြည့်တယ်။",
        "“သူတို့က လူသေတွေကို သုံးနေတာ”"] },

  { t: "Listen to the Voice", l: "ရွာလမ်း", k: "myint", w: ["ဦးလေးမြင့်"],
    g: "⚠️ “မရွှေရင်လား” သူ ခေါင်းခါတယ်။ “ဒါပေမယ့် အသံကို သတိထား” … “မရွှေရင်ရဲ့အသံမဟုတ်ဘူး”",
    p: "Close on U Lay Myint shaking his head once, caught in one still instant, ⚠️ HIS "
      + "EXPRESSION SHARPER AND MORE ALERT THAN IT HAS BEEN — this is the one thing he has "
      + "worked out for himself and he wants it understood. Thin light on one side of his face.",
    u: ["“ဘယ်သူ?” “မရွှေရင်လား” သူ ခေါင်းခါတယ်။",
        "“ငါလည်း အစမှာ အဲဒီလိုထင်တာ။ ဒါပေမယ့် အသံကို သတိထား”",
        "“မရွှေရင်ရဲ့အသံမဟုတ်ဘူး”"] },

  { t: "Her Eldest Daughter", c: [[3, "bigstinger"]], l: "ရွာလမ်း", k: "htet", w: ["ထက်အောင်"],
    g: "⚠️ ဦးလေးမြင့် တိုးတိုးပြောတယ် — “သူ့သမီးအကြီး” … “သူ့နာမည်က မသဲ။ မီးရှို့မယ့်အချိန် အသက်ဆယ်နှစ်ပဲ”",
    p: "Close on Htet Aung listening in the dark, ⚠️ HIS FACE GOING COMPLETELY STILL as the "
      + "arithmetic lands — the voice that has been saying give her back is a ten-year-old's. "
      + "Thin shutter light. He does not move at all.",
    u: ["ကျွန်တော် မျက်မှောင်ကျုံ့တယ်။ “ဒါဆို ဘယ်သူလဲ”",
        "ဦးလေးမြင့် တိုးတိုးပြောတယ်။ “သူ့သမီးအကြီး”",
        "ကျွန်တော် တိတ်သွားတယ်။ “သူ့နာမည်က မသဲ။ မီးရှို့မယ့်အချိန် အသက်ဆယ်နှစ်ပဲ”"] },

  { t: "Let My Mother Out", c: [[3, "stinger"]], l: "ရွာလမ်း", k: "myint", w: ["ဦးလေးမြင့်"],
    g: "⚠️ “အဲဒီည မြေအောက်ကနေ တံခါးထုသံ ကြားရတယ်” … “မရွှေရင်က အော်နေတာ မဟုတ်ဘူး။ ကလေးမလေးက အော်နေတာ” — “အမေကို လွှတ်ပေးပါ”",
    p: "Extreme close on U Lay Myint's eyes and the bridge of his nose in the dark, ⚠️ THE EYES "
      + "OPEN AND WET AND LOOKING AT SOMETHING TWENTY YEARS AWAY. Everything else is shadow. "
      + "⚠️ Nothing is shown of what he is remembering.",
    u: ["ဦးလေးမြင့်ရဲ့မျက်လုံးတွေ မည်းလာတယ်။",
        "“အဲဒီည မြေအောက်ကနေ တံခါးထုသံ ကြားရတယ်။ မရွှေရင်က အော်နေတာ မဟုတ်ဘူး”",
        "“ကလေးမလေးက အော်နေတာ။ အမေကို လွှတ်ပေးပါ”"] },

  // ── IX · THE THIRD NIGHT ──────────────────────────────────────────────────
  { t: "Everyone in the Monastery", l: "ဘုန်းကြီးကျောင်း", k: "monastery",
    g: "အဲဒီည ရွာကလူအားလုံး ဘုန်းကြီးကျောင်းထဲ စုနေကြတယ်။ အပြင်မှာ တိတ်နေတယ်။",
    p: "The monastery at night from the compound: the raised prayer hall lit warmly from inside "
      + "and ⚠️ PACKED WITH SEATED VILLAGERS visible through the open sides — whole families "
      + "pressed together on the floor. Sandals heaped at the bottom of the steps. The compound "
      + "outside is empty and dark.",
    u: ["အဲဒီည ရွာကလူအားလုံး ဘုန်းကြီးကျောင်းထဲ စုနေကြတယ်။",
        "အပြင်မှာ တိတ်နေတယ်။"] },

  { t: "One, Then Two, Then Many", c: [[2, "stinger"]], l: "ရွာအဝင်လမ်း", k: "road",
    g: "⚠️ ညသန်းခေါင်ကျော်တော့ ခြေသံတွေ ကြားလာတယ်။ တစ်ယောက်။ နှစ်ယောက်။ ပြီးတော့ အများကြီး။",
    p: "The dark road into the village, and ⚠️ A LINE OF FIGURES COMING ALONG IT TOWARDS CAMERA, "
      + "strung out one behind another as far back as the light reaches — perhaps fifteen of "
      + "them, all walking at the same unhurried pace. ⚠️ THEY ARE ALL ORDINARY PEOPLE IN BURIAL "
      + "CLOTHES, grey and dusty and whole, and none of them is reaching or running.",
    u: ["ညသန်းခေါင်ကျော်တော့ ခြေသံတွေ ကြားလာတယ်။",
        "တစ်ယောက်။ နှစ်ယောက်။ ပြီးတော့ အများကြီး။",
        "ရွာအပြင်ဘက် လမ်းမပေါ်မှာ လူသေတွေ လမ်းလျှောက်လာကြတယ်။"] },

  { t: "Some of Them I Knew", l: "ရွာအဝင်လမ်း", k: "dead",
    w: ["ကိုကျော်သိန်း", "ဒေါ်ရီရီ"],
    g: "ကိုကျော်သိန်း။ ဒေါ်ရီရီ။ လွန်ခဲ့တဲ့နှစ်တွေက သေသွားတဲ့ လူတွေ။ တချို့ကို ကျွန်တော် မှတ်မိတယ်။ တချို့ကို မမှတ်မိဘူး။",
    p: "OCCURRENCE 7 OF 12, ⚠️ NOW WITH SEVERAL OF THEM IN THE SAME FRAME. Ko Kyaw Thein and Daw "
      + "Yi Yi at the front, side by side but not together, with more figures behind them going "
      + "back into the dark. ⚠️ ALL OF THEM IN THE SAME CONDITION — grey, dry, soil-packed, "
      + "whole, unharmed — and all of them facing the same way.",
    u: ["ကိုကျော်သိန်း။ ဒေါ်ရီရီ။ လွန်ခဲ့တဲ့နှစ်တွေက သေသွားတဲ့ လူတွေ။",
        "တချို့ကို ကျွန်တော် မှတ်မိတယ်။ တချို့ကို မမှတ်မိဘူး။"] },

  { t: "They Would Not Come In", c: [[2, "stinger"]], l: "ဘုန်းကြီးကျောင်း", k: "monastery",
    g: "⚠️ သူတို့အားလုံး ရွာကို ဝိုင်းလာကြတယ်။ ဒါပေမယ့် ဘုန်းကြီးကျောင်းထဲ မဝင်ကြဘူး။ အပြင်မှာ ရပ်နေကြတယ်။",
    p: "The monastery compound at night seen from the steps, ⚠️ A RING OF STANDING FIGURES ALL "
      + "ROUND ITS EDGE AT THE BOUNDARY and not one of them inside it — they are stopped in a "
      + "clean curve at the line where the compound begins, evenly spaced, motionless, facing in. "
      + "Warm light from the hall behind camera reaches only the nearest of them.",
    u: ["သူတို့အားလုံး ရွာကို ဝိုင်းလာကြတယ်။",
        "ဒါပေမယ့် ဘုန်းကြီးကျောင်းထဲ မဝင်ကြဘူး။ အပြင်မှာ ရပ်နေကြတယ်။"] },

  { t: "All of Them at Once", c: [[3, "bigstinger"]], l: "ဘုန်းကြီးကျောင်း", k: "mouth",
    g: "⚠️ အားလုံး တစ်ပြိုင်နက် ခေါင်းမော့လာကြတယ်။ ပါးစပ်တွေ တစ်ပြိုင်နက် ဖွင့်တယ်။ အသံတစ်သံတည်း ထွက်လာတယ်။ ကလေးမလေးရဲ့အသံ။",
    p: "OCCURRENCE 6 OF 6 OF THE MOUTH, ⚠️ AND THIS TIME IT IS SEVERAL AT ONCE. Framed across a "
      + "row of three or four dead faces from the nose down, side by side at slightly different "
      + "distances, ⚠️ EVERY MOUTH OPEN IN EXACTLY THE SAME SLACK DROPPED POSITION. Different "
      + "ages, different faces, one identical gesture.",
    u: ["ပြီးတော့ အားလုံး တစ်ပြိုင်နက် ခေါင်းမော့လာကြတယ်။",
        "ပါးစပ်တွေ တစ်ပြိုင်နက် ဖွင့်တယ်။ အသံတစ်သံတည်း ထွက်လာတယ်။",
        "ကလေးမလေးရဲ့အသံ။ “အမေ့ကို ပြန်ပေး”"] },

  { t: "I'm Going", l: "ဘုန်းကြီးကျောင်း", k: "monastery",
    w: ["ဦးလေးမြင့်", "ထက်အောင်"],
    g: "ဦးလေးမြင့်ကတော့ မတ်တပ်ထရပ်တယ်။ “ငါ သွားမယ်” … “အိမ်ဟောင်းနေရာ”",
    p: "Inside the packed prayer hall: U Lay Myint standing up out of a seated crowd, already "
      + "turned towards the steps, while everyone around him stays down. Htet Aung has hold of "
      + "his wrist and is getting up too. ⚠️ SOME PEOPLE ARE CRYING AND SOME ARE PRAYING WITH "
      + "THEIR PALMS TOGETHER. Warm hall light.",
    u: ["ရွာသားတချို့ ငိုလာကြတယ်။ တချို့က စာဖတ်ကြတယ်။",
        "ဦးလေးမြင့်ကတော့ မတ်တပ်ထရပ်တယ်။ “ငါ သွားမယ်”",
        "ကျွန်တော် သူ့လက်ကို ဖမ်းတယ်။ “ဘယ်သွားမလို့” “အိမ်ဟောင်းနေရာ” “ကျွန်တော်လည်း လိုက်မယ်”"] },

  // ── X · THE CELLAR ────────────────────────────────────────────────────────
  { t: "Digging in the Dark", l: "တောစပ်", k: "clearing",
    w: ["ဦးလေးမြင့်", "ထက်အောင်"],
    g: "အိမ်ဟောင်းရှိခဲ့တဲ့နေရာက တောစပ်မှာ။ ဦးလေးမြင့်က ပေါက်တူးယူပြီး မြေတူးတယ်။ ကျွန်တော်လည်း ကူတယ်။",
    p: "The bare dark rectangle in the clearing at night, two men digging into it by lamplight — "
      + "U Lay Myint with a mattock and Htet Aung throwing soil clear by hand. A hand lamp stands "
      + "on the ground beside them and is the only light. Earth heaped around a widening hole.",
    u: ["အိမ်ဟောင်းရှိခဲ့တဲ့နေရာက တောစပ်မှာ။ အခုတော့ မြေညိုပဲ ကျန်တယ်။",
        "ဦးလေးမြင့်က ပေါက်တူးယူပြီး မြေတူးတယ်။ ကျွန်တော်လည်း ကူတယ်။"] },

  { t: "All of Them Followed", l: "တောစပ်", k: "wide",
    w: ["ကိုကျော်သိန်း", "ဒေါ်ရီရီ"],
    g: "⚠️ နောက်က လူသေတွေ အကုန် လိုက်လာကြတယ်။ ဘယ်သူမှ မတိုက်ခိုက်ဘူး။ တိတ်တိတ်ပဲ ဝိုင်းရပ်နေကြတယ်။",
    p: "Wide on the clearing at night: the two men digging in the small pool of lamplight in the "
      + "middle, and ⚠️ A RING OF STANDING DEAD ALL ROUND THEM AT THE EDGE OF THE LIGHT, evenly "
      + "spaced, facing in, perfectly still and doing nothing whatsoever. ⚠️ NONE OF THEM IS "
      + "APPROACHING OR REACHING. The two men are not looking at them.",
    u: ["နောက်က လူသေတွေ အကုန် လိုက်လာကြတယ်။",
        "ဘယ်သူမှ မတိုက်ခိုက်ဘူး။ တိတ်တိတ်ပဲ ဝိုင်းရပ်နေကြတယ်။"] },

  { t: "A Plank of Wood", l: "တောစပ်", k: "insert", w: ["ဦးလေးမြင့်"],
    g: "တစ်နာရီလောက်တူးပြီး သစ်သားပြားတစ်ချပ် တွေ့တယ်။ မြေအောက်တံခါး။ ဦးလေးမြင့် လက်တွေ တုန်နေတယ်။",
    p: "Insert down into the hole by lamplight: ⚠️ A SQUARE OF OLD HEAVY TIMBER EMERGING FROM THE "
      + "SOIL, partly cleared, its grain and one iron ring handle visible under a skin of dirt. "
      + "Two pairs of hands are brushing earth off it. ⚠️ It is closed.",
    u: ["တစ်နာရီလောက်တူးပြီး သစ်သားပြားတစ်ချပ် တွေ့တယ်။",
        "မြေအောက်တံခါး။ ဦးလေးမြင့် လက်တွေ တုန်နေတယ်။ “ဒီဟာပဲ”"] },

  { t: "Cold Air Came Up", l: "မြေအောက်ခန်း", k: "insert", w: ["ထက်အောင်"],
    g: "ကျွန်တော် အဖုံးကို ဆွဲဖွင့်တယ်။ အောက်ကနေ အေးစက်တဲ့လေ ထွက်လာတယ်။ နံ့က အရမ်းဟောင်းတယ်။",
    p: "Looking down into a black square opening in the ground with the timber door swung back "
      + "beside it, ⚠️ NOTHING VISIBLE INSIDE AT ALL — the lamplight reaches the lip of the hole "
      + "and stops. Htet Aung's hands are still on the door edge. ⚠️ The dark is simply dark.",
    u: ["ကျွန်တော် အဖုံးကို ဆွဲဖွင့်တယ်။",
        "အောက်ကနေ အေးစက်တဲ့လေ ထွက်လာတယ်။ နံ့က အရမ်းဟောင်းတယ်။"] },

  { t: "The Lamp Went Down", l: "မြေအောက်ခန်း", k: "cellar", w: ["ထက်အောင်"],
    g: "ကျွန်တော် မီးအိမ်ထိုးလိုက်တယ်။",
    p: "Inside the cellar at crouching height, the lamp lowered in on its handle. ⚠️ THE LIGHT "
      + "REACHES PACKED EARTH WALLS, A LOW TIMBER CEILING AND OLD PLANK SHELVING with dust-furred "
      + "bundles of dried herbs still on it. ⚠️ THE FAR END OF THE ROOM IS BEYOND THE LAMP'S "
      + "REACH and is simply black. Cold dry air, dust hanging in the beam.",
    u: ["ကျွန်တော် မီးအိမ်ထိုးလိုက်တယ်။"] },

  { t: "Shapes at the Edge of the Light", c: [[2, "stinger"]], l: "မြေအောက်ခန်း", k: "cellar",
    g: "⚠️ အောက်မှာ — အရိုးတွေ။ အမျိုးသမီးတစ်ယောက်။ ကလေးသုံးယောက်။ တစ်ယောက်နဲ့တစ်ယောက် ဖက်ထားကြတယ်။",
    p: "⚠️ NOTHING IS SHOWN CLEARLY AND NOTHING IS ITEMISED. Inside the cellar with the lamp held "
      + "low: in the far corner at the very limit of the light, ⚠️ THE SOFT EDGE OF A SINGLE "
      + "HUDDLED SHAPE under a fall of rotted cloth, gathered close in on itself against the "
      + "corner of the two walls. ⚠️ THE LAMPLIGHT FALLS OFF BEFORE IT RESOLVES INTO ANYTHING — "
      + "the frame is dust, earth wall and the beginning of a shadow. No detail reaches the "
      + "camera.",
    u: ["အောက်မှာ — အရိုးတွေ။",
        "အမျိုးသမီးတစ်ယောက်။ ကလေးသုံးယောက်။",
        "တစ်ယောက်နဲ့တစ်ယောက် ဖက်ထားကြတယ်။"] },

  { t: "The Underside of the Door", c: [[1, "bigstinger"]], l: "မြေအောက်ခန်း", k: "trapdoor",
    rev: "the scratches",
    g: "⚠️ နံရံပေါ်မှာတော့ လက်သည်းနဲ့ ခြစ်ထားတဲ့ရာတွေ။ တံခါးအောက်ပိုင်းတစ်ခုလုံး။",
    p: "⚠️ THE IMAGE THE WHOLE FILM IS FOR, AND IT IS A PIECE OF WOOD. The underside of the heavy "
      + "timber trapdoor filling the frame in raking lamplight from below. ⚠️ THE ENTIRE LOWER "
      + "HALF OF IT IS COVERED IN FINGERNAIL SCRATCHES — dense clusters of fine parallel lines "
      + "running in every direction, layered over one another again and again, some short and "
      + "frantic and some dragged the full width of a plank. ⚠️ SEVERAL SETS ARE PLAINLY MUCH "
      + "SMALLER THAN THE OTHERS AND SIT LOWER DOWN. Pale splintered wood inside the deepest "
      + "marks. ⚠️ BARE TIMBER, DUST AND LAMPLIGHT — nothing else is in the frame.",
    u: ["နံရံပေါ်မှာတော့ လက်သည်းနဲ့ ခြစ်ထားတဲ့ရာတွေ။",
        "တံခါးအောက်ပိုင်းတစ်ခုလုံး။"] },

  { t: "I Am Sorry", l: "မြေအောက်ခန်း", k: "insert", w: ["ဦးလေးမြင့်"],
    g: "ဦးလေးမြင့် ဒူးထောက်ကျသွားတယ်။ “တောင်းပန်ပါတယ်…”",
    p: "U Lay Myint down on both knees on the cellar floor in the lamplight, ⚠️ FOLDED RIGHT "
      + "FORWARD WITH HIS FOREHEAD ALMOST TO THE EARTH and both hands flat on the ground in front "
      + "of him. His face is not visible. ⚠️ HE IS FACING THE DARK CORNER. Dust in the lamp beam "
      + "around him.",
    u: ["ဦးလေးမြင့် ဒူးထောက်ကျသွားတယ်။",
        "“တောင်းပန်ပါတယ်…”"] },

  { t: "Give Mother Back the Ground", c: [[3, "stinger"]], l: "တောစပ်", k: "wide",
    w: ["ကိုကျော်သိန်း", "ဒေါ်ရီရီ"],
    g: "⚠️ နောက်က လူသေတွေအားလုံး တစ်ပြိုင်နက် တုန်သွားကြတယ်။ ပါးစပ်တွေ ဖွင့်တယ်။ “အမေ့ကို မြေပြန်ပေး”",
    p: "Wide on the clearing from the open hole outwards: ⚠️ THE WHOLE RING OF STANDING DEAD "
      + "CAUGHT IN ONE SHUDDER TOGETHER — every figure's head has come up and every mouth has "
      + "opened at the same instant, all of them still rooted where they stand. Lamplight from "
      + "the hole reaches only the nearest few; the rest are shapes.",
    u: ["အဲဒီအချိန် နောက်က လူသေတွေအားလုံး တစ်ပြိုင်နက် တုန်သွားကြတယ်။",
        "ပါးစပ်တွေ ဖွင့်တယ်။ ကလေးမလေးရဲ့အသံ ထွက်လာတယ်။",
        "“အမေ့ကို မြေပြန်ပေး”"] },

  // ── XI · THE BURIAL ───────────────────────────────────────────────────────
  { t: "In Front of the Whole Village", l: "သင်္ချိုင်း", k: "grave", w: ["ဦးလေးမြင့်"],
    g: "နောက်နေ့ မနက် ရွာတစ်ရွာလုံးအရှေ့မှာ မရွှေရင်နဲ့ ကလေးသုံးယောက်ရဲ့အရိုးတွေကို သင်္ဂြိုဟ်ပေးကြတယ်။",
    p: "⚠️ THE REMAINS ARE NEVER SEEN. Morning in the graveyard under overcast light: ⚠️ FOUR "
      + "BUNDLES WRAPPED IN CLEAN WHITE CLOTH laid side by side on a mat beside an open grave — "
      + "one long and three short — tied neatly, with flowers set on each. The whole village "
      + "stands round in a wide quiet ring. U Lay Myint is at the front.",
    u: ["နောက်နေ့ မနက် ရွာတစ်ရွာလုံးအရှေ့မှာ မရွှေရင်နဲ့ ကလေးသုံးယောက်ရဲ့အရိုးတွေကို သင်္ဂြိုဟ်ပေးကြတယ်။",
        "ဦးလေးမြင့်က လူတိုင်းရှေ့မှာ အမှန်အတိုင်း ပြောတယ်။"] },

  { t: "She Had Done Nothing", l: "သင်္ချိုင်း", k: "wide",
    g: "သူ ပါခဲ့တယ်။ ရွာသားတွေ ပါခဲ့တယ်။ မရွှေရင်က အပြစ်မရှိဘူး။ သူတို့ ကြောက်စိတ်နဲ့ လူတစ်မိသားစုလုံးကို သေစေခဲ့တယ်။",
    p: "Wide on the gathered village in the graveyard in overcast morning light, ⚠️ EVERY FACE "
      + "TURNED DOWN OR AWAY — nobody looking at anybody else, several people crying, some with "
      + "hands over their mouths. ⚠️ AN ENTIRE VILLAGE HEARING SOMETHING ABOUT ITSELF. Ordinary "
      + "people in ordinary clothes.",
    u: ["သူ ပါခဲ့တယ်။ ရွာသားတွေ ပါခဲ့တယ်။",
        "မရွှေရင်က အပြစ်မရှိဘူး။",
        "သူတို့ ကြောက်စိတ်နဲ့ လူတစ်မိသားစုလုံးကို သေစေခဲ့တယ်။"] },

  { t: "One After Another They Fell", l: "သင်္ချိုင်း", k: "wide",
    w: ["ကိုကျော်သိန်း", "ဒေါ်ရီရီ"],
    g: "⚠️ အရိုးတွေ မြေထဲချတဲ့အချိန် ပတ်ပတ်လည်မှာ ရပ်နေတဲ့ လူသေတွေ တစ်ယောက်ပြီးတစ်ယောက် လဲကျသွားတယ်။",
    p: "Wide on the graveyard in daylight: ⚠️ THE STANDING DEAD ARE GOING DOWN AROUND THE EDGES "
      + "OF THE CROWD — some already lying flat and still on the grass, one caught in the act of "
      + "folding at the knees, a few at the back still upright. ⚠️ THEY ARE FALLING LIKE DROPPED "
      + "CLOTHES, straight down, without violence. The villagers are standing back from them.",
    u: ["အရိုးတွေ မြေထဲချတဲ့အချိန်—",
        "ပတ်ပတ်လည်မှာ ရပ်နေတဲ့ လူသေတွေ တစ်ယောက်ပြီးတစ်ယောက် လဲကျသွားတယ်။",
        "ကိုကျော်သိန်း။ ဒေါ်ရီရီ။ ကျန်တဲ့သူတွေ။ အားလုံး ပြန်သေသွားကြတယ်။"] },

  // ── XII · THE BRACELET ────────────────────────────────────────────────────
  { t: "A Small Thing", c: [[2, "stinger"]], l: "သင်္ချိုင်း", k: "insert", rev: "the bracelet",
    g: "⚠️ မရွှေရင်တို့အရိုးတွေကို မြေချပြီးတဲ့နောက် သေးသေးလေးတစ်ခု တွေ့ရတယ်။ ကလေးအရိုးစုမှာ လက်ကောက်လေးတစ်ခု ရှိတယ်။",
    p: "Insert on a square of clean white cloth in daylight with ⚠️ ONE SMALL THIN TARNISHED "
      + "CHILD'S BANGLE lying alone in the middle of it, slightly bent out of round, pale dry "
      + "soil caught in its surface. ⚠️ NOTHING ELSE IS ON THE CLOTH. An ordinary cheap "
      + "much-worn thing.",
    u: ["ဒါပေမယ့် မရွှေရင်တို့အရိုးတွေကို မြေချပြီးတဲ့နောက် သေးသေးလေးတစ်ခု တွေ့ရတယ်။",
        "မသဲရဲ့အရိုးလို့ ထင်ထားတဲ့ ကလေးအရိုးစုမှာ လက်ကောက်လေးတစ်ခု ရှိတယ်။"] },

  { t: "That Is Not Ma Thé", c: [[2, "bigstinger"]], l: "သင်္ချိုင်း", k: "myint", w: ["ဦးလေးမြင့်"],
    g: "⚠️ ဦးလေးမြင့်က မြင်တာနဲ့ မျက်နှာပျက်သွားတယ် — “ဒါ မသဲ မဟုတ်ဘူး” … “မသဲမှာ ဒီလက်ကောက် မရှိဘူး” … “ဒါ သူ့ညီမ”",
    p: "Close on U Lay Myint in daylight looking down at something in his hand, ⚠️ HIS FACE "
      + "COLLAPSING AS HE RECOGNISES IT — not grief this time but alarm, the eyes coming up fast. "
      + "Overcast morning light.",
    u: ["ဦးလေးမြင့်က မြင်တာနဲ့ မျက်နှာပျက်သွားတယ်။ “ဒါ မသဲ မဟုတ်ဘူး”",
        "ကျွန်တော် သူ့ကို ကြည့်တယ်။ “ဘာ?” “မသဲမှာ ဒီလက်ကောက် မရှိဘူး”",
        "သူ လက်ကို တုန်တုန်နဲ့ အရိုးစုကို ညွှန်တယ်။ “ဒါ သူ့ညီမ”"] },

  { t: "A Vent in the Wall", c: [[3, "stinger"]], l: "မြေအောက်ခန်း", k: "insert",
    g: "⚠️ မြေအောက်ခန်းကို ပြန်သွားကြတယ်။ နံရံတစ်ဖက်ကို သေချာကြည့်တော့ လူကလေးတစ်ယောက် ဝင်လို့ရမယ့် လေဝင်ပေါက်ဟောင်းတစ်ခု ရှိနေတယ်။",
    p: "Insert on the cellar's earth wall low down by lamplight: ⚠️ A SMALL OLD BRICK-LINED AIR "
      + "VENT set into it at floor level, its cover long gone, ⚠️ NARROW BUT NOT NARROW ENOUGH — "
      + "clearly too small for an adult and clearly just big enough for a thin child. Beyond it "
      + "the passage runs away and turns upward into black. Old dry soil at its lip.",
    u: ["ကျွန်တော် ရင်ထဲ တစ်ချက်ကျသွားတယ်။ “ဒါဆို မသဲက ဘယ်မှာလဲ”",
        "မြေအောက်ခန်းကို ပြန်သွားကြတယ်။ ဒီတစ်ခါ နံရံတစ်ဖက်ကို သေချာကြည့်တော့—",
        "လူကလေးတစ်ယောက် ဝင်လို့ရမယ့် လေဝင်ပေါက်ဟောင်းတစ်ခု ရှိနေတယ်။"] },

  { t: "She Got Out", l: "မြေအောက်ခန်း", k: "htet", w: ["ထက်အောင်"],
    g: "⚠️ မသဲ — မသေခဲ့ဘူး။ အဲဒီည သူ ထွက်ပြေးနိုင်ခဲ့တယ်။",
    p: "Close on Htet Aung crouched in the cellar by lamplight, ⚠️ HIS FACE LIT FROM BELOW AND "
      + "COMPLETELY STILL as the whole thing rearranges itself in his head. He is looking at the "
      + "vent, not at the room. Dust in the beam.",
    u: ["ကျွန်တော် တောင့်သွားတယ်။",
        "မသဲ — မသေခဲ့ဘူး။",
        "အဲဒီည သူ ထွက်ပြေးနိုင်ခဲ့တယ်။"] },

  { t: "A Child on the Forest Road", l: "တောစပ်", k: "memory", w: ["မသဲ"],
    g: "⚠️ မီးလောင်တဲ့ညနောက်တစ်နေ့ မနက်မှာ တောလမ်းဘေးမှာ ကလေးမလေးတစ်ယောက် တွေ့ခဲ့တယ်တဲ့။ တစ်ကိုယ်လုံး ရွှံ့တွေ။ ဘာမှ မပြောဘူး။",
    p: "⚠️ A MEMORY, TWENTY YEARS EARLIER, IN GREY EARLY MORNING LIGHT. A ten-year-old girl "
      + "standing alone at the side of a forest track, ⚠️ COVERED HEAD TO FOOT IN DRIED MUD, her "
      + "dress stiff with it, her hair matted, ⚠️ HER FINGERTIPS DARK AND HER NAILS PACKED WITH "
      + "EARTH. She is looking straight ahead at nothing and saying nothing. ⚠️ SHE IS ALIVE, "
      + "WHOLE AND UNHURT — filthy and silent and completely unharmed.",
    u: ["ရွာသားတွေ စပြီး ရှာကြတယ်။ နောက်ဆုံး အဘွားကြီးတစ်ယောက်က ပြောတယ်။",
        "မီးလောင်တဲ့ညနောက်တစ်နေ့ မနက်မှာ တောလမ်းဘေးမှာ ကလေးမလေးတစ်ယောက် တွေ့ခဲ့တယ်တဲ့။",
        "တစ်ကိုယ်လုံး ရွှံ့တွေ။ လက်သည်းတွေ သွေးထွက်နေတယ်။ ဘာမှ မပြောဘူး။"] },

  { t: "She Died of Fever Years Later", l: "တောစပ်", k: "htet", w: ["ထက်အောင်"],
    g: "သူ့ကို အခြားရွာက မိသားစုတစ်စု ခေါ်သွားတယ်။ နှစ်အနည်းငယ်ကြာတော့ အဲဒီကလေးမလေးလည်း သေသွားတယ်။ အဖျားနဲ့။",
    p: "Close on Htet Aung in overcast daylight, ⚠️ HIS FACE HOLLOWING OUT as he puts the last "
      + "piece in — a girl who survived, was taken away, and did not get to grow up either. He is "
      + "looking at nothing in particular.",
    u: ["သူ့ကို အခြားရွာက မိသားစုတစ်စု ခေါ်သွားတယ်။",
        "နှစ်အနည်းငယ်ကြာတော့ အဲဒီကလေးမလေးလည်း သေသွားတယ်။ အဖျားနဲ့။",
        "ကျွန်တော် ဦးလေးမြင့်ကို ကြည့်တယ်။ “ဒါဆို…” သူ ခေါင်းညိတ်တယ်။"] },

  { t: "Her Own Body Was Gone", l: "သင်္ချိုင်း", k: "grave",
    g: "⚠️ သူ့ဝိညာဉ်က ရွာကို ပြန်လာခဲ့တာ။ ဒါပေမယ့် သူ့မှာ ကိုယ်မရှိတော့ဘူး။ ဒါကြောင့် သင်္ချိုင်းထဲက လူသေတွေကို ကိုယ်အဖြစ် သုံးခဲ့တာ။",
    p: "The graveyard in overcast daylight, ⚠️ EMPTY OF PEOPLE, the rows of low mounds and "
      + "leaning markers running away up the slope to the treeline. Ordinary, quiet and tidy. "
      + "⚠️ NOTHING IS HAPPENING IN THIS IMAGE — it is simply a place where a great many bodies "
      + "are kept.",
    u: ["မသဲက အဲဒီည အသက်ရှင်လွတ်ခဲ့တယ်။ သူ့အမေနဲ့ညီမတွေကို ကယ်မပေးနိုင်ခဲ့ဘူး။",
        "နှစ်တွေကြာပြီး သူ ကိုယ်တိုင် သေသွားတဲ့အချိန်မှာ သူ့ဝိညာဉ်က ရွာကို ပြန်လာခဲ့တာ။",
        "ဒါပေမယ့် သူ့မှာ ကိုယ်မရှိတော့ဘူး။ ဒါကြောင့် သင်္ချိုင်းထဲက လူသေတွေကို ကိုယ်အဖြစ် သုံးခဲ့တာ။"] },

  // ── XIII · MA THÉ ─────────────────────────────────────────────────────────
  { t: "The Village Went Quiet", l: "ရွာလမ်း", k: "lane",
    g: "အဲဒီနောက်ပိုင်း ရွာမှာ လူသေပြန်လမ်းလျှောက်တာ မရှိတော့ဘူး။ ညဘက်လည်း တိတ်တိတ်ပဲ။",
    p: "The village lane at night as in the master plate, ⚠️ WITH DOORS OPEN AND LAMPLIGHT "
      + "SPILLING OUT AGAIN and two or three ordinary people sitting out on their steps. ⚠️ AN "
      + "ORDINARY EVENING — the same lane as the opening shots and nothing wrong with it.",
    u: ["အဲဒီနောက်ပိုင်း ရွာမှာ လူသေပြန်လမ်းလျှောက်တာ မရှိတော့ဘူး။ ညဘက်လည်း တိတ်တိတ်ပဲ။",
        "ကိုကျော်သိန်းကို ပြန်သင်္ဂြိုဟ်ပေးတယ်။ ဒေါ်ရီရီကိုလည်း ပြန်မြေချတယ်။",
        "အကုန်ပြီးသွားပြီလို့ပဲ ထင်ကြတယ်။"] },

  { t: "A Month Later", l: "သင်္ချိုင်း", k: "grave", w: ["ထက်အောင်"],
    g: "တစ်လလောက်ကြာတော့ ကျွန်တော် သင်္ချိုင်းနားကနေ ဖြတ်လာတယ်။ မိုးအုံ့နေတယ်။ လမ်းမှာ လူမရှိဘူး။",
    p: "Htet Aung walking along the path past the graveyard under a heavy overcast sky, small in "
      + "frame, a cloth bag over one shoulder. ⚠️ THE PATH AND THE GRAVEYARD ARE BOTH COMPLETELY "
      + "EMPTY. Flat grey light, the air still before rain.",
    u: ["တစ်လလောက်ကြာတော့ ကျွန်တော် သင်္ချိုင်းနားကနေ ဖြတ်လာတယ်။",
        "မိုးအုံ့နေတယ်။ လမ်းမှာ လူမရှိဘူး။"] },

  { t: "A Girl Came Out of the Graveyard", c: [[1, "stinger"]], l: "သင်္ချိုင်း", k: "the", w: ["မသဲ"],
    g: "⚠️ သင်္ချိုင်းထဲကနေ ကလေးမလေးတစ်ယောက် ထွက်လာတယ်။ ဒီတစ်ခါ သူ ဘယ်သူ့ကိုမှ ကိုယ်အဖြစ် မသုံးထားဘူး။ သူ့ပုံစံနဲ့သူ။",
    p: "⚠️ SHE LOOKS LIKE A LIVING CHILD. Ma Thé standing among the grave mounds in flat grey "
      + "daylight, ten years old, in a faded old-fashioned cotton dress, barefoot, her long hair "
      + "loose and a little tangled. ⚠️ NORMAL WARM SKIN, CLEAR EYES, FEET FLAT ON THE GROUND, "
      + "AN ORDINARY SHADOW — no pallor, nothing transparent, nothing glowing. ⚠️ THE ONLY THING "
      + "WRONG IS HER HANDS: dark soil packed under every nail and ground into the fingertips.",
    u: ["အဲဒီအချိန် သင်္ချိုင်းထဲကနေ ကလေးမလေးတစ်ယောက် ထွက်လာတယ်။ အသက်ဆယ်နှစ်လောက်။",
        "အဝတ်ဟောင်း။ ခြေဗလာ။ လက်သည်းတွေမှာ မြေမှုန့်တွေ။",
        "ဒီတစ်ခါ သူ ဘယ်သူ့ကိုမှ ကိုယ်အဖြစ် မသုံးထားဘူး။ သူ့ပုံစံနဲ့သူ။"] },

  { t: "Have You Found Her", l: "သင်္ချိုင်း", k: "the", w: ["မသဲ"],
    g: "“မသဲလား” သူ ခေါင်းညိတ်တယ်။ “အမေကို တွေ့ပြီလား” သူ ထပ်ခေါင်းညိတ်တယ်။",
    p: "Close on Ma Thé at the girl's own eye height, looking up and slightly off to one side at "
      + "someone standing above her, ⚠️ HER FACE CALM AND ORDINARY AND ENTIRELY UNFRIGHTENING, "
      + "caught at the end of a single small nod. Flat grey daylight, grave mounds soft behind "
      + "her.",
    u: ["သူ ကျွန်တော့်ကို ကြည့်တယ်။ ကျွန်တော် တောင့်သွားတယ်။ “မသဲလား”",
        "သူ ခေါင်းညိတ်တယ်။ “အမေကို တွေ့ပြီလား”",
        "သူ ထပ်ခေါင်းညိတ်တယ်။"] },

  { t: "Thank You", l: "သင်္ချိုင်း", k: "the", w: ["မသဲ"],
    g: "⚠️ ပြီးတော့ ပထမဆုံး ပြုံးတယ်။ အရမ်းသေးသေးလေး။ “ကျေးဇူးတင်ပါတယ်”",
    p: "Close on Ma Thé, ⚠️ SMILING FOR THE FIRST TIME — a very small closed-mouth smile that "
      + "barely moves her face, warm and real and a little shy. ⚠️ IT IS AN ORDINARY CHILD'S "
      + "SMILE AND THERE IS NOTHING WRONG WITH IT. Flat grey daylight.",
    u: ["ပြီးတော့ ပထမဆုံး ပြုံးတယ်။ အရမ်းသေးသေးလေး။",
        "“ကျေးဇူးတင်ပါတယ်”",
        "ကျွန်တော် အသက်ရှူချလိုက်တယ်။"] },

  { t: "It Was Not Only Me", c: [[3, "stinger"]], l: "သင်္ချိုင်း", k: "the", w: ["မသဲ"],
    g: "⚠️ သူ ရုတ်တရက် ပြန်လှည့်တယ် — “ကိုကို” … “ကျွန်မပဲ သူတို့ကို နှိုးခဲ့တာ မဟုတ်ဘူး”",
    p: "Ma Thé half turned away and then turned back, ⚠️ THE SMILE COMPLETELY GONE AND HER FACE "
      + "FLAT AND SERIOUS, one arm raised and a single finger pointing away past camera towards "
      + "the far end of the graveyard. ⚠️ IT IS THE SAME GESTURE THE DEAD MADE AT THE DOORWAYS. "
      + "Flat grey daylight.",
    u: ["သူ လှည့်ထွက်မလို့ လုပ်တယ်။ ပြီးတော့ ရုတ်တရက် ပြန်လှည့်တယ်။ “ကိုကို” “ဘာလဲ”",
        "သူ သင်္ချိုင်းအနောက်ဘက်ကို လက်ညှိုးထိုးတယ်။",
        "“ကျွန်မပဲ သူတို့ကို နှိုးခဲ့တာ မဟုတ်ဘူး”"] },

  { t: "Some Were Already Awake", c: [[2, "bigstinger"]], l: "သင်္ချိုင်း", k: "the", w: ["မသဲ"],
    g: "⚠️ “တချို့က… ကျွန်မ မခေါ်ခင်ကတည်းက နိုးနေပြီးသား” ပြီးတော့ သူ ပျောက်သွားတယ်။",
    p: "Close on Ma Thé, ⚠️ NOT LOOKING AT CAMERA BUT PAST IT towards the west end of the "
      + "graveyard, her mouth open on the end of a sentence, her expression neither frightened "
      + "nor unkind — a child stating a fact she assumed was already known. Flat grey daylight, "
      + "the first rain beginning to mark her dress.",
    u: ["မသဲက ပြုံးတာရပ်သွားတယ်။ “တချို့က…”",
        "သူ သင်္ချိုင်းဘက်ကို ကြည့်တယ်။",
        "“ကျွန်မ မခေါ်ခင်ကတည်းက နိုးနေပြီးသား” ပြီးတော့ သူ ပျောက်သွားတယ်။"] },

  { t: "I Did Not Want to Look", l: "သင်္ချိုင်း", k: "htet", w: ["ထက်အောင်"],
    g: "ကျွန်တော် သင်္ချိုင်းအနောက်ဘက်ကို မကြည့်ချင်ဘူး။ ဒါပေမယ့် မြေကြီးကို ခြစ်နေတဲ့အသံ ကြားလာတယ်။",
    p: "Close on Htet Aung alone on the path in flat grey light, ⚠️ HIS HEAD DELIBERATELY TURNED "
      + "AWAY FROM THE GRAVEYARD and his eyes fixed hard on the path ahead, every muscle in his "
      + "face engaged in not looking. First rain on his shoulders.",
    u: ["ကျွန်တော် သင်္ချိုင်းအနောက်ဘက်ကို မကြည့်ချင်ဘူး။",
        "ဒါပေမယ့် မြေကြီးကို ခြစ်နေတဲ့အသံ ကြားလာတယ်။ ရှဲ… ရှဲ… ရှဲ…"] },

  { t: "Not From One Place", c: [[1, "finalstinger"]], l: "သင်္ချိုင်း", k: "ground", rev: "the last image",
    g: "⚠️ တစ်နေရာတည်း မဟုတ်ဘူး။ နေရာအများကြီးကနေ။",
    p: "FINAL SHOT. Camera low on the earth at the west end of the graveyard in flat grey light. "
      + "⚠️ IN SEVERAL PLACES ACROSS THE FRAME AT ONCE, the soil of separate grave mounds has "
      + "been pushed up into small loose heaps from beneath, cracked open at the top, with fresh "
      + "dark earth spilled around each one. ⚠️ NOTHING IS EMERGING AND NOTHING IS VISIBLE IN ANY "
      + "OF THE OPENINGS — only moved soil, in five or six different places. First rain beginning "
      + "to dimple the loose earth. Hold on it.",
    u: ["တစ်နေရာတည်း မဟုတ်ဘူး။ နေရာအများကြီးကနေ။",
        "အဲဒီအချိန်မှာ ကျွန်တော် နားလည်သွားတယ်။",
        "မသဲက အမေကို ရှာဖို့ လူသေတွေကို နှိုးခဲ့တာ မှန်တယ်။",
        "ဒါပေမယ့် အကုန်လုံးကို သူ နှိုးခဲ့တာ မဟုတ်ဘူး။"] },
];

/** Short, because the shot body is the part worth reading. */
const CONT =
  "Continuity: the dead in this film are people who have been lying in the earth — flat grey-brown "
  + "skin, grey lips, open dull eyes, pale soil worked into every crease and under the nails, "
  + "burial clothes stiff with dried mud. Their skin is whole and smooth everywhere and their "
  + "mouths stay closed except where a shot says otherwise. Everyone living in frame is unharmed "
  + "and ordinary.";

const STYLE =
  "Rural Myanmar, present day. Photorealism, 16:9, 35mm grain, level camera, natural depth of "
  + "field. Clean neutral colour. Every place is an ordinary working village and every object is "
  + "an ordinary object. One still instant. Surfaces are blank of writing except where a shot "
  + "names it.";

const TIME = {
  night: "TIME: NIGHT IN THE VILLAGE. The only light is what comes out of the houses — small warm "
    + "squares from doorways and shutters falling on the earth — and clear ordinary darkness "
    + "everywhere between them.",
  day: "TIME: DAYTIME, OVERCAST. Flat even grey daylight, no sun and no strong shadows.",
  dawn: "TIME: FIRST LIGHT. Grey-blue pre-dawn, dew on everything, the sun not up.",
  warm: "TIME: A WARM DAYLIT MEMORY, TWENTY YEARS EARLIER. Bright green afternoon sunlight, "
    + "saturated and alive — visibly a different time of day and a different world from the "
    + "present-day shots.",
  lamp: "TIME: UNDERGROUND BY LAMPLIGHT. One kerosene hand lamp is the whole of the light, so it "
    + "falls off sharply and the far side of the space is simply black. Cold, dry, still air.",
};

/** Which clock each shot sits on, by title. Everything unlisted is night. */
const AT = {
  day: new Set(["He Died Yesterday", "I Was There Until the Earth Went On", "The Grave Was Open",
    "Three Sets of Footprints", "He Knew", "Nothing Is Left of It Now",
    "In Front of the Whole Village", "She Had Done Nothing", "One After Another They Fell",
    "A Small Thing", "That Is Not Ma Thé", "She Died of Fever Years Later",
    "She Had No Body of Her Own", "A Month Later", "A Girl Came Out of the Graveyard",
    "Have You Found Her", "Thank You", "It Was Not Only Me", "Some Were Already Awake",
    "I Did Not Want to Look", "Not From One Place"]),
  dawn: new Set(["Lying in the Bean Field", "It Is Not Them Doing It", "A Child on the Forest Road"]),
  warm: new Set(["There Was a House at the Forest Edge", "Ma Shwe Yin",
    "They Came to Her for Medicine", "They Blamed Her"]),
  lamp: new Set(["Cold Air Came Up", "The Lamp Went Down", "Shapes at the Edge of the Light",
    "The Underside of the Door", "I Am Sorry", "A Vent in the Wall", "She Got Out"]),
};

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = AT.lamp.has(s.t) ? TIME.lamp
    : AT.warm.has(s.t) ? TIME.warm
    : AT.dawn.has(s.t) ? TIME.dawn
    : AT.day.has(s.t) ? TIME.day
    : TIME.night;
  s.cont = CONT;
  s.style = STYLE;
});

export { CONT, STYLE };
