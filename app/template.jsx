"use client";
import { motion } from "framer-motion";
import Header from "/components/Header";
import Footer from "../components/Footer";
const variants = {
  hidden: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};

export default function Template({ children }) {
  return (
    <div
      className="flex flex-col h-screen text-[#272932]"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <header className="fixed top-0 w-full z-10">
        <Header />
      </header>
      <main className="flex-grow pt-14 md:pt-10 lg:pt-20">
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ type: "linear" }}
          className=""
        >
          {children}
        </motion.main>
      </main>
      <footer className="fixed bottom-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
