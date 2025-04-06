import React from "react";
import sebastian from "../assets/img/SebastianHaugen-min.webp";
import { useTranslation } from "react-i18next";
import "./styles/intro.css";

function Intro() {
  // Using translation from the locales folder to get the text in the correct language
  const { t } = useTranslation();

  return (
    <div className="intro" id="top">
      <div className="intro-text">
        <h1 className="intro-header">{t("intro.hello")}</h1>
        <p>
          {t("intro.description1")}
          <br></br>
          {t("intro.description2")}
        </p>
      </div>
      <div className="intro-picture">
        <img src={sebastian} alt={t("intro.imageAlt")} />
      </div>
    </div>
  );
}

export default Intro;
