"use client";
import React, { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";
import { motion } from "framer-motion";

const words = [
  "Wake Up",
  "Eat",
  "Code",
  "Sip coffee",
  "Debug",
  "Sleep",
  "Repeat",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 space-x-4 pr-4 py-1/2 -translate-x-0"
          >
            {words.map((word, idx) => (
              <div key={idx} className="inline-flex space-x-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-2xl">
                  {word}
                </span>
                <StarIcon className="size-10 text-gray-900 -rotate-12" />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 space-x-4 pr-4 py-1/2 -translate-x-0"
          >
            {words.map((word, idx) => (
              <div key={idx} className="inline-flex space-x-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-2xl">
                  {word}
                </span>
                <StarIcon className="size-10 text-gray-900 -rotate-12" />
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-shrink-0 space-x-4 pr-4 py-1/2 -translate-x-0"
          >
            {words.map((word, idx) => (
              <div key={idx} className="inline-flex space-x-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-2xl">
                  {word}
                </span>
                <StarIcon className="size-10 text-gray-900 -rotate-12" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
