"use client";

import styled from "styled-components";
import TechList from "./TechList";

const StyledExperienceTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;
  color: var(--color-grey-400);

  h3 {
    margin-bottom: 2px;
    font-size: var(--fs-xxl);
    font-weight: 500;
    line-height: 1.3;
    color: var(--color-grey-600);

    .company {
      color: var(--color-grey-400);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--color-grey-500);
    font-size: var(--fs-xs);
  }
`;

function ExperienceTabPanel({ job, key }) {
  const { position, company, startDate, endDate, description, technologies } =
    job;

  return (
    <StyledExperienceTabPanel key={key}>
      <h3>
        {position} <span className="company">at {company}</span>
      </h3>
      <p className="range">
        {startDate} - {endDate}
      </p>
      <ul>
        {description.map((p, i) => (
          <li key={i} id={i}>
            {p}
          </li>
        ))}
      </ul>

      <TechList technologies={technologies} columns={4} />
    </StyledExperienceTabPanel>
  );
}

export default ExperienceTabPanel;
