const CurvedArrow = () => (
  <svg
    viewBox="0 0 80 50"
    fill="none"
    className="h-full w-full -rotate-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 45 Q 20 45, 35 30 Q 50 15, 70 8"
      stroke="var(--accent-tertiary)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M65 3 L 72 8 L 64 13"
      stroke="var(--accent-tertiary)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

export default CurvedArrow;
