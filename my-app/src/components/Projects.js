import "./styles/projects.css";
import fullstack from "../assets/img/full-stack-application.png";
import travel from "../assets/img/travel.png";
import tryggtur from "../assets/img/trygg-tur.png";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>Projects</h2>
      <div className="project project1">
        <div className="project-content">
          <img src={fullstack} alt="project 1" />
        </div>
        <div className="project-text">
          <h3>The SUPER Assessor</h3>
          <p>
            For IDG2100-kurset jobbet jeg sammen med 2 studenter for å utvikle
            SUPER Assessor-nettstedet, en fullstack webapplikasjon. Appen lar
            lærere lage og vurdere vurderingsskjemaer gjennom et kortbasert
            spill. Lærere kan spille alene eller i team, generere PDF-er av
            skjemaene sine, og administrere sine egne profiler og spilløkter. Vi
            utviklet en moderne webapplikasjon ved hjelp av MERN-stacken, og
            viste ferdigheter som å designe en REST API, dokumentasjon, og
            implementere sikkerhetsfunksjoner for innlogging ved bruk av tokens.
          </p>
        </div>
      </div>

      <div className="project project2">
        <div className="project-content">
          <img src={travel} alt="project 2" />
        </div>
        <div className="project-text">
          <h3>Reise nettside med fokus på tilgjengelighet</h3>
          <p>
            Dette prosjektet er et fullt tilgjengelig, reisetema-nettsted
            utviklet som en del av IDG2012-kurset. Hovedmålet var å lage en
            brukervennlig plattform for unge voksne som følger retningslinjene
            for tilgjengelig webinnhold (WCAG). Designet fokuserer på
            inkludering, og sikrer at brukere med ulike funksjonshemninger
            enkelt kan navigere og samhandle med innholdet. ARIA-landemerker og
            roller ble lagt til der det var nødvendig for å gi ekstra kontekst
            for hjelpemiddelteknologier og sikre at dynamiske elementer som
            interaktive skjemaer er tilgjengelige. Hele nettstedet kan navigeres
            ved hjelp av kun tastatur, noe som gjør det tilgjengelig for brukere
            med motoriske funksjonshemninger. 
          </p>
        </div>
      </div>

      <div className="project project3">
        <div className="project-content">
          <img src={tryggtur} alt="project 2" />
        </div>
        <div className="project-text">
          <h3>TryggTur for Gjøvik kommune</h3>
          <p>
            En tjeneste designet for å informere og be om vintervedlikehold av
            fortau. Brukere kan abonnere på varsler når fortau vil bli strødd
            eller ryddet, og de kan også sende forespørsler om disse tjenestene
            i sitt eget nabolag eller andre områder de anser som utrygge. Målet
            er å gjøre det tryggere å gå og sykle i byen om vinteren. Nettstedet
            inkluderer også en seksjon som fremmer tryggere kjørevaner for å
            beskytte fotgjengere og syklister. Appen har som mål å forbedre
            kommunikasjonen mellom brukere og kommunen, slik at vedlikeholdet
            blir mer effektivt, samtidig som den oppmuntrer flere til å gå eller
            sykle om vinteren, vel vitende om at fortauene er trygge.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
