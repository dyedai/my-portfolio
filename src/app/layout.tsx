import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";

import "./globals.css";
import MatrixCode from "./MatrixCode";

const dot = DotGothic16({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dot",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dot.variable} antialiased bg-black text-white`}>
        {/* MatrixCode コンポーネントを背景として配置 */}
        <MatrixCode />
        {/* 各ページのコンテンツを表示 */}
        <main className="relative z-10 flex justify-center items-center min-h-screen font-dot">{children}</main>
      </body>
    </html>
  );
}
