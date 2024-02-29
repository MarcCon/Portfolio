import React, { useState, useEffect, useRef } from "react";

// Importiere alle vier Bilder
import dog1Right from "/src/assets/Dog/dog1Rechts.png";
import dog2Right from "/src/assets/Dog/dog2Rechts.png";
import dog1Left from "/src/assets/Dog/dog1Links.png";
import dog2Left from "/src/assets/Dog/dog2Links.png";

const DogImage = () => {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [isMoving, setIsMoving] = useState(false);
  const [imageSrc, setImageSrc] = useState(dog1Right);
  const dogRef = useRef(null);
  const movementTimer = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(1); // Aktuelles Frame der Animation

  useEffect(() => {
    const handleMouseMove = (event) => {
      const targetX = event.clientX;
      const dogX =
        dogRef.current.getBoundingClientRect().left +
        dogRef.current.offsetWidth / 2;

      if (
        (targetX > dogX && imageSrc !== dog1Right && imageSrc !== dog2Right) ||
        (targetX < dogX && imageSrc !== dog1Left && imageSrc !== dog2Left)
      ) {
        setImageSrc(targetX > dogX ? dog1Right : dog1Left);
      }

      setPosition({ x: targetX, y: event.clientY });
      setIsMoving(true);
      clearTimeout(movementTimer.current);
      movementTimer.current = setTimeout(() => setIsMoving(false), 200); // Setzt isMoving auf false, wenn die Bewegung stoppt
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(movementTimer.current);
    };
  }, [imageSrc]);

  useEffect(() => {
    const animateDog = () => {
      if (isMoving) {
        if (imageSrc === dog1Right || imageSrc === dog2Right) {
          setImageSrc(currentFrame === 1 ? dog2Right : dog1Right);
        } else {
          setImageSrc(currentFrame === 1 ? dog2Left : dog1Left);
        }
        setCurrentFrame(currentFrame === 1 ? 2 : 1); // Wechsle zwischen Frame 1 und 2
      }
    };

    const animationInterval = setInterval(animateDog, 100); // Wechsle das Bild alle 500ms

    return () => clearInterval(animationInterval);
  }, [isMoving, currentFrame, imageSrc]);

  return (
    <img
      ref={dogRef}
      src={imageSrc}
      alt="Hund"
      style={{
        position: "absolute",
        left: imageSrc.includes("Rechts") ? position.x - 250 : position.x - 200,
        top: imageSrc.includes("Rechts") ? position.y - 100 : position.y - 150,
        transition: "left 0.5s linear, top 0.5s linear",
      }}
    />
  );
};

export default DogImage;
