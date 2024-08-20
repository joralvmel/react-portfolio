"use client";

import { config } from "@/app/config";
import styled from "styled-components";

const StyledProjectLinks = styled.div`
  display: flex;
  position: relative;

  a {
    padding: 10px;
    color: var(--color-accent);
    &:hover {
      color: var(--color-accent-hover);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

function ProjectLinks({ github, external }) {
  const { github: githubIcon, external: externalIcon } = config.icons;
  const { githubTitle, externalTitle } = config;
  return (
    <StyledProjectLinks>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          title={githubTitle}
        >
          {githubIcon}
        </a>
      )}
      {external && (
        <a
          href={external}
          target="_blank"
          rel="noopener noreferrer"
          title={externalTitle}
        >
          {externalIcon}
        </a>
      )}
    </StyledProjectLinks>
  );
}

export default ProjectLinks;
