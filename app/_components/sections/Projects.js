"use client";

import styled from "styled-components";
import Project from "../Project";
import { useLanguage } from "@/app/_context/LanguageContext";

const StyledProjectsSection = styled.section`
  max-width: 900px;
`;

function Projects() {
  const { config } = useLanguage();
  const { header, content, overline } = config.projects;

  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading">{header}</h2>
      <ul>
        {content.map((project, i) => (
          <Project key={i} project={project} overline={overline} />
        ))}
      </ul>
    </StyledProjectsSection>
  );
}

export default Projects;
