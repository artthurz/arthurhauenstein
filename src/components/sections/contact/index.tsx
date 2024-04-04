import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  name: string;
  link: string;
  children: React.ReactNode;
  className: string;
}

function Button(props: ButtonProps) {
  return (
    <Link
      className={cn(
        "duration-200 gap-2 bg-opacity-80  p-2 font-semibold text-[1.2rem] text-white inline-flex items-center space-x-2 rounded shadow-xl ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0",
        props.className
      )}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
      {props.name}
      <ChevronRight className="w-6 h-6" />
    </Link>
  );
}

export function ContactSection() {
  return (
    <section id="contact">
      <div className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-blue-500 dark:shadow-white/20">
          <div className="h-full w-full aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/images/section/contact-light.png')] dark:bg-[url('/images/section/contact-dark.png')]" />
        </div>
        <h2 className="mt-8 font-semibold text-blue-500 dark:text-blue-400">
          Entre em contato
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
          Precisando de um desenvolvedor? Vamos trabalhar juntos.
        </p>
        <p className="mt-4 max-w-3xl space-y-6">
          Utilize as redes abaixos para me contatar, estou a disposição para
          responder suas dúvidas
        </p>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[8rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-beams-blue-light dark:bg-beams-blue-dark [background-size:62.5rem] [height:8rem] xl:top-8 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="absolute inset-x-0 h-[8rem] bg-grid-slate-900 bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-400 dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
        <div className="relative h-44 sm:h-32 lg:h-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="zoom-in-up"
          ></div>
        </div>
      </div>
    </section>
  );
}
