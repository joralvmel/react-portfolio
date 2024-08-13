"use client";

import styled from "styled-components";

const StyledButton = styled.button`
  color: var(--color-grey-500);
  background-color: transparent;
  border: 1px solid var(--color-grey-500);
  border-radius: var(--border-radius);
  font-size: var(--fs-xxs);

  padding: 0.5rem 1rem;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--color-grey-200);
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
