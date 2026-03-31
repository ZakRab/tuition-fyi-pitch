export default function Roadmap() {
  const phases = [
    {
      time: "Summer 2026",
      title: "Build & Launch",
      items: [
        "MVP live — submit costs, browse verified data",
        "Pre-populate top 50 schools with public I-20 data",
        "Launch to UNL international student community",
        "Target: 100 verified submissions",
      ],
    },
    {
      time: "Fall 2026",
      title: "Expand",
      items: [
        "5–10 Midwest universities (Purdue, Ohio State, Michigan State)",
        "500+ verified submissions",
        "Country-of-origin filtering live",
        "Begin press outreach — this is a story journalists want to write",
      ],
    },
    {
      time: "Spring 2027",
      title: "Scale",
      items: [
        "National expansion",
        "Add domestic student data collection",
        "Launch premium tools & monetization",
        "Target: 5,000+ submissions, revenue",
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        The Ask
      </p>
      <h2 className="text-5xl font-bold mb-10">Roadmap</h2>

      <div className="grid grid-cols-3 gap-8">
        {phases.map((p, i) => (
          <div key={i} className="relative">
            <p className="text-[#cc0000] font-bold text-sm uppercase tracking-wider mb-1">
              {p.time}
            </p>
            <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
            <ul className="space-y-2">
              {p.items.map((item, j) => (
                <li key={j} className="text-gray-600 flex items-start gap-2">
                  <span className="text-[#cc0000] mt-1.5 text-xs">&#9632;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
