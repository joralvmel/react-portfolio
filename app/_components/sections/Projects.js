"use client";

import styled from "styled-components";

import { config } from "@/app/config";
import Project from "../Project";

const StyledProjectsSection = styled.section`
  max-width: 900px;

  h2 {
    color: var(--color-grey-500);
  }
`;

function Projects() {
  const { header, content } = config.projects;

  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading">{header}</h2>
      <ul>
        {content.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </ul>
    </StyledProjectsSection>
  );
}

export default Projects;
