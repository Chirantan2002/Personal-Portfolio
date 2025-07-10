"use client";
import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JsIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItem";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JsIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Drawing",
    emoji: "🎨",
  },
  {
    title: "Reading",
    emoji: "📖",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Listening Music",
    emoji: "🎵",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-20 px-5" id="about">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world"
          about="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books that have shaped my understanding of the world."
            />
            <div className="w-40 mx-auto mt-8 md:mt-0">
              <Image src={BookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-max md:col-span-3">
            <CardHeader
              title="My Toolbox"
              description="Technologies & tools that I use"
              className="px-6 pt-6"
            />
            <ToolboxItem items={toolboxItems} className="mt-6" />
            <ToolboxItem
              items={toolboxItems}
              className="mt-6"
              itemWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card className="h-max p-0 flex flex-col">
            <CardHeader
              title="Beyond the code"
              description="Explore my interests"
              className="px-6 py-6"
            />
            {/* 1st ROW */}
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_25%,black_80%,transparent)]">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex h-max space-x-2 p-4"
              >
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 w-max space-x-1"
                  >
                    <span>{hobby.emoji}</span>
                    <span className="font-medium text-slate-950">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex h-max space-x-2 p-4"
              >
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 w-max space-x-1"
                  >
                    <span>{hobby.emoji}</span>
                    <span className="font-medium text-slate-950">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex h-max space-x-2 p-4"
              >
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 w-max space-x-1"
                  >
                    <span>{hobby.emoji}</span>
                    <span className="font-medium text-slate-950">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 2nd ROW */}
            <div className="flex [mask-image:linear-gradient(to_right,transparent,black_25%,black_80%,transparent)]">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex h-max space-x-2 p-4"
              >
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 w-max space-x-1"
                  >
                    <span>{hobby.emoji}</span>
                    <span className="font-medium text-slate-950">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex h-max space-x-2 p-4"
              >
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 w-max space-x-1"
                  >
                    <span>{hobby.emoji}</span>
                    <span className="font-medium text-slate-950">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex h-max space-x-2 p-4"
              >
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 w-max space-x-1"
                  >
                    <span>{hobby.emoji}</span>
                    <span className="font-medium text-slate-950">
                      {hobby.title}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
