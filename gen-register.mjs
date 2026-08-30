/**
 * Builds register.html for ဧည့်စာရင်း (The Guest Register).
 *
 *   node gen-register.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-register.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "5rzyahji4yh";

const STYLE =
  "An old traditional Burmese Buddhist monastery in rural Bago, present day, during a night of heavy "
  + "monsoon rain. Dark oiled teak floors and posts, carved wooden eaves, simple monastery furniture, "
  + "warm dim tungsten bulbs indoors and cold blue rain-light outside. Cinematic photorealism, quiet "
  + "and reverent rather than gothic, desaturated warm palette, 35mm film grain, shallow depth of "
  + "field, 16:9. The monastery and everything in it are treated with respect — never sinister. "
  + "No visible ghost, no corpse, no demon. NO LEGIBLE TEXT, LETTERING, SCRIPT, HANDWRITING OR NUMBERS "
  + "ANYWHERE IN THE IMAGE — no watermark.";

const CAST = [
  { name: "မင်းခန့်", en: "The man",
    prompt: "Burmese man of about 28, slim, short black hair, clean-shaven, a tired ordinary face. Plain "
      + "pale short-sleeved shirt, dark green checked longyi — a longyi, NOT trousers — barefoot. A "
      + "small pale scar above his LEFT eyebrow. Plain dark wall behind, warm lamplight from one side, "
      + "waist-up three-quarter view, neutral expression, photorealistic, natural colour." },
  { name: "ဆရာတော်", en: "The abbot",
    prompt: "A Burmese Buddhist monk in his seventies: shaven head, thin build, a calm and kindly lined "
      + "face, dark ochre-brown robe worn over one shoulder, round wire reading spectacles held in one "
      + "hand. Seated upright and dignified. He is a good man and must never look sinister, menacing or "
      + "uncanny in any shot. Plain teak wall behind, warm daylight, photorealistic, natural colour." },
];

/**
 * THE BOOK IS A SHAPE, NOT A DOCUMENT.
 *
 * This story is about handwriting, which is the one thing image models cannot
 * render — Burmese script comes back as convincing-looking nonsense. A page of
 * nonsense in a story whose entire point is what the page SAYS is worse than no
 * page at all. Every shot treats the register as an object: the cover, the
 * fore-edge, a hand across it, motion blur, a grazing angle. The narration and
 * the caption carry the words.
 */
const PROPS = [
  { name: "ဧည့်စာရင်း", en: "The register",
    prompt: "One thick hardbound ledger with a plain black cloth cover and no title of any kind, the "
      + "page block yellowed and swollen with damp, corners worn soft. CLOSED, lying flat on a plain "
      + "dark teak surface, photographed from slightly above and to the side so the cover and the edge "
      + "of the page block are visible and no page is open. Nothing written, printed or embossed "
      + "anywhere on it. Photorealistic, natural colour, warm lamplight." },
  { name: "ဓာတ်ပုံဟောင်း", en: "The old photograph",
    prompt: "An old black-and-white group photograph from the 1940s in a simple dark wooden frame: two "
      + "rows of Burmese Buddhist monks and young novices seated and standing before an old teak "
      + "monastery, one older monk seated at the centre, and a young man in ordinary lay clothes "
      + "standing at the back of the group. Grainy, faded, slightly foxed. The frame fills the picture "
      + "and any caption area below the image is cropped out of frame. Photorealistic, natural colour." },
];

const LOCS = [
  { name: "ဓမ္မာရုံ", en: "The dhamma hall",
    prompt: "The interior of a large old teak monastery hall: a broad dark polished plank floor, heavy "
      + "square timber posts, carved lintels, low windows with wooden shutters, a serene softly lit "
      + "Buddha image on a simple altar at the far end. Warm dim bulbs. Calm and reverent. Empty, no "
      + "people, no incident." },
  { name: "စားပွဲ", en: "The desk",
    prompt: "A low teak writing desk standing against a wall in a monastery hall, worn and simple, a "
      + "single bare bulb hanging above it, a wooden stool beside it, bare boards beneath. Empty desk "
      + "top, nothing on it. No people." },
  { name: "ကျောင်းဝင်း", en: "The monastery grounds",
    prompt: "The grounds of a rural Burmese monastery: a large old teak monastery building with a "
      + "tiered roof and carved eaves, a small whitewashed pagoda to one side, swept bare earth, a "
      + "wooden step with slippers left in a row at the bottom. Overcast, wet. Empty, no people." },
  { name: "ဧည့်ခန်း", en: "The guest room",
    prompt: "A small bare monastery guest sleeping area: a thin mattress laid directly on a dark teak "
      + "floor, a white mosquito net hung above it from a cord, a folded blanket, one dim bulb, a "
      + "shuttered window. Empty, no people." },
];

