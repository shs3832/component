import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import Card from "../components/common/Card";
import DashboardPanel from "../components/dashboard/DashboardPanel";
import InquiryTable from "../components/table/InquiryTable";
import InquiryMobileList from "../components/table/InquiryMobileList";
import { inquiries } from "../data/inquiries";
import InquiryFilters from "../components/table/InquiryFilters";
import { useState } from "react";

export default function DashboardPage() {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const isLoading = false;
  const isError = false;
  const onReset = () => {
    setSearchText("");
    setStatusFilter("all");
    setCategoryFilter("all");
  };
  const normalizedSearchText = searchText.trim().toLowerCase();
  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.title.toLowerCase().includes(normalizedSearchText) ||
      inquiry.customer.toLowerCase().includes(normalizedSearchText);

    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || inquiry.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const renderInquiryContent = () => {
    if (isLoading)
      return (
        <Card>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">데이터를 불러오는 중입니다.</p>
        </Card>
      );
    if (isError)
      return (
        <Card>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">데이터를 불러오지 못했습니다.</p>
        </Card>
      );
    return (
      <>
        <div className="hidden md:block">
          <InquiryTable inquiries={filteredInquiries} />
        </div>
        <div className="md:hidden">
          <InquiryMobileList inquiries={filteredInquiries} />
        </div>
      </>
    );
  };

  return (
    <div className="mx-auto max-w-5xl space-y-5 pb-20 md:pb-0">
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
        <InquiryFilters
          searchText={searchText}
          statusFilter={statusFilter}
          categoryFilter={categoryFilter}
          setSearchText={setSearchText}
          setStatusFilter={setStatusFilter}
          setCategoryFilter={setCategoryFilter}
          onReset={onReset}
        />

        {renderInquiryContent()}

        <div
          className="fixed bottom-0 left-0 right-0 border-t border-zinc-200 bg-white p-4 
          dark:border-zinc-800 dark:bg-zinc-900 md:hidden"
        >
          <Button variant="primary" size="md" className="w-full">
            새 문의 등록
          </Button>
        </div>
      </section>
    </div>
  );
}
