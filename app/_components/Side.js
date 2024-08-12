"use client";

import styled from "styled-components";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: "40px";
  right: "auto";
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: "20px";
    right: "auto";
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function Side({ children }) {
  return <StyledSideElement>{children}</StyledSideElement>;
}

export default Side;
