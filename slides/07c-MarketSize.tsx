export default function MarketSize() {
  return (
    <div className="w-full max-w-6xl mx-auto px-12">
      <h2 className="text-6xl font-bold mb-2">Market size</h2>
      <p className="text-xl text-gray-400 mb-7">
        Two compounding revenue streams against the same ~$50B market.
      </p>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="bg-gray-50 rounded-2xl p-5">
          <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-2">Consumer — Per-school reports</p>
          <p className="text-base text-gray-600 leading-snug mb-3">
            <span className="font-semibold">270K</span> new intl students/yr
            <span className="text-gray-400"> × </span>
            <span className="font-semibold">20%</span> convert
            <span className="text-gray-400"> × </span>
            <span className="font-semibold">5</span> schools avg
            <span className="text-gray-400"> × </span>
            <span className="font-semibold">$50</span>
          </p>
          <p className="text-3xl font-bold text-gray-800">≈ $13.5M ARR</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-5 border-2 border-[#cc0000]/30">
          <p className="text-sm text-[#cc0000] uppercase font-semibold tracking-wider mb-2">SaaS — School Partner Platform</p>
          <p className="text-base text-gray-600 leading-snug mb-3">
            <span className="font-semibold">200</span> schools
            <span className="text-gray-400"> × </span>
            <span className="font-semibold">$50K / yr</span>
            <span className="text-gray-400"> · mid-term</span>
          </p>
          <p className="text-3xl font-bold text-[#cc0000]">= $10M ARR</p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-2xl p-5 mb-4">
        <div className="flex items-baseline justify-between mb-3">
          <p className="text-xl text-gray-300">Mid-term combined ARR</p>
          <p className="text-5xl font-black text-white">~$23.5M</p>
        </div>
        <div className="border-t border-gray-700 pt-3 space-y-2">
          <div className="flex items-baseline justify-between">
            <p className="text-base text-gray-400">Mature US (500 schools + same consumer)</p>
            <p className="text-2xl font-bold text-white">$38.5M</p>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-base text-gray-400">Full US TAM (6,000 Title IV schools, 30% consumer)</p>
            <p className="text-2xl font-bold text-white">$328M</p>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-base text-gray-400">+ International expansion (UK, Canada, AUS)</p>
            <p className="text-2xl font-bold text-[#ff6b6b]">$700M+</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400">
        Reference: international students contribute <span className="font-semibold">$50B annually</span> to the US economy. Schools spend ~$3K per recruited student via agencies — we replace that line item.
      </p>
    </div>
  );
}
