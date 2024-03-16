import React from "react";
import MobilNav from "./MobilNav";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-0 top-0 w-full items-center justify-end bg-darkblue p-8 px-8 text-base font-bold text-white shadow-md shadow-slate-800 sm:flex sm:px-16 sm:text-xl">
        <div className="mr-auto items-center">
          <p className="w-[90px] font-bold transition duration-300 ease-in-out hover:text-mypurple">
            marc.dev
          </p>
        </div>
        <div className="hidden gap-12 sm:flex">
          <a
            href="#uebermich"
            className="transition duration-300 ease-in-out hover:text-mypurple"
          >
            Über mich
          </a>
          <a
            href="#portfolio"
            className="transition duration-300 ease-in-out hover:text-mypurple"
          >
            Portfolio
          </a>
          <a
            href="#kontakt"
            className="transition duration-300 ease-in-out hover:text-mypurple"
          >
            Kontakt
          </a>
        </div>
      </nav>

      <div className="fixed right-6 top-6 z-50 sm:hidden">
        <MobilNav />
      </div>
    </>
  );
};

export default Navbar;
