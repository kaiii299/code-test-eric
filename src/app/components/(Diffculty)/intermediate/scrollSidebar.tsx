"use client";

import { motion, MotionValue } from "framer-motion";

type Props = {
  progress: MotionValue<number>;
};

const ScrollSidebar = ({ progress }: Props) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-[20vh] w-[12px] bg-white rounded-full z-50 flex items-end justify-center shadow-md">
      <motion.div
        style={{
          scaleY: progress,
          transformOrigin: "top",
        }}
        className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[6px] h-[calc(100%-10px)] bg-green-500 rounded-full"
      />
    </div>
  );
};

export default ScrollSidebar;