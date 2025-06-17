import React from 'react';

const reviewsData = [
    {
        content: "TabletzPharma offers a 20% discount, which is unmatched by any other pharmacy. Their offers are unbeatable! With such amazing deals, I always get the best value for my purchases.",
        name: "Ranjan Mohapatra"
      },
      {
        content: "The doctors at TabletzPharma provide the best treatment and advice. I trust them completely with my health.",
        name: "Ishani Swain"
      },
      {
        content: "This is the best pharmacy in our area. TabletzPharma has been my go-to for all pharmaceutical needs. Their service is unmatched! Their service and product quality are top-notch!",
        name: "Sumitra Kumari"
      },
];

function Reviews() {
  return (
    <div className='flex flex-col items-center'>
      {/* Heading */}
      <div className='text-4xl font-semibold text-center'>Words From Happy Clients</div>
      {/* Tagline */}
      <div className='mt-2 text-sm text-gray-600 text-center'>
        We have a large satisfied customer base. What others are saying about TabletzPharma
      </div>

      {/* Review Cards */}
      <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {reviewsData.map((review, index) => (
          <div key={index} className='relative w-96 h-80 p-8 border border-slate-300 rounded-lg shadow-lg bg-white'>
            {/* Image */}
            <img src="/Quotes.png" alt="quotes" className='w-12 h-12 mb-4' />
            <img src="/Quotesbg.png" alt="background quotes" className='absolute w-36 h-36 top-8 right-8 opacity-20' />
            
            {/* Content */}
            <div className='relative z-10 mt-4 text-gray-700 italic'>{review.content}</div>
            
            {/* Name */}
            <div className='relative z-10 mt-8 font-semibold text-right text-gray-900'>{review.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
