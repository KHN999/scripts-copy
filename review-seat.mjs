export function reviewSeat(SCENES, CAST, LOCS) {
  CAST[0].prompt='Burmese male projection engineer aged thirty-five, sturdy medium build, medium-brown skin, square face, dark-brown eyes, straight brows, short side-parted black hair, clean-shaven. Faded pale blue-grey button-front work shirt, charcoal work trousers, black work shoes. Plain shirt pocket. This base reference is fully clothed; he loses this shirt during the escape and is bare-chested afterward that night. No tools held for the identity plate.';
  CAST[1].prompt='Sithu, a Burmese man aged twenty-eight, slim tall build, medium-brown skin, narrow oval face, dark-brown eyes, thick straight brows, short tousled black hair, clean-shaven. Single loose rust-brown short-sleeved button shirt, dark olive cargo trousers, brown work shoes. No undershirt, so the later torn back exposes skin. Base shirt intact, hands unmarked; damage follows the scene chronology.';
  CAST[2].prompt='Cinema caretaker, Burmese man aged fifty, stocky, round medium-brown face, receding short black hair flecked grey, thin moustache, dark eyes. Faded navy polo shirt, dark green longyi, rubber sandals. Bored ordinary expression, distinct from both engineers. Alone without counter, keys, ledger or phone in the identity plate.';
  CAST.push({name:'ပိုင်ရှင်',en:'The new cinema owner',prompt:'Burmese businessman aged forty-five, medium-brown skin, average build, narrow rectangular face, combed short black hair, clean-shaven, thin metal-rim spectacles. Cream long-sleeved business shirt tucked into dark brown trousers, plain black belt and shoes. Appears on next-day inspection, distinct from the older caretaker.'});
  LOCS.find(l=>l.name==='ခုံ ၁၇').prompt='One ordinary empty cinema seat in the centre of the fourth row: pristine deep red-brown cloth upholstery, rounded rectangular back, hinged cushion, two smooth brown wooden armrests and fixed grey metal legs. A small unmarked enamel plate on its side, no readable numeral. Show adjacent matching seats to establish centre-row context, no people, anatomy or transformation in this location plate. Scene instructions may place Sithu in this seat.';
  const S=n=>SCENES[n-1];
  for(const n of [53,59]) S(n).l=null;
  S(20).p='Wide view across dark empty rear rows while laughter seems to continue. Sithu remains seated in the fourth row outside this crop; no new audience appears.';
  S(40).p='The narrator edges sideways along the mouldy wall toward the exit, one empty hand feeling the wall. Both usable lights remain with Sithu at seat seventeen; the narrator has no torch or phone.';
  S(41).p='Rear rows loom beside the narrator’s route to the exit, seen in weak spill from the projector screen; no hand torch is carried along this wall.';
  S(49).p='Projection-port view after the house lights turn on: aisles clear and seats aligned again; Sithu is the only seated person, in the centre of the fourth row.';
  S(56).p+=' A single strand of small round BLUE beads circles this hand’s wrist; no child or body underneath the seat.';
  S(61).l='ရုံထဲ';
  S(63).p='Next-day daylight through open cinema doors reveals rows of still pristine, clean red-brown seats against the decayed walls; nobody approaches them.';
  for(const n of [21,24,28,30,32,40,43,44,45,47,48,51,54,55,57,65,69,72]) S(n).w=[...new Set([...(S(n).w||[]),'ကျွန်တော်'])];
  for(const n of [29,30,31,32,35,36,37,49,51,52,53,54,57,59,65,69,71]) S(n).w=[...new Set([...(S(n).w||[]),'စည်သူ'])];
  for(const n of [54]) S(n).w=[...new Set([...(S(n).w||[]),'အပြင်ကလူ'])];
  for(const n of [65,69]) S(n).w=[...new Set([...(S(n).w||[]),'ပိုင်ရှင်'])];
  S(40).g='ကျွန်တော် နံရံကပ်ပြီး လက်ဗလာနဲ့ ထွက်ပေါက်ဘက်ရွေ့တယ်။ ဓာတ်မီးနဲ့ စည်သူ့ဖုန်းက စည်သူ့ဆီ ကျန်နေတယ်။';
  S(61).g='နေ့ခင်းအမှတ်တရ — နောက်ဆုံးတန်းက အဲဒီခုံရဲ့လက်တင်မှာ အပြာရောင်ပုတီးကြိုး ပတ်ထားတယ်။ ခုံဆယ့်ခုနစ်နဲ့ မရောရ။';
  if(DIRECTIONS.length!==SCENES.length) throw new Error('Seat review count mismatch');
  SCENES.forEach((s,i)=>{
    const n=i+1;
    const day=[3,4,61].includes(n)||n>=63;
    let state='Only the explicitly pictured living people appear. Sithu is the only legitimate seated person in the night test/rescue shots; all other seats are unoccupied. No ghost occupant, face, full body or humanoid silhouette; supernatural details remain fragments continuous with furniture.';
    if((s.w||[]).includes('ကျွန်တော်')) state+=n>=46&&n<=62?' Narrator is bare-chested, wearing his original trousers and shoes; his blue-grey shirt remains on the rear-row seat.':n>=63?' Narrator wears a replacement plain pale-grey shirt on this next-day visit.':' Narrator wears his intact blue-grey work shirt until the escape in shot 45.';
    if((s.w||[]).includes('စည်သူ')) state+=n>=52&&n<=62?' Sithu’s rust-brown shirt is torn open across the back; red threads adhere to unbroken skin, and all five LEFT fingers have faint red grip bands.':n>=63?' Sithu wears a replacement muted tan shirt next day; faint LEFT-finger bands persist.':' Sithu wears his rust-brown shirt; its back stays intact until rescue, with tension only before the tear.';
    s.d=`Detailed scene direction: ${DIRECTIONS[i]} ${state}`;
    s.style=`Myanmar, present-day old single-screen cinema. ${day?'Natural daylight; no forced night lighting.':n>=49?'Night with uneven bright house lights inside, exterior dark.':'Night with the specific work lamps, projector spill, phone or torch lighting named in this shot; lobby strip light remains separate.'} Cinematic photorealism, natural anatomy, restrained 35mm grain, 16:9. Clean red-brown seats contrast with peeling ceiling and mouldy walls. One still instant, no montage or visual sound effects. Screens are blurred unlettered light shapes; seat numbers, posters and labels unreadable. No gore, text or watermark.`;
  });
}
const DIRECTIONS=`
Rear-wide establishing shot, blank screen forward and symmetrical rows. Show convincing capacity without inventing an audience or numbering overlay.
Tight furniture study of cushion, back and two armrests. Still recognizable as ordinary chair geometry, no premature body reveal.
Daylight booth setup: narrator works at laptop, Sithu runs cable; distinct faces and practical tools, blank unreadable screens.
Daylight lobby survey, drawings on counter face-down or defocused. No readable film titles, plans or architect labels.
Night before the test, two work lights reveal abandoned tools in aisles. No extra labourers remaining in auditorium.
Caretaker alone behind concession counter, keys beside phone. Separate lobby strip light from the auditorium test lighting.
Low empty aisle, fabric backs crowd the frame. Suggest staleness through closeness, no coloured smell vapour or hidden patrons.
Macro of pristine seat-back cloth with subtle polished nap. No stains, hair, human head or face formed in fabric.
Sithu wrinkles nose while looking across clean seats. Torch beam reveals fabric, not a person crouched between rows.
Straight-on row detail, identical intact clean red-brown cushions. Keep deterioration confined to room architecture.
One wide frame contrasts mouldy wall and peeling ceiling above immaculate seats. Avoid dirt or rips on the chairs.
Blank white projector test on screen after house lights go off. No grid numbers, logo, footage or ghost in the beam.
Narrator’s view through high rear booth port; Sithu below aligns the image. Maintain rear-to-front screen geography.
Sithu stands in central aisle facing screen. His ordinary shadow is attached to him, not an independent ghost silhouette.
Close on fourth-row cushion lowering before Sithu settles. No body beneath it, no second seat moving.
Sithu alone sits at the fourth-row centre, arms naturally on rests. Other seats remain empty; do not apply an empty-seat ban to him.
Rear elevated view of the same seated Sithu with projector beam overhead. No early binding cloth or transformed armrest.
Earlier instant before sitting, knees flexed and cushion below. Same clothes and seat; no simultaneous seated duplicate.
Laptop plays a blurred stage-speaker clip, one small onscreen person only. No readable meters, controls, subtitles or added audience.
Crop empty rear rows as laughter is heard. Sithu remains seated elsewhere in the hall; no visible laughing mouths.
Narrator pauses laptop with one finger and listens. Blurred frozen screen, no animated audio bars or extra hand.
Seated Sithu looks behind into empty rows. Keep fourth-row seat fixed and phone nearby, no caretaker entering auditorium.
High rear-port viewpoint: Sithu raises one arm from the seated position. Clear small human scale in the large room.
Narrator’s hand stops before switching lights on. He turns toward port; auditorium remains dark at this beat.
One phone charging on booth bench, cable connected. Narrator has left with torch; no phone magically accompanying him downstairs.
Seat-level close-up of Sithu’s strained half-smile while he cannot rise. He remains fully clothed and human.
Two hands press armrests as Sithu pushes upward unsuccessfully. Keep elbows, hands and shoulders anatomically connected.
Narrator pulls one upper arm of seated Sithu. Pain shown through expression, no dislocation, stretched arm or successful release yet.
Torch-lit thigh insert, clean upholstery edge creeps onto olive trousers. Fabric only, no hand at this first clue.
Narrator’s fingers approach without contact; cloth edge has withdrawn slightly. Keep Sithu’s leg separate from reaching adult hand.
Beam edge crosses thigh: cloth advanced in shadow but stops within light. One position and one light source, no split-screen comparison.
Sithu looks up at narrator for an answer. Same trapped position and below-face light, no extra rescuer.
Under-seat macro of one furniture leg with ankle-like knobs. Only a small fragment, dry grey surface, no attached person.
Same low region reveals backward-facing toe-like ends beneath seat. Crop above fragment; no crawling body or gore.
Sithu directs borrowed torch toward his lap; upholstery is at waist and beginning to loosen under beam, no free standing pose.
One handheld torch covers lap, Sithu’s phone is wedged to light waist. Two different devices; narrator’s charging phone stays upstairs.
Front view of Sithu’s shirt drawing tight at shoulders from behind. No tear yet, no attacker standing behind seat.
One other chair obstructs exit aisle two rows away. Seat seventeen remains occupied elsewhere; no relocation of Sithu’s chair.
Armrest-end macro, continuous wood grain into five narrow finger-like tips. No detached flesh hand or full ghost.
Narrator moves along wall with empty hands, lights left beside Sithu. Projector spill gives just enough visibility.
Near-dark rear rows with pristine cloth visible at edges. No carried torch beam, smell mist, bodies or new light source.
Exit door ten paces ahead, thin lobby light at base. Keep aisle route physically connected to wall and rear booth stair.
Narrator’s shirt back pulls taut from behind; crop source of tug. Do not show a separate human grabbing him.
Empty lowered cushion behind narrator waits; voice unseen. Frame remains about furniture, no mouth or occupant.
Choose instant after unbuttoning: narrator slips forward out of blue-grey shirt. Bare chest revealed, shirt held behind; no duplicate body.
Rear-row seat cradles abandoned blue-grey shirt between inward armrests. No man inside the shirt, entrance light behind.
Bare-chested narrator bursts into lit lobby. Caretaker rises from counter; Sithu still trapped offscreen below the booth.
Narrator turns on switch bank; some indicators stay dark. No electrical explosion, visible digits or large sparks.
High booth view, house lights now reveal realigned rows. Sithu is sole seated occupant, fourth-row centre, exit aisle clear.
Sithu’s head tipped back on seat seventeen, alive and exhausted. No corpse styling, broken neck or face replacement.
Narrator and caretaker pull Sithu by separate upper arms. Exactly three men; narrator bare-chested, chair stays fixed.
After release, Sithu’s shirt back tears open while he rises. Tear cloth only; no skin tear or additional restraint hand.
Close exposed back with fine red-brown fabric threads stuck to unbroken skin. Identity belongs to Sithu, not narrator.
Two rescuers support Sithu toward lit exit. Narrator bare-chested, caretaker navy polo, Sithu’s torn back visible.
Narrator pauses beside last row and looks at his foot. Keep survivors on escape route, not back at seat seventeen.
Only small hand and short forearm extend from seat shadow, palm up, one BLUE bead bracelet. No child body, face or occupant.
Sithu pulls narrator away before contact with offered hand. LEFT fingers marked subtly; no handshake or rescue of a hidden child.
Exhausted Sithu explains in house light. Do not illustrate his account with an extra person emerging from below.
LEFT-hand insert shows five fingers each with a faint red grip band. No blood, missing digits or wrist-only substitute marks.
Same blue bracelet on small upturned hand beneath last-row seat. Identical beads and position; no additional limb farther back.
Earlier DAYLIGHT inspection of that last-row seat, blue beads looped on its armrest. Not seat seventeen; no supernatural hand yet.
Outside cinema at night, entrance padlocked and interior lights left on. No people seated behind the visible windows.
Next-day open-door daylight survey from safe distance. Seats remain immaculate, room decayed, no sudden shabby upholstery.
Depth view connects Sithu’s rust shirt scrap at fourth-row centre with narrator’s whole blue-grey shirt in rear row. No people retrieving them.
New owner in cream business shirt gestures to seats; narrator and Sithu in replacement shirts listen. Caretaker is not the owner.
Daylight underside detail shows ordinary springs and wood. Teeth-click is sound only; do not generate visible teeth or mouths.
Wide view holds on unoccupied stationary rows. Repeated sounds do not create motion lines or crowd silhouettes.
Same still ordinary rows in full daylight. No grinding faces or anatomy revealed simply because the narration names teeth.
Owner and two engineers leave through bright doorway. Exactly three men in next-day clothes, no one sitting down.
Sithu pauses at threshold next day, looking into auditorium while speaking toward narrator. Keep doorway clear and room distant.
Sithu’s hands curl at waist height as if resting on invisible armrests. Standing man, no actual chair under him.
Narrator gently lowers Sithu’s hands, open auditorium behind. Keep both hands connected correctly; end without a ghost reveal.
`.trim().split('\n');
