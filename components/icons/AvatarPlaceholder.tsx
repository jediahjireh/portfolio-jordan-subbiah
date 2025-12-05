const AvatarPlaceholder = () => {
  return (
    <div className="relative size-60 overflow-hidden rounded-full bg-gradient-to-br from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-tertiary)]">
      {/* Initials */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl font-bold text-white/90 drop-shadow-lg">
          JRS
        </span>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.2),transparent_50%)]" />

      {/* Subtle grid pattern */}
      <svg
        className="absolute inset-0 size-full opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default AvatarPlaceholder;
