import React from "react";
import Image from "next/image";
import data from "./data.json";

const Project = ({ project, index }) => {
  return (
    <div className="grid grid-cols-10 items-center w-full h-[60vh] bg-green-200 justify-center rounded-lg shadow-xl">
      {index % 2 === 0 ? (
        <>
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image
              src={project.url ? project.url : "/images/placeholder.png"}
              alt={project.alt}
              layout="fill"
              objectFit="cover"
              rounded="lg"
            />
          </div>
          <div className="ml-14 col-span-4">
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
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image
              src={project.url ? project.url : "/images/placeholder.png"}
              alt={project.alt}
              layout="fill"
              objectFit="cover"
            />
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
