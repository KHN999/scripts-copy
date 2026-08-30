/** One list of sheets, so adding a story does not mean editing every generator. */
const SHEETS = [
  { key: "802", href: "/", label: "အခန်း ၈၀၂" },
  { key: "register", href: "/register.html", label: "ဧည့်စာရင်း" },
  { key: "laundry", href: "/laundry.html", label: "စက်နံပါတ် ၇" },
  { key: "banyan", href: "/banyan.html", label: "သုံးခါခေါ်သံ" },
  { key: "extrabowl", href: "/extra-bowl.html", label: "The Extra Bowl" },
];

export const NAV = (current) => SHEETS
  .map((s) => `<a href="${s.href}">${s.label}${s.key === current ? " (current)" : ""}</a>`)
  .join("");
