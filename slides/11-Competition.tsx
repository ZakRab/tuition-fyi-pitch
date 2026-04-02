export default function Competition() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Competition</h2>

      <div className="space-y-5">
        {[
          { name: "TuitionFit", gap: "Domestic only" },
          { name: "Niche", gap: "Domestic, no verification" },
          { name: "Agencies ($100-$4K)", gap: "Earn commissions from schools" },
          { name: "WhatsApp / Reddit", gap: "Unstructured, unverified" },
        ].map((c, i) => (
          <div key={i} className="flex items-center justify-between py-4 border-b border-gray-100">
            <p className="font-bold text-3xl">{c.name}</p>
            <p className="text-2xl text-[#cc0000] font-semibold">{c.gap}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-3xl text-center font-semibold">
        Nobody does verified cost data for international students.
      </p>
    </div>
  );
}
