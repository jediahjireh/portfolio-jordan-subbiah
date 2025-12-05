const EllipseHighlight = () => (
  <span
    className="pointer-events-none absolute -inset-x-3 -inset-y-1 -z-10 translate-y-1 rotate-12 rounded-[50%] border-2 border-[var(--accent-tertiary)] opacity-60"
    style={{
      boxShadow: "0 0 20px var(--glow-primary)",
    }}
  />
);

export default EllipseHighlight;
