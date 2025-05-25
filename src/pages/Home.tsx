import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import MediaStatsSection from "../components/MediaStatsSection";
import OurPresence from "../components/OurPresence";
import TestimonialBanner from "../components/TestimonialBanner";
import YouTubeBanner from "../components/YouTubeBanner";
import StepsToSuccess from "../components/StepsToSuccess";
import BrandBanner from "../components/BrandBanner";
import { useHomeStore } from "../store/homeStore";

const Home = () => {
  const {
    fetchTestimonials,
    fetchChannels,
    fetchBrands,
    fetchVideoData,
    fetchStats,
    fetchHeroImages,
    loading,
    error,
  } = useHomeStore();

  useEffect(() => {
    // Fetch all data in parallel
    Promise.all([
      fetchTestimonials(),
      fetchChannels(),
      fetchBrands(),
      fetchVideoData(),
      fetchStats(),
      fetchHeroImages(),
    ]);
  }, [
    fetchTestimonials,
    fetchChannels,
    fetchBrands,
    fetchVideoData,
    fetchStats,
    fetchHeroImages,
  ]);

  // Check if any section is loading
  const isLoading = Object.values(loading).some(Boolean);

  // Check if any section has an error
  const hasError = Object.values(error).some(Boolean);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600 text-xl">
          {Object.entries(error)
            .filter(([_, value]) => value)
            .map(([key, value]) => (
              <div key={key}>{value}</div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Steps to Success Section */}
      <StepsToSuccess />

      {/* Media and Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <MediaStatsSection />
      </section>

      {/* Brand Banner Section */}
      <BrandBanner />

      {/* YouTube Banner */}
      <section className="py-8">
        <YouTubeBanner />
      </section>

      {/* Our Presence Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <OurPresence />
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <TestimonialBanner />
      </section>
    </>
  );
};

export default Home;
