"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import React from "react";

export type CardProps = {
  children: React.ReactNode;
  className: string;
  title: string;
  disableOnMobile?: boolean;
};

export function Card({
  children,
  className,
  title,
  disableOnMobile = true,
  ...props
}: CardProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [cardPerspective, setCardPerspective] = React.useState({});
  const [childrenPerspective, setChildrenPerspective] = React.useState({});
  const [highlightPerspective, setHighlightPerspective] = React.useState({});
  const isDesktop = useMediaQuery("(min-width: 768px)");

  function handlePointerMove(event: PointerEvent) {
    const { clientX, clientY } = event;
    const elBoundingClientRect = wrapperRef.current?.getBoundingClientRect();
    const { top, left, width, height }: any = elBoundingClientRect;

    const centerX = width / 2;
    const centerY = height / 2;

    const coordX = clientX - left;
    const coordY = clientY - top;

    let rotateY = (40 * (coordX - centerX)) / (width / 2);
    let rotateX = ((40 * (coordY - centerY)) / (height / 2)) * -1;

    if (rotateX > 0) {
      rotateX = rotateX > 30 ? 30 : rotateX;
    } else {
      rotateX = rotateX < -30 ? -30 : rotateX;
    }

    if (rotateY > 0) {
      rotateY = rotateY > 30 ? 30 : rotateY;
    } else {
      rotateY = rotateY < -30 ? -30 : rotateY;
    }

    const rotateXPercentage = (rotateX / 40) * 100;
    const rotateYPercentage = (rotateY / 40) * 100;

    const cardStyle = {
      transform: `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `
          ${-rotateY / 2}px ${rotateX / 2}px 15px`,
      transition: "transform 0s, box-shadow 0s",
    };

    const childrenStyle = {
      transform: `translate3d(${rotateYPercentage * 0.25}%, ${
        -rotateXPercentage * 0.25
      }%, 0)`,
    };

    const highlightStyle = {
      transform: `translate3d(${-rotateYPercentage * 0.25}%, ${
        rotateXPercentage * 0.25
      }%, 0)`,
      opacity:
        Math.max(Math.abs(rotateXPercentage), Math.abs(rotateYPercentage)) /
        100,
      transitionDuration: "0ms",
    };

    setCardPerspective(cardStyle);
    setChildrenPerspective(childrenStyle);
    setHighlightPerspective(highlightStyle);
  }

  function handlePointerLeave() {
    setCardPerspective({
      transform: "scale(1) rotateX(0) rotateY(0)",
      transition: "box-shadow 0.3s, transform 0.3s",
    });
    setChildrenPerspective({
      transform: "translate3d(0, 0, 0)",
    });
    setHighlightPerspective({
      transform: "translate3d(0px, 0px, 0px)",
      transitionDuration: "600ms",
      opacity: 0,
    });
  }

  React.useEffect(() => {
    const wrapper = wrapperRef.current;

    if (isDesktop || !disableOnMobile) {
      wrapper?.addEventListener("pointermove", handlePointerMove);
      wrapper?.addEventListener("pointerleave", handlePointerLeave);
    }

    return () => {
      wrapper?.removeEventListener("pointermove", handlePointerMove);
      wrapper?.removeEventListener("pointerleave", handlePointerLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop, disableOnMobile]);

  return (
    <div
      style={{
        border: "1px solid",
        ...cardPerspective,
      }}
      {...props}
      className={cn(
        "relative transition-all backdrop-blur-md grid pd-2 w-36 h-36 grid-cols-1 lg:p-4 rounded-xl md:w-60 md:h-28 md:grid-cols-2 overflow-hidden justify-center items-center z-10 touch-none",
        isDesktop || !disableOnMobile ? "touch-none" : "",
        className
      )}
    >
      <div ref={wrapperRef} className="absolute z-10 inset-0" />
      <div style={childrenPerspective}>{children}</div>
      <h1 className="lg:ml-4 text-center dark:text-white text-slate-900">
        {title}
      </h1>
      <div
        style={{
          transform: "translate3d(0px, 0px, 0px)",
          opacity: 0,
          ...highlightPerspective,
        }}
        className="duration-700 radial-gradiant-highlight absolute pointer-events-none block [left:-50%] [right:-50%] [width:200%] [height:200%] z-0"
      />
    </div>
  );
}
