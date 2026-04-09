export default function WhyThisExists() {
  return (
    <div className="w-full max-w-6xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-3">Both sides are losing.</h2>
      <p className="text-2xl text-gray-500 mb-10">Cost opacity isn&rsquo;t just a student problem — it&rsquo;s a recruitment problem.</p>

      <div className="grid grid-cols-2 gap-10">
        <div className="bg-gray-50 rounded-2xl p-8">
          <p className="text-2xl text-[#cc0000] uppercase font-semibold tracking-wider mb-4">Students</p>
          <ul className="text-2xl text-gray-700 space-y-4 list-disc pl-5">
            <li>Calculators are <span className="font-semibold">wildly inaccurate</span></li>
            <li>Agencies cost <span className="font-semibold">$100–$4,000</span> and take commissions from schools</li>
            <li>No one to ask — international students <span className="font-semibold">trust other international students</span>, and most don&rsquo;t know any</li>
            <li>Pick wrong → lose savings, visa, and shot at the US</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border-2 border-[#cc0000]/20">
          <p className="text-2xl text-[#cc0000] uppercase font-semibold tracking-wider mb-4">Schools</p>
          <ul className="text-2xl text-gray-700 space-y-4 list-disc pl-5">
            <li>International enrollment is <span className="font-semibold">declining</span> — schools are scrambling for qualified applicants</li>
            <li>Can&rsquo;t prove their <span className="font-semibold">real cost-competitiveness</span> against peers</li>
            <li>Lose price-sensitive students they would&rsquo;ve actually been affordable for</li>
            <li>Pay agencies thousands per enrolled student with <span className="font-semibold">no transparency</span></li>
          </ul>
        </div>
      </div>

      <p className="text-3xl text-center mt-10 text-gray-700">
        The market is screaming for a neutral, verified source of cost truth. <span className="font-bold">Nobody has built it.</span>
      </p>
    </div>
  );
}
