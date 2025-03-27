import React, { useState } from "react";
import ProjectSection from "../components/ProjectSection";
import milestones from '../data/milestones';
import "./styles/Project1.css";

function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="project-container">
      <div className="timeline">
        {milestones.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="sections">
        {milestones.map((milestone, index) => (
          <ProjectSection
            key={index}
            index={index}
            setActive={setActiveIndex}
            month={milestone.month}
            description={milestone.description}
            image={milestone.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
