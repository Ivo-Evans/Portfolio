import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const location = useLocation();

    // interesting: this is a different design pattern to in AnimatedSwitch. Instead of mapping over and recreating elements in AnimatedSwitch, you could also have kept a list of pages to see which one was current, hardcoded each Link, and then done a conditional in className
    const disableIfRequired = (pathname) => {
        if (location.pathname === pathname) {
            return 'link--disabled'
        }
        return ("")
    }

  return (
    <div className="nav">
      <Link className={disableIfRequired("/") + " home"} to="/">Home</Link>
      <div className="nav__right">
          <Link className={disableIfRequired("/about")} to="/about">About me</Link>
          <Link className={disableIfRequired("/work")} to="/work">My work</Link>
          <Link className={disableIfRequired("/contact")} to="/contact">Contact</Link>
      </div>
    </div>
  );
}
