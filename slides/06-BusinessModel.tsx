export default function BusinessModel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8">
      <h2 className="text-6xl font-bold mb-3">Two revenue streams.</h2>
      <p className="text-2xl text-gray-500 mb-8">
        Families pay per school. Schools pay to be seen and to benchmark.
      </p>

      <div className="grid grid-cols-3 gap-5">
        <div className="bg-gray-50 rounded-2xl p-6">
          <p className="text-lg text-gray-500 uppercase font-semibold tracking-wider mb-3">Current Students</p>
          <h3 className="text-2xl font-bold mb-3">Contributors</h3>
          <ul className="text-lg text-gray-600 space-y-2 list-disc pl-5">
            <li>Upload financial documents</li>
            <li>Get a personalized ROI report</li>
            <li>Help students from their country</li>
          </ul>
          <p className="mt-5 text-2xl font-semibold text-gray-500">Free</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-6 border-2 border-[#cc0000]/30">
          <p className="text-lg text-[#cc0000] uppercase font-semibold tracking-wider mb-3">Prospective Families</p>
          <h3 className="text-2xl font-bold mb-3">Per-school report</h3>
          <ul className="text-lg text-gray-700 space-y-2 list-disc pl-5">
            <li>Verified cost data for one school</li>
            <li>What students from their country actually paid</li>
            <li>ROI &amp; affordability breakdown</li>
            <li>Avg family buys 5 reports</li>
          </ul>
          <p className="mt-5 text-2xl font-bold text-[#cc0000]">$50 / school</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-6 border-2 border-[#cc0000]/60">
          <p className="text-lg text-[#cc0000] uppercase font-semibold tracking-wider mb-3">Schools</p>
          <h3 className="text-2xl font-bold mb-3">School Partner Platform</h3>
          <ul className="text-lg text-gray-700 space-y-2 list-disc pl-5">
            <li><span className="font-semibold">Visibility:</span> featured to matched intl students</li>
            <li><span className="font-semibold">Benchmark:</span> peer aid intelligence dashboard</li>
            <li>See exactly where you&rsquo;re priced out</li>
            <li>Replaces a fraction of agency spend</li>
          </ul>
          <p className="mt-5 text-2xl font-bold text-[#cc0000]">$50K / yr</p>
        </div>
      </div>

      <p className="text-lg text-center text-gray-500 mt-6">
        <span className="font-semibold text-gray-700">Schools never edit student-uploaded data.</span> Sponsored placement is clearly labeled and never outranks organic on cost.
      </p>
      <p className="text-lg text-center text-gray-600 mt-2">
        Consumer revenue funds growth from day one. School SaaS scales the business. <span className="font-semibold">Both feed the same data engine.</span>
      </p>
    </div>
  );
}
