export default function Roadmap() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Where we&rsquo;re going</h2>

      <div className="grid grid-cols-3 gap-10">
        <div>
          <p className="text-[#cc0000] font-bold text-xl uppercase tracking-wider mb-2">April 2026</p>
          <h3 className="text-3xl font-bold mb-6">Launch</h3>
          <ul className="space-y-3 text-2xl text-gray-600 list-disc list-outside pl-6">
            <li><strong>MVP is live now</strong> &mdash; <span className="text-[#cc0000] font-bold">tuition.fyi</span></li>
            <li>Top 50 schools pre-populated</li>
            <li>Launch at UNL</li>
          </ul>
        </div>
        <div>
          <p className="text-[#cc0000] font-bold text-xl uppercase tracking-wider mb-2">Summer 2026</p>
          <h3 className="text-3xl font-bold mb-6">Grow</h3>
          <ul className="space-y-3 text-2xl text-gray-600 list-disc list-outside pl-6">
            <li>1,000+ verified submissions</li>
            <li>Expand to the Big 10</li>
            <li>Press outreach</li>
          </ul>
        </div>
        <div>
          <p className="text-[#cc0000] font-bold text-xl uppercase tracking-wider mb-2">Fall 2026</p>
          <h3 className="text-3xl font-bold mb-6">Scale</h3>
          <ul className="space-y-3 text-2xl text-gray-600 list-disc list-outside pl-6">
            <li>Improve platform and add new features</li>
            <li>National expansion</li>
            <li>Launch paid access tier</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
