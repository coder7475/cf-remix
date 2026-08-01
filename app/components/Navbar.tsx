import { useState, useEffect, useRef, useCallback } from "react";

import { Menu, X } from "lucide-react";
import { cn } from "~/libs/utils";
import { Link } from "@remix-run/react";
import { ThemeToggle } from "./ThemeToggle";

const SECTION_IDS = ["hero", "about", "skills", "experience", "projects", "contact"];

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const prefersReducedMotion = usePrefersReducedMotion();

  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLButtonElement | HTMLAnchorElement)[]>([]);

  const touchStartXRef = useRef<number>(0);
  const touchCurrentXRef = useRef<number>(0);
  const isSwipingRef = useRef<boolean>(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-80px 0px -40% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  const openMobileMenu = useCallback(() => {
    if (isMenuAnimating) return;
    setIsMenuAnimating(true);
    setMenuVisible(true);
    setIsMobileMenuOpen(true);
    const duration = prefersReducedMotion ? 0 : 250;
    setTimeout(() => setIsMenuAnimating(false), duration);
  }, [isMenuAnimating, prefersReducedMotion]);

  const closeMobileMenu = useCallback(() => {
    if (isMenuAnimating) return;
    setIsMenuAnimating(true);
    setIsMobileMenuOpen(false);
    const duration = prefersReducedMotion ? 0 : 200;
    setTimeout(() => {
      setMenuVisible(false);
      setIsMenuAnimating(false);
      hamburgerButtonRef.current?.focus();
    }, duration);
  }, [isMenuAnimating, prefersReducedMotion]);

  const toggleMobileMenu = useCallback(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }, [isMobileMenuOpen, openMobileMenu, closeMobileMenu]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isMobileMenuOpen) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchCurrentXRef.current = e.touches[0].clientX;
    isSwipingRef.current = true;
  }, [isMobileMenuOpen]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isSwipingRef.current || !isMobileMenuOpen) return;
    touchCurrentXRef.current = e.touches[0].clientX;
    const deltaX = touchCurrentXRef.current - touchStartXRef.current;
    if (deltaX > 0 && menuRef.current) {
      const percentage = Math.min(deltaX / window.innerWidth, 1);
      menuRef.current.style.transform = `translateX(${percentage * 100}%)`;
      menuRef.current.style.opacity = `${1 - percentage * 0.5}`;
    }
  }, [isMobileMenuOpen]);

  const handleTouchEnd = useCallback(() => {
    if (!isSwipingRef.current || !isMobileMenuOpen) return;
    isSwipingRef.current = false;
    const deltaX = touchCurrentXRef.current - touchStartXRef.current;
    const threshold = window.innerWidth * 0.3;
    if (menuRef.current) {
      menuRef.current.style.transform = "";
      menuRef.current.style.opacity = "";
    }
    if (deltaX > threshold) {
      closeMobileMenu();
    }
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const focusableElements = menuItemsRef.current.filter(Boolean);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    if (isMobileMenuOpen && menuVisible) {
      setTimeout(() => {
        const firstMenuItem = menuItemsRef.current[0];
        if (firstMenuItem) {
          firstMenuItem.focus();
        }
      }, 100);
    }
  }, [isMobileMenuOpen, menuVisible]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background shadow-md py-2 md:bg-background/95 md:backdrop-blur-md md:border-b md:border-border/50"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <img
            src="/favicon-32x32.png"
            alt="Logo"
            className="inline-block w-8 h-8 mr-2 align-middle"
          />
          Robiul Hossain
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith("#");
            const sectionId = isAnchor ? link.href.replace("#", "") : null;
            const isActive = isAnchor && activeSection === sectionId;
            return isAnchor ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative font-medium transition-colors duration-200 font-mono",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="relative font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 font-mono"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={hamburgerButtonRef}
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-11 h-11 text-foreground hover:bg-muted/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuVisible && (
        <div
          className={cn(
            "md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm safe-area-top safe-area-bottom safe-area-left safe-area-right",
            isMobileMenuOpen ? "backdrop-enter-active" : "backdrop-exit-active"
          )}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      {menuVisible && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={cn(
            "md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm safe-area-top safe-area-bottom safe-area-left safe-area-right",
            isMobileMenuOpen ? "mobile-menu-enter-active" : "mobile-menu-exit-active"
          )}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 px-6">
            {navLinks.map((link, index) => {
              const isAnchor = link.href.startsWith("#");
              const sectionId = isAnchor ? link.href.replace("#", "") : null;
              const isActive = isAnchor && activeSection === sectionId;
              return isAnchor ? (
                <button
                  key={link.name}
                  ref={(el) => { menuItemsRef.current[index] = el!; }}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative text-xl font-medium transition-colors w-full text-center py-3",
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary animate-in slide-in-from-left-1/2 fade-in duration-300" />
                  )}
                </button>
              ) : (
                <Link
                  key={link.name}
                  ref={(el) => { menuItemsRef.current[index] = el!; }}
                  to={link.href}
                  className="relative text-xl font-medium text-foreground hover:text-primary transition-colors w-full text-center py-3"
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              );
            })}
            <ThemeToggle />
            <button
              ref={closeButtonRef}
              onClick={closeMobileMenu}
              className="absolute top-4 right-4"
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
