export default function Risks() {
  const risks = [
    {
      risk: "Cold start — no data without users",
      type: "Behavioral",
      mitigation:
        "Pre-populate with publicly available I-20 cost-of-attendance data for top 50 schools. Our 10 interviewees are our first submitters.",
    },
    {
      risk: "Data quality & trust",
      type: "Technological",
      mitigation:
        "I-20 verification is stronger than Levels.fyi — it's a federal, standardized document. Open-source data is auditable by anyone.",
    },
    {
      risk: "Monetization is deferred",
      type: "Financial",
      mitigation:
        "Build trust and user base first. Revenue via premium tools, university benchmarking data, and financial product partnerships — not commissions.",
    },
    {
      risk: "Universities may resist transparency",
      type: "External",
      mitigation:
        "Data is student-submitted and public. Universities can't suppress it. And better-informed students mean fewer visa denials and lower churn — universities benefit too.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why Not
      </p>
      <h2 className="text-5xl font-bold mb-8">Risks & Mitigations</h2>

      <div className="space-y-6">
        {risks.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_2fr] gap-6 items-start">
            <div>
              <p className="font-bold text-lg">{r.risk}</p>
              <span className="text-xs uppercase text-gray-400">{r.type}</span>
            </div>
            <p className="text-gray-600 bg-gray-50 rounded-xl p-4">
              {r.mitigation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
