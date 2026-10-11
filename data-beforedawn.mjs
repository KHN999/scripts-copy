/**
 * မိုးမလင်းခင် — BEFORE DAWN. SEASON 1 REFERENCE LIBRARY.
 *
 * ⚠️ THE DELIVERABLE HERE IS THE 27 REFERENCE PLATES, NOT THE SHOTS.
 *
 * refs-beforedawn.mjs holds every character, prop and location, and the plates
 * built from it are what Flow generates and what every later prompt attaches.
 * That IS the character creation — twelve people, the puppet, six props, eight
 * locations, described once and never again.
 *
 * This file was first written with forty-one shots that re-photographed those
 * same plates: an establishing shot of a location plate, a prop plate of a prop
 * plate. That is the job done twice and it was cut.
 *
 * What is left is the two things no plate can produce, because a plate is one
 * subject alone on white: the two line-ups. They are the only way to see
 * whether six faces hold up side by side, which is the whole risk of a cast
 * this size. push-board also needs at least one scene row.
 *
 * ⚠️ NOTHING HERE MAY ENCODE THE SEASON'S SECRET. One of the twelve is not a
 * person. Both line-ups build all of them identically as ordinary living
 * people. See the header of refs-beforedawn.mjs.
 */
import { CAST, PROPS, LOCS, CONT_PUPPET } from "./refs-beforedawn.mjs";

export { CAST, PROPS, LOCS };

/** The project title in the lab. */
export const TITLE = "မိုးမလင်းခင် — Reference Library";

const CAM = {
  sheet: "CHARACTER SHEET. Camera at chest height, straight on, far enough back to hold three "
    + "full-length figures side by side across the frame.",
  expr: "EXPRESSION STRIP. Camera at eye height, close enough that three head-and-shoulders crops "
    + "sit side by side across the frame.",
  puppet: "ON THE PUPPET. Camera level with it, close enough that it fills most of the frame.",
  stool: "ON THE STOOL. Camera at platform height, square to the low carved stool.",
  face: "ON THE CARVED FACE. Camera square to the face, filling the frame.",
  place: "ESTABLISHING. Camera at chest height, far enough back to hold the whole location.",
  group: "GROUP COMPOSITION. Camera at chest height facing the whole group, far enough back that "
    + "every person is complete in frame.",
  prop: "PROP PLATE. Camera square on to one object filling the frame.",
};

const TIME = {
  white: "LIGHTING: EVEN SOFT STUDIO LIGHT on a plain pure white seamless background. No "
    + "direction, no mood, no coloured light, no shadow cast onto the background.",
  grey: "LIGHTING: EVEN SOFT STUDIO LIGHT on a plain mid-grey seamless background. No direction, "
    + "no mood, no shadow cast onto the background.",
  lamp: "TIME: NIGHT, OIL LAMPS ONLY. Small steady orange flames close in, warm pools of light "
    + "that fall off fast, and heavy black everywhere past them. No electric light anywhere.",
  lantern: "TIME: NIGHT UNDER PAPER LANTERNS. Soft coloured light from strung lanterns overhead, "
    + "warm and uneven, with deep shadow between them.",
  moon: "TIME: NIGHT, OPEN MOONLIGHT. Cold blue-grey light from a high moon, edges clear, colour "
    + "drained almost to monochrome, shadows hard and black.",
  dark: "TIME: NIGHT, NO LAMP. Almost total darkness, only a thin wash of moonlight — shapes just "
    + "legible in outline, colour gone.",
};

const CONT =
  "⚠️ THIS IS A PRODUCTION REFERENCE IMAGE, NOT A FRAME OF THE FILM. It exists to fix what "
  + "something looks like so that later shots can match it. ⚠️ NO STORY, NO ATMOSPHERE, NO "
  + "DRAMA — nothing in these images is acting. ⚠️ MODERN EVERYDAY BURMESE CLOTHES ON THE TWELVE, "
  + "an old Myanmar village with no electricity around them.";

