"use client";

import { useState } from "react";
import styled from "styled-components";

import { useLanguage } from "@/app/_context/LanguageContext";
import ExperienceTabPanels from "@/app/_components/ExperienceTabPanels";
import ExperienceTabList from "@/app/_components/ExperienceTabList";
import RevealOnScroll from "@/app/_components/RevealOnScroll";

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
    <RevealOnScroll>
      <StyledExperienceSection id="experience">
        <h2 className="numbered-heading">{header}</h2>
        <RevealOnScroll>
          <div className="inner">
            <ExperienceTabList
              jobs={jobs}
              handleTabClick={handleTabClick}
              selectedTab={selectedTab}
            />
            <ExperienceTabPanels jobs={jobs} selectedTab={selectedTab} />
          </div>
        </RevealOnScroll>
      </StyledExperienceSection>
    </RevealOnScroll>
  );
}

export default Experience;
