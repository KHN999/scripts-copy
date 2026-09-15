/**
 * မနက်ဖြန်သေမယ့်လူရဲ့ မှတ်ဉာဏ် — scene board.
 *
 *   t title · g Burmese gloss of the picture · p English prompt body
 *   u narration units (verbatim, short lines merged) · c cues · w refs · l location
 *
 * SIX RULES.
 *
 * 1. THE TWINS ARE IDENTICAL, AND THE NAMES ARE SWAPPED. The child who appears
 *    in mirrors is the adult's own face at nine years old. The last act reveals
 *    the wristbands were exchanged during emergency surgery — the man called
 *    Thet Paing is really Thet Naing, and the ghost saving him is the real Thet
 *    Paing. Every shot of either boy must therefore be the SAME CHILD FACE. If a
 *    viewer can tell them apart by looks, the ending does not land.
 *
 * 2. THE DEAD BOY IS NOT FRIGHTENING. The script says it outright: his face is
 *    not scary, it is the face of a child who is very, very tired. No pallor, no
 *    decay, no glowing eyes, nothing floating. Blood on his clothes is dark and
 *    dried and never the subject of the frame.
 *
 * 3. ⚠️ TEXT IS PERMITTED, BUT ONLY FOR CLOCKS AND COUNTDOWNS. 11:47 is the
 *    spine of this story and a viewer has to read it. Those shots name the exact
 *    string and nothing else. Everywhere else text is still banned, and phone
 *    interfaces are shape and glow.
 *
 * 4. THE RED CORD IS CONTINUITY. On Thiri's wrist for nineteen years, on his
 *    right thumb the morning after the sleepwalk, on the door of room 307, and
 *    finally moved to his wrist. It is the same cord every time: faded red,
 *    frayed, hand-knotted.
 *
 * 5. VIOLENCE IS IMPLIED, NEVER STAGED. A knife on a lap, a syringe raised, a
 *    hand at a throat pulling away. No wounds, no blood pooling, no bodies. The
 *    crash is glass and a bridge rail, not injury.
 *
 * 6. TWO MEMORY REGISTERS. The PRESENT is clean and cold — night rain, hospital
 *    fluorescents, phone light. MEMORIES AND PREVIOUS LOOPS are washed out and
 *    slightly overexposed, as if the colour has been rinsed out of them.
 */

export const CAST = [
  { name: "သက်ပိုင်", en: "Thet Paing — the narrator, late twenties",
    prompt: "A Burmese man of about twenty-eight, lean, tired, dark shirt, short hair. ⚠️ A SMALL OLD "
      + "SCAR ON HIS RIGHT THUMB. Increasingly unshaven and hollow-eyed as the film runs. ⚠️ His face "
      + "at nine years old is the face of BOTH twins — the two boys are identical." },
  { name: "သီရိ", en: "Thiri — the woman on the phone",
    prompt: "A Burmese woman of about twenty-eight, watchful and steady rather than fragile, plain "
      + "dark clothes, hair tied back. ⚠️ A FADED RED CORD, frayed and hand-knotted, worn on her LEFT "
      + "WRIST — she has had it nineteen years. It moves to his wrist in the last shot." },
  { name: "သက်နိုင်", en: "Thet Naing — the twin, nine years old",
    prompt: "A Burmese boy of nine in a hospital gown, dark dried blood on the fabric. ⚠️ HIS FACE IS "
      + "THE ADULT NARRATOR'S FACE AS A CHILD — the twins are identical and the audience must not be "
      + "able to tell them apart. ⚠️ NOT FRIGHTENING: no pallor, no decay, no glowing eyes, nothing "
      + "floating. He simply looks EXHAUSTED — the face of a child who has not slept in a very long "
      + "time. He appears in mirrors and reflections, standing normally." },
  { name: "ဦးမင်းဇော်", en: "U Min Zaw — Thiri's father",
    prompt: "A Burmese man of about sixty, well kept, a pressed shirt, calm and reasonable-looking. "
      + "⚠️ NEVER PLAYED AS A MONSTER — his composure is the frightening part. He raises his voice at "
      + "no point in the film." },
  { name: "ဒေါ်နီလာ", en: "Daw Nilar — the night nurse, 19 years ago. VOICE AND PHOTOGRAPH ONLY",
    prompt: "A Burmese woman of about forty in a 1980s-90s nurse's uniform. ⚠️ Appears only in the "
      + "washed-out memory register and in one old photograph — never in the present." },
];

export const LOCS = [
  { name: "လက်ဖက်ရည်ဆိုင်", en: "The old teashop",
    prompt: "An old Yangon teashop: low stools, marble-topped tables, a counter with kettles, a "
      + "yellowed wall clock, tiled floor. Table six sits against the far wall. A blue umbrella under "
      + "the counter." },
  { name: "အခန်း ၃၀၇", en: "Room 307, the abandoned Shwe Min clinic",
    prompt: "A derelict private clinic abandoned nineteen years: broken window glass, paint peeling "
      + "off the walls in sheets, two iron hospital beds, a wall clock stopped, a steel cabinet in "
      + "the corner. Dust over everything." },
  { name: "အဖြူရောင်ကား", en: "The white car",
    prompt: "The interior of an older white saloon at night in heavy rain: dashboard glow, wipers, "
      + "rain sheeting the windscreen, a rear bench seat. Everything wet-looking and cold." },
  { name: "သက်ပိုင်အခန်း", en: "Thet Paing's room",
    prompt: "A small rented room: a single bed, a chain looped through the door handle from the "
      + "inside, a window, one bulb. Bare and slightly neglected." },
  { name: "တံတား", en: "The old bridge",
    prompt: "An old concrete road bridge at night in rain, low railings, a river far below, a lorry's "
      + "headlights at the far end." },
];

export const STYLE =
  "Present-day Myanmar, mostly at night and mostly in rain. Two registers: THE PRESENT is clean and "
  + "cold — night rain, hospital fluorescents, dashboard glow, phone light. MEMORIES AND PREVIOUS "
  + "LOOPS are washed out and slightly overexposed, the colour rinsed out of them. Cinematic "
  + "photorealism, 35mm grain, shallow depth of field, 16:9. ⚠️ The twin boys are IDENTICAL and the "
  + "dead one is NOT frightening — no pallor, no decay, no glowing eyes; he looks exhausted, nothing "
  + "more. ⚠️ Violence is implied, never staged: no wounds, no blood pooling, no bodies anywhere. "
  + "⚠️ NO TEXT EXCEPT the clock and countdown strings a shot explicitly names — no captions, no "
  + "watermarks, no invented lettering; phone interfaces are shape and glow, never readable words.";

