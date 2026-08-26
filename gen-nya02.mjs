/**
 * Builds index.html for သုံးခါခေါ်သံ (Three Times, Your Name).
 *
 * Reads the scene rows straight out of video-lab's lab.db rather than an
 * intermediate JSON file. The Extra Bowl sheet was generated from a scenes2.json
 * that lived in a scratchpad and no longer exists, so that page can never be
 * regenerated — only hand-edited. Pointing at the database instead means this
 * page and the film it documents can never drift apart.
 *
 *   node gen-nya02.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-nya02.mjs";

const PROJECT = "ksa4c7xxre6";
const TITLE_MM = "သုံးခါခေါ်သံ";
const TITLE_EN = "THREE TIMES, YOUR NAME";

const STYLE =
  "Rural Myanmar village during monsoon, timeless — no modern objects, no electric light, no phones, "
  + "no vehicles, no printed fabric. Cinematic photorealism, Myanmar folk horror. Warm dim kerosene "
  + "lamplight indoors, cold rain-blue darkness outside. 16:9, natural colour, shallow depth of field. "
  + "Never show a complete ghost — no visible figure, face or creature anywhere in the frame. No gore. "
  + "No text, lettering, numbers, captions or watermarks anywhere in the image.";

const PORTRAIT =
  "Plain dark wooden wall behind, warm kerosene lamp light from one side, waist-up three-quarter view, "
  + "neutral expression, photorealistic, natural colour, rural Myanmar village, no modern clothing.";

const CHARS = [
  ["ကိုစိန်", "Ko Sein",
   "Burmese man of 32, lean, dark sun-weathered skin, short black hair, thin moustache, plain white "
   + "cotton singlet, faded green checked longyi — a longyi, NOT trousers — barefoot, a thin cloth tied "
   + "round his head. Tired, closed face."],
  ["မောင်လှ", "Maung Hla",
   "Burmese boy of 17, slighter and a little taller than his brother, smooth unlined face, no moustache, "
   + "plain white cotton shirt, brown longyi — NOT trousers — barefoot. Open, untroubled expression."],
  ["ဦးဖိုးသာ", "U Pho Tha",
   "Burmese village elder in his seventies, thin white hair, deeply lined face, white cotton jacket over "
   + "a dark longyi, a worn wooden walking stick. Watchful."],
].map(([name, en, body]) => ({ name, en, prompt: `${body} ${PORTRAIT}` }));

const PROP = { name: "ထင်းစည်း", en: "The firewood bundle", prompt:
  "A bundle of twelve short cut banyan branches lying on bare dark earth, tied once with a twist of "
  + "dried grass rope. The cut ends are pale bone-white and smooth, clearly countable. The bark is grey "
  + "and dry. Nothing else in frame. Photorealistic, natural colour, overcast daylight." };

/** Which references to attach in Flow. Set per shot, not matched by regex — the
 *  prompts describe people generically ("a Burmese man"), so a regex over the
 *  text would tag almost nothing and silently drop the references that matter. */
const WHO = {
  3: ["ဦးဖိုးသာ"], 7: ["ကိုစိန်", "မောင်လှ", "ဦးဖိုးသာ"], 9: ["ကိုစိန်"],
  12: ["ကိုစိန်"], 13: ["ကိုစိန်", "ထင်းစည်း"], 14: ["ကိုစိန်", "ထင်းစည်း"],
  16: ["ထင်းစည်း"], 17: ["ဦးဖိုးသာ"], 18: ["ကိုစိန်"], 19: ["ကိုစိန်", "ဦးဖိုးသာ"],
  20: ["ကိုစိန်"], 21: ["ဦးဖိုးသာ", "ထင်းစည်း"], 24: ["ကိုစိန်", "မောင်လှ"],
  26: ["ကိုစိန်"], 29: ["မောင်လှ"], 30: ["ထင်းစည်း"],
};

const TITLES = ["The village", "The rules", "What lives in it", "Daw Ngwe dies", "The wake",
  "No dry wood", "The offer refused", "The fallen limb", "Out at eleven", "Dry ground",
  "The roots move", "The cut", "Twelve sticks", "Nothing follows", "The pyre", "Four left over",
  "The seventh day", "Once", "The rule", "By the third", "Take it back", "Twice",
  "Ash in the water", "He warns his brother", "Two, then silence", "Why it stopped",
  "“ဟုတ်ကဲ့”", "The open door", "At the foot of the stair", "Three short"];

