import React from "react";
import geometricShape from "../assets/img/geometric-shape.png";
import "./styles/intro.css";

function Intro() {
  return (
    <div className="intro" id="top">
      <div className="intro-text">
        <h1 className="intro-header">Hei!</h1>
        <p>
          Jeg er Sebastian, <br></br> en webutvikler som er opptatt av å lage
          moderne, bærekraftige, tilgjengelig og effektive nettsider. Jeg liker å jobbe
          med JavaScript, React, SQL og Python.
        </p>
      </div>
      <div className="intro-art">
        <img
          src={geometricShape}
          alt="Geometric shape art with lines and arrows"
        />
      </div>
    </div>
  );
}

export default Intro;
