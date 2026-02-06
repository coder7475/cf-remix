import { useState, useEffect, useCallback, useRef } from "react";

interface UseScrollVisibilityOptions {
  threshold?: number;
  passive?: boolean;
}

/**
 * Optimized scroll visibility hook with passive event listeners
 * Reduces scroll jank by using passive listeners
 */
export function useScrollVisibility(
  options: UseScrollVisibilityOptions = {},
): [boolean, () => void] {
  const { threshold = 400, passive = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimer = useRef<number | null>(null);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Debounce visibility state changes
      if (scrollTimer.current) {
        return;
      }

      scrollTimer.current = requestAnimationFrame(() => {
        const y =
          window.scrollY ||
          document.documentElement?.scrollTop ||
          document.body?.scrollTop ||
          0;
        setIsVisible(y > threshold);
        scrollTimer.current = null;
      });
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) {
        cancelAnimationFrame(scrollTimer.current);
      }
    };
  }, [threshold, passive]);

  return [isVisible, scrollToTop];
}

/**
 * Hook for keyboard navigation smooth scrolling
 */
export function useKeyboardScroll(): void {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;

      const target = event.target as HTMLElement | null;
      const isTypingElement =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if (isTypingElement) return;

      const viewportHeight =
        globalThis.innerHeight || document.documentElement?.clientHeight || 0;

      let deltaY = 0;

      switch (event.key) {
        case "PageDown":
          deltaY = viewportHeight * 0.9;
          break;
        case "PageUp":
          deltaY = -viewportHeight * 0.9;
          break;
        case " ":
          deltaY = event.shiftKey
            ? -viewportHeight * 0.9
            : viewportHeight * 0.9;
          break;
        case "ArrowDown":
          deltaY = 160;
          break;
        case "ArrowUp":
          deltaY = -160;
          break;
        default:
          return;
      }

      event.preventDefault();

      globalThis.scrollBy?.({
        top: deltaY,
        behavior: "smooth",
      });
    };

    globalThis.addEventListener("keydown", handleKeyDown as EventListener, {
      passive: false,
    });

    return () => {
      globalThis.removeEventListener("keydown", handleKeyDown as EventListener);
    };
  }, []);
}
