/**
 * အလောင်းက ကလေးကို မလွှတ်ဘူး — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * TWO RULES THIS STORY NEEDS.
 *
 * 1. The dead woman is never frightening to look at. Her eyes stay closed in
 *    every shot where she is deceased — living memories use a separate,
 *    identity-linked plate with natural open eyes. No
 *    milky eyes, no open mouth, no decay, no gore, no contortion. She looks
 *    exactly like a woman asleep. What is uncanny is only ever the POSITION
 *    she is in: a hand closed, a shoulder lifted, a head turned toward someone.
 *
 * 2. Cues are authored sparingly here. The last three boards came out at two
 *    thirds scored and had to be thinned back. This story is a quiet one — a
 *    child refusing to let go — so it gets about one cue every three shots and
 *    almost all of them are small.
 */

export const CAST = [
  { name: "ကျွန်တော်", en: "The narrator — her younger brother",
    prompt: "A Burmese man aged about thirty, average height and lean ordinary build, warm medium-brown "
      + "skin, a narrow oval face, dark-brown eyes, straight brows, short slightly overgrown black hair "
      + "and faint travel stubble. A plain charcoal cotton button-front shirt, sleeves rolled to the "
      + "forearms, dark trousers and worn brown sandals; the shirt is creased from a long drive. Tired "
      + "and grieving but steady, observant and protective rather than panicked." },
  { name: "စုစု", en: "Su Su — the daughter, seven years old",
    prompt: "Su Su, a Burmese girl aged seven, small for her age, warm medium-brown skin, a round child "
      + "face, large dark-brown eyes, straight black fringe and shoulder-length black hair gathered into "
      + "one short low ponytail with a plain black elastic. A faded dusty-blue knee-length cotton house "
      + "dress with short sleeves and small bare feet. Quiet, watchful and unusually composed; she does "
      + "not cry. This identity plate shows both wrists free and unmarked—the funeral grip is scene state, "
      + "not part of her body or base reference." },
  { name: "ခင်နှင်းအရှင်", en: "Khin Hnin — alive in memories",
    prompt: "Khin Hnin alive, a Burmese woman aged thirty-four, average height and slender build, warm "
      + "medium-brown skin, a softly rectangular face, dark-brown almond eyes, gently arched brows, a "
      + "straight nose and shoulder-length black hair normally swept back behind both ears. A muted "
      + "marigold cotton blouse and dark plum longyi. Warm, energetic and habitually busy with her hands. "
      + "She is healthy and living in this plate, with open natural eyes and a relaxed familiar smile." },
  { name: "ခင်နှင်း", en: "Khin Hnin — the sister, deceased",
    sameAs: 3,
    pose: "Photographed directly from overhead: the subject lies horizontally on her back, full body visible from head to bare feet, arms straight and relaxed beside her for identity clarity, eyes gently closed and mouth naturally closed",
    prompt: "The exact same woman as living Khin Hnin in Reference 3—preserve her face, skin tone, body "
      + "and swept-back black hair exactly; do not create a different or merely similar woman. She is "
      + "prepared respectfully for a funeral in a plain long-sleeved white cotton blouse and dark plum "
      + "longyi, with a narrow folded white cloth supporting beneath her chin. ⚠️ Her eyes are gently "
      + "closed and mouth naturally closed. She looks peacefully asleep and completely ordinary: no "
      + "unnatural pallor, sunken features, decay, stiffness, wound, gore or anything monstrous." },
  { name: "ကိုဝင်းလှ", en: "Ko Win Hla — her husband",
    prompt: "Ko Win Hla, a Burmese man aged about forty, slightly tall with a heavy broad build, medium-"
      + "brown skin, a broad round face, small dark-brown eyes, thick brows, short black hair flattened "
      + "at one side and two days of dark stubble. A rumpled brown-and-cream checked short-sleeved shirt "
      + "worn untucked over a dark green longyi and rubber sandals. He gestures with large hands and "
      + "stands too close. Exhausted and grief-struck on the surface, controlling underneath, but never "
      + "a theatrical villain. Both wrists are initially unmarked." },
];

export const LOCS = [
  { name: "အိမ်ထဲ", en: "The front room, laid out for the funeral",
    prompt: "The front room of a modest two-storey Myanmar village house arranged for a wake: a "
      + "plain wooden coffin on trestles in the middle of the floor, a small offering table with "
      + "candles and flowers at its head, framed photographs on the wall, one bare bulb and a few "
      + "candles. Bare board floor, shuttered windows, a wooden staircase visible at the back." },
  { name: "မဏ္ဍပ်", en: "The awning outside the house",
    prompt: "A funeral awning of tarpaulin and bamboo poles pitched over the yard in front of a "
      + "village house at night: plastic stools, a low table with a card game and thermoses, a "
      + "strip light hung from a pole, mourners sitting and dozing. Warm and ordinary." },
  { name: "လှေကား", en: "The staircase she is said to have fallen from",
    prompt: "A steep narrow wooden staircase inside a village house, worn treads, a plain handrail on "
      + "one side, the bottom step meeting a bare board floor. Photographed plainly, nothing sinister "
      + "about it." },
  { name: "ဦးလေးအိမ်", en: "The narrator's flat in Mandalay",
    prompt: "A small plain rented flat: a low bed against the wall, a mosquito net, a fan, a window "
      + "with the city dark behind it. Sparse, a man's place with a child recently moved into it." },
];

export const STYLE =
  "A village house in Upper Myanmar, present day, during a two-day funeral wake. Candlelight and one "
  + "bare bulb indoors, a fluorescent strip under the awning outside, deep unlit corners. Cinematic "
  + "photorealism, domestic Myanmar folk horror — a family home in mourning before it is anything "
  + "else. Desaturated warm palette, 35mm film grain, shallow depth of field, 16:9. ⚠️ WHEN SHOWN "
  + "DECEASED, KHIN HNIN IS NEVER A HORROR IMAGE: her eyes are closed in every funeral frame, she looks asleep, and there "
  + "is no decay, no gore, no open mouth, no contorted limbs and nothing monstrous anywhere in this "
  + "film. What unsettles is only ever her POSITION — a hand closed around a wrist, a shoulder raised, "
  + "a face turned toward someone. No legible text, numbers, captions or watermarks in the image.";

export const MEMORY_STYLE =
  "Upper Myanmar in an ordinary warm daylight memory from years earlier. Natural lived-in colour, "
  + "gentle cinematic photorealism, 35mm film grain, shallow depth of field, 16:9. Khin Hnin is alive, "
  + "healthy, expressive and active with open natural eyes. No coffin, funeral clothing, candles, "
  + "supernatural element, horror lighting, gore, legible text, numbers, captions or watermarks.";

export const CAR_STYLE =
  "Present-day Myanmar inside a hired car travelling at night. Passing highway lights, restrained "
  + "natural darkness, cinematic photorealism, desaturated colour, 35mm film grain, shallow depth of "
  + "field, 16:9. Quiet grief, no supernatural element, coffin, funeral room, gore, legible text, "
  + "numbers, captions or watermarks.";

export const MORNING_STYLE =
  "The same Upper Myanmar funeral house at grey early morning after the wake. Cool daylight through "
  + "wooden shutters replaces candlelight; white-clad mourners remain respectful and ordinary. "
  + "Cinematic photorealism, subdued natural colour, 35mm grain, shallow depth of field, 16:9. Deceased "
  + "Khin Hnin's eyes and mouth remain gently closed and she looks peacefully asleep. No decay, gore, "
  + "monster imagery, legible text, numbers, captions or watermarks.";

export const FLAT_STYLE =
  "A small rented flat in Mandalay, present day, several weeks after the funeral, in quiet blue-black "
  + "night light from a city window. Intimate family realism rather than horror, cinematic "
  + "photorealism, natural muted colour, 35mm film grain, shallow depth of field, 16:9. Su Su is calm "
  + "and dry-eyed; her left wrist is free and safe. No coffin, dead woman, funeral decorations, "
  + "supernatural figure, gore, legible text, numbers, captions or watermarks.";

export const styleForShot = (n) => [6, 11, 49].includes(n) ? MEMORY_STYLE
  : n === 8 ? CAR_STYLE : n >= 57 && n <= 59 ? MORNING_STYLE : n >= 60 ? FLAT_STYLE : STYLE;

