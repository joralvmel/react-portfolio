"use client";

import styled from "styled-components";

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

function About() {
  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>
    </StyledAboutSection>
  );
}

export default About;
