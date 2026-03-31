export default function Problem() {
  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why This
      </p>
      <h2 className="text-5xl font-bold mb-10">The Problem</h2>
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        <div>
          <p className="text-6xl font-black text-[#cc0000]">1.1M</p>
          <p className="text-lg text-gray-600 mt-1">international students in the US</p>
        </div>
        <div>
          <p className="text-6xl font-black text-[#cc0000]">$40B+</p>
          <p className="text-lg text-gray-600 mt-1">annual economic contribution</p>
        </div>
        <div className="col-span-2 mt-4 space-y-4">
          <p className="text-xl leading-relaxed">
            These students make <strong>$50K&ndash;$200K+ decisions</strong> with almost no reliable cost data.
            Sticker price is misleading. Scholarships are opaque.
            University cost calculators are broken.
          </p>
          <p className="text-xl leading-relaxed">
            The only alternatives: <strong>Google + knowing one person</strong>,
            or paying an agency <strong>$100&ndash;$4,000</strong> that may steer you
            toward schools that pay them commissions.
          </p>
        </div>
      </div>
    </div>
  );
}
