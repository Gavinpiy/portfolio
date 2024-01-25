import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className="flex justify-center items-center p-28 h-full font-montserrat gap-20">
        <Image
          src="/images/placeholder.jpg"
          alt="Picture"
          width={500}
          height={500}
        />
        <div className="w-2/5 gap-4 flex flex-col">
          <p>
            Hey there! I'm Gavin, a recent graduate from the School of Code
            bootcamp, and I'm excited to bring my unique blend of skills to the
            world of software development. With a background as a qualified
            pharmacist and a certified personal trainer, my journey has been
            anything but conventional. 💊💪
          </p>
          <p>
            It all started when I stumbled upon CS50 videos on Youtube, sparking
            a career change that eventually led me to the School of Code. Now,
            I'm all in, ready to dive into the exciting world of software
            development. Beyond the screen, you'll find me working out at the
            gym, jumping around the badminton court, and occasionally taking a
            tumble off boulders. 🏋️‍♂️🏸🧗‍♂️
          </p>
          <p>
            Please feel free to explore some of my projects and have a browse
            through my website! 🚀
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
