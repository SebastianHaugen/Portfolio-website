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

      {/* Project 1 - SUPER Assessor */}
      <div className="project">
        <div className="project-content">
          <img src={fullstack} alt={t("projects.project1.title")} />
        </div>
        <div className="project-text">
          <h3>{t("projects.project1.title")}</h3>
          <p>{t("projects.project1.summary")}</p>

          <h4>{t("projects.achievements")}</h4>
          <ul>
            {t("projects.project1.achievements", { returnObjects: true }).map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>

          <h4>{t("projects.whatIlearned")}</h4>
          <ul>
            {t("projects.project1.learnings", { returnObjects: true }).map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
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

          <h4>{t("projects.achievements")}</h4>
          <ul>
            {t("projects.project2.achievements", { returnObjects: true }).map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>

          <h4>{t("projects.whatIlearned")}</h4>
          <ul>
            {t("projects.project2.learnings", { returnObjects: true }).map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
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

          <h4>{t("projects.achievements")}</h4>
          <ul>
            {t("projects.project3.achievements", { returnObjects: true }).map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>

          <h4>{t("projects.whatIlearned")}</h4>
          <ul>
            {t("projects.project3.learnings", { returnObjects: true }).map((learning, index) => (
              <li key={index}>{learning}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
