import { useState, useEffect } from "react";
import RunningText from "./RunningText";
import { useHomeStore } from "../store/homeStore";

const HeroSection = () => {
  const { heroImages } = useHomeStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

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
        {heroImages.map((src, index) => (
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
          {heroImages.map((_, index) => (
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
