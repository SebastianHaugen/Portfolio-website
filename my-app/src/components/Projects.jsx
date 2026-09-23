import maze from "../assets/img/webp/maze-min.webp";
import pointcloud from "../assets/img/webp/pointcloud-min.webp";
import fellesmodellen from "../assets/img/fellesmodellen-min.webp";
import fullstack from "../assets/img/webp/full-stack-application-min.webp";
import travel from "../assets/img/webp/travel-min.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles/projects.css";

// Order of projects on the front page. "page" links to a detail page, "links" to external sites
const projects = [
  { key: "project4", img: maze, links: [{ href: "https://github.com/ThomasHeim11/SHREK-HRM", label: "projects.github" }] },
  { key: "project5", img: pointcloud, links: [{ href: "https://github.com/SebastianHaugen/ACIT4030-assignment1", label: "projects.github" }] },
  {
    key: "project3",
    img: fellesmodellen,
    contain: true,
  },
  { key: "project1", img: fullstack },
  {
    key: "project2",
    img: travel,
    links: [
      {
        href: "https://github.com/SebastianHaugen/accessible-travel-website",
        label: "projects.github",
      },
    ],
  },
];

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects-container" id="main-content">
      <h2 className="section-title">{t("projects.header")}</h2>

      <ul className="project-list">
        {projects.map(({ key, img, page, contain, links = [] }) => {
          const tags = t(`projects.${key}.tags`, { returnObjects: true });
          return (
            <li className="project" key={key}>
              <img
                className={contain ? "contain" : undefined}
                src={img}
                alt={t(`projects.${key}.imageAlt`)}
                loading="lazy"
              />
              <div className="project-text">
                <h3>{t(`projects.${key}.title`)}</h3>
                <p>{t(`projects.${key}.short`)}</p>
                {Array.isArray(tags) && (
                  <ul className="project-tags">
                    {tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
                {(page || links.length > 0) && (
                  <div className="project-links">
                    {page && <Link to={page}>{t("read.more")}</Link>}
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(l.label)}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
