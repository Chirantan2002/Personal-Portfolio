import React, { ReactNode } from "react";
import GrainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div>
      <div
        className={twMerge(
          "bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-clip after:outline-2 after:-outline-offset-2 after:outline-pink-300/20  after:rounded-3xl after:pointer-events-none p-6 card-warpper",
          className
        )}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
          }}
        ></div>
        <div className="relative z-10 card-content">{children}</div>
      </div>
    </div>
  );
};
