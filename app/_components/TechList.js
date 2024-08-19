"use client";

import styled from "styled-components";

const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;

  li {
    margin: 0 20px 5px 0;
    color: var(--color-grey-500);
    font-size: var(--fs-xs);
    white-space: nowrap;
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
