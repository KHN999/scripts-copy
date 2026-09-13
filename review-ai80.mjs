// Reusable photo compositions plus shot-specific camera and continuity directions.
// Narration and scene order remain in data-ai80.mjs.
export const PROPS = [
  {name:'ပုံရင်း၁၉၈၇', en:'PHOTO A — the fourth portrait / archival match', requires:['မခင်စန်း'],
   prompt:'Master source photograph only, landscape 3:2, filling the entire image with no phone, hand, frame, border or surrounding room. Use the attached Ma Khin San identity exactly: dusty ivory fitted Burmese blouse, muted maroon patterned htamein, black hair pinned in a low bun with one small ivory pin on her RIGHT side. Waist-up frontal portrait, eyes directly toward lens, lips closed and unsmiling, quiet fear. Olive-grey plaster background, fine vertical crack near upper LEFT, narrow dark teak doorjamb at far RIGHT. Soft light from camera LEFT. Faded 1987 colour-negative photograph, yellow-shifted muted colour, visible film grain, slight optical softness but recognizable eyes. No text or date in this reusable master. All later dates are separate shot-specific additions, not new portraits. No other person.'},
  {name:'ဓာတ်ပုံမိသားစု', en:'PHOTO B — Ma Khin San with Zaw Lin’s father', requires:['မခင်စန်း','အဖေ'],
   prompt:'One archival colour photograph, landscape 3:2, filling the frame without hands, device, border or tabletop. Exactly two living Burmese adults in 1987: Ma Khin San on picture LEFT in ivory blouse and maroon htamein, her husband on picture RIGHT in his reference cream striped shirt and dark brown longyi. Waist-up, side by side before a plain grey plaster wall, soft daylight, subdued ordinary expressions. His face must be recognizable here because this real family photograph identifies him; preserve moustache, receding hairline, narrow face and RIGHT-side forehead scar. No threatening gesture, supernatural appearance, injury or additional person. Muted aged print colours and fine grain. No text. This is a different photograph from PHOTO A.'},
  {name:'ပုံရင်းအိုမင်း', en:'PHOTO C — Thun’s aged portrait and three hidden clues', requires:['သွန်းအိုမင်း'],
   prompt:'Master generated photograph, landscape 3:2, single clean modern image, no phone, hand holding print or exterior frame. Thun with an eighty-year-old appearance sits facing camera on a plain chair, waist-up to lap, pale blue cardigan over cream blouse, white hair in low loose knot, warm closed-mouth smile. Both hands rest separately on lap; white hospital band on her LEFT wrist. Pale grey wall behind, small paper calendar high at picture RIGHT behind her LEFT shoulder. Calendar and band have blank reserved label areas in this master, no writing. Neutral soft daylight from camera LEFT, crisp modern digital texture, no sepia or 1987 grain. Same chair, wall, cardigan, hands and calendar placement must survive all later zooms; no physical aging of present-day Thun outside this picture.'},
  {name:'ကက်ဆက်',en:'The recovered audio cassette',
   prompt:'One ordinary 1980s compact audio cassette as an object reference, alone on pure white background. Smoky translucent brown rectangular shell, two pale cream reel hubs, one blank aged cream label at top with a small torn upper-right corner, clear narrow tape window with dark magnetic ribbon. All corners and proportions intact, no brand, writing, case, player, table, hand or other object. Even soft product light, three-quarter top view. Use this exact cassette at discovery and playback.'},
];

