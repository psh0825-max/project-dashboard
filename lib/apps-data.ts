export type AppStatus = "live" | "dev" | "stopped";
export type HostingType = "Cloud Run" | "Vercel" | "GitHub Pages" | "Flutter APK";

export interface AppData {
  name: string;
  icon: string;
  status: AppStatus;
  hosting: HostingType;
  url: string | null;
  lastDeploy: string;
  techStack: string[];
}

export const apps: AppData[] = [
  {
    name: "momoi",
    icon: "🎀",
    status: "live",
    hosting: "Vercel",
    url: "https://momoi.lightonpluslab.com",
    lastDeploy: "2026-03-20",
    techStack: ["Next.js", "Supabase"],
  },
  {
    name: "Songbit",
    icon: "🎵",
    status: "live",
    hosting: "Cloud Run",
    url: "https://songbit.lightonpluslab.com",
    lastDeploy: "2026-03-19",
    techStack: ["Next.js", "Suno"],
  },
  {
    name: "Vibe Studio",
    icon: "🎨",
    status: "live",
    hosting: "Cloud Run",
    url: "https://vibe-studio.lightonpluslab.com",
    lastDeploy: "2026-03-21",
    techStack: ["Next.js", "WebContainers"],
  },
  {
    name: "수학친구",
    icon: "🧮",
    status: "live",
    hosting: "Cloud Run",
    url: "https://math-tutor.lightonpluslab.com",
    lastDeploy: "2026-03-18",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "말씀찾기",
    icon: "📖",
    status: "live",
    hosting: "Cloud Run",
    url: "https://bible-search.lightonpluslab.com",
    lastDeploy: "2026-03-17",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "성경탐험",
    icon: "⛪",
    status: "live",
    hosting: "Cloud Run",
    url: "https://bibleexplorer.lightonpluslab.com",
    lastDeploy: "2026-03-21",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "AI 강의노트",
    icon: "📝",
    status: "live",
    hosting: "Flutter APK",
    url: null,
    lastDeploy: "2026-03-15",
    techStack: ["Flutter"],
  },
  {
    name: "노딱",
    icon: "🤖",
    status: "live",
    hosting: "Cloud Run",
    url: "https://noddak.lightonpluslab.com",
    lastDeploy: "2026-03-20",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "영수증AI",
    icon: "🧾",
    status: "live",
    hosting: "Cloud Run",
    url: "https://receipt.lightonpluslab.com",
    lastDeploy: "2026-03-16",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 계약분석",
    icon: "📋",
    status: "live",
    hosting: "Cloud Run",
    url: "https://ai-contract.lightonpluslab.com",
    lastDeploy: "2026-03-19",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 면접코치",
    icon: "🎤",
    status: "live",
    hosting: "Cloud Run",
    url: "https://ai-interview.lightonpluslab.com",
    lastDeploy: "2026-03-18",
    techStack: ["Next.js", "GPT", "TTS"],
  },
  {
    name: "프롬프트 스튜디오",
    icon: "✨",
    status: "live",
    hosting: "Cloud Run",
    url: "https://ai-prompt.lightonpluslab.com",
    lastDeploy: "2026-03-20",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "바이브 코딩 놀이터",
    icon: "🎮",
    status: "live",
    hosting: "Cloud Run",
    url: "https://kids-vibe.lightonpluslab.com",
    lastDeploy: "2026-03-22",
    techStack: ["Next.js", "Gemini"],
  },
];

export function getStatusLabel(status: AppStatus): string {
  switch (status) {
    case "live": return "Live";
    case "dev": return "개발중";
    case "stopped": return "중지";
  }
}

export function getStatusCounts() {
  const live = apps.filter((a) => a.status === "live").length;
  const dev = apps.filter((a) => a.status === "dev").length;
  const stopped = apps.filter((a) => a.status === "stopped").length;
  return { total: apps.length, live, dev, stopped };
}
