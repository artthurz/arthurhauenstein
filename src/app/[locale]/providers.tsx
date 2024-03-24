"use client";

import { ThemeProvider } from "@/components/theme-provider";
import React from "react";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider enableSystem defaultTheme="system" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
