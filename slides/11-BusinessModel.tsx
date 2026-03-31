export default function BusinessModel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why This
      </p>
      <h2 className="text-5xl font-bold mb-10">How We Make Money</h2>

      <p className="text-xl text-gray-600 mb-10 max-w-3xl">
        The open database is free forever. Trust is the product. Revenue comes from
        services built on top of the data.
      </p>

      <div className="grid grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-2xl p-8">
          <p className="text-sm text-gray-400 uppercase mb-2">Near-term</p>
          <h3 className="text-xl font-bold mb-3">Premium Tools</h3>
          <p className="text-gray-600">
            Personalized net cost calculator, country-specific cost predictions,
            currency-adjusted comparisons — built on verified public data.
          </p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-8">
          <p className="text-sm text-gray-400 uppercase mb-2">Near-term</p>
          <h3 className="text-xl font-bold mb-3">Peer Mentorship</h3>
          <p className="text-gray-600">
            Paid connections to recent graduates from your country who navigated this
            successfully. Trust-funded by the free data layer.
          </p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-8">
          <p className="text-sm text-gray-400 uppercase mb-2">Medium-term</p>
          <h3 className="text-xl font-bold mb-3">University Benchmarking</h3>
          <p className="text-gray-600">
            Universities pay for competitive intelligence — how their aid packages compare
            by country, program, and region.
          </p>
        </div>
        <div className="border border-gray-200 rounded-2xl p-8">
          <p className="text-sm text-gray-400 uppercase mb-2">Medium-term</p>
          <h3 className="text-xl font-bold mb-3">Financial Products</h3>
          <p className="text-gray-600">
            Currency exchange, international student loans, insurance — connecting students
            to services they genuinely need.
          </p>
        </div>
      </div>
    </div>
  );
}
