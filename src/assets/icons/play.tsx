import React from "react";

interface PlayIconProps {
  className?: string;
}

const PlayIcon: React.FC<PlayIconProps> = ({ className = "" }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="white" />
    <polygon points="13,10 24,16 13,22" fill="#b22222" />
  </svg>
);

export default PlayIcon;
