"use client";
import { motion } from "framer-motion";
import Header from "@/components/Header";
const variants = {
  hidden: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

export default function Template({ children }) {
  return (
    <div>
      <Header />
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </div>
  );
}
