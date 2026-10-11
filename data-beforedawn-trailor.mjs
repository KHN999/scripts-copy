/**
 * မိုးမလင်းခင် — BEFORE DAWN. SEASON 1 TRAILER. 29 shots, ~1:50.
 *
 * ⚠️ THIS IS A TRAILER AND IT IS CUT LIKE ONE. The three-lines-per-shot rule
 * is for an episode, where a picture has to hold while narration runs under it.
 * A trailer does the opposite: it accelerates. This board runs 1.38 units a
 * shot — two lines a picture while the premise is being laid down, ONE line a
 * picture through the secrets montage and the end cards, where the cutting
 * itself is the effect. ⚠️ THE AUDIT WILL CALL THIS TOO FRAGMENTED. On this
 * board only, that reading is wrong.
 *
 * ⚠️ IT WILL ALSO FAIL THE CUE BUDGET AT 59% CUED. The 40% ceiling stops
 * a thirteen-minute film from exhausting an audience. A ninety-second trailer
 * IS a cue track. The ceiling that still matters is the big stingers — five of
 * them, on the hook, the terms, the turn, the title and the last line — and
 * never more than three cued shots in a row.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * FOUR RULES THIS TRAILER IS BUILT ON.
 *
 * 1. ⚠️ IT PROMISES AND NEVER PAYS. Nothing here is answered: not who is
 *    behind the puppet, not why these twelve, not what happens at dawn. Every
 *    shot that looks like a reveal is a door closing.
 *
 * 2. ⚠️ NOBODY DIES ON SCREEN. A trailer that shows a death has spent the
 *    series. Loss is shown as ABSENCE — a pot in pieces with nobody near it,
 *    an empty stool at a table laid for ten, a gap in a line of people.
 *
 * 3. ⚠️ THE SECRET IS NOT HINTED AT ONCE. One of the twelve is not a person.
 *    No shot in this trailer frames anybody apart, lights anybody differently,
 *    or holds on one face a beat longer. All twelve are ordinary all the way
 *    through. See the header of refs-beforedawn.mjs.
 *
 * 4. ⚠️ THE PUPPET IS RATIONED. It appears five times and is never once shown
 *    whole and evenly lit: an edge in the dark, the carved face, the stool, a
 *    silhouette, and the title frame with half of it lost. Spend it here and
 *    episode 1 has nothing to open with.
 */
import { CAST, PROPS, LOCS, CAM, TIME, CONT, CONT_PUPPET, STYLE }
  from "./refs-beforedawn.mjs";

export { CAST, PROPS, LOCS };

