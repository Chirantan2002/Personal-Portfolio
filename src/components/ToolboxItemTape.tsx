"use client";
import React from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const ANIMATION_DURATION = 180;

export const ToolboxItem = ({
  items,
  className,
  itemWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col overflow-x-clip space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="flex -translate-x-20">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: ANIMATION_DURATION,
            repeat: Infinity,
            ease: "linear",
          }}
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemWrapperClassName
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
            >
              <TechIcon component={item.iconType} />
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: ANIMATION_DURATION,
            repeat: Infinity,
            ease: "linear",
          }}
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemWrapperClassName
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
            >
              <TechIcon component={item.iconType} />
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: ANIMATION_DURATION,
            repeat: Infinity,
            ease: "linear",
          }}
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemWrapperClassName
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
            >
              <TechIcon component={item.iconType} />
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex -translate-x-96">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: ANIMATION_DURATION,
            repeat: Infinity,
            ease: "linear",
          }}
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemWrapperClassName
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
            >
              <TechIcon component={item.iconType} />
              <span className="font-semibold">{item.title}</span>
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
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemWrapperClassName
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
            >
              <TechIcon component={item.iconType} />
              <span className="font-semibold">{item.title}</span>
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
          className={twMerge(
            "flex flex-none py-0.5 gap-6 pr-6",
            itemWrapperClassName
          )}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
            >
              <TechIcon component={item.iconType} />
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
