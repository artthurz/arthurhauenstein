import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const localeLabel = {
  en: "English",
  pt: "Português",
  es: "Español",
};
export const locales = ["en", "pt", "es"] as const;
export type TLocales = "en" | "pt" | "es";

export const { Link, useRouter } = createSharedPathnamesNavigation({ locales });
