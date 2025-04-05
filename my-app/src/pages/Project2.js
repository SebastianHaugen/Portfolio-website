import React, { useEffect } from "react";
import ProjectSection from "../components/ProjectSection";
import travelStart from "../assets/img/project2/landing-page.png";
import travelSurvey from "../assets/img/project2/video-page.png";
import travelProto from "../assets/img/project2/budget-page.png";
import figmaPrototype from "../assets/img/project2/figma-prototype.jpg";
import mobileScreen from "../assets/img/project2/mobile-screen.png";
import gitHub from "../assets/img/github-mark.png";
import { useTranslation } from "react-i18next";
import "./styles/Project1.css";

function Project2Page() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="project-container" id="main-content">
      {/* Timeline */}
      <div className="timeline">
        <div className={`dot ${activeIndex === 0 ? "active" : ""}`} />
        <div className={`dot ${activeIndex === 1 ? "active" : ""}`} />
        <div className={`dot ${activeIndex === 2 ? "active" : ""}`} />
      </div>

      {/* Sections */}
      <div className="sections">
        <ProjectSection index={0} setActive={setActiveIndex}>
          <h2>{t("project2.header1.title")}</h2>
          <p>{t("project2.header1.p1")}</p>
          <img src={travelStart} alt="Skjermbilde av landingsside" />
          <img src={travelSurvey} alt="Skjermbilde fra spørreundersøkelse" />
        </ProjectSection>

        <ProjectSection index={1} setActive={setActiveIndex}>
          <h2>{t("project2.header2.title")}</h2>
          <p>{t("project2.header2.p1")}</p>
          <img src={figmaPrototype} alt="Figma prototype av nettsiden" />
          <p>{t("project2.header2.p2")}</p>
          <img src={travelProto} alt="Figma prototype av reiseside" />
        </ProjectSection>

        <ProjectSection index={2} setActive={setActiveIndex}>
          <h2>{t("project2.header3.title")}</h2>
          <p>{t("project2.header3.p1")}</p>
          <p>{t("project2.header3.p2")}</p>
          <ul>
            {t("project2.header3.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
          <div className="project-github-link">
            <a
              href="https://github.com/SebastianHaugen/accessible-travel-website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on GitHub"
            >
              <img
                src={gitHub}
                alt="GitHub icon"
                className="github-icon"
              />
            </a>
          </div>
          <img src={mobileScreen} alt="Example of mobile screen view" />
        </ProjectSection>
      </div>
    </div>
  );
}

export default Project2Page;
