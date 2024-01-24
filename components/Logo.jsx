import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const Logo = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 items-center flex justify-center rounded-full bg-white font-bold text-2xl"
        whileHover={{
          scale: 1.1,
          backgroundColor: "#5d7564",
          transition: {
            duration: 0.7,
          },
        }}
      >
        GVP{" "}
      </MotionLink>
    </div>
  );
};
