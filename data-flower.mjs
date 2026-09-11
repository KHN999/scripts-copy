/**
 * ပန်းပွင့်တွေ မညှိုးတဲ့ ရွာ — scene board.
 *
 * Same shape as return-scenes.mjs:
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * This one is a DAYLIGHT horror. Almost none of it happens at night, and the
 * prompts say so repeatedly, because the default for the genre is darkness and
 * the whole point here is that it is happening in front of everyone, in the sun,
 * while a band plays.
 */

export const CAST = [
  { name: "နေဝင်း", en: "Nay Win — the photographer, narrator",
    prompt: "A Burmese man of about thirty-five, ordinary build, short hair, a plain short-sleeved "
      + "shirt and dark trousers, a DSLR on a strap around his neck. A working photographer at a rural "
      + "job: slightly rumpled, sweating in the heat, entirely unremarkable. Not heroic, not frightened "
      + "— watchful." },
  { name: "ဦးဘသိန်း", en: "U Ba Thein — the village headman",
    prompt: "A Burmese man of about sixty in a white traditional jacket and white longyi, neatly "
      + "dressed, prosperous by village standards. A warm public smile that never quite reaches the "
      + "eyes. He habitually touches the arm of whoever he is speaking to." },
  { name: "နန္ဒာ",
    pose: "The subject stands in a gentle three-quarter view so that the SINGLE RED FLOWER TUCKED BEHIND HER EAR is clearly visible, face still readable, full figure, not smiling", en: "Nanda — the previous keeper",
    prompt: "A Burmese woman of about twenty-three in a plain white blouse, dark hair gathered behind "
      + "the ears, a single RED flower tucked behind one ear — the only red anywhere in this village. "
      + "⚠️ She must look completely, unremarkably ALIVE: normal skin, normal shadow, feet flat on the "
      + "ground, no pallor, no transparency, no effect of any kind. She simply never smiles. The wrongness "
      + "is that there is nothing wrong with her." },
  { name: "သဇင်", en: "Thazin — this year's keeper, eighteen",
    prompt: "A Burmese girl of eighteen, small and thin, a young face. A white ceremonial blouse and "
      + "htamein. Heavy white flower garlands hang from her neck, far too wide for her shoulders. She "
      + "looks down rather than at the camera." },
  { name: "အဘွား", en: "The grandmother — Nanda's mother, the garland maker",
    prompt: "A Burmese woman of about sixty-five, weathered hands, grey hair pulled back, a faded "
      + "housedress. She is always working: threading garlands with a long needle, hands busy even when "
      + "her face is still. Grief worn smooth by years, not fresh." },
];

export const LOCS = [
  { name: "ရွာလမ်း", en: "The village street",
    prompt: "The dirt main street of a small central-Myanmar village at festival time, hard bright "
      + "midday sun. WHITE flower garlands hung on every door frame, fence post, gate and cart wheel — "
      + "hundreds of them, all identical, all fresh. Dust, ox carts, tin roofs, a bamboo entrance arch." },
  { name: "မဏ္ဍပ်", en: "The festival pavilion",
    prompt: "An open bamboo-and-tarpaulin festival pavilion in the middle of a village: coloured paper "
      + "decorations, a low stage, rows of plastic chairs, a band's instruments to one side, villagers "
      + "in white gathered under the shade in fierce daylight." },
  { name: "ပန်းစောင့်အိမ်", en: "The flower-keeper's house",
    prompt: "An old wooden village house with a plank verandah and steps, every window standing open so "
      + "that sunlight floods straight through. ⚠️ Unlike every other house in the village it has NO "
      + "flower garlands on it at all. Along one interior wall hangs a long row of identical framed "
      + "portraits." },
  { name: "ပန်းခြံ", en: "The flower garden behind the house",
    prompt: "A large walled garden behind a village house, planted with waist-high WHITE flowering "
      + "shrubs in long raised earth beds laid out in neat parallel rows. The beds are all the same size "
      + "— roughly the length and width of a person. Utterly still air; nothing moves. Blazing sun." },
  { name: "အိပ်ခန်း", en: "The front room where he sleeps",
    prompt: "The front room of a village house made up for a guest: a thin mattress on the floor under "
      + "a mosquito net, a shuttered window, a laptop and camera bag, one flower garland hanging from a "
      + "hook outside the net." },
];

export const STYLE =
  "Pan Kone, a small flower-growing village in rural central Myanmar, present day, during the Tazaungmon "
  + "festival. HARD BRIGHT DAYLIGHT — this story happens almost entirely in fierce midday sun, with a "
  + "band playing and children eating ice lollies, and the daylight is the point: do not make it night, "
  + "do not make it gothic, do not add fog or blue moonlight. White flower garlands hang on absolutely "
  + "everything. Cinematic photorealism, documentary-plain, 35mm film grain, shallow depth of field, "
  + "16:9, natural sun-bleached colour with deep hard shadows. NEVER show a corpse, a skeleton, gore, or "
  + "a translucent or monstrous figure — the dead here look exactly like the living. No legible text, "
  + "numbers, captions or watermarks anywhere in the image.";

