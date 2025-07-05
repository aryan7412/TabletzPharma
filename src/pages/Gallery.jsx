import React from 'react';

function Gallery() {
  const images = [
    '/Pharma_Image1.jpeg',
    '/Pharma_Image2.jpeg',
    '/Pharma_Image3.jpeg',
    '/Pharma_Image4.jpeg',
    '/Pharma_Image3.jpeg',
    '/Pharma_Image5.jpeg'
  ];

  return (
    <div className="p-4">
      {/* Heading */}
      <div className='text-4xl sm:text-5xl font-bold text-center my-5' data-aos="fade-up">GALLERY</div>
      {/* Tagline */}
      <div className='text-center'data-aos="fade-up">Images</div>
      <hr className='my-5 mx-auto w-2/3 sm:w-1/2 md:w-1/3 border-black border-[1px]' data-aos="fade-up"/>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-1 sm:px-8 md:px-16 lg:px-24 max-w-md sm:max-w-4xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden group transition-transform duration-300 ease-in-out transform hover:scale-105 mx-auto w-full max-w-xs"
            data-aos="fade-up"
          >
            {/* Card Content */}
            <div className="bg-white rounded shadow-md">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-40 sm:h-64 object-cover rounded-t mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
