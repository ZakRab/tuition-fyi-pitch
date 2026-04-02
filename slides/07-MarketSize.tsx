export default function MarketSize() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">The market</h2>

      <div className="grid grid-cols-3 gap-10 mb-12">
        <div className="text-center">
          <p className="text-7xl font-black text-[#cc0000]">1.1M</p>
          <p className="text-2xl text-gray-600 mt-2">international students in the U.S.</p>
        </div>
        <div className="text-center">
          <p className="text-7xl font-black text-[#cc0000]">$40B+</p>
          <p className="text-2xl text-gray-600 mt-2">contributed annually</p>
        </div>
        <div className="text-center">
          <p className="text-7xl font-black text-[#cc0000]">300K+</p>
          <p className="text-2xl text-gray-600 mt-2">new students every year</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-l-4 border-[#cc0000] pl-6">
          <p className="text-3xl font-bold">Evergreen cycle</p>
          <p className="text-2xl text-gray-600 mt-1">Every year, a new class of 300K+ students faces the same problem. The market renews itself annually.</p>
        </div>
        <div className="border-l-4 border-[#cc0000] pl-6">
          <p className="text-3xl font-bold">Expansion potential</p>
          <p className="text-2xl text-gray-600 mt-1">Start international, expand to domestic students. 20M+ enrolled in U.S. colleges. Same opacity, bigger TAM.</p>
        </div>
      </div>
    </div>
  );
}