const WHO = {
  1: ["ဧည့်စာရင်း"], 6: ["ဆရာတော်"], 7: ["မင်းခန့်", "ဧည့်စာရင်း"], 8: ["ဧည့်စာရင်း"],
  9: ["မင်းခန့်"], 10: ["ဧည့်စာရင်း"], 11: ["ဧည့်စာရင်း"], 12: ["မင်းခန့်"], 13: ["မင်းခန့်"],
  14: ["မင်းခန့်", "ဧည့်စာရင်း"], 15: ["ဆရာတော်"], 16: ["ဆရာတော်"],
  17: ["ဆရာတော်", "ဧည့်စာရင်း"], 20: ["မင်းခန့်"], 21: ["မင်းခန့်"], 22: ["ဧည့်စာရင်း"],
  23: ["ဧည့်စာရင်း"], 24: ["မင်းခန့်", "ဧည့်စာရင်း"], 25: ["မင်းခန့်"], 26: ["ဧည့်စာရင်း"],
  27: ["မင်းခန့်"], 28: ["မင်းခန့်"], 29: ["မင်းခန့်", "ဧည့်စာရင်း"], 32: ["မင်းခန့်"],
  34: ["ဧည့်စာရင်း"], 35: ["မင်းခန့်"], 36: ["ဧည့်စာရင်း"], 37: ["မင်းခန့်"],
  38: ["ဓာတ်ပုံဟောင်း"], 39: ["ဓာတ်ပုံဟောင်း"], 40: ["ဓာတ်ပုံဟောင်း"], 41: ["မင်းခန့်"],
  42: ["ဓာတ်ပုံဟောင်း"], 44: ["မင်းခန့်", "ဆရာတော်"], 45: ["ဓာတ်ပုံဟောင်း"],
  46: ["ဆရာတော်", "ဓာတ်ပုံဟောင်း"], 47: ["ဆရာတော်"], 51: ["မင်းခန့်"], 52: ["ဧည့်စာရင်း"],
};
const WHERE = {
  1: "စားပွဲ", 3: "ကျောင်းဝင်း", 4: "ကျောင်းဝင်း", 5: "ကျောင်းဝင်း", 6: "ဓမ္မာရုံ",
  7: "စားပွဲ", 12: "စားပွဲ", 13: "ဓမ္မာရုံ", 15: "ဓမ္မာရုံ", 18: "ဓမ္မာရုံ",
  19: "ဧည့်ခန်း", 20: "ဧည့်ခန်း", 21: "စားပွဲ", 27: "စားပွဲ", 30: "ဓမ္မာရုံ",
  31: "ဓမ္မာရုံ", 32: "ဓမ္မာရုံ", 33: "ဓမ္မာရုံ", 34: "စားပွဲ", 37: "စားပွဲ",
  43: "ကျောင်းဝင်း", 44: "ဓမ္မာရုံ", 48: "စားပွဲ", 49: "ဓမ္မာရုံ", 50: "ကျောင်းဝင်း",
  52: "စားပွဲ",
};

const TITLES = ["Three times", "The road back", "Shelter", "Old teak", "The courtyard",
  "Write your name", "He opens it", "Yellowed pages", "Signing", "The pages turn",
  "1998", "Not born yet", "A namesake", "The same signature", "What did you find",
  "He takes off his glasses", "His hand shakes", "Nine o'clock", "The mosquito net", "Eleven",
  "He opens it again", "Going backwards", "Older and older", "1971", "Twenty-seven years",
  "Further back", "Nothing there", "ကျောင်းဝင်း", "He closes it", "Footsteps",
  "The hem of a robe", "Is that you, venerable?", "Wet footprints", "It is open again",
  "A line he didn't write", "The ink is still wet", "A name he has never heard",
  "The photograph", "1944", "The young man at the back", "The scar", "He puts it down",
  "Morning", "Who was U Zin Kawi", "And this man?", "The back of the photograph",
  "Which book did you sign", "The register is this one", "The cabinet", "He leaves",
  "Two days later", "ကျောင်းဝင်း again"];

