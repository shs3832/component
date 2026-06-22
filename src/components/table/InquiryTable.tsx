import Badge from "../common/Badge";
import { inquiries } from "../../data/inquiries";
export default function InquiryTable() {
  const tableHeader = `px-4 py-3 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400`;
  const tableDivision = `whitespace-nowrap px-4 py-3 text-sm text-zinc-700 dark:text-zinc-300`;
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
            {inquiries.map((inquiry) => {
              return (
                <tr key={inquiry.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                  <td className={tableDivision}>{inquiry.id}</td>
                  <td className={tableDivision}>{inquiry.customer}</td>
                  <td className={tableDivision}>{inquiry.title}</td>
                  <td className={tableDivision}>{inquiry.category}</td>
                  <td className={tableDivision}>
                    <Badge status={inquiry.status} />
                  </td>
                  <td className={tableDivision}>{inquiry.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
