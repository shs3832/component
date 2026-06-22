import Card from "../common/Card";

interface StatCardProps {
  title: string;
  value: number;
  change: string;
}
export default function StatCard({ title, value, change }: StatCardProps) {
  const isNegative = change.startsWith("-");
  return (
    <Card>
      <article>
        <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</h3>
        <p className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">{value}</p>
        <p className={`mt-2 text-sm font-medium ${isNegative ? "text-danger-500" : "text-success-500"}`}>{change}</p>
      </article>
    </Card>
  );
}
