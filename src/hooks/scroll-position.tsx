import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const hasWindow = typeof window !== "undefined";

  function getScrollPosition() {
    const x = hasWindow ? window.pageXOffset : 0;
    const y = hasWindow ? window.pageYOffset : 0;
    return {
      x,
      y,
    };
  }

  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  const handleScroll = () => {
    setScrollPosition(getScrollPosition());
  };

  useEffect(() => {
    if (hasWindow) {
      window.onscroll = () => {
        handleScroll();
      };
    }
  }, [hasWindow]);

  return scrollPosition;
}
