const sideBarMenus = ["Dashboard", "Inquiries", "Customers", "Settings"];

export default function LayoutSideBar() {
  const sideBase = `
    fixed inset-y-0 left-0 z-10 hidden w-64
    border-r border-zinc-200 bg-white p-4
    dark:border-zinc-800 dark:bg-zinc-900
    lg:block
  `;
  const activeMenu = "Dashboard";
  return (
    <aside className={`${sideBase}`}>
      <h2 className="font-bold mb-2 text-xl text-zinc-700 dark:text-zinc-300">MENU</h2>
      <ul className="space-y-1">
        {sideBarMenus.map((item: string) => {
          return (
            <li key={item}>
              <button
                data-state={item === activeMenu ? "active" : "inactive"}
                aria-current={item === activeMenu ? "page" : undefined}
                type="button"
                className={`cursor-pointer w-full text-left rounded-lg px-3 py-2 text-sm transition-colors duration-150 ease-out
                text-zinc-700 
                data-[state=active]:bg-brand-50 data-[state=active]:text-brand-600 data-[state=inactive]:hover:bg-zinc-100 data-[state=inactive]:hover:text-zinc-900
                dark:text-zinc-300 
                dark:data-[state=active]:bg-brand-500/10 dark:data-[state=active]:text-brand-400 
                dark:data-[state=inactive]:hover:bg-zinc-800 dark:data-[state=inactive]:hover:text-zinc-100`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
