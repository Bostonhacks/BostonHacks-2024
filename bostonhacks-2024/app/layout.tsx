import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BostonHacks 2024",
  description: "BostonHacks 2024 Landing Site",
};

// Dont worry about this file. It's a layout file that applies the same styles to all pages within the current file directory and subdirectories (unless the subdir has its own layout file)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
