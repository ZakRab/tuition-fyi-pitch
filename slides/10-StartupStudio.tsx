export default function StartupStudio() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">What we need</h2>

      <div className="space-y-8">
        {[
          { need: "Capital", detail: "$100K to build the platform and expand nationally" },
          { need: "Mentorship", detail: "University partnerships, data governance, open-source licensing" },
          { need: "Structure", detail: "12 hrs/week team time, lab space, accountability to ship" },
          { need: "Legal support", detail: "Entity formation, student data privacy compliance" },
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
