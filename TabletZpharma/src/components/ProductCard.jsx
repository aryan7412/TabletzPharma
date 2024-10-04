import React from "react";

function ProductCard() {
  return (
    <div className="ml-4 w-52 h-64 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl">
      {/* Image */}
      <div className="relative">
        <img className="w-full h-36 object-cover rounded-t-2xl" src="" alt="Product Image" />
        <div className="bg-yellow-300 w-20 p-1 absolute top-4 right-[0px] rounded-l-lg text-center font-bold text-xs shadow-md">
          20% Off
        </div>
      </div>
      {/* Product Details */}
      <div className="w-full mt-3 h-24 border border-gray-100 rounded-b-2xl p-3 bg-white flex flex-col justify-between">
        {/* Description */}
        <div>
          <div className="text-gray-500 text-xs">Wellness</div>
          <div className="text-sm font-medium text-gray-800">Horlicks is the power of my energy</div>
        </div>
        {/* Price */}
        <div className="flex flex-row items-center justify-end gap-2">
          <div className="line-through text-sm text-gray-400">₹500</div>
          <div className="text-lg font-bold">₹400</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
