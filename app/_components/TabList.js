"use client";

import styled from "styled-components";

const StyledTabList = styled.div`
  position: relative;
  width: max-content;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
  }
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

  @media (max-width: 768px) {
    border: none;
    &:focus,
    &.selected {
      border: none;
      border-bottom: 2px solid var(--color-accent);
    }
  }
`;

function TabList({ items, handleTabClick, selectedTab, tabLabelKey }) {
  return (
      <StyledTabList>
        {items.map((item, i) => (
            <StyledTabButton
                key={i}
                onClick={() => handleTabClick(i)}
                className={selectedTab === i ? "selected" : ""}
            >
              {item[tabLabelKey]}
            </StyledTabButton>
        ))}
      </StyledTabList>
  );
}

export default TabList;
