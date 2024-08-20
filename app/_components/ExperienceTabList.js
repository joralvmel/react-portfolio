"use client";

import styled from "styled-components";

const StyledExperienceTabList = styled.div`
  position: relative;
  width: max-content;
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--color-accent);
  background-color: transparent;
  color: var(--color-primary);
  font-size: var(--fs-xs);
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    border-bottom: 2px solid var(--color-accent);
    color: var(--color-text-light);
  }
`;

function ExperienceTabList({ jobs }) {
  return (
    <StyledExperienceTabList>
      {jobs.map(({ company }, i) => (
        <StyledTabButton key={i}>{company}</StyledTabButton>
      ))}
    </StyledExperienceTabList>
  );
}

export default ExperienceTabList;
