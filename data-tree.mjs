/**
 * သစ်ပင်တွေထက် အမြင့်မှာ — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * THREE RULES.
 *
 * 1. THE WHOLE THING IS NEVER SHOWN, AND NEITHER IS ANY PART OF IT ABOVE THE
 *    FOREARM. The script is explicit: he cannot see where a shoulder would be,
 *    or where a face would be. So the film only ever contains a finger the
 *    thickness of a branch, a fingernail the size of a car door, a forearm three
 *    trees long vanishing into black. No body, no head, no torso, no silhouette
 *    of a complete creature, no eye. Not once.
 *
 * 2. IT HUNTS BY SOUND, NOT SIGHT. The torch lies lit on the ground and it
 *    ignores it. Nothing is ever drawn toward a light; things are drawn toward a
 *    dropped bar, a dropped car, a horn. Prompts must never stage it reacting to
 *    a beam.
 *
 * 3. THE CANOPY IS IT. What reads as treetops moving in the first act is limbs.
 *    Wide shots should make the canopy feel like one continuous mass blocking
 *    the stars, so the reveal is a re-reading of something already seen.
 *
 * Cues authored deliberately small here — this story is mostly two men trying
 * not to make a noise, and heartbeat carries that better than a stinger does.
 */

export const CAST = [
  { name: "ကျွန်တော်",
    pose: "The subject stands with his back three-quarters to the camera and his head turned back toward the lens, so that BOTH the face and the full width of the back are clearly visible in one frame, full figure, neutral expression", en: "The narrator — the driver",
    prompt: "A Burmese man of about thirty-two, work shirt and trousers, a headlamp he is not "
      + "wearing, a torch in his hand. Practical, watchful. Later: filthy with dry earth, shirt "
      + "shredded across the back, face grazed." },
  { name: "ကျော်စွာ", en: "Kyaw Swa — his workmate, three years older",
    prompt: "A Burmese man of about thirty-five, stockier, a canvas tool bag on a belt at his hip, "
      + "sleeves rolled. Cheerful and loud by habit — the sort who leans on a car horn for a joke. "
      + "He has a small daughter and talks about her." },
  { name: "ဆိုင်ကယ်သမား", en: "The motorcyclist, next morning",
    prompt: "A Burmese man of about forty on an old motorbike in early morning light, helmet pushed "
      + "back, a load strapped behind him. Ordinary, and once he has looked at the road he stops "
      + "asking questions." },
  { name: "သမီးလေး", en: "Kyaw Swa's daughter, about five",
    prompt: "A Burmese girl of about five in a house dress, hair in two short plaits. Bright and "
      + "unaware. Seen in a lit living room, never in the forest." },
];

export const LOCS = [
  { name: "တောလမ်း", en: "The forest road at night",
    prompt: "A narrow unsealed road cut through dense forest at night, no street lights, no houses, "
      + "no moon. ⚠️ The canopy overhead reads as one continuous black mass blotting out the whole "
      + "sky — not individual trees against stars. Headlight beams and a dropped torch are the only "
      + "light sources." },
  { name: "ကားဘေး", en: "Beside the broken-down truck",
    prompt: "A small flatbed work truck stopped at the roadside at night with the rear near-side "
      + "wheel off, a jack under the sill, a spare leaning against the tailgate, a tool bag open on "
      + "the ground and a torch lying lit in the dirt pointing at nothing." },
  { name: "ပိုက်ထဲ", en: "Inside the drainage culvert",
    prompt: "The inside of an old concrete culvert pipe running under a road, just wide enough for a "
      + "man lying flat: dry silt, gravel, cobwebs, the ribbed concrete inches from the camera, a pale "
      + "circle of night at the open end." },
  { name: "ဧည့်ခန်း", en: "Kyaw Swa's living room",
    prompt: "A modest Myanmar living room in daylight: a low table, a sofa, a fan, family "
      + "photographs, and a boxed cake sitting unopened on the table." },
  { name: "သစ်ပင်ပေါ်က ကား", en: "The truck in the tree",
    prompt: "A work truck wedged high in the fork of a large forest tree, about fifty feet up, "
      + "windscreen collapsed inward, one door hanging open. Daylight, photographed from the ground "
      + "looking up. ⚠️ Four deep evenly spaced depressions in the roof panel." },
];

export const STYLE =
  "The Bago Yoma hills, Myanmar, present day: a forest road at night and the same road by morning. "
  + "Night is lit only by truck headlights, a hand torch and a phone — everything beyond a few metres "
  + "is solid black. Cinematic photorealism, working-men's horror rather than gothic, 35mm film grain, "
  + "shallow depth of field, 16:9, desaturated with hard practical light. ⚠️ THE CREATURE IS NEVER "
  + "SHOWN ABOVE THE FOREARM: only a finger the thickness of a branch, a fingernail the size of a car "
  + "door, an arm three trees long disappearing into darkness. Never a body, a head, a face, an eye or "
  + "a complete silhouette. ⚠️ It hunts by SOUND, never by light — nothing in this film is ever drawn "
  + "toward a beam. No gore, no corpses. No legible text, numbers, captions or watermarks.";

