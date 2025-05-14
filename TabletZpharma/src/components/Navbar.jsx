import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import NavItems from "./NavItems";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Products", path: "/products" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="border-b-2 w-full h-14 flex flex-row">
      {/* LOGO */}
      <div className="flex flex-row">
        <a href="#">
          <img
            className=" ml-6 w-16 h-12"
            src="/LOGO.png"
            alt="TabletzPharma"
          />
        </a>
        {/* COMPANY NAME */}
        <div className="flex flex-row mt-3 text-xl ml-2">
          <div className=" text-green-800">T A B L E T Z </div>
          <div className="ml-2 text-pink-700">P H A R M A</div>
        </div>
      </div>
      {/* Navlinks */}
      <div className="mt-3">
        <ul className="flex flex-row ml-20 space-x-20 ">
          {navLinks.map((link, index) => (
            <NavItems key={index} label={link.label} path={link.path} />
          ))}
        </ul>
      </div>
      {/* SearchBar */}
      <div className="ml-20 mt-[3px]">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-80 h-12 p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Medicines..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
          <IoSearchSharp className="absolute left-3 text-gray-500 w-4 h-4 top-4 pointer-events-none" />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
