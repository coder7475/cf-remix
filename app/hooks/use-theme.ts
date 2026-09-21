import { useState, useEffect, useCallback } from "react";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function getInitialPreference(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

function resolveTheme(preference: Theme): "light" | "dark" {
  return preference === "system" ? getSystemTheme() : preference;
}

function applyTheme(resolved: "light" | "dark") {
  const root = document.documentElement;
  if (resolved === "light") {
    root.classList.add("light");
  } else {
    root.classList.remove("light");
  }
}

export function useTheme() {
  const [preference, setPreference] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialPreference();
    const resolved = resolveTheme(initial);
    setPreference(initial);
    setResolvedTheme(resolved);
    applyTheme(resolved);
    setMounted(true);

    if (initial === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: light)");
      const handler = (e: MediaQueryListEvent) => {
        const newResolved = e.matches ? "light" : "dark";
        setResolvedTheme(newResolved);
        applyTheme(newResolved);
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, []);

  const setTheme = useCallback((newPreference: Theme) => {
    setPreference(newPreference);
    localStorage.setItem(STORAGE_KEY, newPreference);
    const resolved = resolveTheme(newPreference);
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);

  const toggleTheme = useCallback(() => {
    const cycle: Record<Theme, Theme> = {
      system: "dark",
      dark: "light",
      light: "system",
    };
    setTheme(cycle[preference]);
  }, [preference, setTheme]);

  return { theme: preference, resolvedTheme, setTheme, toggleTheme, mounted };
}
