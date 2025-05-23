import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import OurPresence from "../components/OurPresence";
import StatsGrid from "../components/StatsGrid";
import TestimonialBanner from "../components/TestimonialBanner";
import VideoSection from "../components/VideoSection";
import YouTubeBanner from "../components/YouTubeBanner";

const Home = () => (
  <>
    <Navbar />
    <main className="bg-white min-h-screen">
      <HeroSection />
      <section className="container flex flex-col md:flex-row gap-4 justify-center items-center">
        <VideoSection />
        <StatsGrid />
      </section>
      <YouTubeBanner />
      <OurPresence />
      <TestimonialBanner />
    </main>
  </>
);

export default Home;
