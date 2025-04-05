import React, { useEffect } from "react";
import ProjectSection from "../components/ProjectSection";
import startImage from "../assets/img/project1/january-picture.png";
import startImage2 from "../assets/img/project1/january-db.png";
import figmaPrototype from "../assets/img/project1/figma-prototype.png";
import figmaPrototypeLarge from "../assets/img/project1/figma-prototype-large.png";
import dashboard from "../assets/img/project1/dashboard.png";
import cardsManagement from "../assets/img/project1/cards-management.png";
import "./styles/Project1.css";

function ProjectPage() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="project-container">
      {/* Timeline */}
      <div className="timeline">
        <div className={`dot ${activeIndex === 0 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 1 ? "active" : ""}`}></div>
        <div className={`dot ${activeIndex === 2 ? "active" : ""}`}></div>
      </div>

      {/* Sections */}
      <div className="sections">
        <ProjectSection index={0} setActive={setActiveIndex}>
          <h2>Startfase</h2>
          <p>
            I starten av prosjektet fikk vi i oppgave å lage en digital versjon
            av SUPER Assessor et kortspill utviklet av NTNU for å hjelpe
            undervisere med å designe nye vurderingsformer. Her kan du se den
            fysiske versjonen av{" "}
            <a
              href="https://www.supereducator.no/product-page/super-assessor"
              target="_blank"
              rel="noopener noreferrer"
            >
              kortspillet.
            </a>
          </p>
          <p>
            Målet var å bruke Web Components for å bygge gjenbrukbare
            kort-komponenter med støtte for dataoverføring, styling via custom
            properties, og interaksjon med Custom Events. Den første delen
            handlet om å lære React og API, mens den siste obligen der vi skulle
            lage en full stack applikason med MongoDB, Express JS, React og Node
            JS (MERN) ble gjort i grupper. Vi fikk også tilgang til designfiler
            og data fra Excel-arket som inneholdt informasjon om kortene, som vi
            kunne bruke i prosjektet. Hovedprosjekt var utviklet i samarbeid med
            2 studenter fra NTNU.
          </p>
          <img src={startImage} alt="Skjermbilde av SUPER Assessor" />
          <p>
            Jeg startet med å sette opp strukturen for prosjektet og
            eksperimenterte med hvordan HTML attributes og JS properties kunne
            brukes til å dynamisk generere kortene. Jeg brukte designfilene og
            data fra Excel-arket til å skape en komponentstruktur som både kunne
            vise frem og håndtere interaktive kort, inkludert bokmerking og
            snu-funksjonalitet.
          </p>
          <img src={startImage2} alt="SUPER Assessor database" />
          <p>
            Her er et bilde av databasen som vi brukte for å dynamisk lage
            kortene. Det var totalt 86 kort i databasen.
          </p>
        </ProjectSection>

        <ProjectSection index={1} setActive={setActiveIndex}>
          <h2>Implementering og design</h2>
          <p>
            Fullstack-prosjektet bygde videre på de tidligere obligatoriske
            oppgavene vi hadde gjennom semesteret. Den første delen med Web
            Components og API-løsninger dannet grunnmuren, og vi fikk mulighet
            til å gjenbruke og forbedre mye av koden vi allerede hadde laget.
            For å planlegge hvordan vi skulle utvikle en komplett løsning i
            gruppen, lagde vi Figma-prototyper og diskuterte brukerflyt,
            komponentstruktur og designvalg. Dette ga oss en klar retning før vi
            gikk videre med implementeringen.
          </p>
          <img src={figmaPrototype} alt="Skjermbilde av SUPER Assessor" />
          <img src={figmaPrototypeLarge} alt="Skjermbilde av SUPER Assessor" />
        </ProjectSection>

        <ProjectSection index={2} setActive={setActiveIndex}>
          <h2>Sluttfase</h2>
          <p>
            I slutten av prosjektet fokuserte vi på å videreutvikle og
            ferdigstille en komplett versjon av SUPER Assessor v2.0 som en
            full-stack applikasjon. Her handlet det ikke bare om å implementere
            de siste kravene, men også om å sikre at tidligere funksjonalitet
            var stabil, sikker og godt dokumentert.
          </p>
          <p>Vi implementerte blant annet: </p>
          <ul>
            <li>
              Autentisering for ulike brukertyper (lærer, admin og besøkende).
            </li>
            <li>
              Spillflyt der lærere kan trekke kort fra ulike kortstokker og
              bygge vurderingsopplegg.
            </li>
            <li> Mulighet for å lagre, vurdere og dele</li>
            <li>
              vurderingsopplegg. Generering av PDF-er med for- og bakside av
              kort, tilpasset kort-størrelse og klar for utskrift.{" "}
            </li>
            <li>
              En utvidet favourites-funksjon med localStorage for bokmerking. En
              forbedret brukeropplevelse og responsivt design.
            </li>
          </ul>
          <p>
            Vi la også vekt på backend-funksjonalitet, blant annet REST API med
            god struktur, sikkerhetstiltak og dokumentasjon via Swagger. For
            frontend brukte vi hovedsaklig React, men hadde krav om å bruke Web
            Components fra tidligere oblig, men med forbedret struktur og
            fleksibilitet. Prosjektet ble avsluttet med testing og
            kvalitetssikring, der vi sikret at alle roller (besøkende, lærer og
            admin) kunne utføre sine oppgaver uten feil. Vi har jobbet tett i
            team og fordelt ansvaret tydelig noe som bidro til en god
            gjennomføring og forståelse for hvordan man bygger moderne
            webapplikasjoner i praksis.
          </p>
          <img src={dashboard} alt="Dashboard of the Super Assessor website" />
          <img
            src={cardsManagement}
            alt="Cards management page of the Super Assessor website"
          />
        </ProjectSection>
      </div>
    </div>
  );
}

export default ProjectPage;
