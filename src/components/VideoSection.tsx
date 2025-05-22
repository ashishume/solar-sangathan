import React from "react";

const VideoSection = () => (
  <div className="video-section">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      alt="video preview"
      className="video-img"
    />
    <div className="video-play">
      <div className="play-btn">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#b22222"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="white" />
          <polygon points="13,10 24,16 13,22" fill="#b22222" />
        </svg>
      </div>
    </div>
  </div>
);

export default VideoSection;
