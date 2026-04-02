export default function Risks() {
  const risks = [
    {
      risk: "Selling across borders",
      response: "Tight-knit international student relations will help dramatically",
    },
    {
      risk: "Political & visa uncertainty",
      response: "Even with temporary uncertainty in the industry, there is more than enough market to target as a startup",
    },
    {
      risk: "Starter data accumulation",
      response: "Lots of time will be spent on outreach and pre-population of data",
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
