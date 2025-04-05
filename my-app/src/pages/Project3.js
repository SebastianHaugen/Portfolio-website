import React, { useEffect } from "react";
import ProjectSection from "../components/ProjectSection";
import landingPage from "../assets/img/project3/landing-page.png";
import reportPage from "../assets/img/project3/report-page.png";
import coursePage from "../assets/img/project3/courses.png";
import figmaPrototype from "../assets/img/project3/figma-prototype.png";
import Fellesmodellen from "../assets/img/fellesmodellen.png";
import { useTranslation } from "react-i18next";
import "./styles/Project1.css";

function Project3() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="project-container">
      <div className="timeline">
        <div className={`dot ${activeIndex === 0 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 1 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 2 ? "active" : ""}`}></div>
      </div>

      <div className="sections" id="main-content">
        <ProjectSection index={0} setActive={setActiveIndex}>
          <h2>{t("project3.header1.title")}</h2>
          <p>{t("project3.header1.p1")}</p>
          <p>{t("project3.header1.p2")}</p>
          <p>{t("project3.header1.p3")}</p>
          <img src={Fellesmodellen} alt="Fellesmodellen laget av HelseInn" />
        </ProjectSection>

        <ProjectSection index={1} setActive={setActiveIndex}>
          <h2>{t("project3.header2.title")}</h2>
          <p>{t("project3.header2.p1")}</p>
          <p>{t("project3.header2.p2")}</p>
          <img src={figmaPrototype} alt="Prototype av figma" />
          <img src={reportPage} alt="Interaksjonsflyt for kurs" />
          <p>{t("project3.header2.p3")}</p>
          <img src={landingPage} alt="Prototype av e-læringsplattform" />
          <p>{t("project3.header2.p4")}</p>
        </ProjectSection>

        <ProjectSection index={2} setActive={setActiveIndex}>
          <h2>{t("project3.header3.title")}</h2>
          <p>{t("project3.header3.p1")}</p>
          <p>{t("project3.header3.p2")}</p>
          <img src={coursePage} alt="Skjermbilde fra e-læringsmodul" />
        </ProjectSection>
      </div>
    </div>
  );
}

export default Project3;
