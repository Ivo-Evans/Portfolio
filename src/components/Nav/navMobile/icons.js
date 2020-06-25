import React from "react";
import PropTypes from "prop-types";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Icons({ open }) {
  return (
    <SwitchTransition mode="in-out">
      <CSSTransition key={open} classNames="fade" timeout={300}>
        {open ? <p>X</p> : <p>☰</p>}
      </CSSTransition>
    </SwitchTransition>
  );
}

Icons.propTypes = {
  open: PropTypes.bool.isRequired,
};
