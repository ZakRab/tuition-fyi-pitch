export default function KaiStory() {
  return (
    <div className="w-full max-w-5xl mx-auto px-16 pt-8">
      <div className="flex items-center gap-14">
        <div className="shrink-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">This is Leo</h2>
          <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden">
            <img src="/leo.png" alt="Leo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="pt-2">
          <ul className="space-y-6 text-4xl leading-relaxed">
            <li>He's from Brazil, and had one requirement: <span className="font-bold">affordability.</span></li>
            <li>He tried cost calculators but his $2,000 consulting firm told him: <span className="text-[#cc0000] font-bold">&ldquo;this is fake, you pay more.&rdquo;</span></li>
            <li>Application fees in USD cost 5–6× his currency.</li>
          </ul>
          <p className="text-4xl mt-8">
            He paid <span className="text-[#cc0000] font-bold">$2,000</span> to learn what he really needed: <span className="">what a school actually costs.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
