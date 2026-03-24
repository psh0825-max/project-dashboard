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

const CR = (svc: string) =>
  `https://${svc}-1047636559780.asia-northeast3.run.app`;

export const apps: AppData[] = [
  // === 메인 앱 ===
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
    url: CR("songbit"),
    lastDeploy: "2026-03-19",
    techStack: ["Next.js", "Suno"],
  },
  {
    name: "Vibe Studio",
    icon: "🎨",
    status: "live",
    hosting: "Cloud Run",
    url: CR("vibe-studio"),
    lastDeploy: "2026-03-21",
    techStack: ["Next.js", "WebContainers"],
  },
  {
    name: "수학친구",
    icon: "🧮",
    status: "live",
    hosting: "Cloud Run",
    url: CR("math-tutor"),
    lastDeploy: "2026-03-18",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "말씀찾기",
    icon: "📖",
    status: "live",
    hosting: "Cloud Run",
    url: CR("bible-search"),
    lastDeploy: "2026-03-17",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "성경탐험",
    icon: "⛪",
    status: "live",
    hosting: "Cloud Run",
    url: CR("bible-explorer"),
    lastDeploy: "2026-03-21",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "AI 강의노트",
    icon: "📝",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-lecture-note"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "Flutter", "Gemini"],
  },
  {
    name: "노딱",
    icon: "🤖",
    status: "live",
    hosting: "Cloud Run",
    url: CR("noddak"),
    lastDeploy: "2026-03-20",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "영수증AI",
    icon: "🧾",
    status: "live",
    hosting: "Cloud Run",
    url: CR("receipt-ai"),
    lastDeploy: "2026-03-16",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 계약분석",
    icon: "📋",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-contract-analyzer"),
    lastDeploy: "2026-03-19",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 면접코치",
    icon: "🎤",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-interview-coach"),
    lastDeploy: "2026-03-18",
    techStack: ["Next.js", "GPT", "TTS"],
  },
  {
    name: "프롬프트 스튜디오",
    icon: "✨",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-prompt-studio"),
    lastDeploy: "2026-03-20",
    techStack: ["Next.js", "Gemini"],
  },
  {
    name: "바이브 코딩 놀이터",
    icon: "🎮",
    status: "live",
    hosting: "Cloud Run",
    url: CR("kids-vibe-coding"),
    lastDeploy: "2026-03-22",
    techStack: ["Next.js", "Gemini"],
  },
  // === AI 앱 컬렉션 (14개) ===
  {
    name: "AI 글쓰기 분석",
    icon: "✍️",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-writing-analyzer"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 스마트 번역",
    icon: "🌐",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-smart-translator"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 이메일 작성",
    icon: "📧",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-email-writer"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 문서 요약",
    icon: "📄",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-doc-summarizer"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 회의록",
    icon: "🗓️",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-meeting-memo"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 식단 플래너",
    icon: "🥗",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-meal-planner"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 코드 리뷰",
    icon: "🔍",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-code-reviewer"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 명함 리더",
    icon: "💳",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-card-reader"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 제품 분석",
    icon: "📊",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-product-analyzer"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 슬라이드 메이커",
    icon: "🖼️",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-slide-maker"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 컬러 팔레트",
    icon: "🎨",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-color-palette"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 데이터 차트",
    icon: "📈",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-data-chart"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 감정 대시보드",
    icon: "😊",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-sentiment-dashboard"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
  },
  {
    name: "AI 이미지 비교",
    icon: "🔄",
    status: "live",
    hosting: "Cloud Run",
    url: CR("ai-image-diff"),
    lastDeploy: "2026-03-24",
    techStack: ["Next.js", "GPT"],
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
