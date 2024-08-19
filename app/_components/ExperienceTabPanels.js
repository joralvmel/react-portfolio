"use client";

import styled from "styled-components";
import ExperienceTabPanel from "./ExperienceTabPanel";

const StyledExperienceTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  .technologies-list {
    display: grid;
    grid-template-columns: repeat(4, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    list-style: none;
    color: var(--color-grey-500);

    li {
      position: relative;
      margin-bottom: 5px;
      padding-left: 20px;
      font-size: var(--fs-xs);
    }
  }
`;

function ExperienceTabPanels({ jobs }) {
  return (
    <StyledExperienceTabPanels>
      {jobs.map((job, i) => (
        <ExperienceTabPanel key={i} job={job}></ExperienceTabPanel>
      ))}
    </StyledExperienceTabPanels>
  );
}

export default ExperienceTabPanels;
