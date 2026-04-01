export default function KaiStory() {
  return (
    <div className="w-full max-w-4xl mx-auto px-16 pt-8">
      <div className="flex items-start gap-14">
        <div className="shrink-0 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">This is Peng.</h2>
          <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden">
            <img src="/Peng.webp" alt="Peng" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="pt-2">
          <ul className="space-y-6 text-4xl leading-relaxed">
            <li>He&rsquo;s from China. His mom found an education agency. They paid <span className="text-[#cc0000] font-bold">$4,000</span>.</li>
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
