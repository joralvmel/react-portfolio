"use client";

import styled from "styled-components";

import { config } from "@/app/config";
import ExperienceTabPanels from "../ExperienceTabPanels";
import ExperienceTabList from "../ExperienceTabList";

const StyledExperienceSection = styled.section`
  max-width: 900px;

  h2 {
    color: var(--color-grey-500);
  }

  .inner {
    display: flex;
  }
`;

function Experience() {
  const { header, jobs } = config.experience;
  return (
    <StyledExperienceSection id="experience">
      <h2 className="numbered-heading">{header}</h2>
      <div className="inner">
        <ExperienceTabList jobs={jobs} />
        <ExperienceTabPanels jobs={jobs} />
      </div>
    </StyledExperienceSection>
  );
}

export default Experience;
