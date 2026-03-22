"use client";

import { timeline } from "@/lib/todos";

function TypeIcon({ type }: { type: string }) {
  switch (type) {
    case "deploy":
      return <span>🚀</span>;
    case "update":
      return <span>🔄</span>;
    case "infra":
      return <span>🏗️</span>;
    default:
      return <span>📌</span>;
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${month}/${day}`;
}

export default function Timeline() {
  return (
    <div className="glass-card p-5">
      <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
        <span>📅</span> 최근 활동
      </h2>

      <div className="relative pl-6">
        {timeline.map((item, i) => (
          <div
            key={i}
            className="timeline-item relative pb-5 last:pb-0"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <TypeIcon type={item.type} />
                  <span className="text-sm font-medium text-zinc-200">
                    {item.title}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-1">{item.desc}</p>
                <span className="text-xs text-zinc-600">
                  {formatDate(item.date)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
