import React from "react";
import { useTranslation } from "react-i18next"; // Assuming you're using i18n for translations
import fullstackImage from "../assets/img/webp/full-stack-application-min.webp"; // Adjust image path as needed

function Project3() {
  const { t } = useTranslation();

  return (
    <div className="project-detail-container">
      <h2>{t("projects.project1.title")}</h2>

      {/* First Section: Image on the left, text on the right */}
      <div className="project-detail-section">
        <div className="project-detail-image">
          <img src={fullstackImage} alt={t("projects.project1.title")} />
        </div>
        <div className="project-detail-text">
          <h3>{t("projects.project1.title")}</h3>
          <p>{t("projects.project1.description")}</p>
        </div>
      </div>

      {/* Second Section: Text on the left, image on the right */}
      <div className="project-detail-section reverse">
        <div className="project-detail-text">
          <h3>{t("projects.project1.additional_title")}</h3>
          <p>{t("projects.project1.additional_description")}</p>
        </div>
        <div className="project-detail-image">
          <img src={fullstackImage} alt={t("projects.project1.additional_title")} />
        </div>
      </div>
    </div>
  );
}

export default Project3;
