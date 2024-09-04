"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactTypingEffect from "react-typing-effect";
import { useLanguage } from "@/app/_context/LanguageContext";
import WaveTitle from "@/app/_components/WaveTitle";
import RevealOnScroll from "@/app/_components/RevealOnScroll";

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding: 0px;

  .small-heading {
    color: var(--color-secondary);
    margin: 0;
    font-size: var(--fs-lg);
    font-weight: 400;
  }

  .big-heading {
    font-size: clamp(40px, 8vw, 80px);
    color: var(--color-accent);
    margin: 10px 10px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: clamp(20px, 12vw, 40px);
    }
  }

  .medium-heading {
    color: var(--color-secondary);
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);

    @media (max-width: 768px) {
      font-size: clamp(20px, 6vw, 30px);
    }
  }

  .text {
    color: var(--color-secondary);
    font-size: var(--fs-lg);
    margin: 40px 0 0;
    max-width: 640px;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 10rem);
  }
`;

function Hero() {
  const { config } = useLanguage();
  const { title, name, text, headers } = config.hero;

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  return (
    <StyledHeroSection id="hero">
      <WaveTitle title={title} customClassName="small-heading" />
      <WaveTitle title={name} customClassName="big-heading" delay={2000} />
      <h3 className="medium-heading">
        <ReactTypingEffect
          text={headers}
          speed={80}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={isInitialLoad ? 3000 : 200}
        />
      </h3>
      <RevealOnScroll delay={4}>
        <p className="text">{text}</p>
      </RevealOnScroll>
    </StyledHeroSection>
  );
}

export default Hero;
