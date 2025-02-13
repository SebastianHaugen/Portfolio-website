import React from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import FloatingLanguageSwitcher from "../components/FloatingLanguageSwitcher";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="home-page">
        <Nav />
        <Intro />

        <Projects />
        <About />
        <Contact />

        <FloatingLanguageSwitcher />
      </div>

      <Footer />
    </>
  );
}

export default Home;
