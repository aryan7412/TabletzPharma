import React, { useState } from "react";

const images = [
  "https://www.pulseplus.in/content/images/offers/20offer-banner.jpg",
  "/C-2.png"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[1500px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-[430px] bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-white px-4 py-2 focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full text-white px-4 py-2 focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
