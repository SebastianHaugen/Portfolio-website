import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles/projectSection.css';

function ProjectSection({ month, index, setActive }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setActive(index);
    }
  }, [inView, index, setActive]);

  return (
    <section ref={ref} className="project-section">
      <h2>{month}</h2>
      <p>Details about your project or milestone in {month}.</p>
    </section>
  );
}

export default ProjectSection;
