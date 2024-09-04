import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
`;

const RevealOnScroll = ({
  children,
  duration = 1,
  delay = 0,
  distance = 20,
  once = true,
  customClass,
}) => {
  const containerClass = customClass ? `${customClass} container` : "container";

  return (
    <Container className={containerClass}>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [distance, 0], opacity: 1 }}
        viewport={{ once }}
        transition={{ delay, duration }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default RevealOnScroll;
