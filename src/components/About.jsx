import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-darkblue pb-24 pt-32">
        <div
          id="about"
          className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-16 px-4 pb-4 sm:px-16 sm:pb-48 lg:flex-row lg:px-6  "
        >
          <img
            src="/aboutPic.jpg"
            className="h-[300px] w-auto rounded-2xl xl:h-[400px]"
          />

          <div>
            <p className="text-center font-inter text-xl font-extrabold text-mypurple lg:text-left lg:text-2xl">
              Über mich
            </p>
            <h2 className="pb-4 text-center font-inter text-2xl font-extrabold text-white lg:text-left lg:text-3xl">
              React Front-End entwickler in Halle (Saale) 📍
            </h2>
            <p className="text-inter text-center text-lg font-thin text-white sm:text-xl lg:text-left lg:text-2xl">
              Hi, mein Name ist Marc, ich entwickle mithilfe von React und
              Tailwind funktionale Web-Anwendungen.
            </p>
            <p className="text-inter pb-8 pt-4 text-center text-lg font-thin text-white sm:text-xl lg:text-left lg:text-2xl xl:pt-8"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
