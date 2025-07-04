import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../assets/icons/menu";
import CloseIcon from "../assets/icons/close";
import logo from "../assets/solar-light-logo.jpg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    // { to: "/shop", label: "Shop" },
    { to: "/blog", label: "Blog" },
    { to: "/resources", label: "Important Links" },
    // { to: "/training", label: "Training" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white h-18 sticky top-0 z-50 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl font-semibold text-red-600 transition-colors duration-300 hover:text-red-700"
            >
              <img src={logo} alt="Logo" className="w-20 h-20" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon
                className={`${
                  open ? "hidden" : "block"
                } h-6 w-6 transition-transform duration-300`}
              />
              <CloseIcon
                className={`${
                  open ? "block" : "hidden"
                } h-6 w-6 transition-transform duration-300`}
              />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-red-600 font-bold underline underline-offset-4"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-red-600 font-bold bg-red-100"
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
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
