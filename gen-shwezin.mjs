/**
 * Builds shwezin.html for ဇာတ်ခုံအောက် (Under the Stage).
 *
 *   node gen-shwezin.mjs
 */
import { writeFile } from "node:fs/promises";
import Database from "/Users/puraidointern/video-lab/node_modules/better-sqlite3/lib/index.js";
import { MM_SHOT, MM_REF } from "./mm-shwezin.mjs";
import { buildPage } from "./page.mjs";
import { NAV } from "./nav.mjs";

const PROJECT = "2v13tywg9g7";

const STYLE =
  "Rural upper Myanmar, Sagaing Region, roughly the 1990s — no phones except one old button handset, "
  + "no LED, no printed banners, no modern branding. A travelling zat pwe troupe on tour: a temporary "
  + "stage of bamboo poles and rough timber planking under a corrugated roof, hung with brightly "
  + "printed and hand-painted canvas curtains — palaces, forests, hot pinks and golds — lit by bare "
  + "incandescent bulbs strung on twisted wire. A hsaing waing orchestra at one side. Behind it, "
  + "canvas dressing tents, hurricane lanterns, costume trunks, rolled backdrops, a valve amplifier. "
  + "Dry-zone country — tamarind, toddy palms, cracked pale earth, dust in every beam. Cinematic "
  + "photorealism, warm tungsten and saturated stage colour against deep night, shallow depth of "
  + "field, 35mm film grain, 16:9. No legible text, lettering or numbers anywhere in the image, no "
  + "watermark, no gore.";

const CAST = [
  { name: "သက်နိုင်", en: "Thae Naing — the narrator",
    prompt: "Burmese man of 24, slim, short black hair, a plain short-sleeved shirt and a checked "
      + "cotton longyi, rubber slippers. He works sound and the orchestra side of the stage — crew, "
      + "not a performer, and must never look glamorous. Working hands, a coil of cable over one "
      + "shoulder. Plain neutral background, waist-up three-quarter view, warm bulb light, "
      + "photorealistic, natural colour." },
  { name: "မရွှေဇင် (ဇာတ်ဝတ်စုံ)", en: "Ma Shwe Zin — in costume",
    prompt: "Burmese woman of 28, the troupe's leading lady, in FULL traditional zat performance "
      + "dress: a fitted long-sleeved jacket dense with sequins and gold thread, a shwe-chi-htoe "
      + "htamein with a stiff flared train sweeping behind her, a tiered jewelled headdress, gold ear "
      + "ornaments and bangles, heavy stage make-up with strongly drawn brows and reddened lips. She "
      + "is warm-skinned, poised and completely alive. Plain neutral background, three-quarter view "
      + "from the knees up so the train reads, warm stage light, photorealistic, natural colour." },
  { name: "မရွှေဇင် (သာမန်အဝတ်)", en: "Ma Shwe Zin — off stage, THE SAME WOMAN",
    prompt: "THE SAME WOMAN as the previous reference — same face, same age, same build, "
      + "unmistakably one person — but off stage: a plain everyday buttoned blouse and a simple "
      + "htamein, hair pinned up, no stage make-up, no ornaments beyond small gold earrings. Tired, "
      + "warm, ordinary. Do not make her a different woman and do not alter her features. Plain "
      + "neutral background, waist-up three-quarter view, soft warm light, photorealistic, natural "
      + "colour." },
  { name: "ဦးဘမြင့်", en: "U Ba Myint — the troupe owner",
    prompt: "Burmese man of about 55, heavy build, thinning oiled hair combed back, a good buttoned "
      + "jacket over a longyi, a gold ring, reading glasses hung on a cord at his chest. A "
      + "respectable, well-fed, publicly warm face with something withheld behind the eyes. He must "
      + "read as a man people defer to, not as a villain. Plain neutral background, waist-up "
      + "three-quarter view, warm light, photorealistic, natural colour." },
  { name: "ပျောက်သွားတဲ့နှစ်ယောက်", en: "The two who vanished — a MEMORY reference",
    prompt: "Two Burmese men in their mid-twenties in plain short-sleeved shirts and longyis, working "
      + "crew — one lean and taller, one shorter and stockier. Both completely ordinary, alive, "
      + "unremarkable and slightly cheerful. They appear only in a memory image; nothing has happened "
      + "to them yet. Plain neutral background, waist-up, flat daylight, photorealistic, natural "
      + "colour." },
];

