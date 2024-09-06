"use client";

import styled from "styled-components";
import IconSelector from "@/app/_components/IconSelector";

const StyledTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 0;
  list-style: none;

  li {
    margin: 10px;
    color: var(--color-text);
    font-size: var(--fs-xs);
    white-space: nowrap;
    border-radius: var(--border-radius);
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
      color: var(--color-text-light);
      z-index: 1;
    }

    @media (max-width: 768px) {
      font-size: var(--fs-xxs);
    }

    .tech-text {
      display: none;
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--color-background);
      padding: 2px 5px;
      border-radius: var(--border-radius);
      white-space: nowrap;
    }

    &:hover .tech-text {
      display: block;
    }
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
  }

  li:hover & {
    transform: scale(1.5);
  }
`;

function TechList({ technologies }) {
  return (
    <StyledTechList>
      {technologies.map((technology, i) => (
        <li key={i}>
          <IconWrapper>
            <IconSelector tech={technology} />
          </IconWrapper>
          <span className="tech-text">{technology}</span>
        </li>
      ))}
    </StyledTechList>
  );
}

export default TechList;
