import React from "react";
import Icons from "./icons";
import "./icons.css";
import "./NavMobile.css";
import NavItems from "./NavItems"

export default function NavMobile() {
  const [open, setOpen] = React.useState(false);
  const toggleOpenMouse = (e: React.MouseEvent) => {
    if (e.type === "click") {
      setOpen(() => !open);
    }
  };
  const toggleOpenKey = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      setOpen(() => !open);
    }
  };

  return (
    <nav className="nav nav--mobile">
      <div
        className="icon"
        onKeyPress={toggleOpenKey}
        onClick={toggleOpenMouse}
        role="button"
        tabIndex={0}
      >
        <Icons open={open} />
      </div>
      <NavItems open={open} />
      {/* {open && NavLinks} */}
    </nav>
  );
}
