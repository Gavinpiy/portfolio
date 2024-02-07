import Link from "next/link";
import { Logo } from "./Logo";
import { LinkedInIcon, GithubIcon, TwitterIcon, EmailIcon } from "./Icons";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="flex bg-gradient-to-b from-[#6A92AC] to-[#A5C9DF] items-center py-4 lg:py-6 px-6 lg:px-10 justify-between w-full shadow-md ">
      <nav className="flex">
        <CustomLink
          href="/"
          title="Home"
          className=" mr-4 font-semibold lg:mx-6 "
        />
        <CustomLink
          href="/about"
          title="About"
          className="mr-4 font-semibold lg:mx-6"
        />
        <CustomLink
          href="/projects"
          title="Projects "
          className="mr-4 font-semibold lg:mx-6"
        />
      </nav>
      {/* social links */}
      <nav className=" lg:flex md:flex hidden items-center justify-between ">
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
      <nav onClick={handleNav} className="md:hidden lg:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden lg:hidden "
        >
          <AiOutlineMenu />
        </motion.button>
      </nav>
      <div
        className={
          menuOpen
            ? "fixed flex flex-col items-center justify-between right-0 top-20 w-[15%]  bg-gradient-to-b from-[#4A738F] to-[#78A1BD] sm:hidden h-[50%] bg p10 ease-in duration-500 rounded-xl py-10 shadow-xl"
            : "fixed flex flex-col items-center justify-between gap-20 right-[-100%] top-20 h-[50%] p10 ease-in duration-1000 rounded-xl py-10 "
        }
      >
        <motion.a
          href="https://www.linkedin.com/in/gavin-yip"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-1 "
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/Gavinpiy"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-1 "
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://twitter.com/GavinYip5"
          target={"blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-1 "
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="mailto:gavin.yip88@gmail.com"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 mx-1"
        >
          <EmailIcon />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
