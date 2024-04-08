"use server";

import ArthurPhoto4 from "../../../../public/images/me4.jpg";
import BTGLogo from "../../../../public/images/btg.jpg";
import UnivatesLogo from "../../../../public/images/univates.jpg";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import GlassCard from "@/components/ui/glass-card";

export default async function Highlights() {
  const t = useTranslations("root.welcome");

  return (
    <GlassCard className="animate-slidein [--slidein-delay:700ms] opacity-0 mt-24 md:mt-36">
      <div className="flex justify-between items-center p-6 max-md:border-b-2 md:border-r-2 border-base-300 md:w-1/3">
        <div>
          <div className="text-primary text-xl md:text-lg xl:text-xl">
            {t("highlights.softwareEngineer")}
          </div>
          <div className="font-bold text-accent text-3xl">BTG Pactual</div>
          <div className="text-lg md:text-md xl:text-lg">
            {t("highlights.since2021")}
          </div>
        </div>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <Image
              alt="me"
              width={64}
              height={64}
              src={BTGLogo}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 max-md:border-b-2 md:border-r-2 border-base-300 md:w-1/3">
        <div>
          <div className="text-primary text-xl md:text-lg xl:text-xl">
            {t("highlights.graduated")}
          </div>
          <div className="font-bold text-secondary text-3xl">Univates</div>
          <div className="text-lg md:text-md xl:text-lg">
            {t("highlights.at2021")}
          </div>
        </div>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <Image
              alt="me"
              width={64}
              height={64}
              src={UnivatesLogo}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 md:w-1/3">
        <div>
          <div className="font-bold text-primary text-5xl md:text-4xl xl:text-5xl">
            +8
          </div>
          <div className="text-xl md:text-lg xl:text-xl">
            {t("highlights.experience")}
          </div>
          <div className="text-lg md:text-md xl:text-lg text-accent">
            {t("highlights.evolving")}
          </div>
        </div>
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <Image
              alt="me"
              width={64}
              height={64}
              src={ArthurPhoto4}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
