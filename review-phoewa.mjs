// Shot-specific visual review. Narration is owned by the original board/database.
export function reviewPhoewa(SCENES, CAST, LOCS) {
  const cast = Object.fromEntries(CAST.map(c => [c.name, c]));
  cast['မင်းသန့်'].prompt = 'Min Thant, a Burmese man aged thirty-five, medium-brown skin, average build, long oval face, straight brows, dark-brown eyes, broad nose, short side-parted black hair, clean-shaven base identity. Faded slate-grey short-sleeved collared shirt, dark brown checked longyi, black rubber sandals. An ordinary tired father; tension is acted through posture. Preserve this face and outfit; sweat and stubble develop only in later scenes.';
  cast['ညီညီ'].prompt = 'Nyi Nyi, a seven-year-old Burmese boy, small slender child proportions, medium-brown skin, round cheeks, large dark-brown eyes, straight short black hair with a blunt fringe. Muted mustard-yellow plain T-shirt, navy shorts, barefoot indoors. Base reference has clean uninjured wrists. Usually guarded and quiet; expressions and brief cries follow the individual scene, never an adult face or oversized body.';
  cast['သက်ထား'].prompt = 'Thet Htar, a thirty-two-year-old Burmese woman, medium-brown skin, slim build, oval face, gently arched brows, dark-brown eyes, straight black hair in a low bun. Dusty rose cotton blouse, deep maroon htamein. Warm ordinary living woman, seen only in memories or a family photograph; never a present-day apparition. Paint on her fingers only during craft memories.';
  cast['အန်တီ'].prompt = 'Nyi Nyi’s aunt, a Burmese woman aged forty, medium-brown skin, sturdy average build, broad oval face, dark-brown eyes, gently rounded nose, black hair in a neat low coil. Pale sage-green short-sleeved blouse, dark plum htamein, simple sandals. Practical, attentive and calm; distinct from Thet Htar.';
  CAST.push({name:'ဆိုင်ရှင်',en:'The second-hand shopkeeper',prompt:'Burmese man aged fifty-eight, medium-brown skin, stocky build, round lined face, short greying black hair, thin grey moustache. Faded cream short-sleeved shirt, dark teal longyi and brown sandals. Ordinary helpful shopkeeper, no ritual clothing or sinister expression. Alone without shop counter or objects in identity plate.'});
  cast['ဖိုးဝရုပ်'].prompt += ' Exactly three small blue fingertip paint marks behind its LEFT ear, fixed in size and position. Base plate shows aged surface crazing but NO structural crown crack. The crown crack appears only after the hammer strike. The doll stays about thirty centimetres tall; never child-sized.';
  cast['ဖိုးဝရုပ်'].pose = 'The complete single inanimate doll is upright facing the camera, its original painted small smile preserved exactly, both yarn tufts and the actual checked longyi visible; no human model and no neutralized or altered mouth';
  LOCS.push({name:'အဖေအခန်း', en:'Min Thant’s bedroom', prompt:'A modest Yangon adult bedroom, single low wooden bed with a plain cream pillow and faded grey sheet, small bedside table and warm lamp, narrow curtained window at the left of the bed, worn floorboards and plain plaster wall. Empty room, no doll, person or supernatural incident. Keep its doorway, window and bed positions fixed.'});
  const S = n => SCENES[n-1];
  const set = (n, p, w, l) => { if(p) S(n).p=p; if(w) S(n).w=w; if(l!==undefined) S(n).l=l; };
  for (const n of [3,31,32,34,35,36,37,38,39]) S(n).l='အဖေအခန်း';
  set(7,null,['မင်းသန့်','သက်ထား','ညီညီ']);
  for(const n of [18,51,54,59]) S(n).w=[...new Set([...(S(n).w||[]),'ဆိုင်ရှင်'])];
  set(9,null,['မင်းသန့်','ညီညီ']);
  set(10,null,['မင်းသန့်','ညီညီ'],null);
  set(31,'Min Thant turns the complete Pho Wa doll upside down and taps its sealed underside with one knuckle under a bedside lamp. Keep the stuffed body and papier-mâché head attached.',['မင်းသန့်','ဖိုးဝရုပ်']);
  set(53,'Macro view behind the Pho Wa doll’s LEFT ear: exactly three blue fingertip marks on the painted papier-mâché surface, no lettering.',['ဖိုးဝရုပ်']);
  set(84,'Min Thant takes the doll while Nyi Nyi holds just one of its small arms; a tense unequal grip at the bedside, with no stretched limbs or exaggerated struggle.',['မင်းသန့်','ညီညီ','ဖိုးဝရုပ်']);
  set(91,'A phone lies face-up on the living-room table, incoming-call glow without readable interface; the locked workroom door lies at the end of the corridor behind it.');
  set(95,'Nyi Nyi sits gripping the blanket. Min Thant is between him and the doll on the floor; the doll faces Min Thant, who hears the boy’s account.',['မင်းသန့်','ညီညီ','ဖိုးဝရုပ်']);
  set(106,null,['မင်းသန့်','ညီညီ'],'သားအခန်း');
  set(128,'A small Pho Wa doll hand rests lightly on Min Thant’s shoulder from behind. Show only the contact and his startled shoulder, keeping the hand tiny and the doll’s established material appearance.',['မင်းသန့်','ဖိုးဝရုပ်']);
  set(148,'Extreme close-up behind the doll’s LEFT ear: exactly three small blue fingertip paint marks on the painted paper head, crown outside frame.',['ဖိုးဝရုပ်']);
  set(136,'The front door opens onto a brightly lit exterior at night; Nyi Nyi stands at the threshold looking back into the dim house.',['ညီညီ']);
  set(138,'From Min Thant’s narrowing viewpoint, a neighbour woman draws Nyi Nyi into the lit exterior doorway at night. Dark foreground occlusion narrows the visible area without a split-screen effect.',['ညီညီ']);
  set(143,'Corridor-side view at night of neighbours reacting to the back workroom doorway. The door leaf occludes the opening completely from this camera angle; only their reactions and a torch beam on the threshold are visible.');
  // Attach the doll wherever the picture actually includes it, including insert shots.
  for(const n of [1,16,17,22,23,24,25,26,30,32,35,36,38,42,43,44,45,52,54,56,58,62,63,64,65,66,70,74,83,88,89,90,92,98,100,101,103,105,110,111,112,113,114,116,122,127,129,131,146,149,151,163,165,171,174,175]) S(n).w=[...new Set([...(S(n).w||[]),'ဖိုးဝရုပ်'])];
  for(const n of [16,18,23,33,38,42,43,44,45,47,52,54,56,62,63,64,67,68,70,76,78,79,81,87,88,89,90,92,98,100,103,104,107,108,111,113,116,121,122,125,127,129,130,132,151]) S(n).w=[...new Set([...(S(n).w||[]),'မင်းသန့်'])];
  for(const n of [45,89,90,95,100,146,151,171]) S(n).w=[...new Set([...(S(n).w||[]),'ညီညီ'])];
  for(const n of [145,147,155,168,171,175]) S(n).w=[...new Set([...(S(n).w||[]),'အန်တီ'])];
  // No unrelated figures in tightly cropped object inserts.
  S(62).w=['မင်းသန့်','ဖိုးဝရုပ်']; S(108).w=['မင်းသန့်'];
  S(136).g='ညဘက် အိမ်ရှေ့တံခါးဖွင့်ပြီး အပြင်ကမီးအလင်းဝင်လာတယ်။ ညီညီက နောက်ကို ပြန်ကြည့်တယ်။ နေ့ခင်းမဟုတ်ရ။';
  S(143).g='အိမ်နီးချင်းတွေ နောက်ဖေးအခန်းဖွင့်ကြည့်တဲ့ည။ စင်္ကြံကနေ သူတို့တုံ့ပြန်ပုံပဲ ပြမယ်။ တံခါးက အတွင်းကိုကွယ်ထားရမယ်။';
  if(DIRECTIONS.length!==SCENES.length) throw new Error('Pho Wa review shot count mismatch');
  const memories = new Set([8,57,58,69,146,149,150,151,153,161,162]);
  SCENES.forEach((s,i)=>{
    const n=i+1;
    const past=memories.has(n);
    let state = (s.w||[]).includes('ဖိုးဝရုပ်') ? 'Keep the doll’s original painted smile, cheek thanaka discs, yellow-tied black yarn tufts and checked fabric longyi exactly as the reference. Its eyes and mouth stay flat paint on papier-mâché throughout, fixed in the one expression.' : 'Keep the shot to the subjects and objects it names, and to those only.';
    if((s.w||[]).includes('ဖိုးဝရုပ်')) state += past || n<64 ? ' Doll has only old paint crazing; its base is sealed and its crown is whole and smooth.' : n<104 ? ' A small paper layer at the head base has been peeled back; head remains attached, crown intact.' : n<111 ? ' One side paint chip from the wall impact; crown still unbroken.' : ' Preserve one unrepaired crown crack from the hammer, plus the earlier paint chip; the smile remains intact. Through the crack the interior shows layered paper only, receding into shadow.';
    /**
     * Only mention his wrist when his wrist can actually be in the picture.
     *
     * This note used to ride on every shot he appears in, which meant tight
     * crops of his face were carrying a description of marks on a child's skin
     * for no visual gain at all — and that description is the single most
     * refusal-prone sentence on the board. The mark is the subject of three
     * shots; in the rest it is either out of frame or incidental.
     */
    if((s.w||[]).includes('ညီညီ') && /\b(wrist|forearm|arm|arms|hand|hands|fingers)\b/i.test(s.p))
      state += n>=85&&!past
        ? ' On the inside of Nyi Nyi’s LEFT wrist are four small pale pink patches the shape of fingertips, already fading; the skin over them is smooth and closed.'
        : ' Nyi Nyi’s arms and wrists are clear and even-toned in this earlier scene.';
    s.d=`Detailed scene direction: ${DIRECTIONS[i]} ${state}`;
    s.style='Yangon, Myanmar, domestic cinematic photorealism, restrained natural colour, 35mm texture, 16:9 landscape. Use the setting and lighting named in this shot; do not import another room from a reference plate. One still image of the stated instant, no montage, duplicate subjects, motion arrows or sound lettering. Only pictured characters appear; a remembered or heard voice does not add a person. The workroom interior stays out of frame entirely. Everyone who appears is whole, unharmed and ordinary. Handwriting is blurred or partially occluded, never invented readable text. No captions, logos or watermark.';
  });
}

