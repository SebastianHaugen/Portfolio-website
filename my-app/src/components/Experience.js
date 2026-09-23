import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/experience.css";

function Experience() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  return (
    <section className="experience-container" id="experience">
      <h2 className="section-title">{t("experience.header")}</h2>
      <ol className="timeline">
        {Array.isArray(items) &&
          items.map((item) => (
            <li className="timeline-item" key={item.title}>
              <span className="timeline-period">{item.period}</span>
              <span className="timeline-title">{item.title}</span>
              <span className="timeline-place">{item.place}</span>
            </li>
          ))}
      </ol>
    </section>
  );
}

export default Experience;
