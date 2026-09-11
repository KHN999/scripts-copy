export function reviewTree(SCENES, CAST, LOCS) {
  CAST[0].prompt='Burmese male driver aged thirty-two, lean practical build, medium-brown skin, long oval face, dark-brown eyes, straight brows, short black hair, clean-shaven. Faded denim-blue long-sleeved work shirt, sleeves rolled, charcoal trousers, black work shoes. Base reference clean and shirt back intact. Later the same shirt is scuffed and shredded across the back from crawling in dry concrete; no headlamp worn and no tools held in this identity plate.';
  CAST[1].prompt='Kyaw Swa, Burmese man aged thirty-five, stocky broad-shouldered build, medium-brown skin, square face, rounded nose, short thick black hair, faint moustache, dark-brown eyes. Olive-grey work shirt with rolled sleeves, tan work trousers, brown lace-up boots. Cheerful ordinary face. Plain belt; canvas tool pouch belongs to working scenes, not the white identity plate. Both legs healthy in base reference.';
  CAST[2].prompt='Burmese motorcyclist aged forty, wiry build, medium-brown skin, narrow weathered face, dark eyes, short black hair with a few grey strands, clean-shaven. Faded beige collared shirt, dark navy trousers and black sandals, plain scuffed open-face helmet worn normally. Identity plate alone with no motorcycle, cargo or scenery.';
  CAST[3].prompt='Kyaw Swa’s daughter, Burmese girl aged five, small child proportions, medium-brown skin, round cheeks, large dark-brown eyes, short black hair in two small plaits secured with red ties. Pale peach cotton house dress, barefoot. Bright ordinary child; she appears only at home and never in the forest.';
  LOCS.find(l=>l.name==='ကားဘေး').prompt='Roadside position of the same compact faded cream cab-over flatbed work truck, dull blue-grey cargo bed rails, plain black bumpers, no markings. LEFT rear tyre flat but wheel still fitted; jack beneath left rear sill, loose spare initially leaned against tailgate. Headlights on, engine stopped. Empty surroundings, dry dirt and dense forest; no people, damage to roof or creature in this plate.';
  LOCS.find(l=>l.name==='သစ်ပင်ပေါ်က ကား').prompt='The same faded cream cab-over flatbed truck with blue-grey bed rails wedged roughly fifty feet high in a large tree fork in daylight. Four broad parallel dents across roof sheet, windscreen collapsed inward, LEFT passenger door open, no occupant, headlights off. Rear tyre remains flat; no spare attached. Show tree trunk for height and scale, no creature or readable marks.';
  const S=n=>SCENES[n-1];
  S(16).p='One continuous wide frame with Kyaw Swa working by the rear wheel in foreground and high black canopy above. His metal tools shift in the hip pouch; the distant darkness seems to respond to that sound.';
  S(26).p='A single low-angle view of the overhead black canopy now lower and closer above the men’s position; familiar fixed tree trunks provide scale, no comparison panels.';
  S(32).p='Four enormous fingertip fragments descend around the truck: one at roof, one at tailgate, one at ground, and one toward Kyaw Swa’s calf. Their upper connections disappear into darkness; no full hand or arm arrangement is visible.';
  S(34).p='Narrator covers Kyaw Swa’s mouth with one hand as Kyaw Swa bites down in pain, eyes wide. Restrained close-up, no visible blood or torn skin.';
  S(41).p='Narrator sprints toward the roadside ditch as one giant fingertip strikes earth in front of him and another to his LEFT. His escape line bends between the two impacts.';
  S(49).p='Low viewpoint from culvert mouth toward Kyaw Swa half inside the truck’s LEFT passenger doorway, one injured leg outside as he tries to pull himself out of the cab. Door remains wide open.';
  for(const n of [3,8,15,21,39,43,46,69,70,71,76]) S(n).w=[...new Set([...(S(n).w||[]),'ကျွန်တော်'])];
  for(const n of [16,21,35,39]) S(n).w=[...new Set([...(S(n).w||[]),'ကျော်စွာ'])];
  S(65).w=['ဆိုင်ကယ်သမား','ကျွန်တော်'];
  S(49).g='ပိုက်ဝကနေ မြင်ရတာ — ကျော်စွာ ကားရှေ့ခန်းတံခါးမှာ၊ နာနေတဲ့ခြေတစ်ဖက်အပြင်မှာ၊ ကားထဲက ထွက်ဖို့ကြိုးစားနေတယ်။';
  if(DIRECTIONS.length!==SCENES.length) throw new Error('Tree review count mismatch');
  SCENES.forEach((s,i)=>{
    const n=i+1, day=n<=3||(n>=61&&n<=71);
    let state='The unseen creature follows SOUND, never torch or headlight beams. Show only the named fingertip, nail or forearm fragment; no upper arm, shoulder, torso, head, eyes, ear, body or complete silhouette. Canopy obscuration stays unstructured darkness.';
    if((s.w||[]).includes('ကျွန်တော်')) state+=n>=4&&n<=40?' Driver’s shirt back intact, hands and face ordinarily clean.':n<=67||n>=72?' Driver’s denim-blue shirt is dusty and torn across back, face lightly grazed with dry dirt; no blood.':' Later driver wears a clean plain pale-blue replacement shirt; subdued expression.';
    if((s.w||[]).includes('ကျော်စွာ')&&n>=33) state+=' Kyaw Swa’s LEFT calf is the injured leg; no crushed tissue or visible gore. He cannot run normally afterward.';
    if([1,2,3,4,5,6,7,8,9,10,12,14,16,17,21,22,24,29,31,32,49,50,51,52,53,54,66,67].includes(n)) state+=' Vehicle continuity: one faded cream cab-over work truck with blue-grey flatbed rails, black bumper, unmarked panels, right-hand-drive cab and LEFT passenger door. '+(n<=3||n>=52?'Four broad parallel roof dents and collapsed windscreen after attack; LEFT door open.':'Roof and windscreen intact at this stage.');
    s.d=`Detailed scene direction: ${DIRECTIONS[i]} ${state}`;
    s.style=`Bago Yoma, Myanmar, cinematic photorealism, grounded scale, restrained 35mm texture, 16:9. ${day?'Natural daylight at the specific road, recovery site or home shown; no forced night or storm.':'Dry still night, no rain or moonlight. Only established truck lights, dropped torch or faint phone screen where specified; no added spotlights. Stars remain occluded until the late-night clearing.'} One coherent still instant, no montage, motion diagram, sound lettering, text, logos or watermark. No complete ghost, corpse or gore.`;
  });
}
const DIRECTIONS=`
Daylight low wide from forest floor shows truck high in tree fork, trunk for scale. No creature holding it in aftermath.
Elevated recovery insert on roof: exactly four broad smooth dents, not holes, with collapsed windshield edge. No literal people sitting in dents.
Recovery worker looks up beside surviving driver. Ordinary helmet and no insignia; survivor’s dusty damaged clothing, no Kyaw Swa.
Night cab view along headlights, driver at wheel and Kyaw Swa passenger. Fixed cab layout; undamaged roof and windscreen.
Passenger portrait, olive-grey shirt in dashboard glow. Daughter is only mentioned, never inside truck or in forest.
Same passenger laughs, arm at open side window. Normal expression and intact clothes before the breakdown.
Rear exterior of same truck under continuous black canopy. Headlights forward, no moon, stars or distant village lights.
Close worn horn button under dashboard glow. Hand near button without sounding it now; no readable badge or dashboard numerals.
Truck stationary on verge, LEFT rear flat still attached, engine off and headlights on. No removed wheel or roof damage yet.
Wide deserted road with stopped truck’s light as only landmark. No street lamps, houses, moon or invented approaching vehicle.
Low still leaves against a subtly displaced high black canopy. No identifiable monster silhouette or visible face among branches.
Wheel-change preparation, Kyaw Swa’s bar near fitted rim and jack raised. Capture one tap, not two bars or doubled hands.
Hold on featureless black canopy. Answering taps are heard only; no bird, mouth, written sound or new eye glow.
Kyaw Swa glances upward with casual grin, hand at wheel nut. Remain crouched at LEFT rear wheel.
Driver’s beam reveals nearby leaves, then falls off into darkness. Nothing turns toward the beam or becomes visible above it.
Single composition relates moving tool pouch below to unsettled canopy above. No split-screen or visible acoustic waves.
Both men stop by jacked truck, bar held still. Work light position maintained; no creature revealed in their eyelines.
Still dense forest roadside, low leaves motionless. Silence shown through static scene, no dead animals or absent-sound symbols.
Canopy fills whole sky as dark occlusion without body outline. Keep lower familiar tree trunks for scale.
Extreme contact insert: released bar end touches one stone. One hand withdrawing, dry dirt and metal visible.
Dark branch-thick finger descends beside truck; two men recoil at edges. Upper extent cropped into black, no full hand.
Impact at bar’s stone contact point, small dry-earth eruption. No explosive fire, giant crater under truck or injured person.
Same finger bends at two joints, earth still around tip. Keep upper end out of view; no branch sprouting a human face.
Pale nail approximately truck-door size beside actual cab for scale. Broad natural keratin, no claws or teeth.
Fingertip nudges iron bar against stone; torch lies separately. Sound-making object is the target, not illumination.
One low-angle frame with black canopy lowered near familiar trunks. No before/after panels or complete giant silhouette.
Kyaw Swa grips driver’s arm, driver signals silence toward his mouth. Ground torch lights faces; no new held light.
Dropped torch beam passes across searching fingertip, which touches bar instead. Explicitly separate light position from sound target.
Men slide along truck’s opposite flank toward cab, feet near dirt. Rear flat remains fitted, no impossible attempt to drive on absent wheel.
Kyaw Swa clamps canvas hip pouch to still the tools. One hand, same belt side, no tool spill yet.
Jack slips sideways and truck settles slightly on attached flat tyre. No missing wheel, rollover or catastrophic axle collapse.
Four fingertip fragments arrive at roof, tailgate, dirt and calf area; crop their connections overhead, not four separate complete hands.
Single fingertip pins Kyaw Swa’s LEFT calf without visible crushing. His other leg is free, trousers intact.
Close two men, driver’s hand covering workmate’s mouth, teeth pressure suggested without injury. No scream lettering or duplicated hand.
Fingertip held absolutely still on LEFT calf, waiting for vibration. No eye or ear supplied to show listening.
Dry concrete drainage culvert opposite the truck, just human crawl width. Establish its opening and ditch route, no water.
Kyaw Swa looks down at pinned leg after acknowledging culvert. Both legs attached normally, no escape achieved yet.
Kyaw Swa holds driver’s wrist, silent pleading face above. Maintain positions beside truck and same pinned calf.
Choose moment after the reassuring pat when hands separate. Exactly two men's hands, no simultaneous repeated motion.
Driver shouts from a few steps away; dark canopy shifts toward sound and fingertip releases calf. No beam attracts it.
Driver runs toward culvert between a forward and LEFT-side strike. Do not place both impacts harmlessly behind him.
Driver enters pipe headfirst on belly, legs still at mouth. Shirt starts scraping against concrete, dry dirt only.
Interior close-up, cheek against dry silt, back scraping roof. Faint phone screen at chest supplies minimal light, no torch carried from road.
Looking backward from inside pipe, huge nail scrapes rim. Concrete chips at opening, no creature's head approaching.
Same entrance half occluded by fingertip, dust falling toward feet. Do not completely seal the mouth or reveal palm outside.
Forward view shows collapsed far end packed with soil, driver’s hand reaching it. Distinguish from finger-blocked entrance behind him.
Driver presses shirt cloth to nose and mouth to suppress sneeze. Dusty tears, ordinary skin, no supernatural bodily change.
Entrance clears as finger withdraws toward continuous horn. Distant truck light visible; no creature follows phone screen.
From ditch, Kyaw Swa struggles OUT of open passenger doorway after sounding horn. Injured LEFT leg delays exit, no calm driving pose.
Horn button jammed down, hand withdrawn. Plain worn steering wheel, no sound wave, note or readable logo.
Kyaw Swa’s open palm warns driver to stay in culvert. Raised arm distinct from giant fingertips, no beckoning gesture.
Roof presses into four broad parallel dents around cab. Crop occupant from impact; no crushed man, gore or torn roof.
Front wheels lift first while rear briefly contacts dirt. Attached flat tyre remains; open passenger door and damaged roof persist.
Truck rises with LEFT passenger door open, one loose spare drops from rear. No visible body holding truck, no duplicate spare.
Driver hides inside pipe with both hands over own mouth, looking out. Faint spill only, no walking outside after warning.
Blackness above tree line swallows horn source. No visible ears, face, open mouth or floating text.
Revisit early canopy framing, unreadable broad darkness above real trunks. Keep it unstructured rather than a complete creature form.
Truck headlight spill briefly illuminates forearm segment with odd joints and bark attached. Both ends vanish beyond light.
Forearm exits illumination upward; crop ends before any upper arm or shoulder. Darkness must not outline a face or body.
Faint muffled headlights deep in black canopy, truck largely hidden. Narrated ear comparison never produces a visible ear.
Morning driver crawls from ditch, motorcycle stops. Dust and torn shirt persist; motorcyclist is ordinary, Kyaw Swa absent.
Driver urgently gestures for engine silence, rider turns it off. No sound icons; natural morning light and two men only.
Morning roadside evidence: one spare, fallen tool pouch and one brown boot. Truck absent; no foot inside boot or body nearby.
Daylight sequence of evenly spaced deep round impressions in dirt. Not literal giant footprints with visible toes.
Rider starts departure with dusty driver behind as passenger. Both look along road, no creature between trees.
Next-day distant recovery view, same truck high off road. Four dents, flat rear tyre, open door; no Kyaw Swa visible.
Recovery cab insert, horn button jammed, dead dark dashboard, collapsed glass. Empty interior, no body or still-lit headlamps.
Later home visit, cleanly dressed driver holds one cake box before daughter. Father is absent; no birthday party or candles.
Single closed cake box on low table, driver on sofa blurred behind. Daughter and her mother have left frame.
Driver’s quiet daylight close-up at home. No flashback collage, horn diagram or creature reflected in eyes.
Later account in ordinary daylight room, listener partly cropped across table. Open hands cannot define scale; no miniature monster model.
Return to pre-dawn memory from inside culvert. Sky completely occluded; torn dusty shirt if visible, no daylight aftermath props.
Same sky aperture, dark occlusion recedes at one edge and stars appear there. No visible giant walking away in full silhouette.
Driver exhales within culvert, slight relief. Still dusty and trapped at night, no clean home clothing.
Opposite hillside at night shows high canopy shifting again. Keep direction opposite first departure, no second complete creature reveal.
Driver retreats deeper into same dry pipe, limbs natural and light scarce. Do not show a fresh entrance into a different culvert.
Road-level ending, one spare from truck lift and huge nail tip touching metal rim. Everything above fingertip hidden; no daylight.
`.trim().split('\n');
