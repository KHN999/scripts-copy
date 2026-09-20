/**
 * အောက်ဆုံးထပ် — THE BOTTOM FLOOR
 *
 * Board for hell.txt.
 *
 *   1. ⚠️ THERE IS NO FIRE IN THIS FILM. The script sets up every expectation of
 *      one — screaming, chains, heat coming through the doors — and then opens
 *      them onto a wet road in the dark. Flames, demons, pits, chains or any
 *      other traditional hell imagery anywhere on this board would spend the
 *      ending before it arrives. The heat and the screaming are SOUND ONLY and
 *      are never illustrated.
 *   2. THE DOORS OPENING ON A MEMORY is the motif. Four times the lift stops and
 *      the doors open on somewhere that is not a hospital floor: the bar, the
 *      road, the police station, and the road again. Identical framing from
 *      inside the car each time. The fourth is the one he does not get to ride
 *      away from.
 *   3. THE CLOCK STOPPED AT 11:47 is the closing rhyme — the ward wall, her
 *      pointing finger, the doctor reading it out, and the last shot of the
 *      film.
 *   4. NOBODY LOOKS DEAD. Ma Nwe Nwe bleeds from her head and behaves like a
 *      nurse on a shift. No pallor, nothing transparent, no floating. The horror
 *      is entirely that everyone is being perfectly reasonable.
 *   5. NO GORE. A child is hit by a car in this story and is never shown
 *      injured; a body is worked on in an emergency room and is never shown in
 *      detail.
 */

export const CAST = [
  { name: "ကိုရဲမင်း", en: "Ko Ye Min — the narrator, about thirty-five",
    prompt: "A Burmese man of about thirty-five, well-fed and well-kept, medium-brown skin, a "
      + "broad face, neat short black hair, clean-shaven. A good quality pale blue shirt with the "
      + "sleeves turned back and dark trousers, a decent watch, leather shoes. ⚠️ HE IS NOT "
      + "INJURED ANYWHERE IN THIS FILM and wears no hospital gown — no blood, no bandages, no "
      + "marks, even immediately after being hit by a car. Clear white sclera, natural dark brown "
      + "irises. A man used to being comfortable." },
  { name: "မနွယ်နွယ်", en: "Ma Nwe Nwe — the nurse, about thirty-two",
    prompt: "A Burmese woman of about thirty-two, slight, medium-brown skin, an oval face, black "
      + "hair pinned up under a white nurse’s cap. A plain white nurse’s uniform and white shoes, "
      + "a small name badge on the chest. ⚠️ ONE THING ONLY IS WRONG WITH HER: a thin dark line "
      + "of fresh blood runs from somewhere under her hairline down one side of her forehead and "
      + "neck and into her collar, and it is always wet and always moving. NO WOUND IS EVER "
      + "VISIBLE, no pooling, no spatter, nothing torn. Everything else about her is completely "
      + "ordinary — healthy skin, clear eyes, tidy uniform, calm professional manner. She is "
      + "kind. She is never sinister and never a ghost.",
    pose: "The subject stands facing the camera square on, full figure in frame, hands clasped in "
      + "front of her, a calm professional expression" },
  { name: "ကိုဇော်ထက်", en: "Ko Zaw Htet — his friend, about thirty-five",
    prompt: "A Burmese man of about thirty-five, lean and weathered, darker skin than Ye Min, a "
      + "narrow face, slightly untidy black hair, light stubble. A cheap short-sleeved shirt and "
      + "worn jeans, plastic sandals. A man with no money and no family, which shows in his "
      + "clothes and in nothing else. ⚠️ He is never menacing and never accusing — even at the "
      + "end, his face is calm and almost gentle." },
  { name: "သမီး", en: "The daughter — Ma Nwe Nwe’s girl, about seven",
    prompt: "A Burmese girl of about seven, small, medium-brown skin, a round face, black hair in "
      + "two short plaits, a simple yellow dress and sandals. She carries a small RED umbrella. "
      + "⚠️ SHE IS NEVER SHOWN INJURED, bleeding, marked or distressed at any point in this film, "
      + "including the shot in which she is lying in the road. Whole, ordinary and unharmed in "
      + "every appearance." },
];

export const LOCS = [
  { name: "ဓာတ်လှေကား", en: "The lift — master geometry plate",
    prompt: "THE MASTER GEOMETRY PLATE FOR THIS FILM. Most of the story is two people standing in "
      + "this one lift, so fix it once. The interior of an ordinary hospital service lift, "
      + "photographed from the BACK WALL at chest height looking toward the doors, so the doors "
      + "fill the far end of frame. Brushed stainless steel walls, a scuffed grey rubber floor, a "
      + "handrail along both sides, a fluorescent panel behind a yellowed diffuser overhead. ON "
      + "THE RIGHT-HAND WALL beside the doors: a tall vertical button panel. Above the doors: a "
      + "small illuminated floor indicator. ⚠️ Everything works and everything is ordinary — a "
      + "working hospital lift, clean, dull, slightly worn. No flicker, no rust, no grime, no "
      + "horror dressing. ⚠️ THERE IS NO CLOCK IN THIS CAR. Empty of people." },
  { name: "ခလုတ်တန်း", en: "The lift button panel",
    prompt: "A tall stainless-steel lift button panel photographed square on and close, round "
      + "illuminated buttons in a single column. ⚠️ THE NUMBERING IS THE POINT AND IT IS WRONG: "
      + "the column runs DOWN from 7 through 6, 5, 4, 3, 2, 1 — and then continues B1, B2, B3 and "
      + "onward all the way to B13, far more basement levels than any building has. All numerals "
      + "are Burmese digits, embossed and unlit in this plate. Beside the doors above the panel, "
      + "two call arrows: ⚠️ THE UP ARROW IS DARK AND THE DOWN ARROW IS LIT. Brushed metal, "
      + "ordinary wear around the most-used buttons." },
  { name: "ဆေးရုံအခန်း", en: "The hospital room",
    prompt: "A hospital room with several iron beds, pale green walls, a terrazzo floor, a window "
      + "with a thin curtain. On the wall a plain round institutional clock. Patients lie in the "
      + "other beds under sheets. ⚠️ THE ROOM IS COMPLETELY STILL — nobody is moving, no drip is "
      + "running, no monitor is lit, no staff are present. Ordinary daylight-balanced hospital "
      + "light with no visible source. Clean and unremarkable; no decay, no blood, no horror "
      + "dressing." },
  { name: "အရက်ဆိုင်", en: "The bar",
    prompt: "A small ordinary Yangon beer station at night: plastic tables and stools, a tiled "
      + "floor, a glass-fronted fridge of bottles, strip lights, a wall-mounted television with "
      + "the sound off, a few other drinkers in the background. Warm, bright, cheerful and "
      + "completely mundane." },
  { name: "ကားလမ်း", en: "The road in the rain",
    prompt: "A two-lane road at night in heavy rain on the edge of a Yangon township: wet black "
      + "tarmac throwing back the light, a broken white centre line, a shallow drainage ditch and "
      + "scrub along one side, a few widely spaced street lamps, dark low buildings far back. No "
      + "traffic. ⚠️ Ordinary wet road at night — no fog, no smoke, no colour grade, no fire or "
      + "glow of any kind anywhere in it." },
  { name: "ရဲစခန်း", en: "The police station",
    prompt: "The inside of an ordinary Myanmar police station at night: a wooden desk with a "
      + "ledger and a lamp, plastic chairs, a bench along one wall, pale green paint, a ceiling "
      + "fan, a barred window, a strip light. Completely mundane and slightly shabby. No people "
      + "for this plate." },
  { name: "အရေးပေါ်ခန်း", en: "The emergency room",
    prompt: "A hospital emergency bay seen at a distance: a trolley under a surgical light, a "
      + "monitor on a stand, a drip pole, instrument trolleys, and several staff in gowns and "
      + "masks working with their backs largely to the camera. ⚠️ THE PATIENT IS NOT VISIBLE — "
      + "the staff and equipment occlude the trolley entirely. No blood, no wounds, no body in "
      + "frame. Ordinary bright clinical light." },
];

/** Composition vocabulary. One per shot, stated first and alone. */
const CAM = {
  ward: 'IN THE HOSPITAL ROOM. Camera at chest height beside the bed.',
  bed: 'FROM THE BED. Camera at pillow height on the mattress, looking up and out into the room.',
  lift: 'INSIDE THE LIFT. Camera at chest height against the back wall as in the master plate, both of them in frame and the doors at the far end.',
  doors: 'THE DOORS OPENING ON A MEMORY. Camera at chest height inside the lift against the back wall, square on to the open doors, framed so the doorway itself is a hard rectangle in the middle of the image and what lies beyond it fills that rectangle. Reproduce this framing identically every time it recurs.',
  panel: 'THE BUTTON PANEL. Insert square on to the panel at close range, the column of buttons filling the frame. Reproduce this framing identically every time it recurs.',
  indicator: 'THE FLOOR INDICATOR. Insert on the small illuminated display above the lift doors, the characters filling the frame.',
  watch: 'THE STOPPED WRISTWATCH. Insert square on to a man’s wristwatch on his wrist, the small round face filling the frame, the hands at eleven forty-seven.',
  clock: 'THE STOPPED CLOCK. Insert square on to a plain round institutional clock face filling the frame, the hands at eleven forty-seven. Reproduce this framing identically every time it recurs.',
  ye: 'CLOSE ON YE MIN. Camera at his eye height, head-and-shoulders crop.',
  nurse: 'CLOSE ON MA NWE NWE. Camera at her eye height, head-and-shoulders crop.',
  corridor: 'THE HOSPITAL CORRIDOR. Camera at chest height looking along the corridor.',
  bar: 'IN THE BAR. Camera at seated height across the table.',
  road: 'THE ROAD. Camera at chest height on the wet tarmac.',
  roadlow: 'LOW ON THE ROAD. Camera on the wet tarmac itself, a few inches above the surface.',
  station: 'IN THE POLICE STATION. Camera at chest height across the desk.',
  mirror: 'THE MIRROR WALL. Camera at chest height inside the lift facing the side wall, framed so the wall fills the image.',
  headlights: '⚠️ THE ONCOMING CAR. Camera at chest height in the middle of the road facing the approaching headlights, which are the only light source in frame.',
  insert: 'TIGHT INSERT. One subject filling the frame, shallow focus.',
};

