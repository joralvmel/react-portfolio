"use client";

import styled from "styled-components";

const StyledButton = styled.button`
  color: var(--color-text);
  background-color: transparent;
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius);
  font-size: var(--fs-xxs);

  padding: 0.5rem 1rem;

  transition: var(--transition-background);
  &:hover {
    background-color: var(--color-accent);
    color: var(--color-text-light);
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
