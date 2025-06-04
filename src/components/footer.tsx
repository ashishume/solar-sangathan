import FacebookIcon from "../assets/icons/facebook";
import TwitterIcon from "../assets/icons/twitter";
import LinkedInIcon from "../assets/icons/linkedin";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Solar Sangathan</h3>
            <p className="text-gray-400 mb-4">
              India's largest and most trusted association in the solar energy
              sector.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-gray-400 hover:text-white transition"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/training"
                  className="text-gray-400 hover:text-white transition"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-400 hover:text-white transition"
                >
                  Shop
                </Link>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Solar Street</li>
              <li>New Delhi, India</li>
              <li>contact@solarsangathan.com</li>
              <li>+91 123 456 7890</li>
            </ul>
          </div> */}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Solar Sangathan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
