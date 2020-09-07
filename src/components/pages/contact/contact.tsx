import React from "react";
import "./contact.css";
import Page from "../../Page/Page"

export default function Contact({ classInjection }: ClassInjectionType) {
  return (
    <Page classInjection={classInjection}>
        <div className="contact">
      <div className="contact__banner">
        <h2 className="contact__name">Ivo Evans</h2>
        <h1 className="contact__number">(+44)7922 087726</h1>
        <h2 className="contact__email">ievans.storrie@gmail.com</h2>
      </div>

        </div>
    </Page>
  );
}
