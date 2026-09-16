/**
 * ကုတင်အောက်က လူနာစောင့် — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * FOUR RULES.
 *
 * 1. THERE IS NO GHOST IN THIS FILM. The old man under the bed is an ordinary
 *    exhausted old man in a singlet and longyi — hollow cheeks, swollen eyelids,
 *    black under the eyes. No pallor, no decay, no glowing eyes, nothing
 *    translucent. What is frightening is that he is so tired, and that he is
 *    still awake.
 *
 * 2. THE NARRATOR BECOMES HIM. Min Thu and the old man are the same role at two
 *    different times, and the film has to make that legible: the same position
 *    under the bed, the same hand reaching up, the same face in the mirror.
 *    After the swap, every shot of Min Thu is from UNDER a bed looking out at
 *    ankles and bed legs.
 *
 * 3. THE EXHAUSTED FACE IS A MOTIF. It appears three times — on the old man, in
 *    the narrator's own mirror, and finally on the mother. Same lighting, same
 *    framing, so the audience recognises it arriving on her.
 *
 * 4. THE UNDERSIDE GOES TOO DEEP, ONCE. In one shot only, the dark under the bed
 *    is far deeper than a bed and rows of iron bed legs recede into it past any
 *    possible wall. Everywhere else it is an ordinary dusty hospital floor.
 */

import { reviewHosp } from './review-hosp.mjs';
export const CAST = [
  { name: "မင်းသူ", en: "Min Thu — the narrator, twenty-seven",
    prompt: "A Burmese man of twenty-seven, slim, a plain shirt and longyi, a dark wristwatch with a "
      + "small chip in the corner of the glass. Over the film he becomes visibly sleep-wrecked: red "
      + "eyes, swollen lids, black beneath them." },
  { name: "အမေ", en: "The mother, about fifty-five",
    prompt: "A Burmese woman of about fifty-five in a hospital gown and then in a house blouse and "
      + "htamein, hair pulled back, thin from illness. ⚠️ In the last act she acquires exactly the "
      + "exhausted face the old man had — red eyes, swollen lids, black beneath." },
  { name: "အဖိုးကြီး", en: "The old man under the bed",
    prompt: "A Burmese man of about sixty-five in an old white sleeveless singlet and a brown longyi. "
      + "Hollow cheeks, sparse white stubble around the mouth, black under the eyes, swollen eyelids. "
      + "⚠️ AN ORDINARY EXHAUSTED OLD MAN — no pallor beyond the natural, no decay, no glowing eyes, "
      + "nothing translucent. He is frightening only because he never sleeps." },
  { name: "မခင်စန်း", en: "Ma Khin San — the night nurse",
    prompt: "A Burmese woman of about thirty-five in a white nurse's uniform and white shoes, a "
      + "cardigan over it at night. Competent and kind, and afraid of one specific thing." },
];

export const LOCS = [
  { name: "အဆောင်", en: "The ward",
    prompt: "A long ward in an old government hospital in Myanmar: very high ceilings, tall windows "
      + "with green wooden shutters propped open, two rows of white-painted iron beds with the paint "
      + "flaking, a narrow central aisle for trolleys, old ceiling fans turning slowly, a nurses' "
      + "table at one end with a lamp. Caretakers' mats, tiffin carriers and cloth bags on the floor "
      + "between and under the beds." },
  { name: "ကုတင်အောက်", en: "Under the bed",
    prompt: "The floor beneath a hospital bed seen at mat level: the underside of an iron frame close "
      + "overhead, bed legs, a rolled mat, a cloth bag used as a pillow, black shoe scuffs on the "
      + "terrazzo, dust. Light comes only from the ward above and to the side." },
  { name: "စင်္ကြံ", en: "The corridor and stairs",
    prompt: "A wide hospital corridor with a broad staircase and a trolley ramp beside it, caretakers "
      + "sitting and sleeping along the wall on mats with thermoses and plastic baskets, strip lights "
      + "overhead." },
  { name: "ဆေးရုံအပြင်", en: "The hospital exterior",
    prompt: "The long red brick wall of an old colonial-era government hospital in heavy monsoon "
      + "rain, the brick darkened with wet, green algae creeping up from the base, a wide entrance "
      + "with steps and a ramp." },
  { name: "ရေဆေးခန်း", en: "The washroom",
    prompt: "An old hospital washroom: a row of taps over a long concrete trough, a cracked mirror "
      + "with the silvering gone at the edges, green tiles, one bare bulb." },
];

export const STYLE =
  "An old government hospital in central Yangon, Myanmar, present day. Institutional realism: high "
  + "ceilings, green shutters, flaking white iron beds, slow ceiling fans, strip lights left half on "
  + "all night, families camped on mats under and between the beds. Cinematic photorealism, 35mm film "
  + "grain, shallow depth of field, 16:9, desaturated warm-green palette. ⚠️ THERE IS NO GHOST IN "
  + "THIS FILM — the old man is an ordinary exhausted man with hollow cheeks and swollen eyelids, "
  + "never pale, never decayed, never translucent, never glowing. No gore, no corpses, nothing "
  + "monstrous anywhere. The horror is exhaustion. No legible text, numbers, captions or watermarks.";

