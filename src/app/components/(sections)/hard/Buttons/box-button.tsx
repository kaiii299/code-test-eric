"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import WaveText from "../text-animations/wave-text";

const BoxButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="#contact"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-[30vw] max-w-[33.7rem] h-[150px] rounded-sm group cursor-pointer bg-[#1e2556] p-4 flex flex-col justify-between shadow-md"
    >
      <div className="flex-grow" />
      <div className="flex items-center justify-between">
        <span className="text-white text-lg font-semibold">
          <WaveText
            text="GET STARTED"
            className="text-white text-2xl font-semibold"
            animate={isHovered}
          />
        </span>
        <div className="bg-white rounded-full">
          <ArrowUpRight className="text-black w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
        </div>
      </div>
    </motion.a>
  );
};

export default BoxButton;