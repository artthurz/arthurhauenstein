"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import AOSInit from "@/lib/aos-init";
import React from "react";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="system"
      disableTransitionOnChange
    >
      <AOSInit />
      <Toaster richColors />
      {children}
    </ThemeProvider>
  );
}
