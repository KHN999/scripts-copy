/**
 * ၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * FIVE RULES. The first two are the whole film.
 *
 * 1. ONE FACE, TWO WOMEN. Thun (2026) and Ma Khin San (1987) have the SAME FACE
 *    and are not related. Everything else separates them — Thun has modern
 *    clothes and loose modern hair, Ma Khin San wears 1987 Burmese dress with her
 *    hair pinned. If a viewer cannot tell which woman they are looking at from
 *    the clothes and the film stock alone, the shot has failed.
 *
 * 2. TWO VISUAL REGISTERS, NEVER MIXED.
 *      REAL   — clean modern digital photography, 2026 Yangon, neutral colour.
 *      AI/1987 — what the app returns: faded 1980s film, heavy grain, colour
 *               shifted warm-yellow, soft focus, and a burned-in orange date
 *               stamp in the lower right. Most are seen ON A PHONE SCREEN, held
 *               in frame, with the room reflected faintly in the glass.
 *    A shot is one register or the other. The horror lives in the seam.
 *
 * 3. ⚠️ THIS BOARD DELIBERATELY BREAKS THE NO-TEXT RULE — but only for dates.
 *    Every other film in this set forbids legible text because generators produce
 *    garbage lettering. Here the date stamp IS the plot: 17 OCT 1987 is the day
 *    before she vanished, and 17 OCT 2027 is on a hospital band at the end. Those
 *    shots name the exact string to render and nothing else. Everywhere else text
 *    is still banned, and UI is described as shape and glow, never as words.
 *
 * 4. THE FATHER IS NEVER RESOLVED. The man from 1987 is the threat and his face
 *    is never legible — in a doorway as a black silhouette, or visible only as a
 *    shape through a phone camera that the naked eye cannot see. No gore, no
 *    body: the floor under the boards holds a bag, not a corpse.
 *
 * 5. MA KHIN SAN IS NOT THE MONSTER. She is frightened in the early images and
 *    WARNING in the late ones. By the end she is pointing, shaking her head,
 *    steering Thun out of the building. Never menacing, never decayed.
 */

export const CAST = [
  { name: "သွန်း", en: "Thun — twenty-five, Yangon, 2026",
    prompt: "A Burmese woman of twenty-five with an open, ordinary face, hair worn long and loose, a "
      + "plain modern t-shirt or blouse and jeans, a phone almost always in her hand. ⚠️ SHE SHARES "
      + "HER FACE EXACTLY WITH MA KHIN SAN and they are not related — modern clothes, modern loose "
      + "hair and clean digital photography are the only things that tell them apart." },
  { name: "မခင်စန်း", en: "Ma Khin San — the same face, 1987",
    prompt: "A Burmese woman of about twenty-six with the SAME FACE as Thun, in 1987: a Burmese "
      + "blouse and htamein of the period, hair pinned back neatly, no makeup. ⚠️ She appears ONLY in "
      + "the faded-film AI register, never in clean modern photography. Frightened in the early "
      + "images; in the late ones she is WARNING — pointing, shaking her head, steering. Never "
      + "menacing, never injured, never decayed." },
  { name: "ကိုဇော်လင်း", en: "Ko Zaw Lin — her son, about forty",
    prompt: "A Burmese man approaching forty, tired and careful, a plain shirt, close-cropped hair "
      + "going grey at the temples. Carries himself like someone who has been looking for something "
      + "for thirty years." },
  { name: "အဖေ", en: "The father — the man from 1987, NEVER RESOLVED",
    prompt: "A Burmese man of about thirty in 1987 clothes, of ordinary build. ⚠️ HIS FACE IS NEVER "
      + "LEGIBLE IN ANY IMAGE — a black silhouette in a lit doorway, a shape at the edge of a frame, "
      + "or a figure visible only on a phone screen. Never lit, never in focus, never identifiable. "
      + "No blood, no injury, nothing monstrous: an ordinary man, and that is the point." },
  { name: "သူငယ်ချင်း", en: "The friend",
    prompt: "A Burmese woman of about twenty-five, practical and unbothered, modern clothes, the one "
      + "who says open it and see. Present only in the last act." },
];

export const LOCS = [
  { name: "သွန်းအခန်း", en: "Thun's apartment",
    prompt: "A small modern Yangon apartment bedroom: a bed, a laptop on a low desk, a mirror, a "
      + "window with the city outside, clothes over a chair, a ceiling light and the blue wash of a "
      + "phone screen at night. Ordinary, lived-in, entirely of 2026." },
  { name: "အိမ် ၄၂", en: "House No. 42 — shut for decades",
    prompt: "An old Yangon townhouse closed up for thirty years: peeling paint, a heavy wooden front "
      + "door, dust thick on every surface, furniture under sheets, daylight coming through shutter "
      + "slats in hard bars. Upstairs, bare floorboards." },
  { name: "၁၉၈၇လမ်း", en: "Yangon streets, 1987 — AI register only",
    prompt: "A Yangon street in 1987: low colonial shophouses, a teashop with low stools, period "
      + "signage shapes, few cars, warm streetlight. ⚠️ ALWAYS in the faded AI register — 1980s film "
      + "stock, heavy grain, yellowed colour, soft focus." },
  { name: "ဖုန်းဖန်သား", en: "The phone screen",
    prompt: "A phone held up in frame with an image filling its screen, the room faintly reflected in "
      + "the glass and slightly visible around the edges of the device. The photograph inside the "
      + "screen is in the faded AI register; the hand and the room around it are modern and clean." },
];

export const STYLE =
  "Yangon, Myanmar. Two registers that must never blend. THE PRESENT (2026): clean modern digital "
  + "photography, neutral colour, natural light, ordinary apartments and streets. THE AI IMAGES "
  + "(1987): faded 1980s film stock, heavy grain, yellow-shifted colour, soft focus, vignetting, and "
  + "a small burned-in orange date stamp in the lower right corner. Cinematic photorealism, shallow "
  + "depth of field, 16:9. ⚠️ Thun and Ma Khin San SHARE ONE FACE and are unrelated — period clothing, "
  + "pinned hair and the film register are what separate them. ⚠️ The man from 1987 is NEVER "
  + "resolved: silhouette, shadow or phone-screen only, never a legible face. ⚠️ NO TEXT ANYWHERE "
  + "EXCEPT the date stamps and labels a shot explicitly names — no captions, no watermarks, no "
  + "invented lettering, and phone interfaces are shape and glow, never readable words. No gore, no "
  + "body, nothing monstrous.";

