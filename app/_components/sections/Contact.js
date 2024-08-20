"use client";

import { config } from "@/app/config";
import styled from "styled-components";

const StyledContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;

  .title {
    font-size: var(--fs-heading);
    color: var(--color-primary);
  }

  .text {
    color: var(--color-secondary);
  }

  .email-link {
    margin-top: 50px;
    color: var(--color-accent);
  }
`;

function Contact() {
  const { header, title, email, text } = config.contact;

  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading">{header}</h2>

      <h2 className="title">{title}</h2>

      <p className="text">{text}</p>

      <a className="email-link" href={`mailto:${email}`}>
        {email}
      </a>
    </StyledContactSection>
  );
}

export default Contact;
