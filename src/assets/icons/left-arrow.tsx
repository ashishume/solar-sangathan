interface LeftArrowProps {
  className?: string;
  strokeWidth?: number;
}

const LeftArrow = ({
  className = "w-6 h-6",
  strokeWidth = 2,
}: LeftArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default LeftArrow;
