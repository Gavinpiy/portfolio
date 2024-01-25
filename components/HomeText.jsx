"use client";
import { motion } from "framer-motion";
import React from "react";

export default function HomeText() {
  const introduction1 =
    "Hey there! I'm Gavin, a recent graduate from the School of Code bootcamp, and I'm excited to bring my unique blend of skills to the world of software development. With a background as a qualified pharmacist and a certified personal trainer, my journey has been anything but conventional. 💊💪";

  const introduction2 =
    "It all started when I stumbled upon CS50 videos on Youtube, sparking a career change that eventually led me to the School of Code. Now, I'm all in, ready to dive into the exciting world of software development. Beyond the screen, you'll find me working out at the gym, jumping around the badminton court, and occasionally taking a tumble off boulders. 🏋️‍♂️🏸🧗‍♂️";

  const introduction3 =
    "Please feel free to explore some of my projects and have a browse through my website! 🚀";

  const note = "As you might notice, I'm still honing my UI/UX skills.";

  const fullIntroduction = [introduction1, introduction2, introduction3, note];

  return <div>HomeText</div>;
}
