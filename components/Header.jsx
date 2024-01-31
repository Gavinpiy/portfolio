import Link from "next/link";
import { Logo } from "./Logo";
import { LinkedInIcon, GithubIcon, TwitterIcon, EmailIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className="h-[1px] inline-block bg-black w-0 absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300"
      ></span>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="flex bg-[#4D7EA8] items-center py-4 lg:py-6 px-6 lg:px-10 justify-between w-full shadow-md ">
      <nav className="flex">
        <CustomLink
          href="/"
          title="Home"
          className=" mr-4 font-bold lg:mx-6 "
        />
        <CustomLink
          href="/about"
          title="About"
          className="mr-4 font-bold lg:mx-6"
        />
        <CustomLink
          href="/projects"
          title="Projects "
          className="mr-4 font-bold lg:mx-6"
        />
      </nav>

      <nav className=" flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/gavin-yip"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-1 lg:mx-3 lg:w-8"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/Gavinpiy"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-1 lg:mx-3 lg:w-8"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com/GavinYip5"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-1 lg:mx-3 lg:w-8"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="mailto:gavin.yip88@gmail.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-1 lg:mx-3 lg:w-8"
        >
          <EmailIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        {/* <Logo /> */}
      </div>
    </header>
  );
};

export default Header;
