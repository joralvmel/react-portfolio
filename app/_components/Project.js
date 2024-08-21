"use client";

import styled from "styled-components";
import TechList from "./TechList";
import ProjectLinks from "./ProjectLinks";

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 0;
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;
    }
    .project-tech-list {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;
      }
    }
    .project-links {
      justify-content: flex-end;
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
  }

  .project-overline {
    margin: 10px 0;
    color: var(--color-accent);
    font-size: var(--fs-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--color-text);
    font-size: var(--fs-xxl);
  }

  .project-description {
    position: relative;
    padding: 25px 5px;
    border-radius: var(--border-radius);
    background-color: var(--color-tertiary);
    color: var(--color-text);
    font-size: var(--fs-lg);
  }
`;

const StyledPic = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  grid-column: span 6;
  padding: 27% 0;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
    filter: brightness(60%);
    transition: filter 0.3s ease-in-out;
    &:hover {
      filter: brightness(100%);
    }
  }
`;

function Project({ project, overline }) {
  const {
    title,
    description,
    technologies,
    image,
    github,
    external,
    externalTitle,
  } = project;

  return (
    <StyledProject>
      <div className="project-content">
        <p className="project-overline">{overline}</p>
        <h3 className="project-title">{title}</h3>
        <div className="project-description">{description}</div>
        <TechList technologies={technologies} />
        <ProjectLinks github={github} external={external} />
      </div>
      <StyledPic>
        {external && (
          <a
            href={external}
            target="_blank"
            rel="noopener noreferrer"
            title={externalTitle}
          >
            {image}
          </a>
        )}
      </StyledPic>
    </StyledProject>
  );
}

export default Project;
