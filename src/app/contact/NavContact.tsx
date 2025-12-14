import React from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const HOME_PAGE_LINK = "/";

const NavContact = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-4xl w-full top-2 p-2 z-30 flex items-center justify-center border-b-[1px] border-white/20">
        <nav className="flex items-center justify-center p-1 drop-shadow-md drop-shadow-gray-900/80 border border-white/15 rounded-lg backdrop-blur bg-inherit transition-all duration-75 ease-in-out bg-gradient-to-r from-[#0f172a]/40  to-[#334155]/40">
          <div className="flex items-center md:space-x-4">
            <a
              href={HOME_PAGE_LINK}
              className={`${spaceGrotesk.className} nav-item hover:bg-white  text-white/90 hover:text-slate-900 font-semibold text-xs md:text-md uppercase cursor-pointer tracking-wide md:tracking-wider rounded-md`}
            >
              Go to Home
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavContact;
