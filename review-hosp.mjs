export function reviewHosp(SCENES, CAST, LOCS) {
  CAST[0].prompt='Min Thu, Burmese man aged twenty-seven, slim build, medium-brown skin, narrow oval face, dark-brown eyes, straight brows, short side-parted black hair, clean-shaven. Faded pale blue short-sleeved collared shirt, dark green checked longyi, black sandals removed on his sleeping mat. One plain black rectangular wristwatch on LEFT wrist, a small chip at the upper-right corner of its glass, face unreadable. Base identity only mildly tired; later exhaustion changes lids and shadows, never his age or identity.';
  CAST[1].prompt='Min Thu’s mother, Burmese woman aged fifty-five, slender from illness, medium-brown skin, oval lined face, dark-brown eyes, gently curved brows, straight greying black hair tied in a low bun. Base identity in plain faded pale-mint hospital gown; no oxygen mask, wristwatch or medical devices. Admission before changing and later caretaker scenes use dusty lavender blouse and dark plum htamein instead. Final exhaustion matches the eye framing of the men but never changes her face into theirs.';
  CAST[2].prompt='Burmese man aged sixty-five, thin frame, medium-brown skin, hollow long cheeks, narrow nose, dark-brown eyes, sparse grey-black hair and patchy white stubble around mouth. Worn off-white sleeveless singlet, plain brown longyi, barefoot. Dark under-eye shadows, swollen lids and red-threaded whites from extreme sleeplessness. Fully ordinary opaque human skin, no glowing eyes, rot, wounds or corpse pallor. Same face after waking in corner bed, with relief rather than exhaustion.';
  CAST[3].prompt='Ma Khin San, Burmese night nurse aged thirty-five, average build, medium-brown skin, rounded oval face, dark-brown eyes, neat brows, black hair in a tight low bun. Plain white short-sleeved nurse uniform, white practical shoes and pale grey cardigan at night, no readable badge or insignia. Competent kind ordinary woman, not sinister. Chart only in scene instructions, no props in identity plate.';
  LOCS.find(l=>l.name==='စင်္ကြံ').prompt='A wide old Yangon hospital corridor beside a broad staircase and trolley ramp, pale green lower walls and cream upper walls, worn terrazzo, strip lights, a few neatly rolled reed mats, thermoses and plain plastic baskets along wall. Empty of people and incident for this location reference; no readable signs.';
  LOCS.find(l=>l.name==='ကုတင်အောက်').prompt='THE MASTER GEOMETRY PLATE FOR THIS FILM. Every under-bed and floor-level shot uses this layout, so establish it once and clearly. Camera on the terrazzo at the HEAD END of one chipped white iron hospital bed, 3-5 inches above the floor, framed wide enough to show the whole arrangement at once. LEFT OF FRAME: the ward wall, and the narrow strip of floor between the wall and the bed — wide enough for exactly one reed mat. CENTRE: the bed, four iron legs, the opaque underside of its frame overhead, and the ordinary shallow space beneath it, in which the floor and the rear wall clearly terminate within normal bed depth. RIGHT OF FRAME: the open central aisle, with a plastic stool and a dark cloth bag standing beside the bed on that side. FAR BACKGROUND, down the aisle: a corner bed screened by a green cloth curtain on a rail. The near edge of frame is the bed’s HEAD END; its foot end is the far end. Worn terrazzo with fixed black shoe scuffs. No people and no mats in this plate — the shots add those. Ordinary ward daylight, finite depth, no tunnel, no readable markings.';
  const S=n=>SCENES[n-1];
  S(3).p='Two men lie on reed mats laid edge to edge on the terrazzo. MIN THU IS ON THE LEFT OF FRAME, THE OLD MAN ON THE RIGHT. Both heads are at the near edge of frame at the same height; both bodies extend directly away from the camera. Min Thu faces RIGHT, toward the old man; the old man faces LEFT, toward Min Thu. Their faces are about eight inches apart. One iron bed leg stands upright in the gap between the two heads, at the centre of frame. Min Thu’s mat is the strip between the bed and the wall, so the wall is behind him on the left; the old man’s mat is under the bed, so the underside of the frame is above him on the right. Min Thu’s eyes are closed. The old man’s are open and directed at Min Thu’s face.';
  S(36).p='Min Thu stands at a hospital counter holding forms and one plastic supply bag in daylight; a single moment of ordinary errands, documents turned away.';
  S(22).p='Old man sits low and slightly hunched on his mat beside the bed edge, looking up toward Min Thu’s knees and plastic stool. Normal cramped clearance, no impossible posture at this early moment.';
  S(50).p='Ma Khin San quietly tells Min Thu about the earlier caretaker who could not be awakened. Stay in the present ward on her worried expression; do not invent an identity for that earlier patient.';
  S(70).p='Tight natural close-up of Min Thu’s hand still gripping the old man’s thin wrist, tendons tense and his fingers beginning to loosen. No frost, condensation or colour-changing skin; loss of warmth is conveyed through his reaction.';
  S(104).p='From beneath the bed at floor level, a tall green-shuttered window is visible beyond bed legs; rain outside and one loose shutter shifted against the wall. No new person appears for this weather insert.';
  S(86).p='The same old man sits on the green-curtained corner bed in off-white singlet and brown longyi, face now rested and relieved, viewed from a low floor sightline. Preserve his age and facial identity.';
  S(113).p='One continuous low-angle frame from floor beside the bed: Min Thu’s reaching fingers in near foreground begin to curl, while his physical body’s matching LEFT hand twitches at the mattress edge above. Mother’s fingertips make only light contact below; no split-screen.';
  S(122).p='From beneath and beside the bed’s open edge, Min Thu looks up toward the visible edge of his own sleeping face and LEFT wrist on the mattress. Opaque mattress and iron frame block the rest of the body; no transparent bed or X-ray view.';
  for(const n of [3,8,34,48,51,54,58,65,69,70,71,73,80,81,88,98,110,112,113,115,116,121,126,127]) S(n).w=[...new Set([...(S(n).w||[]),'မင်းသူ'])];
  for(const n of [3,19,32,65,67,69,70,71,73]) S(n).w=[...new Set([...(S(n).w||[]),'အဖိုးကြီး'])];
  for(const n of [8,54,65,68,98,110,112,113,115,116,121,126]) S(n).w=[...new Set([...(S(n).w||[]),'အမေ'])];
  S(104).w=[];
  // Viewpoint references do not require another visible body in a POV image.
  for(const n of [45,76]) S(n).w=[];
  S(50).g='မခင်စန်းက အရင်လူနာစောင့် မနက်မှာ နှိုးမရတဲ့အကြောင်း ပြောပြတယ်။ သူနာပြုရဲ့စိတ်ပူနေတဲ့မျက်နှာကိုပဲ ပြမယ်။';
  S(70).g='အဖိုးလက်ကောက်ဝတ်ကို ကိုင်ထားတဲ့ မင်းသူ့လက်။ အပူထွက်သွားသလို ခံစားရတာကို တုံ့ပြန်ပုံနဲ့ပြ၊ ရေခဲနဲ့အငွေ့မထည့်ရ။';
  S(113).g='ဖရိမ်တစ်ခုတည်းမှာ အောက်ကမင်းသူ့လက်ဖျားနဲ့ အပေါ်ကုတင်အစွန်းက ကိုယ်ခန္ဓာရဲ့လက်ဖျား လှုပ်သွားတာ။ ပုံနှစ်ပုံမခွဲရ။';
  if(DIRECTIONS.length!==SCENES.length) throw new Error('Hospital review count mismatch');
  if(CAMERA.length!==SCENES.length) throw new Error(`camera plan covers ${CAMERA.length} of ${SCENES.length} shots`);
  SCENES.forEach((s,i)=>{
    const n=i+1, who=s.w||[];
    const under=UNDER_BED_SHOTS.has(n);

    // ── 1. CAMERA, first and alone ───────────────────────────────────────
    // One composition per shot. Several prompts used to name a height, a side
    // and a required sightline at once — floor level AND aisle side AND both
    // faces level — which are not jointly satisfiable, so the generator picked
    // one at random and the geometry moved between shots of the same room.
    let cam=CAM[CAMERA[i]];
    // The motif carries its own complete camera specification — an 85mm crop
    // from forehead to lip. Prefixing that with "seen from floor height through
    // bed legs" would put two incompatible framings in one prompt, which is the
    // failure this whole restructure exists to remove. The motif wins.
    if(n>=SWAP&&CAMERA[i]!=='motif') cam=`POST-SWAP CAMERA RULE — Min Thu is now on the floor and is only ever seen from floor height, through bed legs and people’s legs. Never an overhead view, never a standing narrator, never a transparent mattress. ${cam}`;
    s.cam=cam;

    // ── 2. EYES, named per person ────────────────────────────────────────
    // "Red eyes" alone reads as supernatural, so the sclera is described
    // anatomically and assigned to a NAMED person. Whoever is not sleepless in
    // this shot gets an explicit healthy description rather than a negation —
    // "not red" still puts red in the prompt.
    const eyes=[];
    if(who.includes(OLD)) eyes.push(n>=85&&n<=89
      ?`The old man has slept: lids no longer swollen, whites clearing, ${EYES_CLEAR}.`
      :`ONLY the old man is sleepless here — ${EYES_TIRED}.`);
    if(who.includes(SON)) eyes.push(n<TIRED_SON
      ?`Min Thu is not yet sleepless: ${EYES_CLEAR}, lids normal.`
      :`Min Thu is now sleepless too — ${EYES_TIRED}.`);
    if(who.includes(MUM)) eyes.push(n<TIRED_MUM
      ?`The mother is ill but sleeping: ${EYES_CLEAR}, tired from illness rather than from sleeplessness.`
      :`The mother is now the sleepless one — ${EYES_TIRED}.`);

    // ── 3. CONTINUITY, short and only what applies ───────────────────────
    // This block used to run to six sentences on every one of the 129 shots,
    // including under-bed depth rules on a shot filmed outdoors in the rain.
    // Bulk at the tail pushes the shot-specific opening out of the model's
    // effective attention, so each clause now has to earn its place.
    const cont=['Continuity: ordinary living people photographed straight — no full ghost, skeletal face, glowing eyes, rot or corpse pallor.'];
    if(under) cont.push(n===67
      ?'⚠️ THE ONE EXCEPTION IN THE FILM: here the space under the bed continues far past any possible wall.'
      :'The floor and rear wall under the bed clearly terminate within normal bed depth — ordinary finite hospital floor, four bed legs, no tunnel.');
    if(who.includes(MUM)) cont.push(n<=8||n>=96
      ?'Mother in dusty lavender blouse and dark plum htamein, not the gown.'
      :'Mother in the pale-mint patient gown.');
    if(who.includes(SON)) cont.push('Min Thu in pale-blue shirt and green checked longyi, black rectangular watch on the LEFT wrist with a chip at the upper-right of the glass; the watch never moves to anyone else.');
    if(n>=SWAP&&who.includes(SON)) cont.push('His physical body above is unconscious; the conscious Min Thu below is the same man in the same clothes.');
    if(n>=85&&n<=89) cont.push('The old man is awake in the corner bed and nowhere else — no second old man under any bed.');
    s.cont=cont.join(' ');

    s.d=`Detailed scene direction: ${DIRECTIONS[i]}${eyes.length?' '+eyes.join(' '):''}`;
    s.style=STYLE+(WARD_LOCS.has(s.l)?' '+WARD_FURNITURE:'');
  });
}

