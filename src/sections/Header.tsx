"use client";

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
    <div className="flex justify-center items-center fixed w-full top-3 z-30">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur-sm bg-inherit  transition duration-400 ease-in-out bg-gradient-to-r from-[#0f172a]/40  to-[#334155]/40">
        {sections.map((section, index) => (
          <a
            key={index}
            onClick={() => scrollToSection(section)}
            className="nav-item hover:bg-white hover:bg-shadow-md  text-white/90 hover:text-slate-900 cursor-pointer font-semibold text-md"
          >
            <span className="uppercase">{section}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};
