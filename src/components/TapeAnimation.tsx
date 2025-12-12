"use client";
import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
// import {}

const ANIMATION_DURATION = 200;

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
    transition: {
      duration: ANIMATION_DURATION,
      repeat: Infinity,
      ease: "linear",
    },
  },
  className = "",
}) => {
  const tapeWords = [...words, ...words];

  return (
    <div
      className={twMerge(
        "py-2 overflow-x-clip hover:cursor-default w-full md:max-w-[64rem] mx-auto",
        className
      )}
    >
      <div className="container overflow-x-clip -mx-1">
        {/* Forward Tape of Words Begins */}
        <div
          className={`flex [mask-image:linear-gradient(to_right,transparent,black_30%,black_90%,transparent)]`}
        >
          <motion.div
            {...animation}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={`${word}-${idx}`}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span
                  className={`text-white/20 uppercase sekuya-regular text-5xl 
                    `}
                >
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
                key={`${word}-${idx}`}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span
                  className={`text-white/20 uppercase sekuya-regular text-5xl 
                    `}
                >
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20 " />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Forward Tape of Words Ends */}

        {/* Reverse Tape of Words Begins */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_30%,black_90%,transparent)]">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={`${word}-${idx}`}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span
                  className={`text-white/20 uppercase sekuya-regular text-5xl 
                    `}
                >
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20 " />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-shrink-0 space-x-1 pr-4 py-2"
          >
            {tapeWords.map((word, idx) => (
              <div
                key={`${word}-${idx}`}
                className="inline-flex space-x-1 items-center justify-center"
              >
                <span
                  className={`text-white/20 uppercase sekuya-regular text-5xl 
                    `}
                >
                  {word}
                </span>
                <StarIcon className="size-8 text-white/20 " />
              </div>
            ))}
          </motion.div>
        </div>
        {/* Reverse Tape of Words Ends */}
      </div>
    </div>
  );
};
