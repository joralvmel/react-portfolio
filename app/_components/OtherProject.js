"use client";

import { config } from "@/app/config";
import styled from "styled-components";
import ProjectLinks from "./ProjectLinks";
import TechList from "./TechList";

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

function OtherProject({ project, i }) {
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
