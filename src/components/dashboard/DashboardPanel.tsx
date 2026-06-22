import StatCard from "./StatCard";

const stats = [
  { title: "전체 문의", value: 128, change: "+12%" },
  { title: "처리 중", value: 24, change: "+3%" },
  { title: "완료", value: 96, change: "+18%" },
  { title: "지연", value: 8, change: "-2%" },
];
export default function DashboardPanel() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        return <StatCard key={item.title} title={item.title} value={item.value} change={item.change} />;
      })}
    </div>
  );
}
