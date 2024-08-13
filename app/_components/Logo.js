"use client";

import Link from "next/link";
import styled from "styled-components";

import { config } from "@/app/config";

const StyledLogo = styled.div`
  a {
    color: var(--color-grey-300);
    width: 40px;
    height: 40px;
    position: relative;
    &:hover {
      color: var(--color-grey-400);
    }
  }
`;

function Logo() {
  return (
    <StyledLogo className="logo">
      <Link href="/" aria-label="home">
        {config.logo}
      </Link>
    </StyledLogo>
  );
}

export default Logo;
