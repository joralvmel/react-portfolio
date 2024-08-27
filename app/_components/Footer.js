"use client";

import styled from "styled-components";
import { useLanguage } from "../_context/LanguageContext";
import Social from "./Social";

const StyledFooter = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--color-text);
  font-size: var(--fs-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const FooterSocialList = styled.div`
  ul {
    flex-direction: row;
    justify-content: center;
    &:after {
      content: none;
    }
    li {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function Footer() {
  const { config } = useLanguage();
  const { text, url } = config.footer;
  return (
    <StyledFooter>
      <FooterSocialList>
        <Social />
      </FooterSocialList>
      <StyledCredit>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div>{text}</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
}

export default Footer;
