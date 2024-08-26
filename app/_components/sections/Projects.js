"use client";

import styled from "styled-components";
import Project from "../Project";
import { useLanguage } from "@/app/_context/LanguageContext";

const StyledProjectsSection = styled.section`
  max-width: 900px;

  .project {
    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

function Projects() {
  const { config } = useLanguage();
  const { header, content } = config.projects;

  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading">{header}</h2>
      <ul className="project">
        {content.map((project, i) => (
          <Project key={i} project={project} index={i} />
        ))}
      </ul>
    </StyledProjectsSection>
  );
}

export default Projects;
