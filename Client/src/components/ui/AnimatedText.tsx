
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { textContainer, textVariant2 } from "@/utils/animation";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  title: string;
  textStyles?: string;
  staggerChildren?: boolean;
};

const AnimatedText = ({ title, textStyles, staggerChildren = true }: AnimatedTextProps) => {
  return (
    <>
      {staggerChildren ? (
        <motion.p
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={cn("", textStyles)}
        >
          {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.p>
      ) : (
        <motion.p
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={cn("", textStyles)}
        >
          {title}
        </motion.p>
      )}
    </>
  );
};

export const SectionHeading = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <AnimatedText
        title={typeof children === "string" ? children : "Section Heading"}
        textStyles="text-3xl sm:text-4xl md:text-5xl font-semibold"
        staggerChildren={false}
      />
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-1 bg-primary mx-auto mt-4"
      />
    </div>
  );
};

export default AnimatedText;