/** Whoever appears in a shot, by the Burmese names the board uses for them. */
const SON='မင်းသူ', MUM='အမေ', OLD='အဖိုးကြီး';

/**
 * Shot 74 is where Min Thu's head reaches the floor and never leaves it.
 * Everything from here is filmed from down there, so the rule is stated at the
 * TOP of the prompt rather than buried behind two paragraphs of continuity.
 */
const SWAP=74;

/** The mother first remarks on his eyes at 37; she takes the mat herself at 100. */
const TIRED_SON=37, TIRED_MUM=100;

const EYES_TIRED='visible blood vessels in the whites of the eyes, bloodshot sclera, natural dark brown irises and normal black pupils, no glow and no colour change';
const EYES_CLEAR='clear white sclera, natural dark brown irises, ordinary healthy eyes';

/**
 * The exhausted face is the film's one repeated image: the old man at 24, Min
 * Thu's reflection at 59, the mother at 103. It only works as a rhyme if the
 * three are the same photograph with a different person in it, so the lens,
 * crop, head angle, eye line and light direction are specified identically
 * rather than left to three separate descriptions of tiredness.
 */
const MOTIF='THE EXHAUSTED-FACE MOTIF. This framing occurs three times in the film — shots 24, 59 and 103 — and must be reproduced EXACTLY each time, changing only the person in it. 85mm-equivalent lens. Extreme close-up cropped from mid-forehead to the top of the upper lip. Face square to the lens and level with it, head upright with no tilt, eyes open and looking straight down the barrel. One soft light source from camera LEFT at 45 degrees; the right side of the face falls into soft shadow; no fill. Swollen upper and lower lids, deep shadow in the under-eye hollows. Where the subject is lying on a mat, ROLL THE CAMERA so the face still reads upright in the finished image — the crop is tight enough that nothing outside the face reveals the roll.';