export const SCENES = [
  // ── I · THE ROOM WITH NOBODY IN IT ────────────────────────────────────────
  { t: "I Woke Up in a Hospital Bed", l: "ဆေးရုံအခန်း", k: "bed", w: ["ကိုရဲမင်း"],
    g: "သတိရလာတော့ ဆေးရုံကုတင်ပေါ်။",
    p: "From pillow height on the bed: Ye Min just surfacing, his own hand and shoulder in the "
      + "near foreground, the ceiling and the room beyond soft. He is in his own clothes, not a "
      + "hospital gown, and there is nothing attached to him — no drip, no monitor, no dressing.",
    u: ["ကျွန်တော် သတိရလာတော့ ဆေးရုံကုတင်ပေါ်မှာ လှဲနေတယ်။"] },

  { t: "Nobody Was Moving", l: "ဆေးရုံအခန်း", k: "ward",
    g: "အခန်းထဲမှာ လူနာမရှိဘူး။ ဆရာဝန်မရှိဘူး။ နံရံက နာရီတောင် ရပ်နေတယ်။",
    p: "The hospital room wide. Other beds hold patients under sheets, and every one of them is "
      + "perfectly still — no rise and fall, no turned head, no drip running, no lit monitor. No "
      + "staff anywhere. ⚠️ THEY ARE NOT CORPSES AND MUST NOT LOOK LIKE CORPSES: ordinary living "
      + "people, ordinary colour, simply not moving.",
    u: ["အခန်းထဲမှာ လူနာမရှိဘူး။ ဆရာဝန်မရှိဘူး။ နံရံက နာရီတောင် ရပ်နေတယ်။"] },

  { t: "11:47", l: "ဆေးရုံအခန်း", k: "clock", rev: "clock 1 of 4",
    g: "⚠️ ရပ်နေတဲ့နာရီ — လေးခါ ပေါ်မယ်။ ည ၁၁ နာရီ ၄၇ မိနစ်။",
    p: "OCCURRENCE 1 OF 4 OF THE CLOCK. A plain round institutional wall clock filling the frame, "
      + "hands at eleven forty-seven, second hand stopped mid-sweep. ⚠️ Everything about this "
      + "framing is fixed here — same distance, same square-on angle, same clock — and must be "
      + "identical at the two later shots that show a wall clock. Nothing about it looks broken.",
    u: ["နံရံက နာရီတောင် ရပ်နေတယ်။"] },

  { t: "The Nurse Beside the Bed", c: [[1, "bigstinger"]], l: "ဆေးရုံအခန်း", k: "nurse", w: ["မနွယ်နွယ်"],
    g: "ကုတင်ဘေးမှာ သူနာပြုတစ်ယောက်။ ခေါင်းမှာ သွေးတွေ စီးကျနေတယ်။ ဒါပေမယ့် ပြုံးပြီး ပြောတယ်။",
    p: "Close on Ma Nwe Nwe standing at the bedside. ⚠️ A THIN DARK LINE OF WET BLOOD runs from "
      + "under her hairline down one side of her forehead, past her ear and into her collar. NO "
      + "WOUND IS VISIBLE, nothing is torn, there is no pooling and no spatter — one wet line and "
      + "nothing else. She is smiling pleasantly and entirely unbothered by it, exactly as a nurse "
      + "finishing a shift would look.",
    u: ["ကျွန်တော့်ကုတင်ဘေးမှာ သူနာပြုဆရာမတစ်ယောက် ရပ်နေတယ်။ သူ့ခေါင်းမှာ သွေးတွေ စီးကျနေတယ်။",
        "ဒါပေမယ့် သူက ဘာမှမဖြစ်သလို ပြုံးပြီးပြောတယ်။ “ကိုရဲမင်း ဆေးရုံက ဆင်းလို့ရပါပြီ။”"] },

  // ── II · MA NWE NWE ───────────────────────────────────────────────────────
  { t: "Ma Nwe Nwe", c: [[1, "stinger"]], l: "ဆေးရုံအခန်း", k: "insert",
    g: "ရင်ဘတ်က နာမည်တံဆိပ်မှာ — **မနွယ်နွယ်**",
    p: "Macro on the small name badge pinned to the chest of a white nurse’s uniform. ⚠️ THE NAME "
      + "IS LEGIBLE IN BURMESE SCRIPT: မနွယ်နွယ်. It is one of only three readable things in this "
      + "film. The white fabric around it is clean and unmarked.",
    u: ["သူနာပြုရဲ့ ရင်ဘတ်က နာမည်တံဆိပ်မှာ— **မနွယ်နွယ်** လို့ ရေးထားတယ်။",
        "သူ့မျက်နှာကို တစ်နေရာရာမှာ မြင်ဖူးသလို ခံစားရပေမယ့် ဘယ်မှာမြင်ဖူးလဲ မမှတ်မိဘူး။"] },

  { t: "A Traffic Accident", l: "ဆေးရုံအခန်း", k: "ward", w: ["ကိုရဲမင်း", "မနွယ်နွယ်"],
    g: "“ကျွန်တော် ဘာဖြစ်ခဲ့တာလဲ။” “ကားမတော်တဆမှုပါ။” သူက ဘီးတပ်ကုလားထိုင် ယူလာတယ်။",
    p: "Both of them at the bedside, Ye Min sitting up on the edge of the bed and Ma Nwe Nwe "
      + "wheeling an empty wheelchair up beside it. The stillness of the other beds continues "
      + "behind them and neither of them remarks on it.",
    u: ["“ကျွန်တော် ဘာဖြစ်ခဲ့တာလဲ။” “ကားမတော်တဆမှုပါ။”",
        "သူက ဘီးတပ်ကုလားထိုင်တစ်လုံး ယူလာတယ်။ “လမ်းလျှောက်လို့ရတယ်။”"] },

  { t: "Nothing Hurt", l: "ဆေးရုံအခန်း", k: "ye", w: ["ကိုရဲမင်း"],
    g: "ခြေထောက်မှာ နာကျင်မှုမရှိဘူး။ တစ်ကိုယ်လုံးလည်း ပေါ့ပါးနေတယ်။",
    p: "Close on Ye Min standing beside the bed having just got to his feet, looking down at "
      + "himself with mild puzzlement and flexing one hand. ⚠️ THERE IS NOTHING WRONG WITH HIM — "
      + "no injury, no bandage, no blood, no stiffness. He looks better than he should and he has "
      + "noticed.",
    u: ["ကျွန်တော် ကုတင်ပေါ်က ဆင်းကြည့်တော့ ခြေထောက်မှာ နာကျင်မှုမရှိဘူး။ တစ်ကိုယ်လုံးလည်း ပေါ့ပါးနေတယ်။"] },

  { t: "You'll See Everyone Downstairs", l: "ဆေးရုံအခန်း", k: "nurse", w: ["မနွယ်နွယ်"],
    g: "“ကျွန်တော့်ဖုန်းရော။ မိသားစုကို ဆက်ရဦးမယ်။” “အောက်ရောက်ရင် အားလုံးကို တွေ့ရပါလိမ့်မယ်။”",
    p: "Close on Ma Nwe Nwe answering, already half turned toward the door. Her tone and posture "
      + "are those of a busy nurse giving a routine reassurance. The blood continues down her neck "
      + "while she does it.",
    u: ["“ကျွန်တော့်ဖုန်းရော။ မိသားစုကို ဆက်ရဦးမယ်။”",
        "“အောက်ရောက်ရင် အားလုံးကို တွေ့ရပါလိမ့်မယ်။”",
        "သူက အခန်းအပြင်ဘက်ကို လျှောက်သွားတယ်။ ကျွန်တော်လည်း နောက်ကလိုက်ခဲ့တယ်။"] },

  // ── III · THE LIFT ────────────────────────────────────────────────────────
  { t: "No Footsteps", l: "ဆေးရုံအခန်း", k: "corridor", w: ["ကိုရဲမင်း", "မနွယ်နွယ်"],
    g: "ဆေးရုံတစ်ရုံလုံး ထူးထူးဆန်းဆန်း တိတ်နေတယ်။ ခြေသံ မကြားရဘူး။",
    p: "Along a hospital corridor with the two of them walking away from camera, small in the "
      + "frame. Through the open ward doorways on either side, more beds with more motionless "
      + "patients. ⚠️ Ordinary working hospital lighting, everything clean and lit — the wrongness "
      + "is only that nothing in the building is moving except these two people.",
    u: ["ဆေးရုံတစ်ရုံလုံး ထူးထူးဆန်းဆန်း တိတ်နေတယ်။",
        "လမ်းလျှောက်နေပေမယ့် ကျွန်တော်တို့ခြေသံ မကြားရဘူး။ အခန်းတွေထဲမှာ လူနာတွေ လှဲနေကြပေမယ့် ဘယ်သူမှ မလှုပ်ကြဘူး။"] },

  { t: "Only the Down Arrow", l: "ခလုတ်တန်း", k: "insert",
    g: "အပေါ်မြှားမီး မရှိဘူး။ အောက်မြှားမီးပဲ ရှိတယ်။",
    p: "Macro on the pair of call arrows beside the closed lift doors. ⚠️ THE UP ARROW IS DARK AND "
      + "THE DOWN ARROW IS LIT. Both are ordinary illuminated call buttons in ordinary condition; "
      + "the only thing in the image is which one is on.",
    u: ["ဓာတ်လှေကားရှေ့ရောက်တော့ မနွယ်နွယ်က ခလုတ်နှိပ်လိုက်တယ်။",
        "အပေါ်မြှားမီး မရှိဘူး။ အောက်မြှားမီးပဲ ရှိတယ်။"] },

  { t: "B1, B2, B3…", c: [[1, "bigstinger"]], l: "ခလုတ်တန်း", k: "panel",
    rev: "panel 1 of 3",
    g: "⚠️ ခလုတ်တန်းပုံစံ — သုံးခါ ပေါ်မယ်။ ၇ ကနေ ၁ အထိ၊ ပြီးတော့ B1 ကနေ **B13** အထိ။",
    p: "OCCURRENCE 1 OF 3 OF THE PANEL INSERT. The button panel square on and close, all buttons "
      + "unlit. ⚠️ THE COLUMN MUST READ CLEARLY AND HONESTLY: 7, 6, 5, 4, 3, 2, 1 and then "
      + "continuing downward B1, B2, B3 and on to B13 at the very bottom. Burmese numerals, "
      + "embossed, entirely ordinary in finish. The impossibility is the count and nothing else.",
    u: ["ဓာတ်လှေကားထဲဝင်တော့ အထပ်ခလုတ်တွေက ထူးဆန်းနေတယ်။",
        "၇၊ ၆၊ ၅၊ ၄၊ ၃၊ ၂၊ ၁။ ပြီးတော့— B1၊ B2၊ B3… B13 အထိ ရှိတယ်။"] },

  { t: "Your Car Is on B13", c: [[1, "stinger"]], l: "ဓာတ်လှေကား", k: "lift", w: ["ကိုရဲမင်း", "မနွယ်နွယ်"],
    g: "မနွယ်နွယ်က B13 ကို နှိပ်လိုက်တယ်။ “ကားရပ်တဲ့နေရာက B2 မှာမဟုတ်ဘူးလား။” “ရှင့်ကားက B13 မှာပါ။”",
    p: "Both of them inside the lift as in the master plate, doors closing at the far end. Ma Nwe "
      + "Nwe has her hand coming away from the very bottom of the panel; Ye Min has turned toward "
      + "her with a mild, reasonable objection on his face. Two people in a lift having a "
      + "completely normal disagreement.",
    u: ["မနွယ်နွယ်က B13 ကို နှိပ်လိုက်တယ်။ “ကားရပ်တဲ့နေရာက B2 မှာမဟုတ်ဘူးလား။”",
        "“ရှင့်ကားက B13 မှာပါ။” တံခါးပိတ်သွားတယ်။ ဓာတ်လှေကား စဆင်းတယ်။"] },

  // ── IV · SIX ─────────────────────────────────────────────────────────────
  { t: "Six", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကား", k: "doors", rev: "doors 1 of 4",
    g: "⚠️ တံခါးပွင့်တဲ့ပုံစံ — လေးခါ ပေါ်မယ်။ ခြောက်လွှာမှာ ရပ်တယ်။ အပြင်မှာ အရက်ဆိုင်တစ်ဆိုင်။",
    p: "OCCURRENCE 1 OF 4 OF THE DOORWAY FRAMING. From the back wall of the lift, square on to the "
      + "open doors — and framed in that hard rectangle is not a hospital floor but the inside of "
      + "a warm bright beer station at night, tables and drinkers and strip lights. ⚠️ The join is "
      + "clean and absolutely matter-of-fact: no mist at the threshold, no glow, no portal, no "
      + "transition effect. A lift has simply opened onto somewhere it cannot open onto.",
    u: ["ခြောက်လွှာရောက်တော့ သူ့အလိုလို ရပ်သွားတယ်။ တံခါးပွင့်သွားတဲ့အခါ ဆေးရုံအခန်းမဟုတ်ဘူး။",
        "အရက်ဆိုင်တစ်ဆိုင်။"] },

  { t: "Me and Ko Zaw Htet", l: "အရက်ဆိုင်", k: "bar", w: ["ကိုရဲမင်း", "ကိုဇော်ထက်"],
    g: "စားပွဲတစ်လုံးမှာ ကျွန်တော်နဲ့ ကိုဇော်ထက်။ အတိတ်ကို ပြန်မြင်နေရတာ။",
    p: "Across a plastic table in the beer station: Ye Min and Ko Zaw Htet mid-evening, bottles "
      + "and glasses between them, both loose and cheerful. ⚠️ THIS IS THE PAST AND IT LOOKS "
      + "COMPLETELY NORMAL — warm light, ordinary night out, nothing stylised and nothing to "
      + "indicate a memory.",
    u: ["စားပွဲတစ်လုံးမှာ ကျွန်တော်နဲ့ သူငယ်ချင်း ကိုဇော်ထက် ထိုင်နေကြတယ်။",
        "အတိတ်ကို ပြန်မြင်နေရတာ။"] },

  { t: "I'm Not Drunk Yet", l: "အရက်ဆိုင်", k: "bar", w: ["ကိုရဲမင်း", "ကိုဇော်ထက်"],
    g: "ကျွန်တော်က ခွက်မော့ပြီး ကားသော့ယူတယ်။ “မောင်းမနေနဲ့ ရဲမင်း။ ငါပို့ပေးမယ်။” “ငါ မမူးသေးဘူး။”",
    p: "The same table. Ye Min has stood and is pocketing a car key; Ko Zaw Htet has a hand out "
      + "across the table trying to take it, half out of his seat. ⚠️ It reads as friendly rather "
      + "than a row — a man being talked out of something and not listening.",
    u: ["ကျွန်တော်က အရက်ခွက်ကို မော့သောက်ပြီး ကားသော့ယူလိုက်တယ်။ ကိုဇော်ထက်က တားတယ်။",
        "“မောင်းမနေနဲ့ ရဲမင်း။ ငါပို့ပေးမယ်။” “ငါ မမူးသေးဘူး။”"] },

  { t: "Why Are You Showing Me This", l: "ဓာတ်လှေကား", k: "lift", w: ["ကိုရဲမင်း", "မနွယ်နွယ်"],
    g: "တံခါး ပြန်ပိတ်သွားတယ်။ “ဒါကို ဘာလို့ ပြနေတာလဲ။” မနွယ်နွယ် မဖြေဘူး။",
    p: "Both of them in the lift, doors shut again, Ye Min turned toward her with a question and "
      + "Ma Nwe Nwe facing forward and not answering. She is not being cruel; she is simply not "
      + "the one who explains.",
    u: ["တံခါး ပြန်ပိတ်သွားတယ်။ “ဒါကို ဘာလို့ ပြနေတာလဲ။”",
        "မနွယ်နွယ် မဖြေဘူး။ ဓာတ်လှေကား ဆက်ဆင်းတယ်။"] },

  // ── V · FOUR ──────────────────────────────────────────────────────────────
  { t: "Four", c: [[1, "stinger"]], l: "ဓာတ်လှေကား", k: "doors", rev: "doors 2 of 4",
    g: "⚠️ တံခါးပွင့်တဲ့ပုံစံ ဒုတိယအကြိမ် — လေးလွှာ။ အပြင်မှာ မိုးရွာနေတဲ့ ကားလမ်း။",
    p: "OCCURRENCE 2 OF 4. The identical framing from the back wall of the lift — and beyond the "
      + "open doors, filling that same rectangle, a wet two-lane road at night with rain falling "
      + "hard through the street lamps. ⚠️ The rain stops at the threshold. The lift floor is dry. "
      + "No mist, no glow, no effect at the join.",
    u: ["လေးလွှာမှာ ထပ်ရပ်တယ်။",
        "ဒီတစ်ခါ တံခါးအပြင်မှာ မိုးရွာနေတဲ့ ကားလမ်း။"] },

  { t: "A Woman and a Child", l: "ကားလမ်း", k: "road", w: ["မနွယ်နွယ်", "သမီး"],
    g: "လမ်းဘေးမှာ မိန်းမတစ်ယောက်နဲ့ ကလေးတစ်ယောက်။",
    p: "On the wet road at night: a woman and a small girl standing on the verge under one red "
      + "umbrella, waiting to cross, headlights approaching far down the road behind them. ⚠️ THE "
      + "WOMAN IS IN ORDINARY CLOTHES, NOT A NURSE’S UNIFORM, AND THERE IS NO BLOOD ON HER. "
      + "Nothing about either of them is wrong yet.",
    u: ["ကျွန်တော်မောင်းနေတဲ့ကားက အရှိန်ပြင်းပြင်းနဲ့ ဖြတ်လာတယ်။",
        "လမ်းဘေးမှာ မိန်းမတစ်ယောက်နဲ့ ကလေးတစ်ယောက် ရပ်နေတယ်။"] },

  { t: "The Red Umbrella", c: [[1, "bigstinger"]], l: "ကားလမ်း", k: "roadlow",
    g: "ကလေးရဲ့ထီး လေတိုက်လို့ လမ်းပေါ် လွင့်ကျသွားတယ်။ သူက ပြေးထွက်လာတယ်။",
    p: "Low on the wet tarmac: a small RED umbrella tumbling out into the middle of the road in "
      + "the rain, and at the edge of frame a pair of child’s sandals running after it. Headlights "
      + "are washing across the water from the left. ⚠️ No impact in this frame and no child above "
      + "the ankle.",
    u: ["ကလေးရဲ့ထီးက လေတိုက်လို့ လမ်းပေါ် လွင့်ကျသွားတယ်။ သူက ထီးကောက်ဖို့ ပြေးထွက်လာတယ်။",
        "“မကြည့်နဲ့…” ကျွန်တော် မျက်လုံးမှိတ်လိုက်တယ်။"] },

  { t: "I Heard It", l: "ဓာတ်လှေကား", k: "ye", w: ["ကိုရဲမင်း"],
    g: "မျက်လုံးမှိတ်ထားပေမယ့် တိုက်မိတဲ့အသံကို ကြားလိုက်ရတယ်။ ဒုန်း။ ဘရိတ်သံ။ အော်သံ။",
    p: "Close on Ye Min standing just inside the lift doorway with his eyes squeezed shut and his "
      + "head turned away from the opening. The road light falls across the side of his face. "
      + "⚠️ THE SHOT IS ENTIRELY ON HIM — nothing of the impact is in frame.",
    u: ["ဒါပေမယ့် တိုက်မိတဲ့အသံကို ကြားလိုက်ရတယ်။",
        "ဒုန်း။ ဘရိတ်သံ။ အော်သံ။"] },

  { t: "The Mother in the Road", l: "ကားလမ်း", k: "road", w: ["မနွယ်နွယ်", "သမီး"],
    g: "ကလေးက လမ်းပေါ်မှာ လဲနေတယ်။ အမေက ဘေးမှာ ဒူးထောက်ပြီး အော်နေတယ်။",
    p: "On the road in the rain: the little girl lying on the wet tarmac and her mother on her "
      + "knees beside her with her head back, screaming. ⚠️ ABSOLUTELY NO INJURY IS SHOWN — no "
      + "blood on the road, on the child, or on her clothes; the girl is simply lying still and "
      + "whole. The red umbrella is a few feet away. Shoot it at enough distance that the child is "
      + "a shape rather than a subject.",
    u: ["ကျွန်တော် မျက်လုံးပြန်ဖွင့်တော့ ကလေးက လမ်းပေါ်မှာ လဲနေတယ်။",
        "သူ့အမေက ဘေးမှာ ဒူးထောက်ပြီး အော်နေတယ်။"] },

  { t: "It Was Her", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကား", k: "ye", w: ["ကိုရဲမင်း", "မနွယ်နွယ်"],
    g: "အဲဒီမိန်းမက — မနွယ်နွယ်။ ကျွန်တော့်ဘေးမှာ ရပ်နေတဲ့ သူနာပြုပဲ။",
    p: "Ye Min in the near foreground turning his head sharply from the open doorway to the woman "
      + "standing beside him, Ma Nwe Nwe sharp behind his shoulder in her white uniform with the "
      + "blood on her face, watching the road and not him. The same face is in both halves of the "
      + "frame, once screaming out there and once perfectly calm in here.",
    u: ["အဲဒီမိန်းမက— မနွယ်နွယ်။ ကျွန်တော့်ဘေးမှာ ရပ်နေတဲ့ သူနာပြုဆရာမပဲ။",
        "“ခင်ဗျား…” မနွယ်နွယ်က လမ်းပေါ်မှာဖြစ်နေတဲ့ အဖြစ်အပျက်ကိုပဲ ကြည့်နေတယ်။"] },

  { t: "He Did Not Go to the Child", c: [[1, "stinger"]], l: "ကားလမ်း", k: "road", w: ["ကိုရဲမင်း"],
    g: "အတိတ်ထဲက ကျွန်တော် ကားပေါ်က ဆင်းလာတယ်။ ဒါပေမယ့် ကလေးဆီ မသွားဘူး။",
    p: "On the road: past-Ye Min out of the car with the driver’s door still open behind him, "
      + "standing in the rain — and moving AWAY from the two figures on the tarmac, toward the "
      + "back of his own car. ⚠️ His body is turned so that the direction he is going is "
      + "unmistakable. The mother and child stay far back in the frame and out of focus.",
    u: ["အတိတ်ထဲက ကျွန်တော်က ကားတံခါးဖွင့်ပြီး ဆင်းလာတယ်။ ဒါပေမယ့် ကလေးဆီ မသွားဘူး။",
        "ကားနောက်ခန်းက အရက်ပုလင်းတွေကို လမ်းဘေးမြောင်းထဲ ပစ်ချတယ်။"] },

  { t: "I'm in Trouble. Help Me.", l: "ကားလမ်း", k: "insert", w: ["ကိုရဲမင်း"],
    g: "ပြီးတော့ ဖုန်းထုတ်ပြီး ကိုဇော်ထက်ကို ခေါ်တယ် — “ငါ ပြဿနာတက်နေပြီ။ မင်း ကူညီရမယ်။”",
    p: "Insert on past-Ye Min’s hands at the roadside in the rain, a phone held to his ear, water "
      + "running off his wrist and off the screen. Behind and below, out of focus, the drainage "
      + "ditch and the pale shapes of bottles in it.",
    u: ["ပြီးတော့ ဖုန်းထုတ်ပြီး ကိုဇော်ထက်ကို ခေါ်တယ်။",
        "“ငါ ပြဿနာတက်နေပြီ။ မင်း ကူညီရမယ်။” ဓာတ်လှေကားတံခါး ပြန်ပိတ်သွားတယ်။"] },

  { t: "She Died Before the Hospital", l: "ဓာတ်လှေကား", k: "nurse", w: ["မနွယ်နွယ်"],
    g: "“ကလေး အသက်ရှင်ခဲ့လား။” “ဆေးရုံမရောက်ခင် သေသွားတယ်။” “ခင်ဗျားကရော…”",
    p: "Close on Ma Nwe Nwe in the lift answering, facing forward rather than at him, completely "
      + "level. She is describing her own daughter’s death in the tone of somebody giving a "
      + "clinical handover.",
    u: ["“ကလေး အသက်ရှင်ခဲ့လား။” ကျွန်တော် မေးတယ်။",
        "“ဆေးရုံမရောက်ခင် သေသွားတယ်။” “ခင်ဗျားကရော…”"] },

  { t: "Now I Knew Why It Would Not Stop", l: "ဓာတ်လှေကား", k: "insert", w: ["မနွယ်နွယ်"],
    g: "“သမီးနောက်လိုက်ပြေးရင်း နောက်ကကားတစ်စီး ထပ်တိုက်သွားတယ်။” အခုမှ သွေးတွေ ဘာလို့ မရပ်တာလဲ သိသွားတယ်။",
    p: "Macro on the side of Ma Nwe Nwe’s face at the hairline, where the line of blood begins. "
      + "⚠️ STILL NO WOUND — the hair is smooth, the skin unbroken, and the blood simply issues "
      + "from beneath the hairline and runs. It is wet and moving. Nothing is torn and nothing is "
      + "explained by the image.",
    u: ["“သမီးနောက်လိုက်ပြေးရင်း နောက်ကကားတစ်စီး ထပ်တိုက်သွားတယ်။”",
        "အခုမှ သူ့ခေါင်းကသွေးတွေ ဘာကြောင့် မရပ်တာလဲ ကျွန်တော် သိသွားတယ်။"] },

  { t: "Did You Only Run Away", c: [[1, "stinger"]], l: "ဓာတ်လှေကား", k: "nurse", w: ["မနွယ်နွယ်"],
    g: "“တောင်းပန်ပါတယ်။ ကြောက်လို့ ထွက်ပြေးမိတာပါ။” မနွယ်နွယ် လှည့်ကြည့်တယ် — “ရှင် ထွက်ပြေးရုံပဲလား။”",
    p: "Close on Ma Nwe Nwe turning her head to look directly at him for the first time in the "
      + "film. ⚠️ THERE IS NO ANGER IN IT. It is a straight, patient question from somebody who "
      + "already knows the answer, and that is why it lands.",
    u: ["“တောင်းပန်ပါတယ်။ ကျွန်တော် ကြောက်သွားလို့ ထွက်ပြေးမိတာပါ။” မနွယ်နွယ် ကျွန်တော့်ဘက် လှည့်ကြည့်တယ်။",
        "“ရှင် ထွက်ပြေးရုံပဲလား။” ဓာတ်လှေကားက နှစ်လွှာမှာ ရပ်သွားတယ်။"] },

  // ── VI · TWO ──────────────────────────────────────────────────────────────
  { t: "Two", c: [[1, "stinger"]], l: "ဓာတ်လှေကား", k: "doors", rev: "doors 3 of 4",
    g: "⚠️ တံခါးပွင့်တဲ့ပုံစံ တတိယအကြိမ် — အပြင်မှာ ရဲစခန်း။ ကိုဇော်ထက် လက်ထိတ်နဲ့။",
    p: "OCCURRENCE 3 OF 4. The identical framing from the back wall of the lift, and in the "
      + "rectangle beyond the open doors the inside of an ordinary police station at night — desk, "
      + "lamp, ceiling fan, plastic chairs. Ko Zaw Htet is seated on a chair in handcuffs. Same "
      + "clean join, no effect at the threshold.",
    u: ["တံခါးအပြင်မှာ ရဲစခန်းတစ်ခု။",
        "ကိုဇော်ထက်က လက်ထိတ်နဲ့ ထိုင်နေတယ်။"] },

  { t: "A Key and a Bottle", l: "ရဲစခန်း", k: "insert",
    g: "စားပွဲပေါ်မှာ ကျွန်တော့်ကားသော့နဲ့ အရက်ပုလင်းတစ်လုံး။",
    p: "Insert on the police desk under the lamp: a car key on a ring and one empty spirit bottle "
      + "standing beside a ledger. Two objects, bagged for nothing, laid out as evidence. Ordinary "
      + "and damning.",
    u: ["စားပွဲပေါ်မှာ ကျွန်တော့်ကားသော့နဲ့ အရက်ပုလင်းတစ်လုံး။",
        "ရဲက ကျွန်တော့်ကို မေးနေတယ်။ “ကားမောင်းတာ ကိုဇော်ထက်ဆိုတာ သေချာလား။”"] },

  { t: "I Was in the Passenger Seat", l: "ရဲစခန်း", k: "station", w: ["ကိုရဲမင်း"],
    g: "အတိတ်ထဲက ကျွန်တော် ခေါင်းညိတ်တယ် — “သေချာပါတယ်။ ကျွန်တော်က ဘေးခုံမှာပါ။”",
    p: "Past-Ye Min across the desk from a uniformed officer, nodding, hands folded, calm and "
      + "credible. ⚠️ HE DOES NOT LOOK LIKE A MAN LYING — he looks like a helpful witness, which "
      + "is exactly what makes the shot unbearable.",
    u: ["အတိတ်ထဲက ကျွန်တော် ခေါင်းညိတ်တယ်။",
        "“သေချာပါတယ်။ ကျွန်တော်က ဘေးခုံမှာပါ။ သူမူးနေလို့ ကျွန်တော် တားသေးတယ်။”"] },

  { t: "You Were Driving", c: [[1, "bigstinger"]], l: "ရဲစခန်း", k: "station", w: ["ကိုဇော်ထက်", "ကိုရဲမင်း"],
    g: "ကိုဇော်ထက်က လန့်ပြီး ကြည့်တယ် — “ရဲမင်း! ကားမောင်းတာ မင်းလေ!” ကျွန်တော်က သူ့ဘက် မကြည့်ဘူး။",
    p: "Both men in one frame at the desk: Ko Zaw Htet half risen from his chair in handcuffs with "
      + "his face open in disbelief, and Ye Min seated beside him looking straight ahead at the "
      + "officer and not turning. ⚠️ The whole shot is one man refusing to move his eyes.",
    u: ["ကိုဇော်ထက်က လန့်ပြီး ကျွန်တော့်ကို ကြည့်တယ်။ “ရဲမင်း! မင်း ဘာပြောနေတာလဲ။ ကားမောင်းတာ မင်းလေ!”",
        "ကျွန်တော်က သူ့ဘက် မကြည့်ဘူး။"] },

  { t: "He Had Nobody. I Had a Father.", l: "ရဲစခန်း", k: "insert",
    g: "ကိုဇော်ထက်မှာ မိသားစုမရှိ။ ငွေမရှိ။ ကျွန်တော့်အဖေကတော့ ငွေရှိတယ်။",
    p: "Insert on the police station desk from a different angle: a hand in a good shirt cuff with "
      + "a decent watch laying a thick envelope beside the ledger, and the officer’s hand resting "
      + "on the ledger beside it. ⚠️ Nothing legible on the envelope, no money visible. Two hands "
      + "and an understanding.",
    u: ["ကိုဇော်ထက်မှာ မိသားစုမရှိဘူး။ ငွေလည်းမရှိဘူး။",
        "ကျွန်တော့်အဖေကတော့ ငွေရှိတယ်။ သက်သေတွေကို ငွေပေးနိုင်တယ်။ ကားမှတ်တမ်းတွေကို ပြောင်းနိုင်တယ်။"] },

  { t: "Twelve Years", l: "ရဲစခန်း", k: "station", w: ["ကိုဇော်ထက်"],
    g: "ကိုဇော်ထက် ထောင်ဆယ့်နှစ်နှစ် ကျသွားခဲ့တယ်။ ကျွန်တော်ကတော့ အပြစ်မရှိသူအဖြစ် လွတ်မြောက်ခဲ့တယ်။",
    p: "Ko Zaw Htet being led out of frame by an officer, seen from behind, his cuffed hands at "
      + "the small of his back — and in the near foreground and sharp, the empty plastic chair he "
      + "was sitting in. The room is otherwise emptying out.",
    u: ["ကိုဇော်ထက် ထောင်ဆယ့်နှစ်နှစ် ကျသွားခဲ့တယ်။",
        "ကျွန်တော်ကတော့ အပြစ်မရှိသူအဖြစ် လွတ်မြောက်ခဲ့တယ်။"] },

  { t: "Did You Help Him", l: "ဓာတ်လှေကား", k: "ye", w: ["ကိုရဲမင်း"],
    g: "“သူ့ကို နောက်မှ ပြန်ကူညီမလို့ပါ။” “ကူညီခဲ့လား။” ကျွန်တော် မဖြေနိုင်ဘူး။",
    p: "Close on Ye Min in the lift, having said something too fast and then been asked one short "
      + "question about it. His mouth is open and nothing is coming. The doors are shut behind "
      + "him.",
    u: ["“သူ့ကို နောက်မှ ပြန်ကူညီမလို့ပါ။” ကျွန်တော် အလျင်စလို ပြောလိုက်တယ်။",
        "မနွယ်နွယ်က မေးတယ်။ “ကူညီခဲ့လား။” ကျွန်တော် မဖြေနိုင်ဘူး။",
        "ကိုဇော်ထက်က ထောင်ထဲဝင်ပြီး နှစ်နှစ်အကြာမှာ ကိုယ့်ကိုယ်ကို အဆုံးစီရင်သွားခဲ့တယ်။"] },

  // ── VII · GROUND ──────────────────────────────────────────────────────────
  { t: "Let Me Off Here", l: "ခလုတ်တန်း", k: "panel", rev: "panel 2 of 3",
    g: "⚠️ ခလုတ်တန်းပုံစံ ဒုတိယအကြိမ် — ခလုတ်တွေကို နှိပ်တယ်။ ဘာမှမဖြစ်ဘူး။",
    p: "OCCURRENCE 2 OF 3. The identical panel insert, with a man’s hand pressed flat across "
      + "several buttons at once. ⚠️ NOT ONE OF THEM IS LIT except B13 at the very bottom, which "
      + "was already lit and stays lit. The panel is not damaged and nothing is flickering; it is "
      + "simply not responding.",
    u: ["ဓာတ်လှေကားက မြေညီထပ်ကို ဖြတ်ဆင်းသွားတယ်။ “ရပ်ပါ။ ကျွန်တော် ဒီမှာဆင်းမယ်။”",
        "ခလုတ်တွေကို နှိပ်တယ်။ ဘာမှမဖြစ်ဘူး။"] },

  { t: "To Whom", l: "ဓာတ်လှေကား", k: "nurse", w: ["မနွယ်နွယ်"],
    g: "“ကျွန်တော် အပြစ်ဝန်ခံမယ်။ အားလုံးကို ပြောမယ်။” “ဘယ်သူ့ကို ပြောမှာလဲ။”",
    p: "Close on Ma Nwe Nwe, who has asked a two-word question and is waiting. Her face is "
      + "sympathetic. She is not scoring a point; she genuinely wants him to work out the answer "
      + "himself.",
    u: ["“ကျွန်တော် အပြစ်ဝန်ခံမယ်။ အားလုံးကို ပြောမယ်။” “ဘယ်သူ့ကို ပြောမှာလဲ။”",
        "“ရဲကို။ မိသားစုကို။ အားလုံးကို။”"] },

  /**
   * SHE POINTS AT THE WATCH ON HIS WRIST. There is no clock in the lift.
   *
   * နာရီ means both clock and watch. The script writes "နံရံက နာရီ" — the WALL
   * clock — at the ward, and plain "ရပ်နေတဲ့နာရီ" here. It never asked for a
   * clock in the car, and the car has never had one: not in the master plate,
   * not in the button-panel plate, not in any image already generated from this
   * board. He has worn a watch since his cast plate. His own watch stopping at
   * the moment he did is also a harder image than a clock on a wall.
   */
  { t: "She Pointed at the Clock", l: "ဓာတ်လှေကား", k: "watch", w: ["ကိုရဲမင်း"],
    rev: "11:47, 2 of 4",
    g: "⚠️ ၁၁:၄၇ ဒုတိယအကြိမ် — ဒီတစ်ခါ **သူ့ကိုယ်ပိုင်လက်ပတ်နာရီ**။ ဓာတ်လှေကားထဲမှာ နာရီ မရှိဘူး။",
    p: "OCCURRENCE 2 OF 4 OF THE 11:47 MOTIF — ON HIS OWN WRIST, NOT ON ANY WALL. Ko Ye Min’s "
      + "left forearm held out in the lift with his shirt cuff turned back, and Ma Nwe Nwe’s index "
      + "finger entering frame from one side and held just short of the watch glass. ⚠️ THE WATCH "
      + "FACE READS ELEVEN FORTY-SEVEN AND THE SECOND HAND IS STOPPED — the same reading as the "
      + "ward clock, on a different object. ⚠️ THERE IS NO CLOCK IN THIS FRAME AND NONE IN THE "
      + "LIFT: brushed steel behind the wrist and nothing else on it.",
    u: ["မနွယ်နွယ်က ရပ်နေတဲ့နာရီကို လက်ညှိုးထိုးပြတယ်။",
        "ည ၁၁ နာရီ ၄၇ မိနစ်။ ကျွန်တော် ကားမတော်တဆဖြစ်ခဲ့တဲ့အချိန်။",
        "“ရှင် အခု ပြန်သွားလို့မရတော့ဘူး။” “ဘာလို့လဲ။”"] },

  { t: "There Was Nobody in the Mirror", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကား", k: "mirror",
    g: "သံနံရံက မှန်တစ်ချပ်လို ပြောင်းသွားတယ်။ မှန်ထဲမှာ ကျွန်တော့်ပုံ မရှိဘူး။",
    p: "The side wall of the lift filling the frame, now mirrored. It reflects the opposite wall, "
      + "the handrail and the lit panel accurately and ordinarily. ⚠️ THE MAN STANDING IN FRONT OF "
      + "IT IS NOT IN IT. His shoulder is visible at the edge of frame in the room; the "
      + "corresponding place in the reflection is empty. Ma Nwe Nwe reflects normally.",
    u: ["သူက ဓာတ်လှေကားနံရံကို ကြည့်ခိုင်းတယ်။ သံနံရံက မှန်တစ်ချပ်လို ပြောင်းသွားတယ်။",
        "မှန်ထဲမှာ ကျွန်တော့်ပုံ မရှိဘူး။"] },

  { t: "They Were Working on Me", l: "အရေးပေါ်ခန်း", k: "mirror",
    g: "မှန်ထဲမှာ အရေးပေါ်ခန်းတစ်ခု ပေါ်လာတယ်။ ဆရာဝန်တွေက ကျွန်တော့်ခန္ဓာကိုယ်ကို ကယ်နေကြတယ်။",
    p: "The mirrored wall now showing an emergency bay instead of the lift: staff in gowns working "
      + "around a trolley under a surgical light, a monitor on a stand. ⚠️ THE PATIENT IS "
      + "COMPLETELY HIDDEN by the staff and the equipment — no body, no blood, no wound anywhere "
      + "in frame. Ordinary bright clinical light, no distortion in the glass.",
    u: ["ဆေးရုံအရေးပေါ်ခန်းတစ်ခု ပေါ်လာတယ်။",
        "ဆရာဝန်တွေက သွေးတွေနဲ့ ပြည့်နေတဲ့ ကျွန်တော့်ခန္ဓာကိုယ်ကို အသက်ကယ်ဖို့ ကြိုးစားနေကြတယ်။"] },

  { t: "Time of Death", c: [[2, "bigstinger"]], l: "အရေးပေါ်ခန်း", k: "insert",
    rev: "clock 3 of 4",
    g: "⚠️ ရပ်နေတဲ့နာရီ တတိယအကြိမ် — စက်ပေါ်က မျဉ်း တန်းသွားတယ်။ “သေဆုံးချိန် ည ၁၁ နာရီ ၄၇ မိနစ်။”",
    p: "OCCURRENCE 3 OF 4, TRANSPOSED. ⚠️ STILL WHAT THE MIRROR IS SHOWING — he has not left the "
      + "lift and neither has she; this is the same vision as the shot before, closer. Insert on a "
      + "patient monitor screen in the emergency bay, the trace running flat across it. ⚠️ Beside "
      + "it, a wall clock in the same square-on framing as the other occurrences, reading eleven "
      + "forty-seven — but THIS ONE IS RUNNING, second hand mid-sweep. Every other timepiece in the "
      + "film is stopped at this reading; this is the one that is still going.",
    u: ["စက်ပေါ်က နှလုံးခုန်မျဉ်းက တန်းသွားတယ်။",
        "ဆရာဝန်တစ်ယောက် နာရီကိုကြည့်ပြီး ပြောတယ်။ “သေဆုံးချိန် ည ၁၁ နာရီ ၄၇ မိနစ်။”",
        "ကျွန်တော် သေပြီးနေပြီ။"] },

  // ── VIII · THE DESCENT ────────────────────────────────────────────────────
  { t: "Your Brakes Failed", l: "ဓာတ်လှေကား", k: "lift", w: ["ကိုရဲမင်း", "မနွယ်နွယ်"],
    g: "“ဒီနေ့ ကားတိုက်တာ မတော်တဆပါ။ ကျွန်တော် ဘယ်သူ့ကိုမှ မတိုက်ခဲ့ဘူး။” “ဟုတ်ပါတယ်။ ဘရိတ်ပေါက်ပြီး ချောက်ထဲကျသွားတာပါ။”",
    p: "Both of them in the lift, Ye Min arguing his case with both hands open and Ma Nwe Nwe "
      + "agreeing with him without it helping in the slightest. The floor indicator above the "
      + "doors is out of focus behind them.",
    u: ["“ဒီနေ့ ကားတိုက်တာ မတော်တဆပါ။ ကျွန်တော် ဘယ်သူ့ကိုမှ မတိုက်ခဲ့ဘူး။”",
        "“ဟုတ်ပါတယ်။” မနွယ်နွယ် ပြန်ဖြေတယ်။ “ရှင့်ကားရဲ့ ဘရိတ်ပေါက်ပြီး ချောက်ထဲကျသွားတာပါ။”"] },

  { t: "How You Lived", l: "ဓာတ်လှေကား", k: "nurse", w: ["မနွယ်နွယ်"],
    g: "“ရှင် ဘယ်လိုသေခဲ့လဲဆိုတာ အရေးမကြီးဘူး။ ဘယ်လိုအသက်ရှင်ခဲ့လဲဆိုတာပဲ အရေးကြီးတယ်။”",
    p: "Close on Ma Nwe Nwe saying the line the whole film exists for. Calm, kind, and completely "
      + "without triumph. She is explaining a rule, not delivering a sentence.",
    u: ["“ဒါဆို ဘာလို့ ဒီလိုလုပ်နေတာလဲ။ ကျွန်တော်လည်း မတော်တဆသေခဲ့တာပဲလေ။”",
        "“ရှင် ဘယ်လိုသေခဲ့လဲဆိုတာ အရေးမကြီးဘူး။ ဘယ်လိုအသက်ရှင်ခဲ့လဲဆိုတာပဲ အရေးကြီးတယ်။”"] },

  { t: "Heat Through the Doors", c: [[2, "stinger"]], l: "ဓာတ်လှေကား", k: "lift", w: ["ကိုရဲမင်း"],
    g: "အောက်ကနေ အော်သံတွေ၊ သံကြိုးဆွဲသံတွေ။ တံခါးတစ်ဖက်ကနေ အပူငွေ့တွေ ဝင်လာတယ်။",
    p: "Both of them in the lift, Ye Min backed against the rear wall with his hands flat on it, "
      + "staring at the closed doors. ⚠️ NOTHING IS VISIBLE AND NOTHING IS HAPPENING TO THE DOORS "
      + "— no glow around them, no light at the seam, no smoke, no fire, no heat shimmer, no "
      + "warping. The lift is exactly as it has been all film. Everything he is reacting to is "
      + "sound and temperature and must stay entirely outside the image.",
    u: ["ဓာတ်လှေကားက B13 နားကို ရောက်လာတယ်။ အောက်ဘက်ကနေ အသံတွေ ကြားရတယ်။",
        "အော်သံတွေ။ သံကြိုးဆွဲသံတွေ။",
        "တံခါးတစ်ဖက်ကနေ အပူငွေ့တွေ ဝင်လာတယ်။"] },

  { t: "You Had Chances", c: [[3, "bigstinger"]], l: "ခလုတ်တန်း", k: "panel", rev: "panel 3 of 3",
    g: "⚠️ ခလုတ်တန်းပုံစံ တတိယအကြိမ် — B7၊ B9၊ B11၊ B12၊ B13။ တစ်ခုချင်း ကျော်ဆင်းသွားတယ်။",
    p: "OCCURRENCE 3 OF 3. The identical panel insert, a hand hammering at it. ⚠️ THE LIT BUTTON "
      + "IS MOVING DOWN THE COLUMN — B7 lit and going out, B9 next, then B11, B12 and finally B13, "
      + "each one extinguishing as the one below it takes over. Everything else about the panel is "
      + "unchanged and undamaged.",
    u: ["ကျွန်တော် ခလုတ်တွေကို အားကုန်နှိပ်တယ်။",
        "“တစ်ကြိမ်ပဲ အခွင့်အရေးပေးပါ။ ကျွန်တော် ပြန်သွားပြီး အားလုံးကို ပြင်ပေးမယ်။”",
        "“ရှင့်မှာ အခွင့်အရေးတွေ ရှိခဲ့ပါတယ်။” မနွယ်နွယ်က အေးအေးဆေးဆေး ပြောတယ်။",
        "“ကျွန်မတို့ကို တိုက်မိတဲ့အချိန် ရှိခဲ့တယ်။ ဆေးရုံပို့နိုင်ခဲ့တယ်။” B7။"] },

  { t: "You Chose Silence", l: "ဓာတ်လှေကား", k: "indicator",
    g: "“ရဲတွေမေးတဲ့အချိန် အမှန်ပြောနိုင်ခဲ့တယ်။” B9။ “ဝန်ခံနိုင်ခဲ့တယ်။” B11။ “အချိန်ရှိခဲ့တယ်။” B12။ “ဒါပေမယ့် ရှင်ရွေးခဲ့တာ တိတ်နေရတာပဲ။” B13။",
    p: "Insert on the small floor indicator above the lift doors, the characters filling the "
      + "frame, reading B13. ⚠️ Ordinary segmented display, ordinary amber, in perfectly good "
      + "order. The lift has arrived where it was always going.",
    u: ["“ရဲတွေမေးတဲ့အချိန် အမှန်ပြောနိုင်ခဲ့တယ်။” B9။",
        "“ကိုဇော်ထက် ထောင်မကျခင် ဝန်ခံနိုင်ခဲ့တယ်။” B11။",
        "“သူ မသေခင်အထိလည်း အချိန်ရှိခဲ့တယ်။” B12။",
        "“ဒါပေမယ့် ရှင်ရွေးခဲ့တာ တိတ်နေရတာပဲ။” B13။ ဓာတ်လှေကား ရပ်သွားတယ်။"] },

  // ── IX · THE BOTTOM FLOOR ─────────────────────────────────────────────────
  { t: "There Was No Fire", c: [[1, "bigstinger"]], l: "ဓာတ်လှေကား", k: "doors",
    rev: "doors 4 of 4",
    g: "⚠️ တံခါးပွင့်တဲ့ပုံစံ နောက်ဆုံးအကြိမ် — **မီးတောက် မရှိဘူး။ အမှောင်ထုကြီးပဲ ရှိတယ်။**",
    p: "OCCURRENCE 4 OF 4, AND THE ONE THE FILM HAS BEEN PROMISING. The identical framing from the "
      + "back wall, square on to the open doors — and in that rectangle there is ⚠️ NO FIRE, NO "
      + "GLOW, NO PIT, NO FIGURES AND NO HEAT. Only unlit darkness, and rain falling through it. "
      + "The lift’s own light reaches a few feet of wet tarmac at the threshold and stops. "
      + "Everything the sound promised is absent, and that absence is the shot.",
    u: ["တံခါးပွင့်သွားတယ်။ အပြင်မှာ မီးတောက်တွေ မရှိဘူး။",
        "အမှောင်ထုကြီးပဲ ရှိတယ်။"] },

  { t: "The Same Road", l: "ကားလမ်း", k: "road",
    g: "အမှောင်ထဲမှာ ကားလမ်းတစ်လမ်း။ မိုးအဆက်မပြတ်။ လမ်းအလယ်မှာ အနီရောင်ထီး။ အဝေးက ကားရှေ့မီးနှစ်လုံး။",
    p: "On the road: a long straight stretch of wet tarmac running away into blackness with rain "
      + "coming down through it. In the middle of the road, a small RED umbrella lying on its "
      + "side. Far down the road, two headlights. ⚠️ No street lamps now, no buildings, no verge — "
      + "the road simply exists and everything either side of it is dark.",
    u: ["အမှောင်ထဲမှာ ကားလမ်းတစ်လမ်း ရှည်လျားနေတယ်။ မိုးအဆက်မပြတ် ရွာနေတယ်။",
        "လမ်းအလယ်မှာ ကလေးမလေးတစ်ယောက်ရဲ့ အနီရောင်ထီး ကျနေတယ်။",
        "အဝေးက ကားရှေ့မီးနှစ်လုံး ပေါ်လာတယ်။ ကျွန်တော့်ကား။",
        "လွန်ခဲ့တဲ့နှစ်ပေါင်းများစွာက အရှိန်အပြည့်နဲ့ မောင်းလာတဲ့ကား။"] },

  { t: "She Was Not a Nurse", c: [[1, "stinger"]], l: "ကားလမ်း", k: "nurse", w: ["မနွယ်နွယ်"],
    g: "“ဒါ ငရဲလား။” သူနာပြုဝတ်စုံ မရှိတော့ဘူး။ မိုးရွာတဲ့ညက မိခင်တစ်ယောက်အဖြစ် ရပ်နေတယ်။",
    p: "Close on Ma Nwe Nwe on the road in the rain — ⚠️ AND SHE IS NOT IN UNIFORM. She is in the "
      + "ordinary clothes she was wearing the night of the crash, soaked through, hair down and "
      + "wet. ⚠️ THE BLOOD IS GONE. Her face is unmarked. She looks like a tired mother in the "
      + "rain, because that is what she is.",
    u: ["“ဒါ ငရဲလား။” မနွယ်နွယ်ကို လှည့်မေးလိုက်တယ်။",
        "သူနာပြုဝတ်စုံ မရှိတော့ဘူး။ မိုးရွာတဲ့ညက သမီးကိုဖက်ပြီး အော်ငိုနေခဲ့တဲ့ မိခင်တစ်ယောက်အဖြစ် ကျွန်တော့်ရှေ့မှာ ရပ်နေတယ်။"] },

  { t: "We Moved On Years Ago", c: [[2, "stinger"]], l: "ကားလမ်း", k: "road", w: ["မနွယ်နွယ်", "သမီး"],
    g: "အမှောင်ထဲက ကလေးမလေး ထွက်လာပြီး အမေ့လက်ကို ဆုပ်ကိုင်တယ် — “ကျွန်မတို့က လွန်ခဲ့တဲ့နှစ်တွေကတည်းက ရှေ့ဆက်သွားခဲ့ပြီးပြီ။”",
    p: "On the road: the little girl has come out of the dark and taken her mother’s hand. ⚠️ SHE "
      + "IS COMPLETELY WHOLE AND UNHURT — no injury, no blood, no marks, dry rather than soaked, "
      + "her yellow dress clean. Behind the two of them a soft ordinary light has opened, like a "
      + "doorway with daylight on the other side. No rays, no glare, no figures in it.",
    u: ["“ကျွန်မ မသိဘူး။ ကျွန်မက ရှင့်ကို လာပို့ပေးတာပဲ။” “ခင်ဗျားတို့က ဘယ်ကိုသွားမှာလဲ။”",
        "အမှောင်ထဲက ကလေးမလေးတစ်ယောက် ထွက်လာပြီး မနွယ်နွယ်ရဲ့လက်ကို ဆုပ်ကိုင်လိုက်တယ်။",
        "“ကျွန်မတို့က လွန်ခဲ့တဲ့နှစ်တွေကတည်းက ရှေ့ဆက်သွားခဲ့ပြီးပြီ။”"] },

  { t: "The Lift Was Gone", l: "ကားလမ်း", k: "road", w: ["ကိုရဲမင်း"],
    g: "နှစ်ယောက်သား အလင်းထဲ ဝင်သွားကြတယ်။ ပြန်လှည့်ကြည့်တော့ ဓာတ်လှေကား မရှိတော့ဘူး။",
    p: "Ye Min alone on the wet road, turned back the way he came — and there is nothing behind "
      + "him. ⚠️ NO LIFT, NO DOORWAY, NO OUTLINE, NO LIGHT. Only more road running away into rain "
      + "and dark. He is a small figure in a wide empty frame.",
    u: ["မနွယ်နွယ်နဲ့ သူ့သမီးရဲ့နောက်မှာ အလင်းရောင်တစ်ခု ပွင့်လာတယ်။ နှစ်ယောက်သား အဲဒီအလင်းထဲ လျှောက်ဝင်သွားကြတယ်။",
        "ဓာတ်လှေကားတံခါးက ကျွန်တော့်နောက်မှာ ပိတ်သွားတယ်။",
        "ပြန်လှည့်ကြည့်တော့ ဓာတ်လှေကား မရှိတော့ဘူး။"] },

  { t: "However Far I Ran", c: [[1, "stinger"]], l: "ကားလမ်း", k: "headlights", w: ["ကိုရဲမင်း"],
    g: "လမ်းဘေးကို ပြေးတယ်။ ဒါပေမယ့် ဘယ်လောက်ပြေးပြေး လမ်းအလယ်ကိုပဲ ပြန်ရောက်လာတယ်။",
    p: "Facing the oncoming car from the middle of the road, the two headlights the only light in "
      + "the frame and much closer than before, rain slashing through the beams. Ye Min is a "
      + "silhouette against them, caught mid-stride and facing the wrong way. ⚠️ No fire, no "
      + "supernatural light — two ordinary headlights on a wet road.",
    u: ["ကားရှေ့မီးက ပိုနီးလာတယ်။",
        "ကျွန်တော် လမ်းဘေးကို ပြေးတယ်။ ဒါပေမယ့် ဘယ်လောက်ပြေးပြေး လမ်းအလယ်ကိုပဲ ပြန်ရောက်လာတယ်။"] },

  { t: "I Felt All of It", l: "ကားလမ်း", k: "ye", w: ["ကိုရဲမင်း"],
    g: "ကားက တိုက်သွားတယ်။ နာကျင်မှုအားလုံးကို ခံစားရတယ်။ အရိုးတွေကျိုးတယ်။ အသက်ရှူမရဘူး။",
    p: "Close on Ye Min’s face at the instant of it — eyes wide, mouth open, everything in it at "
      + "once. ⚠️ THE FRAME CONTAINS HIS FACE AND THE HEADLIGHT GLARE AND NOTHING ELSE. No impact, "
      + "no body, no blood, no injury of any kind is shown anywhere in this film.",
    u: ["ကားက ကျွန်တော့်ကို တိုက်သွားတယ်။ နာကျင်မှုအားလုံးကို ခံစားရတယ်။",
        "အရိုးတွေကျိုးတယ်။ အသက်ရှူမရဘူး။ အကူအညီတောင်းပေမယ့် ကားက ရပ်မသွားဘူး။"] },

  { t: "Not a Mark on Me", l: "ကားလမ်း", k: "road", w: ["ကိုရဲမင်း"],
    g: "ခဏအကြာမှာ လမ်းအလယ်မှာ ပြန်ရပ်နေတယ်။ ကိုယ်ပေါ်မှာ ဒဏ်ရာတစ်ခုမှ မရှိတော့ဘူး။",
    p: "Ye Min standing in the middle of the road again, upright and intact, his clothes wet but "
      + "undamaged, looking down at his own hands. ⚠️ NOT A MARK ON HIM. The red umbrella lies "
      + "where it always lies. Far down the road, two headlights are appearing again.",
    u: ["ခဏအကြာမှာ ကျွန်တော် လမ်းအလယ်မှာ ပြန်ရပ်နေတယ်။ ကိုယ်ပေါ်မှာ ဒဏ်ရာတစ်ခုမှ မရှိတော့ဘူး။",
        "အဝေးမှာ ကားရှေ့မီးနှစ်လုံး ပြန်ပေါ်လာတယ်။ ကျွန်တော် အဲဒီညကို ထပ်ကြုံရတယ်။ ပြီးတော့ ထပ်ကြုံရတယ်။"] },

  { t: "He Was Standing by the Umbrella", l: "ကားလမ်း", k: "road", w: ["ကိုဇော်ထက်"],
    g: "အကြိမ်တိုင်း ကားမတိုက်ခင် အနီရောင်ထီးဘေးမှာ ကိုဇော်ထက် ပေါ်လာတယ်။",
    p: "On the road: Ko Zaw Htet standing quietly beside the red umbrella in the rain, hands at "
      + "his sides, looking at Ye Min. ⚠️ HE IS NOT ANGRY, NOT ACCUSING AND NOT MENACING — his "
      + "face is calm and almost gentle, and he is entirely unharmed. Headlights are washing "
      + "across the road behind him.",
    u: ["အကြိမ်တိုင်း ကားမတိုက်ခင် အနီရောင်ထီးဘေးမှာ ကိုဇော်ထက် ပေါ်လာတယ်။",
        "သူက ကျွန်တော့်ကို မကယ်ဘူး။ မမုန်းဘူး။ စိတ်မဆိုးဘူး။"] },

  { t: "You Were Driving, Ye Min", c: [[1, "stinger"]], l: "ကားလမ်း", k: "ye", w: ["ကိုဇော်ထက်"],
    g: "ရဲစခန်းမှာ ကျွန်တော် ပြောခဲ့တဲ့စကားကိုပဲ အေးအေးဆေးဆေး ပြန်ပြောတယ် — “ကားမောင်းတာ မင်းလေ ရဲမင်း။”",
    p: "Close on Ko Zaw Htet in the rain saying it. ⚠️ FLAT AND KIND, with no edge on it at all — "
      + "the exact tone in which a man states something obvious. This is the sentence Ye Min put "
      + "in his mouth, handed back to him once per night forever.",
    u: ["ကျွန်တော် ရဲစခန်းမှာ သူ့အပေါ် အပြစ်ပုံချခဲ့တုန်းက ပြောခဲ့တဲ့စကားကိုပဲ အေးအေးဆေးဆေး ပြန်ပြောတယ်။",
        "“ကားမောင်းတာ မင်းလေ ရဲမင်း။”"] },

  { t: "It Never Moves", c: [[1, "finalstinger"]], l: "ကားလမ်း", k: "clock", rev: "clock 4 of 4",
    g: "⚠️ ရပ်နေတဲ့နာရီ နောက်ဆုံးအကြိမ် — ည ၁၁ နာရီ ၄၇ မိနစ်ကနေ ဘယ်တော့မှ မရွေ့တော့ဘူး။",
    p: "FINAL SHOT. OCCURRENCE 4 OF 4. The identical clock framing one last time — same distance, "
      + "same square-on angle, hands at eleven forty-seven, second hand stopped. ⚠️ BUT IT IS "
      + "STANDING IN THE DARK AT THE ROADSIDE IN THE RAIN, with water running down its glass and "
      + "nothing around it but blackness. No wall, no building, no explanation.",
    u: ["ကားက ထပ်တိုက်တယ်။ အရိုးတွေ ထပ်ကျိုးတယ်။",
        "အဝေးမှာ ရပ်နေတဲ့နာရီတစ်လုံးကတော့ ည ၁၁ နာရီ ၄၇ မိနစ်ကနေ ဘယ်တော့မှ မရွေ့တော့ဘူး။"] },
];

