import StatsCards from "@/components/StatsCards";
import AppTable from "@/components/AppTable";
import InfraStatus from "@/components/InfraStatus";
import TodoList from "@/components/TodoList";
import Timeline from "@/components/Timeline";

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-violet-600 flex items-center justify-center text-lg font-bold">
            L+
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold gradient-text">
              LightOn+ Lab 대시보드
            </h1>
            <p className="text-xs text-zinc-500">
              프로젝트 관리 · 인프라 모니터링
            </p>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="mb-6">
        <StatsCards />
      </section>

      {/* App Table */}
      <section className="mb-6">
        <AppTable />
      </section>

      {/* Two Column: Infra + Todo + Timeline */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <InfraStatus />
        <div className="space-y-6">
          <TodoList />
          <Timeline />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/5">
        <p className="text-xs text-zinc-600">
          © 2026 LightOn Plus Lab. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
