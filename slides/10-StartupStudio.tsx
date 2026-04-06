export default function StartupStudio() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">How we'll use capital</h2>

      <div className="space-y-8">
        {[
          { need: "Platform", detail: "Host our platform and pay for domain, compute, and storage." },
          { need: "AI Features", detail: "Fund the critical AI features we use for document parsing and matching" },
          { need: "Marketing", detail: "Digital marketing and local campaigns" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-2xl shrink-0 mt-1">
              {i + 1}
            </div>
            <div>
              <p className="text-4xl font-bold">{item.need}</p>
              <p className="text-3xl text-gray-500 mt-1">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
