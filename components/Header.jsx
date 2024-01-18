import Link from "next/link";

const Header = () => {
  return (
    <header className="flex gap-4 items-center w-full justify-start bg-green-200 p-4 fixed">
      <Link href="/">
        <p className="text-xl  text-white hover:underline
        ">Home</p>
      </Link>
      <Link href="/about">
        <p className="text-xl  text-white hover:underline">About</p>
      </Link>
      <Link href="/projects">
        <p className="text-xl  text-white hover:underline">Projects</p>
      </Link>
      <Link href="/contact">
        <p className="text-xl  text-white hover:underline">Contact</p>
      </Link>
    </header>
  );
};

export default Header;
