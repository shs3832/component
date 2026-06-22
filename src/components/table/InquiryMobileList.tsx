import type { Inquiry } from "../../types/inquiry";
import Badge from "../common/Badge";

interface InquiryMobileListProps {
  inquiries: Inquiry[];
}

export default function InquiryMobileList({ inquiries }: InquiryMobileListProps) {
  return (
    <div className="space-y-3">
      {inquiries.length === 0 ? (
        <div
          className="rounded-lg border border-zinc-200 bg-white px-4 py-10 text-center text-sm text-zinc-500 
            dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
        >
          검색 결과가 없습니다.
        </div>
      ) : (
        inquiries.map((inquiry) => (
          <article
            key={inquiry.id}
            className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-start justify-between gap-3">
              <strong className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{inquiry.customer}</strong>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">{inquiry.createdAt}</span>
            </div>

            <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">{inquiry.title}</p>

            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{inquiry.category}</span>
              <Badge status={inquiry.status} />
            </div>
          </article>
        ))
      )}
    </div>
  );
}
