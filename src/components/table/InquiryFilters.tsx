import Button from "../common/Button";
interface InquiryFiltersProps {
  searchText: string;
  statusFilter: string;
  categoryFilter: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string>>;
  onReset: () => void;
}
export default function InquiryFilters({
  searchText,
  statusFilter,
  categoryFilter,
  setSearchText,
  setStatusFilter,
  setCategoryFilter,
  onReset,
}: InquiryFiltersProps) {
  const controlClass = `h-10 rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-900 
  placeholder:text-zinc-400
  focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20
  dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100
  `;
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <input
        type="search"
        placeholder="고객명 또는 문의 제목 검색"
        className={`${controlClass} md:flex-1`}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      <select
        className={`${controlClass} md:w-40`}
        onChange={(e) => {
          setStatusFilter(e.target.value);
        }}
        value={statusFilter}
      >
        <option value="all">전체 상태</option>
        <option value="waiting">대기</option>
        <option value="progress">처리중</option>
        <option value="done">완료</option>
        <option value="delay">지연</option>
      </select>
      <select
        className={`${controlClass} md:w-40`}
        onChange={(e) => {
          setCategoryFilter(e.target.value);
        }}
        value={categoryFilter}
      >
        <option value="all">전체 카테고리</option>
        <option value="결제">결제</option>
        <option value="계정">계정</option>
        <option value="배송">배송</option>
        <option value="환불">환불</option>
        <option value="상품">상품</option>
        <option value="알림">알림</option>
      </select>
      <Button variant="secondary" size="md" onClick={onReset}>
        초기화
      </Button>
    </div>
  );
}
