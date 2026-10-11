/**
 * မိုးမလင်းခင် — BEFORE DAWN. SEASON 1, EPISODE 1: အိုးမကွဲစေနဲ့.
 *
 * Twelve strangers in Yangon get a message at 11:59 — "the night you repay the
 * debt you forgot has come" — and wake in an empty old village with the lamps
 * lit and no way out. A black marionette on the zayat platform gives them the
 * first game: each is handed a clay pot, and every pot must survive the hour.
 * Then it changes the rule. If not ONE pot is broken before the bell, all
 * twelve die. Then it changes it again: the names scratched under the pots are
 * people the holders have lost, and the owner of a broken pot pays with their
 * life — but the name underneath has a debt outstanding too.
 *
 * Under Thiha's pot is မေခ, his sister, dead eight years. Under Nanda's, her
 * father. Under Min Khant's, his brother. By the time the group works out that
 * the game is asking them to choose a person, somebody has already decided,
 * and Min Khant's pot goes over in the dark with a foot behind it.
 *
 * ⚠️ EPISODE 1 ENDS ON TWO OPEN QUESTIONS AND ANSWERS NEITHER: who kicked that
 * pot, and why Thiha hears his dead sister's voice ask him not to leave her.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * ⚠️ IT IMPORTS THE SERIES REFS AND DEFINES NOTHING. Every face, prop and
 * location comes from refs-beforedawn.mjs. See that file's header — in
 * particular the rule that NO PLATE MAY CONTAIN THE SECRET: one of the twelve
 * is not a person, and nothing in this episode frames anybody apart, lights
 * anybody differently, or holds on one face a beat longer than the others.
 *
 * FOUR RULES THIS EPISODE IS BUILT ON.
 *
 * 1. ⚠️ NOBODY DIES ON SCREEN. The first death is the spine of the episode and
 *    it is shown as ABSENCE — a pot in pieces, a red jacket on the ground with
 *    nobody in it, a gap in a ring of twelve. No body, no injury, no blood.
 *
 * 2. ⚠️ TWELVE IDENTICAL POTS, AND THE RING IS A COUNTING DEVICE. Every wide
 *    shot of the pot ground states how many are still standing. The audience
 *    should be able to count the episode's losses without being told.
 *
 * 3. ⚠️ THE PUPPET IS NEVER SHOWN MID-MOVEMENT. It is a carved wooden object
 *    in every frame; what is wrong is only ever where it is or how it is
 *    turned. See CONT_PUPPET in the refs file.
 *
 * 4. ⚠️ THE TWELVE ARE ALWAYS SEPARABLE. Every group shot keeps each person
 *    complete, unoccluded and lit the same as everybody else. This is a cast of
 *    twelve in one location for six episodes and the moment two of them blur
 *    the series stops working.
 */
import { CAST, PROPS, LOCS, CAM, TIME as T, CONT as C, CONT_PUPPET, STYLE }
  from "./refs-beforedawn.mjs";

export { CAST, PROPS, LOCS };

/** The project title in the lab. */
export const TITLE = "မိုးမလင်းခင် — အပိုင်း ၁ · အိုးမကွဲစေနဲ့";

/** Episode-local camera keys the series grammar does not carry. */
const CAM2 = {
  ...CAM,
  room: "IN THE YANGON ROOM. Camera at seated height in the corner, holding most of the room.",
  bed: "ON THE BED. Camera at mattress height beside it, close.",
  pot: "ON ONE POT. Camera at the pot's own height, close enough that it fills most of the frame.",
  ring: "ON THE RING OF POTS. Camera at chest height far enough back to hold the whole ring.",
  under: "UNDER THE POT. Camera square on to the upturned base of one pot, filling the frame.",
  ground: "ON THE GROUND. Camera a few inches above the bare earth, level along it.",
};

/** Episode-local lighting the series grammar does not carry. */
const TIME = {
  ...T,
  screen: "TIME: NIGHT IN A CITY ROOM, LIT ONLY BY A PHONE SCREEN. A flat cold white glow from "
    + "one small source close in, hard on whatever it touches and black everywhere past it.",
  black: "TIME: TOTAL DARKNESS. No light source at all — the frame is almost entirely black with "
    + "only the faintest edge of a shape just separable from it.",
  city: "TIME: NIGHT IN A YANGON ROOM. Weak orange street light through a grilled window and a "
    + "curtain, the room dim and legible, nothing dramatic.",
};

/**
 * ⚠️ THE RING OF POTS IS THE EPISODE'S CLOCK AND ITS BODY COUNT.
 *
 * Twelve identical pots, evenly spaced, and every wide shot says how many are
 * upright. Nobody is ever shown dying in this episode — the ring is how the
 * audience is told, and it has to be legible enough to count.
 */
const CONT_POTS =
  " ⚠️ EVERY CLAY POT IN THIS SHOT IS THE SAME OBJECT: unglazed red-brown earthenware about fifty "
  + "centimetres high, round-bellied with a narrow neck and a flared rim, a shallow chip missing "
  + "from the rim. ⚠️ THEY ARE IDENTICAL TO ONE ANOTHER AND EVENLY SPACED. ⚠️ A POT IS EITHER "
  + "WHOLE AND UPRIGHT OR IT IS IN LARGE FLAT SHARDS ON THE EARTH WHERE IT STOOD — there is no "
  + "middle state and nothing is cracked. ⚠️ NOTHING IS PAINTED OR WRITTEN ON THE OUTSIDE.";

const CONT_LOSS =
  " ⚠️ NOBODY DIES IN SHOT AND NO BODY IS EVER IN FRAME. A loss is shown by what is left behind "
  + "and by the space where somebody was: a pot in pieces, clothing on the ground with nobody in "
  + "it, a gap in a ring of people. ⚠️ THERE IS NO INJURY, NO BLOOD AND NOBODY LYING DOWN "
  + "ANYWHERE IN THIS FRAME.";

