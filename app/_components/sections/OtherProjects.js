"use client";

import styled from "styled-components";
import Button from "../Button";
import OtherProject from "../OtherProject";
import { useLanguage } from "@/app/_context/LanguageContext";

const StyledOtherProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: var(--fs-heading);
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
  const { header, content } = config.otherProjects;
  const { more, less } = config.buttons;
  return (
    <StyledOtherProjectsSection id="otherProjects">
      <h2>{header}</h2>
      <ul className="projects-grid">
        {content.map((project, i) => (
          <OtherProject key={i} project={project} />
        ))}
      </ul>
      <Button>{more}</Button>
    </StyledOtherProjectsSection>
  );
}

export default OtherProjects;
