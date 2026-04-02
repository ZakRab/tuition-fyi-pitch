export default function OriginsChart() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-10 px-12 relative">
      <h2
        style={{
          fontSize: "2.75rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "1.5rem",
          color: "var(--text)",
        }}
      >
        Origins of International Students
      </h2>
      <div className="flex-1 w-full flex items-center justify-center min-h-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/chart.png"
          alt="Origins of International Students chart"
          style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
        />
      </div>
      <p
        style={{
          position: "absolute",
          bottom: "1.25rem",
          right: "2rem",
          fontSize: "0.75rem",
          color: "var(--muted)",
        }}
      >
        Source: Open Doors Project
      </p>
    </div>
  );
}