// ── SCAFFOLDING ─────────────────────────────────────────────────────────────

const STYLE = "Contemporary Myanmar, 16:9, 35mm grain, photorealism. ORDINARY LIGHT ONLY: hospital "
  + "fluorescents, a lift’s own ceiling panel, strip lights in a beer station, street lamps and "
  + "headlights on a wet road, a desk lamp in a police station. Everything is a working, ordinary "
  + "place. ⚠️ NOT A HORROR SET AND NOT AN AFTERLIFE SET — no green or teal grade, no fog or "
  + "haze, no smoke, no glow, no decay, no heavy vignette, no rays of light. One still instant, "
  + "no montage or visible sound effects. No gore, no wounds, no blood except the one thin line "
  + "on Ma Nwe Nwe’s face, and no legible writing except where a shot calls for it.";

const TIME_NIGHT = "TIME: NIGHT. Every location in this film is at night, and the hospital and the "
  + "lift have no windows. ⚠️ THERE IS NO CLOCK ANYWHERE INSIDE THE LIFT — no wall clock, no "
  + "digital readout of the time, nothing in the car that shows an hour. Ordinary "
  + "night: no moonlight, no sky, nothing atmospheric.";

/** Shots where a character has to be readable as unharmed. */
const UNHURT = new Set(["We Moved On Years Ago", "He Was Standing by the Umbrella",
  "You Were Driving, Ye Min", "Not a Mark on Me"]);

