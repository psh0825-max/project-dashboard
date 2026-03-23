import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LightOn+ Lab 대시보드",
  description: "LightOn Plus Lab 프로젝트 관리 대시보드",
  manifest: "/project-dashboard/manifest.json",
  icons: {
    icon: [
      { url: "/project-dashboard/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/project-dashboard/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/project-dashboard/apple-touch-icon.png",
  },
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
