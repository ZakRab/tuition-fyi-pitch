export default function Risks() {
  const risks = [
    {
      risk: "Cold-start: not enough seed data",
      response: "Pre-populate top 50 schools ourselves, partner with 2–3 anchor universities to encourage their own students to contribute on day one.",
    },
    {
      risk: "Recent international enrollment dip",
      response: "That decline is exactly why schools will pay us — they need cheaper, more efficient ways to recruit. The pain creates the budget.",
    },
    {
      risk: "Long enterprise sales cycles",
      response: "Bottom-up: students use the free product, generate inbound interest from admissions offices. Land-and-expand from there.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Key risks</h2>

      <div className="space-y-8">
        {risks.map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-2xl shrink-0 mt-1">
              {i + 1}
            </div>
            <div>
              <p className="text-4xl font-bold text-[#cc0000]">{item.risk}</p>
              <p className="text-3xl text-gray-600 mt-1">{item.response}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
