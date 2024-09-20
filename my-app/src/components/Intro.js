import React from "react";
import "./styles/intro.css";
import geometricShape from "../assets/img/geometric-shape.png";

function Intro() {
  const introText =
    "I'm Sebastian, a web developer passionate about creating modern, sustainable and accessible websites. I enjoy working with JavaScript React SQL and Python.";

  // Split the text by commas and periods
  const textSegments = introText.split(/([,.])/);

  return (
    <div className="intro">
      <div className="intro-text">
        <h1 className="intro-header">Hello!</h1>
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
        <img src={geometricShape} alt="Geometric shape art" />
      </div>
    </div>
  );
}

export default Intro;
