export default function BusinessModel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Who pays</h2>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-lg text-gray-400 uppercase font-semibold tracking-wider mb-4">Current Students</p>
          <h3 className="text-3xl font-bold mb-4">Contribute data</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Submit I-20 + aid letter. Get full access + a token to pass forward.
          </p>
          <p className="mt-6 text-2xl font-semibold text-gray-400">Free</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-lg text-gray-400 uppercase font-semibold tracking-wider mb-4">Token Recipients</p>
          <h3 className="text-3xl font-bold mb-4">Referred access</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            Younger sibling, neighbor, family friend. Use token for full access.
          </p>
          <p className="mt-6 text-2xl font-semibold text-gray-400">Free</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border-2 border-[#cc0000]/20">
          <p className="text-lg text-[#cc0000] uppercase font-semibold tracking-wider mb-4">Prospective Families</p>
          <h3 className="text-3xl font-bold mb-4">Pay for access</h3>
          <p className="text-xl text-gray-600 leading-relaxed">
            No data to contribute yet. Pay ~$50. A fraction of what agencies charge.
          </p>
          <p className="mt-6 text-2xl font-bold text-[#cc0000]">Revenue</p>
        </div>
      </div>

      <p className="text-2xl text-gray-500 text-center">
        Everyone gets the free ROI calculator. The paywall gates the verified database.
      </p>
    </div>
  );
}
