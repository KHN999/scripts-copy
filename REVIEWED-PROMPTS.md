# Reviewed image prompts

The Pho Wa, Seat Seventeen, Tree, Hospital and Drowning boards now load a
`review-<slug>.mjs` module at the end of their `data-<slug>.mjs` file.

The original board retains narration, cues and shot order. The review module
adds one individually authored direction per shot, expands reference identities,
corrects conflicting scene descriptions and reference assignments, and defines
the final scene-specific continuity and style rules. Edit those review modules
for the reviewed character descriptions and continuity decisions; their explicit
overrides take precedence over the original board fields.

| Script | Sheet slug | Shots |
| --- | --- | --- |
| phoewayoke.txt | phoewa | 175 |
| rollno17.txt | seat | 72 |
| onthetree.txt | tree | 77 |
| hospital.txt | hosp | 129 |
| drowning.txt | drown | 113 |

Generators assemble image prompts from the reviewed board, so rebuilding no
longer silently ignores image-prompt edits in these five data modules. The
database still supplies the narration displayed on each card.

After editing a reviewed board, sync that story's prompts to video-lab, then
rebuild the page:

```sh
node sync-reviewed-prompts.mjs phoewa
node gen-phoewa.mjs
```

The sync validates narration/order and references before changing only
`image_prompt` and its update timestamp. It preserves scene IDs, narration,
audio, generated image paths and all other fields. Running it again with
unchanged prompts does not update timestamps. It never generates images or audio.

`node build.mjs` rebuilds all sheets and checks navigation, but does not write
to the database. Never edit built HTML by hand. Push to `main` deploys via the
existing GitHub/Vercel integration.
