import Link from "next/link";

export default function Header() {
  return (
    <header
      className='flex black-background text-xs md:text-base  fixed z-50 justify-center md:black-background   transition duration-500 text-gray-400  top-0 left-0  w-full'
    >
      <div className="container flex py-4 justify-center overflow-x-auto items-center">
        <h1 className="mr-auto hidden md:block font-bold text-3xl">
          VELETZAS SERVICE
        </h1>
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
