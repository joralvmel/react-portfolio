"use client";

import styled from "styled-components";
import Layout from "@/app/_components/Layout";
import Hero from "@/app/_components/sections/Hero";
import About from "@/app/_components/sections/About";
import Experience from "@/app/_components/sections/Jobs";
import Featured from "@/app/_components/sections/Featured";
import Projects from "@/app/_components/sections/Projects";
import Contact from "@/app/_components/sections/Contact";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home() {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}
