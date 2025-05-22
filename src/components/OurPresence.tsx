import React from "react";

const channels = [
  {
    img: "https://via.placeholder.com/200x200?text=Logo+1",
    title: "सालर संगठन",
    desc: "We are India's largest and most trusted association in the solar energy sector.",
  },
  {
    img: "https://via.placeholder.com/200x200?text=Logo+2",
    title: "SOLAR व्यापार",
    desc: "India's leading and most trusted hub for solar trade and business.",
  },
  {
    img: "https://via.placeholder.com/200x200?text=Logo+3",
    title: "SOLAR रोज़गार",
    desc: "India's most trusted and largest platform for job seekers in solar industry.",
  },
];

const OurPresence = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
        Our Presence
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {channels.map((ch, idx) => (
          <div
            key={idx}
            className="border rounded-lg shadow-md flex flex-col items-center p-6 w-full md:w-80 bg-white"
          >
            <img
              src={ch.img}
              alt={ch.title}
              className="w-40 h-40 object-contain mb-4"
            />
            <div className="text-xl font-semibold mb-2 text-center">
              {ch.title}
            </div>
            <button className="bg-black text-white py-2 px-6 rounded mb-3 w-full font-medium hover:bg-gray-800 transition">
              Join Channel
            </button>
            <p className="text-gray-600 text-center text-sm">{ch.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurPresence;
