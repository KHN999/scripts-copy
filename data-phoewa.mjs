/**
 * ဖိုးဝရှေ့မှာ မလိမ်နဲ့ — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * FOUR RULES.
 *
 * 1. THE DOLL IS A REAL ဖိုးဝရုပ်. Reference photo supplied by the channel: a
 *    stuffed cream cotton body, very large round head, chubby limbs, BLACK YARN
 *    hair in two tied tufts, a painted black fringe, blue eyeshadow, a yellow dot
 *    on the forehead and a yellow stripe down the nose, RED lips, a painted gold
 *    necklace, and — the thing that identifies it — THANAKA on both cheeks,
 *    painted as a yellow disc ringed with small dots. It wears a REAL woven
 *    gold-and-brown checked longyi knotted at the front. The head alone is
 *    papier-mâché under the paint, which is what the letters are layered inside.
 *
 * 2. THE FACE NEVER CHANGES. Not once, in any shot, at any point. The painted
 *    smile is identical in the shop, on the shelf, on the pillow, on the table
 *    and at the end. What changes is only WHERE IT IS and WHICH WAY IT FACES.
 *    Any prompt that makes the face angrier or sadder has broken the story.
 *
 * 3. THE BACK ROOM IS NEVER ENTERED. The door opens a few inches, twice, and
 *    that is all. No body, no blood, no suggestion of one. The smell is acted,
 *    never shown.
 *
 * 4. THE BOY IS QUIET. He does not scream or thrash. He cries without sound
 *    because he has learned to, and that detail is the whole indictment.
 */

import { reviewPhoewa } from './review-phoewa.mjs';

export const CAST = [
  { name: "မင်းသန့်", en: "Min Thant — the father, the narrator",
    prompt: "A Burmese man of about thirty-five, ordinary build, short hair, a plain shirt worn a day "
      + "too long. Tired and controlled at first; increasingly unshaven and sweating as the film goes "
      + "on. Never a monster to look at — an ordinary man in an ordinary house." },
  { name: "ညီညီ", en: "Nyi Nyi — his son, seven",
    prompt: "A Burmese boy of seven, small, a plain t-shirt and shorts, hair cut short. ⚠️ QUIET "
      + "THROUGHOUT — he does not shout or thrash; when he cries he does it silently with his mouth "
      + "shut. Later: faint finger-shaped bruises on one wrist." },
  { name: "ဖိုးဝရုပ်", en: "The Pho Wa doll",
    prompt: "A traditional Myanmar Pho Wa doll about a foot tall: a soft stuffed cream unbleached "
      + "cotton body, chubby round torso, short stubby arms and legs, and a very large round head. "
      + "BLACK YARN hair in two tufts either side, each tied with yellow thread; a spiky black fringe "
      + "PAINTED on the forehead. Painted face: black arched brows, blue eyeshadow, black-outlined "
      + "almond eyes with lashes, a yellow dot between the brows, a yellow stripe down the nose, red "
      + "lips in a small fixed smile. ⚠️ THANAKA on both cheeks — a yellow disc ringed with small "
      + "dots. A gold necklace and pendant painted on the chest. A REAL woven checked longyi in gold "
      + "and brown, knotted at the front. The head is papier-mâché beneath the paint and the old paint "
      + "is finely crazed. ⚠️ THE EXPRESSION IS IDENTICAL IN EVERY SINGLE IMAGE." },
  { name: "သက်ထား", en: "Thet Htar — the mother. Memory and photographs only",
    prompt: "A Burmese woman of about thirty-two, warm, hair tied back, paint on her fingers. ⚠️ SHE "
      + "APPEARS ONLY IN WARM DAYLIT MEMORY IMAGES AND FRAMED PHOTOGRAPHS — making dolls at a table "
      + "with her son, laughing. Never shown injured, never shown dead, never shown in the present." },
  { name: "အန်တီ", en: "The aunt",
    prompt: "A Burmese woman of about forty in ordinary house clothes, kind and practical. Appears "
      + "only in the final act, in her own bright house." },
];

export const LOCS = [
  { name: "ဧည့်ခန်း", en: "The living room",
    prompt: "The living room of a modest Yangon house: a low table, a sofa, a wooden shelf unit, "
      + "framed photographs, a ceiling fan. Lived-in and slightly unkept — washing up not done, a "
      + "child's things where they were dropped." },
  { name: "သားအခန်း", en: "The boy's room",
    prompt: "A small child's bedroom: a low bed against the wall, a blanket, a wooden shelf above it "
      + "at adult chest height, a window with a thin curtain, one warm bulb." },
  { name: "အလုပ်ခန်း", en: "The locked back workroom — NEVER entered",
    prompt: "A plain closed interior door at the back of a house with a padlock hasp on it, seen "
      + "always from the corridor side. ⚠️ WHEN IT OPENS IT OPENS ONLY A FEW INCHES ONTO BLACK — the "
      + "room beyond is never shown, never lit, and nothing in it is ever visible." },
  { name: "ဆိုင်", en: "The second-hand shop",
    prompt: "A crowded junk and antiques shop: old shelving units, boxes, brass, stacked chairs, a "
      + "counter at the front, daylight from the street door." },
  { name: "အန်တီအိမ်", en: "The aunt's house",
    prompt: "A bright clean ordinary living room and small bedroom in another house, morning light, "
      + "an entirely different atmosphere from the first house." },
];

export const STYLE =
  "A modest house in Yangon, Myanmar, present day. Domestic realism turning to horror without ever "
  + "leaving the house: daylight through curtains, one warm bulb at night, the ordinary clutter of a "
  + "father and son living badly alone. Cinematic photorealism, 35mm film grain, shallow depth of "
  + "field, 16:9, desaturated warm palette. ⚠️ THE DOLL'S PAINTED FACE IS IDENTICAL IN EVERY IMAGE — "
  + "the same small fixed smile, the same thanaka discs, no matter what is happening. Only its "
  + "position and the direction it faces ever change. ⚠️ The locked back room is NEVER shown inside, "
  + "and everyone who appears is whole, unharmed and ordinary. No legible text, numbers, "
  + "captions or watermarks in the image.";

