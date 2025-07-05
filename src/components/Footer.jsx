import React from "react";
import { PiCertificateLight } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative bg-slate-800 w-full mt-32">
      {/* Upper Element */}
      <div className="absolute bg-[#00d5a5] w-11/12 max-w-2xl md:max-w-3xl lg:max-w-5xl left-1/2 transform -translate-x-1/2 -top-14 rounded-2xl flex flex-col sm:flex-row items-center justify-center px-4 md:px-8 z-10 py-6 gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          {/* Icon and Text Group 1 */}
          <div className="flex items-center space-x-4 flex-1 justify-center min-w-[180px]">
            <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
              <PiCertificateLight className="h-9 w-9 text-[#00d5a5]" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-semibold">Premium Quality</h1>
              <p className="text-sm">Certified Top Quality Items</p>
            </div>
          </div>

          {/* Icon and Text Group 2 */}
          <div className="flex items-center space-x-4 flex-1 justify-center min-w-[180px]">
            <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
              <BiSolidOffer className="h-7 w-7 text-[#00d5a5]" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-semibold">Best Offers</h1>
              <p className="text-sm">Amazing Discounts Available</p>
            </div>
          </div>

          {/* Icon and Text Group 3 */}
          <div className="flex items-center space-x-4 flex-1 justify-center min-w-[180px]">
            <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
              <FaUserDoctor className="h-7 w-7 text-[#00d5a5]" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-semibold">Expert Support</h1>
              <p className="text-sm">24/7 Customer Care</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-44 md:pt-36 pb-12 px-2 sm:px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 bg-slate-800 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-700">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img src="/LOGO.png" alt="TabletzPharma" className="w-12 h-12 rounded-full border-2 border-[#00d5a5] bg-white shadow" />
                <div className="text-white font-bold text-xl tracking-wide">
                  <span className="text-green-400">TABLETZ</span> <span className="text-pink-400">PHARMA</span>
                </div>
              </div>
              <p className="text-gray-400 text-base font-medium">
                Your trusted healthcare partner providing quality medicines and professional medical consultation.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col xs:flex-row gap-8 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex-1 min-w-[140px]">
                <h3 className="text-white text-lg font-bold mb-4 tracking-wide border-b border-slate-700 pb-2">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-[#00d5a5] transition-colors font-medium"><span>🏠</span> Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutus" className="flex items-center gap-2 text-gray-400 hover:text-[#00d5a5] transition-colors font-medium"><span>ℹ️</span> About Us</Link>
                  </li>
                  <li>
                    <Link to="/products" className="flex items-center gap-2 text-gray-400 hover:text-[#00d5a5] transition-colors font-medium"><span>💊</span> Products</Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="flex items-center gap-2 text-gray-400 hover:text-[#00d5a5] transition-colors font-medium"><span>🖼️</span> Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center gap-2 text-gray-400 hover:text-[#00d5a5] transition-colors font-medium"><span>📞</span> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col xs:flex-row gap-8 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex-1 min-w-[140px]">
                <h3 className="text-white text-lg font-bold mb-4 tracking-wide border-b border-slate-700 pb-2">Contact Us</h3>
                <ul className="space-y-3 text-base">
                  <li className="flex items-center gap-3 text-gray-400">
                    <FaPhone className="text-[#00d5a5]" />
                    <a href="tel:8969995969" className="hover:text-[#00d5a5] transition-colors font-medium">896 999 5969</a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <FaEnvelope className="text-[#00d5a5]" />
                    <a href="mailto:info@tabletzpharma.com" className="hover:text-[#00d5a5] transition-colors font-medium">info@tabletzpharma.com</a>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <FaMapMarkerAlt className="text-[#00d5a5] mt-1" />
                    <span className="font-medium">Jaraka, Odisha, India</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Business Hours */}
            <div className="col-span-1 lg:col-span-1">
              <h3 className="text-white text-lg font-bold mb-4 tracking-wide border-b border-slate-700 pb-2">Business Hours</h3>
              <ul className="space-y-2 text-gray-400 text-base">
                <li className="flex justify-between">
                  <span>Everyday:</span>
                  <span className="font-semibold text-[#00d5a5]">8:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-base text-center sm:text-left font-medium">
                © {new Date().getFullYear()} TabletzPharma. All rights reserved.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-2 sm:mt-0 items-center">
                <a href="#" className="text-gray-400 hover:text-[#00d5a5] text-base font-medium transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#00d5a5] text-base font-medium transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#00d5a5] text-base font-medium transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
