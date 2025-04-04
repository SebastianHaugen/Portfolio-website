import React from "react";
import ProjectSection from "../components/ProjectSection";
import landingPage from "../assets/img/project3/landing-page.png";
import reportPage from "../assets/img/project3/report-page.png";
import coursePage from "../assets/img/project3/courses.png";
import figmaPrototype from "../assets/img/project3/figma-prototype.png";
import "./styles/Project1.css"; // Gjenbruk stil

function Project3() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="project-container">
      <div className="timeline">
        <div className={`dot ${activeIndex === 0 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 1 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 2 ? "active" : ""}`}></div>
      </div>

      <div className="sections">
        <ProjectSection index={0} setActive={setActiveIndex}>
          <h2>Startfase</h2>
          <p>
            Bachelorprosjektet startet i 2024 med fordypningsprosjekt emne, der
            vi fant på be-net prosjektet til HelseInn med "Felles modell for
            tjenesteutvikling i Helsefellesskap Innlandet". Jeg og 2 andre
            studenter jobbet sammen i dette prosjektet, mens mesteparten av
            jobben har blitt gjort i bachelorprosjektet gjorde vi mye av
            startfasen i fordypningsemnet med en kartlegging av behovene til
            HelseInn og Helsefellesskap Innlandet. Prosjektet ble startet for å
            gjøre opplæring i Fellesmodellen mer tilgjengelig for ansatte i
            helsesektoren. Vi intervjuet personer fra helsesektoren og
            kommunenen for å få innsikt i hvilke utfordringer brukerne møtte, og
            hvordan et digitalt kurs kunne bidra til bedre forståelse og
            implementering av fellesmodellen.
          </p>
          <p>
            Vi analyserte eksisterende opplæringsmateriell og gjennomførte en
            behovsanalyse. Deretter satte vi opp mål for e-læringsløsningen med
            fokus på brukervennlighet, tilpasning til ulike faggrupper, og
            pedagogisk struktur.
          </p>
          <img src={landingPage} alt="Prototype av e-læringsplattform" />
        </ProjectSection>

        <ProjectSection index={1} setActive={setActiveIndex}>
          <h2>Design og utvikling</h2>
          <p>
            Basert på innsikten fra startfasen utviklet vi interaktive
            prototyper i Figma og definerte en modulstruktur for innholdet. Vi
            ønsket at kursplattformen skulle være enkel å navigere, visuelt
            oversiktlig og kunne tilpasses ulike roller i helsesektoren.
          </p>
          <p>
            Videre begynte vi å bygge e-læringsmodulene i React og strukturerte
            innholdet i tråd med universell utforming og pedagogiske prinsipper.
            Vi integrerte også tilbakemeldingsfunksjoner og vurderte bruk av
            komponentbiblioteker for bedre vedlikeholdbarhet.
          </p>
          <img src={figmaPrototype} alt="Prototype av figma" />
          <img src={reportPage} alt="Interaksjonsflyt for kurs" />
        </ProjectSection>

        <ProjectSection index={2} setActive={setActiveIndex}>
          <h2>Sluttfase</h2>
          <p>
            I sluttfasen konsoliderte vi modulene og gjennomførte brukertesting
            med ansatte i helsetjenesten. Vi evaluerte blant annet forståelse,
            navigasjon og opplevelsen av e-læringsplattformen.
          </p>
          <p>
            Resultatene fra testingen ble brukt til å forbedre flyten i kurset
            og sikre at opplæringen faktisk ga verdi. Vi dokumenterte alle funn
            og løsninger i rapporten og lagde en tydelig guide for videre drift
            og utvidelse av systemet.
          </p>
          <img src={coursePage} alt="Skjermbilde fra e-læringsmodul" />
        </ProjectSection>
      </div>
    </div>
  );
}

export default Project3;
