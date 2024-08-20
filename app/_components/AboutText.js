"use client";

import styled from "styled-components";
import TechList from "./TechList";

const StyledText = styled.div`
  color: var(--color-secondary);
  font-size: var(--fs-lg);
  width: 100%;
`;

function AboutText({ text, skills }) {
  return (
    <StyledText>
      <div>
        {text.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <TechList technologies={skills} columns={2} />
    </StyledText>
  );
}

export default AboutText;
