"use client";

import styled from "styled-components";

const StyledSideElement = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
  right: auto;
  color: var(--color-grey-400);
`;

function Side({ children }) {
  return <StyledSideElement id="side">{children}</StyledSideElement>;
}

export default Side;
