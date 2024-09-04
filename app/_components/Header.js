"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

import { useLanguage } from "@/app/_context/LanguageContext";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import DarkModeToggle from "@/app/_components/DarkModeToggle";
import LanguageToggle from "@/app/_components/LanguageToggle";

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
  transition: background-color 0.3s ease-in-out;

  &.transparent {
    background-color: var(--color-header-transparent);
  }

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
  gap: 1rem;

  @media (max-width: 768px) {
    padding-right: 1rem;
  }

  button {
    padding: 0.5rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
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

    &.active a {
      color: var(--color-accent);
    }

    a {
      padding: 10px;

      &:before {
        content: "0" counter(item) ".";
        margin-right: 0.2rem;
        color: var(--color-accent);
        font-size: var(--fs-xxs);
        text-align: right;
      }
      &:hover {
        color: var(--color-accent-hover);
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
    order: 1;
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

    &.active a {
      color: var(--color-accent);
    }

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
      &:hover {
        color: var (--color-accent-hover);
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
  const [currentSection, setCurrentSection] = useState("");
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId =
            entry.target.id === "otherProjects" ? "projects" : entry.target.id;
          setCurrentSection(sectionId);
          history.pushState(null, "", `#${sectionId}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <StyledHeader className={isScrollingUp ? "" : "transparent"}>
      <Logo />

      <StyledNav>
        <StyledLinks>
          {config.navLinks.map(({ url, content }, index) => {
            const sectionId = url.split("#")[1];
            return (
              <li
                key={index}
                className={currentSection === sectionId ? "active" : ""}
              >
                <Link href={url}>{content}</Link>
              </li>
            );
          })}
        </StyledLinks>
      </StyledNav>

      <StyledMobileButton>
        <Button onClick={handleDownload}>{resume}</Button>
      </StyledMobileButton>

      <StyledHamburgerMenu onClick={toggleMenu}>{menu}</StyledHamburgerMenu>

      <StyledButtonContainer>
        <DarkModeToggle />
        <LanguageToggle />
      </StyledButtonContainer>

      <StyledMobileLinks $isOpen={isOpen}>
        {config.navLinks.map(({ url, content }, index) => {
          const sectionId = url.split("#")[1];
          return (
            <li
              key={index}
              className={currentSection === sectionId ? "active" : ""}
            >
              <Link href={url} onClick={toggleMenu}>
                {content}
              </Link>
            </li>
          );
        })}
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
