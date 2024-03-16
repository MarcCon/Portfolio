import React from "react";

const About = () => {
  return (
    <>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-16 px-16 pb-4 sm:pb-48 lg:flex-row lg:px-6  ">
        <img
          src="/aboutPic.jpg"
          className="h-[300px] w-auto rounded-2xl xl:h-[400px]"
        />

        <div>
          <div
            id="uebermich"
            class="relative mt-[-200px]  block pt-[200px]"
          ></div>

          <p className="text-center font-inter text-xl font-extrabold text-mypurple lg:text-left lg:text-2xl">
            Über mich
          </p>
          <h2 className="pb-4 text-center font-inter text-3xl font-extrabold text-white lg:text-left lg:text-4xl">
            Das bin ich
          </h2>
          <p className="text-inter text-center text-lg font-thin text-white sm:text-xl lg:text-left lg:text-2xl">
            Hi, mein Name ist Marc und ich entwickle Front-End-Anwendungen für
            das Web mithilfe von React und Tailwind.
          </p>
          <p className="text-inter pb-8 pt-4 text-center text-lg font-thin text-white sm:text-xl lg:text-left lg:text-2xl xl:pt-8">
            Aktuell studiere in an der Martin Luther Universität Halle
            Wirtschaftsinformatik im Master.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
