import Button from "./components/common/Button";
import Badge from "./components/common/Badge";
import Card from "./components/common/Card";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPanel from "./components/dashboard/DashboardPanel";

function App() {
  return (
    <AdminLayout>
      <div className="mx-auto max-w-5xl space-y-5">
        <Card>
          <p className="text-sm font-medium text-brand-500 dark:text-brand-500">React + Vite + Tailwind CSS v4</p>
          <h1 className="mt-3 text-2xl font-bold">Admin UI Study Setup</h1>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Tailwind v4 Vite plugin, CSS-first configuration, @theme tokens, and dark variant are ready.
          </p>
        </Card>
        <Card>
          <article>
            <h3 className="text-xl">Button UI</h3>
            <div className="flex items-center gap-4 mt-4">
              <Button variant="primary">주요버튼</Button>
              <Button variant="secondary">기본버튼</Button>
              <Button variant="danger">경고버튼</Button>
            </div>
          </article>
        </Card>
        <Card>
          <article>
            <h3 className="text-xl">Badge UI</h3>
            <div className="flex items-center gap-4 mt-4">
              <Badge status="waiting" />
              <Badge status="progress" />
              <Badge status="done" />
              <Badge status="delay" />
            </div>
          </article>
        </Card>
        <DashboardPanel />
      </div>
    </AdminLayout>
  );
}

export default App;
