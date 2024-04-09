"use client";
import { TLocales, localeLabel, locales, useRouter } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

type LocaleSelctorProps = {
  onSelect?: () => void;
};

export function LocaleSelector({ onSelect }: LocaleSelctorProps) {
  const t = useTranslations("root.menu");
  const locale = useLocale();
  const { replace } = useRouter();

  function handleChangeLocale(newLocale: TLocales) {
    replace("/", { locale: newLocale });
  }

  function onLocalChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = event.target.value as TLocales;
    handleChangeLocale(newLocale);
    onSelect && onSelect();
  }

  return (
    <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
      <div className="flex items-center justify-between">
        <label htmlFor="language" className="font-normal">
          {t("changeLanguage")}
        </label>
        <div className="relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:text-slate-200 dark:shadow-white/5">
          {localeLabel[locale as TLocales]}
          <svg className="w-6 h-6 ml-2 text-slate-400" fill="none">
            <path
              d="m15 11-3 3-3-3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <select
            id="language"
            className="absolute appearance-none inset-0 w-full h-full opacity-0 p-2"
            value={locale}
            onChange={onLocalChange}
          >
            {locales.map((locale) => (
              <option key={locale} value={locale}>
                {localeLabel[locale]}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
