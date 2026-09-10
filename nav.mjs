/**
 * One list of sheets, so adding a story does not mean editing every generator.
 *
 * ⚠️ NAV IS BAKED IN AT GENERATION TIME. A page only knows the stories that
 * existed when it was last built, so adding an entry here changes nothing on the
 * pages already written — they keep pointing at the old list and the new story is
 * unreachable from any of them. Adding a story therefore means rebuilding ALL of
 * them: run `node build.mjs`, never a single generator on its own.
 *
 * Newest first: with eighteen sheets the one you just made should not be at the
 * far end of a wrapped row of Burmese titles.
 */
const SHEETS = [
  { key: "drown", href: "/drown.html", label: "ရေမရှိတဲ့ကန်ထဲမှာ ရေနစ်တဲ့လူ" },
  { key: "flower", href: "/flower.html", label: "ပန်းပွင့်တွေ မညှိုးတဲ့ ရွာ" },
  { key: "return", href: "/return.html", label: "အိမ်ပြန်ရောက်ပြီးသားလူ" },
  { key: "extrabowl", href: "/extra-bowl.html", label: "ပိုနေတဲ့ပန်းကန်" },
  { key: "thanmya", href: "/thanmya.html", label: "သူဌေးမကြီး" },
  { key: "sleep", href: "/sleep.html", label: "တစ်ယောက်တော့ နိုးနေပါ" },
  { key: "ward", href: "/ward.html", label: "ကျန်ရှိသေးသော အသက်" },
  { key: "shwezin", href: "/shwezin.html", label: "ဇာတ်ခုံအောက်" },
  { key: "zat", href: "/zat.html", label: "ပွဲမပြီးသေးဘူး" },
  { key: "memory", href: "/memory.html", label: "မှတ်မိခြင်း" },
  { key: "house", href: "/house.html", label: "မေ့နေတဲ့အိမ်" },
  { key: "field", href: "/field.html", label: "လယ်ကွင်းထဲက လူ" },
  { key: "mother", href: "/mother.html", label: "နှစ်ခါပြန်လာတဲ့အမေ" },
  { key: "school", href: "/school.html", label: "သရဲအိမ်" },
  { key: "register", href: "/register.html", label: "ဧည့်စာရင်း" },
  { key: "laundry", href: "/laundry.html", label: "စက်နံပါတ် ၇" },
  { key: "banyan", href: "/banyan.html", label: "သုံးခါခေါ်သံ" },
  { key: "802", href: "/", label: "အခန်း ၈၀၂" },
];

export const SHEET_COUNT = SHEETS.length;

/**
 * The current sheet gets aria-current and a class rather than a "(current)"
 * suffix — at this many entries the suffix just made the longest label longer.
 */
export const NAV = (current) => SHEETS
  .map((s) => s.key === current
    ? `<a class="on" aria-current="page" href="${s.href}">${s.label}</a>`
    : `<a href="${s.href}">${s.label}</a>`)
  .join("");
