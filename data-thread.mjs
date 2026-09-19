/**
 * အမေ အိပ်သွားပြီလား — ARE YOU ASLEEP, MOTHER?
 *
 * Board for areyousleepingmom.txt.
 *
 *   1. THE DOOR is the motif, and it inverts. A closed door with a light gap
 *      beneath it and something on the other side: the bedroom door with two
 *      bare feet, the front door with the knocking — and then the front door
 *      again from the LANDING, with the narrator on the outside and the old
 *      woman shut in with it. Same framing, other side.
 *   2. THE THING IS NEVER RESOLVED AS A GHOST. It has no plate of its own; it
 *      wears Ko Aung Min's face, which is why his reference exists. When it is
 *      finally seen it looks like a living man — no pallor, no damage, nothing
 *      transparent. The only thing wrong is that the smile does not move.
 *   3. THE BLACK THREADS APPEAR ONCE. They are the story's worst image and the
 *      reason the scissors are in the first shot; showing them twice would make
 *      them a special effect instead of a memory.
 *   4. WHAT THE FIRST FOUR SHOTS WITHHOLD. On night one she is looking past him
 *      at his pillow with scissors in her hand. Nothing is on that pillow in
 *      frame. Shot 43 is what she was looking at, and it only lands if the
 *      audience was not shown it the first time.
 *   5. An ordinary rented flat on a fourth floor. Nothing in it is haunted
 *      except the sound of a telephone.
 */

export const CAST = [
  { name: "ကျွန်တော်", en: "The narrator — the lodger, mid-twenties",
    prompt: "A Burmese man in his mid-twenties, slim, medium-brown skin, an oval face with a "
      + "slightly nervous set to it, short black hair, clean-shaven. Newly arrived in Yangon "
      + "looking for work: a plain checked short-sleeved shirt and dark trousers by day, a grey "
      + "T-shirt and a checked longyi at night, rubber slippers. A cheap backpack is his only "
      + "luggage. Clear white sclera, natural dark brown irises, ordinary healthy eyes throughout "
      + "— he becomes frightened and sleepless, never ill." },
  { name: "အဘွား", en: "The old woman — Ko Aung Min’s mother, about seventy",
    prompt: "A Burmese woman of about seventy, small and thin, medium-brown skin, a narrow deeply "
      + "lined face, white hair pulled back into a small knot. A faded cotton blouse and a dark "
      + "htamein, a thin cardigan at night, bare feet indoors. ⚠️ SHE IS EXHAUSTED IN A SPECIFIC "
      + "WAY — the exhaustion of somebody refusing to sleep rather than somebody who is ill: "
      + "swollen upper and lower lids, deep shadow beneath the eyes, visible blood vessels in the "
      + "whites, natural dark brown irises and normal black pupils, no glow. A small red pinch "
      + "mark on one forearm. Entirely ordinary, entirely alive, never sinister.",
    pose: "The subject stands facing the camera square on, full figure in frame, hands folded in "
      + "front of her, a tired and composed expression" },
  { name: "ကိုအောင်မင်း", en: "Ko Aung Min — her son, about thirty",
    prompt: "A Burmese man of about thirty, medium build, medium-brown skin, a broad open face, "
      + "short neat black hair, clean-shaven. A plain white shirt and dark trousers. ⚠️ HE IS "
      + "USED TWO WAYS AND MUST LOOK IDENTICAL IN BOTH: as the young man in a framed graduation "
      + "photograph, and later as a figure sitting on a bed. In the second use he looks EXACTLY "
      + "as alive and as ordinary as in the photograph — no pallor, no injury, nothing "
      + "transparent, nothing floating, no shadow that is not cast by the room. Everything wrong "
      + "about him is in one detail the shot will name, and nothing else." },
  { name: "ညီမ", en: "The old woman’s younger sister, about sixty",
    prompt: "A Burmese woman of about sixty, sturdier and healthier-looking than her sister, "
      + "medium-brown skin, a round face, greying hair pinned back, a floral blouse and dark "
      + "htamein, a cloth shopping bag over one arm. Brisk, kind, and plainly the one in the "
      + "family who copes. Appears only at the very end." },
];

export const LOCS = [
  { name: "ဧည့်ခန်း", en: "The flat — master geometry plate",
    prompt: "THE MASTER GEOMETRY PLATE FOR THIS FILM. Almost everything happens in this one room "
      + "and it matters constantly which door is which, so fix the layout once. The main room of "
      + "a small fourth-floor Yangon flat, photographed from the corner at chest height so the "
      + "whole layout reads. FAR WALL: the FRONT DOOR of the flat, a plain painted wooden door "
      + "with a security grille gate folded back beside it and a clear gap of light beneath it. "
      + "LEFT WALL: a heavy old WOODEN BED where the old woman sleeps, low, with a thin mattress "
      + "and a folded blanket. RIGHT WALL: TWO INTERIOR DOORS side by side — the nearer one "
      + "standing open onto the lodger’s small bedroom, the further one CLOSED AND PADLOCKED. "
      + "CENTRE: a small dining table with two chairs and a steel flask on it. A ceiling fan, one "
      + "fluorescent tube, a barred window, worn vinyl floor. Empty of people. An ordinary flat "
      + "somebody actually lives in — no decay, no grime, no fog." },
  { name: "ကျွန်တော့်အခန်း", en: "The lodger’s bedroom",
    prompt: "A small plain bedroom off the main room of a Yangon flat: a single bed against the "
      + "wall with a thin pillow and a folded blanket, a backpack on the floor, a plastic stool, "
      + "a bare bulb, a small barred window. The door is a plain painted wooden one with a clear "
      + "GAP OF LIGHT BENEATH IT and a small brass slide bolt newly fitted on the inside, the "
      + "screw holes still bright. Empty of people. Ordinary, cheap and perfectly unremarkable." },
  { name: "အတွင်းခန်း", en: "The locked inner room",
    prompt: "A small bedroom that has been shut for two years, opened. A single bed made up neatly "
      + "with a cover that has gone grey with dust, a wooden wardrobe, and on top of a low chest "
      + "a FRAMED GRADUATION PHOTOGRAPH of a young man standing upright. In front of the frame, a "
      + "small dish of long-dried flowers gone brown and brittle, and one folded paper card laid "
      + "flat. Still air, dust visible in the light from the doorway. Empty of people. ⚠️ Nothing "
      + "horror-dressed — it is a room somebody has kept, and that is the whole of it." },
  { name: "လှေကား", en: "The fourth-floor landing",
    prompt: "The concrete landing of an old Yangon walk-up block: a half-turn staircase with a "
      + "painted iron handrail, chipped terrazzo treads, pale green lower walls, one fluorescent "
      + "tube. Two flat doors off the landing, each with a folded-back security grille and a shoe "
      + "rack beside it. An open window at the turn of the stairs. Empty of people. No readable "
      + "unit numbers or signage." },
];

/** Composition vocabulary. One per shot, stated first and alone. */
const CAM = {
  room: 'THE FLAT, WIDE. Camera at chest height in the corner of the main room, the whole layout in frame as in the master plate.',
  table: 'AT THE TABLE. Camera at seated height across the small dining table.',
  bedroom: 'THE LODGER’S ROOM, WIDE. Camera at chest height in his bedroom doorway.',
  pillow: 'PILLOW HEIGHT. Camera on the mattress beside the narrator’s head, level with his face.',
  foot: 'FROM THE FOOT OF THE BED. Camera low at the end of the mattress looking back along it toward the pillow.',
  door: 'THE DOOR, SQUARE ON. Camera at chest height directly facing a closed door from the inside, framed so the door fills most of frame and the strip of light beneath it runs across the bottom. Reproduce this framing identically every time it recurs.',
  doorout: '⚠️ THE DOOR MOTIF, INVERTED. The same square-on framing at the same height and the same distance — but from the LANDING, on the outside of the front door, with the light now behind the camera and the gap beneath the door dark.',
  face: 'CLOSE ON THE NARRATOR. Camera at his eye height, head-and-shoulders crop.',
  old: 'CLOSE ON THE OLD WOMAN. Camera at her eye height, head-and-shoulders crop.',
  two: 'TWO-SHOT. Camera at chest height with both of them in frame.',
  hands: 'INSERT ON HANDS. Camera close on hands and what they hold, forearms entering frame, faces out of shot.',
  phone: 'INSERT ON A PHONE SCREEN. Camera square on to the screen, the screen the brightest thing in frame.',
  inner: 'THE INNER ROOM. Camera at chest height in the opened doorway of the locked room.',
  photo: 'INSERT ON THE PHOTOGRAPH. Camera square on to the framed graduation portrait at close range.',
  stair: 'ON THE LANDING. Camera at chest height on the fourth-floor landing.',
  gap: 'THROUGH THE GAP. Camera at eye height behind a door standing slightly ajar, the vertical slot of the opening framing what is beyond it.',
  ear: '⚠️ THE THREADS — THE ONLY TIME. Macro on the side of a head at the ear, shallow focus.',
};

