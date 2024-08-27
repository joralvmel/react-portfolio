"use client";

import styled from "styled-components";
import Layout from "@/app/_components/Layout";
import Hero from "@/app/_components/sections/Hero";
import About from "@/app/_components/sections/About";
import Experience from "@/app/_components/sections/Experience";
import Projects from "@/app/_components/sections/Projects";
import OtherProjects from "@/app/_components/sections/OtherProjects";
import Contact from "@/app/_components/sections/Contact";

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0px 150px;

  @media (max-width: 768px) {
    padding: 6rem 1rem 0 1rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OtherProjects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}
