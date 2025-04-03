import React from "react";
import Boxbutton from "../Buttons/box-button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative z-10 w-full h-full max-h-[100vh] inset-0 overflow-hidden p-5 ">
      {/* Top half */}
      {/* Footer */}
      <div className="md:grid md:grid-cols-2 grid-cols-1 w-full h-full">
        <div className="relative w-full h-full">
          {/* Left-bottom Boxbutton */}
          <div className="absolute bottom-0 left-0">
            <Boxbutton />
          </div>
          {/* Right-bottom Scroll Down */}
          <div className="absolute bottom-0 right-0 md:block hidden">
            <div className="flex items-center gap-3">
              <ArrowDown size={30} />
              <span className="uppercase">scroll down</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
