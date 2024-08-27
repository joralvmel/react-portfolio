"use client";

import styled from "styled-components";

const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 0;
  list-style: none;

  li {
    margin: 5px;
    color: var(--color-text);
    font-size: var(--fs-xs);
    white-space: nowrap;
    border: 1px solid var(--color-accent);
    border-radius: var(--border-radius);
    padding: 5px;

    &:hover {
      color: var(--color-text-light);
      border: 1px solid var(--color-accent-hover);
    }
  }
`;

function TechList({ technologies }) {
  return (
    <StyledTechList>
      {technologies.map((technology, i) => (
        <li key={i}>{technology}</li>
      ))}
    </StyledTechList>
  );
}

export default TechList;
