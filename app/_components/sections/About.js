"use client";

import styled from "styled-components";

import { config } from "@/app/config";
import AboutText from "../AboutText";

const StyledAboutSection = styled.section`
  max-width: 900px;

  h2 {
    color: var(--color-grey-500);
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  aspect-ratio: 1 / 1;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    border: 2px solid var(--color-grey-500);
    top: 14px;
    left: 14px;
    z-index: -1;
  }
`;

function About() {
  const { header, text, skills } = config.about;
  const { profile } = config.images;

  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">{header}</h2>

      <div className="inner">
        <AboutText text={text} skills={skills} />
        <StyledPic>{profile}</StyledPic>
      </div>
    </StyledAboutSection>
  );
}

export default About;
