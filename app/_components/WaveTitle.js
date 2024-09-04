"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WaveTitle = ({
  title,
  initialDelay = 0,
  wordDelay = 0.01,
  stagger = 0.05,
  customClassName,
  customAnimation,
  delay = 0,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        y: { type: "spring", stiffness: 100 },
      },
    },
  };

  return (
    <h2 aria-label={title} role="heading" className={customClassName}>
      {title.split(" ").map((word, index) => {
        const childrenDelay = initialDelay
          ? (initialDelay + index) * wordDelay
          : index * wordDelay;

        return (
          <motion.span
            key={index}
            className="wordContainer"
            aria-hidden="true"
            variants={wordAnimation}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            transition={{
              delayChildren: childrenDelay,
              staggerChildren: stagger,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  key={index}
                  className="characterContainer"
                  aria-hidden="true"
                  variants={customAnimation ?? characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
            <motion.span
              className="characterContainer"
              aria-hidden="true"
              variants={customAnimation ?? characterAnimation}
            >
              &nbsp;
            </motion.span>
          </motion.span>
        );
      })}
    </h2>
  );
};

export default WaveTitle;
