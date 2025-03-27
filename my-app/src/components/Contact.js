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

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
          console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID); 
          console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
        }
      );
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
