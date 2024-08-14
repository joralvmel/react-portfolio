"use client";

import styled from "styled-components";

import { config } from "@/app/config";

const StyledExperienceSection = styled.section`
  max-width: 900px;

  h2 {
    color: var(--color-grey-500);
  }

  .inner {
    display: flex;
  }
`;

const StyledTabList = styled.div`
  position: relative;
  width: max-content;
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--color-grey-200);
  background-color: transparent;
  color: var(--color-grey-400);
  font-size: var(--fs-xs);
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: var(--color-grey-100);
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  color: var(--color-grey-400);

  h3 {
    margin-bottom: 2px;
    font-size: var(--fs-xxl);
    font-weight: 500;
    line-height: 1.3;
    color: var(--color-grey-600);

    .company {
      color: var(--color-grey-400);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--color-grey-500);
    font-size: var(--fs-xs);
  }
`;

function Experience() {
  return (
    <StyledExperienceSection id="experience">
      {config.experience.header}
      <div className="inner">
        <StyledTabList>
          {config.experience.jobs.map((job, i) => (
            <StyledTabButton key={i}>{job.company}</StyledTabButton>
          ))}
        </StyledTabList>
        <StyledTabPanels>
          {config.experience.jobs.map((job, i) => (
            <StyledTabPanel key={i}>
              <h3>
                {job.position} <span className="company">at {job.company}</span>
              </h3>
              <p className="range">
                {job.startDate} - {job.endDate}
              </p>
              {job.description}
            </StyledTabPanel>
          ))}
        </StyledTabPanels>
      </div>
    </StyledExperienceSection>
  );
}

export default Experience;
