import React from 'react'

function ProductCard({ image, productName, usage, mrp }) {
  return (
    <div className='w-full max-w-xs sm:max-w-sm md:max-w-xs m-2 sm:m-4 border border-gray-300 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-white flex flex-col h-[370px] sm:h-[400px]'>
      {/* Product Image Container */}
      <div className='h-40 sm:h-[60%] w-full relative'>
        <img 
          src={image} 
          alt={productName} 
          className='absolute inset-0 w-full h-full object-contain p-4' // Changed to object-contain with padding
        />
      </div>
      <div className='flex-1 w-full border-t border-gray-300 p-3 sm:p-4 flex flex-col justify-between'>
        {/* Product Name */}
        <div className='text-lg font-semibold text-gray-800 line-clamp-2'>{productName}</div>
        {/* Product Usage */}
        <div className='text-gray-600 text-sm line-clamp-2'>{usage}</div>
        {/* Product MRP */}
        <div className='text-lg font-bold text-black mt-2'>{mrp}</div>
      </div>
    </div>
  )
}

export default ProductCard;

