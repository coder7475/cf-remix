import { useScrollVisibility } from "~/hooks/useScrollVisibility";
import { ArrowUp } from "lucide-react";

export const BackToTopButton = () => {
  const [isVisible, scrollToTop] = useScrollVisibility({ threshold: 400, passive: true });

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-[0_16px_45px_rgba(15,23,42,0.9)] h-11 w-11 hover:bg-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};
