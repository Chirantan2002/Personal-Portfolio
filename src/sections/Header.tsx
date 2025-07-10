export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-30">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg">
        <a href="#home" className="nav-item hover:bg-white/80 hover:text-black">
          Home
        </a>
        <a
          href="#projects"
          className="nav-item hover:bg-white/80 hover:text-black"
        >
          Projects
        </a>
        <a
          href="#about"
          className="nav-item hover:bg-white/80 hover:text-black"
        >
          About
        </a>
        <a
          href="#contact"
          className="nav-item hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
