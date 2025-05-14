import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Special Discounts",
      description: "Get 15% off on all medicines and 20% off on purchase of medicines above 999!",
      badge: "15-20% OFF",
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Expert Doctor Consultation",
      description: "Professional medical advice available at our store",
      badge: "Doctor Available",
    },
    {
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Wide Range of Medicines",
      description: "Extensive collection of medicines and healthcare products",
      badge: "1000+ Products",
    },
    {
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Fast Home Delivery",
      description: "Quick delivery at your doorstep. Call us: 896 999 5969",
      badge: "Home Delivery",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4">
      {/* Main Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {slide.badge}
                  </span>
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg max-w-2xl mx-auto">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Carousel */}
      <div className="flex justify-center space-x-3 py-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-32 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              index === currentSlide
                ? "ring-2 ring-blue-500 scale-105"
                : "opacity-60 hover:opacity-100"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
