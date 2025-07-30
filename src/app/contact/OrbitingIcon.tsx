import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface OrbitingIconProps {
  radius: number;
  angle: number;
  speed: number;
  children: ReactNode;
  direction?: "clockwise" | "counter";
}

const OrbitingIcon = ({
  radius,
  angle,
  speed,
  children,
  direction = "clockwise",
}: OrbitingIconProps) => {
  const rad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);
  const rotationValue = direction === "clockwise" ? 360 : -360;

  return (
    <motion.div
      animate={{ rotate: rotationValue }}
      transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default OrbitingIcon;
