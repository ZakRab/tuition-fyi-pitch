export default function KaiStory() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16 pt-8">
      <div className="flex items-center gap-14">
        <div className="shrink-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">This is Peng</h2>
          <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden">
            <img src="/peng.png" alt="Peng" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="pt-2">
          <ul className="space-y-6 text-4xl leading-relaxed">
            <li>He&rsquo;s from China. His mom found an education agency. They paid <span className="text-[#cc0000] font-bold">$4,000</span>.</li>
            <li>The agency picked his school: <span className="font-bold">UNK</span>.</li>
            <li><span className="text-[#cc0000] font-bold">18 months</span> later, he transferred to <span className="font-bold">UNL</span>.</li>
          </ul>
          <p className="text-4xl mt-8">
            After $4,000 and 18 months, <span className="text-[#cc0000] font-bold">wrong school.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
