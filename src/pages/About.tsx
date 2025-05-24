import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const About = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1683718217153-cb57b088b178?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684017834450-21747b64d666?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1638734254932-657721b67e38?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1684435911226-e4ae6b7979af?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          About Solar Sangathan
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Solar Sangathan is India's largest and most trusted association in
              the solar energy sector. Founded with a vision to transform
              India's renewable energy landscape, we bring together
              professionals, businesses, and innovators under one unified
              platform.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-600">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To accelerate India's transition to sustainable energy by
                fostering collaboration, innovation, and knowledge sharing among
                solar energy stakeholders.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-600">
                Our Impact
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>500+ Active Members</li>
                <li>28+ States Coverage</li>
                <li>100+ Manufacturing Partners</li>
                <li>350+ EPC Companies</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-red-600">
                Why Join Us?
              </h3>
              <p className="text-gray-700">
                As a member of Solar Sangathan, you gain access to a powerful
                network of industry leaders, exclusive business opportunities,
                and cutting-edge insights that drive growth and innovation in
                the solar sector.
              </p>
            </div>
          </div>

          {/* Image Wall */}
          <div className="relative h-[600px]">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute w-64 h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "hover:rotate-3" : "hover:-rotate-3"
                }`}
                style={{
                  top: `${(index * 20) % 60}%`,
                  left: `${(index * 15) % 70}%`,
                  zIndex: index,
                }}
              >
                <img
                  src={src}
                  alt={`Solar energy ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
