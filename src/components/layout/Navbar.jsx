import { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../utils/constants";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

const MOBILE_MENU_ID = "mobile-menu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));
  const firstName = PERSONAL_INFO?.name?.split(" ")[0];

  // Background changes once the page is scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll(); // correct state on load / refresh mid-page
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu when the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handleChange = (e) => {
      if (e.matches) setIsMenuOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // While the mobile menu is open: Escape closes it and the page behind it can't scroll
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    scrollToSection(sectionId);
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showSolidBackground = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-999 w-full py-4 transition-all duration-300 ${showSolidBackground
        ? "bg-black/30 backdrop-blur-lg border-b border-white/5"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 rounded-lg hover:opacity-80 transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            aria-label={`${firstName} — back to top`}
          >
            <Code size={16} className="text-primary" aria-hidden="true" />
            <span className="text-2xl md:text-3xl font-bold bg-linear-to-r from-primary via-primary/80 to-primary/30 bg-clip-text text-transparent">
              {firstName}
            </span>
          </button>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-base transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded ${isActive ? "text-white" : "text-white/65 hover:text-white"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px w-full origin-left bg-primary transition-transform duration-300 motion-reduce:transition-none ${isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-7 py-2.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-primary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id={MOBILE_MENU_ID}
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${isMenuOpen
          ? "max-h-screen opacity-100 visible"
          : "max-h-0 opacity-0 invisible pointer-events-none"
          }`}
      >
        <div className="mx-4 mt-3 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-xl p-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

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
    </header>
  );
}

export default Navbar;