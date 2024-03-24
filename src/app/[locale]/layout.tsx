import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur Hauenstein",
  description:
    "I`m a Software Enginner and this is my personal page, where I will update my portfolio and bring news about myself.",
  keywords:
    "Arthur Hauenstein, Arthur, Hauenstein, Desenvolvedor, Engenheiro de Software, Software Engineer, Developer, Software, React, .NET, Node, React Native, HTML, CSS, JavaScript, Typescript",
  alternates: {
    canonical: "https://arthurhauenstein.com",
    languages: {
      en: "https://arthurhauenstein.com/en",
      es: "https://arthurhauenstein.com/es",
      pt: "https://arthurhauenstein.com/pt",
    },
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicon-32x32.png",
    },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={cn(inter.className, "bg-slate-50 dark:bg-[#0B1120]")}>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Header />
          {children}
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
