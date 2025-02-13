import { useTranslation } from "react-i18next";
import "./styles/contact.css";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container" id="contact">
      <h2>{t("contact.header")}</h2>
      <p>{t("contact.description")}</p>
      <p>
        {t("contact.email")}
        <a href="mailto:sebastian@haug1.net">sebastian@haug1.net</a>
      </p>
    </div>
  );
}

export default Contact;
