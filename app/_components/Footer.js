"use client";

import styled from "styled-components";

const StyledFooter = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--color-grey-500);
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--color-grey-500);
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

function Footer() {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          <li>FooterLink 1</li>
          <li>FooterLink 2</li>
          <li>FooterLink 3</li>
        </ul>
      </StyledSocialLinks>

      <StyledCredit>
        <a href="https://github.com/joralvmel/react-portfolio">
          <div>Designed &amp; Built by Jorge Alvarez</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
}

export default Footer;
