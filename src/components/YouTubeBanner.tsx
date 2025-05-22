import React from "react";

const YouTubeBanner = () => (
  <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 rounded-2xl px-6 py-6 md:py-4 mb-8 max-w-4xl mx-auto mt-6">
    <div className="flex-1 text-center md:text-left">
      <span className="font-bold text-red-600 text-lg md:text-xl">
        See why 340K+{" "}
      </span>
      <span className="font-semibold text-black text-lg md:text-xl">
        entrepreneurs like
        <br className="md:hidden" /> you chose Solar Sangathan to grow their
        business
      </span>
    </div>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 md:mt-0 md:ml-6 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-2 rounded-full shadow-md transition"
    >
      YouTube
    </a>
  </div>
);

export default YouTubeBanner;
