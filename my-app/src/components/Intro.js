import React from "react";
import geometricShape from "../assets/img/geometric-shape.png";
import "./styles/intro.css";

function Intro() {
  const introText =
    "Jeg er Sebastian, en webutvikler som er opptatt av å lage moderne bærekraftige og tilgjengelige nettsteder. Jeg liker å jobbe med JavaScript React SQL og Python.";

  // Split the text by commas and periods
  const textSegments = introText.split(/([,.])/);

  return (
    <div className="intro" id="top">
      <div className="intro-text">
        <h1 className="intro-header">Hei!</h1>
        <p>
          {textSegments.map((segment, index) => (
            <React.Fragment key={index}>
              {segment}
              {segment === "," || segment === "." ? <br /> : null}
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className="intro-art">
        <img src={geometricShape} alt="Geometric shape art with lines and arrows" />
      </div>
    </div>
  );
}

export default Intro;
