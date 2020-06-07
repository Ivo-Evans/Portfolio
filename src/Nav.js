import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import resume from './pages/resume.pdf'

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
      <Link className={disableIfRequired("/") + " nav__left"} to="/">Home</Link>
      <div className="nav__right">
          <Link className={disableIfRequired("/about")} to="/about">About me</Link>
          <Link className={disableIfRequired("/work")} to="/work">My work</Link>
          <a target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ivo-Evans">GitHub</a>
      </div>
    </div>
  );
}
