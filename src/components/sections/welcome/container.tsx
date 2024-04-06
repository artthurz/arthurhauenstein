"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import HeighlightTitle from "./highlight-title";

export function Container({ children }: { children: React.ReactNode }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="group relative min-h-[70rem] -mt-[72px]"
      onMouseMove={handleMouseMove}
    >
      <div className="bg-contain min-h-[70rem] absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] bg-beams-light dark:bg-beams-dark group border-b border-slate-400/5">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-400 dark:opacity-5 pointer-events-none [mask-image:linear-gradient(transparent,black)] [webkit-mask-image:linear-gradient(transparent,black)]" />
        <motion.div
          className="pointer-events-none bg-grid-sky-500 dark:bg-grid-sky-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
            maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          }}
        />
        <div className="absolute inset-0 h-full w-full pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent,white)]" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto pt-32 sm:pt-36 lg:pt-48 px-4 sm:px-6 md:px-8 ">
        <HeighlightTitle />
        {children}
      </div>
    </section>
  );
}
