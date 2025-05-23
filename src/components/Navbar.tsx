import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white h-18 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-semibold text-red-600 transition-colors duration-300 hover:text-red-700">
              Logo
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${
                  open ? "hidden" : "block"
                } h-6 w-6 transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${
                  open ? "block" : "hidden"
                } h-6 w-6 transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/about"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/shop"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/training"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Training
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link to="/join">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                Join as member
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/shop"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
          >
            Shop
          </Link>
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
          >
            Blog
          </Link>
          <Link
            to="/training"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
          >
            Training
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/join"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-all duration-300"
          >
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
              Join as member
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
