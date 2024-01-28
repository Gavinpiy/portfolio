"use client";
import React from "react";
import Image from "next/image";
import data from "./data.json";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({ project, index }) => {
  return (
    <div
      className="flex flex-col lg:grid grid-cols-10 items-center w-full h-[50vh] lg:h-[60vh] justify-center rounded-lg shadow-md"
      style={{ backgroundColor: "" }}
    >
      {index % 2 === 0 ? (
        <>
          <div className=" lg:relative lg:col-span-6 justify-center lg:h-full w-full flex items-center rounded-lg">
            <motion.div
              className="flex items-center px-10 flex-col"
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
                    dropShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                  loading="lazy"
                  className="rounded-lg"
                />
              </Link>
            </motion.div>
          </div>
          <div className="col-span-4">
            <h1 className="text-lg font-semibold px-5 pt-5 ">
              {project.title}
            </h1>

            <p className="text-gray-600 px-5">{project.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="lg:ml-14 col-span-4">
            <h1 className="text-lg font-semibold px-5 pt-5 ">
              {project.title}
            </h1>
            <p className="text-gray-600 px-5">{project.description}</p>
          </div>
          <div className="relative col-span-6 justify-center h-full w-full flex items-center rounded-lg">
            <div className="flex justify-center items-center">
              <motion.div
                className="flex justify-center items-center px-10"
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
                      dropShadow: "0 0 10px rgba(0,0,0,0.5)"
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

const Projects = () => {
  return (
    <section className="flex flex-col items-center w-full py-8 bg-[#B6C2D9]">
      <h1 className="text-5xl font-bold ">Projects</h1>
      <div className="container flex flex-col justify-center items-center w-full gap-20 p-10">
        {data.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
