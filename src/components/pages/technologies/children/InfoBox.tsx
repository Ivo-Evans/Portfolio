import React from "react";
import { Icon } from "@iconify/react";
import "./InfoBox.css";
import "../../../../animations.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import * as types from "../technologies.types";

export default function InfoBox({
  icon,
  name,
  comment,
  links,
  classModifier,
}: types.infoBox) {
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
            <a key={link.title} href={link.link}>
              {link.title}
            </a>
          </>
        ))}
      </>
    );
  }

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={name} classNames="tech-fade" timeout={200}>
        <article className="technologies__infobox">
          <h2 className="infobox__title">{name}</h2>
          <div className="infobox__icon-box">
            {typeof icon === "object" && (
              <Icon
                className={`infobox__icon ${classModifier}`}
                width="5em"
                icon={icon}
              />
            )}
          </div>
          <p className="infobox__comment"> {comment}</p>
          <p className="infobox__links">{linksElement}</p>
        </article>
      </CSSTransition>
    </SwitchTransition>
  );
}