const ACT = { 1: "The banyan", 4: "The death", 8: "The taking", 15: "The pyre",
  18: "The first call", 22: "The second call", 25: "The third night", 30: "What came back" };

// ── pull the scenes ─────────────────────────────────────────────────────────
const db = new Database("/Users/puraidointern/video-lab/data/lab.db", { readonly: true });
const rows = db.prepare(
  "SELECT idx, units, image_prompt FROM scenes WHERE project_id=? ORDER BY idx").all(PROJECT);
db.close();
if (rows.length !== 30) throw new Error(`expected 30 scenes, got ${rows.length}`);

let act = "";
const shots = rows.map((r) => {
  const n = r.idx + 1;
  if (ACT[n]) act = ACT[n];
  return {
    id: String(n), title: TITLES[r.idx], act,
    who: WHO[n] ?? [],
    raw: r.image_prompt.replace(/^ANCHOR SHOT — /, ""),
    lines: JSON.parse(r.units).map((u) => u.text),
    mm: MM_SHOT[String(n)] || "",
  };
});

// Numbering every prompt is what stops Flow re-rendering a variation of the
// previous frame instead of a new one.
const TOTAL = shots.length + CHARS.length + 1;
CHARS.forEach((c, i) => {
  c.mm = MM_REF[c.name] || "";
  c.prompt = `Character reference ${i + 1} of ${CHARS.length + 1} — ${c.en} (${c.name}). `
    + `A new and distinct character; do not repeat or vary any previous reference.\n\n${c.prompt}`;
});
PROP.mm = MM_REF[PROP.name] || "";
PROP.prompt = `Character reference ${CHARS.length + 1} of ${CHARS.length + 1} — ${PROP.en}. `
  + `A new and distinct reference image.\n\n${PROP.prompt}`;
shots.forEach((s, i) => {
  s.prompt = `Shot ${i + 1} of ${shots.length} — scene ${s.id}, "${s.title}". A new and distinct frame `
    + `in an ongoing sequence; do not repeat, vary or re-render any previous image.\n\n`
    + `${s.raw.trim()}\n\n${STYLE}`;
});

const DATA = JSON.stringify({ chars: CHARS, prop: PROP, shots });

