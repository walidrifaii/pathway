import { dashboardContent } from "@/features/dashboard/data";

export function DashboardOverview() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{dashboardContent.title}</h2>
      <p className="text-zinc-600 dark:text-zinc-400">{dashboardContent.subtitle}</p>
    </section>
  );
}
