import React from "react";
import Icons from "./icons";
import "./burger.css";

export default function NavMobile() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = (e) => {
    if (e.type === "click" || e.key === " " || e.key === "Enter") {
      setOpen(() => !open);
    }
  };

  return (
    <div className="nav nav--mobile">
      <div
        onKeyPress={toggleOpen}
        onClick={toggleOpen}
        role="button"
        tabIndex={0}
      >
        <Icons open={open} />
      </div>
      {/* {open ? NavLinks : null} */}
    </div>
  );
}
