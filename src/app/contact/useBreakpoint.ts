import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<"base" | "sm" | "md" | "lg">(
    "base"
  );

  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setBreakpoint("lg");
      else if (window.innerWidth >= 768) setBreakpoint("md");
      else if (window.innerWidth >= 640) setBreakpoint("sm");
      else setBreakpoint("base");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return breakpoint;
}
