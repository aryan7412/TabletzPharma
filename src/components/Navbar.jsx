import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import NavItems from "./NavItems";
import { useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="border-b-2 w-full h-16 flex items-center px-4 md:px-8 bg-white z-50 relative">
      {/* LOGO & Company Name */}
      <div className="flex items-center flex-shrink-0">
        <a href="#">
          <img
            className="w-12 h-10 md:w-16 md:h-12"
            src="/LOGO.png"
            alt="TabletzPharma"
          />
        </a>
        <div className="flex flex-col md:flex-row md:mt-3 text-lg md:text-xl ml-2">
          <div className="text-green-800">T A B L E T Z</div>
          <div className="md:ml-2 text-pink-700">P H A R M A</div>
        </div>
      </div>
      {/* Desktop Navlinks */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <ul className="flex flex-row space-x-8 xl:space-x-20">
          {navLinks.map((link, index) => (
            <NavItems key={index} label={link.label} path={link.path} />
          ))}
        </ul>
      </div>
      {/* Desktop SearchBar */}
      <div className="hidden lg:block ml-8">
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-48 md:w-80 h-10 md:h-12 p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Medicines..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
          <IoSearchSharp className="absolute left-3 text-gray-500 w-4 h-4 top-3 md:top-4 pointer-events-none" />
        </form>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="flex lg:hidden ml-auto z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-3xl text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setMobileMenuOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/LOGO.png" alt="TabletzPharma" className="w-10 h-10" />
              <span className="ml-2 text-green-800 font-bold">TABLETZ</span>
              <span className="ml-1 text-pink-700 font-bold">PHARMA</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-2xl">
              <HiX />
            </button>
          </div>
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <NavItems key={index} label={link.label} path={link.path} />
            ))}
          </ul>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full h-10 p-4 pl-10 text-sm text-gray-900 border rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Medicines..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
            <IoSearchSharp className="absolute left-3 text-gray-500 w-4 h-4 top-3 pointer-events-none" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
