import React from "react";
import "./bio.css";

const self = require("../../../assets/images/self2.jpg");

export default function Bio() {
  return (
    <main className="bio">
      <img src={self} alt="me" />
      <h1>About Me</h1>
      <p>
        I am a full-stack engineer from London and a career changer into tech.
        After an MA in the philosophy of medicine, where I studied the
        relationship between drug addiction and psychological freedom, I decided
        to switch the planned PhD for a bootcamp. Although the masters went
        well, and I was told that, if I applied for a PhD, I would get in, I think computers fit me better. I enjoy this world where words
        mean cleanly defined things, but fit together in complex and
        fascinating ways. I also enjoy how practical programming is.
      </p>
      <p>
        In my spare time I enjoy cycling, climbing and reading novels. I lived
        in Istanbul for a year from 2015 to 2016, including during the build up
        to an attempted coup.
      </p>
      <p>
        I'm currently working as a full-stack engineer at{" "}
        <a href="https://tabled.io/main/">Tabled.io</a> with Vue, Sails.js and
        Postgres.
      </p>
      {/* <p>
        I&apos;m a full-stack engineer looking for opportunities in London. I am
        a graduate of and mentor at the bootcamp Founders and Coders, and am
        currently teaching JavaScript thanks to funding from the GLA (Greater
        London Assembly).
      </p>
      <p>
        In my spare time I like cycling, climbing and coding personal projects.
        I also enjoy science fiction novels, and I lived in Istanbul for a year.
        I have a first at BA level philosophy, and a distinction at MA level.
      </p>
      <p>
        I&apos;m looking forward to joining a progressive team where I can
        continue to learn, and which is <strong>making cool products</strong>.
      </p>
      <p>
        Find my resume{" "}
        <a href={resume} rel="noopener noreferrer" target="_blank">
          here
        </a>{" "}
        or continue on to <Link to="/technologies">my stack</Link>.
      </p> */}
    </main>
  );
}
