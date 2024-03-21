import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Highlight } from "./highlight";

export function WelcomeSection() {
  const t = useTranslations("root.welcome");

  return (
    <section className="relative min-h-[70rem] -mt-[72px]">
      <div className="bg-contain min-h-[70rem] absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] bg-[url('/images/beams-background/beams-light.png')] dark:bg-[url('/images/beams-background/beams-dark.jpg')]">
        <div className=" min-h-[70rem] absolute inset-0 bg-[url('/images/bg-grid-slate-900.svg')] bg-[bottom_1px_center] dark:bg-[url('/images/bg-grid-slate-400.svg')] dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(transparent,black)] [webkit-mask-image:linear-gradient(transparent,black)]" />
      </div>
      <div className="relative max-w-6xl mx-auto pt-32 sm:pt-36 lg:pt-48 px-4 sm:px-6 md:px-8 ">
        <h1
          className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"
          data-aos="zoom-in"
        >
          {t("title")}
        </h1>
        <p
          className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400 text-primary"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="500"
        >
          Construo aplicações focadas na{" "}
          <span className="text-sky-500 dark:text-sky-400">
            experiência do usuário
          </span>{" "}
          e no <span className="text-sky-500 dark:text-sky-400">desgin</span>,
          proporcionando{" "}
          <span className="text-sky-500 dark:text-sky-400">
            experiências únicas
          </span>{" "}
          para as pessoas. Apenas fazer bem feito não é mais o suficiente.
        </p>

        <figure className="md:flex rounded-x p-8 md:p-0 mt-24 md:mt-32 text-center shadow-xl text-slate-900 dark:text-slate-300 bg-card/50 dark:bg-card/70 ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0">
          <Image
            className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded mx-auto"
            src="/images/me.jpg"
            alt="Eu"
            width={1487}
            height={1982}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Nos últimos 7 anos, como desenvolvedor, trabalhei com grandes
                empresas para ajudá-las a alcançar todo o seu potencial e atrair
                novos clientes por meio da tecnologia.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Arthur Hauenstein
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Engenheiro de Software
              </div>
            </figcaption>
          </div>
        </figure>

        <div className="flex justify-center mt-24 md:mt-72">
          <div className="flex gap-6 flex-col md:flex-row">
            {/* @ts-expect-error Server Component */}
            <Highlight amount="+8" type="anos de experiência" />
            {/* @ts-expect-error Server Component */}
            <Highlight amount="7" type="cursos concluídos" />
            {/* @ts-expect-error Server Component */}
            <Highlight amount="+20" type="projetos desenvolvidos" />
          </div>
        </div>
      </div>
    </section>
  );
}
