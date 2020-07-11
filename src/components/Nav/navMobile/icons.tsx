import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../../../animations.css";
import "./icons.css";

type IconProps = { open: boolean};

export default function Icons({ open }: IconProps) {
  return (
    <SwitchTransition mode="in-out">
      <CSSTransition key={String(open)} classNames="fade" timeout={200}>
        {open ? <p>X</p> : <p>☰</p>}
      </CSSTransition>
    </SwitchTransition>
  );
}
