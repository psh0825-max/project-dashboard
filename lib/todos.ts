export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
  priority: "high" | "medium" | "low";
  category: string;
}

export const todos: TodoItem[] = [
  {
    id: 1,
    text: "토스페이먼츠 심사 대기",
    done: false,
    priority: "high",
    category: "결제",
  },
  {
    id: 2,
    text: "Play Store 등록 (AI 강의노트)",
    done: false,
    priority: "high",
    category: "배포",
  },
  {
    id: 3,
    text: "CI/CD 파이프라인 세팅",
    done: false,
    priority: "medium",
    category: "인프라",
  },
  {
    id: 4,
    text: "커스텀 도메인 연결 (전체 앱)",
    done: false,
    priority: "medium",
    category: "인프라",
  },
  {
    id: 5,
    text: "Songbit 결제 모듈 연동 (songbit-app 프로젝트)",
    done: false,
    priority: "high",
    category: "개발",
  },
  {
    id: 6,
    text: "GCP 크레딧 만료 전 마이그레이션 계획",
    done: false,
    priority: "high",
    category: "인프라",
  },
  {
    id: 7,
    text: "momoi 사용자 피드백 반영",
    done: true,
    priority: "medium",
    category: "개발",
  },
  {
    id: 8,
    text: "Cloud Run 비용 최적화 (min-instances 조정)",
    done: false,
    priority: "medium",
    category: "인프라",
  },
  {
    id: 9,
    text: "앱 통합 Analytics 대시보드",
    done: false,
    priority: "low",
    category: "분석",
  },
  {
    id: 10,
    text: "Vibe Studio 베타 테스트 피드백 수집",
    done: true,
    priority: "medium",
    category: "개발",
  },
];

export const timeline = [
  {
    date: "2026-03-25",
    title: "SongBit GCP 프로젝트 분리 (songbit-app)",
    desc: "support@lightonpluslab.com 계정으로 독립 프로젝트 이전, 기존 ai-music-studio 삭제",
    type: "infra" as const,
  },
  {
    date: "2026-03-24",
    title: "통신판매업신고 정보 전체 앱 반영 (39개 파일)",
    desc: "제 2026-안양동안-0514 호 — 홈페이지, momoi, AI앱 14종, Flutter 앱 등",
    type: "update" as const,
  },
  {
    date: "2026-03-24",
    title: "AI 강의노트 Cloud Run 배포 + Flutter APK",
    desc: "긴 텍스트 Map-Reduce 청크 분할, 백그라운드 녹음, PWA 아이콘",
    type: "deploy" as const,
  },
  {
    date: "2026-03-24",
    title: "momoi Whisper 환각 방지 4종 패치",
    desc: "무음 제거, 한국어 prompt 힌트, 환각 필터, language:ko",
    type: "update" as const,
  },
  {
    date: "2026-03-24",
    title: "성경탐험 Flutter APK 빌드",
    desc: "Next.js 웹앱 → Flutter 네이티브 포팅 (성경읽기, AI채팅, 퀴즈, 뱃지)",
    type: "deploy" as const,
  },
  {
    date: "2026-03-24",
    title: "AI 앱 컬렉션 14종 일괄 배포",
    desc: "글쓰기분석, 번역, 이메일, 문서요약, 회의록 등",
    type: "deploy" as const,
  },
  {
    date: "2026-03-22",
    title: "바이브 코딩 놀이터 v1.2 배포",
    desc: "새로운 튜토리얼 모드 추가",
    type: "deploy" as const,
  },
  {
    date: "2026-03-21",
    title: "Vibe Studio & 성경탐험 업데이트",
    desc: "UI 개선 및 버그 수정",
    type: "deploy" as const,
  },
  {
    date: "2026-03-20",
    title: "momoi, 노딱, 프롬프트 스튜디오 배포",
    desc: "성능 최적화 + 새 기능",
    type: "deploy" as const,
  },
  {
    date: "2026-03-19",
    title: "Songbit & AI 계약분석 업데이트",
    desc: "Suno API v2 연동, 계약서 OCR 개선",
    type: "update" as const,
  },
  {
    date: "2026-03-18",
    title: "수학친구 & AI 면접코치 패치",
    desc: "Gemini 모델 업그레이드, TTS 품질 개선",
    type: "update" as const,
  },
  {
    date: "2026-03-17",
    title: "말씀찾기 v2.0 릴리즈",
    desc: "전체 UI 리디자인 + 검색 성능 3배 향상",
    type: "deploy" as const,
  },
  {
    date: "2026-03-15",
    title: "AI 강의노트 Flutter APK 빌드",
    desc: "오프라인 모드 지원 추가",
    type: "deploy" as const,
  },
  {
    date: "2026-03-14",
    title: "GCP 프로젝트 정리",
    desc: "미사용 서비스 정리, IAM 권한 재설정",
    type: "infra" as const,
  },
];
