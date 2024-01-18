import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import React from "react";
import Home from "./home/Home";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <Home />
    </main>
  );
}
