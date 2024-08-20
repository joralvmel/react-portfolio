"use client";

import styled from "styled-components";
import Side from "./Side";

import { config } from "@/app/config";

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 60px;
    background-color: var(--color-accent);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      color: var(--color-accent);

      &:hover {
        color: var(--color-accent-hover);
      }
      svg {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

function Social() {
  const { socialMedia } = config;
  return (
    <Side>
      <StyledSocialList>
        {socialMedia.map(({ url, name, content, icon }, i) => (
          <li key={i}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={content}
            >
              {icon}
            </a>
          </li>
        ))}
      </StyledSocialList>
    </Side>
  );
}

export default Social;