SCENES.forEach((s, i) => {
  const n = i + 1, who = s.w || [];
  s.n = n;
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot ${n} "${s.t}" has no camera key`);
  s.time = TIME_NIGHT;

  const cont = ["Continuity: ordinary living people photographed straight."];

  // The single most important rule on this board. The story spends its whole
  // third act promising fire and then refuses to deliver it, and one helpful
  // flame anywhere earlier throws that away.
  cont.push("⚠️ THERE IS NO FIRE ANYWHERE IN THIS FILM — no flames, no embers, no glow, no heat "
    + "shimmer, no smoke, no pit, no chains, no demons, no figures in darkness. Nothing "
    + "traditionally infernal appears in any shot. The screaming and the heat are SOUND and "
    + "TEMPERATURE only and are never illustrated.");

  if (who.includes("မနွယ်နွယ်")) cont.push(n >= 55
    ? "Ma Nwe Nwe is in the ordinary clothes of the night of the crash, soaked through, hair down "
      + "— NO uniform and NO blood; her face is unmarked."
    : "Ma Nwe Nwe in a plain white nurse’s uniform and cap with a name badge; one thin wet line "
      + "of blood from under the hairline down one side of the face and neck, no wound visible, "
      + "no pooling and no spatter. Calm, kind and professional throughout.");
  if (who.includes("ကိုရဲမင်း")) cont.push("⚠️ Ye Min is uninjured in every shot of this film — "
    + "good pale blue shirt and dark trousers, no gown, no blood, no bandage, no marks, even "
    + "immediately after being struck.");
  if (who.includes("ကိုဇော်ထက်")) cont.push("Ko Zaw Htet in a cheap shirt and worn jeans, lean and "
    + "weathered, entirely unharmed; never menacing and never accusing.");
  if (who.includes("သမီး")) cont.push("⚠️ The girl is NEVER shown injured, bleeding or marked at "
    + "any point, including where she lies in the road — yellow dress, two short plaits, whole.");
  if (UNHURT.has(s.t)) cont.push("⚠️ Everyone in this frame is visibly unharmed and calm.");

  cont.push("The lift keeps the geometry of the master plate: camera against the back wall, doors "
    + "at the far end, button panel on the right beside them, indicator above.");

  s.cont = cont.join(" ");
  s.style = STYLE;
});
