import { useTranslator } from "@/i18n";

export default function Home() {
  const t = useTranslator();
  return <main>{t("title")}</main>;
}
