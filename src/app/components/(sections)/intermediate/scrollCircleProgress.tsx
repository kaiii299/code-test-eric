"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Optional: Use your icon library

type Props = {
  progress: MotionValue<number>;
};

const ScrollCircleProgress = ({ progress }: Props) => {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = useTransform(
    progress,
    [0, 1],
    [circumference, 0]
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="fixed bottom-6 right-6 w-16 h-16 z-50" onClick={scrollToTop}>
      <div className="absolute inset-0 flex items-center justify-center text-black pointer-events-none">
        {/* Arrow Icon */}
        <ArrowUp className="w-5 h-5 z-10" color="black" />
        {/* Or: <span className="text-xl font-bold">↑</span> */}
      </div>
      <svg className="w-full h-full rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="4"
          fill="white"
        />
        {/* Animated Progress Circle */}
        <motion.circle
          cx="32"
          cy="32"
          r={radius}
          stroke="#10b981"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
      </svg>
    </button>
  );
};

export default ScrollCircleProgress;