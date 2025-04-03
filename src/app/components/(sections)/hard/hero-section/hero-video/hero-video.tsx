"use client";
// * ---------------------
// * This component displays an animated hero section with two videos:
// * 1. An intro video that plays once on load.
// * 2. A seamless loop video that takes over after the intro.
// *
// * Framer Motion is used for smooth transitions.
// * The loop video starts loading immediately but stays hidden
// * until the intro video finishes to prevent black flashes.
// * Once the intro ends, the loop video fades in seamlessly.
// *

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [showIntro, setShowIntro] = useState(true);
  const loopRef = useRef<HTMLVideoElement>(null);
  const introRef = useRef<HTMLVideoElement>(null);
  const [isLoopReady, setIsLoopReady] = useState(false);

  // When intro ends, fade out and play loop
  const handleIntroEnd = () => {
    setShowIntro(false);
    if (loopRef.current) {
      loopRef.current.currentTime = 0;
      loopRef.current.play();
    }
  };

  // Ensure loop is fully buffered and ready
  const handleLoopReady = () => {
    setIsLoopReady(true);
  };

  // Play loop video muted but hidden behind intro
  useEffect(() => {
    if (loopRef.current) {
      loopRef.current.load();
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Looping video starts immediately but hidden behind */}
      <motion.video
        ref={loopRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={handleLoopReady}
        initial={{ display: "none" }}
        animate={{ display: !showIntro && isLoopReady ? "block" : "none" }}
        preload="auto"
        transition={{ duration: 0.01, ease: "easeInOut" }}
      >
        <source src="/videos/hero-video-loop.mp4" type="video/mp4" />
      </motion.video>

      {/* Intro video plays on top of loop video */}
      {showIntro && (
        <motion.video
          ref={introRef}
          key="intro"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleIntroEnd}
          initial={{ display: "block" }}
          exit={{ display: "none" }}
          transition={{ duration: 0.01, ease: "easeInOut" }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </motion.video>
      )}
    </div>
  );
}
