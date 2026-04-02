export default function MarketSize() {
  return (
    <div className="w-full max-w-6xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-2">Market size</h2>
      <p className="text-2xl text-gray-400 mb-12">275K new international students annually</p>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-xl text-gray-500 uppercase font-semibold tracking-wider mb-3">DIY / Low-spend — 60%</p>
          <p className="text-5xl font-black text-gray-800 mb-2">165K</p>
          <p className="text-2xl text-gray-500 mb-6">students × <span className="font-semibold text-gray-700">$50</span></p>
          <p className="text-4xl font-bold text-gray-700">= $8.25M</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border-2 border-[#cc0000]/20">
          <p className="text-xl text-[#cc0000] uppercase font-semibold tracking-wider mb-3">Agency / High-spend — 40%</p>
          <p className="text-5xl font-black text-gray-800 mb-2">110K</p>
          <p className="text-2xl text-gray-500 mb-6">students × <span className="font-semibold text-gray-700">$1,500</span></p>
          <p className="text-4xl font-bold text-[#cc0000]">= $165M</p>
        </div>
      </div>

      <div className="flex items-baseline gap-4">
        <p className="text-3xl text-gray-500">Total addressable market</p>
        <p className="text-7xl font-black text-gray-900">~$173M</p>
      </div>
    </div>
  );
}
