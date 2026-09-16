export function reviewHosp(SCENES, CAST, LOCS) {
  CAST[0].prompt='Min Thu, Burmese man aged twenty-seven, slim build, medium-brown skin, narrow oval face, dark-brown eyes, straight brows, short side-parted black hair, clean-shaven. Faded pale blue short-sleeved collared shirt, dark green checked longyi, black sandals removed on his sleeping mat. One plain black rectangular wristwatch on LEFT wrist, a small chip at the upper-right corner of its glass, face unreadable. Base identity only mildly tired; later exhaustion changes lids and shadows, never his age or identity.';
  CAST[1].prompt='Min Thu’s mother, Burmese woman aged fifty-five, slender from illness, medium-brown skin, oval lined face, dark-brown eyes, gently curved brows, straight greying black hair tied in a low bun. Base identity in plain faded pale-mint hospital gown; no oxygen mask, wristwatch or medical devices. Admission before changing and later caretaker scenes use dusty lavender blouse and dark plum htamein instead. Final exhaustion matches the eye framing of the men but never changes her face into theirs.';
  CAST[2].prompt='Burmese man aged sixty-five, thin frame, medium-brown skin, hollow long cheeks, narrow nose, dark-brown eyes, sparse grey-black hair and patchy white stubble around mouth. Worn off-white sleeveless singlet, plain brown longyi, barefoot. Dark under-eye shadows, swollen lids and red-threaded whites from extreme sleeplessness. Fully ordinary opaque human skin, no glowing eyes, rot, wounds or corpse pallor. Same face after waking in corner bed, with relief rather than exhaustion.';
  CAST[3].prompt='Ma Khin San, Burmese night nurse aged thirty-five, average build, medium-brown skin, rounded oval face, dark-brown eyes, neat brows, black hair in a tight low bun. Plain white short-sleeved nurse uniform, white practical shoes and pale grey cardigan at night, no readable badge or insignia. Competent kind ordinary woman, not sinister. Chart only in scene instructions, no props in identity plate.';
  LOCS.find(l=>l.name==='စင်္ကြံ').prompt='A wide old Yangon hospital corridor beside a broad staircase and trolley ramp, pale green lower walls and cream upper walls, worn terrazzo, strip lights, a few neatly rolled reed mats, thermoses and plain plastic baskets along wall. Empty of people and incident for this location reference; no readable signs.';
  LOCS.find(l=>l.name==='ကုတင်အောက်').prompt='Ordinary shallow space under a chipped white iron hospital bed, viewed at reed-mat height. Worn terrazzo with fixed black shoe scuffs, one dark cloth bag near wall, four iron bed legs and opaque frame overhead. No people or mats in this neutral geometry plate; scene instructions add mats and people when appropriate. Finite depth, ward spill from aisle side, no tunnel or readable markings.';
  const S=n=>SCENES[n-1];
  S(3).p='Two men lie on adjacent mats at floor level beside and under the same bed, faces level and facing one another. Min Thu has his eyes shut while the old man watches, one iron bed leg separating their positions.';
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
  SCENES.forEach((s,i)=>{
    const n=i+1;
    let state='Ordinary opaque living people, never a full ghost, skeletal face, glowing eyes or decay. Exhaustion is reddened eye whites, swollen lids and dark under-eye shadows while keeping each individual’s face.';
    if(n>=74) state+=' Camera remains at mat/floor height near the bed edge, looking through real gaps; never an overhead view, transparent mattress or standing narrator. Physical Min Thu above is unconscious; conscious Min Thu below is the same identity and clothes. Show both only where explicitly called for.';
    if(n!==67) state+=' Under-bed space has normal shallow depth and finite bed legs; no endless tunnel.';
    if((s.w||[]).includes('အမေ')) state+=n<=8||n>=96?' Mother wears dusty lavender blouse and dark plum htamein, not the patient gown.':' Mother wears pale-mint patient gown.';
    if((s.w||[]).includes('မင်းသူ')) state+=' Min Thu keeps pale-blue shirt, green checked longyi, LEFT-wrist black rectangular watch with upper-right glass chip; do not transfer watch to mother or old man.';
    if(n>=85&&n<=89) state+=' Old man has recovered in corner bed, same identity and clothes, relieved and tearful; no second old man beneath a bed.';
    s.d=`Detailed scene direction: ${DIRECTIONS[i]} ${state}`;
    s.style='Old Yangon government hospital, institutional cinematic photorealism, high ceilings, green shutters, white iron beds, 35mm grain, 16:9. Use the daylight or night stated in the shot, ordinary ward spill under beds and natural skin. Maintain the same bed, stool, cloth bag, reed mats and green-curtained corner bed positions. One still instant, no montage or visible sound effects. Only shot 67 has impossibly deep under-bed space. No gore, corpse, legible writing, watch digits, labels, logo or watermark.';
  });
}
const DIRECTIONS=`
Night mat-height view of old man on side beneath mother’s bed, awake. No floating figure or second old man above him.
Wide ordinary night ward, separate caretakers on mats and patients above. Sleeping people are alive; no crowd of identical faces.
Establish adjacent head-to-head mat geometry, Min Thu nearest wall, old man under frame, one bed leg between. Repeat with mother later.
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
Lock tight eye-and-upper-cheek framing for motif: red whites, swollen lids, dark shadows. Reuse crop and side light at 59 and 103.
Old man's hand points toward green-curtained corner bed. Keep separate from mother’s bed and never show a duplicated full old man.
Corner-bed patient mostly screened, unidentifiable face, ordinary sleeping shape. No visitors or ominous body bag.
Old man's hands smooth same mat edge. Focus on repetitive ordinary gesture, not changing mat pattern or supernatural hands.
Tired mouth raises slightly while eyes stay fixed upward. No teeth-baring or malicious smile, watch time stays offscreen.
Midnight mother drinks from plain cup held by son, his other hand supports her. No old man helping above the bed.
Old man on his side with eyes closed briefly and longyi to knees. Apparent rest is allowed, no open-eye global override.
Min Thu lies on mat near wall, old man beyond one bed leg. Match shot 3 head levels and bed orientation.
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
Son looks rigidly ahead, refuses to glance down. Sweat and tired eyes, no vision reflected in his eyes.
Third-day son dozes upright, spoon on tray after slipping. Mother observes from bed; no duplicated falling spoon.
Macro of Min Thu’s eyelids briefly closed in ward light. Sounds of mats do not generate an actual mat near his face.
Washroom mirror reflection matches old man's eye crop but retains Min Thu’s young face. One coherent reflection, no old man in glass.
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
Trapped low POV among ordinary finite bed legs. ⚠️ THE LEGS ARE NOT A CAGE — there is plainly room to crawl between them, so compose the gaps as open rather than barred. What holds him is not an obstacle. No second endless tunnel; the sense of entrapment comes from tight close framing.
Feet hurry toward bed, nurse’s recognizable white shoes among ordinary sandals. Crop above knees, no full standing view.
Son's hand reaches toward mother's bare ankles without contact across barely two feet of COMPLETELY OPEN floor — ⚠️ nothing physical is in the way, and the emptiness between them is the point. The distance simply refuses to close. Gap remains physically small; do not elongate his arm.
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
Repeat tight eye motif from 24 and 59 on mother's own fifty-five-year-old face. Exhausted lids and shadows, never old man's identity.
Rainy night window seen from floor past bed edge, loose green shutter. Weather insert only; no mother under window or new location.
Mirror shot 3 but with the POSITIONS SWAPPED: mother takes the beside-the-bed mat Min Thu used to have, and Min Thu now occupies the under-the-bed place that was the old man's. Same bed leg separation, same head levels, no old man present.
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
Final gap between her open RIGHT hand and his LEFT fingertips, exhausted mother behind. Leave contact unresolved; no completed swap.
`.trim().split('\n');
