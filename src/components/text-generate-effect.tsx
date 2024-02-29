import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../utils/cn";

export const TextGenerateEffect = ({
  phrases,
  lineClassNames = [], // Default-Leerarray, falls keine Klassen für Zeilen übergeben werden
  wordClassName,
}: {
  phrases: string[];
  lineClassNames?: string[];
  wordClassName?: string;
}) => {
  const controls = phrases.map((phrase) =>
    phrase.split(" ").map(() => useAnimation())
  );

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < phrases.length; i++) {
        const words = phrases[i].split(" ");
        for (let j = 0; j < words.length; j++) {
          await controls[i][j].start({
            opacity: 1,
            transition: { duration: 0.25 },
          });
        }
        await new Promise((resolve) => setTimeout(resolve));
      }
    };

    sequence();
  }, [controls, phrases]);

  const renderPhrases = () =>
    phrases.map((phrase, i) => (
      <div key={i} className={cn("mb-4", lineClassNames[i] || "")}>
        {phrase.split(" ").map((word, j) => (
          <motion.span
            key={j}
            initial={{ opacity: 0 }}
            animate={controls[i][j]}
            className={`inline-block ${wordClassName} ${
              j < phrase.split(" ").length - 1 ? "mr-2" : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </div>
    ));

  return (
    <div className={cn("font-bold", wordClassName)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderPhrases()}
        </div>
      </div>
    </div>
  );
};
