import HeroSection from "../components/HeroSection";
import MediaStatsSection from "../components/MediaStatsSection";
import OurPresence from "../components/OurPresence";
import TestimonialBanner from "../components/TestimonialBanner";
import YouTubeBanner from "../components/YouTubeBanner";
import StepsToSuccess from "../components/StepsToSuccess";
import BrandBanner from "../components/BrandBanner";

const Home = () => {
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
