import React from "react";
import { PiCertificateLight } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";

function Footer() {
  return (
    <div className="relative bg-slate-800 h-96 w-full mt-32">
      {/* Upper Element */}
      <div className="absolute bg-[#00d5a5] w-[900px] h-28 left-1/2 transform -translate-x-1/2 -top-14 rounded-2xl flex items-center justify-around px-8 z-10">
        {/* Icon and Text Group 1 */}
        <div className="flex items-center space-x-4">
          <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
            <PiCertificateLight className="h-9 w-9 text-[#00d5a5]" />
          </div>
          {/* Text */}
          <div className="text-white">
            <h1 className="text-xl font-semibold">Premium Quality</h1>
            <p className="text-sm">Certified Top Quality Items</p>
          </div>
        </div>

        {/* Icon and Text Group 2 */}
        <div className="flex items-center space-x-4">
          <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
            <BiSolidOffer className="h-7 w-7 text-[#00d5a5]" />
          </div>
          {/* Text */}
          <div className="text-white">
            <h1 className="text-xl font-semibold">Best Offers</h1>
            <p className="text-sm">Amazing Discounts Available</p>
          </div>
        </div>

        {/* Icon and Text Group 3 */}
        <div className="flex items-center space-x-4">
          <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
            <FaUserDoctor className="h-7 w-7 text-[#00d5a5]" />
          </div>
          {/* Text */}
          <div className="text-white">
            <h1 className="text-xl font-semibold">Expert Support</h1>
            <p className="text-sm">24/7 Customer Care</p>
          </div>
        </div>
      </div>

      {/* Lower Element */}
      <div className="relative h-96 w-full z-0">
      </div>
    </div>
  );
}

export default Footer;
