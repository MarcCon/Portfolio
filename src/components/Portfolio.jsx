import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="bg-darkblue">
      <div className="flex justify-center items-center pb-8 pt-32">
        <h2 className="text-white font-extrabold text-5xl">Portfolio</h2>
      </div>
      <div className="pb-32">
        <Project
          imageSrc="/src/assets/oasis.png"
          imageAlt="Bild"
          title="Reservierungssystem"
          technologies={["React", "Tailwind"]}
          description="Ein Dashboard um die Gästebuchungen und Zimmerbelegungen eines Hotels zu managen."
          githubLink="https://github.com/mein-projekt-repo"
          externalLink="https://meinprojekt.de"
          imageOnLeft={true}
        />

        <Project
          imageSrc="/src/assets/projektMadrid.png"
          imageAlt="Bild"
          title="Reisetagebuch"
          technologies={["React", "Tailwind"]}
          description="Hier ist eine kurze Beschreibung meines Projekts. Es erklärt, worum es geht und was es besonders macht."
          githubLink="https://github.com/mein-projekt-repo"
          externalLink="https://meinprojekt.de"
          imageOnLeft={true}
        />
      </div>
    </div>
  );
}

export default Portfolio;
