import Link from "next/link";

const Header = () => {
  return (
    <header className="flex gap-4 items-center w-full justify-center bg-green-200 p-4 fixed">
      <Link href="/">
        <p className="text-2xl font-bold text-white">Home</p>
      </Link>
      <Link href="/about">
        <p className="text-2xl font-bold text-white">About</p>
      </Link>
      <Link href="/projects">
        <p className="text-2xl font-bold text-white">Projects</p>
      </Link>
      <Link href="/contact">
        <p className="text-2xl font-bold text-white">Contact</p>
      </Link>
    </header>
  );
};

export default Header;
