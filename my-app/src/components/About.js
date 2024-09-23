import gaustatoppen from "../assets/img/webp/gaustatoppen-min.webp";
import prague from "../assets/img/webp/prague-min.webp";
import prague2 from "../assets/img/webp/prague2-min.webp";
import "./styles/about.css";

function About() {
  return (
    <div>
      <div className="about" id="about">
        <h2 className="about-title">Om</h2>
        <p className="about-header">
          Jeg er en <b>utvikler</b> og en <b>designer</b> som har studert
          webutvikling ved NTNU Gjøvik de siste 3 årene.
        </p>
        <p>
          Jeg er fra Slemmestad i Asker Norge. Jeg har alltid hatt en lidenskap
          for teknologi og koding. Når jeg ikke sitter foran skjermen, finner du
          meg ofte ute på tur i skogen, hvor jeg nyter naturen og det friske
          utelivet. Å holde meg aktiv er viktig for meg, så jeg liker å
          bruke tid på treningssenter. I tillegg er jeg glad i å reise og det å oppleve nye
          steder og kulturer. Jeg liker å ta bilder av stedene jeg besøker.
        </p>
        <div className="image-collage">
          <img src={gaustatoppen} alt="Toppen av Gaustatoppen, Norge" />
          <img src={prague} alt="Praha Kirke Basilica of St. Ludmila" />
          <img src={prague2} alt="Praha filmet fra avstand" />
        </div>
      </div>
    </div>
  );
}

export default About;
