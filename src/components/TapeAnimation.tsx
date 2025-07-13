"use client";
import React from "react";
import StarIcon from "@/assets/icons/star.svg";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

const ANIMATION_DURATION = 200;
const FORWARD_HOVER_GRADIENT =
  "hover:bg-gradient-to-tl hover:from-slate-800 hover:via-violet-500 hover:to-zinc-400 hover:bg-clip-text hover:text-transparent ";
const REVERSE_HOVER_GRADIENT =
  "hover:bg-gradient-to-tl hover:from-neutral-400 hover:via-green-500 hover:to-blue-500  hover:bg-clip-text hover:text-transparent";
const HOVER_STYLE = "transition-colors duration-1000 ease-in-out";

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
        "py-2 overflow-x-clip hover:cursor-default",
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
                  className={`text-white/20 uppercase outfit-normal-black text-5xl 
                    ${HOVER_STYLE} ${FORWARD_HOVER_GRADIENT}`}
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
                  className={`text-white/20 uppercase outfit-normal-black text-5xl 
                    ${HOVER_STYLE} ${FORWARD_HOVER_GRADIENT}`}
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
                  className={`text-white/20 uppercase outfit-normal-black text-5xl 
                    ${HOVER_STYLE} ${REVERSE_HOVER_GRADIENT}`}
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
                  className={`text-white/20 uppercase outfit-normal-black text-5xl 
                    ${HOVER_STYLE} ${REVERSE_HOVER_GRADIENT}`}
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
