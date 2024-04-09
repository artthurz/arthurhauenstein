"use server";

import { useTranslations } from "next-intl";
import { InfiniteMovingCards } from "./moving-cards";

const skills = [
  {
    title: "TypeScript",
    src: "/images/skills/typescript.svg",
    color: "border-[#2563eb]",
  },
  {
    title: "React",
    src: "/images/skills/react.svg",
    color: "border-[#0ea5e9]",
  },
  {
    title: "Next.js",
    src: "/images/skills/next.svg",
    color: "border-[#1e293b] dark:border-[white]",
  },
  {
    title: "React Native",
    src: "/images/skills/reactnative.svg",
    color: "border-[#7c3aed]",
  },
  { title: "C#", src: "/images/skills/csharp.svg", color: "border-[#561cca]" },
  {
    title: ".NET",
    src: "/images/skills/dotNET.svg",
    color: "border-[#561cca]",
  },
  { title: "Node", src: "/images/skills/node.svg", color: "border-[#065f46]" },
  {
    title: "NestJS",
    src: "/images/skills/nest.svg",
    color: "border-[#be123c]",
  },
  { title: "HTML", src: "/images/skills/html.svg", color: "border-[#fb7185]" },
  { title: "CSS", src: "/images/skills/css.svg", color: "border-[#1e40af]" },
  {
    title: "PostgreSQL",
    src: "/images/skills/postgresql.svg",
    color: "border-[#1e3a8a]",
  },
];

export async function SkillsSection() {
  const t = useTranslations("root.skills");

  return (
    <section id="skills" className="mb-12 md:mb-0">
      <div className="max-w-7xl mb-10 mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-pink-500 dark:shadow-white/20">
          <div className="h-full w-full aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/images/section/skills-light.png')] dark:bg-[url('/images/section/skills-dark.png')]" />
        </div>
        <h2 className="mt-8 font-semibold text-pink-500 dark:text-pink-400">
          {t("section")}
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
          {t("title")}
        </p>
        <div className="mt-4 max-w-3xl space-y-6 ">
          <p>{t("subtitle.1")}</p>
          <p>{t("subtitle.2")}</p>
        </div>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[12rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-beams-pink-light dark:bg-beams-pink-dark  [background-size:80rem] [height:18rem] xl:top-8" />
        <div className="absolute inset-x-0 h-[12rem] bg-grid-slate-200 dark:bg-grid-slate-400 dark:opacity-15 bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />

        <div className="flexjustify-center overflow-hidden">
          <div className="flex flex-col justify-center items-center relative">
            <InfiniteMovingCards
              className="mb-8"
              items={skills}
              direction="right"
              speed="slow"
            />
            <InfiniteMovingCards items={skills} direction="left" speed="slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
