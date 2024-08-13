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
    background-color: var(--color-grey-500);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover {
        color: var(--color-grey-500);
      }
      svg {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

function Social() {
  return (
    <Side>
      <StyledSocialList>
        {config.socialMedia.map((social, index) => (
          <li key={index}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          </li>
        ))}
      </StyledSocialList>
    </Side>
  );
}

export default Social;
