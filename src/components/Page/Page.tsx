import React from "react";
import Nav from "../Nav/Nav";

import "./Page.css";

type PageType = ClassInjectionType & {
    children: React.ReactNode | React.ReactNode[];
}

export default function Page ({ classInjection, children }: PageType) {
  return (
    <div className={classInjection}>
      <Nav />
      <main className="page__main">{children}</main>
    </div>
  );
}
