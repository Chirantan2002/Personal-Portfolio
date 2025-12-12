import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuSquareTerminal } from "react-icons/lu";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type FooterLink = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>; // a React component (e.g., from lucide-react or your own icon)
  hoverColor: string;
};

const footerLinks: FooterLink[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/chirantan2002/",
    icon: FaLinkedin,
    hoverColor: "hover:text-blue-500",
  },
  {
    title: "Twitter",
    href: "https://x.com/Chirantan2002",
    icon: FaTwitter,
    hoverColor: "hover:text-sky-400",
  },
  {
    title: "Github",
    href: "https://github.com/Chirantan2002",
    icon: FaGithub,
    hoverColor: "hover:text-gray-300",
  },
  {
    title: "LeetCode",
    href: "https://leetcode.com/u/MoonJar_007/",
    icon: LuSquareTerminal,
    hoverColor: "hover:text-yellow-400",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1200px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container mx-auto">
        <div className="border-t border-white/20 text-sm flex flex-col md:flex-row md:justify-between md:p-6 items-center gap-8">
          <div className={`${spaceGrotesk.className} text-white/40`}>
            &copy; {new Date().getFullYear()} All rights reserved by Chirantan Biswas
          </div>
          <nav className="flex flex-row md:flex-row items-center gap-8 pb-4">
            {footerLinks.map(({ title, href, icon: Icon, hoverColor }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                className={`inline-flex place-items-center space-x-1.5`}
              >
                <Icon
                  className={`h-6 w-6 text-amber-50 transition duration-300 ease-in-out ${hoverColor}`}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