export function reviewAI80(SCENES, CAST, LOCS) {
  CAST[0].prompt='Thun, Burmese woman aged twenty-five, slim average-height build, warm medium-brown skin, soft oval face, dark almond-shaped eyes, straight full brows, small rounded nose, distinct shallow dimple on LEFT cheek when smiling, naturally full lips. Straight black hair to mid-back, centre part, worn loose. Muted teal plain short-sleeved T-shirt, dark indigo jeans, simple black sandals, no jewellery. Modern 2026 identity plate, neutral expression, no phone held. Preserve exact face geometry in Ma Khin San and the aged variant; resemblance does not imply a family relationship.';
  CAST[1].sameAs=1;
  CAST[1].prompt='Use Reference 1 Thun’s EXACT facial identity: same oval face, almond eyes, full straight brows, small rounded nose, LEFT-cheek dimple and lip shape. Ma Khin San, a different unrelated Burmese woman aged about twenty-six in 1987, same apparent age and medium-brown skin, no aging or new face. Dusty ivory fitted traditional cotton blouse with small cloth buttons, muted maroon small-pattern htamein, black hair pinned in low bun with one ivory pin on RIGHT side. No modern accessories. Living ordinary woman, frightened only where scene requires, later protective and warning. Identity plate uses neutral modern studio lighting; vintage texture belongs to photographs only.';
  CAST[2].prompt='Ko Zaw Lin, Burmese man about forty, average build, warm medium-brown skin, long oval face, tired dark-brown eyes, thick straight brows, broad nose, short black hair greying at temples, clean-shaven. Faded slate-grey long-sleeved collared shirt with sleeves rolled, dark navy longyi, black sandals. Quiet and careful, grief in restrained expressions. Same face on video calls and in person. No phone or photograph held in identity plate.';
  CAST[3].en='Zaw Lin’s father — living identity in the archival photograph';
  CAST[3].prompt='Zaw Lin’s father as a living Burmese man aged thirty in 1987, average build, medium-brown skin, narrow rectangular face, receding side-parted black hair, straight brows, short neat black moustache, small pale diagonal scar high on RIGHT forehead. Cream long-sleeved shirt with very fine brown vertical stripes, dark brown longyi, plain brown sandals. Ordinary neutral expression, no sinister makeup, wounds or ghost effects. Full identity is shown in the archival family photo for recognition. Later supernatural views expose only cropped shoulder, sleeve or partial head edge; never a full ghost.';
  CAST[4].prompt='Thun’s female friend, Burmese woman aged twenty-five, compact sturdy build, warm medium-brown skin, round face distinct from Thun, wide dark-brown eyes, arched brows, short straight chin-length black bob with side part. Plain ochre-yellow long-sleeved shirt, black trousers, white sneakers. Practical attentive expression. Keep her distinct from both same-faced women. No phone held in identity plate.';
  CAST.push({name:'သွန်းအမေ',en:'Thun’s living mother — remote hotel call',prompt:'Burmese woman aged fifty-three, medium-brown skin, average build, gently rounded lined face, dark-brown eyes, greying black hair in a low knot. Pale lilac house blouse, dark plum htamein. Ordinary calm living mother. Appears only on video call from Mandalay hotel; not Ma Khin San and never the figure outside Thun’s door.'});
  CAST.push({name:'သွန်းအိုမင်း',en:'Thun — eighty-year-old appearance inside PHOTO C',sameAs:1,prompt:'Age Reference 1 Thun’s exact identity to an eighty-year-old APPEARANCE: retain oval facial structure, almond eyes, straight brows, small nose, lips and LEFT-cheek dimple. White hair loosely tied low, deep natural wrinkles, thinner cheeks, gently rounded shoulders, warm smile. Pale blue cardigan over cream blouse, charcoal skirt, white hospital band on LEFT wrist with blank label. Same person aged, not another elderly woman. This appearance belongs only inside the generated photograph; present-day Thun remains twenty-five. No background, calendar or chair in identity plate.'});
  LOCS.find(l=>l.name==='သွန်းအခန်း').prompt='Empty small 2026 Yangon apartment bedroom, fixed layout seen from entry: bed against LEFT wall, low light-wood laptop desk under far window, tall rectangular mirror on RIGHT wall, cream walls, grey curtain, ceiling light. Front door opens from near-right into narrow landing; small empty corner between mirror and door is the later camera target. No people, screens showing pictures, ghosts or legible marks. Neutral daylight reference; scenes set night or daylight independently.';
  LOCS.find(l=>l.name==='အိမ် ၄၂').prompt='Empty 2026 version of old two-storey Yangon townhouse. Narrow facade, heavy dark teak door on LEFT side, two tall shuttered windows on RIGHT, small blank rectangular enamel number plate immediately RIGHT of door. Inside: staircase along LEFT wall rising to upstairs room, single shuttered window opposite stairs, a darker short floorboard beneath that window. Decades of dust, peeling pale ochre paint and covered furniture. Daylight, no people or body; geometry matches the separate 1987 version.';
  LOCS.find(l=>l.name==='ဖုန်းဖန်သား').en='Thun’s phone — device reference, screen content added per shot';
  LOCS.find(l=>l.name==='ဖုန်းဖန်သား').prompt='Single modern black slim smartphone in a plain matte charcoal case, front view almost square to camera, thin even bezel, portrait screen 9:19 with top-centre small camera opening. Neutral medium-grey blank screen, no image, text, logos, reflections, hands or room. Isolated product view on light neutral background. It is a device reference only; the shot determines photo, UI or live-video content, never automatically a vintage image.';
  LOCS.push({name:'အိမ်၄၂ဟောင်း',en:'House 42 in 1987 — same architecture, occupied then',prompt:'The exact same townhouse geometry as the modern House 42 reference: teak front door LEFT, two tall shuttered windows RIGHT, blank enamel plaque immediately RIGHT of door, LEFT-side internal stair and upstairs window opposite. In 1987: sound pale ochre paint, maintained wood, no modern cabling, no decades of dust or sheet-covered abandoned furniture. Empty architecture reference in neutral daylight, no people or signs. Night shots add warm light; facade position and upstairs darker floorboard stay fixed.'});
  LOCS.push({name:'လှေကားလမ်း',en:'Thun’s landing and escape stair',prompt:'Empty narrow 2026 Yangon apartment landing with cream walls, grey terrazzo and dark metal stair rail. Thun’s plain brown door at head of one concrete stair flight; stair turns LEFT at half-landing toward ground-floor exit, opening to narrow sidewalk with square concrete utility post at curb. Same route throughout late escape. Ordinary building, no people, ghosts, readable door numbers or signage. Reference in neutral light; shot sets lighting.'});
  CAST[6].pose='The subject stands facing camera, full figure visible, warm closed-mouth smile, arms relaxed and LEFT wristband visible';
  LOCS.find(l=>l.name==='အိမ်၄၂ဟောင်း').requires=['အိမ် ၄၂'];
  LOCS.push({name:'ဇော်လင်းအိမ်',en:'Zaw Lin’s home — cassette playback',prompt:'Empty modest 2026 Yangon living room, plain warm beige wall, low dark wooden table beside floor cushion, one amber-shaded table lamp on table LEFT, plain grey curtain behind. Charcoal portable cassette player on table RIGHT, clear viewing lid, no tape loaded in the reference. Simple contemporary domestic setting distinct from Thun’s bedroom: no bed, mirror, laptop or people. Keep wall, table, cushion and player positions fixed through playback and grief reactions. No readable text.'});
  const S=n=>SCENES[n-1];
  const set=(n,p,w,l)=>{if(p)S(n).p=p;if(w)S(n).w=w;if(l!==undefined)S(n).l=l;};
  // Exact photo boundaries, camera angles and continuity are authored together below.
  if(DIRECTIONS.length!==SCENES.length) throw new Error('AI80 review must cover every shot');
  for(const n of [5,6,7,8]) S(n).w=['မခင်စန်း'];
  set(5,'A full-bleed generated 1980s Yangon street portrait of Thun’s exact face in Ma Khin San’s pinned hair and ivory-maroon period clothing. Quiet street, faded colour-negative film, no date stamp.');
  set(7,'A formal full-bleed 1980s Burmese studio portrait, same face and pinned hair, ivory blouse and maroon htamein, faint smile against a painted neutral backdrop. Faded film, no border or date.');
  S(12).w=['ပုံရင်း၁၉၈၇'];
  S(10).l='ဖုန်းဖန်သား';
  S(92).w=['ပုံရင်းအိုမင်း'];
  for(const n of [8,9,10,17,18,19,22]) S(n).w=[...new Set([...(S(n).w||[]),'ပုံရင်း၁၉၈၇'])];
  set(17,'A phone displays Zaw Lin’s received scan of an old photographic print: the PHOTO A portrait, with yellowed paper edges and one crease at upper-left corner visible INSIDE the screen. Thun has received a digital attachment, not the physical print.',['ပုံရင်း၁၉၈၇'],'ဖုန်းဖန်သား');
  set(18,'One laptop screen holds two comparison panels: LEFT the AI fourth portrait, RIGHT the received archival scan. Both use exactly PHOTO A composition, face, dress, hair and background. Only paper border and aging distinguish the scan. No two women standing in the real room.',['ပုံရင်း၁၉၈၇'],'သွန်းအခန်း');
  set(19,'Phone displays a second scan, the back of the same old photograph. Cream foxed paper fills screen; one line of faded blue pen reads exactly "17.10.87". No portrait on this reverse side.',[],'ဖုန်းဖန်သား');
  for(const n of [28,29,30,31,49]) S(n).l='အိမ်၄၂ဟောင်း';
  set(29,'Inside an AI-generated 1987 photograph, the front door is ajar; only an anonymous adult sleeve and shoulder edge are visible behind the door leaf, head and lower body occluded. Identity is not established here; do not identify this person as the father.',[]);
  set(31,'A zoom into the same generated house photograph shows the plaque to the RIGHT of the door with exactly "၄၂" in Burmese numerals. No Latin substitute, extra digit or other readable lettering.',[]);
  set(37,'Over Thun’s shoulder, one phone shows the generated 1987 house-entry photograph while the actual 2026 entry stands behind it: door jamb, left-side staircase through doorway and right shuttered window align. The phone image is old maintained architecture; actual building is dusty. No newly invented AI staircase picture.',['သွန်း']);
  set(40,'On Thun’s phone, a generated photograph shows Ma Khin San in 1987 dress inside the matching upstairs room, pointing with RIGHT index finger to the darker short floorboard below the window. In the actual room around the phone only Thun and Zaw Lin are present.',['မခင်စန်း'],'ဖုန်းဖန်သား');
  set(42,'At floor level, opened small olive-brown cloth bag rests beside lifted board. Exactly three recovered contents: the reference brown audio cassette, one worn dark-brown women’s handbag, and one small PHOTO B print. No remains, extra photograph or fourth item.',['ကက်ဆက်','ဓာတ်ပုံမိသားစု']);
  set(43,'Zaw Lin holds PHOTO B over the floorboards. The print clearly shows Ma Khin San LEFT and her living husband RIGHT; father’s ordinary recognizable features remain visible inside the photograph. Zaw Lin’s real face above the print registers surprise.',['ကိုဇော်လင်း','ဓာတ်ပုံမိသားစု']);
  for(const n of [44,45]) S(n).w=[...new Set([...(S(n).w||[]),'ဓာတ်ပုံမိသားစု'])];
  for(const n of [46,47,51]) S(n).w=[...new Set([...(S(n).w||[]),'ကက်ဆက်'])];
  set(49,'The earlier generated night photograph of Ma Khin San running toward House 42 for help, distant paired headlights behind. Reuse her appearance and route from shot 26; no newly revealed full pursuing figure.',['မခင်စန်း']);
  set(50,'Zaw Lin listens beside the cassette player as he understands his mother had planned to take him away. Keep the present-day reaction; the recording does not supply a photographed childhood scene.',['ကိုဇော်လင်း'],'သွန်းအခန်း');
  set(51,'Macro of reference cassette in player, reels now stopped, dark ribbon slack in window. Audio has cut off; no snapped cassette shell, flying tape or staged violence.',['ကက်ဆက်']);
  S(45).l='အိမ် ၄၂';
  S(37).w.push('အိမ်၄၂ဟောင်း');
  // Playback precedes Thun returning home in shot 54; use a distinct domestic setting.
  for(const n of [46,47,48,50,51,52]) S(n).l='ဇော်လင်းအိမ်';
  set(53,'Thun holds her phone beside her real face; phone displays PHOTO A cropped to Ma Khin San’s face. Straight-on comparison, one modern real woman and one vintage portrait on a screen, same facial geometry and different hair. No mirror or unreceived physical print.',['သွန်း','ပုံရင်း၁၉၈၇']);
  set(56,'Side view of actual Thun at laptop, with a near-normal view of its screen displaying the same generated over-shoulder image from shot 55. Laptop webcam indicator dark; camera-permission explanation belongs to narration. No camera tape before the precautions scene.',['သွန်း']);
  // Existing board narration puts the empty-room forecast in 58, not draft section 59.
  set(58,'Thun’s black phone displays a generated overhead photo of the SAME bedroom and bed as shot 57, now empty and unmade. Date "15 SEP 2026" sits at lower right INSIDE the image. Her shocked young face is soft background beyond phone; actual Thun remains present outside the future photograph.',['သွန်း'],'ဖုန်းဖန်သား');
  S(58).g='ဖုန်းထဲမှာ အခန်းဗလာ 15 SEP 2026။ ဖုန်းအပြင် သွန်းက အံ့သြကြောက်လန့်နေတယ်။ လက်ရှိ board narration အတိုင်း ဒီပုံကို Shot 58 မှာပြ။';
  set(59,'One phone screen displays ONE generated missing-person social post with Thun’s original selfie, header date "16 SEP 2026" and banner "MISSING PERSON — PLEASE SHARE". No other legible text; no extra empty-room card or additional portrait.',['သွန်း'],'ဖုန်းဖန်သား');
  set(61,'That same NIGHT, Thun and her ochre-shirted friend sit at the desk together. Friend’s separate pale-grey-cased phone shows a simple location pin and cloud icon without labels. Curtain dark, room ceiling light on.',['သွန်း','သူငယ်ချင်း']);
  set(63,'After midnight, both women wait awake on bed under ceiling light, dark closed curtains and no daylight. One checks a phone without legible clock; passage from midnight to one is narrated, not shown as multiple frames.',['သွန်း','သူငယ်ချင်း']);
  set(66,'Thun’s phone displays a generated oblique view along the apartment threshold: Thun on inside LEFT, Ma Khin San on landing RIGHT points toward the door and warns her. Door leaf stands between their spaces, faces visible around its near edge in this GENERATED prediction only. Actual apartment door outside the phone remains firmly closed.',['သွန်း','မခင်စန်း'],'ဖုန်းဖန်သား');
  for(const n of [68,75,76,81,85,86]) S(n).w=[...new Set([...(S(n).w||[]),'သွန်း','သူငယ်ချင်း'])];
  set(72,'Close on friend’s pale-grey-cased phone during a video call. Thun’s living mother appears from a softly lit Mandalay hotel bedroom; one older ordinary woman on screen, dark apartment around device. Friend’s untaped camera enables this call.',['သွန်းအမေ'],'ဖုန်းဖန်သား');
  set(74,'Thun’s phone displays one newly generated modern photograph of both women looking at a phone. Behind them only a cropped cream-striped shoulder and a sliver of dark moustached profile enter at the far RIGHT edge; head, torso and legs are never shown as a complete figure. Actual room beyond phone remains empty behind the women.',['သွန်း','သူငယ်ချင်း','အဖေ'],'ဖုန်းဖန်သား');
  set(80,'Over Thun’s shoulder, friend’s untaped pale-grey phone shows a live camera view of the mirror-side corner. ONLY within screen, partial cream-striped sleeve, shoulder and small edge of father’s receding hairline and moustached profile appear around corner edge; no complete ghost or full face. The matching corner visible around phone is empty. Thun’s taped black phone supplies the separate flashlight.',['အဖေ'],'ဖုန်းဖန်သား');
  // Do not attach the black device plate to shots of the friend's grey phone.
  S(72).l=null; S(80).l='သွန်းအခန်း';
  set(81,'Thun and friend back toward the closed apartment door together, watching the corner through the friend’s pale-grey camera phone held between them. Thun carries her taped black phone separately as flashlight. No ghost is visible directly in the room; no working live view on the taped phone.',['သွန်း','သူငယ်ချင်း'],'သွန်းအခန်း');
  set(83,'Close on Thun holding her black phone with PHOTO A beside her face: same facial shape, modern loose hair outside screen and pinned 1987 hair inside. Her recognition connects the two periods without a split-screen montage or showing a second living woman.',['သွန်း','ပုံရင်း၁၉၈၇'],'သွန်းအခန်း');
  set(85,'Thun and her friend descend the apartment stair together at night. Thun holds the black phone ahead, its LED lighting the LEFT-turn flight and the screen guiding the route. Freeze one descending stride; friend close behind with pale-grey phone, mains stair light off.',['သွန်း','သူငယ်ချင်း'],'လှေကားလမ်း');
  set(86,'Thun and friend reach the square utility post on the sidewalk at the foot of the building, matching the last screen-guided route. Thun’s black phone screen turns pure white. No Ma Khin San physically waiting there.',['သွန်း','သူငယ်ချင်း'],'လှေကားလမ်း');
  for(const n of [87,88]) S(n).w=[...new Set([...(S(n).w||[]),'ပုံရင်း၁၉၈၇'])];
  set(93,'The newly received PHOTO C fills the entire frame: Thun appears eighty, white hair, natural wrinkles, warm smile, pale blue cardigan, grey wall with small calendar behind her LEFT shoulder and white band on LEFT wrist at lap. Both hidden clue locations are already present but not readable at this framing.',['ပုံရင်းအိုမင်း'],null);
  for(const n of [95,96,97,98]) { S(n).w=['ပုံရင်းအိုမင်း']; S(n).l='ဖုန်းဖန်သား'; }
  set(97,'Zoom within the SAME PHOTO C toward elderly Thun’s LEFT wrist resting on lap. White hospital band already present in master; aged hand and pale blue cardigan stay identical. Lettering not yet readable at this step.');
  const gloss={17:'ဖုန်းကရတဲ့ ဓာတ်ပုံ scan — အဝါရောင်အနားနဲ့ အပေါ်ဘယ်ထောင့်ခေါက်ရာက screen ထဲမှာပဲ ပါမယ်။ သွန်းလက်ထဲ စက္ကူပုံတကယ်မရှိသေးဘူး။',18:'Laptop ပေါ်မှာ AI ပုံနဲ့ ဓာတ်ပုံ scan ကို ဘေးချင်းယှဉ်ထား။ မျက်နှာ၊ ဝတ်စုံ၊ ဆံပင်၊ နောက်ခံ အတိအကျတူ။',29:'တံခါးနောက်က လူရဲ့ပခုံးအစိတ်အပိုင်းပဲ။ ဘယ်သူလဲ မဖော်ထုတ်သေး၊ အဖေလို့ အတည်မပြုရ။',31:'အိမ်နံပါတ်ကို မြန်မာဂဏန်း ၄၂ လို့ပဲ ရေးပါ။',43:'ပုံ B ထဲမှာ မခင်စန်း ဘယ်ဘက်၊ ကိုဇော်လင်းအဖေ ညာဘက်။ ဓာတ်ပုံဟောင်းထဲမှာ လူသားအဖေ့မျက်နှာ မှတ်မိရမယ်။',50:'ကက်ဆက်နားထောင်နေတဲ့ ကိုဇော်လင်းရဲ့တုံ့ပြန်ပုံ။ ဇာတ်ညွှန်းမပေးထားတဲ့ ငယ်ဘဝပုံအသစ် မဖန်တီးရ။',53:'သွန်းရဲ့မျက်နှာနဲ့ ဖုန်းထဲကပုံ A မျက်နှာကို ယှဉ်ပြ။ သွန်းလက်ထဲ ဓာတ်ပုံစက္ကူအဟောင်း မထည့်ရ။',59:'ဖုန်းတစ်လုံးထဲ ပုံနှစ်ခု — အပေါ်မှာ အခန်းဗလာ 15 SEP 2026၊ အောက်မှာ ပျောက်ဆုံးကြောင်းပို့စ် 16 SEP 2026။',61:'အဲဒီည သူငယ်ချင်းရောက်လာတယ်။ နေ့ခင်းမဟုတ်။ သူငယ်ချင်းရဲ့ မီးခိုးဖျော့ဖုန်းက ကင်မရာမပိတ်ထားဘူး။',63:'သန်းခေါင်ကျော် တစ်နာရီအထိ စောင့်နေတဲ့ည။ အပြင်မှောင်၊ အခန်းမီးလင်း။',72:'သူငယ်ချင်းဖုန်းကနေ မန္တလေးဟိုတယ်ထဲက သွန်းအမေနဲ့ Video Call။ တံခါးအပြင်က မိန်းမ မဟုတ်။',80:'ကင်မရာမပိတ်ထားတဲ့ သူငယ်ချင်းဖုန်း screen မှာပဲ အဖေ့ရဲ့ပခုံးနဲ့မျက်နှာအစွန်း မထင်မရှား။ အပြင်ထောင့်မှာ ဘာမှမရှိ။',93:'ပုံ C — သွန်းအိုမင်းပုံတစ်ပုံတည်းကို နောက် zoom တွေမှာ ဆက်သုံးမယ်။ Calendar နဲ့ ဘယ်လက်ပတ်ကို အစကတည်းက ထည့်ထား။'};
  for(const [n,g] of Object.entries(gloss)) S(Number(n)).g=g;
  S(59).g='ဖုန်းထဲမှာ သွန်းရဲ့ selfie နဲ့ ပျောက်ဆုံးကြောင်းပို့စ်တစ်ခု — 16 SEP 2026၊ MISSING PERSON — PLEASE SHARE။ အခန်းဗလာပုံကို Shot 58 မှာပြပြီးပြီ။';
  SCENES.forEach((s,i)=>{
    const n=i+1;
    const text=TEXT[n]||[];
    const lens=INSIDE.has(n)?'Image-within-image framing: screen or print content stays a bounded flat picture, never people physically appearing beside the device. Keep outer device and hands clean modern digital. Apply 1987 grain only when the specified inner picture depicts 1987; modern pictures, CCTV and calls are not vintage. No recursive nested screens; when an inner photograph includes a device, its screen is blank or unreadable.':FULL_VINTAGE.has(n)?'Full-bleed historical generated photo insert: no phone, hands holding screen, app frame or present-day onlooker. Only this inner photo gets 1987 grain and muted yellow colour.':n===93?'Full-bleed modern generated PHOTO C, no device or present-day onlooker. Clean digital photograph, not a physical transformation.':'Real 2026 camera view with clean natural digital detail; no vintage grade on the apartment or living characters.';
    let continuity='';
    if(n>=61&&n<=86) continuity=' Late-night continuity: Thun wears teal T-shirt and indigo jeans, friend ochre shirt and black trousers. Thun owns BLACK-cased phone; both its front and rear lenses are taped from shot 62, but the LED flashlight is uncovered. Friend owns a separate PALE GREY phone with working cameras, used for CCTV, video call and live camera. Do not transfer tape or cases between phones. Both women stay together through the escape; keep friend visible only when composition includes her.';
    if(n>=93&&n<=98) continuity+=' Every elderly detail is a crop of the same PHOTO C, not a fresh portrait. Present-day Thun outside the photo stays young. Calendar behind LEFT shoulder and hospital band on LEFT wrist never switch sides. Reveal text only in its specified close-up.';
    s.d=`Detailed scene direction: ${DIRECTIONS[i]} ${lens}${continuity}`;
    s.style='Cinematic photorealism, 16:9 landscape final shot. Choose the stated camera angle and a single held instant; natural hands, perspective and skin, no fisheye except the CCTV view. Reflections never obscure photographic clues. No gore, corpse or complete supernatural figure. '+(text.length?'Only these exact strings may be legible, in the named picture or interface area: '+text.map(t=>JSON.stringify(t)).join(', ')+'. All other letters and digits absent, cropped away or genuinely unreadable. No repeated date on the outer video frame.':'No legible text or dates: labels and interfaces blank, cropped or out of focus. Do not invent a vintage date stamp.')+' No subtitle, watermark or brand logo.';
  });
}

