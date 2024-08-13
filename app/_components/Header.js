"use client";

import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import Button from "./Button";

import { config } from "@/app/config";

const StyledHeader = styled.header`
  position: fixed;
  padding: 0px 50px;
  width: 100%;
  height: 60px;
  background-color: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  color: var(--color-grey-400);
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
        color: var(--color-grey-500);
        font-size: var(--fs-xxs);
        text-align: right;
      }
      &:hover,
      &:focus {
        color: var(--color-grey-500);
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />
        <StyledLinks>
          {config.navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>{link.content}</Link>
            </li>
          ))}
        </StyledLinks>
      </StyledNav>
      <Button>Resume</Button>
    </StyledHeader>
  );
}

export default Header;
