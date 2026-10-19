import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (newPreference: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
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

export function ThemeProvider({ children }: { children: ReactNode }) {
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
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const systemHandler = (e: MediaQueryListEvent) => {
      if (preference === "system") {
        const newResolved = e.matches ? "light" : "dark";
        setResolvedTheme(newResolved);
        applyTheme(newResolved);
      }
    };
    mq.addEventListener("change", systemHandler);

    const storageHandler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        const newPref = (e.newValue as Theme) || "system";
        if (newPref === "light" || newPref === "dark" || newPref === "system") {
          setPreference(newPref);
          const newResolved = resolveTheme(newPref);
          setResolvedTheme(newResolved);
          applyTheme(newResolved);
        }
      }
    };
    window.addEventListener("storage", storageHandler);

    return () => {
      mq.removeEventListener("change", systemHandler);
      window.removeEventListener("storage", storageHandler);
    };
  }, [mounted, preference]);

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

  return (
    <ThemeContext.Provider value={{ theme: preference, resolvedTheme, setTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
