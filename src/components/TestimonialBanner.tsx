import { useState, useEffect, useRef } from "react";
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
  {
    quote:
      "The platform has helped us scale our solar installation business significantly.",
    author: "Neha Gupta",
    role: "Business Owner",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "Excellent networking opportunities and valuable industry insights.",
    author: "Vikram Singh",
    role: "Solar Engineer",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "Excellent networking opportunities and valuable industry insights.",
    author: "Vikram Singh",
    role: "Solar Engineer",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
  },
  {
    quote: "Excellent networking opportunities and valuable industry insights.",
    author: "Vikram Singh",
    role: "Solar Engineer",
    location: "Pune",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
  },
];

const TestimonialBanner = () => {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setScrollPosition1((prev) => {
        if (prev <= -100) return 0;
        return prev - 0.5;
      });
      setScrollPosition2((prev) => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

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

        {/* First Row of Testimonials */}
        <div className="relative overflow-hidden mb-8" ref={containerRef1}>
          <div
            className="flex transition-transform duration-1000"
            style={{
              transform: `translateX(${scrollPosition1}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`row1-${index}`}>
                {renderTestimonialCard(testimonial)}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row of Testimonials */}
        <div className="relative overflow-hidden" ref={containerRef2}>
          <div
            className="flex transition-transform duration-1000"
            style={{
              transform: `translateX(${scrollPosition2}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`row2-${index}`}>
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
    </div>
  );
};

export default TestimonialBanner;
