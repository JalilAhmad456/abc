import React, { useState, useEffect } from 'react';
import image1 from '../images/000001.jpeg';
import image2 from '../images/000002.jpeg';
import image3 from '../images/000003.jpeg';
import image4 from '../images/000004.jpeg';

const images = [image1, image2];

function CardImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto flex">
      <img src={images[currentImageIndex]} alt={`Card Image ${currentImageIndex + 1}`} className="w-full mb-4" />
    </div>
  );
}

export default CardImages;
