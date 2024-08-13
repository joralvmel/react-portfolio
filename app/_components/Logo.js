"use client";

import Link from "next/link";
import styled from "styled-components";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

const StyledLogo = styled.div`
  a {
    color: var(--color-grey-300);
    width: 60px;
    height: 60px;
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
        <CodeBracketSquareIcon />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
