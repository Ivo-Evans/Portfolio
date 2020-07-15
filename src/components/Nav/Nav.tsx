import React from "react";
import "./Nav.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavDesktop from "./navDesktop/NavDesktop";
import NavMobile from "./navMobile/NavMobile";

export default function Nav() {
  const { width } = useWindowDimensions();
  return <>{width > 950 ? <NavDesktop /> : <NavMobile />}</>;
}
