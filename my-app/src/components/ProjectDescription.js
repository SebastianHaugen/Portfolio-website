import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function ProjectDescription({ text, maxWords = 40 }) {
  const [expanded, setExpanded] = useState(false);
  const words = text.split(" ");
  const truncatedText =
    words.slice(0, maxWords).join(" ") + (words.length > maxWords ? "..." : "");

  // Using translation from json file in locales folder
  const { t } = useTranslation();

  return (
    <div>
      <div>{expanded ? text : truncatedText}</div>
      {words.length > maxWords && (
        <span className="read-more" onClick={() => setExpanded(!expanded)}>
          {expanded ? t("read.less") : t("read.more")}
        </span>
      )}
    </div>
  );
}

export default ProjectDescription;
