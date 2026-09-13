// Explicitly sync a reviewed board without changing narration, audio or generated images.
// Usage: node sync-reviewed-prompts.mjs phoewa
import Database from '/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js';
const projects = {phoewa:'6xgwglt20ja',seat:'8aoa3ikurwm',tree:'65poyp3y6t7',hosp:'5gnacd16p4h',drown:'oyqaecgczep',ai80:'qa4p319rrcb'};
const slug=process.argv[2];
if(!projects[slug]) throw new Error('Specify a supported reviewed story: '+Object.keys(projects).join(', '));
const {SCENES,CAST,LOCS,PROPS=[]}=await import(`./data-${slug}.mjs`);
const db=new Database('/Users/puraidointern/video-lab/data/lab.db');
try {
  const rows=db.prepare('SELECT * FROM scenes WHERE project_id=? ORDER BY idx').all(projects[slug]);
  if(rows.length!==SCENES.length) throw new Error('Scene count mismatch');
  const refs=new Set([...CAST,...PROPS,...LOCS].map(r=>r.name));
  const normal=s=>s.replace(/\s/g,'');
  rows.forEach((r,i)=>{
    const s=SCENES[i];
    if(r.idx!==i||normal(JSON.parse(r.units).map(u=>u.text).join(''))!==normal(s.u.join(''))) throw new Error('Narration/order mismatch at '+(i+1));
    if([...(s.w||[]),...(s.l?[s.l]:[])].some(ref=>!refs.has(ref))) throw new Error('Unknown reference at '+(i+1));
  });
  const keep=rows=>JSON.stringify(rows.map(({image_prompt,updated_at,...rest})=>rest));
  const before=keep(rows);
  const update=db.prepare('UPDATE scenes SET image_prompt=?, updated_at=? WHERE id=?');
  db.transaction(()=>{
    rows.forEach((r,i)=>{
      const s=SCENES[i];
      if(r.idx!==i||!s.d?.startsWith('Detailed scene direction:')||!s.style) throw new Error('Incomplete review at '+(i+1));
      const prompt=`Shot ${i+1} of ${rows.length} — "${s.t}".\n\n${s.p}\n\n${s.d}\n\n${s.style}`;
      if(r.image_prompt!==prompt) update.run(prompt,Date.now(),r.id);
    });
    if(keep(db.prepare('SELECT * FROM scenes WHERE project_id=? ORDER BY idx').all(projects[slug]))!==before) throw new Error('Non-prompt data changed');
  })();
  console.log(`${slug}: synced ${rows.length} reviewed prompts; narration, audio, image paths and scene IDs preserved`);
} finally {db.close();}
