"use client";

import styled from "styled-components";

const StyledExperienceSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

function Experience() {
  return (
    <StyledExperienceSection id="experience">
      Experience
    </StyledExperienceSection>
  );
}

export default Experience;
