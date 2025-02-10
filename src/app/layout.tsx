import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ImSunny",
  description: "Introduce myself",
  icons: {
    icon: "/imsunny/images/waves.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-w-[400px]">
        <Providers>
          <Navbar />
          <div className="pt-32 mx-6 sm:mx-16">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
