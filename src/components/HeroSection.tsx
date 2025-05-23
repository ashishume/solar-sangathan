import { useState, useEffect } from "react";
import RunningText from "./RunningText";

const images = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // const goToNext = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const goToPrevious = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <section className="py-8">
      <div className="relative w-[95%] h-[420px] rounded-3xl overflow-hidden mb-8 mx-auto">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`hero ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navigation Buttons */}
        {/* <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous image"
        >
          <LeftArrow />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Next image"
        >
          <RightArrow />
        </button> */}

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <RunningText runningText="🌟 Join our upcoming Solar Energy Summit on June 15th! Early bird registration now open. Limited spots available. 🌟" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
          Join <span className="text-[#b22222]">Solar Sangathan</span>,<br />
          the world's largest and most successful solar association.
        </div>
        <div className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto">
          Discover how{" "}
          <span className="text-[#b22222] font-semibold">Solar Sangathan</span>{" "}
          members connect every week to exchange valuable business
          referrals—generating significant revenue and growth opportunities for
          businesses like yours, just as members do around the world.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
