import React from "react";
import Navbar from "./Navbar";
import { BackgroundBeams } from "./background-beams";
import { TextGenerateEffect } from "./text-generate-effect";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full  flex flex-col  items-center justify-center ">
        <div className="flex flex-row justify-center items-center   gap-24">
          <div>
            <div className="flex gap-4">
              <div className="h-[15px] w-[200px] bg-gradient-to-r from-orange-400 to-pink-500"></div>
              <div className="h-[15px] w-[100px] bg-gradient-to-r from-yellow-300 to-green-400"></div>
            </div>

            <div className="flex gap-4 mt-2 mb-4">
              <div className="h-[15px] w-[130px] bg-gradient-to-r from-cyan-400 to-blue-700"></div>
              <div className="h-[15px] w-[250px] bg-gradient-to-r from-purple-400 to-pink-300"></div>
            </div>

            <h1 className="text-6xl font-inter font-extrabold text-white ">
              Front-End Developer
            </h1>
            <h2 className="text-2xl font-inter font-normal text-white pt-8">
              Hi, ich bin Marc, React Front-End Entwickler aus Leipzig.
            </h2>
            <div className="flex flex-row pt-4 gap-4">
              <CiLinkedin size={30} color="white" />
              <FaGithub size={30} color="white" />
            </div>
          </div>
          <div className="flex justify-center items-center bg-white w-64 h-64 rounded-full overflow-hidden shadow-glow">
            <video
              className="min-w-full min-h-full"
              autoPlay
              muted
              loop
              src="/VideoMe.mp4"
            ></video>
          </div>
        </div>
        <div className="pt-16 flex justify-center items-center flex-row w-auto h-16 gap-8 ">
          <p className="text-white text-3xl font-thin ">Tech Stack</p>
          <div className="flex flex-row w-auto h-10 gap-8  ">
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
