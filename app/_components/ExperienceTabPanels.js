"use client";

import styled from "styled-components";
import ExperienceTabPanel from "./ExperienceTabPanel";

const StyledExperienceTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
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
