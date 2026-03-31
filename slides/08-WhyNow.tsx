export default function WhyNow() {
  const reasons = [
    {
      title: "Record enrollment",
      detail: "International student numbers at all-time highs — demand has never been greater.",
    },
    {
      title: "Transparency is expected",
      detail: "Levels.fyi proved crowdsourced salary data works. Gen Z expects this for every major financial decision.",
    },
    {
      title: "AI unlocks verification at scale",
      detail: "Document parsing, data extraction from I-20 forms, and intelligent matching are now cheap and reliable.",
    },
    {
      title: "Political uncertainty increases urgency",
      detail: "Visa anxiety, policy shifts, and cost volatility make reliable cost data more critical than ever.",
    },
    {
      title: "The gap is wide open",
      detail: "TuitionFit does this for domestic students. Nobody serves international students. First-mover advantage is available right now.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why Now
      </p>
      <h2 className="text-5xl font-bold mb-10">The Timing Is Right</h2>

      <div className="space-y-6">
        {reasons.map((r, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="text-[#cc0000] font-black text-2xl mt-0.5">{i + 1}</span>
            <div>
              <p className="text-xl font-bold">{r.title}</p>
              <p className="text-gray-600">{r.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
