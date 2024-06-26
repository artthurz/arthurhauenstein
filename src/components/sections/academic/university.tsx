"use server";

import { Carousel } from "@/components/ui/carousel";
import GlassCard from "@/components/ui/glass-card";
import { ChevronRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export async function University() {
  const t = useTranslations("root.academic.university");

  return (
    <GlassCard>
      <Carousel
        className="grid w-full h-60 relative md:hidden gap-4 col-start-1 col-end-3 row-start-1"
        imageClassName="w-full h-60 rounded-2xl"
        buttonsVisible
        images={[
          "/images/university/1.jpg",
          "/images/university/2.jpg",
          "/images/university/3.jpg",
        ]}
      />
      <div className="rounded mx-auto grid grid-cols-1 lg:gap-x-20 lg:grid-cols-2 p-6">
        <div className="z-10 lg:mt-16 relative col-start-1 flex flex-col-reverse rounded-lg  bg-none p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-slate-900 md:text-2xl dark:text-white">
            Univates
          </h1>
          <p className="text-sm leading-4 font-medium text-slate-500 dark:text-slate-400">
            {t("name")}
          </p>
        </div>
        <div className="hidden md:grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <Image
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
            src="/images/university/1.jpg"
            alt="Biblioteca e Teatro Externo"
            height={4000}
            width={4000}
          />
          <Image
            className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
            src="/images/university/2.jpg"
            alt="Biblioteca Interno"
            height={4000}
            width={4000}
          />
          <Image
            className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
            loading="lazy"
            src="/images/university/3.jpg"
            alt="Teatro Interno"
            height={4000}
            width={4000}
          />
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <Star className="h-4 w-4 mr-1 text-indigo-400" />
            <span className="font-bold">
              4{" "}
              <span className="text-slate-400 font-normal">
                ({t("rating")})
              </span>
            </span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"></path>
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
            </svg>
            Lajeado, RS
          </dd>
        </dl>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <Link
            type="button"
            className="btn bg-indigo-600 hover:bg-indigo-500 text-white"
            href="https://www.univates.br/"
            target="_blank"
            rel="noreferrer"
          >
            {t("button")}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1">
          {t("breefing")}
        </p>
      </div>
    </GlassCard>
  );
}
