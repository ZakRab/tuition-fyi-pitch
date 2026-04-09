export default function HowItWorks() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">How it works</h2>

      <div className="space-y-8">
        {[
          { n: "1", title: "Student uploads financial documents", sub: "Consolidated bill, 1098-T, or financial aid letter. AI extracts the numbers." },
          { n: "2", title: "They get a personalized report", sub: "ROI analysis, cost rankings by school/major/country, scholarship discovery." },
          { n: "3", title: "They share access tokens", sub: "Pass tokens to siblings, neighbors, family friends back home." },
          { n: "4", title: "Schools sponsor & incentivize uploads", sub: "Partner universities encourage their own students to contribute. The database grows on the schools’ dime." },
        ].map((step) => (
          <div key={step.n} className="flex items-center gap-8">
            <div className={`w-16 h-16 rounded-full ${step.n === "4" ? "bg-[#1a1a1a]" : "bg-[#cc0000]"} text-white flex items-center justify-center font-bold text-3xl shrink-0`}>
              {step.n}
            </div>
            <div>
              <p className="text-4xl font-bold">{step.title}</p>
              <p className="text-3xl text-gray-500 mt-1">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
