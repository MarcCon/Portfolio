import React from "react";
import { CiMail } from "react-icons/ci";

const Kontakt = () => {
  return (
    <div className="bg-darkblue">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-white font-inter font-extrabold">
          Kontakt
        </h2>
        <div className="flex items-center gap-4 pb-32 pt-4">
          <p className="text-white text-xl font-inter">kontakt@marcenke.de</p>

          <CiMail className="text-4xl text-white " />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