const CONT = C;

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "အဖွင့် · နောက်ဆုံး ဆယ်စက္ကန့်",
  13: "အခန်း ၁ · ည ၁၁ နာရီ ၅၉ မိနစ်",
  26: "အခန်း ၂ · တမာချောင်းရွာ",
  45: "အခန်း ၃ · ပြန်ရောက်တဲ့လမ်း",
  59: "အခန်း ၄ · အနက်ရောင်ရုပ်သေး",
  75: "အခန်း ၅ · ပထမပွဲ",
  89: "အခန်း ၆ · စည်းကမ်းအသစ်",
  104: "အခန်း ၇ · ဘယ်သူ့ကို ရွေးမလဲ",
  120: "အခန်း ၈ · မြေအိုးအောက်က နာမည်",
  136: "အခန်း ၉ · အားနည်းဆုံးလူ",
  153: "အခန်း ၁၀ · ပထမဆုံးသေဆုံးသူ",
  175: "အခန်း ၁၁ · အိုးကို ဘယ်သူက ခွဲခဲ့တာလဲ",
  187: "နောက်ဆုံးအခန်း · ဆယ့်နှစ်ယောက်မြောက်လူ",
};

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  /* ── အဖွင့် · နောက်ဆုံး ဆယ်စက္ကန့် ──────────────────────────────────── */
  { t: "Ten Seconds", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ **ဖွင့်ပုံ — “နောက်ထပ် ဆယ်စက္ကန့်အတွင်း အိုးတစ်လုံး မကွဲရင်… မင်းတို့ဆယ့်နှစ်ယောက်လုံး သေရမယ်။”**",
    p: "The black marionette seated on the low carved stool on the zayat platform, close, lit "
      + "from below and one side by the oil lamps along the platform edge. ⚠️ ITS HANDS REST ON "
      + "ITS OWN KNEES AND ITS LEGS HANG OVER THE FRONT OF THE STOOL. ⚠️ THE STRINGS RUN UP OUT "
      + "OF FRAME AND ARE SLACK. ⚠️ THE CARVED FACE HAS NO EXPRESSION AND IS PLAINLY WOOD. ⚠️ "
      + "THE TEAK POSTS AND PLANK FLOOR AROUND IT ARE SHARP AND EVERYTHING BEYOND FALLS OFF TO "
      + "BLACK. ⚠️ NOBODY ELSE IS IN THE PICTURE.",
    u: ["“နောက်ထပ် ဆယ်စက္ကန့်အတွင်း အိုးတစ်လုံး မကွဲရင်… မင်းတို့ဆယ့်နှစ်ယောက်လုံး သေရမယ်။”"] },

  { t: "We Looked at Each Other", l: "မြေအိုးကွင်း", k: "group", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "သီဟ", "နန္ဒာ", "ရဲအောင်", "ဒေါ်ခင်မာ", "သက်မွန်", "ဖြိုးဝေ"],
    g: "အားလုံး တစ်ယောက်မျက်နှာတစ်ယောက် ကြည့်လိုက်ကြတယ်။ ကျွန်တော့်လက်ထဲမှာ မြေအိုးတစ်လုံး ရှိနေတယ်။",
    p: "Six of the strangers standing spread across the bare pot ground, lit by oil lamps set on "
      + "the earth. ⚠️ EVERY ONE OF THEM IS HOLDING A CLAY POT AND EVERY ONE OF THEM HAS TURNED "
      + "THEIR HEAD TOWARDS SOMEBODY ELSE — no two are looking the same way. ⚠️ EVERY FACE IS "
      + "VISIBLE, COMPLETE AND LIT THE SAME AS EVERY OTHER. ⚠️ THE GROUND BETWEEN THEM IS BARE. "
      + "Warm low light on their faces and hands, black beyond them.",
    u: ["အဲဒီစကားကြားလိုက်တဲ့အချိန်မှာ ကျွန်တော်တို့အားလုံး တစ်ယောက်မျက်နှာတစ်ယောက် ကြည့်လိုက်ကြတယ်။",
      "ကျွန်တော့်လက်ထဲမှာ မြေအိုးတစ်လုံး ရှိနေတယ်။"] },

  { t: "Don't Touch My Pot", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", pots: true, w: ["သက်မွန်"],
    g: "“ကျွန်မအိုးကို မထိကြပါနဲ့… ကျွန်မမှာ သားလေးရှိသေးတယ်…”",
    p: "Close on Thet Mon on the pot ground, lit low and warm from the lamps on the earth. ⚠️ SHE "
      + "HAS A CLAY POT CRUSHED AGAINST HER CHEST WITH BOTH ARMS WRAPPED RIGHT ROUND IT. ⚠️ HER "
      + "SHOULDERS ARE HUNCHED FORWARD OVER IT AND HER CHIN IS DOWN AGAINST THE RIM. ⚠️ HER EYES "
      + "ARE WIDE AND MOVING AND HER MOUTH IS OPEN. The maroon blouse, the round knot of hair, "
      + "the silver bangle on the arm round the pot. Black behind her.",
    u: ["ဘေးမှာ ရပ်နေတဲ့ မိန်းမတစ်ယောက်က သူ့မြေအိုးကို ရင်ဘတ်နဲ့ဖိပြီး ဖက်ထားတယ်။",
      "“ကျွန်မအိုးကို မထိကြပါနဲ့… ကျွန်မမှာ သားလေးရှိသေးတယ်…”", "သူ့အသံတွေ တုန်နေတယ်။"] },

  { t: "Somebody Walked Towards the Old Woman", l: "မြေအိုးကွင်း", k: "two", tm: "lamp",
    pots: true, w: ["ဒေါ်ခင်မာ", "မြေအိုးကွင်း"],
    g: "အခြားတစ်ယောက်က အဘွားကြီးဆီ လျှောက်သွားတယ်။ “မလုပ်ပါနဲ့ကွယ်… အဘွားကို သနားကြပါဦး…”",
    p: "Two shot at chest height on the pot ground, ⚠️ DAW KHIN MA BACKING AWAY FROM CAMERA-RIGHT "
      + "WITH HER POT HELD LOW IN BOTH HANDS AND ONE FOOT ALREADY BEHIND HER. ⚠️ A MAN'S BACK AND "
      + "SHOULDER ARE AT THE NEAR EDGE OF FRAME, out of focus, advancing on her. ⚠️ BOTH ARE "
      + "COMPLETE IN FRAME. ⚠️ HER FACE IS TURNED UP AND HER MOUTH IS OPEN. The mustard-yellow "
      + "blouse, the floral htamein, the thanaka. Warm lamplight low across the earth.",
    u: ["အခြားတစ်ယောက်ကတော့ အနားမှာရှိတဲ့ အဘွားကြီးဆီ ဖြည်းဖြည်းချင်း လျှောက်သွားတယ်။",
      "အဘွားကြီးက နောက်ဆုတ်တယ်။", "“မလုပ်ပါနဲ့ကွယ်… အဘွားကို သနားကြပါဦး…”"] },

  { t: "Nine, Eight, Seven", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ ရုပ်သေးရဲ့အသံ — **“ကိုး…” “ရှစ်…” “ခုနစ်…”**",
    p: "The low carved stool on the zayat platform at chest height, the marionette seated on it, "
      + "lit by the lamps along the platform edge. ⚠️ IT HAS NOT MOVED AND IT IS NOT MID-ANYTHING "
      + "— the same posture, the same angle, the same slack strings. ⚠️ THE EIGHT TEAK POSTS RISE "
      + "AROUND IT AND THE TIERED ROOF IS LOST IN BLACK ABOVE. ⚠️ THE PLATFORM AROUND IT IS BARE "
      + "AND THERE IS NOBODY ELSE IN THE PICTURE. Warm orange close in, nothing past it.",
    u: ["အဲဒီအချိန် ရွာလယ်ဇရပ်ပေါ်က အနက်ရောင်ရုပ်သေးရုပ်ရဲ့ အသံ ထွက်လာတယ်။", "“ကိုး…”", "“ရှစ်…”",
      "“ခုနစ်…”"] },

  { t: "Just Break One", l: "မြေအိုးကွင်း", k: "group", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "ထွန်းမြတ်", "ရဲအောင်", "မင်းခန့်", "မေဇင်", "သဇင်"],
    g: "“အိုးတစ်လုံးလောက် ခွဲလိုက်ကြပါတော့!” — “ဘယ်သူ့အိုးကို ခွဲရမှာလဲ!”",
    p: "Five of the strangers on the pot ground, lit by the lamps on the earth. ⚠️ ALL FIVE ARE "
      + "SHOUTING AT ONCE AND EVERY MOUTH IS OPEN. ⚠️ THEY ARE TURNED IN FIVE DIFFERENT "
      + "DIRECTIONS AND NOT ONE OF THEM IS LOOKING AT ANOTHER. ⚠️ EVERY ONE STILL HAS BOTH ARMS "
      + "ROUND THEIR OWN POT. ⚠️ EVERY FACE IS COMPLETE, SEPARATE AND LIT THE SAME. Warm low "
      + "light, hard black between them.",
    u: ["တစ်ယောက်ယောက်က အော်လိုက်တယ်။", "“အိုးတစ်လုံးလောက် ခွဲလိုက်ကြပါတော့!”",
      "“ဘယ်သူ့အိုးကို ခွဲရမှာလဲ!”", "“ဘယ်သူ့ဟာဖြစ်ဖြစ် ခွဲလိုက်တော့!”"] },

  { t: "Strangers an Hour Ago", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "ခုနကအထိ တစ်ယောက်နဲ့တစ်ယောက် မသိကြတဲ့ လူစိမ်းတွေ။ အခုတော့ တစ်ယောက်ကိုတစ်ယောက် သတ်ဖို့အထိ စဉ်းစားနေကြပြီ။",
    p: "Close on Thiha on the pot ground, lit low and warm from below by the lamps on the earth. "
      + "⚠️ HE IS HOLDING HIS POT AGAINST HIS BODY WITH ONE ARM AND HIS HEAD IS TURNED HALF "
      + "ACROSS THE SCENE PAST CAMERA. ⚠️ HIS EYES ARE MOVING AND HIS MOUTH IS SHUT. ⚠️ THE SMALL "
      + "PALE SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE. The slate-grey shirt. Out-of-focus shapes of "
      + "other people far behind him, none of them readable.",
    u: ["ကျွန်တော် အိုးကို ပိုက်ထားရင်း ပတ်ဝန်းကျင်ကို ကြည့်လိုက်တယ်။",
      "ခုနကအထိ တစ်ယောက်နဲ့တစ်ယောက် မသိကြတဲ့ လူစိမ်းတွေ။",
      "အခုတော့ တစ်ယောက်ကိုတစ်ယောက် သတ်ဖို့အထိ စဉ်းစားနေကြပြီ။"] },

  { t: "Five, Four", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "ground", tm: "lamp", w: ["မြေအိုးကွင်း"],
    g: "“ငါး…” “လေး…” — ကျွန်တော့်ရှေ့က လူတစ်ယောက် ရုတ်တရက် အဘွားကြီးဆီ ပြေးဝင်သွားတယ်။",
    p: "A few inches above the bare earth of the pot ground, level along it, lit by lamps set on "
      + "the ground. ⚠️ ONE PAIR OF FEET IS CAUGHT MID-RUN ACROSS THE FRAME, both off the ground, "
      + "the earth kicked up behind them. ⚠️ ANOTHER PAIR OF FEET STANDS STILL AT THE FAR SIDE "
      + "WITH THE HEM OF A FLORAL HTAMEIN ABOVE THEM. ⚠️ THE GROUND BETWEEN THEM IS BARE. ⚠️ ONE "
      + "OIL LAMP SITS ON THE EARTH IN THE FOREGROUND, burning steadily.",
    u: ["“ငါး…”", "“လေး…”", "ကျွန်တော့်ရှေ့က လူတစ်ယောက်ဟာ ရုတ်တရက် အဘွားကြီးဆီ ပြေးဝင်သွားတယ်။"] },

  { t: "Don't", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“မလုပ်နဲ့!” — ကျွန်တော် အော်လိုက်တယ်။ ဒါပေမယ့် နောက်ကျသွားပြီ။",
    p: "Close on Thiha on the pot ground, lit low and warm. ⚠️ HIS MOUTH IS STRETCHED WIDE OPEN "
      + "ON A SHOUT AND HIS EYES ARE ENORMOUS AND FIXED PAST CAMERA. ⚠️ HE HAS TWISTED HARD "
      + "TOWARDS WHATEVER HE IS SHOUTING AT AND HIS POT HAS SWUNG OUT AWAY FROM HIS BODY IN ONE "
      + "HAND. ⚠️ HIS FREE ARM IS THROWN FORWARD AND OPEN. Warm lamplight hard up one side of his "
      + "face, black behind him.",
    u: ["“မလုပ်နဲ့!”", "ကျွန်တော် အော်လိုက်တယ်။", "ဒါပေမယ့် နောက်ကျသွားပြီ။"] },

  { t: "A Pot Broke", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "insert", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "⚠️ **ခွမ်း! — မြေအိုးတစ်လုံး ကွဲသွားတယ်။**",
    p: "Tight and low on the bare earth of the pot ground, lit by a lamp close by. ⚠️ ONE CLAY "
      + "POT IS IN PIECES — large curved shards of red-brown earthenware spread flat across the "
      + "earth where it came down, the biggest of them rocked over on its back. ⚠️ A RING OF "
      + "CLEANER EARTH SHOWS WHERE IT HAD BEEN STANDING. ⚠️ FINE PALE DUST IS STILL HANGING IN "
      + "THE AIR ABOVE THE SHARDS. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["ခွမ်း!", "မြေအိုးတစ်လုံး ကွဲသွားတယ်။",
      "အဲဒီအချိန်မှာပဲ လူတစ်ယောက်ရဲ့ အော်သံကြီး ထွက်ပေါ်လာတယ်။"] },

  { t: "Then Silence", l: "မြေအိုးကွင်း", k: "ring", tm: "lamp", pots: true, loss: true,
    w: ["မြေအိုးကွင်း"],
    g: "ပြီးတော့… အားလုံး တိတ်ဆိတ်သွားတယ်။",
    p: "The pot ground at chest height, far enough back to hold the whole ring, lit by lamps on "
      + "the earth. ⚠️ A RING OF STRANGERS STANDS AROUND IT AND EVERY ONE OF THEM HAS STOPPED "
      + "MOVING AND IS FACING THE SAME ONE PLACE ON THE GROUND. ⚠️ THAT PLACE HAS ONLY BROKEN "
      + "SHARDS ON IT AND NOBODY IS STANDING THERE. ⚠️ THERE IS A CLEAR GAP IN THE RING OF PEOPLE "
      + "WHERE SOMEBODY WAS. ⚠️ EVERY FACE IS SEPARATE AND LIT THE SAME. ⚠️ NOBODY IS LYING DOWN "
      + "ANYWHERE IN THE PICTURE.",
    u: ["ပြီးတော့…", "အားလုံး တိတ်ဆိတ်သွားတယ်။",
      "ကျွန်တော့်ဘဝမှာ အဲဒီညမတိုင်ခင်အထိ တစ်ခုတည်းကိုပဲ ယုံကြည်ခဲ့တယ်။"] },

  { t: "All You Need Is a Clay Pot", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "pot", tm: "lamp", pots: true,
    w: ["မြေအိုး"],
    g: "⚠️ **လူတစ်ယောက်ကို သတ်ဖို့ မြေအိုးတစ်လုံးပဲ လိုအပ်ခဲ့တယ်။**",
    p: "One clay pot standing upright and alone on the bare earth, close, lit low and warm by a "
      + "lamp on the ground beside it. ⚠️ IT IS COMPLETELY WHOLE AND UNBROKEN AND THE CHIP IN THE "
      + "RIM IS TURNED TOWARDS THE LENS. ⚠️ THE DRY MATT CLAY AND THE FAINT THROWING RINGS ROUND "
      + "THE BELLY ARE SHARP. ⚠️ NOTHING IS TOUCHING IT AND THERE IS NOBODY IN THE PICTURE. ⚠️ "
      + "THE GROUND AROUND IT IS BARE AND UNMARKED. Deep black beyond the lamplight.",
    u: ["လူတစ်ယောက်ကို သတ်ချင်ရင် လက်နက်တစ်ခုခု လိုအပ်တယ်ဆိုတာ။", "ဒါပေမယ့် အဲဒီညမှာတော့…",
      "လူတစ်ယောက်ကို သတ်ဖို့ မြေအိုးတစ်လုံးပဲ လိုအပ်ခဲ့တယ်။",
      "ဒီအဖြစ်အပျက်တွေ ဘယ်လိုစတင်ခဲ့လဲဆိုတာ ပြောပြရမယ်ဆိုရင်…",
      "နာရီဝက်လောက် အချိန်ပြန်ဆုတ်ရလိမ့်မယ်။"] },

  /* ── အခန်း ၁ · ည ၁၁ နာရီ ၅၉ မိနစ် ───────────────────────────────────── */
  { t: "My Name Is Thiha", l: "ရန်ကုန်အခန်း", k: "thiha", tm: "city", w: ["သီဟ"],
    g: "ကျွန်တော့်နာမည် သီဟပါ။ အသက် ၂၈။ ရန်ကုန်မှာ အလုပ်လုပ်နေတဲ့ သာမန်လူတစ်ယောက်။",
    p: "Close on Thiha lying back on the bed in his Yangon room, lit dimly by orange street light "
      + "through the grille and the curtain. ⚠️ HE IS ON HIS BACK WITH ONE ARM ACROSS HIS "
      + "FOREHEAD AND HIS EYES HALF CLOSED. ⚠️ HE IS STILL IN THE SLATE-GREY SHIRT, THE COLLAR "
      + "UNDONE AND THE FABRIC CREASED FROM A WHOLE DAY IN IT. ⚠️ THE SMALL PALE SCAR ABOVE HIS "
      + "LEFT EYEBROW IS VISIBLE. ⚠️ HE IS ORDINARY AND TIRED AND NOTHING IS WRONG YET.",
    u: ["ကျွန်တော့်နာမည် သီဟပါ။", "အသက် ၂၈ နှစ်ရှိပြီ။",
      "ရန်ကုန်မှာ အလုပ်လုပ်နေတဲ့ သာမန်လူတစ်ယောက်ပါပဲ။"] },

  { t: "I Came Home Tired", l: "ရန်ကုန်အခန်း", k: "room", tm: "city", w: ["ရန်ကုန်အခန်း"],
    g: "အလုပ်ကနေ ပြန်ရောက်ပြီး အိပ်ရာပေါ် လဲနေခဲ့တယ်။ ဖုန်းကို အားသွင်းထားရင်း မျက်လုံးမှိတ်မလို့ လုပ်နေတုန်း…",
    p: "The Yangon room from one corner at seated height, lit dimly by orange street light "
      + "through the grilled window and the thin curtain. ⚠️ THE BED IS RUMPLED AND A LAPTOP BAG "
      + "IS DROPPED ON THE TILED FLOOR BESIDE IT. ⚠️ A CHARGER CABLE RUNS FROM A SOCKET TO THE "
      + "BED. ⚠️ CLOTHES ARE OVER THE BACK OF THE PLASTIC CHAIR AND A MUG STANDS ON THE SILL. ⚠️ "
      + "THE CEILING FAN IS STILL. ⚠️ MODERN, ELECTRIC AND COMPLETELY ORDINARY. ⚠️ NOBODY IS IN "
      + "THE PICTURE.",
    u: ["အဲဒီညက ကျွန်တော် အလုပ်ကနေ အိမ်ပြန်ရောက်ပြီး အိပ်ရာပေါ်မှာ လဲနေခဲ့တယ်။",
      "တစ်နေကုန် အလုပ်လုပ်ထားလို့ တော်တော်ပင်ပန်းနေပြီ။",
      "ဖုန်းကို အားသွင်းထားရင်း မျက်လုံးမှိတ်မလို့ လုပ်နေတုန်း…"] },

  { t: "Eleven Fifty-Nine", c: [[1, "stinger"]], l: "ရန်ကုန်အခန်း", k: "insert", tm: "screen", w: ["ဖုန်း"],
    g: "တင်း! — ဖုန်းက အသံမြည်လာတယ်။ အချိန်က ည ၁၁ နာရီ ၅၉ မိနစ်။",
    p: "Straight down onto the phone lying face up on the rumpled bedsheet, filling the frame, "
      + "the charging cable still in the bottom of it. ⚠️ THE SCREEN HAS JUST LIT AND IT IS A "
      + "FLAT PURE WHITE FIELD EDGE TO EDGE. ⚠️ THERE IS NO STATUS BAR, NO CLOCK, NO APP FRAME "
      + "AND NO BUTTONS — nothing on it at all yet. ⚠️ THE WHITE GLOW IS THE ONLY LIGHT IN THE "
      + "PICTURE and it throws the weave of the sheet into hard relief around the phone. ⚠️ "
      + "NOBODY IS IN FRAME.",
    u: ["တင်း!", "ဖုန်းက အသံမြည်လာတယ်။", "ကျွန်တော် ဖုန်းကို ကောက်ကြည့်လိုက်တယ်။",
      "အချိန်က ည ၁၁ နာရီ ၅၉ မိနစ်။"] },

  { t: "The Debt You Forgot", c: [[1, "bigstinger"]], l: "ရန်ကုန်အခန်း", k: "insert", tm: "screen", w: ["ဖုန်း"],
    g: "⚠️ **“မင်း မေ့ထားတဲ့အကြွေးကို ပြန်ဆပ်ရမယ့်ည ရောက်ပြီ။”**",
    p: "Straight down onto the phone on the bedsheet, filling the frame. ⚠️ THE WHITE SCREEN NOW "
      + "CARRIES ONE SHORT LINE OF SMALL DARK BURMESE TEXT ACROSS THE MIDDLE OF IT — ⚠️ THE TEXT "
      + "STAYS SOFT AND SLIGHTLY OUT OF FOCUS, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ "
      + "THERE IS STILL NO SENDER, NO NUMBER, NO APP FRAME AND NO BUTTONS ANYWHERE ON THE SCREEN. "
      + "⚠️ A THUMB IS AT THE EDGE OF FRAME, out of focus, not touching the glass.",
    u: ["ဖုန်းမျက်နှာပြင်မှာ စာတစ်ကြောင်း ပေါ်နေတယ်။",
      "“မင်း မေ့ထားတဲ့အကြွေးကို ပြန်ဆပ်ရမယ့်ည ရောက်ပြီ။”", "ကျွန်တော် မျက်မှောင်ကြုတ်လိုက်တယ်။"] },

  { t: "No Number, No App", l: "ရန်ကုန်အခန်း", k: "thiha", tm: "screen", w: ["သီဟ"],
    g: "ဘာစာလဲ? ဘယ်သူပို့တာလဲ? ဖုန်းနံပါတ်လည်း မပါဘူး။",
    p: "Close on Thiha sitting up in the dark room with the phone held in front of him, ⚠️ HIS "
      + "FACE LIT ENTIRELY FROM BELOW BY THE FLAT WHITE SCREEN AND BLACK EVERYWHERE ELSE. ⚠️ HIS "
      + "BROWS ARE DRAWN HARD TOGETHER AND HIS EYES ARE FLICKING ACROSS THE SCREEN. ⚠️ ONE THUMB "
      + "IS MOVING ON THE GLASS. ⚠️ THE COLD WHITE LIGHT IS UNFLATTERING AND SHOWS EVERY LINE. "
      + "⚠️ THERE IS NOBODY ELSE IN THE ROOM.",
    u: ["ဘာစာလဲ?", "ဘယ်သူပို့တာလဲ?", "ပို့တဲ့ဖုန်းနံပါတ်လည်း မပါဘူး။",
      "ဘယ်အက်ပ်က ပို့တာလဲဆိုတာလည်း မပေါ်ဘူး။"] },

  { t: "It Wouldn't Turn Off", l: "ရန်ကုန်အခန်း", k: "hands", tm: "screen", w: ["ဖုန်း"],
    g: "မျက်နှာပြင်တစ်ခုလုံး အဖြူရောင်နဲ့ စာတစ်ကြောင်းတည်း။ ဖုန်းကို ပိတ်ကြည့်တယ်။ မပိတ်ဘူး။",
    p: "Close in on two hands holding the phone in the dark, the face out of frame, ⚠️ LIT "
      + "ENTIRELY BY THE WHITE SCREEN FROM BELOW. ⚠️ ONE THUMB IS PRESSED HARD AND FLAT ON THE "
      + "SIDE BUTTON AND THE KNUCKLE OF IT HAS GONE PALE. ⚠️ THE SCREEN IS STILL THE SAME FLAT "
      + "WHITE WITH THE SAME ONE SOFT LINE OF TEXT ON IT AND HAS NOT CHANGED. ⚠️ THE CHARGING "
      + "CABLE HANGS OUT OF THE BOTTOM. Black everywhere past the hands.",
    u: ["မျက်နှာပြင်တစ်ခုလုံး အဖြူရောင်နဲ့ စာတစ်ကြောင်းတည်း။", "ဖုန်းကို ပိတ်ကြည့်တယ်။", "မပိတ်ဘူး။",
      "ခလုတ်ကို ဖိထားတယ်။", "ဘာမှမဖြစ်ဘူး။"] },

  { t: "Somebody Has Been Waiting", c: [[1, "stinger"]], l: "ရန်ကုန်အခန်း", k: "insert", tm: "screen", w: ["ဖုန်း"],
    g: "“ဘာတွေဖြစ်နေတာလဲ…” — **“မင်းပြန်လာဖို့ လူတစ်ယောက် စောင့်နေတာ ကြာပြီ။”**",
    p: "Straight down onto the phone on the sheet, filling the frame. ⚠️ A SECOND SHORT LINE OF "
      + "SMALL DARK BURMESE TEXT HAS APPEARED BELOW THE FIRST ON THE SAME FLAT WHITE FIELD. ⚠️ "
      + "BOTH LINES STAY SOFT AND PARTLY OUT OF FOCUS, READING AS MARKS RATHER THAN AS LEGIBLE "
      + "WORDS. ⚠️ THERE IS STILL NO SENDER, NO TIMESTAMP AND NO APP FRAME. ⚠️ THE WHITE IS THE "
      + "ONLY LIGHT IN THE PICTURE.",
    u: ["“ဘာတွေဖြစ်နေတာလဲ…”", "ကျွန်တော် တစ်ယောက်တည်း ညည်းလိုက်တယ်။",
      "အဲဒီအချိန်မှာ စာတစ်ကြောင်း ထပ်ပေါ်လာတယ်။",
      "“မင်းပြန်လာဖို့ လူတစ်ယောက် စောင့်နေတာ ကြာပြီ။”"] },

  { t: "Who Is It", l: "ရန်ကုန်အခန်း", k: "thiha", tm: "screen", w: ["သီဟ"],
    g: "“ဘယ်သူလဲ?” — ကျွန်တော် အသံထွက်ပြီး မေးလိုက်မိတယ်။ အဖြေမရဘူး။",
    p: "Close on Thiha in the dark room lit only from below by the phone screen, ⚠️ HIS MOUTH "
      + "OPEN ON A WORD SPOKEN OUT LOUD TO AN EMPTY ROOM. ⚠️ HIS EYES HAVE COME OFF THE SCREEN "
      + "AND ARE DIRECTED UP AND ACROSS INTO THE DARK PAST CAMERA. ⚠️ THE WHITE LIGHT CATCHES "
      + "ONLY HIS CHIN, HIS LOWER LIP AND THE UNDERSIDE OF HIS BROW and the rest of his head is "
      + "lost. ⚠️ THE ROOM BEHIND HIM IS COMPLETELY BLACK AND NOTHING IS IN IT.",
    u: ["ကျွန်တော့်စိတ်ထဲ တစ်မျိုးဖြစ်သွားတယ်။", "“ဘယ်သူလဲ?”",
      "ကျွန်တော် အသံထွက်ပြီး မေးလိုက်မိတယ်။", "အဖြေမရဘူး။"] },

  { t: "Twelve Is Full", c: [[1, "bigstinger"]], l: "ရန်ကုန်အခန်း", k: "insert", tm: "screen", w: ["ဖုန်း"],
    g: "⚠️ **“ဆယ့်နှစ်ယောက် ပြည့်ပြီ။”**",
    p: "Straight down onto the phone on the sheet, filling the frame. ⚠️ THE TWO EARLIER LINES "
      + "HAVE GONE AND THE FLAT WHITE FIELD NOW CARRIES ONE SHORT LINE OF SMALL DARK BURMESE TEXT "
      + "ALONE IN THE MIDDLE OF IT. ⚠️ IT STAYS SOFT AND PARTLY OUT OF FOCUS, READING AS MARKS "
      + "RATHER THAN AS LEGIBLE WORDS. ⚠️ NO SENDER, NO FRAME, NO BUTTONS, NOTHING ELSE ON THE "
      + "SCREEN AT ALL. ⚠️ THE WHITE IS THE ONLY LIGHT AND IT IS VERY SLIGHTLY BRIGHTER THAN "
      + "BEFORE.",
    u: ["ဒါပေမယ့် ဖုန်းမျက်နှာပြင်ပေါ်မှာ နောက်ဆုံးစာတစ်ကြောင်း ပေါ်လာတယ်။",
      "“ဆယ့်နှစ်ယောက် ပြည့်ပြီ။”"] },

  { t: "The Power Went", l: "ရန်ကုန်အခန်း", k: "room", tm: "black", w: ["ရန်ကုန်အခန်း"],
    g: "အဲဒီအချိန် — တစ်အိမ်လုံး မီးပျက်သွားတယ်။ ပတ်ဝန်းကျင်တစ်ခုလုံး မှောင်မည်းသွားတယ်။",
    p: "The Yangon room from one corner at seated height in total darkness. ⚠️ THE FRAME IS "
      + "ALMOST ENTIRELY BLACK. ⚠️ THE ONLY THING SEPARABLE FROM IT IS THE FAINTEST GREY OUTLINE "
      + "OF THE WINDOW GRILLE, and even the street light beyond it has gone. ⚠️ THE SHAPE OF THE "
      + "BED AND THE CHAIR ARE JUST BARELY DISTINGUISHABLE AS SLIGHTLY DIFFERENT BLACKS. ⚠️ "
      + "THERE IS NO LAMP, NO SCREEN AND NO GLOW ANYWHERE. ⚠️ NOBODY IS VISIBLE IN THE PICTURE.",
    u: ["အဲဒီအချိန်—", "တစ်အိမ်လုံး မီးပျက်သွားတယ်။", "ပတ်ဝန်းကျင်တစ်ခုလုံး မှောင်မည်းသွားတယ်။"] },

  { t: "The Phone Was Dead Too", l: "ရန်ကုန်အခန်း", k: "hands", tm: "black", w: ["ဖုန်း"],
    g: "ဖုန်းမီးဖွင့်ဖို့ ကြိုးစားလိုက်တယ်။ ဒါပေမယ့် ဖုန်းကလည်း ပိတ်သွားပြီ။",
    p: "Close in on two hands holding the phone in total darkness, ⚠️ THE SCREEN COMPLETELY BLACK "
      + "AND DEAD. ⚠️ THE ONLY THING THAT RESOLVES IS THE FAINTEST GREY EDGE ALONG THE TOP OF THE "
      + "PHONE AND ONE KNUCKLE, and everything else is black. ⚠️ A THUMB IS STILL PRESSED ON THE "
      + "SIDE BUTTON. ⚠️ THERE IS NO LIGHT SOURCE OF ANY KIND IN THE PICTURE. Heavy grain, colour "
      + "entirely gone.",
    u: ["ကျွန်တော် ဖုန်းမီးဖွင့်ဖို့ ကြိုးစားလိုက်တယ်။", "ဒါပေမယ့် ဖုန်းကလည်း ပိတ်သွားပြီ။"] },

  { t: "A Drum", c: [[1, "stinger"]], l: "ရန်ကုန်အခန်း", k: "bed", tm: "black", w: ["သီဟ"],
    g: "အခန်းအပြင်ဘက်ကနေ ထူးဆန်းတဲ့အသံ — ဒုန်း… ဗုံသံ။",
    p: "Close on Thiha sitting bolt upright on the bed in total darkness. ⚠️ ONLY THE VERY FAINT "
      + "GREY EDGE OF ONE SHOULDER, THE LINE OF HIS JAW AND THE CURVE OF HIS EAR SEPARATE "
      + "THEMSELVES FROM THE BLACK. ⚠️ HIS HEAD IS TURNED HARD TOWARDS THE DOOR OF THE ROOM. ⚠️ "
      + "NO FEATURE OF HIS FACE RESOLVES AND HIS EYES ARE NOT VISIBLE. ⚠️ THERE IS NOTHING ELSE "
      + "IN THE PICTURE AND NO LIGHT SOURCE ANYWHERE. Heavy grain, colour gone.",
    u: ["ပြီးတော့ အခန်းအပြင်ဘက်ကနေ ထူးဆန်းတဲ့အသံတစ်သံ ကြားလိုက်ရတယ်။", "ဒုန်း…", "ဗုံသံ။",
      "ကျွန်တော် ကုတင်ပေါ်ကနေ ထထိုင်လိုက်တယ်။"] },

  { t: "The Third Beat", c: [[1, "bigstinger"]], l: "ရန်ကုန်အခန်း", k: "room", tm: "black", w: ["ရန်ကုန်အခန်း"],
    g: "⚠️ ဒုန်း… ဒုတိယတစ်ချက်။ အသံက တော်တော်နီးတယ်။ **ဒုန်း! — ပြီးတော့ — ကျွန်တော် ဘာမှမမြင်ရတော့ဘူး။**",
    p: "⚠️ A FRAME THAT IS ALMOST ENTIRELY BLACK. The Yangon room in total darkness, and the "
      + "faint grey outline of the window grille that was just separable before has now gone too. "
      + "⚠️ THERE IS NOTHING IN THE PICTURE THAT RESOLVES INTO AN OBJECT AT ALL — no bed, no "
      + "chair, no window, no edge. ⚠️ ONLY A FAINT UNEVEN TEXTURE OF GRAIN ACROSS THE WHOLE "
      + "FRAME. ⚠️ NO LIGHT SOURCE AND NOBODY IN IT.",
    u: ["ဒုန်း…", "ဒုတိယတစ်ချက်။", "အဲဒီအသံက တော်တော်နီးတယ်။",
      "အိမ်ထဲမှာ တစ်ယောက်ယောက် ဗုံတီးနေသလိုပဲ။", "ဒုန်း!", "တတိယတစ်ချက်။", "ပြီးတော့—",
      "ကျွန်တော် ဘာမှမမြင်ရတော့ဘူး။"] },

  /* ── အခန်း ၂ · တမာချောင်းရွာ ────────────────────────────────────────── */
  { t: "Cold Air on My Face", l: "ရွာအဝင်လမ်း", k: "thiha", tm: "moon", w: ["သီဟ"],
    g: "မျက်နှာပေါ်ကို လေအေးတစ်ချက် တိုက်လာလို့ သတိပြန်ဝင်လာတယ်။ ပထမဆုံးရလိုက်တာ မြေစိုနံ့။",
    p: "Close on Thiha lying on his back on the packed earth of the dirt road in open moonlight, "
      + "⚠️ SEEN FROM DIRECTLY ABOVE. ⚠️ HIS EYES ARE STILL CLOSED AND HIS FACE IS SLACK AND "
      + "TURNED SLIGHTLY TO ONE SIDE. ⚠️ FINE PALE DUST IS ON HIS CHEEK AND IN HIS HAIR. ⚠️ HE IS "
      + "STILL IN THE SAME CREASED SLATE-GREY SHIRT. ⚠️ THE EARTH AROUND HIS HEAD IS BARE AND "
      + "UNMARKED. Cold blue-grey light, colour drained almost to monochrome.",
    u: ["မျက်နှာပေါ်ကို လေအေးတစ်ချက် တိုက်လာလို့ ကျွန်တော် သတိပြန်ဝင်လာတယ်။",
      "ပထမဆုံးရလိုက်တာ မြေစိုနံ့။", "ပြီးတော့ ပိုးကောင်တွေအော်သံ။"] },

  { t: "I Opened My Eyes", l: "ရွာအဝင်လမ်း", k: "ground", tm: "moon", w: ["ရွာအဝင်လမ်း"],
    g: "မျက်လုံးဖွင့်ကြည့်လိုက်တယ်။ အပေါ်မှာ လမင်းကြီးတစ်စင်း။ ဘေးပတ်ပတ်လည်မှာ လယ်ကွင်းတွေ။",
    p: "⚠️ LOOKING STRAIGHT UP FROM GROUND LEVEL at a wide clear night sky with a full moon high "
      + "in it, very bright and hard-edged. ⚠️ THE TOPS OF TALL DRY PADDY STALKS LEAN IN FROM "
      + "EVERY EDGE OF THE FRAME, black against the sky. ⚠️ THERE IS NO CLOUD, NO ELECTRIC LIGHT "
      + "AND NO BUILDING ANYWHERE IN THE PICTURE. ⚠️ NOBODY IS IN FRAME. Cold blue-grey light, "
      + "colour almost gone.",
    u: ["ကျွန်တော် မျက်လုံးဖွင့်ကြည့်လိုက်တယ်။", "အပေါ်မှာ လမင်းကြီးတစ်စင်း။",
      "ဘေးပတ်ပတ်လည်မှာ လယ်ကွင်းတွေ။"] },

  { t: "I Was on a Dirt Road", l: "ရွာအဝင်လမ်း", k: "wide", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "သီဟ"],
    g: "ကျွန်တော် မြေသားလမ်းပေါ်မှာ လဲနေတာ။ “ဟာ…” — အလန့်တကြား ထထိုင်လိုက်တယ်။",
    p: "Wide along the dirt road at chest height in open moonlight. ⚠️ THIHA IS SITTING UP ON THE "
      + "PACKED EARTH IN THE MIDDLE OF THE ROAD WITH ONE HAND BRACED BEHIND HIM. ⚠️ THE TWO CART "
      + "RUTS RUN AWAY FROM HIM TOWARDS A FAINT ORANGE GLOW IN THE DISTANCE. ⚠️ SPLIT-BAMBOO "
      + "FENCING AND FLAT PADDY RUN AWAY ON BOTH SIDES. ⚠️ HE IS THE ONLY PERSON IN THE PICTURE. "
      + "Cold light, hard black shadows, no electric light anywhere.",
    u: ["ကျွန်တော် မြေသားလမ်းပေါ်မှာ လဲနေတာ။", "“ဟာ…”", "ကျွန်တော် အလန့်တကြား ထထိုင်လိုက်တယ်။"] },

  { t: "Where Is This", l: "ရွာအဝင်လမ်း", k: "group", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "မေဇင်", "ဖြိုးဝေ", "သဇင်", "ထွန်းမြတ်"],
    g: "“ဒါ ဘယ်နေရာလဲ?” — ကျွန်တော့်အနားမှာ လူတွေ ရှိနေတယ်။",
    p: "Four of the strangers scattered along the dirt road in open moonlight, each a good "
      + "distance from the others. ⚠️ ONE IS STILL LYING FLAT ON THE EARTH, ONE IS SITTING UP, "
      + "ONE IS ON ONE KNEE AND ONE IS ALREADY STANDING AND TURNING. ⚠️ EVERY ONE OF THEM IS "
      + "COMPLETE IN FRAME, SEPARATE AND LIT THE SAME. ⚠️ MODERN CLOTHES ON BARE COUNTRY EARTH. "
      + "⚠️ NOT ONE OF THEM IS TOUCHING ANOTHER. Cold blue-grey light, hard shadows.",
    u: ["“ဒါ ဘယ်နေရာလဲ?”", "ကျွန်တော့်အနားမှာ လူတွေ ရှိနေတယ်။",
      "တချို့က မြေပြင်ပေါ်မှာ လဲနေကြတုန်း။"] },

  { t: "Ko Han Zaw", l: "ရွာအဝင်လမ်း", k: "face", tm: "moon", w: ["ကိုဟန်ဇော်"],
    g: "“ဟေ့! ဘယ်သူတွေလဲကွ!” — သူ့နာမည်က ကိုဟန်ဇော်။ ကားမောင်းသမားတစ်ယောက်။",
    p: "Close on Ko Han Zaw standing on the dirt road in open moonlight, ⚠️ HIS MOUTH WIDE OPEN "
      + "ON A SHOUT AND HIS CHIN PUSHED FORWARD. ⚠️ HIS EYES ARE ON SOMETHING OFF TO ONE SIDE "
      + "PAST CAMERA. ⚠️ BOTH HIS ARMS ARE OUT AND OPEN AT HIS SIDES. ⚠️ THE BLUE-AND-WHITE "
      + "CHECKED SHIRT IS OPEN OVER THE WHITE VEST AND THE SHORT STUBBLE BEARD IS CLEAR. Cold "
      + "light flat across his face, the empty road soft behind him.",
    u: ["တချို့က ထိုင်နေကြတယ်။", "တချို့ကတော့ ထပြီး ပတ်ဝန်းကျင်ကို ကြည့်နေကြပြီ။",
      "“ဟေ့! ဘယ်သူတွေလဲကွ!”", "အင်္ကျီပြာဝတ်ထားတဲ့ လူတစ်ယောက်က အော်နေတယ်။"] },

  { t: "Nanda", l: "ရွာအဝင်လမ်း", k: "face", tm: "moon", w: ["နန္ဒာ"],
    g: "ကျွန်တော့်ဘေးမှာ နန္ဒာဆိုတဲ့ သူနာပြုတစ်ယောက်။ အသက် ၂၉ နှစ်။",
    p: "Close on Nanda sitting on the packed earth of the road in open moonlight, ⚠️ HER FACE "
      + "TURNED DOWN TO A PHONE HELD IN BOTH HANDS IN HER LAP. ⚠️ THE PHONE SCREEN IS COMPLETELY "
      + "DARK AND GIVES NO LIGHT. ⚠️ HER EXPRESSION IS CALM AND WORKING THE PROBLEM, not panicked. "
      + "⚠️ THE LOW TIDY PONYTAIL AND THE METAL WATCH WORN FACE-INWARD ON HER LEFT WRIST ARE "
      + "CLEAR. The teal-green blouse. Cold blue-grey light, the road soft behind her.",
    u: ["သူ့အသက် လေးဆယ်ကျော်လောက်ရှိမယ်။", "နောက်မှ သိရတာ သူ့နာမည်က ကိုဟန်ဇော်။",
      "ကားမောင်းသမားတစ်ယောက်။",
      "ကျွန်တော့်ဘေးမှာတော့ အစိမ်းရင့်ရောင်အင်္ကျီဝတ်ထားတဲ့ မိန်းကလေးတစ်ယောက် ထိုင်နေတယ်။"] },

  { t: "No Signal", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "hands", tm: "moon", w: ["ဖုန်း"],
    g: "“ဖုန်းလိုင်း မမိဘူး။ အရေးပေါ်ဖုန်းတောင် ခေါ်လို့မရဘူး။”",
    p: "Close in on a phone held flat in two hands in open moonlight, the face out of frame. ⚠️ "
      + "THE SCREEN IS LIT BUT COMPLETELY EMPTY — a flat dark grey field with no icons, no bars, "
      + "no clock and no text anywhere on it. ⚠️ A THUMB IS PRESSED AGAINST THE GLASS AND HAS "
      + "LEFT A SMEAR. ⚠️ THE ONLY OTHER LIGHT IS COLD MOONLIGHT ON THE BACKS OF THE FINGERS. ⚠️ "
      + "THE BARE EARTH BELOW IS OUT OF FOCUS.",
    u: ["သူ့နာမည် နန္ဒာ။", "အသက် ၂၉ နှစ်။", "သူနာပြုတစ်ယောက်။", "သူက သူ့ဖုန်းကို ကြည့်ပြီး ပြောတယ်။",
      "“ဖုန်းလိုင်း မမိဘူး။ အရေးပေါ်ဖုန်းတောင် ခေါ်လို့မရဘူး။”"] },

  { t: "Min Khant", l: "ရွာအဝင်လမ်း", k: "face", tm: "moon", w: ["မင်းခန့်"],
    g: "အနီရောင်ဂျာကင် ဝတ်ထားတဲ့ လူငယ်တစ်ယောက် — မင်းခန့်။",
    p: "Close on Min Khant walking towards camera on the dirt road in open moonlight, ⚠️ CAUGHT "
      + "MID-STRIDE WITH HIS HEAD UP AND HIS MOUTH OPEN ON A QUESTION. ⚠️ THE BRIGHT RED NYLON "
      + "DELIVERY JACKET IS THE ONLY STRONG COLOUR IN A FRAME THAT IS OTHERWISE DRAINED TO "
      + "BLUE-GREY, and it reads instantly. ⚠️ THE ZIP IS HALF DOWN OVER A DARK T-SHIRT. ⚠️ HIS "
      + "HAIR IS PUSHED BACK OFF HIS FOREHEAD. Cold light, the empty road behind him.",
    u: ["အဲဒီအချိန် လူငယ်တစ်ယောက်က ကျွန်တော်တို့ဆီ လျှောက်လာတယ်။", "အနီရောင်ဂျာကင် ဝတ်ထားတယ်။",
      "သူ့နာမည် မင်းခန့်။", "“အစ်ကိုတို့လည်း ဖုန်းထဲမှာ စာရပြီး ဒီရောက်လာတာလား?”"] },

  { t: "You Got One Too", l: "ရွာအဝင်လမ်း", k: "two", tm: "moon", w: ["သီဟ", "မင်းခန့်"],
    g: "“မင်းလည်း စာရတာလား?” — “ဟုတ်တယ်။ အကြွေးပြန်ဆပ်ရမယ်ဆိုတဲ့စာလေ။”",
    p: "Two shot at chest height on the dirt road in open moonlight, ⚠️ THIHA AND MIN KHANT "
      + "FACING EACH OTHER IN PROFILE, both complete in frame and a clear pace apart. ⚠️ THIHA "
      + "HAS TURNED SHARPLY TOWARDS HIM AND MIN KHANT IS NODDING. ⚠️ THE RED JACKET AND THE "
      + "SLATE-GREY SHIRT READ AS TWO COMPLETELY DIFFERENT PEOPLE AT A GLANCE. ⚠️ THE BARE ROAD "
      + "AND THE BAMBOO FENCING ARE BEHIND THEM. Cold flat light on both faces equally.",
    u: ["ကျွန်တော် ချက်ချင်း သူ့ကို လှည့်ကြည့်လိုက်တယ်။", "“မင်းလည်း စာရတာလား?”", "သူ ခေါင်းညိတ်တယ်။",
      "“ဟုတ်တယ်။ အကြွေးပြန်ဆပ်ရမယ်ဆိုတဲ့စာလေ။”"] },

  { t: "Nearly All of Us Had One", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "group", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "သက်မွန်", "ဦးဘဦး", "ဒေါ်ခင်မာ", "မေဇင်", "ရဲအောင်"],
    g: "အခြားသူတွေလည်း ဝိုင်းလာကြတယ်။ အားလုံးနီးပါး တူညီတဲ့စာကို ရခဲ့ကြတာ။",
    p: "Five of the strangers gathered into a loose ring on the dirt road in open moonlight, ⚠️ "
      + "EVERY ONE OF THEM HOLDING UP A PHONE WITH A DARK OR EMPTY SCREEN. ⚠️ THEY ARE TURNED "
      + "INWARDS TOWARDS EACH OTHER AND EVERY FACE IS VISIBLE, COMPLETE AND SEPARATE. ⚠️ NOBODY "
      + "IS LIT DIFFERENTLY FROM ANYBODY ELSE AND NOBODY IS STANDING APART. ⚠️ THE PHONES GIVE NO "
      + "LIGHT AT ALL. Cold blue-grey moonlight flat across the whole group.",
    u: ["ကျွန်တော်တို့ တစ်ယောက်မျက်နှာတစ်ယောက် ကြည့်လိုက်ကြတယ်။",
      "အဲဒီအချိန် အခြားသူတွေလည်း ဝိုင်းလာကြတယ်။", "အားလုံးနီးပါး တူညီတဲ့စာကို ရခဲ့ကြတာ။"] },

  { t: "Who Brought Us Here", l: "ရွာအဝင်လမ်း", k: "thiha", tm: "moon", w: ["သီဟ"],
    g: "ကျွန်တော်တို့ကို ဘယ်သူက ဒီနေရာခေါ်လာတာလဲ? ဘာအတွက်လဲ? ဘယ်သူမှ မသိကြဘူး။",
    p: "Close on Thiha standing on the dirt road in open moonlight, ⚠️ HIS HEAD HALF TURNED TOWARDS THE "
      + "HORIZON PAST CAMERA AND HIS EYES OFF THE CENTRE OF THEIR SOCKETS. ⚠️ HIS MOUTH IS SHUT "
      + "AND HIS FACE IS WORKING SOMETHING OUT. ⚠️ THE SMALL PALE SCAR ABOVE HIS LEFT EYEBROW IS "
      + "VISIBLE. ⚠️ DUST FROM THE ROAD IS ON ONE SHOULDER OF THE GREY SHIRT. Cold flat light, "
      + "the empty paddy behind him soft and out of focus.",
    u: ["ကျွန်တော်တို့ကို ဘယ်သူက ဒီနေရာခေါ်လာတာလဲ?", "ဘယ်လိုခေါ်လာတာလဲ?", "ဘာအတွက်လဲ?",
      "ဘယ်သူမှ မသိကြဘူး။"] },

  { t: "He Counted Us", l: "ရွာအဝင်လမ်း", k: "group", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "ကိုဟန်ဇော်", "သဇင်", "ဖြိုးဝေ", "ထွန်းမြတ်", "နန္ဒာ"],
    g: "ကိုဟန်ဇော်က လူတွေကို လက်ညှိုးထိုးပြီး ရေတွက်တယ် — “တစ်… နှစ်… သုံး…” — **“ဆယ့်နှစ်ယောက်။”**",
    p: "Five of the strangers standing in a loose line across the dirt road in open moonlight, "
      + "with Ko Han Zaw in the foreground at the near edge of frame, his back half to camera and "
      + "ONE ARM RAISED AND A FINGER POINTING ALONG THE LINE. ⚠️ EVERY PERSON IN THE LINE IS "
      + "COMPLETE IN FRAME, SEPARATE AND CLEARLY COUNTABLE. ⚠️ EVERY FACE IS VISIBLE AND LIT THE "
      + "SAME. ⚠️ NOBODY IS HIDDEN BEHIND ANYBODY ELSE. Cold blue-grey light, the road and the "
      + "paddy behind them.",
    u: ["ကိုဟန်ဇော်က လူတွေကို လက်ညှိုးထိုးပြီး ရေတွက်တယ်။", "“တစ်… နှစ်… သုံး…”", "နောက်ဆုံးမှာ—",
      "“ဆယ့်နှစ်ယောက်။”"] },

  { t: "Exactly Like the Message", l: "ရွာအဝင်လမ်း", k: "thiha", tm: "moon", w: ["သီဟ"],
    g: "ကျွန်တော့်ရင်ထဲ အေးခနဲဖြစ်သွားတယ်။ ဖုန်းထဲက စာအတိုင်းပဲ။",
    p: "Close on Thiha in open moonlight, ⚠️ HIS FACE TOWARDS CAMERA AND HIS EYES FIXED AND NOT "
      + "MOVING. ⚠️ ALL THE EXPRESSION HAS GONE OUT OF HIS FACE AT ONCE. ⚠️ HIS LIPS ARE PARTED "
      + "AND HE IS NOT BREATHING. ⚠️ THE SKIN ALONG HIS FOREARMS HAS COME UP IN FINE RAISED "
      + "GOOSEFLESH, clear in the raking cold light. ⚠️ THE EMPTY ROAD BEHIND HIM IS OUT OF "
      + "FOCUS.",
    u: ["ကျွန်တော့်ရင်ထဲ အေးခနဲဖြစ်သွားတယ်။", "ဖုန်းထဲက စာအတိုင်းပဲ။",
      "အဲဒီအချိန်မှာ ကျွန်တော် ပတ်ဝန်းကျင်ကို သေချာကြည့်မိတယ်။"] },

  { t: "Tama Chaung Village", c: [[1, "bigstinger"]], l: "ရွာအဝင်လမ်း", k: "insert", tm: "moon", w: ["ရွာအဝင်လမ်း"],
    g: "ရွာအဝင်မှာ သစ်သားဆိုင်းဘုတ်ဟောင်းတစ်ခု — **“တမာချောင်းရွာ”**",
    p: "Tight on the weathered wooden village name-board on its two posts beside the road in open "
      + "moonlight, filling the frame. ⚠️ THE BOARD IS GREY, SPLIT AND LEANING SLIGHTLY. ⚠️ THE "
      + "PAINTED BURMESE LETTERING ON IT IS FLAKED AND WORN — ⚠️ IT STAYS SOFT AND PARTLY "
      + "OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ ONE CORNER OF THE BOARD HAS "
      + "ROTTED AWAY. ⚠️ NOBODY IS IN THE PICTURE. Cold light hard across the grain.",
    u: ["ကျွန်တော်တို့ရှေ့မှာ ရွာတစ်ရွာရှိနေတယ်။", "ရွာအဝင်မှာ သစ်သားဆိုင်းဘုတ်ဟောင်းတစ်ခု။",
      "“တမာချောင်းရွာ”"] },

  { t: "Lamps Lit in Every House", l: "ရွာအဝင်လမ်း", k: "wide", tm: "lamp",
    w: ["ရွာအဝင်လမ်း"],
    g: "ဆိုင်းဘုတ်နောက်မှာ သစ်သားအိမ်တွေ၊ ဝါးခြံစည်းရိုးတွေ၊ ညောင်ပင်ကြီးတစ်ပင်။ အိမ်တွေမှာ ဆီမီးတွေ လင်းနေတယ်။",
    p: "Wide along the road into the village from just past the name-board. ⚠️ TIMBER HOUSES "
      + "STAND ON BOTH SIDES BEHIND SPLIT-BAMBOO FENCING AND EVERY SINGLE ONE OF THEM HAS A WARM "
      + "ORANGE OIL-LAMP GLOW IN ITS WINDOWS. ⚠️ A HUGE OLD BANYAN RISES BEHIND THE ROOFLINE AND "
      + "A RUINED BRICK STUPA SHOWS FAR OFF. ⚠️ THE LAMPS ARE THE ONLY LIGHT AND THERE IS NO "
      + "ELECTRICITY ANYWHERE. ⚠️ THE STREET IS COMPLETELY EMPTY AND THERE IS NOBODY IN THE "
      + "PICTURE.",
    u: ["ဆိုင်းဘုတ်နောက်မှာ သစ်သားအိမ်တွေ။", "ဝါးခြံစည်းရိုးတွေ။", "ညောင်ပင်ကြီးတစ်ပင်။",
      "အဝေးမှာ စေတီဟောင်းတစ်ဆူ။", "အိမ်တွေမှာ ဆီမီးခွက်တွေ လင်းနေတယ်။"] },

  { t: "But Nobody Moving", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "wide", tm: "lamp", w: ["ရွာအဝင်လမ်း"],
    g: "ထူးဆန်းတာက… ရွာထဲမှာ လူလှုပ်ရှားတာ တစ်ယောက်မှ မမြင်ရဘူး။",
    p: "Wide down the village street from the same position, lit by the oil lamps in the windows. "
      + "⚠️ EVERY DOOR ALONG THE STREET STANDS OPEN AND EVERY WINDOW IS LIT. ⚠️ THE PACKED EARTH "
      + "OF THE STREET IS SWEPT CLEAN AND COMPLETELY UNMARKED — no footprint, no cart track, "
      + "nothing dropped. ⚠️ THERE IS NOT ONE PERSON ANYWHERE IN THE PICTURE AND NOTHING IN IT IS "
      + "MOVING. ⚠️ A SMALL STOOL SITS OUTSIDE ONE DOORWAY WITH NOBODY ON IT. Warm pools of "
      + "lamplight falling off into black.",
    u: ["ဒါပေမယ့် ထူးဆန်းတာက…", "ရွာထဲမှာ လူလှုပ်ရှားတာ တစ်ယောက်မှ မမြင်ရဘူး။",
      "မင်းခန့်က ရွာဘက်ကို ကြည့်ပြီး ပြောတယ်။",
      "“အစ်ကိုတို့… ဒီရွာက နည်းနည်းထူးဆန်းတယ်နော်။”"] },

  { t: "It Isn't Strange, It's Frightening", l: "ရွာအဝင်လမ်း", k: "face", tm: "lamp",
    w: ["ဒေါ်ခင်မာ"],
    g: "“ထူးဆန်းတာ မဟုတ်ဘူးကွဲ့။ ကြောက်စရာကောင်းနေတာ။” — သူ့နာမည် ဒေါ်ခင်မာ။",
    p: "Close on Daw Khin Ma standing at the edge of the village in the warm orange spill from "
      + "the house lamps, ⚠️ HER FACE TURNED TOWARDS THE VILLAGE AND NOT AT THE LENS. ⚠️ HER "
      + "MOUTH IS SET AND HER EYES ARE NARROWED AND STEADY — she is reading the place, not "
      + "panicking at it. ⚠️ THE MUSTARD-YELLOW BLOUSE AND THE THICK THANAKA ROUNDS ON HER CHEEKS "
      + "ARE CLEAR. ⚠️ HER ARMS ARE FOLDED. The lit street soft and out of focus behind her.",
    u: ["ဘေးက အသက်ငါးဆယ်ကျော် အမျိုးသမီးတစ်ယောက်က ပြန်ပြောတယ်။",
      "“ထူးဆန်းတာ မဟုတ်ဘူးကွဲ့။ ကြောက်စရာကောင်းနေတာ။”", "သူ့နာမည် ဒေါ်ခင်မာ။",
      "ဈေးရောင်းတဲ့ အမျိုးသမီးတစ်ယောက်။"] },

  { t: "Nobody Goes Alone", l: "ရွာအဝင်လမ်း", k: "face", tm: "lamp", w: ["ရဲအောင်"],
    g: "“အရင်ဆုံး ဒီနေရာကနေ ထွက်ကြည့်မယ်။ ဘယ်သူမှ တစ်ယောက်တည်းမသွားနဲ့။”",
    p: "Close on Ye Aung standing out in front of the group at the edge of the village, lit from "
      + "one side by the lamp spill. ⚠️ HE IS FACING CAMERA SQUARE ON AND SPEAKING, his chin "
      + "level and his eyes moving across people out of frame. ⚠️ ONE HAND IS RAISED FLAT AT "
      + "CHEST HEIGHT, holding everybody still. ⚠️ THE MID-GREY ZIP JACKET AND THE SHARPLY COMBED "
      + "HAIR ARE CLEAR. ⚠️ HIS EXPRESSION IS CONTROLLED AND ASSESSING. Warm light on one side of "
      + "his face, cold moonlight on the other.",
    u: ["ကျွန်တော်တို့ထဲက ရဲအောင်ဆိုတဲ့ လူတစ်ယောက်က ရှေ့ကိုထွက်လာတယ်။",
      "သူက ရဲဝန်ထမ်းဟောင်းလို့ ပြောတယ်။",
      "“အရင်ဆုံး ဒီနေရာကနေ ထွက်ကြည့်မယ်။ ဘယ်သူမှ တစ်ယောက်တည်းမသွားနဲ့။”"] },

  { t: "Our First Mistake", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "ground", tm: "lamp", w: ["ရွာအဝင်လမ်း"],
    g: "⚠️ အားလုံး သဘောတူလိုက်ကြတယ်။ **ဒါပေမယ့် အဲဒီဆုံးဖြတ်ချက်က ကျွန်တော်တို့ ပထမဆုံးလုပ်မိတဲ့ အမှားဖြစ်ခဲ့တယ်။**",
    p: "A few inches above the packed earth of the village street, level along it, lit by the "
      + "warm spill from the lamps in the houses. ⚠️ A DOZEN PAIRS OF FEET IN MODERN SHOES AND "
      + "TRAINERS ARE WALKING AWAY FROM CAMERA INTO THE VILLAGE, spread across the width of the "
      + "street. ⚠️ ONE PAIR OF BLUE JEANS AND TRAINERS IS AHEAD OF THE REST. ⚠️ THE SWEPT EARTH "
      + "IN FRONT OF THEM IS UNMARKED AND THE EARTH BEHIND THEM NOW CARRIES THEIR PRINTS. ⚠️ NO "
      + "FACES ARE IN FRAME.",
    u: ["အားလုံး သဘောတူလိုက်ကြတယ်။",
      "ဒါပေမယ့် အဲဒီဆုံးဖြတ်ချက်က ကျွန်တော်တို့ ပထမဆုံးလုပ်မိတဲ့ အမှားဖြစ်ခဲ့တယ်။"] },

  /* ── အခန်း ၃ · ပြန်ရောက်တဲ့လမ်း ─────────────────────────────────────── */
  { t: "We Turned Off the Road", l: "ရွာအဝင်လမ်း", k: "wide", tm: "moon", w: ["ရွာအဝင်လမ်း"],
    g: "လယ်ကွင်းတွေကြားက မြေသားလမ်းအတိုင်း လျှောက်လာကြတယ်။ လေတဖြူးဖြူး တိုက်နေတယ်။",
    p: "Wide along the dirt road running away from the village between flat open paddy in open "
      + "moonlight. ⚠️ A LOOSE LINE OF TWELVE SMALL FIGURES IS WALKING AWAY FROM CAMERA DOWN THE "
      + "ROAD, far enough off that no face resolves but every one of them is separate and "
      + "countable against the pale earth. ⚠️ THE PADDY ON BOTH SIDES IS LEANING ONE WAY IN THE "
      + "WIND. ⚠️ THERE IS NO LIGHT AHEAD OF THEM ANYWHERE — only flat moonlit field to the "
      + "treeline. Cold blue-grey, colour drained.",
    u: ["ရွာအဝင်လမ်းကနေ ကျွန်တော်တို့ လှည့်ထွက်ခဲ့ကြတယ်။",
      "လယ်ကွင်းတွေကြားက မြေသားလမ်းအတိုင်း လျှောက်လာကြတယ်။", "လေတဖြူးဖြူး တိုက်နေတယ်။",
      "အဝေးမှာ ပုရစ်တွေ အော်နေတယ်။"] },

  { t: "His Torch Led the Way", l: "ရွာအဝင်လမ်း", k: "behind", tm: "moon", w: ["မင်းခန့်"],
    g: "မင်းခန့်က သူ့ဖုန်းမီးကို ဖွင့်ပြီး ရှေ့ကနေ လျှောက်တယ်။ “ဖုန်းဘက်ထရီကတော့ ရှိသေးတယ်။ လိုင်းပဲ မမိတာ။”",
    p: "From behind Min Khant at standing height on the dirt road, the back of his head and the "
      + "red jacket across his shoulders filling the lower frame. ⚠️ HE IS HOLDING A PHONE UP AND "
      + "FORWARD WITH ITS TORCH ON, throwing a narrow hard white cone down the road ahead of him. "
      + "⚠️ THE CONE REACHES ONLY A FEW METRES AND THE ROAD BEYOND IT IS COLD MOONLIT GREY. ⚠️ "
      + "NOTHING IS STANDING IN THE CONE. ⚠️ THE RED OF THE JACKET IS THE ONLY WARM COLOUR IN THE "
      + "PICTURE.",
    u: ["မင်းခန့်က သူ့ဖုန်းမီးကို ဖွင့်ပြီး ရှေ့ကနေ လျှောက်တယ်။",
      "“ဖုန်းဘက်ထရီကတော့ ရှိသေးတယ်။ လိုင်းပဲ မမိတာ။”"] },

  { t: "Twelve Minutes Past Twelve", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "hands", tm: "moon", w: ["ဖုန်း"],
    g: "“အချိန် ဘယ်နှနာရီရှိပြီလဲ?” — “တစ်ဆယ့်နှစ်နာရီ ခုနစ်မိနစ်။”",
    p: "Close in on a phone held up in one hand on the dark road, the face out of frame. ⚠️ THE "
      + "SCREEN SHOWS A LARGE PLAIN DIGITAL CLOCK AND NOTHING ELSE — ⚠️ THE DIGITS STAY SOFT AND "
      + "SLIGHTLY OUT OF FOCUS, READING AS MARKS RATHER THAN AS LEGIBLE NUMBERS. ⚠️ THERE IS NO "
      + "SIGNAL BAR, NO DATE AND NO ICON ANYWHERE ON IT. ⚠️ THE SCREEN GLOW IS COLD AND HARD ON "
      + "THE FINGERS AROUND IT. Black beyond the hand.",
    u: ["နန္ဒာက ပြန်မေးတယ်။", "“အချိန် ဘယ်နှနာရီရှိပြီလဲ?”", "“တစ်ဆယ့်နှစ်နာရီ ခုနစ်မိနစ်။”"] },

  { t: "The Same Minute for Everybody", l: "ရွာအဝင်လမ်း", k: "thiha", tm: "moon", w: ["သီဟ"],
    g: "ရောက်လာတဲ့နေရာတွေ မတူပေမယ့် အချိန်ကတော့ တူနေတယ်။",
    p: "Close on Thiha walking on the dark road in open moonlight, ⚠️ HIS HEAD TURNED DOWN AND TO "
      + "ONE SIDE AND HIS EYES UNFOCUSED — working something out rather than looking at anything. "
      + "⚠️ HIS MOUTH IS SHUT AND HIS BROWS ARE DRAWN. ⚠️ ONE HAND HAS COME UP TO HIS OWN MOUTH "
      + "AND STOPPED THERE. Cold flat light down one side of his face, the empty road and paddy "
      + "soft behind him.",
    u: ["ကျွန်တော် ထူးဆန်းသွားတယ်။",
      "လူတစ်ယောက်ချင်းစီ ရောက်လာတဲ့နေရာတွေ မတူပေမယ့် အချိန်ကတော့ တူနေတယ်။"] },

  { t: "Ye Aung Stopped", l: "ရွာအဝင်လမ်း", k: "face", tm: "moon", w: ["ရဲအောင်"],
    g: "ရှေ့ကသွားနေတဲ့ ရဲအောင် ရုတ်တရက် ရပ်လိုက်တယ်။ “ဟင်…”",
    p: "Close on Ye Aung stopped dead on the dark road in open moonlight, ⚠️ HIS FACE TURNED "
      + "FORWARD PAST CAMERA AND HIS EYES WIDE AND FIXED ON SOMETHING AHEAD. ⚠️ HIS MOUTH IS "
      + "SLIGHTLY OPEN. ⚠️ ONE ARM HAS GONE OUT SIDEWAYS AND FLAT TO HOLD BACK WHOEVER IS BEHIND "
      + "HIM, out of frame. ⚠️ THE CONTROLLED EXPRESSION HAS GONE. The mid-grey jacket, the neatly "
      + "combed hair. Cold light flat across his face.",
    u: ["နောက်ထပ် ဆယ်မိနစ်လောက် လျှောက်လာပြီးတဲ့အချိန်မှာ ရှေ့ကသွားနေတဲ့ ရဲအောင် ရုတ်တရက် ရပ်လိုက်တယ်။",
      "“ဟင်…”", "ကျွန်တော် သူ့နောက်ကနေ ကြည့်လိုက်တယ်။"] },

  { t: "The Same Sign", c: [[1, "bigstinger"]], l: "ရွာအဝင်လမ်း", k: "insert", tm: "moon", w: ["ရွာအဝင်လမ်း"],
    g: "⚠️ ရှေ့မှာ သစ်သားဆိုင်းဘုတ်တစ်ခု — **“တမာချောင်းရွာ”** — အားလုံး ကြက်သေသေသွားကြတယ်။",
    p: "Tight on the weathered wooden village name-board on its two posts in open moonlight, "
      + "filling the frame, ⚠️ IDENTICAL IN EVERY DETAIL TO THE ONE AT THE START — the same lean, "
      + "the same split down the left post, the same rotted corner, the same flaked lettering. ⚠️ "
      + "THE PAINTED BURMESE TEXT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS "
      + "LEGIBLE WORDS. ⚠️ NOBODY IS IN THE PICTURE. Cold light hard across the grain.",
    u: ["ရှေ့မှာ သစ်သားဆိုင်းဘုတ်တစ်ခု။", "“တမာချောင်းရွာ”", "အားလုံး ကြက်သေသေသွားကြတယ်။"] },

  { t: "That's the Way We Came In", l: "ရွာအဝင်လမ်း", k: "two", tm: "moon",
    w: ["ကိုဟန်ဇော်", "ရဲအောင်"],
    g: "“ဟာ… ဒါ ခုနက ရွာဝင်လမ်းပဲ!” — “မဖြစ်နိုင်ဘူး။ ငါတို့ လမ်းတည့်တည့် လျှောက်လာတာ။”",
    p: "Two shot at chest height on the road in open moonlight, ⚠️ KO HAN ZAW AND YE AUNG FACING "
      + "EACH OTHER IN PROFILE, both complete in frame. ⚠️ KO HAN ZAW HAS ONE ARM FLUNG OUT "
      + "BEHIND HIM POINTING BACK DOWN THE ROAD AND HIS MOUTH IS WIDE OPEN. ⚠️ YE AUNG IS SHAKING "
      + "HIS HEAD WITH HIS JAW SET. ⚠️ THE CHECKED SHIRT AND THE GREY JACKET READ AS TWO "
      + "COMPLETELY DIFFERENT PEOPLE. The name-board soft behind them.",
    u: ["ကိုဟန်ဇော်က အသံမြှင့်ပြီး ပြောတယ်။", "“ဟာ… ဒါ ခုနက ရွာဝင်လမ်းပဲ!”",
      "ရဲအောင်က ခေါင်းခါတယ်။", "“မဖြစ်နိုင်ဘူး။ ငါတို့ လမ်းတည့်တည့် လျှောက်လာတာ။”"] },

  { t: "Something Is Tricking Us", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "face", tm: "moon", w: ["ဒေါ်ခင်မာ"],
    g: "လူတွေ စပြီး ထိတ်လန့်လာကြတယ်။ “ငါတို့ကို တစ်ခုခု လှည့်စားနေတာထင်တယ်…”",
    p: "Close on Daw Khin Ma on the dark road in open moonlight, ⚠️ HER FACE TURNED PARTLY AWAY "
      + "FROM CAMERA AND HER EYES GOING ROUND THE DARK PADDY BEHIND HER. ⚠️ SHE IS SPEAKING "
      + "QUIETLY WITH HER MOUTH BARELY OPEN. ⚠️ ONE HAND HAS COME UP AND CLOSED ON THE CLOTH AT "
      + "HER OWN THROAT. ⚠️ THE THICK THANAKA ROUNDS AND THE MUSTARD-YELLOW BLOUSE ARE CLEAR. "
      + "Cold flat light, the empty field black behind her.",
    u: ["လူတွေ စပြီး ထိတ်လန့်လာကြတယ်။", "ဒေါ်ခင်မာက တိုးတိုးလေး ပြောတယ်။",
      "“ငါတို့ကို တစ်ခုခု လှည့်စားနေတာထင်တယ်…”"] },

  { t: "A Mark on a Tree", l: "ရွာအဝင်လမ်း", k: "insert", tm: "moon", w: ["ရွာအဝင်လမ်း"],
    g: "ကိုထွန်းမြတ်က ဓားနဲ့ အမှတ်အသား ခြစ်ထားခဲ့တယ်။ ပြီးတော့ ဆက်လျှောက်တယ်။",
    p: "Tight on the trunk of a roadside tree in open moonlight, filling the frame. ⚠️ A FRESH "
      + "DEEP CROSS HAS BEEN CUT INTO THE BARK WITH A BLADE, the pale wood under it bright and "
      + "raw against the dark trunk and a few curls of bark still hanging from the cut. ⚠️ A "
      + "MAN'S BROAD SCARRED HAND IS AT THE EDGE OF FRAME, out of focus, lowering a short knife. "
      + "⚠️ THE MARK IS UNMISTAKABLE AND UNIQUE. Cold light raking across the bark.",
    u: ["ဒါပေမယ့် ရဲအောင်က လက်မခံဘူး။", "“လမ်းမှားတာပဲဖြစ်မယ်။ နောက်တစ်ခါ သွားကြည့်မယ်။”",
      "ဒီတစ်ခါ သူနဲ့အတူ ကျွန်တော်၊ မင်းခန့်၊ ကိုထွန်းမြတ်တို့ လိုက်သွားကြတယ်။",
      "လမ်းဘေးက သစ်ပင်တစ်ပင်မှာ ကိုထွန်းမြတ်က ဓားနဲ့ အမှတ်အသား ခြစ်ထားခဲ့တယ်။"] },

  { t: "The Mark Was Already There", c: [[1, "bigstinger"]], l: "ရွာအဝင်လမ်း", k: "insert", tm: "moon",
    w: ["ရွာအဝင်လမ်း"],
    g: "⚠️ ဆိုင်းဘုတ်ဘေးက သစ်ပင်မှာ — **ကိုထွန်းမြတ် ခြစ်ခဲ့တဲ့ အမှတ်အသား ရှိနေတယ်။**",
    p: "Tight on the trunk of a roadside tree in open moonlight, filling the frame, ⚠️ CARRYING "
      + "THE SAME FRESH DEEP CROSS CUT INTO THE BARK — the same angle, the same depth, the same "
      + "curls of bark hanging from it. ⚠️ THE WEATHERED VILLAGE NAME-BOARD IS BEHIND IT, out of "
      + "focus, which it was not before. ⚠️ NOBODY IS IN THE PICTURE AND NO HAND IS ANYWHERE NEAR "
      + "THE TRUNK. Cold light, hard black shadow down one side of the trunk.",
    u: ["ပြီးတော့ ဆက်လျှောက်တယ်။", "ငါးမိနစ်။", "ဆယ်မိနစ်။",
      "နောက်ဆုံးမှာ ကျွန်တော်တို့ ရွာဝင်ဆိုင်းဘုတ်ကို ပြန်တွေ့တယ်။", "ဒီတစ်ခါတော့ ဆိုင်းဘုတ်ဘေးက သစ်ပင်မှာ—",
      "ကိုထွန်းမြတ် ခြစ်ခဲ့တဲ့ အမှတ်အသား ရှိနေတယ်။"] },

  { t: "Wherever We Go", l: "ရွာအဝင်လမ်း", k: "face", tm: "moon", w: ["မင်းခန့်"],
    g: "“အစ်ကို… ဒါဆို ငါတို့ ဘယ်ကိုသွားသွား ဒီနေရာပဲ ပြန်ရောက်နေတာလား?” — ဘယ်သူမှ မဖြေဘူး။",
    p: "Close on Min Khant on the dark road in open moonlight, ⚠️ HIS FACE TOWARDS CAMERA AND HIS "
      + "EYES WIDE AND WET. ⚠️ HIS MOUTH IS OPEN ON A QUESTION AND HIS CHIN IS SHAKING. ⚠️ THE "
      + "QUICK RESTLESS ENERGY HAS GONE OUT OF HIM COMPLETELY. ⚠️ THE RED JACKET IS THE ONLY "
      + "STRONG COLOUR IN THE FRAME. One hand is closed in the front of the jacket. Cold flat "
      + "light, the black paddy behind him.",
    u: ["မင်းခန့်က အသံတုန်တုန်နဲ့ မေးတယ်။",
      "“အစ်ကို… ဒါဆို ငါတို့ ဘယ်ကိုသွားသွား ဒီနေရာပဲ ပြန်ရောက်နေတာလား?”", "ဘယ်သူမှ မဖြေဘူး။"] },

  { t: "A Drum in the Dark", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "group", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "သီဟ", "နန္ဒာ", "ရဲအောင်", "ထွန်းမြတ်", "မင်းခန့်"],
    g: "ဒုန်း… ဗုံသံတစ်ချက် ကြားလိုက်ရတယ်။ အားလုံး ရပ်သွားကြတယ်။",
    p: "Five of the strangers on the dark road in open moonlight, ⚠️ ALL FIVE STOPPED DEAD "
      + "MID-STRIDE AND ALL FIVE WITH THEIR HEADS TURNED THE SAME WAY, towards the village out of "
      + "frame. ⚠️ EVERY FACE IS VISIBLE, COMPLETE AND LIT THE SAME. ⚠️ NOBODY IS LOOKING AT "
      + "ANYBODY ELSE. ⚠️ THE PHONE TORCH IS STILL ON AND POINTING AT THE GROUND, forgotten. Cold "
      + "blue-grey light, hard black shadows behind every figure.",
    u: ["ကျွန်တော်တို့ ရွာဘက်ကို ပြန်လျှောက်လာခဲ့ကြတယ်။", "အဲဒီအချိန်မှာပဲ—", "ဒုန်း…",
      "ဗုံသံတစ်ချက် ကြားလိုက်ရတယ်။", "အားလုံး ရပ်သွားကြတယ်။"] },

  { t: "Every Lamp at Once", l: "ရွာအဝင်လမ်း", k: "wide", tm: "lamp", w: ["ရွာအဝင်လမ်း"],
    g: "⚠️ ဒုန်း! တတိယတစ်ချက်။ **ရွာအလယ်ဘက်ကနေ ဆီမီးရောင်တွေ တစ်ပြိုင်တည်း လင်းထိန်လာတယ်။**",
    p: "Wide down the village street from the road in open moonlight. ⚠️ A HARD ORANGE GLOW HAS "
      + "COME UP FROM THE MIDDLE OF THE VILLAGE AND IS THROWN ACROSS THE STREET AND UP THE FRONTS "
      + "OF THE TIMBER HOUSES, much stronger than the window lamps. ⚠️ THE SOURCE OF IT IS BEHIND "
      + "THE ROOFLINE AND IS NOT IN FRAME. ⚠️ EVERY SHADOW IN THE STREET NOW POINTS TOWARDS "
      + "CAMERA. ⚠️ THE STREET IS COMPLETELY EMPTY AND NOBODY IS IN THE PICTURE.",
    u: ["ဒုန်း…", "ဒုတိယတစ်ချက်။", "ဒုန်း!", "တတိယတစ်ချက်။",
      "ရွာအလယ်ဘက်ကနေ ဆီမီးရောင်တွေ တစ်ပြိုင်တည်း လင်းထိန်လာတယ်။"] },

  { t: "The Guests Have Arrived", c: [[1, "bigstinger"]], l: "ရွာအဝင်လမ်း", k: "group", tm: "lamp",
    w: ["ရွာအဝင်လမ်း", "သက်မွန်", "ဒေါ်ခင်မာ", "ဖြိုးဝေ", "မေဇင်", "သဇင်"],
    g: "⚠️ အသံတစ်သံ — တည်ငြိမ်ပြီး အနည်းငယ် ခြောက်ကပ်နေတယ် — **“ဧည့်သည်များ ရောက်ရှိလာပါပြီ…”**",
    p: "Five of the strangers standing at the edge of the village with the orange glow full on "
      + "their faces from the front. ⚠️ EVERY ONE OF THEM HAS TURNED TOWARDS IT AT THE SAME "
      + "MOMENT AND EVERY FACE IS LIT IDENTICALLY — nobody closer, nobody held apart, nobody in "
      + "shadow. ⚠️ EVERY FACE IS COMPLETE AND SEPARATE. ⚠️ THEIR SHADOWS ARE THROWN LONG AND "
      + "HARD BEHIND THEM DOWN THE ROAD. ⚠️ NOBODY IS SPEAKING AND NOBODY IS MOVING.",
    u: ["ပြီးတော့…", "အသံတစ်သံ ကြားလိုက်ရတယ်။", "လူအသံလိုပဲ။",
      "ဒါပေမယ့် လူတစ်ယောက် ပြောနေတဲ့အသံနဲ့ မတူဘူး။", "အသံက တည်ငြိမ်တယ်။",
      "အနည်းငယ် ခြောက်ကပ်နေတယ်။", "“ဧည့်သည်များ ရောက်ရှိလာပါပြီ…”",
      "ကျွန်တော်တို့အားလုံး အသံလာရာဘက်ကို လှည့်ကြည့်လိုက်ကြတယ်။"] },

  /* ── အခန်း ၄ · အနက်ရောင်ရုပ်သေး ─────────────────────────────────────── */
  { t: "It Came from the Zayat", l: "ရွာလယ်ဇရပ်", k: "wide", tm: "lamp", w: ["ရွာလယ်ဇရပ်"],
    g: "အသံက ရွာလယ်ဇရပ်ကြီးဆီက လာနေတာ။ ဇရပ်ကြီးက ကျွန်းသစ်တိုင်တွေနဲ့ ဆောက်ထားတာ။",
    p: "Wide on the village zayat from the open ground in front of it, lit by the oil lamps along "
      + "its platform edge. ⚠️ THE EIGHT HEAVY TEAK POSTS AND THE STEEP TIERED ROOF ARE COMPLETE "
      + "IN FRAME. ⚠️ THE RAISED PLANK PLATFORM IS OPEN ON ALL FOUR SIDES AND EVERY LAMP ALONG "
      + "ITS EDGE IS BURNING. ⚠️ ONE LOW CARVED STOOL STANDS ALONE IN THE MIDDLE OF THE PLATFORM "
      + "AND SOMETHING SMALL AND BLACK IS ON IT, too far off to resolve. ⚠️ THE OLD BANYAN RISES "
      + "BESIDE IT. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["အသံက ရွာလယ်ဇရပ်ကြီးဆီက လာနေတာ။",
      "ကျွန်တော်တို့ ဇရပ်ဘက်ကို ဖြည်းဖြည်းချင်း လျှောက်သွားကြတယ်။",
      "ဇရပ်ကြီးက ကျွန်းသစ်တိုင်တွေနဲ့ ဆောက်ထားတာ။"] },

  { t: "A Stool in the Middle", l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "အလယ်မှာ သစ်သားထိုင်ခုံတစ်လုံး။ ထိုင်ခုံပေါ်မှာတော့ — အနက်ရောင် မြန်မာရိုးရာ ရုပ်သေးရုပ်တစ်ရုပ်။",
    p: "The low carved stool in the middle of the zayat platform at platform height, lit by the "
      + "lamps along the edge. ⚠️ THE BLACK MARIONETTE IS SEATED UPRIGHT ON IT WITH ITS LEGS "
      + "HANGING OVER THE FRONT AND ITS HANDS ON ITS OWN KNEES. ⚠️ IT IS PLAINLY A CARVED WOODEN "
      + "OBJECT AND IT IS NOT MID-ANYTHING. ⚠️ THE DARK PLANK FLOOR AROUND IT IS BARE AND SWEPT. "
      + "⚠️ NOBODY ELSE IS IN THE PICTURE. Warm orange close in, black past the posts.",
    u: ["အလယ်မှာ သစ်သားထိုင်ခုံတစ်လုံး။", "ထိုင်ခုံပေါ်မှာတော့—",
      "အနက်ရောင် မြန်မာရိုးရာ ရုပ်သေးရုပ်တစ်ရုပ်။"] },

  { t: "Nearly as Tall as a Man", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး"],
    g: "ရုပ်သေးရုပ်က လူတစ်ယောက်ရဲ့ အရပ်နီးပါးရှိတယ်။ မျက်နှာက သစ်သားနက်နက်နဲ့ ထုထားတယ်။",
    p: "The black marionette on the stool, close, lit warm from one side by the lamps. ⚠️ THE "
      + "POINTED MINISTER'S HEADDRESS, THE BLACKENED SILK ROBE WITH ITS TARNISHED SILVER THREAD "
      + "AND THE SHORT CAPE ACROSS THE SHOULDERS ARE ALL CLEAR. ⚠️ THE CARVED WOODEN JOINTS AT "
      + "THE SHOULDERS AND ELBOWS ARE PLAINLY VISIBLE. ⚠️ THE FACE IS MATT BLACK CARVED WOOD WITH "
      + "THE CHISEL MARKS SHOWING AND NO EXPRESSION OF ANY KIND. ⚠️ IT IS AN OBJECT.",
    u: ["ရုပ်သေးရုပ်က လူတစ်ယောက်ရဲ့ အရပ်နီးပါးရှိတယ်။",
      "ခေါင်းမှာ ရှေးဟောင်းမင်းသားခေါင်းဆောင်းလို အဆင်တန်ဆာတွေ တပ်ထားတယ်။",
      "မျက်နှာက သစ်သားနက်နက်နဲ့ ထုထားတယ်။"] },

  { t: "Strings, and Nobody Holding Them", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp",
    puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ ထူးဆန်းတာက… ရုပ်သေးရဲ့ အပေါ်ဘက်မှာ ကြိုးတွေရှိပေမယ့် ကိုင်ထားတဲ့လူ မရှိဘူး။",
    p: "Tight on the air directly above the marionette, looking up past its headdress into the "
      + "dark roof space of the zayat. ⚠️ FIVE OR SIX FINE DARK STRINGS RISE FROM ITS HEAD AND "
      + "SHOULDERS, TAUT, and run up out of the lamplight. ⚠️ THEY CONVERGE ON A PLAIN WOODEN "
      + "CONTROL BAR HANGING IN THE AIR WITH NOTHING ABOVE IT AND NO HAND ON IT. ⚠️ THE RAFTERS "
      + "BEYOND ARE LOST IN BLACK. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["မျက်လုံးတွေက နက်မှောင်နေတယ်။", "လက်နှစ်ဖက်က ဘေးကို တွဲလောင်းကျနေတယ်။", "ထူးဆန်းတာက…",
      "ရုပ်သေးရဲ့ အပေါ်ဘက်မှာ ကြိုးတွေရှိပေမယ့် ကိုင်ထားတဲ့လူ မရှိဘူး။"] },

  { t: "Was That It Talking", l: "ရွာလယ်ဇရပ်", k: "two", tm: "lamp", w: ["နန္ဒာ", "သီဟ"],
    g: "နန္ဒာက ကျွန်တော့်နားကို ကပ်ပြီး မေးတယ် — “အဲဒါ… ခုနက စကားပြောတာလား?”",
    p: "Two shot at chest height in front of the zayat, ⚠️ NANDA LEANING IN CLOSE TO THIHA'S EAR "
      + "AND SPEAKING WITHOUT TAKING HER EYES OFF SOMETHING PAST CAMERA. ⚠️ BOTH ARE COMPLETE IN "
      + "FRAME AND BOTH ARE FACING THE SAME WAY. ⚠️ NEITHER IS LOOKING AT THE OTHER. ⚠️ THE WARM "
      + "LAMPLIGHT IS FULL ON BOTH FACES EQUALLY. The teak posts and the lit platform out of focus "
      + "behind them.",
    u: ["နန္ဒာက ကျွန်တော့်နားကို ကပ်ပြီး မေးတယ်။", "“အဲဒါ… ခုနက စကားပြောတာလား?”",
      "ကျွန်တော် မဖြေနိုင်ဘူး။"] },

  { t: "The Head Turned", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး"],
    g: "⚠️ ကျွီ… **ရုပ်သေးရဲ့ခေါင်းက ဖြည်းဖြည်းချင်း လှည့်လာတယ်။**",
    p: "The black marionette on the stool, close, lit warm from one side. ⚠️ ITS HEAD IS NOW "
      + "TURNED A QUARTER ROUND FROM WHERE IT WAS AND IS FACING CAMERA SQUARE ON. ⚠️ EVERYTHING "
      + "ELSE ABOUT IT IS IDENTICAL AND HAS NOT MOVED — the same hands on the same knees, the "
      + "same hanging legs, the same slack strings. ⚠️ IT IS NOT SHOWN MID-TURN AND NOTHING IS "
      + "BLURRED. ⚠️ THE CARVED FACE HAS NO EXPRESSION AND IS PLAINLY WOOD. ⚠️ A FINE RING OF "
      + "DUST ON THE STOOL SHOWS WHERE IT WAS SITTING BEFORE.",
    u: ["အဲဒီအချိန်—", "ကျွီ…", "ရုပ်သေးရဲ့ခေါင်းက ဖြည်းဖြည်းချင်း လှည့်လာတယ်။"] },

  { t: "Twelve, None Missing", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "group", tm: "lamp",
    w: ["ရွာလယ်ဇရပ်", "ဒေါ်ခင်မာ", "သက်မွန်", "ဦးဘဦး", "ဖြိုးဝေ", "မေဇင်"],
    g: "⚠️ **“ဆယ့်နှစ်ယောက်… တစ်ယောက်မှ မလျော့ပါဘူး…”**",
    p: "Five of the strangers standing on the bare earth in front of the zayat with the lamplight "
      + "full on their faces. ⚠️ ONE OF THEM — DAW KHIN MA — HAS STUMBLED BACKWARDS AND IS CAUGHT "
      + "MID-STEP WITH BOTH HANDS UP. ⚠️ THE OTHER FOUR HAVE NOT MOVED. ⚠️ EVERY FACE IS "
      + "COMPLETE, SEPARATE AND LIT IDENTICALLY — nobody is in shadow and nobody is apart. ⚠️ THE "
      + "LIT PLATFORM AND THE TEAK POSTS RISE BEHIND THEM.",
    u: ["ဒေါ်ခင်မာက လန့်ပြီး နောက်ဆုတ်သွားတယ်။", "“အမလေး!”",
      "ရုပ်သေးက ကျွန်တော်တို့ဘက်ကို တည့်တည့်ကြည့်နေတယ်။",
      "ပြီးတော့ ပါးစပ်မလှုပ်ဘဲ အသံထွက်လာတယ်။", "“ဆယ့်နှစ်ယောက်…”", "“တစ်ယောက်မှ မလျော့ပါဘူး…”"] },

  { t: "Who Are You", l: "ရွာလယ်ဇရပ်", k: "face", tm: "lamp", w: ["ရဲအောင်"],
    g: "“မင်း ဘယ်သူလဲ! ငါတို့ကို ဘာလို့ ဒီခေါ်လာတာလဲ!” — ရုပ်သေးက မဖြေဘူး။",
    p: "Close on Ye Aung standing out in front of the others with the lamplight hard on his face "
      + "from the front. ⚠️ HE IS SHOUTING AND HIS MOUTH IS WIDE OPEN AND HIS EYES ARE FIXED UP "
      + "AND FORWARD PAST CAMERA. ⚠️ ONE ARM IS THROWN OUT AND POINTING. ⚠️ THE CONTROLLED "
      + "ASSESSING FACE HAS BROKEN COMPLETELY. ⚠️ THE MID-GREY JACKET IS OPEN AND THE NEAT HAIR "
      + "HAS COME LOOSE AT THE FRONT. Black behind him past the lamplight.",
    u: ["ရဲအောင်က ရှေ့ကိုထွက်ပြီး အော်မေးတယ်။", "“မင်း ဘယ်သူလဲ! ငါတို့ကို ဘာလို့ ဒီခေါ်လာတာလဲ!”",
      "ရုပ်သေးက မဖြေဘူး။", "ခဏကြာတော့—"] },

  { t: "The Gate Opens at Dawn", c: [[1, "stinger"]], l: "ရွာတံခါးကြီး", k: "gate", tm: "moon", w: ["ရွာတံခါးကြီး"],
    g: "⚠️ **“မနက်မိုးလင်းတဲ့အချိန်မှာ ရွာတံခါး ဖွင့်ပေးမယ်…”** — အားလုံး ငြိမ်သက်သွားကြတယ်။",
    p: "Square on the great timber gate from inside the village in open moonlight, the whole "
      + "structure complete in frame. ⚠️ BOTH MASSIVE TEAK LEAVES ARE SHUT AND THE SINGLE HEAVY "
      + "TIMBER BAR LIES ACROSS THEM IN ITS IRON BRACKETS. ⚠️ THE IRON STRAPS AND STUDS ARE "
      + "ORANGE WITH RUST AND THE WOOD IS GREY AND SPLIT. ⚠️ THE BARE EARTH IN FRONT OF IT IS "
      + "EMPTY AND UNMARKED. ⚠️ THERE IS NOBODY IN THE PICTURE. Cold light, hard black shadows "
      + "under the small tiered roof.",
    u: ["“မနက်မိုးလင်းတဲ့အချိန်မှာ ရွာတံခါး ဖွင့်ပေးမယ်…”", "ကျွန်တော်တို့ အားလုံး ငြိမ်သက်သွားကြတယ်။",
      "“ဒါပေမယ့်…”", "ရုပ်သေးက ခဏရပ်တယ်။", "“မင်းတို့အားလုံး ထွက်ခွင့်ရမှာ မဟုတ်ဘူး။”"] },

  { t: "My Son Is Waiting", l: "ရွာလယ်ဇရပ်", k: "face", tm: "lamp", w: ["သက်မွန်"],
    g: "“ကျွန်မတို့ကို ပြန်လွှတ်ပေးပါ။ ကျွန်မသားလေး အိမ်မှာ စောင့်နေလို့ပါ…”",
    p: "Close on Thet Mon in front of the zayat with the lamplight full on her face. ⚠️ HER EYES "
      + "ARE FULL AND ONE TEAR HAS COME DOWN ONE CHEEK AND STOPPED. ⚠️ HER MOUTH IS OPEN AND HER "
      + "CHIN IS SHAKING. ⚠️ BOTH HER HANDS ARE PRESSED TOGETHER IN FRONT OF HER CHEST. ⚠️ THE "
      + "SILVER BANGLE HAS SLID DOWN ONE WRIST. The maroon blouse, the round knot of hair, the "
      + "thanaka. Warm orange light, black behind her.",
    u: ["သက်မွန်ဆိုတဲ့ အမျိုးသမီးတစ်ယောက်က မျက်ရည်ဝဲလာတယ်။",
      "“ကျွန်မတို့ကို ပြန်လွှတ်ပေးပါ။ ကျွန်မသားလေး အိမ်မှာ စောင့်နေလို့ပါ…”"] },

  { t: "Pay the Debt", l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ **“အိမ်ပြန်ချင်ရင်… အကြွေးဆပ်ရမယ်…”** — “ဘာအကြွေးလဲ?”",
    p: "The black marionette on the stool, close, lit warm from one side. ⚠️ ITS HEAD IS NOW "
      + "TURNED A LITTLE AWAY FROM CAMERA TOWARDS ONE SIDE — a different angle from the last shot "
      + "and nothing else about it has changed. ⚠️ IT IS NOT SHOWN MID-TURN. ⚠️ THE CARVED FACE "
      + "HAS NO EXPRESSION AND THE MOUTH IS A SHALLOW CLOSED CARVED LINE THAT HAS NOT MOVED. ⚠️ "
      + "THE STRINGS ARE SLACK. ⚠️ IT IS PLAINLY WOOD.",
    u: ["ရုပ်သေးက သူ့ဘက်ကို ခေါင်းလှည့်တယ်။", "“အိမ်ပြန်ချင်ရင်…”", "“အကြွေးဆပ်ရမယ်…”",
      "ရဲအောင်က မေးတယ်။", "“ဘာအကြွေးလဲ?”"] },

  { t: "The Debt You Forgot", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "face", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး"],
    g: "⚠️ ရုပ်သေးရဲ့ မျက်နှာမှာ အပြုံးလိုလို အရာတစ်ခု ပေါ်လာတယ် — **“မင်းတို့ မေ့ထားတဲ့ အကြွေး…”**",
    p: "The carved face of the black marionette filling the frame, square on, lit warm from "
      + "below. ⚠️ THE FACE IS UNCHANGED AND UNMOVING — matt black wood, chisel marks across the "
      + "cheeks, two shallow carved eyes painted over in the same black, a shallow closed carved "
      + "mouth. ⚠️ NOTHING ON IT HAS ALTERED AT ALL. ⚠️ THE ONLY DIFFERENCE IS THE LIGHT: the "
      + "lamp is lower than before and the shadow it throws under the carved mouth now reads, to "
      + "a frightened eye, as a lift at one corner. ⚠️ IT IS STILL WOOD.",
    u: ["ရုပ်သေးရဲ့ မျက်နှာမှာ အပြုံးလိုလို အရာတစ်ခု ပေါ်လာတယ်။", "“မင်းတို့ မေ့ထားတဲ့ အကြွေး…”"] },

  { t: "The Lamps Came On By Themselves", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "high", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "⚠️ ဇရပ်ရှေ့က မြေပြင်မှာ ဆီမီးခွက်တွေ အလိုလို လင်းလာတယ်။ **စက်ဝိုင်းအတွင်းမှာ မြေအိုး ၁၂ လုံး။**",
    p: "High above the bare ground in front of the zayat looking straight down. ⚠️ A WIDE RING OF "
      + "CLAY OIL-LAMP CUPS IS BURNING ON THE EARTH, evenly spaced all the way round. ⚠️ INSIDE "
      + "THAT RING STAND TWELVE IDENTICAL CLAY POTS, upright, whole and evenly spaced, one for "
      + "every lamp. ⚠️ THE EARTH BETWEEN AND AROUND THEM IS SWEPT AND COMPLETELY UNMARKED — no "
      + "footprint anywhere. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["အဲဒီအချိန် ဇရပ်ရှေ့က မြေပြင်မှာ ဆီမီးခွက်တွေ တစ်လုံးပြီးတစ်လုံး အလိုလို လင်းလာတယ်။",
      "ဆီမီးခွက်တွေက စက်ဝိုင်းပုံစံ။", "စက်ဝိုင်းအတွင်းမှာ မြေအိုး ၁၂ လုံး ရှိနေတယ်။"] },

  { t: "Nothing Had Been There Before", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "ခုနက အဲဒီနေရာမှာ ဘာမှမရှိခဲ့ဘူး။ ဒါပေမယ့် အခုတော့ အစကတည်းက ရှိနေခဲ့သလိုပဲ။",
    p: "Close on Thiha standing at the edge of the ring, lit from below by the lamps on the "
      + "earth. ⚠️ HIS FACE IS TURNED DOWN TOWARDS THE GROUND AND HIS EYES ARE MOVING ACROSS IT. "
      + "⚠️ HIS MOUTH IS OPEN AND HE IS NOT SPEAKING. ⚠️ THE UPWARD LIGHT IS HARD AND UNFLATTERING "
      + "AND THROWS HIS BROW INTO SHADOW. ⚠️ THE SMALL PALE SCAR ABOVE HIS LEFT EYEBROW IS "
      + "VISIBLE. Black above and behind him.",
    u: ["ခုနက အဲဒီနေရာမှာ ဘာမှမရှိခဲ့ဘူး။",
      "ဒါပေမယ့် အခုတော့ မြေအိုးတွေက အစကတည်းက ရှိနေခဲ့သလိုပဲ။"] },

  { t: "Six Debts Before Dawn", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ **“မိုးမလင်းခင် အကြွေးခြောက်ခု ဆပ်ရမယ်… အကြွေးတစ်ခုအတွက် ပွဲတစ်ပွဲ…”**",
    p: "The low carved stool on the zayat platform with the marionette seated on it, at platform "
      + "height, lit by the lamps along the edge. ⚠️ IT IS FACING STRAIGHT OUT AT THE RING OF "
      + "POTS BEYOND THE PLATFORM. ⚠️ BEYOND IT AND BELOW, FAR OUT OF FOCUS, THE RING OF BURNING "
      + "LAMPS ON THE EARTH IS VISIBLE AS A CIRCLE OF SMALL WARM POINTS. ⚠️ THE PUPPET HAS NOT "
      + "MOVED AND IS PLAINLY A CARVED OBJECT. ⚠️ NOBODY IS ON THE PLATFORM WITH IT.",
    u: ["ရုပ်သေးက ဆက်ပြောတယ်။", "“မိုးမလင်းခင် အကြွေးခြောက်ခု ဆပ်ရမယ်…”",
      "“အကြွေးတစ်ခုအတွက် ပွဲတစ်ပွဲ…”", "“ပွဲတိုင်းမှာ ရှင်မယ့်သူရှိမယ်…”",
      "“ဆုံးရှုံးရမယ့်သူလည်း ရှိမယ်…”"] },

  { t: "What If We Don't Play", l: "ရွာလယ်ဇရပ်", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "“မကစားဘူးဆိုရင်ရော?” — ⚠️ **“မကစားတဲ့သူလည်း… ပွဲထဲမှာ ပါပြီးသားပဲ…”**",
    p: "Close on Min Khant in front of the zayat with the lamplight full on his face. ⚠️ HIS CHIN "
      + "IS UP AND HIS MOUTH IS OPEN ON A SHORT QUESTION — the body is still loose and "
      + "unguarded. ⚠️ HIS EYES ARE DIRECTED UP PAST CAMERA. ⚠️ THE RED JACKET IS THE BRIGHTEST "
      + "THING IN THE FRAME. ⚠️ ONE HAND IS HALF RAISED. Warm orange light, deep black behind "
      + "him.",
    u: ["မင်းခန့်က ချက်ချင်း မေးတယ်။", "“မကစားဘူးဆိုရင်ရော?”", "ရုပ်သေးက သူ့ကို ကြည့်တယ်။",
      "“မကစားတဲ့သူလည်း…”", "“ပွဲထဲမှာ ပါပြီးသားပဲ…”"] },

  /* ── အခန်း ၅ · ပထမပွဲ ───────────────────────────────────────────────── */
  { t: "Names Appeared on the Pots", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "pot", tm: "lamp", pots: true,
    w: ["မြေအိုး"],
    g: "⚠️ ဇရပ်ရှေ့က မြေအိုးတွေမှာ စာလုံးတွေ ပေါ်လာတယ်။ ပထမအိုးမှာ — **“သီဟ”**",
    p: "One clay pot standing on the bare earth, close, lit low and warm by the lamps on the "
      + "ground. ⚠️ A SHORT LINE OF BURMESE LETTERING HAS APPEARED ON THE BELLY OF IT, SCRATCHED "
      + "SHALLOW INTO THE DRY CLAY, the dust from the scratching still in the grooves. ⚠️ THE "
      + "TEXT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ "
      + "NOTHING IS TOUCHING THE POT AND NOBODY IS IN THE PICTURE. ⚠️ THE CLAY IS OTHERWISE WHOLE "
      + "AND UNBROKEN.",
    u: ["ဇရပ်ရှေ့က မြေအိုးတွေမှာ စာလုံးတွေ ပေါ်လာတယ်။", "ပထမအိုးမှာ—", "“သီဟ”"] },

  { t: "My Name", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "ကျွန်တော် လန့်သွားတယ်။ ကျွန်တော့်နာမည်။",
    p: "Close on Thiha standing over the ring of pots, lit hard from below by the lamps on the "
      + "earth. ⚠️ HIS FACE IS TURNED DOWN AND HIS EYES ARE FIXED ON SOMETHING LOW AND OUT OF "
      + "FRAME. ⚠️ ALL THE COLOUR HAS GONE OUT OF HIS FACE AND HIS MOUTH IS SLIGHTLY OPEN. ⚠️ HE "
      + "HAS NOT MOVED. ⚠️ THE UPWARD LAMPLIGHT THROWS HARD SHADOW UP UNDER HIS BROW. Black above "
      + "and behind him.",
    u: ["ကျွန်တော် လန့်သွားတယ်။", "ကျွန်တော့်နာမည်။", "နောက်အိုးမှာ နန္ဒာ။"] },

  { t: "Twelve Names on Twelve Pots", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "high", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "မြေအိုး ၁၂ လုံးမှာ လူ ၁၂ ယောက်ရဲ့ နာမည်တွေ ရေးထားတယ်။",
    p: "High above the ring looking straight down, lit by the circle of lamps on the earth. ⚠️ "
      + "ALL TWELVE IDENTICAL POTS ARE UPRIGHT, WHOLE AND EVENLY SPACED, and every single one of "
      + "them now carries a short line of shallow scratched Burmese lettering on its belly, "
      + "turned outwards. ⚠️ EVERY LINE IS DIFFERENT AND ALL OF THEM STAY SOFT AND PARTLY "
      + "OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ THE EARTH BETWEEN THEM IS "
      + "SWEPT AND UNMARKED. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["နောက်တစ်လုံးမှာ ကိုဟန်ဇော်။",
      "အဲဒီလိုပဲ မြေအိုး ၁၂ လုံးမှာ လူ ၁၂ ယောက်ရဲ့ နာမည်တွေ ရေးထားတယ်။"] },

  { t: "Take the Pot with Your Name", l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ **“ပထမပွဲ… အိုးမကွဲစေနဲ့… မိမိနာမည်ပါသော အိုးကို ယူပါ…”**",
    p: "The marionette on the low carved stool at platform height, lit by the lamps along the "
      + "platform edge. ⚠️ IT IS FACING STRAIGHT OUT AND HAS NOT MOVED. ⚠️ ONE OF ITS CARVED "
      + "WOODEN HANDS HAS COME OFF ITS KNEE AND IS RESTING PALM-UP ON THE STOOL BESIDE IT — the "
      + "only thing in the frame that is different. ⚠️ IT IS NOT SHOWN MID-MOVEMENT. ⚠️ THE "
      + "STRINGS ARE SLACK AND RUN UP OUT OF FRAME. ⚠️ NOBODY ELSE IS ON THE PLATFORM.",
    u: ["ရုပ်သေးက ပြောတယ်။", "“ပထမပွဲ…”", "“အိုးမကွဲစေနဲ့…”", "“မိမိနာမည်ပါသော အိုးကို ယူပါ…”"] },

  { t: "Nobody Dared", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "group", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "သက်မွန်", "ဦးဘဦး", "မေဇင်", "သဇင်", "ဖြိုးဝေ"],
    g: "ကျွန်တော်တို့ တစ်ယောက်နဲ့တစ်ယောက် ကြည့်လိုက်ကြတယ်။ ဘယ်သူမှ အိုးမယူရဲကြဘူး။",
    p: "Five of the strangers standing just outside the ring of lamps, lit from below. ⚠️ EVERY "
      + "ONE OF THEM IS LOOKING DOWN AT THE POTS AND NOT ONE OF THEM HAS STEPPED OVER THE LINE OF "
      + "LAMPS. ⚠️ THEIR HANDS ARE AT THEIR SIDES OR FOLDED AND NOBODY IS REACHING. ⚠️ EVERY FACE "
      + "IS COMPLETE, SEPARATE AND LIT IDENTICALLY. ⚠️ THE EARTH INSIDE THE RING IS STILL "
      + "COMPLETELY UNMARKED. Warm light low across the ground, black above them.",
    u: ["ကျွန်တော်တို့ တစ်ယောက်နဲ့တစ်ယောက် ကြည့်လိုက်ကြတယ်။", "ဘယ်သူမှ အိုးမယူရဲကြဘူး။",
      "ရုပ်သေးက ထပ်ပြောတယ်။"] },

  { t: "Whoever Doesn't Take One Pays First", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp",
    w: ["သီဟ"],
    g: "⚠️ **“အိုးကို မယူသူသည် ပထမဆုံး အကြွေးဆပ်ရမည်…”** — ကျွန်တော် အရင်ဆုံး ရှေ့ကိုထွက်လိုက်တယ်။",
    p: "Close on Thiha stepping forward over the line of lamps, lit hard from below. ⚠️ ONE FOOT "
      + "IS ALREADY INSIDE THE RING AND HIS WEIGHT IS COMMITTED. ⚠️ HIS JAW IS SET AND HIS EYES "
      + "ARE DOWN ON THE GROUND AHEAD OF HIM. ⚠️ BOTH HIS HANDS ARE OPEN AND COMING FORWARD. ⚠️ "
      + "NOBODY ELSE IS INSIDE THE RING WITH HIM. The lamp flames are in the bottom of frame, "
      + "very close.",
    u: ["“အိုးကို မယူသူသည် ပထမဆုံး အကြွေးဆပ်ရမည်…”",
      "အဲဒီစကားကြားတော့ ကျွန်တော် အရင်ဆုံး ရှေ့ကိုထွက်လိုက်တယ်။",
      "ကိုယ့်နာမည်ပါတဲ့ အိုးကို ကောက်ယူလိုက်တယ်။"] },

  { t: "An Ordinary Pot", l: "မြေအိုးကွင်း", k: "hands", tm: "lamp", pots: true, w: ["မြေအိုး"],
    g: "မြေအိုးက သာမန်မြေအိုးတစ်လုံးလိုပဲ။ လေးလံနေတယ်။ အပြင်ဘက်မှာ အက်ကြောင်းမရှိဘူး။",
    p: "Close in on two hands lifting a clay pot off the earth, the body out of frame, lit low "
      + "and warm. ⚠️ BOTH ARMS ARE TAKING REAL WEIGHT — the fingers spread wide under the belly "
      + "and the tendons standing out on the backs of the hands. ⚠️ THE SURFACE OF THE CLAY IS "
      + "DRY, MATT AND COMPLETELY UNBROKEN with no crack anywhere on it. ⚠️ THE SCRATCHED "
      + "LETTERING ON THE BELLY STAYS SOFT AND READS AS MARKS. ⚠️ A CLEAN RING OF EARTH SHOWS "
      + "WHERE IT HAD BEEN STANDING.",
    u: ["မြေအိုးက သာမန်မြေအိုးတစ်လုံးလိုပဲ။", "လေးလံနေတယ်။", "အပြင်ဘက်မှာ အက်ကြောင်းမရှိဘူး။"] },

  { t: "One by One", l: "မြေအိုးကွင်း", k: "ring", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "နန္ဒာ", "ကိုဟန်ဇော်", "ရဲအောင်", "ထွန်းမြတ်", "ဒေါ်ခင်မာ"],
    g: "ကျန်တဲ့သူတွေလည်း တစ်ယောက်ပြီးတစ်ယောက် အိုးယူကြတယ်။ နောက်ဆုံးမှာ လူတိုင်း လက်ထဲ မြေအိုးတစ်လုံးစီ။",
    p: "The ring at chest height, far enough back to hold all of it, lit by the lamps on the "
      + "earth. ⚠️ THE PEOPLE ARE NOW STANDING INSIDE THE RING OF LAMPS AND EVERY ONE OF THEM IS "
      + "HOLDING A CLAY POT. ⚠️ THE GROUND WHERE THE POTS STOOD IS MARKED WITH CLEAN RINGS AND "
      + "FOOTPRINTS. ⚠️ EVERY PERSON IS COMPLETE IN FRAME, SEPARATE AND LIT THE SAME. ⚠️ EVERY "
      + "POT IS WHOLE AND UPRIGHT IN SOMEBODY'S ARMS. Warm low light, black beyond the lamps.",
    u: ["ကျန်တဲ့သူတွေလည်း တစ်ယောက်ပြီးတစ်ယောက် အိုးယူကြတယ်။",
      "နောက်ဆုံးမှာ လူတိုင်း လက်ထဲ မြေအိုးတစ်လုံးစီ ရှိနေပြီ။"] },

  { t: "Thirty Minutes", l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ **“ပထမပွဲ၏ အချိန်ကန့်သတ်ချက်သည် မိနစ်သုံးဆယ်… အချိန်မကုန်မီ ကိုယ့်အိုးကို မကွဲအောင် စောင့်ရှောက်ပါ…”**",
    p: "The black marionette on the stool, close, lit warm from one side. ⚠️ IT HAS NOT MOVED AND "
      + "IS FACING STRAIGHT OUT. ⚠️ THE CARVED FACE IS UNCHANGED AND THE MOUTH IS A SHALLOW "
      + "CLOSED CARVED LINE. ⚠️ THE CARVED WOODEN JOINTS AT THE SHOULDERS AND ELBOWS ARE SHARP IN "
      + "THE RAKING LIGHT. ⚠️ THE STRINGS RUN UP OUT OF FRAME AND ARE SLACK. ⚠️ IT IS PLAINLY A "
      + "WOODEN OBJECT. Black behind it past the lamplight.",
    u: ["ရုပ်သေးက စည်းကမ်းကို ကြေညာတယ်။",
      "“ပထမပွဲ၏ အချိန်ကန့်သတ်ချက်သည် မိနစ်သုံးဆယ်…”",
      "“အချိန်မကုန်မီ ကိုယ့်အိုးကို မကွဲအောင် စောင့်ရှောက်ပါ…”"] },

  { t: "Whoever Breaks It Pays With Their Life", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "group", tm: "lamp",
    pots: true, w: ["မြေအိုးကွင်း", "သီဟ", "သက်မွန်", "ဖြိုးဝေ", "မေဇင်", "ဦးဘဦး"],
    g: "⚠️ **“အိုးကွဲသူသည်… အသက်ပေးဆပ်ရမည်…”** — အားလုံး တိတ်ဆိတ်သွားကြတယ်။",
    p: "Five of the strangers inside the ring, each holding a pot, lit from below by the lamps. "
      + "⚠️ EVERY ONE OF THEM HAS TIGHTENED THEIR GRIP AT THE SAME MOMENT — arms drawn in, pots "
      + "pulled against chests and stomachs, knuckles pale. ⚠️ NOT ONE OF THEM IS LOOKING AT "
      + "ANOTHER. ⚠️ EVERY FACE IS COMPLETE, SEPARATE AND LIT IDENTICALLY. ⚠️ EVERY POT IS WHOLE. "
      + "⚠️ NOBODY IS SPEAKING. Warm upward light, hard black above.",
    u: ["“အိုးကွဲသူသည်…”", "ရုပ်သေးက ခဏရပ်တယ်။", "“အသက်ပေးဆပ်ရမည်…”",
      "အားလုံး တိတ်ဆိတ်သွားကြတယ်။"] },

  { t: "Is That All", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ထွန်းမြတ်"],
    g: "“အိုးကို မကွဲအောင် ကိုင်ထားရုံပဲလား?” — ရုပ်သေးက ပြန်မဖြေဘူး။",
    p: "Close on Tun Myat inside the ring with a pot held easily in one broad arm, lit from "
      + "below. ⚠️ HIS CHIN IS UP AND HIS MOUTH IS OPEN ON A BLUNT QUESTION. ⚠️ HIS FREE HAND IS "
      + "OPEN AND TURNED PALM-UP IN FRONT OF HIM. ⚠️ HE IS VISIBLY THE BROADEST PERSON IN THE "
      + "SERIES AND THE POT LOOKS SMALL AGAINST HIM. ⚠️ THE SCARRED KNUCKLES ON THE HAND ROUND "
      + "THE POT ARE CLEAR. Warm upward light, black behind him.",
    u: ["ကိုထွန်းမြတ်က မေးတယ်။", "“အိုးကို မကွဲအောင် ကိုင်ထားရုံပဲလား?”", "ရုပ်သေးက ပြန်မဖြေဘူး။"] },

  { t: "Then It's Easy", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "“ဒါဆို လွယ်တာပဲဗျ။ ဘယ်သူမှ အိုးမခွဲဘဲ ထိုင်နေလိုက်ရင် မပြီးဘူးလား?”",
    p: "Close on Min Khant inside the ring with his pot held loosely against one hip, lit from "
      + "below. ⚠️ HE IS HALF SMILING AND HIS EYEBROWS ARE UP — the first easy expression anybody "
      + "has had since the road. ⚠️ ONE HAND IS OFF THE POT AND GESTURING. ⚠️ HE IS LOOKING ROUND "
      + "AT THE OTHERS PAST CAMERA. ⚠️ THE RED JACKET IS THE BRIGHTEST THING IN THE FRAME. Warm "
      + "upward light, black behind him.",
    u: ["မင်းခန့်က အိုးကို ကြည့်ပြီး ပြောတယ်။",
      "“ဒါဆို လွယ်တာပဲဗျ။ ဘယ်သူမှ အိုးမခွဲဘဲ ထိုင်နေလိုက်ရင် မပြီးဘူးလား?”",
      "လူတချို့က သဘောတူကြတယ်။"] },

  { t: "It Won't Be That Easy", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["နန္ဒာ"],
    g: "နန္ဒာကတော့ သံသယရှိနေတယ် — “အဲဒီလောက်တော့ မလွယ်လောက်ဘူး…”",
    p: "Close on Nanda inside the ring with her pot held level in both arms, lit from below. ⚠️ "
      + "SHE IS NOT LOOKING AT ANYBODY — her eyes are up and off to one side on the dark beyond "
      + "the lamps. ⚠️ HER MOUTH IS SHUT AND HER BROWS ARE DRAWN. ⚠️ SHE IS THE ONLY PERSON IN "
      + "THE FRAME AND THE ONLY ONE NOT FACING THE GROUP. ⚠️ THE METAL WATCH ON HER LEFT "
      + "WRIST IS VISIBLE AGAINST THE CLAY. Warm upward light, black past her.",
    u: ["ဟုတ်တာပဲ။",
      "ဘာမှမလုပ်ဘဲ အိုးကို ကာကွယ်ထားရုံပဲဆိုရင် အားလုံး အသက်ရှင်နိုင်မှာပေါ့။",
      "နန္ဒာကတော့ သံသယရှိနေတယ်။", "“အဲဒီလောက်တော့ မလွယ်လောက်ဘူး…”"] },

  { t: "The Bell", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", w: ["ရွာလယ်ဇရပ်"],
    g: "⚠️ ဇရပ်ရှေ့မှာ ခေါင်းလောင်းသံတစ်ချက် မြည်လာတယ် — **ဒုန်း! — ပထမပွဲ စတင်သွားပြီ။**",
    p: "Tight on a heavy old bronze bell hanging from a beam at the edge of the zayat platform, "
      + "filling the frame, lit warm from below by the lamps. ⚠️ THE METAL IS DARK, PITTED AND "
      + "GREEN AT THE RIM. ⚠️ FINE PALE DUST HAS BEEN SHAKEN OFF IT AND HANGS IN THE AIR AROUND "
      + "IT. ⚠️ THE WOODEN STRIKER HANGS BESIDE IT ON ITS ROPE, STILL AND VERTICAL, NOT TOUCHING "
      + "THE BELL. ⚠️ NOBODY IS IN THE PICTURE AND NO HAND IS NEAR IT.",
    u: ["ရုပ်သေးက ဘာမှမပြောတော့ဘူး။", "ခေါင်းကို ဖြည်းဖြည်းချင်း အောက်ငုံ့လိုက်တယ်။",
      "ဇရပ်ရှေ့မှာ ခေါင်းလောင်းသံတစ်ချက် မြည်လာတယ်။", "ဒုန်း!", "ပထမပွဲ စတင်သွားပြီ။"] },

  /* ── အခန်း ၆ · စည်းကမ်းအသစ် ─────────────────────────────────────────── */
  { t: "Five Minutes and Nothing", l: "မြေအိုးကွင်း", k: "ring", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "ဦးဘဦး", "သဇင်", "မေဇင်", "ဖြိုးဝေ", "သက်မွန်"],
    g: "ပွဲစပြီး ငါးမိနစ်လောက်အထိ ဘာမှမဖြစ်ဘူး။ လူတိုင်း ကိုယ့်အိုးကို ပိုက်ထားကြတယ်။",
    p: "The ring at chest height, lit by the lamps on the earth. ⚠️ FIVE OF THE STRANGERS ARE "
      + "SPREAD WELL APART INSIDE IT — two sitting cross-legged on the bare earth with pots in "
      + "their laps, three standing with pots held against their bodies. ⚠️ EVERY ONE IS COMPLETE "
      + "IN FRAME, SEPARATE AND LIT IDENTICALLY. ⚠️ EVERY POT IS WHOLE AND UPRIGHT. ⚠️ NOBODY IS "
      + "NEAR ANYBODY ELSE AND THE EARTH BETWEEN THEM IS EMPTY.",
    u: ["ပွဲစပြီး ငါးမိနစ်လောက်အထိ ဘာမှမဖြစ်ဘူး။", "လူတိုင်း ကိုယ့်အိုးကို ပိုက်ထားကြတယ်။",
      "တချို့က မြေပြင်ပေါ်ထိုင်နေကြတယ်။", "တချို့ကတော့ ရပ်နေကြတယ်။"] },

  { t: "What Do You Think It Is", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", pots: true,
    w: ["သီဟ", "နန္ဒာ"],
    g: "“သီဟ… ရှင် ဒီရုပ်သေးကို ဘယ်လိုထင်လဲ?” — “မသိဘူး။ ဒါပေမယ့် သာမန်အရာတော့ မဟုတ်ဘူး။”",
    p: "Two shot at seated height on the bare earth inside the ring, lit low and warm. ⚠️ THIHA "
      + "AND NANDA ARE SITTING SIDE BY SIDE WITH A POT EACH IN THEIR LAPS, both complete in frame "
      + "and a clear space between them. ⚠️ SHE HAS TURNED HER HEAD TOWARDS HIM AND HE IS LOOKING "
      + "STRAIGHT AHEAD PAST CAMERA. ⚠️ BOTH POTS ARE WHOLE. ⚠️ BOTH FACES ARE LIT THE SAME. The "
      + "lamp flames low in the foreground, black beyond.",
    u: ["ကျွန်တော်က အိုးကို ပေါင်ပေါ်တင်ထားတယ်။", "နန္ဒာက ကျွန်တော့်ဘေးမှာ ထိုင်တယ်။",
      "“သီဟ… ရှင် ဒီရုပ်သေးကို ဘယ်လိုထင်လဲ?”", "“မသိဘူး။ ဒါပေမယ့် သာမန်အရာတော့ မဟုတ်ဘူး။”"] },

  { t: "Could It Really Happen", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“အိုးကွဲရင် အသက်ပေးရမယ်ဆိုတာ တကယ်ဖြစ်နိုင်လား?” — ကျွန်တော် ခဏစဉ်းစားလိုက်တယ်။",
    p: "Close on Thiha sitting with the pot in his lap, lit low and warm from one side by the "
      + "lamps. ⚠️ HE IS LOOKING DOWN INTO THE MOUTH OF THE POT AND NOT AT ANYBODY. ⚠️ ONE HAND "
      + "IS FLAT ON THE RIM AND THE FINGERS ARE SPREAD. ⚠️ HIS MOUTH IS SHUT AND HIS BROWS ARE "
      + "DRAWN. ⚠️ THE SMALL PALE SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE. Warm light down one side "
      + "of his face, black behind him.",
    u: ["“အိုးကွဲရင် အသက်ပေးရမယ်ဆိုတာ တကယ်ဖြစ်နိုင်လား?”", "ကျွန်တော် ခဏစဉ်းစားလိုက်တယ်။",
      "“ဒီရွာကို ဘယ်လိုရောက်လာလဲဆိုတာတောင် မသိတဲ့အချိန်မှာ ဘာမှ မဖြစ်နိုင်ဘူးလို့ မပြောရဲဘူး။”",
      "နန္ဒာ တိတ်သွားတယ်။"] },

  { t: "Don't Worry", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "“အစ်ကိုတို့ စိတ်မပူနဲ့။ အိုးကို ဒီတိုင်းပဲ ကိုင်ထားရင် ရပြီမဟုတ်လား?” — သူက ရယ်ပြတယ်။",
    p: "Close on Min Khant crouched on his heels inside the ring with his pot between his feet, "
      + "lit low and warm. ⚠️ HE IS SMILING AT SOMEBODY PAST CAMERA AND HIS EYEBROWS ARE UP. ⚠️ "
      + "THE SMILE DOES NOT REACH HIS EYES, WHICH ARE WIDE AND NOT STILL. ⚠️ ONE HAND IS ON THE "
      + "RIM OF THE POT AND THE OTHER IS OPEN IN A SHRUG. ⚠️ THE RED JACKET IS THE BRIGHTEST "
      + "THING IN FRAME. Warm light low across him, black above.",
    u: ["အဲဒီအချိန် မင်းခန့်က အနားကို လျှောက်လာတယ်။",
      "“အစ်ကိုတို့ စိတ်မပူနဲ့။ အိုးကို ဒီတိုင်းပဲ ကိုင်ထားရင် ရပြီမဟုတ်လား?”", "သူက ရယ်ပြတယ်။"] },

  { t: "Twenty-Five", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", w: ["သီဟ", "မင်းခန့်"],
    g: "“မင်းက အသက်ဘယ်လောက်လဲ?” — “နှစ်ဆယ့်ငါး။” — “ပစ္စည်းပို့တဲ့အလုပ် လုပ်တယ်ဗျ။”",
    p: "Two shot at seated height on the bare earth inside the ring, lit low and warm. ⚠️ THIHA "
      + "IS SITTING AND MIN KHANT IS CROUCHED FACING HIM, both complete in frame with their pots "
      + "beside them. ⚠️ THEY ARE LOOKING AT EACH OTHER — the first time in the episode two "
      + "people have done that without fear in it. ⚠️ BOTH FACES ARE LIT IDENTICALLY. ⚠️ BOTH "
      + "POTS ARE WHOLE AND UPRIGHT ON THE EARTH. Black beyond the lamp ring.",
    u: ["ဒါပေမယ့် သူ့ရယ်သံက အားနည်းနေတယ်။", "သူလည်း ကြောက်နေတာ ကျွန်တော် သိတယ်။",
      "“မင်းက အသက်ဘယ်လောက်လဲ?”", "ကျွန်တော် မေးလိုက်တယ်။", "“နှစ်ဆယ့်ငါး။”", "“ဘာလုပ်လဲ?”",
      "“ပစ္စည်းပို့တဲ့အလုပ် လုပ်တယ်ဗျ။”"] },

  { t: "I Was Taking My Mother to Hospital", l: "မြေအိုးကွင်း", k: "face", tm: "lamp",
    w: ["မင်းခန့်"],
    g: "“ဒီနေ့တောင် အမေ့ကို မနက်စောစော ဆေးရုံလိုက်ပို့ရဦးမှာ…” — သူ စကားပြောနေရင်း ရပ်သွားတယ်။",
    p: "Close on Min Khant, lit low and warm, ⚠️ HIS FACE TURNED DOWN TO THE POT IN FRONT OF HIM "
      + "AND HIS EYES ON IT. ⚠️ THE SMILE HAS GONE COMPLETELY AND HIS MOUTH HAS STOPPED HALFWAY "
      + "THROUGH A SENTENCE AND STAYED OPEN. ⚠️ BOTH HANDS ARE FLAT ON THE RIM OF THE POT. ⚠️ HIS "
      + "EYES ARE WET AND HE IS NOT BLINKING. The red jacket, the hair pushed back. Warm upward "
      + "light, black behind him.",
    u: ["သူ အိုးကိုကြည့်ပြီး ဆက်ပြောတယ်။",
      "“ဒီနေ့တောင် အမေ့ကို မနက်စောစော ဆေးရုံလိုက်ပို့ရဦးမှာ…”", "သူ စကားပြောနေရင်း ရပ်သွားတယ်။"] },

  { t: "Will We Really Get Back", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“အစ်ကို… ကျွန်တော်တို့ တကယ်ပြန်ရမှာပါနော်?” — “ပြန်ရအောင် ကြိုးစားကြတာပေါ့ကွာ။”",
    p: "Close on Thiha, lit low and warm, ⚠️ LOOKING ACROSS AT SOMEBODY LOW AND PAST CAMERA AND "
      + "NODDING ONCE. ⚠️ HIS MOUTH IS CLOSED ON THE END OF A SHORT ANSWER. ⚠️ HIS EYES ARE "
      + "STEADY AND HIS FACE IS DOING SOMETHING HIS EYES ARE NOT. ⚠️ ONE HAND HAS COME OFF HIS "
      + "OWN POT AND IS REACHING OUT FLAT TOWARDS THE EDGE OF FRAME. Warm upward light, black "
      + "beyond.",
    u: ["ပြီးတော့ အသံတိုးတိုးနဲ့ ပြောတယ်။", "“အစ်ကို… ကျွန်တော်တို့ တကယ်ပြန်ရမှာပါနော်?”",
      "ကျွန်တော် သူ့ကိုကြည့်ပြီး ခေါင်းညိတ်လိုက်တယ်။", "“ပြန်ရအောင် ကြိုးစားကြတာပေါ့ကွာ။”"] },

  { t: "The Bell Again", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ ဒုန်း! ခေါင်းလောင်းသံ ထပ်မြည်လာတယ်။ **ရုပ်သေးရဲ့ခေါင်းက မြှောက်လာတယ်။**",
    p: "The black marionette on the stool, close, lit warm from one side. ⚠️ ITS HEAD IS NOW "
      + "TILTED BACK AND UP SO THAT THE CARVED FACE IS ANGLED TOWARDS THE ROOF — a different "
      + "attitude from every previous shot and nothing else about it has changed. ⚠️ IT IS NOT "
      + "SHOWN MID-MOVEMENT AND NOTHING IS BLURRED. ⚠️ THE STRINGS ARE SLACK. ⚠️ THE CARVED FACE "
      + "HAS NO EXPRESSION AND IS PLAINLY WOOD.",
    u: ["အဲဒီအချိန်—", "ဒုန်း!", "ခေါင်းလောင်းသံ ထပ်မြည်လာတယ်။", "ရုပ်သေးရဲ့ခေါင်းက မြှောက်လာတယ်။",
      "“ပထမပွဲ၏ ဒုတိယစည်းကမ်း…”"] },

  { t: "If Not One Pot Is Broken", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "group", tm: "lamp", pots: true,
    w: ["ရွာလယ်ဇရပ်", "ရဲအောင်", "ကိုဟန်ဇော်", "ဒေါ်ခင်မာ", "နန္ဒာ", "ထွန်းမြတ်"],
    g: "⚠️ **“မိနစ်သုံးဆယ် ပြည့်သည့်အချိန်တွင် အိုးတစ်လုံးမှ မကွဲသေးလျှင်… မင်းတို့အားလုံး အသက်ပေးဆပ်ရမည်…”**",
    p: "Five of the strangers inside the ring with pots in their arms, all turned towards the "
      + "zayat and lit from the front by its lamps. ⚠️ EVERY FACE IS TURNED THE SAME WAY AND "
      + "EVERY ONE OF THEM HAS STOPPED. ⚠️ EVERY FACE IS COMPLETE, SEPARATE AND LIT IDENTICALLY. "
      + "⚠️ EVERY POT IS WHOLE. ⚠️ THE LIT PLATFORM IS BEHIND THEM, OUT OF FOCUS, with a small "
      + "black shape on a stool in the middle of it. ⚠️ NOBODY IS MOVING.",
    u: ["ကျွန်တော်တို့အားလုံး ဇရပ်ဘက်ကို လှည့်ကြည့်လိုက်ကြတယ်။",
      "“မိနစ်သုံးဆယ် ပြည့်သည့်အချိန်တွင် အိုးတစ်လုံးမှ မကွဲသေးလျှင်…”", "ရုပ်သေးက ခဏရပ်တယ်။",
      "“မင်းတို့အားလုံး အသက်ပေးဆပ်ရမည်…”"] },

  { t: "You Said Protect It", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ရဲအောင်"],
    g: "“နေဦး! အစောက ကိုယ့်အိုးကို မကွဲအောင် ကာကွယ်ရမယ်လို့ ပြောထားတာမဟုတ်လား!”",
    p: "Close on Ye Aung inside the ring, lit hard from below, ⚠️ HIS POT CLAMPED UNDER ONE ARM "
      + "AND HIS FREE ARM THROWN OUT AND POINTING AT THE ZAYAT PAST CAMERA. ⚠️ HE IS SHOUTING AND "
      + "HIS MOUTH IS WIDE OPEN. ⚠️ HIS EYES ARE WIDE AND HIS NECK IS CORDED. ⚠️ THE NEAT HAIR "
      + "HAS COME FORWARD ACROSS HIS FOREHEAD. The mid-grey jacket. Black above and behind him.",
    u: ["ဘာ?", "အားလုံး ကြက်သေသေသွားကြတယ်။", "ရဲအောင်က ချက်ချင်း အော်လိုက်တယ်။",
      "“နေဦး! အစောက ကိုယ့်အိုးကို မကွဲအောင် ကာကွယ်ရမယ်လို့ ပြောထားတာမဟုတ်လား!”"] },

  { t: "One Pot Must Break", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "face", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး"],
    g: "⚠️ **“အိုးတစ်လုံး ကွဲရမယ်… ဒါပေမယ့် မင်းအိုးတော့ မဟုတ်ရဘူး…”**",
    p: "The carved face of the black marionette filling the frame, square on, lit warm from one "
      + "side by the lamps. ⚠️ THE FACE IS IDENTICAL TO EVERY OTHER SHOT OF IT — matt black wood, "
      + "chisel marks across the cheeks, two shallow carved eyes painted over in the same black, "
      + "a shallow closed carved mouth. ⚠️ NOTHING ON IT HAS MOVED OR CHANGED. ⚠️ THE SURFACE "
      + "SHOWS THE GRAIN OF THE WOOD CLEARLY. ⚠️ IT IS AN OBJECT AND THE SHOT INSISTS ON IT.",
    u: ["ရုပ်သေးက သူ့ကို ကြည့်တယ်။", "“ဟုတ်တယ်…”", "“ဒါဆို အခုက ဘာလဲ!”",
      "ရုပ်သေးက တည်တည်ငြိမ်ငြိမ် ပြန်ဖြေတယ်။", "“အိုးတစ်လုံး ကွဲရမယ်…”",
      "“ဒါပေမယ့် မင်းအိုးတော့ မဟုတ်ရဘူး…”"] },

  { t: "Everything Changed", l: "မြေအိုးကွင်း", k: "high", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "ခုနကအထိ အားလုံးက အတူတူ ရှင်သန်နိုင်မယ်လို့ ထင်နေကြတာ။ အခုတော့ တစ်ယောက်ယောက်ရဲ့အိုးကို မဖြစ်မနေ ခွဲရတော့မယ်။",
    p: "High above the ring looking straight down, lit by the circle of lamps. ⚠️ THE TWELVE "
      + "PEOPLE WERE SPREAD EVENLY ROUND THE RING AND ARE NOW PULLING APART — every one of them "
      + "has backed outward towards the lamps and the middle of the ring is a wide empty circle "
      + "of bare earth. ⚠️ EVERY ONE IS HOLDING A POT AND EVERY POT IS WHOLE. ⚠️ EVERY PERSON IS "
      + "SEPARATE AND COUNTABLE AND NOBODY IS NEAR ANYBODY. ⚠️ THE EARTH IN THE MIDDLE IS "
      + "UNMARKED.",
    u: ["အဲဒီစကားတစ်ခွန်းနဲ့ ကျွန်တော်တို့ကြားက အခြေအနေ လုံးဝပြောင်းလဲသွားတယ်။",
      "ခုနကအထိ အားလုံးက အတူတူ ရှင်သန်နိုင်မယ်လို့ ထင်နေကြတာ။",
      "အခုတော့ တစ်ယောက်ယောက်ရဲ့အိုးကို မဖြစ်မနေ ခွဲရတော့မယ်။",
      "အဲဒါမှ ကျန်တဲ့သူတွေ အသက်ရှင်နိုင်မှာ။"] },

  { t: "Each of Them Moved", l: "မြေအိုးကွင်း", k: "group", tm: "lamp", pots: true,
    w: ["ဒေါ်ခင်မာ", "သက်မွန်", "ကိုဟန်ဇော်", "မြေအိုးကွင်း"],
    g: "ဒေါ်ခင်မာက အိုးကို ရင်ဘတ်နဲ့ဖိထားတယ်။ သက်မွန်က နောက်ဆုတ်သွားတယ်။ ကိုဟန်ဇော်က လူတွေကို မယုံသလို ကြည့်နေတယ်။",
    p: "Three of the strangers inside the ring, well apart, lit from below. ⚠️ DAW KHIN MA HAS "
      + "HER POT CRUSHED AGAINST HER CHEST WITH BOTH ARMS ROUND IT AND HER SHOULDERS HUNCHED OVER "
      + "IT. ⚠️ THET MON IS CAUGHT MID-STEP BACKWARDS WITH HER POT HELD LOW. ⚠️ KO HAN ZAW IS "
      + "STANDING SQUARE WITH HIS POT UNDER ONE ARM AND HIS HEAD TURNED, looking sideways at "
      + "somebody out of frame. ⚠️ ALL THREE ARE COMPLETE, SEPARATE AND LIT THE SAME. ⚠️ ALL "
      + "THREE POTS ARE WHOLE.",
    u: ["ဒေါ်ခင်မာက ချက်ချင်း သူ့အိုးကို ရင်ဘတ်နဲ့ဖိထားတယ်။", "သက်မွန်က နောက်ဆုတ်သွားတယ်။",
      "ကိုဟန်ဇော်က ပတ်ဝန်းကျင်က လူတွေကို မယုံသလို ကြည့်နေတယ်။"] },

  { t: "Only the One Whose Pot Breaks", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "“အိုးကွဲတဲ့သူပဲ သေမှာလား?” — “ဟုတ်တယ်…” — “ကျန်တဲ့သူတွေ အကုန်ရှင်မယ်ပေါ့?” — “ဟုတ်တယ်…”",
    p: "The low carved stool with the marionette seated on it at platform height, lit by the "
      + "lamps along the edge. ⚠️ IT IS FACING STRAIGHT OUT AND BOTH ITS CARVED HANDS ARE BACK ON "
      + "ITS OWN KNEES. ⚠️ IT HAS NOT MOVED. ⚠️ THE DARK PLANK FLOOR AROUND IT IS BARE AND SWEPT. "
      + "⚠️ BEYOND THE PLATFORM, FAR OUT OF FOCUS, THE RING OF LAMPS ON THE EARTH READS AS A "
      + "CIRCLE OF SMALL WARM POINTS WITH DARK SHAPES STANDING BETWEEN THEM. ⚠️ NOBODY IS ON THE "
      + "PLATFORM.",
    u: ["ရဲအောင်က ရုပ်သေးကို ထပ်မေးတယ်။", "“အိုးကွဲတဲ့သူပဲ သေမှာလား?”", "“ဟုတ်တယ်…”",
      "“အိုးတစ်လုံး ကွဲရင် ကျန်တဲ့သူတွေ အကုန်ရှင်မယ်ပေါ့?”", "“ဟုတ်တယ်…”"] },

  { t: "Nobody Spoke", l: "မြေအိုးကွင်း", k: "ground", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "⚠️ ဘယ်သူမှ စကားမပြောတော့ဘူး။ **အိုးတစ်လုံးကွဲဖို့ဆိုတာ အိုးပိုင်ရှင်တစ်ယောက် သေရမယ်ဆိုတဲ့ အဓိပ္ပာယ်ပဲ။**",
    p: "A few inches above the bare earth inside the ring, level along it, lit by the lamps. ⚠️ "
      + "SEVERAL PAIRS OF FEET IN MODERN SHOES ARE VISIBLE AT DIFFERENT DISTANCES ACROSS THE "
      + "FRAME AND EVERY ONE OF THEM IS PLANTED AND STILL. ⚠️ BESIDE EACH PAIR, THE CURVED BASE "
      + "OF A CLAY POT RESTS ON THE EARTH. ⚠️ THE GROUND BETWEEN THEM IS WIDE, BARE AND EMPTY. "
      + "⚠️ NO FACES ARE IN FRAME. ⚠️ NOTHING IS BROKEN. Warm light raking low across the dust.",
    u: ["ဒီတစ်ခါတော့ ဘယ်သူမှ စကားမပြောတော့ဘူး။", "ဘာလို့လဲဆိုတော့…",
      "အိုးတစ်လုံးကွဲဖို့ဆိုတာ အိုးပိုင်ရှင်တစ်ယောက် သေရမယ်ဆိုတဲ့ အဓိပ္ပာယ်ပဲ။"] },

  /* ── အခန်း ၇ · ဘယ်သူ့ကို ရွေးမလဲ ────────────────────────────────────── */
  { t: "Fifteen Minutes Left", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "ring", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "ရဲအောင်", "သက်မွန်", "ဖြိုးဝေ", "မေဇင်", "ဦးဘဦး"],
    g: "အချိန်က ဆယ့်ငါးမိနစ်ပဲ ကျန်တော့တယ်။ လူတွေ စိတ်ပူလာကြပြီ။",
    p: "The ring at chest height, lit by the lamps on the earth. ⚠️ FIVE OF THE STRANGERS ARE "
      + "INSIDE IT WITH POTS IN THEIR ARMS AND EVERY ONE OF THEM IS MOVING — pacing, turning, "
      + "shifting their grip. ⚠️ NOT ONE OF THEM IS SITTING ANY MORE. ⚠️ EVERY FACE IS COMPLETE, "
      + "SEPARATE AND LIT IDENTICALLY. ⚠️ EVERY POT IS WHOLE. ⚠️ THE EARTH IN THE MIDDLE IS "
      + "CHURNED WITH FOOTPRINTS NOW WHERE IT WAS SWEPT BEFORE.",
    u: ["အချိန်က ဆယ့်ငါးမိနစ်ပဲ ကျန်တော့တယ်။", "လူတွေ စိတ်ပူလာကြပြီ။",
      "ရဲအောင်က ရှေ့ကိုထွက်ပြီး ပြောတယ်။"] },

  { t: "We Have to Choose Somebody", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ရဲအောင်"],
    g: "“အားလုံး နားထောင်ကြဦး။ ဒီလိုနေရင် အားလုံးသေမယ်။ တစ်ယောက်ယောက်ကို ရွေးရတော့မယ်။”",
    p: "Close on Ye Aung standing out in the middle of the ring, lit hard from below. ⚠️ HE IS "
      + "FACING CAMERA AND SPEAKING WITH HIS CHIN LEVEL AND BOTH HANDS RAISED AND OPEN. ⚠️ HIS "
      + "POT IS ON THE EARTH BETWEEN HIS FEET, out of focus at the bottom of frame. ⚠️ HE HAS "
      + "PUT IT DOWN TO SAY THIS AND HE IS THE ONLY PERSON WHO HAS. ⚠️ HIS EXPRESSION IS "
      + "CONTROLLED AGAIN. Warm upward light, black above and behind him.",
    u: ["“အားလုံး နားထောင်ကြဦး။ ဒီလိုနေရင် အားလုံးသေမယ်။ တစ်ယောက်ယောက်ကို ရွေးရတော့မယ်။”",
      "သက်မွန်က ချက်ချင်း ပြန်ပြောတယ်။", "“ဘယ်သူ့ကို ရွေးမှာလဲ?”", "ရဲအောင်က မဖြေဘူး။"] },

  { t: "The Oldest One", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ကိုဟန်ဇော်"],
    g: "“ငါတို့ထဲမှာ အသက်အကြီးဆုံးလူကို ရွေးလိုက်ရင်ရော…”",
    p: "Close on Ko Han Zaw inside the ring with his pot clamped under one arm, lit hard from "
      + "below. ⚠️ HE IS SPEAKING AND HIS EYES ARE NOT ON THE LENS — they are directed low and "
      + "off to one side at somebody out of frame. ⚠️ HIS MOUTH IS SET AND HIS JAW IS WORKING. "
      + "⚠️ ONE SHOULDER IS TURNED AWAY AS IF HE WOULD RATHER NOT HAVE SAID IT. ⚠️ THE CHECKED "
      + "SHIRT AND THE STUBBLE BEARD ARE CLEAR. Warm upward light, black behind him.",
    u: ["ကိုဟန်ဇော်က ဝင်ပြောတယ်။", "“ငါတို့ထဲမှာ အသက်အကြီးဆုံးလူကို ရွေးလိုက်ရင်ရော…”"] },

  { t: "Their Faces", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", pots: true,
    w: ["ဒေါ်ခင်မာ", "ဦးဘဦး"],
    g: "ဒေါ်ခင်မာရဲ့မျက်နှာ ပျက်သွားတယ်။ ဦးဘဦးက သူ့အိုးကို ပိုက်ထားရင်း ခေါင်းငုံ့သွားတယ်။",
    p: "Two shot at chest height inside the ring, lit from below. ⚠️ DAW KHIN MA AND U BA OO ARE "
      + "STANDING APART FROM EACH OTHER, both complete in frame, both holding pots. ⚠️ ALL THE "
      + "COLOUR HAS GONE OUT OF HER FACE AND HER EYES ARE WIDE AND MOVING. ⚠️ HIS HEAD HAS GONE "
      + "DOWN AND HIS FACE IS LOST IN THE SHADOW UNDER HIS OWN BROW. ⚠️ NEITHER IS LOOKING AT "
      + "THE OTHER. ⚠️ THEY ARE THE TWO OLDEST PEOPLE IN THE SERIES AND THE FRAME SAYS SO.",
    u: ["အဲဒီစကားကြားတော့ ဒေါ်ခင်မာရဲ့မျက်နှာ ပျက်သွားတယ်။",
      "ဦးဘဦးဆိုတဲ့ အဘိုးကြီးကလည်း သူ့အိုးကို ပိုက်ထားရင်း ခေါင်းငုံ့သွားတယ်။"] },

  { t: "That Isn't Fair", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“အဲဒီလိုလုပ်လို့ မရဘူးလေဗျာ။ အသက်ကြီးတာနဲ့ပဲ သေရမယ်ဆိုတာ ဘယ်လိုလုပ်တရားမျှတမှာလဲ?”",
    p: "Close on Thiha inside the ring with his pot held against his side, lit hard from below. "
      + "⚠️ HE HAS STEPPED FORWARD AND HIS FREE ARM IS OUT AND OPEN. ⚠️ HIS MOUTH IS OPEN AND HIS "
      + "BROWS ARE DRAWN HARD TOGETHER. ⚠️ HIS EYES ARE ON SOMEBODY ACROSS THE RING PAST CAMERA. "
      + "⚠️ THE SMALL PALE SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE. Warm upward light, hard black "
      + "above him.",
    u: ["ကျွန်တော် ချက်ချင်း ပြန်ပြောလိုက်တယ်။",
      "“အဲဒီလိုလုပ်လို့ မရဘူးလေဗျာ။ အသက်ကြီးတာနဲ့ပဲ သေရမယ်ဆိုတာ ဘယ်လိုလုပ်တရားမျှတမှာလဲ?”"] },

  { t: "Then What Will You Do", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", pots: true,
    w: ["ကိုဟန်ဇော်", "သီဟ"],
    g: "“ဒါဆို မင်းက ဘာလုပ်မလဲ?” — “မင်းအိုးကို မင်းခွဲမှာလား?” — ကျွန်တော် ပြန်မဖြေနိုင်ဘူး။",
    p: "Two shot at chest height inside the ring, lit from below. ⚠️ KO HAN ZAW AND THIHA ARE "
      + "FACING EACH OTHER IN PROFILE A PACE APART, both complete in frame, both holding pots. ⚠️ "
      + "KO HAN ZAW'S CHIN IS PUSHED FORWARD AND HIS MOUTH IS OPEN. ⚠️ THIHA'S MOUTH IS SHUT AND "
      + "HIS EYES HAVE DROPPED. ⚠️ BOTH FACES ARE LIT IDENTICALLY. ⚠️ BOTH POTS ARE WHOLE. The "
      + "lamp flames low in the foreground.",
    u: ["ကိုဟန်ဇော်က ကျွန်တော့်ကို ပြန်ကြည့်တယ်။", "“ဒါဆို မင်းက ဘာလုပ်မလဲ?”",
      "ကျွန်တော် တိတ်သွားတယ်။", "သူ ဆက်ပြောတယ်။", "“မင်းအိုးကို မင်းခွဲမှာလား?”",
      "ကျွန်တော် ပြန်မဖြေနိုင်ဘူး။"] },

  { t: "Nobody Wants to Die", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ကိုဟန်ဇော်"],
    g: "⚠️ **“တွေ့လား… ကိုယ်တိုင်ကျတော့ ဘယ်သူမှ မသေချင်ဘူး။”**",
    p: "Close on Ko Han Zaw inside the ring, lit hard from below. ⚠️ HIS CHIN IS DOWN AT THE BOTTOM OF A "
      + "SINGLE NOD AND HIS EYES ARE STEADY ON THE LENS. ⚠️ THERE IS NO TRIUMPH IN HIS FACE AT ALL — it is "
      + "tired and it is certain. ⚠️ HIS POT IS HELD HARD AGAINST HIS CHEST WITH BOTH ARMS. ⚠️ "
      + "THE STUBBLE BEARD AND THE OPEN CHECKED SHIRT ARE CLEAR. Warm upward light, deep black "
      + "beyond him.",
    u: ["ကိုဟန်ဇော်က ခေါင်းညိတ်လိုက်တယ်။", "“တွေ့လား… ကိုယ်တိုင်ကျတော့ ဘယ်သူမှ မသေချင်ဘူး။”"] },

  { t: "Draw Lots", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မေဇင်"],
    g: "“မဲနှိုက်ကြရင်ရော?” — “ဘာမဲလဲ?”",
    p: "Close on May Zin inside the ring with her pot held level in both arms, lit from below. ⚠️ "
      + "SHE IS SPEAKING QUIETLY AND HER CHIN IS SLIGHTLY LOWERED. ⚠️ THE ROUND THIN-RIMMED "
      + "SPECTACLES CATCH THE LAMPLIGHT FROM BELOW IN TWO SMALL WARM ARCS. ⚠️ SHE IS THE ONLY "
      + "PERSON IN THE SERIES WHO WEARS GLASSES AND SHE READS INSTANTLY. ⚠️ THE CRISP WHITE "
      + "BLOUSE IS CLEAR. ⚠️ HER EXPRESSION IS PRECISE AND NOT FRIGHTENED. Black behind her.",
    u: ["အဲဒီအချိန်မှာ မေဇင်ဆိုတဲ့ မိန်းကလေးတစ်ယောက်က ဝင်ပြောတယ်။", "“မဲနှိုက်ကြရင်ရော?”",
      "နန္ဒာက သူ့ကို လှည့်ကြည့်တယ်။", "“ဘာမဲလဲ?”"] },

  { t: "I Can't Draw Lots", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["သက်မွန်"],
    g: "“ကျွန်မ မဲမနှိုက်နိုင်ဘူး။ ကျွန်မသားလေးကို ပြန်တွေ့ရဦးမယ်…”",
    p: "Close on Thet Mon inside the ring, lit hard from below. ⚠️ SHE IS SHAKING HER HEAD IN "
      + "SMALL FAST MOVEMENTS AND HER EYES ARE STREAMING. ⚠️ HER POT IS CRUSHED AGAINST HER CHEST "
      + "WITH BOTH ARMS AND HER CHIN IS DOWN AGAINST THE RIM OF IT. ⚠️ HER MOUTH IS OPEN. ⚠️ THE "
      + "SILVER BANGLE HAS SLID DOWN THE ARM AROUND THE POT. The maroon blouse, the round knot of "
      + "hair. Warm upward light, black beyond.",
    u: ["“လူတိုင်းမှာ အသက်ရှင်ခွင့် တူတူရှိတယ်ဆိုရင် တရားမျှမျှတတ မဲနှိုက်ကြတာပေါ့…”",
      "သက်မွန်က မျက်ရည်ဝဲလာတယ်။",
      "“ကျွန်မ မဲမနှိုက်နိုင်ဘူး။ ကျွန်မသားလေးကို ပြန်တွေ့ရဦးမယ်…”"] },

  { t: "Isn't There Another Way", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“အစ်ကိုတို့… ကျွန်တော်တို့ တခြားနည်းလမ်း စဉ်းစားကြည့်လို့ မရဘူးလား?”",
    p: "Close on Thiha inside the ring, lit from below, ⚠️ HIS FACE TURNED AWAY FROM EVERYBODY "
      + "AND HIS EYES MOVING ACROSS SOMETHING IN THE MIDDLE DISTANCE PAST CAMERA. ⚠️ HE IS NOT "
      + "LISTENING TO THE ARGUMENT ANY MORE. ⚠️ HIS MOUTH IS SHUT AND HIS BROWS ARE DRAWN. ⚠️ ONE "
      + "HAND HAS COME UP TO THE RIM OF HIS OWN POT AND STOPPED THERE. Warm upward light, the "
      + "dark village rooflines just separable far behind him.",
    u: ["မင်းခန့်က သူ့အိုးကို ပိုက်ထားရင်း ပြောတယ်။",
      "“အစ်ကိုတို့… ကျွန်တော်တို့ တခြားနည်းလမ်း စဉ်းစားကြည့်လို့ မရဘူးလား?”",
      "ကျွန်တော်လည်း အဲဒီလိုပဲ စဉ်းစားနေခဲ့တာ။"] },

  { t: "What About Another Pot", l: "ရွာအဝင်လမ်း", k: "insert", tm: "lamp", w: ["ရွာအဝင်လမ်း"],
    g: "ရုပ်သေးက အိုးတစ်လုံး ကွဲရမယ်လို့ ပြောတာ။ ဒါဆို တခြားအိုးတစ်လုံးကို ခွဲရင်ရော?",
    p: "Tight on the ground beside a village doorway in the warm spill of an oil lamp from "
      + "inside. ⚠️ TWO ORDINARY OLD CLAY WATER POTS STAND AGAINST THE PLANK WALL WITH A COCONUT "
      + "DIPPER RESTING ON ONE OF THEM. ⚠️ THEY ARE THE SAME SHAPE AS THE GAME POTS BUT OLDER, "
      + "DIRTIER AND WEATHERED, AND THERE IS NO LETTERING ON EITHER OF THEM ANYWHERE. ⚠️ THE "
      + "SWEPT EARTH AROUND THEM IS BARE. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["ဘာလို့ တစ်ယောက်ယောက်ရဲ့အိုးကိုပဲ ခွဲရမှာလဲ?", "ရုပ်သေးက အိုးတစ်လုံး ကွဲရမယ်လို့ ပြောတာ။",
      "ဒါဆို တခြားအိုးတစ်လုံးကို ခွဲရင်ရော?", "ကျွန်တော် ရွာလယ်က အိမ်တွေဘက်ကို ကြည့်လိုက်တယ်။",
      "အိမ်တွေရှေ့မှာ သာမန်မြေအိုးတွေ ရှိနေတယ်။"] },

  { t: "Where Are You Going", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "behind", tm: "lamp", w: ["သီဟ"],
    g: "ကျွန်တော် အဲဒီဘက်ကို ပြေးသွားလိုက်တယ်။ “သီဟ! ဘယ်သွားမလို့လဲ?” — “ခဏစောင့်!”",
    p: "From behind Thiha at standing height, the back of his head and shoulders filling the "
      + "lower frame and the lit village street beyond him. ⚠️ HE IS RUNNING AWAY FROM CAMERA "
      + "WITH HIS OWN POT STILL CLAMPED UNDER ONE ARM, caught mid-stride. ⚠️ THE LIT DOORWAYS OF "
      + "THE TIMBER HOUSES RUN AWAY ON BOTH SIDES AHEAD OF HIM. ⚠️ THE STREET IS COMPLETELY EMPTY "
      + "AND NOBODY IS AHEAD OF HIM. Warm pools of lamplight, black between them.",
    u: ["ကျွန်တော် အဲဒီဘက်ကို ပြေးသွားလိုက်တယ်။", "နန္ဒာက နောက်ကနေ အော်တယ်။",
      "“သီဟ! ဘယ်သွားမလို့လဲ?”", "“ခဏစောင့်!”"] },

  { t: "I Threw It Down", l: "မြေအိုးကွင်း", k: "insert", tm: "lamp", w: ["မြေအိုးကွင်း"],
    g: "⚠️ ဇရပ်ရှေ့မှာ မြေပြင်ပေါ်ကို ပစ်ချလိုက်တယ် — **ခွမ်း! — အိုးက အစိတ်စိတ်အမြွှာမြွှာ ကွဲသွားတယ်။**",
    p: "Tight and low on the bare earth in front of the zayat, lit by the lamps. ⚠️ AN OLD "
      + "WEATHERED CLAY POT IS IN PIECES ON THE GROUND — large curved shards spread flat where it "
      + "came down, the clay dirtier and more weathered than the game pots. ⚠️ THERE IS NO "
      + "LETTERING ON ANY OF THE SHARDS. ⚠️ FINE PALE DUST HANGS IN THE AIR ABOVE THEM. ⚠️ A PAIR "
      + "OF FEET IS AT THE EDGE OF FRAME, out of focus, standing over it. ⚠️ TWELVE WHOLE POTS "
      + "ARE VISIBLE FAR BEHIND, OUT OF FOCUS, ALL STILL UPRIGHT.",
    u: ["ကျွန်တော် အိမ်တစ်အိမ်ရှေ့က မြေအိုးဟောင်းတစ်လုံးကို ယူလာခဲ့တယ်။",
      "ပြီးတော့ ဇရပ်ရှေ့မှာ မြေပြင်ပေါ်ကို ပစ်ချလိုက်တယ်။", "ခွမ်း!",
      "အိုးက အစိတ်စိတ်အမြွှာမြွှာ ကွဲသွားတယ်။"] },

  { t: "A Pot Has Broken", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“အိုးတစ်လုံး ကွဲပြီလေ! အခု ပွဲပြီးပြီမဟုတ်လား!” — ရုပ်သေးက ဘာမှမပြောဘူး။",
    p: "Close on Thiha from slightly below, his head tipped back and up towards the zayat "
      + "platform, lit hard from below by the lamps. ⚠️ HIS MOUTH IS WIDE OPEN ON A SHOUT AND HIS "
      + "EYES ARE UP AND BLAZING. ⚠️ ONE ARM IS THROWN OUT AND DOWN, POINTING AT THE GROUND. ⚠️ "
      + "HIS OWN POT IS STILL UNDER THE OTHER ARM. ⚠️ THIS IS THE ONLY SHOT IN THE EPISODE WHERE "
      + "HE LOOKS LIKE HE MIGHT WIN. Warm upward light, black above him.",
    u: ["လူတိုင်း ကျွန်တော့်ကို လှည့်ကြည့်လိုက်ကြတယ်။",
      "ကျွန်တော် ဇရပ်ပေါ်က ရုပ်သေးကို မော့ကြည့်တယ်။",
      "“အိုးတစ်လုံး ကွဲပြီလေ! အခု ပွဲပြီးပြီမဟုတ်လား!”", "ရုပ်သေးက ဘာမှမပြောဘူး။"] },

  { t: "Whose Name Is On It", l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး"],
    g: "⚠️ **“မင်း ယူလာတဲ့အိုးမှာ… ဘယ်သူ့နာမည် ပါသလဲ?”**",
    p: "The black marionette on the stool, close, lit warm from one side. ⚠️ ITS HEAD IS TURNED "
      + "DOWN AND TOWARDS CAMERA — angled at the ground below the platform rather than straight "
      + "out. ⚠️ EVERYTHING ELSE ABOUT IT IS IDENTICAL AND HAS NOT MOVED. ⚠️ IT IS NOT SHOWN "
      + "MID-MOVEMENT. ⚠️ THE CARVED FACE HAS NO EXPRESSION AND THE MOUTH IS A SHALLOW CLOSED "
      + "CARVED LINE. ⚠️ THE STRINGS ARE SLACK. ⚠️ IT IS PLAINLY WOOD.",
    u: ["ကျွန်တော် ထပ်အော်တယ်။", "“အိုးတစ်လုံး ကွဲရမယ်လို့ပဲ ပြောထားတာလေ!”",
      "ခဏကြာတော့ ရုပ်သေးရဲ့အသံ ထွက်လာတယ်။", "“မင်း ယူလာတဲ့အိုးမှာ…”", "“ဘယ်သူ့နာမည် ပါသလဲ?”"] },

  { t: "Only a Pot in the Game", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "insert", tm: "lamp", w: ["မြေအိုးကွင်း"],
    g: "⚠️ **“ပွဲထဲမှာ ပါသောအိုးသာ အကြွေးဆပ်နိုင်သည်…”** — ဒီနည်းလမ်းလည်း မရဘူး။",
    p: "Tight on the broken shards of the old weathered pot on the bare earth, lit by the lamps, "
      + "shallow focus. ⚠️ EVERY VISIBLE FACE OF EVERY SHARD IS BLANK — no lettering, no mark, "
      + "nothing scratched into any of them. ⚠️ THE DUST HAS SETTLED AND NOTHING IS MOVING. ⚠️ "
      + "ONE WHOLE GAME POT STANDS UPRIGHT AND SHARP IN THE BACKGROUND WITH ITS SCRATCHED "
      + "LETTERING TURNED TOWARDS THE LENS, soft but plainly there. ⚠️ NOBODY IS IN THE PICTURE.",
    u: ["ကျွန်တော် ရင်ထဲ ဒိန်းခနဲဖြစ်သွားတယ်။", "ရုပ်သေးက ဆက်ပြောတယ်။",
      "“ပွဲထဲမှာ ပါသောအိုးသာ အကြွေးဆပ်နိုင်သည်…”", "ကျွန်တော် ဘာမှမပြောနိုင်တော့ဘူး။",
      "ဒီနည်းလမ်းလည်း မရဘူး။",
      "ကျွန်တော်တို့ လက်ထဲမှာရှိတဲ့ အိုး ၁၂ လုံးထဲက တစ်လုံးကိုပဲ ခွဲရတော့မယ်။"] },

  /* ── အခန်း ၈ · မြေအိုးအောက်က နာမည် ──────────────────────────────────── */
  { t: "Ten Minutes Left", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "အချိန်က ဆယ်မိနစ်ပဲ ကျန်တော့တယ်။ ကျွန်တော့်အိုးရဲ့ အောက်ခြေမှာ စာတစ်ခုခု ရေးထားသလိုပဲ။",
    p: "Close on Thiha inside the ring, lit from below, ⚠️ HIS POT TILTED UP IN BOTH HANDS AND "
      + "HIS HEAD BENT DOWN OVER IT, looking at its underside. ⚠️ HIS BROWS ARE DRAWN AND HIS "
      + "EYES ARE NARROWED. ⚠️ ONE THUMB IS RUBBING AT SOMETHING ON THE CLAY. ⚠️ THE LAMPLIGHT "
      + "FROM BELOW CATCHES THE BASE OF THE POT AND THROWS HIS FACE INTO SHADOW ABOVE IT. Black "
      + "behind him.",
    u: ["အချိန်က ဆယ်မိနစ်ပဲ ကျန်တော့တယ်။", "ဒီအချိန်မှာ ကျွန်တော် ထူးဆန်းတာတစ်ခု သတိထားမိတယ်။",
      "ကျွန်တော့်အိုးရဲ့ အောက်ခြေမှာ စာတစ်ခုခု ရေးထားသလိုပဲ။"] },

  { t: "A Name Underneath", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "under", tm: "lamp", pots: true,
    w: ["မြေအိုး"],
    g: "⚠️ အောက်ခြေမှာ နာမည်တစ်ခု ရေးထားတယ် — **“မေခ”**",
    p: "Square on the upturned base of a clay pot held in two hands, filling the frame, lit low "
      + "and warm by the lamps. ⚠️ A SHORT NAME IS SCRATCHED SHALLOW INTO THE CENTRE OF THE DRY "
      + "CLAY IN BURMESE LETTERING, the dust from the scratching still sitting in the grooves. ⚠️ "
      + "THE TEXT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. "
      + "⚠️ THE CLAY AROUND IT IS UNMARKED AND UNBROKEN. ⚠️ THE FINGERS HOLDING THE POT ARE AT "
      + "THE EDGES OF FRAME.",
    u: ["ကျွန်တော် အိုးကို ဖြည်းဖြည်းလှန်ကြည့်လိုက်တယ်။", "အောက်ခြေမှာ နာမည်တစ်ခု ရေးထားတယ်။",
      "“မေခ”"] },

  { t: "My Sister's Name", l: "မြေအိုးကွင်း", k: "hands", tm: "lamp", w: ["မြေအိုး"],
    g: "ကျွန်တော့်လက်တွေ တုန်သွားတယ်။ မေခဆိုတာ ကျွန်တော့်ညီမလေးနာမည်။",
    p: "Close in on two hands holding the upturned pot, the face out of frame, lit low and warm. "
      + "⚠️ BOTH HANDS ARE VISIBLY SHAKING — the fingers splayed too wide on the clay and the "
      + "tendons standing out across the backs of them. ⚠️ THE POT HAS TILTED AND IS NOT LEVEL "
      + "ANY MORE. ⚠️ THE SCRATCHED LETTERING ON THE BASE IS PARTLY TURNED AWAY AND READS AS "
      + "MARKS. ⚠️ THE CLAY IS WHOLE AND UNBROKEN. Black beyond the hands.",
    u: ["ကျွန်တော့်လက်တွေ တုန်သွားတယ်။", "မေခ…", "မေခဆိုတာ ကျွန်တော့်ညီမလေးနာမည်။",
      "လွန်ခဲ့တဲ့ ရှစ်နှစ်က သေသွားတဲ့ ကျွန်တော့်ညီမလေး။"] },

  { t: "Why Is It Here", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "ကျွန်တော် မယုံနိုင်ဘူး။ ဘာလို့ ကျွန်တော့်ညီမနာမည် ဒီမြေအိုးအောက်မှာ ရှိနေတာလဲ?",
    p: "Close on Thiha inside the ring, lit hard from below. ⚠️ HIS HEAD HAS COME UP OFF THE POT "
      + "AND HIS EYES ARE ENORMOUS AND UNFOCUSED. ⚠️ ALL THE COLOUR HAS GONE OUT OF HIS FACE AND "
      + "HIS MOUTH IS OPEN. ⚠️ THE POT IS STILL UPTURNED IN HIS HANDS AT THE BOTTOM OF FRAME, "
      + "OUT OF FOCUS AND TILTING. ⚠️ THE SMALL PALE SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE. "
      + "Warm upward light, black above him.",
    u: ["ကျွန်တော် မယုံနိုင်ဘူး။", "ဘာလို့ ကျွန်တော့်ညီမနာမည် ဒီမြေအိုးအောက်မှာ ရှိနေတာလဲ?",
      "ကျွန်တော် နန္ဒာ့ကို ခေါ်လိုက်တယ်။"] },

  { t: "Look Under Yours", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["နန္ဒာ"],
    g: "“နန္ဒာ… ခင်ဗျားအိုးအောက်ကို ကြည့်ကြည့်ပါလား?” — သူ့မျက်နှာ ချက်ချင်း ပျက်သွားတယ်။",
    p: "Close on Nanda inside the ring with her pot tilted up in both hands and her head bent "
      + "over its base, lit from below. ⚠️ SHE IS CAUGHT AT THE EXACT MOMENT OF READING IT — the "
      + "eyes stopped, the mouth coming open, the whole face emptying out. ⚠️ ONE HAND HAS "
      + "SLIPPED ON THE CLAY. ⚠️ THE LOW TIDY PONYTAIL AND THE METAL WATCH ARE CLEAR. ⚠️ THE "
      + "LAMPLIGHT FROM BELOW IS HARD AND UNFLATTERING. Black behind her.",
    u: ["“နန္ဒာ… ခင်ဗျားအိုးအောက်ကို ကြည့်ကြည့်ပါလား?”", "နန္ဒာက သူ့အိုးကို လှန်ကြည့်တယ်။",
      "သူ့မျက်နှာ ချက်ချင်း ပျက်သွားတယ်။", "“ဟင်…”"] },

  { t: "That's My Father's Name", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", pots: true,
    w: ["နန္ဒာ", "သီဟ"],
    g: "“ဒါ… ကျွန်မအဖေနာမည်…” — “အဖေက…?” — “လွန်ခဲ့တဲ့ သုံးနှစ်က ဆုံးသွားပြီ…”",
    p: "Two shot at chest height inside the ring, lit from below. ⚠️ THIHA AND NANDA ARE FACING "
      + "EACH OTHER A PACE APART WITH BOTH POTS HELD UPTURNED BETWEEN THEM. ⚠️ BOTH ARE COMPLETE "
      + "IN FRAME AND BOTH FACES ARE LIT IDENTICALLY. ⚠️ THE TWO SCRATCHED BASES ARE TURNED "
      + "SLIGHTLY TOWARDS EACH OTHER AND BOTH SETS OF LETTERING READ AS MARKS. ⚠️ NEITHER POT IS "
      + "BROKEN. ⚠️ NOBODY ELSE IS IN FRAME.",
    u: ["“ဘာဖြစ်လို့လဲ?”", "သူ အသံတိုးတိုးနဲ့ ပြောတယ်။", "“ဒါ… ကျွန်မအဖေနာမည်…”",
      "ကျွန်တော် ရင်ထဲ ပိုအေးလာတယ်။", "“အဖေက…?”", "“လွန်ခဲ့တဲ့ သုံးနှစ်က ဆုံးသွားပြီ…”"] },

  { t: "Are There Names Under All of Them", l: "မြေအိုးကွင်း", k: "ring", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "ထွန်းမြတ်", "မေဇင်", "သဇင်", "ဒေါ်ခင်မာ", "ကိုဟန်ဇော်"],
    g: "တခြားသူတွေရဲ့ အိုးအောက်မှာလည်း နာမည်တွေ ရှိနေတာလား?",
    p: "The ring at chest height, lit by the lamps on the earth. ⚠️ FIVE OF THE STRANGERS HAVE "
      + "ALL TURNED THEIR POTS UPSIDE DOWN AT THE SAME MOMENT AND ARE LOOKING AT THE BASES. ⚠️ "
      + "EVERY ONE OF THEM IS BENT OVER THEIR OWN POT AND NOT ONE IS LOOKING AT ANYBODY ELSE. ⚠️ "
      + "EVERY PERSON IS COMPLETE, SEPARATE AND LIT IDENTICALLY. ⚠️ EVERY POT IS WHOLE. ⚠️ THE "
      + "SCRATCHED BASES CATCH THE LAMPLIGHT IN FIVE SMALL WARM DISCS.",
    u: ["အဲဒီအချိန် ကျွန်တော်တို့ နှစ်ယောက်လုံး ပတ်ဝန်းကျင်ကို ကြည့်လိုက်ကြတယ်။",
      "တခြားသူတွေရဲ့ အိုးအောက်မှာလည်း နာမည်တွေ ရှိနေတာလား?",
      "နန္ဒာက အနားမှာရှိတဲ့ မင်းခန့်ကို လှမ်းခေါ်တယ်။"] },

  { t: "I Know This Name", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "“မင်းခန့်… မင်းအိုးအောက်ကို ကြည့်ပါဦး။” — “ဒီနာမည်ကို ကျွန်တော် သိတယ်…”",
    p: "Close on Min Khant inside the ring with his pot upturned in both hands, lit from below. "
      + "⚠️ HE HAS BEEN STARING AT THE BASE FOR A WHILE — the head still bent, the eyes fixed, "
      + "nothing moving. ⚠️ HIS MOUTH IS SHUT AND THE JAW IS CLENCHED. ⚠️ ALL THE COLOUR HAS GONE "
      + "OUT OF HIS FACE AND THE SKIN HAS GONE GREY-WHITE AGAINST THE RED OF THE JACKET. ⚠️ THE "
      + "CONTRAST IS THE POINT OF THE SHOT. Warm upward light, black behind him.",
    u: ["“မင်းခန့်… မင်းအိုးအောက်ကို ကြည့်ပါဦး။”", "မင်းခန့်က အိုးကို လှန်ကြည့်လိုက်တယ်။",
      "သူ ခဏကြာအောင် စာကို စိုက်ကြည့်နေတယ်။", "ပြီးတော့ ခေါင်းမော့လာတယ်။",
      "“ဒီနာမည်ကို ကျွန်တော် သိတယ်…”"] },

  { t: "My Brother", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "“ကျွန်တော့်အစ်ကို…” — “ကျွန်တော့်အစ်ကို သေသွားတာ ဆယ်နှစ်ရှိပြီ…”",
    p: "Close on Min Khant, tighter than before, lit hard from below. ⚠️ HIS HEAD IS UP NOW AND "
      + "HE IS LOOKING STRAIGHT AT THE LENS. ⚠️ HIS EYES ARE WET AND WIDE AND HIS CHIN IS "
      + "SHAKING. ⚠️ HIS MOUTH IS OPEN ON A SHORT SENTENCE. ⚠️ THE POT IS STILL UPTURNED IN HIS "
      + "HANDS AT THE BOTTOM OF FRAME, OUT OF FOCUS. ⚠️ THE RED JACKET FILLS THE LOWER CORNERS. "
      + "Warm upward light, black above him.",
    u: ["“ဘယ်သူလဲ?”", "သူ့မျက်နှာက ဖြူဖပ်ဖြူရော်ဖြစ်နေတယ်။", "“ကျွန်တော့်အစ်ကို…”",
      "“အစ်ကိုက ဘာဖြစ်လို့လဲ?”", "မင်းခန့်က အသံတုန်တုန်နဲ့ ပြန်ဖြေတယ်။",
      "“ကျွန်တော့်အစ်ကို သေသွားတာ ဆယ်နှစ်ရှိပြီ…”"] },

  { t: "These Are Not Ordinary Pots", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["သဇင်"],
    g: "“ဒါဆို အိုးတွေက သာမန်အိုးတွေ မဟုတ်ဘူး…” — “သူတို့ ဘာလို့ ဒီနာမည်တွေကို သိနေတာလဲ?”",
    p: "Close on Thazin inside the ring with her pot held low in both hands, lit from below. ⚠️ "
      + "SHE IS NOT LOOKING AT HER OWN POT — her eyes are moving across the other pots in the "
      + "ring past camera. ⚠️ HER MOUTH IS BARELY OPEN AND SHE IS SPEAKING QUIETLY. ⚠️ THE SMALL "
      + "WOODEN PENDANT AT HER THROAT CATCHES THE LAMPLIGHT. ⚠️ THE LONG STRAIGHT LOOSE HAIR AND "
      + "THE PALE BLUE BLOUSE ARE CLEAR. Warm upward light, black beyond.",
    u: ["ကျွန်တော်တို့ သုံးယောက်လုံး တိတ်ဆိတ်သွားကြတယ်။",
      "အဲဒီအချိန်မှာပဲ အနားမှာ ရပ်နေတဲ့ သဇင်ဆိုတဲ့ မိန်းကလေးတစ်ယောက်က တိုးတိုးပြောတယ်။",
      "“ဒါဆို အိုးတွေက သာမန်အိုးတွေ မဟုတ်ဘူး…”", "ကျွန်တော် သူ့ကို လှည့်ကြည့်လိုက်တယ်။",
      "သဇင်က အိုးတွေကို စိုက်ကြည့်နေတယ်။",
      "“သူတို့ ဘာလို့ ဒီနာမည်တွေကို သိနေတာလဲ?”", "ဘယ်သူမှ မဖြေနိုင်ဘူး။"] },

  { t: "Names You Should Not Have Forgotten", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp",
    puppet: true, w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ **“မင်းတို့ကို ပေးထားတဲ့အိုးတွေမှာ… မင်းတို့ မမေ့သင့်တဲ့ နာမည်တွေ ရှိနေတယ်…”**",
    p: "The marionette on the low carved stool at platform height, lit by the lamps along the "
      + "edge. ⚠️ IT IS FACING STRAIGHT OUT AT THE RING AND HAS NOT MOVED. ⚠️ BOTH CARVED HANDS "
      + "ARE ON ITS OWN KNEES. ⚠️ THE DARK PLANK FLOOR AROUND IT IS BARE. ⚠️ THE STRINGS RUN UP "
      + "OUT OF FRAME AND ARE SLACK. ⚠️ IT IS PLAINLY A CARVED WOODEN OBJECT AND NOTHING ABOUT "
      + "IT IS ALIVE. ⚠️ NOBODY IS ON THE PLATFORM WITH IT.",
    u: ["အဲဒီအချိန် ရုပ်သေးရဲ့အသံ ထပ်ထွက်လာတယ်။", "“ပထမပွဲ၏ နောက်ဆုံးစည်းကမ်း…”",
      "အားလုံး ဇရပ်ဘက်ကို လှည့်ကြည့်လိုက်ကြတယ်။", "“မင်းတို့ကို ပေးထားတဲ့အိုးတွေမှာ…”",
      "“မင်းတို့ မမေ့သင့်တဲ့ နာမည်တွေ ရှိနေတယ်…”"] },

  { t: "The Owner Pays", l: "မြေအိုးကွင်း", k: "under", tm: "lamp", pots: true, w: ["မြေအိုး"],
    g: "⚠️ **“အိုးတစ်လုံး ကွဲသွားသောအခါ… ပိုင်ရှင်က အသက်ပေးရမယ်…”**",
    p: "Square on the upturned base of a clay pot held in two hands, filling the frame, lit low "
      + "and warm. ⚠️ THE SCRATCHED BURMESE NAME IN THE CENTRE OF THE CLAY STAYS SOFT AND PARTLY "
      + "OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ THE EDGES OF THE SCRATCHES "
      + "ARE SHARP AND THE DUST IN THEM IS UNDISTURBED — it was cut recently and nobody has "
      + "touched it. ⚠️ THE CLAY AROUND IT IS DRY, MATT AND COMPLETELY UNBROKEN.",
    u: ["ကျွန်တော့်ရင်ခုန်သံတွေ မြန်လာတယ်။", "ရုပ်သေးက ဆက်ပြောတယ်။",
      "“အိုးတစ်လုံး ကွဲသွားသောအခါ…”", "“ပိုင်ရှင်က အသက်ပေးရမယ်…”", "“ဒါပေမယ့်…”"] },

  { t: "The Name Has a Debt Too", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "⚠️ **“အိုးအောက်က နာမည်ပိုင်ရှင်မှာလည်း ဆပ်စရာအကြွေး ရှိနေသေးတယ်…”** — “ဘာကိုဆိုလိုတာလဲ!”",
    p: "Close on Thiha from slightly below, his head snapped up towards the zayat, lit hard from "
      + "below. ⚠️ HIS MOUTH IS WIDE OPEN ON A SHOUT AND HIS EYES ARE UP AND WILD. ⚠️ HIS POT HAS "
      + "SWUNG DOWN AND IS HANGING FROM ONE HAND AT HIS SIDE, FORGOTTEN AND DANGEROUSLY LOOSE. "
      + "⚠️ IT IS STILL WHOLE. ⚠️ HIS OTHER ARM IS THROWN UP AND OPEN. Warm upward light, black "
      + "above him.",
    u: ["ရုပ်သေးက ခဏရပ်တယ်။", "“အိုးအောက်က နာမည်ပိုင်ရှင်မှာလည်း ဆပ်စရာအကြွေး ရှိနေသေးတယ်…”",
      "ကျွန်တော် ချက်ချင်း မော့ကြည့်လိုက်တယ်။", "“ဘာကိုဆိုလိုတာလဲ!”", "ရုပ်သေးက မဖြေတော့ဘူး။"] },

  { t: "What Has She to Do with This Village", l: "မြေအိုးကွင်း", k: "under", tm: "lamp",
    pots: true, w: ["မြေအိုး"],
    g: "မေခနဲ့ ဒီရွာက ဘာဆိုင်လဲ? မေခ သေသွားတာ ရှစ်နှစ်ရှိပြီ။ သူ့အကြောင်းကို ဒီရုပ်သေးက ဘယ်လိုသိတာလဲ?",
    p: "Square on the upturned base of the pot again, filling the frame, lit low and warm — ⚠️ "
      + "SHOT FROM CLOSER THAN BEFORE SO THE GRAIN AND THE PITS IN THE CLAY ARE VERY LARGE. ⚠️ "
      + "THE SCRATCHED NAME RUNS ACROSS THE MIDDLE AND STAYS SOFT, READING AS MARKS RATHER THAN "
      + "AS LEGIBLE WORDS. ⚠️ ONE THUMB IS RESTING ON THE CLAY BESIDE IT AND NOT TOUCHING IT. ⚠️ "
      + "NOTHING ELSE IS IN FRAME.",
    u: ["ကျွန်တော် စိတ်ရှုပ်နေပြီ။", "မေခနဲ့ ဒီရွာက ဘာဆိုင်လဲ?", "မေခ သေသွားတာ ရှစ်နှစ်ရှိပြီ။",
      "သူ့အကြောင်းကို ဒီရုပ်သေးက ဘယ်လိုသိတာလဲ?"] },

  { t: "The Old Man Was Shaking", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ဦးဘဦး"],
    g: "ဦးဘဦးက သူ့အိုးအောက်ကို ကြည့်ပြီး တစ်ကိုယ်လုံး တုန်နေတယ်။ သူ့မျက်နှာမှာ မျက်ရည်တွေ စီးကျနေတယ်။",
    p: "Close on U Ba Oo inside the ring with his pot upturned in both hands, lit hard from "
      + "below. ⚠️ HIS WHOLE BODY IS SHAKING — the pot visibly unsteady, the shoulders going. ⚠️ "
      + "HIS EYES ARE SHUT AND TEARS ARE RUNNING DOWN BOTH THE DEEP VERTICAL LINES IN HIS CHEEKS. "
      + "⚠️ HIS MOUTH IS SHUT HARD. ⚠️ THE FULL WHITE HAIR AND THE OFF-WHITE TAIKPON JACKET ARE "
      + "CLEAR. ⚠️ HE IS NOT SPEAKING AND NOBODY IS NEAR HIM. Warm upward light, black beyond.",
    u: ["အဲဒီအချိန်မှာ ကျွန်တော်တို့နဲ့ အတူရှိနေတဲ့ ဦးဘဦးဆိုတဲ့ အဘိုးကြီးကို သတိထားမိတယ်။",
      "သူက သူ့အိုးအောက်ကို ကြည့်ပြီး တစ်ကိုယ်လုံး တုန်နေတယ်။",
      "သူ့မျက်နှာမှာ မျက်ရည်တွေ စီးကျနေတယ်။"] },

  { t: "Five Minutes Left", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", w: ["ရွာလယ်ဇရပ်"],
    g: "⚠️ ဒုန်း! ခေါင်းလောင်းသံ ထပ်မြည်လာတယ်။ **ငါးမိနစ်ပဲ ကျန်တော့တယ်။**",
    p: "Tight on the heavy old bronze bell hanging from the beam at the edge of the zayat "
      + "platform, filling the frame, lit warm from below. ⚠️ FINE PALE DUST HAS BEEN SHAKEN OFF "
      + "IT AND HANGS IN THE AIR. ⚠️ THE WOODEN STRIKER HANGS BESIDE IT ON ITS ROPE, STILL AND "
      + "VERTICAL AND NOT TOUCHING THE METAL. ⚠️ NOBODY IS IN THE PICTURE AND NO HAND IS NEAR IT. "
      + "⚠️ THE DARK GREEN-PITTED BRONZE IS SHARP IN THE LAMPLIGHT.",
    u: ["ကျွန်တော် သူ့အနားကို သွားမလို့ လုပ်လိုက်တယ်။", "ဒါပေမယ့် အဲဒီအချိန်မှာပဲ—", "ဒုန်း!",
      "ခေါင်းလောင်းသံ ထပ်မြည်လာတယ်။", "ငါးမိနစ်ပဲ ကျန်တော့တယ်။"] },

  /* ── အခန်း ၉ · အားနည်းဆုံးလူ ────────────────────────────────────────── */
  { t: "Nobody Was Ready to Die", l: "မြေအိုးကွင်း", k: "ring", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "သက်မွန်", "ဖြိုးဝေ", "မေဇင်", "ဦးဘဦး", "သဇင်"],
    g: "ဘယ်သူမှ ကိုယ့်အိုးကို မခွဲချင်ကြဘူး။ ဘယ်သူမှလည်း သေဖို့ အဆင်သင့်မဖြစ်ကြဘူး။",
    p: "The ring at chest height, lit by the lamps on the earth. ⚠️ FIVE OF THE STRANGERS HAVE "
      + "BACKED RIGHT OUT TO THE EDGE OF THE RING AND ARE STANDING ALMOST ON THE LAMPS. ⚠️ EVERY "
      + "ONE HAS THEIR POT WRAPPED IN BOTH ARMS AND HELD HARD AGAINST THEIR BODY. ⚠️ THE MIDDLE "
      + "OF THE RING IS A WIDE EMPTY CIRCLE OF CHURNED EARTH. ⚠️ EVERY FACE IS COMPLETE, SEPARATE "
      + "AND LIT IDENTICALLY. ⚠️ EVERY POT IS WHOLE.",
    u: ["ဒီတစ်ခါတော့ လူတွေ တကယ်စိတ်ပျက်စပြုလာပြီ။", "ဘယ်သူမှ ကိုယ့်အိုးကို မခွဲချင်ကြဘူး။",
      "ဘယ်သူမှလည်း သေဖို့ အဆင်သင့်မဖြစ်ကြဘူး။"] },

  { t: "He Put His Pot Down", l: "မြေအိုးကွင်း", k: "ground", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "ရဲအောင်က သူ့အိုးကို မြေပြင်ပေါ် သေချာချထားပြီး ရှေ့ကိုထွက်လာတယ်။ “အားလုံး နားထောင်ကြ!”",
    p: "A few inches above the churned earth inside the ring, level along it, lit by the lamps. "
      + "⚠️ ONE CLAY POT HAS BEEN SET DOWN CAREFULLY AND SQUARELY ON THE GROUND IN THE "
      + "FOREGROUND, upright and whole, with a pair of black shoes beside it. ⚠️ THE SHOES ARE "
      + "ALREADY TURNING AWAY. ⚠️ IT IS THE ONLY POT ON THE GROUND IN THE PICTURE — the others "
      + "are all off the earth and out of focus in the background. ⚠️ THE EARTH AROUND IT IS "
      + "BARE.",
    u: ["ရဲအောင်က သူ့အိုးကို မြေပြင်ပေါ် သေချာချထားပြီး ရှေ့ကိုထွက်လာတယ်။",
      "“အားလုံး နားထောင်ကြ!”", "လူတွေ သူ့ကို ကြည့်လိုက်ကြတယ်။"] },

  { t: "We Have to Choose", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ရဲအောင်"],
    g: "“ဒီလိုဆက်နေရင် အားလုံးသေမှာပဲ။ တစ်ယောက်ယောက်ကို ရွေးရမယ်။” — “ဘယ်သူ့ကို ရွေးမှာလဲ?”",
    p: "Close on Ye Aung standing empty-handed in the middle of the ring, lit hard from below. "
      + "⚠️ BOTH HIS HANDS ARE FREE AND OPEN AT HIS SIDES — he is the only person in the episode "
      + "without a pot in his arms and it makes him look dangerous. ⚠️ HIS CHIN IS LEVEL AND HIS "
      + "EYES ARE OFF CENTRE, DIRECTED AT PEOPLE PAST CAMERA. ⚠️ HIS MOUTH IS SHUT. ⚠️ HE IS "
      + "ASSESSING THEM. Warm upward light, black above him.",
    u: ["“ဒီလိုဆက်နေရင် အားလုံးသေမှာပဲ။ တစ်ယောက်ယောက်ကို ရွေးရမယ်။”", "နန္ဒာက ပြန်ပြောတယ်။",
      "“ဘယ်သူ့ကို ရွေးမှာလဲ?”", "ရဲအောင်က ပတ်ဝန်းကျင်ကို ကြည့်တယ်။"] },

  { t: "What Are You Looking At", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", pots: true,
    w: ["ရဲအောင်", "ဒေါ်ခင်မာ"],
    g: "သူ့မျက်လုံးတွေ ဒေါ်ခင်မာဆီ ရောက်သွားတယ်။ “မင်း… မင်းဘာကြည့်တာလဲ?”",
    p: "Two shot at chest height inside the ring, lit from below. ⚠️ YE AUNG IS STANDING "
      + "EMPTY-HANDED AND FACING DAW KHIN MA ACROSS A CLEAR SPACE OF BARE EARTH. ⚠️ SHE HAS HER "
      + "POT WRAPPED IN BOTH ARMS AND HAS TAKEN A STEP BACK — one foot already behind her. ⚠️ "
      + "BOTH ARE COMPLETE IN FRAME AND BOTH FACES ARE LIT IDENTICALLY. ⚠️ HER MOUTH IS OPEN AND "
      + "HIS IS SHUT. ⚠️ NOBODY ELSE IS IN FRAME.",
    u: ["သူ့မျက်လုံးတွေ ဒေါ်ခင်မာဆီ ရောက်သွားတယ်။", "ဒေါ်ခင်မာက ချက်ချင်း နောက်ဆုတ်တယ်။",
      "“မင်း… မင်းဘာကြည့်တာလဲ?”"] },

  { t: "We Have No Time Left", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ရဲအောင်"],
    g: "“ဒေါ်ကြီး… ကျွန်တော်တို့မှာ အချိန်မရှိတော့ဘူး…” — “မင်း… ငါ့ကို ရွေးနေတာလား?”",
    p: "Close on Ye Aung, lit hard from below. ⚠️ HE IS SPEAKING QUIETLY AND HIS EYES ARE DOWN "
      + "AND OFF TO ONE SIDE — he will not look at whoever he is talking to. ⚠️ HIS JAW IS SET "
      + "AND HIS MOUTH BARELY MOVES. ⚠️ ONE HAND HAS COME HALF UP IN FRONT OF HIM, PALM OUT, as "
      + "if to calm somebody. ⚠️ THERE IS NO ANGER IN HIS FACE AND THAT IS WHAT IS FRIGHTENING "
      + "ABOUT IT. Warm upward light, black behind him.",
    u: ["ရဲအောင်က ခပ်တိုးတိုးပြောတယ်။", "“ဒေါ်ကြီး… ကျွန်တော်တို့မှာ အချိန်မရှိတော့ဘူး…”",
      "ဒေါ်ခင်မာ မျက်နှာပျက်သွားတယ်။", "“မင်း… ငါ့ကို ရွေးနေတာလား?”", "ရဲအောင်က ပြန်မဖြေဘူး။"] },

  { t: "I Have Grandchildren", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["ဒေါ်ခင်မာ"],
    g: "“မလုပ်ပါနဲ့ကွယ်… ငါ့မှာ မြေးလေးတွေ ရှိသေးတယ်…”",
    p: "Close on Daw Khin Ma backing away inside the ring, lit hard from below. ⚠️ HER POT IS "
      + "CRUSHED AGAINST HER CHEST WITH BOTH ARMS RIGHT ROUND IT AND HER SHOULDERS HUNCHED OVER "
      + "IT. ⚠️ HER EYES ARE WIDE AND WET AND FIXED ON SOMETHING COMING TOWARDS CAMERA. ⚠️ HER "
      + "MOUTH IS OPEN. ⚠️ THE THICK THANAKA ROUNDS ON HER CHEEKS AND THE MUSTARD-YELLOW BLOUSE "
      + "ARE CLEAR. Warm upward light, black behind her.",
    u: ["ဒါပေမယ့် သူ့ခြေလှမ်းတွေက ဒေါ်ခင်မာဆီ တဖြည်းဖြည်း နီးလာတယ်။",
      "ဒေါ်ခင်မာက သူ့အိုးကို ဖက်ပြီး နောက်ဆုတ်တယ်။",
      "“မလုပ်ပါနဲ့ကွယ်… ငါ့မှာ မြေးလေးတွေ ရှိသေးတယ်…”"] },

  { t: "Wait", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", pots: true, w: ["သီဟ", "ရဲအောင်"],
    g: "“ရဲအောင်! ခဏနေဦး!” — “မင်း ဘာလုပ်ချင်လဲ! အကုန်လုံး သေချင်လို့လား!”",
    p: "Two shot at chest height inside the ring, lit from below. ⚠️ THIHA HAS STEPPED INTO YE "
      + "AUNG'S PATH WITH HIS POT UNDER ONE ARM AND HIS FREE HAND FLAT ON YE AUNG'S CHEST. ⚠️ YE "
      + "AUNG IS TURNING TOWARDS HIM AND HIS MOUTH IS WIDE OPEN ON A SHOUT. ⚠️ BOTH ARE COMPLETE "
      + "IN FRAME AND BOTH FACES ARE LIT IDENTICALLY. ⚠️ THIHA'S POT IS WHOLE AND IS HANGING "
      + "LOOSE AND LOW IN THE CROOK OF HIS ARM.",
    u: ["ကျွန်တော် ရှေ့ကိုထွက်လိုက်တယ်။", "“ရဲအောင်! ခဏနေဦး!”",
      "ရဲအောင်က ကျွန်တော့်ကို တွန်းဖယ်တယ်။",
      "“မင်း ဘာလုပ်ချင်လဲ! အကုန်လုံး သေချင်လို့လား!”"] },

  { t: "Then Break Your Own", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“ဒီလိုလုပ်လို့ မရဘူး!” — “ဒါဆို မင်းအိုးကို မင်းခွဲ!” — ကျွန်တော် တိတ်သွားတယ်။",
    p: "Close on Thiha inside the ring, lit hard from below. ⚠️ HE HAS BEEN PUSHED BACK A STEP "
      + "AND IS OFF BALANCE, one arm out. ⚠️ HIS MOUTH IS OPEN BUT NOTHING IS COMING OUT OF IT "
      + "AND HIS EYES HAVE DROPPED. ⚠️ HIS OTHER ARM HAS TIGHTENED AROUND HIS OWN POT AND PULLED "
      + "IT IN AGAINST HIS BODY — the one thing in the frame that answers the question. ⚠️ THE "
      + "POT IS WHOLE. Warm upward light, black above him.",
    u: ["“ဒီလိုလုပ်လို့ မရဘူး!”", "“ဒါဆို မင်းအိုးကို မင်းခွဲ!”", "ကျွန်တော် တိတ်သွားတယ်။"] },

  { t: "I'm Sorry, Daw Gyi", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "hands", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "“ကျွန်တော် တောင်းပန်ပါတယ် ဒေါ်ကြီး…” — သူ ဒေါ်ခင်မာ့အိုးကို လှမ်းဆွဲတယ်။ “မလုပ်နဲ့!”",
    p: "Close in on two pairs of hands fighting over one clay pot, the faces out of frame, lit "
      + "hard from below. ⚠️ A MAN'S HANDS HAVE CLOSED ON THE RIM AND ARE PULLING AND AN OLDER "
      + "WOMAN'S HANDS ARE LOCKED ROUND THE BELLY AND WILL NOT LET GO. ⚠️ ALL FOUR SETS OF "
      + "KNUCKLES ARE PALE. ⚠️ THE CLAY IS STILL WHOLE AND UNBROKEN. ⚠️ A GOLD EAR STUD AND A "
      + "MUSTARD SLEEVE ARE AT THE EDGE OF FRAME, out of focus.",
    u: ["ရဲအောင်က ဒေါ်ခင်မာဆီ ပြန်လှည့်တယ်။", "“ကျွန်တော် တောင်းပန်ပါတယ် ဒေါ်ကြီး…”",
      "သူ ဒေါ်ခင်မာ့အိုးကို လှမ်းဆွဲတယ်။", "ဒေါ်ခင်မာက အိုးကို မလွှတ်ဘူး။", "“မလုပ်နဲ့! မလုပ်နဲ့!”"] },

  { t: "Min Khant Ran In", l: "မြေအိုးကွင်း", k: "group", tm: "lamp", pots: true,
    w: ["မင်းခန့်", "ရဲအောင်", "ဒေါ်ခင်မာ", "မြေအိုးကွင်း"],
    g: "“အစ်ကို! မလုပ်နဲ့ဗျ!” — မင်းခန့်က ရဲအောင့်လက်ကို ဖမ်းဆွဲတယ်။",
    p: "Three of the strangers close together inside the ring, lit hard from below. ⚠️ MIN KHANT "
      + "HAS COME IN FROM THE SIDE WITH HIS OWN POT UNDER ONE ARM AND HIS FREE HAND LOCKED ROUND "
      + "YE AUNG'S FOREARM. ⚠️ DAW KHIN MA IS BEHIND THEM STILL HOLDING HER POT. ⚠️ ALL THREE ARE "
      + "COMPLETE IN FRAME, SEPARATE AND LIT THE SAME. ⚠️ ALL THREE POTS ARE WHOLE. ⚠️ THE RED "
      + "JACKET IS THE BRIGHTEST THING IN THE PICTURE.",
    u: ["အဲဒီအချိန် မင်းခန့် ပြေးဝင်လာတယ်။", "“အစ်ကို! မလုပ်နဲ့ဗျ!”",
      "မင်းခန့်က ရဲအောင့်လက်ကို ဖမ်းဆွဲတယ်။"] },

  { t: "Get Off", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "“ဖယ်စမ်းကွာ!” — မင်းခန့်က နောက်ဆုတ်သွားတယ်။ “အဘွားကြီးကို မလုပ်နဲ့ဗျ!”",
    p: "Close on Min Khant knocked back a pace inside the ring, lit hard from below. ⚠️ HE HAS "
      + "BOTH ARMS BACK AROUND HIS OWN POT AND IS CLUTCHING IT HARD AGAINST HIS CHEST. ⚠️ HIS "
      + "MOUTH IS OPEN ON A SHOUT AND HIS EYES ARE WIDE AND ANGRY RATHER THAN FRIGHTENED. ⚠️ ONE "
      + "SHOULDER OF THE RED JACKET HAS BEEN PULLED OUT OF SHAPE. ⚠️ HIS POT IS WHOLE. Warm "
      + "upward light, black behind him.",
    u: ["ရဲအောင်က သူ့ကို တွန်းထုတ်တယ်။", "“ဖယ်စမ်းကွာ!”", "မင်းခန့်က နောက်ဆုတ်သွားတယ်။",
      "သူ့အိုးကို ရင်ဘတ်မှာ ပိုက်ထားရင်း ထပ်ပြောတယ်။",
      "“အဘွားကြီးကို မလုပ်နဲ့ဗျ! တခြားနည်းလမ်း ရှာကြရအောင်!”"] },

  { t: "What Other Way Is There", l: "မြေအိုးကွင်း", k: "high", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "“ဘာနည်းလမ်း ရှိသေးလို့လဲ!” — လူတွေ အချင်းချင်း အော်ဟစ်နေကြတယ်။",
    p: "High above the ring looking straight down, lit by the circle of lamps. ⚠️ THE TWELVE HAVE "
      + "BROKEN INTO THREE SEPARATE KNOTS OF PEOPLE WITH WIDE EMPTY EARTH BETWEEN THEM — a "
      + "cluster of three near one edge, a pair in the middle, and the rest scattered singly "
      + "round the rim. ⚠️ EVERY PERSON IS SEPARATE AND COUNTABLE FROM ABOVE. ⚠️ EVERY ONE IS "
      + "HOLDING A POT EXCEPT ONE, WHOSE POT STANDS ALONE ON THE EARTH. ⚠️ EVERY POT IS WHOLE.",
    u: ["ရဲအောင်က စိတ်တိုပြီး အော်လိုက်တယ်။", "“ဘာနည်းလမ်း ရှိသေးလို့လဲ!”",
      "လူတွေ အချင်းချင်း အော်ဟစ်နေကြတယ်။", "တစ်ယောက်က ရဲအောင့်ဘက်က နေတယ်။",
      "တစ်ယောက်က ဒေါ်ခင်မာ့ကို ကာကွယ်နေတယ်။",
      "တစ်ယောက်ကတော့ ကိုယ့်အိုးကို ဖက်ပြီး အဝေးမှာ ရပ်နေတယ်။"] },

  { t: "One Minute", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ ဒုန်း! ခေါင်းလောင်း မြည်လာတယ်။ **“တစ်မိနစ်…”**",
    p: "The black marionette on the stool, close, lit warm from one side. ⚠️ IT HAS NOT MOVED "
      + "SINCE THE LAST TIME IT WAS SEEN — the same posture, the same angle, the same hands on "
      + "the same knees. ⚠️ THE STRINGS ARE SLACK AND RUN UP OUT OF FRAME. ⚠️ THE CARVED FACE HAS "
      + "NO EXPRESSION. ⚠️ BEHIND IT, FAR OUT OF FOCUS AND LOW IN FRAME, THE RING OF LAMPS AND "
      + "SMALL STRUGGLING SHAPES ARE JUST READABLE. ⚠️ IT IS COMPLETELY STILL.",
    u: ["အဲဒီအချိန်—", "ဒုန်း!", "ခေါင်းလောင်း မြည်လာတယ်။", "ရုပ်သေးက ပြောတယ်။", "“တစ်မိနစ်…”"] },

  { t: "I Don't Want to Die", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["သက်မွန်"],
    g: "“ကျွန်မ မသေချင်ဘူး!” — ကိုဟန်ဇော်က သူ့အိုးကို ဖက်ထားရင်း နောက်ဆုတ်တယ်။",
    p: "Close on Thet Mon inside the ring, lit hard from below. ⚠️ HER HEAD IS BACK AND HER MOUTH "
      + "IS WIDE OPEN ON A SCREAM AND HER EYES ARE SHUT TIGHT. ⚠️ HER POT IS STILL CLAMPED "
      + "AGAINST HER CHEST IN BOTH ARMS. ⚠️ TEARS ARE RUNNING AND HER FACE IS COMPLETELY WET. ⚠️ "
      + "THE SILVER BANGLE AND THE MAROON BLOUSE ARE CLEAR. ⚠️ THE POT IS WHOLE. Warm upward "
      + "light, black beyond her.",
    u: ["လူတွေ ပိုပြီး ထိတ်လန့်လာကြတယ်။", "သက်မွန်က ငိုပြီး အော်နေတယ်။", "“ကျွန်မ မသေချင်ဘူး!”",
      "ကိုဟန်ဇော်က သူ့အိုးကို ဖက်ထားရင်း နောက်ဆုတ်တယ်။"] },

  { t: "Thiha, Do Something", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["နန္ဒာ"],
    g: "“သီဟ… တစ်ခုခုလုပ်ပါဦး!” — ကျွန်တော် ဘာလုပ်ရမှန်း မသိတော့ဘူး။",
    p: "Close on Nanda inside the ring, lit hard from below. ⚠️ SHE IS LOOKING STRAIGHT AT THE "
      + "LENS AND HER EYES ARE WIDE AND WET AND DIRECT. ⚠️ HER MOUTH IS OPEN ON SOMEBODY'S NAME. "
      + "⚠️ HER POT IS HELD IN ONE ARM AND HER FREE HAND IS REACHED OUT TOWARDS CAMERA WITH THE "
      + "FINGERS OPEN. ⚠️ THE LOW PONYTAIL HAS COME HALF LOOSE. ⚠️ THE POT IS WHOLE. Warm upward "
      + "light, black behind her.",
    u: ["နန္ဒာက ကျွန်တော့်ကို ကြည့်တယ်။", "“သီဟ… တစ်ခုခုလုပ်ပါဦး!”",
      "ကျွန်တော် ဘာလုပ်ရမှန်း မသိတော့ဘူး။"] },

  { t: "Whose Life Is Worth More", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "ကျွန်တော် ဘယ်သူ့ကို ရွေးရမလဲ? ဘယ်သူ့အသက်က ပိုတန်ဖိုးရှိလဲ? ကျွန်တော် ဘယ်လိုဆုံးဖြတ်ရမှာလဲ?",
    p: "Close on Thiha standing still in the middle of the ring, lit hard from below. ⚠️ "
      + "EVERYTHING AROUND HIM IS MOVING AND HE IS NOT — the shot holds on one man who has "
      + "stopped. ⚠️ HIS EYES ARE DIRECTED OFF TO ONE SIDE AT SOMEBODY PAST CAMERA. ⚠️ HIS MOUTH IS "
      + "SHUT. ⚠️ HIS POT IS HELD LEVEL IN BOTH ARMS AND IS WHOLE. ⚠️ OUT-OF-FOCUS FIGURES "
      + "STRUGGLE AT BOTH EDGES OF FRAME AND NONE OF THEM RESOLVES.",
    u: ["မိနစ်သုံးဆယ်အတွင်း အိုးတစ်လုံး မကွဲရင် အားလုံးသေရမယ်။",
      "ဒါပေမယ့် အိုးတစ်လုံးခွဲဖို့ဆိုတာ လူတစ်ယောက်ကို သတ်ရမယ်ဆိုတဲ့ အဓိပ္ပာယ်ပဲ။",
      "ကျွန်တော် ဘယ်သူ့ကို ရွေးရမလဲ?", "ဘယ်သူ့အသက်က ပိုတန်ဖိုးရှိလဲ?",
      "ဘယ်သူ့အသက်က ပိုတန်ဖိုးမရှိဘူးလဲ?", "ကျွန်တော် ဘယ်လိုဆုံးဖြတ်ရမှာလဲ?"] },

  { t: "Thirty Seconds", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "face", tm: "lamp", puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ **“စက္ကန့်သုံးဆယ်…”**",
    p: "The carved face of the black marionette filling the frame, square on, lit warm from one "
      + "side. ⚠️ IT IS IDENTICAL TO EVERY OTHER SHOT OF IT AND NOTHING ON IT HAS MOVED — matt "
      + "black wood, chisel marks across the cheeks, two shallow carved eyes painted over in the "
      + "same black, a shallow closed carved mouth. ⚠️ THE SURFACE IS DRY AND DUSTY AND THE GRAIN "
      + "IS SHARP. ⚠️ IT IS AN OBJECT. ⚠️ NOTHING ELSE IS IN THE PICTURE.",
    u: ["အဲဒီအချိန်မှာပဲ ရုပ်သေးရဲ့အသံ ထပ်ကြားလိုက်ရတယ်။", "“စက္ကန့်သုံးဆယ်…”"] },

  /* ── အခန်း ၁၀ · ပထမဆုံးသေဆုံးသူ ─────────────────────────────────────── */
  { t: "He Pulled Harder", l: "မြေအိုးကွင်း", k: "ground", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း"],
    g: "ရဲအောင်က ဒေါ်ခင်မာ့အိုးကို ထပ်ဆွဲတယ်။ ဒေါ်ခင်မာက မြေပြင်ပေါ် လဲကျသွားတယ်။",
    p: "A few inches above the churned earth inside the ring, level along it, lit by the lamps. "
      + "⚠️ A FLORAL HTAMEIN AND ONE BARE ARM ARE DOWN ON THE GROUND IN THE FOREGROUND WITH THE "
      + "HAND STILL CLOSED ROUND THE BELLY OF A CLAY POT. ⚠️ THE POT IS ON ITS SIDE ON THE EARTH "
      + "AND IS STILL WHOLE AND UNBROKEN. ⚠️ A PAIR OF BLACK SHOES IS PLANTED BESIDE IT. ⚠️ NO "
      + "FACES ARE IN FRAME. ⚠️ THE EARTH IS SCUFFED INTO DEEP DRAG MARKS.",
    u: ["စက္ကန့်သုံးဆယ်။", "ရဲအောင်က ဒေါ်ခင်မာ့အိုးကို ထပ်ဆွဲတယ်။",
      "ဒီတစ်ခါတော့ တကယ်အတင်းဆွဲနေတာ။", "ဒေါ်ခင်မာက မြေပြင်ပေါ် လဲကျသွားတယ်။",
      "“အမလေး! ကယ်ကြပါဦး!”"] },

  { t: "He Set His Pot Down", l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", pots: true,
    w: ["မြေအိုး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ မင်းခန့်က သူ့အိုးကို ဇရပ်တိုင်အနားမှာ ချထားပြီး ဒေါ်ခင်မာ့ကို ထူဖို့ ကြိုးစားတယ်။",
    p: "Tight and low on the base of a heavy teak zayat post where it meets the bare earth, lit "
      + "by the lamps. ⚠️ ONE CLAY POT HAS BEEN SET DOWN AGAINST THE FOOT OF THE POST, upright "
      + "and whole, close enough that its belly is almost touching the wood. ⚠️ IT IS "
      + "COMPLETELY STILL AND NOBODY IS TOUCHING IT. ⚠️ A RED SLEEVE IS JUST LEAVING THE EDGE OF "
      + "FRAME, out of focus. ⚠️ THE EARTH AROUND THE POT IS BARE. ⚠️ THE SHOT HOLDS ON THE POT "
      + "AND THE POST TOGETHER.",
    u: ["မင်းခန့် ပြေးဝင်လာတယ်။",
      "သူ့အိုးကို ဇရပ်တိုင်အနားမှာ ချထားပြီး ဒေါ်ခင်မာ့ကို ထူဖို့ ကြိုးစားတယ်။"] },

  { t: "Ye Aung, Stop", l: "မြေအိုးကွင်း", k: "group", tm: "lamp", pots: true,
    w: ["မြေအိုးကွင်း", "သီဟ", "နန္ဒာ", "ရဲအောင်", "မင်းခန့်", "ဒေါ်ခင်မာ"],
    g: "“ရဲအောင်! ရပ်လိုက်တော့!” — အားလုံး ရုန်းရင်းဆန်ခတ်ဖြစ်နေကြတယ်။",
    p: "Five of the strangers tangled together inside the ring, lit hard from below. ⚠️ EVERY ONE "
      + "OF THEM IS COMPLETE IN FRAME AND EVERY FACE IS VISIBLE DESPITE THE STRUGGLE — nobody is "
      + "hidden behind anybody else. ⚠️ TWO ARE PULLING AT A THIRD, ONE IS DOWN ON THE EARTH "
      + "BEING HELPED UP, AND ONE IS REACHING IN FROM THE EDGE. ⚠️ EVERY FACE IS LIT IDENTICALLY. "
      + "⚠️ ONE POT IS ON ITS SIDE ON THE EARTH, STILL WHOLE.",
    u: ["ကျွန်တော်လည်း ပြေးသွားတယ်။", "“ရဲအောင်! ရပ်လိုက်တော့!”",
      "ရဲအောင်က ဒေါ်ခင်မာ့အိုးကို ဆွဲထားတုန်း။", "နန္ဒာက ဒေါ်ခင်မာ့ကို ထူပေးနေတယ်။",
      "မင်းခန့်က ရဲအောင့်ကို တားနေတယ်။", "အားလုံး ရုန်းရင်းဆန်ခတ်ဖြစ်နေကြတယ်။"] },

  { t: "Ten, Nine, Eight", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ ရုပ်သေးက စတင်ရေတွက်တယ် — **“ဆယ်…” “ကိုး…” “ရှစ်…”**",
    p: "The marionette on the low carved stool at platform height, lit by the lamps along the "
      + "edge. ⚠️ IT IS FACING STRAIGHT OUT AND HAS NOT MOVED AT ALL. ⚠️ IT IS THE ONLY STILL "
      + "THING IN THE EPISODE AT THIS MOMENT AND THE FRAME SAYS SO: ⚠️ BEYOND THE PLATFORM, FAR "
      + "OUT OF FOCUS, SMALL STRUGGLING SHAPES MOVE AROUND THE RING OF LAMPS. ⚠️ THE PUPPET IS "
      + "SHARP AND MOTIONLESS AGAINST THEM. ⚠️ THE STRINGS ARE SLACK. ⚠️ IT IS PLAINLY WOOD.",
    u: ["အဲဒီအချိန် ရုပ်သေးက စတင်ရေတွက်တယ်။", "“ဆယ်…”", "“ကိုး…”", "“ရှစ်…”",
      "ကိုဟန်ဇော်က အော်တယ်။", "“အိုးတစ်လုံးလောက် ခွဲလိုက်ကြပါတော့!”"] },

  { t: "Min Khant, Get Back", l: "မြေအိုးကွင်း", k: "two", tm: "lamp", w: ["သီဟ", "မင်းခန့်"],
    g: "“ခုနစ်…” — “မင်းခန့်! နောက်ဆုတ်!” — “ခြောက်…”",
    p: "Two shot at chest height inside the ring, lit hard from below. ⚠️ THIHA HAS A HANDFUL OF "
      + "MIN KHANT'S RED JACKET AT THE SHOULDER AND IS PULLING HIM BACKWARDS. ⚠️ MIN KHANT IS "
      + "TWISTED AWAY FROM HIM, BOTH HIS OWN HANDS UNDER DAW KHIN MA'S ARM OUT OF FRAME, "
      + "REFUSING TO LET GO. ⚠️ BOTH ARE COMPLETE IN FRAME AND BOTH FACES ARE LIT IDENTICALLY. "
      + "⚠️ NEITHER OF THEM IS HOLDING A POT. ⚠️ BOTH MOUTHS ARE OPEN.",
    u: ["“ခုနစ်…”", "ကျွန်တော် မင်းခန့်ကို လှမ်းဆွဲတယ်။", "“မင်းခန့်! နောက်ဆုတ်!”", "“ခြောက်…”",
      "မင်းခန့်က ဒေါ်ခင်မာ့ကို ထူပေးနေတုန်း။", "“ငါး…”"] },

  { t: "A Foot Beside the Pot", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", pots: true,
    w: ["မြေအိုး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ **အိုးဘေးမှာ လူတစ်ယောက်ရဲ့ ခြေထောက်တစ်ဖက်။**",
    p: "Tight and low on the clay pot standing against the foot of the teak zayat post, lit by "
      + "the lamps. ⚠️ ONE SHOE AND THE BOTTOM OF ONE TROUSER LEG HAVE COME INTO FRAME BESIDE IT "
      + "AND STOPPED, a hand's width from the clay. ⚠️ THE FOOT IS PLANTED AND STILL. ⚠️ NOTHING "
      + "ABOVE THE ANKLE IS IN FRAME AND THE SHOE IS A PLAIN DARK SHOE THAT COULD BELONG TO "
      + "SEVERAL PEOPLE. ⚠️ THE POT IS STILL UPRIGHT AND WHOLE. ⚠️ NO FACE IS IN THE PICTURE.",
    u: ["အဲဒီအချိန်မှာ ကျွန်တော် ထူးဆန်းတာတစ်ခု မြင်လိုက်ရတယ်။", "မင်းခန့်ရဲ့ မြေအိုး။",
      "ဇရပ်တိုင်အနားမှာ ချထားတယ်။", "အိုးဘေးမှာ လူတစ်ယောက်ရဲ့ ခြေထောက်တစ်ဖက်။"] },

  { t: "Somebody Kicked It", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", pots: true,
    w: ["မြေအိုး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ **လူတစ်ယောက်က မင်းခန့်ရဲ့အိုးကို ခြေထောက်နဲ့ လှမ်းကန်လိုက်တယ်။**",
    p: "Tight and low on the same spot at the foot of the teak post, lit by the lamps. ⚠️ THE POT "
      + "HAS BEEN KNOCKED OFF ITS BASE AND IS TIPPED HARD OVER TOWARDS THE POST, caught at the "
      + "angle just before it strikes. ⚠️ THE SHOE IS EXTENDED AND FOLLOWING THROUGH. ⚠️ NOTHING "
      + "ABOVE THE KNEE IS IN FRAME AND NO FACE IS VISIBLE ANYWHERE. ⚠️ THE POT IS STILL WHOLE. "
      + "⚠️ LOOSE EARTH HAS BEEN KICKED UP AND HANGS IN THE AIR.",
    u: ["လေး…", "ကျွန်တော် အဲဒီဘက်ကို လှည့်ကြည့်လိုက်တယ်။",
      "လူတစ်ယောက်က မင်းခန့်ရဲ့အိုးကို ခြေထောက်နဲ့ လှမ်းကန်လိုက်တယ်။", "သုံး…"] },

  { t: "Min Khant", l: "မြေအိုးကွင်း", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "“မင်းခန့်!” — ကျွန်တော် အော်လိုက်တယ်။ ဒါပေမယ့် နောက်ကျသွားပြီ။",
    p: "Close on Thiha inside the ring, lit hard from below, ⚠️ HIS HEAD SNAPPED ROUND TOWARDS "
      + "THE ZAYAT POSTS AND HIS MOUTH WIDE OPEN ON A NAME. ⚠️ HIS EYES ARE ENORMOUS AND FIXED "
      + "PAST CAMERA. ⚠️ ONE ARM IS FLUNG OUT AND REACHING AND HIS OWN POT IS SWINGING WIDE IN "
      + "THE OTHER HAND. ⚠️ HIS POT IS WHOLE. ⚠️ EVERYTHING IN HIS FACE SAYS HE IS TOO LATE. Warm "
      + "upward light, black behind him.",
    u: ["“မင်းခန့်!”", "ကျွန်တော် အော်လိုက်တယ်။", "ဒါပေမယ့် နောက်ကျသွားပြီ။"] },

  { t: "It Struck the Post", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", pots: true,
    w: ["ရွာလယ်ဇရပ်"],
    g: "⚠️ **ခွမ်း! — မြေအိုးက ဇရပ်တိုင်နဲ့ တိုက်မိပြီး ကွဲသွားတယ်။**",
    p: "Tight and low on the foot of the teak zayat post, lit by the lamps. ⚠️ THE CLAY POT IS IN "
      + "PIECES AGAINST THE BASE OF THE POST — large curved shards spread across the earth and "
      + "one still leaning on the wood. ⚠️ FINE PALE DUST HANGS THICK IN THE AIR AROUND THEM. ⚠️ "
      + "THE UPTURNED BASE OF THE POT IS AMONG THE SHARDS WITH ITS SCRATCHED NAME STILL ON IT, "
      + "soft and reading as marks. ⚠️ THERE IS NOBODY IN THE PICTURE AND NO FOOT ANYWHERE IN "
      + "FRAME.",
    u: ["ခွမ်း!", "မြေအိုးက ဇရပ်တိုင်နဲ့ တိုက်မိပြီး ကွဲသွားတယ်။", "အဲဒီအချိန်မှာပဲ—"] },

  { t: "He Stopped", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "မင်းခန့်က ရုတ်တရက် ရပ်သွားတယ်။ သူ့မျက်နှာမှာ အံ့ဩနေတဲ့အမူအရာ ပေါ်လာတယ်။",
    p: "Close on Min Khant inside the ring, lit hard from below. ⚠️ HE HAS STOPPED COMPLETELY "
      + "MID-ACTION AND HIS FACE IS DOING NOTHING BUT SURPRISE — the eyebrows up, the mouth "
      + "slightly open, no fear in it yet. ⚠️ HIS ARMS ARE STILL OUT WHERE THEY WERE, helping "
      + "somebody who is now out of frame. ⚠️ HE IS LOOKING DOWN AT HIS OWN HANDS. ⚠️ THE RED "
      + "JACKET IS THE BRIGHTEST THING IN FRAME. Warm upward light, black behind him.",
    u: ["မင်းခန့်က ရုတ်တရက် ရပ်သွားတယ်။", "သူ့မျက်နှာမှာ အံ့ဩနေတဲ့အမူအရာ ပေါ်လာတယ်။",
      "သူက သူ့လက်နှစ်ဖက်ကို ငုံ့ကြည့်တယ်။"] },

  { t: "His Hands Were Shaking", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "hands", tm: "lamp", w: ["မင်းခန့်"],
    g: "လက်ချောင်းတွေ တုန်နေတယ်။ “အစ်ကို… ကျွန်တော့်… အိုး…”",
    p: "Close in on two young hands held up and open in front of a chest in a red nylon jacket, "
      + "the face out of frame, lit hard from below. ⚠️ BOTH HANDS ARE SHAKING HARD AND THE "
      + "FINGERS ARE SPREAD WIDE. ⚠️ THEY ARE EMPTY AND UNMARKED — no cut, no blood, nothing "
      + "wrong with them. ⚠️ THE SKIN HAS GONE GREY-WHITE AGAINST THE RED NYLON BEHIND THEM. ⚠️ "
      + "NOTHING IS TOUCHING THEM. Warm upward light, black beyond.",
    u: ["လက်ချောင်းတွေ တုန်နေတယ်။", "“အစ်ကို…”", "သူ ကျွန်တော့်ကို လှည့်ကြည့်တယ်။",
      "“ကျွန်တော့်… အိုး…”", "သူ့အသံက တဖြည်းဖြည်း တိုးသွားတယ်။"] },

  { t: "The Shadow Under His Feet", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "feet", tm: "lamp", w: ["မင်းခန့်"],
    g: "⚠️ **သူ့ခြေထောက်အောက်က အရိပ်ဟာ တဖြည်းဖြည်း နက်မှောင်လာတယ်။**",
    p: "A few inches above the earth, holding a pair of trainers and blue jeans from the knee "
      + "down, lit by the lamps. ⚠️ THE SHADOW UNDER AND AROUND BOTH SHOES IS MUCH DARKER AND "
      + "MUCH LARGER THAN ANY OTHER SHADOW IN THE PICTURE — a deep flat black pool on the earth "
      + "with a hard edge. ⚠️ EVERY OTHER SHADOW IN FRAME IS ORDINARY AND SOFT. ⚠️ THE SHOES ARE "
      + "PLANTED AND HAVE NOT MOVED. ⚠️ NOTHING IS TOUCHING THEM AND NOBODY ELSE IS IN FRAME.",
    u: ["အဲဒီအချိန်—", "သူ့ခြေထောက်အောက်က အရိပ်ဟာ တဖြည်းဖြည်း နက်မှောင်လာတယ်။",
      "မင်းခန့်က နောက်ဆုတ်ဖို့ ကြိုးစားတယ်။", "ဒါပေမယ့် ခြေထောက်တွေ မရွေ့တော့ဘူး။"] },

  { t: "His Own Shadow Held Him", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "feet", tm: "lamp", w: ["မင်းခန့်"],
    g: "⚠️ **သူ့အရိပ်က မြေပြင်ပေါ်ကနေ လက်တစ်ဖက်လို ပေါ်လာပြီး သူ့ခြေထောက်ကို ဆွဲထားတယ်။**",
    p: "A few inches above the earth, the same pair of trainers from the knee down, lit by the "
      + "lamps. ⚠️ THE BLACK SHADOW POOL HAS RISEN UP OFF THE GROUND AND CLOSED AROUND BOTH "
      + "ANKLES IN THE SHAPE OF A HAND — a flat matt black form with fingers, with no texture, no "
      + "highlight and no volume to it at all. ⚠️ IT IS SHADOW AND NOT A CREATURE. ⚠️ THE JEANS "
      + "ABOVE IT ARE ORDINARY AND UNDAMAGED. ⚠️ THE EARTH AROUND IT IS UNBROKEN. ⚠️ NO FACE IS "
      + "IN FRAME.",
    u: ["သူ့အရိပ်က မြေပြင်ပေါ်ကနေ လက်တစ်ဖက်လို ပေါ်လာပြီး သူ့ခြေထောက်ကို ဆွဲထားတယ်။",
      "“အစ်ကို! ကယ်ပါဦး!”"] },

  { t: "His Hand Was Cold", l: "မြေအိုးကွင်း", k: "hands", tm: "lamp", w: ["မြေအိုးကွင်း"],
    g: "သူ့လက်ကို လှမ်းဆွဲလိုက်တယ်။ သူ့လက်က အေးစက်နေတယ်။ အလွန်အမင်း အေးစက်နေတယ်။",
    p: "Close in on two hands locked together, the faces out of frame, lit hard from below. ⚠️ "
      + "ONE IS A WORKING HAND AND THE OTHER IS YOUNGER AND BOTH ARE GRIPPING WRIST TO WRIST. ⚠️ "
      + "THE YOUNGER HAND HAS GONE A FLAT GREY-WHITE AND THE SKIN ON IT LOOKS DRY AND DULL, while "
      + "the hand holding it is warm and ordinary. ⚠️ THE DIFFERENCE BETWEEN THE TWO IS THE ONLY "
      + "THING THE SHOT IS ABOUT. ⚠️ NEITHER HAND IS CUT OR BLEEDING. ⚠️ A RED CUFF IS AT THE "
      + "EDGE OF FRAME.",
    u: ["ကျွန်တော် သူ့ဆီ ပြေးသွားတယ်။", "သူ့လက်ကို လှမ်းဆွဲလိုက်တယ်။", "သူ့လက်က အေးစက်နေတယ်။",
      "အလွန်အမင်း အေးစက်နေတယ်။", "“မင်းခန့်! ငါ့လက်ကို မလွှတ်နဲ့!”"] },

  { t: "The Ground Went Soft", l: "မြေအိုးကွင်း", k: "ground", tm: "lamp", w: ["မင်းခန့်"],
    g: "သူ့ခန္ဓာကိုယ်က မြေပြင်ထဲကို တဖြည်းဖြည်း နိမ့်ကျသွားတယ်။ မြေကြီးက ရွှံ့နွံလို ဖြစ်လာတာ။",
    p: "A few inches above the earth inside the ring, level along it, lit by the lamps. ⚠️ A "
      + "YOUNG MAN IN A RED JACKET IS SUNK INTO THE GROUND TO MID-THIGH, upright, with both arms "
      + "up and out. ⚠️ THE EARTH AROUND HIM HAS GONE DARK, WET AND SMOOTH LIKE THICK MUD IN A "
      + "CIRCLE ABOUT A METRE ACROSS, and it is perfectly level — not a hole, not a pit. ⚠️ THE "
      + "DRY DUSTY EARTH BEYOND THAT CIRCLE IS COMPLETELY NORMAL. ⚠️ HE IS WHOLE AND UNINJURED.",
    u: ["သူ ကျွန်တော့်လက်ကို တင်းတင်းဆုပ်ထားတယ်။",
      "ဒါပေမယ့် သူ့ခန္ဓာကိုယ်က မြေပြင်ထဲကို တဖြည်းဖြည်း နိမ့်ကျသွားတယ်။",
      "မြေကြီးက ရွှံ့နွံလို ဖြစ်လာတာ။"] },

  { t: "I Don't Want to Die", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "“အစ်ကို… ကျွန်တော် မသေချင်ဘူး…” — “အမေ့ဆီ ပြန်ရဦးမယ်…”",
    p: "Close on Min Khant from slightly above, sunk to the waist in the dark wet circle of "
      + "earth, lit hard from below. ⚠️ HIS FACE IS TURNED UP TOWARDS CAMERA AND IT IS WET WITH "
      + "TEARS. ⚠️ HIS MOUTH IS OPEN AND HIS EYES ARE WIDE AND HE IS TALKING. ⚠️ HIS FACE AND "
      + "NECK ARE COMPLETELY UNMARKED AND UNINJURED. ⚠️ BOTH HANDS ARE UP AND ONE IS GRIPPED BY "
      + "ANOTHER HAND COMING IN FROM OUT OF FRAME. ⚠️ THE RED JACKET IS HALF UNDER THE EARTH.",
    u: ["“အစ်ကို… ကျွန်တော် မသေချင်ဘူး…”", "သူ ငိုနေတယ်။", "“အမေ့ဆီ ပြန်ရဦးမယ်…”",
      "ကျွန်တော် သူ့ကို အားကုန်ဆွဲတယ်။"] },

  { t: "We Both Pulled", l: "မြေအိုးကွင်း", k: "group", tm: "lamp", w: ["သီဟ", "နန္ဒာ"],
    g: "နန္ဒာလည်း ပြေးလာပြီး ဝိုင်းဆွဲတယ်။ ဒါပေမယ့် ဘယ်လောက်ဆွဲဆွဲ သူ့ခန္ဓာကိုယ်က အောက်ကို ဆင်းနေတုန်းပဲ။",
    p: "At chest height inside the ring, lit hard from below. ⚠️ THIHA AND NANDA ARE BOTH DOWN ON "
      + "THEIR KNEES AT THE EDGE OF THE DARK WET CIRCLE WITH THEIR ARMS STRETCHED OUT INTO IT. "
      + "⚠️ BOTH ARE LEANING BACK AND PULLING WITH EVERYTHING THEY HAVE — shoulders set, backs "
      + "arched. ⚠️ BOTH FACES ARE VISIBLE, COMPLETE AND LIT IDENTICALLY. ⚠️ WHAT THEY ARE "
      + "PULLING IS AT THE EDGE OF FRAME AND ONLY ONE RED SLEEVE AND ONE HAND IS IN SHOT. ⚠️ THE "
      + "DRY EARTH UNDER THEIR KNEES IS FIRM.",
    u: ["နန္ဒာလည်း ပြေးလာပြီး ဝိုင်းဆွဲတယ်။",
      "ဒါပေမယ့် ဘယ်လောက်ဆွဲဆွဲ သူ့ခန္ဓာကိုယ်က အောက်ကို ဆင်းနေတုန်းပဲ။", "နောက်ဆုံး—"] },

  { t: "Tell My Mother", l: "မြေအိုးကွင်း", k: "face", tm: "lamp", w: ["မင်းခန့်"],
    g: "⚠️ **“အစ်ကို… ကျွန်တော့်အမေကို…”** — သူ စကားကို ဆက်မပြောနိုင်တော့ဘူး။",
    p: "Close on Min Khant from above, sunk to the shoulders in the dark wet circle, lit hard "
      + "from below. ⚠️ ONLY HIS HEAD, HIS NECK AND ONE RAISED ARM ARE ABOVE THE EARTH. ⚠️ HIS "
      + "FACE IS TURNED UP TO CAMERA AND IS WET AND COMPLETELY UNMARKED — no injury, no blood, "
      + "nothing wrong with it. ⚠️ HIS MOUTH IS OPEN ON A SENTENCE HE DOES NOT FINISH. ⚠️ HIS "
      + "EYES ARE ON THE LENS. ⚠️ THE EARTH AT HIS CHIN IS SMOOTH AND LEVEL AND NOT DISTURBED.",
    u: ["မင်းခန့်က ကျွန်တော့်ကို မော့ကြည့်လိုက်တယ်။", "သူ့မျက်နှာပေါ်မှာ မျက်ရည်တွေ စီးကျနေတယ်။",
      "“အစ်ကို…”", "“ကျွန်တော့်အမေကို…”", "သူ စကားကို ဆက်မပြောနိုင်တော့ဘူး။"] },

  { t: "His Hand Slipped", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "hands", tm: "lamp", loss: true,
    w: ["မြေအိုးကွင်း"],
    g: "⚠️ **ရုတ်တရက် သူ့လက်က ကျွန်တော့်လက်ထဲကနေ လွတ်ထွက်သွားတယ်။**",
    p: "Close in on one empty open hand lying palm-up on dark wet earth, lit hard from below, the "
      + "face out of frame. ⚠️ THE FINGERS ARE STILL CURLED IN THE SHAPE OF HOLDING SOMETHING "
      + "THAT IS NO LONGER THERE. ⚠️ THE EARTH IN FRONT OF IT IS SMOOTH, DARK, WET AND "
      + "COMPLETELY LEVEL — unbroken, with no mark or depression in it anywhere. ⚠️ THERE IS "
      + "NOTHING ELSE IN THE PICTURE. ⚠️ NOBODY IS IN FRAME AND NOTHING IS LYING ON THE GROUND.",
    u: ["ရုတ်တရက် သူ့လက်က ကျွန်တော့်လက်ထဲကနေ လွတ်ထွက်သွားတယ်။",
      "သူ့ခန္ဓာကိုယ်တစ်ခုလုံး မြေပြင်ထဲကို နစ်ဝင်ပျောက်ကွယ်သွားတယ်။",
      "ကျွန်တော် မြေပြင်ပေါ် လဲကျသွားတယ်။"] },

  { t: "Only the Red Jacket", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "ground", tm: "lamp", loss: true,
    w: ["မြေအိုးကွင်း"],
    g: "⚠️ **အဲဒီနေရာမှာ မင်းခန့် မရှိတော့ဘူး။ အနီရောင်ဂျာကင်တစ်ထည်ပဲ ကျန်ခဲ့တယ်။**",
    p: "A few inches above the earth inside the ring, level along it, lit by the lamps. ⚠️ ONE "
      + "BRIGHT RED NYLON DELIVERY JACKET IS LYING FLAT AND EMPTY ON THE BARE GROUND, collapsed "
      + "and crumpled with the sleeves spread out. ⚠️ THERE IS NOBODY IN IT AND NO BODY ANYWHERE "
      + "IN THE PICTURE. ⚠️ THE EARTH AROUND IT IS DRY, FIRM AND COMPLETELY UNMARKED — no wet "
      + "circle, no hole, no footprint. ⚠️ IT IS THE ONLY STRONG COLOUR IN THE FRAME. ⚠️ NOTHING "
      + "ELSE IS THERE.",
    u: ["အဲဒီနေရာမှာ မင်းခန့် မရှိတော့ဘူး။", "အနီရောင်ဂျာကင်တစ်ထည်ပဲ ကျန်ခဲ့တယ်။"] },

  { t: "Nobody Spoke", l: "မြေအိုးကွင်း", k: "ring", tm: "lamp", pots: true, loss: true,
    w: ["မြေအိုးကွင်း", "နန္ဒာ", "သက်မွန်", "ဒေါ်ခင်မာ", "ရဲအောင်", "ဦးဘဦး"],
    g: "နန္ဒာက ပါးစပ်ကို လက်နဲ့အုပ်ထားတယ်။ သက်မွန်က ငိုချလိုက်တယ်။ ဘယ်သူမှ စကားမပြောကြဘူး။",
    p: "The ring at chest height, lit by the lamps on the earth. ⚠️ FIVE OF THE STRANGERS ARE "
      + "STANDING AROUND A WIDE EMPTY SPACE OF BARE GROUND WITH A RED JACKET LYING FLAT IN THE "
      + "MIDDLE OF IT. ⚠️ THERE IS A CLEAR GAP IN THE RING OF PEOPLE WHERE SOMEBODY WAS STANDING. "
      + "⚠️ ONE HAS A HAND OVER HER OWN MOUTH, ONE HAS TURNED HER FACE AWAY, ONE IS DOWN ON THE "
      + "EARTH. ⚠️ EVERY FACE IS COMPLETE AND LIT IDENTICALLY. ⚠️ NOBODY IS LYING DOWN AND THERE "
      + "IS NO BODY IN THE PICTURE.",
    u: ["နန္ဒာက သူ့ပါးစပ်ကို လက်နဲ့အုပ်ထားတယ်။", "သက်မွန်က ငိုချလိုက်တယ်။",
      "ဒေါ်ခင်မာက မျက်နှာလွှဲသွားတယ်။", "ရဲအောင်ကတော့ ဇရပ်တိုင်နားမှာ ရပ်နေတယ်။",
      "ဘယ်သူမှ စကားမပြောကြဘူး။"] },

  { t: "The First Debt Is Paid", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp", puppet: true,
    w: ["ရုပ်သေး"],
    g: "⚠️ **“ပထမအကြွေး… ဆပ်ပြီးပြီ…”**",
    p: "The black marionette on the stool, close, lit warm from one side. ⚠️ IT HAS NOT MOVED. "
      + "⚠️ THE CARVED FACE IS EXACTLY AS IT HAS BEEN IN EVERY SHOT — matt black wood, chisel "
      + "marks, two shallow carved eyes painted over in the same black, a shallow closed carved "
      + "mouth, no expression of any kind. ⚠️ THE STRINGS ARE SLACK. ⚠️ A FINE LAYER OF PALE DUST "
      + "HAS SETTLED ON ITS SHOULDERS AND ON THE STOOL AROUND IT. ⚠️ IT IS PLAINLY WOOD AND IT "
      + "HAS DONE NOTHING.",
    u: ["အဲဒီအချိန် ရုပ်သေးရဲ့အသံ ထွက်လာတယ်။", "“ပထမအကြွေး… ဆပ်ပြီးပြီ…”"] },

  /* ── အခန်း ၁၁ · အိုးကို ဘယ်သူက ခွဲခဲ့တာလဲ ───────────────────────────── */
  { t: "The Lamps Went Out", l: "မြေအိုးကွင်း", k: "high", tm: "dark", pots: true, loss: true,
    w: ["မြေအိုးကွင်း"],
    g: "ဆီမီးခွက်တွေ ငြိမ်းသွားတယ်။ လက်ထဲက မြေအိုးတွေကလည်း ပျောက်ကွယ်သွားတယ်။",
    p: "High above the pot ground looking straight down in almost total darkness, only thin "
      + "moonlight on it. ⚠️ THE RING OF CLAY LAMP CUPS IS STILL THERE AND EVERY SINGLE ONE OF "
      + "THEM IS OUT AND COLD. ⚠️ THE TWELVE POTS ARE GONE — the earth where they stood is bare, "
      + "with only faint clean rings left in the dust. ⚠️ ONE SET OF BROKEN SHARDS LIES AT THE "
      + "FOOT OF A TEAK POST AT THE EDGE OF FRAME. ⚠️ SMALL FIGURES STAND SCATTERED AND STILL. "
      + "Colour almost gone.",
    u: ["ခေါင်းလောင်းသံတစ်ချက် ထပ်မြည်လာတယ်။", "ဇရပ်ရှေ့က ဆီမီးခွက်တွေ ငြိမ်းသွားတယ်။",
      "ကျွန်တော်တို့လက်ထဲက မြေအိုးတွေကလည်း တဖြည်းဖြည်း ပျောက်ကွယ်သွားတယ်။",
      "မင်းခန့်ရဲ့ ကွဲနေတဲ့အိုးတစ်လုံးပဲ ကျန်ခဲ့တယ်။"] },

  { t: "My Hands Were Shaking", l: "မြေအိုးကွင်း", k: "thiha", tm: "dark", w: ["သီဟ"],
    g: "ကျွန်တော် မြေပြင်ပေါ်မှာ ထိုင်နေတုန်း။ ကျွန်တော့်လက်တွေ တုန်နေတယ်။",
    p: "Close on Thiha sitting on the bare earth in thin moonlight with the lamps out, ⚠️ HIS "
      + "FACE LIT ONLY BY COLD BLUE-GREY LIGHT FROM ABOVE. ⚠️ HE IS LOOKING AT NOTHING AND HIS "
      + "EYES ARE UNFOCUSED. ⚠️ BOTH HANDS ARE OPEN AND PALM-UP ON HIS OWN KNEES AND BOTH ARE "
      + "SHAKING. ⚠️ HIS MOUTH IS SHUT. ⚠️ THE SMALL PALE SCAR ABOVE HIS LEFT EYEBROW IS JUST "
      + "VISIBLE. Colour almost gone, the dark ground out of focus behind him.",
    u: ["ကျွန်တော် မြေပြင်ပေါ်မှာ ထိုင်နေတုန်း။", "ကျွန်တော့်လက်တွေ တုန်နေတယ်။",
      "လွန်ခဲ့တဲ့ မိနစ်အနည်းငယ်ကမှ ကျွန်တော့်နဲ့ စကားပြောခဲ့တဲ့ လူငယ်တစ်ယောက်။"] },

  { t: "I Couldn't Save Him", l: "မြေအိုးကွင်း", k: "two", tm: "dark", w: ["သီဟ", "နန္ဒာ"],
    g: "“သီဟ… ရှင် အဆင်ပြေရဲ့လား?” — “ကျွန်တော် သူ့ကို မကယ်နိုင်ခဲ့ဘူး…”",
    p: "Two shot at seated height on the bare earth in thin moonlight. ⚠️ THIHA AND NANDA ARE "
      + "SITTING SIDE BY SIDE ON THE GROUND WITH A HAND'S WIDTH BETWEEN THEM, both complete in "
      + "frame. ⚠️ NEITHER IS LOOKING AT THE OTHER AND BOTH ARE FACING OUT INTO THE DARK. ⚠️ BOTH "
      + "FACES ARE LIT IDENTICALLY BY THE COLD LIGHT. ⚠️ THEIR HANDS ARE EMPTY. ⚠️ THE EARTH "
      + "AROUND THEM IS BARE AND THERE ARE NO POTS ANYWHERE IN THE PICTURE.",
    u: ["သူ့အမေကို ဆေးရုံလိုက်ပို့ရမယ်လို့ ပြောခဲ့တဲ့ လူငယ်တစ်ယောက်။",
      "အခုတော့ ကျွန်တော့်မျက်စိရှေ့မှာပဲ ပျောက်ကွယ်သွားပြီ။",
      "နန္ဒာက ကျွန်တော့်အနားမှာ ထိုင်ချတယ်။", "“သီဟ… ရှင် အဆင်ပြေရဲ့လား?”",
      "ကျွန်တော် ခေါင်းခါလိုက်တယ်။", "“ကျွန်တော် သူ့ကို မကယ်နိုင်ခဲ့ဘူး…”"] },

  { t: "A Phone in the Pocket", l: "မြေအိုးကွင်း", k: "hands", tm: "dark", loss: true,
    w: ["ဖုန်း"],
    g: "ကျွန်တော် အနီရောင်ဂျာကင်ကို ကောက်ယူလိုက်တယ်။ ဂျာကင်အိတ်ထဲမှာ ဖုန်းတစ်လုံး ရှိနေတယ်။",
    p: "Close in on two hands holding a crumpled red nylon jacket in thin moonlight, the face out "
      + "of frame. ⚠️ ONE HAND IS DRAWING A PHONE OUT OF THE INSIDE POCKET. ⚠️ THE JACKET IS "
      + "EMPTY AND LIMP AND COLLAPSED OVER THE ARM HOLDING IT. ⚠️ THERE IS NOBODY IN IT AND NO "
      + "BODY ANYWHERE IN THE PICTURE. ⚠️ THE NYLON IS UNDAMAGED — not torn, not marked, not "
      + "stained. ⚠️ THE PHONE SCREEN IS DARK. Cold light, colour almost gone except the red.",
    u: ["နန္ဒာက ဘာမှမပြောဘူး။",
      "ခဏကြာတော့ ကျွန်တော် မင်းခန့်ရဲ့ အနီရောင်ဂျာကင်ကို ကောက်ယူလိုက်တယ်။",
      "ဂျာကင်အိတ်ထဲမှာ ဖုန်းတစ်လုံး ရှိနေတယ်။"] },

  { t: "Eleven Fifty-Eight", l: "မြေအိုးကွင်း", k: "insert", tm: "screen", w: ["ဖုန်း"],
    g: "⚠️ **ဖုန်းမှာ “အမေ” ဆိုတဲ့ နာမည်နဲ့ ခေါ်ထားတဲ့ မှတ်တမ်း — နောက်ဆုံးခေါ်ထားတာ ည ၁၁ နာရီ ၅၈ မိနစ်။**",
    p: "Straight down onto a phone held in one hand, filling the frame, the screen lit and the "
      + "only light in the picture. ⚠️ IT SHOWS A PLAIN CALL-LOG PANEL WITH ONE ENTRY AT THE TOP "
      + "— a round grey avatar disc, a short name beside it and a time below. ⚠️ ALL OF THE TEXT "
      + "STAYS SOFT AND SLIGHTLY OUT OF FOCUS, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ "
      + "THE REST OF THE LOG BELOW IT IS EMPTY GREY. ⚠️ THE RED NYLON OF THE JACKET IS UNDER THE "
      + "HAND, out of focus.",
    u: ["ဖုန်းမျက်နှာပြင်မှာ အမေဆိုတဲ့ နာမည်နဲ့ ဖုန်းခေါ်ထားတဲ့ မှတ်တမ်းတစ်ခု။",
      "နောက်ဆုံးခေါ်ထားတာ ည ၁၁ နာရီ ၅၈ မိနစ်။",
      "ကျွန်တော် ဖုန်းကို ဖြည်းဖြည်းချင်း ပိတ်လိုက်တယ်။"] },

  { t: "It Did Not Fall By Itself", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "dark", pots: true,
    w: ["ရွာလယ်ဇရပ်"],
    g: "⚠️ အဲဒီအိုးက သူ့အလိုလို ကွဲသွားတာ မဟုတ်ဘူး။ **တစ်ယောက်ယောက်က ကန်လိုက်တာ။**",
    p: "Tight and low on the broken shards at the foot of the teak zayat post in thin moonlight, "
      + "shallow focus. ⚠️ THE SHARDS ARE SPREAD IN A NARROW FAN THAT POINTS AWAY FROM THE POST "
      + "IN ONE DIRECTION — not scattered evenly the way a dropped pot breaks. ⚠️ A SINGLE SCUFF "
      + "MARK IN THE DUST LEADS INTO WHERE THE POT WAS STANDING. ⚠️ THE UPTURNED BASE WITH ITS "
      + "SCRATCHED NAME LIES AMONG THEM, reading as marks. ⚠️ NOBODY IS IN THE PICTURE. Colour "
      + "almost gone.",
    u: ["အဲဒီအချိန်မှာပဲ—", "ကျွန်တော့်ခေါင်းထဲ အတွေးတစ်ခု ဝင်လာတယ်။", "မင်းခန့်ရဲ့ အိုး။",
      "အဲဒီအိုးက သူ့အလိုလို ကွဲသွားတာ မဟုတ်ဘူး။", "တစ်ယောက်ယောက်က ကန်လိုက်တာ။",
      "ကျွန်တော် သေချာမြင်ခဲ့တယ်။"] },

  { t: "Somebody Killed Him", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "thiha", tm: "dark", w: ["သီဟ"],
    g: "⚠️ **ဒါဆို… တစ်ယောက်ယောက်က မင်းခန့်ကို တမင်သတ်လိုက်တာပဲ။**",
    p: "Close on Thiha in thin moonlight, ⚠️ HIS HEAD COME UP AND HIS EYES SUDDENLY SHARP AND "
      + "FOCUSED FOR THE FIRST TIME SINCE THE DEATH. ⚠️ HIS MOUTH IS SHUT AND THE JAW IS SET. "
      + "⚠️ HE IS LOOKING AT SOMETHING PAST CAMERA AND HIS EYES ARE MOVING FROM ONE POINT TO "
      + "ANOTHER IN SMALL DELIBERATE STEPS. ⚠️ THE RED JACKET IS ACROSS HIS KNEES, out of focus "
      + "at the bottom of frame. Cold blue-grey light, colour drained.",
    u: ["ဒါဆို…", "တစ်ယောက်ယောက်က မင်းခန့်ကို တမင်သတ်လိုက်တာပဲ။"] },

  { t: "I Looked at Every One of Them", l: "မြေအိုးကွင်း", k: "group", tm: "dark",
    w: ["မြေအိုးကွင်း", "ရဲအောင်", "ကိုဟန်ဇော်", "ထွန်းမြတ်", "ဦးဘဦး", "မေဇင်"],
    g: "ရဲအောင်။ ကိုဟန်ဇော်။ ကိုထွန်းမြတ်။ ဦးဘဦး။ တခြားလူတွေ။",
    p: "Five of the strangers standing scattered across the dark pot ground in thin moonlight. "
      + "⚠️ EVERY ONE OF THEM IS COMPLETE IN FRAME, SEPARATE AND LIT EXACTLY THE SAME AS EVERY "
      + "OTHER — ⚠️ NOBODY IS CLOSER TO CAMERA, NOBODY IS IN SHADOW, NOBODY IS HELD APART OR "
      + "FRAMED DIFFERENTLY. ⚠️ EVERY FACE IS DOING THE SAME THING: NOTHING. ⚠️ NOT ONE OF THEM "
      + "IS LOOKING AT THE LENS. ⚠️ THEIR HANDS ARE EMPTY AND THERE ARE NO POTS IN THE PICTURE. "
      + "Cold flat light on all of them equally.",
    u: ["ကျွန်တော် လူတွေကို တစ်ယောက်ချင်း လိုက်ကြည့်လိုက်တယ်။", "ရဲအောင်။", "ကိုဟန်ဇော်။",
      "ကိုထွန်းမြတ်။", "ဦးဘဦး။", "တခြားလူတွေ။"] },

  { t: "I Didn't See Who", l: "မြေအိုးကွင်း", k: "ground", tm: "dark", w: ["မြေအိုးကွင်း"],
    g: "ခုနက အားလုံး ရုန်းရင်းဆန်ခတ်ဖြစ်နေကြတာ။ ဘယ်သူက အိုးကို ကန်လိုက်လဲဆိုတာ ကျွန်တော် မမြင်လိုက်ရဘူး။",
    p: "A few inches above the bare earth of the pot ground in thin moonlight, level along it. "
      + "⚠️ THE DUST IS CHURNED AND TRAMPLED WITH DOZENS OF OVERLAPPING FOOTPRINTS RUNNING IN "
      + "EVERY DIRECTION. ⚠️ NOT ONE OF THEM IS SEPARABLE FROM THE REST AND NO SINGLE TRACK CAN "
      + "BE FOLLOWED. ⚠️ THE FOOT OF THE TEAK POST AND THE BROKEN SHARDS ARE AT THE FAR EDGE OF "
      + "FRAME, out of focus. ⚠️ THERE IS NOBODY IN THE PICTURE. Colour almost gone, heavy grain.",
    u: ["ခုနက အားလုံး ရုန်းရင်းဆန်ခတ်ဖြစ်နေကြတာ။",
      "ဘယ်သူက အိုးကို ကန်လိုက်လဲဆိုတာ ကျွန်တော် မမြင်လိုက်ရဘူး။"] },

  { t: "You Saw It, Didn't You", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "face", tm: "dark", w: ["သဇင်"],
    g: "“မင်းခန့်ရဲ့အိုး ကွဲသွားတာကို ရှင် မြင်လိုက်တယ်မဟုတ်လား?” — “မြင်တယ်…” — “ဘယ်သူလုပ်တာလဲ?”",
    p: "Close on Thazin in thin moonlight, ⚠️ HER FACE TURNED TOWARDS CAMERA WITH THE MOUTH "
      + "BARELY OPEN AND THE CHIN DOWN. ⚠️ HER EYES ARE STEADY AND DIRECT "
      + "AND SHE IS NOT FRIGHTENED. ⚠️ THE SMALL WOODEN PENDANT AT HER THROAT AND THE LONG LOOSE "
      + "HAIR ARE CLEAR. ⚠️ SHE IS STANDING VERY CLOSE AND NOBODY ELSE IS IN FRAME. Cold "
      + "blue-grey light flat across her face, black behind her.",
    u: ["ကျွန်တော် လူတိုင်းကို စောင့်ကြည့်နေတုန်း သဇင်က ကျွန်တော့်အနားကို လာတယ်။",
      "သူက တိုးတိုးလေး မေးတယ်။", "“မင်းခန့်ရဲ့အိုး ကွဲသွားတာကို ရှင် မြင်လိုက်တယ်မဟုတ်လား?”",
      "ကျွန်တော် သူ့ကို ကြည့်လိုက်တယ်။", "“မြင်တယ်…”", "“ဘယ်သူလုပ်တာလဲ?”", "“မသိဘူး…”"] },

  { t: "There's a Killer Among Us", c: [[1, "bigstinger"]], l: "မြေအိုးကွင်း", k: "group", tm: "dark",
    w: ["မြေအိုးကွင်း", "သက်မွန်", "နန္ဒာ", "ဒေါ်ခင်မာ", "ဖြိုးဝေ", "သဇင်"],
    g: "⚠️ **“ဒါဆို ကျွန်မတို့ထဲမှာ လူသတ်သမားတစ်ယောက် ရှိနေပြီ…”**",
    p: "Five of the strangers standing on the dark pot ground in thin moonlight, ⚠️ WELL APART "
      + "FROM EACH OTHER WITH WIDE BARE EARTH BETWEEN EVERY PAIR. ⚠️ EVERY ONE IS FACING A "
      + "DIFFERENT WAY AND NOT ONE IS LOOKING AT ANOTHER. ⚠️ EVERY FACE IS COMPLETE, SEPARATE AND "
      + "LIT EXACTLY THE SAME. ⚠️ NOBODY IS SINGLED OUT BY THE FRAMING OR THE LIGHT IN ANY WAY. "
      + "⚠️ THEIR HANDS ARE EMPTY. Cold flat light, hard black shadows behind every figure.",
    u: ["သဇင်က လူတွေကို ကြည့်တယ်။", "ပြီးတော့ တိုးတိုးပြောတယ်။",
      "“ဒါဆို ကျွန်မတို့ထဲမှာ လူသတ်သမားတစ်ယောက် ရှိနေပြီ…”",
      "ကျွန်တော် သူ့ကို ပြန်ကြည့်လိုက်တယ်။", "သူ့စကား မှန်နေတယ်။"] },

  { t: "The Worst Thing Here Is Us", l: "မြေအိုးကွင်း", k: "thiha", tm: "dark", w: ["သီဟ"],
    g: "⚠️ **ဒီရွာမှာ ကြောက်စရာအကောင်းဆုံးက ကျွန်တော်တို့အချင်းချင်းပဲ။**",
    p: "Close on Thiha in thin moonlight, ⚠️ LOOKING STRAIGHT AT THE LENS WITH HIS FACE "
      + "COMPLETELY STILL. ⚠️ THERE IS NO FEAR IN IT ANY MORE — it has been replaced by something "
      + "flatter and more watchful. ⚠️ HIS MOUTH IS SHUT AND HIS EYES DO NOT MOVE. ⚠️ THE SMALL "
      + "PALE SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE. ⚠️ OUT-OF-FOCUS HUMAN SHAPES STAND IN THE "
      + "DARK BEHIND HIM AND NOT ONE OF THEM RESOLVES. Cold blue-grey light, colour drained "
      + "almost to monochrome.",
    u: ["ဒီရွာက ကြောက်စရာကောင်းတာ သေချာတယ်။", "ရုပ်သေးလည်း ကြောက်စရာကောင်းတယ်။",
      "ဒါပေမယ့် အခု ကျွန်တော် သဘောပေါက်လိုက်တာတစ်ခု ရှိတယ်။",
      "ဒီရွာမှာ ကြောက်စရာအကောင်းဆုံးက ကျွန်တော်တို့အချင်းချင်းပဲ။"] },

  /* ── နောက်ဆုံးအခန်း · ဆယ့်နှစ်ယောက်မြောက်လူ ─────────────────────────── */
  { t: "Eleven Left", l: "ရွာလယ်ဇရပ်", k: "group", tm: "dark", loss: true,
    w: ["ရွာလယ်ဇရပ်", "သက်မွန်", "ဒေါ်ခင်မာ", "ရဲအောင်", "နန္ဒာ", "ဦးဘဦး"],
    g: "လူဆယ့်နှစ်ယောက်ကနေ ဆယ့်တစ်ယောက်ပဲ ကျန်တော့တယ်။ ဘယ်သူမှ စကားမပြောချင်ကြဘူး။",
    p: "Five of the strangers gathered on the bare earth in front of the dark zayat in thin "
      + "moonlight. ⚠️ THEY ARE SITTING AND STANDING IN A LOOSE SCATTER WITH WIDE GAPS BETWEEN "
      + "THEM. ⚠️ ONE IS CRYING, ONE IS LEANING AGAINST A TEAK POST, ONE IS LOOKING AT SOMETHING "
      + "ON THE GROUND. ⚠️ EVERY FACE IS COMPLETE, SEPARATE AND LIT EXACTLY THE SAME. ⚠️ NOBODY "
      + "IS LYING DOWN AND THERE IS NO BODY IN THE PICTURE. ⚠️ THE LAMPS ARE ALL OUT. Cold "
      + "blue-grey light, colour drained.",
    u: ["ပွဲပြီးသွားတော့ ကျွန်တော်တို့အားလုံး ဇရပ်ရှေ့မှာ စုနေကြတယ်။",
      "လူဆယ့်နှစ်ယောက်ကနေ ဆယ့်တစ်ယောက်ပဲ ကျန်တော့တယ်။", "ဘယ်သူမှ စကားမပြောချင်ကြဘူး။",
      "သက်မွန်က ငိုနေတုန်း။"] },

  { t: "She Looked at the Jacket", l: "ရွာလယ်ဇရပ်", k: "face", tm: "dark", loss: true,
    w: ["ဒေါ်ခင်မာ"],
    g: "ဒေါ်ခင်မာက မင်းခန့်ရဲ့ ဂျာကင်ကို ကြည့်ပြီး မျက်ရည်ဝဲနေတယ်။",
    p: "Close on Daw Khin Ma in thin moonlight, ⚠️ HER FACE TURNED DOWN TOWARDS SOMETHING LOW AND "
      + "OUT OF FRAME AND HER EYES FULL. ⚠️ HER MOUTH IS SHUT AND PULLED TIGHT AT THE CORNERS. "
      + "⚠️ ONE HAND HAS COME UP AND CLOSED ON THE CLOTH AT HER OWN THROAT. ⚠️ THE THICK THANAKA "
      + "ROUNDS ON HER CHEEKS ARE SMEARED ON ONE SIDE. ⚠️ THE MUSTARD-YELLOW BLOUSE IS DIRTY AT "
      + "ONE SHOULDER AND THE SLEEVE IS TORN. Cold flat light, black behind her.",
    u: ["ဒေါ်ခင်မာက မင်းခန့်ရဲ့ ဂျာကင်ကို ကြည့်ပြီး မျက်ရည်ဝဲနေတယ်။",
      "ရဲအောင်ကတော့ ဇရပ်တိုင်ကို မှီပြီး ငြိမ်နေတယ်။",
      "နန္ဒာက ကျွန်တော့်အနားမှာ ထိုင်နေတယ်။"] },

  { t: "I Kept Hearing It Break", l: "ရွာလယ်ဇရပ်", k: "insert", tm: "dark", pots: true,
    w: ["ရွာလယ်ဇရပ်"],
    g: "ကျွန်တော်ကတော့ ခုနက အိုးကွဲသံကိုပဲ ပြန်ကြားနေမိတယ်။ အိုးကွဲတွေက မြေပြင်ပေါ်မှာ ပြန့်ကျဲနေတယ်။",
    p: "Tight and low on the broken shards at the foot of the teak post in thin moonlight, "
      + "shallow focus. ⚠️ THE LARGE CURVED PIECES OF RED-BROWN EARTHENWARE LIE FLAT AND COLD ON "
      + "THE BARE EARTH. ⚠️ THE DUST HAS LONG SETTLED AND NOTHING IS MOVING. ⚠️ THEY ARE THE ONLY "
      + "POT REMAINS ANYWHERE — the ring behind is bare and empty, out of focus. ⚠️ NOBODY IS IN "
      + "THE PICTURE. Colour almost entirely gone, heavy grain.",
    u: ["ကျွန်တော်ကတော့ ခုနက အိုးကွဲသံကိုပဲ ပြန်ကြားနေမိတယ်။",
      "အဲဒီအချိန်မှာ မင်းခန့်ရဲ့ မြေအိုးကွဲတွေကို သတိထားမိတယ်။",
      "အိုးကွဲတွေက မြေပြင်ပေါ်မှာ ပြန့်ကျဲနေတယ်။"] },

  { t: "I Picked Up a Piece", l: "ရွာလယ်ဇရပ်", k: "hands", tm: "dark", pots: true,
    w: ["မြေအိုး"],
    g: "အိုးကွဲတစ်စကို ကောက်ယူလိုက်တယ်။ အိုးအောက်ခြေအပိုင်း။ အဲဒီမှာ စာတစ်ခုခု ရေးထားတယ်။",
    p: "Close in on one hand holding a large curved shard of red-brown earthenware in thin "
      + "moonlight, the face out of frame. ⚠️ IT IS THE BASE SECTION OF THE POT, turned so the "
      + "INSIDE of the clay faces the lens. ⚠️ THERE ARE FINE SCRATCHED BURMESE MARKS ON THE "
      + "INNER SURFACE, much smaller and more crowded than the name that was on the outside. ⚠️ "
      + "THEY STAY SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ "
      + "PALE DUST IS CAKED ACROSS THEM.",
    u: ["ကျွန်တော် အဲဒီနေရာကို လျှောက်သွားတယ်။", "အိုးကွဲတစ်စကို ကောက်ယူလိုက်တယ်။",
      "အိုးအောက်ခြေအပိုင်း။", "အဲဒီမှာ စာတစ်ခုခု ရေးထားတယ်။"] },

  { t: "Not the Name He Showed Us", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", pots: true,
    w: ["မြေအိုး"],
    g: "အစောက မင်းခန့် ပြခဲ့တဲ့ သူ့အစ်ကိုနာမည်နဲ့ မတူဘူး။ အိုးအောက်ခြေ အတွင်းဘက်မှာ နောက်ထပ်စာတွေ ရေးထားတာ။",
    p: "Tight on the inner face of the pot shard held up close to a single small flame, filling "
      + "the frame. ⚠️ THE WARM LIGHT RAKES ACROSS THE SURFACE AT A LOW ANGLE AND THROWS THE FINE "
      + "SCRATCHED MARKS INTO RELIEF. ⚠️ THERE ARE THREE SEPARATE SHORT LINES OF THEM, one below "
      + "another. ⚠️ ALL OF IT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS "
      + "LEGIBLE WORDS. ⚠️ A THUMB IS RUBBING DUST OFF THE LOWEST LINE. ⚠️ NOTHING ELSE IS IN "
      + "FRAME.",
    u: ["အစောက မင်းခန့် ပြခဲ့တဲ့ သူ့အစ်ကိုနာမည်နဲ့ မတူဘူး။",
      "အိုးအောက်ခြေ အတွင်းဘက်မှာ နောက်ထပ်စာတွေ ရေးထားတာ။",
      "ကျွန်တော် အိုးကွဲစကို ဆီမီးရောင်အောက်မှာ ထောင်ကြည့်လိုက်တယ်။"] },

  { t: "Twelve Guests", l: "ရွာလယ်ဇရပ်", k: "thiha", tm: "lamp", w: ["သီဟ"],
    g: "⚠️ **“ဧည့်သည် ဆယ့်နှစ်ယောက်…”**",
    p: "Close on Thiha holding the shard up near a small flame, lit warm from below and one side "
      + "with everything else black. ⚠️ HIS EYES ARE DOWN ON THE CLAY AND MOVING ALONG A LINE. "
      + "⚠️ HIS BROWS HAVE DRAWN TOGETHER AND HIS MOUTH IS SLIGHTLY OPEN. ⚠️ THE SHARD IS AT THE "
      + "BOTTOM OF FRAME, OUT OF FOCUS. ⚠️ THE SMALL PALE SCAR ABOVE HIS LEFT EYEBROW IS LIT "
      + "FROM BELOW. ⚠️ HE IS ALONE IN THE PICTURE.",
    u: ["စာလုံးတွေက သေးတယ်။", "ဖုန်တွေလည်း ပေနေတယ်။", "ကျွန်တော် လက်နဲ့ ဖြည်းဖြည်း ပွတ်လိုက်တယ်။",
      "ပြီးတော့—", "“ဧည့်သည် ဆယ့်နှစ်ယောက်…”"] },

  { t: "Eleven Humans", l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", pots: true, w: ["မြေအိုး"],
    g: "⚠️ **“လူသား ဆယ့်တစ်ယောက်…”**",
    p: "Very tight on the inner face of the shard with the flame raking across it, filling the "
      + "frame. ⚠️ THE SECOND OF THE THREE SCRATCHED LINES IS NOW CLEAN OF DUST AND THE FIRST "
      + "AND THIRD ARE STILL CAKED. ⚠️ ALL THREE STAY SOFT AND PARTLY OCCLUDED, READING AS MARKS "
      + "RATHER THAN AS LEGIBLE WORDS. ⚠️ THE SCRATCHES ARE OLD — the clay inside them is the "
      + "same weathered colour as the surface, not freshly cut. ⚠️ FINGERS GRIP THE BROKEN EDGE "
      + "AT THE SIDE OF FRAME.",
    u: ["ကျွန်တော့်မျက်မှောင်တွေ ကြုတ်သွားတယ်။", "ဆက်ဖတ်လိုက်တယ်။", "“လူသား ဆယ့်တစ်ယောက်…”",
      "ကျွန်တော့်လက်ထဲက အိုးကွဲစကို ပိုပြီး တင်းတင်းဆုပ်လိုက်မိတယ်။"] },

  { t: "One of the Guests Is Not a Person", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp",
    pots: true, w: ["မြေအိုး"],
    g: "⚠️ **“ဧည့်သည်များထဲတွင် လူမဟုတ်သူ တစ်ယောက် ပါဝင်သည်။”**",
    p: "Very tight on the inner face of the shard, filling the frame, the flame very close. ⚠️ "
      + "THE THIRD AND LOWEST LINE OF SCRATCHED MARKS IS NOW CLEAN AND IS THE LONGEST OF THE "
      + "THREE. ⚠️ IT STAYS SOFT AND PARTLY OCCLUDED, READING AS MARKS RATHER THAN AS LEGIBLE "
      + "WORDS. ⚠️ THE CLAY AROUND IT IS CRAZED WITH FINE AGE CRACKS. ⚠️ THE KNUCKLES GRIPPING "
      + "THE EDGE OF THE SHARD HAVE GONE PALE. ⚠️ NOTHING ELSE IS IN THE PICTURE.",
    u: ["စာနောက်ဆုံးတစ်ကြောင်းကတော့—", "“ဧည့်သည်များထဲတွင် လူမဟုတ်သူ တစ်ယောက် ပါဝင်သည်။”",
      "ကျွန်တော့်တစ်ကိုယ်လုံး အေးခဲသွားတယ်။"] },

  { t: "Eleven All Along", l: "ရွာလယ်ဇရပ်", k: "thiha", tm: "dark", w: ["သီဟ"],
    g: "⚠️ **အစကတည်းက ဆယ့်နှစ်ယောက်ထဲမှာ လူအစစ် ဆယ့်တစ်ယောက်ပဲ ရှိခဲ့တာ။**",
    p: "Close on Thiha in thin moonlight with the flame now out, ⚠️ HIS HEAD COMING UP OFF THE "
      + "SHARD AND HIS EYES WIDENING AS IT DOES. ⚠️ HIS MOUTH IS OPEN AND HE HAS STOPPED "
      + "BREATHING. ⚠️ THE SHARD IS STILL GRIPPED IN ONE HAND AT THE BOTTOM OF FRAME. ⚠️ HE IS "
      + "LOOKING PAST CAMERA AT PEOPLE WHO ARE NOT IN SHOT. ⚠️ ALL THE COLOUR HAS GONE OUT OF HIS "
      + "FACE. Cold blue-grey light, colour drained.",
    u: ["ဘာကို ဆိုလိုတာလဲ?", "ကျွန်တော်တို့ လူဆယ့်နှစ်ယောက် ဒီရွာကို အတူရောက်လာတာ။",
      "မင်းခန့်တစ်ယောက် ပျောက်ကွယ်သွားပြီ။", "အခု ဆယ့်တစ်ယောက်ကျန်တယ်။",
      "ဒါပေမယ့် ဒီစာအရဆိုရင်—",
      "အစကတည်းက ဆယ့်နှစ်ယောက်ထဲမှာ လူအစစ် ဆယ့်တစ်ယောက်ပဲ ရှိခဲ့တာ။"] },

  { t: "I Looked Up", l: "ရွာလယ်ဇရပ်", k: "group", tm: "dark",
    w: ["ရွာလယ်ဇရပ်", "နန္ဒာ", "ကိုဟန်ဇော်", "သက်မွန်", "ဦးဘဦး", "ရဲအောင်"],
    g: "ဇရပ်ရှေ့မှာ လူဆယ့်တစ်ယောက် ရှိနေတယ်။ နန္ဒာ။ ကိုဟန်ဇော်။ သက်မွန်။ ဦးဘဦး။ ရဲအောင်။",
    p: "Five of the strangers standing and sitting in front of the dark zayat in thin moonlight. "
      + "⚠️ EVERY ONE OF THEM IS COMPLETE IN FRAME, SEPARATE AND LIT EXACTLY THE SAME AS EVERY "
      + "OTHER — ⚠️ NOBODY IS NEARER THE CAMERA, NOBODY IS IN DEEPER SHADOW, NOBODY IS HELD APART "
      + "BY THE COMPOSITION AND NOBODY IS LOOKING AT THE LENS. ⚠️ EVERY FACE IS ORDINARY, TIRED "
      + "AND FRIGHTENED IN EXACTLY THE SAME WAY. ⚠️ THE FRAME GIVES NOTHING AWAY. Cold flat light "
      + "on all of them equally.",
    u: ["ကျွန်တော် ဖြည်းဖြည်းချင်း ခေါင်းမော့လိုက်တယ်။", "ဇရပ်ရှေ့မှာ လူဆယ့်တစ်ယောက် ရှိနေတယ်။",
      "နန္ဒာ။", "ကိုဟန်ဇော်။", "သက်မွန်။", "ဦးဘဦး။", "ရဲအောင်။"] },

  { t: "And the Rest of Them", l: "ရွာလယ်ဇရပ်", k: "group", tm: "dark",
    w: ["ရွာလယ်ဇရပ်", "သဇင်", "ထွန်းမြတ်", "မေဇင်", "ဒေါ်ခင်မာ", "ဖြိုးဝေ"],
    g: "သဇင်။ ကိုထွန်းမြတ်။ မေဇင်။ ဒေါ်ခင်မာ။ ဖြိုးဝေ။ ပြီးတော့ ကျွန်တော်။",
    p: "The other five strangers in front of the dark zayat in thin moonlight, composed exactly "
      + "like the shot before it. ⚠️ EVERY ONE IS COMPLETE IN FRAME, SEPARATE AND LIT EXACTLY THE "
      + "SAME AS EVERY OTHER. ⚠️ NOBODY IS SINGLED OUT BY DISTANCE, FRAMING, LIGHT OR EXPRESSION "
      + "IN ANY WAY. ⚠️ EVERY FACE IS ORDINARY AND TIRED. ⚠️ THE GLASSES, THE BACKPACK, THE "
      + "BROAD SHOULDERS AND THE WOODEN PENDANT ARE ALL CLEARLY READABLE SO THAT EACH PERSON IS "
      + "IDENTIFIABLE. Cold flat light, colour drained.",
    u: ["သဇင်။", "ကိုထွန်းမြတ်။", "မေဇင်။", "ဒေါ်ခင်မာ။", "ဖြိုးဝေ။", "ပြီးတော့ ကျွန်တော်။"] },

  { t: "They All Look Like People", l: "ရွာလယ်ဇရပ်", k: "thiha", tm: "dark", w: ["သီဟ"],
    g: "သူတို့အားလုံးကို ကြည့်ရတာ သာမန်လူတွေလိုပဲ။ အားလုံး ကြောက်နေကြတယ်။ အားလုံး အိမ်ပြန်ချင်နေကြတယ်။",
    p: "Close on Thiha in thin moonlight, ⚠️ HIS EYES DIRECTED OFF CENTRE AT ONE "
      + "PERSON PAST CAMERA, the head square and only the eyes turned. ⚠️ HIS MOUTH IS SHUT AND HIS FACE IS "
      + "DOING NOTHING. ⚠️ THE SHARD IS STILL IN ONE HAND, LOW AND OUT OF FOCUS. ⚠️ THE SMALL "
      + "PALE SCAR ABOVE HIS LEFT EYEBROW IS VISIBLE. ⚠️ HE IS ALONE IN FRAME. Cold flat light, "
      + "black behind him.",
    u: ["သူတို့အားလုံးကို ကြည့်ရတာ သာမန်လူတွေလိုပဲ။", "အားလုံး ကြောက်နေကြတယ်။",
      "အားလုံး ပင်ပန်းနေကြတယ်။", "အားလုံး အိမ်ပြန်ချင်နေကြတယ်။"] },

  { t: "Or Was It Min Khant", l: "ရွာလယ်ဇရပ်", k: "ground", tm: "dark", loss: true,
    w: ["ရွာလယ်ဇရပ်"],
    g: "⚠️ ဒီလူတွေထဲမှာ လူမဟုတ်တဲ့သူ တစ်ယောက်ရှိနေတာလား? **ဒါမှမဟုတ်… မင်းခန့်ကပဲ လူမဟုတ်တဲ့သူလား?**",
    p: "A few inches above the bare earth in thin moonlight, level along it, holding the empty "
      + "red jacket lying flat and crumpled on the ground. ⚠️ IT IS THE ONLY STRONG COLOUR IN A "
      + "FRAME OTHERWISE DRAINED TO BLUE-GREY. ⚠️ THE SLEEVES ARE SPREAD AND THE COLLAR IS "
      + "TURNED AND THERE IS NOBODY IN IT. ⚠️ THE EARTH AROUND IT IS DRY, FIRM AND COMPLETELY "
      + "UNMARKED. ⚠️ NO BODY AND NO PERSON IS ANYWHERE IN THE PICTURE. Heavy grain.",
    u: ["ဒါပေမယ့်…", "ဒီလူတွေထဲမှာ လူမဟုတ်တဲ့သူ တစ်ယောက်ရှိနေတာလား?", "ဒါမှမဟုတ်…",
      "မင်းခန့်ကပဲ လူမဟုတ်တဲ့သူလား?", "ကျွန်တော် ဘာမှမသိတော့ဘူး။"] },

  { t: "The First Game Is Over", l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "dark", puppet: true,
    w: ["ရုပ်သေး"],
    g: "⚠️ **“ပထမပွဲ ပြီးဆုံးပါပြီ… ဒုတိယပွဲအတွက် ပြင်ဆင်ကြပါ…”**",
    p: "The black marionette on the stool in almost total darkness, close, ⚠️ ONLY A THIN WASH OF "
      + "MOONLIGHT CATCHING ONE EDGE OF IT — the line of one shoulder, the point of the headdress "
      + "and the curve of one hanging hand. ⚠️ ITS HEAD IS TILTED BACK AND UP. ⚠️ THE CARVED FACE "
      + "IS NOT VISIBLE AT ALL. ⚠️ THE REST IS FLAT BLACK AGAINST FLAT BLACK. ⚠️ ONE STRING "
      + "CATCHES THE LIGHT AS A FINE PALE LINE RUNNING UP OUT OF FRAME. Colour gone.",
    u: ["အဲဒီအချိန်မှာပဲ ဇရပ်ပေါ်က ရုပ်သေးရဲ့ခေါင်းဟာ ဖြည်းဖြည်းချင်း မြှောက်လာတယ်။",
      "အမှောင်ထဲကနေ သူ့အသံ ထွက်လာတယ်။", "“ပထမပွဲ ပြီးဆုံးပါပြီ…”",
      "“ဒုတိယပွဲအတွက် ပြင်ဆင်ကြပါ…”"] },

  { t: "Close Your Eyes", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "insert", tm: "dark", w: ["မျက်စိပိတ်ပဝါ"],
    g: "⚠️ **“နောက်တစ်ပွဲမှာ… မျက်စိပိတ်ရမယ်…”**",
    p: "Tight on a strip of dark indigo cotton cloth lying coiled on the dark plank floor of the "
      + "zayat platform in thin moonlight, filling the frame. ⚠️ THE COARSE WEAVE AND THE UNEVEN "
      + "FADED DYE ALONG THE FOLDS ARE JUST READABLE IN THE COLD LIGHT. ⚠️ BOTH CUT ENDS ARE "
      + "FRAYED INTO LOOSE THREADS. ⚠️ IT WAS NOT THERE BEFORE AND NOTHING IS TOUCHING IT. ⚠️ THE "
      + "PLANKS AROUND IT ARE BARE. ⚠️ NOBODY IS IN THE PICTURE. Colour almost entirely gone.",
    u: ["ပြီးတော့ ရုပ်သေးက ခဏရပ်တယ်။", "“နောက်တစ်ပွဲမှာ…”", "“မျက်စိပိတ်ရမယ်…”"] },

  { t: "Don't Trust Any Voice", l: "ရွာလယ်ဇရပ်", k: "face", tm: "dark", puppet: true,
    w: ["ရုပ်သေး"],
    g: "⚠️ **“ဒါပေမယ့် မင်းတို့ကြားရမယ့်အသံတိုင်းကို မယုံကြနဲ့…”**",
    p: "The carved face of the black marionette in almost total darkness, filling the frame. ⚠️ "
      + "ALMOST NONE OF IT RESOLVES — only the faintest grey edge along one cheekbone and the "
      + "line of the jaw separate themselves from the black. ⚠️ THE CARVED EYES AND MOUTH ARE "
      + "NOT VISIBLE AT ALL. ⚠️ THE FACE HAS NOT MOVED AND IS STILL WOOD. ⚠️ THERE IS NOTHING "
      + "ELSE IN THE PICTURE AND NO LIGHT SOURCE ANYWHERE. Heavy grain, colour entirely gone.",
    u: ["သူ့ပါးစပ်မလှုပ်ပေမယ့် ရယ်သံသဲ့သဲ့ ထွက်လာတယ်။",
      "“ဒါပေမယ့် မင်းတို့ကြားရမယ့်အသံတိုင်းကို မယုံကြနဲ့…”",
      "ခေါင်းလောင်းသံတစ်ချက် မြည်လာတယ်။"] },

  { t: "A Child Laughing in the Grove", l: "ဝါးတော", k: "wide", tm: "dark", w: ["ဝါးတော"],
    g: "ရွာအနောက်ဘက် ဝါးတောထဲကနေ ကလေးတစ်ယောက်ရဲ့ ရယ်သံ ကြားလိုက်ရတယ်။ ဘာမှမမြင်ရဘူး။",
    p: "Wide along the narrow earth path running into the bamboo grove in almost total darkness. "
      + "⚠️ TALL CLOSE-PACKED BAMBOO LEANS OVER THE PATH FROM BOTH SIDES AND CLOSES IT IN "
      + "OVERHEAD, the leaves black against a faintly lighter sky. ⚠️ THE PATH RUNS AWAY FROM "
      + "CAMERA AND LOSES ITSELF IN BLACK AFTER A FEW METRES. ⚠️ THE GROUND IS BARE AND "
      + "UNMARKED. ⚠️ THERE IS NOBODY AND NOTHING IN THE PICTURE. Colour gone, heavy grain.",
    u: ["ရွာအနောက်ဘက် ဝါးတောထဲကနေ ကလေးတစ်ယောက်ရဲ့ ရယ်သံ ကြားလိုက်ရတယ်။",
      "ကျွန်တော် အဲဒီဘက်ကို လှည့်ကြည့်လိုက်တယ်။", "ဘာမှမမြင်ရဘူး။"] },

  { t: "Ko Thiha", l: "ရွာလယ်ဇရပ်", k: "thiha", tm: "dark", w: ["သီဟ"],
    g: "⚠️ **“အစ်ကိုသီဟ…”** — ဒီအသံ… ကျွန်တော် သိတယ်။",
    p: "Close on Thiha in thin moonlight, ⚠️ HIS HEAD TURNED SHARPLY TOWARDS THE DARK GROVE AND "
      + "HIS WHOLE BODY GONE RIGID. ⚠️ HIS EYES ARE ENORMOUS AND HIS MOUTH HAS COME OPEN. ⚠️ THE "
      + "SHARD HAS FALLEN OUT OF HIS HAND AND IS GONE FROM THE FRAME. ⚠️ THE SKIN ALONG HIS JAW "
      + "AND NECK HAS COME UP IN FINE RAISED GOOSEFLESH. ⚠️ HE IS ALONE IN THE PICTURE AND THE "
      + "DARK BEHIND HIM IS COMPLETELY EMPTY. Cold blue-grey light, colour drained.",
    u: ["ဒါပေမယ့် အဲဒီရယ်သံနောက်မှာ မိန်းကလေးအသံသေးသေးလေးတစ်သံ ထပ်ကြားလိုက်ရတယ်။",
      "“အစ်ကိုသီဟ…”", "ကျွန်တော့်ရင်ထဲ ဒိန်းခနဲဖြစ်သွားတယ်။", "ဒီအသံ…", "ကျွန်တော် သိတယ်။"] },

  { t: "My Sister's Voice", l: "ဝါးတော", k: "ground", tm: "dark", w: ["ဝါးတော"],
    g: "⚠️ ကျွန်တော့်ညီမလေး မေခရဲ့အသံ။ သူ သေသွားတာ ရှစ်နှစ်ရှိပြီ။",
    p: "A few inches above the bare earth of the path at the mouth of the bamboo grove in almost "
      + "total darkness, level along it. ⚠️ THE PATH RUNS AWAY FROM CAMERA INTO FLAT BLACK. ⚠️ "
      + "THE EARTH IS SMOOTH, DRY AND COMPLETELY UNMARKED — no footprint of any size anywhere on "
      + "it. ⚠️ TALL BAMBOO STEMS CLOSE IN FROM BOTH SIDES. ⚠️ THERE IS NOBODY AND NOTHING "
      + "STANDING IN THE PICTURE. ⚠️ NOTHING IS MOVING. Colour entirely gone, very heavy grain.",
    u: ["ကျွန်တော့်ညီမလေး မေခရဲ့အသံ။", "သူ သေသွားတာ ရှစ်နှစ်ရှိပြီ။", "ဒါပေမယ့် ဒီည…",
      "ကျွန်တော် သူ့အသံကို ပြန်ကြားနေရတယ်။"] },

  { t: "Don't Leave Me This Time", c: [[1, "bigstinger"]], l: "ဝါးတော", k: "behind", tm: "dark", w: ["သီဟ", "ဝါးတော"],
    g: "⚠️ **နိဂုံး — “အစ်ကို… ဒီတစ်ခါတော့ သမီးကို မထားခဲ့ပါနဲ့…”**",
    p: "From behind Thiha at standing height at the mouth of the bamboo grove, the back of his "
      + "head and shoulders filling the lower frame in thin moonlight. ⚠️ HE IS FACING STRAIGHT "
      + "INTO THE GROVE AND HAS NOT TURNED. ⚠️ THE PATH IN FRONT OF HIM RUNS AWAY INTO ABSOLUTE "
      + "BLACK AFTER A COUPLE OF METRES AND NOTHING IN THAT BLACK RESOLVES INTO ANYTHING AT ALL. "
      + "⚠️ NOBODY AND NOTHING IS STANDING ANYWHERE IN THE PICTURE. ⚠️ THE EARTH BETWEEN HIM AND "
      + "THE DARK IS BARE AND UNMARKED.",
    u: ["ပြီးတော့—", "“အစ်ကို… ဒီတစ်ခါတော့ သမီးကို မထားခဲ့ပါနဲ့…”"] },

];

/**
 * Burmese units under about fourteen characters come back from TTS
 * mispronounced or as nothing at all, so a fragment is folded into the line it
 * introduces; the pause comes from the beat between units instead.
 */
const MIN_UNIT = 14;
SCENES.forEach((s) => {
  const out = [];
  for (const u of s.u) {
    if (out.length && out[out.length - 1].length < MIN_UNIT) out[out.length - 1] += " " + u;
    else out.push(u);
  }
  while (out.length > 1 && out[out.length - 1].length < MIN_UNIT) out[out.length - 2] += " " + out.pop();
  s.u = out;
});

SCENES.forEach((s) => {
  s.cam = CAM2[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = TIME[s.tm || "lamp"];
  if (!s.time) throw new Error(`shot "${s.t}" has no time for tm="${s.tm}"`);

  let cont = CONT;
  if (s.pots) cont += CONT_POTS;
  if (s.puppet) cont += CONT_PUPPET;
  if (s.loss) cont += CONT_LOSS;
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
