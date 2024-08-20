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
  &:focus,
  &.selected {
    color: var(--color-text-light);
  }

  &:focus,
  &.selected {
    border-right: 2px solid var(--color-accent);
  }
`;

function ExperienceTabList({ jobs, handleTabClick, selectedTab }) {
  return (
    <StyledExperienceTabList>
      {jobs.map(({ company }, i) => (
        <StyledTabButton
          key={i}
          onClick={() => handleTabClick(i)}
          className={selectedTab === i ? "selected" : ""}
        >
          {company}
        </StyledTabButton>
      ))}
    </StyledExperienceTabList>
  );
}

export default ExperienceTabList;
