/**
 * ခုံနံပါတ် ဆယ့်ခုနစ် — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * THE RULE: THE SEATS ARE THE MONSTER, AND THERE IS NEVER A FIGURE.
 *
 * Nothing in this film is a person except the two engineers and the owner's man.
 * What moves is upholstery: a fabric edge creeping up a trouser leg, an arm-rest
 * that has grown longer, fingers unfolding out of the ends of an arm-rest, a
 * small hand reaching from under a seat, a shirt held in a seat's lap. No face,
 * no body, no silhouette, no shape in a chair, ever. The moment a prompt puts a
 * figure in a seat the whole story is thrown away — the horror is that a hundred
 * and twenty ordinary chairs are sitting there wanting to be sat in.
 *
 * SECOND RULE: the seats look NEW. Everything around them rots — flaking
 * ceiling, mould on the walls — and the seats are clean, matched and cared for.
 * That contrast is the first clue and it must be visible in every wide shot.
 */

import { reviewSeat } from './review-seat.mjs';
export const CAST = [
  { name: "ကျွန်တော်", en: "The narrator — projection and sound engineer",
    prompt: "A Burmese man of about thirty-five, practical build, short hair, a plain work shirt with "
      + "a multimeter in the breast pocket and a torch clipped at his belt. Competent, unhurried, a "
      + "tradesman in an empty building at night." },
  { name: "စည်သူ", en: "Sithu — his colleague",
    prompt: "A Burmese man of about twenty-eight, slim, a loose short-sleeved shirt over a t-shirt, "
      + "cargo trousers, a phone always in his hand. Easy-going and talkative, the sort who sits down "
      + "in a cinema seat out of habit." },
  { name: "အပြင်ကလူ", en: "The owner's man at the front counter",
    prompt: "A Burmese man of about fifty in a polo shirt with a bunch of keys and a ledger, sitting "
      + "at a shuttered concession counter under a single strip light. Bored, ordinary, entirely "
      + "unaware." },
];

export const LOCS = [
  { name: "ရုံထဲ", en: "The auditorium",
    prompt: "The auditorium of a long-closed single-screen Myanmar cinema: rows of seats running back "
      + "from a blank screen, a sloped floor, a high ceiling with paint flaking off in sheets and "
      + "black mould creeping down the side walls. ⚠️ THE SEATS ARE THE EXCEPTION — deep red-brown "
      + "upholstery, every one matched, clean, unfaded and unsplit, as though wiped down daily. "
      + "Nothing else in the room has been cared for in twenty years. NO PEOPLE IN THE SEATS." },
  { name: "ခုံ ၁၇", en: "Seat seventeen — fourth row, dead centre",
    prompt: "One cinema seat photographed close: deep red-brown upholstery, wooden arm-rests worn "
      + "smooth at the ends, a small enamelled number plate on the aisle side. Immaculate. The seat is "
      + "always empty — it is the subject, not a background." },
  { name: "စက်ခန်း", en: "The projection booth",
    prompt: "A small upstairs projection room: an old projector on a stand, a new digital unit beside "
      + "it, a bench of amplifiers and a laptop, cables taped to the floor, and a small square glass "
      + "port looking down into the dark auditorium." },
  { name: "ကောင်တာ", en: "The front lobby",
    prompt: "The lobby of a closed cinema: a shuttered concession counter, torn film posters in frames, "
      + "a terrazzo floor, one strip light on, the street doors dark beyond." },
];

export const STYLE =
  "A long-closed single-screen cinema in a Myanmar town, present day, being surveyed for conversion. "
  + "Night: torch beams, phone torches, the flat white glare of a projector test pattern, one strip "
  + "light in the lobby. Working horror, not gothic — two engineers doing a routine job in an empty "
  + "building. Cinematic photorealism, 35mm film grain, shallow depth of field, 16:9, desaturated "
  + "palette with hard practical light. ⚠️ THERE IS NEVER A FIGURE IN A SEAT — no person, no "
  + "silhouette, no shape, no face, nothing sitting anywhere. What moves is upholstery, an arm-rest, a "
  + "fabric edge, a hand emerging from the furniture itself. ⚠️ The seats are visibly NEW and cared "
  + "for while the room around them rots. No gore, no corpses. No legible text, numbers, captions or "
  + "watermarks anywhere in the image.";

