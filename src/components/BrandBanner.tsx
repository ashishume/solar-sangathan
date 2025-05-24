const BrandBanner = () => {
  const brands = [
    {
      name: "Apple Inc.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Microsoft",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P7PSO_hZpFpHrAtfV3Xvpb13CT7V9kuKxg&s",
    },
    {
      name: "Netflix",
      logo: "https://yt3.googleusercontent.com/CvgBA1ypUZNxOjiCX0l1V2FbAm7oSDPZE4YkMvkpT_4iLXQ3IXWVtBgWnznHxgtcUoj50TXqZA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Nvidia",
      logo: "https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Trusted Partners
        </h2>
        <div className="relative">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex space-x-8 min-w-max px-4">
              {brands.map((brand, index) => (
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
    </section>
  );
};

export default BrandBanner;
