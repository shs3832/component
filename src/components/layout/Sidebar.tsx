const sideBarMenus = ["Dashboard", "Inquiries", "Customers", "Settings"];

export default function LayoutSideBar() {
  const sideBase = `
    fixed inset-y-0 left-0 z-10 hidden w-64
    border-r border-zinc-200 bg-white p-4
    dark:border-zinc-800 dark:bg-zinc-900
    lg:block
  `;

  return (
    <aside className={`${sideBase}`}>
      <h2 className="font-bold mb-2 text-xl text-zinc-700 dark:text-zinc-300">MENU</h2>
      <ul className="space-y-1">
        {sideBarMenus.map((item: string) => {
          return (
            <li key={item}>
              <button
                type="button"
                className="cursor-pointer w-full text-left rounded-lg px-3 py-2 text-sm 
                text-zinc-700 hover:text-zinc-900
                dark:text-zinc-300 dark:hover:text-zinc-100
                hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