export const TEXT={10:['17 OCT 1987'],19:['17.10.87'],31:['၄၂'],57:['14 SEP 2026'],58:['15 SEP 2026'],59:['16 SEP 2026','MISSING PERSON — PLEASE SHARE'],64:['Your image is ready.'],95:['2027'],96:['AGE: 26'],98:['17 OCT 2027'],99:['Generating your next memory…']};
const FULL_VINTAGE=new Set([5,6,7,8,9,26,27,28,29,30,49]);
const INSIDE=new Set([2,3,10,12,13,15,17,18,19,20,21,25,31,32,33,34,35,37,38,39,40,42,43,53,55,56,57,58,59,64,66,67,69,72,74,78,80,83,84,88,90,92,95,96,97,98,99]);
const DIRECTIONS=`
35mm medium-wide at bedside, night ceiling lamp plus subtle phone fill. Thun reclines LEFT of frame, room geography visible, no phone photo insert yet.
85mm screen insert almost perpendicular to glass, phone fills seventy-five percent of frame. Four separate friends' trend portraits in a two-by-two grid, not four copies of Thun.
Same device angle for unreadable chat shapes and one laughing emoji. Keep fingers on bezel, no portrait materializing in the real bedroom.
50mm over-shoulder at desk: Thun selects her existing selfie thumbnail to upload. Do not stage a new live selfie as the completed generation.
50mm eye-level full-photo street portrait, Ma Khin San identity supplies Thun's exact face in period dress. Knee-up, still poised, no date stamp.
35mm full-photo environmental portrait outside teashop, same face and ivory-maroon outfit. Low stools and kettles behind, no modern vehicles or readable shop sign.
85mm waist-up formal studio portrait, same pinned hair and clothes, faint smile. Painted neutral backdrop, distinct from fourth photo's cracked wall.
PHOTO A medium portrait crop, frontal 85mm look, shoulders square and lips unsmiling. Preserve background crack LEFT and doorjamb RIGHT, no date visible yet.
Tight crop of PHOTO A eyes and upper cheeks only, straight-on. Fear comes from gaze; no new eye shape, tears, ghost pupils or altered portrait.
Macro crop of PHOTO A lower-RIGHT corner displayed on phone; orange date reads exactly 17 OCT 1987. Retain adjacent ivory blouse edge as evidence of same image.
50mm real reaction, Thun laughs and taps post control. Screen angled away, no need to render a Facebook caption or date.
Near-normal phone insert of same published PHOTO A post with reaction icons below. Photo may be a small thumbnail, no newly posed portrait.
100mm close screen crop isolating blank avatar and one unreadable comment. Keep tiny surrounding rows for context, no readable threatening sentence.
85mm real facial close-up, smile has faded, phone light restrained. Keep modern teal shirt, actual room dark, no vintage texture.
Phone insert with one incoming grey image-attachment placeholder. Thumbnail has not resolved yet, no paper print in her hands.
85mm reaction close-up, Thun stops breathing momentarily, eyes fixed down at phone. No picture superimposed on face.
Normal-to-screen view of received PHOTO A scan, paper edges INSIDE screen. Old crease upper LEFT; only modern fingers touch black case.
Symmetrical two-panel comparison on ONE laptop screen, identical PHOTO A portrait size and face alignment. Scan border on RIGHT only, no repeated devices or twin women outside screen.
Reverse-side scan on phone, almost square-on. Only faded blue 17.10.87 centered on foxed paper; no face printed through back.
Phone message interface crop, two unreadable incoming shapes beneath scan thumbnail. Son's words stay in narration; no literal mother beside phone.
Same message screen, one additional unreadable bubble appears. Thun's thumb pauses above bottom bezel; don't print a competing disappearance date.
50mm real medium shot, Thun sits upright holding phone below chin, eyes lowered to date offscreen. Date is not repeated on outer frame.
Night side-on 50mm bed shot, awake Thun facing camera, phone face-down near pillow. No newly generated image or apparition.
Over-left-shoulder laptop view with empty image-search results area, blurred controls. One real Thun, no legible search terms or invented news article.
85mm laptop interface insert, unreadable short prompt and pointer by plain generation button. Device remains laptop, no resolved photograph yet.
35mm full-photo night street, Ma Khin San moves LEFT toward House 42 while looking back RIGHT. Freeze one stride, face sharp enough to match master.
100mm tighter crop of same street behind her, exactly two distant headlights. No visible driver, license plate or complete pursuer.
50mm full-photo view of maintained 1987 house facade, woman at LEFT door with RIGHT knuckles raised. Door closed; establish plaque to its RIGHT without readable number.
Match camera position from 28. Door now ajar, only anonymous shoulder/sleeve behind leaf, no full person, recognizable father or prematurely assigned culprit.
Match facade and exposure from 28, doorway empty now. No woman, extra shadow, disturbed body or invented evidence.
Phone zoom into existing plaque at RIGHT of door, slight pixel texture, exactly Burmese ၄၂. Keep plaque rectangle and wall crack unchanged.
50mm over-Thun-shoulder laptop call view in next-day daylight. Zaw Lin appears ONLY on laptop in plain remote room, not sitting physically beside her.
85mm crop on Zaw Lin within call screen, thin bezel visible. Stable face, grey shirt, gentle daylight; no archival grain.
Thun holds black phone displaying generated house toward laptop webcam; Zaw Lin visible on laptop behind. Exactly two devices, his recognition clear, no duplicated phone reflections.
Tight call-screen reaction on Zaw Lin looking aside. He remains in remote plain room, no visual flashback to employer or father.
35mm real daylight two-shot outside abandoned 2026 facade, Thun recording with black phone, Zaw Lin beside. Same architecture as old photo, now weathered.
50mm over-shoulder alignment shot at entry. Phone photo occupies left foreground, real facade and stair beyond align at shared verticals; readable difference is aging, not shifted architecture.
85mm phone insert upstairs, near-empty red battery shape, no readable percentage. Real room daylight, one moment after drop, not two battery states in montage.
Phone rests propped against bag on floor, generator spinner visible, both Thun's hands off screen. No disembodied extra hand supporting it.
Near-square phone screen, generated Ma Khin San points RIGHT index finger at darker short board below window. Modern real board visible beyond device; woman exists only inside photo.
35mm low real two-shot, they lift exactly that darker board below window. One shallow cavity with bag, no body, bones, extra trapdoor or hidden staircase.
50mm top-down flat lay on real boards: open bag and exactly cassette, handbag, PHOTO B. Separate objects, no items fused into photograph.
85mm over-Zaw-Lin-shoulder print insert with enough real cheek for reaction. PHOTO B intact, Ma Khin San LEFT and identifiable living father RIGHT, hands on edges only.
85mm Zaw Lin reaction, PHOTO B lower edge blurred foreground. Father remains inside print; do not put him in actual abandoned room.
50mm real medium of Zaw Lin seated on dusty boards with photo. Same present-day clothes, grief without an invented childhood flashback.
Macro reference cassette loaded in ordinary charcoal portable player on desk, warm lamp. Same torn label corner, two reel hubs; no readable brand.
Shallow-focus cassette window foreground, Zaw Lin listening behind. Voice does not create living Ma Khin San or father in room.
85mm real close-up of tearful Zaw Lin under same desk lamp. No phone screen or second historical face overlay.
Reframe the existing running photo from 26 toward House 42 entry; headlights behind. This illustrates her route to help, not new evidence of a photographed attacker.
50mm real listening reaction beside cassette; Zaw Lin hears plan to leave with him. No invented toddler photograph, victim tableau or extra child actor.
100mm cassette-window insert at audio cutoff, reels stopped and ribbon slack. No hand ripping tape, shell breaking or literal fight.
35mm real Zaw Lin sitting against wall near desk, face in hands. Tape-player position consistent, no hallucinated father beside him.
85mm frontal comparison, real Thun LEFT and phone PHOTO A face RIGHT at similar scale. One physical young woman; faces match exactly without twin body.
Evening real medium shot of Thun alone typing at laptop. Teal T-shirt and same hair; Zaw Lin has left, friend not present yet.
Near-normal laptop insert showing a generated photograph taken from behind-and-above THIS seated Thun. Inner laptop screen is dark unreadable, stopping endless screen recursion.
Side angle includes actual Thun and laptop image from 55; the photograph's high rear camera angle differs from webcam. No tape yet; permission status stays narrated.
Phone or laptop image insert: overhead generated photo of Thun asleep on LEFT-wall bed, date 14 SEP 2026 INSIDE lower right. Modern crisp image, no vintage grain.
85mm phone-dominant insert, screen nearly perpendicular to lens, shocked real Thun softly visible beyond. Inner empty-bed forecast matches 57's overhead composition, only 15 SEP 2026 legible; no missing-person post yet.
Near-perpendicular phone insert of one missing-person post. Original selfie fills upper half, date and banner below it; keep face consistent with upload, no second image card.
35mm medium-wide as black phone lands face-up on grey bedcover and Thun recoils. One phone, frozen just after landing, no shattered glass implied.
Night desk two-shot as friend arrives. One black phone and one pale-grey phone visible, location pin/cloud shapes only, no daytime window light.
Macro of Thun pressing black tape over her black phone's REAR lenses; front lens already taped. LED light left clear, friend's grey phone visibly separate and untaped.
Static 35mm late-night waiting shot, two women on bed, curtains dark, ceiling light on. No midday light, visible clock sequence or montage.
100mm black-phone screen insert, one banner reads exactly Your image is ready. No additional clock, date or app title; 2:17 is narrated.
50mm close two-shot over black phone, friend taps while Thun hesitates. Fingers stay physically separate, real door remains closed behind them.
Near-normal phone view of one predictive doorway composition. Thun modern inside LEFT, Ma Khin San vintage outside RIGHT; mixed textures restricted to this inner image, actual door closed.
Zoom within warning photo onto Ma Khin San's face and RIGHT pointing index finger. Head slightly turned in a clear warning, not a ghost snarl or speech bubble.
35mm real interior door shot, both women soft foreground, lock engaged and light line beneath intact. No visible knocker or phantom hand.
Friend checks CCTV on her PALE GREY phone. Wide-angle empty landing feed, no timestamps or figure; CCTV is remote building camera, not taped phone lens.
85mm real Thun turns toward closed door listening. Voice has no visible woman outside, friend remains nearby offscreen.
Tighter real Thun reaction with hand to mouth. Natural frightened skin tone, no age change or photo overlay.
Grey-phone call screen nearly fills frame; mother's lilac blouse and softly lit hotel headboard identifiable. No duplicate mother outside device or at apartment door.
Match real closed-door composition after knocking stops. Keep locked hardware, light gap and empty landing implication; don't show an opening.
Black-phone generated photo insert, both women inside picture, partial father's shoulder/profile at far RIGHT border. No full ghost silhouette; actual space around phone remains ordinary.
Match actual room angle to inner image of 74; both women in foreground, space behind empty. This is real camera view, not another generated photograph.
35mm real power-cut shot, ceiling light now OFF. Black phone LED supplies sole beam, grey phone can be held with screen dim; both women remain together.
85mm mirror-edge insert, one fleeting cropped dark blur at frame edge. No complete reflection, resolved face or third standing person.
Black-phone screen warning insert, Ma Khin San points RIGHT toward mirror-side corner. No physical Ma Khin San in actual room.
Real beam hits bare corner between mirror and door, viewed along black phone LED direction. Grey camera phone ready at edge, no figure visible to eye.
Grey-phone live view aligned to same corner. Cropped father's cream-striped shoulder and small moustached profile appear only INSIDE screen; real wall around it empty.
50mm real retreat two-shot, Thun watches friend's grey camera display while both move toward door. Black phone provides light; no suddenly functioning taped camera.
85mm real recognition close-up, Thun lit by phone. No explanatory words or historic image montage needed.
50mm side-by-side real face and black-phone PHOTO A, faces aligned but periods clearly distinct. No split-screen editorial panel or living double.
Black-phone image shows protective Ma Khin San directing toward LEFT-turn landing stair; no full apparition in real stairwell. Same pinned hair and ivory blouse.
35mm low stair-landing angle, Thun and friend descend together, one mid-stride instant. Black LED illuminates path; no strobing restored mains light.
35mm sidewalk two-shot at square utility post, matching exit route. Black screen pure white and beam fades; no final apparition or vanished friend.
One month later, real daylight Zaw Lin at table with his original PHOTO A print and phone. He owns original print; no distressed nighttime costume lighting.
Near-normal phone insert of his public post using PHOTO A scan. Caption unreadable and face identical to earlier archive, no new smiling portrait.
Real daylight Thun by window, black phone face-down. Later clean teal shirt, no period outfit or old woman in reflection.
Near-normal phone feed with distinct strangers' aged portraits, cheerful modern digital images. No Thun picture prematurely entering grid.
50mm daylight Thun smiles faintly and declines via phone. Keep messages unreadable, no age transformation in real face.
Black-phone gallery screen shows one new PHOTO C thumbnail at top, finger hovering. No generate button pressed or extra aged portraits of Thun.
PHOTO C full-bleed master portrait, 70mm waist-to-lap framing. Warm smile, LEFT wristband and calendar high picture RIGHT already present but writing unreadable at this scale.
Real 85mm reaction of YOUNG Thun looking at phone with relief. Same actual apartment and youthful face; no literal aging outside screen.
Zoom into PHOTO C upper-RIGHT wall calendar, slight screen pixels, exactly 2027. Keep sliver of white hair/blue cardigan at LEFT as positional anchor.
Phone viewer lower caption strip directly below PHOTO C reads exactly AGE: 26. Image above is mostly cropped, calendar text outside crop, no age printed on her skin.
Zoom PHOTO C LEFT wrist at lap, white band partly turned away so text not yet readable. Aged hand wrinkles, cardigan cuff and hand position unchanged.
Extreme crop of that SAME LEFT-wrist band now shows exactly 17 OCT 2027. Band edges and aged skin retained, no barcode, patient name or other date.
Final 85mm black-phone insert, spinner plus exact Generating your next memory… beneath. Young Thun blurred behind; no next image revealed.
`.trim().split('\n');
