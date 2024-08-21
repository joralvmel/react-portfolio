"use client";

import styled from "styled-components";
import ProjectLinks from "./ProjectLinks";
import TechList from "./TechList";
import { useLanguage } from "../_context/LanguageContext";

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
    background-color: var(--color-tertiary);
    overflow: auto;

    &:hover {
      background-color: var(--color-quaternary);
      transition: background-color 0.5s ease;
    }
  }

  .project-top {
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .folder {
      color: var(--color-accent);
      svg {
        width: 30px;
        height: 30px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;

      a {
        padding: 5px 7px;
        transition: background-color 0.3s ease;

        &:hover {
          color: var(--color-accent-hover);
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
    color: var(--color-text-light);
    font-size: var(--fs-xxl);

    a {
      position: static;
    }
  }

  .project-description {
    color: var(--color-text);
    font-size: 17px;
  }
`;

function OtherProject({ project, i }) {
  const { config } = useLanguage();
  const { title, description, github, external, technologies } = project;
  const { folder } = config.icons;

  return (
    <StyledOtherProject key={i}>
      <div className="project-inner">
        <div className="project-top">
          <div className="folder">{folder}</div>
          <div className="project-links">
            <ProjectLinks github={github} external={external} />
          </div>
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <TechList technologies={technologies} />
      </div>
    </StyledOtherProject>
  );
}

export default OtherProject;
