"use client";

import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import ScrollSidebar from "../components/(sections)/intermediate/scrollSidebar";
import ScrollCircleProgress from "../components/(sections)/intermediate/scrollCircleProgress";

const Page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // makes scrollYProgress range from 0 to 1 across section
  });

  return (
    <>
      {/* Scroll Sidebar progress */}
      <ScrollSidebar progress={scrollYProgress} />
      {/* Scroll Circle Progress */}
      <ScrollCircleProgress progress={scrollYProgress} />

      {/* Scrollable Content */}
      <section ref={ref} className="text-black overflow-x-hidden">
        <div className="w-screen h-[50vh] bg-red-200 flex justify-center items-center">
          <span className="text-7xl">Scroll</span>
        </div>
        <div className="w-screen h-[50vh] bg-blue-200 flex justify-center items-center">
          <span className="text-7xl">1</span>
        </div>
        <div className="w-screen h-[50vh] bg-green-200 flex justify-center items-center">
          <span className="text-7xl">2</span>
        </div>
        <div className="w-screen h-[50vh] bg-yellow-200 flex justify-center items-center">
          <span className="text-7xl">3</span>
        </div>
        <div className="w-screen h-[50vh] bg-purple-200 flex justify-center items-center">
          <span className="text-7xl">4</span>
        </div>
      </section>
    </>
  );
};

export default Page;
