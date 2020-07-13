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
        <em>Project:</em>
        <a href={link.link}>{link.title}</a>
      </>
    );
  } else {
    linksElement = (
      <>
        <em>Projects:</em>
        {links.map((link) => <a href={link.link}>{link.title}</a>).join(" ")}
      </>
    );
  }
  return (
    <>
      <h2 className="infobox__title">{name}</h2>
      <Icon
        className={`infobox__icon ${classModifier}`}
        width={size || "5em"}
        icon={icon}
      />
      <p className="infobox__comment"> {comment}</p>
      <p className="infobox__links">{linksElement}</p>
    </>
  );
}
