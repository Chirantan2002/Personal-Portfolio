"use client";
import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface TapeAnimationProps {
  words: string[];
  animation?: MotionProps;
  className?: string;
}

export const TapeAnimationComponent: React.FC<TapeAnimationProps> = ({
  words,
  animation = {
    initial: { x: 0 },
    animate: { x: "-100%" },
    transition: { duration: 100, repeat: Infinity, ease: "linear" },
  },
  className = "",
}) => {
  const tapeWords = [...words, ...words];

  return (
    <div className={twMerge("py-2 overflow-x-clip", className)}>
      <div className="container overflow-x-clip -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            {...animation}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={idx}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span className="text-white/20 uppercase font-extrabold text-5xl">
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20 " />
              </div>
            ))}
          </motion.div>
          <motion.div
            {...animation}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={idx}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span className="text-white/20 uppercase font-extrabold text-5xl">
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20" />
              </div>
            ))}
          </motion.div>
          <motion.div
            {...animation}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={idx}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span className="text-white/20 uppercase font-extrabold text-5xl">
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20" />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={idx}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span className="text-white/20 uppercase font-extrabold text-5xl">
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20 " />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={idx}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span className="text-white/20 uppercase font-extrabold text-5xl">
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20" />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={idx}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span className="text-white/20 uppercase font-extrabold text-5xl">
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
