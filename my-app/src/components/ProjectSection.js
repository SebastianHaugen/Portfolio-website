import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./styles/projectSection.css"; 

function ProjectSection({ index, setActive, children }) {
  const { ref, inView } = useInView({ threshold: 0.5 });

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
