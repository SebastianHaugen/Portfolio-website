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
            For the IDG2100 course, I worked with 2 students to develop the
            SUPER Assessor website a full stack web application. The app allows
            educators to create and rate assessment schemes through a card-based
            game. Teachers can play solo or in teams, generate PDFs of their
            schemes, and manage their own profiles and game sessions. We
            developed a modern web application using the MERN stack, showcasing
            skills like designing a REST API, documentation, and implementing
            security features for login using tokens.
          </p>
        </div>
      </div>

      <div className="project project2">
        <div className="project-content">
          <img src={travel} alt="project 2" />
        </div>
        <div className="project-text">
          <h3>Travel website focus with focus on Accessibility</h3>
          <p>
            This project is a fully accessible, travel-themed website developed
            as part of the IDG2012 course. The primary goal was to create a
            user-friendly platform for young adultsthat adheres to the Web
            Content Accessibility Guidelines. The design focuses on inclusivity,
            ensuring that users with varying disabilities can easily navigate
            and interact with the content. ARIA Landmarks and roles were added
            where necessary to provide additional context for assistive
            technologies, ensuring that dynamic elements like interactive forms
            are accessible. The entire website can be navigated using only a
            keyboard, making it accessible to users with motor impairments.
            Focus styles are clearly visible to ensure users can always identify
            where they are on the page. The website was designed with
            high-contrast color schemes and resizable text, providing
            readability for users with visual impairments. All elements are
            responsive to zoom and screen resizing without loss of
            functionality.
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
            A service designed to inform and request winter sidewalk
            maintenance. Users can subscribe to notifications when sidewalks
            will be gritted or cleared, and they can also send requests for
            these services in their own neighborhood or other areas they deem
            unsafe. The goal is to make walking and cycling in the city safer
            during the winter. The website also includes a section promoting
            safer driving habits to protect pedestrians and cyclists. The app
            aims to better the communication between users and the municipality,
            allowing for more efficient maintenance, while encouraging more
            people to walk or cycle during winter knowing that sidewalks are
            safe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