const CAM={
  wide:'EYE-LEVEL WARD VIEW. Camera at standing eye height in the central aisle.',
  eye:'EYE-LEVEL. Camera at standing eye height.',
  eyeclose:'EYE-LEVEL CLOSE. Camera at standing eye height, head-and-shoulders crop.',
  bedside:'EYE-LEVEL BEDSIDE. Camera at seated-visitor height beside the bed.',
  stool:'STOOL-HEIGHT DOWNWARD VIEW. Camera at plastic-stool height beside the bed, angled down into the gap under the frame.',
  mat:'MAT-HEIGHT SIDE VIEW. Camera on the floor beside the bed at reed-mat height, looking in under the frame from the aisle side.',
  matclose:'MAT-HEIGHT CLOSE. Camera on the floor at reed-mat height, head-and-shoulders crop.',
  matup:'MAT-HEIGHT LOW ANGLE. Camera on the floor at reed-mat height, tilted upward.',
  headend:'HEAD-END SYMMETRICAL TWO-SHOT. Camera on the terrazzo at the HEAD END of both mats, 3-5 inches above the floor, looking down the length of the two bodies so that both faces sit side by side in frame.',
  under:'UNDER-BED POV. Camera underneath the hospital bed, 3-5 inches above the floor.',
  underclose:'UNDER-BED POV, CLOSE. Camera underneath the hospital bed, 3-5 inches above the floor, head-and-shoulders crop.',
  floor:'FLOOR-LEVEL. Camera on the terrazzo beside the bed, 3-5 inches above the floor.',
  floorclose:'FLOOR-LEVEL CLOSE. Camera on the terrazzo, 3-5 inches above the floor, head-and-shoulders crop.',
  aisle:'FLOOR-LEVEL AISLE VIEW. Camera on the terrazzo, 3-5 inches above the floor, looking along the ward aisle past rows of bed legs.',
  oblique:'FLOOR-LEVEL OBLIQUE UP. Camera on the terrazzo beside the bed, 3-5 inches above the floor, angled up past the open edge of the mattress.',
  insert:'TIGHT INSERT. One macro subject filling the frame.',
  floorinsert:'TIGHT INSERT AT FLOOR LEVEL. Camera on the terrazzo, 3-5 inches above the floor, one macro subject filling the frame.',
  macro:'MACRO. Single subject filling the frame, shallow focus.',
  motif:MOTIF,
};

