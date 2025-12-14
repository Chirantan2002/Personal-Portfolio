"use client";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const sections = ["Home", "Projects", "About", "Contact"];

export const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="w-full fixed top-3 z-30 flex items-center justify-center">
      <nav className="flex items-center justify-center p-1 drop-shadow-md drop-shadow-gray-900/80 border border-white/15 rounded-lg backdrop-blur bg-inherit transition-all duration-75 ease-in-out bg-gradient-to-r from-[#0f172a]/40  to-[#334155]/40">
        <div className="flex items-center md:space-x-4">
          {sections.map((section, index) => (
            <a
              key={index}
              onClick={() => scrollToSection(section)}
              className={`${spaceGrotesk.className} nav-item hover:bg-white  text-white/90 hover:text-slate-900 font-semibold text-xs md:text-md uppercase cursor-pointer tracking-wide md:tracking-wider rounded-md`}
            >
              {section}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};
