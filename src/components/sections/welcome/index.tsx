import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Highlight } from "./highlight";
import { Code, Microscope, TestTubeDiagonal } from "lucide-react";

export function WelcomeSection() {
  const t = useTranslations("root.welcome");

  return (
    <section className="relative min-h-[70rem] -mt-[72px]">
      <div className="bg-contain min-h-[70rem] absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] bg-beams-light dark:bg-beams-dark">
        <div className="min-h-[70rem] absolute inset-0 bg-gridSlate900 bg-[bottom_1px_center] dark:bg-grid-slate-400 dark:bg-bottom dark:border-b dark:border-slate-100/5 [mask-image:linear-gradient(transparent,black)] [webkit-mask-image:linear-gradient(transparent,black)]" />
      </div>
      <div className="relative max-w-6xl mx-auto pt-32 sm:pt-36 lg:pt-48 px-4 sm:px-6 md:px-8 ">
        <h1
          className="text-primary font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"
          data-aos="zoom-in"
        >
          {t("title")}
        </h1>
        <p
          className="mt-6 text-lg text-tertiary text-center max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-delay="500"
        >
          Construo aplicações focadas na{" "}
          <span className="text-accent">experiência do usuário</span> e no{" "}
          <span className="text-accent">desgin</span>, proporcionando{" "}
          <span className="text-accent">experiências únicas</span> para as
          pessoas. Apenas fazer bem feito não é mais o suficiente.
        </p>

        <figure className="md:flex rounded-x p-8 md:p-0 mt-24 md:mt-32 text-center shadow-xl text-slate-900 dark:text-slate-300 bg-base-200/50 dark:bg-base-200/70 ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0">
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
              <div className="text-accent">Arthur Hauenstein</div>
              <div className="text-slate-700 dark:text-slate-500">
                Engenheiro de Software
              </div>
            </figcaption>
          </div>
        </figure>

        <div className="flex justify-center mt-24 md:mt-72">
          <div className="stats stats-vertical md:stats-horizontal bg-base-200 shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <TestTubeDiagonal className="w-8 h-8 stroke-accent" />
              </div>
              <div className="stat-title text-primary">
                Projetos desenvolvidos
              </div>
              <div className="stat-value text-accent">+30</div>
              <div className="stat-desc">↗︎ + a cada mês</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <Microscope className="w-8 h-8 stroke-secondary" />
              </div>
              <div className="stat-title text-primary">Cursos concluídos</div>
              <div className="stat-value text-secondary">7</div>
              <div className="stat-desc">↗︎ sempre me aperfeiçoando</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <Image
                      alt="me"
                      width={64}
                      height={64}
                      src="/images/me-secondary.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-value text-primary">+8</div>
              <div className="stat-title">Anos de exeriência</div>
              <div className="stat-desc text-accent">
                ↗︎ evoluindo todos os dias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
