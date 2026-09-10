/**
 * Rebuild every sheet.
 *
 *   node build.mjs
 *
 * WHY THIS EXISTS. The nav is baked into each page at generation time, so a page
 * only lists the stories that existed when it was last written. Adding a story
 * and running only its own generator leaves the other seventeen pointing at the
 * old list — which is exactly what happened: drown.html knew about all eighteen
 * sheets, flower.html knew seventeen, and the other sixteen had never heard of
 * either. The new stories were unreachable from anywhere but themselves.
 *
 * So: after adding a story, run THIS, not the single generator. It also verifies
 * afterwards that every page ended up with the full nav, which is the check that
 * would have caught the drift on the day it happened.
 */
import { readdir, readFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { SHEET_COUNT } from "./nav.mjs";

const run = promisify(execFile);
const DIR = "/Users/puraidointern/ghost-prompts-site";

const gens = (await readdir(DIR)).filter((f) => /^gen-.*\.mjs$/.test(f)).sort();
console.log(`rebuilding ${gens.length} sheets against a nav of ${SHEET_COUNT}\n`);

const failed = [];
for (const g of gens) {
  try {
    const { stdout } = await run("node", [g], { cwd: DIR, maxBuffer: 1 << 24 });
    console.log(`  ${g.padEnd(20)} ok   ${stdout.split("\n")[0]}`);
  } catch (e) {
    failed.push(g);
    console.log(`  ${g.padEnd(20)} FAILED`);
    console.log(String(e.stderr || e.message).split("\n").slice(0, 4).map((l) => `      ${l}`).join("\n"));
  }
}

// Verify, rather than assume: count the nav links actually present in each file.
console.log("\nnav check:");
const pages = (await readdir(DIR)).filter((f) => f.endsWith(".html")).sort();
const short = [];
for (const p of pages) {
  const html = await readFile(`${DIR}/${p}`, "utf8");
  const n = (html.match(/class="navrow/g) || []).length;
  const cur = /aria-current="page"/.test(html);
  if (n !== SHEET_COUNT || !cur) short.push(`${p} (${n} links${cur ? "" : ", no current"})`);
}
console.log(short.length
  ? `  INCOMPLETE:\n${short.map((s) => `    ${s}`).join("\n")}`
  : `  all ${pages.length} pages carry the full ${SHEET_COUNT}-sheet nav`);

if (failed.length) { console.error(`\n${failed.length} generator(s) failed`); process.exit(1); }
if (short.length) process.exit(1);
