"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./components/(sections)/hard/hero-section/hero";
import { useRef } from "react";

export default function Home() {
  const ref: any = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // hero scrolls out
  });

  // Animations
  const secondY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div className="relative h-screen">
      <motion.section
        ref={ref}
        // style={{ opacity: heroOpacity }}
      >
        <Hero/>
      </motion.section>

      <motion.section
        style={{ y: secondY }}
        className="h-screen flex items-center justify-center bg-red-500 text-black sticky top-0"
      >
        <h2 className="text-4xl font-semibold">Next Section Appears</h2>
      </motion.section>
    </div>
  );
}
