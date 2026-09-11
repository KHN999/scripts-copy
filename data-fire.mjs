/**
 * ကျွန်တော့်ကို ကယ်ခဲ့တဲ့လူက မမွေးသေးဘူး — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * THE FOUR THINGS THAT MAKE THIS STORY WORK.
 *
 * 1. U HLA MYINT IS AUNG PHYO, TWENTY-EIGHT YEARS OLDER. Their references must
 *    read as the same man aged, not as two men: same brow, same one-sided dimple,
 *    same habit of biting the lower lip. The two tells are planted in act one and
 *    paid off at the end — the pale burn scar running thumb-base to wrist on the
 *    LEFT hand, and the bad LEFT knee that makes him drag the leg. Both must be
 *    visible early, before the reader knows to look.
 *
 * 2. THE BOY IS THE NARRATOR AT FOUR. The tell is a small mole above the RIGHT
 *    eyebrow, and the blue toy car with one front wheel missing. Both appear
 *    again at the end in the present day.
 *
 * 3. THE MOTHER'S RIGHT SIDE IS NEVER SHOWN. The script says he did not want to
 *    see it. Left side is an ordinary woman's face from a family photograph;
 *    the right is always turned away, behind smoke, cropped or in shadow. No
 *    burns, no injury, no gore — the refusal is the point.
 *
 * 4. THE OTHER DEAD ARE NEVER FULL FIGURES. Hands under doors with smoke
 *    streaming from the wrists, a shape on all fours in a corridor with light
 *    where eyes should be. Never a resolved body, never a face.
 */

export const CAST = [
  { name: "ထက်နိုင်", en: "Htet Naing — the narrator, thirty-two",
    prompt: "A Burmese man of thirty-two, working build, short hair, a plain work shirt and cargo "
      + "trousers, a head torch pushed up on his forehead. ⚠️ A small dark mole just above the RIGHT "
      + "eyebrow. Steady and practical." },
  { name: "အောင်ဖြိုး", en: "Aung Phyo — his young workmate, twenty-four",
    prompt: "A Burmese man of twenty-four, wiry, quick, a t-shirt under an open work shirt, a canvas "
      + "tool bag. Talkative and cheerful. ⚠️ Distinctive features that must recur on U Hla Myint: a "
      + "strong straight brow, a dimple in the LEFT cheek only when he smiles, and a habit of biting "
      + "his lower lip while talking." },
  { name: "ဦးလှမြင့်", en: "U Hla Myint — the client, fifties. ⚠️ The same man as Aung Phyo",
    prompt: "A Burmese man in his early fifties, greying, heavier, a pressed shirt. ⚠️ HE MUST READ AS "
      + "AUNG PHYO TWENTY-EIGHT YEARS OLDER — the same straight brow, the same left-cheek dimple, the "
      + "same lower-lip habit. Two permanent marks: a pale smooth burn scar running from the base of "
      + "the LEFT thumb to the wrist, and a stiff LEFT knee that makes him drag that leg when he walks." },
  { name: "ကလေး", en: "The boy — the narrator at four",
    prompt: "A Burmese boy of about four in a vest and shorts, soot smeared across his face, holding a "
      + "blue plastic toy car with ONE FRONT WHEEL MISSING. ⚠️ A small dark mole just above the RIGHT "
      + "eyebrow — the same mark the narrator has." },
  { name: "အမေ", en: "The mother, 1998",
    prompt: "A Burmese woman of about thirty in a house blouse, long hair loose and fallen forward. "
      + "⚠️ ONLY THE LEFT SIDE OF HER FACE IS EVER SHOWN, and it is completely ordinary and unhurt — "
      + "the face from a family photograph. The right side is always turned away, cropped by frame, "
      + "hidden behind hair or lost in smoke. Never show injury, burns or gore anywhere on her." },
];

export const LOCS = [
  { name: "တိုက်ဟောင်း", en: "The old building, present day",
    prompt: "A two-storey mid-century Yangon building at the end of a narrow lane, its street face "
      + "recently repainted but the rear brickwork still carrying old fire scorching. Some window "
      + "openings bricked up. A new galvanised steel stair bolted to the outside of the side wall." },
  { name: "စင်္ကြံ", en: "The upstairs corridor, present day",
    prompt: "A dusty upstairs corridor in an empty building, daylight from one end, thick dust on the "
      + "boards, a big work lamp on a stand throwing hard light, a chalk arrow drawn on a door lintel." },
  { name: "အခန်း", en: "The room — 1998, burning",
    prompt: "A lived-in 1990s Myanmar room at night with a fire taking hold elsewhere in the building: "
      + "a table, a blue enamel cup, a wooden wardrobe in the corner, a wall calendar. ⚠️ Everything in "
      + "it is CLEAN AND DUSTLESS while the corridor outside is thick with dust. Smoke enters under the "
      + "doors; the air is visibly hot." },
  { name: "လမ်း", en: "The lane outside",
    prompt: "A narrow Yangon lane at the foot of the building: parked motorbikes, a compound wall, "
      + "shopfront shutters. Daylight, ordinary, busy." },
  { name: "အဖေ့အိမ်", en: "The father's house, present day",
    prompt: "A modest older Myanmar living room in daylight: a glass-fronted cabinet, framed family "
      + "photographs, a low table, and a cardboard box of a child's old belongings opened on it." },
];

export const STYLE =
  "Yangon, Myanmar. Two time periods sharing one building: present day in flat dusty daylight, and the "
  + "night of a 1998 house fire lit by flame-glow and torch beams through heavy smoke. Cinematic "
  + "photorealism, working-men's horror rather than gothic — two tradesmen stripping fittings out of an "
  + "empty building. 35mm film grain, shallow depth of field, 16:9. ⚠️ NO GORE, NO BURNED BODIES, NO "
  + "CORPSES ANYWHERE. The dead of the fire appear only as hands beneath doors with smoke streaming "
  + "from the wrists, or a shape on all fours too far into the smoke to resolve — never a face, never "
  + "a whole figure. The mother's right side is never shown at all. No legible text, numbers, captions "
  + "or watermarks in the image.";

