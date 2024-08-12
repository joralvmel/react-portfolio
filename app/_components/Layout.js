"use client";

import styled from "styled-components";
import GlobalStyles from "@/app//styles/GlobalStyles";
import Nav from "./Nav";
import Social from "./Social";
import Footer from "./Footer";

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
        <Nav />
        <Social />

        <div id="content">
          {children}
          <Footer />
        </div>
      </StyledContent>
    </div>
  );
}

export default Layout;
