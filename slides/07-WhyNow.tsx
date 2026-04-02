export default function WhyNow() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16">
      <h2 className="text-6xl font-bold mb-12">Why now</h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-4xl font-bold text-[#cc0000] mb-3">The technology didn&rsquo;t exist before</h3>
          <ul className="text-3xl text-gray-600 space-y-2">
            <li>AI now makes document parsing and verification cheap and reliable</li>
            <li>We can build fast and begin marketing/outreach earlier than ever</li>
          </ul>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#cc0000] mb-3">The transparency wave is here</h3>
          <ul className="text-3xl text-gray-600 space-y-2">
            <li>Glassdoor did it for reviews. Levels.fyi did it for salaries with W-2s.</li>
            <li>Tuition is next, and no one has built it yet</li>
          </ul>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#cc0000] mb-3">High international enrollment</h3>
          <ul className="text-3xl text-gray-600 space-y-2">
            <li>Despite stricter foreign policy, there's 1.1M students stydying in the U.S.</li>
            <li>Evergreen market that has consistently increased over time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
