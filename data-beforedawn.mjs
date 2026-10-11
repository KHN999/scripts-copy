/**
 * မိုးမလင်းခင် — BEFORE DAWN. SEASON 1 REFERENCE LIBRARY. 41 sheets.
 *
 * ⚠️ THIS IS NOT AN EPISODE. It is the production reference library from §7 of
 * the series bible, built as a board so the whole thing can be generated in
 * Flow in one pass and lives in the lab where the episodes can see it.
 *
 *   12 turnarounds · 6 expression strips · 4 puppet · 8 locations · 5 group · 6 props
 *
 * The twenty-seven REFERENCE PLATES attached to these shots come from
 * refs-beforedawn.mjs and are the thing that actually locks the series: every
 * episode board imports the same file, so a face described once is described
 * once forever. The forty-one SHEETS below are what you look at — a
 * turnaround you can hand to someone, a location you can match a new angle to.
 *
 * ⚠️ IT WILL AUDIT AS "TOO FRAGMENTED" AND THAT IS CORRECT. The units/shot
 * rule exists because a picture should hold for about three spoken lines. These
 * pictures are never spoken over and never rendered — the two lines on each are
 * labels, not narration. Ignore the pacing numbers on this board only.
 *
 * ⚠️ NOTHING HERE MAY ENCODE THE SEASON'S SECRET. One of the twelve is not a
 * person. Every sheet below builds all twelve identically as ordinary living
 * people — same lighting, same pose, same neutral treatment. See the header of
 * refs-beforedawn.mjs.
 */
import { CAST, PROPS, LOCS, CONT_PUPPET } from "./refs-beforedawn.mjs";

export { CAST, PROPS, LOCS };

/** The project title in the lab. */
export const TITLE = "မိုးမလင်းခင် — Reference Library";

const CAM = {
  sheet: "CHARACTER SHEET. Camera at chest height, straight on, far enough back to hold three "
    + "full-length figures side by side across the frame.",
  expr: "EXPRESSION STRIP. Camera at eye height, close enough that three head-and-shoulders crops "
    + "sit side by side across the frame.",
  puppet: "ON THE PUPPET. Camera level with it, close enough that it fills most of the frame.",
  stool: "ON THE STOOL. Camera at platform height, square to the low carved stool.",
  face: "ON THE CARVED FACE. Camera square to the face, filling the frame.",
  place: "ESTABLISHING. Camera at chest height, far enough back to hold the whole location.",
  group: "GROUP COMPOSITION. Camera at chest height facing the whole group, far enough back that "
    + "every person is complete in frame.",
  prop: "PROP PLATE. Camera square on to one object filling the frame.",
};

const TIME = {
  white: "LIGHTING: EVEN SOFT STUDIO LIGHT on a plain pure white seamless background. No "
    + "direction, no mood, no coloured light, no shadow cast onto the background.",
  grey: "LIGHTING: EVEN SOFT STUDIO LIGHT on a plain mid-grey seamless background. No direction, "
    + "no mood, no shadow cast onto the background.",
  lamp: "TIME: NIGHT, OIL LAMPS ONLY. Small steady orange flames close in, warm pools of light "
    + "that fall off fast, and heavy black everywhere past them. No electric light anywhere.",
  lantern: "TIME: NIGHT UNDER PAPER LANTERNS. Soft coloured light from strung lanterns overhead, "
    + "warm and uneven, with deep shadow between them.",
  moon: "TIME: NIGHT, OPEN MOONLIGHT. Cold blue-grey light from a high moon, edges clear, colour "
    + "drained almost to monochrome, shadows hard and black.",
  dark: "TIME: NIGHT, NO LAMP. Almost total darkness, only a thin wash of moonlight — shapes just "
    + "legible in outline, colour gone.",
};

const CONT =
  "⚠️ THIS IS A PRODUCTION REFERENCE IMAGE, NOT A FRAME OF THE FILM. It exists to fix what "
  + "something looks like so that later shots can match it. ⚠️ NO STORY, NO ATMOSPHERE, NO "
  + "DRAMA — nothing in these images is acting. ⚠️ MODERN EVERYDAY BURMESE CLOTHES ON THE TWELVE, "
  + "an old Myanmar village with no electricity around them.";

const CONT_SHEET =
  " ⚠️ THE THREE FIGURES ARE THE SAME PERSON PHOTOGRAPHED THREE TIMES, NOT THREE PEOPLE — "
  + "identical face, identical build, identical clothes down to every fold and fastening, "
  + "identical height, standing on the same line. ⚠️ EVENLY SPACED WITH CLEAR WHITE BETWEEN "
  + "THEM AND NONE OF THEM OVERLAPPING. ⚠️ NEUTRAL EXPRESSION IN ALL THREE, arms relaxed at the "
  + "sides, no posing and no acting. ⚠️ NO ROOM, NO FURNITURE, NO PROPS, NO TEXT, NO FLOOR OR "
  + "HORIZON LINE — nothing in the image but the figures on white.";

const CONT_EXPR =
  " ⚠️ THE THREE HEADS ARE THE SAME PERSON PHOTOGRAPHED THREE TIMES, NOT THREE PEOPLE — "
  + "identical face, identical hair, identical collar and clothing at the shoulders. ⚠️ EVENLY "
  + "SPACED WITH CLEAR BACKGROUND BETWEEN THEM AND NONE OF THEM OVERLAPPING. ⚠️ ALL THREE LOOK "
  + "STRAIGHT AT THE LENS AND ARE LIT IDENTICALLY. ⚠️ THE EXPRESSIONS ARE ORDINARY HUMAN "
  + "EXPRESSIONS HELD LIGHTLY — not extreme, not performed, not frightening. ⚠️ NOTHING IN THE "
  + "IMAGE BUT THE THREE HEADS ON A PLAIN BACKGROUND.";

const CONT_GROUP =
  " ⚠️ EVERY PERSON IN THIS PICTURE IS COMPLETE AND SEPARATE: nobody is cut off by the frame, "
  + "nobody is hidden behind anybody else, and every face is visible. ⚠️ EACH ONE KEEPS EXACTLY "
  + "THE FACE, HAIR, BUILD AND CLOTHES OF THEIR OWN REFERENCE PLATE — this is the picture that "
  + "proves twelve people are twelve different people. ⚠️ THEY ARE STANDING OR SITTING NORMALLY "
  + "AND NOBODY IS ACTING. ⚠️ NO ONE IS LIT DIFFERENTLY FROM ANYONE ELSE.";