export const SCENES = [
  { t: "Ten Minutes After We Laid Her In", l: "အိမ်ထဲ", w: ["ခင်နှင်း"],
    g: "ခေါင်းထဲမှာ အစ်မ။ မျက်လုံးပိတ်ထား။ ငြိမ်နေတယ်။ ဖယောင်းတိုင်အလင်း။",
    p: "A woman laid out in a plain wooden coffin in candlelight, eyes closed, hands folded on her "
      + "chest, perfectly peaceful — an entirely ordinary funeral image.",
    u: ["အစ်မရဲ့အလောင်းကို ခေါင်းထဲ ထည့်ပြီး ဆယ်မိနစ်လောက်အကြာမှာ သူ့လက်က ကလေးကို ဖမ်းလိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Su Su Is Seven", l: "အိမ်ထဲ", w: ["စုစု"],
    g: "ကလေးမလေး ခုံငယ်ပေါ်တက်ရပ်ပြီး ခေါင်းထဲကို လှမ်းကြည့်နေတယ်။",
    p: "A small girl standing on a low wooden stool to reach over the edge of a coffin, seen from "
      + "behind and slightly to one side, candlelight on her face.",
    u: ["စုစုက ခုနစ်နှစ်ပဲ ရှိသေးတယ်။",
        "ခေါင်းဘေးမှာ ခုံငယ်တစ်လုံးပေါ် တက်ရပ်ပြီး အမေ့လက်ကို နောက်ဆုံးတစ်ခါ ကိုင်ကြည့်တာ။"] },

  { t: "The Fingers Closed", l: "အိမ်ထဲ", w: ["ခင်နှင်း", "စုစု"],
    g: "အစ်မရဲ့လက်ချောင်းတွေက စုစုရဲ့လက်ကောက်ဝတ်ကို ဖြည်းဖြည်း ပိတ်ဆုပ်လိုက်တယ်။ အနီးကပ်။",
    p: "Extreme close-up: an adult woman's fingers closed around a child's thin wrist, the grip "
      + "unmistakable but gentle, both hands lit by a single candle.",
    u: ["အစ်မရဲ့လက်ချောင်းတွေက စုစုရဲ့လက်ကောက်ဝတ်ကို ဖြည်းဖြည်း ပိတ်ဆုပ်လိုက်တယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "Don't Take It Off, Uncle", l: "အိမ်ထဲ", w: ["စုစု", "ကျွန်တော်"],
    g: "အဒေါ်က အော်တယ်။ ကျွန်တော်က ကလေးကို ဆွဲထုတ်ဖို့ လုပ်တယ်။ စုစုက ခွင့်မပြုဘူး။",
    p: "A man reaching in to lift a child away from a coffin while the child braces against him, "
      + "another woman recoiling at the edge of frame, candles guttering.",
    u: ["ဘေးမှာရပ်နေတဲ့ အဒေါ်က အော်တယ်။",
        "ကျွန်တော်က ကလေးကို ဆွဲထုတ်ဖို့ လုပ်တယ်။",
        "စုစုကတော့ “မဖြုတ်နဲ့ ဦးလေး” လို့ ပြောတယ်။"] },

  { t: "She Did Not Cry", l: "အိမ်ထဲ", w: ["စုစု"],
    g: "စုစုက မငိုဘူး။ အမေ့မျက်နှာကိုပဲ ကြည့်နေတယ်။",
    p: "A child's face in profile looking down into a coffin, entirely calm, dry-eyed, absorbed "
      + "rather than frightened.",
    u: ["သူ မငိုဘူး။ အမေ့မျက်နှာကိုပဲ ကြည့်နေတယ်။",
        "“ဒီအတိုင်းပဲ ထားပါ”"] },

  { t: "Her Name Was Khin Hnin", l: null, w: ["ခင်နှင်းအရှင်"],
    g: "ဓာတ်ပုံဟောင်း — အသက်ရှင်တုန်းက အစ်မ။ ရိုးရိုးဓာတ်ပုံ။",
    p: "An ordinary framed family photograph of a smiling woman in her thirties, taken years ago, "
      + "propped on a shelf in daylight.",
    u: ["ကျွန်တော့်အစ်မနာမည်က ခင်နှင်း။ အသက်သုံးဆယ့်လေးနှစ်။"] },

  { t: "She Fell Down the Stairs", l: "လှေကား",
    g: "အိမ်ထဲက လှေကားမတ်မတ်။ အောက်ခြေမှာ ဘာမှမရှိဘူး။",
    p: "A steep narrow wooden staircase photographed straight on from the bottom, empty, worn "
      + "treads, one dim bulb above it. Nothing marked, nothing sinister.",
    u: ["မနေ့ညက အိမ်လှေကားပေါ်ကနေ ပြုတ်ကျပြီး ဆုံးတယ်လို့ ယောက်ဖ ကိုဝင်းလှက ပြောတယ်။"] },

  { t: "I Drove Down From Mandalay", l: null, w: ["ကျွန်တော်"],
    g: "ညဘက် ကားထဲ။ လမ်းမကြီး။ တစ်ယောက်တည်း။",
    p: "A man alone in the back of a hired car at night on an empty highway, phone dark in his "
      + "hand, headlights of oncoming traffic sliding across his face.",
    u: ["ကျွန်တော်က မန္တလေးမှာ အလုပ်လုပ်နေတာ။ သတင်းကြားတာနဲ့ ကားငှားပြီး ပြန်လာခဲ့တယ်။"] },

  { t: "Already Dressed in White", l: "အိမ်ထဲ", w: ["ခင်နှင်း"],
    g: "အစ်မကို အဖြူရောင်အင်္ကျီ ဝတ်ပေးထားတယ်။ မေးစေ့အောက်မှာ အဖြူရောင်အဝတ်တစ်စ။",
    p: "A woman laid out in a white blouse with a folded white cloth beneath her chin, eyes closed, "
      + "hair neatly combed. Composed and dignified.",
    u: ["ရောက်တော့ အစ်မကို အဖြူရောင်အင်္ကျီ ဝတ်ပေးထားပြီးပြီ။",
        "မျက်လုံးတွေ ပိတ်ထားတယ်။ မေးစေ့အောက်မှာ အဖြူရောင်အဝတ်တစ်စ ခံထားတယ်။"] },

  { t: "Stiller Than She Ever Was", l: "အိမ်ထဲ", w: ["ခင်နှင်း"],
    g: "အစ်မရဲ့လက်နှစ်ဖက် ရင်ဘတ်ပေါ်မှာ အငြိမ်။ အနီးကပ်။",
    p: "Close on a pair of folded hands resting on a chest, completely motionless, the fingers "
      + "relaxed. Candlelight from one side.",
    u: ["အသက်ရှင်တုန်းကထက်တောင် ပိုငြိမ်နေတယ်။",
        "အစ်မက ငယ်ငယ်ကတည်းက လက်မငြိမ်တဲ့သူ။"] },

  { t: "Her Hands Were Never Still", l: null, w: ["ခင်နှင်းအရှင်"],
    g: "အသက်ရှင်တုန်းက အစ်မ — ဆံပင်သပ်နေတာ၊ အဝတ်ခေါက်နေတာ။ နေ့ခင်းအလင်း။",
    p: "A woman in ordinary daylight caught mid-gesture folding laundry, hands busy, a warm "
      + "everyday domestic memory of her alive.",
    u: ["စကားပြောရင်း ဆံပင်သပ်တယ်။ အဝတ်ခေါက်တယ်။ စားပွဲပေါ်က ဖုန်သုတ်တယ်။",
        "ကျွန်တော် သူ့ကို ပြန်တွေ့တဲ့နေ့မှာတော့ သူ့လက်တွေက ရင်ဘတ်ပေါ်မှာ အငြိမ်။",
        "စုစု လာကိုင်တဲ့အချိန်အထိ။"],
    c: [[2, "stinger"]] },

  { t: "Four People Tried", l: "အိမ်ထဲ", w: ["ခင်နှင်း", "စုစု"],
    g: "လူလေးယောက် ဝိုင်းပြီး လက်တစ်ချောင်းချင်း ဆွဲကြည့်နေကြတယ်။",
    p: "Several pairs of adult hands working at a woman's closed fist around a child's wrist, "
      + "crowded and awkward in candlelight, getting nowhere.",
    u: ["လူလေးယောက် ဝိုင်းဖြုတ်ကြတယ်။",
        "အစ်မရဲ့ လက်တစ်ချောင်းချင်းကို ဆွဲကြည့်ကြတယ်။ မရဘူး။"] },

  { t: "Pulling Only Hurt the Child", l: "အိမ်ထဲ", w: ["စုစု", "ခင်နှင်း"],
    g: "ကလေးလက်ကို ဆွဲတော့ စုစု နာလို့ အော်တယ်။ အစ်မလက်က ပိုမတင်းဘူး။",
    p: "A child wincing sharply as adults pull at her arm, her wrist reddening, the woman's hand "
      + "around it entirely unchanged.",
    u: ["ကလေးရဲ့လက်ကို ဆွဲတော့ စုစု နာလို့ အော်တယ်။",
        "ဒါပေမယ့် အစ်မရဲ့လက်က ပိုတင်းလာတာ မဟုတ်ဘူး။",
        "ဆွဲရင် မလွတ်တာပဲ။ မဆွဲဘဲထားရင် စုစုလက်က နည်းနည်း လှုပ်လို့ရတယ်။"],
    c: [[2, "stinger"]] },

  { t: "Call a Doctor", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ"],
    g: "အဒေါ်က ဆရာဝန်ခေါ်ဖို့ ပြောတယ်။ ကိုဝင်းလှက ချက်ချင်း ဝင်ဖြတ်တယ်။",
    p: "A heavyset man cutting across a conversation with one hand raised, an older woman stopped "
      + "mid-sentence beside him, the coffin behind them both.",
    u: ["အဒေါ်တစ်ယောက်က “သား၊ ဆရာဝန်ခေါ်လိုက်” လို့ ကျွန်တော့်ကို ပြောတယ်။",
        "ကိုဝင်းလှက ချက်ချင်း ဝင်ပြောတယ်။",
        "“ဘာဆရာဝန်လဲ။ သေပြီးသားလူကို ဘာလုပ်ပေးလို့ရမှာလဲ”"] },

  { t: "The Child Flinched", l: "အိမ်ထဲ", w: ["စုစု"],
    g: "သူ့အသံက ကျယ်တယ်။ စုစု ပခုံးတွန့်သွားတယ်။",
    p: "A small girl's shoulders drawing up tight at a raised voice, her face turned away from the "
      + "sound, still holding on.",
    u: ["သူ့အသံက ကျယ်တယ်။ စုစု ပခုံးတွန့်သွားတယ်။"] },

  { t: "One Finger Moved", l: "အိမ်ထဲ", w: ["ခင်နှင်း", "စုစု"],
    g: "အစ်မရဲ့လက်ညှိုးက စုစုရဲ့လက်ကောက်ဝတ်ကို တစ်ချက် ပွတ်ပေးသလို။ အနီးကပ်။",
    p: "Extreme close-up of an index finger against a child's wrist, caught mid-stroke — the "
      + "unmistakable small motion of comforting someone.",
    u: ["အဲဒီအချိန် အစ်မရဲ့ လက်ညှိုးတစ်ချောင်း လှုပ်တယ်။",
        "စုစုရဲ့ လက်ကောက်ဝတ်ကို တစ်ချက် ပွတ်ပေးသလို။",
        "ကျွန်တော် မြင်လိုက်တယ်။ တခြားသူတွေတော့ မမြင်လိုက်ဘူးထင်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Taller Stool", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "စုစု"],
    g: "ကျွန်တော် စုစုအတွက် ခုံအမြင့်တစ်လုံး ယူလာပေးတယ်။ ထိုင်လို့ရအောင်။",
    p: "A man setting a taller stool beside a coffin and easing a child onto it so she can sit "
      + "instead of stand, her arm still stretched over the edge.",
    u: ["ကျွန်တော်က လူတွေကို ခဏရပ်ခိုင်းပြီး စုစုအတွက် ခုံအမြင့်တစ်လုံး ယူလာပေးတယ်။",
        "အမေ့လက်ကို ကိုင်ထားရင်း ထိုင်လို့ရအောင်။"] },

  { t: "Does It Hurt", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "စုစု"],
    g: "ကျွန်တော် မေးတယ်။ ခေါင်းခါတယ်။ အေးလားလို့ မေးတော့ ခေါင်းညိတ်တယ်။",
    p: "A man crouched to a seated child's eye level, speaking quietly, one hand on the stool "
      + "beside her rather than on her.",
    u: ["“နာလား” လို့ မေးတော့ သူ ခေါင်းခါတယ်။",
        "“အေးလား” ခေါင်းညိတ်တယ်။"] },

  { t: "She Looked at Her Father", l: "အိမ်ထဲ", w: ["စုစု", "ကိုဝင်းလှ"],
    g: "ကြောက်လားလို့ မေးတော့ စုစုက အမေ့ကို မကြည့်ဘူး။ အဖေ့ကို ကြည့်တယ်။",
    p: "A child's eyes moving past the coffin to a man standing further back in the room, and then "
      + "dropping to the floor. He is out of focus behind her.",
    u: ["“ကြောက်လား” စုစုက အမေ့ကို မကြည့်ဘူး။ သူ့အဖေကို ကြည့်တယ်။",
        "ပြီးတော့ ခေါင်းငုံ့လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Wake Thinned Out", l: "မဏ္ဍပ်",
    g: "ညနက်လာတယ်။ မဏ္ဍပ်မှာ လူတချို့ ဖဲကစားနေတယ်။ တချို့ အိပ်ပျော်နေတယ်။",
    p: "Under a funeral awning late at night: a few older men playing cards at a low table, others "
      + "asleep on mats, a strip light overhead, most stools empty.",
    u: ["ညနက်လာတော့ အသုဘလာမေးတဲ့သူတွေ နည်းသွားတယ်။",
        "ဆရာဝန်နဲ့ ဆက်သွယ်ထားတဲ့ အဒေါ်က လမ်းထိပ်ကို သွားကြိုတယ်။",
        "အိမ်ရှေ့မဏ္ဍပ်မှာ လူကြီးတချို့ ဖဲကစားနေကြတယ်။ တချို့ အိပ်ပျော်နေကြပြီ။"] },

  { t: "Four of Us Left", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "စုစု", "ကိုဝင်းလှ"],
    g: "အိမ်ထဲမှာ ကျွန်တော်၊ စုစု၊ ကိုဝင်းလှနဲ့ အစ်မ။",
    p: "A wide view of the front room at night: a coffin, a child seated beside it, two men at "
      + "opposite edges of the room, one bulb and a few candles.",
    u: ["အိမ်ထဲမှာတော့ ကျွန်တော်၊ စုစု၊ ကိုဝင်းလှနဲ့ အစ်မ။"] },

  { t: "Two Mouthfuls", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "စုစု"],
    g: "ကျွန်တော် ထမင်းခွံ့ကျွေးတယ်။ သူ နှစ်လုတ်ပဲ စားတယ်။",
    p: "A man feeding a seated child from a plate with a spoon, her free hand in her lap, the "
      + "other arm still over the coffin edge.",
    u: ["စုစုက အမေ့လက်ကို ကိုင်ထားရင်း မျက်လုံးမှေးလာတယ်။",
        "ကျွန်တော် ထမင်းနည်းနည်း ခွံ့ကျွေးတယ်။ သူ နှစ်လုတ်ပဲ စားတယ်။"] },

  { t: "Will You Close Your Eyes", l: "အိမ်ထဲ", w: ["စုစု"],
    g: "စုစုက ထူးဆန်းတဲ့မေးခွန်းတစ်ခု မေးတယ်။",
    p: "A child looking up at an adult with a question on her face, the room dim behind her, her "
      + "expression serious rather than sleepy.",
    u: ["“ဦးလေး” “အင်း”",
        "“ညကျရင် ဦးလေး ဘယ်မှာအိပ်မှာလဲ” “ဒီမှာပဲ။ စုစုဘေးမှာ”",
        "သူ ခဏစဉ်းစားတယ်။ “မျက်လုံးပိတ်မှာလား”"],
    c: [[2, "bigstinger"]] },

  { t: "She Would Not Say Why", l: "အိမ်ထဲ", w: ["စုစု"],
    g: "ကျွန်တော် ဘာလို့လဲလို့ မေးတယ်။ သူ မဖြေဘူး။ ပန်းကန်ကို တွန်းပေးတယ်။",
    p: "A plate of rice pushed away by a small hand, barely touched, the child's face turned down "
      + "and closed.",
    u: ["ကျွန်တော် သူ့မျက်နှာကို ကြည့်လိုက်တယ်။ “ဘာလို့လဲ”",
        "သူ မဖြေဘူး။ ထမင်းပန်းကန်ကို လက်နဲ့ တွန်းပေးတယ်။ “မစားတော့ဘူး”"] },

  { t: "The Shears", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ"],
    g: "ကိုဝင်းလှ လက်ထဲမှာ အဝတ်ညှပ်ကတ်ကြေးကြီးတစ်လက်နဲ့ ထွက်လာတယ်။",
    p: "A man emerging from a back room holding a large pair of cloth shears down at his side, the "
      + "blades catching the bulb light.",
    u: ["ကိုဝင်းလှက အခန်းထဲကနေ ထွက်လာတယ်။",
        "သူ့လက်ထဲမှာ ကတ်ကြေးကြီးတစ်လက်။ အဝတ်ညှပ်တဲ့ကတ်ကြေး။",
        "“ဒီလို တစ်ညလုံး ထိုင်နေလို့ မဖြစ်ဘူး။ ကလေးကို အိပ်ခိုင်းရမယ်”"],
    c: [[1, "bigstinger"]] },

  { t: "Between the Fingers", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "ကိုဝင်းလှ", "စုစု"],
    g: "ကျွန်တော် ထလိုက်တယ်။ ဘာလုပ်မလို့လဲလို့ မေးတယ်။",
    p: "Two men facing each other across a coffin, one standing up out of a crouch, the other "
      + "holding shears, the child between them.",
    u: ["ကျွန်တော် ထလိုက်တယ်။ “ကတ်ကြေးနဲ့ ဘာလုပ်မလို့လဲ”",
        "“လက်ချောင်းတွေကြား ထိုးခွာမလို့”"],
    c: [[1, "bigstinger"]] },

  { t: "Don't Do That to My Mother", l: "အိမ်ထဲ", w: ["စုစု", "ကိုဝင်းလှ"],
    g: "စုစုက လွတ်နေတဲ့လက်တစ်ဖက်နဲ့ ကျွန်တော့်အင်္ကျီကို ဆုပ်လိုက်တယ်။",
    p: "A child's free hand fisted tight in the back of a man's shirt, her other arm still "
      + "stretched into the coffin.",
    u: ["စုစုက ကျွန်တော့်အင်္ကျီကို လွတ်နေတဲ့လက်တစ်ဖက်နဲ့ ဆုပ်လိုက်တယ်။",
        "“အမေ့ကို မလုပ်နဲ့”"] },

  { t: "You Be Quiet", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ"],
    g: "ကိုဝင်းလှ မျက်နှာတင်းသွားတယ်။",
    p: "Close on a man's face hardening, jaw set, looking down at a child rather than at the "
      + "coffin.",
    u: ["ကိုဝင်းလှ မျက်နှာတင်းသွားတယ်။ “နင် တိတ်တိတ်နေ”"] },

  { t: "A Scratch From Inside", l: "အိမ်ထဲ",
    g: "ခေါင်းထဲကနေ ခြစ်သံတစ်ချက်။ လက်သည်းနဲ့ သစ်သားကို ခြစ်တဲ့အသံ။",
    p: "The outside of a plain wooden coffin in candlelight, held still and quiet — the frame "
      + "waiting on a sound rather than showing anything.",
    u: ["ခေါင်းထဲကနေ ခြစ်သံတစ်ချက် ထွက်လာတယ်။",
        "လက်သည်းနဲ့ သစ်သားကို ခြစ်တဲ့အသံ။"],
    c: [[0, "bigstinger"]] },

  { t: "The Other Hand", l: "အိမ်ထဲ", w: ["ခင်နှင်း"],
    g: "စုစုကို ကိုင်ထားတဲ့လက်က မလှုပ်ဘူး။ ကျန်တစ်ဖက်ရဲ့ လက်သည်းတွေက ခေါင်းဘေးသားကို ထိနေပြီ။",
    p: "Extreme close-up inside the coffin edge: fingertips of a second hand resting against the "
      + "raw timber wall, the nails just touching it. No damage, no gouges — only contact.",
    u: ["ကျွန်တော် အစ်မရဲ့လက်ကို ကြည့်လိုက်တယ်။ စုစုကို ကိုင်ထားတဲ့လက်က မလှုပ်ဘူး။",
        "ရင်ဘတ်ပေါ်မှာ တင်ထားတဲ့ ကျန်လက်တစ်ဖက်ရဲ့ လက်သည်းတွေက ခေါင်းအတွင်းဘေးသားကို ထိနေပြီ။"],
    c: [[1, "bigstinger"]] },

  { t: "He Saw It Too", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ"],
    g: "ကိုဝင်းလှလည်း မြင်လိုက်တယ်။ နောက်ကို နည်းနည်း ဆုတ်သွားတယ်။",
    p: "A man taking a small involuntary step backward, shears lowering, his eyes fixed on the "
      + "coffin.",
    u: ["ကိုဝင်းလှလည်း မြင်လိုက်တယ်။",
        "သူ နောက်ကို နည်းနည်း ဆုတ်သွားတယ်။ ပြီးတော့ ကျွန်တော့်ကို ကြည့်တယ်။"] },

  { t: "What Has She Told You", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ", "ကျွန်တော်"],
    g: "“မင်းကို သူ ဘာတွေပြောထားလဲ” လို့ မေးတယ်။ “ဘယ်သူလဲ” လို့ ပြန်မေးတယ်။",
    p: "Two men looking at each other across a dim room, one asking a question that has given "
      + "something away, the other very still.",
    u: ["“မင်းကို သူ ဘာတွေပြောထားလဲ” “ဘယ်သူလဲ”",
        "သူ စုစုကို ကြည့်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Fear Changed", l: "အိမ်ထဲ", w: ["ကျွန်တော်"],
    g: "ကျွန်တော့်ရင်ထဲက ကြောက်စိတ်က ပြောင်းသွားတယ်။",
    p: "Close on the narrator's face in candlelight as something reorganises behind his eyes — "
      + "still afraid, but of a different thing now.",
    u: ["အဲဒီမေးခွန်းကို ကြားလိုက်တဲ့အချိန်မှာ ကျွန်တော့်ရင်ထဲက ကြောက်စိတ်က ပြောင်းသွားတယ်။",
        "အခုအထိ ကျွန်တော် ကြောက်နေတာက အစ်မရဲ့လက်။",
        "အဲဒီနောက်မှာတော့ ကျွန်တော် ကိုဝင်းလှကို စောင့်ကြည့်နေမိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "What Happened Last Night", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "စုစု", "ကိုဝင်းလှ"],
    g: "ကျွန်တော် တိုးတိုးမေးလိုက်တယ်။ သူ့အဖေက ဖြတ်ပြောတယ်။",
    p: "A man leaning close to a child to ask something quietly, and a second man's hand entering "
      + "frame to interrupt.",
    u: ["“စုစု၊ မနေ့ညက ဘာဖြစ်တာလဲ” လို့ တိုးတိုးမေးလိုက်တယ်။",
        "သူ့အဖေက “ကလေးကို မမေးနဲ့။ သူ မြင်လည်း မမြင်ဘူး” လို့ ဖြတ်ပြောတယ်။"] },

  { t: "She Did Not Fall", l: "အိမ်ထဲ", w: ["စုစု", "ခင်နှင်း"],
    g: "စုစုက အမေ့လက်ကို ငုံ့ကြည့်ရင်း ပြောတယ်။",
    p: "A child looking down at the hand holding her wrist, speaking without raising her head, "
      + "everything else in the room out of focus.",
    u: ["စုစုက အမေ့လက်ကို ငုံ့ကြည့်နေတယ်။",
        "“အမေ လှေကားပေါ်က မကျဘူး”"],
    c: [[1, "bigstinger"]] },

  { t: "Someone Laughed Outside", l: "မဏ္ဍပ်",
    g: "အိမ်ထဲ တိတ်သွားတယ်။ အပြင်က ဖဲဝိုင်းမှာ လူတစ်ယောက် ရယ်နေတယ်။",
    p: "Seen from the dark doorway of the house: men under the awning laughing over cards, "
      + "completely unaware, warm light on them.",
    u: ["အိမ်ထဲမှာ တိတ်သွားတယ်။",
        "အပြင်က ဖဲဝိုင်းမှာတော့ လူတစ်ယောက် ရယ်နေတယ်။ အဝေးက ခွေးတစ်ကောင် ဟောင်တယ်။"] },

  { t: "Father Took Her", l: "အိမ်ထဲ", w: ["စုစု", "ကိုဝင်းလှ"],
    g: "“အဖေက ခေါ်သွားတာ” ကိုဝင်းလှ ကတ်ကြေးကို ပိုတင်းတင်း ဆုပ်လိုက်တယ်။",
    p: "A fist tightening around the handles of a pair of shears, knuckles pale, the man's face "
      + "out of frame above.",
    u: ["စုစုက ဆက်ပြောတယ်။ “အဖေက ခေါ်သွားတာ”",
        "ကိုဝင်းလှ လက်ထဲက ကတ်ကြေးကို ပိုတင်းတင်း ဆုပ်လိုက်တယ်။",
        "“နင် ဘာတွေပြောနေတာလဲ”"],
    c: [[0, "bigstinger"]] },

  { t: "After She Stopped Moving", l: "အိမ်ထဲ", w: ["စုစု", "ခင်နှင်း"],
    g: "ကလေးက ခေါင်းမော့မကြည့်ဘူး။ ဆက်ပြောတယ်။",
    p: "A child's face lowered, speaking evenly, not looking at anyone — the flatness of a fact "
      + "rather than an accusation.",
    u: ["ကလေးက ခေါင်းမော့မကြည့်ဘူး။",
        "“အမေ မလှုပ်တော့မှ ခေါ်သွားတာ”"],
    c: [[1, "bigstinger"]] },

  { t: "I Stood in Front of Her", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "ကိုဝင်းလှ", "စုစု"],
    g: "ကျွန်တော် စုစုရှေ့မှာ ဝင်ရပ်လိုက်တယ်။ ကိုဝင်းလှက ကတ်ကြေးကို ချမထားဘူး။",
    p: "A man stepping bodily between a seated child and another man who has not put down the "
      + "shears, the coffin to one side.",
    u: ["ကျွန်တော် စုစုရှေ့မှာ ဝင်ရပ်လိုက်တယ်။",
        "ကိုဝင်းလှက ကတ်ကြေးကို ချမထားဘူး။"] },

  { t: "His Voice Got Quieter", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ"],
    g: "သူ့အသံက တိုးလာတယ်။ ကျယ်ကျယ်အော်နေတုန်းကထက် ပိုကြောက်ဖို့ကောင်းတယ်။",
    p: "Close on a man speaking very quietly, face composed, which is more frightening than the "
      + "shouting was.",
    u: ["“မင်းတို့က ငါ့ကို လူဆိုးလုပ်ချင်နေတာလား”",
        "သူ့အသံက တိုးလာတယ်။ ကျယ်ကျယ်အော်နေတုန်းကထက် ပိုကြောက်ဖို့ကောင်းတယ်။",
        "“ကလေးက ဘာသိလို့လဲ။ အိပ်ချင်မူးတူးနဲ့ မြင်ချင်တာ မြင်နေတာ”"],
    c: [[1, "stinger"]] },

  { t: "Come Inside, Please", l: "မဏ္ဍပ်", w: ["ကျွန်တော်"],
    g: "ကျွန်တော် အပြင်ကို လှမ်းခေါ်တယ်။ ကိုဝင်းလှက တံခါးဘက်ကို ကြည့်တယ်။",
    p: "A man at an open doorway calling out toward the awning, half-turned so he can still watch "
      + "the room behind him.",
    u: ["ကျွန်တော် အပြင်ကို လှမ်းခေါ်တယ်။ “ဦးလေးတို့! ခဏဝင်လာပါဦး!”",
        "ကိုဝင်းလှက တံခါးဘက်ကို ကြည့်တယ်။"] },

  { t: "He Grabbed for Her", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ", "စုစု", "ကျွန်တော်"],
    g: "ကိုဝင်းလှက စုစုကို လှမ်းဆွဲတယ်။ ကျွန်တော် သူ့လက်ကို ပုတ်ထုတ်လိုက်တယ်။",
    p: "A grabbing hand knocked aside mid-reach, motion blur, a child recoiling on her stool "
      + "between the two men.",
    u: ["ပြီးတော့ စုစုကို လှမ်းဆွဲတယ်။",
        "ကျွန်တော် သူ့လက်ကို ပုတ်ထုတ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Stool Went Over", l: "အိမ်ထဲ", w: ["စုစု", "ကျွန်တော်"],
    g: "စုစုထိုင်နေတဲ့ခုံ ယိုင်သွားတယ်။ ကျွန်တော် ကလေးကို ဖမ်းလိုက်ရတယ်။",
    p: "A wooden stool tipping over sideways and a man catching a child under the arms, her other "
      + "arm pulled taut toward the coffin.",
    u: ["ရုန်းရင်းဆန်ခတ်ဖြစ်တော့ စုစုထိုင်နေတဲ့ခုံ ယိုင်သွားတယ်။",
        "ကျွန်တော် ကလေးကို ဖမ်းလိုက်ရတယ်။"] },

  { t: "The Hand Did Not Let Go", l: "အိမ်ထဲ", w: ["စုစု", "ကျွန်တော်", "ခင်နှင်း"],
    g: "အစ်မရဲ့လက်က မလွတ်ဘူး။ စုစုက လေထဲမှာ ခဏ တွဲလောင်းဖြစ်သွားတယ်။",
    p: "A child briefly suspended between a man's arms and the coffin, her wrist still held, her "
      + "feet off the floor. Held one beat.",
    u: ["အစ်မရဲ့လက်ကတော့ မလွတ်ဘူး။",
        "စုစုက လေထဲမှာ ခဏ တွဲလောင်းဖြစ်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Shoulder Rose", l: "အိမ်ထဲ", w: ["ခင်နှင်း"],
    g: "ခေါင်းထဲက အစ်မရဲ့ ပခုံးတစ်ဖက် မြောက်လာတယ်။ တစ်ကိုယ်လုံး တောင့်တောင့်ကြီးနဲ့။",
    p: "A woman's shoulder and upper arm lifting from inside a coffin, the whole body rigid and "
      + "level as it rises, eyes closed, face utterly calm.",
    u: ["အဲဒီအချိန် ခေါင်းထဲက အစ်မရဲ့ ပခုံးတစ်ဖက် မြောက်လာတယ်။",
        "တစ်ကိုယ်လုံး တောင့်တောင့်ကြီးနဲ့။",
        "ကိုဝင်းလှ မလှုပ်တော့ဘူး။"],
    c: [[0, "bigstinger"]] },

  { t: "Her Face Turned Toward Him", l: "အိမ်ထဲ", w: ["ခင်နှင်း", "ကိုဝင်းလှ"],
    g: "အစ်မရဲ့ခေါင်း ဖြည်းဖြည်း လှည့်လာတယ်။ မျက်လုံးတွေ ပိတ်ထားတုန်းပဲ။",
    p: "A dead woman's head turned to face a man across the room, her eyes still closed, her "
      + "expression completely serene. He is frozen in the foreground, out of focus.",
    u: ["အစ်မရဲ့ခေါင်းက ဖြည်းဖြည်း လှည့်လာတယ်။",
        "မျက်လုံးတွေ ပိတ်ထားတုန်းပဲ။ မျက်နှာကတော့ သူ့ယောက်ျားဘက်ကို တည့်တည့်။"],
    c: [[1, "bigstinger"]] },

  { t: "Don't Get Up", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ"],
    g: "ကိုဝင်းလှက ပါးစပ်ဖွင့်တယ်။ ပထမတစ်ခါ အသံမထွက်ဘူး။",
    p: "A man's mouth opening with no sound coming out, his whole face slack, backing into the "
      + "wall behind him.",
    u: ["ကိုဝင်းလှက ပါးစပ်ဖွင့်တယ်။ ပထမတစ်ခါ အသံမထွက်ဘူး။",
        "ဒုတိယတစ်ခါမှ “နင်… နင် မထနဲ့” လို့ ပြောတယ်။",
        "အစ်မက ဆက်ထလာတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "My Sister's Hand", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "ခင်နှင်း", "စုစု"],
    g: "ကျွန်တော် စုစုကို ရင်ခွင်ထဲ ထိန်းရင်း အစ်မရဲ့လက်ကို ကိုင်လိုက်တယ်။",
    p: "A man's hand closing over a dead woman's hand where it grips a child's wrist — three "
      + "hands together in candlelight.",
    u: ["ကျွန်တော် စုစုကို ရင်ခွင်ထဲမှာ ထိန်းထားရင်း အစ်မရဲ့လက်ကို ကိုင်လိုက်တယ်။",
        "ကျွန်တော့်အစ်မရဲ့လက်။"] },

  { t: "The Hand That Walked Me to School", l: null, w: ["ခင်နှင်းအရှင်"],
    g: "ငယ်ငယ်တုန်းက အမှတ်တရ — အစ်မက ကလေးကို လက်ဆွဲပြီး လမ်းလျှောက်နေတယ်။ နေ့ခင်းအလင်း။",
    p: "A warm daylight childhood memory: a ten-year-old girl leading her crying six-year-old brother "
      + "by the hand along a village path to school, seen from behind and slightly to one side.",
    u: ["ငယ်ငယ်က ကျွန်တော် ကျောင်းမသွားချင်လို့ ငိုရင် လမ်းတစ်လျှောက် ဆွဲခေါ်ခဲ့တဲ့လက်။",
        "အခု အေးစက်တောင့်တင်းနေတယ်။"] },

  { t: "I Will Take Su Su", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "ခင်နှင်း"],
    g: "ကျွန်တော် အသံတုန်တုန်နဲ့ ခေါ်လိုက်တယ်။",
    p: "A man speaking directly to a dead woman's face at close range, his own face wet, not "
      + "frightened of her.",
    u: ["“မမ” ကျွန်တော် အသံတုန်တုန်နဲ့ ခေါ်လိုက်တယ်။",
        "“စုစုကို ကျွန်တော် ယူမယ်”",
        "လက်ချောင်းတွေ မလှုပ်ဘူး။",
        "“ကျွန်တော်နဲ့ ခေါ်သွားမယ်။ ဒီအိမ်မှာ မထားခဲ့ဘူး”"] },

  { t: "One Finger at a Time", l: "အိမ်ထဲ", w: ["ခင်နှင်း", "စုစု"],
    g: "အစ်မရဲ့လက်က တစ်ချောင်းချင်း ပြေလာတယ်။ လက်သန်း၊ လက်သူကြွယ်၊ နောက်ဆုံး လက်မ။",
    p: "Extreme close-up of a hand releasing a child's wrist one finger at a time, the little "
      + "finger already lifted, the thumb still down.",
    u: ["စုစုက ကျွန်တော့်လည်ပင်းကို ဖက်လိုက်တယ်။",
        "အဲဒီတော့မှ အစ်မရဲ့လက်က တစ်ချောင်းချင်း ပြေလာတယ်။",
        "အရင်ဆုံး လက်သန်း။ ပြီးတော့ လက်သူကြွယ်။ နောက်ဆုံး လက်မ။",
        "သူ့သမီးကို ကျွန်တော့်လက်ထဲ လွှတ်ပေးလိုက်တယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "I Did Not Look Back", l: "အိမ်ထဲ", w: ["ကျွန်တော်", "စုစု"],
    g: "ကျွန်တော် ကလေးကို ပိုက်ပြီး တံခါးဘက် ပြေးတယ်။",
    p: "A man carrying a child toward a doorway with her head pressed into his shoulder, both "
      + "seen from behind, the room behind them dark.",
    u: ["ကျွန်တော် ကလေးကို ပိုက်ပြီး တံခါးဘက် ပြေးတယ်။",
        "နောက်ကနေ ကိုဝင်းလှ အော်သံ ကြားရတယ်။ “နှင်း! လွှတ်!”",
        "ကျွန်တော် မလှည့်ကြည့်ဘူး။ စုစုရဲ့ခေါင်းကို ကိုယ့်ပခုံးနဲ့ ဖိကပ်ထားလိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Nobody Went In", l: "မဏ္ဍပ်",
    g: "အပြင်ကလူတွေ ပြေးဝင်လာကြတယ်။ အိမ်ထဲရောက်တာနဲ့ ရပ်သွားကြတယ်။",
    p: "Two or three men crowded in a doorway having just run in, all of them stopped dead on the "
      + "threshold, looking into the room. We do not see what they see.",
    u: ["အပြင်ကလူတွေ ပြေးဝင်လာကြတယ်။",
        "ကျွန်တော်တို့ကို ဖြတ်ပြေးသွားတဲ့ လူတစ်ယောက်က အိမ်ထဲရောက်တာနဲ့ ရပ်သွားတယ်။",
        "နောက်တစ်ယောက်လည်း ရပ်သွားတယ်။ ဘယ်သူမှ ချက်ချင်း ဝင်မကူရဲကြဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "He Was Kneeling", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ", "ခင်နှင်း"],
    g: "ကိုဝင်းလှက ခေါင်းဘေးမှာ ဒူးထောက်နေတယ်။ အစ်မရဲ့လက်နှစ်ဖက်က သူ့လက်ကောက်ဝတ်နှစ်ဖက်ကို ဆုပ်ထားတယ်။",
    p: "A man on his knees beside a coffin with both his wrists held by a dead woman's hands, her "
      + "face very close to his, her eyes closed.",
    u: ["နောက်မှ ကျွန်တော် သိရတာက ကိုဝင်းလှက ခေါင်းဘေးမှာ ဒူးထောက်နေတယ်။",
        "အစ်မရဲ့ လက်နှစ်ဖက်က သူ့လက်ကောက်ဝတ်နှစ်ဖက်ကို ဆုပ်ထားတယ်။",
        "အစ်မရဲ့ မျက်နှာက သူ့မျက်နှာနဲ့ နီးနီးလေး။ မျက်လုံးတွေတော့ ပိတ်ထားတုန်းပဲ။"],
    c: [[1, "bigstinger"]] },

  { t: "Whichever Way He Turned", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ", "ခင်နှင်း"],
    g: "သူ ခေါင်းကို ဘယ်ညာ လှည့်နေရတယ်။ အစ်မရဲ့ခေါင်းကလည်း လိုက်လှည့်တယ်။",
    p: "A man twisting his face away to one side, and the dead woman's head turned the same way, "
      + "keeping level with his — her eyes closed throughout.",
    u: ["ကိုဝင်းလှက သူ့မျက်နှာကို မကြည့်ရဲလို့ ခေါင်းကို ဘယ်ဘက်၊ ညာဘက် လှည့်နေရတယ်။",
        "ဘယ်ဘက်လှည့်ရင် အစ်မရဲ့ခေါင်းကလည်း လိုက်လှည့်တယ်။ ညာဘက်လှည့်ရင်လည်း လိုက်လှည့်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "I Know. I Did It.", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ", "ခင်နှင်း"],
    g: "သူ့ပါးစပ်ကနေ စကားတွေ ထွက်နေတယ်။ တခြားဘယ်သူမှ အစ်မရဲ့အသံကို မကြားရဘူး။",
    p: "Close on a man's face mid-confession, eyes shut, tears and spit, the dead woman's face "
      + "just out of focus beside his.",
    u: ["သူ့ပါးစပ်ကနေတော့ “မပြောနဲ့တော့… ငါသိတယ်… ငါလုပ်တာ…” ဆိုတဲ့စကားတွေ ထွက်နေတယ်။",
        "အဲဒီအခန်းထဲမှာရှိတဲ့ တခြားဘယ်သူမှ အစ်မရဲ့အသံကို မကြားရဘူး။"],
    c: [[1, "finalstinger"]] },

  { t: "By Morning Her Hands Were Loose", l: "အိမ်ထဲ", w: ["ခင်နှင်း"],
    g: "မနက်ရောက်တော့ အစ်မရဲ့လက်တွေ ပြန်ပြေလာတယ်။ ရင်ဘတ်ပေါ်မှာ ပြန်ငြိမ်နေတယ်။",
    p: "Grey morning light through a shutter onto a woman's hands folded loosely on her chest "
      + "again, entirely relaxed, as though nothing had happened.",
    u: ["မနက်ရောက်တော့ အစ်မရဲ့လက်တွေ ပြန်ပြေလာတယ်။"] },

  { t: "He Looked at His Wrists", l: "အိမ်ထဲ", w: ["ကိုဝင်းလှ"],
    g: "ကိုဝင်းလှကို လူတွေ ဝိုင်းထိန်းထားတယ်။ သူ့လက်ကောက်ဝတ်တွေကိုပဲ ကြည့်နေတယ်။",
    p: "A man held between two others, not resisting, staring down at his own wrists — where "
      + "faint bands are visible.",
    u: ["ကိုဝင်းလှကို လူတွေ ဝိုင်းထိန်းထားခဲ့ရတယ်။",
        "ကျွန်တော်တို့ကို သူ နောက်တစ်ခါ မကြည့်တော့ဘူး။",
        "သူ့လက်ကောက်ဝတ်တွေကိုပဲ ကြည့်နေတယ်။"],
    c: [[2, "stinger"]] },

  { t: "A Hair Tie on Her Chest", l: "အိမ်ထဲ", w: ["စုစု", "ခင်နှင်း"],
    g: "သင်္ဂြိုဟ်တဲ့နေ့။ စုစုက အမေ့ရင်ဘတ်ပေါ်မှာ ဆံပင်စည်းကြိုးလေး တင်ပေးတယ်။",
    p: "A child's hand placing a small elastic hair tie on a dead woman's chest, daylight now, "
      + "the room full of white-clad mourners out of focus behind.",
    u: ["အစ်မကို သင်္ဂြိုဟ်တဲ့နေ့မှာ စုစု မငိုဘူး။",
        "အမေ့ရင်ဘတ်ပေါ်မှာ သူ့ဆံပင်စည်းကြိုးလေး တင်ပေးတယ်။",
        "ပြီးတော့ ကျွန်တော့်လက်ကို လာကိုင်တယ်။"] },

  { t: "She Lives With Me Now", l: "ဦးလေးအိမ်", w: ["ကျွန်တော်", "စုစု"],
    g: "မန္တလေးက အိမ်ခန်းလေး။ စုစုက ကျွန်တော်နဲ့ နေတယ်။",
    p: "A small plain flat with a child's few belongings newly added to a man's sparse room — a "
      + "school bag by the door, a folded blanket on the bed.",
    u: ["အဲဒီနေ့ကစပြီး စုစုက ကျွန်တော်နဲ့ နေတယ်။",
        "အစပိုင်းမှာ ညအိပ်ရင် ကျွန်တော့်လက်ကို အမြဲကိုင်ထားတယ်။"] },

  { t: "My Hand Slipped Loose", l: "ဦးလေးအိမ်", w: ["စုစု"],
    g: "တစ်ညမှာ လက်လွတ်သွားတယ်။ စုစု ချက်ချင်း နိုးလာတယ်။",
    p: "A child sitting bolt upright in the dark of a small bedroom, one hand reaching into empty "
      + "space beside her.",
    u: ["တစ်ညတော့ ကျွန်တော် လက်ပြင်ရင်း မတော်တဆ လွတ်သွားတယ်။",
        "စုစု ချက်ချင်း နိုးလာတယ်။ “ဦးလေး?”",
        "“ရှိတယ်။ ဒီမှာပဲ” သူ့လက်ကို ပြန်ကိုင်ပေးလိုက်တယ်။"],
    c: [[1, "stinger"]] },

  { t: "Were You Afraid of Her", l: "ဦးလေးအိမ်", w: ["ကျွန်တော်", "စုစု"],
    g: "စုစုက မေးတယ်။ ကျွန်တော် မလိမ်ချင်ဘူး။",
    p: "Two people lying awake in the dark, only their profiles lit by a window, a child's "
      + "question hanging between them.",
    u: ["ခဏကြာတော့ သူက မေးတယ်။ “ဦးလေးက အဲဒီည အမေ့ကို ကြောက်သွားတာလား”",
        "ကျွန်တော် မလိမ်ချင်ဘူး။ “နည်းနည်း”"] },

  { t: "I Was Afraid Too", l: "ဦးလေးအိမ်", w: ["စုစု"],
    g: "စုစုက ခေါင်းညိတ်တယ်။ နားလည်တဲ့ပုံစံနဲ့။ ပြီးတော့ မျက်လုံးမှိတ်လိုက်တယ်။",
    p: "A child nodding once in the dark with the composure of someone much older, then closing "
      + "her eyes.",
    u: ["စုစုက ခေါင်းညိတ်တယ်။ နားလည်တဲ့ပုံစံနဲ့။",
        "ပြီးတော့ မျက်လုံးမှိတ်လိုက်တယ်။ “သမီးလည်း ကြောက်တာပဲ”"] },

  { t: "That They Would Manage to Pry It Off", l: "ဦးလေးအိမ်", w: ["စုစု", "ကျွန်တော်"],
    g: "နောက်ဆုံးပုံ — ကလေးရဲ့လက်နဲ့ ဦးလေးရဲ့လက် တွဲထားတယ်။ မှောင်ထဲမှာ။",
    p: "Final composition: a child's small hand and a man's hand held together on a blanket in "
      + "near-darkness, fingers interlocked. Hold on the hands.",
    u: ["ကျွန်တော် သူ့စောင်ကို ပြင်ပေးမလို့ လုပ်တယ်။ သူက ဆက်ပြောတယ်။",
        "“အမေ့လက်ကို လူကြီးတွေ ဖြုတ်လို့ရသွားမှာကို။”"],
    c: [[1, "finalstinger"]] },
];

// Every card carries a concrete still-image plan. These directions prevent Flow from turning the
// quiet positional horror into a monster image, and keep the hand grip, eyeline and family geography
// continuous across the sequence.
export const DETAILS = [
  /* 1 */ "Respectful eye-level medium-wide establishing frame from the coffin's side. Khin Hnin lies level on her back with eyes and mouth gently closed, natural complexion, hands still loose and folded; show the coffin, candles and ordinary mourning room without Su Su or movement yet.",
  /* 2 */ "Three-quarter full-body view of Su Su on the low stool, her left hand reaching naturally over the coffin edge toward her mother. Keep both wrists free in this moment, her dusty-blue dress and calm profile readable, and avoid making the coffin tower grotesquely.",
  /* 3 */ "True macro on Khin Hnin's ordinary closed fingers completing a gentle but unmistakable grip around Su Su's LEFT wrist. Show the dusty-blue sleeve edge and natural hands only; no bruising, crushing, long nails, decay, blood, extra fingers or visible face.",
  /* 4 */ "Layered medium-wide action frame: the narrator reaches to lift Su Su while she braces calmly against him, her left arm still extending into Khin Hnin's closed hand. The aunt may recoil anonymously at frame edge; keep the narrator protective, Su Su dry-eyed and the deceased woman's face peacefully still.",
  /* 5 */ "Tight profile portrait of Su Su looking down toward her mother's closed-eyed face, with her held left forearm leading out of frame. Her cheeks remain dry, shoulders relaxed and expression absorbed rather than frightened; no tears, screaming or ghostly light.",
  /* 6 */ "Make the framed photograph itself the clear subject in ordinary daylight. Living Khin Hnin has open natural eyes, marigold blouse, swept-back hair and a familiar relaxed smile; no white funeral blouse, closed eyes, coffin, candlelight or uncanny expression.",
  /* 7 */ "Centered architectural shot from the bottom of the empty staircase. Show worn but intact treads, plain handrail and dim practical bulb with no person, body, blood, broken railing, fall silhouette or supernatural shadow—the allegation is narration, not visible fact.",
  /* 8 */ "Interior car medium close-up from the adjacent seat. The narrator sits alone, charcoal shirt visibly creased, phone dark and lowered, exhausted gaze toward the passing highway; no driver face, funeral objects, supernatural reflection or readable phone screen.",
  /* 9 */ "Respectful three-quarter view along the coffin: deceased Khin Hnin wears the white blouse and dark plum longyi, hair neatly swept back, narrow cloth beneath her chin, eyes and mouth gently closed. Natural skin, straight resting posture, no injury or horror makeup.",
  /* 10 */ "Close crop from shoulders to hands with Khin Hnin's fingers relaxed and symmetrically folded over the white blouse. Candlelight is soft and warm; no grip, child wrist, stiffness, discoloration, movement blur or extra hands yet.",
  /* 11 */ "Warm living-memory medium shot of Khin Hnin in her marigold blouse and plum longyi folding laundry while simultaneously brushing loose hair back with one active hand. Her eyes are open and lively; no funeral clothing, coffin, candles or ominous framing.",
  /* 12 */ "Overhead close action composition of several ordinary adult hands trying to open Khin Hnin's closed fingers one by one around Su Su's left wrist. Keep Su Su's hand small and relaxed, Khin Hnin's grip unchanged, and anatomy clear with no dislocation, injury or horror hand distortion.",
  /* 13 */ "Medium close-up on Su Su's face and left forearm as pulling makes her wince once; mild red pressure marks appear only at the wrist. Khin Hnin's natural hand remains closed and gentle-looking, Su Su stays dry-eyed, and no adult yanks violently on the child.",
  /* 14 */ "Eye-level two-person frame with Ko Win Hla raising one broad hand to stop the older woman speaking, coffin soft behind. Preserve his checked shirt, green longyi and grief-worn face; he is controlling but not snarling, monstrous or obviously villainous.",
  /* 15 */ "Tight child portrait at Su Su's seated height as her shoulders lift subtly at her father's raised voice and her gaze turns away. Her left arm remains extended toward the coffin, wrist held off-frame; no crying, screaming, melodramatic terror or adult hand on her body.",
  /* 16 */ "Extreme macro of Khin Hnin's index finger making one small comforting stroke along Su Su's left wrist while the other fingers retain the grip. Freeze the changed finger position cleanly; no motion trails, living skin flush, long nails, wound or written sound effect.",
  /* 17 */ "Wide practical caregiving frame: the narrator places a taller stool beside the coffin and supports Su Su as she transfers onto it without breaking the left-wrist connection. Show correct furniture geography, his careful hands and her calm cooperation; Khin Hnin remains level with eyes closed.",
  /* 18 */ "The narrator crouches at Su Su's eye level in a quiet medium two-shot, leaving physical space and resting one hand on the stool rather than pulling her. Her left arm continues over the coffin edge, both faces readable, with soft concern and no panic.",
  /* 19 */ "Shallow-focus over-coffin two-shot: Su Su looks past camera toward Ko Win Hla in the distant background, then lowers her eyes. Keep her dry-eyed profile sharp, father soft but recognizable, and the held left arm continuous without implying he is comforting her.",
  /* 20 */ "Wide late-night awning establishing frame with many empty stools, two dozing mourners and a few older men quietly playing cards. The fluorescent strip is practical and warm-neutral; no ghost, coffin, Su Su, dramatic fog or abandoned-funeral cliché.",
  /* 21 */ "Locked wide master of the funeral room showing exact geography: Su Su seated beside the coffin at center, narrator watchful on one side and Ko Win Hla separate on the other. Her left wrist remains held over the coffin edge; Khin Hnin lies peaceful and no unidentified fourth principal is invented.",
  /* 22 */ "Medium caregiving shot beside the coffin: narrator offers Su Su a small spoonful while she takes only a little, her free right hand near the plate and held left arm still extended behind. Preserve dry eyes, quiet fatigue and correct left/right hand continuity.",
  /* 23 */ "Close two-shot from narrator's side as Su Su looks up seriously at his question, not sleepily. Keep her held left arm visible leading toward the coffin and use the dim room naturally; no speech text, tears, supernatural reflection or threatening adult posture.",
  /* 24 */ "Table-height detail of Su Su's free RIGHT hand pushing the barely touched rice plate away while her face lowers beyond it. Her LEFT wrist must remain held toward the coffin and never swap sides; no spilled food, tantrum or crying.",
  /* 25 */ "Medium full-body reveal of Ko Win Hla emerging from the back room with closed cloth shears hanging safely downward at his side. Bulb glints once on metal; his expression is grimly practical, not gleeful, murderous or theatrical.",
  /* 26 */ "Balanced wide confrontation across the coffin: narrator rises between Ko Win Hla and seated Su Su, while Ko Win Hla holds the closed shears low. Su Su's left wrist remains held; preserve clear ownership of every hand and do not place blades against skin.",
  /* 27 */ "Tight side detail of Su Su's free RIGHT fist gripping the back of her father's checked shirt while her LEFT arm stays stretched into the coffin. Include enough of both bodies to prevent detached hands; she is firm and dry-eyed, not attacking him.",
  /* 28 */ "Close portrait of Ko Win Hla looking downward toward Su Su as his jaw sets and voice hardens. Keep grief and loss visible beneath control; no grin, rage caricature, red eyes, weapon near face or horror lighting.",
  /* 29 */ "Still side view of the closed-looking wooden coffin wall and rim while one candle flame trembles slightly from the faint interior contact. Do not add scratch marks, moving lid, hand emerging, text or visible cause—the sound remains off-screen.",
  /* 30 */ "Macro just inside the coffin rim: fingertips of Khin Hnin's free second hand rest newly against raw timber, nails merely touching. Skin remains natural and clean; no gouges, broken nails, decay, blood, crawling hand or open eyes.",
  /* 31 */ "Medium reaction shot of Ko Win Hla taking one involuntary step back, shears lowering loosely beside his green longyi. His eyes fix on the coffin and his face loses certainty; no one else moves toward him and no supernatural effect appears.",
  /* 32 */ "Symmetrical medium two-shot across the dim room: Ko Win Hla asks too-specific a question while the narrator becomes absolutely still. Keep the coffin and seated Su Su between their eyelines but secondary; no pointing, shouting or captioned dialogue.",
  /* 33 */ "Tight narrator portrait with candlelight separating his tired face from darkness as suspicion replaces confusion. Make the change legible through focused eyes and tightened jaw, not double exposure, flashback imagery or exaggerated fear.",
  /* 34 */ "Low intimate triangle: narrator leans near seated Su Su to ask quietly while Ko Win Hla's broad hand intrudes from frame edge to stop them. Su Su's held left wrist and calm face remain visible; hand ownership must be unambiguous.",
  /* 35 */ "Close profile of Su Su looking down at Khin Hnin's hand around her LEFT wrist as she states the fact evenly. Show her mother's serene closed-eyed face soft beyond the hand; no tears, accusation pose, ghostly glow or written dialogue.",
  /* 36 */ "View outward from the dark but ordinary doorway toward unaware men laughing softly over cards beneath the awning. Keep the warm social distance and funeral context; no one looks toward camera, no apparition and no sinister faces.",
  /* 37 */ "Tight detail of Ko Win Hla's fist whitening around the CLOSED shears handles, with checked shirt and Su Su's small free hand still gripping his shirt edge. Blades point safely down and stay away from skin; no cutting occurs.",
  /* 38 */ "Dry-eyed frontal close-up of Su Su speaking with her head lowered and the still-held left arm entering the lower frame. Her expression is older-than-seven composure, not emptiness, possession, anger or fear; Khin Hnin remains off-camera.",
  /* 39 */ "Wide action master: narrator steps squarely between seated Su Su and advancing Ko Win Hla, one protective open hand behind toward the child. Coffin stays to the side, shears remain low, and all three faces or profiles are spatially clear.",
  /* 40 */ "Close portrait of Ko Win Hla speaking more quietly, with controlled face, lowered chin and fixed eyes. Preserve ordinary grief-worn humanity and avoid villain lighting, smirk, weapon foreground, demonic eyes or visible corpse.",
  /* 41 */ "Medium doorway frame from the awning side: narrator calls for help while half-turned back toward the interior so he never loses sight of Su Su. Fluorescent exterior and candlelit room form natural contrast; no written shout or panic crowd yet.",
  /* 42 */ "Freeze the interception clearly: Ko Win Hla reaches toward Su Su, narrator's forearm knocks that hand sideways, and Su Su recoils on the stool with LEFT wrist still anchored to the coffin. Avoid fused arms, extra hands, shears near child or violent impact injury.",
  /* 43 */ "Wide side action shot as the stool tips and narrator catches Su Su securely under both arms. Her feet lift, but her LEFT arm draws taut toward the coffin without dislocation; show Ko Win Hla separate and keep the mother peaceful.",
  /* 44 */ "Clear lateral full-body composition: narrator supports Su Su in midair between himself and the coffin while Khin Hnin's closed hand still holds the child's LEFT wrist. Her feet are off the boards but body remains safe; no stretched limb, levitation or monstrous hand.",
  /* 45 */ "Respectful side view along the coffin as only Khin Hnin's shoulder and upper torso rise slightly while her body remains straight and supported. Eyes and mouth stay gently closed, face peaceful, limbs anatomically natural; no sitting bolt upright, arching, possession or decay.",
  /* 46 */ "Deep-focus confrontation: Khin Hnin's serene closed-eyed face has turned toward Ko Win Hla while he freezes large in the near foreground. The head rests at a plausible angle with cloth beneath chin; no open eyes, grimace, twisted neck or monster makeup.",
  /* 47 */ "Tight reaction portrait of Ko Win Hla backed against the wall, mouth barely open but unable to speak, shears dropping out of emphasis. His shock is human and guilty, with no comedy, screaming, spit, supernatural shadow or dead woman in focus.",
  /* 48 */ "Overhead macro of three correctly ordered hands: narrator's living hand gently covers Khin Hnin's closed hand, which still circles Su Su's small LEFT wrist. Natural anatomy and skin tones only; no extra fingers, crushing grip, blood or jewelry changes.",
  /* 49 */ "Warm daylight memory from behind and slightly to the side: ten-year-old Khin Hnin leads her six-year-old crying brother toward a village school by the hand. Preserve sibling resemblance and her recognizable hair with age-appropriate child features; no funeral clothes, coffin, teenager or adult narrator duplicate.",
  /* 50 */ "Intimate coffin-side two-shot: narrator bends close to Khin Hnin's peaceful closed-eyed face and promises through quiet tears. His hand remains over hers, fear replaced by trust; no kiss, open eyes, speaking corpse, caption or melodramatic wailing.",
  /* 51 */ "Extreme macro sequence-frame of Khin Hnin deliberately releasing Su Su's LEFT wrist: little finger lifted, next fingers loosening, thumb still gently touching. Wrist shows only faint pressure redness; no snapping, claw pose, decay or motion trail.",
  /* 52 */ "Rear medium-wide departure shot as narrator carries Su Su securely toward the open doorway, her face resting into his shoulder and both wrists now completely free. Keep the coffin distant behind, Khin Hnin unseen or peacefully still, and no hand reaching after them.",
  /* 53 */ "Exterior-side doorway frame: two or three ordinary men who ran in stop together at the threshold and stare into the unseen room. Their backs and profiles carry the reaction; camera never reveals a monster, body movement or sensational tableau.",
  /* 54 */ "Wide respectful reveal inside: Ko Win Hla kneels beside the coffin while both of Khin Hnin's natural hands hold his wrists, drawing him close to her serene closed-eyed face. Her supported torso may be slightly raised but remains anatomically calm; no choking, gore or attack expression.",
  /* 55 */ "Medium side two-shot: Ko Win Hla twists his face away while Khin Hnin's resting head has turned to the same side, maintaining alignment without opening her eyes. Keep neck angle plausible, mouth closed and hands on wrists; no repeated heads or contortion.",
  /* 56 */ "Tight confession portrait of Ko Win Hla with eyes squeezed shut and tears on an exhausted face, Khin Hnin's peaceful profile soft beside him. Use restrained moisture and grief; no excessive spit, screaming, written confession, open corpse eyes or horror makeup.",
  /* 57 */ "Grey-morning overhead close-up of Khin Hnin's two hands once again loose and folded naturally on her white blouse. Both wrists and fingers are relaxed, cool daylight replaces candles, and no child or husband is held; her face remains peacefully closed-eyed if visible.",
  /* 58 */ "Medium documentary frame of Ko Win Hla standing quietly between two ordinary men, looking at faint natural pressure bands on both wrists. He does not resist and nobody beats or drags him; no handcuffs, deep wounds, blood or police text.",
  /* 59 */ "Tender morning close-up: Su Su's small hand places her plain black hair elastic at the center of Khin Hnin's white-bloused chest. Mother's hands remain loose, eyes closed, mourners soft behind; Su Su stays dry-eyed and her left wrist is free.",
  /* 60 */ "Wide lived-in introduction to the Mandalay flat: narrator kneels to arrange Su Su's school bag and folded blanket while she stands quietly nearby in her dusty-blue dress. Show their new shared life through modest belongings; no funeral objects, ghost hand or ominous darkness.",
  /* 61 */ "Night medium shot of Su Su sitting suddenly upright on the low bed after a dream, LEFT hand reaching into genuinely empty space beside her. Her wrist is free, face alert but not screaming, and no mother, hand, apparition or coffin appears.",
  /* 62 */ "Quiet side-profile two-shot on the bed beneath the mosquito net: narrator and Su Su lie awake facing each other in dim city-window light. Her hands are free on the blanket, both expressions gentle and honest; no ghost silhouette, funeral lighting or written question.",
  /* 63 */ "Close child portrait as Su Su gives one small composed nod and lets her eyes close naturally for sleep. Keep her dry-eyed, safe and age-appropriate, with free left wrist visible; no trance, possession, smile of menace or hand entering frame.",
  /* 64 */ "Final overhead close-up on the blanket: Su Su's small LEFT hand and narrator's larger hand interlock voluntarily with a relaxed secure grip. Show part of dusty-blue sleeve and charcoal cuff for identity; no third hand, pressure marks, corpse skin, supernatural glow or fear.",
];

if (DETAILS.length !== SCENES.length)
  throw new Error(`hand detail count ${DETAILS.length} does not match scene count ${SCENES.length}`);
SCENES.forEach((scene, i) => { scene.d = `Detailed scene direction: ${DETAILS[i]}`; });
