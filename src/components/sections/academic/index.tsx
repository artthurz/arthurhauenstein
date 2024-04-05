import React from "react";
import { University } from "./university";

export function AcademicSection() {
  return (
    <section id="academic" className="mb-40 sm:mb-0">
      <div className="mb-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-indigo-500 dark:shadow-white/20">
          <div className="h-full w-full aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/images/section/academic-light.png')] dark:bg-[url('/images/section/academic-dark.png')]" />
        </div>
        <h2 className="mt-8 font-semibold text-indigo-500 dark:text-indigo-400">
          Formação acadêmica
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
          Análise e Desenvolvimento de Sistemas.
        </p>
        <p className="mt-4 max-w-3xl space-y-6">
          Iniciei os estudos na universidade em <b>2016</b> e realizei minha
          formatura em <b>2021</b> 🧑🏻‍🎓.
        </p>
        <p className="mt-4 max-w-3xl space-y-6">
          A graduação foi um grande facilitador para abrir meus olhos e
          possibilitar que eu enxergasse todas as oportunidades no mundo da
          técnologia e a as melhores decisões quanto a minha carreira. <br />
          Abaixo apresento a universidade em que me formei.
        </p>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[37.5rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-beams-indigo-light dark:bg-beams-indigo-dark  [background-size:125.5rem] [height:30rem] xl:top-8" />
        <div className="absolute inset-x-0 h-[37.5rem] bg-grid-slate-900 bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-400 dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
        <div className="relative h-96 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <University />
        </div>
      </div>
    </section>
  );
}