const STYLE =
  "Photorealism, 16:9, 35mm grain, level camera, natural colour. Real skin, real cloth, real "
  + "wood and clay. ⚠️ KEEP EVERYTHING INSIDE THE CENTRAL VERTICAL THIRD OF THE FRAME WHERE THE "
  + "SUBJECT ALLOWS, so the 16:9 master crops to 9:16 without losing anybody. ⚠️ NO TEXT, NO "
  + "LABELS, NO CAPTIONS, NO WATERMARKS AND NO NUMBERING ANYWHERE IN THE IMAGE.";

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "I · ဇာတ်ကောင် ၁၂ ယောက်",
  13: "I-b · မျက်နှာအမူအရာ",
  19: "II · အနက်ရောင်ရုပ်သေး",
  23: "III · ရွာရဲ့ အဓိကနေရာ ၈ ခု",
  31: "IV · အုပ်စုပုံများ",
  36: "V · အရေးကြီးပစ္စည်းများ",
};

/** Turnaround body, parameterised by who is standing on the white. */
const sheet = (en) =>
  `⚠️ A CHARACTER TURNAROUND SHEET OF ${en} ON A PLAIN PURE WHITE SEAMLESS BACKGROUND. `
  + "⚠️ THREE FULL-LENGTH VIEWS OF THE SAME PERSON STAND SIDE BY SIDE ACROSS THE FRAME, head to "
  + "foot, on the same ground line: ⚠️ ON THE LEFT, FRONT ON TO THE LENS. ⚠️ IN THE MIDDLE, A "
  + "THREE-QUARTER TURN. ⚠️ ON THE RIGHT, A FULL SIDE PROFILE. Even soft light from the front, "
  + "arms relaxed at the sides, feet together, neutral expression in all three.";

