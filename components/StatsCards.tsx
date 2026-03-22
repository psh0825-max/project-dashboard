"use client";

import { getStatusCounts } from "@/lib/apps-data";

interface StatCard {
  icon: string;
  label: string;
  value: string;
  sub: string;
  accent: string;
}

export default function StatsCards() {
  const counts = getStatusCounts();

  const cards: StatCard[] = [
    {
      icon: "📱",
      label: "전체 앱",
      value: `${counts.total}개`,
      sub: `🟢 ${counts.live} 라이브 · 🟡 ${counts.dev} 개발중 · 🔴 ${counts.stopped} 중지`,
      accent: "from-emerald-500/20 to-emerald-500/0",
    },
    {
      icon: "💰",
      label: "GCP 크레딧",
      value: "₩397,951",
      sub: "5/4 만료 · D-43",
      accent: "from-violet-500/20 to-violet-500/0",
    },
    {
      icon: "📊",
      label: "이번 주 배포",
      value: "15회",
      sub: "전주 대비 +3회",
      accent: "from-blue-500/20 to-blue-500/0",
    },
    {
      icon: "⚠️",
      label: "이슈",
      value: "3개",
      sub: "긴급 1 · 보통 2",
      accent: "from-amber-500/20 to-amber-500/0",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`glass-card stat-card p-5 relative overflow-hidden`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${card.accent} pointer-events-none`}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{card.icon}</span>
              <span className="text-sm text-zinc-400">{card.label}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{card.value}</div>
            <div className="text-xs text-zinc-500">{card.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