export const SCENES = [
  { t: "I Tied It to the Shelf", l: "သားအခန်း",
    g: "စင်ပေါ်က သံချိတ်မှာ အရုပ်ခါးကို ကြိုးနဲ့ နှစ်ပတ်ပတ်ပြီး ချည်ထုံးသုံးထုံး ချည်ထားတယ်။",
    p: "Close on a doll's waist bound twice with cord to a steel hook on a wooden shelf, three firm "
      + "knots tied in the cord.",
    u: ["ဖိုးဝရုပ်ကို ကျွန်တော် ကြိုးနဲ့ ချည်ထားခဲ့တယ်။ စင်ပေါ်က သံချိတ်မှာ။",
        "အရုပ်ရဲ့ခါးကို နှစ်ပတ်ပတ်ပြီး ချည်ထုံးသုံးထုံး ချည်ခဲ့တာ။"] },

  { t: "The Knots Were Still Tied", l: "သားအခန်း",
    g: "မနက်ရောက်တော့ ကြိုးက အဲဒီမှာပဲ။ ချည်ထုံးတွေလည်း မပြေဘူး။ အရုပ်ကတော့ မရှိတော့ဘူး။",
    p: "The same hook in morning light with the cord still looped and knotted around nothing at all, "
      + "holding its shape.",
    u: ["မနက်ရောက်တော့ ကြိုးက အဲဒီမှာပဲ ရှိနေတယ်။",
        "ချည်ထုံးတွေလည်း မပြေဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Beside My Pillow", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "အရုပ်က ခေါင်းအုံးဘေးမှာ။ မျက်နှာက ကျွန်တော့်ဘက်ကို လှည့်ထားတယ်။",
    p: "A Pho Wa doll sitting upright on a bed beside a pillow at close range, facing the camera, "
      + "morning light across it.",
    u: ["အရုပ်ကတော့ ကျွန်တော့်ခေါင်းအုံးဘေးမှာ ရောက်နေတယ်။",
        "မျက်နှာက ကျွန်တော့်ဘက်ကို လှည့်ထားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Thanaka on Both Cheeks", l: null, w: ["ဖိုးဝရုပ်"],
    g: "ပါးနှစ်ဖက်က သနပ်ခါးကွက်အဝါရောင်။ မျက်လုံးပြူးပြူး။ နှုတ်ခမ်းနီနီနဲ့ အမြဲပြုံးနေတဲ့အပြုံး။",
    p: "Extreme close-up of the doll's painted face filling frame: black arched brows, blue "
      + "eyeshadow, a yellow dot between the brows, a yellow stripe down the nose, a yellow thanaka "
      + "disc ringed with dots on each cheek, small red smiling lips. The old paint finely crazed.",
    u: ["ပါးနှစ်ဖက်က သနပ်ခါးကွက်အဝါရောင်။ မျက်လုံးပြူးပြူး။",
        "နှုတ်ခမ်းနီနီနဲ့ အမြဲတမ်းပြုံးနေတဲ့အပြုံး။"] },

  { t: "What I Said Before Bed", l: "သားအခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "မအိပ်ခင် သားက အမေဘယ်နေ့ပြန်လာမလဲလို့ မေးခဲ့တယ်။",
    p: "A father sitting on the edge of a child's bed in lamplight, the boy looking up at him from "
      + "the pillow.",
    u: ["အဲဒီည မအိပ်ခင် ကျွန်တော် နောက်ဆုံးပြောခဲ့တဲ့စကားကို မှတ်မိတယ်။",
        "သားက “အဖေ၊ အမေ ဘယ်နေ့ပြန်လာမှာလဲ” လို့ မေးခဲ့တယ်။",
        "ကျွန်တော်က “မကြာတော့ပါဘူး သား။ အမေနဲ့ အဖေ ဒီမနက်ပဲ ဖုန်းပြောပြီးပြီ” လို့ ပြန်ဖြေခဲ့တာ။"],
    c: [[2, "bigstinger"]] },

  { t: "My Name Is Min Thant", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ဧည့်ခန်းမှာ တစ်ယောက်တည်း။ အိမ်က နည်းနည်း ရှုပ်နေတယ်။",
    p: "A man alone in a cluttered living room at night, dishes undone on the table, a child's shoe "
      + "left on the floor.",
    u: ["ကျွန်တော့်နာမည် မင်းသန့်။ သားနာမည်က ညီညီ။ အသက်ခုနစ်နှစ်။",
        "ကျွန်တော့်ဇနီး သက်ထား အိမ်ကထွက်သွားတာ နှစ်လနီးပါး ရှိပြီ။"] },

  { t: "I Told Him She Was Working", l: "ဧည့်ခန်း",
    g: "နံရံပေါ်က မိသားစုဓာတ်ပုံ။ သုံးယောက်။",
    p: "A framed family photograph on a wall: a man, a woman and a small boy, all smiling, taken "
      + "some years ago.",
    u: ["သားကိုတော့ အမေ အလုပ်သွားလုပ်နေတာလို့ ပြောထားတယ်။",
        "ခုနစ်နှစ်အရွယ်ကလေးတစ်ယောက်ကို လူကြီးတွေကြားက ပြဿနာတွေ ဘယ်လိုရှင်းပြမလဲ။"] },

  { t: "He Used to Hold Her Hand to Sleep", l: null, w: ["သက်ထား", "ညီညီ"],
    g: "အမှတ်တရ — အမေ့လက်ကို ကိုင်ထားပြီး အိပ်နေတဲ့ကလေး။ နွေးထွေးတဲ့အလင်း။",
    p: "A warm memory image: a small boy asleep holding a woman's hand on a bed, her other hand on "
      + "his hair, soft daylight.",
    u: ["သူက အမေ့ကို အရမ်းချစ်တာ။",
        "ကျောင်းကပြန်ရောက်တာနဲ့ အမေ့ကို လိုက်ရှာတတ်တယ်။ ညအိပ်ခါနီးဆို အမေ့လက်ကို ကိုင်ထားရမှ အိပ်ပျော်တတ်တယ်။"] },

  { t: "Waiting at the Door", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "သားက တံခါးနားမှာ ထိုင်စောင့်နေတယ်။ ကျွန်တော့်နောက်မှာ တခြားတစ်ယောက် ပါလာမလားလို့ ကြည့်တာ။",
    p: "A small boy sitting on the floor beside a front door looking past the man coming through it, "
      + "into the empty stairwell behind him.",
    u: ["သက်ထားမရှိတော့တဲ့နောက်ပိုင်း သူ အရမ်းစကားနည်းသွားတယ်။",
        "ကျွန်တော် အလုပ်ကပြန်လာရင် တံခါးနားမှာ ထိုင်စောင့်နေတတ်တယ်။",
        "ကျွန်တော့်နောက်မှာ တခြားတစ်ယောက် ပါလာမလားဆိုပြီး ကြည့်တာ။",
        "အဲဒီအကြည့်ကို ကျွန်တော် မခံနိုင်ဘူး။"],
    c: [[3, "stinger"]] },

  { t: "So I Bought Him Things", l: "ဆိုင်",
    g: "ဒါကြောင့် သားကို အပြင်ခေါ်လည်တယ်။ ကစားစရာဝယ်ပေးတယ်။",
    p: "A father and small boy walking together past street stalls, the man carrying a bag, the boy "
      + "not looking at any of it.",
    u: ["ဒါကြောင့် သားကို အပြင်ခေါ်လည်တယ်။ မုန့်ဝယ်ပေးတယ်။ ကစားစရာဝယ်ပေးတယ်။",
        "ဖိုးဝရုပ်ကိုလည်း အဲဒီလိုပဲ ဝယ်ပေးခဲ့တာ။"] },

  { t: "The Junk Shop", l: "ဆိုင်", w: ["မင်းသန့်"],
    g: "အဟောင်းပစ္စည်းဆိုင်။ ကျွန်တော်က အိမ်သုံးစင်ဟောင်းတစ်လုံး ဝင်ကြည့်နေတာ။",
    p: "A crowded second-hand shop interior, a man examining an old shelving unit, boxes and brass "
      + "stacked to the ceiling behind him.",
    u: ["အရုပ်ကို တွေ့တာက အဟောင်းပစ္စည်းဆိုင်တစ်ဆိုင်မှာ။",
        "ကျွန်တော်က အိမ်သုံးစင်ဟောင်းတစ်လုံး ဝင်ကြည့်နေတာ။"] },

  { t: "Father, This One", l: "ဆိုင်", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "သားက ဆိုင်နောက်ဖက်ကနေ လှမ်းခေါ်တယ်။ လက်ထဲမှာ ဖိုးဝရုပ်တစ်ရုပ်။",
    p: "A small boy standing among stacked junk holding up a Pho Wa doll with both hands, calling "
      + "toward camera.",
    u: ["သားက ဆိုင်နောက်ဖက်က ပစ္စည်းတွေကြားကို လျှောက်ကြည့်ရင်း “အဖေ၊ ဒါလေး” လို့ လှမ်းခေါ်တယ်။",
        "သူ့လက်ထဲမှာ ဖိုးဝရုပ်တစ်ရုပ်။ တစ်ပေလောက် မြင့်တယ်။ ဦးခေါင်းကြီးကြီး။"] },

  { t: "Black Yarn, Tied With Yellow", l: null, w: ["ဖိုးဝရုပ်"],
    g: "ဆံပင်က ချည်မျှင်အမည်းတွေ။ နှစ်ဖက်ခွဲပြီး အဝါရောင်ကြိုးလေးနဲ့ စည်းထားတယ်။ နဖူးက ဆံစပ်ကတော့ ဆေးနဲ့။",
    p: "Close on the doll's head: two thick tufts of black yarn hair either side, each bound with a "
      + "little yellow thread, and a spiky black fringe painted flat on the forehead above the brows.",
    u: ["ဆံပင်က ချည်မျှင်အမည်းတွေနဲ့ လုပ်ထားတာ။ နှစ်ဖက်ခွဲပြီး အဝါရောင်ကြိုးလေးတွေနဲ့ စည်းထားတယ်။",
        "နဖူးပေါ်က ဆံစပ်ကိုတော့ ဆေးနဲ့ ဆွဲထားတယ်။"] },

  { t: "The Painted Face", l: null, w: ["ဖိုးဝရုပ်"],
    g: "မျက်ခုံးမည်းမည်း၊ မျက်ခွံပေါ်မှာ အပြာရောင်ဆေး၊ နှုတ်ခမ်းက အနီရောင်။ ပါးနှစ်ဖက်မှာ သနပ်ခါးကွက်လေးတွေ။",
    p: "The doll's face square to camera: black brows, blue eyeshadow, red lips, and on each cheek a "
      + "yellow thanaka disc ringed with small radiating dots.",
    u: ["မျက်ခုံးမည်းမည်း၊ မျက်ခွံပေါ်မှာ အပြာရောင်ဆေး၊ နှုတ်ခမ်းက အနီရောင်။",
        "ပါးနှစ်ဖက်မှာ သနပ်ခါးကွက်လေးတွေ ရှိတယ်။ အဝါရောင်ဝိုင်းလေးတွေကို အစက်လေးတွေနဲ့ ဝန်းရံထားတာ။"] },

  { t: "A Real Longyi, Knotted at the Front", l: null, w: ["ဖိုးဝရုပ်"],
    g: "လည်ပင်းမှာ ဆွဲကြိုးပုံကို ရွှေရောင်ဆေးနဲ့။ ခါးမှာတော့ အဝတ်အစစ် — ကွက်ကြားလုံချည်လေး ရှေ့မှာ ချည်ထား။",
    p: "The doll's body: a painted gold necklace and pendant on the cream cotton chest, and below it "
      + "a real woven gold-and-brown checked longyi wrapped and knotted at the front.",
    u: ["လည်ပင်းမှာ ဆွဲကြိုးပုံကို ရွှေရောင်ဆေးနဲ့ ဆွဲထားတယ်။",
        "ခါးမှာတော့ အဝတ်အစစ် — အညိုရောင်နဲ့ ရွှေရောင် ကွက်ကြားလုံချည်လေးကို ရှေ့မှာ ချည်ထားတယ်။"] },

  { t: "Soft Body, Paper Head", l: null, w: ["ဖိုးဝရုပ်"],
    g: "ကိုယ်လုံးက အဝတ်နူးနူး ဖောင်းဖောင်းလေး။ ခေါင်းကတော့ စက္ကူနဲ့လုပ်ထားလို့ ပေါ့တယ်။ မျက်နှာမှာ ဆေးအက်ကြောင်းလေးတွေ။",
    p: "The doll held in an adult hand: the body visibly soft and stuffed, the head noticeably harder "
      + "and lighter, its old paint finely crazed all over the cheeks.",
    u: ["ကိုယ်လုံးက အဝတ်နူးနူးနဲ့ ဖောင်းဖောင်းလေး။ ခေါင်းကတော့ စက္ကူနဲ့လုပ်ထားလို့ ပေါ့တယ်။",
        "မျက်နှာမှာတော့ ဆေးဟောင်းတွေ အက်နေတာ နည်းနည်း ရှိတယ်။"] },

  { t: "He Rubbed Behind Its Ear", l: "ဆိုင်", w: ["ညီညီ"],
    g: "သားက အရုပ်ရဲ့ ဘယ်ဘက်နားရွက်နောက်ကို လက်နဲ့ ပွတ်ကြည့်နေတယ်။",
    p: "A boy's thumb rubbing at a spot behind the doll's left ear, checking for something rather "
      + "than playing.",
    u: ["သားက အရုပ်ရဲ့ ဘယ်ဘက်နားရွက်နောက်ကို လက်နဲ့ ပွတ်ကြည့်နေတယ်။",
        "“ဒီအဟောင်းကြီး ဘာလုပ်မလို့လဲ။ အသစ်ဝယ်ပေးမယ်” လို့ ပြောတော့ ခေါင်းခါတယ်။",
        "“ဒီတစ်ရုပ်ပဲ ယူမယ်”"],
    c: [[2, "stinger"]] },

  { t: "He Held It Like That", l: "ဆိုင်", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "ငွေရှင်းနေတုန်း သားက အရုပ်ကို ရင်ခွင်ထဲ ပိုက်ထားတယ်။ အရင်အရုပ်တွေ ဝယ်ပေးတုန်းက အဲဒီလို မဖက်ဖူးဘူး။",
    p: "A small boy holding a doll tightly against his chest with both arms while an adult pays at a "
      + "counter behind him.",
    u: ["ဆိုင်ရှင်က ဈေးနည်းနည်းပဲ တောင်းတယ်။",
        "ကျွန်တော် ငွေရှင်းနေတုန်း သားက အရုပ်ကို ရင်ခွင်ထဲ ပိုက်ထားတယ်။",
        "အရင်အရုပ်အသစ်တွေ ဝယ်ပေးတုန်းကတောင် သူ အဲဒီလို မဖက်ဖူးဘူး။"] },

  { t: "He Whispered to It in the Car", l: null, w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "ကားပေါ်ရောက်တော့ သားက ဖိုးဝရုပ်နားကို ပါးစပ်ကပ်ပြီး တစ်ခုခု ပြောတယ်။",
    p: "A boy in a car back seat with his mouth close to a doll's ear, speaking, the doll facing "
      + "forward.",
    u: ["ကားပေါ်ရောက်တော့ သားက ဖိုးဝရုပ်နားကို ပါးစပ်ကပ်ပြီး တစ်ခုခု ပြောတယ်။",
        "ကျွန်တော် နားထောင်မိပေမယ့် မကြားရဘူး။",
        "“ဘာပြောနေတာလဲ သား” သူက အရုပ်ကို ငုံ့ကြည့်နေတုန်းပဲ။ “ဘာမှမဟုတ်ပါဘူး”"],
    c: [[2, "stinger"]] },

  { t: "On the Shelf, Facing the Bed", l: "သားအခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ပထမညမှာ အရုပ်ကို သားအခန်းထဲက စင်ပေါ် တင်ထားပေးတယ်။ အိပ်ရာဘက်ကို မျက်နှာမူထားပေးတာ။",
    p: "A doll set on a shelf above a child's bed, turned to face the bed, the room lit by one lamp.",
    u: ["ပထမညမှာ ဖိုးဝရုပ်ကို သားအခန်းထဲက စင်ပေါ် တင်ထားပေးတယ်။"] },

  { t: "Did Mother Call", l: "သားအခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "တံခါးဝမှာ ရပ်ပြီး “ဆက်တယ်။ သား ကျောင်းမှာ လိမ္မာလားလို့ မေးတယ်” လို့ ပြောလိုက်တယ်။",
    p: "A man pausing in a bedroom doorway with his hand on the light switch, answering a question "
      + "from the dark room.",
    u: ["သားကို အိပ်ရာထဲ ပို့ပြီး မီးပိတ်ပေးတော့ သူက လှမ်းခေါ်တယ်။ “အဖေ” “ဘာလဲ”",
        "“အမေ ဖုန်းဆက်သေးလား”",
        "ကျွန်တော် တံခါးဝမှာ ရပ်လိုက်တယ်။ “ဆက်တယ်။ သား ကျောင်းမှာ လိမ္မာလားလို့ မေးတယ်”"] },

  { t: "One Click", l: "သားအခန်း",
    g: "အခန်းထဲကနေ တောက်ဆိုတဲ့ အသံတစ်ချက်။",
    p: "A dark bedroom shelf with the doll standing on it exactly as it was left, the room around "
    + "it completely still and every edge sharp. Nothing in the frame is moving.",
    u: ["အခန်းထဲကနေ တောက်။ အသံတစ်ချက် ထွက်လာတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Now It Faced the Door", l: "သားအခန်း", w: ["ဖိုးဝရုပ်"],
    g: "စောစောက အိပ်ရာဘက် မူထားခဲ့တာ။ အခုတော့ တံခါးဝက ကျွန်တော့်ဘက်ကို လှည့်နေတယ်။",
    p: "The doll on the shelf now turned toward the doorway and the man standing in it — the same "
      + "painted smile, only the direction changed.",
    u: ["ကျွန်တော် စင်ဘက်ကို ကြည့်လိုက်တယ်။ ဖိုးဝရုပ်ရဲ့ခေါင်းက နည်းနည်းစောင်းနေတယ်။",
        "စောစောက သားအိပ်ရာဘက်ကို မျက်နှာမူထားပေးခဲ့တာ။",
        "အခုတော့ တံခါးဝမှာ ရပ်နေတဲ့ ကျွန်တော့်ဘက်ကို။"],
    c: [[2, "bigstinger"]] },

  { t: "I Told Myself the Shelf Was Uneven", l: "သားအခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "စင်က မညီလို့ဖြစ်မယ် ထင်လိုက်တယ်။ အရုပ်ကို တည့်တည့်ပြန်ထားပေးတယ်။ သားက ကျွန်တော့်လက်ကို ကြည့်နေတယ်။",
    p: "A man reaching up to straighten a doll on a shelf, and behind him in the bed a boy watching "
      + "his hands rather than his face.",
    u: ["စင်က မညီလို့ဖြစ်မယ် ထင်လိုက်တယ်။ အရုပ်ကို တည့်တည့်ပြန်ထားပေးတယ်။",
        "သားက ကျွန်တော့်လက်ကို ကြည့်နေတယ်။"] },

  { t: "Half an Inch", l: "သားအခန်း",
    g: "ရှပ်။ စက္ကူနဲ့ စင်မျက်နှာပြင် ပွတ်သွားတဲ့အသံ။ အရုပ်က စင်အနားကို လက်မဝက်လောက် ရွေ့လာတယ်။",
    p: "The doll on a shelf, its base now a fraction closer to the front edge, a faint clean track "
      + "left in the dust behind it.",
    u: ["“သားရော အမေနဲ့ ဖုန်းပြောလို့ရလား” “နောက်နေ့ ပြောခိုင်းမယ်။ အခု အမေ အလုပ်လုပ်နေတာ”",
        "ရှပ်။ စက္ကူနဲ့ စင်မျက်နှာပြင် ပွတ်သွားတဲ့အသံ။",
        "ကျွန်တော့်လက်လွတ်လိုက်တဲ့အရုပ်က စင်အနားကို နည်းနည်း ရွေ့လာတယ်။",
        "အရမ်းနည်းနည်းပဲ။ လက်မဝက်လောက်။ ဒါပေမယ့် ကျွန်တော် မြင်လိုက်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "He Was Three Feet Away", l: "သားအခန်း", w: ["ညီညီ"],
    g: "သားက အိပ်ရာထဲမှာ။ အရုပ်စင်နဲ့ သုံးပေလောက် ဝေးတယ်။",
    p: "A wide shot of the small bedroom showing clearly that the boy in the bed cannot reach the "
      + "shelf from where he is.",
    u: ["“သား ခုနက အရုပ်ကို ထိလိုက်သေးလား” ညီညီက ခေါင်းခါတယ်။",
        "သူက အိပ်ရာထဲမှာ။ အရုပ်စင်နဲ့ သုံးပေလောက် ဝေးတယ်။",
        "ကျွန်တော် ကိုယ့်ကိုယ်ကို ရယ်မိတယ်။ အလုပ်ပင်ပန်းလို့ ထင်ယောင်ထင်မှားဖြစ်နေတာပဲ။",
        "အဲဒီလို တွေးပြီး အခန်းထဲက ထွက်လာခဲ့တယ်။"] },

  { t: "Two Voices", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ညဆယ့်တစ်နာရီလောက်မှာ သားအခန်းထဲက စကားပြောသံ။ နောက်တစ်သံ ပါနေတယ်။",
    p: "A man standing still in a dark hallway outside a closed bedroom door, head turned, listening.",
    u: ["ညဆယ့်တစ်နာရီလောက်မှာ သားအခန်းထဲက အသံကြားရတယ်။ စကားပြောနေတဲ့အသံ။",
        "သားတစ်ယောက်တည်း ပြောနေတာလို့ အစမှာ ထင်တယ်။",
        "နောက်တော့ ကြားလိုက်ရတယ်။ နောက်တစ်သံ။ တိုးတိုး။"],
    c: [[2, "bigstinger"]] },

  { t: "Like Someone Inside a Box", l: "သားအခန်း",
    g: "အသံက အခန်းတစ်ခန်းထဲမှာ ပြောနေတာနဲ့ မတူဘူး။ သေတ္တာအဖုံးပိတ်ထားပြီး အထဲကနေ ပြောနေရသလို။",
    p: "A closed bedroom door photographed close, the gap beneath it dark, nothing visible.",
    u: ["အသံက အခန်းတစ်ခန်းထဲမှာ ပြောနေတာနဲ့ မတူဘူး။",
        "သေတ္တာအဖုံးပိတ်ထားပြီး အထဲကနေ ပြောနေရသလို။"],
    c: [[1, "stinger"]] },

  { t: "Who Are You Talking To", l: "သားအခန်း", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "သားက အိပ်ရာပေါ်မှာ ထိုင်နေတယ်။ ဖိုးဝရုပ်က သူ့ရင်ခွင်ထဲမှာ။ အသံနှစ်သံလုံး ရပ်သွားတယ်။",
    p: "A door opened onto a boy sitting up in bed with the doll held in his lap, both of them "
      + "turned toward the doorway.",
    u: ["ကျွန်တော် တံခါးကို ဖွင့်လိုက်တယ်။ သားက အိပ်ရာပေါ်မှာ ထိုင်နေတယ်။ ဖိုးဝရုပ်က သူ့ရင်ခွင်ထဲမှာ။",
        "“ဘာလို့ မအိပ်သေးတာလဲ” အသံနှစ်သံလုံး ရပ်သွားတယ်။",
        "သားက ကျွန်တော့်ကို ကြည့်တယ်။ အရုပ်ကလည်း ကြည့်နေတယ်။",
        "“ဘယ်သူနဲ့ စကားပြောနေတာလဲ” “ဖိုးဝနဲ့”"],
    c: [[3, "bigstinger"]] },

  { t: "Don't Hit Him", l: "သားအခန်း", w: ["ညီညီ", "မင်းသန့်"],
    g: "ကျွန်တော် အရုပ်ကို ယူလိုက်တယ်။ သားက အတင်းမဆွဲဘူး။ တစ်ခွန်းပဲ ပြောတယ်။",
    p: "A man taking a doll out of a boy's hands; the boy lets go without resisting and looks at the "
      + "man's hand, not his face.",
    u: ["ကျွန်တော် သားလက်ထဲက အရုပ်ကို ယူလိုက်တယ်။ သားက အတင်းမဆွဲဘူး။",
        "တစ်ခွန်းပဲ ပြောတယ်။ “အဖေ၊ သူ့ကို မရိုက်နဲ့နော်”",
        "“အဖေ ဘာလို့ ရိုက်ရမှာလဲ”",
        "သားက မဖြေဘူး။ ကျွန်တော့်လက်ကိုပဲ ကြည့်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Hollow", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "အရုပ်ဗိုက်အောက်ခြေကို ခေါက်ကြည့်တယ်။ တောက်၊ တောက်။ အခေါင်းပေါက်သံ။",
    p: "A man's knuckle rapping the underside of the doll's head, the head held upside down under a "
      + "lamp.",
    u: ["အရုပ်ကို ကျွန်တော့်အခန်းထဲ ယူလာတယ်။",
        "ဗိုက်အောက်ခြေကို ခေါက်ကြည့်တယ်။ တောက်၊ တောက်။ အခေါင်းပေါက်သံ။"] },

  { t: "No Battery, No Wire", l: "ဧည့်ခန်း",
    g: "အောက်ခြေမှာ အဖုံးမရှိဘူး။ စက္ကူနဲ့ ပိတ်ထားတယ်။ ကြေးနန်းကြိုး၊ ဘက်ထရီထည့်စရာ ဘာမှ မတွေ့ဘူး။",
    p: "The base of the doll's head under a desk lamp: a smooth sealed disc of aged paper, no hatch, "
      + "no screw, no seam of any kind.",
    u: ["အထဲမှာ အသံထွက်တဲ့စက်တစ်ခုခု ထည့်ထားတာလားဆိုပြီး အောက်ခြေကို လှန်ကြည့်တယ်။",
        "အဖုံးမရှိဘူး။ စက္ကူနဲ့ ပိတ်ထားတယ်။ ဆေးက အဟောင်း။",
        "ကြေးနန်းကြိုး၊ ဘက်ထရီထည့်စရာ ဘာမှ မတွေ့ဘူး။"] },

  { t: "So I Tied It Up", l: "သားအခန်း", w: ["ဖိုးဝရုပ်"],
    g: "အရုပ်ကို စင်ပေါ်တင်ပြီး ခါးကို ကြိုးနဲ့ ချည်ထားလိုက်တယ်။ သား လာယူလို့မရအောင်လည်း ပါတယ်။",
    p: "Hands tying cord around the doll's waist and knotting it to a shelf hook, the knots pulled "
      + "firm.",
    u: ["ဒါနဲ့ အရုပ်ကို စင်ပေါ်မှာ တင်ပြီး ခါးကို ကြိုးနဲ့ ချည်ထားလိုက်တယ်။",
        "ကျွန်တော် မရှိတုန်း သား လာယူလို့ မရအောင်လည်း ပါတယ်။",
        "နောက်နေ့မနက်မှာ ကျွန်တော့်ခေါင်းအုံးဘေးကို ရောက်လာခဲ့တာ။"],
    c: [[2, "bigstinger"]] },

  { t: "A Handspan From My Face", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "နိုးလာတော့ အရင်ဆုံး မြင်ရတာ အရုပ်ရဲ့မျက်နှာ။ တစ်ထွာလောက်ပဲ ဝေးတယ်။",
    p: "Waking point of view: the doll's painted face very close on the pillow, level with the "
      + "sleeper's own, morning light.",
    u: ["ကျွန်တော် နိုးလာတော့ အရင်ဆုံး မြင်ရတာ အရုပ်ရဲ့မျက်နှာ။",
        "ကျွန်တော့်မျက်နှာနဲ့ တစ်ထွာလောက်ပဲ ဝေးတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "How Many Hours Had It Watched", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "မျက်လုံးနှစ်လုံးက ဆေးနဲ့ ဆွဲထားတာ။ ဒါပေမယ့် ကျွန်တော် ဘယ်နှနာရီ အကြည့်ခံခဲ့ရလဲ စဉ်းစားမိတယ်။",
    p: "A man lying very still on his side looking at the doll beside him, his own eyes open and "
      + "afraid.",
    u: ["မျက်လုံးနှစ်လုံးက ဆေးနဲ့ ဆွဲထားတာ။",
        "ဒါပေမယ့် အဲဒီမျက်လုံးတွေကို ကြည့်နေရင်း ကျွန်တော် ဘယ်နှနာရီလောက် အကြည့်ခံနေခဲ့ရလဲဆိုတာ စဉ်းစားမိတယ်။",
        "အိပ်နေတာကို။ မျက်လုံးပိတ်ထားတာကို။ ကိုယ့်ဘေးမှာ ဘာရှိမှန်း မသိတာကို။"],
    c: [[2, "heartbeat"]] },

  { t: "I Knocked It Off the Bed", l: "ဧည့်ခန်း",
    g: "ကျွန်တော် အရုပ်ကို လက်နဲ့ ပုတ်ချလိုက်တယ်။ ကြမ်းပြင်ပေါ် ကျသွားတယ်။ အက်ကွဲသံ မကြားရဘူး။",
    p: "The doll landing on a wooden floor on its side, entirely undamaged, its cloth body absorbing "
      + "the fall.",
    u: ["ကျွန်တော် အရုပ်ကို လက်နဲ့ ပုတ်ချလိုက်တယ်။ ကြမ်းပြင်ပေါ် ကျသွားတယ်။",
        "အက်ကွဲသံ မကြားရဘူး။ စက္ကူခေါင်းကြီးက ကြမ်းပြင်နဲ့ တစ်ချက် ထိတယ်။ တောက်။"] },

  { t: "Still Smiling", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်", "ညီညီ"],
    g: "အရုပ်ရဲ့မျက်နှာက အပေါ်ဘက် လှည့်နေတယ်။ ပြုံးနေတုန်းပဲ။ တံခါးဝမှာ ညီညီ ရပ်နေတယ်။",
    p: "Looking down at the doll on the floor, its face turned up toward camera with exactly the same "
      + "painted smile, and in the background a boy standing in the doorway.",
    u: ["အရုပ်ရဲ့မျက်နှာက အပေါ်ဘက်ကို လှည့်နေတယ်။ ပြုံးနေတုန်းပဲ။",
        "တံခါးဝမှာ ညီညီ ရပ်နေတယ်။ “အဖေ ရိုက်လိုက်တာလား”"],
    c: [[0, "stinger"]] },

  { t: "It Turned Toward My Shoes", l: "ဧည့်ခန်း",
    g: "“မရိုက်ဘူး။ သူ့ဘာသာ ပြုတ်ကျတာ” တောက်။ အရုပ်ခေါင်းက ကျွန်တော့်ဖိနပ်ဘက်ကို လှည့်လာတယ်။",
    p: "The doll on the floor with its head rotated toward a pair of shoes at the edge of frame, "
      + "mid-turn.",
    u: ["ကျွန်တော် အသက်ရှူမြန်နေတယ်။ “မရိုက်ဘူး။ သူ့ဘာသာ ပြုတ်ကျတာ”",
        "တောက်။ အရုပ်ရဲ့ခေါင်းက ကျွန်တော့်ဖိနပ်ဘက်ကို လှည့်လာတယ်။",
        "ဒီတစ်ခါ ကျွန်တော် သေချာမြင်တယ်။ သားကလည်း မြင်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Was Not Surprised", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "သူ့မျက်နှာမှာတော့ အံ့ဩတာ မရှိဘူး။",
    p: "Close on the boy's face in the doorway: completely calm, watching, entirely unsurprised.",
    u: ["သူ့မျက်နှာမှာတော့ အံ့ဩတာ မရှိဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "I Kept Him Home", l: "ဧည့်ခန်း", w: ["မင်းသန့်", "ဖိုးဝရုပ်"],
    g: "ဖုန်းပြောနေတုန်း ဖိုးဝရုပ်က စားပွဲပေါ်မှာ။",
    p: "A man on the phone in a living room, and on the table in the mid-ground the doll sitting "
      + "upright, well back from the edge.",
    u: ["အဲဒီနေ့ သားကို ကျောင်းမပို့တော့ဘူး။ နေမကောင်းဘူးလို့ ဆရာမဆီ ဖုန်းဆက်လိုက်တယ်။",
        "ဖုန်းပြောနေတုန်း ဖိုးဝရုပ်က စားပွဲပေါ်မှာ။"] },

  { t: "It Had Moved to the Edge", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ဖုန်းချပြီး ပြန်ကြည့်တော့ စားပွဲအနားကို ရောက်နေပြီ။ ကျွန်တော် ထိုင်နေတဲ့ဘက်ကို။",
    p: "The same table from the same angle, the doll now at the very edge of it and facing the "
      + "chair where the man sits.",
    u: ["ဖုန်းချပြီး ပြန်ကြည့်တော့ စားပွဲအနားကို ရောက်နေပြီ။ ကျွန်တော် ထိုင်နေတဲ့ဘက်ကို။"],
    c: [[0, "bigstinger"]] },

  { t: "Three Things I Had Said", l: "ဧည့်ခန်း",
    g: "အဖြစ်အပျက်တွေကို ပြန်စဉ်းစားမိတယ် — အမေဖုန်းဆက်တယ်၊ အရုပ်ကို မရိုက်ဘူး၊ သားနေမကောင်းဘူး။",
    p: "Close on a man's face working something out, the doll soft and out of focus in front of him.",
    u: ["အဲဒီအချိန်မှ အဖြစ်အပျက်တွေကို တစ်ခုချင်း ပြန်စဉ်းစားမိတယ်။",
        "သားအမေ ဖုန်းဆက်တယ်လို့ ပြောခဲ့တာ။ အရုပ်ကို မရိုက်ဘူးလို့ ပြောခဲ့တာ။ သား နေမကောင်းဘူးလို့ ပြောခဲ့တာ။"],
    c: [[1, "bigstinger"]] },

  { t: "A Pencil Line", l: "ဧည့်ခန်း",
    g: "အရုပ်ခြေထောက်ရှေ့ကနေ ခဲတံနဲ့ မျဉ်းတစ်ကြောင်း ဆွဲလိုက်တယ်။",
    p: "A pencil drawing a single line on a wooden tabletop a few inches in front of the doll's feet.",
    u: ["ကျွန်တော် စားပွဲပေါ်မှာ အရုပ်ခြေထောက်ရှေ့ကနေ ခဲတံနဲ့ မျဉ်းတစ်ကြောင်း ဆွဲလိုက်တယ်။",
        "ပြီးတော့ ထိုင်ကြည့်နေတယ်။ ငါးမိနစ်။ ဆယ်မိနစ်။ မရွေ့ဘူး။"] },

  { t: "My Name Is Min Thant", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "“ငါ့နာမည် မင်းသန့်” ဘာမှ မဖြစ်ဘူး။ “ငါ ဒီအိမ်မှာ နေတယ်” မရွေ့ဘူး။",
    p: "A man sitting across a table from the doll, speaking to it deliberately, the pencil line "
      + "between them untouched.",
    u: ["“ငါ့နာမည် မင်းသန့်” ကျွန်တော် ပြောလိုက်တယ်။ ဘာမှ မဖြစ်ဘူး။",
        "“ငါ ဒီအိမ်မှာ နေတယ်” မရွေ့ဘူး။"] },

  { t: "That Is Not My Name", l: "ဧည့်ခန်း",
    g: "သားက တံခါးဝမှာ လာရပ်တယ်။ ကျွန်တော် တမင် “ငါ့နာမည် မင်းသန့် မဟုတ်ဘူး” လို့ ပြောလိုက်တယ်။",
    p: "A man leaning toward the doll across a table and saying something with great care, a boy "
      + "watching from a doorway behind him.",
    u: ["သားက အခန်းတံခါးဝမှာ လာရပ်တယ်။",
        "ကျွန်တော် သူ့ကို မကြည့်ဘဲ အရုပ်ကိုပဲ ကြည့်နေတယ်။",
        "ပြီးတော့ တမင်ပြောလိုက်တယ်။ “ငါ့နာမည် မင်းသန့် မဟုတ်ဘူး”"],
    c: [[2, "bigstinger"]] },

  { t: "It Crossed the Line", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ခေါင်းအတွင်းက တောက်။ ခြေထောက်နှစ်ဖက် မလှုပ်ဘူး။ ဒါပေမယ့် တစ်ကိုယ်လုံးက ခဲတံမျဉ်းကို ကျော်လာတယ်။",
    p: "The doll a few inches past the pencil line on the table, both feet still flat and together, "
      + "a faint drag track in the dust behind it.",
    u: ["ခေါင်းအတွင်းက တောက်။ အသံတစ်ချက် ထွက်တယ်။",
        "ကျွန်တော် မျက်တောင်မခတ်ဘဲ ကြည့်နေခဲ့တယ်။ အရုပ်ရဲ့ခြေထောက်နှစ်ဖက် မလှုပ်ဘူး။",
        "ဒါပေမယ့် အရုပ်တစ်ကိုယ်လုံးက ခဲတံမျဉ်းကို ကျော်လာတယ်။",
        "သစ်သားပေါ်ကနေ ဖြည်းဖြည်း လျှောလာတာ။ ကျွန်တော့်ဘက်ကို။"],
    c: [[2, "bigstinger"]] },

  { t: "Father, Don't Lie", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "သားက အခန်းထဲကနေ ပြောတယ်။ “အဖေ မလိမ်နဲ့လေ”",
    p: "A boy in a doorway saying something quietly, his father half-turned in a chair toward him.",
    u: ["ကျွန်တော် ထိုင်ခုံနောက်ကို ယိုင်သွားတယ်။",
        "သားက အခန်းထဲကနေ ပြောတယ်။ “အဖေ မလိမ်နဲ့လေ”",
        "ကျွန်တော် သူ့ကို လှည့်ကြည့်လိုက်တယ်။ “သား ဘယ်လိုသိတာလဲ”"],
    c: [[1, "bigstinger"]] },

  { t: "Did It Tell You", l: "ဧည့်ခန်း", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "ညီညီက ဖိုးဝရုပ်ကို ကြည့်တယ်။ ပြီးတော့ ခေါင်းငုံ့လိုက်တယ်။",
    p: "A boy's eyes going to the doll on the table and then dropping to the floor without answering.",
    u: ["ညီညီက ဖိုးဝရုပ်ကို ကြည့်တယ်။ ပြီးတော့ ခေါင်းငုံ့လိုက်တယ်။",
        "“သူ ပြောပြတာလား” သား မဖြေဘူး။",
        "ကျွန်တော် အသံကျယ်သွားတယ်။ “အဖေ မေးနေတာ!”"] },

  { t: "It Was Not Interested in Shouting", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "အရုပ်က မလှုပ်ဘူး။ ကျွန်တော် အော်တာကို သူ စိတ်မဝင်စားဘူး။ လိမ်တာကိုပဲ စောင့်နေတာ။",
    p: "The doll on the table completely still while a man shouts off-frame, the stillness of it "
      + "absolute.",
    u: ["အရုပ်က မလှုပ်ဘူး။ ကျွန်တော် အော်တာကို သူ စိတ်မဝင်စားဘူး။",
        "ကျွန်တော် လိမ်တာကိုပဲ စောင့်နေတာ။ အဲဒီအချက်က ပိုဆိုးတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "You Cannot Shout It Down", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ဒေါသနဲ့ အော်လို့မရဘူး။ ကြောက်လို့ ခြိမ်းခြောက်လို့လည်း မရဘူး။ အမှန်မဟုတ်တဲ့စကား ပါသွားရင် သူ ပိုနီးလာမယ်။",
    p: "A man sitting back in a chair with both hands over his mouth, working out the rules of "
      + "something.",
    u: ["ဒေါသနဲ့ အော်လိုက်လို့ မရဘူး။ ကြောက်လို့ ခြိမ်းခြောက်လိုက်လို့လည်း မရဘူး။",
        "အမှန်မဟုတ်တဲ့ စကားတစ်ခွန်း ပါသွားရင် သူ ပိုနီးလာမယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Took It Back to the Shop", l: "ဆိုင်", w: ["မင်းသန့်", "ဖိုးဝရုပ်"],
    g: "အရုပ်ကို ဆိုင်ပြန်သွားပေးတယ်။ သားကိုတော့ အိမ်မှာပဲ နေခိုင်းခဲ့တယ်။",
    p: "A man carrying the doll under one arm into a second-hand shop, the shopkeeper looking up from "
      + "the counter.",
    u: ["အရုပ်ကို ဆိုင်ပြန်သွားပေးတယ်။ သားကိုတော့ အိမ်မှာပဲ နေခိုင်းခဲ့တယ်။",
        "ဆိုင်ရှင်က ကျွန်တော့်လက်ထဲက အရုပ်ကို မြင်တော့ “ဘာဖြစ်လို့လဲ” လို့ မေးတယ်။"] },

  { t: "It Touched My Wrist", l: "ဆိုင်",
    g: "“သား မကြိုက်လို့” ပြောပြီးမှ ကိုယ့်စကားကိုယ် သတိထားမိတယ်။ အရုပ်ခေါင်းက လက်ကောက်ဝတ်ကို တစ်ချက် လာထိတယ်။",
    p: "The doll's head tipping to touch the inside of a wrist that is holding it, very close, "
      + "unmistakably deliberate.",
    u: ["“သား မကြိုက်လို့” ကျွန်တော် ပြောပြီးမှ ကိုယ့်စကားကိုယ် သတိထားမိတယ်။",
        "လက်ထဲက အရုပ်ခေါင်းက ကျွန်တော့်လက်ကောက်ဝတ်ကို တစ်ချက် လာထိတယ်။ တောက်။"],
    c: [[1, "bigstinger"]] },

  { t: "Three Blue Spots", l: "ဆိုင်", w: ["ဖိုးဝရုပ်"],
    g: "အရုပ်ဘယ်ဘက်နားရွက်နောက်ကို လှန်ကြည့်တယ်။ အပြာရောင်ဆေးစက်သုံးစက် ရှိတယ်။",
    p: "Extreme close-up behind the doll's left ear: three small smudges of blue paint on the cream "
      + "cloth, roughly fingertip sized and spaced.",
    u: ["ကျွန်တော် အရုပ်ကို ကောင်တာပေါ် ချလိုက်တယ်။ ဆိုင်ရှင်က သတိမထားမိဘူး။",
        "အရုပ်ဘယ်ဘက်နားရွက်နောက်ကို လှန်ကြည့်တယ်။ အပြာရောင်ဆေးစက်သုံးစက် ရှိတယ်။"],
    c: [[1, "stinger"]] },

  { t: "It Came From Your Street", l: "ဆိုင်",
    g: "ဆိုင်ရှင်က “ဒီတစ်ရုပ်က ခင်ဗျားတို့ဘက်က ပစ္စည်းတွေနဲ့ ပါလာတာမဟုတ်လား” လို့ မေးတယ်။",
    p: "A shopkeeper leaning on a counter talking, the doll on the counter between him and the "
      + "customer.",
    u: ["“ဒီတစ်ရုပ်က ခင်ဗျားတို့ဘက်က ပစ္စည်းတွေနဲ့ ပါလာတာမဟုတ်လား”",
        "ကျွန်တော် ရပ်သွားတယ်။ “ဘာပြောတာလဲ”"],
    c: [[1, "bigstinger"]] },

  { t: "Boxes From a Back Workroom", l: "ဆိုင်",
    g: "“လွန်ခဲ့တဲ့လက အဟောင်းဝယ်တဲ့လူ ကားနဲ့ လာချသွားတယ်။ အိမ်နောက်ဖေးအလုပ်ခန်းက ပစ္စည်းတွေဆိုပြီး”",
    p: "Stacked cardboard boxes at the back of a shop with paint tins and paper visible in the open "
      + "top of one.",
    u: ["“လွန်ခဲ့တဲ့လက အဟောင်းဝယ်တဲ့လူ ကားတစ်စီးနဲ့ လာချသွားတယ်လေ။ အိမ်နောက်ဖေးအလုပ်ခန်းက ပစ္စည်းတွေဆိုပြီး။ ဆေးဘူးတွေ၊ စက္ကူပုံးတွေနဲ့”",
        "သူက ကျွန်တော်တို့အိမ်ရှိတဲ့လမ်းနာမည်ကို ပြောတယ်။ ကျွန်တော် မဖြေဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Does Your Wife Make Dolls", l: "ဆိုင်", w: ["မင်းသန့်"],
    g: "“ခင်ဗျားမိန်းမက အရုပ်လုပ်တတ်တာလား” ကျွန်တော် နားနောက်က ဆေးစက်တွေကို ကြည့်နေမိတယ်။",
    p: "Close on a man's face receiving a question he cannot answer, the doll on the counter below "
      + "his eyeline.",
    u: ["“ခင်ဗျားမိန်းမက အရုပ်လုပ်တတ်တာလား”",
        "ကျွန်တော် အရုပ်ရဲ့ နားနောက်က အပြာရောင်ဆေးစက်တွေကို ကြည့်နေမိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Made Little Paper Dolls", l: null, w: ["သက်ထား", "ညီညီ"],
    g: "အမှတ်တရ — သက်ထားက စားပွဲမှာ စက္ကူအရုပ်လေးတွေ လုပ်နေတယ်။ သားက ဘေးမှာ ကူတယ်။",
    p: "A warm memory image: a woman at a table making small paper dolls with a boy beside her, both "
      + "laughing, paint pots open.",
    u: ["သက်ထားက စက္ကူအရုပ်သေးသေးတွေ လုပ်တတ်တယ်။ အိမ်မှာ အားရင် ဆေးခြယ်တယ်။",
        "သားက ဘေးမှာ ကူတယ်။ ကူတယ်ဆိုတာထက် ရှုပ်ပေးတာ။"] },

  { t: "Paint on His Fingers", l: null, w: ["ညီညီ"],
    g: "လက်ချောင်းတွေမှာ ဆေးတွေ ပေကျံနေပြီး ပစ္စည်းအကုန်ကို လိုက်တို့တတ်တယ်။",
    p: "A small boy's hand with blue paint on three fingertips reaching to touch something, from the "
      + "same warm memory.",
    u: ["လက်ချောင်းတွေမှာ ဆေးတွေ ပေကျံနေပြီး ပစ္စည်းအကုန်ကို လိုက်တို့တတ်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "I Took It Home Again", l: "ဆိုင်", w: ["မင်းသန့်", "ဖိုးဝရုပ်"],
    g: "ကျွန်တော် အရုပ်ကို ပြန်ကောက်လိုက်တယ်။ ဆိုင်ရှင်မေးတာကို မဖြေဘဲ ထွက်လာခဲ့တယ်။",
    p: "A man picking the doll back up off a shop counter and walking out into the street with it, "
      + "the shopkeeper's hand half raised behind him.",
    u: ["ကျွန်တော် အရုပ်ကို ပြန်ကောက်လိုက်တယ်။",
        "ဆိုင်ရှင်က “ပြန်မအပ်တော့ဘူးလား” လို့ မေးတယ်။ ကျွန်တော် မဖြေဘဲ ထွက်လာခဲ့တယ်။"] },

  { t: "He Had His Ear to the Floor", l: "အလုပ်ခန်း", w: ["ညီညီ"],
    g: "အိမ်ပြန်ရောက်တော့ သားက နောက်ဖေးအလုပ်ခန်းတံခါးရှေ့မှာ ကြမ်းပြင်ပေါ် နားကပ်ထားတယ်။",
    p: "A small boy lying flat on a corridor floor with his ear pressed to the gap beneath a closed "
      + "padlocked door.",
    u: ["အိမ်ပြန်ရောက်တော့ သားက နောက်ဖေးအလုပ်ခန်းတံခါးရှေ့မှာ ထိုင်နေတယ်။",
        "အဲဒီအခန်းကို သက်ထားမရှိတော့ကတည်းက ကျွန်တော် သော့ခတ်ထားတာ။",
        "သားက ကြမ်းပြင်ပေါ် နားကပ်ထားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Mother's Shoes Are In There", l: "အလုပ်ခန်း", w: ["ညီညီ", "မင်းသန့်"],
    g: "“နားထောင်နေတာ” “ဘာကိုလဲ” သားက တံခါးအောက်ခြေကို ကြည့်တယ်။ “အထဲမှာ အမေ့ဖိနပ်ရှိတယ်”",
    p: "A man bringing a boy up onto his feet with a hand under one arm, the closed door behind "
      + "them, the boy still looking at its base.",
    u: ["ကျွန်တော် သူ့ကို ချက်ချင်း ဆွဲထူလိုက်တယ်။ “ဒီမှာ ဘာလုပ်နေတာလဲ” “နားထောင်နေတာ”",
        "“ဘာကိုလဲ” သားက တံခါးအောက်ခြေကို ကြည့်တယ်။",
        "“အထဲမှာ အမေ့ဖိနပ်ရှိတယ်”"],
    c: [[2, "bigstinger"]] },

  { t: "She Bought New Ones", l: "အလုပ်ခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "ကျွန်တော် လက်ထဲက အရုပ်ကို ပိုတင်းတင်း ကိုင်မိတယ်။ “အမေ ဖိနပ်အသစ်ဝယ်သွားတာ”",
    p: "A man's hand tightening around the doll's body, the cloth compressing under his fingers.",
    u: ["ကျွန်တော် လက်ထဲက အရုပ်ကို ပိုတင်းတင်း ကိုင်မိတယ်။ “အမေ ဖိနပ်အသစ်ဝယ်သွားတာ”",
        "သားက ကျွန်တော့်မျက်နှာကို ကြည့်တယ်။ “အဖေ အမေသွားတုန်းက မြင်လိုက်လား”"],
    c: [[1, "bigstinger"]] },

  { t: "Go to Your Room", l: "အလုပ်ခန်း", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "သား တစ်လှမ်းချင်း လျှောက်သွားတယ်။ မသွားခင် ဖိုးဝရုပ်ကို တစ်ချက် လှမ်းကြည့်တယ်။",
    p: "A boy walking away down a corridor, glancing back once at the doll in his father's hand.",
    u: ["ကျွန်တော် သူ့ကို အခန်းရှေ့ကနေ တွန်းဖယ်လိုက်တယ်။ “မေးခွန်းတွေ များနေပြီ။ အခန်းထဲ သွား”",
        "သူ တစ်လှမ်းချင်း လျှောက်သွားတယ်။ မသွားခင် ဖိုးဝရုပ်ကို တစ်ချက် လှမ်းကြည့်တယ်။",
        "အရုပ်ရဲ့မျက်နှာက ကျွန်တော့်လက်ထဲမှာ အပေါ်ကို မော့နေတယ်။ ကျွန်တော့်ကို။"],
    c: [[2, "bigstinger"]] },

  { t: "I Opened the Head", l: "ဧည့်ခန်း",
    g: "အောက်ခြေက စက္ကူအလွှာကို ဓားအသေးနဲ့ နည်းနည်း ခွာလိုက်တာ။ အဟောင်းစက္ကူနံ့နဲ့ ကော်ခြောက်နံ့ ထွက်လာတယ်။",
    p: "A craft knife easing up a disc of aged paper from the base of the doll's head under a desk "
      + "lamp, layers visible in the cut edge.",
    u: ["အရုပ်ခေါင်းကို အဲဒီနေ့ညနေမှာ ဖွင့်ကြည့်ခဲ့တယ်။",
        "အောက်ခြေက စက္ကူအလွှာကို ဓားအသေးနဲ့ နည်းနည်း ခွာလိုက်တာ။",
        "အဟောင်းစက္ကူနံ့ ထွက်လာတယ်။ ကော်ခြောက်နံ့လည်း ပါတယ်။"] },

  { t: "Layers of Paper", l: "ဧည့်ခန်း",
    g: "အတွင်းမှာ စက္ကူအလွှာတွေ အထပ်ထပ်။ သတင်းစာအစတွေ။ ရေးပြီးသားစာရွက်အစတွေ။",
    p: "Inside the opened head: dozens of layers of pasted paper, newsprint and handwritten sheets "
      + "compressed into a shell.",
    u: ["အတွင်းမှာ စက္ကူအလွှာတွေ အထပ်ထပ်။",
        "သတင်းစာအစတွေ။ ရေးပြီးသားစာရွက်အစတွေ။"] },

  { t: "Her Handwriting", l: "ဧည့်ခန်း",
    g: "အဲဒီအထဲမှာ လက်ရေးတစ်ခု မြင်လိုက်တယ်။ စာလုံးကို ဝိုင်းဝိုင်းရေးတတ်တဲ့အကျင့်။",
    p: "A fragment of handwriting on a torn paper layer inside the doll's head, rounded letterforms, "
      + "not legible as words.",
    u: ["အဲဒီအထဲမှာ လက်ရေးတစ်ခု မြင်လိုက်တယ်။ စာလုံးကို ဝိုင်းဝိုင်းရေးတတ်တဲ့အကျင့်။",
        "“သ” ရေးရင် အောက်ကအကွေးကို အမြဲရှည်သွားတတ်တဲ့အကျင့်။ သက်ထားရဲ့လက်ရေး။"],
    c: [[1, "bigstinger"]] },

  { t: "He Still Believes You", l: "ဧည့်ခန်း",
    g: "စာကြောင်းက မပြည့်ဘူး။ ဒါပေမယ့် ဖတ်လို့ရတယ် — “…သားက မင်းပြောတာကို ယုံနေသေးတယ်…”",
    p: "A torn strip of paper held flat under a lamp, a broken line of handwriting across it.",
    u: ["ကျွန်တော် စက္ကူအစကို ဖြည်းဖြည်း ခွာထုတ်လိုက်တယ်။",
        "စာကြောင်းက မပြည့်ဘူး။ ဒါပေမယ့် ဖတ်လို့ရတယ်။",
        "“…သားက မင်းပြောတာကို ယုံနေသေးတယ်…”"],
    c: [[2, "bigstinger"]] },

  { t: "This Time I'm Taking Him", l: "ဧည့်ခန်း",
    g: "နောက်တစ်လွှာမှာ စာစတစ်ခု ထပ်ရှိတယ် — “…ဒီတစ်ခါတော့ သားကို ငါနဲ့…” ကျန်တာက ကော်နဲ့ ကပ်နေတယ်။",
    p: "A second torn fragment, its remaining half still glued fast into the layers beneath it.",
    u: ["ကျွန်တော့်လက်တွေ ရပ်သွားတယ်။ နောက်တစ်လွှာမှာ စာစတစ်ခု ထပ်ရှိတယ်။",
        "“…ဒီတစ်ခါတော့ သားကို ငါနဲ့…” ကျန်တာက ကော်နဲ့ ကပ်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Wrote Instead of Arguing", l: null, w: ["သက်ထား"],
    g: "သက်ထားက စာရေးတတ်တယ်။ မျက်နှာချင်းဆိုင်ပြောရင် အငြင်းပွားမှာစိုးလို့တဲ့။",
    p: "A memory image of a woman writing at a kitchen table at night, a small stack of folded paper "
      + "beside her.",
    u: ["သက်ထားက ကျွန်တော့်ကို စာရေးတတ်တယ်။",
        "မျက်နှာချင်းဆိုင်ပြောရင် အငြင်းပွားမှာစိုးလို့တဲ့။",
        "ရေးပြီးမှ တချို့စာတွေကို ပြန်ဆုတ်ပစ်တယ်။ စက္ကူအဟောင်းတွေကို အရုပ်လုပ်တဲ့အခါ သုံးတယ်။"] },

  { t: "Everything I Never Read", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ကျွန်တော် မဖတ်ခဲ့တဲ့စာတွေက အဲဒီအရုပ်ခေါင်းထဲမှာ ရှိနေတာ။",
    p: "The opened doll's head on a table beside a small pile of separated paper fragments, the "
      + "painted face turned up.",
    u: ["ကျွန်တော် မဖတ်ခဲ့တဲ့စာတွေက အဲဒီအရုပ်ခေါင်းထဲမှာ ရှိနေတာ။",
        "ကျွန်တော် အရုပ်ကို စားပွဲပေါ် ချလိုက်တယ်။ အိမ်ထဲက လေတွေ ပူလာသလို ခံစားရတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Pho Wa Told Me About Mother", l: "သားအခန်း", w: ["ညီညီ"],
    g: "သားက မျက်လုံးမဖွင့်ဘဲ ပြောတယ် — “ဖိုးဝက မနေ့ညက အမေ့အကြောင်း ပြောပြပြီးပြီ”",
    p: "A boy in bed with his eyes closed and the blanket to his chest, speaking; a man's hand "
      + "frozen just above his hair.",
    u: ["သားအခန်းဘက်ကို သွားတယ်။ ညီညီက အိပ်ရာပေါ်မှာ စောင်ကို ရင်ဘတ်အထိ ဆွဲခြုံထားတယ်။ မျက်လုံးပိတ်ထားတယ်။",
        "“သား အိပ်နေပြီလား” သူ မဖြေဘူး။",
        "ကျွန်တော် သူ့ခေါင်းကို လက်နဲ့ ထိမလို့ လုပ်တယ်။ ကျွန်တော် လက်ရပ်လိုက်တယ်။",
        "အဲဒီအချိန် သူက မျက်လုံးမဖွင့်ဘဲ ပြောတယ်။ “အဖေ… ဖိုးဝက မနေ့ညက အမေ့အကြောင်း ပြောပြပြီးပြီ”"],
    c: [[3, "bigstinger"]] },

  { t: "Which Country Is She In", l: "သားအခန်း", w: ["ညီညီ", "မင်းသန့်"],
    g: "သူ မျက်လုံးဖွင့်လာတယ်။ “အမေ ဘယ်နိုင်ငံမှာလဲ”",
    p: "A boy's eyes opening and fixing on his father's face, the father's hand still suspended above "
      + "his head.",
    u: ["ကျွန်တော့်လက်က သူ့ဆံပင်အပေါ်မှာ တောင့်နေတယ်။ “ဘာပြောတာလဲ”",
        "သားက မဖြေဘူး။ “ညီညီ။ အဖေ မေးနေတာ”",
        "သူ မျက်လုံးဖွင့်လာတယ်။ ကျွန်တော့်မျက်နှာကို ကြည့်တယ်။ “အမေ ဘယ်နိုင်ငံမှာလဲ”"],
    c: [[2, "bigstinger"]] },

  { t: "It Was at the Door", l: "သားအခန်း", w: ["ဖိုးဝရုပ်"],
    g: "တောက်။ ရှပ်။ အရုပ်ရဲ့ဦးခေါင်းက တံခါးအောက်ခြေနားမှာ ပေါ်လာတယ်။ အခန်းထဲကို မကြည့်ဘူး။",
    p: "The doll standing at the foot of an open bedroom doorway, its head turned not into the room "
      + "but toward the man standing in the doorway.",
    u: ["“နိုင်ငံခြားမဟုတ်ဘူးလေ။ မန္တလေးမှာလို့ ပြောထားတယ်မဟုတ်လား”",
        "အပြင်ဘက် ဧည့်ခန်းကနေ တောက်။ စက္ကူပွတ်သံ နောက်က လိုက်လာတယ်။ ရှပ်။ ပြီးတော့ နောက်တစ်ခါ။ ရှပ်။",
        "ကျွန်တော် သားအခန်းတံခါးကို လှည့်ကြည့်တယ်။ အရုပ်ရဲ့ဦးခေါင်းက တံခါးအောက်ခြေနားမှာ ပေါ်လာတယ်။",
        "သူက အခန်းထဲကို မကြည့်ဘူး။ တံခါးဝမှာ ရပ်နေတဲ့ ကျွန်တော့်ကိုပဲ ကြည့်နေတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "Into a Box", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ကျွန်တော် ဖိုးဝကို အဝတ်နဲ့ ပတ်ပြီး ပုံးထဲ ထည့်တယ်။ အဖုံးပိတ်ပြီး အပေါ်က ပစ္စည်းတစ်ခု တင်ထားလိုက်တယ်။",
    p: "A doll wrapped in cloth and laid in a cardboard box, the flaps closed and a heavy object set "
      + "on top of them.",
    u: ["ကျွန်တော် ဖိုးဝကို အဝတ်နဲ့ ပတ်လိုက်တယ်။ ပုံးတစ်လုံးထဲ ထည့်တယ်။",
        "အဖုံးပိတ်ပြီး အပေါ်က ပစ္စည်းတစ်ခု တင်ထားလိုက်တယ်။"] },

  { t: "He Does Nothing to Me", l: "သားအခန်း", w: ["ညီညီ", "မင်းသန့်"],
    g: "သားက တံခါးနား လာတယ်။ “သူ ဘာမှမလုပ်ဘူး” “သား မသိပါဘူး” “သူက သားကို ဘာမှမလုပ်ဘူး”",
    p: "A boy standing at a bedroom door arguing quietly with his father, both of them in the "
      + "doorway.",
    u: ["ညီညီ့ကို အခန်းထဲမှာပဲ နေခိုင်းတယ်။ “အဖေ ဒီအရုပ်ကို ရှင်းလိုက်မယ်။ သား အပြင်မထွက်နဲ့”",
        "သားက တံခါးနား လာတယ်။ “သူ ဘာမှမလုပ်ဘူး” “သား မသိပါဘူး”",
        "“သူက သားကို ဘာမှမလုပ်ဘူး”"],
    c: [[2, "stinger"]] },

  { t: "I Locked Him In", l: "သားအခန်း", w: ["မင်းသန့်"],
    g: "အဲဒီစကားကြောင့် ဒေါသထွက်သွားတယ်။ “အဖေ့စကား နားထောင်စမ်း!” တံခါးပိတ်လိုက်တယ်။",
    p: "A bedroom door pulled shut and a key turned in it, a man's hand on the key, a boy's fingers "
      + "just visible withdrawing from the far side.",
    u: ["အဲဒီစကားကြောင့် ကျွန်တော် ဒေါသထွက်သွားတယ်။ “အဖေ့စကား နားထောင်စမ်း!”",
        "တံခါးပိတ်လိုက်တယ်။",
        "သားက အတွင်းကနေ လက်ကိုင်ကို လှည့်ကြည့်တယ်။ “အဖေ၊ တံခါးဖွင့်ပေး”",
        "ကျွန်တော် မဖြေဘူး။ သော့ကို အိတ်ထဲ ထည့်လိုက်တယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "An Adult Has to Decide", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "တချို့အချိန်မှာ ကလေးရဲ့စိတ်ကို လိုက်လို့မရဘူး။ အန္တရာယ်ရှိတယ်ဆိုတာ လူကြီးကပဲ ဆုံးဖြတ်ပေးရတယ်။",
    p: "A man standing with his back against a closed bedroom door, the key in his fist, eyes shut.",
    u: ["တချို့အချိန်တွေမှာ ကလေးရဲ့စိတ်ကို လိုက်လို့မရဘူး။",
        "သူ့အတွက် အန္တရာယ်ရှိနေတယ်ဆိုတာ လူကြီးကပဲ ဆုံးဖြတ်ပေးရတယ်။",
        "အဲဒီအချိန် ကျွန်တော် စဉ်းစားနေခဲ့တာ အဲဒီလိုပဲ။"] },

  { t: "I Locked the Front Door Too", l: "ဧည့်ခန်း",
    g: "အိမ်အပြင်တံခါးကိုပါ သော့ခတ်လိုက်တယ်။ ဘယ်သူမှ ဝင်မလာစေချင်ဘူး။",
    p: "A front door being bolted from inside, chain and deadlock both engaged.",
    u: ["ကျွန်တော် အိမ်အပြင်တံခါးကိုပါ သော့ခတ်လိုက်တယ်။ ဘယ်သူမှ ဝင်မလာစေချင်ဘူး။",
        "ဒီအရုပ်ကို အပြီးရှင်းဖို့ လိုတယ်။"] },

  { t: "He Shouldn't See That Handwriting", l: "ဧည့်ခန်း",
    g: "စားပွဲပေါ်က စက္ကူအပိုင်းအစတွေကို လက်နဲ့ သိမ်းလိုက်တယ်။",
    p: "Hands sweeping torn paper fragments off a table into a fist.",
    u: ["စားပွဲပေါ်က စက္ကူအပိုင်းအစတွေကို လက်နဲ့ သိမ်းလိုက်တယ်။",
        "အဲဒီလက်ရေးကို သား မမြင်သင့်ဘူး။ တချို့စာတွေက နားလည်မှုလွဲစေနိုင်တယ်။",
        "လူတစ်ယောက် ဒေါသထွက်နေတဲ့အချိန် ရေးတဲ့စာကို အမှန်တရားလို့ ယူဆလို့မရဘူး။"],
    c: [[2, "stinger"]] },

  { t: "The Box Had Not Been Opened", l: "ဧည့်ခန်း",
    g: "သားအခန်းထဲကနေ အသံနှစ်သံ ရှိနေတယ်။ ပုံးအဖုံးက ပိတ်ထားတုန်း။ အပေါ်က ပစ္စည်းလည်း မရွေ့ဘူး။",
    p: "A closed cardboard box with a heavy object still squarely on top of it, undisturbed, in an "
      + "empty living room.",
    u: ["သားအခန်းထဲကနေ အသံကြားရတယ်။ သူ စကားပြောနေတယ်။",
        "ကျွန်တော် ပုံးကို ပြန်ကြည့်လိုက်တယ်။ အဖုံးက ပိတ်ထားတုန်း။ အပေါ်က ပစ္စည်းလည်း မရွေ့ဘူး။",
        "ဒါပေမယ့် သားအခန်းထဲမှာ အသံနှစ်သံ ရှိနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Did It Hurt Her", l: "သားအခန်း",
    g: "ညီညီက တိုးတိုးမေးတယ် — “အမေ အဲဒီနေ့က နာသွားလား”",
    p: "A man's ear against a closed bedroom door, his face beside it, listening.",
    u: ["ကျွန်တော် တံခါးနားကို သွားပြီး နားထောင်လိုက်တယ်။",
        "ညီညီက တိုးတိုးမေးတယ်။ “အမေ အဲဒီနေ့က နာသွားလား”",
        "ကျွန်တော့်နားထဲမှာ သွေးခုန်သံတွေ ကြားလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Then It Was Her Voice", l: "သားအခန်း",
    g: "အတွင်းက အသံတစ်သံ ပြန်ဖြေတယ်။ ဘူးခွံတစ်ခုထဲကနေ ထွက်လာသလို။ ပြီးတော့ သက်ထားရဲ့အသံ ဖြစ်သွားတယ်။",
    p: "The closed door filling the frame, the strip of light beneath it running unbroken from one "
    + "side to the other. ⚠️ NOTHING CROSSES THAT STRIP AND NOTHING IN THE FRAME IS MOVING.",
    u: ["အတွင်းက အသံတစ်သံ ပြန်ဖြေတယ်။ ဘူးခွံတစ်ခုထဲကနေ ထွက်လာသလို။",
        "“သား အိပ်မပျော်သေးဘူးဆိုတာ…” အသံက ခဏပြတ်တယ်။",
        "ပြီးတော့ သက်ထားရဲ့အသံ ဖြစ်သွားတယ်။ “သူ သိသွားလို့ မဖြစ်ဘူး…”"],
    c: [[2, "bigstinger"]] },

  { t: "It Was Beside Him", l: "သားအခန်း", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "တံခါးဖွင့်လိုက်တော့ သားက အိပ်ရာပေါ်။ ဖိုးဝရုပ်က သူ့ဘေးမှာ။",
    p: "A door thrown open onto a boy sitting on a bed with the doll seated upright beside him on the "
      + "blanket.",
    u: ["ကျွန်တော် တံခါးကို ချက်ချင်း ဖွင့်လိုက်တယ်။",
        "သားက အိပ်ရာပေါ်မှာ။ ဖိုးဝရုပ်က သူ့ဘေးမှာ။"],
    c: [[1, "bigstinger"]] },

  { t: "Let Go", l: "သားအခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "ကျွန်တော် ဖိုးဝကို ဆွဲယူတယ်။ သားက အရုပ်လက်ကို ကိုင်ထားတယ်။ “မယူနဲ့ အဖေ” “လွှတ်!”",
    p: "A tug of war over the doll between a man and a boy on a bed, both gripping hard.",
    u: ["ကျွန်တော် ဖိုးဝကို ဆွဲယူလိုက်တယ်။ သားက အရုပ်ရဲ့လက်တစ်ဖက်ကို ကိုင်ထားတယ်။",
        "“မယူနဲ့ အဖေ” “လွှတ်!”"] },

  { t: "Marks on His Wrist", l: "သားအခန်း", w: ["ညီညီ"],
    g: "ကျွန်တော် သူ့လက်ကောက်ဝတ်ကို ဖမ်းပြီး ဖြုတ်လိုက်တယ်။ သား အော်တယ်။ လက်ပေါ်မှာ လက်ချောင်းရာတွေ ကျန်သွားတယ်။",
    p: "Close on a child's inner wrist: four small pale pink patches the shape of fingertips on "
      + "otherwise smooth even skin, his other hand half covering them. The skin is unbroken and "
      + "there is nothing else on it.",
    u: ["ကျွန်တော် သူ့လက်ကောက်ဝတ်ကို ဖမ်းပြီး ဖြုတ်လိုက်တယ်။ သား အော်တယ်။",
        "သူ့လက်ပေါ်မှာ လက်ချောင်းရာတွေ ကျန်သွားတယ်။",
        "ကျွန်တော် အဲဒီအချိန်က အရုပ်နဲ့ ရုန်းရင်းဆန်ခတ်ဖြစ်လို့ နာသွားတာလို့ပဲ တွေးခဲ့တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Had My Phone", l: "သားအခန်း", w: ["ညီညီ"],
    g: "သားက အိပ်ရာခေါင်းရင်းကို နောက်ဆုတ်သွားတယ်။ သူ့လက်တစ်ဖက်မှာ ကျွန်တော့်ဖုန်း။ မျက်နှာပြင် လင်းနေတယ်။",
    p: "Nyi Nyi sitting back against the headboard with a lit phone screen held down behind his "
      + "back, out of sight of the room. ⚠️ THE SCREEN GLOW IS VISIBLE AT THE EDGE OF HIS BODY "
      + "but nothing on it is legible. He is alone in the room. Night, one warm bulb.",
    u: ["သားက အိပ်ရာခေါင်းရင်းကို နောက်ဆုတ်သွားတယ်။",
        "သူ့လက်တစ်ဖက်မှာ ကျွန်တော့်ဖုန်း ရှိနေတယ်။ ဖုန်းမျက်နှာပြင် လင်းနေတယ်။",
        "ကျွန်တော် သူ့ဆီ လက်လှမ်းလိုက်တယ်။ “ဖုန်းပေး” သူ ခေါင်းခါတယ်။",
        "“ဘယ်သူ့ကို ဆက်နေတာလဲ” “အန်တီ့ကို”"],
    c: [[1, "bigstinger"]] },

  { t: "Nothing's Wrong", l: "သားအခန်း", w: ["မင်းသန့်"],
    g: "“ဘယ်သူ့ကို ဆက်နေတာလဲ” “အန်တီ့ကို” ကျွန်တော် ဖုန်းထဲကို “ဘာမှမဖြစ်ဘူး” လို့ ပြောလိုက်တယ်။",
    p: "A man holding a phone to his ear with his eyes shut, speaking calmly into it, a frightened "
      + "boy behind him.",
    u: ["ကျွန်တော် ဖုန်းကို ဆွဲယူတယ်။ တစ်ဖက်က အမျိုးသမီးအသံ ကြားရတယ်။",
        "“ညီညီ? ဘာဖြစ်တာလဲ။ အဖေ ဘာလုပ်လို့လဲ?”",
        "ကျွန်တော် ဖုန်းထဲကို ပြောလိုက်တယ်။ “ဘာမှမဖြစ်ဘူး။ ကလေး အိပ်မက်ဆိုးမက်လို့”"],
    c: [[2, "bigstinger"]] },

  { t: "It Pressed Against My Chest", l: "သားအခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ကျွန်တော့်လက်ထဲက ဖိုးဝရုပ်ခေါင်း တောက်ခနဲ ကျွန်တော့်ရင်ဘတ်ကို လာဖိတယ်။",
    p: "The doll's head pressed hard against a man's sternum from inside his own grip, the cloth "
      + "body compressed between them.",
    u: ["ကျွန်တော့်လက်ထဲက ဖိုးဝရုပ်ခေါင်း— တောက်။",
        "ကျွန်တော့်ရင်ဘတ်ကို လာဖိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "It Landed on Its Feet", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ကျွန်တော် အရုပ်ကို လွှတ်ချလိုက်တယ်။ ခြေထောက်တွေက ကြမ်းပြင်ကို ထိတယ်။ လဲမသွားဘူး။",
    p: "The doll dropped from waist height standing squarely on both feet on the floorboards, not "
      + "fallen over.",
    u: ["ကျွန်တော် အရုပ်ကို လွှတ်ချလိုက်တယ်။",
        "သူ့ခြေထောက်တွေက ကြမ်းပြင်ကို ထိတယ်။ လဲမသွားဘူး။ တံခါးဝမှာ ရပ်နေတယ်။",
        "ကျွန်တော် တစ်လှမ်း နောက်ဆုတ်တယ်။ သားက ကျွန်တော့်နောက်မှာ။ အရုပ်က တည့်တည့် ကြည့်နေတယ်။",
        "ဖုန်းတစ်ဖက်မှာ အသံတွေ ရှိနေတုန်းပဲ။ “မင်းသန့်? ညီညီနဲ့ ပြောမယ်။ ဖုန်းပေးလိုက်”",
        "ကျွန်တော် ဖုန်းပိတ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Could Have Stopped", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "အဲဒီညမှာ ကျွန်တော် လိမ်နေတာကို ရပ်လိုက်လို့ရတယ်။ ဘာမှမပြောဘဲ ထိုင်နေရင် ရတယ်။",
    p: "A man standing very still in a living room with a boy behind him and the doll in front of "
      + "him, the whole frame balanced.",
    u: ["အဲဒီညမှာ ကျွန်တော် လိမ်နေတာကို ရပ်လိုက်လို့ရတယ်။ အရုပ်မရွေ့အောင်လည်း လုပ်လို့ရတယ်။",
        "ဘာမှမပြောဘဲ ထိုင်နေရင် ရတယ်။ အဲဒါကို ကျွန်တော် သိတယ်။"] },

  { t: "But the Questions Kept Coming", l: "ဧည့်ခန်း",
    g: "သားက စကားဆက်မေးနေတယ်။ အန်တီက ဖုန်းဆက်နေတယ်။ နောက်ဖေးအခန်းက သော့ကို ရှာနေကြတော့မယ်။",
    p: "A phone lighting up repeatedly face-down on a table while a locked back door is visible down "
      + "the corridor behind it.",
    u: ["ဒါပေမယ့် သားက စကားဆက်မေးနေတယ်။ အန်တီက ဖုန်းဆက်နေတယ်။",
        "နောက်ဖေးအခန်းက သော့ကို ရှာနေကြတော့မယ်။ ကျွန်တော် တိတ်နေလို့ မရဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Look at Me", l: "ဧည့်ခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "“ညီညီ၊ အဖေ့ကို ကြည့်” သားက ဖိုးဝရုပ်ကိုပဲ ကြည့်နေတယ်။",
    p: "A man crouched to a boy's height with both hands out, the boy's eyes going past him to the "
      + "doll on the floor.",
    u: ["“ညီညီ၊ အဖေ့ကို ကြည့်” သားက ဖိုးဝရုပ်ကို ကြည့်နေတယ်။",
        "“အဖေ့ကို ကြည့်လို့ ပြောနေတယ်!”"] },

  { t: "The Look She Gave Me", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "သား မော့ကြည့်တယ်။ သူ့မျက်နှာမှာ သက်ထား နောက်ဆုံးကြည့်ခဲ့တဲ့အကြည့်နဲ့ တူတဲ့အကြည့်။",
    p: "Close on a boy's face looking up — not frightened, not angry, something colder and more "
      + "final than either.",
    u: ["သား မော့ကြည့်တယ်။",
        "သူ့မျက်နှာမှာ အဲဒီအချိန် ကျွန်တော် မမြင်ချင်တဲ့ အကြည့်တစ်ခု ရှိတယ်။",
        "သက်ထား ကျွန်တော့်ကို နောက်ဆုံးကြည့်ခဲ့တဲ့ အကြည့်နဲ့ တူတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Knew Before He Told Me", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "“အဲဒီအရုပ် ပြောတာတွေကို သား ယုံလို့မရဘူး” “သူ မပြောခင်ကတည်းက သား သိတယ်”",
    p: "A boy gripping the hem of a blanket, speaking very quietly, entirely steady.",
    u: ["“အဲဒီအရုပ် ပြောတာတွေကို သား ယုံလို့မရဘူး”",
        "သားက တိုးတိုးပြောတယ်။ “သူ မပြောခင်ကတည်းက သား သိတယ်”",
        "ကျွန်တော် ပါးစပ်ပိတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Was Not Asleep That Night", l: "ဧည့်ခန်း", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "“အဲဒီည သား မအိပ်သေးဘူး” ဖိုးဝရုပ်က မလှုပ်ဘူး။ သူလည်း နားထောင်နေတယ်။",
    p: "A boy speaking while the doll stands on the floor between him and his father, all three "
      + "motionless.",
    u: ["သားက စောင်အစကို ဆုပ်ထားတယ်။ “အဲဒီည သား မအိပ်သေးဘူး”",
        "ဖိုးဝရုပ်က မလှုပ်ဘူး။ သူလည်း နားထောင်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Said I Was Asleep", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "“အမေက သားအိပ်နေပြီလို့ ပြောတာ။ အဖေ သားအခန်းထဲ မလာအောင်”",
    p: "Close on a boy's face, dry-eyed, saying the thing he has been carrying.",
    u: ["“အမေက သားအိပ်နေပြီလို့ ပြောတာ။ အဖေ သားအခန်းထဲ မလာအောင်”",
        "ကျွန်တော့်လက်ထဲက ဖုန်းကို ပိုတင်းတင်း ဆုပ်မိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Did Not Get Up Again", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "“အမေ ပြန်မထတော့ဘူး” ကျွန်တော် အသက်ရှူလိုက်တယ်။ လေက ရင်ဘတ်ထဲကို အပြည့်မဝင်ဘူး။",
    p: "A man with one hand braced on a table, chest visibly not filling, his face grey.",
    u: ["သားက ဆက်ပြောတယ်။ “အမေ ပြန်မထတော့ဘူး”",
        "ကျွန်တော် အသက်ရှူလိုက်တယ်။ လေက ရင်ဘတ်ထဲကို အပြည့်မဝင်ဘူး။",
        "“သား မြင်တာ မဟုတ်ဘူး။ အိပ်မက်မက်နေတာ”"],
    c: [[2, "bigstinger"]] },

  { t: "At My Feet", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ရှပ်။ ဖိုးဝရုပ်က ကျွန်တော့်ခြေဖျားနားကို ရောက်လာတယ်။",
    p: "The doll standing directly against a man's shoe, looking up, having crossed the room.",
    u: ["ရှပ်။ ဖိုးဝရုပ်က ကျွန်တော့်ခြေဖျားနားကို ရောက်လာတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "He Cried Without Sound", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "သူ ငိုနေတယ်။ ဒါပေမယ့် အသံမထွက်အောင် ထိန်းထားတယ်။ အဲဒီအကျင့်ကို ဘယ်အချိန်က ရလာတာလဲ မသိဘူး။",
    p: "⚠️ TIGHT ON NYI NYI'S FACE, AND HE IS LOOKING STRAIGHT INTO THE LENS. Tears run freely "
      + "down both cheeks, but his lips are pressed into a hard flat line and his jaw is clenched "
      + "so the muscle stands out at the hinge, his chin dimpled with the effort of keeping it "
      + "shut. ⚠️ HIS EYES STAY ON HIS FATHER'S THROUGHOUT — he does not look away and he does "
      + "not cover his face. A child who has been practising this.",
    u: ["သားက ကျွန်တော့်ကို ကြည့်နေတယ်။ သူ ငိုနေတယ်။",
        "ဒါပေမယ့် အသံမထွက်အောင် ထိန်းထားတယ်။",
        "အဲဒီအကျင့်ကို သူ ဘယ်အချိန်ကတည်းက ရလာတာလဲ ကျွန်တော် မသိဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Where Did You Put Her", l: "ဧည့်ခန်း", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "“အဖေ အမေ့ကို ဘယ်မှာထားတာလဲ” ကျွန်တော် အရုပ်ကို ကြည့်တယ်။ မျက်နှာက အရင်အတိုင်း ပြုံးနေတယ်။",
    p: "⚠️ THE DOLL'S FACE FILLS THE NEAR FOREGROUND IN SHARP FOCUS, wearing exactly its usual "
      + "small painted smile. ⚠️ WELL BEHIND IT AND SOFT AND OUT OF FOCUS, two figures in the "
      + "room: the father, his face shining with sweat, and Nyi Nyi beside him with his cheeks "
      + "wet and his mouth held shut. ⚠️ THE TWO PEOPLE ARE BACKGROUND — the doll is the "
      + "subject and the only thing sharp in the frame.",
    u: ["“အဖေ အမေ့ကို ဘယ်မှာထားတာလဲ”",
        "ကျွန်တော် အရုပ်ကို ကြည့်တယ်။ မျက်နှာက အရင်အတိုင်း။ ဘယ်လောက်ပဲ ဖြစ်နေပါစေ ပြုံးနေတယ်။",
        "သားငိုနေတယ်။ ကျွန်တော် ချွေးတွေ စီးနေတယ်။ သူကတော့ ပြုံးနေတုန်းပဲ။"],
    c: [[1, "bigstinger"]] },

  { t: "My Own Voice, Exactly", l: "ဧည့်ခန်း",
    g: "အရုပ်ခေါင်းထဲကနေ ကျွန်တော့်အသံ — “သား အိပ်နေပြီ။ အသံမထွက်နဲ့”",
    p: "⚠️ EXTREME CLOSE-UP ON THE DOLL'S PAINTED MOUTH, filling the frame. ⚠️ IT IS FLAT PAINT "
      + "ON PAPIER-MÂCHÉ AND ABSOLUTELY MOTIONLESS — the same small curve, the brush edge "
      + "visible, not parted and not shaped into any word. Sharp macro focus, nothing in frame "
      + "moving.",
    u: ["အရုပ်ခေါင်းထဲကနေ အသံတစ်ခု ထွက်လာတယ်။ ကျွန်တော့်အသံ။ အတိအကျ။",
        "“သား အိပ်နေပြီ။ အသံမထွက်နဲ့”"],
    c: [[1, "bigstinger"]] },

  { t: "I Had Said That Before", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ကျွန်တော် အေးခဲသွားတယ်။ အဲဒီစကားကို ပြောဖူးတယ်။ ဒီည မဟုတ်ဘူး။ အဲဒီညက။",
    p: "A man gone completely rigid, recognition arriving on his face.",
    u: ["ကျွန်တော် အေးခဲသွားတယ်။ အဲဒီစကားကို ကျွန်တော် ပြောဖူးတယ်။",
        "ဒီည မဟုတ်ဘူး။ အဲဒီညက။"],
    c: [[1, "bigstinger"]] },

  { t: "Don't Touch Him", l: "ဧည့်ခန်း",
    g: "နောက်ထပ် အသံထွက်လာတယ်။ သက်ထားရဲ့အသံ — “သားကိုတော့ မထိပါနဲ့…”",
    p: "The doll on the floor at a man's feet, seen from his eyeline, still smiling.",
    u: ["နောက်ထပ် အသံထွက်လာတယ်။ သက်ထားရဲ့အသံ။",
        "“သားကိုတော့ မထိပါနဲ့…”"],
    c: [[1, "bigstinger"]] },

  { t: "I Kicked It Into the Wall", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ကျွန်တော် ခြေထောက်နဲ့ ကန်လိုက်တယ်။ နံရံကို တိုက်မိတယ်။ ဆေးတစ်စ ကွာကျတယ်။ အပြုံးပေါ်က ဆေး မကွာဘူး။",
    p: "The doll struck against a wall, a flake of old paint fallen away from the side of its head — "
      + "and the painted smile entirely untouched.",
    u: ["ကျွန်တော် ခြေထောက်နဲ့ အရုပ်ကို ကန်လိုက်တယ်။ အရုပ်က နံရံကို တိုက်မိတယ်။",
        "ဆေးတစ်စ ကွာကျတယ်။ အပြုံးပေါ်က ဆေး မကွာဘူး။",
        "အတွင်းက အသံလည်း မရပ်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "That Night Was Still Happening", l: "ဧည့်ခန်း",
    g: "အရုပ်ခေါင်းထဲမှာ အဲဒီညက ဆက်ဖြစ်နေတယ်။",
    p: "The doll's head against the skirting board, the crack in its paint visible, the face turned "
      + "up and smiling.",
    u: ["အရုပ်ခေါင်းထဲမှာ အဲဒီညက ဆက်ဖြစ်နေတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Key to the Back Room", l: "အလုပ်ခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "ကျွန်တော် အလုပ်ခန်းသော့ကို ထုတ်တယ်။ သားက မြင်တော့ အိပ်ရာပေါ်ကနေ ဆင်းလာတယ်။",
    p: "A key held up in a man's hand, and a boy in the background having gone very still at the "
      + "sight of it.",
    u: ["ကျွန်တော် အရုပ်ကို ဖျက်ရမယ်။ ဒီအတွေးပဲ ကျန်တော့တယ်။",
        "အလုပ်ခန်းသော့ကို ထုတ်တယ်။",
        "သားက ကျွန်တော့်လက်ထဲက သော့ကို မြင်တော့ အိပ်ရာပေါ်ကနေ ဆင်းလာတယ်။",
        "“အဲဒီတံခါး ဖွင့်မလို့လား”"],
    c: [[3, "bigstinger"]] },

  { t: "A Few Inches", l: "အလုပ်ခန်း",
    g: "သော့ဖွင့်လိုက်တယ်။ တံခါးကို နည်းနည်းပဲ ဟတယ်။ အတွင်းက လေက မျက်နှာကို ထိတယ်။",
    p: "A door opened only four or five inches onto absolute black, a man's face turned away from "
      + "the gap, his shirt pulled over his nose. Nothing of the room is visible.",
    u: ["ကျွန်တော် သူ့ကို တစ်ဖက်တွန်းထားလိုက်တယ်။ နောက်ဖေးကို သွားတယ်။ သော့ဖွင့်လိုက်တယ်။",
        "တံခါးကို နည်းနည်းပဲ ဟတယ်။ အတွင်းက လေက မျက်နှာကို ထိတယ်။",
        "ကျွန်တော် နှာခေါင်းကို အင်္ကျီနဲ့ ကာလိုက်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Did Not Look In", l: "အလုပ်ခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "အရင်ဝင်ဝင်ချင်း လက်လှမ်းမီတဲ့ကိရိယာကို ယူတယ်။ သံတူ။ အတွင်းဘက်ကို မကြည့်ဘူး။",
    p: "A hand reaching just inside a door frame and taking a hammer off a hook, the man's head "
      + "turned fully away from the opening.",
    u: ["အရင်ဝင်ဝင်ချင်း လက်လှမ်းမီတဲ့ကိရိယာကို ယူတယ်။ သံတူ။",
        "အတွင်းဘက်ကို မကြည့်ဘူး။ တံခါး ပြန်ပိတ်တယ်။"] },

  { t: "He Smelled It Too", l: "အလုပ်ခန်း", w: ["ညီညီ"],
    g: "သားက နောက်မှာ ရပ်နေတယ်။ သူ့မျက်နှာက ပိုဖြူသွားတယ်။ သူလည်း အနံ့ရလိုက်ပုံပဲ။",
    p: "A boy standing alone in a corridor with his own hand pressed over his nose, his face "
    + "drained of colour.",
    u: ["သားက နောက်မှာ ရပ်နေတယ်။ သူ့မျက်နှာက ပိုဖြူသွားတယ်။ သူလည်း အနံ့ရလိုက်ပုံပဲ။ “အဖေ…”"],
    c: [[0, "bigstinger"]] },

  { t: "It Was Back on the Table", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ဖိုးဝရုပ်က စားပွဲပေါ် ရောက်နေပြီ။ သူ့ရှေ့မှာ ကျွန်တော် ခွာထုတ်ခဲ့တဲ့ စာရွက်။",
    p: "The doll standing on the living room table with one torn paper fragment laid flat on the "
      + "wood directly in front of its feet.",
    u: ["ကျွန်တော် သူ့ကို ရှောင်ပြီး ဧည့်ခန်းကို ပြန်လာတယ်။",
        "ဖိုးဝရုပ်က စားပွဲပေါ် ရောက်နေပြီ။ ဘယ်အချိန် ပြန်ရောက်လာတာလဲ မသိဘူး။",
        "သူ့ရှေ့မှာ စက္ကူစတစ်စ ရှိတယ်။ ကျွန်တော် ခွာထုတ်ခဲ့တဲ့စာရွက်။",
        "သားက မင်းပြောတာကို ယုံနေသေးတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "The First Blow", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "သားက “မလုပ်နဲ့!” လို့ အော်တယ်။ ကျွန်တော် မရပ်ဘူး။ ပထမတစ်ချက် ရိုက်လိုက်တယ်။",
    p: "A hammer coming down on the doll's head on a table, a crack opening across the papier-mâché "
      + "crown, the face still smiling.",
    u: ["ကျွန်တော် သံတူကို မြှောက်လိုက်တယ်။ သားက “မလုပ်နဲ့!” လို့ အော်တယ်။ ကျွန်တော် မရပ်ဘူး။",
        "ပထမတစ်ချက် ရိုက်လိုက်တယ်။ ခေါင်းပေါ်မှာ အက်ကြောင်းတစ်ခု ပေါ်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Breath Came Out", l: "ဧည့်ခန်း",
    g: "အတွင်းက လေတစ်ရှိုက် ထွက်လာတယ်။ လူတစ်ယောက် အသက်ရှူသလို။",
    p: "Fine paper dust puffing out of a crack in the doll's head in a single exhale, caught in "
      + "lamplight.",
    u: ["အတွင်းက လေတစ်ရှိုက် ထွက်လာတယ်။ လူတစ်ယောက် အသက်ရှူသလို။"],
    c: [[0, "bigstinger"]] },

  { t: "Where Is Mother", l: "ဧည့်ခန်း",
    g: "ခေါင်းအတွင်းက အသံပြန်ထွက်လာတယ် — “အမေ ဘယ်မှာလဲ” သားအသံလည်း မဟုတ်၊ သက်ထားအသံလည်း မဟုတ်။",
    p: "The cracked doll's head on the table, the hammer raised and stopped in mid-air above it.",
    u: ["ကျွန်တော် နောက်တစ်ချက် ရိုက်မလို့လုပ်တော့ ခေါင်းအတွင်းက အသံပြန်ထွက်လာတယ်။",
        "“အမေ ဘယ်မှာလဲ”",
        "သားအသံ မဟုတ်ဘူး။ သက်ထားအသံလည်း မဟုတ်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Behind Many Layers of Paper", l: "ဧည့်ခန်း",
    g: "အသံက နက်တယ်။ စက္ကူအလွှာတွေ အများကြီးရဲ့ အနောက်မှာ တစ်ယောက်ယောက် ရပ်နေသလို။",
    p: "Extreme close-up into the crack in the doll's head: layer after layer of pasted paper "
      + "receding into darkness.",
    u: ["အသံက နက်တယ်။ စက္ကူအလွှာတွေ အများကြီးရဲ့ အနောက်မှာ တစ်ယောက်ယောက် ရပ်နေသလို။",
        "ကျွန်တော် လက်ရပ်သွားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Neighbours at the Door", l: "ဧည့်ခန်း",
    g: "အိမ်ရှေ့မှာ တံခါးခေါက်သံ။ အိမ်နီးချင်း။ ကျွန်တော့်နာမည်ကို လှမ်းခေါ်နေတယ်။",
    p: "A locked front door with shadows of several people moving in the light gap beneath it and a "
      + "fist visible against the frosted panel.",
    u: ["အိမ်ရှေ့မှာ တံခါးခေါက်သံ ကြားလာတယ်။ အိမ်နီးချင်း။ ကျွန်တော့်နာမည်ကို လှမ်းခေါ်နေတယ်။",
        "သူတို့ ဘာလို့လာတာလဲ ကျွန်တော် သိတယ်။ သားရဲ့အန်တီက ဆက်သွယ်လိုက်တာ ဖြစ်မယ်။"],
    c: [[0, "knock"]] },

  { t: "It Asked Again", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်", "ညီညီ"],
    g: "အရုပ်က ထပ်မေးတယ် — “အမေ ဘယ်မှာလဲ” ကျွန်တော် သားကို ကြည့်တယ်။ သားက ကျွန်တော့်ကို ကြည့်နေတယ်။",
    p: "A three-way composition: the cracked doll on the table, the boy in the corridor, the father "
      + "between them holding a hammer.",
    u: ["အရုပ်က ထပ်မေးတယ်။ “အမေ ဘယ်မှာလဲ”",
        "ကျွန်တော် သားကို ကြည့်တယ်။ သားက ကျွန်တော့်ကို ကြည့်နေတယ်။",
        "တံခါးအပြင်မှာ လူတွေ ရှိတယ်။ ဖုန်းထဲမှာ ခေါ်ဆိုမှုတွေ ရှိတယ်။",
        "နောက်ဖေးအခန်းမှာ ကျွန်တော် သိမ်းထားခဲ့တာ ရှိတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "She's Dead", l: "ဧည့်ခန်း", w: ["မင်းသန့်", "ညီညီ"],
    g: "“သေပြီ” ကျွန်တော် ပြောလိုက်တယ်။ အသံက ကိုယ့်အသံနဲ့တောင် မတူဘူး။",
    p: "Close on a man's face as he says a word, the sound of it visibly costing him everything.",
    u: ["“သေပြီ” ကျွန်တော် ပြောလိုက်တယ်။ အသံက ကိုယ့်အသံနဲ့တောင် မတူဘူး။",
        "အရုပ်က မရွေ့ဘူး။",
        "ကျွန်တော် အသက်တစ်ချက် ရှူတယ်။ “သားအမေ သေပြီ”"],
    c: [[2, "bigstinger"]] },

  { t: "He Looked Seven Years Old", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "ညီညီရဲ့မျက်နှာ ပြိုကျသွားတယ်။ သိနေခဲ့ပေမယ့် ကြားဖို့ အဆင်သင့်မဖြစ်သေးဘူး။",
    p: "⚠️ TIGHT ON NYI NYI'S FACE AS THE CONTROL FINALLY GOES. The careful flat expression he has "
    + "held all film collapses into ordinary child's crying: mouth open and square, eyes screwed "
    + "shut, eyebrows pushed up in the middle, cheeks flushed and wet, shoulders drawn up around "
    + "his neck. ⚠️ HIS FACE AND SKIN ARE COMPLETELY WHOLE, SMOOTH AND UNMARKED — this is a "
    + "seven-year-old sobbing and nothing else is happening to him. He is turned towards his "
    + "father.",
    u: ["ညီညီရဲ့မျက်နှာ ပြိုကျသွားတယ်။",
        "သူ သိနေခဲ့တယ်ဆိုပေမယ့် အဲဒီစကားကို ကြားဖို့ အဆင်သင့်မဖြစ်သေးဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "I Should Have Stopped There", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ကျွန်တော် အဲဒီနေရာမှာ ရပ်ခဲ့သင့်တယ်။ ဒါပေမယ့် မရပ်နိုင်ဘူး။",
    p: "A man's mouth opening to keep talking when he should not, hand half raised.",
    u: ["ကျွန်တော် အဲဒီနေရာမှာ ရပ်ခဲ့သင့်တယ်။ ဒါပေမယ့် မရပ်နိုင်ဘူး။",
        "“မတော်တဆဖြစ်တာ။ အဖေက—”"] },

  { t: "It Lifted Its Head", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "တောက်။ အရုပ်ရဲ့ခေါင်းက နည်းနည်း မြောက်လာတယ်။",
    p: "The doll's cracked head tilting up a few degrees on the table, the smile unchanged.",
    u: ["တောက်။ အရုပ်ရဲ့ခေါင်းက နည်းနည်း မြောက်လာတယ်။",
        "ကျွန်တော် နောက်တစ်လှမ်း ဆုတ်လိုက်တယ်။ “အဖေ သတ်တာ မဟုတ်ဘူး”"],
    c: [[0, "bigstinger"]] },

  { t: "Chest Height", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ရှပ်။ စားပွဲအနားကို ရောက်လာတယ်။ တောက်။ မျက်နှာက ကျွန်တော့်ရင်ဘတ်အမြင့်မှာ ရောက်နေပြီ။",
    p: "The doll standing on the table at the very edge, its painted eyes now exactly level with a "
      + "standing man's chest, facing him.",
    u: ["ရှပ်။ စားပွဲအနားကို ရောက်လာတယ်။ “အဖေက သူ့ကို တားရုံပဲ—” တောက်။",
        "အရုပ်ရဲ့မျက်နှာက ကျွန်တော့်ရင်ဘတ်အမြင့်မှာ ရောက်နေပြီ။ စားပွဲပေါ်မှာ ရပ်နေတယ်။",
        "သူ့မျက်လုံးနဲ့ ကျွန်တော့်မျက်လုံး တည့်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Did It", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ကျွန်တော် မျက်ရည်ထွက်လာတယ်။ “ငါလုပ်ခဲ့တာ…” အရုပ် မရွေ့တော့ဘူး။ “ငါ့လက်နဲ့ လုပ်ခဲ့တာ…”",
    p: "A man weeping openly in front of the doll, hands at his sides, finally still.",
    u: ["ကျွန်တော် မျက်ရည်ထွက်လာတယ်။ “ငါလုပ်ခဲ့တာ…”",
        "အရုပ် မရွေ့တော့ဘူး။",
        "“ငါ့လက်နဲ့ လုပ်ခဲ့တာ…”",
        "အိမ်ထဲမှာ ညီညီ ငိုသံပဲ ကျန်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "It Did Not Step Back", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "အမှန်ပြောလိုက်လို့ ဖိုးဝ နောက်ပြန်မဆုတ်ဘူး။ ရောက်နေတဲ့နေရာမှာပဲ ရပ်နေတယ်။ အပြုံးလည်း မပျောက်ဘူး။",
    p: "The doll exactly where it was, not retreating, the smile identical.",
    u: ["အမှန်ပြောလိုက်လို့ ဖိုးဝ နောက်ပြန်မဆုတ်ဘူး။",
        "သူ ရောက်နေတဲ့နေရာမှာပဲ ရပ်နေတယ်။ အပြုံးလည်း မပျောက်ဘူး။",
        "ကျွန်တော် သူ့ကို ကြည့်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Went for the Door", l: "ဧည့်ခန်း", w: ["ညီညီ", "မင်းသန့်"],
    g: "သားက တံခါးဘက်ကို လျှောက်သွားတယ်။ ကျွန်တော် လှမ်းဖမ်းလိုက်တယ်။ “အန်တီ့ဆီ သွားမယ်”",
    p: "A man catching a boy's arm as the boy reaches for a front door handle.",
    u: ["အဲဒီအချိန် သားက တံခါးဘက်ကို လျှောက်သွားတယ်။ ကျွန်တော် လှမ်းဖမ်းလိုက်တယ်။",
        "“ဘယ်သွားမလို့လဲ” “အန်တီ့ဆီ သွားမယ်”",
        "“အဖေ့ကို ဒီမှာ ထားခဲ့မလို့လား”"] },

  { t: "He Pulled Free", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "သားက ကျွန်တော့်လက်ကို ဖြုတ်တယ်။ အရင်က သူ အဲဒီလို မလုပ်ဖူးဘူး။",
    p: "⚠️ ONE FRAME HOLDING BOTH HIS FACE AND THE HANDS — Nyi Nyi from his father's side, close "
    + "enough that his face fills the upper half and both their hands the lower. ⚠️ THE BOY IS "
    + "LIFTING HIS FATHER'S HAND AWAY FROM HIS OWN ARM, taking it by the fingers and setting it "
    + "aside himself. The movement is unhurried and decided; the man's hand is loose and "
    + "unresisting and neither of them is pulling. ⚠️ THE BOY IS LOOKING STEADILY UP AT HIS "
    + "FATHER'S FACE, not down at his own hands — calm rather than frightened. Only their hands "
    + "and the boy's face are in shot.",
    u: ["သားက ကျွန်တော့်လက်ကို ဖြုတ်တယ်။ အရင်က သူ အဲဒီလို မလုပ်ဖူးဘူး။",
        "ကျွန်တော် ပိုတင်းတင်း ဆုပ်မိတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "I'm Here!", l: "ဧည့်ခန်း", w: ["ညီညီ", "မင်းသန့်"],
    g: "အပြင်က တံခါးကို ထပ်ခေါက်တယ်။ ညီညီက “သား ဒီမှာ!” လို့ အော်တယ်။ ကျွန်တော် သူ့ပါးစပ်ကို ပိတ်လိုက်တယ်။",
    p: "⚠️ SEEN FROM BEHIND AND SLIGHTLY ABOVE THE FATHER, so his back and one shoulder fill most "
      + "of the frame and the boy is largely screened by him. The man has crouched down and "
      + "leaned in close with one arm reaching round. ⚠️ ONLY THE BOY'S EYES ARE VISIBLE past "
      + "the man's arm, wide open and turned towards the front door. ⚠️ THE FRONT DOOR IS "
      + "SHUDDERING IN ITS FRAME behind them, knocked hard from the corridor outside. Both of "
      + "them are whole and ordinary and the rest of the room is still.",
    u: ["အပြင်က တံခါးကို ထပ်ခေါက်တယ်။ ညီညီက အသံကျယ်ကျယ် ပြန်အော်တယ်။ “သား ဒီမှာ!”",
        "ကျွန်တော် သူ့ပါးစပ်ကို ပိတ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Over My Shoulder", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "အဲဒီအချိန် အရုပ်ရဲ့မျက်နှာကို သား မြင်နေရတယ်။ ကျွန်တော့်ပခုံးအပေါ်ကနေ။",
    p: "A boy's eyes looking past the man in front of him, fixed on something above and behind "
      + "the man's shoulder.",
    u: ["အဲဒီအချိန် အရုပ်ရဲ့မျက်နှာကို သား မြင်နေရတယ်။ ကျွန်တော့်ပခုံးအပေါ်ကနေ။",
        "“ဖိုးဝ!” သားက ကျွန်တော့်လက်အောက်ကနေ အော်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Paper Hand", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ကျွန်တော့်ပခုံးပေါ်မှာ တစ်ခုခု လာတင်တယ်။ ပေါ့ပေါ့လေး။ စက္ကူနဲ့လုပ်ထားတဲ့ လက်တစ်ဖက်။",
    p: "A small stuffed cloth doll's hand resting on a grown man's shoulder from behind, weightless "
      + "and impossible.",
    u: ["ကျွန်တော် သူ့ကို ချက်ချင်း လွှတ်လိုက်ရတယ်။",
        "ကျွန်တော့်ပခုံးပေါ်မှာ တစ်ခုခု လာတင်တယ်။ ပေါ့ပေါ့လေး။",
        "စက္ကူနဲ့လုပ်ထားတဲ့ လက်တစ်ဖက်။"],
    c: [[2, "bigstinger"]] },

  { t: "Beside My Ear", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "ဖိုးဝရုပ်ရဲ့ခေါင်းက ကျွန်တော့်နားဘေးမှာ။ ကော်နံ့။ စက္ကူဟောင်းနံ့။ အဲဒီအောက်မှာ အခြားအနံ့တစ်မျိုး။",
    p: "The doll's head level with a man's ear from behind, painted cheek almost touching his, both "
      + "in one frame.",
    u: ["ဖိုးဝရုပ်ရဲ့ခေါင်းက ကျွန်တော့်နားဘေးမှာ ရောက်နေတယ်။",
        "ကော်နံ့။ စက္ကူဟောင်းနံ့။ အဲဒီအောက်မှာ အခြားအနံ့တစ်မျိုး။",
        "နောက်ဖေးအခန်းတံခါးကို ဖွင့်လိုက်တုန်းက ရခဲ့တဲ့အနံ့။"],
    c: [[2, "bigstinger"]] },

  { t: "He Picked Up the Keys", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "ကျွန်တော့်လက်ထဲက သော့တွေ ကြမ်းပြင်ပေါ် ကျသွားတယ်။ သားက သော့ကို ကောက်တယ်။",
    p: "A bunch of keys hitting the floor and a boy's hand closing over them, a man frozen upright "
      + "behind him.",
    u: ["ကျွန်တော် မလှုပ်ရဲတော့ဘူး။ ညီညီက တံခါးနားမှာ ရပ်နေတယ်။",
        "ကျွန်တော့်လက်ထဲက သော့တွေ ကြမ်းပြင်ပေါ် ကျသွားတယ်။ သားက သော့ကို ကောက်တယ်။"] },

  { t: "That Wasn't Me", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "“သား၊ ခုနက အဖေပြောတာ မဟုတ်ဘူး” နားဘေးက စက္ကူသားက ဖြည်းဖြည်း ပွတ်လာတယ်။",
    p: "A man speaking desperately with the doll's cheek against his own, unable to turn his head.",
    u: ["ကျွန်တော် လှမ်းပြောလိုက်တယ်။ “သား၊ ခုနက အဖေပြောတာ မဟုတ်ဘူး”",
        "ကျွန်တော့်နားဘေးက စက္ကူသားက ဖြည်းဖြည်း ပွတ်လာတယ်။",
        "“အဲဒါ အရုပ်ပြောနေတာ။ အဖေ့အသံနဲ့—”"],
    c: [[2, "bigstinger"]] },

  { t: "It Came From Inside My Head", l: "ဧည့်ခန်း",
    g: "တောက်။ ဒီတစ်ခါ အသံက အရုပ်ခေါင်းထဲက မထွက်ဘူး။ ကျွန်တော့်ခေါင်းထဲက ထွက်တယ်။",
    p: "Extreme close-up of a man's own temple and ear, nothing else in frame.",
    u: ["တောက်။ ဒီတစ်ခါ အသံက အရုပ်ခေါင်းထဲက မထွက်ဘူး။ ကျွန်တော့်ခေါင်းထဲက ထွက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "My Mouth Would Not Open", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ပါးစပ်ကို ဖွင့်ဖို့ ကြိုးစားတယ်။ မရဘူး။ နှုတ်ခမ်းနှစ်ဖက်ကို တစ်ယောက်ယောက် ဆွဲဖိထားသလို။",
    p: "Close on a man's mouth, the lips pressed thin and immobile, the muscles around them "
      + "straining without effect.",
    u: ["ကျွန်တော် ပါးစပ်ကို ဖွင့်ဖို့ ကြိုးစားတယ်။ မရဘူး။",
        "နှုတ်ခမ်းနှစ်ဖက်ကို တစ်ယောက်ယောက် ဆွဲဖိထားသလို။"],
    c: [[1, "bigstinger"]] },

  { t: "Something Drying on My Face", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "မျက်နှာပေါ်မှာ တစ်ခုခု ခြောက်လာတယ်။ ပါးနှစ်ဖက် တင်းလာတယ်။ မျက်လုံးကို မှိတ်ချင်ပေမယ့် မမှိတ်နိုင်ဘူး။",
    p: "A man's face with the skin visibly tightening and taking on a faint matte sheen, the eyes "
      + "wide and unable to close.",
    u: ["ကျွန်တော့်မျက်နှာပေါ်မှာ တစ်ခုခု ခြောက်လာတယ်။ ပါးနှစ်ဖက် တင်းလာတယ်။",
        "မျက်လုံးတွေကို မှိတ်ချင်တယ်။ မမှိတ်နိုင်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "My Arm Would Not Rise", l: "ဧည့်ခန်း", w: ["ညီညီ", "မင်းသန့်"],
    g: "သားက တံခါးသော့ကို ဖွင့်နေတယ်။ ကျွန်တော် လက်လှမ်းမယ်လုပ်တယ်။ လက်က မမြောက်ဘူး။",
    p: "A boy turning a key in a front door while behind him a man stands rigid with one arm only "
      + "half lifted.",
    u: ["သားက တံခါးသော့ကို ဖွင့်နေတယ်။ ကျွန်တော် သူ့ဆီ လက်လှမ်းမယ်လုပ်တယ်။ လက်က မမြောက်ဘူး။",
        "လက်ချောင်းတွေက တစ်ချောင်းချင်း ရှိနေသေးတယ်လို့ ခံစားရတယ်။ ဒါပေမယ့် လှုပ်မရဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "The Door Opened", l: "ဧည့်ခန်း", w: ["ညီညီ"],
    g: "အိမ်ရှေ့တံခါး ပွင့်သွားတယ်။ အပြင်က အလင်းဝင်လာတယ်။ ညီညီက နောက်ဆုံးတစ်ခါ ပြန်ကြည့်တယ်။",
    p: "A front door swinging open onto daylight with a boy silhouetted in it, looking back over his "
      + "shoulder.",
    u: ["အိမ်ရှေ့တံခါး ပွင့်သွားတယ်။ အပြင်က အလင်းဝင်လာတယ်။",
        "ညီညီက ကျွန်တော့်ကို နောက်ဆုံးတစ်ခါ ပြန်ကြည့်တယ်။",
        "သူ့မျက်နှာပေါ်က အကြောက်ကို ကျွန်တော် မြင်ရတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "From Somewhere Deep Inside", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "“သား…” ကျွန်တော် ခေါ်တယ်။ အသံက ဝေးနေတယ်။ ကိုယ့်ခေါင်းအတွင်း အနက်ကြီးတစ်နေရာကနေ အော်နေရသလို။",
    p: "Close on a man's motionless face, mouth shut, eyes open — the sound of a call happening "
      + "somewhere it cannot escape from.",
    u: ["“သား…” ကျွန်တော် ခေါ်တယ်။",
        "အသံက ဝေးနေတယ်။ ကိုယ့်ခေါင်းအတွင်း အနက်ကြီးတစ်နေရာကနေ အော်နေရသလို။"],
    c: [[1, "bigstinger"]] },

  { t: "Through Two Small Holes", l: "ဧည့်ခန်း",
    g: "မြင်ကွင်းက အရမ်းကျဉ်းလာတယ်။ မျက်လုံးနှစ်လုံးစာ အပေါက်ငယ်လေးတွေကနေ ကြည့်နေရသလို။",
    p: "A vignetted point of view narrowing to two small ovals, the lit doorway and the retreating "
      + "boy visible through them.",
    u: ["သားက နောက်ဆုတ်သွားတယ်။ အိမ်နီးချင်းအမျိုးသမီးက သူ့ကို ရင်ခွင်ထဲ ဆွဲခေါ်လိုက်တယ်။",
        "ကျွန်တော် သူတို့ကို မြင်နေရတယ်။ ဒါပေမယ့် မြင်ကွင်းက အရမ်းကျဉ်းလာတယ်။",
        "မျက်လုံးနှစ်လုံးစာ အပေါက်ငယ်လေးတွေကနေ ကြည့်နေရသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "Pulled Up at the Corners", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "နှုတ်ခမ်းတွေကို ပိတ်ထားတာတင် မဟုတ်ဘူး။ နှုတ်ခမ်းထောင့်နှစ်ဖက်ကို အပေါ်ဆွဲတင်ထားတာ။",
    p: "A man's mouth with both corners drawn firmly upward into a fixed small smile that his eyes "
      + "have no part in.",
    u: ["ကျွန်တော့်မျက်နှာပေါ်က တင်းနေတဲ့အရာကို နောက်ဆုံးမှာ နားလည်လိုက်တယ်။",
        "နှုတ်ခမ်းတွေကို ပိတ်ထားတာတင် မဟုတ်ဘူး။",
        "နှုတ်ခမ်းထောင့်နှစ်ဖက်ကို အပေါ်ဆွဲတင်ထားတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "Outside, I Was Smiling", l: "ဧည့်ခန်း", w: ["မင်းသန့်"],
    g: "ကျွန်တော် ငိုချင်နေတယ်။ ဒါပေမယ့် အပြင်က ကျွန်တော့်မျက်နှာက ပြုံးနေတယ်။",
    p: "A man's whole face in flat light wearing a small fixed smile, tears running down it, "
      + "absolutely still.",
    u: ["ကျွန်တော် ငိုချင်နေတယ်။",
        "ဒါပေမယ့် အပြင်က ကျွန်တော့်မျက်နှာက ပြုံးနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "They Did Not Find Him", l: "ဧည့်ခန်း",
    g: "အိမ်နီးချင်းတွေ ဝင်လာတဲ့အချိန် ကိုမင်းသန့်ကို မတွေ့ကြဘူး။ ကြမ်းပြင်မှာ သူ့ဖုန်း၊ သော့တွေ ရှိတယ်။",
    p: "An empty living room with a phone and a set of keys lying on the floorboards, several people "
      + "standing in the doorway not entering.",
    u: ["အိမ်နီးချင်းတွေ ဝင်လာတဲ့အချိန် ကိုမင်းသန့်ကို မတွေ့ကြဘူး။",
        "ဧည့်ခန်းကြမ်းပြင်မှာ သူ့ဖုန်း ရှိတယ်။ သော့တွေလည်း ရှိတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "A Crack in Its Head", l: "ဧည့်ခန်း", w: ["ဖိုးဝရုပ်"],
    g: "စားပွဲပေါ်မှာ စက္ကူအစတွေ၊ သံတူ၊ ကွဲနေတဲ့ဆေးစတွေ။ အဲဒီဘေးမှာ ဖိုးဝရုပ် ရပ်နေတယ်။",
    p: "A table with torn paper, a hammer and flakes of paint on it — and standing among them the "
      + "doll, upright, one crack across its crown, smiling.",
    u: ["စားပွဲပေါ်မှာ စက္ကူအစတွေ၊ သံတူနဲ့ ကွဲနေတဲ့ဆေးစတွေ ရှိတယ်။",
        "အဲဒီဘေးမှာ ဖိုးဝရုပ် ရပ်နေတယ်။",
        "ဦးခေါင်းပေါ်မှာ အက်ကြောင်းတစ်ခု။ မျက်နှာကတော့ ပြုံးနေတုန်းပဲ။"],
    c: [[2, "bigstinger"]] },

  { t: "They Opened the Back Room", l: "အလုပ်ခန်း",
    g: "အဲဒီညမှာ ရောက်လာတဲ့လူတွေက နောက်ဖေးအလုပ်ခန်းကို ဖွင့်ခဲ့ကြတယ်။ မသက်ထား ဘယ်ကိုမှ မထွက်သွားခဲ့ဘူး။",
    p: "A corridor at night with several people standing back from an opened door, their faces "
      + "turned away, torchlight pointing into a room we do not see.",
    u: ["ညီညီကို အိမ်အပြင် ခေါ်ထုတ်ထားလိုက်ကြတယ်။ သူက အိမ်နီးချင်းအမျိုးသမီးရဲ့ လက်ကို ဆုပ်ထားတယ်။",
        "အဲဒီညမှာ ရောက်လာတဲ့လူတွေက နောက်ဖေးအလုပ်ခန်းကို ဖွင့်ခဲ့ကြတယ်။",
        "မသက်ထား ဘယ်ကိုမှ ထွက်သွားခဲ့တာ မဟုတ်ကြောင်း အဲဒီအခန်းထဲမှာ သိခဲ့ရတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Father Held My Arm", l: "အန်တီအိမ်", w: ["ညီညီ", "အန်တီ"],
    g: "အန်တီက သူ့လက်ကောက်ဝတ်က အနီရာတွေကို ဆေးလိမ်းပေးတယ်။ “အရုပ်လုပ်တာလား သား” “အဖေ ကိုင်တာ”",
    p: "A woman gently rubbing balm into four faint pink fingertip patches on a boy's inner wrist "
      + "at a kitchen table in morning light, her hand stopping. Calm, domestic, unhurried.",
    u: ["နောက်နေ့မနက်မှာ ညီညီက သူ့အန်တီအိမ်မှာ ရှိနေတယ်။",
        "အန်တီက သူ့လက်ကောက်ဝတ်က အနီရာတွေကို ဆေးလိမ်းပေးတယ်။",
        "“အရုပ်လုပ်တာလား သား” ညီညီက ခေါင်းခါတယ်။ “အဖေ ကိုင်တာ”"],
    c: [[2, "bigstinger"]] },

  { t: "Pho Wa Came and Sat With Me", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "“အဖေက သားကို အခန်းထဲ ပိတ်ထားတာ။ ဖိုးဝက လာထိုင်ပေးတာ”",
    p: "A boy at a table speaking plainly, a woman's face across from him going still.",
    u: ["အန်တီ လက်ရပ်သွားတယ်။ ကလေးက ဆက်ပြောတယ်။",
        "“အဖေက သားကို အခန်းထဲ ပိတ်ထားတာ။ ဖိုးဝက လာထိုင်ပေးတာ”"],
    c: [[1, "bigstinger"]] },

  { t: "Not Locked In With It", l: "သားအခန်း",
    g: "အဖေပြောခဲ့တဲ့ အရုပ်နဲ့ တစ်ယောက်တည်းပိတ်မိနေတဲ့ညဟာ — ညီညီ့အတွက် အရုပ်လာစောင့်ပေးတဲ့ည။",
    p: "A memory image of the locked bedroom at night: a boy sitting on his bed with the doll seated "
      + "beside him, both facing the closed door.",
    u: ["အဖေပြောခဲ့တဲ့ အရုပ်နဲ့ တစ်ယောက်တည်းပိတ်မိနေတဲ့ညဟာ—",
        "ညီညီ့အတွက် အဖေ့ဆီကနေ အရုပ်လာစောင့်ပေးတဲ့ည ဖြစ်နေခဲ့တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "My Mother and I Made It", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "“အရုပ်ကို ဘာလို့ အရမ်းကြိုက်တာလဲ သား” ညီညီက လက်ချောင်းသုံးချောင်းကို မြှောက်ပြတယ်။ “အမေနဲ့ သား လုပ်ထားတာ”",
    p: "A boy holding up three fingers, and a woman looking at them without understanding yet.",
    u: ["“အရုပ်ကို ဘာလို့ အရမ်းကြိုက်တာလဲ သား”",
        "ညီညီက သူ့လက်ချောင်းသုံးချောင်းကို မြှောက်ပြတယ်။ “အမေနဲ့ သား လုပ်ထားတာ”"],
    c: [[1, "bigstinger"]] },

  { t: "Three Fingerprints", l: null, w: ["ဖိုးဝရုပ်"],
    g: "ဖိုးဝရုပ်ရဲ့ နားရွက်နောက်က အပြာရောင်ဆေးစက်သုံးစက်က ညီညီ့လက်ချောင်းရာတွေ။",
    p: "Extreme close-up behind the doll's ear: the three blue paint smudges, now unmistakably the "
      + "prints of three small fingertips.",
    u: ["ဖိုးဝရုပ်ရဲ့ နားရွက်နောက်က အပြာရောင်ဆေးစက်သုံးစက်က ညီညီ့လက်ချောင်းရာတွေ။",
        "ဆိုင်မှာ မြင်ကတည်းက သူ မှတ်မိခဲ့တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "He Knew Something Was Wrong", l: "ဆိုင်", w: ["ညီညီ"],
    g: "အဖေက အမေ့ပစ္စည်းတွေ ပျောက်သွားပြီလို့ ပြောထားခဲ့တာ။ ဒါပေမယ့် အမေနဲ့သား လုပ်ထားတဲ့အရုပ်က ဆိုင်ထဲမှာ ရှိနေတယ်။",
    p: "A memory of the shop: a small boy holding up the doll, his face not delighted but carefully "
      + "working something out.",
    u: ["အဖေက အမေ့ပစ္စည်းတွေ ပျောက်သွားပြီလို့ ပြောထားခဲ့တာ။",
        "ဒါပေမယ့် အမေနဲ့သား လုပ်ထားတဲ့အရုပ်က ဆိုင်ထဲမှာ ရှိနေတယ်။",
        "ကလေးက အဲဒီကတည်းက တစ်ခုခု မမှန်မှန်း သိနေခဲ့တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "It Never Chased Him", l: "သားအခန်း", w: ["ဖိုးဝရုပ်", "ညီညီ"],
    g: "ညီညီ ပြောပြတဲ့ ဖိုးဝရုပ်က သူ့ကို လိုက်ဖမ်းခဲ့တာ မရှိဘူး။ သူ့ဘေးမှာ လာထိုင်တယ်။",
    p: "The doll seated on a shelf beside a boy's bed at night, facing the bedroom door rather than "
      + "the sleeping child.",
    u: ["ညီညီ ပြောပြတဲ့ ဖိုးဝရုပ်က သူ့ကို လိုက်ဖမ်းခဲ့တာ မရှိဘူး။",
        "သူ့ဘေးမှာ လာထိုင်တယ်။ စင်ပေါ်ကနေ ကြည့်နေတယ်။ အဖေ ဝင်လာရင် ခေါင်းလှည့်တယ်။"] },

  { t: "It Was Always Between Us", l: "သားအခန်း", w: ["ဖိုးဝရုပ်", "မင်းသန့်"],
    g: "အဖေက သားအနားလာတိုင်း ဖိုးဝရုပ် ပိုနီးလာတယ်ဆိုတာ မှန်တယ်။ ဒါပေမယ့် အရုပ်နဲ့သူ့ကြားမှာ အဖေ အမြဲရှိနေတယ်။",
    p: "A composition making the geometry explicit: the doll, then the father, then the boy — the "
      + "doll's attention entirely on the man, never past him.",
    u: ["အဖေက သားအနားလာတိုင်း ဖိုးဝရုပ် ပိုနီးလာတယ်ဆိုတာလည်း မှန်တယ်။",
        "ဒါပေမယ့် ညီညီ့အမြင်မှာတော့ အရုပ်နဲ့သူ့ကြားမှာ အဖေ အမြဲရှိနေတယ်။",
        "အဖေ့ကိုကျော်ပြီး ဖိုးဝက သူ့ကို တစ်ခါမှ လှမ်းမကြည့်ခဲ့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "He Doesn't Make Me Pretend to Sleep", l: "အန်တီအိမ်", w: ["ညီညီ", "အန်တီ"],
    g: "“သူ စကားပြောတာကို သား ဘာလို့ မကြောက်တာလဲ” “ပထမတော့ ကြောက်တယ်” “နောက်တော့?” “သူက သားကို မအိပ်ခိုင်းဘူး”",
    p: "A boy and a woman sitting together, the boy explaining something carefully, the woman not "
      + "following yet.",
    u: ["“သူ စကားပြောတာကို သား ဘာလို့ မကြောက်တာလဲ” အန်တီက မေးတယ်။",
        "ညီညီက ခဏစဉ်းစားတယ်။ “ပထမတော့ ကြောက်တယ်”",
        "“နောက်တော့?” သူက အန်တီ့ကို မော့ကြည့်တယ်။ “သူက သားကို မအိပ်ခိုင်းဘူး”"],
    c: [[2, "bigstinger"]] },

  { t: "Pretend to Be Asleep", l: null, w: ["သက်ထား", "ညီညီ"],
    g: "“အဖေ ဒေါသထွက်နေတဲ့ညဆို အမေက သားကို မျက်လုံးမှိတ်ပြီး အိပ်ချင်ယောင်ဆောင်ခိုင်းတယ်”",
    p: "A memory image: a woman crouched at a child's bedside at night with a finger to her lips, "
      + "light from a doorway behind her.",
    u: ["အန်တီ နားမလည်ဘူး။ ညီညီက ရှင်းပြတယ်။",
        "“အဖေ ဒေါသထွက်နေတဲ့ညဆို အမေက သားကို မျက်လုံးမှိတ်ပြီး အိပ်ချင်ယောင်ဆောင်ခိုင်းတယ်။ ဖိုးဝကတော့ မျက်လုံးဖွင့်ထားလို့ရတယ်တဲ့”"],
    c: [[1, "bigstinger"]] },

  { t: "He'll Watch Father For Me", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "ကလေးက သူ့လက်ကို ငုံ့ကြည့်တယ်။ “အဖေ့ကို သူ ကြည့်ထားပေးမယ်တဲ့”",
    p: "⚠️ A CLOSE THREE-QUARTER SHOT OF NYI NYI ALONE, with his face and both his hands in the "
    + "same frame. He sits in his aunt's front room in flat daylight with his head bent, turning "
    + "his own left wrist slightly towards himself and looking down at it, and he is saying "
    + "something quietly — his mouth moving, his eyes down. ⚠️ HIS FACE IS CALM AND MATTER-OF-"
    + "FACT rather than distressed, the way a child reports something he has decided is settled. "
    + "Nobody else is in shot.",
    u: ["ကလေးက သူ့လက်ကို ငုံ့ကြည့်တယ်။",
        "“အဖေ့ကို သူ ကြည့်ထားပေးမယ်တဲ့”"],
    c: [[1, "bigstinger"]] },

  { t: "He Asked For It Back", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "ညီညီက ဖိုးဝရုပ်ကို ပြန်ယူချင်တယ်လို့ ပြောတယ်။ သူ့အမေနဲ့ လုပ်ထားတဲ့ နောက်ဆုံးပစ္စည်းမို့လို့။",
    p: "A boy sitting on the edge of a guest bed, asking for something, a woman in the doorway "
      + "hesitating.",
    u: ["ညီညီက ဖိုးဝရုပ်ကို ပြန်ယူချင်တယ်လို့ ပြောတယ်။ သူ့အမေနဲ့ လုပ်ထားတဲ့ နောက်ဆုံးပစ္စည်းမို့လို့။",
        "အန်တီက ချက်ချင်း မယူပေးဘူး။",
        "ဒါပေမယ့် ကလေးက တခြားဘာမှ မတောင်းဘဲ အဲဒီအရုပ်တစ်ရုပ်ကိုပဲ ထပ်ခါထပ်ခါ မေးနေတယ်။"] },

  { t: "On the Shelf Again", l: "အန်တီအိမ်", w: ["ဖိုးဝရုပ်"],
    g: "အရုပ်ကို ညီညီ့အိပ်ရာဘေးက စင်ပေါ် တင်ထားပေးတယ်။ အက်ကြောင်းကို ပြင်မပေးသေးဘူး။",
    p: "The doll standing on a shelf in a bright clean bedroom, the crack across its head still "
      + "unrepaired, the same smile.",
    u: ["နောက်ဆုံးတော့ အိမ်ကလူတစ်ယောက် သွားယူလာပေးတယ်။",
        "အရုပ်ကို ညီညီ့အိပ်ရာဘေးက စင်ပေါ် တင်ထားပေးတယ်။ အက်ကြောင်းကို ပြင်မပေးသေးဘူး။"] },

  { t: "Just an Ordinary Doll", l: "အန်တီအိမ်", w: ["အန်တီ", "ဖိုးဝရုပ်"],
    g: "အန်တီက အရုပ်ကို ခဏကြည့်နေတယ်။ “သာမန်အရုပ်လေးပါပဲ” လို့ သူ့ဘာသာ ပြောမိတယ်။ သူမ တကယ်အဲဒီလို ထင်နေတာ။",
    p: "A woman glancing at the doll on the shelf as she leaves a room, unbothered, genuinely seeing "
      + "nothing.",
    u: ["အန်တီက အရုပ်ကို ခဏကြည့်နေတယ်။ “သာမန်အရုပ်လေးပါပဲ” လို့ သူ့ဘာသာ ပြောမိတယ်။",
        "ဖိုးဝက မလှုပ်ဘူး။ သူမ တကယ်အဲဒီလို ထင်နေတာ။"],
    c: [[1, "stinger"]] },

  { t: "Son", l: "အန်တီအိမ်", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "အန်တီ ထွက်သွားတော့ ဖိုးဝခေါင်းထဲက အသံထွက်လာတယ်။ တိုးတိုး။ အရမ်းနက်တဲ့နေရာကနေ။ “သား…”",
    p: "A boy sitting on a bed looking up at the doll on the shelf, the room otherwise empty and "
      + "bright.",
    u: ["ညီညီက အိပ်ရာပေါ်မှာ ထိုင်ပြီး အရုပ်ကို ကြည့်နေတယ်။",
        "အန်တီ အခန်းထဲက ထွက်သွားတော့ ဖိုးဝခေါင်းထဲက အသံထွက်လာတယ်။",
        "တိုးတိုး။ အရမ်းနက်တဲ့နေရာကနေ။ “သား…”"],
    c: [[2, "bigstinger"]] },

  { t: "Nyi Nyi, It's Father", l: "အန်တီအိမ်", w: ["ဖိုးဝရုပ်"],
    g: "“ညီညီ… အဖေပါ…” ကလေးက အရုပ်ကို စိုက်ကြည့်နေတယ်။ မျက်နှာပေါ်က အပြုံးက မပြောင်းဘူး။",
    p: "The doll's painted face on the shelf in bright daylight, the crack across its head, the "
      + "small fixed smile exactly as it has always been.",
    u: ["ညီညီရဲ့ လက်တွေ စောင်ကို ဆုပ်မိတယ်။ “ညီညီ… အဖေပါ…”",
        "ကလေးက အရုပ်ကို စိုက်ကြည့်နေတယ်။ မျက်နှာပေါ်က အပြုံးက မပြောင်းဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "He Knew That Voice", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "“သား၊ အဖေ့ကို ဒီထဲက ထုတ်ပေးပါ…” အဲဒီအသံကို ညီညီ သိတယ်။",
    p: "⚠️ TIGHT ON NYI NYI'S FACE, HIS EYES FIXED STEADILY OFF TO ONE SIDE on something outside "
    + "the frame. ⚠️ HE HAS GONE COMPLETELY STILL — his eyes do not move, his mouth stays closed, "
    + "nothing widens and nothing flinches. ⚠️ THIS IS A CHILD HOLDING AN EXPRESSION IN PLACE, "
    + "not an empty face: the jaw is set and the stillness is deliberate and costing him "
    + "something. His hands are gripping the edge of a blanket at the bottom of frame. Flat "
    + "daylight from a window.",
    u: ["“သား၊ အဖေ့ကို ဒီထဲက ထုတ်ပေးပါ…”",
        "အဲဒီအသံကို ညီညီ သိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Voice That Taught Him to Ride", l: null, w: ["မင်းသန့်", "ညီညီ"],
    g: "စက်ဘီးစီးသင်ပေးတုန်းက ခေါ်ခဲ့တဲ့အသံ။ မုန့်ဝယ်ပေးပြီး ကြိုက်လားလို့ မေးခဲ့တဲ့အသံ။",
    p: "A warm daylight memory: a man running behind a boy on a bicycle with one hand on the saddle, "
      + "both laughing.",
    u: ["အဖေက သူ့ကို စက်ဘီးစီးသင်ပေးတုန်းက ခေါ်ခဲ့တဲ့အသံ။",
        "မုန့်ဝယ်ပေးပြီး ကြိုက်လားလို့ မေးခဲ့တဲ့အသံ။"] },

  { t: "The Same Voice That Lied", l: null, w: ["မင်းသန့်"],
    g: "အမေ မန္တလေးမှာ အလုပ်လုပ်နေတယ်လို့ ပြောခဲ့တဲ့အသံ။",
    p: "The same man in the same warm light, caught mid-sentence saying something ordinary, ⚠️ HIS "
      + "FACE COMPLETELY RELAXED AND PLEASANT. A single still instant of an easy, unremarkable "
      + "expression. Warm daylight memory.",
    u: ["အမေ မန္တလေးမှာ အလုပ်လုပ်နေတယ်လို့ ပြောခဲ့တဲ့အသံ။",
        "“အဖေ မလုပ်တော့ပါဘူး…”"],
    c: [[1, "bigstinger"]] },

  { t: "He Is Really Speaking", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "ညီညီက နောက်ကို ဖြည်းဖြည်း ဆုတ်သွားတယ်။ “အဖေ တကယ်ပြောနေတာ…”",
    p: "Nyi Nyi moving backwards across the bed towards the headboard on his own, his eyes fixed "
      + "the whole time on the doll on the shelf across the room, ⚠️ HIS MOUTH MOVING ON A FEW "
      + "QUIET WORDS. He is the only person in the room and nothing is moving except him. Warm "
      + "daylight.",
    u: ["ညီညီက နောက်ကို ဖြည်းဖြည်း ဆုတ်သွားတယ်။",
        "“အဖေ တကယ်ပြောနေတာ…”"],
    c: [[1, "bigstinger"]] },

  { t: "The Aunt Came Back In", l: "အန်တီအိမ်", w: ["အန်တီ", "ညီညီ"],
    g: "အန်တီ ပြန်ဝင်လာတော့ ညီညီက အိပ်ရာခေါင်းရင်းမှာ ကပ်ထိုင်နေတယ်။ မျက်နှာမှာ မျက်ရည်တွေ။",
    p: "⚠️ THE AUNT HAS COME BACK IN AND IS ALREADY CROSSING THE ROOM TOWARDS HIM, both hands "
      + "open in front of her and her face full of concern — a woman going straight to a "
      + "frightened child in her own home. ⚠️ NYI NYI IS SITTING UP AT THE FAR END OF THE BED "
      + "with his back against the headboard and his knees drawn up, tears on his face, looking "
      + "towards her. Warm ordinary daylight, an ordinary spare room, the door standing open "
      + "behind her.",
    u: ["အန်တီ ပြန်ဝင်လာတော့ ညီညီက အိပ်ရာခေါင်းရင်းမှာ ကပ်ထိုင်နေတယ်။ မျက်နှာမှာ မျက်ရည်တွေ။",
        "သူမက ချက်ချင်း လာထိုင်ပြီး ကလေးကို ဖက်လိုက်တယ်။ “ဘာဖြစ်လို့လဲ သား”"] },

  { t: "Are You Afraid of the Doll", l: "အန်တီအိမ်", w: ["အန်တီ", "ညီညီ"],
    g: "ညီညီက ခေါင်းခါတယ်။ “အရုပ်ကို ကြောက်နေတာလား” သူက ဖိုးဝရုပ်ကို ကြည့်တယ်။",
    p: "A woman holding a boy on a bed, and the boy's eyes going past her shoulder to the doll on "
      + "the shelf.",
    u: ["ညီညီက ခေါင်းခါတယ်။",
        "“အရုပ်ကို ကြောက်နေတာလား” သူက ဖိုးဝရုပ်ကို ကြည့်တယ်။"] },

  { t: "I'll Put It Outside", l: "အန်တီအိမ်", w: ["အန်တီ", "ဖိုးဝရုပ်"],
    g: "အန်တီက စင်ပေါ်ကအရုပ်ကို ယူတော့မလို့ လက်လှမ်းလိုက်တယ်။ “ကြောက်ရင် အန်တီ အပြင်ထားပေးမယ်”",
    p: "A woman's hand reaching toward the doll on the shelf, fingers open, about to close on it.",
    u: ["အန်တီက စင်ပေါ်ကအရုပ်ကို ယူတော့မလို့ လက်လှမ်းလိုက်တယ်။",
        "“ကြောက်ရင် အန်တီ အပြင်ထားပေးမယ်”"],
    c: [[0, "stinger"]] },

  { t: "He Caught Her Hand", l: "အန်တီအိမ်", w: ["ညီညီ", "အန်တီ"],
    g: "ညီညီက သူမလက်ကို အမြန်ဖမ်းလိုက်တယ်။",
    p: "A small hand closing fast around a woman's wrist, stopping it short of the shelf.",
    u: ["ညီညီက သူမလက်ကို အမြန်ဖမ်းလိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "He Did Not Know What to Do", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "အမေနဲ့ သူလုပ်ထားတဲ့အရုပ်။ အခု အထဲမှာ အဖေ့အသံလည်း ရှိနေတယ်။ သူ ဘာလုပ်ရမှန်း မသိဘူး။",
    p: "⚠️ CLOSE ON NYI NYI'S FACE, WITH HIS OWN HAND STILL IN THE BOTTOM OF FRAME closed around "
    + "his aunt's wrist. ⚠️ HIS EYES ARE PULLED TOWARDS TWO DIFFERENT PLACES AT ONCE — down "
    + "towards her hand and off towards the shelf — and his eyebrows are drawn hard together. "
    + "⚠️ HIS MOUTH IS SLIGHTLY OPEN, as though a sentence started and stopped. A child who wants "
    + "two things that cannot both happen.",
    u: ["အမေနဲ့ သူလုပ်ထားတဲ့အရုပ်။",
        "အခု အထဲမှာ အဖေ့အသံလည်း ရှိနေတယ်။",
        "သူ ဘာလုပ်ရမှန်း မသိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Really Not Afraid", l: "အန်တီအိမ်", w: ["အန်တီ", "ညီညီ"],
    g: "အန်တီက ထပ်မေးတယ် — “တကယ် မကြောက်ဘူးလား သား” ညီညီရဲ့ လက်တွေ တုန်နေတယ်။",
    p: "⚠️ ONE FRAME HOLDING BOTH HIS HANDS AND HIS AUNT. Nyi Nyi's two hands lying in his lap in "
    + "the near foreground, sharp and close, ⚠️ THE FINGERS SPREAD A LITTLE AND HELD RIGID, "
    + "caught in one frozen instant. Behind him and softer, his aunt sits half turned towards "
    + "him, leaning in slightly, her face patient and open. Warm daylight in her front room.",
    u: ["အန်တီက ထပ်မေးတယ်။ “တကယ် မကြောက်ဘူးလား သား”",
        "ညီညီရဲ့ လက်တွေ တုန်နေတယ်။"],
    c: [[1, "heartbeat"]] },

  { t: "No", l: "အန်တီအိမ်", w: ["ညီညီ"],
    g: "ဒါပေမယ့် သူ ခေါင်းခါလိုက်တယ်။ “မကြောက်ဘူး”",
    p: "⚠️ CLOSE ON NYI NYI, HIS HEAD TURNED SLIGHTLY OFF CENTRE AND CAUGHT IN ONE STILL INSTANT "
    + "at the end of a single small shake. His chin is level, his mouth closed in a flat line and "
    + "his jaw set — ⚠️ BUT HIS EYES ARE STILL FRIGHTENED AND DO NOT MATCH THE REST OF HIS FACE. "
    + "He is looking towards his aunt just off frame. Warm daylight, a plain wall behind him.",
    u: ["ဒါပေမယ့် သူ ခေါင်းခါလိုက်တယ်။",
        "“မကြောက်ဘူး”"],
    c: [[1, "bigstinger"]] },

  { t: "One Click in the Room", l: "အန်တီအိမ်",
    g: "အခန်းထဲမှာ တောက်ဆိုတဲ့ အသံတစ်ချက် ထွက်လာတယ်။ အန်တီက စင်ဘက်ကို လှည့်ကြည့်တယ်။",
    p: "A woman's head turning sharply toward a shelf, a boy frozen beside her.",
    u: ["အခန်းထဲမှာ တောက်။ အသံတစ်ချက် ထွက်လာတယ်။",
        "အန်တီက စင်ဘက်ကို လှည့်ကြည့်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Its Head Was Turning", l: "အန်တီအိမ်", w: ["ဖိုးဝရုပ်"],
    g: "ဖိုးဝရုပ်ရဲ့ခေါင်းက ဖြည်းဖြည်း ရွေ့နေတယ်။",
    p: "The doll on the shelf with its head caught mid-rotation, the crack across its crown, the "
      + "painted smile unchanged.",
    u: ["ဖိုးဝရုပ်ရဲ့ခေါင်းက ဖြည်းဖြည်း ရွေ့နေတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "This Time No One Was Behind Him", l: "အန်တီအိမ်", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "ဒီတစ်ခါ ညီညီ့နောက်မှာ ဘယ်သူမှ မရှိဘူး။",
    p: "A composition that makes the geometry explicit: the doll turned toward the boy, and the "
      + "space between them completely empty — no father standing in it.",
    u: ["ဒီတစ်ခါ ညီညီ့နောက်မှာ ဘယ်သူမှ မရှိဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "His Father's Voice Changed", l: "အန်တီအိမ်",
    g: "အရုပ်ခေါင်းအတွင်းက အဖေ့အသံက ချက်ချင်း ပြောင်းသွားတယ်။ တောင်းပန်သံ မဟုတ်တော့ဘူး။ ထိတ်လန့်နေတဲ့အသံ။",
    p: "⚠️ TIGHT ON THE DOLL'S HEAD, FRAMED SO THE CROWN CRACK AND THE PAINTED SMILE ARE BOTH IN "
    + "SHOT AT ONCE — the crack running across the top of frame with dry layered paper edges "
    + "inside it going down into shadow, and the small fixed smile directly below it. ⚠️ THE "
    + "SMILE IS THE SAME CURVE IT HAS BEEN IN EVERY FRAME OF THE FILM. ⚠️ NOTHING VISIBLE ABOUT "
    + "THE DOLL HAS CHANGED — the voice inside it has, and the picture has not. Sharp macro "
    + "focus, bright daylight on the shelf, nothing in frame moving.",
    u: ["အရုပ်ခေါင်းအတွင်းက အဖေ့အသံက ချက်ချင်း ပြောင်းသွားတယ်။",
        "တောင်းပန်သံ မဟုတ်တော့ဘူး။ ထိတ်လန့်နေတဲ့အသံ။ “သား…” ခဏနားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Tell Her the Truth", l: "အန်တီအိမ်", w: ["ညီညီ", "ဖိုးဝရုပ်"],
    g: "နောက်ဆုံးပုံ — “အမှန်အတိုင်း ပြန်ပြောလိုက်…” ဖိုးဝရုပ်ကတော့ အရင်အတိုင်း ပြုံးနေတုန်းပဲ။",
    p: "Final composition: the doll on the shelf turned fully toward a small boy who is looking "
      + "back at it, the woman beside him following his eyes. The painted smile is exactly what it "
      + "has been in every frame of the film. Hold on the doll.",
    u: ["“အမှန်အတိုင်း ပြန်ပြောလိုက်…”",
        "ဖိုးဝရုပ်ကတော့ အရင်အတိုင်း ပြုံးနေတုန်းပဲ။"],
    c: [[1, "finalstinger"]] },
];

reviewPhoewa(SCENES, CAST, LOCS);
