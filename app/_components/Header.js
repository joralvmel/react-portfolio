"use client";

import { useState } from "react";
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
  height: 4rem;
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

  @media (max-width: 770px) {
    display: none;
  }
`;

const StyledHamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: var(--color-accent);
  width: 30px;
  height: 30px;

  &:hover {
    color: var(--color-accent-hover);
  }

  @media (max-width: 770px) {
    display: block;
  }
`;

const StyledMobileLinks = styled.ul`
  display: none;
  list-style: none;
  position: absolute;
  top: 40px;
  right: 10px;
  padding: 0.5rem;
  border-radius: 8px;
  background: var(--color-tertiary);
  transition: var(--transition-transform);

  li {
    counter-increment: item 1;
    font-size: var(--fs-lg);

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

  @media (max-width: 770px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(0)" : "translateY(-10px)"};
  }
`;

const StyledMobileButton = styled.div`
  @media (max-width: 770px) {
    display: none;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { config } = useLanguage();
  const { resume } = config.buttons;
  const { menu } = config.icons;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        </StyledLinks>{" "}
        <StyledMobileButton>
          {" "}
          <Button>{resume}</Button>
        </StyledMobileButton>
      </StyledNav>

      <StyledHamburgerMenu onClick={toggleMenu}>{menu}</StyledHamburgerMenu>
      <StyledMobileLinks $isOpen={isOpen}>
        {config.navLinks.map(({ url, content }, index) => (
          <li key={index}>
            <Link href={url}>{content}</Link>
          </li>
        ))}
        <li>
          <Button>{resume}</Button>
        </li>
      </StyledMobileLinks>
    </StyledHeader>
  );
}

export default Header;