await writeFile("/Users/puraidointern/ghost-prompts-site/index.html", `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${TITLE_MM} — image prompts</title>
<style>
:root{--bg:#14101c;--panel:#1d1828;--edge:#332b45;--ink:#0f0c16;--text:#ece8f5;--mute:#9b93ae;--accent:#c9b6f0;--ok:#7ddba4}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font:15px/1.55 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
a{color:var(--accent)}
.mmline{font-family:"Noto Sans Myanmar","Myanmar Text","Padauk","Myanmar MN",system-ui,sans-serif;
  font-size:14px;line-height:2;color:#d9d2ea;background:#241d33;border:1px solid var(--edge);
  border-left:3px solid var(--accent);border-radius:8px;padding:9px 12px;margin:8px 0}
header{position:sticky;top:0;z-index:9;background:rgba(20,16,28,.96);backdrop-filter:blur(8px);border-bottom:1px solid var(--edge);padding:14px 20px}
.wrap{max-width:960px;margin:0 auto}
h1{margin:0;font-size:17px;letter-spacing:.02em;font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",system-ui,sans-serif}
.sub{color:var(--mute);font-size:12px;margin-top:2px}
.tools{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;align-items:center}
input[type=search]{flex:1;min-width:180px;background:var(--ink);border:1px solid var(--edge);color:var(--text);border-radius:7px;padding:7px 10px;font-size:13px;outline:none}
input[type=search]:focus{border-color:var(--accent)}
.chip{background:var(--ink);border:1px solid var(--edge);color:var(--mute);border-radius:999px;padding:4px 11px;font-size:12px;cursor:pointer;white-space:nowrap;font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",system-ui,sans-serif}
.chip.on{background:var(--accent);border-color:var(--accent);color:#1a1424;font-weight:650}
.bar{height:4px;background:var(--ink);border-radius:99px;overflow:hidden;margin-top:9px}
.bar>i{display:block;height:100%;background:var(--ok);width:0;transition:width .25s}
main{max-width:960px;margin:0 auto;padding:20px}
section>h2{font-size:12px;text-transform:uppercase;letter-spacing:.18em;color:var(--mute);margin:26px 0 10px}
.card{background:var(--panel);border:1px solid var(--edge);border-radius:11px;padding:14px;margin-bottom:10px}
.card.done{opacity:.45}
.top{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
.id{font-weight:800;color:var(--accent);font-size:13px;min-width:26px}
.ttl{font-weight:650;font-size:14px;flex:1;min-width:120px;font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",ui-sans-serif,system-ui,sans-serif}
.act{color:var(--mute);font-size:11px}
.tags{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}
.tag{background:#2a2338;border:1px solid var(--edge);color:var(--accent);border-radius:5px;padding:2px 7px;font-size:11px;font-weight:600;font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",system-ui,sans-serif}
.tag.none{color:var(--mute);font-weight:400;font-style:italic}
pre{background:var(--ink);border:1px solid var(--edge);border-radius:8px;padding:11px;margin:0;
  white-space:pre-wrap;word-break:break-word;font:12.5px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;color:#d7d1e6}
.row{display:flex;gap:8px;margin-top:9px;align-items:center;flex-wrap:wrap}
button{background:var(--accent);border:0;color:#1a1424;font-weight:700;border-radius:7px;padding:7px 14px;font-size:12.5px;cursor:pointer}
button.ghost{background:transparent;border:1px solid var(--edge);color:var(--mute);font-weight:500}
button.ghost.on{border-color:var(--ok);color:var(--ok)}
details{margin-top:9px}
summary{cursor:pointer;color:var(--mute);font-size:12px}
.mm{font-size:14px;line-height:1.95;margin-top:7px;color:#cfc8de;font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",system-ui,sans-serif}
.note{background:#231b33;border:1px solid var(--edge);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:13px;color:#d5cee6}
.empty{color:var(--mute);text-align:center;padding:40px 0}
@media(max-width:560px){.tools{gap:6px}main{padding:14px}}
</style></head><body>
<header><div class="wrap">
  <h1>${TITLE_MM} — image prompts</h1>
  <div class="sub">${TITLE_EN} · 30 shots · 16:9 · Copy a prompt, paste it into Google Flow, attach the
  references listed on the card.
  ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။</div>
  <div class="tools">
    <input type="search" id="q" placeholder="Search prompts, titles, scene numbers…">
    <span id="filters"></span>
    <button class="ghost" id="reset">reset progress</button>
  </div>
  <div class="bar"><i id="pbar"></i></div>
  <div class="sub" id="pcount"></div>
</div></header>
<main>
  <div class="note"><b>Do this first.</b> Build the four references below and approve each one before
  starting the shot list. The firewood bundle matters most — the ending only works if you can count the
  sticks, so the twelve pale cut ends have to stay identical from shot 13 through shot 30. Scene 7 is the
  one frame with all three faces in it; if a face drifts later, come back and re-attach from there.
  <br><br><b>Never show a complete ghost.</b> Suggestion only — no face, no full figure, in any shot.
  <br><br><span class="sub">The Extra Bowl sheet is still at <a href="/extra-bowl.html">/extra-bowl.html</a>.</span></div>
  <section><h2>References — build these first</h2><div id="refs"></div></section>
  <section><h2>Shots</h2><div id="shots"></div><div class="empty" id="none" hidden>Nothing matches that filter.</div></section>
</main>
<script>
const DATA = ${DATA};
const KEY = "nya02.done.v1";
let done = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
let active = new Set();
const save = () => localStorage.setItem(KEY, JSON.stringify([...done]));
const ALL = [...new Set(DATA.shots.flatMap(s => s.who))];

function copy(text, btn) {
  const ok = () => { const t = btn.textContent; btn.textContent = "copied ✓"; setTimeout(() => btn.textContent = t, 1100); };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(ok).catch(() => fallback(text, ok));
  else fallback(text, ok);
}
function fallback(text, ok) {
  const ta = document.createElement("textarea");
  ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
  document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); ok(); } finally { ta.remove(); }
}

function card(o, isRef) {
  const el = document.createElement("div");
  el.className = "card" + (!isRef && done.has(o.id) ? " done" : "");
  const head = document.createElement("div"); head.className = "top";
  if (isRef) {
    const t = document.createElement("span"); t.className = "ttl"; t.textContent = o.name + " — " + o.en;
    const a = document.createElement("span"); a.className = "act"; a.textContent = "reference";
    head.append(t, a);
  } else {
    const i = document.createElement("span"); i.className = "id"; i.textContent = o.id;
    const t = document.createElement("span"); t.className = "ttl"; t.textContent = o.title;
    const a = document.createElement("span"); a.className = "act"; a.textContent = o.act;
    head.append(i, t, a);
  }
  el.appendChild(head);
  if (!isRef) {
    const tags = document.createElement("div"); tags.className = "tags";
    if (o.who.length) o.who.forEach(w => { const s = document.createElement("span"); s.className = "tag"; s.textContent = w; tags.appendChild(s); });
    else { const s = document.createElement("span"); s.className = "tag none"; s.textContent = "no references — object or place"; tags.appendChild(s); }
    el.appendChild(tags);
  }
  if (o.mm) {
    // Outside the <pre> on purpose: this is for the person, not for Flow, and
    // must never end up inside what the copy button sends.
    const mm = document.createElement("div"); mm.className = "mmline"; mm.textContent = o.mm;
    el.appendChild(mm);
  }
  const pre = document.createElement("pre"); pre.textContent = o.prompt; el.appendChild(pre);
  const row = document.createElement("div"); row.className = "row";
  const c = document.createElement("button"); c.textContent = "copy prompt";
  c.onclick = () => copy(o.prompt, c); row.appendChild(c);
  if (!isRef) {
    const d = document.createElement("button");
    d.className = "ghost" + (done.has(o.id) ? " on" : "");
    d.textContent = done.has(o.id) ? "done ✓" : "mark done";
    d.onclick = () => { done.has(o.id) ? done.delete(o.id) : done.add(o.id); save(); render(); };
    row.appendChild(d);
  }
  el.appendChild(row);
  if (!isRef && o.lines && o.lines.length) {
    const det = document.createElement("details");
    const sum = document.createElement("summary"); sum.textContent = "narration over this shot";
    const body = document.createElement("div"); body.className = "mm";
    o.lines.forEach((l, i) => { if (i) body.appendChild(document.createElement("br")); body.appendChild(document.createTextNode(l)); });
    det.append(sum, body);
    el.appendChild(det);
  }
  return el;
}

function render() {
  const q = document.getElementById("q").value.trim().toLowerCase();
  const list = DATA.shots.filter(s =>
    (!active.size || s.who.some(w => active.has(w))) &&
    (!q || (s.id + " " + s.title + " " + s.prompt + " " + s.act).toLowerCase().includes(q)));
  const box = document.getElementById("shots"); box.textContent = "";
  list.forEach(s => box.appendChild(card(s, false)));
  document.getElementById("none").hidden = list.length > 0;
  const n = DATA.shots.filter(s => done.has(s.id)).length;
  document.getElementById("pbar").style.width = (n / DATA.shots.length * 100) + "%";
  document.getElementById("pcount").textContent = n + " of " + DATA.shots.length + " shots done";
  document.querySelectorAll("#filters .chip").forEach(c => c.classList.toggle("on", active.has(c.dataset.w)));
}

const refs = document.getElementById("refs");
DATA.chars.forEach(c => refs.appendChild(card(c, true)));
refs.appendChild(card(DATA.prop, true));
const fbox = document.getElementById("filters");
ALL.forEach(w => {
  const b = document.createElement("span"); b.className = "chip"; b.dataset.w = w; b.textContent = w;
  b.onclick = () => { active.has(w) ? active.delete(w) : active.add(w); render(); };
  fbox.appendChild(b);
});
document.getElementById("q").oninput = render;
document.getElementById("reset").onclick = () => { if (confirm("Clear all progress?")) { done = new Set(); save(); render(); } };
render();
</script></body></html>
`);

console.log(`shots ${shots.length}  refs ${CHARS.length + 1}  total numbered ${TOTAL}`);
console.log(`shots with references: ${shots.filter((s) => s.who.length).length}`);
console.log(`shots missing a Burmese gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
