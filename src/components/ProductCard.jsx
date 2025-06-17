import React from 'react'

function ProductCard({ image, productName, usage, mrp }) {
  return (
    <div className='h-[400px] w-[280px] m-4 border border-gray-300 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-white'>
      {/* Product Image Container */}
      <div className='h-[60%] w-full relative'>
        <img 
          src={image} 
          alt={productName} 
          className='absolute inset-0 w-full h-full object-contain p-4' // Changed to object-contain with padding
        />
      </div>
      <div className='h-[40%] w-full border-t border-gray-300 p-4 flex flex-col justify-between'>
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

