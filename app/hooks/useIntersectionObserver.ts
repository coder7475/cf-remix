import { useState, useEffect, useRef, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook for intersection observer with consistent pattern across components
 * Reduces code duplication and provides better performance tracking
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {},
): [boolean, RefObject<HTMLElement>] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Early return if already visible and should only trigger once
    if (isVisible && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      { threshold, root, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, triggerOnce, threshold, root, rootMargin]);

  return [isVisible, sectionRef];
}

/**
 * Simplified hook for basic visibility detection
 */
export function useVisibility(
  threshold: number = 0.1,
): [boolean, RefObject<HTMLElement>] {
  return useIntersectionObserver({ threshold });
}
