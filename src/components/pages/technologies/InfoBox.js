/* eslint-disable react/prop-types */
import React from "react";
import { Icon } from "@iconify/react";
import "./InfoBox.css";

export default function InfoBox({
  icon,
  name,
  comment,
  links,
  size,
  classModifier,
}) {
  let linksElement;
  if (!links) {
    linksElement = null;
  } else if (links.length === 1) {
    const link = links[0];
    linksElement = (
      <>
        <em>A project: </em>
        <a href={link.link}>{link.title}</a>
      </>
    );
  } else {
    linksElement = (
      <>
        <em>Some projects: </em>
        {links.map((link, index) => (
          <>
            {!!index && " | "}
            <a href={link.link}>{link.title}</a>
          </>
        ))}
      </>
    );
  }
  return (
    <>
      <h2 className="infobox__title">{name}</h2>
      <div className="infobox__icon-box">
        <Icon
          className={`infobox__icon ${classModifier}`}
          width={size || "5em"}
          icon={icon}
        />
      </div>
      <p className="infobox__comment"> {comment}</p>
      <p className="infobox__links">{linksElement}</p>
    </>
  );
}
