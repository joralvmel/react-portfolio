"use client";

import styled from "styled-components";

import { config } from "@/app/config";

const StyledHeroSection = styled.section`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  h1 {
    color: var(--color-grey-500);
    margin: 0 0 20px 5px;
    font-size: var(--fs-lg);
    font-weight: 400;
  }

  h2 {
    color: var(--color-grey-500);
    margin: 0 0 40px 4px;
    font-weight: 400;
  }

  h3 {
    color: var(--color-grey-400);
  }

  p {
    color: var(--color-grey-400);
    margin: 40px 0 0;
    max-width: 640px;
  }
`;

function Hero() {
  return <StyledHeroSection>{config.hero}</StyledHeroSection>;
}

export default Hero;
