/**
 * The character reference-plate clause.
 *
 * A reference plate is not a frame of the film — it is the photograph you attach
 * to every later prompt so the generator keeps the same person. When the plate
 * comes back with a room behind it, that room bleeds into everything referenced
 * from it, and picking the character back out is harder than it should be.
 *
 * So character and prop plates are shot the way a casting photo or a product
 * shot is: subject alone, square to the lens, on plain white, nothing else in
 * frame. Location plates are exempt — a place with a white background is not a
 * place.
 *
 * This is appended AFTER the character description, and says so explicitly,
 * because several descriptions carry rules about where the character may appear
 * in the film ("only in warm daylit memory images", "never shown injured").
 * Those rules govern the shots, not this plate, and without the override the two
 * instructions read as a contradiction.
 */
export const PLATE =
  "\n\n⚠️ THIS IS A REFERENCE PLATE, NOT A SCENE FROM THE FILM. Whatever the description above says "
  + "about where or how this subject appears in the story does not apply to this one image. Photograph "
  + "the subject ALONE, standing, FACING THE CAMERA SQUARE ON, head and body straight to the lens, "
  + "full figure in frame, neutral expression, arms relaxed at the sides, evenly and softly lit from "
  + "the front, against a PLAIN PURE WHITE SEAMLESS BACKGROUND. No room, no scenery, no furniture, no "
  + "props, no other people, no text, no shadow cast onto the background and no visible floor or "
  + "horizon line. Nothing in the image but the subject on white.";

/** Burmese gloss of the same clause, for the reference cards. */
export const PLATE_MM =
  " ⚠️ <b>ဒါက ရုပ်ပုံ reference ပဲ၊ ဇာတ်လမ်းထဲက မြင်ကွင်း မဟုတ်ဘူး။</b> အပေါ်မှာ ဘယ်လိုရေးထားထား "
  + "ဒီပုံတစ်ပုံအတွက်တော့ မသက်ဆိုင်ဘူး။ <b>တစ်ယောက်တည်း၊ ကင်မရာကို တည့်တည့်မျက်နှာမူပြီး၊ တစ်ကိုယ်လုံးပါအောင်၊ "
  + "နောက်ခံ အဖြူရောင်သက်သက်ပေါ်မှာ</b> ရိုက်ပါ။ အခန်း၊ ပရိဘောဂ၊ ပစ္စည်း၊ တခြားလူ၊ စာသား၊ နောက်ခံပေါ်ကျတဲ့အရိပ်၊ "
  + "ကြမ်းပြင်မျဉ်း — <b>ဘာမှ မပါရဘူး။</b>";
