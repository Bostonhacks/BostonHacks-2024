import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/LandingComponents/Welcome";
import Signal from "@/components/LandingComponents/Signal";
import ThemeOfTheYear from "@/components/LandingComponents/ThemeOfTheYear";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BostonHacks 2024",
  description: "BostonHacks 2024 Landing Site",
};

// Don't worry about this file. It's a layout file that applies the same styles to all pages within the current file directory and subdirectories (unless the subdir has its own layout file)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
