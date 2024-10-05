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
      <div className='text-5xl font-bold text-center my-5'>GALLERY</div>
      {/* Tagline */}
      <div className='text-center'>Images</div>
      <hr className='my-5 mx-auto w-[900px] border-black border-[1px]' />
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-24">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden group transition-transform duration-300 ease-in-out transform hover:scale-105">
            {/* Card Content */}
            <div className="bg-white rounded shadow-md">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-t"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
