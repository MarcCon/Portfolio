import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <>
      <div id="portfolio" class="relative mt-[-100px]  block pt-[100px]"></div>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-16 pt-16 lg:px-0">
        <h2 className="font-inter font-extrabold text-mypurple sm:text-2xl">
          Mein Portfolio
        </h2>
        <h2 className="mb-8 font-inter text-3xl font-extrabold text-white sm:text-4xl">
          Meine Zeitreise
        </h2>
        {/* Stelle sicher, dass die Projekt-Komponenten den Platz vollständig ausfüllen */}
        <div className="w-full">
          <Project
            imageSrc="/landingPage.png"
            imageAlt="Bild der LandingPage"
            title="Landing Page"
            technologies={["React", "Tailwind"]}
            description="Eine vollständig responsive Website für eine Fotografin"
            githubLink="https://github.com/mein-projekt-repo"
            externalLink="https://larakuche-fotografie.de"
            imageOnLeft={true}
          />

          <Project
            imageSrc="/WorldWise.png"
            imageAlt="Bild meines Projekts"
            title="Reisetagebuch"
            technologies={["React", "CSS "]}
            description="Eine vollständig responsive Website für eine Fotografin"
            githubLink="https://github.com/mein-projekt-repo"
            externalLink="https://larakuche-fotografie.de"
            imageOnLeft={false} // Alterniere die Bildposition, wenn gewünscht
          />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
