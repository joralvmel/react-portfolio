"use client";

import { useState } from "react";
import styled from "styled-components";

import { useLanguage } from "@/app/_context/LanguageContext";
import Button from "@/app/_components/Button";
import Project from "@/app/_components/Project";

const StyledOtherProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  h2 {
    font-size: var(--fs-heading);
    margin: 0;
  }

  .archive-link {
    font-size: var(--fs-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    list-style: none;
    padding: 0;
    width: 100%;
  }

  .more-button {
    margin: 80px auto 0;
  }
`;

function OtherProjects() {
  const { config } = useLanguage();
  const { header2, content } = config.projects;
  const { more, less } = config.buttons;

  const [showAll, setShowAll] = useState(false);

  const otherProjects = content.filter((project) => !project.image);
  const displayedProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <StyledOtherProjectsSection id="otherProjects">
      <h2>{header2}</h2>
      <ul className="projects-grid">
        {displayedProjects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </ul>
      <Button onClick={() => setShowAll(!showAll)}>
        {showAll ? less : more}
      </Button>
    </StyledOtherProjectsSection>
  );
}

export default OtherProjects;
