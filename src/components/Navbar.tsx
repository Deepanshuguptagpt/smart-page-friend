import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";

const navItems = [
  { label: "ABOUT US", hasDropdown: true },
  { label: "OUR COLLEGES", hasDropdown: true },
  { label: "FACILITIES", hasDropdown: true },
  { label: "GALLERY", hasDropdown: true },
  { label: "ADMISSIONS", hasDropdown: false },
  { label: "PLACEMENTS", hasDropdown: false },
  { label: "EVENTS", hasDropdown: false },
  { label: "360°", hasDropdown: false },
  { label: "CAREER", hasDropdown: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-college-green sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex items-center gap-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <button className="flex items-center gap-1 px-4 py-3 text-sm font-display font-semibold text-primary-foreground hover:bg-primary/20 transition-colors">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </button>
              </li>
            ))}
          </ul>
          <button className="p-3 text-primary-foreground hover:bg-primary/20 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center justify-between py-2">
          <span className="font-display font-bold text-primary-foreground">Menu</span>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-primary-foreground p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <ul className="lg:hidden pb-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button className="w-full text-left px-4 py-2 text-sm font-display font-semibold text-primary-foreground hover:bg-primary/20 transition-colors">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
