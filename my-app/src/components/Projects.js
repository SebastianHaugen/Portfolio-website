import "./styles/projects.css";
import fullstack from "../assets/img/webp/full-stack-application-min.webp";
import travel from "../assets/img/webp/travel-min.webp";
import tryggtur from "../assets/img/webp/trygg-tur-min.webp";
import { useTranslation } from "react-i18next";
import ProjectDescription from "./ProjectDescription";
import githubLogo from "../assets/img/github-mark.png";
import figmaLogo from "../assets/img/figma-logo.png";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects-container" id="projects">
      <h2>{t("projects.header")}</h2>

      <div className="project project1">
        <div className="project-content">
          <img src={fullstack} alt="project 1" />
          <div className="project-links">
            <a
              href="https://github.com/yourusername/fullstack-project"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github"
            >
              <img src={githubLogo} alt="GitHub logo" className="link-logos" />
            </a>
          </div>
        </div>
        <div className="project-text">
          <h3>{t("projects.project1.title")}</h3>
          <p>
            <ProjectDescription text={t("projects.project1.description")} />
          </p>
        </div>
      </div>

      <div className="project project2">
        <div className="project-content">
          <img src={travel} alt="project 2" />
          <div className="project-links">
            <a
              href="https://github.com/SebastianHaugen/accessible-travel-website"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github"
            >
              <img src={githubLogo} alt="GitHub logo" className="link-logos" />
            </a>
          </div>
        </div>
        <div className="project-text">
          <h3>{t("projects.project2.title")}</h3>
          <p>
            <ProjectDescription text={t("projects.project2.description")} />
          </p>
        </div>
      </div>

      <div className="project project3">
        <div className="project-content">
          <img src={tryggtur} alt="project 3" />
          <div className="project-links">
            <a
              href="https://www.figma.com/proto/Js7bnsKBGFTIpgKS4fBlVr/Trygg-tur?node-id=126-244&starting-point-node-id=126%3A244&t=x2BRbtuiWQ6lLFGV-1"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link figma"
            >
               <img src={figmaLogo} alt="Figma logo" className="link-logos" />
            </a>
          </div>
        </div>
        <div className="project-text">
          <h3>{t("projects.project3.title")}</h3>
          <p>
            <ProjectDescription text={t("projects.project3.description")} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
