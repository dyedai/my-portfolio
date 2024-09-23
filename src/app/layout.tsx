import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import Header from "../app/Header";
import MatrixCode from "./MatrixCode";
import { UnicodeProvider } from "./UnicodeContext";

import "./globals.css";

const dot = DotGothic16({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dot",
});

export const metadata: Metadata = {
  title: "DAI.DAI.folio",
  description: "Portfolio | daidaiのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dot.variable} antialiased bg-black text-white font-dot`}>
        <UnicodeProvider>
          <MatrixCode />
          <Header />
          <main className="relative z-10 flex justify-center items-center min-h-screen font-dot">{children}</main>
        </UnicodeProvider>
      </body>
    </html>
  );
}
