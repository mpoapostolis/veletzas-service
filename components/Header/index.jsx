import Link from "next/link";

export default function Header() {
  return (
    <header className="flex fixed z-50 justify-center text-gray-400  top-0 left-0 border-b border-gray-600 w-full">
      <div className="container  flex py-4 items-center">
        <h1 className="mr-auto font-bold text-3xl">VELETZAS SERVICE</h1>
        <Link href="#about">
          <a className=" p-2 mx-5">Περισσότερα</a>
        </Link>

        <Link href="#services">
          <a className=" p-2 mx-5">Υπηρεσίες</a>
        </Link>

        <Link href="#contact">
          <a className=" p-2 mx-5">Επικοινωνία</a>
        </Link>
      </div>
    </header>
  );
}
