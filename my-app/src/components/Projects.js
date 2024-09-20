import "./styles/projects.css";
import fullstack from "../assets/img/full-stack-application.png";

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
          <h2>Snowplowing for Gjøvik county</h2>
          <img src="https://via.placeholder.com/150" alt="project 2" />
        </div>
        <div className="project-text">
          <p>Project 2 description</p>
        </div>
      </div>

      <div className="project project3">
        <div className="project-content">
          <h2>Sustainbable and accessible website</h2>
          <img src="https://via.placeholder.com/150" alt="project 3" />
        </div>
        <div className="project-text">
          <p>Project 3 description</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
