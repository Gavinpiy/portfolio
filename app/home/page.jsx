import Image from "next/image";
import AnimateText from "../../components/AnimateText";
const Home = () => {
  return (
    <>
      <main className="p-8 sm:p-8 md:p-18 lg:p-28 flex flex-col md:flex-row justify-center pt-18 items-center h-full font-montserrat sm:gap-10 md:gap-12 lg:gap-20 pb-20">
        <div className="rounded-full overflow-hidden inline-block">
          <Image src="/images/me.png" alt="Picture" width={250} height={250} />
        </div>
        <div className="w-full md:w-4/5 gap-6 flex flex-col ">
          <p className="font-bold text-xl pt-5">Hey there! I'm Gavin,</p>
          <p className="text-xl">
             a recent graduate from the School of Code
            bootcamp, and I'm excited to bring my unique blend of skills to the
            world of software development. With a background as a qualified
            pharmacist and a certified personal trainer, my journey has been
            anything but conventional. 💊💪
          </p>
          <p className="font-medium">
            Please feel free to explore some of my projects and have a browse
            through my website! 🚀
          </p>
          <p className="text-xs justify-end flex ">
            As you might notice, I'm still honing my UI/UX skills.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
