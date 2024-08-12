"use client";

import styled from "styled-components";

const StyledJobsSection = styled.section`
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

function Jobs() {
  return <StyledJobsSection>Jobs</StyledJobsSection>;
}

export default Jobs;