export const SCENES = [
  // ── I · THE FIRST NIGHT ───────────────────────────────────────────────────
  { t: "She Was Sitting at My Feet", l: "ကျွန်တော့်အခန်း", k: "foot", w: ["အဘွား"],
    g: "ပထမညမှာပဲ အဘွားက ကျွန်တော့်ခြေရင်းမှာ ထိုင်နေတယ်။",
    p: "From the foot of the bed looking back along it: the old woman sitting on the very end of "
      + "the mattress with her back half to the camera, upright and still, the narrator asleep "
      + "further up the bed. The bare bulb is off; the only light comes through the open bedroom "
      + "door from the main room.",
    u: ["အဲဒီတိုက်ခန်းမှာ စနေတဲ့ ပထမညက အဘွားကြီးတစ်ယောက် ကျွန်တော့်ခြေရင်းမှာ ထိုင်နေတယ်။"] },

  { t: "A Pair of Scissors", c: [[0, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "hands", w: ["အဘွား"],
    g: "သူ့လက်ထဲမှာ ကတ်ကြေးတစ်လက်။",
    p: "Insert on the old woman’s hands in her lap: a pair of ordinary household scissors held "
      + "loosely, blades closed, pointing away from her. Old steel, worn handles. ⚠️ Nothing on "
      + "the blades — no blood, no thread, no hair. Just scissors in an old woman’s hands.",
    u: ["သူ့လက်ထဲမှာ ကတ်ကြေးတစ်လက်။"] },

  { t: "Don't Move", c: [[1, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "old", w: ["အဘွား"],
    g: "ကျွန်တော် လန့်နိုးတော့ အဘွားက နှုတ်ခမ်းပေါ် လက်ညှိုးတင်ပြတယ် — “မလှုပ်နဲ့။”",
    p: "Close on the old woman, one index finger raised and laid vertically across her lips. Her "
      + "expression is not menacing — it is urgent and careful, the face of somebody trying not to "
      + "startle something. She is speaking very quietly.",
    u: ["ကျွန်တော် လန့်နိုးသွားတော့ အဘွားက နှုတ်ခမ်းပေါ် လက်ညှိုးတင်ပြတယ်။",
        "“မလှုပ်နဲ့။”"] },

  { t: "She Was Not Looking at Me", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "pillow", w: ["အဘွား"],
    g: "သူ ကြည့်နေတာ ကျွန်တော့်ကို မဟုတ်ဘူး — ခေါင်းအုံးနောက်ကို။",
    p: "At pillow height beside the narrator’s head. The old woman is in the background, and her "
      + "eyes are NOT on him — her gaze goes just past his head to the pillow and the wall behind "
      + "it. ⚠️ THERE IS NOTHING THERE. The pillow is plain and empty, the wall is bare. Whatever "
      + "she is looking at is not in this frame and must not be put into it.",
    u: ["သူ ကြည့်နေတာ ကျွန်တော့်ကို မဟုတ်ဘူး။",
        "ကျွန်တော့်ခေါင်းအုံးနောက်ကို။"] },

  // ── II · HOW I CAME TO BE THERE ───────────────────────────────────────────
  { t: "Free Rent", l: "လှေကား", k: "stair", w: ["ကျွန်တော်"],
    g: "ရန်ကုန်ကို အလုပ်လာရှာတုန်း နေစရာမရှိလို့ ကိုအောင်မင်းရဲ့ကြော်ငြာကို လက်ခံခဲ့တာ။ အခန်းခ အခမဲ့။",
    p: "The narrator arriving on the fourth-floor landing in daylight with a cheap backpack on one "
      + "shoulder, checking a phone against the flat door. New in the city and out of options.",
    u: ["ရန်ကုန်ကို အလုပ်လာရှာတုန်းက နေစရာမရှိလို့ ကိုအောင်မင်းရဲ့ ကြော်ငြာကို ကျွန်တော် လက်ခံခဲ့တာပါ။",
        "အခန်းခ အခမဲ့။ ညဘက် သူ့အမေနဲ့ အဖော်နေပေးဖို့ပဲ လိုတယ်။ သူက ညဆိုင်းအလုပ်လုပ်တယ်တဲ့။"] },

  { t: "Two Doors", l: "ဧည့်ခန်း", k: "room",
    g: "လေးလွှာ။ အဘွားက ဧည့်ခန်းကုတင်မှာ။ ကျွန်တော့်ကို အပြင်ဘက်အခန်း။ အတွင်းခန်းက သော့ပိတ်ထား။",
    p: "The flat wide in daylight, exactly as in the master plate and empty of people. ⚠️ THE "
      + "TWO INTERIOR DOORS ARE THE SUBJECT: the nearer standing open onto a small plain bedroom, "
      + "the further one shut with a padlock through the hasp and a film of dust along its top "
      + "edge. The old woman’s wooden bed is against the left wall.",
    u: ["တိုက်ခန်းက လေးလွှာမှာ။ အဘွားက ဧည့်ခန်းက သစ်သားကုတင်မှာ အိပ်တယ်။",
        "ကျွန်တော့်ကို အပြင်ဘက်အိပ်ခန်း ပေးထားပြီး အတွင်းခန်းကတော့ သော့ပိတ်ထားတယ်။"] },

  { t: "She Gets Confused at Night", l: "ဧည့်ခန်း", k: "two", w: ["ကိုအောင်မင်း", "ကျွန်တော်"],
    g: "“အမေက ညဘက်ဆို စိတ်နည်းနည်းရှုပ်တတ်တယ်။ တစ်ခါတလေ လူမှားခေါ်တတ်တယ်။”",
    p: "Ko Aung Min and the narrator standing together in the main room in the late afternoon, Ko "
      + "Aung Min mid-explanation with one hand loose in the air, apologetic and slightly "
      + "embarrassed. An ordinary handover between a landlord and a lodger.",
    u: ["“အမေက ညဘက်ဆို စိတ်နည်းနည်းရှုပ်တတ်တယ်။ တစ်ခါတလေ လူမှားခေါ်တတ်တယ်။ သိပ်စိတ်ထဲမထားနဲ့နော်။”"] },

  { t: "She Watched Her Son", l: "ဧည့်ခန်း", k: "table", w: ["အဘွား"],
    g: "အဘွားက စားပွဲမှာ ထိုင်နေတယ်။ ထမင်းမစားဘူး။ သူ့သားကိုပဲ ကြည့်နေတယ်။",
    p: "The old woman seated at the small dining table with a full plate untouched in front of her, "
      + "her hands in her lap. She is not looking at the food. Her eyes are fixed off frame on her "
      + "son, and the look on her face is not a mother listening — it is somebody memorising.",
    u: ["ကိုအောင်မင်း ပြောနေတုန်း အဘွားက ထမင်းစားပွဲမှာ ထိုင်နေတယ်။",
        "ထမင်းမစားဘူး။ သူ့သားကိုပဲ ကြည့်နေတယ်။"] },

  { t: "Pick Up When I Call", l: "ဧည့်ခန်း", k: "hands", w: ["အဘွား", "ကျွန်တော်"],
    g: "“ငါဖုန်းဆက်ရင် ကိုင်ပေးနော်။ အမေ အိပ်ပြီလား သိချင်လို့။” အဘွားက စားပွဲအောက်က လက်ကို ဆုပ်တယ်။",
    p: "Insert beneath the table: the old woman’s hand has closed hard around the narrator’s wrist, "
      + "out of sight of the man talking above. Her grip is tight enough to have gone pale at the "
      + "knuckles. Two chairs and two pairs of legs frame it.",
    u: ["အလုပ်သွားခါနီး ကိုအောင်မင်းက လှမ်းပြောတယ်။ “ညီလေး။ ညကျ ငါဖုန်းဆက်ရင် ကိုင်ပေးနော်။ အမေ အိပ်ပြီလား သိချင်လို့။”",
        "အဘွားက စားပွဲအောက်မှာ ကျွန်တော့်လက်ကို လှမ်းဆုပ်တယ်။"] },

  { t: "She Shook Her Head", l: "ဧည့်ခန်း", k: "old", w: ["အဘွား"],
    g: "ကျွန်တော် လှည့်ကြည့်တော့ ခေါင်းကိုပဲ ဖြည်းဖြည်းခါနေတယ်။",
    p: "Close on the old woman at the table, head turning very slightly side to side — a small "
      + "private refusal meant for the narrator alone and hidden from the man in the room. Her son "
      + "is a soft shape out of focus behind her.",
    u: ["ကျွန်တော် လှည့်ကြည့်တော့ ခေါင်းကိုပဲ ဖြည်းဖြည်းခါနေတယ်။"] },

  // ── III · THE THREADS ARE TANGLED ─────────────────────────────────────────
  { t: "The Threads Are Tangled", l: "ကျွန်တော့်အခန်း", k: "bedroom", w: ["အဘွား"],
    g: "မီးဖွင့်လိုက်တော့ အဘွားက ကတ်ကြေးကို အင်္ကျီအောက် ဖွက်လိုက်တယ်။ “ချည်စတွေ ရှုပ်နေလို့။”",
    p: "The bedroom with the bulb now on, hard and flat. The old woman is caught half-standing "
      + "beside the bed, one hand already moving the scissors under the front of her blouse. She "
      + "is not startled the way an intruder is startled; she is tidying something away.",
    u: ["အဲဒီညမှာပဲ ကတ်ကြေးနဲ့ ကျွန်တော့်အခန်းထဲ ရောက်လာတာ။",
        "ကျွန်တော် မီးဖွင့်လိုက်တော့ အဘွားက ကတ်ကြေးကို အင်္ကျီအောက် ဖွက်လိုက်တယ်။",
        "“အဘွား။ ဘာလုပ်နေတာလဲ။” “ချည်စတွေ ရှုပ်နေလို့။”"] },

  { t: "There Were No Threads", c: [[0, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "hands",
    g: "ကျွန်တော့်ခေါင်းအုံးပေါ်မှာ ချည်စတစ်စမှ မရှိဘူး။",
    p: "Macro across the surface of the pillow under the bare bulb, close enough to read the weave "
      + "of the cotton. ⚠️ IT IS COMPLETELY CLEAN — no thread, no hair, no lint, no mark of any "
      + "kind. The emptiness is the subject of the shot.",
    u: ["ကျွန်တော့်ခေါင်းအုံးပေါ်မှာ ချည်စတစ်စမှ မရှိဘူး။"] },

  { t: "He Fitted a Bolt", l: "ကျွန်တော့်အခန်း", k: "hands", w: ["ကိုအောင်မင်း"],
    g: "နောက်နေ့ ကိုအောင်မင်းက တောင်းပန်ပြီး တံခါးမှာ အတွင်းဂျက် တပ်ပေးတယ်။",
    p: "Insert on the inside of the bedroom door in daylight: a man’s hands driving the last screw "
      + "into a small brass slide bolt, the screw holes bright and the brass unworn. A "
      + "screwdriver, two spare screws on the floor. An ordinary, kindly, useless precaution.",
    u: ["နောက်နေ့ ကိုအောင်မင်းကို ပြောပြတော့ သူက တောင်းပန်တယ်။ ကျွန်တော့်တံခါးမှာ အတွင်းဂျက်တစ်ခု ဝယ်တပ်ပေးတယ်။",
        "“ဒီည အေးအေးဆေးဆေးအိပ်တော့။”"] },

  // ── IV · IS MOTHER ASLEEP ─────────────────────────────────────────────────
  { t: "Is Mother Asleep", l: "ကျွန်တော့်အခန်း", k: "phone",
    g: "ဆယ့်နှစ်နာရီကျော်မှာ ဖုန်းဆက်လာတယ် — “အမေ အိပ်သွားပြီလား။”",
    p: "Insert on the narrator’s phone screen in the dark: an incoming call, the caller name in "
      + "Burmese script and unreadable at this angle, the screen the only light in the room. The "
      + "time on the status bar reads past midnight.",
    u: ["အဲဒီည ဆယ့်နှစ်နာရီကျော်မှာ သူ ဖုန်းဆက်လာတယ်။",
        "“အမေ အိပ်သွားပြီလား။”"] },

  { t: "Her Back Was Turned", l: "ဧည့်ခန်း", k: "gap", w: ["အဘွား"],
    g: "တံခါးကြားကနေ ကြည့်လိုက်တော့ အဘွားက ကုတင်ပေါ်မှာ ကျောပေးလှဲနေတယ်။",
    p: "Through the vertical slot of the bedroom door standing ajar: the main room beyond, and on "
      + "the wooden bed against the far wall the old woman lying on her side with her back to the "
      + "camera, blanket to her shoulder, motionless. She looks exactly like somebody asleep.",
    u: ["တံခါးကြားကနေ ကြည့်လိုက်တော့ အဘွားက ကုတင်ပေါ်မှာ ကျောပေးလှဲနေတယ်။",
        { text: "“အိပ်—”", say: "ကျွန်တော် “အိပ်—” လို့ စပြောလိုက်တယ်။" }] },

  { t: "She Sat Straight Up", c: [[0, "bigstinger"]], l: "ဧည့်ခန်း", k: "gap", w: ["အဘွား"],
    g: "စကားမဆုံးခင် အဘွား ထထိုင်လိုက်တယ်။",
    p: "The identical framing through the door gap one instant later — and she is sitting bolt "
      + "upright on the bed, already turned toward the camera, the blanket fallen to her waist. "
      + "⚠️ Nothing in between. Same slot, same bed, same distance; only her posture has changed.",
    u: ["စကားမဆုံးခင် အဘွား ထထိုင်လိုက်တယ်။"] },

  { t: "I Am Not Asleep", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "two", w: ["အဘွား", "ကျွန်တော်"],
    g: "အမြန်လျှောက်လာပြီး ဖုန်းကို လုယူတယ် — “မအိပ်သေးဘူး။ ငါ မအိပ်သေးဘူး။”",
    p: "Both of them in the main room: the old woman has crossed the floor and taken the phone out "
      + "of the narrator’s hand with both of hers, holding it to her ear with her shoulders up "
      + "around her neck. He has stopped mid-step with his hand still open where the phone was.",
    u: ["ကျွန်တော့်ဆီ အမြန်လျှောက်လာပြီး ဖုန်းကို လုယူတယ်။",
        "“မအိပ်သေးဘူး။ ငါ မအိပ်သေးဘူး။”"] },

  { t: "That's Enough for Tonight", l: "ဧည့်ခန်း", k: "old", w: ["အဘွား"],
    g: "အဘွား မျက်ရည်ကျလာတယ် — “ဒီနေ့တော့ သွားပါတော့။”",
    p: "Close on the old woman with the phone against her ear, tears running without any change in "
      + "her expression — she is not sobbing, she is negotiating. Her free hand is flat against "
      + "her own chest.",
    u: ["တစ်ဖက်က ဘာပြောလဲ မကြားရဘူး။ အဘွားကတော့ မျက်ရည်တွေ ကျလာတယ်။",
        "“ဒီနေ့တော့ သွားပါတော့။”"] },

  { t: "Never Say I Am Asleep", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "old", w: ["အဘွား"],
    g: "“နောက်တစ်ခါ မေးရင်လည်း မအိပ်သေးဘူးလို့ ပြော။ ငါအိပ်နေရင် နှိုး။ နှိုးလို့မရရင်တောင် အိပ်နေတယ်လို့ မပြောနဲ့။”",
    p: "Close on the old woman having handed the phone back, looking straight at the narrator and "
      + "giving him an instruction. This is the most lucid she has looked in the film: not "
      + "confused, not frightened — specific.",
    u: ["ဖုန်းချပြီး ကျွန်တော့်ကို ပြန်ပေးတယ်။",
        "“နောက်တစ်ခါ မေးရင်လည်း မအိပ်သေးဘူးလို့ ပြော။ ငါအိပ်နေရင် နှိုး။ နှိုးလို့မရရင်တောင် အိပ်နေတယ်လို့ မပြောနဲ့။”"] },

  // ── V · THE THIRD NIGHT ───────────────────────────────────────────────────
  { t: "She Does Not Sleep", l: "ဧည့်ခန်း", k: "table", w: ["အဘွား"],
    g: "သုံးညမြောက်မှာ သိလာတယ် — သူ ညဘက် မအိပ်ဘူး။ ရေနွေးကြမ်းအိုးနဲ့ စားပွဲမှာ ထိုင်နေတယ်။",
    p: "The old woman alone at the dining table in the small hours, a steel flask and a glass of "
      + "tea in front of her, sitting bolt upright on a hard chair under the single fluorescent "
      + "tube. The bed behind her is made and unslept in.",
    u: ["သုံးညမြောက်မှာ အဘွား ဘာလို့ အမြဲပင်ပန်းနေတာလဲ ကျွန်တော် သိလာတယ်။",
        "သူ ညဘက် မအိပ်ဘူး။ ရေနွေးကြမ်းတစ်အိုးနဲ့ စားပွဲမှာ ထိုင်နေတယ်။"] },

  { t: "She Pinches Her Own Arm", l: "ဧည့်ခန်း", k: "hands", w: ["အဘွား"],
    g: "ခေါင်းငိုက်သွားတိုင်း လက်မောင်းကို ဆိတ်တယ်။ မကြည့်ဘူးထင်ရင် ကိုယ့်ပါးကိုယ် ရိုက်တယ်။",
    p: "Insert on the old woman’s forearm on the table: her other hand pinching a fold of skin hard "
      + "between finger and thumb, the surrounding skin already marked with several older pinches "
      + "going from red to yellow. ⚠️ Marks only — no broken skin, no blood, no bruising spectacle.",
    u: ["ခေါင်းငိုက်သွားတိုင်း လက်မောင်းကို ဆိတ်တယ်။",
        "ကျွန်တော် မကြည့်ဘူးထင်တဲ့အခါ ကိုယ့်ပါးကိုယ် ရိုက်တယ်။"] },

  { t: "One O'Clock", l: "ကျွန်တော့်အခန်း", k: "phone",
    g: "ညတစ်နာရီမှာ ဖုန်းထပ်ဝင်တယ် — “အမေ အိပ်သွားပြီလား။” “မအိပ်သေးဘူး အစ်ကို။”",
    p: "Insert on the narrator’s phone screen in the dark bedroom, a call in progress and the "
      + "elapsed timer running. Same framing as the earlier call. The status bar reads one in the "
      + "morning.",
    u: ["ညတစ်နာရီမှာ ဖုန်းထပ်ဝင်တယ်။ “အမေ အိပ်သွားပြီလား။”",
        "“မအိပ်သေးဘူး အစ်ကို။” တစ်ဖက်က ခဏတိတ်သွားတယ်။"] },

  { t: "Are You Going to Sleep Too", l: "ကျွန်တော့်အခန်း", k: "face", w: ["ကျွန်တော်"],
    g: "“ညီလေးရော အိပ်တော့မလို့လား။” “ဟုတ်။ မနက် အင်တာဗျူးရှိလို့။” “အင်း။ အိပ်တော့။”",
    p: "Close on the narrator sitting on the edge of his bed in the dark with the phone to his ear, "
      + "lit only by the screen. Nothing is wrong yet and his face says so — he is tired and "
      + "thinking about tomorrow.",
    u: ["“ညီလေးရော အိပ်တော့မလို့လား။”",
        "“ဟုတ်။ မနက် အလုပ်အင်တာဗျူးရှိလို့။” “အင်း။ အိပ်တော့။”",
        "ဖုန်းချပြီး အိပ်ရာထဲ ဝင်လိုက်တယ်။"] },

  { t: "Scraping at the Bolt", c: [[1, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "hands",
    g: "မကြာခင် တံခါးဂျက်ဆီက အသံထွက်လာတယ်။ ချောက်။ ချောက်။",
    p: "Macro on the small brass slide bolt on the inside of the closed bedroom door in near "
      + "darkness. ⚠️ THE BOLT IS MOVING — shifted perhaps two millimetres in its keeper and "
      + "stopped, as though something on the other side is working at it slowly. Nothing else in "
      + "frame moves and nothing is visible through or around the door.",
    u: ["မကြာခင် တံခါးဂျက်ဆီက အသံထွက်လာတယ်။ ချောက်။",
        "ပြီးတော့ နောက်တစ်ချက်။ ချောက်။"] },

  { t: "Grandma, I'm Going to Sleep", l: "ကျွန်တော့်အခန်း", k: "door",
    rev: "door 1 of 3",
    g: "⚠️ တံခါးပုံစံ — သုံးခါ ပေါ်မယ်။ “အဘွား။ ကျွန်တော် အိပ်တော့မယ်။” အသံ ရပ်သွားတယ်။",
    p: "OCCURRENCE 1 OF 3 OF THE DOOR FRAMING. The closed bedroom door square on from inside, the "
      + "strip of light from the main room running across the bottom of frame. ⚠️ THE STRIP OF "
      + "LIGHT IS UNBROKEN — nothing is standing in it. The scraping has stopped and the shot is "
      + "held on a door with nothing happening to it.",
    u: ["“အဘွား။ ကျွန်တော် အိပ်တော့မယ်။”",
        "အသံရပ်သွားတယ်။"] },

  { t: "That's Right. Go to Sleep.", c: [[1, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "face", w: ["ကျွန်တော်"],
    g: "တံခါးအပြင်က တိုးတိုးပြန်ဖြေတယ် — “အင်း။ အိပ်တော့။” ကိုအောင်မင်းရဲ့အသံ။",
    p: "Close on the narrator in bed in the dark, head lifted off the pillow, completely still. He "
      + "has just been answered by a voice he recognises from somewhere it cannot be. ⚠️ Nothing "
      + "is in frame with him.",
    u: ["တံခါးအပြင်က တိုးတိုးပြန်ဖြေတယ်။ “အင်း။ အိပ်တော့။”",
        "ကိုအောင်မင်းရဲ့အသံ။"] },

  { t: "Are You Home", l: "ကျွန်တော့်အခန်း", k: "phone",
    g: "ချက်ချင်း ဖုန်းခေါ်လိုက်တယ် — “အစ်ကို ပြန်ရောက်နေပြီလား။” “မရောက်သေးဘူး။ ဘာလို့လဲ။”",
    p: "Insert on the phone screen held low against the blanket, a call connecting and then "
      + "running. The room around it is black. The screen is the only light and it lights the "
      + "narrator’s fingers from below.",
    u: ["ကျွန်တော် သူ့ကို ချက်ချင်း ဖုန်းခေါ်လိုက်တယ်။ “အစ်ကို ပြန်ရောက်နေပြီလား။”",
        "“မရောက်သေးဘူး။ ဘာလို့လဲ။”"] },

  { t: "Two Bare Feet", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "door",
    rev: "door 2 of 3",
    g: "⚠️ တံခါးပုံစံ ဒုတိယအကြိမ် — တံခါးအောက်က အလင်းကြားမှာ ခြေဖျားနှစ်ဖက်။ ဖိနပ်မပါဘူး။",
    p: "OCCURRENCE 2 OF 3. The identical framing of the same closed door — and the strip of light "
      + "beneath it is now broken by TWO BARE FEET standing directly outside, toes toward the "
      + "door, close enough to touch it. ⚠️ FEET ONLY. Nothing above the ankle is visible or "
      + "implied, the door is completely opaque, and the feet are ordinary human feet with "
      + "ordinary skin — no marks, no damage, no distortion.",
    u: ["တံခါးအောက်က အလင်းကြားမှာ ခြေဖျားနှစ်ဖက်ကို မြင်နေရတယ်။",
        "ဖိနပ်မပါဘူး။ “ဘာမှ… မဟုတ်ပါဘူး။”"] },

  { t: "Both of Them Laughed", c: [[1, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "face", w: ["ကျွန်တော်"],
    g: "ဖုန်းထဲက ကိုအောင်မင်း ရယ်တယ်။ တံခါးအပြင်ကလည်း ရယ်တယ်။ တစ်ချိန်တည်း။",
    p: "Close on the narrator’s face in the dark with the phone still at his ear, the moment the "
      + "same laugh arrives twice — once through the phone and once through the door two feet "
      + "away. He has stopped breathing. The lit screen edge-lights one side of his face.",
    u: ["ဖုန်းထဲက ကိုအောင်မင်း ရယ်တယ်။ တံခါးအပြင်ကလည်း ရယ်တယ်။ တစ်ချိန်တည်း။",
        "ကျွန်တော် ဖုန်းချလိုက်တော့ ရယ်သံနှစ်ခုလုံး ရပ်သွားတယ်။"] },

  { t: "I'm Awake", c: [[1, "stinger"]], l: "ကျွန်တော့်အခန်း", k: "door",
    g: "ဧည့်ခန်းကနေ အဘွား လှမ်းပြောတယ် — “ငါ နိုးနေတယ်နော်။” ခြေဖျားတွေ ပျောက်သွားတယ်။",
    p: "The same door framing again. The strip of light beneath it is UNBROKEN once more — the "
      + "feet are gone. ⚠️ No blur, no half-step, no shadow withdrawing: the light is simply whole "
      + "again, and nothing in the image explains when it happened.",
    u: ["ဧည့်ခန်းကနေ အဘွား လှမ်းပြောတယ်။ “ငါ နိုးနေတယ်နော်။”",
        "ခြေဖျားနှစ်ဖက်က တံခါးရှေ့ကနေ ဖြည်းဖြည်း ပျောက်သွားတယ်။ လျှောက်သွားတဲ့ ခြေသံတော့ မကြားရဘူး။"] },

  // ── VI · THE ROOM SHE KEPT LOCKED ─────────────────────────────────────────
  { t: "I Packed at First Light", l: "ဧည့်ခန်း", k: "room", w: ["ကျွန်တော်", "အဘွား"],
    g: "မနက်လင်းတာနဲ့ ပစ္စည်းသိမ်းတယ်။ အဘွားက မတားဘူး။",
    p: "The flat in early morning light. The narrator crouched over his open backpack near the "
      + "bedroom door, the old woman standing by the table watching him go without any attempt to "
      + "stop him. Everything ordinary and daylit.",
    u: ["မနက်လင်းတာနဲ့ ကျွန်တော် ပစ္စည်းသိမ်းတယ်။",
        "အဘွားက မတားဘူး။ “မနေ့ညက နင့်ကို စကားပြောသွားသေးလား။” “အိပ်တော့တဲ့။”"] },

  { t: "She Opened the Locked Room", l: "ဧည့်ခန်း", k: "hands", w: ["အဘွား"],
    g: "အဘွား မျက်လုံးမှိတ်လိုက်တယ်။ ပြီးတော့ သော့ပိတ်ထားတဲ့ အတွင်းခန်းကို ဖွင့်ပေးတယ်။",
    p: "Insert on the old woman’s hands at the padlocked inner door, turning a small key that she "
      + "has taken from somewhere on her person. The padlock is dull with age and the hasp is "
      + "clean beneath it where nothing has moved in a long time.",
    u: ["အဘွား မျက်လုံးမှိတ်လိုက်တယ်။",
        "ပြီးတော့ သော့ပိတ်ထားတဲ့ အတွင်းခန်းကို ဖွင့်ပေးတယ်။"] },

  { t: "A Bed, a Wardrobe, a Photograph", l: "အတွင်းခန်း", k: "inner",
    g: "အခန်းထဲမှာ ကုတင်တစ်လုံး၊ အဝတ်ဗီရိုတစ်လုံးနဲ့ ကိုအောင်မင်းရဲ့ ဘွဲ့ဓာတ်ပုံ။",
    p: "From the opened doorway into the inner room, dust turning in the light. A single bed made "
      + "up under a grey film of dust, a wooden wardrobe, and on a low chest a framed graduation "
      + "photograph of a young man standing upright. The room has been kept, not abandoned.",
    u: ["အခန်းထဲမှာ ကုတင်တစ်လုံး၊ အဝတ်ဗီရိုတစ်လုံးနဲ့ ကိုအောင်မင်းရဲ့ ဘွဲ့ဓာတ်ပုံ။",
        "ပုံရှေ့မှာ ပန်းခြောက်တွေနဲ့ နာရေးဖိတ်စာတစ်ရွက်။"] },

  { t: "Two Years Ago", c: [[1, "bigstinger"]], l: "အတွင်းခန်း", k: "hands", w: ["ကျွန်တော်"],
    g: "ရက်စွဲက လွန်ခဲ့တဲ့ နှစ်နှစ်။ “သားက ညဆိုင်းက ပြန်လာရင်း ကားတိုက်ခံရတာ။”",
    p: "Insert on the narrator’s hands holding the folded funeral card open, a dish of brittle "
      + "brown dried flowers beside it on the chest. ⚠️ THE CARD IS CLEARLY A FUNERAL CARD BY ITS "
      + "FORM — bordered, formal, with a photograph space — and its printed text is not legible.",
    u: ["ရက်စွဲက လွန်ခဲ့တဲ့ နှစ်နှစ်။",
        "“သားက ညဆိုင်းက ပြန်လာရင်း ကားတိုက်ခံရတာ။”"] },

  { t: "Then Who Has Been Calling", l: "အတွင်းခန်း", k: "two", w: ["ကျွန်တော်", "အဘွား"],
    g: "“ဒါဆို အခု အစ်ကိုက…” “သူရှိတုန်းက ညတိုင်း ဖုန်းဆက်တယ်။ ဆုံးပြီး တစ်ပတ်အကြာမှာ ဖုန်းပြန်ဝင်လာတာ။”",
    p: "Both of them in the inner room, the narrator turned toward her with the card still in his "
      + "hand, the old woman standing by the bed not looking at him. Daylight from the doorway "
      + "behind them. Two people, one of whom has been carrying this alone for two years.",
    u: ["ကျွန်တော် ဖိတ်စာကို ကိုင်ထားရင်း အဘွားဘက် လှည့်ကြည့်လိုက်တယ်။ “ဒါဆို အခု အစ်ကိုက…”",
        "“သူရှိတုန်းက ညတိုင်း ဖုန်းဆက်တယ်။ အမေ မအိပ်သေးရင် အိမ်ပြန်ရောက်တဲ့အထိ စကားပြောပေးတယ်။ ဆုံးပြီး တစ်ပတ်အကြာမှာ ဖုန်းပြန်ဝင်လာတာ။”"] },

  { t: "Then It Called From Outside", l: "အတွင်းခန်း", k: "old", w: ["အဘွား"],
    g: "“အစတော့ ဖုန်းထဲမှာပဲ။ နောက်တော့ တံခါးအပြင်က ခေါ်တယ်။ ငါလည်း သားပြန်လာပြီဆိုပြီး ဖွင့်ပေးလိုက်တာ။”",
    p: "Close on the old woman, one hand smoothing the dusty bedcover beside her over and over "
      + "while she talks. She is not looking at the narrator. The gesture is doing the work her "
      + "face is not.",
    u: ["အဘွားက အိပ်ရာခင်းအနားကို ပွတ်နေတယ်။",
        "“အစတော့ ဖုန်းထဲမှာပဲ။ နောက်တော့ တံခါးအပြင်က ခေါ်တယ်။ ငါလည်း သားပြန်လာပြီဆိုပြီး ဖွင့်ပေးလိုက်တာ။”",
        "“သူက… ကိုအောင်မင်း မဟုတ်ဘူးလား။” အဘွား ခေါင်းခါတယ်။"] },

  { t: "Black Threads", c: [[0, "bigstinger"]], l: "အတွင်းခန်း", k: "ear",
    rev: "the only time",
    g: "⚠️ ဒီတစ်ပုံမှာပဲ ပြရမယ် — “သူ့ပါးစပ်ထဲက အနက်ရောင်ချည်မျှင်တွေ ငါ့နားထဲ ဝင်နေတယ်။”",
    p: "⚠️ THE ONLY TIME THIS IMAGE APPEARS IN THE FILM. Macro on the side of an old woman’s head "
      + "at the ear, in darkness. A small number of FINE BLACK THREADS — ordinary sewing thread, "
      + "dry and slack, perhaps five or six — run into the ear canal and away out of frame. ⚠️ NO "
      + "WOUND, NO BLOOD, NO SWELLING, NOTHING ORGANIC. The threads are thread. Nothing else is "
      + "visible: no mouth, no face, no figure, nothing at the other end of them.",
    u: ["“တစ်ည ငါလန့်နိုးတော့ သူက ခေါင်းဘေးမှာ ထိုင်နေတယ်။ သူ့ပါးစပ်ထဲက အနက်ရောင်ချည်မျှင်တွေ ငါ့နားထဲ ဝင်နေတယ်။”"] },

  { t: "One Thing at a Time", l: "အတွင်းခန်း", k: "face", w: ["ကျွန်တော်"],
    g: "ကျွန်တော့်လက်က အလိုလို နားဆီ ရောက်သွားတယ်။ “အဲဒီနောက် ငါ မေ့လာတယ်။”",
    p: "Close on the narrator, one hand having risen without his deciding to and come to rest "
      + "against his own ear. He is not aware he has done it. The old woman is out of focus behind "
      + "him still talking.",
    u: ["ကျွန်တော့်လက်က အလိုလို နားဆီ ရောက်သွားတယ်။",
        "“အဲဒီနောက် ငါ မေ့လာတယ်။ သားငယ်ငယ်က မျက်နှာ။ သူ့အဖေရဲ့အသံ။ တစ်ခုချင်း မေ့လာတယ်။ အဲဒီကောင်ကတော့ ငါမေ့သွားတဲ့အကြောင်းတွေ ပိုပြောတတ်လာတယ်။”"] },

  { t: "That Is What the Scissors Were For", c: [[1, "stinger"]], l: "အတွင်းခန်း", k: "old", w: ["အဘွား"],
    g: "“နင့်နားထဲ ဝင်နေတာ ဖြတ်ပေးမလို့။ နင် နိုးသွားတော့ ပြန်ဝင်သွားတယ်။”",
    p: "Close on the old woman answering the question directly for the first time, looking at the "
      + "narrator now. Nothing in the frame illustrates what she is describing. Her face is "
      + "matter-of-fact, which is what makes it land.",
    u: ["ပထမညက ကတ်ကြေးကို ကျွန်တော် သတိရလိုက်တယ်။ “အဘွား အဲဒီညက…”",
        "“နင့်နားထဲ ဝင်နေတာ ဖြတ်ပေးမလို့။ နင် နိုးသွားတော့ ပြန်ဝင်သွားတယ်။”"] },

  { t: "It Knows Your Number", l: "ဧည့်ခန်း", k: "two", w: ["ကျွန်တော်", "အဘွား"],
    g: "“သွားမယ်။ အဘွားပါ လိုက်ခဲ့။” “ငါ့ညီမအိမ်ကို ပြေးဖူးတယ်။” “နင့်နံပါတ်လည်း သူသိနေပြီ။”",
    p: "Both of them in the main room, the narrator with his backpack up on one shoulder and the "
      + "old woman standing between him and the front door — not blocking it, simply standing "
      + "there. ⚠️ SHE IS LOOKING AT THE PHONE IN HIS HAND, not at his face.",
    u: ["ကျွန်တော် ကျောပိုးအိတ်ကို ကောက်ယူလိုက်တယ်။ “သွားမယ်။ အဘွားပါ လိုက်ခဲ့။”",
        "“ငါ့ညီမအိမ်ကို ပြေးဖူးတယ်။ ညရောက်တော့ အဲဒီအိမ်ကို ဖုန်းဆက်တယ်။ ငါ မကိုင်တော့ ငါ့ညီမရဲ့ဖုန်းကို ဆက်တယ်။”",
        "သူက ကျွန်တော့်ဖုန်းကို ကြည့်တယ်။ “နင့်နံပါတ်လည်း သူသိနေပြီ။”"] },

  // ── VII · THE LAST NIGHT ──────────────────────────────────────────────────
  { t: "We Would Stay Awake Together", l: "ဧည့်ခန်း", k: "table", w: ["ကျွန်တော်", "အဘွား"],
    g: "အဲဒီည နှစ်ယောက်အတူ နိုးနေကြမယ်။ ဖုန်းတွေ ပိတ်လိုက်တယ်။",
    p: "The two of them sitting on opposite sides of the small dining table at night with the "
      + "flask and two glasses between them, both upright, both awake, neither speaking. Two dark "
      + "phone handsets lie face down on the table between them.",
    u: ["အဲဒီည ကျွန်တော် အဘွားကို တစ်ယောက်တည်း မထားခဲ့နိုင်ဘူး။",
        "နှစ်ယောက်အတူ နိုးနေကြမယ်။ မနက်ကျ အဘွားရဲ့ညီမဆီ သွားပြီး အကူအညီတောင်းကြမယ်လို့ ဆုံးဖြတ်တယ်။",
        "ကျွန်တော့်ဖုန်းကို ပိတ်လိုက်တယ်။"] },

  { t: "No Battery At All", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "hands", w: ["အဘွား"],
    g: "အံဆွဲထဲက ဖုန်းဟောင်း — ဘက်ထရီတောင် မရှိတော့ဘူး။ “ဒီဖုန်းကိုပဲ ပထမဆုံး ပြန်ခေါ်လာတာ။”",
    p: "Insert on the old woman’s hands holding an old button-key mobile phone with its back cover "
      + "off, the battery compartment plainly and completely empty, the battery itself lying "
      + "separately on the table beside it. Both facts in one frame.",
    u: ["အဘွားကလည်း အံဆွဲထဲက ဖုန်းဟောင်းကို ထုတ်ပြတယ်။ ဘက်ထရီတောင် မရှိတော့ဘူး။",
        "“ဒီဖုန်းကိုပဲ ပထမဆုံး ပြန်ခေါ်လာတာ။”"] },

  { t: "Mother. Your Son Is Home.", c: [[2, "stinger"]], l: "ဧည့်ခန်း", k: "door",
    rev: "door 3 of 3",
    g: "⚠️ တံခါးပုံစံ တတိယအကြိမ် — ဒီတစ်ခါ **အိမ်ရှေ့တံခါး**။ “အမေ။ သား ပြန်လာပြီ။”",
    p: "OCCURRENCE 3 OF 3 OF THE DOOR FRAMING — and this time it is THE FRONT DOOR OF THE FLAT, "
      + "square on from inside at the same height and distance, the strip of landing light running "
      + "across the bottom of frame. ⚠️ THE STRIP OF LIGHT IS UNBROKEN. Nothing is standing in it. "
      + "The knocking has no feet under it.",
    u: ["ညရှစ်နာရီမှာ တံခါးခေါက်သံ ကြားရတယ်။",
        "“အမေ။ သား ပြန်လာပြီ။”",
        "ကျွန်တော်တို့ မလှုပ်ကြဘူး။"] },

  { t: "Son.", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "phone",
    g: "ခေါက်သံ ရပ်သွားတော့ ဘက်ထရီမပါတဲ့ ဖုန်းဟောင်း မြည်လာတယ်။ စခရင်မှာ — **သား။**",
    p: "Insert square on the old button-key phone lying on the table, its small screen LIT. ⚠️ ONE "
      + "BURMESE WORD IS LEGIBLE ON IT: သား. It is the only readable text in this film. The back "
      + "cover is still off and the battery is still on the table beside it, in the same frame.",
    u: ["ခေါက်သံ ရပ်သွားတော့ ဘက်ထရီမပါတဲ့ ဖုန်းဟောင်း မြည်လာတယ်။",
        "စခရင်မှာ စာလုံးတစ်လုံး။ **သား။**"] },

  { t: "I Am Not Tired", l: "ဧည့်ခန်း", k: "old", w: ["အဘွား"],
    g: "“အမေ အိပ်သွားပြီလား။” “မအိပ်သေးဘူး။” “အမေ ပင်ပန်းနေပြီ။” “မပင်ပန်းဘူး။”",
    p: "Close on the old woman with the old phone held to her ear in both hands, answering. Her "
      + "jaw is set. She has had this conversation many times and she knows how it goes.",
    u: ["အဘွားက ဖုန်းကိုင်လိုက်တယ်။ “အမေ အိပ်သွားပြီလား။” “မအိပ်သေးဘူး။”",
        "“အမေ ပင်ပန်းနေပြီ။” “မပင်ပန်းဘူး။”"] },

  { t: "A Child's Voice", c: [[2, "bigstinger"]], l: "ဧည့်ခန်း", k: "two", w: ["အဘွား", "ကျွန်တော်"],
    g: "လူကြီးအသံ မဟုတ်တော့ဘူး — “မေမေ… သားကို စိတ်ဆိုးနေတာလား။” တံခါးအပြင်ကလည်း ကလေး ငိုသံ။",
    p: "Both of them at the table, the phone between them and the front door behind. ⚠️ NEITHER "
      + "OF THEM IS LOOKING AT THE PHONE ANY MORE — both heads have turned toward the front door, "
      + "because the crying is coming from there as well. ⚠️ No child anywhere in frame or implied "
      + "in the light beneath the door.",
    u: ["တစ်ဖက်က တိတ်သွားတယ်။ ပြန်ပြောလာတဲ့အခါ လူကြီးအသံ မဟုတ်တော့ဘူး။",
        "“မေမေ… သားကို စိတ်ဆိုးနေတာလား။” ကလေးတစ်ယောက်ရဲ့အသံ။",
        "တံခါးအပြင်ကလည်း ကလေး ငိုသံထွက်လာတယ်။ “သား အမှောင်ထဲမှာ မနေချင်ဘူး။”"] },

  { t: "That Voice", c: [[1, "stinger"]], l: "ဧည့်ခန်း", k: "old", w: ["အဘွား"],
    g: "အဘွားရဲ့ မျက်နှာ ပြောင်းသွားတယ် — “ဒီအသံ…”",
    p: "Close on the old woman as her face changes. ⚠️ THIS IS NOT FEAR. Everything that has been "
      + "held rigid in her face for the whole film has come loose at once, and what is underneath "
      + "is recognition and terrible hope.",
    u: ["အဘွားရဲ့ မျက်နှာ ပြောင်းသွားတယ်။",
        { text: "“ဒီအသံ…”", say: "“ဒီအသံ…” လို့ အဘွား ရေရွတ်လိုက်တယ်။" }] },

  { t: "Don't Open It", l: "ဧည့်ခန်း", k: "two", w: ["ကျွန်တော်", "အဘွား"],
    g: "သူ တံခါးဆီ ထလျှောက်တယ်။ ကျွန်တော် လက်ကိုဆွဲထားလိုက်တယ် — “အဘွား။ မဖွင့်နဲ့။”",
    p: "The old woman crossing the room toward the front door with the narrator half out of his "
      + "chair behind her, both his hands closed around one of her wrists and his weight back. She "
      + "is still moving forward. He is not strong enough to be the reason she stops.",
    u: ["သူ တံခါးဆီ ထလျှောက်တယ်။ ကျွန်တော် လက်ကိုဆွဲထားလိုက်တယ်။",
        "“အဘွား။ မဖွင့်နဲ့။”"] },

  { t: "Call Me Mama Again", l: "ဧည့်ခန်း", k: "old", w: ["အဘွား"],
    g: "“ငါ့သား ငယ်ငယ်ကအသံကို ငါ မမှတ်မိတော့ဘူး။” သူက တံခါးပေါ် လက်တင်တယ် — “မေမေလို့… ပြန်ခေါ်ပါဦး။”",
    p: "Close on the old woman at the front door with one palm laid flat against it, her cheek "
      + "almost against the wood, her eyes closed. She is not trying to open it in this frame. She "
      + "is listening to it.",
    u: ["“ငါ့သား ငယ်ငယ်ကအသံကို ငါ မမှတ်မိတော့ဘူး။”",
        "သူက ကျွန်တော့်လက်ကို ဖြုတ်ပြီး တံခါးပေါ် လက်တင်တယ်။",
        "“မေမေလို့… ပြန်ခေါ်ပါဦး။”"] },

  { t: "She Knew What It Was", l: "ဧည့်ခန်း", k: "face", w: ["ကျွန်တော်"],
    g: "အပြင်ကဟာ ဘာလဲဆိုတာ အဘွား သိတယ်။ ဒါပေမယ့် သားရဲ့အသံကို သူ နားထောင်ချင်နေတယ်။",
    p: "Close on the narrator watching her at the door, and what is on his face is not fear of the "
      + "thing outside. It is the far worse realisation that she knows exactly what it is and is "
      + "going to listen to it anyway.",
    u: ["သူ့မျက်နှာကို ကြည့်ပြီး ကျွန်တော် ပိုကြောက်လာတယ်။",
        "အပြင်ကဟာ ဘာလဲဆိုတာ အဘွား သိတယ်။ ဒါပေမယ့် သားရဲ့အသံကို သူ နားထောင်ချင်နေတယ်။"] },

  { t: "Don't Stop Your Mother", c: [[2, "bigstinger"]], l: "ကျွန်တော့်အခန်း", k: "bedroom", w: ["ကိုအောင်မင်း"],
    g: "⚠️ ကိုအောင်မင်းက ကုတင်ပေါ်မှာ ထိုင်နေတယ်။ ပါးစပ်က ပြုံးနေပေမယ့် မလှုပ်ဘူး။",
    p: "Looking into the lodger’s bedroom from the doorway. Ko Aung Min is sitting on the edge of "
      + "the bed facing the camera, hands on his knees. ⚠️ HE LOOKS COMPLETELY ALIVE AND "
      + "COMPLETELY ORDINARY — the same man as the graduation photograph, plain white shirt, "
      + "no pallor, no injury, nothing transparent, a real shadow on the wall behind him. THE ONE "
      + "THING WRONG IS HIS MOUTH: it is fixed in a pleasant smile and it does not move, although "
      + "he is speaking. Do not add anything else.",
    u: ["ကျွန်တော် ထပ်ဆွဲမလို့ လှမ်းလိုက်တဲ့အချိန် အိပ်ခန်းထဲက အသံထွက်လာတယ်။ “အမေ့ကို မတားနဲ့ ညီလေး။”",
        "ကိုအောင်မင်းက ကျွန်တော့်ကုတင်ပေါ်မှာ ထိုင်နေတယ်။ သူ့ပါးစပ်က ပြုံးနေပေမယ့် မလှုပ်ဘူး။",
        "ကလေးငိုသံကတော့ တံခါးအပြင်မှာ ဆက်ကြားနေရတုန်း။"] },

  { t: "She Pushed Me Out", l: "လှေကား", k: "stair", w: ["ကျွန်တော်", "အဘွား"],
    g: "အဘွားက ရုတ်တရက် တံခါးဖွင့်ပြီး ကျွန်တော့်ကို အပြင်တွန်းထုတ်တယ်။ လှေကားမှာ ဘယ်သူမှ မရှိဘူး။",
    p: "On the landing: the narrator stumbling backward out of the flat doorway with the old "
      + "woman’s hands still flat on his chest, the door swinging closed between them. ⚠️ THE "
      + "LANDING IS COMPLETELY EMPTY — no child, no figure, nothing on the stairs in either "
      + "direction. Ordinary fluorescent landing light.",
    u: ["အဘွားက ရုတ်တရက် တံခါးဖွင့်ပြီး ကျွန်တော့်ကို အပြင်တွန်းထုတ်တယ်။",
        "လှေကားမှာ ဘယ်သူမှ မရှိဘူး။ တံခါးပြန်ပိတ်တော့ ကျွန်တော် လက်နဲ့ ခံထားလိုက်တယ်။"] },

  { t: "Do You Remember Your Mother's Voice", l: "လှေကား", k: "gap", w: ["အဘွား"],
    g: "အဘွားက ကျွန်တော့်နားဘေးကို တစ်ချက်ကြည့်တယ် — “သား။ နင့်အမေ့အသံ မှတ်မိသေးလား။”",
    p: "Through the narrowing gap of the closing door from the landing side: the old woman’s face "
      + "in the slot, speaking. ⚠️ HER EYES ARE NOT ON HIS — they have gone a few inches to one "
      + "side, to the space beside his ear, and stayed there.",
    u: ["“အဘွားပါ လိုက်ခဲ့။” အဘွားက ကျွန်တော့်နားဘေးကို တစ်ချက်ကြည့်တယ်။",
        "“သား။ နင့်အမေ့အသံ မှတ်မိသေးလား။”"] },

  { t: "I Could Not Hear It", l: "လှေကား", k: "face", w: ["ကျွန်တော်"],
    g: "အမေ့မျက်နှာကို မြင်ယောင်လို့ရတယ်။ ဒါပေမယ့် နာမည်ကို ဘယ်လိုခေါ်လဲဆိုတော့ အသံ မထွက်လာဘူး။",
    p: "Close on the narrator on the landing, gone completely still, eyes unfocused somewhere past "
      + "the camera. He is reaching for something in his own memory and not finding it. Nothing "
      + "else in the frame.",
    u: ["ကျွန်တော် တိတ်သွားတယ်။",
        "အမေ့မျက်နှာကို မြင်ယောင်လို့ရတယ်။ ဒါပေမယ့် ကျွန်တော့်နာမည်ကို အမေ ဘယ်လိုခေါ်လဲ စဉ်းစားတော့ အသံက ထွက်မလာဘူး။"] },

  { t: "Have You Eaten, Son", c: [[2, "bigstinger"]], l: "လှေကား", k: "face", w: ["ကျွန်တော်"],
    g: "အခန်းထဲက ကိုအောင်မင်း ရယ်တယ်။ ပြီးတော့ ကျွန်တော့်အမေရဲ့အသံနဲ့ — “သားလေး။ ထမင်းစားပြီးပြီလား။”",
    p: "The same close framing on the narrator an instant later, hearing his own mother’s voice "
      + "come out of a flat he is standing outside of. ⚠️ Nothing has entered the frame. The whole "
      + "shot is what happens to one face.",
    u: ["အခန်းထဲက ကိုအောင်မင်း ရယ်တယ်။",
        "ပြီးတော့ ကျွန်တော့်အမေရဲ့အသံနဲ့ ပြောတယ်။",
        "“သားလေး။ ထမင်းစားပြီးပြီလား။”"] },

  { t: "The Door Closed", c: [[1, "stinger"]], l: "လှေကား", k: "doorout",
    g: "⚠️ တံခါးပုံစံ ပြောင်းပြန် — ဒီတစ်ခါ ကျွန်တော်က အပြင်မှာ။ အဘွားက အထဲမှာ။",
    p: "⚠️ THE MOTIF INVERTED. The same square-on framing of the same front door at the same height "
      + "and distance — but from the LANDING. The door is shut. The gap beneath it is dark now "
      + "instead of lit, because the light is on this side. The narrator’s fists are entering "
      + "frame at the edges. He is the one outside.",
    u: ["ကျွန်တော် ကြောင်သွားတုန်း အဘွား တံခါးပိတ်လိုက်တယ်။",
        "“အဘွား!” ကျွန်တော် အားကုန်ထုတယ်။"] },

  { t: "What Is Left With Mother", l: "လှေကား", k: "doorout",
    g: "“နင့်ဆီက ယူထားတာတွေ ပြန်ပေးခိုင်းမယ်။” ကိုအောင်မင်းက ရယ်တယ် — “အမေ့ဆီမှာ ဘာကျန်သေးလို့လဲ။”",
    p: "The same framing on the closed door from the landing, the narrator’s hands flat against it "
      + "and his forehead almost touching the wood. ⚠️ The whole exchange happens through an inch "
      + "of door and nothing on the other side is visible. Do not show anything through it, under "
      + "it or around it.",
    u: ["အတွင်းက အဘွား ပြန်ပြောတယ်။ “နင့်ဆီက ယူထားတာတွေ ပြန်ပေးခိုင်းမယ်။”",
        "ကိုအောင်မင်းက ရယ်တယ်။ “အမေ့ဆီမှာ ဘာကျန်သေးလို့လဲ။”",
        "“တစ်ခုတော့ ကျန်သေးတယ်။ ငါ့မှာ သားတစ်ယောက် ရှိခဲ့တယ်ဆိုတာ။”"] },

  { t: "Give That Child Back", l: "လှေကား", k: "doorout",
    g: "“အဲဒါပါ ယူသွားရင် အမေ သားကို မှတ်မိတော့မှာ မဟုတ်ဘူးနော်။” ပြီးမှ တိုးတိုး — “အဲဒီကလေးကို သူ့အမေ ပြန်ပေးလိုက်ပါ။”",
    p: "The same framing on the closed door, the narrator’s hands lowered from it now and hanging "
      + "at his sides, his head turned slightly so one ear is toward the wood. He has stopped "
      + "hitting it in order to hear what she is trading away.",
    u: ["ရယ်သံ ရပ်သွားတယ်။ “အဲဒါပါ ယူသွားရင် အမေ သားကို မှတ်မိတော့မှာ မဟုတ်ဘူးနော်။”",
        "အဘွား ခဏတိတ်နေတယ်။ ပြီးမှ တိုးတိုးပြောတယ်။",
        "“အဲဒီကလေးကို သူ့အမေ ပြန်ပေးလိုက်ပါ။”"] },

  { t: "It Came Back to Me", l: "လှေကား", k: "face", w: ["ကျွန်တော်"],
    g: "တံခါးကို ထုနေရင်း ကျွန်တော် အမေ့အသံကို ပြန်မှတ်မိလာတယ်။",
    p: "Close on the narrator against the door, and something has arrived on his face that has not "
      + "been there before — his own mother’s voice coming back to him piece by piece, while he is "
      + "hitting a door to stop the woman inside from paying for it.",
    u: ["တံခါးကို ထုနေရင်း ကျွန်တော် အမေ့အသံကို ပြန်မှတ်မိလာတယ်။",
        "ငယ်ငယ်က အော်ခေါ်တဲ့အသံ။ ရန်ကုန်ကို ထွက်လာတဲ့မနက်က မှာလိုက်တဲ့စကား။ တစ်ခုပြီးတစ်ခု ပြန်ကြားလာတယ်။"] },

  { t: "Do I Have a Son", l: "လှေကား", k: "doorout",
    g: "“ရှင် ဘယ်သူလဲ။” “အမေ့သားလေ။” “ကျွန်မမှာ သားရှိလို့လား။” သူ ဟန်ဆောင်မေးနေတာ မဟုတ်ဘူး။",
    p: "The same framing on the closed door. Nothing in the image has changed at all from the "
      + "previous occurrence — same door, same dark gap, same hands. ⚠️ The stillness is the point: "
      + "what has changed is entirely on the other side of it, and the audience is given nothing "
      + "to look at while it happens.",
    u: ["အတွင်းဘက်က အဘွား မေးလိုက်တယ်။ “ရှင် ဘယ်သူလဲ။”",
        "“အမေ့သားလေ။” “ကျွန်မမှာ သားရှိလို့လား။”",
        "သူ ဟန်ဆောင်မေးနေတာ မဟုတ်ဘူး။"] },

  { t: "Mother. Look Properly.", c: [[2, "finalstinger"]], l: "လှေကား", k: "doorout",
    g: "“အမေ။ သေချာကြည့်လေ။ သားပါ။” အသံက လူကြီးသံကနေ ကလေးသံ ပြောင်းသွားတယ်။ နောက်ဆုံးတစ်ချက် — တိတ်သွားတယ်။",
    p: "The same framing one last time. ⚠️ THE ONLY DIFFERENCE FROM THE PREVIOUS OCCURRENCE IS "
      + "THAT THE NARRATOR’S HANDS HAVE COME OFF THE DOOR ENTIRELY and hang at the bottom edge of "
      + "frame. The door is shut, the gap beneath it dark, and the shot is held on it after "
      + "everything has stopped.",
    u: ["“အမေ။ သေချာကြည့်လေ။ သားပါ။” အဘွား ပြန်မဖြေဘူး။ “အမေ!”",
        "တံခါးအတွင်းကနေ တဒုန်းဒုန်း ထုလာတယ်။ အသံက လူကြီးသံကနေ ကလေးသံ ပြောင်းသွားတယ်။ “မေမေ။ သားကို ကြည့်ပါဦး။”",
        "နောက်ဆုံး တစ်ချက်ထုပြီးတော့— တိတ်သွားတယ်။"] },

  // ── VIII · AFTER ──────────────────────────────────────────────────────────
  { t: "Who Did You Want to See", c: [[1, "bigstinger"]], l: "ဧည့်ခန်း", k: "old", w: ["အဘွား"],
    g: "အဘွား တံခါးဖွင့်တယ်။ အိမ်ထဲမှာ သူတစ်ယောက်တည်းပဲ။ “ဘယ်သူနဲ့ တွေ့ချင်လို့လဲ သား။”",
    p: "Close on the old woman in her open doorway, looking out at the narrator with mild polite "
      + "enquiry. ⚠️ SHE IS NOT FRIGHTENED, NOT CONFUSED AND NOT VACANT — she is being perfectly "
      + "pleasant to a young man she has never met. That is the whole horror of the shot and "
      + "nothing else in it should compete.",
    u: ["အိမ်နီးချင်းတွေ တက်လာပြီး ဝိုင်းခေါ်ကြမှ အဘွား တံခါးလာဖွင့်တယ်။ အိမ်ထဲမှာ သူတစ်ယောက်တည်းပဲ ရှိတော့တယ်။",
        "ကျွန်တော့်ကို မြင်တော့ ယဉ်ယဉ်ကျေးကျေး မေးတယ်။ “ဘယ်သူနဲ့ တွေ့ချင်လို့လဲ သား။”"] },

  { t: "This Boy Is Handsome", l: "အတွင်းခန်း", k: "two", w: ["အဘွား", "ကျွန်တော်"],
    g: "မနက်မှာ ညီမ လာခေါ်တယ်။ အဘွားက ဘွဲ့ဓာတ်ပုံရှေ့မှာ ရပ်နေတယ် — “ဒီကောင်လေးက ရုပ်ချောသားပဲ။”",
    p: "Morning in the inner room. The old woman stands in front of the framed graduation "
      + "photograph looking at it with friendly, uncomplicated interest, a packed bag at her feet; "
      + "the narrator watches her from the doorway. Daylight, dust, everything quiet.",
    u: ["မနက်မှာ အဘွားရဲ့ညီမ လာခေါ်တယ်။ ကျွန်တော် ပစ္စည်းကူသိမ်းပေးနေတုန်း အဘွားက ဘွဲ့ဓာတ်ပုံရှေ့မှာ ရပ်နေတယ်။",
        "“ဒီကောင်လေးက ရုပ်ချောသားပဲ။”"] },

  { t: "It Belongs to Somebody Else", l: "အတွင်းခန်း", k: "old", w: ["အဘွား"],
    g: "“ပုံပါ ယူသွားမလား အဘွား။” သူက ခေါင်းခါတယ် — “သူများပစ္စည်းကြီး။ ထားခဲ့လိုက်ပါ။”",
    p: "Close on the old woman shaking her head, still perfectly pleasant, declining a photograph "
      + "of her own son on the grounds that it is not hers to take. She is not upset. That is the "
      + "point.",
    u: ["“ပုံပါ ယူသွားမလား အဘွား။” သူက ခေါင်းခါတယ်။",
        "“သူများပစ္စည်းကြီး။ ထားခဲ့လိုက်ပါ။”"] },

  { t: "Behind the Frame", c: [[1, "stinger"]], l: "အတွင်းခန်း", k: "photo",
    g: "ဘောင်နောက်မှာ စာတစ်ကြောင်း — **“သား ဘွဲ့ယူတဲ့နေ့။ အမေ အပျော်ဆုံးနေ့။”**",
    p: "Macro on the back of the photograph, lifted out of its frame and held in the narrator’s "
      + "fingers. ⚠️ ONE HANDWRITTEN LINE IN BURMESE BALLPOINT IS LEGIBLE across the paper, in an "
      + "elderly woman’s careful hand. It is the second and last readable text in the film. "
      + "Ordinary morning light, the empty frame out of focus below.",
    u: ["အဘွား ထွက်သွားပြီးမှ ဓာတ်ပုံကို ကျွန်တော် ဖြုတ်လိုက်တယ်။",
        "ဘောင်နောက်မှာ စာတစ်ကြောင်း ရေးထားတယ်။ **“သား ဘွဲ့ယူတဲ့နေ့။ အမေ အပျော်ဆုံးနေ့။”**"] },

  { t: "The Last One Waiting", l: "အတွင်းခန်း", k: "photo",
    g: "ပုံထဲက မျက်နှာကို ကြည့်ပြီး အခုမှ ကိုအောင်မင်းအတွက် ဝမ်းနည်းမိတယ်။ မနေ့ညကတော့ သူ့ကို စောင့်နေတဲ့ နောက်ဆုံးလူကပါ သူ့ကို မေ့သွားခဲ့ပြီ။",
    p: "FINAL SHOT. The graduation photograph itself, square on, filling the frame — a young man "
      + "standing upright in his gown, entirely ordinary, mildly pleased with himself. Held in a "
      + "quiet empty room in the morning. Nothing else in shot and nothing wrong with it.",
    u: ["ပုံထဲက မျက်နှာကို ကြည့်ပြီး အခုမှ ကိုအောင်မင်းအတွက် ဝမ်းနည်းမိတယ်။",
        "လွန်ခဲ့တဲ့ နှစ်နှစ်က သူ ဆုံးခဲ့တယ်။ မနေ့ညကတော့ သူ့ကို စောင့်နေတဲ့ နောက်ဆုံးလူကပါ သူ့ကို မေ့သွားခဲ့ပြီ။"] },
];

// ── SCAFFOLDING ─────────────────────────────────────────────────────────────

const STYLE = "Ordinary fourth-floor Yangon flat, 16:9, 35mm grain, contemporary photorealism. "
  + "ORDINARY DOMESTIC LIGHT ONLY: one fluorescent tube in the main room, a bare bulb in the "
  + "bedroom, a phone screen, landing light through the gap under a door, grey daylight through a "
  + "barred window. Everything works. This is a flat somebody lives in, NOT a haunted set — no "
  + "green or teal grade, no fog or haze, no damp or decay, no cobwebs, no blood, no heavy "
  + "vignette. One still instant, no montage or visible sound effects. No gore and no legible "
  + "writing except where a shot explicitly calls for it.";

/**
 * Almost everything happens between midnight and three. The daylight shots are
 * named, and two of them matter: the flat looks completely harmless by day, and
 * the last act is a bright quiet morning after the worst night of the film.
 */
const TIME_NIGHT = "TIME: NIGHT, between midnight and three in the morning. The flat is lit only by "
  + "what is really switched on — one fluorescent tube over the table, a bare bulb, a phone "
  + "screen, the landing light coming under a door. No daylight anywhere, no sky, no sun.";

const TIME_DAY = Object.fromEntries([
  ["Free Rent", "TIME: LATE AFTERNOON. Ordinary daylight in the stairwell from the window at the "
    + "turn of the stairs. Nothing about the hour is unusual."],
  ["Two Doors", "TIME: DAY. Flat ordinary daylight through the barred window, the ceiling tube "
    + "off. The flat looks completely harmless."],
  ["She Gets Confused at Night", "TIME: LATE AFTERNOON. Warm low daylight through the window. An "
    + "ordinary handover at an ordinary hour."],
  ["She Watched Her Son", "TIME: LATE AFTERNOON, at the meal. Ordinary daylight and the ceiling "
    + "tube just switched on."],
  ["Pick Up When I Call", "TIME: EARLY EVENING, as he leaves for his shift. Ordinary indoor "
    + "light."],
  ["She Shook Her Head", "TIME: EARLY EVENING. Ordinary indoor light."],
  ["He Fitted a Bolt", "TIME: DAY. Flat ordinary daylight on the bedroom door. A small practical "
    + "job being done in the afternoon."],
  ["I Packed at First Light", "TIME: EARLY MORNING, just after first light. Thin grey daylight "
    + "through the window, the tube off."],
  ["She Opened the Locked Room", "TIME: EARLY MORNING. Thin grey daylight."],
  ["A Bed, a Wardrobe, a Photograph", "TIME: EARLY MORNING. The only light is what comes through "
    + "the opened doorway behind the camera, and dust turns in it."],
  ["Two Years Ago", "TIME: EARLY MORNING. Light from the doorway behind the camera."],
  ["Then Who Has Been Calling", "TIME: EARLY MORNING. Light from the doorway behind them."],
  ["Then It Called From Outside", "TIME: EARLY MORNING. Light from the doorway."],
  ["One Thing at a Time", "TIME: EARLY MORNING. Light from the doorway."],
  ["That Is What the Scissors Were For", "TIME: EARLY MORNING. Light from the doorway."],
  ["It Knows Your Number", "TIME: MORNING. Ordinary daylight in the main room."],
  ["This Boy Is Handsome", "TIME: MORNING, the day after. Ordinary daylight through the doorway, "
    + "quiet and completely unremarkable."],
  ["It Belongs to Somebody Else", "TIME: MORNING. Ordinary daylight."],
  ["Behind the Frame", "TIME: MORNING. Ordinary daylight."],
  ["The Last One Waiting", "TIME: MORNING. Ordinary daylight in an empty room."],
]);

/** The one shot where the threads exist, and the one where he is seen. */
const NEVER_RESOLVED = new Set(["Black Threads", "Don't Stop Your Mother"]);

SCENES.forEach((s, i) => {
  const n = i + 1, who = s.w || [];
  s.n = n;
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot ${n} "${s.t}" has no camera key`);
  s.time = TIME_DAY[s.t] || TIME_NIGHT;

  const cont = ["Continuity: ordinary living people photographed straight."];

  // The thing is a telephone and a voice for most of the film. Every shot is one
  // helpful instruction away from a generator drawing the thing making the noise.
  cont.push("⚠️ NOTHING SUPERNATURAL IS VISIBLE IN THIS SHOT unless it is named above. No figure, "
    + "no face at a window, no hand, no shadow that is not cast by something really in the room, "
    + "nothing behind or beneath a door.");

  if (who.includes("အဘွား")) cont.push("The old woman is exhausted from refusing to sleep, not "
    + "from illness: swollen lids, deep under-eye shadow, visible blood vessels in the whites, "
    + "natural dark brown irises and normal black pupils, no glow. Faded blouse and dark htamein, "
    + "bare feet indoors, pinch marks on one forearm.");
  if (who.includes("ကျွန်တော်")) cont.push("The narrator in a checked shirt by day or a grey "
    + "T-shirt and checked longyi at night; clear healthy eyes throughout — frightened, never "
    + "ill-looking.");
  if (who.includes("ကိုအောင်မင်း")) cont.push("⚠️ Ko Aung Min is identical to the man in the "
    + "graduation photograph and looks entirely alive: no pallor, no injury, nothing transparent, "
    + "an ordinary shadow. Whatever is wrong with him is only what this shot names.");
  if (who.includes("ညီမ")) cont.push("The sister is healthier and brisker than her elder sister, "
    + "floral blouse and dark htamein, a cloth bag over one arm.");
  if (NEVER_RESOLVED.has(s.t)) cont.push("⚠️ This is the ONLY shot in the film that shows this. "
    + "It must not recur and nothing may be added to it.");

  cont.push("The flat keeps the geometry of the master plate: front door on the far wall, the "
    + "old woman’s wooden bed on the left, the lodger’s open door and the padlocked door on the "
    + "right, the table in the middle.");

  s.cont = cont.join(" ");
  s.style = STYLE;
});
