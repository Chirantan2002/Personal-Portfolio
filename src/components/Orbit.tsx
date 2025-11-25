"use client";
import React, { PropsWithChildren } from "react";

type OrbitProps = PropsWithChildren<{
  size: number;
  rotation?: number;
}>;

const Orbit: React.FC<OrbitProps> = ({ children, size, rotation = 0 }) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div className="animate-spin" style={{ animationDuration: "30s" }}>
        <div
          className="flex items-start justify-start"
          style={{
            height: `${size}px`,
            width: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className="h-max w-max animate-spin transition-all"
            style={{ animationDuration: "10s", transitionTimingFunction: "ease-in-out" }}
          >
            <div
              className="inline-flex animate-pulse transition-all"
              style={{
                transform: `rotate(${-rotation}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orbit;
