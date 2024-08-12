"use client";

import Hero from "./Hero";
import About from "./About";
import Jobs from "./Jobs";
import Featured from "./Featured";
import Projects from "./Projects";
import Contact from "./Contact";

function Content() {
  return (
    <div id="content">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </div>
  );
}

export default Content;