const LOCS = [
  { name: "ဇာတ်ခုံ", en: "The stage",
    prompt: "A travelling zat pwe stage on a village festival ground: a temporary platform of bamboo "
      + "poles and rough timber planks about chest height, roofed in corrugated iron, hung at the "
      + "back and sides with brightly printed and hand-painted canvas curtains — a gilded palace "
      + "hall, a forest, hot pinks and golds. Bare incandescent bulbs on twisted wire strung across "
      + "the front, a wooden valve amplifier and horn speakers lashed to the posts. At one side sits "
      + "the hsaing waing: a pat waing — twenty-one tuned drums slung inside a tall circular gilded "
      + "frame with mirror-glass inlay — with a kyi waing gong circle, a rack of hanging maung gongs, "
      + "a hne oboe, and si and wa hand percussion. Empty, no people." },
  { name: "ခုံနောက်", en: "Backstage — where half this film happens",
    prompt: "The working area behind a zat pwe stage at night: two or three canvas dressing tents "
      + "with their flaps open, hurricane lanterns hung from bamboo, wooden costume trunks with "
      + "their lids up, rolled painted canvas backdrops leaning against poles, a crate of stage "
      + "lamps, coiled cable, a valve amplifier, a folding table. Packed dry earth underfoot, warm "
      + "pools of lantern light and deep shadow between them. Empty, no people." },
  { name: "ပွဲခင်း", en: "The festival ground",
    prompt: "The audience ground in front of a zat pwe stage at night: rows of mismatched plastic and "
      + "wooden chairs on bare dusty earth, straw mats spread behind them, a low string of bulbs "
      + "overhead, tamarind trees and toddy palms at the edges, dry scrub beyond, litter and dust. "
      + "Shot from the stage looking out so the empty chairs fill the lower frame. Empty, no people." },
  { name: "ဇာတ်ခုံအောက်", en: "Under the stage — the crawl space",
    prompt: "The crawl space beneath a bamboo festival stage: a low dark void of packed earth between "
      + "heavy timber joists and bamboo props, barely tall enough to crouch in, stacked with wooden "
      + "crates, spare bamboo poles, rolled canvas and an old woven mat. Cobwebs, dust, thin bars of "
      + "stage light falling through gaps in the planking above. Lit only by one small handheld light "
      + "source low in frame. Empty, no people." },
];

const TITLES = [
  "She comes back on stage", "Twenty-four years old", "Shwe Nadi Thabin", "Ma Shwe Zin",
  "She fed the children", "That laugh", "U Ba Myint", "The cash box", "She wasn't afraid",
  "A Sagaing pagoda festival", "If anything happens to me", "The cloth bag",
  "She looks at the tent", "That's not all", "The two who vanished", "They didn't run",
  "Time to change", "The first night", "Watching from the wings", "Two in the morning",
  "I find her", "Blood at her lip", "The bag...", "Under the stage...", "Her hand falls",
  "The village medic", "I didn't believe it", "The funeral", "I don't dare open it",
  "A contract is a contract", "The orchestra stops", "★ She returns", "The audience cheers",
  "Nobody is playing", "She looks at his chair", "The wrong lyrics", "She points at the boards",
  "I go under", "The crawl space", "The iron sheet", "★ The pit", "Ko Tun's watch",
  "Two identity cards", "The knife", "You're already dead", "★ It passes through",
  "Where did you put them?", "The bulb bursts", "He confesses", "A sad smile",
  "They block the steps", "The recorder", "Her letter", "They take him away", "Poisoned",
  "She comes back once more", "Is it over?", "Why did you come back?", "Can't you stay?",
  "★ The bow", "The lights go out", "Don't only say I was a ghost", "Years later",
  "When I hear the hsaing waing", "One clap",
];

const ACT = {
  1: "The night after she died", 2: "Shwe Nadi Thabin", 10: "Sagaing",
  18: "The first night", 26: "After", 30: "The second night", 38: "Under the stage",
  44: "The knife", 52: "The bag", 56: "Before dawn", 63: "Years later",
};

