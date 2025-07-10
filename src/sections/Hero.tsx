"use client";
import React from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import GrainImage from "@/assets/images/grain.jpg";
import { StarImage } from "@/components/StarImage";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-56 relative z-0 overflow-x-clip [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      id="home"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <StarImage size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </StarImage>
        <StarImage size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </StarImage>
        <StarImage size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </StarImage>
        <StarImage size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </StarImage>
        <StarImage size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </StarImage>
        <StarImage size={530} rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </StarImage>
        <StarImage size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </StarImage>
        <StarImage size={100} rotation={-40}>
          <div className="size-12 rounded-full bg-emerald-300/5"></div>
        </StarImage>
        <StarImage size={330} rotation={-290}>
          <div className="size-6 rounded-full bg-emerald-300/10"></div>
        </StarImage>
        <StarImage size={200} rotation={30}>
          <div className="size-5 rounded-full bg-emerald-300/5"></div>
        </StarImage>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="memoji" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center space-x-2 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-300 rounded-full animate-ping transform absolute inset-0"></div>
            </div>
            <div className="text-sm font-medium">
              Aspiring Software Engineer
            </div>
          </div>
        </div>
        <div className="max-w-[1024px] mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building things for fun
          </h1>
          <p className="mt-4 md:text-lg text-center text-white/60 font-serif tracking-wider">
            Hi, I'm Chirantan Biswas. I'm a 3rd year student of Jadavpur
            University.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mt-8 mx-auto">
          <div className="gap-4 flex flex-col md:flex-row justify-center items-center">
            <button
              className="inline-flex items-center space-x-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer hover:bg-white/10 transition duration-300 tracking-wide font-semibold"
              onClick={() => {
                const ele = document.getElementById("projects");
                if (ele) {
                  ele.scrollIntoView({ behavior: "smooth" });
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
    </div>
  );
};
