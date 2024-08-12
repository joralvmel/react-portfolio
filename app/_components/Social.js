"use client";

import styled from "styled-components";
import Side from "./Side";

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
    height: 90px;
    margin: 0 auto;
    background-color: var(--color-grey-500);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

function Social() {
  return (
    <Side>
      <StyledSocialList>
        <li>
          <a> SocialLink 1</a>
        </li>
        <li>
          <a> SocialLink 2</a>
        </li>
        <li>
          <a> SocialLink 3</a>
        </li>
      </StyledSocialList>
    </Side>
  );
}

export default Social;
