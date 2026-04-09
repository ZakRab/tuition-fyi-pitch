export default function BusinessModel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-8">
      <h2 className="text-6xl font-bold mb-3">Schools pay. Students don&rsquo;t.</h2>
      <p className="text-2xl text-gray-500 mb-10">
        Schools have the budget, the urgency, and the incentive to compete on cost transparency.
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-2xl p-7">
          <p className="text-xl text-gray-500 uppercase font-semibold tracking-wider mb-3">Students</p>
          <h3 className="text-3xl font-bold mb-4">Free, always</h3>
          <ul className="text-xl text-gray-600 space-y-2 list-disc pl-5">
            <li>Contribute their financial documents</li>
            <li>Get a personalized ROI report</li>
            <li>See what schools <em>actually</em> cost peers from their country</li>
          </ul>
          <p className="mt-6 text-2xl font-semibold text-gray-500">$0</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-7 border-2 border-[#cc0000]/30">
          <p className="text-xl text-[#cc0000] uppercase font-semibold tracking-wider mb-3">Schools — Core</p>
          <h3 className="text-3xl font-bold mb-4">Recruiting SaaS</h3>
          <ul className="text-xl text-gray-700 space-y-2 list-disc pl-5">
            <li>Cost-competitiveness dashboard vs. peer schools</li>
            <li>Qualified, opted-in international leads</li>
            <li>Surface scholarships to matched students</li>
            <li>Sponsor &amp; incentivize their own students to upload data</li>
          </ul>
          <p className="mt-6 text-2xl font-bold text-[#cc0000]">$10K–$50K / yr</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-7 border-2 border-[#cc0000]/60">
          <p className="text-xl text-[#cc0000] uppercase font-semibold tracking-wider mb-3">Schools — Enterprise</p>
          <h3 className="text-3xl font-bold mb-4">Strategic tier</h3>
          <ul className="text-xl text-gray-700 space-y-2 list-disc pl-5">
            <li>Custom country-level recruiting analytics</li>
            <li>API access &amp; dedicated CSM</li>
            <li>Co-marketing &amp; events</li>
            <li>Replaces 3rd-party recruiting agencies</li>
          </ul>
          <p className="mt-6 text-2xl font-bold text-[#cc0000]">$100K+ / yr</p>
        </div>
      </div>

      <p className="text-2xl text-center text-gray-600 mt-8">
        Schools become the data engine — they have <span className="font-semibold">every reason</span> to encourage students to contribute. We&rsquo;re Glassdoor for tuition; <span className="font-semibold">they</span> are the employers.
      </p>
    </div>
  );
}
