"use client";

import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, TLocales, localeLabel } from "@/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LocaleSelctorProps = {
  className?: string;
};

export function LocaleSelector({ className }: LocaleSelctorProps) {
  const locale = useLocale();
  const { replace } = useRouter();

  function handleChangeLocale(newLocale: TLocales) {
    replace("/", { locale: newLocale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <Image
          className="w-5 h-5"
          src={`/images/locale/${locale}.svg`}
          alt="Locale"
          width={24}
          height={24}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="absolute z-50 right-0 top-full">
        <DropdownMenuItem
          className={cn(
            "gap-2 cursor-pointer",
            locale === "en" ? "text-sky-500" : ""
          )}
          onClick={() => handleChangeLocale("en")}
        >
          <Image
            className="w-5 h-5 mr-2"
            src="/images/locale/en.svg"
            alt="Locale"
            width={24}
            height={24}
          />
          {localeLabel["en"]}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "gap-2 cursor-pointer",
            locale === "pt" ? "text-sky-500" : ""
          )}
          onClick={() => handleChangeLocale("pt")}
        >
          <Image
            className="w-5 h-5 mr-2"
            src="/images/locale/pt.svg"
            alt="Locale"
            width={24}
            height={24}
          />
          {localeLabel["pt"]}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(
            "gap-2 cursor-pointer",
            locale === "es" ? "text-sky-500" : ""
          )}
          onClick={() => handleChangeLocale("es")}
        >
          <Image
            className="w-5 h-5 mr-2"
            src="/images/locale/es.svg"
            alt="Locale"
            width={24}
            height={24}
          />
          {localeLabel["es"]}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
