import github from "../assets/img/GitHub_Logo.png";
import linkedin from "../assets/img/LI-Logo.png";
import { useTranslation } from "react-i18next";
import "./styles/contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container" id="contact">
      <h2>{t("contact.header")}</h2>
      <p>{t("contact.description")}</p>
      <p>{t("contact.email")}
        <a href="mailto:sebastian@haug1.net">sebastian@haug1.net</a>
      </p>
      <div className="contact-links">
        <a href="https://github.com/SebastianHaugen" target="blank">
          <img src={github} alt="GitHub logo" />
        </a>
        <a href="https://www.linkedin.com/in/sebastian-skr%C3%B8vseth-haugen/" target="blank">
          <img src={linkedin} alt="LinkedIn logo" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
