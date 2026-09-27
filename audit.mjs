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
const cued = SCENES.filter((s) => s.c).length;
const big = SCENES.filter((s) => s.c && s.c[0][1] === "bigstinger").length;
let run = 0, max = 0;
SCENES.forEach((s) => { if (s.c) { run++; max = Math.max(max, run); } else run = 0; });
const ok = (v, l) => (v <= l ? "ok" : "OVER");
console.log(`cued ${(100 * cued / N).toFixed(1)}% ${ok(100 * cued / N, 40)} | big ${(100 * big / N).toFixed(1)}% ${ok(100 * big / N, 20)} | run ${max} ${ok(max, 3)}`);
