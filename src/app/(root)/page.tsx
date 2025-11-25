"use client";
import { AboutSection } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Footer } from "@/sections/Footer";
import { Academics } from "@/sections/Academics";
import Techstack from "@/sections/Techstack";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectSection />
      <TapeSection />
      <Techstack />
      <Academics />
      <AboutSection />
      <Contact />
      <Footer />
    </div>
  );
}
