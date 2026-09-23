import sebastian from "../assets/img/SebastianHaugen-min.webp";
import { useTranslation } from "react-i18next";
import "./styles/about.css";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-container" id="about">
      <h2 className="section-title">{t("about.header")}</h2>
      <div className="about-main">
        <img className="about-portrait" src={sebastian} alt={t("intro.imageAlt")} />
        <div className="about-text">
          <p>{t("about.short1")}</p>
          <p>{t("about.short2")}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
