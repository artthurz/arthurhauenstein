"use server";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "./container";
import Highlights from "./highlights";
import ArthurPhoto2 from "../../../../public/images/me2.jpeg";
import GlassCard from "@/components/ui/glass-card";

export async function WelcomeSection() {
  const t = useTranslations("root.welcome");

  return (
    <Container>
      <Highlights />
      <GlassCard className="animate-slidein [--slidein-delay:900ms] opacity-0 mt-24 md:mt-36">
        <Image
          className="w-36 h-36 md:w-48 md:h-[240px] object-cover md:object-contain rounded-full md:rounded-3xl mx-auto"
          src={ArthurPhoto2}
          alt="Eu"
          width={192}
          height={240}
          loading="lazy"
          placeholder="blur"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{t("quote.message")}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-accent">Arthur Hauenstein</div>
            <div className="text-slate-700 dark:text-slate-500">
              {t("quote.softwareEngineer")}
            </div>
          </figcaption>
        </div>
      </GlassCard>
    </Container>
  );
}
