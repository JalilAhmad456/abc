import React, { useState, useEffect } from "react";
import image1 from "../images/000001.jpeg";
import image2 from "../images/000002.jpeg";
import image3 from "../images/000003.jpeg";
import image4 from "../images/000004.jpeg";

const images = [image1, image2, image3, image4];

function CardImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[320px] p-4 max-w-xl mx-auto flex items-center justify-center overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt={`Card Image ${currentImageIndex + 1}`}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}

export default CardImages;



