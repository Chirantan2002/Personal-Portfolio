"use client";
import React from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { CardHeader } from "@/components/CardHeader";
import HobbyTape from "@/components/HobbyTape";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export const AboutSection = () => {
  return (
    <div className="container mx-auto">
      <div className="pb-20 px-5" id="About">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world"
          about="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="w-full gap-16 md:gap-32 md:max-w-4xl mx-auto mt-20 flex flex-col">
          <MotionCard className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books that have shaped my understanding of the world."
            />
            <div className="w-40 mx-auto mt-8 md:mt-0">
              <Image src={BookImage} alt="Book Cover" />
            </div>
          </MotionCard>

          <MotionCard className="h-max p-0 flex flex-col">
            <CardHeader
              title="Beyond the code"
              description="Explore my interests"
              className="px-6 py-6"
            />
            <HobbyTape />
          </MotionCard>
        </div>
      </div>
    </div>
  );
};
