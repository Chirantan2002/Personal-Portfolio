"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { TapeAnimationComponent } from "@/components/TapeAnimation";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    github_link: "dummy_link",
    image: darkSaasLandingPage,
    category: "Saas",
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    github_link: "dummy_link",
    image: lightSaasLandingPage,
    category: "Saas",
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    github_link: "dummy_link",
    image: aiStartupLandingPage,
    category: "Frontend",
  },
];

const tapeWords = ["Frontend", "Backend", "Saas", "Fullstack", "ML", "Ai"];

const categories = [
  "All",
  ...Array.from(new Set(portfolioProjects.map((project) => project.category))),
];

export const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="pb-16 lg:py-24 pt-16 md:pt-24" id="Projects">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Putting skills into action"
          title="Featured Projects"
          about="See how I transformed ideas into engaging projects"
        />
        {/* Tape Animation With Words */}
        <TapeAnimationComponent words={tapeWords} />
        {/* Tape Animation With Words Ends*/}

        {/* Categories Buttons */}
        <div className="flex flex-wrap space-x-5 justify-center mt-8">
          {categories.map((category, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white outline-none cursor-pointer transition-colors duration-1000 ease-in-out tiktok-sans-black ${
                selectedCategory == category
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white tracking-wide border-none"
                  : "bg-white/10 text-white border-white/20 tracking-wide hover:bg-emerald-500 hover:text-slate-900 hover:border-emerald-500"
              }`}
            >
              <span className="relative px-5 py-2.5 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent tracking-wider">
                {category}
              </span>
            </button>
          ))}
        </div>
        {/* Categories Buttons Ends*/}

        {/* Projects One by One Begins*/}
        <div className="grid grid-cols-1 px-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 gap-16 mt-10 md:gap-20 md:mt-20 relative z-0">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2  after:-outline-offset-2 after:outline-white/20 after:rounded-3xl px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }}
              ></div>
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase space-x-2 tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li
                    className="flex space-x-2 text-sm md:text-base text-white/50"
                    key={result.title}
                  >
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row space-x-4 mt-5">
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center space-x-2 mt-4 md:p-4 cursor-pointer">
                    <span> Visit Live Site</span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </a>
                <a href={project.github_link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center space-x-2 mt-4 md:p-4 cursor-pointer">
                    <span>Github</span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </a>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4 md:mb-0"
              />
            </div>
          ))}
        </div>
        {/* Projects One by One Ends*/}
      </div>
    </section>
  );
};
