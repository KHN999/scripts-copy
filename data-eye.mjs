/**
 * ပြတင်းပေါက်အပြင်က မျက်လုံး — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * FOUR RULES.
 *
 * 1. SCALE IS THE STORY. From the moment they are inside, the two of them are
 *    four inches tall and EVERYTHING must sell it: wood grain reading as floor
 *    planks, a Bluetooth speaker the size of an office block, a human hand
 *    filling a room, dust motes the size of moths. Any shot where their scale is
 *    ambiguous is a wasted shot.
 *
 * 2. THE DOLL IS A DOLL. Porcelain face, painted pink smile, ball joints at the
 *    knees with visible seams, three moulded rings at each finger joint, pink
 *    varnish on the nails, maker's marks stamped into the sole of one foot. She
 *    is never flesh, never rotting, never gore. The horror is that a toy is
 *    articulated and patient, not that it is decayed.
 *
 * 3. THE PEOPLE OUTSIDE ARE KIND. Outside-Ko Zin and Outside-May must be warm,
 *    ordinary and completely unfrightening — they lift them out, lay them on
 *    cloth, cry. Making them sinister destroys the ending, which lands precisely
 *    because nobody has done anything wrong.
 *
 * 4. THE EYE IS AN EYE. Brown iris, visible capillaries in the white, ordinary
 *    human eyelashes — pressed to a window that is four inches across. It is
 *    frightening because of its size, not because anything is wrong with it.
 */

export const CAST = [
  { name: "မေ", en: "May — the narrator, inside",
    prompt: "May, a Burmese woman aged twenty-eight, average height and slim practical build, warm "
      + "medium-brown skin, an oval face, dark-brown almond-shaped eyes, straight natural brows, a "
      + "small rounded nose and a softly defined jaw. Shoulder-length straight black hair, side-parted, "
      + "worn loose with the LEFT side tucked behind her ear. Faded sage-green cotton work shirt with "
      + "sleeves rolled to the forearms, dark indigo jeans and worn brown work shoes. Calm, observant, "
      + "capable furniture restorer. This base identity plate is BEFORE the injury: both calves are "
      + "unhurt and there is no bandage, blood or torn cloth." },
  { name: "ကိုဇင်",
    pose: "The subject stands three-quarters toward the camera, full figure, with face, front of shirt and both arms clearly visible, neutral expression", en: "Ko Zin — her older brother, inside",
    prompt: "Ko Zin, May's Burmese older brother, aged thirty-three, slightly taller than May, broad "
      + "shoulders and a solid practical build, warm medium-brown skin, square face, dark-brown eyes, "
      + "straight heavy brows, broad nose, short neatly cropped black hair and faint jaw stubble. "
      + "Charcoal crew-neck T-shirt under an unbuttoned faded tan short-sleeved work shirt, dark work "
      + "trousers and brown shoes. Steady, protective and physically grounded. This base identity plate "
      + "is BEFORE the escape damage: the tan overshirt is intact everywhere, including across the back." },
  { name: "အရုပ်", en: "The doll — red dress",
    prompt: "A vintage articulated girl doll, full figure, with a glazed ivory porcelain head, hands, "
      + "lower legs and bare feet, and a rigid jointed toy body beneath a dark crimson-red cotton dress "
      + "with a fitted bodice, short puff sleeves, narrow cream collar and knee-length gathered skirt. "
      + "⚠️ SHE IS UNMISTAKABLY A TOY: glazed porcelain face with a small painted pink smile, glass "
      + "eyes that do not move together, a neck permanently tilted a few degrees to one side, ball "
      + "joints at the knees with visible moulded seams, three raised rings at every finger joint, "
      + "pink varnish on the nails, and maker's marks stamped into the sole of one bare foot. No "
      + "decay, no flesh, no gore, nothing wet. Never damaged except one chipped hand late on." },
  { name: "အပြင်ကမေ", en: "Outside-May — full size",
    sameAs: 1,
    prompt: "A continuity duplicate of May in Reference 1: preserve EXACTLY the same face, skin tone, "
      + "body, shoulder-length black hair, left-side hair tuck, sage-green work shirt, indigo jeans and "
      + "brown shoes. Do not invent a different woman. This version is uninjured at ordinary human "
      + "scale. Warm, worried and gentle; never sinister, uncanny or threatening." },
  { name: "အပြင်ကကိုဇင်", en: "Outside-Ko Zin — full size",
    sameAs: 2,
    prompt: "A continuity duplicate of Ko Zin in Reference 2: preserve EXACTLY the same face, skin "
      + "tone, build, cropped black hair, charcoal T-shirt, faded tan overshirt, dark trousers and brown "
      + "shoes. Do not invent a different man. This version is at ordinary human scale and his tan "
      + "overshirt is completely intact. Careful and gentle with his hands; never menacing." },
];

export const LOCS = [
  { name: "ဧည့်ခန်း", en: "The real living room, real scale",
    prompt: "The crowded living room of a deceased woman's old house in daylight: dark wooden "
      + "cabinets, framed paintings stacked against walls, brassware, dust sheets. In the middle of "
      + "the floor a large table with a glass display case on it." },
  { name: "အရုပ်အိမ်", en: "The dolls' house, seen from outside",
    prompt: "A two-storey dolls' house about chest height under a glass case: a blue front door, "
      + "white window frames, fully furnished rooms visible through the openings, everything "
      + "miniature and beautifully made." },
  { name: "အထဲ", en: "Inside the dolls' house",
    prompt: "The interior of a dolls' house at human scale to its occupants: rooms of glued-down "
      + "miniature furniture, floorboards whose grain reads a hundred times too large, windows of "
      + "flat glass showing only featureless white light, paint-drawn handles that are not handles. "
      + "⚠️ Everything is slightly too smooth, too matte, too perfect." },
  { name: "နံရံကြား", en: "The gap between the walls",
    prompt: "A narrow unfinished cavity between two walls of a dolls' house: raw unpainted timber, "
      + "runs of dried glue like frozen streams, huge iron nails crossing the space, sawdust. Dark "
      + "except for what light leaks in from the room outside." },
  { name: "အပြင်", en: "The world outside, at their scale",
    prompt: "The deceased woman's real living room photographed from four inches tall: a portable Bluetooth speaker "
      + "standing like an office block, a drinking glass like a water tower, human figures beyond all "
      + "of it, dust motes drifting past the size of moths." },
  { name: "မေ့အိမ်", en: "May's family home, from tabletop height",
    prompt: "An ordinary lived-in Myanmar family sitting room and dining area in the early evening: "
      + "warm practical ceiling light, a wooden table in the foreground, a doorway into the hall, family "
      + "photographs and everyday belongings, comfortable rather than wealthy. Designed to be viewed "
      + "from four inches above the tabletop, with furniture and full-size people appearing enormous. "
      + "No dolls' house, display case, Bluetooth speaker, antique collection or horror lighting." },
];

export const STYLE =
  "A deceased woman's old house in Myanmar, present day, in flat afternoon daylight. Two restorers "
  + "taking an inventory — and then the same room seen from four inches tall. Cinematic photorealism, "
  + "domestic uncanny rather than gothic: nothing is rotten, bloody or monstrous, and the daylight "
  + "never becomes night. 35mm film grain, shallow depth of field, 16:9. ⚠️ SCALE IS THE SUBJECT — "
  + "once the characters are inside the dolls' house, every image must make their size unmistakable "
  + "against ordinary objects. ⚠️ The doll is always visibly A TOY: porcelain, jointed, painted, "
  + "never flesh and never decayed. ⚠️ The full-size people are kind and ordinary and must never be "
  + "lit or framed as threatening. No gore. No legible text, numbers, captions or watermarks.";

export const CAR_STYLE =
  "Present-day Myanmar, inside an ordinary car in late-afternoon daylight. Cinematic photorealism, "
  + "natural colour, 35mm film grain, shallow depth of field, 16:9. The tiny people are exactly four "
  + "inches tall and every familiar car object must prove their scale. The full-size woman is kind and "
  + "careful, never threatening. No dolls' house, antique collection, Bluetooth speaker, horror "
  + "lighting, gore, legible text, numbers, captions or watermarks.";

export const WORKSHOP_STYLE =
  "May's practical furniture-restoration workshop in Myanmar, present day, in neutral afternoon "
  + "window light. Cinematic photorealism, natural colour, 35mm film grain, shallow depth of field, "
  + "16:9. This is an ordinary professional introduction before the old-house visit: no dolls' house, "
  + "display case, supernatural element, gothic lighting, gore, legible text, numbers, captions or "
  + "watermarks.";

export const HOME_STYLE =
  "May's ordinary family home in Myanmar, present day, in warm early-evening household light. "
  + "Cinematic photorealism, restrained domestic tragedy rather than gothic horror, natural colour, "
  + "35mm film grain, shallow depth of field, 16:9. Tiny May and Ko Zin are exactly four inches tall; "
  + "table weave, hands, cups and furniture must make their scale unmistakable. Full-size people are "
  + "warm, ordinary and kind, never uncanny or threatening. No dolls' house, display case, antique "
  + "collection, Bluetooth speaker, gore, legible text, numbers, captions or watermarks.";

export const styleForShot = (n) => n === 5 ? WORKSHOP_STYLE : n === 85 ? CAR_STYLE : n >= 86 ? HOME_STYLE : STYLE;

