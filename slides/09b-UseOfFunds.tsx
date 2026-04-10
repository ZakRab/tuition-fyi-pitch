export default function UseOfFunds() {
  const items = [
    {
      label: "Early marketing",
      description: "Student outreach",
      pct: 85,
    },
    {
      label: "AI costs",
      description: "Automated document parsing",
      pct: 10,
    },
    {
      label: "Platform upkeep",
      description: "Hosting and infrastructure",
      pct: 5,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto px-16">
        <h2 className="text-6xl font-bold mb-12">Use of funds</h2>

        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.label}>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="text-3xl font-semibold text-gray-900">{item.label}</span>
                  <span className="ml-4 text-2xl text-gray-500">{item.description}</span>
                </div>
                <span className="text-3xl font-bold text-[#cc0000]">{item.pct}%</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#cc0000] rounded-full"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
