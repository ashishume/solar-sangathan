import { useState, useEffect } from "react";
import YouTubeIcon from "../assets/icons/youtube";

const testimonials = [
  {
    quote:
      "Solar Sangathan has transformed our business. The network and support are incredible!",
    author: "Rajesh Kumar",
    role: "Solar EPC Owner",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      "The best platform for solar professionals. Made significant connections here.",
    author: "Priya Sharma",
    role: "Solar Consultant",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote:
      "Joining Solar Sangathan was the best decision for our solar manufacturing business.",
    author: "Amit Patel",
    role: "Manufacturing Director",
    location: "Gujarat",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
  },
];

const TestimonialBanner = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
        <div className="relative max-w-4xl mx-auto min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 transform ${
                index === currentTestimonial
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-full">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full object-cover border-4 border-red-100"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-4">
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
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentTestimonial
                  ? "bg-red-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
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
    </div>
  );
};

export default TestimonialBanner;
