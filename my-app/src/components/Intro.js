import React from "react";
import { useTranslation } from "react-i18next";
import SudokuSolver from "./SudokuSolver";
import "./styles/intro.css";

function Intro() {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const section = document.querySelector("#main-content");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="intro-container" id="top">
      <div className="intro-text">
        <h1 className="intro-header">{t("intro.hello")}</h1>
        <p className="intro-lead">{t("intro.lead")}</p>
        <button className="intro-button" onClick={scrollToProjects}>
          {t("intro.cta")}
        </button>
      </div>
      <SudokuSolver label={t("intro.sudokuCaption")} />
    </section>
  );
}

export default Intro;
