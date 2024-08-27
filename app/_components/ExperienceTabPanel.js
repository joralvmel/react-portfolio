"use client";

import styled from "styled-components";
import TechList from "./TechList";

const StyledExperienceTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  color: var(--color-secondary);

  h3 {
    margin-bottom: 2px;
    font-size: var(--fs-xxl);
    font-weight: 500;
    line-height: 1.3;
    color: var(--color-text);

    .company {
      color: var(--color-accent);
    }
  }

  .description {
    font-size: var(--fs-md);

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--color-text-light);
    font-size: var(--fs-xs);
  }
`;

function ExperienceTabPanel({ job }) {
  const { position, company, startDate, endDate, description, technologies } =
    job;

  return (
    <StyledExperienceTabPanel>
      <h3>
        {position} <span className="company"> - {company}</span>
      </h3>
      <p className="range">
        {startDate} - {endDate}
      </p>
      <ul className="description">
        {description.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <TechList technologies={technologies} columns={4} />
    </StyledExperienceTabPanel>
  );
}

export default ExperienceTabPanel;
