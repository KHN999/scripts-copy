/**
 * ရေစက်မကျတဲ့နာမည် — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * FIVE RULES.
 *
 * 1. ⚠️ THE CHILD IS NEVER SHOWN. Not once, not as a shape, not as a shadow, not
 *    reflected, not out of focus. She exists only as EVIDENCE: earth that should
 *    be wet and is dry, a cup that empties, two small dents in wet ground, and —
 *    for one second at the end — a woman's own hand held slightly open as though
 *    something small were inside it. Any image containing a child figure has
 *    broken the film.
 *
 * 2. WATER IS THE WHOLE VISUAL LANGUAGE. Wet earth versus dry earth has to read
 *    instantly in every single shot of a pot. Wet: dark, glossy, a film of water
 *    standing on the surface, the rim stained darker. Dry: pale, matte, dusty,
 *    cracked fine. The audience must be able to call it from across a room.
 *
 * 3. NOTHING VIOLENT HAPPENS IN THIS FILM. Two deaths: a six-day-old infant
 *    thirty-four years ago — shown ONLY as a tiny folded shirt in a box — and an
 *    old woman who dies in her sleep. No blood, no bodies, no injury, no gore of
 *    any kind anywhere.
 *
 * 4. THE GHOST IS NOT MALEVOLENT AND THE FILM MUST NOT PRETEND OTHERWISE. She is
 *    thirsty and she is queuing. The one time her voice is heard it is grateful.
 *    No menace, no stalking, no jump-scare staging.
 *
 * 5. ⚠️ TEXT IS BANNED, WITH ONE EXCEPTION. The name on the gravestone at the
 *    end, which the film has spent nineteen minutes earning. Everywhere else —
 *    the grandmother's note, the notebook, phone screens — handwriting and
 *    letterforms are visible as SHAPE and never resolve into readable words.
 */

export const CAST = [
  { name: "ခင်မြတ်နိုး", en: "Khin Myat Noe — the narrator, thirty-four",
    prompt: "A Burmese woman of thirty-four, steady rather than fragile, plain modern office clothes "
      + "in the city and a simple blouse and htamein in the village, hair tied back. Practical, "
      + "observant, the sort who writes things down. Increasingly tired as the film runs, but never "
      + "hysterical." },
  { name: "အဖွား", en: "The grandmother, eighty-three",
    prompt: "A Burmese woman of eighty-three, very small and thin, white hair pulled back, a soft "
      + "worn htamein and blouse. ⚠️ Her illness is memory, not pain — she is not gaunt or wired to "
      + "anything. Lucid and sharp-eyed in the evening scenes, vague and frightened in the daytime "
      + "ones, and the difference must be visible in the eyes." },
  { name: "အမေ", en: "The mother, about sixty",
    prompt: "A Burmese woman of about sixty, practical and busy, an ordinary house blouse and "
      + "htamein. Dismissive early — the one who says it is the heat — and undone in the last act." },
  { name: "သမီး", en: "The daughter, six. The last section only",
    prompt: "A Burmese girl of six in a bright modern t-shirt and shorts, hair in two short tufts. "
      + "Curious rather than frightened, entirely at ease. She appears ONLY in the closing section." },
  { name: "ဆရာတော်", en: "The abbot — VOICE ON A PHONE ONLY",
    prompt: "⚠️ NEVER SHOWN. He exists only as a voice on a telephone. Any shot referencing him shows "
      + "the phone, the room, or the listener's face — never a monk." },
];

export const LOCS = [
  { name: "ဘုရားခန်း", en: "The shrine corner of the family house",
    prompt: "The shrine corner of a modest Myanmar village house: a raised wooden shelf with a small "
      + "Buddha image, offering cups, a vase of flowers, and on a low stool beside it a terracotta "
      + "plant pot holding one small shrub. Polished teak floorboards, one window, warm domestic "
      + "light. This is where the water is poured and where most of the film happens." },
  { name: "အဖွားအခန်း", en: "The grandmother's room",
    prompt: "A small village bedroom: a low wooden bed with a mosquito net tied up, a cupboard, a "
      + "framed photograph, one warm bulb, a window with wooden shutters. Neat, old, lived in for "
      + "sixty years." },
  { name: "တိုက်ခန်း", en: "Her flat in Yangon",
    prompt: "A small modern Yangon flat: a kitchenette with a steel sink, a table, a window onto "
      + "other buildings, city noise implied. Clean, sparse, nothing of the village in it." },
  { name: "သင်္ချိုင်း", en: "The village burial ground",
    prompt: "A small rural Myanmar burial ground at the edge of a village: uneven grass, low "
      + "whitewashed markers, a few larger stones, tamarind trees, open sky. Quiet and unfrightening "
      + "— a place people visit, not a horror set." },
  { name: "အိမ်ဧည့်ခန်း", en: "The main room of the house, set for a ceremony",
    prompt: "The main room of a village house laid out for a merit ceremony: mats on the floor, "
      + "thirty people seated, offering trays, a low table at the front. Daylight through open "
      + "doors. Ordinary, crowded, warm." },
];

export const STYLE =
  "Present-day Myanmar, a village and a small Yangon flat. Warm domestic realism, natural light, "
  + "nothing stylised — this is a house, not a haunted house. Cinematic photorealism, 35mm grain, "
  + "shallow depth of field, 16:9, warm neutral palette. ⚠️ THE CHILD IS NEVER SHOWN IN ANY FORM — "
  + "no figure, no shape, no shadow, no reflection, no blur. She exists only as evidence: dry earth, "
  + "an emptied cup, two small dents in wet ground. ⚠️ WET VERSUS DRY EARTH IS THE FILM'S ENTIRE "
  + "VISUAL LANGUAGE and must read instantly — wet is dark, glossy and standing; dry is pale, matte "
  + "and dusty. ⚠️ Nothing violent happens: no blood, no bodies, no injury anywhere. ⚠️ No text of "
  + "any kind except where a shot explicitly names it — handwriting is visible as shape and never "
  + "resolves into readable words.";

