import React from "react";
import { Icon } from "@iconify/react";
import "./logo.css";
import * as types from "../types"

const Logo = ({ icon, description, height, extraClasses }: types.logo) => {
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
