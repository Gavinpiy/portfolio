"use client";
import React from "react";
import Image from "next/image";
import data from "./data.json";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({ project, index }) => {
  return (
    <div className="grid grid-cols-10 items-center w-full h-[60vh] justify-center rounded-lg shadow-xl"
    style={{ backgroundColor: '#e6ffe8' }}>
      {index % 2 === 0 ? (
        <>
          <div className="relative col-span-6 justify-center h-full w-full flex items-center rounded-lg">
            <motion.div
              className="flex justify-center items-center"
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
                    border: "3px solid gray"
                  }}
                  loading="lazy"
                  className="rounded-lg"
                />
              </Link>
            </motion.div>
          </div>
          <div className="col-span-4">
            <h1 className="text-lg font-semibold">{project.title}</h1>

            <p className="text-gray-600 pr-5">{project.description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="ml-14 col-span-4">
            <h1 className="text-lg font-semibold">{project.title}</h1>
            <p className="text-gray-600 pr-5">{project.description}</p>
          </div>
          <div className="relative col-span-6 justify-center h-full w-full flex items-center rounded-lg">
            <div className="flex justify-center items-center">
              <motion.div
                className="flex justify-center items-center"
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
                      border: "3px solid gray",
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
    <section className="flex flex-col items-center w-full py-4 pb-20 bg-gray-200">
      <h1 className="text-5xl font-bold p-4">Projects</h1>
      <div className="container flex flex-col justify-center items-center w-full gap-20 p-10">
        {data.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
