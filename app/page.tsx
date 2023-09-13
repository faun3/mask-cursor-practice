"use client";

import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  let maskSize = isHovered ? 400 : 40; // size of the mask in pixels

  return (
    <main className="h-screen">
      {/* mask */}
      <motion.div
        className="h-full w-full flex items-center justify-center text-[#afa18f] text-[4rem] leading-[110%] cursor-default font-bold absolute mask-circle"
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}>
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          All of this is masked content. You should not be able to see this
          unless you are hovering over with your mouse.
        </p>
      </motion.div>

      {/* body */}
      <div className="h-full w-full flex items-center justify-center text-[#afa18f] text-[4rem] leading-[110%] cursor-default bg-[#0f0f0f] m-0 font-bold">
        <p>
          This is unmasked content. Everyone should be able to see it, no matter
          if they hover over the text or not.
        </p>
      </div>
    </main>
  );
};
export default Page;
