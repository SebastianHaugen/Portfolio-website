import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles/projectSection.css';

function ProjectSection({ month, description, image, link, index, setActive }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (inView) {
      setActive(index);
    }
  }, [inView, index, setActive]);

  return (
    <section ref={ref} className="project-section" id={month.toLowerCase()}>
      <h2>{month}</h2>
      <p>{description}</p>
      {image && <img src={image} alt={`${month} project`} className="project-image" />}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub
        </a>
      )}
    </section>
  );
}


export default ProjectSection;
