/**
 * ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * THE RULE THIS STORY LIVES OR DIES BY: the tank is DRY. Every shot inside it
 * must show dry dust, dry concrete, dry footprints. The water is only ever in
 * one place at a time — a mouth, a shoe, a sole — and never on the floor. A
 * prompt that floods the tank throws the entire story away, so the style block
 * says so and the shot prompts repeat it.
 */

import { reviewDrown } from './review-drown.mjs';
export const CAST = [
  { name: "ကျွန်တော်", en: "The narrator — pipe and pump repairman",
    prompt: "A Burmese man of about forty, solid build, short practical hair, a worn work shirt with "
      + "the sleeves rolled, cargo trousers, a headlamp pushed up on his forehead. Competent and "
      + "unglamorous — a tradesman who has been into a hundred confined spaces and is careful about it." },
  { name: "မောင်လင်း", en: "Maung Lin — his assistant, twenty-two",
    prompt: "A Burmese man of twenty-two, tall and very thin, close-cropped hair, an open talkative "
      + "face, a loose work shirt too big for him and a safety harness over it. Young enough to still "
      + "find the job funny." },
  { name: "ဦးသောင်း", en: "U Thaung — the building caretaker",
    prompt: "A Burmese man in his sixties, thin, grey stubble, a faded shirt and longyi, a heavy ring "
      + "of many keys hanging at his waist. He never stands near the tank opening. Watchful and afraid "
      + "rather than sinister." },
];

export const LOCS = [
  { name: "ဂိုဒေါင်", en: "The warehouse floor above the tank",
    prompt: "The ground floor of an old converted Yangon print works now used as a warehouse: bare "
      + "concrete, stacked pallets and sacks, steel roof pillars, dusty light falling in shafts from "
      + "high windows. In the middle of the floor a section of slab has been lifted, exposing a round "
      + "iron hatch." },
  { name: "ရေကန်ထဲ", en: "Inside the underground tank",
    prompt: "The inside of a disused underground concrete water tank about twenty feet by fifteen and "
      + "ten deep: three square brick pillars holding up the ceiling slab, old capped pipes along the "
      + "walls, a portable work light on the floor throwing hard shadows. ⚠️ COMPLETELY DRY — fine pale "
      + "dust over everything, dry footprints, no water, no damp, no puddles, no dripping, no algae." },
  { name: "သံပြား", en: "The bolted iron plate",
    prompt: "A round inspection opening in a tank wall about the size of a person's head, covered by a "
      + "riveted steel plate flush against the concrete with no gap anywhere around its edge. Burmese "
      + "words are scratched into the rusted metal." },
  { name: "ဆေးရုံ", en: "The hospital room",
    prompt: "A plain Myanmar public hospital ward: a metal bed, a thin blanket, an oxygen line, a "
      + "barred window with flat daylight, pale green walls." },
  { name: "အိပ်ခန်း", en: "The narrator's room",
    prompt: "A small plain rented room in Yangon: a low bed, a fan, a window with the curtain shut, "
      + "one bare bulb, a bathroom door visible and closed. Lived in alone." },
];

export const STYLE =
  "Present-day Yangon, Myanmar. An old three-storey colonial-era building converted to a warehouse, and "
  + "the disused underground water tank beneath it. Industrial working horror, not gothic: hard portable "
  + "work lights, headlamps, safety harnesses, dust in the beam, concrete and rusted steel. Cinematic "
  + "photorealism, 35mm film grain, shallow depth of field, 16:9, desaturated cool palette with hard "
  + "practical light sources. ⚠️ THE TANK IS DRY — dust, dry concrete, dry footprints; never flood it, "
  + "never add puddles, damp walls, dripping or reflections. Water appears ONLY where a shot explicitly "
  + "calls for it. NEVER show a complete or clearly lit figure, a corpse, a skeleton or gore: what is "
  + "down there is shown as fingers, a dent, a movement, a disturbance in dust — never a body. No "
  + "legible text, numbers, captions or watermarks anywhere in the image.";

