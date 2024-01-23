import Image from "next/image";

const Projects = () => {
  return (
    <section className="flex flex-col items-center w-full pt-4 bg-gray-200">
      <h1 className="text-5xl font-bold p-4">Projects</h1>

      <div className=" container bg-red-200 flex flex-col justify-center items-center w-full gap-20 p-10">
        <div className="grid grid-cols-10 items-center w-full h-[50vh] bg-green-200 justify-center rounded-lg shadow-xl">
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image src="/placeholder.jpg" layout="fill" objectFit="cover" />
          </div>

          <div className="ml-14 col-span-4">
            <h1 className="text-lg font-semibold">Project 1</h1>
            <p className="text-gray-600">Project 1 description</p>
          </div>
        </div>

        <div className="grid grid-cols-10 items-center w-full h-[50vh] bg-green-200 justify-center rounded-lg shadow-xl">
          <div className="ml-14 col-span-4">
            <h1 className="text-lg font-semibold">Project 2</h1>
            <p className="text-gray-600">Project 2 description</p>
          </div>
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image src="/placeholder.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className="grid grid-cols-10 items-center w-full h-[50vh] bg-green-200 justify-center rounded-lg shadow-xl">
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image src="/placeholder.jpg" layout="fill" objectFit="cover" />
          </div>

          <div className="ml-14 col-span-4">
            <h1 className="text-lg font-semibold">Project 3</h1>
            <p className="text-gray-600">Project 3 description</p>
          </div>
        </div>

        <div className="grid grid-cols-10 items-center w-full h-[50vh] bg-green-200 justify-center rounded-lg shadow-xl">
          <div className="ml-14 col-span-4">
            <h1 className="text-lg font-semibold">Project 4</h1>
            <p className="text-gray-600">Project 4 description</p>
          </div>
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image src="/placeholder.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>

        <div className="grid grid-cols-10 items-center w-full h-[50vh] bg-green-200 justify-center rounded-lg shadow-xl">
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image src="/placeholder.jpg" layout="fill" objectFit="cover" />
          </div>

          <div className="ml-14 col-span-4">
            <h1 className="text-lg font-semibold">Project 5</h1>
            <p className="text-gray-600">Project 5 description</p>
          </div>
        </div>

        <div className="grid grid-cols-10 items-center w-full h-[50vh] bg-green-200 justify-center rounded-lg shadow-xl">
          <div className="ml-14 col-span-4">
            <h1 className="text-lg font-semibold">Project 6</h1>
            <p className="text-gray-600">Project 6 description</p>
          </div>
          <div className="relative col-span-6 items-center justify-center border-solid border-black border-2 h-full w-full">
            <Image src="/placeholder.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
