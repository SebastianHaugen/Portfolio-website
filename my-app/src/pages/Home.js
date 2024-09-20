import React from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import "./styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <Nav />
      <Intro />

      <Projects />
    </div>
  );
}

export default Home;
