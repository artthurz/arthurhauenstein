"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    src: string;
    color: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 h-56 overflow-scroll md:overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "max-w-7xl flex min-w-full h-52 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className={cn(
              "w-[220px] max-w-full relative rounded-2xl border border-base-300 flex-shrink-0 px-8 py-6 md:w-[300px] text-center shadow-xl text-slate-900 dark:text-slate-300 bg-base-200/50 dark:bg-base-200/70 ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0",
              item.color
            )}
            key={item.title}
          >
            <div>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-2xl leading-[1.6] text-primary font-normal">
                {item.title}
              </span>
              <Image
                className={cn("w-20 h-20 object-contain mx-auto")}
                src={item.src}
                alt={item.title}
                width={80}
                height={80}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export function SkillCards() {
  return <InfiniteMovingCards items={skills} direction="right" speed="slow" />;
}

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
