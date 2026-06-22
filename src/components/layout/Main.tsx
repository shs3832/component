export default function LayoutMain({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-zinc-100 p-4 lg:p-6 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {children}
    </main>
  );
}