export const SCENES = [
  { t: "They Pumped Water Out of His Lungs", l: "ဆေးရုံ", w: ["မောင်လင်း"],
    g: "ဆေးရုံ။ မောင်လင်းကို အောက်ဆီဂျင် တပ်ထားတယ်။ မျက်လုံးမှိတ်ထား။",
    p: "A young man unconscious on a hospital bed with an oxygen mask over his face, medical staff "
      + "hands at the edge of frame, flat clinical daylight.",
    u: ["မောင်လင်းကို ဆေးရုံပို့တဲ့အချိန်မှာ သူ့အဆုတ်ထဲက ရေတွေကို စုပ်ထုတ်ခဲ့ရတယ်။",
        "ဆရာဝန်က ဘယ်နေရာမှာ ရေနစ်လာတာလဲလို့ မေးတယ်။",
        "ကျွန်တော် မဖြေနိုင်ဘူး။"] },

  { t: "The Tank Was Dry", l: "ရေကန်ထဲ",
    g: "ရေကန်ကြမ်းပြင်။ လုံးဝ ခြောက်နေတယ်။ ဖုန်တွေပဲ။",
    p: "The floor of an empty underground concrete tank lit by a work lamp: fine pale dust, dry "
      + "cracked concrete, absolutely no moisture anywhere.",
    u: ["ဘာလို့လဲဆိုတော့ ကျွန်တော်တို့ ဆင်းခဲ့တဲ့ ရေကန်က ခြောက်နေတာ။",
        "ကြမ်းပြင်မှာ ရေတစ်စက်မှ မရှိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "I Watched Him Drown", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်းရဲ့မျက်နှာ တစ်ပေလောက်အကွာ။ ရေထဲမှာလို။ ဒါပေမယ့် ခြောက်နေတဲ့ကန်ထဲ။",
    p: "A young man's face very close to camera in a dry dusty tank, eyes wide and hair floating "
      + "upward as though submerged, though the air around him is visibly full of dust, not water.",
    u: ["မောင်လင်း ရေနစ်နေတာကို ကျွန်တော် မြင်ခဲ့တယ်။ ရေမရှိတဲ့နေရာမှာ။",
        "မျက်နှာက ကျွန်တော့်မျက်နှာနဲ့ တစ်ပေလောက်ပဲ ဝေးတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Bubbles Fell", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "ပါးစပ်ထဲက ရေပူဖောင်းတွေ ထွက်လာတယ်။ အပေါ်မတက်ဘဲ အောက်ကို ကျသွားတယ်။",
    p: "Extreme close-up of a mouth in dry air with clear bubbles emerging from it, hanging "
      + "motionless in mid-air, and beginning to fall downward instead of rising.",
    u: ["သူ့ပါးစပ်ထဲက ရေပူဖောင်းတွေ တစ်လုံးပြီးတစ်လုံး ထွက်လာတယ်။",
        "အပေါ်ကို တက်မသွားဘူး။",
        "လေထဲမှာ ခဏရပ်နေပြီး အောက်ကို ကျသွားကြတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Fix Pipes", l: null, w: ["ကျွန်တော်"],
    g: "ကိရိယာတွေနဲ့ အလုပ်လုပ်နေတဲ့ လက်တွေ။ ရေစုပ်စက်တစ်လုံး။",
    p: "Work-roughened hands turning a wrench on a pump housing in an ordinary daylight workshop, "
      + "tools laid out, entirely mundane.",
    u: ["ကျွန်တော်က ရေပိုက်နဲ့ ရေစုပ်စက် ပြင်တဲ့အလုပ် လုပ်တယ်။"] },

  { t: "Maung Lin", l: null, w: ["မောင်လင်း"],
    g: "မောင်လင်း အလုပ်ခွင်မှာ ရယ်နေတယ်။ အသက်နှစ်ဆယ့်နှစ်။",
    p: "A tall thin young man in a loose work shirt laughing at something off-frame while coiling a "
      + "hose, ordinary bright daylight.",
    u: ["မောင်လင်းက ကျွန်တော့်နောက် လိုက်လုပ်နေတဲ့ကောင်လေး။ အသက်နှစ်ဆယ့်နှစ်နှစ်။",
        "အရပ်ရှည်ရှည်၊ ပိန်ပိန်နဲ့ စကားများတယ်။",
        "သူနဲ့ အလုပ်လုပ်ရင် ပင်ပန်းပေမယ့် ပျင်းဖို့မရှိဘူး။"] },

  { t: "I Had to Beg to Hear It Again", l: null,
    g: "ဗလာဖြစ်နေတဲ့ အလုပ်ခွင်။ ကိရိယာတွေပဲ ကျန်နေတယ်။",
    p: "An empty workbench with two sets of tools on it, one clearly untouched for a long time, in "
      + "dull afternoon light.",
    u: ["အဲဒီနေ့ကတော့ သူ့အသံကို ပြန်ကြားဖို့ ကျွန်တော် တောင်းပန်ခဲ့ရတယ်။"],
    c: [[0, "stinger"]] },

  { t: "An Old Building", l: null,
    g: "ရန်ကုန်မြို့ထဲက သုံးထပ်တိုက်ဟောင်း။ အောက်ထပ်က ဂိုဒေါင်။",
    p: "A three-storey colonial-era Yangon building from the street: stained plaster, shuttered upper "
      + "windows with laundry, a wide roller door at ground level standing open onto darkness.",
    u: ["ကျွန်တော်တို့ သွားရတဲ့နေရာက ရန်ကုန်မြို့ထဲက တိုက်ဟောင်းတစ်လုံး။ သုံးထပ်တိုက်။",
        "အောက်ဆုံးထပ်က အရင်က ပုံနှိပ်စက်ရုံ။ အခု ဂိုဒေါင်လုပ်ထားတယ်။ အပေါ်နှစ်ထပ်မှာ လူနေခန်းတွေ ရှိတယ်။"] },

  { t: "Nobody Knew How Long It Had Been Shut", l: "ဂိုဒေါင်",
    g: "ဂိုဒေါင်ကြမ်းခင်း တစ်စိတ်တစ်ပိုင်း ဖယ်ထားတယ်။ အောက်မှာ အမှောင်။",
    p: "A section of concrete warehouse floor broken open with rubble pushed aside, revealing dark "
      + "space beneath, work lights rigged around the edge.",
    u: ["အဆောက်အအုံပြင်ဖို့ ကြမ်းခင်းဖော်ရင်း မြေအောက်ရေလှောင်ကန်တစ်ခု တွေ့တယ်။",
        "ဘယ်နှနှစ်ကတည်းက ပိတ်ထားလဲ ဘယ်သူမှ မသိဘူး။"] },

  { t: "A Small Job", l: "ဂိုဒေါင်",
    g: "ကိရိယာအိတ်တွေ ချထားတယ်။ သာမန်အလုပ်တစ်ခုလိုပဲ။",
    p: "Tool bags, a coil of air hose and a gas meter set down on a dusty warehouse floor beside an "
      + "opening, ordinary preparation for a routine job.",
    u: ["ကန်ထဲက ပိုက်ဟောင်းတွေကို ဖြုတ်ပေးဖို့၊ အက်ကြောင်းရှိမရှိ စစ်ပေးဖို့ ကျွန်တော်တို့ကို ခေါ်တာ။",
        "အလုပ်သေးသေးပဲ ထင်ခဲ့တယ်။"] },

  { t: "The Iron Hatch", l: "ဂိုဒေါင်",
    g: "သံအဖုံးဝိုင်းကြီးတစ်ချပ်။ အနားပတ်လည်ကို ဘိလပ်မြေနဲ့ ပိတ်ထားတယ်။",
    p: "A large round iron hatch set into a concrete floor, its rim thickly sealed with layers of "
      + "old cement, chisel marks where someone has begun breaking it free.",
    u: ["ရောက်သွားတော့ ဂိုဒေါင်အလယ်မှာ ကြမ်းခင်းတစ်စိတ်တစ်ပိုင်း ဖယ်ထားတယ်။",
        "အောက်မှာ သံအဖုံးဝိုင်းကြီးတစ်ချပ်။",
        "အဖုံးအနားကို ဘိလပ်မြေနဲ့ ပတ်ပိတ်ထားခဲ့တာ။"] },

  { t: "Three Layers", l: "ဂိုဒေါင်",
    g: "ဘိလပ်မြေအလွှာတွေကို အနီးကပ်။ အဟောင်းပေါ် အသစ်ထပ်လောင်း၊ အနည်းဆုံး သုံးထပ်။",
    p: "Extreme close-up of a broken cement seal in cross-section, showing three distinct layers of "
      + "different ages poured one on top of another over many years.",
    u: ["ပိတ်ထားတာလည်း တစ်ထပ်တည်း မဟုတ်ဘူး။",
        "အဟောင်းပေါ်မှာ အသစ်ထပ်လောင်းထားတာ အနည်းဆုံး သုံးထပ်ရှိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "To Keep the Rats Out", l: "ဂိုဒေါင်", w: ["မောင်လင်း", "ဦးသောင်း"],
    g: "မောင်လင်းက မျက်မှောင်ကြုတ်တယ်။ ဦးသောင်းက အဝေးမှာ ရပ်နေတယ်။",
    p: "A young worker frowning down at a sealed hatch while an older man with keys at his belt "
      + "answers from a noticeable distance away, not approaching it.",
    u: ["မောင်လင်းက မျက်မှောင်ကြုတ်တယ်။",
        "“ရေကန်အဖုံးကို ဘာလို့ ဒီလောက်ပိတ်ထားတာလဲ”",
        "အဆောက်အအုံကြီးကြပ်တဲ့ ဦးသောင်းက “ကြွက်ဝင်လို့နေမှာပေါ့” လို့ ဖြေတယ်။"] },

  { t: "He Never Came Near It", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "ဦးသောင်း။ ခါးမှာ သော့တွေအများကြီး။ အဖုံးနားကို မလာဘူး။",
    p: "An older caretaker standing well back against a pillar with a heavy bunch of keys at his "
      + "waist, arms folded, looking at the open hatch from as far away as the room allows.",
    u: ["သူက အသက်ခြောက်ဆယ်ကျော်။ သော့တွေအများကြီး ခါးမှာချိတ်ထားတယ်။",
        "အဖုံးနားကိုတော့ မလာဘူး။"],
    c: [[1, "stinger"]] },

  { t: "I Don't Cut Corners", l: "ဂိုဒေါင်", w: ["ကျွန်တော်"],
    g: "လေတိုင်းစက်၊ လေသွင်းပိုက်၊ လုံခြုံရေးကြိုးတွေ စစ်နေတယ်။",
    p: "Hands checking a gas detector and an air blower, safety harness and rope laid out neatly on "
      + "the floor beside an open hatch. Methodical, professional.",
    u: ["မြေအောက်ကန်ထဲ ဆင်းတဲ့အလုပ်ဆို ကျွန်တော် ပေါ့ပေါ့မလုပ်ဘူး။",
        "လေတိုင်းစက်ချတယ်။ လေသွင်းပိုက်ထည့်တယ်။ အပေါ်မှာ လူတစ်ယောက် စောင့်ခိုင်းတယ်။",
        "အဲဒီနေ့လည်း စက်တွေက ပုံမှန်ပဲ။"] },

  { t: "It's Dry Down There", l: "ဂိုဒေါင်", w: ["မောင်လင်း"],
    g: "မောင်လင်းက အပေါက်ထဲ မီးထိုးကြည့်တယ်။ အောက်မှာ ခြောက်နေတယ်။",
    p: "A young man kneeling at the edge of an open hatch shining a torch down into it, the beam "
      + "landing on plain dry dusty concrete far below.",
    u: ["မောင်လင်းက အောက်ကို မီးထိုးကြည့်တယ်။",
        "“ခြောက်နေတာပဲ အစ်ကို”"] },

  { t: "Twenty by Fifteen, Ten Deep", l: "ရေကန်ထဲ",
    g: "ရေကန်အတွင်း အကျယ်။ အုတ်တိုင်သုံးတိုင်။",
    p: "A wide view of the empty tank interior from the hatch: three square brick pillars supporting "
      + "the ceiling slab, capped pipes along the walls, everything grey and dry.",
    u: ["ရေကန်က အလျားပေနှစ်ဆယ်လောက်၊ အနံဆယ့်ငါးပေလောက် ရှိတယ်။ အနက်က ဆယ်ပေလောက်။",
        "အုတ်တိုင်သုံးတိုင်က အပေါ်ကြမ်းခင်းကို ထောက်ထားတယ်။"] },

  { t: "Our Own Ladder", l: "ဂိုဒေါင်",
    g: "သံချေးတက်နေတဲ့ လှေကားဟောင်း။ ဘေးမှာ ကိုယ့်လှေကား ချထားတယ်။",
    p: "A rusted iron ladder fixed to a tank wall with several rungs eaten through, and a new "
      + "aluminium ladder being lowered alongside it.",
    u: ["လှေကားက သံချေးတက်နေပြီဆိုတော့ ကိုယ့်လှေကားကိုယ် ချတယ်။"] },

  { t: "Dust Rose", l: "ရေကန်ထဲ", w: ["ကျွန်တော်"],
    g: "ခြေထောက် မြေထိတာနဲ့ ဖုန်ထတယ်။ ဒါက အရေးကြီးတယ်။",
    p: "A boot touching down on the tank floor and a visible puff of pale dust rising around it, "
      + "caught sharply in the work-light beam.",
    u: ["ကျွန်တော် အရင်ဆင်းတယ်။",
        "ခြေထောက်မြေထိတာနဲ့ ဖုန်ထတယ်။",
        "အဲဒီအချက်ကို ကျွန်တော် သေချာမှတ်မိတယ်။",
        "ဖုန်တောင် ထတယ်။ ရေမရှိဘူး။"],
    c: [[3, "stinger"]] },

  { t: "Both of Us Down", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်း လှေကားကနေ ဆင်းလာတယ်။ အပေါ်က အလင်းဝိုင်း။",
    p: "Looking up from the tank floor as a second worker climbs down the ladder, silhouetted "
      + "against the bright circle of the hatch far above.",
    u: ["မောင်လင်းက အပေါ်ကနေ ကိရိယာအိတ် ချပေးတယ်။",
        "ပြီးတော့ သူ ဆင်းလာတယ်။"] },

  { t: "Finish Before Twelve", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "ဦးသောင်းက အဖုံးဝနားမှာ ထိုင်စောင့်နေတယ်။ အပေါ်ကနေ မြင်ရတဲ့ပုံ။",
    p: "An older man seated cross-legged on the warehouse floor a little way back from the hatch "
      + "rim, looking down into it, keys in his lap.",
    u: ["ဦးသောင်းက အဖုံးဝနားမှာ ထိုင်စောင့်တယ်။",
        "“ဆယ့်နှစ်နာရီမထိုးခင် ပြီးအောင်လုပ်နော်” လို့ ပြောတယ်။",
        "“ဘာလို့လဲ” “အလုပ်သမားတွေ ထမင်းစားလာကြမယ်။ အပေါက်ကြီးဖွင့်ထားရင် အန္တရာယ်ရှိလို့”"] },

  { t: "Ten Forty", l: "ရေကန်ထဲ",
    g: "လက်ပတ်နာရီ။ မနက်ဆယ်နာရီလေးဆယ်။",
    p: "A wristwatch on a dusty forearm read by torchlight, the hands clearly showing ten forty.",
    u: ["ကျွန်တော် နာရီကြည့်လိုက်တယ်။ မနက်ဆယ်နာရီလေးဆယ်။ အချိန်လုံလောက်တယ်။"] },

  { t: "Every Pipe Already Capped", l: "ရေကန်ထဲ",
    g: "ရေဝင်ပိုက်၊ ရေထွက်ပိုက် အကုန် ဖြတ်ပိတ်ထားပြီးသား။",
    p: "Old iron pipes entering a tank wall, every one of them cut short and welded shut long ago, "
      + "the welds themselves rusted with age.",
    u: ["ရေကန်ထဲမှာ ထူးခြားတာ ပထမဆုံးမြင်တာက ပိုက်တွေ။",
        "ရေဝင်ပိုက်၊ ရေထွက်ပိုက် အကုန် ဖြတ်ပိတ်ထားပြီးသား။"],
    c: [[1, "stinger"]] },

  { t: "An Opening the Size of a Head", l: "သံပြား",
    g: "နံရံမှာ အပေါက်ဝိုင်းငယ်တစ်ခု။ သံပြားနဲ့ ဖုံး၊ သံချောင်းတွေ ရိုက်ထားတယ်။",
    p: "A round steel plate bolted flush over an opening in a concrete wall, roughly the size of a "
      + "human head, its rivets heavily rusted, no gap at any edge.",
    u: ["ကန်နံရံတစ်ဖက်မှာတော့ အပေါက်ဝိုင်းငယ်ငယ်တစ်ခု ရှိတယ်။ လူတစ်ယောက် ခေါင်းလောက် အရွယ်။",
        "အပေါက်ကို သံပြားနဲ့ ဖုံးထားပြီး ဘေးပတ်လည်ကို သံချောင်းတွေ ရိုက်ထားတယ်။"] },

  { t: "No One Inside", l: "သံပြား",
    g: "သံပြားပေါ်မှာ ခြစ်ရေးထားတဲ့ စာ။ သံချေးဖုံးနေတယ်။ မီးကပ်ကြည့်မှ ဖတ်ရတယ်။",
    p: "Extreme close-up of Burmese words crudely scratched into rusted steel, raked by a hard "
      + "torch beam so the letters are just readable through the corrosion.",
    u: ["သံပြားအပေါ်မှာ အက္ခရာတွေ ခြစ်ရေးထားတယ်။",
        "သံချေးနဲ့ ဖုံးနေလို့ အစမှာ မဖတ်ရဘူး။",
        "ကျွန်တော် မီးကပ်ကြည့်လိုက်တယ်။",
        "အထဲမှာ လူမရှိ။ အဲဒီစကားပဲ။"],
    c: [[3, "bigstinger"]] },

  { t: "Who Would Look for a Person in a Water Tank", l: "သံပြား", w: ["မောင်လင်း"],
    g: "မောင်လင်း ဖတ်ပြီး ရယ်တယ်။",
    p: "A young man laughing at a scratched inscription on a steel plate, one hand braced on the "
      + "wall, torchlight from below.",
    u: ["မောင်လင်းလည်း ဖတ်တယ်။ ပြီးတော့ ရယ်တယ်။",
        "“ဘယ်သူက ရေကန်ထဲ လူရှာမှာမို့လဲ”"] },

  { t: "The Echo Came Back Twice", l: "ရေကန်ထဲ",
    g: "ရယ်သံက နံရံတွေကို ရိုက်ပြီး ပြန်လာတယ်။ တစ်ခါ။ နှစ်ခါ။",
    p: "A wide view of the empty tank from a low angle, the pillars receding into darkness, sound "
      + "implied by the emptiness of it. Nothing visible but dust and concrete.",
    u: ["သူ့ရယ်သံက ကန်နံရံတွေကို ရိုက်ပြီး ပြန်လာတယ်။ တစ်ခါ။ နှစ်ခါ။"] },

  { t: "The Third One Came From Behind the Plate", l: "သံပြား", w: ["မောင်လင်း"],
    g: "မောင်လင်းရဲ့မျက်နှာက အပြုံးအတိုင်း ရပ်သွားတယ်။",
    p: "A young man's face frozen mid-laugh, the smile still on his mouth but his eyes gone "
      + "completely still, lit hard from one side.",
    u: ["နောက်ဆုံးရယ်သံက ကျွန်တော်တို့နှစ်ယောက် ရပ်နေတဲ့နေရာက မဟုတ်ဘူး။",
        "သံပြားနောက်က။",
        "မောင်လင်းရဲ့မျက်နှာက အပြုံးအတိုင်း ရပ်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Nothing Happened", l: "သံပြား",
    g: "မီးကို သံပြားပေါ် တည့်တည့်ထိုးထားတယ်။ ဘာမှ မဖြစ်ဘူး။",
    p: "A torch beam held steady on a bolted steel plate, the metal completely inert, dust drifting "
      + "slowly through the light.",
    u: ["ကျွန်တော်က မီးကို သံပြားပေါ် တည့်တည့်ထိုးထားလိုက်တယ်။ ဘာမှ မဖြစ်ဘူး။"] },

  { t: "Don't Touch That", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "အပေါက်ဝကနေ ဦးသောင်း လှမ်းမေးတယ်။ ပြီးတော့ ခဏတိတ်သွားတယ်။",
    p: "Looking up at the bright hatch opening with an older man's head and shoulders silhouetted "
      + "in it, leaning over to call down.",
    u: ["ခဏကြာတော့ အပေါ်က ဦးသောင်း လှမ်းမေးတယ်။ “ဘာလုပ်နေကြတာလဲ”",
        "“ဒီသံပြားက ဘာပိတ်ထားတာလဲ”",
        "ဦးသောင်း ခဏတိတ်သွားတယ်။",
        "“အဲဒါ မထိနဲ့။ ပိုက်ပဲ ကြည့်”"],
    c: [[3, "bigstinger"]] },

  { t: "We Started Work", l: "ရေကန်ထဲ", w: ["ကျွန်တော်", "မောင်လင်း"],
    g: "နှစ်ယောက်လုံး အလုပ်လုပ်နေတယ်။ ပိုက်ကလစ်ဖြုတ်တာနဲ့ အက်ကြောင်းစစ်တာ။",
    p: "Two workers at opposite walls of the tank, one unbolting pipe clips, the other running a "
      + "hand along the concrete, work light between them casting long shadows.",
    u: ["ကျွန်တော်တို့ အလုပ်စလုပ်တယ်။",
        "မောင်လင်းက နံရံက ပိုက်ကလစ်တွေ ဖြုတ်တယ်။ ကျွန်တော်က အက်ကြောင်းတွေ စစ်တယ်။"] },

  { t: "Footsteps Above", l: "ရေကန်ထဲ",
    g: "အပေါ်ကြမ်းခင်းပေါ်မှာ ခြေသံ။ မော့ကြည့်တယ်။",
    p: "Looking straight up at the underside of a concrete ceiling slab from inside the tank, dust "
      + "sifting down through the torch beam.",
    u: ["ရေကန်အောက်မှာ ဆယ့်ငါးမိနစ်လောက် နေပြီးတော့ အပေါ်မှာ ခြေသံကြားရတယ်။",
        "ဂိုဒေါင်ကြမ်းခင်းပေါ်မှာ လူတစ်ယောက် လျှောက်နေတာ။"] },

  { t: "He Had Not Moved", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "အပေါက်ဝမှာ ဦးသောင်း ထိုင်နေတုန်းပဲ။ မလှုပ်ဘူး။",
    p: "The hatch opening seen from below with the caretaker still sitting motionless at its rim "
      + "exactly where he was, hands in his lap.",
    u: ["ကျွန်တော် မော့ကြည့်တယ်။ အပေါက်ဝမှာ ဦးသောင်း ထိုင်နေတုန်းပဲ။",
        "အပေါ်ထပ်က လူတစ်ယောက် ဆင်းလာတာလို့ ထင်လိုက်တယ်။",
        "ခြေသံက ကျွန်တော့်ခေါင်းတည့်တည့်မှာ ရပ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Then Inside the Wall", l: "ရေကန်ထဲ",
    g: "ကျွန်တော် လက်နဲ့ နံရံကို တိုင်းနေတယ်။ ခြေသံက နံရံထဲကနေ။",
    p: "A hand pressed flat against a concrete tank wall, close, the surface completely solid, dust "
      + "disturbed in a fine ring around the fingers.",
    u: ["ကျွန်တော် လက်နဲ့ နံရံကို တိုင်းနေတယ်။",
        "ခြေသံ နှစ်ချက် ထပ်ထွက်တယ်။",
        "ဒီတစ်ခါ ကျွန်တော့်ဘယ်ဘက် နံရံထဲက။",
        "ကျွန်တော် လက်ကို ချက်ချင်း ရုပ်လိုက်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Did You Hear That", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်းက ပိုက်လိမ်နေတုန်း။ လှမ်းခေါ်တယ်။",
    p: "A young man still working at a pipe, half-turning at the sound of his name, torch beam "
      + "swinging across dusty air.",
    u: ["“မောင်လင်း” သူက ပိုက်လိမ်နေတုန်း။ “ဗျာ”",
        "“ခုနက ကြားလား” “ဘာလဲ”"] },

  { t: "Beneath the Floor", l: "ရေကန်ထဲ",
    g: "ကြမ်းပြင်ကို အနီးကပ်။ ခြေသံက အောက်ကနေ။",
    p: "The dry dusty tank floor photographed very low and close, the concrete unbroken, a fine "
      + "haze of dust hanging just above it.",
    u: ["ကျွန်တော် မဖြေရသေးခင် ခြေသံ ထပ်ထွက်တယ်။ တဒုတ်။ တဒုတ်။",
        "ဒီတစ်ခါ ကြမ်းပြင်အောက်က။",
        "ကျွန်တော်တို့နှစ်ယောက် တစ်ယောက်ကိုတစ်ယောက် ကြည့်လိုက်မိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "It Stopped Under My Feet", l: "ရေကန်ထဲ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော့်ဖိနပ်နှစ်ဖက်ကို အပေါ်ကနေ။ ကြမ်းပြင်က ခြောက်နေတယ်။",
    p: "Looking down at a man's own two boots on dry dusty concrete from his own eyeline, the dust "
      + "around them undisturbed.",
    u: ["အသံက အောက်ကနေ ရွေ့လာတယ်။ ဖြည်းဖြည်း။",
        "ကျွန်တော့်ခြေထောက်အောက်မှာ လာရပ်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "It Shifted When I Shifted", l: "ရေကန်ထဲ",
    g: "ဖိနပ်တစ်ဖက်ကနေ တစ်ဖက်ကို ကိုယ်အလေးချိန် ပြောင်းတယ်။ အောက်ကလည်း ရွေ့တယ်။",
    p: "A close low shot of one boot easing its weight onto the other, and in the dust just beyond "
      + "them a small unexplained disturbance mirroring the movement.",
    u: ["ဖိနပ်တစ်ဖက်ကနေ တစ်ဖက်ကို ကိုယ်အလေးချိန် ပြောင်းမိတယ်။",
        "အောက်ကလည်း တစ်ချက် ရွေ့တယ်။",
        "ကျွန်တော် ခြေတစ်လှမ်း ဆုတ်လိုက်တယ်။",
        "အောက်က ခြေသံတစ်ချက် လိုက်လာတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "Let's Go Up", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်းက အသံတိုးတိုးနဲ့ ပြောတယ်။",
    p: "A young man speaking very quietly with his eyes fixed on the floor rather than on the man "
      + "he is talking to, already edging toward the ladder.",
    u: ["မောင်လင်းက အသံတိုးတိုးနဲ့ “အစ်ကို၊ တက်ကြမယ်” လို့ ပြောတယ်။",
        "ကျွန်တော် ခေါင်းညိတ်လိုက်တယ်။"] },

  { t: "A Third Sound", l: "ရေကန်ထဲ",
    g: "ကန်ထဲမှာ အသက်ရှူသံတစ်ခု။ နှစ်ယောက်စလုံးရဲ့ အသံ မဟုတ်ဘူး။",
    p: "The empty middle of the tank between the two men, dust hanging in the beam, nothing visible "
      + "at all — the frame deliberately empty where a source should be.",
    u: ["အဲဒီအချိန်မှာ ကန်ထဲမှာ တခြားအသံတစ်ခု စလာတယ်။ အသက်ရှူသံ။",
        "ကျွန်တော့်အသံလည်း မဟုတ်ဘူး။ မောင်လင်းရဲ့အသံလည်း မဟုတ်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Breathing Through Wet Cloth", l: "ရေကန်ထဲ",
    g: "စိုနေတဲ့အဝတ်ထူကြီးတစ်ထည်နဲ့ မျက်နှာအုပ်ထားပြီး အသက်ရှူနေရသလို အသံ။",
    p: "Extreme close-up of coarse heavy cloth stretched taut and pulled inward, as if a face "
      + "beneath it were drawing breath, wet through in one patch.",
    u: ["စိုနေတဲ့အဝတ်ထူကြီးတစ်ထည်နဲ့ မျက်နှာကို အုပ်ထားပြီး အဲဒီအောက်ကနေ အသက်ရှူဖို့ ကြိုးစားနေရသလို။ ရှူး… ခရူး…"],
    c: [[0, "bigstinger"]] },

  { t: "There's Water in My Shoe", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်း ခြေထောက်အောက်ကို ငုံ့ကြည့်နေတယ်။ ကြမ်းပြင်က ခြောက်နေတယ်။",
    p: "A young man stopped mid-step looking down at his own boot; the concrete under it is "
      + "completely dry and dusty, but his face has changed.",
    u: ["မောင်လင်းက လှေကားဘက်ကို လျှောက်သွားတယ်။",
        "သူ့ခြေထောက် ရုတ်တရက် ရပ်သွားတယ်။ “အစ်ကို”",
        "ကျွန်တော် သူ့ကို ကြည့်လိုက်တယ်။ သူက ခြေထောက်အောက်ကို ငုံ့ကြည့်နေတယ်။",
        "“ကျွန်တော့်ဖိနပ်ထဲ ရေဝင်နေတယ်”"],
    c: [[3, "bigstinger"]] },

  { t: "Dry Outside, Wet Within", l: "ရေကန်ထဲ",
    g: "ဖိနပ်အပြင်ဘက် ခြောက်နေတယ်။ ကြမ်းပြင်လည်း ခြောက်နေတယ်။ အထဲကပဲ ရေစိုသံ ကြားရတယ်။",
    p: "Extreme close-up of a work boot on dusty concrete: the leather, the sole and the ground all "
      + "visibly bone dry, a fine film of dust even on the laces.",
    u: ["ကြမ်းပြင်က ခြောက်နေတုန်းပဲ။ မောင်လင်းရဲ့ ဖိနပ်အပြင်ဘက်လည်း ခြောက်နေတယ်။",
        "ဒါပေမယ့် သူ ခြေတစ်ဖက် မလိုက်တော့ ဖိနပ်ထဲက ရေစိုသံ ကြားလိုက်ရတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Up. Now.", l: "ရေကန်ထဲ", w: ["ကျွန်တော်", "မောင်လင်း"],
    g: "ကျွန်တော် သူ့လက်ကို ဖမ်းပြီး လှေကားဆီ တွန်းတယ်။",
    p: "One worker gripping another's wrist hard and pushing him toward the ladder, both faces "
      + "urgent, dust kicked up around their feet.",
    u: ["ကျွန်တော် သူ့လက်ကို ဖမ်းလိုက်တယ်။ “တက်။ အခုတက်”",
        "သူ လှေကားတစ်ဆင့် တက်တယ်။ နောက်တစ်ဆင့်။"] },

  { t: "He Coughed Water", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်း ပြင်းပြင်း ချောင်းဆိုးတယ်။ ပါးစပ်ထဲက ရေထွက်လာတယ်။",
    p: "A young man on a ladder doubled over coughing, a spray of water leaving his mouth and "
      + "catching the work light — the only water anywhere in the frame.",
    u: ["ပြီးတော့ ချောင်းဆိုးတယ်။ အရမ်းပြင်းပြင်း။",
        "သူ့ပါးစပ်ထဲက ရေထွက်လာတယ်။",
        "ကျွန်တော့်မျက်နှာပေါ် ပက်တယ်။ အေးစက်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "U Thaung! Pull Him Up!", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "အပေါက်ဝမှာ ဦးသောင်းရဲ့မျက်နှာ ပေါ်လာတယ်။ အံ့ဩတာ မရှိဘူး။ ကြောက်နေတာပဲ ရှိတယ်။",
    p: "An older man's face appearing over the rim of the hatch looking down, his expression not "
      + "shocked at all but frightened — the face of a man seeing something he expected.",
    u: ["“ဦးသောင်း! ဆွဲပေး!” အပေါ်ကို ကျွန်တော် အော်လိုက်တယ်။",
        "ဦးသောင်းရဲ့မျက်နှာ အပေါက်ဝမှာ ပေါ်လာတယ်။",
        "မောင်လင်းကို ကြည့်တယ်။ ပြီးတော့ ကျွန်တော့်ကို ကြည့်တယ်။",
        "သူ့မျက်နှာပေါ်မှာ အံ့ဩတာ မရှိဘူး။ ကြောက်နေတာပဲ ရှိတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "Who Answered It", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "ဦးသောင်းက ထူးဆန်းတဲ့မေးခွန်းတစ်ခု မေးတယ်။",
    p: "Close on the caretaker's face at the hatch rim, mouth moving on a question, eyes moving "
      + "over the dark below rather than at the men in it.",
    u: ["“ဘယ်သူ ပြန်ထူးလိုက်တာလဲ” လို့ မေးတယ်။",
        "“ဘာပြောနေတာလဲ! ဆွဲပေး!”"],
    c: [[0, "bigstinger"]] },

  { t: "His Hand Came Off the Ladder", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်းလက် လှေကားကနေ လွတ်သွားတယ်။",
    p: "A hand slipping off a ladder rung, fingers already limp, the arm falling out of frame.",
    u: ["မောင်လင်း နောက်တစ်ခါ ချောင်းဆိုးတယ်။",
        "သူ့လက်က လှေကားကို လွတ်သွားတယ်။",
        "ကျွန်တော် အောက်ကနေ ခါးကို ဖက်ထိန်းလိုက်တယ်။"] },

  { t: "A Sack Full of Water", l: "ရေကန်ထဲ", w: ["ကျွန်တော်", "မောင်လင်း"],
    g: "သူ့ကိုယ်က ရုတ်တရက် လေးလာတယ်။ လူတစ်ယောက်ကို ထိန်းထားရတာ မဟုတ်တော့ဘူး။",
    p: "A man straining to hold a limp body against a ladder, the body's weight visibly wrong — "
      + "sagging heavy and low the way a filled sack does, not the way a person does.",
    u: ["သူ့ကိုယ်က ရုတ်တရက် လေးလာတယ်။ အရမ်းလေးလာတယ်။",
        "လူတစ်ယောက်ကို ထိန်းထားရတာ မဟုတ်တော့ဘူး။",
        "ရေပြည့်နေတဲ့ ဆန်အိတ်ကြီးတစ်အိတ်ကို ထိန်းထားရသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "There Was No Water", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်းရဲ့ မျက်လုံးတွေ ပြူးနေတယ်။ ရေပူဖောင်းတွေ ထွက်လာတယ်။",
    p: "A face very close, eyes bulging, mouth open with clear bubbles rising from between the "
      + "lips into dry dusty air.",
    u: ["သူ့မျက်လုံးတွေ ပြူးနေတယ်။",
        "ပါးစပ်ကို ဖွင့်ပြီး အသက်ရှူဖို့ ကြိုးစားတယ်။ ရေပူဖောင်းတွေ ထွက်လာတယ်။",
        "ရေမရှိဘူး။ ဒါပေမယ့် သူ ရေနစ်နေတယ်။ ကျွန်တော့်ရှေ့မှာတင်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Light Was Gone", l: "ရေကန်ထဲ",
    g: "အပေါက်ဝမှာ ဦးသောင်း မရှိတော့ဘူး။ အလင်းပဲ မြင်ရတယ်။",
    p: "Looking up at the empty bright circle of the hatch from the tank floor, no head, no "
      + "silhouette, nobody there.",
    u: ["ကျွန်တော် သူ့လုံခြုံရေးကြိုးကို ဆွဲပြီး အပေါ်က စက်နဲ့ တင်ဖို့ လှမ်းအော်တယ်။",
        "ဦးသောင်း မရှိတော့ဘူး။ အပေါက်ဝမှာ အလင်းပဲ မြင်ရတယ်။"] },

  { t: "The Lid Began to Move", l: "ရေကန်ထဲ",
    g: "အဖုံး ရွေ့လာတယ်။ အလင်းဝိုင်း သေးလာတယ်။",
    p: "The bright circle of the hatch seen from below with a dark curve encroaching across it as "
      + "the iron lid is dragged into place, the light narrowing.",
    u: ["ပြီးတော့ သံပွတ်သံ ကြားရတယ်။ အဖုံး ရွေ့လာတယ်။",
        "သူ ပိတ်နေတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "There Are People Down Here", l: "ရေကန်ထဲ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် အားကုန် အော်တယ်။",
    p: "A man screaming upward with his whole body, tendons standing in his neck, a limp figure "
      + "still held against his chest.",
    u: ["ကျွန်တော် အော်တယ်။",
        "ကျွန်တော် အသက်မှာ အဲဒီလောက် ကျယ်ကျယ် တစ်ခါမှ မအော်ဖူးဘူး။",
        "“လူရှိတယ်! အောက်မှာ လူရှိတယ်!”",
        "အဖုံး တစ်ဝက်လောက် ပိတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "It Ran Down My Shirt", l: "ရေကန်ထဲ", w: ["ကျွန်တော်", "မောင်လင်း"],
    g: "မောင်လင်းပါးစပ်ထဲက ရေက ကျွန်တော့်အင်္ကျီပေါ် စီးကျနေတယ်။",
    p: "Water running down a work shirt from a face held against a shoulder, soaking the fabric "
      + "dark — and the dusty floor beneath entirely dry.",
    u: ["မောင်လင်းရဲ့ ခန္ဓာကိုယ်ကို ကျွန်တော် ရင်ဘတ်နဲ့ ဖိထိန်းထားတယ်။",
        "သူ့ပါးစပ်ထဲက ရေက ကျွန်တော့်အင်္ကျီပေါ် စီးကျနေတယ်။"] },

  { t: "It Never Reached the Floor", l: "ရေကန်ထဲ",
    g: "ကြမ်းပြင်ပေါ်ရောက်တာနဲ့ ရေမရှိတော့ဘူး။ ဖုန်ပဲ ရှိတယ်။",
    p: "Extreme close-up of dusty concrete directly beneath a soaked shirt: the dust is undisturbed "
      + "and perfectly dry, not a single drop having landed.",
    u: ["ကြမ်းပြင်ပေါ်ရောက်တာနဲ့ ရေမရှိတော့ဘူး။ ဖုန်ပဲ ရှိတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "One Has to Be Left", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "အပေါ်ကနေ ဦးသောင်းရဲ့အသံ အရမ်းတိုးတိုး။",
    p: "The half-closed hatch from below, a narrow crescent of light, an old man's mouth just "
      + "visible at the gap speaking downward.",
    u: ["အပေါ်က ဦးသောင်းက အရမ်းတိုးတိုး ပြောတယ်။ “နှစ်ယောက်လုံး မရဘူး”",
        "ကျွန်တော် မကြားချင်ဘူး။ ဒါပေမယ့် ကြားလိုက်ရတယ်။",
        "“တစ်ယောက်တော့ ထားခဲ့ရမယ်”"],
    c: [[2, "bigstinger"]] },

  { t: "The Third Breath Stopped", l: "ရေကန်ထဲ",
    g: "ကန်ထဲက အသက်ရှူသံ ရပ်သွားတယ်။ တတိယအသံပဲ ပျောက်သွားတာ။",
    p: "The empty tank interior, wide and still, dust hanging motionless in the beam — an image of "
      + "sudden silence.",
    u: ["အဲဒီစကားနောက်မှာ အသက်ရှူသံ ရပ်သွားတယ်။ ကန်ထဲက အသက်ရှူသံ။",
        "ကျွန်တော့်အသံရော၊ မောင်လင်းရဲ့ ရေသီးသံရော ရှိနေတယ်။",
        "တတိယအသံပဲ ပျောက်သွားတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "One Knock", l: "သံပြား",
    g: "သံပြားဘက်က ခေါက်သံ ထွက်လာတယ်။ တစ်ချက်ပဲ။",
    p: "The bolted steel plate in the wall, lit from the side, absolutely still — the frame held on "
      + "it a beat too long.",
    u: ["သံပြားဘက်က ခေါက်သံ ထွက်လာတယ်။ ဒေါက်။ တစ်ချက်ပဲ။",
        "ကျွန်တော် မလှည့်ကြည့်ချင်ဘူး။",
        "ဒါပေမယ့် မီးအလင်းက အဲဒီဘက်ကို ရောက်နေတယ်။"],
    c: [[0, "knock"]] },

  { t: "Fingers Through Solid Steel", l: "သံပြား",
    g: "သံပြားအောက်ခြေက ကြမ်းပြင်နဲ့ တွေ့တဲ့နေရာမှာ လက်ချောင်းတွေ ပေါ်လာတယ်။ အပေါက် မရှိဘူး။",
    p: "Pale swollen fingers emerging through the join where a steel plate meets concrete — a join "
      + "with no gap in it at all. Two fingers, then four. No hand visible, no opening.",
    u: ["သံပြားအောက်ခြေက ကြမ်းပြင်နဲ့ တွေ့တဲ့နေရာမှာ လက်ချောင်းတွေ ပေါ်လာတယ်။",
        "အပေါက် မရှိဘူး။ သံပြားနဲ့ နံရံကြား အကြားမရှိဘူး။",
        "ဒါပေမယ့် လက်ချောင်းတွေ ထွက်လာနေတယ်။",
        "အရင်ဆုံး နှစ်ချောင်း။ ပြီးတော့ လေးချောင်း။"],
    c: [[3, "bigstinger"]] },

  { t: "No Fingernails", l: "သံပြား",
    g: "လက်သည်းတွေ မရှိဘူး။ အရေပြားက ရေစိမ်လွန်းလို့ ဖြူဖွေးပြီး တွန့်နေတယ်။",
    p: "Extreme close-up of fingertips: no nails at all, the skin bleached white and deeply wrinkled "
      + "the way skin goes after very long immersion.",
    u: ["လက်သည်းတွေ မရှိဘူး။",
        "အရေပြားက ရေစိမ်လွန်းလို့ ဖြူဖွေးပြီး တွန့်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "They Were Searching", l: "သံပြား",
    g: "လက်ချောင်းတွေက သံပြားကို ဖွင့်ဖို့ လုပ်နေတာ မဟုတ်ဘူး။ ကြမ်းပြင်ကို စမ်းနေတယ်။",
    p: "Fingers spread flat on dusty concrete sweeping in a slow arc, leaving clean streaks in the "
      + "dust — feeling for something rather than pushing at anything.",
    u: ["လက်ချောင်းတွေက သံပြားကို ဖွင့်ဖို့ လုပ်နေတာ မဟုတ်ဘူး။",
        "ကြမ်းပြင်ကို စမ်းနေတယ်။ တစ်ခုခု ရှာနေတာ။",
        "ကျွန်တော်တို့ဘက်ကို။"],
    c: [[2, "bigstinger"]] },

  { t: "Don't Leave Me", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်းက လက်မောင်းကို ဆုပ်တယ်။ စကားမပြောနိုင်ဘူး။ မျက်လုံးက ပြောနေတယ်။",
    p: "A hand gripping a forearm hard, and above it a face unable to speak, eyes locked on the "
      + "other man's, water at the corners of the mouth.",
    u: ["မောင်လင်းက ကျွန်တော့်လက်မောင်းကို ဆုပ်တယ်။",
        "သူ စကားမပြောနိုင်ဘူး။",
        "ဒါပေမယ့် သူ့မျက်လုံးက ပြောနေတယ်။ မထားခဲ့နဲ့။"],
    c: [[2, "bigstinger"]] },

  { t: "The Hammer", l: "ရေကန်ထဲ", w: ["ကျွန်တော်"],
    g: "သံတူနဲ့ နံရံကို အားကုန်ရိုက်နေတယ်။",
    p: "A man swinging a heavy hammer against a concrete wall with everything he has, sparks and "
      + "dust, a limp figure propped against the ladder behind him.",
    u: ["ကျွန်တော် သူ့ကို လှေကားနဲ့ မှီထားပေးပြီး ကိရိယာအိတ်ကို ခြေထောက်နဲ့ ဆွဲလိုက်တယ်။",
        "သံတူကို ယူတယ်။ နံရံကို အားကုန်ရိုက်တယ်။ တစ်ချက်ပြီးတစ်ချက်။"],
    c: [[1, "knock"]] },

  { t: "Somebody Has to Hear", l: "ရေကန်ထဲ",
    g: "အပေါ်မှာ အလုပ်သမားတွေ ရှိတယ်။ တစ်ယောက်ယောက် ကြားရမယ်။",
    p: "Looking up at the underside of the ceiling slab as hammer blows shake dust down through the "
      + "torch beam in sheets.",
    u: ["အပေါ်မှာ အလုပ်သမားတွေ ရှိတယ်။ ဂိုဒေါင်အပြင်မှာ လူတွေ ရှိတယ်။",
        "တစ်ယောက်ယောက် ကြားရမယ်။",
        "“အောက်မှာ လူရှိတယ်!”"] },

  { t: "Now It Was Running", l: "ရေကန်ထဲ",
    g: "ကြမ်းပြင်အောက်က ခြေသံ ပြန်စတယ်။ လျှောက်နေတာ မဟုတ်တော့ဘူး။ ပြေးလာနေတာ။",
    p: "The dry floor of the tank in a wide low shot, dust visibly jumping in a line across it as "
      + "though something heavy were running just beneath the surface.",
    u: ["သံတူရိုက်သံကြားထဲမှာ ကြမ်းပြင်အောက်က ခြေသံ ပြန်စတယ်။",
        "ဒီတစ်ခါ လျှောက်နေတာ မဟုတ်ဘူး။ ပြေးလာနေတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "Something Took My Ankle", l: "ရေကန်ထဲ",
    g: "ညာဘက်ခြေကျင်းဝတ်ကို တစ်ခုခု ဖမ်းလိုက်တယ်။ ငုံ့ကြည့်တော့ လက်မမြင်ရဘူး။",
    p: "A man's ankle above a work boot, the flesh visibly compressed by five finger-shaped "
      + "depressions — with no hand there at all. Dry dusty floor beneath.",
    u: ["ကျွန်တော့် ညာဘက်ခြေကျင်းဝတ်ကို တစ်ခုခု ဖမ်းလိုက်တယ်။",
        "အေးတယ်။ သိပ်ကို အေးတယ်။",
        "ငုံ့ကြည့်တော့ လက်မမြင်ရဘူး။ ဖိနပ်အောက်က ခြောက်နေတဲ့ကြမ်းပြင်ပဲ။",
        "ဒါပေမယ့် ခြေကျင်းဝတ်မှာ လက်ချောင်းတစ်ချောင်းချင်း ဖိဝင်လာတာကို ခံစားရတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "The Floor Did Not Break", l: "ရေကန်ထဲ",
    g: "ခြေထောက်က ဘိလပ်မြေကြမ်းပြင်ထဲကို နစ်ဝင်သွားတယ်။ ကြမ်းပြင်က မကွဲဘူး။",
    p: "A boot sunk halfway into a concrete floor with the concrete completely unbroken around it — "
      + "no crack, no hole, no water, the surface closed against the leg like skin.",
    u: ["ကျွန်တော် လှေကားကို ဖမ်းလိုက်တယ်။",
        "ခြေထောက်က အောက်ကို နစ်ဝင်သွားတယ်။ ဖိနပ်တစ်ဝက်။ ပြီးတော့ ခြေကျင်းဝတ်အထိ။",
        "ဘိလပ်မြေကြမ်းပြင်က မကွဲဘူး။ ရေလည်း မဖြစ်ဘူး။",
        "ကျွန်တော့်ခြေထောက်က အဲဒီအထဲကို ဝင်နေတာ။"],
    c: [[3, "bigstinger"]] },

  { t: "Wet Hair", l: "ရေကန်ထဲ",
    g: "ခြေဖျားအောက်မှာ တစ်ခုခု ထိတယ်။ စိုနေတဲ့ဆံပင်တွေ။",
    p: "Extreme close-up of the concrete surface right where a leg disappears into it, a few "
      + "strands of wet dark hair caught at the edge and lying flat on the dry dust.",
    u: ["ခြေဖျားအောက်မှာ တစ်ခုခု ထိတယ်။ ဆံပင်။ စိုနေတဲ့ဆံပင်တွေ။",
        "ကျွန်တော် ပိုအားထည့် ဆွဲရုန်းလိုက်တယ်။ အောက်က လက်က ပိုတင်းတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "A Mouth on My Foot", l: "ရေကန်ထဲ",
    g: "ခြေဖမိုးကို ပါးစပ်တစ်ခု လာဖိတယ်။ သွားမကိုက်ဘူး။",
    p: "The top of a foot at the concrete line with a clear impression of two lips pressed against "
      + "it from beneath the surface, the flesh dimpling inward.",
    u: ["နောက်တော့ ခြေဖမိုးကို ပါးစပ်တစ်ခု လာဖိတယ်။",
        "သွားမကိုက်ဘူး။",
        "နှုတ်ခမ်းနှစ်ဖက်ကပ်ပြီး အသက်ကို ရှူသွင်းလိုက်တာ။"],
    c: [[2, "bigstinger"]] },

  { t: "My Lungs Emptied", l: "ရေကန်ထဲ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော့်အဆုတ်ထဲက လေတွေ တစ်ခါတည်း လျော့သွားတယ်။ ပါးစပ်ဖွင့်ပေမယ့် လေမဝင်ဘူး။",
    p: "A man's chest and throat from below, ribs pulled hollow, mouth open and straining with no "
      + "air entering, eyes wide with the understanding of it.",
    u: ["ကျွန်တော့်အဆုတ်ထဲက လေတွေ တစ်ခါတည်း လျော့သွားတယ်။",
        "ပါးစပ်ဖွင့်ပြီး အသက်ရှူတယ်။ လေမဝင်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "It Wanted to Breathe", l: "ရေကန်ထဲ",
    g: "အောက်ကအရာက ဆွဲချချင်တာတင် မဟုတ်ဘူး။ အသက်ရှူချင်နေတာ။",
    p: "A wide slow view of the whole dry tank, pillars and dust and a fallen work light, holding "
      + "on emptiness — the realisation shot.",
    u: ["အဲဒီခဏမှာ ကျွန်တော် နားလည်လိုက်တယ်။",
        "အောက်ကအရာက ကျွန်တော်တို့ကို ဆွဲချင်တာတင် မဟုတ်ဘူး။",
        "အသက်ရှူချင်နေတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "The Lid Slid Back", l: "ရေကန်ထဲ",
    g: "အဖုံး ရုတ်တရက် ပြန်ရွေ့သွားတယ်။ အလင်းဝင်လာတယ်။",
    p: "The dark hatch above suddenly opening wide, a hard shaft of daylight dropping into the "
      + "tank and lighting the dust in a solid column.",
    u: ["အပေါ်က အဖုံး ရုတ်တရက် ပြန်ရွေ့သွားတယ်။ အလင်းဝင်လာတယ်။",
        "လူတစ်ယောက် အော်တယ်။ “ဘာလုပ်နေတာလဲဗျ! အောက်မှာ လူတွေ!”",
        "အလုပ်သမားတစ်ယောက်။ နောက်ထပ် မျက်နှာတစ်ခု ပေါ်လာတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "I Could Not Speak", l: "ရေကန်ထဲ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် လက်မြှောက်ပြီး ကြိုးကို လက်ညှိုးထိုးပြတယ်။ အသံမထွက်တော့ဘူး။",
    p: "A man with one arm raised pointing at a safety line, his mouth open but nothing coming out, "
      + "shafts of dusty light around him.",
    u: ["ကျွန်တော် လက်ကို မြှောက်ပြီး ကြိုးကို လက်ညှိုးထိုးတယ်။",
        "အသံမထွက်တော့ဘူး။ သူတို့ ဆွဲကြတယ်။"] },

  { t: "The Rope Went Tight", l: "ရေကန်ထဲ", w: ["မောင်လင်း"],
    g: "မောင်လင်းရဲ့ကြိုး တင်းသွားတယ်။ သူ အပေါ်ကို မြောက်လာတယ်။",
    p: "A safety line snapping taut and a limp body lifting off the tank floor, dust swirling into "
      + "the light beneath it.",
    u: ["မောင်လင်းရဲ့ကြိုး တင်းသွားတယ်။ သူ အပေါ်ကို မြောက်လာတယ်။"] },

  { t: "The Mouth Let Go", l: "ရေကန်ထဲ",
    g: "ခြေထောက်ပေါ်က ပါးစပ်က လွတ်သွားတယ်။ ကြမ်းပြင်ထဲကနေ အသက်ရှူသံကြီး ထွက်လာတယ်။",
    p: "A foot pulling free of a concrete floor that closes seamlessly behind it, dust blowing "
      + "outward in a ring as though something exhaled.",
    u: ["အဲဒီအချိန် ကျွန်တော့်ခြေထောက်ပေါ်က ပါးစပ်က လွတ်သွားတယ်။",
        "ကြမ်းပြင်ထဲကနေ အသက်ရှူသံကြီး ထွက်လာတယ်။",
        "ကျွန်တော်လည်း လေတစ်ရှိုက် ရလိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Shoe Stayed", l: "ရေကန်ထဲ",
    g: "ခြေထောက် ဆွဲထုတ်လိုက်တယ်။ ဖိနပ်က ကျန်ခဲ့တယ်။",
    p: "A single work boot standing upright and alone on the dusty tank floor, laces still tied, "
      + "perfectly intact, its owner gone from frame.",
    u: ["ခြေထောက်ကို ဆွဲထုတ်လိုက်တယ်။ ဖိနပ်က ကျန်ခဲ့တယ်။",
        "ခြေဗလာနဲ့ လှေကားကို တက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Ladder Shook", l: "ရေကန်ထဲ",
    g: "အောက်ကနေ သံလှေကား လှုပ်လာတယ်။ တစ်ယောက်ယောက် တက်နေသလို။",
    p: "Looking up a ladder from partway along it, the rungs below blurred with vibration, darkness "
      + "at the bottom of the shot.",
    u: ["မောင်လင်းကို သူတို့ အပေါ်ဆွဲတင်နေကြတယ်။ ကျွန်တော် သူ့အောက်မှာပဲ။",
        "တစ်ဆင့်။ နောက်တစ်ဆင့်။",
        "အောက်ကနေ သံလှေကား လှုပ်လာတယ်။ တစ်ယောက်ယောက် တက်နေသလို။",
        "ကျွန်တော် မငုံ့ကြည့်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "The Sound I Cannot Write Down", l: "ဂိုဒေါင်",
    g: "အပေါက်ဝကနေ ဆွဲထုတ်လိုက်တဲ့အချိန်။ အောက်ကနေ အသံထွက်လာတယ်။",
    p: "A man being hauled out through a hatch onto a warehouse floor, hands under his arms, his "
      + "face turned back toward the dark opening below him.",
    u: ["အပေါ်ကလူက ကျွန်တော့်လက်ကောက်ဝတ်ကို ဆွဲယူတယ်။",
        "ကျွန်တော့်ခြေထောက် အပေါက်ဝက လွတ်သွားတဲ့အချိန်မှာ အောက်ကနေ အသံထွက်လာတယ်။",
        "စကားမဟုတ်ဘူး။ ငိုသံလည်း မဟုတ်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Like a Swimmer's Foot Slipping Away", l: null,
    g: "ရေကူးကန်အောက်ကနေ အပေါ်ကို မော့ကြည့်ရတဲ့ မြင်ကွင်း။",
    p: "Looking up through water toward a bright surface from below, a swimmer's legs kicking away "
      + "overhead and receding — the only true underwater image in the film.",
    u: ["ရေကူးကန်အောက်မှာ နစ်နေတဲ့လူတစ်ယောက်က အပေါ်မှာ ကူးနေတဲ့သူရဲ့ ခြေထောက်ကို လွတ်သွားတဲ့အခါ ထွက်မယ့်အသံ။",
        "အဲဒီအသံကို စကားလုံးနဲ့ မရေးတတ်ဘူး။",
        "အခုထိ အိပ်ပျော်ခါနီးတိုင်း ကြားနေရတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "On His Side", l: "ဂိုဒေါင်", w: ["မောင်လင်း"],
    g: "မောင်လင်းကို ဘေးစောင်းပေးထားတယ်။ ပါးစပ်ထဲက ရေတွေ ထွက်နေတုန်း။",
    p: "A young man laid on his side on a warehouse floor with water still running from his mouth "
      + "into the dust, workers crouched around him.",
    u: ["မောင်လင်းကို အပေါ်ရောက်တာနဲ့ ဘေးစောင်းပေးထားတယ်။",
        "သူ့ပါးစပ်ထဲက ရေတွေ ထွက်နေတုန်း။",
        "အလုပ်သမားတစ်ယောက်က အရေးပေါ်အကူအညီ ခေါ်တယ်။"] },

  { t: "Hands Over His Ears", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "ဦးသောင်းက နံရံဘေးမှာ ထိုင်ပြီး လက်နှစ်ဖက်နဲ့ နားကို ပိတ်ထားတယ်။",
    p: "An older man sitting on the floor against a pillar with both hands clamped hard over his "
      + "ears and his eyes shut, in the middle of a busy rescue he is ignoring.",
    u: ["ကျွန်တော်က အဖုံးဝကနေ လှိမ့်ထွက်ပြီး ဦးသောင်းကို ရှာတယ်။",
        "သူက နံရံဘေးမှာ ထိုင်နေတယ်။ လက်နှစ်ဖက်နဲ့ နားကို ပိတ်ထားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Did Both of You Come Up", l: "ဂိုဒေါင်", w: ["ကျွန်တော်", "ဦးသောင်း"],
    g: "ကျွန်တော် သူ့အင်္ကျီကို ဆွဲထူတယ်။ သူက အဖုံးပေါက်ကိုပဲ ကြည့်နေတယ်။",
    p: "One man hauling another up by the shirt front, but the older one's eyes are fixed past him "
      + "on the open hatch, not on his face.",
    u: ["ကျွန်တော် သူ့အင်္ကျီကို ဆွဲထူလိုက်တယ်။ “အောက်မှာ ဘာရှိတာလဲ”",
        "သူ မဖြေဘူး။ “ကျွန်တော်တို့ကို ပိတ်သတ်မလို့လား!”",
        "သူက အဖုံးပေါက်ကိုပဲ ကြည့်နေတယ်။",
        "“နှစ်ယောက်လုံး တက်လာတာလား”"],
    c: [[3, "bigstinger"]] },

  { t: "He Asked It Twice", l: "ဂိုဒေါင်", w: ["ဦးသောင်း"],
    g: "ဦးသောင်း အဲဒီမေးခွန်းကို ထပ်မေးတယ်။ ဒီတစ်ခါ အရမ်းကြောက်နေတဲ့အသံနဲ့။",
    p: "Close on the caretaker's face, pushed away and stumbling, still asking the same question, "
      + "genuinely terrified.",
    u: ["ကျွန်တော် သူ့ကို တွန်းလွှတ်လိုက်တယ်။",
        "သူက အဲဒီမေးခွန်းကို ထပ်မေးတယ်။ ဒီတစ်ခါ အရမ်းကြောက်နေတဲ့အသံနဲ့။",
        "“နှစ်ယောက်လုံး တက်လာတာလား”"],
    c: [[2, "bigstinger"]] },

  { t: "He Lived", l: "ဆေးရုံ", w: ["မောင်လင်း"],
    g: "ဆေးရုံမှာ မောင်လင်း အသက်ရှင်တယ်။ ပထမနှစ်ရက် စကားမပြောနိုင်ဘူး။",
    p: "A young man awake in a hospital bed with an oxygen line at his nose, staring at the "
      + "ceiling, flat daylight from a barred window.",
    u: ["ဆေးရုံမှာ မောင်လင်း အသက်ရှင်တယ်။",
        "ပထမနှစ်ရက် စကားသိပ်မပြောနိုင်ဘူး။"] },

  { t: "How Many Are Down There", l: "ဆေးရုံ", w: ["မောင်လင်း", "ကျွန်တော်"],
    g: "တတိယနေ့မှာ မောင်လင်း မေးတယ်။",
    p: "Two men in a hospital room, one in the bed turning his head to ask a question, the other "
      + "seated beside it, neither quite looking at the other.",
    u: ["တတိယနေ့မှ ကျွန်တော့်ကို မေးတယ်။",
        "“အစ်ကို… အောက်မှာ ဘယ်နှယောက် ရှိလဲ”",
        "ကျွန်တော် သူ့မျက်နှာကို ကြည့်တယ်။ “မသိဘူး”"],
    c: [[1, "bigstinger"]] },

  { t: "My Eyes Were Open", l: "ဆေးရုံ", w: ["မောင်လင်း"],
    g: "မောင်လင်းက စောင်ကို ဆုပ်လာတယ်။",
    p: "A hand slowly closing on a hospital blanket, knuckles whitening, the arm thin and marked "
      + "with a cannula.",
    u: ["သူ ခေါင်းခါတယ်။ “ကျွန်တော် ရေသီးနေတုန်း မျက်လုံးဖွင့်ထားတယ်”",
        "သူ့လက်က စောင်ကို ဆုပ်လာတယ်။ “အစ်ကို့ကို မမြင်ရဘူး”"],
    c: [[1, "bigstinger"]] },

  { t: "I Was in Water", l: null, w: ["မောင်လင်း"],
    g: "ရေအောက်ကနေ အပေါ်က အလင်းကို မော့ကြည့်ရတဲ့ မြင်ကွင်း။",
    p: "A subjective underwater view looking up toward a distant rectangle of light, murky green "
      + "water, no bottom and no walls visible.",
    u: ["ကျွန်တော် မလှုပ်ဘဲ နားထောင်နေတယ်။",
        "“ရေထဲမှာပဲ။ အပေါ်က အလင်းကို မြင်ရတယ်။ အစ်ကို့လက်က ကျွန်တော့်ကို ကိုင်ထားပေမယ့် အစ်ကို့ကို မမြင်ရဘူး”"],
    c: [[1, "bigstinger"]] },

  { t: "All of Them Looking Up", l: null,
    g: "ရေထဲမှာ လူတွေ ရပ်နေကြတယ်။ အကုန် မျက်နှာမော့ထားတယ်။ ရှင်းရှင်း မမြင်ရ။",
    p: "Deep murky water with many indistinct human shapes standing far below, all of them with "
      + "faces tilted upward toward the light. Deliberately unresolved — silhouettes only, no "
      + "features, no bodies clearly lit.",
    u: ["“ပြီးတော့?” မောင်လင်းရဲ့ မျက်လုံးတွေ ကျွန်တော့်ခြေထောက်ဘက်ကို ရွေ့သွားတယ်။",
        "“အောက်မှာ လူတွေ ရှိတယ်”",
        "သူ အသက်တစ်ချက် ရှူတယ်။",
        "“ရပ်နေကြတာ မဟုတ်ဘူး။ အကုန် မျက်နှာမော့ထားကြတာ”"],
    c: [[3, "bigstinger"]] },

  { t: "I Could Not See the Bottom", l: "ဆေးရုံ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် ခြေထောက်ကို ကုတင်အောက်ကနေ ပြန်ရုပ်လိုက်မိတယ်။",
    p: "A man sitting beside a hospital bed drawing his own feet back beneath the chair without "
      + "seeming to notice he is doing it.",
    u: ["ကျွန်တော် ခြေထောက်ကို ကုတင်အောက်ကနေ ပြန်ရုပ်လိုက်မိတယ်။ “ဘယ်နှယောက်လဲ”",
        "မောင်လင်းက ဖြည်းဖြည်း ခေါင်းခါတယ်။",
        "“ရေကန်အောက်ခြေကို မမြင်ရဘူး အစ်ကို”"],
    c: [[2, "bigstinger"]] },

  { t: "Twenty Years Ago", l: null,
    g: "ဓာတ်ပုံဟောင်း၊ စာရွက်ဟောင်းတွေ။ အဆောက်အအုံရဲ့ မှတ်တမ်း။",
    p: "Old paperwork and a faded photograph of the same building decades earlier, spread on a "
      + "table under a desk lamp, corners curled.",
    u: ["နောက်ပိုင်း ဦးသောင်းကို စစ်မေးတော့မှ သိရတယ်။",
        "လွန်ခဲ့တဲ့နှစ်နှစ်ဆယ်ကျော်က အဲဒီကန်ထဲ လူသေခဲ့ဖူးတယ်။"] },

  { t: "One, Then Another, Then Another", l: "ရေကန်ထဲ",
    g: "ကန်ထဲကို အပေါ်ကနေ ကြည့်ရတဲ့ပုံ။ ဗလာ။",
    p: "The empty tank seen from directly above through the open hatch, three pillars, nothing "
      + "else, the floor far below.",
    u: ["ပထမဆုံးတစ်ယောက်က ရေကန်ဆေးတဲ့အလုပ်သမား။",
        "နောက်တစ်ယောက်က ဆင်းကယ်တဲ့သူ။ ပြီးတော့ နောက်တစ်ယောက်။"] },

  { t: "They Only Got Two Back", l: null,
    g: "ရေစုပ်စက်ဟောင်းတစ်လုံး။ ပိုက်တွေ။ အသုံးမပြုတော့ဘူး။",
    p: "An old industrial pump and coiled hoses abandoned in a corner, thick with dust and cobweb, "
      + "long out of service.",
    u: ["နောက်ဆုံးမှာ အလောင်းနှစ်လောင်းပဲ ပြန်ရတယ်။",
        "ပထမဆုံးဆင်းတဲ့လူကို ရေစုပ်ထုတ်ပြီး ရှာတာတောင် မတွေ့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "There Was Nowhere to Go", l: "ရေကန်ထဲ",
    g: "ကန်နံရံတွေ။ ထွက်ပေါက် မရှိဘူး။ လူဝင်လို့ရတဲ့ပိုက်လည်း မရှိဘူး။",
    p: "A slow careful survey of the tank walls: solid concrete, capped pipes far too narrow for a "
      + "person, no drain, no opening anywhere.",
    u: ["ကန်ကြီးက ဒီအရွယ်ပဲ။ ထွက်ပေါက်မရှိဘူး။",
        "လူဝင်လို့ရတဲ့ပိုက်လည်း မရှိဘူး။",
        "ဒါပေမယ့် မတွေ့ခဲ့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Knocking in the Pipes", l: null,
    g: "အိမ်တွေက ရေပိုက်တွေ။ ရေမသုံးတဲ့အချိန်မှာ အသံထွက်တယ်။",
    p: "Old water pipes running along a stairwell wall in a residential building, ordinary and "
      + "domestic, photographed at night with one bulb.",
    u: ["နောက်ပိုင်း ရေပိုက်ကနေ ခေါက်သံတွေ ကြားရတယ်။",
        "ရေမသုံးတဲ့အချိန် ပိုက်ထဲမှာ လူချောင်းဆိုးသံ ကြားရတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "So They Wrote It On", l: "သံပြား",
    g: "စစ်ဆေးပေါက်ကို ပိတ်တယ်။ သံပြားပေါ်မှာ စာရေးတယ်။",
    p: "A man's hands scratching Burmese letters into a steel plate with a nail, the metal fresh "
      + "and unrusted — the same plate decades younger.",
    u: ["ရေကန်ဘေးက စစ်ဆေးပေါက်ကို ပိတ်တယ်။",
        "သံပြားပေါ်မှာ စာရေးတယ်။ အထဲမှာ လူမရှိ။",
        "နောက်တော့ အပေါ်အဖုံးကိုပါ ဘိလပ်မြေလောင်းပိတ်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The First One Was His Brother", l: null, w: ["ဦးသောင်း"],
    g: "ဦးသောင်းရဲ့ မျက်နှာ။ ခေါင်းငုံ့ထားတယ်။",
    p: "Close on the caretaker's face, head lowered, looking at his own hands rather than at "
      + "anyone, in dull light.",
    u: ["ဦးသောင်းက အဲဒီတုန်းက အလုပ်သမားငယ်တစ်ယောက်ပဲ။",
        "ပထမဆုံးပျောက်သွားတဲ့လူက သူ့အစ်ကို။"],
    c: [[1, "bigstinger"]] },

  { t: "I Thought It Was Finished", l: null, w: ["ဦးသောင်း", "ကျွန်တော်"],
    g: "ကျွန်တော် သူ့ကို မေးတယ်။ သူက ခေါင်းငုံ့ထားတယ်။",
    p: "Two men seated apart in a plain room, one with his head down, the other watching him and "
      + "waiting, nothing else in frame.",
    u: ["“ဒါဆို ဘာလို့ ကျွန်တော်တို့ကို ဆင်းခိုင်းတာလဲ” နောက်တစ်ခါ တွေ့တော့ ကျွန်တော် မေးတယ်။",
        "သူက ခေါင်းငုံ့ထားတယ်။",
        "“ရေမရှိတော့ရင် ဘာမှမဖြစ်တော့ဘူး ထင်လို့”"] },

  { t: "You Knew We Would Die", l: null, w: ["ဦးသောင်း"],
    g: "ဦးသောင်းက ပြန်မော့မကြည့်ဘူး။",
    p: "An older man in profile refusing to raise his head, hands loose between his knees, the "
      + "light behind him.",
    u: ["ကျွန်တော် သူ့ကို အကြာကြီး ကြည့်နေခဲ့တယ်။",
        "“အဖုံးပိတ်ရင် ကျွန်တော်တို့ သေမှာ သိတယ်မဟုတ်လား”",
        "သူက ပြန်မော့မကြည့်ဘူး။",
        "“အဖုံးဖွင့်ထားရင် ဘယ်သူတွေ ထပ်သေမလဲ မသိဘူး”"],
    c: [[3, "bigstinger"]] },

  { t: "I Never Saw Him Again", l: null,
    g: "ဗလာဖြစ်နေတဲ့ ကုလားထိုင်တစ်လုံး။",
    p: "An empty chair in a plain room, the seat worn, nobody in the frame at all.",
    u: ["ကျွန်တော် သူ့ကို ထပ်မတွေ့တော့ဘူး။"] },

  { t: "They Filled It In", l: "ဂိုဒေါင်",
    g: "ကန်ကို ဘိလပ်မြေဖြည့်ပြီး ပိတ်တယ်။ ပိုက်ကနေ ဘိလပ်မြေ သွင်းနေတယ်။",
    p: "A concrete pump hose feeding wet cement down through a floor opening, workers standing "
      + "well back, the hole slowly filling.",
    u: ["ကန်ကို ပိတ်လိုက်ကြတယ်။ ဒီတစ်ခါ ဘိလပ်မြေဖြည့်ပြီး ပိတ်တာ။",
        "အဲဒီအလုပ်ကို ကျွန်တော် မလုပ်ဘူး။ မောင်လင်းလည်း မလုပ်တော့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "He Would Not Take the Water", l: null, w: ["မောင်လင်း", "ကျွန်တော်"],
    g: "ရေဘူးတစ်ဘူး ကမ်းပေးတယ်။ မောင်လင်း မယူဘူး။",
    p: "A bottle of water held out between two men in a doorway, and the younger one's hands "
      + "staying at his sides, not reaching for it.",
    u: ["သူ အလုပ်ထွက်သွားတယ်။",
        "နောက်ဆုံး ကျွန်တော့်ဆီ လစာလာယူတဲ့နေ့မှာ ရေဘူးတစ်ဘူး ပေးလိုက်မိတယ်။ သူ မယူဘူး။"],
    c: [[1, "stinger"]] },

  { t: "A Little at a Time", l: null, w: ["မောင်လင်း"],
    g: "မောင်လင်းက ရေကို နည်းနည်းစီ သောက်ပြပုံ။",
    p: "A young man taking the smallest possible sip from a glass, holding it in his mouth, his "
      + "whole body tense with the act of swallowing.",
    u: ["“ရေငတ်ရင် ဘယ်လိုလုပ်လဲ” လို့ မေးတော့ “နည်းနည်းစီ သောက်တယ်” လို့ ဖြေတယ်။ “ဘာလို့?”"] },

  { t: "Somebody Swallows Back", l: null, w: ["မောင်လင်း"],
    g: "မောင်လင်းက ကျွန်တော့်ကို ကြည့်ပြီး ဖြေတယ်။",
    p: "Close on a young man's throat and jaw as he speaks, the glass still in his hand, his eyes "
      + "just visible at the top of frame.",
    u: ["သူက ကျွန်တော့်ကို ကြည့်တယ်။",
        "“တစ်ခါတည်း မျိုချလိုက်ရင် အောက်ကနေ တစ်ယောက်ယောက် ပြန်မျိုချတာ ကြားရလို့”",
        "ကျွန်တော် ဘာမှမပြောနိုင်ဘူး။ သူလည်း ဆက်မပြောဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Five White Stripes", l: null, w: ["ကျွန်တော်"],
    g: "ညာဘက်ခြေကျင်းဝတ်မှာ လက်ချောင်းငါးချောင်းပုံစံ အဖြူစင်းတွေ။",
    p: "An ankle in ordinary daylight marked with five pale scar-like bands in the unmistakable "
      + "shape of fingers wrapped around it.",
    u: ["ကျွန်တော့်ညာဘက်ခြေကျင်းဝတ်မှာ လက်ချောင်းရာတွေ ကျန်ခဲ့တယ်။",
        "ပထမတော့ အညိုအမည်းတွေ။ နောက်တော့ ဖြူသွားတယ်။",
        "အခုဆို လက်ချောင်းငါးချောင်းပုံစံ အဖြူစင်းတွေ ဖြစ်နေပြီ။",
        "နာတာ မရှိဘူး။ တစ်ခါတလေ အေးလာတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Shut the Water Off", l: "အိပ်ခန်း",
    g: "ရေပိုက်ပင်မဗားကို ပိတ်ထားတယ်။ ရေချိုးခန်းတံခါးလည်း ပိတ်ထားတယ်။",
    p: "A hand closing a main water valve on a pipe, and behind it a closed bathroom door with a "
      + "towel pushed against the gap at its foot.",
    u: ["အဲဒီလို အေးလာတဲ့ညတွေဆို ကျွန်တော် ရေပိုက်ပင်မဗားကို ပိတ်ထားတယ်။",
        "ရေချိုးခန်းတံခါးကိုလည်း ပိတ်တယ်။",
        "အစပိုင်းမှာ အဲဒါနဲ့ အဆင်ပြေခဲ့တယ်။"] },

  { t: "I Woke With a Wet Foot", l: "အိပ်ခန်း", w: ["ကျွန်တော်"],
    g: "အိပ်ရာခင်းက ခြောက်တယ်။ စောင်လည်း ခြောက်တယ်။ ညာဘက်ခြေဖဝါးတစ်ဖက်ပဲ စိုနေတယ်။",
    p: "A bare foot on a dry bedsheet at night, the sole visibly wet and the sheet around it "
      + "completely dry, a lamp just switched on.",
    u: ["ပြီးခဲ့တဲ့အပတ်ကတော့ အိပ်ပျော်နေတုန်း ခြေဖဝါးစိုလာလို့ နိုးလာတယ်။",
        "ကျွန်တော် တစ်ယောက်တည်းနေတာ။",
        "အိပ်ရာခင်းက ခြောက်တယ်။ စောင်လည်း ခြောက်တယ်။",
        "ညာဘက်ခြေဖဝါးတစ်ဖက်ပဲ စိုနေတာ။"],
    c: [[3, "bigstinger"]] },

  { t: "Ten Minutes Later", l: "အိပ်ခန်း",
    g: "သုတ်လိုက်တယ်။ ပြန်တက်တယ်။ ဆယ်မိနစ်ကြာတော့ စိုလာပြန်တယ်။",
    p: "A towel dropped beside a bed and the same bare foot wet again, the towel itself dry, one "
      + "lamp burning.",
    u: ["မီးဖွင့်ပြီး သုတ်လိုက်တယ်။ အိပ်ရာပေါ် ပြန်တက်တယ်။",
        "ဆယ်မိနစ်လောက်ကြာတော့ စိုလာပြန်တယ်။",
        "ဒီတစ်ခါ ကျွန်တော် မသုတ်တော့ဘူး။"] },

  { t: "It Came Out of the Skin", l: "အိပ်ခန်း",
    g: "ရေစက်တစ်စက် ခြေဖနောင့်ပေါ်မှာ ဖောင်းလာတယ်။ အပေါ်က ကျလာတာ မဟုတ်ဘူး။ အသားထဲက ထွက်လာတာ။",
    p: "Extreme close-up of a heel with a single droplet of water swelling out of the skin itself, "
      + "beading on the surface — no source above it.",
    u: ["မီးဖွင့်ထားပြီး ခြေဖဝါးကို ကြည့်နေတယ်။",
        "ရေစက်တစ်စက်က ခြေဖနောင့်ပေါ်မှာ ဖောင်းလာတယ်။",
        "အပေါ်က ကျလာတာ မဟုတ်ဘူး။ အသားထဲက ထွက်လာတာ။",
        "ပြီးတော့ နောက်တစ်စက်။ နောက်တစ်စက်။"],
    c: [[3, "bigstinger"]] },

  { t: "The Shape of Lips", l: "အိပ်ခန်း",
    g: "ခြေဖဝါးအလယ်မှာ အသားက ချိုင့်ဝင်သွားတယ်။ နှုတ်ခမ်းနှစ်ဖက် ဖိကပ်ထားသလိုပုံစံ။",
    p: "The middle of a sole with the flesh pressed inward in the clear shape of two lips, from "
      + "beneath the skin. No mouth, no figure — only the impression.",
    u: ["ကျွန်တော် အသက်ရှူတာ ရပ်ပြီး ကြည့်နေမိတယ်။",
        "အဲဒီအချိန် ခြေဖဝါးအလယ်မှာ အသားက ဖြည်းဖြည်း ချိုင့်ဝင်သွားတယ်။",
        "နှုတ်ခမ်းနှစ်ဖက် ဖိကပ်ထားသလိုပုံစံ။"],
    c: [[2, "bigstinger"]] },

  { t: "It Breathed When I Breathed", l: "အိပ်ခန်း",
    g: "ကျွန်တော် အသက်ရှူသွင်းတော့ အဲဒီချိုင့်ကလည်း လိုက်လှုပ်တယ်။",
    p: "The same impression in the sole, caught mid-movement — deeper on the inhale — the foot "
      + "otherwise completely still.",
    u: ["ကျွန်တော် အသက်ကို ရှူသွင်းလိုက်တယ်။ အဲဒီချိုင့်ကလည်း လိုက်လှုပ်တယ်။",
        "ရှူထုတ်လိုက်တယ်။ ပြန်ပြေလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Held My Breath", l: "အိပ်ခန်း", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် အသက်ကို အောင့်ထားတယ်။ ရင်ဘတ်နာလာတဲ့အထိ။ မျက်ရည်ထွက်လာတဲ့အထိ။",
    p: "A man's face lit by one lamp, jaw clenched, eyes streaming, holding his breath past the "
      + "point of pain, staring down toward his own foot.",
    u: ["ကျွန်တော် ထပ်မရှူဘဲ အောင့်ထားလိုက်တယ်။",
        "ရင်ဘတ်နာလာတဲ့အထိ။ မျက်ရည်ထွက်လာတဲ့အထိ။"],
    c: [[1, "heartbeat"]] },

  { t: "Don't Hold It In", l: "အိပ်ခန်း",
    g: "ခြေဖဝါးထဲကနေ အသံတစ်ခု ထွက်လာတယ်။ အရမ်းတိုးတိုး။ အရမ်းနီးနီး။",
    p: "Extreme close-up of the sole of a foot, the lip-shaped impression parted very slightly as "
      + "though mid-word, everything else in the room black.",
    u: ["အဲဒီတော့မှ ခြေဖဝါးထဲကနေ အသံတစ်ခု ထွက်လာတယ်။",
        "အရမ်းတိုးတိုး။ အရမ်းနီးနီး။",
        "“မအောင့်ထားနဲ့…”"],
    c: [[2, "bigstinger"]] },

  { t: "There Are Still People Down There", l: "အိပ်ခန်း", w: ["ကျွန်တော်"],
    g: "နောက်ဆုံးပုံ — ကျွန်တော် မလှုပ်နိုင်ဘူး။ ခြေဖဝါးကိုပဲ ကြည့်နေတယ်။",
    p: "Final composition: a man frozen on the edge of his bed under one lamp, unable to move, "
      + "staring at his own foot held out in front of him. Hold on the man, not the foot.",
    u: ["ကျွန်တော် မလှုပ်နိုင်ဘူး။",
        "အသံက ထပ်ပြောတယ်။",
        "“အောက်မှာ လူတွေ ရှိသေးတယ်။”"],
    c: [[2, "finalstinger"]] },
];
reviewDrown(SCENES, CAST, LOCS);
