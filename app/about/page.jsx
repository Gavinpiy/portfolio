import { motion } from "framer-motion";
import { Exercism } from "../../components/Icons";
const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center flex-wrap gap-4 w-full h-full pt-12 font-montserrat">
      <h1 className="font-semibold text-2xl ">About Me</h1>
      <p className="flex justify-center px-14 lg:px-40 text-lg">
        I earned my Master's in Pharmacy from King's College London and worked
        as a pharmacist at UCL Hospital during the pandemic. Seeking a career
        change, I initially considered becoming a personal trainer and obtained
        the ACE certification. However, my journey took a turn when I discovered
        coding. It all started when I stumbled upon CS50 videos on Youtube,
        sparking a career change that eventually led me to the School of Code.
        Now, after completing a 16-week intensive bootcamp, I have successfully
        collaborated on two projects with fellow SOC students.
        <br /> <br />
        Beyond the screen, you'll find me working out at the gym, jumping around
        the badminton court, and occasionally taking a tumble off boulders.
        🏋️‍♂️🏸🧗‍♂️
      </p>

      <h2 className="font-semibold pt-6 text-2xl">Technologies and Tools</h2>

      <p className="grid grid-cols-4 lg:grid-cols-6 items-center gap-10 px-10 pb-6">
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
            width="75"
            height="75"
            alt="TypeScript"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            width="75"
            height="75"
            alt="JavaScript"
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            width="75"
            height="75"
            alt="React"
          />
        </a>
        <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
            width="75"
            height="75"
            alt="NextJs"
          />
        </a>
        <a
          href="https://www.w3.org/TR/CSS/#css"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            width="75"
            height="75"
            alt="CSS3"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
            width="75"
            height="75"
            alt="TailwindCSS"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            width="75"
            height="75"
            alt="HTML5"
          />
        </a>
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            width="75"
            height="75"
            alt="NodeJS"
          />
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
            width="75"
            height="75"
            alt="Express"
          />
        </a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
            width="75"
            height="75"
            alt="PostgreSQL"
          />
        </a>
        <a href="https://supabase.io/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/supabase-colored.svg"
            width="75"
            height="75"
            alt="Supabase"
          />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
            width="75"
            height="75"
            alt="Figma"
          />
        </a>
        <a href="https://www.python.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
            width="75"
            height="75"
            alt="Python"
          />
        </a>
      </p>
      <div className="flex justify-between gap-10">
        <a target="_blank" href="https://www.codewars.com/users/Gavinpiy">
          <h2 className="font-semibold text-xl text-center pb-4">Codewars</h2>
          <img
            src="https://www.codewars.com/users/Gavinpiy/badges/micro"
            alt="codewars"
            width={200}
            height={50}
          />
        </a>
        <a
          href="https://exercism.org/profiles/Gavinpiy"
          className="flex items-center justify-center gap-2 flex-col"
          target="_blank"
        >
          <p className="font-semibold text-xl text-center">Exercism</p>
          <Exercism width={50} height={50} />
        </a>
      </div>
      <p className="py-4 ">Always learning more!</p>
    </div>
  );
};

export default About;
