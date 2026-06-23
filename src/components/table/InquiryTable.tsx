import type { Inquiry } from "../../types/inquiry";
import Badge from "../common/Badge";
interface InquiryTableProps {
  inquiries: Inquiry[];
}
export default function InquiryTable({ inquiries }: InquiryTableProps) {
  const tableHeader = `px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400`;
  const tableDivision = `whitespace-nowrap px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300`;
  // 자식요소 스타일링법 외부에서 받은 html, component 활용시에 작성하면 좋을듯
  // const tableHeader = `[&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:text-zinc-500 [&_th]:dark:text-zinc-400`;
  // const tableDivision = `[&_td]:whitespace-nowrap [&_td]:px-4 [&_td]:py-3 [&_td]:text-sm [&_td]:text-zinc-700 [&_td]:dark:text-zinc-300`;

  return (
    <div
      className="overflow-hidden rounded-lg bg-white border border-zinc-200 shadow-sm
        dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="overflow-x-auto">
        <table
          className="min-w-full divide-y divide-zinc-200 
            dark:divide-zinc-800"
        >
          <thead>
            <tr>
              <th className={tableHeader}>번호</th>
              <th className={tableHeader}>고객명</th>
              <th className={tableHeader}>문의 제목</th>
              <th className={tableHeader}>카테고리</th>
              <th className={tableHeader}>상태</th>
              <th className={tableHeader}>등록일</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              inquiries.map((inquiry) => {
                return (
                  <tr key={inquiry.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                    <td className={tableDivision}>{inquiry.id}</td>
                    <td className={tableDivision}>{inquiry.customer}</td>
                    <td className={tableDivision}>
                      <p className="truncate max-w-xs">{inquiry.title}</p>
                    </td>
                    <td className={tableDivision}>{inquiry.category}</td>
                    <td className={tableDivision}>
                      <Badge status={inquiry.status} />
                    </td>
                    <td className={tableDivision}>{inquiry.createdAt}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
