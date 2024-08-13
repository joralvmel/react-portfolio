"use client";

import styled from "styled-components";

import { config } from "@/app/config";

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

const StyledText = styled.div`
  color: var(--color-grey-500);
  width: 100%;

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    list-style: none;
    color: var(--color-grey-500);

    li {
      position: relative;
      margin-bottom: 0px;
      padding-left: 20px;
      font-size: var(--fs-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--color-grey-500);
        font-size: var(--fs-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  aspect-ratio: 1 / 1;

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    background-color: var(--color-grey-500);
  }

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
  return (
    <StyledAboutSection id="about">
      {config.about.section}

      <div className="inner">
        <StyledText>
          {config.about.text}

          <ul className="skills-list">
            {config.about.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </StyledText>
        <StyledPic>{config.about.image}</StyledPic>
      </div>
    </StyledAboutSection>
  );
}

export default About;
