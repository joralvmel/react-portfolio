"use client";

import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  color: var(--color-grey-600);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    a {
      color: var(--color-green-100);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      .hex-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          polygon {
            fill: var(--color-grey-50);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        .hex-container {
          transform: translate(4px, 3px);
        }
      }
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fs-xs);

      a {
        padding: 10px;

        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--color-green-100);
          font-size: var(--fs-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    margin-left: 15px;
    font-size: var(--fs-xs);
  }
`;

function Nav() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinks>
          <ul>
            <li>NavLink 1</li>
            <li>NavLink 2</li>
            <li>NavLink 3</li>
          </ul>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
}

export default Nav;