const ACT = { 1: "The register", 6: "The first night", 18: "Eleven o'clock", 30: "Footsteps",
  38: "The photograph", 43: "Morning", 51: "Two days later" };

const db = new Database("/Users/puraidointern/video-lab/data/lab.db", { readonly: true });
const rows = db.prepare(
  "SELECT idx, units, image_prompt FROM scenes WHERE project_id=? ORDER BY idx").all(PROJECT);
db.close();
if (rows.length !== TITLES.length) throw new Error(`${rows.length} scenes vs ${TITLES.length} titles`);

let act = "";
const shots = rows.map((r) => {
  const n = r.idx + 1;
  if (ACT[n]) act = ACT[n];
  return { id: String(n), title: TITLES[r.idx], act, who: WHO[n] ?? [], where: WHERE[n] ?? null,
           raw: r.image_prompt, lines: JSON.parse(r.units).map((u) => u.text),
           mm: MM_SHOT[String(n)] || "" };
});

const NREF = CAST.length + PROPS.length + LOCS.length;
[...CAST, ...PROPS].forEach((c, i) => {
  c.mm = MM_REF[c.name] || "";
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}). A new and distinct subject; do not `
    + `repeat or vary any previous reference.\n\n${c.prompt}`;
});
LOCS.forEach((l, i) => {
  l.mm = MM_REF[l.name] || "";
  l.prompt = `Reference ${CAST.length + PROPS.length + 1 + i} of ${NREF} — ${l.en} (${l.name}), a `
    + `LOCATION plate. A new and distinct place; do not repeat or vary any previous reference. `
    + `Establish the place itself, empty of people and of incident.\n\n${l.prompt} ${STYLE}`;
});
shots.forEach((s, i) => {
  s.prompt = `Shot ${i + 1} of ${shots.length} — scene ${s.id}, "${s.title}". A new and distinct frame `
    + `in an ongoing sequence; do not repeat, vary or re-render any previous image.\n\n`
    + `${s.raw.trim()}\n\n${STYLE}`;
});

const NOTE = `<b style="color:#ffb4b4">Read this before you generate anything.</b>
  <br><br><b>Never render writing.</b> This story is about handwriting, and handwriting is the one thing
  the models get wrong — Burmese script comes back as convincing-looking nonsense. A page of nonsense in
  a story whose whole point is what the page <i>says</i> is worse than no page at all. It has already
  happened once on this channel: the receipt close-ups in စက်နံပါတ် ၇ came back covered in invented
  English.
  <br><br>So the register is <b>a shape, not a document</b>. The vocabulary is the closed cover, the
  fore-edge of the page block, a hand laid flat across the paper, pages fanning in motion blur, a
  grazing angle so steep the page foreshortens to a line — and above all <b>his face</b>. Where the
  narration quotes what is written — ကျောင်းဝင်း, ပြန်လာခြင်း, ဦးဇင်းကဝိ, ကျောင်းကပ္ပိယ — the shot is a
  reaction, not a page. The words land in the caption, where they will actually be legible.
  <br><br><b>If a generated image contains letterforms of any kind, throw it away and reshoot the angle
  steeper or closer.</b>
  <br><br><b>The monastery is not the villain.</b> The Buddha image is serene and softly lit and is never
  part of the horror. The abbot is kind, dignified and troubled — never sinister. The only supernatural
  image in the film is shot 31: the lower hem of a faded robe beyond a doorframe, everything above it
  hidden. No body, no hands, no face.
  <br><br>Build all ${NREF} references below and approve each before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/register.html", buildPage({
  title: "ဧည့်စာရင်း — image prompts",
  subtitle: `THE GUEST REGISTER · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "register.done.v1",
  note: NOTE, nav: NAV("register"),
  groups: [
    { heading: "People and objects — build these first", items: [...CAST, ...PROPS] },
    { heading: "Locations — one plate per recurring setting", items: LOCS },
  ],
  shots,
}));

const paper = shots.filter((s) => /page|paper|book|photograph|ink|ledger|notebook/i.test(s.raw)).length;
console.log(`shots ${shots.length}  refs ${NREF}  shots with paper in frame ${paper}/${shots.length}`);
LOCS.forEach((l) => console.log(`  ${l.name} (${l.en}): ${shots.filter((s) => s.where === l.name).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
