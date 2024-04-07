import { Highlight } from "@/components/ui/highlight";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("root.welcome");

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
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
          <Highlight className="text-black dark:text-white">
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
        className="w-96 h-96 md:w-72 lg:w-96 md:h-auto select-none object-cover md:object-contain rounded-3xl mx-auto"
        src="/images/me.jpeg"
        alt="Arthur"
        width={1487}
        height={1982}
      />
    </div>
  );
}
