import React from "react";
import { Link } from "react-router-dom";
import "./bio.css";

const self = require("../../../assets/images/self2.jpg");

export default function Bio() {
  return (
    <main className="bio">
      <img src={self} alt="me" />
      <h1>About Me</h1>
      <p>
        I'm a full-stack engineer from London and a career changer into tech.
        After an MA in the philosophy of medicine, where I studied the
        relationship between drug addiction and psychological freedom, I decided
        to switch the planned PhD for a bootcamp. Although the masters went
        well, I think computers fit me better. I enjoy this world where words
        mean cleanly defined things, but fit together in complex and
        fascinating ways. I also enjoy how practical programming is.
      </p>
      <p>
        In my spare time I enjoy cycling, climbing and reading novels. I lived
        in Istanbul for a year from 2015 to 2016, including during the build up
        to an attempted coup.
      </p>
      <p>
        I'm currently on contract as a full-stack engineer at <a href="https://www.tortoisemedia.com/">Tortoise Media</a>.
      </p>
      <p><Link to="technologies">Read on to learn about the tech I use</Link>.</p>
    </main>
  );
}
