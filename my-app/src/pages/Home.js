import React from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import "./styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <Nav />
      <Intro />

      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
