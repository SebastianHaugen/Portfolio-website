import github from "../assets/img/GitHub_Logo.png";
import linkedin from "../assets/img/LI-Logo.png";
import "./styles/contact.css";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <h2>Kontakt</h2>
      <p>Du kan kontakte meg på:</p>
      <p>e-post: 
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
