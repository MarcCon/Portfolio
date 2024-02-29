import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function Project({
  imageSrc,
  imageAlt,
  title,
  technologies,
  description,
  githubLink,
  externalLink,
  imageOnLeft,
}) {
  const containerClasses = imageOnLeft
    ? "flex-row rounded-br-2xl rounded-tr-2xl"
    : "flex-row-reverse rounded-bl-2xl rounded-tl-2xl";
  const shadowPic = imageOnLeft
    ? "rounded-bl-xl rounded-tl-xl"
    : "rounded-br-xl rounded-tr-xl";
  return (
    <div className="flex justify-center pt-16 bg-darkblue">
      <div
        className={`flex h-[250px] w-[700px] rounded-2xl shadow-glowlight ${containerClasses}`}
      >
        <div className=" overflow-hidden w-1/2 h-auto flex justify-center items-center ">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`w-full h-full hover:scale-105  transition duration-300 ${shadowPic}`}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center px-8 ">
          <h3 className="pb-4 text-center text-white  font-extrabold text-xl">
            {title}
          </h3>
          <div className="flex justify-center pb-4 gap-4">
            {technologies.map((tech, index) => (
              <p
                key={index}
                className="px-2 text-white bg-gray-600 rounded-2xl"
              >
                {tech}
              </p>
            ))}
          </div>
          <p className="text-white pb-8 font-extralight text-center">
            {description}
          </p>
          <div className="flex justify-center gap-8">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FiGithub size={20} color="white" />
              </a>
            )}
            {externalLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FiExternalLink
                  size={20}
                  color="white"
                  onClick={() => window.open(externalLink, "_blank")}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
