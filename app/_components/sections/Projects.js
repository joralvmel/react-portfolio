"use client";

import styled from "styled-components";

import { config } from "@/app/config";

const StyledProjectsSection = styled.section`
  max-width: 900px;

  h2 {
    color: var(--color-grey-500);
  }
`;

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
    color: var(--color-grey-600);
    font-size: var(--fs-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--color-grey-600);
    font-size: var(--fs-xxl);
  }

  .project-description {
    position: relative;
    padding: 25px 5px;
    border-radius: var(--border-radius);
    background-color: var(--color-grey-100);
    color: var(--color-grey-500);
    font-size: var(--fs-lg);
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--color-grey-500);
      font-size: var(--fs-xs);
      white-space: nowrap;
    }
  }

  .project-links {
    display: flex;
    position: relative;
    color: var(--color-grey-300);

    a {
      padding: 10px;
      color: var(--color-grey-400);
      &:hover {
        color: var(--color-grey-500);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  grid-column: span 6;
  padding: 27% 0;
  overflow: hidden;

  a {
    filter: brightness(60%);
    transition: filter 0.3s ease-in-out;
    &:hover {
      filter: brightness(100%);
    }
  }
`;

function Projects() {
  return (
    <StyledProjectsSection id="projects">
      {config.projects.header}
      <ul>
        {config.projects.content.map(
          (
            { title, description, technologies, github, external, image },
            i
          ) => (
            <StyledProject key={i}>
              <div className="project-content">
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">{title}</h3>
                <div className="project-description">{description}</div>
                <ul className="project-tech-list">
                  {technologies.map((technology, i) => (
                    <li key={i}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {github && (
                    <a
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={github.title}
                    >
                      {github.icon}
                    </a>
                  )}
                  {external && (
                    <a
                      href={external.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={external.title}
                    >
                      {external.icon}
                    </a>
                  )}
                </div>
              </div>
              <StyledPic>
                {" "}
                {external && (
                  <a
                    href={external.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={external.title}
                  >
                    {image}
                  </a>
                )}
              </StyledPic>
            </StyledProject>
          )
        )}
      </ul>
    </StyledProjectsSection>
  );
}

export default Projects;
