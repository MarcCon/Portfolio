import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-darkblue flex justify-end items-center text-white text-xl p-8 font-bold pr-32 pl-32 shadow-slate-800 shadow-md ">
        <div className="mr-auto flex items-center">
          <p className="font-bold hover:text-mypurple transition ease-in-out duration-300">
            marc.dev
          </p>
        </div>
        <div className="flex gap-12">
          <a
            href=""
            className="hover:text-mypurple transition ease-in-out duration-300"
          >
            Über mich
          </a>
          <a
            href=""
            className="hover:text-mypurple transition ease-in-out duration-300"
          >
            Portfolio
          </a>
          <a
            href=""
            className="hover:text-mypurple transition ease-in-out duration-300"
          >
            Kontakt
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
