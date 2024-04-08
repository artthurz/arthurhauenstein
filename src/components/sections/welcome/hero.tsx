"use client";

import { Highlight } from "@/components/ui/highlight";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ArthurPhoto from "../../../../public/images/me.jpeg";
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";

export default function Hero() {
  const t = useTranslations("root.welcome");

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center relative">
      <Meteors className="-z-10" number={20} />
      <div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-primary font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight text-center"
        >
          {t("title.1")}{" "}
          <Highlight className="dark:from-indigo-500 dark:to-sky-500 from-indigo-300 to-sky-300">
            {t("title.2")}
          </Highlight>{" "}
          {t("title.3")}
        </motion.h1>
        <p className="animate-slidein [--slidein-delay:500ms] opacity-0 text-center mt-6 md:text-lg max-w-4xl mx-auto">
          {t("subtitle.1")}{" "}
          <span className="text-accent ">{t("subtitle.2")}</span>{" "}
          {t("subtitle.3")}{" "}
          <span className="text-accent">{t("subtitle.4")}</span>{" "}
          {t("subtitle.5")}{" "}
          <span className="text-accent">{t("subtitle.6")}</span>{" "}
          {t("subtitle.7")}
        </p>
      </div>
      <Image
        className="w-96 md:w-72 lg:w-96 h-auto select-none object-cover md:object-contain rounded-3xl mx-auto"
        alt="Arthur"
        src={ArthurPhoto}
        loading="lazy"
        placeholder="blur"
        width={384}
        height={491.35}
      />
    </div>
  );
}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
