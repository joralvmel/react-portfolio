"use client";

import styled from "styled-components";
import Link from "next/link";

import { useLanguage } from "@/app/_context/LanguageContext";

const StyledLogo = styled.div`
  a {
    color: var(--color-accent);
    width: 40px;
    height: 40px;
    position: relative;
    &:hover {
      color: var(--color-accent-hover);
    }
  }
`;

function Logo() {
  const { config } = useLanguage();
  const { logo } = config.icons;

  return (
    <StyledLogo className="logo">
      <Link href="/" aria-label="home">
        {logo}
      </Link>
    </StyledLogo>
  );
}

export default Logo;
