"use client";

import styled from "styled-components";
import Image from "next/image";

import { useLanguage } from "@/app/_context/LanguageContext";
import AboutText from "@/app/_components/AboutText";
import RevealOnScroll from "@/app/_components/RevealOnScroll";

const StyledAboutSection = styled.section`
  max-width: 900px;

  @media (max-width: 768px) {
    .numbered-heading {
      margin: 0 0 1rem 0;
    }
  }

  .inner {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  height: 300px;
  width: 100%;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    border: 2px solid var(--color-accent);
    top: 14px;
    left: 14px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

function About() {
  const { config } = useLanguage();
  const { header, text, skills, profilePic } = config.about;

  return (
    <RevealOnScroll>
      <StyledAboutSection id="about">
        <h2 className="numbered-heading">{header}</h2>
        <div className="inner">
          <AboutText text={text} skills={skills} />
          <StyledPic>
            <Image
              src={profilePic.src}
              alt={profilePic.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              quality={80}
              priority
              placeholder="blur"
            />
          </StyledPic>
        </div>
      </StyledAboutSection>
    </RevealOnScroll>
  );
}

export default About;
