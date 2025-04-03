"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
  text: string;
  className?: string;
  animate?: boolean;
};

const WaveText = ({ text, className = "", animate = false }: Props) => {
  const ease = [0.25, 1, 0.5, 1]; // faster and punchier than default ease

  const getCharVariants = (i: number) => ({
    initial: { y: 0 },
    animate: {
      y: "-100%",
      transition: {
        delay: i * 0.03, // faster stagger
        duration: 0.25,
        ease,
      },
    },
    exit: {
      y: 0,
      transition: {
        delay: i * 0.01,
        duration: 0.25,
        ease,
      },
    },
  });

  const getSecondCharVariants = (i: number) => ({
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        delay: i * 0.02 + 0.15,
        duration: 0.25,
        ease,
      },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: {
        delay: i * 0.01,
        duration: 0.25,
        ease,
      },
    },
  });

  return (
    <span className={`inline-flex overflow-hidden ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-block"
          style={{ lineHeight: "1em" }}
        >
          {char === " " ? (
            // Render space with non-breaking space
            <span className="inline-block" style={{ width: "0.5ch" }}>
              {"\u00A0"}
            </span>
          ) : (
            <>
              {/* First char slides up */}
              <motion.span
                className="absolute top-0 left-0"
                custom={i}
                initial="initial"
                animate={animate ? "animate" : "exit"}
                variants={getCharVariants(i)}
              >
                {char}
              </motion.span>

              {/* Second char slides in from below */}
              <motion.span
                className="absolute top-0 left-0"
                custom={i}
                initial="initial"
                animate={animate ? "animate" : "exit"}
                variants={getSecondCharVariants(i)}
              >
                {char}
              </motion.span>

              {/* Hidden fallback for spacing */}
              <span className="invisible">{char}</span>
            </>
          )}
        </span>
      ))}
    </span>
  );
};

export default WaveText;
