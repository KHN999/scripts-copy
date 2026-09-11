/**
 * အိမ်ပြန်ရောက်ပြီးသားလူ — scene board.
 *
 * One entry per shot:
 *   t  title (English, for the sheet card)
 *   g  Burmese gloss of what the PICTURE shows — for the person doing images.
 *      Never enters the copy block.
 *   p  English image prompt body. The shot header and the style block are added
 *      by the builder so they cannot drift between shots.
 *   u  narration units, Burmese, verbatim from the script
 *   c  cues [[unitIndex, name]] — stinger | bigstinger | finalstinger | knock | heartbeat
 *   w  reference plates this shot needs
 *   l  location plate
 *
 * SHORT LINES ARE MERGED. "ဟေ့!", "သိတယ်", "သား?" / "ဗျာ", "ကျွီ…", "တဖတ်။" are
 * dramatic beats but four to seven characters long, and under ~10 the TTS
 * mispronounces, sometimes returns zero bytes, and drifts pitch worst of all —
 * those are the clips that came back female in the last batch. They are folded
 * into their neighbour so the caption keeps the beat and the clip stays safe.
 */

export const CAST = [
  { name: "ကိုခန့်",
    pose: "The subject stands in a three-quarter view turned slightly to his right so the LEFT SIDE OF HIS NECK AND THE SMALL DARK MOLE BELOW THE LEFT EAR are clearly visible, face still readable, full figure, neutral expression", en: "Ko Khant — the narrator",
    prompt: "A Burmese man of twenty-nine, slim build, short neat black hair, an ordinary open "
      + "face, a small dark mole low on the neck just below the left ear. A plain white "
      + "short-sleeved office shirt and dark trousers, the shirt soaked through at the shoulders "
      + "from rain. Tired, sober, entirely unremarkable — an office worker at the end of a long day." },
  { name: "အမေ", en: "The mother",
    prompt: "A Burmese woman of about fifty-five, greying hair pulled back into a low knot, a soft "
      + "lined face, small build. A simple pale house blouse and a dark patterned htamein. Barefoot "
      + "indoors. Warm and ordinary, never frightening in herself — the fear is always around her, "
      + "never in her face." },
  { name: "သူ",
    pose: "⚠️ The subject is seen FROM BEHIND, standing, full figure, the face not visible at all. Do not turn him toward the lens and do not resolve his face in this plate — it is never legibly resolved anywhere in the film. What this plate records is his build, his soaked white shirt, the water running from the cuffs and the shoes worn indoors", en: "The double — NEVER fully shown",
    prompt: "A man of the same height and build as Ko Khant in the same soaked white office shirt, "
      + "water running from the cuffs and fingertips. ALWAYS obscured: seen from behind, in silhouette "
      + "against a lit doorway, cropped at the jaw, reflected, or thrown far out of focus. The face is "
      + "never legibly resolved and never lit. He still wears his shoes indoors." },
  { name: "ဦးလေး", en: "The taxi driver",
    prompt: "A Burmese man of about sixty-five, white hair, thick-framed glasses, a checked shirt and "
      + "a longyi. Calm, unhurried, entirely believable as a man who has driven this city for forty years." },
];

export const LOCS = [
  { name: "အိမ်ရှေ့", en: "The front of the house",
    prompt: "The front of a modest two-storey Yangon house at night: a low compound wall and gate, a "
      + "short concrete path, an outer iron security grille across a wooden front door, one bare bulb "
      + "burning over the entrance. Steady monsoon rain, wet concrete, everything reflective." },
  { name: "ဧည့်ခန်း", en: "The living room",
    prompt: "A modest Burmese living room: tiled floor, a low sofa, a wooden dining table against the "
      + "wall with a covered meal on it under a woven food cover, a framed photograph of a late father "
      + "on the wall, one warm ceiling light. Lived-in and slightly cluttered." },
  { name: "မီးဖိုချောင်", en: "The kitchen",
    prompt: "A small urban Burmese kitchen: tiled counter, a gas ring, a water filter pot, a barred "
      + "window over the sink looking onto a dark back yard, a rear door with a sliding metal bolt." },
  { name: "ရေချိုးခန်း", en: "The bathroom",
    prompt: "A small tiled Burmese bathroom: a water tank and scoop, a plain wooden door with a sliding "
      + "bolt on the inside, and high on the rear exterior wall a small barred ventilation opening far "
      + "too narrow for a person." },
  { name: "တက္ကစီ", en: "The taxi interior",
    prompt: "The inside of an old Yangon taxi at night seen from the back seat: worn upholstery, a "
      + "folded face towel on the seat, rain sheeting down the windscreen, wipers moving, the driver's "
      + "eyes visible in the rear-view mirror, city lights smeared through wet glass." },
];

export const STYLE =
  "A modest two-storey house in a residential ward of Yangon, Myanmar, present day, during a night of "
  + "steady monsoon rain. Painted plaster and concrete, an iron security grille over a wooden front "
  + "door, tiled floors, a covered meal waiting on the dining table. Warm domestic tungsten light "
  + "indoors, cold blue-grey rain outside, wet reflective streets. Cinematic photorealism, contemporary "
  + "and lived-in rather than gothic — this is an ordinary family home before it is a haunting. "
  + "Desaturated warm palette, 35mm film grain, shallow depth of field, 16:9. Mobile phones, a taxi and "
  + "a CCTV camera are correct for this story and welcome. NEVER show a complete or clearly lit ghost: "
  + "the double is always turned away, backlit, cropped, reflected or out of focus, and his face is "
  + "never resolved. No gore. No legible text, numbers, captions or watermarks anywhere in the image.";

