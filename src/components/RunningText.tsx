const RunningText = ({ runningText }: { runningText: string }) => (
  <div
    style={{
      width: "100%",
      textAlign: "center",
      fontSize: "1.25rem",
      fontWeight: 500,
      margin: "1rem 0",
      letterSpacing: "0.5px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      backgroundColor: "#fef2f2",
      padding: "0.75rem 0",
      borderTop: "1px solid #fee2e2",
      borderBottom: "1px solid #fee2e2",
    }}
  >
    <div
      style={{
        display: "inline-block",
        animation: "marquee 30s linear infinite",
        paddingLeft: "100%",
      }}
    >
      <span style={{ color: "#b22222" }}>{runningText}</span>
    </div>
    <style>
      {`
        @keyframes marquee {
          0% {
            transform: translateX(0);
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
