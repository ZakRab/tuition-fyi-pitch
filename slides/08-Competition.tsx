export default function Competition() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Competition</h2>

      <div className="space-y-6">
        {[
          { name: "TuitionFit", what: "Crowdsourced financial aid data", gap: "Domestic students only" },
          { name: "Niche", what: "Student reviews + True Cost tool", gap: "Domestic, no verification" },
          { name: "Education Agencies", what: "End-to-end guidance ($100-$4K)", gap: "Expensive, earn commissions from schools" },
          { name: "WhatsApp / Reddit", what: "Students sharing info manually", gap: "Unstructured, ephemeral, unverified" },
        ].map((c, i) => (
          <div key={i} className="flex items-center gap-8 py-4 border-b border-gray-100">
            <p className="font-bold text-2xl w-52 shrink-0">{c.name}</p>
            <p className="text-2xl text-gray-600 flex-1">{c.what}</p>
            <p className="text-2xl text-[#cc0000] font-semibold text-right shrink-0">{c.gap}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 border-l-4 border-[#cc0000] pl-8 py-3 bg-gray-50 rounded-r-xl">
        <p className="text-2xl italic text-gray-700">
          &ldquo;I&rsquo;m 99% sure the agency has a deal with the university. They get a cut of my first year fees.&rdquo;
        </p>
        <p className="text-xl text-gray-400 mt-2">- Hamdan, India</p>
      </div>

      <p className="mt-8 text-3xl text-center font-semibold">
        Nobody does verified, crowdsourced cost data for international students.
      </p>
    </div>
  );
}
