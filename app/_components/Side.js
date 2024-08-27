"use client";

import styled from "styled-components";
import Social from "./Social";

const StyledSideElement = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
  right: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Side() {
  return (
    <StyledSideElement id="side">
      <Social />
    </StyledSideElement>
  );
}

export default Side;
