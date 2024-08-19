"use client";

import { config } from "@/app/config";
import styled from "styled-components";

const StyledContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;

  h2 {
    font-size: var(--fs-heading);
    color: var(--color-grey-500);
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--color-grey-500);
    font-size: var(--fs-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fs-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: var(--fs-heading);
    color: var(--color-grey-400);
  }

  .email-link {
    margin-top: 50px;
  }
`;

function Contact() {
  const { header, title, email, text } = config.contact;

  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading">{header}</h2>

      <h2 className="title">{title}</h2>

      <p>{text}</p>

      <a className="email-link" href={`mailto:${email}`}>
        {email}
      </a>
    </StyledContactSection>
  );
}

export default Contact;
