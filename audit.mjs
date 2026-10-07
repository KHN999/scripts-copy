/** Board audit with literal regexes — shell escaping was mangling \b into \\b. */
const slug = process.argv[2];
const M = await import(`/Users/puraidointern/ghost-prompts-site/data-${slug}.mjs?a=${Date.now()}`);
const { SCENES, CAST = [], PROPS = [], LOCS = [] } = M;
const N = SCENES.length;
const full = (s) => `"${s.t}". ${s.p} ${s.cont ?? ""} ${s.style ?? ""}`;

const hits = (re, get) => SCENES
  .map((s, i) => { const m = get(s).match(re); return m ? `${i + 1}[${[...new Set(m)].join(",")}]` : null; })
  .filter(Boolean);

const report = (label, re, get = full) => {
  const h = hits(re, get);
  console.log(`${label.padEnd(20)} ${h.length ? h.join("  ") : "NONE"}`);
};

console.log(`── ${slug}: ${N} shots ──`);
report("negations", /\b(no|not|never|without|nothing|nobody|none|neither)\s+\w+/gi);
report("harm tokens", /\b(unharmed|unbroken|intact|unmarked|blood|wound|gore|corpse|decay\w*|mutilat\w*)\b/gi);
report("sound", /\b(sound|voice|hear\w*|silence|audible)\b/gi, (s) => s.p);
report("motion", /\b(then|begins? to|starts? to|slowly|gradually|moments? later)\b/gi, (s) => s.p);
report("interior state", /\b(unreadable|realis\w*|knows?|remembers?|thinking|feels?)\b/gi, (s) => s.p);

const refs = [...CAST, ...PROPS, ...LOCS];
const bad = refs
  .map((c) => { const m = c.prompt.match(/\b(no|not|never|without|nothing|nobody)\s+\w+/gi); return m ? `${c.name}[${[...new Set(m)].join(",")}]` : null; })
  .filter(Boolean);
console.log(`${"plate negations".padEnd(20)} ${bad.length ? bad.join("  ") : "NONE"}`);

const L = SCENES.map((s, i) => `Shot ${i + 1} of ${N} — "${s.t}".\n\n${s.cam}\n\n${s.time}\n\n${s.p}\n\n${s.cont}\n\n${s.style}`.length);
const units = SCENES.flatMap((s) => s.u);
console.log(`\nassembled avg ${Math.round(L.reduce((a, b) => a + b) / N)}  max ${Math.max(...L)}`);
console.log(`units ${units.length}  shortest ${Math.min(...units.map((u) => u.length))}  runtime ~${Math.round(units.length * 3.4 / 60)} min`);

/**
 * ⚠️ HOW LONG A PICTURE HOLDS — the check that would have caught village.
 *
 * It was authored at one picture per narration line: 124 shots for 161 lines,
 * 1.30 units/shot, 72% of them single-line, where about 65 shots were right.
 * Nothing flagged it, because every other number was healthy — the prompts were
 * fine, the cue budget passed, the narration was correct. It only shows up when
 * you watch a film that cuts every three seconds for nine minutes.
 *
 * Measured over the finished boards: tarot 3.49, fear 2.85, amya 2.69, hour
 * 2.63, back 2.61, look 2.54, extraman 2.49, mahninsi 2.15 — and palace alone
 * at 1.50 with 56% single-line, which is the outlier and NOT the model.
 */
const perShot = units.length / N;
const solo = SCENES.filter((s) => s.u.length === 1).length;
const soloPct = 100 * solo / N;
console.log(`units/shot ${perShot.toFixed(2)} ${perShot >= 2 ? "ok" : "TOO FRAGMENTED — aim ~3"}`
  + ` | one-line shots ${soloPct.toFixed(0)}% ${soloPct <= 20 ? "ok" : "TOO MANY — keep under ~10%"}`);
const cued = SCENES.filter((s) => s.c).length;
const big = SCENES.filter((s) => s.c && s.c[0][1] === "bigstinger").length;
let run = 0, max = 0;
SCENES.forEach((s) => { if (s.c) { run++; max = Math.max(max, run); } else run = 0; });
const ok = (v, l) => (v <= l ? "ok" : "OVER");
console.log(`cued ${(100 * cued / N).toFixed(1)}% ${ok(100 * cued / N, 40)} | big ${(100 * big / N).toFixed(1)}% ${ok(100 * big / N, 20)} | run ${max} ${ok(max, 3)}`);
