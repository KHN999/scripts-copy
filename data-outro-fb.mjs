/**
 * ညနက်ပုံပြင် — OUTRO CARD. One shot.
 *
 * A single end card to append to a short: "you can now watch this story from
 * beginning to end on the ညနက်ပုံပြင် Facebook page." It is not a story and
 * it has no narrative shot list — it is one picture and one line.
 *
 * ⚠️ IT WILL AUDIT AS ONE-LINE AND UNCUT AND THAT IS CORRECT. The units/shot
 * rule exists because a picture should hold for about three spoken lines. This
 * board is a card. Ignore every pacing number on it.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *
 * ⚠️ THE MIDDLE OF THE FRAME IS KEPT EMPTY ON PURPOSE. Whatever goes out on
 * Facebook or TikTok gets the page name and a caption burned over the centre,
 * so the picture is built as a BACKPLATE: everything that matters sits low and
 * to the edges, and the central third is quiet dark sky with nothing in it.
 *
 * ⚠️ THE MASTER IS 16:9 LIKE EVERY OTHER BOARD, so the subject is held inside
 * the central vertical third and a 9:16 crop loses nothing.
 *
 * ⚠️ NOTHING IN THE PICTURE IS FRIGHTENING. An end card is where somebody
 * decides whether to follow a page. It is the channel's own imagery — a quiet
 * Burmese night — and not a scare.
 */

/** The project title in the lab. */
export const TITLE = "ညနက်ပုံပြင် — Outro";

/* A card needs no cast, no props and no locations: the prompt is complete on
 * its own and there is nothing here that has to match another shot. */
export const CAST = [];
export const PROPS = [];
export const LOCS = [];

export const ACT = {};

export const SCENES = [
  { t: "Watch the Full Story on Facebook",
    g: "⚠️ **နိဂုံးကတ် — ယခုဇာတ်လမ်း အစအဆုံးကို ညနက်ပုံပြင် facebook page မှာ သွားရောက်ကြည့်ရှုအားပေး နိုင်ပါပြီ**",
    p: "⚠️ AN END CARD, NOT A SCENE FROM A FILM. A quiet Burmese night landscape photographed "
      + "from a low rise, with a deep clear night sky filling the upper two thirds of the frame. "
      + "⚠️ ALONG THE BOTTOM OF THE PICTURE, A DISTANT VILLAGE IS STRUNG OUT IN SILHOUETTE — "
      + "timber rooflines, a few palms, one leaning power pole, and a scatter of small warm "
      + "orange window lights, all of it small and low and well below the middle of the frame. "
      + "⚠️ THE ENTIRE CENTRAL AREA OF THE FRAME IS OPEN NIGHT SKY WITH NOTHING IN IT AT ALL — no "
      + "moon, no cloud, no bird, no branch, nothing that would sit behind overlaid text. ⚠️ A "
      + "FEW FAINT STARS ONLY, high and to one side. ⚠️ THERE IS NO TEXT, NO LOGO, NO WATERMARK "
      + "AND NO LETTERING ANYWHERE IN THE IMAGE. ⚠️ THERE IS NOBODY IN THE PICTURE. Deep blue-black "
      + "sky, warm pinpoints below, calm and still and not frightening.",
    cam: "WIDE AND LOW. Camera at chest height on a rise outside a village, the horizon line "
      + "sitting low so that sky fills most of the frame.",
    time: "TIME: LATE NIGHT, CLEAR. Deep blue-black sky, no moon in frame, the only warm light "
      + "the scatter of small windows along the horizon.",
    /**
     * ⚠️ WRITTEN THE WAY IT HAS TO BE SPOKEN, BECAUSE THERE IS NO WAY TO SPLIT
     * THE TWO.
     *
     * The import endpoint takes units as plain strings and rebuilds them as
     * { text } — any `say` field is dropped on the way in, so a line cannot
     * carry a separate pronunciation. "facebook" in Latin script inside a
     * Burmese line is exactly the case that makes the voice stumble or switch
     * language mid-sentence, so the loanword is written in Burmese script.
     * ⚠️ IF THE CAPTION MUST READ "facebook", CHANGE IT IN THE LAB AFTER
     * RECORDING — editing the text there does not touch the clip.
     */
    u: ["ယခုဇာတ်လမ်း အစအဆုံးကို ညနက်ပုံပြင် ဖေ့စ်ဘွတ်ခ် စာမျက်နှာမှာ သွားရောက်ကြည့်ရှုအားပေး နိုင်ပါပြီ"] },
];

const STYLE =
  "Myanmar, present day. Photorealism, 16:9, 35mm grain, level camera, natural colour. Honest "
  + "available light — deep night sky and small warm incandescent windows, nothing stylised. One "
  + "still instant. ⚠️ KEEP EVERYTHING INSIDE THE CENTRAL VERTICAL THIRD OF THE FRAME so the "
  + "16:9 master crops to 9:16 without losing the village. ⚠️ NO TEXT, NO LETTERING, NO LOGO AND "
  + "NO WATERMARK ANYWHERE IN THE IMAGE.";

const CONT =
  "⚠️ THIS IS A CHANNEL END CARD AND IT IS DELIBERATELY CALM. Nothing in it is frightening, "
  + "nothing is moving and nobody is in it. ⚠️ THE MIDDLE OF THE FRAME IS KEPT EMPTY FOR TEXT "
  + "THAT IS ADDED LATER — do not fill it.";

SCENES.forEach((s) => { s.cont = CONT; s.style = STYLE; });

export { CONT, STYLE };
