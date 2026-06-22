import LayoutHeader from "./Header";
import LayoutSideBar from "./Sidebar";
import LayoutMain from "./Main";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const containerCss = `lg:pl-64`;
  return (
    <div>
      <LayoutSideBar />
      <div className={containerCss}>
        <LayoutHeader />
        <LayoutMain>{children}</LayoutMain>
      </div>
    </div>
  );
}
