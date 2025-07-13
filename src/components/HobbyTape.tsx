import React from "react";
import { motion } from "framer-motion";
import HobbyItems from "./HobbyItems";

const ANIMATION_DURATION = 120;

const HobbyTape = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4 py-4">
        {/* 1st ROW */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_25%,black_80%,transparent)]">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <HobbyItems />
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <HobbyItems />
          </motion.div>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <HobbyItems />
          </motion.div>
        </div>
        {/* 2nd ROW */}
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_25%,black_80%,transparent)]">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <HobbyItems />
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <HobbyItems />
          </motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: ANIMATION_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <HobbyItems />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HobbyTape;
