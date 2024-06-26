"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import data from "./data.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, LinkArrow } from "./Icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({ project, index }) => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <div
      className=" flex flex-col lg:grid grid-cols-10 items-center w-full h-[70vh] lg:h-[60vh] md:h-[75vh] justify-evenly rounded-lg shadow-md min-w-[340px] text-sm md:text-base lg:text-lg"
      data-aos="fade-up"
    >
      {index % 2 === 0 ? (
        <>
          <div className=" lg:relative lg:col-span-6 justify-center lg:h-full w-full flex items-center rounded-lg ">
            <motion.div
              className="flex items-center px-6 flex-col"
              whileHover={{ scale: 1.05 }}
            >
              <Link href={project.deployed || "#"}>
                <img
                  src={project.url ? project.url : "/images/placeholder.png"}
                  alt={project.alt}
                  height="560"
                  width="560"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    dropShadow: "0 0 10px rgba(0,0,0,0.9)",
                  }}
                  loading="lazy"
                  className="rounded-lg"
                />
              </Link>
            </motion.div>
          </div>
          <div className="col-span-4  gap-6 flex flex-col">
            <h1 className="text-xl font-semibold px-5 pt-5 flex justify-center">
              {project.title}
            </h1>

            <p className=" px-5 max-h-[280px] overflow-y-scroll">
              {project.description}
            </p>
            <div className="flex justify-center mx-5 my-2 gap-2">
              <a
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full hover:bg-[#4D7EA8] transition duration-300 ease-in-out "
                href={project.github}
                target={"blank"}
              >
                <GithubIcon />
              </a>
              <a
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full hover:bg-[#4D7EA8] transition duration-300 ease-in-out"
                href={project.deployed}
                target={"blank"}
              >
                <LinkArrow />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="lg:ml-14 col-span-4 gap-6 flex flex-col">
            <h1 className="text-xl font-semibold px-5 pt-5 flex justify-center">
              {project.title}
            </h1>
            <p className=" px-5 max-h-[280px] overflow-y-scroll">
              {project.description}
            </p>
            <div className="flex justify-center mx-5 my-2 gap-2">
              <a
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full hover:bg-[#4D7EA8] transition duration-300 ease-in-out "
                href={project.github}
                target={"blank"}
              >
                <GithubIcon />
              </a>
              <a
                className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full hover:bg-[#4D7EA8] transition duration-300 ease-in-out"
                href={project.deployed}
                target={"blank"}
              >
                <LinkArrow />
              </a>
            </div>
          </div>
          <div className="relative col-span-6 justify-center h-full w-full flex items-center rounded-lg">
            <div className="flex justify-center items-center">
              <motion.div
                className="flex justify-center items-center px-6"
                whileHover={{ scale: 1.05 }}
              >
                <Link href={project.deployed || "#"}>
                  <img
                    src={project.url ? project.url : "/images/placeholder.png"}
                    alt={project.alt}
                    height="600"
                    width="600"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                      dropShadow: "0 0 10px rgba(0,0,0,0.9)",
                    }}
                    loading="lazy"
                    className="rounded-lg"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
