import React from "react";
import Project from "../../components/Project";
import data from "../../components/data.json";

const Projects = () => {
  return (
    <section className="flex flex-col items-center w-full py-8">
      <h1 className="text-2xl font-bold pb-5 ">Projects</h1>
      <div className="container flex flex-col justify-center items-center w-full gap-20 px-10 pb-10">
        {data.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
