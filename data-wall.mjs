/**
 * နံရံအတွင်းက ခြေသံ — FOOTSTEPS INSIDE THE WALL
 *
 * Board for insideroomwall.txt. 50 shots.
 *
 * The script opens by asking for a simpler film with fewer shots, almost one
 * location, two characters, and a ghost that is never seen. The board is built
 * to honour that rather than work around it:
 *
 *   1. THE WALL FROM THE BED is a motif, not a setup. The identical frame
 *      returns on four nights — and the fourth is a different room. Repetition
 *      is the horror here, so the shot list repeats on purpose.
 *   2. NOTHING IS EVER SEEN. There is no reference plate for the dead tenant,
 *      deliberately. She exists as a sound, a pink blouse and a phone. The
 *      storage dark is underexposed, never designed, and never resolves.
 *   3. Three locations, two cast plates. Five references for fifty shots.
 *   4. Ordinary Yangon rental. A cheap old flat is not a haunted house, and the
 *      wall has to look like a wall or the reveal at shot 20 is free.
 *   5. No remains on camera. The bones are police activity and a broken wall.
 */

export const CAST = [
  { name: "သက်မင်း", en: "Thet Min — the tenant, late twenties",
    prompt: "A Burmese man in his late twenties, slim, medium-brown skin, a narrow face with tired "
      + "eyes, short black hair. Office clothes when he comes home — a plain white short-sleeved "
      + "shirt and dark trousers — and a grey T-shirt with a checked longyi at night. Clear white "
      + "sclera and natural dark brown irises. Over four nights he stops sleeping: the lids grow "
      + "heavy and the shadows under them deepen, but his face and his age never change." },
  { name: "အန်တီ", en: "The landlady, about sixty",
    prompt: "A Burmese woman of about sixty, small and solid, medium-brown skin, a round lined "
      + "face, greying hair pinned back. A floral cotton blouse and a dark htamein, gold studs, "
      + "reading glasses pushed up on her head, a plastic folder of papers under one arm. An "
      + "ordinary landlady — brisk, practical, not sinister. What she is carrying only shows in "
      + "her face, and only once the door is uncovered.",
    pose: "The subject stands facing the camera square on, full figure in frame, one hand holding "
      + "a plastic document folder against her side" },
];

export const LOCS = [
  { name: "အခန်း", en: "The rented room — master geometry plate",
    prompt: "THE MASTER GEOMETRY PLATE FOR THIS FILM. Almost the whole story happens in this one "
      + "room and against one particular wall, so fix the layout once. A small cheap rented room "
      + "in an old Yangon block, photographed from the doorway at chest height. LEFT OF FRAME: a "
      + "window with security bars and a thin curtain, a plastic chair, a small table with a "
      + "kettle. CENTRE AND RIGHT: a single bed with its HEAD END against the RIGHT-HAND WALL, a "
      + "thin pillow, a folded blanket. THAT RIGHT-HAND WALL IS THE WALL THE WHOLE FILM IS ABOUT: "
      + "flat, painted a chalky pale green over old wallpaper, entirely featureless except for one "
      + "cheap framed print hung above the middle of the bed. A ceiling fan, a bare bulb, a "
      + "concrete floor, a plastic wardrobe in the far corner. ⚠️ THE WALL MUST LOOK COMPLETELY "
      + "ORDINARY — no visible seam, no outline, no damp patch, nothing to notice. Empty of people. "
      + "Ordinary daylight through the window. A cheap flat somebody actually rents, not a haunted "
      + "house — no decay, no grime, no fog." },
  { name: "နံရံအတွင်း", en: "The sealed storage behind the wall",
    prompt: "A very narrow storage void behind a wall, opened up and seen from the room. Bare "
      + "unpainted brick and old plaster, a rough concrete floor thick with undisturbed dust, no "
      + "light fitting of any kind. ⚠️ THE SPACE IS ABOUT TWO FEET DEEP AND SHOULDER WIDE — a "
      + "person could stand in it and could not walk in it, and the geometry must make that "
      + "obvious. It runs back a short way and clearly ends. Empty for this plate: no clothing, no "
      + "objects, no remains, no marks on the walls. Lit only by what falls in from the room "
      + "through the opening. No fog, no cobweb dressing, no horror decoration — it is a forgotten "
      + "cupboard, and that is worse." },
  { name: "အခန်းအသစ်", en: "The new room, one month later",
    prompt: "A different rented room in a different building, cleaner and slightly better than the "
      + "first: a proper bed with a headboard, a wardrobe, a desk with a laptop closed on it, a "
      + "window with a roller blind. Painted plain cream. A single blank wall beside the bed with "
      + "nothing hung on it at all. Empty of people. Ordinary night light from a bedside lamp and "
      + "the window. ⚠️ It must read as a NEW and SAFER room than the first one — this is the "
      + "place he moved to in order to be finished with it." },
];

/** Composition vocabulary. One per shot, stated first and alone. */
const CAM = {
  wall: 'THE WALL FROM THE BED. 35mm-equivalent lens, camera lying on the mattress at pillow height beside the head of the bed, looking along the bed and square on to the RIGHT-HAND WALL, so the wall fills the frame from the mattress edge at the bottom to the framed print at the top. Reproduce this framing identically every time it recurs.',
  room: 'EYE-LEVEL ROOM WIDE. Camera at standing height in the doorway, the whole room in frame as in the master plate.',
  bed: 'PILLOW HEIGHT. Camera on the mattress beside Thet Min’s head, level with his face, the wall filling the background.',
  face: 'CLOSE ON THET MIN. Camera at his eye height, head-and-shoulders crop.',
  aunt: 'CLOSE ON THE LANDLADY. Camera at her eye height, head-and-shoulders crop.',
  two: 'TWO-SHOT. Camera at standing height with both of them in frame, the wall behind them.',
  wallclose: 'TIGHT ON THE WALL. Camera square on to the wall surface at arm’s length, the wall filling the frame.',
  hands: 'INSERT ON HANDS. Camera close on hands and what they hold, forearms entering frame, faces out of shot.',
  phone: 'INSERT ON A PHONE SCREEN. Camera square on to the screen, the screen the brightest thing in frame, its content not legible as text.',
  door: 'THE UNCOVERED DOOR. Camera at standing height square on to the exposed doorway in the wall.',
  storage: 'INTO THE STORAGE. Camera at standing height in the room, looking through the opening into the narrow void, the room’s own light falling in.',
  dark: '⚠️ THE DEPTH OF THE STORAGE, UNRESOLVED. Camera at the opening looking along the void. Expose for the room, so the far end is genuinely underexposed rather than artificially blackened. Nothing in there is ever resolved.',
  police: 'EYE-LEVEL, POLICE PRESENT. Camera at standing height in the doorway. ⚠️ No remains in frame at any point.',
  newroom: 'THE NEW ROOM. Camera at standing height in the new room, the bed and the blank wall beside it in frame.',
};

