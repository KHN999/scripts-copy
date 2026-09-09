/** One list of sheets, so adding a story does not mean editing every generator. */
const SHEETS = [
  { key: "802", href: "/", label: "အခန်း ၈၀၂" },
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
  { key: "extrabowl", href: "/extra-bowl.html", label: "The Extra Bowl" },
  { key: "return", href: "/return.html", label: "အိမ်ပြန်ရောက်ပြီးသားလူ" },
];

export const NAV = (current) => SHEETS
  .map((s) => `<a href="${s.href}">${s.label}${s.key === current ? " (current)" : ""}</a>`)
  .join("");
