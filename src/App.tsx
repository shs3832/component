import Button from "./components/common/Button";
import Badge from "./components/common/Badge";
import Card from "./components/common/Card";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPanel from "./components/dashboard/DashboardPanel";
import InquiryTable from "./components/table/InquiryTable";

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
        <section className="space-y-3">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">최근 문의</h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">고객 문의 상태와 등록일을 확인합니다.</p>
          </div>
          <InquiryTable />
        </section>
      </div>
    </AdminLayout>
  );
}

export default App;
