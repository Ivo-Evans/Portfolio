// measures the space between component ref passed in as prop and the bottom of the screen.
import { useState, useEffect } from "react";
import { getWindowDimensions } from "./useWindowDimensions"

function getNavHeight() {
  const nav: HTMLElement | null = document.querySelector(".nav");
  if (!nav) {
    return 0;
  }
  const top = nav?.offsetTop;
  const height = nav?.offsetHeight;
  return top + height;
}

function getHeightMinusNav() {
    const yOffset = getNavHeight()
    const height = getWindowDimensions()?.height
    return height - yOffset;
}

export default function useWindowHeightMinusNav() {
  const [heightMinusNav, setHeightMinusNav] = useState(getHeightMinusNav());

  useEffect(() => {
      function handleResize() {
        setHeightMinusNav(getHeightMinusNav())
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return heightMinusNav
}
