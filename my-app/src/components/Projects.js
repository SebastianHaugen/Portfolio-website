import fullstack from "../assets/img/webp/full-stack-application-min.webp";
import travel from "../assets/img/webp/travel-min.webp";
import fellesmodellen from "../assets/img/fellesmodellen.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import gitHub from "../assets/img/github-mark.png";
import "./styles/projects.css";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects-container" id="main-content">
      <h2>{t("projects.header")}</h2>

      {/* Project 1 - SUPER Assessor */}
      <div className="project">
        <div className="project-content">
          <img src={fullstack} alt={t("projects.project1.title")} />
        </div>
        <div className="project-text">
          <h3>{t("projects.project1.title")}</h3>
          <p>{t("projects.project1.summary")}</p>
          <Link to="/project/1" className="read-more-link">
            {t("read.more")}
          </Link>{" "}
          {/* Link to Project 1 detail page */}
        </div>
      </div>

      {/* Project 2 - Travel Website */}
      <div className="project">
        <div className="project-content">
          <img src={travel} alt={t("projects.project2.title")} />

          {/* GitHub link under image */}
          <div className="project-github-link">
            <a
              href="https://github.com/SebastianHaugen/accessible-travel-website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View project on GitHub"
            >
              <img src={gitHub} alt="GitHub icon" className="github-icon" />
            </a>
          </div>
        </div>

        <div className="project-text">
          <h3>{t("projects.project2.title")}</h3>
          <p>{t("projects.project2.summary")}</p>
          <Link to="/project/2" className="read-more-link">
            {t("read.more")}
          </Link>
        </div>
      </div>

      {/* Project 3 - Bachelor Project */}
      <div className="project">
        <div className="project-content">
          <img src={fellesmodellen} alt={t("projects.project3.title")} />
        </div>
        <div className="project-text">
          <h3>{t("projects.project3.title")}</h3>
          <p>{t("projects.project3.summary")}</p>
          <Link to="/project/3" className="read-more-link">
            {t("read.more")}
          </Link>{" "}
          {/* Link to Project 3 detail page */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
