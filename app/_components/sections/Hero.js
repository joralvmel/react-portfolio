"use client";

import styled from "styled-components";

import { config } from "@/app/config";

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0px;
  h1 {
    color: var(--color-secondary);
    margin: 0 0 20px 5px;
    font-size: var(--fs-lg);
    font-weight: 400;
  }

  h2 {
    color: var(--color-accent);
    margin: 0 0 40px 4px;
    font-weight: 400;
  }

  h3 {
    color: var(--color-secondary);
  }

  .text {
    color: var(--color-secondary);
    font-size: var(--fs-lg);
    margin: 40px 0 0;
    max-width: 640px;
  }
`;

function Hero() {
  const { title, name, header, text } = config.hero;
  return (
    <StyledHeroSection>
      <h1>{title}</h1>
      <h2 className="big-heading">{name}</h2>
      <h3 className="medium-heading">{header}</h3>
      <p className="text">{text}</p>
    </StyledHeroSection>
  );
}

export default Hero;
