"use client";

import styled from "styled-components";

const StyledSpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSpinner = styled.div`
  margin: 3.2rem auto 1.6rem;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid var(--color-accent);
  border-right-color: var(--color-background);
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;

function Spinner() {
  return (
    <StyledSpinnerContainer>
      <StyledSpinner />
    </StyledSpinnerContainer>
  );
}

export default Spinner;