export const SCENES = [
  { t: "Not on the Ground", l: "သစ်ပင်ပေါ်က ကား",
    g: "ကားက မြေပြင်ပေါ် မဟုတ်ဘူး။ သစ်ပင်အကိုင်းကြားမှာ ညပ်နေတယ်။ ပေငါးဆယ်လောက် အမြင့်။",
    p: "Looking straight up from the forest floor at a work truck wedged in the high fork of a large "
      + "tree, perhaps fifty feet up, daylight behind it. Absurd and matter-of-fact.",
    u: ["ကားကို ပြန်တွေ့တဲ့အချိန်မှာ မြေကြီးပေါ်မှာ မရှိဘူး။",
        "သစ်ပင်တစ်ပင်ရဲ့ အကိုင်းကြားမှာ ညပ်နေတယ်။",
        "မြေပြင်ကနေ ပေငါးဆယ်လောက်အမြင့်။"],
    c: [[0, "bigstinger"]] },

  { t: "Four Dents in the Roof", l: "သစ်ပင်ပေါ်က ကား",
    g: "ခေါင်မိုးပေါ်မှာ ချိုင့်ကြီးလေးခု။ ညီညီညာညာ။ တစ်ခုချင်းက လူတစ်ယောက် ဝင်ထိုင်လို့ရလောက်အောင် ကျယ်တယ်။",
    p: "Close on a truck roof panel: four deep rounded depressions pressed into the steel, evenly "
      + "spaced in a row, each wide enough for a person to sit in. The metal is smoothly deformed, "
      + "not torn.",
    u: ["ကားရှေ့မှန်က အတွင်းဘက်ကို ပြိုကျနေတယ်။",
        "ခေါင်မိုးပေါ်မှာ ချိုင့်ကြီးလေးခု ရှိတယ်။ စက်နဲ့ ဖိထားသလို ညီညီညာညာ။",
        "တစ်ခုချင်းစီက လူတစ်ယောက် ဝင်ထိုင်လို့ရလောက်အောင် ကျယ်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "One Thumb Left Over", l: "သစ်ပင်ပေါ်က ကား",
    g: "ကယ်ဆယ်ရေးသမားတစ်ယောက်က မေးတယ်။ ကျွန်တော် အဖြေသိပေမယ့် မပြောချင်ဘူး။",
    p: "A rescue worker in a hard hat looking up at the treed truck with a hand shading his eyes, "
      + "another man beside him not looking up at all.",
    u: ["ကယ်ဆယ်ရေးသမားတစ်ယောက်က “ဒါကို ဘယ်လိုလုပ် အပေါ်ရောက်သွားတာလဲ” လို့ မေးတယ်။",
        "ကျွန်တော် အဖြေသိတယ်။ မပြောချင်တာ။",
        "အဲဒီချိုင့်လေးခုကို မြင်လိုက်တဲ့အချိန်ကစပြီး လက်မတစ်ချောင်း ကျန်သေးတယ်ဆိုတာပဲ ကျွန်တော် စဉ်းစားနေခဲ့မိတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Coming Back From the Job", l: "တောလမ်း", w: ["ကျွန်တော်", "ကျော်စွာ"],
    g: "ညဘက် တောလမ်းမှာ ကားမောင်းနေတယ်။ ရှေ့မီးနှစ်လုံးပဲ မြင်ရတယ်။",
    p: "The view through a truck windscreen at night on a narrow forest road: headlights on dirt and "
      + "tree trunks, everything beyond them absolute black.",
    u: ["ကျွန်တော်နဲ့ ကျော်စွာက ပဲခူးရိုးမဘက်က လုပ်ငန်းခွင်တစ်ခုကို စက်ပစ္စည်းပို့ပြီး ပြန်လာကြတာ။",
        "လမ်းမကြီးမရောက်ခင် တောလမ်းတစ်ပိုင်း ဖြတ်ရတယ်။ ကျွန်တော်က ကားမောင်းတယ်။"] },

  { t: "He Has a Daughter", l: "တောလမ်း", w: ["ကျော်စွာ"],
    g: "ကျော်စွာက ခရီးတစ်လျှောက် သမီးလေးအကြောင်း ပြောနေတယ်။",
    p: "A man in a truck passenger seat lit by dashboard glow, turned toward the driver mid-sentence, "
      + "relaxed and cheerful.",
    u: ["ကျော်စွာက အလုပ်အတူလုပ်တဲ့သူ။ အသက်က ကျွန်တော့်ထက် သုံးနှစ်ကြီးတယ်။",
        "သူ့မှာ သမီးလေးတစ်ယောက် ရှိတယ်။",
        "အဲဒီနေ့ ပြန်လာရင် ကိတ်မုန့်ဝယ်ခဲ့ဖို့ မှာထားတယ်ဆိုပြီး လမ်းတစ်လျှောက် ပြောနေတယ်။"] },

  { t: "If She Wants Cake, It's Her Birthday", l: "တောလမ်း", w: ["ကျော်စွာ"],
    g: "သမီးမွေးနေ့လားလို့ မေးတော့ သူ ရယ်တယ်။",
    p: "Close on a man laughing in a dark truck cab, one arm out the window, entirely at ease.",
    u: ["“သမီးမွေးနေ့လား” လို့ မေးတော့ သူ ရယ်တယ်။",
        "“မဟုတ်ဘူး။ သူက ကိတ်မုန့်စားချင်ရင် မွေးနေ့ပဲ”"] },

  { t: "We Should Have Left in Daylight", l: "တောလမ်း",
    g: "ညဘက် တောလမ်း။ အပေါ်က သစ်ပင်တွေက လမ်းကို ပိတ်ဖုံးထားတယ်။",
    p: "A forest road at night seen from behind the truck, the canopy closing overhead so that no sky "
      + "is visible at all — a tunnel of black.",
    u: ["ကျွန်တော်တို့ နေ့ခင်းကတည်းက ပြန်ရမှာ။",
        "ပစ္စည်းအပ်တာ ကြန့်ကြာလို့ ညဘက်မှ ထွက်လာရတယ်။"] },

  { t: "The Horn Sticks", l: "တောလမ်း",
    g: "ကားဟွန်းခလုတ်က ကပ်နေတယ်။ တစ်ခါနှိပ်ရင် အသံအကြာကြီး ထွက်နေတယ်။",
    p: "Extreme close-up of a worn truck horn button in the centre of a steering wheel, a thumb "
      + "resting near it, dashboard light from below.",
    u: ["ကားဟွန်းကလည်း ခလုတ်ကပ်နေတယ်။",
        "နေ့ခင်းက ကျော်စွာ တစ်ခါနှိပ်လိုက်လို့ အသံအကြာကြီး ထွက်နေခဲ့တယ်။",
        "ကျွန်တော်က ခလုတ်ကို လက်နဲ့ ပြန်ဆွဲမပေးမှ ရပ်တာ။ “အဲဒါ မနှိပ်နဲ့တော့” လို့ ပြောထားခဲ့တယ်။"],
    c: [[2, "stinger"]] },

  { t: "A Flat, Past Eleven", l: "ကားဘေး",
    g: "ညဆယ့်တစ်နာရီကျော်။ နောက်ဘီးတစ်ဖက် ပေါက်တယ်။ လမ်းဘေးမှာ ရပ်လိုက်တယ်။",
    p: "A work truck pulled onto the verge at night with its hazards on, a flat rear tyre visibly "
      + "collapsed, headlights throwing two cones into the trees ahead.",
    u: ["ညဆယ့်တစ်နာရီကျော်တော့ နောက်ဘီးတစ်ဖက် ပေါက်တယ်။",
        "ကျွန်တော် ကားကို လမ်းဘေးချပြီး စက်ပိတ်လိုက်တယ်။"] },

  { t: "No Houses, No Lights", l: "တောလမ်း",
    g: "အနီးမှာ အိမ်မရှိ၊ လမ်းမီးမရှိ။ ကားမီးနဲ့ ဓာတ်မီးပဲ ရှိတယ်။",
    p: "A very wide night view of the road in both directions, empty, no lights of any kind except "
      + "the stopped truck's own — the darkness total beyond fifty metres.",
    u: ["အနီးမှာ အိမ်မရှိဘူး။ လမ်းမီးမရှိဘူး။",
        "ကားမီးနဲ့ လက်နှိပ်ဓာတ်မီးပဲ ရှိတယ်။"] },

  { t: "No Wind, But the Treetops Moved", l: "တောလမ်း",
    g: "မိုးမရွာ၊ လေမတိုက်ဘူး။ ဒါပေမယ့် သစ်ပင်ထိပ်တွေက လှုပ်နေတယ်။",
    p: "The upper canopy at night against a starless sky: the leaves at ground level hang dead still "
      + "while high above, the mass is shifting. Photographed so it reads as wind — for now.",
    u: ["မိုးမရွာဘူး။ လေမတိုက်ဘူး။",
        "ဒါပေမယ့် သစ်ပင်ထိပ်တွေက လှုပ်နေတယ်။",
        "အဲဒီအချိန် ကျွန်တော် သတိမထားမိဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Two Taps on the Wheel", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျော်စွာက သံချောင်းနဲ့ ဘီးဘေးကို နှစ်ချက် ခေါက်လိုက်တယ်။ တင်။ တင်။",
    p: "A man crouched at a wheel arch striking the rim twice with an iron bar, close, the sound "
      + "implied by the blur of the bar.",
    u: ["ကျော်စွာက ဘီးအပိုကို ချတယ်။ ကျွန်တော် ကားကို ထောက်တင်တယ်။",
        "သူ ဘီးနတ်ဖြုတ်ရင်း သံချောင်းကို ဘီးဘေးမှာ နှစ်ချက်ခေါက်လိုက်တယ်။ တင်။ တင်။"] },

  { t: "Something Answered", l: "တောလမ်း",
    g: "အပေါ်ကနေ အသံပြန်လာတယ်။ တောက်။ တောက်။",
    p: "The black canopy overhead photographed wide and still, nothing visible in it at all — the "
      + "frame held on darkness while a sound comes back.",
    u: ["အပေါ်ကနေ အသံပြန်လာတယ်။ တောက်။ တောက်။"],
    c: [[0, "bigstinger"]] },

  { t: "What Bird Is That", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျော်စွာ ရယ်တယ်။ ဘာငှက်လဲလို့ မေးတယ်။",
    p: "A crouching man glancing upward with a grin, unbothered, one hand still on a wheel nut.",
    u: ["ကျော်စွာ ရယ်တယ်။ “ဘာငှက်လဲဟ”"] },

  { t: "The Torch Doesn't Reach", l: "တောလမ်း",
    g: "မီးကို အပေါ်ထိုးကြည့်တယ်။ သစ်ရွက်၊ အကိုင်း၊ ပြီးတော့ မီးမရောက်တဲ့ အမှောင်။",
    p: "A torch beam angled up into a tree: leaves and branches lit for fifteen feet, and above that "
      + "the beam simply stops against a wall of black.",
    u: ["ကျွန်တော် မီးကို အပေါ်ထိုးကြည့်တယ်။",
        "သစ်ရွက်တွေ။ အကိုင်းတွေ။ ပြီးတော့ မီးမရောက်နိုင်တဲ့ အမှောင်။ ဘာမှ မမြင်ဘူး။"] },

  { t: "It Moved When He Moved", l: "တောလမ်း",
    g: "ကျော်စွာ လှုပ်တဲ့အချိန်တိုင်း အပေါ်က အကိုင်းတွေ လှုပ်တယ်။ သူ ရပ်ရင် ရပ်တယ်။",
    p: "A split composition: a man working at the wheel in the lower third, and the canopy filling "
      + "the rest — the canopy caught mid-shift, matching his motion.",
    u: ["အောက်ကို မီးပြန်ချလိုက်တယ်။ ကျော်စွာက ဆက်လုပ်တယ်။",
        "သူ့ခါးမှာ ချိတ်ထားတဲ့ ကိရိယာအိတ်က လှုပ်ရင် သံချင်းထိသံ ထွက်တယ်။",
        "အပေါ်က အကိုင်းတွေက သူ လှုပ်တဲ့အချိန်တိုင်း လှုပ်လာတယ်။ သူ ရပ်ရင် ရပ်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Stop for a Moment", l: "ကားဘေး", w: ["ကျွန်တော်", "ကျော်စွာ"],
    g: "ကျွန်တော် တိုးတိုးခေါ်လိုက်တယ်။ သူ လက်ရပ်လိုက်တယ်။",
    p: "Two men gone completely still beside a jacked-up truck, one crouched with a wrench frozen in "
      + "his hand, both listening.",
    u: ["“ကျော်စွာ” ကျွန်တော် တိုးတိုးခေါ်လိုက်တယ်။ သူ မော့ကြည့်တယ်။",
        "“ခဏရပ်နေ” သူ လက်ရပ်လိုက်တယ်။"] },

  { t: "Not Even Crickets", l: "တောလမ်း",
    g: "တောထဲက အသံတွေကို နားထောင်ကြည့်တယ်။ ဘာသံမှ မရှိဘူး။ ပုရစ်သံတောင် မကြားရဘူး။",
    p: "A wide night view into dense forest either side of the road, leaves motionless, the image "
      + "constructed to feel acoustically dead.",
    u: ["တောထဲက အသံတွေကို နားထောင်ကြည့်တယ်။",
        "ဘာသံမှ မရှိဘူး။ ပုရစ်သံတောင် မကြားရဘူး။",
        "ညဘက်တောထဲမှာ အဲဒီလောက် တိတ်နေတာကို ကျွန်တော် အရင်က မကြားဖူးဘူး။"],
    c: [[2, "heartbeat"]] },

  { t: "The Forest Was Holding Its Breath", l: "တောလမ်း",
    g: "တိတ်ဆိတ်မှုဆိုတာ အသံမရှိတာပဲလို့ ထင်ခဲ့တယ်။ အဲဒီညမှာတော့ တောတစ်တောလုံး အသက်အောင့်ထားသလို။",
    p: "The canopy overhead, very wide, filling the frame edge to edge as a single unbroken dark "
      + "mass. Not a gap of sky anywhere.",
    u: ["တိတ်ဆိတ်မှုဆိုတာ အသံမရှိတာပဲလို့ အရင်က ထင်ခဲ့တယ်။",
        "အဲဒီညမှာတော့ တောတစ်တောလုံး အသက်အောင့်ထားတာနဲ့ တူတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Set the Bar Down Slowly", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျော်စွာက သံချောင်းကို မြေကြီးပေါ် ဖြည်းဖြည်း ချတယ်။ ကျောက်တုံးကို ထိသွားတယ်။ ချင်။",
    p: "An iron bar being lowered to the ground by a careful hand — and the far end of it just "
      + "touching a stone. Extreme close-up, the contact point sharp.",
    u: ["ကျော်စွာက လက်ထဲက သံချောင်းကို မြေကြီးပေါ် ဖြည်းဖြည်းချတယ်။",
        "သူ့လက်လွတ်သွားတဲ့အချိန်မှာ သံချောင်းက ကျောက်တုံးတစ်တုံးကို ထိတယ်။ ချင်။"],
    c: [[1, "bigstinger"]] },

  { t: "Something Came Down", l: "ကားဘေး",
    g: "အပေါ်ကနေ တစ်ခုခု ကျလာတယ်။ ရှည်ရှည်၊ မည်းမည်း။ သစ်ကိုင်းကြီးတစ်ကိုင်းလို။",
    p: "A long dark column descending fast through the frame beside the truck, blurred with motion, "
      + "reading as a falling branch. Two men throwing themselves backward at the edge of frame.",
    u: ["အပေါ်ကနေ တစ်ခုခု ကျလာတယ်။",
        "ကျွန်တော်တို့နှစ်ယောက်လုံး နောက်ကို ယိုင်သွားတယ်။",
        "ရှည်ရှည်၊ မည်းမည်း။ သစ်ကိုင်းကြီးတစ်ကိုင်းလို။"],
    c: [[0, "bigstinger"]] },

  { t: "The Ground Split", l: "ကားဘေး",
    g: "သံချောင်းကျတဲ့နေရာကို တည့်တည့် ထိတယ်။ မြေကြီး ပွင့်ထွက်တယ်။",
    p: "Earth bursting upward in a ring around a point of impact on the roadside, dirt and stones "
      + "thrown out, a dark mass driven into the ground at the centre.",
    u: ["သံချောင်းကျတဲ့နေရာကို တည့်တည့် ထိတယ်။ မြေကြီး ပွင့်ထွက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Then It Bent", l: "ကားဘေး",
    g: "ပြီးတော့ အဲဒီအရာက ကွေးသွားတယ်။ အဆစ်တစ်ခု။ နောက်ထပ် အဆစ်တစ်ခု။",
    p: "The same dark column, still half-buried, now hinged partway along its length — and hinged "
      + "again beyond that. Two joints where a branch would have none. Torchlight from the side.",
    u: ["ပြီးတော့ အဲဒီအရာက ကွေးသွားတယ်။",
        "အဆစ်တစ်ခု။ နောက်ထပ် အဆစ်တစ်ခု။"],
    c: [[1, "bigstinger"]] },

  { t: "A Fingernail the Size of a Car Door", l: "ကားဘေး",
    g: "အဖျားမှာ အဖြူရောင်ပြားပြားတစ်ခု။ လက်သည်း — ကားတံခါးတစ်ချပ်လောက် ကြီးတယ်။",
    p: "At the end of the column, a broad flat plate of pale keratin catching the torchlight — "
      + "unmistakably a fingernail, roughly the size and shape of a car door. The truck in frame "
      + "beside it for scale.",
    u: ["အဖျားမှာ အဖြူရောင်ပြားပြားတစ်ခု ပါတယ်။",
        "ကျွန်တော် အဲဒါကို ကြည့်နေရင်း လည်ချောင်းပိတ်သွားတယ်။",
        "လက်သည်း။ ကားတံခါးတစ်ချပ်လောက် ကြီးတဲ့ လက်သည်း။"],
    c: [[2, "bigstinger"]] },

  { t: "It Felt Along the Ground", l: "ကားဘေး",
    g: "အဲဒီလက်ချောင်းက မြေကြီးကို ဖြည်းဖြည်း စမ်းတယ်။ သံချောင်းကို ထိတယ်။",
    p: "The vast fingertip dragging slowly across the dirt, ploughing a shallow furrow, its tip "
      + "meeting the dropped iron bar.",
    u: ["အဲဒီလက်ချောင်းက မြေကြီးကို ဖြည်းဖြည်း စမ်းတယ်။",
        "သံချောင်းကို ထိတယ်။ နည်းနည်း တွန်းကြည့်တယ်။",
        "သံချောင်းက ကျောက်တုံးပေါ် လှိမ့်ပြီး ထပ်မြည်တယ်။"],
    c: [[2, "stinger"]] },

  { t: "The Whole Canopy Shifted", l: "တောလမ်း",
    g: "အပေါ်က သစ်ပင်ထိပ်တွေ တစ်ပြိုင်နက် ရွေ့လာတယ်။ ခေါင်းပေါ်ကို ပိုနီးလာသလို။",
    p: "The black mass overhead seen to have moved lower and closer between two otherwise identical "
      + "wide shots — the treeline visibly nearer the road than it was.",
    u: ["အပေါ်က သစ်ပင်ထိပ်တွေ တစ်ပြိုင်နက် ရွေ့လာတယ်။",
        "ကျွန်တော်တို့ခေါင်းပေါ်ကို ပိုနီးလာသလို။"],
    c: [[1, "bigstinger"]] },

  { t: "Don't Make a Sound", l: "ကားဘေး", w: ["ကျွန်တော်", "ကျော်စွာ"],
    g: "ကျော်စွာက လက်မောင်းကို ဖမ်းတယ်။ ကျွန်တော် သူ့ပါးစပ်ကို လက်ညှိုးထိုးပြတယ်။",
    p: "One man gripping another's forearm in the dark and the second pressing a finger to his own "
      + "lips, both faces lit only by a torch lying on the ground.",
    u: ["ကျော်စွာက ကျွန်တော့်လက်မောင်းကို ဖမ်းတယ်။",
        "ကျွန်တော် သူ့ပါးစပ်ကို လက်ညှိုးထိုးပြတယ်။ အသံမထွက်နဲ့။"] },

  { t: "It Was Hunting the Sound", l: "ကားဘေး",
    g: "ဓာတ်မီးက မြေကြီးပေါ်မှာ လင်းနေတုန်းပဲ။ အဲဒီအလင်းကို သူ စိတ်မဝင်စားဘူး။",
    p: "A lit torch lying on the ground casting a beam sideways across the dirt — and the enormous "
      + "fingertip passing directly through the beam without any reaction at all, still going for the "
      + "iron bar.",
    u: ["ကျွန်တော် ဘာအရာလဲ မသိဘူး။",
        "ဒါပေမယ့် သူက အသံကို လိုက်ရှာနေတာကိုတော့ မြင်နေရတယ်။",
        "လက်နှိပ်ဓာတ်မီးက မြေကြီးပေါ်မှာ လင်းနေတုန်းပဲ။ အဲဒီအလင်းကိုတော့ သူ စိတ်မဝင်စားဘူး။",
        "သံချောင်းကိုပဲ ထပ်ထပ်တို့နေတယ်။ အသံပြန်ထွက်မလားဆိုပြီး စမ်းနေသလို။"],
    c: [[3, "bigstinger"]] },

  { t: "We Slid Around the Truck", l: "ကားဘေး", w: ["ကျွန်တော်", "ကျော်စွာ"],
    g: "ခြေထောက်ကို မကြွရဲဘူး။ မြေကြီးပေါ်မှာပဲ လျှောရွှေ့တယ်။",
    p: "Two men edging along the flank of a truck without lifting their feet, soles sliding through "
      + "dirt, backs flat to the panels.",
    u: ["ကျွန်တော်တို့ ကားရဲ့ တစ်ဖက်ခြမ်းကို ဖြည်းဖြည်း ရွေ့ကြတယ်။",
        "ခြေထောက်ကို မကြွရဲဘူး။ မြေကြီးပေါ်မှာပဲ လျှောရွှေ့တယ်။",
        "ကားရှေ့ခန်းကို ရောက်ရင် စက်နှိုးပြီး ဘီးပျက်တဲ့အတိုင်း မောင်းထွက်ဖို့ စဉ်းစားတယ်။"] },

  { t: "He Held His Tool Bag Still", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျော်စွာက ကိရိယာအိတ်ကို လက်နဲ့ ဖိထားတယ်။ မြည်မှာစိုးလို့။",
    p: "A hand clamped hard over a canvas tool bag at a man's hip, holding the metal inside it from "
      + "shifting.",
    u: ["ကျော်စွာက ကျွန်တော့်နောက်မှာ။ သူ့ကိရိယာအိတ်ကို လက်နဲ့ ဖိထားတယ်။"] },

  { t: "The Jack Slipped", l: "ကားဘေး",
    g: "ဘီးထောက်က နည်းနည်း လျှောသွားတယ်။ ကားကိုယ်ထည်က တစ်ချက် ကျတယ်။ ဂျောက်။",
    p: "A jack under a truck sill kicking sideways and the body dropping an inch, the suspension "
      + "compressing — caught at the instant of the drop.",
    u: ["ကားနောက်ထောင့်ကနေ လှည့်တဲ့အချိန်မှာ ဘီးထောက်က နည်းနည်း လျှောသွားတယ်။",
        "ကားကိုယ်ထည်က တစ်ချက် ကျတယ်။ ဂျောက်။"],
    c: [[1, "bigstinger"]] },

  { t: "Four Fingers Came Down", l: "ကားဘေး",
    g: "အပေါ်က လက်ချောင်းတွေ ဆင်းလာတယ်။ တစ်ချောင်းတည်း မဟုတ်တော့ဘူး။",
    p: "Multiple enormous fingertips descending around the truck at once — one resting on the roof, "
      + "one on the tailgate, one in the dirt. The arms they belong to vanish upward out of frame.",
    u: ["အပေါ်က လက်ချောင်းတွေ ဆင်းလာတယ်။ တစ်ချောင်းတည်း မဟုတ်တော့ဘူး။",
        "ကားခေါင်မိုးပေါ်မှာ တစ်ချောင်း။ နောက်ဖုံးပေါ်မှာ တစ်ချောင်း။ မြေကြီးပေါ်မှာ နောက်တစ်ချောင်း။"],
    c: [[0, "bigstinger"]] },

  { t: "One on His Calf", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျော်စွာရဲ့ ခြေသလုံးပေါ်မှာ တစ်ချောင်း။ သူ့ပါးစပ် ပွင့်သွားတယ်။",
    p: "A single vast fingertip resting across a man's lower leg, pinning it to the ground without "
      + "crushing it, his knee bent awkwardly beneath.",
    u: ["ကျော်စွာရဲ့ ခြေသလုံးပေါ်မှာ တစ်ချောင်း။",
        "သူ့ပါးစပ် ပွင့်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Bit My Hand", l: "ကားဘေး", w: ["ကျွန်တော်", "ကျော်စွာ"],
    g: "ကျွန်တော် သူ့ပါးစပ်ကို ဖိပိတ်လိုက်တယ်။ သူ ကျွန်တော့်လက်ကို ကိုက်မိတယ်။ ကျွန်တော် လက်မရုပ်ဘူး။",
    p: "A hand clamped hard over a screaming man's mouth, the man's eyes wide, teeth visibly closed "
      + "on the palm. Neither of them making a sound.",
    u: ["ကျွန်တော် သူ့ပါးစပ်ကို ချက်ချင်း ဖိပိတ်လိုက်တယ်။",
        "သူ့မျက်လုံးတွေ ပြူးနေတယ်။ ကျွန်တော့်လက်ကို ကိုက်မိတယ်။ နာလွန်းလို့။",
        "ကျွန်တော် လက်မရုပ်ဘူး။"],
    c: [[2, "heartbeat"]] },

  { t: "It Was Listening", l: "ကားဘေး",
    g: "လက်ချောင်းက သူ့ခြေထောက်ကို ဖိထားရင်း နားထောင်နေတယ်။",
    p: "The enormous fingertip motionless on a man's leg, held still — the stillness of something "
      + "waiting to feel a vibration rather than see a movement.",
    u: ["အပေါ်က လက်ချောင်းက သူ့ခြေထောက်ကို ဖိထားရင်း နားထောင်နေတယ်။",
        "တစ်ခုခု လှုပ်မလား။ အသံထွက်မလား။",
        "သူ့ခြေထောက်နာတာထက် အဲဒီစောင့်နေတဲ့အချိန်က ပိုကြောက်ဖို့ကောင်းတယ်။"],
    c: [[2, "heartbeat"]] },

  { t: "The Culvert", l: "တောလမ်း",
    g: "လမ်းတစ်ဖက်မှာ ရေစီးမြောင်းဟောင်း။ လမ်းအောက်ဖြတ်ထားတဲ့ ကွန်ကရစ်ပိုက်ကြီး။",
    p: "An old concrete culvert mouth in a roadside ditch at night, dry, dark, just wide enough for a "
      + "man to crawl into.",
    u: ["ကားလမ်းတစ်ဖက်မှာ ရေစီးမြောင်းဟောင်းတစ်ခု ရှိတယ်။",
        "လမ်းအောက်ဖြတ်ထားတဲ့ ကွန်ကရစ်ပိုက်ကြီး။ အထဲကို လူတစ်ယောက် ဝမ်းလျားဝင်လို့ရတယ်။"] },

  { t: "He Could Not Come", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျွန်တော် လက်ညှိုးထိုးပြတယ်။ သူ ခေါင်းညိတ်တယ်။ ပြီးတော့ ကိုယ့်ခြေထောက်ကို ငုံ့ကြည့်တယ်။ မလွတ်ဘူး။",
    p: "A man nodding at a plan and then looking down at his own pinned leg, the understanding "
      + "arriving on his face.",
    u: ["ကျွန်တော် ကျော်စွာကို လက်ညှိုးထိုးပြတယ်။ သူ ခေါင်းညိတ်တယ်။",
        "ပြီးတော့ ကိုယ့်ခြေထောက်ကို ငုံ့ကြည့်တယ်။ မလွတ်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Don't Go", l: "ကားဘေး", w: ["ကျော်စွာ", "ကျွန်တော်"],
    g: "ကျော်စွာက ကျွန်တော့်လက်ကို ဆွဲထားတယ်။ သူ့မျက်နှာမှာ ရေးထားတဲ့စကား — မသွားနဲ့။",
    p: "A hand gripping a wrist hard in the dark, and above it a face saying nothing at all but "
      + "entirely legible.",
    u: ["ကျွန်တော် သူ့ကို ထားခဲ့လို့ မရဘူး။",
        "ဒါပေမယ့် အဲဒီလက်ချောင်းကို တွန်းဖယ်ဖို့လည်း မဖြစ်နိုင်ဘူး။",
        "ကျွန်တော် ပိုက်ပေါက်ဘက်ကို နည်းနည်း ဆုတ်တယ်။",
        "ကျော်စွာက ကျွန်တော့်လက်ကို ဆွဲထားတယ်။",
        "သူ့မျက်နှာမှာ ရေးထားတဲ့စကားကို ကျွန်တော် ဖတ်မိတယ်။ မသွားနဲ့။"] },

  { t: "Two Pats, Then I Let Go", l: "ကားဘေး",
    g: "ကျွန်တော် သူ့လက်ကို နှစ်ချက် ပုတ်ပေးပြီး လွှတ်လိုက်တယ်။",
    p: "One hand patting another twice and then releasing it, the freed hand staying open in the air "
      + "where it was.",
    u: ["ကျွန်တော် သူ့လက်ကို နှစ်ချက် ပုတ်ပေးလိုက်တယ်။ ပြီးတော့ လွှတ်လိုက်တယ်။",
        "သုံးလှမ်းလောက် နောက်ဆုတ်တယ်။ အသက်ရှူလိုက်တယ်။"],
    c: [[1, "heartbeat"]] },

  { t: "Hey!", l: "ကားဘေး", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် အော်လိုက်တယ်။ “ဟေ့!” အပေါ်က အမှောင်တစ်ခုလုံး ကျွန်တော့်ဘက် ရွေ့လာတယ်။",
    p: "A man shouting upward with his whole body, and the entire black mass overhead beginning to "
      + "lean toward him — the darkness itself moving as one.",
    u: ["အော်လိုက်တယ်။ “ဟေ့!”",
        "အပေါ်က အမှောင်တစ်ခုလုံး ကျွန်တော့်ဘက် ရွေ့လာတယ်။",
        "ကျော်စွာ့ခြေထောက်ပေါ်က လက်ချောင်း မြောက်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Running", l: "တောလမ်း", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် လှည့်ပြေးတယ်။ နောက်မှာ မြေကြီးပေါက်ထွက်သံ။",
    p: "A man sprinting along a dark road away from camera, and behind him two craters erupting in "
      + "the dirt where fingertips have struck.",
    u: ["ကျွန်တော် လှည့်ပြေးတယ်။",
        "နောက်မှာ မြေကြီးပေါက်ထွက်သံ ကြားရတယ်။",
        "လက်ချောင်းတစ်ချောင်းက ကျွန်တော့်ရှေ့မှာ လာထိတယ်။ နောက်တစ်ချောင်းက ဘယ်ဘက်မှာ။"],
    c: [[2, "bigstinger"]] },

  { t: "Into the Pipe", l: "ပိုက်ထဲ", w: ["ကျွန်တော်"],
    g: "မြောင်းထဲ ခုန်ချပြီး ပိုက်ထဲကို ဝမ်းလျားထိုး ဝင်တယ်။",
    p: "A man diving head-first into a culvert mouth on his belly, legs still outside, dirt spraying.",
    u: ["ကျွန်တော် မြောင်းထဲ ခုန်ချလိုက်တယ်။",
        "ပြီးတော့ ပိုက်ထဲကို ဝမ်းလျားထိုးဝင်တယ်။"] },

  { t: "Dry Earth and Stones", l: "ပိုက်ထဲ",
    g: "ပိုက်ထဲမှာ မြေခြောက်၊ အမှိုက်၊ ကျောက်စတွေ။ မျက်နှာနဲ့တောင် မရှောင်နိုင်ဘူး။",
    p: "Inside a culvert: a face pressed sideways into dry silt and gravel, the ribbed concrete "
      + "inches above, lit by a phone screen held under the chest.",
    u: ["ပိုက်ထဲမှာ မြေခြောက်တွေ ရှိတယ်။ အမှိုက်နဲ့ ကျောက်စတွေ ရှိတယ်။",
        "ကျွန်တော် မျက်နှာနဲ့တောင် မရှောင်နိုင်ဘူး။",
        "တတ်နိုင်သလောက် အတွင်းကို ဝင်တယ်။ ကျောပြင်နဲ့ ပိုက်အပေါ်သား ပွတ်မိနေတယ်။"] },

  { t: "Scratching at the Concrete", l: "ပိုက်ထဲ",
    g: "နောက်ကနေ လက်သည်းနဲ့ ကွန်ကရစ်ကို ခြစ်တဲ့အသံ။ လက်ချောင်းက အပေါက်ဝကို တွေ့သွားပြီ။",
    p: "Looking back down the pipe from inside toward the open end: a huge fingertip working at the "
      + "rim of the opening, chips of concrete falling.",
    u: ["နောက်ကနေ လက်သည်းနဲ့ ကွန်ကရစ်ကို ခြစ်တဲ့အသံ ထွက်လာတယ်။",
        "လက်ချောင်းက အပေါက်ဝကို တွေ့သွားပြီ။"],
    c: [[1, "bigstinger"]] },

  { t: "Half the Opening Went Dark", l: "ပိုက်ထဲ",
    g: "အဖျားကို အထဲ ထိုးကြည့်တယ်။ ပိုက်ဝတစ်ဝက် ပိတ်သွားတယ်။",
    p: "The pale circle at the end of the pipe with the top half blotted out by something pushed "
      + "into it, dust sifting down inside the pipe.",
    u: ["သူက အပြင်ဘက်ကို စမ်းတယ်။ ပြီးတော့ အဖျားကို အထဲ ထိုးကြည့်တယ်။",
        "ပိုက်ဝတစ်ဝက် ပိတ်သွားတယ်။",
        "လက်သည်းအောက်က မြေမှုန့်တွေ ကျွန်တော့်ခြေထောက်ပေါ် ကျလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Blocked Both Ways", l: "ပိုက်ထဲ",
    g: "အရှေ့မှာ ပိုက်ပျက်ပြီး မြေတွေနဲ့ ပိတ်နေတယ်။ နောက်မှာ လက်ချောင်း။",
    p: "The far end of the pipe entirely collapsed and packed with earth, a hand pressed against it — "
      + "no way forward at all.",
    u: ["ကျွန်တော် ထပ်ဝင်လို့ မရတော့ဘူး။",
        "အရှေ့မှာ ပိုက်ပျက်ပြီး မြေတွေနဲ့ ပိတ်နေတယ်။ နောက်မှာ လက်ချောင်း။"] },

  { t: "I Needed to Sneeze", l: "ပိုက်ထဲ", w: ["ကျွန်တော်"],
    g: "နှာခေါင်းထဲ ဖုန်ဝင်လို့ နှာချေချင်လာတယ်။ ပါးစပ်ကို အဝတ်နဲ့ ဖိထားလိုက်တယ်။",
    p: "A face in extreme close-up inside the pipe with a balled-up cloth crushed over the nose and "
      + "mouth, eyes streaming, absolutely rigid.",
    u: ["ကျွန်တော် အသက်ကို အတတ်နိုင်ဆုံး တိုးတိုးရှူတယ်။",
        "နှာခေါင်းထဲ ဖုန်ဝင်လို့ နှာချေချင်လာတယ်။",
        "ပါးစပ်ကို အဝတ်နဲ့ ဖိထားလိုက်တယ်။"],
    c: [[2, "heartbeat"]] },

  { t: "The Horn", l: "ပိုက်ထဲ",
    g: "အဲဒီအချိန်မှာ ကားဟွန်း မြည်လာတယ်။ အကျယ်ကြီး။ တစ်ဆက်တည်း။",
    p: "The blocked pipe mouth suddenly clear again, the fingertip gone, night visible beyond — and "
      + "distant headlight glare beyond that.",
    u: ["အဲဒီအချိန်မှာ ကားဟွန်း မြည်လာတယ်။ အကျယ်ကြီး။ တစ်ဆက်တည်း။",
        "လက်ချောင်း ရပ်သွားတယ်။ ပြီးတော့ အပေါက်ထဲကနေ ပြန်ထွက်သွားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "He Was in the Cab", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျော်စွာ ကားရှေ့ခန်းထဲ ရောက်နေပြီ။ တံခါးဖွင့်ထား။ ခြေထောက်တစ်ဖက် အပြင်မှာ။",
    p: "Seen from low in a ditch: a man half-inside a truck cab with the door swung wide and one leg "
      + "still out on the step, dragging himself in.",
    u: ["ကျွန်တော် ပိုက်ဝဘက်ကို နည်းနည်း ပြန်ရွေ့ပြီး အပြင်ကြည့်တယ်။",
        "ကျော်စွာ ကားရှေ့ခန်းထဲ ရောက်နေပြီ။ ကားတံခါးကို ဖွင့်ထားတယ်။",
        "ခြေထောက်တစ်ဖက်က အပြင်မှာ။ သူ့ကိုယ်ကို ဆွဲထုတ်ဖို့ လုပ်နေတယ်။"] },

  { t: "He Left It Stuck", l: "ကားဘေး",
    g: "ဟွန်းက တစ်ဆက်တည်း မြည်နေတယ်။ ခလုတ် ကပ်နေပြီ။ သူ ပြန်ဆွဲမထားဘူး။",
    p: "Extreme close-up of a horn button pressed flat and jammed in its housing, a thumb already "
      + "withdrawn from it.",
    u: ["ဟွန်းက တစ်ဆက်တည်း မြည်နေတယ်။ ခလုတ် ကပ်နေပြီ။",
        "သူ ပြန်ဆွဲမထားဘူး။",
        "ကျွန်တော့်အတွက် အဲဒီအသံကို ထားပေးခဲ့တာ။"],
    c: [[2, "bigstinger"]] },

  { t: "He Waved Me Back", l: "ကားဘေး", w: ["ကျော်စွာ"],
    g: "ကျော်စွာက အဝေးကနေ လက်ဖဝါးပြပြီး တားတယ်။ မထွက်နဲ့။",
    p: "A man in a truck cab holding up an open palm toward the camera in a clear stop gesture, his "
      + "face calm, the headlights washing past him.",
    u: ["ကျွန်တော် အပြင်ထွက်ပြီး သူ့ဆီ ပြေးချင်တယ်။",
        "ကျော်စွာက ကျွန်တော့်ကို မြင်တယ်။",
        "အဝေးကနေ လက်ဖဝါးပြပြီး တားတယ်။ မထွက်နဲ့။"],
    c: [[2, "bigstinger"]] },

  { t: "The Roof Went In", l: "ကားဘေး",
    g: "ကားခေါင်မိုးကို လက်ချောင်းတွေ ဖိချလိုက်တယ်။ သံပြားက ဝင်ချိုင့်သွားတယ်။",
    p: "A truck roof panel deforming inward under pressure from above, four depressions appearing at "
      + "once — the same four that were in the opening shot.",
    u: ["အဲဒီခဏမှာ ကားခေါင်မိုးကို လက်ချောင်းတွေ ဖိချလိုက်တယ်။",
        "သံပြားက ဝင်ချိုင့်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Front Wheels First", l: "ကားဘေး",
    g: "ကားက မြေကြီးပေါ်ကနေ မြောက်လာတယ်။ အရင်ဆုံး ရှေ့ဘီးတွေ။ နောက်တော့ နောက်ဘီးတွေ။",
    p: "A truck lifting off the road nose-first, front wheels clear of the dirt and rear still "
      + "touching, headlights swinging upward into the trees.",
    u: ["ကျော်စွာ အပြင်ကို ထွက်ဖို့ ကြိုးစားတယ်။ နာနေတဲ့ခြေထောက်က မလိုက်ဘူး။",
        "ကားက မြေကြီးပေါ်ကနေ မြောက်လာတယ်။",
        "အရင်ဆုံး ရှေ့ဘီးတွေ။ နောက်တော့ နောက်ဘီးတွေ။"],
    c: [[1, "bigstinger"]] },

  { t: "The Door Still Open", l: "တောလမ်း",
    g: "ကားကြီးက အပေါ်ကို တက်သွားတယ်။ တံခါးပွင့်နေလျက်သား။",
    p: "A truck rising into the canopy with one door hanging open, seen from below, the spare wheel "
      + "falling away from the back of it.",
    u: ["ဘီးအပိုက ကားနောက်ကနေ ပြုတ်ကျတယ်။",
        "ကျော်စွာရဲ့ တံခါးပွင့်နေလျက်သား ကားကြီးက အပေါ်ကို တက်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Had to Cover My Own Mouth", l: "ပိုက်ထဲ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် သူ့နာမည်ကို အော်မိတော့မလို့ ပါးစပ်ကို ကိုယ့်လက်နဲ့ကိုယ် ပိတ်ထားရတယ်။",
    p: "A man inside the pipe with both hands crushed over his own mouth, face wet, looking upward "
      + "through the culvert opening.",
    u: ["ကျွန်တော် သူ့နာမည်ကို အော်မိတော့မလို့။",
        "ပါးစပ်ကို ကိုယ့်လက်နဲ့ ကိုယ်ပိတ်ထားလိုက်ရတယ်။",
        "သူ မြှောက်ထားတဲ့လက်ကို ကျွန်တော် မြင်နေရတုန်းပဲ။ မထွက်နဲ့။"],
    c: [[2, "bigstinger"]] },

  { t: "Above the Treetops", l: "တောလမ်း",
    g: "ကားဟွန်းသံက သစ်ပင်ထိပ်တွေအထက်ကို ရောက်သွားတယ်။",
    p: "Looking up at the canopy from the ditch: nothing visible at all, just black — and the sense "
      + "of a sound receding upward out of it.",
    u: ["ကားဟွန်းသံက သစ်ပင်ထိပ်တွေအထက်ကို ရောက်သွားတယ်။",
        "အဲဒီအချိန်မှ ကျွန်တော် နားလည်လာတယ်။"] },

  { t: "I Thought They Were Leaves", l: "တောလမ်း",
    g: "ညကတည်းက လှုပ်နေတယ်လို့ ထင်ခဲ့တဲ့ သစ်ပင်ထိပ်တွေ။ ကြယ်တွေကို ကာထားတဲ့ အမည်းရောင်ပုံကြီး။",
    p: "The same wide canopy shot from the first act, re-presented — identical framing, now read as "
      + "one enormous dark form occupying the whole sky.",
    u: ["ညကတည်းက လှုပ်နေတယ်လို့ ထင်ခဲ့တဲ့ သစ်ပင်ထိပ်တွေ။",
        "ကြယ်တွေကို ကာထားတဲ့ အမည်းရောင်ပုံကြီး။",
        "အဲဒါတွေ အားလုံးကို ကျွန်တော် သစ်ရွက်တွေ ထင်ခဲ့တာ။"],
    c: [[2, "bigstinger"]] },

  { t: "A Forearm Three Trees Long", l: "တောလမ်း",
    g: "ကားရှေ့မီးက အပေါ်မှာ တစ်ချက် လည်ထွက်သွားတယ်။ အလင်းတန်းထဲမှာ လက်ဖျံတစ်ပိုင်း။",
    p: "Headlight glare sweeping across the canopy and catching a section of forearm — long as three "
      + "or four trees, more joints along it than an arm should have, leaves and bark stuck to the "
      + "skin. Both ends run out of the light into blackness.",
    u: ["ကားရှေ့မီးက အပေါ်မှာ တစ်ချက် လည်ထွက်သွားတယ်။",
        "အလင်းတန်းထဲမှာ လက်ဖျံတစ်ပိုင်းကို မြင်လိုက်ရတယ်။",
        "သစ်ပင်သုံးလေးပင်စာ ရှည်တယ်။ အဆစ်တွေက ရှိသင့်တဲ့နေရာထက် ပိုများတယ်။",
        "အရေပြားပေါ်မှာ သစ်ရွက်တွေ၊ သစ်ခေါက်တွေ ကပ်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "No Shoulder, No Face", l: "တောလမ်း",
    g: "အဲဒီလက်ဖျံက အလင်းမရောက်တဲ့နေရာထဲ ဆက်သွားတယ်။ ပခုံးဘယ်မှာလဲ၊ မျက်နှာဘယ်မှာလဲ မမြင်နိုင်ဘူး။",
    p: "The forearm continuing up out of the light into total darkness. The frame deliberately ends "
      + "where the light does — nothing above it is shown or implied.",
    u: ["ပြီးတော့ အဲဒီလက်ဖျံက အလင်းမရောက်တဲ့နေရာထဲ ဆက်သွားတယ်။",
        "ဘယ်နေရာမှာ ပခုံးရှိလဲ ကျွန်တော် မမြင်နိုင်ဘူး။",
        "ဘယ်နေရာမှာ မျက်နှာရှိလဲလည်း မမြင်နိုင်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "It Put the Truck to Its Ear", l: "တောလမ်း",
    g: "ဟွန်းသံက ရုတ်တရက် နည်းနည်း တိုးသွားတယ်။ တစ်ခုခုက ကားတစ်စီးလုံးကို နားနား ကပ်လိုက်သလို။",
    p: "The black canopy from below with a faint glow somewhere deep inside it — headlights, muffled, "
      + "held close to something. Nothing else resolves.",
    u: ["ဟွန်းသံကတော့ ရုတ်တရက် နည်းနည်း တိုးသွားတယ်။",
        "တစ်ခုခုက ကားတစ်စီးလုံးကို နားနား ကပ်လိုက်သလို။"],
    c: [[1, "bigstinger"]] },

  { t: "Morning, a Motorcycle", l: "တောလမ်း", w: ["ဆိုင်ကယ်သမား", "ကျွန်တော်"],
    g: "မနက်ရောက်မှ ဆိုင်ကယ်တစ်စီး ဖြတ်လာတယ်။ ကျွန်တော် ပိုက်ထဲကနေ ထွက်လာတယ်။",
    p: "Early morning on the forest road: a man in filthy shredded clothes climbing out of a ditch as "
      + "a motorbike slows to a stop.",
    u: ["မနက်ရောက်မှ ဆိုင်ကယ်တစ်စီး ဖြတ်လာတယ်။",
        "ကျွန်တော် ပိုက်ထဲကနေ ထွက်လာတော့ ဆိုင်ကယ်သမားက ရပ်တယ်။"] },

  { t: "Turn It Off", l: "တောလမ်း", w: ["ကျွန်တော်", "ဆိုင်ကယ်သမား"],
    g: "အင်ဂျင်သံကြားတာနဲ့ ကျွန်တော် လက်နဲ့ အတင်းပိတ်ခိုင်းနေမိတယ်။ အသံမထွက်နဲ့။",
    p: "A wild-eyed filthy man making frantic cutting gestures at a motorbike engine, both hands, "
      + "while the rider stares at him.",
    u: ["သူ့အင်ဂျင်သံကြားတာနဲ့ ကျွန်တော် လက်နဲ့ အတင်းပိတ်ခိုင်းနေမိတယ်။ အသံမထွက်နဲ့။ အသံမထွက်နဲ့။",
        "သူက ကျွန်တော့်အခြေအနေကို မြင်တော့ စက်ပိတ်ပေးတယ်။",
        "ကျွန်တော် စကားကောင်းကောင်း မပြောနိုင်တော့ဘူး။"],
    c: [[0, "stinger"]] },

  { t: "What Was Left on the Road", l: "တောလမ်း",
    g: "လမ်းပေါ်မှာ ကားမရှိဘူး။ ဘီးအပို၊ ကိရိယာအိတ်၊ ကျော်စွာရဲ့ ဖိနပ်တစ်ဖက်။",
    p: "Morning light on an empty stretch of road: a spare wheel on its side, an open tool bag, and "
      + "one work boot. No vehicle anywhere.",
    u: ["လမ်းပေါ်မှာ ကားမရှိဘူး။",
        "ဘီးအပို ရှိတယ်။ ကိရိယာအိတ် ရှိတယ်။ ကျော်စွာရဲ့ ဖိနပ်တစ်ဖက် ရှိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Evenly Spaced Holes", l: "တောလမ်း",
    g: "မြေကြီးပေါ်မှာ အပေါက်ကြီးတွေ။ အကွာအဝေး ညီညီနဲ့။",
    p: "A line of deep round craters punched into the dirt road at regular intervals, receding into "
      + "the distance — the spacing of something walking.",
    u: ["မြေကြီးပေါ်မှာတော့ အပေါက်ကြီးတွေ ဖြစ်နေတယ်။ အကွာအဝေး ညီညီနဲ့။"],
    c: [[0, "bigstinger"]] },

  { t: "He Stopped Looking at the Trees", l: "တောလမ်း", w: ["ဆိုင်ကယ်သမား"],
    g: "ဆိုင်ကယ်သမားက အဲဒါတွေကို ကြည့်တယ်။ ပြီးတော့ သူလည်း တောဘက်ကို မကြည့်တော့ဘူး။",
    p: "A motorcyclist looking down at the craters, then very deliberately looking only at the road "
      + "ahead as he restarts the bike.",
    u: ["ဆိုင်ကယ်သမားက အဲဒါတွေကို ကြည့်တယ်။",
        "ပြီးတော့ သူလည်း တောဘက်ကို မကြည့်တော့ဘူး။",
        "ကျွန်တော့်ကို ဆိုင်ကယ်ပေါ် တင်တယ်။ နှစ်ယောက်လုံး စကားမပြောဘဲ ထွက်လာခဲ့ကြတယ်။"] },

  { t: "They Found the Truck Next Day", l: "သစ်ပင်ပေါ်က ကား",
    g: "ကားကို နောက်နေ့မှ တွေ့တယ်။ လမ်းနဲ့ အတော်ဝေးတဲ့ သစ်ပင်အပေါ်မှာ။",
    p: "The treed truck again in flat daylight, from a distance this time, far off the road with "
      + "forest between — the scale of the carry visible.",
    u: ["ကားကို နောက်နေ့မှ တွေ့တယ်။",
        "လမ်းနဲ့ အတော်ဝေးတဲ့ သစ်ပင်အပေါ်မှာ။ ကျော်စွာ မရှိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "The Battery Had Died", l: "သစ်ပင်ပေါ်က ကား",
    g: "တံခါးတစ်ဖက်က ပွင့်နေတုန်း။ ဟွန်းခလုတ်က ကပ်နေတုန်း။ ဘက်ထရီကတော့ ကုန်သွားပြီ။",
    p: "Inside the treed cab: the horn button still jammed flat in its housing, the dash dead, "
      + "daylight through a collapsed windscreen.",
    u: ["တံခါးတစ်ဖက်က ပွင့်နေတုန်း။ ဟွန်းခလုတ်က ကပ်နေတုန်း။",
        "ဘက်ထရီကတော့ ကုန်သွားပြီ။",
        "သူ့ကို အခုထိ မတွေ့သေးဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "I Bought Her the Cake", l: "ဧည့်ခန်း", w: ["သမီးလေး", "ကျွန်တော်"],
    g: "ကျော်စွာ့သမီးကို ကိတ်မုန့်ဝယ်သွားပေးခဲ့တယ်။ ကလေးက မေးတယ် — အဖေကော။",
    p: "A small girl in a living room looking up at a man holding a boxed cake, her face open and "
      + "expectant, the man's completely still.",
    u: ["သူ့သမီးကို ကျွန်တော် ကိတ်မုန့်ဝယ်သွားပေးခဲ့တယ်။",
        "ကလေးက “အဖေကော” လို့ မေးတယ်။",
        "ကျွန်တော် အဲဒီမေးခွန်းကို မဖြေနိုင်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "The Box on the Table", l: "ဧည့်ခန်း",
    g: "ကျွန်တော် ဧည့်ခန်းမှာ ထိုင်နေခဲ့တယ်။ စားပွဲပေါ်က ကိတ်မုန့်ဘူးကို ကြည့်ရင်း။",
    p: "A boxed cake sitting unopened on a low living-room table in daylight, a man out of focus "
      + "behind it on a sofa, not moving.",
    u: ["သူ့အမေက ကလေးကို အခန်းထဲ ခေါ်သွားတယ်။",
        "ကျွန်တော် ဧည့်ခန်းမှာ ထိုင်နေခဲ့တယ်။ စားပွဲပေါ်က ကိတ်မုန့်ဘူးကို ကြည့်ရင်း။"] },

  { t: "He Knew What the Horn Would Do", l: "ဧည့်ခန်း",
    g: "ဟွန်းသံကြောင့် ကျွန်တော် အသက်ရှင်ခဲ့တာ။ သူက အဲဒါကို သိလျက်နဲ့ နှိပ်ခဲ့တာ။",
    p: "Close on a man's face in a quiet daylit room, dry-eyed, working something through that he "
      + "has worked through many times.",
    u: ["ကျွန်တော် သိနေတဲ့အရာတစ်ခု ရှိတယ်။",
        "ကားဟွန်းသံကြောင့် ကျွန်တော် အသက်ရှင်ခဲ့တာ။",
        "အဲဒီဟွန်းသံက ကျော်စွာ ထွက်မပြေးနိုင်ခင်မှာ အပေါ်ကအရာကို သူ့ဆီ ခေါ်သွားခဲ့တာ။",
        "သူက အဲဒါကို သိလျက်နဲ့ နှိပ်ခဲ့တာ။"],
    c: [[3, "bigstinger"]] },

  { t: "How Big Was It", l: null,
    g: "လူတွေက မေးတတ်ကြတယ်။ ကျွန်တော် မဖြေတတ်ဘူး။",
    p: "A man sitting across a table from someone taking notes, his hands open in front of him, "
      + "unable to indicate a size.",
    u: ["လူတွေက ကျွန်တော့်ကို အဲဒီအရာ ဘယ်လောက်ကြီးလဲလို့ မေးတတ်ကြတယ်။",
        "ကျွန်တော် မဖြေတတ်ဘူး။",
        "ကားတစ်စီးကို လက်တစ်ဖက်နဲ့ မနိုင်လောက်အောင် ကြီးတယ်ဆိုတာပဲ ပြောနိုင်တယ်။"] },

  { t: "Something I Have Never Told", l: "ပိုက်ထဲ",
    g: "ပိုက်ပေါက်ကနေ ကောင်းကင်ကို ကြည့်နေခဲ့တယ်။ ကြယ်တစ်ပွင့်မှ မရှိဘူး။",
    p: "Looking out of a culvert mouth at a patch of night sky in which there is not one star — "
      + "solid, featureless black.",
    u: ["ဒါပေမယ့် ကျွန်တော် မပြောဖူးတဲ့အရာတစ်ခု ရှိသေးတယ်။",
        "မနက်မလင်းခင် နောက်ဆုံးအချိန်မှာ ကျွန်တော် ပိုက်ပေါက်ကနေ ကောင်းကင်ကို ကြည့်နေခဲ့တယ်။",
        "ကြယ်တစ်ပွင့်မှ မရှိဘူး။ မိုးတိမ်ထူနေတာလို့ ထင်ခဲ့တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Stars Came Back", l: "ပိုက်ထဲ",
    g: "အမှောင်ကြီးက တစ်ဖက်ကို ရွေ့သွားတယ်။ ကြယ်တွေ ပေါ်လာတယ်။ တစ်ပွင့်ပြီးတစ်ပွင့်။",
    p: "The same patch of sky with the black mass sliding off to one side, stars emerging behind it "
      + "one after another as it clears.",
    u: ["အဲဒီနောက် အမှောင်ကြီးက တစ်ဖက်ကို ဖြည်းဖြည်း ရွေ့သွားတယ်။",
        "ကြယ်တွေ ပေါ်လာတယ်။ တစ်ပွင့်ပြီးတစ်ပွင့်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Crickets Started Again", l: "ပိုက်ထဲ", w: ["ကျွန်တော်"],
    g: "တောတစ်တောလုံးမှာ ပုရစ်တွေ ပြန်အော်လာတယ်။ ကျွန်တော် အသက်ရှူထုတ်လိုက်မိတယ်။",
    p: "A man's face inside the pipe finally letting go of a held breath, eyes closing, the faintest "
      + "relief.",
    u: ["တောတစ်တောလုံးမှာ ပုရစ်တွေ ပြန်အော်လာတယ်။",
        "ကျွန်တော်တို့ကားကို သယ်သွားတဲ့အရာက ထွက်သွားပြီလို့ တွေးလိုက်မိတယ်။",
        "အသက်ရှူထုတ်လိုက်မိတယ်။"] },

  { t: "On the Opposite Slope", l: "တောလမ်း",
    g: "ကားသယ်သွားတဲ့ဘက်နဲ့ ဆန့်ကျင်ဘက် တောင်စောင်းပေါ်မှာ သစ်ပင်တွေ ထပ်လှုပ်လာတယ်။",
    p: "A forested hillside on the far side of the road at night, and the treetops along its ridge "
      + "beginning to move — in the opposite direction from where everything went.",
    u: ["အဲဒီအချိန် ကားသယ်သွားတဲ့ဘက်နဲ့ ဆန့်ကျင်ဘက် တောင်စောင်းပေါ်မှာ သစ်ပင်တွေ ထပ်လှုပ်လာတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Crickets Stopped", l: "ပိုက်ထဲ",
    g: "ကျွန်တော် ပိုက်ထဲ ပြန်ဝင်လိုက်တယ်။ ပုရစ်သံတွေ တစ်ပြိုင်နက် ရပ်သွားတယ်။",
    p: "A man scrambling backward into the dark of the pipe, seen from outside, only his legs still "
      + "in the opening.",
    u: ["ကျွန်တော် ပိုက်ထဲ ပြန်ဝင်လိုက်တယ်။",
        "ပုရစ်သံတွေ တစ်ပြိုင်နက် ရပ်သွားတယ်။"],
    c: [[1, "heartbeat"]] },

  { t: "It Touched the Spare Wheel", l: "တောလမ်း",
    g: "နောက်ဆုံးပုံ — လမ်းပေါ်က ဘီးအပိုကို လက်သည်းတစ်ချောင်းက တစ်ချက် တို့လိုက်တယ်။",
    p: "Final composition: the spare wheel lying on the dark road, and the very tip of one enormous "
      + "fingernail just touching its rim — testing it for sound. Everything above the fingertip is "
      + "black. Hold on the wheel.",
    u: ["လမ်းပေါ်က ဘီးအပိုကို လက်သည်းတစ်ချောင်းက တစ်ချက် တို့လိုက်တယ်။"],
    c: [[0, "finalstinger"]] },
];
