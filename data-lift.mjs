/**
 * ၁၃ ထပ် — THE THIRTEENTH FLOOR
 *
 * Board for elevator13.txt. 50 shots.
 *
 * The thing that makes this story work is that almost all of it is WATCHED
 * rather than witnessed, so the board treats the CCTV view as the film's
 * primary camera rather than as an effect:
 *
 *   1. THE CAR ON THE MONITOR is one fixed framing — ceiling corner, wide lens,
 *      timestamp burned in — and it never varies. Everything frightening
 *      happens inside that unchanging rectangle, which is why the two shots
 *      where the rectangle behaves differently land at all.
 *   2. THE BUTTON PANEL is the second rhyme. Four inserts, identical framing,
 *      the 13 lit each time. At the last one there is no hand anywhere near it.
 *   3. FLOOR 13 IS ONLY EVER SEEN ON A SCREEN. Never a direct camera, not once,
 *      including the shot Ko Naing arrives on. The audience never goes there.
 *   4. The woman looks completely ordinary and rather pretty. Nothing about her
 *      is wrong except the smile, and the smile only reads at shot 44.
 *   5. Ordinary condo. Clean tile, working lights, a functioning building. A
 *      lift that is frightening because of one extra button.
 */

export const CAST = [
  { name: "ကိုနိုင်", en: "Ko Naing — the night guard, late thirties",
    prompt: "A Burmese man in his late thirties, solid build, medium-brown skin, a square face, "
      + "short cropped black hair, a neat moustache. Security uniform: a pale blue short-sleeved "
      + "shirt with plain epaulettes and no readable badge, dark navy trousers, a black belt, a "
      + "lanyard with a blank card, black shoes. Clear white sclera, natural dark brown irises. A "
      + "competent ordinary man doing a dull job — tired, never haunted-looking." },
  { name: "မိန်းကလေး", en: "The woman in white, about twenty-five",
    prompt: "A Burmese woman of about twenty-five, slender, a heart-shaped face, long straight "
      + "black hair worn loose past her shoulders. A plain white long-sleeved dress to mid-calf "
      + "and flat white shoes. ⚠️ SHE IS NOT A VISIBLE GHOST AND MUST NOT BE MADE TO LOOK LIKE "
      + "ONE: ordinary healthy skin tone, clear white sclera, natural dark brown irises with "
      + "normal black pupils, dry neat hair, no wounds, nothing transparent, no floating, no "
      + "obscured face. She is noticeably pretty and completely unremarkable. The only thing "
      + "wrong with her is her smile, and it is only shown once, at the end.",
    pose: "The subject stands facing the camera square on, full figure in frame, arms relaxed at "
      + "the sides, a small neutral closed-mouth expression that is NOT the smile" },
  { name: "လူငယ်", en: "The young resident, about twenty-four",
    prompt: "A Burmese man of about twenty-four, slim, medium-brown skin, an oval face, black hair "
      + "worn a little long and pushed back, clean-shaven. A dark hoodie over a T-shirt, jeans, "
      + "white trainers, earphones in, a phone in one hand. A resident coming home late — ordinary "
      + "and entirely alive." },
  { name: "ညစောင့်အသစ်", en: "The new night guard, about fifty",
    prompt: "A Burmese man of about fifty, lean, medium-brown skin, a narrow lined face, greying "
      + "hair, reading glasses on a cord. The same pale blue security shirt and navy trousers as "
      + "Ko Naing’s, still creased from being new. Careful and a little unsure — a man on his "
      + "first shift." },
];

export const LOCS = [
  { name: "ဓာတ်လှေကားအတွင်း", en: "Inside the lift car — master geometry plate",
    prompt: "THE MASTER GEOMETRY PLATE FOR THIS FILM. Most of the story happens inside this one "
      + "lift car and is seen from one fixed camera, so establish both at once. The interior of an "
      + "ordinary modern condominium lift, photographed from the CEILING CORNER above the doors, "
      + "wide lens, looking down and back across the whole car — the standard security-camera "
      + "position. FAR WALL of the car: a large mirror panel. SIDE WALLS: brushed stainless steel. "
      + "FLOOR: polished grey stone tile. DOORS at the bottom of frame, closed. ON THE RIGHT-HAND "
      + "WALL beside the doors: a vertical brushed-steel button panel whose floor numbers are "
      + "WESTERN ARABIC NUMERALS, never Burmese. Fluorescent ceiling panel, "
      + "clean and bright, everything working. Empty of people for this plate. ⚠️ An ordinary "
      + "well-maintained lift — no flicker, no grime, no rust, no horror dressing." },
  { name: "ခလုတ်တန်း", en: "The button panel",
    prompt: "A vertical stainless-steel lift button panel photographed square on and close. Round "
      + "illuminated buttons in a single column. ⚠️ THE NUMBERING IS THE WHOLE POINT: the column "
      + "runs upward from B and G through the floors to 12, and 12 IS THE TOP BUTTON. There is no "
      + "13 and no space left for one. Below the column, an alarm button and a door-open symbol. "
      + "⚠️ ALL FLOOR NUMBERS ARE WESTERN ARABIC NUMERALS — 7, 6, 5, 4, 3, 2, 1, B1, B2 … B13 — "
      + "embossed, and unlit in this plate. No Burmese numerals anywhere on the panel. Brushed "
      + "metal, clean, "
      + "ordinary, slightly worn around the most-used buttons." },
  { name: "စောင့်ခန်း", en: "The security room, basement level",
    prompt: "A small windowless security room in a condominium basement. A desk with a bank of six "
      + "CCTV monitors in two rows, a keyboard, a logbook, a thermos and a mug, a swivel chair, a "
      + "wall of labelled key hooks, a two-way radio in a charger. Painted cream, fluorescent "
      + "ceiling tube, bare concrete floor, a single door out to the basement lobby. Empty of "
      + "people for this plate. ⚠️ A working staff room, not a dungeon — clean, lit, mundane." },
  { name: "လိပ်ဘီ", en: "A lift lobby on a residential floor",
    prompt: "The lift lobby of an ordinary condominium floor: two lift doors in brushed steel side "
      + "by side, a call panel between them, a floor-number plate on the wall, polished tile "
      + "floor, cream walls, a fire door to the stairs at one end and a corridor of flat doors "
      + "running away at the other. Recessed ceiling lights, all working. Empty of people. Clean "
      + "and completely unremarkable." },
];

/** Composition vocabulary. One per shot, stated first and alone. */
const CAM = {
  monitor: 'THE CAR ON THE MONITOR. The fixed security view of the lift interior — ceiling corner above the doors, wide lens, looking down and back across the car as in the master plate — presented as CCTV: slightly soft, mild wide-angle distortion, low contrast, a small burned-in timestamp in one corner, monochrome or heavily desaturated. ⚠️ This framing NEVER changes anywhere in the film. Reproduce it exactly.',
  screen: 'THE MONITOR ITSELF. Camera in the security room at seated eye height, framed on the monitor as a physical object — the bezel visible, the room reflected faintly in the glass, Ko Naing’s shoulder or the desk edge in frame.',
  panel: 'THE BUTTON PANEL. Insert square on to the panel at close range, the column of buttons filling the frame. ⚠️ ALL FLOOR NUMBERS ARE WESTERN ARABIC NUMERALS — 7, 6, 5, 4, 3, 2, 1, B1, B2 … B13 — never Burmese numerals. Reproduce this framing identically every time it recurs.',
  guard: 'IN THE SECURITY ROOM. Camera at seated eye height beside the desk, the bank of monitors as the main light source on his face.',
  guardwide: 'THE SECURITY ROOM WIDE. Camera at standing height by the door, the desk and the whole bank of monitors in frame.',
  face: 'CLOSE ON THE FACE. Camera at eye height, head-and-shoulders crop, natural light from whatever is really in the room.',
  lobby: 'IN THE LIFT LOBBY. Camera at standing height facing the lift doors.',
  car: 'INSIDE THE CAR, DIRECT. Camera at chest height inside the lift itself — NOT the security view. Used only where the story is physically in there.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
  floorlamp: 'THE FLOOR INDICATOR. Insert on the illuminated floor-number display above the lift doors, the numerals filling the frame. ⚠️ WESTERN ARABIC NUMERALS on an ordinary segmented display, never Burmese.',
};