export const SCENES = [
  { t: "An Eye Filled the Window", l: "အထဲ",
    g: "ပြတင်းပေါက်တစ်ပေါက်လုံးကို မျက်လုံးတစ်လုံးက ဖုံးထားတယ်။ အညိုရောင်။",
    p: "A small window entirely filled by a single human eye pressed against it from outside — brown "
      + "iris, fine red capillaries in the white, ordinary lashes. The room inside is tiny.",
    u: ["ပြတင်းပေါက်တစ်ပေါက်လုံးကို မျက်လုံးတစ်လုံးက ဖုံးသွားတဲ့အချိန်မှာ ကျွန်မတို့ အိမ်အပြင် မထွက်သင့်တော့ဘူးလို့ ထင်ခဲ့တယ်။",
        "မျက်လုံးက အညိုရောင်။ မျက်ဆံဘေးမှာ သွေးကြောသေးသေးတွေ မြင်ရတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Room Went Dark When It Blinked", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "မျက်တောင်ခတ်လိုက်တိုင်း အခန်းထဲ တစ်ချက် မှောင်သွားတယ်။ ကိုဇင်က နံရံအောက် ဆွဲချတယ်။",
    p: "Two people flattened beneath a window sill in a tiny room, a man's hand over the woman's "
      + "mouth, the light across them cut by a slow blink.",
    u: ["မျက်တောင်ခတ်လိုက်တိုင်း ပြတင်းပေါက်က တစ်ချက် မှောင်သွားတယ်။",
        "ကိုဇင်က ကျွန်မပါးစပ်ကို ဖိပိတ်ပြီး နံရံအောက် ဆွဲချလိုက်တယ်။"] },

  { t: "It Was Looking For Us", l: "အထဲ",
    g: "အပြင်ကအရာက အိမ်ထဲကို ကြည့်နေတယ်။ ကျွန်မတို့ကို ရှာနေတာ။",
    p: "From inside the room, the eye fills the small window with its brown pupil angled downward, "
      + "searching the interior; the hiding place below the sill remains outside its gaze.",
    u: ["အပြင်ကအရာက အိမ်ထဲကို ကြည့်နေတယ်။ ကျွန်မတို့ကို ရှာနေတာ။",
        "အဲဒီအချိန်က ကျွန်မတို့ မသိသေးဘူး။"] },

  { t: "The Thing Inside Was Faster", l: "အထဲ",
    g: "အပြင်ကမျက်လုံးက အန္တရာယ်အကြီးဆုံး မဟုတ်ဘူး။ အိမ်ထဲက ကျန်နေတဲ့အရာက ပိုမြန်တယ်။",
    p: "A dolls'-house staircase seen from the bottom, empty, leading up into shadow — the frame "
      + "held on it a beat too long.",
    u: ["အပြင်ကမျက်လုံးက ကျွန်မတို့အတွက် အန္တရာယ်အကြီးဆုံးအရာ မဟုတ်ဘူး။",
        "အိမ်ထဲမှာ ကျန်နေတဲ့အရာက ပိုမြန်တယ်။",
        "ပြီးတော့ ကျွန်မတို့ ဘယ်နေရာမှာ ပုန်းနေလဲ သိတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "My Name Is May", w: ["မေ"],
    g: "ပရိဘောဂဟောင်း ပြန်ပြင်တဲ့အလုပ်။ လက်တွေက သစ်သားကို သုတ်နေတယ်။",
    p: "Careful hands working beeswax into the carved arm of an antique chair in a workshop, tools "
      + "and rags laid out, daylight from a window.",
    u: ["ကျွန်မနာမည် မေ။",
        "ပရိဘောဂဟောင်းနဲ့ အလှဆင်ပစ္စည်းတွေ ပြန်ပြင်တဲ့အလုပ် လုပ်တယ်။",
        "ကိုဇင်က ကျွန်မအစ်ကို။"] },

  { t: "Taking an Inventory", l: "ဧည့်ခန်း", w: ["မေ", "ကိုဇင်"],
    g: "အိမ်ဟောင်းတစ်လုံးမှာ ပစ္စည်းစာရင်း သွားယူနေကြတယ်။",
    p: "A brother and sister moving through a crowded old living room with a clipboard and a phone "
      + "camera, dust sheets half pulled back off furniture.",
    u: ["အဲဒီနေ့က အိမ်ဟောင်းတစ်လုံးမှာ ပစ္စည်းစာရင်းသွားယူကြတာ။",
        "အိမ်ရှင်အဘွား ဆုံးသွားပြီ။ ကျန်တဲ့မိသားစုက ပစ္စည်းတွေထဲက တန်ဖိုးရှိတာကို ပြန်ပြင်ပြီး သိမ်းချင်တယ်။"] },

  { t: "The Glass Case", l: "ဧည့်ခန်း",
    g: "အခန်းအလယ်မှာ မှန်အုပ်ထားတဲ့ စားပွဲကြီးတစ်လုံး။",
    p: "A large table in the centre of a cluttered room with a glass display case on it, the shape "
      + "inside not yet clear through the reflections.",
    u: ["ဧည့်ခန်းမှာ ဘီရိုဟောင်းတွေ၊ ပန်းချီကားတွေ၊ ကြေးပစ္စည်းတွေ အများကြီး။",
        "အခန်းအလယ်မှာတော့ မှန်အုပ်ထားတဲ့ စားပွဲကြီးတစ်လုံး ရှိတယ်။"] },

  { t: "A House Under Glass", l: "အရုပ်အိမ်",
    g: "မှန်အောက်မှာ အရုပ်အိမ်တစ်လုံး။ ရင်ဘတ်လောက်အမြင့်။ နှစ်ထပ်။ အပြာရောင်တံခါး။",
    p: "A beautifully made two-storey dolls' house under a glass case, chest height, with a blue "
      + "front door and white window frames, fully furnished inside.",
    u: ["မှန်အောက်မှာ အိမ်တစ်လုံး။ အရုပ်အိမ်။",
        "ကျွန်မ ရင်ဘတ်လောက်အမြင့် ရှိတယ်။ နှစ်ထပ်။",
        "အပြာရောင်တံခါး။ အဖြူရောင်ပြတင်းပေါက်တွေ။",
        "အတွင်းက ပရိဘောဂတွေကိုပါ အသေးစိတ် လုပ်ထားတယ်။"] },

  { t: "The Doll in the Front Room", l: "အရုပ်အိမ်", w: ["အရုပ်"],
    g: "အိမ်ရှေ့ခန်းထဲမှာ ကလေးအရုပ်မတစ်ရုပ်။ အနီရောင်ဂါဝန်။ ကြွေသားမျက်နှာ။ လည်ပင်း စောင်းနေတယ်။",
    p: "Looking into a dolls'-house front room through its window: a small porcelain-faced doll in a "
      + "red dress standing in the middle of the floor, her head tilted a few degrees to one side.",
    u: ["အိမ်ရှေ့ခန်းထဲမှာ ကလေးအရုပ်မတစ်ရုပ် ရှိတယ်။ အနီရောင်ဂါဝန်နဲ့။",
        "မျက်နှာက ကြွေသား။ လည်ပင်းနည်းနည်း စောင်းနေတယ်။"],
    c: [[1, "stinger"]] },

  { t: "Is Anyone Home", l: "ဧည့်ခန်း", w: ["မေ", "ကိုဇင်"],
    g: "ကိုဇင်က မှန်အဖုံးကို မတင်တယ်။ ကျွန်မက ကြေးတံခါးခေါက်တံလေးကို ထိလိုက်တယ်။",
    p: "A glass case lifted aside and a woman's fingertip reaching toward a tiny brass door knocker "
      + "on a blue miniature door, both of them smiling.",
    u: ["ကိုဇင်က မှန်အဖုံးကို မတင်ကြည့်တယ်။ အရုပ်အိမ်ရဲ့ အပြာရောင်တံခါးက ပိတ်နေတယ်။",
        "ကျွန်မက ခပ်သေးသေး ကြေးတံခါးခေါက်တံကို ထိလိုက်တယ်။",
        "“အိမ်ရှင်ရှိလား” လို့ ရယ်ပြီး ပြောမိတယ်။ ကိုဇင်လည်း ရယ်တယ်။"] },

  { t: "Far Too Loud", l: "ဧည့်ခန်း",
    g: "တံခါးခေါက်တံက တောက်လို့ မြည်တယ်။ အရုပ်အိမ်ထဲမှာ မြည်သင့်တဲ့အသံထက် အများကြီး ကျယ်တယ်။",
    p: "Extreme close-up of a tiny brass knocker falling against a miniature door, the whole frame "
      + "on an object the size of a fingernail.",
    u: ["တံခါးခေါက်တံက တောက်။ လို့ မြည်တယ်။",
        "အဲဒီအသံက အရုပ်အိမ်ထဲမှာ မြည်သင့်တဲ့အသံထက် အများကြီး ကျယ်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Table Was Gone", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "မျက်တောင်ခတ်ပြီး ပြန်ကြည့်တော့ စားပွဲ မရှိတော့ဘူး။ မှန်အုပ်လည်း မရှိဘူး။",
    p: "Two people standing in a small plain room, disoriented, no table or case anywhere — the "
      + "proportions of the room subtly wrong, the floorboard grain far too wide.",
    u: ["ကျွန်မ မျက်စိတစ်ချက် ပြာသွားတယ်။ ကိုဇင်က ကျွန်မလက်ကို ဖမ်းတယ်။ “မေ?”",
        "ကျွန်မ မျက်တောင်ခတ်ပြီး ပြန်ကြည့်လိုက်တော့ ကျွန်မတို့ရှေ့က စားပွဲ မရှိတော့ဘူး။",
        "မှန်အုပ်လည်း မရှိတော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "The Blue Door Was Behind Us", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "အပြာရောင်တံခါးက ကျွန်မတို့နောက်မှာ ရောက်နေတယ်။ လူတစ်ယောက် ဝင်လို့ရတဲ့အရွယ်။",
    p: "Low-angle wide shot inside the dolls' house: four-inch-tall May and Ko Zin stand full-body "
      + "in the foreground, visibly dwarfed by the blue-painted door behind them. It is human-sized "
      + "relative to them, but thick brush strokes, rounded toy edges and oversized wood grain expose "
      + "it as a handmade miniature.",
    u: ["အပြာရောင်တံခါးက ကျွန်မတို့နောက်မှာ ရောက်နေတယ်။ လူတစ်ယောက် ဝင်လို့ရတဲ့အရွယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "We Tried to Believe Otherwise", l: "အထဲ", w: ["ကိုဇင်"],
    g: "အစမှာ အရင်အိမ်ရဲ့ တခြားအခန်းလို့ ထင်ခဲ့တယ်။ ကိုဇင်က တံခါးကို ဆွဲဖွင့်တယ်။ မရဘူး။",
    p: "A man hauling at a door handle that turns freely while the door itself does not move at all, "
      + "his shoulder braced against the frame.",
    u: ["အစမှာ ကျွန်မတို့ အရင်အိမ်ရဲ့ တခြားအခန်းတစ်ခန်းထဲ ရောက်သွားတာလို့ ထင်မိတယ်။",
        "ကိုယ့်ကိုယ်ကို အဲဒီလိုပဲ ယုံအောင် ကြိုးစားကြတာ။",
        "ကိုဇင်က တံခါးကို ဆွဲဖွင့်တယ်။ မရဘူး။ လက်ကိုင်က လည်တယ်။ တံခါးက မပွင့်ဘူး။"] },

  { t: "Only White Light Outside", l: "အထဲ", w: ["မေ"],
    g: "ပြတင်းပေါက်အပြင်မှာ အဖြူရောင်အလင်းပဲ ရှိတယ်။ လမ်း၊ ခြံ၊ သစ်ပင် မမြင်ရဘူး။",
    p: "A window from inside showing nothing beyond it but a flat featureless white glow — no sky, "
      + "no ground, no depth at all.",
    u: ["ကျွန်မက ပြတင်းပေါက်ကို သွားကြည့်တယ်။",
        "အပြင်မှာ အဖြူရောင်အလင်းပဲ ရှိတယ်။ လမ်းမမြင်ရဘူး။ ခြံမမြင်ရဘူး။ သစ်ပင်မမြင်ရဘူး။"] },

  { t: "The Handle Was Painted On", l: "အထဲ",
    g: "ပြတင်းပေါက်အောက်ခြေက လက်ကိုင်က ဆေးနဲ့ ပုံဆွဲထားတာ။ ဖွင့်လို့မရဘူး။",
    p: "Extreme close-up of a window catch that is not a catch — a handle shape painted flat onto "
      + "the timber in thick brush strokes, brush hairs visible in the paint.",
    u: ["ပြတင်းပေါက်အောက်ခြေကို လက်နဲ့ စမ်းကြည့်လိုက်တယ်။",
        "သစ်သားပေါ်မှာ လက်ကိုင်ပုံဆွဲထားတာ။",
        "ဖွင့်လို့ရတဲ့လက်ကိုင် မဟုတ်ဘူး။ ဆေးနဲ့ ပုံဖော်ထားတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "Something Knocked Back", l: "အထဲ", w: ["ကိုဇင်"],
    g: "ကိုဇင်က တံခါးကို ပခုံးနဲ့ ဆောင့်တယ်။ ဒုန်း။ အပေါ်ထပ်ကနေ ဒုန်းလို့ ပြန်မြည်လာတယ်။",
    p: "A man mid-impact against a door, and above him a ceiling with dust jarred loose from it by "
      + "something answering from the floor above.",
    u: ["ကျွန်မ အစ်ကို့ကို လှည့်ကြည့်လိုက်တယ်။ သူက တံခါးကို ပခုံးနဲ့ ဆောင့်နေတယ်။ ဒုန်း။ ဒုန်း။",
        "အပေါ်ထပ်ကနေ ဒုန်း။ လို့ ပြန်မြည်လာတယ်။",
        "နှစ်ယောက်လုံး ရပ်လိုက်ကြတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Heavier Than a Person", l: "အထဲ",
    g: "အပေါ်က ခြေသံနှစ်ချက်။ လူ့ခြေသံထက် လေးတယ်။ သစ်သားတုံးကို ကြမ်းပြင်ပေါ် ထောင်ချနေသလို။",
    p: "A plain dolls'-house ceiling seen from below, dust sifting down through light in two "
      + "separate falls where two impacts have landed.",
    u: ["အပေါ်က ခြေသံနှစ်ချက် ထွက်လာတယ်။",
        "လူ့ခြေသံထက် လေးတယ်။ သစ်သားတုံးတစ်တုံးကို ကြမ်းပြင်ပေါ် ထောင်ချနေသလို။"] },

  { t: "Have You Come", l: "အထဲ",
    g: "မိန်းကလေးအသံတစ်ခု။ စကားတစ်ပိုင်းချင်းကြားမှာ စက်လည်သံလေး ပါနေတယ်။",
    p: "An empty dolls'-house stairwell from below, the top of it lost in shadow, nothing visible on "
      + "the steps.",
    u: ["ပြီးတော့ မိန်းကလေးအသံတစ်ခု ကြားရတယ်။ “ရောက်လာပြီလား…”",
        "အသံက လူပြောသလို မဆက်ဘူး။ စကားတစ်ပိုင်းချင်းကြားမှာ စက်လည်သံလေး ပါနေတယ်။",
        "ကြွိ။ “အိမ်ထဲမှာ…” ကြွိ။ “လူရှိရမယ်…”"],
    c: [[2, "bigstinger"]] },

  { t: "Under the Table", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "ကိုဇင်က ကျွန်မကို စားပွဲအောက် ဆွဲခေါ်တယ်။",
    p: "Four-inch-tall May and Ko Zin crouched beneath a dolls'-house dining table that now looms over "
      + "them like full-sized furniture, its underside exposing enormous crude glue joints and unfinished timber.",
    u: ["ကိုဇင်က ကျွန်မကို စားပွဲအောက် ဆွဲခေါ်တယ်။"] },

  { t: "A Red Hem on the Stairs", l: "အထဲ", w: ["အရုပ်"],
    g: "လှေကားကနေ အရိပ်ကြီးတစ်ခု ဆင်းလာတယ်။ အရင်ဆုံး အနီရောင်ဂါဝန်အနားကို မြင်ရတယ်။",
    p: "From under a table: the hem of an enormous red dress descending a staircase, only the fabric "
      + "and the bottom steps in frame.",
    u: ["လှေကားကနေ အရိပ်ကြီးတစ်ခု ဆင်းလာတယ်။",
        "အရင်ဆုံး အနီရောင်ဂါဝန်အနားကို မြင်ရတယ်။ ပြီးတော့ ခြေထောက်တွေ။"],
    c: [[1, "bigstinger"]] },

  { t: "Ball Joints at the Knees", l: "အထဲ", w: ["အရုပ်"],
    g: "ခြေထောက်တွေ ဖြူဖွေးနေတယ်။ ဒူးတွေမှာ စက်ဝိုင်းပုံ အဆက်တွေ ရှိတယ်။",
    p: "A doll's legs at enormous scale: smooth white porcelain with a clearly moulded spherical "
      + "ball joint at each knee, the seam line around it visible.",
    u: ["ဖြူဖွေးနေတယ်။ ဒူးတွေမှာ စက်ဝိုင်းပုံ အဆက်တွေ ရှိတယ်။"],
    c: [[0, "stinger"]] },

  { t: "She Did Not Bend Them", l: "အထဲ", w: ["အရုပ်"],
    g: "လှေကားတစ်ထစ်ဆင်းတိုင်း ခြေထောက်တစ်ဖက်လုံးကို ကားမြှောက်ပြီး ချတယ်။",
    p: "A doll descending a stair with one whole rigid leg swung out from the hip and set down flat, "
      + "the knee joint not flexing at all.",
    u: ["လှေကားတစ်ထစ် ဆင်းတိုင်း ခြေထောက်တစ်ဖက်လုံးကို ကားမြှောက်ပြီး ချတယ်။ ဒုန်း။ ဒုန်း။",
        "ကျွန်မတို့ စားပွဲအောက်မှာ အသက်မရှူရဲဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "Marks Stamped in the Sole", l: "အထဲ", w: ["အရုပ်"],
    g: "သူ့ခြေထောက်တစ်ဖက် စားပွဲနားမှာ ရပ်တယ်။ ဖိနပ်မပါဘူး။ ခြေဖဝါးအလယ်မှာ စာလုံးတချို့ ထုထားတယ်။",
    p: "The sole of a huge bare porcelain foot beside a table leg, with maker's marks pressed into "
      + "the glaze — shapes that read as stamped lettering but are not legible.",
    u: ["သူ့ခြေထောက်တစ်ဖက်က စားပွဲနားမှာ လာရပ်တယ်။ ဖိနပ်မပါဘူး။",
        "ခြေဖဝါးအလယ်မှာ စာလုံးတချို့ ထုထားတယ်။ ကျွန်မ သေချာမဖတ်နိုင်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "She Folded at the Waist", l: "အထဲ", w: ["အရုပ်"],
    g: "ဒူးမကွေးဘဲ ခါးကနေ ရှေ့ကို ခေါက်ကျလာတယ်။ ကြွေမျက်နှာကြီးက စားပွဲအောက်ကို ဝင်လာတယ်။",
    p: "A doll bent forward from the waist alone with both legs perfectly straight, her large "
      + "porcelain face coming in under a table edge upside down.",
    u: ["အဲဒီနောက် သူ ဒူးမကွေးဘဲ ခါးကနေ ရှေ့ကို ခေါက်ကျလာတယ်။",
        "ကြွေမျက်နှာကြီးက စားပွဲအောက်ကို ဝင်လာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "One Eye Followed Late", l: "အထဲ", w: ["အရုပ်"],
    g: "မျက်လုံးနှစ်လုံးက တစ်ပြိုင်နက် မရွေ့ဘူး။ တစ်လုံးက အရင်၊ နောက်တစ်လုံးက နောက်ကျမှ လိုက်လာတယ်။",
    p: "Extreme close-up of a doll's two glass eyes: one has swivelled toward camera, the other is "
      + "still a fraction behind, not yet aligned.",
    u: ["မျက်လုံးနှစ်လုံးက တစ်ပြိုင်နက် မရွေ့ဘူး။",
        "တစ်လုံးက ကျွန်မကို ကြည့်တယ်။ နောက်တစ်လုံးက ခဏနောက်ကျပြီးမှ လိုက်လာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Found You", l: "အထဲ", w: ["အရုပ်"],
    g: "ပါးစပ်က ပန်းရောင်အပြုံးပုံ ဆွဲထားတာ။ အသံက လည်ပင်းစောင်းနေတဲ့အကြားကနေ ထွက်လာတယ်။",
    p: "A doll's small painted pink smile at enormous scale, the brushwork of it visible, the mouth "
      + "not moving at all.",
    u: ["ပါးစပ်က ပန်းရောင်အပြုံးပုံ ဆွဲထားတာ။",
        "အသံကတော့ လည်ပင်းစောင်းနေတဲ့အကြားကနေ ထွက်လာတယ်။ “တွေ့ပြီ…”"],
    c: [[1, "bigstinger"]] },

  { t: "He Shoved the Table", l: "အထဲ", w: ["ကိုဇင်", "အရုပ်"],
    g: "ကိုဇင်က စားပွဲကို အားကုန် တွန်းလိုက်တယ်။ အရုပ်ရဲ့မျက်နှာကို တိုက်မိတယ်။",
    p: "Four-inch-tall Ko Zin drives a heavy dolls'-house table that is massive at his scale into the "
      + "towering doll's porcelain face, rocking her backward with slight motion blur on the table edge.",
    u: ["ကိုဇင်က စားပွဲကို အားကုန် တွန်းလိုက်တယ်။",
        "စားပွဲက အရုပ်ရဲ့မျက်နှာကို တိုက်မိတယ်။ ကြွေသံ ခပ်မာမာ ထွက်လာတယ်။"],
    c: [[1, "stinger"]] },

  { t: "The Gap Under the Stairs", l: "နံရံကြား", w: ["မေ", "ကိုဇင်"],
    g: "လှေကားအောက်က အပေါက်ငယ်ထဲ ဝင်ပြေးတယ်။ သိုလှောင်ခန်းလို့ ထင်ခဲ့တာ။",
    p: "Two figures squeezing through a small opening beneath a staircase into darkness.",
    u: ["သူ နောက်ယိုင်သွားတုန်း ကျွန်မတို့ လှေကားအောက်က အပေါက်ငယ်ထဲ ဝင်ပြေးတယ်။",
        "သိုလှောင်ခန်းလို့ ထင်ခဲ့တာ။"] },

  { t: "Between the Walls", l: "နံရံကြား",
    g: "အထဲမှာ အခန်းမရှိဘူး။ နံရံနှစ်ထပ်ကြားက ကျဉ်းကျဉ်းနေရာ။ ဆေးမသုတ်ထားဘူး။ ကော်ခြောက်တွေ။ သံချောင်းကြီးတွေ။",
    p: "The cavity between two walls: raw unpainted timber, long runs of dried glue like frozen "
      + "streams, enormous iron nail shafts crossing the space overhead.",
    u: ["အထဲမှာ အခန်းမရှိဘူး။ အိမ်နံရံနှစ်ထပ်ကြားက ကျဉ်းကျဉ်းနေရာတစ်ခု။",
        "နံရံနောက်မှာ ဆေးမသုတ်ထားဘူး။ သစ်သားကြမ်း။ ကော်ခြောက်တွေ။ သံချောင်းကြီးတွေ။"],
    c: [[1, "bigstinger"]] },

  { t: "Three Rings at Each Joint", l: "နံရံကြား", w: ["အရုပ်"],
    g: "လက်ချောင်းတစ်ချောင်း အပေါက်ထဲ ဝင်လာတယ်။ အဆစ်မှာ အရစ်သုံးရစ်။ လက်သည်းကို ပန်းရောင်ဆေး သုတ်ထားတယ်။",
    p: "A huge porcelain finger pushed into a narrow wall cavity: three raised moulded rings at the "
      + "joint, pink varnish neatly painted on the nail.",
    u: ["အပြင်ဘက်မှာ အရုပ်က လက်နဲ့ စမ်းနေတယ်။ လက်ချောင်းတစ်ချောင်း အပေါက်ထဲ ဝင်လာတယ်။",
        "အဆစ်မှာ အရစ်သုံးရစ်။ လက်သည်းကို ပန်းရောင်ဆေး သုတ်ထားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Splinter in My Calf", l: "နံရံကြား", w: ["မေ", "ကိုဇင်"],
    g: "ခြေသလုံးမှာ သစ်သားစ စိုက်မိထားတယ်။ သွေးထွက်နေတယ်။ ကိုဇင်က အင်္ကျီလက်စနဲ့ ပတ်ပေးတယ်။",
    p: "A man tying a torn shirt sleeve around a woman's calf in a dark timber cavity, a long wood "
      + "splinter on the ground beside them.",
    u: ["ကိုဇင်က ကျွန်မကို အတွင်းဘက် ဆက်တွန်းတယ်။ ကျွန်မတို့ နှစ်ယောက်လုံး ဘေးတိုက်လျှောက်ရတယ်။",
        "အရုပ်ရဲ့လက်က မမီတော့တဲ့နေရာ ရောက်မှ ကျွန်မ ထိုင်ကျသွားတယ်။",
        "ခြေသလုံးမှာ သစ်သားစ စိုက်မိထားတယ်။ သွေးထွက်နေတယ်။",
        "ကိုဇင်က အင်္ကျီလက်စနဲ့ ပတ်ပေးတယ်။ သူ့လက်တွေ တုန်နေတယ်။"] },

  { t: "It's the Doll From the Case", l: "နံရံကြား", w: ["မေ", "ကိုဇင်", "အရုပ်"],
    g: "မှန်အုပ်ထဲမှာ မြင်ခဲ့တဲ့ အနီရောင်ဂါဝန်အရုပ်။ အခု ကျွန်မတို့ထက် နှစ်ဆကျော် မြင့်နေတယ်။",
    p: "From inside the wall cavity, May and Ko Zin crouch in the foreground while the same red-dress "
      + "porcelain doll from the display case passes through the lit room beyond the gap. Her visible "
      + "body is more than twice their height, making the recognition and scale unmistakable.",
    u: ["“ကိုဇင်” ကျွန်မ တိုးတိုးခေါ်တယ်။ “အပြင်ကအရုပ်က…” သူ ခေါင်းညိတ်တယ်။ “သိတယ်”",
        "ကျွန်မတို့ အလုပ်လာစစ်တုန်းက မှန်အုပ်ထဲမှာ မြင်ခဲ့တဲ့ အနီရောင်ဂါဝန်အရုပ်။",
        "အခု ကျွန်မတို့ထက် နှစ်ဆကျော် မြင့်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Up Into the Bedroom", l: "အထဲ",
    g: "နံရံကြားကနေ အပေါ်တက်တဲ့နေရာ။ အခန်းတစ်ခန်းမှာ ကလေးစားပွဲတစ်လုံး။",
    p: "A small upstairs dolls'-house bedroom seen at human scale: a child's desk, a made bed, a "
      + "wall clock — every object slightly too smooth.",
    u: ["နံရံကြားကနေ လျှောက်လာတော့ အပေါ်ဘက်တက်တဲ့ နေရာတစ်ခု ရှိတယ်။",
        "အဲဒီကနေ အိမ်အပေါ်ထပ်ကို တက်လို့ရတယ်။",
        "အခန်းတစ်ခန်းမှာ ကလေးစားပွဲတစ်လုံး ရှိတယ်။"] },

  { t: "The Hands Were Painted", l: "အထဲ", w: ["မေ"],
    g: "နံရံပေါ်က နာရီက ဆယ်နာရီဆယ့်နှစ်မိနစ်မှာ ရပ်နေတယ်။ လက်တံတွေက ဆေးနဲ့ ဆွဲထားတာ။",
    p: "A fingertip touching the face of a wall clock and finding the hands are brush strokes "
      + "painted onto the dial, the paint slightly raised.",
    u: ["နံရံပေါ်က နာရီက ဆယ်နာရီဆယ့်နှစ်မိနစ်မှာ ရပ်နေတယ်။",
        "နာရီလက်တံတွေကို ကျွန်မ ထိကြည့်တယ်။ လက်တံတွေက ဆေးနဲ့ ဆွဲထားတာ။"],
    c: [[1, "stinger"]] },

  { t: "A Book With No Pages", l: "အထဲ",
    g: "စားပွဲပေါ်က စာအုပ်ကို ဖွင့်ကြည့်တယ်။ အဖုံးပဲ ရှိတယ်။ အထဲမှာ စာရွက်မရှိဘူး။",
    p: "A book opened to reveal it is a solid block of painted wood — a cover shape with no pages at "
      + "all, the edges carved to suggest leaves.",
    u: ["စားပွဲပေါ်က စာအုပ်ကို ဖွင့်ကြည့်တယ်။ အဖုံးပဲ ရှိတယ်။ အထဲမှာ စာရွက်မရှိဘူး။"],
    c: [[0, "stinger"]] },

  { t: "The Pillow Was Wood", l: "အထဲ", w: ["ကိုဇင်"],
    g: "ကိုဇင်က ခေါင်းအုံးကို ကောက်တယ်။ အောက်ခြေက ပြားပြား။ သစ်သား။",
    p: "A pillow lifted from a bed showing its underside is flat sanded timber, the fabric only a "
      + "painted skin over it.",
    u: ["ကိုဇင်က အိပ်ရာပေါ်က ခေါင်းအုံးကို ကောက်တယ်။ အောက်ခြေက ပြားပြား။ သစ်သား။",
        "ကျွန်မတို့ နှစ်ယောက် တစ်ယောက်ကိုတစ်ယောက် ကြည့်လိုက်ကြတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Whole House Tilted", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "အိမ်တစ်လုံးလုံး စောင်းသွားတယ်။ ကြမ်းပြင်က ရွေ့တယ်။ စားပွဲတွေ၊ အိပ်ရာတွေက မရွေ့ဘူး။",
    p: "A room tipped several degrees off level with two people sliding and grabbing at walls — "
      + "while every piece of furniture in it stays exactly in place, glued down.",
    u: ["အဲဒီအချိန် အိမ်တစ်လုံးလုံး စောင်းသွားတယ်။",
        "ကြမ်းပြင်က ကျွန်မတို့ခြေအောက်မှာ ရွေ့တယ်။",
        "စားပွဲတွေ၊ အိပ်ရာတွေက မရွေ့ဘူး။ ကြမ်းပြင်မှာ ကော်ကပ်ထားသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "Then the Eye", l: "အထဲ",
    g: "ပြတင်းပေါက်အပြင်က အဖြူရောင်အလင်း ပျောက်သွားတယ်။ အသားရောင်အရာကြီးတစ်ခု။ နောက်တော့ မျက်လုံး။",
    p: "A window losing its white glow as a mass of skin tone fills it, resolving into a single "
      + "enormous human eye.",
    u: ["ကိုဇင်က ကျွန်မကို ဖမ်းတယ်။",
        "ပြတင်းပေါက်အပြင်က အဖြူရောင်အလင်း ပျောက်သွားတယ်။",
        "အစားထိုးပြီး အသားရောင်အရာကြီးတစ်ခု ပေါ်လာတယ်။ နောက်တော့ မျက်လုံး။",
        "ပြတင်းပေါက်တစ်ပေါက်လုံးကို ဖုံးသွားတဲ့ မျက်လုံး။"],
    c: [[2, "bigstinger"]] },

  { t: "It Did Not See Us", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "မျက်လုံးက အခန်းထဲကို ကြည့်နေတယ်။ ပုန်းနေတဲ့နေရာကို မမြင်ရဘူးထင်တယ်။ ခဏကြာတော့ ပြန်ခွာသွားတယ်။",
    p: "Two people pressed flat under a window sill as the light above them returns — the eye "
      + "withdrawn, the white glow back.",
    u: ["ကိုဇင်က ကျွန်မကို နံရံအောက် ဆွဲချတယ်။ မျက်လုံးက အခန်းထဲကို ကြည့်နေတယ်။",
        "ကျွန်မတို့ ပုန်းနေတဲ့နေရာကို မမြင်ရဘူးထင်တယ်။ ခဏကြာတော့ ပြန်ခွာသွားတယ်။"] },

  { t: "A Voice Too Large to Parse", l: "အထဲ",
    g: "အပြင်က အသံကြီးတစ်ခု။ နံရံတစ်ခုလုံး တုန်သွားသလို။ ထူးဆန်းစွာ ရင်းနှီးနေတယ်။",
    p: "A dolls'-house wall with dust shaken off it in a fine sheet by a sound too low to be heard, "
      + "only felt.",
    u: ["အပြင်က အသံကြီးတစ်ခု ကြားရတယ်။ လူတစ်ယောက် စကားပြောသံ။",
        "နံရံတစ်ခုလုံး တုန်သွားသလို ခံစားရတယ်။ “ဒီအထဲမှာ…”",
        "ကျန်တဲ့စကားကို မကြားရဘူး။ နောက်တစ်သံက ပြန်ပြောတယ်။",
        "အဲဒီအသံက ထူးဆန်းစွာ ရင်းနှီးနေတယ်။",
        "ဒါပေမယ့် ကြီးလွန်း၊ နီးလွန်းလို့ စကားလုံးတွေကို ကျွန်မ မခွဲနိုင်ဘူး။"],
    c: [[2, "stinger"]] },

  { t: "Are They Big, Or Are We Small", l: "အထဲ", w: ["ကိုဇင်", "မေ"],
    g: "ကိုဇင်က ကော်ခြောက်တွေကို လက်နဲ့ ပွတ်နေတယ်။ ပြီးတော့ အရမ်းတိုးတိုး မေးတယ်။",
    p: "A man crouched with his palm flat on a run of dried glue beneath a window, looking up at his "
      + "sister with the question already on his face.",
    u: ["ကိုဇင်က ပြတင်းပေါက်အောက်က ကော်ခြောက်တွေကို လက်နဲ့ ပွတ်နေတယ်။",
        "ပြီးတော့ အရမ်းတိုးတိုး ပြောတယ်။ “သူတို့က ကြီးနေတာလား…”",
        "ကျွန်မ သူ့ကို ကြည့်တယ်။ “ဒါမှမဟုတ် ငါတို့က သေးနေတာလား”"],
    c: [[2, "bigstinger"]] },

  { t: "A Dark Shape in the White", l: "အထဲ", w: ["မေ"],
    g: "အဖြူရောင်နောက်ခံမှာ အနက်ရောင်ကြီးတစ်ခု။ ဘေးမှာ အရှည်လိုက်အပေါက်တွေ။ အောက်ခြေမှာ ကြိုးတစ်ချောင်း။",
    p: "Through a tiny window: a huge dark rectangular mass standing in the white void, with long "
      + "slotted perforations down its side and a cable coiled at its base.",
    u: ["ကျွန်မ ပြတင်းပေါက်ဘောင်ကြားကနေ အပြင်ကို ထပ်ကြည့်တယ်။",
        "ဒီတစ်ခါ အဖြူရောင်နောက်ခံကို သေချာကြည့်တယ်။",
        "တစ်နေရာမှာ အနက်ရောင်ကြီးတစ်ခု ရှိတယ်။ ဘေးမှာ အရှည်လိုက်အပေါက်တွေ။ အောက်ခြေမှာ ကြိုးတစ်ချောင်း။"] },

  { t: "His Bluetooth Speaker", l: "အပြင်",
    g: "ကိုဇင်ရဲ့ အိတ်ဆောင်စပီကာ။ အခု အဆောက်အအုံတစ်လုံးလောက် ကြီးနေတယ်။",
    p: "A portable Bluetooth speaker photographed from four inches tall so it stands like an office "
      + "block against a white tabletop, its grille slots the size of doorways.",
    u: ["ကိုဇင်ရဲ့ အိတ်ဆောင်စပီကာ။ မနက်က စားပွဲပေါ် တင်ထားခဲ့တာ။",
        "အခု ကျွန်မတို့ မြင်နေရတဲ့အရွယ်က အဆောက်အအုံတစ်လုံးလောက်။",
        "ကျွန်မ ပါးစပ်ထဲက လေတွေ ထွက်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "We Were Inside the Dolls' House", l: "အထဲ", w: ["မေ"],
    g: "ကျွန်မတို့ ရောက်နေတဲ့နေရာက အရုပ်အိမ်အတွင်း။",
    p: "Close on a woman's face as everything reorganises behind her eyes, the too-perfect room "
      + "soft behind her.",
    u: ["ကျွန်မတို့ ရောက်နေတဲ့နေရာက အရုပ်အိမ်အတွင်း။",
        "အဲဒီအတွေးကို နားလည်လိုက်တာနဲ့ အရင်က မြင်ခဲ့သမျှ အဓိပ္ပာယ်ပြောင်းသွားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Someone Had Simply Moved It", l: "အရုပ်အိမ်",
    g: "ဖွင့်လို့မရတဲ့ပြတင်းပေါက်။ ဆေးနဲ့ဆွဲထားတဲ့နာရီ။ ကော်ကပ်ထားတဲ့ပရိဘောဂ။ အိမ်စောင်းသွားတာ — တစ်ယောက်ယောက်က ရွှေ့ကြည့်လိုက်တာ။",
    p: "A dolls' house seen from outside at real scale, a pair of ordinary human hands turning it a "
      + "few degrees on the table to look at another side.",
    u: ["ဖွင့်လို့မရတဲ့ပြတင်းပေါက်။ ဆေးနဲ့ဆွဲထားတဲ့နာရီ။ ကော်ကပ်ထားတဲ့ပရိဘောဂတွေ။",
        "အပေါ်က အိမ်တစ်လုံးလုံး စောင်းသွားတာ။",
        "တစ်ယောက်ယောက်က အရုပ်အိမ်ကို မရွှေ့ကြည့်လိုက်တာ။"],
    c: [[1, "bigstinger"]] },

  { t: "She Found Us", l: "အထဲ", w: ["အရုပ်"],
    g: "အောက်ထပ်မှာ ဒုန်းခနဲ အသံ။ အနီရောင်အရုပ်က ပုန်းနေတဲ့နေရာကို ရှာတွေ့သွားပြီ။",
    p: "An enormous red hem and one rigid porcelain leg at the bottom of a staircase, beginning to "
      + "climb, seen from the landing above.",
    u: ["အောက်ထပ်မှာ ဒုန်းခနဲ အသံထွက်လာတယ်။",
        "အနီရောင်အရုပ်က ကျွန်မတို့ ပုန်းနေတဲ့နေရာကို ရှာတွေ့သွားပြီ။",
        "သူ လှေကားတက်လာတယ်။ တစ်ထစ်။ တစ်ထစ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Upstairs Was a Trap", l: "အထဲ",
    g: "လွတ်လမ်းလို ထင်ခဲ့တဲ့ အပေါ်ထပ်အခန်းက ပိတ်မိမယ့်နေရာ ဖြစ်သွားပြီ။ ပြတင်းပေါက်က မှန်တစ်ထပ်။",
    p: "A small upstairs room with one door and one sealed window, photographed to feel like a box.",
    u: ["ကျွန်မတို့အတွက် အရင်က လွတ်လမ်းလို ထင်ခဲ့တဲ့ အပေါ်ထပ်အခန်းက ပိတ်မိမယ့်နေရာ ဖြစ်သွားပြီ။",
        "ပြတင်းပေါက်က မှန်တစ်ထပ်။ အပြင်မှာလည်း မှန်အုပ် ရှိဦးမယ်။"] },

  { t: "He Broke Off a Chair Leg", l: "အထဲ", w: ["ကိုဇင်"],
    g: "ကုလားထိုင်ကို ဖြုတ်လို့မရဘူး။ ခြေထောက်တစ်ချောင်းကို အားနဲ့ ချိုးလိုက်တယ်။",
    p: "A man snapping one leg off a glued-down miniature chair, the break splintering raw pale wood.",
    u: ["ကိုဇင်က ကုလားထိုင်ကို ဖြုတ်ယူဖို့ ဆွဲတယ်။ ကော်နဲ့ ကပ်ထားလို့ မရဘူး။",
        "သူ ခြေထောက်တစ်ချောင်းကို အားနဲ့ ချိုးလိုက်တယ်။",
        "ကျွန်မတို့အရွယ်နဲ့ဆို သစ်သားတုတ်တစ်ချောင်း။"] },

  { t: "One Small Crack", l: "အထဲ",
    g: "မှန်ကို ရိုက်တယ်။ မကွဲဘူး။ အက်ကြောင်းသေးသေးတစ်ခုပဲ ပေါ်လာတယ်။",
    p: "A window pane struck hard by a wooden stick, producing a single short crack radiating from "
      + "the point of impact and nothing more.",
    u: ["သူက ပြတင်းပေါက်ကို ရိုက်တယ်။ မှန် မကွဲဘူး။",
        "အက်ကြောင်းသေးသေးတစ်ခု ပေါ်လာတယ်။"] },

  { t: "This Time I Did Not Hide", l: "အထဲ", w: ["မေ"],
    g: "မျက်လုံး ပြန်ကပ်လာတယ်။ ဒီတစ်ခါ ကျွန်မ ပြတင်းပေါက်ရှေ့ ထွက်ရပ်ပြီး လက်နှစ်ဖက် မြှောက်ပြတယ်။",
    p: "A woman standing square in front of a window that is entirely filled by a human eye, both "
      + "arms raised over her head, waving.",
    u: ["အပြင်က အလင်းအရိပ် ရွေ့သွားတယ်။ မျက်လုံး ပြန်ကပ်လာတယ်။",
        "ဒီတစ်ခါ ကျွန်မ မပုန်းတော့ဘူး။",
        "ပြတင်းပေါက်ရှေ့ကို ထွက်ရပ်ပြီး လက်နှစ်ဖက် မြှောက်ပြလိုက်တယ်။ “ကယ်ပါ!”"],
    c: [[2, "bigstinger"]] },

  { t: "The Eye Flinched", l: "အထဲ",
    g: "မျက်လုံးက တစ်ချက် တုန်သွားတယ်။ ပြီးတော့ ခွာသွားတယ်။",
    p: "The enormous eye at the window caught mid-startle, the pupil contracted, beginning to pull "
      + "back.",
    u: ["မျက်လုံးက တစ်ချက် တုန်သွားတယ်။",
        "ကျွန်မ ဆက်အော်တယ်။ “ဒီမှာ လူရှိတယ်!”",
        "အပြင်ကမျက်လုံး ခွာသွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Something Touched the Roof", l: "အထဲ",
    g: "အိမ်ခေါင်မိုးပေါ်မှာ တစ်ခုခု လာထိတယ်။ တစ်လုံးလုံး တုန်သွားတယ်။",
    p: "A dolls'-house ceiling from inside with dust jarred from every joint at once, the whole room "
      + "shuddering.",
    u: ["ပြီးတော့ အိမ်ခေါင်မိုးပေါ်မှာ တစ်ခုခု လာထိတယ်။ တစ်လုံးလုံး တုန်သွားတယ်။"],
    c: [[0, "stinger"]] },

  { t: "Don't Open the Door", l: "အထဲ", w: ["အရုပ်"],
    g: "အောက်ထပ်က အရုပ် ရုတ်တရက် ရပ်သွားတယ်။ လည်ပင်းထဲမှာ စက်လည်သံ။",
    p: "A doll stopped mid-stride on a staircase, head tilted, the seam at her neck visible as "
      + "something turns inside it.",
    u: ["အောက်ထပ်က အရုပ်အမ ရုတ်တရက် ရပ်သွားတယ်။ သူ့လည်ပင်းထဲမှာ စက်လည်သံ ကြားရတယ်။",
        "ကြွိ။ “တံခါး…” ကြွိ။ “မဖွင့်နဲ့…”"],
    c: [[1, "bigstinger"]] },

  { t: "The Roof Lifted", l: "အထဲ",
    g: "ခေါင်မိုးက အပေါ်ကို နည်းနည်း မြောက်လာတယ်။ အလင်းစင်းကြီးတစ်ခု ဝင်လာတယ်။",
    p: "A widening blade of daylight entering a dolls'-house room as its roof panel is lifted away "
      + "from above, dust swirling up into it.",
    u: ["ခေါင်မိုးက အပေါ်ကို နည်းနည်း မြောက်လာတယ်။ အလင်းစင်းကြီးတစ်ခု ဝင်လာတယ်။",
        "အပြင်က လူတစ်ယောက်က ဖွင့်ပေးနေတာ။"],
    c: [[0, "bigstinger"]] },

  { t: "He Lifted Me by the Waist", l: "အထဲ", w: ["ကိုဇင်", "မေ"],
    g: "ကိုဇင်က ကျွန်မကို ခါးကနေ မတင်ပေးတယ်။ ကျွန်မ အပေါ်ဘောင်ကို ဖမ်းလိုက်တယ်။",
    p: "A man boosting a woman upward toward an opening gap in a ceiling, her hands catching the "
      + "edge of a timber wall top.",
    u: ["ကိုဇင်က ကျွန်မကို ခါးကနေ မတင်ပေးတယ်။ ကျွန်မ အပေါ်ဘောင်ကို ဖမ်းလိုက်တယ်။",
        "ခြေသလုံးက နာလွန်းလို့ မျက်ရည်ထွက်လာတယ်။"] },

  { t: "Her Head Would Not Fit", l: "အထဲ", w: ["အရုပ်"],
    g: "အရုပ်က အခန်းဝကို ရောက်လာတယ်။ ခေါင်းက တံခါးပေါင်ကို ထိနေတယ်။",
    p: "An enormous doll filling a doorway, the crown of her head jammed hard against the lintel, "
      + "unable to advance.",
    u: ["အောက်မှာ အနီရောင်အရုပ် အခန်းဝကို ရောက်လာပြီ။",
        "သူ့ခေါင်းက တံခါးပေါင်ကို ထိနေတယ်။"],
    c: [[1, "stinger"]] },

  { t: "So She Folded It Sideways", l: "အထဲ", w: ["အရုပ်"],
    g: "ဝင်မရလို့ ခေါင်းကို ဘေးတစ်ဖက် ခေါက်ချလိုက်တယ်။ မျက်နှာက ကိုးဆယ်ဒီဂရီ စောင်းသွားတယ်။",
    p: "A doll's head folded fully sideways onto her own shoulder at ninety degrees, the neck joint "
      + "seam wide open, the painted smile now vertical. She fits through the door.",
    u: ["ဝင်မရလို့ ခေါင်းကို ဘေးတစ်ဖက် ခေါက်ချလိုက်တယ်။",
        "မျက်နှာက ကိုးဆယ်ဒီဂရီ စောင်းသွားတယ်။",
        "အဲဒီအနေအထားနဲ့ ကျွန်မကို ကြည့်တယ်။ ပန်းရောင်အပြုံးကတော့ အရင်အတိုင်း။"],
    c: [[1, "bigstinger"]] },

  { t: "He Hit Her Hand", l: "အထဲ", w: ["ကိုဇင်", "အရုပ်"],
    g: "အရုပ်က လက်လှမ်းတယ်။ ကိုဇင်က သစ်သားတုတ်နဲ့ ရိုက်တယ်။ နောက်တစ်ဖက်က ပခုံးကို ဖမ်းလိုက်တယ်။",
    p: "A wooden stick striking a huge porcelain hand aside, while the doll's other hand closes "
      + "around a man's shoulder from behind.",
    u: ["သူ လက်လှမ်းတယ်။ ကိုဇင်က သူ့လက်ကို သစ်သားတုတ်နဲ့ ရိုက်တယ်။ လက်က နည်းနည်း ရပ်သွားတယ်။",
        "နောက်တစ်ဖက်က ကိုဇင့်ပခုံးကို ဖမ်းလိုက်တယ်။ သူ့ကို နောက်ဆွဲတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Our Fingertips Touched", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "ကျွန်မ လက်တစ်ဖက်နဲ့ အစ်ကို့ကို လှမ်းဖမ်းလိုက်တယ်။ လက်ချောင်းထိပ်တွေ ထိတယ်။ မမီဘူး။",
    p: "Two outstretched hands with the fingertips just brushing and no more, one hanging from a "
      + "wall top, the other being pulled away.",
    u: ["ကျွန်မ အပေါ်ဘောင်ကို လက်တစ်ဖက်နဲ့ ဖမ်းထားရင်း ကျန်လက်နဲ့ အစ်ကို့ကို လှမ်းဖမ်းလိုက်တယ်။",
        "လက်ချောင်းထိပ်တွေ ထိတယ်။ မမီဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "May, Go", l: "အထဲ", w: ["ကိုဇင်"],
    g: "ကျွန်မ တစ်ယောက်တည်း တက်ထွက်သွားလို့ရတယ်။ ကိုဇင်က မော့ကြည့်ပြီး “မေ၊ သွား!” လို့ ပြောတယ်။",
    p: "A man looking up from below, one arm pinned, shouting a single word — his face entirely "
      + "certain.",
    u: ["ကျွန်မ အပေါ်ကို တက်ထွက်သွားလို့ရတယ်။ တစ်ယောက်တည်း။",
        "ကိုဇင်က ကျွန်မကို မော့ကြည့်တယ်။ “မေ၊ သွား!”"] },

  { t: "I Let Go and Dropped Back", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "ကျွန်မ အပေါ်ဘောင်ကို လွှတ်ချပြီး သူ့အပေါ်ကို ပြန်ခုန်ချလိုက်တယ်။",
    p: "A woman letting go of an edge and falling back down into a room, arms out, the lit gap above "
      + "her receding.",
    u: ["ကျွန်မ အပေါ်ဘောင်ကို လွှတ်ချလိုက်တယ်။ သူ့အပေါ်ကို ပြန်ခုန်ချလိုက်တယ်။",
        "နှစ်ယောက်လုံး ကြမ်းပြင်ပေါ် လဲကျတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "A Chip Came Off Her Hand", l: "အထဲ", w: ["အရုပ်"],
    g: "အရုပ်ရဲ့ လက်တစ်ဖက်က နံရံကို တိုက်မိပြီး ကြွေကွဲသံ ထွက်လာတယ်။",
    p: "A doll's hand struck against a wall with a shard of glazed porcelain breaking off it, "
      + "revealing dull unglazed material beneath. No blood, no flesh.",
    u: ["အရုပ်ရဲ့ လက်တစ်ဖက်က နံရံကို တိုက်မိပြီး ကြွေကွဲသံ ထွက်လာတယ်။",
        "ကျွန်မတို့ကို ပြန်ဖမ်းဖို့ သူ ကိုယ်ကို ကွေးချလာတယ်။"],
    c: [[0, "stinger"]] },

  { t: "A Hand Came Down From Above", l: "အထဲ", w: ["အရုပ်"],
    g: "အပေါ်ကနေ လက်ကြီးတစ်ဖက် ဆင်းလာတယ်။ လက်ညှိုးနဲ့ လက်မက အရုပ်ကို ဖမ်းလိုက်တယ်။",
    p: "An enormous human thumb and forefinger descending into a dolls'-house room and closing "
      + "around a doll's torso, lifting her.",
    u: ["အဲဒီအချိန် အပေါ်ကနေ လက်ကြီးတစ်ဖက် ဆင်းလာတယ်။",
        "လက်ညှိုးနဲ့ လက်မက အရုပ်ရဲ့ကိုယ်ကို ဖမ်းလိုက်တယ်။ အရုပ်အမ ရုန်းတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "I Tore His Shirt Free", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "အရုပ်လက်တွေက ကိုဇင့်အင်္ကျီကို ဆွဲထားတုန်း။ ကျွန်မက အတင်းဆွဲဖြုတ်တယ်။ အင်္ကျီစ ပြဲသွားတယ်။",
    p: "A shirt back tearing open as a woman rips it out of a porcelain grip, the fabric splitting "
      + "along the seam.",
    u: ["သူ့လက်တွေက ကိုဇင့်အင်္ကျီကို ဆွဲထားတုန်း။",
        "ကျွန်မက အစ်ကို့အင်္ကျီကို အတင်းဆွဲဖြုတ်တယ်။ အင်္ကျီစ ပြဲသွားတယ်။",
        "အရုပ်က ခေါင်မိုးပေါက်ကနေ အပေါ်ကို မြောက်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "There's No Room For You Out There", l: "အထဲ", w: ["အရုပ်"],
    g: "မြောက်သွားတဲ့အချိန် လည်ပင်းက လှည့်လာတယ်။ ပထမဆုံးအကြိမ် စက်သံမပါဘဲ လူ့အသံနဲ့ ပြောတယ်။",
    p: "A doll being carried upward out of frame, her head rotated fully back to look down, the "
      + "painted smile unchanged.",
    u: ["သူ မြောက်သွားတဲ့အချိန် လည်ပင်းက လှည့်လာတယ်။ ကျွန်မတို့ကို ကြည့်တယ်။",
        "ပြီးတော့ ပထမဆုံးအကြိမ် စက်သံမပါဘဲ လူ့အသံနဲ့ ပြောတယ်။",
        "“အပြင်မှာ မင်းတို့အတွက် နေရာမရှိဘူး”"],
    c: [[2, "bigstinger"]] },

  { t: "A Palm Laid Open", l: "အထဲ", w: ["မေ", "ကိုဇင်"],
    g: "အပေါ်က လက်ကြီး ပြန်ဆင်းလာတယ်။ ဒီတစ်ခါ လက်ဖဝါးကို လှန်ထားတယ်။ လမ်းတစ်ခု ချထားသလို။",
    p: "May and Ko Zin, each four inches tall, stand together as an enormous open human palm lowers "
      + "into the dolls'-house room before them. Its relaxed fingers rest like a gentle ramp or road, "
      + "offered rather than grasping.",
    u: ["အဲဒီစကားကို ကျွန်မ ကြောက်ဖို့တောင် အချိန်မရဘူး။",
        "အပေါ်က လက်ကြီး ပြန်ဆင်းလာတယ်။",
        "ဒီတစ်ခါ လက်ဖဝါးကို လှန်ထားတယ်။ ကျွန်မတို့ရှေ့မှာ လမ်းတစ်ခု ချထားသလို။"],
    c: [[2, "stinger"]] },

  { t: "Riding a Palm Upward", l: "အပြင်", w: ["မေ", "ကိုဇင်"],
    g: "လက်ဖဝါးကြောင်းတစ်ကြောင်းချင်းက မြောင်းသေးသေးတွေလို။ အပေါ်ကို မြောက်လာတယ်။",
    p: "Two tiny people seated on an open human palm, the lines of it running past them like "
      + "channels, the room swinging by around them as the hand rises.",
    u: ["ကိုဇင်က အရင်တက်တယ်။ ကျွန်မကို ဆွဲတင်တယ်။",
        "ကျွန်မတို့ လက်ဖဝါးပေါ်မှာ ထိုင်လိုက်ကြတယ်။",
        "လက်ဖဝါးကြောင်းတစ်ကြောင်းချင်းက မြောင်းသေးသေးတွေလို။",
        "အပေါ်ကို မြောက်လာတယ်။ အိမ်ခေါင်မိုးအထက်ကို ရောက်တယ်။"] },

  { t: "Ko Zin", l: "အပြင်", w: ["အပြင်ကကိုဇင်", "ကိုဇင်"],
    g: "ကယ်နေတဲ့လူရဲ့မျက်နှာက — ကိုဇင်။ ပုံမှန်လူအရွယ်။ မျက်နှာဖြူနေတယ်။",
    p: "From the surface of a giant palm, tiny Ko Zin sits in the near foreground with his torn-backed "
      + "shirt visible while an ordinary full-size Ko Zin stares down at him in disbelief. Both faces "
      + "must be recognizably identical; the full-size man's shirt remains completely intact.",
    u: ["ပြီးတော့ ကျွန်မတို့ကို ကယ်နေတဲ့လူရဲ့မျက်နှာကို မြင်လိုက်ရတယ်။ ကိုဇင်။",
        "ကျွန်မဘေးမှာ ထိုင်နေတဲ့ ကိုဇင်ကလည်း အဲဒီမျက်နှာကို မော့ကြည့်နေတယ်။ သူ့ပါးစပ် ပွင့်နေတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "And a Woman With My Face", l: "အပြင်", w: ["အပြင်ကမေ"],
    g: "သူ့နောက်မှာ အမျိုးသမီးတစ်ယောက်။ ကျွန်မမျက်နှာနဲ့။ ကျွန်မ ဝတ်လာတဲ့အင်္ကျီနဲ့။",
    p: "A woman leaning into frame behind the man — the narrator's own face at full size, in the "
      + "same shirt, warm and frightened for them.",
    u: ["အပြင်က ကိုဇင်ကလည်း မျက်နှာဖြူနေတယ်။ အရွယ်ကြီးကြီး။ ပုံမှန်လူအရွယ်။",
        "သူ့လက်ဖဝါးပေါ်မှာ ကျွန်မတို့နှစ်ယောက်။",
        "သူ့နောက်မှာ အမျိုးသမီးတစ်ယောက် ရှိတယ်။ ကျွန်မမျက်နှာနဲ့။ ကျွန်မ ဝတ်လာခဲ့တဲ့ အင်္ကျီနဲ့။"],
    c: [[2, "bigstinger"]] },

  { t: "Even the Hair Behind the Ear", l: "အပြင်", w: ["အပြင်ကမေ"],
    g: "မျက်နှာဘယ်ဘက်က ဆံပင်တွေကို နားနောက်မှာ သိမ်းလိုက်တဲ့အကျင့်အထိ ကျွန်မပဲ။",
    p: "A woman tucking the left side of her hair behind her ear — an ordinary unconscious gesture, "
      + "shot so it reads as a signature.",
    u: ["မျက်နှာဘယ်ဘက်က ဆံပင်တွေကို နားနောက်မှာ သိမ်းလိုက်တဲ့အကျင့်အထိ ကျွန်မပဲ။"],
    c: [[0, "stinger"]] },

  { t: "They Are Us", l: "အပြင်", w: ["အပြင်ကမေ"],
    g: "အမျိုးသမီးက ငုံ့လာတယ်။ မျက်ရည်တွေ ဝဲနေတယ်။ ကျွန်မပြောနေကျအသံအတိုင်း ပြောတယ်။",
    p: "A woman's face lowered close to the camera, eyes wet, speaking gently — kind, not "
      + "frightening.",
    u: ["အမျိုးသမီးက ကျွန်မတို့နားကို ငုံ့လာတယ်။ သူ့မျက်လုံးထဲမှာ မျက်ရည်တွေ ဝဲနေတယ်။",
        "“ကိုဇင်…” သူ ပြောတယ်။ ကျွန်မပြောနေကျအသံအတိုင်း။",
        "“သူတို့က ငါတို့ပဲ”"],
    c: [[2, "bigstinger"]] },

  { t: "Laid on a Piece of Cloth", l: "အပြင်", w: ["မေ", "ကိုဇင်"],
    g: "စားပွဲပေါ်က အဝတ်ပျော့တစ်စပေါ် ချပေးတယ်။",
    p: "Two tiny people set down on a folded soft cloth on a tabletop, the weave of it under them "
      + "like heavy rope, an enormous careful hand withdrawing.",
    u: ["ကျွန်မတို့ကို စားပွဲပေါ်က အဝတ်ပျော့တစ်စပေါ် ချပေးတယ်။"] },

  { t: "Her Leg Was Not Cut", l: "အပြင်", w: ["မေ", "အပြင်ကမေ"],
    g: "ကျွန်မခြေသလုံးက သွေးကို အပြင်က ကျွန်မက မြင်တယ်။ သူ့ခြေထောက်ကို ပြန်ကြည့်တယ်။ ဒဏ်ရာမရှိဘူး။",
    p: "A full-size woman looking down at her own calf and finding it unmarked, while on the cloth "
      + "beside her a tiny version of herself has a bound and bleeding leg.",
    u: ["ကျွန်မ ခြေသလုံးက သွေးကို အပြင်က ကျွန်မက မြင်တယ်။",
        "သူ့ခြေထောက်ကို ပြန်ကြည့်တယ်။ ဒဏ်ရာမရှိဘူး။",
        "အပြင်က ကိုဇင့်အင်္ကျီက မပြဲဘူး။ ကျွန်မဘေးက ကိုဇင့်အင်္ကျီက ပြဲနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "What Did You Eat This Morning", l: "အပြင်", w: ["အပြင်ကမေ", "မေ"],
    g: "အပြင်ကအမျိုးသမီးက မေးတယ်။ ကျွန်မ ပြန်ဖြေတယ်။ သူ့မျက်နှာမှာ အရောင်ပျောက်သွားတယ်။",
    p: "A full-size woman's face draining of colour as she listens to an answer she already knew.",
    u: ["နှစ်ယောက်စလုံး ကျွန်မနာမည်ကို ခေါ်တတ်တယ်။ နှစ်ယောက်စလုံး ကျွန်မတို့အမေ့နာမည် သိတယ်။",
        "အပြင်ကအမျိုးသမီးက ကျွန်မကို မေးတယ်။ “နင်… ဒီမနက် ဘာစားခဲ့လဲ”",
        "ကျွန်မ ပြန်ဖြေတယ်။ သူ့မျက်နှာမှာ အရောင်ပျောက်သွားတယ်။ တူတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "She Knew About the Medicine Money", l: "အပြင်", w: ["အပြင်ကမေ", "မေ"],
    g: "ကျွန်မ ဘယ်သူ့ကိုမှ မပြောဖူးတဲ့ အမေ့ဆေးဖိုးအကြောင်းအထိ သူ သိတယ်။",
    p: "Two women's faces at wildly different scales in one frame, looking at each other with the "
      + "same expression.",
    u: ["မနက်က ကိုဇင်နဲ့ ဘာစကားများခဲ့လဲ။ အိမ်ကထွက်လာတုန်း ဘယ်သူ ဖုန်းဆက်ခဲ့လဲ။",
        "ကျွန်မဘယ်သူ့ကိုမှ မပြောဖူးတဲ့ အမေ့ဆေးဖိုးအကြောင်း။ အကုန် သိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "We Diverged at the Knock", l: "အရုပ်အိမ်",
    g: "အရုပ်အိမ်တံခါးကို ခေါက်လိုက်တဲ့အချိန်အထိ မှတ်ဉာဏ်တွေ အတူတူ။ အဲဒီနောက် ကွဲသွားတာ။",
    p: "The tiny brass knocker on the blue miniature door again, still, in flat daylight — the exact "
      + "point everything forked.",
    u: ["အဲဒီအရုပ်အိမ်တံခါးကို ခေါက်လိုက်တဲ့အချိန်အထိ ကျွန်မတို့နှစ်ယောက်ရဲ့ မှတ်ဉာဏ်တွေ အတူတူ။",
        "အဲဒီနောက်ကစပြီး ကွဲသွားတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "They Never Stopped Working", l: "ဧည့်ခန်း", w: ["အပြင်ကမေ", "အပြင်ကကိုဇင်"],
    g: "အပြင်က ကျွန်မတို့နှစ်ယောက်က အရုပ်အိမ်ကို စစ်ပြီး နောက်အခန်းကို သွားခဲ့ကြတယ်။ ရေသောက်၊ ဖုန်းပြော၊ စာရင်းရေး။",
    p: "Two people at ordinary scale moving calmly through an old house with a clipboard, one on the "
      + "phone, one drinking water — an entirely unremarkable working afternoon.",
    u: ["အပြင်က ကျွန်မတို့နှစ်ယောက်က အရုပ်အိမ်ကို စစ်ကြည့်ပြီး နောက်အခန်းကပစ္စည်းတွေ သွားကြည့်ခဲ့ကြတယ်။",
        "ရေသောက်တယ်။ အလုပ်အကြောင်း ဖုန်းပြောတယ်။ ပစ္စည်းစာရင်း ရေးတယ်။"] },

  { t: "While We Were Running", l: "အရုပ်အိမ်", w: ["မေ", "ကိုဇင်", "အရုပ်"],
    g: "အဲဒီအချိန်တစ်လျှောက်လုံး ကျွန်မတို့က အိမ်သေးသေးထဲမှာ ပြေးနေရတယ်။",
    p: "Wide real-scale view of the quiet dolls' house on its table in the sunlit living room. Through "
      + "one open wall and window, tiny May and Ko Zin are visibly fleeing through a miniature room as "
      + "the towering red-dress doll follows them; the surrounding full-size room remains calm.",
    u: ["အဲဒီအချိန်တစ်လျှောက်လုံး ကျွန်မတို့က အိမ်သေးသေးထဲမှာ ပြေးနေရတယ်။",
        "အရုပ်တစ်ရုပ်ရဲ့လက်ထဲ မပါသွားအောင်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Table Never Vanished", l: "ဧည့်ခန်း", w: ["အပြင်ကမေ", "အပြင်ကကိုဇင်"],
    g: "မနက်က ကျွန်မတို့ရှေ့က စားပွဲ ပျောက်သွားတာ မဟုတ်ဘူး။ ကျွန်မတို့က အဲဒီနေရာမှာ ဆက်ရှိနေခဲ့တယ်။",
    p: "The table with the dolls' house on it, two people standing at it exactly as before, nothing "
      + "out of the ordinary at all.",
    u: ["မနက်က ကျွန်မတို့ရှေ့က စားပွဲ ပျောက်သွားတာ မဟုတ်ဘူး။",
        "စားပွဲရှေ့မှာ ရပ်နေတဲ့ ကျွန်မတို့က အဲဒီနေရာမှာ ဆက်ရှိနေခဲ့တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Another Two of Us Began", l: "အရုပ်အိမ်", w: ["အပြင်ကမေ", "အပြင်ကကိုဇင်"],
    g: "အရုပ်အိမ်ထဲမှာ နောက်ထပ် ကျွန်မတို့နှစ်ယောက် စဖြစ်လာတာ။ မျက်နှာတွေ၊ အသံတွေ၊ အတိတ်တွေကို ယူပြီး။",
    p: "Looking through the front window of the dolls' house: miniature, newly formed copies of May "
      + "and Ko Zin stand together in the front room where no people stood before. Their faces, intact "
      + "clothes and hair exactly match the full-size duplicates outside; the red-dress doll is absent.",
    u: ["အရုပ်အိမ်ထဲမှာ နောက်ထပ် ကျွန်မတို့နှစ်ယောက် စဖြစ်လာတာ။",
        "ကျွန်မတို့ရဲ့ မျက်နှာတွေ၊ အသံတွေ၊ အတိတ်တွေကို ယူပြီး။",
        "အိမ်ထဲမှာ လူရှိနေဖို့။"],
    c: [[2, "bigstinger"]] },

  { t: "Writing Under the Lintel", l: "အရုပ်အိမ်", w: ["အပြင်ကကိုဇင်"],
    g: "အရုပ်အိမ်တံခါးပေါင်အောက်မှာ ခပ်ဟောင်းဟောင်း လက်ရေးနဲ့ စာသေးသေးတစ်ကြောင်း။",
    p: "A magnifying glass held over the underside of a miniature door lintel, a line of very old "
      + "faded handwriting visible on the wood. Deliberately not legible.",
    u: ["အပြင်က ကိုဇင်က အရုပ်အိမ်တံခါးပေါင်အောက်မှာ စာသေးသေးတစ်ကြောင်း တွေ့တယ်။",
        "ခပ်ဟောင်းဟောင်း လက်ရေးနဲ့။",
        "“သမီး တစ်ယောက်တည်း မကစားရအောင်။”"],
    c: [[2, "bigstinger"]] },

  { t: "The Old Woman as a Girl", l: "ဧည့်ခန်း", w: ["အရုပ်"],
    g: "စာအုပ်ထဲက ဓာတ်ပုံဟောင်း။ ကလေးအရုပ်ကို ပိုက်ထားတဲ့ ကောင်မလေး။ အရုပ်လည်ပင်းက အဲဒီပုံထဲမှာလည်း စောင်းနေတယ်။",
    p: "An old black-and-white photograph filling the frame: a small Burmese girl holds the same "
      + "porcelain doll close to her chest. The doll's crimson-red dress reads as dark gray in the old "
      + "photograph, and her neck is already tilted at exactly the same angle.",
    u: ["အိမ်ရှင်အဘွား ငယ်ငယ်ကပုံကိုလည်း စာအုပ်တစ်အုပ်ထဲမှာ တွေ့တယ်။",
        "အနီရောင်ဂါဝန်နဲ့ ကလေးအရုပ်ကို ပိုက်ထားတဲ့ ကောင်မလေး။",
        "အရုပ်ရဲ့ လည်ပင်းက အဲဒီဓာတ်ပုံထဲမှာလည်း နည်းနည်း စောင်းနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Box With a Lid", l: "ဧည့်ခန်း",
    g: "အပြင်က ကိုဇင်က အရုပ်ကို သေတ္တာတစ်လုံးထဲ ထည့်ပိတ်ထားတယ်။ အတွင်းကနေ ကြွေသားနဲ့ သစ်သားထိသံ ခဏခဏ ကြားရတယ်။",
    p: "A wooden crate closed and latched on a floor in daylight, ordinary and unremarkable, "
      + "photographed dead-on and held.",
    u: ["အပြင်က ကိုဇင်က အရုပ်ကို သေတ္တာတစ်လုံးထဲ ထည့်ပိတ်ထားတယ်။",
        "အတွင်းကနေ ကြွေသားနဲ့ သစ်သားထိသံ ခဏခဏ ကြားရတယ်။",
        "တစ်ခါတလေ “အိမ်ထဲမှာ လူရှိရမယ်” ဆိုတဲ့စကား ကြားရတယ်။",
        "ကျွန်မတို့ကတော့ အဲဒီဘက်ကို မကြည့်တော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "She Took Us Home", w: ["မေ", "ကိုဇင်"],
    g: "အပြင်က ကျွန်မက ကျွန်မတို့ကို ကားထဲမှာ လုံလုံခြုံခြုံ ထားပေးတယ်။ အဝတ်ပျော့ပျော့တွေ ခင်းပေးတယ်။",
    p: "Two tiny people nested in folded cloth inside a shallow box on a car seat, a seatbelt drawn "
      + "across the box, daylight through the window.",
    u: ["အပြင်က ကျွန်မက ကျွန်မတို့ကို အိမ်ခေါ်သွားတယ်။",
        "ကျွန်မတို့ကို ကားထဲမှာ လုံလုံခြုံခြုံ ထားပေးတယ်။ အဝတ်ပျော့ပျော့တွေ ခင်းပေးတယ်။",
        "ရေကို အဖုံးသေးသေးတစ်ခုထဲ ထည့်ပေးတယ်။"] },

  { t: "She Cries When I Hurt", l: "မေ့အိမ်", w: ["အပြင်ကမေ", "မေ"],
    g: "သူက ကျွန်မနာတဲ့အခါ မျက်ရည်ကျတယ်။ ကျွန်မလည်း သူ့ကို မုန်းလို့မရဘူး။",
    p: "At tabletop height in May's family home, full-size May bends close with tears on her kind face "
      + "while carefully adjusting the cloth dressing on tiny May's right calf with tweezers. Tiny May "
      + "is fully visible on soft cloth; both women have exactly the same face and clothes.",
    u: ["သူက ကျွန်မနာတဲ့အခါ မျက်ရည်ကျတယ်။ ကျွန်မလည်း သူ့ကို မုန်းလို့မရဘူး။",
        "သူက ကျွန်မပဲ။ တစ်ချိန်တည်းမှာ ကျွန်မ မဟုတ်တော့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Mother Called Her Name", l: "မေ့အိမ်", w: ["မေ"],
    g: "အိမ်ပြန်ရောက်တော့ အမေ့အသံ ကြားရတယ်။ “မေ၊ ပြန်လာပြီလား” ကျွန်မ ချက်ချင်း ထမိတယ်။",
    p: "A tiny woman standing bolt upright in a box on a table, turned toward a doorway, one hand "
      + "raised — utterly unheard.",
    u: ["အိမ်ပြန်ရောက်တော့ အမေ့အသံ ကြားရတယ်။ “မေ၊ ပြန်လာပြီလား”",
        "ကျွန်မ ချက်ချင်း ထမိတယ်။ “အမေ…” လို့ ပြန်ထူးမိတယ်။",
        "ကျွန်မအသံကို အမေ မကြားဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "The Other One Answered", l: "မေ့အိမ်", w: ["အပြင်ကမေ"],
    g: "အပြင်က ကျွန်မက “ပြန်လာပြီ အမေ” လို့ ဖြေတယ်။ ပြီးတော့ အမေ့ဆီ လျှောက်သွားတယ်။",
    p: "From table height: a full-size woman walking away toward an older woman in a doorway, the "
      + "two of them embracing, seen past the blurred edge of a box.",
    u: ["အပြင်က ကျွန်မက “ပြန်လာပြီ အမေ” လို့ ဖြေတယ်။",
        "ပြီးတော့ အမေ့ဆီ လျှောက်သွားတယ်။",
        "အမေက သူ့လက်ထဲကအိတ်ကို ယူပေးတယ်။ နောက်ကျလို့ ပင်ပန်းနေပြီလားလို့ မေးတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Nobody Had Lost Me", l: "မေ့အိမ်", w: ["မေ", "အပြင်ကမေ"],
    g: "ကျွန်မ ဘာမှမပြောနိုင်ဘူး။ ဘယ်သူမှ ကျွန်မကို မပျောက်ဘူး။ ဘယ်သူမှ လိုက်မရှာခဲ့ဘူး။",
    p: "From tiny May's tabletop viewpoint, her small shoulder and bandaged leg are soft in the near "
      + "foreground while the family continues an ordinary warm evening across the enormous room. "
      + "Full-size May belongs naturally among them; nobody looks toward or searches for tiny May.",
    u: ["ကျွန်မ ဘာမှမပြောနိုင်ဘူး။",
        "ကျွန်မတို့ ရုန်းကန်လွတ်မြောက်ခဲ့တဲ့ အပြင်လောကက ဒီအတိုင်းပဲ ဆက်လည်ပတ်နေတယ်။",
        "ဘယ်သူမှ ကျွန်မကို မပျောက်ဘူး။ ဘယ်သူမှ ကျွန်မကို လိုက်မရှာခဲ့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Someone Is Already Holding Her", l: "မေ့အိမ်", w: ["မေ", "အပြင်ကမေ"],
    g: "ကျွန်မ ပြန်သွားချင်ခဲ့တဲ့ အိမ်မှာ ကျွန်မ ရှိနေပြီးသား။ ဖက်ချင်ခဲ့တဲ့ အမေ့ကိုလည်း ကျွန်မတစ်ယောက်က ဖက်ထားပြီးသား။",
    p: "A tiny figure at the edge of a table with one arm outstretched toward two women embracing "
      + "across the room, far out of reach and out of focus.",
    u: ["ကျွန်မ ပြန်သွားချင်ခဲ့တဲ့ အိမ်မှာ ကျွန်မ ရှိနေပြီးသား။",
        "ကျွန်မဖက်ချင်ခဲ့တဲ့ အမေ့ကိုလည်း ကျွန်မတစ်ယောက်က ဖက်ထားပြီးသား။",
        "စားပွဲပေါ်ကနေ ကျွန်မ အမေ့ကို လက်လှမ်းလိုက်မိတယ်။ လက်က မမီဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Because We Are Already There", l: "မေ့အိမ်", w: ["မေ", "ကိုဇင်"],
    g: "နောက်ဆုံးပုံ — ကိုဇင်က ကျွန်မလက်ကို ဖမ်းထားလိုက်တယ်။ စားပွဲစွန်းမှာ နှစ်ယောက်။",
    p: "Final composition: two tiny people on a tabletop, one holding the other's outstretched hand "
      + "and drawing it gently back, the warm lit room beyond them soft and enormous. Hold on the "
      + "two of them.",
    u: ["ဘေးမှာထိုင်နေတဲ့ ကိုဇင်က ကျွန်မလက်ကို ဖမ်းထားလိုက်တယ်။",
        "အဲဒီအချိန်မှ အနီရောင်အရုပ် နောက်ဆုံးပြောခဲ့တဲ့စကားကို ကျွန်မ နားလည်သွားတယ်။",
        "အပြင်မှာ ကျွန်မတို့အတွက် နေရာမရှိဘူး။",
        "ကျွန်မတို့ နေရာတွေမှာ ကျွန်မတို့ ရှိနေပြီးသားမို့လို့။"],
    c: [[3, "finalstinger"]] },
];

// Shot-specific direction is deliberately separate from the short visual premise above.  The
// generator publishes both, so every Flow prompt carries an explicit composition, continuity and
// failure-prevention instruction rather than relying on the model to infer those from narration.
export const DETAILS = [
  /* 1 */ "Extreme interior close-up with the four-inch-wide window filling most of the frame; show one ordinary brown human eye edge-to-edge behind the glass, not a monster eye. Keep the miniature room edge visible as the scale anchor.",
  /* 2 */ "Floor-level medium-wide frame beneath the sill. May and Ko Zin are both four inches tall and pressed flat to the oversized wall; an eyelid crossing the window above creates one hard band of shadow. Ko Zin is protective, not violent, and both are uninjured with intact clothing.",
  /* 3 */ "Compose from inside toward the window with the pupil angled downward as if searching. Keep May and Ko Zin fully concealed below the sill rather than showing anonymous extra people; communicate searching through gaze direction, not motion blur.",
  /* 4 */ "Static low-angle view up the empty toy staircase, with huge wood grain, crude glue seams and an upper landing hidden by the turn. Use negative space and compressed framing for threat; no doll, person, night lighting or written text.",
  /* 5 */ "Three-quarter medium shot in May's practical furniture workshop, not the deceased woman's living room. Show May's recognizable face and uninjured full figure beside the chair, with wax cloth and hand tools secondary; her sage shirt and jeans remain clean and intact.",
  /* 6 */ "Eye-level wide two-shot in the old living room. May photographs an object while Ko Zin writes on the clipboard; keep their faces readable, their clothes intact, and the display-case table visible deeper in the room as the next visual destination.",
  /* 7 */ "Centered wide establishing shot with the display-case table isolated in the middle distance and clutter forming a frame around it. Reflections should obscure only the dolls' house details, not turn the case opaque or supernatural; no people required.",
  /* 8 */ "Real-scale three-quarter product-like view of the complete chest-high dolls' house beneath clear glass. Show the blue door, white frames and furnished rooms together, with ordinary furniture around it proving that it is a miniature.",
  /* 9 */ "View through one front window at real scale. The red-dress doll stands small within the miniature room, full body visible, porcelain and jointed with the permanent neck tilt; do not make her human, decayed, oversized outside the house or damaged yet.",
  /* 10 */ "Medium-wide over-table composition: Ko Zin has already placed the glass cover safely aside while May leans in and touches the tiny brass knocker with one fingertip. Both recognizable faces share a relaxed smile; keep the blue miniature door and size difference clearly readable.",
  /* 11 */ "True macro frame of brass knocker against blue painted wood, with fingertip-sized scale shown by thick paint and shallow focus. Freeze it at contact; do not attempt to visualize sound waves, vibration text or onomatopoeia.",
  /* 12 */ "Wide full-body two-shot immediately after transformation. May and Ko Zin are exactly four inches tall, dwarfed by floorboard grain as wide as paving slabs and toy furniture looming around them; both are uninjured and Ko Zin's shirt is intact. The missing real table and glass case must leave obvious empty space.",
  /* 13 */ "Keep both characters full-body and small in the lower third while the blue door dominates the frame. May and Ko Zin are uninjured with intact clothes; no full-size humans, doll, glass case or ordinary-sized modern door.",
  /* 14 */ "Side-angle medium full-body shot of intact-shirt Ko Zin bracing one foot and shoulder as he pulls the oversized handle. The handle has rotated but the blue toy door remains perfectly flush; oversized brush texture and floor grain preserve four-inch scale.",
  /* 15 */ "Over-May's-shoulder view toward the sealed miniature window. Her uninjured silhouette occupies one edge while perfectly flat white light fills the glass with no horizon, scenery or eye; the painted toy frame and giant grain remain sharp.",
  /* 16 */ "Extreme macro of the false catch with raking daylight revealing raised brush strokes and trapped brush hairs. It must be a flat painted illusion with no projecting metal hardware, hand, text or readable symbol.",
  /* 17 */ "Low three-quarter action frame of intact-shirt Ko Zin striking the door as two separate puffs of oversized dust fall from the ceiling behind him. Freeze the impact cleanly; no visible upstairs figure, doll or supernatural glow.",
  /* 18 */ "Upward-looking ceiling close-up with two distinct dust falls landing in sequence across different joints. Use scale through coarse timber and large dust particles; show no feet, creature, text or night darkness.",
  /* 19 */ "Centered view up the empty staircase with the top landing occluded, not black. Preserve flat afternoon spill light below and let the unanswered empty space carry the voice; no doll hem or person yet.",
  /* 20 */ "Ground-level wide shot beneath a dolls'-house dining table that now looms like full-sized furniture over four-inch May and Ko Zin. Show both crouched close together, uninjured, beneath crude giant glue joints; never describe or render the table as tiny relative to them.",
  /* 21 */ "May-and-Ko-Zin viewpoint from under the table: only the enormous crimson hem, bare porcelain foot and lower rigid leg descend into view. Keep the hidden people off-camera, the doll visibly toy-made and undamaged, and the scale at more than twice their height.",
  /* 22 */ "Clinical side macro on both porcelain knees, with spherical joints and mould seams in crisp focus and red skirt hem above. No flesh, skin pores, wounds, blood or human kneecaps.",
  /* 23 */ "Profile full-leg action frame: the doll advances by swinging one rigid leg from the hip while the spherical knee remains locked straight. Keep porcelain seams and toy stiffness obvious; no natural human walking pose.",
  /* 24 */ "Under-table close-up with the huge porcelain sole stopped beside an oversized table leg. Angle the foot so pressed maker's marks are visible as abstract indentations but impossible to read; preserve the same doll's red hem and undamaged toy material.",
  /* 25 */ "Low point-of-view from the hiding place as the doll hinges only at the waist and places her upside-down porcelain face beneath the table edge. Both legs remain ruler-straight; no flexible spine, hair obscuring the toy face, flesh or gore.",
  /* 26 */ "Symmetrical macro of the doll's glazed face with both glass eyes visible; one eye aims toward camera while the other remains slightly misaligned. The painted smile and neck tilt stay unchanged; no living pupils, wet tissue or facial expression change.",
  /* 27 */ "Extreme macro on the small painted pink smile with visible brush edges and glazed porcelain surrounding it. The mouth remains a flat closed paint mark, never opening, speaking, bleeding or becoming human.",
  /* 28 */ "Dynamic side frame at four-inch scale: intact-shirt Ko Zin drives the heavy dolls'-house table edge into the towering doll's porcelain cheek. Show the table as massive relative to him, the doll rocking back but still undamaged, and no miniature-looking adult furniture.",
  /* 29 */ "Rear three-quarter wide shot of uninjured May and intact-shirt Ko Zin turning sideways to squeeze through the narrow raw opening beneath the staircase. The finished painted room remains behind them while unfinished timber darkness begins ahead.",
  /* 30 */ "Wide establishing frame inside the wall cavity with human-height May-and-Ko-Zin viewpoint but no people required. Enormous nail shafts, frozen glue streams, sawdust boulders and raw timber must prove their four-inch scale without gothic decay.",
  /* 31 */ "Macro of the same doll's undamaged porcelain finger forcing into the cavity, with exactly three moulded rings at the joint and neat pink nail varnish. Surround it with splintered timber for scale; no flesh, blood or extra fingers.",
  /* 32 */ "Tight two-shot in the cavity: Ko Zin kneels and binds May's fresh right-calf cut using a strip torn from a shirt sleeve while a long splinter lies nearby. Keep blood minimal and localized, May's face visible, and Ko Zin's main tan overshirt intact across the back.",
  /* 33 */ "Keep all three scale relationships legible in one deep-focus frame: injured May and intact-shirt Ko Zin small in the cavity foreground, doll more than twice their height in the lit room beyond. The doll remains intact and unmistakably porcelain.",
  /* 34 */ "Wide establishing view of the upstairs bedroom from their four-inch eye height. Child's desk, bed and clock appear human-sized but betray themselves through giant grain, rounded toy edges and glued feet; no people or doll.",
  /* 35 */ "Over-shoulder macro of injured May touching the clock face with one fingertip. Painted hands remain flat under her finger and the raised brush texture is visible; no moving hands, readable numerals or real clock mechanism.",
  /* 36 */ "Tabletop macro of the opened wooden book block, with carved false page lines and one continuous solid interior. Use a hand or giant wood grain only as scale context; no real paper, printed text or readable marks.",
  /* 37 */ "Medium close-up of intact-shirt Ko Zin lifting the rigid wooden pillow with both hands, exposing its flat sanded underside and painted fabric texture. May's calf is already bandaged if she appears; no soft stuffing or real cloth pillow.",
  /* 38 */ "Dutch-angle wide shot as injured May and intact-shirt Ko Zin slide across the tilted room and grab fixed walls. Every chair, desk and bed remains perfectly glued in place despite the tilt; avoid floating objects or a collapsing house.",
  /* 39 */ "Window-facing close-up timed to the reveal: ordinary skin and eyelashes press behind the small glass until one brown eye fills it. Keep the eye anatomically normal and the surrounding toy frame visible; no monster distortion.",
  /* 40 */ "Floor-level two-shot below the sill after the eye withdraws. Injured May and intact-shirt Ko Zin remain frozen against the oversized wall while featureless white light returns above; no eye remains in the window.",
  /* 41 */ "Side-lit wall close-up showing a fine sheet of oversized dust shaken loose simultaneously across joints. Convey low-frequency vibration through dust and subtle blur only; no visible sound waves, lettering or speaker yet.",
  /* 42 */ "Medium two-shot beneath the window: intact-shirt Ko Zin presses his palm against a huge dried-glue ridge while looking to injured May for confirmation. Include both faces and broad toy construction cues; the realization should be quiet, not theatrical.",
  /* 43 */ "Injured May's viewpoint through the tiny window toward a dark speaker silhouette in the white-lit real room. Make the grille slots and cable recognizable as clues without showing a brand, controls, text or full-size person.",
  /* 44 */ "Extreme low-angle exterior shot from four inches above the tabletop. The portable speaker towers like an office block, with grille openings like doors and its cable like a thick hose; no tiny characters are necessary and no brand text is visible.",
  /* 45 */ "Tight portrait of injured May in the dolls'-house room, her eyes widened in precise stunned recognition rather than generic fear. Keep huge grain and the flat white window soft behind her, with no double exposure or literal thought imagery.",
  /* 46 */ "Real-scale overhead three-quarter view of the complete dolls' house on its table as anonymous ordinary hands rotate it slightly. Show the house moving as one rigid object; no giant interior room reference, supernatural force or visible duplicate faces.",
  /* 47 */ "View downward from the upper landing as the intact red-dress doll begins climbing from below, one rigid porcelain leg and enormous hem entering first. Injured May and intact-shirt Ko Zin remain off-camera; doll hand still unchipped.",
  /* 48 */ "Wide symmetrical shot of the upstairs room shaped like a sealed box: one door behind, one white window ahead and no alternate opening. Oversized grain and glued furniture prove scale; keep daylight flat rather than turning the room dark.",
  /* 49 */ "Medium action frame of intact-shirt Ko Zin wrenching a leg from a glued chair, raw pale splinters breaking at the joint. He remains four inches tall and the chair reads as toy construction at his scale; no doll in frame.",
  /* 50 */ "Impact macro on the toy window as the wooden chair leg creates one short clean crack. Show the stick and Ko Zin's hands only if needed; no shattered pane, explosive glass, text or multiple cracks.",
  /* 51 */ "Frontal medium-wide shot of injured May standing fully exposed at the window, waving both arms above her head as an ordinary giant brown eye fills the glass. Her scale and bandaged right calf are visible; she is determined, not screaming.",
  /* 52 */ "Macro on the ordinary eye recoiling from the window, iris shifted and upper lid raised in surprise. Preserve normal anatomy and capillaries; communicate recoil with framing, not grotesque distortion or motion trails.",
  /* 53 */ "Upward interior view as all roof joints release dust at once under a gentle external touch. Keep the room intact, afternoon light constant and no visible hand yet; no collapse, night or magical glow.",
  /* 54 */ "Full-body doll on the staircase frozen mid-step, intact hand lowered and tilted head listening upward. Emphasize the fixed painted smile and neck seam; no changed facial expression, flesh or chipped hand yet.",
  /* 55 */ "Wide interior frame as the roof panel lifts and a clean blade of real afternoon daylight widens overhead. Injured May and intact-shirt Ko Zin are small below only if composition allows; no night sky, explosion or broken roof debris.",
  /* 56 */ "Low-angle action two-shot: intact-shirt Ko Zin braces and boosts injured May by the waist toward the widening roof gap. Her hands catch the raw wall top and her right-calf bandage remains visible; preserve their four-inch scale against giant fingers outside.",
  /* 57 */ "Frontal doorway shot of the intact doll forcing forward while her porcelain crown jams under the lintel. Her full rigid body and straight knees show why she cannot fit; do not enlarge the doorway or make her flesh.",
  /* 58 */ "Three-quarter medium shot after the mechanical fold: the doll's porcelain head lies exactly sideways on one shoulder, painted smile vertical and neck-joint seam open as a dry toy gap. No broken flesh, exposed organs, gore or rubber neck.",
  /* 59 */ "Layered action frame: intact-shirt Ko Zin strikes the doll's huge unchipped hand aside with the chair leg while her other porcelain hand closes on his shoulder from behind. Keep injured May near the escape edge and avoid extra arms or ambiguous ownership.",
  /* 60 */ "Tight horizontal composition on injured May hanging from the wall top and intact-shirt Ko Zin being pulled away below; their fingertips make one final light contact at frame center. Show the spatial separation clearly with no fused or extra fingers.",
  /* 61 */ "Upward portrait of intact-shirt Ko Zin pinned by a porcelain hand, looking directly toward injured May above with calm certainty. His mouth is open in one urgent command, but include no written word, subtitle or speech bubble.",
  /* 62 */ "Wide vertical action within the 16:9 frame: injured May releases the wall top and falls back toward Ko Zin while the bright opening recedes above. Her body is fully visible and controlled, not tumbling grotesquely; maintain the right-calf bandage.",
  /* 63 */ "Macro at the moment the doll's hand hits the wall: one small glazed shard separates, revealing dry matte ceramic beneath. The damage is limited to one hand; absolutely no blood, flesh, wetness or damage elsewhere.",
  /* 64 */ "High-angle action frame from inside: an ordinary giant thumb and forefinger gently but firmly close around the same doll's rigid torso and lift her. Show her red dress, porcelain body and newly chipped hand; the human hand is kind, clean and not crushing her.",
  /* 65 */ "Close action shot of injured May pulling Ko Zin's tan overshirt out of the doll's chipped porcelain grip. The back seam tears open in this exact frame while his skin remains uninjured; no blood, missing limb or already-detached clothing.",
  /* 66 */ "Low-angle view of the doll rising toward the roof opening in giant fingers, chipped hand visible, head mechanically rotated backward to stare down. Her painted smile never changes and the spoken line must not appear as text.",
  /* 67 */ "Keep injured May and torn-shirt Ko Zin small but clearly visible before the offered palm. The palm's relaxed posture and clean afternoon light must communicate rescue, with no grabbing fingers, menace or doll.",
  /* 68 */ "Macro-wide shot on the rising palm: injured May and torn-shirt Ko Zin sit together between enormous skin creases like drainage channels. Show the dolls' house roof dropping away beneath them and avoid revealing the rescuer's face yet.",
  /* 69 */ "Use forced scale in one frame: tiny torn-shirt Ko Zin on the palm at lower edge and the identical full-size intact-shirt Ko Zin filling the upper background. Their matching facial structure is essential; both are shocked, neither is sinister.",
  /* 70 */ "Tiny-May point of view from the palm as full-size May leans gently into frame behind full-size Ko Zin. Her exact matching face, sage shirt and left hair tuck are readable; tiny May stays off-camera so the reveal remains subjective.",
  /* 71 */ "Medium close-up of full-size May making the unconscious left-side hair tuck. Keep her face warm, ordinary and unchanged from both May references; use the giant scale only through the low palm-height camera, not distorted anatomy.",
  /* 72 */ "Close palm-height portrait of full-size May lowering her face and speaking softly with wet worried eyes. Natural household kindness is the point; no horror lighting, predatory smile, extreme lens distortion or uncanny duplicate effect.",
  /* 73 */ "Wide tabletop frame as a giant careful hand finishes placing injured May and torn-shirt Ko Zin on folded cloth. The cloth weave is rope-thick beneath them, both tiny people are fully visible, and the hand withdraws open and gentle.",
  /* 74 */ "Split-depth comparison in one frame: full-size May checks her clean uninjured right calf while tiny May sits on the cloth with the same calf wrapped in a lightly blood-stained bandage. Show matching faces and clothes; no exposed wound or gore.",
  /* 75 */ "Over-tiny-May's-shoulder shot toward full-size May as recognition drains the color from her face. Include enough of tiny May's matching profile and giant cloth weave to establish the two scales; expressions should mirror rather than become theatrical.",
  /* 76 */ "Balanced profile two-shot with tiny injured May on the cloth facing full-size uninjured May at eye level across the scale gap. Their faces and expressions must be identical, with the private shared memory conveyed through recognition only; no text or medicine imagery.",
  /* 77 */ "Macro callback to the same brass knocker and blue miniature door in flat daylight. Keep it perfectly still and visually identical to shot 11, but without a fingertip; no split screen, timeline graphic, text or supernatural glow.",
  /* 78 */ "Natural observational wide shot of full-size May and full-size Ko Zin continuing inventory work in another part of the old house. Both clothes are intact, they act calm and ordinary, and no tiny people or doll are visible.",
  /* 79 */ "Use a physically plausible open-front dolls'-house view rather than an abstract split screen. The surrounding room is tranquil while, inside one clearly visible miniature room, injured May and torn-shirt Ko Zin flee the chipped-hand doll; keep all figures readable but small.",
  /* 80 */ "Recreate the pre-transformation table composition at real scale with full-size uninjured May and intact-shirt Ko Zin standing normally beside the dolls' house. Everything is ordinary and continuous; no tiny originals are visible outside the house.",
  /* 81 */ "Frame through the dolls'-house window at real scale, with the newly formed tiny copies centered and recognizable as uninjured May and intact-shirt Ko Zin. They should look newly present and still, not translucent, ghostly, doll-like or wounded.",
  /* 82 */ "True macro under the blue door lintel: full-size Ko Zin's careful fingers hold a magnifying glass over one faded handwritten line. Keep the writing visibly old but deliberately unreadable and omit invented Burmese letters, captions or translation.",
  /* 83 */ "Make the physical aged photograph the entire composition, with worn paper edges and monochrome grain. Preserve the doll's exact porcelain face, collar, dress silhouette and neck tilt while rendering the red fabric as a dark gray tone; no modern color except outside the photo edge.",
  /* 84 */ "Dead-center locked composition of a plain wooden crate with lid fully closed and metal latch secured in the old living room. Keep it inert in daylight; no doll part, movement line, face, text, blood or ominous supernatural glow.",
  /* 85 */ "Car-seat-level medium-wide shot. Injured May and torn-shirt Ko Zin are exactly four inches tall, safely nested in cloth inside the shallow box; giant seat upholstery, belt buckle and bottle-cap-sized water dish prove scale. No old-house objects or full-size person in frame.",
  /* 86 */ "Focus on the two identical May faces at radically different scales, with the tweezers and right-calf dressing secondary. Full-size May is openly compassionate, tiny May is exhausted but receptive, and the home remains warm rather than frightening.",
  /* 87 */ "Low tabletop medium shot of tiny injured May springing upright in the box and reaching toward the enormous home doorway. Her mouth is open in reply and the distant older woman remains only a soft silhouette; no one turns toward tiny May.",
  /* 88 */ "From the same low tabletop axis, show full-size May walking to her ordinary older mother and accepting the bag before a warm embrace. The blurred box edge anchors tiny May's viewpoint; both women are natural and unaware, never sinister.",
  /* 89 */ "Use deep spatial separation: tiny injured May isolated at the near table edge while full-size May participates in the family group far across the warm room. The family is not cruel; their normal ease and failure to search create the tragedy.",
  /* 90 */ "Tight foreground on tiny injured May reaching from the table edge, with her small hand sharp and the distant embrace between full-size May and her mother recognizable but soft. Maintain the exact duplicate face and sage shirt; no impossible stretched arm or eye contact.",
  /* 91 */ "Final low tabletop wide shot: torn-shirt Ko Zin sits beside injured May and gently draws her reaching hand back into his. Keep both tiny figures sharp against the immense warm family room fading softly behind them; quiet resignation, no doll, no full-size duplicate foreground and no horror effect.",
];

if (DETAILS.length !== SCENES.length)
  throw new Error(`eye detail count ${DETAILS.length} does not match scene count ${SCENES.length}`);
SCENES.forEach((scene, i) => { scene.d = `Detailed scene direction: ${DETAILS[i]}`; });
