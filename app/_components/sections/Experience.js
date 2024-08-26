"use client";

import styled from "styled-components";
import ExperienceTabPanels from "../ExperienceTabPanels";
import ExperienceTabList from "../ExperienceTabList";
import { useState } from "react";
import { useLanguage } from "@/app/_context/LanguageContext";

const StyledExperienceSection = styled.section`
  max-width: 900px;

  .inner {
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

function Experience() {
  const { config } = useLanguage();
  const { header, jobs } = config.experience;
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabClick(index) {
    setSelectedTab(index);
  }

  return (
    <StyledExperienceSection id="experience">
      <h2 className="numbered-heading">{header}</h2>
      <div className="inner">
        <ExperienceTabList
          jobs={jobs}
          handleTabClick={handleTabClick}
          selectedTab={selectedTab}
        />
        <ExperienceTabPanels jobs={jobs} selectedTab={selectedTab} />
      </div>
    </StyledExperienceSection>
  );
}

export default Experience;
