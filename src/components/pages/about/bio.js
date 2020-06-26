import React from "react";
import resume from "../../../resume.pdf";

export default function Bio() {
  return (
    <div className="bio">
      <h1>Hi.</h1>
      <p>
        I&apos;m Ivo Evans, a full-stack engineer looking for opportunities in
        London. I am a graduate of and mentor at the bootcamp Founders and
        Coders, and am currently teaching JavaScript to jobseekers, thanks to
        funding from the GLA (Greater London Assembly).
      </p>
      <p>
        In my spare time I like cycling, climbing and coding. I also enjoy
        science fiction novels, and I lived in Istanbul, Turkey, for a year. I
        have a background in philosophy, which I studied successfully to
        postgraduate level before discovering my true passion for programming. I
        believe that my background in philosophy, including my training in
        formal logic, prepared me well for what I do now.
      </p>
      <p>
        I&apos;m looking forward to joining a progressive team where I can
        continue to learn and grow, and which is{" "}
        <strong>making cool products</strong>.
      </p>
      <p>
        You can find my resume{" "}
        <a href={resume} rel="noopener noreferrer" target="_blank">
          here
        </a>
      </p>
    </div>
  );
}
