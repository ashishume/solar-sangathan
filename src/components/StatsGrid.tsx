import React from "react";

const stats = [
  { label: "500+ Members" },
  { label: "28+ States" },
  { label: "100+ Manufactures" },
  { label: "350+ EPCs, Startups" },
];

const StatsGrid = () => (
  <div className="stats-grid">
    {stats.map((stat, i) => (
      <div key={stat.label} className="stat-cell">
        {stat.label}
      </div>
    ))}
  </div>
);

export default StatsGrid;
