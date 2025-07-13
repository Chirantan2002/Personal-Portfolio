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
import { SiPytorch } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItem } from "@/components/ToolboxItemTape";
import HobbyTape from "@/components/HobbyTape";
import { motion } from "framer-motion";

const toolboxItems = [
  {
    title: "NodeJS",
    iconType: FaNodeJs,
  },
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
    title: "TypeScript",
    iconType: BiLogoTypescript,
  },
  {
    title: "NextJs",
    iconType: RiNextjsFill,
  },
  {
    title: "MongoDB",
    iconType: SiMongodb,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Python",
    iconType: FaPython,
  },
  {
    title: "Pytorch",
    iconType: SiPytorch,
  },
  {
    title: "VSCode",
    iconType: VscVscode,
  },
  {
    title: "Numpy",
    iconType: SiNumpy,
  },
  {
    title: "Pandas",
    iconType: SiPandas,
  },
];

const MotionCard = motion(Card);

export const AboutSection = () => {
  return (
    <div className="pb-20 px-5" id="About">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world"
          about="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <MotionCard className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books that have shaped my understanding of the world."
            />
            <div className="w-40 mx-auto mt-8 md:mt-0">
              <Image src={BookImage} alt="Book Cover" />
            </div>
          </MotionCard>
          <MotionCard className="h-max md:col-span-3">
            <CardHeader
              title="My Toolbox"
              description="Technologies & tools that I use"
              className="px-6 pt-6"
            />
            <ToolboxItem items={toolboxItems} className="mt-6" />
          </MotionCard>
          <MotionCard className="h-max p-0 flex flex-col">
            <CardHeader
              title="Beyond the code"
              description="Explore my interests"
              className="px-6 py-6"
            />
            <HobbyTape />
          </MotionCard>
        </div>
      </div>
    </div>
  );
};