export const SCENES = [
  { t: "Someone Carried Me Out", l: "အခန်း",
    g: "မီးလောင်နေတဲ့အိမ်ထဲကနေ ကလေးတစ်ယောက်ကို ချီထုတ်လာတဲ့ လူငယ်တစ်ယောက်။ မီးခိုးထူ။",
    p: "A young man carrying a small child out through a smoke-filled doorway at night, both seen "
      + "from behind against firelight, neither face visible.",
    u: ["ငယ်ငယ်က မီးလောင်တဲ့အိမ်ထဲကနေ ကျွန်တော့်ကို လူတစ်ယောက် ကယ်ထုတ်ပေးခဲ့ဖူးတယ်။",
        "အဲဒီအချိန် ကျွန်တော်က လေးနှစ်။ ကျွန်တော့်ကို ကယ်တဲ့လူက အသက်နှစ်ဆယ်ကျော်လောက်။"] },

  { t: "My Father Looked for Him", l: "အဖေ့အိမ်",
    g: "သတင်းစာကြော်ငြာဟောင်းတွေ။ ဆေးရုံစာရွက်တွေ။ ရှာခဲ့ပေမယ့် မတွေ့ဘူး။",
    p: "A small stack of yellowed newspaper classified pages and hospital enquiry forms spread on a "
      + "table in daylight, one advertisement circled in pen.",
    u: ["အဖေက အဲဒီလူကို ရှာခဲ့တယ်။",
        "ဆေးရုံတွေမှာ မေးတယ်။ သတင်းစာမှာ ကြော်ငြာတယ်။ မတွေ့ဘူး။"] },

  { t: "He Had Not Been Born Yet", l: null,
    g: "မွေးသက္ကရာဇ် စာရွက်တစ်ရွက်။ ရက်စွဲကို လက်ညှိုးနဲ့ တို့ထားတယ်။",
    p: "A finger resting on a date printed on an official document, the rest of the page out of "
      + "focus. The date itself not legible.",
    u: ["နှစ်ပေါင်းနှစ်ဆယ့်ရှစ်နှစ်ကြာတော့ အဲဒီလူကို ကျွန်တော် သိခဲ့ရတယ်။",
        "သူ ဘယ်သူလဲဆိုတာ သိလိုက်တဲ့အချိန်မှာ ကျွန်တော် အရင်ဆုံး စစ်ကြည့်မိတာက သူ့မွေးသက္ကရာဇ်။",
        "ဘာလို့လဲဆိုတော့ ကျွန်တော့်ကို သူကယ်ခဲ့တဲ့နှစ်မှာ သူ့ကိုတောင် မမွေးသေးဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "My Name Is Htet Naing", l: null, w: ["ထက်နိုင်"],
    g: "အဆောက်အအုံဟောင်းတစ်ခုထဲမှာ မီးလိုင်းဖြုတ်နေတဲ့ လက်တွေ။",
    p: "Work-roughened hands stripping copper cable from a wall conduit in an empty building, tools "
      + "and coiled wire at their feet.",
    u: ["ကျွန်တော့်နာမည် ထက်နိုင်။ အသက်သုံးဆယ့်နှစ်နှစ်။",
        "အဆောက်အအုံဟောင်းတွေက မီးလိုင်းတွေ၊ စက်ပစ္စည်းတွေကို ဖြုတ်သိမ်းပေးတဲ့အလုပ် လုပ်တယ်။"] },

  { t: "Aung Phyo", l: null, w: ["အောင်ဖြိုး"],
    g: "အောင်ဖြိုး — အသက် ၂၄။ အလုပ်မြန်၊ ပါးစပ်မြန်။ ရယ်နေတယ်။",
    p: "A wiry young man laughing mid-sentence while coiling cable over his shoulder, a dimple "
      + "showing in his left cheek only.",
    u: ["အောင်ဖြိုးက ကျွန်တော့်နောက် လိုက်လုပ်နေတဲ့ကောင်လေး။ အသက်နှစ်ဆယ့်လေးနှစ်။",
        "အလုပ်မြန်တယ်။ ပါးစပ်လည်း မြန်တယ်။",
        "တစ်ခါတလေ သူ့စကားကို နားထောင်နေရတာနဲ့ အလုပ်ပင်ပန်းတာ မေ့သွားတယ်။"] },

  { t: "The Client", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "ဦးလှမြင့် — အသက် ၅၀ ကျော်။ လမ်းထဲမှာ စောင့်နေတယ်။",
    p: "A greying man in his fifties in a pressed shirt standing in a narrow lane outside an old "
      + "building, waiting, weight carried on one leg.",
    u: ["အဲဒီနေ့အလုပ်ကို ဦးလှမြင့်ဆိုတဲ့ လူကြီးတစ်ယောက်က အပ်တာ။",
        "ရန်ကုန်က နှစ်ထပ်တိုက်ဟောင်းတစ်လုံးကို မဖြိုခင် အသုံးဝင်တဲ့ပစ္စည်းတွေ ဖြုတ်ယူပေးဖို့။"] },

  { t: "He Dragged One Leg", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "ဦးလှမြင့် လမ်းလျှောက်တဲ့အခါ ဘယ်ဘက်ခြေတစ်ဖက်ကို ဆွဲတယ်။",
    p: "A man walking away from camera down a lane, his left leg swinging stiffly from the hip "
      + "rather than bending at the knee.",
    u: ["ဦးလှမြင့်က အသက်ငါးဆယ်ကျော်လောက်။",
        "ဘယ်ဘက်ဒူး နည်းနည်းမကောင်းဘူး။ လမ်းလျှောက်ရင် ခြေတစ်ဖက်ကို ဆွဲတတ်တယ်။"] },

  { t: "The Scar on His Left Hand", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "ဘယ်လက်မှာ အပူလောင်ဒဏ်ရာဟောင်း။ လက်မအရင်းကနေ လက်ကောက်ဝတ်အထိ ဖြူဖြူစင်းကြီး။",
    p: "Close on an older man's left hand at his side: a smooth pale healed burn scar running from "
      + "the base of the thumb to the wrist. Old, not raw.",
    u: ["ဘယ်လက်မှာလည်း အပူလောင်ဒဏ်ရာဟောင်းတစ်ခု ရှိတယ်။",
        "လက်မအရင်းကနေ လက်ကောက်ဝတ်အထိ ဖြူဖြူစင်းကြီး။"],
    c: [[1, "stinger"]] },

  { t: "He Stared at Aung Phyo", l: "လမ်း", w: ["ဦးလှမြင့်", "အောင်ဖြိုး"],
    g: "ဦးလှမြင့်က အောင်ဖြိုးကို အကြာကြီး ကြည့်နေတယ်။",
    p: "An older man looking at a young workman for a beat too long, the young man beginning to "
      + "notice, both in flat daylight.",
    u: ["ကျွန်တော်တို့ကို တွေ့တော့ သူက အောင်ဖြိုးကို အကြာကြီး ကြည့်နေတယ်။",
        "အောင်ဖြိုးက ပြုံးပြတယ်။ “ဦးလေး၊ ကျွန်တော့်မျက်နှာမှာ တစ်ခုခု ပေနေလို့လား”"] },

  { t: "You're Still Young", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "ဦးလှမြင့်က ခေါင်းခါပြီး “ငယ်သေးတာပဲ” လို့ ပြောတယ်။",
    p: "Close on the older man's face as he shakes his head slightly, the expression unreadable and "
      + "not quite a smile.",
    u: ["ဦးလှမြင့်က ခေါင်းခါတယ်။",
        "ပြီးတော့ “ငယ်သေးတာပဲ” လို့ ပြောတယ်။"],
    c: [[1, "stinger"]] },

  { t: "Old Fire on the Back Wall", l: "တိုက်ဟောင်း",
    g: "အဆောက်အအုံရှေ့က အသစ်ပြင်ထားပေမယ့် နောက်ဘက်အုတ်နံရံတွေမှာ မီးလောင်ရာတွေ ကျန်နေသေးတယ်။",
    p: "The rear brick wall of an old building in daylight: unmistakable old scorch plumes rising "
      + "above several openings, some of them bricked up flush.",
    u: ["အလုပ်နေရာက လမ်းကျဉ်းတစ်လမ်းအဆုံးမှာ။",
        "အဆောက်အအုံရှေ့မျက်နှာစာကို အသစ်ပြင်ထားဖူးပေမယ့် နောက်ဘက်က အုတ်နံရံတွေမှာ မီးလောင်ရာတွေ ရှိနေသေးတယ်။",
        "တချို့အခန်းတွေကို အုတ်နဲ့ ပိတ်ထားတယ်။"],
    c: [[2, "stinger"]] },

  { t: "The New Steel Stair", l: "တိုက်ဟောင်း",
    g: "လှေကားတစ်ဖက် ပြိုခဲ့လို့ ဘေးနံရံအပြင်မှာ သံလှေကားအသစ် တပ်ထားတယ်။",
    p: "A new galvanised steel external staircase bolted to the side wall of an old building, "
      + "bright against the weathered brick.",
    u: ["လှေကားတစ်ဖက် ပြိုခဲ့ဖူးလို့ ဘေးနံရံအပြင်ကနေ သံလှေကားအသစ် တပ်ထားတယ်။",
        "ကျွန်တော်တို့ အဲဒီသံလှေကားကနေ တက်တယ်။ ဦးလှမြင့်က အောက်မှာပဲ ကျန်ခဲ့တယ်။"] },

  { t: "Come Back Toward the New Things", l: "တိုက်ဟောင်း", w: ["ဦးလှမြင့်"],
    g: "ဦးလှမြင့်က အောက်ကနေ လှမ်းပြောတယ်။ သူ မရယ်ဘူး။",
    p: "Looking down a steel staircase from halfway up at an older man standing at the bottom, his "
      + "face turned up, entirely serious.",
    u: ["“လမ်းပျောက်ရင် သံလှေကားရှိတဲ့ဘက်ကို ပြန်လာ” လို့ ပြောတယ်။",
        "အောင်ဖြိုးက ရယ်တယ်။ “နှစ်ထပ်တိုက်လေးမှာ ဘယ်လိုလမ်းပျောက်မှာလဲ ဦးလေး”",
        "ဦးလှမြင့် မရယ်ဘူး။",
        "ကျွန်တော့်ကိုပဲ ကြည့်ပြီး ထပ်ပြောတယ်။ “ခေတ်သစ်ပစ္စည်းတွေရှိတဲ့ဘက်ကို ပြန်လာ။ အဲဒါကို မှတ်ထား”"],
    c: [[3, "bigstinger"]] },

  { t: "I Took It for Safety Advice", l: "စင်္ကြံ",
    g: "အပေါ်ထပ်စင်္ကြံ။ ဖုန်ထူတယ်။ လက်ကိုင်မီးကြီးတစ်လုံး ထောင်ထားတယ်။",
    p: "A dusty upstairs corridor with a large work lamp on a stand at one end, its beam raking "
      + "along the floorboards, dust hanging in it.",
    u: ["ကျွန်တော် အဲဒီစကားကို အလုပ်နဲ့ပတ်သက်တဲ့ သတိပေးချက်လို့ပဲ ယူဆခဲ့တယ်။ အဟောင်းနဲ့ အသစ် ခွဲပြောတာလို့။",
        "အပေါ်ထပ်က စင်္ကြံမှာ ဖုန်ထူတယ်။",
        "ကျွန်တော်တို့ ဝင်လာတဲ့နေရာမှာ မီးအလင်းရအောင် လက်ကိုင်မီးကြီးတစ်လုံး ထောင်ထားတယ်။"] },

  { t: "A Chalk Arrow", l: "စင်္ကြံ", w: ["အောင်ဖြိုး"],
    g: "အောင်ဖြိုးက တံခါးပေါင်ပေါ်မှာ မြေဖြူနဲ့ မြားဆွဲတယ်။",
    p: "A young man reaching up to draw a chalk arrow on a door lintel, grinning at his own joke.",
    u: ["အောင်ဖြိုးက တံခါးပေါင်ပေါ်မှာ မြေဖြူနဲ့ မြားဆွဲတယ်။",
        "“လမ်းမပျောက်အောင်” လို့ ပြောပြီး ကိုယ့်ဘာသာ ရယ်နေတယ်။"] },

  { t: "Blue Paint Under the Char", l: "စင်္ကြံ",
    g: "စင်္ကြံအဆုံးက သစ်သားတံခါး။ အပေါ်ပိုင်း မည်းနေတယ်။ အောက်ပိုင်းမှာ အပြာရောင်ဆေး အစအနတွေ။",
    p: "A wooden door at the end of a corridor: the upper half blackened by old fire, the lower half "
      + "still carrying flakes of pale blue paint.",
    u: ["စင်္ကြံအဆုံးမှာ သစ်သားတံခါးတစ်ချပ် ရှိတယ်။",
        "တံခါးအပေါ်ပိုင်းက မည်းနေတယ်။ အောက်ပိုင်းမှာ အပြာရောင်ဆေး အစအနတွေ ကျန်နေသေးတယ်။"] },

  { t: "I Had Seen That Blue Before", l: "စင်္ကြံ", w: ["ထက်နိုင်"],
    g: "ကျွန်တော် အဲဒီအပြာရောင်ကို မြင်တော့ ရင်ထဲမှာ တစ်ချက် မသက်မသာ ဖြစ်သွားတယ်။",
    p: "Close on a man's face looking at something off-frame, a flicker of unease he cannot place.",
    u: ["ကျွန်တော် အဲဒီအပြာရောင်ကို မြင်တော့ ရင်ထဲမှာ တစ်ချက် မသက်မသာ ဖြစ်သွားတယ်။",
        "ဘယ်နေရာမှာ မြင်ဖူးလဲ မမှတ်မိဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Something Was Against It", l: "စင်္ကြံ", w: ["အောင်ဖြိုး"],
    g: "တံခါးကို တွန်းကြည့်တယ်။ အတွင်းက တစ်ခုခု ခံနေတယ်။ အောင်ဖြိုးက ပခုံးနဲ့ ဆောင့်တယ်။",
    p: "A young man throwing his shoulder against a stuck door, the frame shuddering, dust jumping "
      + "off the lintel.",
    u: ["တံခါးကို တွန်းကြည့်တယ်။ အတွင်းက တစ်ခုခု ခံနေတယ်။",
        "အောင်ဖြိုးက ပခုံးနဲ့ တစ်ချက် ဆောင့်ပေးလိုက်တယ်။ တံခါး ပွင့်သွားတယ်။"] },

  { t: "Hot Air and Smoke", l: "စင်္ကြံ",
    g: "အတွင်းကနေ ပူတဲ့လေ ထွက်လာတယ်။ မီးခိုးနံ့။ နှစ်ယောက်လုံး နောက်ဆုတ်လိုက်ကြတယ်။",
    p: "Two men recoiling from an opened doorway as visible heat-shimmer and a wash of smoke rolls "
      + "out over them into a cold dusty corridor.",
    u: ["အတွင်းကနေ ပူတဲ့လေ ထွက်လာတယ်။ မီးခိုးနံ့။",
        "ကျွန်တော်တို့ နှစ်ယောက်လုံး နောက်ဆုတ်လိုက်ကြတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Nothing in It Had Dust", l: "အခန်း",
    g: "အခန်းထဲမှာ စားပွဲ၊ အပြာရောင်ရေခွက်၊ သစ်သားဗီရို။ ပစ္စည်းအားလုံးမှာ ဖုန်မရှိဘူး။",
    p: "A 1990s room seen from the doorway: a table with a blue enamel cup, a wooden wardrobe in the "
      + "corner — every surface spotless, while the threshold in the foreground is deep in dust.",
    u: ["အခန်းထဲမှာ မီးမရှိဘူး။ စားပွဲတစ်လုံး ရှိတယ်။ အပြာရောင်ရေခွက်တစ်လုံး။ ထောင့်က သစ်သားဗီရိုတစ်လုံး။",
        "အဲဒီပစ္စည်းတွေအားလုံးမှာ ဖုန်မရှိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "The Cup Was Steaming", l: "အခန်း",
    g: "စားပွဲပေါ်က အပြာရောင်ရေခွက်ကနေ အငွေ့ထွက်နေတယ်။",
    p: "Extreme close-up of a blue enamel cup on a table with a thread of steam rising from it, "
      + "caught in a shaft of light.",
    u: ["စားပွဲပေါ်က ရေခွက်ကနေ အငွေ့ထွက်နေတယ်။",
        "အောင်ဖြိုးက ကျွန်တော့်ကို ကြည့်တယ်။ “ဒီမှာ လူနေတာလား”"],
    c: [[0, "bigstinger"]] },

  { t: "A Child Coughing in the Wardrobe", l: "အခန်း",
    g: "ဗီရိုထဲက ချောင်းဆိုးသံ ကြားရတယ်။ ကလေးအသံ။",
    p: "A closed wooden wardrobe in the corner of the room, the frame held on it — a thin line of "
      + "dark beneath its doors.",
    u: ["အဲဒီအချိန် ဗီရိုထဲက ချောင်းဆိုးသံ ကြားရတယ်။ ကလေးအသံ။"],
    c: [[0, "bigstinger"]] },

  { t: "He Wedged the Door", l: "အခန်း", w: ["အောင်ဖြိုး"],
    g: "အောင်ဖြိုးက တံခါးပိတ်မသွားအောင် ကိရိယာအိတ်နဲ့ ခံထားခဲ့တယ်။",
    p: "A canvas tool bag kicked into a doorway to stop the door swinging shut, the corridor and its "
      + "work lamp visible beyond.",
    u: ["ကျွန်တော် အခန်းထဲ ဝင်လိုက်တယ်။ အောင်ဖြိုးလည်း လိုက်ဝင်တယ်။",
        "ကျွန်တော်တို့နောက်က တံခါးကို ပိတ်မသွားအောင် သူ ကိရိယာအိတ်နဲ့ ခံထားခဲ့တယ်။"] },

  { t: "A Small Hand", l: "အခန်း",
    g: "ဗီရိုအောက်ကနေ လက်သေးသေးလေး ထွက်လာတယ်။ “အမေ…”",
    p: "A small child's hand reaching out from under the bottom edge of a wardrobe door, fingers "
      + "spread on the floorboards.",
    u: ["ဗီရိုနားရောက်တော့ အောက်ကနေ လက်သေးသေးလေး ထွက်လာတယ်။ “အမေ…”"],
    c: [[0, "stinger"]] },

  { t: "The Boy", l: "အခန်း", w: ["ကလေး"],
    g: "ဗီရိုတံခါးဖွင့်လိုက်တော့ ကောင်လေးတစ်ယောက်။ အသက် ၃၊ ၄ နှစ်လောက်။ မျက်နှာမှာ မီးခိုးမည်း။",
    p: "A wardrobe door opened to reveal a small boy crouched inside, soot on his face, blinking into "
      + "the light.",
    u: ["ကျွန်တော် ဗီရိုတံခါးကို ဖွင့်လိုက်တယ်။ ကောင်လေးတစ်ယောက်။",
        "အသက်သုံးနှစ်၊ လေးနှစ်လောက်။ မျက်နှာမှာ မီးခိုးမည်းတွေ ပေနေတယ်။"] },

  { t: "One Front Wheel Missing", l: "အခန်း",
    g: "ကလေးလက်ထဲမှာ အပြာရောင်ပလတ်စတစ်ကားလေး။ ရှေ့ဘီးတစ်ဖက် မရှိဘူး။",
    p: "Extreme close-up of a small blue plastic toy car held in a child's hands, one front wheel "
      + "snapped off at the axle.",
    u: ["လက်ထဲမှာ အပြာရောင်ပလတ်စတစ်ကားလေးတစ်စီး ကိုင်ထားတယ်။ ရှေ့ဘီးတစ်ဖက် မရှိဘူး။",
        "ကျွန်တော် အဲဒီကားလေးကို ကြည့်နေမိတယ်။",
        "ရင်ထဲက မသက်မသာဖြစ်နေတဲ့ခံစားချက် ပိုပြင်းလာတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Take My Mother Too", l: "အခန်း", w: ["ကလေး"],
    g: "ကောင်လေးက ကျွန်တော့်နောက်ကို လက်ညှိုးထိုးတယ်။",
    p: "A small boy in a man's arms pointing past his shoulder at something behind him, his face "
      + "calm and certain.",
    u: ["ကောင်လေးက ကျွန်တော့်နောက်ကို လက်ညှိုးထိုးတယ်။ “အမေ့ကိုလည်း ယူပါ”"] },

  { t: "A Door That Was Not There", l: "အခန်း",
    g: "ခဏက ဝင်လာခဲ့တဲ့တံခါးမဟုတ်တဲ့ နောက်ထပ်တံခါးတစ်ချပ်။ အောက်ကနေ မီးခိုးတွေ ဝင်လာနေတယ်။",
    p: "A second interior door on a wall that appeared blank a moment ago, smoke pouring in a thick "
      + "band beneath it across the floor.",
    u: ["ကျွန်တော် လှည့်ကြည့်တယ်။",
        "ခဏက ကျွန်တော်တို့ ဝင်လာခဲ့တဲ့တံခါးမဟုတ်တဲ့ နောက်ထပ်တံခါးတစ်ချပ် ရှိတယ်။",
        "အဲဒီတံခါးအောက်ကနေ မီးခိုးတွေ ဝင်လာနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Two Knocks", l: "အခန်း",
    g: "တံခါးတစ်ဖက်မှာ အမျိုးသမီးတစ်ယောက် ခေါက်နေတယ်။ အားမရှိတော့တဲ့ လက်နဲ့။",
    p: "A closed door seen from inside the room, a weak hand-shaped pressure showing against its "
      + "lower panel from the other side.",
    u: ["တံခါးတစ်ဖက်မှာ အမျိုးသမီးတစ်ယောက် ခေါက်နေတယ်။ အားမရှိတော့တဲ့ လက်နဲ့။",
        "တစ်ချက်။ ခဏနားတယ်။ နောက်တစ်ချက်။"],
    c: [[1, "knock"]] },

  { t: "Take My Son", l: "အခန်း",
    g: "“သားကို… ခေါ်သွားပါ…” ကျွန်တော့်ဒူးတွေ အားပျော့သွားတယ်။",
    p: "Close on a man's face going slack with recognition, the child still in his arms, everything "
      + "behind him lost in smoke.",
    u: ["“သားကို… ခေါ်သွားပါ…”",
        "ကျွန်တော့်ဒူးတွေ အားပျော့သွားတယ်။",
        "အဲဒီအသံကို ကျွန်တော် အကြိမ်အများကြီး အိပ်မက်မက်ဖူးတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Handle Was Too Hot", l: "အခန်း", w: ["အောင်ဖြိုး"],
    g: "အောင်ဖြိုးက တံခါးလက်ကိုင်ကို ကိုင်လိုက်တာနဲ့ ပြန်လွှတ်ချရတယ်။ ပူလွန်းလို့။",
    p: "A hand snatched back from a door handle, the palm already reddening, the metal visibly "
      + "shimmering with heat.",
    u: ["အောင်ဖြိုးက ကျွန်တော့်ပခုံးကို လှုပ်တယ်။ “ကိုထက်၊ ကလေးကို ယူ”",
        "ကျွန်တော် ကောင်လေးကို ချီလိုက်တယ်။",
        "အောင်ဖြိုးက အမျိုးသမီးရှိတဲ့အခန်းတံခါးကို ဖွင့်ဖို့ ကြိုးစားတယ်။",
        "လက်ကိုင်ကို ကိုင်လိုက်တာနဲ့ ပြန်လွှတ်ချလိုက်ရတယ်။ ပူလွန်းလို့။"] },

  { t: "Kneeling in the Doorway", l: "အခန်း", w: ["အမေ"],
    g: "အမျိုးသမီးတစ်ယောက် ဒူးထောက်နေတယ်။ မျက်နှာကို ဆံပင်တွေ ဖုံးထားတယ်။",
    p: "A woman kneeling in a smoke-filled doorway with her hair fallen forward over her face, one "
      + "hand braced on the frame, the other extended toward camera. Face not visible.",
    u: ["သူ အင်္ကျီအနားနဲ့ ပတ်ကိုင်ပြီး ဆွဲတယ်။ တံခါးက နည်းနည်းပွင့်လာတယ်။",
        "အတွင်းမှာ အမျိုးသမီးတစ်ယောက် ဒူးထောက်နေတယ်။ မျက်နှာကို ဆံပင်တွေ ဖုံးထားတယ်။",
        "လက်တစ်ဖက်က တံခါးပေါင်ကို ကိုင်ထားတယ်။ ကျန်လက်တစ်ဖက်နဲ့ ကလေးရှိတဲ့ဘက်ကို ပြနေတယ်။"] },

  { t: "The Left Half of Her Face", l: "အခန်း", w: ["အမေ"],
    g: "သူ ခေါင်းမော့လာတယ်။ ဘယ်ဘက်တစ်ခြမ်းက အမေ့မျက်နှာ။ ညာဘက်ကို မမြင်ရ။",
    p: "A woman lifting her head: the left side of her face is ordinary, unhurt, exactly as in a "
      + "family photograph — and the right side is entirely lost behind smoke and hair. Nothing of it "
      + "is shown or implied.",
    u: ["“ယူသွား…” သူ ခေါင်းမော့လာတယ်။",
        "မျက်နှာရဲ့ ဘယ်ဘက်တစ်ခြမ်းက အမေ့မျက်နှာ။ ဓာတ်ပုံတွေထဲမှာ မြင်နေကျအတိုင်း။",
        "ညာဘက်တစ်ခြမ်းကိုတော့ မီးခိုးတွေကြားမှာ ကျွန်တော် မမြင်ချင်ခဲ့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Take Htet Htet", l: "အခန်း", w: ["ကလေး"],
    g: "ကောင်လေးရဲ့ ညာဘက်မျက်ခုံးနားမှာ မှဲ့သေးသေးတစ်လုံး။",
    p: "Extreme close-up of a small boy's face tilted up: a tiny dark mole just above the right "
      + "eyebrow, soot around it.",
    u: ["“ထက်ထက်ကို ယူသွား…”",
        "အောင်ဖြိုးက ကျွန်တော့်ကို ပြန်ကြည့်တယ်။ ကျွန်တော့်လက်ထဲက ကောင်လေးကလည်း မော့ကြည့်တယ်။",
        "သူ့ညာဘက်မျက်ခုံးနားမှာ မှဲ့သေးသေးတစ်လုံး။ ကျွန်တော် နေ့တိုင်း မှန်ထဲမှာ မြင်နေရတဲ့နေရာအတိုင်း။"],
    c: [[2, "bigstinger"]] },

  { t: "Outside It Was Night", l: "စင်္ကြံ",
    g: "ဝင်လာခဲ့တဲ့တံခါးဆီ ရောက်တော့ အပြင်မှာ ညဖြစ်နေတယ်။ စင်္ကြံတစ်လျှောက် မီးခိုးတွေ။",
    p: "The same corridor as before but at night and full of smoke, the work lamp gone, firelight "
      + "somewhere at the far end.",
    u: ["ကျွန်တော် နောက်ကို လှည့်ပြေးတယ်။ အမေ့ကို ထားခဲ့ချင်လို့ မဟုတ်ဘူး။",
        "အရင်ဆုံး ကလေးကို အပြင်ပို့ပြီး ပြန်ဝင်ကယ်ဖို့။ အဲဒီအချိန်အထိ ကျွန်တော် စဉ်းစားနိုင်ခဲ့တာ အဲဒါပဲ။",
        "ကျွန်တော်တို့ ဝင်လာခဲ့တဲ့တံခါးဆီ ရောက်တော့ အပြင်မှာ ညဖြစ်နေတယ်။ စင်္ကြံတစ်လျှောက် မီးခိုးတွေ။"],
    c: [[2, "bigstinger"]] },

  { t: "On All Fours", l: "စင်္ကြံ",
    g: "ကြမ်းပြင်ပေါ်မှာ လူတစ်ယောက် လေးဖက်ထောက်နေတယ်။ ကျောဘက် မီးလောင်နေတယ်။ ⚠️ ရှင်းရှင်း မပြရ။",
    p: "Far down a smoke-filled corridor, a human shape on hands and knees, its back alight — kept "
      + "deep in smoke and too distant to resolve. No features, no detail, no gore.",
    u: ["ကြမ်းပြင်ပေါ်မှာ လူတစ်ယောက် လေးဖက်ထောက်နေတယ်။ သူ့အင်္ကျီကျောဘက် မီးလောင်နေတယ်။",
        "ကျွန်တော် အော်မလို့လုပ်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Smoke Out of the Mouth", l: "စင်္ကြံ",
    g: "မျက်နှာမှာ မျက်လုံးပဲ ရှိတော့သလို။ ပါးစပ်ပေါက်ထဲကနေ မီးခိုးတွေ ထွက်နေတယ်။ ⚠️ ဝေးဝေးကနေပဲ။",
    p: "The same shape lifting its head, only two pale points where eyes would be and smoke streaming "
      + "steadily from where a mouth would be. Silhouette only — no face rendered.",
    u: ["အဲဒီလူက ခေါင်းမော့ပြီး ကြည့်တယ်။",
        "မျက်နှာမှာ မျက်လုံးပဲ ရှိတော့သလို။ ပါးစပ်ပေါက်ထဲကနေ မီးခိုးတွေ ထွက်နေတယ်။",
        "သူက ကျွန်တော်တို့ဆီ လက်လှမ်းတယ်။ ကျွန်တော် နောက်ဆုတ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Arrow Was Gone", l: "စင်္ကြံ", w: ["အောင်ဖြိုး"],
    g: "တံခါးပေါင်မှာ မြေဖြူမြား မရှိတော့ဘူး။ ကိရိယာအိတ်လည်း မရှိဘူး။",
    p: "A torch beam on a bare door lintel — no chalk, no mark, and the doorway below it empty of the "
      + "tool bag that was wedging it.",
    u: ["အောင်ဖြိုးက တံခါးပေါင်ကို မီးထိုးကြည့်တယ်။",
        "မြေဖြူမြား မရှိဘူး။ သူ ခံထားခဲ့တဲ့ ကိရိယာအိတ်လည်း မရှိဘူး။",
        "“ကိုထက်…” သူ့အသံ တိုးသွားတယ်။",
        "“ကျွန်တော်တို့ ဝင်လာခဲ့တဲ့တံခါးက ဒီတံခါး မဟုတ်တော့ဘူး”"],
    c: [[3, "bigstinger"]] },

  { t: "No Car, No Stair", l: "အခန်း", w: ["အောင်ဖြိုး"],
    g: "ပြတင်းပေါက်ဖွင့်ကြည့်တော့ အပြင်မှာ မီးသတ်ကားတွေ၊ လူတွေ။ ဒါပေမယ့် သူတို့ကား မရှိဘူး။ သံလှေကားလည်း မရှိဘူး။",
    p: "Looking down from a window at night: a crowd in the lane, a fire engine's lights — and the "
      + "side wall below showing bare brick where a steel staircase should be.",
    u: ["အခန်းထဲမှာ အပူချိန် တက်လာတယ်။ နံရံနောက်က သစ်သားလောင်တဲ့အသံ ကြားရတယ်။",
        "အောင်ဖြိုးက ပြတင်းပေါက်ကို ဖွင့်လိုက်တယ်။ အပြင်မှာ လူတွေ အော်နေကြတယ်။",
        "မီးသတ်ကားမီးတွေ။ လမ်းပေါ်မှာ လူတွေ။",
        "ဒါပေမယ့် ကျွန်တော်တို့ လာတုန်းက ရပ်ခဲ့တဲ့ ကားမရှိဘူး။ သံလှေကားလည်း မရှိဘူး။",
        "တိုက်ဘေးမှာ အုတ်တံတိုင်းဟောင်းတစ်ခု ရှိနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "1998", l: "အခန်း",
    g: "နံရံပေါ်က ပြက္ခဒိန်။ ၁၉၉၈။",
    p: "A cheap wall calendar hanging in a smoke-hazed room, the year large at the top of it. "
      + "Deliberately the only legible thing in the film.",
    u: ["အောင်ဖြိုး မျက်နှာဖြူသွားတယ်။ “သံလှေကား ဘယ်ရောက်သွားတာလဲ”",
        "ကျွန်တော် နံရံပေါ်က ပြက္ခဒိန်ကို မြင်လိုက်တယ်။ ၁၉၉၈။"],
    c: [[1, "bigstinger"]] },

  { t: "I Could Not Look at Him", l: "အခန်း", w: ["ထက်နိုင်", "ကလေး"],
    g: "ကလေးက ရင်ဘတ်ပေါ် မျက်နှာအပ်ပြီး ချောင်းဆိုးနေတယ်။ ကျွန်တော် သူ့မျက်နှာကို မကြည့်ရဲတော့ဘူး။",
    p: "A man holding a coughing child against his chest, patting his back, his own face turned "
      + "deliberately away from the boy's.",
    u: ["ကျွန်တော့်လက်ထဲက ကောင်လေးက ရင်ဘတ်ပေါ် မျက်နှာအပ်ပြီး ချောင်းဆိုးနေတယ်။",
        "ကျွန်တော် သူ့ကျောကို ပုတ်ပေးနေမိတယ်။ သူ့မျက်နှာကို မကြည့်ရဲတော့ဘူး။"] },

  { t: "White Light in the Crack", l: "အခန်း", w: ["အောင်ဖြိုး"],
    g: "နံရံမှာ အက်ကြောင်းတစ်ခု။ အထဲကနေ အဖြူရောင်အလင်း ဝင်နေတယ်။ မီးတောက်အလင်း မဟုတ်ဘူး။",
    p: "A hairline crack in a smoke-stained wall with a thin blade of cold white light coming through "
      + "it — obviously electric, wrong against the orange firelight everywhere else.",
    u: ["အောင်ဖြိုးက အခန်းနံရံတစ်ဖက်ကို မီးထိုးပြတယ်။ အက်ကြောင်းတစ်ခု။",
        "အက်ကြောင်းကြားကနေ အဖြူရောင်အလင်း ဝင်နေတယ်။",
        "မီးတောက်အလင်း မဟုတ်ဘူး။ ကျွန်တော်တို့ ထောင်ထားခဲ့တဲ့ လက်ကိုင်မီးအလင်း။"],
    c: [[2, "bigstinger"]] },

  { t: "Our Own Tool Bag, Through the Wall", l: "အခန်း",
    g: "အလင်းကြားထဲမှာ အောင်ဖြိုးရဲ့ ကိရိယာအိတ်လက်ကိုင်ကို မြင်ရတယ်။",
    p: "Through a narrow crack in brickwork: a sliver of a dusty daylit corridor beyond, and in it "
      + "the handle of a canvas tool bag lying on the boards.",
    u: ["အဲဒီအလင်းကြားမှာ အောင်ဖြိုးရဲ့ ကိရိယာအိတ်လက်ကိုင်ကို မြင်ရတယ်။",
        "ကျွန်တော်တို့ ဝင်လာခဲ့တဲ့နေရာက အဲဒီမှာ ရှိနေသေးတယ်။ အုတ်နံရံတစ်ဖက်ရဲ့နောက်မှာ။"],
    c: [[1, "bigstinger"]] },

  { t: "A Room Laid Over a Room", l: "အခန်း", w: ["အောင်ဖြိုး"],
    g: "အုတ်သားမပြိုဘဲ မည်းနေတဲ့အပေါ်ယံအလွှာတွေ ကွာကျတယ်။ အောက်မှာ ခေတ်သစ်တံခါးပေါင် သံသား ပေါ်လာတယ်။",
    p: "A bar levering at a crack: blackened crusted material flaking away in sheets to expose clean "
      + "modern galvanised steel framing underneath, as though the old room were a shell over the new.",
    u: ["အောင်ဖြိုးက သံတုတ်နဲ့ အက်ကြောင်းကို ထိုးချဲ့တယ်။",
        "အုတ်သားတွေ မပြိုဘူး။ မည်းနေတဲ့အပေါ်ယံအလွှာတွေ ကွာကျတယ်။",
        "အောက်မှာ ခေတ်သစ်တံခါးပေါင် သံသား ပေါ်လာတယ်။",
        "ကျွန်တော်တို့ မြင်နေရတဲ့အခန်းက အခန်းအဟောင်းတစ်ခုကို အပေါ်က ဖုံးထားသလို။"],
    c: [[3, "bigstinger"]] },

  { t: "The Beam Came Down", l: "အခန်း", w: ["အောင်ဖြိုး"],
    g: "မျက်နှာကျက်ပေါ်က သစ်သားတန်းတစ်ချောင်း ပြုတ်ကျပြီး အောင်ဖြိုးကို ထိတယ်။",
    p: "A burning ceiling joist dropping across frame and striking a man's shoulder, driving him down "
      + "onto one knee. Motion blur, sparks, no injury shown.",
    u: ["အောင်ဖြိုး ဆက်ခွာတယ်။ အက်ကြောင်း ကျယ်လာတယ်။ အပြင်က နေ့အလင်းကို မြင်လာရတယ်။",
        "အဲဒီအချိန် မျက်နှာကျက်ပေါ်က သစ်သားတန်းတစ်ချောင်း ပြုတ်ကျတယ်။ အောင်ဖြိုးကို ထိတယ်။",
        "သူ ဒူးတစ်ဖက်ထောက် ကျသွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "His Left Hand on the Hot Frame", l: "အခန်း", w: ["အောင်ဖြိုး"],
    g: "ဘယ်လက်က ပူနေတဲ့တံခါးပေါင်ကို ဖမ်းမိတယ်။ သူ အော်တယ်။",
    p: "A left hand clamping onto a superheated steel frame — the contact along the base of the thumb "
      + "and up the wrist, exactly where the older man's scar runs. No burn shown, only the grip.",
    u: ["ဘယ်လက်က ပူနေတဲ့တံခါးပေါင်ကို ဖမ်းမိတယ်။ သူ အော်တယ်။",
        "ကျွန်တော် ကလေးကို တစ်ဖက်ပြောင်းချီပြီး သူ့ကို ဆွဲထူလိုက်တယ်။",
        "သူ့ဘယ်ဘက်ဒူးက ထောက်လို့မရတော့ဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "Hands Under the Door", l: "အခန်း",
    g: "အခန်းတံခါးအောက်ကနေ လက်တွေ ဝင်လာတယ်။ မည်းနေတဲ့လက်တွေ။ လက်ကောက်ဝတ်အထိ မီးခိုးတွေ စီးထွက်နေတယ်။",
    p: "Several dark hands reaching in under a closed door across the floorboards, smoke pouring "
      + "steadily from each wrist where an arm should continue. Only hands — nothing beyond the door.",
    u: ["အရှေ့ဘက်စင်္ကြံကနေ အသံတွေ နီးလာတယ်။ လူတွေလား။ မီးလောင်နေတဲ့ညထဲမှာ ကျန်ခဲ့တဲ့အရာတွေလား။",
        "ကျွန်တော် မခွဲနိုင်တော့ဘူး။",
        "အခန်းတံခါးအောက်ကနေ လက်တွေ ဝင်လာတယ်။ မည်းနေတဲ့လက်တွေ။",
        "လက်ကောက်ဝတ်အထိ မီးခိုးတွေ စီးထွက်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Want to Get Out Too", l: "အခန်း",
    g: "တစ်ယောက်က အရမ်းတိုးတိုး ပြောတယ်။ နောက်တစ်သံ။",
    p: "The same hands, closer, one of them with fingers spread flat as though pressing for purchase "
      + "on the boards. Smoke still leaving the wrists.",
    u: ["တစ်ယောက်က အရမ်းတိုးတိုး ပြောတယ်။ “ကျွန်မကလေးလည်း ပါတယ်…”",
        "နောက်တစ်သံ။ “ကျွန်တော်လည်း ထွက်ချင်တယ်…”"],
    c: [[1, "bigstinger"]] },

  { t: "Only One of Them Fits", l: "အခန်း", w: ["အောင်ဖြိုး", "ထက်နိုင်"],
    g: "နံရံကြားက အလင်းပေါက်က လူကြီးတစ်ယောက် ဝင်ဖို့ ကျဉ်းနေသေးတယ်။ အရှေ့ဘက်မှာတော့ လှေကားဆင်းလို့ရတယ်။",
    p: "A narrow crack of daylight in a wall, plainly too small for an adult, and in the other "
      + "direction a smoke-filled corridor with a stairwell visible at its end.",
    u: ["အောင်ဖြိုးက ကျွန်တော့်လက်မောင်းကို ဖမ်းတယ်။",
        "“ကိုထက်၊ အရှေ့တံခါးမှာ လူတွေရှိတယ်။ ကလေးကို အရင်ပေးလိုက်မယ်”",
        "အခန်းနံရံကြားက နေ့အလင်းပေါက်က လူကြီးတစ်ယောက် တိုးဝင်ဖို့ ကျဉ်းနေသေးတယ်။",
        "အရှေ့ဘက်မှာတော့ လှေကားဆင်းလို့ရတယ်။ လမ်းပေါ်ကလူတွေကို မြင်ရတယ်။"] },

  { t: "The Boy Stopped Breathing Well", l: "အခန်း", w: ["ကလေး"],
    g: "ကလေးက အသက်ရှူမဝတော့ဘူး။ ကျွန်တော် ဆုံးဖြတ်ရတယ်။",
    p: "A small boy's face against a shoulder, eyes half closed, breathing shallow, soot around his "
      + "nose and mouth.",
    u: ["ကလေးက အသက်ရှူမဝတော့ဘူး။ ကျွန်တော် ဆုံးဖြတ်ရတယ်။",
        "“သူ့ကို အောက်ကလူတွေဆီ ပေးပြီး ပြန်တက်ခဲ့။ ငါ ဒီပေါက်ကို ချဲ့ထားမယ်”"] },

  { t: "Don't Be Long", l: "အခန်း", w: ["အောင်ဖြိုး", "ကလေး"],
    g: "အောင်ဖြိုးက ကလေးကို ယူပြီး ခြေတစ်ဖက်ဆွဲရင်း ထွက်သွားတယ်။",
    p: "A young man taking a child into his arms and turning away toward a smoke-filled corridor, "
      + "dragging one leg badly.",
    u: ["အောင်ဖြိုးက ကလေးကို ယူတယ်။ “ကိုထက်လည်း နောက်ကျမနေနဲ့”",
        "သူ ခြေတစ်ဖက် ဆွဲရင်း ထွက်သွားတယ်။"] },

  { t: "My Own Face in His Arms", l: "အခန်း",
    g: "နောက်ဆုံးမြင်လိုက်ရတာက အောင်ဖြိုးရဲ့ ရင်ခွင်ထဲမှာ ကျွန်တော် ငယ်ငယ်ကမျက်နှာ။",
    p: "Over a departing man's shoulder: the small boy's face looking back at camera, the mole above "
      + "his right eyebrow clearly visible, smoke closing between them.",
    u: ["ကျွန်တော် နောက်ဆုံးမြင်လိုက်ရတာက အောင်ဖြိုးရဲ့ ရင်ခွင်ထဲမှာ ကျွန်တော် ငယ်ငယ်ကမျက်နှာ။"],
    c: [[0, "bigstinger"]] },

  { t: "He Did Not Come Back", l: "အခန်း", w: ["ထက်နိုင်"],
    g: "အောင်ဖြိုး ပြန်မတက်လာဘူး။ ကျွန်တော် အပေါက်ကို ချဲ့ရင်း သူ့နာမည် ခေါ်တယ်။",
    p: "A man working frantically at a wall crack with a bar, shouting toward a doorway, smoke "
      + "thickening around him.",
    u: ["အောင်ဖြိုး ပြန်မတက်လာဘူး။",
        "ကျွန်တော် အပေါက်ကို ချဲ့ရင်း သူ့နာမည် အကြိမ်ကြိမ် ခေါ်တယ်။",
        "အရှေ့ဘက်က သစ်သားတွေ ပြိုကျသံ ကြားရတယ်။ ပြီးတော့ မီးတောက်က စင်္ကြံတစ်ခုလုံးကို ဖုံးသွားတယ်။"] },

  { t: "The Unlit Places Were Shrinking", l: "အခန်း",
    g: "အခန်းက ကျဉ်းလာသလိုပဲ။ နံရံတွေက မရွေ့ဘူး။ မီးမရှိတဲ့နေရာတွေ လျော့လာတာ။",
    p: "A room with firelight advancing across it — the walls in their original positions, but the "
      + "area of darkness in the middle reduced to a small island.",
    u: ["ကျွန်တော်တို့ ရောက်နေတဲ့အခန်းက တဖြည်းဖြည်း ကျဉ်းလာသလိုပဲ။",
        "နံရံတွေက မရွေ့ဘူး။ မီးမရှိတဲ့နေရာတွေ လျော့လာတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "This Time You Can Get Out Yourself", l: "အခန်း", w: ["အမေ"],
    g: "အမေက တံခါးဝမှာ ရပ်နေတယ်။ ဒီတစ်ခါ ကျွန်တော့်ကို ကြည့်တယ်။ လက်မြှောက်ပြီး ပြတယ် — သွား။",
    p: "A woman standing in a doorway seen from her left, one arm raised pointing away — go. Her "
      + "right side is entirely outside the frame.",
    u: ["အမေရှိတဲ့အခန်းကို ကျွန်တော် နောက်ဆုံးတစ်ခါ ကြည့်လိုက်တယ်။ အမေက တံခါးဝမှာ ရပ်နေတယ်။",
        "ဒီတစ်ခါ ကျွန်တော့်ကို ကြည့်တယ်။ လက်ကို မြှောက်ပြီး ပြတယ်။ သွား။",
        "ကျွန်တော် ခေါင်းခါတယ်။ “အမေ…”",
        "သူ့နှုတ်ခမ်း လှုပ်သွားတယ်။ “ဒီတစ်ခါတော့ သားကိုယ်တိုင် ထွက်နိုင်တယ်မဟုတ်လား”"],
    c: [[3, "bigstinger"]] },

  { t: "Something Pulled My Arm", l: "အခန်း",
    g: "အက်ကြောင်းထဲ တိုးဝင်တယ်။ လက်မောင်းကို တစ်ယောက်ယောက် နောက်ကနေ ဆွဲတယ်။ ပူတယ်။",
    p: "A man forcing his body into a narrow wall crack, shoulders scraping brick, and a dark hand "
      + "closed around his upper arm from behind in the smoke.",
    u: ["ကျွန်တော် အက်ကြောင်းထဲကို တိုးဝင်လိုက်တယ်။ ခါးမှာ အုတ်သားတွေ ရှတယ်။",
        "လက်မောင်းကို တစ်ယောက်ယောက် နောက်ကနေ ဆွဲတယ်။ ပူတယ်။",
        "ကျွန်တော် အားကုန်ရုန်းတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Only Dust", l: "စင်္ကြံ", w: ["ထက်နိုင်"],
    g: "နောက်တစ်ခါ လေရှူလိုက်ရတဲ့အချိန်မှာ ဖုန်နံ့ပဲ။ မီးခိုးနံ့ မရှိတော့ဘူး။ နေ့လယ်နေရောင်။",
    p: "A man half-through a wall opening into a bright dusty corridor, chest heaving, daylight and "
      + "dust motes around him, no smoke anywhere.",
    u: ["နောက်တစ်ခါ လေကို ရှူလိုက်ရတဲ့အချိန်မှာ ဖုန်နံ့ပဲ ရတော့တယ်။ မီးခိုးနံ့ မရှိတော့ဘူး။",
        "နေ့လယ်နေရောင်။"] },

  { t: "Everything Where We Left It", l: "စင်္ကြံ",
    g: "အောင်ဖြိုးဆွဲခဲ့တဲ့ မြေဖြူမြား။ ကိရိယာအိတ်။ အကုန် အရင်နေရာအတိုင်း။",
    p: "The chalk arrow on the lintel and the canvas tool bag on the floor exactly as they were, "
      + "undisturbed, in flat daylight.",
    u: ["အောင်ဖြိုးဆွဲခဲ့တဲ့ မြေဖြူမြား။ ကျွန်တော်တို့ရဲ့ ကိရိယာအိတ်။ အကုန် အရင်နေရာအတိုင်း။"],
    c: [[0, "stinger"]] },

  { t: "Did the Child Get Out", l: "လမ်း", w: ["ဦးလှမြင့်", "ထက်နိုင်"],
    g: "ဦးလှမြင့်က သံလှေကားအောက်မှာ ရပ်နေတယ်။ မေးတယ် — ကလေး လွတ်သွားပြီလား။",
    p: "An older man standing at the foot of the steel stair looking up as a filthy shaken man comes "
      + "down it, the older man's face braced for an answer.",
    u: ["ကျွန်တော် အောက်ကို ပြေးဆင်းတယ်။ ဦးလှမြင့်က သံလှေကားအောက်မှာ ရပ်နေတယ်။",
        "ကျွန်တော့်ကို မြင်တော့ မေးတယ်။ “ကလေး လွတ်သွားပြီလား”",
        "ကျွန်တော် ရပ်သွားတယ်။ သူ့မျက်နှာကို ကြည့်နေတယ်။ “ခင်ဗျား ဘယ်လိုသိတာလဲ” သူ မဖြေဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "The Same Scar", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "ဦးလှမြင့်က ကျွန်တော့်လက်ကို သူ့ဘယ်လက်နဲ့ ကိုင်တယ်။ လက်မအရင်းကနေ လက်ကောက်ဝတ်အထိ အပူလောင်ဒဏ်ရာ။",
    p: "An older man's left hand closing over a younger man's wrist — and the pale burn scar on it "
      + "running exactly where the young man gripped a hot steel frame moments ago.",
    u: ["ကျွန်တော် သူ့အင်္ကျီကို ဆွဲလိုက်တယ်။",
        "“အောင်ဖြိုး ကျန်ခဲ့တယ်! အောက်ဘက်တံခါးက ထွက်သွားတာ! အခု အဲဒီတံခါး ဘယ်မှာလဲ!”",
        "ဦးလှမြင့်က ကျွန်တော့်လက်ကို ကိုင်တယ်။ သူ့ဘယ်လက်နဲ့။",
        "လက်မအရင်းကနေ လက်ကောက်ဝတ်အထိ အပူလောင်ဒဏ်ရာဖြူဖြူကြီး။"],
    c: [[3, "bigstinger"]] },

  { t: "Ko Htet", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "သူက တစ်လှမ်းနောက်ဆုတ်တယ်။ ဘယ်ဘက်ဒူးကို ဆွဲရင်း။ “ကိုထက်” လို့ ခေါ်တယ်။",
    p: "An older man stepping back and dragging his left leg, calling a name — the exact cadence of a "
      + "much younger man.",
    u: ["ကျွန်တော် လက်လွှတ်လိုက်မိတယ်။",
        "သူက တစ်လှမ်း နောက်ဆုတ်တယ်။ ဘယ်ဘက်ဒူးကို ဆွဲရင်း။",
        "“ကိုထက်” လို့ ခေါ်တယ်။",
        "အောင်ဖြိုး နေ့တိုင်းခေါ်နေကျ လေသံနဲ့။ အသံပဲ အိုသွားတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "I Did Try to Come Back", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "“ကျွန်တော် ပြန်တက်ဖို့ လုပ်ခဲ့ပါတယ်”",
    p: "Close on an older man's face saying something he has been carrying for decades, eyes wet, "
      + "entirely steady.",
    u: ["“ကျွန်တော် ပြန်တက်ဖို့ လုပ်ခဲ့ပါတယ်”"] },

  { t: "The Newspaper Cutting", l: "လမ်း",
    g: "သတင်းစာဖြတ်ပိုင်းဟောင်း။ မီးလောင်တဲ့တိုက်ရှေ့မှာ ကလေးတစ်ယောက်ကို ချီထားတဲ့ လူငယ်တစ်ယောက်။",
    p: "A yellowed newspaper photograph held in two hands: a young man carrying a small child away "
      + "from a burning building at night, his left hand wrapped in cloth, soot on his face.",
    u: ["ဦးလှမြင့်က အိတ်ထဲက စာအိတ်ဟောင်းတစ်ခု ထုတ်တယ်။ သတင်းစာဖြတ်ပိုင်း။",
        "မီးလောင်တဲ့တိုက်ရှေ့မှာ ကလေးတစ်ယောက်ကို ချီထားတဲ့ လူငယ်တစ်ယောက်။",
        "လူငယ်ရဲ့ ဘယ်လက်ကို အဝတ်နဲ့ ပတ်ထားတယ်။ မျက်နှာမှာ မီးခိုးမည်းတွေ။"],
    c: [[2, "bigstinger"]] },

  { t: "Aung Phyo. And Me.", l: "လမ်း",
    g: "အောင်ဖြိုး။ သူ့ရင်ခွင်ထဲက ကလေးက ကျွန်တော်။ ပုံနောက်မှာ ရက်စွဲ — ၁၉၉၈။",
    p: "Extreme close-up into the same newspaper photograph: the child's face in the young man's "
      + "arms, and above its right eyebrow a small dark mark in the halftone dots.",
    u: ["အောင်ဖြိုး။ သူ့ရင်ခွင်ထဲက ကလေးက ကျွန်တော်။",
        "ပုံနောက်မှာ ရက်စွဲ ရေးထားတယ်။ ၁၉၉၈။"],
    c: [[1, "bigstinger"]] },

  { t: "The Stair Collapsed Behind Me", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "“ကလေးကို ပေးပြီး ပြန်လှည့်တဲ့အချိန် လှေကား ပြိုသွားတယ်။ နောက်နေ့ ပြန်လာတော့ အဲဒီနံရံမှာ အပေါက်မရှိဘူး”",
    p: "An older man talking, his gaze past the camera at the building behind it, one hand "
      + "unconsciously rubbing the scar on the other.",
    u: ["“ကျွန်တော် ကလေးကို ပေးပြီး ပြန်လှည့်တဲ့အချိန် လှေကား ပြိုသွားတယ်။ နောက်နေ့ ပြန်လာတော့ အဲဒီနံရံမှာ အပေါက်မရှိဘူး။ သံလှေကားဆိုတာလည်း မရှိဘူး”"] },

  { t: "Now I Could See It", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "အခုမှ အောင်ဖြိုးရဲ့ မျက်ခုံးပုံစံကို မြင်လာတယ်။ ပြုံးရင် ပါးတစ်ဖက်မှာပဲ ချိုင့်တဲ့အကျင့်။",
    p: "Close on the older man's face as he half-smiles: a dimple showing in the left cheek only, "
      + "the brow unmistakably the young workman's.",
    u: ["ကျွန်တော် သူ့မျက်နှာကို စိုက်ကြည့်နေတယ်။",
        "အခုမှ အောင်ဖြိုးရဲ့ မျက်ခုံးပုံစံကို မြင်လာတယ်။",
        "ပြုံးရင် ပါးတစ်ဖက်မှာပဲ ချိုင့်တဲ့အကျင့်။ စကားပြောရင်း အောက်နှုတ်ခမ်းကို ကိုက်မိတဲ့အကျင့်။"],
    c: [[1, "bigstinger"]] },

  { t: "Twenty-Eight Years", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "“ဒီဘက်ကို ပြန်ရောက်ဖို့… စောင့်ခဲ့ရတယ် ကိုထက်။ နှစ်ပေါင်းနှစ်ဆယ့်ရှစ်နှစ်”",
    p: "Two men standing in a bright ordinary lane, one older and one younger, the distance between "
      + "them suddenly very small.",
    u: ["“ဒီဘက်ကို ပြန်ရောက်ဖို့…” သူ ခဏရပ်တယ်။",
        "“စောင့်ခဲ့ရတယ် ကိုထက်။ နှစ်ပေါင်းနှစ်ဆယ့်ရှစ်နှစ်”"],
    c: [[1, "bigstinger"]] },

  { t: "Why Didn't You Tell Me", l: "လမ်း", w: ["ထက်နိုင်"],
    g: "ကျွန်တော် မေးတယ်။ အဲဒီမေးခွန်းမှာ စိတ်ဆိုးတာရော ကြောက်တာရော ပါနေတယ်။",
    p: "Close on the narrator's face — anger and fear and something he cannot name, all at once.",
    u: ["“ဘာလို့ အစက မပြောတာလဲ” ကျွန်တော် မေးတယ်။",
        "အဲဒီမေးခွန်းမှာ စိတ်ဆိုးတာရော၊ ကြောက်တာရော၊ ကျွန်တော် နာမည်မပေးတတ်တဲ့ ခံစားချက်တစ်ခုရော ပါနေတယ်။"] },

  { t: "I Don't Know Either", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "“ကျွန်တော်လည်း မသိဘူး ကိုထက်။ မင်းတို့မဝင်ရင် ဘာဖြစ်မလဲ မသိဘူး”",
    p: "An older man looking down at a newspaper cutting in his hands rather than at the man he is "
      + "speaking to.",
    u: ["ဦးလှမြင့်—အောင်ဖြိုး—က သတင်းစာပုံကို ကြည့်တယ်။",
        "“ကျွန်တော်လည်း မသိဘူး ကိုထက်။ မင်းတို့မဝင်ရင် ဘာဖြစ်မလဲ မသိဘူး”"] },

  { t: "Those Were My Hands", l: "လမ်း",
    g: "သူက ကျွန်တော့်ပုံသေးသေးကို လက်ညှိုးနဲ့ တို့လိုက်တယ်။",
    p: "A finger with a scarred hand touching the tiny printed image of a child in a newspaper "
      + "photograph.",
    u: ["သူ ကျွန်တော့်ပုံသေးသေးကို လက်ညှိုးနဲ့ တို့လိုက်တယ်။",
        "“ဒါပေမယ့် ဒီကလေးကို ထုတ်လာတဲ့လက်တွေက ကျွန်တော့်လက်တွေဆိုတာ သိတယ်”",
        "ကျွန်တော် ဘာမှ မပြောနိုင်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "I Didn't Dare Find Out", l: "လမ်း", w: ["ဦးလှမြင့်"],
    g: "“ကျွန်တော် မင်းကို မခေါ်ရင်… ဒီနေ့ ငါနဲ့ စကားပြောနေတဲ့ ကိုထက် ရှိနေဦးမလားဆိုတာ မစမ်းရဲဘူး”",
    p: "An older man in a lane, framed small against the building behind him, having said the thing "
      + "he came to say.",
    u: ["သူက ဆက်ပြောတယ်။",
        "“ကျွန်တော် မင်းကို မခေါ်ရင်… ဒီနေ့ ငါနဲ့ စကားပြောနေတဲ့ ကိုထက် ရှိနေဦးမလားဆိုတာ မစမ်းရဲဘူး”"],
    c: [[1, "bigstinger"]] },

  { t: "My Father Recognised Him", l: "အဖေ့အိမ်",
    g: "အဖေက သတင်းစာဖြတ်ပိုင်းကို ကြည့်ပြီး ချက်ချင်း မှတ်မိတယ်။",
    p: "An elderly man's hands taking a newspaper cutting, his face lighting with immediate "
      + "recognition, a living room around him.",
    u: ["အဲဒီနောက် ကျွန်တော် အဖေ့ဆီ ပြန်သွားတယ်။ သတင်းစာဖြတ်ပိုင်းဟောင်းကို ထုတ်ပြတယ်။",
        "အဖေက ချက်ချင်း မှတ်မိတယ်။ “ဟုတ်တယ်။ ဒီလူပဲ”"] },

  { t: "He Kept Asking What Year It Was", l: "အဖေ့အိမ်",
    g: "အဖေက စဉ်းစားတယ်။ “သူ့အိမ်ကို မေးတာတော့ မဖြေနိုင်ဘူး။ နှစ်ကိုပဲ ထပ်ထပ်မေးနေတာ”",
    p: "An elderly man thinking back, eyes unfocused, the cutting still in his hand.",
    u: ["“သူ့နာမည် ပြောခဲ့သေးလား” အဖေက စဉ်းစားတယ်။",
        "“အောင်ဖြိုးလို့ ပြောတယ်ထင်တယ်။ သူ့အိမ်ကို မေးတာတော့ မဖြေနိုင်ဘူး။ နှစ်ကိုပဲ ထပ်ထပ်မေးနေတာ”"],
    c: [[1, "bigstinger"]] },

  { t: "The Box of Old Things", l: "အဖေ့အိမ်", w: ["ထက်နိုင်"],
    g: "ငယ်ငယ်ကပစ္စည်းတွေထားတဲ့ သေတ္တာကို ဖွင့်ကြည့်တယ်။",
    p: "A cardboard box of a child's old belongings opened on a living room table in daylight, a "
      + "man's hands lifting things out of it.",
    u: ["ကျွန်တော် ငယ်ငယ်ကပစ္စည်းတွေထားတဲ့ သေတ္တာကို ဖွင့်ကြည့်တယ်။"] },

  { t: "The Blue Car", l: "အဖေ့အိမ်",
    g: "အပြာရောင်ကားလေး ရှိနေတယ်။ ရှေ့ဘီးတစ်ဖက် မရှိဘူး။",
    p: "The same small blue plastic toy car, now old and scuffed, held in an adult hand in daylight — "
      + "the same front wheel still missing.",
    u: ["အပြာရောင်ကားလေး ရှိနေတယ်။ ရှေ့ဘီးတစ်ဖက် မရှိဘူး။",
        "ကျွန်တော် ကားလေးကို လက်ထဲ ကိုင်ထားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "What I Was Afraid Of at Four", l: "အခန်း",
    g: "ဗီရိုတံခါးဖွင့်သွားတဲ့အချိန် — မီးခိုးတွေကြားက လူကြီးတစ်ယောက် ငုံ့ကြည့်နေတာ။ ကလေးရဲ့ မြင်ကွင်း။",
    p: "From inside a wardrobe looking out: a man's head and shoulders leaning in against firelight, "
      + "his face in shadow and unresolved — a small child's-eye memory.",
    u: ["လေးနှစ်အရွယ်တုန်းက ကျွန်တော် အရမ်းကြောက်ခဲ့တဲ့အရာတစ်ခုကို ပြန်သတိရလာတယ်။",
        "ဗီရိုတံခါး ဖွင့်သွားတဲ့အချိန် မီးခိုးတွေကြားက လူကြီးတစ်ယောက် ကျွန်တော့်ကို ငုံ့ကြည့်နေတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "He Was Crying", l: "အခန်း",
    g: "သူက ကျွန်တော့်မျက်နှာကို ကြည့်ပြီး ငိုနေတာ။ ငယ်ငယ်က အဲဒီလူကို အိပ်မက်တွေထဲ အမြဲကြောက်ခဲ့တယ်။",
    p: "The same memory image a moment later, closer: firelight catching the wet on a man's cheeks, "
      + "his features still not resolved.",
    u: ["သူက ကျွန်တော့်မျက်နှာကို ကြည့်ပြီး ငိုနေတာ။",
        "ငယ်ငယ်က ကျွန်တော် အဲဒီလူကို အိပ်မက်တွေထဲမှာ အမြဲကြောက်ခဲ့တယ်။",
        "အခုတော့ သူ ဘာလို့ ငိုနေလဲ ကျွန်တော် သိပြီ။"],
    c: [[2, "bigstinger"]] },

  { t: "Losing His Mother a Second Time", l: "အဖေ့အိမ်", w: ["ထက်နိုင်"],
    g: "သူ့လက်ထဲက ကလေးက သူ့အမေကို ဒုတိယအကြိမ် ဆုံးရှုံးရတော့မယ့် သူကိုယ်တိုင် ဖြစ်နေလို့။",
    p: "A man sitting alone in a daylit living room holding a broken toy car in both hands, looking "
      + "at nothing.",
    u: ["သူ့လက်ထဲမှာ ကိုင်ထားတဲ့ကလေးက သူ့အမေကို ဒုတိယအကြိမ် ဆုံးရှုံးရတော့မယ့် သူကိုယ်တိုင် ဖြစ်နေလို့။"],
    c: [[0, "bigstinger"]] },

  { t: "He Spent Twenty-Eight Years That Night", l: "အဖေ့အိမ်",
    g: "နောက်ဆုံးပုံ — လက်ထဲက အပြာရောင်ကားလေးနဲ့ သတင်းစာဖြတ်ပိုင်း ဘေးချင်းယှဉ်။",
    p: "Final composition: the scuffed blue toy car and the yellowed newspaper cutting lying side by "
      + "side on a table in daylight, a man's hands resting either side of them. Hold on the two "
      + "objects.",
    u: ["ပြီးတော့ အဲဒီကလေး အသက်ရှင်ဖို့ သူ့သူငယ်ချင်းရဲ့ နောက်လာမယ့် နှစ်ပေါင်းနှစ်ဆယ့်ရှစ်နှစ်ကို အဲဒီညမှာပဲ သုံးလိုက်ရတော့မှာမို့လို့။"],
    c: [[0, "finalstinger"]] },
];
