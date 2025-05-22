const RunningText = () => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: 500,
      margin: "2rem 0",
      letterSpacing: "1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }}
  >
    <div
      style={{
        display: "inline-block",
        animation: "marquee 20s linear infinite",
      }}
    >
      <span>--------------running text for updates--------------</span>
    </div>
    <style>
      {`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}
    </style>
  </div>
);

export default RunningText;
