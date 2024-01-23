const Projects = () => {
  return (
    <section className="flex flex-col items-center w-full gap-4">
      <h1 className="text-5xl font-bold p-4">Projects</h1>
      <div className="flex flex-col justify-center items-center  w-full gap-20">
        <div className="flex flex-col items-center justify-center w-3/4 h-[60vh] bg-green-200 border-solid border-black border-2 rounded-lg">
          <h1>Project 1</h1>
          <p>Project 1 description</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 h-[60vh] bg-green-200">
          <h1>Project 2</h1>
          <p>Project 2 description</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 h-[60vh] bg-green-200">
          <h1>Project 3</h1>
          <p>Project 3 description</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 h-[60vh] bg-green-200">
          <h1>Project 4</h1>
          <p>Project 4 description</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 h-[60vh] bg-green-200">
          <h1>Project 5</h1>
          <p>Project 5 description</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/4 h-[60vh] bg-green-200">
          <h1>Project 6</h1>
          <p>Project 6 description</p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
