export default function MarketSize() {
  return (
    <div className="w-full max-w-6xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-2">Market size</h2>
      <p className="text-2xl text-gray-400 mb-10">
        ~1,000 US schools actively recruit international students. They already spend on agencies, ads, and consultants.
      </p>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 rounded-2xl p-7">
          <p className="text-lg text-gray-500 uppercase font-semibold tracking-wider mb-3">Beachhead — Top 200 schools</p>
          <p className="text-5xl font-black text-gray-800 mb-2">200</p>
          <p className="text-2xl text-gray-500 mb-5">schools × <span className="font-semibold text-gray-700">$25K avg ACV</span></p>
          <p className="text-4xl font-bold text-gray-700">= $5M ARR</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-7 border-2 border-[#cc0000]/20">
          <p className="text-lg text-[#cc0000] uppercase font-semibold tracking-wider mb-3">US TAM — All recruiters</p>
          <p className="text-5xl font-black text-gray-800 mb-2">1,000</p>
          <p className="text-2xl text-gray-500 mb-5">schools × <span className="font-semibold text-gray-700">$30K avg ACV</span></p>
          <p className="text-4xl font-bold text-[#cc0000]">= $30M ARR</p>
        </div>
      </div>

      <div className="flex items-baseline gap-4 mb-3">
        <p className="text-2xl text-gray-500">Plus international expansion (UK, Canada, AUS):</p>
        <p className="text-4xl font-black text-gray-900">~$100M+</p>
      </div>

      <p className="text-xl text-gray-400">
        Reference: international students contribute <span className="font-semibold">$50B annually</span> to the US economy. Schools spend ~$3K per recruited student via agencies today — we replace that line item.
      </p>
    </div>
  );
}
