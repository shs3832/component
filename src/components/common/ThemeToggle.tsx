import { useEffect, useState } from "react";
export default function ToggleTheme() {
  const currentState = localStorage.getItem("theme") !== "dark" ? "Light" : "dark";
  const [theme, setTheme] = useState<string>(currentState);
  const handleTheme = () => {
    const state = localStorage.getItem("theme") === "dark" ? "Light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", state);
    setTheme(state.toUpperCase());
  };
  useEffect(() => {
    document.documentElement.classList.add(currentState);
  }, []);
  return (
    <button
      onClick={handleTheme}
      className="cursor-pointer rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    >
      {theme.toUpperCase()}
    </button>
  );
}
