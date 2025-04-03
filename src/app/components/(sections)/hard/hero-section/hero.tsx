import { div } from "framer-motion/client";
import { ArrowRight, Settings, Star } from "lucide-react";
import React from "react";
import Hero_video from "./hero-video/hero-video";
type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <Hero_video />
    </>
    // main container
    // <div className="">
    //   {/* Top half */}
    //   <h1 className="text-[8vw] mt-10 leading-[0.9] font-bold uppercase">
    //     <span>Take</span>
    //     <br />
    //     <div className="flex items-center gap-4">
    //       <Settings size={100} /> Control
    //     </div>
    //     <div>
    //       <span>of hiring</span>
    //     </div>
    //   </h1>

    //   <div className="relative w-full flex items-center justify-center py-4">
    //     <hr className="w-full z-0" />
    //     <div className="absolute px-2">
    //       <Star fill="white" size={24} className="text-gray-500 z-[10]" />
    //     </div>
    //   </div>

    //   {/* Bottom half */}
    //   <div>
    //     <h2 className="text-2xl font-bold w-1/3">
    //       No more wasted budgets. Get your job ads in front of the right
    //       people—at the right place, right time, and right price.
    //     </h2>
    //   </div>

    //   {/* Cards */}
    //   <div className="absolute bottom-0 left-0">
    //     <div className="flex items-end uppercase px-3 py-2 group cursor-pointer bg-purple-800 w-[20vw] h-[7vw] rounded-lg">
    //       <div className="flex justify-between items-center w-full">
    //         <h2>Get started</h2>
    //         <div className="bg-white rounded-full">
    //           <ArrowRight
    //             size={24}
    //             color="black"
    //             className="-rotate-45 group-hover:rotate-0 transition-all duration-300 cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Scroll down */}
    // </div>
  );
};

export default Hero;
