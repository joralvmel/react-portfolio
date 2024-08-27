"use client";

import styled from "styled-components";
import GlobalStyles from "@/app/_styles/GlobalStyles";
import Footer from "./Footer";
import Header from "./Header";
import Side from "./Side";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function Layout({ children }) {
  return (
    <div id="root">
      <GlobalStyles />
      <StyledContent>
        <Header />
        <Side />
        <div id="content">
          {children}
          <Footer />
        </div>
      </StyledContent>
    </div>
  );
}

export default Layout;
