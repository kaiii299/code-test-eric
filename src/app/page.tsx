"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Hero from "./components/(sections)/hard/hero-section/hero";
import Hero_video from "./components/(sections)/hard/hero-section/hero-video/hero-video";

export default function Home() {
  const secondRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: secondRef,
    offset: ["start 100%", "start 50%"], // trigger early as section approaches
  });

  // Slide red section upward from 10% below to its final position
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <main className="relative w-full">
      {/* Hero Section (scrolls normally) */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Video in the background */}
        <div className="absolute inset-0">
          <Hero_video />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full text-white">
          <Hero />
        </div>
      </section>

      {/* Second Section (red, slides up & overlaps) */}
      <motion.section
        ref={secondRef}
        style={{ y }}
        className="relative min-h-screen z-20 bg-red-600 text-white flex items-center justify-center"
      >
        <h2 className="text-4xl font-bold">Second Section Overlapping</h2>
      </motion.section>

      <section className="relative z-20 min-h-screen bg-green-600 text-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Third Section</h2>
      </section>
    </main>
  );
}