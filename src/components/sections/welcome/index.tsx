"use server";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "./container";
import Hightlights from "./hightlights";
import ArthurPhoto2 from "../../../../public/images/me2.jpeg";

export async function WelcomeSection() {
  const t = useTranslations("root.welcome");

  return (
    <Container>
      <Hightlights />
      <figure className="animate-slidein [--slidein-delay:700ms] opacity-0 md:flex rounded-3xl p-8 md:p-0 mt-24 md:mt-36 text-center shadow-xl text-slate-900 dark:text-slate-300 bg-base-200/50 dark:bg-base-200/70 ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0">
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
            <p className="text-lg font-medium">
              “Nos últimos 8 anos, como engenheiro de software, trabalhei com
              grandes empresas para ajudá-las a alcançar todo o seu potencial e
              atrair novos clientes por meio da tecnologia.”
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
    </Container>
  );
}
