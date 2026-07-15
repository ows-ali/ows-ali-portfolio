import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Owais Ali | AI Developer & Full Stack Engineer",
  description:
    "AI developer and full stack engineer. MSc AI student, open for freelancing, consulting, tech guidance, and tutoring.",
  openGraph: {
    title: "Owais Ali | AI Developer & Full Stack Engineer",
    description:
      "Building intelligent systems and modern web applications. Available for collaborations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
