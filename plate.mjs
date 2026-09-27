/**
 * The character reference-plate clause.
 *
 * A reference plate is not a frame of the film. It is the photograph attached to
 * every later prompt so the generator keeps the same person, and when it comes
 * back with a room behind it that room bleeds into everything referenced from
 * it. So the hard rule is the FIELD, not the pose: subject alone, plain white,
 * nothing else in the image.
 *
 * The pose is a separate question and front-on is only the default. Some
 * characters are identified by something a front view cannot show — a shirt torn
 * across the back, a mole under one ear — and for two of them a square-on
 * portrait contradicts the story outright: the mother in the fire piece may only
 * ever show her left side, and the drowned man's face is never legibly resolved
 * in any frame. Those carry a `pose` string on the character and it replaces the
 * default.
 *
 * The clause states that it overrides the description above it, because several
 * descriptions carry rules about where a character may appear in the film
 * ("only in warm daylit memory images"). Those govern the shots, not this plate.
 */

export const POSE_DEFAULT =
  "The subject stands facing the camera square on, head and body straight to the lens, full figure in "
  + "frame, neutral expression, arms relaxed at the sides";

/**
 * `group` is for the handful of plates that are a crowd rather than a person —
 * a row of wedding guests, a funeral party. Without it the clause below tells
 * the generator to photograph the subject ALONE with no other people, which
 * cancels the group it was just asked for.
 */
export const plate = (pose, group) =>
  "\n\n⚠️ THIS IS A REFERENCE PLATE, NOT A SCENE FROM THE FILM. Whatever the description above says "
  + "about where or how this subject appears in the story does not apply to this one image. Photograph "
  + `${group ? "THE WHOLE GROUP TOGETHER AND NOBODY ELSE" : "the subject ALONE"} against a PLAIN PURE `
  + `WHITE SEAMLESS BACKGROUND. ${pose || POSE_DEFAULT}, evenly and softly lit. No room, no scenery, `
  + `no furniture, no props, ${group ? "" : "no other people, "}no text, no shadow cast onto the `
  + "background and no visible floor or horizon line. Nothing in the image but "
  + `${group ? "these people" : "the subject"} on white.`;

/** The same note for a group plate, which is emphatically not one person alone. */
export const PLATE_MM_GROUP =
  " ⚠️ <b>ဒါက ရုပ်ပုံ reference ပဲ၊ ဇာတ်လမ်းထဲက မြင်ကွင်း မဟုတ်ဘူး။</b> "
  + "<b>ဒီ plate ကတော့ လူတစ်စုလုံးကို တစ်ပုံတည်းမှာ</b> — နောက်ခံ အဖြူရောင်သက်သက်ပေါ်မှာ ရိုက်ပါ။ "
  + "အခန်း၊ ပရိဘောဂ၊ ကုလားထိုင်၊ ပစ္စည်း၊ စာသား၊ ကြမ်းပြင်မျဉ် — <b>ဘာမှ မပါရဘူး။</b> "
  + "<b>ဘယ်လိုရပ်ရမလဲဆိုတာ prompt ထဲမှာ ရေးထားပါတယ်။</b>";

/** Burmese gloss for the reference cards. Deliberately silent on the angle — that is in the prompt. */
export const PLATE_MM =
  " ⚠️ <b>ဒါက ရုပ်ပုံ reference ပဲ၊ ဇာတ်လမ်းထဲက မြင်ကွင်း မဟုတ်ဘူး။</b> အပေါ်မှာ ဘယ်လိုရေးထားထား "
  + "ဒီပုံတစ်ပုံအတွက်တော့ မသက်ဆိုင်ဘူး။ <b>တစ်ယောက်တည်း၊ နောက်ခံ အဖြူရောင်သက်သက်ပေါ်မှာ</b> ရိုက်ပါ။ "
  + "အခန်း၊ ပရိဘောဂ၊ ပစ္စည်း၊ တခြားလူ၊ စာသား၊ နောက်ခံပေါ်ကျတဲ့အရိပ်၊ ကြမ်းပြင်မျဉ်း — <b>ဘာမှ မပါရဘူး။</b> "
  + "<b>ဘယ်ဘက်ကနေ ရိုက်ရမလဲဆိုတာကတော့ prompt ထဲမှာ ရေးထားပါတယ်</b> — အားလုံး ကင်မရာကို မျက်နှာမူစရာ မလိုဘူး။";
