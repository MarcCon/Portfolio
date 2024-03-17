import React, { useState } from "react";
import Navbar from "./Navbar";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Header = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <>
      <Navbar />
      <div className="bg-darkblue">
        <div className="-my-20 mx-auto  flex  h-screen w-full max-w-5xl flex-col items-center justify-center px-4 sm:-my-16 lg:px-0">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-16 lg:gap-24">
            <div className="text-center md:text-left">
              <div className="flex justify-center gap-2 md:justify-start">
                <div className="h-[10px] w-[100px] bg-gradient-to-r from-orange-400 to-pink-500 lg:h-[15px] lg:w-[200px]"></div>
                <div className="h-[10px] w-[60px] bg-gradient-to-r from-yellow-300 to-green-400 lg:h-[15px] lg:w-[100px]"></div>
              </div>

              <div className="mb-4 mt-2 flex content-center justify-center gap-2 md:justify-start">
                <div className="h-[10px] w-[70px] bg-gradient-to-r from-cyan-400 to-blue-700 lg:h-[15px] lg:w-[130px]"></div>
                <div className="h-[10px] w-[100px] bg-gradient-to-r from-purple-400 to-pink-300 lg:h-[15px] lg:w-[250px]"></div>
              </div>

              <h1 className="font-inter text-3xl font-extrabold text-white sm:text-4xl lg:text-6xl">
                Front-End Developer
              </h1>
              <h2 className="pt-4 font-inter text-lg font-normal text-white lg:pt-8 lg:text-2xl">
                Hi, ich bin Marc, Front-End Entwickler aus Halle (Saale).
              </h2>
              <div className="flex flex-row justify-center gap-4 pt-4 md:justify-start">
                <a
                  href="https://www.linkedin.com/in/marc-constantin-enke-b691a3218/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Marc auf LinkedIn"
                >
                  <CiLinkedin size={30} color="white" />
                </a>
                <a
                  href="https://github.com/MarcCon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Marc auf Github"
                >
                  <FaGithub size={30} color="white" />
                </a>
              </div>
            </div>
            <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-black shadow-glow sm:h-52 sm:w-52 lg:h-64 lg:w-64">
              {!isVideoLoaded && (
                <img
                  className="min-h-full min-w-full object-cover"
                  src="/StandBildIch.png"
                  alt="Loading"
                  style={{ display: !isVideoLoaded ? "block" : "none" }} // Füge diese Zeile hinzu
                />
              )}
              <video
                className="min-h-full min-w-full overflow-hidden object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="/VideoMe.mp4"
                onLoadedData={() => setIsVideoLoaded(true)}
                onError={() => setVideoError(true)} // Behandle Video-Ladefehler
                style={{ display: isVideoLoaded ? "block" : "none" }}
              ></video>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-4 pt-8 sm:gap-8 sm:pt-16">
            <p className="text-base font-thin text-white sm:text-2xl lg:text-3xl">
              Tech Stack
            </p>
            <div className="flex w-auto flex-row gap-4 sm:gap-6 lg:gap-8">
              <FaReact className="text-2xl text-ReactBlue sm:text-4xl lg:text-5xl" />
              <FaNodeJs className="text-2xl text-NodeGreen sm:text-4xl lg:text-5xl" />
              <IoLogoJavascript className="text-2xl text-JavascriptYellow sm:text-4xl lg:text-5xl" />
              <SiTailwindcss className="text-2xl text-TailwindBlue sm:text-4xl lg:text-5xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
