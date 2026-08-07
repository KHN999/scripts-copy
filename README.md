# The Extra Bowl — image prompt sheet

A one-page static site so the image work can be handed to someone else. It lists every shot with its
prompt, a copy button, and which characters to attach in Google Flow.

No build step, no dependencies, no server. `index.html` is the whole site.

## Deploy

From this folder:

```
npx vercel --prod
```

First run asks a couple of questions (link to an account, name the project); answer them once and
every later deploy is the same one command. Vercel serves a folder containing `index.html` as a
static site with no configuration.

The alternative, if you'd rather not use the CLI: drag this folder onto
[vercel.com/new](https://vercel.com/new).

## Preview locally

Open `index.html` in a browser — it works straight from disk. Or:

```
python3 -m http.server 8899
```

## What the page does

- **References first.** Seven cards at the top: six characters and the blue bowl. These get built and
  approved before anything else, because everything downstream inherits them.
- **58 shot cards**, each with its scene number, act, the characters to attach, and the prompt.
- **Copy button** on every prompt. Falls back to a hidden textarea on browsers that block the
  clipboard API, so it works over plain HTTP too.
- **Filter by character** — tap `Kyaw Zin` to see only his shots, useful for working through one
  character's reference in a batch while it's fresh.
- **Search** across prompts, titles, acts and scene numbers.
- **Mark done**, with a progress bar. Kept in `localStorage`, so it survives a refresh but lives in
  that one browser on that one machine — it is a personal checklist, not shared state.
- **Narration** is tucked behind a disclosure on each card, for when a prompt is ambiguous and the
  Burmese makes the intent obvious.

## Regenerating

The page is generated from the parsed scene prep, not hand-written. Editing `index.html` by hand is
fine for a quick fix, but a regeneration overwrites it — put lasting prompt changes in the generator
(`site.mjs` in the scratchpad) or in `video-lab/GHOST-02-FLOW-PROMPTS.md`, which carries the same
content as a document.
