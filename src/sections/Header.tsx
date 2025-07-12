"use client";
import Link from "next/link";

const sections = ["Home", "Projects", "About", "Contact"];

export const Header = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-30">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg">
        {sections.map((section, index) => (
          <a
            key={index}
            onClick={() => scrollToSection(section)}
            className="nav-item hover:bg-white hover:text-black cursor-pointer tiktok-sans-bold"
          >
            {section}
          </a>
        ))}
      </nav>
    </div>
  );
};