export const SCENES = [
  { t: "He Will Kill Someone Tomorrow", l: "အဖြူရောင်ကား", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် မနက်ဖြန်ညမှာ လူတစ်ယောက်ကို သတ်လိမ့်မယ်။ သူ မှတ်မိနေပြီးသားမို့လို့ပဲ။",
    p: "A man's face lit by dashboard glow in a parked car at night, rain sheeting the windscreen "
      + "behind him, absolutely still.",
    u: ["သက်ပိုင် မနက်ဖြန်ညမှာ လူတစ်ယောက်ကို သတ်လိမ့်မယ်။",
        "သူ ဘယ်လိုသိသလဲဆိုတော့— အဲဒီလူသတ်မှုကို သူ မှတ်မိနေပြီးသားမို့လို့ပဲ။"],
    c: [[1, "bigstinger"]] },

  { t: "A White Car in the Rain", l: "အဖြူရောင်ကား",
    g: "မိုးတွေသည်းနေတဲ့ည။ လမ်းဘေးမှာ ရပ်ထားတဲ့ အဖြူရောင်ကား။",
    p: "A white saloon parked at the kerb in heavy night rain, seen from outside, its windows fogged "
      + "and a faint shape moving inside.",
    u: ["မိုးတွေသည်းနေတဲ့ည။",
        "လမ်းဘေးမှာ ရပ်ထားတဲ့ အဖြူရောင်ကား။"] },

  { t: "A Red Cord on Her Wrist", l: "အဖြူရောင်ကား", w: ["သီရိ"],
    g: "ကားနောက်ခန်းမှာ ငိုနေတဲ့ မိန်းကလေး။ လက်ကောက်ဝတ်မှာ အနီရောင်ကြိုးတစ်ချောင်း။",
    p: "A woman crying in the back seat of a car at night, and in close focus on her left wrist a "
      + "faded red hand-knotted cord.",
    u: ["ကားနောက်ခန်းမှာ ငိုနေတဲ့ မိန်းကလေးတစ်ယောက်။",
        "သူမရဲ့လက်ကောက်ဝတ်မှာ အနီရောင်ကြိုးတစ်ချောင်း။"] },

  { t: "11:47, and the Date Is Tomorrow", l: "အဖြူရောင်ကား",
    g: "သက်ပိုင်ရဲ့လက်ထဲမှာ ဓား။ နာရီက ည ၁၁ နာရီ ၄၇ မိနစ်။ နေ့စွဲက မနက်ဖြန်။",
    p: "⚠️ TEXT PERMITTED. A car's dashboard clock in the dark reading exactly \"11:47\". A knife "
      + "lies on the seat beside it, out of focus. That numeral is the only text in the image.",
    u: ["သက်ပိုင်ရဲ့လက်ထဲမှာ သွေးစွန်းနေတဲ့ဓား။",
        "နာရီက ည ၁၁ နာရီ ၄၇ မိနစ်။ နေ့စွဲက— မနက်ဖြန်။"],
    c: [[1, "bigstinger"]] },

  { t: "You're Too Late", l: "အဖြူရောင်ကား", w: ["သီရိ"],
    g: "မိန်းကလေးက မော့ကြည့်ပြီး ပြောတယ် — “ရှင် နောက်ကျသွားပြီ…”",
    p: "A woman looking up into the camera from a car's back seat, speaking, her face wet with rain "
      + "and tears.",
    u: ["မိန်းကလေးက သူ့ကို မော့ကြည့်ပြီး နောက်ဆုံးစကားတစ်ခွန်း ပြောတယ်။",
        "“ရှင် နောက်ကျသွားပြီ…”"],
    c: [[1, "bigstinger"]] },

  { t: "4:17 in the Morning", l: "သက်ပိုင်အခန်း", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် လန့်နိုးလာတယ်။ မနက် ၄ နာရီ ၁၇ မိနစ်။ သူ့လက်မှာ သွေးမရှိဘူး။",
    p: "A man jolting awake on a bed in a dark room, both hands held up in front of his face and "
      + "entirely clean.",
    u: ["သက်ပိုင် လန့်နိုးလာတယ်။ မနက် ၄ နာရီ ၁၇ မိနစ်။",
        "သူ့လက်မှာ သွေးမရှိဘူး။"] },

  { t: "A Phone He Does Not Own", l: "သက်ပိုင်အခန်း",
    g: "ဒါပေမယ့် ညာလက်ထဲမှာ — သူမသိတဲ့ ဖုန်းတစ်လုံး ရှိနေတယ်။",
    p: "An unfamiliar phone lying in a man's open right palm in dim light, its screen lit. A small "
      + "old scar is visible on the thumb.",
    u: ["ဒါပေမယ့် ညာလက်ထဲမှာ—",
        "သူမသိတဲ့ ဖုန်းတစ်လုံး ရှိနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "43 Hours, 30 Minutes", l: null,
    g: "ဖုန်း screen ပေါ်မှာ countdown တစ်ခု ပြေးနေတယ် — ၄၃ နာရီ၊ ၃၀ မိနစ်။",
    p: "⚠️ TEXT PERMITTED. A phone screen filling frame showing a running countdown reading exactly "
      + "\"43:30\" in large digits, and one short line of Burmese beneath it. Those are the only text "
      + "in the image.",
    u: ["ဖုန်း screen ပေါ်မှာ countdown တစ်ခု ပြေးနေတယ်။ ၄၃ နာရီ၊ ၃၀ မိနစ်။",
        "အောက်မှာ စာတစ်ကြောင်း။ “၁၁:၄၇ မတိုင်ခင် သီရိကို ရှာပါ။”"],
    c: [[1, "bigstinger"]] },

  { t: "Sent Tomorrow", l: "သက်ပိုင်အခန်း",
    g: "ဖုန်းထဲမှာ voice message တစ်ခုလည်း ရှိနေတယ်။ ပို့ထားတဲ့နေ့စွဲက — မနက်ဖြန်။",
    p: "A phone screen showing a single voice message in a thread, its waveform visible, a thumb "
      + "hovering over the play control.",
    u: ["ဖုန်းထဲမှာ voice message တစ်ခုလည်း ရှိနေတယ်။",
        "ပို့ထားတဲ့နေ့စွဲက— မနက်ဖြန်။"],
    c: [[1, "bigstinger"]] },

  { t: "His Own Voice, Terrified", l: "သက်ပိုင်အခန်း", w: ["သက်ပိုင်"],
    g: "အသံက သူ့အသံပဲ။ ဒါပေမယ့် ကြောက်လန့်ပြီး အသက်ရှူမဝသလို ဖြစ်နေတယ်။",
    p: "Close on a man's face listening to a phone held to his ear, recognising his own voice and "
      + "not liking what it sounds like.",
    u: ["သက်ပိုင် play နှိပ်လိုက်တယ်။ အသံက သူ့အသံပဲ။",
        "ဒါပေမယ့် ကြောက်လန့်ပြီး အသက်ရှူမဝသလို ဖြစ်နေတယ်။"],
    c: [[1, "stinger"]] },

  { t: "Don't Trust Your Memory", l: null,
    g: "“ငါပြောတာ နားထောင်… သီရိကို ရှာ။ ဒါပေမယ့် သူ့ကိုကယ်ချင်ရင်… မင်းရဲ့မှတ်ဉာဏ်ကို မယုံနဲ့။”",
    p: "Extreme close-up of an audio waveform on a phone screen, spiking, then flat where it cuts "
      + "off.",
    u: ["“ငါပြောတာ နားထောင်…”",
        "“သီရိကို ရှာ။ ဒါပေမယ့် သူ့ကိုကယ်ချင်ရင်…”",
        "“မင်းရဲ့မှတ်ဉာဏ်ကို မယုံနဲ့။” အသံပြတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Caller: Thiri", l: null,
    g: "ပြီးတော့ ဖုန်းဝင်လာတယ်။ Caller name နေရာမှာ — သီရိ။",
    p: "A phone screen showing an incoming call, the caller name field rendered as a single "
      + "unreadable line of Burmese, the accept and decline controls glowing.",
    u: ["ပြီးတော့ ဖုန်းဝင်လာတယ်။ Caller name နေရာမှာ—",
        "သီရိ။"],
    c: [[1, "bigstinger"]] },

  { t: "You Don't Know Me, Do You", l: "သက်ပိုင်အခန်း", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် တုန်နေတဲ့လက်နဲ့ ဖုန်းကိုင်လိုက်တယ်။ “ရှင် ကျွန်မကို မသိဘူးမဟုတ်လား?”",
    p: "A man holding a phone to his ear with a visibly shaking hand, sitting on the edge of a bed "
      + "in the dark.",
    u: ["သက်ပိုင် တုန်နေတဲ့လက်နဲ့ ဖုန်းကိုင်လိုက်တယ်။",
        "တစ်ဖက်က မိန်းကလေးအသံ တိုးတိုးလေး ပြောတယ်။",
        "“ရှင် ကျွန်မကို မသိဘူးမဟုတ်လား?”"] },

  { t: "Then Why Do I Remember Killing You", l: "သက်ပိုင်အခန်း", w: ["သက်ပိုင်"],
    g: "“ဒါဆို ကျွန်မက ရှင့်ကို သတ်ခဲ့ဖူးတာ ဘာလို့မှတ်မိနေတာလဲ?”",
    p: "Extreme close-up of a man's eye, the phone light on it, the question landing.",
    u: ["သက်ပိုင် ဘာမှမဖြေနိုင်ခင် သူမက ဆက်ပြောတယ်။",
        "“ဒါဆို ကျွန်မက ရှင့်ကို သတ်ခဲ့ဖူးတာ ဘာလို့မှတ်မိနေတာလဲ?”"],
    c: [[1, "bigstinger"]] },

  { t: "Table Six", l: "လက်ဖက်ရည်ဆိုင်",
    g: "ဖုန်းက တစ်နေရာရဲ့ location ကို အလိုလိုပြတယ်။ မြို့လယ်က လက်ဖက်ရည်ဆိုင်ဟောင်း။ စားပွဲနံပါတ် ၆။",
    p: "A phone screen showing a map with a single dropped pin, held up in front of an old teashop "
      + "frontage in early light.",
    u: ["ဖုန်းက တစ်နေရာရဲ့ location ကို အလိုလိုပြတယ်။",
        "မြို့လယ်က လက်ဖက်ရည်ဆိုင်ဟောင်းတစ်ဆိုင်။ စားပွဲနံပါတ် ၆။"] },

  { t: "He Already Knows What Is Inside", l: "လက်ဖက်ရည်ဆိုင်", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် ဒီဆိုင်ကို တစ်ခါမှ မရောက်ဖူးဘူး။ ဒါပေမယ့် ဆိုင်ထဲမှာ ဘာတွေရှိမလဲ သူသိနေတယ်။",
    p: "A man stopped in a teashop doorway looking in, his expression that of someone recognising a "
      + "room he has never entered.",
    u: ["သက်ပိုင် ဒီဆိုင်ကို တစ်ခါမှ မရောက်ဖူးဘူး။",
        "ဒါပေမယ့် တံခါးဝကနေ ဝင်လိုက်တာနဲ့ ဆိုင်ထဲမှာ ဘာတွေရှိမလဲဆိုတာ သူသိနေတယ်။"],
    c: [[1, "stinger"]] },

  { t: "A Blue Umbrella, a Slow Clock", l: "လက်ဖက်ရည်ဆိုင်",
    g: "ကောင်တာအောက်မှာ အပြာရောင်ထီးတစ်ချောင်း။ နံရံကပ်နာရီက ခုနစ်မိနစ် နောက်ကျနေမယ်။",
    p: "A blue umbrella propped under a teashop counter, and above it on the wall a yellowed clock.",
    u: ["ကောင်တာအောက်မှာ အပြာရောင်ထီးတစ်ချောင်း။",
        "နံရံကပ်နာရီက ခုနစ်မိနစ် နောက်ကျနေမယ်။"] },

  { t: "Under Table Six", l: "လက်ဖက်ရည်ဆိုင်",
    g: "စားပွဲနံပါတ် ၆ ရဲ့အောက်မှာ — ဖုန်းတစ်လုံး ရှိမယ်။ သူ လက်လှမ်းပြီး ဆွဲထုတ်လိုက်တယ်။",
    p: "A hand reaching into the shadow under a marble-topped table and closing on a black phone "
      + "taped to the underside.",
    u: ["စားပွဲနံပါတ် ၆ ရဲ့အောက်မှာ— ဖုန်းတစ်လုံး ရှိမယ်။",
        "သူ လက်လှမ်းပြီး ဆွဲထုတ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Crack Across the Back", l: null, w: ["သီရိ"],
    g: "အနက်ရောင်ဖုန်း။ နောက်ကျောမှာ ထောင့်ဖြတ်အက်ရာ။ Wallpaper မှာ အနီရောင်ကြိုးပတ်ထားတဲ့ မိန်းကလေး။",
    p: "A black phone turned over in a hand: a diagonal crack across its back glass. Turned again, "
      + "its lock screen shows a photograph of a woman with a red cord on her wrist.",
    u: ["အနက်ရောင်ဖုန်း။ နောက်ကျောမှာ ထောင့်ဖြတ်အက်ရာ။",
        "Wallpaper မှာ အနီရောင်ကြိုး ပတ်ထားတဲ့ မိန်းကလေး။ သီရိ။"] },

  { t: "Video Upload Complete", l: null,
    g: "ဖုန်း lock screen ပေါ် notification တစ်ခု တက်လာတယ် — “Video upload complete.”",
    p: "⚠️ TEXT PERMITTED. A phone lock screen with one notification banner reading exactly \"Video "
      + "upload complete.\" and nothing else. That sentence is the only text in the image.",
    u: ["ဖုန်း lock screen ပေါ် notification တစ်ခု တက်လာတယ်။",
        "“Video upload complete.”"],
    c: [[1, "stinger"]] },

  { t: "The Video Is of Tomorrow", l: "အဖြူရောင်ကား", w: ["သီရိ"],
    g: "မိုးထဲမှာ ရပ်ထားတဲ့ အဖြူရောင်ကား။ ကားနောက်ခန်းမှာ သီရိ ငိုနေတယ်။",
    p: "A phone screen playing a shaky video: a white car in the rain at night, a woman crying in "
      + "the back seat, the phone held in a modern teashop with daylight around its edges.",
    u: ["သက်ပိုင် video ကို ဖွင့်လိုက်တယ်။",
        "မိုးထဲမှာ ရပ်ထားတဲ့ အဖြူရောင်ကား။ ကားနောက်ခန်းမှာ သီရိ ငိုနေတယ်။",
        "Camera ကို ကိုင်ထားသူရဲ့လက်မှာ ဓားရှိတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "11:46 Tomorrow Night", l: null,
    g: "Video ထဲက နာရီ — မနက်ဖြန်ည ၁၁:၄၆။",
    p: "⚠️ TEXT PERMITTED. A freeze-frame of the video zoomed on a dashboard clock reading exactly "
      + "\"11:46\". That numeral is the only text in the image.",
    u: ["Video ထဲက နာရီ—",
        "မနက်ဖြန်ည ၁၁:၄၆။"],
    c: [[1, "bigstinger"]] },

  { t: "If You Come For Me, You Die", l: "အဖြူရောင်ကား", w: ["သီရိ"],
    g: "သီရိက camera ကို တည့်တည့်ကြည့်ပြီး — “ဒီ video ကို မြင်ရင် ရှင်ထွက်ပြေးတော့။”",
    p: "Inside the video: a woman looking straight into the lens from a car's back seat, speaking "
      + "clearly and deliberately to whoever will watch it.",
    u: ["သီရိက camera ကို တည့်တည့်ကြည့်ပြီး ပြောတယ်။",
        "“ဒီ video ကို မြင်ရင် ရှင်ထွက်ပြေးတော့။”",
        "“ကျွန်မကို ကယ်ဖို့လာရင်… သေမယ့်သူက ရှင်ဖြစ်သွားမယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "She Is Standing Behind Him", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ", "သက်ပိုင်"],
    g: "Video ပြတ်သွားတယ်။ နောက်ကနေ ထိုင်ခုံရွှေ့သံ။ လှည့်ကြည့်လိုက်တော့ — သီရိ ရပ်နေတယ်။",
    p: "A man turning on his stool in a teashop to find a woman standing a few feet away — the same "
      + "woman as the photograph, alive, in daylight, entirely solid.",
    u: ["Video က အဲဒီနေရာမှာပဲ ပြတ်သွားတယ်။",
        "သက်ပိုင်ရဲ့နောက်ကနေ ထိုင်ခုံရွှေ့သံ ကြားလာတယ်။ သူ လှည့်ကြည့်လိုက်တော့—",
        "Wallpaper ထဲက မိန်းကလေးက သူ့ရှေ့မှာ ရပ်နေတယ်။ လက်ကောက်ဝတ်မှာ အနီရောင်ကြိုး။ သီရိ။"],
    c: [[2, "bigstinger"]] },

  { t: "In What You Remember, Who Dies", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ", "သက်ပိုင်"],
    g: "“ရှင်မှတ်မိတာထဲမှာ… သေတဲ့သူက ကျွန်မလား?” သက်ပိုင် ခေါင်းညိတ်လိုက်တယ်။",
    p: "Two people sitting opposite each other at a teashop table, neither touching their tea, the "
      + "shop busy and ordinary around them.",
    u: ["နှစ်ယောက် စကားမပြောဘဲ တစ်ယောက်ကိုတစ်ယောက် ကြည့်နေကြတယ်။ အရင်ဆုံး သီရိက မေးတယ်။",
        "“ရှင်မှတ်မိတာထဲမှာ… သေတဲ့သူက ကျွန်မလား?”",
        "သက်ပိုင် လည်ချောင်းခြောက်ခြောက်နဲ့ ခေါင်းညိတ်လိုက်တယ်။"] },

  { t: "That Doesn't Match", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ"],
    g: "သီရိ မျက်နှာ ဖြူဖျော့သွားတယ်။ “မတိုက်ဆိုင်ဘူး…”",
    p: "Close on a woman's face draining as she works something out, her hand going still on the "
      + "table.",
    u: ["သီရိ မျက်နှာ ဖြူဖျော့သွားတယ်။ “မတိုက်ဆိုင်ဘူး…”",
        "“ဘာမတိုက်ဆိုင်တာလဲ?” သီရိ သူ့မျက်လုံးကို တည့်တည့်ကြည့်တယ်။"] },

  { t: "In Mine, I Hold the Knife", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ"],
    g: "“ကျွန်မမှတ်မိတာထဲမှာ ဓားကိုင်ထားတဲ့သူက ကျွန်မ။ သေတဲ့သူက ရှင်ပဲ။”",
    p: "A woman speaking across a table, steady, and the man opposite her going rigid.",
    u: ["“ကျွန်မမှတ်မိတာထဲမှာ ဓားကိုင်ထားတဲ့သူက ကျွန်မ။”",
        "“သေတဲ့သူက ရှင်ပဲ။”"],
    c: [[1, "bigstinger"]] },

  { t: "She Knows Things Nobody Knows", l: null, w: ["သက်ပိုင်"],
    g: "သီရိက သက်ပိုင်အကြောင်း မဖြစ်နိုင်လောက်အောင် သိနေတယ်။ အသက်ကိုးနှစ်က စက်ဘီးပေါ်က လဲခဲ့တာ။",
    p: "⚠️ MEMORY REGISTER — washed out, slightly overexposed. A boy of nine sprawled beside a fallen "
      + "bicycle on a dirt lane, more startled than hurt.",
    u: ["သီရိက သက်ပိုင်အကြောင်း မဖြစ်နိုင်လောက်အောင် သိနေတယ်။",
        "သူ အသက်ကိုးနှစ်အရွယ်တုန်းက စက်ဘီးပေါ်က လဲခဲ့တာ။"] },

  { t: "Sitting in the Rain Outside the Hospital", l: null, w: ["သက်ပိုင်"],
    g: "သူ့အမေ ဆုံးသွားတဲ့နေ့မှာ ဆေးရုံအပြင်ဘက်က မိုးရေထဲ တစ်ယောက်တည်း ထိုင်ခဲ့တာ။",
    p: "⚠️ MEMORY REGISTER. A young man sitting alone on a hospital forecourt step in the rain, "
      + "soaked, not sheltering.",
    u: ["သူ့အမေ ဆုံးသွားတဲ့နေ့မှာ ဆေးရုံအပြင်ဘက်က မိုးရေထဲ တစ်ယောက်တည်း ထိုင်ခဲ့တာ။",
        "အသက်နှစ်ဆယ့်ငါးနှစ်ပြည့် မွေးနေ့မှာ ဘယ်သူမှမလာလို့ ကိတ်မီးတိုင်ကို မထွန်းဘဲ စားခဲ့တာ။"] },

  { t: "Things He Told Nobody", l: "လက်ဖက်ရည်ဆိုင်", w: ["သက်ပိုင်"],
    g: "ဘယ်သူ့ကိုမှ မပြောဖူးတဲ့အရာတွေ။ သီရိ အကုန်သိတယ်။",
    p: "Close on a man's face across a teashop table as someone recites his own life back to him.",
    u: ["ဘယ်သူ့ကိုမှ မပြောဖူးတဲ့အရာတွေ။",
        "သီရိ အကုန်သိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "And He Knows Pieces of Her", l: null, w: ["သီရိ"],
    g: "သက်ပိုင်ကလည်း သီရိအကြောင်း အပိုင်းအစတွေ သိနေတယ်။ အိပ်ရာအောက်က အပြာရောင်သေတ္တာ။",
    p: "⚠️ MEMORY REGISTER. A blue tin box pulled out from under a bed, its lid dented.",
    u: ["သက်ပိုင်ကလည်း သီရိအကြောင်း အပိုင်းအစတွေ သိနေတယ်။",
        "အိပ်ရာအောက်က အပြာရောင်သေတ္တာ။",
        "အဖေ့ဆီက လာသမျှ ဖုန်းကို မကိုင်ဘဲထားတတ်တာ။"] },

  { t: "An Unsigned Envelope", l: null,
    g: "လွန်ခဲ့တဲ့ သုံးရက်က အမည်မဖော်တဲ့စာအိတ်တစ်လုံး ရခဲ့တာ။ အထဲမှာ ဆေးရုံမှတ်တမ်းဟောင်းတစ်ရွက်။",
    p: "A plain unmarked envelope opened on a table, an old clinical record sheet and a small slip "
      + "of paper beside it. The writing is not legible.",
    u: ["လွန်ခဲ့တဲ့ သုံးရက်က အမည်မဖော်တဲ့စာအိတ်တစ်လုံး ရခဲ့တာ။",
        "စာအိတ်ထဲမှာ ဆေးရုံမှတ်တမ်းဟောင်းတစ်ရွက်နဲ့—",
        "“အခန်း ၃၀၇ ကို သွားပါ” ဆိုတဲ့စာ။"],
    c: [[2, "bigstinger"]] },

  { t: "Three Days Ago, Both of Them", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ", "သက်ပိုင်"],
    g: "“အဲဒီစာရပြီးမှ အိပ်မက်တွေ စတာလား?” “ကျွန်တော်လည်း လွန်ခဲ့တဲ့ သုံးရက်က စတာပဲ။”",
    p: "Two people at a table realising they are on the same clock, both leaning slightly in.",
    u: ["“အဲဒီစာရပြီးမှ အိပ်မက်တွေ စတာလား?” သီရိ ခေါင်းညိတ်တယ်။ “ရှင်ရော?”",
        "သက်ပိုင်က ပြောတယ်။ “ကျွန်တော်လည်း လွန်ခဲ့တဲ့ သုံးရက်က စတာပဲ။”",
        "နှစ်ယောက်လုံး တိတ်သွားကြတယ်။"] },

  { t: "A Memory Forces Its Way In", l: "အဖြူရောင်ကား", w: ["သက်ပိုင်"],
    g: "အဖြူရောင်ကားရဲ့ ယာဉ်မောင်းခုံ။ သူ့လက်ထဲမှာ ဓား။ ညာလက်မပေါ်မှာ အမာရွတ်။",
    p: "⚠️ MEMORY REGISTER. A driver's seat at night, a knife held low against a thigh, and the "
      + "small old scar on the right thumb clearly visible on the hand holding it.",
    u: ["အဲဒီအချိန် သက်ပိုင်ခေါင်းထဲကို မှတ်ဉာဏ်တစ်ခု ထိုးဝင်လာတယ်။",
        "အဖြူရောင်ကားရဲ့ ယာဉ်မောင်းခုံ။ သူ့လက်ထဲမှာ ဓား။ ညာလက်မပေါ်မှာ အမာရွတ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Child's Eyes in the Mirror", l: "အဖြူရောင်ကား", w: ["သက်နိုင်"],
    g: "နောက်ကြည့်မှန်ထဲမှာ လူသတ်သမားရဲ့မျက်နှာ — သူ့မျက်နှာ။ ဒါပေမယ့် အနောက်မှာ ကလေးတစ်ယောက်။",
    p: "⚠️ MEMORY REGISTER. A rear-view mirror showing the driver's own eyes — and behind them, "
      + "further back in the car, a nine-year-old boy with THE SAME FACE, looking straight ahead.",
    u: ["နောက်ကြည့်မှန်ထဲမှာ လူသတ်သမားရဲ့မျက်နှာ။ သူ့မျက်နှာ။",
        "ဒါပေမယ့် ဒီတစ်ခါ နောက်ကြည့်မှန်ရဲ့အနောက်မှာ—",
        "တခြားလူတစ်ယောက်ရဲ့ မျက်လုံးကို သက်ပိုင် မြင်လိုက်တယ်။ ကလေးတစ်ယောက်။ သူနဲ့ မျက်နှာတူတဲ့ကလေး။"],
    c: [[2, "bigstinger"]] },

  { t: "Go to 307", l: null, w: ["သက်နိုင်"],
    g: "ကလေးက နှုတ်ခမ်းလှုပ်ပြီး — “၃၀၇ ကိုသွား… သူမ မသေခင်သွား…”",
    p: "⚠️ MEMORY REGISTER. Extreme close-up of the boy's mouth forming words in the mirror, his face "
      + "tired rather than frightening.",
    u: ["ကလေးက နှုတ်ခမ်းလှုပ်ပြီး စကားတစ်ခွန်း ပြောတယ်။",
        "“၃၀၇ ကိုသွား…”",
        "“သူမ မသေခင်သွား…”"],
    c: [[2, "bigstinger"]] },

  { t: "His Hands Are on Her Throat", l: "လက်ဖက်ရည်ဆိုင်", w: ["သက်ပိုင်", "သီရိ"],
    g: "သတိပြန်ဝင်လာတော့ — သူ့လက်နှစ်ဖက်က သီရိရဲ့လည်ပင်းပေါ် ရောက်နေတယ်။",
    p: "A man's two hands at a woman's throat across a teashop table, his own face horrified at what "
      + "his arms are doing. ⚠️ No marks, no injury — the horror is that he did not decide to do it.",
    u: ["သက်ပိုင် သတိပြန်ဝင်လာတော့—",
        "သူ့လက်နှစ်ဖက်က သီရိရဲ့လည်ပင်းပေါ် ရောက်နေတယ်။",
        "သီရိ မျက်နှာနီလာပြီး အသက်ရှူမရတော့ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "I Didn't Do That", l: "လက်ဖက်ရည်ဆိုင်", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် ချက်ချင်းလက်လွှတ်လိုက်တယ်။ သူ့လက်ကိုသူ ကြောက်လန့်တကြား ကြည့်တယ်။",
    p: "A man backed against a wall staring at his own two open hands as if they belong to someone "
      + "else.",
    u: ["သက်ပိုင် ချက်ချင်းလက်လွှတ်လိုက်တယ်။",
        "စားပွဲနောက်ကို ဆုတ်ပြီး သူ့လက်ကိုသူ ကြောက်လန့်တကြား ကြည့်တယ်။ “ကျွန်တော် မလုပ်တာ…”"],
    c: [[1, "stinger"]] },

  { t: "I Heard You Shouting to Let Go", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ"],
    g: "“ရှင့်လက်က ကျွန်မလည်ပင်းကို ညှစ်နေတုန်း—ရှင်က ကျွန်မကို လွှတ်ပေးဖို့ အော်နေတာ ကြားလို့ပဲ။”",
    p: "A woman coughing and crying at a table, telling a man something he cannot account for.",
    u: ["သီရိ ချောင်းဆိုးရင်း မျက်ရည်တွေနဲ့ ပြောတယ်။ “သိတယ်…” “ဘယ်လိုသိတာလဲ?”",
        "“ရှင့်လက်က ကျွန်မလည်ပင်းကို ညှစ်နေတုန်း—ရှင်က ကျွန်မကို လွှတ်ပေးဖို့ အော်နေတာ ကြားလို့ပဲ။”"],
    c: [[1, "bigstinger"]] },

  { t: "She Heard the Voice Inside Him", l: "လက်ဖက်ရည်ဆိုင်",
    g: "သက်ပိုင်က ဘာအသံမှ မထွက်ခဲ့ဘူး။ ဒါပေမယ့် သီရိက သူ့စိတ်ထဲကအသံကို ကြားခဲ့တယ်။",
    p: "Two faces very close across a table, neither speaking, something passing between them that "
      + "is not sound.",
    u: ["သက်ပိုင်က ဘာအသံမှ မထွက်ခဲ့ဘူး။ ဒါပေမယ့် သီရိက—",
        "သူ့စိတ်ထဲကအသံကို ကြားခဲ့တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Locks Himself In", l: "သက်ပိုင်အခန်း", w: ["သက်ပိုင်"],
    g: "မနက်ဖြန်ညအထိ သူ့ကိုယ်သူ အခန်းထဲ ပိတ်ထားမယ်။ တံခါးကို အတွင်းက သံကြိုးနဲ့ချည်တယ်။",
    p: "A man looping a steel chain through a door handle from the inside and padlocking it, the "
      + "room bare behind him.",
    u: ["သက်ပိုင် ဆုံးဖြတ်ချက်ချလိုက်တယ်။ မနက်ဖြန်ညအထိ သူ့ကိုယ်သူ အခန်းထဲ ပိတ်ထားမယ်။",
        "တံခါးကို အတွင်းက သံကြိုးနဲ့ချည်တယ်။ ကားသော့ကို အိမ်နီးချင်းဆီ အပ်တယ်။",
        "အိမ်ထဲက ဓားအားလုံးကို အပြင်ထုတ်ပစ်တယ်။"] },

  { t: "Don't Come Near Me", l: "သက်ပိုင်အခန်း",
    g: "သီရိကို message ပို့တယ် — “ကျွန်တော့်နား မလာနဲ့။ ကျွန်တော် မဆက်သွယ်ရင်လည်း မရှာနဲ့။”",
    p: "A phone on a bed with a short outgoing message bubble on it, shown as shape rather than "
      + "readable text.",
    u: ["သီရိကို message ပို့တယ်။",
        "“ကျွန်တော့်နား မလာနဲ့။ ကျွန်တော် မဆက်သွယ်ရင်လည်း မရှာနဲ့။”",
        "ည ၁၂ နာရီ ၄၃ မိနစ်။ သက်ပိုင် အိပ်ရာပေါ်မှာ ဆေးသောက်ပြီး အိပ်ပျော်သွားတယ်။"] },

  { t: "Mud on His Feet", l: "သက်ပိုင်အခန်း", w: ["သက်ပိုင်"],
    g: "မနက် ၂ နာရီ ၁၁ မိနစ်။ သူ့ခြေထောက်မှာ ရွှံ့တွေ ကပ်နေတယ်။ အင်္ကျီစိုနေတယ်။",
    p: "A man sitting up on a bed with wet mud dried on both bare feet and his shirt soaked through, "
      + "the chained door still chained behind him.",
    u: ["နောက်တစ်ကြိမ် မျက်လုံးဖွင့်လိုက်တော့— မနက် ၂ နာရီ ၁၁ မိနစ်။",
        "သူ့ခြေထောက်မှာ ရွှံ့တွေ ကပ်နေတယ်။ အင်္ကျီစိုနေတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Red Cord on His Thumb", l: "သက်ပိုင်အခန်း",
    g: "ညာလက်မပေါ်မှာ အနီရောင်ကြိုး ပတ်ထားတယ်။ အိပ်ရာဘေးမှာ အဖြူရောင်ကားတစ်စီးရဲ့ သော့။",
    p: "Close on a man's right thumb with the faded red cord wound around it, and on the sheet "
      + "beside his hand a car key.",
    u: ["ညာလက်မပေါ်မှာ အနီရောင်ကြိုး ပတ်ထားတယ်။",
        "ပြီးတော့ သူ့အိပ်ရာဘေးမှာ—",
        "အဖြူရောင်ကားတစ်စီးရဲ့ သော့ ရှိနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Chain Never Broke", l: "သက်ပိုင်အခန်း",
    g: "CCTV မှာ ည ၁၂ နာရီ ၄၉ မိနစ်မှာ တံခါးပွင့်လာတယ်။ ဒါပေမယ့် သံကြိုးက မပြတ်ဘူး။",
    p: "A CCTV still of a doorway with the chain still intact and taut across it, and a man already "
      + "standing on the outside of the closed door.",
    u: ["သက်ပိုင် အိမ်ရှေ့ CCTV ကို ပြန်ကြည့်တယ်။",
        "ည ၁၂ နာရီ ၄၉ မိနစ်မှာ တံခါးပွင့်လာတယ်။ သူကိုယ်တိုင် အခန်းထဲက ထွက်လာတယ်။",
        "ဒါပေမယ့် သူချည်ထားတဲ့ သံကြိုးက မပြတ်ဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "He Came Through the Door Like Smoke", l: "သက်ပိုင်အခန်း",
    g: "တံခါးကို ဖြတ်ပြီး — သူ့ခန္ဓာကိုယ်က မီးခိုးတစ်ခုလို ထွက်လာတာ။",
    p: "A CCTV frame of a man's shape passing THROUGH a closed door, his body indistinct at the edges "
      + "like smoke while the door stays shut.",
    u: ["တံခါးကို ဖြတ်ပြီး—",
        "သူ့ခန္ဓာကိုယ်က မီးခိုးတစ်ခုလို ထွက်လာတာ။"],
    c: [[1, "bigstinger"]] },

  { t: "He Smiled at the Camera", l: "သက်ပိုင်အခန်း", w: ["သက်ပိုင်"],
    g: "CCTV camera အောက်ရောက်တော့ ရပ်တယ်။ မော့ကြည့်တယ်။ ပြုံးတယ်။",
    p: "A CCTV frame looking down at a man who has stopped directly beneath the lens and tipped his "
      + "face up into it, smiling — an expression that does not belong to him.",
    u: ["CCTV camera အောက်ရောက်တော့ သူ ရပ်တယ်။ Camera ကို မော့ကြည့်တယ်။ ပြုံးတယ်။",
        "ပြီးတော့ ကလေးတစ်ယောက်ရဲ့အသံနဲ့ ပြောတယ်။",
        "“၃၀၇။ အချိန်မရှိတော့ဘူး။” Video ပြတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Shwe Min Clinic", l: "သက်ပိုင်အခန်း", w: ["သီရိ"],
    g: "“ကျွန်မ အခန်း ၃၀၇ ကို သိပြီ။” “လွန်ခဲ့တဲ့ ဆယ့်ကိုးနှစ်က ပိတ်သွားတဲ့ ရွှေမင်းဆေးခန်း။”",
    p: "A man on a phone in a dim room, listening, already reaching for a jacket.",
    u: ["အဲဒီအချိန် သီရိဆီက ဖုန်းဝင်လာတယ်။ “သက်ပိုင်… ကျွန်မ အခန်း ၃၀၇ ကို သိပြီ။”",
        "“ဘယ်မှာလဲ?” “လွန်ခဲ့တဲ့ ဆယ့်ကိုးနှစ်က ပိတ်သွားတဲ့ ရွှေမင်းဆေးခန်း။”"] },

  { t: "We Were Both There, Aged Nine", l: null,
    g: "“ရှင်နဲ့ကျွန်မ အသက်ကိုးနှစ်တုန်းက တစ်ညတည်း အဲဒီဆေးခန်းမှာ ရှိခဲ့ဖူးတယ်။”",
    p: "Close on a man's face as he takes in a sentence that rearranges his childhood.",
    u: ["သူမ အသံကို နှိမ့်ပြီး ဆက်ပြောတယ်။",
        "“ရှင်နဲ့ကျွန်မ အသက်ကိုးနှစ်တုန်းက တစ်ညတည်း အဲဒီဆေးခန်းမှာ ရှိခဲ့ဖူးတယ်။”"],
    c: [[1, "bigstinger"]] },

  { t: "Three Months Missing", l: null, w: ["သက်ပိုင်"],
    g: "အသက်ကိုးနှစ်အရွယ်က သူ့ဘဝထဲမှာ — သုံးလစာ မှတ်ဉာဏ် ပျောက်နေတယ်။",
    p: "⚠️ MEMORY REGISTER. A child's school notebook or photo album with a run of pages simply "
      + "blank — a gap where a season should be.",
    u: ["သက်ပိုင်ရဲ့ရင်ဘတ်ထဲ အေးခဲသွားတယ်။",
        "အသက်ကိုးနှစ်အရွယ်က သူ့ဘဝထဲမှာ—",
        "သုံးလစာ မှတ်ဉာဏ် ပျောက်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Abandoned Nineteen Years", l: "အခန်း ၃၀၇",
    g: "ရွှေမင်းဆေးခန်းက မြို့အစွန်မှာ ပစ်ထားခံရတဲ့ အဆောက်အအုံဟောင်း။ ပြတင်းပေါက်မှန်တွေ ကွဲနေတယ်။",
    p: "A derelict private clinic on the edge of a town at night: broken windows, paint peeling off "
      + "the walls in sheets, weeds through the forecourt.",
    u: ["ရွှေမင်းဆေးခန်းက မြို့အစွန်မှာ နှစ်ပေါင်းများစွာ ပစ်ထားခံရတဲ့ အဆောက်အအုံဟောင်း။",
        "ပြတင်းပေါက်မှန်တွေ ကွဲနေတယ်။ နံရံပေါ်က ဆေးရောင်တွေ အခွံလိုကွာကျနေတယ်။"] },

  { t: "A Fresh Cord on an Old Door", l: "အခန်း ၃၀၇",
    g: "ဒါပေမယ့် အခန်း ၃၀၇ တံခါးပေါ်မှာတော့ — မနေ့ကမှ ဆွဲထားသလို အနီရောင်ကြိုးတစ်ချောင်း ချည်ထားတယ်။",
    p: "A filthy clinic door with a number plate, and knotted around its handle a red cord that is "
      + "clean and new against nineteen years of dust.",
    u: ["ဒါပေမယ့် အခန်း ၃၀၇ တံခါးပေါ်မှာတော့—",
        "မနေ့ကမှ ဆွဲထားသလို အနီရောင်ကြိုးတစ်ချောင်း ချည်ထားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Two Beds", l: "အခန်း ၃၀၇", w: ["သီရိ", "သက်နိုင်"],
    g: "သီရိ တံခါးလက်ကိုင်ကို ထိလိုက်တာနဲ့ မှတ်ဉာဏ်တစ်ခု ဝင်လာတယ်။ ဆေးရုံကုတင်နှစ်လုံး။",
    p: "⚠️ MEMORY REGISTER. Two iron hospital beds side by side in a lit ward nineteen years ago: a "
      + "girl of nine on one, a boy of nine on the other.",
    u: ["သီရိ တံခါးလက်ကိုင်ကို ထိလိုက်တာနဲ့ မှတ်ဉာဏ်တစ်ခု ဝင်လာတယ်။",
        "ဆေးရုံကုတင်နှစ်လုံး။",
        "ကုတင်တစ်လုံးပေါ်မှာ ကလေးဘဝက သီရိ။ နောက်တစ်လုံးပေါ်မှာ သက်ပိုင်နဲ့ မျက်နှာတူတဲ့ကလေး။"],
    c: [[2, "bigstinger"]] },

  { t: "When the Hand Goes Round Once", l: null, w: ["သက်နိုင်"],
    g: "ကလေးက သီရိရဲ့လက်မှာ အနီရောင်ကြိုးကို ချည်ပေးပြီး — “နာရီလက်တံ တစ်ပတ်ပြည့်ရင် အကုန်ပြန်ကောင်းသွားမယ်။”",
    p: "⚠️ MEMORY REGISTER. A boy of nine tying a red cord around a girl's wrist between two hospital "
      + "beds, both of them small and calm.",
    u: ["ကလေးက သီရိရဲ့လက်မှာ အနီရောင်ကြိုးကို ချည်ပေးပြီး ပြောတယ်။",
        "“မငိုနဲ့။ နာရီလက်တံ တစ်ပတ်ပြည့်ရင် အကုန်ပြန်ကောင်းသွားမယ်။”"],
    c: [[1, "bigstinger"]] },

  { t: "11:46, Nineteen Years Ago", l: null,
    g: "နံရံက နာရီ — ၁၁:၄၆။ တစ်မိနစ်အကြာမှာ ကလေးရဲ့ monitor သံ ရပ်သွားတယ်။",
    p: "⚠️ MEMORY REGISTER, TEXT PERMITTED. A ward wall clock reading exactly \"11:46\". That numeral "
      + "is the only text in the image.",
    u: ["နံရံက နာရီ—",
        "၁၁:၄၆။",
        "တစ်မိနစ်အကြာမှာ ကလေးရဲ့ monitor သံ ရပ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Who Was That Child", l: "အခန်း ၃၀၇", w: ["သီရိ", "သက်ပိုင်"],
    g: "သီရိ ဒူးထောက်ကျသွားတယ်။ “ဒီကလေး… ဘယ်သူလဲ?” သက်ပိုင် မဖြေနိုင်ဘူး။",
    p: "A woman dropping to her knees on a dusty clinic floor, a man standing over her with no "
      + "answer.",
    u: ["သီရိ ဒူးထောက်ကျသွားတယ်။ “ဒီကလေး… ဘယ်သူလဲ?”",
        "သက်ပိုင် မဖြေနိုင်ဘူး။"] },

  { t: "A Steel Cabinet in the Corner", l: "အခန်း ၃၀၇",
    g: "အခန်းထောင့်မှာ သံသေတ္တာတစ်လုံး။ အထဲမှာ လူနာမှတ်တမ်း၊ ဓာတ်ပုံနဲ့ cassette tape တစ်ချပ်။",
    p: "A dented steel cabinet opened in the corner of a derelict room, a torchlight beam inside it "
      + "on a folder, a photograph and an audio cassette.",
    u: ["အခန်းထောင့်မှာ သံသေတ္တာတစ်လုံး ရှိနေတယ်။",
        "အထဲမှာ လူနာမှတ်တမ်း၊ ဓာတ်ပုံနဲ့ cassette tape တစ်ချပ်။"],
    c: [[1, "stinger"]] },

  { t: "Twin Brothers, Aged Nine", l: null, w: ["သက်နိုင်"],
    g: "ဓာတ်ပုံထဲမှာ သက်ပိုင်နဲ့ မျက်နှာတူတဲ့ ကလေးနှစ်ယောက်။ နောက်ကျောမှာ စာရေးထားတယ်။",
    p: "An old photograph held under torchlight: TWO IDENTICAL BOYS of nine standing side by side, "
      + "indistinguishable from one another.",
    u: ["ဓာတ်ပုံထဲမှာ သက်ပိုင်နဲ့ မျက်နှာတူတဲ့ ကလေးနှစ်ယောက်။",
        "နောက်ကျောမှာ စာရေးထားတယ်။",
        "“သက်ပိုင်နှင့် သက်နိုင် — အမွှာညီအစ်ကို၊ အသက် ၉ နှစ်”"],
    c: [[2, "bigstinger"]] },

  { t: "He Never Knew He Had a Twin", l: "အခန်း ၃၀၇", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် လက်တွေ တုန်လာတယ်။ သူ့မှာ အမွှာရှိခဲ့ဖူးတာ သူ လုံးဝမမှတ်မိဘူး။",
    p: "Close on a man's hands shaking as they hold an old photograph, torchlight across it.",
    u: ["သက်ပိုင် လက်တွေ တုန်လာတယ်။",
        "သူ့မှာ အမွှာရှိခဲ့ဖူးတာ သူ လုံးဝမမှတ်မိဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "The Nurse's Tape", l: "အခန်း ၃၀၇", w: ["ဒေါ်နီလာ"],
    g: "Cassette ကို recorder မှာ ထည့်လိုက်တယ်။ တာဝန်ကျသူနာပြု ဒေါ်နီလာရဲ့အသံ။",
    p: "An old cassette recorder on a dusty floor with the tape turning, torchlight on its reels.",
    u: ["Cassette ကို အခန်းဟောင်းထဲက recorder မှာ ထည့်လိုက်တယ်။ အသံတစ်သံ ထွက်လာတယ်။",
        "အဲဒီတုန်းက တာဝန်ကျသူနာပြု ဒေါ်နီလာရဲ့အသံ။",
        "“ဒီအသံဖိုင်ကို တစ်ယောက်ယောက်ကြားရင် အမှန်ကို သိထားပေးပါ…”"],
    c: [[2, "stinger"]] },

  { t: "Three Children Came In", l: null, w: ["ဒေါ်နီလာ"],
    g: "“ဒီည ကားမတော်တဆမှုနဲ့ ကလေးသုံးယောက် ရောက်လာတယ်။ သက်ပိုင်၊ သက်နိုင်နဲ့ သီရိ…”",
    p: "⚠️ MEMORY REGISTER. A clinic corridor at night nineteen years ago, a nurse hurrying beside a "
      + "trolley, rain blown in through open doors behind her.",
    u: ["“ဒီည ကားမတော်တဆမှုနဲ့ ကလေးသုံးယောက် ရောက်လာတယ်။”",
        "“သက်ပိုင်၊ သက်နိုင်နဲ့ သီရိ…”"],
    c: [[1, "bigstinger"]] },

  { t: "Only One Place in the Ambulance", l: null, w: ["ဦးမင်းဇော်"],
    g: "“လူနာတင်ကားမှာ နေရာတစ်ခုပဲ ကျန်တယ်။ သက်နိုင်က အသက်ရှင်နေသေးတယ်။ ဒါပေမယ့် ဦးမင်းဇော်က သူ့သမီးကို အရင်တင်ခိုင်းခဲ့တယ်။”",
    p: "⚠️ MEMORY REGISTER. An ambulance's open rear doors in rain with one empty stretcher space, a "
      + "man's arm directing which child goes in.",
    u: ["“လူနာတင်ကားမှာ နေရာတစ်ခုပဲ ကျန်တယ်။ သက်နိုင်က အသက်ရှင်နေသေးတယ်။ ဒါပေမယ့် ဦးမင်းဇော်က သူ့သမီး သီရိကို အရင်တင်ခိုင်းခဲ့တယ်။”",
        "သီရိရဲ့မျက်နှာ ပြောင်းသွားတယ်။ ဦးမင်းဇော်က— သူမအဖေ။"],
    c: [[1, "bigstinger"]] },

  { t: "He Was Driving the Car", l: null, w: ["ဦးမင်းဇော်"],
    g: "“မတော်တဆမှု ဖြစ်စေတဲ့ အဖြူရောင်ကားကို မောင်းခဲ့သူလည်း ဦးမင်းဇော်ပဲ။ သူ အရက်မူးနေတယ်။”",
    p: "⚠️ MEMORY REGISTER. A white car stopped askew on a wet road at night with its headlights on "
      + "and a driver's door standing open. No casualties in frame.",
    u: ["Tape ထဲက အသံ ဆက်ပြောတယ်။",
        "“မတော်တဆမှု ဖြစ်စေတဲ့ အဖြူရောင်ကားကို မောင်းခဲ့သူလည်း ဦးမင်းဇော်ပဲ။ သူ အရက်မူးနေတယ်။”",
        "“ဆေးရုံမှတ်တမ်းကို သူဖျက်ခိုင်းတယ်။ ကလေးတစ်ယောက်ရဲ့ အသက်နဲ့ သူ့အပြစ်ကို လဲခဲ့တယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "How Did You Get In Here", l: null, w: ["ဒေါ်နီလာ"],
    g: "Tape ထဲမှာ တံခါးပွင့်သံ။ ဒေါ်နီလာ ကြောက်လန့်တကြား — “ရှင် ဒီကို ဘယ်လို—” အသံဖိုင် ပြတ်သွားတယ်။",
    p: "Extreme close-up of the cassette reels turning, then stopping dead, the tape slack.",
    u: ["Tape ထဲမှာ တံခါးပွင့်သံ ကြားရတယ်။ ဒေါ်နီလာ ကြောက်လန့်တကြား ပြောတယ်။",
        "“ရှင် ဒီကို ဘယ်လို—”",
        "အသံဖိုင် ပြတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Caller: Father", l: "အခန်း ၃၀၇", w: ["သီရိ"],
    g: "တိတ်ဆိတ်သွားတဲ့အခန်းထဲမှာ သီရိရဲ့ဖုန်း မြည်လာတယ်။ Screen ပေါ်က caller — အဖေ။",
    p: "A phone lighting up in a dark derelict room, its glow on a woman's face, the caller name "
      + "shown as one short unreadable line.",
    u: ["တိတ်ဆိတ်သွားတဲ့အခန်းထဲမှာ သီရိရဲ့ဖုန်း မြည်လာတယ်။",
        "Screen ပေါ်က caller— အဖေ။"],
    c: [[1, "bigstinger"]] },

  { t: "Come Out of Room 307", l: "အခန်း ၃၀၇", w: ["သီရိ"],
    g: "ဦးမင်းဇော်ရဲ့အသံက ပုံမှန်အတိုင်း အေးအေးဆေးဆေးပဲ။ “အခန်း ၃၀၇ ထဲက ထွက်လာခဲ့။”",
    p: "A woman with a phone to her ear in a dark room, her eyes going wide at how calm the voice "
      + "is.",
    u: ["သူမ ဖုန်းကိုင်လိုက်တယ်။ ဦးမင်းဇော်ရဲ့အသံက ပုံမှန်အတိုင်း အေးအေးဆေးဆေးပဲ။",
        "“သမီး…” “အခန်း ၃၀၇ ထဲက ထွက်လာခဲ့။”",
        "သီရိရဲ့မျက်လုံးတွေ ပြူးသွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "You'll Die at 11:47", l: "အခန်း ၃၀၇",
    g: "“သူ့ကို ယုံမယ်ဆိုရင်… ဒီည ၁၁:၄၇ မှာ သမီး သေလိမ့်မယ်။” ဖုန်းပြတ်သွားတယ်။",
    p: "A phone screen going dark as a call ends, held in a hand that has stopped moving.",
    u: ["အဖေက ဆက်ပြောတယ်။",
        "“သူ့ကို ယုံမယ်ဆိုရင်… ဒီည ၁၁:၄၇ မှာ သမီး သေလိမ့်မယ်။”",
        "ဖုန်းပြတ်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Third Person Knows", l: "အခန်း ၃၀၇", w: ["သီရိ", "သက်ပိုင်"],
    g: "သူတို့နှစ်ယောက်ပဲ သိနေတယ်လို့ ထင်ခဲ့တာ။ ဒါပေမယ့် — တတိယတစ်ယောက်ကလည်း သိနေတယ်။",
    p: "Two people looking at each other in a dark derelict room by torchlight, the same realisation "
      + "arriving on both faces.",
    u: ["သက်ပိုင်နဲ့ သီရိ တစ်ယောက်ကိုတစ်ယောက် ကြည့်မိကြတယ်။",
        "သူတို့နှစ်ယောက်ပဲ မဖြစ်သေးတဲ့လူသတ်မှုကို သိနေတယ်လို့ ထင်ခဲ့တာ။ ဒါပေမယ့်—",
        "တတိယတစ်ယောက်ကလည်း ဘာဖြစ်လာမလဲဆိုတာ သိနေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Lights Die", l: "အခန်း ၃၀၇",
    g: "အခန်းထဲက မီးအားလုံး တစ်ပြိုင်နက်ပျက်သွားတယ်။",
    p: "A derelict room dropping to total darkness except for one torch beam and the faint blue of a "
      + "phone.",
    u: ["အခန်းထဲက မီးအားလုံး တစ်ပြိုင်နက်ပျက်သွားတယ်။"],
    c: [[0, "bigstinger"]] },

  { t: "A Boy in the Broken Mirror", l: "အခန်း ၃၀၇", w: ["သက်နိုင်"],
    g: "မှန်ကွဲတစ်ချပ်ထဲမှာ ကလေးတစ်ယောက် ပေါ်လာတယ်။ ဓာတ်ပုံထဲက အမွှာကလေး။ သက်နိုင်။",
    p: "A cracked wall mirror in a dark room, and standing in the reflection a nine-year-old boy in "
      + "a hospital gown. ⚠️ He is lit normally and stands normally — not floating, not pale.",
    u: ["မှန်ကွဲတစ်ချပ်ထဲမှာ ကလေးတစ်ယောက် ပေါ်လာတယ်။",
        "ဓာတ်ပုံထဲက အမွှာကလေး။ သက်နိုင်။"],
    c: [[1, "bigstinger"]] },

  { t: "Not Frightening — Tired", l: null, w: ["သက်နိုင်"],
    g: "သူ့အဝတ်မှာ သွေးတွေ စိုနေတယ်။ ဒါပေမယ့် သူ့မျက်နှာက ကြောက်စရာမကောင်းဘူး။ အရမ်းပင်ပန်းနေတဲ့ ကလေးတစ်ယောက်ရဲ့မျက်နှာ။",
    p: "⚠️ Close on the boy's face in the mirror: dark dried blood on his gown, but the face itself "
      + "is simply EXHAUSTED — hollow-eyed, patient, a child who has not slept in nineteen years. No "
      + "pallor, no decay, nothing frightening.",
    u: ["သူ့အဝတ်အစားမှာ သွေးတွေ စိုနေတယ်။",
        "ဒါပေမယ့် သူ့မျက်နှာက ကြောက်စရာမကောင်းဘူး။",
        "အရမ်းပင်ပန်းနေတဲ့ ကလေးတစ်ယောက်ရဲ့မျက်နှာ။"],
    c: [[2, "bigstinger"]] },

  { t: "I Never Controlled You", l: "အခန်း ၃၀၇", w: ["သက်ပိုင်", "သက်နိုင်"],
    g: "“မင်းက သီရိကို သတ်ဖို့ ငါ့ခန္ဓာကိုယ်ကို သုံးနေတာလား?” ကလေးက ခေါင်းခါတယ်။",
    p: "A man shouting at a mirror in a dark room, and in the reflection a boy shaking his head, "
      + "calm.",
    u: ["“မင်းက သီရိကို သတ်ဖို့ ငါ့ခန္ဓာကိုယ်ကို သုံးနေတာလား?” လို့ သက်ပိုင် အော်မေးတယ်။",
        "ကလေးက ခေါင်းခါတယ်။ “ငါ မင်းကို တစ်ခါမှ မထိန်းခဲ့ဘူး။”",
        "“CCTV ထဲကလူက ဘယ်သူလဲ?” “မင်းပဲ။ အရင်အကြိမ်က မင်းရဲ့မှတ်ဉာဏ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "A Palm Against the Glass", l: "အခန်း ၃၀၇", w: ["သက်နိုင်"],
    g: "သက်နိုင်က မှန်ထဲကနေ လက်ဖဝါးကို ကပ်လိုက်တယ်။",
    p: "A boy's small open palm pressed flat against the inside of a cracked mirror, from the "
      + "reflection's side.",
    u: ["သက်ပိုင် နားမလည်နိုင်ဘူး။",
        "သက်နိုင်က မှန်ထဲကနေ လက်ဖဝါးကို ကပ်လိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The First Loop", l: null, w: ["သီရိ", "ဦးမင်းဇော်"],
    g: "ပထမအကြိမ် — ဦးမင်းဇော်က သီရိကိုခေါ်သွားပြီး သက်ပိုင်ကို လူသတ်မှုနဲ့ အပြစ်ပုံချတယ်။",
    p: "⚠️ MEMORY REGISTER. A man leading a woman away by the arm down a wet street at night, seen "
      + "from behind, another man arriving too late at the edge of frame.",
    u: ["အဲဒီခဏမှာ သက်ပိုင်နဲ့ သီရိ နှစ်ယောက်လုံးရဲ့ခေါင်းထဲ မှတ်ဉာဏ်တွေ ပေါက်ကွဲဝင်လာတယ်။",
        "ပထမအကြိမ်—",
        "ဦးမင်းဇော်က သီရိကိုခေါ်သွားပြီး သက်ပိုင်ကို လူသတ်မှုနဲ့ အပြစ်ပုံချတယ်။",
        "သက်ပိုင် ကယ်ဖို့ရောက်လာချိန်မှာ သီရိ သေသွားတယ်။ နာရီ ၁၁:၄၇။ အချိန်ပြန်စတယ်။"],
    c: [[3, "bigstinger"]] },

  { t: "The Second Loop", l: null,
    g: "ဒုတိယအကြိမ် — သက်ပိုင် ကားကို မောင်းပြေးတယ်။ Brake ပျက်နေတယ်။ ကားချောက်ထဲကျတယ်။",
    p: "⚠️ MEMORY REGISTER. A white car leaving a road at speed at night, headlights swinging out "
      + "over a drop. Shown from far off — no impact, no casualties in frame.",
    u: ["ဒုတိယအကြိမ်—",
        "သက်ပိုင် အဖြူရောင်ကားကို မောင်းပြေးတယ်။ Brake ပျက်နေတယ်။",
        "ကားချောက်ထဲကျပြီး နှစ်ယောက်လုံး သေတယ်။ နာရီ ၁၁:၄၇။ အချိန်ပြန်စတယ်။"],
    c: [[2, "stinger"]] },

  { t: "The Third Loop", l: null, w: ["ဦးမင်းဇော်"],
    g: "တတိယအကြိမ် — ဦးမင်းဇော်က သက်ပိုင်ကို ဆေးထိုးပြီး မူးဝေအောင်လုပ်တယ်။",
    p: "⚠️ MEMORY REGISTER. A syringe emptied into a man's neck from behind while he is held upright. "
      + "No wound shown.",
    u: ["တတိယအကြိမ်—",
        "ဦးမင်းဇော်က သက်ပိုင်ကို ဆေးထိုးပြီး မူးဝေအောင်လုပ်တယ်။",
        "သက်ပိုင်က မိမိဘာလုပ်နေမှန်းမသိဘဲ သီရိကို ဓားနဲ့ထိုးမိတယ်။ နာရီ ၁၁:၄၇။ အချိန်ပြန်စတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Every Road Ends the Same", l: null, w: ["ဦးမင်းဇော်"],
    g: "ရဲစခန်းကိုသွားတယ်။ မြို့က ထွက်ပြေးတယ်။ ဒါပေမယ့် လမ်းတိုင်းရဲ့အဆုံးမှာ ဦးမင်းဇော် ရောက်လာတယ်။",
    p: "⚠️ MEMORY REGISTER. A montage composition: a police station counter, a bus window at night, a "
      + "distant town — and in each, the same calm man standing somewhere in the frame.",
    u: ["နောက်အကြိမ်တွေမှာ— သူတို့ ရဲစခန်းကိုသွားတယ်။ မြို့က ထွက်ပြေးတယ်။ တစ်ယောက်နဲ့တစ်ယောက် လုံးဝမတွေ့အောင် နေတယ်။",
        "ဒါပေမယ့် လမ်းတိုင်းရဲ့အဆုံးမှာ ဦးမင်းဇော် ရောက်လာတယ်။",
        "တစ်ယောက်သေတယ်။ ၁၁:၄၇ ရောက်တယ်။ အချိန်ပြန်စတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Doesn't Remember", l: "အခန်း ၃၀၇", w: ["သီရိ", "သက်နိုင်"],
    g: "“အဖေက ဘာလို့ အကြိမ်တိုင်း မှတ်မိနေတာလဲ?” “သူ မမှတ်မိဘူး။ အကြိမ်တိုင်း သူ့ရွေးချယ်မှုက တူနေတာပဲ။”",
    p: "A woman asking a mirror a question, the boy's reflection answering her.",
    u: ["သီရိ အသက်ရှူမဝသလို မေးတယ်။ “အဖေက ဘာလို့ အကြိမ်တိုင်း မှတ်မိနေတာလဲ?”",
        "သက်နိုင်က ဖြေတယ်။ “သူ မမှတ်မိဘူး။”",
        "“အကြိမ်တိုင်း သူ့ရွေးချယ်မှုက တူနေတာပဲ။”"],
    c: [[2, "bigstinger"]] },

  { t: "The Same Choice Every Time", l: null, w: ["ဦးမင်းဇော်"],
    g: "အမှန်ကို ဖုံးဖို့။ သူ့ဂုဏ်သိက္ခာကို ကာကွယ်ဖို့။ လိုအပ်ရင် သူ့သမီးရဲ့အသက်ကိုတောင် စွန့်ဖို့။",
    p: "Close on the father's face in flat light, entirely composed — a man who has never once "
      + "considered choosing differently.",
    u: ["အမှန်ကို ဖုံးဖို့။ သူ့ဂုဏ်သိက္ခာကို ကာကွယ်ဖို့။ လိုအပ်ရင် သူ့သမီးရဲ့အသက်ကိုတောင် စွန့်ဖို့။",
        "အကြိမ်တိုင်းမှာ အဖြစ်အပျက် နည်းနည်းစီ ပြောင်းတယ်။",
        "ဒါပေမယ့် ဦးမင်းဇော်ရဲ့ရွေးချယ်မှုက ဘယ်တော့မှ မပြောင်းဘူး။"],
    c: [[2, "bigstinger"]] },

  { t: "It's Me", l: "အခန်း ၃၀၇", w: ["သက်နိုင်"],
    g: "“ဒါဆို အချိန်ကို ပြန်လှည့်နေတာ ဘယ်သူလဲ?” သက်နိုင် ပြုံးတယ် — “ငါ။”",
    p: "A boy's face in a cracked mirror, smiling faintly for the first time — tired, kind, and "
      + "entirely unfrightening.",
    u: ["သက်ပိုင်က မှန်ထဲကကလေးကို မေးတယ်။ “ဒါဆို အချိန်ကို ပြန်လှည့်နေတာ ဘယ်သူလဲ?”",
        "သက်နိုင် ခဏတိတ်တယ်။ ပြီးတော့ သက်ပိုင်ကို ကြည့်ပြီး ပြုံးတယ်။",
        "“ငါ။”"],
    c: [[2, "bigstinger"]] },

  { t: "I Pull That Minute Back", l: null, w: ["သက်နိုင်"],
    g: "“ငါသေတဲ့ ၁၁:၄၇ ကို ရောက်တိုင်း အဲဒီတစ်မိနစ်ကို ဆွဲပြီး မင်းတို့ဆီ ပို့နေတာ။”",
    p: "⚠️ TEXT PERMITTED. A stopped ward clock from nineteen years ago reading exactly \"11:47\", "
      + "dust on its glass. That numeral is the only text in the image.",
    u: ["“ငါသေတဲ့ ၁၁:၄၇ ကို ရောက်တိုင်း အဲဒီတစ်မိနစ်ကို ဆွဲပြီး မင်းတို့ဆီ ပို့နေတာ။”",
        "“မင်းတို့ကို သတ်ဖို့ မဟုတ်ဘူး။ မင်းတို့ နှစ်ယောက်လုံး အသက်ရှင်နိုင်တဲ့လမ်းကို ရှာဖို့။”"],
    c: [[1, "bigstinger"]] },

  { t: "Nine Times Already", l: "အခန်း ၃၀၇", w: ["သက်နိုင်", "သီရိ"],
    g: "“ကိုးကြိမ်ပြန်ပို့ပြီးပြီ။ ငါ့မှာ ကျန်တာ ဒီတစ်ကြိမ်ပဲ။”",
    p: "A boy's reflection in a cracked mirror beginning to thin like smoke at its edges while he is "
      + "still speaking.",
    u: ["သီရိက မျက်ရည်တွေနဲ့ မေးတယ်။ “ဒါဆို ဒီတစ်ခါ မအောင်မြင်ရင် ထပ်ကြိုးစားလို့ရသေးတယ်မဟုတ်လား?”",
        "သက်နိုင် ခေါင်းခါတယ်။ မှန်ထဲက သူ့ခန္ဓာကိုယ်ဟာ မီးခိုးလို တဖြည်းဖြည်းပျောက်နေတယ်။",
        "“ကိုးကြိမ်ပြန်ပို့ပြီးပြီ။” “ငါ့မှာ ကျန်တာ ဒီတစ်ကြိမ်ပဲ။”"],
    c: [[2, "bigstinger"]] },

  { t: "This Time It Is Final", l: "အခန်း ၃၀၇",
    g: "“ဒီတစ်ခါ တစ်ယောက်ယောက်သေရင်—အချိန် ပြန်မလာတော့ဘူး။” ကျန်ချိန် — ၂၉ မိနစ်။",
    p: "⚠️ TEXT PERMITTED. A phone screen in a dark room showing a countdown reading exactly \"29:00\" "
      + "and falling. That numeral is the only text in the image.",
    u: ["“ဒီတစ်ခါ တစ်ယောက်ယောက်သေရင်—အချိန် ပြန်မလာတော့ဘူး။”",
        "အဲဒီအချိန် သီရိရဲ့ဖုန်းထဲ countdown မြည်လာတယ်။ ကျန်ချိန် — ၂၉ မိနစ်။"],
    c: [[1, "bigstinger"]] },

  { t: "This Time We Don't Run", l: "အခန်း ၃၀၇", w: ["သီရိ", "သက်ပိုင်"],
    g: "“အရင်ကိုးကြိမ်မှာ ငါတို့ ဘာလုပ်ခဲ့လဲ?” “ထွက်ပြေးခဲ့တယ်။” “ဒီတစ်ခါ မပြေးဘူး။”",
    p: "Two people standing in a dark room deciding something together, torch between them.",
    u: ["“အရင်ကိုးကြိမ်မှာ ငါတို့ ဘာလုပ်ခဲ့လဲ?” လို့ သက်ပိုင် မေးတယ်။",
        "သီရိ ပြန်ဖြေတယ်။ “ထွက်ပြေးခဲ့တယ်။”",
        "“ဒီတစ်ခါ မပြေးဘူး။”"],
    c: [[2, "bigstinger"]] },

  { t: "Twenty-Nine Minutes to Publish It", l: "အခန်း ၃၀၇", w: ["သီရိ"],
    g: "Tape ကိုယူတယ်။ ဆေးရုံမှတ်တမ်းတွေကို ဖုန်းနဲ့ ဓာတ်ပုံရိုက်တယ်။ Cloud ပေါ်တင်တယ်။",
    p: "A phone camera photographing old clinical record sheets laid out on a dusty floor, torchlight "
      + "raking across them.",
    u: ["သူတို့မှာ မိနစ်နှစ်ဆယ့်ကိုးမိနစ်ပဲ ရှိတယ်။ Tape ကိုယူတယ်။",
        "ဆေးရုံမှတ်တမ်းတွေကို ဖုန်းနဲ့ ဓာတ်ပုံရိုက်တယ်။ Cloud ပေါ်တင်တယ်။ ရဲနဲ့ သတင်းဌာနဆီ ပို့တယ်။"] },

  { t: "Stopped at 99 Percent", l: null,
    g: "ဒါပေမယ့် upload က ၉၉ ရာခိုင်နှုန်းမှာ ရပ်သွားတယ်။ ဖုန်းလိုင်းပြတ်သွားတယ်။",
    p: "⚠️ TEXT PERMITTED. A phone screen showing an upload progress bar frozen with the figure "
      + "\"99%\" beside it and the signal indicator empty. That figure is the only text in the image.",
    u: ["ဒါပေမယ့် upload က ၉၉ ရာခိုင်နှုန်းမှာ ရပ်သွားတယ်။",
        "ဖုန်းလိုင်းပြတ်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "A Car Door Outside", l: "အခန်း ၃၀၇",
    g: "အပြင်ကနေ ကားတံခါးပိတ်သံ ကြားရတယ်။ ဦးမင်းဇော် ရောက်လာပြီ။",
    p: "A broken clinic window from inside with a car's headlights sweeping across the derelict "
      + "forecourt below.",
    u: ["အပြင်ကနေ ကားတံခါးပိတ်သံ ကြားရတယ်။",
        "ဦးမင်းဇော် ရောက်လာပြီ။"],
    c: [[1, "bigstinger"]] },

  { t: "The Phone in Her Pocket", l: "အခန်း ၃၀၇", w: ["သီရိ"],
    g: "သီရိက အသံဖမ်းထားတဲ့ဖုန်းကို အင်္ကျီအိတ်ထဲ ထည့်လိုက်တယ်။",
    p: "A woman slipping a phone into a shirt pocket with its screen still lit, the faint glow "
      + "showing through the fabric.",
    u: ["သီရိက တံခါးဘေးမှာ ရပ်ပြီး အသံဖမ်းထားတဲ့ဖုန်းကို အင်္ကျီအိတ်ထဲ ထည့်လိုက်တယ်။",
        "သက်ပိုင်က တိုးတိုးပြောတယ်။ “သူ့ကို ဝန်ခံအောင်လုပ်မယ်။”",
        "သီရိက မေးတယ်။ “ပြီးရင်?” “၁၁:၄၇ ကို အတူတူ ဖြတ်မယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "No Gun, No Knife", l: "အခန်း ၃၀၇", w: ["ဦးမင်းဇော်"],
    g: "ဦးမင်းဇော် တစ်ယောက်တည်း ဝင်လာတယ်။ အဖြူရောင် အရေးပေါ်ဆေးထိုးအပ်တစ်ချောင်းပဲ ရှိတယ်။",
    p: "A calm older man standing in a derelict doorway holding nothing but a capped medical syringe "
      + "down at his side.",
    u: ["အခန်းတံခါး ပွင့်လာတယ်။ ဦးမင်းဇော် တစ်ယောက်တည်း ဝင်လာတယ်။",
        "သူ့လက်ထဲမှာ သေနတ်မရှိဘူး။ ဓားလည်း မရှိဘူး။",
        "အဖြူရောင် အရေးပေါ်ဆေးထိုးအပ်တစ်ချောင်းပဲ ရှိတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Was It You Driving", l: "အခန်း ၃၀၇", w: ["သီရိ", "ဦးမင်းဇော်"],
    g: "“လွန်ခဲ့တဲ့ ဆယ့်ကိုးနှစ်က ကားမောင်းခဲ့တာ အဖေလား?” “မတော်တဆမှုပါ။”",
    p: "A father and daughter facing each other across a dark ruined room, neither moving.",
    u: ["“သမီး၊ အဖေ့ဆီလာခဲ့။ အဲဒီကောင်က လူသတ်သမားပဲ။” သီရိ မရွေ့ဘူး။",
        "“လွန်ခဲ့တဲ့ ဆယ့်ကိုးနှစ်က ကားမောင်းခဲ့တာ အဖေလား?”",
        "ဦးမင်းဇော်ရဲ့မျက်နှာက မပြောင်းဘူး။ “မတော်တဆမှုပါ။”"] },

  { t: "You Left Him on the Road", l: "အခန်း ၃၀၇", w: ["သီရိ", "ဦးမင်းဇော်"],
    g: "“သက်နိုင်ကို လမ်းပေါ်မှာ ထားခဲ့တာလား?” “လူနာတင်ကားမှာ နေရာတစ်ခုပဲ ရှိတယ်။”",
    p: "Close on the older man's face answering a question about a dead child with complete "
      + "composure.",
    u: ["“သက်နိုင်ကို လမ်းပေါ်မှာ ထားခဲ့တာလား?”",
        "“လူနာတင်ကားမှာ နေရာတစ်ခုပဲ ရှိတယ်။”",
        "“ဒါကြောင့် ကိုယ့်သမီးကို ရွေးခဲ့တာလား?”"],
    c: [[2, "bigstinger"]] },

  { t: "I Was Wrong, But You Lived", l: "အခန်း ၃၀၇", w: ["ဦးမင်းဇော်"],
    g: "“အဖေ မှားခဲ့တယ်။ ဒါပေမယ့် သမီးအသက်ရှင်ခဲ့တယ်။ အဲဒါ မလုံလောက်ဘူးလား?”",
    p: "An older man taking one step forward in a dark room, reasonable, almost gentle.",
    u: ["ဦးမင်းဇော်က တစ်လှမ်းတိုးလာတယ်။",
        "“အဖေ မှားခဲ့တယ်။ ဒါပေမယ့် သမီးအသက်ရှင်ခဲ့တယ်။ အဲဒါ မလုံလောက်ဘူးလား?”"] },

  { t: "Would You Choose Me Again", l: "အခန်း ၃၀၇", w: ["သီရိ", "ဦးမင်းဇော်"],
    g: "“အခုရော? အခုလည်း ကျွန်မကို ရွေးမှာလား?” “အခုလည်း သမီးကိုပဲ ရွေးမယ်။”",
    p: "A father looking at his daughter, then past her at the man behind her, then back — and "
      + "answering.",
    u: ["သီရိရဲ့အသံ တုန်လာတယ်။ “အခုရော? အခုလည်း ကျွန်မကို ရွေးမှာလား?”",
        "ဦးမင်းဇော်က သူမကိုကြည့်တယ်။ ပြီးတော့ သက်ပိုင်ကို ကြည့်တယ်။",
        "“အခုလည်း သမီးကိုပဲ ရွေးမယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "He Has to Die For You to Live", l: "အခန်း ၃၀၇", w: ["ဦးမင်းဇော်"],
    g: "သူ့လက်ထဲက ဆေးထိုးအပ်ကို မြှောက်လိုက်တယ် — “ဒီကောင်သေမှ သမီး အသက်ရှင်မှာ။”",
    p: "A syringe raised in a steady hand in a dark room, the cap now off.",
    u: ["သူ့လက်ထဲက ဆေးထိုးအပ်ကို မြှောက်လိုက်တယ်။",
        "“ဒီကောင်သေမှ သမီး အသက်ရှင်မှာ။”"],
    c: [[1, "bigstinger"]] },

  { t: "The Lights Go Out Again", l: "အခန်း ၃၀၇", w: ["သက်ပိုင်"],
    g: "မီးပျက်သွားတယ်။ အမှောင်ထဲမှာ သက်ပိုင်ရဲ့လည်ပင်းကို အပ်ထိုးဝင်သွားတယ်။ ဒူးထောက်ကျသွားတယ်။",
    p: "Near-total darkness with one falling torch beam, and a man going down onto his knees. ⚠️ No "
      + "wound and no blood shown — only his collapse.",
    u: ["ဦးမင်းဇော် အဲဒီစကားပြောပြီးတာနဲ့ မီးပျက်သွားတယ်။",
        "အမှောင်ထဲမှာ သက်ပိုင်ရဲ့လည်ပင်းကို အပ်ထိုးဝင်သွားတယ်။",
        "သူ့ခန္ဓာကိုယ် တစ်ခုလုံး ထုံသွားတယ်။ ဒူးထောက်ကျသွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "11:31", l: "အခန်း ၃၀၇", w: ["ဦးမင်းဇော်", "သီရိ"],
    g: "နောက်ဆုံးမြင်လိုက်တာက ဦးမင်းဇော်က သီရိကို ဆွဲခေါ်သွားတာ။ နံရံကနာရီ — ၁၁:၃၁။",
    p: "⚠️ TEXT PERMITTED. Floor-level view from a collapsing man's eyeline: two pairs of legs leaving "
      + "through a doorway, and on the wall above them a clock reading exactly \"11:31\".",
    u: ["မျက်လုံးမမှိတ်ခင် သူ နောက်ဆုံးမြင်လိုက်တာက—",
        "ဦးမင်းဇော်က သီရိကို ဆွဲခေါ်သွားတာပဲ။",
        "နံရံကနာရီ— ၁၁:၃၁။"],
    c: [[2, "bigstinger"]] },

  { t: "His Hands Are on the Wheel", l: "အဖြူရောင်ကား", w: ["သက်ပိုင်", "ဦးမင်းဇော်", "သီရိ"],
    g: "သတိပြန်ဝင်လာတော့ သူ့လက်နှစ်ဖက်က steering wheel ကို ကိုင်ထားတယ်။ ဘေးခုံမှာ ဦးမင်းဇော်။",
    p: "A man waking at the wheel of a moving car in heavy rain, an older man calm in the passenger "
      + "seat, a woman with bound wrists on the back bench.",
    u: ["သက်ပိုင် သတိပြန်ဝင်လာတော့ သူ့လက်နှစ်ဖက်က steering wheel ကို ကိုင်ထားတယ်။",
        "အဖြူရောင်ကားကို သူမောင်းနေတယ်။ ဘေးခုံမှာ ဦးမင်းဇော် ထိုင်နေတယ်။",
        "နောက်ခန်းမှာ သီရိ လက်ချည်ခံထားရတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "Exactly the Memory", l: "အဖြူရောင်ကား",
    g: "မှတ်ဉာဏ်ထဲကမြင်ကွင်းနဲ့ အကုန်တူနေပြီ။ Dashboard။ မိုးရေ။ အနီရောင်ကြိုး။ နာရီ — ၁၁:၄၃။",
    p: "⚠️ TEXT PERMITTED. The dashboard from the film's opening shot, identical: rain on glass, the "
      + "red cord hanging from the mirror, and the clock reading exactly \"11:43\".",
    u: ["သက်ပိုင်ရဲ့ခေါင်းက မူးဝေနေတယ်။ လက်တွေကို သူမထိန်းနိုင်ဘူး။ မှတ်ဉာဏ်ထဲကမြင်ကွင်းနဲ့ အကုန်တူနေပြီ။",
        "Dashboard။ မိုးရေ။ အနီရောင်ကြိုး။",
        "နာရီ— ၁၁:၄၃။"],
    c: [[2, "bigstinger"]] },

  { t: "A Knife on His Thigh", l: "အဖြူရောင်ကား", w: ["ဦးမင်းဇော်"],
    g: "ဦးမင်းဇော်က သက်ပိုင်ရဲ့ပေါင်ပေါ် ဓားတစ်ချောင်း ချထားတယ်။ “မင်းက သူ့ကို သတ်မယ်။”",
    p: "A knife laid flat across a driver's thigh by another hand, the driver's own fingers nowhere "
      + "near it.",
    u: ["ဦးမင်းဇော်က သက်ပိုင်ရဲ့ပေါင်ပေါ် ဓားတစ်ချောင်း ချထားတယ်။",
        "“ခဏနေ ကားရပ်မယ်။ မင်းက သူ့ကို သတ်မယ်။ ပြီးရင် မင်းကိုယ်မင်း သတ်မယ်။”"],
    c: [[1, "bigstinger"]] },

  { t: "The Same Drug Since He Was Nine", l: "အဖြူရောင်ကား", w: ["သီရိ"],
    g: "“မင်းအသက်ကိုးနှစ်ကတည်းက သုံးခဲ့တဲ့ဆေး။ မင်းမှတ်ဉာဏ်ပျောက်သွားစေတဲ့ဆေး။”",
    p: "A woman's face in a car's back seat as she understands something appalling, rain light "
      + "moving across her.",
    u: ["သက်ပိုင် စကားပြောဖို့ ကြိုးစားတယ်။ “ဘာ… ဆေးလဲ…”",
        "“မင်းအသက်ကိုးနှစ်ကတည်းက သုံးခဲ့တဲ့ဆေး။ မင်းမှတ်ဉာဏ်ပျောက်သွားစေတဲ့ဆေး။”",
        "နောက်ခန်းက သီရိ မျက်နှာပျက်သွားတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "It Was Never an Accident", l: null,
    g: "သက်ပိုင်ရဲ့ မှတ်ဉာဏ်ပျောက်တာ မတော်တဆမှုကြောင့် မဟုတ်ဘူး။ ဦးမင်းဇော်က ဆေးပေးပြီး ဖျက်ပစ်ခဲ့တာ။",
    p: "⚠️ MEMORY REGISTER. A child's arm on a clinic bed with an IV line taped to it, an adult hand "
      + "adjusting the flow.",
    u: ["သက်ပိုင်ရဲ့ မှတ်ဉာဏ်ပျောက်တာ မတော်တဆမှုကြောင့် မဟုတ်ဘူး။",
        "ဦးမင်းဇော်က အမှန်ကိုမပြောနိုင်အောင် ဆေးပေးပြီး ဖျက်ပစ်ခဲ့တာ။"],
    c: [[1, "bigstinger"]] },

  { t: "Still Recording", l: "အဖြူရောင်ကား", w: ["သီရိ"],
    g: "သီရိ အင်္ကျီအိတ်ထဲက ဖုန်းကို လက်နဲ့မသိမသာ ထိတယ်။ အသံဖမ်းနေဆဲ။",
    p: "A woman's bound hands moving very slightly against her own shirt pocket, a faint glow inside "
      + "it.",
    u: ["သီရိ အင်္ကျီအိတ်ထဲက ဖုန်းကို လက်နဲ့မသိမသာ ထိတယ်။",
        "အသံဖမ်းနေဆဲ။"],
    c: [[1, "stinger"]] },

  { t: "Did You Kill Daw Nilar Too", l: "အဖြူရောင်ကား", w: ["သီရိ", "ဦးမင်းဇော်"],
    g: "“အဖေ ဒေါ်နီလာကိုလည်း သတ်ခဲ့လား?” “သူ သိတာများလွန်းတယ်။”",
    p: "A rear-view mirror with an older man's eyes in it, looking back at the woman behind him.",
    u: ["“အဖေ ဒေါ်နီလာကိုလည်း သတ်ခဲ့လား?”",
        "ဦးမင်းဇော် နောက်ကြည့်မှန်ကနေ သူမကို ကြည့်တယ်။ “သူ သိတာများလွန်းတယ်။”",
        "“အခု သမီးလည်း သိသွားပြီလေ။”"],
    c: [[2, "bigstinger"]] },

  { t: "The Silence Was the Answer", l: "အဖြူရောင်ကား", w: ["သီရိ"],
    g: "ဦးမင်းဇော် တိတ်သွားတယ်။ အဲဒီတိတ်ဆိတ်မှုက အဖြေဖြစ်နေပြီ။",
    p: "A woman's face in the back of a car as tears start, understanding exactly what she has just "
      + "been told by nothing at all.",
    u: ["ဦးမင်းဇော် တိတ်သွားတယ်။",
        "အဲဒီတိတ်ဆိတ်မှုက အဖြေဖြစ်နေပြီ။ သီရိရဲ့မျက်ရည် ကျလာတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Now He Can Kill Her Too", l: null, w: ["ဦးမင်းဇော်"],
    g: "သူမကို ကယ်ဖို့ အဖေက ကလေးတစ်ယောက်ကို သေခွင့်ပေးခဲ့တယ်။ အခု သူ့အပြစ်ကို ကယ်ဖို့ — ကိုယ့်သမီးကိုပါ သတ်နိုင်နေပြီ။",
    p: "The father's profile in the passenger seat lit by oncoming headlights, entirely calm.",
    u: ["သူမကို ကယ်ဖို့ အဖေက လွန်ခဲ့တဲ့ ဆယ့်ကိုးနှစ်က ကလေးတစ်ယောက်ကို သေခွင့်ပေးခဲ့တယ်။",
        "အခု သူ့အပြစ်ကို ကယ်ဖို့—",
        "ကိုယ့်သမီးကိုပါ သတ်နိုင်နေပြီ။"],
    c: [[2, "bigstinger"]] },

  { t: "The Brakes Are Gone", l: "တံတား", w: ["သက်ပိုင်"],
    g: "ကားက တံတားဟောင်းပေါ် တက်လာတယ်။ Brake pedal ကို နင်းလိုက်တယ်။ မဝင်ဘူး။",
    p: "A foot stamping a brake pedal flat to the floor with no resistance, the wet bridge road "
      + "rushing beyond the windscreen.",
    u: ["ကားက တံတားဟောင်းပေါ် တက်လာတယ်။ တံတားအဆုံးမှာ ကုန်တင်ကားတစ်စီး မီးဖွင့်ထားတယ်။",
        "Brake pedal ကို သက်ပိုင် နင်းလိုက်တယ်။ မဝင်ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "He Jumped Out", l: "တံတား", w: ["ဦးမင်းဇော်"],
    g: "ဦးမင်းဇော် ပြုံးလိုက်တယ် — “ဒီတစ်ခါ ဓားတောင် မလိုတော့ဘူး။” ကားတံခါးဖွင့်ပြီး ခုန်ချလိုက်တယ်။",
    p: "A passenger door swinging open on a moving car in rain and a man rolling clear onto the "
      + "roadway behind it.",
    u: ["ဦးမင်းဇော် ပြုံးလိုက်တယ်။ “ဒီတစ်ခါ ဓားတောင် မလိုတော့ဘူး။”",
        "သူ ကားတံခါးကိုဖွင့်ပြီး အရှိန်လျှော့တဲ့နေရာမှာ ခုန်ချလိုက်တယ်။",
        "သက်ပိုင်နဲ့ သီရိကတော့ Brake မရှိတဲ့ကားထဲမှာ ကျန်ခဲ့တယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "11:46", l: "တံတား",
    g: "တည့်တည့်ရှေ့မှာ ကုန်တင်ကား။ နာရီ — ၁၁:၄၆။",
    p: "⚠️ TEXT PERMITTED. A dashboard clock reading exactly \"11:46\" with a lorry's headlights "
      + "filling the windscreen behind it. That numeral is the only text in the image.",
    u: ["တည့်တည့်ရှေ့မှာ ကုန်တင်ကား။",
        "နာရီ— ၁၁:၄၆။"],
    c: [[1, "bigstinger"]] },

  { t: "His Body Will Not Obey", l: "တံတား", w: ["သက်ပိုင်", "သီရိ"],
    g: "ဆေးအရှိန်ကြောင့် ခန္ဓာကိုယ်က သူ့အမိန့်ကို နားမထောင်တော့ဘူး။ “သက်ပိုင်… ကားကို လှည့်!”",
    p: "A man's hands locked on a steering wheel, his arms rigid, a woman leaning forward from the "
      + "back seat shouting.",
    u: ["သက်ပိုင် လက်ကို steering wheel ကနေ မခွာနိုင်ဘူး။",
        "ဆေးအရှိန်ကြောင့် ခန္ဓာကိုယ်က သူ့အမိန့်ကို နားမထောင်တော့ဘူး။",
        "နောက်ခန်းက သီရိ ကြိုးဖြည်ဖို့ ကြိုးစားနေတယ်။ “သက်ပိုင်… ကားကို လှည့်!” “မရဘူး…” “ရှင်လုပ်နိုင်တယ်!”"],
    c: [[2, "heartbeat"]] },

  { t: "Twenty Seconds", l: "တံတား",
    g: "နာရီ — ၁၁:၄၆:၄၀။ စက္ကန့်နှစ်ဆယ်ပဲ ကျန်တယ်။",
    p: "⚠️ TEXT PERMITTED. A dashboard clock reading exactly \"11:46:40\". That string is the only "
      + "text in the image.",
    u: ["နာရီ—",
        "၁၁:၄၆:၄၀။ စက္ကန့်နှစ်ဆယ်ပဲ ကျန်တယ်။"],
    c: [[1, "heartbeat"]] },

  { t: "This Time I Cannot Save You", l: "တံတား", w: ["သက်နိုင်"],
    g: "သက်ပိုင်ခေါင်းထဲမှာ သက်နိုင်ရဲ့အသံ — “ဒီတစ်ခါ ငါ မကယ်နိုင်ဘူး။”",
    p: "A man's face at the wheel with his eyes shut, hearing something that is not in the car.",
    u: ["သက်ပိုင်ခေါင်းထဲမှာ သက်နိုင်ရဲ့အသံ ကြားလာတယ်။",
        "“ဒီတစ်ခါ ငါ မကယ်နိုင်ဘူး။”"],
    c: [[1, "bigstinger"]] },

  { t: "Save Her Instead", l: "တံတား", w: ["သက်ပိုင်"],
    g: "“ငါ့ကို ကယ်ဖို့မလိုဘူး… သူ့ကိုပဲ ကယ်ပေး။” “အရင်အကြိမ်တွေမှာ မင်း အဲဒီလိုပဲ ပြောခဲ့တယ်။”",
    p: "Close on a man's jaw clenched, speaking to nobody visible.",
    u: ["သက်ပိုင် သွားကြိတ်ပြီး ပြန်ပြောတယ်။ “ငါ့ကို ကယ်ဖို့မလိုဘူး…” “သူ့ကိုပဲ ကယ်ပေး။”",
        "သက်နိုင်ရဲ့အသံက ချက်ချင်း ပြန်ဖြေတယ်။",
        "“အရင်အကြိမ်တွေမှာ မင်း အဲဒီလိုပဲ ပြောခဲ့တယ်။”"],
    c: [[2, "bigstinger"]] },

  { t: "Choose Both of You", l: "တံတား", w: ["သက်နိုင်"],
    g: "“ဒီတစ်ခါ နှစ်ယောက်လုံး အသက်ရှင်ဖို့ ရွေး။”",
    p: "A brief flash of the boy's face, calm and exhausted, over the rain-blurred windscreen.",
    u: ["“ဒီတစ်ခါ နှစ်ယောက်လုံး အသက်ရှင်ဖို့ ရွေး။”"],
    c: [[0, "bigstinger"]] },

  { t: "Nine Deaths at Once", l: null, w: ["သီရိ", "သက်ပိုင်"],
    g: "အရင်ကိုးကြိမ်က သေဆုံးမှုတွေ တစ်ပြိုင်နက် ပေါ်လာတယ်။ တစ်ယောက်ကိုတစ်ယောက် ကယ်ဖို့ကြိုးစားရင်း သေခဲ့တဲ့အကြိမ်တွေ။",
    p: "⚠️ MEMORY REGISTER. A layered composition of nine faint overlapping images — a hospital "
      + "corridor, a river, a roadside, a stairwell — all of them the same two people reaching for "
      + "each other. No injuries visible in any of them.",
    u: ["သက်ပိုင် မျက်လုံးမှိတ်လိုက်တယ်။ သူ့မှတ်ဉာဏ်ထဲမှာ အရင်ကိုးကြိမ်က သေဆုံးမှုတွေ တစ်ပြိုင်နက် ပေါ်လာတယ်။",
        "သူ သီရိအစား ဓားထိုးခံခဲ့တဲ့အကြိမ်။ သီရိ သူ့အစား ကားရှေ့ဝင်ခဲ့တဲ့အကြိမ်။",
        "နှစ်ယောက်လုံး တစ်ယောက်ကိုတစ်ယောက် ကယ်ဖို့ကြိုးစားရင်း သေခဲ့တဲ့အကြိမ်တွေ။"],
    c: [[2, "bigstinger"]] },

  { t: "They Believed Only One Could Live", l: null,
    g: "ပြဿနာက သူတို့ကြောက်လို့ မဟုတ်ဘူး။ တစ်ယောက်ပဲ အသက်ရှင်ရမယ်လို့ ယုံခဲ့ကြလို့။",
    p: "⚠️ MEMORY REGISTER. Two hands reaching toward each other and not quite meeting, repeated "
      + "faintly nine times across the frame.",
    u: ["ပြဿနာက သူတို့ကြောက်လို့ မဟုတ်ဘူး။",
        "တစ်ယောက်ပဲ အသက်ရှင်ရမယ်လို့ ယုံခဲ့ကြလို့။"],
    c: [[1, "bigstinger"]] },

  { t: "The Same Rule Her Father Used", l: null, w: ["ဦးမင်းဇော်"],
    g: "ဒါဟာ လွန်ခဲ့တဲ့ဆယ့်ကိုးနှစ်က ဦးမင်းဇော် ရွေးခဲ့တဲ့ရွေးချယ်မှုနဲ့ အတူတူပဲ။ တစ်ယောက်ကို ကယ်ဖို့ တစ်ယောက်ကို စွန့်ရမယ်။",
    p: "⚠️ MEMORY REGISTER. The ambulance doors again, one stretcher space, a man's arm choosing.",
    u: ["ဒါဟာ လွန်ခဲ့တဲ့ဆယ့်ကိုးနှစ်က ဦးမင်းဇော် ရွေးခဲ့တဲ့ရွေးချယ်မှုနဲ့ အတူတူပဲ။",
        "တစ်ယောက်ကို ကယ်ဖို့ တစ်ယောက်ကို စွန့်ရမယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "He Refuses the Rule", l: "တံတား", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် ဒီတစ်ခါ အဲဒီစည်းမျဉ်းကို လက်မခံတော့ဘူး။ ဟွန်းကို အဆက်မပြတ်တီးတယ်။",
    p: "A man's left hand forced onto a car horn and held there, his face contorted with the effort "
      + "of moving an arm that does not want to move.",
    u: ["သက်ပိုင် ဒီတစ်ခါ အဲဒီစည်းမျဉ်းကို လက်မခံတော့ဘူး။",
        "သူ ဘယ်လက်ကို အတင်းလှုပ်ပြီး ဟွန်းကို အဆက်မပြတ်တီးတယ်။",
        "ညာလက်နဲ့ handbrake ကို ဆွဲတယ်။ ခြေထောက်က accelerator ကို ဖိထားဆဲ။"],
    c: [[2, "bigstinger"]] },

  { t: "The Car Goes Sideways", l: "တံတား",
    g: "ကားက လမ်းပေါ်မှာ ဘေးတိုက်လှည့်သွားတယ်။ ကုန်တင်ကားမောင်းသူက steering ကို လွှဲလိုက်တယ်။",
    p: "A white car swinging broadside across a wet bridge road in a plume of spray, a lorry's "
      + "headlights swerving away beyond it.",
    u: ["ကားက လမ်းပေါ်မှာ ဘေးတိုက်လှည့်သွားတယ်။",
        "ကုန်တင်ကားမောင်းသူက ဟွန်းသံကြားပြီး steering ကို လွှဲလိုက်တယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Glass, and a Cord Cut Free", l: "တံတား", w: ["သီရိ"],
    g: "ကားက တံတားဘောင်ကို တိုက်မိတယ်။ မှန်တွေ ကွဲထွက်သွားတယ်။ သီရိရဲ့ကြိုးလည်း ပြတ်သွားတယ်။",
    p: "Safety glass bursting outward in a shower of cubes, and a woman's bound wrists sawing free "
      + "against a broken edge. ⚠️ No cuts and no blood shown.",
    u: ["သက်ပိုင်တို့ကားက တံတားဘောင်ကို တိုက်မိတယ်။ မှန်တွေ ကွဲထွက်သွားတယ်။",
        "သီရိရဲ့ကြိုးလည်း ကွဲနေတဲ့သံချွန်နဲ့ ပြတ်သွားတယ်။",
        "နာရီ— ၁၁:၄၆:၅၈။"],
    c: [[2, "bigstinger"]] },

  { t: "Half Over the Edge", l: "တံတား",
    g: "ကားက တံတားဘောင်ပေါ်ကနေ တစ်ဝက်ကျော် ထိုးထွက်နေတယ်။ အောက်မှာ မြစ်။",
    p: "A white car hanging more than halfway over a broken bridge rail in rain, tipping slowly, the "
      + "river far below in the dark.",
    u: ["ကားက တံတားဘောင်ပေါ်ကနေ တစ်ဝက်ကျော် ထိုးထွက်နေတယ်။",
        "အောက်မှာ မြစ်။",
        "သက်ပိုင်ရဲ့ထိုင်ခုံတံခါး ပိနေတယ်။ သီရိ ထွက်လို့ရပြီ။"],
    c: [[2, "bigstinger"]] },

  { t: "But She Does Not Get Out", l: "တံတား", w: ["သီရိ", "သက်ပိုင်"],
    g: "ဒါပေမယ့် သူမ မထွက်ဘူး။ ရှေ့ခန်းကိုတက်လာပြီး သက်ပိုင်ရဲ့ seat belt ကို ဖြုတ်တယ်။",
    p: "A woman climbing forward into the front of a tipping car instead of out of its open door, "
      + "reaching for a man's seatbelt buckle.",
    u: ["ဒါပေမယ့် သူမ မထွက်ဘူး။",
        "ရှေ့ခန်းကိုတက်လာပြီး သက်ပိုင်ရဲ့ seat belt ကို ဖြုတ်တယ်။",
        "သက်ပိုင် အော်တယ်။ “ကားကျတော့မယ်! ထွက်!”"],
    c: [[2, "bigstinger"]] },

  { t: "There Is No Such Rule", l: "တံတား", w: ["သီရိ"],
    g: "သီရိ ပြန်အော်တယ် — “တစ်ယောက်ပဲ အသက်ရှင်ရမယ်ဆိုတဲ့ စည်းမျဉ်း မရှိဘူးဆို!”",
    p: "A woman shouting into a man's face inside a tipping car, absolutely certain.",
    u: ["သီရိ ပြန်အော်တယ်။",
        "“တစ်ယောက်ပဲ အသက်ရှင်ရမယ်ဆိုတဲ့ စည်းမျဉ်း မရှိဘူးဆို!”",
        "နာရီ— ၁၁:၄၆:၅၉။"],
    c: [[1, "bigstinger"]] },

  { t: "She Pulls Him Out", l: "တံတား", w: ["သီရိ", "သက်ပိုင်"],
    g: "ကားဘောင်တစ်ခုလုံး ကျိုးသွားတယ်။ သီရိက သက်ပိုင်ကို ဆွဲပြီး တံခါးကနေ အပြင်ခုန်ထွက်တယ်။",
    p: "Two people hitting wet tarmac hard as a car goes over a broken rail behind them, both of "
      + "them clear of it.",
    u: ["ကားဘောင်တစ်ခုလုံး ကျိုးသွားတယ်။",
        "သီရိက သက်ပိုင်ကို ဆွဲပြီး တံခါးကနေ အပြင်ခုန်ထွက်တယ်။",
        "နာရီ— ၁၁:၄၇။"],
    c: [[2, "bigstinger"]] },

  { t: "Waiting for the Reset", l: "တံတား", w: ["သက်ပိုင်"],
    g: "သက်ပိုင် မျက်လုံးမှိတ်ထားတယ်။ အချိန်ပြန်စမယ့်အခိုက်ကို စောင့်နေတယ်။",
    p: "A man lying on wet road in rain with his eyes squeezed shut, braced for something.",
    u: ["သက်ပိုင် မျက်လုံးမှိတ်ထားတယ်။ အချိန်ပြန်စမယ့်အခိုက်ကို စောင့်နေတယ်။",
        "မနက် ၄:၁၇ ကို ပြန်ရောက်မယ်။ အိပ်ရာပေါ်မှာ ပြန်နိုးမယ်။",
        "သီရိ သူ့ကို မမှတ်မိတော့ဘူး။ အကုန် ပြန်စမယ်။"] },

  { t: "Nothing Happens", l: "တံတား",
    g: "ဒါပေမယ့် — ဘာမှမဖြစ်ဘူး။ တစ်စက္ကန့်။ နှစ်စက္ကန့်။",
    p: "A man lying in the rain with his eyes opening again, the same road, the same night, nothing "
      + "reset.",
    u: ["ဒါပေမယ့်—",
        "ဘာမှမဖြစ်ဘူး။ တစ်စက္ကန့်။ နှစ်စက္ကန့်။"],
    c: [[1, "bigstinger"]] },

  { t: "11:48", l: "တံတား",
    g: "နာရီက — ၁၁:၄၈ ကို ရောက်သွားတယ်။ ပထမဆုံးအကြိမ်။ အချိန်က ၁၁:၄၇ ကို ကျော်သွားပြီ။",
    p: "⚠️ TEXT PERMITTED. A wristwatch or phone screen in the rain reading exactly \"11:48\". That "
      + "numeral is the only text in the image.",
    u: ["နာရီက—",
        "၁၁:၄၈ ကို ရောက်သွားတယ်။",
        "ပထမဆုံးအကြိမ်။ အချိန်က ၁၁:၄၇ ကို ကျော်သွားပြီ။ နှစ်ယောက်လုံး အသက်ရှင်နေတယ်။"],
    c: [[2, "bigstinger"]] },

  { t: "A Child Laughing, Once", l: "တံတား",
    g: "သက်ပိုင်ခေါင်းထဲမှာ ကလေးတစ်ယောက်ရဲ့ ရယ်သံသေးသေး — “ဒီတစ်ခါတော့ မှန်သွားပြီ…”",
    p: "Rain falling through the dark above two people lying on a road, nobody else in frame.",
    u: ["သက်ပိုင်ခေါင်းထဲမှာ ကလေးတစ်ယောက်ရဲ့ ရယ်သံသေးသေး ကြားလိုက်ရတယ်။",
        "“ဒီတစ်ခါတော့ မှန်သွားပြီ…”",
        "ပြီးတော့ သက်နိုင်ရဲ့အသံ ပျောက်သွားတယ်။ အပြီးတိုင်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Recording Uploaded Itself", l: null, w: ["ဦးမင်းဇော်"],
    g: "သီရိရဲ့ဖုန်းက အသံဖမ်းဖိုင်ကို အလိုလို cloud ပေါ်တင်ထားခဲ့တယ်။ တံတားဘေးမှာ သူ့ကို ဖမ်းမိတယ်။",
    p: "A man in a pressed shirt standing at the roadside in rain with police vehicle lights across "
      + "him, hands at his sides.",
    u: ["သီရိရဲ့ဖုန်းက အသံဖမ်းဖိုင်ကို အလိုလို cloud ပေါ်တင်ထားခဲ့တယ်။",
        "ဦးမင်းဇော် ဝန်ခံထားသမျှ ရဲလက်ထဲ ရောက်သွားတယ်။ တံတားဘေးမှာ သူ့ကို ဖမ်းမိတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "Both of Them Alive", l: null, w: ["သီရိ", "သက်ပိုင်"],
    g: "သက်ပိုင်နဲ့ သီရိကတော့ ဆေးရုံတစ်ခုတည်းမှာ ကုသမှုခံယူရတယ်။ နှစ်ယောက်လုံး အသက်ရှင်တယ်။",
    p: "Two people in adjacent hospital beds in daylight, both awake, both bandaged only lightly.",
    u: ["ဒေါ်နီလာ ပျောက်ဆုံးမှု၊ ဆေးမှတ်တမ်းဖျက်ဆီးမှုနဲ့ မတော်တဆမှုဟောင်းကို ပြန်စစ်ကြတယ်။",
        "သက်ပိုင်နဲ့ သီရိကတော့ ဆေးရုံတစ်ခုတည်းမှာ ကုသမှုခံယူရတယ်။",
        "နှစ်ယောက်လုံး အသက်ရှင်တယ်။ ထူးဆန်းတဲ့မှတ်ဉာဏ်တွေ ထပ်မလာတော့ဘူး။"] },

  { t: "Two Wristbands in an Envelope", l: null,
    g: "စာအိတ်ထဲမှာ ကလေးလက်ပတ်နှစ်ခု ရှိနေတယ်။ တစ်ခုမှာ သက်ပိုင်။ နောက်တစ်ခုမှာ သက်နိုင်။",
    p: "Two small yellowed hospital identification wristbands laid side by side on a white sheet, "
      + "their printed names deliberately out of focus and unreadable.",
    u: ["တတိယနေ့မှာ ရဲအရာရှိတစ်ယောက်က သက်ပိုင်ဆီ စာအိတ်တစ်လုံး ယူလာတယ်။",
        "“ရွှေမင်းဆေးခန်းက လူနာမှတ်တမ်းတွေထဲမှာ ဒါတွေ့တယ်။ ခင်ဗျားကြည့်သင့်တယ်။”",
        "စာအိတ်ထဲမှာ ကလေးလက်ပတ်နှစ်ခု ရှိနေတယ်။ တစ်ခုမှာ— သက်ပိုင်။ နောက်တစ်ခုမှာ— သက်နိုင်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Bands Were Swapped", l: null, w: ["ဒေါ်နီလာ"],
    g: "ဒေါ်နီလာ လက်ရေးနဲ့ — “အရေးပေါ်ခွဲစိတ်ချိန်တွင် အမွှာကလေးနှစ်ဦး၏ လက်ပတ်များ မှားယွင်းလဲလှယ်ထားသည်။”",
    p: "A handwritten note on old paper, the handwriting visible as shape but not legible, held "
      + "between two fingers.",
    u: ["ပြီးတော့ ဒေါ်နီလာ လက်ရေးနဲ့ ရေးထားတဲ့ မှတ်စုတိုတစ်ခု။",
        "“အရေးပေါ်ခွဲစိတ်ချိန်တွင် အမွှာကလေးနှစ်ဦး၏ လက်ပတ်များ မှားယွင်းလဲလှယ်ထားသည်။”"],
    c: [[1, "bigstinger"]] },

  { t: "The One Who Died Was Thet Paing", l: null,
    g: "“သေဆုံးသူ — သက်ပိုင်။” “အသက်ရှင်သူ — သက်နိုင်။”",
    p: "Extreme close-up of two lines of handwriting on old paper, the letterforms visible but not "
      + "resolvable into words.",
    u: ["“သေဆုံးသူ — သက်ပိုင်။”",
        "“အသက်ရှင်သူ — သက်နိုင်။”"],
    c: [[1, "bigstinger"]] },

  { t: "He Was Never Thet Paing", l: null, w: ["သက်ပိုင်"],
    g: "သူ့အဖေက ကျန်ခဲ့တဲ့ကလေးကို မိသားစုက ပိုချစ်ခဲ့တဲ့သားရဲ့နာမည်နဲ့ ဆက်ခေါ်ခဲ့တာ။",
    p: "A man sitting motionless on a hospital bed holding a sheet of paper, everything he knows "
      + "about himself rearranging behind his eyes.",
    u: ["သက်ပိုင် စာရွက်ကိုကြည့်ပြီး မလှုပ်တော့ဘူး။",
        "သူ့အဖေက သားတစ်ယောက် ဆုံးသွားတဲ့နောက် ကျန်ခဲ့တဲ့ကလေးကို— မိသားစုက ပိုချစ်ခဲ့တဲ့သားရဲ့နာမည်နဲ့ ဆက်ခေါ်ခဲ့တာ။",
        "အသက်ကိုးနှစ်ကတည်းက သူဟာ သက်ပိုင်မဟုတ်ခဲ့ဘူး။ သူက သက်နိုင်။"],
    c: [[2, "bigstinger"]] },

  { t: "The Boy Who Saved Him Was Thet Paing", l: null, w: ["သက်နိုင်"],
    g: "အကြိမ်ကိုးကြိမ်လုံး သူ့ကိုကယ်ခဲ့တဲ့ကလေးက သက်နိုင်မဟုတ်ဘူး။ သက်ပိုင်။",
    p: "⚠️ MEMORY REGISTER. The boy from the mirror, seen clearly for the last time — the same tired "
      + "face, but now unmistakably a different child from the one who lived.",
    u: ["အကြိမ်ကိုးကြိမ်လုံး အချိန်ပြန်လှည့်ပြီး သူ့ကိုကယ်ခဲ့တဲ့ကလေးက—",
        "သက်နိုင်မဟုတ်ဘူး။ သက်ပိုင်။",
        "သူ့ကိုယ်ပိုင်နာမည်ကို စွန့်ပြီး အစ်ကိုရဲ့နာမည်နဲ့ ရှင်သန်ခဲ့ရတဲ့ကလေးကို— သေသွားတဲ့အစ်ကိုက ကိုးကြိမ်တိုင်တိုင် ပြန်ကယ်ခဲ့တာ။"],
    c: [[2, "bigstinger"]] },

  { t: "So Who Am I", l: null, w: ["သက်ပိုင်", "သီရိ"],
    g: "“ဒါဆို ကျွန်တော် ဘယ်သူလဲ?” သီရိ သူ့လက်ကို လှမ်းဆုပ်တယ်။",
    p: "A woman's hand closing over a man's on a hospital blanket, both of them looking at the "
      + "paper rather than each other.",
    u: ["သက်ပိုင်—ဒါမှမဟုတ် သက်နိုင်က—တိုးတိုးမေးတယ်။ “ဒါဆို ကျွန်တော် ဘယ်သူလဲ?”",
        "သီရိ သူ့လက်ကို လှမ်းဆုပ်တယ်။",
        "“ရှင်က ဘယ်နာမည်နဲ့ မွေးခဲ့လဲဆိုတာ ကျွန်မ မသိဘူး။”"] },

  { t: "I Know Who You Chose to Be", l: null, w: ["သီရိ"],
    g: "“ဒါပေမယ့် မနေ့ညက ရှင်ဘယ်သူဖြစ်ဖို့ ရွေးခဲ့လဲဆိုတာတော့ သိတယ်။”",
    p: "Close on a woman's face speaking to someone just out of frame, entirely sure of what she is "
      + "saying.",
    u: ["“ဒါပေမယ့် မနေ့ညက ရှင်ဘယ်သူဖြစ်ဖို့ ရွေးခဲ့လဲဆိုတာတော့ သိတယ်။”"],
    c: [[0, "bigstinger"]] },

  { t: "Nineteen Years on Her Wrist", l: null, w: ["သီရိ"],
    g: "သူမ အနီရောင်ကြိုးကို ဖြုတ်လိုက်တယ်။ နှစ်ပေါင်းဆယ့်ကိုးနှစ်ကြာ သူ့လက်မှာ ပတ်ထားခဲ့တဲ့ကြိုး။",
    p: "A woman untying the faded red cord from her own left wrist for the first time in nineteen "
      + "years, a pale unweathered band of skin beneath it.",
    u: ["သူမ အနီရောင်ကြိုးကို ဖြုတ်လိုက်တယ်။",
        "နှစ်ပေါင်းဆယ့်ကိုးနှစ်ကြာ သူ့လက်မှာ ပတ်ထားခဲ့တဲ့ကြိုး။"],
    c: [[1, "bigstinger"]] },

  { t: "The One Who Did Not Trade a Life", l: null, w: ["သီရိ", "သက်ပိုင်"],
    g: "အဲဒီကြိုးကို သက်ပိုင်ရဲ့လက်မှာ ပြန်ချည်ပေးတယ် — “တစ်ယောက်ကို ကယ်ဖို့ တစ်ယောက်ကို မစွန့်ခဲ့တဲ့လူ။”",
    p: "A woman knotting the red cord around a man's wrist — the same cord the boy tied on hers "
      + "nineteen years ago, closing the circle.",
    u: ["အဲဒီကြိုးကို သက်ပိုင်ရဲ့လက်မှာ ပြန်ချည်ပေးတယ်။ “ရှင်က—”",
        "“တစ်ယောက်ကို ကယ်ဖို့ တစ်ယောက်ကို မစွန့်ခဲ့တဲ့လူ။”"],
    c: [[1, "bigstinger"]] },

  { t: "Three Months Later", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ"],
    g: "သုံးလကြာပြီးနောက်။ သီရိ လက်ဖက်ရည်ဆိုင်ဟောင်းရှေ့က ဖြတ်သွားတယ်။",
    p: "A woman walking past an old teashop frontage in ordinary daylight, slowing as she passes the "
      + "door.",
    u: ["သုံးလကြာပြီးနောက်။",
        "သီရိ လက်ဖက်ရည်ဆိုင်ဟောင်းရှေ့က ဖြတ်သွားတယ်။",
        "စားပွဲနံပါတ် ၆ ကို မြင်တော့ ခြေလှမ်းရပ်သွားတယ်။"] },

  { t: "The Phone Is Still There", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ"],
    g: "စားပွဲအောက်ကို လက်လှမ်းကြည့်တယ်။ အနက်ရောင်ဖုန်းက အဲဒီနေရာမှာ ရှိနေတုန်းပဲ။",
    p: "A hand reaching under a teashop table in daylight and finding the same cracked black phone "
      + "still there.",
    u: ["စားပွဲအောက်ကို လက်လှမ်းကြည့်တယ်။",
        "အနက်ရောင်ဖုန်းက အဲဒီနေရာမှာ ရှိနေတုန်းပဲ။"],
    c: [[1, "bigstinger"]] },

  { t: "Recorded Nineteen Years Ago", l: null,
    g: "အရင်က မတွေ့ခဲ့တဲ့ voice message တစ်ခု။ ပို့သူ — သက်ပိုင်။ Recorded time — လွန်ခဲ့တဲ့ ဆယ့်ကိုးနှစ်၊ ည ၁၁:၄၇။",
    p: "⚠️ TEXT PERMITTED. A phone screen showing one voice message with a timestamp reading exactly "
      + "\"11:47\" and a year nineteen years past. Those are the only text in the image.",
    u: ["သူမ ဖုန်းကိုဖွင့်လိုက်တယ်။ အရင်က မတွေ့ခဲ့တဲ့ voice message တစ်ခု ပေါ်လာတယ်။",
        "ပို့သူ— သက်ပိုင်။",
        "Recorded time— လွန်ခဲ့တဲ့ ဆယ့်ကိုးနှစ်၊ ည ၁၁:၄၇။"],
    c: [[2, "bigstinger"]] },

  { t: "I Was Lying Then", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ"],
    g: "ကလေးတစ်ယောက်ရဲ့အသံ — “နာရီလက်တံ တစ်ပတ်ပြည့်ရင် အကုန်ပြန်ကောင်းသွားမယ်လို့ ငါပြောခဲ့တယ်နော်… အဲဒီတုန်းက ငါလိမ်ခဲ့တာ။”",
    p: "A woman standing very still in a busy teashop with a phone to her ear, everything ordinary "
      + "around her.",
    u: ["သီရိ play နှိပ်လိုက်တယ်။ ကလေးတစ်ယောက်ရဲ့အသံ ထွက်လာတယ်။ “သီရိ…”",
        "“နာရီလက်တံ တစ်ပတ်ပြည့်ရင် အကုန်ပြန်ကောင်းသွားမယ်လို့ ငါပြောခဲ့တယ်နော်…”",
        "“အဲဒီတုန်းက ငါလိမ်ခဲ့တာ။”"],
    c: [[2, "bigstinger"]] },

  { t: "But the Tenth Time, It Was True", l: "လက်ဖက်ရည်ဆိုင်",
    g: "ခဏတိတ်သွားတယ်။ ပြီးတော့ ကလေးက ရယ်လိုက်တယ် — “ဒါပေမယ့် ဆယ်ကြိမ်မြောက်မှာတော့… ငါပြောတာ မှန်သွားပြီ။”",
    p: "Extreme close-up of a phone's audio waveform running out to its end and stopping.",
    u: ["ခဏတိတ်သွားတယ်။ ပြီးတော့ ကလေးက ရယ်လိုက်တယ်။",
        "“ဒါပေမယ့် ဆယ်ကြိမ်မြောက်မှာတော့… ငါပြောတာ မှန်သွားပြီ။”",
        "Voice message ပြတ်သွားတယ်။"],
    c: [[1, "bigstinger"]] },

  { t: "The Countdown Reaches Zero", l: null,
    g: "ဖုန်း screen ပေါ်က countdown က သုညဖြစ်သွားတယ်။ ဒီတစ်ခါ — ပြန်မစတော့ဘူး။",
    p: "⚠️ TEXT PERMITTED. A phone screen showing a countdown at exactly \"00:00\" and not restarting. "
      + "That numeral is the only text in the image.",
    u: ["ဖုန်း screen ပေါ်က countdown က သုညဖြစ်သွားတယ်။",
        "ဒီတစ်ခါ— ပြန်မစတော့ဘူး။"],
    c: [[1, "bigstinger"]] },

  { t: "Her Wrist Is Bare", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ", "သက်ပိုင်"],
    g: "သီရိ လက်ကောက်ဝတ်ပေါ်က အနီရောင်ကြိုးလည်း မရှိတော့ဘူး။ အပြင်ဘက်ကနေ သက်ပိုင်ရဲ့အသံ။",
    p: "A woman's bare left wrist lowering the phone, and beyond her through the teashop door a man "
      + "waiting in the street with the red cord on his own wrist.",
    u: ["သီရိ လက်ကောက်ဝတ်ပေါ်က အနီရောင်ကြိုးလည်း မရှိတော့ဘူး။",
        "အဲဒီအချိန် လက်ဖက်ရည်ဆိုင်အပြင်ဘက်ကနေ သက်ပိုင်ရဲ့အသံ ကြားလာတယ်။",
        "“သီရိ… သွားမယ်လေ။”"] },

  { t: "It Is Finished", l: "လက်ဖက်ရည်ဆိုင်", w: ["သီရိ", "သက်ပိုင်"],
    g: "နောက်ဆုံးပုံ — သူ အသက်ရှင်နေတယ်။ သူမလည်း အသက်ရှင်နေတယ်။ ကလေးတစ်ယောက်ရဲ့ မှတ်ဉာဏ်ဟာ ငြိမ်သက်သွားခဲ့ပြီ။",
    p: "Final composition: two people walking away together down an ordinary sunlit street, seen "
      + "from behind, the red cord visible on his wrist. Nobody follows them and no reflection holds "
      + "anything. Hold on the empty teashop doorway after they leave frame.",
    u: ["သူ အသက်ရှင်နေတယ်။ သူမလည်း အသက်ရှင်နေတယ်။",
        "သူတို့နောက်မှာတော့— ကလေးတစ်ယောက်ရဲ့ မှတ်ဉာဏ်ဟာ နောက်ဆုံးအကြိမ်အဖြစ် ငြိမ်သက်သွားခဲ့ပြီ။",
        "ပြီးပါပြီ။"],
    c: [[2, "finalstinger"]] },
];
