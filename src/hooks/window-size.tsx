import { useState, useEffect } from "react";

export default function useWindowSize() {
  const hasWindow = typeof window !== "undefined";

  const getWindowSize = () => {
    const w = hasWindow ? window.innerWidth : 0;
    const h = hasWindow ? window.innerHeight : 0;
    return {
      w,
      h,
    };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const handleResize = () => {
    setWindowSize(getWindowSize());
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowSize;
}