/**
 * One composition per shot, and the sequence of them is the story told without
 * narration: ordinary hospital coverage at standing height while this is still
 * a normal ward, sinking to stool and mat height as Min Thu is drawn downward,
 * and locked to the floor from 74 on. The mother's mat shots at the end return
 * to the old man's early compositions on purpose.
 */
const CAMERA=[
  'mat','wide','headend','matclose',                                   //   1-4
  'eye','insert','eye','floor','wide','floor','eyeclose',              //   5-11
  'wide','eye','matup','mat','bedside','wide','wide',                  //  12-18
  'stool','stool','matclose','matup','matup','motif',                  //  19-24
  'eye','eye','insert','matclose','bedside','mat','headend',           //  25-31
  'insert','matclose','mat','mat',                                     //  32-35
  'eye','bedside','bedside','stool','bedside','stool','bedside',       //  36-42
  'eyeclose','stool','aisle','eye','eyeclose','eye','eyeclose',        //  43-49
  'eyeclose','eye','bedside','bedside','insert','mat','eyeclose',      //  50-56
  'bedside','macro','motif',                                           //  57-59
  'wide','wide','eye','insert','matup',                                //  60-64
  'mat','mat','under','mat','insert','insert','insert','matclose',     //  65-72
  'matclose',                                                          //  73
  'under','under','under','aisle','floor','floorclose','floor',        //  74-80
  'floorinsert','floor','aisle',                                       //  81-83
  'aisle','aisle','aisle','aisle','aisle','aisle',                     //  84-89
  'under','aisle','floorclose','aisle','floorinsert',                  //  90-94
  'oblique','oblique','floorinsert','oblique','floorclose',            //  95-99
  'floor','under','underclose','motif','under',                        // 100-104
  'headend','underclose','underclose','underclose','floorinsert',      // 105-109
  'floorinsert','underclose',                                          // 110-111
  'macro','oblique','underclose','floorinsert','oblique',              // 112-116
  'under','under','under','under','underclose',                        // 117-121
  'oblique','underclose','underclose',                                 // 122-124
  'under','macro','macro','under','under',                             // 125-129
];

