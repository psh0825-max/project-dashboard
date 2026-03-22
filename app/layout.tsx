import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LightOn+ Lab 대시보드",
  description: "LightOn Plus Lab 프로젝트 관리 대시보드",
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
