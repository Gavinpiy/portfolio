import Image from "next/image";
import AnimateText from "../../components/AnimateText";
const Home = () => {
  return (
    <>
      <main className=" p-8 sm:p-8 md:p-18 lg:p-28 flex flex-col md:flex-row justify-center pt-18 items-center h-full font-montserrat sm:gap-10 lg:gap-20 pb-20">
        <Image
          src="/images/placeholder.jpg"
          alt="Picture"
          width={500}
          height={500}
        />
        <div className="w-full md:w-4/5 gap-6 flex flex-col ">
          {/* <AnimateText text="Hey there! I'm Gavin, a recent graduate from the School of Code bootcamp, and I'm excited to bring my unique blend of skills to the world of software development. With a background as a qualified pharmacist and a certified personal trainer, my journey has been anything but conventional. 💊💪" /> */}
          <p className="font-medium">
            Hey there! I'm Gavin, a recent graduate from the School of Code
            bootcamp, and I'm excited to bring my unique blend of skills to the
            world of software development. With a background as a qualified
            pharmacist and a certified personal trainer, my journey has been
            anything but conventional. 💊💪
          </p>
          <p className="font-medium">
            It all started when I stumbled upon CS50 videos on Youtube, sparking
            a career change that eventually led me to the School of Code. Now,
            I'm all in, ready to dive into the exciting world of software
            development. Beyond the screen, you'll find me working out at the
            gym, jumping around the badminton court, and occasionally taking a
            tumble off boulders. 🏋️‍♂️🏸🧗‍♂️
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
