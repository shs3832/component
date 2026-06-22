type InquiryStatus = "waiting" | "progress" | "done" | "delay";

interface BadgeProps {
  status: InquiryStatus;
}

const statusLabel: Record<InquiryStatus, string> = {
  waiting: "대기",
  progress: "처리중",
  done: "완료",
  delay: "지연",
};

export default function Badge({ status }: BadgeProps) {
  const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium";
  const waiting = "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300";
  const progress = "bg-brand-50 text-brand-600 dark:bg-blue-900/30 dark:text-blue-300";
  const done = "bg-green-100 text-success-500 dark:bg-green-900/30 dark:text-green-300";
  const delay = "bg-amber-100 text-warning-500 dark:bg-amber-900/30 dark:text-amber-300";

  const variantClass: Record<InquiryStatus, string> = {
    waiting,
    progress,
    done,
    delay,
  };

  return <span className={`${base} ${variantClass[status]}`}>{statusLabel[status]}</span>;
}