const WHO = {
  1: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"], 2: ["သက်နိုင်"], 4: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"],
  5: ["မရွှေဇင် (သာမန်အဝတ်)"], 6: ["မရွှေဇင် (သာမန်အဝတ်)", "သက်နိုင်"], 7: ["ဦးဘမြင့်"],
  8: ["ဦးဘမြင့်"], 9: ["မရွှေဇင် (သာမန်အဝတ်)", "ဦးဘမြင့်"],
  11: ["မရွှေဇင် (သာမန်အဝတ်)", "သက်နိုင်"], 12: ["မရွှေဇင် (သာမန်အဝတ်)", "သက်နိုင်"],
  13: ["မရွှေဇင် (သာမန်အဝတ်)"], 14: ["သက်နိုင်"], 15: ["ပျောက်သွားတဲ့နှစ်ယောက်"],
  16: ["မရွှေဇင် (သာမန်အဝတ်)"], 19: ["သက်နိုင်"], 21: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"],
  22: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)", "သက်နိုင်"], 23: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)", "သက်နိုင်"],
  24: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"], 25: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)", "သက်နိုင်"], 26: ["ဦးဘမြင့်"],
  27: ["သက်နိုင်"], 29: ["သက်နိုင်"], 30: ["ဦးဘမြင့်"], 32: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"],
  35: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"], 36: ["ဦးဘမြင့်"], 37: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"],
  38: ["သက်နိုင်", "ဦးဘမြင့်"], 40: ["သက်နိုင်"],
  42: ["သက်နိုင်", "ပျောက်သွားတဲ့နှစ်ယောက်"], 43: ["ပျောက်သွားတဲ့နှစ်ယောက်"],
  44: ["ဦးဘမြင့်", "မရွှေဇင် (ဇာတ်ဝတ်စုံ)"], 45: ["ဦးဘမြင့်"],
  46: ["ဦးဘမြင့်", "မရွှေဇင် (ဇာတ်ဝတ်စုံ)"], 47: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"],
  49: ["ဦးဘမြင့်"], 50: ["မရွှေဇင် (ဇာတ်ဝတ်စုံ)"], 51: ["ဦးဘမြင့်"], 52: ["သက်နိုင်"],
  53: ["သက်နိုင်"], 54: ["ဦးဘမြင့်"], 56: ["မရွှေဇင် (သာမန်အဝတ်)"],
  57: ["မရွှေဇင် (သာမန်အဝတ်)", "သက်နိုင်"], 58: ["မရွှေဇင် (သာမန်အဝတ်)"], 59: ["သက်နိုင်"],
  60: ["မရွှေဇင် (သာမန်အဝတ်)", "သက်နိုင်"], 61: ["မရွှေဇင် (သာမန်အဝတ်)"],
  62: ["မရွှေဇင် (သာမန်အဝတ်)"], 63: ["သက်နိုင်"],
};

const WHERE = {
  1: "ဇာတ်ခုံ", 2: "ဇာတ်ခုံ", 4: "ဇာတ်ခုံ", 5: "ခုံနောက်", 6: "ခုံနောက်", 7: "ပွဲခင်း",
  8: "ခုံနောက်", 9: "ခုံနောက်", 10: "ပွဲခင်း", 11: "ခုံနောက်", 12: "ခုံနောက်", 13: "ခုံနောက်",
  14: "ခုံနောက်", 15: "ဇာတ်ခုံ", 16: "ခုံနောက်", 17: "ခုံနောက်", 18: "ပွဲခင်း", 19: "ဇာတ်ခုံ",
  20: "ပွဲခင်း", 21: "ခုံနောက်", 22: "ခုံနောက်", 23: "ခုံနောက်", 24: "ခုံနောက်", 25: "ခုံနောက်",
  26: "ခုံနောက်", 27: "ပွဲခင်း", 29: "ခုံနောက်", 30: "ခုံနောက်", 31: "ဇာတ်ခုံ", 32: "ဇာတ်ခုံ",
  33: "ပွဲခင်း", 34: "ဇာတ်ခုံ", 35: "ဇာတ်ခုံ", 36: "ပွဲခင်း", 37: "ဇာတ်ခုံ", 38: "ဇာတ်ခုံ",
  39: "ဇာတ်ခုံအောက်", 40: "ဇာတ်ခုံအောက်", 41: "ဇာတ်ခုံအောက်", 42: "ဇာတ်ခုံအောက်",
  43: "ဇာတ်ခုံအောက်", 44: "ဇာတ်ခုံ", 45: "ဇာတ်ခုံ", 46: "ဇာတ်ခုံ", 47: "ဇာတ်ခုံ",
  48: "ဇာတ်ခုံ", 49: "ဇာတ်ခုံ", 50: "ဇာတ်ခုံ", 51: "ဇာတ်ခုံ", 52: "ဇာတ်ခုံ", 53: "ဇာတ်ခုံ",
  54: "ပွဲခင်း", 56: "ဇာတ်ခုံ", 57: "ဇာတ်ခုံ", 58: "ဇာတ်ခုံ", 59: "ဇာတ်ခုံ", 60: "ဇာတ်ခုံ",
  61: "ဇာတ်ခုံ", 62: "ဇာတ်ခုံ", 63: "ဇာတ်ခုံ", 64: "ပွဲခင်း", 65: "ပွဲခင်း",
};

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

const NREF = CAST.length + LOCS.length;
CAST.forEach((c, i) => {
  c.mm = MM_REF[c.name] || "";
  c.prompt = `Reference ${i + 1} of ${NREF} — ${c.en} (${c.name}).\n\n${c.prompt}`;
});
LOCS.forEach((l, i) => {
  l.mm = MM_REF[l.name] || "";
  l.prompt = `Reference ${CAST.length + 1 + i} of ${NREF} — ${l.en} (${l.name}), a LOCATION plate. `
    + `A new and distinct place; do not repeat or vary any previous reference. Establish the place `
    + `itself, empty of people and of incident.\n\n${l.prompt} ${STYLE}`;
});
shots.forEach((s, i) => {
  s.prompt = `Shot ${i + 1} of ${shots.length} — scene ${s.id}, "${s.title}". A new and distinct frame `
    + `in an ongoing sequence; do not repeat, vary or re-render any previous image.\n\n`
    + `${s.raw.trim()}\n\n${STYLE}`;
});

