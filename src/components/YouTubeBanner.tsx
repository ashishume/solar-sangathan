import YouTubeIcon from "../assets/icons/youtube";

const YouTubeBanner = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-6 py-8 md:py-6 mb-8 max-w-4xl mx-auto mt-6 shadow-lg hover:shadow-xl transition-all duration-300">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-32 h-32 bg-red-500/5 rounded-full -translate-x-16 -translate-y-16"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500/5 rounded-full translate-x-20 translate-y-20"></div>

    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex-1 text-center md:text-left">
        <span className="font-bold text-red-600 text-lg md:text-xl px-2">
          See why 340K+
        </span>
        <span className="font-semibold text-gray-800 text-lg md:text-xl leading-relaxed">
          entrepreneurs like
          <br className="md:hidden" /> you chose{" "}
          <span className="text-red-600">Solar Sangathan</span> to grow their
          business
        </span>
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <span>Watch on</span>
        <YouTubeIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  </div>
);

export default YouTubeBanner;
