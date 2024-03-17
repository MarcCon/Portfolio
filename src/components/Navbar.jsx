import React from "react";
import MobilNav from "./MobilNav";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-0 top-0 flex w-full items-center justify-end bg-darkblue p-8 text-base font-bold text-white shadow-md shadow-slate-800 sm:px-16 sm:text-xl">
        <div className="mr-auto">
          <p className="w-[90px] font-bold transition duration-300 ease-in-out hover:text-mypurple">
            marc.dev
          </p>
        </div>
        <div className="hidden gap-12 sm:flex">
          {/* Verwende Link von react-scroll statt <a href="#"> */}
          <Link
            to="about"
            offset={-290}
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple"
          >
            Über mich
          </Link>
          <Link
            to="portfolio"
            offset={-100}
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple"
          >
            Portfolio
          </Link>
          <Link
            to="kontakt"
            offset={-100}
            smooth={true}
            duration={500}
            className="cursor-pointer transition duration-300 ease-in-out hover:text-mypurple"
          >
            Kontakt
          </Link>
        </div>
      </nav>

      <div className="fixed right-6 top-6 z-50 sm:hidden">
        <MobilNav />
      </div>
    </>
  );
};

export default Navbar;
