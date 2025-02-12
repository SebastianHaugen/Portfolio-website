import "./styles/projects.css";
import fullstack from "../assets/img/webp/full-stack-application-min.webp";
import travel from "../assets/img/webp/travel-min.webp";
import tryggtur from "../assets/img/webp/trygg-tur-min.webp";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h2>Prosjekter</h2>
      <div className="project project1">
        <div className="project-content">
          <img src={fullstack} alt="project 1" />
        </div>
        <div className="project-text">
          <h3>The SUPER Assessor</h3>
          <p>
            For IDG2100-emnet utviklet jeg og to andre studenter, en fullstack
            webapplikasjon kalt SUPER Assessor. Applikasjonen er designet for
            lærere, slik at de kan lage og evaluere vurderingsskjemaer gjennom
            et kortbasert spill. Lærere kan spille alene eller i et team. Når
            spillet er ferdig er resultatet et nytt vurderingsskjema som kan
            deles med andre eller lagres til senere bruk. Applikasjonen lar også
            lærere administrere sine egne profiler, spilløkter og generere
            PDF-er av skjemaene sine. Vi brukte MERN-stacken for å utvikle
            applikasjonen. Jeg bidro til å designe REST API for backend, bygge
            frontend med React og implementere sikkerhetsfunksjoner for
            innlogging med tokens. I dette prosjektet lærte vi å jobbe med alle
            deler av et prosjekt, både frontend og backend, for å bygge en
            skalerbar og sikker applikasjon.
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
            I IDG2012-emnet utviklet jeg en nettside med et reisetema. Målet var
            å lage en brukervennlig plattform for unge voksne, i tråd med
            retningslinjene for tilgjengelig webinnhold (WCAG). Designet
            fokuserte på inkludering og sørget for at brukere med ulike
            funksjonsnedsettelser enkelt kunne navigere og interagere med
            innholdet. Jeg brukte ARIA der det var nødvendig for å gi ekstra
            kontekst til hjelpemiddelteknologier og sørget for at alle lenker
            var beskrivende. Hele nettstedet kan navigeres kun ved hjelp av
            tastatur, noe som gjør det tilgjengelig for brukere med motoriske
            funksjonsnedsettelser.
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
            For IDG2000-emnet utviklet vi en tjeneste designet for å informere
            om og be om måking av fortau. Brukere kan abonnere på varsler når
            fortau blir strødd eller måket for snø, og de kan også sende
            forespørsler om disse tjenestene i sitt eget nabolag eller andre
            steder i byen. Målet med tjenesten er å gjøre det tryggere å gå og
            sykle i byen om vinteren. Nettsiden inkluderer også en seksjon som
            fremmer tryggere kjørevaner for å beskytte fotgjengere og syklister.
            Appen har som mål å forbedre kommunikasjonen mellom innbyggere og
            kommunen, slik at kommunen vet hvor det er dårlig måkt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
