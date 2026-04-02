export default function WhyThisExists() {
  return (
    <div className="w-full max-w-6xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Why does this happen?</h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-4xl font-bold text-[#cc0000] mb-3">Universities can't cater to everyone</h3>
          <ul className="text-3xl text-gray-600 space-y-2">
            <li>1.1M international students every year</li>
            <li>Cost comes down to tuition, boarding, scholarships, and family contribution</li>
          </ul>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#cc0000] mb-3">Many students have no connections</h3>
          <ul className="text-3xl text-gray-600 space-y-2">
            <li>International students trust international students</li>
            <li>Not everyone has this benefit</li>
          </ul>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#cc0000] mb-3">Solutions are lacking</h3>
          <ul className="text-3xl text-gray-600 space-y-2">
            <li>Agencies: cost $100-$4K and their commissions lead to bias</li>
            <li>University cost calculators: &ldquo;wildly inaccurate&rdquo;</li>
            <li>Everything else: Google, WhatsApp, hoping you know someone</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
