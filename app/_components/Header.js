"use client";

import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../_context/LanguageContext";

const StyledHeader = styled.header`
  position: fixed;
  padding: 0px 50px;
  width: 100%;
  height: 60px;
  background-color: var(--color-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  z-index: 1000;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  color: var(--color-text);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid var(--color-accent);
`;

const StyledLinks = styled.ul`
  display: flex;
  width: auto;
  justify-content: space-between;
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
        color: var(--color-accent);
        font-size: var(--fs-xxs);
        text-align: right;
      }
      &:hover,
      &:focus {
        color: var(--color-text-light);
      }
    }
  }
`;

function Header() {
  const { config } = useLanguage();
  const { resume } = config.buttons;
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />
        <StyledButtonContainer>
          <DarkModeToggle />
          <LanguageToggle />
        </StyledButtonContainer>

        <StyledLinks>
          {config.navLinks.map(({ url, content }, index) => (
            <li key={index}>
              <Link href={url}>{content}</Link>
            </li>
          ))}
        </StyledLinks>
      </StyledNav>
      <Button>{resume}</Button>
    </StyledHeader>
  );
}

export default Header;