const DIRECTIONS = `
Waist-height macro: show two cord wraps and three separate knots attached to one steel hook; crop most of the doll’s face.
Match the hook and shelf angle from shot 1 in morning light. Empty loop retains all three knots; doll entirely absent.
Waking eye-level view from Min Thant’s pillow. One upright doll faces the sleeper at close range; do not use Nyi Nyi’s bed.
Frontal macro of the existing painted face. Keep both dotted thanaka discs symmetrical and the original mouth shape fixed.
Night two-shot at the child’s bedside: father sits beside the pillow, son looks up; a small warm practical bulb lights both.
Medium-wide night portrait in the cluttered living room. Father alone, tired shoulders, child’s abandoned shoe near table.
Single framed family photograph, three recognizable family members within the glass only; no extra people standing in the room.
Earlier warm daylight memory. Sleeping boy’s small hand holds his living mother’s hand; her other hand rests gently on his hair.
Low view beside the front door. Nyi Nyi looks past his arriving father into empty space; mother never appears there.
Daylight street outing, father and son side by side. Frame the stalls as background rather than the shop’s indoor shelving.
Medium shop aisle view. Min Thant examines a wooden shelf; clutter must not obscure his hands or become a threatening figure.
Child-height shot between stacked furniture. Nyi Nyi holds one thirty-centimetre doll with two hands, presenting it to his father offscreen.
Tight upper-head detail: two black yarn tufts tied with yellow thread, separate from the painted fringe. No real human hair.
Straight-on face insert in shop daylight. Emphasize painted blue eyelids and dotted yellow cheek circles without changing expression.
Torso insert. Show painted necklace on cream chest and real woven longyi with one front knot; no actual metal necklace.
Adult palm supports the attached head and soft body. Slight cotton compression shows texture; no disassembly or batteries.
Left-ear detail over the boy’s shoulder. His thumb checks the fixed paint marks; the head’s left side is closest to camera.
Nyi Nyi hugs the doll in sharp foreground while Min Thant pays out of focus at the counter; preserve the doll’s small scale.
Car rear-seat profile in daylight. Boy whispers at the doll’s ear; no other child, visible speech or changed doll mouth.
Establish the shelf, bed and doorway at night. Doll faces the bed; record these positions for the later directional reversal.
View from inside the bed toward the doorway. Father’s hand pauses at the switch; boy remains in bed, not standing beside him.
Hold on one stationary doll on the dark shelf. The narrated click has no visible symbol, vibration lines or open mouth.
Match shot 20 geography: doll now faces the father in the doorway; only its head direction has changed.
Father’s hand straightens the doll. Boy watches that hand from the bed, maintaining a clear gap between bed and shelf.
Shelf-level insert shows the doll only half an inch nearer its edge; feet stay together, no walking pose or floating.
Wide bedroom geography makes the three-foot gap from the boy to the shelf obvious; no reaching arm connects them.
Hallway medium shot, father still and listening toward the child’s closed door. Night; second voice has no visible speaker.
Close exterior of the closed bedroom door, dark gap beneath. Do not visualize a box or a person inside one.
Doorway view of boy sitting upright with doll in his lap. Both face the father’s offscreen eyeline; only one doll.
Father lifts the doll from the boy’s loose hands. Focus on the boy’s watchful gaze at the adult hand, no struggle yet.
Underside inspection in father’s bedroom. One supporting hand and one tapping knuckle; intact cotton torso and paper head remain connected.
Extreme underside insert under the bedside lamp. Sealed aged paper, no hatch, screw, speaker, wire or battery compartment.
Return to the child’s shelf at night. Father tightens two wraps and three knots; this is the earlier setup from shot 1.
Morning pillow-height close-up, one handspan from the doll. Keep the same adult bed, window direction and cream pillow as shot 3.
Side-on intimate two-shot: father lies still, eyes open, doll beside his face; fear belongs to the man, not its expression.
Choose the instant just after landing: doll lies on its side on father’s bedroom floor, undamaged, without a second airborne copy.
Low floor shot with the unchanged face tipped upward. Nyi Nyi stands in the bedroom doorway behind, looking toward his father.
Floor-level shot of doll’s head oriented toward father’s black sandals. Body remains where it landed; no spinning blur.
Close on Nyi Nyi at the same doorway in morning light, composed and unsurprised; no smile of menace.
Daylight living-room medium-wide. Father takes a phone call, doll initially well back from the table edge, both positions clear.
Match table angle from shot 40. Doll now at the near edge facing father’s chair; no second doll marks its previous place.
Reaction close-up of Min Thant thinking. Doll softly blurred in foreground; no flashback collage of the three lies.
Tabletop insert: one pencil draws one short line in front of the doll’s feet, between doll and father.
Across-table two-shot. Father speaks calmly, doll’s feet remain behind the unbroken pencil line; no movement implied yet.
Father leans toward doll; boy stands behind him in the doorway. Keep the pencil line visible as the distance marker.
Same low table angle, doll’s two feet now beyond the pencil line toward father. No lifted foot or walking mechanism.
Father half-turns toward boy in the doorway. The child speaks softly with an ordinary serious face, no supernatural effect.
Child close-up with doll along his eyeline at table height. Select the instant his gaze drops; no multiple eye positions.
Hold on still doll at its last position beyond the line. Father’s offscreen shouting does not animate or anger it.
Medium close-up, father covers his own mouth with both hands in the chair. Keep anatomically separate fingers, doll outside crop.
Daylight return to the same shop. Min Thant carries the single doll under one arm; Nyi Nyi is absent from this trip.
Contact insert: doll’s head tips against the inner wrist holding it. The head rests against the skin and stays whole and attached, its painted smile unchanged.
Behind-LEFT-ear macro shows exactly three small blue paint marks on the rigid head surface; no cotton replacing the head.
Counter composition with ordinary shopkeeper opposite Min Thant and doll between. Shopkeeper unalarmed, no mystical costume.
Shop storage insert: open cardboard box with used paint tins and scrap paper. Do not relocate camera inside the forbidden workroom.
Close reaction on father above counter, his eyes lowered toward the doll’s marked ear; shop daylight remains unchanged.
Warm daylight memory at an ordinary table. Living mother crafts with son; the scene contains materials, not a ghostly apparition.
Memory macro: exactly three small blue-painted fingertips reach toward the doll’s left ear; retain their later mark spacing.
Father lifts the same doll from the counter toward exit. Shopkeeper’s raised hand stays in background; no duplicated action stages.
Low corridor shot with boy’s ear near floor beneath closed workroom door. Black gap reveals no shoes or interior contents.
Medium shot of father pulling boy upright by one arm. Keep the contact readable and keep the boy’s arm a normal, correctly proportioned child’s arm.
Close adult hand compresses the doll’s soft torso as father answers. Keep the paper head rigid and unchanged.
Boy recedes down corridor and looks back; doll in father’s hand turns up toward father rather than toward the child.
Evening work insert at living-room table. Small craft blade lifts only a paper flap at head base; the head stays whole and firmly attached and every surface stays intact.
Macro through the small base opening. Dry layers of pasted newspaper and handwriting; no electronics or organic contents.
Focus on rounded ink strokes on one inner paper layer. Keep writing partly obscured so no invented quotation is generated.
Father holds one torn strip beneath lamp, incomplete ink marks only. Show fragile paper edges and a steady single pair of hands.
Second strip partly stuck to underlying layer. Fingers stop peeling; do not show a whole readable letter or expose a figure.
Earlier NIGHT memory at a kitchen table: living Thet Htar writes alone under a warm lamp; no daylight requirement.
Doll lies face-up with its small base opening visible beside extracted scraps. Head remains attached; crown has not been struck.
Night bedside view: boy’s eyes closed under blanket, father’s hand stops above hair without contact. Do not show mother.
Match shot 71. Boy has opened his eyes toward father; the suspended hand remains above, not touching or multiplying.
Low doorway view: doll at the threshold directs its face up at father. Boy remains farther inside, out of its direct eyeline.
Choose the packed instant: cloth-wrapped doll inside an open box as flaps are lowered; one heavy plain book waits beside it.
Child stands on bedroom side, father on corridor side. Quiet disagreement at the threshold, no doll rushing toward the boy.
Exterior view of bedroom lock as father secures it; boy’s hand is safely inside, no trapped fingers in the jamb.
Father leans against the now-closed door with key in one fist. Night bulb isolates ordinary tension, no threatening shadow creature.
Close interior front-door hardware, bolt and chain engaged. Distinguish this entrance from the child’s door and workroom padlock.
Tabletop view of father collecting paper fragments in one hand. Marks stay unreadable; the doll is not automatically on the table.
Living-room box closed with the same plain heavy book on top. No transparent box, escaping doll or lifted lid.
Father presses ear toward the outside of locked bedroom door. Keep unseen speakers offscreen; fear is in his expression.
Door-only shot, no change to its closed position. Mother’s voice does not create an image, silhouette or shadow of her.
Doorway reveal: boy sits in bed and the single doll is beside him. Do not include the box or a second doll in this frame.
Bedside medium close shot of their unequal hold on one doll. Boy grips one small arm; no stretched toy limbs or wrestling tableau.
First sight of the marks on the boy’s LEFT wrist: four pale pink fingertip patches on smooth closed skin, his other small hand partly covering them.
Boy backed against headboard with father’s single phone held behind his back. Screen glow visible, unreadable call interface.
Father holds phone to ear, controlled face; boy behind remains distressed. Aunt is a voice offscreen, never another figure here.
Tight torso insert: doll’s hard head presses father’s sternum inside his grip; the cotton body compresses against him and both the doll and the man stay whole and intact.
After landing, doll stands on both feet at threshold facing father, boy behind father. Keep same phone in father’s hand.
Static wide composition, doll–father–boy in that order. Nobody moves; use spacing and held posture to show the chance to stop.
Phone face-up on table glows with an incoming call. Closed back workroom door deep behind; no caller name or readable digits.
Father crouches to boy’s eye height, hands open. Boy looks past him toward floor-level doll; father still separates them.
Child close-up, controlled and resolved. Keep seven-year-old proportions; do not morph his face into his mother’s face.
Focus on small hands gripping blanket hem as boy speaks. Still posture, no supernatural text or literal vision of the past.
Three-person geometry stays doll–father–boy. Boy speaks from bedside, father listens; do not put doll between father and child.
Quiet dry-eyed child close-up in the same night room. His account does keep the mother out of frame entirely and stay on the living people in the room.
Father braces one hand against the table, pale with shock but naturally human. Stay in the present moment in this room.
Low insert with doll now beside father’s sandal, head up toward him. Preserve foot size and thirty-centimetre doll scale.
Held-in crying carried entirely by the mouth and jaw, with his eyes on his father the whole time. The frame holds one child’s face and nothing else.
Doll sharp foreground, sweating father midground, crying boy behind father. Fixed painted smile contrasts with human expressions.
Extreme close-up of closed painted red lips. Voice remains implied; no speaker grille, mouth opening or spectral overlay.
Father freezes in recognition under the same light. No image of the earlier violent night and no additional person behind him.
Father’s downward viewpoint on doll near his shoes. Mother remains an offscreen voice; no female figure or face inside the doll.
After impact at skirting board, a single paint flake beside doll’s head. The red painted smile remains unchipped.
Hold the fallen doll against wall, showing only old crazing and new side chip. No structural crown split before the hammer.
Key raised in father’s hand, boy stepping down from bed behind. This occurs before moving down the corridor to the workroom.
Corridor-side camera at oblique angle; door opens only four or five inches into black. Shirt covers father’s nose, no interior detail.
Tight threshold crop: father retrieves one hammer from just beyond the jamb. Door and arm block every view into the room.
Boy alone in a corridor, one hand over his nose, plainly reacting to a smell. The air itself is clear and the corridor holds only the furniture already named.
Living-room table now holds upright doll and one paper fragment in front. Side chip persists; crown not cracked yet.
Freeze just after the first hammer strike: one new crown crack, hammer near top. Never show a second strike or shattered head.
Macro of fine dry paper dust escaping the new crack under lamp. The dust is plain dry paper dust and nothing else forms in it.
Raised hammer pauses above already cracked crown. Keep one hammer and one doll; the questioning voice has no visual speaker.
Crown-crack macro with compressed paper layers fading into darkness; nothing living or recognizable inside the opening.
Locked front door seen from indoors with ordinary neighbours’ shadows beyond. No police markings or readable signs needed.
Wide table–father–boy composition. Father holds hammer down; cracked doll faces him, boy watches from corridor, entrance stays locked.
Close on the father’s face as he finally says it out loud, the boy soft behind him. Focus on expression; stay entirely on his face and on the living boy behind him.
A seven-year-old crying openly at last, photographed as a plain tender close-up. His skin and features stay whole and ordinary throughout. If his hands enter frame the faint left-wrist marks stay as established.
Father begins another explanation, one half-raised hand. Maintain his position relative to the table and entrance.
Low tabletop close-up: cracked doll’s head lifted only a few degrees. Body remains still, smile unchanged, no levitation.
Doll at table edge reaches father’s chest height; father bends his gaze down to meet it. Do not enlarge doll to adult size.
Father weeps, hands lowered, facing the stationary doll. Truth stops approach but does not repair damage or produce glowing light.
Match doll’s table-edge position from shot 121. Crown crack unchanged; no retreat, healed surface or altered smile.
Father catches boy’s LEFT forearm near entrance. Frame enough bodies to show who holds whom, avoiding an isolated ambiguous hand.
The boy sets his father’s hand aside himself, which he has never done before, so it reads decided and quiet rather than panicked. Each of them has two ordinary arms and two ordinary hands and both are calm.
Photographed from behind the father, his back to camera and the boy mostly screened by him. The moment reads from the two postures and from the boy’s eyes rather than from anything the man’s hands are doing. The front door moves visibly in its frame under knocking from outside.
Over the father’s shoulder, the child looks toward the doll behind him. The father keeps his own face and the doll keeps its own head at its own small size.
Shoulder-contact insert shows a tiny doll hand resting lightly. The source’s paper-like sensation must not transform it into a human hand.
Tight profile pairing father’s ear with doll’s cracked head behind shoulder. Two separate heads, no fusion or new spectral face.
Choose the instant boy crouches for fallen keys. Father rigid behind, doll at shoulder; keys are not simultaneously falling and held.
Father speaks without turning while doll’s cheek touches his. Retain tiny doll scale and closed painted mouth.
Extreme close-up of father’s temple and ear alone. Internal click is conveyed by stillness; no hole or exposed anatomy.
Human lips compressed shut, tense surrounding muscles. His lips are ordinary, whole and unmarked, and his mouth is his own.
Face subtly matte and taut, ordinary skin intact, eyes fixed open. Suggest transformation without cracks in flesh or a full monster.
Boy unlocks entrance in foreground; father rigid behind with arm unable to rise. Preserve wrist marks and one set of keys.
Door opens to neighbours’ bright exterior light at NIGHT. Boy looks back; no sudden daylight or change of chronological time.
Father’s still face, lips shut, eyes open. No visible speech, miniature man inside the head or second portrait overlay.
Narrow occluded viewpoint toward child being gathered by neighbour outside. Maintain one continuous image and night exterior light.
Tight mouth-and-eyes crop, corners held in a small unnatural smile. Human face stays intact; distress comes from eyes.
Final human face, small fixed smile with tears. Keep identity recognizable, he remains a whole ordinary boy for the length of this shot.
Empty living room after disappearance, phone and keys on floor. Neighbours at threshold; father completely absent from shadows and reflections.
Tabletop aftermath: cracked doll upright beside one hammer, torn paper and paint flakes. No new father doll or repaired crown.
Neighbours’ corridor reactions at night, camera outside workroom. Door leaf hides contents even though they have opened it.
Next morning at the aunt’s table, she gently works balm into the boy’s LEFT wrist. The patches are pale pink and already fading; the doll is still where it was left.
Two-shot at same table, aunt stops moving her hand as boy explains. Keep morning light and wrist treatment continuity.
Earlier NIGHT memory of locked bedroom: boy and intact doll sit together facing the closed door, quietly protective, no aunt.
Boy raises exactly three fingers for aunt to see at table. No blue paint on present-day fingers; this is an explanation.
Left-ear macro of the three blue fingerprints. Crop crown out to focus on identification rather than shifting damage chronology.
Earlier shop memory: boy recognizes intact doll without delight. No crown crack, wrist marks or aunt in shop.
Earlier bedroom memory, intact doll on shelf facing doorway while boy rests. Its attention stays on father’s approach, not on child.
Wide memory locks geometry: doll, father, boy in that order. Doll looks directly at father and never through him toward child.
Morning aunt-house two-shot. Boy carefully explains, aunt listens; no literal ghostly mouth or voice illustration.
Earlier NIGHT memory: living mother crouches at child’s bed under warm doorway light, finger to lips. No daylight or smiling craft scene.
Present-day boy at his aunt's house in flat daylight, turning his own LEFT wrist towards himself and speaking quietly to himself. Frame his face and both hands together. The room holds only the ordinary furniture already named.
Guest-bed request, aunt hesitates in doorway. Doll still absent because retrieval has not happened yet.
After retrieval, single cracked doll on aunt’s bedroom shelf. Same LEFT-ear marks and original smile, crown unrepaired.
Aunt glances at stationary doll, unconcerned, before leaving. No movement, menace or alteration of its eyes.
Boy alone on guest bed looking up at doll. Aunt has left; ordinary daylight remains, no figure for father’s voice.
Cracked doll face close-up in daylight, fixed painted mouth. No miniature father or mouth motion despite the voice.
Boy’s recognition close-up, eyes fixed offscreen toward shelf. Hands tense on blanket if visible; no father in room.
Earlier daylight cycling memory with living father supporting saddle behind child. No doll, wrist marks or transformation texture.
Earlier memory of ordinary father speaking a lie in warm light. No present-day father appearing in aunt’s home.
Boy retreats toward headboard with eyes on shelf. Doll stays there, not chasing him; aunt still outside room.
Aunt returns and approaches tearful boy at headboard. Keep their relative height and the shelf position established earlier.
Aunt holds boy gently; his gaze goes past her to doll. Warm daylight and protection, no altered doll expression.
Close on aunt’s open hand approaching doll without touching yet. Crown crack remains at its original position.
Boy’s small hand stops aunt’s wrist before it reaches shelf. Distinct hands, no grip on the doll itself.
Close child’s conflicted face with his hand still on aunt’s wrist. No montage of mother and father inside the head.
Boy’s hands in lap visibly tense, aunt waiting nearby. Freeze one tremulous posture rather than duplicate fingers or blur trails.
Child deliberately denies fear, eyes still anxious. No speech bubble or word on screen; doll outside this close-up.
Aunt turns toward shelf while boy goes still beside her. The click is only their reaction, no printed sound effect.
One doll head partway turned toward boy, body fixed on shelf. Preserve crown crack and fixed smile, no multiple heads.
Wide final geometry: doll’s direct eyeline reaches boy, empty space behind him; aunt sits beside, never blocking that line.
Extreme crown-crack insert, dark dry paper interior only. Father’s frightened voice does not appear as a face or silhouette.
Final still: doll faces boy, aunt beside him follows his gaze. Original painted smile and unrepaired crack; no new creature revealed.
`.trim().split('\n');
