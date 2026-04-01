export default function StartupStudio() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">What we need from Startup Studio</h2>

      <div className="space-y-8">
        {[
          { need: "Capital to build and scale", detail: "The $100K investment funds our platform build, infrastructure, and expansion beyond UNL to universities nationally." },
          { need: "Mentorship for university partnerships", detail: "We need guidance navigating data governance, institutional relationships, and open-source licensing." },
          { need: "Dedicated time and structure", detail: "12 hours a week of focused team time, lab space, and the accountability to ship consistently." },
          { need: "Legal and business formation", detail: "Entity formation, student data privacy compliance, and the business fundamentals to do this right." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-[#cc0000] text-white flex items-center justify-center font-bold text-xl shrink-0 mt-1">
              {i + 1}
            </div>
            <div>
              <p className="text-2xl font-bold">{item.need}</p>
              <p className="text-xl text-gray-600 mt-1">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
