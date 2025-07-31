"use client";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const handleToggle = () => {
    const html = document.documentElement;
    const newDarkMode = !isDark;

    if (newDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    setIsDark(newDarkMode);
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 border rounded bg-background text-foreground font-medium 
                 active:scale-95 transition-all duration-100 ease-in cursor-pointer"
      style={{
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};
