"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = ({
  images,
  className,
  imageClassName,
  buttonsVisible = false,
}: {
  images: string[];
  className: string;
  imageClassName: string;
  buttonsVisible?: boolean;
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      className={cn(
        "w-full relative flex justify-center items-center",
        className
      )}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          className={cn("absolute w-full", imageClassName)}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <ul className="absolute h-fit w-fit z-10 left-0 right-0 m-auto bottom-2 flex gap-2">
        {images.map((_, index) => (
          <li key={index} onClick={() => setPage([index + 1, index + 1])}>
            <div
              className={cn(
                "size-1 rounded-full",
                index === imageIndex ? "bg-white" : "bg-slate-400/30"
              )}
            />
          </li>
        ))}
      </ul>
      {buttonsVisible && (
        <button className="btn btn-circle btn-xs bg-slate-200/40 border-transparent absolute z-10 select-none right-2">
          <ChevronRight
            className="size-4 text-white"
            onClick={() => paginate(1)}
          />
        </button>
      )}
      {buttonsVisible && (
        <button className="btn btn-circle btn-xs bg-slate-200/40 border-transparent absolute z-10 select-none left-2">
          <ChevronLeft
            className="size-4 text-white"
            onClick={() => paginate(-1)}
          />
        </button>
      )}
    </div>
  );
};
