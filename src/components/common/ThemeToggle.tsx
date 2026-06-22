import { useEffect, useState } from "react";
type Theme = "light" | "dark";
const getInitialTheme = (): Theme => {
  const state = localStorage.getItem("theme");
  if (state === "light" || state === "dark") {
    return state;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
export default function ToggleTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    >
      {theme}
    </button>
  );
}
