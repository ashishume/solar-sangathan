import { useHomeStore } from "../store/homeStore";

const BrandBanner = () => {
  const { brands } = useHomeStore();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Trusted Partners
        </h2>
        <div className="relative">
          <div className="overflow-hidden pb-4">
            <div className="flex space-x-8 min-w-max px-4 animate-marquee">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="w-48 h-24 flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Gradient fade effect on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default BrandBanner;
