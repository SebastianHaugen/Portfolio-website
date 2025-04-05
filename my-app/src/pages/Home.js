import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default Home;
