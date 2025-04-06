import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./styles/contact.css";

function Contact() {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  // Using translation from json file in locales folder
  const { t } = useTranslation();

  // Function to send email using EmailJS
  // The function is called when the form is submitted
  // I send 2 emails, one to the user and one to me
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_qbbbsvk",
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            user_name: formRef.current.user_name.value,
            user_email: formRef.current.user_email.value,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );

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
          {t("contact.name")}
          <input type="text" name="user_name" required />
        </label>
        <label>
          {t("contact.email")}
          <input type="email" name="user_email" required />
        </label>
        <label>
          {t("contact.message")}
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">{t("contact.send")}</button>
        {isSent && <p className="success-msg">{t("contact.success")}</p>}
      </form>
    </div>
  );
}

export default Contact;
