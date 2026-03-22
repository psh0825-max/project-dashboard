"use client";

import { apps } from "@/lib/apps-data";

export default function InfraStatus() {
  const cloudRunApps = apps.filter((a) => a.hosting === "Cloud Run");
  const vercelApps = apps.filter((a) => a.hosting === "Vercel");
  const flutterApps = apps.filter((a) => a.hosting === "Flutter APK");

  // GCP 크레딧: ₩397,951 / ₩400,000 (예시), 만료 2026-05-04
  const creditUsed = 400000 - 397951;
  const creditTotal = 400000;
  const creditPercent = ((397951 / creditTotal) * 100).toFixed(1);

  // D-day 계산
  const expiry = new Date("2026-05-04");
  const now = new Date("2026-03-22");
  const dDay = Math.ceil(
    (expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="glass-card p-5">
      <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
        <span>🏗️</span> 인프라 현황
      </h2>

      {/* GCP 크레딧 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-zinc-300">GCP 크레딧</span>
          <span className="text-sm">
            <span className="text-emerald-400 font-semibold">₩397,951</span>
            <span className="text-zinc-500"> / ₩400,000</span>
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${creditPercent}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-zinc-500">
          <span>사용: ₩{creditUsed.toLocaleString()}</span>
          <span className="text-amber-400">
            만료: 2026.05.04 (D-{dDay})
          </span>
        </div>
      </div>

      {/* Cloud Run 서비스 */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-violet-500 inline-block" />
          Cloud Run 서비스 ({cloudRunApps.length}개)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {cloudRunApps.map((app) => (
            <div
              key={app.name}
              className="flex items-center gap-2 text-xs bg-white/[0.02] rounded-lg px-3 py-2 border border-white/[0.04]"
            >
              <span>{app.icon}</span>
              <span className="text-zinc-300 truncate">{app.name}</span>
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Vercel */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          Vercel 프로젝트 ({vercelApps.length}개)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {vercelApps.map((app) => (
            <div
              key={app.name}
              className="flex items-center gap-2 text-xs bg-white/[0.02] rounded-lg px-3 py-2 border border-white/[0.04]"
            >
              <span>{app.icon}</span>
              <span className="text-zinc-300">{app.name}</span>
              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Flutter */}
      {flutterApps.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            Flutter APK ({flutterApps.length}개)
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {flutterApps.map((app) => (
              <div
                key={app.name}
                className="flex items-center gap-2 text-xs bg-white/[0.02] rounded-lg px-3 py-2 border border-white/[0.04]"
              >
                <span>{app.icon}</span>
                <span className="text-zinc-300">{app.name}</span>
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
