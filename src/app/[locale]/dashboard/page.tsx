import { DashboardOverview } from "@/features/dashboard/components/DashboardOverview";

export default function DashboardPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-8">
      <DashboardOverview />
    </main>
  );
}
