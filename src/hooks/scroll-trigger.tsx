import { useState, useEffect } from "react";
import useWindowSize from "./window-size";

interface Position {
  x: number;
  y: number;
}

export default function useScrollTrigger() {
  const { w, h } = useWindowSize();

  function getTrigger(elem: HTMLDivElement | null) {
    const hasWindow = typeof window !== "undefined";
    const hasElement = typeof elem != "undefined";

    const scrollPosition = {
      x: hasWindow ? window.pageXOffset : 0,
      y: hasWindow ? window.pageYOffset : 0,
    };
    const offsetTop = hasElement && elem ? elem.offsetTop : 0;
    const offsetHeight = hasElement && elem ? elem.offsetHeight : 0;

    const position = {
      x: scrollPosition.x,
      y: scrollPosition.y,
      trigger:
        scrollPosition.y >= offsetTop - h &&
        scrollPosition.y <= offsetTop + offsetHeight / 2,
    };

    return position;
  }

  return getTrigger;
}
