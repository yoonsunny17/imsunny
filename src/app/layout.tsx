import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-32 mx-[60px]">{children}</div>
      </body>
    </html>
  );
}
