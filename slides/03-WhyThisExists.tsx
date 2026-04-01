export default function WhyThisExists() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Why does this happen?</h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">Universities benefit from the opacity.</h3>
          <ul className="text-2xl text-gray-600 space-y-2">
            <li>1.1M international students, $40B+ annual contribution</li>
            <li>They pay full tuition. Less info = less leverage.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">Students are embarrassed to share.</h3>
          <ul className="text-2xl text-gray-600 space-y-2">
            <li>Cost varies wildly between students at the same school</li>
            <li>Nobody wants to admit they paid more. Everyone stays quiet.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#cc0000] mb-3">The alternatives have conflicts of interest.</h3>
          <ul className="text-2xl text-gray-600 space-y-2">
            <li>Agencies: $100-$4K, earn commissions from schools they recommend</li>
            <li>University cost calculators: &ldquo;wildly inaccurate&rdquo;</li>
            <li>Everything else: Google, WhatsApp, hoping you know someone</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
