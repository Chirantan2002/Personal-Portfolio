"use client";
import React from "react";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export const Orbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{
  size: number;
  rotation: number;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div className="animate-spin [animation-duration:30s]">
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className="h-max w-max animate-spin transition-all [animation-duration:10s] ease-in-out">
            <motion.div
              className="inline-flex animate-pulse transition-all ease-in-out"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
