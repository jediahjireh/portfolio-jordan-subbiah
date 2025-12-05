import type { Metadata } from "next";

import "@/app/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Jordan Subbiah | Civil Engineering Student",
  description:
    "BSc (Hons) Civil Engineering student at UKZN focused on sustainable infrastructure solutions. Passionate about building a stronger South Africa.",
};

// Change this to switch color themes: "purple" | "blue" | "red" | "green" | "orange" | "teal" | "pink" | "monochrome"
const THEME = "blue";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={THEME}>
      <body className="min-h-screen bg-[var(--background)] text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