export const SCENES = [
  { t: "The Trend", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "ရန်ကုန်မှာနေတဲ့ အသက် ၂၅ နှစ်အရွယ် သွန်း။ Social Media ကို နေ့တိုင်းသုံးတဲ့ သာမန်မိန်းကလေး။",
    p: "A young Burmese woman lying on her bed at night scrolling a phone, the screen lighting her "
      + "face, an ordinary modern bedroom around her.",
    u: ["ရန်ကုန်မှာနေတဲ့ အသက် ၂၅ နှစ်အရွယ် သွန်း ဟာ Social Media ကို နေ့တိုင်းသုံးတဲ့ သာမန်မိန်းကလေးတစ်ယောက်။",
        "တစ်ညမှာ Facebook နဲ့ TikTok တစ်ခုလုံးမှာ Trend တစ်ခု တက်လာတယ်။"] },

  { t: "If I Had Lived in the 1980s", l: "ဖုန်းဖန်သား",
    g: "လက်ရှိ Selfie ကို AI ထဲထည့်ပြီး “ငါသာ ၁၉၈၀ ပြည့်နှစ်တွေမှာ နေခဲ့ရင်” ဆိုတဲ့ ပုံတွေ ဖန်တီးကြတာ။",
    p: "A phone screen showing a grid of four AI-generated portraits of different people in 1980s "
      + "Burmese dress, all in faded film register, a modern thumb at the edge of the glass.",
    u: ["လက်ရှိ Selfie ကို AI ထဲထည့်ပြီး “ငါသာ ၁၉၈၀ ပြည့်နှစ်တွေမှာ နေခဲ့ရင်” ဆိုတဲ့ ပုံတွေ ဖန်တီးကြတာ။",
        "သူငယ်ချင်းတွေကလည်း Group Chat ထဲမှာ တစ်ယောက်ပြီးတစ်ယောက် ပုံတွေ ပို့နေကြတယ်။"] },

  { t: "You Do It Too", l: "ဖုန်းဖန်သား",
    g: "“သွန်း နင်လည်းလုပ်လေ” “နင့်မျက်နှာက 80s actress vibe ရတယ်”",
    p: "A phone screen full of chat bubbles rendered as coloured shapes only, no readable words, a "
      + "laughing emoji among them, held in a dim bedroom.",
    u: ["“သွန်း နင်လည်းလုပ်လေ”",
        "“နင့်မျက်နှာက 80s actress vibe ရတယ် 😂”"] },

  { t: "She Uploaded a Selfie", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်းလည်း အပျော်သဘောနဲ့ Selfie တစ်ပုံ Upload လုပ်လိုက်တယ်။ AI က ပုံလေးပုံ ထုတ်ပေးတယ်။",
    p: "A young woman holding her phone up at arm's length taking a selfie in her bedroom, "
      + "half-smiling, entirely casual.",
    u: ["သွန်းလည်း အပျော်သဘောနဲ့ Selfie တစ်ပုံ Upload လုပ်လိုက်တယ်။",
        "AI က ပုံလေးပုံ ထုတ်ပေးတယ်။"] },

  { t: "First Image — A 1980 Street", l: "၁၉၈၇လမ်း", w: ["သွန်း"],
    g: "ပထမပုံ — ၁၉၈၀ ခေတ် ရန်ကုန်လမ်းပေါ်မှာ သွန်း။",
    p: "⚠️ AI REGISTER. A woman with Thun's face standing on a 1980s Yangon street in period Burmese "
      + "dress, hair pinned, faded film stock, heavy grain, yellowed colour, small orange date stamp "
      + "in the lower right.",
    u: ["ပထမပုံ—",
        "၁၉၈၀ ခေတ် ရန်ကုန်လမ်းပေါ်မှာ သွန်း။"] },

  { t: "Second Image — The Teashop", l: "၁၉၈၇လမ်း", w: ["သွန်း"],
    g: "ဒုတိယပုံ — အဟောင်းစား လက်ဖက်ရည်ဆိုင်ရှေ့မှာ သွန်း။",
    p: "⚠️ AI REGISTER. The same woman standing outside an old Yangon teashop with low stools and "
      + "kettles, 1980s film grain, warm yellow cast.",
    u: ["ဒုတိယပုံ—",
        "အဟောင်းစား လက်ဖက်ရည်ဆိုင်ရှေ့မှာ သွန်း။"] },

  { t: "Third Image — Studio Portrait", l: null, w: ["သွန်း"],
    g: "တတိယပုံ — မြန်မာဝတ်စုံနဲ့ Studio Portrait။ သွန်း သဘောကျသွားတယ်။",
    p: "⚠️ AI REGISTER. A formal 1980s Burmese studio portrait: the same woman in traditional dress "
      + "against a painted backdrop, stiff posed lighting, faded colour, rounded corners.",
    u: ["တတိယပုံ—",
        "မြန်မာဝတ်စုံနဲ့ Studio Portrait။ သွန်း သဘောကျသွားတယ်။"] },

  { t: "But the Fourth Was Wrong", l: null, w: ["သွန်း"],
    g: "ဒါပေမယ့် စတုတ္ထပုံက ထူးဆန်းနေတယ်။ အဲဒီပုံထဲမှာ သွန်းက မပြုံးဘူး။ ကင်မရာကို တည့်တည့်ကြည့်နေတယ်။",
    p: "⚠️ AI REGISTER. The same face, but NOT smiling — looking directly into the lens, expression "
      + "flat and afraid, faded 1980s film, grain heavy.",
    u: ["ဒါပေမယ့်—",
        "စတုတ္ထပုံက ထူးဆန်းနေတယ်။",
        "အဲဒီပုံထဲမှာ သွန်းက မပြုံးဘူး။ ကင်မရာကို တည့်တည့်ကြည့်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Her Eyes Looked Frightened", l: null, w: ["မခင်စန်း"],
    g: "မျက်နှာကတော့ သွန်းမျက်နှာပဲ။ ဒါပေမယ့် သူ့မျက်လုံးတွေက ကြောက်နေသလိုပဲ။",
    p: "⚠️ AI REGISTER. Extreme close-up of the woman's eyes in the faded photograph — the face is "
      + "Thun's exactly, but the fear in the eyes belongs to someone else.",
    u: ["မျက်နှာကတော့ သွန်းမျက်နှာပဲ။",
        "ဒါပေမယ့် သူ့မျက်လုံးတွေက—",
        "ကြောက်နေသလိုပဲ။"],
    c: [[2, "bigstinger"]] },

  { t: "17 OCT 1987", l: null,
    g: "ပုံအောက်ထောင့်မှာ Date Stamp တစ်ခုပါနေတယ် — 17 OCT 1987",
    p: "⚠️ AI REGISTER, TEXT PERMITTED. Extreme close-up of the lower right corner of the faded "
      + "photograph showing a burned-in orange date stamp reading exactly \"17 OCT 1987\" in the "
      + "blocky digital font of a 1980s camera. This string is the only text in the image.",
    u: ["ပုံအောက်ထောင့်မှာ Date Stamp တစ်ခုပါနေတယ်။",
        "17 OCT 1987"],
    c: [[1, "bigstinger"]] },

  { t: "She Laughed and Posted It", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်း ရယ်လိုက်တယ်။ “AI က detail တောင် ထည့်ပေးထားတာ…” ပုံကို Facebook တင်လိုက်တယ်။",
    p: "A young woman laughing at her phone in bed, thumb moving, entirely unbothered.",
    u: ["သွန်း ရယ်လိုက်တယ်။ “AI က detail တောင် ထည့်ပေးထားတာ…”",
        "ပုံကို Facebook တင်လိုက်တယ်။ Caption—",
        "“ငါ 1987 မှာ မွေးခဲ့ရင် 😂”"] },

  { t: "Likes and Comments", l: "ဖုန်းဖန်သား",
    g: "တစ်နာရီလောက်ကြာတော့ Likes တွေ၊ Comments တွေ တက်လာတယ်။",
    p: "A phone screen showing a post with many reaction icons and rows of comment shapes — all "
      + "blocks and avatars, no readable words.",
    u: ["တစ်နာရီလောက်ကြာတော့ Likes တွေ၊ Comments တွေ တက်လာတယ်။",
        "ဒါပေမယ့် Comment တစ်ခုမှာ—",
        "သွန်း ရပ်သွားတယ်။"],
    c: [[2, "stinger"]] },

  { t: "Delete This Photo", l: "ဖုန်းဖန်သား",
    g: "Profile ပုံမပါတဲ့ Account တစ်ခု — “ဒီပုံကို ဖျက်လိုက်ပါ။”",
    p: "A single comment row on a phone screen with a blank grey default avatar beside it, isolated "
      + "against the others, the message itself shown as a short bar of unreadable text.",
    u: ["Profile ပုံမပါတဲ့ Account တစ်ခု။ သူရေးထားတာက—",
        "“ဒီပုံကို ဖျက်လိုက်ပါ။”"],
    c: [[1, "bigstinger"]] },

  { t: "I Have Seen This Photo", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်းက 😂 React ပေးလိုက်တယ်။ Reply က “မနောက်ပါဘူး။ ဒီပုံကို ကျွန်တော် မြင်ဖူးတယ်။”",
    p: "A woman's face lit by a phone in the dark, the amusement gone out of it.",
    u: ["သွန်းက 😂 React ပေးလိုက်တယ်။",
        "ခဏကြာတော့ အဲဒီ Account က Reply ပြန်လာတယ်။",
        "“မနောက်ပါဘူး။ ဒီပုံကို ကျွန်တော် မြင်ဖူးတယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "A Message Arrives", l: "ဖုန်းဖန်သား",
    g: "Messenger Notification ဝင်လာတယ်။ Unknown Account က ဓာတ်ပုံတစ်ပုံ ပို့ထားတယ်။",
    p: "A phone screen at night with a message thread open and a single image attachment loading in "
      + "it, the picture still a grey block.",
    u: ["သွန်း စိတ်ဝင်စားသွားတယ်။ “ဘယ်မှာလဲ?”",
        "Messenger Notification ဝင်လာတယ်။",
        "Unknown Account က ဓာတ်ပုံတစ်ပုံ ပို့ထားတယ်။"] },

  { t: "She Forgot to Breathe", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်း ဖွင့်ကြည့်လိုက်တယ်။ ပြီးတော့ အသက်ရှူဖို့တောင် မေ့သွားတယ်။",
    p: "Close on a young woman's face in phone-light, absolutely still, lips parted, not breathing.",
    u: ["သွန်း ဖွင့်ကြည့်လိုက်တယ်။",
        "ပြီးတော့—",
        "အသက်ရှူဖို့တောင် မေ့သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Real Old Photograph", l: null, w: ["မခင်စန်း"],
    g: "အရောင်ဖျော့ပြီး အနားတွေဝါနေတဲ့ တကယ့်ဓာတ်ပုံဟောင်းတစ်ပုံ။ မိန်းကလေးတစ်ယောက်။",
    p: "A genuinely old photographic print held in two hands: colours washed, edges yellowed and "
      + "slightly curled, a small crease across one corner. A woman in 1987 Burmese dress. This is a "
      + "PHYSICAL print, not a screen.",
    u: ["အရောင်ဖျော့ပြီး အနားတွေဝါနေတဲ့ တကယ့်ဓာတ်ပုံဟောင်းတစ်ပုံ။",
        "မိန်းကလေးတစ်ယောက်။ မြန်မာဝတ်စုံ။"],
    c: [[1, "bigstinger"]] },

  { t: "Identical in Every Detail", l: null, w: ["သွန်း", "မခင်စန်း"],
    g: "ဆံပင်ပုံစံ။ နောက်ခံ။ မျက်နှာ။ အားလုံး AI ဖန်တီးပေးထားတဲ့ ပုံနဲ့ တစ်ပုံစံတည်း။",
    p: "Two images side by side in one frame: the old physical print and the AI image on a phone "
      + "screen beside it — the same pose, the same background, the same face, indistinguishable.",
    u: ["ဆံပင်ပုံစံ။ နောက်ခံ။ မျက်နှာ။",
        "အားလုံး—",
        "AI ဖန်တီးပေးထားတဲ့ ပုံနဲ့ တစ်ပုံစံတည်း။"],
    c: [[2, "bigstinger"]] },

  { t: "17.10.87, in Pen", l: null,
    g: "ဓာတ်ပုံနောက်ကျောမှာ လက်ရေးနဲ့ — 17.10.87",
    p: "⚠️ TEXT PERMITTED. The back of the old photographic print, the paper foxed with age, with "
      + "\"17.10.87\" written on it in faded blue ballpoint in an adult hand. That string is the only "
      + "text in the image.",
    u: ["ဓာတ်ပုံနောက်ကျောမှာ လက်ရေးနဲ့—",
        "17.10.87"],
    c: [[1, "bigstinger"]] },

  { t: "That Is My Mother", l: "ဖုန်းဖန်သား",
    g: "“ဒါ ဘယ်သူလဲ?” Reply က — “ကျွန်တော့်အမေပါ။” “သူ့နာမည် မခင်စန်း။”",
    p: "A phone screen with a short message thread, the incoming bubbles rendered as shape only, the "
      + "room dark around the glow.",
    u: ["သွန်း ချက်ချင်း Message ပို့တယ်။ “ဒါ ဘယ်သူလဲ?”",
        "Reply က— “ကျွန်တော့်အမေပါ။”",
        "နောက် Message တစ်ခု။ “သူ့နာမည် မခင်စန်း။”"],
    c: [[2, "bigstinger"]] },

  { t: "She Disappeared on the 18th", l: "ဖုန်းဖန်သား",
    g: "“1987 October 18 ရက်နေ့မှာ ပျောက်သွားခဲ့တာပါ။”",
    p: "A phone screen with one more message bubble arrived below the others, and a thumb frozen "
      + "above the glass without touching it.",
    u: ["ပြီးတော့—",
        "“1987 October 18 ရက်နေ့မှာ ပျောက်သွားခဲ့တာပါ။”"],
    c: [[1, "bigstinger"]] },

  { t: "One Day Before", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်း ပုံပေါ်က Date ကို ပြန်ကြည့်လိုက်တယ် — 17 OCT 1987။ သူမပျောက်ခင် တစ်ရက်အလို။",
    p: "A young woman sitting bolt upright in a dark bedroom, phone in both hands, the blood gone "
      + "out of her face.",
    u: ["သွန်း ပုံပေါ်က Date ကို ပြန်ကြည့်လိုက်တယ်။ 17 OCT 1987",
        "သူမပျောက်ခင်—",
        "တစ်ရက်အလို။"],
    c: [[2, "bigstinger"]] },

  { t: "She Could Not Sleep", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်း အိပ်မပျော်တော့ဘူး။ ဒါဟာ Coincidence ဖြစ်နိုင်တယ်။",
    p: "A woman lying awake on her side in the small hours, eyes open, the phone face-down beside "
      + "her head.",
    u: ["သွန်း အိပ်မပျော်တော့ဘူး။",
        "ဒါဟာ Coincidence ဖြစ်နိုင်တယ်။",
        "AI တွေဟာ Internet ပေါ်က ပုံတွေကို လေ့လာထားတာပဲ။ တစ်နေရာရာက ပုံဟောင်းကို မှတ်မိပြီး ပြန်ဖန်တီးတာ ဖြစ်နိုင်တယ်။"] },

  { t: "No Results", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "Google Lens နဲ့ ပုံကိုရှာတယ်။ Result မရှိဘူး။",
    p: "A laptop screen showing an image search that has returned an empty result area, a woman's "
      + "face lit by it in a dark room.",
    u: ["သွန်း Google Lens နဲ့ ပုံကိုရှာတယ်။ Result မရှိဘူး။",
        "Facebook ရှာတယ်။ Google ရှာတယ်။",
        "မခင်စန်းဆိုတဲ့နာမည်နဲ့ ပျောက်ဆုံးမှုသတင်း ရှာတယ်။ ဘာမှမရှိဘူး။"],
    c: [[2, "stinger"]] },

  { t: "She Asked the AI Again", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "ဒါနဲ့ AI ကို နောက်တစ်ခါ စမ်းတယ် — “Same woman, October 18, 1987.” Generate.",
    p: "A close shot of a laptop with a generator interface open, a prompt field filled with a short "
      + "line of unreadable text, a cursor hovering over the generate control.",
    u: ["ဒါနဲ့ AI ကို နောက်တစ်ခါ စမ်းတယ်။",
        "ဒီတစ်ခါ သူ့ Selfie ကို Upload လုပ်ပြီး—",
        "“Same woman, October 18, 1987.” Generate."],
    c: [[2, "stinger"]] },

  { t: "She Was Running", l: "၁၉၈၇လမ်း", w: ["မခင်စန်း"],
    g: "ပုံထွက်လာတယ်။ သွန်းရဲ့မျက်နှာနဲ့ မခင်စန်း။ ညဘက်။ သူမက ပြေးနေတယ်။",
    p: "⚠️ AI REGISTER. A woman in 1987 Burmese dress running down a night street in old Yangon, "
      + "caught mid-stride, looking back over her shoulder. Faded film, heavy grain, motion blur.",
    u: ["ပုံထွက်လာတယ်။ သွန်းရဲ့မျက်နှာနဲ့ မခင်စန်း။",
        "ညဘက်။ ရန်ကုန်မြို့က လမ်းဟောင်းတစ်ခု။",
        "သူမက ပြေးနေတယ်။ နောက်ကို လှည့်ကြည့်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Two Headlights Behind Her", l: "၁၉၈၇လမ်း",
    g: "အနောက်မှာ — ကားမီးနှစ်လုံး။",
    p: "⚠️ AI REGISTER. Far down the night street behind the running woman, two car headlights, "
      + "small and paired, everything between them dark.",
    u: ["အနောက်မှာ—",
        "ကားမီးနှစ်လုံး။"],
    c: [[1, "bigstinger"]] },

  { t: "What Happened Next", l: "အိမ် ၄၂", w: ["မခင်စန်း"],
    g: "“What happened next?” ပုံထွက်လာတယ်။ အိမ်အဟောင်းတစ်လုံး။ မခင်စန်း တံခါးရှေ့မှာ ခေါက်နေတယ်။",
    p: "⚠️ AI REGISTER. A woman standing at the front door of an old Yangon townhouse at night, one "
      + "hand raised mid-knock. Faded film, grain, yellow streetlight.",
    u: ["သွန်း နောက်တစ်ပုံ Generate လုပ်တယ်။ “What happened next?”",
        "ပုံထွက်လာတယ်။ အိမ်အဟောင်းတစ်လုံး။",
        "မခင်စန်း တံခါးရှေ့မှာရပ်နေတယ်။ သူ့လက်တစ်ဖက်က တံခါးကို ခေါက်နေတယ်။"] },

  { t: "Someone Standing Inside", l: "အိမ် ၄၂", w: ["အဖေ"],
    g: "အိမ်တံခါး ပွင့်နေပြီ။ အိမ်ထဲမှာ လူတစ်ယောက် ရပ်နေတယ်။ မျက်နှာက အမှောင်ထဲမှာ။",
    p: "⚠️ AI REGISTER. The door now open, and inside it a man standing — ⚠️ A COMPLETE BLACK "
      + "SILHOUETTE against the dim interior, no features visible at all. Faded film, grain.",
    u: ["နောက်တစ်ပုံ။ အိမ်တံခါး ပွင့်နေပြီ။",
        "အိမ်ထဲမှာ လူတစ်ယောက် ရပ်နေတယ်။",
        "မျက်နှာက အမှောင်ထဲမှာ။"],
    c: [[2, "bigstinger"]] },

  { t: "Then She Was Gone", l: "အိမ် ၄၂",
    g: "နောက်တစ်ပုံ။ မခင်စန်း မရှိတော့ဘူး။ အိမ်တစ်လုံးပဲ။",
    p: "⚠️ AI REGISTER. The same doorway from the same angle, the door shut, nobody there at all. "
      + "Just the house.",
    u: ["နောက်တစ်ပုံ။",
        "မခင်စန်း မရှိတော့ဘူး။ အိမ်တစ်လုံးပဲ။"],
    c: [[1, "bigstinger"]] },

  { t: "Number 42", l: "အိမ် ၄၂",
    g: "သွန်း Zoom ဆွဲကြည့်တယ်။ အိမ်နံပါတ် — ၄၂။",
    p: "⚠️ AI REGISTER, TEXT PERMITTED. A pixelated zoom into the enamel number plate beside the "
      + "door, reading exactly \"42\". That numeral is the only text in the image.",
    u: ["သွန်း Zoom ဆွဲကြည့်တယ်။ အိမ်နံပါတ်—",
        "၄၂။"],
    c: [[1, "bigstinger"]] },

  { t: "A Video Call", l: "သွန်းအခန်း", w: ["သွန်း", "ကိုဇော်လင်း"],
    g: "နောက်နေ့မှာ Unknown Account ပိုင်ရှင်နဲ့ သွန်း Video Call ပြောတယ်။ သူ့နာမည် ကိုဇော်လင်း။",
    p: "A laptop screen showing a video call: a tired Burmese man of about forty in a plain room, "
      + "and a young woman's face reflected faintly in the dark edge of the screen.",
    u: ["နောက်နေ့မှာ Unknown Account ပိုင်ရှင်နဲ့ သွန်း Video Call ပြောတယ်။",
        "သူ့နာမည် ကိုဇော်လင်း။ အသက် ၄၀ နီးပါး။",
        "မခင်စန်း ပျောက်သွားတဲ့အချိန်မှာ သူက ကလေးလေးပဲရှိသေးတယ်။"] },

  { t: "I Looked for Years", l: null, w: ["ကိုဇော်လင်း"],
    g: "“အမေ့ကို ရှာခဲ့တာ နှစ်တွေအများကြီးပဲ။ ဘာမှမတွေ့ဘူး။”",
    p: "Close on the man's face on the call, speaking, thirty years of it in his expression.",
    u: ["“အမေ့ကို ရှာခဲ့တာ နှစ်တွေအများကြီးပဲ။ ဘာမှမတွေ့ဘူး။”"] },

  { t: "I Know This House", l: "သွန်းအခန်း", w: ["ကိုဇော်လင်း"],
    g: "သွန်း AI ပုံထဲက အိမ်ကို ပြတယ်။ ကိုဇော်လင်း မျက်နှာပျက်သွားတယ်။ “ဒီအိမ်ကို ကျွန်တော်သိတယ်။”",
    p: "A phone held up to a laptop camera showing the AI house image, and on the call the man's "
      + "face changing as he sees it.",
    u: ["သွန်း AI ပုံထဲက အိမ်ကို ပြတယ်။",
        "ကိုဇော်လင်း မျက်နှာပျက်သွားတယ်။ “ဒီအိမ်ကို ကျွန်တော်သိတယ်။”"],
    c: [[1, "bigstinger"]] },

  { t: "My Mother's Employer", l: null, w: ["ကိုဇော်လင်း"],
    g: "“ဘယ်သူ့အိမ်လဲ?” သူ ခဏတိတ်သွားတယ် — “အမေ့အလုပ်ရှင်ရဲ့အိမ်။”",
    p: "The man on the video call gone quiet, looking away from his camera before he answers.",
    u: ["“ဘယ်သူ့အိမ်လဲ?” သူ ခဏတိတ်သွားတယ်။",
        "“အမေ့အလုပ်ရှင်ရဲ့အိမ်။”",
        "အဲဒီလူက အခုမရှိတော့ဘူး။ အိမ်လည်း နှစ်ပေါင်းများစွာ ပိတ်ထားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "They Went to the House", l: "အိမ် ၄၂", w: ["သွန်း", "ကိုဇော်လင်း"],
    g: "သွန်းနဲ့ ကိုဇော်လင်း အိမ်ကို သွားကြတယ်။ ဖုန်းနဲ့ Video ရိုက်ရင်း ဝင်ကြတယ်။",
    p: "A young woman and an older man standing in daylight in front of a shut-up old Yangon "
      + "townhouse, she filming on a phone held at chest height.",
    u: ["သွန်းနဲ့ ကိုဇော်လင်း အိမ်ကို သွားကြတယ်။",
        "ဖုန်းနဲ့ Video ရိုက်ရင်း ဝင်ကြတယ်။"] },

  { t: "Matching It Frame by Frame", l: "အိမ် ၄၂",
    g: "AI ပုံထဲက နေရာတွေကို တစ်ခုပြီးတစ်ခု တိုက်ကြည့်တယ်။ တံခါး။ လှေကား။ ပြတင်းပေါက်။",
    p: "A phone held up inside a dusty hallway with an AI image on its screen, the real staircase "
      + "behind it lining up exactly with the one in the picture.",
    u: ["AI ပုံထဲက နေရာတွေကို တစ်ခုပြီးတစ်ခု တိုက်ကြည့်တယ်။",
        "တံခါး။ လှေကား။ ပြတင်းပေါက်။",
        "အားလုံး တူနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "63% to 8%", l: "အိမ် ၄၂", w: ["သွန်း"],
    g: "အပေါ်ထပ်ရောက်တော့ သွန်းဖုန်း Battery 63% ကနေ ရုတ်တရက် 8% ဖြစ်သွားတယ်။",
    p: "A phone screen at the top of a dark staircase with its battery indicator shown as a nearly "
      + "empty red sliver, the camera app closing itself.",
    u: ["အပေါ်ထပ်ရောက်တော့—",
        "သွန်းဖုန်း Battery 63% ကနေ ရုတ်တရက် 8% ဖြစ်သွားတယ်။",
        "Camera App ပိတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "It Opened Itself", l: "အိမ် ၄၂", w: ["သွန်း"],
    g: "ပြီးတော့ AI App က သူ့ဘာသာ ပွင့်လာတယ် — Generating image… သွန်း ဘာမှမနှိပ်ထားဘူး။",
    p: "A phone screen showing a generator interface open by itself with a progress spinner turning, "
      + "and both of the woman's hands visible well away from the glass.",
    u: ["ပြီးတော့ AI App က သူ့ဘာသာ ပွင့်လာတယ်။",
        "Generating image…",
        "သွန်း ဘာမှမနှိပ်ထားဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "She Is Pointing at the Floor", l: "အိမ် ၄၂", w: ["မခင်စန်း"],
    g: "ပုံတစ်ပုံ ထွက်လာတယ်။ မခင်စန်း — အခု သူတို့ရပ်နေတဲ့ အခန်းထဲမှာ။ ကြမ်းပြင်ကို လက်ညှိုးထိုးနေတယ်။",
    p: "⚠️ AI REGISTER. The woman in 1987 dress standing in THIS upstairs room — the same bare "
      + "boards, the same window — pointing down at a specific spot on the floor. Faded film over a "
      + "room we have just seen in clean modern light.",
    u: ["ပုံတစ်ပုံ ထွက်လာတယ်။ မခင်စန်း။",
        "အခု သူတို့ရပ်နေတဲ့ အခန်းထဲမှာ။",
        "သူမက ကြမ်းပြင်ကို လက်ညှိုးထိုးနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "They Lifted the Boards", l: "အိမ် ၄၂", w: ["သွန်း", "ကိုဇော်လင်း"],
    g: "တစ်ယောက်ကိုတစ်ယောက် ကြည့်လိုက်ကြတယ်။ ကြမ်းပြင်ဟောင်းကို ဖွင့်ကြည့်တော့ — အောက်မှာ အလောင်းမရှိဘူး။",
    p: "Two people crouched over a lifted floorboard in a dusty upstairs room, torchlight into the "
      + "cavity. ⚠️ NO BODY, NO REMAINS — the space below holds only dust and one small object.",
    u: ["သွန်းနဲ့ ကိုဇော်လင်း တစ်ယောက်ကိုတစ်ယောက် ကြည့်လိုက်ကြတယ်။",
        "ကြမ်းပြင်ဟောင်းကို ဖွင့်ကြည့်တော့—",
        "အောက်မှာ အလောင်းမရှိဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "A Bag Under the Floor", l: "အိမ် ၄၂",
    g: "အစား — အဟောင်းစား အိတ်လေးတစ်လုံး။ အထဲမှာ Cassette Tape။ အမျိုးသမီးလက်ကိုင်အိတ်။",
    p: "A small perished cloth bag lifted out of a floor cavity and opened on the boards: an audio "
      + "cassette, a woman's handbag, and a photograph.",
    u: ["အစား—",
        "အဟောင်းစား အိတ်လေးတစ်လုံး။",
        "အထဲမှာ Cassette Tape။ အမျိုးသမီးလက်ကိုင်အိတ်။ ပြီးတော့— ဓာတ်ပုံတစ်ပုံ။"],
    c: [[2, "stinger"]] },

  { t: "That Is Not Him", l: "အိမ် ၄၂", w: ["ကိုဇော်လင်း"],
    g: "ပုံထဲမှာ မခင်စန်းနဲ့ လူတစ်ယောက်။ ကိုဇော်လင်း — “ဒီလူ မဟုတ်ဘူး…”",
    p: "An old photograph held in a man's hands showing the woman beside a man whose face is turned "
      + "away and shadowed, and the man's own face above it draining.",
    u: ["ပုံထဲမှာ မခင်စန်းနဲ့ လူတစ်ယောက်။",
        "ကိုဇော်လင်း ပုံကိုမြင်တာနဲ့— “ဒီလူ မဟုတ်ဘူး…”",
        "သွန်း ကြည့်လိုက်တယ်။ “ဘာကိုပြောတာလဲ?”"],
    c: [[1, "bigstinger"]] },

  { t: "That Is My Father", l: "အိမ် ၄၂", w: ["ကိုဇော်လင်း"],
    g: "“အမေ့အလုပ်ရှင် မဟုတ်ဘူး။” ကိုဇော်လင်းရဲ့အသံ တုန်လာတယ်။ “ဒါ… ကျွန်တော့်အဖေ။”",
    p: "Close on the man's face as he says it, the photograph shaking in his hand.",
    u: ["“အမေ့အလုပ်ရှင် မဟုတ်ဘူး။” ကိုဇော်လင်းရဲ့အသံ တုန်လာတယ်။",
        "“ဒါ…”",
        "“ကျွန်တော့်အဖေ။”"],
    c: [[2, "bigstinger"]] },

  { t: "He Believed His Father", l: null, w: ["ကိုဇော်လင်း"],
    g: "သူ့အဖေဟာ အမေပျောက်ပြီး နှစ်အနည်းငယ်အကြာမှာ သေဆုံးခဲ့တယ်။ အဖေကလည်း အမေ့ကို ရှာနေတယ်လို့ပဲ ယုံခဲ့တာ။",
    p: "A man sitting back on his heels on dusty floorboards, the photograph loose in one hand, "
      + "staring at nothing.",
    u: ["ကိုဇော်လင်းက သူ့အဖေဟာ သူ့အမေပျောက်ပြီး နှစ်အနည်းငယ်အကြာမှာ သေဆုံးခဲ့တယ်လို့ ပြောတယ်။",
        "သူ့ဘဝတစ်လျှောက်—",
        "အဖေကလည်း အမေ့ကို ရှာနေခဲ့တယ်လို့ပဲ ယုံခဲ့တာ။"],
    c: [[2, "stinger"]] },

  { t: "The Tape", l: "သွန်းအခန်း",
    g: "Cassette ကို ပြန်ဖွင့်ဖို့ Device ရှာကြတယ်။ အသံက ပျက်နေတယ်။",
    p: "An old cassette player on a table with the tape loaded and turning, its reels visible, a "
      + "single lamp beside it.",
    u: ["Cassette ကို ပြန်ဖွင့်ဖို့ Device ရှာကြတယ်။",
        "အသံက ပျက်နေတယ်။"] },

  { t: "Her Voice, Arguing", l: "သွန်းအခန်း", w: ["ကိုဇော်လင်း"],
    g: "မခင်စန်းရဲ့အသံကို ကြားရတယ်။ သူမက တစ်ယောက်ယောက်နဲ့ ငြင်းခုံနေတယ်။ ပြီးတော့ အမျိုးသားအသံတစ်ခု။",
    p: "Close on the turning cassette reels, and out of focus behind them a man's face listening "
      + "with his eyes shut.",
    u: ["ဒါပေမယ့် မခင်စန်းရဲ့အသံကို ကြားရတယ်။",
        "သူမက တစ်ယောက်ယောက်နဲ့ ငြင်းခုံနေတယ်။",
        "ပြီးတော့ အမျိုးသားအသံတစ်ခု။"],
    c: [[2, "bigstinger"]] },

  { t: "He Knew That Voice", l: "သွန်းအခန်း", w: ["ကိုဇော်လင်း"],
    g: "ကိုဇော်လင်း နားထောင်ပြီး မျက်ရည်ဝဲလာတယ်။ သူ့အဖေရဲ့အသံ။",
    p: "A man's face in lamplight with tears standing in his eyes, recognising something he has "
      + "heard all his life.",
    u: ["ကိုဇော်လင်း နားထောင်ပြီး မျက်ရည်ဝဲလာတယ်။",
        "သူ့အဖေရဲ့အသံ။"],
    c: [[1, "bigstinger"]] },

  { t: "She Ran There for Help", l: "၁၉၈၇လမ်း", w: ["မခင်စန်း"],
    g: "မခင်စန်းဟာ အလုပ်ရှင်အိမ်ကို အကူအညီတောင်းဖို့ ပြေးလာခဲ့တာ။ သူ့နောက်က လိုက်လာတဲ့သူက — သူ့ယောက်ျား။",
    p: "⚠️ AI REGISTER. A reconstruction: the woman running toward the house door at night, and far "
      + "behind her at the edge of frame a man's shape following. His face is not visible.",
    u: ["မခင်စန်းဟာ အလုပ်ရှင်အိမ်ကို အကူအညီတောင်းဖို့ ပြေးလာခဲ့တာ။",
        "သူ့နောက်က လိုက်လာတဲ့သူက—",
        "သူ့ယောက်ျား။ ကိုဇော်လင်းရဲ့အဖေ။"],
    c: [[2, "bigstinger"]] },

  { t: "She Was Going to Take the Boy", l: null, w: ["မခင်စန်း"],
    g: "မခင်စန်းဟာ သားလေးကိုခေါ်ပြီး ထွက်ပြေးဖို့ ဆုံးဖြတ်ထားခဲ့တယ်။ ဒါကို အဖေက လက်မခံခဲ့ဘူး။",
    p: "⚠️ AI REGISTER. A 1987 interior: the woman kneeling to fasten a small boy's sandal beside a "
      + "packed cloth bundle by a door. Warm, quiet, and about to be interrupted.",
    u: ["မခင်စန်းဟာ သားလေးကိုခေါ်ပြီး ထွက်ပြေးဖို့ ဆုံးဖြတ်ထားခဲ့တယ်။",
        "ဒါကို အဖေက လက်မခံခဲ့ဘူး။"],
    c: [[1, "stinger"]] },

  { t: "Don't Touch My Son", l: "သွန်းအခန်း",
    g: "နောက်ဆုံးမှာ မခင်စန်းရဲ့အသံတစ်ခုပဲ — “ငါ့သားကို မထိနဲ့…” ပြီးတော့ Tape ပြတ်သွားတယ်။",
    p: "Extreme close-up of the cassette as the tape snaps and the reels spin free, loose ribbon "
      + "slack inside the window.",
    u: ["အဲဒီည ဘာဖြစ်ခဲ့တယ်ဆိုတာ Cassette မှာ အပြည့်အစုံ မပါဘူး။",
        "နောက်ဆုံးမှာ မခင်စန်းရဲ့အသံတစ်ခုပဲ—",
        "“ငါ့သားကို မထိနဲ့…”",
        "ပြီးတော့ Tape ပြတ်သွားတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "She Did Not Abandon Him", l: "သွန်းအခန်း", w: ["ကိုဇော်လင်း"],
    g: "“မင်းအမေ ငါတို့ကို စွန့်ပစ်သွားတာ” လို့ သူ့အဖေပြောခဲ့တာကို ဘဝတစ်လျှောက် ယုံခဲ့တယ်။",
    p: "A man sitting down heavily on the floor with his back against a wall, hands over his face.",
    u: ["ကိုဇော်လင်း ထိုင်ချလိုက်တယ်။",
        "သူ့ဘဝတစ်လျှောက် သူ့အဖေပြောခဲ့တာကို ယုံခဲ့တယ်။ “မင်းအမေ ငါတို့ကို စွန့်ပစ်သွားတာ” လို့။",
        "တကယ်တော့— မခင်စန်းဟာ သူ့သားကို စွန့်ပစ်ခဲ့တာ မဟုတ်ဘူး။",
        "သူ့သားကို ကယ်ဖို့ ထွက်ပြေးခဲ့တာ။"],
    c: [[3, "bigstinger"]] },

  { t: "One Question Left", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "“မခင်စန်းနဲ့ ကျွန်မ ဘာလို့ အရမ်းတူနေတာလဲ?” ကိုဇော်လင်းလည်း မသိဘူး။ သူတို့အမျိုးမဟုတ်ဘူး။",
    p: "A young woman holding the old photograph up beside her own face in a mirror — two identical "
      + "faces, forty years apart.",
    u: ["အမှုရဲ့အမှန်တရား နီးပါးပေါ်လာပြီ။ ဒါပေမယ့် သွန်းမှာ မေးခွန်းတစ်ခု ကျန်နေသေးတယ်။",
        "“မခင်စန်းနဲ့ ကျွန်မ ဘာလို့ အရမ်းတူနေတာလဲ?”",
        "ကိုဇော်လင်းလည်း မသိဘူး။ သူတို့အမျိုးမဟုတ်ဘူး။ မိသားစုဆက်နွယ်မှု မရှိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Why Do I Look Like Her", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "အဲဒီည သွန်း အိမ်ပြန်ရောက်တယ်။ နောက်ဆုံးမေးခွန်း ရိုက်ထည့်လိုက်တယ် — “Why do I look like her?”",
    p: "A woman alone at her laptop at night, typing a short line into a prompt field, her face lit "
      + "from below by the screen.",
    u: ["အဲဒီည သွန်း အိမ်ပြန်ရောက်တယ်။ AI App ကိုဖွင့်တယ်။",
        "နောက်ဆုံးမေးခွန်း ရိုက်ထည့်လိုက်တယ်။",
        "“Why do I look like her?” Generate."],
    c: [[2, "bigstinger"]] },

  { t: "This Is Not 1980", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "ပုံတစ်ပုံပေါ်လာတယ်။ သွန်းရဲ့လက်ရှိအခန်း။ လက်ရှိအဝတ်အစားနဲ့ သွန်း။ Laptop ရှေ့မှာ ထိုင်နေတယ်။",
    p: "⚠️ MODERN REGISTER INSIDE A SCREEN — no film grain, no date stamp. The generated image shows "
      + "THIS room, THIS woman, in the clothes she is wearing right now, seated at the laptop, shot "
      + "from behind and slightly above.",
    u: ["ပုံတစ်ပုံပေါ်လာတယ်။ သွန်းရဲ့လက်ရှိအခန်း။",
        "လက်ရှိအဝတ်အစားနဲ့ သွန်း။ Laptop ရှေ့မှာ ထိုင်နေတယ်။",
        "ဒီပုံက ၁၉၈၀ မဟုတ်ဘူး။",
        "အခု။"],
    c: [[3, "bigstinger"]] },

  { t: "The Camera Had No Permission", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "AI က Camera permission မရှိဘူး။ ဒါပေမယ့် ပုံထဲမှာ သူ အခုထိုင်နေတဲ့ပုံ အတိအကျ။",
    p: "A laptop with a strip of tape over its camera, and on the screen beside it the image that "
      + "could only have been taken from exactly there.",
    u: ["သွန်း ရင်တုန်သွားတယ်။",
        "AI က Camera permission မရှိဘူး။",
        "ဒါပေမယ့် ပုံထဲမှာ— သူ အခုထိုင်နေတဲ့ပုံ အတိအကျ။"],
    c: [[2, "bigstinger"]] },

  { t: "14 SEP 2026 — Tomorrow", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "နောက်တစ်ပုံ Auto Generate ဖြစ်လာတယ်။ သွန်း အိပ်ရာပေါ်မှာ အိပ်နေတယ်။ အောက်မှာ Date — 14 SEP 2026။ မနက်ဖြန်။",
    p: "⚠️ TEXT PERMITTED. A generated image of the woman asleep in her own bed seen from above, with "
      + "a small burned-in date stamp in the lower right reading exactly \"14 SEP 2026\". That string "
      + "is the only text.",
    u: ["နောက်တစ်ပုံ Auto Generate ဖြစ်လာတယ်။",
        "သွန်း အိပ်ရာပေါ်မှာ အိပ်နေတယ်။ အောက်မှာ Date— 14 SEP 2026",
        "မနက်ဖြန်။"],
    c: [[2, "bigstinger"]] },

  { t: "15 SEP 2026 — The Room Is Empty", l: "သွန်းအခန်း",
    g: "နောက်တစ်ပုံ — 15 SEP 2026။ အခန်းထဲမှာ သွန်း မရှိတော့ဘူး။",
    p: "⚠️ TEXT PERMITTED. The same bedroom from the same angle, the bed unmade and empty, nobody in "
      + "the room. Date stamp lower right reading exactly \"15 SEP 2026\".",
    u: ["သွန်း မျက်နှာပျက်သွားတယ်။ နောက်တစ်ပုံ။",
        "15 SEP 2026",
        "အခန်းထဲမှာ သွန်း မရှိတော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "16 SEP 2026 — Missing Person", l: "ဖုန်းဖန်သား", w: ["သွန်း"],
    g: "နောက်တစ်ပုံ — 16 SEP 2026။ Facebook ပေါ်မှာ သွန်းရဲ့ပုံ။ အောက်မှာ — MISSING PERSON — PLEASE SHARE",
    p: "⚠️ TEXT PERMITTED. A generated image of a social media post: the woman's own selfie with a "
      + "banner beneath it reading exactly \"MISSING PERSON — PLEASE SHARE\", and a date stamp "
      + "reading \"16 SEP 2026\". Those two strings are the only text in the image.",
    u: ["နောက်တစ်ပုံ။ 16 SEP 2026",
        "Facebook ပေါ်မှာ သွန်းရဲ့ပုံ။ အောက်မှာ စာတွေ။",
        "“MISSING PERSON — PLEASE SHARE”"],
    c: [[2, "bigstinger"]] },

  { t: "It Was Showing Her Future", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "AI က မခင်စန်းရဲ့အတိတ်ကိုပဲ ပြနေတာ မဟုတ်ဘူး။ သွန်းရဲ့ အနာဂတ်ကိုလည်း ပြနေပြီ။",
    p: "A phone dropped onto a bed, still lit, and a woman backed away from it against the wall.",
    u: ["သွန်း ဖုန်းကို လွှတ်ချလိုက်တယ်။",
        "AI က မခင်စန်းရဲ့အတိတ်ကိုပဲ ပြနေတာ မဟုတ်ဘူး။",
        "သွန်းရဲ့ အနာဂတ်ကိုလည်း ပြနေပြီ။"],
    c: [[2, "bigstinger"]] },

  { t: "She Did Everything Right", l: "သွန်းအခန်း", w: ["သွန်း", "သူငယ်ချင်း"],
    g: "သွန်း တစ်ယောက်တည်း မနေတော့ဘူး။ သူငယ်ချင်းကိုခေါ်တယ်။ Location Sharing ဖွင့်ထားတယ်။",
    p: "Two young women in a small apartment in daylight, one showing the other a phone with a "
      + "location-sharing map open on it.",
    u: ["သွန်း အဲဒီညကတည်းက တစ်ယောက်တည်း မနေတော့ဘူး။ သူငယ်ချင်းကိုခေါ်တယ်။",
        "Location Sharing ဖွင့်ထားတယ်။ Cloud Backup ဖွင့်ထားတယ်။"] },

  { t: "Tape Over the Cameras", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "အိမ်တံခါး Lock လုပ်တယ်။ ဖုန်း Camera တွေကို Tape ကပ်ထားတယ်။ AI App ကို Delete လုပ်တယ်။",
    p: "Close on a phone with small squares of black tape pressed over both camera lenses, a hand "
      + "smoothing one down.",
    u: ["အိမ်တံခါး Lock လုပ်တယ်။",
        "ဖုန်း Camera တွေကို Tape ကပ်ထားတယ်။",
        "AI App ကို Delete လုပ်တယ်။"],
    c: [[2, "stinger"]] },

  { t: "Nothing Happened", l: "သွန်းအခန်း", w: ["သွန်း", "သူငယ်ချင်း"],
    g: "မနက် ၁၂ နာရီကျော်။ ဘာမှမဖြစ်ဘူး။ ၁ နာရီ။ ဘာမှမဖြစ်ဘူး။",
    p: "Two women sitting on a bed with the curtains open and daylight in the room, both a little "
      + "bored, one checking the time.",
    u: ["မနက် ၁၂ နာရီကျော်။ ဘာမှမဖြစ်ဘူး။",
        "၁ နာရီ။ ဘာမှမဖြစ်ဘူး။"] },

  { t: "2:17 — Your Image Is Ready", l: "ဖုန်းဖန်သား",
    g: "၂ နာရီ ၁၇ မိနစ်။ App ကို Delete လုပ်ထားပေမယ့် — Your image is ready.",
    p: "⚠️ TEXT PERMITTED. A phone lock screen showing a single notification banner reading exactly "
      + "\"Your image is ready.\" and nothing else. That sentence is the only text in the image.",
    u: ["၂ နာရီ ၁၇ မိနစ်။ ဖုန်း Notification ဝင်လာတယ်။",
        "App ကို Delete လုပ်ထားပေမယ့်—",
        "Your image is ready."],
    c: [[2, "bigstinger"]] },

  { t: "Open It and See", l: "သွန်းအခန်း", w: ["သွန်း", "သူငယ်ချင်း"],
    g: "သွန်း မဖွင့်ရဲဘူး။ ဒါပေမယ့် သူ့သူငယ်ချင်းက “ကြည့်လိုက်။ ကြိုသိရင် ရှောင်လို့ရတာပေါ့”",
    p: "One woman reaching for the phone while the other pulls back from it, both hands in frame "
      + "over the lit screen.",
    u: ["သွန်း မဖွင့်ရဲဘူး။",
        "ဒါပေမယ့် သူ့သူငယ်ချင်းက— “ကြည့်လိုက်။ ကြိုသိရင် ရှောင်လို့ရတာပေါ့”",
        "ပုံကိုဖွင့်လိုက်ကြတယ်။"],
    c: [[2, "stinger"]] },

  { t: "Thun at the Door", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "ပုံထဲမှာ သွန်း။ အခန်းတံခါးနားမှာ ရပ်နေတယ်။ တံခါးအပြင်ဘက်မှာ — မခင်စန်း။",
    p: "A generated image showing the woman standing just inside her own front door — and beyond it, "
      + "in the faded 1987 register, the other woman standing in the corridor. ⚠️ TWO REGISTERS IN "
      + "ONE FRAME, divided exactly by the door line: modern and clean inside, faded film outside.",
    u: ["ပုံထဲမှာ သွန်း။ အခန်းတံခါးနားမှာ ရပ်နေတယ်။",
        "တံခါးအပြင်ဘက်မှာ—",
        "မခင်စန်း။"],
    c: [[2, "bigstinger"]] },

  { t: "Do Not Open It", l: null, w: ["မခင်စန်း"],
    g: "ဒီတစ်ခါ သူမ ကြောက်နေတဲ့မျက်နှာ မဟုတ်ဘူး။ တံခါးကို လက်ညှိုးထိုးပြီး ခေါင်းခါနေတယ် — မဖွင့်နဲ့။",
    p: "⚠️ AI REGISTER. Close on the 1987 woman's face and raised hand: pointing at the door and "
      + "shaking her head. ⚠️ NOT frightened and NOT threatening — she is warning.",
    u: ["ဒီတစ်ခါ သူမ ကြောက်နေတဲ့မျက်နှာ မဟုတ်ဘူး။",
        "တံခါးကို လက်ညှိုးထိုးပြီး—",
        "မဖွင့်နဲ့ ဆိုတဲ့ပုံစံနဲ့ ခေါင်းခါနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Knock. Knock. Knock.", l: "သွန်းအခန်း",
    g: "အဲဒီအချိန် — တံခါးခေါက်သံ။",
    p: "A closed apartment door seen from inside, the light gap beneath it unbroken, the two women "
      + "frozen in the foreground out of focus.",
    u: ["အဲဒီအချိန်—",
        "တံခါးခေါက်သံ။"],
    c: [[1, "knock"]] },

  { t: "Nobody on the Camera", l: "သွန်းအခန်း", w: ["သူငယ်ချင်း"],
    g: "သူငယ်ချင်းက CCTV ကြည့်တယ်။ ဘယ်သူမှမရှိဘူး။",
    p: "A phone showing a CCTV feed of an empty corridor outside a door — grainy, wide-angle, "
      + "completely empty.",
    u: ["သူငယ်ချင်းက CCTV ကြည့်တယ်။",
        "ဘယ်သူမှမရှိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Thun, Open the Door", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "ပြီးတော့ အပြင်က အသံတစ်ခု။ မိန်းမအသံ — “သွန်း… တံခါးဖွင့်ပါ…”",
    p: "Close on a woman's face turned toward a closed door, listening to something on the other "
      + "side of it, the colour gone out of her.",
    u: ["Knock. Knock. Knock.",
        "ပြီးတော့ အပြင်က အသံတစ်ခု။ မိန်းမအသံ။",
        "“သွန်း… တံခါးဖွင့်ပါ…”"],
    c: [[2, "bigstinger"]] },

  { t: "It Was Her Mother's Voice", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်းရဲ့မျက်နှာ ဖြူသွားတယ်။ အသံက — သူ့အမေရဲ့အသံ။ ဒါပေမယ့် သူ့အမေက အဲဒီည မန္တလေးမှာ။",
    p: "A woman's face going white, one hand over her own mouth, staring at a closed door.",
    u: ["သွန်းရဲ့မျက်နှာ ဖြူသွားတယ်။ အသံက—",
        "သူ့အမေရဲ့အသံ။",
        "ဒါပေမယ့် သူ့အမေက အဲဒီည မန္တလေးမှာ။"],
    c: [[1, "bigstinger"]] },

  { t: "Her Mother Picked Up", l: "ဖုန်းဖန်သား",
    g: "သွန်း Video Call ခေါ်လိုက်တယ်။ အမေ ကိုင်တယ်။ မန္တလေး Hotel Room ထဲမှာ။ ဒါဆို အပြင်မှာ ဘယ်သူလဲ?",
    p: "A phone screen showing a video call with an older Burmese woman in a bright hotel room, "
      + "utterly ordinary — and the dark apartment visible around the edges of the phone.",
    u: ["သွန်း Video Call ခေါ်လိုက်တယ်။ အမေ ကိုင်တယ်။ မန္တလေး Hotel Room ထဲမှာ။",
        "ဒါဆို အပြင်မှာ ဘယ်သူလဲ?"],
    c: [[1, "bigstinger"]] },

  { t: "Everything Went Quiet", l: "သွန်းအခန်း",
    g: "တံခါးခေါက်သံ ရပ်သွားတယ်။ အရာအားလုံး တိတ်သွားတယ်။",
    p: "The closed door again, still, the corridor light unbroken beneath it. Held one beat too "
      + "long.",
    u: ["တံခါးခေါက်သံ ရပ်သွားတယ်။",
        "အရာအားလုံး တိတ်သွားတယ်။"] },

  { t: "Someone Behind Them", l: "သွန်းအခန်း", w: ["သွန်း", "သူငယ်ချင်း", "အဖေ"],
    g: "အခုအခန်းရဲ့ပုံ။ သွန်းနဲ့ သူ့သူငယ်ချင်း။ ပြီးတော့ — သူတို့နှစ်ယောက်ရဲ့ အနောက်မှာ လူတစ်ယောက်။",
    p: "A generated image of this room, right now: the two women in the foreground looking at a "
      + "phone — and standing behind them, ⚠️ AN UNRESOLVED DARK FIGURE, no face, no detail, simply "
      + "present.",
    u: ["သွန်း အသက်ရှူချလိုက်တဲ့အချိန်— သူ့ဖုန်းမှာ ပုံအသစ် Auto Generate ဖြစ်လာတယ်။",
        "အခုအခန်းရဲ့ပုံ။ သွန်းနဲ့ သူ့သူငယ်ချင်း။",
        "ပြီးတော့—",
        "သူတို့နှစ်ယောက်ရဲ့ အနောက်မှာ လူတစ်ယောက်။"],
    c: [[3, "bigstinger"]] },

  { t: "It Never Needed the Door", l: "သွန်းအခန်း",
    g: "တံခါးအပြင်က အရာက — ဝင်ဖို့ တံခါးဖွင့်စရာ မလိုခဲ့ဘူး။",
    p: "The same room photographed for real, empty behind the two women — the space where the figure "
      + "stood in the generated image, containing nothing.",
    u: ["တံခါးအပြင်က အရာက—",
        "ဝင်ဖို့ တံခါးဖွင့်စရာ မလိုခဲ့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "The Lights Went Out", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "မီးတွေ ငြိမ်းသွားတယ်။ ဖုန်း Flashlight တစ်ခုပဲ ကျန်တယ်။",
    p: "A dark apartment lit only by a single phone torch, its beam narrow and hard, everything "
      + "outside it black.",
    u: ["မီးတွေ ငြိမ်းသွားတယ်။",
        "ဖုန်း Flashlight တစ်ခုပဲ ကျန်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Something Moved in the Mirror", l: "သွန်းအခန်း",
    g: "အခန်းထဲက မှန်ပေါ်မှာ လူရိပ်တစ်ခု လှုပ်သွားတယ်။",
    p: "A bedroom mirror caught in torchlight with a shape just leaving its edge — a blur, never "
      + "resolved, gone before it can be read.",
    u: ["အခန်းထဲက မှန်ပေါ်မှာ လူရိပ်တစ်ခု လှုပ်သွားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "She Pointed at the Corner", l: "ဖုန်းဖန်သား", w: ["မခင်စန်း"],
    g: "Screen ပေါ်မှာ မခင်စန်းရဲ့ပုံ ထပ်ပေါ်လာတယ်။ သူမက အခန်းရဲ့ ထောင့်တစ်နေရာကို လက်ညှိုးထိုးနေတယ်။",
    p: "⚠️ AI REGISTER inside a phone screen. The 1987 woman pointing off to one side, her arm and "
      + "finger clearly directing the viewer to a specific corner of the room.",
    u: ["သွန်း ဖုန်းကိုင်ပြီး အပြင်ပြေးမယ်လုပ်တော့—",
        "Screen ပေါ်မှာ မခင်စန်းရဲ့ပုံ ထပ်ပေါ်လာတယ်။",
        "သူမက အခန်းရဲ့ ထောင့်တစ်နေရာကို လက်ညှိုးထိုးနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Nothing There", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်း အဲဒီဘက်ကို Flashlight ထိုးလိုက်တယ်။ ဘာမှမရှိဘူး။",
    p: "A torch beam thrown into an empty corner of a dark room — bare wall, bare floor, nothing at "
      + "all.",
    u: ["သွန်း အဲဒီဘက်ကို Flashlight ထိုးလိုက်တယ်။",
        "ဘာမှမရှိဘူး။"] },

  { t: "But Through the Camera", l: "သွန်းအခန်း", w: ["အဖေ"],
    g: "ဒါပေမယ့် Phone Camera နဲ့ ကြည့်လိုက်တဲ့အခါ — လူတစ်ယောက်။ ၁၉၈၇ ခုနှစ်က ကိုဇော်လင်းရဲ့အဖေ။",
    p: "A phone held up with its live camera view filling the screen: in the same corner the naked "
      + "eye found empty, ⚠️ A MAN IN 1987 CLOTHES, standing, HIS FACE UNRESOLVED — grain, shadow, "
      + "no features. Around the phone, the real corner is still visibly empty.",
    u: ["ဒါပေမယ့် Phone Camera နဲ့ ကြည့်လိုက်တဲ့အခါ—",
        "လူတစ်ယောက်။",
        "၁၉၈၇ ခုနှစ်က ကိုဇော်လင်းရဲ့အဖေ။"],
    c: [[2, "bigstinger"]] },

  { t: "He Followed Her the Same Way", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သူဟာ မခင်စန်းနောက်ကို လိုက်ခဲ့တဲ့အတိုင်း — အခု သွန်းနောက်ကို လိုက်နေတယ်။",
    p: "A woman backing toward a doorway holding a phone up in front of her like a mirror, watching "
      + "the corner through it rather than with her eyes.",
    u: ["သူဟာ မခင်စန်းနောက်ကို လိုက်ခဲ့တဲ့အတိုင်း—",
        "အခု သွန်းနောက်ကို လိုက်နေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "It Was Never a Mistake", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "AI က သွန်းကို မခင်စန်းနဲ့ တူအောင် ဖန်တီးခဲ့တာ မဟုတ်ဘူး။ မှားသိနေခဲ့တာလည်း မဟုတ်ဘူး။",
    p: "Close on the woman's face as she works it out, the phone light under her chin.",
    u: ["အဲဒီအချိန်မှာ သွန်း နားလည်သွားတယ်။",
        "AI က သွန်းကို မခင်စန်းနဲ့ တူအောင် ဖန်တီးခဲ့တာ မဟုတ်ဘူး။",
        "AI က သူ့ကို မခင်စန်းအဖြစ် မှားသိနေခဲ့တာလည်း မဟုတ်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "An Unfinished Night Found a Face", l: null,
    g: "အတိတ်က မပြီးဆုံးခဲ့တဲ့ အဖြစ်အပျက်တစ်ခုက — တူညီတဲ့ မျက်နှာတစ်ခုကို ရှာတွေ့သွားတာ။",
    p: "A split composition: the 1987 street in faded film on one side and the 2026 apartment "
      + "corridor in clean modern light on the other, the same woman's face in both halves.",
    u: ["အတိတ်က မပြီးဆုံးခဲ့တဲ့ အဖြစ်အပျက်တစ်ခုက—",
        "တူညီတဲ့ မျက်နှာတစ်ခုကို ရှာတွေ့သွားတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "This Time She Wanted Her to Get Out", l: "ဖုန်းဖန်သား", w: ["မခင်စန်း"],
    g: "အဲဒီည မခင်စန်း မလွတ်မြောက်ခဲ့ဘူး။ ဒီတစ်ကြိမ်တော့ — သူ သွန်းကို လွတ်မြောက်စေချင်တာ။",
    p: "⚠️ AI REGISTER inside a phone screen. The 1987 woman, calm now, one arm extended to point "
      + "down a staircase — directing, not pleading.",
    u: ["အဲဒီည မခင်စန်း မလွတ်မြောက်ခဲ့ဘူး။",
        "ဒီတစ်ကြိမ်တော့—",
        "သူ သွန်းကို လွတ်မြောက်စေချင်တာ။"],
    c: [[2, "bigstinger"]] },

  { t: "She Ran the Route", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်းက AI ပြထားတဲ့ လမ်းကြောင်းအတိုင်း ပြေးထွက်တယ်။ လှေကား။ အောက်ထပ်။ လမ်းမ။",
    p: "A woman running down an apartment stairwell at night with a phone held out in front of her, "
      + "motion blur, the stair light strobing past.",
    u: ["သွန်းက AI ပြထားတဲ့ လမ်းကြောင်းအတိုင်း ပြေးထွက်တယ်။",
        "လှေကား။ အောက်ထပ်။ လမ်းမ။"],
    c: [[1, "heartbeat"]] },

  { t: "The Place Where She Stood", l: null, w: ["သွန်း"],
    g: "နောက်ဆုံးပုံမှာ မခင်စန်း ရပ်နေတဲ့နေရာအထိ။ အဲဒီနေရာရောက်တာနဲ့ — ဖုန်း Screen ဖြူသွားတယ်။",
    p: "A young woman stopping on an empty night street at a specific spot on the pavement, phone "
      + "in her hand, its screen blown out to pure white.",
    u: ["နောက်ဆုံးပုံမှာ မခင်စန်း ရပ်နေတဲ့နေရာအထိ။",
        "အဲဒီနေရာရောက်တာနဲ့— ဖုန်း Screen ဖြူသွားတယ်။",
        "ပြီးတော့— အားလုံး ပြီးသွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Month Later", l: null, w: ["ကိုဇော်လင်း"],
    g: "ကိုဇော်လင်းက သူ့အမေရဲ့အဖြစ်အပျက်ကို လူသိရှင်ကြား ပြောပြခဲ့တယ်။",
    p: "A man sitting at a table in daylight with the old photograph in front of him and a phone "
      + "beside it, calm for the first time in the film.",
    u: ["ကိုဇော်လင်းက သူ့အမေရဲ့အဖြစ်အပျက်ကို လူသိရှင်ကြား ပြောပြခဲ့တယ်။",
        "မခင်စန်းရဲ့ ဓာတ်ပုံကိုလည်း ပထမဆုံးအကြိမ် Facebook မှာ တင်ခဲ့တယ်။"] },

  { t: "She Was Saving Me", l: "ဖုန်းဖန်သား", w: ["မခင်စန်း"],
    g: "Caption က — “အမေက ကျွန်တော့်ကို စွန့်ပစ်ခဲ့တာ မဟုတ်ပါဘူး။ ကျွန်တော့်ကို ကယ်ခဲ့တာပါ။”",
    p: "A phone screen showing a social post: the old photograph of the 1987 woman, with a short "
      + "caption below it rendered as an unreadable line of text.",
    u: ["Caption က—",
        "“အမေက ကျွန်တော့်ကို စွန့်ပစ်ခဲ့တာ မဟုတ်ပါဘူး။ ကျွန်တော့်ကို ကယ်ခဲ့တာပါ။”"],
    c: [[1, "bigstinger"]] },

  { t: "She Never Did the Trend Again", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်းကတော့ AI 1980 Trend ကို လုံးဝ မလုပ်တော့ဘူး။ ထူးဆန်းတဲ့ပုံလည်း မထွက်တော့ဘူး။",
    p: "A woman sitting by a window in daylight with her phone face-down on the sill beside her, "
      + "looking out instead.",
    u: ["သွန်းကတော့ AI 1980 Trend ကို လုံးဝ မလုပ်တော့ဘူး။",
        "အဲဒီညကတည်းက ထူးဆန်းတဲ့ပုံလည်း မထွက်တော့ဘူး။"] },

  { t: "A New Trend", l: "ဖုန်းဖန်သား",
    g: "လအနည်းငယ်ကြာတော့ Trend အသစ်တစ်ခု ထပ်ပေါ်လာတယ် — “AI နဲ့ ကိုယ်အသက် ၈၀ ရောက်ရင် ဘယ်လိုပုံစံဖြစ်မလဲ?”",
    p: "A phone screen showing a feed of AI-aged portraits — ordinary people rendered as cheerful "
      + "eighty-year-olds, bright and harmless.",
    u: ["လအနည်းငယ်ကြာတော့—",
        "Trend အသစ်တစ်ခု ထပ်ပေါ်လာတယ်။",
        "“AI နဲ့ ကိုယ်အသက် ၈၀ ရောက်ရင် ဘယ်လိုပုံစံဖြစ်မလဲ?”"] },

  { t: "No Thanks", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "တစ်ယောက်က သွန်းကို Tag လုပ်တယ် — “နင်လည်းလုပ် 😂” သွန်း ရယ်ပြီး “တော်ပြီဟာ”",
    p: "A woman smiling faintly at her phone and typing a two-word reply, relaxed, in daylight.",
    u: ["သူငယ်ချင်းတွေ Group Chat ထဲမှာ ပုံတွေ ပို့နေကြတယ်။ တစ်ယောက်က သွန်းကို Tag လုပ်တယ်။",
        "“နင်လည်းလုပ် 😂”",
        "သွန်း ရယ်ပြီး— “တော်ပြီဟာ” လို့ Reply လုပ်လိုက်တယ်။"] },

  { t: "It Arrived Anyway", l: "ဖုန်းဖန်သား", w: ["သွန်း"],
    g: "ဒါပေမယ့် သူ ဘာမှ Generate မလုပ်ရသေးခင် — ဖုန်း Gallery ထဲကို ပုံတစ်ပုံ ဝင်လာတယ်။",
    p: "A phone gallery with a single new image appearing at the top of the grid on its own, "
      + "unprompted, a thumb frozen mid-scroll.",
    u: ["ဒါပေမယ့်—",
        "သူ ဘာမှ Generate မလုပ်ရသေးခင်—",
        "ဖုန်း Gallery ထဲကို ပုံတစ်ပုံ ဝင်လာတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Eighty Years Old, Smiling", l: null, w: ["သွန်း"],
    g: "အသက် ၈၀ အရွယ် သွန်း။ ဆံပင်ဖြူဖြူ။ မျက်နှာမှာ အရေးအကြောင်းတွေ။ ပြုံးနေတယ်။",
    p: "An AI-aged portrait of the same woman at eighty: white hair, deeply lined face, a warm "
      + "genuine smile. Modern clean rendering, no film grain — it looks kind.",
    u: ["အသက် ၈၀ အရွယ် သွန်း။ ဆံပင်ဖြူဖြူ။",
        "မျက်နှာမှာ အရေးအကြောင်းတွေ။ ပြုံးနေတယ်။"] },

  { t: "A Good Picture, She Thought", l: "သွန်းအခန်း", w: ["သွန်း"],
    g: "သွန်း အကြာကြီးကြည့်ပြီး သက်ပြင်းချလိုက်တယ်။ ဒီတစ်ခါတော့ ကောင်းတဲ့ပုံလို့ ထင်လိုက်တယ်။",
    p: "A woman looking at her phone with something like relief on her face, letting out a breath.",
    u: ["သွန်း အကြာကြီးကြည့်ပြီး— သက်ပြင်းချလိုက်တယ်။",
        "ဒီတစ်ခါတော့ ကောင်းတဲ့ပုံလို့ ထင်လိုက်တယ်။"] },

  { t: "A Calendar on the Wall", l: null,
    g: "ပုံကို Zoom ဆွဲကြည့်လိုက်တဲ့အခါ — နောက်က နံရံပေါ်မှာ Calendar တစ်ခုရှိနေတယ် — 2027။",
    p: "⚠️ TEXT PERMITTED. A pixelated zoom into the wall behind the aged woman: a paper calendar "
      + "whose year reads exactly \"2027\". That numeral is the only text in the image.",
    u: ["ဒါပေမယ့် ပုံကို Zoom ဆွဲကြည့်လိုက်တဲ့အခါ—",
        "အသက်ကြီးနေတဲ့ သွန်းရဲ့နောက်က နံရံပေါ်မှာ—",
        "Calendar တစ်ခုရှိနေတယ်။ 2027"],
    c: [[2, "bigstinger"]] },

  { t: "Age: 26", l: null,
    g: "ပုံအောက်မှာ AI က စာတစ်ကြောင်းပဲ ရေးထားတယ် — AGE: 26",
    p: "⚠️ TEXT PERMITTED. The caption strip beneath the generated image reading exactly \"AGE: 26\" "
      + "in a plain interface font. That string is the only text in the image.",
    u: ["နောက်နှစ်။ အသက် ၈၀ ရောက်ရမယ့်နှစ် မဟုတ်ဘူး။",
        "ပြီးတော့ ပုံအောက်မှာ AI က စာတစ်ကြောင်းပဲ ရေးထားတယ်။",
        "“AGE: 26”"],
    c: [[2, "bigstinger"]] },

  { t: "A Hospital Band", l: null, w: ["သွန်း"],
    g: "အဘွားအိုရဲ့ လက်တစ်ဖက်မှာ — ဆေးရုံလက်ပတ်တစ်ခု။",
    p: "Close on the aged woman's wrist in the generated portrait: a white plastic hospital "
      + "identification band around it, previously unnoticed at the edge of frame.",
    u: ["သွန်းရဲ့အပြုံး ပျောက်သွားတယ်။",
        "ပုံထဲက အသက် ၈၀ အရွယ် သူ့ကိုယ်သူကို ပြန်ကြည့်လိုက်တယ်။ ဒီတစ်ခါမှ သတိထားမိတယ်။",
        "အဘွားအိုရဲ့ လက်တစ်ဖက်မှာ— ဆေးရုံလက်ပတ်တစ်ခု။"],
    c: [[2, "bigstinger"]] },

  { t: "17 OCT 2027", l: null,
    g: "အဲဒီပေါ်မှာ Date တစ်ခု — 17 OCT 2027။ မခင်စန်း ပျောက်သွားခဲ့တဲ့ အောက်တိုဘာ ၁၇ ရက်။",
    p: "⚠️ TEXT PERMITTED. Extreme close-up of the hospital band showing a printed date reading "
      + "exactly \"17 OCT 2027\". That string is the only text in the image.",
    u: ["အဲဒီပေါ်မှာ Date တစ်ခု။",
        "17 OCT 2027",
        "မခင်စန်း ပျောက်သွားခဲ့တဲ့— အောက်တိုဘာ ၁၇ ရက်။"],
    c: [[2, "bigstinger"]] },

  { t: "Generating Your Next Memory", l: "ဖုန်းဖန်သား", w: ["သွန်း"],
    g: "နောက်ဆုံးပုံ — ဖုန်းက သူ့ဘာသာ နောက်ပုံတစ်ပုံ Generate လုပ်လာတယ်။ Generating your next memory…",
    p: "⚠️ TEXT PERMITTED. Final composition: a phone held in a woman's hand, the screen showing a "
      + "progress spinner with the line \"Generating your next memory…\" beneath it and nothing else. "
      + "Her face above it is out of focus and unreadable. That sentence is the only text.",
    u: ["ပြီးတော့ ဖုန်းက သူ့ဘာသာ နောက်ပုံတစ်ပုံ Generate လုပ်လာတယ်။",
        "Generating your next memory…"],
    c: [[1, "finalstinger"]] },
];
