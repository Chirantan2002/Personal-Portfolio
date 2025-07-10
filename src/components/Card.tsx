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
          "bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:-outline-offset-2 after:outline-white/20 after:rounded-3xl after:pointer-events-none p-6",
          className
        )}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
          }}
        ></div>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};
