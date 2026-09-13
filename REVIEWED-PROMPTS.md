# Reviewed image prompts

The Pho Wa, Seat Seventeen, Tree, Hospital, Drowning and 1980 boards load a
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
| 1980.txt | ai80 | 99 |

Generators assemble image prompts from the reviewed board, so rebuilding no
longer silently ignores image-prompt edits in these reviewed data modules. The
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

## 1980 photo continuity

`review-ai80.mjs` also exports `PROPS`: three reusable photo masters and the
recovered cassette. Generate people first, then the photo masters using their
listed identity references. Reuse those exact masters for inserts and zooms.
The house's 1987 variant explicitly depends on its modern architecture plate.
`gen-ai80.mjs` validates that reference dependencies exist and precede consumers.
After syncing and building, run `node test-ai80.mjs` for read-only payload,
reference, text-scope, source-narration and database/page-parity checks.

PHOTO A is the fourth portrait and matching received archival scan; PHOTO B
is the recovered couple photograph; PHOTO C is the elderly portrait with the
calendar and LEFT wristband present from its first appearance. Master photographs
are 3:2; final scene frames are 16:9. `TEXT` scopes readable strings to individual
shots. If generated lettering is wrong, correct it in the image/video edit without
regenerating the established photograph. Prompts cannot guarantee exact typography.

Narration is unchanged. The source calls October 18 the disappearance date in
shot 21 but calls October 17 the disappearance anniversary in the ending.
The review preserves each specified on-screen date rather than silently rewriting
the script. Thun's black phone is taped from shot 62; her friend's untaped grey
phone supplies CCTV, video calls and the later live camera view.

The existing board places the empty-room forecast in shot 58 and the missing-person
post in 59; draft section 59 contains both. Prompts retain the board split to match
its existing narration/audio. Draft section 68 also writes out the knocking sound
that the board treats as a cue. Neither narration nor cues were edited.
