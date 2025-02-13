import gaustatoppen from "../assets/img/webp/gaustatoppen-min.webp";
import prague from "../assets/img/webp/prague-min.webp";
import prague2 from "../assets/img/webp/prague2-min.webp";
import { useTranslation } from "react-i18next";
import "./styles/about.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-container" id="about">
      <h2 className="about-title">Om</h2>
      <p className="about-header">{t("about.description1")}</p>
      <p>{t("about.description2")}</p>
      <div className="image-collage">
        <img src={gaustatoppen} alt="Toppen av Gaustatoppen, Norge" />
        <img src={prague} alt="Praha Kirke Basilica of St. Ludmila" />
        <img src={prague2} alt="Praha filmet fra avstand" />
      </div>
    </div>
  );
}

export default About;
