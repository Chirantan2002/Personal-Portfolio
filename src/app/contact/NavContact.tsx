import React from "react";
import { motion } from "framer-motion";
import { BiArrowToLeft } from "react-icons/bi";

const HOME_PAGE_LINK = "https://chirantan-portfolio.vercel.app";

const NavContact = () => {
  return (
    <div className="container mx-auto px-4">
      <nav className="flex items-center justify-start py-2 border-b border-white/15">
        <motion.a
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.4}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          href={HOME_PAGE_LINK}
          className="mt-8 flex items-center justify-center rounded bg-white/15 border-2 border-white/50 hover:border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 opacity-[0.7] hover:opacity-[1] px-3 py-2 gap-2 font-semibold transition ease-in-out duration-300 backdrop-blur-sm"
        >
          <BiArrowToLeft className="size-5" />
          Home
        </motion.a>
      </nav>
    </div>
  );
};

export default NavContact;