/** The project title in the lab. */
export const TITLE = "မိုးမလင်းခင် — Trailer";

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "I · မိနစ်သုံးဆယ်",
  4: "II · ဘယ်လိုရောက်လာမှန်း မသိဘူး",
  8: "III · အကြွေးခြောက်ခု",
  14: "IV · သူတို့ သိနေတယ်",
  19: "V · ဘာလို့ ကျွန်တော်တို့လဲ",
  24: "VI · မိုးမလင်းခင်",
};

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  /* ── I · မိနစ်သုံးဆယ် ────────────────────────────────────────────────── */
  { t: "Thirty Minutes", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "dark",
    puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ **ဖွင့်ပုံ — “မိနစ်သုံးဆယ်အတွင်း အိုးတစ်လုံး မကွဲရင်… မင်းတို့အားလုံး သေရမယ်။”**",
    p: "The black marionette in almost total darkness, close. ⚠️ ONLY ONE THIN EDGE OF IT "
      + "RESOLVES — the line of a shoulder, the point of the headdress and the curve of one "
      + "hanging hand catching a wash of moonlight. ⚠️ THE CARVED FACE IS NOT VISIBLE AT ALL. ⚠️ "
      + "ONE STRING RUNS UP OUT OF FRAME AS A FINE PALE LINE. Everything else is flat black "
      + "against flat black. Colour gone, grain heavy.",
    u: ["“မိနစ်သုံးဆယ်အတွင်း အိုးတစ်လုံး မကွဲရင်… မင်းတို့အားလုံး သေရမယ်။”"] },

  { t: "Twelve of Us Went Still", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "group", tm: "lamp",
    w: ["ရွာလယ်ဇရပ်", "သီဟ", "နန္ဒာ", "ကိုဟန်ဇော်", "သက်မွန်", "ဦးဘဦး", "မင်းခန့်"],
    g: "လူဆယ့်နှစ်ယောက်လုံး ကြက်သေသေသွားကြတယ် — လက်ထဲမှာ အိုးတစ်လုံးစီ။",
    p: "Six of the strangers standing on the bare earth in front of the zayat, lit from the front "
      + "by the oil lamps along the platform edge. ⚠️ EVERY ONE OF THEM IS HOLDING A CLAY POT "
      + "AGAINST THEIR CHEST WITH BOTH ARMS. ⚠️ ALL OF THEM HAVE STOPPED MOVING AND ARE LOOKING "
      + "THE SAME WAY, past camera. ⚠️ EVERY FACE IS VISIBLE AND SEPARATE AND NOBODY IS LIT "
      + "DIFFERENTLY FROM ANYBODY ELSE. Warm orange on their faces, black behind them.",
    u: ["အဲဒီစကားကို ကြားလိုက်တဲ့အချိန်မှာ ကျွန်တော်တို့ လူဆယ့်နှစ်ယောက်လုံး ကြက်သေသေသွားကြတယ်။",
      "ဘာလို့လဲဆိုတော့ ခုနလေးတင်ပဲ ကိုယ့်လက်ထဲက မြေအိုး မကွဲအောင် ကာကွယ်ရမယ်လို့ ပြောထားခဲ့တာ။"] },

  { t: "Then Somebody's Pot Has to Break", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "hands",
    tm: "lamp", w: ["မြေအိုး", "သီဟ"],
    g: "⚠️ အသက်ရှင်ဖို့ တစ်ယောက်ယောက်ရဲ့အိုးကို ဖျက်ရတော့မှာလား။ ဒါဟာ ပထမဆုံးပွဲပဲ ရှိသေးတယ်။",
    p: "Close in on two hands wrapped round the belly of a clay pot, lit low and warm by lamps on "
      + "the ground. ⚠️ THE FINGERS ARE SPREAD WIDE AND PRESSED HARD INTO THE CLAY AND THE "
      + "KNUCKLES HAVE GONE PALE. ⚠️ THE REST OF THE BODY IS OUT OF FRAME. ⚠️ THE POT IS WHOLE AND "
      + "UNBROKEN. Behind the hands, far out of focus, the dim shapes of other pots standing on "
      + "bare earth.",
    u: ["ဒါဆို… အသက်ရှင်ဖို့အတွက် တစ်ယောက်ယောက်ရဲ့အိုးကို ဖျက်ရတော့မှာလား။",
      "ဒါပေမယ့် ဒါဟာ ပထမဆုံးပွဲပဲ ရှိသေးတယ်။"] },

  /* ── II · ဘယ်လိုရောက်လာမှန်း မသိဘူး ──────────────────────────────────── */
  { t: "Twelve Strangers", l: "ရွာအဝင်လမ်း", k: "group", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "ဖြိုးဝေ", "မေဇင်", "ရဲအောင်", "ဒေါ်ခင်မာ", "ထွန်းမြတ်", "သဇင်"],
    g: "တစ်ယောက်နဲ့တစ်ယောက် မသိကြတဲ့ လူစိမ်းတွေ။ တစ်ညမှာ ရွာတစ်ရွာထဲ ပိတ်မိနေခဲ့ကြတယ်။",
    p: "Six of the strangers standing apart from each other on the dirt road in open moonlight, "
      + "⚠️ SPREAD ACROSS THE WIDTH OF THE ROAD AT DIFFERENT DISTANCES AND NOT ONE OF THEM "
      + "TOUCHING OR FACING ANOTHER. ⚠️ EVERY ONE IS COMPLETE IN FRAME AND SEPARATE. ⚠️ MODERN "
      + "CLOTHES AGAINST AN OLD VILLAGE — the red delivery jacket is the brightest thing in the "
      + "picture. The weathered name-board and the bamboo fencing behind them. Cold blue-grey "
      + "light, hard black shadows.",
    u: ["ကျွန်တော်တို့ လူဆယ့်နှစ်ယောက်ဟာ တစ်ယောက်နဲ့တစ်ယောက် မသိကြတဲ့ လူစိမ်းတွေပါ။",
      "တစ်ညမှာတော့ ဘယ်လိုရောက်လာမှန်းမသိဘဲ ရှေးဟောင်းမြန်မာရွာကြီးတစ်ရွာထဲမှာ ပိတ်မိနေခဲ့ကြတယ်။"] },

  { t: "Nobody Lives Here", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "wide", tm: "lamp",
    w: ["ရွာလယ်ဇရပ်"],
    g: "ရွာထဲမှာ လူတစ်ယောက်မှ မရှိဘူး။ ဘယ်လမ်းကပဲ ထွက်ထွက် ဒီရွာကိုပဲ ပြန်ရောက်နေတယ်။",
    p: "Wide on the zayat and the open ground in front of it, lit by the oil lamps along the "
      + "platform edge. ⚠️ EVERY LAMP IS BURNING AND THE PLATFORM IS SWEPT AND READY. ⚠️ THE "
      + "WHOLE PLACE IS COMPLETELY EMPTY OF PEOPLE. ⚠️ THE BARE EARTH IN FRONT OF IT IS UNMARKED "
      + "AND NOTHING HAS BEEN WALKED ON. The banyan beside it, the teak posts, the tiered roof. "
      + "Warm pools of light falling off fast into black.",
    u: ["ရွာထဲမှာ လူတစ်ယောက်မှ မရှိဘူး။", "ဘယ်လမ်းကပဲ ထွက်ထွက် ဒီရွာကိုပဲ ပြန်ရောက်နေတယ်။"] },

  { t: "In the Zayat We Found It", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "face", tm: "lamp",
    puppet: true, w: ["ရုပ်သေး"],
    g: "ရွာလယ်ဇရပ်ထဲမှာ အနက်ရောင် ရုပ်သေးရုပ်တစ်ရုပ်။ သူက စကားတစ်ခွန်း ပြောခဲ့တယ်။",
    p: "The carved face of the black marionette filling the frame, square on, lit from below by "
      + "oil lamps. ⚠️ THE WOOD IS MATT BLACK WITH THE CHISEL MARKS VISIBLE ACROSS THE CHEEKS AND "
      + "BROW. ⚠️ THE EYES ARE TWO SHALLOW CARVED CURVES PAINTED OVER IN THE SAME BLACK — no "
      + "white, no glint, nothing wet. ⚠️ THE MOUTH IS A SHALLOW CLOSED CARVED LINE AND THE FACE "
      + "HAS NO EXPRESSION OF ANY KIND. Warm light raking up it, black behind.",
    u: ["ပြီးတော့ ရွာလယ်ဇရပ်ထဲမှာ အနက်ရောင် ရုပ်သေးရုပ်တစ်ရုပ်ကို တွေ့ခဲ့ကြတယ်။",
      "အဲဒီရုပ်သေးက ကျွန်တော်တို့ကို စကားတစ်ခွန်း ပြောခဲ့တယ်။"] },

  { t: "Six Debts Before Dawn", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "stool", tm: "lamp",
    puppet: true, w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ **“မိုးမလင်းခင်… အကြွေးခြောက်ခုကို ဆပ်ရမယ်။”**",
    p: "The black marionette seated on the low carved stool in the middle of the zayat platform, "
      + "lit by the oil lamps along the edge. ⚠️ IT IS PROPPED UPRIGHT WITH ITS LEGS HANGING OVER "
      + "THE FRONT OF THE STOOL AND ITS HANDS RESTING ON ITS OWN KNEES. ⚠️ THE STRINGS RUN UP OUT "
      + "OF THE TOP OF FRAME AND ARE SLACK. ⚠️ THE TEAK POSTS AND THE PLANK FLOOR AROUND IT ARE "
      + "SHARP AND THE SPACE BEYOND FALLS OFF TO BLACK. ⚠️ THERE IS NOBODY ELSE IN THE PICTURE.",
    u: ["“မိုးမလင်းခင်… အကြွေးခြောက်ခုကို ဆပ်ရမယ်။”"] },

  /* ── III · အကြွေးခြောက်ခု ───────────────────────────────────────────── */
  { t: "One Game for Each", l: "မြေအိုးကွင်း", k: "high", tm: "lamp", w: ["မြေအိုးကွင်း"],
    g: "အကြွေးတစ်ခုစီအတွက် ပွဲတစ်ပွဲ။ အနိုင်ရတဲ့သူက အသက်ရှင်မယ်။",
    p: "High above the pot ground looking down across it, lit by oil lamps set on the earth. ⚠️ "
      + "TWELVE IDENTICAL CLAY POTS STAND IN A WIDE EVENLY SPACED RING, every one upright, whole "
      + "and alone. ⚠️ THE RING IS PERFECT AND NOTHING HAS BEEN DISTURBED. ⚠️ LOOSE STONES AND "
      + "BROKEN BRICK LIE SCATTERED BETWEEN THEM. The ruined stupa at the far edge with its top "
      + "broken off. ⚠️ THERE IS NOBODY IN THE PICTURE.",
    u: ["အကြွေးတစ်ခုစီအတွက် ပွဲတစ်ပွဲ ကစားရမယ်။", "အနိုင်ရတဲ့သူက အသက်ရှင်မယ်။"] },

  { t: "And the Loser", c: [[1, "stinger"]], l: "မြေအိုးကွင်း", k: "insert", tm: "lamp",
    w: ["မြေအိုးကွင်း"],
    g: "⚠️ ရှုံးတဲ့သူကတော့… — **ကွဲနေတဲ့အိုးတစ်လုံး၊ ဘေးမှာ ဘယ်သူမှ မရှိ။**",
    p: "Tight and low on the bare earth where one of the pots in the ring was standing, lit by "
      + "lamps on the ground. ⚠️ THE POT IS IN PIECES — large curved shards of red-brown "
      + "earthenware lying flat and spread across the earth where it came down. ⚠️ A RING OF CLEAN "
      + "EARTH SHOWS WHERE IT HAD BEEN STANDING. ⚠️ THERE IS NOBODY IN THE PICTURE AND NOTHING "
      + "ELSE IN FRAME. ⚠️ THE TWO NEAREST POTS, FAR OUT OF FOCUS BEHIND, ARE STILL UPRIGHT.",
    u: ["ရှုံးတဲ့သူကတော့…"] },

  { t: "Not Games You Know", l: "ဆွမ်းစားဆောင်", k: "wide", tm: "lamp", w: ["ဆွမ်းစားဆောင်"],
    g: "ဒီပွဲတွေက ကျွန်တော်တို့ သိထားတဲ့ ကစားနည်းတွေလို မဟုတ်ဘူး။",
    p: "Wide down the long teak table in the refectory from one end, lit only by the oil lamps "
      + "standing along its centre. ⚠️ TEN PLAIN WOODEN STOOLS ARE SET EVENLY ALONG IT AND EVERY "
      + "ONE OF THEM IS EMPTY. ⚠️ THE TABLE IS LAID AND NOBODY HAS SAT DOWN. ⚠️ THE DARK TEAK "
      + "WALLS ARE SHARP IN THE LAMPLIGHT AND BOTH ENDS OF THE ROOM FALL AWAY TO BLACK. The "
      + "shuttered openings along one side are closed.",
    u: ["ဒါပေမယ့် ဒီပွဲတွေက ကျွန်တော်တို့ သိထားတဲ့ ကစားနည်းတွေလို မဟုတ်ဘူး။"] },

  { t: "Sometimes You Survive Together", l: "ရွာလယ်ဇရပ်", k: "group", tm: "lamp",
    w: ["ရွာလယ်ဇရပ်", "နန္ဒာ", "သက်မွန်", "ဖြိုးဝေ", "ဦးဘဦး"],
    g: "တစ်ခါတလေ အားလုံးပူးပေါင်းမှ အသက်ရှင်နိုင်မယ်။",
    p: "Four of the strangers standing close together in a tight knot on the bare earth before "
      + "the zayat, lit from the front by the lamps. ⚠️ THEIR SHOULDERS ARE ALMOST TOUCHING AND "
      + "ALL FOUR ARE FACING THE SAME WAY, OUTWARD, past camera. ⚠️ EVERY FACE IS VISIBLE AND "
      + "SEPARATE. ⚠️ ONE HAS A HAND CLOSED ROUND ANOTHER'S FOREARM. Warm orange on them, deep "
      + "black beyond.",
    u: ["တစ်ခါတလေ အားလုံးပူးပေါင်းမှ အသက်ရှင်နိုင်မယ်။"] },

  { t: "Sometimes You Betray Them", c: [[1, "stinger"]], l: "ဝါးတော", k: "two", tm: "dark",
    w: ["ထွန်းမြတ်", "ရဲအောင်"],
    g: "⚠️ တစ်ခါတလေ ကိုယ်ယုံကြည်ရဆုံးလူကို ကိုယ့်လက်နဲ့ သစ္စာဖောက်ရမယ်။",
    p: "Two of the men facing each other in profile on the narrow path in the bamboo grove in "
      + "almost total darkness, ⚠️ THIN MOONLIGHT CATCHING ONE EDGE OF EACH FACE AND NOTHING ELSE. "
      + "⚠️ THEY ARE VERY CLOSE AND NEITHER IS TOUCHING THE OTHER. ⚠️ BOTH ARE COMPLETELY STILL "
      + "AND BOTH ARE LOOKING AT EACH OTHER. ⚠️ THE PATH AND THE BAMBOO AROUND THEM ARE BLACK. "
      + "Colour almost gone.",
    u: ["တစ်ခါတလေ ကိုယ်ယုံကြည်ရဆုံးလူကို ကိုယ့်လက်နဲ့ သစ္စာဖောက်ရမယ်။"] },

  { t: "Sometimes You Choose", c: [[1, "stinger"]], l: "ဆွမ်းစားဆောင်", k: "face", tm: "lamp",
    w: ["သက်မွန်"],
    g: "⚠️ တစ်ခါတလေ ကိုယ့်အသက်နဲ့ ကိုယ့်မိသားစုရဲ့အသက်ကိုတောင် ရွေးချယ်ရမယ်။",
    p: "Close on Thet Mon seated at the long table, lit from below and one side by the oil lamps "
      + "down its centre. ⚠️ SHE IS LOOKING STRAIGHT AT THE LENS AND HER EYES ARE WIDE AND WET "
      + "AND SHE IS NOT BLINKING. ⚠️ HER MOUTH IS SHUT HARD. ⚠️ ONE HAND IS FLAT ON THE TABLE IN "
      + "FRONT OF HER AND THE SILVER BANGLE HAS SLID DOWN HER WRIST. The maroon blouse, the hair "
      + "in its round knot. Black behind her.",
    u: ["တစ်ခါတလေ ကိုယ့်အသက်နဲ့ ကိုယ့်မိသားစုရဲ့အသက်ကိုတောင် ရွေးချယ်ရမယ်။"] },

  /* ── IV · သူတို့ သိနေတယ် ─────────────────────────────────────────────── */
  { t: "And the Worst of It", l: "ဝါးတော", k: "wide", tm: "dark", w: ["ဝါးတော"],
    g: "အဆိုးဆုံးကတော့ — ဒီပွဲတွေဟာ ကျွန်တော်တို့ရဲ့ အတိတ်က လျှို့ဝှက်ချက်တွေကိုပါ သိနေတယ်။",
    p: "Wide along the narrow earth path running into the bamboo grove in almost total darkness. "
      + "⚠️ TALL CLOSE-PACKED BAMBOO LEANS OVER THE PATH FROM BOTH SIDES AND CLOSES IT IN "
      + "OVERHEAD, the leaves black against a faintly lighter sky. ⚠️ THE PATH RUNS AWAY FROM "
      + "CAMERA AND LOSES ITSELF IN BLACK. ⚠️ THE GROUND IS BARE AND UNMARKED AND THERE IS NOBODY "
      + "IN THE PICTURE. The ruined well-head half visible beside the path.",
    u: ["အဆိုးဆုံးကတော့…", "ဒီပွဲတွေဟာ ကျွန်တော်တို့ရဲ့ အတိတ်က လျှို့ဝှက်ချက်တွေကိုပါ သိနေတယ်။"] },

  { t: "Voices of the Dead", c: [[1, "stinger"]], l: "ဝါးတော", k: "behind", tm: "dark",
    w: ["မျက်စိပိတ်ပဝါ", "သဇင်"],
    g: "⚠️ **သေပြီးသားလူတွေရဲ့ အသံတွေ။**",
    p: "From behind Thazin at standing height on the path in the bamboo grove, the back of her "
      + "head and shoulders filling the lower frame. ⚠️ THE DARK INDIGO CLOTH IS TIED ROUND HER "
      + "HEAD AS A BLINDFOLD AND THE KNOT AND THE FRAYED ENDS HANG DOWN THE BACK OF HER NECK. ⚠️ "
      + "HER HEAD IS TURNED SHARPLY TO ONE SIDE, LISTENING. ⚠️ THE GROVE IN FRONT OF HER IS "
      + "ALMOST ENTIRELY BLACK AND NOTHING IS STANDING IN IT. Colour gone.",
    u: ["သေပြီးသားလူတွေရဲ့ အသံတွေ။"] },

  { t: "Sins Never Told", c: [[1, "stinger"]], l: "လက်ဖက်ရည်ဆိုင်", k: "insert", tm: "lamp",
    w: ["လက်ဖက်ရည်ခွက်"],
    g: "⚠️ **ဘယ်သူ့ကိုမှ မပြောပြခဲ့ဖူးတဲ့ အပြစ်တွေ။**",
    p: "Tight on a single glass teashop cup standing alone on a dark wooden table in the old "
      + "teashop, lit dimly by one oil lamp from the side. ⚠️ IT HOLDS MILKY ORANGE-BROWN TEA "
      + "ABOUT TWO THIRDS FULL AND THE SURFACE OF IT IS PERFECTLY STILL. ⚠️ THE TABLE AROUND IT "
      + "IS BARE AND RINGED WITH OLD CUP MARKS. ⚠️ THERE IS NOBODY IN THE PICTURE. Shallow focus, "
      + "the room behind falling away to black.",
    u: ["ဘယ်သူ့ကိုမှ မပြောပြခဲ့ဖူးတဲ့ အပြစ်တွေ။"] },

  { t: "Things You Forgot Yourself", c: [[1, "stinger"]], l: "ရွာပွဲခင်း", k: "wide", tm: "lantern",
    w: ["ရွာပွဲခင်း"],
    g: "⚠️ **ကိုယ်တိုင်တောင် မေ့နေခဲ့တဲ့ အဖြစ်အပျက်တွေ။**",
    p: "Wide along the festival ground under the strung paper lanterns. ⚠️ TALL GOLD CEREMONIAL "
      + "UMBRELLAS STAND IN TWO ROWS FORMING A PROCESSION AVENUE RUNNING AWAY FROM CAMERA. ⚠️ THE "
      + "AVENUE BETWEEN THEM IS COMPLETELY EMPTY AND THE BARE EARTH DOWN IT IS UNMARKED. ⚠️ THE "
      + "DRUMS AND THE HSAING WAING STAND UNATTENDED TO ONE SIDE. ⚠️ EVERYTHING IS LIT AND FULLY "
      + "DRESSED AND READY AND THERE IS NOBODY IN THE PICTURE.",
    u: ["ကိုယ်တိုင်တောင် မေ့နေခဲ့တဲ့ အဖြစ်အပျက်တွေ။"] },

  { t: "We Knew More and Trusted Less", l: "ဆွမ်းစားဆောင်", k: "group", tm: "lamp",
    w: ["ဆွမ်းစားဆောင်", "သီဟ", "ကိုဟန်ဇော်", "မေဇင်", "ဒေါ်ခင်မာ"],
    g: "ပွဲတစ်ပွဲပြီးတိုင်း တစ်ယောက်အကြောင်းတစ်ယောက် ပိုသိလာကြတယ်။ ပိုပြီးလည်း မယုံကြည်နိုင်တော့ဘူး။",
    p: "Four of the strangers seated along one side of the long teak table, lit by the oil lamps "
      + "down its centre. ⚠️ THEY ARE SPACED WIDE APART WITH AN EMPTY STOOL BETWEEN TWO OF THEM. "
      + "⚠️ NOT ONE OF THEM IS LOOKING AT ANOTHER — every face is turned a different way. ⚠️ EVERY "
      + "FACE IS VISIBLE AND SEPARATE AND NOBODY IS LIT DIFFERENTLY. ⚠️ THE STOOLS ON THE FAR SIDE "
      + "OF THE TABLE ARE EMPTY. Black beyond the lamplight.",
    u: ["ပွဲတစ်ပွဲပြီးတိုင်း ကျွန်တော်တို့ဟာ တစ်ယောက်အကြောင်းတစ်ယောက် ပိုသိလာကြတယ်။",
      "တစ်ယောက်နဲ့တစ်ယောက်လည်း ပိုပြီး မယုံကြည်နိုင်တော့ဘူး။"] },

  /* ── V · ဘာလို့ ကျွန်တော်တို့လဲ ──────────────────────────────────────── */
  { t: "We Only Wanted Out", l: "ရွာတံခါးကြီး", k: "gate", tm: "moon", w: ["ရွာတံခါးကြီး"],
    g: "အစပိုင်းမှာ ဒီရွာကနေ အသက်ရှင်လျက် ထွက်သွားဖို့ပဲ စဉ်းစားနေခဲ့ကြတာ။ ဒါပေမယ့် မေးခွန်းတစ်ခု ပေါ်လာတယ်။",
    p: "Square on the great timber gate from inside the village in open moonlight, the whole "
      + "structure complete in frame. ⚠️ BOTH MASSIVE TEAK LEAVES ARE SHUT AND THE SINGLE HEAVY "
      + "TIMBER BAR LIES ACROSS THEM IN ITS IRON BRACKETS. ⚠️ THE BARE EARTH IN FRONT OF IT IS "
      + "EMPTY AND UNMARKED. ⚠️ THERE IS NOBODY IN THE PICTURE. Cold blue-grey light, the rusted "
      + "iron straps, the grey split wood, hard black shadows.",
    u: ["အစပိုင်းမှာတော့ ကျွန်တော်တို့အားလုံးက ဒီရွာကနေ အသက်ရှင်လျက် ထွက်သွားဖို့ပဲ စဉ်းစားနေခဲ့ကြတာ။",
      "ဒါပေမယ့် နောက်ပိုင်းမှာ မေးခွန်းတစ်ခု ပေါ်လာတယ်။"] },

  { t: "Why Us", c: [[1, "stinger"]], l: "ရွာအဝင်လမ်း", k: "group", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "သီဟ", "နန္ဒာ", "မင်းခန့်", "ရဲအောင်", "ဦးဘဦး", "ဖြိုးဝေ"],
    g: "⚠️ **ဘာလို့ လူဆယ့်နှစ်ယောက်ထဲက ကျွန်တော်တို့ကိုမှ ရွေးထားတာလဲ။**",
    p: "Six of the strangers standing in one loose line across the dirt road in open moonlight, "
      + "⚠️ ALL OF THEM FACING CAMERA SQUARE ON AND ALL OF THEM COMPLETELY STILL. ⚠️ EVERY FACE IS "
      + "VISIBLE, SEPARATE AND LIT EXACTLY THE SAME AS EVERY OTHER — no one closer, no one held "
      + "apart, no one in shadow. ⚠️ THEY ARE EVENLY SPACED. The name-board and the bamboo fencing "
      + "behind them. Cold blue-grey light, colour drained almost to monochrome.",
    u: ["ဘာလို့ လူဆယ့်နှစ်ယောက်ထဲက ကျွန်တော်တို့ကိုမှ ရွေးထားတာလဲ။"] },

  { t: "And Who Is Behind It", c: [[1, "stinger"]], l: "ရွာလယ်ဇရပ်", k: "stool", tm: "dark",
    puppet: true, w: ["ရုပ်သေး", "ရွာလယ်ဇရပ်"],
    g: "⚠️ ဒီပွဲတွေကို စီစဉ်နေတဲ့ ရုပ်သေးရုပ်ရဲ့ နောက်ကွယ်မှာ ဘယ်သူရှိနေတာလဲ။",
    p: "The low carved stool on the zayat platform at night with the lamps out, in almost total "
      + "darkness. ⚠️ THE MARIONETTE IS SITTING ON IT AS A BLACK SILHOUETTE AGAINST A FAINTLY "
      + "LIGHTER SKY BEYOND THE OPEN SIDE OF THE PAVILION — ⚠️ ONLY ITS OUTLINE READS: the "
      + "headdress, the shoulders, the hanging legs. ⚠️ NO DETAIL AND NO FACE RESOLVES AT ALL. ⚠️ "
      + "THE STRINGS ARE NOT VISIBLE. ⚠️ THE PLATFORM AROUND IT IS BARE AND THERE IS NOBODY IN THE "
      + "PICTURE. Colour gone.",
    u: ["ပြီးတော့ ဒီပွဲတွေကို စီစဉ်နေတဲ့ ရုပ်သေးရုပ်ရဲ့ နောက်ကွယ်မှာ ဘယ်သူရှိနေတာလဲ။"] },

  { t: "Worse Than Dying Here", l: "ရွာတံခါးကြီး", k: "behind", tm: "dawn", w: ["သီဟ"],
    g: "အဖြေတွေ သိလာတဲ့အချိန်မှာ — ဒီရွာထဲမှာ သေရမှာထက် ပိုကြောက်စရာကောင်းတဲ့ အရာတစ်ခု ရှိနေမှန်း နားလည်သွားခဲ့တယ်။",
    p: "From behind Thiha at standing height, the back of his head and shoulders filling the lower "
      + "frame and the shut timber gate beyond him in thin colourless first light. ⚠️ HE IS "
      + "STANDING COMPLETELY STILL AND FACING THE GATE AND HIS HEAD IS TIPPED BACK TO LOOK AT THE "
      + "TOP OF IT. ⚠️ THE SKY ABOVE THE GATE HAS BEGUN TO GO GREY. ⚠️ HE IS THE ONLY PERSON IN "
      + "THE PICTURE. Flat cold light, nothing warm anywhere in it.",
    u: ["အဲဒီအဖြေတွေကို ကျွန်တော်တို့ သိလာတဲ့အချိန်မှာတော့…",
      "ဒီရွာထဲမှာ သေရမှာထက် ပိုကြောက်စရာကောင်းတဲ့ အရာတစ်ခု ရှိနေမှန်း နားလည်သွားခဲ့ကြတယ်။"] },

  { t: "It Is the Morning", c: [[1, "bigstinger"]], l: "ရွာတံခါးကြီး", k: "gate", tm: "dawn",
    w: ["ရွာတံခါးကြီး"],
    g: "⚠️ **အဲဒါက… မနက်မိုးလင်းလာမှာပဲ။**",
    p: "Square on the great timber gate from inside the village in thin colourless first light, "
      + "the whole structure complete in frame. ⚠️ THE SKY ABOVE AND BEHIND THE GATE HAS GONE PALE "
      + "GREY AND IS PLAINLY LIGHTENING. ⚠️ BOTH LEAVES ARE STILL SHUT AND THE TIMBER BAR IS STILL "
      + "ACROSS THEM. ⚠️ A THIN LINE OF PALE LIGHT SHOWS IN THE GAP BETWEEN THE TWO LEAVES. ⚠️ THE "
      + "EARTH IN FRONT IS EMPTY. Flat cold light, everything legible, nothing warm anywhere.",
    u: ["အဲဒါက… မနက်မိုးလင်းလာမှာပဲ။"] },

  /* ── VI · မိုးမလင်းခင် ──────────────────────────────────────────────── */
  { t: "Twelve People", l: "ရွာအဝင်လမ်း", k: "group", tm: "moon",
    w: ["ရွာအဝင်လမ်း", "သက်မွန်", "သဇင်", "ထွန်းမြတ်", "မေဇင်", "ဒေါ်ခင်မာ", "ကိုဟန်ဇော်"],
    g: "လူဆယ့်နှစ်ယောက်။",
    p: "Six of the strangers standing in one tight line across the dirt road in open moonlight, "
      + "photographed from a little below so they stand against the sky. ⚠️ ALL OF THEM FACE "
      + "CAMERA AND ALL ARE COMPLETELY STILL. ⚠️ EVERY FACE IS VISIBLE, SEPARATE AND LIT THE SAME. "
      + "⚠️ THEY ARE EVENLY SPACED AND NONE OF THEM OVERLAPS ANOTHER. Cold blue-grey light, hard "
      + "black shadows, colour drained almost to monochrome.",
    u: ["လူဆယ့်နှစ်ယောက်။"] },

  { t: "Six Games of Life and Death", l: "မြေအိုးကွင်း", k: "high", tm: "lamp",
    w: ["မြေအိုးကွင်း"],
    g: "သေခြင်းရှင်ခြင်းပွဲ ခြောက်ပွဲ။",
    p: "High above the pot ground looking straight down on the ring of pots, lit by lamps on the "
      + "earth. ⚠️ SOME OF THE POTS IN THE RING ARE STILL UPRIGHT AND WHOLE AND OTHERS ARE IN "
      + "PIECES ON THE BARE EARTH WHERE THEY STOOD. ⚠️ THE GAPS IN THE RING ARE EVEN AND "
      + "DELIBERATE. ⚠️ THERE IS NOBODY IN THE PICTURE. Warm low light across the ground, black "
      + "beyond the ring.",
    u: ["သေခြင်းရှင်ခြင်းပွဲ ခြောက်ပွဲ။"] },

  { t: "One Buried Secret", l: "ရွာလယ်ဇရပ်", k: "insert", tm: "lamp", w: ["ပေစာဟောင်း"],
    g: "ဖုံးကွယ်ထားတဲ့ လျှို့ဝှက်ချက်တစ်ခု။",
    p: "Tight on the bundle of palm-leaf manuscript pages lying on the dark plank floor of the "
      + "zayat, lit from one side by a single oil lamp. ⚠️ THE TOP LEAF IS SLID PARTLY OUT AND "
      + "SHOWS LINES OF INCISED BURMESE SCRIPT BLACKENED WITH SOOT — ⚠️ THE WRITING STAYS SOFT, "
      + "WORN AND PARTLY RUBBED AWAY, READING AS MARKS RATHER THAN AS LEGIBLE WORDS. ⚠️ THE DARK "
      + "LACQUERED COVERS AND THE BINDING CORD ARE CLEAR. ⚠️ THERE IS NOBODY IN THE PICTURE. "
      + "Shallow focus, black beyond.",
    u: ["ဖုံးကွယ်ထားတဲ့ လျှို့ဝှက်ချက်တစ်ခု။"] },

  { t: "Before Dawn", c: [[1, "bigstinger"]], l: "ရွာလယ်ဇရပ်", k: "puppet", tm: "lamp",
    puppet: true, w: ["ရုပ်သေး"],
    g: "⚠️ **မြန်မာ့ရိုးရာ သဘာဝလွန် သည်းထိတ်ရင်ဖို ဇာတ်လမ်းတွဲအသစ် — “မိုးမလင်းခင်”**",
    p: "⚠️ THE TITLE FRAME. The black marionette hanging whole from its control bar, shown head to "
      + "foot dead centre of frame against the deep black of the zayat at night, ⚠️ LIT BY A "
      + "SINGLE OIL LAMP LOW AND TO ONE SIDE SO THAT ONE HALF OF IT IS WARM AND CARVED AND THE "
      + "OTHER HALF IS LOST. ⚠️ THE STRINGS ARE TAUT AND RUN UP OUT OF THE TOP OF FRAME. ⚠️ ITS "
      + "LIMBS HANG STRAIGHT AND IT IS PLAINLY A CARVED WOODEN OBJECT. ⚠️ A WIDE EMPTY BLACK "
      + "MARGIN ALL AROUND IT.",
    u: ["မြန်မာ့ရိုးရာ သဘာဝလွန် သည်းထိတ်ရင်ဖို ဇာတ်လမ်းတွဲအသစ်…", "“မိုးမလင်းခင်”"] },

  { t: "When It Is Light the Door Opens", l: "ရွာတံခါးကြီး", k: "gate", tm: "dawn",
    w: ["ရွာတံခါးကြီး"],
    g: "⚠️ **မိုးလင်းရင် တံခါးဖွင့်မယ်။**",
    p: "Square on the great timber gate from inside the village in thin first light. ⚠️ THE "
      + "TIMBER BAR HAS BEEN LIFTED OUT OF ITS BRACKETS AND IS LEANING AGAINST ONE POST. ⚠️ THE "
      + "TWO LEAVES HAVE COME APART BY A HAND'S WIDTH AND A NARROW BAND OF FLAT GREY LIGHT SHOWS "
      + "BETWEEN THEM. ⚠️ NOTHING BEYOND THE GAP RESOLVES — it reads as pale empty light and no "
      + "landscape. ⚠️ THE EARTH IN FRONT IS EMPTY AND THERE IS NOBODY IN THE PICTURE.",
    u: ["မိုးလင်းရင် တံခါးဖွင့်မယ်။"] },

  { t: "But Not All of You Get Out", c: [[1, "bigstinger"]], l: "ရွာတံခါးကြီး", k: "feet",
    tm: "dawn", w: ["ရွာတံခါးကြီး"],
    g: "⚠️ **နိဂုံး — ဒါပေမယ့်… မင်းတို့အားလုံး ထွက်လို့မရဘူး။**",
    p: "A few inches above the bare earth just inside the gate in thin colourless first light, "
      + "level along the ground towards the gap between the two opened leaves. ⚠️ ONE SET OF BARE "
      + "FOOTPRINTS LEADS AWAY FROM CAMERA AND OUT THROUGH THE GAP. ⚠️ MANY MORE SETS OF PRINTS "
      + "COME UP TO A LINE SHORT OF THE GATE AND STOP THERE, and none of them goes through. ⚠️ THE "
      + "EARTH BEYOND THAT LINE IS SMOOTH AND UNMARKED. ⚠️ THERE IS NOBODY IN THE PICTURE. Flat "
      + "cold light, long low shadows in every print.",
    u: ["ဒါပေမယ့်… မင်းတို့အားလုံး ထွက်လို့မရဘူး။"] },
];

/**
 * Burmese units under about fourteen characters come back from TTS
 * mispronounced or as nothing at all, so a fragment is folded into the line it
 * introduces. ⚠️ A SHORT LINE THAT OPENS A SHOT SURVIVES ALONE — the merge only
 * ever looks backwards — which is what keeps the end cards as separate beats.
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
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot "${s.t}" has no camera for k="${s.k}"`);
  s.time = TIME[s.tm || "lamp"];
  if (!s.time) throw new Error(`shot "${s.t}" has no time for tm="${s.tm}"`);
  s.cont = CONT + (s.puppet ? CONT_PUPPET : "");
  s.style = STYLE;
});

export { CONT, STYLE };
