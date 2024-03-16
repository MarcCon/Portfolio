import React, { useState } from "react";
import Navbar from "./Navbar";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <>
      <Navbar />
      <div className="mx-auto flex h-screen w-full max-w-5xl flex-col items-center justify-center px-4 pt-8 sm:px-16 sm:pt-0 lg:px-0 ">
        <div className="flex flex-col-reverse gap-8 sm:gap-16 md:flex-row lg:gap-24">
          <div className="text-center md:text-left">
            <div className="flex justify-center gap-2 md:justify-start lg:gap-4">
              <div className="h-[10px] w-[100px] bg-gradient-to-r from-orange-400 to-pink-500 sm:h-[10px] sm:w-[130px] lg:h-[15px] lg:w-[200px]"></div>
              <div className="h-[10px] w-[60px] bg-gradient-to-r from-yellow-300 to-green-400 sm:h-[10px] sm:w-[130px] lg:h-[15px] lg:w-[100px]"></div>
            </div>

            <div className="mb-4 mt-2 flex content-center justify-center gap-2 md:justify-start">
              <div className="h-[10px] w-[70px] bg-gradient-to-r from-cyan-400 to-blue-700 sm:h-[10px]  sm:w-[100px] lg:h-[15px] lg:w-[130px]"></div>
              <div className="h-[10px] w-[100px] bg-gradient-to-r from-purple-400 to-pink-300 sm:h-[10px] sm:w-[100px] lg:h-[15px] lg:w-[250px]"></div>
            </div>

            <h1 className="font-inter text-3xl font-extrabold text-white sm:text-4xl lg:text-6xl ">
              Front-End Developer
            </h1>
            <h2 className="pt-4 font-inter text-lg font-normal text-white lg:pt-8 lg:text-2xl">
              Hi, ich bin Marc, React Front-End Entwickler aus Leipzig.
            </h2>
            <div className="flex flex-row justify-center gap-4 pt-4 md:justify-start">
              <CiLinkedin size={30} color="white" />
              <FaGithub size={30} color="white" />
            </div>
          </div>
          <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-black shadow-glow sm:h-52 sm:w-52 lg:h-64 lg:w-64">
            {!isVideoLoaded && (
              <img
                className="min-h-full min-w-full object-cover"
                src="/StandBildIch.png"
                alt="Loading"
              />
            )}
            <video
              className="min-h-full min-w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/VideoMe.mp4"
              onLoadedData={() => setIsVideoLoaded(true)}
              style={{ display: isVideoLoaded ? "block" : "none" }} // Versteckt das Video, bis es geladen ist
            ></video>
          </div>
        </div>
        <div className="flex h-16 flex-row items-center justify-center gap-4 pt-16 sm:gap-8 ">
          <p className="xs:text-xl text-base font-thin text-white sm:text-2xl lg:text-3xl ">
            Tech Stack
          </p>
          <div className="flex h-6 w-auto flex-row gap-4 sm:h-8 sm:gap-6 lg:h-10 lg:gap-8  ">
            <img src="/Skills/javascript.png" />
            <img src="/Skills//node.png" />
            <img src="/Skills//react.png" />
            <img src="/Skills//postgres.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
