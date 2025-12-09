import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import React from "react";
import LetterGlitch from "@/components/LetterGlitch";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiClerk,
  SiPrisma,
} from "react-icons/si";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import FallingText from "@/components/FallingText";
import { Space_Grotesk } from "next/font/google";
import { Badge } from "@/components/ui/badge";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
  },
  { node: <FaNodeJs />, title: "Node.js" },
  {
    node: <SiMongodb />,
    title: "MongoDB",
  },
  {
    node: <VscVscode />,
    title: "VSCode",
  },
  {
    node: <FaHtml5 />,
    title: "HTML5",
  },
  {
    node: <FaCss3Alt />,
    title: "CSS3",
  },
  {
    node: <FaPython />,
    title: "Python",
  },
  {
    node: <FaGithub />,
    title: "GitHub",
  },
  {
    node: <FaGitAlt />,
    title: "Git",
  },
  {
    node: <SiClerk />,
    title: "Clerk",
  },
  {
    node: <SiPrisma />,
    title: "Prisma",
  },
  {
    node: <BsBrowserChrome />,
    title: "Chrome",
  },
];

const Techstack = () => {
  return (
    <div className="px-4 my-32 md:my-24">
      <main className="container mx-auto">
        <div>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Technoligies & tools that I use"
            about="Technologies that fuel my creativity & drives my work"
          />
        </div>
        <Card className="p-2 relative overflow-hidden w-full max-w-4xl mx-auto">
          {/* glitchy text */}
          <div className="absolute inset-0 w-full h-full">
            <LetterGlitch
              glitchSpeed={50}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
              glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
            />
          </div>
          {/* Tech-stack-logos-tape-animation */}
          <div className="py-8 md:py-12 [mask-image:linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
            <LogoLoop
              logos={techLogos}
              speed={80}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              ariaLabel="Tech-stack-logos"
            />
          </div>
          {/* falling-text-only-for-desktop(medium screens) */}
          <div
            className={`${spaceGrotesk.className} h-60 max-w-4xl w-full hidden md:block overflow-hidden`}
          >
            <FallingText
              text={`I work with a modern, performance driven tech stack that helps me build fast, scalable, and user focused web applications`}
              highlightWords={[
                "modern",
                "fast",
                "scalable",
                "user-focused",
                "performance-driven",
                "tech stack",
                "web",
              ]}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
              wireframes={false}
              backgroundColor="transparent"
              trigger="hover"
              gravity={0.56}
            />
          </div>
          {/* badges-for-mobile-view */}
          <div className={`${spaceGrotesk.className} block md:hidden`}>
            <main className="flex flex-1 space-x-2 space-y-1 items-center justify-center flex-wrap p-2">
              <Badge className="bg-[#797979]/50 text-white">
                <span className="tracking-wide text-gray-100">NextJs</span>
              </Badge>
              <Badge className="bg-[#00d8fe]/50 text-white">
                <span className="tracking-wide text-gray-100">React</span>
              </Badge>
              <Badge className="bg-[#1aadb0]/50 text-white">
                <span className="tracking-wide text-gray-100">TailwindCSS</span>
              </Badge>
              <Badge className="bg-[#0077c6]/50 text-white">
                <span className="tracking-wide text-gray-100">Typescript</span>
              </Badge>
              <Badge className="bg-[#7ec729]/50 text-white">
                <span className="tracking-wide text-gray-100">NodeJs</span>
              </Badge>
              <Badge className="bg-[#03519a]/50 text-white">
                <span className="tracking-wide text-gray-100">C++</span>
              </Badge>
              <Badge className="bg-[#efd91c]/50 text-white">
                <span className="tracking-wide text-gray-100">Javascript</span>
              </Badge>
              <Badge className="bg-[#892371]/50 text-white">
                <span className="tracking-wide text-gray-100">Convex</span>
              </Badge>
              <Badge className="bg-[#6c34f7]/50 text-white">
                <span className="tracking-wide text-gray-100">Clerk</span>
              </Badge>
              <Badge className="bg-[#01344b]/50 text-white">
                <span className="tracking-wide text-gray-100">Prisma</span>
              </Badge>
              <Badge className="bg-[#36709f]/50 text-white">
                <span className="tracking-wide text-gray-100">Python</span>
              </Badge>
              <Badge className="bg-[#1197f1]/50 text-white">
                <span className="tracking-wide text-gray-100">VsCode</span>
              </Badge>
            </main>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Techstack;
