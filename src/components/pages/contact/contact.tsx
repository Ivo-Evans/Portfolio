import React from "react";
import Nav from "../../Nav/Nav";
import "./contact.css";
import { ClassInjectionType } from "../../classInjectionType"

export default function Contact({ classInjection }: ClassInjectionType) {
  return (
    <div className={classInjection}>
      <Nav />
      <div className="contact__banner">
        <h2 className="contact__name">Ivo Evans</h2>
        <h1>(+44)7922 087726</h1>
        <h2 className="contact__email">ievans.storrie@gmail.com</h2>
      </div>
    </div>
  );
}
