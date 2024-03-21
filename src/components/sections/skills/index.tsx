import { useTranslations } from "next-intl";
import React from "react";
import SkillsCards from "./skill-card";

export function SkillsSection() {
  const t = useTranslations("root.skills");

  return (
    <section id="skills">
      <div className="max-w-7xl mb-10 mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-pink-500 dark:shadow-white/20">
          <div className="h-full w-full aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/images/section/skills-light.png')] dark:bg-[url('/images/section/skills-dark.png')]" />
        </div>
        <h2 className="mt-8 font-semibold text-pink-500 dark:text-pink-400">
          Competências
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          Tecnologias para construir o futuro.
        </p>
        <div className="mt-4 max-w-3xl space-y-6 ">
          <p>
            Como sou um entusiasta por técnologia estou sempre atento aos
            movimentos do mercado, com isso estudo e valido técnologias
            emergentes que podem agregar ao trabalho.
          </p>
          <p>
            Busco trabalhar orientado a necessidade, escolhendo a melhor
            técnologia para atender cada projeto em que trabalho.
          </p>
        </div>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-[url('/images/beams-background/beams-pink-light.jpg')] dark:bg-[url('/images/beams-background/beams-pink-dark.png')] [background-size:125.5rem] [height:30rem] xl:top-8" />
        <div className="absolute inset-x-0 h-[37.5rem] bg-[url('/images/bg-grid-slate-900.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[url('/images/bg-grid-slate-400.svg')] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
        <div className="max-w-7xl mt-12 mx-auto px-4 sm:px-6 md:px-8">
          <SkillsCards />
        </div>
      </div>
    </section>
  );
}
