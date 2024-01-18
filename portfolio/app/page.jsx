import Header from "@/components/Header";

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
