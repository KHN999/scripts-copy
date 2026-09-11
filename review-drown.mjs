export function reviewDrown(SCENES, CAST, LOCS) {
  CAST[0].prompt='Burmese pipe-and-pump repairman aged forty, solid medium build, medium-brown skin, broad rectangular face, dark-brown eyes, straight brows, short black hair with slightly receding temples, faint black stubble. Faded slate-blue work shirt with sleeves rolled, charcoal cargo trousers, black lace-up work boots. Plain black headlamp band at forehead. Base identity uninjured; later five pale finger-shaped bands persist around RIGHT ankle. No tools held in the identity plate.';
  CAST[1].prompt='Maung Lin, Burmese man aged twenty-two, tall very thin build, medium-brown skin, narrow long face, dark-brown eyes, prominent ears, close-cropped black hair, clean-shaven. Oversized faded khaki work shirt, dark navy work trousers, brown lace-up work boots. Plain orange webbing safety harness fitted over shoulders and thighs for tank scenes. Healthy and talkative before incident. Hospital and later ordinary scenes remove the harness, never change his identity.';
  CAST[2].prompt='U Thaung, Burmese caretaker aged sixty-three, thin stooped build, medium-brown skin, long lined face, hollow cheeks, dark-brown eyes, receding grey-black hair and patchy grey stubble. Faded beige short-sleeved shirt, dark brown checked longyi, black rubber sandals. Ordinary watchful man, frightened rather than sinister. Heavy key ring at waist only in warehouse scenes; alone without background or hand-held props for identity plate.';
  LOCS.find(l=>l.name==='သံပြား').prompt='Head-sized round rusted steel plate sealed flush against the concrete tank wall at FLOOR level, its lower edge meeting dry floor. Rusted fasteners around perimeter, no opening or gap. Shallow old scratched marks partly concealed by corrosion, never readable words. Dry dust, no water, no fingers or supernatural incident in reference plate.';
  const S=n=>SCENES[n-1];
  S(22).p='Narrator checks an ordinary analogue wristwatch with two unnumbered hands approximately indicating ten forty, the face oblique and partly shadowed. No readable digits or brand.';
  S(25).p='Oblique torch-lit macro of old scratched marks on rusted steel, most strokes hidden beneath corrosion or shadow. The narration supplies their meaning; no legible generated inscription.';
  S(30).p='From below hatch, U Thaung’s head and shoulders appear set back from the rim as he calls downward, feet safely away from the opening. Bright warehouse light beyond.';
  S(41).p='The two workers pause in the dry tank, turning their heads toward an unseen breathing sound near the sealed plate. No wet cloth, covered face or hidden person is visualized.';
  S(50).p='Maung Lin’s face close to camera, eyes wide, clear bubbles emerging at mouth then hanging and dropping downward through dry dusty air. No submerged camera or filled tank.';
  S(57).p='An unoccupied section of dry tank between three pillars, still dust and concrete. Both workers remain at the ladder outside the crop; unseen third breath has stopped.';
  S(63).p='Narrator strikes concrete wall with one heavy hammer while Maung Lin slumps supported against the ladder behind. A little pale dust, no fire or sparks shower.';
  S(67).p='Narrator’s RIGHT black boot partly sunk into solid concrete up to ankle level, floor completely unbroken and dry around the trouser cuff. No hole, crack, liquid or fleshy texture.';
  S(68).p='Close on narrator’s RIGHT boot partly swallowed by solid dry concrete; his trouser leg tenses as he feels something unseen below. No wet hair laid on the floor or visible head.';
  S(69).p='Narrator’s RIGHT ankle at the unbroken concrete surface, leg tense with pressure felt at the hidden foot below. Do not show the foot through concrete, a visible mouth, teeth or lips.';
  S(76).p='Narrator’s bare RIGHT foot clears the dusty concrete as he reaches the ladder; the black right boot remains below the floor surface, unseen. His LEFT boot stays on.';
  S(79).p='Above-ground aftermath reaction: narrator at warehouse hatch edge, looking toward darkness and shaken by the sound he heard. Keep this actual location, no literal swimming pool or underwater cutaway.';
  S(79).l='ဂိုဒေါင်';
  S(88).p='Subjective murky underwater memory: a few blurred upturned facial fragments at the edge of visibility far below, overlapping darkness with no complete head, body, standing figure or countable crowd. No eyes or anatomy resolve clearly; depth has no visible bottom.';
  S(95).p='Historical insert of anonymous worker’s hands marking a newly fitted steel plate at floor level, seen at grazing angle. His hand obscures the scratches entirely; no readable text or face.';
  S(112).p='Extreme close-up of the RIGHT sole with a subtle lip-shaped indentation in intact skin, barely changing shape as a voice is heard. No actual mouth opening, lips, teeth, blood or face.';
  for(const n of [15,22,34,38,41,45,48,53,54,55,62,63,66,67,68,69,73,75,76,77,78,79,89,96,97,101,104,105,106,107,108,109,110,111,112]) {
    if(n!==96) S(n).w=[...new Set([...(S(n).w||[]),'ကျွန်တော်'])];
  }
  for(const n of [38]) S(n).w=['ကျွန်တော်'];
  for(const n of [41,43,44,45,48,49,53,55,62,63,73,74]) S(n).w=[...new Set([...(S(n).w||[]),'မောင်လင်း'])];
  S(87).w=[]; // Subjective camera, no visible swimmer or literal narrator in water.
  const gloss={25:'သံချေးဖုံးနေတဲ့ ခြစ်ရာတွေကို အနီးကပ်။ စာကို ပုံထဲမှာ မဖတ်ရ၊ အဓိပ္ပာယ်ကို ဇာတ်ကြောင်းက ပြောမယ်။',41:'ရေစိုအဝတ်အောက်က အသက်ရှူသံလို ကြားရတာ။ အလုပ်သမားနှစ်ယောက် နားထောင်နေတဲ့ပုံပဲ၊ အဝတ်နဲ့မျက်နှာကို တကယ်မပြရ။',68:'ညာဖိနပ် ဘိလပ်မြေထဲနစ်နေပြီး အောက်ကစိုနေတဲ့ဆံပင်ကို ခံစားရတာ။ ကြမ်းပြင်ပေါ် ဆံပင်မပြရ။',69:'ခြေဖမိုးအောက်မှာ ဖိကပ်ခံရတာကို ညာခြေတင်းနေတဲ့ပုံနဲ့ပြ။ ဘိလပ်မြေဖောက်ပြီး ပါးစပ်မပြရ။',76:'ညာခြေဗလာနဲ့ လှေကားဘက်တက်မယ်။ ညာဖိနပ်က ကြမ်းပြင်အောက်မှာ ကျန်ခဲ့ပြီး မမြင်ရ။ ဘယ်ဖိနပ်တော့ ဝတ်ထားဆဲ။',79:'အပေါ်ဂိုဒေါင်ကို လွတ်လာပြီး အောက်ကအသံကြောင့် ထိတ်လန့်နေတဲ့ ကျွန်တော့်တုံ့ပြန်ပုံ။ ရေကူးကန်ပုံ တကယ်မထည့်ရ။',88:'မောင်လင်းရဲ့အတွေ့အကြုံထဲက ရေအောက်အမှောင်။ မော့နေတဲ့မျက်နှာအစိတ်အပိုင်း မထင်မရှားသာ၊ လူပုံအပြည့်နဲ့ မတ်တတ်ရပ်နေသူ မပါရ။',112:'ညာခြေဖဝါးအသားမှာ နှုတ်ခမ်းပုံချိုင့်ရာ၊ အသံကြားရပေမယ့် တကယ့်ပါးစပ်နဲ့သွား မထည့်ရ။'};
  for(const [n,g] of Object.entries(gloss)) S(Number(n)).g=g;
  if(DIRECTIONS.length!==SCENES.length) throw new Error('Drowning review count mismatch');
  SCENES.forEach((s,i)=>{
    const n=i+1;
    let state='Only named living workers and ordinary helpers may appear as complete people. The unseen presence never becomes a full ghost, clear head, body, corpse or skeleton.';
    if(n===87||n===88) state+=' This is Maung Lin’s subjective underwater memory, distinct from the physically dry tank; show no tank floor or submerged rescue workers.';
    else if(s.l==='ရေကန်ထဲ'||s.l==='သံပြား') state+=' Physical tank is completely DRY: dusty concrete, dry wall, no waterline, wet floor, puddle, algae, reflection or leak. Water can exist only at the body location explicitly described, never reaching concrete.';
    if((s.w||[]).includes('ကျွန်တော်')) state+=n>=75&&n<=83?' Narrator has bare RIGHT foot with early pressure marks; LEFT black boot remains on. Work shirt wet only on chest from Maung Lin’s mouth.':n>=84?' Later narrator wears clean slate-blue shirt and charcoal trousers; RIGHT ankle retains five finger-shaped bands, pale in the final scenes.':' Narrator wears slate-blue shirt, charcoal trousers and both black work boots. RIGHT ankle is affected only from shot 66 onward.';
    if((s.w||[]).includes('မောင်လင်း')) state+=n===1||n===6||n>=84?' Maung Lin has no work harness in hospital or ordinary workshop scenes; same young face.':' Maung Lin retains khaki shirt, navy trousers, brown boots and orange safety harness attached to rescue line; body stays human, never a literal water sack.';
    s.d=`Detailed scene direction: ${DIRECTIONS[i]} ${state}`;
    s.style='Present-day Yangon, grounded industrial and domestic cinematic photorealism, 35mm texture, 16:9. Use the specific shot’s warehouse daylight, underground work light, clinical daylight or bedroom night lamp. Single coherent still instant, no panels or visual sound symbols. Physical settings remain opaque, no X-ray surfaces. No legible writing, brand, signage, captions, gore or watermark.';
  });
}
const DIRECTIONS=`
Hospital flash-forward, Maung Lin unconscious but alive with oxygen mask. No tank equipment, water extraction spectacle or corpse appearance.
Tank floor establishing close-wide: pale powder dust and dry concrete. No moisture anywhere, three-pillar layout consistent.
Flash-forward face one foot from lens in dusty air, hair only subtly lifted despite close crop. No underwater blue wash or waterline.
Mouth macro, a few clear bubbles suspended then falling downward. Keep dust beyond, no flood or bubble stream rising toward surface.
Daylight workshop hands repairing pump with wrench. Ordinary work scene, no tank, headlamp beam or supernatural pressure marks yet.
Healthy Maung Lin laughing with coiled hose in daylight, no confined-space harness needed in this introductory workshop scene.
Empty workshop bench with two tool sets in dull daylight. Absence evokes lost chatter, no death certificate or ghost.
Daylight exterior of three-storey converted print works, warehouse below, shuttered dwellings above. No readable signs or invented haunted facade.
Warehouse slab opened with rubble aside, hatch structure visible beneath. Daylight discovery, no flooded pit or person below yet.
Tools, gas meter, air hose and harness laid out beside hatch. Readout unreadable, no invented safety rating or procedural diagram.
Top-down round hatch with cement around rim, still sealed. Do not confuse large overhead hatch with small wall plate.
Macro broken rim seal reveals at least three distinct cement layers. No inscribed years or cutaway of tank contents.
Maung Lin near hatch, caretaker answers several feet back. Distinct age and clothes, caretaker not standing over the opening.
Caretaker at warehouse pillar with waist keys, gaze toward hatch. Ordinary fear, no sinister smile or supernatural shadow.
Narrator checks equipment in single preparation instant. Meter obscured, air line and safety gear clear, no extra instruction text.
Maung Lin shines downward from rim; beam ends on dry dust ten feet below. No reflective water surface.
High view through opening establishes finite tank: exactly three square brick pillars, capped wall pipes, dry floor.
New aluminium ladder lowered beside unusable rusty fixed ladder. Maintain new ladder as escape route throughout, no disappearing ladder.
Narrator’s black boot lands first, puff of dry dust. No footprint filling with water or supernatural hand yet.
Maung Lin descends new ladder after tool bag has been lowered. One man climbing, hatch daylight above, tank light below.
Caretaker sits back from rim to watch, keys in lap. Warehouse still in late-morning daylight, no midnight atmosphere.
Oblique unnumbered analogue watch, approximate ten-forty hand positions. No readable numerals, logo or textual time overlay.
Wall pipe ends capped and rusted long ago, too small for person. No running water or open escape pipe.
Small head-sized wall plate at floor junction, sealed flush with fasteners. Distinguish its scale from overhead entry hatch.
Raking close-up of corrosion and mostly hidden scratches. Meaning carried by narration, no invented Burmese or English sentence.
Maung Lin laughs toward plate while touching concrete nearby. No actual face behind metal, rust remains dry.
Empty middle of tank, three pillars and dusty light for echo. No visible laughing person or mouths among shadows.
Maung Lin's smile freezes, eyes startled, plate blurred behind. Do not animate lettering or reveal speaker.
Torch held on unchanged flush plate. No bulge, fingers or opening at this early beat.
Upward tank POV toward caretaker kept back from rim. He calls down, warehouse daylight, no caretaker already inside tank.
Two workers at separate walls, narrator checks crack and Maung Lin loosens clips. Work lamp between, rescue ladder unobstructed.
Upward concrete-ceiling view, slight dust sifting. Footstep source stays unseen, no feet transparent through slab.
Caretaker still seated at same above-ground position. Seen through hatch, not a second man walking across tank roof.
Narrator’s hand just withdrawing from LEFT wall after sound. Concrete solid, no literal footsteps or face within it.
Maung Lin half-turns from pipe work toward narrator. Same harness and shirt, still unaware at this point.
Low unbroken dry floor for sound below. Fine dust only, no puddles, trapdoor or ghost footsteps drawn on surface.
Narrator’s downward view of both black boots; no visible hand or opening. Ground remains dry and intact.
Weight shifts between narrator’s boots in one posture. Small dust disturbance nearby, no extra boot prints appearing as text-like trail.
Maung Lin edges toward aluminium ladder, eyes low, voice implied. No water or respiratory effects before their stated onset.
Empty space between workers for unseen third breath. No new figure, silhouette or face under cloth.
Reaction of two workers to wet-sounding breath. The cloth simile remains unseen; do not add actual wet fabric or masked face.
Maung Lin stops near ladder and looks at one boot. Exterior and dust remain dry; water felt inside is invisible.
Brown assistant boot macro, dusty laces and dry leather. No water spills from boot or wets floor.
Narrator pushes assistant toward ladder by wrist. Keep assistant one or two rungs up, narrator on floor supporting below.
Assistant coughing on ladder, small spray from mouth toward narrator's face. Water localized in air, floor remains dry.
Caretaker peers over rim frightened rather than surprised. No assistance achieved yet, keep hatch fully open.
Caretaker asks downward at rim, anxious eyes. No visible new entity that explains his knowledge.
Maung Lin’s fingers slip from rung while narrator supports his waist. No fall, dislocated arm or broken ladder.
Narrator strains under assistant’s human weight at ladder. Clothing sags, no water-filled transparent torso or literal sack.
Close face struggling in dry air, bubbles hang then fall DOWN. No rising bubbles, waterline or submerged camera.
Upward hatch view: caretaker gone but bright daylight remains. Do not extinguish work light or turn aperture completely black.
Dark iron lid begins encroaching on bright circle above. New ladder and rope remain below, no sealed lid yet.
Narrator calls upward holding assistant, hatch approximately half covered. Show both living men; no written plea on image.
Assistant's mouth wets narrator's chest locally. Keep other shirt areas and tank walls dusty, no water stream pooling below.
Floor directly under soaked chest remains entirely dry. Any airborne droplets vanish before contact, no wet footprints or reflection.
Caretaker mouth at half-covered hatch gap, still above ground. Do not shrink gap to fully sealed darkness prematurely.
Empty section between pillars for stopped third breath. Workers remain offscreen at ladder, no abandoned tank implication.
Unchanged sealed wall plate in raking light. Knock is sound only, no hand silhouette embossed through metal yet.
Four pale fingertip fragments emerge at sealed lower plate/floor junction. No gap, entire hand, face or person coming through.
Macro of nail-less wrinkled pale fingertips, intact skin. No severed ends, exposed bones, wounds or gore.
Finger fragments sweep dry dust toward ladder, leaving streaks. No wet trail, opening plate or palm/body reveal.
Assistant's hand grips narrator's forearm, pleading eyes and water only at lips. Source of each hand unmistakable.
Narrator strikes wall with hammer, assistant supported against ladder. Dust at contact, no electrical sparks or fire.
Dust falls from slab after hammer blows. Hatch above still partly blocked, no helper faces before reopening.
Low dusty surface disturbed along a line by sound below. Floor stays unbroken, no visible running body.
RIGHT ankle shows five shallow pressure indentations above black boot. Grasping hand invisible; no injury or left/right swap.
RIGHT boot sinks into perfectly solid dry concrete to ankle. No crack, hole, mud, liquid or concrete turning to flesh.
Close embedded RIGHT boot and tense trouser leg. Wet hair is felt unseen under surface, never displayed on dry floor.
Pressure at hidden right foot conveyed by ankle tension above opaque floor. No visible mouth, teeth or X-ray foot.
Narrator's face and clothed chest strain for breath. No exposed ribs, internal organs or actual body deformation.
Wide crop of dry pillars and fallen work light, workers outside main crop. Presence remains unseen, no complete figure.
Hatch slides open again, daylight column and two ordinary workers at rim. Only rescuers here, no supernatural faces.
Narrator points toward assistant's safety line, unable to speak. His RIGHT foot still trapped, no miraculous free standing pose.
Assistant’s orange harness takes load through rope and lifts him. Correct attachment to harness, no rope around neck or unsupported floating.
Bare RIGHT foot pulls free, dust disturbed but solid floor unchanged. LEFT boot remains on, no mouth opening in floor.
Narrator reaches ladder with bare RIGHT foot, LEFT boot intact. Lost right boot remains unseen below concrete, not upright beside him.
Upward ladder POV beneath assistant being hoisted. Lower rungs shake but no climber or ghost revealed below.
Warehouse helpers haul narrator through hatch, bare RIGHT foot last to clear. Assistant already above; keep one copy of each.
Narrator’s above-ground reaction at hatch edge. Avoid literal underwater swimmer scene for the narrated comparison.
Assistant on side on warehouse floor, local mouth runoff allowed ABOVE tank. Ordinary workers call help, no large puddle or drowning room.
Caretaker sits against pillar with hands over ears. Rescue continues outside crop, he has not become a ghost.
Narrator grips caretaker shirt front, caretaker stares at hatch. Narrator has wet chest, bare RIGHT foot and LEFT boot.
Caretaker stumbles back still staring toward opening. Same keys and longyi, no additional attacker.
Hospital recovery, Maung Lin awake with nasal oxygen, no harness. Exhausted young man alive in clinical daylight.
Third-day bedside conversation, narrator clean clothes, assistant hospital clothing. No one submerged and no tank hardware in ward.
Thin assistant hand grips blanket, cannula ordinary and unlettered. No grip-mark continuity borrowed from narrator's ankle.
Subjective underwater memory only: distant hatch-like light above murky depth. No visible worker body, dry tank or physical waterline.
Murky depth hints at indistinct upturned facial fragments only, no standing people, complete silhouettes or clear corpse faces.
Back in real hospital, narrator draws feet toward chair after account. Normal daylight and dry floor, no water under bed.
Later investigation documents and old building photo, all writing hidden or out of focus. No readable death record or body photo.
Contemporary dry-tank overview to accompany history. Exactly three pillars, no historical drowning reenactment or bodies.
Old pump and coiled hoses in storage, dusty and inactive. The account of missing bodies does not depict them.
Single survey frame of solid walls and capped narrow pipes. No escape-sized opening, ghost doorway or flooded lower chamber.
Night residential stairwell pipe, one ordinary bulb. Knocking and coughing do not create mouths or wet leaks.
Past sealing insert of fresh plate at same low wall opening. Marking hand hides writing, no readable inscription or aged rust.
Present caretaker lowers face to hands during account. No age regression or image of missing brother.
Later plain-room two-shot, caretaker and narrator seated apart. Clean clothes, no tank background imported from reference.
Caretaker profile avoids eye contact, ordinary guilt and fear. No demon-like face or extra figure behind him.
Empty chair in same plain room after last meeting. No disappearance effect or literal ghost seated invisibly.
Later warehouse contractors fill opening with wet CEMENT, not water. Both protagonists absent; no flooded working tank image.
Final-pay workshop doorway, narrator offers bottled water and assistant refuses. No harness, visible cash text or new bystander.
Assistant's demonstration with one tiny sip, ordinary small glass in daylight. Keep water contained inside glass and mouth.
Assistant’s jaw and throat as he explains, glass in hand. No second mouth growing in neck or visible person swallowing below.
Later RIGHT ankle close-up with exactly five pale finger-shaped bands. Natural unbroken skin, no left ankle or fresh bleeding.
Bedroom-night valve closing and bathroom door shut, one lamp. No plumbing leak or flooded room.
Narrator’s bare RIGHT sole wet, LEFT foot and surrounding sheet dry. Five pale RIGHT-ankle bands visible if within crop.
Same wet RIGHT foot ten minutes later, towel beside bed. No duplicate feet or new water source above.
Macro of droplet beading directly from RIGHT heel skin, one formed bead in sharp focus. No tear in skin or dripping tap.
RIGHT sole centre indented in two lip-shaped arcs. Surface stays intact; no actual lips, teeth, mouth cavity or face.
Same sole impression slightly deeper during inhale, one still state. No breathing animation panels or duplicated foot.
Lamp-lit narrator holds breath looking down at RIGHT foot. Distress in eyes and posture, no gore or collapsed torso.
RIGHT sole impression changes subtly as voice is heard. Keep skin closed, no speaking human mouth grafted onto it.
Final medium shot of narrator frozen at bed edge staring at RIGHT foot. Dry room and sheets, no visible crowd below floor.
`.trim().split('\n');
