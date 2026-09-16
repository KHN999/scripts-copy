/**
 * One list of sheets, so adding a story does not mean editing every generator.
 *
 * ⚠️ NAV IS BAKED IN AT GENERATION TIME. A page only knows the stories that
 * existed when it was last built, so adding an entry here changes nothing on the
 * pages already written. Adding a story means rebuilding ALL of them: run
 * `node build.mjs`, never a single generator on its own. build.mjs verifies it.
 *
 * `created` is the video-lab project's created_at, so this list stays in the same
 * order as the board at localhost:3150. Newest first.
 */
const SHEETS = [
  { key: "amya",      href: "/amya.html",       created: "2026-09-16", shots: 120, label: "ရေစက်မကျတဲ့နာမည်" },
  { key: "mem",       href: "/mem.html",        created: "2026-09-15", shots: 146, label: "မနက်ဖြန်သေမယ့်လူရဲ့ မှတ်ဉာဏ်" },
  { key: "ai80",      href: "/ai80.html",       created: "2026-09-13", shots: 99, label: "၁၉၈၀ ပုံထဲက ကျွန်မက… ကျွန်မမဟုတ်ဘူး" },
  { key: "hosp",      href: "/hosp.html",       created: "2026-09-11", shots: 129, label: "ကုတင်အောက်က လူနာစောင့်" },
  { key: "phoewa",    href: "/phoewa.html",     created: "2026-09-11", shots: 175, label: "ဖိုးဝရှေ့မှာ မလိမ်နဲ့" },
  { key: "eye",       href: "/eye.html",        created: "2026-09-11", shots:  91, label: "ပြတင်းပေါက်အပြင်က မျက်လုံး" },
  { key: "fire",      href: "/fire.html",       created: "2026-09-11", shots:  79, label: "ကျွန်တော့်ကို ကယ်ခဲ့တဲ့လူက မမွေးသေးဘူး" },
  { key: "tree",      href: "/tree.html",       created: "2026-09-11", shots:  77, label: "သစ်ပင်တွေထက် အမြင့်မှာ" },
  { key: "seat",      href: "/seat.html",       created: "2026-09-11", shots:  72, label: "ခုံနံပါတ် ဆယ့်ခုနစ်" },
  { key: "hand",      href: "/hand.html",       created: "2026-09-11", shots:  64, label: "အလောင်းက ကလေးကို မလွှတ်ဘူး" },
  { key: "drown",     href: "/drown.html",      created: "2026-09-10", shots: 113, label: "ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ" },
  { key: "flower",    href: "/flower.html",     created: "2026-09-09", shots: 138, label: "ပန်းပွင့်တွေ မညှိုးတဲ့ ရွာ" },
  { key: "return",    href: "/return.html",     created: "2026-09-09", shots: 105, label: "အိမ်ပြန်ရောက်ပြီးသားလူ" },
  { key: "thanmya",   href: "/thanmya.html",    created: "2026-09-09", shots:  69, label: "သူဌေးမကြီး" },
  { key: "sleep",     href: "/sleep.html",      created: "2026-09-08", shots:  86, label: "တစ်ယောက်တော့ နိုးနေပါ" },
  { key: "ward",      href: "/ward.html",       created: "2026-09-07", shots: 110, label: "ကျန်ရှိသေးသော အသက်" },
  { key: "memory",    href: "/memory.html",     created: "2026-09-06", shots:  73, label: "မှတ်မိခြင်း" },
  { key: "shwezin",   href: "/shwezin.html",    created: "2026-09-06", shots:  65, label: "ဇာတ်ခုံအောက်" },
  { key: "zat",       href: "/zat.html",        created: "2026-09-06", shots:  59, label: "ပွဲမပြီးသေးဘူး" },
  { key: "field",     href: "/field.html",      created: "2026-09-03", shots:  56, label: "လယ်ကွင်းထဲက လူ" },
  { key: "house",     href: "/house.html",      created: "2026-09-03", shots:  61, label: "မေ့နေတဲ့အိမ်" },
  { key: "mother",    href: "/mother.html",     created: "2026-09-03", shots:  55, label: "နှစ်ခါပြန်လာတဲ့အမေ" },
  { key: "school",    href: "/school.html",     created: "2026-09-01", shots:  53, label: "သရဲအိမ်" },
  { key: "register",  href: "/register.html",   created: "2026-08-29", shots:  52, label: "ဧည့်စာရင်း" },
  { key: "802",       href: "/",                created: "2026-08-28", shots:  38, label: "အခန်း ၈၀၂" },
  { key: "laundry",   href: "/laundry.html",    created: "2026-08-28", shots:  55, label: "စက်နံပါတ် ၇" },
  { key: "banyan",    href: "/banyan.html",     created: "2026-08-26", shots:  30, label: "သုံးခါခေါ်သံ" },
  { key: "extrabowl", href: "/extra-bowl.html", created: "2026-08-07", shots:  58, label: "ပိုနေတဲ့ပန်းကန်" },
];

export const SHEET_COUNT = SHEETS.length;

/** "10 Sep" — the year is noise when every sheet is from the same one. */
const shortDate = (iso) => {
  const [, m, d] = iso.split("-");
  return `${Number(d)} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Number(m) - 1]}`;
};

/**
 * The sidebar list. Each row carries the story, when it was written and how many
 * shots it needs — enough to pick one without opening it. The current sheet gets
 * aria-current so the CSS can mark it and the page can scroll it into view.
 */
export const NAV = (current) => SHEETS
  .map((s) => `<a class="navrow${s.key === current ? " on" : ""}" href="${s.href}"${
    s.key === current ? ' aria-current="page"' : ""}>`
    + `<span class="navlabel">${s.label}</span>`
    + `<span class="navmeta">${shortDate(s.created)} · ${s.shots} shots</span>`
    + `</a>`)
  .join("");
