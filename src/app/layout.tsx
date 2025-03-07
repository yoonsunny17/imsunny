import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ImSunny | Resume",
  description: "yoonsunny17의의 개인 홈페이지입니다.",
  keywords: [
    "yoonsunny17",
    "이력서",
    "포트폴리오",
    "웹 개발",
    "개발자",
    "프론트엔드",
  ],
  authors: [
    { name: "yoonsunny17", url: "https://yoonsunny17.github.io/imsunny/" },
  ],
  robots: "index, follow",
  icons: {
    icon: "/imsunny/images/waves.png",
  },
  openGraph: {
    title: "ImSunny | Resume",
    description: "Yoonsunny17의 개인 홈페이지입니다.",
    url: "https://yoonsunny17.github.io/imsunny/",
    siteName: "ImSunny",
    images: [
      {
        url: "/imsunny/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ImSunny Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="Frontend Developer" />
      </head>
      <body className="min-w-[400px]">
        <Providers>
          <Navbar />
          <div className="pt-32 mx-6 sm:mx-16">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
