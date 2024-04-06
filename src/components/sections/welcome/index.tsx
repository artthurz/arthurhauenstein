"use server";

import { Microscope, TestTubeDiagonal } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Container } from "./container";

export async function WelcomeSection() {
  return (
    <Container>
      <p className="animate-slidein [--slidein-delay:500ms] opacity-0 mt-6 text-lg text-center max-w-3xl mx-auto">
        Construo aplicações focadas na{" "}
        <span className="text-accent ">experiência do usuário</span> e no{" "}
        <span className="text-accent">desgin</span>, proporcionando{" "}
        <span className="text-accent">experiências únicas</span> para as
        pessoas. Apenas fazer bem feito não é mais o suficiente.
      </p>
      <figure className="animate-slidein [--slidein-delay:700ms] opacity-0 md:flex rounded-3xl p-8 md:p-0 mt-24 md:mt-32 text-center shadow-xl text-slate-900 dark:text-slate-300 bg-base-200/50 dark:bg-base-200/70 ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0">
        <Image
          className="w-36 h-36 md:w-48 md:h-auto object-cover md:object-contain rounded-full md:rounded-3xl mx-auto"
          src="/images/me.jpg"
          alt="Eu"
          width={1487}
          height={1982}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Nos últimos 8 anos, como desenvolvedor, trabalhei com grandes
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
      <div className="animate-slidein [--slidein-delay:900ms] opacity-0 flex justify-center mt-24 md:mt-72">
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
    </Container>
  );
}
