import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-999 w-full py-4 transition-all duration-300 ${isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"}`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Code size={14} className="text-primary" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
              aria-label="home"
            >
              {PERSONAL_INFO?.name?.split(" ")[0]}
            </button>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button key={link?.id} onClick={() => handleNavClick(link?.id)}>
                {link?.label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-7 py-2.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-4 mt-3 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-4">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// className={`block w-full text-left px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${activeSection === link?.label ? "text-white bg-white/30" : "text-white/20 hover:text-white hover:bg-white/25"} `}
