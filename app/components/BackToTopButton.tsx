import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = globalThis.scrollY || document.documentElement?.scrollTop || 0;
      setIsVisible(y > 400);
    };

    handleScroll();
    globalThis.addEventListener("scroll", handleScroll);

    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const scrollToTop = () => {
    globalThis.scrollTo?.({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-[0_16px_45px_rgba(15,23,42,0.9)] h-11 w-11 hover:bg-emerald-400 transition-colors"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

