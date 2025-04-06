import React, { useEffect } from "react";
import ProjectSection from "../components/ProjectSection";
import startImage from "../assets/img/project1/january-picture.png";
import startImage2 from "../assets/img/project1/january-db-min.webp";
import figmaPrototype from "../assets/img/project1/figma-prototype-min.webp";
import figmaPrototypeLarge from "../assets/img/project1/figma-prototype-large-min.webp";
import dashboard from "../assets/img/project1/dashboard-min.webp";
import cardsManagement from "../assets/img/project1/cards-management-min.webp";
import { useTranslation } from "react-i18next";
import "./styles/Project1.css";

function ProjectPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { t } = useTranslation();

  // Scroll to top when the component mounts
  // This is useful when navigating to this page from another page
  // to ensure the user sees the top of the page first
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="project-container">
      <div className="timeline">
        <div className={`dot ${activeIndex === 0 ? "active" : ""}`} />
        <div className={`dot ${activeIndex === 1 ? "active" : ""}`} />
        <div className={`dot ${activeIndex === 2 ? "active" : ""}`} />
      </div>

      <div className="sections">
        <ProjectSection index={0} setActive={setActiveIndex}>
          <h2>{t("project1.header1.title")}</h2>
          <p>
            {t("project1.header1.p1")}{" "}
            <a
              href="https://www.supereducator.no/product-page/super-assessor"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUPER Assessor
            </a>
            .
          </p>
          <p>{t("project1.header1.p2")}</p>
          <img src={startImage} alt="Skjermbilde av SUPER Assessor" />
          <p>{t("project1.header1.p3")}</p>
          <img src={startImage2} alt="SUPER Assessor database" />
          <p>{t("project1.header1.p4")}</p>
        </ProjectSection>

        <ProjectSection index={1} setActive={setActiveIndex}>
          <h2>{t("project1.header2.title")}</h2>
          <p>{t("project1.header2.p1")}</p>
          <img src={figmaPrototype} alt="Screenshot of the figma prototype" loading="lazy" />
          <img src={figmaPrototypeLarge} alt="Large screenshot of the figma prototype" loading="lazy" />
        </ProjectSection>

        <ProjectSection index={2} setActive={setActiveIndex}>
          <h2>{t("project1.header3.title")}</h2>
          <p>{t("project1.header3.p1")}</p>
          <p>
            {t("project1.header3.listIntro") || "Vi implementerte blant annet:"}
          </p>
          <ul>
            {t("project1.header3.list", { returnObjects: true }).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
          <p>{t("project1.header3.p2")}</p>
          <img
            src={dashboard}
            alt="Dashboard of the Super Assessor website"
            loading="lazy"
          />
          <img
            src={cardsManagement}
            alt="Cards management page of the Super Assessor website"
            loading="lazy"
          />
        </ProjectSection>
      </div>
    </div>
  );
}

export default ProjectPage;
