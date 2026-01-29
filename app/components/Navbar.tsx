import { useState, useEffect } from "react";

import { Menu, X } from "lucide-react";
import { cn } from "~/libs/utils";
import { Link } from "@remix-run/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Experiences", href: "/experiences" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-emerald-400/20 py-2"
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent py-4"
      )}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors flex items-center gap-2"
        >
          <img
            src="/logo.svg"
            alt="Logo"
            className="inline-block w-8 h-8 align-middle"
          />
          <span className="ml-2">Robiul Hossain</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 rounded-full border border-emerald-400/20 bg-slate-950/60 px-5 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.9)]"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative font-medium text-xs sm:text-sm text-muted-foreground hover:text-emerald-100 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-emerald-400 after:to-emerald-200 after:scale-x-0 after:origin-bottom-right after:transition-transform hover:after:scale-x-100 hover:after:origin-bottom-left font-mono tracking-[0.16em] uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
