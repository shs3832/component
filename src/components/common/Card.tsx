interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  const baseClass = `rounded-lg border border-zinc-200 bg-white p-6 shadow-sm
                    dark:border-zinc-800 dark:bg-zinc-900`;
  return <div className={`${baseClass} ${className ?? ""}`}>{children}</div>;
}
