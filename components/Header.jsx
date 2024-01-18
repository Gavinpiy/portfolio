import Link from "next/link";

const Header = () => {
  return (
    <header className="flex bg-green-200 items-center py-4 px-8 justify-between">
      <nav className="flex just">
        <Link href="/">
          <p
            className="text-xl  text-white hover:underline
        "
          >
            Home
          </p>
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
      </nav>

      <h2>Logo</h2>
      <nav>
        <Link href="/" target={"blank"}>
          L
        </Link>
        <Link href="/" target={"blank"}>
          L
        </Link>
        <Link href="/" target={"blank"}>
          L
        </Link>
      </nav>
    </header>
  );
};

export default Header;
