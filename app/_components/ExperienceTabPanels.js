"use client";

import styled from "styled-components";
import ExperienceTabPanel from "@/app/_components/ExperienceTabPanel";

const StyledExperienceTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

function ExperienceTabPanels({ jobs, selectedTab }) {
  return (
    <StyledExperienceTabPanels>
      {jobs[selectedTab] && <ExperienceTabPanel job={jobs[selectedTab]} />}
    </StyledExperienceTabPanels>
  );
}

export default ExperienceTabPanels;
