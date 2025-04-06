import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./styles/project-section.css"; 

function ProjectSection({ index, setActive, children }) {
  // Using Intersection Observer to detect when the section is in view
  // and set the active index accordingly
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Effect to update the active index when the section comes into view
  useEffect(() => {
    if (inView) {
      setActive(index);
    }
  }, [inView, index, setActive]);

  return (
    <section ref={ref} className="project-section">
      {children}
    </section>
  );
}

export default ProjectSection;
