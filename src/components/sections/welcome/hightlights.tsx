"use server";

import { Microscope, TestTubeDiagonal } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

export default async function Hightlights() {
  const t = useTranslations("root.welcome");

  return (
    <div className="animate-slidein [--slidein-delay:900ms] opacity-0 flex justify-center mt-24 md:mt-36 rounded-xl flex-col md:flex-row bg-base-200 bg-opacity-70 shadow-xl">
      <div className="flex justify-between items-center p-6 max-md:border-b-2 md:border-r-2 border-base-300 md:w-1/3">
        <div>
          <div className="text-primary text-xl md:text-lg xl:text-xl">
            Software Engineer
          </div>
          <div className="font-bold text-accent text-3xl">BTG Pactual</div>
          <div className="text-lg md:text-md xl:text-lg">↗︎ since 2021</div>
        </div>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <Image alt="me" width={64} height={64} src="/images/btg.jpg" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 max-md:border-b-2 md:border-r-2 border-base-300 md:w-1/3">
        <div>
          <div className="text-primary text-xl md:text-lg xl:text-xl">
            Graduated
          </div>
          <div className="font-bold text-secondary text-3xl">Univates</div>
          <div className="text-lg md:text-md xl:text-lg">at 2021</div>
        </div>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <Image alt="me" width={64} height={64} src="/images/univates.jpg" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 md:w-1/3">
        <div>
          <div className="font-bold text-primary text-5xl md:text-4xl xl:text-5xl">
            +8
          </div>
          <div className="text-xl md:text-lg xl:text-xl">
            Years of expirience
          </div>
          <div className="text-lg md:text-md xl:text-lg text-accent">
            ↗︎ evolving everyday
          </div>
        </div>
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
    </div>
  );
}
