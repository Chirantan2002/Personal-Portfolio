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
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org" },
  {
    node: <SiMongodb />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <VscVscode />,
    title: "VSCode",
    href: "https://code.visualstudio.com",
  },
  {
    node: <FaHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    node: <FaCss3Alt />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    node: <FaPython />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <FaGithub />,
    title: "GitHub",
    href: "https://github.com/Chirantan2002",
  },
  {
    node: <FaGitAlt />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiClerk />,
    title: "Clerk",
    href: "https://clerk.dev",
  },
  {
    node: <SiPrisma />,
    title: "Prisma",
    href: "https://www.prisma.io",
  },
  {
    node: <BsBrowserChrome />,
    title: "Chrome",
    href: "https://www.google.com/chrome",
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
        <Card className="p-0  overflow-clip">
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
            className={`${spaceGrotesk.className} h-60 w-full hidden md:block overflow-hidden`}
          >
            <FallingText
              text={`I work with a modern, performance-driven tech stack that helps me build fast, scalable, and user-focused web applications`}
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
            <main className="flex items-center justify-center flex-wrap p-2">
              <Badge className="bg-gray-900 text-white">NextJs</Badge>
              <Badge className="bg-gray-900 text-white">React</Badge>
              <Badge className="bg-gray-900 text-white">TailwindCSS</Badge>
              <Badge className="bg-gray-900 text-white">Typescript</Badge>
              <Badge className="bg-gray-900 text-white">NodeJs</Badge>
              <Badge className="bg-gray-900 text-white">C++</Badge>
              <Badge className="bg-gray-900 text-white">Javascript</Badge>
              <Badge className="bg-gray-900 text-white">Convex</Badge>
              <Badge className="bg-gray-900 text-white">Clerk</Badge>
              <Badge className="bg-gray-900 text-white">Prisma</Badge>
              <Badge className="bg-gray-900 text-white">Python</Badge>
              <Badge className="bg-gray-900 text-white">VsCode</Badge>
            </main>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Techstack;