export const SCENES = [
  { t: "Forty-Three People", l: null,
    g: "အုပ်စုလိုက်ဓာတ်ပုံဟောင်းတစ်ပုံ။ လူလေးဆယ့်သုံးယောက်။ အားလုံးနီးပါး ပြုံးနေတယ်။",
    p: "A printed group photograph of forty-three villagers in white, posed in rows outside a "
      + "festival pavilion in bright sun, almost every face smiling at the lens.",
    u: ["အဲဒီဓာတ်ပုံထဲမှာ လူလေးဆယ့်သုံးယောက် ပါတယ်။",
        "လေးဆယ့်နှစ်ယောက်က ပြုံးနေကြတယ်။"] },

  { t: "The One Who Does Not", l: null, w: ["သဇင်"],
    g: "ပုံအလယ်က ပန်းကုံးကြီးဆွဲထားတဲ့ ကောင်မလေး။ မပြုံးဘူး။",
    p: "Tight crop into the centre of the same photograph: a girl seated with heavy white garlands "
      + "over her shoulders, the only unsmiling face in a field of smiles.",
    u: ["အလယ်မှာ ပန်းကုံးကြီးဆွဲပြီး ထိုင်နေတဲ့ ကောင်မလေးတစ်ယောက်ပဲ မပြုံးဘူး။"] },

  { t: "Smile a Little", l: "မဏ္ဍပ်", w: ["နေဝင်း"],
    g: "ကင်မရာနောက်ကနေ ဓာတ်ပုံဆရာ လှမ်းပြောနေတယ်။",
    p: "Over-the-shoulder from behind a photographer at his tripod, the crowd of villagers arranged "
      + "in front of him in hard sunlight, his mouth open mid-instruction.",
    u: ["ကျွန်တော်က ကင်မရာနောက်ကနေ လှမ်းပြောမိတယ်။",
        "“ညီမလေး၊ နည်းနည်းလေး ပြုံးပေးပါဦး”"] },

  { t: "The Hand on Her Shoulder", l: "မဏ္ဍပ်", w: ["သဇင်"],
    g: "ဘေးက အမျိုးသမီးကြီးက ကောင်မလေးပခုံးကို ဖိကိုင်လိုက်တယ်။ ကောင်မလေး ပြုံးတယ်။ မျက်ရည်က ကျနေတုန်း။",
    p: "A woman's hand pressing down hard on a young girl's shoulder, fingers dug into the cloth; the "
      + "girl's face has assembled a smile while tears run down it.",
    u: ["သူ့ဘေးက အမျိုးသမီးကြီးက ကောင်မလေးပခုံးကို ဖိကိုင်လိုက်တယ်။",
        "ကောင်မလေး ပြုံးတယ်။ မျက်ရည်တွေတော့ ကျနေတုန်းပဲ။",
        "အဲဒီအချိန်မှာ ကျွန်တော် ရှပ်တာနှိပ်လိုက်တယ်။"],
    c: [[1, "stinger"]] },

  { t: "What I Regret", l: null,
    g: "ဓာတ်ပုံကို လက်နဲ့ကိုင်ထားတယ်။ နောက်ခံ ဝါးနေတယ်။",
    p: "The printed photograph held in two hands in flat present-day light, the room behind it thrown "
      + "completely out of focus.",
    u: ["အခု ပြန်တွေးတိုင်း ကျွန်တော် နောင်တအရဆုံးအရာက အဲဒီပုံကို ရိုက်ခဲ့တာ မဟုတ်ဘူး။",
        "သူ့ကို ပြုံးခိုင်းခဲ့တာ။"],
    c: [[1, "bigstinger"]] },

  { t: "My Name Is Nay Win", l: null, w: ["နေဝင်း"],
    g: "ဓာတ်ပုံဆရာ တစ်ယောက်တည်း။ ကင်မရာအိတ်နဲ့။ မြို့ပြနောက်ခံ။",
    p: "A working photographer with a camera bag over his shoulder on an ordinary town street, "
      + "checking a lens, entirely unremarkable daily life.",
    u: ["ကျွန်တော့်နာမည် နေဝင်း။ ဓာတ်ပုံရိုက်တဲ့အလုပ် လုပ်တယ်။",
        "မင်္ဂလာဆောင်၊ အလှူ၊ ရွာပွဲ—ငှားတဲ့နေရာရှိရင် သွားတယ်။"] },

  { t: "The Booking", l: null,
    g: "ဖုန်းမှာ စာနဲ့ ငွေလွှဲပြေစာ။ ပုံမှန်အလုပ်တစ်ခုလိုပဲ။",
    p: "A phone screen showing a booking message and a payment confirmation, held over a cluttered "
      + "desk with camera gear on it.",
    u: ["ပန်းကုန်းရွာက အလုပ်က ရွာလူကြီး ဦးဘသိန်းဆီကနေ တိုက်ရိုက်ရတာ။",
        "နှစ်ရက်စာ ပန်းပွဲရိုက်ပေးဖို့။",
        "ကားအကြိုအပို့၊ စားစရိတ်၊ တည်းခိုစရိတ် အကုန်စီစဉ်ပေးမယ်။ ဈေးလည်း ကျွန်တော်တောင်းတာထက် ပိုပေးတယ်။"] },

  { t: "Photograph the Flower Keeper Properly", l: null,
    g: "ဖုန်းစကားပြောနေတဲ့ပုံ။ စာတစ်ကြောင်းကို အနီးကပ်။",
    p: "A phone held to an ear in a dim workroom, the screen's message thread visible in the "
      + "reflection of a window behind.",
    u: ["“ပွဲပုံတွေက သာမန်ရိုက်ရင်ရတယ် ဆရာလေး။ နောက်ဆုံးနေ့ ပန်းစောင့်မလေးပုံကိုတော့ သေချာရိုက်ပေးပါ”",
        "“ပန်းစောင့်မယ်ဆိုတာ ဘာလဲခင်ဗျ”",
        "“နှစ်တိုင်း ရွေးတယ်။ ဒီနှစ် ရွာကိုယ်စား ပန်းဆက်ရမယ့်သူပေါ့”",
        "ရိုးရာပွဲတစ်ခုလို့ပဲ ထင်ခဲ့တယ်။"] },

  { t: "Ten in the Morning", l: "ရွာလမ်း",
    g: "ကားထဲကနေ ရွာအဝင်လမ်း။ နေပူပြင်းတယ်။ ဖုန်ထူတယ်။",
    p: "The view forward through a car windscreen onto a dusty village approach road in fierce "
      + "mid-morning sun, heat shimmer on the track ahead.",
    u: ["ရွာကို ရောက်တဲ့အချိန်က မနက်ဆယ်နာရီ။",
        "တန်ဆောင်မုန်းနားဆိုပေမယ့် နေပူတယ်။ ကားမှန်ကတစ်ဆင့် လက်မောင်းပေါ်ကျတဲ့ နေရောင်တောင် စပ်တယ်။"] },

  { t: "White Flowers", l: "ရွာလမ်း",
    g: "ရွာအဝင် ဆိုင်းဘုတ်အောက်မှာ ပန်းကုံးဖြူတွေ တွဲလောင်းဆွဲထား။",
    p: "A bamboo village entrance arch hung with dozens of identical white flower garlands, all "
      + "perfectly fresh, swaying very slightly in hard noon light.",
    u: ["ရွာအဝင်ဆိုင်းဘုတ်အောက်မှာ ပန်းကုံးတွေ ဆွဲထားတယ်။ အဖြူပန်းတွေ။"] },

  { t: "Every Door, Every Wheel", l: "ရွာလမ်း",
    g: "တစ်ရွာလုံး ပန်းကုံးဖြူတွေ။ တံခါး၊ ခြံစည်းရိုး၊ နွားလှည်းဘီးတွေမှာပါ။",
    p: "A wide view down the village street: white garlands on every door frame, every fence post, "
      + "every gate, even looped over the wheels of a parked ox cart. Hundreds of them, identical.",
    u: ["တစ်ရွာလုံးလည်း အဖြူပန်းတွေပဲ။",
        "အိမ်တံခါးတွေ၊ ခြံစည်းရိုးတွေ၊ နွားလှည်းဘီးတွေမှာပါ ပန်းကုံးတွေ ချိတ်ထားတယ်။ လေတိုက်လိုက်တိုင်း အကုန် တဖြည်းဖြည်း လှုပ်နေကြတယ်။"] },

  { t: "It Sticks in the Throat", l: "ရွာလမ်း",
    g: "ပန်းကုံးတွေကို အနီးကပ်။ ပွင့်ဖတ်တွေ ထူတယ်။",
    p: "Extreme close-up of massed white blossoms on a garland, petals unusually thick and waxy, "
      + "sunlight coming through them.",
    u: ["ပန်းတွေ များလွန်းလို့ အစမှာ ပန်းနံ့ကိုတောင် မခွဲနိုင်ဘူး။",
        "ချိုတယ်။ နည်းနည်းကြာတော့ လည်ချောင်းထဲ ကပ်လာတယ်။"] },

  { t: "The Garland Is Cold", l: "ရွာလမ်း", w: ["နေဝင်း"],
    g: "ကောင်လေးတစ်ယောက်က ဓာတ်ပုံဆရာလည်ပင်းကို ပန်းကုံးစွပ်ပေးတယ်။",
    p: "A village boy reaching up to loop a white garland over the neck of a newly arrived man beside "
      + "a parked car, both squinting in the glare.",
    u: ["ကားပေါ်က ဆင်းဆင်းချင်း ကောင်လေးတစ်ယောက်က ကျွန်တော့်လည်ပင်းကို ပန်းကုံးစွပ်ပေးတယ်။",
        "ပန်းပွင့်တွေက အေးနေတယ်။ ရေခဲသေတ္တာထဲက ထုတ်လာသလို။"],
    c: [[1, "stinger"]] },

  { t: "From the Keeper's House", l: "ရွာလမ်း",
    g: "ကောင်လေးက ရွာနောက်ဘက်ကို လက်ညှိုးထိုးပြတယ်။",
    p: "A boy pointing away down the street toward the back of the village, his other hand still on a "
      + "garland, the road behind him empty and blazing.",
    u: ["“ဘယ်ကပန်းတွေလဲ” လို့ မေးတော့ ကောင်လေးက ရွာနောက်ဘက်ကို လက်ညှိုးထိုးတယ်။",
        "“ပန်းစောင့်အိမ်က”"] },

  { t: "Don't Make Him Answer Questions", l: "ရွာလမ်း",
    g: "အမေက ကောင်လေးလက်ကို ချက်ချင်း ဆွဲချလိုက်တယ်။ ပြီးတော့ ပြုံးပြတယ်။",
    p: "A woman snatching a boy's pointing hand down to his side while smiling brightly at someone "
      + "off-frame, the two gestures completely at odds.",
    u: ["သူ့အမေဖြစ်ပုံရတဲ့ အမျိုးသမီးက သူ့လက်ကို ချက်ချင်း ဆွဲချလိုက်တယ်။",
        "“ဆရာလေးကို လာလာချင်း မေးခွန်းတွေ ဖြေခိုင်းမနေနဲ့”",
        "သူမက ကျွန်တော့်ကို ပြုံးပြတယ်။",
        "ကောင်လေးကတော့ ကျွန်တော့်လည်ပင်းက ပန်းကုံးကိုပဲ ကြည့်နေတယ်။"] },

  { t: "U Ba Thein", l: "မဏ္ဍပ်", w: ["ဦးဘသိန်း"],
    g: "အဖြူရောင်တိုက်ပုံနဲ့ ရွာလူကြီး။ လက်မောင်းကို ထိပြီး စကားပြောတယ်။",
    p: "A well-dressed older man in a white jacket and white longyi greeting a visitor under a "
      + "festival pavilion, one hand resting on the visitor's forearm, smiling broadly.",
    u: ["ဦးဘသိန်းက ကျွန်တော့်ကို ရွာလယ် မဏ္ဍပ်မှာ ကြိုတယ်။",
        "အဖြူရောင်တိုက်ပုံ၊ အဖြူရောင်ပုဆိုးနဲ့။ စကားပြောတိုင်း တစ်ဖက်လူရဲ့လက်မောင်းကို ထိတတ်တယ်။"] },

  { t: "Guests Can't Take the Smell", l: "မဏ္ဍပ်",
    g: "ပန်းကုံးကို လက်နဲ့ ကိုင်ကြည့်နေတယ်။ ပွင့်ဖတ်ထူတယ်။",
    p: "A hand turning over the blossoms of a garland worn around a neck, examining the thick waxy "
      + "petals closely in bright light.",
    u: ["“ပန်းကုံး မလေးဘူးလား” “ရပါတယ်”",
        "“အနံ့မခံနိုင်ရင် ဖြုတ်ထားနော်။ ဧည့်သည်တွေက အစမှာ မခံနိုင်တတ်ဘူး”",
        "ကျွန်တော် ပန်းတွေကို လက်နဲ့ ထိကြည့်တယ်။",
        "ပွင့်ဖတ်တွေက ထူတယ်။ ဘာပန်းလဲ မသိဘူး။"] },

  { t: "Until the Next Festival", l: "မဏ္ဍပ်", w: ["ဦးဘသိန်း"],
    g: "ဦးဘသိန်း ပြုံးနေတယ်။ ဓာတ်ပုံဆရာက ရယ်တယ်။ သူက မရယ်ဘူး။",
    p: "The headman smiling pleasantly in reply to a question, the photographer laughing beside him "
      + "while the older man's face does not change at all.",
    u: ["“ဒီပန်းက ဘယ်နှရက်ခံလဲခင်ဗျ”",
        "ဦးဘသိန်း ပြုံးတယ်။ “နောက်ပွဲအထိပေါ့”",
        "ကျွန်တော် ရယ်လိုက်တယ်။ သူက မရယ်ဘူး။"] },

  { t: "Last Year's Flower", l: "မဏ္ဍပ်",
    g: "တိုင်မှာဆွဲထားတဲ့ ပန်းကုံး။ ပန်းက လတ်ဆတ်ပေမယ့် ချည်ကြိုးက ဟောင်းနွမ်းနေပြီ။",
    p: "A garland hanging on a pavilion post: the white blossoms are perfectly fresh and plump, but "
      + "the cotton string threading them is sun-bleached grey, frayed and rotting. Close, sharp.",
    u: ["အနီးက တိုင်တစ်တိုင်ကို လက်ညှိုးထိုးပြတယ်။",
        "တိုင်မှာ ဆွဲထားတဲ့ ပန်းကုံးက လတ်လတ်ဆတ်ဆတ်ပဲ။ ချည်ထားတဲ့ချည်ကြိုးကတော့ အရောင်လွင့်ပြီး ဖွာနေပြီ။",
        "“အဲဒါ မနှစ်ကပန်း”",
        "ကျွန်တော် လက်ထဲက ပန်းကို လွှတ်လိုက်မိတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "The First Day", l: "မဏ္ဍပ်",
    g: "ပွဲနေ့။ ကလေးအက၊ ထမင်းကျွေးပွဲ။ နေရောင်ကောင်းတယ်။ လှတယ်။",
    p: "A bright cheerful festival scene: children dancing in costume on a low stage, trays of food "
      + "being passed, coloured paper decorations, everything genuinely beautiful in strong sun.",
    u: ["ပထမနေ့က ကလေးအက၊ ထမင်းကျွေးပွဲ၊ ပန်းကုံးသီပြိုင်ပွဲတွေ ရိုက်ရတယ်။",
        "နေရောင်ကောင်းတယ်။",
        "အဖြူဝတ်ထားတဲ့ လူတွေကြားမှာ ပန်းရောင်၊ အဝါရောင် အလှဆင်စက္ကူတွေ လှုပ်နေတယ်။",
        "ကင်မရာထဲက ပုံတွေ အရမ်းလှတယ်။"] },

  { t: "Faces When They Don't Know", l: "မဏ္ဍပ်",
    g: "မသိလိုက်ဘဲ ရိုက်လိုက်တဲ့ပုံ။ မျက်နှာတွေ တင်းနေကြတယ်။",
    p: "A candid unposed frame of villagers at the festival: nobody has noticed the camera and every "
      + "single face is tight, closed and watchful. Nobody is smiling.",
    u: ["ဒါပေမယ့် လူတွေက ထူးဆန်းတယ်။",
        "သူတို့မသိဘဲ ရိုက်လိုက်တဲ့ပုံတွေမှာ မျက်နှာတွေ တင်းနေကြတယ်။"],
    c: [[1, "stinger"]] },

  { t: "As If Someone Started It", l: "မဏ္ဍပ်",
    g: "ကင်မရာမြှောက်လိုက်တာနဲ့ အားလုံး တစ်ပြိုင်နက် ပြုံးသွားတယ်။",
    p: "The same group an instant later, every face now wearing an identical broad smile, turned "
      + "toward the lens in unison. The uniformity is the horror.",
    u: ["ကင်မရာမြှောက်လိုက်တာကို မြင်တာနဲ့ ပြုံးကြတယ်။",
        "အားလုံးနီးပါး။ တစ်ယောက်က စခိုင်းလိုက်သလို။"],
    c: [[1, "bigstinger"]] },

  { t: "Under the Tree", l: "မဏ္ဍပ်", w: ["နန္ဒာ"],
    g: "မဏ္ဍပ်ဘေး သစ်ပင်အောက်မှာ မိန်းကလေးတစ်ယောက်။ အဖြူရောင်အင်္ကျီ။",
    p: "A young woman standing alone in the shade of a tree beside the pavilion, white blouse, hands "
      + "at her sides, looking directly toward camera while the festival carries on behind her.",
    u: ["နေ့လယ်မှာ မဏ္ဍပ်ဘေးက သစ်ပင်အောက်မှာ မိန်းကလေးတစ်ယောက် တွေ့တယ်။",
        "အသက်နှစ်ဆယ့်သုံး၊ နှစ်ဆယ့်လေးလောက်။",
        "အဖြူရောင်အင်္ကျီ။ ဆံပင်ကို နားနောက်မှာ သိမ်းထားတယ်။"] },

  { t: "The Only Red Flower", l: "မဏ္ဍပ်", w: ["နန္ဒာ"],
    g: "သူ့နားရွက်ဘေးမှာ ပန်းနီတစ်ပွင့်။ တစ်ရွာလုံးမှာ ပထမဆုံးမြင်ရတဲ့ ပန်းနီ။",
    p: "Close on the side of a young woman's head: a single RED flower tucked behind her ear, "
      + "vividly out of place against a village where every other flower in frame is white.",
    u: ["နားရွက်ဘေးမှာ ပန်းနီတစ်ပွင့် ပန်ထားတယ်။",
        "တစ်ရွာလုံးမှာ ကျွန်တော် ပထမဆုံးမြင်တဲ့ ပန်းနီပဲ။"],
    c: [[1, "stinger"]] },

  { t: "She Does Not Smile", l: "မဏ္ဍပ်", w: ["နန္ဒာ"],
    g: "သူက ကင်မရာကို တည့်တည့်ကြည့်တယ်။ မပြုံးဘူး။",
    p: "A young woman looking straight into the lens with a completely neutral face — not hostile, "
      + "not sad, simply not smiling — in a village where everyone smiles at cameras.",
    u: ["သူက ကင်မရာကို တည့်တည့်ကြည့်တယ်။ မပြုံးဘူး။",
        "ကျွန်တော် လက်ညှိုးနဲ့ ကင်မရာကို ပြပြီး ရိုက်လို့ရလားဆိုတဲ့သဘော မေးလိုက်တယ်။",
        "သူ ခေါင်းညိတ်တယ်။ တစ်ပုံ ရိုက်လိုက်တယ်။"] },

  { t: "There Is a Photograph of Me", l: "မဏ္ဍပ်", w: ["နန္ဒာ"],
    g: "သူက မဏ္ဍပ်နောက်က အိမ်အိုတစ်လုံးကို လှမ်းကြည့်တယ်။",
    p: "A young woman turning her head to look past the pavilion toward an old wooden house at the "
      + "far edge of the village, the photographer's shoulder soft in the foreground.",
    u: ["ကင်မရာပြန်ချတော့ သူ ကျွန်တော့်နားကို လျှောက်လာတယ်။",
        "“ပုံတွေ ပုံနှိပ်ပေးသေးလား” “ပေးပါတယ်။ ဘယ်ဆိုဒ်လိုချင်လဲ”",
        "သူက မဏ္ဍပ်နောက်က အိမ်အိုတစ်လုံးကို ကြည့်တယ်။",
        "“အဲဒီအိမ်မှာ ကျွန်မပုံတစ်ပုံ ရှိတယ်”"] },

  { t: "I Don't Like the Old One", l: "မဏ္ဍပ်", w: ["နန္ဒာ"],
    g: "သူ ပြန်လှည့်ကြည့်ပြီး ဖြေတယ်။ မျက်နှာက တည်ငြိမ်တယ်။",
    p: "A young woman turning back to face camera, her expression perfectly level, the bright festival "
      + "blurred to nothing behind her.",
    u: ["“အသစ်လဲချင်တာလား”",
        "သူ ကျွန်တော့်ကို ပြန်ကြည့်တယ်။ “ဟုတ်တယ်။ အရင်ပုံကို မကြိုက်လို့”",
        "“နာမည်က?” “နန္ဒာ”"],
    c: [[2, "stinger"]] },

  { t: "Don't Delete This One", l: "မဏ္ဍပ်",
    g: "ဖုန်းမှာ နာမည်ရိုက်မှတ်နေတယ်။",
    p: "A phone held in one hand with a note half-typed on it, a camera hanging at the chest, bright "
      + "dusty ground below.",
    u: ["ကျွန်တော် ဖုန်းထဲမှာ မှတ်ဖို့လုပ်တော့ သူက ထပ်ပြောတယ်။",
        "“ဒီပုံကိုတော့ မဖျက်နဲ့နော်”"] },

  { t: "The Needle", l: "မဏ္ဍပ်", w: ["အဘွား"],
    g: "အဘွားက ပန်းသီနေတယ်။ အပ်က လက်ချောင်းကို စူးနေတယ်။ သွေးထွက်နေတယ်။",
    p: "An old woman's hands threading white blossoms onto a string with a long needle; the needle "
      + "point has gone into her own fingertip and a bead of blood is standing on it, unnoticed.",
    u: ["သူ ထွက်သွားပြီးမှ ဘေးက ပန်းကုံးသီနေတဲ့ အဘွားကြီး ကျွန်တော့်ကို ကြည့်နေတာ သတိထားမိတယ်။",
        "အဘွားရဲ့ လက်ထဲမှာ အပ်တစ်ချောင်း ရှိတယ်။",
        "အပ်ထိပ်က သူ့လက်ချောင်းကို စူးနေတယ်။",
        "သွေးစက်တစ်စက် ထွက်လာတာတောင် မသိသလိုပဲ။"],
    c: [[3, "stinger"]] },

  { t: "She Hides the Flower", l: "မဏ္ဍပ်", w: ["အဘွား"],
    g: "သွေးကို ပန်းဖြူတစ်ပွင့်နဲ့ သုတ်ပြီး ခြင်းထဲ မထည့်ဘဲ အိတ်ထဲ ဖွက်ထည့်လိုက်တယ်။",
    p: "An old woman wiping a spot of blood onto a single white blossom, then slipping that blossom "
      + "into her blouse pocket instead of into the basket with the others.",
    u: ["“အဘွား၊ လက်…” လို့ ပြောမှ သူ လက်ကို ပြန်ကြည့်တယ်။",
        "ပြီးတော့ ပန်းဖြူပွင့်တစ်ပွင့်နဲ့ သွေးကို သုတ်လိုက်တယ်။",
        "ပန်းကို ခြင်းထဲ မထည့်ဘူး။ အင်္ကျီအိတ်ထဲ ဖွက်ထည့်လိုက်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "This Year's Keeper", l: "မဏ္ဍပ်", w: ["သဇင်"],
    g: "ညနေခင်း။ ပန်းစောင့်မယ် သဇင်။ အသက်ဆယ့်ရှစ်နှစ်။ ပန်းကုံးက ပခုံးထက် ကျယ်တယ်။",
    p: "A thin eighteen-year-old girl presented on the pavilion stage in late-afternoon light, heavy "
      + "white garlands hanging from her neck so wide they overhang her shoulders.",
    u: ["ညနေမှာ ပန်းစောင့်မယ်ကို မိတ်ဆက်ပေးတယ်။",
        "နာမည်က သဇင်။ အသက်ဆယ့်ရှစ်နှစ်။",
        "မျက်နှာသေးသေး၊ ပိန်ပိန်လေး။ ပန်းကုံးကြီးက သူ့ပခုံးထက် ကျယ်နေတယ်။"] },

  { t: "An Honour for the Village", l: "မဏ္ဍပ်", w: ["ဦးဘသိန်း", "သဇင်"],
    g: "ဦးဘသိန်းက မိန့်ခွန်းပြောနေတယ်။ လူတွေ လက်ခုပ်တီးတယ်။ သဇင်က အောက်ကိုပဲ ကြည့်နေတယ်။",
    p: "The headman speaking proudly to an applauding crowd with one hand raised toward the garlanded "
      + "girl beside him; she is looking down at the boards of the stage.",
    u: ["ဦးဘသိန်းက ပန်းစောင့်မယ် ဖြစ်ခွင့်ရတာ ရွာအတွက် ဘယ်လောက်ဂုဏ်ရှိကြောင်း ပြောတယ်။",
        "လူတွေ လက်ခုပ်တီးကြတယ်။",
        "သဇင်ကတော့ အောက်ကိုပဲ ကြည့်နေတယ်။"] },

  { t: "That Is When I Told Her to Smile", l: "မဏ္ဍပ်", w: ["သဇင်"],
    g: "အဖွဲ့လိုက်ဓာတ်ပုံ စီနေတယ်။ အမေက ပခုံးကို ကိုင်ပြီး ဘေးမှာ ရပ်တယ်။",
    p: "Villagers arranging themselves into rows for a group portrait, a mother stepping in beside the "
      + "garlanded girl and placing a hand on her shoulder.",
    u: ["အဖွဲ့လိုက်ဓာတ်ပုံရိုက်ဖို့ စီတဲ့အခါ သူ့အမေက ပခုံးကို ကိုင်ပြီး ဘေးမှာ ရပ်တယ်။",
        "အဲဒီမှာ ကျွန်တော် သူ့ကို ပြုံးခိုင်းမိတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "What Time Does Your Car Leave", l: "မဏ္ဍပ်", w: ["သဇင်"],
    g: "သဇင်က လူတွေကြားမှာ ကပ်လာပြီး တိုးတိုးမေးတယ်။ နေရောင်အောက်မှာ။",
    p: "A girl leaning in very close to speak to a man in the middle of a crowd in full daylight, her "
      + "face turned so no one else can read her lips.",
    u: ["ပုံရိုက်ပြီးတော့ သူ့အမေ လက်ခဏလွှတ်လိုက်တဲ့အချိန်မှာ သဇင်က ကျွန်တော့်နား ကပ်လာတယ်။",
        "လူတွေကြားမှာ။ နေရောင်အောက်မှာ။",
        "အရမ်းတိုးတိုးလေး မေးတယ်။",
        "“ဆရာ့ကားက မနက်ဖြန် ဘယ်အချိန် ပြန်မှာလဲ”"] },

  { t: "As Far as Town", l: "မဏ္ဍပ်", w: ["သဇင်"],
    g: "သဇင် ပါးစပ်ဖွင့်တယ်။ ဘာမှမပြောရသေးခင် အမေရောက်လာတယ်။",
    p: "A girl's mouth opening to say something, and at the edge of frame a woman's hand already "
      + "closing around her wrist.",
    u: ["“ပွဲပြီးမှပေါ့။ ညနေ လေးနာရီလောက်” “မြို့အထိ သွားမှာလား” “အင်း”",
        "သူ ပါးစပ်ဖွင့်တယ်။",
        "ဘာမှ မပြောရသေးခင် သူ့အမေ ရောက်လာတယ်။",
        "“လာ သမီး။ အဝတ်လဲမယ်”"] },

  { t: "Led Away by the Wrist", l: "မဏ္ဍပ်", w: ["သဇင်"],
    g: "အမေက လက်ကောက်ဝတ်ကို ကိုင်ပြီး ခေါ်သွားတယ်။ သဇင်က ပြန်ကြည့်နေတုန်း။",
    p: "A woman leading a girl away by the wrist through a crowd, the girl's head twisted back over "
      + "her shoulder still looking at someone behind her.",
    u: ["သဇင် ကျွန်တော့်ကို ကြည့်နေတုန်းပဲ။",
        "သူ့အမေက လက်ကောက်ဝတ်ကို ကိုင်ပြီး ခေါ်သွားတယ်။"] },

  { t: "Nails in the Skin", l: "အိပ်ခန်း",
    g: "ညဘက်။ ကွန်ပျူတာမှာ ပုံကို ချဲ့ကြည့်နေတယ်။ ပခုံးပေါ်က လက်သည်းတွေ အသားထဲ ဝင်နေတယ်။",
    p: "A laptop screen at night showing a hugely enlarged detail of a photograph: a hand on a girl's "
      + "shoulder with the fingernails pressed deep enough to dent the flesh.",
    u: ["အဲဒီည ဓာတ်ပုံတွေ ပြန်ကြည့်တော့ သဇင်ရဲ့ ပခုံးပေါ်က သူ့အမေလက်ကို ကျွန်တော် ချဲ့ကြည့်မိတယ်။",
        "ဖေးမထားတဲ့လက် မဟုတ်ဘူး။",
        "လက်သည်းတွေ အသားထဲ ဝင်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Seven People Behind Her", l: "အိပ်ခန်း",
    g: "နန္ဒာ့ပုံ။ နောက်မှာ လူခုနစ်ယောက်။ ဘယ်သူမှ ကင်မရာကို မကြည့်ဘူး။",
    p: "A photograph on a laptop screen: a young woman in the foreground, and behind her seven "
      + "villagers who are all looking at HER rather than at the camera.",
    u: ["ကျွန်တော် တည်းရတာ ဦးဘသိန်းအိမ်ရှေ့ခန်းမှာ။",
        "ညစာစားပြီး ပုံတွေ ပြန်စစ်တယ်။ နန္ဒာ့ပုံကို ဖွင့်လိုက်တယ်။",
        "ပုံက ကြည်တယ်။ သူ့နောက်က မဏ္ဍပ်မှာ လူခုနစ်ယောက် ပါတယ်။",
        "ဘယ်သူမှ ကင်မရာကို မကြည့်ဘူး။ နန္ဒာ့ကိုပဲ ကြည့်နေကြတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "No Smile on His Face", l: "အိပ်ခန်း", w: ["ဦးဘသိန်း"],
    g: "ပုံထဲက ဦးဘသိန်း။ ပြုံးမနေဘူး။ ဘေးလူရဲ့လက်မောင်းကို ဆုပ်ထားတယ်။",
    p: "Enlarged detail from the same photograph: the headman among the watchers, his face completely "
      + "blank, his hand gripping the forearm of the man beside him.",
    u: ["အဲဒီလူခုနစ်ယောက်ထဲမှာ ဦးဘသိန်းလည်း ပါတယ်။",
        "သူ့မျက်နှာမှာ ကျွန်တော် တစ်နေ့လုံးမြင်ခဲ့တဲ့ အပြုံး မရှိဘူး။",
        "သူ့ဘေးက လူရဲ့လက်မောင်းကို ဆုပ်ထားတယ်။",
        "ကျွန်တော် ပုံကို ပိတ်လိုက်တယ်။"],
    c: [[2, "stinger"]] },

  { t: "You Saw It This Year Too", l: "အိပ်ခန်း",
    g: "အိမ်ရှေ့ခန်းတံခါးအောက်က အလင်းကြား။ အပြင်မှာ လူနှစ်ယောက် စကားပြောနေတယ်။",
    p: "A closed interior door at night with warm light and two men's shadows moving in the gap "
      + "beneath it, seen from a mattress on the floor.",
    u: ["အဲဒီအချိန် အိမ်ရှေ့ကနေ ဦးဘသိန်းရဲ့အသံ ကြားရတယ်။",
        "“ဒီနှစ်လည်း မြင်တယ်ဆို?”",
        "နောက်တစ်ယောက်က အသံတိုးတိုးနဲ့ ပြန်ပြောတယ်။ ဘာပြောလဲ မကြားရဘူး။"] },

  { t: "Send Him Home Tomorrow", l: "အိပ်ခန်း",
    g: "ကင်မရာကို အိတ်ထဲ ပြန်ထည့်လိုက်တယ်။ ညဘက်။",
    p: "Hands quietly zipping a camera into a bag in a dim room at night, the door's light-gap still "
      + "visible behind.",
    u: ["ဦးဘသိန်းက “ပုံဟောင်းတွေကို ဘယ်သူမှ မပြနဲ့။ မနက်ဖြန်ပြီးရင် ပြန်လွှတ်လိုက်” လို့ ပြောတယ်။",
        "ကျွန်တော် ကင်မရာကို အိတ်ထဲ ပြန်ထည့်လိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Garland Smells All Night", l: "အိပ်ခန်း",
    g: "ခြင်ထောင်အပြင်မှာ ပန်းကုံး ချိတ်ထားတယ်။ ညဘက်။",
    p: "A white garland hanging on a hook just outside a mosquito net at night, seen from inside the "
      + "net, a single dim bulb behind it.",
    u: ["အဲဒီည ကျွန်တော် မအိပ်နိုင်ဘူး။",
        "ခြင်ထောင်အပြင်မှာ ချိတ်ထားတဲ့ ပန်းကုံးက တစ်ညလုံး အနံ့ထွက်နေတယ်။"] },

  { t: "A Drop of Water", l: "အိပ်ခန်း",
    g: "ပန်းကုံးချည်ကြိုးအောက်မှာ ရေစက်တစ်စက် ချိတ်နေတယ်။ အနီးကပ်။",
    p: "Extreme close-up of the underside of a garland's string at night: a single clear droplet "
      + "hanging from it, catching the light, about to fall.",
    u: ["ညနှစ်နာရီလောက်မှာ လည်ချောင်းခြောက်လို့ ရေသောက်ဖို့ ထလာတယ်။",
        "ပန်းကုံးကို ဖြုတ်ပြီး ပြတင်းပေါက်အပြင် တင်ထားလိုက်တယ်။",
        "အဲဒီတော့မှ သတိထားမိတယ်။",
        "ပန်းကုံးကို ချည်ထားတဲ့ကြိုးအောက်မှာ ရေစက်တစ်စက် ချိတ်နေတယ်။"] },

  { t: "Like Breath on the Hand", l: "အိပ်ခန်း",
    g: "လက်ဖျားနှစ်ချောင်းကြားမှာ စေးနေတဲ့အရည်။ အနီးကပ်။",
    p: "Two fingertips rubbed together with a clear viscous fluid drawn into a thread between them, "
      + "lit hard by a phone torch in darkness.",
    u: ["ကျွန်တော် လက်ဖျားနဲ့ တို့ကြည့်လိုက်တယ်။ ကြည်နေတဲ့ရေ။",
        "လက်ချောင်းကို ပွတ်လိုက်တော့ စေးနေတယ်။ အပင်ရည်လို့ပဲ တွေးလိုက်တယ်။",
        "ဒါပေမယ့် အနံ့က လူတစ်ယောက်ရဲ့ အသက်ရှူငွေ့ကို လက်ပေါ် ခံထားရသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "The House With No Flowers", l: "ပန်းစောင့်အိမ်",
    g: "ပန်းစောင့်အိမ်။ တစ်ရွာလုံးမှာ ပန်းရှိပေမယ့် ဒီအိမ်မှာ တစ်ကုံးမှ မရှိဘူး။",
    p: "An old wooden house in bright morning sun with completely bare door frames and fence posts — "
      + "the only building in the village without a single garland on it.",
    u: ["နောက်နေ့မနက်မှာ ပန်းစောင့်အိမ်ကို ကျွန်တော် သွားကြည့်တယ်။",
        "ရွာအိမ်တိုင်း ပန်းတွေ ဆွဲထားပေမယ့် အဲဒီအိမ်မှာ တစ်ကုံးမှ မရှိဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Did Nanda Send You", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက တံခါးဝမှာ ထိုင်နေတယ်။ ဘာလာလုပ်လဲ မမေးဘူး။",
    p: "An old woman sitting on the threshold of a house in morning light, looking up at a visitor "
      + "without surprise, as though she has been expecting him.",
    u: ["မနေ့က ပန်းသီနေတဲ့အဘွား တံခါးမှာ ထိုင်နေတယ်။",
        "ကျွန်တော့်ကို မြင်တော့ ဘာလာလုပ်လဲ မမေးဘူး။",
        "“နန္ဒာက လွှတ်လိုက်တာလား” လို့ မေးတယ်။",
        "ကျွန်တော် ခေါင်းညိတ်လိုက်တယ်။ အဘွားက အထဲဝင်ဖို့ ဘေးဖယ်ပေးတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Wall of Portraits", l: "ပန်းစောင့်အိမ်",
    g: "အိမ်ထဲ နေရောင်ဝင်နေတယ်။ နံရံတစ်ဖက်လုံးမှာ ဘောင်သွင်းဓာတ်ပုံတွေ တန်းစီထား။",
    p: "A sunlit interior wall hung with a long orderly row of identical framed portraits, dozens of "
      + "them, receding down the room. Every window open, no shadows anywhere.",
    u: ["အိမ်ထဲကို နေရောင်ဝင်နေတယ်။ ပြတင်းပေါက်တွေ အကုန်ဖွင့်ထားတယ်။",
        "နံရံတစ်ဖက်မှာ ဘောင်သွင်းထားတဲ့ ဓာတ်ပုံတွေ စီထားတယ်။"] },

  { t: "Always the Same Photograph", l: "ပန်းစောင့်အိမ်",
    g: "ပုံတိုင်းမှာ လူတစ်ယောက်၊ ထိုင်ခုံတစ်လုံး၊ ပန်းကုံးတစ်ကုံး၊ နားမှာ ပန်းနီတစ်ပွင့်။",
    p: "Three framed portraits side by side, each showing a different person seated on the same chair "
      + "wearing the same garland with the same red flower behind one ear, a name and a year beneath.",
    u: ["ဓာတ်ပုံတိုင်းမှာ လူတစ်ယောက်။ ထိုင်ခုံတစ်လုံး။ ပန်းကုံးတစ်ကုံး။",
        "နားမှာ ပန်းနီတစ်ပွင့်။ အောက်မှာ နာမည်နဲ့ ခုနှစ်။",
        "တချို့က လူငယ်ယောက်ျားတွေ။ တချို့က မိန်းမတွေ။ တစ်ပုံမှာ ဆံပင်ဖြူနေတဲ့ အဘိုးတစ်ယောက်တောင် ပါတယ်။",
        "အားလုံး ပြုံးနေကြတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "Third From the End", l: "ပန်းစောင့်အိမ်", w: ["နန္ဒာ"],
    g: "နောက်ဆုံးကနေ သုံးပုံမြောက်မှာ နန္ဒာ့ပုံ။ ပြုံးနေတယ်။ မျက်လုံးက ဖောင်းနေတယ်။",
    p: "A single framed portrait: a young woman seated with the garland and the red flower, smiling — "
      + "but her eyes are visibly swollen from crying.",
    u: ["နောက်ဆုံးကနေ သုံးပုံမြောက်မှာ နန္ဒာ။",
        "ကျွန်တော် အဲဒီပုံရှေ့မှာ ရပ်လိုက်တယ်။",
        "ဓာတ်ပုံထဲက သူ့အပြုံးက လှတယ်။",
        "မျက်လုံးတွေကတော့ ဖောင်းနေတယ်။ ငိုထားတဲ့မျက်လုံး။"],
    c: [[3, "bigstinger"]] },

  { t: "Where Is She Now", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက နံရံကိုပဲ ကြည့်နေတယ်။ ဖြေတယ်။",
    p: "An old woman standing looking at the wall of portraits rather than at the man asking her a "
      + "question, her face composed.",
    u: ["“သူ အခု ဘယ်မှာနေလဲ”",
        "အဘွားက နံရံကိုပဲ ကြည့်နေတယ်။ “နောက်မှာ”"] },

  { t: "The Garden", l: "ပန်းခြံ",
    g: "အိမ်နောက်က ပန်းခြံ။ ပန်းဖြူပင်တွေ လူခါးလောက်။ မြေဘောင်တွေ တန်းညီစီထား။ လေမတိုက်ဘူး။",
    p: "A large walled garden of waist-high white flowering shrubs in long parallel raised earth beds, "
      + "seen from a back doorway in blazing sun. Absolutely nothing is moving.",
    u: ["အိမ်နောက်ဘက်ကို ကျွန်တော် လှမ်းကြည့်တယ်။ ပန်းခြံ။",
        "ပန်းဖြူပင်တွေက လူခါးလောက် မြင့်တယ်။ မြေဘောင်တွေကို တန်းညီစီထားတယ်။",
        "လေမတိုက်ဘူး။ တစ်ခြံလုံး ငြိမ်နေတယ်။"],
    c: [[2, "stinger"]] },

  { t: "My Daughter", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက နန္ဒာ့ဓာတ်ပုံပေါ်က ဖုန်ကို လက်နဲ့ ပွတ်လိုက်တယ်။",
    p: "An old woman's hand wiping dust from the glass of a framed portrait with her fingers, very "
      + "gently, the young woman's face beneath it.",
    u: ["“သူက အဘွားနဲ့ ဘာတော်လဲ” “သမီး”",
        "ကျွန်တော် ပြန်လှည့်ကြည့်တယ်။",
        "အဘွားက နန္ဒာ့ဓာတ်ပုံပေါ်က ဖုန်ကို လက်နဲ့ ပွတ်လိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "I Combed Her Hair That Day", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွား ရိုးရိုးအသံနဲ့ ပြောနေတယ်။ မျက်ရည် မကျဘူး။",
    p: "Close on an old woman's face in flat window light, speaking plainly with no visible emotion "
      + "at all, which is worse than tears.",
    u: ["“ဒီပုံရိုက်တဲ့နေ့က ငါပဲ ဆံပင်ဖြီးပေးခဲ့တာ”",
        "သူ့အသံက ရိုးရိုးပဲ။",
        "အဲဒီရိုးရိုးအသံကြောင့် ကျွန်တော် ပိုမေးမရတော့ဘူး။",
        "“ပန်းနီကိုလည်း ငါပဲ ပန်ပေးခဲ့တာ”"] },

  { t: "A Brick in the Bed", l: "ပန်းခြံ",
    g: "မြေဘောင်တစ်ခုမှာ အုတ်ပြားတစ်ချပ်။ နန္ဒာ။ ဓာတ်ပုံအောက်က ခုနှစ်နဲ့ အတူတူ။",
    p: "A plain brick slab set flat into the earth at the head of one flower bed, a name and a year "
      + "cut into it, white blossoms crowding over its edges.",
    u: ["အဘွားက ကျွန်တော့်ကို အိမ်နောက် တံခါးဝအထိ ခေါ်သွားတယ်။",
        "ပန်းခြံထဲက မြေဘောင်တစ်ဘောင်မှာ အုတ်ပြားတစ်ချပ် ရှိတယ်။",
        "နန္ဒာ။ ဓာတ်ပုံအောက်က ခုနှစ်နဲ့ အတူတူ။"],
    c: [[2, "bigstinger"]] },

  { t: "One Person for One Year of Flowers", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွား ပြောနေတယ်။ ပန်းခြံနောက်ခံ။",
    p: "An old woman standing at the edge of the flower garden in hard sun, speaking without looking "
      + "at the man beside her, the beds stretching away behind.",
    u: ["ကျွန်တော့်နောက်ကျောမှာ ချွေးတွေ စီးကျလာတယ်။",
        "“အဘွား… ဒါက…” “ပန်းတစ်နှစ်ခံဖို့ လူတစ်ယောက်”",
        "အဘွားက ပြောတယ်။ “အဲဒီလိုပဲ သင်ပေးထားကြတာ”"],
    c: [[1, "bigstinger"]] },

  { t: "Who Taught You", l: "ပန်းခြံ",
    g: "ပန်းခြံထဲက မြေဘောင်တွေ အများကြီး။ တန်းစီနေတယ်။",
    p: "A low wide view along the rows of raised beds, dozens of them running to the garden wall, each "
      + "one the same size and shape, planted identically.",
    u: ["“ဘယ်သူက သင်ပေးတာလဲ”",
        "“ငါတို့အရင် လူကြီးတွေ။ သူတို့အရင်ကလည်း ဒီလိုပဲတဲ့”"] },

  { t: "The Length of a Person", l: "ပန်းခြံ",
    g: "မြေဘောင်တစ်ခုကို အနီးကပ်။ အလျားနဲ့အနံက လူတစ်ယောက်အတွက် အတော်ပဲ။",
    p: "One raised earth bed photographed from directly above, its proportions unmistakably those of "
      + "a grave, white flowers growing along its whole length.",
    u: ["ကျွန်တော် ပန်းခြံကို ပြန်ကြည့်တယ်။ မြေဘောင်တွေက အများကြီး။",
        "အရင်က ပန်းစိုက်ဖို့ လုပ်ထားတဲ့ဘောင်တွေလို့ ထင်ခဲ့တာ။",
        "အခုတော့ အလျားနဲ့ အနံကို သတိထားမိလာတယ်။",
        "လူတစ်ယောက် လှဲဖို့ အတော်ပဲ။"],
    c: [[3, "bigstinger"]] },

  { t: "A Cough From the Earth", l: "ပန်းခြံ",
    g: "ငှက်တစ်ကောင် ခြံထဲဆင်းလာပြီး မြေကို နှုတ်သီးနဲ့ ထိုးတယ်။ မြေအောက်ကနေ ချောင်းဆိုးသံ ထွက်လာတယ်။",
    p: "A small bird landed on the bare earth between flower stems, head down, mid-peck — and the "
      + "soil directly beneath it disturbed as if something under it had moved.",
    u: ["“သဇင်က…” အဘွား ခေါင်းငုံ့လိုက်တယ်။",
        "အဲဒီခဏမှာ ငှက်တစ်ကောင် ခြံထဲဆင်းလာတယ်။",
        "ပန်းပင်အောက်က မြေကို နှုတ်သီးနဲ့ တစ်ချက် ထိုးတယ်။",
        "မြေဘောင်ထဲကနေ ချောင်းခြောက်ဆိုးသံ ထွက်လာတယ်။ တစ်ချက်ပဲ။"],
    c: [[3, "bigstinger"]] },

  { t: "You Hear It More at Night", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "ငှက် ပျံထွက်သွားတယ်။ ကျွန်တော် နောက်ဆုတ်တယ်။ အဘွားက မတုန်လှုပ်ဘူး။",
    p: "A bird breaking upward out of frame in a blur of wings while an old woman stands entirely "
      + "unmoved beside the bed, hands folded.",
    u: ["ငှက်က ပျံထွက်သွားတယ်။ ကျွန်တော်လည်း နောက်ကို တစ်လှမ်းဆုတ်မိတယ်။",
        "အဘွားက မတုန်လှုပ်ဘူး။ အဲဒီအသံကို ကြားဖူးနေကျလိုပဲ။",
        "“ညဘက်ဆို ပိုကြားရတယ်” လို့ ပြောတယ်။"],
    c: [[2, "heartbeat"]] },

  { t: "I Have to Tell the Police", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "ဖုန်းထုတ်လိုက်တယ်။ အဘွားက မတားဘူး။",
    p: "A phone pulled out and held up in the garden in full sun, an old woman visible behind it "
      + "making no move to stop him.",
    u: ["“ရဲကို ပြောရမယ်” ကျွန်တော် ဖုန်းထုတ်လိုက်တယ်။",
        "အဘွားက မတားဘူး။ “ပြော”",
        "သူ့စကားကြောင့် ကျွန်တော် ပြန်ကြည့်မိတယ်။",
        "“နန္ဒာတုန်းက ဘာလို့ မပြောခဲ့တာလဲ”"] },

  { t: "My Grandson Lives Here Too", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွားရဲ့ မျက်နှာ တင်းသွားတယ်။",
    p: "An old woman's face hardening, jaw set, looking directly at camera for the first time.",
    u: ["အဘွားရဲ့ မျက်နှာ တင်းသွားတယ်။",
        "ကျွန်တော် မေးတာ ကြမ်းမှန်းသိပေမယ့် ပြန်မရုပ်သိမ်းနိုင်ဘူး။",
        "အဘွားက ပြောတယ်။",
        "“တစ်ရွာလုံးမှာ ငါ့မြေးလည်း နေတယ်။ ငါ့သားလည်း နေတယ်။ ရေခမ်းရင် အကုန်သေမယ်လို့ သူတို့ပြောတယ်”"] },

  { t: "So I Got My Daughter Ready", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွား လက်နှစ်ဖက်ကို ပွတ်နေတယ်။ မျက်ရည် မကျဘူး။",
    p: "An old woman's weathered hands rubbing slowly over one another, close, the flower beds soft "
      + "behind them.",
    u: ["“အဲဒါနဲ့ သမီးကို…” “အေး” အဘွားက ဖြတ်ပြောတယ်။",
        "“အဲဒါနဲ့ ငါ့သမီးကို ငါ ပြင်ပေးခဲ့တယ်”",
        "သူ မျက်ရည်မကျဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Will You Come With Me, Mother", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွား ပြောနေတယ်။ မျက်နှာက ငြိမ်နေတယ်။",
    p: "Close on an old woman's face, absolutely still, the light very bright and unkind on it.",
    u: ["“အဲဒီနေ့က သူက ငါ့ကို တစ်ခွန်းပဲ မေးတယ်။ အမေပါ လိုက်လာမှာလားတဲ့”",
        "အဘွားက လက်နှစ်ဖက်ကို ပွတ်နေတယ်။",
        "“ငါက လိုက်လာမယ်လို့ ပြောခဲ့တယ်”"],
    c: [[2, "bigstinger"]] },

  { t: "One Bar", l: "ပန်းခြံ",
    g: "ဖုန်းမျက်နှာပြင်။ လိုင်းတစ်တိုင်ပဲ ရှိတယ်။",
    p: "A phone screen in bright sunlight showing a single bar of signal, a photo upload part-way "
      + "through, the garden reflected faintly in the glass.",
    u: ["ကျွန်တော် ဖုန်းမျက်နှာပြင်ကို ပြန်ကြည့်လိုက်တယ်။ လိုင်းတစ်တိုင်။",
        "မြို့မှာနေတဲ့ ကျွန်တော့်သူငယ်ချင်းဆီ လိပ်စာနဲ့ စာပို့လိုက်တယ်။ ပန်းခြံ၊ ဓာတ်ပုံနံရံ၊ နာမည်ပြားတွေ ရိုက်ပို့တယ်။",
        "စာတစ်ချို့က ချက်ချင်းမထွက်ဘူး။",
        "နောက်တော့ တစ်ပုံချင်း ပို့ပြီးကြောင်း ပေါ်လာတယ်။"] },

  { t: "If You Cannot Reach Me", l: "ပန်းခြံ",
    g: "ဖုန်းမှာ စာပို့ပြီးကြောင်း အမှတ်တွေ။",
    p: "A phone screen showing a sent message thread with several image thumbnails delivered, held "
      + "low and out of sight against a thigh.",
    u: ["ရဲကို သတင်းပေးဖို့၊ ကျွန်တော်နဲ့ ဆက်သွယ်မရရင် ဒီနေရာကို လာရှာဖို့ ပြောထားလိုက်တယ်။"] },

  { t: "Did You Find My Photograph", l: "ပန်းခြံ", w: ["နန္ဒာ"],
    g: "နန္ဒာက နေရောင်အပြည့်ကျနေတဲ့ ခြံလမ်းမှာ ရပ်နေတယ်။ နေ့ခင်းဆယ့်တစ်နာရီ။",
    p: "A young woman standing in the middle of a garden path in full unforgiving midday sun, casting "
      + "a completely normal shadow, entirely solid and ordinary.",
    u: ["အဲဒီအချိန် နောက်က အသံကြားရတယ်။",
        "“ကျွန်မပုံ တွေ့ပြီလား” နန္ဒာ။",
        "နေ့ခင်းဆယ့်တစ်နာရီ။",
        "သူက နေရောင်အပြည့်ကျနေတဲ့ ခြံလမ်းမှာ ရပ်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Her Feet Are on the Ground", l: "ပန်းခြံ", w: ["နန္ဒာ"],
    g: "သူ့ခြေထောက်။ ဖိနပ်မပါဘူး။ မြေကြီးပေါ်မှာ သာမန်လူလိုပဲ ရပ်နေတယ်။",
    p: "A woman's bare feet planted flat on hot dry earth, toes slightly dusty, a hard black shadow "
      + "beneath them. Completely, mundanely physical.",
    u: ["ကျွန်တော် သူ့ခြေထောက်ကို ကြည့်မိတယ်။ ဖိနပ်မပါဘူး။",
        "လွင့်နေတာလည်း မဟုတ်ဘူး။",
        "မြေကြီးပေါ်မှာ သာမန်လူတစ်ယောက်လို ရပ်နေတာ။",
        "အဲဒါက ပိုကြောက်ဖို့ကောင်းတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "In Case They Think I Was Happy", l: "ပန်းခြံ", w: ["နန္ဒာ", "အဘွား"],
    g: "အဘွားက နန္ဒာ့မျက်နှာကို မကြည့်ရဲဘူး။ နန္ဒာက အိမ်ထဲက ဓာတ်ပုံကို လှမ်းကြည့်တယ်။",
    p: "An old woman with her face deliberately turned away, and beyond her a young woman looking "
      + "past her into the house toward the wall of portraits.",
    u: ["အဘွားကတော့ သူ့မျက်နှာကို မကြည့်ရဲဘူး။",
        "“အဟောင်းပုံကို ဘာလို့မကြိုက်တာလဲ” ကျွန်တော် မေးမိတယ်။",
        "နန္ဒာက အိမ်ထဲက ဓာတ်ပုံကို လှမ်းကြည့်တယ်။",
        "“ကျွန်မ ပျော်နေတယ်လို့ ထင်ကြမှာစိုးလို့”"],
    c: [[3, "bigstinger"]] },

  { t: "The Last Row", l: "ပန်းခြံ",
    g: "နောက်ဆုံးတန်းမှာ မြေကျင်းတစ်ခု တူးထားတယ်။ ဘေးမှာ ပန်းခြင်းတွေ။",
    p: "A freshly dug rectangular pit in the last row of the garden, clean-edged, with baskets of "
      + "white flowers stacked beside it in the sun.",
    u: ["သူက ပန်းခြံထဲကို လက်ညှိုးထိုးတယ်။",
        "နောက်ဆုံးတန်းမှာ မြေကျင်းတစ်ခု တူးထားတယ်။",
        "ကျင်းဘေးမှာ ပန်းဖြူခြင်းတွေ စီထားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Mat and a Small Pillow", l: "ပန်းခြံ",
    g: "ကျင်းထဲမှာ အဖြူရောင်ဖျာတစ်ချပ်နဲ့ ခေါင်းအုံးငယ်တစ်လုံး။",
    p: "Looking down into the pit: a clean white mat laid neatly along the bottom and a small pillow "
      + "placed at one end. Nothing else. The care taken is the horror.",
    u: ["အဖြူရောင်ဖျာတစ်ချပ်။ ခေါင်းအုံးငယ်တစ်လုံး။",
        "ကျွန်တော် အရင်ရောက်ကတည်းက မြင်နေပေမယ့် ဘာအတွက်လဲ မသိခဲ့ဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "Two O'Clock", l: "ပန်းခြံ", w: ["နန္ဒာ"],
    g: "လက်ပတ်နာရီကို ကြည့်နေတယ်။ တစ်နာရီကျော်ပဲ လိုတော့တယ်။",
    p: "A wristwatch checked in bright sun, the hands clearly showing just before one o'clock, the "
      + "flower beds out of focus beyond.",
    u: ["“ဒီနေ့ ဘယ်အချိန်လဲ” “မွန်းလွဲနှစ်နာရီ” နန္ဒာက ဖြေတယ်။",
        "ကျွန်တော် နာရီကြည့်လိုက်တယ်။ တစ်နာရီကျော်ပဲ လိုတော့တယ်။"],
    c: [[1, "heartbeat"]] },

  { t: "You Are the One They Invited", l: "ပန်းခြံ", w: ["နန္ဒာ"],
    g: "နန္ဒာက ကျွန်တော့်လည်ပင်းက ကင်မရာကို ကြည့်တယ်။",
    p: "A young woman's eyes dropping to the camera hanging on a strap at a man's chest, considering "
      + "it, in flat bright light.",
    u: ["“ကယ်လို့ရသေးလား”",
        "ဒီမေးခွန်းကို ဘယ်သူ့ကို မေးတာလဲ ကျွန်တော် မသိဘူး။",
        "နန္ဒာက ကျွန်တော့်လည်ပင်းက ကင်မရာကို ကြည့်တယ်။",
        "“ရှင်က သူတို့ခေါ်ထားတဲ့လူ။ သဇင်နားကို ရှင်သွားလို့ရတယ်”"],
    c: [[3, "bigstinger"]] },

  { t: "The Ledger", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက သစ်သားဗီရိုကို ဖွင့်တယ်။ အထဲမှာ စာရင်းစာအုပ်တစ်အုပ်။",
    p: "An old woman opening a wooden cabinet in a sunlit room and lifting out a thick handwritten "
      + "ledger, its cover soft with age.",
    u: ["“သူတို့က ပန်းက ရွေးတာလို့ ပြောတယ်” နန္ဒာက ပြန်မဖြေဘူး။",
        "အဘွားကတော့ တံခါးနောက်က သစ်သားဗီရိုကို ဖွင့်လိုက်တယ်။",
        "အထဲမှာ စာရင်းစာအုပ်တစ်အုပ်။ ခုနှစ်အလိုက် နာမည်တွေ။"] },

  { t: "Debt Cleared", l: "ပန်းစောင့်အိမ်",
    g: "စာရင်းစာအုပ်စာမျက်နှာ။ သဇင့်နာမည်၊ အဖေ့နာမည်၊ ချေးငွေပမာဏ၊ ပြီးတော့ အနီနဲ့ ခြစ်ထားတဲ့ စကားလုံးနှစ်လုံး။",
    p: "An open ledger page in hard sunlight: columns of handwritten names, amounts, and beside one "
      + "recent entry two words struck through in red ink. Deliberately not legible.",
    u: ["ဒီနှစ်စာမျက်နှာမှာ သဇင်ရဲ့နာမည်ကို ကျွန်တော် တွေ့တယ်။",
        "ဘေးမှာ အဖေ့နာမည်။ ချေးငွေပမာဏ။",
        "ပြီးတော့ အနီနဲ့ ခြစ်ထားတဲ့ စကားလုံးနှစ်လုံး။ ကြွေးကျေ။"],
    c: [[2, "bigstinger"]] },

  { t: "The Flower Cannot Say a Name", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက ခေါင်းခါတယ်။",
    p: "An old woman shaking her head slowly over an open ledger, her finger still resting on the "
      + "red-struck entry.",
    u: ["ကျွန်တော် အဘွားကို ကြည့်တယ်။ “ပန်းက ရွေးတာ မဟုတ်ဘူး?”",
        "အဘွားက ခေါင်းခါတယ်။ “ပန်းက နာမည် မပြောတတ်ဘူး”"],
    c: [[1, "bigstinger"]] },

  { t: "He Was Waiting", l: "မဏ္ဍပ်", w: ["ဦးဘသိန်း"],
    g: "မဏ္ဍပ်မှာ ဦးဘသိန်း စောင့်နေတယ်။ ကျွန်တော့်ဖိနပ်ကို ကြည့်တယ်။ ရွှံ့ပေနေတယ်။",
    p: "The headman standing waiting at the pavilion, his eyes dropped to the muddy shoes of the man "
      + "arriving in front of him.",
    u: ["ကျွန်တော် မဏ္ဍပ်ကို ပြန်ရောက်တော့ ဦးဘသိန်းက စောင့်နေတယ်။",
        "“ဘယ်သွားနေတာလဲ ဆရာလေး” “ပန်းခြံဘက် အလှပုံတွေ သွားရိုက်တာ”",
        "သူ ကျွန်တော့်ဖိနပ်ကို ကြည့်တယ်။ ရွှံ့တွေ ပေနေတယ်။"],
    c: [[2, "stinger"]] },

  { t: "Not Touching. Holding.", l: "မဏ္ဍပ်", w: ["ဦးဘသိန်း"],
    g: "သူ့လက်က လက်မောင်းပေါ် ရောက်လာတယ်။ ဒီတစ်ခါ ကိုင်ထားတာ။",
    p: "An older man's hand closed firmly around a younger man's forearm — gripping, not resting — "
      + "both still smiling for the crowd around them.",
    u: ["“အဲဒီဘက်က ပုံတွေ မလိုဘူးနော်။ ပွဲပုံတွေပဲ ရိုက်ပါ”",
        "သူ့လက်က ကျွန်တော့်လက်မောင်းပေါ် ရောက်လာတယ်။",
        "ဒီတစ်ခါ ထိထားတာ မဟုတ်ဘူး။ ကိုင်ထားတာ။",
        "“ရိုက်ထားပြီးရင်လည်း ဖျက်ပေးပါ”"],
    c: [[2, "bigstinger"]] },

  { t: "He Doesn't Know About the Phone", l: "မဏ္ဍပ်",
    g: "ကင်မရာမျက်နှာပြင်မှာ ပုံနှစ်ပုံ ဖျက်ပြနေတယ်။",
    p: "A camera's rear screen held up so another man can watch, a delete confirmation showing, a "
      + "phone still hidden in the photographer's other pocket.",
    u: ["ကျွန်တော် ကင်မရာကို ဖွင့်ပြတယ်။",
        "ပန်းခြံထဲက အလှပုံနှစ်ပုံကို သူ့ရှေ့မှာ ဖျက်လိုက်တယ်။",
        "ဖုန်းနဲ့ ရိုက်ပို့ထားတဲ့ပုံတွေကိုတော့ သူ မသိဘူး။"] },

  { t: "Can I Photograph Her Now", l: "မဏ္ဍပ်",
    g: "ဦးဘသိန်းက ခွင့်ပြုတယ်။ အချိန်မကြာစေနဲ့လို့ ပြောတယ်။",
    p: "Two men facing each other under the pavilion in bright light, one asking, one assenting with "
      + "a small tight nod.",
    u: ["“ပန်းစောင့်မယ် တစ်ကိုယ်တော်ပုံကို အခု ရိုက်လို့ရမလား” လို့ မေးလိုက်တယ်။",
        "“ရတယ်။ အချိန်မကြာစေနဲ့”"] },

  { t: "Three Garlands", l: "မဏ္ဍပ်", w: ["သဇင်"],
    g: "သဇင်ကို အမျိုးသမီးနှစ်ယောက် ခေါ်လာတယ်။ လည်ပင်းမှာ ပန်းကုံးသုံးကုံး။ လက်ကောက်ဝတ်မှာလည်း ပတ်ထားတယ်။",
    p: "A young girl walked forward between two women, three heavy garlands on her neck and more "
      + "wound around both wrists, her arms held slightly away from her body.",
    u: ["သဇင်ကို အမျိုးသမီးနှစ်ယောက် ခေါ်လာတယ်။",
        "သူ့လည်ပင်းမှာ ပန်းကုံးသုံးကုံး။",
        "လက်ကောက်ဝတ်နှစ်ဖက်မှာလည်း ပန်းကုံးတွေ ပတ်ထားတယ်။"] },

  { t: "The Cord Inside the Flowers", l: "မဏ္ဍပ်",
    g: "ပန်းတွေကြားမှာ ချည်ကြိုးထူထူ ပါနေတယ်။ လက်နှစ်ဖက်ကို တွဲချည်ဖို့ ပြင်ထားတာ။",
    p: "Extreme close-up of garlands wound around a thin wrist: hidden among the blossoms is a thick "
      + "cord, doubled and pre-knotted, clearly meant to bind rather than decorate.",
    u: ["ကျွန်တော် မြင်လိုက်တယ်။ ပန်းတွေကြားမှာ ချည်ကြိုးထူထူ ပါနေတယ်။",
        "အလှဆင်ထားတာတင် မဟုတ်ဘူး။",
        "သူ့လက်နှစ်ဖက်ကို တွဲချည်ဖို့ ပြင်ထားတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "Like the Old Photographs", l: "မဏ္ဍပ်", w: ["ဦးဘသိန်း"],
    g: "ကျွန်တော် ပန်းစောင့်အိမ်ဝရန်တာဘက်ကို လက်ညှိုးထိုးပြတယ်။ ဦးဘသိန်းက စိုက်ကြည့်တယ်။",
    p: "A photographer pointing away toward the verandah of the flower-keeper's house while the "
      + "headman stares at him, no longer smiling.",
    u: ["ကျွန်တော် နေရောင်ဘက်ကို လက်ညှိုးထိုးလိုက်တယ်။",
        "“ဒီဘက်က အလင်းပြင်းနေတယ်။ ပန်းစောင့်အိမ်ဝရန်တာမှာ ရိုက်ရင် လှမယ်။ ပုံဟောင်းတွေလိုပဲ”",
        "ဦးဘသိန်းက ကျွန်တော့်ကို စိုက်ကြည့်တယ်။",
        "“ပုံဟောင်းတွေ မြင်ခဲ့တယ်ပေါ့”"],
    c: [[3, "bigstinger"]] },

  { t: "Why Everyone Here Smiles", l: "မဏ္ဍပ်", w: ["နေဝင်း"],
    g: "ကျွန်တော် ပြုံးရတယ်။ ပထမဆုံးအကြိမ်။",
    p: "A close portrait of the photographer producing a wide, entirely false smile, his eyes not "
      + "participating in it at all — matching every other face in the village.",
    u: ["ကျွန်တော် ပြုံးရတယ်။",
        "ပထမဆုံး ဒီရွာကလူတွေ ဘာလို့ အမြဲပြုံးနေရလဲ ကျွန်တော် နားလည်သွားတယ်။",
        "မပြုံးရင် ကိုယ်ကြောက်နေတာ ပေါ်သွားမယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "On the Verandah", l: "ပန်းစောင့်အိမ်", w: ["သဇင်", "အဘွား"],
    g: "သဇင်ကို ဝရန်တာမှာ ထိုင်ခိုင်းတယ်။ အဘွားက ဆံပင်ပြင်ပေးပြီး ပန်းနီ ပန်ပေးတယ်။",
    p: "A girl seated on a wooden verandah in the same pose as every portrait on the wall, an old "
      + "woman leaning in to tuck a single red flower behind her ear.",
    u: ["သဇင်ကို ပန်းစောင့်အိမ်ဝရန်တာမှာ ထိုင်ခိုင်းတယ်။",
        "အမျိုးသမီးနှစ်ယောက်က လှေကားနားမှာ ရပ်နေကြတယ်။",
        "အဘွားက အိမ်ထဲက ထွက်လာပြီး သဇင်ရဲ့ဆံပင်ကို ပြင်ပေးတယ်။ နားမှာ ပန်းနီ ပန်ပေးတယ်။"],
    c: [[2, "stinger"]] },

  { t: "This Time I Will Come", l: "ပန်းစောင့်အိမ်", w: ["သဇင်", "အဘွား"],
    g: "သဇင်က အဘွားကို မော့ကြည့်တယ်။ အဘွားက တိုးတိုးပြောတယ်။",
    p: "A girl looking up sharply at the old woman bent over her, the woman's mouth close to her ear, "
      + "both faces caught in hard verandah light.",
    u: ["သဇင်က အဘွားကို မော့ကြည့်တယ်။",
        "အဘွားက တိုးတိုးပြောတယ်။",
        "“ဒီတစ်ခါ ငါလိုက်မယ်”"],
    c: [[2, "bigstinger"]] },

  { t: "Can You Stand", l: "ပန်းစောင့်အိမ်", w: ["နေဝင်း", "သဇင်"],
    g: "ကင်မရာမျက်နှာပြင်ကို ပြသလိုလုပ်ပြီး တိုးတိုးမေးနေတယ်။",
    p: "A photographer crouched beside a seated girl, angling his camera's screen toward her as "
      + "though showing her the shot, speaking without moving his lips much.",
    u: ["ကျွန်တော် ကင်မရာကို မြှောက်လိုက်တယ်။",
        "“အန်တီတို့ နည်းနည်းဘေးဖယ်ပေးပါ။ ပုံထဲ ပါနေတယ်” သူတို့ ရွှေ့ကြတယ်။",
        "ကျွန်တော် ပုံတစ်ပုံ ရိုက်လိုက်တယ်။",
        "ပြီးတော့ သဇင်နားကို သွားပြီး ကင်မရာမျက်နှာပြင် ပြသလို လုပ်လိုက်တယ်။",
        "“ထနိုင်လား” တိုးတိုးမေးတယ်။"] },

  { t: "Will My Mother Let Me Go", l: "ပန်းစောင့်အိမ်", w: ["သဇင်"],
    g: "သဇင်ရဲ့ မျက်လုံးတွေ ကျွန်တော့်မျက်နှာပေါ်မှာ ရပ်နေတယ်။ မယုံနိုင်သလို မေးတယ်။",
    p: "A girl's face looking up, eyes fixed and searching, an expression of disbelief rather than "
      + "hope, the red flower bright at her ear.",
    u: ["သူ ခေါင်းညိတ်တယ်။ “နောက်ဖေးကနေ ထွက်မယ်။ မပြေးနဲ့ဦး”",
        "သဇင်ရဲ့ မျက်လုံးတွေ ကျွန်တော့်မျက်နှာပေါ်မှာ ရပ်နေတယ်။",
        "ပြီးတော့ မယုံနိုင်သလို မေးတယ်။ “အမေက လွှတ်မှာလား”",
        "ကျွန်တော် အဖြေမပေးနိုင်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "It Is Time", l: "ပန်းစောင့်အိမ်", w: ["ဦးဘသိန်း"],
    g: "လှေကားဘက်က ဦးဘသိန်းရဲ့အသံ။ သူ့နောက်မှာ အဖြူဝတ်လူတွေ ပန်းခြင်းကိုယ်စီနဲ့။",
    p: "The headman at the foot of the verandah steps with a crowd of villagers in white behind him, "
      + "each carrying a basket of white flowers, in blazing afternoon sun.",
    u: ["အဲဒီအချိန်မှာပဲ လှေကားဘက်က ဦးဘသိန်းရဲ့အသံ ထွက်လာတယ်။ “အချိန်ရပြီ”",
        "သူ့နောက်မှာ လူတွေ လိုက်လာကြတယ်။ အဖြူဝတ်ထားတဲ့ လူတွေ။",
        "ပန်းခြင်းတွေ ကိုယ်စီနဲ့။"],
    c: [[0, "bigstinger"]] },

  { t: "Children Eating Ice", l: "ပန်းစောင့်အိမ်",
    g: "မဏ္ဍပ်ဘက်က ဆိုင်းသံ။ လမ်းဘေးမှာ ကလေးနှစ်ယောက် ရေခဲချောင်းစားနေတယ်။",
    p: "Two small children sitting on a kerb eating ice lollies in the sun, entirely unbothered, with "
      + "the crowd of white-clad adults gathering in the background behind them.",
    u: ["မဏ္ဍပ်ဘက်က ဆိုင်းသံ စလာတယ်။",
        "နေ့လယ်နေရောင်က ဝရန်တာတစ်ဝက်အထိ ကျနေတယ်။ လမ်းဘေးမှာ ကလေးနှစ်ယောက်က ရေခဲချောင်းစားနေကြတယ်။"] },

  { t: "She Does Not Want to Go", l: "ပန်းစောင့်အိမ်", w: ["နေဝင်း", "ဦးဘသိန်း"],
    g: "ဦးဘသိန်းက သဇင်ကို လက်လှမ်းပေးတယ်။ ကျွန်တော် ရှေ့ ဝင်ရပ်လိုက်တယ်။",
    p: "A man stepping bodily between an outstretched hand and a seated girl on the verandah, the "
      + "crowd below going still.",
    u: ["ဦးဘသိန်းက သဇင်ကို လက်လှမ်းပေးတယ်။ “လာ သမီး”",
        "ကျွန်တော် သူ့ရှေ့ ဝင်ရပ်လိုက်တယ်။ “သူ မသွားချင်ဘူး”",
        "ပတ်ဝန်းကျင်က စကားသံတွေ ရပ်သွားတယ်။",
        "ဆိုင်းသံပဲ ဆက်မြည်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Village Matter", l: "ပန်းစောင့်အိမ်", w: ["ဦးဘသိန်း"],
    g: "ဦးဘသိန်းက အေးဆေးပဲ ပြောတယ်။ ကျွန်တော်က အသံကျယ်ကျယ် ပြန်ပြောတယ်။",
    p: "The headman speaking calmly and reasonably up at the verandah, one hand open, the crowd "
      + "silent behind him and nobody looking surprised.",
    u: ["ဦးဘသိန်းက ကျွန်တော့်ကို ကြည့်တယ်။ “ဒါ ရွာကိစ္စပါ ဆရာလေး”",
        "“လူတစ်ယောက်ကို မြှုပ်မယ့်ကိစ္စ”",
        "ကျွန်တော် အသံကျယ်ကျယ် ပြောလိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Not One Surprised Face", l: "ပန်းစောင့်အိမ်",
    g: "လူတွေကြားက တစ်ယောက်က ကလေးနှစ်ယောက်ကို ခေါ်သွားတယ်။ ဘယ်သူမှ အံ့ဩမနေဘူး။",
    p: "A wide view of the assembled villagers hearing an accusation of murder: not one shocked face "
      + "anywhere, while at the edge of frame someone quietly leads two children away.",
    u: ["လူတွေကြားက တစ်ယောက်က ကလေးနှစ်ယောက်ကို အဝေးခေါ်သွားတယ်။",
        "အံ့ဩတဲ့မျက်နှာ တစ်ခုမှ မတွေ့ဘူး။",
        "အဲဒါကို မြင်ရတာက ဦးဘသိန်းပြောသမျှထက် ပိုဆိုးတယ်။",
        "အားလုံး သိနေကြတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "I Already Sent It", l: "ပန်းစောင့်အိမ်", w: ["နေဝင်း", "ဦးဘသိန်း"],
    g: "ကျွန်တော် ဖုန်းကို မြှောက်ပြလိုက်တယ်။ ဦးဘသိန်းရဲ့ မျက်နှာ ပြောင်းသွားတယ်။",
    p: "A phone held up high above a crowd like a weapon, and in the foreground the headman's face "
      + "changing — the public warmth falling off it completely.",
    u: ["“ရဲကို အကြောင်းကြားထားပြီးပြီ” ကျွန်တော် ဖုန်းကို မြှောက်ပြလိုက်တယ်။",
        "“စာရင်းစာအုပ်ပုံတွေလည်း ပို့ထားတယ်”",
        "ဦးဘသိန်းရဲ့ မျက်နှာ ပြောင်းသွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "What Will They Do to Your Father", l: "ပန်းစောင့်အိမ်", w: ["သဇင်"],
    g: "သဇင်ရဲ့အမေ ရှေ့ထွက်လာတယ်။ ကျွန်တော့်ကို မကြည့်ဘူး။ သမီးကိုပဲ ကြည့်တယ်။",
    p: "A mother pushing to the front of the crowd and looking only at her daughter on the verandah, "
      + "her face pleading, ignoring everyone else entirely.",
    u: ["သဇင်ရဲ့အမေက လူတွေကြားကနေ ရှေ့ထွက်လာတယ်။",
        "ကျွန်တော့်ကို မကြည့်ဘူး။ သဇင်ကိုပဲ ကြည့်တယ်။",
        "“သမီး… နင့်အဖေကို သူတို့ ဘယ်လိုလုပ်မလဲ”"],
    c: [[2, "bigstinger"]] },

  { t: "And What Will They Do to Me", l: "ပန်းစောင့်အိမ်", w: ["သဇင်"],
    g: "သဇင်က ကျွန်တော့်အင်္ကျီကို ဆုပ်ထားတယ်။ ငိုရင်း ပြောတယ်။",
    p: "A girl's fist closed tight in the fabric of a man's shirt, and above it her face, crying and "
      + "speaking at the same time.",
    u: ["သဇင်ရဲ့ လက်က ကျွန်တော့်အင်္ကျီကို ပိုတင်းတင်း ဆုပ်လာတယ်။",
        "သူက ငိုရင်း ပြောတယ်။",
        "“သမီးကိုလည်း ဘယ်လိုလုပ်မှာလဲ အမေ”",
        "ဘယ်သူမှ မဖြေဘူး။"],
    c: [[3, "bigstinger"]] },

  { t: "Go Out the Back", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက တံခါးကို ဖွင့်ပေးလိုက်တယ်။",
    p: "An old woman swinging an interior door open and standing aside, one arm out, urgency in her "
      + "whole body for the first time.",
    u: ["ဦးဘသိန်းက ကျွန်တော့်ဖုန်းကို ဆွဲယူဖို့ လက်လှမ်းလာတယ်။",
        "ကျွန်တော် နောက်ဆုတ်လိုက်တယ်။",
        "သူနဲ့ပါလာတဲ့ လူနှစ်ယောက် လှေကားပေါ်တက်လာတယ်။",
        "အဘွားက တံခါးကို ဖွင့်ပေးလိုက်တယ်။ “နောက်ကထွက်”"],
    c: [[3, "knock"]] },

  { t: "The Door Slams", l: "ပန်းစောင့်အိမ်",
    g: "အဘွားက တံခါးကို အတွင်းကနေ ပိတ်လိုက်တယ်။ တစ်ဖက်က ဆောင့်သံ။",
    p: "An interior door pushed shut and held by an old woman's back, the wood shuddering as "
      + "something hits it from the other side.",
    u: ["ကျွန်တော် သဇင်ကို ဆွဲပြီး အိမ်ထဲ ဝင်လိုက်တယ်။",
        "အဘွားက တံခါးကို အတွင်းကနေ ချက်ချင်း ပိတ်တယ်။",
        "တံခါးတစ်ဖက်က ဆောင့်သံ ထွက်လာတယ်။"],
    c: [[2, "knock"]] },

  { t: "Through the Garden", l: "ပန်းခြံ", w: ["နေဝင်း", "သဇင်"],
    g: "ပန်းခြံကို ဖြတ်ပြေးနေတယ်။ နေက ပူတယ်။ ပန်းတွေက ဖြူတယ်။",
    p: "Two people running along a narrow path between waist-high white flower beds in punishing "
      + "sunlight, garlands still swinging from the girl's wrists.",
    u: ["ကျွန်တော်တို့ အိမ်နောက်ကို ပြေးတယ်။",
        "ပန်းခြံကို ဖြတ်မှ နောက်လမ်းကို ရောက်မယ်။",
        "နေက ပူတယ်။ ပန်းတွေက ဖြူတယ်။"] },

  { t: "Don't Look. Keep Walking.", l: "ပန်းခြံ", w: ["သဇင်"],
    g: "မြေကျင်းထဲက ခေါင်းအုံးလေးကို မြင်တော့ သဇင်က ခြေထောက်ယိုင်သွားတယ်။",
    p: "A girl's legs buckling mid-stride beside the open pit, a man's arm catching her under the "
      + "shoulders, the small pillow visible below.",
    u: ["မြေကျင်းထဲက ခေါင်းအုံးလေးကို မြင်တော့ သဇင်က ရုတ်တရက် ခြေထောက်ယိုင်သွားတယ်။",
        "ကျွန်တော် သူ့ကို ထိန်းလိုက်ရတယ်။",
        "“မကြည့်နဲ့။ ဆက်လျှောက်”"],
    c: [[0, "bigstinger"]] },

  { t: "Block the Back Gate", l: "ပန်းခြံ",
    g: "နောက်က တံခါးပွင့်သံ။ လူတွေ ဝင်လာပြီ။",
    p: "Looking back across the flower beds toward the house: a doorway now full of people spilling "
      + "out into the garden.",
    u: ["နောက်မှာ တံခါးပွင့်သံ ကြားရတယ်။ လူတွေ ဝင်လာပြီ။",
        "ဦးဘသိန်း အော်တယ်။ “ခြံနောက်ပေါက် ပိတ်ထား!”"],
    c: [[1, "bigstinger"]] },

  { t: "Barred From Outside", l: "ပန်းခြံ", w: ["နေဝင်း"],
    g: "နောက်ပေါက် သစ်သားတံခါးကို အပြင်ကနေ ကန့်လန့်ချထားတယ်။ ပခုံးနဲ့ ဆောင့်တယ်။ မပွင့်ဘူး။",
    p: "A man throwing his shoulder against a solid wooden garden gate that will not move, the shadow "
      + "of an external bar visible through the gap between planks.",
    u: ["ကျွန်တော်တို့ နောက်ပေါက်ရောက်တော့ သစ်သားတံခါးတစ်ချပ်က အပြင်ဘက်ကနေ ကန့်လန့်ချထားတယ်။",
        "ကျွန်တော် ပခုံးနဲ့ ဆောင့်တယ်။ မပွင့်ဘူး။"] },

  { t: "The Cord Cuts", l: "ပန်းခြံ", w: ["သဇင်"],
    g: "သဇင်က လက်က ပန်းကုံးကို ဆွဲဖြုတ်နေတယ်။ ချည်ကြိုးက အသားကို ရှနေတယ်။",
    p: "A girl tearing garlands off her own wrist, the hidden cord beneath them drawing a raw red line "
      + "across the skin.",
    u: ["သဇင်က သူ့လက်က ပန်းကုံးကို ဆွဲဖြုတ်နေတယ်။",
        "ချည်ကြိုးက အသားကို ရှနေတယ်။",
        "နောက်က ခြေသံတွေ နီးလာတယ်။"],
    c: [[1, "stinger"]] },

  { t: "Nanda", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွားက သမီးရဲ့နာမည်ပြားရှေ့မှာ ဒူးထောက်နေတယ်။ လက်ထဲမှာ ပန်းညှပ်ကတ်ကြေး။",
    p: "An old woman kneeling in the earth at the head of one flower bed with a pair of garden shears "
      + "in her hand, the name brick in front of her knees.",
    u: ["အဲဒီအချိန် အဘွားရဲ့အသံ ကြားရတယ်။ “နန္ဒာ”",
        "အသံက မကျယ်ဘူး။ ဒါပေမယ့် ပန်းခြံတစ်ခုလုံး ကြားရသလိုပဲ။",
        "ကျွန်တော် လှည့်ကြည့်လိုက်တယ်။",
        "အဘွားက သမီးရဲ့နာမည်ပြားရှေ့မှာ ဒူးထောက်နေတယ်။ လက်ထဲမှာ ပန်းညှပ်ကတ်ကြေး။"],
    c: [[0, "bigstinger"]] },

  { t: "This Time I Am Not Looking Away", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွားက နန္ဒာ့မြေဘောင်ပေါ်က ပန်းပင်အရင်းကို ဖြတ်လိုက်တယ်။",
    p: "Shears closing on the thick main stem of a white flowering plant right at the soil line, an "
      + "old woman's face above them absolutely resolved.",
    u: ["“အမေ ဒီတစ်ခါ မကြည့်ဘဲ မနေတော့ဘူး”",
        "သူက နန္ဒာ့မြေဘောင်ပေါ်က ပန်းပင်အရင်းကို ဖြတ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Breath Comes First", l: "ပန်းခြံ",
    g: "မြေကြီးအောက်ကနေ လူတစ်ယောက် အသက်ကို အားကုန်ရှူသွင်းလိုက်တဲ့အသံ။",
    p: "The cut flower bed from ground level, loose soil visibly lifting and settling in one place as "
      + "though something beneath it had drawn a deep breath.",
    u: ["အသံက အရင်ထွက်လာတယ်။",
        "မြေကြီးအောက်ကနေ လူတစ်ယောက် အသက်ကို အားကုန်ရှူသွင်းလိုက်တဲ့အသံ။",
        "အကြာကြီး မရှူရဘဲ နေခဲ့ရတဲ့လူလို။"],
    c: [[1, "bigstinger"]] },

  { t: "The Flowers Wither", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွားလက်ထဲက ပန်းတွေ ညှိုးကျသွားတယ်။ ကျွန်တော့်လည်ပင်းက ပန်းကုံးလည်း နွေးလာတယ်။",
    p: "White blossoms browning and collapsing in an old woman's open hand within a single moment, "
      + "petals curling inward.",
    u: ["နောက်တော့ အဘွားလက်ထဲက ပန်းတွေ ညှိုးကျသွားတယ်။",
        "ကျွန်တော့်လည်ပင်းက ပန်းကုံးလည်း ရုတ်တရက် နွေးလာတယ်။",
        "ကျွန်တော် ဖြုတ်ပစ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Water", l: "ပန်းခြံ",
    g: "မြေဘောင်တစ်ခုကနေ ခပ်တိုးတိုး အသံ။ နောက်တစ်ဘောင်ကနေလည်း။",
    p: "A wide still view of the whole garden with every person in it frozen mid-motion, and the beds "
      + "themselves the only thing in frame that seems alive.",
    u: ["ခြံထဲမှာ ရပ်နေတဲ့လူတွေအားလုံး မလှုပ်တော့ဘူး။",
        "ဆိုင်းသံက အဝေးမှာ ဆက်မြည်နေတုန်း။",
        "မြေဘောင်တစ်ခုကနေ ခပ်တိုးတိုး အသံထွက်လာတယ်။ “ရေ…”",
        "နောက်တစ်ဘောင်ကနေ “အမေ…”"],
    c: [[3, "bigstinger"]] },

  { t: "Pulled From Below", l: "ပန်းခြံ", w: ["သဇင်"],
    g: "ကျွန်တော် သဇင်ရဲ့ နားနှစ်ဖက်ကို ဖုံးပေးလိုက်တယ်။ ပန်းပင်တွေ အောက်ကနေ ဆွဲသလို လှုပ်နေတယ်။",
    p: "A man covering a girl's ears with both hands while behind them the flower plants jerk "
      + "individually — not swaying together in wind, but each one tugged downward.",
    u: ["ကျွန်တော် သဇင်ရဲ့ နားနှစ်ဖက်ကို လက်နဲ့ ဖုံးပေးလိုက်မိတယ်။",
        "ပန်းပင်တွေ လှုပ်လာတယ်။",
        "လေတိုက်လို့ လှုပ်တာမျိုး မဟုတ်ဘူး။ အောက်ကနေ တစ်ပင်ချင်း ဆွဲနေသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "Breath in the Baskets", l: "ပန်းခြံ", w: ["ဦးဘသိန်း"],
    g: "အမျိုးသားတစ်ယောက်က ပန်းခြင်းကို လွှတ်ချလိုက်တယ်။ ခြင်းထဲက ပန်းတွေကြားကနေ အသက်ရှူသံ။",
    p: "A dropped basket spilling white flowers across the ground, the blossoms scattered and "
      + "trembling although the air is completely still.",
    u: ["ဦးဘသိန်း နောက်ဆုတ်တယ်။",
        "သူ့နောက်က အမျိုးသားတစ်ယောက်က ပန်းခြင်းကို လွှတ်ချလိုက်တယ်။",
        "ခြင်းထဲက ပန်းတွေကြားကနေ လူအသက်ရှူသံ ထွက်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "What Will the Village Eat", l: "ပန်းခြံ", w: ["ဦးဘသိန်း", "အဘွား"],
    g: "ဦးဘသိန်း အော်တယ်။ အဘွား လက်ရပ်သွားတယ်။",
    p: "The headman shouting across the garden with his arm outstretched, and the kneeling old woman "
      + "stopped mid-cut, shears half-closed.",
    u: ["အဘွားက နောက်တစ်ပင်ကို ဖြတ်တယ်။",
        "ဦးဘသိန်း အော်တယ်။ “မဖြတ်နဲ့!” အဘွား မရပ်ဘူး။",
        "“ပန်းမပွင့်တော့ရင် ရွာက ဘာနဲ့စားမလဲ!”",
        "အဲဒီစကားကြားတော့ အဘွား လက်ရပ်သွားတယ်။"] },

  { t: "What Has My Daughter Been Eating", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွား မော့ကြည့်တယ်။ ပြန်မေးတယ်။",
    p: "An old woman looking up from her knees at the man standing over her, her face lifted into the "
      + "hard light, entirely without fear.",
    u: ["သူ ဦးဘသိန်းကို မော့ကြည့်တယ်။",
        "“ငါ့သမီးကရော ဘာစားနေရလဲ”"],
    c: [[1, "bigstinger"]] },

  { t: "Behind Him", l: "ပန်းခြံ", w: ["ဦးဘသိန်း", "နန္ဒာ"],
    g: "ဦးဘသိန်းရဲ့ နောက်တည့်တည့်မှာ နန္ဒာ ရပ်နေတယ်။ နားမှာ ပန်းနီ မရှိတော့ဘူး။",
    p: "A young woman standing directly behind an unaware man in full sunlight, perfectly ordinary and "
      + "solid — and this time there is NO red flower behind her ear.",
    u: ["ဦးဘသိန်းရဲ့ နောက်တည့်တည့်မှာ နန္ဒာ ရပ်နေတယ်။",
        "ဘယ်က ရောက်လာလဲ ကျွန်တော် မမြင်လိုက်ဘူး။",
        "သူ့မျက်နှာက အရင်အတိုင်းပဲ။ မပြုံးဘူး။",
        "သူ့နားမှာတော့ ပန်းနီ မရှိတော့ဘူး။"],
    c: [[3, "bigstinger"]] },

  { t: "I Can't Remember the Names", l: "ပန်းခြံ", w: ["ဦးဘသိန်း", "နန္ဒာ"],
    g: "နန္ဒာက ဦးဘသိန်းပခုံးပေါ် လက်တင်တယ်။ သူ ဒူးညွတ်ကျသွားတယ်။",
    p: "A hand resting lightly on a man's shoulder from behind while he sinks to his knees in the "
      + "dirt, staring at nothing, mouth moving.",
    u: ["နန္ဒာက ဦးဘသိန်းရဲ့ပခုံးပေါ် လက်တင်လိုက်တယ်။",
        "သူက အဲဒီလက်ကို ငုံ့ကြည့်တယ်။ ပြီးတော့ ဖြည်းဖြည်း ဒူးညွတ်ကျသွားတယ်။",
        "သူ့ကို ဘာမြင်နေရလဲ ကျွန်တော် မသိဘူး။",
        "သူ့ပါးစပ်ကတော့ စကားတစ်ခွန်းတည်း ထပ်ခါထပ်ခါ ထွက်နေတယ်။",
        "“မမှတ်မိတော့ဘူး… နာမည်တွေ မမှတ်မိတော့ဘူး…”"],
    c: [[4, "bigstinger"]] },

  { t: "The Gate Opens", l: "ပန်းခြံ",
    g: "နောက်ပေါက် ကန့်လန့်သံ။ တံခါးပွင့်လာတယ်။ သဇင်ရဲ့အမေ။",
    p: "A wooden garden gate swinging inward with a woman standing in the bright gap beyond it, her "
      + "hands still on the bar she has just lifted.",
    u: ["နောက်ပေါက်က ကန့်လန့်သံ ကြားရတယ်။ တံခါးပွင့်လာတယ်။",
        "သဇင်ရဲ့အမေ။ သူ့လက်တွေ တုန်နေတယ်။"] },

  { t: "She Pulls Her Hand Away", l: "ပန်းခြံ", w: ["သဇင်"],
    g: "အမေက သမီးလက်ကို ဆွဲတယ်။ သဇင်က လက်ကို ရုပ်ပြီး ကျွန်တော့်အင်္ကျီကိုပဲ ကိုင်ထားတယ်။",
    p: "A mother's hand reaching for her daughter's and the daughter pulling free, her other fist "
      + "still knotted in a stranger's shirt.",
    u: ["သမီးကို တွေ့တာနဲ့ လက်ဆွဲပြီး အပြင်ခေါ်တယ်။",
        "ဒီတစ်ခါ သဇင်က သူ့လက်ကို ရုပ်လိုက်တယ်။",
        "ကျွန်တော့်အင်္ကျီကိုပဲ ကိုင်ထားတယ်။",
        "အမျိုးသမီးက ဘာမှ မပြောဘူး။ ဘေးဖယ်ပေးလိုက်တယ်။"],
    c: [[1, "stinger"]] },

  { t: "Patting the Earth", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွားက မြေဘောင်ဘေးမှာ ထိုင်နေတယ်။ လက်တစ်ဖက်နဲ့ မြေကို ဖြည်းဖြည်း ပုတ်နေတယ်။",
    p: "An old woman seated on the ground beside a flower bed with one palm laid flat on the soil, "
      + "patting it slowly and rhythmically, the way you would soothe a child's back.",
    u: ["ကျွန်တော် အဘွားကို လှမ်းခေါ်တယ်။ “အဘွား၊ လာ!”",
        "အဘွားက မြေဘောင်ဘေးမှာ ထိုင်နေတုန်းပဲ။",
        "သူ့လက်တစ်ဖက်က မြေကြီးပေါ်မှာ ပြားပြားတင်ထားတယ်။",
        "တစ်ယောက်ယောက်ရဲ့ ကျောကို ပုတ်ပေးနေသလို ဖြည်းဖြည်း ပုတ်နေတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "I Cannot Leave Her Again", l: "ပန်းခြံ", w: ["အဘွား"],
    g: "အဘွားက ကျွန်တော့်ကို မကြည့်ဘူး။",
    p: "An old woman in profile beside the bed, refusing to turn her head, the garden emptying behind "
      + "her.",
    u: ["“သွားနှင့်” “အဘွား!”",
        "သူက ကျွန်တော့်ကို မကြည့်ဘူး။",
        "“ဒီတစ်ခါ ငါထားခဲ့လို့ မရတော့ဘူး”",
        "သဇင်ရဲ့အမေက အဘွားဆီ ပြေးသွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Band Is Still Playing", l: "ရွာလမ်း", w: ["နေဝင်း", "သဇင်"],
    g: "ရွာလယ်မှာ ဆိုင်းဝိုင်း တီးနေတုန်း။ ကလေးတွေ ကစားနေတုန်း။ နေက အမြင့်မှာ။",
    p: "A man and a girl walking quickly along the village street while the festival band plays on in "
      + "the background and children run about — high hard sun, nothing visibly wrong anywhere.",
    u: ["ကျွန်တော် သဇင်ကို ခေါ်ပြီး နောက်လမ်းကနေ ထွက်ခဲ့တယ်။",
        "ကျွန်တော်တို့ ထွက်လာတဲ့အချိန် နေက အမြင့်ကြီးမှာပဲ ရှိသေးတယ်။",
        "ရွာလယ်မှာ ဆိုင်းဝိုင်းက တီးနေတုန်း။",
        "ဘာဖြစ်နေမှန်း မသိသေးတဲ့ကလေးတွေက မဏ္ဍပ်ဘေးမှာ ကစားနေကြတုန်း။"] },

  { t: "Crying in a Garland", l: "ရွာလမ်း", w: ["သဇင်"],
    g: "လမ်းဘေးတိုင်က ပန်းကုံးတစ်ကုံး။ အထဲကနေ မိန်းမတစ်ယောက်ရဲ့ ငိုသံ။",
    p: "A single white garland hanging on a roadside post in close-up, sunlit and completely still, "
      + "with two figures hurrying past it out of focus behind.",
    u: ["ကျွန်တော်တို့နှစ်ယောက်ပဲ ပန်းကုံးတွေကို ရှောင်ပြီး လျှောက်နေရတယ်။",
        "လမ်းဘေးတိုင်က ပန်းကုံးတစ်ကုံးကနေ မိန်းမတစ်ယောက် ငိုသံ ကြားလိုက်ရတယ်။",
        "သဇင်က ကျွန်တော့်လက်ကို ပိုတင်းတင်း ဆုပ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Out on the Main Road", l: null, w: ["နေဝင်း", "သဇင်"],
    g: "ကုန်တင်သုံးဘီးပေါ်။ ရွာက အဝေးကို ကျန်ခဲ့တယ်။",
    p: "The back of a small three-wheeled goods truck pulling away along an open country road, two "
      + "passengers among the sacks, the village receding into heat haze behind.",
    u: ["ကျွန်တော်တို့ ရွာအပြင်လမ်းမှာ ကုန်တင်သုံးဘီးတစ်စီး တားစီးပြီး မြို့ဘက် ထွက်လာခဲ့တယ်။",
        "လမ်းမကြီးရောက်တော့ ဖုန်းလိုင်း ပြန်ကောင်းလာတယ်။",
        "သူငယ်ချင်းက ဖုန်းအကြိမ်ကြိမ် ခေါ်ထားတယ်။"] },

  { t: "I Did Not Go Back In", l: null,
    g: "ရဲကားတွေ ရွာဘက် ဝင်သွားတယ်။ ကျွန်တော် မလိုက်ဘူး။",
    p: "Police vehicles turning off a main road onto a village track, seen from behind at a distance, "
      + "dust rising, nobody following them.",
    u: ["သူ သတင်းပေးထားတဲ့အဖွဲ့နဲ့ ကျွန်တော်တို့ လမ်းမှာ ဆုံတယ်။",
        "ဒီတစ်ခါ ရွာကို ပြန်ဝင်သွားတာ ကျွန်တော် မလိုက်ဘူး။"] },

  { t: "Do Not Put a Flower on Me", l: null, w: ["သဇင်"],
    g: "ဆေးခန်း။ သူနာပြုက လက်ကောက်ဝတ်က ချည်ကြိုးကို ကတ်ကြေးနဲ့ ဖြတ်ပေးတယ်။",
    p: "A clinic bed with a nurse cutting a cord from a girl's wrist with scissors, the girl curling "
      + "her whole body inward at the sound of the blades.",
    u: ["သဇင်ကို ဆေးခန်းပို့တယ်။",
        "သူ့လက်ကောက်ဝတ်က ချည်ကြိုးကို သူနာပြုက ကတ်ကြေးနဲ့ ဖြတ်ပေးရတယ်။",
        "ကြိုးဖြတ်တဲ့အသံ ကြားတာနဲ့ သဇင်က ကုတင်ပေါ်မှာ ကိုယ်ကို ကျုံ့လိုက်တယ်။",
        "“ပန်း မပန်ပေးပါနဲ့” လို့ ပြောတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "Nobody Could Answer Her", l: null,
    g: "သူနာပြုက ကျွန်တော့်ကို ကြည့်တယ်။ ကျွန်တော်လည်း မဖြေနိုင်ဘူး။",
    p: "A nurse looking up from her work toward someone off-frame, scissors still in hand, at a loss.",
    u: ["သူနာပြုက ဘာပြောရမှန်း မသိလို့ ကျွန်တော့်ကို ကြည့်တယ်။",
        "ကျွန်တော်လည်း မဖြေနိုင်ဘူး။"] },

  { t: "The Village Did Not Vanish", l: "ရွာလမ်း",
    g: "ရွာက ပုံမှန်အတိုင်းပဲ ရှိနေတယ်။ နေ့ခင်း။",
    p: "The village street in ordinary daylight some time later: still there, still inhabited, "
      + "garlands gone from the posts, entirely mundane.",
    u: ["ရွာ ပျောက်မသွားဘူး။ လူတွေလည်း အကုန်ပျောက်မသွားဘူး။",
        "အဲဒီလိုသာ ဖြစ်ခဲ့ရင် ကျွန်တော်တို့ကို ယုံမယ့်သူ ပိုနည်းမယ်။"] },

  { t: "What They Found", l: "ပန်းခြံ",
    g: "ပန်းခြံမှာ တူးဖော်နေတယ်။ မြေဘောင်တွေကို ဖွင့်ထားတယ်။",
    p: "An excavation in progress in the flower garden: beds opened, marker flags planted along the "
      + "rows, people in gloves working methodically. No remains visible.",
    u: ["ပန်းခြံကို တွေ့တယ်။ စာရင်းစာအုပ်ကို တွေ့တယ်။",
        "မြေဘောင်တွေအောက်မှာ လူ့အကြွင်းအကျန်တွေ တွေ့တယ်။",
        "ဦးဘသိန်းနဲ့ ပါဝင်ခဲ့တဲ့ လူတချို့ကို ခေါ်သွားကြတယ်။"] },

  { t: "The Reasons They Gave", l: null,
    g: "ရွာသားတွေ တစ်ယောက်ချင်း ထွက်ဆိုနေတဲ့ပုံ။ မျက်နှာတွေ မမြင်ရ။",
    p: "A row of villagers seated waiting to give statements, photographed from behind so no face is "
      + "identifiable, hands folded in laps.",
    u: ["အဘွားလည်း အသက်ရှင်တယ်။ သဇင်ရဲ့အမေက ဆွဲထုတ်လာခဲ့တာ။",
        "လူတွေကတော့ အကြောင်းအမျိုးမျိုး ပြောကြတယ်။",
        "မလုပ်ရင် ရွာပျက်မယ် ထင်လို့တဲ့။ လူကြီးတွေကို မလွန်ဆန်ရဲလို့တဲ့။",
        "ကိုယ်တိုင် မြေမဖို့ခဲ့ပါဘူးတဲ့။"] },

  { t: "Only the Grandmother", l: null, w: ["အဘွား"],
    g: "အဘွားတစ်ယောက်ပဲ တခြားစကား ပြောတယ်။",
    p: "An old woman sitting alone on a bench in flat daylight, hands still, saying one sentence to "
      + "someone out of frame.",
    u: ["အဘွားတစ်ယောက်ပဲ အဲဒီလို မပြောဘူး။",
        "သူက “သမီးကို ငါပဲ ပန်းပန်ပေးခဲ့တယ်” လို့ပဲ ပြောတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Month Later", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက ပုံဟောင်းကို ဘောင်ထဲက ထုတ်ပြီး အသစ်ကို အစားထိုးတယ်။",
    p: "An old woman's hands lifting a smiling portrait out of its frame and fitting a different "
      + "photograph in its place, on a sunlit table.",
    u: ["တစ်လလောက်ကြာတော့ ကျွန်တော် နန္ဒာ့ပုံကို ပုံနှိပ်ပေးလိုက်တယ်။",
        "ပွဲတော်မှာ ရိုက်ခဲ့တဲ့ပုံ။ သစ်ပင်အောက်မှာ ရပ်နေတဲ့ပုံ။ မပြုံးတဲ့ပုံ။",
        "အဘွားက ပုံဟောင်းကို ဘောင်ထဲက ထုတ်တယ်။ အသစ်ကို အစားထိုးတယ်။"] },

  { t: "That Is My Daughter's Face", l: "ပန်းစောင့်အိမ်", w: ["အဘွား"],
    g: "အဘွားက ပုံအောက်ကို လက်နဲ့ တစ်ချက်သပ်လိုက်တယ်။ အဲဒီတစ်ခါတော့ သူ ငိုတယ်။",
    p: "An old woman smoothing the bottom edge of a newly framed portrait with her fingers, crying "
      + "openly for the first time, the unsmiling photograph in front of her.",
    u: ["ပြီးတော့ ပုံအောက်ကို လက်နဲ့ တစ်ချက်သပ်လိုက်တယ်။",
        "“ဒါမှ ငါ့သမီးမျက်နှာ”",
        "အဲဒီတစ်ခါတော့ သူ ငိုတယ်။",
        "ကျွန်တော် သူ့ကို မတားဘူး။ ပြုံးဖို့လည်း မပြောတော့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "No Real Flowers in My Shop", l: null, w: ["နေဝင်း"],
    g: "ဓာတ်ပုံဆိုင်။ ပန်းအတုတွေ။ အရောင်တွေက အနည်းငယ် မှားနေတယ်။",
    p: "A small photography studio with a shelf of obviously artificial flowers — plastic and silk, "
      + "colours slightly wrong, dust on the leaves.",
    u: ["အခု ကျွန်တော့်ဆိုင်မှာ ပန်းအစစ် မထားတော့ဘူး။",
        "ဓာတ်ပုံရိုက်တဲ့အခါ ပန်းအတုသုံးတယ်။",
        "လူတွေက ဈေးသက်သာလို့လား မေးရင် ဟုတ်တယ်လို့ပဲ ပြောလိုက်တယ်။",
        "အကြောင်းရင်းအမှန်ကို မပြောဘူး။"] },

  { t: "The Records Are Incomplete", l: null,
    g: "စာရွက်စာတမ်းတွေ။ စာရင်းက မပြည့်စုံဘူး။",
    p: "A stack of paperwork and an open ledger on a desk under an office lamp, columns visibly "
      + "unfinished, a pen laid across them.",
    u: ["ပန်းကုန်းရွာက ပန်းတွေ ဘယ်လောက်အထိ ရောင်းပို့ထားခဲ့လဲ စာရင်းမပြည့်စုံဘူး။",
        "ဦးဘသိန်းကလည်း မမှတ်မိဘူးလို့ပဲ ပြောတယ်။"],
    c: [[1, "stinger"]] },

  { t: "A Wedding", l: null, w: ["နေဝင်း"],
    g: "ဟိုတယ်ခန်းမကြီး။ မီးတွေ လင်းနေတယ်။ လူတွေ ရယ်နေကြတယ်။",
    p: "A brightly lit hotel function room mid-wedding: chandeliers, laughing guests, a stage, "
      + "everything warm and celebratory.",
    u: ["မနေ့က ကျွန်တော် မင်္ဂလာပွဲတစ်ခု သွားရိုက်ရတယ်။",
        "ဟိုတယ်ခန်းမကြီး။ မီးတွေလင်းနေတယ်။ လူတွေ ရယ်နေကြတယ်။"] },

  { t: "White Flowers", l: null,
    g: "သတို့သမီးက ပန်းစည်းကိုင်ပြီး စင်ပေါ်မှာ ရပ်နေတယ်။ ပန်းဖြူတွေ။",
    p: "A bride on a lit stage holding a bouquet of white flowers, smiling for the room, the "
      + "blossoms unmistakably the same thick waxy kind.",
    u: ["သတို့သမီးက ပန်းစည်းကိုင်ပြီး စင်ပေါ်မှာ ရပ်နေတယ်။ ပန်းဖြူတွေ။",
        "ကျွန်တော် ကင်မရာမြှောက်လိုက်တယ်။ ပြီးတော့ ပြန်ချလိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "They Last a Long Time", l: null,
    g: "အလှဆင်တဲ့အမျိုးသမီးက ပြောနေတယ်။",
    p: "A wedding decorator speaking cheerfully beside a floral arrangement, gesturing at the "
      + "blossoms with obvious pride.",
    u: ["“ပန်းစည်းက ဘယ်ကယူတာလဲခင်ဗျ”",
        "အလှဆင်တဲ့အမျိုးသမီးက ဝင်ဖြေတယ်။",
        "“အဲဒါ ပန်းအစစ်နော် ဆရာ။ အကြာကြီးခံလို့ စျေးနည်းနည်းကြီးတယ်”"],
    c: [[2, "bigstinger"]] },

  { t: "The Flowers Are Cold", l: null, w: ["နေဝင်း"],
    g: "သတို့သမီးလက်ထဲက ပန်းစည်းကို ဖြည်းဖြည်း ယူလိုက်တယ်။ ပန်းတွေ အေးနေတယ်။",
    p: "Hands lifting a white bouquet gently out of a bride's grip, the exchange going unnoticed by "
      + "the celebrating room behind.",
    u: ["ကျွန်တော် သတို့သမီးဆီ လျှောက်သွားတယ်။",
        "လက်ထဲက ပန်းစည်းကို ဖြည်းဖြည်း ယူလိုက်တယ်။",
        "ပန်းတွေ အေးနေတယ်။"],
    c: [[2, "stinger"]] },

  { t: "Nobody Else Heard It", l: null, w: ["နေဝင်း"],
    g: "ခန်းမထဲက သီချင်းသံကြားမှာ ကျွန်တော်တစ်ယောက်တည်း ပန်းစည်းကို ရင်ဘတ်နား ကိုင်ထားတယ်။",
    p: "A man standing motionless holding a white bouquet close against his chest in the middle of a "
      + "loud crowded wedding, everyone around him laughing and looking elsewhere.",
    u: ["ခန်းမထဲက သီချင်းသံကြားမှာ တခြားဘယ်သူမှ မကြားလိုက်ဘူး။",
        "ကျွန်တော်ကတော့ ပန်းစည်းကို ရင်ဘတ်နား ကိုင်ထားလို့ ကြားလိုက်ရတယ်။"] },

  { t: "Photographer", l: null,
    g: "ပန်းပွင့်တွေကို အနီးကပ်။ ပွင့်ဖတ်တွေကြားက အမှောင်။",
    p: "Extreme close-up into the centre of a white bouquet, deep between the thick petals where the "
      + "light does not reach.",
    u: ["ပန်းတွေကြားကနေ မိန်းကလေးတစ်ယောက်ရဲ့အသံ။ အရမ်းတိုးတိုးလေး။",
        "“ဓာတ်ပုံဆရာ…”",
        "ကျွန်တော့်လက်တွေ တောင့်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Please Don't Ask Me to Smile", l: null, w: ["နေဝင်း"],
    g: "နောက်ဆုံးပုံ — ပန်းစည်းက လက်ထဲမှာ နည်းနည်း လှုပ်လာတယ်။ ကျွန်တော့်မျက်နှာ။",
    p: "Final composition: a white bouquet held in two hands, the blossoms very slightly disturbed as "
      + "though something inside them had shifted, and above it a man's face going still. Hold on the "
      + "flowers, not the face.",
    u: ["“ဒီတစ်ခါတော့…”",
        "ပန်းပွင့်တွေက ကျွန်တော့်လက်ထဲမှာ နည်းနည်း လှုပ်လာတယ်။",
        "“ကျွန်မကို မပြုံးခိုင်းပါနဲ့။”"],
    c: [[2, "finalstinger"]] },
];
