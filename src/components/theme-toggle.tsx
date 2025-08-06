"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunMediumIcon } from "./ui/sun";
import { MoonIcon } from "./ui/moon";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative flex h-8 w-8 items-center justify-center rounded-md border border-secondary-foreground/20 bg-surface/50 transition-all duration-200 hover:bg-surface/70 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background min-h-[44px] min-w-[44px]"
        aria-label="Toggle theme"
      >
        <div className="h-4 w-4 animate-pulse bg-secondary-foreground/20 rounded" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex h-8 w-8 items-center justify-center rounded-md border border-secondary-foreground/20 bg-surface/50 transition-all duration-200 hover:bg-surface/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:ring-offset-2 focus:ring-offset-background min-h-[44px] min-w-[44px]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <div className="relative h-4 w-4">
        <SunMediumIcon
          size={16}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <MoonIcon
          size={16}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark"
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};