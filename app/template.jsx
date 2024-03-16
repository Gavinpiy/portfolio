"use client";
import { motion } from "framer-motion";
import Header from "/components/Header";
import Footer from "../components/Footer";
const variants = {
  hidden: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } },
};
const bgVariants = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1, transition: { duration: 2 } },
};
export default function Template({ children }) {
  return (
    <div
    
      className="flex flex-col min-h-screen text-black"
      style={{
        backgroundImage: `url('/images/background.jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
      initial="hidden"
      animate="visible"
      variants={bgVariants}
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
      <footer className=" w-full">
        <Footer />
      </footer>
    </div>
  );
}
