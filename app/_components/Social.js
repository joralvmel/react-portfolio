"use client";

import styled from "styled-components";
import { useLanguage } from "@/app/_context/LanguageContext";
import { motion } from "framer-motion";

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 60px;
    background-color: var(--color-accent);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;
      color: var(--color-accent);

      &:hover {
        color: var(--color-accent-hover);
      }
      svg {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

function Social() {
  const { config } = useLanguage();
  const { socialMedia } = config;

  return (
    <StyledSocialList>
      {socialMedia.map(({ url, name, content, icon }, i) => (
        <motion.li
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={content}
          >
            {icon}
          </a>
        </motion.li>
      ))}
    </StyledSocialList>
  );
}

export default Social;
