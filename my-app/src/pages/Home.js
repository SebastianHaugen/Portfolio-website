import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </>
  );
}

export default Home;
