import React, { PropsWithChildren } from "react";

export const StarImage = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex animate-spin [animation-duration:30s] size-[800px]">
      <div
        className=""
        style={{
          transform: `rotate(${rotation}deg)`,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div className="inline-flex animate-spin [animation-duration:10s]" style={{transform: `rotate(${rotation * -1}deg)`}}>
          {children}
        </div>
      </div>
    </div>
  );
};
