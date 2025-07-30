import React from "react";
import { motion } from "framer-motion";
import SparkleIcon from "@/assets/icons/sparkle.svg";

const words = ["Contact", "Let's Connect", "Get in Touch"];

const ContactInfiniteScroll = () => {
  return (
    <div className="container overflow-x-clip -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex flex-shrink-0 space-x-1 pr-4 py-1/2"
        >
          {words.map((word, index) => (
            <div
              key={index}
              className="inline-flex space-x-1 items-center justify-center"
            >
              <span className="text-5xl font-black uppercase">{word}</span>
              <SparkleIcon className="size-8 text-white" />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex flex-shrink-0 space-x-1 pr-4 py-1/2"
        >
          {words.map((word, index) => (
            <div
              key={index}
              className="inline-flex space-x-1 items-center justify-center"
            >
              <span className="text-5xl font-black uppercase">{word}</span>
              <SparkleIcon className="size-8 text-white" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactInfiniteScroll;
