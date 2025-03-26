import "./styles/projects.css";
import fullstack from "../assets/img/webp/full-stack-application-min.webp";
import travel from "../assets/img/webp/travel-min.webp";
import tryggtur from "../assets/img/webp/trygg-tur-min.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects-container" id="projects">
      <h2>{t("projects.header")}</h2>

      {/* Project 1 - SUPER Assessor */}
      <div className="project">
        <div className="project-content">
          <img src={fullstack} alt={t("projects.project1.title")} />
        </div>
        <div className="project-text">
          <h3>{t("projects.project1.title")}</h3>
          <p>{t("projects.project1.summary")}</p>
          <Link to="/project1" className="read-more-link">
            {t("read.more")}
          </Link> {/* Link to Project 1 detail page */}
        </div>
      </div>

      {/* Project 2 - Travel Website */}
      <div className="project">
        <div className="project-content">
          <img src={travel} alt={t("projects.project2.title")} />
        </div>
        <div className="project-text">
          <h3>{t("projects.project2.title")}</h3>
          <p>{t("projects.project2.summary")}</p>
          <Link to="/project2" className="read-more-link">
            {t("read.more")}
          </Link> {/* Link to Project 2 detail page */}
        </div>
      </div>

      {/* Project 3 - TryggTur */}
      <div className="project">
        <div className="project-content">
          <img src={tryggtur} alt={t("projects.project3.title")} />
        </div>
        <div className="project-text">
          <h3>{t("projects.project3.title")}</h3>
          <p>{t("projects.project3.summary")}</p>
          <Link to="/project1" className="read-more-link">
            {t("read.more")}
          </Link> {/* Link to Project 3 detail page */}
        </div>

      </div>
    </div>
  );
}

export default Projects;
