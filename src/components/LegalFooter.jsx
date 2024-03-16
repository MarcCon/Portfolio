import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";

function LegalFooter() {
  return (
    <div className="mt-16 flex h-[100px] flex-col items-center justify-between px-16 lg:flex-row">
      <div id="kontakt" className="relative mt-[-200px] block pt-[200px]"></div>

      <div className="flex gap-4 lg:gap-16">
        <div className="flex items-center gap-1 sm:gap-2">
          <FaGithub className="text-base text-white sm:text-xl xl:text-2xl" />
          <p className="font-inter text-xs text-white sm:text-base xl:text-lg">
            github.com/MarcCon
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <IoMailOutline className="text-base text-white sm:text-xl xl:text-2xl" />
          <p className="font-inter text-xs text-white sm:text-base xl:text-lg">
            kontakt@marcenke.de
          </p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <CiLinkedin className="text-base text-white sm:text-xl xl:text-2xl" />
          <p className="font-inter text-xs text-white sm:text-base xl:text-lg">
            LinkedIn
          </p>
        </div>
      </div>

      <div className="flex-0.3 mb-4 flex items-center justify-end gap-8">
        <p className="font-inter text-xs text-white sm:text-base xl:text-lg">
          Impressum
        </p>
        <p className="font-inter text-xs text-white sm:text-base xl:text-lg">
          Datenschutz
        </p>
      </div>
    </div>
  );
}

export default LegalFooter;
