import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";

function LegalFooter() {
  return (
    <div className="mt-16 flex h-[130px] flex-col items-center justify-center gap-4 sm:h-[100px] sm:px-16 md:flex-row md:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row lg:gap-16">
        <div className="flex gap-4 md:gap-4 lg:gap-16 ">
          <div className="flex items-center gap-1  sm:gap-1">
            <FaGithub className="text-base text-white sm:text-xl xl:text-2xl" />
            <p className="font-inter text-sm text-white sm:text-base xl:text-lg">
              github.com/MarcCon
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-1">
            <IoMailOutline className="text-base text-white sm:text-xl xl:text-2xl" />
            <p className="font-inter text-sm text-white sm:text-base xl:text-lg">
              kontakt@marcenke.de
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 sm:gap-1">
          <CiLinkedin className="text-base text-white sm:text-xl xl:text-2xl" />
          <p className="font-inter text-sm text-white sm:text-base xl:text-lg">
            LinkedIn
          </p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <p className="font-inter text-sm text-gray-400 sm:text-base xl:text-lg">
          Impressum
        </p>
        <p className="font-inter text-sm text-gray-400 sm:text-base xl:text-lg">
          Datenschutz
        </p>
      </div>
    </div>
  );
}

export default LegalFooter;
