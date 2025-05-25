import { useHomeStore } from "../store/homeStore";

const OurPresence = () => {
  const { channels } = useHomeStore();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Presence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing network of solar professionals and businesses
            across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((ch, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ch.image}
                  alt={ch.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent to-blue-500 opacity-60`}
                ></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {ch.icon && <span className="text-3xl">{ch.icon}</span>}
                  <h3 className="text-xl font-bold text-gray-900">
                    {ch.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 min-h-[60px]">
                  {ch.description}
                </p>

                <button
                  className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold 
                  transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                  Join Channel
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPresence;