export const SCENES = [
  { t: "She Did Not Open the Door for Me", l: "အိမ်ရှေ့",
    g: "အိမ်ရှေ့တံခါးကို အိမ်ထဲကနေ။ သံပန်းဖွင့်ထား။ အပြင်မှာ မိုး။ ဘယ်သူမှ မရှိ။",
    p: "The front door of the house seen from inside the hall, the iron grille standing open onto "
      + "black rain, the doorway completely empty, wet light on the tiles just inside the threshold.",
    u: ["အမေက ကျွန်တော့်ကို တံခါးဖွင့်ပေးလိုက်တာ မဟုတ်ဘူး။",
        "ကျွန်တော့်ပုံစံနဲ့ ရောက်လာတဲ့အရာကို “သား၊ ဝင်လေ” လို့ ပြောပြီး အိမ်ထဲ ခေါ်လိုက်တာ။"],
    c: [[1, "stinger"]] },

  { t: "She Still Regrets Those Words", l: "ဧည့်ခန်း", w: ["အမေ"],
    g: "အမေ နေ့ခင်းအလင်းထဲ ဆိုဖာပေါ် တစ်ယောက်တည်း ထိုင်နေတယ်။ လက်နှစ်ဖက် ပေါင်ပေါ်။",
    p: "The mother alone on the sofa in flat grey daylight, hands loose in her lap, looking at nothing "
      + "in particular, the covered meal long gone from the table behind her.",
    u: ["အဲဒီစကားနှစ်လုံးကို အမေ အခုထိ နောင်တရနေတုန်းပဲ။",
        "ကျွန်တော်ကတော့ အမေ့ကို အပြစ်မတင်ပါဘူး။",
        "ဘာလို့လဲဆိုတော့ အဲဒီညက ကျွန်တော်လည်း အမေ့အသံကို ကြားရုံနဲ့ တံခါးတစ်ချပ် ဖွင့်ပေးမိတော့မလို့။"] },

  { t: "Ko Khant, Twenty-Nine", l: "အိမ်ရှေ့",
    g: "အိမ်ကို အပြင်လမ်းကနေ နေ့ခင်းမှာ။ သာမန်ရပ်ကွက်။ ဘာမှ မထူးဆန်း။",
    p: "The house from across the quiet residential street in ordinary daylight, a motorbike parked "
      + "further along, laundry on a neighbouring balcony. Utterly unremarkable.",
    u: ["ကျွန်တော့်နာမည် ကိုခန့်။ အသက်နှစ်ဆယ့်ကိုးနှစ်။",
        "ရန်ကုန်မှာ အမေနဲ့ နှစ်ယောက်တည်း နေတယ်။",
        "အဖေဆုံးပြီးကတည်းက အိမ်မှာ လူပိုမရှိတော့ဘူး။"] },

  { t: "She Waits Up", l: "ဧည့်ခန်း", w: ["အမေ"],
    g: "ဧည့်ခန်းမှာ ဖုံးထားတဲ့ ထမင်းပွဲ။ မီးတစ်လုံးပဲ ဖွင့်ထား။ ဆိုဖာ ဗလာ။",
    p: "A covered meal under a woven food cover on the dining table, one lamp left on, the rest of the "
      + "room dark, an empty sofa facing the front door.",
    u: ["ကျွန်တော် အလုပ်နောက်ကျတဲ့ညတွေဆို အမေက ထမင်းပွဲဖုံးထားပြီး ဧည့်ခန်းမှာ စောင့်တတ်တယ်။",
        "“အိပ်တော့ အမေ။ သားမှာ သော့ပါတယ်” လို့ ပြောတိုင်း အမေက ပြန်ပြောတယ်။",
        "“တံခါးဖွင့်ပေးဖို့ စောင့်တာ မဟုတ်ဘူး။ သားစားပြီးတဲ့ ပန်းကန် သိမ်းဖို့”"] },

  { t: "Eleven at Night", l: null, w: ["ကိုခန့်"],
    g: "ရုံးအဆောက်အအုံအောက် ညဘက်။ လမ်းက စိုနေတယ်။ မိုးဖွဲဖွဲ။",
    p: "A young office worker stepping out of a lit office building doorway into fine drizzle at night, "
      + "wet pavement, headlights smeared on the road, phone in hand.",
    u: ["အဲဒီညကလည်း အမေ စောင့်နေခဲ့တယ်။",
        "ညဆယ့်တစ်နာရီကျော်မှ ရုံးက ဆင်းရတယ်။",
        "မိုးက ဖွဲဖွဲရွာနေပေမယ့် ကားငှားတဲ့အက်ပ်မှာ ကားမရဘူး။"] },

  { t: "He Flags a Taxi", l: null, w: ["ကိုခန့်", "ဦးလေး"],
    g: "လမ်းမပေါ် တက္ကစီအဟောင်းတစ်စီး ရပ်လာတယ်။ မိုးထဲ။",
    p: "An old taxi pulling to the kerb in the rain, its headlights catching the downpour, a man in a "
      + "soaked white shirt stepping toward it.",
    u: ["ဒါနဲ့ လမ်းမပေါ်ထွက်ပြီး တက္ကစီတစ်စီး တားလိုက်တယ်။",
        "ယာဉ်မောင်းဦးလေးက ဆံပင်ဖြူဖြူ၊ မျက်မှန်ထူထူနဲ့။"] },

  { t: "The Towel", l: "တက္ကစီ", w: ["ဦးလေး"],
    g: "တက္ကစီအတွင်း။ ထိုင်ခုံပေါ် မျက်နှာသုတ်ပဝါ ခေါက်ထား။ ဦးလေးက လှမ်းပေးတယ်။",
    p: "Inside the taxi from the back seat: the elderly driver half-turned, holding out a folded face "
      + "towel, rain streaming down every window.",
    u: ["ကျွန်တော် ကားထဲဝင်တော့ ထိုင်ခုံပေါ်တင်ထားတဲ့ မျက်နှာသုတ်ပဝါကို လှမ်းပေးတယ်။",
        "“ခေါင်းသုတ်လိုက်ဦး။ ရေတွေစိုနေတာ”",
        "ကျွန်တော် ကျေးဇူးတင်စကားပြောပြီး အိမ်လိပ်စာ ပေးလိုက်တယ်။"] },

  { t: "Are You Home", l: "တက္ကစီ",
    g: "မှောင်နေတဲ့ကားထဲ ဖုန်းမျက်နှာပြင် တစ်ခုတည်း လင်းနေတယ်။",
    p: "A phone screen glowing in a dark car interior, a single short message visible as shape only, "
      + "rain-blurred streetlights beyond the window.",
    u: ["ကားထွက်ပြီး ငါးမိနစ်လောက်အကြာမှာ အမေ့ဆီက စာဝင်လာတယ်။",
        "“သား အိမ်ရောက်နေတာလား။”"] },

  { t: "He Smiles", l: "တက္ကစီ", w: ["ကိုခန့်"],
    g: "ကားနောက်ခန်းမှာ ဖုန်းအလင်းက မျက်နှာကို အောက်ကနေ ထိုးလင်းနေတယ်။ ပြုံးနေတယ်။",
    p: "The narrator's face lit from below by his phone in the back seat, faintly amused, hair still "
      + "wet, the city sliding past behind him.",
    u: ["ကျွန်တော် ပြုံးမိတယ်။",
        "အမေ အိပ်ပျော်သွားပြီး ကျွန်တော် ပြန်ဝင်လာတာ မကြားလိုက်ဘူး ထင်နေတယ်လို့ တွေးလိုက်တာ။",
        "“မရောက်သေးဘူး အမေ။ တက္ကစီပေါ်မှာ။”"] },

  { t: "Seen. No Reply.", l: "တက္ကစီ",
    g: "ဖုန်းစာမျက်နှာ။ ဖတ်ပြီးအမှတ်လေး ရှိတယ်။ ပြန်စာ မရှိ။",
    p: "A close view of a phone chat screen held in the dark, one message sent and marked read, the "
      + "space below it empty.",
    u: ["စာဖတ်ပြီးကြောင်း အမှတ်လေး ပေါ်လာတယ်။",
        "ပြန်စာတော့ မလာဘူး။",
        "ကျွန်တော်ကပဲ ထပ်ပို့လိုက်တယ်။",
        "“ဆယ့်ငါးမိနစ်လောက်ဆို ရောက်ပြီ။ ဘာလို့လဲ။”"] },

  { t: "Typing. Stopping. Typing.", l: "တက္ကစီ",
    g: "ဖုန်းမှာ စာရိုက်နေတဲ့အမှတ် ပေါ်လိုက် ပျောက်လိုက်။",
    p: "Extreme close-up of a phone screen showing a typing indicator, the three dots caught mid-cycle, "
      + "the rest of the screen dark.",
    u: ["ဒီတစ်ခါ အမေ စာရိုက်နေတာ ကြာတယ်။",
        "ပေါ်လာလိုက်၊ ပျောက်သွားလိုက်။"] },

  { t: "Then Who Went Into Your Room", l: "တက္ကစီ",
    g: "ဖုန်းပေါ်မှာ စာတစ်ကြောင်းတည်း။ နောက်ခံမှာ မျက်နှာက ဝါးနေတယ်။",
    p: "A single message alone on a phone screen, the reader's face a soft unfocused shape behind the "
      + "glow, everything else swallowed by the dark car.",
    u: ["နောက်ဆုံး စာတစ်ကြောင်း ဝင်လာတယ်။",
        "“ဒါဆို နင့်အခန်းထဲ ဝင်သွားတာ ဘယ်သူလဲ။”"],
    c: [[1, "bigstinger"]] },

  { t: "He Calls", l: "တက္ကစီ", w: ["ကိုခန့်"],
    g: "ဖုန်းကို နားကပ်ထားတယ်။ မျက်နှာက တင်းနေပြီ။",
    p: "The narrator holding the phone hard against his ear in the dark back seat, the smile entirely "
      + "gone, staring straight ahead at nothing.",
    u: ["ကျွန်တော် ပြုံးနေတာ ရပ်သွားတယ်။",
        "ချက်ချင်း ဖုန်းခေါ်လိုက်တယ်။",
        "အမေက ပထမတစ်ခါ ဖြတ်ချတယ်။",
        "ဒုတိယတစ်ခါမှ ကိုင်တယ်။"] },

  { t: "Her Voice Is Too Small", l: "ဧည့်ခန်း", w: ["အမေ"],
    g: "အမေ မှောင်တဲ့စင်္ကြံမှာ ဖုန်းကို ပါးစပ်နားကာပြီး တိုးတိုးပြောနေတယ်။",
    p: "The mother pressed into a dark hallway corner, phone held low, one hand cupped over her mouth "
      + "and the handset, only a slice of warm light on her face.",
    u: ["“သား…” အသံက တိုးလွန်းလို့ ဖုန်းကို နားနဲ့ ဖိကပ်လိုက်ရတယ်။",
        "“နင် တကယ် လမ်းမှာလား”",
        "“ဟုတ်တယ်။ ဘာဖြစ်လို့လဲ အမေ”"] },

  { t: "It Was You", l: "တက္ကစီ", w: ["ကိုခန့်"],
    g: "ကိုခန့် ကိုယ့်အဖြူရောင်အင်္ကျီကို ငုံ့ကြည့်နေတယ်။ အင်္ကျီက စိုနေတယ်။",
    p: "The narrator looking down at his own soaked white shirt in the dark of the taxi, phone still at "
      + "his ear, the fabric clinging and dark with rain.",
    u: ["အမေ့ဘက်က အဝတ်နဲ့ ဖုန်းပွတ်မိတဲ့အသံ ကြားရတယ်။ ပါးစပ်ကို လက်နဲ့ ကာပြီး ပြောနေပုံရတယ်။",
        "“ခုနက တံခါးခေါက်လို့ အမေ ဖွင့်ပေးလိုက်တာ… နင်ပဲ။”",
        "“ဒီမနက်ဝတ်သွားတဲ့ အဖြူရောင်အင်္ကျီနဲ့ပဲ။ ဆံပင်တွေလည်း ရေစိုနေတာ”",
        "ကျွန်တော် ကိုယ့်အင်္ကျီကို ငုံ့ကြည့်မိတယ်။"],
    c: [[3, "stinger"]] },

  { t: "He Just Walked In", l: "အိမ်ရှေ့",
    g: "အိမ်ထဲကနေ တံခါးဝကို။ တံခါးဝမှာ လူပုံသဏ္ဌာန် အမှောင်တစ်ခု ရှိတယ်။ ရှင်းရှင်း မမြင်ရ။",
    p: "The open front doorway seen from inside the lit hall, a man-shaped absence of light standing "
      + "just outside the threshold, no features resolved at all.",
    u: ["“အမေ့ကို ဘာပြောလဲ”",
        "“ဘာမှ မပြောဘူး။ တံခါးဝမှာ ရပ်နေလို့ သား ဝင်လေလို့ ပြောလိုက်တော့မှ ဝင်လာတာ”"] },

  { t: "Would I Not Know My Own Son", l: "ဧည့်ခန်း", w: ["အမေ"],
    g: "အမေ့မျက်လုံးတွေကို အနီးကပ်။ မှိန်တဲ့အလင်း။ နာကျင်နေတဲ့အကြည့်။",
    p: "A close view of the mother's eyes in dim light, hurt rather than frightened, the phone screen "
      + "throwing a faint cold edge across one cheek.",
    u: ["“မျက်နှာ သေချာမြင်လိုက်လား”",
        "အမေ ခဏတိတ်သွားတယ်။",
        "ပြီးတော့ နည်းနည်းနာကျင်သွားသလို အသံနဲ့ ပြောတယ်။",
        "“အမေ့သားမျက်နှာ အမေ မမှတ်မိဘဲ နေမလား”"] },

  { t: "Then Why Did You Ask", l: null,
    g: "ဖုန်းစာမျက်နှာ။ ဘာမှ မရိုက်ရသေးဘူး။",
    p: "A phone held still in the dark, the message box empty, the cursor waiting, rain on glass "
      + "reflected across the screen.",
    u: ["ကျွန်တော် ဘာပြန်ပြောရမှန်း မသိဘူး။",
        "“ဒါဆို အမေ ဘာလို့ စာပို့မေးတာလဲ”",
        "အမေ ချက်ချင်း မဖြေဘူး။"] },

  { t: "He Did Not Take Off His Shoes", l: "ဧည့်ခန်း",
    g: "ကြွေပြားခင်းထားတဲ့ကြမ်းပြင်ပေါ် စိုနေတဲ့ဖိနပ်ခြေရာတွေ တံခါးဝကနေ အထဲကို။",
    p: "Wet shoe prints tracking across a tiled floor away from the front door and into the dark of the "
      + "house, water still pooled in the deepest of them.",
    u: ["“သူ… ဖိနပ်မချွတ်ဘူး သား”",
        "ရင်ထဲမှာ တစ်ခုခု ကျသွားသလို ခံစားလိုက်ရတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "A Rule He Has Known Since Childhood", l: "အိမ်ရှေ့",
    g: "တံခါးဝမှာ ဖိနပ်တွေ သပ်သပ်ရပ်ရပ် စီထား။ တစ်ရံလုံး ခြောက်နေတယ်။",
    p: "A neat row of sandals and shoes lined up just inside a front door, every pair dry, the tiled "
      + "floor beside them marked with fresh wet prints that do not belong.",
    u: ["အမေက အိမ်ထဲ ဖိနပ်စီးတာ လုံးဝမကြိုက်ဘူး။",
        "ကျွန်တော် ငယ်ငယ်ကတည်းက သိတဲ့အကျင့်။"] },

  { t: "He Did Not Turn Around", l: "ဧည့်ခန်း",
    g: "စင်္ကြံရှည်။ အိပ်ခန်းတံခါး ဟနေတယ်။ ကြမ်းပြင်ပေါ် ရေစီးရာ။",
    p: "A short interior corridor with a bedroom door standing ajar on darkness, a thin trail of water "
      + "leading to it across the tiles.",
    u: ["“မိုးရေတွေ စီးကျနေတာနဲ့ အခန်းထဲ တန်းဝင်သွားတယ်။”",
        "“အမေက ထမင်းစားဦးမလားလို့ မေးတာလည်း လှည့်မကြည့်ဘူး။”",
        "“ဒေါသထွက်နေတာလားဆိုပြီး စာပို့မေးကြည့်တာ”"] },

  { t: "The Hinge", l: "ဧည့်ခန်း",
    g: "အိပ်ခန်းတံခါး ဖြည်းဖြည်း ပွင့်လာနေတယ်။ အထဲက မှောင်။",
    p: "A bedroom door swinging slowly inward on its own, the room beyond entirely black, the corridor "
      + "light failing to reach even the first foot of it.",
    u: ["ဖုန်းထဲမှာ အသံတစ်ခု ကြားလိုက်ရတယ်။ ကျွီ…",
        "ကျွန်တော့်အခန်းတံခါး ပတ္တာသံ။",
        "တစ်အိမ်လုံးမှာ အဲဒီတံခါးတစ်ချပ်ပဲ အဲဒီလို မြည်တယ်။"],
    c: [[0, "stinger"]] },

  { t: "Wet Shoes on Tile", l: "ဧည့်ခန်း",
    g: "မှောင်တဲ့စင်္ကြံ။ ကြွေပြားပေါ် ရေပြန်ဟပ်နေတယ်။ ခြေသံ။",
    p: "A dark corridor photographed low along the floor, wet tiles catching a distant light, a single "
      + "fresh footprint at the near edge of frame.",
    u: ["အမေ အသက်ရှူသံ ရပ်သွားတယ်။ “အမေ?”",
        "အဝေးကနေ ခြေသံကြားရတယ်။",
        "စိုနေတဲ့ဖိနပ်နဲ့ ကြွေပြားပေါ် လျှောက်နေတဲ့အသံ။ တဖတ်။ တဖတ်။"] },

  { t: "He Is Coming Out", l: "ဧည့်ခန်း", w: ["အမေ"],
    g: "အမေ နံရံနဲ့ကပ်ပြီး ဖုန်းကို ဆုပ်ထားတယ်။ မျက်လုံးက စင်္ကြံဘက်။",
    p: "The mother flattened against a wall gripping her phone, eyes cut hard toward the corridor, her "
      + "mouth open on a word she has not said.",
    u: ["နောက်တော့ အမေက အသံမထွက်သလောက် တိုးတိုးပြောတယ်။",
        "“သူ ပြန်ထွက်လာပြီ”",
        "ဖုန်းပြတ်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Do Not Call", l: "တက္ကစီ",
    g: "ဖုန်းမှာ စာနှစ်ကြောင်း ဆက်တိုက် ဝင်လာတယ်။",
    p: "Two short messages arriving one under the other on a phone screen in the dark, the reader's "
      + "thumb frozen just above the glass.",
    u: ["ကျွန်တော် ပြန်ခေါ်တော့မယ့်အချိန် စာဝင်လာတယ်။",
        "“မခေါ်နဲ့။ အသံမြည်လိမ့်မယ်။”",
        "နောက်တစ်ကြောင်း။ “အမေ့ရှေ့မှာ ထိုင်နေတယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "Drive Faster", l: "တက္ကစီ", w: ["ဦးလေး"],
    g: "နောက်ကြည့်မှန်ထဲက ဦးလေးရဲ့ မျက်လုံးတွေ။",
    p: "The driver's eyes framed in the rear-view mirror, glasses catching the dashboard light, the "
      + "wet road rushing beyond the windscreen.",
    u: ["ယာဉ်မောင်းဦးလေးကို အမြန်မောင်းပေးဖို့ ပြောလိုက်တယ်။",
        "“အိမ်မှာ တစ်ယောက်ယောက် ဝင်နေလို့။ အမေတစ်ယောက်တည်း ရှိတာ”",
        "ဦးလေးက နောက်ကြည့်မှန်ကနေ ကျွန်တော့်ကို တစ်ချက်ကြည့်ပြီး ကားအရှိန်တင်တယ်။"] },

  { t: "Call the Police", l: "တက္ကစီ",
    g: "ကားရှေ့မှန်ပေါ် မိုးရေ။ ရေသုတ်တံ ရွေ့နေတယ်။ လမ်းက ဝါးနေတယ်။",
    p: "The windscreen from inside, wipers mid-sweep, the street beyond dissolved into smeared light "
      + "and rain.",
    u: ["“ရဲခေါ်လိုက်။ အိမ်ရောက်ရင်လည်း တစ်ယောက်တည်း ဝင်မသွားနဲ့”",
        "ကျွန်တော် ရဲစခန်းကို ဖုန်းဆက်ပြီး လိပ်စာပေးလိုက်တယ်။",
        "အမေအိမ်မှာ တစ်ယောက်တည်းရှိနေကြောင်း၊ အမည်မသိလူတစ်ယောက် အိမ်ထဲဝင်နေကြောင်း ပြောတယ်။",
        "ကိုယ့်မျက်နှာနဲ့လူလို့တော့ မပြောရဲဘူး။"] },

  { t: "Lock Yourself In", l: "ရေချိုးခန်း",
    g: "ရေချိုးခန်းတံခါးကို စင်္ကြံကနေ။ အထဲမှာ သော့ချောင်း။",
    p: "A plain wooden bathroom door at the end of a dim corridor, its inside bolt visible through the "
      + "gap where it stands slightly open.",
    u: ["ဖုန်းချပြီး အမေ့စာကို ပြန်ကြည့်လိုက်တယ်။",
        "“အမေ ရေချိုးခန်းထဲ ဝင်နိုင်မလား။ အထဲကနေ သော့ခတ်ထား။”",
        "အမေက ချက်ချင်း မပြန်ဘူး။"] },

  { t: "A Photograph Arrives", l: "ဧည့်ခန်း",
    g: "ဖုန်းနဲ့ ခိုးရိုက်ထားတဲ့ပုံ။ စောင်းနေတယ်။ ဧည့်ခန်းကို အောက်ကနေ။",
    p: "A tilted, badly framed covert phone photograph of a living room taken from lap height, the "
      + "edge of a knee in the corner of the frame.",
    u: ["စက္ကန့်သုံးဆယ်လောက်ကြာတော့ ဓာတ်ပုံတစ်ပုံ ရောက်လာတယ်။",
        "အမေ ဖုန်းကို ပေါင်ပေါ်တင်ထားရင်း ခိုးရိုက်လိုက်ပုံရတယ်။",
        "ပုံက နည်းနည်းစောင်းနေတယ်။"] },

  { t: "Sitting at the Table", l: "ဧည့်ခန်း", w: ["သူ"],
    g: "စားပွဲတစ်ဖက်မှာ ကိုခန့်နဲ့တူတဲ့လူ ခေါင်းငုံ့ထိုင်နေတယ်။ လက်နှစ်ဖက် ဒူးပေါ်။ မျက်နှာ မမြင်ရ။",
    p: "A seated figure at the far side of the dining table, head bowed low, both hands laid flat on "
      + "his knees, face lost in shadow and camera blur. The covered meal untouched between.",
    u: ["ဧည့်ခန်းစားပွဲ။ ဖုံးထားတဲ့ ထမင်းပွဲ။",
        "စားပွဲတစ်ဖက်က ထိုင်ခုံပေါ်မှာ ကျွန်တော်။",
        "ခေါင်းကို နည်းနည်းငုံ့ပြီး ထိုင်နေတယ်။",
        "လက်နှစ်ဖက်က ဒူးပေါ်မှာ ပြားပြားတင်ထားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Mole Below the Ear", l: null,
    g: "ဓာတ်ပုံကို ချဲ့ကြည့်ထားတာ။ နားရွက်အောက်က မှဲ့လေး။ အခြားဘာမှ မမြင်ရ။",
    p: "An extreme digital enlargement of part of a photograph: the skin of a neck just below an ear, "
      + "grainy and pixelated, a small dark mole clearly visible. Nothing else in frame is legible.",
    u: ["မျက်နှာကို သေချာမမြင်ရဘူး။",
        "ဒါပေမယ့် ကျွန်တော့် ဘယ်ဘက်နားရွက်အောက်က မှဲ့အထိ ပါတယ်။"],
    c: [[1, "stinger"]] },

  { t: "When I Stop Looking, He Moves", l: "ဧည့်ခန်း",
    g: "စားပွဲပုံ ထပ်ရိုက်ထားတာ။ ထိုင်ခုံက အရင်ထက် နီးလာတယ်။ လူက မရှိ။",
    p: "The same dining table from the same angle, but one chair now standing noticeably closer to the "
      + "camera and empty, the covered meal unmoved.",
    u: ["အဲဒီပုံကို ကြီးကြည့်နေတုန်း အမေ့စာ ထပ်ရောက်လာတယ်။",
        "“အမေ မကြည့်တော့ရင် သူ လှုပ်တယ်။”",
        "ကျွန်တော် နားမလည်လို့ ပြန်မေးတယ်။ “ဘယ်လိုလှုပ်တာလဲ။”",
        "“စာရိုက်ပြီး ပြန်မော့ကြည့်တော့ ဘေးကထိုင်ခုံကို ရောက်နေတယ်။”",
        "“ထိုင်ခုံရွှေ့သံ မကြားဘူး။”"],
    c: [[4, "bigstinger"]] },

  { t: "She Cannot Look Anymore", l: "တက္ကစီ",
    g: "ဖုန်းကို မှောက်ချထားတယ်။ ကားထဲ မှောင်နေတယ်။",
    p: "A phone lying face down on a knee in a dark car, its edges catching a thin line of passing "
      + "streetlight, rain loud on the roof.",
    u: ["နောက်တစ်ကြောင်း ရောက်လာတယ်။",
        "“အခု ဖုန်းမကြည့်ရဲတော့ဘူး။”",
        "ကျွန်တော် အမေ့ကို စာမပို့တော့ဘူး။",
        "ဖုန်းမျက်နှာပြင်ကိုပဲ ကြည့်နေရတယ်။",
        "ကားရှေ့မှန်ပေါ် မိုးစက်တွေ ကျနေတယ်။ ရေသုတ်တံက တစ်ဖက်ပြီးတစ်ဖက် ရွေ့နေတယ်။"] },

  { t: "The Bolt Is Across", l: "ရေချိုးခန်း",
    g: "ရေချိုးခန်းတံခါးကို အထဲကနေ။ သော့ချောင်း ပိတ်ထားတယ်။",
    p: "The inside of the bathroom door, the sliding bolt pushed fully home, a strip of corridor light "
      + "under the door and one shadow interrupting it.",
    u: ["နှစ်မိနစ်လောက်ကြာတော့ ဖုန်းတုန်လာတယ်။",
        "“ရေချိုးခန်းထဲ ရောက်ပြီ။ သော့ခတ်ထားပြီ။”",
        "ကျွန်တော် အသက်ရှူထုတ်လိုက်မိတယ်။"] },

  { t: "How Did You Get Out", l: "မီးဖိုချောင်",
    g: "မီးဖိုချောင်တံခါးဝကို နောက်ဆုတ်ရင်း ကြည့်ရတဲ့ မြင်ကွင်း။",
    p: "A kitchen doorway seen while backing away from it down a corridor, the room beyond warm and "
      + "empty, the angle unsteady.",
    u: ["“ဘယ်လို ထွက်လာတာလဲ။”",
        "“မီးဖိုထဲ ရေသောက်ဦးမယ်လို့ ပြောပြီး နောက်ဆုတ်လာတာ။ သူ့ကိုပဲ ကြည့်နေခဲ့တယ်။”",
        "“ရေချိုးခန်းထဲဝင်ပြီးမှ တံခါးပိတ်လိုက်တာ။”"] },

  { t: "He Is Standing Outside the Door", l: "ရေချိုးခန်း",
    g: "တံခါးအောက်ခြေက အလင်းကြားထဲ ခြေထောက်နှစ်ဖက်ရဲ့ အရိပ်။",
    p: "The gap beneath a closed bathroom door seen from inside, the strip of light broken by two "
      + "unmoving shadows exactly where feet would be.",
    u: ["“သား ရောက်တော့မလား။”",
        "“တံခါးအပြင်မှာ ရပ်နေပြီထင်တယ်။”"],
    c: [[1, "knock"]] },

  { t: "The Ventilation Opening", l: "ရေချိုးခန်း",
    g: "အိမ်နောက်နံရံ အပေါ်နားက လေဝင်ပေါက်ငယ်။ သံတိုင်ပါ။ မိုးရွာနေတယ်။",
    p: "A small barred ventilation opening high on a rain-streaked exterior back wall, far too narrow "
      + "for a person, faint warm light showing through it from within.",
    u: ["အမေ့ရေချိုးခန်းက အိမ်နောက်ဘက်မှာ။",
        "အပေါ်နားမှာ လေဝင်ပေါက်ငယ်တစ်ခု ရှိတယ်။",
        "လူထွက်လို့မရပေမယ့် အပြင်ကနေ လှမ်းစကားပြောလို့ရတယ်။",
        "အဲဒီအပေါက်ကို သတိရသွားတယ်။"] },

  { t: "Stop One Street Short", l: null, w: ["ဦးလေး"],
    g: "တက္ကစီက လမ်းထောင့်မရောက်ခင် ရပ်လိုက်တယ်။ မိုးထဲ။",
    p: "A taxi halted in the rain short of a street corner, engine still running, its headlights "
      + "pointed away from a house further down the road.",
    u: ["“ဦးလေး၊ ရှေ့တစ်လမ်းမှာ ရပ်ပေး။ အိမ်ရှေ့အထိ မသွားနဲ့ဦး”",
        "ဦးလေးက ခေါင်းညိတ်တယ်။"] },

  { t: "Twelve Seconds of Audio", l: null,
    g: "ဖုန်းမှာ အသံဖိုင်တစ်ခု။ အသံလှိုင်းပုံစံ။ ကြာချိန် ဆယ့်နှစ်စက္ကန့်။",
    p: "A voice message waiting on a phone screen in the dark, its waveform a flat line broken by two "
      + "small clusters, a thumb hovering without pressing.",
    u: ["အမေ့ဆီက အသံဖိုင် ဝင်လာတယ်။",
        "ကြာချိန် ဆယ့်နှစ်စက္ကန့်။",
        "အစမှာ ရေပိုက်က ရေစက်ကျသံပဲ ကြားရတယ်။"] },

  { t: "Mother. Moth-er.", l: "ရေချိုးခန်း",
    g: "ရေချိုးခန်းအတွင်း။ တံခါးပိတ်ထား။ အောက်ခြေက အလင်းကြား။",
    p: "The inside of the small tiled bathroom, the bolted door filling frame, water beading on the "
      + "tank behind, the light gap beneath the door interrupted.",
    u: ["နောက်တော့ တံခါးတစ်ဖက်က အသံ။ “အမေ…”",
        "ကျွန်တော့်အသံ။ ဒါပေမယ့် စကားလုံးကို ပြောတာ မပီသသလိုပဲ။ “အ… မေ…”"],
    c: [[1, "bigstinger"]] },

  { t: "Then Exactly Right", l: "ဧည့်ခန်း",
    g: "ဖုံးထားတဲ့ထမင်းပွဲ။ ထိုင်ခုံတစ်လုံး နောက်ကို ဆွဲထုတ်ထား။ လူမရှိ။",
    p: "The covered meal on the table with one chair pulled back and empty, as though someone had just "
      + "risen from it, the room otherwise still.",
    u: ["ခဏနားတယ်။ ပြီးတော့ ထပ်ခေါ်တယ်။",
        "ဒီတစ်ခါတော့ ကျွန်တော် နေ့တိုင်းခေါ်နေကျအတိုင်း။",
        "“အမေ။ ထမင်းစားမယ်လေ”",
        "နောက်ဆုံးစကားကို နားထောင်ပြီး ကျွန်တော့်လက်တွေ ထုံသွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "It Is Learning", l: null,
    g: "ဖုန်းမှာ အသံဖိုင်နဲ့ စာ။ မှောင်နေတဲ့နောက်ခံ။",
    p: "A phone screen showing a played voice message with text beneath it, held in a hand that is not "
      + "quite steady, everything else black.",
    u: ["အသံဖိုင်နဲ့အတူ အမေ စာပို့ထားတယ်။",
        "“ခုနက အမေပြောတဲ့ ထမင်းစားဦးမလား ကို သူ တစ်ယောက်တည်း ပြန်ပြောနေတာ။”",
        "“အစက အမေ့အသံနဲ့။ အခု နင့်အသံ ဖြစ်သွားပြီ။”"],
    c: [[2, "bigstinger"]] },

  { t: "Do Not Answer Him", l: "ရေချိုးခန်း",
    g: "အမေ ရေချိုးခန်းကြမ်းပြင်ပေါ် ထိုင်ပြီး ဖုန်းကို ရင်နဲ့ဖက်ထားတယ်။",
    p: "The mother sitting on the bathroom floor with her back against the tiles, phone clutched to her "
      + "chest, staring at the bolted door.",
    u: ["ကျွန်တော် စာပြန်ရိုက်လိုက်တယ်။",
        "“သူ့ကို ပြန်မဖြေနဲ့တော့။ ဘာပြောပြော တံခါးမဖွင့်နဲ့။”",
        "ချက်ချင်း ပြန်စာရောက်လာတယ်။ “အမေ မဖြေဘူး။ ဒါပေမယ့် သူ မေးနေတာ ရပ်သွားပြီ။”"] },

  { t: "Breathing at the Keyhole", l: "ရေချိုးခန်း",
    g: "သော့ပေါက်ကို အထဲကနေ အနီးကပ်။ အပြင်ဘက်က မှောင်နေတယ်။",
    p: "Extreme close-up of an old keyhole seen from inside a room, the darkness on the far side of it "
      + "absolute, a faint bloom of condensation on the metal.",
    u: ["နောက်တစ်ကြောင်း။",
        "“အခု သော့ပေါက်နားကနေ အသက်ရှူနေတယ်။”"],
    c: [[1, "heartbeat"]] },

  { t: "The House Looks Perfectly Normal", l: "အိမ်ရှေ့",
    g: "အိမ်ကို လမ်းကနေ ညဘက်။ မီးတွေ လင်းနေတယ်။ ဘာမှမဖြစ်သလို။",
    p: "The house from the street at night, porch light and living-room light both burning warmly, rain "
      + "falling through the glow. Nothing whatsoever appears wrong.",
    u: ["ကျွန်တော်တို့ လမ်းထောင့်ရောက်တော့ ညဆယ့်တစ်နာရီလေးဆယ်နီးပြီ။",
        "အိမ်ရှေ့မီး လင်းနေတယ်။ ဧည့်ခန်းမှာလည်း မီးရှိတယ်။",
        "အပြင်ကကြည့်ရင် ဘာမှမဖြစ်တဲ့အိမ်လိုပဲ။",
        "အဲဒါက ပိုကြောက်ဖို့ကောင်းတယ်။"] },

  { t: "The Driver Comes Too", l: null, w: ["ကိုခန့်", "ဦးလေး"],
    g: "အိမ်ဘေးလမ်းကြားကျဉ်း။ လူနှစ်ယောက် ကျောခိုင်းပြီး ဝင်သွားတယ်။ မိုးထဲ။",
    p: "Two figures seen from behind entering a narrow wet alley between houses, the older one carrying "
      + "a short metal bar low at his side, rain hammering the walls.",
    u: ["ယာဉ်မောင်းဦးလေးက ထိုင်ခုံအောက်က သံတုတ်တိုတစ်ချောင်း ထုတ်ယူတယ်။",
        "“ဦးလေး လိုက်ခဲ့မယ်”",
        "အိမ်ဘေးလမ်းကြားကနေ နောက်ဘက်ကို သွားကြတယ်။",
        "ကျွန်တော်တို့ ခြေသံက မိုးသံထဲမှာ ပျောက်နေတယ်။"] },

  { t: "Her Eyes in the Opening", l: "ရေချိုးခန်း", w: ["အမေ"],
    g: "လေဝင်ပေါက်သေးသေးထဲမှာ အမေ့မျက်လုံးနှစ်လုံး ပေါ်နေတယ်။ အပြင်ကကြည့်တဲ့ပုံ။",
    p: "A pair of frightened eyes appearing in a small barred ventilation opening seen from outside in "
      + "the rain, only the eyes and a strip of forehead visible.",
    u: ["ရေချိုးခန်း လေဝင်ပေါက်အောက်ရောက်တော့ အမေ့ကို စာပို့လိုက်တယ်။",
        "“သား အိမ်နောက်မှာ။ လေဝင်ပေါက်အောက်။”",
        "အထဲက လှုပ်ရှားသံ နည်းနည်း ကြားရတယ်။",
        "ပြီးတော့ အမေ့မျက်လုံးတွေ လေဝင်ပေါက်မှာ ပေါ်လာတယ်။"] },

  { t: "Fingers Through the Bars", l: "ရေချိုးခန်း",
    g: "လေဝင်ပေါက်သံတိုင်ကြားက လက်ချောင်းတွေ။ အောက်ကနေ နောက်တစ်ဖက် လက်က ဆုပ်ထားတယ်။",
    p: "Thin fingers pushed out between the bars of a small vent from inside, met and held by a "
      + "younger hand reaching up from below in the rain.",
    u: ["အမေ ကျွန်တော့်ကို မြင်တော့ ပါးစပ်ကို လက်နဲ့ ပိတ်လိုက်တယ်။ မငိုမိအောင် အတင်းထိန်းထားတာ။",
        "ကျွန်တော် လက်လှမ်းပေးလိုက်တယ်။ အမေက လက်ချောင်းတွေပဲ ထုတ်လို့ရတယ်။",
        "အေးစက်နေတဲ့ အမေ့လက်ချောင်းတွေကို ကျွန်တော် ဆုပ်ထားလိုက်တယ်။",
        "“သား ရောက်ပြီ။ မကြောက်နဲ့”"] },

  { t: "Every Word, the Same", l: "ရေချိုးခန်း", w: ["အမေ"],
    g: "အမေ လက်ညှိုးကို နှုတ်ခမ်းမှာကပ်ပြီး တံခါးဘက် လှည့်ကြည့်နေတယ်။",
    p: "Inside the bathroom: the mother with one finger pressed hard to her lips, her head turned "
      + "sharply toward the bolted door, her whole body still.",
    u: ["အမေက ခေါင်းကို အမြန်ခါတယ်။",
        "လက်ညှိုးကို နှုတ်ခမ်းမှာ ကပ်တယ်။ တိတ်တိတ်နေလို့ ပြောတာ။",
        "ရေချိုးခန်းတံခါးဘက်က ကျွန်တော့်အသံ ထွက်လာတယ်။",
        "“သား ရောက်ပြီ။ မကြောက်နဲ့”",
        "တစ်လုံးမကျန်။ အသံအတိုးအကျယ်ကအစ အတူတူ။"],
    c: [[3, "bigstinger"]] },

  { t: "The Bars Do Not Move", l: "ရေချိုးခန်း", w: ["ဦးလေး"],
    g: "ဦးလေးက လေဝင်ပေါက်သံတိုင်တွေကို လက်နဲ့ဆွဲကြည့်နေတယ်။ မလှုပ်ဘူး။",
    p: "The old driver testing the bars of the vent with both hands in the rain, his face set, the "
      + "metal completely solid in the wall.",
    u: ["ကျွန်တော် အမေ့လက်ကို ပိုတင်းတင်း ဆုပ်မိတယ်။",
        "အမေ့မျက်လုံးတွေ ကျွန်တော့်နောက်ဘက်ကို ရွေ့သွားတယ်။",
        "ယာဉ်မောင်းဦးလေးကို မြင်တော့ နည်းနည်း အားတက်သွားသလိုပဲ။",
        "ဦးလေးက လေဝင်ပေါက်ကို ကြည့်တယ်။ သံတိုင်တွေကို လက်နဲ့ ဆွဲကြည့်တယ်။",
        "မလှုပ်ဘူး။ လူတစ်ယောက် ထွက်လာဖို့လည်း ကျဉ်းလွန်းတယ်။"] },

  { t: "The Plan, Typed", l: "ရေချိုးခန်း",
    g: "ဖုန်းကို လေဝင်ပေါက်ဆီ မြှောက်ပြထားတယ်။ စာက အထဲကို ပြနေတယ်။",
    p: "A phone held up to a barred vent from outside in the rain, its lit screen turned inward toward "
      + "the opening so the person within can read it.",
    u: ["အမေ့ကို ထုတ်ဖို့ အိမ်ထဲ ဝင်မှရမယ်။",
        "အဲဒီအချိန် အမေ့ဖုန်းမှာ ကျွန်တော် စာရိုက်ပြလိုက်တယ်။",
        "“သား အိမ်ရှေ့ကနေ သူ့ကို ခေါ်ထားမယ်။ သူ အရှေ့ဘက်ရောက်ရင် အမေ မီးဖိုနောက်တံခါးက ထွက်ခဲ့။”",
        "“ဦးလေး ဒီမှာ စောင့်နေမယ်။”"] },

  { t: "She Will Not Let Go", l: "ရေချိုးခန်း",
    g: "လက်ချောင်းတွေ ဖြည်းဖြည်း လွှတ်သွားတယ်။ သံတိုင်ကြားမှာ ဗလာ ကျန်ခဲ့တယ်။",
    p: "The moment fingers release from between the bars, one hand withdrawing into the dark of the "
      + "vent, rain running down the empty grille.",
    u: ["အမေ ခေါင်းခါတယ်။ လက်ကို မလွှတ်ဘူး။",
        "ကျွန်တော် ထပ်ရိုက်ပြလိုက်တယ်။ “အိမ်ထဲ မဝင်ဘူး။ သံပန်းအပြင်ကနေ ခေါ်မှာ။”",
        "အမေ စာဖတ်ပြီး ကျွန်တော့်ကို ကြည့်တယ်။",
        "နောက်တော့ လက်ကို ဖြည်းဖြည်း လွှတ်ပေးလိုက်တယ်။"] },

  { t: "What Are You Discussing", l: "ရေချိုးခန်း",
    g: "ရေချိုးခန်းတံခါးအောက်က အလင်းကြားထဲ အရိပ်ပါးပါး တစ်ခု။",
    p: "The thin line of light under the bathroom door with a single narrow shadow lying across it, "
      + "closer to the door than a standing person should be.",
    u: ["ကျွန်တော်တို့ စကားမပြောဘဲ နေတာကို ရေချိုးခန်းတံခါးတစ်ဖက်က အရာက နားထောင်နေခဲ့ပုံရတယ်။",
        "ကျွန်တော် နောက်ဆုတ်လိုက်တဲ့အချိန်မှာ သူက ကျွန်တော့်အသံနဲ့ ခပ်တိုးတိုး မေးတယ်။",
        "“အမေ… အပြင်ကလူနဲ့ ဘာတွေ တိုင်ပင်နေတာလဲ”"],
    c: [[2, "bigstinger"]] },

  { t: "Two Doors", l: "အိမ်ရှေ့",
    g: "အိမ်ရှေ့။ သံပန်းက အထဲကနေ ချိတ်ထား။ သစ်သားတံခါးက ဖွင့်ထား။ အထဲက အလင်း။",
    p: "The front entrance from outside: an iron security grille latched shut, the wooden door behind "
      + "it standing wide open on a warmly lit hall, rain falling between camera and gate.",
    u: ["အိမ်ရှေ့ရောက်တော့ ကျွန်တော့်သော့နဲ့ ခြံတံခါးကို ဖွင့်လိုက်တယ်။",
        "အိမ်တံခါးက အထပ်နှစ်ထပ်။ အပြင်မှာ သံပန်းတံခါး။ အတွင်းမှာ သစ်သားတံခါး။",
        "သစ်သားတံခါးက ဖွင့်ထားတယ်။ သံပန်းကတော့ အထဲကနေ ချိတ်ပိတ်ထားတယ်။"] },

  { t: "The Meal Is Still There", l: "ဧည့်ခန်း",
    g: "သံပန်းကြားကနေ ဧည့်ခန်းကို။ ထမင်းပွဲ ရှိနေတယ်။ လူတော့ မရှိ။",
    p: "Looking through the bars of the security grille into the lit living room: the covered meal "
      + "still on the table, chairs empty, no one anywhere in the frame.",
    u: ["ဧည့်ခန်းထဲကို လှမ်းမြင်ရတယ်။",
        "ကျွန်တော့်အတွက် ပြင်ထားတဲ့ ထမင်းပွဲက စားပွဲပေါ်မှာ ရှိနေတုန်း။",
        "သူတော့ မရှိဘူး။"] },

  { t: "Three Knocks", l: "အိမ်ရှေ့",
    g: "သော့နဲ့ သံပန်းကို ခေါက်နေတယ်။ အနီးကပ်။",
    p: "A hand striking the iron grille with a door key, close on the metal, water shaken loose by the "
      + "impact.",
    u: ["ကျွန်တော် သံပန်းကို သော့နဲ့ သုံးချက် ခေါက်လိုက်တယ်။",
        "ဒေါက်။ ဒေါက်။ ဒေါက်။"],
    c: [[1, "knock"]] },

  { t: "Footsteps From the Back", l: "ဧည့်ခန်း",
    g: "အိမ်ထဲ စင်္ကြံမှောင်။ အဝေးဆုံးမှာ အလင်းတစ်စက်။",
    p: "A dark interior corridor seen through the grille, a far doorway faintly lit at the end of it, "
      + "nothing yet visible in between.",
    u: ["အိမ်နောက်ဘက်က ခြေသံ ထွက်လာတယ်။ တဖတ်။ တဖတ်။"] },

  { t: "He Comes Out of the Dark", l: "ဧည့်ခန်း", w: ["သူ"],
    g: "အခန်းတံခါးရှေ့ အမှောင်ထဲက လူတစ်ယောက် ပေါ်လာတယ်။ နောက်ကမီးက ထိုးလင်းလို့ မျက်နှာ မမြင်ရ။",
    p: "A man-shaped silhouette emerging from the black of a bedroom doorway, backlit by the hall lamp "
      + "so that he is only an outline, water still running from his sleeves.",
    u: ["ကျွန်တော့်အခန်းရှေ့က အမှောင်ထဲမှာ ကျွန်တော်နဲ့တူတဲ့လူ ပေါ်လာတယ်။",
        "ဓာတ်ပုံထဲမှာ မြင်ရတာထက် အပြင်မှာ မြင်ရတာက ပိုဆိုးတယ်။",
        "တခြားလူတစ်ယောက်နဲ့ တူနေတာ မဟုတ်ဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "A Face Where No Mirror Is", l: "ဧည့်ခန်း", w: ["သူ"],
    g: "မျက်နှာတစ်ဝက် အလင်း၊ တစ်ဝက် အမှောင်။ မျက်လုံးက မခတ်ဘူး။ ရှင်းရှင်း မမြင်ရ။",
    p: "A face half-caught in raking light and half in total shadow, the visible eye open and unblinking, "
      + "the features deliberately soft and unresolved.",
    u: ["မနက်တိုင်း မှန်ထဲမှာ မြင်နေကျ မျက်နှာကို မှန်မရှိတဲ့နေရာမှာ မြင်နေရတာ။",
        "သူ ကျွန်တော့်ကို ကြည့်နေတယ်။ မျက်လုံးတစ်ချက်မှ မခတ်ဘူး။",
        "ကျွန်တော်ကတော့ သူ့မျက်လုံးကို ကြာကြာမကြည့်ရဲဘူး။"] },

  { t: "The Water Has Not Run Out", l: "ဧည့်ခန်း",
    g: "လက်ဖျားကနေ ရေစက်တွေ ကြွေပြားပေါ် ကျနေတယ်။ ရေအိုင်လေး ဖြစ်နေပြီ။",
    p: "Water dripping steadily from fingertips onto a tiled floor, a small pool already spread beneath "
      + "the hand, the sleeve above it dark with rain.",
    u: ["သူ့ရဲ့ အဖြူရောင်အင်္ကျီမှာ ရေတွေစိုနေတယ်။ လက်ဖျားကနေ ရေစက်ကျနေတယ်။",
        "ဒါပေမယ့် ဝင်လာတာ မိနစ်နှစ်ဆယ်ကျော်ပြီ။",
        "ရေတွေက မကုန်သေးဘူး။"],
    c: [[2, "stinger"]] },

  { t: "Who Are You", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သံပန်းတစ်ဖက်စီမှာ လူနှစ်ယောက်။ တစ်ယောက်က ခေါင်းစောင်းနေတယ်။",
    p: "Two figures either side of the iron grille, the inner one tilting his head a few degrees as "
      + "though considering the question, his face lost behind the bars and shadow.",
    u: ["“မင်း ဘယ်သူလဲ”",
        "အသံမတုန်အောင် ကြိုးစားပြီး မေးလိုက်တယ်။",
        "သူ ခေါင်းနည်းနည်း စောင်းတယ်။ ကျွန်တော် စကားကို ပြန်စဉ်းစားနေသလိုပဲ။",
        "ပြီးတော့ ကျွန်တော် မေးတဲ့အတိုင်း ပြန်မေးတယ်။ “မင်း ဘယ်သူလဲ”"],
    c: [[3, "bigstinger"]] },

  { t: "He Kicks the Gate", l: "အိမ်ရှေ့",
    g: "ဖိနပ်နဲ့ သံပန်းအောက်ခြေကို ကန်လိုက်တယ်။ သံအသံ ဟိန်းသွားတယ်။",
    p: "A shoe striking the base of an iron grille hard, the whole gate ringing, water flung outward "
      + "from the bars.",
    u: ["ကျွန်တော် သံပန်းကို ထပ်ခေါက်လိုက်တယ်။ “ဒီကိုလာ”",
        "သူ မရွေ့ဘူး။",
        "ဒါနဲ့ ဖိနပ်နဲ့ သံပန်းအောက်ခြေကို ဆောင့်ကန်လိုက်တယ်။",
        "အသံက တစ်အိမ်လုံး ဟိန်းသွားတယ်။"],
    c: [[3, "knock"]] },

  { t: "One Blink", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သံပန်းတစ်ဖက်မှာ သူ့မျက်နှာက အလွန်နီးနေပြီ။ တစ်ထွာလောက်ပဲ။ ဝါးနေတယ်။",
    p: "A face suddenly pressed close on the far side of the grille, only a hand's span from camera, "
      + "far too close to focus on, the features smeared by proximity and shadow.",
    u: ["ကျွန်တော် မျက်တောင်ခတ်မိတယ်။",
        "ပြန်ကြည့်တဲ့အချိန် သူက သံပန်းတစ်ဖက်မှာ ရောက်နေပြီ။",
        "ကျွန်တော့်မျက်နှာနဲ့ တစ်ထွာလောက်ပဲ ဝေးတယ်။",
        "ကျွန်တော် နောက်ကို ယိုင်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Smell of a Closed Wardrobe", l: null,
    g: "အဟောင်းသစ်သားဘီရိုအတွင်း။ အဝတ်တွေ စိုပြီး မှိုတက်နေတယ်။",
    p: "The inside of an old wooden wardrobe, clothes hanging damp and close together, a faint bloom of "
      + "mildew on the back panel, no light reaching the bottom.",
    u: ["သူ့ကိုယ်က အနံ့ထွက်တယ်။",
        "မိုးရေစိုတဲ့အဝတ်နံ့ မဟုတ်ဘူး။",
        "အချိန်ကြာကြာ ပိတ်ထားတဲ့ ဘီရိုထဲက အဝတ်စိုနံ့။"] },

  { t: "He Breathes Me In", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သံပန်းကြားထဲ မျက်နှာကို တိုးထည့်ထားတယ်။ ပါးစပ်က လှုပ်နေတယ်။",
    p: "A face pushed as far into the gap between two grille bars as the metal allows, mouth slightly "
      + "open and moving, the rest of him lost behind the gate.",
    u: ["သူက သံပန်းကြားထဲ မျက်နှာကို နည်းနည်းတိုးပြီး ကျွန်တော့်ကို အနံ့ခံသလို အသက်ရှူလိုက်တယ်။",
        "ပြီးတော့ ပါးစပ်လှုပ်တယ်။",
        "“သား ရောက်ပြီ။ မကြောက်နဲ့”"],
    c: [[2, "bigstinger"]] },

  { t: "Listening for the Back Door", l: "အိမ်ရှေ့", w: ["ကိုခန့်"],
    g: "ကိုခန့် ခေါင်းကို နည်းနည်းစောင်းပြီး အိမ်နောက်ဘက် နားစွင့်နေတယ်။",
    p: "The narrator at the gate with his head turned very slightly aside, listening past the house "
      + "toward the back, eyes still locked forward.",
    u: ["ကျွန်တော် အိမ်နောက်ဘက်ကို နားစွင့်ထားတယ်။",
        "ဘာသံမှ မကြားရသေးဘူး။",
        "အမေ ထွက်နေပြီလား။ ရေချိုးခန်းထဲမှာပဲ ရှိသေးလား။"] },

  { t: "Waiting for a New Sentence", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သူက ကိုခန့်ရဲ့ နှုတ်ခမ်းကိုပဲ စိုက်ကြည့်နေတယ်။",
    p: "A shadowed face at the grille with its gaze fixed downward and slightly off-centre — not at the "
      + "eyes opposite but at the mouth — patient and attentive.",
    u: ["ကျွန်တော့်ရှေ့က အရာကတော့ ကျွန်တော့်နှုတ်ခမ်းကို စိုက်ကြည့်နေတယ်။",
        "စကားအသစ်တစ်ခွန်း စောင့်နေသလို။",
        "ကျွန်တော် ပါးစပ်ပိတ်ထားလိုက်တယ်။"] },

  { t: "The Bolt at the Back", l: "မီးဖိုချောင်",
    g: "မီးဖိုနောက်တံခါးက သော့ချောင်း ရွေ့သွားတယ်။ အနီးကပ်။",
    p: "A sliding metal bolt on a kitchen back door caught mid-movement, the metal bright where it has "
      + "just scraped free, darkness beyond the door.",
    u: ["အဲဒီအချိန် အိမ်နောက်ဘက်က သတ္တုပစ္စည်းတစ်ခု ကျသံ ကြားရတယ်။",
        "ဂလောက်။ နောက်တံခါး သော့ချောင်း။",
        "သူ့မျက်လုံးတွေ ကျွန်တော့်မျက်နှာကနေ နောက်ဘက်ကို ရွေ့သွားတယ်။"],
    c: [[1, "stinger"]] },

  { t: "I Am Here", l: "အိမ်ရှေ့", w: ["ကိုခန့်"],
    g: "ကိုခန့် သံပန်းကို လက်နှစ်ဖက်နဲ့ လှုပ်ရမ်းနေတယ်။ အော်နေတယ်။",
    p: "The narrator shaking the iron grille with both hands and shouting, rain sheeting off the gate, "
      + "his face contorted with the effort of drawing attention.",
    u: ["“ဟေ့!” ကျွန်တော် သံပန်းကို လက်နှစ်ဖက်နဲ့ လှုပ်ရမ်းလိုက်တယ်။",
        "“ငါ ဒီမှာ!” သူ ကျွန်တော့်ကို ပြန်ကြည့်တယ်။",
        "ဖြည်းဖြည်း ပြုံးလာတယ်။"] },

  { t: "I Know", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သူ့ပါးစပ်တစ်ဝက်ကို အနီးကပ်။ ပြုံးနေတယ်။ မျက်လုံး မမြင်ရ။",
    p: "A tight crop on the lower half of a face behind bars, the mouth curved into a small deliberate "
      + "smile, everything above the upper lip cut off by frame and shadow.",
    u: ["ပြီးတော့ ကျွန်တော့်အသံနဲ့ ပြောတယ်။ “သိတယ်”",
        "ဒါက ကျွန်တော် သူ့ရှေ့မှာ မပြောဖူးသေးတဲ့စကား။"],
    c: [[0, "bigstinger"]] },

  { t: "Son! Come Here!", l: "အိမ်ရှေ့",
    g: "အိမ်နောက်ဘက် မှောင်နေတဲ့လမ်းကြား။ ဘယ်သူမှ မမြင်ရ။ အသံပဲ။",
    p: "The dark side alley running toward the back of the house, empty, rain falling through a single "
      + "distant security light. No figure anywhere.",
    u: ["အိမ်နောက်ဘက်က အမေ့အသံ ထွက်လာတယ်။ “သားရေ!”",
        "ကျွန်တော် တစ်ကိုယ်လုံး တောင့်သွားတယ်။",
        "“သားရေ၊ လာပါဦး!”"],
    c: [[0, "bigstinger"]] },

  { t: "Then Who Is Behind Her", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သူက ရှေ့မှာ ရပ်နေတုန်းပဲ။ ကိုခန့်က နောက်ဘက် လှည့်ကြည့်တော့မလို။",
    p: "The figure still motionless at the grille in the foreground while the narrator's body begins to "
      + "turn away toward the alley, caught mid-decision.",
    u: ["သူ ကျွန်တော့်ရှေ့မှာ ရပ်နေတုန်းပဲ။",
        "ဒါဆို အမေ့နောက်မှာ နောက်တစ်ယောက် ရှိနေတာလား။",
        "“အမေ လဲသွားလို့… သားရေ!”",
        "ကျွန်တော် နောက်ကို လှည့်ပြေးတော့မလို့ လုပ်တယ်။"] },

  { t: "The Driver Calls", l: null,
    g: "ဖုန်းမှာ ဦးလေးဆီက ခေါ်ဆိုမှု ဝင်နေတယ်။ မိုးရေထဲ။",
    p: "A phone ringing in a wet hand, an incoming call from a saved contact, rain striking the screen "
      + "and beading on the glass.",
    u: ["အဲဒီအချိန် ဖုန်းတုန်လာတယ်။ ယာဉ်မောင်းဦးလေး။",
        "ကိုင်လိုက်တော့ သူက အသက်ရှူမြန်မြန်နဲ့ ပြောတယ်။",
        "“အမေ ရပြီ။ ကားဆီ ရောက်ပြီ။ ပြန်ထွက်ခဲ့တော့”"] },

  { t: "She Is Already Outside", l: "အိမ်ရှေ့",
    g: "ဖုန်းကို နားကပ်ထားရင်း အိမ်နောက်ဘက်ကို လှည့်ကြည့်နေတယ်။ မျက်နှာက ရှုပ်ထွေးနေတယ်။",
    p: "The narrator holding the phone to one ear while staring back toward the alley, his expression "
      + "breaking as two impossible facts arrive at once.",
    u: ["ကျွန်တော် အိမ်နောက်ဘက်ကို ပြန်ကြည့်မိတယ်။",
        "“သားရေ… အမေ မထနိုင်ဘူး…”",
        "အသံက အထဲကနေ ထွက်နေတုန်း။",
        "ဖုန်းထဲမှာတော့ အမေက ငိုနေရင်း ပြောတယ်။ “မဝင်နဲ့ သား။ အမေ အပြင်ရောက်ပြီ။ အမေ ဒီမှာ”"],
    c: [[3, "bigstinger"]] },

  { t: "It Is Coming From His Mouth", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သူ့ပါးစပ် ဟနေတယ်။ အနီးကပ်။ အထဲက မှောင်နေတယ်။",
    p: "A mouth open wide behind the grille bars, held open too long and too still for speech, the "
      + "throat beyond it entirely dark. Eyes out of frame.",
    u: ["ကျွန်တော် သံပန်းကို ပြန်ကြည့်လိုက်တယ်။",
        "သူ့ပါးစပ် ပွင့်နေတယ်။",
        "အမေ့အော်သံက သူ့ပါးစပ်ထဲက ထွက်နေတာ။",
        "ဒါပေမယ့် နားထဲမှာတော့ အိမ်နောက်ဘက်ကလို ကြားနေရတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Key in My Hand", l: "အိမ်ရှေ့",
    g: "သံပန်းသော့ပေါက်နားမှာ လက်တစ်ဖက်။ သော့ကို ကိုင်ထားတယ်။",
    p: "A hand holding a door key raised almost to the padlock of the grille, fingers already "
      + "positioned, the movement clearly not consciously begun.",
    u: ["သူ ကျွန်တော့်လက်ကို ငုံ့ကြည့်တယ်။",
        "ကျွန်တော့်လက်က သံပန်းသော့ပေါက်နားကို ရောက်နေပြီ။",
        "အိတ်ထဲက သော့ကို ဘယ်အချိန် ထုတ်မိလိုက်လဲတောင် မသိဘူး။"],
    c: [[1, "heartbeat"]] },

  { t: "The Screaming Stops", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "သူ့ပါးစပ် ပိတ်သွားတယ်။ ပြုံးတာ ပျောက်သွားတယ်။",
    p: "The same mouth now closed, the smile entirely gone, the face behind the bars gone flat and "
      + "unreadable.",
    u: ["ကျွန်တော် လက်ကို ပြန်ရုပ်လိုက်တော့မှ အမေ့အော်သံ ရပ်သွားတယ်။",
        "သူ ပါးစပ်ပိတ်လိုက်တယ်။ ပြုံးတာလည်း ရပ်သွားတယ်။"] },

  { t: "Something I Have Never Done", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "ကိုခန့်မျက်နှာပေါ်မှာ ကိုခန့် ဘယ်တုန်းကမှ မလုပ်ဖူးတဲ့ အမူအရာ။ စိတ်ဆိုးတာလည်း မဟုတ်။",
    p: "A familiar face wearing an expression that does not belong on it — not anger, not "
      + "disappointment, but the blank flat look of an appetite interrupted. Kept dim and partly turned.",
    u: ["ပထမဆုံးအကြိမ် ကျွန်တော့်မျက်နှာပေါ်မှာ ကျွန်တော် တစ်ခါမှ မလုပ်ဖူးတဲ့ အမူအရာတစ်ခု မြင်လိုက်ရတယ်။",
        "စိတ်ဆိုးနေတာလည်း မဟုတ်ဘူး။ စိတ်ပျက်နေတာလည်း မဟုတ်ဘူး။",
        "စားခါနီး အစာ လွတ်သွားတဲ့အရာတစ်ခုလို။"],
    c: [[2, "bigstinger"]] },

  { t: "The Hand Through the Bars", l: "အိမ်ရှေ့",
    g: "သံပန်းကြားကနေ လက်တစ်ဖက် အပြင်ကို ဆန့်ထုတ်လာတယ်။ လက်ဖျားက ရေစက်ကျနေတယ်။",
    p: "An arm pushed out through the gap in the security grille into the rain, fingers spread and "
      + "reaching, water running off them, the body behind it unlit.",
    u: ["ကျွန်တော် နောက်ဆုတ်လိုက်တယ်။",
        "သူ သံပန်းကြားကနေ လက်တစ်ဖက် ထုတ်လာတယ်။",
        "“သား…” အမေ့အသံ။",
        "“အမေ့ကို ဒီထဲမှာ တစ်ယောက်တည်း ထားခဲ့မလို့လား”",
        "ကျွန်တော် လှည့်ပြေးခဲ့တယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "She Looks at My Shoes", l: "တက္ကစီ", w: ["အမေ", "ကိုခန့်"],
    g: "ကားနောက်ခန်းမှာ အမေက သားရဲ့ ဖိနပ်ကို ငုံ့ကြည့်နေတယ်။",
    p: "In the back of the taxi, the mother gripping her son's arm with both hands but looking down — "
      + "not at his face, at his feet — checking.",
    u: ["ကားထဲရောက်တော့ အမေက ကျွန်တော့်လက်မောင်းကို ဆွဲဖက်ထားတယ်။",
        "ကျွန်တော့်မျက်နှာကို ထပ်ခါထပ်ခါ ကြည့်တယ်။",
        "ပြီးတော့ ခေါင်းငုံ့ပြီး ဖိနပ်ကို ကြည့်တယ်။",
        "အဲဒီအကြည့်ကို ကျွန်တော် ဘယ်တော့မှ မမေ့ဘူး။"],
    c: [[2, "stinger"]] },

  { t: "The Latch Was Still On", l: "အိမ်ရှေ့",
    g: "ရဲတစ်ယောက် သံပန်းကြားထဲ လက်ထည့်ပြီး ချိတ်ကို ဖြုတ်နေတယ်။",
    p: "A police officer reaching an arm through the bars of the grille from outside to lift the latch "
      + "on the inside, torchlight raking the hall beyond.",
    u: ["ဦးလေးက ကားမောင်းထွက်တယ်။",
        "ကျွန်တော်တို့ ရဲနဲ့ လမ်းထောင့်မှာ ဆုံတယ်။",
        "အမေ့ကို ကားထဲမှာပဲ ထားခဲ့ပြီး ကျွန်တော် ရဲတွေနဲ့ အိမ်ကို ပြန်လိုက်သွားတယ်။",
        "အိမ်တံခါး သံပန်းက အထဲကနေ ချိတ်ထားတုန်းပဲ။",
        "ရဲတစ်ယောက်က ကြားထဲကနေ လက်ထည့်ပြီး ချိတ်ဖြုတ်တယ်။"] },

  { t: "Nobody", l: "မီးဖိုချောင်",
    g: "မီးဖိုနောက်တံခါး ပွင့်နေတယ်။ အပြင်မှာ မိုးနဲ့ အမှောင်။",
    p: "The kitchen back door standing open onto black rain, torch beams crossing the room behind it, "
      + "the bolt hanging free.",
    u: ["တစ်အိမ်လုံး ရှာကြတယ်။",
        "ရေချိုးခန်း။ မီးဖို။ အိပ်ရာအောက်။ အဝတ်ဘီရိုထဲ။",
        "ဘယ်သူမှ မရှိဘူး။",
        "နောက်တံခါးကတော့ အမေထွက်လာတုန်းကအတိုင်း ပွင့်နေတယ်။",
        "သူတို့က အဲဒီကနေ ထွက်ပြေးသွားတာ ဖြစ်မယ်လို့ ပြောတယ်။ ကျွန်တော် မငြင်းခဲ့ဘူး။"] },

  { t: "Fingermarks in the Rice", l: "ဧည့်ခန်း",
    g: "ထမင်းပွဲအဖုံး ဖွင့်ထား။ ထမင်းကို မစားထားဘူး။ မျက်နှာပြင်ပေါ် လက်ချောင်းငါးချောင်း ဖိရာတွေ အပြည့်။",
    p: "An uncovered plate of white rice, entirely uneaten, its surface pressed all over with sets of "
      + "five fingertip impressions at many different angles — dozens of them, overlapping, as though "
      + "something had touched the food repeatedly without knowing what to do with it.",
    u: ["ဧည့်ခန်းစားပွဲပေါ်မှာ ထမင်းပွဲ ရှိနေတယ်။",
        "အဖုံးကို ဖွင့်ထားတယ်။ ထမင်းကို မစားထားဘူး။",
        "ထမင်းမျက်နှာပြင်ပေါ်မှာ လက်ချောင်းငါးချောင်း ဖိထားတဲ့အရာတွေ ရှိတယ်။",
        "တစ်နေရာတည်း မဟုတ်ဘူး။ ပန်းကန်အပြည့်။",
        "စားရမယ့်အရာကို ဘာလုပ်ရမှန်းမသိလို့ အရင် ထိကြည့်ထားသလိုမျိုး။"],
    c: [[2, "bigstinger"]] },

  { t: "11:17 PM", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "CCTV ပုံ။ အနက်အဖြူ။ ခြံတံခါးရှေ့မှာ လူတစ်ယောက် ရောက်လာတယ်။",
    p: "A grainy monochrome CCTV frame of the front gate at night, a lone figure standing at it, the "
      + "image compressed and smeared by low light and rain.",
    u: ["အဲဒီညက ကျွန်တော်တို့ အိမ်ပြန်မအိပ်ခဲ့ဘူး။ အမေ့ညီမအိမ်ကို သွားနေကြတယ်။",
        "နောက်နေ့မနက်မှာ အိမ်ရှေ့ CCTV ကို ဖွင့်ကြည့်တယ်။",
        "ညဆယ့်တစ်နာရီ ဆယ့်ခုနစ်မိနစ်။",
        "ကျွန်တော့်ပုံစံနဲ့လူက ခြံတံခါးရှေ့ ရောက်လာတယ်။"] },

  { t: "He Does Not Look at the Camera", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "CCTV ပုံ။ သူက ကင်မရာကို မကြည့်ဘဲ တံခါးကိုပဲ ကြည့်နေတယ်။",
    p: "CCTV frame: the figure at the door with his head angled deliberately away from the lens, facing "
      + "only the door, one arm raised to knock.",
    u: ["ကင်မရာကို မကြည့်ဘူး။",
        "အိမ်တံခါးကိုပဲ ကြည့်နေတယ်။",
        "ပြီးတော့ ခေါက်တယ်။"],
    c: [[2, "knock"]] },

  { t: "Son, Come In", l: "အိမ်ရှေ့", w: ["အမေ", "သူ"],
    g: "CCTV ပုံ။ အမေ သံပန်းဖွင့်တယ်။ သူ မဝင်သေးဘူး။ အမေ့နှုတ်ခမ်း လှုပ်တယ်။",
    p: "CCTV frame: the mother has opened the grille and stands in the doorway, mouth caught mid-word; "
      + "the figure waits outside the threshold without stepping over it.",
    u: ["အမေ ထွက်လာတယ်။ သံပန်းဖွင့်တယ်။",
        "သူ မဝင်သေးဘူး။",
        "အမေ့နှုတ်ခမ်း လှုပ်သွားတယ်။",
        "အသံမပါပေမယ့် ဘာပြောလိုက်လဲ ကျွန်တော် သိတယ်။ သား၊ ဝင်လေ။",
        "အဲဒီတော့မှ သူ တံခါးခုံကို ကျော်လိုက်တယ်။"],
    c: [[4, "bigstinger"]] },

  { t: "The Reaching Hand", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "CCTV ပုံ။ သူက အိမ်ထဲကနေ လက်ကို အပြင်ဆန့်ထုတ်ထားတယ်။ ကြာကြာ ရပ်နေတယ်။",
    p: "CCTV frame: the figure standing just inside the doorway with one arm extended straight out "
      + "through the open gate into the rain, held there, motionless.",
    u: ["ကျွန်တော် ဗီဒီယိုကို ရှေ့ဆက်ကြည့်တယ်။",
        "ကျွန်တော် တက္ကစီနဲ့ ရောက်လာတာ။ သံပန်းရှေ့မှာ ရပ်တာ။ နောက်ဆုံး လှည့်ပြေးထွက်သွားတာ။",
        "အဲဒီနောက်မှာ သူက အိမ်ထဲကနေ လက်ကို ဆန့်ထုတ်ထားတုန်းပဲ။",
        "အချိန်အတော်ကြာအောင် အဲဒီလို ရပ်နေတယ်။",
        "ကျွန်တော် ပျောက်သွားတဲ့ဘက်ကို ကြည့်နေတာ။"] },

  { t: "He Cannot Cross", l: "အိမ်ရှေ့", w: ["သူ"],
    g: "CCTV ပုံ။ တံခါးခုံမှာ ခြေတစ်ဖက် မလိုက်တယ်။ အပြင်မချဘဲ အထဲကို ပြန်ချတယ်။",
    p: "CCTV frame: a foot raised at the doorstep, held above the threshold line, angled outward but "
      + "not descending — caught at the exact moment of refusal.",
    u: ["နောက်တော့ လက်ကို ပြန်သိမ်းတယ်။",
        "အိမ်တံခါးခုံကို ငုံ့ကြည့်တယ်။",
        "ခြေတစ်ဖက် မလိုက်တယ်။",
        "အပြင်ဘက်ကို ချတော့မလို လုပ်ပြီးမှ အိမ်ထဲကိုပဲ ပြန်ချလိုက်တယ်။",
        "ဗီဒီယိုထဲမှာ အဲဒီလှုပ်ရှားမှုကို သုံးခါ လုပ်တယ်။"],
    c: [[4, "heartbeat"]] },

  { t: "Nobody Ever Came Out", l: "အိမ်ရှေ့",
    g: "CCTV ပုံ။ တံခါးဝ ဗလာ။ အထဲက အမှောင်။ ဘယ်သူမှ မထွက်လာဘူး။",
    p: "CCTV frame: the doorway now empty, the interior beyond it a solid black rectangle, rain "
      + "streaking the lens, timestamp advancing over nothing.",
    u: ["နောက်ဆုံး သူ နောက်ဆုတ်သွားတယ်။",
        "အိမ်ထဲက အမှောင်ထဲ ပျောက်သွားတယ်။",
        "ရဲတွေ ဝင်လာတဲ့အချိန်အထိ အိမ်ရှေ့ကနေ ဘယ်သူမှ ထွက်မလာဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Three Days Later", l: "အိမ်ရှေ့", w: ["အမေ"],
    g: "နေ့ခင်းအလင်း။ အိမ်ရှေ့မှာ လူငါးယောက်။ အမေက ခြံဝမှာပဲ ရပ်နေတယ်။",
    p: "The house in flat ordinary daylight with several relatives carrying boxes out, and the mother "
      + "standing apart at the gate, refusing to go in.",
    u: ["သုံးရက်ကြာတော့ ကျွန်တော်တို့ ပစ္စည်းတွေ ပြန်ယူဖို့ သွားကြတယ်။",
        "နေ့ခင်း။ လူငါးယောက်နဲ့။",
        "အမေက အိမ်ထဲ မဝင်ဘူး။ ခြံဝမှာပဲ စောင့်နေတယ်။"] },

  { t: "Bring Your Father's Photograph", l: "ဧည့်ခန်း",
    g: "နံရံပေါ်က အဖေ့ဓာတ်ပုံဘောင်ကို ဖြုတ်နေတယ်။ နောက်မှာ အမည်းစက် ကျန်တယ်။",
    p: "Hands lifting a framed photograph of an older man off a wall in daylight, leaving a clean "
      + "unfaded rectangle on the paint behind it.",
    u: ["ကျွန်တော် အဝတ်အစားတွေ ထည့်နေတုန်း အမေ လှမ်းခေါ်တယ်။",
        "“သား၊ ဧည့်ခန်းက အဖေ့ဓာတ်ပုံလည်း ယူခဲ့ဦး”",
        "ဧည့်ခန်းကို သွားပြီး ဓာတ်ပုံကို ဖြုတ်လိုက်တယ်။"] },

  { t: "Her Voice From the Kitchen", l: "မီးဖိုချောင်",
    g: "မီးဖိုချောင်တံခါးဝ။ နေ့ခင်းအလင်းထဲမှာတောင် အထဲက မှောင်နေတယ်။ ဘယ်သူမှ မရှိ။",
    p: "An empty kitchen doorway in flat daylight, the room beyond it noticeably darker than the light "
      + "outside would explain, nothing and no one in it.",
    u: ["အဲဒီအချိန် မီးဖိုနောက်ဘက်က အမေ့အသံ ကြားရတယ်။",
        "“သား၊ ဒီမှာ ကျန်သေးတယ်”",
        "ကျွန်တော် မလှုပ်တော့ဘူး။",
        "အိမ်ရှေ့မှာ အမေက အဒေါ်နဲ့ စကားပြောနေတာ ကြားနေရတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Louder This Time", l: "မီးဖိုချောင်",
    g: "မီးဖိုချောင်ထဲ ပိုမှောင်လာတယ်။ တံခါးဝကို အနီးကပ်။",
    p: "The same kitchen doorway a step closer and appreciably darker, the daylight seeming not to "
      + "reach past the frame at all.",
    u: ["မီးဖိုဘက်က အသံ ထပ်ထွက်လာတယ်။",
        "ဒီတစ်ခါ ပိုတိုးတယ်။",
        "“အမေ့ကို တစ်ယောက်တည်း ထားခဲ့မလို့လား”"],
    c: [[2, "bigstinger"]] },

  { t: "They Locked the House", l: "အိမ်ရှေ့",
    g: "အိမ်ရှေ့သံပန်းမှာ သော့ကြီးတစ်လုံး ခတ်ထားတယ်။ နေ့ခင်း။",
    p: "A heavy padlock closed on the front security grille in daylight, the house behind it shuttered "
      + "and still, an empty street.",
    u: ["ကျွန်တော် ဓာတ်ပုံကို ယူပြီး အပြင်ထွက်ခဲ့တယ်။",
        "ဘာပစ္စည်းမှ ထပ်မယူတော့ဘူး။",
        "အဲဒီနေ့ကစပြီး အိမ်ကို သော့ခတ်ထားခဲ့တယ်။"] },

  { t: "She Watches Me Take Them Off", l: null, w: ["အမေ"],
    g: "အဒေါ့်အိမ် တံခါးဝ။ အမေက သားဖိနပ်ချွတ်တာကို စောင့်ကြည့်နေတယ်။",
    p: "A different, smaller doorway: a young man bending to remove his shoes, and behind him his mother "
      + "watching the act closely, checking rather than greeting.",
    u: ["အခုဆို အဲဒီညကနေ နှစ်လရှိပြီ။",
        "ကျွန်တော်တို့ အဒေါ့်အိမ်မှာပဲ နေနေတုန်း။",
        "အမေက ကျွန်တော် ပြန်လာတိုင်း ဖိနပ်ချွတ်တာကို ကြည့်တယ်။"] },

  { t: "Now He Always Answers", l: null,
    g: "ရေချိုးခန်းတံခါးအပြင်။ အမေ ရပ်နေတယ်။ အထဲက ရေသံ။",
    p: "A woman standing outside a closed bathroom door in a modest home, one hand raised as if about "
      + "to knock and not yet doing so, the sound of running water implied.",
    u: ["တစ်ခါတလေ ကျွန်တော် မျက်နှာသစ်နေတုန်း ရေချိုးခန်းအပြင်ကနေ လာခေါ်တယ်။",
        "“သား?” “ဗျာ” ကျွန်တော် ပြန်ဖြေလိုက်မှ ထွက်သွားတယ်။",
        "အရင်ကတော့ အမေ့ကို စိတ်ချမ်းသာအောင် အမြဲပြန်ထူးပေးတယ်။",
        "အခုတော့ အဲဒီလို မလုပ်တော့ဘူး။",
        "မနေ့ညက အဖြစ်ကြောင့်။"] },

  { t: "Did You Go Back There Today", l: null, w: ["အမေ", "ကိုခန့်"],
    g: "အဒေါ့်အိမ် ဧည့်ခန်း။ အမေနဲ့ အဒေါ် ထိုင်နေတယ်။ ကိုခန့် ဝင်လာတယ်။",
    p: "A small tidy living room in another house, two older women seated together, a young man just "
      + "coming through the door, ordinary evening light.",
    u: ["ကျွန်တော် အလုပ်က ပြန်ရောက်ချိန် အမေက အဒေါ်နဲ့ ဧည့်ခန်းမှာ ထိုင်နေတယ်။",
        "ကျွန်တော့်ကို မြင်တော့ မေးတယ်။",
        "“ဒီနေ့ အိမ်အဟောင်းဘက် သွားသေးလား”",
        "“မသွားဘူး။ ဘာလို့လဲ”"] },

  { t: "Daw Tin Saw You", l: "မီးဖိုချောင်",
    g: "လူမနေတဲ့အိမ်ရဲ့ မီးဖိုပြတင်းပေါက်ကို ဘေးအိမ်ခြံထဲကနေ။ အထဲက မှောင်။",
    p: "The barred kitchen window of the shuttered empty house seen across a neighbour's yard in "
      + "late-afternoon light, the interior behind the glass completely black.",
    u: ["“ဘေးအိမ်က ဒေါ်တင် ဖုန်းဆက်လို့။ မီးဖိုပြတင်းပေါက်မှာ သားကို တွေ့တယ်တဲ့”",
        "အမေ့ဘေးမှာ ကျွန်တော် ဝင်ထိုင်လိုက်တယ်။",
        "“ဒေါ်တင်ကို ဘာပြောလိုက်လဲ”",
        "“အိမ်ဘက် မသွားဖို့ ပြောလိုက်တယ်”"],
    c: [[0, "stinger"]] },

  { t: "There Is One More Thing", l: null, w: ["အမေ"],
    g: "အမေက လက်ထဲက ဖုန်းကို လှည့်ကြည့်နေတယ်။ မျက်နှာက တင်းနေတယ်။",
    p: "The mother turning a phone over and over in her hands without looking at it, her jaw set, "
      + "unable to begin.",
    u: ["အမေက လက်ထဲကဖုန်းကို လှည့်ကြည့်တယ်။",
        "“ဒါပေမယ့် ဒေါ်တင် ပြောတာတစ်ခု ရှိသေးတယ်”",
        "ကျွန်တော် ဘာလဲလို့ မမေးချင်ဘူး။",
        "အမေက ပြောတယ်။ “သားက ပြတင်းပေါက်ကနေ လှမ်းပြောသတဲ့”"] },

  { t: "Tell My Mother I Am Home", l: null, w: ["အမေ"],
    g: "အမေ့မျက်လုံးမှာ မျက်ရည်။ ကိုခန့်က အမေ့လက်ကို ကိုင်ထားတယ်။",
    p: "Two hands clasped together on a sofa cushion, one older and one younger, and above them the "
      + "edge of a face with tears standing in the eyes.",
    u: ["အမေ့လက်ကို ကျွန်တော် ကိုင်လိုက်တယ်။ “ဘာပြောတာလဲ”",
        "“ဒေါ်တင်… အမေ့ကို ပြောပေးပါဦးတဲ့”",
        "အမေ့မျက်လုံးမှာ မျက်ရည်ဝဲလာတယ်။",
        "“အိမ်ပြန်ရောက်နေပြီလို့”"],
    c: [[3, "bigstinger"]] },

  { t: "And How Do I Get to the New House", l: null,
    g: "အဒေါ့်အိမ် ဧည့်ခန်း ငြိမ်နေတယ်။ နှစ်ယောက်လုံး မပြောကြဘူး။",
    p: "A quiet living room holding two silent people at opposite ends of a sofa, the light gone blue "
      + "with evening, no one moving.",
    u: ["ကျွန်တော်တို့ နှစ်ယောက်လုံး တိတ်နေကြတယ်။",
        "ခဏကြာတော့ အမေက နောက်ဆုံးစကားကို ပြောတယ်။",
        "“ပြီးတော့ နောက်အိမ်ကို ဘယ်လိုလာရမလဲတဲ့”"],
    c: [[2, "bigstinger"]] },

  { t: "He Checks the Locks Twice", l: null, w: ["ကိုခန့်"],
    g: "ညဘက်။ တံခါးသော့ကို လက်နဲ့ ဆွဲစစ်နေတယ်။ အခန်းတံခါးကတော့ ဖွင့်ထား။",
    p: "A hand testing a door lock at night, and further down the hall a bedroom door deliberately left "
      + "standing open with a lamp on inside it.",
    u: ["အဲဒီည ကျွန်တော် တံခါးသော့တွေကို နှစ်ခါစစ်တယ်။",
        "အမေ့အခန်းတံခါးကိုတော့ မပိတ်ခိုင်းဘူး။",
        "ဘာဖြစ်ဖြစ် တစ်ယောက်ကိုတစ်ယောက် မြင်နေရအောင်။"] },

  { t: "She Is Asleep in Front of Me", l: null, w: ["အမေ"],
    g: "အမေ ဆိုဖာပေါ် အိပ်ပျော်နေတယ်။ ဘေးမှာ ကွန်ပျူတာအလင်း။ ညဘက်။",
    p: "An older woman asleep on a sofa under a thin blanket, lit only by the cold glow of a laptop "
      + "screen just out of frame, the rest of the room dark.",
    u: ["အခု ဒီအကြောင်းကို ကျွန်တော် ရေးနေတုန်း အမေက ကျွန်တော့်ရှေ့ ဆိုဖာပေါ်မှာ အိပ်ပျော်နေတယ်။",
        "သူ့အသက်ရှူသံကို ကျွန်တော် ကြားနေရတယ်။"] },

  { t: "Three Knocks Again", l: null,
    g: "အဒေါ့်အိမ် ရှေ့တံခါး။ အထဲကနေ။ ညဘက်။ ဘယ်သူမှ မမြင်ရ။",
    p: "A closed front door seen from inside a dark room at night, a chain and bolt both fastened, the "
      + "gap beneath it black and unbroken.",
    u: ["အိမ်ရှေ့တံခါးမှာတော့ ခုနက သုံးချက် ခေါက်သွားတယ်။",
        "ကျွန်တော် မထဘူး။ မေးလည်း မမေးဘူး။"],
    c: [[0, "knock"]] },

  { t: "I Have Already Taken Them Off", l: null, w: ["အမေ"],
    g: "အထဲက ဆိုဖာပေါ် အမေ အိပ်ပျော်နေတယ်။ အဲဒီနောက်ခံမှာ ရှေ့တံခါး ပိတ်ထား။ တံခါးအောက် အလင်းကြားထဲ ဖိနပ်မပါတဲ့ ခြေထောက်နှစ်ဖက်ရဲ့ အရိပ်။",
    p: "Final composition: the mother asleep on the sofa in the near foreground, and beyond her the "
      + "bolted front door — with two bare, shoeless shadows interrupting the strip of light beneath it. "
      + "No figure, no face. Hold on the gap under the door.",
    u: ["ခဏနေတော့ တံခါးအပြင်ကနေ အမေ့အသံ ထွက်လာတယ်။",
        "“သား… အမေပါ”",
        "ကျွန်တော် အိပ်နေတဲ့အမေ့ကို ကြည့်နေတယ်။",
        "အပြင်ကအသံက ထပ်ပြောတယ်။",
        "“ဖိနပ်ချွတ်ထားပြီးပြီ”"],
    c: [[1, "bigstinger"], [4, "finalstinger"]] },
];
