/**
 * Shared page builder for the prompt sheets.
 *
 * Extracted when the third sheet arrived. The Extra Bowl page and the first
 * generator each carried their own copy of this markup, which is how two sheets
 * end up with different copy-button behaviour and nobody notices until someone
 * pastes a Burmese gloss into Flow.
 *
 * buildPage({ title, subtitle, storageKey, note, groups, shots, nav })
 *   groups : [{ heading, items }] — reference cards, rendered before the shots
 *   items  : { name, en, prompt, mm }
 *   shots  : { id, title, act, who[], where|null, prompt, mm, lines[] }
 */
export function buildPage({ title, subtitle, storageKey, note, groups, shots, nav = "" }) {
  const DATA = JSON.stringify({ groups, shots });
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
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
.nav{font-size:11.5px;color:var(--mute);margin-bottom:6px}
.nav a{margin-right:12px}
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
.tag.loc{background:#1f2b2a;border-color:#33474a;color:#8fd6c4}
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
  ${nav ? `<div class="nav">${nav}</div>` : ""}
  <h1>${title}</h1>
  <div class="sub">${subtitle}</div>
  <div class="tools">
    <input type="search" id="q" placeholder="Search prompts, titles, scene numbers…">
    <span id="filters"></span>
    <button class="ghost" id="reset">reset progress</button>
  </div>
  <div class="bar"><i id="pbar"></i></div>
  <div class="sub" id="pcount"></div>
</div></header>
<main>
  <div class="note">${note}</div>
  <div id="groups"></div>
  <section><h2>Shots</h2><div id="shots"></div><div class="empty" id="none" hidden>Nothing matches that filter.</div></section>
</main>
<script>
const DATA = ${DATA};
const KEY = ${JSON.stringify(storageKey)};
let done = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
let active = new Set();
const save = () => localStorage.setItem(KEY, JSON.stringify([...done]));
const ALL = [...new Set(DATA.shots.flatMap(s => s.who))];
const ALLOC = [...new Set(DATA.shots.map(s => s.where).filter(Boolean))];

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
    const t = document.createElement("span"); t.className = "ttl";
    t.textContent = o.en ? o.name + " — " + o.en : o.name;
    const a = document.createElement("span"); a.className = "act"; a.textContent = "reference";
    head.append(t, a);
  } else {
    const i = document.createElement("span"); i.className = "id"; i.textContent = o.id;
    const t = document.createElement("span"); t.className = "ttl"; t.textContent = o.title;
    const a = document.createElement("span"); a.className = "act"; a.textContent = o.act || "";
    head.append(i, t, a);
  }
  el.appendChild(head);
  if (!isRef) {
    const tags = document.createElement("div"); tags.className = "tags";
    (o.who || []).forEach(w => { const s = document.createElement("span"); s.className = "tag"; s.textContent = w; tags.appendChild(s); });
    if (o.where) { const s = document.createElement("span"); s.className = "tag loc"; s.textContent = o.where; tags.appendChild(s); }
    if (!(o.who || []).length && !o.where) { const s = document.createElement("span"); s.className = "tag none"; s.textContent = "no references — close-up, attach nothing"; tags.appendChild(s); }
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
    (!active.size || (s.who || []).some(w => active.has(w)) || active.has(s.where)) &&
    (!q || (s.id + " " + s.title + " " + s.prompt + " " + (s.act || "")).toLowerCase().includes(q)));
  const box = document.getElementById("shots"); box.textContent = "";
  list.forEach(s => box.appendChild(card(s, false)));
  document.getElementById("none").hidden = list.length > 0;
  const n = DATA.shots.filter(s => done.has(s.id)).length;
  document.getElementById("pbar").style.width = (n / DATA.shots.length * 100) + "%";
  document.getElementById("pcount").textContent = n + " of " + DATA.shots.length + " shots done";
  document.querySelectorAll("#filters .chip").forEach(c => c.classList.toggle("on", active.has(c.dataset.w)));
}

const gbox = document.getElementById("groups");
DATA.groups.forEach(g => {
  const sec = document.createElement("section");
  const h = document.createElement("h2"); h.textContent = g.heading; sec.appendChild(h);
  const d = document.createElement("div");
  g.items.forEach(it => d.appendChild(card(it, true)));
  sec.appendChild(d); gbox.appendChild(sec);
});
const fbox = document.getElementById("filters");
[...ALL, ...ALLOC].forEach(w => {
  const b = document.createElement("span"); b.className = "chip"; b.dataset.w = w; b.textContent = w;
  b.onclick = () => { active.has(w) ? active.delete(w) : active.add(w); render(); };
  fbox.appendChild(b);
});
document.getElementById("q").oninput = render;
document.getElementById("reset").onclick = () => { if (confirm("Clear all progress?")) { done = new Set(); save(); render(); } };
render();
</script></body></html>
`;
}
