import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import RunningText from "../components/RunningText";
import StatsGrid from "../components/StatsGrid";
import TestimonialBanner from "../components/TestimonialBanner";
import VideoSection from "../components/VideoSection";

const Home = () => (
  <>
    <Navbar />
    <main style={{ background: "#f7f7f7", minHeight: "100vh" }}>
      <HeroSection />
      <RunningText />
      <section className="stats-video-section container">
        <VideoSection />
        <StatsGrid />
      </section>
      <TestimonialBanner />
    </main>
  </>
);

export default Home;
