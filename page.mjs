/**
 * Shared page builder for the prompt sheets.
 *
 * Extracted when the third sheet arrived. The Extra Bowl page and the first
 * generator each carried their own copy of this markup, which is how two sheets
 * end up with different copy-button behaviour and nobody notices until someone
 * pastes a Burmese gloss into Flow.
 *
 * buildPage({ title, subtitle, storageKey, note, groups, shots, nav, slug })
 *   groups : [{ heading, items }] — reference cards, rendered before the shots
 *   items  : { name, en, prompt, mm }
 *   shots  : { id, title, act, who[], where|null, prompt, mm, lines[] }
 *   slug   : filename stem for downloads; defaults to storageKey up to the first dot
 *
 * Every page also gets a Full script panel, a translation workspace and the
 * story sidebar — all derived from what is already passed in, so a sheet gains
 * them simply by being regenerated and no generator needs to know they exist.
 */
import { SHEET_COUNT } from "./nav.mjs";

export function buildPage({ title, subtitle, storageKey, note, groups, shots, nav = "",
                            slug = String(storageKey).split(".")[0] }) {
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
/* ---- Sidebar -------------------------------------------------------------
   Eighteen Burmese titles are a list, not a row of chips. Fixed rail on the
   left at desktop widths, an off-canvas drawer below 1080px. */
:root{--rail:248px}
.rail{position:fixed;top:0;left:0;bottom:0;width:var(--rail);z-index:40;
  background:#100d17;border-right:1px solid var(--edge);display:flex;flex-direction:column}
.railhead{padding:15px 16px 11px;border-bottom:1px solid var(--edge)}
.railhead b{display:block;font-size:12.5px;letter-spacing:.02em}
.railhead span{display:block;margin-top:2px;font-size:10.5px;color:var(--mute)}
.raillist{flex:1;overflow-y:auto;padding:8px;scrollbar-width:thin}
.raillist::-webkit-scrollbar{width:6px}
.raillist::-webkit-scrollbar-thumb{background:var(--edge);border-radius:99px}
.navrow{display:block;padding:8px 10px;border-radius:8px;text-decoration:none;
  border:1px solid transparent;margin-bottom:2px}
.navrow:hover{background:var(--panel);border-color:var(--edge)}
.navlabel{display:block;font-size:12.5px;line-height:1.5;color:var(--text);
  font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",system-ui,sans-serif}
.navmeta{display:block;margin-top:1px;font-size:10px;color:var(--mute);
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.navrow.on{background:var(--panel);border-color:var(--accent)}
.navrow.on .navlabel{color:var(--accent);font-weight:700}
.railtoggle{display:none;position:fixed;top:10px;left:10px;z-index:60;
  background:var(--panel);border:1px solid var(--edge);color:var(--text);
  border-radius:8px;padding:7px 11px;font-size:16px;line-height:1;cursor:pointer}
.scrim{display:none;position:fixed;inset:0;z-index:35;background:rgba(0,0,0,.6)}
body.railopen .scrim{display:block}
.shell{margin-left:var(--rail)}
@media(max-width:1080px){
  .rail{transform:translateX(-100%);transition:transform .18s ease}
  body.railopen .rail{transform:none}
  .railtoggle{display:block}
  .shell{margin-left:0}
  header{padding-left:56px}
}
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
/* A shot whose prompt was rewritten after the board was first built. The
   accent survives the .done fade so a revised shot stays findable even
   after it has been ticked off. */
.card.rev{border-left:3px solid var(--color-accent,#7dd3fc)}
.revtag{margin-left:auto;font-size:11px;letter-spacing:.02em;padding:2px 7px;border-radius:999px;
  background:var(--color-accent,#7dd3fc);color:#04141c;font-weight:600;white-space:nowrap}
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
.script{max-height:60vh;overflow:auto;background:var(--ink);border:1px solid var(--edge);border-radius:8px;padding:14px 18px;margin-top:9px}
.script p{margin:0 0 13px;font-size:15px;line-height:2.05;color:#ddd7ec;
  font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",system-ui,sans-serif}
.script p:last-child{margin-bottom:0}
.script .sn{display:inline-block;min-width:32px;color:var(--accent);font-weight:800;font-size:11px;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;vertical-align:2px;user-select:none}
textarea{width:100%;min-height:300px;resize:vertical;margin-top:9px;background:var(--ink);
  border:1px solid var(--edge);color:var(--text);border-radius:8px;padding:12px 14px;outline:none;
  font:15px/2 "Noto Sans Myanmar","Myanmar Text","Padauk",ui-sans-serif,system-ui,sans-serif}
textarea:focus{border-color:var(--accent)}
.saved{color:var(--ok)}
/* Reader — a full-page column for actually reading, rather than a scroll box. */
.reader{position:fixed;inset:0;z-index:50;background:#0e0b15;overflow-y:auto;display:none}
.reader.on{display:block}
.rbar{position:sticky;top:0;background:rgba(14,11,21,.97);backdrop-filter:blur(8px);
  border-bottom:1px solid var(--edge);padding:10px 16px;display:flex;gap:8px;align-items:center}
.rbar .rtitle{flex:1;font-size:13px;color:var(--mute);font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",system-ui,sans-serif}
.rbar button{padding:6px 11px;font-size:12px}
.rwrap{max-width:740px;margin:0 auto;padding:26px 22px 120px}
.rwrap p{margin:0 0 1.15em;color:#e6e1f2;line-height:2.1;
  font-family:"Noto Sans Myanmar","Myanmar Text","Padauk",ui-sans-serif,system-ui,sans-serif;
  white-space:pre-wrap;word-break:break-word}
.rwrap .sn{display:block;color:var(--accent);font-weight:800;font-size:11px;letter-spacing:.08em;
  font-family:ui-monospace,SFMono-Regular,Menlo,monospace;margin:1.6em 0 .5em;user-select:none}
.rwrap .sn:first-child{margin-top:0}
body.locked{overflow:hidden}
/* The reader is full-screen; the drawer button must not float over it. */
body.locked .railtoggle{display:none}
@media(max-width:560px){.tools{gap:6px}main{padding:14px}}
</style></head><body>
${nav ? `<button class="railtoggle" id="railtoggle" aria-label="Stories">☰</button>
<div class="scrim" id="scrim"></div>
<nav class="rail" id="rail">
  <div class="railhead"><b>ညနက်ပုံပြင်</b><span>${SHEET_COUNT} stories · newest first</span></div>
  <div class="raillist">${nav}</div>
</nav>` : ""}
<div class="shell">
<header><div class="wrap">
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
  <section>
    <h2>Full script</h2>
    <div class="card">
      <div class="top">
        <span class="ttl">The whole narration, in order</span>
        <span class="act" id="scriptStats"></span>
      </div>
      <div class="row">
        <button id="readScript">read full screen</button>
        <button class="ghost" id="cpPlain">copy script</button>
        <button class="ghost" id="cpMarked">copy with [shot] markers</button>
        <button class="ghost" id="dlScript">save as .txt file</button>
      </div>
      <details id="scriptDet" open>
        <summary>hide the script</summary>
        <div class="script" id="scriptBody"></div>
      </details>
    </div>
    <div class="card">
      <div class="top">
        <span class="ttl">Translation workspace</span>
        <span class="act" id="trSaved">saved in this browser only</span>
      </div>
      <textarea id="tr" placeholder="Paste the translation back here. It saves as you type. Use “read full screen” to read it comfortably, and “save as .txt file” to get a file you can hand back."></textarea>
      <div class="row">
        <button id="readTr">read full screen</button>
        <button class="ghost" id="cpTr">copy</button>
        <button class="ghost" id="dlTr">save as .txt file</button>
        <button class="ghost" id="clrTr">clear</button>
        <span class="act" id="trStats"></span>
      </div>
    </div>
  </section>
  <div class="reader" id="reader" role="dialog" aria-modal="true">
    <div class="rbar">
      <span class="rtitle" id="rtitle"></span>
      <button class="ghost" id="rSmaller" title="smaller text">A−</button>
      <button class="ghost" id="rBigger" title="larger text">A+</button>
      <button id="rClose">close</button>
    </div>
    <div class="rwrap" id="rwrap"></div>
  </div>
  <div id="groups"></div>
  <section><h2>Shots</h2><div id="shots"></div><div class="empty" id="none" hidden>Nothing matches that filter.</div></section>
</main>
</div>
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
    if (o.rev) {
      el.classList.add("rev");
      const r = document.createElement("span"); r.className = "revtag"; r.textContent = o.rev;
      head.appendChild(r);
    }
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

/* ---- Sidebar --------------------------------------------------------------
 * Eighteen rows do not fit a short list, so scroll the current story into view.
 * Below 1080px the rail is off-canvas and the ☰ button opens it; scrim, Escape
 * and following a link all close it again.
 */
{
  const rail = document.getElementById("rail");
  if (rail) {
    const cur = rail.querySelector(".navrow.on");
    if (cur) {
      const list = cur.parentElement;
      const off = cur.offsetTop - list.clientHeight / 2 + cur.clientHeight / 2;
      list.scrollTop = Math.max(0, off);
    }
    const close = () => document.body.classList.remove("railopen");
    document.getElementById("railtoggle").onclick = () => document.body.classList.toggle("railopen");
    document.getElementById("scrim").onclick = close;
    rail.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }
}

/* ---- Full script and translation workspace --------------------------------
 * Built from the same shot data the cards use, so the script shown here and the
 * script the film narrates cannot drift apart.
 *
 * The [shot] marker form is the one that matters. Translators — human or model —
 * merge short sentences into paragraphs, which is why mapping an English cut back
 * onto its pictures has so far been hand work: 251 Burmese units came back as 154
 * English lines on the last one. A translation that returns with [n] intact can be
 * split back onto its shots mechanically instead.
 */
const SLUG = ${JSON.stringify(slug)};
const SCRIPT = DATA.shots.map(s => ({ id: s.id, lines: s.lines || [] })).filter(s => s.lines.length);
const plainText = () => SCRIPT.map(s => s.lines.join("\\n")).join("\\n\\n");
const markedText = () => SCRIPT.map(s => "[" + s.id + "]\\n" + s.lines.join("\\n")).join("\\n\\n");

function download(name, text) {
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
  const a = document.createElement("a");
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

(function fullScript() {
  const body = document.getElementById("scriptBody");
  let lines = 0, chars = 0;
  SCRIPT.forEach(s => {
    const p = document.createElement("p");
    const n = document.createElement("span");
    n.className = "sn"; n.textContent = s.id;
    p.appendChild(n);
    s.lines.forEach((l, i) => {
      if (i) p.appendChild(document.createElement("br"));
      p.appendChild(document.createTextNode(l));
      lines++; chars += [...l].length;
    });
    body.appendChild(p);
  });
  document.getElementById("scriptStats").textContent =
    SCRIPT.length + " shots · " + lines + " lines · " + chars.toLocaleString() + " characters";
  document.getElementById("scriptDet").ontoggle = function () {
    this.querySelector("summary").textContent = this.open ? "hide the script" : "show the script";
  };
  document.getElementById("cpPlain").onclick = e => copy(plainText(), e.target);
  document.getElementById("cpMarked").onclick = e => copy(markedText(), e.target);
  document.getElementById("dlScript").onclick = () => download(SLUG + "-script.txt", markedText());
})();

/* ---- Reader ---------------------------------------------------------------
 * Myanmar script is hard to read small, and a 430px scroll box inside a card was
 * the wrong place to read fifteen thousand characters. This is a plain full-page
 * column with adjustable type — no cards, no chrome, nothing else on screen.
 */
const reader = (function () {
  const el = document.getElementById("reader");
  const wrap = document.getElementById("rwrap");
  const titleEl = document.getElementById("rtitle");
  const SZKEY = "reader.size";
  let size = Number(localStorage.getItem(SZKEY)) || 17;

  const applySize = () => {
    wrap.style.fontSize = size + "px";
    localStorage.setItem(SZKEY, String(size));
  };
  const close = () => {
    el.classList.remove("on");
    document.body.classList.remove("locked");
  };
  const open = (title, build) => {
    titleEl.textContent = title;
    wrap.textContent = "";
    build(wrap);
    applySize();
    el.classList.add("on");
    document.body.classList.add("locked");
    el.scrollTop = 0;
  };

  document.getElementById("rClose").onclick = close;
  document.getElementById("rBigger").onclick = () => { size = Math.min(30, size + 1); applySize(); };
  document.getElementById("rSmaller").onclick = () => { size = Math.max(12, size - 1); applySize(); };
  document.addEventListener("keydown", e => { if (e.key === "Escape" && el.classList.contains("on")) close(); });

  return { open };
})();

document.getElementById("readScript").onclick = () =>
  reader.open(document.title.split(" — ")[0] + " · full script", wrap => {
    SCRIPT.forEach(s => {
      const n = document.createElement("span");
      n.className = "sn"; n.textContent = "SHOT " + s.id;
      wrap.appendChild(n);
      s.lines.forEach(l => {
        const p = document.createElement("p"); p.textContent = l; wrap.appendChild(p);
      });
    });
  });

document.getElementById("readTr").onclick = () => {
  const v = document.getElementById("tr").value;
  reader.open("Translation", wrap => {
    if (!v.trim()) {
      const p = document.createElement("p");
      p.style.color = "#9b93ae";
      p.textContent = "Nothing in the workspace yet. Paste a translation into the box first.";
      wrap.appendChild(p);
      return;
    }
    // Blank-line-separated blocks become paragraphs; a lone [n] becomes a heading,
    // so a marked translation reads the same way the script does.
    v.split(/\\n\\s*\\n/).forEach(block => {
      const t = block.trim();
      if (!t) return;
      const m = /^\\[(\\d+)\\]\\s*([\\s\\S]*)$/.exec(t);
      if (m) {
        const n = document.createElement("span");
        n.className = "sn"; n.textContent = "SHOT " + m[1];
        wrap.appendChild(n);
        if (m[2].trim()) { const p = document.createElement("p"); p.textContent = m[2].trim(); wrap.appendChild(p); }
      } else {
        const p = document.createElement("p"); p.textContent = t; wrap.appendChild(p);
      }
    });
  });
};

(function workspace() {
  const ta = document.getElementById("tr");
  const TRKEY = KEY + ".translation";
  const saved = document.getElementById("trSaved");
  const stats = document.getElementById("trStats");
  ta.value = localStorage.getItem(TRKEY) || "";

  const count = () => {
    const v = ta.value;
    const marks = (v.match(/^\\s*\\[\\d+\\]\\s*$/gm) || []).length;
    stats.textContent = v.trim()
      ? [...v].length.toLocaleString() + " characters"
        + (marks ? " · " + marks + " of " + SCRIPT.length + " shot markers kept" : " · no shot markers")
      : "";
  };
  let t = null;
  ta.oninput = () => {
    count();
    clearTimeout(t);
    saved.textContent = "saving…"; saved.className = "act";
    t = setTimeout(() => {
      localStorage.setItem(TRKEY, ta.value);
      saved.textContent = "saved ✓"; saved.className = "act saved";
      setTimeout(() => { saved.textContent = "saved in this browser only"; saved.className = "act"; }, 1600);
    }, 400);
  };
  document.getElementById("cpTr").onclick = e => copy(ta.value, e.target);
  document.getElementById("dlTr").onclick = () => {
    if (!ta.value.trim()) return alert("Nothing to save yet — the workspace is empty.");
    download(SLUG + "-english.txt", ta.value);
  };
  document.getElementById("clrTr").onclick = () => {
    if (!ta.value || confirm("Clear the translation? This cannot be undone.")) {
      ta.value = ""; localStorage.removeItem(TRKEY); count();
    }
  };
  count();
})();

render();
</script></body></html>
`;
}
