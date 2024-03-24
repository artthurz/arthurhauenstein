"use client";

import { cn } from "@/lib/utils";
import { TLocales, localeLabel, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

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
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className={cn("btn btn-ghost", className)}
      >
        <Image
          className="w-5 h-5"
          src={`/images/locale/${locale}.svg`}
          alt="Locale"
          width={24}
          height={24}
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
      >
        <li
          className={cn(
            "gap-2 cursor-pointer",
            locale === "en" ? "text-accent" : ""
          )}
          onClick={() => handleChangeLocale("en")}
        >
          <a>
            <Image
              className="w-5 h-5 mr-2"
              src="/images/locale/en.svg"
              alt="Locale"
              width={24}
              height={24}
            />
            {localeLabel["en"]}
          </a>
        </li>
        <li
          className={cn(
            "gap-2 cursor-pointer",
            locale === "pt" ? "text-accent" : ""
          )}
          onClick={() => handleChangeLocale("pt")}
        >
          <a>
            <Image
              className="w-5 h-5 mr-2"
              src="/images/locale/pt.svg"
              alt="Locale"
              width={24}
              height={24}
            />
            {localeLabel["pt"]}
          </a>
        </li>
        <li
          className={cn(
            "gap-2 cursor-pointer",
            locale === "es" ? "text-accent" : ""
          )}
          onClick={() => handleChangeLocale("es")}
        >
          <a>
            <Image
              className="w-5 h-5 mr-2"
              src="/images/locale/es.svg"
              alt="Locale"
              width={24}
              height={24}
            />
            {localeLabel["es"]}
          </a>
        </li>
      </ul>
    </div>
  );
}
