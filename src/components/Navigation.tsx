import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#vision", label: "विकास आराखडा" },
  { href: "#about", label: "आमच्याबद्दल" },
  { href: "#join", label: "सहभागी व्हा" },
  { href: "#contact", label: "संपर्क" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
          >
            <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? "bg-primary" 
                : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}>
              <span className={`font-display font-bold text-lg ${
                isScrolled ? "text-primary-foreground" : "text-white"
              }`}>१९२</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg leading-tight transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                प्रभाग 192
              </span>
              <span className={`text-[10px] uppercase tracking-widest transition-colors ${
                isScrolled ? "text-accent" : "text-accent"
              }`}>
                भृ.मुं.पा. 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full marathi-text group ${
                  isScrolled
                    ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isScrolled ? "bg-accent" : "bg-accent"
                }`} />
              </a>
            ))}
            <a
              href="#join"
              className={`ml-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                isScrolled
                  ? "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/30"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="marathi-text">सहभागी व्हा</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className={`py-4 px-2 rounded-2xl ${
            isScrolled 
              ? "bg-muted/50" 
              : "bg-white/10 backdrop-blur-xl border border-white/10"
          }`}>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-3 px-4 rounded-xl transition-all duration-300 marathi-text ${
                    isScrolled
                      ? "text-foreground hover:bg-background"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 py-3 px-4 rounded-xl font-semibold text-center bg-accent text-accent-foreground"
              >
                सहभागी व्हा
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
