"use client";

import { config } from "@/app/config";
import styled from "styled-components";
import Button from "../Button";

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

const StyledOtherProject = styled.li`
  position: relative;
  cursor: default;

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--color-grey-100);
    overflow: auto;

    &:hover {
      background-color: var(--color-grey-200);
      transition: background-color 0.5s ease;
    }
  }

  .project-top {
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .folder {
      color: var(--color-grey-500);
      svg {
        width: 30px;
        height: 30px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--color-grey-400);

      a {
        padding: 5px 7px;

        &:hover {
          color: var(--color-grey-500);
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--color-grey-600);
    font-size: var(--fs-xxl);

    a {
      position: static;
    }
  }

  .project-description {
    color: var(--color-grey-500);
    font-size: 17px;
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    color: var(--color-grey-400);

    li {
      font-size: var(--fs-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

function OtherProjects() {
  const { header, icon, projects, githubIcon, externalIcon } =
    config.otherProjects;
  return (
    <StyledOtherProjectsSection id="otherProjects">
      <h2>{header}</h2>
      <ul className="projects-grid">
        {projects.map((project) => (
          <StyledOtherProject key={project.title}>
            <div className="project-inner">
              <div className="project-top">
                <div className="folder">{icon}</div>
                <div className="project-links">
                  <a
                    key={project.github}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github"
                  >
                    {githubIcon}
                  </a>
                  <a
                    key={project.external}
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external"
                  >
                    {externalIcon}
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </StyledOtherProject>
        ))}
      </ul>
      <Button>{config.buttons[1]}</Button>
    </StyledOtherProjectsSection>
  );
}

export default OtherProjects;
