import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const About = () => (
  <main className="min-h-screen bg-white">
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-900">About Page</h2>
    </div>
    <Footer />
  </main>
);

export default About;
