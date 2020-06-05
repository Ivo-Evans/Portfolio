import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const location = useLocation();

    const disableIfRequired = (pathname) => {
        console.log(pathname)
        if (location.pathname === pathname) {
            return 'link--disabled'
        }
        return ("")
    }

  return (
    <div>
      <Link className={disableIfRequired("/about")} to="/about">About</Link>
      <Link className={disableIfRequired("/contact")} to="/contact">Contact</Link>
      <Link className={disableIfRequired("/")} to="/">Home</Link>
    </div>
  );
}
