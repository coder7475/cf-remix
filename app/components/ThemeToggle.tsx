import { Sun, Moon } from "lucide-react";
import { useTheme } from "~/hooks/use-theme";
import { cn } from "~/libs/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={cn("w-11 h-11", className)} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center w-11 h-11 text-foreground hover:bg-muted/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
