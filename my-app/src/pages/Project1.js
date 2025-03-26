import React, { useState } from 'react';
import ProjectSection from '../components/ProjectSection';
import './styles/Project1.css';

const milestones = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

function ProjectPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="project-container">
      <div className="timeline" >
        {milestones.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="sections">
        {milestones.map((month, index) => (
          <ProjectSection
            key={index}
            month={month}
            index={index}
            setActive={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
