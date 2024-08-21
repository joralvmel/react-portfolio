"use client";

import styled from "styled-components";

const StyledButtonToggle = styled.button`
  background-color: transparent;
  color: var(--color-accent);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: var(--color-accent-hover);
  }
`;

function ButtonToggle({ children, onClick }) {
  return <StyledButtonToggle onClick={onClick}>{children}</StyledButtonToggle>;
}

export default ButtonToggle;