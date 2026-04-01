export default function HowItWorks() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">How it works</h2>

      <div className="space-y-8">
        {[
          {
            n: "1",
            title: "A current student submits their cost data",
            sub: "Tuition, scholarships, net cost. Verified with their I-20 form and financial aid letter. All anonymized.",
          },
          {
            n: "2",
            title: "They unlock the full database",
            sub: "See what students from their country actually paid at every school. Filter by university, program, year.",
          },
          {
            n: "3",
            title: "They get a token to pass forward",
            sub: "A younger sibling, a neighbor, a family friend back home. Someone who needs this data for their own decision.",
          },
          {
            n: "4",
            title: "That person sees the data, then contributes their own",
            sub: "Every user brings the next one. The database grows with each cycle.",
          },
        ].map((step) => (
          <div key={step.n} className="flex items-center gap-8">
            <div className={`w-16 h-16 rounded-full ${step.n === "4" ? "bg-[#1a1a1a]" : "bg-[#cc0000]"} text-white flex items-center justify-center font-bold text-3xl shrink-0`}>
              {step.n}
            </div>
            <div>
              <p className="text-2xl font-bold">{step.title}</p>
              <p className="text-xl text-gray-500 mt-1">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-l-4 border-[#cc0000] pl-8 py-3 bg-gray-50 rounded-r-xl">
        <p className="text-2xl italic text-gray-700">
          &ldquo;My sister got in just by Googling, because I was already here to guide her.&rdquo;
        </p>
        <p className="text-xl text-gray-400 mt-2">- Hamdan, India. The token system formalizes what&rsquo;s already happening.</p>
      </div>
    </div>
  );
}
