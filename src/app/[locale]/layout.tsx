import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur Hauesntein",
  description:
    "I`m a Software Enginner and this is my personal page, where I will update my portfolio and bring news about myself.",
  keywords:
    "Arthur Hauenstein, Arthur, Hauenstein, Desenvolvedor, Engenheiro de Software, Software Engineer, Developer, Software, React, .NET, Node, React Native, HTML, CSS, JavaScript, Typescript",
  alternates: {
    canonical: "https://arthurhauenstein.com",
    languages: {
      en: "https://arthurhauenstein.com",
      es: "https://arthurhauenstein.com/es",
      pt: "https://arthurhauenstein.com/pt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
