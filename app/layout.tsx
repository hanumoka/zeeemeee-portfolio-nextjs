import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

import Header from "./_components/Header";
import Footer from "./_components/Footer";

// Font Awesome 설정 시작
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// Font Awesome 설정 끝

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hanumoka portfolio",
  description: "집에 가고 싶다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
