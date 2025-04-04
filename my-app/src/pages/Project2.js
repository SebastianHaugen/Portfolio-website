import React from "react";
import ProjectSection from "../components/ProjectSection";
import travelStart from "../assets/img/project2/landing-page.png";
import travelSurvey from "../assets/img/project2/video-page.png";
import travelProto from "../assets/img/project2/budget-page.png";
import "./styles/Project1.css";

function Project2Page() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="project-container">
      {/* Timeline */}
      <div className="timeline">
        <div className={`dot ${activeIndex === 0 ? "active" : ""}`} />
        <div className={`dot ${activeIndex === 1 ? "active" : ""}`} />
        <div className={`dot ${activeIndex === 2 ? "active" : ""}`} />
      </div>

      {/* Sections */}
      <div className="sections">
        <ProjectSection index={0} setActive={setActiveIndex}>
          <h2>Startfase</h2>
          <p>
            Målet med dette prosjektet var å utvikle en tilgjengelig og
            responsiv reise-nettside for personer i alderen 18–35 år. Fokus lå
            på universell utforming og god brukeropplevelse for alle, uavhengig
            av funksjonsevne. Jeg startet med å analysere brukerbehov og
            gjennomførte en liten spørreundersøkelse med personer som bruker
            skjermleser og stemmestyring.
          </p>
          <p>
            Undersøkelsen viste at tydelig merking og konsistent navigasjon er
            kritisk. På bakgrunn av dette lagde jeg en persona – Alex – som
            bruker skjermleser, og lot denne personaen styre designvalgene mine.
          </p>
          <img
            src={travelStart}
            alt="Skjermbilde av ladningsside"
          />
          <img
            src={travelSurvey}
            alt="Skjermbilde fra spørreundersøkelse"
          />
        </ProjectSection>

        <ProjectSection index={1} setActive={setActiveIndex}>
          <h2>Design og utvikling</h2>
          <p>
            For å sikre tilgjengelighet og brukervennlighet, startet jeg med å
            designe et enkelt og strukturert oppsett i Figma. Jeg tok hensyn til
            WCAG-retningslinjene, og testet tidlig med ulike hjelpemidler som
            skjermleser og tastaturnavigasjon.
          </p>
          <p>
            Jeg la vekt på semantisk HTML, tydelige ARIA-labels, skip-to-main
            funksjon, og høy kontrast. Layouten er bevisst enkel og konsistent
            mellom sidene for å gjøre navigasjonen intuitiv. I tillegg ble det
            brukt media queries og relative enheter for å sikre god
            responsivitet.
          </p>
          <img
            src={travelProto}
            alt="Figma prototype av reiseside"
          />
        </ProjectSection>

        <ProjectSection index={2} setActive={setActiveIndex}>
          <h2>Testing og sluttfase</h2>
          <p>
            I sluttfasen fokuserte jeg på å teste og forbedre tilgjengeligheten.
            Jeg brukte blant annet WAVE-verktøyet og WebAIM Contrast Checker for
            fargekontrast, og testet med skjermlesere som Windows Narrator og
            ChromeVox. Feedback fra medstudenter førte til forbedringer i blant
            annet fokushåndtering og lenketekst.
          </p>
          <p>
            Et konkret eksempel var å endre utydelige lenker som "Trykk her" til
            mer beskrivende varianter som "Les om Paris". Jeg la også til flere
            semantiske HTML-elementer og ARIA-attributter for å bedre
            skjermleseropplevelsen.
          </p>
          <ul>
            <li>Skjermlesertesting og iterasjoner</li>
            <li>Closed captions og transkripsjoner for media</li>
            <li>Tilgjengelige popup-vinduer og skjemaer</li>
            <li>Tastaturnavigasjon uten feller</li>
            <li>Responsivt design på alle skjermstørrelser</li>
          </ul>
        </ProjectSection>
      </div>
    </div>
  );
}

export default Project2Page;
