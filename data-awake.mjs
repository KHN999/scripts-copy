/**
 * မျက်လုံးမှိတ်ထားပါ — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * FIVE RULES. The first two are the trick the whole film turns on.
 *
 * 1. THE DRIVER IS THE THREAT AND MUST NOT LOOK LIKE ONE. For the first third he
 *    is warm, helpful, fatherly — he carries the bags himself and hands out
 *    water. Nothing in the lighting, framing or performance may hint otherwise
 *    until he says "မနှိုးနဲ့". If the audience suspects him early, the film is
 *    over before it starts.
 *
 * 2. THE WOMAN OUTSIDE IS NOT FRIGHTENING. Soaked hair stuck to her cheek, mud
 *    on her blouse — and a face full of WORRY, never malice. The script says it
 *    outright: no anger in her eyes, she is afraid FOR them. She never bares
 *    teeth, never lunges, never touches anybody.
 *
 * 3. SHE IS ONLY EVER SEEN THROUGH GLASS OR THROUGH RAIN. A window, a windscreen,
 *    a headlight beam. She and the living are never in the same clear air, and
 *    she is never shown whole and close in a dry shot. When she moves position
 *    it happens between blinks — we never see her walk.
 *
 * 4. NOTHING VIOLENT IS SHOWN. The mother died eight months ago and was found by
 *    a drainage ditch; that is told, never depicted. The drugging is a water
 *    bottle. The struggle at the end is a man pulling at a shirt and a hand on a
 *    horn. No blood, no body, no wound anywhere.
 *
 * 5. ⚠️ TEXT IS BANNED EXCEPT THE TWO PHONE MESSAGES at the very end, which the
 *    film exists to deliver. Those shots name the exact string. Everywhere else
 *    phone screens are shape and glow.
 */

export const CAST = [
  { name: "မင်းခန့်", en: "Min Khant — the narrator, late twenties",
    prompt: "A Burmese man of about twenty-eight, ordinary build, a plain dark jacket over a t-shirt, "
      + "a small backpack. Awake and alert while everyone around him is not — he is the only person "
      + "on the bus who did not drink the water, and that shows in his eyes." },
  { name: "ယာဉ်မောင်း", en: "The driver, about fifty",
    prompt: "A Burmese man of about fifty, a little heavy, a worn checked shirt and a longyi, "
      + "reading glasses pushed up on his head. ⚠️ FOR THE FIRST THIRD OF THE FILM HE IS WARM AND "
      + "FATHERLY — an easy smile, carrying passengers' bags himself. Nothing in his lighting or "
      + "framing may suggest a threat before the film says so. Afterwards the smile is simply gone; "
      + "he never becomes a monster, only a frightened man doing something he has done before." },
  { name: "ရွှေရည်", en: "Shwe Yee — the young woman in the front seat",
    prompt: "A Burmese woman of about twenty-two, a plain blouse and jeans, hair loose, a SMALL RED "
      + "SHOULDER BAG held against her chest. Asleep for most of the film with her cheek against the "
      + "window glass. ⚠️ She is drugged, not dead: her breathing is visible and her eyelids move." },
  { name: "အမေ", en: "The mother — the woman outside",
    prompt: "A Burmese woman of about forty-five, hair soaked and stuck flat to one cheek, a house "
      + "blouse with mud dried across it, barefoot. ⚠️ SHE IS NOT FRIGHTENING AND NEVER BECOMES SO: "
      + "no pallor beyond wet skin, no decay, no blood, no injury, no glowing eyes, nothing "
      + "translucent. Her face carries WORRY — she is afraid FOR the people in the bus, not angry at "
      + "them. She never opens her mouth wide, never lunges and never touches anyone. ⚠️ SHOW HER "
      + "ONLY THROUGH GLASS OR THROUGH FALLING RAIN." },
  { name: "ရေဘူး", en: "The water bottle — the mechanism",
    prompt: "An ordinary half-litre clear plastic bottle of drinking water with a plain blue cap and "
      + "a generic label, the kind handed out free on a long-distance bus. ⚠️ ONE UNOPENED BOTTLE "
      + "with its cap seal intact is the object the film turns on — it must be recognisably the same "
      + "bottle every time it appears." },
];

export const LOCS = [
  { name: "ကားထဲ", en: "Inside the minibus at night",
    prompt: "The interior of an old fourteen-seat Myanmar minibus at night: worn fabric seats in two "
      + "rows, a narrow aisle, luggage netted overhead, a small dashboard shrine, one dim aisle strip "
      + "light. Rain on the windows. Eight passengers, all of them asleep." },
  { name: "မှန်ပြင်", en: "The window, from inside",
    prompt: "A minibus side window at night seen from within the dark cabin: rain running down the "
      + "outside of the glass, the interior reflected faintly in it, headlight spill and blackness "
      + "beyond. ⚠️ Anything outside is seen THROUGH this glass, never in clear air." },
  { name: "လမ်းဘေး", en: "The roadside by the small bridge",
    prompt: "A wet rural road at night in Myanmar beside a small concrete bridge: low railings, tall "
      + "grass, a drainage channel, no houses and no shop lights. The minibus stopped on the verge "
      + "with its headlights off. Heavy intermittent rain." },
  { name: "ဆေးရုံ", en: "The hospital, days later",
    prompt: "An ordinary Myanmar hospital ward in flat daylight: pale walls, metal beds, a window, a "
      + "plastic visitor's chair. Calm and entirely un-frightening." },
];

export const STYLE =
  "A night coach journey through rural Myanmar, present day, in heavy intermittent rain. Almost all "
  + "of it happens inside one dark minibus. Cinematic photorealism, 35mm grain, shallow depth of "
  + "field, 16:9, a cold desaturated palette lit by one dim aisle strip light, dashboard glow and "
  + "headlight spill. ⚠️ THE DRIVER MUST READ AS KIND AND ORDINARY until the film says otherwise — "
  + "never lit or framed as a threat in the early shots. ⚠️ THE WOMAN OUTSIDE IS NOT FRIGHTENING: "
  + "wet, muddy and WORRIED, never angry, never decayed, never glowing, and SEEN ONLY THROUGH GLASS "
  + "OR THROUGH RAIN. She never touches anyone. ⚠️ Nothing violent is shown — no blood, no body, no "
  + "wound anywhere in the film. ⚠️ No text of any kind except where a shot explicitly names it; "
  + "phone screens are shape and glow, never readable words.";

