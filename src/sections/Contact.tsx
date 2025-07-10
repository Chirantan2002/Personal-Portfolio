import React from "react";
import GrainImage from "@/assets/images/grain.jpg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Contact = () => {
  return (
    <div className="py-16 pt-12 px-4 lg:py-24 lg:pt-20" id="contact">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-slate-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center lg:justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div className="">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chirantanbiswas2024@gmail.com&su=Let%27s%20Work%20Together&body=Hi%20there%2C%0A%0AI%20came%20across%20your%20work%20and%20I%27m%20really%20impressed.%20I%27d%20love%20to%20explore%20how%20we%20might%20collaborate%20or%20work%20together%20on%20a%20project.%0A%0ALet%20me%20know%20when%20would%20be%20a%20good%20time%20to%20chat!%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D
"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-900 cursor-pointer inline-flex items-center px-6 h-12 rounded-xl space-x-1.5 w-max border-gray-900"
              >
                <span>Get in touch</span>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
