import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ImSUNNY",
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
      <body>
        <Providers>
          <Navbar />
          <div className="pt-32 mx-[60px]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
