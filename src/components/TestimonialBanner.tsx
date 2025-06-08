import { useHomeStore } from "../store/homeStore";
import YouTubeIcon from "../assets/icons/youtube";

const TestimonialBanner = () => {
  const { testimonials } = useHomeStore();

  const renderTestimonialCard = (testimonial: (typeof testimonials)[0]) => (
    <div className="flex-shrink-0 w-[400px] bg-white rounded-xl shadow p-6 mx-4 m-6">
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-16 h-16 rounded-full object-cover border-4 border-red-100"
        />
        <div>
          <blockquote className="text-lg font-medium text-gray-900 mb-2">
            "{testimonial.quote}"
          </blockquote>
          <div className="text-gray-600">
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm">
              {testimonial.role} • {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/5 rounded-full translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-red-600">340K+</span> Solar
            Professionals
          </h2>
          <p className="text-lg text-gray-600">
            Join the largest network of solar energy professionals in India
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`row1-${index}`}>
                {renderTestimonialCard(testimonial)}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Watch Success Stories</span>
            <YouTubeIcon className="w-6 h-6" />
          </a>
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
            animation: marquee 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialBanner;
