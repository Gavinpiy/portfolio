import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "./About/page";
import Contact from "./Contact/page";
import Projects from "./Projects/page";
import React from "react";
import Home from "./Home/Home";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