export const SCENES = [
  { t: "A Hundred and Twenty Seats", l: "ရုံထဲ",
    g: "ရုပ်ရှင်ရုံအတွင်း။ ခုံတွေ အတန်းလိုက် စီနေတယ်။ ဘယ်သူမှ မရှိဘူး။",
    p: "A wide view down an empty cinema auditorium from the back: long curved rows of matched "
      + "red-brown seats, a blank screen at the far end, dust in the air. Completely empty.",
    u: ["ရုပ်ရှင်ရုံထဲမှာ ခုံတစ်ရာနှစ်ဆယ် ရှိတယ်လို့ စာရင်းမှာ ရေးထားတယ်။"] },

  { t: "Not One of Them Was a Chair", l: "ရုံထဲ",
    g: "ခုံတစ်ခုံကို အနီးကပ်။ လက်တင်နှစ်ဖက်၊ မှီစရာ၊ ထိုင်စရာ။",
    p: "Extreme close-up of a single cinema seat: the two arm-rests, the back, the folded cushion — "
      + "shot like an anatomical study rather than furniture.",
    u: ["ကျွန်တော်တို့ ထွက်ပြေးလာတဲ့ညမှာတော့ အဲဒီအခန်းထဲမှာ ထိုင်ခုံတစ်ခုံမှ မရှိဘူးဆိုတာ သိသွားတယ်။",
        "တစ်ခုချင်းစီမှာ လက်တင်စရာနှစ်ဖက် ရှိတယ်။ မှီစရာ ရှိတယ်။ ထိုင်စရာ ရှိတယ်။",
        "သူတို့က အဲဒီပုံစံအတိုင်း နေတတ်နေကြတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "Projector and Sound", l: "စက်ခန်း", w: ["ကျွန်တော်", "စည်သူ"],
    g: "စက်ခန်းထဲမှာ ပရိုဂျက်တာနဲ့ အသံစနစ် တပ်နေကြတယ်။",
    p: "Two men working in a cramped projection booth, one on a laptop and one running cable, tools "
      + "and boxes open around them, daylight through a small vent.",
    u: ["ကျွန်တော်နဲ့ စည်သူက ပရိုဂျက်တာနဲ့ အသံစနစ် တပ်တဲ့အလုပ် လုပ်တယ်။",
        "အဲဒီအလုပ်က ပိတ်ထားတာကြာပြီဖြစ်တဲ့ ရုပ်ရှင်ရုံဟောင်းတစ်ရုံ။"] },

  { t: "The New Owner", l: "ကောင်တာ",
    g: "ရုံရှေ့ခန်း။ ပိုစတာဟောင်းတွေ။ အဆောက်အအုံကို ပြန်ပြင်မယ့်အစီအစဉ်။",
    p: "A cinema lobby in daylight with torn film posters still in their frames, a shuttered "
      + "concession counter, and architect's drawings spread on it.",
    u: ["ပိုင်ရှင်အသစ်က အဆောက်အအုံကို ပြန်ပြင်ပြီး ပွဲခန်းမလုပ်ချင်တယ်။",
        "ခုံတွေကို ဖယ်မလား၊ ဆက်သုံးမလား မဆုံးဖြတ်ရသေးဘူး။ စက်ပစ္စည်းတွေ အရင်စမ်းချင်တယ်ဆိုလို့ ကျွန်တော်တို့ သွားတပ်ပေးတာ။"] },

  { t: "Eight at Night", l: "ရုံထဲ",
    g: "ညရှစ်နာရီ။ ရုံထဲ မှောင်နေတယ်။ အလုပ်သမားတွေ ပြန်ကုန်ပြီ။",
    p: "The auditorium at night lit only by two work lamps on stands, most of the room in darkness, "
      + "ladders and cable drums left in the aisle.",
    u: ["နေ့ခင်းကတည်းက အလုပ်စပေမယ့် မီးလိုင်းနဲ့ စက်တင်စင်ပြင်နေတာတွေကြောင့် ညရှစ်နာရီမှ စမ်းလို့ရတယ်။",
        "အလုပ်သမားတွေ ပြန်ကုန်ကြပြီ။"] },

  { t: "One Man at the Counter", l: "ကောင်တာ", w: ["အပြင်ကလူ"],
    g: "အရောင်းကောင်တာမှာ ပိုင်ရှင်ဘက်ကလူတစ်ယောက် ကျန်နေတယ်။",
    p: "A middle-aged man sitting alone at a shuttered concession counter under one strip light, "
      + "scrolling a phone, keys on the counter beside him.",
    u: ["အပြင်အရောင်းကောင်တာမှာ ပိုင်ရှင်ဘက်ကလူတစ်ယောက် ကျန်တယ်။ သူက ကျွန်တော်တို့ အလုပ်ပြီးမှ သော့ခတ်ပေးမှာ။",
        "ကျွန်တော်တို့က ရုံထဲမှာ။"] },

  { t: "The Smell", l: "ရုံထဲ",
    g: "ခုံတန်းတွေကြားက လမ်းကြား။ မှောင်နေတယ်။ အနံ့ကို ပုံနဲ့ပြရမယ်။",
    p: "A narrow aisle between rows photographed low and close, the seat backs crowding both sides, "
      + "a haze in the torch beam. Claustrophobic, warm, close.",
    u: ["ပထမဆုံး သတိထားမိတာက အနံ့။",
        "ဖုန်နံ့၊ ကြွက်နံ့လို မဟုတ်ဘူး။",
        "လူတွေအများကြီး တစ်နေရာတည်းမှာ အကြာကြီးထိုင်ထားတဲ့အနံ့။"],
    c: [[2, "stinger"]] },

  { t: "Hair Oil and Dry Sweat", l: "ခုံ ၁၇",
    g: "ခုံမှီနောက်ကျောကို အနီးကပ်။ ခေါင်းတည့်နေရာမှာ အဝတ်က နည်းနည်း ညစ်နေတယ်။",
    p: "Extreme close-up of the top of a seat back where a head would rest: the fabric there very "
      + "slightly darkened and polished with use, though the seat is otherwise spotless.",
    u: ["ဆံပင်ဆီနံ့။ ချွေးခြောက်နံ့။",
        "အဝတ်မလဲဘဲ အိပ်ထားတဲ့အနံ့။"],
    c: [[1, "bigstinger"]] },

  { t: "They're Brand New", l: "ရုံထဲ", w: ["စည်သူ"],
    g: "စည်သူက နှာခေါင်းရှုံ့တယ်။ ခုံတွေက သစ်နေတယ်။",
    p: "A man wrinkling his nose and looking around at the rows, his torch beam sweeping across "
      + "upholstery that is conspicuously clean.",
    u: ["စည်သူက နှာခေါင်းရှုံ့တယ်။",
        "“ပိတ်ထားတာကြာပြီဆိုပြီး ခုံတွေက သစ်နေတာပဲ”"] },

  { t: "Not a Tear Anywhere", l: "ရုံထဲ",
    g: "ခုံအဝတ်တွေက အနီညိုရောင်။ အရောင်ညီတယ်။ အပေါက်အပြဲ မရှိဘူး။",
    p: "A row of seats photographed straight on: every one identically deep red-brown, unfaded, no "
      + "splits, no stains, no missing buttons.",
    u: ["ခုံတွေကို အနီညိုရောင်အဝတ်နဲ့ ဖုံးထားတယ်။",
        "အဝတ်အရောင်က ညီတယ်။ အပေါက်အပြဲ မရှိဘူး။"] },

  { t: "The Rest Is Rotting", l: "ရုံထဲ",
    g: "မျက်နှာကျက်က ဆေးကွာနေတယ်။ နံရံက မှိုတက်နေတယ်။ ခုံတွေကတော့ သန့်နေတယ်။",
    p: "A single frame containing both: a ceiling shedding paint in sheets and a wall furred with "
      + "black mould, and beneath them a row of immaculate seats.",
    u: ["အဲဒီလို သပ်သပ်ရပ်ရပ်ရှိနေတာက ကျန်တဲ့ရုံအခြေအနေနဲ့ မလိုက်ဘူး။",
        "အပေါ်မျက်နှာကျက်က ဆေးတွေ ကွာနေတယ်။ ဘေးနံရံက မှိုတက်နေတယ်။",
        "ခုံတွေကတော့ တစ်ယောက်ယောက် နေ့တိုင်း သုတ်ပေးနေသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "The Test Pattern", l: "ရုံထဲ",
    g: "ရုံမီးပိတ်ပြီး ဖန်သားပြင်မှာ အဖြူရောင်စမ်းသပ်ပုံ ပေါ်လာတယ်။",
    p: "A blank white test pattern filling a cinema screen in a dark auditorium, the light from it "
      + "falling across empty seat backs in the front rows.",
    u: ["ရုံမီးတွေ ပိတ်ပြီး ပရိုဂျက်တာစမ်းတယ်။",
        "ဖန်သားပြင်မှာ အဖြူရောင်စမ်းသပ်ပုံ ပေါ်လာတယ်။"] },

  { t: "A Little to the Left", l: "စက်ခန်း", w: ["ကျွန်တော်"],
    g: "စက်ခန်းမှန်ပေါက်ကနေ ရုံထဲကို ကြည့်ရတဲ့မြင်ကွင်း။",
    p: "Looking down through a small square projection port into the dark auditorium below, the "
      + "screen glowing at the far end, rows visible only as ridges.",
    u: ["ကျွန်တော်က အနောက်ဘက် အပေါ်ထပ်စက်ခန်းမှာ။",
        "စည်သူက အောက်ကိုဆင်းပြီး ပုံအနေအထား ကြည့်ပေးတယ်။",
        "“ဘယ်ဘက် နည်းနည်းတင်” သူ့အသံ ရုံထဲမှာ ပဲ့တင်လာတယ်။"] },

  { t: "That's It", l: "ရုံထဲ", w: ["စည်သူ"],
    g: "စည်သူက ရုံလယ်မှာ ရပ်ပြီး ဖန်သားပြင်ကို ကြည့်နေတယ်။",
    p: "A man standing alone in the middle aisle looking up at a white screen, lit from the front, "
      + "his shadow thrown long back over the empty rows behind him.",
    u: ["ကျွန်တော် ပြင်ပေးတယ်။ “ဒီလောက်လား” “ရပြီ”"] },

  { t: "A Seat Folded Down", l: "ရုံထဲ",
    g: "ခုံခေါက်သံ တစ်ချက်။ ဖပ်။",
    p: "A single seat cushion caught mid-fall as it folds down into the sitting position, the rows "
      + "around it still, motion blur on the cushion only.",
    u: ["ပြီးတော့ ခုံခေါက်သံ တစ်ချက် ကြားရတယ်။ ဖပ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Seventeen. Dead Centre.", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "စည်သူက လေးတန်းမြောက် အလယ်တည့်တည့်မှာ ထိုင်နေတယ်။",
    p: "A man settled comfortably into a seat in the fourth row, arms on both rests, looking up at "
      + "the screen — an entirely ordinary image of someone at the cinema.",
    u: ["“ဘယ်ခုံမှာလဲ” “ဆယ့်ခုနစ်။ အလယ်တည့်တည့်”",
        "ကျွန်တော် စက်ခန်းမှန်ပေါက်ကနေ ကြည့်တယ်။",
        "စည်သူက လေးတန်းမြောက်မှာ ထိုင်နေတယ်။"] },

  { t: "Perfectly Normal", l: "ရုံထဲ", w: ["စည်သူ"],
    g: "သူ့ခေါင်းအပေါ်မှာ ပရိုဂျက်တာအလင်းတန်း ဖြတ်နေတယ်။ ပုံမှန်အရာပဲ။",
    p: "The projector beam cutting through dusty air above a seated man's head, seen from behind and "
      + "above. Nothing wrong with the picture at all.",
    u: ["သူ့ခေါင်းအပေါ်မှာ ပရိုဂျက်တာအလင်းတန်း ဖြတ်နေတယ်။ ပုံမှန်အရာပဲ။"] },

  { t: "One Second Before He Sat Down", l: "ရုံထဲ", w: ["စည်သူ"],
    g: "စည်သူ ထိုင်ခါနီး — ဒူးကွေးပြီး ခုံပေါ်ကို ကိုယ်ချလိုက်တဲ့ ခဏ။",
    p: "A man caught in the instant before sitting: knees bent, weight going down, one hand on an "
      + "arm-rest. Frozen a heartbeat before contact.",
    u: ["ကျွန်တော် အဲဒီမြင်ကွင်းကို သတိရတိုင်း သူ မထိုင်ခင် တစ်စက္ကန့်လောက်ကို ပြန်ရချင်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "A Video to Test the Sound", l: "စက်ခန်း",
    g: "စက်ခန်းက ကွန်ပျူတာမှာ ဗီဒီယိုတိုတစ်ခု ဖွင့်တယ်။",
    p: "A laptop screen in a projection booth playing a short clip of a man talking on a stage, "
      + "audio meters bouncing beside it.",
    u: ["အသံစမ်းဖို့ ဗီဒီယိုတိုတစ်ခု ဖွင့်တယ်။",
        "လူတစ်ယောက်က စင်ပေါ်မှာ စကားပြောနေတဲ့ဗီဒီယို။",
        "ကျွန်တော် အသံနည်းနည်းတင်တယ်။"] },

  { t: "The Room Laughed Back", l: "ရုံထဲ",
    g: "ဗီဒီယိုထဲကလူ ရယ်တယ်။ ရုံထဲကနေ ရယ်သံ ပြန်ထွက်လာတယ်။",
    p: "A wide shot of the whole dark auditorium, rows and rows of empty seats facing the screen — "
      + "the frame held on emptiness while a sound happens.",
    u: ["ဗီဒီယိုထဲကလူက ရယ်လိုက်တယ်။",
        "ရုံထဲကနေ ရယ်သံ ပြန်ထွက်လာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "It Kept Going", l: "စက်ခန်း",
    g: "ကွန်ပျူတာမှာ ဗီဒီယိုကို ရပ်လိုက်တယ်။ ဒါပေမယ့် ရယ်သံက ဆက်ကြားနေရတယ်။",
    p: "A finger on a laptop spacebar and the playhead stopped, the audio meters flat at zero — and "
      + "the man's face beside it changing.",
    u: ["ကျွန်တော် ဗီဒီယိုကို ရပ်လိုက်တယ်။",
        "ရယ်သံက နည်းနည်းဆက်ကြာတယ်။",
        "နောက်ဆုံးမှာ ချောင်းရှင်းသံတစ်ချက်။"],
    c: [[2, "bigstinger"]] },

  { t: "Did Someone Come In", l: "ရုံထဲ", w: ["စည်သူ"],
    g: "စည်သူက နောက်ကို လှည့်ကြည့်တယ်။ နောက်မှာ ဘယ်သူမှ မရှိဘူး။",
    p: "A seated man twisted around to look back over his shoulder at the rows behind him, all of "
      + "them empty, his torch on the seat beside him.",
    u: ["စည်သူက နောက်ကို လှည့်ကြည့်တယ်။ “အပြင်ကအစ်ကို ဝင်လာတာလား”",
        "ကျွန်တော် မိုက်ကနေ ပြောလိုက်တယ်။ “မမြင်ဘူး။ မင်းနောက်မှာ ဘယ်သူမှ မရှိဘူး”",
        "သူ ပြန်တည့်တည့် ထိုင်တယ်။"] },

  { t: "Turn the Lights On", l: "ရုံထဲ", w: ["စည်သူ"],
    g: "စည်သူက လက်တစ်ဖက် မြှောက်ပြတယ်။",
    p: "A raised hand above the seat backs, seen from the projection port far behind — a small "
      + "signal in a very large dark room.",
    u: ["ခဏနေတော့ လက်တစ်ဖက် မြှောက်ပြတယ်။",
        "“ကိုကြီး၊ မီးခဏဖွင့်ပါဦး”"] },

  { t: "No — Come Down", l: "စက်ခန်း", w: ["ကျွန်တော်"],
    g: "မီးခလုတ်ဆီ လက်လှမ်းနေတုန်း သူ့အသံ ပြောင်းသွားတယ်။",
    p: "A hand stopped short of a bank of light switches, the man's head turned toward the port "
      + "window instead, listening.",
    u: ["ရုံမီးဖွင့်ဖို့ ကျွန်တော် လက်လှမ်းမိတဲ့အချိန်မှာ သူက ထပ်ပြောတယ်။",
        "“မဟုတ်တော့ဘူး၊ လာပေးပါဦး”",
        "သူ့အသံ ပြောင်းနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Left My Phone Charging", l: "စက်ခန်း",
    g: "စက်ခန်းစားပွဲပေါ်မှာ ဖုန်း အားသွင်းထားခဲ့တယ်။ တစ်ယောက်တည်း ကျန်ခဲ့တယ်။",
    p: "A phone left face-down on a bench charging, its cable taut, the booth door open and empty "
      + "beyond it.",
    u: ["ကျွန်တော် လက်နှိပ်ဓာတ်မီးကို ယူပြီး လှေကားကနေ ပြေးဆင်းလာတယ်။",
        "ဖုန်းကိုတော့ စက်ခန်းထဲမှာ အားသွင်းထားခဲ့မိတယ်။"],
    c: [[1, "stinger"]] },

  { t: "He Could Not Get Up", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "စည်သူက မထနိုင်ဘူး။ မျက်နှာမှာ အပြုံးတစ်ဝက် ကျန်နေတယ်။",
    p: "A seated man with half a smile still on his face, the other half gone — trying to make a "
      + "joke of something and failing.",
    u: ["စည်သူက မထနိုင်ဘူး။",
        "သူ့မျက်နှာမှာ အပြုံးတစ်ဝက်ကျန်နေတယ်။",
        "ကိုယ့်ကိုယ်ကို အရှက်ပြေ ရယ်ပြဖို့ ကြိုးစားနေတဲ့မျက်နှာ။"] },

  { t: "Maybe It's Jammed", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "သူ လက်နှစ်ဖက်နဲ့ ခုံလက်တင်တွေကို ဖိပြီး ထတယ်။ မရဘူး။",
    p: "Both hands braced hard on a pair of wooden arm-rests, the man's arms locked pushing his own "
      + "weight up, and going nowhere.",
    u: ["“ခုံက ညပ်နေလို့လား မသိဘူး”",
        "သူ လက်နှစ်ဖက်နဲ့ ခုံလက်တင်တွေကို ဖိပြီး ထတယ်။ မရဘူး။"] },

  { t: "My Trousers Are Caught", l: "ခုံ ၁၇", w: ["ကျွန်တော်", "စည်သူ"],
    g: "ကျွန်တော် သူ့လက်မောင်းကို ဆွဲတယ်။ သူ နာလို့ အော်တယ်။",
    p: "One man pulling another by the upper arm while the seated man's face contorts — the pull "
      + "hurting him rather than moving him.",
    u: ["ကျွန်တော် သူ့လက်မောင်းကို ဆွဲတယ်။ သူ နာလို့ အော်တယ်။",
        "“ဘောင်းဘီက ညပ်နေတာ”"] },

  { t: "The Fabric Was on His Leg", l: "ခုံ ၁၇",
    g: "ဓာတ်မီးကို ပေါင်ဘေး ထိုးကြည့်တယ်။ အနီညိုရောင်အဝတ်က ဘောင်းဘီပေါ်ကို တက်နေတယ်။",
    p: "Torchlight on a thigh: the red-brown seat upholstery has crept up over the edge of the "
      + "trouser leg and lies on the cloth, like a tide mark. No hand, no shape — fabric only.",
    u: ["ဓာတ်မီးကို သူ့ပေါင်ဘေး ထိုးကြည့်လိုက်တယ်။",
        "အနီညိုရောင်အဝတ်က သူ့ဘောင်းဘီပေါ်ကို တက်နေတယ်။",
        "အဝတ်အစွန်းပဲ ထင်လိုက်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "It Moved Away From My Hand", l: "ခုံ ၁၇",
    g: "ကျွန်တော် လက်နဲ့ ဆွဲမလိုလုပ်တော့ အဲဒီအစွန်းက ဖြည်းဖြည်း ရုပ်သွားတယ်။",
    p: "A hand reaching toward the fabric edge and the edge itself pulled back slightly, the "
      + "upholstery visibly withdrawn from the fingers. Nothing else moves.",
    u: ["ကျွန်တော် လက်နဲ့ ဆွဲမလိုလုပ်တော့ အဲဒီအစွန်းက ရုပ်သွားတယ်။ ဖြည်းဖြည်း။",
        "ကျွန်တော့်လက်ကို ရှောင်လိုက်သလို။"],
    c: [[1, "bigstinger"]] },

  { t: "It Came Back When the Light Moved", l: "ခုံ ၁၇",
    g: "မီးကို နည်းနည်းဖယ်လိုက်တော့ အနီရောင်အစွန်းက ပြန်ရွေ့လာတယ်။ မီးတည့်တည့်ထိုးတော့ ရပ်သွားတယ်။",
    p: "The same thigh with the torch beam swung slightly aside: the fabric has advanced further up "
      + "the leg. Half of it in light, half in shadow, the shadowed half further on.",
    u: ["ကျွန်တော် လက်ရပ်သွားတယ်။ မီးကို နည်းနည်းဖယ်လိုက်တယ်။",
        "အနီရောင်အစွန်းက စည်သူ့ပေါင်ပေါ် ပြန်ရွေ့လာတယ်။",
        "မီးတည့်တည့် ထိုးလိုက်တယ်။ ရပ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Ko Gyi?", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "စည်သူက ကျွန်တော့်မျက်နှာကို ကြည့်တယ်။ ကျွန်တော် မဖြေဘူး။",
    p: "A seated man looking up into another's face for an answer, torchlight from below, the "
      + "standing man's expression withheld.",
    u: ["စည်သူက ကျွန်တော့်မျက်နှာကို ကြည့်တယ်။ “ကိုကြီး?”",
        "ကျွန်တော် မဖြေဘူး။"] },

  { t: "Under the Seat", l: "ခုံ ၁၇",
    g: "ခုံအောက်ကို မီးထိုးလိုက်တယ်။ ခုံခြေထောက်တစ်ချောင်းမှာ ခြေကျင်းဝတ်။ အရိုးဖုနှစ်ဖု။",
    p: "Torchlight under a cinema seat: one of the metal legs has an ankle — two visible bone knobs "
      + "where a joint would be, the metal continuing above and below. Dry, grey, not flesh.",
    u: ["ခုံအောက်ကို မီးထိုးလိုက်တယ်။",
        "ခုံခြေထောက်တစ်ချောင်းမှာ ခြေကျင်းဝတ် ရှိတယ်။ အရိုးဖုနှစ်ဖု။"],
    c: [[1, "bigstinger"]] },

  { t: "Toes Pointing Backward", l: "ခုံ ၁၇",
    g: "အောက်မှာ လိမ်ခေါက်ထားတဲ့ ခြေဖဝါး။ ခြေချောင်းတွေက နောက်ခုံဘက်ကို ညွှန်နေတယ်။",
    p: "Below the ankle, a foot folded under the seat with the toes turned to point back toward the "
      + "row behind — the wrong way round. Kept in low torchlight, no gore.",
    u: ["အောက်မှာ လိမ်ခေါက်ထားတဲ့ ခြေဖဝါး။",
        "ခြေချောင်းတွေက နောက်ခုံဘက်ကို ညွှန်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Up to His Waist", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "စည်သူက ဓာတ်မီးကို ဆွဲယူပြီး သူ့ပေါင်အောက် ထိုးလိုက်တယ်။ အနီရောင်က ခါးအထိ ရောက်နေပြီ။",
    p: "A man snatching a torch and shining it at his own lap: the red-brown upholstery now covers "
      + "him to the waist, the edge of it neat and definite, like a blanket that is not one.",
    u: ["စည်သူက ကျွန်တော့်လက်က ဓာတ်မီးကို ဆွဲယူပြီး သူ့ပေါင်အောက် ထိုးလိုက်တယ်။",
        "အနီရောင်အဖုံးက ပြန်လျော့သွားတယ်။ သူ့ခါးအထိ ရောက်နေပြီ။"],
    c: [[1, "bigstinger"]] },

  { t: "Two Lights, Two Places", l: "ခုံ ၁၇",
    g: "ဓာတ်မီးက ပေါင်ပေါ်။ ဖုန်းမီးက ခါးဘေး။ အလင်းရောက်တဲ့နေရာမှာ အဝတ်က မလှုပ်တော့ဘူး။",
    p: "A torch wedged against a seat and a phone torch propped beside it, two hard beams on a lap "
      + "— and in both lit areas the fabric is perfectly still.",
    u: ["“မီးတွေ ဖွင့်ရမယ်” ကျွန်တော် ပြောတယ်။",
        "စည်သူက ခေါင်းညိတ်တယ်။ “မြန်မြန်”",
        "သူ့ဖုန်းမီးကိုပါ ဖွင့်ပြီး ခုံဘေးမှာ ညှပ်ထားလိုက်တယ်။",
        "ဓာတ်မီးက ပေါင်ပေါ်။ ဖုန်းမီးက ခါးဘေး။ အလင်းရောက်တဲ့နေရာတွေမှာ အဝတ်က မလှုပ်တော့ဘူး။"] },

  { t: "Behind His Back", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "သူ့နောက်ကျောဘက်ကနေ ကုတ်သံ ကြားရတယ်။ အင်္ကျီက ပခုံးနားမှာ တင်းလာတယ်။",
    p: "A shirt seen from the front pulling tight across the shoulders as though gathered from "
      + "behind, the fabric drawn into folds. The seat back behind him is unremarkable.",
    u: ["ဒါပေမယ့် သူ့နောက်ကျောဘက်ကနေ ကုတ်သံ ကြားရတယ်။",
        "စည်သူ့အင်္ကျီက ပခုံးနားမှာ တင်းလာတယ်။",
        "“ကိုကြီး၊ သွားတော့!”"],
    c: [[1, "bigstinger"]] },

  { t: "A Seat Had Moved Into the Aisle", l: "ရုံထဲ",
    g: "အတန်းနှစ်တန်းကျော်လောက်မှာ ခုံတစ်ခုံက လမ်းကြားထဲ ရွေ့ထွက်နေတယ်။",
    p: "A single cinema seat standing out of line in the middle of an aisle, facing along it, its "
      + "floor bolts torn free — a chair standing where a chair cannot stand.",
    u: ["ကျွန်တော် စက်ခန်းဘက်ကို လှည့်လိုက်တယ်။",
        "အတန်းနှစ်တန်းကျော်လောက်မှာ ခုံတစ်ခုံက လမ်းကြားထဲ ရွေ့ထွက်နေပြီ။",
        "ကျွန်တော် လာတုန်းက အဲဒီနေရာ ရှင်းနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Arm-Rests Were Longer", l: "ရုံထဲ",
    g: "လက်တင်နှစ်ဖက်က ရှည်လာတယ်။ အစွန်းတွေမှာ လက်ချောင်းတွေ ဖြန့်လာတယ်။",
    p: "Close on the end of a wooden arm-rest: the timber tapers and separates into five long "
      + "finger-like extensions, the grain continuous into them. Still wood, not a hand.",
    u: ["လက်တင်နှစ်ဖက်က ရှည်လာတယ်။",
        "အစွန်းတွေမှာ လက်ချောင်းတွေ ဖြန့်လာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Along the Wall", l: "ရုံထဲ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် နံရံဘက်ကပ်ပြီး သွားတယ်။ နောက်က စည်သူ တိုးတိုး ရေရွတ်နေတယ်။",
    p: "A man edging sideways along a mouldy side wall with his back to it, facing the rows, torch "
      + "held low.",
    u: ["ကျွန်တော် နံရံဘက်ကပ်ပြီး သွားတယ်။",
        "နောက်က စည်သူက တိုးတိုး ရေရွတ်နေတယ်။ “မရွေ့နဲ့… မရွေ့နဲ့…”",
        "သူ ဘယ်သူ့ကို ပြောနေလဲ ကျွန်တော် မသိဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Stronger Toward the Back", l: "ရုံထဲ",
    g: "အနောက်တန်းတွေဘက် ရောက်လေလေ အနံ့က ပိုပြင်းလေလေ။",
    p: "The rear rows of the auditorium in near-darkness, the seats packed close, the air visibly "
      + "thicker in the torch beam.",
    u: ["အနောက်တန်းတွေဘက် ရောက်လေလေ အနံ့က ပိုပြင်းလေလေ။",
        "ကျွန်တော် နံရံကို လက်နဲ့ စမ်းပြီး လျှောက်တယ်။"] },

  { t: "Ten Steps", l: "ရုံထဲ",
    g: "ရုံအပြင်ထွက်ပေါက်။ တံခါးအောက်က အလင်းကြား။",
    p: "An exit door at the back of an auditorium with a thin line of lobby light under it, seen "
      + "from ten paces away down a dark wall.",
    u: ["ရုံအပြင်ထွက်ပေါက်ရောက်ရင် အပြင်ကမီးအလင်း ရမယ်။",
        "အဲဒီကနေ စက်ခန်းလှေကားကို တက်ရမယ်။",
        "ဆယ်လှမ်းလောက်ပဲ လိုတော့တယ်။"] },

  { t: "Something Tugged My Shirt", l: "ရုံထဲ",
    g: "ကျွန်တော့်အင်္ကျီနောက်ကို တစ်ခုခု ဆွဲလိုက်တယ်။ အရမ်းမပြင်းဘူး။",
    p: "The back hem of a shirt pulled taut in a small polite tug, the fabric pinched — and nothing "
      + "visible doing the pinching.",
    u: ["ကျွန်တော့်အင်္ကျီနောက်ကို တစ်ခုခု ဆွဲလိုက်တယ်။ အရမ်းမပြင်းဘူး။",
        "ဘတ်စ်ကားပေါ်မှာ လူတစ်ယောက်က နေရာပေးချင်လို့ အင်္ကျီကိုတို့လိုက်သလို။"],
    c: [[0, "bigstinger"]] },

  { t: "There's Room Here", l: "ရုံထဲ",
    g: "အနောက်ကနေ အသံတစ်ခု ထွက်လာတယ်။ ပါးစပ်ထဲ အဝတ်ဆို့ထားသလို အသံ။",
    p: "The rows immediately behind a man's shoulder, all empty, one seat folded down and waiting. "
      + "The frame is on the empty seat, not on him.",
    u: ["ကျွန်တော် မလှည့်ကြည့်ဘဲ ရုန်းလိုက်တယ်။ မလွတ်ဘူး။",
        "အနောက်ကနေ အသံတစ်ခု ထွက်လာတယ်။ “ရပါတယ်…”",
        "အသံက ပါးစပ်ထဲမှာ အဝတ်တစ်စ ဆို့ထားသလို။",
        "“ဒီမှာ နေရာရှိတယ်…”"],
    c: [[3, "bigstinger"]] },

  { t: "Out of My Own Shirt", l: "ရုံထဲ", w: ["ကျွန်တော်"],
    g: "လက်တစ်ဖက်က ခါးကို ပတ်လာတယ်။ ကျွန်တော် ကြယ်သီးဖြုတ်ပြီး အင်္ကျီထဲက ထွက်လိုက်တယ်။",
    p: "A man wrenching himself forward out of an unbuttoned shirt, arms pulled back through the "
      + "sleeves, the shirt left behind him in mid-air.",
    u: ["လက်တစ်ဖက်က ကျွန်တော့်ခါးကို ပတ်လာတယ်။",
        "ကျွန်တော် အင်္ကျီကြယ်သီးတွေကို အတင်းဆွဲဖြုတ်လိုက်တယ်။",
        "ရှေ့ဘက်ကို ကိုယ်ကို လျှောချပြီး အင်္ကျီထဲက ထွက်လိုက်တယ်။ အင်္ကျီက နောက်မှာ ကျန်ခဲ့တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Seat Was Holding It", l: "ရုံထဲ",
    g: "နောက်ဆုံးမြင်လိုက်ရတာ — ခုံတစ်ခုံက ကျွန်တော့်အင်္ကျီကို ရင်ခွင်ထဲမှာ ဖက်ထားတယ်။",
    p: "A shirt lying in the seat of an empty cinema chair, gathered in against the seat back with "
      + "both arm-rests turned slightly inward — as though held. Doorway light behind.",
    u: ["ကျွန်တော် တံခါးကို ဆောင့်တွန်းလိုက်တယ်။ အပြင်က အလင်းဝင်လာတယ်။",
        "ခဏလောက် ပြန်မြင်လိုက်ရတာက ကျွန်တော့်အင်္ကျီကို ခုံတစ်ခုံက ရင်ခွင်ထဲမှာ ဖက်ထားတယ်။",
        "လူတစ်ယောက် နောက်ထိုင်ဖို့ နေရာပြင်နေသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "All the Lights", l: "ကောင်တာ", w: ["အပြင်ကလူ", "ကျွန်တော်"],
    g: "အပြင်ကလူက ထပြေးလာတယ်။ ကျွန်တော် လှေကားပေါ် တက်ပြေးတယ်။",
    p: "A shirtless man bursting through a door into a lit lobby, another man rising from the "
      + "counter in alarm.",
    u: ["အပြင်ကလူက ထပြေးလာတယ်။ “ဘာဖြစ်တာလဲ”",
        "“ရုံမီး! မီးအကုန်ဖွင့်!”",
        "ကျွန်တော် လှေကားပေါ် တက်ပြေးတယ်။ သူ အောက်ကနေ လိုက်လာတယ်။"] },

  { t: "Some of Them Did Not Come On", l: "စက်ခန်း",
    g: "ခလုတ်တန်းတစ်ခုလုံး ဖွင့်ချလိုက်တယ်။ မီးလုံးတချို့ မလင်းဘူး။",
    p: "A hand sweeping a whole bank of breaker switches down at once, sparks of dust, some "
      + "indicator lamps staying dark.",
    u: ["စက်ခန်းထဲရောက်တော့ ခလုတ်တန်းတစ်ခုလုံး ဖွင့်ချလိုက်တယ်။",
        "မီးလုံးတချို့ မလင်းဘူး။",
        "တချို့က တစ်ချက်နှစ်ချက် လင်းလိုက်မှိတ်လိုက်ဖြစ်ပြီးမှ လင်းတယ်။"] },

  { t: "The Rows Were Rows Again", l: "ရုံထဲ",
    g: "မှန်ပေါက်ကနေ ကြည့်လိုက်တယ်။ ခုံတွေက အတန်းလိုက် ပြန်ဖြစ်နေပြီ။",
    p: "The auditorium under full house lights seen from the projection port: every seat back in a "
      + "perfect line, the aisle clear, nothing out of place at all.",
    u: ["ရုံထဲကနေ စည်သူ အော်တယ်။ “ကိုကြီး!”",
        "ကျွန်တော် မှန်ပေါက်ကနေ ကြည့်လိုက်တယ်။",
        "ခုံတွေက အတန်းလိုက် ပြန်ဖြစ်နေပြီ။"],
    c: [[2, "bigstinger"]] },

  { t: "His Head Was Back", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "ခုံဆယ့်ခုနစ်မှာ စည်သူပဲ ထိုင်နေတယ်။ သူ့ခေါင်းက နောက်ကို လန်နေတယ်။",
    p: "One occupied seat in a fully lit auditorium: a man with his head tipped far back over the "
      + "seat top, throat exposed, arms limp on the rests.",
    u: ["ခုံဆယ့်ခုနစ်မှာ စည်သူပဲ ထိုင်နေတယ်။",
        "သူ့ခေါင်းက နောက်ကို လန်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "We Pulled", l: "ခုံ ၁၇", w: ["ကျွန်တော်", "အပြင်ကလူ", "စည်သူ"],
    g: "လူနှစ်ယောက်က စည်သူ့လက်မောင်းနှစ်ဖက်ကို ဖမ်းပြီး အားကုန်ဆွဲတယ်။",
    p: "Two men hauling a third up out of a cinema seat by both arms, all three straining, the seat "
      + "itself not moving at all.",
    u: ["ကျွန်တော် ပြန်ပြေးဆင်းတယ်။ ဒီတစ်ခါ အပြင်ကလူပါ ပါလာတယ်။",
        "ကျွန်တော်တို့ စည်သူ့လက်မောင်းနှစ်ဖက်ကို ဖမ်းပြီး အားကုန်ဆွဲတယ်။"] },

  { t: "The Shirt Tore Away", l: "ခုံ ၁၇", w: ["စည်သူ"],
    g: "အထည်ပြဲသံ။ သူ့အင်္ကျီကျောဘက် အကုန်ပြဲသွားတယ်။ သူ လွတ်လာတယ်။",
    p: "A shirt splitting open down the back as a man comes free, the torn halves hanging from his "
      + "shoulders.",
    u: ["အထည်ပြဲသံ ကြားရတယ်။",
        "သူ့အင်္ကျီကျောဘက် အကုန်ပြဲသွားတယ်။ သူ လွတ်လာတယ်။"] },

  { t: "Red Threads on His Back", l: "စည်သူ", w: ["စည်သူ"],
    g: "နောက်ကျောမှာ အနီရောင်ကြိုးမျှင်တွေ ကပ်နေတယ်။ ဆွဲဖြုတ်တော့ ခုံဘက်က တုန်တယ်။",
    p: "A bare back with dozens of fine red-brown upholstery threads adhering to the skin in "
      + "parallel lines, running from the shoulders down. No wounds, no blood.",
    u: ["နောက်ကျောမှာ အနီရောင်ကြိုးမျှင်တွေ ကပ်နေတယ်။",
        "အဲဒါတွေကို ဆွဲဖြုတ်တော့ ခုံဘက်က တုန်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Did Not Look Back", l: "ရုံထဲ", w: ["ကျွန်တော်", "စည်သူ"],
    g: "စည်သူကို တွဲပြီး ထွက်လာကြတယ်။ သူ နောက်ကို ပြန်မကြည့်ဘူး။",
    p: "Two men supporting a third between them walking up a lit aisle toward the exit, the injured "
      + "man's eyes fixed straight ahead.",
    u: ["ကျွန်တော်တို့ စည်သူကို တွဲပြီး ထွက်လာကြတယ်။ သူ နောက်ကို ပြန်မကြည့်ဘူး။",
        "အပြင်ကလူကတော့ တစ်လမ်းလုံး မေးနေတယ်။",
        "ဘာဖြစ်တာလဲ။ ဘာက ညပ်တာလဲ။ ဘယ်သူရှိလဲ။ ကျွန်တော် မဖြေနိုင်ဘူး။"] },

  { t: "Something Touched My Foot", l: "ရုံထဲ",
    g: "နောက်ဆုံးတန်းအနားရောက်တော့ ကျွန်တော့်ခြေထောက်ကို တစ်ခုခု ထိတယ်။",
    p: "A man stopped mid-step in a lit aisle looking down at his own foot, the last row of seats "
      + "beside him.",
    u: ["နောက်ဆုံးတန်းအနားရောက်တော့ ကျွန်တော့်ခြေထောက်ကို တစ်ခုခု ထိတယ်။",
        "ငုံ့ကြည့်လိုက်တယ်။"] },

  { t: "A Small Hand", l: "ရုံထဲ",
    g: "ခုံအောက်ကနေ လက်တစ်ဖက် ထွက်နေတယ်။ သေးသေးလေး။ လက်ဖဝါး အပေါ်လှန်ထား။",
    p: "A small child-sized hand reaching out from beneath a cinema seat onto the aisle floor, palm "
      + "turned upward, fingers slightly open. Only the hand and forearm — nothing beyond the seat "
      + "shadow. Clean, unhurt.",
    u: ["ခုံအောက်ကနေ လက်တစ်ဖက် ထွက်နေတယ်။ သေးသေးလေး။",
        "လက်ကောက်ဝတ်မှာ အပြာရောင်ပုတီးကြိုး။",
        "လက်ဖဝါးက အပေါ်ကို လှန်ထားတယ်။ အကူအညီတောင်းနေသလို။"],
    c: [[2, "bigstinger"]] },

  { t: "Don't Touch It", l: "ရုံထဲ", w: ["စည်သူ", "ကျွန်တော်"],
    g: "ကျွန်တော် ရပ်မိတယ်။ စည်သူက အတင်းဆွဲတယ်။",
    p: "A man being hauled back by the arm just as he begins to crouch, his colleague's face hard "
      + "with warning.",
    u: ["ကျွန်တော် ရပ်မိတယ်။ စည်သူက ကျွန်တော့်ကို အတင်းဆွဲတယ်။ “မကိုင်နဲ့”",
        "“အဲဒီအောက်မှာ လူ—”",
        "“ကျွန်တော့်ကိုလည်း အဲဒီလို လက်ပေးတာ”"],
    c: [[2, "bigstinger"]] },

  { t: "I Thought It Was Helping", l: "ရုံထဲ", w: ["စည်သူ"],
    g: "စည်သူ့အသံက ပြတ်နေတယ်။",
    p: "Close on a man's face in flat house light, exhausted, explaining something he has not "
      + "finished believing.",
    u: ["စည်သူ့အသံက ပြတ်နေတယ်။",
        "“ကျွန်တော် ညပ်နေတုန်း… အောက်ကလူတစ်ယောက် လက်လှမ်းပေးတယ်။ ဆွဲထုတ်ပေးမယ်ထင်လို့ ကိုင်လိုက်တာ”"] },

  { t: "Five Marks", l: "စည်သူ", w: ["စည်သူ"],
    g: "သူ့ဘယ်လက်။ လက်ချောင်းငါးချောင်းစလုံးမှာ အနီရောင်လက်ချောင်းရာတွေ ပတ်နေတယ်။",
    p: "A left hand held up, every one of the five fingers ringed with a red band as though each "
      + "had been gripped individually. No breaks in the skin.",
    u: ["သူ့ဘယ်လက်ကို ကျွန်တော် မြင်လိုက်တယ်။",
        "လက်ချောင်းငါးချောင်းစလုံးမှာ အနီရောင်လက်ချောင်းရာတွေ ပတ်နေတယ်။",
        "“အထဲကို ဆွဲတာ”"],
    c: [[2, "bigstinger"]] },

  { t: "Where I Had Seen the Bracelet", l: "ရုံထဲ",
    g: "ကျွန်တော် အဲဒီလက်သေးသေးကို ပြန်ကြည့်မိတယ်။ ပုတီးကြိုးကို ဘယ်မှာ မြင်ဖူးလဲ စဉ်းစားနေတယ်။",
    p: "The small hand again from further back, the blue beaded bracelet on its wrist just legible, "
      + "the rest of it under the seat.",
    u: ["ကျွန်တော် အဲဒီလက်သေးသေးကို ပြန်ကြည့်မိတယ်။",
        "လက်ကောက်ဝတ်ပေါ်က ပုတီးကြိုးကို အရင်က ဘယ်နေရာမှာ မြင်ဖူးလဲလို့ စဉ်းစားနေမိတယ်။",
        "ပြီးတော့ သတိရတယ်။"] },

  { t: "On the Arm-Rest, That Afternoon", l: "ခုံ ၁၇",
    g: "နေ့ခင်းက မြင်ခဲ့တဲ့ပုံ — ခုံလက်တင်တံတစ်ဖက်မှာ အပြာရောင်ပုတီးကြိုး ပတ်ထားတယ်။",
    p: "A daylight memory image: the same blue beaded bracelet looped around the end of a wooden "
      + "arm-rest, worn there like jewellery on a wrist.",
    u: ["နေ့ခင်းက ခုံတွေစစ်တုန်းက အဲဒီခုံရဲ့ လက်တင်တံတစ်ဖက်မှာ အပြာရောင်ပုတီးကြိုး ပတ်ထားတာ။"],
    c: [[0, "bigstinger"]] },

  { t: "We Left the Lights On", l: "ကောင်တာ",
    g: "အဲဒီည ရုံမီးတွေ မပိတ်ခဲ့ဘူး။ အပြင်တံခါးကိုပဲ သော့ခတ်ခဲ့တယ်။",
    p: "A cinema's street doors padlocked from outside at night, and every window of the building "
      + "above them still blazing with light.",
    u: ["ကျွန်တော်တို့ အဲဒီည ရုံမီးတွေ မပိတ်ခဲ့ဘူး။",
        "အပြင်တံခါးကိုပဲ သော့ခတ်ခဲ့တယ်။",
        "ပိုင်ရှင်ဆီ ဖုန်းဆက်ပြီး အထဲမဝင်ဖို့ ပြောခဲ့တယ်။"] },

  { t: "The Next Day, in Daylight", l: "ရုံထဲ",
    g: "နောက်နေ့ နေ့ခင်း။ တံခါးတွေ အကုန်ဖွင့်ထားတယ်။ ရုံထဲ လင်းနေတယ်။",
    p: "The auditorium with every door open and daylight flooding in from the back, the rows "
      + "utterly ordinary and slightly shabby in the sun.",
    u: ["နောက်နေ့မှာ သူနဲ့အတူ ပြန်သွားရတယ်။ နေ့ခင်း။",
        "တံခါးတွေ အကုန်ဖွင့်တယ်။",
        "ကျွန်တော်က ထိုင်ခုံတွေကို ဝေးဝေးကနေပဲ ကြည့်နေတယ်။"] },

  { t: "Nobody Went to Get Them", l: "ခုံ ၁၇",
    g: "ခုံဆယ့်ခုနစ်ပေါ်မှာ စည်သူ့အင်္ကျီစ။ အနောက်တန်းမှာ ကျွန်တော့်အင်္ကျီ။",
    p: "In daylight: a torn scrap of shirt still lying on seat seventeen, and far behind it in the "
      + "back row another whole shirt draped over a seat. Nobody near either.",
    u: ["ခုံဆယ့်ခုနစ်ပေါ်မှာ စည်သူ့အင်္ကျီစ ကပ်နေတုန်း။",
        "အနောက်တန်းမှာ ကျွန်တော့်အင်္ကျီ ရှိနေတုန်း။",
        "ဘယ်သူမှ ဝင်မယူကြဘူး။"],
    c: [[2, "stinger"]] },

  { t: "The Owner Started to Explain", l: "ရုံထဲ",
    g: "ပိုင်ရှင်က စပရင်တွေ အဟောင်းဖြစ်နေလို့လို့ ရှင်းပြဖို့ ကြိုးစားတယ်။",
    p: "A man in a business shirt gesturing at a row of seats in daylight, mid-explanation, two "
      + "listeners not looking at him.",
    u: ["ပိုင်ရှင်က အစမှာ ရှင်းပြဖို့ ကြိုးစားတယ်။",
        "“အဟောင်းဆိုတော့ စပရင်တွေက—”"] },

  { t: "Teeth", l: "ရုံထဲ",
    g: "ခုံတစ်ခုံအောက်ကနေ တောက်သံ ထွက်လာတယ်။ သွားချင်း ထိတဲ့အသံ။",
    p: "The underside of one seat in bright daylight, close, showing only springs and timber — "
      + "entirely ordinary, held while a sound happens.",
    u: ["အဲဒီအချိန် ခုံတစ်ခုံအောက်ကနေ တောက်သံ ထွက်လာတယ်။ သွားချင်း ထိတဲ့အသံ။",
        "ကျွန်တော်တို့ ရပ်နေကြတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Then Another. Then Another.", l: "ရုံထဲ",
    g: "နောက်တစ်ခုံ။ ပြီးတော့ နောက်တစ်ခုံ။",
    p: "A long wide view of the fully lit auditorium, every seat empty and motionless, the emptiness "
      + "of it filling the frame.",
    u: ["နောက်တစ်ခုံကနေ ထပ်ထွက်တယ်။ ပြီးတော့ နောက်တစ်ခုံ။"] },

  { t: "A Hundred People Grinding Their Teeth", l: "ရုံထဲ",
    g: "အလင်းရောင်အပြည့်ကျနေတဲ့ ရုံထဲမှာ လူတစ်ရာလောက် တစ်ပြိုင်နက် အံကြိတ်နေတဲ့အသံ။ ခုံတွေက မလှုပ်ဘူး။",
    p: "The whole auditorium in full daylight, every row perfectly still and perfectly ordinary. "
      + "Nothing moves anywhere in the frame. Hold on it.",
    u: ["အလင်းရောင်အပြည့်ကျနေတဲ့ ရုပ်ရှင်ရုံထဲမှာ လူတစ်ရာလောက် တစ်ပြိုင်နက် အံကြိတ်နေတဲ့အသံကို ကြားရတယ်။",
        "ခုံတွေကတော့ တစ်ခုံမှ မလှုပ်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "He Stopped Explaining", l: "ရုံထဲ",
    g: "ပိုင်ရှင်လည်း စကားဆက်မပြောတော့ဘူး။ အားလုံး ထွက်လာကြတယ်။",
    p: "Three men walking out of an auditorium toward a bright doorway, none of them speaking, seen "
      + "from behind.",
    u: ["အဲဒီနောက် ပိုင်ရှင်လည်း စကားဆက်မပြောတော့ဘူး။",
        "ကျွန်တော်တို့ အပြင်ထွက်လာကြတယ်။"] },

  { t: "I Knew You'd Turn the Lights On", l: "ကောင်တာ", w: ["စည်သူ"],
    g: "နောက်ဆုံးလူ ထွက်တဲ့အချိန် စည်သူက တံခါးကြားကို လှည့်ကြည့်ပြီး ပြောတယ်။",
    p: "A man pausing in a doorway to look back into the auditorium, half-lit, speaking to someone "
      + "off-frame.",
    u: ["နောက်ဆုံးလူ ထွက်တဲ့အချိန်မှာ စည်သူက တံခါးကြားကို လှည့်ကြည့်ပြီး စကားတစ်ခွန်း ပြောတယ်။ ကျွန်တော့်ကို ပြောတာ။",
        "“ညက ကိုကြီး မီးဖွင့်ပေးမယ်ဆိုတာ ကျွန်တော်သိလို့ စောင့်နေတာ”"] },

  { t: "But Toward the End", l: "ကောင်တာ", w: ["စည်သူ"],
    g: "သူ့အသံ တုန်လာတယ်။ လက်တွေက လွတ်နေတဲ့လေထဲမှာ လက်တင်တံနှစ်ဖက်ကို ကိုင်ထားသလို ကွေးလာတယ်။",
    p: "A man's two hands curling in empty air into the exact shape of gripping a pair of arm-rests, "
      + "his forearms settling as though onto them. Nothing is there.",
    u: ["သူ့အသံ တုန်လာတယ်။ “ဒါပေမယ့် နောက်ဆုံးနားမှာ…”",
        "သူ့လက်တွေက လွတ်နေတဲ့လေထဲမှာ လက်တင်တံနှစ်ဖက်ကို ကိုင်ထားသလို ကွေးလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Sitting There Was Such a Relief", l: "ကောင်တာ", w: ["ကျွန်တော်", "စည်သူ"],
    g: "နောက်ဆုံးပုံ — ကျွန်တော် သူ့လက်ကို ဖမ်းချလိုက်တယ်။ နောက်မှာ ရုံတံခါး ဟနေတယ်။",
    p: "Final composition: one man's hands pulling another's down out of that shape, and behind "
      + "them the auditorium door standing open on rows of seats. Hold on the two hands.",
    u: ["“မထချင်တော့ဘူး ကိုကြီး”",
        "သူ့လက်ကို ကျွန်တော် ဖမ်းချလိုက်ရတယ်။",
        "“ထိုင်နေရတာ အရမ်းသက်သာလာလို့။”"],
    c: [[2, "finalstinger"]] },
];
reviewSeat(SCENES, CAST, LOCS);