export const SCENES = [
  // ── I · THE ROOM ──────────────────────────────────────────────────────────
  { t: "Cheap Because It Was Old", l: "အခန်း", k: "room", w: ["သက်မင်း"],
    g: "သက်မင်း နောက်ကျအလုပ်ဆင်းပြီး တိုက်ခန်းဟောင်းတစ်ခန်းကို စျေးသက်သာလို့ ပြောင်းလာတယ်။",
    p: "Thet Min standing just inside the door of the empty room in his office shirt, a rolled "
      + "mattress under one arm and two bags on the floor beside him, looking at the space he has "
      + "just taken. Late evening, one bare bulb on.",
    u: ["သက်မင်းက နောက်ကျအလုပ်ဆင်းပြီးနောက် တိုက်ခန်းဟောင်းတစ်ခန်းကို စျေးသက်သာလို့ ပြောင်းနေလိုက်တယ်။"] },

  { t: "The First Night, Nothing", l: "အခန်း", k: "room", w: ["သက်မင်း"],
    g: "အခန်းက သေးတယ်။ တစ်ယောက်တည်းနေဖို့ လုံလောက်တယ်။ ပထမညမှာ ဘာမှမဖြစ်ဘူး။",
    p: "The room at night with the bed now made up against the right-hand wall, his shoes by the "
      + "door, a kettle on the table. Thet Min asleep on his side, the blanket up, one arm out. "
      + "Completely peaceful. Nothing is wrong with this frame.",
    u: ["အခန်းက သေးတယ်။ တစ်ယောက်တည်းနေရတာအတွက် လုံလောက်တယ်။",
        "ပထမညမှာ— ဘာမှမဖြစ်ဘူး။"] },

  // ── II · THE SECOND NIGHT ─────────────────────────────────────────────────
  { t: "One O'Clock", l: "အခန်း", k: "wall", c: [[1, "bigstinger"]], rev: "motif 1 of 4",
    g: "⚠️ နံရံပုံစံ — လေးခါ ပေါ်မယ်။ ဒုတိယည ညတစ်နာရီ၊ နံရံထဲကနေ ခြေသံ။",
    p: "OCCURRENCE 1 OF 4 OF THE WALL FRAMING. The pale green wall beside the bed at night, filling "
      + "the frame, the framed print at the top, the mattress edge at the bottom. Lit only by "
      + "streetlight through the curtain. ABSOLUTELY NOTHING IS HAPPENING IN THE IMAGE — no crack, "
      + "no shadow, no bulge, no handprint. The wall is the subject and the wall is ordinary. "
      + "Everything about this framing is fixed here and must be identical at its three returns.",
    u: ["ဒုတိယည— ညတစ်နာရီလောက်မှာ နံရံထဲကနေ ခြေသံ ကြားလာတယ်။",
        "တောက်။ တောက်။ တောက်။"] },

  { t: "Someone Walking In There", l: "အခန်း", k: "bed", w: ["သက်မင်း"],
    g: "တစ်ယောက်ယောက်က နံရံအတွင်းက လမ်းလျှောက်နေသလို။ သက်မင်း နားထောင်တယ်။",
    p: "Thet Min lying on his side facing the wall, eyes open, head still on the pillow. He has not "
      + "moved and he is not going to — the whole frame is a man listening. The wall behind him is "
      + "soft and featureless.",
    u: ["တစ်ယောက်ယောက်က နံရံအတွင်းက လမ်းလျှောက်နေသလို။",
        "သက်မင်း နားထောင်တယ်။"] },

  { t: "It Stopped at His Head", l: "အခန်း", k: "wallclose", c: [[1, "stinger"]],
    g: "အသံက အခန်းတစ်ဖက်ကနေ တစ်ဖက်ကို သွားပြီး သူ့အိပ်ရာခေါင်းရင်းမှာ ရပ်သွားတယ်။ တိတ်သွားတယ်။",
    p: "Tight on the blank wall at exactly the height of the pillow, close enough to see the "
      + "texture of old paint over paper. The corner of the pillow and the top of Thet Min’s head "
      + "are in the bottom of frame, out of focus. Nothing else. This is the spot the walking "
      + "stopped at.",
    u: ["အသံက— အခန်းတစ်ဖက်ကနေ တစ်ဖက်ကို သွားတယ်။",
        "ပြီးတော့— သူ့အိပ်ရာခေါင်းရင်းနားမှာ ရပ်သွားတယ်။ တိတ်သွားတယ်။"] },

  { t: "Probably the Pipes", l: "အခန်း", k: "face", w: ["သက်မင်း"],
    g: "သက်မင်း အဲဒါကို ပိုက်လိုင်းအသံလို့ပဲ ထင်တယ်။",
    p: "Close on Thet Min in morning light, sitting on the edge of the bed with a cup, entirely "
      + "unbothered. A man who has explained something to himself and is satisfied with the "
      + "explanation.",
    u: ["သက်မင်း အဲဒါကို ပိုက်လိုင်းအသံလို့ပဲ ထင်တယ်။"] },

  // ── III · THE THIRD NIGHT ─────────────────────────────────────────────────
  { t: "The Same Again", l: "အခန်း", k: "wall", rev: "motif 2 of 4",
    g: "⚠️ နံရံပုံစံ ဒုတိယအကြိမ် — အတူတူပဲ။ ဒါပေမယ့် ဒီတစ်ခါ ခြေသံက မရပ်ဘူး။",
    p: "OCCURRENCE 2 OF 4. The identical framing, the identical wall, the identical light. Nothing "
      + "in the image has changed from the first occurrence and nothing in it is happening. The "
      + "repetition is the point — the audience should recognise the shot before they understand "
      + "why it has come back.",
    u: ["နောက်ည— အတူတူပဲ။ တောက်။ တောက်။ တောက်။",
        "ဒီတစ်ခါ— ခြေသံက နံရံထဲမှာ မရပ်ဘူး။"] },

  { t: "Scratching", l: "အခန်း", k: "wallclose", c: [[1, "bigstinger"]],
    g: "သူ့အိပ်ရာနားရောက်တော့ ခြစ်သံ စလာတယ်။ ဂျစ်။ ဂျစ်။ ဂျစ်။",
    p: "The same tight framing on the wall at pillow height. Still no mark, no movement, no damage "
      + "— but the shot is now held on the exact square foot of ordinary paint that a sound is "
      + "coming out of. ⚠️ Nothing is scratching the wall from this side. Do not add scratches, "
      + "fingers, dust falling or a shape behind the plaster.",
    u: ["သူ့အိပ်ရာနားရောက်တော့— **ခြစ်သံ** စလာတယ်။",
        "ဂျစ်။ ဂျစ်။ ဂျစ်။"] },

  { t: "Like Fingernails", l: "အခန်း", k: "bed", w: ["သက်မင်း"],
    g: "နံရံတစ်ဖက်ကနေ လက်သည်းနဲ့ ခြစ်နေသလို။ သက်မင်း အိပ်မရတော့ဘူး။",
    p: "Thet Min at pillow height, now lying on his back rather than facing the wall, eyes wide "
      + "open at the ceiling, blanket pushed down. The first shot in which he is visibly not going "
      + "to sleep.",
    u: ["နံရံတစ်ဖက်ကနေ လက်သည်းနဲ့ ခြစ်နေသလို။",
        "သက်မင်း အိပ်မရတော့ဘူး။"] },

  // ── IV · WHAT IS BEHIND THAT WALL ─────────────────────────────────────────
  { t: "Auntie, What Is In This Wall", l: "အခန်း", k: "face", w: ["သက်မင်း"],
    g: "မနက်ရောက်တော့ အခန်းပိုင်ရှင် အန်တီကို ဖုန်းဆက်တယ်။ “ဒီနံရံထဲမှာ ဘာရှိလဲ” — “ဘာမှမရှိဘူး”",
    p: "Thet Min standing at the window in daylight with a phone to his ear, his back half to the "
      + "wall, looking at it while he talks. Ordinary morning; he has not slept.",
    u: ["မနက်ရောက်တော့ အခန်းပိုင်ရှင် အန်တီကို ဖုန်းဆက်တယ်။",
        "“အန်တီ ဒီနံရံထဲမှာ ဘာရှိလဲ” အန်တီက— “ဘာမှမရှိဘူး” လို့ ပြောတယ်။"] },

  { t: "No. That Side Is Outside.", l: "အခန်း", k: "wallclose",
    g: "“တခြားအခန်းလား” “မဟုတ်ဘူး” “အဲဒီဘက်က အပြင်နံရံ”",
    p: "The wall at arm’s length again, but framed to include the edge where it meets the window "
      + "reveal — so that the thickness of the exterior wall is visible in the same image, and the "
      + "daylight coming past it proves what is on the other side.",
    u: ["“တခြားအခန်းလား” “မဟုတ်ဘူး” “အဲဒီဘက်က အပြင်နံရံ”"] },

  { t: "Then Who Is Walking", l: "အခန်း", k: "face", w: ["သက်မင်း"], c: [[2, "bigstinger"]],
    g: "နံရံရဲ့တစ်ဖက်မှာ အခန်းမရှိဘူး။ အပြင်ဘက်ပဲ။ ဒါဆို နံရံထဲမှာ ဘယ်သူလမ်းလျှောက်နေတာလဲ။",
    p: "Close on Thet Min with the phone lowered from his ear, no longer listening to it, looking "
      + "straight at the wall. The arithmetic has just finished and the answer is not available.",
    u: ["သက်မင်း တောင့်သွားတယ်။",
        "နံရံရဲ့တစ်ဖက်မှာ— အခန်းမရှိဘူး။ အပြင်ဘက်ပဲ။",
        "ဒါဆို— နံရံထဲမှာ ဘယ်သူလမ်းလျှောက်နေတာလဲ။"] },

  // ── V · THE FOURTH NIGHT ──────────────────────────────────────────────────
  { t: "He Set the Camera", l: "အခန်း", k: "room", w: ["သက်မင်း"],
    g: "အဲဒီည သက်မင်း မအိပ်ဘူး။ ဖုန်း camera ကို နံရံဘက် ထောင်ထားတယ်။",
    p: "The room at night. A phone is propped upright against the kettle on the table, its lens "
      + "aimed across the room at the wall. Thet Min sits on the far end of the bed with his back "
      + "to the window, awake, watching the wall himself.",
    u: ["အဲဒီည— သက်မင်း မအိပ်ဘူး။",
        "ဖုန်း Camera ကိုနံရံဘက် ထောင်ထားတယ်။"] },

  { t: "1:17", l: "အခန်း", k: "wall", c: [[1, "stinger"]], rev: "motif 3 of 4",
    g: "⚠️ နံရံပုံစံ တတိယအကြိမ် — ည ၁:၁၇။ ခြေသံ စလာတယ်။",
    p: "OCCURRENCE 3 OF 4. The identical framing and the identical ordinary wall for the third "
      + "time. Still nothing visible, still nothing happening. The only change permitted anywhere "
      + "in frame is that the room is a little colder in colour than the earlier nights.",
    u: ["ည ၁:၁၇။ ခြေသံ စလာတယ်။",
        "တောက်။ တောက်။ တောက်။"] },

  { t: "Faster Than Before", l: "အခန်း", k: "bed", w: ["သက်မင်း"],
    g: "ဒီတစ်ခါ ခြေသံက အရင်ထက်မြန်တယ်။ အိပ်ရာနားရောက်တော့ ရပ်သွားတယ်။",
    p: "Thet Min at pillow height, sitting up now with his back against the wall he is afraid of "
      + "— the only place in a single bed a person can sit. His head is turned toward it and one "
      + "hand is flat on the mattress.",
    u: ["ဒီတစ်ခါ— ခြေသံက အရင်ထက်မြန်တယ်။ တောက်။ တောက်။ တောက်။",
        "အိပ်ရာနားရောက်တော့— ရပ်သွားတယ်။"] },

  { t: "Breathing", l: "အခန်း", k: "wallclose", c: [[2, "bigstinger"]],
    g: "နံရံထဲကနေ လူတစ်ယောက် အသက်ရှူသံ ကြားလာတယ်။ သူ့နားနားမှာပဲ။",
    p: "The tightest framing on the wall in the film, close enough that the paint texture is the "
      + "whole image, with the edge of Thet Min’s ear and cheek at the very edge of frame — the "
      + "distance between them is two inches of plaster. ⚠️ Nothing appears in or on the wall. No "
      + "face pressing through, no condensation, no mouth shape.",
    u: ["ပြီးတော့— နံရံထဲကနေ လူတစ်ယောက် အသက်ရှူသံ ကြားလာတယ်။ ဟားးးး…",
        "သက်မင်း မလှုပ်ရဲဘူး။",
        "အသက်ရှူသံက သူ့နားနားမှာပဲ။ နံရံတစ်ဖက်ကနေ။"] },

  { t: "Let Me Out", l: "အခန်း", k: "face", w: ["သက်မင်း"], c: [[1, "bigstinger"]],
    g: "မိန်းမအသံ တိုးတိုးလေး — **“ငါ့ကို ထုတ်ပေး…”** သက်မင်း အပြင် ပြေးထွက်သွားတယ်။",
    p: "Close on Thet Min’s face in the instant he hears words rather than noise. His eyes have "
      + "gone to the wall and his whole body has already started to move away from it while his "
      + "head has not. The wall behind him is blank and out of focus.",
    u: ["ခဏကြာတော့— အသံတစ်ခု။ မိန်းမအသံ။ တိုးတိုးလေး။",
        "**“ငါ့ကို ထုတ်ပေး…”**",
        "သက်မင်း ခေါင်းထဲ ပူသွားတယ်။ သူ အခန်းအပြင် ပြေးထွက်လိုက်တယ်။"] },

  // ── VI · THE LINE UNDER THE PICTURE ───────────────────────────────────────
  { t: "A Line Under the Picture", l: "အခန်း", k: "wallclose",
    g: "မနက်ကျတော့ နံရံကို သေချာကြည့်တယ်။ ပန်းချီအောက်မှာ လိုင်းတစ်ကြောင်း ရှိနေတယ်။",
    p: "The wall in flat daylight with the framed print lifted aside and resting on the bed. Where "
      + "it hung, running down the paint, there is one faint straight vertical line — not a crack "
      + "and not damage, a join, the kind you would never see unless you were looking for it.",
    u: ["မနက်ကျတော့— နံရံကို သေချာကြည့်တယ်။",
        "ပန်းချီအောက်မှာ လိုင်းတစ်ကြောင်းရှိနေတယ်။"] },

  { t: "He Cut the Paper", l: "အခန်း", k: "hands", w: ["သက်မင်း"], c: [[1, "stinger"]],
    g: "တံခါးအနားသတ်လို။ Wallpaper နဲ့ ဖုံးထားတာ။ သက်မင်း cutter နဲ့ ဖြတ်လိုက်တယ်။",
    p: "Insert on Thet Min’s hands drawing a utility knife down the faint line, the blade parting "
      + "layers of old wallpaper and paint. A narrow dark gap is opening behind the cut, and dust "
      + "is coming out of it rather than going in.",
    u: ["တံခါးအနားသတ်လို။ Wallpaper နဲ့ ဖုံးထားတာ။",
        "သက်မင်း Cutter ယူပြီး ဖြတ်လိုက်တယ်။"] },

  { t: "It Was Not a Wall", l: "အခန်း", k: "door", c: [[1, "bigstinger"]],
    g: "နောက်မှာ သစ်သားဘောင်၊ တံခါးတစ်ချပ်။ နံရံမဟုတ်ဘူး — ပြင်တုန်းက ဖုံးထားတာ။",
    p: "The wall square on with the paper torn back in strips, revealing a wooden door frame and a "
      + "plain flush door set into it, screwed shut and painted over, the paint bridging the gap "
      + "between door and frame in a single unbroken skin. It was never sealed in a hurry; it was "
      + "finished properly by somebody being paid to make it disappear.",
    u: ["နောက်မှာ— သစ်သားဘောင်။ တံခါးတစ်ချပ်။ နံရံမဟုတ်ဘူး။",
        "တံခါးကို တိုက်ခန်းပြင်တုန်းက အပြည့်ပိတ်ပြီး နံရံလို ဖုံးထားတာ။"] },

  // ── VII · THE LANDLADY ────────────────────────────────────────────────────
  { t: "Don't Open It", l: "အခန်း", k: "aunt", w: ["အန်တီ"],
    g: "အန်တီလာတယ်။ တံခါးမြင်တော့ မျက်နှာပျက်သွားတယ်။ “မဖွင့်နဲ့”",
    p: "Close on the landlady just inside the door, her folder still under her arm, looking past "
      + "the camera at the uncovered door. The brisk practical face she arrived with has come off "
      + "and she has not replaced it with anything.",
    u: ["သက်မင်း အန်တီကို ချက်ချင်းခေါ်တယ်။ အန်တီလာတယ်။",
        "တံခါးမြင်တော့ မျက်နှာပျက်သွားတယ်။ “မဖွင့်နဲ့”"] },

  { t: "Why", l: "အခန်း", k: "two", w: ["သက်မင်း", "အန်တီ"],
    g: "“ဘာလို့” — အန်တီ တိတ်နေတယ်။",
    p: "Both of them in the small room: Thet Min on the LEFT beside the exposed door with the "
      + "torn paper at his feet, the landlady on the RIGHT near the exit, as far from the door as "
      + "the room allows. Neither is moving.",
    u: ["သက်မင်း သူ့ကို ကြည့်တယ်။ “ဘာလို့”",
        "အန်တီ တိတ်နေတယ်။"] },

  { t: "The Girl Who Was Here Before", l: "အခန်း", k: "aunt", w: ["အန်တီ"], c: [[2, "stinger"]],
    g: "“အရင် tenant ကောင်မလေး… ဒီအခန်းမှာ ပျောက်သွားဖူးတယ်။ လူမတွေ့ဘူး။ ပစ္စည်းအကုန်ရှိတယ်။”",
    p: "Close on the landlady speaking, eyes down, the words coming out in the short pieces of "
      + "somebody who has never said them aloud before.",
    u: ["နောက်ဆုံး— “အရင် tenant ကောင်မလေး…”",
        "“ဒီအခန်းမှာ ပျောက်သွားဖူးတယ်” “ပျောက်သွားတာ?” “ဟုတ်တယ်”",
        "“လူမတွေ့ဘူး” “ပစ္စည်းအကုန်ရှိတယ်”"] },

  { t: "A Small Storage", l: "အခန်း", k: "two", w: ["သက်မင်း", "အန်တီ"],
    g: "“ဒီတံခါးနောက်မှာ ဘာရှိလဲ” — “Storage သေးသေးတစ်ခန်း။ အရင်ကဖွင့်လို့ရတယ်။ နောက်ပိုင်း ပိတ်လိုက်တာ။” “ဘာလို့ပိတ်တာ” — မဖြေဘူး။",
    p: "The same two positions, Thet Min now turned fully toward her and a step closer, the "
      + "landlady half turned toward the exit with one hand on the door frame. The question she "
      + "will not answer is the space between them.",
    u: ["သက်မင်း နားလည်စပြုလာတယ်။ “ဒီတံခါးနောက်မှာ ဘာရှိလဲ”",
        "အန်တီက— “Storage သေးသေးတစ်ခန်း” လို့ ပြောတယ်။",
        "“အရင်ကဖွင့်လို့ရတယ်” “နောက်ပိုင်း ပိတ်လိုက်တာ” “ဘာလို့ပိတ်တာ” အန်တီ မဖြေဘူး။"] },

  // ── VIII · INSIDE ─────────────────────────────────────────────────────────
  { t: "He Did Not Wait", l: "အခန်း", k: "hands", w: ["သက်မင်း"],
    g: "သက်မင်း မစောင့်တော့ဘူး။ တံခါးကို ဖောက်ဖွင့်လိုက်တယ်။",
    p: "Insert on the door being forced: a screwdriver blade levered into the painted seam near "
      + "the handle, both of Thet Min’s hands on it, the paint skin splitting and the door starting "
      + "to come away from the frame.",
    u: ["သက်မင်း မစောင့်တော့ဘူး။ တံခါးကို ဖောက်ဖွင့်လိုက်တယ်။"] },

  { t: "Too Narrow to Stand In", l: "နံရံအတွင်း", k: "storage",
    g: "အထဲမှာ အရမ်းကျဉ်းတဲ့ space။ လူတစ်ယောက်တောင် နေရာမလောက်ဘူး။ ဖုန်တွေ။ အမှောင်။",
    p: "Through the opened doorway into the void. ⚠️ THE SHOT’S ONE JOB IS SCALE: the space is "
      + "about two feet deep, the far brick clearly visible and clearly close, dust on the floor "
      + "entirely undisturbed. A person could stand in here and could not take a single step. "
      + "Nothing is in it that the next shot has not put there.",
    u: ["အထဲမှာ— အရမ်းကျဉ်းတဲ့ space။",
        "လူတစ်ယောက်တောင် နေရာမလောက်ဘူး။ ဖုန်တွေ။ အမှောင်။"] },

  { t: "A Pink Blouse", l: "နံရံအတွင်း", k: "storage", c: [[1, "bigstinger"]],
    g: "နောက်ဆုံးထောင့်မှာ အဝတ်တစ်ထည် — ပန်းရောင်အင်္ကျီ။ အောက်မှာ ဖုန်းဟောင်းတစ်လုံး။",
    p: "The far corner of the void where the floor meets the brick. A pink women’s blouse lies "
      + "crumpled on the dust, empty and flat, the cloth clean and whole — and half under its hem "
      + "the corner of an old phone. ⚠️ THE FRAME CONTAINS EXACTLY THREE THINGS: the blouse, the "
      + "phone and the dust. The brick behind them is bare and unmarked.",
    u: ["နောက်ဆုံးထောင့်မှာ— အဝတ်တစ်ထည်။ ပန်းရောင်အင်္ကျီ။",
        "အောက်မှာ— ဖုန်းဟောင်းတစ်လုံး။"] },

  // ── IX · THE RECORDING ────────────────────────────────────────────────────
  { t: "No Battery", l: "နံရံအတွင်း", k: "hands", w: ["သက်မင်း"],
    g: "သက်မင်း ဖုန်းကို ကောက်တယ်။ Battery မရှိဘူး။ ဒါပေမယ့် Screen ရုတ်တရက် လင်းလာတယ်။",
    p: "Insert on Thet Min’s hands holding the old phone, the back cover off in his other hand and "
      + "the battery compartment plainly empty. The screen is lit. Both facts are in the same "
      + "frame and neither is emphasised over the other.",
    u: ["သက်မင်း ဖုန်းကို ကောက်တယ်။ Battery မရှိဘူး။",
        "ဒါပေမယ့်— Screen ရုတ်တရက် လင်းလာတယ်။"] },

  { t: "The Door Has Closed", l: "အခန်း", k: "phone", c: [[1, "stinger"]],
    g: "Voice recording တစ်ခု auto play ဖြစ်တယ်။ မိန်းကလေးအသံ — “တံခါးပိတ်သွားပြီ”",
    p: "Square on the old phone’s screen, a voice recording playing — a waveform and a running "
      + "timer, bright in the dim room. The interface reads unmistakably as audio playing and "
      + "nothing on it is legible as words.",
    u: ["Voice recording တစ်ခု auto play ဖြစ်တယ်။ မိန်းကလေးအသံ။",
        "“တံခါးပိတ်သွားပြီ” အသက်ရှူသံ။"] },

  { t: "Auntie. Can You Hear Me.", l: "အခန်း", k: "aunt", w: ["အန်တီ"], c: [[0, "stinger"]],
    g: "“အန်တီ… ကြားလား… ဖွင့်ပေးပါ…”",
    p: "Close on the landlady listening to her own name coming out of a phone. She has not moved "
      + "and she has not looked away. ⚠️ Play the shot on her face; the recording is not "
      + "illustrated.",
    u: ["“အန်တီ…” “ကြားလား…” “ဖွင့်ပေးပါ…”"] },

  // ── X · WHAT SHE DID NOT KNOW ─────────────────────────────────────────────
  { t: "I Didn't Know", l: "အခန်း", k: "two", w: ["သက်မင်း", "အန်တီ"],
    g: "သက်မင်း ဖြည်းဖြည်း လှည့်ကြည့်တယ်။ အန်တီ မျက်ရည်ကျနေတယ်။ “ကျွန်မ မသိဘူး”",
    p: "Both of them, Thet Min in the near foreground turning his head toward her with the lit "
      + "phone still in his hand, the landlady sharp behind him with tears running and her mouth "
      + "working.",
    u: ["သက်မင်း ဖြည်းဖြည်း အခန်းပိုင်ရှင်ကို လှည့်ကြည့်တယ်။",
        "အန်တီ မျက်ရည်ကျနေတယ်။ “ကျွန်မ မသိဘူး”"] },

  { t: "I Didn't Know She Was Inside", l: "အခန်း", k: "aunt", w: ["အန်တီ"],
    g: "“ဘာမသိတာ” — “သူ အထဲဝင်နေမှန်း မသိဘူး” အန်တီ တုန်နေတယ်။",
    p: "Close on the landlady, shaking now, both hands gripping the folder against her chest like "
      + "the last solid thing in the room.",
    u: ["သက်မင်း— “ဘာမသိတာ” “သူ အထဲဝင်နေမှန်း မသိဘူး”",
        "အန်တီ တုန်နေတယ်။"] },

  { t: "I Closed the Storage", l: "အခန်း", k: "aunt", w: ["အန်တီ"],
    g: "“ကျွန်မ storage ကိုပိတ်လိုက်တာ… သူ အဲဒီထဲ ရှိနေတယ်ဆိုတာ မသိဘူး”",
    p: "The same close framing on the landlady saying the sentence that is both a confession and "
      + "a defence, and is true.",
    u: ["“ကျွန်မ storage ကိုပိတ်လိုက်တာ…” “သူ အဲဒီထဲ ရှိနေတယ်ဆိုတာ မသိဘူး”"] },

  // ── XI · THE HAMMER ───────────────────────────────────────────────────────
  { t: "Don't Close It", l: "အခန်း", k: "phone",
    g: "Voice recording ဆက်လာတယ် — “အန်တီ… မပိတ်ပါနဲ့…”",
    p: "The phone screen again, the timer further along, the waveform spiking harder than before. "
      + "The room around it is darker because nobody has turned a light on.",
    u: ["Voice recording ဆက်လာတယ်။ “အန်တီ…” “မပိတ်ပါနဲ့…”"] },

  { t: "Hammering", l: "အခန်း", k: "door", c: [[2, "bigstinger"]],
    g: "အပြင်ဘက်က Hammer အသံ။ ဒုန်း။ ဒုန်း။ ဒုန်း။ တံခါးကို အပြင်ကနေ ပိတ်နေတဲ့အသံ။",
    p: "The opened doorway in the wall, square on, empty and dark. ⚠️ THE SOUND IS ON THE "
      + "RECORDING, NOT IN THE ROOM — nothing is being hammered now, nobody is at the door, and "
      + "the frame is completely still. What the shot shows is the doorway that was nailed shut "
      + "while somebody stood behind it.",
    u: ["ပြီးတော့— အပြင်ဘက်က Hammer အသံ။",
        "ဒုန်း။ ဒုန်း။ ဒုန်း။",
        "တံခါးကို အပြင်ကနေ ပိတ်နေတဲ့အသံ။"] },

  { t: "The Builders Did It", l: "အခန်း", k: "aunt", w: ["အန်တီ"],
    g: "Recording ထဲမှာ မိန်းကလေး အော်တယ်။ အန်တီ ငိုတယ် — “ပြင်ဆင်ရေးသမားတွေ လုပ်တာ။ ကျွန်မ မြို့ပြင်သွားနေတုန်း။ ပြန်လာတော့ နံရံလုပ်ပြီးသား။”",
    p: "The landlady with both hands over her face, bent forward, crying properly. ⚠️ Do not "
      + "illustrate the screaming on the recording; the shot is her hands and what they are "
      + "covering.",
    u: ["Recording ထဲမှာ မိန်းကလေး အော်တယ်။",
        "အန်တီ မျက်နှာကို လက်နဲ့ဖုံးပြီး ငိုတယ်။",
        "“ပြင်ဆင်ရေးသမားတွေ လုပ်တာ” “ကျွန်မ မြို့ပြင်သွားနေတုန်း” “ပြန်လာတော့ နံရံလုပ်ပြီးသား”"] },

  // ── XII · WHY DID NOBODY LOOK ─────────────────────────────────────────────
  { t: "Then Why Did Nobody Look", l: "အခန်း", k: "two", w: ["သက်မင်း", "အန်တီ"],
    g: "“ဒါဆို သူ့ကို ဘာလို့မရှာတာ” — “ရှာတယ်။ မတွေ့ဘူး။ သူ အိမ်ပြောင်းသွားတယ်လို့ ထင်ခဲ့တာ။”",
    p: "Both of them again, further apart than before, the opened doorway between them in the "
      + "background of the frame. He is asking the only question left and she is answering it "
      + "honestly, which makes it worse.",
    u: ["သက်မင်း— “ဒါဆို သူ့ကို ဘာလို့မရှာတာ”",
        "အန်တီက— “ရှာတယ်” “မတွေ့ဘူး” “သူ အိမ်ပြောင်းသွားတယ်လို့ ထင်ခဲ့တာ”"] },

  { t: "The Recording Stopped", l: "အခန်း", k: "phone",
    g: "Recording ရပ်သွားတယ်။ အခန်းတိတ်သွားတယ်။",
    p: "The phone screen with the playback ended — the waveform flat, the timer stopped. The "
      + "brightest thing in the room is a finished recording.",
    u: ["Recording ရပ်သွားတယ်။ အခန်းတိတ်သွားတယ်။"] },

  // ── XIII · IT COMES BACK ──────────────────────────────────────────────────
  { t: "From Deep Inside", l: "နံရံအတွင်း", k: "dark", c: [[1, "stinger"]],
    g: "Storage အတွင်းနက်နက်ကနေ တောက်။ တောက်။ တောက်။ ခြေသံပြန်လာတယ်။",
    p: "⚠️ INTO THE VOID, AND IT DOES NOT RESOLVE. Looking along the narrow opening with the room’s "
      + "light falling only a foot or so into it. Beyond that the frame is genuinely underexposed. "
      + "Nothing is in there: no shape, no eyes, no outline, no depth that was not there before.",
    u: ["ပြီးတော့— Storage အတွင်းနက်နက်ကနေ တောက်။ တောက်။ တောက်။",
        "ခြေသံပြန်လာတယ်။"] },

  { t: "They Both Stepped Back", l: "အခန်း", k: "two", w: ["သက်မင်း", "အန်တီ"],
    g: "သက်မင်းနဲ့ အန်တီ တစ်ပြိုင်နက် နောက်ဆုတ်ကြတယ်။",
    p: "Both of them mid-step backward at the same instant, both facing the opened doorway, the "
      + "distance between them and it visibly increasing. Two people doing the same involuntary "
      + "thing.",
    u: ["သက်မင်းနဲ့ အန်တီ တစ်ပြိုင်နက် နောက်ဆုတ်ကြတယ်။"] },

  { t: "There Is Nowhere to Walk", l: "နံရံအတွင်း", k: "storage", c: [[1, "bigstinger"]],
    g: "ပြဿနာက— အဲဒီ space က လမ်းလျှောက်လို့မရလောက်အောင် သေးတယ်။ ဒါပေမယ့် ခြေသံက နက်နက်ထဲကနေ လာနေတယ်။",
    p: "The void again in exactly the scale-establishing framing of its first shot — two feet "
      + "deep, the far brick close and clearly lit, nowhere for anything to be. ⚠️ THE IMAGE MUST "
      + "AGREE WITH THE EARLIER ONE ENTIRELY. The space has not got deeper, darker or longer. "
      + "Nothing has been added. The contradiction is between the picture and the sound, and it "
      + "only works if the picture stays honest.",
    u: ["ပြဿနာက— အဲဒီ storage space က လူတစ်ယောက် လမ်းလျှောက်လို့မရလောက်အောင် သေးတယ်။",
        "ဒါပေမယ့်— ခြေသံက နက်နက်ထဲကနေ သူတို့ဆီ တဖြည်းဖြည်း လာနေတယ်။ တောက်။ တောက်။ တောက်။"] },

  // ── XIV · THANK YOU ───────────────────────────────────────────────────────
  { t: "She Ran", l: "အခန်း", k: "room", w: ["သက်မင်း", "အန်တီ"],
    g: "အန်တီ ပြေးထွက်သွားတယ်။ သက်မင်းလည်း လိုက်မလို့လုပ်တယ်။",
    p: "The room wide from the doorway. The landlady is already out of the frame’s left edge with "
      + "only her trailing arm and folder still in shot; Thet Min has turned to follow her and has "
      + "one foot committed.",
    u: ["အန်တီ ပြေးထွက်သွားတယ်။ သက်မင်းလည်း လိုက်မလို့လုပ်တယ်။"] },

  { t: "Thank You", l: "အခန်း", k: "face", w: ["သက်မင်း"],
    g: "အဲဒီအချိန် မိန်းမအသံ — **“ကျေးဇူးတင်ပါတယ်…”** သူ ရပ်သွားတယ်။ ခြေသံ ရပ်သွားတယ်။",
    p: "Close on Thet Min stopped mid-movement, still angled toward the exit, his head coming back "
      + "around toward the wall. What is on his face is not fear. It is the first moment in the "
      + "film that the thing in the wall has been kind.",
    u: ["အဲဒီအချိန်— မိန်းမအသံ။ **“ကျေးဇူးတင်ပါတယ်…”**",
        "သူ ရပ်သွားတယ်။ ခြေသံ ရပ်သွားတယ်။"] },

  { t: "The Blouse Moved", l: "နံရံအတွင်း", k: "storage", c: [[1, "stinger"]],
    g: "Storage အတွင်းက လေတစ်ချက်ထွက်လာတယ်။ ပန်းရောင်အင်္ကျီက လေထဲမှာ ဖြည်းဖြည်း လှုပ်တယ်။ ပြီးတော့ အားလုံးတိတ်သွားတယ်။",
    p: "The far corner of the void on the pink blouse, and for the only time in the film the "
      + "cloth is MOVING — one sleeve lifted and settling, dust turning in the air above it, as a "
      + "breath of air comes out of a space that has been sealed for years. Nothing else moves.",
    u: ["Storage အတွင်းက လေတစ်ချက်ထွက်လာတယ်။",
        "ပန်းရောင်အင်္ကျီက လေထဲမှာ ဖြည်းဖြည်း လှုပ်တယ်။",
        "ပြီးတော့— အားလုံးတိတ်သွားတယ်။"] },

  // ── XV · AFTER ────────────────────────────────────────────────────────────
  { t: "They Broke the Wall Open", l: "အခန်း", k: "police",
    g: "နောက်နေ့ ရဲတွေ လာတယ်။ နံရံကို ဖြိုတယ်။ အတွင်းထဲကနေ အရိုးတွေ တွေ့တယ်။ Missing tenant နဲ့ ကိုက်ညီတယ်။",
    p: "The room in daylight with the wall opened right out — brick rubble on plastic sheeting, a "
      + "work light on a stand, two uniformed police and a technician in gloves working at the "
      + "void, numbered evidence markers on the floor. ⚠️ ABSOLUTELY NO REMAINS IN FRAME. The "
      + "camera is in the doorway and everything being recovered is out of shot behind them.",
    u: ["နောက်နေ့— ရဲတွေ လာတယ်။ နံရံကို ဖြိုတယ်။",
        "အတွင်းထဲကနေ— အရိုးတွေ တွေ့တယ်။ Missing tenant နဲ့ ကိုက်ညီတယ်။"] },

  { t: "He Thought It Was Finished", l: "အခန်း", k: "room", w: ["သက်မင်း"],
    g: "Case ပြန်ဖွင့်တယ်။ အန်တီ စစ်ဆေးခံရတယ်။ သက်မင်း အခန်းပြောင်းသွားတယ်။ ခြေသံလည်း မကြားတော့ဘူး။",
    p: "The room stripped and empty in daylight, the wall a raw opening with a sheet of plywood "
      + "leaned against it, the bed gone. Thet Min stands in the doorway with his two bags, "
      + "looking back into it on his way out.",
    u: ["Case ပြန်ဖွင့်တယ်။ အန်တီလည်း စစ်ဆေးခံရတယ်။",
        "သက်မင်း အခန်းပြောင်းသွားတယ်။",
        "အဲဒီနောက်— ခြေသံလည်း မကြားတော့ဘူး။ အရာအားလုံး ပြီးသွားပြီလို့ ထင်ခဲ့တယ်။"] },

  // ── XVI · ROOM_2 ──────────────────────────────────────────────────────────
  { t: "A Month Later", l: "အခန်းအသစ်", k: "newroom", w: ["သက်မင်း"],
    g: "တစ်လကြာတော့ သက်မင်း အခန်းအသစ်မှာ အိပ်နေတယ်။ ည ၁:၁၇။ ဖုန်း screen လင်းလာတယ်။",
    p: "The new room at night. Thet Min asleep properly for the first time in the film, on his "
      + "back, relaxed. On the bedside table his phone screen has just lit by itself, throwing a "
      + "small cold rectangle of light across the blanket.",
    u: ["တစ်လကြာတော့— သက်မင်း အခန်းအသစ်မှာ အိပ်နေတယ်။",
        "ည ၁:၁၇။ သူ့ဖုန်း Screen လင်းလာတယ်။"] },

  { t: "ROOM_2", l: "အခန်းအသစ်", k: "phone", c: [[1, "bigstinger"]],
    g: "Unknown audio file တစ်ခု။ Filename က **“ROOM_2”**။ သက်မင်း မျက်နှာပျက်သွားတယ်။ Play မလုပ်ဘူး။",
    p: "Square on the phone screen showing an audio file from an unknown sender. ⚠️ THE FILENAME "
      + "IS THE ONE PIECE OF LEGIBLE TEXT IN THIS FILM: ROOM_2, in plain characters, clearly "
      + "readable. Everything else on the screen stays unreadable.",
    u: ["Unknown audio file တစ်ခု။ Filename က— **“ROOM_2”**",
        "သက်မင်း မျက်နှာပျက်သွားတယ်။ Play မလုပ်ဘူး။"] },

  { t: "A Man's Voice", l: "အခန်းအသစ်", k: "face", w: ["သက်မင်း"],
    g: "ဖိုင်က သူ့အလိုလို စဖွင့်သွားတယ်။ မိန်းမအသံ မဟုတ်ဘူး — အမျိုးသားအသံ။ **“ငါ့ကိုလည်း ထုတ်ပေး…”**",
    p: "Close on Thet Min sitting up in the new bed, the lit phone in his hand below frame "
      + "throwing light up onto his face from underneath. He is not listening to a woman and he "
      + "knows it.",
    u: ["ဒါပေမယ့်— ဖိုင်က သူ့အလိုလို စဖွင့်သွားတယ်။",
        "မိန်းမအသံ မဟုတ်ဘူး။ အမျိုးသားအသံ။ တိုးတိုးလေး။",
        "**“ငါ့ကိုလည်း ထုတ်ပေး…”**"] },

  { t: "He Looked Up", l: "အခန်းအသစ်", k: "wall", c: [[1, "finalstinger"]], rev: "motif 4 of 4",
    g: "⚠️ နံရံပုံစံ နောက်ဆုံးအကြိမ် — ဒါပေမယ့် **အခန်းအသစ်ရဲ့နံရံ**။ တောက်။ တောက်။ တောက်။",
    p: "OCCURRENCE 4 OF 4, AND THE LAST SHOT. The identical framing from the identical height "
      + "against the wall beside the bed — ⚠️ BUT THIS IS THE NEW ROOM AND THE NEW WALL: cream "
      + "paint instead of pale green, no framed print above it, a different headboard at the "
      + "bottom of frame. The shape of the shot is the same; the room is not. The wall is blank "
      + "and completely ordinary.",
    u: ["သက်မင်း ဖြည်းဖြည်း ခေါင်းမော့တယ်။",
        "အခန်းအသစ်ရဲ့နံရံထဲကနေ— တောက်။ တောက်။ တောက်။ ခြေသံစလာတယ်။"] },
];

