import React, { useEffect } from "react";
import ProjectSection from "../components/ProjectSection";
import landingPage from "../assets/img/project3/landing-page.png";
import reportPage from "../assets/img/project3/report-page.png";
import coursePage from "../assets/img/project3/courses.png";
import figmaPrototype from "../assets/img/project3/figma-prototype.png";
import Fellesmodellen from "../assets/img/fellesmodellen.png";
import "./styles/Project1.css"; // Gjenbruk stil

function Project3() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="project-container">
      <div className="timeline">
        <div className={`dot ${activeIndex === 0 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 1 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 2 ? "active" : ""}`}></div>
      </div>

      <div className="sections" id="main-content">
        <ProjectSection index={0} setActive={setActiveIndex}>
          <h2>Startfase</h2>
          <p>
            Bachelorprosjektet startet i 2024 med fordypningsprosjekt emne, der
            vi fant på BeNet prosjektet til HelseInn med "Felles modell for
            tjenesteutvikling i Helsefellesskap Innlandet". Jeg og 2 andre
            studenter har jobbet sammen i dette prosjektet, mens mesteparten av
            jobben har blitt gjort i bachelorprosjektet gjorde vi mye av
            startfasen i fordypningsemnet med en konkurrentanalyse av andre
            e-læringplattformer til HelseInn og Helsefellesskap Innlandet.
            Prosjektet ble startet for å gjøre opplæring i Fellesmodellen mer
            tilgjengelig for ansatte i helsesektoren. Vi intervjuet personer fra
            helsesektoren og kommunenen for å få innsikt i hvilke utfordringer
            brukerne møtte, og hvordan et digitalt kurs kunne bidra til bedre
            forståelse og implementering av fellesmodellen.
          </p>
          <p>
            Vi analyserte eksisterende opplæringsmateriell og gjennomførte en
            behovsanalyse. Deretter satte vi opp mål for e-læringsløsningen med
            fokus på brukervennlighet, tilpasning til ulike faggrupper, og
            pedagogisk struktur.
          </p>
          <img src={Fellesmodellen} alt="Fellesmodellen laget av HelseInn"/>
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
          <img src={landingPage} alt="Prototype av e-læringsplattform" />
        </ProjectSection>

        <ProjectSection index={2} setActive={setActiveIndex}>
          <h2>Sluttfase</h2>
          <p>
            Prosjektet nærmer seg slutten, men e-læringskursene er fortsatt
            under utvikling. Vi har allerede laget de viktigste modulene og
            startet brukertesting sammen med ansatte i helsetjenesten. Gjennom
            testingen med brukerene av Fellesmodellen har vi fått verdifull
            innsikt i hvordan brukerne forstår innholdet, navigerer i
            plattformen og opplever det pedagogiske oppsettet.
          </p>
          <p>
            Innsikten vil bli brukt til å lage de modulene som Fellesmodellen
            skal ha. Vi skal også skrive en bacheloroppgave med hva vi har gjort
            i prosjektet. Endelig leveringsfrist for prosjektet er satt til 15.
            mai 2024.
          </p>
          <img src={coursePage} alt="Skjermbilde fra e-læringsmodul" />
        </ProjectSection>
      </div>
    </div>
  );
}

export default Project3;
