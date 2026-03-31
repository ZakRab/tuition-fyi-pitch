export default function PainPoints() {
  const points = [
    { stat: "10/10", label: "named cost transparency as their #1 pain" },
    { stat: "9/10", label: "had no one to talk to who\u2019d been through it" },
    { stat: "8/10", label: "found information overwhelming and scattered" },
    { stat: "9", label: "countries represented in our interviews" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why This
      </p>
      <h2 className="text-5xl font-bold mb-10">What Students Told Us</h2>

      <div className="grid grid-cols-2 gap-8 mb-10">
        {points.map((p, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="text-5xl font-black text-[#cc0000] leading-none min-w-[100px]">
              {p.stat}
            </span>
            <span className="text-xl text-gray-700 mt-2">{p.label}</span>
          </div>
        ))}
      </div>

      <div className="border-l-4 border-[#cc0000] pl-6 py-2">
        <p className="text-xl italic text-gray-600">
          &ldquo;99% of students in my country don&rsquo;t even try because the process is invisible to them.&rdquo;
        </p>
        <p className="text-sm text-gray-400 mt-2">
          &mdash; Firdaws, Tajikistan &middot; UNL student
        </p>
      </div>
    </div>
  );
}