// ── SCAFFOLDING ─────────────────────────────────────────────────────────────

const STYLE = "Ordinary Yangon rented room, 16:9, 35mm grain, contemporary photorealism. ORDINARY "
  + "LIGHT ONLY: daylight through a barred window by day; one bare bulb, a phone screen and "
  + "streetlight through a thin curtain by night. This is a cheap flat somebody actually rents, "
  + "NOT a haunted house — no green or teal grade, no fog or haze, no damp stains, no peeling "
  + "horror decay, no cobwebs, no blood, no heavy vignette. One still instant, no montage or "
  + "visible sound effects. No gore, no remains, no legible writing, labels, logo or watermark.";

/** Shots looking into the void, where nothing may ever be resolved. */
const DARK_SHOTS = new Set(["From Deep Inside"]);

/** From here he has stopped sleeping, and it shows in his lids and nowhere else. */
const SLEEPLESS = 9;

SCENES.forEach((s, i) => {
  const n = i + 1, who = s.w || [];
  s.n = n;
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`shot ${n} "${s.t}" has no camera key`);

  const cont = ["Continuity: ordinary living people photographed straight."];

  // The whole film is a sound. Every shot is therefore one instruction away from
  // a generator helpfully drawing the thing making it.
  cont.push("⚠️ NOTHING SUPERNATURAL IS EVER VISIBLE IN THIS FILM. No figure, no face, no hand, no "
    + "shadow that is not cast by something in the room, nothing in or on or behind the wall. The "
    + "dead tenant exists only as a sound, a pink blouse and an old phone.");

  if (who.includes("သက်မင်း")) cont.push(n >= SLEEPLESS
    ? "Thet Min in a grey T-shirt and checked longyi at night or a white shirt by day; he has "
      + "stopped sleeping — heavy lids and deepening shadows beneath, visible blood vessels in the "
      + "whites, natural dark brown irises and normal black pupils, no glow."
    : "Thet Min in a grey T-shirt and checked longyi at night or a white shirt by day; clear white "
      + "sclera, natural dark brown irises, ordinary rested eyes.");
  if (who.includes("အန်တီ")) cont.push("The landlady in a floral blouse and dark htamein with her "
    + "document folder; an ordinary practical woman, never sinister.");
  if (DARK_SHOTS.has(s.t)) cont.push("⚠️ THE DARK IS UNDEREXPOSED, NOT DESIGNED. Do not brighten "
    + "it, do not put a silhouette in it, do not extend the space behind it.");
  if (s.l === "အခန်း") cont.push("The room keeps the geometry of the master plate: window and "
    + "table left, bed with its head against the right-hand wall, the framed print above it.");

  s.cont = cont.join(" ");
  s.style = STYLE;
});
