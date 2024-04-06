import { Highlight } from "@/components/ui/highlight";
import { motion } from "framer-motion";

export default function HighlightTitle() {
  return (
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
      className="text-primary font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"
    >
      Hi, I`m Arthur, a{" "}
      <Highlight className="text-black dark:text-white">
        software engineer
      </Highlight>{" "}
      with a passion for Web Development and Design
    </motion.h1>
  );
}
