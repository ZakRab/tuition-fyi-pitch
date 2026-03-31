export default function Competition() {
  const competitors = [
    {
      name: "TuitionFit",
      type: "Direct",
      desc: "Crowdsourced financial aid data",
      gap: "Domestic students only",
    },
    {
      name: "Niche",
      type: "Direct",
      desc: "Student reviews + True Cost tool",
      gap: "Domestic focused, no verification",
    },
    {
      name: "Education Agencies",
      type: "Indirect",
      desc: "End-to-end guidance ($100–$4K)",
      gap: "Expensive, biased by commissions",
    },
    {
      name: "WhatsApp / Reddit",
      type: "Substitute",
      desc: "Students sharing info manually",
      gap: "Unstructured, ephemeral, unverified",
    },
    {
      name: "Do nothing",
      type: "Status quo",
      desc: "Google + hope + knowing one person",
      gap: "The biggest competitor — and the worst outcome",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why Not
      </p>
      <h2 className="text-5xl font-bold mb-8">Competition</h2>

      <div className="space-y-4">
        {competitors.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-6 py-3 border-b border-gray-100"
          >
            <div className="w-40 shrink-0">
              <p className="font-bold text-lg">{c.name}</p>
              <p className="text-xs text-gray-400 uppercase">{c.type}</p>
            </div>
            <p className="text-gray-600 flex-1">{c.desc}</p>
            <p className="text-[#cc0000] font-semibold text-right w-64 shrink-0">
              {c.gap}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-lg text-center font-semibold">
        No one does verified, crowdsourced cost data for international students.{" "}
        <span className="text-[#cc0000]">That&rsquo;s our gap.</span>
      </p>
    </div>
  );
}
