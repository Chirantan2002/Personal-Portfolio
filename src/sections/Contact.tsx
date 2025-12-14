import React from "react";
import GrainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16 pt-12 px-4 lg:py-24 lg:pt-20" id="Contact">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-slate-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 max-w-[55rem] mx-auto">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 items-center lg:justify-between">
            <div>
              <h2 className="font-serif wrap-break-word text-2xl text-center lg:text-4xl">
                Let's create something amazing together
              </h2>
              <p
                className={`${spaceGrotesk.className} text-sm md:text-lg text-center mt-4 wrap-break-word`}
              >
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <a
                href="/contact"
                className={`${spaceGrotesk.className} bg-emerald-500 drop-shadow-xl text-slate-900 p-4 flex items-center justify-center rounded-md font-bold transition-all duration-200 ease-in-out text-lg gap-2 border border-emerald-600/70 hover:bg-slate-900 hover:text-emerald-500 hover:border-slate-900`}
              >
                Get in touch <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
