export default function WhyStartupStudio() {
  const needs = [
    {
      need: "$100K to build and scale",
      how: "Fund the platform build, cover infrastructure costs, and expand beyond UNL to universities nationwide.",
    },
    {
      need: "Mentorship & network",
      how: "Navigating university partnerships and data governance requires experienced guidance we don't have yet.",
    },
    {
      need: "Dedicated time & space",
      how: "12 hrs/week of structured team time, lab access, and the accountability to ship consistently.",
    },
    {
      need: "Legal & business formation",
      how: "Entity formation, open-source data licensing, and student data privacy compliance (FERPA considerations).",
    },
    {
      need: "Nebraska as the launchpad",
      how: "Start with UNL's international community, expand to Big Ten schools, then go national. Local roots, national ambition.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why Startup Studio
      </p>
      <h2 className="text-5xl font-bold mb-10">Why We Need This Program</h2>

      <div className="space-y-6">
        {needs.map((n, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="w-8 h-8 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-1">
              {i + 1}
            </div>
            <div>
              <p className="text-xl font-bold">{n.need}</p>
              <p className="text-gray-600">{n.how}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
