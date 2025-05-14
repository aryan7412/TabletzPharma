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
      <div className="absolute bg-[#00d5a5] w-[900px] h-28 left-1/2 transform -translate-x-1/2 -top-14 rounded-2xl flex items-center justify-around px-8 z-10">
        {/* Icon and Text Group 1 */}
        <div className="flex items-center space-x-4">
          <div className="bg-white h-12 w-12 flex justify-center items-center rounded-full">
            <PiCertificateLight className="h-9 w-9 text-[#00d5a5]" />
          </div>
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
          <div className="text-white">
            <h1 className="text-xl font-semibold">Expert Support</h1>
            <p className="text-sm">24/7 Customer Care</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-32 pb-12 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/LOGO.png" alt="TabletzPharma" className="w-12 h-12" />
                <div className="text-white">
                  <div className="text-green-400">TABLETZ</div>
                  <div className="text-pink-400">PHARMA</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted healthcare partner providing quality medicines and professional medical consultation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/aboutus" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaPhone className="text-[#00d5a5] rotate-90" />
                  <a href="tel:8969995969" className="hover:text-white transition-colors">896 999 5969</a>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <FaEnvelope className="text-[#00d5a5]" />
                  <a href="mailto:info@tabletzpharma.com" className="hover:text-white transition-colors">info@tabletzpharma.com</a>
                </li>
                <li className="flex items-start space-x-3 text-gray-400">
                  <FaMapMarkerAlt className="text-[#00d5a5] mt-1" />
                  <span>Jaraka, Odisha, India</span>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Everyday:</span>
                  <span>8:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} TabletzPharma. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
