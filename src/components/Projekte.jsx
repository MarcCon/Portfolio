import React from "react";

const Projekte = () => {
  return (
    <>
      <div className="bg-lightblue  pt-16 px-96">
        <div className="text-3xl text-inter font-extrabold text-white pb-8 ">
          Meine Projekte
        </div>
        <div className="flex h-48 w-auto gap-8">
          <img src="/src/assets/Projekte/Projekt1.png"></img>
          <img src="/src/assets/Projekte/Projekt2.png"></img>
          <img src="/src/assets/Projekte/Projekt3.png"></img>
        </div>
      </div>
    </>
  );
};

export default Projekte;