export const SCENES = [
  // ── I · THE JOB ───────────────────────────────────────────────────────────
  { t: "Twelve Floors", l: "စောင့်ခန်း", k: "guardwide", w: ["ကိုနိုင်"],
    g: "ကိုနိုင်က ကွန်ဒိုတစ်ခုမှာ ညစောင့်။ ဒီအဆောက်အဦမှာ ၁၂ ထပ်ပဲ ရှိတယ်။",
    p: "Ko Naing alone in the security room at night, leaning back in the swivel chair in front of "
      + "the bank of six monitors, a mug beside the logbook. Ordinary, bored, awake. The monitors "
      + "are the brightest thing in the room.",
    u: ["ကိုနိုင်က ကွန်ဒိုတစ်ခုမှာ ညစောင့်အလုပ်လုပ်တယ်။",
        "ဒီအဆောက်အဦမှာ— ၁၂ ထပ်ပဲရှိတယ်။"] },

  { t: "He Checked the Lifts Every Night", l: "ခလုတ်တန်း", k: "panel", rev: "panel 1 of 4",
    g: "⚠️ ခလုတ်တန်းပုံစံ — လေးခါ ပေါ်မယ်။ အပေါ်ဆုံးက ၁၂ ပဲ။ ၁၃ မရှိဘူး။",
    p: "OCCURRENCE 1 OF 4 OF THE PANEL INSERT. The button panel square on and close, all buttons "
      + "unlit. ⚠️ ESTABLISH THE NUMBERING CLEARLY AND HONESTLY: the column runs up from B and G "
      + "to 12, and 12 IS THE TOP BUTTON with nothing above it and no gap. This shot is the "
      + "evidence every later shot contradicts, so it has to be readable.",
    u: ["အဲဒါကို သူသေချာသိတယ်။",
        "ဘာလို့လဲဆိုတော့— ညတိုင်း ဓာတ်လှေကားတွေ စစ်ရတာ သူ့အလုပ်။"] },

  // ── II · THE FIRST NIGHT ──────────────────────────────────────────────────
  { t: "Two In the Morning", l: "ဓာတ်လှေကားအတွင်း", k: "monitor", rev: "monitor 1 of 3",
    g: "⚠️ မော်နီတာပုံစံ — တစ်ခါမှ မပြောင်းရဘူး။ မနက် ၂ နာရီကျော်၊ မိန်းကလေးတစ်ယောက် တစ်ယောက်တည်း ရပ်နေတယ်။",
    p: "OCCURRENCE 1 OF 3 OF THE MONITOR FRAMING. The CCTV view of the car with one woman standing "
      + "alone in it, roughly centre, facing the doors. White dress, long loose hair. She is doing "
      + "absolutely nothing unusual — a person waiting in a lift. ⚠️ Everything about this framing "
      + "is fixed here and must be identical every single time the car appears.",
    u: ["တစ်ည— မနက် ၂ နာရီကျော်။",
        "စောင့်ကြည့်ကင်မရာမှာ— အမျိုးသမီးတစ်ယောက် ဓာတ်လှေကားထဲ တစ်ယောက်တည်း ရပ်နေတာ မြင်တယ်။"] },

  { t: "Just an Ordinary Girl", l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["မိန်းကလေး"],
    g: "အဖြူရောင်ဝတ်စုံ။ ဆံပင်ရှည်။ ပုံမှန်မိန်းကလေးတစ်ယောက်လိုပဲ။ သူ ခလုတ်တစ်ခု နှိပ်တယ်။",
    p: "The same CCTV framing. The woman has turned slightly and is reaching to the panel on the "
      + "right-hand wall. ⚠️ SHE MUST READ AS COMPLETELY NORMAL AT THIS POINT — a young woman in a "
      + "white dress going up to her flat. No pallor, no distortion, no obscured face, nothing "
      + "hovering. The camera resolution is the only thing softening her.",
    u: ["အဖြူရောင်ဝတ်စုံ။ ဆံပင်ရှည်။ ပုံမှန်မိန်းကလေးတစ်ယောက်လိုပဲ။",
        "သူ ဓာတ်လှေကားခလုတ်တစ်ခု နှိပ်တယ်။"] },

  { t: "Thirteen", c: [[2, "bigstinger"]], l: "ခလုတ်တန်း", k: "panel", rev: "panel 2 of 4",
    g: "⚠️ ခလုတ်တန်းပုံစံ ဒုတိယအကြိမ် — **၁၃** မီးလင်းလာတယ်။ ဒီအဆောက်အဦမှာ ၁၃ ထပ် မရှိဘူး။",
    p: "OCCURRENCE 2 OF 4. The identical panel insert — and now there is a lit button ABOVE the 12, "
      + "in the place where the first occurrence showed bare metal. It is glowing exactly like a "
      + "real button, numbered 13 in WESTERN ARABIC NUMERALS like every other button on the panel, "
      + "and it looks as though it has always been "
      + "there. Nothing else on the panel is lit.",
    u: ["ကိုနိုင် မျက်နှာပြင်ကို စိုက်ကြည့်နေတယ်။",
        "ခလုတ်တန်းမှာ— **၁၃** မီးလင်းလာတယ်။",
        "ကိုနိုင် မျက်မှောင်ကျုံ့သွားတယ်။ ဒီအဆောက်အဦမှာ ၁၃ ထပ် မရှိဘူး။"] },

  { t: "Eight. Nine. Ten. Eleven. Twelve.", c: [[1, "bigstinger"]], l: "လိပ်ဘီ", k: "floorlamp",
    g: "အထပ်ပြမီးက ၈၊ ၉၊ ၁၀၊ ၁၁၊ ၁၂ — ပြီးတော့ ၁၃။",
    p: "Insert on the illuminated floor indicator above the lift doors, the numeral filling the "
      + "frame, currently reading 12. ⚠️ THE DISPLAY IS A SIMPLE SEGMENTED NUMERAL and it is about "
      + "to show a number the building does not have. Ordinary amber-on-black, clean, working.",
    u: [{ text: "ဓာတ်လှေကားက— ၈။ ၉။ ၁၀။ ၁၁။ ၁၂။",
          say: "ဓာတ်လှေကားက ရှစ်ထပ်၊ ကိုးထပ်၊ ဆယ်ထပ်၊ ဆယ့်တစ်ထပ်၊ ဆယ့်နှစ်ထပ်။" },
        { text: "ပြီးတော့— ၁၃။",
          say: "ပြီးတော့— ဆယ့်သုံးထပ်။" }] },

  { t: "The Feed Broke Up", l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "တံခါး ပွင့်သွားတယ်။ ကင်မရာပုံ ရုတ်တရက် လှုပ်ယမ်းပျောက်ကွယ်သွားတယ်။",
    p: "The same CCTV framing at the instant the doors begin to open — and the image tearing: "
      + "horizontal bands of noise, blocky compression breaking across the frame, the picture "
      + "rolling. ⚠️ It is a video signal failing, not an effect. Nothing supernatural is visible "
      + "in the corruption — no face, no shape in the static.",
    u: ["တံခါး ပွင့်သွားတယ်။",
        "ကင်မရာပုံ ရုတ်တရက် လှုပ်ယမ်းပျောက်ကွယ်သွားတယ်။"] },

  { t: "Nobody Was In It", c: [[1, "stinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "ခဏကြာတော့ ပြန်မြင်ရတယ်။ ဓာတ်လှေကားထဲမှာ ဘယ်သူမှ မရှိတော့ဘူး။",
    p: "The identical CCTV framing restored and clean. The car is completely empty — doors closed, "
      + "floor bare, mirror showing nothing but the far wall. It is the same picture as the "
      + "master plate, and that is what is wrong with it.",
    u: ["ခဏကြာတော့— ပြန်မြင်ရတယ်။",
        "ဓာတ်လှေကားထဲမှာ— ဘယ်သူမှ မရှိတော့ဘူး။"] },

  { t: "Nothing Else Happened", l: "စောင့်ခန်း", k: "guard", w: ["ကိုနိုင်"],
    g: "ကိုနိုင် စိတ်မသက်မသာဖြစ်သွားတယ်။ ဒါပေမယ့် အဲဒီည နောက်ထပ် ဘာမှမဖြစ်ဘူး။",
    p: "Ko Naing at the desk, leaned forward now rather than back, one hand still on the mouse, "
      + "looking at a monitor showing an empty lift. Monitor light on his face. He has not decided "
      + "what to do about it and the shift is nearly over.",
    u: ["ကိုနိုင် စိတ်မသက်မသာဖြစ်သွားတယ်။",
        "ဒါပေမယ့် အဲဒီည နောက်ထပ် ဘာမှမဖြစ်ဘူး။"] },

  // ── III · THE SECOND NIGHT ────────────────────────────────────────────────
  { t: "The Same Woman", l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["မိန်းကလေး"],
    g: "နောက်နေ့ ည ၂ နာရီကျော်။ မနေ့ကလူပဲ။ အဖြူရောင်ဝတ်စုံ။",
    p: "The identical CCTV framing on the following night. The same woman, the same white dress, "
      + "standing in almost the same place. ⚠️ SHE IS UNCHANGED FROM THE NIGHT BEFORE in every "
      + "respect — same dress, same hair, same posture. That she has not changed at all is the "
      + "only thing the shot is saying.",
    u: ["နောက်နေ့— ည ၂ နာရီကျော်။ အမျိုးသမီးတစ်ယောက် ထပ်ဝင်လာတယ်။",
        "မနေ့ကလူပဲ။ အဖြူရောင်ဝတ်စုံ။"] },

  { t: "There Was Somebody Else In There", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    w: ["မိန်းကလေး", "လူငယ်"],
    g: "ဒီတစ်ခါ ဓာတ်လှေကားထဲမှာ လူငယ်တစ်ယောက်ပါ ရှိနေတယ်။ သူ ဖုန်းကြည့်နေတယ်။",
    p: "The identical CCTV framing, now with two people in the car: the woman standing near the "
      + "panel on the RIGHT, and a young man in a hoodie in the LEFT half, head down over his "
      + "phone with earphones in. ⚠️ He is not looking at her and there is nothing in his posture "
      + "to suggest he knows she is there.",
    u: ["ဒီတစ်ခါ— ဓာတ်လှေကားထဲမှာ အမျိုးသားတစ်ယောက်ပါ ရှိနေတယ်။",
        "ဒီကွန်ဒိုမှာနေတဲ့ လူငယ်တစ်ယောက်။ သူ ဖုန်းကြည့်နေတယ်။ မိန်းကလေးကို သတိမထားမိသလိုပဲ။"] },

  { t: "She Pressed It Again", l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "မိန်းကလေးက ၁၃ ကို နှိပ်တယ်။ ဓာတ်လှေကား တက်သွားတယ်။",
    p: "The identical CCTV framing. The woman’s arm is extended to the panel and coming back to "
      + "her side; the young man has not moved. The doors are closing. An entirely ordinary two "
      + "seconds of lift footage.",
    u: ["မိန်းကလေးက— ၁၃ ကို နှိပ်တယ်။",
        "ဓာတ်လှေကား တက်သွားတယ်။"] },

  // ── IV · THE INTERCOM ─────────────────────────────────────────────────────
  { t: "Get Out at Twelve", c: [[1, "stinger"]], l: "စောင့်ခန်း", k: "guard", w: ["ကိုနိုင်"],
    g: "ကိုနိုင် ချက်ချင်း အသံဆက်သွယ်စက်နဲ့ ခေါ်တယ် — “ညီလေး၊ ၁၂ ထပ်ရောက်ရင် ဆင်းလိုက်”",
    p: "Ko Naing half out of the chair with the intercom handset pressed to his mouth, his other "
      + "hand flat on the desk, eyes locked on the monitor. The first urgent movement he has made "
      + "in the film.",
    u: ["ကိုနိုင် ချက်ချင်း အသံဆက်သွယ်စက်နဲ့ ခေါ်တယ်။",
        "“ညီလေး” “၁၂ ထပ်ရောက်ရင် ဆင်းလိုက်”"] },

  { t: "Why", l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["လူငယ်", "မိန်းကလေး"],
    g: "လူငယ်က ကင်မရာဘက် လှည့်ကြည့်တယ် — “ဘာဖြစ်လို့လဲ” “ဒီမှာ ၁၃ ထပ် မရှိဘူး”",
    p: "The identical CCTV framing. The young man has taken one earphone out and tilted his head "
      + "up toward the camera in the ceiling corner, speaking to it. The woman is still beside the "
      + "panel, motionless, not reacting to any of this.",
    u: ["လူငယ်က ကင်မရာဘက် လှည့်ကြည့်တယ်။ “ဘာဖြစ်လို့လဲ”",
        "ကိုနိုင် ပြောတယ်— “ဒီမှာ ၁၃ ထပ် မရှိဘူး”"] },

  { t: "He Looked at the Panel", c: [[2, "stinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "လူငယ်ရဲ့မျက်နှာ ပြောင်းသွားတယ်။ သူ ခလုတ်တန်းကို ကြည့်တယ်။ ၁၃ မီးလင်းနေတယ်။",
    p: "The identical CCTV framing. The young man has turned from the camera to the panel, gone "
      + "still with the phone forgotten at his side, and then turned his whole body toward the "
      + "woman and backed half a step into the corner of the car. She has not moved and is still "
      + "facing the doors. ⚠️ Whatever he is seeing, the camera does not show it — she looks "
      + "exactly as she has looked in every previous shot.",
    u: ["လူငယ်ရဲ့မျက်နှာ ပြောင်းသွားတယ်။ သူ ခလုတ်တန်းကို ကြည့်တယ်။ ၁၃ မီးလင်းနေတယ်။",
        "ပြီးတော့— ဘေးက မိန်းကလေးကို လှည့်ကြည့်တယ်။ အဲဒီအချိန်— သူ့မျက်နှာ ပိုဖြူသွားတယ်။",
        "“ဦး…” “ဒီမှာ…” စကားမပြီးခင်—"] },

  // ── V · THIRTEEN ──────────────────────────────────────────────────────────
  { t: "Outside Was Dark", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "ဓာတ်လှေကား ၁၃ ကို ရောက်တယ်။ တံခါး ပွင့်တယ်။ အပြင်မှာ အမှောင်ပဲ။ မီးတစ်လုံးမှ မရှိဘူး။",
    p: "The identical CCTV framing with the doors standing open at the bottom of frame — and "
      + "beyond them, nothing. Not a lobby, not a corridor: a flat rectangle of black that the "
      + "car’s own light does not reach into at all. ⚠️ Expose for the lit car so the doorway is "
      + "genuinely underexposed. Nothing is visible out there and nothing is ever going to be.",
    u: ["ဓာတ်လှေကား ၁၃ ကို ရောက်တယ်။ တံခါး ပွင့်တယ်။",
        "အပြင်မှာ— အမှောင်ပဲ။ မီးတစ်လုံးမှ မရှိဘူး။"] },

  { t: "She Walked Out. He Didn't.", l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["လူငယ်"],
    g: "မိန်းကလေး ထွက်သွားတယ်။ လူငယ်က မထွက်ဘူး။",
    p: "The identical CCTV framing. The woman is halfway through the open doors, already partly "
      + "swallowed by the black beyond them, unhurried. The young man is pressed into the far "
      + "corner of the car with both hands flat against the mirror behind him.",
    u: ["မိန်းကလေး ထွက်သွားတယ်။",
        "လူငယ်က မထွက်ဘူး။"] },

  { t: "A Hand Came Out of the Dark", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "တံခါးပိတ်တော့မယ့်အချိန် အမှောင်ထဲကနေ လက်တစ်ဖက် ထွက်လာတယ်။ လူငယ်ရဲ့လက်ကို ဖမ်းတယ်။",
    p: "The identical CCTV framing, the doors nearly shut. One bare arm has come through the "
      + "closing gap out of the black and has taken hold of the young man’s wrist. ⚠️ THE ARM IS "
      + "ALL THAT EXISTS: it enters from the dark and nothing behind it is visible — no shoulder, "
      + "no body, no face, no second arm. Do not light the doorway to explain it.",
    u: ["တံခါးပိတ်တော့မယ့်အချိန်— အမှောင်ထဲကနေ လက်တစ်ဖက် ထွက်လာတယ်။",
        "လူငယ်ရဲ့လက်ကို ဖမ်းတယ်။ သူ အော်လိုက်တယ်။"] },

  { t: "The Picture Went", l: "စောင့်ခန်း", k: "screen", w: ["ကိုနိုင်"],
    g: "ကင်မရာပုံ ရုတ်တရက် ပျောက်သွားတယ်။ ကိုနိုင် စောင့်ခန်းထဲကနေ ပြေးထွက်တယ်။",
    p: "The monitor as a physical object on the desk, its screen now dead black with a small "
      + "NO SIGNAL indicator, the room and the empty swivel chair reflected in the glass. The "
      + "chair is still turning. Ko Naing is already out of frame.",
    u: ["ကင်မရာပုံ ရုတ်တရက် ပျောက်သွားတယ်။",
        "ကိုနိုင် စောင့်ခန်းထဲကနေ ပြေးထွက်တယ်။"] },

  // ── VI · THE TWELFTH FLOOR ────────────────────────────────────────────────
  { t: "He Ran Up to Twelve", l: "လိပ်ဘီ", k: "lobby", w: ["ကိုနိုင်"],
    g: "လှေကားနဲ့ ၁၂ ထပ်အထိ တက်တယ်။ ဓာတ်လှေကားကို ခေါ်တယ်။",
    p: "Ko Naing in the twelfth-floor lift lobby, having just come through the fire door, one hand "
      + "braced on his knee and the other pressing the call button. Bright ordinary lobby lighting. "
      + "He has run twelve flights.",
    u: ["လှေကားနဲ့ ၁၂ ထပ်အထိ တက်တယ်။",
        "ဓာတ်လှေကားကို ခေါ်တယ်။"] },

  { t: "Only a Phone", l: "ဓာတ်လှေကားအတွင်း", k: "car",
    g: "တံခါးပွင့်လာတယ်။ အထဲမှာ လူငယ် မရှိဘူး။ ဖုန်းတစ်လုံးပဲ ကျနေတယ်။",
    p: "Inside the car for the first time from a direct camera at chest height, looking in from "
      + "the open doors. Empty and brightly lit. A phone lies face down on the stone floor near "
      + "the centre, screen dark. Nothing else.",
    u: ["တံခါးပွင့်လာတယ်။ အထဲမှာ— လူငယ် မရှိဘူး။",
        "ဖုန်းတစ်လုံးပဲ ကျနေတယ်။"] },

  { t: "Wet Footprints", c: [[2, "stinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "insert",
    g: "ခြေရာစိုစိုတွေ ဓာတ်လှေကားနောက်နံရံဘက်ကို သွားပြီး အဲဒီနေရာမှာပဲ ရပ်သွားတယ်။",
    p: "Low insert across the lift floor. A short trail of wet bare footprints crosses the polished "
      + "stone from the centre of the car to the MIRRORED BACK WALL — and stops flush against it. "
      + "⚠️ There is no last half-print, no smear, no mark on the mirror. They simply end at a "
      + "solid wall. The prints are plain water, not dark and not coloured.",
    u: ["ပြီးတော့— ခြေရာစိုစိုတွေ။",
        "ဓာတ်လှေကားနောက်နံရံဘက်ကို သွားပြီး— အဲဒီနေရာမှာပဲ ရပ်သွားတယ်။",
        "ကိုနိုင် တစ်ကိုယ်လုံး အေးသွားတယ်။"] },

  // ── VII · THE FOOTAGE ─────────────────────────────────────────────────────
  { t: "They Reviewed the Tape", l: "စောင့်ခန်း", k: "guardwide", w: ["ကိုနိုင်"],
    g: "နောက်နေ့ အဆောက်အဦတာဝန်ရှိသူတွေကို ပြောတယ်။ သူတို့ ကင်မရာမှတ်တမ်း ပြန်ကြည့်တယ်။",
    p: "The security room in daylight hours with three people in it: Ko Naing standing behind the "
      + "chair and two building staff in office clothes at the desk, one scrubbing through footage. "
      + "Overhead lights on. Completely mundane and slightly bureaucratic.",
    u: ["နောက်နေ့— အဆောက်အဦတာဝန်ရှိသူတွေကို ပြောတယ်။",
        "သူတို့ ကင်မရာမှတ်တမ်း ပြန်ကြည့်တယ်။"] },

  { t: "There Was No Woman", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["လူငယ်"],
    g: "မှတ်တမ်းထဲမှာ အဖြူရောင်ဝတ်စုံနဲ့ မိန်းကလေး မရှိဘူး။ လူငယ်တစ်ယောက်တည်းပဲ။",
    p: "The identical CCTV framing of the same moment as before — the young man in the left half "
      + "with his phone — ⚠️ AND THE SPACE BESIDE THE PANEL IS EMPTY. Same timestamp, same posture, "
      + "same everything, with one person removed. The composition should look subtly unbalanced "
      + "because of the hole where she was.",
    u: ["ဒါပေမယ့်— အဖြူရောင်ဝတ်စုံနဲ့ မိန်းကလေး မရှိဘူး။",
        "လူငယ်တစ်ယောက်တည်း ဓာတ်လှေကားထဲ ဝင်လာတာပဲ မြင်ရတယ်။"] },

  { t: "Past Twelve the Picture Ended", l: "စောင့်ခန်း", k: "screen",
    g: "၁၂ ထပ်ကျော်သွားတဲ့အချိန် ပုံပျောက်သွားတယ်။ လူငယ်ကိုလည်း ပြန်မတွေ့တော့ဘူး။",
    p: "The monitor as an object, the playback stopped on a frame of pure noise, a scrub bar and "
      + "timestamp along the bottom. Somebody’s hand rests on the mouse at the edge of frame. The "
      + "recording has nothing after this and everyone in the room can see that.",
    u: ["ပြီးတော့— ၁၂ ထပ်ကျော်သွားတဲ့အချိန် ပုံပျောက်သွားတယ်။",
        "လူငယ်ကိုလည်း ပြန်မတွေ့တော့ဘူး။"] },

  { t: "One Shift Left", l: "စောင့်ခန်း", k: "guard", w: ["ကိုနိုင်"],
    g: "ကိုနိုင် အလုပ်ထွက်ဖို့ ဆုံးဖြတ်လိုက်တယ်။ ဒါပေမယ့် နောက်ဆုံးတစ်ည တာဝန်ကျန်သေးတယ်။",
    p: "Ko Naing at the desk at night writing in the logbook, a folded resignation letter under "
      + "his elbow. He is working his notice and he does not want to be here.",
    u: ["ကိုနိုင် အလုပ်ထွက်ဖို့ ဆုံးဖြတ်လိုက်တယ်။",
        "ဒါပေမယ့်— နောက်ဆုံးတစ်ည တာဝန်ကျန်သေးတယ်။"] },

  // ── VIII · TWO O'CLOCK EXACTLY ────────────────────────────────────────────
  { t: "1:59", l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "မနက် ၁ နာရီ ၅၉ မိနစ်။ ဓာတ်လှေကားရှေ့မှာ ဘယ်သူမှ မရှိဘူး။",
    p: "The identical CCTV framing of a completely empty car, doors closed, exactly as in the "
      + "master plate. ⚠️ THE TIMESTAMP IS THE SUBJECT OF THIS SHOT — it reads 01:59 and it is the "
      + "one legible thing in frame.",
    u: ["မနက် ၁ နာရီ ၅၉ မိနစ်။ ကိုနိုင် မျက်နှာပြင်ကို ကြည့်နေတယ်။",
        "ဓာတ်လှေကားရှေ့မှာ ဘယ်သူမှ မရှိဘူး။"] },

  { t: "She Was Already Inside", c: [[2, "bigstinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["မိန်းကလေး"], rev: "monitor 2 of 3",
    g: "⚠️ မော်နီတာပုံစံ ဒုတိယအကြိမ် — ၂ နာရီတိတိ။ တံခါးပွင့်တော့ သူ အထဲမှာ ရပ်နေပြီးသား။",
    p: "OCCURRENCE 2 OF 3. The identical CCTV framing one minute later, timestamp reading 02:00, "
      + "the doors now open — and the woman is standing in the centre of the car facing the "
      + "camera. ⚠️ SHE DID NOT WALK IN. The doors have only just opened and she is already "
      + "positioned and still, as though the car was never empty. Nothing marks the transition.",
    u: ["၂ နာရီတိတိ။ တင်း— ဓာတ်လှေကားတံခါး ပွင့်လာတယ်။",
        "အဖြူရောင်ဝတ်စုံနဲ့ မိန်းကလေးက— အထဲမှာ ရပ်နေပြီးသား။",
        "သူ အပြင်က ဝင်လာတာ မဟုတ်ဘူး။ အစကတည်းက အထဲမှာ ရှိနေသလိုပဲ။"] },

  { t: "She Looked Straight at the Camera", l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    w: ["မိန်းကလေး"],
    g: "သူ ကင်မရာကို တည့်တည့်ကြည့်တယ်။ ပြီးတော့ လက်မြှောက်ပြီး ၁၃ ကို နှိပ်တယ်။",
    p: "The identical CCTV framing. The woman has tilted her face up to the ceiling corner and is "
      + "looking directly into the lens — the first time anyone in this film has looked at the "
      + "camera rather than near it. One arm is raised toward the lens with the index finger "
      + "curled inward in an unmistakable come-here. ⚠️ Play it as a small, almost friendly "
      + "gesture; her expression stays neutral and pleasant throughout.",
    u: ["သူ ကင်မရာကို တည့်တည့်ကြည့်တယ်။",
        "ပြီးတော့— လက်မြှောက်တယ်။ ၁၃ ကို နှိပ်တယ်။ ကိုနိုင် မျက်လုံးမခွာနိုင်ဘူး။",
        "မိန်းကလေးက ကင်မရာကို ကြည့်ရင်း— လက်ညှိုးကွေးပြီး လာခဲ့ဆိုသလို ခေါ်တယ်။"] },

  // ── IX · THE LIFT COMES DOWN ──────────────────────────────────────────────
  { t: "The Lift Outside the Door", l: "စောင့်ခန်း", k: "face", w: ["ကိုနိုင်"],
    g: "အဲဒီအချိန် စောင့်ခန်းအပြင်က ဓာတ်လှေကားသံ မြည်လာတယ်။ တင်း—",
    p: "Close on Ko Naing in the security room with his head turned away from the monitors toward "
      + "the closed door of the room, monitor light still on the side of his face. The sound he "
      + "has just heard is on the other side of it.",
    u: ["အဲဒီအချိန်— စောင့်ခန်းအပြင်က ဓာတ်လှေကားသံ မြည်လာတယ်။ တင်း—",
        "ကိုနိုင် တောင့်သွားတယ်။ စောင့်ခန်းက မြေအောက်ထပ်မှာ။",
        "အထပ်ပြမီးကို ကြည့်တယ်။ မြေအောက်ထပ်ကို ရောက်နေပြီ။"] },

  { t: "Empty, and Thirteen Lit", c: [[2, "bigstinger"]], l: "ခလုတ်တန်း", k: "panel",
    rev: "panel 3 of 4",
    g: "⚠️ ခလုတ်တန်းပုံစံ တတိယအကြိမ် — အထဲမှာ ဘယ်သူမှ မရှိဘူး။ ဒါပေမယ့် ၁၃ ခလုတ်က မီးလင်းနေတယ်။",
    p: "OCCURRENCE 3 OF 4. The identical panel insert, seen through the open doors of an empty car. "
      + "The 13 button above the 12 is lit. ⚠️ NO HAND, NO ARM, NO PERSON ANYWHERE IN FRAME — just "
      + "the panel, and a floor selected by nobody.",
    u: ["တံခါး ပွင့်လာတယ်။ အထဲမှာ— ဘယ်သူမှ မရှိဘူး။",
        "ဒါပေမယ့်— ၁၃ ခလုတ်က မီးလင်းနေတယ်။",
        "ကိုနိုင် နောက်ဆုတ်သွားတယ်။"] },

  { t: "One Goes, One Comes", c: [[1, "stinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "car",
    g: "ဓာတ်လှေကားအတွင်းက အသံထွက်စက်ကနေ မိန်းမအသံ — “တစ်ယောက်ပျောက်သွားရင်… တစ်ယောက်လာရမယ်”",
    p: "Direct camera at chest height looking into the empty lit car from outside, framed on the "
      + "small perforated speaker grille high in the side wall. ⚠️ The car is empty and stays "
      + "empty. The voice comes from a piece of building hardware.",
    u: ["ဓာတ်လှေကားအတွင်းက အသံထွက်စက်ကနေ— မိန်းမအသံ တိုးတိုးလေး ကြားလာတယ်။",
        "“တစ်ယောက်ပျောက်သွားရင်…” ခဏတိတ်တယ်။ “တစ်ယောက်လာရမယ်”"] },

  { t: "The Door Shut Itself", l: "စောင့်ခန်း", k: "guardwide", w: ["ကိုနိုင်"],
    g: "ကိုနိုင် ပြေးမလို့လုပ်တယ်။ စောင့်ခန်းတံခါးက သူ့အလိုလို ပိတ်သွားတယ်။ မီးတွေလည်း ပျောက်သွားတယ်။",
    p: "The security room wide, its door now shut, the ceiling tube dead and the room in darkness "
      + "except for the monitors. Ko Naing is caught mid-stride two steps from a door he is not "
      + "going to reach. ⚠️ Nothing is holding the door; nobody is behind him.",
    u: ["ကိုနိုင် ပြေးမလို့လုပ်တယ်။ စောင့်ခန်းတံခါးက သူ့အလိုလို ပိတ်သွားတယ်။",
        "မီးတွေလည်း ပျောက်သွားတယ်။ ဓာတ်လှေကားအတွင်းက အလင်းပဲ ကျန်တယ်။"] },

  // ── X · THE THIRTEENTH FLOOR, ON A SCREEN ─────────────────────────────────
  { t: "A Corridor He Had Never Seen", l: "စောင့်ခန်း", k: "screen",
    g: "⚠️ ၁၃ ထပ်ကို မော်နီတာပေါ်မှာပဲ မြင်ရမယ် — တစ်ခါမှ တိုက်ရိုက် မရိုက်ရဘူး။",
    p: "⚠️ FLOOR 13 IS ONLY EVER SEEN ON A SCREEN, INCLUDING HERE. The monitor as a physical "
      + "object in the dark room, showing a CCTV view of a long corridor that does not exist in "
      + "this building: unlit, receding much further than the building is wide, many flat doors "
      + "down both sides. In front of every door a single person stands facing it, motionless, "
      + "head lowered — different builds and clothes, ordinary people. ⚠️ NO FACES ARE VISIBLE; "
      + "every head is down and the resolution does the rest. Grainy, low contrast, a timestamp "
      + "in the corner. The room around the monitor is black.",
    u: ["ပြီးတော့— စောင့်ကြည့်မျက်နှာပြင်မှာ ပုံတစ်ခု ပေါ်လာတယ်။",
        "၁၃ ထပ်။ သူ မမြင်ဖူးတဲ့ လမ်းကြောင်းရှည်တစ်ခု။ အမှောင်ထဲမှာ— တံခါးတွေ အများကြီး။",
        "တံခါးတစ်ချပ်ချင်းစီရှေ့မှာ— လူတစ်ယောက်စီ ရပ်နေတယ်။ ပျောက်သွားခဲ့တဲ့လူတွေ။ အားလုံး ခေါင်းငုံ့ထားတယ်။"] },

  { t: "One Space Left", c: [[2, "stinger"]], l: "စောင့်ခန်း", k: "screen",
    g: "နောက်ဆုံးတံခါးရှေ့မှာတော့ နေရာလွတ်တစ်ခု။ ပုံက ဖြည်းဖြည်း အဲဒီတံခါးနားကို နီးလာတယ်။",
    p: "The same monitor image, the view now arrived at the end of the corridor. In front of the "
      + "last door there is nobody — a single conspicuous gap in a line that is otherwise "
      + "unbroken — and on that door, at head height, a small name plate. ⚠️ THE NAME IS LEGIBLE: "
      + "ကိုနိုင် in Burmese script, the one piece of readable text in this film. Everything "
      + "around it stays low-resolution and unreadable.",
    u: ["နောက်ဆုံးတံခါးရှေ့မှာတော့— နေရာလွတ်တစ်ခု။ ပုံက ဖြည်းဖြည်း အဲဒီတံခါးနားကို နီးလာတယ်။",
        "တံခါးပေါ်မှာ— နာမည်တစ်ခု။",
        { text: "**ကိုနိုင်**", say: "တံခါးပေါ်မှာ ရေးထားတဲ့နာမည်က— ကိုနိုင်။" }] },

  { t: "The Place Is Ready", l: "စောင့်ခန်း", k: "face", w: ["ကိုနိုင်"],
    g: "ကိုနိုင် မျက်နှာဖြူသွားတယ်။ အသံ ပြန်ကြားလာတယ် — “နေရာပြင်ထားပြီးပြီ”",
    p: "Close on Ko Naing in the dark room, lit only by the monitor, the colour gone out of his "
      + "face. He is looking at his own name on a door on a floor that does not exist.",
    u: ["ကိုနိုင် မျက်နှာဖြူသွားတယ်။",
        "ဓာတ်လှေကားထဲက အသံ ပြန်ကြားလာတယ်။ “နေရာပြင်ထားပြီးပြီ”"] },

  // ── XI · HE RAN FOR IT ────────────────────────────────────────────────────
  { t: "He Thought It Was a Chance", l: "လိပ်ဘီ", k: "lobby", w: ["ကိုနိုင်"],
    g: "ဓာတ်လှေကားတံခါး ဖြည်းဖြည်းပိတ်တော့မယ်။ ကိုနိုင် အခွင့်အရေးလို့ ထင်ပြီး ပြေးသွားတယ်။ လက်နဲ့တားတယ်။",
    p: "The basement lift lobby. Ko Naing has thrown himself the last stride at the nearly closed "
      + "doors with one arm out, his hand between them. The light from inside the car falls on him "
      + "in a narrowing bar. Everything else in the basement is dark.",
    u: ["ဓာတ်လှေကားတံခါးက ဖြည်းဖြည်းပိတ်တော့မယ်။",
        "ကိုနိုင် အခွင့်အရေးလို့ ထင်ပြီး— ပြေးသွားတယ်။ တံခါးကို လက်နဲ့တားတယ်။"] },

  { t: "She Was Standing In It", l: "ဓာတ်လှေကားအတွင်း", k: "car", w: ["မိန်းကလေး"],
    g: "တံခါး ပြန်ပွင့်လာတယ်။ ဒါပေမယ့် ဓာတ်လှေကားထဲမှာ မိန်းကလေး ရပ်နေတယ်။",
    p: "Direct camera at chest height, the doors sliding back open — and the woman is standing in "
      + "the middle of the car facing out, close, in full ordinary light. This is the first time "
      + "she has been seen by anything other than a security camera.",
    u: ["တံခါး ပြန်ပွင့်လာတယ်။",
        "ဒါပေမယ့်— ဓာတ်လှေကားထဲမှာ အဖြူရောင်ဝတ်စုံနဲ့ မိန်းကလေး ရပ်နေတယ်။"] },

  { t: "The Smile Was Wrong", c: [[2, "bigstinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "face", w: ["မိန်းကလေး"],
    g: "⚠️ ဒီတစ်ပုံမှာပဲ အပြုံးကို ပြရမယ် — မျက်နှာက လှတယ်၊ သာမန်ပဲ။ ဒါပေမယ့် အပြုံးက မသဘာဝကျဘူး။",
    p: "Close on the woman’s face in the lift’s own bright light, seen plainly for the first and "
      + "only time. ⚠️ SHE IS ENTIRELY ORDINARY AND GENUINELY PRETTY — healthy skin, clear eyes, "
      + "neat dry hair, no wounds, nothing distorted. THE ONLY THING WRONG IS THE SMILE: it is a "
      + "fraction too wide and held a fraction too long, and it does not reach her eyes, which "
      + "stay flat and attentive. Nothing else in the image is exaggerated.",
    u: ["ဒီတစ်ခါ— သူ့မျက်နှာကို ရှင်းရှင်းမြင်ရတယ်။",
        "ပုံမှန်မိန်းကလေးတစ်ယောက်လိုပဲ။ လှတယ်။",
        "ဒါပေမယ့်— အပြုံးက မသဘာဝကျဘူး။"] },

  { t: "I Did the Same Thing Once", l: "ဓာတ်လှေကားအတွင်း", k: "face", w: ["မိန်းကလေး"],
    g: "သူ တိုးတိုးပြောတယ် — “ကျွန်မလည်း အရင်က ဒီလိုပဲ လုပ်ခဲ့တာ” ကိုနိုင် နားမလည်ဘူး။",
    p: "The same close framing on the woman speaking quietly, her eyes going from Ko Naing to the "
      + "lit 13 on the panel behind him and back. ⚠️ THE SMILE IS GONE NOW and what is left "
      + "underneath it is not menace — it is something closer to sympathy, which is worse. She is "
      + "telling him how she came to be here, standing exactly where he is about to stand.",
    u: ["သူ တိုးတိုးပြောတယ်။ “ကျွန်မလည်း အရင်က ဒီလိုပဲ လုပ်ခဲ့တာ” ကိုနိုင် နားမလည်ဘူး။",
        "မိန်းကလေးက ၁၃ ခလုတ်ကို ကြည့်တယ်။ “တံခါးမပိတ်ခင် ထွက်ပြေးလို့ရမယ်ထင်ခဲ့တာ”"] },

  { t: "Her Hand Was Freezing", c: [[1, "stinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "insert",
    g: "ကိုနိုင်ရဲ့လက်ကို ဖမ်းလိုက်တယ်။ အရမ်းအေးတယ်။ ကိုနိုင် ရုန်းတယ်။ မလွတ်ဘူး။",
    p: "Tight insert on two hands: her pale fingers closed around Ko Naing’s wrist, his own hand "
      + "open and straining back against the grip, the tendons standing out. ⚠️ Ordinary skin on "
      + "ordinary skin — no frost, no vapour, no colour change, no marks. The cold is carried by "
      + "his reaction, not by the image.",
    u: ["ပြီးတော့— ကိုနိုင်ရဲ့လက်ကို ဖမ်းလိုက်တယ်။ အရမ်းအေးတယ်။",
        "ကိုနိုင် ရုန်းတယ်။ မလွတ်ဘူး။"] },

  { t: "One. Two. Three.", l: "လိပ်ဘီ", k: "floorlamp",
    g: "ဓာတ်လှေကားတံခါး ပိတ်သွားတယ်။ အထပ်ပြမီးက ၁၊ ၂၊ ၃၊ ၄… ၁၂၊ ပြီးတော့ ၁၃။",
    p: "Insert on the floor indicator above the closed basement doors, the numeral filling the "
      + "frame and currently reading 12. Same ordinary amber display as the earlier occurrence. "
      + "The doors below it are shut and the lobby is dark.",
    u: [{ text: "ဓာတ်လှေကားတံခါး ပိတ်သွားတယ်။ အထပ်ပြမီး— ၁ ၂ ၃ ၄ … ၁၂",
          say: "ဓာတ်လှေကားတံခါး ပိတ်သွားတယ်။ အထပ်ပြမီးက တစ်၊ နှစ်၊ သုံး၊ လေး… ဆယ့်နှစ်။" },
        { text: "ပြီးတော့— ၁၃။", say: "ပြီးတော့— ဆယ့်သုံး။" }] },

  // ── XII · MORNING ─────────────────────────────────────────────────────────
  { t: "His Phone and His Shoes", l: "စောင့်ခန်း", k: "guardwide",
    g: "မနက်ရောက်တော့ အလုပ်သမားအသစ်တွေ လာတယ်။ စောင့်ခန်းထဲမှာ ကိုနိုင် မရှိဘူး။ ဖုန်းရှိတယ်။ ဖိနပ်ရှိတယ်။",
    p: "The security room in the morning with the lights on and two staff standing in the doorway "
      + "looking in. The swivel chair is pushed back from the desk. A phone lies on the logbook and "
      + "a pair of black shoes stands neatly together under the desk, empty.",
    u: ["မနက်ရောက်တော့— အလုပ်သမားအသစ်တွေ လာတယ်။",
        "စောင့်ခန်းထဲမှာ ကိုနိုင် မရှိဘူး။ ဖုန်းရှိတယ်။ ဖိနပ်ရှိတယ်။"] },

  { t: "2:07", l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["ကိုနိုင်"],
    g: "မှတ်တမ်းထဲမှာ ည ၂ နာရီ ၇ မိနစ်မှာ ကိုနိုင် တစ်ယောက်တည်း ဝင်သွားတယ်။",
    p: "The identical CCTV framing, timestamp reading 02:07. Ko Naing stands alone in the car in "
      + "his uniform, facing the doors. ⚠️ HE IS ALONE — the space beside the panel where the "
      + "woman stood is empty, exactly as it was empty on the young man’s footage.",
    u: ["ကင်မရာမှတ်တမ်းကို ပြန်ကြည့်တယ်။",
        "ည ၂ နာရီ ၇ မိနစ်မှာ— ကိုနိုင် ဓာတ်လှေကားထဲ တစ်ယောက်တည်း ဝင်သွားတယ်။"] },

  { t: "It Came Back Empty", l: "ဓာတ်လှေကားအတွင်း", k: "monitor",
    g: "၁၂ ထပ်ရောက်တော့ ပုံပျောက်သွားတယ်။ တစ်မိနစ်ကြာတော့ မြေညီထပ် ပြန်ရောက်တယ်။ အထဲမှာ ဘယ်သူမှ မရှိဘူး။",
    p: "The identical CCTV framing of the empty car, clean signal, doors open, timestamp reading "
      + "02:08. Indistinguishable from the master plate. A minute of recording is the difference "
      + "between a man being in this frame and not.",
    u: ["ဓာတ်လှေကားက ၁၂ ထပ်ရောက်တယ်။ ပြီးတော့— ပုံပျောက်သွားတယ်။",
        "တစ်မိနစ်ကြာတော့— ဓာတ်လှေကား မြေညီထပ် ပြန်ရောက်တယ်။ အထဲမှာ ဘယ်သူမှ မရှိဘူး။",
        "ကိုနိုင်ကို— ဘယ်တော့မှ ပြန်မတွေ့တော့ဘူး။"] },

  // ── XIII · THE NEW GUARD ──────────────────────────────────────────────────
  { t: "A Week Later", l: "စောင့်ခန်း", k: "guard", w: ["ညစောင့်အသစ်"],
    g: "တစ်ပတ်ကြာတော့ ညစောင့်အသစ်တစ်ယောက် စဝင်တယ်။ ပထမဆုံးည။ မနက် ၂ နာရီ။",
    p: "A different man at the same desk in the same chair — older, lean, reading glasses on a "
      + "cord, the uniform shirt still creased from new. He is working carefully through the "
      + "logbook. The bank of monitors glows in front of him.",
    u: ["တစ်ပတ်ကြာတော့— ညစောင့်အသစ်တစ်ယောက် စဝင်တယ်။",
        "ပထမဆုံးည။ မနက် ၂ နာရီ။"] },

  { t: "Someone Behind Her", l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["မိန်းကလေး"], rev: "monitor 3 of 3",
    g: "⚠️ မော်နီတာပုံစံ တတိယအကြိမ် — မိန်းကလေး၊ သူ့နောက်မှာ ညစောင့်ဝတ်စုံနဲ့ လူတစ်ယောက် ခေါင်းငုံ့ထားတယ်။",
    p: "OCCURRENCE 3 OF 3. The identical CCTV framing. The woman stands in her usual place — and "
      + "BEHIND HER, deeper into the car near the mirrored wall, a second figure in a security "
      + "uniform is standing with his head lowered so the face is not visible. Same pale blue "
      + "shirt, same navy trousers.",
    u: ["စောင့်ကြည့်မျက်နှာပြင်မှာ— အဖြူရောင်ဝတ်စုံနဲ့ မိန်းကလေး ဓာတ်လှေကားထဲ ပေါ်လာတယ်။",
        "သူ့နောက်မှာ— လူတစ်ယောက် ရပ်နေတယ်။ ညစောင့်ဝတ်စုံ။ ခေါင်းငုံ့ထားတယ်။"] },

  { t: "He Raised His Head", c: [[2, "bigstinger"]], l: "ဓာတ်လှေကားအတွင်း", k: "monitor", w: ["ကိုနိုင်"],
    g: "အဲဒီလူ ဖြည်းဖြည်း ခေါင်းမော့လာတယ်။ ကိုနိုင်။ မျက်နှာမှာ ကြောက်လန့်နေတယ်။",
    p: "The identical CCTV framing. The uniformed figure has lifted his head and it is Ko Naing, "
      + "recognisable through the poor resolution, looking directly into the lens. ⚠️ HE LOOKS "
      + "EXACTLY AS HE DID ALIVE — same face, same uniform, no pallor, no damage, nothing "
      + "transparent. The only thing on him is terror.",
    u: ["ညစောင့်အသစ်က ပုံကို နီးနီးကပ်ကပ်ကြည့်တယ်။",
        "အဲဒီလူ ဖြည်းဖြည်း ခေါင်းမော့လာတယ်။ ကိုနိုင်။",
        "သူ ကင်မရာကိုကြည့်တယ်။ မျက်နှာမှာ ကြောက်လန့်နေတယ်။"] },

  { t: "Don't Press Thirteen", c: [[1, "stinger"]], l: "စောင့်ခန်း", k: "screen",
    g: "အသံမထွက်ဘဲ နှုတ်ခမ်းလှုပ်တယ် — **“၁၃ ကို မနှိပ်နဲ့”**",
    p: "The monitor as an object, close, the new guard’s face reflected faintly in the glass "
      + "beside the image. On screen, Ko Naing’s head and shoulders fill the frame and his mouth "
      + "is shaping words with no sound. ⚠️ The mouth movement must be deliberate and readable as "
      + "speech; no subtitle, no caption, nothing written.",
    u: ["ပြီးတော့— အသံမထွက်ဘဲ နှုတ်ခမ်းလှုပ်တယ်။",
        "**“၁၃ ကို မနှိပ်နဲ့”**"] },

  { t: "He Had Not Touched Anything", c: [[1, "finalstinger"]], l: "ခလုတ်တန်း", k: "panel",
    rev: "panel 4 of 4",
    g: "⚠️ ခလုတ်တန်းပုံစံ နောက်ဆုံးအကြိမ် — သူ ဘာမှ မနှိပ်ရသေးဘူး။ ဒါပေမယ့် **၁၃ က သူ့အလိုလို မီးလင်းလာတယ်။**",
    p: "OCCURRENCE 4 OF 4, AND THE LAST SHOT. The identical panel insert. The 13 above the 12 is "
      + "lit. ⚠️ THERE IS NO HAND ANYWHERE IN THE FRAME and there is nobody in the car — the panel "
      + "is alone in shot exactly as it was in the very first occurrence, and the only difference "
      + "between the two images is one lit button.",
    u: ["ညစောင့်အသစ်က ခလုတ်တန်းကို ကြည့်တယ်။ သူ ဘာမှ မနှိပ်ရသေးဘူး။",
        "ဒါပေမယ့်— **၁၃ ခလုတ်က သူ့အလိုလို မီးလင်းလာတယ်။**"] },
];

// ── SCAFFOLDING ─────────────────────────────────────────────────────────────

const STYLE = "Modern Yangon condominium, 16:9, contemporary photorealism. ORDINARY BUILDING LIGHT "
  + "ONLY: fluorescent ceiling panels in the lift and lobbies, a bank of monitors in the dark "
  + "security room, recessed downlights on the residential floors. Everything works. This is a "
  + "clean well-maintained building, NOT a haunted set — no flicker, no grime, no rust, no damp, "
  + "no fog or haze, no green or teal grade, no blood, no heavy vignette. One still instant, no "
  + "montage or visible sound effects. No gore, and no legible writing, signage, labels, logo "
  + "or watermark — EXCEPT the three things the shots ask for by name: the Western floor "
  + "numbers on the button panel and indicator, the burned-in timestamp on the CCTV, and the "
  + "name plate at the end. Those must be readable.";

/** Shots presented as security footage rather than as photography. */
const CCTV = new Set(["monitor", "screen"]);

/**
 * Time of day. A night-shift story that happens almost entirely between one and
 * three in the morning. The lift and the basement have no windows, so night is
 * carried by the deserted building, the night lighting beyond the lift doors
 * and the timestamp — never by a view of the sky, because there isn't one.
 */
const TIME_NIGHT = "TIME: NIGHT, around two in the morning. The building is asleep: no daylight "
  + "anywhere, nobody else about, lobbies and lift lit only by their own fluorescents, the "
  + "security room dark except for the monitors. ⚠️ There are no windows in the lift or the "
  + "basement, so the hour is carried by the emptiness of the building and by the timestamp on "
  + "the footage — never by a view of the sky.";

const TIME_DAY = {
  "They Reviewed the Tape": "TIME: DAYTIME, working hours. The security room’s ceiling tube is "
    + "on and the door to the basement lobby stands open. Ordinary daytime — this is the one "
    + "scene in the film where the building is busy.",
  "His Phone and His Shoes": "TIME: MORNING. Overhead lights on, the door open, daytime activity "
    + "in the basement beyond it. Ordinary morning.",
};

SCENES.forEach((s, i) => {
  const n = i + 1, who = s.w || [];
  s.n = n;
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot ${n} "${s.t}" has no camera key`);
  s.time = TIME_DAY[s.t] || TIME_NIGHT;

  const cont = ["Continuity: ordinary living people photographed straight."];

  // The whole film turns on the audience believing a security camera. The moment
  // the footage looks authored, the two shots where it lies stop mattering.
  if (CCTV.has(s.k)) cont.push("⚠️ THIS IS SECURITY FOOTAGE: fixed, unlovely, correctly exposed for "
    + "the lit car, with a burned-in timestamp and no camera movement of any kind. Never a "
    + "cinematic angle, never a push in, never a rack focus.");

  if (who.includes("မိန်းကလေး")) cont.push("The woman is an ordinary young woman in a plain white "
    + "dress — healthy skin, clear white sclera, natural dark brown irises, neat dry hair, no "
    + "wounds, nothing transparent, no floating, face never obscured."
    + (s.t === "The Smile Was Wrong" ? "" : " Her expression is neutral and pleasant; the smile "
      + "belongs to one shot only and must not appear here."));
  if (who.includes("ကိုနိုင်")) cont.push("Ko Naing in the pale blue security shirt, navy trousers "
    + "and lanyard; clear healthy eyes, tired but never ill-looking."
    + (n >= 46 ? " After his disappearance he looks exactly as he did alive — no pallor, no damage, "
      + "nothing transparent." : ""));
  if (who.includes("လူငယ်")) cont.push("The young resident in a dark hoodie and jeans with "
    + "earphones and a phone; entirely alive and entirely ordinary.");
  if (who.includes("ညစောင့်အသစ်")) cont.push("The new guard in the same uniform as Ko Naing’s, "
    + "still creased from new, reading glasses on a cord.");

  cont.push("The lift keeps the geometry of the master plate: mirrored back wall, steel side "
    + "walls, button panel on the right beside the doors, camera in the ceiling corner. ⚠️ Every "
    + "floor number in this film — on the panel and on the indicator — is a WESTERN ARABIC "
    + "numeral, never a Burmese one, including where the panel is only incidentally in frame.");

  s.cont = cont.join(" ");
  s.style = STYLE;
});
