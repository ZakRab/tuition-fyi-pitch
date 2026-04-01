export default function HowItWorks() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">How it works</h2>

      <div className="space-y-8">
        {[
          { n: "1", title: "Student submits cost data", sub: "Verified with I-20 form + financial aid letter. Anonymized." },
          { n: "2", title: "They unlock the full database", sub: "Filter by country, university, program. See real numbers." },
          { n: "3", title: "They get a token to pass forward", sub: "Sibling, neighbor, family friend back home." },
          { n: "4", title: "That person sees the data, then contributes", sub: "Every user brings the next one." },
        ].map((step) => (
          <div key={step.n} className="flex items-center gap-8">
            <div className={`w-16 h-16 rounded-full ${step.n === "4" ? "bg-[#1a1a1a]" : "bg-[#cc0000]"} text-white flex items-center justify-center font-bold text-3xl shrink-0`}>
              {step.n}
            </div>
            <div>
              <p className="text-3xl font-bold">{step.title}</p>
              <p className="text-2xl text-gray-500 mt-1">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
