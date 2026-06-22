import ToggleTheme from "../common/ThemeToggle";

export default function LayoutHeader() {
  const headerBaseClass = `sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur 
  flex h-16 items-center justify-between px-4 lg:px-6
  dark:border-zinc-800 dark:bg-zinc-950/80`;
  const headerParagraph = "text-xs font-medium text-zinc-500 dark:text-zinc-400";
  const headerTitle = "text-base font-semibold text-zinc-900 dark:text-zinc-100";
  return (
    <header className={headerBaseClass}>
      <div>
        <p className={headerParagraph}>Admin</p>
        <h1 className={headerTitle}>DashBoard</h1>
      </div>
      <ToggleTheme />
    </header>
  );
}