export const SCENES = [
  { t: "Look at the Pot Five Minutes Later", l: "ဘုရားခန်း",
    g: "အိမ်မှာ ရေစက်ချပြီးရင် ငါးမိနစ်လောက်နေမှ ပန်းအိုးကို ပြန်ကြည့်ကြည့်ပါ။ ရေက ရှိနေရမယ်။",
    p: "A terracotta plant pot on a low stool beside a household shrine, photographed straight on. "
      + "The earth in it is DARK AND GLOSSY with a film of water standing on the surface.",
    u: ["အိမ်မှာ ရေစက်ချပြီးရင် ငါးမိနစ်လောက်နေမှ ပန်းအိုးကို ပြန်ကြည့်ကြည့်ပါ။",
        "ရေက ရှိနေရမယ်။"] },

  { t: "It Cannot All Be Gone", l: null,
    g: "မြေကြီးက စိမ့်ဝင်တယ်ဆိုတောင် ငါးမိနစ်အတွင်း အကုန်မခန်းသွားနိုင်ဘူး။",
    p: "Macro on wet potting soil: individual grains dark with water, a thin bright meniscus where "
      + "the water meets the terracotta.",
    u: ["မြေကြီးက စိမ့်ဝင်တယ်ဆိုတောင် ငါးမိနစ်အတွင်း အကုန်မခန်းသွားနိုင်ဘူး။",
        "အပေါ်ယံမှာ စိုနေတာ ရှိရမယ်။ အနားပတ်လည်မှာ အရောင်ရင့်နေတာ ရှိရမယ်။"] },

  { t: "In Our House There Is None", l: "ဘုရားခန်း",
    g: "ကျွန်မတို့အိမ်မှာတော့ — မရှိဘူး။",
    p: "The identical pot from the identical angle, but the earth is PALE, MATTE AND DUSTY with fine "
      + "cracks across it — as though it has not been watered in weeks.",
    u: ["ကျွန်မတို့အိမ်မှာတော့—",
        "မရှိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "My Name Is Khin Myat Noe", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မနာမည် ခင်မြတ်နိုး။ အသက် သုံးဆယ့်လေးနှစ်။ ရန်ကုန်မှာ အလုပ်လုပ်တယ်။",
    p: "A woman of thirty-four at a small table in a modern Yangon flat in the evening, ordinary and "
      + "composed, city windows behind her.",
    u: ["ကျွန်မနာမည် ခင်မြတ်နိုး။ အသက် သုံးဆယ့်လေးနှစ်။",
        "ရန်ကုန်မှာ အလုပ်လုပ်တယ်။ လအနည်းငယ်တစ်ခါ ရွာကို ပြန်တယ်။"] },

  { t: "Every House Pours Water", l: "အိမ်ဧည့်ခန်း",
    g: "မြန်မာအိမ်တိုင်းမှာ ရေစက်ချတယ်။ ဆွမ်းကပ်ပြီးရင် ချတယ်။ အလှူပြီးရင် ချတယ်။",
    p: "A merit ceremony in a village house: people seated on mats, offering trays at the front, "
      + "daylight through open doors. Entirely ordinary and warm.",
    u: ["မြန်မာအိမ်တိုင်းမှာ ရေစက်ချတယ်။",
        "ဆွမ်းကပ်ပြီးရင် ချတယ်။ အလှူပြီးရင် ချတယ်။ လူသေအိမ်မှာ ချတယ်။"] },

  { t: "The Water Is the Road", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ခွက်ထဲက ရေကို ပန်းအိုးထဲ ဖြည်းဖြည်း လောင်းရင်း ကုသိုလ်ကို ပို့ပေးတာ။ ရေက ပို့တဲ့လမ်း။",
    p: "Close on a thin unbroken stream of water falling from a small cup into a pot, caught in warm "
      + "light, the stream itself the brightest thing in frame.",
    u: ["ခွက်ထဲက ရေကို ပန်းအိုးထဲ ဖြည်းဖြည်း လောင်းရင်း—",
        "ကုသိုလ်ကို သေဆုံးသွားသူတွေဆီ ပို့ပေးတာ။",
        "ရေက ပို့တဲ့လမ်း။"] },

  { t: "If Someone Is Waiting There", l: null,
    g: "အဲဒီလမ်းအဆုံးမှာ တစ်ယောက်ယောက် ရှိရင် — ရေက ရောက်သွားတယ်။ ဘယ်သူမှ မရှိရင် — ရေက ကျန်နေတယ်။",
    p: "Two pots side by side in one frame for the first time: the left one dark and wet, the right "
      + "one pale and dry. Nothing else in the image.",
    u: ["အဲဒီလမ်းအဆုံးမှာ တစ်ယောက်ယောက် ရှိရင်—",
        "ရေက ရောက်သွားတယ်။ ဘယ်သူမှ မရှိရင်— ရေက ကျန်နေတယ်။"],
    c: [[1, "stinger"]] },

  { t: "Ours Has Never Kept Any", l: "ဘုရားခန်း",
    g: "ကျွန်မတို့အိမ်မှာ ရေ တစ်ခါမှ မကျန်ဖူးဘူး။",
    p: "The dry pot again, this time with a woman's hand entering frame to press two fingers into "
      + "the surface — the fingertips come away clean.",
    u: ["ကျွန်မတို့အိမ်မှာ ရေ တစ်ခါမှ မကျန်ဖူးဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "The Day Grandfather Died", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "အဖိုးဆုံးတဲ့နေ့က အိမ်မှာ လူဆယ့်နှစ်ယောက် ရှိတယ်။ ကျွန်မ ရေစက်ချပေးတယ်။",
    p: "A woman kneeling at the front of a small house ceremony holding a cup over a pot, a dozen "
      + "relatives seated behind her on mats.",
    u: ["အဖိုးဆုံးတဲ့နေ့က အိမ်မှာ လူဆယ့်နှစ်ယောက် ရှိတယ်။",
        "ကျွန်မ ရေစက်ချပေးတယ်။",
        "ပန်းအိုးကို ပေါင်စားပွဲပေါ်မှာ တင်ထားတယ်။ အထဲမှာ ကြက်မောက်ပင်တစ်ပင်။"] },

  { t: "The Earth Went Dark", l: "ဘုရားခန်း",
    g: "ကျွန်မ ရေခွက်တစ်ခွက်လုံး လောင်းချလိုက်တယ်။ မြေက စိုသွားတယ်။ အပေါ်မှာ ရေပြင်လေး တင်နေတယ်။",
    p: "A cup tipped fully empty into a pot, the soil visibly soaking and a shallow pool of water "
      + "standing on top of it, bright with reflected window light.",
    u: ["ကျွန်မ ရေခွက်တစ်ခွက်လုံး လောင်းချလိုက်တယ်။",
        "မြေက စိုသွားတယ်။ အပေါ်မှာ ရေပြင်လေး တင်နေတယ်။",
        "ပြီးတော့ ကျွန်မ လူတွေနဲ့အတူ ဘုရားရှိခိုးတယ်။"] },

  { t: "Ten Minutes Later", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ဆယ်မိနစ်လောက်ကြာမှ ကျွန်မ ပန်းအိုးကို ပြန်ကြည့်မိတယ်။ မြေက — ခြောက်နေတယ်။",
    p: "The same pot from the same angle ten minutes on: bone dry, pale, dusty enough to raise "
      + "powder. A woman's face out of focus behind it, turning toward it.",
    u: ["ဆယ်မိနစ်လောက်ကြာမှ ကျွန်မ ပန်းအိုးကို ပြန်ကြည့်မိတယ်။",
        "မြေက—",
        "ခြောက်နေတယ်။ ဖုန်ထလောက်အောင် ခြောက်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "My Finger Came Away Clean", l: "ဘုရားခန်း",
    g: "အပေါ်ယံမှာ ရေစိုစိုဆိုတာ လုံးဝမရှိဘူး။ ကျွန်မ လက်နဲ့ ထိုးကြည့်တယ်။ လက်ချောင်းက သန့်နေတယ်။",
    p: "Extreme close-up: a fingertip withdrawn from dry soil, perfectly clean, a single grain of "
      + "dust on it.",
    u: ["အပေါ်ယံမှာ ရေစိုစိုဆိုတာ လုံးဝမရှိဘူး။",
        "ကျွန်မ လက်နဲ့ ထိုးကြည့်တယ်။ လက်ချောင်းက သန့်နေတယ်။"],
    c: [[1, "stinger"]] },

  { t: "It's the Heat", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး", "အမေ"],
    g: "ကျွန်မ အမေ့ကို ခေါ်ပြတယ်။ အမေက ကြည့်ပြီး “နေပူလို့ပေါ့” လို့ ပြောတယ်။",
    p: "A woman showing a pot to her mother, who glances at it without interest and answers over her "
      + "shoulder while carrying a tray away.",
    u: ["ကျွန်မ အမေ့ကို ခေါ်ပြတယ်။",
        "အမေက ကြည့်ပြီး ပြောတယ်။ “နေပူလို့ပေါ့။”"] },

  { t: "It Was Raining That Day", l: "ဘုရားခန်း",
    g: "အဲဒီနေ့က မိုးရွာနေတယ်။",
    p: "The window beside the shrine: heavy rain running down the glass and dripping off the eaves "
      + "outside, grey daylight.",
    u: ["အဲဒီနေ့က မိုးရွာနေတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Two Pots, Side by Side", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ သိပ္ပံနည်းကျကျ လုပ်ကြည့်မယ်လို့ ဆုံးဖြတ်တယ်။ ပန်းအိုးနှစ်လုံး ဘေးချင်းကပ်ထားတယ်။",
    p: "A woman setting two identical terracotta pots side by side on a wooden stool, adjusting them "
      + "until they are level, deliberate and methodical.",
    u: ["ကျွန်မ သိပ္ပံနည်းကျကျ လုပ်ကြည့်မယ်လို့ ဆုံးဖြတ်တယ်။",
        "ပန်းအိုးနှစ်လုံး ဘေးချင်းကပ်ထားတယ်။",
        "တစ်လုံးက ရေစက်ချဖို့။ နောက်တစ်လုံးက ဘာမှမလုပ်ဘဲ ရေထည့်ထားတဲ့အိုး။"] },

  { t: "The Same Water in Both", l: "ဘုရားခန်း",
    g: "ပထမအိုးထဲကို ရေစက်ချတယ်။ ဒုတိယအိုးထဲကို ဘာမှမပြောဘဲ တူညီတဲ့ရေပမာဏ လောင်းထည့်တယ်။",
    p: "The same cup pouring into the second of two identical pots, the first already glistening — "
      + "the two treated identically in every visible way.",
    u: ["ဆွမ်းကပ်ပြီးတဲ့အခါ ကျွန်မ ပထမအိုးထဲကို ရေစက်ချတယ်။",
        "ဒုတိယအိုးထဲကို ဘာမှမပြောဘဲ တူညီတဲ့ရေပမာဏ လောင်းထည့်တယ်။"] },

  { t: "One Wet, One Dry", l: "ဘုရားခန်း",
    g: "ဆယ်မိနစ်ကြာတယ်။ ဒုတိယအိုး — စိုနေတယ်။ ပထမအိုး — ခြောက်နေတယ်။",
    p: "⚠️ THE KEY IMAGE OF THE FILM. The two pots in one frame ten minutes later: the right one dark, "
      + "glossy and clearly wet; the left one pale, matte and cracked dry. Same pot, same soil, same "
      + "light, same water — and an unmissable difference.",
    u: ["ဆယ်မိနစ်ကြာတယ်။",
        "ဒုတိယအိုး— စိုနေတယ်။ ပုံမှန်အတိုင်း။",
        "ပထမအိုး— ခြောက်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Three Weeks Running", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ရင်ခုန်သံ မြန်လာတယ်။ သုံးပတ်ဆက်တိုက် စမ်းတယ်။ သုံးခါလုံး တူတူပဲ။",
    p: "A small notebook open on a table with three rows of handwriting and a rough sketch of two "
      + "pots. ⚠️ The handwriting is visible as shape only and does not resolve into words.",
    u: ["ကျွန်မ ရင်ခုန်သံ မြန်လာတယ်။",
        "ကျွန်မ နောက်တစ်ပတ်မှာ ထပ်စမ်းတယ်။ ထပ်ခြောက်တယ်။",
        "သုံးပတ်ဆက်တိုက် စမ်းတယ်။ သုံးခါလုံး တူတူပဲ။"] },

  { t: "Merit Water Vanishes. Plain Water Doesn't.", l: "ဘုရားခန်း",
    g: "ကုသိုလ်ဝေတဲ့ရေက ပျောက်တယ်။ သာမန်ရေက မပျောက်ဘူး။",
    p: "The two pots again from directly above, a perfect visual A/B — one disc of dark wet soil, one "
      + "disc of pale dry soil.",
    u: ["ကုသိုလ်ဝေတဲ့ရေက ပျောက်တယ်။",
        "သာမန်ရေက မပျောက်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Three Seconds", l: "ဘုရားခန်း",
    g: "ဗီဒီယိုထဲမှာ ရေက ဖြည်းဖြည်း လျော့သွားတာ မဟုတ်ဘူး။ သုံးစက္ကန့်အတွင်းမှာ ဆွဲသောက်လိုက်သလို ပျောက်သွားတာ။",
    p: "A phone propped on a stool filming the pot, and on its screen a frozen frame in which the "
      + "standing water is halfway gone — visibly receding rather than evaporating.",
    u: ["ကျွန်မ ဖုန်းနဲ့ ဗီဒီယိုရိုက်ထားတယ်။",
        "အိုးထဲက ရေက ဖြည်းဖြည်း လျော့သွားတာ မဟုတ်ဘူး။",
        "သုံးစက္ကန့်အတွင်းမှာ—",
        "ဆွဲသောက်လိုက်သလို ပျောက်သွားတာ။"],
    c: [[3, "bigstinger"]] },

  { t: "She Called an Abbot", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ သူငယ်ချင်းတစ်ယောက်ရဲ့အဖေဖြစ်တဲ့ ဆရာတော်တစ်ပါးကို ဖုန်းဆက်မေးတယ်။",
    p: "A woman sitting on the floor of her flat with a phone to her ear and the notebook open on "
      + "her knee. ⚠️ No monk is shown at any point.",
    u: ["ကျွန်မ သူငယ်ချင်းတစ်ယောက်ရဲ့အဖေဖြစ်တဲ့ ဆရာတော်တစ်ပါးကို ဖုန်းဆက်မေးတယ်။",
        "ဆရာတော်က အေးအေးဆေးဆေး ဖြေတယ်။"] },

  { t: "A Mouth the Size of a Needle's Eye", l: null,
    g: "“ပြိတ္တာဆိုတာ ဆာလောင်နေတဲ့သူတွေ။ ဗိုက်က တောင်လိုကြီးတယ်။ လည်ချောင်းက အပ်ဖျားလောက်ပဲ ရှိတယ်။”",
    p: "⚠️ NOT a depiction of a hungry ghost. An old temple mural on a cracked wall, heavily faded, "
      + "showing figures at the very edge of legibility — a painting, not a being.",
    u: ["“ပြိတ္တာဆိုတာ ဆာလောင်နေတဲ့သူတွေ။”",
        "“ဗိုက်က တောင်လိုကြီးတယ်။ လည်ချောင်းက အပ်ဖျားလောက်ပဲ ရှိတယ်။”",
        "“သူတို့ ကိုယ့်ဘာသာ မစားနိုင်၊ မသောက်နိုင်ဘူး။ လူတွေက ဝေပေးမှ ရတယ်။”"],
    c: [[2, "stinger"]] },

  { t: "It Reaches Whoever Is Named", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "“ဝေပေးလိုက်ရင် ဘယ်သူ့ဆီ ရောက်တာလဲ?” “အမည်ခေါ်ပြီး ဝေတဲ့သူဆီ ရောက်တယ်။”",
    p: "Close on a woman's face listening to a phone, the answer landing.",
    u: ["ကျွန်မ မေးတယ်။ “ဘုရား… ဝေပေးလိုက်ရင် ဘယ်သူ့ဆီ ရောက်တာလဲ?”",
        "ဆရာတော် ခဏတိတ်တယ်။",
        "“အမည်ခေါ်ပြီး ဝေတဲ့သူဆီ ရောက်တယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "It Stays in the Air", l: "တိုက်ခန်း",
    g: "“အမည်မခေါ်ဘဲ ဝေရင်ရော?” “ဘယ်သူ့ဆီမှ မရောက်ဘူး။ လေထဲမှာ ကျန်ခဲ့တယ်။”",
    p: "A woman's hand tightening around a phone, knuckles pale.",
    u: ["“အမည်မခေါ်ဘဲ ဝေရင်ရော?”",
        "“ဘယ်သူ့ဆီမှ မရောက်ဘူး။ လေထဲမှာ ကျန်ခဲ့တယ်။”"],
    c: [[1, "bigstinger"]] },

  { t: "Then Where Does the Water Go", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "“ဘယ်သူ့ဆီမှ မရောက်တဲ့ရေက ဘယ်ရောက်သွားတာလဲ ဘုရား?” ဆရာတော် ပြန်မဖြေဘူး။",
    p: "A woman sitting very still with a phone to her ear, the flat silent around her, waiting for "
      + "an answer that does not come.",
    u: ["ကျွန်မ ဖုန်းကို တင်းတင်း ဆုပ်မိတယ်။",
        "“ဒါဆို… ဘယ်သူ့ဆီမှ မရောက်တဲ့ရေက ဘယ်ရောက်သွားတာလဲ ဘုရား?”",
        "ဆရာတော် ပြန်မဖြေဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Why Are You Asking Me This", l: "တိုက်ခန်း",
    g: "ခဏကြာမှ တစ်ခွန်းပဲ ပြောတယ် — “ဒကာမ… ဒီမေးခွန်းကို ဘာလို့ မေးတာလဲ?”",
    p: "A phone screen going dark at the end of a call, held in a hand that does not move.",
    u: ["ခဏကြာမှ တစ်ခွန်းပဲ ပြောတယ်။",
        "“ဒကာမ… ဒီမေးခွန်းကို ဘာလို့ မေးတာလဲ?”"],
    c: [[1, "bigstinger"]] },

  { t: "Alone at the Shrine", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "အဲဒီည ကျွန်မ ဘုရားစင်ရှေ့မှာ တစ်ယောက်တည်း ရေစက်ချတယ်။ အိမ်တစ်အိမ်လုံး တိတ်နေတယ်။",
    p: "A woman kneeling alone before a household shrine at night, one small lamp lit, the rest of "
      + "the house dark behind her.",
    u: ["အဲဒီည ကျွန်မ ဘုရားစင်ရှေ့မှာ တစ်ယောက်တည်း ရေစက်ချတယ်။",
        "အိမ်တစ်အိမ်လုံး တိတ်နေတယ်။ ကျွန်မ ရေလောင်းတယ်။"] },

  { t: "Two Seconds of Nothing", l: "ဘုရားခန်း",
    g: "ကျွန်မတစ်ယောက်တည်း သာဓုခေါ်တယ်။ အသံရပ်သွားတယ်။ ပန်ကာသံလည်း မရှိဘူး။",
    p: "A wide shot of the small shrine room at night, absolutely still — a ceiling fan stopped, a "
      + "curtain hanging dead, nothing moving at all.",
    u: ["ပြီးတော့ တိုးတိုးလေး “သာဓု” လို့ ကျွန်မတစ်ယောက်တည်း ခေါ်တယ်။",
        "အသံရပ်သွားတယ်။ အခန်းထဲမှာ ဘာသံမှ မရှိတော့ဘူး။",
        "ပန်ကာသံလည်း မရှိဘူး။ လမ်းပေါ်က ကားသံလည်း မရှိဘူး။"],
    c: [[2, "stinger"]] },

  { t: "Sadhu", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "နှစ်စက္ကန့်လောက်ကြာသွားတယ်။ ပြီးတော့ အဲဒီတိတ်ဆိတ်မှုထဲကနေ — “သာဓု။”",
    p: "Close on a woman's face in lamplight, eyes opening, hearing something in a room she knows is "
      + "empty. ⚠️ Nothing else is in the frame and nothing is shown behind her.",
    u: ["နှစ်စက္ကန့်လောက် ကြာသွားတယ်။",
        "ပြီးတော့— အဲဒီတိတ်ဆိတ်မှုထဲကနေ—",
        "“သာဓု။”"],
    c: [[2, "bigstinger"]] },

  { t: "Not One Among Many", l: "ဘုရားခန်း",
    g: "လူတွေအများကြီးထဲက တစ်သံ မဟုတ်ဘူး။ ကျွန်မတစ်ယောက်တည်းရှိတဲ့အခန်းထဲမှာ ကျွန်မမဟုတ်တဲ့ တစ်သံ။",
    p: "The empty half of the room behind the kneeling woman, lit and plainly unoccupied — floor, "
      + "wall, doorway, nothing.",
    u: ["လူတွေအများကြီးထဲက တစ်သံ မဟုတ်ဘူး။",
        "ကျွန်မတစ်ယောက်တည်းရှိတဲ့အခန်းထဲမှာ ကျွန်မမဟုတ်တဲ့ တစ်သံ။",
        "တိုးတယ်။ ကြောက်စရာ မကောင်းဘူး။ ကလေးအသံ။"],
    c: [[2, "bigstinger"]] },

  { t: "A Little Girl, Out of Breath", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "မိန်းကလေးငယ်လေးတစ်ယောက်။ ဆာလောင်နေသလို အသက်ပြတ်နေတယ်။ ကျွန်မ မလှုပ်ဘဲ ထိုင်နေခဲ့တယ်။",
    p: "A woman kneeling motionless with her hands still in her lap, tears on her face, not turning "
      + "round.",
    u: ["မိန်းကလေးငယ်လေးတစ်ယောက်။ ဆာလောင်နေသလို အသက်ပြတ်နေတယ်။",
        "ကျွန်မ မလှုပ်ဘဲ ထိုင်နေခဲ့တယ်။ မျက်ရည်တွေ ကျလာတယ်။"] },

  { t: "She Sounded Grateful", l: "ဘုရားခန်း",
    g: "ဒါပေမယ့် ကျွန်မ ကြောက်လို့ ငိုတာ မဟုတ်ဘူး။ သူ့အသံက — ကျေးဇူးတင်နေသလို ဖြစ်နေလို့။",
    p: "Extreme close-up of the woman's face, crying, and the expression is not fear — it is grief.",
    u: ["ဒါပေမယ့် ကျွန်မ ကြောက်လို့ ငိုတာ မဟုတ်ဘူး။",
        "သူ့အသံက—",
        "ကျေးဇူးတင်နေသလို ဖြစ်နေလို့။"],
    c: [[2, "bigstinger"]] },

  { t: "She Started Timing It", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "စာအုပ်ငယ်တစ်အုပ်မှာ မှတ်တမ်းတင်တယ်။ ရေစက်ချတဲ့နေ့။ ရေပမာဏ။ ရေ ဘယ်တော့ပျောက်သွားလဲ။",
    p: "A notebook page with a hand-ruled table and a stopwatch running on a phone beside it. ⚠️ The "
      + "writing is shape only, never readable.",
    u: ["ကျွန်မ စာအုပ်ငယ်တစ်အုပ်မှာ မှတ်တမ်းတင်တယ်။",
        "ရေစက်ချတဲ့နေ့။ ရေပမာဏ။ ပြီးတော့ ရေ ဘယ်တော့ပျောက်သွားလဲ။"] },

  { t: "Ten Minutes. Five. Instantly.", l: "ဘုရားခန်း",
    g: "ပထမတစ်ခေါက် — ဆယ်မိနစ်အကြာ။ ဒုတိယ — ငါးမိနစ်။ တတိယ — သာဓုခေါ်ပြီးတာနဲ့ ချက်ချင်း။",
    p: "Three pots in one frame, left to right, each drier than the last — a visual sequence read "
      + "like a graph.",
    u: ["ပထမတစ်ခေါက် — ဆယ်မိနစ်အကြာ။",
        "ဒုတိယတစ်ခေါက် — အလှူပြီးတာနဲ့။ ငါးမိနစ်လောက်။",
        "တတိယတစ်ခေါက် — ကျွန်မ သာဓုခေါ်ပြီးတာနဲ့ ချက်ချင်း။"],
    c: [[2, "stinger"]] },

  { t: "Dry Under a Falling Stream", l: "ဘုရားခန်း",
    g: "စတုတ္ထတစ်ခေါက် — ကျွန်မ ရေလောင်းနေတုန်း။ ခွက်ထဲက ရေက အပေါ်ကနေ ကျနေတယ်။",
    p: "⚠️ THE IMAGE THAT SELLS THE FILM. A clear stream of water falling from a cup into a pot — and "
      + "the soil beneath it is BONE DRY AND DUSTY. The stream is real and in focus; the earth it "
      + "lands on shows no mark at all.",
    u: ["စတုတ္ထတစ်ခေါက်—",
        "ကျွန်မ ရေလောင်းနေတုန်း။",
        "ခွက်ထဲက ရေက အပေါ်ကနေ ကျနေတယ်။ ဒါပေမယ့် အောက်က မြေကြီးက—",
        "ခြောက်နေတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "It Never Touches the Ground", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ရေက မြေကို မထိဘူး။ ဘယ်ကိုရောက်သွားလဲဆိုတာ ကျွန်မ မမြင်ရဘူး။",
    p: "A woman staring down at the pot with the cup still tilted in her hand, unable to stop "
      + "pouring, her face slack with disbelief.",
    u: ["ရေက မြေကို မထိဘူး။",
        "ဘယ်ကိုရောက်သွားလဲဆိုတာ ကျွန်မ မမြင်ရဘူး။",
        "ကျွန်မ လက်တွေ တုန်လာပြီး ခွက်ကို ချလိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Is Getting Closer", l: "ဘုရားခန်း",
    g: "ဆယ်မိနစ်။ ငါးမိနစ်။ ချက်ချင်း။ လောင်းနေတုန်း။ သူ ပိုနီးလာနေတယ်။",
    p: "The notebook page with four timings down it, the last entry underlined hard enough to tear "
      + "the paper. ⚠️ Shape only, no readable words.",
    u: ["စာအုပ်ကို ကြည့်ရင်း ကျွန်မ နားလည်သွားတယ်။",
        "ဆယ်မိနစ်။ ငါးမိနစ်။ ချက်ချင်း။ လောင်းနေတုန်း။",
        "သူ ပိုနီးလာနေတယ်။ ရေစက်ချတိုင်း တစ်ဆင့်စီ။"],
    c: [[2, "bigstinger"]] },

  { t: "And After That", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ပြီးရင် ဘာလဲဆိုတာကို ကျွန်မ မတွေးရဲဘူး။ ခွက်ထဲမှာတင် ပျောက်မှာလား။",
    p: "A woman holding an empty cup in both hands and looking at it as though it were dangerous.",
    u: ["ပြီးရင် ဘာလဲဆိုတာကို ကျွန်မ မတွေးရဲဘူး။",
        "ခွက်ထဲမှာတင် ပျောက်မှာလား။",
        "ဒါမှမဟုတ်— ကျွန်မလက်ထဲက ခွက်ကို ကိုင်ထားတဲ့အချိန်မှာ။"],
    c: [[2, "stinger"]] },

  { t: "Just Stop Pouring", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "လွယ်တယ်လို့ ကျွန်မ ထင်ခဲ့တယ်။ ရေစက်မချရင် ပြီးတာပဲ။ ရွာကို မပြန်တော့ဘူး။",
    p: "A woman packing a bag in a Yangon flat, decisive, a phone face-down on the table behind her.",
    u: ["လွယ်တယ်လို့ ကျွန်မ ထင်ခဲ့တယ်။ ရေစက်မချရင် ပြီးတာပဲ။",
        "ကျွန်မ ရွာကို မပြန်တော့ဘူး။ အလှူတွေကို ရှောင်တယ်။",
        "ရန်ကုန်မှာ တစ်ယောက်တည်း နေတယ်။ ကျွန်မတိုက်ခန်းထဲမှာ ပန်းအိုးလည်း မထားတော့ဘူး။"] },

  { t: "Three Weeks of Nothing", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "သုံးပတ်လောက် ဘာမှမဖြစ်ဘူး။",
    p: "An ordinary Yangon flat in daylight, tidy and unremarkable, a woman eating at a table, "
      + "relaxed for the first time in the film.",
    u: ["သုံးပတ်လောက် ဘာမှမဖြစ်ဘူး။"] },

  { t: "Downstairs, a Neighbour", l: "တိုက်ခန်း",
    g: "တနင်္ဂနွေမနက်မှာ အောက်ထပ်က အိမ်နီးချင်းမိသားစုက ဆွမ်းကပ်တယ်။ ကျွန်မ မသွားဘူး။",
    p: "A flat's front door seen from inside, with the sound of a ceremony implied through it — a "
      + "sandal-strewn landing visible through the gap beneath.",
    u: ["ပြီးတော့ တနင်္ဂနွေနေ့မနက်မှာ အောက်ထပ်က အိမ်နီးချင်းမိသားစုက ဆွမ်းကပ်တယ်။",
        "ကျွန်မ မသွားဘူး။ ခေါ်လည်း မခေါ်ဘူး။",
        "သူတို့ ရေစက်ချတဲ့သံကို ကျွန်မတိုက်ခန်းအထိ ကြားရတယ်။"],
    c: [[2, "stinger"]] },

  { t: "Her Own Glass, Empty", l: "တိုက်ခန်း",
    g: "မီးဖိုချောင်မှာ ကျွန်မ မနက်က ချထားခဲ့တဲ့ ရေခွက် — ခြောက်နေတယ်။",
    p: "A drinking glass on a kitchen counter, completely dry inside, no ring of moisture on the "
      + "counter beneath it and no condensation on the glass.",
    u: ["သာဓုသံတွေ ပြီးသွားတယ်။ ကျွန်မ ပါဝင်တာ မဟုတ်ဘူး။ ကျွန်မ ဘာမှမလုပ်ဘူး။",
        "ဒါပေမယ့် မီးဖိုချောင်မှာ—",
        "ကျွန်မ မနက်က ချထားခဲ့တဲ့ ရေခွက်— ခြောက်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Not a Drop", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "အထဲမှာ ရေတစ်စက်မှ မရှိဘူး။ ခွက်ပတ်လည်မှာ ရေစိုစိုရာလည်း မရှိဘူး။",
    p: "A woman sitting down hard on a kitchen floor with her back to the cabinets, the dry glass "
      + "still on the counter above her.",
    u: ["အထဲမှာ ရေတစ်စက်မှ မရှိဘူး။",
        "ခွက်ပတ်လည်မှာ ရေစိုစိုရာလည်း မရှိဘူး။",
        "ကျွန်မ ကြမ်းပြင်ပေါ် ထိုင်ချလိုက်တယ်။"],
    c: [[1, "stinger"]] },

  { t: "It Never Stops Anywhere", l: null,
    g: "မြန်မာပြည်မှာ ရေစက်ချတာ ဘယ်တော့မှ မရပ်ဘူး။ ကျောင်းတွေမှာ နေ့တိုင်း။ အိမ်တွေမှာ အပတ်တိုင်း။",
    p: "A montage composition of a Myanmar town: a monastery gate, a house with a ceremony awning, a "
      + "funeral car passing on a street — three ordinary sights in one frame.",
    u: ["အဲဒီအချိန်မှ ကျွန်မ နားလည်သွားတယ်။",
        "မြန်မာပြည်မှာ ရေစက်ချတာ ဘယ်တော့မှ မရပ်ဘူး။",
        "ဘုန်းကြီးကျောင်းတွေမှာ နေ့တိုင်း။ အိမ်တွေမှာ အပတ်တိုင်း။ လမ်းပေါ်မှာ ဖြတ်သွားတဲ့ အသုဘကားတိုင်း။"] },

  { t: "She Doesn't Even Have to Take Part", l: "တိုက်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ရှောင်လို့မရဘူး။ ကျွန်မ ပါဝင်စရာတောင် မလိုဘူး။ ကုသိုလ်ဝေတိုင်း သူ တစ်ဆင့် တိုးလာတယ်။",
    p: "A woman standing at a window looking out over a city of rooftops, understanding that there "
      + "is no room in the country that is far enough away.",
    u: ["ကျွန်မ ရှောင်လို့မရဘူး။",
        "ကျွန်မ ပါဝင်စရာတောင် မလိုဘူး။",
        "တစ်နေရာရာမှာ ကုသိုလ်ဝေတိုင်း— သူ တစ်ဆင့် တိုးလာတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Any Name Would Do", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "အမည်ခေါ်ပြီး ဝေရင် ရောက်တယ်ဆိုရင် — နာမည်တစ်ခုခု ခေါ်လိုက်ရင် ပြီးတာပေါ့။",
    p: "A woman kneeling at the shrine at night holding the cup, composing herself before she speaks "
      + "— trying something.",
    u: ["အမည်ခေါ်ပြီး ဝေရင် ရောက်တယ်ဆိုရင်—",
        "နာမည်တစ်ခုခု ခေါ်လိုက်ရင် ပြီးတာပေါ့။",
        "အဲဒီည ကျွန်မ ဘုရားစင်ရှေ့မှာ ရေခွက်ကို ကိုင်လိုက်တယ်။"] },

  { t: "To the Child of This House", l: "ဘုရားခန်း",
    g: "“ဒီကုသိုလ်ကို… ဒီအိမ်က ကလေးလေးဆီ ရောက်ပါစေ။”",
    p: "Water pouring steadily into the pot while a woman speaks, the soil darkening properly for "
      + "once.",
    u: ["ရေကို ဖြည်းဖြည်း လောင်းရင်း တိုးတိုးလေး ပြောလိုက်တယ်။",
        "“ဒီကုသိုလ်ကို… ဒီအိမ်က ကလေးလေးဆီ ရောက်ပါစေ။”"] },

  { t: "One Minute. Two.", l: "ဘုရားခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ပန်းအိုးကို စောင့်ကြည့်နေတယ်။ တစ်မိနစ်။ နှစ်မိနစ်။ မြေက စိုနေတုန်းပဲ။",
    p: "A woman sitting cross-legged watching a wet pot, hope arriving on her face.",
    u: ["ကျွန်မ ပန်းအိုးကို စောင့်ကြည့်နေတယ်။",
        "တစ်မိနစ်။ နှစ်မိနစ်။ မြေက စိုနေတုန်းပဲ။",
        "ကျွန်မ ရင်ထဲ သက်သာသွားတယ်။ ပြီးပြီလို့ ထင်လိုက်တယ်။"] },

  { t: "It Only Came Late", l: "ဘုရားခန်း",
    g: "ဒါပေမယ့် ငါးမိနစ်မြောက်မှာ မြေက ခြောက်သွားတယ်။ ခြောက်တာက နောက်ကျသွားတာပဲ ရှိတယ်။",
    p: "The same pot, now dry, and the woman's face above it collapsing from hope back into "
      + "understanding.",
    u: ["ဒါပေမယ့် ငါးမိနစ်မြောက်မှာ—",
        "မြေက ခြောက်သွားတယ်။",
        "ခြောက်တာက နောက်ကျသွားတာပဲ ရှိတယ်။ မပြီးသေးဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "The Name Has to Be Real", l: "ဘုရားခန်း",
    g: "အမည်ဆိုတာ “ဒီအိမ်က ကလေးလေး” မဟုတ်ဘူး။ အစစ်ဖြစ်ရမယ်။",
    p: "Close on the woman's face in lamplight as the rule resolves in her — the quest changing "
      + "shape.",
    u: ["ကျွန်မ ဆရာတော်ပြောခဲ့တဲ့စကားကို ပြန်စဉ်းစားမိတယ်။ အမည်ခေါ်ပြီး ဝေတဲ့သူဆီ ရောက်တယ်။",
        "အမည်ဆိုတာ— “ဒီအိမ်က ကလေးလေး” မဟုတ်ဘူး။",
        "အစစ်ဖြစ်ရမယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Grandmother Fell", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "နောက်တစ်ပတ်မှာ အမေ ဖုန်းဆက်တယ်။ အဖွား လဲကျသွားတယ်တဲ့။",
    p: "A very small old woman lying in a low wooden bed in a village room, awake but vague, a "
      + "mosquito net tied up above her.",
    u: ["နောက်တစ်ပတ်မှာ အမေ ဖုန်းဆက်တယ်။ အဖွား လဲကျသွားတယ်တဲ့။",
        "ကျွန်မ ရွာကို အမြန်ပြန်တယ်။",
        "အဖွားက ကုတင်ပေါ်မှာ။ ဘေးကမလွှဲနိုင်ဘူး။ စကားလည်း ရှုပ်နေပြီ။"] },

  { t: "One Clear Hour", l: "အဖွားအခန်း", w: ["အဖွား", "ခင်မြတ်နိုး"],
    g: "နေ့ခင်းဆို ကျွန်မကို မသိဘူး။ ဒါပေမယ့် ည ရှစ်နာရီလောက်ဆို မျက်လုံးတွေ ရှင်းလာတယ်။",
    p: "⚠️ TWO STATES IN ONE FRAME IS NOT POSSIBLE — show the LUCID one. The old woman's eyes in "
      + "evening lamplight: sharp, present, entirely there.",
    u: ["နေ့ခင်းဆို ကျွန်မကို မသိဘူး။ ကျွန်မ ဘယ်သူလဲ မေးတယ်။",
        "ဒါပေမယ့် ည ရှစ်နာရီလောက်ဆို မျက်လုံးတွေ ရှင်းလာတယ်။",
        "တစ်နာရီလောက် ရှင်းတယ်။"] },

  { t: "Was There a Child Nobody Speaks Of", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "“ဒီအိမ်မှာ ဘယ်သူ့ကိုမှ မပြောတဲ့ကလေးတစ်ယောက် ရှိခဲ့ဖူးလား?”",
    p: "A woman sitting on a low stool beside an old woman's bed, leaning in to ask something "
      + "carefully.",
    u: ["အဲဒီည ကျွန်မ အဖွားဘေးမှာ ထိုင်တယ်။ “အဖွား… တစ်ခုမေးမလို့။” “မေးလေ သမီး။”",
        "“ဒီအိမ်မှာ ဘယ်သူ့ကိုမှ မပြောတဲ့ကလေးတစ်ယောက် ရှိခဲ့ဖူးလား?”"],
    c: [[1, "bigstinger"]] },

  { t: "Eighty-Three and She Had Never Cried", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "အဖွား မလှုပ်တော့ဘူး။ လက်တွေ တုန်လာတယ်။ ပြီးတော့ အဖွား ငိုတယ်။",
    p: "An old woman's face turned into her pillow, crying, one hand gripping the blanket.",
    u: ["အဖွား မလှုပ်တော့ဘူး။ လက်တွေ တုန်လာတယ်။",
        "ပြီးတော့ အဖွား ငိုတယ်။",
        "အသက် ရှစ်ဆယ့်သုံးနှစ်ရှိပြီး ကျွန်မတစ်ခါမှ မငိုဖူးတဲ့ အဖွား။"],
    c: [[2, "bigstinger"]] },

  { t: "You Had a Twin", l: "အဖွားအခန်း", w: ["အဖွား", "ခင်မြတ်နိုး"],
    g: "“နင် ဘယ်လိုသိတာလဲ?” … “နင့်မှာ အမွှာမ ရှိခဲ့တယ်။”",
    p: "Close on a woman's face receiving a sentence that rearranges her entire life, the old woman "
      + "out of focus beyond her.",
    u: ["“နင် ဘယ်လိုသိတာလဲ?” ကျွန်မ ဘာမှမပြောနိုင်ဘူး။",
        "အဖွား မျက်နှာကို လှည့်ထားပြီး ပြောတယ်။",
        "“နင့်မှာ အမွှာမ ရှိခဲ့တယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "Six Days Old", l: "အဖွားအခန်း",
    g: "“နင်တို့ နှစ်ယောက် တစ်ချိန်တည်း မွေးတာ။” “သူက ခြောက်ရက်မြောက်နေ့မှာ ဆုံးသွားတယ်။”",
    p: "A woman standing up too fast beside a bed, one hand out to the wall.",
    u: ["ကျွန်မ ရင်ဘတ်ထဲက လေတွေ အကုန်ထွက်သွားတယ်။",
        "“နင်တို့ နှစ်ယောက် တစ်ချိန်တည်း မွေးတာ။”",
        "“သူက ခြောက်ရက်မြောက်နေ့မှာ ဆုံးသွားတယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "Before the Naming", l: null,
    g: "ခြောက်ရက်။ ကင်ပွန်းတပ်ပွဲ မလုပ်ရသေးဘူး။ နာမည် မမှည့်ရသေးဘူး။",
    p: "⚠️ NO CHILD. An empty traditional naming-ceremony setting: a low tray with rice, flowers and "
      + "a small pair of scissors, laid out and untouched.",
    u: ["ခြောက်ရက်။",
        "ကင်ပွန်းတပ်ပွဲ မလုပ်ရသေးဘူး။",
        "နာမည် မမှည့်ရသေးဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Why Did You Not Name Her", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "“ဘာလို့ နာမည်မပေးခဲ့တာလဲ?” အဖွားက မျက်ရည်သုတ်တယ်။",
    p: "A woman asking a question she can barely voice, the old woman wiping her eyes with the back "
      + "of her wrist.",
    u: ["ကျွန်မ မေးတယ်။ အသံက ကိုယ့်အသံနဲ့တောင် မတူဘူး။",
        "“ဘာလို့ နာမည်မပေးခဲ့တာလဲ?”",
        "အဖွားက မျက်ရည်သုတ်တယ်။"] },

  { t: "Naming Binds Them to the House", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "“ကင်ပွန်းမတပ်ရသေးတဲ့ကလေး ဆုံးသွားရင် နာမည်မခေါ်ရဘူးတဲ့။ ခေါ်လိုက်ရင် အိမ်နဲ့ ချည်မိသွားမယ်တဲ့။”",
    p: "An old woman speaking upward from her pillow, reciting something she was told sixty years "
      + "ago and has never questioned aloud.",
    u: ["“ရွာက လူကြီးတွေက ပြောတယ်။ ကင်ပွန်းမတပ်ရသေးတဲ့ကလေး ဆုံးသွားရင် နာမည်မခေါ်ရဘူးတဲ့။”",
        "“နာမည်ခေါ်လိုက်ရင် အိမ်နဲ့ ချည်မိသွားမယ်တဲ့။”",
        "“သွားချင်တဲ့နေရာကို မသွားနိုင်တော့ဘူးတဲ့။”"],
    c: [[2, "stinger"]] },

  { t: "So She Could Leave", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "“ငါတို့ သူ့ကို နာမည်မပေးခဲ့တာ… သူ့ကို မချစ်လို့ မဟုတ်ဘူး သမီး။ သူ သွားနိုင်ပါစေလို့။”",
    p: "⚠️ THE EMOTIONAL CENTRE OF THE FILM. Extreme close-up of the old woman's face saying it — "
      + "sixty years of a decision she has never been able to justify to herself.",
    u: ["အဖွား ခဏတိတ်တယ်။",
        "“ငါတို့ သူ့ကို နာမည်မပေးခဲ့တာ… သူ့ကို မချစ်လို့ မဟုတ်ဘူး သမီး။”",
        "“သူ သွားနိုင်ပါစေလို့။”"],
    c: [[2, "bigstinger"]] },

  { t: "But She Didn't Leave", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "ကျွန်မ အဖွားလက်ကို ဆုပ်ကိုင်လိုက်တယ်။ “ဒါပေမယ့် သူ မသွားခဲ့ဘူး။”",
    p: "Two hands gripped together on a blanket, one young and one very old.",
    u: ["ကျွန်မ အဖွားလက်ကို ဆုပ်ကိုင်လိုက်တယ်။ “အဖွား…”",
        "“ဒါပေမယ့် သူ မသွားခဲ့ဘူး။”",
        "“သုံးဆယ့်လေးနှစ်လုံး သူ ဒီအိမ်မှာ ရှိနေခဲ့တာလား?” လို့ ကျွန်မ မေးတယ်။ အဖွား မဖြေဘူး။",
        "ပြီးတော့ ကျွန်မ မမျှော်လင့်တဲ့စကားကို ပြောတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "My Pot Is Dry Too", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "“ငါ့ပန်းအိုးလည်း ခြောက်တယ် သမီး။ ခြောက်ဆယ်နှစ်လုံး ခြောက်ခဲ့တယ်။ ငါ ဘယ်သူ့ကိုမှ မပြောရဲခဲ့ဘူး။”",
    p: "A second, much older terracotta pot on a shelf in the grandmother's own room — small, "
      + "chipped, and the soil in it pale and dry.",
    u: ["အဖွားရဲ့လက် ပိုတုန်လာတယ်။",
        "“ငါ့ပန်းအိုးလည်း ခြောက်တယ် သမီး။”",
        "“ခြောက်ဆယ်နှစ်လုံး ခြောက်ခဲ့တယ်။ ငါ ဘယ်သူ့ကိုမှ မပြောရဲခဲ့ဘူး။”"],
    c: [[2, "bigstinger"]] },

  { t: "The Day of the Burial", l: "သင်္ချိုင်း", w: ["အဖွား"],
    g: "မြှုပ်နှံတဲ့နေ့က မိုးရွာနေတယ်။ ရွာအစွန်က သင်္ချိုင်းကွင်းမှာ။",
    p: "⚠️ MEMORY. A small rural burial ground in heavy rain thirty-four years ago, a few figures "
      + "under umbrellas at a distance, seen wide. No child, no coffin detail, nothing morbid.",
    u: ["အဲဒီည အဖွား ကျွန်မကို ပြောပြတယ်။",
        "မြှုပ်နှံတဲ့နေ့က မိုးရွာနေတယ်။ ရွာအစွန်က သင်္ချိုင်းကွင်းမှာ။",
        "လူကြီးတွေက နာမည်မခေါ်ရဘူးလို့ ထပ်ပြောတယ်။ အဖွားက ခေါင်းညိတ်ပြီး နားထောင်တယ်။"] },

  { t: "Everyone Went Home", l: "သင်္ချိုင်း", w: ["အဖွား"],
    g: "မြေကြီးဖုံးပြီးတဲ့အခါ လူတွေ ပြန်ကုန်ပြီးတဲ့အခါ အဖွား တစ်ယောက်တည်း ကျန်ခဲ့တယ်။",
    p: "⚠️ MEMORY. A young woman alone in the rain at the edge of a burial ground, everyone else "
      + "already small figures walking away up the track.",
    u: ["ဒါပေမယ့် မြေကြီးဖုံးပြီးတဲ့အခါ—",
        "လူတွေ ပြန်ကုန်ပြီးတဲ့အခါ—",
        "အဖွား တစ်ယောက်တည်း ကျန်ခဲ့တယ်။"] },

  { t: "She Said It Into the Earth", l: "သင်္ချိုင်း", w: ["အဖွား"],
    g: "အဖွား မြေပုံလေးဆီ ငုံ့ပြီး နားကပ်ပြီး နာမည်တစ်ခု တိုးတိုးခေါ်ခဲ့တယ်။",
    p: "⚠️ MEMORY. A young woman kneeling in wet grass with her face lowered right down to a small "
      + "mound of fresh earth, speaking into it. Rain, and nobody else in frame.",
    u: ["ပြီးတော့ အဖွား မြေပုံလေးဆီ ငုံ့ပြီး—",
        "နားကပ်ပြီး နာမည်တစ်ခု တိုးတိုးခေါ်ခဲ့တယ်။",
        "ဘယ်သူမှ မကြားဘူး။ ဘယ်သူ့ကိုမှ မပြောဖူးဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "What Was the Name", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "“အဖွား… အဲဒီနာမည်က ဘာလဲ?” အဖွား ပါးစပ်ဖွင့်တယ်။",
    p: "An old woman's mouth opening to speak, and a younger woman leaning in close to hear it.",
    u: ["“အဖွား… အဲဒီနာမည်က ဘာလဲ?”",
        "အဖွား ပါးစပ်ဖွင့်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Who Are You", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "ပြီးတော့ မျက်လုံးတွေက ရှုပ်သွားတယ် — “သမီး… နင်ဘယ်သူလဲ?”",
    p: "⚠️ THE OTHER STATE. The same eyes as the lucid shot, now vague and frightened, searching a "
      + "face they no longer recognise.",
    u: ["ပြီးတော့—",
        "မျက်လုံးတွေက ရှုပ်သွားတယ်။",
        "“သမီး… နင်ဘယ်သူလဲ?”"],
    c: [[2, "bigstinger"]] },

  { t: "Half Past Nine", l: "အဖွားအခန်း",
    g: "ည ကိုးနာရီ ခွဲပြီ။ အဖွားပြန်သွားပြီ။",
    p: "A small clock on a shelf in a village bedroom reading half past nine, an old woman out of "
      + "focus in the bed beyond it.",
    u: ["ည ကိုးနာရီ ခွဲပြီ။",
        "အဖွားပြန်သွားပြီ။"],
    c: [[1, "bigstinger"]] },

  { t: "She Moved Back to the Village", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "နောက်တစ်နေ့ကစပြီး ကျွန်မ ရွာမှာ နေတယ်။ နေ့တိုင်း အဖွားဘေးမှာ ထိုင်တယ်။",
    p: "A woman asleep sitting upright on a stool beside a bed in the small hours, a notebook open "
      + "in her lap.",
    u: ["နောက်တစ်နေ့ကစပြီး ကျွန်မ ရွာမှာ နေတယ်။ အလုပ်ကို ခွင့်တင်တယ်။",
        "နေ့တိုင်း အဖွားဘေးမှာ ထိုင်တယ်။",
        "ည ရှစ်နာရီကနေ ကိုးနာရီအထိ။ အဖွား ရှင်းနေတဲ့ တစ်နာရီ။"] },

  { t: "Once. Twice. Again.", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "ကျွန်မ မေးတယ်။ တစ်ခါမေးတယ်။ နှစ်ခါမေးတယ်။ တစ်ခါတလေ မှတ်မိတယ်။ တစ်ခါတလေ မမှတ်မိဘူး။",
    p: "A woman asking the same question again, patient, her hand over the old woman's hand.",
    u: ["ကျွန်မ မေးတယ်။ တစ်ခါမေးတယ်။ နှစ်ခါမေးတယ်။",
        "အဖွားက တစ်ခါတလေ မှတ်မိတယ်။ တစ်ခါတလေ မမှတ်မိဘူး။"] },

  { t: "It's Raining. The Ground Is Soft.", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "“မိုးရွာနေတယ်” လို့ ပြောတယ်။ “မြေက ပျော့နေတယ်” လို့ ပြောတယ်။ ဒါပေမယ့် နာမည်ကိုတော့ မထွက်ဘူး။",
    p: "Close on the old woman's face talking, adrift — reciting fragments of the same night from "
      + "sixty years ago without ever arriving at the word.",
    u: ["“မိုးရွာနေတယ်” လို့ ပြောတယ်။",
        "“မြေက ပျော့နေတယ်” လို့ ပြောတယ်။ “ငါ့လက်တွေ အေးနေတယ်” လို့ ပြောတယ်။",
        "ဒါပေမယ့် နာမည်ကိုတော့— မထွက်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "It Doesn't Matter Who Pours", l: "အိမ်ဧည့်ခန်း",
    g: "ကျွန်မ ရေခွက်ကို မကိုင်တော့ဘူး။ တခြားလူကို ချခိုင်းတယ်။ ဒါပေမယ့် ရေက ပျောက်နေတုန်းပဲ။",
    p: "Someone else's hands pouring the water at a ceremony while the narrator watches from the "
      + "back of the room — and the soil still goes pale.",
    u: ["ရွာမှာ ဆွမ်းကပ်တယ်။ ကုသိုလ်ဝေတယ်။",
        "ကျွန်မ ရေခွက်ကို မကိုင်တော့ဘူး။ တခြားလူကို ချခိုင်းတယ်။",
        "ဒါပေမယ့် ရေက ပျောက်နေတုန်းပဲ။ ချတဲ့သူ ဘယ်သူဖြစ်ဖြစ် အတူတူပဲ။",
        "ရက်တွေ ကုန်သွားတယ်။",
        "နောက်တစ်ပတ် ရွာဦးကျောင်းမှာ အလှူတစ်ခု ရှိတယ်။ ကျွန်မ မသွားဘူး။"],
    c: [[2, "stinger"]] },

  { t: "The Glass Went Light in Her Hand", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ရေသောက်ဖို့ ခွက်ကို ကောက်ကိုင်လိုက်တယ်။ ခွက်က ပြည့်နေတယ်။",
    p: "A hand lifting a full glass of water toward a mouth, the water visible and still.",
    u: ["အဲဒီည အိမ်ပြန်ရောက်တော့—",
        "ကျွန်မ ရေသောက်ဖို့ ခွက်ကို ကောက်ကိုင်လိုက်တယ်။ ခွက်က ပြည့်နေတယ်။",
        "ကျွန်မ နှုတ်ခမ်းနား တင်လိုက်တယ်။"] },

  { t: "Fifth Step", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ပြီးတော့ ခွက်က ပေါ့သွားတယ်။ ကျွန်မ မသောက်ရသေးဘူး။ ငါးဆင့်မြောက်။",
    p: "The same glass at the same lip, now completely empty and dry inside, the woman's eyes wide "
      + "above its rim.",
    u: ["ပြီးတော့—",
        "ခွက်က ပေါ့သွားတယ်။ ကျွန်မ မသောက်ရသေးဘူး။",
        "ခွက်ထဲမှာ ဘာမှမရှိတော့ဘူး။ ငါးဆင့်မြောက်။"],
    c: [[2, "bigstinger"]] },

  { t: "Myat Noe", l: "အဖွားအခန်း", w: ["အဖွား", "ခင်မြတ်နိုး"],
    g: "အဖွား ကျွန်မလက်ကို ဆွဲခေါ်တယ်။ မျက်လုံးတွေ ရှင်းနေတယ် — “မြတ်နိုး။”",
    p: "An old woman's hand shooting out to grip a wrist, her eyes sharp and present again.",
    u: ["အဲဒီည အဖွား ကျွန်မလက်ကို ဆွဲခေါ်တယ်။ မျက်လုံးတွေ ရှင်းနေတယ်။",
        "“မြတ်နိုး။”",
        "ကျွန်မ ထိတ်လန့်သွားတယ်။ ရက်ပေါင်းများစွာအတွင်း ပထမဆုံးအကြိမ် အဖွား ကျွန်မနာမည်ကို ခေါ်တာ။ “အဖွား!”"],
    c: [[1, "bigstinger"]] },

  { t: "Has the Water Gone From Your Glass", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "“နင့်ခွက်ထဲက ရေ ပျောက်သွားပြီလား?” ကျွန်မ ခေါင်းညိတ်တယ်။",
    p: "An old woman asking a question she already knows the answer to, her eyes closing as it is "
      + "confirmed.",
    u: ["“နင့်ခွက်ထဲက ရေ ပျောက်သွားပြီလား?”",
        "ကျွန်မ ခေါင်းညိတ်တယ်။ အဖွား မျက်လုံးမှိတ်လိုက်တယ်။"],
    c: [[1, "stinger"]] },

  { t: "Next She Drinks From You", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "“နောက်တစ်ဆင့်ဆိုရင် သူ နင့်ဆီကနေ သောက်လိမ့်မယ်။”",
    p: "Close on the old woman speaking, absolutely lucid, delivering the rule.",
    u: ["“နောက်တစ်ဆင့်ဆိုရင် သူ နင့်ဆီကနေ သောက်လိမ့်မယ်။”",
        "“ကျွန်မဆီကနေ?”"],
    c: [[0, "bigstinger"]] },

  { t: "However Much You Drink", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "“နင် ရေသောက်မယ်။ ဗိုက်ထဲ ဘာမှ မရောက်ဘူး။ ဘယ်လောက်သောက်သောက် ရေငတ်နေမယ်။”",
    p: "A woman's face listening, one hand rising unconsciously to her own throat.",
    u: ["“နင် ရေသောက်မယ်။ ဗိုက်ထဲ ဘာမှ မရောက်ဘူး။”",
        "“ဘယ်လောက်သောက်သောက် ရေငတ်နေမယ်။”",
        "ကျွန်မ လက်တွေ တုန်လာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "You Take Her Place", l: "အဖွားအခန်း", w: ["အဖွား", "ခင်မြတ်နိုး"],
    g: "“နင် သူ့နေရာကို ရောက်သွားမယ်။ ပြီးတော့ သူက နင့်နေရာကို ရောက်လာမယ်။”",
    p: "Two faces very close together in lamplight, one old and certain, one young and hearing the "
      + "worst thing she has ever heard.",
    u: ["“ဒါဆို ကျွန်မ ဘာဖြစ်သွားမလဲ?” အဖွား ကျွန်မမျက်နှာကို ကြည့်တယ်။",
        "“နင် သူ့နေရာကို ရောက်သွားမယ်။”",
        "“ပြီးတော့ သူက နင့်နေရာကို ရောက်လာမယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "You Will Be the One Without a Name", l: "အဖွားအခန်း",
    g: "“ဒီအိမ်မှာ နာမည်မရှိတဲ့သူက နင် ဖြစ်သွားလိမ့်မယ်။”",
    p: "A woman standing in a doorway with the lamplight behind her, her own face in shadow for the "
      + "first time in the film.",
    u: ["“ဒီအိမ်မှာ နာမည်မရှိတဲ့သူက နင် ဖြစ်သွားလိမ့်မယ်။”"],
    c: [[0, "bigstinger"]] },

  { t: "Please Say It", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "“အဖွား… နာမည်ကို ပြောပါ။ ကျေးဇူးပြုပြီး ပြောပါ။” အဖွား ပါးစပ်ကို ဖွင့်တယ်။ မထွက်ဘူး။",
    p: "A woman holding an old woman's face in both hands, begging, and the old woman's mouth open "
      + "and empty of sound.",
    u: ["ကျွန်မ အဖွားကို တောင်းပန်တယ်။",
        "“အဖွား… နာမည်ကို ပြောပါ။ ကျေးဇူးပြုပြီး ပြောပါ။”",
        "အဖွား ပါးစပ်ကို ဖွင့်တယ်။ မထွက်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Both of Them Crying", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး", "အဖွား"],
    g: "ကျွန်မ ငိုတယ်။ အဖွားလည်း ငိုတယ်။ နှစ်ယောက်လုံး ဘာမှမတတ်နိုင်ဘူး။",
    p: "Two women crying together in a small lamplit room, hands joined, neither able to help the "
      + "other.",
    u: ["ကျွန်မ ငိုတယ်။ အဖွားလည်း ငိုတယ်။",
        "နှစ်ယောက်လုံး ဘာမှမတတ်နိုင်ဘူး။"] },

  { t: "I Was Afraid I'd Forget", l: "အဖွားအခန်း", w: ["အဖွား"],
    g: "အဖွား တစ်ခွန်းပဲ ပြောနိုင်တယ် — “ငါ မေ့မှာ စိုးလို့…” စကားက အဲဒီမှာ ပြတ်သွားတယ်။",
    p: "An old woman's hand gripping a younger one, her lips moving on an unfinished sentence.",
    u: ["အဖွား ကျွန်မလက်ကို ဆုပ်ထားရင်း တစ်ခွန်းပဲ ပြောနိုင်တယ်။",
        "“ငါ မေ့မှာ စိုးလို့…”",
        "စကားက အဲဒီမှာ ပြတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "She Did Not Wake", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး"],
    g: "နောက်တစ်နေ့ မနက်မှာ အဖွား မနိုးတော့ဘူး။ ကျွန်မ အဖွားရဲ့လက်ကို ကိုင်ပြီး ထိုင်နေတယ်။",
    p: "Morning light in a village bedroom, a woman sitting beside a bed holding a hand. ⚠️ The "
      + "sleeping figure is peaceful and the blanket is undisturbed — no distress of any kind.",
    u: ["နောက်တစ်နေ့ မနက်မှာ အဖွား မနိုးတော့ဘူး။",
        "ကျွန်မ အဖွားရဲ့လက်ကို ကိုင်ပြီး ထိုင်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "At the Funeral They Will Pour", l: null, w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ သိတယ်။ အသုဘမှာ ရေစက်ချကြမယ်။ အဲဒီအခါ — ခြောက်ဆင့်မြောက်။",
    p: "Close on a woman's face working out exactly what her grandmother's funeral will cost her.",
    u: ["ကျွန်မ သိတယ်။ အသုဘမှာ ရေစက်ချကြမယ်။",
        "အဲဒီအခါ—",
        "ခြောက်ဆင့်မြောက်။"],
    c: [[2, "bigstinger"]] },

  { t: "Clearing the Room", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး"],
    g: "အသုဘမတိုင်ခင် ကျွန်မ အဖွားအခန်းကို ရှင်းတယ်။ အဝတ်တွေ။ ဆေးဘူးတွေ။ ဓာတ်ပုံဟောင်းတွေ။",
    p: "A woman folding clothes into a pile on a stripped bed, medicine bottles and framed "
      + "photographs set out on the floor.",
    u: ["အသုဘမတိုင်ခင် ကျွန်မ အဖွားအခန်းကို ရှင်းတယ်။",
        "အဝတ်တွေ။ ဆေးဘူးတွေ။ ဓာတ်ပုံဟောင်းတွေ။"] },

  { t: "A Box Under the Bed", l: "အဖွားအခန်း",
    g: "အိပ်ရာအောက်မှာ သစ်သားသေတ္တာငယ်တစ်လုံး။ သော့မခတ်ထားဘူး။ ဒါပေမယ့် အဖုံးက ဖွင့်ရခက်တယ်။",
    p: "A small wooden box pulled out from under a bed, its lid swollen shut with age, two hands "
      + "working at it.",
    u: ["အိပ်ရာအောက်မှာ သစ်သားသေတ္တာငယ်တစ်လုံး ရှိတယ်။",
        "သော့မခတ်ထားဘူး။ ဒါပေမယ့် အဖုံးက ဖွင့်ရခက်တယ်။"],
    c: [[1, "stinger"]] },

  { t: "A Shirt for Six Days", l: null,
    g: "အထဲမှာ ကလေးအင်္ကျီလေးတစ်ထည်။ ခြောက်ရက်သားလောက်စာ။ သေးသေးလေး။",
    p: "⚠️ NO CHILD, NO REMAINS. A single tiny cotton infant's shirt, yellowed with age, folded "
      + "neatly in the bottom of a wooden box. It is very small and that is the whole image.",
    u: ["အထဲမှာ—",
        "ကလေးအင်္ကျီလေးတစ်ထည်။",
        "ခြောက်ရက်သားလောက်စာ။ သေးသေးလေး။"],
    c: [[2, "bigstinger"]] },

  { t: "Folded Eight Times", l: null,
    g: "အင်္ကျီအောက်မှာ စာရွက်တစ်ရွက်။ ခေါက်ထားတာ ရှစ်ထပ်။ စက္ကူက အရမ်းပါးသွားပြီ။",
    p: "A small square of paper folded many times, lifted out from beneath the shirt, so worn at the "
      + "creases it is nearly falling apart.",
    u: ["ပြီးတော့ အင်္ကျီအောက်မှာ—",
        "စာရွက်တစ်ရွက်။ ခေါက်ထားတာ ရှစ်ထပ်။",
        "စက္ကူက အရမ်းပါးသွားပြီ။ လက်နဲ့ကိုင်ရင် ကွဲမလိုပဲ။"],
    c: [[2, "stinger"]] },

  { t: "One Name in Her Handwriting", l: null,
    g: "ကျွန်မ ဖြည်းဖြည်း ဖြန့်လိုက်တယ်။ အထဲမှာ အဖွားရဲ့လက်ရေး။ နာမည်တစ်ခု။",
    p: "The paper opened flat on a wooden floor with a single short line of old handwriting on it. "
      + "⚠️ The writing is visible as SHAPE and does not resolve into readable letters — the audience "
      + "sees that it is a name without being able to read it.",
    u: ["ကျွန်မ ဖြည်းဖြည်း ဖြန့်လိုက်တယ်။",
        "အထဲမှာ အဖွားရဲ့လက်ရေး။ နာမည်တစ်ခု။",
        "ကျွန်မ အဲဒီနာမည်ကို ဖတ်လိုက်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "She Never Destroyed It", l: "အဖွားအခန်း", w: ["ခင်မြတ်နိုး"],
    g: "အဖွား သုံးဆယ့်လေးနှစ်လုံး လူတိုင်းကို ဝှက်ထားခဲ့တယ်။ ဒါပေမယ့် တစ်ခါမှ မဖျက်ခဲ့ဘူး။",
    p: "A woman sitting down on the floorboards with the paper in both hands, undone.",
    u: ["ပြီးတော့ ကျွန်မ ကြမ်းပြင်ပေါ် ထိုင်ချလိုက်တယ်။",
        "အဖွား သုံးဆယ့်လေးနှစ်လုံး လူတိုင်းကို ဝှက်ထားခဲ့တယ်။",
        "ဒါပေမယ့် အဖွား တစ်ခါမှ မဖျက်ခဲ့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "That Was What She Meant", l: "အဖွားအခန်း",
    g: "“ငါ မေ့မှာ စိုးလို့…” အဖွား ပြောချင်ခဲ့တာ ဒါပဲ။",
    p: "The tiny shirt and the folded paper side by side on the floor, and nothing else.",
    u: ["“ငါ မေ့မှာ စိုးလို့…”",
        "အဖွား ပြောချင်ခဲ့တာ ဒါပဲ။"],
    c: [[1, "bigstinger"]] },

  { t: "Thirty People", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး", "အမေ"],
    g: "အသုဘနေ့မှာ အိမ်မှာ လူသုံးဆယ်လောက် ရှိတယ်။ ရေစက်ချဖို့ အချိန်ရောက်တယ်။",
    p: "A village house full for a funeral: thirty people seated on mats, the room warm and crowded, "
      + "a low table at the front with a water cup on it.",
    u: ["အသုဘနေ့မှာ အိမ်မှာ လူသုံးဆယ်လောက် ရှိတယ်။",
        "ဆရာတော်တွေ ရွတ်ပွဲပြီးတဲ့အခါ—",
        "ရေစက်ချဖို့ အချိန်ရောက်တယ်။"] },

  { t: "Let Me Pour", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး", "အမေ"],
    g: "အမေက ရေခွက်ကို ကိုင်တယ်။ ကျွန်မ အမေ့လက်ကို ထိလိုက်တယ် — “အမေ… ကျွန်မ ချပါရစေ။”",
    p: "A daughter's hand closing over her mother's on a water cup at the front of a full room.",
    u: ["အမေက ရေခွက်ကို ကိုင်တယ်။ ကျွန်မ အမေ့လက်ကို ထိလိုက်တယ်။",
        "“အမေ… ကျွန်မ ချပါရစေ။”",
        "အမေက ကျွန်မကို ကြည့်တယ်။ ပြီးတော့ ခွက်ကို ပေးလိုက်တယ်။"] },

  { t: "The Room Went Quiet", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ရေခွက်ကို နှစ်ဖက်စလုံးနဲ့ ကိုင်တယ်။ ခွက်က ပြည့်နေတယ်။ အခန်းထဲမှာ တိတ်သွားတယ်။",
    p: "A woman kneeling at the front of a crowded room holding a full cup in both hands, thirty "
      + "faces turned toward her.",
    u: ["ကျွန်မ ရေခွက်ကို နှစ်ဖက်စလုံးနဲ့ ကိုင်တယ်။ ခွက်က ပြည့်နေတယ်။",
        "အခန်းထဲမှာ တိတ်သွားတယ်။",
        "ကျွန်မ ရေကို လောင်းစပြုတယ်။"] },

  { t: "Loud Enough for the Whole House", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "အသံကျယ်ကျယ်၊ အိမ်တစ်အိမ်လုံး ကြားအောင် ပြောလိုက်တယ် — “ဒီကုသိုလ်ကို—”",
    p: "A woman speaking out at full voice in a silent room, her chin up, the cup tipped and pouring.",
    u: ["ပြီးတော့—",
        "အသံကျယ်ကျယ်၊ အိမ်တစ်အိမ်လုံး ကြားအောင် ပြောလိုက်တယ်။",
        "“ဒီကုသိုလ်ကို—”"],
    c: [[2, "bigstinger"]] },

  { t: "Someone Tried to Stop Her", l: "အိမ်ဧည့်ခန်း",
    g: "ရွာက အဖွားအိုတစ်ယောက်က “သမီးရေ” လို့ လှမ်းခေါ်တယ်။ ကျွန်မ မရပ်ဘူး။",
    p: "An elderly village woman half-rising from a mat with one hand raised in warning, and the "
      + "narrator not looking at her.",
    u: ["ရွာက အဖွားအိုတစ်ယောက်က “သမီးရေ” လို့ လှမ်းခေါ်တယ်။",
        "ကျွန်မ မရပ်ဘူး။",
        "“ကျွန်မရဲ့ အမွှာမ—”"],
    c: [[2, "bigstinger"]] },

  { t: "Her Mother's Hand Over Her Mouth", l: "အိမ်ဧည့်ခန်း", w: ["အမေ"],
    g: "အခန်းထဲက လူတွေ ကြည့်နေကြတယ်။ အမေ ပါးစပ်ကို လက်နဲ့ အုပ်ထားတယ်။",
    p: "A woman of sixty with one hand clamped over her own mouth, eyes streaming, hearing a secret "
      + "said aloud after thirty-four years.",
    u: ["အခန်းထဲက လူတွေ ကြည့်နေကြတယ်။",
        "အမေ ပါးစပ်ကို လက်နဲ့ အုပ်ထားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Myat Thiri", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ အသက်ကို ပြင်းပြင်း ရှူလိုက်ပြီး နာမည်ကို ခေါ်လိုက်တယ် — “မြတ်သီရိ ဆီ ရောက်ပါစေ။”",
    p: "⚠️ THE CLIMAX. Close on the woman's face as she says a name out loud for the first time in "
      + "thirty-four years, water still falling from the cup in her hands.",
    u: ["ကျွန်မ အသက်ကို ပြင်းပြင်း ရှူလိုက်ပြီး—",
        "နာမည်ကို ခေါ်လိုက်တယ်။",
        "“မြတ်သီရိ ဆီ ရောက်ပါစေ။”"],
    c: [[2, "bigstinger"]] },

  { t: "Nobody Answered", l: "အိမ်ဧည့်ခန်း",
    g: "ရေက ပန်းအိုးထဲကို ကျသွားတယ်။ အခန်းထဲမှာ ဘယ်သူမှ သာဓု မခေါ်ဘူး။ လူတိုင်း ရပ်နေတယ်။",
    p: "A wide shot of thirty seated people, every one of them silent and still, nobody looking at "
      + "anybody else.",
    u: ["ရေက ပန်းအိုးထဲကို ကျသွားတယ်။",
        "အခန်းထဲမှာ ဘယ်သူမှ သာဓု မခေါ်ဘူး။",
        "လူတိုင်း ရပ်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Say It For Me", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ မျက်ရည်တွေနဲ့ ထပ်ပြောတယ် — “သာဓုခေါ်ပေးပါ။”",
    p: "A woman still kneeling with the empty cup, turning to face the room and asking it for "
      + "something.",
    u: ["ကျွန်မ မျက်ရည်တွေနဲ့ ထပ်ပြောတယ်။",
        "“သာဓုခေါ်ပေးပါ။”",
        "ခဏတိတ်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Her Mother Went First", l: "အိမ်ဧည့်ခန်း", w: ["အမေ"],
    g: "ပြီးတော့ အမေက အရင်ဆုံး ခေါ်တယ် — “သာဓု…” အသံက ကျိုးနေတယ်။",
    p: "A woman of sixty with her hand still over her mouth, speaking through it, her voice "
      + "obviously breaking.",
    u: ["ပြီးတော့ အမေက အရင်ဆုံး ခေါ်တယ်။",
        "“သာဓု…”",
        "အသံက ကျိုးနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Whole Room", l: "အိမ်ဧည့်ခန်း",
    g: "ပြီးတော့ တစ်ယောက်ပြီးတစ်ယောက် — “သာဓု… သာဓု… သာဓု…” အခန်းတစ်ခန်းလုံး။",
    p: "Thirty people with their palms together, saying it, the room full of sound for the first "
      + "time.",
    u: ["ပြီးတော့ တစ်ယောက်ပြီးတစ်ယောက်။",
        "“သာဓု… သာဓု… သာဓု…”",
        "အခန်းတစ်ခန်းလုံး။"],
    c: [[2, "bigstinger"]] },

  { t: "One Minute. Five. Ten.", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ပန်းအိုးကို စိုက်ကြည့်နေတယ်။ တစ်မိနစ်။ ငါးမိနစ်။ ဆယ်မိနစ်။",
    p: "A woman kneeling in front of a pot in a room full of people, watching it, nobody daring to "
      + "move around her.",
    u: ["ကျွန်မ ပန်းအိုးကို စိုက်ကြည့်နေတယ်။",
        "တစ်မိနစ်။ ငါးမိနစ်။ ဆယ်မိနစ်။"],
    c: [[1, "heartbeat"]] },

  { t: "The Earth Stayed Wet", l: "အိမ်ဧည့်ခန်း",
    g: "မြေက — စိုနေတယ်။ အပေါ်ယံမှာ ရေပြင်လေး တင်နေတယ်။ အနားပတ်လည်မှာ အရောင်ရင့်နေတယ်။",
    p: "⚠️ THE PAYOFF. The pot ten minutes after pouring: DARK, GLOSSY AND WET, a film of water still "
      + "standing on the surface and the terracotta stained dark around the rim. Frame it exactly as "
      + "the dry shots were framed.",
    u: ["မြေက—",
        "စိုနေတယ်။",
        "အပေါ်ယံမှာ ရေပြင်လေး တင်နေတယ်။ အနားပတ်လည်မှာ အရောင်ရင့်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Her Finger Came Away Wet", l: "အိမ်ဧည့်ခန်း",
    g: "ကျွန်မ လက်ချောင်းနဲ့ ထိုးကြည့်လိုက်တယ်။ လက်ချောင်းက စိုသွားတယ်။",
    p: "⚠️ MIRROR OF THE EARLIER SHOT. Extreme close-up of a fingertip withdrawn from soil — this "
      + "time dark and visibly wet, a drop hanging from it.",
    u: ["ကျွန်မ လက်ချောင်းနဲ့ ထိုးကြည့်လိုက်တယ်။",
        "လက်ချောင်းက စိုသွားတယ်။",
        "သုံးဆယ့်လေးနှစ်အတွင်း ပထမဆုံးအကြိမ်— ရေက ရောက်သွားပြီ။"],
    c: [[2, "bigstinger"]] },

  { t: "They Thought She Was Grieving", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ဒူးထောက်ကျသွားတယ်။ လူတွေက ကျွန်မ ဝမ်းနည်းလို့လို့ ထင်ကြတယ်။ မဟုတ်ဘူး။",
    p: "A woman folding forward onto the floor beside the pot, and several people rising from their "
      + "mats to help her up.",
    u: ["ကျွန်မ ဒူးထောက်ကျသွားတယ်။",
        "အခန်းထဲက လူတွေက ကျွန်မကို ပြေးလာဆွဲထူကြတယ်။",
        "သူတို့က ကျွန်မ ဝမ်းနည်းလို့လို့ ထင်ကြတယ်။ မဟုတ်ဘူး။"] },

  { t: "Something Small and Cold", l: "အိမ်ဧည့်ခန်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ လက်ဖဝါးထဲမှာ သေးသေးလေး၊ အေးအေးလေး၊ ဖြတ်ခနဲ — လက်တစ်ဖက် ကိုင်လိုက်သလိုပဲ။",
    p: "⚠️ NO CHILD AND NO SECOND HAND IS SHOWN. A woman's own open palm on the floorboards with her "
      + "fingers slightly curled, as if closed a moment ago around something small. That is the whole "
      + "image.",
    u: ["အဲဒီတစ်ခဏမှာ— ကျွန်မ လက်ဖဝါးထဲမှာ—",
        "သေးသေးလေး၊ အေးအေးလေး၊ ဖြတ်ခနဲ—",
        "လက်တစ်ဖက် ကိုင်လိုက်သလိုပဲ။ ခဏလေးပဲ။ ပြီးတော့ ပျောက်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Pot Stays Wet Now", l: "ဘုရားခန်း",
    g: "အဲဒီနေ့ကစပြီး ကျွန်မတို့အိမ်က ပန်းအိုးက စိုနေတယ်။ ရေစက်ချတိုင်း ရေက ကျန်နေတယ်။",
    p: "The shrine pot in ordinary daylight, wet and unremarkable, a small shrub in it looking "
      + "healthier than before.",
    u: ["အဲဒီနေ့ကစပြီး ကျွန်မတို့အိမ်က ပန်းအိုးက စိုနေတယ်။",
        "ရေစက်ချတိုင်း ရေက ကျန်နေတယ်။ ပုံမှန်အတိုင်း။ သာမန်အတိုင်း။"] },

  { t: "A Stone Beside Her Grandmother's", l: "သင်္ချိုင်း", w: ["ခင်မြတ်နိုး"],
    g: "ကျွန်မ ရွာမှာ ကျောက်တိုင်လေးတစ်ခု ထားပေးတယ်။ အဖွားဘေးမှာ။",
    p: "A small new whitewashed marker set in grass beside a slightly older one in a village burial "
      + "ground, morning light.",
    u: ["ကျွန်မ ရွာမှာ ကျောက်တိုင်လေးတစ်ခု ထားပေးတယ်။",
        "အဖွားဘေးမှာ။"] },

  { t: "A Name Carved, at Last", l: "သင်္ချိုင်း",
    g: "ကျောက်တိုင်ပေါ်မှာ နာမည်တစ်ခု ထွင်းထားတယ်။ သုံးဆယ့်လေးနှစ်ကြာမှ ပထမဆုံးအကြိမ် ရေးဖြစ်တဲ့နာမည်။",
    p: "⚠️ TEXT PERMITTED — THE ONLY TEXT IN THE FILM. Close on the carved face of the small stone "
      + "reading exactly \"မြတ်သီရိ\" in clean Burmese lettering. That name is the only text in the "
      + "image.",
    u: ["ကျောက်တိုင်ပေါ်မှာ နာမည်တစ်ခု ထွင်းထားတယ်။",
        "သုံးဆယ့်လေးနှစ်ကြာမှ ပထမဆုံးအကြိမ် ရေးဖြစ်တဲ့နာမည်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Ground Is Always Wet Now", l: "သင်္ချိုင်း", w: ["ခင်မြတ်နိုး"],
    g: "လအနည်းငယ်တစ်ခါ ကျွန်မ သွားတယ်။ နာမည်ကို ခေါ်တယ်။ ကျောက်တိုင်အောက်က မြေက အမြဲ စိုနေတယ်။",
    p: "A woman kneeling at a small grave marker pouring water from a cup, the grass and earth "
      + "beneath it dark and wet.",
    u: ["လအနည်းငယ်တစ်ခါ ကျွန်မ သွားတယ်။ ရေခွက်ကို ကိုင်တယ်။ နာမည်ကို ခေါ်တယ်။",
        "ပြီးတော့ တစ်ယောက်တည်း သာဓုခေါ်တယ်။",
        "ကျောက်တိုင်အောက်က မြေက— အမြဲ စိုနေတယ်။"] },

  { t: "Sometimes a Second Voice", l: "သင်္ချိုင်း", w: ["ခင်မြတ်နိုး"],
    g: "တစ်ခါတလေ တိတ်ဆိတ်မှုထဲကနေ နောက်တစ်သံ ကြားရတယ်။ ဒါပေမယ့် အခုတော့ ကျွန်မ မကြောက်တော့ဘူး။",
    p: "A woman kneeling alone at the stone with her eyes closed and her face calm, sunlight through "
      + "tamarind leaves.",
    u: ["တစ်ခါတလေ— ကျွန်မ သာဓုခေါ်ပြီးတဲ့နောက် တိတ်ဆိတ်မှုထဲကနေ— နောက်တစ်သံ ကြားရတယ်။",
        "ဒါပေမယ့် အခုတော့ ကျွန်မ မကြောက်တော့ဘူး။",
        "အခုတော့ သူ ဆာလောင်မနေတော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "I Have a Daughter", l: "သင်္ချိုင်း", w: ["ခင်မြတ်နိုး", "သမီး"],
    g: "ကျွန်မမှာ သမီးလေးတစ်ယောက် ရှိတယ်။ အသက် ခြောက်နှစ်။ ကျောက်တိုင်ရှေ့မှာ ရေစက်ချပြတယ်။",
    p: "A woman and a six-year-old girl crouched together at a small grave marker on a bright "
      + "morning, the child holding the cup with both hands.",
    u: ["ကျွန်မမှာ သမီးလေးတစ်ယောက် ရှိတယ်။ အသက် ခြောက်နှစ်။",
        "မနှစ်က သြဂုတ်လမှာ သူ့ကို ရွာခေါ်သွားတယ်။ ကျောက်တိုင်ရှေ့မှာ ရေစက်ချပြတယ်။"] },

  { t: "What Are You Doing", l: "သင်္ချိုင်း", w: ["သမီး", "ခင်မြတ်နိုး"],
    g: "သူက မေးတယ် — “အမေ၊ ဒီဟာ ဘာလုပ်တာလဲ?”",
    p: "A small girl looking up at her mother mid-pour, genuinely curious, entirely unafraid.",
    u: ["သူက မေးတယ်။ “အမေ၊ ဒီဟာ ဘာလုပ်တာလဲ?”",
        "ကျွန်မ ပြောပြတယ်။ ဆာလောင်နေတဲ့သူတွေအကြောင်း။",
        "ကုသိုလ်ကို ရေနဲ့ ပို့ပေးတဲ့အကြောင်း။ နာမည်ခေါ်မှ ရောက်တဲ့အကြောင်း။"] },

  { t: "Now Learn the Test", l: "သင်္ချိုင်း", w: ["ခင်မြတ်နိုး", "သမီး"],
    g: "“ရေစက်ချပြီးရင် ငါးမိနစ်လောက်နေမှ မြေကို ပြန်ကြည့်ပါ။”",
    p: "A mother crouched to her daughter's height, pointing at the ground beside the stone, "
      + "teaching her something practical.",
    u: ["သူက နားထောင်ပြီး ခေါင်းညိတ်တယ်။",
        "ပြီးတော့ ကျွန်မ သူ့ကို နောက်ထပ်တစ်ခု သင်ပေးလိုက်တယ်။",
        "“ရေစက်ချပြီးရင် ငါးမိနစ်လောက်နေမှ မြေကို ပြန်ကြည့်ပါ။”"] },

  { t: "Wet Means It Arrived", l: "သင်္ချိုင်း", w: ["သမီး"],
    g: "“မြေက စိုနေရင် ရေက ရောက်သွားပြီ။ မြေက ခြောက်နေရင် — တစ်ယောက်ယောက်က နာမည်ခေါ်ခံချင်နေတာ။”",
    p: "A small girl listening seriously, and beside her the dark wet patch of earth at the foot of "
      + "the marker.",
    u: ["သူက မေးတယ်။ “ဘာလို့လဲ?”",
        "“မြေက စိုနေရင် ရေက ရောက်သွားပြီ။” “မြေက ခြောက်နေရင်—”",
        "ကျွန်မ ခဏရပ်လိုက်တယ်။ “တစ်ယောက်ယောက်က နာမည်ခေါ်ခံချင်နေတာ။”"],
    c: [[2, "bigstinger"]] },

  { t: "What About When You're Gone", l: "သင်္ချိုင်း", w: ["သမီး", "ခင်မြတ်နိုး"],
    g: "သူက ခဏစဉ်းစားပြီး မေးတယ် — “အမေ မရှိတော့ရင်ရော?”",
    p: "A six-year-old asking her mother a question, plainly, without any sense of what it costs to "
      + "answer.",
    u: ["သူက ခဏစဉ်းစားပြီး မေးတယ်။",
        "“အမေ မရှိတော့ရင်ရော?”",
        "လေတွေက ကျောက်တိုင်တွေကြားမှာ တိုးနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Then You Look", l: "သင်္ချိုင်း", w: ["ခင်မြတ်နိုး", "သမီး"],
    g: "“အဲဒီအခါ သမီး ကြည့်ပါ။ မြေက ခြောက်နေရင် အမေ့နာမည်ကို ခေါ်ပေးပါနော်။”",
    p: "A mother smiling at her daughter with her hand on the child's cheek, sunlight, an ordinary "
      + "morning.",
    u: ["ကျွန်မ သူ့ကို ကြည့်ပြီး ပြုံးလိုက်တယ်။",
        "“အဲဒီအခါ သမီး ကြည့်ပါ။”",
        "“မြေက ခြောက်နေရင် အမေ့နာမည်ကို ခေါ်ပေးပါနော်။”"],
    c: [[2, "bigstinger"]] },

  { t: "She Wanted to Know if It Was Wet", l: "သင်္ချိုင်း", w: ["သမီး"],
    g: "နောက်ဆုံးပုံ — သမီးက ကျောက်တိုင်ဘေးမှာ ဒူးထောက်ပြီး လက်ချောင်းလေးတစ်ချောင်းကို မြေပေါ်မှာ ထိုးကြည့်နေတယ်။",
    p: "Final composition: a six-year-old girl kneeling beside the small stone, pressing one finger "
      + "into the earth and lifting it to look at the tip. Bright, warm, ordinary morning light. Hold "
      + "on the child's hand.",
    u: ["သမီးက ခေါင်းညိတ်တယ်။",
        "ပြီးတော့ သူ ကျောက်တိုင်ဘေးမှာ ဒူးထောက်ပြီး—",
        "လက်ချောင်းလေးတစ်ချောင်းကို မြေပေါ်မှာ ထိုးကြည့်နေတယ်။ စိုလားခြောက်လား သိချင်လို့။"],
    c: [[2, "finalstinger"]] },
];
