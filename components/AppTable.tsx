"use client";

import { apps, getStatusLabel, type AppData } from "@/lib/apps-data";

function StatusBadge({ status }: { status: AppData["status"] }) {
  const cls =
    status === "live"
      ? "badge-live"
      : status === "dev"
        ? "badge-dev"
        : "badge-stopped";
  const dot = status === "live" ? "🟢" : status === "dev" ? "🟡" : "🔴";
  return (
    <span className={`badge ${cls}`}>
      {dot} {getStatusLabel(status)}
    </span>
  );
}

function HostingBadge({ hosting }: { hosting: string }) {
  return <span className="badge badge-hosting">{hosting}</span>;
}

function TechTag({ tech }: { tech: string }) {
  return <span className="badge badge-tech">{tech}</span>;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

export default function AppTable() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-5 border-b border-white/5">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <span>📋</span> 앱 목록
          <span className="text-sm text-zinc-500 font-normal">
            ({apps.length}개)
          </span>
        </h2>
      </div>
      <div className="app-table-scroll">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-500 text-xs uppercase tracking-wider">
              <th className="px-5 py-3 font-medium">앱</th>
              <th className="px-5 py-3 font-medium">상태</th>
              <th className="px-5 py-3 font-medium">호스팅</th>
              <th className="px-5 py-3 font-medium hidden md:table-cell">URL</th>
              <th className="px-5 py-3 font-medium hidden lg:table-cell">배포일</th>
              <th className="px-5 py-3 font-medium hidden sm:table-cell">기술 스택</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app) => (
              <tr
                key={app.name}
                className="app-row border-t border-white/[0.03]"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{app.icon}</span>
                    <span className="font-medium text-zinc-200">
                      {app.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <StatusBadge status={app.status} />
                </td>
                <td className="px-5 py-3">
                  <HostingBadge hosting={app.hosting} />
                </td>
                <td className="px-5 py-3 hidden md:table-cell">
                  {app.url ? (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 text-xs truncate max-w-[200px] inline-block transition-colors"
                    >
                      {app.url.replace("https://", "")}
                    </a>
                  ) : (
                    <span className="text-zinc-600 text-xs">APK 전용</span>
                  )}
                </td>
                <td className="px-5 py-3 hidden lg:table-cell">
                  <span className="text-zinc-400 text-xs">
                    {formatDate(app.lastDeploy)}
                  </span>
                </td>
                <td className="px-5 py-3 hidden sm:table-cell">
                  <div className="flex gap-1 flex-wrap">
                    {app.techStack.map((tech) => (
                      <TechTag key={tech} tech={tech} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
