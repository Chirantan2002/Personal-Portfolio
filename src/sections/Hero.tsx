"use client";
import React from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import GrainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { RiScrollToBottomLine } from "react-icons/ri";
import { GoRocket } from "react-icons/go";
import { Orbit } from "@/components/Orbit";
import { HiOutlineBolt } from "react-icons/hi2";
import { FiMoon } from "react-icons/fi";
import { RiMeteorLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div
      className="py-28 md:py-44 lg:py-52 relative z-0 overflow-x-clip [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      id="Home"
    >
      <div className="absolute inset-0 -z-10">
        {/* Grain-Image */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
          }}
        ></div>
        {/* Grain-Image */}

        {/* Rings with gradient effect */}
        <div className="hero-ring size-[400px]"></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        {/* Rings with gradient effect */}

        {/* Icons on the orbit starts from here */}
        <Orbit size={800} rotation={-72}>
          <StarIcon className="text-emerald-300/40 size-28" />
        </Orbit>
        <Orbit size={550} rotation={40}>
          <StarIcon className="text-emerald-300/58 size-12" />
        </Orbit>
        <Orbit size={590} rotation={170}>
          <StarIcon className="text-emerald-300/20 size-8" />
        </Orbit>

        {/* Orbit at 430 */}
        <Orbit size={430} rotation={-250}>
          <SparkleIcon className="text-emerald-300/68 size-8" />
        </Orbit>
        <Orbit size={430} rotation={75}>
          <FiMoon className="text-emerald-300/50 size-8" />
        </Orbit>
        <Orbit size={430} rotation={150}>
          <RiMeteorLine className="text-emerald-300/70 size-8" />
        </Orbit>
        {/* Orbit at 430 */}

        {/* Orbit at 350 */}
        <Orbit size={350} rotation={255}>
          <GoRocket className="text-emerald-300/40 size-8" />
        </Orbit>
        <Orbit size={350} rotation={-320}>
          <HiOutlineBolt className="text-emerald-300/30 size-8" />
        </Orbit>
        <Orbit size={350} rotation={-25}>
          <FaRegHeart className="text-emerald-300/77 size-8" />
        </Orbit>
        {/* Orbit at 350 */}

        {/* Icons on the orbit ends here */}
      </div>

      {/* Main content starts from here */}
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className="size-[130px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center space-x-2 rounded-full">
            {/* Green-dot animation */}
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-400 rounded-full animate-ping-large absolute inset-0"></div>
            </div>
            {/* Green-dot animation */}

            <div className="text-sm font-medium">
              Aspiring Software Engineer
            </div>
          </div>
        </div>
        <div className="max-w-[1024px] mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building things for fun
          </h1>
          <p className="mt-4 md:text-lg text-center px-3 text-white/60 playfair-display-normal tracking-wider">
            Hi, I'm Chirantan Biswas. I'm a 3rd year student of Jadavpur
            University.
          </p>
        </div>

        {/* Scroll button Indicator */}
        <div className="fixed opacity-0 md:opacity-[1] md:bottom-4 md:right-4 flex items-center justify-center">
          <RiScrollToBottomLine className="text-4xl transition duration-300 absolute inset-0 text-emerald-300 blur-md animate-bounce" />
          <RiScrollToBottomLine className="text-4xl transition duration-300 relative animate-bounce z-0" />
        </div>
        {/* Scroll button Indicator */}

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mt-8 mx-auto">
          <div className="gap-4 flex flex-col md:flex-row justify-center items-center">
            <button
              className="inline-flex items-center space-x-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer transition duration-300 tracking-wide font-semibold bg-white/5 hover:bg-white/10"
              onClick={() => {
                const ele = document.getElementById("Projects");
                if (ele) {
                  ele.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  });
                }
              }}
            >
              <span>Explore my work</span>
              <FaArrowDown />
            </button>
            <button
              className="inline-flex items-center space-x-2 border border-white/15 bg-white text-gray-950 px-6 h-12 rounded-xl cursor-pointer hover:bg-white/70 hover:text-black transition duration-300 tracking-wide font-semibold"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "./resume.pdf";
                link.download = "Chirantan_Biswas_Resume.pdf";
                link.click();
              }}
            >
              <span>👋</span>
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
      {/* Main content ends here */}
    </div>
  );
};
