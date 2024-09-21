import "./styles/projects.css";
import fullstack from "../assets/img/full-stack-application.png";
import travel from "../assets/img/travel.png";

function Projects() {
  return (
    <div className="projects-container">
      <div className="project project1">
        <div className="project-content">
          <img src={fullstack} alt="project 1" />
        </div>
        <div className="project-text">
          <h2>The SUPER Assessor</h2>
          <p>
            For the IDG2100 course, I worked alongside 2 other web development
            students to develop the SUPER Assessor a full stack web application.
            The app allows educators to create and rate assessment schemes
            through a card-based game. Teachers can play solo or in teams,
            generate PDFs of their schemes, and manage their own profiles and
            game sessions. We developed a modern web application using the MERN
            stack, showcasing skills like designing a REST API, documentation,
            and implementing security features.
          </p>
        </div>
      </div>

      <div className="project project2">
        <div className="project-content">
          <img src={travel} alt="project 2" />
        </div>
        <div className="project-text">
          <h2>Accessible website</h2>
          <p>
            This project is a fully accessible, travel-themed website developed
            as part of the IDG2012 course. The primary goal was to create a
            user-friendly platform for young adults (aged 18-35) that adheres to
            the Web Content Accessibility Guidelines (WCAG). The design focuses
            on inclusivity, ensuring that users with varying disabilities can
            easily navigate and interact with the content. ARIA Landmarks and
            Roles: ARIA (Accessible Rich Internet Applications) roles and
            landmarks were added where necessary to provide additional context
            for assistive technologies, ensuring that dynamic elements like
            interactive forms are accessible. Keyboard Navigation: The entire
            website can be navigated using only a keyboard, making it accessible
            to users with motor impairments. Focus styles are clearly visible to
            ensure users can always identify where they are on the page. Color
            Contrast and Font Size: The website was designed with high-contrast
            color schemes and resizable text, providing readability for users
            with visual impairments. All elements are responsive to zoom and
            screen resizing without loss of functionality.
          </p>
        </div>
      </div>

      <div className="project project3">
        <div className="project-content">
          <h2>Snowplowing for Gjøvik county</h2>
          <img src="https://via.placeholder.com/150" alt="project 2" />
        </div>
        <div className="project-text">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
