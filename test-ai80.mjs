// Read-only QA after rebuilding/syncing: node test-ai80.mjs
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import Database from '/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js';
import {SCENES,CAST,PROPS,LOCS} from './data-ai80.mjs';
import {TEXT} from './review-ai80.mjs';
const html=readFileSync(new URL('./ai80.html',import.meta.url),'utf8');
const page=JSON.parse(html.match(/^const DATA = (.*);$/m)[1]);
const refs=page.groups.flatMap(g=>g.items);
assert.equal(SCENES.length,99);
assert.equal(refs.length,CAST.length+PROPS.length+LOCS.length);
assert.equal(new Set(refs.map(r=>r.name)).size,refs.length);
assert.equal(page.shots.length,99);
assert.equal(new Set(SCENES.map(s=>s.d)).size,99);
for(const ref of refs) {
  assert.ok(ref.mm,`Missing reference gloss: ${ref.name}`);
  assert.ok(!/undefined|\bNaN\b/.test(ref.prompt));
}
for(const [index,s] of SCENES.entries()) {
  const n=index+1, shot=page.shots[index];
  assert.equal(shot.prompt,`Shot ${n} of 99 — "${s.t}".\n\n${s.p}\n\n${s.d}\n\n${s.style}`);
  assert.ok(s.d.startsWith('Detailed scene direction:'));
  assert.ok(s.g&&s.style.includes('16:9'));
  assert.ok(!/undefined|\bNaN\b/.test(shot.prompt));
  for(const name of [...shot.who,...(shot.where?[shot.where]:[])])
    assert.ok(refs.some(r=>r.name===name),`Unknown reference ${name} in ${n}`);
  for(const text of TEXT[n]||[]) assert.ok(s.style.includes(JSON.stringify(text)));
  if(!TEXT[n]) assert.ok(s.style.includes('No legible text or dates'));
}
assert.equal(CAST[1].sameAs,1);
assert.equal(CAST[6].sameAs,1);
for(const [name,numbers] of Object.entries({
  'ပုံရင်း၁၉၈၇':[8,9,10,12,17,18,53,83,87,88],
  'ဓာတ်ပုံမိသားစု':[42,43,44,45],
  'ပုံရင်းအိုမင်း':[92,93,95,96,97,98],
  'ကက်ဆက်':[42,46,47,51],
})) for(const n of numbers) assert.ok(SCENES[n-1].w.includes(name),`Missing photo/object master in ${n}`);
for(const n of [61,63,85,86]) assert.ok(SCENES[n-1].w.includes('သူငယ်ချင်း'));
for(const n of [72,80]) assert.notEqual(SCENES[n-1].l,'ဖုန်းဖန်သား','Grey phone must not attach black phone plate');
assert.deepEqual(TEXT[58],['15 SEP 2026']);
assert.deepEqual(TEXT[59],['16 SEP 2026','MISSING PERSON — PLEASE SHARE']);
assert.ok(!SCENES[29-1].w.includes('အဖေ'));
assert.ok(!/CARETAKER UNDER THE BED|အဖေ့မျက်နှာ ဘယ်တော့မှ မပေါ်ရဘူး/.test(html));

// Compare actual Burmese source, allowing documented board segmentation/cue differences.
const draft=readFileSync('/Users/puraidointern/video-lab/draft-scripts/1980.txt','utf8');
const sections=[...draft.matchAll(/^\[(\d+)\]\s*\n([\s\S]*?)(?=^\[\d+\]|$(?![\s\S]))/gm)];
const normal=s=>s.replace(/^##.*$/gm,'').replace(/\*\*|---|\s|—/g,'');
assert.equal(sections.length,99);
for(const [i,section] of sections.entries()) {
  assert.equal(Number(section[1]),i+1);
  if(i===57||i===58) continue;
  const source=i===67?section[2].replace('Knock. Knock. Knock.',''):section[2];
  assert.equal(normal(source),normal(SCENES[i].u.join('')),`Draft narration differs in ${i+1}`);
}
assert.equal(normal(sections[57][2]+sections[58][2]),normal([...SCENES[57].u,...SCENES[58].u].join('')));
const db=new Database('/Users/puraidointern/video-lab/data/lab.db',{readonly:true});
try {
  const rows=db.prepare('SELECT idx,units,image_prompt FROM scenes WHERE project_id=? ORDER BY idx').all('qa4p319rrcb');
  assert.equal(rows.length,99);
  rows.forEach((r,i)=>{
    assert.equal(r.idx,i);
    assert.equal(r.image_prompt,page.shots[i].prompt);
    assert.deepEqual(JSON.parse(r.units).map(u=>u.text),page.shots[i].lines);
    assert.equal(normal(page.shots[i].lines.join('')),normal(SCENES[i].u.join('')));
  });
} finally {db.close();}
console.log(`AI80 QA passed: 99 shot payloads, ${refs.length} references, photo continuity, scoped text, source narration and DB/page parity.`);