const expr = (en) =>
  `⚠️ AN EXPRESSION STRIP OF ${en} ON A PLAIN MID-GREY SEAMLESS BACKGROUND. `
  + "⚠️ THREE HEAD-AND-SHOULDERS VIEWS OF THE SAME PERSON SIT SIDE BY SIDE ACROSS THE FRAME, all "
  + "three facing the lens and lit identically: ⚠️ ON THE LEFT, A NEUTRAL RESTING FACE. ⚠️ IN THE "
  + "MIDDLE, THE EYES WIDE AND THE BROWS RAISED. ⚠️ ON THE RIGHT, THE JAW SET AND THE BROWS DRAWN "
  + "DOWN. Even soft light, ordinary human expressions held lightly.";

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  /* ── I · ဇာတ်ကောင် ၁၂ ယောက် ──────────────────────────────────────────── */
  { t: "Thiha — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["သီဟ"], figure: true,
    g: "၀၁ · သီဟ — အသက် ၂၈။ ရှေ့၊ စောင်း၊ ဘေးတိုက် သုံးမျိုး။",
    p: sheet("THIHA, a Burmese man of twenty-eight in a slate-grey shirt and black trousers")
      + " ⚠️ THE SMALL PALE HEALED SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE IN THE FRONT AND "
      + "THREE-QUARTER VIEWS.",
    u: ["သီဟ — အသက် ၂၈။ ခဲရောင်ရှပ်အင်္ကျီ၊ အနက်ရောင်ဘောင်းဘီ။",
      "ဘယ်ဘက်မျက်ခုံးအထက်မှာ အမာရွတ်သေးသေးတစ်ခု ရှိတယ်။"] },

  { t: "Nanda — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["နန္ဒာ"], figure: true,
    g: "၀၂ · နန္ဒာ — အသက် ၂၉။ သူနာပြု။",
    p: sheet("NANDA, a Burmese woman of twenty-nine in a deep teal-green blouse and a black "
      + "htamein") + " ⚠️ HER HAIR STAYS IN THE SAME LOW PONYTAIL IN ALL THREE VIEWS AND THE "
      + "WRISTWATCH IS ON HER LEFT WRIST.",
    u: ["နန္ဒာ — အသက် ၂၉။ အစိမ်းရင့်ရောင်အင်္ကျီ၊ အနက်ရောင်ထဘီ။",
      "ဆံပင်ကို နောက်မှာ စုထားပြီး လက်ပတ်နာရီ ပါတယ်။"] },

  { t: "Ko Han Zaw — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["ကိုဟန်ဇော်"],
    figure: true,
    g: "၀၃ · ကိုဟန်ဇော် — အသက် ၄၂။ ကားမောင်းသမား။",
    p: sheet("KO HAN ZAW, a thickset Burmese man of forty-two in a blue-and-white checked shirt "
      + "over a white vest with a dark navy pasoe")
      + " ⚠️ THE SHORT STUBBLE BEARD IS CLEAR IN ALL THREE VIEWS.",
    u: ["ကိုဟန်ဇော် — အသက် ၄၂။ ကွက်စိပ်ရှပ်အင်္ကျီ၊ အပြာရင့်ပုဆိုး။",
      "မုတ်ဆိတ်ငုတ်တိုနဲ့ ခန္ဓာကိုယ် သန်မာတယ်။"] },

  { t: "Thet Mon — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["သက်မွန်"],
    figure: true,
    g: "၀၄ · သက်မွန် — အသက် ၃၆။ ကလေးတစ်ယောက်ရဲ့မိခင်။",
    p: sheet("THET MON, a Burmese woman of thirty-six in a dark maroon-red blouse and a brown "
      + "acheik-patterned htamein")
      + " ⚠️ THE HAIR STAYS IN THE SAME ROUND KNOT AND THE SILVER BANGLE IS ON HER RIGHT WRIST.",
    u: ["သက်မွန် — အသက် ၃၆။ အနီညိုရောင်အင်္ကျီ၊ အညိုရောင်ချိတ်ထဘီ။",
      "ဆံပင်ထုံးထားပြီး ညာလက်မှာ ငွေလက်ကောက် ဝတ်ထားတယ်။"] },

  { t: "U Ba Oo — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["ဦးဘဦး"],
    figure: true,
    g: "၀၅ · ဦးဘဦး — အသက် ၆၁။ အဖွဲ့ထဲမှာ အသက်အကြီးဆုံး။",
    p: sheet("U BA OO, a thin Burmese man of sixty-one in a buttoned off-white taikpon jacket and "
      + "a brown pasoe")
      + " ⚠️ THE FULL WHITE HAIR AND THE LONG NARROW FACE ARE CLEAR IN ALL THREE VIEWS.",
    u: ["ဦးဘဦး — အသက် ၆၁။ အဖြူညစ်ရောင်တိုက်ပုံအင်္ကျီ၊ အညိုရောင်ပုဆိုး။",
      "ဆံပင်ဖြူပြီး မျက်နှာရှည်တယ်။"] },

  { t: "Thazin — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["သဇင်"], figure: true,
    g: "၀၆ · သဇင် — အသက် ၂၆။",
    p: sheet("THAZIN, a slight Burmese woman of twenty-six in a pale powder-blue blouse and a dark "
      + "brown htamein")
      + " ⚠️ HER LONG STRAIGHT HAIR HANGS LOOSE IN ALL THREE VIEWS AND THE SMALL WOODEN PENDANT "
      + "SITS AT HER THROAT.",
    u: ["သဇင် — အသက် ၂၆။ အပြာနုရောင်အင်္ကျီ၊ အညိုရင့်ထဘီ။",
      "ဆံပင်ရှည်ဖြောင့်နဲ့ သစ်သားလည်ဆွဲသေးသေးတစ်ခု။"] },

  { t: "Tun Myat — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["ထွန်းမြတ်"],
    figure: true,
    g: "၀၇ · ထွန်းမြတ် — အသက် ၃၃။ လက်သမား။",
    p: sheet("TUN MYAT, a heavy-set powerfully built Burmese man of thirty-three in a dark "
      + "olive-green work shirt with the sleeves rolled above the elbow and a dark checked longyi")
      + " ⚠️ HE IS VISIBLY THE BROADEST PERSON IN THE SERIES.",
    u: ["ထွန်းမြတ် — အသက် ၃၃။ အစိမ်းမှောင်အင်္ကျီနဲ့ ကွက်လုံချည်။",
      "ခန္ဓာကိုယ်ထွားကျိုင်းပြီး လက်မောင်းထူတယ်။"] },

  { t: "Ye Aung — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["ရဲအောင်"],
    figure: true,
    g: "၀၈ · ရဲအောင် — အသက် ၃၉။ ရဲဝန်ထမ်းဟောင်း။",
    p: sheet("YE AUNG, a solidly built Burmese man of thirty-nine in a plain mid-grey zip jacket "
      + "over a dark T-shirt with dark trousers and black shoes")
      + " ⚠️ THE SHARPLY CUT, NEATLY COMBED HAIR IS THE TIDIEST IN THE GROUP.",
    u: ["ရဲအောင် — အသက် ၃၉။ မီးခိုးရောင်ဂျာကင်နဲ့ အနက်ရောင်ဘောင်းဘီ။",
      "ဆံပင်ကို သပ်သပ်ရပ်ရပ် ဖီးထားတယ်။"] },

  { t: "Min Khant — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["မင်းခန့်"],
    figure: true,
    g: "၀၉ · မင်းခန့် — အသက် ၂၅။ Delivery rider။",
    p: sheet("MIN KHANT, a wiry Burmese man of twenty-five in a bright red nylon delivery jacket "
      + "with the zip half down over a dark T-shirt, blue jeans and trainers")
      + " ⚠️ THE RED OF THE JACKET IS THE SAME RED IN ALL THREE VIEWS.",
    u: ["မင်းခန့် — အသက် ၂၅။ အနီရောင်ဂျာကင်နဲ့ ဂျင်းဘောင်းဘီ။",
      "ဒီအနီရောင်က သူတစ်ယောက်တည်းအတွက်ပဲ ဖြစ်တယ်။"] },

  { t: "Phyo Wai — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["ဖြိုးဝေ"],
    figure: true,
    g: "၁၀ · ဖြိုးဝေ — အသက် ၂၂။ တက္ကသိုလ်ကျောင်းသား၊ အငယ်ဆုံး။",
    p: sheet("PHYO WAI, a slight narrow-shouldered Burmese man of twenty-two in a plain ochre-brown "
      + "T-shirt and dark track trousers")
      + " ⚠️ THE GREY CANVAS BACKPACK IS ON BOTH SHOULDERS IN ALL THREE VIEWS AND IS CLEARLY "
      + "VISIBLE FROM THE SIDE.",
    u: ["ဖြိုးဝေ — အသက် ၂၂။ အဝါညိုရောင် တီရှပ်နဲ့ ကျောပိုးအိတ်။",
      "အဖွဲ့ထဲမှာ အငယ်ဆုံးဖြစ်ပြီး ပိန်သွယ်တယ်။"] },

  { t: "May Zin — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["မေဇင်"],
    figure: true,
    g: "၁၁ · မေဇင် — အသက် ၂၇။ ကျောင်းဆရာမ။",
    p: sheet("MAY ZIN, a neat Burmese woman of twenty-seven in a crisp white collared blouse "
      + "tucked into a dark grey htamein")
      + " ⚠️ SHE WEARS ROUND THIN-RIMMED SPECTACLES IN ALL THREE VIEWS AND IS THE ONLY PERSON IN "
      + "THE SERIES WHO WEARS GLASSES.",
    u: ["မေဇင် — အသက် ၂၇။ အဖြူရောင်အင်္ကျီနဲ့ မျက်မှန်ဝိုင်း။",
      "ဇာတ်ကောင်တွေထဲမှာ မျက်မှန်တပ်တဲ့သူက သူတစ်ယောက်တည်းပဲ။"] },

  { t: "Daw Khin Ma — turnaround", l: "ရွာအဝင်လမ်း", k: "sheet", tm: "white", w: ["ဒေါ်ခင်မာ"],
    figure: true,
    g: "၁၂ · ဒေါ်ခင်မာ — အသက် ၅၄။ ဈေးသည်။",
    p: sheet("DAW KHIN MA, a short solidly built Burmese woman of fifty-four in a mustard-yellow "
      + "blouse and a floral-printed htamein in greens and reds")
      + " ⚠️ THE THICK THANAKA ROUNDS ON HER CHEEKS ARE CLEAR IN THE FRONT AND THREE-QUARTER "
      + "VIEWS.",
    u: ["ဒေါ်ခင်မာ — အသက် ၅၄။ မုန်ညင်းရောင်အင်္ကျီ၊ ပန်းပွင့်ထဘီ။",
      "ပါးနှစ်ဖက်မှာ သနပ်ခါးကို ထူထူလိမ်းထားတယ်။"] },

  /* ── I-b · မျက်နှာအမူအရာ (အဓိက ၆ ယောက်) ──────────────────────────── */
  { t: "Thiha — expressions", l: "ရွာအဝင်လမ်း", k: "expr", tm: "grey", w: ["သီဟ"], expression: true,
    g: "သီဟ — မျက်နှာအမူအရာ သုံးမျိုး။",
    p: expr("THIHA, a Burmese man of twenty-eight in a slate-grey shirt") + "⚠️ THE SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE IN ALL THREE.",
    u: ["သီဟရဲ့ မျက်နှာအမူအရာ သုံးမျိုးကို ရိုက်ထားတယ်။", "ဘယ်ဘက်မျက်ခုံးအထက်က အမာရွတ်က သုံးပုံလုံးမှာ ပါရမယ်။"] },

  { t: "Nanda — expressions", l: "ရွာအဝင်လမ်း", k: "expr", tm: "grey", w: ["နန္ဒာ"], expression: true,
    g: "နန္ဒာ — မျက်နှာအမူအရာ သုံးမျိုး။",
    p: expr("NANDA, a Burmese woman of twenty-nine in a deep teal-green blouse"),
    u: ["နန္ဒာရဲ့ မျက်နှာအမူအရာ သုံးမျိုးကို ရိုက်ထားတယ်။", "ဆံပင်က သုံးပုံလုံးမှာ နောက်စုထားတဲ့ပုံစံ အတူတူဖြစ်ရမယ်။"] },

  { t: "Ko Han Zaw — expressions", l: "ရွာအဝင်လမ်း", k: "expr", tm: "grey", w: ["ကိုဟန်ဇော်"], expression: true,
    g: "ကိုဟန်ဇော် — မျက်နှာအမူအရာ သုံးမျိုး။",
    p: expr("KO HAN ZAW, a thickset Burmese man of forty-two in a blue-and-white checked shirt"),
    u: ["ကိုဟန်ဇော်ရဲ့ မျက်နှာအမူအရာ သုံးမျိုးကို ရိုက်ထားတယ်။", "မုတ်ဆိတ်ငုတ်တိုက သုံးပုံလုံးမှာ ထင်ရှားရမယ်။"] },

  { t: "Thet Mon — expressions", l: "ရွာအဝင်လမ်း", k: "expr", tm: "grey", w: ["သက်မွန်"], expression: true,
    g: "သက်မွန် — မျက်နှာအမူအရာ သုံးမျိုး။",
    p: expr("THET MON, a Burmese woman of thirty-six in a dark maroon-red blouse"),
    u: ["သက်မွန်ရဲ့ မျက်နှာအမူအရာ သုံးမျိုးကို ရိုက်ထားတယ်။", "ပါးနှစ်ဖက်က သနပ်ခါးက သုံးပုံလုံးမှာ အတူတူဖြစ်ရမယ်။"] },

  { t: "U Ba Oo — expressions", l: "ရွာအဝင်လမ်း", k: "expr", tm: "grey", w: ["ဦးဘဦး"], expression: true,
    g: "ဦးဘဦး — မျက်နှာအမူအရာ သုံးမျိုး။",
    p: expr("U BA OO, a thin Burmese man of sixty-one in a buttoned off-white taikpon jacket"),
    u: ["ဦးဘဦးရဲ့ မျက်နှာအမူအရာ သုံးမျိုးကို ရိုက်ထားတယ်။", "ဆံပင်ဖြူနဲ့ မျက်နှာရှည်က သုံးပုံလုံးမှာ အတူတူဖြစ်ရမယ်။"] },

  { t: "Thazin — expressions", l: "ရွာအဝင်လမ်း", k: "expr", tm: "grey", w: ["သဇင်"], expression: true,
    g: "သဇင် — မျက်နှာအမူအရာ သုံးမျိုး။",
    p: expr("THAZIN, a slight Burmese woman of twenty-six in a pale powder-blue blouse"),
    u: ["သဇင်ရဲ့ မျက်နှာအမူအရာ သုံးမျိုးကို ရိုက်ထားတယ်။", "လည်ပင်းက သစ်သားလည်ဆွဲက သုံးပုံလုံးမှာ ပါရမယ်။"] },

  /* ── II · အနက်ရောင်ရုပ်သေး ───────────────────────────────────────────── */
  { t: "The puppet — full figure", l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "grey", w: ["ရုပ်သေး"],
    puppet: true,
    g: "ရုပ်သေးရဲ့ ပုံစံအပြည့် — ကြိုးတွေနဲ့ တွဲလောင်းချိတ်ထားတဲ့ပုံ။",
    p: "⚠️ THE BLACK YOKE-THE MARIONETTE HANGING WHOLE FROM ITS WOODEN CONTROL BAR AT THE TOP OF "
      + "FRAME, shown head to foot against a plain mid-grey seamless background. ⚠️ THE STRINGS "
      + "ARE TAUT AND ALL OF THEM ARE VISIBLE, running from the bar down to the head, shoulders, "
      + "hands and knees. ⚠️ THE LIMBS HANG STRAIGHT AND LOOSE AND THE FEET ARE CLEAR OF THE "
      + "BOTTOM OF FRAME. ⚠️ IT IS PLAINLY A CARVED WOODEN OBJECT ON STRINGS. Even soft light, no "
      + "shadow cast onto the background.",
    u: ["အနက်ရောင်ရုပ်သေးရဲ့ ပုံစံအပြည့်။ ကြိုးတွေ အကုန်မြင်ရတယ်။",
      "သစ်သားအဆစ်တွေကို ထင်ထင်ရှားရှား ထုလုပ်ထားတယ်။"] },

  { t: "The puppet — the carved face", l: "ရွာလယ်ဇရပ်", k: "face", tm: "grey", w: ["ရုပ်သေး"],
    puppet: true,
    g: "အနီးကပ် မျက်နှာ — အသက်မဝင်တဲ့ သစ်သားမျက်နှာ။",
    p: "⚠️ THE CARVED FACE OF THE BLACK MARIONETTE FILLING THE FRAME, square on, against a plain "
      + "mid-grey seamless background. ⚠️ THE WOOD IS MATT BLACK WITH THE GRAIN AND THE CHISEL "
      + "MARKS VISIBLE ACROSS THE CHEEKS AND BROW. ⚠️ THE EYES ARE TWO SHALLOW CARVED CURVES "
      + "PAINTED OVER IN THE SAME BLACK — no white, no glint, nothing wet. ⚠️ THE MOUTH IS A "
      + "SHALLOW CLOSED CARVED LINE. ⚠️ THE FACE HAS NO EXPRESSION OF ANY KIND AND IS PLAINLY "
      + "WOOD. The pointed headdress at the top of frame. Even soft light.",
    u: ["မျက်နှာကို အနီးကပ်ရိုက်ထားတဲ့ပုံ။ ဘာအမူအရာမှ မရှိဘူး။",
      "မျက်လုံးတွေက အနက်ရောင်ပဲ၊ အဖြူမပါ၊ အရောင်မလက်ဘူး။"] },

  { t: "The puppet on its stool", l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp", w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    puppet: true,
    g: "ဇရပ်အလယ်က ထိုင်ခုံပေါ်မှာ ထိုင်နေတဲ့ပုံ — ပွဲကြေညာမယ့်နေရာ။",
    p: "⚠️ THE BLACK MARIONETTE SEATED ON THE LOW CARVED WOODEN STOOL IN THE MIDDLE OF THE ZAYAT "
      + "PLATFORM, lit by the oil lamps along the platform edge. ⚠️ IT IS PROPPED UPRIGHT WITH ITS "
      + "LEGS HANGING OVER THE FRONT OF THE STOOL AND ITS HANDS RESTING ON ITS OWN KNEES. ⚠️ THE "
      + "STRINGS RUN UP OUT OF THE TOP OF FRAME AND ARE SLACK. ⚠️ THE TEAK POSTS AND THE DARK "
      + "PLANK FLOOR AROUND IT ARE SHARP AND THE SPACE BEYOND FALLS OFF TO BLACK. ⚠️ THERE IS "
      + "NOBODY ELSE IN THE PICTURE.",
    u: ["ဇရပ်အလယ်က ထိုင်ခုံပေါ်မှာ ထိုင်နေတယ်။ ဆီမီးတွေက ဘေးမှာ လင်းနေတယ်။",
      "ပွဲတွေကို ကြေညာမယ့် အဓိကနေရာ ဖြစ်တယ်။"] },

  { t: "The puppet in the dark", l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "dark", w: ["ရုပ်သေး"],
    puppet: true,
    g: "အမှောင်ထဲက ပုံ — ပုံသဏ္ဌာန်ပဲ မြင်ရတယ်။",
    p: "⚠️ THE BLACK MARIONETTE IN ALMOST TOTAL DARKNESS, with only a thin wash of moonlight "
      + "catching one edge of it — ⚠️ THE LINE OF ONE SHOULDER, THE EDGE OF THE HEADDRESS AND THE "
      + "CURVE OF ONE HANGING HAND ARE THE ONLY THINGS THAT RESOLVE. ⚠️ THE REST IS FLAT BLACK "
      + "AGAINST FLAT BLACK AND THE FACE IS NOT VISIBLE AT ALL. ⚠️ ONE STRING CATCHES THE LIGHT AS "
      + "A FINE PALE LINE RUNNING UP OUT OF FRAME. Colour gone, grain heavy.",
    u: ["အမှောင်ထဲမှာ ပုံသဏ္ဌာန်အနားသတ်ပဲ မြင်ရတယ်။",
      "မျက်နှာကိုတော့ လုံးဝ မမြင်ရဘူး။"] },

  /* ── III · ရွာရဲ့ အဓိကနေရာ ၈ ခု ──────────────────────────────────────── */
  { t: "The village entrance road", l: "ရွာအဝင်လမ်း", k: "place", tm: "moon", w: ["ရွာအဝင်လမ်း"],
    g: "လူ ၁၂ ယောက် ပထမဆုံး ရောက်လာတဲ့နေရာ။",
    p: "⚠️ ESTABLISHING THE VILLAGE ENTRANCE ROAD IN OPEN MOONLIGHT, looking along it towards the "
      + "village. ⚠️ THE WEATHERED NAME-BOARD ON ITS TWO POSTS STANDS AT THE RIGHT OF THE ROAD, "
      + "the split-bamboo fencing running away on both sides and flat paddy beyond. ⚠️ THE TWO "
      + "CART RUTS IN THE PACKED EARTH LEAD THE EYE TO A FAINT ORANGE GLOW IN THE DISTANCE. ⚠️ "
      + "COLD BLUE-GREY LIGHT, HARD BLACK SHADOWS, NO ELECTRIC LIGHT ANYWHERE. ⚠️ THERE IS NOBODY "
      + "IN THE PICTURE.",
    u: ["ရွာအဝင်လမ်း — ဆိုင်းဘုတ်၊ ဝါးခြံစည်းရိုးနဲ့ လယ်ကွင်းတွေ။",
      "လူ ၁၂ ယောက် ပထမဆုံးရောက်လာတဲ့ နေရာဖြစ်တယ်။"] },

  { t: "The village zayat", l: "ရွာလယ်ဇရပ်", k: "place", tm: "lamp", w: ["ရွာလယ်ဇရပ်"],
    g: "ရွာလယ်ဇရပ်ကြီး — ပွဲတွေ ကြေညာမယ့်နေရာ။",
    p: "⚠️ ESTABLISHING THE VILLAGE ZAYAT FROM THE OPEN GROUND IN FRONT OF IT, lit by the oil "
      + "lamps along its platform edge. ⚠️ THE EIGHT HEAVY TEAK POSTS AND THE STEEP TIERED ROOF "
      + "ARE COMPLETE IN FRAME, the raised plank platform open on all sides. ⚠️ THE LOW CARVED "
      + "STOOL STANDS ALONE IN THE MIDDLE OF THE PLATFORM. ⚠️ THE OLD BANYAN BESIDE IT SHOWS ITS "
      + "HANGING AERIAL ROOTS. ⚠️ WARM ORANGE POOLS THAT FALL OFF FAST INTO BLACK. ⚠️ THERE IS "
      + "NOBODY IN THE PICTURE.",
    u: ["ရွာလယ်ဇရပ်ကြီး — ကျွန်းတိုင်ကြီးတွေ၊ ဆီမီးခွက်တွေနဲ့ ရုပ်သေးထိုင်ခုံ။",
      "ဘေးမှာ ရွာလယ်ညောင်ပင်ကြီး ရှိတယ်။"] },

  { t: "The pot ground", l: "မြေအိုးကွင်း", k: "place", tm: "lamp", w: ["မြေအိုးကွင်း"],
    g: "မြေအိုးကွင်း — Episode 1 · အိုးမကွဲစေနဲ့။",
    p: "⚠️ ESTABLISHING THE POT GROUND ACROSS THE BARE PACKED EARTH, lit by oil lamps set on the "
      + "ground. ⚠️ TWELVE IDENTICAL CLAY WATER POTS STAND IN A WIDE EVENLY SPACED RING, every one "
      + "upright, whole and alone on the earth. ⚠️ LOOSE STONES AND BROKEN BRICK LIE SCATTERED "
      + "BETWEEN THEM. ⚠️ THE RUINED BRICK STUPA STANDS AT THE FAR EDGE WITH ITS TOP BROKEN OFF. "
      + "⚠️ WARM LIGHT LOW ACROSS THE GROUND AND BLACK BEYOND THE RING. ⚠️ THERE IS NOBODY IN THE "
      + "PICTURE.",
    u: ["မြေအိုးကွင်း — မြေအိုး ၁၂ လုံး၊ ကျောက်ခဲတွေနဲ့ စေတီဟောင်း။",
      "ပထမဆုံးပွဲ အိုးမကွဲစေနဲ့ အတွက် နေရာ။"] },

  { t: "The bamboo grove", l: "ဝါးတော", k: "place", tm: "dark", w: ["ဝါးတော"],
    g: "ဝါးတောနဲ့ ရွာအနောက်ဆောင် — Episode 2 · မျက်စိပိတ်တမ်း။",
    p: "⚠️ ESTABLISHING THE BAMBOO GROVE ALONG THE NARROW EARTH PATH RUNNING INTO IT, in almost "
      + "total darkness. ⚠️ TALL CLOSE-PACKED BAMBOO LEANS OVER THE PATH FROM BOTH SIDES AND "
      + "CLOSES IT IN OVERHEAD, the leaves black against a faintly lighter sky. ⚠️ TWO ABANDONED "
      + "TIMBER HOUSES STAND BACK AMONG THE STEMS, grey and shuttered. ⚠️ THE RUINED BRICK "
      + "WELL-HEAD SITS BESIDE THE PATH WITH ITS COPING HALF COLLAPSED. ⚠️ ALMOST NO LIGHT REACHES "
      + "THE GROUND. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["ဝါးတော — မှောင်မည်းတဲ့ဝါးပင်တွေ၊ သစ်သားအိမ်ဟောင်းနဲ့ ရေတွင်းပျက်။",
      "ဒုတိယပွဲ မျက်စိပိတ်တမ်း အတွက် နေရာ။"] },

  { t: "The monastery refectory", l: "ဆွမ်းစားဆောင်", k: "place", tm: "lamp", w: ["ဆွမ်းစားဆောင်"],
    g: "ဘုန်းကြီးကျောင်းဆွမ်းစားဆောင် — Episode 3 · ဆွမ်းတစ်ပွဲ။",
    p: "⚠️ ESTABLISHING THE MONASTERY REFECTORY FROM ONE END OF THE LONG TEAK TABLE, lit only by "
      + "the oil lamps standing down its centre. ⚠️ TEN PLAIN WOODEN STOOLS ARE SET EVENLY ALONG "
      + "THE TABLE AND EVERY ONE OF THEM IS EMPTY. ⚠️ THE DARK TEAK WALLS AND FLOOR ARE SHARP IN "
      + "THE LAMPLIGHT AND THE HIGH CEILING AND BOTH ENDS OF THE ROOM FALL AWAY TO BLACK. ⚠️ THE "
      + "SHUTTERED OPENINGS ALONG ONE SIDE ARE CLOSED. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["ဆွမ်းစားဆောင် — စားပွဲရှည်ကြီး၊ ထိုင်ခုံ ၁၀ လုံးနဲ့ သစ်သားနံရံတွေ။",
      "တတိယပွဲ ဆွမ်းတစ်ပွဲ အတွက် နေရာ။"] },

  { t: "The festival ground", l: "ရွာပွဲခင်း", k: "place", tm: "lantern", w: ["ရွာပွဲခင်း"],
    g: "ရွာပွဲခင်း — Episode 4 · ရှင်ပြု။",
    p: "⚠️ ESTABLISHING THE FESTIVAL GROUND ACROSS THE OPEN EARTH UNDER THE STRUNG LANTERNS. ⚠️ "
      + "TALL GOLD CEREMONIAL UMBRELLAS STAND IN TWO ROWS FORMING A PROCESSION AVENUE RUNNING AWAY "
      + "FROM CAMERA, with coloured paper lanterns hung between bamboo poles above them. ⚠️ THE "
      + "CIRCLE OF DRUMS AND THE HSAING WAING STAND UNATTENDED ON ONE SIDE. ⚠️ RED AND GOLD "
      + "BUNTING IS TIED ALONG THE POLES AND EVERYTHING IS FULLY DRESSED AND READY. ⚠️ THERE IS "
      + "NOBODY IN THE PICTURE.",
    u: ["ရွာပွဲခင်း — ရွှေရောင်ထီးတွေ၊ အိုးစည်ဝိုင်း၊ မီးပုံးတွေ။",
      "စတုတ္ထပွဲ ရှင်ပြု အတွက် နေရာ။"] },

  { t: "The old teashop", l: "လက်ဖက်ရည်ဆိုင်", k: "place", tm: "lamp", w: ["လက်ဖက်ရည်ဆိုင်"],
    g: "လက်ဖက်ရည်ဆိုင်ဟောင်း — Episode 5 · လက်ဖက်တစ်ခွက်။",
    p: "⚠️ ESTABLISHING THE OLD TEASHOP FROM JUST INSIDE THE DOORWAY, lit dimly by two oil lamps. "
      + "⚠️ FOUR LOW WOODEN TABLES WITH SHORT PLASTIC STOOLS PUSHED IN FILL THE MIDDLE OF THE "
      + "ROOM, the wood dark and ringed with old cup marks. ⚠️ GLASS CUPS STAND UPSIDE DOWN IN "
      + "ROWS ON THE RACK BEHIND THE COUNTER BESIDE A BLACKENED KETTLE ON A COLD STOVE. ⚠️ THE "
      + "ROUND PENDULUM WALL CLOCK IN ITS DARK WOODEN CASE HANGS ON THE BACK WALL. ⚠️ THE CORNERS "
      + "ARE BLACK. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["လက်ဖက်ရည်ဆိုင်ဟောင်း — သစ်သားစားပွဲ၊ ဖန်ခွက်တွေနဲ့ ရှေးဟောင်းနာရီ။",
      "ပဉ္စမပွဲ လက်ဖက်တစ်ခွက် အတွက် နေရာ။"] },

  { t: "The great village gate", l: "ရွာတံခါးကြီး", k: "place", tm: "moon", w: ["ရွာတံခါးကြီး"],
    g: "ရွာတံခါးကြီး — Episode 6 · နောက်ဆုံးတံခါး။",
    p: "⚠️ ESTABLISHING THE GREAT GATE SQUARE ON FROM INSIDE THE VILLAGE IN OPEN MOONLIGHT, the "
      + "whole structure complete in frame. ⚠️ BOTH MASSIVE TEAK LEAVES ARE SHUT AND THE SINGLE "
      + "HEAVY TIMBER BAR LIES ACROSS THEM IN ITS IRON BRACKETS. ⚠️ THE CARVED POSTS AND THE SMALL "
      + "TIERED ROOF ABOVE ARE SHARP IN THE COLD LIGHT. ⚠️ THE IRON STRAPS AND STUDS ARE ORANGE "
      + "WITH RUST AND THE WOOD IS GREY AND SPLIT. ⚠️ THE BARE EARTH IN FRONT OF IT IS EMPTY AND "
      + "UNMARKED. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["ရွာတံခါးကြီး — ရွာအပြင်ကို ထွက်နိုင်တဲ့ တစ်ခုတည်းသောလမ်း။",
      "နောက်ဆုံးအပိုင်းရဲ့ အဓိကနေရာ ဖြစ်တယ်။"] },

  /* ── IV · အုပ်စုပုံများ ──────────────────────────────────────────────── */
  { t: "All twelve — the line-up", l: "ရွာအဝင်လမ်း", k: "group", tm: "grey", group: true,
    w: ["သီဟ", "နန္ဒာ", "ကိုဟန်ဇော်", "သက်မွန်", "ဦးဘဦး", "သဇင်"],
    g: "အဓိကဇာတ်ကောင် ၆ ယောက် — တန်းစီရပ်ပုံ။ တစ်ယောက်နဲ့တစ်ယောက် ကွဲပြားမှုကို စစ်ဆေးဖို့။",
    p: "⚠️ THE SIX CORE CHARACTERS STANDING IN ONE EVENLY SPACED ROW FACING THE LENS ON A PLAIN "
      + "MID-GREY SEAMLESS BACKGROUND, full length, head to foot. ⚠️ LEFT TO RIGHT: THIHA in the "
      + "slate-grey shirt, NANDA in the teal-green blouse, KO HAN ZAW in the checked shirt, THET "
      + "MON in the maroon blouse, U BA OO in the off-white taikpon, THAZIN in the pale blue "
      + "blouse. ⚠️ SIX CLEARLY DIFFERENT PEOPLE OF SIX DIFFERENT AGES AND BUILDS. Even soft "
      + "light, arms relaxed, neutral expressions.",
    u: ["အဓိကဇာတ်ကောင် ၆ ယောက်ကို တန်းစီပြီး ရိုက်ထားတဲ့ပုံ။",
      "ဘယ်နှစ်ယောက်မှ တစ်ယောက်နဲ့တစ်ယောက် မတူရဘူး။"] },

  { t: "The other six — the line-up", l: "ရွာအဝင်လမ်း", k: "group", tm: "grey", group: true,
    w: ["ထွန်းမြတ်", "ရဲအောင်", "မင်းခန့်", "ဖြိုးဝေ", "မေဇင်", "ဒေါ်ခင်မာ"],
    g: "အထောက်အကူဇာတ်ကောင် ၆ ယောက် — တန်းစီရပ်ပုံ။",
    p: "⚠️ THE SIX SUPPORTING CHARACTERS STANDING IN ONE EVENLY SPACED ROW FACING THE LENS ON A "
      + "PLAIN MID-GREY SEAMLESS BACKGROUND, full length, head to foot. ⚠️ LEFT TO RIGHT: TUN "
      + "MYAT the broad one in olive green, YE AUNG in the grey zip jacket, MIN KHANT in the "
      + "bright red delivery jacket, PHYO WAI the youngest with the grey backpack, MAY ZIN in the "
      + "white blouse and round glasses, DAW KHIN MA in the mustard-yellow blouse. ⚠️ SIX CLEARLY "
      + "DIFFERENT PEOPLE. Even soft light, arms relaxed, neutral expressions.",
    u: ["အထောက်အကူဇာတ်ကောင် ၆ ယောက်ကို တန်းစီပြီး ရိုက်ထားတဲ့ပုံ။",
      "အရောင်နဲ့ အသက်အရွယ်တွေက တစ်ယောက်နဲ့တစ်ယောက် ကွဲနေတယ်။"] },

  { t: "Twelve at the entrance road", l: "ရွာအဝင်လမ်း", k: "group", tm: "moon", group: true,
    w: ["ရွာအဝင်လမ်း", "သီဟ", "နန္ဒာ", "ကိုဟန်ဇော်", "ဦးဘဦး", "မင်းခန့်", "ဖြိုးဝေ"],
    g: "ရွာအဝင်လမ်းမှာ အုပ်စုလိုက် ရပ်နေပုံ — ပထမဆုံးမြင်ကွင်း။",
    p: "⚠️ A LOOSE GROUP OF SIX OF THE STRANGERS STANDING TOGETHER ON THE DIRT ROAD IN OPEN "
      + "MOONLIGHT, facing along it towards the faint orange glow of the village. ⚠️ THEY ARE "
      + "SPREAD ACROSS THE ROAD AT DIFFERENT DISTANCES AND EVERY ONE OF THEM IS COMPLETE IN FRAME "
      + "AND SEPARATE FROM THE OTHERS. ⚠️ MODERN CLOTHES AGAINST AN OLD VILLAGE — the red delivery "
      + "jacket is the brightest thing in the picture. ⚠️ THE NAME-BOARD AND THE BAMBOO FENCING "
      + "ARE BEHIND THEM. Cold blue-grey light, hard black shadows.",
    u: ["လူ ၁၂ ယောက် ရွာအဝင်လမ်းမှာ ရပ်နေတဲ့ပုံ။",
      "ခေတ်မီအဝတ်အစားတွေနဲ့ ရှေးဟောင်းရွာ — ဒီဆန့်ကျင်ဘက်က အဓိကပုံရိပ် ဖြစ်တယ်။"] },

  { t: "Twelve before the zayat", l: "ရွာလယ်ဇရပ်", k: "group", tm: "lamp", group: true,
    w: ["ရွာလယ်ဇရပ်", "သက်မွန်", "သဇင်", "ထွန်းမြတ်", "ရဲအောင်", "မေဇင်", "ဒေါ်ခင်မာ"],
    g: "ဇရပ်ရှေ့မှာ စုရုံးနေပုံ — ပွဲကြေညာချိန်။",
    p: "⚠️ SIX OF THE STRANGERS STANDING TOGETHER ON THE BARE EARTH IN FRONT OF THE ZAYAT, lit "
      + "from the front by the oil lamps along its platform edge. ⚠️ THEY ARE TURNED TOWARDS THE "
      + "PAVILION AND AWAY FROM CAMERA AT THREE-QUARTERS, loosely clustered, every one of them "
      + "complete in frame and separate. ⚠️ THE TEAK POSTS AND THE TIERED ROOF RISE BEHIND THEM "
      + "AND THE LOW STOOL IS VISIBLE ON THE PLATFORM. ⚠️ WARM ORANGE ON THEIR FACES AND BLACK "
      + "BEHIND THEM.",
    u: ["ဇရပ်ရှေ့မှာ စုရုံးနေတဲ့ပုံ။ ဆီမီးအလင်းက မျက်နှာတွေကို ထိနေတယ်။",
      "ပွဲတွေ ကြေညာတဲ့အချိန် အသုံးပြုမယ့် အုပ်စုပုံ။"] },

  { t: "Twelve at the long table", l: "ဆွမ်းစားဆောင်", k: "group", tm: "lamp", group: true,
    w: ["ဆွမ်းစားဆောင်", "သီဟ", "နန္ဒာ", "ကိုဟန်ဇော်", "ဦးဘဦး", "မေဇင်"],
    g: "စားပွဲရှည်မှာ ထိုင်နေပုံ — Episode 3 အတွက်။",
    p: "⚠️ FIVE OF THE STRANGERS SEATED ALONG ONE SIDE OF THE LONG TEAK TABLE IN THE REFECTORY, "
      + "lit only by the oil lamps standing down its centre. ⚠️ THEY ARE EVENLY SPACED ON THE "
      + "WOODEN STOOLS AND EVERY FACE IS VISIBLE AND SEPARATE. ⚠️ THE STOOLS ON THE FAR SIDE OF "
      + "THE TABLE ARE EMPTY. ⚠️ WARM LIGHT ACROSS THE TABLE AND THEIR HANDS, with the ends of the "
      + "room falling away to black behind them. ⚠️ NOBODY IS EATING AND NOBODY IS ACTING.",
    u: ["ဆွမ်းစားဆောင်က စားပွဲရှည်မှာ ထိုင်နေတဲ့ပုံ။",
      "တစ်ဖက်က ထိုင်ခုံတွေကတော့ လွတ်နေတယ်။"] },

  /* ── V · အရေးကြီးပစ္စည်းများ ─────────────────────────────────────────── */
  { t: "Prop — the clay pot", l: "မြေအိုးကွင်း", k: "prop", tm: "grey", w: ["မြေအိုး"],
    g: "မြေအိုး — Episode 1။",
    p: "⚠️ THE CLAY WATER POT STANDING UPRIGHT AND ALONE ON A PLAIN MID-GREY SEAMLESS BACKGROUND, "
      + "square on and filling the frame. ⚠️ THE CHIP IN THE RIM IS TURNED TOWARDS THE LENS AND "
      + "THE THROWING RINGS ROUND THE BELLY ARE VISIBLE. ⚠️ THE SURFACE IS DRY, MATT AND "
      + "COMPLETELY UNBROKEN APART FROM THAT CHIP. Even soft light, no shadow cast onto the "
      + "background.",
    u: ["မြေအိုး — ပထမပွဲမှာ ကာကွယ်ရမယ့် ပစ္စည်း။",
      "အဝနားမှာ အနည်းငယ် ပဲ့နေတာကလွဲလို့ တစ်ခုလုံး ကောင်းနေတယ်။"] },

  { t: "Prop — the blindfold", l: "ဝါးတော", k: "prop", tm: "grey", w: ["မျက်စိပိတ်ပဝါ"],
    g: "မျက်စိပိတ်ပဝါ — Episode 2။",
    p: "⚠️ THE STRIP OF DARK INDIGO COTTON CLOTH LYING LOOSELY COILED ON A PLAIN MID-GREY "
      + "SEAMLESS BACKGROUND, filling the frame. ⚠️ THE COARSE WEAVE AND THE UNEVEN FADED DYE "
      + "ALONG THE FOLDS ARE CLEAR, BOTH CUT ENDS FRAYED INTO LOOSE THREADS. ⚠️ IT IS CLEAN, DRY "
      + "AND COMPLETELY UNMARKED. Even soft light, soft shadow in the folds.",
    u: ["မျက်စိပိတ်ပဝါ — ဒုတိယပွဲမှာ သုံးမယ့် ပဝါ။",
      "အညိုနက်ရောင်နဲ့ အစွန်းနှစ်ဖက်က မျှင်တွေ ပြဲနေတယ်။"] },

  { t: "Prop — the rice plate", l: "ဆွမ်းစားဆောင်", k: "prop", tm: "grey", w: ["ထမင်းပန်းကန်"],
    g: "ထမင်းပန်းကန် — Episode 3။",
    p: "⚠️ THE WHITE ENAMEL RICE PLATE PHOTOGRAPHED STRAIGHT DOWN ON A PLAIN MID-GREY SEAMLESS "
      + "BACKGROUND, filling the frame. ⚠️ A SMALL ROUNDED MOUND OF PLAIN WHITE RICE SITS ON IT, "
      + "NEWLY SERVED AND UNTOUCHED, with a worn metal spoon resting beside it. ⚠️ THE CHIPPED "
      + "DARK-BLUE RIM AND THE CRAZED SCRATCHED ENAMEL ARE CLEAR. ⚠️ NOTHING ELSE IS ON THE PLATE. "
      + "Even soft light.",
    u: ["ထမင်းပန်းကန် — တတိယပွဲအတွက် ဆွမ်းပန်းကန်။",
      "ထမင်းက အသစ်ထည့်ထားပြီး မထိရသေးဘူး။"] },

  { t: "Prop — the novice's umbrella", l: "ရွာပွဲခင်း", k: "prop", tm: "grey", w: ["ရှင်လောင်းထီး"],
    g: "ရှင်လောင်းထီး — Episode 4။",
    p: "⚠️ THE CEREMONIAL SHINPYU UMBRELLA CLOSED AND STANDING UPRIGHT AGAINST A PLAIN MID-GREY "
      + "SEAMLESS BACKGROUND, filling the frame top to bottom. ⚠️ THE GOLD FOIL AND RED SILK "
      + "PANELS ARE GATHERED TIGHT AROUND THE TURNED WOODEN SHAFT with the fringe of small gold "
      + "tassels hanging from the folded edge. ⚠️ THE FOIL IS CREASED, DULLED AND RUBBED BARE IN "
      + "PLACES. Even soft light, no sparkle.",
    u: ["ရှင်လောင်းထီး — စတုတ္ထပွဲမှာ ပါဝင်မယ့် ရိုးရာထီး။",
      "ရွှေရောင်က မှေးမှိန်ပြီး နေရာအနှံ့ ပွန်းနေတယ်။"] },

  { t: "Prop — the teacup", l: "လက်ဖက်ရည်ဆိုင်", k: "prop", tm: "grey", w: ["လက်ဖက်ရည်ခွက်"],
    g: "လက်ဖက်ရည်ခွက် — Episode 5။",
    p: "⚠️ THE THICK CLEAR-GLASS TEASHOP CUP PHOTOGRAPHED SQUARE ON AT EYE LEVEL AGAINST A PLAIN "
      + "MID-GREY SEAMLESS BACKGROUND, filling the frame. ⚠️ IT HOLDS MILKY ORANGE-BROWN TEA ABOUT "
      + "TWO THIRDS FULL with a thin pale ring where the condensed milk has not fully mixed. ⚠️ "
      + "THE GLASS IS SCRATCHED AND SLIGHTLY CLOUDED AND THERE IS A TINY CHIP ON THE RIM. ⚠️ IT "
      + "STANDS IN A SMALL WET RING. Even soft light.",
    u: ["လက်ဖက်ရည်ခွက် — ပဉ္စမပွဲမှာ ရွေးရမယ့် ခွက်။",
      "ဖန်ခွက်က ခြစ်ရာတွေနဲ့ အဝနားမှာ အနည်းငယ် ပဲ့နေတယ်။"] },

  { t: "Prop — the palm-leaf manuscript", l: "ရွာလယ်ဇရပ်", k: "prop", tm: "grey", w: ["ပေစာဟောင်း"],
    g: "ပေစာဟောင်း — ရွာရဲ့ သမိုင်းကြောင်းကို သိရမယ့် ပစ္စည်း။",
    p: "⚠️ THE BUNDLE OF PALM-LEAF MANUSCRIPT PAGES LYING FLAT ON A PLAIN MID-GREY SEAMLESS "
      + "BACKGROUND, filling the frame, bound between its dark lacquered covers. ⚠️ THE TOP LEAF "
      + "IS SLID PARTLY OUT AND SHOWS LINES OF INCISED BURMESE SCRIPT BLACKENED WITH SOOT — ⚠️ THE "
      + "WRITING STAYS SOFT, WORN AND PARTLY RUBBED AWAY, READING AS MARKS RATHER THAN AS LEGIBLE "
      + "WORDS. ⚠️ THE LEAVES ARE HONEY-BROWN, DRY AND SPLIT AT THE EDGES. Even soft light.",
    u: ["ပေစာဟောင်း — ရွာရဲ့ အတိတ်ကို ဖော်ထုတ်ပေးမယ့် ပစ္စည်း။",
      "စာလုံးတွေက ပွန်းပြီး ဖတ်လို့ မရတော့ဘူး။"] },
];

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`sheet "${s.t}" has no camera for k="${s.k}"`);
  s.time = TIME[s.tm || "grey"];
  if (!s.time) throw new Error(`sheet "${s.t}" has no lighting for tm="${s.tm}"`);

  let cont = CONT;
  if (s.figure) cont += CONT_SHEET;
  if (s.expression) cont += CONT_EXPR;
  if (s.group) cont += CONT_GROUP;
  if (s.puppet) cont += CONT_PUPPET;
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
