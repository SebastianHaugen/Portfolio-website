import React, { useState } from "react";

function ProjectDescription({ text, maxWords = 40 }) {
  const [expanded, setExpanded] = useState(false);
  const words = text.split(" ");
  const truncatedText = words.slice(0, maxWords).join(" ") + (words.length > maxWords ? "..." : "");

  return (
    <div>
      <p>{expanded ? text : truncatedText}</p>
      {words.length > maxWords && (
        <span className="read-more" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read less" : "Read more"}
        </span>
      )}
    </div>
  );
}

export default ProjectDescription;
