import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import React from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";

export default function Providers({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  const messages = useMessages();
  return (
    <ThemeProvider enableSystem defaultTheme="system" disableTransitionOnChange>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        <Toaster richColors />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
