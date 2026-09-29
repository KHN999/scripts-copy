/**
 * Where a generator gets its scenes, now that the lab is not on this machine.
 *
 * Every generator used to open /Users/puraidointern/video-lab/data/lab.db.
 * Once the lab lives in a container that file is gone, and build.mjs runs all
 * forty generators — so one missing database takes the whole site down.
 *
 * ⚠️ THE LAB IS THE RECORD, NOT THE DATA FILE. It is tempting to rebuild the
 * narration from data-<slug>.mjs, which has every unit. It produces the wrong
 * text on eighteen boards. Short units get merged before narration — under
 * about fourteen characters TTS mispronounces them or returns nothing — and
 * the merge happened in the lab, at different times, under rules that were not
 * the same on every board. Reapplying one rule to all of them changed boards
 * that had been correct. The only faithful copy of what was actually spoken is
 * the lab's own rows.
 *
 * So the finished boards carry a snapshot of those rows, taken once and
 * committed. A board with no snapshot — anything authored from here on, where
 * the data file IS the source and the lab is built from it by the import
 * endpoint — falls back to the data file.
 */
import { existsSync, readFileSync } from "node:fs";

/**
 * Scene rows in the shape the generators expect: `{ idx, units }` with `units`
 * as the JSON string the database stored, plus `image_prompt` where the board
 * authored its prompts in the lab rather than in a data file.
 */
export function labRows(slug, SCENES) {
  // SCENES is optional: the oldest boards have no data file at all — every
  // scene they ever had lives only in the snapshot — so they call this with a
  // slug and nothing else.
  const snap = new URL(`./lab-snapshot/${slug}.json`, import.meta.url);
  if (existsSync(snap)) {
    return JSON.parse(readFileSync(snap, "utf8"))
      .map((r) => ({ ...r, units: JSON.stringify(r.units) }));
  }
  if (!SCENES) {
    throw new Error(
      `no lab-snapshot/${slug}.json and no data file to fall back on. `
      + `Either restore the snapshot or pass SCENES.`);
  }
  return SCENES.map((s, i) => ({
    idx: i,
    units: JSON.stringify(s.u.map((text) => ({ text }))),
  }));
}
