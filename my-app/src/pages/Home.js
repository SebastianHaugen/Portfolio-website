import React from "react";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import FloatingLanguageSwitcher from "../components/FloatingLanguageSwitcher";

function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <Contact />

      <FloatingLanguageSwitcher />
    </>
  );
}

export default Home;
