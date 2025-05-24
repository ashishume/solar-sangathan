interface RightArrowProps {
  className?: string;
  strokeWidth?: number;
}

const RightArrow = ({
  className = "w-6 h-6",
  strokeWidth = 2,
}: RightArrowProps) => {
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
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default RightArrow;
