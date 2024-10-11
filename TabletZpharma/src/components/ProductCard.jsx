import React from 'react'

function ProductCard({ image, productName, usage, mrp }) {
  return (
    <div className='h-[350px] w-[220px] ml-20 mt-20 border border-gray-300 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
      {/* Product Image */}
      <div className='h-[60%] overflow-hidden'>
        <img 
          src={image} 
          alt={productName} 
          className='h-full w-full object-cover' // Ensures the image fills the container
        />
      </div>
      <div className='h-[40%] w-full border-t border-gray-300 p-2'>
        {/* Product Name */}
        <div className='text-md font-semibold text-gray-800 mb-1'>{productName}</div>
        {/* Product Usage */}
        <div className='text-gray-600 text-sm mb-2'>{usage}</div>
        {/* Product MRP */}
        <div className='text-md font-bold text-black'>{mrp}</div>
      </div>
    </div>
  )
}

export default ProductCard;

