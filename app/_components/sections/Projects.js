"use client";

import styled from "styled-components";

import { useLanguage } from "@/app/_context/LanguageContext";
import Project from "@/app/_components/Project";
import RevealOnScroll from "@/app/_components/RevealOnScroll";

const StyledProjectsSection = styled.section`
  max-width: 900px;
  padding-bottom: 0;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
    }
  }
`;

function Projects() {
  const { config } = useLanguage();
  const { header, content } = config.projects;

  return (
    <RevealOnScroll>
      <StyledProjectsSection id="projects">
        <h2 className="numbered-heading">{header}</h2>
        <ul className="project-list">
          {content
            .filter((project) => project.image)
            .map((project, i) => (
              <Project project={project} key={i} />
            ))}
        </ul>
      </StyledProjectsSection>
    </RevealOnScroll>
  );
}

export default Projects;
