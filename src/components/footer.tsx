import FacebookIcon from "../assets/icons/facebook";
import TwitterIcon from "../assets/icons/twitter";
import LinkedInIcon from "../assets/icons/linkedin";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useImportantInfo } from "@/admin/store/importantInfo";

const Footer = () => {
  const { importantInfo, fetchImportantInfo } = useImportantInfo();

  useEffect(() => {
    fetchImportantInfo();
  }, []);

  const { footer: footerInfo } = importantInfo || {};

  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {footerInfo && (
          <div className="mb-8 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-300">{footerInfo.content}</p>
            {footerInfo.documentLink && (
              <a
                href={footerInfo.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-gray-300 border border-gray-600 rounded hover:bg-gray-700 hover:text-white transition"
              >
                Download
              </a>
            )}
          </div>
        )}
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
