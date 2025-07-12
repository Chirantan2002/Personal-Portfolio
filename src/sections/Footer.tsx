import React from "react";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
// import GithubFill from "@/assets/icons/github-fill.svg";
// import LinkedInIcon from "@/assets/icons/linkedin-box-line.svg";
// import TwitterIcon from "@/assets/icons/twitter-x-line.svg";
// import TerminalIcon from "@/assets/icons/terminal-box-line.svg";
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal } from "react-icons/fa";

type FooterLink = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>; // a React component (e.g., from lucide-react or your own icon)
  hoverColor: string;
};

const footerLinks: FooterLink[] = [
  {
    title: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
    hoverColor: "hover:text-blue-500",
  },
  {
    title: "Twitter",
    href: "#",
    icon: FaTwitter,
    hoverColor: "hover:text-sky-400",
  },
  {
    title: "Github",
    href: "#",
    icon: FaGithub,
    hoverColor: "hover:text-gray-300",
  },
  {
    title: "LeetCode",
    href: "#",
    icon: FaTerminal,
    hoverColor: "hover:text-yellow-400",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container mx-auto">
        <div className="border-t border-white/20 text-sm flex flex-col md:flex-row md:justify-between md:p-6 items-center gap-8">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved
          </div>
          <nav className="flex flex-row md:flex-row items-center gap-8 pb-4">
            {footerLinks.map(({ title, href, icon: Icon, hoverColor }) => (
              <a
                key={title}
                href={href}
                className={`inline-flex place-items-center space-x-1.5`}
              >
                <Icon
                  className={`h-6 w-6 text-amber-50 transition duration-300 ease-in-out ${hoverColor}`}
                />
                {/* <span className={`text-white/70 tiktok-sans-semibold ${hoverColor}`}>{title}</span> */}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
