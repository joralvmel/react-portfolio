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
  padding: 0 1rem;
  width: 100%;
  height: 4rem;
  background-color: var(--color-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
    gap: 1.5rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  justify-content: flex-end;
  color: var(--color-text);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding-left: 1rem;
`;

const StyledLinks = styled.ul`
  display: flex;
  width: auto;
  justify-content: space-between;
  list-style: none;

  li {
    margin: 0 0.2rem;
    position: relative;
    counter-increment: item 1;
    font-size: var(--fs-xs);

    a {
      padding: 10px;

      &:before {
        content: "0" counter(item) ".";
        margin-right: 0.2rem;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledHamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: var(--color-accent);
  width: 3rem;
  height: 3rem;

  &:hover {
    color: var(--color-accent-hover);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledMobileLinks = styled.ul`
  display: none;
  list-style: none;
  position: absolute;
  top: 3rem;
  right: 0.5rem;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  background: var(--color-tertiary);
  transition: var(--transition-transform);

  li {
    counter-increment: item 1;
    font-size: var(--fs-lg);
    width: 100%;

    a {
      padding: 0.5rem;
      width: 100%;

      &:before {
        content: "0" counter(item) ".";
        margin-right: 0.2rem;
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

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(0)" : "translateY(-10px)"};
  }
`;

const StyledMobileButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { config } = useLanguage();
  const { resume } = config.buttons;
  const { menu } = config.icons;
  const { cv } = config;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `/${cv}`;
    link.download = cv;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledHeader>
      <Logo />

      <StyledButtonContainer>
        <DarkModeToggle />
        <LanguageToggle />
      </StyledButtonContainer>

      <StyledNav>
        <StyledLinks>
          {config.navLinks.map(({ url, content }, index) => (
            <li key={index}>
              <Link href={url}>{content}</Link>
            </li>
          ))}
        </StyledLinks>
      </StyledNav>
      <StyledMobileButton>
        <Button onClick={handleDownload}>{resume}</Button>
      </StyledMobileButton>

      <StyledHamburgerMenu onClick={toggleMenu}>{menu}</StyledHamburgerMenu>
      <StyledMobileLinks $isOpen={isOpen}>
        {config.navLinks.map(({ url, content }, index) => (
          <li key={index}>
            <Link href={url} onClick={toggleMenu}>
              {content}
            </Link>
          </li>
        ))}
        <li>
          <Button onClick={handleDownload} width="100%">
            {resume}
          </Button>
        </li>
      </StyledMobileLinks>
    </StyledHeader>
  );
}

export default Header;
