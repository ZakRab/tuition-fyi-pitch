export default function KaiStory() {
  return (
    <div className="w-full max-w-4xl mx-auto px-16">
      <div className="flex items-start gap-12">
        <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden shrink-0">
          <img src="/peng.jpg" alt="Peng" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-3xl text-gray-500 mb-6">This is Peng.</p>
          <ul className="space-y-6 text-4xl leading-relaxed">
            <li>From China. His mom found an education agency.</li>
            <li>They paid <span className="text-[#cc0000] font-bold">$4,000</span>.</li>
            <li>The agency picked his school: UNK.</li>
            <li>He&rsquo;d never heard of it. Couldn&rsquo;t find anyone there to talk to.</li>
            <li>18 months later, he transferred to UNL.</li>
          </ul>
          <p className="text-4xl text-[#cc0000] font-bold mt-8">
            $4,000 and 18 months. Wrong school.
          </p>
        </div>
      </div>
    </div>
  );
}