const CONT_SHEET =
  " ⚠️ THE THREE FIGURES ARE THE SAME PERSON PHOTOGRAPHED THREE TIMES, NOT THREE PEOPLE — "
  + "identical face, identical build, identical clothes down to every fold and fastening, "
  + "identical height, standing on the same line. ⚠️ EVENLY SPACED WITH CLEAR WHITE BETWEEN "
  + "THEM AND NONE OF THEM OVERLAPPING. ⚠️ NEUTRAL EXPRESSION IN ALL THREE, arms relaxed at the "
  + "sides, no posing and no acting. ⚠️ NO ROOM, NO FURNITURE, NO PROPS, NO TEXT, NO FLOOR OR "
  + "HORIZON LINE — nothing in the image but the figures on white.";

const CONT_EXPR =
  " ⚠️ THE THREE HEADS ARE THE SAME PERSON PHOTOGRAPHED THREE TIMES, NOT THREE PEOPLE — "
  + "identical face, identical hair, identical collar and clothing at the shoulders. ⚠️ EVENLY "
  + "SPACED WITH CLEAR BACKGROUND BETWEEN THEM AND NONE OF THEM OVERLAPPING. ⚠️ ALL THREE LOOK "
  + "STRAIGHT AT THE LENS AND ARE LIT IDENTICALLY. ⚠️ THE EXPRESSIONS ARE ORDINARY HUMAN "
  + "EXPRESSIONS HELD LIGHTLY — not extreme, not performed, not frightening. ⚠️ NOTHING IN THE "
  + "IMAGE BUT THE THREE HEADS ON A PLAIN BACKGROUND.";

const CONT_GROUP =
  " ⚠️ EVERY PERSON IN THIS PICTURE IS COMPLETE AND SEPARATE: nobody is cut off by the frame, "
  + "nobody is hidden behind anybody else, and every face is visible. ⚠️ EACH ONE KEEPS EXACTLY "
  + "THE FACE, HAIR, BUILD AND CLOTHES OF THEIR OWN REFERENCE PLATE — this is the picture that "
  + "proves twelve people are twelve different people. ⚠️ THEY ARE STANDING OR SITTING NORMALLY "
  + "AND NOBODY IS ACTING. ⚠️ NO ONE IS LIT DIFFERENTLY FROM ANYONE ELSE.";

const STYLE =
  "Photorealism, 16:9, 35mm grain, level camera, natural colour. Real skin, real cloth, real "
  + "wood and clay. ⚠️ KEEP EVERYTHING INSIDE THE CENTRAL VERTICAL THIRD OF THE FRAME WHERE THE "
  + "SUBJECT ALLOWS, so the 16:9 master crops to 9:16 without losing anybody. ⚠️ NO TEXT, NO "
  + "LABELS, NO CAPTIONS, NO WATERMARKS AND NO NUMBERING ANYWHERE IN THE IMAGE.";

/** Act headings, keyed by the shot number the act opens on. */
export const ACT = {
  1: "ဇာတ်ကောင် တန်းစီပုံများ",
};

/** Turnaround body, parameterised by who is standing on the white. */
const sheet = (en) =>
  `⚠️ A CHARACTER TURNAROUND SHEET OF ${en} ON A PLAIN PURE WHITE SEAMLESS BACKGROUND. `
  + "⚠️ THREE FULL-LENGTH VIEWS OF THE SAME PERSON STAND SIDE BY SIDE ACROSS THE FRAME, head to "
  + "foot, on the same ground line: ⚠️ ON THE LEFT, FRONT ON TO THE LENS. ⚠️ IN THE MIDDLE, A "
  + "THREE-QUARTER TURN. ⚠️ ON THE RIGHT, A FULL SIDE PROFILE. Even soft light from the front, "
  + "arms relaxed at the sides, feet together, neutral expression in all three.";

const expr = (en) =>
  `⚠️ AN EXPRESSION STRIP OF ${en} ON A PLAIN MID-GREY SEAMLESS BACKGROUND. `
  + "⚠️ THREE HEAD-AND-SHOULDERS VIEWS OF THE SAME PERSON SIT SIDE BY SIDE ACROSS THE FRAME, all "
  + "three facing the lens and lit identically: ⚠️ ON THE LEFT, A NEUTRAL RESTING FACE. ⚠️ IN THE "
  + "MIDDLE, THE EYES WIDE AND THE BROWS RAISED. ⚠️ ON THE RIGHT, THE JAW SET AND THE BROWS DRAWN "
  + "DOWN. Even soft light, ordinary human expressions held lightly.";