const NOTE = `<b style="color:#ffb4b4">This is a crime story for its first half. Play it that way.</b>
  <br><br><b>1. Ma Shwe Zin looks identical alive and dead.</b> Same face, same costume, same
  make-up, same warm skin, same weight. Nothing pale, nothing see-through, nothing decayed, no wound
  — not even in <b>shot 46</b> where the knife goes through her. If a frame reads as "ghost", it is
  wrong. The only supernatural facts on screen in the whole film are three: an orchestra that plays
  with nobody touching it (<b>34</b>), a blade that passes through her (<b>46</b>), and a bulb that
  bursts (<b>48</b>).
  <br><br><b>2. She has two references and they are ONE woman.</b> In costume for shots 1, 4, 21–25,
  32–50; in a plain blouse with her hair pinned for 5, 6, 9, 11–16 and the whole ending, 56–62. Build
  the plain-clothes reference from the costumed one so the face carries. If they come out looking
  like two different actresses, rebuild — the ending only works if the audience sees the same person
  without the costume.
  <br><br><b>3. U Ba Myint is the monster.</b> He is a living man who poisons a woman and hides two
  bodies. His reference is deliberately respectable — someone villagers defer to — and the first
  crack is <b>shot 8</b>, alone in a tent with a cash box. Keep the menace out of his face until
  <b>44</b>, where he walks onto a lit stage holding a knife.
  <br><br><b>4. No gore anywhere.</b> Shot <b>22</b> is a trace of blood at the corner of her lip
  and nothing more. Shot <b>46</b> has no blood at all. The pit in <b>41</b> holds sacks, ledgers and
  dust — no remains. The bodies in <b>55</b> are a mound of earth seen from a distance.
  <br><br><b>5. Backstage is the main location.</b> Eighteen shots live behind the stage: dressing
  tents, hurricane lanterns, costume trunks, rolled backdrops. Keep it warm, cluttered and lived-in.
  The stage itself gets the saturated colour — printed curtains in hot pink and gold, bulbs on
  twisted wire.
  <br><br><b>6. Get the hsaing waing right.</b> The pat waing is twenty-one tuned drums slung inside
  a tall circular gilded frame with mirror-glass inlay, the player seated inside it — not a drum kit.
  Beside it the kyi waing gong circle, a rack of maung gongs, the hne oboe, si and wa. It matters
  most in <b>31</b>, <b>34</b> and <b>64</b>.
  <br><br><b>Nothing readable, ever.</b> The ledgers (<b>41</b>), the identity cards (<b>43</b>) and
  her letter (<b>53</b>) are all shot angled away, out of focus or face down. If letterforms resolve,
  throw the image away.
  <br><br><b>Three shots carry no reference</b> — <b>3</b> (the convoy on the road), <b>28</b> (the
  funeral) and <b>55</b> (the burial ground). All three are deliberately anonymous; generate them
  free-standing.
  <br><br>Build all ${NREF} references before starting the shot list.`;

await writeFile("/Users/puraidointern/ghost-prompts-site/shwezin.html", buildPage({
  title: "ဇာတ်ခုံအောက် — image prompts",
  subtitle: `UNDER THE STAGE · ${shots.length} shots · 16:9 · Copy a prompt, paste it into Google `
    + `Flow, attach the references listed on the card. ဗမာလိုရေးထားတဲ့ ရှင်းလင်းချက်က ဘာပုံလဲဆိုတာ ပြတာပါ — copy လုပ်တဲ့ထဲ မပါဝင်ပါဘူး။`,
  storageKey: "shwezin.done.v1",
  note: NOTE, nav: NAV("shwezin"),
  groups: [
    { heading: "Cast — build these first", items: CAST },
    { heading: "Locations", items: LOCS },
  ],
  shots,
}));

console.log(`shots ${shots.length}  refs ${NREF}`);
LOCS.forEach((l) => console.log(`  ${l.name}: ${shots.filter((s) => s.where === l.name).length} shots`));
CAST.forEach((c) => console.log(`  ${c.name}: ${shots.filter((s) => s.who.includes(c.name)).length} shots`));
console.log(`  no reference at all: ${shots.filter((s) => !s.who.length && !s.where).map((s) => s.id).join(", ") || "none"}`);
console.log(`  missing gloss: ${shots.filter((s) => !s.mm).map((s) => s.id).join(", ") || "none"}`);