export const SCENES = [
  { t: "He Turned the Lights Off", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "ကားရပ်သွားတော့ ယာဉ်မောင်းက မီးတွေ ပိတ်လိုက်တယ်။ နောက်ကို လှည့်မကြည့်ဘဲ ပြောတယ်။",
    p: "A minibus driver's hand coming off a light switch, the cabin behind him dropping to black, "
      + "his face turned forward and not visible.",
    u: ["ကားရပ်သွားတော့ ယာဉ်မောင်းက မီးတွေ ပိတ်လိုက်တယ်။",
        "ပြီးတော့ နောက်ကို လှည့်မကြည့်ဘဲ ပြောတယ်။"] },

  { t: "Keep Your Eyes Closed", l: "ကားထဲ",
    g: "“အပြင်မှာ ဘာမြင်မြင် မကြည့်နဲ့။ မျက်လုံးမှိတ်ထားပါ။”",
    p: "A dark minibus interior from the back of the aisle, only the shape of a driver's head against "
      + "the windscreen, rain beyond it.",
    u: ["“အပြင်မှာ ဘာမြင်မြင် မကြည့်နဲ့။ မျက်လုံးမှိတ်ထားပါ။”"],
    c: [[0, "bigstinger"]] },

  { t: "I Had Not Been Asleep", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကျွန်တော်က အိပ်ပျော်နေရာက နိုးလာတာ မဟုတ်ဘူး။ တစ်ညလုံး မအိပ်ရသေးတာ။",
    p: "A young man's face in a dark bus, wide awake, lit only by the faint strip light — the one "
      + "pair of open eyes in the frame.",
    u: ["ကျွန်တော်က အိပ်ပျော်နေရာက နိုးလာတာ မဟုတ်ဘူး။ တစ်ညလုံး မအိပ်ရသေးတာ။",
        "ဒါကြောင့် အဲဒီစကားကို ရှင်းရှင်းလင်းလင်း ကြားလိုက်ရတယ်။"] },

  { t: "Everyone Else Was Under", l: "ကားထဲ", w: ["ရွှေရည်"],
    g: "အနားက ခရီးသည်တွေ အားလုံး မျက်လုံးမှိတ်ထားကြတယ်။ ခေါင်းတွေ ငိုက်ကျနေတယ်။",
    p: "A minibus aisle at night: every visible passenger asleep, heads lolled at awkward angles, one "
      + "young woman's cheek flat against the window glass.",
    u: ["ကျွန်တော် အနားက ခရီးသည်တွေကို လှမ်းကြည့်တယ်။ အားလုံး မျက်လုံးမှိတ်ထားကြတယ်။",
        "ခေါင်းတွေ ငိုက်ကျနေတယ်။",
        "ရှေ့က မိန်းကလေးတစ်ယောက်ဆို ပါးတစ်ဖက်ကို ပြတင်းပေါက်မှန်မှာ ကပ်ထားတယ်။"],
    c: [[2, "stinger"]] },

  { t: "Bare Feet in Water", l: "လမ်းဘေး",
    g: "ကားဘေးကို ခြေသံတစ်ခု ချဉ်းကပ်လာတယ်။ ရေထဲကို ခြေဗလာနဲ့ နင်းလာတဲ့အသံ။ တရှပ်ရှပ်။",
    p: "⚠️ NO FIGURE. A shallow sheet of rainwater on wet tarmac beside a bus tyre, rings spreading "
      + "outward from a footfall just out of frame.",
    u: ["ကျွန်တော်တို့ကားဘေးကို ခြေသံတစ်ခု ချဉ်းကပ်လာတယ်။",
        "ရေထဲကို ခြေဗလာနဲ့ နင်းလာတဲ့အသံ။ တရှပ်ရှပ်။",
        "ခြေသံက ကျွန်တော့်ပြတင်းပေါက်အပြင်မှာ ရပ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "He Said It Again", l: "ကားထဲ", w: ["ယာဉ်မောင်း", "မင်းခန့်"],
    g: "ယာဉ်မောင်းက ထပ်ပြောတယ် — “မျက်လုံးမှိတ်ထားနော်။” ကျွန်တော် မမှိတ်မိသေးဘူး။",
    p: "A driver's eyes in a rear-view mirror in the dark, looking back down the aisle, and a young "
      + "man in the mid-ground who has not closed his.",
    u: ["ယာဉ်မောင်းက ထပ်ပြောတယ်။ “မျက်လုံးမှိတ်ထားနော်။”",
        "ကျွန်တော် မမှိတ်မိသေးဘူး။ အပြင်ကို ကြည့်မိလိုက်တယ်။"],
    c: [[1, "stinger"]] },

  { t: "A Woman at the Glass", l: "မှန်ပြင်", w: ["အမေ"],
    g: "မိန်းမတစ်ယောက်။ ဆံပင်တွေ ရေစိုပြီး ပါးမှာ ကပ်နေတယ်။ အင်္ကျီပေါ်မှာ ရွှံ့တွေစွန်းနေတယ်။",
    p: "⚠️ THROUGH RAIN-RUNNING GLASS. A woman standing close outside a bus window at night, hair "
      + "soaked flat to one cheek, dried mud across her blouse. Ordinary, wet and tired-looking — not "
      + "pale, not decayed, not glowing.",
    u: ["မိန်းမတစ်ယောက်။",
        "ဆံပင်တွေ ရေစိုပြီး ပါးမှာ ကပ်နေတယ်။ အင်္ကျီပေါ်မှာ ရွှံ့တွေစွန်းနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Was Not Looking at Me", l: "မှန်ပြင်", w: ["အမေ", "ရွှေရည်"],
    g: "သူက ကျွန်တော့်ကို မကြည့်ဘူး။ ကျွန်တော့်ရှေ့က အိပ်ပျော်နေတဲ့ မိန်းကလေးကို ကြည့်နေတယ်။",
    p: "The woman outside the glass with her eyes angled past the camera toward a sleeping young "
      + "woman further forward in the bus — her attention entirely on the girl.",
    u: ["သူက ကျွန်တော့်ကို မကြည့်ဘူး။",
        "ကျွန်တော့်ရှေ့က အိပ်ပျော်နေတဲ့ မိန်းကလေးကို ကြည့်နေတယ်။"],
    c: [[1, "stinger"]] },

  { t: "Wake Her Up", l: "မှန်ပြင်", w: ["အမေ"],
    g: "နှုတ်ခမ်းလှုပ်တယ်။ အသံတော့ မကြားရဘူး။ ဒါပေမယ့် သူ ဘာပြောသလဲ နားလည်တယ် — “နှိုးပေးပါ။”",
    p: "Extreme close-up through wet glass of the woman's mouth shaping two words, no sound implied, "
      + "her eyes above it worried rather than angry.",
    u: ["ပြီးတော့ နှုတ်ခမ်းလှုပ်တယ်။ အသံတော့ မကြားရဘူး။",
        "ဒါပေမယ့် သူ ဘာပြောသလဲ ကျွန်တော် နားလည်တယ်။",
        "“နှိုးပေးပါ။”"],
    c: [[2, "bigstinger"]] },

  { t: "My Name Is Min Khant", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကျွန်တော့်နာမည် မင်းခန့်။ ရန်ကုန်ကနေ နယ်ကို ညကားနဲ့ ပြန်လာတာ။",
    p: "A young man boarding a minibus at a lit roadside stand in the evening with a small backpack, "
      + "entirely ordinary.",
    u: ["ကျွန်တော့်နာမည် မင်းခန့်။ ရန်ကုန်ကနေ နယ်ကို ညကားနဲ့ ပြန်လာတာ။",
        "ပုံမှန်စီးနေကျကား လွတ်သွားလို့ လမ်းကြုံခရီးသည်တင်တဲ့ မီနီဘတ်စ်တစ်စီးကို စီးခဲ့တယ်။"] },

  { t: "No Company Name on the Side", l: "လမ်းဘေး",
    g: "ကုမ္ပဏီကြီးက ကားမဟုတ်ဘူး။ ယာဉ်မောင်းတစ်ယောက်တည်း။ စပယ်ယာမပါဘူး။ ခရီးသည် ရှစ်ယောက်ပဲ။",
    p: "An old unmarked fourteen-seat minibus at a roadside in the evening, no company livery on it, "
      + "a handful of passengers climbing aboard.",
    u: ["ကုမ္ပဏီကြီးက ကားမဟုတ်ဘူး။",
        "ယာဉ်မောင်းတစ်ယောက်တည်း။ စပယ်ယာမပါဘူး။ ခရီးသည် ရှစ်ယောက်ပဲ ပါတယ်။"] },

  { t: "He Carried the Bags Himself", l: "လမ်းဘေး", w: ["ယာဉ်မောင်း"],
    g: "ကားသမားက အသက်ငါးဆယ်ဝန်းကျင်။ စကားပြောချိုတယ်။ ခရီးဆောင်အိတ်တွေကို ကိုယ်တိုင်တင်ပေးတယ်။",
    p: "⚠️ HE MUST LOOK KIND HERE. A driver of about fifty smiling as he lifts a passenger's bag into "
      + "the back of a minibus, warm evening light, entirely likeable.",
    u: ["ကားသမားက အသက်ငါးဆယ်ဝန်းကျင်။ စကားပြောချိုတယ်။",
        "ခရီးဆောင်အိတ်တွေကို ကိုယ်တိုင်တင်ပေးတယ်။"] },

  { t: "A Bottle of Water Each", l: "လမ်းဘေး", w: ["ယာဉ်မောင်း", "ရေဘူး"],
    g: "ကားမထွက်ခင် လူတိုင်းကို ရေဘူးတစ်ဘူးစီ ပေးတယ် — “ခရီးက ဝေးတယ်။ ရေသောက်ထားကြ။”",
    p: "A driver handing a small clear plastic water bottle to each passenger as they board, smiling. "
      + "The bottles are identical and the caps are sealed.",
    u: ["ကားမထွက်ခင် လူတိုင်းကို ရေဘူးတစ်ဘူးစီ ပေးတယ်။",
        "“ခရီးက ဝေးတယ်။ ရေသောက်ထားကြ။”"],
    c: [[1, "stinger"]] },

  { t: "I Pushed Mine Under the Seat", l: "ကားထဲ", w: ["မင်းခန့်", "ရေဘူး"],
    g: "ကျွန်တော်က အိမ်ကယူလာတဲ့ လက်ဖက်ရည်ဘူး ပါလို့ ရေဘူးကို ထိုင်ခုံအောက် ထိုးထားလိုက်တယ်။",
    p: "A hand pushing an unopened water bottle under a bus seat with a foot, a thermos flask of tea "
      + "visible in the passenger's lap instead.",
    u: ["ကျွန်တော်က အိမ်ကယူလာတဲ့ လက်ဖက်ရည်ဘူး ပါလို့ ရေဘူးကို ထိုင်ခုံအောက် ထိုးထားလိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "She Drank Hers", l: "ကားထဲ", w: ["ရွှေရည်", "ရေဘူး"],
    g: "ရှေ့ခုံက မိန်းကလေးကတော့ ရေဘူးကို ဖွင့်သောက်တယ်။ အိတ်အနီသေးသေးတစ်လုံးကို ရင်ခွင်မှာ ပိုက်ထားတယ်။",
    p: "A young woman in a bus seat drinking from a small water bottle, a small red shoulder bag held "
      + "against her chest with her other arm.",
    u: ["ရှေ့ခုံက မိန်းကလေးကတော့ ရေဘူးကို ဖွင့်သောက်တယ်။ အသက်နှစ်ဆယ်ကျော်လောက်ရှိမယ်။",
        "အိတ်အနီသေးသေးတစ်လုံးကို ရင်ခွင်မှာ ပိုက်ထားတယ်။"],
    c: [[1, "stinger"]] },

  { t: "I Can Get Home on My Own", l: "ကားထဲ", w: ["ရွှေရည်"],
    g: "ကားထွက်ခါနီး သူ ဖုန်းပြောနေတယ် — “ရပါတယ်၊ အဒေါ်။ ရောက်ရင် ဖုန်းဆက်လိုက်မယ်။”",
    p: "A young woman on the phone in a bus seat before departure, half-smiling, reassuring somebody.",
    u: ["ကားထွက်ခါနီး သူ ဖုန်းပြောနေတာ ကြားလိုက်ရတယ်။",
        "“ရပါတယ်၊ အဒေါ်။ ရောက်ရင် ဖုန်းဆက်လိုက်မယ်။”",
        "ခဏနားထောင်တယ်။ ပြီးမှ “တစ်ယောက်တည်း ပြန်တတ်ပါတယ်။” လို့ ပြောပြီး ဖုန်းချလိုက်တယ်။"] },

  { t: "An Ordinary Night Coach", l: "ကားထဲ",
    g: "သီချင်းအေးအေးတွေ ဖွင့်ထားတယ်။ နောက်တန်းက လူနှစ်ယောက် အလုပ်အကြောင်း ပြောနေကြတယ်။",
    p: "A minibus interior early in a journey: passengers chatting, an older woman unwrapping a "
      + "snack, the aisle light on, everything warm and normal.",
    u: ["ကျွန်တော်တို့ စထွက်တဲ့အချိန်က ညကိုးနာရီကျော်။ ကားပေါ်မှာ သီချင်းအေးအေးတွေ ဖွင့်ထားတယ်။",
        "နောက်တန်းက လူနှစ်ယောက်က အလုပ်အကြောင်း ပြောနေကြတယ်။",
        "ရှေ့က အဘွားတစ်ယောက်က မုန့်ထုပ် ဖြည်စားနေတယ်။ သာမန်ညကားခရီးတစ်ခုပဲ။"] },

  { t: "An Hour Later, Only Me", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ဒါပေမယ့် တစ်နာရီလောက်ကြာတော့ ကားပေါ်မှာ ကျွန်တော်တစ်ယောက်တည်းပဲ နိုးနေတော့တယ်။",
    p: "The same bus interior an hour on, the aisle light dimmed, every passenger slumped asleep and "
      + "one man still upright and awake.",
    u: ["ဒါပေမယ့် တစ်နာရီလောက်ကြာတော့—",
        "ကားပေါ်မှာ ကျွန်တော်တစ်ယောက်တည်းပဲ နိုးနေတော့တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Houses Ran Out", l: "လမ်းဘေး",
    g: "မိုးက ရွာလိုက်၊ ရပ်လိုက်။ လမ်းဘေးမှာ အိမ်တွေ နည်းလာတယ်။ ဆိုင်မီးတွေ မရှိတော့ဘူး။",
    p: "A minibus windscreen at night in rain, headlights on an empty rural road, the last lit "
      + "shopfront falling behind into darkness.",
    u: ["မိုးက ရွာလိုက်၊ ရပ်လိုက်။ ကားရှေ့မီးတန်းထဲမှာ မိုးစက်တွေက အပ်ချောင်းလေးတွေလို ပြေးဝင်လာတယ်။",
        "လမ်းဘေးမှာ အိမ်တွေ နည်းလာတယ်။ ဆိုင်မီးတွေ မရှိတော့ဘူး။"] },

  { t: "Still Awake, Little Brother", l: "ကားထဲ", w: ["ယာဉ်မောင်း", "မင်းခန့်"],
    g: "နောက်မှန်ထဲကနေ ယာဉ်မောင်းက ကြည့်တယ် — “မအိပ်သေးဘူးလား၊ ညီလေး။”",
    p: "A rear-view mirror at night with a driver's eyes in it, and reflected further back a young "
      + "man looking out of a window. ⚠️ The driver still reads as friendly here.",
    u: ["ကျွန်တော် ဖုန်းထဲက စာဖတ်နေတာကို ရပ်ပြီး အပြင်ကို ကြည့်နေခဲ့တယ်။",
        "နောက်မှန်ထဲကနေ ယာဉ်မောင်းက ကျွန်တော့်ကို ကြည့်တယ်။",
        "“မအိပ်သေးဘူးလား၊ ညီလေး။” “အိပ်မပျော်သေးလို့။”"] },

  { t: "Drink Your Water and Rest", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "“ရေသောက်ပြီး နားလိုက်လေ။ လမ်းက လိုသေးတယ်။” သူ နောက်မှန်ကနေ ကြည့်နေသေးတယ်။",
    p: "A driver's eyes held in the rear-view mirror a beat longer than necessary, the road ahead out "
      + "of focus beyond him.",
    u: ["“ရေသောက်ပြီး နားလိုက်လေ။ လမ်းက လိုသေးတယ်။”",
        "ကျွန်တော် ခေါင်းညိတ်ပြီး လက်ဖက်ရည်တစ်ငုံ သောက်လိုက်တယ်။",
        "သူ နောက်မှန်ကနေ ကြည့်နေသေးတယ်။"],
    c: [[2, "stinger"]] },

  { t: "He Stopped Before the Bridge", l: "လမ်းဘေး",
    g: "နာရီဝက်လောက်မှာ ကားအရှိန် လျော့သွားတယ်။ တံတားငယ်တစ်ခု မရောက်ခင် လမ်းဘေးကို ထိုးရပ်လိုက်တယ်။",
    p: "A minibus pulling onto the verge of a wet rural road just short of a small concrete bridge, "
      + "headlights still on, rain in the beams.",
    u: ["နောက်နာရီဝက်လောက်မှာ ကားအရှိန် လျော့သွားတယ်။",
        "တံတားငယ်တစ်ခု မရောက်ခင် လမ်းဘေးကို ထိုးရပ်လိုက်တယ်။",
        "“ဘာဖြစ်လို့လဲ၊ ဦးလေး။” “ဘီးနည်းနည်းကြည့်မလို့။” သူ စက်ရပ်လိုက်တယ်။"] },

  { t: "Someone at the Bridge Rail", l: "လမ်းဘေး", w: ["အမေ"],
    g: "ကားရှေ့မီးတန်းအစွန်းမှာ မိန်းမတစ်ယောက်။ တံတားလက်ရန်းနားမှာ ရပ်နေတယ်။ မျက်နှာကို မမြင်ရဘူး။",
    p: "⚠️ THROUGH RAIN AND AT DISTANCE. A woman's figure standing at the far edge of a headlight "
      + "beam beside a bridge railing, her face not readable, rain between her and the camera.",
    u: ["အဲဒီအချိန်မှာပဲ ကားရှေ့မီးတန်းအစွန်းမှာ လူတစ်ယောက်ကို ကျွန်တော် မြင်လိုက်ရတယ်။",
        "မိန်းမတစ်ယောက်။ တံတားလက်ရန်းနားမှာ ရပ်နေတယ်။",
        "မျက်နှာကိုတော့ မမြင်ရဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "His Hand Stopped on the Switch", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "ယာဉ်မောင်းလည်း မြင်တယ်။ သူ့လက်က မီးခလုတ်ပေါ်မှာ ခဏတန့်သွားတယ်။",
    p: "A driver's hand frozen on a dashboard light switch, his face lit from the windscreen, "
      + "recognition arriving on it.",
    u: ["ယာဉ်မောင်းလည်း မြင်တယ်။",
        "သူ့လက်က မီးခလုတ်ပေါ်မှာ ခဏတန့်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Whatever You See Outside", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "ပြီးတော့ မီးအားလုံးကို ပိတ်ချလိုက်တယ် — “အပြင်မှာ ဘာမြင်မြင် မကြည့်နဲ့။ မျက်လုံးမှိတ်ထားပါ။”",
    p: "A minibus interior going completely dark as every light is cut at once, only the shape of the "
      + "windscreen and rain remaining.",
    u: ["ပြီးတော့ မီးအားလုံးကို ပိတ်ချလိုက်တယ်။",
        "“အပြင်မှာ ဘာမြင်မြင် မကြည့်နဲ့။ မျက်လုံးမှိတ်ထားပါ။”"],
    c: [[1, "bigstinger"]] },

  { t: "Her Palm on the Glass", l: "မှန်ပြင်", w: ["အမေ", "ရွှေရည်"],
    g: "မိန်းမက ကားဘေးမှာ ရပ်နေတယ်။ ရှေ့ခုံက မိန်းကလေးကို ကြည့်နေတယ်။ လက်ဖဝါးကို မှန်ပေါ် တင်လိုက်တယ်။",
    p: "⚠️ THROUGH GLASS. A woman's open palm pressed flat on the outside of a rain-covered bus "
      + "window, water running around it, her face behind it out of focus and turned toward the front "
      + "of the bus.",
    u: ["အဲဒီမိန်းမက ကျွန်တော်တို့ကားဘေးမှာ ရပ်နေတယ်။ ရှေ့ခုံက မိန်းကလေးကို ကြည့်နေတယ်။",
        "သူ့လက်ဖဝါးကို မှန်ပေါ် တင်လိုက်တယ်။ ရေစက်တွေ မှန်ပေါ်မှာ စီးကျလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Would Not Wake", l: "ကားထဲ", w: ["မင်းခန့်", "ရွှေရည်"],
    g: "ကျွန်တော် မိန်းကလေးရဲ့ ပခုံးကို လှမ်းတို့လိုက်တယ်။ သူ မနိုးဘူး။",
    p: "A man's hand shaking a sleeping young woman's shoulder from the seat behind, her head "
      + "sliding limply down the window glass toward him.",
    u: ["ကျွန်တော် မိန်းကလေးရဲ့ ပခုံးကို လှမ်းတို့လိုက်တယ်။",
        "“ညီမ… အပြင်က အစ်မက ညီမကို သိလားမသိဘူး။” သူ မနိုးဘူး။ ထပ်လှုပ်တယ်။",
        "သူ့ခေါင်းက ပြတင်းပေါက်ကနေ ကျွန်တော့်ဘက် လျှောကျလာတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Her Mouth Was Slightly Open", l: "ကားထဲ", w: ["ရွှေရည်"],
    g: "ပါးစပ်က နည်းနည်းဟနေတယ်။ မျက်လုံးတွေ ဖွင့်မလာဘူး။ ကျွန်တော် တစ်မျိုးဖြစ်သွားတယ်။",
    p: "Close on a drugged young woman's face against a seat back, lips slightly parted, breathing "
      + "visibly. ⚠️ She is unconscious, not dead — the chest moves.",
    u: ["ပါးစပ်က နည်းနည်းဟနေတယ်။ မျက်လုံးတွေ ဖွင့်မလာဘူး။",
        "ကျွန်တော် တစ်မျိုးဖြစ်သွားတယ်။ “ညီမ။”"],
    c: [[1, "stinger"]] },

  { t: "Don't Wake Her", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "ယာဉ်မောင်းက ရုတ်တရက် ပြောတယ် — “မနှိုးနဲ့။”",
    p: "⚠️ THE TURN. A driver twisted round in his seat in the dark looking down the aisle — the same "
      + "man, the same clothes, and the warmth completely gone from his face.",
    u: ["ယာဉ်မောင်းက ရုတ်တရက် ပြောတယ်။ “မနှိုးနဲ့။”",
        "ကျွန်တော် သူ့ဘက် လှည့်ကြည့်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Smile Was Gone", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "သူက ကားမောင်းခုံကနေ လှည့်ကြည့်နေပြီ။ မျက်နှာက မည်းနေတယ်။ ကားစီးခါစကလို အပြုံးမရှိတော့ဘူး။",
    p: "Close on the driver's face half in shadow, flat and unreadable, nothing like the man who "
      + "carried the bags.",
    u: ["သူက ကားမောင်းခုံကနေ လှည့်ကြည့်နေပြီ။ မျက်နှာက မည်းနေတယ်။",
        "ကားစီးခါစကလို အပြုံးမရှိတော့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Are You Going to Let Her See Him", l: "ကားထဲ", w: ["ယာဉ်မောင်း", "မင်းခန့်"],
    g: "“သူ့ကို မြင်အောင် လုပ်ပေးမလို့လား။” “ဘယ်သူ့ကိုလဲ။” “အပြင်ကဟာကို။”",
    p: "A man in a bus seat gone rigid, and in the foreground out of focus the driver's shoulder "
      + "turned toward him.",
    u: ["“သူ့ကို မြင်အောင် လုပ်ပေးမလို့လား။” ကျွန်တော့်ရင်ထဲ အေးသွားတယ်။",
        "“ဘယ်သူ့ကိုလဲ။” ယာဉ်မောင်းက ပြတင်းပေါက်ဘက် မျက်စောင်းထိုးပြတယ်။",
        "“အပြင်ကဟာကို။”"],
    c: [[2, "bigstinger"]] },

  { t: "Now She Was Looking at Me", l: "မှန်ပြင်", w: ["အမေ"],
    g: "မိန်းမက ကျွန်တော့်ကို တည့်တည့်ကြည့်နေပြီ။ သူ့မျက်နှာက မှန်နဲ့ အရမ်းနီးတယ်။",
    p: "⚠️ THROUGH GLASS. The woman's face very close to the outside of the window, looking straight "
      + "into camera for the first time. Wet, muddy, and plainly worried — no menace at all.",
    u: ["ကျွန်တော် အပြင်ကို ပြန်ကြည့်လိုက်တယ်။",
        "မိန်းမက ကျွန်တော့်ကို တည့်တည့်ကြည့်နေပြီ။ သူ့မျက်နှာက မှန်နဲ့ အရမ်းနီးတယ်။",
        "သူ့ပါးစပ်က ထပ်လှုပ်တယ်။ ဒီတစ်ခါ ပိုမြန်တယ်။ “နှိုးပေးပါ။”"],
    c: [[2, "bigstinger"]] },

  { t: "I Closed My Eyes", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကျွန်တော် မျက်လုံးမှိတ်လိုက်တယ်။ ကိုယ့်အသက်ရှူသံကိုယ် ကြားနေရတယ်။",
    p: "Close on a man's face with his eyes squeezed shut in a dark bus, everything else black.",
    u: ["ကျွန်တော် မျက်လုံးမှိတ်လိုက်တယ်။",
        "ကိုယ့်အသက်ရှူသံကိုယ် ကြားနေရတယ်။"] },

  { t: "Two Sets of Footsteps", l: "ကားထဲ",
    g: "ယာဉ်မောင်း ဆင်းသွားတယ်။ ကားဘေးမှာ ခြေသံတွေ ကြားလာတယ်။ ဘယ်ဟာက ဘယ်သူလဲ မခွဲနိုင်ဘူး။",
    p: "A closed bus door from inside in near-darkness, rain on the glass, nothing visible beyond it.",
    u: ["ယာဉ်မောင်း တံခါးဖွင့်သံ ကြားရတယ်။ ဆင်းသွားတယ်။ တံခါးကို ပြန်ပိတ်တယ်။",
        "ခဏကြာတော့ ကားဘေးမှာ ခြေသံတွေ ကြားလာတယ်။",
        "ဘယ်ခြေသံက ယာဉ်မောင်းလဲ၊ ဘယ်ခြေသံက အဲဒီမိန်းမလဲ ကျွန်တော် မခွဲနိုင်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "A Zip Being Opened", l: "ကားထဲ",
    g: "နောက်တံခါး ဖွင့်သံ။ အိတ်တစ်လုံး ဆွဲချသံ။ ပြီးတော့ ဇစ်ဖွင့်သံ။",
    p: "The dark interior of a minibus from a seated eyeline, the rear luggage area implied beyond, "
      + "nothing visible — a shot about sound.",
    u: ["နောက်တံခါး ဖွင့်သံ ကြားရတယ်။ အိတ်တစ်လုံး ဆွဲချသံ။",
        "ပြီးတော့ ဇစ်ဖွင့်သံ။",
        "ဘီးကြည့်မယ်ဆိုပြီး ဘာလို့ အိတ်တွေ ထုတ်နေတာလဲ။"],
    c: [[2, "bigstinger"]] },

  { t: "The Red Bag Was Gone", l: "ကားထဲ", w: ["ရွှေရည်"],
    g: "ရှေ့က မိန်းကလေးရဲ့ အိတ်အနီလေး မရှိတော့ဘူး။ ခုနက သူ့ရင်ခွင်မှာ ရှိနေတာ။",
    p: "A young woman asleep in a bus seat with both arms now empty in her lap — the red bag that was "
      + "against her chest is not there.",
    u: ["ကျွန်တော် မျက်လုံးနည်းနည်း ဖွင့်ကြည့်လိုက်တယ်။",
        "ရှေ့က မိန်းကလေးရဲ့ အိတ်အနီလေး မရှိတော့ဘူး။ ခုနက သူ့ရင်ခွင်မှာ ရှိနေတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "A Pocket Turned Out", l: "ကားထဲ",
    g: "နောက်တန်းက လူကြီးတစ်ယောက်ရဲ့ အင်္ကျီအိတ်က လှန်ထွက်နေတယ်။ လက်တစ်ဖက်က ဘေးကို တွဲလောင်းကျနေတယ်။",
    p: "An older sleeping passenger further back, a shirt pocket pulled inside out, one arm hanging "
      + "loose off the seat.",
    u: ["ကျွန်တော် နောက်ကို လှည့်ကြည့်တယ်။",
        "နောက်တန်းက လူကြီးတစ်ယောက်ရဲ့ အင်္ကျီအိတ်က လှန်ထွက်နေတယ်။",
        "သူ့ရင်ဘတ်ပေါ်မှာ တင်ထားတဲ့ လက်တစ်ဖက်က ဘေးကို တွဲလောင်းကျနေတယ်။ သူလည်း မနိုးဘူး။"],
    c: [[2, "stinger"]] },

  { t: "The Unopened Bottle", l: "ကားထဲ", w: ["ရေဘူး", "မင်းခန့်"],
    g: "ထိုင်ခုံအောက်က ရေဘူးကို မြင်လိုက်တယ်။ အဖုံးတောင် မဖွင့်ရသေးတဲ့ ရေဘူး။",
    p: "A hand retrieving an unopened water bottle from under a bus seat, the cap seal visibly "
      + "unbroken, held up in the dark.",
    u: ["ကျွန်တော် သူ့ခြေထောက်ကို လှမ်းလှုပ်လိုက်တယ်။ ဘာတုံ့ပြန်မှုမှ မရှိဘူး။",
        "အဲဒီအချိန်မှာ ကျွန်တော့်ထိုင်ခုံအောက်က ရေဘူးကို မြင်လိုက်ရတယ်။",
        "အဖုံးတောင် မဖွင့်ရသေးတဲ့ ရေဘူး။ ကျွန်တော် ဖြည်းဖြည်း ကောက်ယူလိုက်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Everyone Drank It", l: "ကားထဲ",
    g: "ကားပေါ်မှာ အိပ်နေတဲ့လူတွေ။ လူတိုင်း သောက်ခဲ့တဲ့ရေ။ ယာဉ်မောင်းက ထပ်ခါထပ်ခါ သောက်ခိုင်းခဲ့တာ။",
    p: "A wide shot down the dark aisle: every passenger slumped, and an empty water bottle visible "
      + "in or beside almost every seat.",
    u: ["ကားပေါ်မှာ အိပ်နေတဲ့လူတွေ။ လူတိုင်း သောက်ခဲ့တဲ့ရေ။",
        "ယာဉ်မောင်းက ကျွန်တော့်ကို ထပ်ခါထပ်ခါ သောက်ခိုင်းခဲ့တာ။"],
    c: [[1, "bigstinger"]] },

  { t: "Are They Even Asleep", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကျွန်တော့်လက်ထဲက ရေဘူး တကျွိကျွိ မြည်သွားတယ်။ သူတို့ အိပ်ပျော်နေတာမှ ဟုတ်ရဲ့လား။",
    p: "A man's fist crushing a plastic bottle in the dark, his face above it working something out "
      + "he does not want to be true.",
    u: ["ကျွန်တော့်လက်ထဲက ရေဘူး တကျွိကျွိ မြည်သွားတယ်။",
        "သူတို့ အိပ်ပျော်နေတာမှ ဟုတ်ရဲ့လား။"],
    c: [[1, "bigstinger"]] },

  { t: "Three Knocks", l: "မှန်ပြင်",
    g: "ပြတင်းပေါက်ကို သုံးချက်ခေါက်သံ ကြားရတယ်။ ကျွန်တော် လန့်ပြီး မော့ကြည့်လိုက်တယ်။",
    p: "A rain-covered bus window from inside, a knuckle just leaving the glass, three small clear "
      + "patches where it struck.",
    u: ["ပြတင်းပေါက်ကို သုံးချက်ခေါက်သံ ကြားရတယ်။",
        "ကျွန်တော် လန့်ပြီး မော့ကြည့်လိုက်တယ်။ မိန်းမက အပြင်မှာ ရှိနေတုန်းပဲ။"],
    c: [[0, "knock"]] },

  { t: "There Was No Anger in Her Eyes", l: "မှန်ပြင်", w: ["အမေ"],
    g: "ဒီတစ်ခါ မျက်နှာကို သေသေချာချာ မြင်ရတယ်။ နှုတ်ခမ်းတွေ ဖြူနေတယ်။ မျက်လုံးတွေထဲမှာ ဒေါသမရှိဘူး။",
    p: "⚠️ THROUGH GLASS, AND SHE IS NOT FRIGHTENING. The woman's face clearly readable for the first "
      + "time: pale lips, wet hair, mud on her collar — and an expression of pure worry. No anger, no "
      + "threat, no decay.",
    u: ["ဒီတစ်ခါ သူ့မျက်နှာကို သေသေချာချာ မြင်ရတယ်။ နှုတ်ခမ်းတွေ ဖြူနေတယ်။",
        "မျက်လုံးတွေထဲမှာ ဒေါသမရှိဘူး။",
        "စိုးရိမ်နေတာ။ ကျွန်တော်တို့ကို စိုးရိမ်နေတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "She Shook Her Head at the Bottle", l: "မှန်ပြင်", w: ["အမေ", "ရေဘူး"],
    g: "သူက ကျွန်တော့်လက်ထဲက ရေဘူးကို ကြည့်ပြီး ခေါင်းခါတယ်။",
    p: "Through the glass, the woman's eyes going to the water bottle in the man's hand and her head "
      + "moving once, slowly, side to side.",
    u: ["သူက ကျွန်တော့်လက်ထဲက ရေဘူးကို ကြည့်ပြီး ခေါင်းခါတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Wake My Daughter", l: "မှန်ပြင်", w: ["အမေ", "ရွှေရည်"],
    g: "လက်ညှိုးတစ်ချောင်းနဲ့ ရှေ့က မိန်းကလေးကို ထိုးပြတယ် — “ကျွန်မ သမီးကို နှိုးပေးပါ။”",
    p: "A single finger pressed against wet glass pointing forward down the bus, and behind it the "
      + "woman's mouth shaping words.",
    u: ["ပြီးတော့ လက်ညှိုးတစ်ချောင်းနဲ့ ရှေ့က မိန်းကလေးကို ထိုးပြတယ်။ နှုတ်ခမ်းလှုပ်တယ်။",
        "ဒီတစ်ခါ စကားလုံးတွေကို ကျွန်တော် အတိအကျ ဖတ်မိတယ်။",
        "“ကျွန်မ သမီးကို နှိုးပေးပါ။”"],
    c: [[2, "bigstinger"]] },

  { t: "Her Eyelids Moved", l: "ကားထဲ", w: ["မင်းခန့်", "ရွှေရည်"],
    g: "ကျွန်တော် မိန်းကလေးရဲ့ ပခုံးကို လက်နှစ်ဖက်နဲ့ လှုပ်တယ်။ သူ့မျက်ခွံတွေ နည်းနည်း လှုပ်တယ်။",
    p: "A man shaking a young woman's shoulders with both hands in a dark bus, her eyelids "
      + "flickering without opening.",
    u: ["ကျွန်တော် ရေဘူးကို ချလိုက်တယ်။ မိန်းကလေးရဲ့ ပခုံးကို လက်နှစ်ဖက်နဲ့ လှုပ်တယ်။",
        "“ညီမ။ နိုးဦး။ ကြားလား။”",
        "သူ့မျက်ခွံတွေ နည်းနည်း လှုပ်တယ်။ ဒါပေမယ့် မနိုးနိုင်ဘူး။"],
    c: [[2, "stinger"]] },

  { t: "Her Phone Between the Seats", l: "ကားထဲ",
    g: "သူ့ဖုန်းက ထိုင်ခုံကြားထဲ ကျနေတယ်။ ကျွန်တော် ဆွဲထုတ်လိုက်တယ်။ မျက်နှာပြင် လင်းလာတယ်။",
    p: "A hand pulling a phone out of the gap between two bus seats, its screen waking and lighting "
      + "the dark.",
    u: ["သူ့ဖုန်းက ထိုင်ခုံကြားထဲ ကျနေတယ်။",
        "ကျွန်တော် ဖုန်းကို ဆွဲထုတ်လိုက်တယ်။ မျက်နှာပြင် လင်းလာတယ်။"] },

  { t: "A Photograph at a Pagoda", l: "ကားထဲ", w: ["ရွှေရည်", "အမေ"],
    g: "နောက်ခံပုံမှာ အဲဒီမိန်းကလေးနဲ့ သူ့အမေ။ ဘုရားတစ်ဆူရှေ့မှာ ရိုက်ထားတဲ့ပုံ။ အမေက ပြုံးနေတယ်။",
    p: "⚠️ HERE SHE IS DRY, WARM AND SMILING. A phone lock screen showing a snapshot of a young woman "
      + "beside an older woman in front of a pagoda in sunlight — the same face as the woman outside, "
      + "clean, happy and entirely alive.",
    u: ["နောက်ခံပုံမှာ—",
        "အဲဒီမိန်းကလေးနဲ့ သူ့အမေ။ ဘုရားတစ်ဆူရှေ့မှာ ရိုက်ထားတဲ့ပုံ။ သူ့အမေက ပြုံးနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Same Woman", l: "မှန်ပြင်", w: ["အမေ"],
    g: "ကျွန်တော် ပြတင်းပေါက်ကို ပြန်ကြည့်လိုက်တယ်။ ပုံထဲက မိန်းမနဲ့ အပြင်က မိန်းမဟာ တစ်ယောက်တည်း။",
    p: "A lit phone screen held up in the foreground with the smiling pagoda photograph on it, and "
      + "beyond it through the wet window the same face, wet and worried, looking in.",
    u: ["ကျွန်တော် ပြတင်းပေါက်ကို ပြန်ကြည့်လိုက်တယ်။",
        "ပုံထဲက မိန်းမနဲ့ အပြင်က မိန်းမဟာ တစ်ယောက်တည်း။"],
    c: [[1, "bigstinger"]] },

  { t: "He Was Coming Back", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကားရှေ့တံခါး ဖွင့်သံ ကြားရတယ်။ ကျွန်တော် ဖုန်းကို ချပြီး ခေါင်းငုံ့လိုက်တယ်။",
    p: "A man dropping a phone onto a seat and folding forward with his eyes shut and his hands flat "
      + "on his thighs, feigning sleep.",
    u: ["ကားရှေ့တံခါး ဖွင့်သံ ကြားရတယ်။ ယာဉ်မောင်း ပြန်တက်လာပြီ။",
        "ကျွန်တော် ဖုန်းကို ခုံပေါ် ချပြီး ခေါင်းငုံ့လိုက်တယ်။",
        "မျက်လုံးမှိတ်ထားတယ်။ လက်နှစ်ဖက်ကို ပေါင်ပေါ် တင်ထားတယ်။"],
    c: [[2, "stinger"]] },

  { t: "He Stopped Beside Me", l: "ကားထဲ", w: ["ယာဉ်မောင်း", "မင်းခန့်"],
    g: "သူ ကားထဲ ဝင်လာတယ်။ ကျွန်တော့်နားမှာ ရပ်တယ်။ အသက်ရှူတာကို ပုံမှန်ဖြစ်အောင် ထိန်းနေရတယ်။",
    p: "A man pretending to sleep in a bus seat with someone standing over him in the aisle, only "
      + "the standing figure's torso in frame.",
    u: ["သူ ကားထဲ ဝင်လာတယ်။ ကျွန်တော့်နားမှာ ရပ်တယ်။",
        "ကျွန်တော် အသက်ရှူတာကို ပုံမှန်ဖြစ်အောင် ထိန်းနေရတယ်။"],
    c: [[1, "heartbeat"]] },

  { t: "He Took My Wallet", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "သူ့လက်က ကျွန်တော့်အင်္ကျီအိတ်ကို လာထိတယ်။ ပိုက်ဆံအိတ်ကို ဖြည်းဖြည်း ဆွဲထုတ်တယ်။",
    p: "A hand easing a wallet out of a sleeping man's jacket pocket with great care, the man's own "
      + "face still and eyes shut.",
    u: ["သူ့လက်က ကျွန်တော့်အင်္ကျီအိတ်ကို လာထိတယ်။",
        "ပိုက်ဆံအိတ်ကို ဖြည်းဖြည်း ဆွဲထုတ်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Smelled the Flask", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "ပြီးတော့ ကျွန်တော့်လက်ထဲက လက်ဖက်ရည်ဘူးကို ယူကြည့်တယ်။ အဖုံးဖွင့်သံ။ အနံ့ရှူသံ။ ခဏတိတ်သွားတယ်။",
    p: "A man's hands opening a thermos flask taken from a sleeping passenger and holding it to his "
      + "nose, his face gone very still.",
    u: ["ပြီးတော့ ကျွန်တော့်လက်ထဲက လက်ဖက်ရည်ဘူးကို ယူကြည့်တယ်။",
        "အဖုံးဖွင့်သံ။ အနံ့ရှူသံ။ ခဏတိတ်သွားတယ်။",
        "ကျွန်တော် မျက်လုံးမဖွင့်ရဲဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "His Finger on My Eyelid", l: "ကားထဲ", w: ["ယာဉ်မောင်း", "မင်းခန့်"],
    g: "သူ့အသက်ရှူသံကို နားနားမှာ ကြားရတယ် — “ညီလေး…” သူ့လက်ချောင်းက ကျွန်တော့်မျက်ခွံကို လာထိတယ်။",
    p: "Extreme close-up of a fingertip touching the closed eyelid of a man pretending to sleep, "
      + "about to lift it.",
    u: ["သူ ကျွန်တော့်အနားကို ကိုင်းလာတယ်။ သူ့အသက်ရှူသံကို နားနားမှာ ကြားရတယ်။ “ညီလေး…”",
        "ကျွန်တော် မလှုပ်ဘူး။",
        "သူ့လက်ချောင်းက ကျွန်တော့်မျက်ခွံကို လာထိတယ်။ မျက်ခွံကို ဖွင့်ကြည့်မလို့။"],
    c: [[2, "bigstinger"]] },

  { t: "A Bang on the Far Window", l: "ကားထဲ",
    g: "အဲဒီအချိန်မှာ ကားတစ်ဖက်က ပြတင်းပေါက်ကို ဒုန်းခနဲ ရိုက်သံ ကြားရတယ်။",
    p: "A bus window on the opposite side of the aisle struck hard from outside, the glass flexing, "
      + "water bursting off it.",
    u: ["အဲဒီအချိန်မှာ— ကားတစ်ဖက်က ပြတင်းပေါက်ကို ဒုန်းခနဲ ရိုက်သံ ကြားရတယ်။",
        "ယာဉ်မောင်းက ရုတ်တရက် နောက်ဆုတ်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Both Palms on the Glass", l: "မှန်ပြင်", w: ["အမေ", "ယာဉ်မောင်း"],
    g: "မိန်းမက မှန်အပြင်မှာ ရပ်နေတယ်။ လက်ဖဝါးနှစ်ဖက်ကို မှန်ပေါ် ကပ်ထားတယ်။ ယာဉ်မောင်းကို ကြည့်နေတယ်။",
    p: "⚠️ THROUGH GLASS. The woman with both palms flat on the outside of a bus window, her eyes "
      + "fixed not on the camera but on the driver — still without menace.",
    u: ["ကျွန်တော် မျက်လုံးဖွင့်လိုက်တယ်။ မိန်းမက မှန်အပြင်မှာ ရပ်နေတယ်။",
        "လက်ဖဝါးနှစ်ဖက်ကို မှန်ပေါ် ကပ်ထားတယ်။ ယာဉ်မောင်းကို ကြည့်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Not This Time", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "ယာဉ်မောင်းက ခေါင်းခါနေတယ် — “မလာနဲ့။ ဒီတစ်ခါ နင့်ကို ဘာမှမလုပ်ဘူး။ မလာနဲ့။”",
    p: "A driver backed against a seat with both hands raised, shaking his head at a window, his "
      + "voice visibly shaking. He is frightened, not dangerous, in this frame.",
    u: ["ယာဉ်မောင်းက ခေါင်းခါနေတယ်။ “မလာနဲ့။” သူ့အသံ တုန်နေတယ်။",
        "“ဒီတစ်ခါ နင့်ကို ဘာမှမလုပ်ဘူး။ မလာနဲ့။”"],
    c: [[1, "bigstinger"]] },

  { t: "This Time", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကျွန်တော် အဲဒီစကားကို ကြားလိုက်ရတယ် — ဒီတစ်ခါ။",
    p: "Close on a man's face in the dark as a single phrase lands and reorganises everything he "
      + "thought was happening.",
    u: ["ကျွန်တော် အဲဒီစကားကို ကြားလိုက်ရတယ်။",
        "ဒီတစ်ခါ။"],
    c: [[1, "bigstinger"]] },

  { t: "My Daughter", l: "မှန်ပြင်", w: ["အမေ"],
    g: "မိန်းမက နှုတ်ခမ်းလှုပ်တယ်။ အခု သူပြောနေတာက စကားတစ်ခွန်းတည်း — “ငါ့သမီး။”",
    p: "⚠️ THROUGH GLASS. Extreme close-up of the woman's mouth forming two words, her eyes above it "
      + "streaming with rain or tears, indistinguishable.",
    u: ["မိန်းမက နှုတ်ခမ်းလှုပ်တယ်။ ယာဉ်မောင်းက နားလည်တယ်။ သူ့မျက်နှာ ပိုဖြူသွားတယ်။",
        "ကျွန်တော်လည်း နားလည်တယ်။ အခု သူပြောနေတာက စကားတစ်ခွန်းတည်း။",
        "“ငါ့သမီး။”"],
    c: [[2, "bigstinger"]] },

  { t: "He Only Understood Now", l: "ကားထဲ", w: ["ယာဉ်မောင်း", "ရွှေရည်"],
    g: "ယာဉ်မောင်းက ရှေ့ခုံက မိန်းကလေးကို လှည့်ကြည့်တယ်။ ပြီးတော့ အပြင်က မိန်းမကို ပြန်ကြည့်တယ်။",
    p: "A driver looking from a sleeping young woman in the front seat to the window and back again, "
      + "the resemblance landing on him.",
    u: ["ယာဉ်မောင်းက ရှေ့ခုံက မိန်းကလေးကို လှည့်ကြည့်တယ်။",
        "ပြီးတော့ ကားအပြင်က မိန်းမကို ပြန်ကြည့်တယ်။",
        "သူလည်း အခုမှ သိသွားတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "I Used That Moment", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကျွန်တော် အဲဒီအခိုက်အတန့်ကို သုံးလိုက်တယ်။ ထိုင်ခုံကနေ ထပြီး ယာဉ်မောင်းခုံဆီ ပြေးတယ်။",
    p: "A man launching out of a bus seat and down the narrow aisle toward the driver's position, "
      + "motion blur.",
    u: ["ကျွန်တော် အဲဒီအခိုက်အတန့်ကို သုံးလိုက်တယ်။",
        "ထိုင်ခုံကနေ ထပြီး ရှေ့က ယာဉ်မောင်းခုံဆီ ပြေးတယ်။"] },

  { t: "He Leaned on the Horn", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ဟွန်းကို ဖိချလိုက်တယ်။ ညအမှောင်ထဲမှာ ဟွန်းသံက အဆက်မပြတ် ထွက်သွားတယ်။ ရှေ့မီးတွေ ဖွင့်တယ်။",
    p: "A hand jammed down flat on a steering wheel horn, and through the windscreen the headlights "
      + "coming on across wet road and rain.",
    u: ["ဟွန်းကို ဖိချလိုက်တယ်။",
        "ညအမှောင်ထဲမှာ ဟွန်းသံက အဆက်မပြတ် ထွက်သွားတယ်။ ရှေ့မီးတွေ ဖွင့်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Wake Up. There Are People Here.", l: "ကားထဲ", w: ["ယာဉ်မောင်း", "မင်းခန့်"],
    g: "ယာဉ်မောင်းက ကျွန်တော့်အင်္ကျီကို ဆွဲတယ်။ ကျွန်တော် အားကုန်အော်တယ်။",
    p: "Two men struggling over a steering wheel in a lit bus cab, one hauling at the other's jacket "
      + "while the other keeps his hand on the horn. ⚠️ A scuffle, not a beating — no blows landed.",
    u: ["ယာဉ်မောင်းက ကျွန်တော့်ဆီ လှည့်လာတယ်။ ကျွန်တော့်အင်္ကျီကို ဆွဲတယ်။ “ဘာလုပ်တာလဲ။”",
        "ကျွန်တော် ဟွန်းကို မလွှတ်ဘူး။ သူ ကျွန်တော့်လက်ကို ဆွဲဖယ်ဖို့ ကြိုးစားတယ်။",
        "ကျွန်တော် အားကုန်အော်တယ်။ “နိုးကြပါဦး။ ကားပေါ်မှာ လူရှိတယ်။ ကူကြပါဦး။”"],
    c: [[2, "bigstinger"]] },

  { t: "Someone Groaned", l: "ကားထဲ", w: ["ရွှေရည်"],
    g: "နောက်တန်းက လူတစ်ယောက် ညည်းသံ ထွက်လာတယ်။ ရှေ့က မိန်းကလေးက မျက်လုံးနည်းနည်း ဖွင့်လာတယ်။",
    p: "A young woman's eyes opening a fraction in a bus seat, unfocused, and further back another "
      + "passenger's head shifting.",
    u: ["နောက်တန်းက လူတစ်ယောက် ညည်းသံ ထွက်လာတယ်။",
        "ရှေ့က မိန်းကလေးက မျက်လုံးနည်းနည်း ဖွင့်လာတယ်။"],
    c: [[1, "stinger"]] },

  { t: "The Horn Stopped", l: "ကားထဲ",
    g: "ယာဉ်မောင်းက ကျွန်တော့်ကို ကားရှေ့တံခါးဘက် ဆောင့်တွန်းတယ်။ ဟွန်းသံ ရပ်သွားတယ်။",
    p: "A man shoved back against an open bus door, his hand leaving the wheel, the cab suddenly "
      + "silent.",
    u: ["ယာဉ်မောင်းက ကျွန်တော့်ကို ကားရှေ့တံခါးဘက် ဆောင့်တွန်းတယ်။",
        "ကျွန်တော် တံခါးလက်ကိုင်ကို ဖမ်းထားလိုက်တယ်။ ဟွန်းသံ ရပ်သွားတယ်။"] },

  { t: "Another Horn Answered", l: "လမ်းဘေး",
    g: "အဲဒီခဏတိတ်သွားတဲ့အချိန်မှာ လမ်းပေါ်က ကားကြီးတစ်စီးရဲ့ ဟွန်းသံကို ပြန်ကြားရတယ်။",
    p: "Two distant headlights appearing far down a wet night road, small and approaching.",
    u: ["အဲဒီခဏတိတ်သွားတဲ့အချိန်မှာ—",
        "လမ်းပေါ်က ကားကြီးတစ်စီးရဲ့ ဟွန်းသံကို ပြန်ကြားရတယ်။",
        "အဝေးမှာ ရှေ့မီးနှစ်လုံး ပေါ်လာတယ်။ ကျွန်တော် လက်လှမ်းဝှေ့ယမ်းတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "He Let Go and Ran", l: "လမ်းဘေး", w: ["ယာဉ်မောင်း"],
    g: "ယာဉ်မောင်းလည်း မြင်သွားတယ်။ သူ ကျွန်တော့်ကို လွှတ်လိုက်တယ်။ ကားပေါ်ကနေ ခုန်ဆင်းပြီး ပြေးဖို့ လုပ်တယ်။",
    p: "A man jumping down from a minibus door onto wet tarmac and starting toward the scrub at the "
      + "roadside, headlights approaching behind him.",
    u: ["ယာဉ်မောင်းလည်း မြင်သွားတယ်။ သူ ကျွန်တော့်ကို လွှတ်လိုက်တယ်။",
        "ကားပေါ်ကနေ ခုန်ဆင်းပြီး လမ်းဘေးချုံတွေဘက် ပြေးဖို့ လုပ်တယ်။"] },

  { t: "Two Steps", l: "လမ်းဘေး", w: ["ယာဉ်မောင်း", "အမေ"],
    g: "ဒါပေမယ့် နှစ်လှမ်းပဲ ရောက်တယ်။ ရပ်သွားတယ်။ ကားရှေ့မီးထဲမှာ အဲဒီမိန်းမ ရပ်နေတယ်။",
    p: "⚠️ SEEN THROUGH RAIN IN A HEADLIGHT BEAM. A man stopped dead two paces from the bus, and "
      + "directly ahead of him in the light the woman standing still — calm, wet, not advancing.",
    u: ["ဒါပေမယ့် နှစ်လှမ်းပဲ ရောက်တယ်။ ရပ်သွားတယ်။",
        "ကားရှေ့မီးထဲမှာ အဲဒီမိန်းမ ရပ်နေတယ်။ သူ့ရှေ့တည့်တည့်မှာ။"],
    c: [[1, "bigstinger"]] },

  { t: "Every Way He Turned", l: "လမ်းဘေး", w: ["ယာဉ်မောင်း", "အမေ"],
    g: "သူ လှည့်ပြေးမယ်ဆိုတဲ့ဘက်တိုင်းမှာ မိန်းမက ရှိနေတယ်။",
    p: "A man turning on the spot in headlight glare with the same figure ahead of him in each "
      + "direction — a composition of a man boxed in by one person.",
    u: ["သူ နောက်ပြန်ဆုတ်တယ်။ ကားဘက်ကို ပြန်ဆုတ်တယ်။",
        "မိန်းမက တစ်လှမ်းချင်း လိုက်လာတယ်။",
        "သူ လှည့်ပြေးမယ်ဆိုတဲ့ဘက်တိုင်းမှာ မိန်းမက ရှိနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Never Saw Her Walk", l: "လမ်းဘေး", w: ["အမေ"],
    g: "ကျွန်တော် မျက်တောင်တစ်ခါခတ်လိုက်တိုင်း နေရာပြောင်းသွားတယ်။ ဒါပေမယ့် သူ လျှောက်သွားတာကို တစ်ခါမှ မမြင်ခဲ့ရဘူး။",
    p: "⚠️ SHE MUST NOT BE SHOWN MOVING. The same rain-lit roadside with her standing in a new "
      + "position, her feet flat and still, no motion blur anywhere on her.",
    u: ["ကျွန်တော် မျက်တောင်တစ်ခါခတ်လိုက်တိုင်း—",
        "နေရာပြောင်းသွားတယ်။",
        "ဒါပေမယ့် သူ လျှောက်သွားတာကို ကျွန်တော် တစ်ခါမှ မမြင်ခဲ့ရဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "The Lorry Stopped for Us", l: "လမ်းဘေး",
    g: "ကားကြီးက ကျွန်တော်တို့ရှေ့မှာ ရပ်ပေးတယ်။ လူနှစ်ယောက် ဆင်းလာတယ်။",
    p: "A lorry pulled up on a wet road at night with its headlights on the scene, two men climbing "
      + "down from the cab.",
    u: ["ကားကြီးက ကျွန်တော်တို့ရှေ့မှာ ရပ်ပေးတယ်။",
        "လူနှစ်ယောက် ဆင်းလာတယ်။"] },

  { t: "He Was Kneeling to Nothing", l: "လမ်းဘေး", w: ["ယာဉ်မောင်း"],
    g: "ကျွန်တော်တို့ယာဉ်မောင်းက လမ်းဘေးမှာ ဒူးထောက်နေတာ။ အရှေ့က ဘာမှမရှိတဲ့နေရာကို လက်အုပ်ချီထားတယ်။",
    p: "⚠️ THE SPACE IN FRONT OF HIM IS EMPTY. A man on his knees on a wet verge with his palms "
      + "pressed together, pleading at nothing at all, two lorry drivers staring at him.",
    u: ["သူတို့မြင်တဲ့အချိန်မှာ ကျွန်တော်တို့ယာဉ်မောင်းက လမ်းဘေးမှာ ဒူးထောက်နေတာ။",
        "အရှေ့က ဘာမှမရှိတဲ့နေရာကို လက်အုပ်ချီထားတယ်။",
        "“ထားခဲ့တာပါ… ကျုပ် သတ်တာမဟုတ်ဘူး။” လို့ ထပ်ခါထပ်ခါ ပြောနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "They Could Not See Her", l: "လမ်းဘေး",
    g: "မိန်းမကိုတော့ သူတို့ မမြင်ကြဘူး။",
    p: "The same roadside from the lorry drivers' point of view: a kneeling man, rain, and nobody "
      + "else in the frame at all.",
    u: ["မိန်းမကိုတော့ သူတို့ မမြင်ကြဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "Waking the Bus", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "ကားပေါ်ကလူတွေကို နှိုးပေးကြတယ်။ ဖုန်းဆက်ပြီး အကူအညီ ခေါ်ကြတယ်။",
    p: "The bus interior with its lights on for the first time in the film, people shaking passengers "
      + "awake, one man on a phone in the doorway.",
    u: ["ကျွန်တော် သူတို့ကို အကူအညီတောင်းတယ်။",
        "ကားပေါ်ကလူတွေကို နှိုးပေးကြတယ်။ ဖုန်းဆက်ပြီး အကူအညီ ခေါ်ကြတယ်။",
        "ခရီးသည်တချို့က နိုးလာတယ်။ တချို့က မျက်လုံးဖွင့်နိုင်ပေမယ့် စကားကောင်းကောင်း မပြောနိုင်ကြသေးဘူး။"] },

  { t: "She Held My Hand", l: "လမ်းဘေး", w: ["ရွှေရည်", "မင်းခန့်"],
    g: "ရှေ့ခုံက မိန်းကလေးကို ကားအပြင် ထုတ်ပေးတော့ သူ ကျွန်တော့်လက်ကို ကိုင်ထားတယ်။ မျက်နှာ ဖြူနေတယ်။",
    p: "A young woman helped down from a bus onto wet tarmac, unsteady, gripping a stranger's hand, "
      + "her face bloodless.",
    u: ["ရှေ့ခုံက မိန်းကလေးကို ကားအပြင် ထုတ်ပေးတော့ သူ ကျွန်တော့်လက်ကို ကိုင်ထားတယ်။",
        "မျက်နှာ ဖြူနေတယ်။ “ဘာဖြစ်တာလဲ။”",
        "ကျွန်တော် ဘယ်ကစပြောရမလဲ မသိဘူး။"] },

  { t: "Mother", l: "လမ်းဘေး", w: ["ရွှေရည်"],
    g: "သူ ရုတ်တရက် ကျွန်တော့်ပခုံးနောက်ကို ကြည့်တယ်။ မျက်လုံးတွေ ပြူးလာတယ် — “အမေ…”",
    p: "A young woman's face as her eyes go past the man in front of her to something beyond his "
      + "shoulder, her expression opening completely.",
    u: ["သူ ရုတ်တရက် ကျွန်တော့်ပခုံးနောက်ကို ကြည့်တယ်။",
        "မျက်လုံးတွေ ပြူးလာတယ်။",
        "“အမေ…”"],
    c: [[2, "bigstinger"]] },

  { t: "No Fear in Her Face Now", l: "လမ်းဘေး", w: ["အမေ"],
    g: "မိန်းမက ကားတံခါးနားမှာ ရပ်နေတယ်။ ဒါပေမယ့် သူ့မျက်နှာမှာ ကြောက်စရာ မရှိတော့ဘူး။ သမီးကိုပဲ ကြည့်နေတယ်။",
    p: "⚠️ THROUGH RAIN, and gentle. The woman standing by the open bus door, still wet and muddy, "
      + "but her face entirely soft now — looking only at her daughter.",
    u: ["ကျွန်တော် လှည့်ကြည့်လိုက်တယ်။ မိန်းမက ကားတံခါးနားမှာ ရပ်နေတယ်။ ခုနကလို ရွှံ့စိုနေတဲ့ပုံစံပဲ။",
        "ဒါပေမယ့် သူ့မျက်နှာမှာ ကြောက်စရာ မရှိတော့ဘူး။",
        "သမီးကိုပဲ ကြည့်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Where Are You Going", l: "လမ်းဘေး", w: ["ရွှေရည်", "မင်းခန့်"],
    g: "မိန်းကလေးက သူ့ဆီ လှမ်းသွားဖို့ လုပ်တယ်။ သူ ငိုလာတယ် — “အမေ… ဘယ်သွားနေတာလဲ။”",
    p: "A young woman straining forward toward something while a man holds her arm to keep her "
      + "upright, her legs not yet reliable.",
    u: ["မိန်းကလေးက သူ့ဆီ လှမ်းသွားဖို့ လုပ်တယ်။",
        "ကျွန်တော်က လက်ကို မလွှတ်ရဲဘူး။ သူ လမ်းလျှောက်လို့တောင် ကောင်းသေးတာ မဟုတ်ဘူး။",
        "သူ ငိုလာတယ်။ “အမေ… ဘယ်သွားနေတာလဲ။”"],
    c: [[2, "bigstinger"]] },

  { t: "She Did Not Come Closer", l: "လမ်းဘေး", w: ["အမေ"],
    g: "မိန်းမက လက်တစ်ဖက် မြှောက်လိုက်တယ်။ သမီးနား လာမယ်ထင်ခဲ့တာ။ ဒါပေမယ့် မလာဘူး။",
    p: "⚠️ SHE NEVER TOUCHES ANYONE. The woman raising one hand toward her daughter and stopping — "
      + "the gap between them held, rain falling through it.",
    u: ["မိန်းမက လက်တစ်ဖက် မြှောက်လိုက်တယ်။ သမီးနား လာမယ်ထင်ခဲ့တာ။",
        "ဒါပေမယ့် မလာဘူး။ ခဏလေး ရပ်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Go Home", l: "လမ်းဘေး", w: ["အမေ"],
    g: "ပြီးတော့ သူ့နှုတ်ခမ်းက ဖြည်းဖြည်း လှုပ်တယ် — “အိမ်ပြန်တော့။”",
    p: "⚠️ THROUGH RAIN. Close on the woman's face saying two words, calm and finished, her eyes on "
      + "her daughter.",
    u: ["ပြီးတော့ သူ့နှုတ်ခမ်းက ဖြည်းဖြည်း လှုပ်တယ်။",
        "“အိမ်ပြန်တော့။”"],
    c: [[1, "bigstinger"]] },

  { t: "Headlights Passed", l: "လမ်းဘေး",
    g: "လမ်းမပေါ်က ကားမီးတန်းတစ်ခု ဖြတ်သွားတယ်။ မီးရောင်ပျောက်သွားတဲ့အချိန်မှာ — သူ မရှိတော့ဘူး။",
    p: "A sweep of passing headlights washing across a wet roadside — and in the darkness that "
      + "follows, the same view with nobody standing in it.",
    u: ["လမ်းမပေါ်က ကားမီးတန်းတစ်ခု ဖြတ်သွားတယ်။",
        "မီးရောင်ပျောက်သွားတဲ့အချိန်မှာ—",
        "သူ မရှိတော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "What They Found in His Bag", l: "လမ်းဘေး", w: ["ယာဉ်မောင်း"],
    g: "ကားပေါ်က လူတွေကို ရေထဲကနေ မူးဝေသတိလစ်စေတဲ့အရာ ပေးထားခဲ့တာ။ အဖိုးတန်ပစ္စည်းတွေကို ယာဉ်မောင်းရဲ့ အိတ်ထဲမှာ တွေ့တယ်။",
    p: "A holdall opened on wet tarmac under a torch beam: wallets, phones, a small red shoulder bag "
      + "and several purses jumbled together.",
    u: ["နောက်မှ သိရတဲ့အကြောင်းတွေကို ပြောပြမယ်။",
        "ကားပေါ်က လူတွေကို ရေထဲကနေ မူးဝေသတိလစ်စေတဲ့အရာ တစ်မျိုး ပေးထားခဲ့တာ။",
        "လူတိုင်းရဲ့ အဖိုးတန်ပစ္စည်းတွေကို ယာဉ်မောင်းရဲ့ အိတ်ထဲမှာ တွေ့တယ်။ ကျွန်တော့်ပိုက်ဆံအိတ်လည်း ပါတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "He Never Stopped for a Tyre", l: "လမ်းဘေး",
    g: "သူ ဘီးပြင်ဖို့ ရပ်ခဲ့တာ မဟုတ်ဘူး။ ခရီးသည်တွေ နိုးမလာခင် အိတ်တွေကို ရှင်းနေတာ။",
    p: "A minibus on a verge at night with its rear doors standing open and luggage pulled half out "
      + "onto the wet ground.",
    u: ["သူ ဘီးပြင်ဖို့ ရပ်ခဲ့တာ မဟုတ်ဘူး။",
        "ခရီးသည်တွေ နိုးမလာခင် အိတ်တွေကို ရှင်းနေတာ။"] },

  { t: "It Had Happened Before", l: "လမ်းဘေး",
    g: "အဲဒီလမ်းပိုင်းမှာ အရင်ကလည်း ခရီးသည်တွေ ပစ္စည်းပျောက်ပြီး လမ်းဘေးမှာ ကျန်ခဲ့ဖူးကြတယ်။",
    p: "An empty stretch of the same rural road in grey daylight, ordinary and unremarkable, with a "
      + "drainage channel running beside it.",
    u: ["အဲဒီလမ်းပိုင်းမှာ အရင်ကလည်း ခရီးသည်တွေ ပစ္စည်းပျောက်ပြီး လမ်းဘေးမှာ ကျန်ခဲ့ဖူးကြတယ်။",
        "တချို့က ဘယ်ကားစီးခဲ့မှန်းတောင် ကောင်းကောင်း မမှတ်မိကြတော့ဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Eight Months Ago", l: "လမ်းဘေး", w: ["အမေ"],
    g: "ရှေ့ခုံက မိန်းကလေးရဲ့နာမည်က ရွှေရည်။ သူ့အမေက လွန်ခဲ့တဲ့ ရှစ်လက ညကားစီးပြီး အိမ်ပြန်လာရင်း ပျောက်သွားခဲ့တာ။",
    p: "⚠️ NOTHING IS SHOWN OF WHAT HAPPENED. A grass verge beside a roadside drainage channel in "
      + "daylight, tall wet grass, entirely empty.",
    u: ["ရှေ့ခုံက မိန်းကလေးရဲ့နာမည်က ရွှေရည်။",
        "သူ့အမေက လွန်ခဲ့တဲ့ ရှစ်လက ညကားစီးပြီး အိမ်ပြန်လာရင်း ပျောက်သွားခဲ့တာ။",
        "ရက်အနည်းငယ်အကြာမှာ လမ်းဘေးရေနုတ်မြောင်းနားမှာ တွေ့ခဲ့ကြတယ်။ ပြန်မလာနိုင်တော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "No Bag, No Phone", l: null,
    g: "အိတ်နဲ့ ဖုန်းလည်း မရှိဘူး။ ဘယ်ကားစီးခဲ့သလဲ မသိခဲ့ကြဘူး။",
    p: "A police evidence table in flat light with a few recovered items laid out on it, deliberately "
      + "sparse — and a visible empty space where a bag and a phone would be.",
    u: ["အိတ်နဲ့ ဖုန်းလည်း မရှိဘူး။",
        "ဘယ်ကားစီးခဲ့သလဲ မသိခဲ့ကြဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Don't Put That Woman in Front of Me", l: null, w: ["ယာဉ်မောင်း"],
    g: "သူ့ကို ရွှေရည်အမေရဲ့ ဓာတ်ပုံ ပြကြတယ်။ သူ မကြည့်ဘူး။ မျက်လုံးတွေ တင်းတင်းမှိတ်ထားတယ်။",
    p: "A man at an interview table with his face turned hard away and both eyes screwed shut, a "
      + "photograph face-up on the table in front of him that he will not look at.",
    u: ["ယာဉ်မောင်းရဲ့ ထွက်ဆိုချက်ကြောင့် အဲဒီအမှုကို ပြန်စစ်ကြတယ်။ သူ့ကိုလည်း ရွှေရည်အမေရဲ့ ဓာတ်ပုံ ပြကြတယ်။",
        "သူ မကြည့်ဘူး။ မျက်လုံးတွေ တင်းတင်းမှိတ်ထားတယ်။",
        "“အဲဒီမိန်းမကို ကျုပ်ရှေ့ မထားပါနဲ့” လို့ပဲ ပြောနေတယ်တဲ့။"],
    c: [[2, "bigstinger"]] },

  { t: "We Met Again at the Hospital", l: "ဆေးရုံ", w: ["ရွှေရည်", "မင်းခန့်"],
    g: "ရွှေရည်နဲ့ ကျွန်တော် ဆေးရုံမှာ ပြန်တွေ့ကြတယ်။ သူ နည်းနည်းအားပြန်ရှိလာပြီ။",
    p: "A young woman sitting up in a hospital bed in daylight holding a phone, and a man taking a "
      + "plastic chair beside her. Calm, ordinary, unfrightening.",
    u: ["ရွှေရည်နဲ့ ကျွန်တော် ဆေးရုံမှာ ပြန်တွေ့ကြတယ်။ သူ နည်းနည်းအားပြန်ရှိလာပြီ။",
        "ဖုန်းကို လက်ထဲမှာ ကိုင်ထားတယ်။",
        "ကျွန်တော် ဝင်လာတော့ သူ ထိုင်ခုံတစ်လုံး ညွှန်ပြတယ်။ ကျွန်တော် ထိုင်လိုက်တယ်။"] },

  { t: "She Really Came, Didn't She", l: "ဆေးရုံ", w: ["ရွှေရည်"],
    g: "“အစ်ကို… အမေ တကယ်လာခဲ့တာနော်။” ကျွန်တော် ခေါင်းညိတ်တယ်။",
    p: "A young woman in a hospital bed asking a question she needs a particular answer to, tears "
      + "starting.",
    u: ["အကြာကြီး စကားမပြောဖြစ်ကြဘူး။ နောက်တော့ သူ မေးတယ်။",
        "“အစ်ကို… အမေ တကယ်လာခဲ့တာနော်။”",
        "ကျွန်တော် ခေါင်းညိတ်တယ်။ သူ မျက်ရည်ကျလာတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Saw Her Too", l: "ဆေးရုံ", w: ["မင်းခန့်", "ရွှေရည်"],
    g: "“ကျွန်မ အိပ်မက်မက်တာလားလို့…” “မဟုတ်ဘူး။ ကျွန်တော်လည်း မြင်တယ်။”",
    p: "Two people either side of a hospital bed, one nodding, the other's hands over her mouth.",
    u: ["“ကျွန်မ အိပ်မက်မက်တာလားလို့…”",
        "“မဟုတ်ဘူး။ ကျွန်တော်လည်း မြင်တယ်။”"],
    c: [[1, "bigstinger"]] },

  { t: "The Same Photograph", l: "ဆေးရုံ", w: ["ရွှေရည်", "အမေ"],
    g: "သူ ဖုန်းမျက်နှာပြင်ကို ကျွန်တော့်ဘက် လှည့်ပြတယ်။ ကားပေါ်မှာ ကျွန်တော် မြင်ခဲ့တဲ့ပုံပဲ။",
    p: "A phone turned around on a hospital blanket showing the pagoda photograph of mother and "
      + "daughter in sunlight — warm, dry and alive.",
    u: ["သူ ဖုန်းမျက်နှာပြင်ကို ကျွန်တော့်ဘက် လှည့်ပြတယ်။",
        "အမေနဲ့ သူ ရိုက်ထားတဲ့ပုံ။ ကားပေါ်မှာ ကျွန်တော် မြင်ခဲ့တဲ့ပုံပဲ။"],
    c: [[1, "stinger"]] },

  { t: "She Always Asked for the Plate Number", l: "ဆေးရုံ", w: ["ရွှေရည်"],
    g: "“အမေက ကျွန်မ တစ်ယောက်တည်း ခရီးသွားရင် အမြဲဖုန်းဆက်တယ်။ ကားနံပါတ်မေးတယ်။”",
    p: "Close on a young woman's face remembering something small and ordinary that has become "
      + "unbearable.",
    u: ["“အမေက ကျွန်မ တစ်ယောက်တည်း ခရီးသွားရင် အမြဲဖုန်းဆက်တယ်။ ကားနံပါတ်မေးတယ်။ ဘယ်နေရာရောက်ပြီလဲ မေးတယ်။”",
        "သူ နှုတ်ခမ်းကို ကိုက်လိုက်တယ်။"] },

  { t: "I Used to Tell Her to Go to Sleep", l: "ဆေးရုံ", w: ["ရွှေရည်"],
    g: "“ကျွန်မက စိတ်ရှုပ်တတ်တယ်။ အမေ့ကို အိပ်တော့လို့ပဲ ပြောနေတတ်တာ။”",
    p: "A young woman looking down at a phone in her lap, unable to look up.",
    u: ["“ကျွန်မက စိတ်ရှုပ်တတ်တယ်။ အမေ့ကို အိပ်တော့လို့ပဲ ပြောနေတတ်တာ။”",
        "ကျွန်တော် ဘာမှမပြောနိုင်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Hold Your Bag Tightly", l: "ဆေးရုံ",
    g: "သူ့ဖုန်းထဲမှာ အမေပို့ထားတဲ့ စာဟောင်းတွေ ရှိသေးတယ်။ တစ်ကြောင်းကို သူ ပြတယ်။",
    p: "⚠️ TEXT PERMITTED. A phone screen showing one old received message reading exactly \"ကားပေါ်မှာ "
      + "အိပ်ပျော်သွားရင် အိတ်ကို သေချာဖက်ထားနော်။\" and nothing else. That sentence is the only text.",
    u: ["သူ့ဖုန်းထဲမှာ အမေပို့ထားတဲ့ စာဟောင်းတွေ ရှိသေးတယ်။ တစ်ကြောင်းကို သူ ပြတယ်။",
        "ကားပေါ်မှာ အိပ်ပျော်သွားရင် အိတ်ကို သေချာဖက်ထားနော်။"],
    c: [[1, "bigstinger"]] },

  { t: "Call Me When You Arrive", l: "ဆေးရုံ",
    g: "နောက်တစ်ကြောင်း — ရောက်ရင် အမေ့ကို ဖုန်းဆက်။ အမေ စောင့်နေမယ်။",
    p: "⚠️ TEXT PERMITTED. The same phone screen scrolled to one more message reading exactly "
      + "\"ရောက်ရင် အမေ့ကို ဖုန်းဆက်။ အမေ စောင့်နေမယ်။\" That sentence is the only text.",
    u: ["နောက်တစ်ကြောင်း။",
        "ရောက်ရင် အမေ့ကို ဖုန်းဆက်။ အမေ စောင့်နေမယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "What Did She Say Outside", l: "ဆေးရုံ", w: ["ရွှေရည်", "မင်းခန့်"],
    g: "ရွှေရည်က အဲဒီစာကို အကြာကြီး ကြည့်နေတယ်။ ပြီးတော့ မေးတယ် — “အမေက အပြင်ကနေ ဘာပြောခဲ့တာလဲ၊ အစ်ကို။”",
    p: "A young woman looking up from a phone to the man beside her bed and asking him something.",
    u: ["ရွှေရည်က အဲဒီစာကို အကြာကြီး ကြည့်နေတယ်။",
        "ပြီးတော့ ကျွန်တော့်ကို မေးတယ်။",
        "“အမေက အပြင်ကနေ ဘာပြောခဲ့တာလဲ၊ အစ်ကို။”"] },

  { t: "Please Wake My Daughter", l: "ဆေးရုံ", w: ["မင်းခန့်"],
    g: "ကျွန်တော် ပြန်ပြောပြတယ်။ သူ့အမေ ကျွန်တော့်ကို အကြိမ်ကြိမ် တောင်းပန်ခဲ့တဲ့စကား။",
    p: "A man telling a young woman something across a hospital bed, both of them crying quietly in "
      + "ordinary daylight.",
    u: ["ကျွန်တော် ပြန်ပြောပြတယ်။ သူ့အမေ ကျွန်တော့်ကို အကြိမ်ကြိမ် တောင်းပန်ခဲ့တဲ့စကား။",
        "“ကျွန်မသမီးကို နှိုးပေးပါ” ဆိုတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "I Don't Trust a Soft Voice Now", l: "ကားထဲ", w: ["မင်းခန့်"],
    g: "အဲဒီခရီးပြီးကတည်းက ညကားစီးရင် အသံချိုချိုလေးနဲ့ ပြောတဲ့စကားကို မယုံတော့ဘူး။",
    p: "A man sitting awake on a different night bus, upright, an untouched bottle of water on the "
      + "seat beside him.",
    u: ["အဲဒီခရီးပြီးကတည်းက ကျွန်တော် ညကားစီးရင် လူတစ်ယောက်ပြောတဲ့စကားကို အသံချိုချိုလေးနဲ့ ပြောလို့ဆိုပြီး မယုံတော့ဘူး။"],
    c: [[0, "stinger"]] },

  { t: "The Danger Was Driving", l: "ကားထဲ", w: ["ယာဉ်မောင်း"],
    g: "အဲဒီညက ကျွန်တော်တို့ကို အန္တရာယ်ဖြစ်စေမယ့်သူဟာ — ကားကို မောင်းပေးနေတဲ့သူ။ ရေဘူးကို ထည့်ပေးတဲ့သူ။",
    p: "A driver's hands on a steering wheel at night, ordinary and capable — the most frightening "
      + "image in the film precisely because nothing about it looks wrong.",
    u: ["အဲဒီညက ကျွန်တော်တို့ကို အန္တရာယ်ဖြစ်စေမယ့်သူဟာ—",
        "ကားကို မောင်းပေးနေတဲ့သူ။ ရေဘူးကို လက်ထဲ ထည့်ပေးတဲ့သူ။",
        "“နားလိုက်ပါ” လို့ ပြောတဲ့သူ။"],
    c: [[2, "bigstinger"]] },

  { t: "And the One I Was Afraid to Look At", l: "မှန်ပြင်", w: ["အမေ"],
    g: "ကျွန်တော် ကြောက်ပြီး မကြည့်ရဲခဲ့တဲ့ မိန်းမကတော့ — မိုးထဲမှာ ရပ်နေခဲ့တယ်။",
    p: "⚠️ THROUGH GLASS AND RAIN, one last time. The woman standing outside a bus window in the "
      + "downpour, patient and quiet, looking in.",
    u: ["ကျွန်တော် ကြောက်ပြီး မကြည့်ရဲခဲ့တဲ့ မိန်းမကတော့—",
        "မိုးထဲမှာ ရပ်နေခဲ့တယ်။",
        "ပြတင်းပေါက်တစ်ချပ် အပြင်ကနေ သူ့သမီးကို နှိုးဖို့ ကြိုးစားနေခဲ့တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The House She Never Reached", l: null, w: ["ရွှေရည်"],
    g: "နောက်ဆုံးပုံ — သူ ကိုယ်တိုင် ပြန်မရောက်နိုင်ခဲ့တဲ့အိမ်ကို ဒီတစ်ခါ သမီးကိုတော့ ပြန်ရောက်စေချင်လို့။",
    p: "Final composition: a small ordinary Myanmar house at dusk with its light on and its door "
      + "open, and a young woman walking up to it alone from the road. Nobody is following her and "
      + "nothing is watching. Hold on the lit doorway.",
    u: ["သူ ကိုယ်တိုင် ပြန်မရောက်နိုင်ခဲ့တဲ့အိမ်ကို—",
        "ဒီတစ်ခါ သမီးကိုတော့ ပြန်ရောက်စေချင်လို့။"],
    c: [[1, "finalstinger"]] },
];