/* ────────────────────────────────────────────────────────────────────────── */

export const SCENES = [
  { t: "The core six — line-up", l: "ရွာအဝင်လမ်း", k: "group", tm: "grey", group: true,
    w: ["သီဟ", "နန္ဒာ", "ကိုဟန်ဇော်", "သက်မွန်", "ဦးဘဦး", "သဇင်"],
    g: "အဓိကဇာတ်ကောင် ၆ ယောက် — တန်းစီရပ်ပုံ။ တစ်ယောက်နဲ့တစ်ယောက် ကွဲပြားမှုကို စစ်ဆေးဖို့။",
    p: "⚠️ THE SIX CORE CHARACTERS STANDING IN ONE EVENLY SPACED ROW FACING THE LENS ON A PLAIN "
      + "MID-GREY SEAMLESS BACKGROUND, full length, head to foot. ⚠️ LEFT TO RIGHT: THIHA in the "
      + "slate-grey shirt, NANDA in the teal-green blouse, KO HAN ZAW in the checked shirt, THET "
      + "MON in the maroon blouse, U BA OO in the off-white taikpon, THAZIN in the pale blue "
      + "blouse. ⚠️ SIX CLEARLY DIFFERENT PEOPLE OF SIX DIFFERENT AGES AND BUILDS. Even soft "
      + "light, arms relaxed, neutral expressions.",
    u: ["အဓိကဇာတ်ကောင် ၆ ယောက်ကို တန်းစီပြီး ရိုက်ထားတဲ့ပုံ။",
      "ဘယ်နှစ်ယောက်မှ တစ်ယောက်နဲ့တစ်ယောက် မတူရဘူး။"] },

  { t: "The other six — line-up", l: "ရွာအဝင်လမ်း", k: "group", tm: "grey", group: true,
    w: ["ထွန်းမြတ်", "ရဲအောင်", "မင်းခန့်", "ဖြိုးဝေ", "မေဇင်", "ဒေါ်ခင်မာ"],
    g: "အထောက်အကူဇာတ်ကောင် ၆ ယောက် — တန်းစီရပ်ပုံ။",
    p: "⚠️ THE SIX SUPPORTING CHARACTERS STANDING IN ONE EVENLY SPACED ROW FACING THE LENS ON A "
      + "PLAIN MID-GREY SEAMLESS BACKGROUND, full length, head to foot. ⚠️ LEFT TO RIGHT: TUN "
      + "MYAT the broad one in olive green, YE AUNG in the grey zip jacket, MIN KHANT in the "
      + "bright red delivery jacket, PHYO WAI the youngest with the grey backpack, MAY ZIN in the "
      + "white blouse and round glasses, DAW KHIN MA in the mustard-yellow blouse. ⚠️ SIX CLEARLY "
      + "DIFFERENT PEOPLE. Even soft light, arms relaxed, neutral expressions.",
    u: ["အထောက်အကူဇာတ်ကောင် ၆ ယောက်ကို တန်းစီပြီး ရိုက်ထားတဲ့ပုံ။",
      "အရောင်နဲ့ အသက်အရွယ်တွေက တစ်ယောက်နဲ့တစ်ယောက် ကွဲနေတယ်။"] },
];

SCENES.forEach((s) => {
  s.cam = CAM[s.k];
  if (!s.cam) throw new Error(`sheet "${s.t}" has no camera for k="${s.k}"`);
  s.time = TIME[s.tm || "grey"];
  if (!s.time) throw new Error(`sheet "${s.t}" has no lighting for tm="${s.tm}"`);

  let cont = CONT;
  if (s.figure) cont += CONT_SHEET;
  if (s.expression) cont += CONT_EXPR;
  if (s.group) cont += CONT_GROUP;
  if (s.puppet) cont += CONT_PUPPET;
  s.cont = cont;
  s.style = STYLE;
});

export { CONT, STYLE };