export const SCENES = [
  { t: "He Woke When She Fell Asleep", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "အမေ အိပ်ပျော်သွားမှ သူ နိုးလာတယ်။ ကုတင်အောက်မှာ။",
    p: "Mat level beneath a hospital bed at night: an old man lying on his side on a mat, eyes open, "
      + "the underside of the iron frame close above him.",
    u: ["အမေ အိပ်ပျော်သွားမှ သူ နိုးလာတယ်။",
        "ပထမညကတော့ အဲဒီလို မတွေးမိသေးဘူး။"] },

  { t: "Everyone Sleeps Under the Beds", l: "အဆောင်",
    g: "ဆေးရုံဆိုတော့ လူနာစောင့်တွေ ကုတင်အောက်မှာ ဖျာခင်းအိပ်ကြတာပဲ။",
    p: "A wide ward at night with mats and sleeping family members visible under and between most of "
      + "the iron beds — completely ordinary.",
    u: ["ဆေးရုံဆိုတော့ လူနာစောင့်တွေ ကုတင်အောက်မှာ ဖျာခင်းအိပ်ကြတာပဲ။ အိပ်စရာနေရာ ကျဉ်းလို့ တခြားကုတင်က လူနာစောင့်တစ်ယောက် ကျွန်တော်တို့ဘက် လာအိပ်တာလို့ ထင်ခဲ့တယ်။"] },

  { t: "Head to Head", l: "ကုတင်အောက်",
    g: "သူ့ဖျာက ကျွန်တော့်ဖျာနဲ့ ကပ်နေတယ်။ ခေါင်းချင်းတစ်တန်းတည်း။ မျက်နှာချင်းဆိုင်။",
    p: "Two mats laid edge to edge under a bed with two heads level and facing each other, only "
      + "inches apart, one asleep and one not.",
    u: ["ဒါပေမယ့် သူ အိပ်တဲ့ဖျာက ကျွန်တော့်ဖျာနဲ့ ကပ်နေတယ်။",
        "သူ့ခေါင်းက ကျွန်တော့်ခေါင်းနဲ့ တစ်တန်းတည်း။ မျက်နှာချင်းဆိုင်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Is Never Asleep", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "ညတိုင်း မျက်လုံးဖွင့်ကြည့်မိရင် သူက အိပ်မနေဘူး။ ကျွန်တော့်ကို ကြည့်နေတယ်။",
    p: "Extreme close-up of an old man's open eyes on a mat in near darkness, catching a little light "
      + "from the ward, entirely awake.",
    u: ["ညတိုင်း ကျွန်တော် မျက်လုံးဖွင့်ကြည့်မိရင် သူက အိပ်မနေဘူး။",
        "ကျွန်တော့်ကို ကြည့်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "My Name Is Min Thu", l: "ဆေးရုံအပြင်", w: ["မင်းသူ", "အမေ"],
    g: "အမေ ဆေးရုံတက်ရတဲ့နေ့က မိုးရွာနေတယ်။ အုတ်နီနံရံရှည်ကြီး။",
    p: "A long red brick hospital wall in heavy rain, dark with wet, green algae up from the base, a "
      + "young man helping an older woman from a car.",
    u: ["ကျွန်တော့်နာမည် မင်းသူ။",
        "အဲဒီတုန်းက အသက်နှစ်ဆယ့်ခုနစ်နှစ်။ အမေနဲ့ နှစ်ယောက်တည်း နေတယ်။",
        "အမေ ဆေးရုံတက်ရတဲ့နေ့က မိုးရွာနေတယ်။ ရန်ကုန်မြို့လယ်ဘက်က အစိုးရဆေးရုံဟောင်းကြီးတစ်ရုံ။"] },

  { t: "Algae Up the Brick", l: "ဆေးရုံအပြင်",
    g: "မိုးရေစိုနေတဲ့ အုတ်တွေက အရောင်ရင့်နေတယ်။ အောက်ခြေတစ်လျှောက် ရေညှိစိမ်းစိမ်းတွေ တက်နေတယ်။",
    p: "Close on the base of a rain-soaked red brick wall with green algae growing up it, water "
      + "running down the face of the bricks.",
    u: ["ကားပေါ်က ဆင်းလိုက်တာနဲ့ အုတ်နီနံရံရှည်ကြီးကို မြင်ရတယ်။ မိုးရေစိုနေတဲ့ အုတ်တွေက အရောင်ရင့်နေတယ်။ အောက်ခြေတစ်လျှောက် ရေညှိစိမ်းစိမ်းတွေ တက်နေတယ်။",
        "အဆောင်ဝင်ပေါက်မှာ လှေကားကျယ်ကြီးရှိတယ်။ ဘေးမှာ လူနာတွန်းလှည်းတင်ဖို့ ဆင်ခြေလျှော။"] },

  { t: "Lean on Me", l: "စင်္ကြံ", w: ["မင်းသူ", "အမေ"],
    g: "အမေက လက်မောင်းကို ကိုင်ပြီး ဖြည်းဖြည်းလျှောက်တယ်။ “သား… အမေ လေးနေလား။”",
    p: "A young man supporting his mother up a broad hospital staircase, her hand on his forearm, "
      + "both moving slowly.",
    u: ["အမေက ကျွန်တော့်လက်မောင်းကို ကိုင်ပြီး ဖြည်းဖြည်းလျှောက်တယ်။",
        "“သား… အမေ လေးနေလား။” “မလေးပါဘူး။ ကျွန်တော့်ကို မှီလိုက်။”",
        "အမေက အဲဒီစကားကြားမှ သူ့ကိုယ်အလေးချိန်ကို ကျွန်တော့်ဘက် နည်းနည်းလွှဲပေးတယ်။"] },

  { t: "Stepping Over People", l: "စင်္ကြံ",
    g: "နံရံအောက်ခြေက ဖျာပေါ်အိပ်နေတဲ့ လူနာစောင့်တွေကို ခြေထောက်နဲ့ မထိမိအောင် ရှောင်နေရတယ်။",
    p: "A corridor floor lined with mats, sleeping people, tiffin carriers, thermoses and plastic "
      + "baskets, two pairs of feet picking a careful path between them.",
    u: ["အမေ့ကို တွဲလာတဲ့အချိန်မှာတောင် နံရံအောက်ခြေက ဖျာပေါ်အိပ်နေတဲ့ လူနာစောင့်တွေကို ခြေထောက်နဲ့ မထိမိအောင် ရှောင်နေရသေးတယ်။",
        "စင်္ကြံမှာ ထမင်းချိုင့်တွေ၊ ရေနွေးဘူးတွေ၊ ပလတ်စတစ်ခြင်းတွေ။"] },

  { t: "Eating and Crying", l: "စင်္ကြံ",
    g: "လူတချို့က သတင်းစာပေါ် ထမင်းစားနေကြတယ်။ လူတချို့က ဖုန်းပြောနေရင်း ငိုနေကြတယ်။",
    p: "Two small scenes in one corridor frame: a family eating off newspaper on the floor, and a "
      + "woman further along crying quietly into a phone.",
    u: ["လူတချို့က သတင်းစာပေါ် ထမင်းစားနေကြတယ်။",
        "လူတချို့က ဖုန်းပြောနေရင်း ငိုနေကြတယ်။"] },

  { t: "He Did Not Wake", l: "စင်္ကြံ",
    g: "တစ်ယောက်က အဝတ်အိတ်ကို ခုပြီး အိပ်နေတယ်။ ဖျာစွန်းကို တက်နင်းမိတာတောင် မနိုးဘူး။",
    p: "A man asleep on a corridor mat with a cloth bag under his head, someone's foot stepping "
      + "across the corner of his mat, him not stirring at all.",
    u: ["တစ်ယောက်ကတော့ ခေါင်းအုံးအစား အဝတ်အိတ်ကို ခုထားပြီး အိပ်နေတာ။ လူတွေလျှောက်သွားလို့ သူ့ဖျာစွန်းကို တက်နင်းမိတာတောင် မနိုးဘူး။",
        "အဲဒီလူကို ကြည့်ပြီး ဒီလောက်လူရှုပ်တဲ့နေရာမှာ ဘယ်လိုများ အိပ်ပျော်နိုင်ပါလိမ့်လို့ ကျွန်တော် တွေးခဲ့သေးတယ်။"] },

  { t: "Three Nights Later I Understood", l: "စင်္ကြံ", w: ["မင်းသူ"],
    g: "ပင်ပန်းလွန်းလာရင် လူတစ်ယောက်ဟာ အိပ်ရာကို မရွေးနိုင်တော့ဘူး။ ဘေးမှာ ဘယ်သူရှိလဲဆိုတာကိုတောင် မရွေးနိုင်တော့ဘူး။",
    p: "Close on the narrator's face in corridor light, already tired, watching the sleeping man.",
    u: ["သုံးညအကြာမှာတော့ နားလည်ခဲ့ပါတယ်။",
        "ပင်ပန်းလွန်းလာရင် လူတစ်ယောက်ဟာ အိပ်ရာကို မရွေးနိုင်တော့ဘူး။",
        "ဘေးမှာ ဘယ်သူရှိသလဲဆိုတာကိုတောင် မရွေးနိုင်တော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "The Ward", l: "အဆောင်",
    g: "အဆောင်က ရှည်တယ်။ မျက်နှာကြက်အမြင့်ကြီး။ ပြတင်းပေါက်တွေ လူတစ်ရပ်ကျော်မြင့်တယ်။",
    p: "A very long high-ceilinged ward seen down its central aisle: tall windows with green wooden "
      + "shutters propped open, two rows of flaking white iron beds, old ceiling fans.",
    u: ["အမေ့ကို အပေါ်ထပ်အဆောင်မှာ နေရာပေးတယ်။ အဆောင်က ရှည်တယ်။",
        "မျက်နှာကြက် အမြင့်ကြီး။ ပြတင်းပေါက်တွေလည်း လူတစ်ရပ်ကျော်မြင့်တယ်။ အစိမ်းရောင် သစ်သားလိုက်ကာတွေကို အပြင်ဘက် ဖွင့်ထောက်ထားတယ်။"] },

  { t: "Two Rows of Iron Beds", l: "အဆောင်",
    g: "အဖြူရောင်ဆေး ကျွတ်နေတဲ့ သံကုတင်တွေ။ အလယ်မှာ တွန်းလှည်းသွားဖို့ လမ်းကျဉ်း။",
    p: "A row of white-painted iron hospital beds with the paint flaking off the frames, a narrow "
      + "trolley aisle between the rows.",
    u: ["အဖြူရောင်ဆေး ကျွတ်နေတဲ့ သံကုတင်တွေကို နှစ်ဖက်စီ တန်းထားတယ်။",
        "အလယ်မှာ တွန်းလှည်းသွားဖို့ လမ်းကျဉ်းလေးတစ်ကြောင်း။"] },

  { t: "The Fans Don't Reach", l: "အဆောင်",
    g: "ပန်ကာအဟောင်းတွေက လည်နေပေမယ့် လေက အောက်အထိ သိပ်မရောက်ဘူး။ ပိုးသတ်ဆေးနံ့၊ အဝတ်စိုနံ့။",
    p: "Old ceiling fans turning slowly very high up under a tall ceiling, the air beneath them "
      + "visibly still, laundry and mats undisturbed.",
    u: ["ပန်ကာအဟောင်းတွေက လည်နေပေမယ့် လေက အောက်အထိ သိပ်မရောက်ဘူး။",
        "ပိုးသတ်ဆေးနံ့၊ အဝတ်စိုနံ့၊ ထမင်းဟင်းနံ့တွေ ရောနေတယ်။"] },

  { t: "There Was Nothing Under It", l: "ကုတင်အောက်",
    g: "အဲဒီတုန်းက ကုတင်အောက်မှာ ဘာမှမရှိဘူး။ ကြမ်းခင်းမှာ အမည်းရောင်ဖိနပ်ရာတချို့ပဲ။ ဖျာမရှိ။ လူမရှိ။",
    p: "The empty floor under a hospital bed in daylight: terrazzo with black shoe scuffs on it, one "
      + "cloth bag pushed to the back, nothing else at all.",
    u: ["အမေ့ကုတင်က ပြတင်းပေါက်နဲ့ မနီးဘူး။ အဆောင်အတွင်းဘက်။",
        "ကျွန်တော် ထိုင်ဖို့ ပလတ်စတစ်ခုံတစ်လုံး ရှာယူလာတယ်။ အဝတ်အိတ်ကို ကုတင်အောက် ထိုးထားတယ်။",
        "အဲဒီတုန်းက ကုတင်အောက်မှာ ဘာမှမရှိဘူး။ ကျွန်တော် သေချာမှတ်မိတယ်။",
        "ကြမ်းခင်းမှာ အမည်းရောင်ဖိနပ်ရာတချို့ပဲ ရှိတယ်။ ဖျာမရှိဘူး။ လူလည်းမရှိဘူး။"],
    c: [[2, "stinger"]] },

  { t: "The First Night", l: "အဆောင်", w: ["အမေ", "မင်းသူ"],
    g: "အမေက ဆယ်နာရီလောက် အိပ်ပျော်သွားတယ်။ ကျွန်တော် ထိုင်ခုံပေါ်မှာ နောက်မှီလိုက်တယ်။",
    p: "A woman asleep in a hospital bed with a blanket drawn up, her son settling back on a plastic "
      + "stool beside her in half-light.",
    u: ["ပထမညမှာ အမေက ဆယ်နာရီလောက် အိပ်ပျော်သွားတယ်။",
        "နေ့ခင်းတစ်နေ့လုံး ပင်ပန်းထားလို့ အိပ်ပျော်သွားတာကို မြင်ရတော့ ကျွန်တော်လည်း စိတ်အေးသွားတယ်။",
        "စောင်ကို ပြန်တင်ပေးပြီး ထိုင်ခုံပေါ်မှာ နောက်မှီလိုက်တယ်။"] },

  { t: "The Lights Stay Half On", l: "အဆောင်",
    g: "အဆောင်မီးတွေ အကုန်မပိတ်ဘူး။ အလယ်က မီးချောင်းတချို့နဲ့ သူနာပြုစားပွဲနားက မီးတွေ လင်းနေတယ်။",
    p: "A ward at night with only some of the strip lights on, a pool of lamplight at the nurses' "
      + "table at the far end, everything else in green-grey shadow.",
    u: ["အဆောင်မီးတွေ အကုန်မပိတ်ဘူး။",
        "အလယ်က မီးချောင်းတချို့နဲ့ သူနာပြုစားပွဲနားက မီးတွေ လင်းနေတယ်။"] },

  { t: "The Sounds of the Ward", l: "အဆောင်",
    g: "ဟိုဘက်ကုတင်က လူနာတစ်ယောက် ချောင်းဆိုးနေတယ်။ အဝေးက တွန်းလှည်းဘီးတစ်လုံး တကျွီကျွီ မြည်နေတယ်။",
    p: "A trolley standing far down a dim ward aisle, one wheel turned at an angle, nobody near it.",
    u: ["ဟိုဘက်ကုတင်က လူနာတစ်ယောက် ချောင်းဆိုးနေတယ်။",
        "စင်္ကြံဘက်မှာ ဖိနပ်ရှပ်တိုက်သံ ကြားရတယ်။",
        "အဝေးက တွန်းလှည်းဘီးတစ်လုံးက တကျွီကျွီ မြည်နေတယ်။"] },

  { t: "A Mat Unrolling", l: "ကုတင်အောက်",
    g: "ခြေထောက်နားကနေ ဖျာဖြန့်သံ ကြားရတယ်။ ရှပ်။",
    p: "A rolled reed mat being unrolled across the floor beneath a bed, seen from stool height, only "
      + "hands and the mat visible.",
    u: ["ကျွန်တော် ခဏမှေးလိုက်မိတယ်။",
        "အဲဒီအချိန်မှာ ခြေထောက်နားကနေ ဖျာဖြန့်သံ ကြားရတယ်။ ရှပ်။"],
    c: [[1, "bigstinger"]] },

  { t: "An Old Man Was Making His Bed", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "အမေ့ကုတင်အောက်မှာ အဖိုးကြီးတစ်ယောက် ဖျာခင်းနေတယ်။ အသက်ခြောက်ဆယ်ကျော်။",
    p: "Looking down under a hospital bed: an old man in a white singlet and brown longyi seated on a "
      + "mat, smoothing its edge, looking up at camera.",
    u: ["ကျွန်တော် ငုံ့ကြည့်လိုက်တယ်။",
        "အမေ့ကုတင်အောက်မှာ အဖိုးကြီးတစ်ယောက် ဖျာခင်းနေတယ်။ အသက်ခြောက်ဆယ်ကျော်လောက် ရှိမယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "White Singlet, Brown Longyi", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "အဖြူရောင်စွပ်ကျယ်အဟောင်းနဲ့ အညိုရောင်ပုဆိုး။ ပါးတွေ ချောင်နေတယ်။ မုတ်ဆိတ်မွေးဖြူဖြူ ကျိုးတိုးကျဲတဲ။",
    p: "Close on the old man: hollow cheeks, sparse white stubble around the mouth, an old white "
      + "sleeveless singlet, entirely ordinary and entirely worn out.",
    u: ["အဖြူရောင် စွပ်ကျယ်အဟောင်းနဲ့ အညိုရောင်ပုဆိုး။ ပါးတွေ ချောင်နေတယ်။ မုတ်ဆိတ်မွေးဖြူဖြူတွေက ပါးစပ်တစ်ဝိုက်မှာ ကျိုးတိုးကျဲတဲ။"] },

  { t: "Are You Going to Sleep", l: "ကုတင်အောက်", w: ["အဖိုးကြီး", "မင်းသူ"],
    g: "သူက ဖျာပေါ်ထိုင်လျက် မော့ကြည့်ပြီး မေးတယ် — “အိပ်တော့မလို့လား၊ သား။”",
    p: "An old man seated cross-legged on a mat under a bed looking up and speaking, the young man's "
      + "knees and stool visible above him.",
    u: ["သူက ဖျာပေါ်မှာ ထိုင်လျက် ကျွန်တော့်ကို မော့ကြည့်တယ်။",
        "“အိပ်တော့မလို့လား၊ သား။” “ခဏမှေးတာပါ။”",
        "“ညတိုင်း နင်ပဲ စောင့်တာလား။” “ဟုတ်တယ်။”"] },

  { t: "Tiring, Isn't It", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "သူ အမေ့ကို တစ်ချက်ကြည့်ပြီး ပြန်လှည့်တယ်။ “ပင်ပန်းမှာပေါ့။”",
    p: "The old man's face turned up, speaking, kind in an exhausted way.",
    u: ["သူ ခေါင်းညိတ်တယ်။ အမေ့ကို တစ်ချက်ကြည့်ပြီး ကျွန်တော့်ဘက် ပြန်လှည့်တယ်။",
        "“ပင်ပန်းမှာပေါ့။” ကျွန်တော် ရယ်ပြလိုက်တယ်။"] },

  { t: "He Looked Worse Than I Did", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "မျက်လုံးအောက်တွေ မည်းနေတယ်။ မျက်ခွံတွေက ဖောင်းနေတယ်။ တစ်ညနှစ်ညလောက် မဟုတ်သလိုပဲ။",
    p: "⚠️ THE EXHAUSTED FACE — extreme close-up of the old man's eyes: black beneath them, lids "
      + "swollen, whites threaded red. Frame this composition exactly; it recurs three more times.",
    u: ["သူ့ပုံစံက ကျွန်တော့်ထက်တောင် ပိုပင်ပန်းနေသေးတာ။",
        "မျက်လုံးအောက်တွေ မည်းနေတယ်။ မျက်ခွံတွေက ဖောင်းနေတယ်။",
        "အိပ်ရေးပျက်တာ တစ်ညနှစ်ညလောက် မဟုတ်သလိုပဲ။"],
    c: [[2, "bigstinger"]] },

  { t: "Which Bed Are You Watching", l: "အဆောင်", w: ["အဖိုးကြီး"],
    g: "သူ အခန်းထောင့်ဘက်ကို လက်ညှိုးထိုးတယ်။ အစိမ်းရောင်ပိတ်စကာ နောက်က ကုတင်။",
    p: "A hand pointing down a dim ward toward a bed in the far corner screened off by a green cloth "
      + "curtain on a rail.",
    u: ["“အဖိုးက ဘယ်ကုတင်ကို စောင့်တာလဲ။”",
        "သူ အခန်းထောင့်ဘက်ကို လက်ညှိုးထိုးတယ်။ အစိမ်းရောင်ပိတ်စကာ နောက်က ကုတင်။"] },

  { t: "Nobody Ever Visited Him", l: "အဆောင်",
    g: "အဲဒီကုတင်မှာ အဖိုးကြီးလူနာတစ်ယောက် ရှိတယ်ဆိုတာ သိပေမယ့် မျက်နှာ မမြင်ဖူးဘူး။ အမြဲ အိပ်နေတယ်။",
    p: "A green curtain drawn most of the way around a corner bed, a slice of white sheet and the "
      + "shape of a sleeping patient just visible, no visitors' chairs beside it.",
    u: ["အဲဒီကုတင်မှာ အဖိုးကြီးလူနာတစ်ယောက် ရှိတယ်ဆိုတာတော့ ကျွန်တော် သိတယ်။",
        "မျက်နှာကို သေချာမမြင်ဖူးဘူး။ အမြဲ အိပ်နေတယ်။ သူ့ဆီ လူလာလည်တာလည်း မတွေ့ဖူးဘူး။"],
    c: [[1, "stinger"]] },

  { t: "You Can Sleep If You Want", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "“မိသားစုက တခြားလူ မရှိဘူးလား။” သူ မဖြေဘူး။ ဖျာအစွန်းကိုပဲ ပြန်ဖြန့်နေတယ်။",
    p: "An old man's hands smoothing the edge of a mat over and over, not answering.",
    u: ["“မိသားစုက တခြားလူ မရှိဘူးလား။” ကျွန်တော် မေးတော့ အဖိုးကြီးက မဖြေဘူး။",
        "သူ့ဖျာအစွန်းကိုပဲ ဖြည်းဖြည်း ပြန်ဖြန့်နေတယ်။",
        "ပြီးတော့ ပြောတယ်။ “နင် အိပ်ချင်ရင် အိပ်လို့ရတယ်။”"],
    c: [[2, "stinger"]] },

  { t: "I'll Answer For You", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "“အမေ နိုးရင် ရေတိုက်ပေးရဦးမယ်။” သူ နှုတ်ခမ်းကို နည်းနည်း ဆွဲတင်လိုက်တယ်။ “ငါ ဖြေပေးမှာပေါ့။”",
    p: "The old man's mouth pulled up slightly at the corners — not quite a smile — his eyes still "
      + "fixed upward.",
    u: ["ကျွန်တော် နာရီကြည့်လိုက်တယ်။ ညဆယ့်တစ်နာရီခွဲ။",
        "“ရပါတယ်၊ အဖိုး။ အမေ နိုးရင် ရေတိုက်ပေးရဦးမယ်။”",
        "သူ ပြုံးတယ်။ ပြုံးတာထက် နှုတ်ခမ်းကို နည်းနည်း ဆွဲတင်လိုက်တာမျိုး။",
        "“နင့်အမေ နိုးရင်…” သူ ကျွန်တော့်မျက်နှာကို ကြည့်တယ်။ “ငါ ဖြေပေးမှာပေါ့။”"],
    c: [[3, "bigstinger"]] },

  { t: "Midnight, Water", l: "အဆောင်", w: ["အမေ", "မင်းသူ"],
    g: "ညသန်းခေါင်လောက်မှာ အမေ နိုးတယ်။ ရေဆာလို့။",
    p: "A son holding a cup to his mother's lips in a dim ward, one hand behind her head.",
    u: ["ညသန်းခေါင်လောက်မှာ အမေ နိုးတယ်။ ရေဆာလို့။",
        "ကျွန်တော် ရေတိုက်ပေးပြီး အောက်ကို ပြန်ကြည့်တော့ အဖိုးကြီးက လှဲနေပြီ။"] },

  { t: "Facing Me, Eyes Shut", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "ပုဆိုးကို ဒူးအထိ ဆွဲခြုံထားတယ်။ ကျွန်တော့်ဘက် မျက်နှာမူထားတယ်။ မျက်လုံးတွေ ပိတ်ထားတယ်။",
    p: "The old man lying on his side on the mat with his longyi drawn to his knees, facing the "
      + "camera, eyes closed.",
    u: ["ပုဆိုးကို ဒူးအထိ ဆွဲခြုံထားတယ်။",
        "ကျွန်တော့်ဘက် မျက်နှာမူထားတယ်။ မျက်လုံးတွေ ပိတ်ထားတယ်။"] },

  { rev: ["geography fixed"], t: "One Bed Leg Between Us", l: "ကုတင်အောက်", w: ["မင်းသူ", "အဖိုးကြီး"],
    g: "ကျွန်တော်လည်း ကိုယ့်ဖျာကို ဖြန့်လိုက်တယ်။ ကြားမှာ သံကုတင်ခြေတစ်ချောင်းပဲ ခြားတယ်။",
    p: "⚠️ MIN THU'S MAT IS BESIDE THE BED against the wall and the old man's is UNDER the frame. One "
      + "iron bed leg stands between them; the two heads are level and face one another across it.",
    u: ["ကျွန်တော်လည်း ကိုယ့်ဖျာကို ဖြန့်လိုက်တယ်။ အမေ့ကုတင်ဘေး၊ နံရံနဲ့ နီးတဲ့နေရာမှာ။",
        "အဖိုးကြီးနဲ့ ကျွန်တော့်ကြားမှာ သံကုတင်ခြေတစ်ချောင်းပဲ ခြားတယ်။",
        "ခေါင်းအုံးပေါ် ခေါင်းချပြီး မျက်လုံးမှိတ်လိုက်တယ်။"] },

  { t: "He Was Not Breathing", l: "ကုတင်အောက်",
    g: "ခဏကြာတော့ သတိထားမိတယ်။ အဖိုးကြီးရဲ့ အသက်ရှူသံ မကြားရဘူး။",
    p: "The old man's chest and shoulder on the mat, completely still — no rise, no fall.",
    u: ["ခဏကြာတော့ တစ်ခုခုကို သတိထားမိတယ်။",
        "အဖိုးကြီးရဲ့ အသက်ရှူသံ မကြားရဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Eyes Wide Open", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "ကျွန်တော် မျက်လုံးဖွင့်ကြည့်လိုက်တယ်။ သူ ကျွန်တော့်ကို ကြည့်နေတယ်။ မျက်လုံးအပြည့်ဖွင့်လျက်နဲ့။",
    p: "The old man's eyes fully open inches away in the dark, a little ward light caught in them.",
    u: ["ကျွန်တော် မျက်လုံးဖွင့်ကြည့်လိုက်တယ်။",
        "သူ ကျွန်တော့်ကို ကြည့်နေတယ်။ မျက်လုံးအပြည့်ဖွင့်လျက်နဲ့။",
        "“အဖိုး မအိပ်သေးဘူးလား။” သူ မဖြေဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Wouldn't That Be Nice", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "နောက်ကျောဘက်ကနေ အသံတိုးတိုး — “အိပ်ပျော်သွားရင် ကောင်းမှာပဲနော်။” ဆုတောင်းနေသလိုပဲ။",
    p: "The back of the young man's head and shoulder on a mat, the old man behind him out of focus, "
      + "a voice arriving from behind.",
    u: ["မီးရောင်နည်းနည်းက သူ့မျက်လုံးထဲမှာ ပြန်တောက်နေတယ်။ ကျွန်တော် တစ်ဖက်ကို လှည့်အိပ်လိုက်တယ်။",
        "နောက်ကျောဘက်ကနေ အသံတိုးတိုး ကြားလာတယ်။ “သား…” “ဗျာ။”",
        "“အိပ်ပျော်သွားရင် ကောင်းမှာပဲနော်။”",
        "သူ ပြောပုံက ကျွန်တော့်ကို ပြောနေသလို မဟုတ်ဘူး။ ကိုယ့်ဘာသာကိုယ် ဆုတောင်းနေသလိုပဲ။"],
    c: [[2, "bigstinger"]] },

  { t: "Gone by Morning", l: "ကုတင်အောက်",
    g: "မနက်ရောက်တော့ သူ မရှိတော့ဘူး။ ဖျာလည်းမရှိဘူး။ အဝတ်အိတ်တစ်လုံးပဲ ရှိတယ်။",
    p: "The floor under the bed in morning daylight: only a cloth bag, dust and shoe scuffs. No mat, "
      + "nobody.",
    u: ["မနက်ရောက်တော့ သူ မရှိတော့ဘူး။ ဖျာလည်းမရှိဘူး။",
        "ကုတင်အောက်မှာ ကျွန်တော့်အဝတ်အိတ်တစ်လုံးပဲ ရှိတယ်။",
        "ကျွန်တော်လည်း စိတ်ထဲမထားမိဘူး။ မျက်နှာသစ်ဖို့ သွားတာဖြစ်မှာပေါ့။"] },

  { t: "A Busy Day", l: "စင်္ကြံ", w: ["မင်းသူ"],
    g: "စာရွက်တွေ ယူသွားရတယ်။ ပစ္စည်းတွေ ဝယ်ရတယ်။ အိမ်ကို ခဏပြန်ရတယ်။",
    p: "A young man queueing at a hospital counter with forms, then carrying plastic bags along a "
      + "corridor — daylight, mundane, busy.",
    u: ["အဲဒီနေ့က အလုပ်များတယ်။",
        "စာရွက်တွေ ယူသွားရတယ်။ အမေ့အတွက် ပစ္စည်းတွေ ဝယ်ပေးရတယ်။ အိမ်ကို ခဏပြန်ပြီး အဝတ်အစား ယူလာရတယ်။"] },

  { t: "Your Eyes Are Red", l: "အဆောင်", w: ["အမေ", "မင်းသူ"],
    g: "ညနေပြန်ရောက်တော့ အမေက “သား မျက်လုံးတွေ နီနေပြီ” လို့ ပြောတယ်။",
    p: "A mother sitting up in bed looking closely at her son's face, one hand raised toward his "
      + "cheek.",
    u: ["ညနေဆေးရုံ ပြန်ရောက်တော့ အမေက နည်းနည်းအားရှိလာပြီ။",
        "ကျွန်တော့်ကို မြင်တာနဲ့ မျက်နှာကြည့်ပြီး ပြောတယ်။ “သား မျက်လုံးတွေ နီနေပြီ။”",
        "“ဘာမှမဖြစ်ပါဘူး။” “ဒီည အိပ်နော်။ အမေက နေကောင်းလာပြီ။”"] },

  { t: "She Was Always Like That", l: "အဆောင်", w: ["အမေ"],
    g: "သူ့ကိုယ်သူ ထိုင်လို့မရသေးတဲ့အချိန်တောင် ကျွန်တော် ထမင်းစားပြီးပြီလားပဲ မေးနေတတ်တယ်။",
    p: "A woman too weak to sit up unaided, still turned toward her son with a question on her face.",
    u: ["ကျွန်တော် ခေါင်းညိတ်လိုက်တယ်။ အမေက အဲဒီလိုပဲ။",
        "သူ့ကိုယ်သူ ထိုင်လို့မရသေးတဲ့အချိန်တောင် ကျွန်တော် ထမင်းစားပြီးပြီလားပဲ မေးနေတတ်တယ်။",
        "အဲဒီညမှာလည်း သူ မအိပ်ခင် နောက်ဆုံးပြောတဲ့စကားက “သားလည်း အိပ်တော့။”"] },

  { t: "The Mat Again", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "အမေ အိပ်ပျော်ပြီး မကြာဘူး။ ဖျာဖြန့်သံ ပြန်ကြားလာတယ်။ အဖိုးကြီး ရောက်နေပြီ။",
    p: "The old man already lying under the bed on his unrolled mat, seen from above, as though he "
      + "had never left.",
    u: ["အမေ အိပ်ပျော်ပြီး မကြာဘူး။ ဖျာဖြန့်သံ ပြန်ကြားလာတယ်။ ရှပ်။",
        "ကျွန်တော် အောက်ကို ငုံ့ကြည့်လိုက်တယ်။ အဖိုးကြီး ရောက်နေပြီ။"],
    c: [[1, "bigstinger"]] },

  { t: "I Never Saw Him Go In", l: "အဆောင်", w: ["မင်းသူ"],
    g: "ဘယ်အချိန်က ဝင်လာသလဲ မသိဘူး။ ကျွန်တော်က အမေ့ဘေးမှာ တစ်ချိန်လုံး ထိုင်နေတာ။",
    p: "A young man on a stool beside a bed, alert, having watched the same floor for hours.",
    u: ["ဘယ်အချိန်က ဝင်လာသလဲ မသိဘူး။",
        "ကျွန်တော်က အမေ့ဘေးမှာ တစ်ချိန်လုံး ထိုင်နေတာ။ သူ့ကို ကုတင်အောက် ဝင်သွားတာ မမြင်လိုက်ဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Help Me Up", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "သူ့လက်တစ်ဖက်က ဖျာပေါ်ကနေ ကျွန်တော့်ဘက် လှမ်းလာတယ်။ လက်ဖဝါးကို ဖြန့်ထားတယ်။",
    p: "An old man's open palm extended upward from under a bed toward the camera, fingers relaxed, "
      + "waiting.",
    u: ["“ဒီနေ့လည်း မအိပ်ရသေးဘူးလား။” သူ မေးတယ်။ ကျွန်တော် ခေါင်းခါတယ်။ “အိပ်ရဦးမှာပါ။”",
        "သူ့လက်တစ်ဖက်က ဖျာပေါ်ကနေ ကျွန်တော့်ဘက်ကို လှမ်းလာတယ်။ လက်ဖဝါးကို ဖြန့်ထားတယ်။",
        "“ငါ့ကို နည်းနည်း ထူပေးပါဦးကွာ။”"],
    c: [[2, "bigstinger"]] },

  { t: "Min Thu", l: "အဆောင်", w: ["မခင်စန်း", "မင်းသူ"],
    g: "ကျွန်တော် ကိုင်းလိုက်တဲ့အချိန် သူနာပြု မခင်စန်း ရောက်လာတယ်။",
    p: "A young man bent forward reaching down beside a bed, and a nurse arriving beside him with a "
      + "chart, startling him.",
    u: ["ကျွန်တော် ထိုင်ခုံကနေ ရှေ့ကို ကိုင်းလိုက်တယ်။",
        "အဲဒီအချိန်မှာ သူနာပြုတစ်ယောက် အမေ့ကုတင်နား ရောက်လာတယ်။ “မင်းသူ။”",
        "ကျွန်တော် လန့်ပြီး မော့ကြည့်လိုက်တယ်။ ညတာဝန်ကျ သူနာပြု မခင်စန်း။",
        "“အမေ အိပ်နေပြီလား။” “ဟုတ်ကဲ့။”"] },

  { t: "Which Old Man", l: "အဆောင်", w: ["မခင်စန်း"],
    g: "“ဘာလို့ အောက်ကို လက်လှမ်းနေတာလဲ။” “အဖိုးကြီးကို ထူပေးမလို့။” မခင်စန်းရဲ့ မျက်နှာ ချက်ချင်း ပြောင်းသွားတယ်။",
    p: "Close on a nurse's face changing — the professional calm dropping out of it in one beat.",
    u: ["သူ အမေ့ကို ကြည့်ပြီး ကျွန်တော့်ဘက် ပြန်လှည့်တယ်။",
        "“ဘာလို့ အောက်ကို လက်လှမ်းနေတာလဲ။” “အဖိုးကြီးကို ထူပေးမလို့။”",
        "မခင်စန်းရဲ့ မျက်နှာက ချက်ချင်း ပြောင်းသွားတယ်။ “ဘယ်အဖိုးကြီးလဲ။”"],
    c: [[2, "bigstinger"]] },

  { t: "Nobody Was There", l: "ကုတင်အောက်",
    g: "ကျွန်တော် ငုံ့ကြည့်လိုက်တယ်။ ကုတင်အောက်မှာ လူမရှိဘူး။ ဖျာလည်းမရှိဘူး။",
    p: "The empty floor under the bed from the young man's eyeline: bag, dust, scuffs. The palm that "
      + "was inches from his hand is gone.",
    u: ["ကျွန်တော် ငုံ့ကြည့်လိုက်တယ်။",
        "ကုတင်အောက်မှာ လူမရှိဘူး။ ဖျာလည်းမရှိဘူး။",
        "ခုနက ကျွန်တော့်လက်နဲ့ ထိခါနီးနေတဲ့ လက်ဖဝါးလည်း မရှိတော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "I Checked the Whole Row", l: "အဆောင်", w: ["မင်းသူ"],
    g: "နောက်က ကုတင်ခြေတွေကြားအထိ လိုက်ကြည့်တယ်။ အဝတ်အိတ်တွေ။ ဖိနပ်တွေ။ ထမင်းချိုင့်တွေ။ လူမရှိဘူး။",
    p: "A low view down the length of a ward beneath the beds: a long receding row of iron legs, "
      + "bags and slippers, and no person anywhere.",
    u: ["ကျွန်တော် နောက်က ကုတင်ခြေတွေကြားအထိ လိုက်ကြည့်တယ်။",
        "အဝတ်အိတ်တွေ။ ဖိနပ်တွေ။ ထမင်းချိုင့်တွေ။ လူမရှိဘူး။"] },

  { t: "What Did He Look Like", l: "အဆောင်", w: ["မခင်စန်း", "မင်းသူ"],
    g: "မခင်စန်းက လက်မောင်းကို ထိလိုက်တယ်။ “ဘယ်လိုပုံစံလဲ။” ကျွန်တော် ပြောပြတယ်။",
    p: "A nurse with a steadying hand on a young man's forearm, listening to a description, her face "
      + "closing.",
    u: ["မခင်စန်းက ကျွန်တော့်လက်မောင်းကို ထိလိုက်တယ်။ “ဘယ်လိုပုံစံလဲ။”",
        "ကျွန်တော် ပြောပြတယ်။ အဖြူရောင်စွပ်ကျယ်။ အညိုရောင်ပုဆိုး။ ပါးချောင်ချောင်။"] },

  { t: "She Looked at the Curtain", l: "အဆောင်", w: ["မခင်စန်း"],
    g: "သူ ဘာမှမပြောဘူး။ အခန်းထောင့်က ပိတ်စကာဘက်ကို တစ်ချက်လှမ်းကြည့်တယ်။",
    p: "A nurse's eyes flicking down the ward to the green curtain around the corner bed, then back.",
    u: ["သူ ဘာမှမပြောဘူး။",
        "အခန်းထောင့်က ပိတ်စကာဘက်ကို တစ်ချက်လှမ်းကြည့်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Don't Sleep Down There", l: "အဆောင်", w: ["မခင်စန်း"],
    g: "ပြီးတော့ ကျွန်တော့်ဖျာကို ခေါက်ခိုင်းတယ်။ “ဒီည အောက်မှာ မအိပ်နဲ့။”",
    p: "A nurse gesturing at a rolled mat on the floor, telling a young man to put it away.",
    u: ["ပြီးတော့ ကျွန်တော့်ဖျာကို ခေါက်ခိုင်းတယ်။",
        "“ဒီည အောက်မှာ မအိပ်နဲ့။ မှေးချင်ရင် ကျွန်မတို့စားပွဲနားမှာ ခုံရှိတယ်။ အဲဒီမှာ လာထိုင်။”"],
    c: [[1, "stinger"]] },

  { t: "Someone Said This Before", l: "အဆောင်", w: ["မခင်စန်း"],
    g: "“ဘာလို့လဲ၊ အစ်မ။” သူ ခဏတိတ်တယ်။ “အရင်တုန်းကလည်း လူနာစောင့်တစ်ယောက် အဲဒီလို ပြောဖူးတယ်။”",
    p: "A nurse lowering her voice, close, her eyes not on the young man but on the floor between "
      + "them.",
    u: ["“ဘာလို့လဲ၊ အစ်မ။” သူ ခဏတိတ်တယ်။",
        "“အရင်တုန်းကလည်း လူနာစောင့်တစ်ယောက် အဲဒီလို ပြောဖူးတယ်။” “ဘာပြောတာလဲ။”",
        "မခင်စန်းက အသံလျှော့လိုက်တယ်။ “အောက်ကလူက သူ့ကို ထူခိုင်းနေတာတဲ့။”"],
    c: [[2, "bigstinger"]] },

  { t: "They Could Not Wake Him", l: "အဆောင်", w: ["မခင်စန်း"],
    g: "အဲဒီလူနာစောင့်ကို မနက်မှာ နှိုးလို့မရတော့ဘူးတဲ့။ အသက်ရှူနေတယ်။ ဒါပေမယ့် မနိုးဘူး။",
    p: "A hospital bed with a patient lying still and a monitor beside it, a nurse's hand withdrawing "
      + "from a shoulder.",
    u: ["သူ ဆက်မပြောချင်ဘူး။ ကျွန်တော် ထပ်မေးတော့မှ ပြောတယ်။",
        "အဲဒီလူနာစောင့်ကို မနက်မှာ နှိုးလို့မရတော့ဘူးတဲ့။",
        "အသက်ရှူနေတယ်။ ဒါပေမယ့် မနိုးဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Come to Me If You Hear Anything", l: "အဆောင်", w: ["မခင်စန်း"],
    g: "“တစ်ခုခုကြားရင် ကျွန်မဆီ လာခဲ့။ တစ်ယောက်တည်း ထိုင်စဉ်းစားမနေနဲ့။”",
    p: "A nurse speaking directly to a young man, both hands on his shoulders briefly, ward behind "
      + "them.",
    u: ["“အိပ်ရေးပျက်လို့လား၊ နဂိုရောဂါရှိလို့လား၊ ကျွန်မ မပြောတတ်ဘူး။ ဒါပေမယ့် မင်း ပြောတဲ့ပုံစံနဲ့ တူနေလို့။”",
        "ကျွန်တော် အမေ့ကုတင်အောက်ကို ပြန်ကြည့်မိတယ်။",
        "မခင်စန်းက ပြောတယ်။ “တစ်ခုခုကြားရင် ကျွန်မဆီ လာခဲ့။ တစ်ယောက်တည်း ထိုင်စဉ်းစားမနေနဲ့။”"] },

  { t: "I Did Not Unroll the Mat", l: "အဆောင်", w: ["မင်းသူ", "အမေ"],
    g: "အဲဒီညမှာ ဖျာမခင်းတော့ဘူး။ ထိုင်ခုံပေါ်မှာပဲ ထိုင်ပြီး အမေ့လက်ကို ကိုင်ထားတယ်။",
    p: "A young man on a stool holding his sleeping mother's hand, a rolled mat propped against the "
      + "wall behind him.",
    u: ["အဲဒီညမှာ ကျွန်တော် ဖျာမခင်းတော့ဘူး။",
        "ထိုင်ခုံပေါ်မှာပဲ ထိုင်နေတယ်။ အမေ့လက်ကို ကိုင်ထားတယ်။"] },

  { t: "I Know You're Tired", l: "အဆောင်", w: ["အမေ"],
    g: "ညနှစ်နာရီကျော်မှာ အမေ ခဏနိုးတယ်။ “သား ပင်ပန်းနေတာ အမေသိပါတယ်။”",
    p: "A mother's eyes opening and finding her son still awake, her brow creasing.",
    u: ["ညနှစ်နာရီကျော်လောက်မှာ အမေ ခဏနိုးတယ်။ ကျွန်တော့်ကို မြင်တော့ မျက်ခုံးကျုံ့တယ်။",
        "“မအိပ်သေးဘူးလား။” “မအိပ်ချင်သေးလို့။”",
        "အမေ ကျွန်တော့်လက်ကို ဆုပ်လိုက်တယ်။ “သား ပင်ပန်းနေတာ အမေသိပါတယ်။”"] },

  { t: "Her Hand Went Slack", l: "အဆောင်",
    g: "အမေ ပြန်အိပ်ပျော်သွားတယ်။ ကျွန်တော့်လက်ထဲက သူ့လက်က ဖြည်းဖြည်း လျော့သွားတယ်။",
    p: "Close on two hands, the older one relaxing open inside the younger one's grip.",
    u: ["ကျွန်တော် ဘာမှမပြောဘူး။ အမေ ပြန်အိပ်ပျော်သွားတယ်။",
        "ကျွန်တော့်လက်ထဲမှာ ကိုင်ထားတဲ့ သူ့လက်က ဖြည်းဖြည်း လျော့သွားတယ်။"] },

  { t: "I Know That Too", l: "ကုတင်အောက်",
    g: "ကုတင်အောက်ကနေ အသံ — “ပင်ပန်းတာကို… ငါလည်း သိပါတယ်ကွာ။”",
    p: "The dark floor under the bed with nothing visible in it, the frame held while a voice "
      + "happens.",
    u: ["အဲဒီအချိန် ကုတင်အောက်ကနေ အသံတစ်သံ ထွက်လာတယ်။",
        "“ပင်ပန်းတာကို…” အဖိုးကြီးအသံ။ “ငါလည်း သိပါတယ်ကွာ။”"],
    c: [[1, "bigstinger"]] },

  { t: "How Long Can You Stay Awake", l: "အဆောင်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အောက်ကို မကြည့်ဘူး။ မျက်နှာက ပူလာတယ်။ နောက်ကျောမှာ ချွေးစေးတွေ ထွက်လာတယ်။",
    p: "Close on a young man's face staring rigidly straight ahead, sweat at his hairline, "
      + "deliberately not looking down.",
    u: ["ကျွန်တော် အောက်ကို မကြည့်ဘူး။",
        "မျက်နှာက ပူလာတယ်။ နောက်ကျောမှာ ချွေးစေးတွေ ထွက်လာတယ်။",
        "အသံက ဆက်ပြောတယ်။ “နင် ဘယ်လောက်ကြာကြာ နိုးနေနိုင်မှာလဲ။”"],
    c: [[2, "bigstinger"]] },

  { t: "The Third Day", l: "အဆောင်", w: ["အမေ", "မင်းသူ"],
    g: "သုံးရက်မြောက်နေ့မှာ အမေ အတော်သက်သာလာပြီ။ ကျွန်တော်ကတော့ ဇွန်းကို ဘယ်အချိန်ချလိုက်မိလဲ မသိတော့ဘူး။",
    p: "A young man asleep sitting upright with a spoon fallen from his hand onto a tray, his mother "
      + "watching him from the bed.",
    u: ["သုံးရက်မြောက်နေ့မှာ အမေ အတော်သက်သာလာပြီ။",
        "ကျွန်တော်ကတော့ ထမင်းစားရင်းတောင် ဘယ်အချိန် ဇွန်းကို ချလိုက်မိသလဲ မသိတော့ဘူး။",
        "ခုံပေါ်ထိုင်နေရင်း ခေါင်းငိုက်ကျသွားတယ်။ အမေက “သား” လို့ ခေါ်မှ ပြန်နိုးတယ်။"] },

  { t: "I Heard It Every Time I Closed My Eyes", l: "အဆောင်",
    g: "မျက်လုံးမှိတ်မိတဲ့အချိန်တိုင်း ဖျာဖြန့်သံကို ကြားနေသလိုပဲ။",
    p: "Close on closed eyelids, twitching, the ward's light moving across the face.",
    u: ["မျက်လုံးမှိတ်မိတဲ့အချိန်တိုင်း ဖျာဖြန့်သံကို ကြားနေသလိုပဲ။"],
    c: [[0, "stinger"]] },

  { t: "My Own Face in the Mirror", l: "ရေဆေးခန်း", w: ["မင်းသူ"],
    g: "မှန်အဟောင်းထဲမှာ ကိုယ့်မျက်နှာကို ကြည့်လိုက်တော့ အဖိုးကြီးရဲ့ မျက်လုံးတွေကို သတိရသွားတယ်။",
    p: "⚠️ THE EXHAUSTED FACE, SECOND OF THREE — a young man's reflection in a cracked washroom mirror: "
      + "black under the eyes, swollen lids, red whites. Frame it exactly as the old man's was.",
    u: ["ရေဆေးတဲ့နေရာသွားပြီး မျက်နှာသစ်တယ်။",
        "မှန်အဟောင်းထဲမှာ ကိုယ့်မျက်နှာကို ကြည့်လိုက်တော့ အဖိုးကြီးရဲ့ မျက်လုံးတွေကို သတိရသွားတယ်။",
        "အိပ်ချင်လွန်းလို့ မျက်ခွံတွေတောင် နာနေတဲ့မျက်လုံးတွေ။"],
    c: [[2, "bigstinger"]] },

  { t: "I Decided to Ask for Help", l: "အဆောင်", w: ["မင်းသူ"],
    g: "အဲဒီည မခင်စန်းကို ခဏထိုင်ပေးဖို့ အကူအညီတောင်းမယ်လို့ ဆုံးဖြတ်ခဲ့တယ်။ တစ်နာရီလောက်ပဲဖြစ်ဖြစ်။",
    p: "A young man standing at the end of a ward looking toward the nurses' table, working up to "
      + "something.",
    u: ["အဲဒီည မခင်စန်းကို အမေ့ကုတင်နား ခဏထိုင်ပေးဖို့ အကူအညီတောင်းမယ်လို့ ဆုံးဖြတ်ခဲ့တယ်။",
        "တစ်နာရီလောက်ပဲဖြစ်ဖြစ် အိပ်ရမှ ဖြစ်တော့မယ်။"] },

  { t: "But the Ward Was Full", l: "အဆောင်", w: ["မခင်စန်း"],
    g: "ညရောက်တော့ လူနာအသစ်တွေ ဝင်လာတယ်။ သူနာပြုတွေ သွားလိုက်လာလိုက်။ တွန်းလှည်းတွေ ဖြတ်သွားတယ်။",
    p: "A busy ward at night: two trolleys in the aisle, nurses moving fast, families being asked to "
      + "shift their mats.",
    u: ["ဒါပေမယ့် ညရောက်တော့ အဆောင်ထဲ လူနာအသစ်တွေ ဝင်လာတယ်။",
        "သူနာပြုတွေ သွားလိုက်လာလိုက် ဖြစ်နေကြတယ်။ တွန်းလှည်းတွေ ဖြတ်သွားတယ်။",
        "လူနာစောင့်တွေကို နေရာဖယ်ခိုင်းသံ၊ နာမည်မေးသံ၊ ရုံးခန်းကို စာရွက်ယူသွားခိုင်းသံတွေ ကြားနေရတယ်။"] },

  { t: "I Could Not Ask", l: "အဆောင်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အိပ်ချင်လို့ပါလို့ မပြောရက်တော့ဘူး။ ခဏစောင့်ဦးမယ်လို့ တွေးခဲ့တယ်။",
    p: "A young man standing near a busy nurses' table with his mouth half open, then turning away.",
    u: ["ကျွန်တော် မခင်စန်းနားကို သွားပြီး အိပ်ချင်လို့ပါလို့ မပြောရက်တော့ဘူး။",
        "ခဏစောင့်ဦးမယ်လို့ တွေးခဲ့တယ်။",
        "အဲဒီ “ခဏ” က ကျွန်တော် စောင့်နိုင်တဲ့ နောက်ဆုံးအချိန် ဖြစ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Pinching My Own Arm", l: "အဆောင်", w: ["မင်းသူ"],
    g: "မျက်လုံးတွေက ကိုယ့်အလိုလို ပိတ်ပိတ်ကျလာတယ်။ လက်မောင်းကို ကိုယ့်ဘာသာ ဆိတ်တယ်။ မနိုးနိုင်တော့ဘူး။",
    p: "A young man's fingers pinching hard at the skin of his own forearm, leaving marks, his eyes "
      + "half closed anyway.",
    u: ["အမေက ညဆယ့်တစ်နာရီလောက် အိပ်ပျော်သွားတယ်။ ကျွန်တော် သူ့ဘေးမှာ ထိုင်နေတယ်။",
        "မျက်လုံးတွေက ကိုယ့်အလိုလို ပိတ်ပိတ်ကျလာတယ်။",
        "လက်မောင်းကို ကိုယ့်ဘာသာ ဆိတ်တယ်။ မနိုးနိုင်တော့ဘူး။"],
    c: [[2, "heartbeat"]] },

  { t: "Her Hand Slipped Off the Bed", l: "အဆောင်", w: ["အမေ"],
    g: "အမေ့လက်တစ်ဖက်က ကုတင်ဘေးကို လျှောကျလာတယ်။ လက်ချောင်းတွေက သံတန်းအပြင်ကို တွဲလောင်းကျနေတယ်။",
    p: "A sleeping woman's hand hanging over the side rail of a hospital bed, fingers loose, pointing "
      + "down toward the floor.",
    u: ["အဲဒီအချိန်မှာ အမေ့လက်တစ်ဖက်က ကုတင်ဘေးကို လျှောကျလာတယ်။ သူ အိပ်ပျော်နေရင်း လှည့်လိုက်လို့။",
        "လက်ချောင်းတွေက သံတန်းအပြင်ကို တွဲလောင်းကျနေတယ်။"] },

  { t: "Another Hand Came Up", l: "ကုတင်အောက်",
    g: "ကျွန်တော် စောင်အောက် ပြန်ထည့်ပေးဖို့ လက်လှမ်းလိုက်တယ်။ အောက်ကနေ နောက်လက်တစ်ဖက် တက်လာတယ်။",
    p: "A thin pale hand rising from beneath a bed toward a hanging hand above it, the two nearly "
      + "meeting, a third hand entering frame to stop it.",
    u: ["ကျွန်တော် စောင်အောက် ပြန်ထည့်ပေးဖို့ လက်လှမ်းလိုက်တယ်။",
        "အောက်ကနေ နောက်လက်တစ်ဖက် တက်လာတယ်။ ပိန်ပိန်ဖြူဖြူ လက်တစ်ဖက်။",
        "အမေ့လက်ကို ခံဖို့။"],
    c: [[2, "bigstinger"]] },

  { t: "He Was Sitting Almost Upright", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "အဖိုးကြီးက ကုတင်အောက်မှာ မတ်တတ်နီးပါး ထိုင်နေတယ်။ အဲဒီနေရာမှာ ဒီလိုထိုင်လို့မရဘူး။",
    p: "An old man sitting nearly upright beneath a hospital bed in a space plainly too shallow for "
      + "it, his head slightly tilted, no bed frame apparently touching him.",
    u: ["ကျွန်တော် ချက်ချင်း အောက်ကို ကြည့်လိုက်တယ်။",
        "အဖိုးကြီးက ကုတင်အောက်မှာ မတ်တတ်နီးပါး ထိုင်နေတယ်။",
        "အဲဒီနေရာမှာ လူတစ်ယောက် ဒီလိုထိုင်လို့မရဘူး။ သံစင်အောက်က နေရာက ခါးတောင်ဆန့်လို့မရဘူး။",
        "ဒါပေမယ့် သူက ထိုင်နေတာ။ ခေါင်းကို နည်းနည်းစောင်းထားတယ်။"],
    c: [[3, "bigstinger"]] },

  { rev: ["direction fixed"], t: "The Dark Behind Him", l: "ကုတင်အောက်",
    g: "⚠️ သူ့နောက်က အမှောင်က ကုတင်တစ်လုံးအောက်စာ မဟုတ်ဘူး။ သံကုတင်ခြေတွေ တစ်တန်းပြီးတစ်တန်း။",
    p: "⚠️ THE DEEP SHOT — the only one. Beyond the old man the dark under the bed continues far past "
      + "any possible wall, rows of iron bed legs receding into it in perfect lines, further than the "
      + "ward is long. Everywhere else in the film this space is an ordinary shallow floor.",
    u: ["သူ့အပေါ်မှာ ကုတင်မရှိသလိုပဲ။",
        "သူ့နောက်ဘက်က အမှောင်ကလည်း ကုတင်တစ်လုံးအောက်စာ မဟုတ်ဘူး။ အရမ်းနက်တယ်။",
        "အဲဒီအမှောင်ထဲမှာ သံကုတင်ခြေတွေ တန်းနေတယ်။ တစ်တန်းပြီးတစ်တန်း။",
        "ကျွန်တော်တို့အဆောင်ထက် အများကြီး ပိုရှည်တဲ့နေရာတစ်ခုလို။"],
    c: [[2, "bigstinger"]] },

  { t: "Don't Touch My Mother", l: "ကုတင်အောက်", w: ["အဖိုးကြီး", "မင်းသူ"],
    g: "အဖိုးကြီးက ကျွန်တော့်ကို မကြည့်ဘူး။ အမေ့လက်ကိုပဲ ကြည့်နေတယ်။",
    p: "The old man's face turned entirely toward the hanging hand above him, not toward the camera "
      + "at all.",
    u: ["အဖိုးကြီးက ကျွန်တော့်ကို မကြည့်ဘူး။ အမေ့လက်ကိုပဲ ကြည့်နေတယ်။",
        "“အမေ့ကို မထိနဲ့။” ကျွန်တော့်အသံက အရမ်းတိုးနေတယ်။",
        "သူ့လက်က ဆက်တက်လာတယ်။ အမေ့လက်ချောင်းတွေနဲ့ ထိခါနီးနေပြီ။"],
    c: [[2, "bigstinger"]] },

  { t: "I Grabbed His Wrist", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အမေ့လက်ကို ကုတင်ပေါ် ပြန်တွန်းတင်ပြီး သူ့လက်ကောက်ဝတ်ကို ဖမ်းလိုက်တယ်။",
    p: "A young hand closed hard around an old thin wrist beneath a bed, both arms taut.",
    u: ["ကျွန်တော် အမေ့လက်ကို ကုတင်ပေါ် ပြန်တွန်းတင်လိုက်ပြီး သူ့လက်ကောက်ဝတ်ကို ဖမ်းလိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "The Heat Went Out of My Hand", l: "ကုတင်အောက်",
    g: "အရမ်းအေးတယ်။ ရေခဲလို မဟုတ်ဘူး။ လက်ထဲက အပူက သူ့ဆီကို ထွက်သွားတာ။",
    p: "Extreme close-up of the two joined wrists, condensation forming on the younger skin where it "
      + "touches, the flesh around it going white.",
    u: ["အရမ်းအေးတယ်။ ရေခဲလို မဟုတ်ဘူး။",
        "အေးတဲ့အရာကို ကိုင်လိုက်ရင် လက်ထဲမှာ ခံစားရတယ်။",
        "ဒီတစ်ခါတော့ လက်ထဲက အပူက သူ့ဆီကို ထွက်သွားတာ။"],
    c: [[2, "bigstinger"]] },

  { t: "He Would Not Let Go", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "ကျွန်တော် လွှတ်ဖို့ လုပ်လိုက်တယ်။ သူက ကျွန်တော့်လက်ကို ပြန်ဆုပ်လိုက်ပြီ။",
    p: "The grip reversed — the old hand now closed around the young wrist, the young fingers "
      + "splayed open trying to pull back.",
    u: ["ကျွန်တော် လွှတ်ဖို့ လုပ်လိုက်တယ်။",
        "သူက ကျွန်တော့်လက်ကို ပြန်ဆုပ်လိုက်ပြီ။"],
    c: [[1, "bigstinger"]] },

  { t: "He Was Crying", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "အဖိုးကြီးရဲ့ မျက်နှာ ပြောင်းသွားတယ်။ ပြုံးတာ မဟုတ်ဘူး။ မျက်လုံးတွေထဲမှာ မျက်ရည်တွေ ပေါ်လာတယ်။",
    p: "The old man's face under the bed with tears standing in his eyes and his lower lip "
      + "trembling — grief, not menace.",
    u: ["အဖိုးကြီးရဲ့ မျက်နှာ ပြောင်းသွားတယ်။ ပြုံးတာ မဟုတ်ဘူး။",
        "မျက်လုံးတွေထဲမှာ မျက်ရည်တွေ ပေါ်လာတယ်။ သူ့နှုတ်ခမ်း တုန်နေတယ်။",
        "“ခွင့်လွှတ်ပါကွာ…”"],
    c: [[2, "bigstinger"]] },

  { t: "I Could Not Wait Any Longer", l: "ကုတင်အောက်", w: ["အဖိုးကြီး"],
    g: "ကျွန်တော် နားမလည်ဘူး။ လက်ကို ဆွဲထုတ်တယ်။ မရဘူး။ “ငါ မစောင့်နိုင်တော့လို့ပါ။”",
    p: "Close on the old man speaking very quietly, his grip unbroken, his face wet.",
    u: ["ကျွန်တော် နားမလည်ဘူး။ လက်ကို ဆွဲထုတ်တယ်။ မရဘူး။",
        "သူကတော့ အရမ်းတိုးတိုးလေး ထပ်ပြောတယ်။",
        "“ငါ မစောင့်နိုင်တော့လို့ပါ။”"],
    c: [[2, "bigstinger"]] },

  { rev: ["continuity fixed"], t: "My Head Touched the Floor", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော့်ခေါင်းက ကြမ်းပြင်နဲ့ ထိသွားတယ်။ ထိတဲ့အသံကို မကြားရဘူး။",
    p: "A young man's cheek against terrazzo beneath a bed, seen at floor level, the ward beyond "
      + "receding out of focus.",
    u: ["ကျွန်တော့်ခေါင်းက ကြမ်းပြင်နဲ့ ထိသွားတယ်။ ထိတဲ့အသံကို မကြားရဘူး။",
        "အဆောင်ထဲက အသံတွေက ရုတ်တရက် အဝေးကြီးရောက်သွားတယ်။ ရေထဲ နစ်သွားသလို။"],
    c: [[1, "bigstinger"]] },

  { t: "She Called and I Answered", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "အပေါ်က အမေ့အသံ — “သား။” ကျွန်တော် ပြန်ဖြေတယ်။ အသံမထွက်ဘူး။",
    p: "From under the bed: the underside of the mattress above, a voice coming from beyond it, the "
      + "young man's mouth moving with no sound.",
    u: ["အပေါ်က အမေ့အသံကို ကြားရတယ်။ “သား။” ကျွန်တော် ပြန်ဖြေတယ်။ “အမေ။”",
        "အသံမထွက်ဘူး။",
        "အမေ ထပ်ခေါ်တယ်။ ဒီတစ်ခါ ပိုကျယ်တယ်။ “မင်းသူ။”"],
    c: [[1, "bigstinger"]] },

  { rev: ["direction fixed"], t: "Bed Legs in Every Direction", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ထဖို့ ကြိုးစားတယ်။ ခေါင်းက သံစင်နဲ့ ထိနေတယ်။ ဘေးကို ရွှေ့တယ် — ကုတင်ခြေတွေ။ ရှေ့ကို တိုးတယ် — နောက်ထပ် ကုတင်ခြေတွေ။",
    p: "A trapped point of view beneath a bed: iron legs in every direction, the underside of the "
      + "frame pressing close overhead.",
    u: ["ကျွန်တော် ထဖို့ ကြိုးစားတယ်။ ခေါင်းက အပေါ်က သံစင်နဲ့ ထိနေတယ်။",
        "ဘေးကို ရွှေ့တယ်။ ကုတင်ခြေတွေ။",
        "ရှေ့ကို တိုးတယ်။ နောက်ထပ် ကုတင်ခြေတွေ။"],
    c: [[2, "heartbeat"]] },

  { t: "Shoes Running", l: "ကုတင်အောက်", w: ["မခင်စန်း"],
    g: "အပေါ်မှာ လူတွေ ပြေးလာကြတယ်။ ဖိနပ်တွေကို မြင်ရတယ်။ မခင်စန်းရဲ့ ဖိနပ်ဖြူ။",
    p: "Floor level: several pairs of feet converging fast on the bed, one pair white nurse's shoes "
      + "among them.",
    u: ["အပေါ်မှာ လူတွေ ပြေးလာကြတယ်။ ဖိနပ်တွေကို မြင်ရတယ်။",
        "မခင်စန်းရဲ့ ဖိနပ်ဖြူ။ တခြားလူတွေရဲ့ ဖိနပ်တွေ။"] },

  { rev: ["direction fixed"], t: "I Could Not Reach Her Ankle", l: "ကုတင်အောက်", w: ["အမေ", "မင်းသူ"],
    g: "အမေ့ခြေထောက်တွေက ကုတင်ပေါ်ကနေ ဆင်းလာတယ်။ ကျွန်တော် လှမ်းဖမ်းဖို့ ကြိုးစားတယ်။ မမှီဘူး။",
    p: "A hand stretched across a floor toward a pair of bare feet that are barely two feet away, "
      + "the distance visibly uncrossable.",
    u: ["အမေ့ခြေထောက်တွေက ကုတင်ပေါ်ကနေ ဆင်းလာတယ်။",
        "ကျွန်တော် သူ့ခြေကျင်းဝတ်ကို လှမ်းဖမ်းဖို့ ကြိုးစားတယ်။ မမှီဘူး။",
        "လက်တစ်လံတောင် မဝေးဘူး။ ဒါပေမယ့် ဘယ်လောက်လှမ်းလှမ်း မမှီဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Mother, I'm Here", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အမေ့ကို လှမ်းအော်တယ်။ “အမေ၊ ကျွန်တော် ဒီမှာ။” သူ မကြားဘူး။",
    p: "A young man shouting from the floor beneath a bed with everything he has, the feet above him "
      + "not pausing at all.",
    u: ["အပေါ်မှာ မခင်စန်းက ပြောတယ်။ “အန်တီ၊ နည်းနည်းဖယ်ပေးပါ။”",
        "ကျွန်တော် အမေ့ကို လှမ်းအော်တယ်။ “အမေ၊ ကျွန်တော် ဒီမှာ။”",
        "သူ မကြားဘူး။"],
    c: [[2, "bigstinger"]] },

  { rev: ["continuity fixed"], t: "They Lifted Someone", l: "ကုတင်အောက်",
    g: "လူနှစ်ယောက်က ကြမ်းပြင်ပေါ်က တစ်ယောက်ကို ဆွဲမလိုက်ကြတယ်။ လက်တစ်ဖက် တွဲလောင်းကျလာတယ်။",
    p: "From floor level: two people lifting a limp body up off the floor beside the bed, one arm "
      + "swinging down into frame.",
    u: ["ပြီးတော့ လူနှစ်ယောက်က ကြမ်းပြင်ပေါ်က တစ်ယောက်ကို ဆွဲမလိုက်ကြတယ်။",
        "လက်တစ်ဖက် တွဲလောင်းကျလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { rev: ["continuity fixed"], t: "The Chipped Watch", l: "ကုတင်အောက်",
    g: "လက်ကောက်ဝတ်မှာ နာရီနက်နက်တစ်လုံး။ မှန်ထောင့်က နည်းနည်းပဲ့နေတယ်။ ကျွန်တော့်နာရီ။",
    p: "Extreme close-up of a dark wristwatch on a hanging wrist, a small chip missing from one "
      + "corner of the glass.",
    u: ["လက်ကောက်ဝတ်မှာ နာရီနက်နက်တစ်လုံး။ မှန်ထောင့်က နည်းနည်းပဲ့နေတယ်။",
        "ကျွန်တော့်နာရီ။"],
    c: [[1, "bigstinger"]] },

  { rev: ["continuity fixed"], t: "It Was Me", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "လူတွေကြားကနေ အဲဒီလူရဲ့ မျက်နှာကို မြင်လိုက်ရတယ်။ မျက်လုံးပိတ်ထားတယ်။ ကျွန်တော်။",
    p: "Between moving legs: the face of the man being lifted, eyes closed, mouth slightly open — "
      + "the narrator's own face.",
    u: ["ကျွန်တော် အသက်ရှူဖို့ မေ့သွားတယ်။",
        "လူတွေကြားကနေ အဲဒီလူရဲ့ မျက်နှာကို မြင်လိုက်ရတယ်။",
        "မျက်လုံးတွေ ပိတ်ထားတယ်။ ပါးစပ်က နည်းနည်းဟနေတယ်။ ကျွန်တော်။"],
    c: [[2, "bigstinger"]] },

  { rev: ["continuity fixed"], t: "She Followed Them Out", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "သူတို့ သယ်သွားတဲ့လူက ကျွန်တော်ပဲ။ အမေက နောက်ကနေ လိုက်သွားတယ်။",
    p: "Floor level: a group of feet moving away down the ward aisle, and one pair of slower feet "
      + "following them, everything else still.",
    u: ["သူတို့ သယ်သွားတဲ့လူက ကျွန်တော်ပဲ။",
        "အမေက နောက်ကနေ လိုက်သွားတယ်။ ကျွန်တော့်နာမည်ကို တစ်ခါပြီးတစ်ခါ ခေါ်ရင်းနဲ့။",
        "ကျွန်တော်ကတော့ သူတို့ခြေထောက်တွေအောက်မှာ ကျန်နေခဲ့တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Curtain Moved", l: "အဆောင်",
    g: "အဲဒီအချိန်မှာ အခန်းထောင့်ဘက်က ပိတ်စကာ ရွေ့သွားတယ်။",
    p: "The green curtain around the corner bed sliding back a little on its rail, seen from floor "
      + "level down the length of the ward.",
    u: ["အဲဒီအချိန်မှာ အခန်းထောင့်ဘက်က ပိတ်စကာ ရွေ့သွားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Someone Sat Up", l: "အဆောင်", w: ["အဖိုးကြီး"],
    g: "လူတစ်ယောက် ကုတင်ပေါ်မှာ ထိုင်လာတယ်။ အကြာကြီး အိပ်နေရာက နိုးလာတဲ့သူတစ်ယောက်လို။",
    p: "A man sitting slowly up in the corner bed — the movement of someone waking from a very long "
      + "sleep, not of someone straining.",
    u: ["လူတစ်ယောက် ကုတင်ပေါ်မှာ ထိုင်လာတယ်။ ဖြည်းဖြည်း။",
        "မအိပ်ဖူးသလို အားယူပြီး ထိုင်လာတာ မဟုတ်ဘူး။ အကြာကြီး အိပ်နေရာက နိုးလာတဲ့သူတစ်ယောက်လို။"],
    c: [[1, "bigstinger"]] },

  { t: "The Face I Knew", l: "အဆောင်", w: ["အဖိုးကြီး"],
    g: "အဖြူရောင်စွပ်ကျယ်။ အညိုရောင်ပုဆိုး။ ကျွန်တော် သိတဲ့မျက်နှာ။ အဖိုးကြီး။",
    p: "The old man sitting on the corner bed in the same white singlet and brown longyi, but his "
      + "face is different now — the exhaustion gone out of it.",
    u: ["အဖြူရောင်စွပ်ကျယ်။ အညိုရောင်ပုဆိုး။",
        "ကျွန်တော် သိတဲ့မျက်နှာ။ အဖိုးကြီး။"],
    c: [[1, "bigstinger"]] },

  { t: "He Looked at His Own Hands", l: "အဆောင်", w: ["အဖိုးကြီး"],
    g: "သူ့လက်နှစ်ဖက်ကို အကြာကြီး ကြည့်နေတယ်။ လက်ချောင်းတွေကို တစ်ချောင်းချင်း ကွေးတယ်၊ ဆန့်တယ်။",
    p: "An old man flexing his own fingers one at a time and watching them, then touching his own "
      + "face with his palm — testing that it is his.",
    u: ["သူ့လက်နှစ်ဖက်ကို သူ အကြာကြီး ကြည့်နေတယ်။",
        "လက်ချောင်းတွေကို တစ်ချောင်းချင်း ကွေးတယ်။ ဆန့်တယ်။",
        "ပြီးတော့ သူ့မျက်နှာကို သူ့လက်နဲ့ ထိကြည့်တယ်။ ငိုနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { rev: ["geography fixed"], t: "He Saw Me", l: "ကုတင်အောက်", w: ["အဖိုးကြီး", "မင်းသူ"],
    g: "အဲဒီနောက်မှ ကုတင်အောက်ကို ငုံ့ကြည့်တယ်။ ကျွန်တော့်ကို မြင်တယ်။ သေချာသိတယ်။",
    p: "An old man leaning down from a bed to look under it, his eyes finding the camera exactly — "
      + "unmistakably seeing.",
    u: ["အဲဒီနောက်မှ ကုတင်အောက်ကို ငုံ့ကြည့်တယ်။ ကျွန်တော့်ကို မြင်တယ်။",
        "သူ မြင်တယ်ဆိုတာ ကျွန်တော် သေချာသိတယ်။",
        "ကျွန်တော် သူ့ဆီ လက်လှမ်းလိုက်တယ်။ “အဖိုး။”"],
    c: [[2, "bigstinger"]] },

  { rev: ["geography fixed"], t: "He Pulled the Blanket Down", l: "အဆောင်", w: ["အဖိုးကြီး"],
    g: "သူ ခေါင်းခါတယ်။ နောက်ကို ဆုတ်တယ်။ ပြီးတော့ စောင်အစွန်းကို ဆွဲချလိုက်တယ်။",
    p: "Seen from the floor along the length of the ward: the old man lies back on the distant "
      + "green-curtained corner bed and draws the curtain closed around it, shutting himself off "
      + "from view. The long run of iron bed legs between the camera and the curtain stays visible.",
    u: ["သူ ခေါင်းခါတယ်။ နောက်ကို ဆုတ်တယ်။",
        "ပြီးတော့ သူ့ကုတင်က အစိမ်းရောင်ပိတ်စကာကို ဆွဲပိတ်လိုက်တယ်။ ကျွန်တော်နဲ့ သူ့ကြားကို ဖုံးသွားအောင်။",
        "ကျွန်တော့်ကို မမြင်ချင်တော့လို့။",
        "ဒါမှမဟုတ် ကျွန်တော် လက်လှမ်းနေတာကို ထပ်ပြီး မကြည့်ရဲတော့လို့။"],
    c: [[3, "bigstinger"]] },

  { rev: ["continuity fixed"], t: "I Cannot Count the Days", l: "ကုတင်အောက်",
    g: "ဘယ်နှရက်ကြာသွားပြီလဲ မသိတော့ဘူး။ မနက်နဲ့ညကိုတော့ ခွဲလို့ရတယ်။",
    p: "A band of daylight from a tall window crossing a terrazzo floor beneath a bed, moving.",
    u: ["ဘယ်နှရက်ကြာသွားပြီလဲဆိုတာ အခု ကျွန်တော် မသိတော့ဘူး။",
        "မနက်နဲ့ညကိုတော့ ခွဲလို့ရတယ်။",
        "နေ့ခင်းဆို ပြတင်းပေါက်တွေက ဝင်လာတဲ့အလင်းက ကြမ်းပြင်ပေါ်မှာ ရွေ့နေတယ်။"] },

  { t: "At Night the Mats Come Out", l: "ကုတင်အောက်",
    g: "ညဆို လူနာစောင့်တွေရဲ့ ဖျာတွေ ဖြန့်လာကြတယ်။ ဖုန်းမီးလေးတွေ ပိတ်သွားကြတယ်။",
    p: "Floor level along a ward at night: mats unrolling, cloth bags becoming pillows, phone screens "
      + "going dark one by one.",
    u: ["ညဆို လူနာစောင့်တွေရဲ့ ဖျာတွေ ဖြန့်လာကြတယ်။",
        "အဝတ်အိတ်တွေကို ခေါင်းအုံးလုပ်ကြတယ်။ ဖုန်းမီးလေးတွေ ပိတ်သွားကြတယ်။"] },

  { t: "I Can Close My Eyes", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အိပ်လို့မရဘူး။ မျက်လုံးမှိတ်လို့ရတယ်။ ဒါပေမယ့် မအိပ်ပျော်ဘူး။",
    p: "A man's face on a floor with his eyes closed, but everything in the composition making it "
      + "clear he is entirely awake.",
    u: ["ကျွန်တော် အိပ်လို့မရဘူး။",
        "မျက်လုံးမှိတ်လို့ရတယ်။ ဒါပေမယ့် မအိပ်ပျော်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Every Sound, Forever", l: "ကုတင်အောက်",
    g: "အပေါ်က အသံအားလုံးကို ကြားနေရတယ်။ ချောင်းဆိုးသံ။ ဖိနပ်သံ။ တွန်းလှည်းဘီးသံ။ တစ်စက္ကန့်မှ မရပ်ဘူး။",
    p: "A ward at night from floor level, everything in it in motion at once — feet, a trolley wheel, "
      + "a curtain — a composition about noise that will not stop.",
    u: ["အပေါ်က အသံအားလုံးကို ကြားနေရတယ်။",
        "ချောင်းဆိုးသံ။ ဖိနပ်သံ။ တွန်းလှည်းဘီးသံ။ နာမည်ခေါ်သံ။",
        "အရာအားလုံး။ တစ်စက္ကန့်မှ မရပ်ဘူး။"],
    c: [[2, "heartbeat"]] },

  { t: "Nobody Ever Looked Down", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "အစပိုင်းမှာ အော်ခဲ့တယ်။ သံစင်ကို ထုခဲ့တယ်။ လူတွေက ကျွန်တော့်လက်ကို ဖြတ်ပြီး လျှောက်သွားကြတယ်။",
    p: "A hand lying open on a floor beside a bed leg while several pairs of feet step over and "
      + "around it without pausing.",
    u: ["အစပိုင်းမှာ ကျွန်တော် အော်ခဲ့တယ်။ ကုတင်အောက်က သံစင်ကို ထုခဲ့တယ်။ လူတွေလာတိုင်း လက်လှမ်းခဲ့တယ်။",
        "သူတို့က ကြမ်းခင်းနားက ကျွန်တော့်လက်ကို ဖြတ်ပြီး လျှောက်သွားကြတယ်။ ဘယ်သူမှ မငုံ့ကြည့်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { rev: ["geography fixed"], t: "The Me They Know Is on the Bed", l: "အဆောင်", w: ["မင်းသူ"],
    g: "ကျွန်တော့်ကို အိပ်နေတဲ့သူလို့ပဲ သိကြတယ်။ သူတို့ပြောတဲ့ ကျွန်တော်က ကုတင်ပေါ်မှာ ရှိတယ်။",
    p: "A young man lying unconscious in a hospital bed with a drip, seen from the floor below and "
      + "beside — his own body from the outside.",
    u: ["ကျွန်တော့်ကို အိပ်နေတဲ့သူလို့ပဲ သိကြတယ်။",
        "သူတို့ပြောတဲ့ ကျွန်တော်က ကုတင်ပေါ်မှာ ရှိတယ်။",
        "ကျွန်တော် သိတဲ့ကျွန်တော်ကတော့ အဲဒီကုတင်အောက်မှာပဲ။"],
    c: [[2, "bigstinger"]] },

  { t: "She Got Better", l: "အဆောင်", w: ["အမေ"],
    g: "အမေ နေကောင်းသွားပြီ။ ဒါပေမယ့် အိမ်မပြန်ဘူး။ ကျွန်တော့်ကို စောင့်နေတယ်။",
    p: "A woman out of her hospital gown and in ordinary clothes, sitting on a plastic stool beside a "
      + "bed — no longer the patient.",
    u: ["အမေ နေကောင်းသွားပြီ။ ဒါကို အပေါ်က စကားပြောသံတွေကနေ သိရတယ်။",
        "ဒါပေမယ့် အမေ အိမ်မပြန်ဘူး။ ကျွန်တော့်ကို စောင့်နေတယ်။"] },

  { t: "On the Same Plastic Stool", l: "အဆောင်", w: ["အမေ"],
    g: "အရင်က ကျွန်တော်ထိုင်ခဲ့တဲ့ ပလတ်စတစ်ခုံမျိုးတစ်လုံးပေါ်မှာ ထိုင်နေတယ်။ အဝတ်အိတ်ကို ခြေထောက်နား ထားတယ်။",
    p: "The same kind of plastic stool as the narrator used, the same cloth bag at its feet, a "
      + "different person on it now.",
    u: ["အရင်က ကျွန်တော်ထိုင်ခဲ့တဲ့ ပလတ်စတစ်ခုံမျိုးတစ်လုံးပေါ်မှာ ထိုင်နေတယ်။",
        "ကျွန်တော့်အဝတ်အိတ်ကို သူ့ခြေထောက်နား ထားတယ်။"],
    c: [[1, "stinger"]] },

  { t: "She Talks About Home", l: "အဆောင်", w: ["အမေ"],
    g: "နေ့ခင်းဆို ကျွန်တော့်လက်ကို ကိုင်ပြီး အိမ်အကြောင်း ပြောတယ်။",
    p: "A woman holding an unconscious young man's hand and talking to him, daylight, entirely "
      + "ordinary and entirely sad.",
    u: ["မနက်ဆို ကျွန်တော့်မျက်နှာကို သုတ်ပေးတယ်။",
        "နေ့ခင်းဆို ကျွန်တော့်လက်ကို ကိုင်ပြီး အိမ်အကြောင်း ပြောတယ်။",
        "“အိမ်ရှေ့က ကြောင်လေးကို အိမ်နီးချင်းက ထမင်းကျွေးထားတယ်တဲ့။”",
        "“သား အင်္ကျီတွေ အမေ လျှော်ထားပြီးပြီ။” “နိုးလာရင် ဘာစားချင်လဲ။”"] },

  { t: "I Answer From Underneath", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အောက်ကနေ ပြန်ဖြေတယ်။ အမေ မကြားဘူး။",
    p: "A man's mouth moving on a floor beneath a bed, forming words, and above him a pair of feet "
      + "that do not react.",
    u: ["ကျွန်တော် အောက်ကနေ ပြန်ဖြေတယ်။",
        "အမေ မကြားဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "She Unrolls a Mat", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "ညဘက်ရောက်ရင် သူ ဖျာခင်းတယ်။ အဝတ်အိတ်ကို ခေါင်းအုံးလုပ်တယ်။",
    p: "An older woman unrolling a mat on the floor beside a bed and folding a cloth bag under her "
      + "head — the narrator's exact former position.",
    u: ["ညဘက်ရောက်ရင် သူ ဖျာခင်းတယ်။",
        "အဝတ်အိတ်ကို ခေါင်းအုံးလုပ်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Looks Up Once", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "မအိပ်ခင် ကျွန်တော့်မျက်နှာကို တစ်ခါမော့ကြည့်တယ်။ “သား…” ပြီးမှ မျက်လုံးမှိတ်တယ်။",
    p: "A woman on a mat looking up at the bed above her before closing her eyes, her face lit from "
      + "the ward.",
    u: ["မအိပ်ခင် ကျွန်တော့်မျက်နှာကို တစ်ခါမော့ကြည့်တယ်။",
        "“သား…” ပြီးမှ မျက်လုံးမှိတ်တယ်။"] },

  { t: "She Keeps Waking", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "ဒါပေမယ့် ခဏလေးနဲ့ ပြန်နိုးတယ်။ ကျွန်တော် လှုပ်လာသလားဆိုပြီး။",
    p: "A woman's eyes snapping open on a mat, checking upward, then closing again — caught mid-cycle.",
    u: ["ဒါပေမယ့် ခဏလေးနဲ့ ပြန်နိုးတယ်။",
        "ကျွန်တော် လှုပ်လာသလားဆိုပြီး။"],
    c: [[1, "stinger"]] },

  { t: "The Same Face, On Her", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "⚠️ အမေ့မျက်လုံးတွေလည်း နီလာတယ်။ မျက်ခွံတွေ ဖောင်းလာတယ်။ အိပ်ချင်လွန်းတဲ့လူတစ်ယောက်ရဲ့ မျက်နှာ။",
    p: "⚠️ THE EXHAUSTED FACE, THIRD AND LAST — now on the mother. Black beneath the eyes, "
      + "swollen lids, red whites. Frame it exactly as the old man's and the mirror's were.",
    u: ["အဲဒီလိုနဲ့ အမေ့မျက်လုံးတွေလည်း နီလာတယ်။ မျက်ခွံတွေ ဖောင်းလာတယ်။",
        "အမေ့မျက်နှာမှာ ကျွန်တော် မြင်ဖူးပြီးသား အရာတစ်ခု ပေါ်လာတယ်။",
        "အဖိုးကြီးဆီမှာ မြင်ခဲ့ဖူးတယ်။ မှန်ထဲက ကိုယ့်မျက်နှာမှာလည်း မြင်ခဲ့ဖူးတယ်။",
        "အိပ်ချင်လွန်းတဲ့လူတစ်ယောက်ရဲ့ မျက်နှာ။"],
    c: [[3, "bigstinger"]] },

  { t: "The Night She First Saw Me", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "အမေ ကျွန်တော့်ကို ပထမဆုံး မြင်တဲ့ညက မိုးရွာနေတယ်။ သစ်သားပြတင်းပေါက်က နံရံကို တခေါက်ခေါက် ထိနေတယ်။",
    p: "Rain on tall ward windows at night, a loose green wooden shutter knocking against the wall, "
      + "trees moving outside.",
    u: ["အမေ ကျွန်တော့်ကို ပထမဆုံး မြင်တဲ့ညက မိုးရွာနေတယ်။",
        "အဆောင်အပြင်က သစ်ပင်တွေ လေတိုက်လို့ လှုပ်နေတယ်။ သစ်သားပြတင်းပေါက်တစ်ချပ်က နံရံကို တခေါက်ခေါက် ထိနေတယ်။"] },

  { rev: ["geography fixed"], t: "Face to Face", l: "ကုတင်အောက်", w: ["အမေ", "မင်းသူ"],
    g: "အမေက ဖျာပေါ်မှာ တစ်ဖက်စောင်းအိပ်နေတယ်။ ကျွန်တော့်ဘက်ကို မျက်နှာမူထားတယ်။",
    p: "⚠️ SHOT 3 MIRRORED AND REVERSED: the MOTHER now has the beside-the-bed mat against the wall "
      + "that used to be Min Thu's, and MIN THU is the one UNDER the frame where the old man lay. "
      + "Same bed leg between them, same level heads — one asleep and one not.",
    u: ["အမေက ဖျာပေါ်မှာ တစ်ဖက်စောင်းအိပ်နေတယ်။ ကျွန်တော့်ဘက်ကို မျက်နှာမူထားတယ်။",
        "သူ အိပ်တော့မယ်လို့ ထင်ခဲ့တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "She Was Really Looking at Me", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "ရုတ်တရက် မျက်လုံးဖွင့်လာတယ်။ ပထမဆုံးအကြိမ် သူ့မျက်လုံးတွေက ကျွန်တော့်ကို တကယ်ကြည့်နေတယ်။",
    p: "A woman's eyes opening on a mat and focusing — actually focusing — on the camera.",
    u: ["ဒါပေမယ့် ရုတ်တရက် မျက်လုံးဖွင့်လာတယ်။ ကျွန်တော်နဲ့ မျက်နှာချင်းဆိုင်။",
        "ပထမဆုံးအကြိမ် သူ့မျက်လုံးတွေက ကျွန်တော့်ကို တကယ်ကြည့်နေတယ်။",
        "“သား…” ကျွန်တော် မလှုပ်ရဲဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Why Are You Sleeping Down Here", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "အမေက မျက်ခုံးနည်းနည်းကျုံ့တယ်။ “ဘာလို့ အောက်မှာ လာအိပ်နေတာလဲ။”",
    p: "Close on a woman's face on a mat, brow slightly creased, trying to place something she is "
      + "seeing.",
    u: ["အမေက မျက်ခုံးနည်းနည်းကျုံ့တယ်။",
        "အရမ်းအိပ်ချင်နေတဲ့သူတစ်ယောက် အိပ်မက်ထဲက အရာကို နားလည်ဖို့ ကြိုးစားသလို။",
        "“ဘာလို့ အောက်မှာ လာအိပ်နေတာလဲ။”"],
    c: [[2, "bigstinger"]] },

  { t: "Mothers Know", l: "ကုတင်အောက်", w: ["မင်းသူ", "အမေ"],
    g: "ကျွန်တော် ငိုမိတယ်။ အသံမထွက်ဘူး။ ဒါပေမယ့် အမေက သိတယ်။ အမေတွေက သိကြတယ်။",
    p: "A man's face on a floor with tears running sideways across the bridge of his nose, making no "
      + "sound at all.",
    u: ["ကျွန်တော် ငိုမိတယ်။ အသံမထွက်ဘူး။",
        "ဒါပေမယ့် အမေက ကျွန်တော် ငိုနေတာကို သိတယ်။ အမေတွေက သိကြတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Get Up, Son", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "သူ ကျွန်တော့်ဆီ လက်လှမ်းလာတယ်။ ငယ်ငယ်က လဲကျတိုင်း လှမ်းပေးခဲ့တဲ့လက်။ “ထလေ၊ သား။”",
    p: "A woman's open hand extended across a mat toward the camera, palm up, the oldest gesture "
      + "there is.",
    u: ["သူ ကျွန်တော့်ဆီ လက်လှမ်းလာတယ်။ အရင်တုန်းကလိုပဲ။",
        "ကျွန်တော် ငယ်ငယ်က လဲကျတိုင်း လှမ်းပေးခဲ့တဲ့လက်။ “ထလေ၊ သား။”"],
    c: [[1, "bigstinger"]] },

  { t: "I Knew What Would Happen", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "အဲဒီလက်ကို ကိုင်လိုက်ရင် ဘာဖြစ်မလဲဆိုတာ တစ်ခါမှ မသင်ပေးဖူးဘဲ ကျွန်တော် သိနေတယ်။",
    p: "Two hands on a floor a few inches apart, neither moving, the space between them the whole "
      + "subject of the frame.",
    u: ["သူ့လက်ဖဝါးကို ကျွန်တော် မြင်တယ်။ လက်ချောင်းတွေကို မြင်တယ်။",
        "အဲဒီလက်ကို ကိုင်လိုက်ရင် ဘာဖြစ်မလဲဆိုတာကိုလည်း တစ်ခါမှ မသင်ပေးဖူးဘဲ ကျွန်တော် သိနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Now I Understood Him", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "အဖိုးကြီးက ဘာလို့ ထူခိုင်းခဲ့သလဲ။ ဘာလို့ ကျွန်တော် အိပ်ချင်တဲ့အချိန်ကို စောင့်ခဲ့သလဲ။ ကျွန်တော် အကုန်နားလည်သွားတယ်။",
    p: "Close on the narrator's face on the floor, understanding arriving — and with it something "
      + "worse than fear.",
    u: ["အဖိုးကြီးက ဘာလို့ ထူခိုင်းခဲ့သလဲ။",
        "ဘာလို့ ကျွန်တော် အိပ်ချင်တဲ့အချိန်ကို စောင့်ခဲ့သလဲ။",
        "ဘာလို့ နောက်ဆုံးအချိန်မှာ ခွင့်လွှတ်ပါလို့ ပြောခဲ့သလဲ။",
        "ကျွန်တော် အကုန်နားလည်သွားတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "Warm", l: "ကုတင်အောက်",
    g: "အမေ့လက်ချောင်းက ကျွန်တော့်လက်ဖျားကို ထိလာတယ်။ နွေးတယ်။ ရက်ပေါင်းများစွာအတွင်း ပထမဆုံး ခံစားရတဲ့ အပူ။",
    p: "Extreme close-up of two fingertips just making contact on a floor, warm light on the point "
      + "where they touch.",
    u: ["အမေ့လက်ချောင်းက ကျွန်တော့်လက်ဖျားကို ထိလာတယ်။ နွေးတယ်။",
        "ရက်ပေါင်းများစွာအတွင်း ကျွန်တော် ပထမဆုံး ပြန်ခံစားရတဲ့ အပူ။"],
    c: [[1, "bigstinger"]] },

  { rev: ["geography fixed"], t: "Both Hands Moved", l: "အဆောင်",
    g: "ကျွန်တော့်လက်က သူ့လက်ကို ပြန်ဆုပ်ဖို့ လှုပ်သွားတယ်။ အပေါ်ကုတင်က ကျွန်တော့်လက်ချောင်းတွေလည်း လှုပ်သွားတယ်။",
    p: "A split composition: fingers twitching on a floor below, and the same fingers twitching on a "
      + "blanket on the bed above, at the same instant.",
    u: ["အဲဒီအပူလေးကို ခံစားရတာနဲ့ ကျွန်တော့်လက်က သူ့လက်ကို ပြန်ဆုပ်ဖို့ လှုပ်သွားတယ်။",
        "အပေါ်ကုတင်က ကျွန်တော့်လက်ချောင်းတွေလည်း လှုပ်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "And Her Eyes Closed", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "တစ်ချိန်တည်းမှာ အမေ့မျက်လုံးတွေ မှေးကျလာတယ်။ သူ့ခေါင်းက ဖျာပေါ်ကို ပိုနိမ့်လာတယ်။",
    p: "In the same moment, a woman's eyelids sinking closed on a mat and her head settling lower "
      + "onto it.",
    u: ["တစ်ချိန်တည်းမှာ အမေ့မျက်လုံးတွေ မှေးကျလာတယ်။",
        "သူ့ခေါင်းက ဖျာပေါ်ကို ပိုနိမ့်လာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Pulled My Hand Back", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် ချက်ချင်း လက်ရုပ်လိုက်တယ်။ အမေ လန့်နိုးသွားတယ်။",
    p: "A hand snatched back across a floor, and a woman's eyes flying open on the mat.",
    u: ["ကျွန်တော် ချက်ချင်း လက်ရုပ်လိုက်တယ်။",
        "အမေ လန့်နိုးသွားတယ်။ ကုတင်အောက်ကို ကြည့်တယ်။ ကျွန်တော့်ကို မမြင်တော့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "His Fingers Moved", l: "အဆောင်", w: ["အမေ"],
    g: "အပေါ်ကို မော့ကြည့်တယ်။ ကုတင်ပေါ်က ကျွန်တော့်လက်ကို ဆုပ်ကိုင်လိုက်တယ်။ အသံမှာ မျှော်လင့်ချက်တွေ ပြည့်နေတယ်။",
    p: "A woman up off the mat gripping a young man's hand on the bed and calling out, her face lit "
      + "with hope for the first time in the film.",
    u: ["အပေါ်ကို မော့ကြည့်တယ်။ ကုတင်ပေါ်က ကျွန်တော့်လက်ကို ဆုပ်ကိုင်လိုက်တယ်။",
        "ပြီးတော့ သူနာပြုကို လှမ်းခေါ်တယ်။ သူ့အသံမှာ မျှော်လင့်ချက်တွေ ပြည့်နေတယ်။",
        "“ဆရာမ… သား လက်ချောင်းလေး လှုပ်သွားတယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "Now I Move Away From Her", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "အဲဒီညကစပြီး အမေ အိပ်ချင်လာရင် ကျွန်တော် နောက်ကို ဆုတ်နေတယ်။ ကုတင်အောက်က အမှောင်ထဲကို။",
    p: "A man edging backward away from a sleeping woman into the dark beneath a bed, his own hands "
      + "pinned under his chest.",
    u: ["အဲဒီညကစပြီး အမေ အိပ်ချင်လာရင် ကျွန်တော် နောက်ကို ဆုတ်နေတယ်။",
        "ကုတင်အောက်က အမှောင်ထဲကို။ သူ မမြင်နိုင်လောက်အောင်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Don't Take Her Hand", l: "ကုတင်အောက်", w: ["အမေ", "မင်းသူ"],
    g: "အမေကတော့ တစ်ခါတလေ မြင်တယ်။ လက်လှမ်းပေးတယ်။ ကျွန်တော် မကိုင်ဘူး။",
    p: "A woman's outstretched hand on a mat and, further back in shadow, a man with both his own "
      + "hands crushed beneath his chest.",
    u: ["အမေကတော့ တစ်ခါတလေ ကျွန်တော့်ကို မြင်တယ်။ “သား…” လို့ ခေါ်တယ်။ လက်လှမ်းပေးတယ်။",
        "ကျွန်တော် မကိုင်ဘူး။",
        "သူ့လက်ကို မကိုင်မိအောင် ကိုယ့်လက်နှစ်ဖက်ကို ရင်ဘတ်အောက်မှာ ဖိထားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Are You Angry With Me", l: "ကုတင်အောက်", w: ["အမေ", "မင်းသူ"],
    g: "တစ်ညက သူ ငိုတယ်။ “သား အမေ့ကို စိတ်ဆိုးနေတာလား။” ကျွန်တော် အရမ်းအားစိုက်ပြီး ခေါင်းခါတယ်။ အမေ မမြင်ဘူး။",
    p: "A woman crying on a mat, and in the dark beyond her a man shaking his head violently, "
      + "unseen.",
    u: ["အမေက မသိဘူး။ ကျွန်တော်က သူ့ကို မတွေ့ချင်လို့ ပုန်းနေတာလို့တောင် ထင်မိသလား မသိဘူး။",
        "တစ်ညက သူ ငိုတယ်။ “သား အမေ့ကို စိတ်ဆိုးနေတာလား။”",
        "ကျွန်တော် ခေါင်းခါတယ်။ အရမ်းအားစိုက်ပြီး ခေါင်းခါတယ်။ အမေ မမြင်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "Don't Be Afraid, I'm Here", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "နောက်တော့ သူ လက်ကို ပိုလှမ်းပေးတယ်။ “မကြောက်နဲ့။ အမေရှိတယ်။”",
    p: "A woman's hand pushed further out across the mat into the dark, reaching, her face behind it "
      + "exhausted and kind.",
    u: ["နောက်တော့ သူ လက်ကို ပိုလှမ်းပေးတယ်။",
        "“မကြောက်နဲ့။ အမေရှိတယ်။”"],
    c: [[1, "bigstinger"]] },

  { t: "I Wanted That for Days", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အဲဒီစကားကို ကြားချင်ခဲ့တာ။ အဲဒီလက်ကို ကိုင်ချင်ခဲ့တာ။ ရက်ပေါင်းများစွာ။ အခုလည်း ကိုင်ချင်နေတုန်းပဲ။",
    p: "Close on the narrator's face in the dark, looking at an outstretched hand he will not take.",
    u: ["ကျွန်တော် အဲဒီစကားကို ကြားချင်ခဲ့တာ။ အဲဒီလက်ကို ကိုင်ချင်ခဲ့တာ။ ရက်ပေါင်းများစွာ။",
        "အခုလည်း ကိုင်ချင်နေတုန်းပဲ။"],
    c: [[1, "heartbeat"]] },

  { rev: ["geography fixed"], t: "I Watch Myself Sleeping", l: "အဆောင်", w: ["မင်းသူ"],
    g: "အပေါ်က ကုတင်ပေါ်မှာ ကျွန်တော် အိပ်နေတာကို မြင်နေရတယ်။ တစ်ခါလောက်ပဲ အဲဒီမျက်လုံးတွေထဲ ပြန်ဝင်ပြီး နိုးလိုက်ချင်တယ်။",
    p: "From beneath the bed, the underside of the mattress and the shape of a body in it — the "
      + "narrator looking up at himself.",
    u: ["အပေါ်က ကုတင်ပေါ်မှာ ကျွန်တော် အိပ်နေတာကို မြင်နေရတယ်။",
        "တစ်ခါလောက်ပဲ အဲဒီမျက်လုံးတွေထဲ ပြန်ဝင်ပြီး နိုးလိုက်ချင်တယ်။",
        "အမေ့မျက်နှာကို အောက်ကနေ မော့မကြည့်ဘဲ အရင်လို တည့်တည့်ကြည့်ချင်တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "I Want to Sleep", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "အိမ်ပြန်ချင်တယ်။ အိပ်ချင်တယ်။ ဘယ်အသံမှ မကြားဘဲ တစ်ရေးလောက်ပဲ အိပ်ချင်တယ်။",
    p: "A man lying on a hospital floor with his eyes open and his hands over his own ears, "
      + "surrounded by the noise of a ward.",
    u: ["အိမ်ပြန်ချင်တယ်။ အိပ်ချင်တယ်။",
        "ဘယ်အသံမှ မကြားဘဲ တစ်ရေးလောက်ပဲ အိပ်ချင်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "That Is What I Fear Most", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် အဖိုးကြီးကို နားလည်လာတယ်။ အဲဒါက အခု ကျွန်တော် အကြောက်ဆုံးပဲ။",
    p: "Close on the narrator's face — the same exhausted face, and the fear on it is of himself.",
    u: ["ကျွန်တော် အဖိုးကြီးကို နားလည်လာတယ်။",
        "အဲဒါက အခု ကျွန်တော် အကြောက်ဆုံးပဲ။"],
    c: [[1, "bigstinger"]] },

  { t: "Every Night She Reaches", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "ညတိုင်း အမေက ဆက်ပြီး လက်လှမ်းပေးနေတယ်။ သူ့မျက်နှာက တစ်ညထက်တစ်ည ပိုပင်ပန်းလာတယ်။",
    p: "The same outstretched hand on the same mat, the face behind it more exhausted than the last "
      + "time we saw it.",
    u: ["ညတိုင်း အမေက ကျွန်တော့်ကို ဆက်ပြီး လက်လှမ်းပေးနေတယ်။",
        "သူ့မျက်နှာက တစ်ညထက်တစ်ည ပိုပင်ပန်းလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "One Finger's Width", l: "ကုတင်အောက်",
    g: "မနေ့ညကတော့ အမေ့လက်နဲ့ ကျွန်တော့်လက်ကြားမှာ လက်တစ်ချောင်းစာလောက်ပဲ ကျန်တော့တယ်။",
    p: "Two hands on a floor with barely a finger's width between them, the gap the only thing in "
      + "focus.",
    u: ["ကျွန်တော်လည်း တစ်ညထက်တစ်ည ပိုနီးနီးကပ်ကပ် ရွေ့မိလာတယ်။",
        "မနေ့ညကတော့ အမေ့လက်နဲ့ ကျွန်တော့်လက်ကြားမှာ လက်တစ်ချောင်းစာလောက်ပဲ ကျန်တော့တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Managed to Pull Back", l: "ကုတင်အောက်", w: ["မင်းသူ"],
    g: "ကျွန်တော် နောက်ကို ပြန်ဆုတ်နိုင်ခဲ့တယ်။ ဒီညလည်း ဆုတ်နိုင်ဦးမယ်လို့ ထင်ပါတယ်။",
    p: "A hand withdrawing an inch across a floor — a movement that has clearly cost everything.",
    u: ["ကျွန်တော် နောက်ကို ပြန်ဆုတ်နိုင်ခဲ့တယ်။",
        "ဒီညလည်း ဆုတ်နိုင်ဦးမယ်လို့ ထင်ပါတယ်။"],
    c: [[1, "heartbeat"]] },

  { t: "She Is Lying Down Already", l: "ကုတင်အောက်", w: ["အမေ"],
    g: "အမေက ဖျာပေါ်မှာ လှဲနေပြီ။ မျက်လုံးတွေ မှေးနေပြီ။ လက်တစ်ဖက်ကို ကုတင်အောက်ဘက် လှမ်းပေးထားတယ်။",
    p: "A woman lying on a mat with her eyes almost shut and one arm extended into the dark beneath "
      + "the bed.",
    u: ["အမေက ဖျာပေါ်မှာ လှဲနေပြီ။ မျက်လုံးတွေ မှေးနေပြီ။",
        "လက်တစ်ဖက်ကို ကုတင်အောက်ဘက် လှမ်းပေးထားတယ်။",
        "တိုးတိုးလေး ခေါ်တယ်။ “သား…”"],
    c: [[2, "bigstinger"]] },

  { rev: ["continuity fixed"], t: "Lean on Mother", l: "ကုတင်အောက်", w: ["အမေ", "မင်းသူ"],
    g: "နောက်ဆုံးပုံ — ဆေးရုံစရောက်တဲ့နေ့က ကျွန်တော် ပြောခဲ့တဲ့စကားကို အမေက ပြန်ပြောတယ်။ “အမေ့ကို မှီလိုက်။”",
    p: "Final composition: a woman's outstretched hand on a mat with her exhausted face behind it, "
      + "and at the very edge of frame in the dark, the narrator's fingers — a single finger's width "
      + "short of hers and not touching. They have touched once already, at shot 112; this is the "
      + "nearest he has come since. Hold on the gap between the two hands.",
    u: ["ပြီးတော့ ဆေးရုံစရောက်တဲ့နေ့က ကျွန်တော် သူ့ကို ပြောခဲ့တဲ့စကားကို ပြန်ပြောတယ်။",
        "“အမေ့ကို မှီလိုက်။”"],
    c: [[1, "finalstinger"]] },
];
reviewHosp(SCENES, CAST, LOCS);

/**
 * The shared style block pins the ward's furniture — bed, stool, cloth bag,
 * mats, green-curtained corner bed — so those positions stay put across a
 * hundred-odd shots of the same room. On a shot that is NOT in that room it is
 * an invitation to paint ward furniture into a brick wall or a washroom, so it
 * is removed from the nine shots set elsewhere.
 */
const WARD_FURNITURE = "Maintain the same bed, stool, cloth bag, reed mats and "
  + "green-curtained corner bed positions. ";
const WARD_LOCS = new Set(["\u1021\u1006\u1031\u102c\u1004\u103a", "\u1000\u102f\u1010\u1004\u103a\u1021\u1031\u102c\u1000\u103a"]);
SCENES.forEach((sc) => {
  if (sc.l && !WARD_LOCS.has(sc.l) && sc.style) sc.style = sc.style.replace(WARD_FURNITURE, "");
});