/**
 * The ward's own furniture. Worth pinning across a hundred shots of one room,
 * and an invitation to paint hospital beds into a brick wall or a washroom on
 * the nine shots set elsewhere.
 */
const WARD_FURNITURE='Keep the bed, stool, cloth bag, reed mats and green-curtained corner bed in their established positions.';
const WARD_LOCS=new Set(['အဆောင်','ကုတင်အောက်']);

/**
 * A real government ward, not a horror set. The old man is frightening because
 * he is awake, and every atmospheric shortcut — a green grade, fog, decay —
 * spends that on cheap dread and tells the audience he is a monster, which the
 * story then has to spend shots undoing.
 */
const STYLE='Old Yangon government hospital, 16:9, 35mm grain, institutional photorealism. ORDINARY HOSPITAL LIGHT: daylight through tall green shutters by day; plain white fluorescent strips, one warm lamp at the nurses’ table, and ordinary spill reaching under the beds by night. This is a working ward, NOT a horror set — no green or teal grade, no fog, haze or smoke, no abandonment, no rot or grime, no blood, no heavy vignette, no desaturated horror palette. Unease comes from composition alone. One still instant, no montage or visible sound effects. No gore, legible writing, watch digits, labels, logo or watermark.';

/** Shots under or beside the bed, where finite depth has to be stated. */
const UNDER_BED_SHOTS=new Set([1,3,4,15,19,20,21,22,23,24,27,28,30,31,32,33,34,35,39,41,44,45,55,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129]);
const DIRECTIONS=`
Night mat-height view of old man on side beneath mother’s bed, awake. No floating figure or second old man above him.
Wide ordinary night ward, separate caretakers on mats and patients above. Sleeping people are alive; no crowd of identical faces.
Establishes the arrangement that shots 31 and 105 repeat exactly. The two bodies are PARALLEL with both heads at the same end — never crown to crown, never a T or an L. The mats touch along their long edges with no floor showing between them. Shoot 31 and 105 from this same position.
Close old man’s open eyes at mat level. Small natural reflection of ward light, no glowing pupils or monstrous features.
Rainy daytime admission, Min Thu supports mother from car beside brick wall. Her arrival clothes are lavender blouse and plum htamein.
Wet brick-base insert and green algae, entrance ramp implied nearby. No hospital signage or horror symbols.
Mother leans weight onto son's forearm on stairs. She still wears arrival clothes, no reversed caregiving role yet.
Low corridor path, mother and son’s feet avoid mats and baskets. Normal tired families in background, no stepping on bodies.
One continuous corridor composition contains eating family near and quiet phone caller farther away. No panels or readable newspaper print.
Ordinary anonymous caretaker sleeps with cloth-bag pillow. A passing foot crosses mat corner without injury or corpse implication.
Narrator’s reflective reaction in corridor, still recognizable at twenty-seven. Do not add a visible future self or elapsed-time caption.
Daylight ward establishing view, paired bed rows, green shutters and high ceiling. Place mother's bed away from windows in interior row.
Bed-frame detail and narrow trolley aisle, chipped white paint. Normal finite room geometry, no infinite repeated beds.
Upward view of slow ceiling fans and high roof. Smells and still warm air get no coloured vapour or text.
Daylight under mother's bed: only Min Thu’s bag and shoe scuffs. No mat or person before first-night arrival.
First night mother asleep in bed, Min Thu on plastic stool beside. Sheet and bed orientation consistent, no recliner substituted.
Night lighting establishing view: only some strips remain on and nurse desk lamp at far end. No blackout.
Distant ordinary trolley and turned wheel in dim aisle. Sound is implied, no autonomous sinister wheelchair or extra figure.
View below stool height shows old man's hands spreading one reed mat. Hand source remains below frame, no detached floating hands.
Min Thu’s downward view of old man arranging mat. Body fits the cramped space in a low seated crouch at this early beat.
Close ordinary old face, sparse white stubble, off-white singlet, brown longyi. No supernatural skin colour or menacing grin.
Old man speaks upward from low mat position, Min Thu’s knees and stool above. Avoid impossible full-height seating here.
Old man glances upward kindly through exhaustion. No contact with mother, no grasping hand or hovering body.
The first appearance of the motif. Min Thu is observing it on somebody else, and it should read as sympathy rather than threat.
Old man's hand points toward green-curtained corner bed. Keep separate from mother’s bed and never show a duplicated full old man.
Corner-bed patient mostly screened, unidentifiable face, ordinary sleeping shape. No visitors or ominous body bag.
Old man's hands smooth same mat edge. Focus on repetitive ordinary gesture, not changing mat pattern or supernatural hands.
Tired mouth raises slightly while eyes stay fixed upward. No teeth-baring or malicious smile, watch time stays offscreen.
Midnight mother drinks from plain cup held by son, his other hand supports her. No old man helping above the bed.
Old man on his side with eyes closed briefly and longyi to knees. Apparent rest is allowed, no open-eye global override.
Repeat shot 3 exactly — same camera position, same left-right assignment, same bed leg at centre. Only the night has changed.
Close old man's still chest and shoulder on mat. Suggest absence of audible breath without corpse colouring or graphic anatomy.
Old man's eyes now fully open toward camera. Preserve the same side-lying pose and ordinary ward reflection.
Min Thu turns his back in foreground, old man blurred behind. Both still on separate adjacent mats, no standing speaker.
Morning under-bed floor empty except bag, scuffs and dust. No old man's mat, no visible disappearing effect.
Daylight single counter errand with forms and supply bag. No montage, second narrator or readable medical documents.
Evening mother a little stronger, studies son's tired face. Keep her patient gown and his unchanged clothes and watch.
Mother reclines supported by pillow, asking after son. No sudden healthy standing pose, no old-man face grafted onto hers.
Second night old man already under bed, same mat and orientation. No entry animation or portal.
Min Thu alert on stool, staring down beside bed. Mother above out of main focus; arrival remains unexplained.
Old man's open palm reaches up, waiting short of contact. One forearm continuous with man below bed, no extra hand.
Nurse arrives with chart, interrupts son's reach before fingers meet. Exactly living nurse and son in foreground, mother asleep.
Nurse reaction close-up, professional calm gives way to concern. No villain expression or supernatural eyes.
Same under-bed angle now completely empty of man, hand and mat. Bag and scuffs stay in their original positions.
Low view along a few ordinary beds, bags, slippers and tiffin carriers. Finite ward wall visible, no impossible-depth reveal yet.
Nurse steadies son's forearm and listens. Normal skin contact; no wrist swap or watch passing to her.
Nurse looks toward distant green curtain. Keep corner bed separate from mother's; no revealed patient face needed.
Nurse indicates son's rolled mat beside stool. Old man's vanished mat stays absent, no second unrolled mat.
Nurse speaks softly, eyes lowered. Earlier caretaker is an account, not another person suddenly in this scene.
Stay on nurse telling the earlier incident. Avoid an invented flashback patient, monitor, or extra unconscious copy of Min Thu.
Nurse briefly steadies both shoulders while advising him. Two hands clearly hers, no duplicate arm or old man's hand.
Second-night stool vigil, son holds mother's hand, his mat remains rolled. Old man not visible in this frame.
Mother wakes briefly after two, sees tired son; patient gown, same bed. No readable clock necessary.
Mother's hand relaxes inside son's grip as she sleeps again. LEFT wristwatch belongs only to son, no third hand.
Empty dark under-bed shot for voice. Do not show speaker, ghost or extra mat merely because he is heard.
Son looks rigidly ahead and refuses to glance down. Sweat at the hairline. Nothing is reflected in his eyes.
Third-day son dozes upright, spoon on tray after slipping. Mother observes from bed; no duplicated falling spoon.
Macro of Min Thu’s eyelids briefly closed in ward light. Sounds of mats do not generate an actual mat near his face.
The motif has arrived on the narrator. Identical framing to shot 24, but the face in it is unmistakably his own twenty-seven-year-old one.
Third-night son stands at ward end looking toward nurse desk. Exhaustion now strong, no recovery of fresh base-reference eyes.
Busy night ward, Ma Khin San moves around two trolleys and families shifting mats. Normal staff, no identical cloned nurses.
Son hesitates at busy desk, choose the moment he turns away. One body and one instant, no before/after panel.
Son pinches his own forearm on stool beside sleeping mother. Mild pressure only, no bruising spectacle or self-injury detail.
Sleeping mother’s LEFT hand hangs outside bed rail toward floor. Loose fingers, gown sleeve, no old hand already attached.
Three sourced hands: mother’s LEFT descends, old man's RIGHT rises, son's LEFT enters to protect. Keep their sleeves and ages distinct.
Old man near-upright only here under frame, head slightly tilted in impossible clearance. Normal human proportions, no stretched neck.
Unique deep reveal: the old man IS present in the near foreground — he is the anchor for the impossible depth behind him. What is forbidden is ANY ADDITIONAL figure in that darkness: no second face, no further bodies, no repeated old men receding with the bed legs.
Old man watches mother’s hanging hand rather than son. No contact yet; his reaching arm remains connected to his body.
Mother’s hand is safely back above. Son’s LEFT watch-bearing hand grips old man's RIGHT wrist below, no third hand in contact.
Same grip in natural light, son's tense fingers start loosening. Heat loss is reaction only, no ice, frost, smoke or skin blanching.
Reverse grip: old man's RIGHT hand encloses son's LEFT wrist. Watch remains on young wrist; two arms, no knotted fingers.
Old man's eyes fill with tears, apologetic lip tremor. Exhaustion and guilt, not aggression or triumphant smile.
Old man speaks softly with grip still held. No renewed mother contact or duplicated wrist appearing beneath.
Son's cheek now on terrazzo at floor height. CONTINUITY: from here until shot 83 his physical body lies ON THE FLOOR beside the bed, never on the mattress. No impact injury; ward seems distant through framing and focus.
From under bed, son attempts an answer toward opaque frame overhead. No visible sound or mother seen through mattress.
⚠️ THE LEGS ARE NOT A CAGE. The gaps between them are wide and clearly passable; compose them as open floor, never as bars. Nothing physical is blocking him. Confinement comes from the tightness of the crop, not from the furniture.
Feet hurry toward bed, nurse’s recognizable white shoes among ordinary sandals. Crop above knees, no full standing view.
Son’s LEFT hand reaches toward the mother’s bare ankles across barely two feet of completely open terrazzo. ⚠️ Nothing physical is in the way and no contact is made. Keep the gap physically small and the floor between them clear; do not elongate his arm.
Floor-height view of son calling toward unreceptive feet. Human opaque face, no ghost glow or audible text.
Low view of helpers lifting physical Min Thu, only hanging LEFT arm initially revealed. Living unconscious body, no corpse treatment.
Watch insert on hanging LEFT wrist: black rectangle, same upper-right glass chip, unreadable face. No second watch.
Through helpers' leg gap, physical Min Thu’s unconscious face visible above. Same young identity; narrator's viewpoint below, not a third clone.
Feet carrying his physical body move down aisle; mother's slower bare feet follow. Camera stays trapped at floor.
Low distant view past bed legs toward green curtain beginning to move. No jump to eye-level camera in corner.
From floor sightline, old man sits up in corner bed after long sleep. No under-bed old man remains simultaneously.
Same old face now relieved in same singlet and longyi. Visible through bed-edge gap, never a new young version of him.
Old man inspects his hands and touches face, seen from low distance. Choose hand-to-cheek instant, not multiple gesture copies.
⚠️ DISTANCE MATTERS: the old man is in the GREEN-CURTAINED CORNER BED far down the ward, while the camera lies under the mother's bed. He leans out and looks ACROSS the aisle at that distant gap, and his eyeline still lands exactly on the lens. Keep the long stretch of floor and the rows of bed legs between them clearly visible. Son's reaching hand may enter the near foreground; no standing son.
The old man lies back and PULLS THE GREEN CURTAIN closed around the corner bed — a blanket over a bed edge could not hide him from this distance, the curtain can. Camera stays on the floor outside the opaque cloth; no transparent fabric.
Daylight stripe across ordinary under-bed terrazzo. CONTINUITY: his physical body was carried out at shot 83, treated, and returned to this same bed during this gap — from here on it lies on the mattress above him. Single instant, no clock, time-lapse panels or infinite floor.
Night from floor: anonymous caretaker hands spread mats, bags serve as pillows. No old man reappears among them.
Min Thu’s eyes closed but strained face on floor, unable to sleep. Same young features, heavy sleepless eye shadows.
Low ward fragments of shoes and trolley wheel passing near frame. One coherent still, no visual sound words.
Son's open hand near bed leg ignored by passing feet. No trampling injury, translucent arm or limb disappearing through feet.
Low oblique sightline past the mattress edge. PREFER THE HAND: his limp LEFT arm and chipped watch hanging over the bed rail read the moment reliably, where a face seen past a mattress from floor height usually does not. Show at most the far edge of the jaw. Never reveal the body through the opaque mattress.
Mother now recovered in lavender blouse and plum htamein, seated by son's bed. Floor-height view through bed-edge opening.
Same plastic stool and son's cloth bag beneath, mother seated now. Do not duplicate mother in patient gown elsewhere.
Daylight low oblique view, mother holds unconscious son's hand at bed edge. No standing conscious son or ghost overlay.
Conscious son's mouth forms words below bed, mother’s ankles nearby unresponsive. Show no second mouth detached in darkness.
Night mother unrolls mat in son's earlier position, cloth bag pillow. Ordinary depth and same single iron leg between heads.
Mother lying on mat looks upward toward physical son before sleeping. She wears caretaker clothes, no hospital-gown reset.
One instant of mother reopening her eyes at mat level. Avoid multi-exposure cycle or duplicated eyes.
The motif completes on the mother, which is the whole reason it was established twice. Her own fifty-five-year-old face, never the old man’s and never Min Thu’s.
Rainy night window seen from floor past bed edge, loose green shutter. Weather insert only; no mother under window or new location.
The composition of shot 3 returns here for the first time, which is how the audience understands the swap without being told. Same camera, same left-right structure; only the two people are different. No old man anywhere in frame.
Mother's eyes focus directly toward son at mat height for first time. Natural recognition, no glowing pupils.
Mother quietly puzzled on side, face tired and ordinary. No suspicion or monstrous grimace.
Son cries silently, tears run sideways across nose while lying down. Mother may blur opposite, no standing face portrait.
Mother's RIGHT hand opens toward son across mat. Wrist bare; no watch and no wrist grab yet.
Mother's RIGHT hand and son's LEFT watch-bearing hand inches apart. The gap dominates; no contact or third hand.
Close son's floor-level expression as he understands transfer. Old man absent; no flashback overlay or aged transformation.
Only fingertips touch lightly, mother's RIGHT and son's LEFT. Warm light natural, no magical energy glow or full grip.
⚠️ EXACTLY TWO HANDS IN FRAME AND BOTH ARE HIS: the conscious LEFT hand in the near foreground on the floor, and the physical LEFT hand at the mattress edge above. The mother's hand belongs to shot 112 and must NOT appear here — a third hand is the most likely failure of this image. Deliberate same-person duality, one continuous composition, no split panels.
Mother's eyelids begin sinking as fingertip contact continues. Retain her face and clothes; no collapse injury or instant corpse.
Son withdraws LEFT hand, mother startles awake. Choose visible reopened gap; no sustained grip or completed transfer.
From floor, mother grasps unconscious son's hand above mattress edge and calls nurse. Below hand stays withdrawn; hope in posture.
Conscious son retreats into ordinary bed shadow with hands under chest. No endless tunnel or altered bed geometry.
Mother reaches with RIGHT hand; son holds both hands under his chest beyond reach. No handclasp or secret transfer.
Mother cries in near mat plane, son shakes head in deeper finite shadow. No duplicate face, motion trails or ghost effect.
Mother reaches farther with bare RIGHT wrist, face kind behind. Watch never migrates from son's LEFT wrist.
Son watches her offered hand from darkness, longing without touching. Keep recognizable young face and extreme fatigue.
Low oblique view in which the LEFT WRIST AND CHIPPED WATCH over the bed rail are the subject and the face is only a sliver of jaw at the mattress edge, everything else occluded by opaque mattress and iron frame. No transparent bed or X-ray body outline.
Conscious son on floor, hands over ears, eyes open. Ordinary ward environment, no noise diagram or spectral hands.
Close conscious son's exhausted face, fear of his own choice. Preserve age twenty-seven; never replace face with old man.
Mother reaches again from same mat, more tired. Her identity, blouse and hair remain consistent through later nights.
Barely one finger-width separates mother's RIGHT fingertips and son's LEFT fingertips. Do not let hands overlap or imply touching.
Son's watch-bearing hand retreats slightly. Visible air gap, natural wrist position, no stretched fingers.
Mother already side-lying and drowsy, RIGHT arm toward dark bed space. Floor camera and same pillow bag.
Final shot of the film. They made contact once, at shot 112; this is the nearest he has come since. Leave it unresolved — no completed clasp and no transfer.
`.trim().split('\n');
