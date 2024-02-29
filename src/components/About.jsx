import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-darkblue">
        <div className="pt-32 flex gap-16 pb-32">
          <img
            src="/src/assets/aboutPic.jpg"
            className="h-auto w-[400px] rounded-2xl"
          />

          <div>
            <h2 className="text-4xl text-white font-extrabold font-inter pb-4 text-left">
              Über mich
            </h2>
            <p className="text-white text-2xl text-inter font-thin text-left">
              Ich entwickle innovative Front-End-Anwendungen für das Web
              mithilfe von React und Tailwind. Zusätzlich zu meinen technischen
              Fähigkeiten bringe ich Kreativität und ein Auge für Design in
              jedes Projekt ein.
            </p>
            <p className="text-white text-2xl text-inter font-thin pb-8 text-left pt-8">
              Aktuell studiere in an der Martin Luther Universität Halle
              Wirtschaftsinformatik im Master.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
