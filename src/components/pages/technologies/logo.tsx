import React from "react";
import { Icon } from "@iconify/react";
import { IconifyIcon } from "@iconify/types";
import "./logo.css";

type LogoType = {
  icon: IconifyIcon;
  description: string;
  height: string;
  extraClasses: string;
};

const Logo = ({ icon, description, height, extraClasses }: LogoType) => {
  return (
    <div className="tech-list__icon-box" tabIndex={0} role="tab">
      <Icon
        className={`tech-list__icon ${extraClasses}`}
        height={height || "3em"}
        align="center, middle, meet"
        icon={icon}
      />
      <p className="tech-list__icon-description">{description}</p>
    </div>
  );
};

Logo.defaultProps = {
  height: "",
  extraClasses: "",
};

export default Logo;
