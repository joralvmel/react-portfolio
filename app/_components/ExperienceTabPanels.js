"use client";

import styled from "styled-components";
import ExperienceTabPanel from "./ExperienceTabPanel";

const StyledExperienceTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
`;

function ExperienceTabPanels({ jobs, selectedTab }) {
  return (
    <StyledExperienceTabPanels>
      {jobs[selectedTab] && <ExperienceTabPanel job={jobs[selectedTab]} />}
    </StyledExperienceTabPanels>
  );
}

export default ExperienceTabPanels;
