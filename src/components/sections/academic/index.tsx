"use server";

import React from "react";
import { University } from "./university";
import { useTranslations } from "next-intl";

export async function AcademicSection() {
  const t = useTranslations("root.academic");

  return (
    <section id="academic" className="z-10 mb-80 sm:mb-32 md:mb-6 lg:mb-0">
      <div className="mb-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-indigo-500 dark:shadow-white/20">
          <div className="h-full w-full aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/images/section/academic-light.png')] dark:bg-[url('/images/section/academic-dark.png')]" />
        </div>
        <h2 className="mt-8 font-semibold text-indigo-500 dark:text-indigo-400">
          {t("section")}
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
          {t("title")}
        </p>
        <p className="mt-4 max-w-3xl space-y-6">{t("subtitle.1")}</p>
        <p className="mt-4 max-w-3xl space-y-6">
          {t("subtitle.2")} <b>2016</b> {t("subtitle.3")} <b>2021</b> 🧑🏻‍🎓.
        </p>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-beams-indigo-light dark:bg-beams-indigo-dark  [background-size:90rem] [height:30rem] xl:top-8" />
        <div className="absolute inset-x-0 h-[37.5rem] dark:bg-grid-slate-400 dark:opacity-15 bg-top [mask-image:linear-gradient(0deg,transparent,black)] bg-grid-slate-200 dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
        <div className="relative h-96 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <University />
        </div>
      </div>
    </section>
  );
}
