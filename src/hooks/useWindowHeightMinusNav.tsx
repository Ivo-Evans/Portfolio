// measures the space between component ref passed in as prop and the bottom of the screen.
import { useEffect } from "react";
import { getWindowDimensions } from "./useWindowDimensions";

function getNavHeight() {
  const nav: HTMLElement | null = document.querySelector(".nav");
  if (!nav) {
    // if you don't know, guess (mobile doesn't matter much because entries will
    // in practice be >100vh, and this px sets a min-height)
    // Also, once dom content is loaded, this value will be updated.
    return 145;
  }
  const top = nav?.offsetTop;
  const height = nav?.offsetHeight;
  return top + height;
}

function getHeightMinusNav() {
  const yOffset = getNavHeight();
  const height = getWindowDimensions()?.height;
  return height - yOffset;
}

export default function useWindowHeightMinusNav(setter: Function) {
  useEffect(() => {
    const computeFinalSize = () => setter(getHeightMinusNav());
    // call once on render, for, e.g., page transitions
    computeFinalSize();
    // call again in case of page refresh or page reload
    window.addEventListener("DOMContentLoaded", computeFinalSize);
    window.addEventListener("resize", computeFinalSize);
    return () => {
      window.removeEventListener("DOMContentLoaded", computeFinalSize);
      window.removeEventListener("resize", computeFinalSize);
    };
  }, [setter]);
}
