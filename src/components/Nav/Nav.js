import React from "react";
import "./Nav.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Nav() {
  const { width } = useWindowDimensions();
  return <>{width > 900 ? <NavDesktop /> : <NavMobile />}</>;
}
