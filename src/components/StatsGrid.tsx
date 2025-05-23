import React from "react";

const stats = [
  { label: "500+ Members" },
  { label: "28+ States" },
  { label: "100+ Manufactures" },
  { label: "350+ EPCs, Startups" },
];

const StatsGrid = () => (
  <div className="grid grid-cols-2 gap-6 h-[350px] w-full">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all flex flex-col justify-center items-center"
      >
        <div className="text-3xl md:text-4xl font-bold text-[#b22222] mb-2">
          {stat.label.split("+")[0]}
          <span className="text-[#b22222]">+</span>
        </div>
        <div className="text-base md:text-lg text-gray-600">
          {stat.label.split("+")[1]}
        </div>
      </div>
    ))}
  </div>
);

export default StatsGrid;
