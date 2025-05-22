import React from "react";

const HeroSection = () => (
  <section className="hero-section">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      alt="hero"
      className="hero-img"
    />
    <div className="hero-content">
      <div className="hero-title">
        Join <span style={{ color: "#b22222" }}>Solar Sangathan</span>,<br />
        the world's largest and most successful solar association.
      </div>
      <div className="hero-desc">
        Discover how{" "}
        <span style={{ color: "#b22222", fontWeight: 600 }}>
          Solar Sangathan
        </span>{" "}
        members connect every week to exchange valuable business
        referrals—generating significant revenue and growth opportunities for
        businesses like yours, just as members do around the world.
      </div>
    </div>
  </section>
);

export default HeroSection;
