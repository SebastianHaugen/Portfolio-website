import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./styles/contact.css";

function Contact() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Først send e-post til deg selv
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_qbbbsvk", // ← e-post til deg
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Deretter send autosvar til brukeren
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // ← autosvar-template
          {
            user_name: formRef.current.user_name.value,
            user_email: formRef.current.user_email.value,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );

        // Vis bekreftelse og tøm skjema
        setIsSent(true);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("E-postfeil:", error);
      });
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">{t("contact.header")}</h2>
      <p className="contact-description">{t("contact.description")}</p>

      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        <label>
          Navn:
          <input type="text" name="user_name" required />
        </label>
        <label>
          E-post:
          <input type="email" name="user_email" required />
        </label>
        <label>
          Melding:
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">Send</button>
        {isSent && (
          <p className="success-msg">Takk! Meldingen din ble sendt 😊</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
