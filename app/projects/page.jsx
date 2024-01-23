import React from "react";
import Project from "../../components/Project";
import data from "../../components/data.json";

const Projects = () => {
  return (
    <>
      {data.map((project, index) => (
        <Project
          key={project.id}
          title={project.title}
          desc={project.description}
          index={index}
          alt={project.alt}
          url={project.url}

        />
      ))}
    </>
  );
};

export default Projects;
