import "./styles/projects.css";
import fullstack from "../assets/img/webp/full-stack-application-min.webp";
import travel from "../assets/img/webp/travel-min.webp";
import tryggtur from "../assets/img/webp/trygg-tur-min.webp";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects-container" id="projects">
      <h2>{t("projects.header")}</h2>
      <div className="project project1">
        <div className="project-content">
          <img src={fullstack} alt="project 1" />
        </div>
        <div className="project-text">
          <h3>{t("projects.project1.title")}</h3>
          <p>
          {t("projects.project1.description")}
          </p>
        </div>
      </div>

      <div className="project project2">
        <div className="project-content">
          <img src={travel} alt="project 2" />
        </div>
        <div className="project-text">
          <h3>{t("projects.project2.title")}</h3>
          <p>
          {t("projects.project2.description")}
          </p>
        </div>
      </div>

      <div className="project project3">
        <div className="project-content">
          <img src={tryggtur} alt="project 2" />
        </div>
        <div className="project-text">
          <h3>{t("projects.project3.title")}</h3>
          <p>
          {t("projects.project3.description")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
