export default function Verification() {
  return (
    <div className="w-full max-w-5xl mx-auto px-12">
      <p className="text-sm font-semibold text-[#cc0000] uppercase tracking-widest mb-4">
        Why This
      </p>
      <h2 className="text-5xl font-bold mb-10">Stronger Than Levels.fyi</h2>

      <div className="grid grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Levels.fyi</h3>
          <ul className="space-y-3 text-lg text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">&#9675;</span>
              Offer letters & W2s
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">&#9675;</span>
              Company-specific, varied formats
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">&#9675;</span>
              Voluntary, self-reported first
            </li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-2xl p-8 border-2 border-[#cc0000]/20">
          <h3 className="text-2xl font-bold text-[#cc0000] mb-4">Openroll</h3>
          <ul className="space-y-3 text-lg text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-[#cc0000] mt-1">&#9679;</span>
              <strong>I-20 form</strong> &mdash; federal, standardized, government-issued
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#cc0000] mt-1">&#9679;</span>
              <strong>100% coverage</strong> &mdash; every F-1 student has one
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#cc0000] mt-1">&#9679;</span>
              <strong>I-20 + aid letter</strong> = verified net cost, unfalsifiable
            </li>
          </ul>
        </div>
      </div>

      <p className="text-lg text-gray-500 mt-10 text-center">
        Open-sourced data means journalists, researchers, and policy makers cite us &mdash; free distribution.
      </p>
    </div>
  );
}
