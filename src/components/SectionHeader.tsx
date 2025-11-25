import React from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  about: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  about,
}) => {
  return (
    <div className="text-center mb-10">
      <div className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text md:text-lg">
        {eyebrow}
      </div>
      <h2 className={`${spaceGrotesk.className} font-semibold text-3xl md:text-6xl text-center mt-6`}>
        {title}
      </h2>
      <p className={`${spaceGrotesk.className} text-center px-10 md:px-0 md:text-lg text-white/60 mt-4 max-w-md mx-auto`}>
        {about}
      </p>
    </div>
  );
};
