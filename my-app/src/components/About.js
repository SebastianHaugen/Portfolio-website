import gaustatoppen from "../assets/img/webp/gaustatoppen-min.webp";
import prague from "../assets/img/webp/prague-min.webp";
import prague2 from "../assets/img/webp/prague2-min.webp";
import "./styles/about.css";

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-title">Om</h2>
      <p className="about-header">
        Jeg er en <b>utvikler</b> og en <b>designer</b> som har studert
        webutvikling ved NTNU Gjøvik de siste 3 årene. Jeg er ferdig med
        bachelor i 2025.
      </p>
      <p>
        Jeg er 23 år gammel og kommer fra Bødalen i Asker. Teknologi og koding
        har alltid vært en lidenskap for meg. I 2022 begynte jeg på studiet
        webutvikling ved NTNU og jeg innså raskt at dette var noe jeg virkelig
        ønsket å jobbe med. Jeg liker å lære nye ting og utfordre meg selv. Det
        er også viktig for meg å holde meg aktiv, og jeg bruker mye tid på
        treningssenteret. I tillegg elsker jeg å reise og oppleve nye steder og
        kulturer.
      </p>
      <div className="image-collage">
        <img src={gaustatoppen} alt="Toppen av Gaustatoppen, Norge" />
        <img src={prague} alt="Praha Kirke Basilica of St. Ludmila" />
        <img src={prague2} alt="Praha filmet fra avstand" />
      </div>
    </div>
  );
}

export default About;
