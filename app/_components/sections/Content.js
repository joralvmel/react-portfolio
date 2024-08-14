"use client";

import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Featured from "./Featured";
import Projects from "./Projects";
import Contact from "./Contact";

function Content() {
  return (
    <div id="content">
      <Hero />
      <About />
      <Experience />
      <Featured />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
