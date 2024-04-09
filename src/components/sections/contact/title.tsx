"use client";

import { Highlight } from "@/components/ui/highlight";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Title() {
  const t = useTranslations("root.contact");

  return (
    <div className="relative">
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
        className="mt-4 text-3xl sm:text-4xl text-primary font-extrabold tracking-tight"
      >
        {t("title.1")}{" "}
        <Highlight className="dark:from-indigo-500 dark:to-sky-500 from-indigo-300 to-sky-300 z-10">
          {t("title.2")}
        </Highlight>
      </motion.h1>
      <p className="mt-4 max-w-3xl space-y-6">{t("subtitle")}</p>
    </div>
  );
}
