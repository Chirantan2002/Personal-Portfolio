import React from "react";

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
      <h2 className="font-serif text-3xl md:text-6xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center px-10 md:px-0 md:text-lg font-sans text-white/60 mt-4 max-w-md mx-auto">
        {about}
      </p>
    </div>
  );
};
