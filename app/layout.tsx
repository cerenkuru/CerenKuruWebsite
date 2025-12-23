import type { Metadata } from "next";
import { Geist, Geist_Mono, Patrick_Hand, Tiny5 } from "next/font/google";

import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  weight: "400",
  subsets: ["latin"],
});

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ceren - Portfolio",
  description: "Web geliştirici ve tasarımcı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiny5.variable} ${patrickHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}