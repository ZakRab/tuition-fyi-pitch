export default function BusinessModel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Who pays</h2>

      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-xl text-gray-400 uppercase font-semibold tracking-wider mb-4">Current Students</p>
          <h3 className="text-3xl font-bold mb-4">Contribute data</h3>
          <ul className="text-xl text-gray-600 space-y-2">
            <li>Submit I-20 + aid letter</li>
            <li>Get full database access</li>
            <li>Get a token to pass on</li>
          </ul>
          <p className="mt-6 text-2xl font-semibold text-gray-400">Free</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-xl text-gray-400 uppercase font-semibold tracking-wider mb-4">Token Recipients</p>
          <h3 className="text-3xl font-bold mb-4">Referred access</h3>
          <ul className="text-xl text-gray-600 space-y-2">
            <li>Sibling, neighbor, family friend</li>
            <li>Use token for full access</li>
            <li>No data required</li>
          </ul>
          <p className="mt-6 text-2xl font-semibold text-gray-400">Free</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border-2 border-[#cc0000]/20">
          <p className="text-xl text-[#cc0000] uppercase font-semibold tracking-wider mb-4">Prospective Families</p>
          <h3 className="text-3xl font-bold mb-4">Pay for access</h3>
          <ul className="text-xl text-gray-600 space-y-2">
            <li>No data to contribute yet</li>
            <li>Pay ~$50 for full database</li>
            <li>Fraction of agency cost</li>
          </ul>
          <p className="mt-6 text-2xl font-bold text-[#cc0000]">Revenue</p>
        </div>
      </div>
    </div>
  );
}
