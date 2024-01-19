import { Montserrat } from "next/font/google";
import React from "react";
import Home from "./home/page";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between font-montserrat`}
      style={{ fontFamily: montserrat.variable }}
    >
      <Home />
    </main>
  );
}
export default Page;
